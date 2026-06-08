---
title: "Co-Directors Report — Deterministic gates and tone-rule expansion across the audit pipeline"
description: "Six new deterministic checks land in the audit-report flow, pushing LLM-judgment categories upstream into mechanical gates, plus a tone-rule pass enforcing neutral English, no exaggeration, no em-dashes, no negation-pivot."
author: "Tom Cranstoun"
created: 2026-05-16
modified: 2026-05-16
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-16-morning-report.md
  purpose: "Six new deterministic checks land in the audit-report flow, pushing LLM-judgment categories upstream into mechanical gates, plus a tone-rule pass enforcing neutral English, no exaggeration, no em-dashes, no negation-pivot."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Deterministic gates and tone-rule expansion across the audit pipeline"]
---

# Co-Directors Report — Deterministic gates and tone-rule expansion across the audit pipeline

**Date:** 16 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

The audit pipeline gained six new deterministic checks and a tightened tone rule that together close most of the LLM-judgment gate's recent finding categories at source. The same end-to-end audit (neomwellbeing.com, 5 pages) that produced inconsistent prose yesterday now ships a clean PDF, with the post-rewrite engagement table rebuilt mechanically from the priority blocks above it. Both audit templates carry zero tone-gate violations against the expanded rule set.

---

## What Was Done

### 1. Six deterministic gates land

Each gate replaces a class of LLM-mediated judgement with mechanical inspection:

- **Slug-to-host canonical map** at `mx-canon/ssot/outreach-slug-map.yaml`, consumed by the harvester. Two slugs pointing at the same host (neomwellbeing, neomwellbeing-com) now collapse to one pending-reaudit entry.
- **Priority-bucket consistency** in `check-template-leaks.js`. Every priority block's `**Bucket:**` value must match the enclosing `## Compliance Risk` / `## Cross-cutting` / `## AI Opportunity` heading. Routing errors are now a structural failure, not a reader's catch.
- **Voice consistency** (`check-report-voice.js`). Per-section first-person vs third-person counts; mixed-voice sections fail. The Executive Summary mid-paragraph drift the LLM-judgment gate flagged is now caught at gate-0b time.
- **Sample-vs-total scope** (`check-report-scope.js`). Site-wide-artefact sections (sitemap, robots, llms.txt) flagged when prose uses "across the audited set"; sampled sections flagged when prose claims "site-wide".
- **Tone-check the skeleton**. `verify-skeleton.js` now runs the tone gate against the Pass-1 infill output, so banned words leaking from deterministic placeholders fail before a Pass-2 API spend.
- **Deterministic engagement-table regeneration** (`regenerate-engagement-table.js`). Post-Pass-2 mutator that rebuilds the What's Next table from the rewritten priority blocks. Kills three LLM-judgment categories in one stroke: order-mismatch, missing-priority, missing-in-engagement.

### 2. Tone-rule expansion: neutral English, no exaggeration, no em-dash, no negation-pivot

Tom asked the rewriter and the critic to prefer neutral English with a British tone, drop exaggeration, drop em-dashes, drop the negation-pivot AI-prose tell. Landed across three layers:

- **Rewrite system prompt** carries the new directives (neutral-English-with-British-tone, 24-word banned-hyperbole list, no em-dashes, no negation-pivot).
- **`check-report-tone.js`** gained four new categories (exaggeration, em-dash, negation-pivot, plus a table-row skip for pricing-in-prose so currency in sample-query cells no longer trips the gate).
- **`audit-fierce-critic.js`** Area 6 covers the subtler forms the regex misses: compound superlatives, hidden hyperbole framing, US/UK register drift, double-hyphen and spaced-hyphen substitutes for em-dash, concession-pivot and clause-level negation-pivot variants.

### 3. Template hygiene + SSOT cleanup

Both audit templates and the scoring-methodology SSOT swept clean against the new gate:

- `web-audit-suite-template.md`: 58 prose em-dashes removed, regulatory fines rephrased into prose form, Adobe product name wrapped in backticks, PDF-fails phrasing rewritten.
- `ecommerce-audit-template.md`: 43 prose em-dashes removed, same edits applied where they appear in the e-commerce variant, broken-store quote softened, instruction blocks that modelled the negation-pivot rewritten.
- `scoring-methodology.json`: 37 em-dashes replaced with colons; `failure-mode` → `issue-mode`; `catalog` → `catalogue`. Lockstep test now tone-checks all 218 SSOT prose strings on every `npm test`.

### 4. End-to-end audit pass

The neomwellbeing.com 5-page audit ran through Phase 1 → Pass 1 infill → Pass 2 LLM rewrite → all eight gates → final PDF at `mx-outputs/audit/2026-05-15/neomwellbeing.com/neomwellbeing-com-report.pdf` (1.4 MB). First clean end-to-end pass through the restructured pipeline.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (this session boundary) | 2 submodule + 1 hub (pending) |
| mx-reginald files changed | 11 (3 new, 8 modified) |
| mx-reginald lines | +993 / −276 |
| mx-outputs files changed | 3 |
| New deterministic gates | 6 |
| New tone-check categories | 4 (exaggeration, em-dash, negation-pivot, plus pricing-in-tables skip) |
| Em-dashes removed from templates + SSOT | 138 |
| Engagement-table rows now rebuilt deterministically | 2 of 4 (Critical Fixes + Full Optimization; Ongoing Monitoring + Machine-Ready Estate stay templated) |

---

## Why It Matters

The audit pipeline's correctness story has gradually become a story about catching LLM drift in late-stage critic passes. Each critic pass costs an API call and minutes of wall-clock time, and the seven LLM-judgment categories were producing the same three classes of finding repeatedly (order-mismatch, missing-priority, missing-in-engagement) because the engagement table is derivable from the priority blocks above it. Generating it deterministically eliminates the class. The voice-consistency and scope-language gates do the same for `tone-inconsistency` and `sample-vs-total-overreach`. The LLM-judgment gate is still on the chain as a safety net, but the work it was doing has moved upstream into mechanical inspection that runs in milliseconds.

The tone-rule pass is the second leg: the audit-report register is now codified across rewriter prompt, deterministic gate, and LLM critic. A future audit rewritten from the same data should ship the same prose register every time, in either market.

---

## The Insight

Every LLM-mediated decision that a downstream gate has to *correct* is a candidate for upstream determinism. The cost of the LLM-judgment gate's existence (an extra ~7 minutes of API time per audit) was hiding the fact that three of its seven categories were structurally derivable. Once that became visible, the deterministic moves were short and obvious. Same pattern likely applies elsewhere in the pipeline: any LLM gate that fires on the same shape of finding twice is probably waiting for a deterministic upstream check.

---

## Decisions Made

- Engagement-table scope cells now use bare priority numbers (P1, P2, …, P11) rather than full priority titles. Earlier attempt produced 800+ character cells that broke PDF layout; the priority blocks above the table carry the detail.
- Templates use neutral English with British defaults where no neutral form exists (organise, recognised, behaviour). Mirrors the existing mx-site public-HTML rule from 2026-05-08.
- The tone gate's pricing-in-prose check skips table rows by default. Currency in a cell is almost always source data (sample query, category band, content-consistency cell), not a proposal fee.

---

## Open Questions

- The 2026-05-15 evening segment between the afternoon report and this morning's work was not formally reported. Tom's commits during that window are well-described (mx-audit→mx-reginald merge, LEARNINGS rules, REGINALD landing-page work, build-plan drift fix) but no consolidated narrative exists. Decide whether to backfill or accept the gap.

---

## Next Steps

- Re-run a representative end-to-end audit against allabout.network to confirm the new tone-rule output reads as intended in the published voice. The neomwellbeing run was the wiring test; a same-market site will surface any subtle drift the gates don't catch.
- Run the harvester (`npm run audit:package -- <host>` is the packaging path; `node scripts/build-benchmark-dataset.js` rebuilds the peer dataset) against the new neomwellbeing data to confirm the canonical-host slug map deduplicates correctly across re-audits.
- Address the `chartjs-node-canvas` native-build dependency before Salva onboards (carried over from the afternoon report — still open).

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 744ff86 | mx-reginald | Audit pipeline deterministic gates + tone-rule expansion |
| be2531e | mx-outputs | Audit deliverable: neomwellbeing.com 2026-05-15 end-to-end pass |
| _pending_ | hub | Submodule pointer bumps + slug-map SSOT + new gates wiring + tone-gate updates |
