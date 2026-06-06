---
title: "Co-Directors Report - The Audit Report That Agrees With Itself"
description: "Morning session: the web-audit deliverable made self-consistent and self-improving, and the source-frontmatter contract put in lockstep so a fixer and its gate can never drift."
author: "Tom Cranstoun"
created: 2026-06-06
modified: 2026-06-06
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-06-morning-report.md
---

# Co-Directors Report - The Audit Report That Agrees With Itself

**Date:** 6 June 2026 - Morning
**Segment:** morning (since midnight)

---

## Summary

We made the web-audit deliverable trustworthy in a way it was not before: the report now agrees with itself. A client read that said both "missing pages return 404" and "this site is a pervasive soft 404" destroys trust on the first contradiction a reader spots. We traced nine such cross-section contradictions to their exact generators and fixed each at source, then added deterministic backstops so the whole class cannot return silently. In the same session we closed a quieter risk: the four scripts that write and check the machine-readable frontmatter on every published page each held their own private idea of what "complete" meant, and two of them disagreed. They now share one definition, proven by a test. The audit fix is the board-visible outcome; the lockstep work is the discipline that keeps outcomes like it from rotting.

---

## What Was Done

### 1. The audit report made self-consistent

A client audit must not contradict itself. A full read of a regenerated 20-page report surfaced nine cross-section contradictions, each traced to the exact code that produced it: a soft-404 site scored as if missing pages returned proper errors; a pricing stage marked "visible" when the page carried an offer with no price; a slow-page finding citing the healthy warm-cache number instead of the 27-second cold first visit; an agent count that read 7 in one place and 8 in another; a sitemap line claiming a match that was not one; plus four cosmetic defects (an error-page cell asserting navigation the next row denied, a stray footer space, two names for one metric). Every fix is deterministic - a code change, a seed edit, or a template edit - never a model asked to paper over the gap. We then added five coherence checks that re-derive each claim from the underlying data and fail the build if the report and the evidence disagree, so the contradiction class cannot silently come back.

### 2. The audit deliverable made self-improving

The findings a human used to read at the foot of each report are now also written as machine-readable files beside it, against a published schema. A new actioning path lets the pipeline read its own findings and, where it is safe and creates no loop, act on them. Findings also feed an anonymised cross-domain trail - keyed by platform, never by client domain - so a pattern seen on one site informs the next audit. The soft-404 detection in particular is now a keyed, deterministic statement the template can drop in whenever a site returns success for addresses that do not exist, with a plain account of how that confuses a machine.

### 3. The source-frontmatter contract put in lockstep

Every published page on the site carries its source metadata in a comment so a machine can recover it in one fetch. Four scripts touch that comment - one writes it from a markdown source, one synthesises it for legacy pages, one checks it, one removes duplicates - and each carried its own copy of the rules. Two had drifted: the checker would route an incomplete page to the synthesiser for repair, but the synthesiser treated any page with a start marker as already done and skipped it, so it never performed the fix the checker promised. The four now share one definition of the comment and of what "complete" means. A test proves the bytes the writers emit pass the checker's own verdict, so they cannot drift again. This is the third drift class of this kind closed recently, after the report-template contract and the audit-suite documents.

### 4. Hygiene

Closed the last source-frontmatter gap on a published appendix page, synthesised from the page's own metadata; the checker now reports every served page clean. Regenerated the derived definitions index and routing registry to match the edited source.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | _pending hub commit_ + 3 (MX-outputs) |
| Code + content files changed (hub) | 49 |
| Code + content lines (hub) | +2,644 / -259 |
| Regenerated audit artefacts (MX-outputs) | 113 files |
| Repositories with session work | 2 (MX-hub, MX-outputs) |
| Submodule pointers bumped | 3 (MX-outputs, plus pre-existing allaboutv2, mx-maxine-claw) |
| New deterministic guards | 5 audit coherence checks + 1 source-frontmatter lockstep test |
| New machine surfaces | 1 findings schema, 1 findings JSON per audit, 1 cross-domain trail |

Most of the MX-outputs line count is regenerated audit reports and provenance records, not new authoring; the meaningful change is the hub code and the audit logic.

---

## Why It Matters

The web-audit suite is a client-facing deliverable and an early revenue path. Its credibility rests on every section telling the same story. A report that contradicts itself reads as careless at best and wrong at worst, and one bad read costs the relationship. This session removed the contradiction class at source and added gates so it cannot return. The same week, three separate "a fixer and its checker disagreed" bugs were closed by giving each pair one shared definition - a repeatable engineering pattern, not three one-off patches.

---

## The Insight

A fixer and the gate that judges it must share one definition, or the gate will promise a fix the fixer never makes. We found the live instance: the frontmatter checker told operators the synthesiser would repair an incomplete page, while the synthesiser, using its own narrower rule, called that same page done and walked past it. The cure is structural, not behavioural - one module, imported by both - so the agreement holds by construction and a test catches the day they diverge.

---

## What This Means for Investors

This is risk reduction with a product edge. A self-consistent audit removes the reputational downside of shipping a contradictory client report - the kind of error that ends an engagement. A self-improving audit is a moat: each run leaves the next one a little sharper, on an anonymised cross-domain memory that never stores a client's identity, which is itself a sellable governance property in regulated sectors. And the lockstep discipline - one definition shared between a doer and its checker, proven by a test - is how a small team ships trustworthy automation without a large QA function. The cost of correctness is moving from human vigilance to deterministic gates.

---

## Next Steps

- Add a one-line rule to the cog-authoring guidance: any "fixer plus checker" pair must share a single verdict function, with a test that the fixer's output passes the checker. This would have caught all three recent drift bugs at design time.
- Update the investor and partner pitches to carry the self-improving-audit and shared-verdict-discipline story.

---

## Commit Log

| Hash | Description |
|------|-------------|
| _pending_ | Audit: nine coherence fixes, five backstop checks, findings-actioning + machine surfaces (hub) |
| _pending_ | Source-frontmatter single contract: one module for the four scripts, with lockstep test (hub) |
| 5b7ff140 | Audit: extract machine-readable findings; regenerate dotfusion 2026-06-05 (MX-outputs) |
| 9dccc1af | Backfill MX-SOURCE-FRONTMATTER on appendix-v.html (MX-outputs) |
