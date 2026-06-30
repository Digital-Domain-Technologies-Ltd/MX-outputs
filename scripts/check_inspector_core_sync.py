#!/usr/bin/env python3
"""Drift guard: the MX inspector core must be one source of truth.

The detect/classify core of the MX Inspector ships as two physical copies:

* ``mx-site/js/mx-inspector-core.js`` — the **canonical** copy, loaded by the
  audit-site inspector page.
* ``distributions/mx-inspector/v1.0.0/lib/mx-inspector-core.js`` — the
  copy bundled into the self-contained CLI distribution.

The audit-site and the CLI therefore run the *same* code only if these two
files stay identical. They have drifted before (cosmetic comment wording), and
only the distribution copy is exercised by the CLI test pack — so a real
divergence in the canonical copy could ship to the audit-site untested.

This check compares the two files byte-for-byte and exits non-zero if they
differ. Edit the canonical file, then copy it across. Wire into the
SessionStart gate and CI.

Usage
-----
    python3 scripts/check_inspector_core_sync.py
"""

from __future__ import annotations

import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
CANONICAL = REPO_ROOT / "mx-site" / "js" / "mx-inspector-core.js"
MIRROR = (
    REPO_ROOT
    / "distributions"
    / "mx-inspector"
    / "v1.0.0"
    / "lib"
    / "mx-inspector-core.js"
)


def first_diff_line(a: str, b: str) -> int | None:
    """1-based line number of the first difference, or ``None`` if identical."""
    a_lines = a.splitlines()
    b_lines = b.splitlines()
    for i, (x, y) in enumerate(zip(a_lines, b_lines), start=1):
        if x != y:
            return i
    if len(a_lines) != len(b_lines):
        return min(len(a_lines), len(b_lines)) + 1
    return None


def drift(canonical: Path = CANONICAL, mirror: Path = MIRROR) -> str | None:
    """Return a human-readable reason the two copies differ, or ``None``.

    A missing file is itself a drift (the copies cannot be in sync if one is
    absent).
    """
    if not canonical.exists():
        return f"canonical copy missing: {canonical}"
    if not mirror.exists():
        return f"mirror copy missing: {mirror}"
    a = canonical.read_bytes()
    b = mirror.read_bytes()
    if a == b:
        return None
    line = first_diff_line(
        a.decode("utf-8", errors="replace"), b.decode("utf-8", errors="replace")
    )
    where = f" (first differs at line {line})" if line is not None else ""
    return f"copies differ{where}"


def main() -> int:
    reason = drift()
    if reason is None:
        print(
            "check-inspector-core-sync: audit-site and CLI cores are byte-identical."
        )
        return 0
    print(f"check-inspector-core-sync: FAILED — {reason}", file=sys.stderr)
    print(
        f"\n{CANONICAL.relative_to(REPO_ROOT)} is the canonical PDF inspector core. "
        f"After editing it, copy it over\n{MIRROR.relative_to(REPO_ROOT)} so the "
        "audit-site and the shipped CLI run identical code:\n"
        f"  cp {CANONICAL.relative_to(REPO_ROOT)} {MIRROR.relative_to(REPO_ROOT)}",
        file=sys.stderr,
    )
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
