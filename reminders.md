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
- ⏸️ **Phase 2 deferred** — in-book appendix links are *not yet* rewritten,
  because the target URL depends on the standalone-pages decision below (and
  on where the consolidated file is deployed on the live site). The existing
  links still resolve to the standalone pages, which remain in place.

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

### OPEN DECISION — the standalone appendix pages

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

### Risks

- **Upstream regenerate clobbers the canonical HTML** (Phase 0 external
  coordination). Highest risk. Must be closed before relying on hand-edits.
- **Link rot** if standalone pages are retired without redirects (Option A).
- **Large single file:** the appendices manuscript will be ~73k words; fine
  for the tooling, worth a TOC for humans.
