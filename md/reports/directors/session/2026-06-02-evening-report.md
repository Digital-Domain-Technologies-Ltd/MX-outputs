---
title: "Co-Directors Report — Full Audit Run, Pipeline Overhaul, A/B Detection, specification.website Audit, MX Framing Fix"
description: "Full estate audit; A/B test detection pipeline; specification.website audit with joost-mx comparison; MX comprehension framing corrected across audit surfaces"
author: "Tom Cranstoun"
created: 2026-06-02
modified: 2026-06-02
version: "2.0"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-02-evening-report.md
  purpose: "Full estate audit; A/B test detection pipeline; specification.website audit with joost-mx comparison; MX comprehension framing corrected across audit surfaces"
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Full Audit Run, Pipeline Overhaul, A/B Detection, specification.website Audit, MX Framing Fix"]

---

# Co-Directors Report — Full Audit Run, Pipeline Overhaul, A/B Detection, specification.website Audit, MX Framing Fix

**Date:** 2 June 2026 — Evening (continued)
**Segment:** Evening (since 5pm)

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

### 7. A/B Test Detection Pipeline

A complete A/B test and personalisation vendor detection system was built into the audit pipeline. A vendor registry (`ab-test-vendors.json`) carries 12 vendors (Optimizely, VWO, AB Tasty, Ninetailed, LaunchDarkly, and others), each with `scriptPatterns`, `cookiePatterns`, `jsGlobals`, and `inlinePatterns`. The detection script (`check-ab-test.js`) scans cached HTML for vendor injectors and cross-references the slowest-page probe for H1 content variance across cache-busted fetches.

The key insight documented for clients: machines are stateless visitors. They arrive with no cookies, receive a random A/B cohort on each fetch, and may ingest different variants of the same page on every training sweep. Contentful's audit confirmed 7 A/B vendors including Ninetailed, with content variance on `/products/personalization/`. A new blog draft (`ab-test-lying-to-machines.html`) articulates the stateless machine visitor problem and its implications for training corpus builders.

The pipeline step ordering was also corrected: `check-ab-test.js` now runs at Step 8.5 (after `slowest-page-probe` at Step 8a), ensuring `contentVarianceDetected` is available when the vendor detector runs.

### 8. Proportional PDF Table Widths

Audit report PDF tables previously distributed column width equally regardless of content. Pandoc uses separator-row dash lengths to set `<col width>` proportions in HTML output. Separator lengths were fixed across all major tables in the web-audit-suite and ecommerce templates (SDQ Breakdown, Structured Data Inventory, MX Journey, AI Agent Access, Security Headers, Cross-Page Consistency, Inline Code Duplicates). The Div Soup "Worst page" URL column was moved below the table as a note rather than a truncated cell.

### 9. HTML Sitemap Nav Exclusion from Consistency Patterns

HTML sitemap pages (`/sitemap`, `/site-map`) are navigational directory listings. The consistency checker was previously flagging them for missing OG/Twitter/Canonical tags. A `navPages.js` config module and `isNavPageForConsistency()` helper were added; the collector now excludes nav pages from the five content-only pattern checks. This prevented the Contentful and specification.website audits from false-positive findings on sitemap pages.

### 10. specification.website Audit (Joost de Valk)

A full 11-page audit of `specification.website` was completed. Key findings: AI Suitability 100/100 on all 11 pages, all 5 security headers on every response, all 8 AI agents return HTTP 200, native `Accept: text/markdown` content negotiation (not a CDN transform), 7 well-known paths present (llms.txt, llms-full.txt, agent-card.json, api-catalog, security.txt, humans.txt), `Content-Signal: search=yes, ai-input=yes, ai-train=yes` in robots.txt. MX Readiness Level 1 (Discoverable) -- score thresholds for Level 2 already met, only governance fields missing.

Four priority findings: (1) WCAG 1.4.3 contrast 1.85:1 on breadcrumb separators -- single CSS token change; (2) heading jump on one page; (3) MX governance metadata absent; (4) Schema Level 1 recommended properties missing.

A root-level comparison document (`joost-mx.md`) was created: specification.website is the technical floor -- what to implement; MX is the governance envelope above it -- provenance, attestation, lifecycle. "specification.website defines the floor. MX defines what sits on top of it."

### 11. MX Comprehension Framing Corrected

The audit surfaces and several published files contained the overclaim "Agents can cite and attribute" and "MX enables machines to cite." This is wrong. MX improves machine comprehension; machines decide independently what they cite and how they use content. The correct framing is: "Machines have context for accurate attribution."

Fixed in: web-audit-suite and ecommerce templates (Level 2 table row), mx-readiness-scorecard.md (Level 2 row and Business Impact examples), rewrite-report.system.md (CITATION CAPABILITY HONESTY section rewritten as MX COMPREHENSION FRAMING with explicit causal chain: richer metadata → better comprehension → machines better-placed to use content accurately → their decision), audit-report skill, and the published `machine-experience-adding-metadata.html` blog post + regenerated llms-full.txt.

### 12. Audit Template Voice and @id Gate Fixes

The "About This Report" section in both templates had mixed voice: first-person infill mixed with third-person template boilerplate ("The scoring criteria follow...", "Most of the audit is scripted SOPs"). Fixed to "Our scoring criteria follow..." / "We use scripted SOPs" throughout.

The section-sanity gate was firing when LLMs wrote bare backtick-formatted `` `@id` `` in recommendation bullets without prose introduction. A DO_NOT rule was added to both templates' Priority block REWRITE instructions, and a CODE-TOKEN HYGIENE rule was added to the rewrite system prompt, directing the model to write "JSON-LD identifier cross-references" instead.

### 6. Site Schema Fixes (mx-site)

`price` and `priceCurrency` properties added to Offer entities on `/audit`, `/services/eaa`, and `/learn/mx-for-pdfs.html`. The free-book page WebSite entity now carries improved author and publisher URL formats. These fix the nine Schema.org gaps the audit found and will improve SDQ score and Schema Maturity level on the next re-run.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits (this segment) | 17+ |
| mx-outputs commits | 8 |
| Pipeline scripts added/modified | 15+ |
| Audit templates modified | 2 |
| System prompts modified | 1 |
| Pages audited (mx.allabout.network) | 130 |
| Pages audited (Contentful re-run) | 10 |
| Pages audited (specification.website) | 11 |
| MX Readiness Level -- mx.allabout.network | 5 (top) |
| MX Readiness Level -- specification.website | 1 (Discoverable, Level 2 blocked only by governance fields) |
| A/B test vendors in registry | 12 |
| Priority findings -- specification.website | 4 |
| Audit pipeline template voice bugs fixed | 2 |
| MX framing overclaims corrected | 6 files |

---

## Why It Matters

The audit now produces evidence-grade output: every LLM decision is traced to its exact prompt bytes, input data, tool schema, and response JSON. The provenance chain is complete. This is the infrastructure that makes REGINALD a credible evidence vehicle under the EU AI Act and Colorado AI Act -- not just a score generator. The addition of Phase 4 (findings-review loop) means every client delivery now automatically surfaces its own deficiencies and proposes fixes before the operator commits to shipping.

The first self-audit of mx.allabout.network demonstrates the product works end-to-end at the top MX Readiness Level. That is a reference point for every sales conversation.

---

## Decisions Made

- Two separate timeout env vars for audit gates: LLM gates (120s) and probe/page gates (30s). Keeps the per-page 30s hard limit correct while accommodating slow local Ollama.
- Phase 4 (findings review) is mandatory in the cog, not optional. Absent findings file is a warning, not a silent skip.
- `captureOutput()` and `captureToolSchema()` added to `capture-prompt.js` alongside `captureInput()`; these are now the standard for every LLM call in the audit pipeline.
- A/B test detection placed at Step 8.5 (after slowest-page-probe) not Step 6.5. Content variance data must exist before vendor detection can cross-reference it.
- MX framing corrected globally: MX improves comprehension; it does not cause citation. "Machines have context for accurate attribution" replaces "Agents can cite and attribute" everywhere.
- `specification.website` audit: use the web-audit-suite template (not ecommerce -- no commerce signals), frame the story as "technical floor vs governance envelope." joost-mx.md captures this comparison as a standing reference document.

---

## Open Questions

- Ollama inference at 120s is still hitting the timeout on this report size. Either the model needs more RAM, the report is too long for the context window, or we need a faster inference stack. Decision: accept timeouts as informational findings for now, revisit when we have dedicated inference hardware.
- A/B test generic signal detection has a false-positive problem: "toggle" in dark-mode buttons triggers the scanner. The pattern list needs tightening (require script-load patterns, not inline UI patterns) before the section is reliable enough to show without caveats.

---

## Next Steps

- Run a re-audit of mx.allabout.network once the site Schema.org fixes are deployed to confirm SDQ score improvement
- Add orphaned-page report to the audit dashboard (script is written, needs template wiring)
- Send specification.website audit to Joost de Valk as a reference client engagement
- Tighten A/B test generic signal patterns to reduce false positives from UI toggle elements
- Consider joost-mx.md as the basis for a positioning blog post or sales one-pager

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
| 9660fdb4 | A/B test detection pipeline; stateless machine visitor pattern; lockstep checks |
| 03ae467f | A/B test detection: fix pipeline ordering; add generic signal scan |
| 1484a0f8 | Fix: exclude HTML sitemap pages from content-only consistency patterns |
| 16b76a07 | (mx-outputs) Fix MX comprehension framing in blog; remove citation overclaim; regen llms-full.txt |
| 4aff597b | (mx-outputs) Add specification.website audit: report, PDF, sidecars, gate artefacts |
