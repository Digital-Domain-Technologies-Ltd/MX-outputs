---

title: "Co-Directors Report — Broadening the Case"
description: "Morning session report. Six writing tasks completed: Chapter 00 rewrite with non-commerce case studies, two cog reviews, cog spec two-zone fix, blog deployment, Appendix D verification. REMINDERS refreshed."
created: "2026-03-04"
version: "1.0"
author: "Tom Cranstoun and Maxine"
mx:
  x-mx-segment: "morning"
  audience: "stakeholders"
  confidential: true
---


# Co-Directors Report — Broadening the Case

**4 March 2026 — Morning**

---

## Summary

The morning was writing and housekeeping — six tasks from REMINDERS cleared in a single session. The most significant change was to Chapter 00 of the Protocols, which had a structural weakness: it argued that MX applies beyond commerce but offered only commerce examples. The chapter now includes healthcare (NHS drug interaction hallucinations), education (school catchment boundaries published as images), and government (council planning applications) alongside the original commerce scenarios. The "Eight Reasons MX Pays for Itself" section was broadened to "Eight Reasons" with non-commerce proof points woven through every reason.

Two cog reviews were completed — a stale tag removed from the publication workflow cog and the block-architecture-evolution naming section updated to reflect the resolved NDR #1 decision. The cog unified spec had a YAML example that violated its own two-zone model; that was fixed. The "Content That Manages Itself" blog post was deployed to allaboutv2. Appendix D was verified — the three HTML patterns were already documented. REMINDERS was refreshed with all eight completions marked and countdowns recalculated.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (morning) | 3 (main) + 1 (allaboutv2) |
| Files touched | 9 (6 main repo + 3 allaboutv2) |
| Lines added | 919 |
| Lines removed | 41 |
| REMINDERS items completed | 8 |
| REMINDERS items remaining | 2 this-week, 11 upcoming, 7 backlog |
| Handbook countdown | 29 days |
| Frankfurt countdown | 69 days |

---

## What Was Done

### Chapter 00 Rewrite — Non-Commerce Case Studies

The anchor chapter of the Protocols claimed MX applies everywhere but proved it only with commerce. Six edits added non-commerce proof points:

- **Two new case studies** after the opening — NHS drug interaction hallucination (agent cannot distinguish which drug a contraindication refers to) and school catchment area misrepresentation (boundaries published as images, agent guesses from partial data)
- **Eight Reasons broadened** — every reason now includes healthcare, education, or government examples alongside commerce. "Revenue at risk" became "Goal completion at risk". New examples: hospital formulary errors, university grade boundaries, council computational trust, charity Schema.org, government duty-of-care legal exposure
- **"What This Book Offers"** strengthened — "understand your products" became "understand your content", with hospital/council/university/charity examples
- **Closing paragraphs** updated — "The business case" became "The case for action — whether measured in revenue, patient safety, citizen trust, or educational access"

Markdown lint: 0 errors.

### Cog Reviews (2 cogs)

1. **cog-publication-workflow.cog.md** — removed stale `sop` tag from the tags array. Leftover from pre-block-architecture terminology.
2. **block-architecture-evolution.cog.md** — "The Naming Question" section replaced with "The Naming Decision", reflecting the resolved NDR #1 (3 March 2026). Block retained as canonical term over the "facet" alternative.

### Cog Unified Spec — Two-Zone Fix

The YAML example in `cog-unified-spec.cog.md` had `tags`, `audience`, and `deliverable` at the top level instead of under `mx:`. Fixed to comply with the spec's own two-zone model.

### Blog Deployment

"Content That Manages Itself" — HTML, CSS, and social card SVG deployed to `allaboutv2/blogs/mx/`. The post argues that CMS is transitional technology and content should manage itself through embedded metadata.

### Appendix D Verification

The three HTML patterns (heading anchor IDs, external CSS separation, social media card meta tags with `twitter:image:alt`) were already documented in Part 13 of Appendix D. No changes needed.

### REMINDERS Refresh

Eight items marked complete. Dashboard countdowns recalculated for 4 March. Completed items moved from Active to Completed section. Active list trimmed to 2 this-week items (London contacts, LinkedIn ad), 11 upcoming, 7 backlog.

---

## Decisions Made

1. **Non-commerce proof points are structural, not decorative.** Chapter 00 now treats healthcare, education, and government as first-class MX domains throughout — not a sidebar or footnote but woven into the core argument.
2. **Naming decision is resolved, not pending.** Block-architecture-evolution now states the NDR #1 outcome as fact, not as an open question.
3. **Specs must follow their own rules.** The cog-unified-spec YAML example was non-compliant with the two-zone model it defines. Fixed.

---

## Next Steps

- London CMS Experts contact follow-ups (this week)
- LinkedIn ad re-submission (this week)
- Frankfurt preparation — 69 days, demo scripting and physical logistics
- Handbook publication — 29 days

---

## Commit Log

| Hash | Theme |
|------|-------|
| `3eecb24e` | Deploy "Content That Manages Itself" blog post (allaboutv2) |
| `bbff02fc` | Writing session — reviews, Chapter 00, cog spec, blog deploy |
| `41b3ac1a` | Refresh REMINDERS — mark 8 completed, update countdowns |

---

*The board does not read git logs. This report makes sure they do not have to.*
