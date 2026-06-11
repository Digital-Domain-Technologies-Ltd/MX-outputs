#!/usr/bin/env python3
"""Validate that the repository's operational JSON parses.

A malformed JSON file (a trailing comma, a truncated write) breaks agents and
registries silently. This deterministic check parses every ``*.json`` under the
operational roots and reports the ones that fail. It is cheap, needs only the
standard library, and is wired into the SessionStart gate and CI.

The generated ``audit/`` tree is intentionally excluded — it is large and not
hand-maintained.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_ROOTS = [
    REPO_ROOT / "json",
    REPO_ROOT / "reginald",
    REPO_ROOT / ".well-known",
    REPO_ROOT / "mx-site",
    REPO_ROOT / "distributions",
]


def invalid_files(roots: list[Path] | None = None) -> list[tuple[Path, str]]:
    """Return ``(path, error)`` for every JSON file that fails to parse."""
    roots = roots if roots is not None else DEFAULT_ROOTS
    bad: list[tuple[Path, str]] = []
    seen: set[Path] = set()
    for root in roots:
        if not root.exists():
            continue
        for path in sorted(root.rglob("*.json")):
            if path in seen:
                continue
            seen.add(path)
            try:
                json.loads(path.read_text(encoding="utf-8"))
            except (ValueError, OSError) as exc:
                bad.append((path, str(exc)))
    return bad


def main() -> int:
    bad = invalid_files()
    if not bad:
        print("check-json-valid: all operational JSON files parse.")
        return 0
    print("check-json-valid: FAILED — malformed JSON:", file=sys.stderr)
    for path, error in bad:
        rel = path.relative_to(REPO_ROOT)
        print(f"  {rel}: {error}", file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
