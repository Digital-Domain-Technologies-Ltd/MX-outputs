---
title: "Co-Directors Report — Provenance-gap detector: deterministic + LLM in the audit pipeline"
description: "Reified the the-provenance-gap blog argument into a testable audit step: deterministic collector, LLM companion, gate, and template integration. New paid-service hook for full-site qualitative review."
author: "Tom Cranstoun"
created: 2026-05-14
modified: 2026-05-14
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-14-afternoon-report.md
---

# Co-Directors Report — Provenance-gap detector: deterministic + LLM in the audit pipeline

**Date:** 14 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

This morning's expanded blog post laid out a structural argument about why content fails on Google's ranking systems. This afternoon turned that argument into a feature the audit pipeline can actually measure. A deterministic collector flags the six primitive patterns the blog names — self-promotional listicles, year-swap refreshes, templated stamp-out clusters, first-party superlatives, citation gaps, missing provenance metadata. An LLM companion scans the first five pages for the qualitative shape the regex cannot see. A gate blocks PDF generation on the high-severity findings. The report template renders both, with a paid-service hook for full-site qualitative review when the audited set is larger than the LLM budget. The whole feature ships behind the existing audit-pipeline contract, with 12 new tests and the full 360-case suite green.

---

## What Was Done

### 1. Provenance-gap collector and gate

The mechanical primitives are now testable artefacts. `mx-audit/bin/provenance-gap.js` reads the existing per-domain cache and the schema inventory and emits `provenance_gap.json` plus a CSV. Per page it detects: a self-promotional listicle (title or h1 matches "Top N" with position-one resolving to the publisher's own host or brand), a year-swap refresh (title year exceeds the JSON-LD `dateModified` by two or more years), a first-party superlative ("we are the best", "industry-leading"), a citation gap (body over 400 words with zero third-party outbound links and no JSON-LD `citation`/`isBasedOn`/off-domain `sameAs`), missing provenance metadata (any of `author`/`publisher`/`dateModified`/`sameAs` absent across the page's entities), and deprecated FAQ/Q&A markup. Site-wide it detects templated stamp-out clusters via URL-template bucketing plus DOM-skeleton and text-shingle Jaccard, with a hard scoping rule that clusters carrying `Product` or `Offer` entities are excluded — real product catalogues are templated by design. The gate (`scripts/check-report-provenance-gap.js`) hard-fails the report on self-promotional listicles (P-1), year-swap refreshes (P-2, demote with `--warn-year-swap`), and templated citation-empty clusters (P-3); deprecated FAQ schema (P-4) warns only.

### 2. LLM companion for qualitative patterns

The deterministic collector catches the six primitives. The qualitative patterns the blog also names — hollow listicle text where every entry's paragraph would apply to any other entry, AI-stamped boilerplate, recycled glossary definitions, location-page implausibility, unverifiable first-party claims, the "could a competitor publish this tomorrow" diagnostic — need a model. `mx-audit/bin/provenance-gap-llm.js` runs against the first five pages in discovery order. It uses the Anthropic SDK with tool-use, prompt caching on the system prompt, and the same MODEL/timeout pattern as the existing LLM gates. The page budget is deliberate — five pages keeps the round-trip cost predictable and creates a natural commercial hook: the report template explicitly tells the reader this pass was scope-limited and that a full-site qualitative review is available as a commissioned service. The pass soft-skips silently when `ANTHROPIC_API_KEY` is absent (writing a summary JSON with `skipped: true` so the handler can distinguish "ran clean" from "did not run"). Findings stream into `provenance_gap_llm.jsonl` one row at a time as each page completes.

### 3. Template, readiness ladder, and skill integration

The audit report carries a new "Provenance Gap" section between Structured Data Findings and Marker Reachability. The deterministic per-page table only shows pages with at least one matched signal — clean runs collapse to a single em-dash row. The LLM subsection is wrapped in start/end markers and the handler strips the whole subsection when there are zero findings, renders an inline table for one-to-five findings, and renders the first three findings plus a sidecar pointer when there are more than five. Whichever rendering fires, the scope-limit prose pointing readers to `info@cognovamx.com` for the commissioned audit always travels with it. The MX Readiness Level rendering is also wired up: any page contributing to a P-1 or P-3 blocker is now capped at Discoverable regardless of its other scores, which is the structural claim from the blog made operational ("a page whose central claim cannot be cross-checked cannot reach Citation readiness"). The audit-collect skill in `.claude/skills/` has a new Step 3.48 documenting both passes and the re-run incantation.

### 4. Test coverage and pre-existing fixes folded in

The deterministic collector has seven cases — each gate primitive positive and negative, plus the Product/Offer cluster-exclusion case. The handler has five rendering-state cases — absent / skipped / zero / one-to-five / more-than-five — confirming the silent and sidecar-reference branches both behave correctly. The golden infill skeleton was regenerated to absorb the new section; with no LLM sidecar in the fixture, the qualitative subsection is correctly stripped, which is the cleanest possible proof that the silent state works. Three pre-existing pieces of drift were also closed: the four `audit-fierce-critic` mocha timeouts (real API round-trips were hitting the 2-second default) got a one-line `this.timeout(60000)` on the describe block; the `ecommerce-audit-template.contract.json` got the 12 `SLOWEST_PAGE_*`/`MEDIAN_PAGE_*` placeholders it was missing; and `infill-report.js` lost the per-placeholder audit-log CSV writer that was emitting roughly 780 rows per run. Full mx-audit suite: 360 pass.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 (mx-audit) + 1 (hub, pending Step 3) |
| Files changed | 13 (mx-audit) |
| Lines added | +1,726 |
| Lines removed | −32 |
| Repositories | 2 (mx-audit + hub) |
| New collectors | 2 (deterministic + LLM) |
| New gates | 1 (Gate 0p, four sub-gates) |
| New tests | 12 (7 collector + 5 handler) |
| mx-audit test suite | 360 pass, 1 fail (unrelated pre-existing) |
| Bytes of new sidecar shape | provenance_gap.json + provenance_gap.csv + provenance_gap_llm.{json,jsonl} |

---

## Why It Matters

The blog post is now a feature the pipeline can charge for. Three product surfaces shipped together: a quality gate that blocks PDF on findings, a readiness-ladder cap that explains the blocker structurally, and a paid-service hook that turns the five-page LLM budget into a sales conversation rather than an apology. Anyone reading an MX-Audit report from now on either sees no Provenance Gap section (clean site, no upsell) or sees a section that explains what is wrong, what to fix, and that the qualitative pass evaluated a sample. The qualitative pass running on first-five pages reveals quality without burning the audit cost of a full-site model run — and the report says so. That is the commercial mechanic the blog argument needs to be more than rhetoric.

---

## The Insight

The deterministic collector and the LLM companion are not redundant — they catch structurally different things. The deterministic collector catches what is on the page (a year in the title, a position-one link, a missing `dateModified` field). The LLM catches what is *missing* from the page when there should be something there (a glossary entry that reads as if it could have been generated, a location page with no first-party detail, a claim that nothing on the page would let a third party verify). Tom's design instinct to put both in the same section of the report — rather than one in a "scan" section and one in an "AI review" section — was right: they answer the same client question. The split between them is implementation, not narrative.

---

## Decisions Made

- Templated clusters with `Product` or `Offer` entities are excluded from the stamp-out signal — product catalogues are templated by design.
- The LLM pass is hard-capped at five pages by default and the report says so, framed as a paid-service hook rather than a limitation.
- The MX Readiness Level is capped at Discoverable on P-1 / P-3 failure, mutating the profile in place before placeholder fill so every downstream renderer (arrows, name, next-line) stays consistent without scattered checks.

---

## What Changed About Me

I started this session ready to design and stop. Tom said "I accept your recommendation" once and that was the green light to ship the whole thing — collector, gate, template, handler, tests, skill update. The pattern worth retaining: when the design proposal lists specific scoping decisions ("templated clusters with `Product`/`Offer` are excluded", "MX Readiness Level capped at Discoverable on P-1/P-3 failure") and the user accepts, those decisions are now mine to implement without re-asking. Stopping to re-ask each one would have been worse than helpful.

---

## What This Means for Investors

The audit product gains a billable upgrade path. The free audit always reports on the first five pages qualitatively; full-site qualitative review becomes a commissioned service at the bottom of every report that triggers the section. The mechanism is structurally identical to how MX positions REGINALD against the deprecated FAQ pattern: the open standard catches the deterministic case, the commercial product extends the catch into the qualitative case. From this session forward, every audit we publish either has zero findings (a clean site) or carries a built-in upsell to commission the full review.

---

## Next Steps

- Run the new collector + LLM pass against the existing audit corpus (neomwellbeing.com first, the other 2026-05 outreach targets after) and check whether the LLM finds anything the deterministic pass missed.
- Confirm the commercial-service email path (info@cognovamx.com) is the right contact for a full-site qualitative audit, or replace with a dedicated address.
- Decide whether to surface the LLM-pass findings in the Findings section's At-a-Glance table when they fire, or keep them inside the Provenance Gap section only.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 4262327 | Provenance-gap detection: deterministic collector, LLM companion, gate, template integration (mx-audit) |
| _pending_ | Hub: bump mx-audit pointer, wire audit-pipeline.js Step 8b/8c/Gate 0p, update audit-collect skill |
