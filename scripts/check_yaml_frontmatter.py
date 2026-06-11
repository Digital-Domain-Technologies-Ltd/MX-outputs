#!/usr/bin/env python3
"""Validate the YAML frontmatter in MX metadata and cog files.

Every ``*.mx.yaml.md`` folder-metadata file, every ``*.cog.md`` cog, and the
blog posts carry a YAML frontmatter block. A broken block (a bad indent, an
unquoted colon) makes the metadata unreadable to any consumer. This check
extracts each frontmatter block and confirms it parses as YAML.

PyYAML is required to parse. It is not part of the Python standard library, so
when it is absent this check reports itself skipped and does not fail — the CI
workflow installs PyYAML so the check is enforced there.
"""

from __future__ import annotations

import sys
from pathlib import Path

try:
    import yaml

    YAML_AVAILABLE = True
except ImportError:  # pragma: no cover - exercised only without PyYAML
    YAML_AVAILABLE = False

REPO_ROOT = Path(__file__).resolve().parent.parent


def extract_frontmatter(text: str) -> str | None:
    """Return the YAML block between the leading ``---`` fences, or None."""
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            return "\n".join(lines[1:i])
    return None  # no closing fence


def discover_files(repo_root: Path = REPO_ROOT) -> list[Path]:
    """Files that should carry YAML frontmatter (excluding the git dir)."""
    files: set[Path] = set()
    for pattern in ("*.mx.yaml.md", "*.cog.md"):
        for path in repo_root.rglob(pattern):
            if ".git" not in path.parts:
                files.add(path)
    blog = repo_root / "md" / "blog"
    if blog.exists():
        files.update(blog.glob("*.md"))
    return sorted(files)


def invalid_files(files: list[Path] | None = None) -> list[tuple[Path, str]]:
    """Return ``(path, error)`` for each file whose frontmatter is invalid.

    Files without a frontmatter block are skipped (not every ``.md`` has one).
    Returns an empty list when PyYAML is unavailable.
    """
    if not YAML_AVAILABLE:
        return []
    bad: list[tuple[Path, str]] = []
    for path in files if files is not None else discover_files():
        try:
            front = extract_frontmatter(path.read_text(encoding="utf-8"))
        except OSError as exc:
            bad.append((path, str(exc)))
            continue
        if front is None:
            continue
        try:
            yaml.safe_load(front)
        except yaml.YAMLError as exc:
            bad.append((path, str(exc).splitlines()[0]))
    return bad


def main() -> int:
    if not YAML_AVAILABLE:
        print("check-yaml-frontmatter: skipped (PyYAML not installed).")
        return 0
    bad = invalid_files()
    if not bad:
        print("check-yaml-frontmatter: all frontmatter blocks parse.")
        return 0
    print("check-yaml-frontmatter: FAILED — invalid frontmatter:", file=sys.stderr)
    for path, error in bad:
        print(f"  {path.relative_to(REPO_ROOT)}: {error}", file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
