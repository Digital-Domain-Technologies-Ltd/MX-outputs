---
title: "Co-Directors Report — Tightening the Operational Layer"
description: "Audit-pipeline Gate 0g wired, blog cogs merged, and the per-LLM-divergence message canonised across four surfaces."
author: "Tom Cranstoun"
created: 2026-05-10
modified: 2026-05-10
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-10-morning-report.md
  purpose: "Audit-pipeline Gate 0g wired, blog cogs merged, and the per-LLM-divergence message canonised across four surfaces."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Tightening the Operational Layer"]
---

# Co-Directors Report — Tightening the Operational Layer

**Date:** 10 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

A single piece of work expressed in three forms. We tightened the audit pipeline with a new sanity gate, collapsed two near-duplicate blog cogs into one canonical workflow, and canonised the per-LLM-divergence "plumbing beats tactics" message across the canon, both Chapter 0s, and the public learn-page. The same instinct underneath each one: make the operational claim more precise so machines and readers do not have to guess.

---

## What Was Done

### 1. Audit pipeline — Gate 0g wired

The `audit-pipeline` gates phase now invokes `check-report-section-sanity.js`, a per-section integrity check whose authoritative implementation lives in the `mx-audit` submodule. The hub holds a small delegation stub so the single source of truth stays in the submodule. The cog-doc for `mx-audit-dev-verify` was updated to document the new gate.

### 2. Blog cogs — two merged into one

The separate `blog-generator` and `blog-reviewer` cogs have been replaced with a single `blog-post` cog covering the full mx-site blog lifecycle: CREATE, REVIEW, PUBLISH. The matching skill was renamed and rewritten to dispatch all three lifecycle actions to the merged cog. References across `INDEX.md`, the cog-template skill, the PDF-generator skill, and `mx-boot` were updated in lockstep.

### 3. Per-LLM divergence — "plumbing beats tactics" canonised

The argument that there is no single "LLM" to optimise for (ChatGPT, Claude, Gemini have different ingestion paths and trust signals; tactics reshuffle whenever a vendor changes a system prompt or ships a new model) now sits in four authoritative places:

- **MX: The Introduction** (free-book Chapter 0) — short prose paragraph after the GEO/MX distinction
- **MX: The Protocols** (Chapter 0) — counterpart paragraph, forwards tactical detail to Chapter 10 to avoid redundancy
- **MX Principles** (`principles.cog.md`, bumped to v3.6) — new principle "Plumbing Beats Tactics", placed adjacent to "Design for the Worst Machine" with an explicit pairing note (capability floor vs. time axis)
- **mx.allabout.network/learn/what-is-mx.html** — new "Why the Plumbing Beats the Tactics" section after the Convergence Thesis, with the four-item plumbing checklist as bullets; Schema.org `dateModified` bumped in both WebPage and FAQPage blocks

Each insertion was checked against the others: distinct vocabulary, distinct structure, no overlap.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 5 (3 hub + 2 mx-outputs) before this report's commits |
| Repositories touched | 2 (hub, mx-outputs) |
| Authoritative surfaces updated by the message canonisation | 4 |
| Cog-doc entries deleted in the blog merger | 2 (replaced by 1) |
| Audit gates added | 1 (Gate 0g) |

---

## Next Steps

- Watch the next mx-site audit run for Gate 0g findings against the live site
- The blog-post cog gets its first end-to-end exercise on the next blog publish

---

## Commit Log

| Hash | Description |
|------|-------------|
| `29562612` | Merge blog-generator and blog-reviewer cogs into single blog-post cog (hub) |
| `507b02a` | Corresponding mx-outputs work for blog-post merger |
| `be1d4197` | Wire audit-pipeline Gate 0g (per-section sanity check) (hub) |
| `cf6a7f9` | what-is-mx.html: add "Why the Plumbing Beats the Tactics" section (mx-outputs) |
| `_pending_` | Canonise plumbing-beats-tactics across manuscripts and principles (hub, this session) |
| `_pending_` | Directors morning report (mx-outputs) |
| `_pending_` | Hub pointer bumps for mx-outputs |
