#!/usr/bin/env python3
"""Deterministic session-start checks — run before any inference or heavy work.

The SessionStart hook calls this single script so a session begins with a known,
deterministic view of the repository, established cheaply and without invoking
the model. Its guiding rule: **do the cheap deterministic checks first, and only
do CPU-intensive work when a cheap check says it is needed.**

What it does, in order
----------------------
1. **Tripwire** (cheap) — fail-flag if any ``html/books/**`` file carries the
   pandoc ``generator`` marker (a sign the canonical books were regenerated).
2. **Freshness gate** (cheap) — hash the raw bytes of each book file and compare
   to the ``file_sha`` recorded in the committed index. If nothing changed, the
   duplicate counts are read straight from the committed index — **no
   re-parsing**. Only if a book changed does it run the full indexer (the
   CPU-intensive step), and then only to ``/tmp``.
3. **Appendix sync** (cheap) — confirm the published per-appendix pages still
   match what the splitter would produce from the consolidated source.
4. **Unit tests** (cheap) — run the script test suites so the tooling is known
   good for the session.

It is read-only with respect to tracked files. By default it always exits 0
(informational, never blocks a session); ``--strict`` makes it exit non-zero on
any failure, for CI.
"""

from __future__ import annotations

import argparse
import hashlib
import importlib.util
import json
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPTS = REPO_ROOT / "scripts"
INDEX_PATH = REPO_ROOT / "json" / "manuscript-index.json"
TMP_INDEX = Path("/tmp/manuscript-index.json")
TMP_REPORT = Path("/tmp/manuscript-uniqueness-report.md")

TEST_FILES = [
    "test_manuscript_uniqueness.py",
    "test_consolidate_appendices.py",
    "test_split_appendices.py",
    "test_check_canonical_source.py",
    "test_session_check.py",
]


def _load(module_name: str):
    spec = importlib.util.spec_from_file_location(module_name, SCRIPTS / f"{module_name}.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def file_sha(path: Path) -> str:
    """SHA-256 of the raw file bytes (no parsing)."""
    return hashlib.sha256(path.read_bytes()).hexdigest()


def read_index(path: Path = INDEX_PATH) -> dict | None:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return None


def stale_manuscripts(disk: list[tuple[str, str]], index: dict | None) -> list[str]:
    """Names whose on-disk byte-hash differs from the committed index.

    ``disk`` is ``[(name, file_sha)]``. A manuscript missing from the index, or
    with no recorded ``file_sha``, counts as stale.
    """
    prior = (
        {m["name"]: m.get("file_sha") for m in index.get("manuscripts", [])}
        if index
        else {}
    )
    return [name for name, sha in disk if prior.get(name) != sha]


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument(
        "--strict", action="store_true", help="Exit non-zero on any failure (CI)."
    )
    parser.add_argument(
        "--skip-tests", action="store_true", help="Do not run the unit test suites."
    )
    args = parser.parse_args(argv)

    mu = _load("manuscript_uniqueness")
    cc = _load("check_canonical_source")
    sa = _load("split_appendices")
    failures: list[str] = []

    # 1. Tripwire (cheap).
    offending = cc.offending_files()
    if offending:
        failures.append("canonical-source tripwire")
        print("session-check: TRIPWIRE — regenerated book file(s):", file=sys.stderr)
        for path, sig in offending:
            print(f"  {path.relative_to(REPO_ROOT)} ({sig})", file=sys.stderr)
    else:
        print("session-check: books are hand-maintained (no generator marker).")

    # 2. Freshness gate (cheap) → conditional re-index (CPU-intensive).
    index = read_index()
    disk = [(name, file_sha(path)) for name, path in mu.DEFAULT_MANUSCRIPTS if Path(path).exists()]
    stale = stale_manuscripts(disk, index)
    if not stale and index is not None:
        s = index.get("summary", {})
        print(
            f"session-check: books unchanged since last index — "
            f"{s.get('duplicate_paragraph_count', '?')} cross-book, "
            f"{s.get('within_book_duplicate_count', '?')} within-book duplicates "
            f"(cached; skipped re-index)."
        )
    else:
        reason = "no committed index" if index is None else f"changed: {', '.join(stale)}"
        print(f"session-check: re-indexing ({reason})…")
        result = subprocess.run(
            [
                sys.executable,
                str(SCRIPTS / "manuscript_uniqueness.py"),
                "--index-out", str(TMP_INDEX),
                "--report-out", str(TMP_REPORT),
            ],
            cwd=str(REPO_ROOT),
            capture_output=True,
            text=True,
        )
        sys.stdout.write(result.stdout)
        if result.returncode != 0:
            failures.append("manuscript indexer")
            sys.stderr.write(result.stderr)

    # 3. Appendix sync (cheap).
    try:
        pages = sa.build_pages()
        drifted = [
            f"appendix-{letter}.html"
            for letter, html in pages.items()
            if (sa.OUTPUT_DIR / f"appendix-{letter}.html").read_text(encoding="utf-8") != html
            if (sa.OUTPUT_DIR / f"appendix-{letter}.html").exists()
        ]
        if drifted:
            failures.append("appendix pages out of sync")
            print(
                "session-check: WARNING published appendices differ from source — "
                "run split_appendices.py: " + ", ".join(sorted(drifted)),
                file=sys.stderr,
            )
        else:
            print(f"session-check: {len(pages)} appendix pages in sync with source.")
    except Exception as exc:  # noqa: BLE001 - report, never crash the hook
        failures.append("appendix sync check")
        print(f"session-check: WARNING appendix sync check errored: {exc}", file=sys.stderr)

    # 4. Unit tests (cheap).
    if not args.skip_tests:
        passed = 0
        for test_file in TEST_FILES:
            result = subprocess.run(
                [sys.executable, str(SCRIPTS / test_file)],
                cwd=str(REPO_ROOT),
                capture_output=True,
                text=True,
            )
            if result.returncode == 0:
                passed += 1
            else:
                failures.append(test_file)
                print(f"session-check: TESTS FAILED in {test_file}", file=sys.stderr)
                sys.stderr.write(result.stderr[-1500:])
        print(f"session-check: {passed}/{len(TEST_FILES)} test suites passed.")

    if failures:
        print("session-check: issues — " + "; ".join(failures), file=sys.stderr)
        return 1 if args.strict else 0
    print("session-check: all checks passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
