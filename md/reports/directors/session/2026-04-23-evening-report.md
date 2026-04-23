---
title: "Co-Directors Report — NEOM Wellbeing Report + Pa11y Recurring Pattern Detector"
description: "Completed NEOM Wellbeing ecommerce audit Pass 2 rewrite; built pa11y recurring pattern detector with adjusted accessibility scoring; updated audit toolchain and skills."
author: "Tom Cranstoun and Maxine"
created: 2026-04-23
modified: 2026-04-23
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
---

# Co-Directors Report — NEOM Wellbeing Report + Pa11y Recurring Pattern Detector

**Date:** 23 April 2026 — Evening
**Segment:** evening (17:00 BST onward)

---

## Summary

The evening had two workstreams. The first completed the NEOM Wellbeing ecommerce audit: Pass 2 rewrite of the full report, all verification gates passed (readability, frontmatter, template-leak, deterministic verifier 51/0/21, fierce-critic clean), PDF generated and client delivery ZIP assembled. The second introduced a pa11y recurring pattern detector into the audit pipeline — the key insight being that NEOM Wellbeing's 190 accessibility issues collapse to approximately five recurring Shopify template-level selectors, meaning one theme edit per pattern resolves all instances site-wide. The scoring model was updated to reflect this: template-pattern repeat instances are discounted to 20% weight, producing an adjusted accessibility score that is fairer to sites where the underlying issue is a single template component rather than pervasive per-page errors.

---

## What Was Done

### 1. NEOM Wellbeing Audit Report — Pass 2 Complete

Completed the full LLM rewrite pass for the ecommerce audit report. Key decisions:

- Priority 1: JSON-LD past 250KB truncation threshold (byte 869,127 on homepage) — not "missing schema" since Offer IS present
- Catalogue Visibility Scorecard: 3 Yes + 1 Partial + 6 No = 3.5/10
- Shopping Agent Scenarios: 2 of 6 partially supported
- Fixed three infill errors that passed through: missing client name, incorrect llms.txt status, incorrect sitemap status
- Five rounds of gate fixes: universal claims qualifiers, two fierce-critic rounds (overpromise and uncited-industry-claim)
- PDF: 193KB, 11 sidecar CSVs, client delivery ZIP

### 2. Pa11y Recurring Pattern Detector

New `generatePa11yRecurringPatterns()` in `mx-audit/src/utils/reportUtils/reportGenerators.js`:

- Groups issues by `(issueCode, selector)` pair across all pages
- Threshold: patterns on >= 40% of audited pages flagged `isTemplatePattern`
- Computes `adjustedScore`: template-pattern repeat instances deduct at 20% of normal weight
- Writes `pa11y_recurring_patterns.json` alongside `pa11y_findings.csv`

`infill-report.js` updated to fill:
- `[WCAG_RECURRING_PATTERNS]` — softening sentence when template patterns detected
- `[A11Y_ADJUSTED_SCORE]`, `[A11Y_ADJUSTED_BAND]`, `[A11Y_ADJUSTED_GRADE]` — from adjusted score

Both audit templates: balanced scorecard accessibility row now uses adjusted band/grade. Ecommerce template Priority 3 finding gains `[WCAG_RECURRING_PATTERNS]` slot. Skills (audit-scores, audit-report) updated to document new sidecar and placeholders.

### 3. Hub Housekeeping

- `audit-fierce-critic.js`: added four rewrite-process-leak detectors (scoring methodology language that leaked in NEOM Wellbeing Pass 2)
- `.gitignore`: added `results/` to exclude stray mx-audit runtime output from the hub root

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits (evening) | 7 |
| mx-audit commits | 1 |
| mx-crm commits | 1 |
| mx-outputs commits | 1 |
| Hub files changed | 19 |
| Lines added (hub) | +645 |
| Lines removed (hub) | -39 |

---

## Next Steps

- NEOM Wellbeing report ready for client delivery
- Adobe LLM Optimizer blog post and Chapter 22 update still pending (plan file at `.claude/plans/make-this-work-on-iridescent-lake.md`)
- Pa11y recurring pattern detector will be exercised on next audit run; consider whether the adjusted score threshold (40% of pages) needs calibration against more sites

---

## Commit Log

### Hub

| Hash | Description |
|------|-------------|
| 901cfcf4 | Update submodule pointers: tg.community fix |
| 850ebe61 | fierce-critic: add url-not-visible check for tg.community link text |
| e0116d5d | Update submodule pointers: mx-crm (NEOM report), mx-outputs (NEOM PDF) |
| d67c6ae1 | Audit pipeline hardening: fiercer critic, universal claims check, hook integration |
| de8a1776 | feat: NEOM Wellbeing audit report + outreach assets (2026-04-23) |
| a45dcc83 | feat: add LLM judgment 3-round cap hook + update mx-audit submodule |
| 51437b01 | chore: update mx-audit submodule pointer (crawl-delay fix) |

### mx-audit

| Hash | Description |
|------|-------------|
| 66d5f1e | feat: add pa11y recurring pattern detector and adjusted accessibility scoring |

### mx-crm

| Hash | Description |
|------|-------------|
| 3f09edc | Add NEOM Wellbeing audit report Pass 2 rewrite and all sidecar deliverables |

### mx-outputs

| Hash | Description |
|------|-------------|
| f7c4acb | Add NEOM Wellbeing final PDF and full sidecar delivery bundle (2026-04-23) |
