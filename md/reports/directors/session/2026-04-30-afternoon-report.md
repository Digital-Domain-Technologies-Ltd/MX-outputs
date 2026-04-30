---
title: "Co-Directors Report — Audit pipeline coordinator + 3 robustness gates ship"
description: "Afternoon: coordinator script automates the full mechanical audit pipeline; three new gate scripts close the weakest links in the LLM phases; all shipped and tested against baremetal.vc."
author: "Tom Cranstoun"
created: 2026-04-30
modified: 2026-04-30
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
---

# Co-Directors Report — Audit pipeline coordinator + 3 robustness gates ship

**Date:** 30 April 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

The afternoon converted the audit pipeline from a manually-driven sequence of skill invocations into a two-command workflow: `audit-pipeline.js <url>` runs everything mechanical, prints instructions for the LLM phases, then `audit-pipeline.js --gates <report.md>` runs all six quality gates and generates the PDF. Three new scripts close the weakest links identified in the morning's retrospective — placeholder drift, voice drift, and unchecked American English — so the LLM phases now have automated backstops rather than relying on reviewer attention. All changes verified against the baremetal.vc report without regressions.

---

## What Was Done

### 1. Audit pipeline coordinator script

`scripts/audit-pipeline.js` is a new Node.js coordinator that drives everything the LLM cannot do alone. In collect mode it runs egress checks, wellknown probes, sitemap discovery, the mx-audit crawl, error-page tests, agent-access tests, served/rendered gap analysis, and — new this session — pre-flight findings generation, all in sequence with structured logging to the human-in-the-loop CSV. Every step logs twice: once on invocation (parameters, outcome `n-a`) and once on completion (outcome `pass/fail/warn/skip`). In `--gates` mode it runs six gates in order (template coverage, tone conformance, template leaks, deterministic verifier, fierce critic, LLM judgment) and calls `mx.pdf.sh` for the final PDF. Two npm shortcuts added: `audit:pipeline` and `audit:gates`.

### 2. Three new robustness gate scripts

Three scripts, each with an authoritative copy in `mx-audit/scripts/` and a delegation stub in `scripts/`, target the failure modes most likely to degrade report quality between runs:

- **`generate-preflight-findings.js`** — reads all audit CSVs and JSON, derives schema maturity level from the `mxStack.structuredDataQuality` metric (levels 0-4), and writes a single structured `preflight-findings.json`. This becomes the LLM phase's single source of truth instead of navigating ten-plus raw result files — eliminating the root cause of placeholder drift.

- **`check-template-coverage.js`** (Gate 0a) — scans the finished report for unfilled `[PLACEHOLDER]` patterns after stripping code blocks, inline code, and HTML comments. Exit 1 blocks the gates run if any infill step was silently skipped.

- **`check-report-tone.js`** (Gate 0b) — deterministic four-category enforcement: banned verdict words (with a phrase allow-list for technical compounds like "broken links", "failure modes", "failure at any stage"), American English spellings (excluding HTML element names and software context terms), prescriptive timescales, and pricing in prose. Verified against the baremetal.vc report: zero violations. Exit 1 blocks the gates run.

### 3. Pipeline PDF improvements

Earlier in the afternoon: TOC page numbers now appear in every generated PDF (Puppeteer two-pass approach), tables render with alternating row shading, and the served/rendered gap checker was converted from CommonJS to ESM to resolve a `require is not defined` runtime error in the mx-audit package. Schema maturity Level 0 ("Clean slate") added to both the e-commerce and DOM analysis templates so the schema maturity table is complete for sites with no structured data.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (hub, afternoon) | 6 |
| Commits (submodules, afternoon) | 2 (mx-audit e08f6b8, mx-crm 69a9c60) |
| Files changed | 15 |
| Lines added | +893 |
| Lines removed | -15 |
| New scripts | 4 (audit-pipeline.js, generate-preflight-findings.js, check-template-coverage.js hub stub, check-report-tone.js hub stub) |
| New npm scripts | 5 (audit:pipeline, audit:gates, audit:preflight, audit:tone, audit:coverage) |
| Gates in pipeline | 6 (was 4) |

---

## Why It Matters

The audit pipeline is now reproducible by design, not by discipline. Before this afternoon, each audit run depended on the operator remembering to invoke six separate skill phases in order, with no automated check that placeholders were filled or that prose tone was consistent. That is the primary reason early audits required multiple gate-failure cycles. The coordinator collapses the mechanical work into two commands, and the three new backstop scripts catch the most common LLM-phase errors before they reach the client report. The second and third client audits will run faster and produce higher-quality first drafts.

---

## The Insight

The pre-flight findings JSON solves a problem that wasn't obvious until the baremetal.vc run: the LLM phases were navigating raw audit CSVs with different column layouts, date formats, and null-value conventions. Each navigation decision was a small opportunity for the model to invent a number rather than read one. One pre-digested JSON file with a consistent schema eliminates most of those opportunities. The right response to LLM variance in data-intensive tasks is to reduce the number of raw-data decisions the LLM has to make, not to refine the prompt.

---

## Next Steps

- Run the second client audit using the coordinator to validate the two-command workflow end to end
- Wire `generate-preflight-findings.js` into the `/audit-scores` skill so Phase 2 starts from the JSON rather than navigating raw CSVs directly
- Add `--gates` invocation to the `/audit-report` skill documentation so the gates mode is the default finishing step

---

## Commit Log

| Hash | Repository | Description |
|------|------------|-------------|
| `6e79029f` | MX-hub | Audit pipeline robustness: preflight-findings, template-coverage, tone gate |
| `2c6664ad` | MX-hub | Add audit-pipeline.js: mechanical coordinator for full audit pipeline |
| `b6e8657e` | MX-hub | Bump mx-audit: Level 0 in all templates, gap script ESM fix |
| `d8755210` | MX-hub | Bump mx-audit + mx-outputs: TOC page numbers, professional CSS, Schema Level 0 |
| `48149ef7` | MX-hub | Bump mx-audit + mx-outputs: CSS injection fix + baremetal.vc PDF regen |
| `8c8919c3` | MX-hub | Bump mx-outputs: baremetal.vc PDF regen |
| `e08f6b8` | mx-audit | Add check-template-coverage.js and check-report-tone.js gate scripts |
| `69a9c60` | mx-crm | baremetal.vc: update gate outputs and audit log from pipeline run |
