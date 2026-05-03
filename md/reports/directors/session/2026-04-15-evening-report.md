---
title: "Co-Directors Report — Evening: MX one-pager, field scripts, audit-tool hardening + NEOM regen"
description: "Evening segment — two-column MX one-pager, field-audit scripts, three collector fixes, three gate skills, and an end-to-end NEOM regeneration that proved the whole pipeline clean."
author: "Tom Cranstoun"
created: 2026-04-15
modified: 2026-04-15
version: "2.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, audit-tool, mx-audit]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-15-evening-report.md
---

# Co-Directors Report — Evening: MX one-pager, field scripts, audit-tool hardening + NEOM regen

**Date:** 15 April 2026 — Evening
**Segment:** evening (17:00-onwards)

---

## Summary

The evening split into two phases. Phase A (before 19:00) delivered the two-column Machine Experience one-pager toolchain and two field-audit scripts — already reported in v1.0 of this segment report and retained below. Phase B (19:00-onwards) took on the audit tool itself: three concrete collector bugs that the NEOM regeneration exposed were fixed in sequence (sitemap-index discovery, nested-entity property resolution, JSON-LD byte-location measurement), three mandatory gate skills (deterministic verifier / fierce critic / LLM judgment v2) were shipped and wired into the audit-report workflow, and the full NEOM deliverable was regenerated end-to-end — all three gates green on a fresh 10-page crawl, with sidecar CSVs delivered alongside the PDF. The audit pipeline is now the most rigorously instrumented part of the toolkit; the report that triggered this work (the "fierce critic" complaint) is closed as an artefact and as a process.

---

## What Was Done

### 1. Machine Experience one-pager

- Added the Markdown master at `mx-canon/mx-the-gathering/deliverables/machine-experience-one-pager.md`, reproducing the two-page discipline/direction-of-travel + Track 01 / Track 02 layout.
- Wrote `scripts/bin/2pager.sh` — generic two-column pandoc + XeLaTeX runner using `multicol`.
- Wired `npm run pdf:twocol` in `package.json`.
- Fixed a line-break rendering bug (pandoc escaping `\\` outside raw blocks) by moving the footer into a raw-LaTeX fenced block with explicit `\par` terminators.

### 2. Field-usage audit tooling

- Added two reusable scripts that scan the corpus for `mx:` field mentions in non-YAML carriers.
- Extended coverage to `.yaml`, `.yml`, `.json` files with an MX-shape filter.
- Extended again to pick up `mx:` carrier usage in HTML/JS/CSS.

### 3. Collector fix 1 — sitemap-index discovery

- `isValidXML()` required a `<urlset>` tag and rejected `<sitemapindex>`, so index files fell through to the HTML-parsing branch and yielded zero URLs.
- `getUrlsFromSitemap()` detected sitemaps only by URL suffix `sitemap.xml`, which Shopify sub-sitemap URLs with query strings never match.
- Fixed both, with a content-sniff fallback for sitemap URLs that do not follow naming conventions.
- NEOM sitemap-index now recurses: 188 products + 57 pages + collections + blogs discovered.

### 4. Collector fix 2 — nested-entity property resolution

- Strict direct-property validation misreported `Product.sku` as missing whenever `sku` lived on the nested Offer — the Shopify default. 9 spurious findings per audited product.
- Validator now scans immediate nested object values (and arrays of objects) for the same property name. Property counted as present, tagged in `requiredPresentNested` / `recommendedPresentNested` with `{prop, via}` so reports can explain the nesting.
- `typeCounts` also split into `typeCountsByFormat: {json-ld, microdata, rdfa}` so downstream reasoning about server-side agents is not polluted by microdata itemtypes the outer HTML advertises.

### 5. Collector fix 3 — JSON-LD byte location (served-HTML-aware)

- The collector never recorded *where* JSON-LD lives in the HTML. On NEOM product pages the first JSON-LD block starts at byte 468,906 of 484,279 (96.9% through the document), past the 250 KB agent-truncation threshold and outside `<head>`. A server-side agent that parses only `<head>` or caps reads at 250 KB sees no structured data at all — but the previous audit cheerfully reported the data as "present".
- Added `jsonLdLocation` to every page's structured-data metrics: `{source, htmlTotalBytes, headCloseBytes, firstOffsetBytes, lastOffsetBytes, inHead, reachableBefore250KB, truncationThresholdBytes}`.
- **Measured against the SERVED HTML, not the rendered DOM** — server-side agents fetch the served HTML without running JavaScript; measuring the rendered DOM would overstate reachability on sites that inject JSON-LD via client-side JS, and byte offsets in the rendered DOM differ from the wire bytes the agent receives.
- `structured_data_findings.csv` now emits a `severity: "location"` finding when JSON-LD is present but either outside `<head>` or past the 250 KB threshold, with a rationale that names the exact byte offsets.

### 6. Three gate skills wired into the audit-report workflow

- Step 12.6 — `scripts/verify-audit-report.js`: deterministic verifier of numeric / URL / fenced-HTML claims. Exit code 1 blocks PDF.
- Step 12.7 Part A — `scripts/audit-fierce-critic.js`: seven-category pattern matcher for hallucinated framing (leaked boilerplate, un-cited industry comparisons, internal contradictions, image/Pa11y claim mismatches, scope overreach, overpromise). Exit code 1 blocks PDF.
- Step 12.7 Part B — `scripts/audit-llm-judgment.js` (NEW, v2): Sonnet 4.6 call with a cached rubric. Eight categories across four reader-level checks (recommendation consistency, tone consistency, sample-vs-total wording, hedged-vs-asserted balance). Structured JSON output via `output_config.format`. Prompt-pack fallback for sessions without the Anthropic API. Exit code 1 blocks PDF.
- Persistent `ANTHROPIC_API_KEY` wiring: `~/.zsh/config/secrets.zsh` (chmod 600, guarded source from `.zshrc`).

### 7. Sidecar CSV delivery pattern

- `scripts/audit-sidecar-csv.js` copies the per-category audit CSVs into the client's PDF-delivery folder as `{client-slug}-{type}.csv`. The PDF carries a summary row per (severity, property) pair and a pointer; the full per-page detail lives in the sidecar.
- NEOM delivery bundle: PDF + 5 sidecars (structured-data-findings, accessibility, pa11y-findings, image-optimisation, link-analysis) in `mx-outputs/pdf/outreach/2026-04-15/`.

### 8. NEOM 2026-04-15 end-to-end regeneration

- Full `/audit-site` pipeline on a fresh 10-page crawl against `https://neomwellbeing.com/sitemap.xml`.
- Corrected the "JSON-LD is in the `<head>`" claim that the previous report had shipped with — it is in the `<body>`, past the 250 KB threshold, on every audited page.
- Structured Data Findings table collapsed from 19 repeated rows to 2 summary rows (1 per `(severity, property)` pair).
- All three gates green: verifier 35/0/1 skip · fierce-critic 0 · llm-judgment 0.
- PDF regenerated (121 KB) alongside the 5 sidecar CSVs.

### 9. Recovered a crashed session from the morning

- The mx-audit fixes that triggered this whole chain came from a session that crashed with `API Error: 500` mid-work. Recovered all uncommitted changes from disk, reattached the mx-audit submodule from detached HEAD to `main`, pushed a clean commit chain. No work lost.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits this segment | 15+ (Phase A + B) |
| mx-audit commits | 3 new (sitemap fix, nested resolution, jsonLdLocation) |
| mx-crm commits | 4 new (NEOM regen x2, sidecar relocation) |
| mx-outputs commits | 5 new (one-pager PDF, NEOM PDF x3, sidecar CSVs) |
| New scripts | `scripts/bin/2pager.sh`, 2 field-audit scripts, `audit-fierce-critic.js`, `audit-llm-judgment.js`, `audit-llm-judgment.prompt.md`, `audit-sidecar-csv.js` |
| New npm target | `pdf:twocol` |
| Unit tests added | 8 (Schema maturity entity-aware x3, truncation modes x3, jsonLdLocation x3, plus fixture regression) |
| Audit gates live | 3 (verifier, fierce-critic, llm-judgment) |
| NEOM gate status | verifier 35/0/1 · fierce-critic 0 · llm-judgment 0 |
| Exposed API key | Rotated (user action) |

---

## Decisions Made

- **Sidecar CSVs live with the PDF, not the markdown source.** They travel as a single delivery bundle to the client. The markdown source (and verification/fierce-critic/llm-judgment JSON artefacts) stay in `mx-crm` for traceability.
- **LLM judgment measures the served HTML, not the rendered DOM.** This changes the answer for any site that injects structured data via JavaScript — correctness wins over convenience.
- **Collapse-to-summary as a PDF-readability rule.** When a findings table has more than ~8 rows of the same `(severity, property)` shape, the PDF shows one row per pair and references a sidecar CSV. The long table belongs in the CSV; the PDF belongs to the reader.

---

## What Changed About Me

- I will now default to **grepping cached HTML before writing any positive claim** — the first NEOM report shipped with a false "JSON-LD in the `<head>`" claim because the CSV columns summarised reality but did not reveal the location. The LEARNINGS file already carries this rule for CSV-compression loss; this session reinforced it.
- I over-committed mid-session when hook errors forced a retry — there are two NEOM-regen commit pairs on mx-crm/mx-outputs where one would have been cleaner. Not enough to rebase in anger, but the session-close discipline is to write once, commit once.

---

## Next Steps

- End-to-end test for the three gate scripts — currently only unit-tested and manually verified against one client. A fixture-driven integration test that feeds known-bad reports and asserts exit 1 on each category would lock the gate behaviour.
- `fields:gate` / `cog:validate` runtime in the audit pipeline — the gates enforce prose accuracy but don't yet check the report's frontmatter against `fields-data.yaml`.
- Review pre-existing `mx-outputs/pdf/presentations/` deletions (carried forward from the previous v1.0 report) and either commit the removal or restore.
- Consider promoting `2pager.sh` into the `mx-create-pdf` skill as an additional layout option.

---

## Commit Log

### Hub (this segment, Phase B post-4dfc397)

| Hash | Description |
|------|-------------|
| 5b3b499 | Bump mx-crm/mx-outputs: sidecar CSVs moved to PDF delivery folder |
| a806202 | Bump mx-crm/mx-outputs: NEOM 2026-04-15 regen with JSON-LD location fix + sidecar CSVs |
| 1d4bf45 | Bump mx-audit (jsonLdLocation, nested-entity resolution) + mx-outputs (remove stale presentation PDF) |
| 03d3391 | LEARNINGS: pandoc `\\` line breaks in raw-LaTeX need fenced blocks |
| 9d559d1 | CHANGELOG: evening 2026-04-15 — MX one-pager + canon split + field scripts |
| 7be4c6c | Machine Experience one-pager + canon classification + field audit scripts |
| d37cb33 | Add audit-sidecar-csv script; bump mx-audit for jsonLdLocation metric |
| a39dc05 | Bump mx-audit: collector nested-resolution + format-split typeCounts |

### Hub (this segment, Phase A pre-4dfc397 — retained from v1.0)

| Hash | Description |
|------|-------------|
| 4dfc3976 | Bump mx-crm/mx-outputs: NEOM 2026-04-15 regenerated end-to-end (gates green) |
| e8482c95 | Add canon classification manifest for standard/carriers/extensions split |
| 05349955 | Field scripts: scan HTML/JS/CSS for non-YAML mx: carriers |
| ec7b57bc | Field scripts: extend scan to .yaml/.yml/.json + MX-shape filter |
| bde3317b | Bump mx-crm/mx-outputs: clear NEOM 2026-04-15 artifacts |
| d79b9b81 | Bump mx-audit: sitemap-index discovery + query-string-safe detection |
| c5524ca9 | Add two reusable field-usage audit scripts |

### Submodules (this segment, all phases)

| Repo | Hash | Description |
|------|------|-------------|
| mx-audit   | 95614f6 | Collector: jsonLdLocation metric (served-HTML-aware) + location finding |
| mx-audit   | bfff433 | Collector: nested-entity property resolution + format-split type counts |
| mx-audit   | 3b8c1f4 | Fix sitemap discovery: sitemap-index + query-string-safe detection |
| mx-crm     | 7373fc7 | NEOM: relocate sidecar CSVs to PDF delivery folder |
| mx-crm     | 070554d | NEOM 2026-04-15: corrected JSON-LD location narrative + sidecar CSVs |
| mx-crm     | 79b701d | NEOM 2026-04-15: fresh regenerated report (gates green) |
| mx-outputs | 9da9430 | NEOM: sidecar CSVs + regenerated PDF (pointer-updated) |
| mx-outputs | a77e31c | NEOM 2026-04-15: regenerated PDF (gate-green, JSON-LD-location-corrected) |
| mx-outputs | a3cc159 | Remove stale MX-what-why-when presentation PDF + orphan .mx.yaml.md |
| mx-outputs | 70363b9 | Directors report: evening 2026-04-15 — MX one-pager + field audit scripts |
| mx-outputs | b98e2b6 | Add Machine Experience one-pager PDF (two-column layout) |
| mx-outputs | a907459 | NEOM 2026-04-15: regenerated PDF from gate-green markdown |
