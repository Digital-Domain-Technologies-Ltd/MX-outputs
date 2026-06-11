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

Incremental indexing
--------------------
Each manuscript carries a *last changed date* (its git commit date, or the
``--as-of`` date when git is unavailable). The index records that date at the
manuscript level and at the section (chapter) level. On every run the tool
loads the previously written index and compares each chapter's content
signature against it:

* A section whose signature is unchanged is **skipped** — its paragraph
  analysis and its recorded ``last_changed`` date are carried over verbatim.
* A section whose signature changed (or is new) is re-analysed and stamped
  with the manuscript's current last-changed date.

This makes the date the only stateful field: unchanged content keeps its old
date, so re-running on an unchanged manuscript with the prior index in place
produces byte-identical output.

Determinism
-----------
Fixed traversal order, SHA-256 content hashes, sorted output, no wall-clock
timestamps in the payload. Dates come from git or the explicit ``--as-of``
value, never from file mtimes. Given the same manuscripts, the same prior
index, and the same change dates, the output is byte-identical.

Usage
-----
    python3 scripts/manuscript_uniqueness.py               # write index + report
    python3 scripts/manuscript_uniqueness.py --min-words 150
    python3 scripts/manuscript_uniqueness.py --as-of 2026-06-11
    python3 scripts/manuscript_uniqueness.py --no-incremental
    python3 scripts/manuscript_uniqueness.py --check       # exit 1 on duplicates

The importable functions carry no file I/O so they can be unit-tested
directly; git and disk access live only in the CLI layer.
"""

from __future__ import annotations

import argparse
import datetime
import hashlib
import json
import re
import subprocess
import sys
from html.parser import HTMLParser
from pathlib import Path

TOOL_NAME = "scripts/manuscript_uniqueness.py"
TOOL_VERSION = "2.2.0"
DEFAULT_MIN_WORDS = 100
# Word thresholds reported as a distribution so the operator can see how the
# shared-paragraph count grows as the bar is lowered, and pick a level.
DEFAULT_TIERS = [50, 75, 100, 150, 200]

# Chapters are delimited by <h1>; everything below is captured as paragraphs.
CHAPTER_TAG = "h1"
PARAGRAPH_TAG = "p"
FRONT_MATTER_TITLE = "(front matter)"

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_MANUSCRIPTS = [
    ("handbook", REPO_ROOT / "html" / "books" / "handbook" / "mx-handbook.html"),
    ("protocols", REPO_ROOT / "html" / "books" / "protocols" / "mx-protocols.html"),
    ("appendices", REPO_ROOT / "html" / "books" / "appendices" / "mx-appendices.html"),
]
# The index lives with the repo's other JSON exports (see SOUL.md / json/).
DEFAULT_INDEX_OUT = REPO_ROOT / "json" / "manuscript-index.json"
DEFAULT_REPORT_OUT = REPO_ROOT / "scripts" / "manuscript-uniqueness-report.md"
# Operator-maintained list of paragraph hashes to exclude from all duplicate
# reporting (one sha256 per line; '#' comments and blank lines allowed).
DEFAULT_IGNORE = REPO_ROOT / "scripts" / "manuscript-uniqueness-ignore.txt"

_WHITESPACE = re.compile(r"\s+")
# Anything that is not a word character (letters, digits, underscore) or
# whitespace is treated as punctuation and dropped for matching purposes.
_PUNCTUATION = re.compile(r"[^\w\s]", re.UNICODE)


# --------------------------------------------------------------------------
# Text helpers
# --------------------------------------------------------------------------
def normalize_text(text: str) -> str:
    """Collapse all runs of whitespace to single spaces and strip ends.

    This is the *display* form: case and punctuation are preserved, so
    excerpts and word counts read naturally.
    """
    return _WHITESPACE.sub(" ", text).strip()


def canonical_text(text: str) -> str:
    """Case-, punctuation-, and whitespace-insensitive *matching* form.

    Two paragraphs that differ only in capitalisation, punctuation, or
    whitespace canonicalise to the same string, so the duplicate detector
    treats them as identical. Punctuation is replaced with a space (not
    deleted) so that ``end.Start`` does not collapse into one token.
    """
    lowered = _PUNCTUATION.sub(" ", text.lower())
    return _WHITESPACE.sub(" ", lowered).strip()


def word_count(text: str) -> int:
    """Number of whitespace-separated tokens in ``text``."""
    return len(text.split())


def text_hash(text: str) -> str:
    """Stable SHA-256 of the given text."""
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def canonical_hash(text: str) -> str:
    """Identity hash used for duplicate matching (ignores case/punct/space)."""
    return text_hash(canonical_text(text))


def excerpt(text: str, words: int = 15) -> str:
    """First ``words`` tokens of ``text``, with an ellipsis if truncated."""
    tokens = text.split()
    if len(tokens) <= words:
        return " ".join(tokens)
    return " ".join(tokens[:words]) + " …"


def section_signature(title: str, paragraphs: list[str]) -> str:
    """Content hash for a chapter — changes iff its text changes."""
    return text_hash(title + "\n\n" + "\n".join(paragraphs))


# --------------------------------------------------------------------------
# HTML parsing
# --------------------------------------------------------------------------
class _ManuscriptParser(HTMLParser):
    """Extract ordered chapters and their paragraphs from a manuscript.

    A chapter is opened by every <h1>. Paragraphs (<p>) attach to the chapter
    in scope; paragraphs before the first <h1> go to a synthetic front-matter
    chapter. Text inside nested inline tags (<a>, <em>, <sup> ...) is kept.
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
# Indexing (pure — no I/O)
# --------------------------------------------------------------------------
def build_paragraph_records(paragraphs: list[str]) -> list[dict]:
    """Per-paragraph index records (index, word_count, hash, excerpt)."""
    return [
        {
            "index": p_index,
            "word_count": word_count(text),
            # Identity ignores case, punctuation, and whitespace so that
            # paragraphs differing only in those are detected as duplicates.
            "hash": canonical_hash(text),
            "excerpt": excerpt(text),
        }
        for p_index, text in enumerate(paragraphs)
    ]


def _prior_sections_by_signature(prior_manuscript: dict | None) -> dict:
    """Map ``section_sha`` -> prior chapter record for reuse, if available."""
    if not prior_manuscript:
        return {}
    out = {}
    for chapter in prior_manuscript.get("chapters", []):
        sig = chapter.get("section_sha")
        if sig and sig not in out:
            out[sig] = chapter
    return out


def build_manuscript_record(
    name: str,
    html: str,
    change_date: str,
    prior_manuscript: dict | None = None,
) -> tuple[dict, dict]:
    """Index one manuscript, reusing unchanged sections from a prior index.

    Returns ``(record, stats)`` where stats counts skipped vs re-analysed
    sections. A section is skipped when its content signature matches the
    prior index: its paragraph records and ``last_changed`` date are carried
    over unchanged. Otherwise it is re-analysed and stamped with
    ``change_date``.
    """
    prior_by_sig = _prior_sections_by_signature(prior_manuscript)
    chapters = extract_chapters(html)

    chapters_out: list[dict] = []
    signatures: list[str] = []
    skipped = reanalysed = 0

    for c_index, chapter in enumerate(chapters):
        title = chapter["title"]
        paragraphs = chapter["paragraphs"]
        sig = section_signature(title, paragraphs)
        signatures.append(sig)

        prior = prior_by_sig.get(sig)
        if prior is not None:
            # Unchanged section: reuse paragraph analysis and original date.
            para_records = prior.get("paragraphs", build_paragraph_records(paragraphs))
            last_changed = prior.get("last_changed", change_date)
            skipped += 1
        else:
            para_records = build_paragraph_records(paragraphs)
            last_changed = change_date
            reanalysed += 1

        chapters_out.append(
            {
                "index": c_index,
                "title": title,
                "section_sha": sig,
                "last_changed": last_changed,
                "paragraph_count": len(para_records),
                "paragraphs": para_records,
            }
        )

    record = {
        "name": name,
        "last_changed": change_date,
        # content_sha hashes the parsed sections; file_sha hashes the whole
        # raw file, so a cheap byte-hash can gate whether a re-index is needed
        # at all without parsing the document.
        "content_sha": text_hash("\n".join(signatures)),
        "file_sha": text_hash(html),
        "chapter_count": len(chapters_out),
        "chapters": chapters_out,
    }
    stats = {
        "name": name,
        "sections_total": len(chapters_out),
        "sections_skipped": skipped,
        "sections_reanalysed": reanalysed,
    }
    return record, stats


def _prior_manuscript_by_name(prior_payload: dict | None, name: str) -> dict | None:
    if not prior_payload:
        return None
    for manuscript in prior_payload.get("manuscripts", []):
        if manuscript.get("name") == name:
            return manuscript
    return None


def index_from_sources(
    sources: list[tuple[str, str]],
    change_dates: dict[str, str],
    prior_payload: dict | None = None,
) -> tuple[list[dict], list[dict]]:
    """Index every ``(name, html)`` source. Returns ``(manuscripts, stats)``."""
    manuscripts: list[dict] = []
    stats: list[dict] = []
    for name, html in sources:
        record, stat = build_manuscript_record(
            name,
            html,
            change_dates.get(name, ""),
            _prior_manuscript_by_name(prior_payload, name),
        )
        manuscripts.append(record)
        stats.append(stat)
    return manuscripts, stats


def _group_long_paragraphs(
    manuscripts: list[dict], min_words: int, ignore: set[str]
) -> dict[str, dict]:
    """Group paragraphs over ``min_words`` words by hash, skipping ``ignore``.

    Each group records every location the paragraph appears in, across all the
    given manuscripts.
    """
    by_hash: dict[str, dict] = {}
    for manuscript in manuscripts:
        for chapter in manuscript["chapters"]:
            for para in chapter["paragraphs"]:
                if para["word_count"] <= min_words:
                    continue
                if para["hash"] in ignore:
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
    return by_hash


def find_duplicates(
    manuscripts: list[dict], min_words: int, ignore: set[str] | None = None
) -> list[dict]:
    """Find paragraphs over ``min_words`` words shared by 2+ manuscripts."""
    ignore = ignore or set()
    duplicates = []
    for entry in _group_long_paragraphs(manuscripts, min_words, ignore).values():
        books = {occ["book"] for occ in entry["occurrences"]}
        if len(books) < 2:
            continue  # unique to one book → not a cross-book duplicate
        entry["occurrences"].sort(
            key=lambda o: (o["book"], o["chapter_index"], o["paragraph_index"])
        )
        entry["book_count"] = len(books)
        duplicates.append(entry)

    duplicates.sort(key=lambda e: (-e["word_count"], e["hash"]))
    return duplicates


def find_within_book_duplicates(
    manuscripts: list[dict], min_words: int, ignore: set[str] | None = None
) -> dict[str, list[dict]]:
    """Per book, find paragraphs over ``min_words`` repeated across chapters.

    A within-book duplicate is a paragraph that appears verbatim in two or
    more *different* chapters of the same book. Returns a mapping of book name
    to its duplicate entries (books with none are omitted).
    """
    ignore = ignore or set()
    out: dict[str, list[dict]] = {}
    for manuscript in manuscripts:
        book_dups = []
        for entry in _group_long_paragraphs([manuscript], min_words, ignore).values():
            chapters = {occ["chapter_index"] for occ in entry["occurrences"]}
            if len(chapters) < 2:
                continue  # same chapter only → not cross-chapter
            entry["occurrences"].sort(
                key=lambda o: (o["chapter_index"], o["paragraph_index"])
            )
            entry["chapter_count"] = len(chapters)
            book_dups.append(entry)
        if book_dups:
            book_dups.sort(key=lambda e: (-e["word_count"], e["hash"]))
            out[manuscript["name"]] = book_dups
    return out


def duplicate_threshold_tiers(
    manuscripts: list[dict], thresholds: list[int], ignore: set[str] | None = None
) -> dict[str, int]:
    """Count cross-book identical paragraphs above each word threshold.

    Computed once from the full set of shared paragraphs, so the operator can
    see how lowering the bar changes the number of paragraphs to fix.
    """
    all_shared = find_duplicates(manuscripts, min_words=0, ignore=ignore)
    return {
        str(t): sum(1 for d in all_shared if d["word_count"] > t)
        for t in sorted(thresholds)
    }


def build_report_payload(
    sources: list[tuple[str, str]],
    min_words: int,
    change_dates: dict[str, str],
    prior_payload: dict | None = None,
    tiers: list[int] | None = None,
    ignore: set[str] | None = None,
) -> tuple[dict, dict]:
    """Assemble the index payload and the per-run incremental statistics.

    Returns ``(payload, run_stats)``. The ``payload`` is the deterministic
    index that gets persisted: it is a pure function of the manuscripts, the
    change dates, ``min_words``, ``tiers``, and the ``ignore`` set — never of
    whether a prior index happened to exist. ``run_stats`` carries the
    skipped/re-analysed counts, which describe *this run* (they flip depending
    on the prior index) and so are surfaced on stdout rather than written into
    the index.
    """
    ignore = ignore or set()
    manuscripts, stats = index_from_sources(sources, change_dates, prior_payload)
    duplicates = find_duplicates(manuscripts, min_words, ignore)
    within_book = find_within_book_duplicates(manuscripts, min_words, ignore)
    tier_counts = duplicate_threshold_tiers(
        manuscripts, tiers if tiers is not None else DEFAULT_TIERS, ignore
    )
    within_count = sum(len(v) for v in within_book.values())
    payload = {
        "tool": TOOL_NAME,
        "tool_version": TOOL_VERSION,
        "min_words": min_words,
        "threshold_tiers": tier_counts,
        "ignore": {"size": len(ignore), "hashes": sorted(ignore)},
        "summary": {
            "manuscript_count": len(manuscripts),
            "chapter_count": sum(m["chapter_count"] for m in manuscripts),
            "paragraph_count": sum(
                c["paragraph_count"] for m in manuscripts for c in m["chapters"]
            ),
            "duplicate_paragraph_count": len(duplicates),
            "within_book_duplicate_count": within_count,
        },
        "last_changed": {m["name"]: m["last_changed"] for m in manuscripts},
        "manuscripts": manuscripts,
        "duplicates": duplicates,
        "within_book_duplicates": within_book,
    }
    run_stats = {
        "sections_skipped": sum(s["sections_skipped"] for s in stats),
        "sections_reanalysed": sum(s["sections_reanalysed"] for s in stats),
        "per_manuscript": stats,
    }
    return payload, run_stats


def render_report_markdown(payload: dict) -> str:
    """Human-readable Markdown report of the duplicates that need fixing."""
    lines: list[str] = []
    lines.append("# Manuscript Uniqueness Report")
    lines.append("")
    lines.append(
        f"Generated by `{payload['tool']}` v{payload['tool_version']} "
        "(deterministic; dates from git/--as-of, no wall-clock timestamps)."
    )
    lines.append("")
    summary = payload["summary"]
    last_changed = payload.get("last_changed", {})
    lines.append(f"- Manuscripts indexed: **{summary['manuscript_count']}**")
    lines.append(f"- Chapters indexed: **{summary['chapter_count']}**")
    lines.append(f"- Paragraphs indexed: **{summary['paragraph_count']}**")
    if last_changed:
        dates = ", ".join(f"{k} {v}" for k, v in sorted(last_changed.items()))
        lines.append(f"- Last changed: {dates}")
    lines.append(
        f"- Threshold: paragraphs longer than **{payload['min_words']}** words"
    )
    lines.append(
        "- Cross-book identical paragraphs needing a fix: "
        f"**{summary['duplicate_paragraph_count']}**"
    )
    lines.append(
        "- Within-book (cross-chapter) duplicate paragraphs: "
        f"**{summary.get('within_book_duplicate_count', 0)}**"
    )
    ignore_size = payload.get("ignore", {}).get("size", 0)
    if ignore_size:
        lines.append(f"- Ignored paragraphs (operator list): **{ignore_size}**")
    lines.append("")

    tiers = payload.get("threshold_tiers", {})
    if tiers:
        lines.append("## Shared paragraphs by threshold")
        lines.append("")
        lines.append("| More than N words | Cross-book identical paragraphs |")
        lines.append("|---|---|")
        for t in sorted(tiers, key=int):
            mark = " ← current" if int(t) == payload["min_words"] else ""
            lines.append(f"| {t} | {tiers[t]}{mark} |")
        lines.append("")

    # ── Cross-book duplicates ────────────────────────────────────────────
    if not payload["duplicates"]:
        lines.append(
            "No long paragraphs are shared verbatim **across** the manuscripts. "
            "The books are unique at this threshold. ✓"
        )
        lines.append("")
    else:
        lines.append("## Cross-book paragraphs to rewrite")
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
                    f"“{occ['chapter_title']}”, paragraph {occ['paragraph_index']}"
                )
            lines.append("")

    # ── Within-book (cross-chapter) duplicates ───────────────────────────
    within = payload.get("within_book_duplicates", {})
    if not within:
        lines.append(
            "No long paragraphs are repeated **across chapters within** a "
            "single book at this threshold. ✓"
        )
        lines.append("")
    else:
        lines.append("## Within-book duplicates (cross-chapter)")
        lines.append("")
        lines.append(
            "Each entry below appears word-for-word in two or more chapters of "
            "the *same* book. Rewrite or consolidate so the book does not "
            "repeat itself."
        )
        lines.append("")
        for book in sorted(within):
            lines.append(f"### {book}")
            lines.append("")
            for n, dup in enumerate(within[book], start=1):
                lines.append(
                    f"**{n}. {dup['word_count']} words "
                    f"· {dup['chapter_count']} chapters · `{dup['hash'][:12]}`**"
                )
                lines.append("")
                lines.append(f"> {dup['excerpt']}")
                lines.append("")
                lines.append("Appears in:")
                for occ in dup["occurrences"]:
                    lines.append(
                        f"- chapter {occ['chapter_index']} "
                        f"“{occ['chapter_title']}”, paragraph {occ['paragraph_index']}"
                    )
                lines.append("")
    return "\n".join(lines)


# --------------------------------------------------------------------------
# I/O + CLI
# --------------------------------------------------------------------------
def parse_ignore_list(text: str) -> set[str]:
    """Parse an ignore file: one sha256 per line, '#' comments, blanks ok."""
    out: set[str] = set()
    for line in text.splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        out.add(line.split()[0].strip().lower())
    return out


def load_ignore_list(path: Path) -> set[str]:
    """Load operator ignore hashes from ``path``; empty set if absent."""
    try:
        return parse_ignore_list(Path(path).read_text(encoding="utf-8"))
    except OSError:
        return set()


def git_last_changed(path: Path, repo_root: Path) -> str:
    """Git commit date (YYYY-MM-DD) of ``path``, or "" if unavailable."""
    try:
        result = subprocess.run(
            ["git", "log", "-1", "--format=%cs", "--", str(path)],
            cwd=str(repo_root),
            capture_output=True,
            text=True,
            timeout=10,
            check=False,
        )
    except (OSError, subprocess.SubprocessError):
        return ""
    if result.returncode != 0:
        return ""
    return result.stdout.strip()


def resolve_change_date(path: Path, repo_root: Path, as_of: str) -> str:
    """Last-changed date for ``path``: git commit date, else ``as_of``."""
    return git_last_changed(path, repo_root) or as_of


def load_sources(manuscripts: list[tuple[str, Path]]) -> list[tuple[str, str]]:
    """Read manuscript files into ``(name, html)`` pairs."""
    return [(name, Path(path).read_text(encoding="utf-8")) for name, path in manuscripts]


def load_prior_index(path: Path) -> dict | None:
    """Load a previously written index for incremental reuse, or None."""
    try:
        return json.loads(Path(path).read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return None


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
            "Flag identical paragraphs with strictly more than this many words "
            f"(default: {DEFAULT_MIN_WORDS})."
        ),
    )
    parser.add_argument(
        "--as-of",
        default=datetime.date.today().isoformat(),
        help=(
            "Date stamped on changed sections when git provides no commit date "
            "(default: today, UTC date)."
        ),
    )
    parser.add_argument(
        "--no-incremental",
        action="store_true",
        help="Ignore any prior index; re-analyse every section from scratch.",
    )
    parser.add_argument(
        "--index-out",
        type=Path,
        default=DEFAULT_INDEX_OUT,
        help="Path for the JSON index (default: json/manuscript-index.json).",
    )
    parser.add_argument(
        "--report-out",
        type=Path,
        default=DEFAULT_REPORT_OUT,
        help="Path for the Markdown report.",
    )
    parser.add_argument(
        "--ignore",
        type=Path,
        default=DEFAULT_IGNORE,
        help=(
            "Path to an ignore list of paragraph hashes to exclude from all "
            "duplicate reporting (default: scripts/manuscript-uniqueness-ignore.txt)."
        ),
    )
    parser.add_argument(
        "--check",
        action="store_true",
        help="Exit 1 if any cross-book or within-book duplicates are found.",
    )
    parser.add_argument(
        "--quiet", action="store_true", help="Do not print the summary."
    )
    args = parser.parse_args(argv)

    sources = load_sources(DEFAULT_MANUSCRIPTS)
    change_dates = {
        name: resolve_change_date(path, REPO_ROOT, args.as_of)
        for name, path in DEFAULT_MANUSCRIPTS
    }
    prior_payload = None if args.no_incremental else load_prior_index(args.index_out)
    ignore = load_ignore_list(args.ignore)

    payload, run_stats = build_report_payload(
        sources, args.min_words, change_dates, prior_payload, ignore=ignore
    )

    args.index_out.parent.mkdir(parents=True, exist_ok=True)
    args.index_out.write_text(_serialise_index(payload), encoding="utf-8")
    args.report_out.parent.mkdir(parents=True, exist_ok=True)
    args.report_out.write_text(render_report_markdown(payload), encoding="utf-8")

    summary = payload["summary"]
    dup_count = summary["duplicate_paragraph_count"]
    within_count = summary["within_book_duplicate_count"]
    if not args.quiet:
        print(
            f"Indexed {summary['chapter_count']} chapters / "
            f"{summary['paragraph_count']} paragraphs across "
            f"{summary['manuscript_count']} manuscripts."
        )
        print(
            f"Sections: {run_stats['sections_reanalysed']} re-analysed, "
            f"{run_stats['sections_skipped']} skipped (unchanged)."
        )
        ignored = payload["ignore"]["size"]
        ignored_note = f" ({ignored} ignored)" if ignored else ""
        print(
            f"Over {args.min_words} words{ignored_note}: "
            f"{dup_count} cross-book, {within_count} within-book (cross-chapter)."
        )
        print(f"Index written to {args.index_out}")
        print(f"Report written to {args.report_out}")

    if args.check and (dup_count or within_count):
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
