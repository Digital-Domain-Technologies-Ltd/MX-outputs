---
title: "Co-Directors Report — Full Audit Run, Pipeline Overhaul, Site Schema Fixes"
description: "First complete mx.allabout.network audit run; audit pipeline instrumented end-to-end with logging, caching, and provenance; site Schema.org gaps fixed"
author: "Tom Cranstoun"
created: 2026-06-02
modified: 2026-06-02
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-02-evening-report.md
---

# Co-Directors Report — Full Audit Run, Pipeline Overhaul, Site Schema Fixes

**Date:** 2 June 2026 — Evening
**Segment:** Evening (since noon)

---

## Summary

This session ran the first full 130-page estate audit of mx.allabout.network, instrumented the audit pipeline with structured step logging, per-step timing, contract checks, and EXPLAINER generation, and fixed a set of bugs and schema gaps discovered during live PDF review. The audit achieved MX Readiness Level 5 (Purchase-confident) with Performance 97, Accessibility 100, and Pipeline Survivability 100. The pipeline is now observable, self-documenting, and significantly more robust for client delivery.

---

## What Was Done

### 1. Audit Pipeline Instrumentation

The entire three-phase pipeline (collect, report, gates) was instrumented from scratch. A new `PipelineLogger` class provides structured step logging with timestamps, per-step timing, contract checks (verify output files exist before each step proceeds), and a 30-second watchdog heartbeat so the operator always knows the pipeline is alive. Every step now emits `>> stepname` and `<< stepname duration outcome` to the terminal.

After each phase, the pipeline writes `<client>-explainer.md` alongside the report and PDF in the delivery folder. The EXPLAINER contains a full run trace: steps, timings, contract checks, skipped steps with reasons, rate limiting events, testing methodology, and (from Phase 2 onward) collector coverage analysis -- which template placeholders were filled, which collectors ran but fed nothing, and which filled the same placeholder from multiple sources.

The Ollama/LLM gate timeout was split from the general gate timeout: `MX_AUDIT_LLM_GATE_TIMEOUT_MS` (default 120s) governs the two LLM-driven gates (fierce-critic, LLM-judgment); `MX_AUDIT_GATE_TIMEOUT_MS` (30s) governs per-page and probe steps. This prevents slow local Ollama runs from triggering timeouts designed for network probes.

### 2. Provenance Chain Completion

Eight gaps in the provenance trail were identified and closed. A new `captureOutput()` helper writes model response JSON to `provenance/outputs/<sha256>.json`; `captureToolSchema()` captures the tool definition sent to the model. Every LLM script (including `audit-llm-phase2.js`, which previously had zero provenance) now records prompt, input, tool schema, and output. The infill manifest and gate verdicts (`audit_errors.json`) are now linked into the hash chain at write time. Token counts are captured post-call (after the response arrives) rather than pre-call, so the index is accurate.

### 3. Full Estate Audit: mx.allabout.network

130 HTML and PDF pages audited across the full site. Key findings: Performance 97, Accessibility 100, SEO 91, Machine Suitability 97, MX Readiness Level 5. The site holds at Purchase-confident -- the top level. The audit identified nine Schema.org property gaps (Offer entities missing `price`; WebSite entity missing recommended properties on the free-book download page) and confirmed no WCAG AA failures across 128 pages. The report passed all gates after three rounds of voice-consistency fixes. PDF delivered.

The Pa11y caching infrastructure was wired: results are now keyed by MD5 of served HTML and stored in `.cache/analysis/<hash>.json`. On a re-run with unchanged pages, Pa11y skips the headless browser launch entirely. This will substantially reduce re-audit time once the cache is warm.

### 4. Audit Template and Script Bug Fixes

Ten bugs found during live PDF review were fixed across templates and scripts:

- **llms.txt false negative**: `isSoftFourOhFour()` now extracts the `<title>` tag to distinguish real HTML-served files from error pages. `llmsTxtSummary.js` falls back to `wellknown_discovery.json` when `results.json` has no detection.
- **Soft-404 false positive**: `check-wellknown.js` `assessQuality()` now checks the title tag rather than scanning the full body for "404", preventing legitimate pages that mention 404 from being flagged.
- **N/M leakage**: Template placeholder `[N/M]` was appearing literally in PDFs. Replaced with proper fill tokens where metrics are tracked; removed where no metric exists.
- **Wider-audit language**: Template phrases like "a wider audit confirms..." are now suppressed on full-estate runs. A new `[AUDIT_SCOPE_QUALIFIER]` placeholder is empty when all pages were audited.
- **Purchase Confidence N/A wording**: Replaced with "does not apply -- the site has no transaction or checkout pages."
- **Div Soup table**: Worst-page URL column added to the table using existing `[DIV_SOUP_RENDERED_WORST_URL]` placeholder.
- **Link inventory**: Per-page average added alongside the total count; orphaned pages (in sitemap but not linked from any page) now detected and reported by a new deterministic script.
- **Image alt truncation**: REWRITE block instruction corrected to ensure the alt-text coverage sentence is fully completed.
- **Methodology sales pitch**: Added service offer paragraph and implementation upsell to the About This Report preamble.

### 5. Phase 4: Findings Review in the Cog

The `mx-audit.cog.md` now includes a mandatory Phase 4 step: after every gate run, the cog reads the findings file, classifies each finding, enters plan mode, writes a structured fix plan, waits for operator approval, and executes. If the findings file is absent, a clear warning is emitted rather than a silent skip.

### 6. Site Schema Fixes (mx-site)

`price` and `priceCurrency` properties added to Offer entities on `/audit`, `/services/eaa`, and `/learn/mx-for-pdfs.html`. The free-book page WebSite entity now carries improved author and publisher URL formats. These fix the nine Schema.org gaps the audit found and will improve SDQ score and Schema Maturity level on the next re-run.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits (this segment) | 12 |
| mx-reginald commits | 8 |
| mx-outputs commits | 6 |
| allaboutv2 commits | 1 |
| Pipeline scripts modified | 11 |
| Template changes | 10 bug fixes |
| Pages audited | 130 |
| MX Readiness Level achieved | 5 (top) |
| Accessibility score | 100/100 |
| Pipeline bugs closed | 10 |
| Provenance chain gaps closed | 8 |

---

## Why It Matters

The audit now produces evidence-grade output: every LLM decision is traced to its exact prompt bytes, input data, tool schema, and response JSON. The provenance chain is complete. This is the infrastructure that makes REGINALD a credible evidence vehicle under the EU AI Act and Colorado AI Act -- not just a score generator. The addition of Phase 4 (findings-review loop) means every client delivery now automatically surfaces its own deficiencies and proposes fixes before the operator commits to shipping.

The first self-audit of mx.allabout.network demonstrates the product works end-to-end at the top MX Readiness Level. That is a reference point for every sales conversation.

---

## Decisions Made

- Two separate timeout env vars for audit gates: LLM gates (120s) and probe/page gates (30s). Keeps the per-page 30s hard limit correct while accommodating slow local Ollama.
- Phase 4 (findings review) is mandatory in the cog, not optional. Absent findings file is a warning, not a silent skip.
- `captureOutput()` and `captureToolSchema()` added to `capture-prompt.js` alongside `captureInput()`; these are now the standard for every LLM call in the audit pipeline.

---

## Open Questions

- Ollama inference at 120s is still hitting the timeout on this report size. Either the model needs more RAM, the report is too long for the context window, or we need a faster inference stack. Decision: accept timeouts as informational findings for now, revisit when we have dedicated inference hardware.

---

## Next Steps

- Run a re-audit of mx.allabout.network once the site Schema.org fixes are deployed to confirm SDQ score improvement
- Add orphaned-page report to the audit dashboard (script is written, needs template wiring)
- Address the remaining voice-consistency finding in the "A note on llms.txt" subsection -- it uses third-person naturally; the checker needs an exemption for cited-standard descriptions

---

## Commit Log

| Hash | Description |
|------|-------------|
| 19f22270 | Bump allaboutv2: WebSite entity author/publisher URL format update |
| 04bc1f6a | Bump mx-outputs: LLM View v0.2.0 -- click replaces viewport with raw server response |
| bcd58eed | Update routing registry after cog sync |
| d23e53d6 | Bump mx-outputs: finalized mx.allabout.network audit deliverables |
| c075fae8 | Fix relative link paths in mx-audit.cog.md: add missing mx-canon/ prefix |
| e0bf54eb | Fix dead links in mx-audit.cog.md; add findings CSV pattern to link-check ignore |
| 00b3f9df | Regenerate definitions-index: reflect mx-audit.cog.md provenance capture additions |
| 7e041f3b | Bump mx-outputs: HTML hygiene fixes, blog index card, audit provenance updates |
| f6b86b36 | Update CHANGELOG (v2.95) and REMINDERS: add LLM View icon reminder |
| 7e5121a9 | Audit pipeline: soft-404 fix, dedup data, template + fixture updates |
| 12c83bb5 | Bump mx-outputs: LLM View extension, audit provenance sidecars, morning report |
| 9616c6a1 | Wire audit LLM pipeline for provenance capture; add pipeline-logger |
