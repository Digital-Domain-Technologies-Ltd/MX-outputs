---

title: "Co-Directors Report — Handbook PDF Rebuild + Reginald Explainer"
created: "2026-03-16"
version: "2.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "morning"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-16-morning-report.md
  purpose: "Co-Directors Report - Handbook PDF Rebuild + Reginald Explainer"
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Handbook PDF Rebuild + Reginald Explainer"]
---


# Co-Directors Report — Handbook PDF Rebuild + Reginald Explainer

**Date:** 16 March 2026 — Morning
**Segment:** morning (00:00–11:59)

---

## Summary

Two deliverables this morning. First, the Handbook PDF was rebuilt via `npm run pdf:mx-generate`. Second, a comprehensive business case explainer for REGINALD and COGs was created — 623 lines covering the full technical architecture, business case, convergence principle, comparable transactions, and a two-year valuation estimate. The document is aimed at a technology audience and draws on data from the pilot proposal, COG System Overview, grant application, and valuation model.

---

## What Was Done

### 1. Handbook PDF Regeneration

Rebuilt the Handbook manuscript using the pandoc pipeline (`npm run pdf:mx-generate`). Build completed successfully — XeLaTeX, Lua filters (blockquote-styles, unicode-fallback, keep-together), table of contents, A4 format.

### 2. Reginald Business Case Explainer

Created `reginald-explainer.md` in the repo root — a detailed technical explainer for a technology audience. Content synthesised from across the codebase: pilot proposal, COG System Overview, convergence principle, MX principles, grant application, valuation model.

Sections: the $10–30B inference waste problem, COG format (dual meaning, block architecture, two types), REGINALD architecture (registry + signing engine), four visibility levels with flywheel, five compliance levels, business case by audience (AI providers, publishers, enterprises, regulated industries), convergence principle, comparison table, IEA-sourced energy/cost numbers, technical architecture (format, namespace, signing, API, 13 audit action-docs), The Gathering governance, corporate structure (CogNovaMX vs MX Reginald Ltd), revenue model, platform race context, two-year valuation estimate with three scenarios (services £1.75–5.25M, platform £10.5–17.5M, infrastructure £17.5–35M), comparable transactions (Auth0, Contentful, Cloudflare, Datadog), risk factors, and downside floor analysis.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 2 (prior) + 1 (pending) |
| Files changed | 2 (PDF + explainer) |
| Lines added | ~623 (reginald-explainer.md) |
| Lines removed | 0 |
| Repositories | 2 (mx-hub, mx-outputs) |

---

## Next Steps

- Commit and push the Reginald explainer
- Continue with Handbook publication prep (target: 2 Apr)
- Consider sharing explainer with advisory board for feedback

---

## Commit Log

| Hash | Description |
|------|-------------|
| 984b7276 | Refresh REMINDERS: countdowns, morning change note, trim older entries |
| 8fe86c2c | Update mx-outputs: rebuild Handbook PDF + morning report |
| (pending) | Add Reginald business case explainer |
