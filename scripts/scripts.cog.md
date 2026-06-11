---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "MX Output Scripts — COG"
description: "Briefing for the build and utility scripts in mx-outputs/scripts: the README index generator and the deterministic manuscript-uniqueness indexer."
author: "Tom Cranstoun"
created: 2026-06-11
modified: 2026-06-11
version: "1.0"

cogHeader:
  version: v1
  spec: https://mx.allabout.network/cog.html
  runtime: https://mx.allabout.network/cog-runtime.html

mx:
  status: active
  contentType: info-doc
  x-mx-category: output-scripts
  audience: [humans, machines, agents]
  tags: [scripts, tooling, manuscript, uniqueness, index, determinism, cog]
  license: proprietary
  maintainer: "info@cognovamx.com"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/scripts/scripts.cog.md
  purpose: "Help an agent or operator understand and safely run the output scripts, and find the manual and the artefacts they produce."
  stability: stable
  runbook: >
    Read this before invoking anything in scripts/. For full operating
    detail see scripts/MANUAL.md. The deterministic indexer reads only the
    two book manuscripts and writes json/manuscript-index.json and
    scripts/manuscript-uniqueness-report.md; it never edits the manuscripts.
  x-mx-contextProvides:
    - "What the mx-outputs/scripts folder contains and how to run it"
    - "Where the manuscript uniqueness index and report are written"
    - "Why the manuscript index is deterministic and safe to commit"
  x-mx-prov-authored-by: human
  x-mx-prov-ai-assistance: editorial-and-implementation
---

# MX Output Scripts

This COG describes the scripts that generate indexes and reports for the
`mx-outputs` repository. It is a navigation briefing, not an instruction set:
read it to learn what is here and how to act safely, then follow
[`scripts/MANUAL.md`](./MANUAL.md) for operating detail.

## What this folder is

`scripts/` holds build and utility tooling. The scripts read committed
artefacts and write indexes or reports. They do not author content and they
do not edit the manuscripts they read.

## The tools

### `generate-index.sh` (bash)

Regenerates the top-level `README.md`, the master file index for the
repository. Idempotent: run it after adding or removing outputs. No
arguments.

### `manuscript_uniqueness.py` (python3, stdlib only)

Indexes every chapter and paragraph of the two book manuscripts and reports
the long paragraphs that appear word-for-word in more than one book — the
paragraphs to rewrite so the books read as distinct works.

- **Reads:** `html/books/handbook/mx-handbook.html`,
  `html/books/protocols/mx-protocols.html`,
  `html/books/appendices/mx-appendices.html`
- **Writes:** `json/manuscript-index.json` (the index, stored with the
  repository's other JSON exports) and
  `scripts/manuscript-uniqueness-report.md` (the human-readable report)
- **Two checks:** *cross-book* duplicates (a paragraph verbatim in both
  books) and *within-book* duplicates (a paragraph verbatim in two or more
  chapters of the same book).
- **Default threshold:** identical paragraphs longer than 100 words. The
  report includes a tier table (50/75/100/150/200 words) so the bar can be
  chosen without re-running.
- **Ignore list:** the operator can exclude intentionally-shared paragraphs
  by listing their hashes in `scripts/manuscript-uniqueness-ignore.txt`.

```bash
python3 scripts/manuscript_uniqueness.py            # build index + report
python3 scripts/manuscript_uniqueness.py --check    # exit 1 on duplicates
python3 scripts/test_manuscript_uniqueness.py       # run the unit tests
```

### Appendices pipeline (python3, stdlib only)

The appendices are maintained as one file and published as many:

- `consolidate_appendices.py` — one-off migration that folded the 22 standalone
  pages into the canonical source `html/books/appendices/mx-appendices.html`.
- `split_appendices.py` — regenerates the 22 focused site pages
  (`mx-site/books/appendices/appendix-*.html`) from that source, each with a
  schema.org `TechArticle` JSON-LD block. Edit the source, re-run, commit both.
- `check_canonical_source.py` — tripwire that fails if a `html/books/**` file
  carries the pandoc `generator` marker (i.e. was regenerated upstream). Runs
  in the SessionStart hook and in CI.
- `session_check.py` — the single deterministic script the SessionStart hook
  runs before any inference: cheap checks first (tripwire, a raw-byte freshness
  gate, appendix sync, tests), re-indexing only when a book actually changed.

See `MANUAL.md` for full detail.

## How to act safely

- The indexer is **read-only** with respect to the manuscripts. It only
  writes the index and the report. Running it cannot damage the books.
- The index is **deterministic**: re-running on unchanged manuscripts with
  the prior index in place produces byte-identical output. A change in the
  index diff means a real change in the books, so the index is safe to commit
  and review.
- The index records each manuscript's **last-changed date** (its git commit
  date, or `--as-of`) and skips re-analysing chapters whose content has not
  changed since the last run. This is an optimisation only; it never alters
  results.
- To fix a flagged duplicate, rewrite the paragraph in at least one book.
  The handbook carries the lighter treatment of shared material; the
  protocols book carries the deeper one. Re-run the indexer to confirm the
  duplicate is gone.

## Related

- [`scripts/MANUAL.md`](./MANUAL.md) — full operator manual
- [`scripts/manuscript-uniqueness-report.md`](./manuscript-uniqueness-report.md) — latest report
- `json/manuscript-index.json` — latest index
