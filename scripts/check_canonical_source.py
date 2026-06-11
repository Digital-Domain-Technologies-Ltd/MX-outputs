#!/usr/bin/env python3
"""Tripwire: fail if a canonical book file looks machine-generated.

The book manuscripts under ``html/books/**`` are declared canonical,
hand-maintained HTML (see SOUL.md). They are no longer produced by the
upstream pandoc pipeline. If that pipeline runs again and overwrites them, the
telltale ``<meta name="generator" content="pandoc">`` reappears.

This check scans the book files for that marker (and any other configured
generator signatures) and exits non-zero if one is found — a cheap signal that
someone regenerated a file that is supposed to be edited by hand. Wire it into
CI and the SessionStart hook.

Usage
-----
    python3 scripts/check_canonical_source.py
"""

from __future__ import annotations

import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
BOOKS_DIR = REPO_ROOT / "html" / "books"

# Substrings that betray a regenerated file. Case-insensitive match.
GENERATOR_SIGNATURES = [
    'name="generator" content="pandoc"',
]


def offending_files(books_dir: Path = BOOKS_DIR) -> list[tuple[Path, str]]:
    """Return ``(path, signature)`` for every book file that looks generated."""
    hits = []
    for path in sorted(books_dir.rglob("*.html")):
        text = path.read_text(encoding="utf-8", errors="ignore").lower()
        for signature in GENERATOR_SIGNATURES:
            if signature.lower() in text:
                hits.append((path, signature))
    return hits


def main() -> int:
    hits = offending_files()
    if not hits:
        print("check-canonical-source: html/books is hand-maintained (no generator markers).")
        return 0
    print("check-canonical-source: FAILED — these files look regenerated:", file=sys.stderr)
    for path, signature in hits:
        rel = path.relative_to(REPO_ROOT)
        print(f"  {rel}: contains '{signature}'", file=sys.stderr)
    print(
        "\nhtml/books/** is canonical hand-maintained source. A generator marker "
        "means the upstream pipeline overwrote a file. Restore the hand-maintained "
        "version and disable the generator.",
        file=sys.stderr,
    )
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
