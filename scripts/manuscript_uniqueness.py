#!/usr/bin/env python3
"""Index manuscript chapters and flag identical long paragraphs.

The MX programme ships two book-length manuscripts that share a common
lineage:

    html/books/handbook/mx-handbook.html
    html/books/protocols/mx-protocols.html

Where the same paragraph appears verbatim in both books the series reads as
one padded text rather than two distinct works. This tool builds a
deterministic index of every chapter and paragraph in each manuscript, then
reports the long paragraphs (more than ``--min-words`` words, default 209)
that are byte-for-byte identical across more than one book. Those are the
paragraphs that need rewriting to make the books unique.

Determinism
-----------
The tool reads only the manuscript files. It uses a fixed traversal order,
sorts every collection it emits, hashes paragraph text with SHA-256, and
writes no timestamps. Running it twice on the same inputs produces
byte-identical output, so the generated index can be committed and diffed.

Usage
-----
    python3 scripts/manuscript_uniqueness.py            # write index + report
    python3 scripts/manuscript_uniqueness.py --min-words 150
    python3 scripts/manuscript_uniqueness.py --check    # exit 1 if duplicates

The importable functions (``extract_chapters``, ``index_from_sources``,
``find_duplicates`` ...) carry no I/O so they can be unit-tested directly.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

TOOL_NAME = "scripts/manuscript_uniqueness.py"
TOOL_VERSION = "1.0.0"
DEFAULT_MIN_WORDS = 209

# Chapters are delimited by <h1>; everything below is captured as paragraphs.
CHAPTER_TAG = "h1"
PARAGRAPH_TAG = "p"
FRONT_MATTER_TITLE = "(front matter)"

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_MANUSCRIPTS = [
    ("handbook", REPO_ROOT / "html" / "books" / "handbook" / "mx-handbook.html"),
    ("protocols", REPO_ROOT / "html" / "books" / "protocols" / "mx-protocols.html"),
]
DEFAULT_INDEX_OUT = REPO_ROOT / "scripts" / "manuscript-index.json"
DEFAULT_REPORT_OUT = REPO_ROOT / "scripts" / "manuscript-uniqueness-report.md"

_WHITESPACE = re.compile(r"\s+")


# --------------------------------------------------------------------------
# Text helpers
# --------------------------------------------------------------------------
def normalize_text(text: str) -> str:
    """Collapse all runs of whitespace to single spaces and strip ends.

    This is the canonical form used for hashing and word counting, so two
    paragraphs that differ only in source-line wrapping count as identical.
    """
    return _WHITESPACE.sub(" ", text).strip()


def word_count(text: str) -> int:
    """Number of whitespace-separated tokens in ``text``."""
    return len(text.split())


def text_hash(text: str) -> str:
    """Stable SHA-256 of the normalized paragraph text."""
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def excerpt(text: str, words: int = 15) -> str:
    """First ``words`` tokens of ``text``, with an ellipsis if truncated."""
    tokens = text.split()
    if len(tokens) <= words:
        return " ".join(tokens)
    return " ".join(tokens[:words]) + " …"


# --------------------------------------------------------------------------
# HTML parsing
# --------------------------------------------------------------------------
class _ManuscriptParser(HTMLParser):
    """Extract ordered chapters and their paragraphs from a manuscript.

    A chapter is opened by every <h1>. Paragraphs (<p>) are attached to the
    chapter currently in scope. Paragraphs that appear before the first <h1>
    are gathered into a synthetic front-matter chapter so nothing is lost.
    Text inside nested inline tags (<a>, <em>, <sup> ...) is preserved.
    """

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.chapters: list[dict] = []
        self._current: dict | None = None
        self._capture: str | None = None
        self._depth = 0
        self._buffer: list[str] = []

    def handle_starttag(self, tag: str, attrs) -> None:  # noqa: ARG002
        if self._capture is None:
            if tag in (CHAPTER_TAG, PARAGRAPH_TAG):
                self._capture = tag
                self._depth = 1
                self._buffer = []
        elif tag == self._capture:
            # Defensive: same-named nesting should not occur in these books,
            # but track depth so we close on the matching tag.
            self._depth += 1

    def handle_endtag(self, tag: str) -> None:
        if self._capture is not None and tag == self._capture:
            self._depth -= 1
            if self._depth == 0:
                self._emit(self._capture, "".join(self._buffer))
                self._capture = None
                self._buffer = []

    def handle_data(self, data: str) -> None:
        if self._capture is not None:
            self._buffer.append(data)

    def _emit(self, tag: str, raw_text: str) -> None:
        text = normalize_text(raw_text)
        if tag == CHAPTER_TAG:
            chapter = {"title": text, "paragraphs": []}
            self.chapters.append(chapter)
            self._current = chapter
        elif tag == PARAGRAPH_TAG:
            if not text:
                return
            if self._current is None:
                self._current = {"title": FRONT_MATTER_TITLE, "paragraphs": []}
                self.chapters.append(self._current)
            self._current["paragraphs"].append(text)


def extract_chapters(html: str) -> list[dict]:
    """Parse ``html`` into a list of ``{title, paragraphs[]}`` chapters."""
    parser = _ManuscriptParser()
    parser.feed(html)
    parser.close()
    return parser.chapters


# --------------------------------------------------------------------------
# Indexing
# --------------------------------------------------------------------------
def index_from_sources(sources: list[tuple[str, str]]) -> list[dict]:
    """Build a per-manuscript index from ``(name, html)`` pairs.

    Returns a list of manuscript records. Each paragraph carries its index,
    word count, SHA-256 hash, and a short excerpt — everything needed to
    locate it without storing the full text twice.
    """
    manuscripts: list[dict] = []
    for name, html in sources:
        chapters_out = []
        for c_index, chapter in enumerate(extract_chapters(html)):
            paragraphs_out = []
            for p_index, text in enumerate(chapter["paragraphs"]):
                paragraphs_out.append(
                    {
                        "index": p_index,
                        "word_count": word_count(text),
                        "hash": text_hash(text),
                        "excerpt": excerpt(text),
                    }
                )
            chapters_out.append(
                {
                    "index": c_index,
                    "title": chapter["title"],
                    "paragraph_count": len(paragraphs_out),
                    "paragraphs": paragraphs_out,
                }
            )
        manuscripts.append(
            {
                "name": name,
                "chapter_count": len(chapters_out),
                "chapters": chapters_out,
            }
        )
    return manuscripts


def find_duplicates(manuscripts: list[dict], min_words: int) -> list[dict]:
    """Find paragraphs over ``min_words`` words shared by 2+ manuscripts.

    A paragraph "needs fixing" when its normalized text is identical across
    more than one book and it is long enough to matter (strictly more than
    ``min_words`` words). The result is sorted deterministically: longest
    paragraphs first, then by hash, with occurrences in stable book/chapter
    order.
    """
    by_hash: dict[str, dict] = {}
    for manuscript in manuscripts:
        for chapter in manuscript["chapters"]:
            for para in chapter["paragraphs"]:
                if para["word_count"] <= min_words:
                    continue
                entry = by_hash.setdefault(
                    para["hash"],
                    {
                        "hash": para["hash"],
                        "word_count": para["word_count"],
                        "excerpt": para["excerpt"],
                        "occurrences": [],
                    },
                )
                entry["occurrences"].append(
                    {
                        "book": manuscript["name"],
                        "chapter_index": chapter["index"],
                        "chapter_title": chapter["title"],
                        "paragraph_index": para["index"],
                    }
                )

    duplicates = []
    for entry in by_hash.values():
        books = {occ["book"] for occ in entry["occurrences"]}
        if len(books) < 2:
            continue  # unique to a single book → not a cross-book duplicate
        entry["occurrences"].sort(
            key=lambda o: (o["book"], o["chapter_index"], o["paragraph_index"])
        )
        entry["book_count"] = len(books)
        duplicates.append(entry)

    duplicates.sort(key=lambda e: (-e["word_count"], e["hash"]))
    return duplicates


def build_report_payload(
    sources: list[tuple[str, str]], min_words: int
) -> dict:
    """Assemble the full deterministic index + duplicate report payload."""
    manuscripts = index_from_sources(sources)
    duplicates = find_duplicates(manuscripts, min_words)
    return {
        "tool": TOOL_NAME,
        "tool_version": TOOL_VERSION,
        "min_words": min_words,
        "summary": {
            "manuscript_count": len(manuscripts),
            "chapter_count": sum(m["chapter_count"] for m in manuscripts),
            "paragraph_count": sum(
                c["paragraph_count"]
                for m in manuscripts
                for c in m["chapters"]
            ),
            "duplicate_paragraph_count": len(duplicates),
        },
        "manuscripts": manuscripts,
        "duplicates": duplicates,
    }


def render_report_markdown(payload: dict) -> str:
    """Human-readable Markdown report of the duplicates that need fixing."""
    lines: list[str] = []
    lines.append("# Manuscript Uniqueness Report")
    lines.append("")
    lines.append(
        f"Generated by `{payload['tool']}` v{payload['tool_version']} "
        "(deterministic; no timestamps)."
    )
    lines.append("")
    summary = payload["summary"]
    lines.append(
        f"- Manuscripts indexed: **{summary['manuscript_count']}**"
    )
    lines.append(f"- Chapters indexed: **{summary['chapter_count']}**")
    lines.append(f"- Paragraphs indexed: **{summary['paragraph_count']}**")
    lines.append(
        f"- Threshold: paragraphs longer than **{payload['min_words']}** words"
    )
    lines.append(
        "- Cross-book identical paragraphs needing a fix: "
        f"**{summary['duplicate_paragraph_count']}**"
    )
    lines.append("")

    if not payload["duplicates"]:
        lines.append(
            "No long paragraphs are shared verbatim across the manuscripts. "
            "The books are unique at this threshold. ✓"
        )
        lines.append("")
        return "\n".join(lines)

    lines.append("## Paragraphs to rewrite")
    lines.append("")
    lines.append(
        "Each entry below appears word-for-word in more than one book. "
        "Rewrite it in at least one book so the series reads as distinct "
        "works."
    )
    lines.append("")
    for n, dup in enumerate(payload["duplicates"], start=1):
        lines.append(
            f"### {n}. {dup['word_count']} words "
            f"· {dup['book_count']} books · `{dup['hash'][:12]}`"
        )
        lines.append("")
        lines.append(f"> {dup['excerpt']}")
        lines.append("")
        lines.append("Appears in:")
        for occ in dup["occurrences"]:
            lines.append(
                f"- **{occ['book']}** — chapter {occ['chapter_index']} "
                f"“{occ['chapter_title']}”, "
                f"paragraph {occ['paragraph_index']}"
            )
        lines.append("")
    return "\n".join(lines)


# --------------------------------------------------------------------------
# I/O + CLI
# --------------------------------------------------------------------------
def load_sources(
    manuscripts: list[tuple[str, Path]]
) -> list[tuple[str, str]]:
    """Read manuscript files into ``(name, html)`` pairs."""
    sources = []
    for name, path in manuscripts:
        sources.append((name, Path(path).read_text(encoding="utf-8")))
    return sources


def _serialise_index(payload: dict) -> str:
    """Stable JSON serialisation (sorted keys, trailing newline)."""
    return json.dumps(payload, ensure_ascii=False, indent=2, sort_keys=True) + "\n"


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument(
        "--min-words",
        type=int,
        default=DEFAULT_MIN_WORDS,
        help=(
            "Flag identical paragraphs with strictly more than this many "
            f"words (default: {DEFAULT_MIN_WORDS})."
        ),
    )
    parser.add_argument(
        "--index-out",
        type=Path,
        default=DEFAULT_INDEX_OUT,
        help="Path for the JSON index (default: scripts/manuscript-index.json).",
    )
    parser.add_argument(
        "--report-out",
        type=Path,
        default=DEFAULT_REPORT_OUT,
        help="Path for the Markdown report.",
    )
    parser.add_argument(
        "--check",
        action="store_true",
        help="Exit 1 if any cross-book duplicate paragraphs are found.",
    )
    parser.add_argument(
        "--quiet",
        action="store_true",
        help="Do not print the summary to stdout.",
    )
    args = parser.parse_args(argv)

    sources = load_sources(DEFAULT_MANUSCRIPTS)
    payload = build_report_payload(sources, args.min_words)

    args.index_out.write_text(_serialise_index(payload), encoding="utf-8")
    args.report_out.write_text(
        render_report_markdown(payload), encoding="utf-8"
    )

    dup_count = payload["summary"]["duplicate_paragraph_count"]
    if not args.quiet:
        print(
            f"Indexed {payload['summary']['chapter_count']} chapters / "
            f"{payload['summary']['paragraph_count']} paragraphs across "
            f"{payload['summary']['manuscript_count']} manuscripts."
        )
        print(
            f"Cross-book identical paragraphs over {args.min_words} words: "
            f"{dup_count}."
        )
        print(f"Index written to {args.index_out}")
        print(f"Report written to {args.report_out}")

    if args.check and dup_count:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
