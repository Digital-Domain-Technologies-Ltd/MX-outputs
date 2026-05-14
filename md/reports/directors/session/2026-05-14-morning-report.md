---
title: "Co-Directors Report - Provenance-gap blog expansion + negation-pivot rule hardening"
description: "Expanded the-provenance-gap blog post with three new sections; closed a writing-style hole that let an AI-tell sentence pattern ship to production."
author: "Tom Cranstoun"
created: 2026-05-14
modified: 2026-05-14
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-14-morning-report.md
---

# Co-Directors Report - Provenance-gap blog expansion + negation-pivot rule hardening

**Date:** 14 May 2026 - Morning
**Segment:** morning (since midnight)

---

## Summary

The provenance-gap blog post shipped yesterday evening at ~1,200 words; this morning it grew to ~2,550 words with three new sections that close the argument: MX is not a rescue, optimisation tools accelerate the problem, and the self-referential listicle pattern. Tom caught one banned sentence shape in the new prose ("The problem is not X. The problem is Y."), which surfaced a gap in the writing-style guide: the negation-pivot rule listed "The question is not X" but not the other abstract-noun variants. The rule, the humanizer skill, and the html-writer polish pass were all updated in lockstep so the same shape cannot ship again.

---

## What Was Done

### 1. Blog post expansion

The provenance-gap post now carries the full argument across eight sections rather than five. Three new sections were added: MX is not a rescue (closes the "format saves bad content" misread before it lands), the optimisation tools accelerate the problem (names Adobe LLM Optimizer and the convergence-as-gaming-signal property of any recommendation engine), and the self-referential listicle (the December 2025 core update, the Verge quote, the redistribution of trust to third-party references). The post is published at <https://mx.allabout.network/blog/the-provenance-gap.html> with the existing slug, so the URL, sitemap entry, and blog-index card from yesterday's publication carry through. Reading time updated from 6 to 11 minutes; word count from 1,200 to 2,550. British spelling used throughout (the earlier version used American forms; this expansion standardises to British, matching the house default).

### 2. Negation-pivot rule hardening

The writing-style guide already banned negation-pivot patterns across sentence breaks, with "The question is not X. The question is Y." as the named example. The guide's ban list now also names "problem", "issue", "point", "answer", and "thing" as anchors that carry the same rhetorical move - any abstract noun re-stated across a negation is forbidden in the same way. The fix example was rewritten using the exact phrasing that slipped through this morning, so the next agent or human reader sees a working pattern not a rephrased generic. The humanizer skill's negative-parallelisms entry now points at the cross-sentence variant explicitly and references writing-style.md as authoritative. The html-writer skill's humanizer-pass entry got the same expansion so the per-post polish pass will pattern-match the full inflection list going forward.

### 3. Discovery surfaces

Sitemap regenerated (38 entries; the-provenance-gap.html `lastmod` advanced to 2026-05-14). The llms-full.txt corpus regenerated against the corrected prose (108 pages, 1,954 KB). The post-level llms.txt entries were untouched because the file only lists section landers by design. Blog-index card carried through from yesterday; no change needed.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 (mx-outputs) + pending hub commit |
| Files changed | 3 in mx-outputs, ~6 in hub |
| Lines added | +82 (mx-outputs) |
| Lines removed | -32 (mx-outputs) |
| Repositories | 2 (hub + mx-outputs) |
| Words added to live post | ~1,350 |
| Discovery files regenerated | 2 (sitemap.xml, llms-full.txt) |
| Spell-list additions | 13 (benchmarking, listicle, listicles, natively, recalibrating, recalibration, templated, tradecraft, plus pre-existing terms surfaced by the sweep) |

---

## The Insight

The negation-pivot rule had been listed in the writing style guide for some time, with one concrete example ("The question is not X. The question is Y."). I read that example as the rule and missed that the rule generalises to any abstract noun in the same position. The fix is not a tighter rule - the rule was already general - it is a longer example list that pattern-matches the way the eye actually scans the guide. A single named instance trains the reader to recognise that instance; an enumerated list trains the reader to recognise the class. The same principle should apply when the next AI-tell pattern surfaces: list more inflections, not fewer.

---

## Next Steps

- Next blog post should be polished with the expanded humanizer-pass scan to confirm the cross-sentence negation-pivot now gets caught at write-time, not at Tom's review.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 4faf6b7 (mx-outputs) | Expand the-provenance-gap blog: optimisation tooling + listicle sections; remove negation-pivot pattern |
| _pending_ (hub) | writing-style + humanizer + html-writer: negation-pivot rule covers all abstract-noun anchors |
