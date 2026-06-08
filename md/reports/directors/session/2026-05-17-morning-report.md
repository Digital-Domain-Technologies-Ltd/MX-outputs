---
title: "Co-Directors Report — New essay shipped; audit-template lint hardened"
description: "First-person essay 'Why Machines Need Human Creativity' published on mx-site; mx-reginald gains two template-quality gates (voice + drift) plus authoring guides."
author: "Tom Cranstoun"
created: 2026-05-17
modified: 2026-05-17
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-17-morning-report.md
  purpose: "First-person essay 'Why Machines Need Human Creativity' published on mx-site; mx-reginald gains two template-quality gates (voice + drift) plus authoring guides."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - New essay shipped; audit-template lint hardened"]
---

# Co-Directors Report — New essay shipped; audit-template lint hardened

**Date:** 17 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

A short morning session with two distinct deliveries. A new first-person essay, *Why Machines Need Human Creativity*, was published on mx.allabout.network with full discovery coverage (sitemap, blog index, llms.txt Featured, llms-full corpus). Separately, the mx-reginald audit pipeline gained two template-quality lints (voice + drift) wired into `npm test`, plus two authoring guides for the conditional-prose DSL and the rewrite-block convention. Both pieces of work address the same underlying concern: keeping the prose that reaches a reader honest and consistent across regenerations.

---

## What Was Done

### 1. New essay published on mx-site

*Why Machines Need Human Creativity* shipped at `https://mx.allabout.network/blog/why-machines-need-human-creativity.html`. It argues that machines extend and execute but do not originate — that the originating choice (what is worth making, and why) and the final judgement (whether the work is good, honest, and answerable for) both rest with a person. It positions MX's person-in-the-loop requirement as structural, not a courtesy.

The piece went through several iterative passes during authoring: a house-style rewrite (em-dashes removed, neutral English in public HTML, no AI-attribution, banned constructs cleared), a humanizer pass against the writing-style guide's 24-pattern checklist (negation pivots, sentence-initial conjunctions, "The"-headings, one-sentence paragraphs all fixed), a repetition pass (cut a whole section that restated the argument without adding ground; cleared exact phrase repeats — "what it is good at" 3→1, "the middle" 4→1), and a final cut of the Vitruvian Man metaphor at the user's call. Final length 1,035 words; reading time approximately five minutes.

Discovery surfaces updated in lockstep: the post is in `sitemap.xml` (40 entries total), holds a card at the top of the blog listing, leads the curated "Featured articles" block in `llms.txt`, and is included in the `llms-full.txt` corpus.

### 2. mx-reginald: template-voice + template-drift lints

The audit pipeline now runs two new lints as part of `npm test` (via a `lint:templates` target). `check-template-voice.js` scans shipped consultant prose in the web-audit-suite and ecommerce templates for impersonal authorship phrases ("the audit detected", "the report notes"), Section 5 forbidden vocabulary, and stray em-dashes — catching house-style violations before the rewrite pass renders them into a client PDF. `check-template-drift.js` enforces lockstep between sections that must read identically in both templates (About This Report, Server Response Stability, Div Soup intro, Inline Code Duplicates, PDF EAA scope notes, Appendix methodology); the driving incident was a session where one template was updated and the other was not, and the rendered PDFs drifted into different voices.

Two authoring guides land alongside the lints: `CONDITIONAL-PROSE-GUIDE.md` documents the STRIP-IF DSL and the inline `[IF X: "..."]` branch syntax; `REWRITE-BLOCK-GUIDE.md` documents the house style for the `<!-- REWRITE: -->` instruction blocks the rewrite pass consumes. The ecommerce and web-audit-suite templates were updated to pass the new lints (shared sections brought back into lockstep, consultant voice restored, em-dashes removed); the golden infill skeleton was regenerated to match.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 2 |
| Files changed | 18 |
| Lines added | +2,001 |
| Lines removed | −318 |
| Repositories | 2 (mx-outputs, mx-reginald) |
| New blog posts | 1 |
| New audit lints | 2 |
| New authoring guides | 2 |
| Wordlist entries net change | 0 (Vitruvian added then removed) |

---

## The Insight

Two seemingly unrelated pieces of work this morning share one principle: prose that reaches a reader has to be checked at the source, not after the fact. The blog post needed a humanizer pass before publication because catching AI-tells in a rendered HTML page is harder than catching them in a draft. The audit templates needed voice and drift lints wired into `npm test` because catching consultant-voice violations in a generated PDF is harder than catching them in the template the rewrite pass reads from. Both pieces apply the same fix: shift the gate left, run it deterministically, and fail loud before the artefact ships.

---

## Next Steps

- Promote the new essay through the usual channels (LinkedIn, newsletter) once Tom decides which slot it fits.
- Watch the audit-template lints over the next few audit runs to confirm the section registry in `check-template-drift.js` is the right surface (add or remove anchors as the templates evolve).

---

## Commit Log

| Hash | Description |
|------|-------------|
| 91884ea | Blog: publish 'Why Machines Need Human Creativity' on mx-site |
| a6d3658 | Audit templates: voice/drift lint + conditional-prose & rewrite-block guides |
| _pending_ | Hub: pointer bumps for mx-outputs + mx-reginald |
