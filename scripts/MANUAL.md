---
title: "MX Output Scripts — Manual"
description: "Operator manual for the scripts in this folder: the README index generator and the deterministic manuscript-uniqueness indexer."
author: Tom Cranstoun
created: 2026-06-11
modified: 2026-06-11
version: "1.0"
mx:
  status: active
  contentType: manual
  audience: [humans, machines]
  tags: [scripts, manual, manuscript, uniqueness, index, determinism, tooling]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/scripts/MANUAL.md
  purpose: "Tell an operator or agent how to run the output scripts, what they read, what they write, and how to read the results."
  stability: stable
  runbook: "Reference manual. Read before running anything in scripts/."
  x-mx-contextProvides: ["How to run the MX output scripts and interpret their output"]
---

# MX Output Scripts — Manual

This folder holds the build and utility scripts for the `mx-outputs`
repository. Everything here reads committed artefacts and writes indexes or
reports; nothing here is hand-authored content. Two tools live here.

| Script | Language | Reads | Writes |
|---|---|---|---|
| `generate-index.sh` | bash | the whole repo tree | `README.md` (the master file index) |
| `manuscript_uniqueness.py` | python3 | the book manuscripts | `json/manuscript-index.json`, `scripts/manuscript-uniqueness-report.md` |
| `consolidate_appendices.py` | python3 | `mx-site/books/appendices/appendix-*.html` | `html/books/appendices/mx-appendices.html` |
| `split_appendices.py` | python3 | `html/books/appendices/mx-appendices.html` | `mx-site/books/appendices/appendix-*.html` |
| `check_canonical_source.py` | python3 | `html/books/**/*.html` | exit code (CI tripwire) |
| `check_json_valid.py` | python3 | operational `*.json` | exit code (CI) |
| `session_check.py` | python3 | the index + book/appendix files | stdout status (SessionStart) |

---

## `generate-index.sh`

Regenerates the top-level `README.md`, which is an auto-generated index of
every output directory and file. Run it after adding or removing outputs:

```bash
./scripts/generate-index.sh
```

It is idempotent — running it without changing any files leaves `README.md`
unchanged. The header of the generated README says as much.

---

## `manuscript_uniqueness.py`

The book manuscripts in this repository share a common lineage:

```
html/books/handbook/mx-handbook.html
html/books/protocols/mx-protocols.html
html/books/appendices/mx-appendices.html
```

Where the same paragraph appears verbatim in both books, the series reads as
one padded text rather than two distinct works. This tool indexes every
chapter and paragraph in each book and reports the long paragraphs that are
byte-for-byte identical across more than one book — the paragraphs to rewrite
so the books are unique.

It has no third-party dependencies (Python 3 standard library only).

### Running it

```bash
python3 scripts/manuscript_uniqueness.py                 # index + report
python3 scripts/manuscript_uniqueness.py --min-words 150 # raise the bar
python3 scripts/manuscript_uniqueness.py --as-of 2026-06-11
python3 scripts/manuscript_uniqueness.py --no-incremental
python3 scripts/manuscript_uniqueness.py --check         # CI gate
```

### Options

| Flag | Default | Meaning |
|---|---|---|
| `--min-words N` | `100` | Flag identical paragraphs with **strictly more than** `N` words. |
| `--as-of YYYY-MM-DD` | today (UTC) | Date stamped on changed sections when git has no commit date for a manuscript. |
| `--no-incremental` | off | Ignore any prior index and re-analyse every section from scratch. |
| `--ignore PATH` | `scripts/manuscript-uniqueness-ignore.txt` | Ignore list of paragraph hashes to exclude from all duplicate reporting. |
| `--index-out PATH` | `json/manuscript-index.json` | Where to write the JSON index. |
| `--report-out PATH` | `scripts/manuscript-uniqueness-report.md` | Where to write the Markdown report. |
| `--check` | off | Exit non-zero if any cross-book **or** within-book duplicates are found. |
| `--quiet` | off | Suppress the stdout summary. |

### What it produces

**`json/manuscript-index.json`** — the full, deterministic index, stored
alongside the repository's other JSON exports. It contains:

- `min_words` and `threshold_tiers` — the active threshold and the count of
  cross-book duplicates at 50/75/100/150/200 words.
- `last_changed` — each manuscript's last-changed date.
- `manuscripts[]` — for each book, its `last_changed`, a `content_sha`, and
  every chapter with its `section_sha`, `last_changed`, and per-paragraph
  records (`index`, `word_count`, `hash`, `excerpt`).
- `duplicates[]` — the cross-book identical paragraphs over the threshold,
  longest first, each with every location it appears in.

**`scripts/manuscript-uniqueness-report.md`** — the human-readable version:
the threshold table, the ranked list of cross-book paragraphs to rewrite,
and the within-book (cross-chapter) duplicates per book.

### Two kinds of duplicate

The tool reports two distinct problems:

- **Cross-book** — a paragraph that appears verbatim in *both* books. These
  make the two-book series read as one padded text. Fix by rewriting the
  paragraph in at least one book.
- **Within-book (cross-chapter)** — a paragraph that appears verbatim in two
  or more *different chapters of the same book*. These make a single book
  repeat itself. Fix by rewriting or consolidating. A paragraph repeated
  twice inside the *same* chapter is not flagged.

Both honour `--min-words` and the ignore list, and both are gated by
`--check`.

### The ignore list

Some repetition is intentional — boilerplate, legal notices, a defined term
restated on purpose. List those paragraphs' SHA-256 hashes in the ignore file
(default `scripts/manuscript-uniqueness-ignore.txt`) and they are excluded
from every duplicate count, the threshold table, and the `--check` gate. The
format is one hash per line; blank lines and `#` comments are allowed. Each
flagged paragraph's hash is shown in the report (the `code` after the word
count) and in the index, so adding one is copy-and-paste. The applied hashes
are recorded in the index under `ignore` for transparency.

### How chapters and paragraphs are read

- A **chapter** is everything under an `<h1>`. Paragraphs before the first
  `<h1>` are collected into a synthetic `(front matter)` chapter so nothing
  is lost.
- A **paragraph** is the text inside a `<p>`, with nested inline tags
  (`<a>`, `<em>`, `<sup>` …) flattened to their text and all whitespace
  collapsed. Two paragraphs that differ only in source line-wrapping count as
  identical.
- Word counts come from that normalised text. **Identity, however, ignores
  case, punctuation, and whitespace**: two paragraphs that differ only in
  capitalisation, punctuation, or spacing produce the same hash and are
  reported as duplicates. The `hash` is a SHA-256 of that canonical form, so
  the hashes you copy into the ignore list are case/punctuation-insensitive
  too.

### Thresholds

The default threshold is `> 100` words. Lower it to catch more, raise it to
catch only the longest blocks. The report's **threshold table** shows the
trade-off at a glance so you can pick a level without re-running:

| More than N words | Typical count (current corpus) |
|---|---|
| 50 | 126 |
| 75 | 50 |
| 100 | 17 |
| 150 | 2 |
| 200 | 0 |

### Incremental indexing and the last-changed date

Each manuscript carries a **last-changed date** — its git commit date, or the
`--as-of` value when git cannot supply one. The tool records that date at the
manuscript level and at every chapter, and uses it to avoid redundant work:

1. It loads the previously written index (unless `--no-incremental`).
2. For each chapter it computes a content signature (`section_sha`).
3. A chapter whose signature is unchanged is **skipped** — its paragraph
   analysis and its recorded `last_changed` date are carried over verbatim.
4. A chapter whose signature changed (or is new) is **re-analysed** and
   stamped with the manuscript's current last-changed date.

The stdout summary reports how many sections were skipped versus re-analysed.
Those run-relative counts are deliberately **not** written into the index, so
the persisted JSON stays a pure function of content and dates.

### Determinism

The index is byte-identical on re-run given the same manuscripts, the same
prior index, and the same change dates. There are no wall-clock timestamps in
the output; dates come only from git or `--as-of`. This is why the index can
be committed and diffed: a change in the diff means a change in the books.

### Tests

```bash
python3 scripts/test_manuscript_uniqueness.py        # direct
python3 -m unittest scripts.test_manuscript_uniqueness
```

The suite covers text normalisation, chapter/paragraph extraction, threshold
boundaries, cross-book vs single-book detection, the threshold tiers, the
incremental skip/re-analyse logic and date preservation, and byte-level
determinism. A smoke test runs the indexer against the real manuscripts when
they are present.

### Continuous use

Wire `--check` into CI or a SessionStart hook to fail when the books drift
back toward each other above the chosen threshold:

```bash
python3 scripts/manuscript_uniqueness.py --check --quiet
```

---

## `consolidate_appendices.py`

A one-off, deterministic migration that folded the 22 standalone appendix
pages (`mx-site/books/appendices/appendix-*.html`) into a single
hand-maintainable manuscript, `html/books/appendices/mx-appendices.html`. Each
appendix becomes a `<section id="appendix-x">` with its internal anchors
namespaced (`apx-x-…`) so they stay unique in one document.

```bash
python3 scripts/consolidate_appendices.py          # rebuild the consolidated file
python3 scripts/consolidate_appendices.py --check   # fail if it is out of date
python3 scripts/test_consolidate_appendices.py      # unit tests
```

The consolidated file is now **canonical, hand-maintained HTML** — edit it
directly. The script is kept for provenance and is not part of any build; do
not expect to re-run it to pick up hand edits (it rebuilds from the original
standalone pages).

---

## `split_appendices.py`

The publishing half of the appendices pipeline. It regenerates the 22 focused
site pages (`mx-site/books/appendices/appendix-*.html`) **from** the
consolidated source, so you maintain one file and publish many. Each page
keeps its public URL and internal anchors, gains a consistent template
(canonical, description, `appendix.css`, quick-nav, copy-button script), and
is marked `GENERATED FILE — do not edit`. Each page also carries a schema.org
`TechArticle` JSON-LD block (name, description, canonical URL, author,
`isPartOf` the book, and position).

```bash
python3 scripts/split_appendices.py          # regenerate the 22 pages
python3 scripts/split_appendices.py --check   # fail if any are stale
python3 scripts/test_split_appendices.py      # unit tests
```

Workflow: edit `html/books/appendices/mx-appendices.html`, run
`split_appendices.py`, commit the source and the regenerated pages together.

---

## `check_canonical_source.py`

A tripwire. The book files under `html/books/**` are canonical hand-maintained
HTML; if the retired pandoc pipeline runs again it overwrites them and the
`<meta name="generator" content="pandoc">` marker reappears. This check fails
when it finds that marker, so an accidental regenerate is caught. It runs in
the SessionStart hook and is suitable for CI.

```bash
python3 scripts/check_canonical_source.py     # exit 1 if a book looks generated
```

---

## `check_json_valid.py`

Parses every operational `*.json` (under `json/`, `reginald/`, `.well-known/`,
`mx-site/`, `distributions/`) and fails if any is malformed. The generated
`audit/` tree is excluded. Cheap, stdlib-only; runs in the SessionStart gate
and CI.

```bash
python3 scripts/check_json_valid.py           # exit 1 on malformed JSON
```

---

## `session_check.py`

The single deterministic script the SessionStart hook runs before the session
does any inference or CPU-intensive work. It does the cheap checks first and
only does heavy work when a cheap check says it is needed:

1. **Tripwire** — `check_canonical_source` (fast file scan).
2. **JSON validity** — `check_json_valid` (every operational `*.json` parses).
3. **Freshness gate** — hashes the raw bytes of each book file and compares to
   the `file_sha` recorded in `json/manuscript-index.json`. If nothing changed,
   duplicate counts are read straight from the committed index — **no
   re-parsing**. Only a changed book triggers the full indexer (to `/tmp`).
4. **Appendix sync** — confirms the published pages still match the splitter's
   output from the consolidated source.
5. **Unit tests** — runs every script test suite.

```bash
python3 scripts/session_check.py            # informational, always exits 0
python3 scripts/session_check.py --strict   # exit 1 on any failure (CI)
python3 scripts/session_check.py --skip-tests
```

This is why the hook is cheap on an unchanged repo: the costly re-index is
gated behind a byte-hash comparison rather than run unconditionally.

### Continuous integration

`.github/workflows/checks.yml` runs `session_check.py --strict` on every push
to `main` and on pull requests. It fails the build if a canonical book
reappears as a generated file (the tripwire), if published appendices drift
from source, if any operational JSON is malformed, or if a tooling test fails.
This is the enforcement that stops a regenerated book from landing on a
protected branch — the external generator itself still has to be disabled at
source.
