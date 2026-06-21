---
title: "Co-Directors Report — Tight Prose, a Blog Asset, and a Hook Fix"
description: "Made tight (Haiku) prose the default MX voice, shipped a public blog draft on why it matters, and fixed a hybrid-cog enforcement bug."
author: "Tom Cranstoun"
created: 2026-05-31
modified: 2026-05-31
version: "1.0"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-31-afternoon-report.md
  purpose: "Made tight (Haiku) prose the default MX voice, shipped a public blog draft on why it matters, and fixed a hybrid-cog enforcement bug."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Tight Prose, a Blog Asset, and a Hook Fix"]

---

# Co-Directors Report — Tight Prose, a Blog Asset, and a Hook Fix

**Date:** 31 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

We made tight prose the default voice of MX. Tom adopted the Haiku approach, austere and direct, as the working default across most of what we write. We shipped a public blog draft that explains why tight prose matters for the machine-readable web. We also found and fixed an enforcement bug that was dropping context for one class of cog.

---

## What Was Done

### 1. Tight prose is now the MX default

We added a Haiku writing guide to the canon and made it binding in the rulebook. The tight, cutting style is the default for blogs, internal docs, specifications, manuscripts, and client deliverables. Longer narrative is the earned exception. Gathering drafts keep their standards register. The two prose-quality skills now apply the rule by reference.

### 2. A public blog asset

We wrote a draft blog post, "Write Tight", that frames tight prose as machine-readable-web hygiene. The same cut that lands for a human reader cuts the tokens and ambiguity a machine pays for. It carries a live before-and-after and a brand-matched social card. It is a top-of-funnel asset, staged as a noindex draft for review before promotion.

### 3. A hybrid-cog enforcement fix

Opening the draft for review surfaced a bug. The cog-enforcement hook hardcoded a bare command for hybrid cogs, dropping the context-dependent argument the cog needs. We fixed the hook to resolve and append context arguments, and corrected a stale claim in the serve cog so its prose matches its declared type.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 3 |
| Files changed | 12 |
| Lines added | +633 |
| Lines removed | −23 |
| Repositories | 2 (hub, mx-outputs) |
| New canon files | 1 (Haiku writing guide) |
| New blog drafts | 1 (write-tight, noindex) |

---

## Why It Matters

Tight prose is not a style choice. It lowers the cost of every page a machine reads, fewer tokens, less ambiguity, fewer wrong answers attributed to a client. It is the Convergence Principle at the level of the sentence, and it doubles as thought-leadership and a billable content discipline.

---

## The Insight

The audit readability gate demands meaning, not length. A bare metric fails it; a tight sentence that explains the metric passes. So tight prose and the audit pipeline coexist, no gate needed loosening. The contextual-URL bug was in the enforcement hook, not the cog, the cog and script were correct all along.

---

## Decisions Made

- Haiku is the default facet of the one MX voice, not a second register. Applies to blogs, internal docs, specs, manuscripts, and client deliverables. Gathering drafts excepted. The pattern caps in the rulebook still bind.

---

## Next Steps

- Promote the write-tight draft to published when reviewed.
- Consider publishing the Haiku guide as a public mx-site page.

---

## Commit Log

| Hash | Description |
|------|-------------|
| b04a99e1 | Add write-tight blog draft and drafts index card (mx-outputs) |
| _pending_ | Haiku writing discipline, hook fix, serve-cog correction (hub) |
| _pending_ | Add afternoon directors report (mx-outputs) |
