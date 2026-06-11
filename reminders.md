---
title: "Reminders & Open Plans"
description: "Working notes for decisions taken and deferred. Currently: the plan to make the book HTML the canonical hand-maintained source and consolidate the appendices."
author: Tom Cranstoun
created: 2026-06-11
modified: 2026-06-11
mx:
  status: active
  contentType: planning-notes
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/reminders.md
  purpose: "Hold open decisions and migration plans so they are not lost between sessions."
  stability: working
  runbook: "Read for outstanding decisions. Each entry is dated; resolve and strike through when done."
---

# Reminders & Open Plans

## 2026-06-11 — Books as source, appendices consolidated

### Why

The book HTML (`html/books/handbook/mx-handbook.html`, `…/protocols/mx-protocols.html`)
is currently a **pandoc-generated** artefact whose markdown source lives in
another repository. That makes hand-edits here fragile: a future regenerate
upstream would silently clobber them. We are reversing that: **the HTML
becomes the canonical, hand-maintained source**, and the appendices are
consolidated and maintained as HTML too.

### Decisions taken

- **Shared appendices → one shared file.** The ~73,000 words of appendices
  (13 of 23 marked `book: "Shared"`) become a **single** hand-maintained
  HTML manuscript, `html/books/appendices/mx-appendices.html`, that both
  books link into. No content is duplicated across the two books, so the
  uniqueness checker stays meaningful.
- **Book PDFs → out of scope.** `pdf/books/*` is left as-is for now. Not
  part of this change.
- **Standalone appendix pages → deferred.** See the open decision below.

### Status (2026-06-11)

- ✅ **Phase 0 done** — `SOUL.md` and the `html/books/**` runbooks now declare
  the books canonical hand-maintained HTML. *External coordination still
  outstanding: stop the upstream generator.*
- ✅ **Phase 1 done** — `html/books/appendices/mx-appendices.html` built from
  the 22 standalone pages by `scripts/consolidate_appendices.py` (deterministic,
  tested).
- ✅ **Phase 3 done** — appendices added to the uniqueness tool's manuscript
  list; index/report regenerated (3 manuscripts, no new cross-book duplicates).
- ✅ **Phase 2 resolved (no rewrite needed)** — decision below settled on
  **Option C**: the per-appendix URLs are preserved (regenerated from source),
  so the 8 in-book links still resolve and need no change, and no redirects or
  new deployment path are required.
- ✅ **Publishing model (Option C) built** — `scripts/split_appendices.py`
  regenerates the 22 focused site pages from the consolidated source. One file
  to edit (`html/books/appendices/mx-appendices.html`), 22 pages published.
  The pages carry a "GENERATED FILE — do not edit" marker.
- ✅ **Regenerate guard built** — the pandoc `generator` meta was stripped
  from the book files and `scripts/check_canonical_source.py` (wired into the
  SessionStart hook and runnable in CI) fails if it reappears.
- ✅ **CI enforcement added** — `.github/workflows/checks.yml` runs
  `session_check.py --strict` on push to `main` and on PRs, so a regenerated
  book (tripwire), drifted appendix pages, malformed JSON, or a failing test
  **cannot land on a protected branch**. This blocks the *symptom* in-repo.
- ⏳ **Still owed (external, out of reach this session):** disable/archive the
  upstream pandoc generator at source, and enable branch protection requiring
  the `checks` workflow on `main`. This session is scoped to `mx-outputs` only
  (a submodule), so the generator's parent repo cannot be edited from here. A
  step-by-step hand-off is written up in **`DISABLE-UPSTREAM-GENERATOR.md`**.
  CI already blocks a regenerated file from merging; these two steps stop it
  being produced and make the block enforced rather than advisory.

### Migration plan

**Phase 0 — Declare the source of truth (the linchpin).**
- Rewrite `SOUL.md` so the "do not hand-edit outputs / fix the source and
  regenerate" rule no longer applies to `html/books/**` and the new
  appendices file. State plainly that these HTML files are canonical source.
- Update the `.mx.yaml.md` runbooks under `html/books/**` to say "canonical
  hand-maintained HTML; no upstream markdown; edit here."
- **External coordination (cannot be done from this repo):** the upstream
  generator that emits these books must be stopped or archived, or pointed to
  consume *this* HTML, so it can never overwrite the canonical files. This is
  the single biggest risk; the rest of the plan is wasted if it is skipped.
- Optionally drop the `<meta name="generator" content="pandoc">` line from
  the books to signal they are hand-maintained.

**Phase 1 — Build the consolidated appendices manuscript.**
- Create `html/books/appendices/mx-appendices.html` as one document.
- For each `mx-site/books/appendices/appendix-*.html`: strip the per-file
  document chrome (`<!DOCTYPE>`, `<head>`, the MX frontmatter comment) and
  keep the body. Each appendix's `<h1 class="title">` becomes a top-level
  `<h1 id="appendix-x">` so the uniqueness tool (which splits on `<h1>`)
  treats each appendix as one section. Inner headings stay `<h2>`+.
- Preserve each appendix's metadata (title, word count, tags, copyright) by
  folding it into the new file's head or a small in-file manifest.
- Add a table of contents (A→V) with anchors.

**Phase 2 — Wire cross-references.**
- Rewrite the 8 hard-coded absolute links in Protocols
  (`…/books/appendices/appendix-j.html` ×7, `appendix-k` ×1) to point at the
  consolidated file with anchors (e.g. `…/appendices/mx-appendices.html#appendix-j`).
- Sweep both books for prose "Appendix A…V" mentions that should become links.

**Phase 3 — Extend the uniqueness tooling.**
- Add `("appendices", html/books/appendices/mx-appendices.html)` to
  `DEFAULT_MANUSCRIPTS` in `scripts/manuscript_uniqueness.py` so the
  appendices are indexed and dedup-checked alongside the books.
- Regenerate `json/manuscript-index.json` and the report; review any new
  cross-file duplicates (e.g. appendix prose that repeats book prose).

**Phase 4 — Standalone appendix pages.** Deferred — see open decision.

**Phase 5 — Validate.**
- Run `python3 scripts/manuscript_uniqueness.py` and the unit tests.
- Re-run the link check (`md/reports/validation/manuscript-url-check.md`
  process) and confirm every appendix anchor resolves.

### RESOLVED 2026-06-11 — Option C chosen

The standalone appendix pages are **regenerated from the consolidated source**
(`scripts/split_appendices.py`). Single source of truth *and* 22 focused,
addressable URLs preserved. The options considered are kept below for the
record.

- ✅ **Per-appendix JSON-LD restored** — the splitter now emits a schema.org
  `TechArticle` block (name, description, canonical URL, author, `isPartOf` the
  book, position) on each page.
- ⏳ **Still owed (external):** disable/archive the upstream generator.

### OPEN DECISION (resolved — see above) — the standalone appendix pages

`mx-site/books/appendices/*.html` are referenced by `sitemap.xml`,
`robots.txt`, `llms-full.txt`, several `mx-site/books/*.html` pages, and the
8 in-book links. They are left in place **for now**. Options to revisit:

- **Option A — Retire them.** Delete the standalone pages; rewrite in-book
  links to internal anchors; update sitemap/robots/llms. *Pro:* one source of
  truth. *Con:* breaks external deep links unless 301 redirects are added;
  loses per-appendix URLs that may have SEO/agent value.

- **Option B — Keep both (status quo +).** Standalone pages stay published
  for deep-linking; the consolidated in-book copy is canonical for reading.
  Add `rel="canonical"` from each standalone page to the consolidated anchor,
  and add the appendix paragraph hashes to the uniqueness ignore list so the
  intentional duplication is not flagged. *Pro:* no broken links, keeps URLs.
  *Con:* appendix content maintained in two places.

- **Option C — Generate the standalone pages FROM the consolidated source
  (recommended long-term).** Flip the pipeline: the consolidated
  `mx-appendices.html` is the source, and a small deterministic script splits
  it back into per-appendix pages for the site, keeping the existing URLs
  stable with no dual hand-maintenance. *Pro:* stable URLs *and* single
  source of truth. *Con:* requires a small splitter script (and the same
  governance note: the splitter is the only thing allowed to write the
  standalone pages).

  **Suggested path:** Option B short-term (zero breakage), move to Option C
  when there is time to write the splitter.

  **Deployment note (blocks Phase 2):** the canonical consolidated file lives
  at `html/books/appendices/mx-appendices.html`, but the live site serves from
  `mx-site/`. Before the in-book links can point at the consolidated file, it
  must be reachable at a site URL (e.g. copy/deploy to
  `mx-site/books/appendices/mx-appendices.html`, or have the deploy map
  `html/books/` → site). Resolve this together with the option above.

## 2026-06-11 — SessionStart hook consolidated behind a deterministic gate

The hook now runs one deterministic script, `scripts/session_check.py`, before
any inference or CPU-intensive work. It does cheap checks first and only does
heavy work when a cheap check says it is needed.

**Moved into the gate:** the canonical-source tripwire; a raw-byte **freshness
gate** (compares each book file's `file_sha` to the committed index, and
**skips the full re-index** when nothing changed — previously the hook
re-parsed all ~9,200 paragraphs every session); appendix-page sync check; and
**all** script test suites (the hook previously ran only one).

**Further candidates considered:**
- ✅ JSON validity of `json/**`, `reginald/**`, `.well-known/**`, `mx-site/**`,
  `distributions/**` — added (`scripts/check_json_valid.py`), folded into the
  gate and CI.
- `.mx.yaml.md` frontmatter parses as YAML — needs PyYAML (not a stdlib dep);
  skipped to keep the hook dependency-free.
- README index staleness — `generate-index.sh` has no `--check` mode and scans
  the whole repo; would need a cheap staleness check first.
- Link checking (`manuscript-url-check`) — **deliberately excluded**: it is
  network-bound and therefore neither cheap nor deterministic offline.

### Risks

- **Upstream regenerate clobbers the canonical HTML** (Phase 0 external
  coordination). Highest risk. Must be closed before relying on hand-edits.
- **Link rot** if standalone pages are retired without redirects (Option A).
- **Large single file:** the appendices manuscript will be ~73k words; fine
  for the tooling, worth a TOC for humans.
