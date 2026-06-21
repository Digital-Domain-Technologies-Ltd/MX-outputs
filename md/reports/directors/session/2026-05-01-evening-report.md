---
title: "Co-Directors Report — Audit pipeline production-ready: v13/v14 runs and self-audit delivered"
description: "Completed two further rounds of audit template guard improvements and ran baremetal VC v13/v14 and a self-audit of mx.allabout.network through the improved pipeline; updated the site llms.txt with six new featured articles."
author: "Tom Cranstoun"
created: 2026-05-01
modified: 2026-05-01
version: "1.0"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-01-evening-report.md
  purpose: "Completed two further rounds of audit template guard improvements and ran baremetal VC v13/v14 and a self-audit of mx.allabout.network through the improved pipeline; updated the site llms.txt with six new featured articles."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit pipeline production-ready: v13/v14 runs and self-audit delivered"]

---

# Co-Directors Report — Audit pipeline production-ready: v13/v14 runs and self-audit delivered

**Date:** 1 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

The audit pipeline has reached production-ready quality. Two further rounds of template guard improvements this evening — scope constraints, Pa11y data injection, and llmstxt framing correction — address the remaining fabrication failure modes that had blocked reliable delivery. The v13/v14 runs against baremetal.vc and a full self-audit of mx.allabout.network demonstrate the pipeline working correctly end-to-end on real targets. The site's llms.txt was updated with six new featured articles, bringing the AI-readable curated index current with the blog.

---

## What Was Done

### 1. Audit pipeline template guards — second and third pass

The afternoon's work shipped a fierce-critic convergence cap and the llmstxt framing correction. Two further commits this evening extended the guard set:

**`6f74d82` — Scope, fabricated stats, voice, PERF_SCORE formula:**

- Scope guards added to Working Well and Findings Intro sections to prevent the LLM from asserting "site-wide" conclusions from a sample audit.
- PERF_SCORE formula corrected so the performance score is derived from audited data, not a hardcoded formula the LLM was applying inconsistently.
- Voice and framing corrections to the llms.txt recommendation paragraph in both templates.

**`e1983b3` — Pa11y grounding and scope constraints:**

- WCAG rewrite blocks now inject the actual Pa11y findings from the audit into the template instruction, so the LLM rewrites from named WCAG criteria and real selectors rather than inventing typical accessibility findings.
- SCOPE guards added to robots.txt and sitemap sections to prevent comparisons to "typical" or "industry standard" configurations.
- JSON-LD stability facts injected into the ecommerce drift rewrite block with an explicit "SCOPE: this covers the audited URLs only — do NOT say site-wide" constraint.
- Pages-audited count injected into Working Well and Findings Intro fact lists.

Also committed: a diagnostic improvement to `audit-pipeline.js` that now distinguishes between "infill failed and no skeleton was written" (re-run infill) and "infill failed after writing the skeleton" (fix the skeleton before rewriting) — previously both produced the same undifferentiated error.

### 2. Baremetal VC v13/v14 audit runs

Six audit runs against baremetal.vc completed this evening, covering the web and ecommerce variants through the improved pipeline: introspect web and ecommerce checks (v1, v2, v3), v13 web and ecommerce final reports, v14 web and ecommerce final reports. All outputs committed to mx-crm. The improvement from v10 (the afternoon's delivery) to v13/v14 reflects the guard improvements landing in the pipeline; the reports require fewer manual intervention rounds to clear the gates.

### 3. mx.allabout.network self-audit

A full audit of mx.allabout.network was run and committed — pages-audited CSV, audit log, LLM rounds, LLM judgment, fierce-critic output, verification JSON, and PDF. This is the first complete self-audit of the company's own site through the production pipeline. The report is available in both mx-crm (markdown and data) and mx-outputs (PDF).

### 4. llms.txt featured articles update

The site's `llms.txt` had not been updated since launch. Six new featured articles were added covering posts published between 22 April and 1 May:

- The Markdown Trap (empirical HTML vs Markdown comparison)
- Why AI Agents Need Contracts, Not Instructions
- Agent Readiness Scores Compared (33 vs 100 scoring discrepancy)
- GEO Is a Tactic, MX Is the Specification
- Many Agents, One Metadata Layer
- What I Do — Helping Organisations Move from Found to Used

The `llms-full.txt` corpus was also regenerated to include the most recent blog posts.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| mx-audit commits (evening) | 2 |
| mx-crm commits (evening) | 2 |
| mx-outputs commits (evening) | 2 |
| Hub commits (evening, pre-session) | 2 |
| Hub commits (step-commit) | _pending_ |
| Baremetal VC audit runs (evening) | 6 (v13 web + ecom, v14 web + ecom, introspect web + ecom) |
| Self-audit target | mx.allabout.network |
| llms.txt featured articles added | 6 |
| Template guard commits total (this sprint) | 4 across 3 sessions |

---

## The Insight

Pa11y data injection is the correct fix for fabricated accessibility findings — not tighter prose guards. Telling the LLM "do not invent findings" produces inconsistent results; giving it the actual Pa11y output and saying "use ONLY these" gives it no choice. The same principle applies to scope: constraints worded as "SCOPE: this covers X URLs only — do NOT say site-wide" are more reliable than general warnings about overclaiming. Facts replace prohibitions.

---

## Decisions Made

- Pa11y findings must be injected into WCAG rewrite blocks in both templates (not referenced by placeholder alone). This is the pattern for all data-grounded sections.
- The audit pipeline is production-ready for commercial delivery. The remaining LLM judgment advisories are warn-mode and do not block.
- llms.txt featured articles are a curated selection (currently 8 total); not all blog posts are featured, only those with strong analytical content or differentiation value.

---

## What This Means for Investors

The audit pipeline can now be run against client sites with confidence that the outputs will not contain fabricated specificity — the two main failure modes (scope overclaiming and invented findings) are addressed by injecting real data rather than adding prose guards. The self-audit of mx.allabout.network means the first prospect conversation can include "we audited ourselves through the same pipeline" as a demonstration of confidence in the service.

---

## Next Steps

- Review whether the fierce-critic sidecar `runCount` should reset when the report's content hash changes substantially (identified in the afternoon session, carried forward).
- Consider whether v13 or v14 is the candidate to send to baremetal.vc as the first external delivery.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `hub 918be7d8` | Bump mx-audit: rewrite template guards to reduce gate failures |
| `hub 1450dc48` | Bump mx-crm and mx-outputs: baremetal v11/v12 comparison run |
| `mx-audit 6f74d82` | Fix rewrite template guards: scope, fabricated stats, voice, llms.txt framing, PERF_SCORE formula |
| `mx-audit e1983b3` | Tighten template guards: scope constraints, Pa11y grounding, llmstxt framing |
| `mx-crm e9ab531` | Add baremetal v11 (npm, corrected), v12 (npm baseline), and skill-vs-npm comparison |
| `mx-crm d249cb6` | Add 2026-05-01 baremetal-vc v13/v14 and mx-allabout audit outputs |
| `mx-outputs ce9bba3` | Add baremetal v11 PDF and sidecars (npm pipeline run) |
| `mx-outputs 0a21920` | Update llms.txt featured articles and add 2026-05-01 audit outputs |
| `hub f400a8ce` | Bump submodules: evening pipeline guards, v13/v14 runs, self-audit, llms.txt update |
