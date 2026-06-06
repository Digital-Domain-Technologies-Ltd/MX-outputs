---
title: "Co-Directors Report — The Audit That Improves Itself"
description: "The web-audit pipeline gained two self-improving loops: reports that correct their own provable errors before delivery, and a memory that proposes which check to sharpen as patterns recur across clients."
author: "Tom Cranstoun"
created: 2026-06-06
modified: 2026-06-06
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-06-evening-report.md
---

# Co-Directors Report — The Audit That Improves Itself

**Date:** 06 June 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

The Web Audit Suite stopped being a tool that only measures and became one that improves itself. Two loops landed. First, the report now self-heals: before a deliverable leaves, the engine corrects the deterministic errors it can prove against its own evidence and escalates the rest to a human. Second, the pipeline learns: when the same machine-readability fault recurs across enough client sites on a platform, the engine raises a concrete proposal naming the check to sharpen. The headline consequence for the business is that the audit now gets better with volume, not just bigger, and that compounding is a defensibility argument an investor can follow.

The same evening also closed a gap in the product's own practice. Until now, the images and decks we publish travelled without the machine-readable metadata we tell clients every file should carry. That is now fixed and enforced: every published image and presentation embeds MX metadata in its own carrier, a decorator stamps new ones automatically at commit, and the rule is documented as a contract any CMS importer can follow on ingest. We now practise on our own assets what the audit measures on our clients'.

---

## What Was Done

### 1. The findings loop now self-heals and self-improves

The audit already wrote its findings in a machine-readable form. This session turned that latent capability on. The pipeline now applies the safe, provable subset of corrections to the report automatically before the PDF is produced, under a hard three-round cap with a guard that escalates anything that does not resolve cleanly. The first such correction is a worked example: when the report's prose names a different image count from the one actually measured, the measured figure wins and the prose is corrected. Everything that needs human judgement, or that touches the pipeline itself, is escalated rather than auto-edited; the principle that Tom teaches the method and Maxine implements it is preserved in code.

The second loop is the one that matters for the long game. Every audit records the audited platform's faults to an anonymised memory that never holds a client's identity. When a fault recurs across enough distinct client sites on the same platform, the engine now raises a proposal naming the gate, template, or rubric to sharpen so that whole class of problem is caught on every future audit of that platform. The memory does not just grow; it improves the audits that draw on it.

### 2. Report quality and correctness fixes

Several deterministic correctness improvements shipped alongside: a misleading "pass" verdict on error pages that carry the wrong machine markup is now caught; pages the report singles out (the largest page, the worst-structured page) are now linked rather than named in passing; a class of false "all clear" verdict that sat on top of unmeasured data is now blocked by an evidence check; and the fixed wording the report reuses moved into a single source so it can be translated or adjusted without touching code.

### 3. A silently broken test suite, restored

The audit's automated test suite was found to be running 8 of roughly 500 tests. Two test files were exiting the test runner the moment they loaded, before the rest could run, and the suite was reporting success the whole time. All five affected files were rewritten to the standard pattern; the suite now runs in full at 506 passing. This is a quiet but material risk reduction: for some time, changes to the audit engine were shipping against almost no automated coverage without anyone seeing it.

### 4. The capability propagated to the business-facing story

The two self-improving loops were written into the investor pitch, the one-pager, the pitch deck, the partner strategy, and the business plan, deepening the existing "data moat" argument from "the memory compounds" to "the audit measurably improves with use." The internal repo map, the engineering README, the operator documentation, and the changelog were updated to match.

### 5. Carrier metadata on every published asset

Every consumer deliverable the Intent CMS publishes now carries MX metadata in the file itself, adjusted to the format: images embed it in their standard metadata block, presentation decks embed it in the document's own properties, and the handful of formats that cannot hold metadata get a small companion file. A decorator does this automatically when a new asset is committed, so the rule holds without anyone remembering it, and a push-time check refuses a bare asset that slips through. The existing back catalogue of seventy-nine published images and decks was swept in one pass. One social-media graphic that arrived with full metadata was preserved as-is and standardised onto the open namespace. The whole capability is written up as a contract any third-party CMS can implement to decorate assets the moment it imports them, which makes it a small, reusable product in its own right.

A deliberate decision worth recording: the asset tooling uses the vendor-neutral namespace the open standard declares, rather than the company's own, so the metadata we publish conforms to the standard rather than advertising the vendor. The PDF pipeline keeps its existing namespace, which the standard documents as a reference-implementation choice pending ratification.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 4 substantive, plus 1 submodule-pointer bump (audit 2, assets 2) |
| Repositories | 2 (hub + mx-outputs) |
| Audit work | 58 files, +1,713 / −582 lines |
| Asset work | 14 hub files (+1,557), 79 assets decorated |
| Audit test suite | 8 → 506 passing |
| Asset coverage | 79 of 79 in-scope (0 missing) |
| Pitches updated | 5 |

---

## Why It Matters

A measurement tool competes on the quality of a single report. A tool that improves itself with every engagement competes on accumulated volume, and volume accrues to whoever runs the audits. That is a moat a late entrant cannot buy. The self-healing loop also reduces a real delivery risk: a client report can no longer contradict its own measured data on the deterministic facts, which is exactly the failure that erodes trust in an assessment product.

---

## The Insight

The capability the business has been describing in the pitch as "the audit learns" was, until this session, mostly aspiration: the data was being recorded but nothing acted on it, and one part of the documentation quietly admitted the proposal step "is not emitted in this revision." Building it closed the gap between what we claim and what the system does. The honest version of the claim is now also the true one.

---

## What This Means for Investors

No new spend; this is capability unlocked from infrastructure already built. The defensibility argument strengthens: the audit's value now compounds mechanically with client volume, and that compounding is visible in the product, not just asserted in a deck. The risk-reduction angle is also real: the audit engine had been changing against almost no test coverage, and that is now fixed.

---

## Next Steps

- Run the full pipeline on a live e-commerce site so the auto-apply loop and the e-commerce template are exercised end to end against real data.
- Enrich the seventy-nine decorated assets: each carries a placeholder description and reuse policy that a human should replace with real prose before the next publish.
- The concurrent manuscripts workstream owns its appendix and field-dictionary edits; this session regenerated the shared definitions index so it reflects the new asset cog, which also folds the manuscripts' pending edits into that generated file.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 068c0924 | Self-improving audit: auto-apply findings loop + recurrence-driven gate proposals |
| dbe76518 | LEARNINGS: mocha process.exit-at-load masks the suite; pre-commit hook widens scoped commits |
| fec3d037 | Decorate published assets with MX carrier metadata (mx-outputs submodule) |
| 623dc555 | Add MX asset carrier-metadata decorator, checker, hook, and intent cog (hub) |
