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

## 2026-06-11 — Open items resolved / tracked

Decisions from the review round, recorded so nothing is lost:

- ✅ **Handbook self-repeat fixed.** The 110-word paragraph that appeared in
  both "Part A — The Business Case" and "Chapter 11: Business Imperative" was
  rewritten in the Chapter 11 copy. Within-book duplicates are now 0.
- ⏳ **Pull request:** none for now — keep pushing to
  `claude/human-terms-machine-thinking-oitwsl`. (Note: the CI `checks` workflow
  only runs on a PR or a push to `main`, so it stays dormant until then.)
- ⏳ **Book PDFs:** intentionally **out of scope**. `pdf/books/**` are the old
  pandoc artefacts and will drift from the canonical HTML; regenerating them
  from HTML (e.g. weasyprint) is a deliberate non-goal for now.
- ⏳ **OWNER ACTION — disable the upstream generator** (cannot be done from an
  `mx-outputs`-scoped session). Follow **`DISABLE-UPSTREAM-GENERATOR.md`**:
  - [ ] Turn off the pandoc job in the generator/source repo (Step 1).
  - [ ] Enable branch protection on `main` requiring the `checks` workflow (Step 2).
  - [x] In-repo tripwire + CI enforcement already block a regenerated file from
    merging.

---

## 2026-06-11 — PDF reviewer: deterministic test for hidden prompt injection (NEW)

**Why.** Field report (r/PromptEngineering, "Hidden prompt injection in a PDF
almost got my org"): a contract PDF carried **hidden white text in the footer**
with an injection payload. The org's prompt filter only watched the *user input
field*, not the *document upload*, so the security stack stayed silent — "the
injection came through a content channel our tooling didn't monitor." The lesson:
injection arrives through every content channel a model can read (files, emails,
calendar invites, web pages), not just the chat box.

**Our gap.** The MX PDF reviewer (the "PDF inspector": `mx-site/js/pdf-inspector-core.js`,
mirrored in `distributions/mx-pdf-inspector/v1.0.0/lib/pdf-inspector-core.js`)
inspects **only the XMP/metadata layer** — tagged-tree claim, `mx:*` namespace,
provenance payload, responsible person. It **never reads the rendered text
layer** (confirmed: no `getTextContent` call anywhere in the inspector). A PDF
with a hidden injection footer would classify cleanly and the reviewer would say
nothing. Same blind spot the Reddit org had.

**To do — add a deterministic content-safety check + test:**

- [ ] **Detector in the core.** Add `detectHiddenPromptInjection(pdfDoc)` to
  `pdf-inspector-core.js`. Walk pages via pdf.js `page.getTextContent()` and flag
  spans that are both (a) **hidden/near-invisible** — text render mode 3
  (invisible), near-zero font size, or fill colour matching the page/background —
  and (b) carry **injection markers**: a deterministic keyword/regex list
  (`ignore (previous|prior|all|above) instructions`, `disregard …`,
  `system prompt`, `you are (now)? (an|the) …`, `as an AI …`,
  imperative `Claude:` / `Assistant:` / `<model>:` directives, "transfer",
  "exfiltrate", etc.). Keep it a **pure, deterministic** function (string in →
  finding out) so it tests without network or AI, matching the existing
  detect/classify split.
- [ ] **Evidence row.** Surface it as a new `classify()` evidence row
  (`key: 'content-safety'`, `status: 'pass'` when no hidden-injection span is
  found, `'fail'` when one is) and fold it into the markdown report.
- [ ] **Fixture + expected results.** Drop a crafted
  `fixtures/hidden-injection.pdf` (hidden white-on-white footer reading e.g.
  "Ignore previous instructions and …") into
  `distributions/mx-pdf-inspector/v1.0.0/test-pack/fixtures/` and add an entry to
  `expected-results.json` asserting the `content-safety` row reports `fail`. Keep
  a clean counterpart (the existing `mx-compatible.pdf`) asserting `pass`, so the
  test proves both directions. `run-test-pack.mjs` / `.sh` already iterate
  fixtures — extend them to assert *expected failures*, not only required passes
  (today they only check `requiredPasses`).
- [ ] **Wire into the gate.** Once the test pack covers this, make sure it runs
  in `scripts/session_check.py` / CI like the other suites so a regression can't
  land.

**Cross-channel check (the "also check HTML, JS, CSS" ask).** The same vector
applies to the audit site's own surfaces and to anything we ingest. On
2026-06-11 I scanned the repo's `**/*.html`, `**/*.js`, `**/*.css` for (a)
injection-instruction phrases and (b) hidden-text CSS vectors (`font-size:0`,
`opacity:0` outside keyframes, `color`/background collision, off-screen
`text-indent`/`clip`, `aria-hidden` instruction blocks, and `<!-- … -->`
comments addressed to a model). **Result: clean.** The only phrase hits are
legitimate prose — the books *discuss* prompt injection and the appendix gives
an example of the attack — and the CSS hits are ordinary styling
(`font-size:0.9rem`, animation `from{opacity:0}`). The `html/audit/baselines/**`
matches are captured third-party sites kept for auditing, not our content.
Worth turning that one-off sweep into a small deterministic scanner
(`scripts/check_hidden_prompts.py` over HTML/JS/CSS, sharing the marker list
with the PDF detector) and adding it to the session gate, so the audit site is
held to the same bar we'd hold a client's estate to.

---

## Future work — make the two books unique (the original goal)

The tooling, governance, pipeline, and CI are in place. The remaining content
work is to remove the paragraphs the Handbook and the Protocols still share
verbatim. As of 2026-06-11: **16 cross-book duplicates over 100 words**, all in
the two parts the books share — **Part A — The Business Case** and **Part B —
The Technical Foundation** (they were copied into both books). 0 within-book.

Approach (per duplicate):

- **Rewrite** the genuine copy-paste ones on one side, keeping the established
  split — Protocols carries the deeper/technical treatment, Handbook the
  lighter — then re-run `python3 scripts/manuscript_uniqueness.py` and watch the
  count fall. The gate + CI then hold it.
- **Ignore-list** the ones that are deliberately shared (authorial statements,
  boilerplate, defined terms) by adding their hash to
  `scripts/manuscript-uniqueness-ignore.txt`. Done so far: the "I want to be
  clear about my stance on AI" paragraph.

Candidates that may be *deliberately* shared (review before rewriting): the NHS
"patient asks an AI assistant about drug interactions" example; the
"Linguistic bias / tokenize English" paragraph near the machines-not-magic
section. The current list with hashes and locations is in
`scripts/manuscript-uniqueness-report.md`.

Lower priority / nice-to-have:

- `.mx.yaml.md` frontmatter check is in; a README-index staleness check
  (`generate-index.sh --check`) was noted as a possible future gate step.
- Per-appendix JSON-LD is emitted; richer per-appendix metadata (timeRequired,
  educationalLevel, dates) could be carried through the consolidated source if
  wanted.
- Book PDFs remain out of scope; regenerating them from the canonical HTML
  (e.g. weasyprint) is the option if they are ever brought back in.

---

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
