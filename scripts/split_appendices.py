#!/usr/bin/env python3
"""Publish per-appendix site pages from the consolidated appendices source.

This is the publishing half of the appendices pipeline (Option C). The single
hand-maintained source is ``html/books/appendices/mx-appendices.html``; this
script slices it back into the 22 focused, addressable site pages
``mx-site/books/appendices/appendix-*.html`` that the sitemap, llms.txt, and
in-book links point at. Maintain ONE file, publish many.

Per appendix it:
* reads the section (``id``, ``data-description``, ``<h1>`` title, body) from
  the consolidated source;
* removes the ``apx-<letter>-`` anchor namespacing so the page's internal
  fragment links match the original public URLs (e.g. ``#recipe-1``);
* wraps it in a consistent page template — canonical URL, description,
  shared ``appendix.css``, quick-navigation, and the code-block copy-button
  script — marked as a generated file.

Deterministic: sorted, no timestamps. The generated pages must not be
hand-edited; edit the consolidated source and re-run.

Usage
-----
    python3 scripts/split_appendices.py            # regenerate the 22 pages
    python3 scripts/split_appendices.py --check     # fail if any are stale
"""

from __future__ import annotations

import argparse
import html as html_lib
import json
import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SOURCE = REPO_ROOT / "html" / "books" / "appendices" / "mx-appendices.html"
OUTPUT_DIR = REPO_ROOT / "mx-site" / "books" / "appendices"
CANONICAL_BASE = "https://mx.allabout.network/books/appendices"
RAW_BASE = (
    "https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd"
    "/MX-outputs/main/mx-site/books/appendices"
)

_SECTION = re.compile(
    r'<section id="appendix-([a-z])" class="appendix"'
    r'(?: data-description="([^"]*)")?>\n'
    r"<h1>(.*?)</h1>\n"
    r"(.*?)\n</section>",
    re.S,
)

# Copy-button behaviour, identical on every appendix page (template boilerplate).
COPY_SCRIPT = """  <script>
    // Add copy buttons to all code blocks
    document.addEventListener('DOMContentLoaded', function() {
      const wrappedBlocks = document.querySelectorAll('div.sourceCode');
      const standaloneBlocks = document.querySelectorAll('pre[data-role="code-block"]:not(.sourceCode)');
      wrappedBlocks.forEach(function(block) {
        addCopyButton(block, function(block) {
          const codeElement = block.querySelector('code');
          let text = '';
          const spans = codeElement.querySelectorAll('span[id^="cb"]');
          spans.forEach(function(span) {
            Array.from(span.childNodes).forEach(function(node) {
              if (node.nodeType === Node.TEXT_NODE) { text += node.textContent; }
              else if (node.nodeName !== 'A') { text += node.textContent; }
            });
          });
          return text;
        });
      });
      standaloneBlocks.forEach(function(block) {
        addCopyButton(block, function(block) {
          const codeElement = block.querySelector('code');
          return codeElement ? codeElement.textContent : block.textContent;
        });
      });
      function addCopyButton(block, extractTextFn) {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.setAttribute('aria-label', 'Copy code to clipboard');
        button.addEventListener('click', function() {
          const text = extractTextFn(block);
          navigator.clipboard.writeText(text).then(function() {
            button.textContent = 'Copied';
            button.classList.add('copied');
            setTimeout(function() { button.textContent = 'Copy'; button.classList.remove('copied'); }, 2000);
          }).catch(function(err) {
            console.error('Failed to copy:', err);
            button.textContent = 'Failed';
            setTimeout(function() { button.textContent = 'Copy'; }, 2000);
          });
        });
        block.insertBefore(button, block.firstChild);
      }
    });
  </script>"""


def parse_sections(source: str) -> list[tuple[str, str, str, str]]:
    """Return ``(letter, title, description, body)`` for each appendix."""
    out = []
    for letter, description, title, body in _SECTION.findall(source):
        out.append((letter, html_lib.unescape(title), description, body.strip()))
    return out


def denamespace(body: str, letter: str) -> str:
    """Strip the ``apx-<letter>-`` prefix so public fragment URLs are restored."""
    prefix = f"apx-{letter}-"
    body = body.replace(f'id="{prefix}', 'id="')
    body = body.replace(f'href="#{prefix}', 'href="#')
    return body


def build_jsonld(letter: str, title: str, description: str, position: int) -> str:
    """schema.org TechArticle JSON-LD for one appendix page (deterministic)."""
    data: dict = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "name": title,
    }
    if description:
        data["description"] = description
    data.update(
        {
            "url": f"{CANONICAL_BASE}/appendix-{letter}.html",
            "author": {
                "@type": "Person",
                "name": "Tom Cranstoun",
                "email": "info@cognovamx.com",
                "url": "https://allabout.network",
            },
            "inLanguage": "en-GB",
            "isPartOf": {
                "@type": "Book",
                "name": "MX — The Appendices",
                "author": {"@type": "Person", "name": "Tom Cranstoun"},
                "url": "https://mx.allabout.network/books/appendices",
            },
            "position": str(position),
        }
    )
    body = json.dumps(data, indent=2, ensure_ascii=False)
    return f'<script type="application/ld+json">\n{body}\n</script>'


def quick_nav(letters: list[str]) -> str:
    links = " |\n        ".join(
        f'<a href="appendix-{l}.html">{l.upper()}</a>' for l in letters
    )
    return (
        '<nav class="appendix-navigation" role="navigation" aria-label="Appendix Navigation">\n'
        '    <p><a href="index.html">← Back to Appendices Index</a></p>\n'
        f"    <p>Quick navigation:\n        {links}\n    </p>\n"
        "</nav>"
    )


def _yaml_dq(s: str) -> str:
    """Double-quote a scalar as a YAML value, escaping backslash and quote."""
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def source_frontmatter(letter: str, title: str, description: str) -> str:
    """The MX-SOURCE-FRONTMATTER comment every served mx-site page carries.

    Emitted by the splitter so the splitter is the single source: the served page
    already carries the verbatim YAML the hub's check-source-frontmatter-present
    gate requires, so no separate backfill step is needed - and a backfill would
    inject a volatile `modified` date that breaks this script's own --check. The
    block is intentionally dateless, so re-runs stay byte-identical. The classify()
    contract only needs the START/END sentinels and a YAML body that parses.
    """
    runbook = (
        "Generated by scripts/split_appendices.py from the consolidated appendices "
        "source; the HTML is the canonical source for this YAML and there is no "
        "separate markdown source. Regenerate with split_appendices.py; do not hand-edit."
    )
    body = "\n".join([
        f"title: {_yaml_dq(title)}",
        f"description: {_yaml_dq(description)}",
        'author: "Tom Cranstoun"',
        "",
        "mx:",
        "  status: published",
        "  contentType: info-doc",
        "  audience: [humans, machines]",
        f"  canonicalUri: {RAW_BASE}/appendix-{letter}.html",
        f"  servedAt: {CANONICAL_BASE}/appendix-{letter}.html",
        "  robots: noindex",
        f"  runbook: {_yaml_dq(runbook)}",
    ])
    return (
        "  <!-- MX-SOURCE-FRONTMATTER:START -->\n"
        f"<!--\n---\n{body}\n---\n-->\n"
        "  <!-- MX-SOURCE-FRONTMATTER:END -->"
    )


def render_page(
    letter: str, title: str, description: str, body: str, letters: list[str]
) -> str:
    title_esc = html_lib.escape(title)
    desc_esc = html_lib.escape(description, quote=True)
    nav = quick_nav(letters)
    position = letters.index(letter) + 1
    jsonld = build_jsonld(letter, title, description, position)
    return f"""<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB" xml:lang="en-GB">
<head>
  <meta name="mx:cog" content="v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html">
{source_frontmatter(letter, title, description)}
  <!-- GENERATED FILE - do not edit.
       Source: html/books/appendices/mx-appendices.html
       Regenerate: python3 scripts/split_appendices.py -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <meta name="author" content="Tom Cranstoun" />
  <meta name="description" content="{desc_esc}" />
  <!-- Appendices are companion content to the books, not standalone destinations: noindex, nofollow per the appendices policy. -->
  <meta name="robots" content="noindex, nofollow" />
  <link rel="canonical" href="{CANONICAL_BASE}/appendix-{letter}.html">
  <link rel="ai-usage" type="application/json" href="/AI-USAGE.json" title="MX AI Usage Declaration">
  <link rel="llms-txt" href="/llms.txt">
  <link rel="stylesheet" href="appendix.css">
  <title>{title_esc}</title>
  {jsonld}
</head>
<body>
{nav}
<hr>
<header id="title-block-header">
<h1 class="title">{title_esc}</h1>
</header>
{denamespace(body, letter)}
<hr>
<nav class="appendix-navigation" role="navigation" aria-label="Appendix Navigation">
    <p><a href="index.html">← Back to Appendices Index</a></p>
</nav>
{COPY_SCRIPT}
</body>
</html>
"""


def build_pages() -> dict[str, str]:
    sections = parse_sections(SOURCE.read_text(encoding="utf-8"))
    letters = [letter for letter, _, _, _ in sections]
    return {
        letter: render_page(letter, title, description, body, letters)
        for letter, title, description, body in sections
    }


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument(
        "--check",
        action="store_true",
        help="Exit 1 if any generated page is missing or out of date.",
    )
    args = parser.parse_args(argv)

    pages = build_pages()
    if args.check:
        stale = []
        for letter, html in pages.items():
            path = OUTPUT_DIR / f"appendix-{letter}.html"
            current = path.read_text(encoding="utf-8") if path.exists() else ""
            if current != html:
                stale.append(path.name)
        if stale:
            print("stale appendix pages (re-run split_appendices.py): " + ", ".join(sorted(stale)))
            return 1
        print(f"All {len(pages)} appendix pages up to date.")
        return 0

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for letter, html in pages.items():
        (OUTPUT_DIR / f"appendix-{letter}.html").write_text(html, encoding="utf-8")
    print(f"Wrote {len(pages)} appendix pages to {OUTPUT_DIR}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
