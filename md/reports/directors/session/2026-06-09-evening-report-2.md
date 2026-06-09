---
title: "Co-Directors Report - The audit stops shipping cut-off paragraphs, and starts scoring undeclared audiences"
description: "Fixed a bug that let truncated text reach a finished audit report and added a hard gate so it cannot recur; made the audit recommend declaring a child or adult audience and downscore machine-readability when it has to infer one."
author: "Tom Cranstoun"
created: 2026-06-09
modified: 2026-06-09
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-09-evening-report-2.md
  purpose: "Fixed a bug that let truncated text reach a finished audit report and added a hard gate so it cannot recur; made the audit recommend declaring a child or adult audience and downscore machine-readability when it has to infer one."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - audit truncation guard and inferred-audience scoring"]
---

# Co-Directors Report - The audit stops shipping cut-off paragraphs, and starts scoring undeclared audiences

**Date:** 9 June 2026 - Evening
**Segment:** evening (continuation, audit-quality work)

---

## Summary

A live audit report had shipped with a paragraph that stopped mid-sentence, and nothing in our pipeline caught it. This session fixed that at the root and added a gate that now refuses to produce a PDF if any paragraph is cut off. In the same pass we made the audit do something it only described before: when it has to infer that a page is aimed at children or adults because the site declares no machine-readable audience signal, it now recommends the fix and lowers the machine-readability score, because an AI agent cannot be relied on to make that inference. Both changes were proven end to end on a real children's-education site.

---

## What Was Done

### 1. Truncated paragraphs can no longer reach a client

The cause was mundane: the step that turns audit facts into prose runs a local language model with an output ceiling, and a long section hit the ceiling and was cut off, then placed into the report as-is. We raised the ceiling, told the model to write tighter sections (which also runs faster on the local model), added a safety timeout so a stuck model cannot hang the run, and made the step retry and then fail loudly rather than ever splice a half-finished sentence into the deliverable. As a backstop we strengthened the report check so it scans every paragraph, not just the findings, and now blocks the PDF outright if anything ends mid-sentence. A truncated paragraph is the kind of defect that costs credibility on first read; it can no longer ship.

### 2. An inferred audience is now scored and recommended, for children and adults

Our audit already noted when a page appeared to be for children or adults. It did so neutrally and stopped there. The principle we sell is that good metadata removes the need for a machine to guess; a page whose audience can only be guessed is, by our own standard, not machine-ready. So when the audience had to be inferred and no signal was declared, the report now recommends declaring it in machine-readable structured data and metadata, names the absent age-assurance and consent signals as machine-readability gaps to make detectable, and lowers the page's Agent Readability score to reflect the gap. When a page does declare its audience properly, the report instead acknowledges that plainly and recommends nothing. The recommendations stay non-judgemental and carry no legal advice; they never suggest collecting a child's age data.

### 3. Proven on a live audit

We re-ran the full audit of a children's AI-learning site. The report came out with no truncated text, the three audience recommendations present, the machine-readability score correctly reduced with the reason recorded, every quality gate passing, and a tagged PDF produced.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Root-cause fixes to stop truncation | 4 (raise cap, tighten output, add timeout, retry-or-fail) |
| New hard gate | 1 (blocks the PDF on any cut-off paragraph) |
| New audit findings for an undeclared child/adult audience | 3 (audience, age-assurance, consent) |
| Agent Readability deduction when audience is inferred | -15, recorded with its reason |
| New automated tests | 3 suites (truncation gate, audience rendering, score penalty) |
| Audit test suite | 602 passing, 0 failing |
| Commits | hub + outputs store, on main (not yet pushed) |

The same commit also carried previously-uncommitted work it builds on (the audience-classification feature) and in-flight edits from other strands, committed on request.

---

## Why It Matters

Two of our core promises met their own standard this session. We tell clients an audit deliverable should be trustworthy on its face; ours now refuses to ship a broken sentence. We tell clients that metadata exists so machines need not guess; our audit now measures and prices exactly that gap, and does so most pointedly where it matters most, on pages aimed at children. The audience scoring also lands honestly: it rewards a site that declares its audience and only marks down the one that forces an agent to infer.

---

## The Insight

The truncation was not a context-window problem, it was a single output cap set too low; the robust fix combined raising the cap, shortening the prose, and a deterministic gate that can never let the defect through regardless of the model. Streaming, the obvious-sounding option, would not have helped, because it does not change the ceiling. The broader lesson held again: a check a script can perform deterministically belongs in a gate, not in a reviewer's eye.

---

## Next Steps

- Push the two commits when ready (the outputs store first, then the hub pointer).
- The truncation guard and the inferred-audience scoring now apply to every future audit automatically; no per-run action is needed.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 35c5b510 | Audit: rewrite truncation guard, Gate 0e prose backstop, inferred-audience recommend + downscore (hub) |
| a711c1c7 | Audit deliverables: regenerate sibotacademy.pl/en report and tagged PDF (outputs store) |
