---
title: "Co-Directors Report - Self-contained PDF provenance, html-writer pipeline overhaul, IPTC corpus backfill, audit-PDF table layouts, MX Readiness Level honesty fix, blog filter clear-all, LLM prompt + input capture (full provenance)"
description: "Two related disciplines closed end-to-end. The PDF render pipeline now produces self-contained evidence chains: every PDF carries its full AI provenance inside its XMP packet with an honest no-upstream-provenance marker when the chain begins at the render. The blog-publishing pipeline gained three default behaviours (YAML embed, tag-chip row, IPTC digitalSourceType) that were previously hand-applied per post. A new blog post landed alongside, and the three-gap entry from the 25 May review was retired with all gaps closed. A second cluster mid-afternoon: an enhancely.ai re-audit using the new non-blocking pipeline surfaced PDF-layout breakage in five wide tables (Resilience Check, Pages Audited, Security Headers per-page, Div Soup, At-a-Glance), all restructured with column-collapse + CSS column-count font scaling + bullet-list conversion for long-URL cases. A logic bug surfaced in the same audit: the MX Readiness Level classifier promoted a site with zero MX governance metadata to 'Citation-ready' on the strength of Schema.org + canonical alone; classifier now requires actual mxGovernance markers for Level 2+. The blog filter gained a red x clear-all chip, and all inline CSS/JS on the blog index was extracted into external files per the no-inline rule (added to memory). A third cluster late afternoon: every LLM call the audit pipeline makes now writes the exact prompt bytes the model saw AND the upstream input files the script read to disk under provenance/, indexed by sha256 in hash.index.csv. Three-hash chain per LLM step: rubricHash (source-tree), promptHash (bytes the model saw), inputHashes (raw data that fed the prompt)."
author: "Tom Cranstoun"
created: 2026-05-26
modified: 2026-05-26
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-26-afternoon-report.md
---

# Co-Directors Report — Self-contained PDF provenance, html-writer pipeline overhaul, IPTC corpus backfill

**Date:** 26 May 2026 — Afternoon
**Segment:** afternoon (since noon, continuing threads that surfaced earlier in the morning but were not in v1.3 of the morning report)

---

## Summary

Two related disciplines closed end-to-end this afternoon.

The PDF render pipeline (`scripts/bin/mx.pdf.sh`) now produces self-contained evidence chains. Every PDF the pipeline writes carries its full AI provenance inside its XMP packet, including an honest `no-upstream-provenance` marker (outcome: skipped) when the chain begins at the render rather than upstream. The sidecar pair is created by the orchestrator itself, not by a post-commit hook. The `pdf-render` step's inputs capture the source's git content hash and canonicalUri so the chain ties to a specific source forever. The deterministic-side sidecar carries the rule-driven mirror of the render. A regression test renders a fixture, extracts the embedded payload via exiftool, and asserts the chain shape on every `npm test`.

The blog-publishing pipeline (`scripts/generate-content-html.cjs`) gained three default behaviours that previously required hand-injection after every run. The source YAML now embeds in the generated HTML's `<head>` via the canonical primitive, the per-post tag-chip row renders from `mx.tags` against the 13-tag taxonomy, straight quotes survive markdown-it (`typographer: false`), and the IPTC `digitalSourceType` IRI lands in the BlogPosting JSON-LD derived from the page's `ai-disclosure` value. Forty-six existing posts were backfilled with the IPTC field so the corpus is consistent; six use-cases/ posts already carried it. A new blog post (*A PDF That Can Prove Itself*) shipped alongside, and the llms.txt Featured list was curated up from eleven to fifteen items to surface the four strongest provenance/foundations posts.

The three-gap REMINDERS entry from the 25 May blog-publish review (typographer / IPTC IRI / llms.txt Featured) was retired with all three actioned today.

---

## What Was Done

### 1. PDF provenance self-bootstrap

The earlier `mx.pdf.sh` pipeline produced tagged PDFs with twenty-seven MX XMP fields but no AI provenance payload. The injector required an explicit `mx.x-mx-provenance.sidecar` pointer in the source frontmatter; audit-pipeline renders always provided that pointer via `build-provenance.js`, but hub-direct renders of arbitrary markdown did not. PDFs shipped half-evidenced.

The fix centralises the naming convention in the existing primitive (`mx-reginald/lib/provenance.js#resolveSidecarPaths`, now exported), has `mx.pdf.sh` resolve the AI-sidecar path before the render and export `MX_PROVENANCE_AI_SIDECAR_PATH` for the injector, and extends the injector's resolution order from one source to four (explicit env path > frontmatter pointer > basename env > convention fallback). The orchestrator inits the sidecar pair if absent, records a `no-upstream-provenance` step (outcome: skipped) when the chain begins at the render, and appends the `pdf-render` step with `source`, `doctype`, `sourceSha` (git `hash-object` of the source), and `canonicalUri` in its `inputs` block. The same step is mirrored to the deterministic stream so the deterministic sidecar carries the rule-driven render facts rather than sitting empty.

A regression test at `tests/test-pdf-provenance-chain.js` renders a fixture markdown, extracts the embedded payload via `exiftool -b -XMP-mx:ProvenanceAiPayload`, and asserts thirteen properties of the chain. Wired into `npm test` plus a standalone `npm run test:pdf-provenance-chain`.

`possible.pdf` was re-rendered against the upgraded pipeline: AI sidecar carries the two-step honest chain; embedded XMP payload is 2247 bytes; an inspector with `exiftool` reads the chain in one command without filesystem access to the adjacent sidecar.

### 2. Documentation: CLAUDE.md and the provenance-sidecar skill

CLAUDE.md gained a paragraph in the provenance-sidecars section describing the self-bootstrap behaviour and the four-step injector resolution order. The provenance-sidecar skill at `.claude/skills/provenance-sidecar/skill.md` gained a dedicated "PDF renders self-bootstrap their chain (added 2026-05-26)" sub-section. Both surfaces now match what the pipeline does, so the next reader does not learn the behaviour by reverse-engineering the scripts.

### 3. Blog post: A PDF That Can Prove Itself

New 1850-word, 10-min-read post at `mx.allabout.network/blog/a-pdf-that-can-prove-itself.html`. Practitioner-facing note on the artefact-level behaviour: every PDF this site produces carries its evidence chain inside the XMP packet, the honest-absence marker matters as much as the present steps, the source SHA ties the chain to a specific source forever, and verification is a one-line `exiftool | jq`. Tagged `practitioner`, `provenance`, `mx-foundations`. Card added to blog index as the newest entry.

### 4. html-writer generator: three defaults that used to be hand-applied

The earlier publish flow for both blog posts this morning needed the same manual sequence after `generate-content-html.cjs` ran: embed the source YAML in `<head>`, sanitise curly quotes, inject the tag-chip row, update the index card, regenerate sitemaps, delete the source markdown. Three of those steps now happen by default.

- **YAML embed**: the generator calls the canonical primitive (`scripts/lib/embed-yaml-in-html.cjs`) via `execFileSync` after the file write. Comment block is sentinel-delimited and idempotent.
- **Tag-chip row**: new `{{TAG_CHIPS_ROW}}` placeholder in the content template, substituted from `mx.tags` via the `TAG_LABELS` map (the canonical 13-tag taxonomy). Chips link to `index.html#tags=<slug>`; the index page parses the hash on load.
- **Straight quotes**: `typographer: false` in the MarkdownIt config. The cost is losing auto-conversion of `...` to a single ellipsis; the gain is that straight apostrophes and quotes stay ASCII as the writing style guide requires. Authors who want an ellipsis type three dots; the prose ships ASCII.

A fresh fixture render confirmed all three behaviours land correctly: YAML embed present, three chips rendered, "it's straight" stays ASCII, zero curly characters.

### 5. llms.txt Featured curation

`sync-blog-discovery.cjs` had been flagging the four strongest unfeatured posts as candidates. Promoted to the curated Featured list: `a-pdf-that-can-prove-itself` (today's mechanic-level post), `the-padlock-and-the-page` (the architecture argument), `provenance-you-can-see` (the foundational long-form), `who-checked-gutenberg` (the historical analogy). Featured count moves 11 → 15. Niche, speculative, profile, and announcement posts stay out; the curation policy holds.

### 6. IPTC digitalSourceType: generator + template + 46-post backfill

Gap (b) from the 25 May three-gaps entry. The WICG `<meta name="ai-disclosure">` tag has a structured-data counterpart in IPTC's Digital Source Type vocabulary (`cv.iptc.org/newscodes/digitalsourcetype/`); the html-writer polish pass treats the JSON-LD form as required, but the generator was not emitting it. Forty-six top-level blog posts shipped without it; six use-cases/ posts already had it.

The generator now derives the IPTC IRI from `mx.aiDisclosure` via the canonical mapping (`none` → `digitalCapture`, `ai-assisted` → `compositeWithTrainedAlgorithmicMedia`, `ai-generated` or `autonomous` → `trainedAlgorithmicMedia`) and substitutes a new `{{DIGITAL_SOURCE_TYPE_IRI}}` placeholder in the template's BlogPosting JSON-LD scaffold. A backfill script at `scripts/lib/backfill-digital-source-type.cjs` walks the corpus, reads each page's `ai-disclosure` meta tag, maps to IRI, and injects the field immediately after `description` in the BlogPosting node. Idempotent: re-runs are no-ops. Forty-eight of forty-eight top-level posts now carry the field; six use-cases/ posts already did. Three-gap REMINDERS entry retired.

### 7. Audit PDF table layouts: five wide tables restructured

An enhancely.ai re-audit using the new non-blocking pipeline produced a 1.2MB EAA-Level-2 PDF, and a page-25 screenshot showed the Resilience Check 5-column table cramped into one-word-per-line wrapping in the prose columns. Chrome's `table-layout: auto` allocates column widths in proportion to content; in a 5-col table where two cols carry prose and three carry short values, each prose column gets only ~25% of the page width. Five tables restructured to either fewer columns or to a bullet list:

- **Resilience Check** (5 -> 3 cols): merged Status / Pages into one cell, merged What-it-means / Data into one wide prose cell, in [pipelineSurvivability.js](mx-reginald/audit/bin/tableHandlers/pipelineSurvivability.js) with a backward-compatible regex covering both the new 3-col and legacy 5-col template shapes.
- **Pages Audited** (6 -> 2 cols, then -> bullet list): first compressed scores into one "SEO 85 . A11y 90 . Back 70 . Served 100 . Rendered 100" cell, then converted to a bullet list once the screenshot showed long URL slugs still wrapping hyphen-by-hyphen inside the table cell. Handler + template both updated.
- **Security Headers per-page** (6 -> bullet list): same long-URL problem; same fix. Bullet list with each URL on its own line and the five Yes/No verdicts clustered into a single inline label.
- **Div Soup** (7 -> 4 cols): collapsed the bare-divs / ratio / depth columns into one "44 bare divs . 43% ratio . depth 5" cell so the wide "Top bare selectors" column gets the room it needs.
- **CSS column-count font scaling**: a `:has(thead tr > th:nth-child(N))` rule in the audit PDF stylesheet auto-shrinks the font (8pt -> 7.5pt -> 7pt) and tightens padding for tables with 5 / 6 / 7+ columns. Applies to every wide table that didn't get a structural restructure (At-a-Glance findings, Schema inventory, Schema issues, Marker reachability, Pipeline stages, MX-readiness ladder) without per-table edits.

### 8. MX Readiness Level classifier: require mxGovernance markers for Level 2+

A logic bug surfaced in the same enhancely.ai audit. The MX Readiness Level table said "Current Level: 2: Citation-ready" with the description "Full MX fields, governance, provenance" — but the site has zero MX-namespaced governance metadata. The classifier at [llmReports.js:1513](mx-reginald/audit/src/utils/reportUtils/llmReports.js) was reading MSC=68 + SDQ=87 + DR=40 and ignoring the existing `markerCoverage.mxGovernance` signal (which correctly registered zero presence on every audited page). A site with strong Schema.org + canonical + OG tags + sitemap can hit MSC=68 and DR=40 without ever declaring an MX-namespaced field, so the level claim was structurally false.

Fix: gated Levels 2-5 on `mxGovernancePresent === true`, computed inline from `htmlMetrics[*].markerReachability.mxGovernance`. When the score thresholds for Level 2 are met but MX governance is absent, the "To reach the next level" prose now explicitly names what's missing (`mx:status`, `mx:contentType`, `mx:audience`, `canonicalUri`, provenance markers) instead of telling the reader to chase SDQ above 75. For enhancely.ai: now correctly Level 1 (Discoverable).

### 9. Blog filter clear-all (x) chip + no-inline-CSS-or-JS rule landed

The [blog/index.html](mx-outputs/mx-site/blog/index.html) filter gained a red x-icon "Clear all" chip that appears only when at least one tag filter is active, so the visual signal scales with state. The chip uses a circular x glyph + "Clear all" text, with hover inverting the colour. Visibility is driven by an `is-visible` class added in the filter's `apply()` function.

Once the chip was wired, the inline `<style>` (~60 lines covering tag-filter chips, card tags, the clear-all chip) and inline `<script>` (filter logic, hash-preselect, clear-all click) were both extracted: CSS into [mx-blog.css](mx-outputs/mx-site/css/mx-blog.css), JS into a new [js/blog-filter.js](mx-outputs/mx-site/js/blog-filter.js). The blog/index.html shrank from 803 to 656 lines and carries only external `<link>` / `<script src>` references plus its JSON-LD (the documented exception). A new memory record was saved as the canonical rule for future writes: [feedback_no_inline_css_or_js](/Users/tomcranstoun/.claude/projects/-Users-tomcranstoun-Documents-GitHub-MX-hub/memory/feedback_no_inline_css_or_js.md) — public HTML on mx-site carries no inline `<style>` or `<script>`, with JSON-LD as the only exception. The reason is the audit's own Inline Tag Bloat resilience check: mx-site teaches by example, so the file that publishes the rule has to follow it.

---

## By the Numbers

### Pipeline work

| Metric | Value |
|--------|-------|
| Hub commits | 6 (provenance refactor, regression test, blog publish, html-writer defaults, llms.txt curation pointer + REMINDERS, IPTC generator) |
| mx-outputs commits | 5 (padlock-page humanizer + PDF regen, padlock blog publish, possible.md PDF, llms.txt curation, IPTC backfill) |
| Posts gaining digitalSourceType this pass | 46 (top-level blog), 0 (use-cases — already carried) |
| Posts in llms.txt Featured | 11 → 15 |
| Regression tests added | 1 (`test-pdf-provenance-chain.js`, 13 assertions, wired into `npm test`) |
| Cache purges | 3 (provenance PDF + new blog, llms.txt curation, IPTC backfill) |

### Generator defaults retired

| Hand-step now automatic | Previous state |
|--------|-------|
| Embed source YAML in `<head>` | Manual `node scripts/lib/embed-yaml-in-html.cjs` after every generate |
| Inject `<ul class="article-tags">` chip row | Manual `<ul>` edit per post |
| Preserve straight quotes through markdown-it | Manual `perl -i -pe` curly-quote sanitiser |
| Emit `digitalSourceType` IPTC IRI in BlogPosting | Field absent on 46 posts; corpus inconsistent |

### REMINDERS retired

- Line 177 (html-writer skill update): all three additions wired into the generator. Deleted.
- Line 374 (three-gap blog-publish review): gaps (a) typographer, (b) IPTC IRI, and (c) llms.txt Featured all actioned. Deleted.
- Line 377 (audit-pipeline stray probe write paths): probe scripts (capture-pdf-sample.js + sitemapSummary.js + main.js) now write directly to the per-run results directory rather than `<delivery>/www.<host>/` / `<delivery>/cache/`. Containment `.gitignore` patterns still in place; the actual fix landed in the same session. (Note: REMINDERS entry was already deleted in the parallel work; the fix scripts are in the working tree pending commit in Step 3.)

### Audit PDF table layouts

| Table | Before | After |
|-------|--------|-------|
| Resilience Check | 5 cols (Check / Status / Pages / What-it-means / Data) | 3 cols (Check / Result / Prose+Data) |
| Pages Audited | 6 cols (Page / SEO / A11y / Back / Served / Rendered) | bullet list (URL on own line + score cluster) |
| Security Headers per-page | 6 cols (Page / HTTPS / HSTS / CSP / X-Frame / X-Content-Type) | bullet list (URL on own line + headers cluster) |
| Div Soup | 7 cols | 4 cols (Source / Score+band / stats cluster / selectors) |
| Wide tables (5+ cols) generally | font 9pt, fixed padding | CSS `:has()` auto-shrink 8pt -> 7.5pt -> 7pt + tighter padding by col count |

### MX Readiness Level fix

| Site state | Pre-fix verdict | Post-fix verdict |
|------------|-----------------|------------------|
| enhancely.ai (MSC 68, SDQ 87, DR 40, mxGovernance 0%) | Level 2: Citation-ready (false) | Level 1: Discoverable (honest) |
| Next-level prose | "Raise SDQ above 75 and consistency above 90%" (wrong lever) | "Add MX governance fields: mx:status, mx:contentType, mx:audience, canonicalUri, provenance markers" (right lever) |

### Blog filter clear-all + inline extraction

| Metric | Value |
|--------|-------|
| blog/index.html before | 803 lines (inline `<style>` + `<script>`) |
| blog/index.html after | 656 lines (external CSS/JS refs + JSON-LD only) |
| New JS file | `mx-outputs/mx-site/js/blog-filter.js` (97 lines) |
| Extracted CSS | ~60 lines appended to `mx-blog.css` |
| Memory record saved | `feedback_no_inline_css_or_js.md` (rule + MEMORY.md index entry) |

---

### 10. LLM prompt + input capture: full per-call provenance

The audit pipeline calls the model from nine different scripts, and each call injects per-call facts into the prompt before sending. The static `<name>.system.md` files committed under `mx-reginald/audit/system-prompts/` are the rubric the script loads, but the bytes the model actually saw are not byte-identical to any file in the source tree. Pointing the provenance chain at the static file alone misrepresents the call. Same for the upstream inputs - the report markdown, the sidecar JSONs, the cached HTML pages - which may be truncated before reaching the user message.

The fix is symmetric. A new lib at [`mx-reginald/audit/lib/capture-prompt.js`](mx-reginald/audit/lib/capture-prompt.js) exposes two helpers: `capturePrompt(...)` writes the rendered prompt (system + user message) to `<deliveryDir>/provenance/prompts/<sha256>.txt`, and `captureInput(...)` writes the upstream input file to `<deliveryDir>/provenance/inputs/<sha256>.<ext>`. Both append rows to `<deliveryDir>/provenance/hash.index.csv` with a `kind` column distinguishing prompts from inputs. The CSV schema migrates old-schema rows in place on first call so prior runs do not break.

The primitive at [`mx-reginald/lib/provenance.js`](mx-reginald/lib/provenance.js) gains `promptHash` (single sha256) and `inputHashes` (array of `{hash, label}`) on every step entry; the AI-stream wrapper at [`mx-reginald/audit/lib/llm-provenance.js`](mx-reginald/audit/lib/llm-provenance.js) forwards both. Every LLM call now produces three hashes for a regulator to walk: `rubricHash` (source-tree rubric), `promptHash` (bytes the model saw), `inputHashes` (raw data that fed the prompt).

Wired across all nine LLM scripts: rewrite-report, audit-fierce-critic, audit-llm-judgment, repair-report-final, repair-report-voice-scope, repair-report, audit-llm-attribution-judge, collect-llm-attribution, and provenance-gap-llm. The duplicate `import path` bug in audit-llm-attribution-judge.js (a relic from a prior partial edit) was fixed in the same pass. The first verification run on enhancely.ai produced four prompt captures and two distinct input captures (the same report.md read by repair-voice-scope and fierce-critic differed by seventeen bytes because the repair pass mutated the file between calls; the input captures preserve that per-call truth rather than a single reference).

This work was also a merge-conflict recovery. The earlier session-mid attempt to land the same lib was rolled back by parallel APA-7 work in the same files; the re-application happened on top of the parallel work without conflict, with the duplicate-import bug fixed as a side effect.

---

## The Insight

The shape of this afternoon's work was the same shape twice: turn a manual sequence that we did by hand into a default the script does for us. The PDF case was provenance metadata that lived in mx-reginald primitives but was not wired into the hub-direct render path. The blog-publishing case was three steps that the skill prose documented as the contract but the generator had not been updated to honour. Both shapes had the same fix at structure level: the discipline already existed in the canon (the primitive, the skill prose); the producer just had to start calling it.

The lesson worth carrying forward is the one the LEARNINGS now records about source-verbatim hygiene: when the same surgery happens by hand twice in one session, that is the signal that the producer is wrong, not the surgery. Today the signal fired three times (YAML embed, tag chips, IPTC IRI) before the producer was rewritten to handle them by default. Next session: when a hand-step lands twice, automate the third invocation rather than performing it.

---

## Decisions Made

- **Convention over special-case for the sidecar resolution order.** The injector's new four-step resolution (`MX_PROVENANCE_AI_SIDECAR_PATH` env > frontmatter pointer > basename env > convention fallback) means hub-direct renders, audit-pipeline renders, and any future producer can share one injector. The convention `<output-pdf-basename>.provenance.ai.json` adjacent to the PDF is the canonical default; explicit pointers from upstream pipelines still take precedence.
- **`outcome: skipped` is the honest label for `no-upstream-provenance`.** Absence of upstream provenance for an arbitrary source is a known-empty state, not a warning. The choice matters because `warn` reads as "something is wrong with the render"; `skipped` reads as "this step is recording the absence honestly".
- **Featured curation policy holds at 15.** Adding the four strongest unfeatured posts brought the curated list to fifteen items. The threshold is roughly twenty before the list stops being curated and starts being a catalogue; further additions should displace, not append.

---

## Next Steps

- The audit-pipeline well-known + scoring verification (REMINDERS line 372 from the 25 May evening evidence chain) is still pending a real end-to-end audit run against a host that previously had a "all absent" cached report. Worth doing on the next prospect audit anyway; no separate session needed.
- The manuscript humanizer pass on the four 25 May propagations (REMINDERS line 375) remains open. The blog posts went through the humanizer; the manuscript prose did not. Worth a polish pass before the next manuscript build.
- The audit-pipeline path-leak bug (REMINDERS line 377, added 2026-05-26) needs the probe scripts under `mx-reginald/audit/bin/` (likely `capture-pdf-sample.js` plus one discovery script) to stop writing outside the canonical layout. The `.gitignore` patch is a containment measure, not the fix.

---

## Commit Log

| Hash | Description |
|------|-------------|
| add63282 (hub) | Provenance: self-contained PDF chain — sidecar centralisation, source SHA, regression test |
| b59c25f (mx-outputs) | Publish 'A PDF That Can Prove Itself' + refresh possible.pdf with full chain |
| c6a690b8 (hub) | html-writer: generator emits YAML embed + tag chips + straight quotes by default |
| da63683 (mx-outputs) | llms.txt Featured: promote four flagship provenance/foundation posts |
| 3e0b66ad (hub) | REMINDERS: mark gap (c) llms.txt curation done; bump mx-outputs pointer |
| c00f3a4 (mx-outputs) | Backfill digitalSourceType IPTC IRI into 46 BlogPosting JSON-LD blocks |
| 70378d89 (hub) | html-writer: emit digitalSourceType IPTC IRI in BlogPosting JSON-LD |
| d9505cdf (hub) | Bump mx-outputs: 2026-05-26 afternoon directors report |
| 3af9441f (hub) | Changelog: 2026-05-26 afternoon second-half entry |
| 06ee4867 (hub) | Learnings: when a hand-step lands twice, fix the producer not the output |
| 7dbdf05e (hub) | CHANGELOG: retire reginald-vnext-prd.md rename from carry-forward list |
| 501c881 (mx-outputs) | Blog index: clear-all (x) button + extract filter CSS/JS to external files |
| 78d107db (hub) | Audit pipeline: PDF table layouts, MX Readiness honesty, probe write-path fix |
| 5348c5e4 (hub) | Audit prompts: stop falsely claiming citation when MX governance is absent |
| 283fad2f (hub) | Docs: changelog + reminders for table layouts, MX Readiness fix, prompt sweep, blog filter |
| f91ca229 (hub) | Learnings: table-layout misfit, classifier honesty, public-HTML inline rule |
| ca26f1a0 (hub) | Bump mx-outputs: directors report v1.1, audit refresh, blog filter externals, README regen |
| 20129c42 (hub) | Audit prompt + input capture: full LLM-call provenance per audit run |
| 3a8507d8 (hub) | Housekeeping: routing registry regen + changelog archive trailing newline |
| 1332371 (mx-outputs) | Refresh enhancely.ai audit + add provenance/ capture folder |
