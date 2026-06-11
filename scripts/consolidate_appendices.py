#!/usr/bin/env python3
"""Consolidate the standalone appendix HTML files into one manuscript.

The appendices were published as 22 separate pandoc-generated pages under
``mx-site/books/appendices/appendix-*.html``. This one-off, deterministic
migration folds them into a single hand-maintainable manuscript,
``html/books/appendices/mx-appendices.html``, so the two books can link into
one canonical appendices document instead of 22 generated files.

What it does per appendix
-------------------------
* Reads the title from ``<h1 class="title">``.
* Takes the content between the title-block ``</header>`` and the bottom
  ``<nav class="appendix-navigation">`` (so the prev/next standalone-page
  navigation is dropped, but the per-appendix table of contents is kept).
* Namespaces every ``id="…"`` and local ``href="#…"`` inside that content
  with an ``apx-<letter>-`` prefix, so internal anchors keep working and do
  not collide across appendices in the single document.
* Wraps it in ``<section id="appendix-<letter>"><h1>Title</h1>…</section>``.

The output carries an MX source-frontmatter comment and a master table of
contents. It is deterministic (sorted input, no timestamps): re-running on
the same sources produces byte-identical output, so the result can be
committed and, from then on, hand-maintained directly.

Usage
-----
    python3 scripts/consolidate_appendices.py
    python3 scripts/consolidate_appendices.py --check   # fail if out of date
"""

from __future__ import annotations

import argparse
import html as html_lib
import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SOURCE_DIR = REPO_ROOT / "mx-site" / "books" / "appendices"
OUTPUT = REPO_ROOT / "html" / "books" / "appendices" / "mx-appendices.html"

_TITLE = re.compile(r'<h1 class="title">(.*?)</h1>', re.S)
_HEADER_END = re.compile(r'<header id="title-block-header">.*?</header>', re.S)
_BOTTOM_NAV = '<nav class="appendix-navigation"'
_ID_ATTR = re.compile(r'(\sid=")([^"]+)(")')
_HREF_FRAG = re.compile(r'(\shref="#)([^"]+)(")')


def appendix_files() -> list[tuple[str, Path]]:
    """Return ``(letter, path)`` for each appendix-*.html, sorted by letter."""
    out = []
    for path in SOURCE_DIR.glob("appendix-*.html"):
        stem = path.stem  # e.g. appendix-a
        letter = stem.split("-", 1)[1]
        if len(letter) != 1 or not letter.isalpha():
            continue  # skip appendix-index and anything non a-z
        out.append((letter, path))
    out.sort(key=lambda pair: pair[0])
    return out


def extract_title(doc: str) -> str:
    """Plain-text title from the appendix's <h1 class="title">."""
    m = _TITLE.search(doc)
    if not m:
        return "Appendix"
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", m.group(1))).strip()


def extract_content(doc: str) -> str:
    """Body between the title-block header and the bottom page navigation."""
    header = _HEADER_END.search(doc)
    start = header.end() if header else doc.find("<body>") + len("<body>")
    end = doc.rfind(_BOTTOM_NAV)
    if end == -1 or end < start:
        end = doc.rfind("</body>")
    return doc[start:end].strip()


def namespace_anchors(content: str, letter: str) -> str:
    """Prefix ids and local fragment hrefs so they are unique per appendix."""
    prefix = f"apx-{letter}-"
    content = _ID_ATTR.sub(lambda m: f'{m.group(1)}{prefix}{m.group(2)}{m.group(3)}', content)
    content = _HREF_FRAG.sub(lambda m: f'{m.group(1)}{prefix}{m.group(2)}{m.group(3)}', content)
    return content


def build_section(letter: str, title: str, content: str) -> str:
    content = namespace_anchors(content, letter)
    return (
        f'<section id="appendix-{letter}" class="appendix">\n'
        f"<h1>{html_lib.escape(title)}</h1>\n"
        f"{content}\n"
        f"</section>"
    )


def render(appendices: list[tuple[str, str, str]]) -> str:
    """Render the consolidated document from ``(letter, title, content)``."""
    toc = "\n".join(
        f'<li><a href="#appendix-{letter}">{html_lib.escape(title)}</a></li>'
        for letter, title, _ in appendices
    )
    sections = "\n\n".join(
        build_section(letter, title, content)
        for letter, title, content in appendices
    )
    return f"""<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB" xml:lang="en-GB">
<head>
  <meta name="mx:cog" content="v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html">
  <!-- MX-SOURCE-FRONTMATTER:START -->
<!--
---
title: "MX — The Appendices"
description: "Consolidated appendices for MX: The Handbook and MX: The Protocols. Canonical hand-maintained HTML; built once from the former standalone appendix pages."
author: "Tom Cranstoun"
mx:
  status: active
  contentType: book-appendices
  audience: [humans, machines]
  book: "Shared"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/html/books/appendices/mx-appendices.html
  runbook: "Canonical hand-maintained HTML. No upstream markdown. Edit this file directly. scripts/consolidate_appendices.py records how it was first assembled."
---
-->
  <!-- MX-SOURCE-FRONTMATTER:END -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <meta name="author" content="Tom Cranstoun" />
  <title>MX — The Appendices</title>
</head>
<body>
<header id="title-block-header">
<h1 class="title">MX — The Appendices</h1>
</header>
<nav id="appendices-toc" role="navigation" aria-label="Appendices">
<h2>Contents</h2>
<ul>
{toc}
</ul>
</nav>

{sections}
</body>
</html>
"""


def build() -> str:
    appendices = [
        (letter, extract_title(doc), extract_content(doc))
        for letter, path in appendix_files()
        for doc in [path.read_text(encoding="utf-8")]
    ]
    return render(appendices)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument(
        "--check",
        action="store_true",
        help="Exit 1 if the output file is missing or out of date.",
    )
    args = parser.parse_args(argv)

    rendered = build()
    if args.check:
        current = OUTPUT.read_text(encoding="utf-8") if OUTPUT.exists() else ""
        if current != rendered:
            print("mx-appendices.html is out of date; re-run consolidate_appendices.py")
            return 1
        print("mx-appendices.html is up to date.")
        return 0

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(rendered, encoding="utf-8")
    count = rendered.count('class="appendix"')
    print(f"Wrote {OUTPUT} ({count} appendices, {len(rendered):,} bytes).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
