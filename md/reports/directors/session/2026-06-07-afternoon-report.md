---
title: "Co-Directors Report - The Audit Audits Itself"
description: "Ran a deep cross-check over the morning's audit report, found where it contradicted itself, and fixed every defect at the source - including the page-count drift, closed at its root with one shared predicate and a gate."
author: "Tom Cranstoun"
created: 2026-06-07
modified: 2026-06-07
version: "1.0"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-07-afternoon-report.md
  purpose: "Ran a deep cross-check over the morning's audit report, found where it contradicted itself, and fixed every defect at the source - including the page-count drift, closed at its root with one shared predicate and a gate."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - The Audit Audits Itself"]

---

# Co-Directors Report - The Audit Audits Itself

**Date:** 7 June 2026 - Afternoon
**Segment:** afternoon (since noon)

---

## Summary

We ran our own deep cross-check over the audit report the suite produced this morning and found places where the report contradicted itself: a page count stated two ways, a sentence that disagreed with the table beside it, a dangling half-sentence left by a rewrite. None were wrong about the client's site; all were defects in the generators that write the report. We fixed every one at the source, not in the delivered report, which stands untouched as the evidence. The most stubborn defect, a page count that read 146 in one place and 144 in another, we closed at its root so it cannot return.

---

## What Was Done

### 1. Fixed the generators behind the report-consistency defects

The cross-check surfaced a cluster of self-contradictions. An A/B-test detector counted a vendor name that only appeared inside a downloadable file. The accessibility check counted decorative images as missing their description, inflating the figure above the appendix that excluded them. An attribution sentence said the site had no live capture directly above a table showing thousands of captured visits. A truncated rewrite left a paragraph that was just the word "The". Each had a single cause in a script, a template, or a seed, and each is now fixed where it is generated, so the next report is right rather than corrected after the fact.

### 2. Closed the page-count discrepancy at its root

The 146-versus-144 split was not a counting error. The rule for "is this a real page or a data file" had been written three times in three places, and the copies had drifted: one had been taught that markdown documents are not pages, the others had not. So our published `.md` and `.cog.md` files counted as pages in one total and not the other. We replaced the three copies with one shared rule and added a test that fails if a second copy ever appears.

### 3. Held the work to our own gates

The full audit test suite passes, 547 checks with none failing. Every lockstep gate is green: the report template and its machine-readable contract agree, the architecture document matches the code, and the audit-suite documents all carry the same version stamp. We regenerated the report's golden-master fixture so the test that guards report output reflects the corrected templates.

---

## By the Numbers

- 1 commit, 26 files, 324 insertions, 91 deletions
- Audit test suite: 547 passing, 0 failing
- 3 duplicated page-classification rules reduced to 1, with a gate test
- Defects fixed at source: the full Phase 6 set, plus the page-count root cause

---

## The Insight

The page-count bug was the exact failure our lockstep gates exist to prevent, sitting in a corner no gate watched: one rule, written three times, allowed to drift. The fix was not a better number. It was one source of truth and a test that refuses a second copy. This is the discipline we sell, turned inward on our own tooling.

---

## Why It Matters

A report that contradicts itself spends trust faster than one that is merely incomplete. A reader who catches "146" and "144" on the same page stops believing the other figures, and the machine reading the report for an evidence chain has no way to choose between them. Internal consistency is not polish. It is the precondition for the evidence claim the whole product rests on.

---

## Next Steps

- Consider a single canonical page-count value the report draws from everywhere, so the two counters cannot drift even on edge cases (extensionless markdown URLs served without a file extension).

---

## Commit Log

- `05a43044` - Audit: fix Phase 6 report-consistency defects; unify non-HTML predicate
