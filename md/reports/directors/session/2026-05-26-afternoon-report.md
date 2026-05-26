---
title: "Co-Directors Report — Self-contained PDF provenance, html-writer pipeline overhaul, IPTC corpus backfill"
description: "Two related disciplines closed end-to-end. The PDF render pipeline now produces self-contained evidence chains: every PDF carries its full AI provenance inside its XMP packet with an honest no-upstream-provenance marker when the chain begins at the render. The blog-publishing pipeline gained three default behaviours (YAML embed, tag-chip row, IPTC digitalSourceType) that were previously hand-applied per post. A new blog post landed alongside, and the three-gap entry from the 25 May review was retired with all gaps closed."
author: "Tom Cranstoun"
created: 2026-05-26
modified: 2026-05-26
version: "1.0"

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
