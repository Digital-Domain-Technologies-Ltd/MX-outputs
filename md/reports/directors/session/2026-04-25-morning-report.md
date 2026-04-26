---
title: "Co-Directors Report -- Frankfurt Talk: 20 slides, two humanizer passes, free book sync"
description: "Frankfurt CMS Summit talk expanded to 20 slides, humanized, and aligned with the free book."
author: "Tom Cranstoun"
created: 2026-04-25
modified: 2026-04-25
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
---

# Co-Directors Report -- Frankfurt Talk: 20 slides, two humanizer passes, free book sync

**Date:** 25 April 2026 -- Morning
**Segment:** Morning (midnight to noon)

---

## Summary

The Frankfurt CMS Summit talk (12 May 2026) is now a 20-slide Marp deck with a matching PPTX. Four new slides were added this session -- Why Now, Invisible Failures, Still Early Days, and Are You Prepared? -- bringing in the commercial urgency argument, the invisible-revenue case, the SMOL/Browse-for-me retort, and a direct CTA to the CMS practitioner audience. Two humanizer passes cleaned AI writing patterns from both the deck and the speaker notes. The free book introduction was then cross-checked against the talk and found to be missing four core frameworks; all four were added.

---

## What Was Done

### 1. Frankfurt talk expanded to 20 slides

The deck grew from 16 to 20 slides. Added:

- **Slide 03 -- Why Now:** January 2026 platform race (Amazon/Microsoft/Google in one week), MCP/A2A protocols, preparation window closing faster than strategies assumed.
- **Slide 05 -- Invisible Failures:** Machine drop-offs produce no analytics signal. No bounce, no abandonment -- quiet revenue loss that never shows up in dashboards.
- **Slide 07 -- Four Working Principles:** Worst-machine principle added as opener; SMOL/Browse-for-me retort added to handle the "AI will get better" objection.
- **Slide 17 -- Still Early Days:** 85% no llms.txt, 70% no semantic HTML. A window, not a failure story.
- **Slide 20 -- Are You Prepared?:** Direct CTA slide for the CMS practitioner audience.

PPTX regenerated at each iteration; final file at `mx-outputs/pptx/presentations/frankfurt-cms-summit-talk.pptx`.

### 2. Two humanizer passes

**Deck pass** -- seven targeted edits: bloated prose on slides 02/03/04/06/11/18/19, negative parallelism, rule-of-three, jargon ("AI-mediated procurement flows", "finite founding cohort", "discoverable/addressable/verifiable") replaced with plain copy.

**Notes pass** -- twelve edits: broke the "Land on:" repetition (five identical occurrences), broke the "This is the moment..." pattern appearing on three consecutive slides, negative parallelisms in slides 04 and 06 aligned with the humanized deck, "Pivot to engagement" and "finite cohort" replaced.

### 3. Free book cross-check and sync

Mapped all Frankfurt talk concepts against `chapter-00-free.md`. Found four missing:

| Gap | Fix applied |
|-----|------------|
| Tabs and accordions (hostile web) | Added to hostile design bullet |
| Anti-pattern 0 (AI will not improve at your markup) | Added with SMOL/Browse-for-me extension |
| Worst-machine principle (named, usable) | New paragraph after MX definition |
| Four working principles | Bullet list following worst-machine principle |
| MX Journey stages 1-5 | New "The machine journey" section with table |

A reader who hears the Frankfurt talk and picks up the free book now finds all core frameworks reinforced.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits | 5 |
| Submodule commits (mx-outputs) | 4 |
| Files changed | 9 |
| Lines added | +133 |
| Lines removed | -34 |
| Repositories | 2 |
| Talk slides | 20 (was 16) |
| PPTX regenerations | 4 |

---

## Next Steps

- Regenerate free book PDF (chapter-00-free.md has grown; PDF should be current before Frankfurt)
- Review free book word count -- was 2500 words, now larger; update frontmatter `words` field
- Consider whether the MX Journey stages table belongs in the Handbook introduction as well

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| f81a65c0 | hub | feat: add SMOL/Browse-for-me argument across talk and free book |
| bdc8610c | hub | feat: add missing talk concepts to free book introduction |
| 98d34c92 | hub | style: humanizer pass on frankfurt speaker notes |
| 9f53d8da | hub | style: humanizer pass on frankfurt deck |
| ab155901 | hub | feat: strengthen frankfurt talk to 20 slides |
| 9c14c90 | mx-outputs | Remove superseded PPTX files (DITA podcast and demo deck) |
| 7d180ef | mx-outputs | pptx: add SMOL/Browse-for-me retort to slide 07 |
| ed78381 | mx-outputs | pptx: regenerate after humanizer pass |
| e987211 | mx-outputs | pptx: frankfurt talk updated to 20 slides |
