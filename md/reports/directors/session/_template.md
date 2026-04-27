---
title: "Co-Directors Report — <DESCRIPTIVE_TITLE>"
description: "<one-line description of what this segment achieved>"
author: "Tom Cranstoun"
created: <YYYY-MM-DD>
modified: <YYYY-MM-DD>
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, <segment>]
---

<!--
  TEMPLATE — Co-Directors Session Report
  ---------------------------------------
  Used by /step-commit Step 2 (skill: .claude/skills/step-commit).
  Full SOP: scripts/cogs/co-directors-report.cog.md
  Filename: <YYYY-MM-DD>-<segment>-report.md (segment ∈ morning|afternoon|evening)

  Filling rules:
  - Plain business language. Honest about failures.
  - No confidential names — advisory board referenced by role only.
  - Audience: co-directors, advisory board, investors, future team.
  - Numbers must be real. Do not estimate.
  - Sections marked OPTIONAL appear only when warranted.
  - Delete this comment block before saving.
-->

# Co-Directors Report — <DESCRIPTIVE_TITLE>

**Date:** <DD Month YYYY> — <Segment>
**Segment:** <segment> (<time range, e.g. since midnight | since noon | since 5pm>)

---

## Summary

<2–4 sentences. Tom's framing supported by numbers. State the headline outcome and the single most important consequence.>

---

## What Was Done

### 1. <Area / Theme>

<Description. Group related work; do not list commits one-by-one here.>

### 2. <Area / Theme>

<Description.>

<!-- Add or remove ### subsections as the work demands. Three is typical, one is fine for a tight session, more is fine when the session genuinely spanned multiple themes. -->

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | <N> |
| Files changed | <N> |
| Lines added | +<N> |
| Lines removed | −<N> |
| Repositories | <N> |

<!-- Append rows when relevant: submodules touched, scripts deleted, new canonical files, new REMINDERS items, etc. -->

---

## Why It Matters    <!-- OPTIONAL — include when the session was governance/hygiene/refactor work that needs business framing -->

<Why this is investor- or board-relevant. Skip for routine feature work where the framing is self-evident.>

---

## The Insight    <!-- OPTIONAL — include when the session changed your understanding of something -->

<One paragraph. The thing you didn't know at the start that you know now.>

---

## Decisions Made    <!-- OPTIONAL — include when irreversible or scope-defining decisions landed this segment -->

- <Decision and the reasoning in one line>

---

## Open Questions    <!-- OPTIONAL — include when the session surfaced questions that need Tom's call -->

- <Question and what hangs on the answer>

---

## What Changed About Me    <!-- OPTIONAL — include for sessions where Maxine learned a working pattern worth retaining -->

<First-person. What working pattern proved itself; how Maxine will operate differently next time.>

---

## What This Means for Investors    <!-- OPTIONAL — include for sessions with material business signal -->

<Plain language: revenue trajectory, risk reduction, capability unlocked, runway impact.>

---

## Next Steps

- <Actionable item — these get mirrored into REMINDERS.md by Step 2g of the workflow>

---

## Commit Log

| Hash | Description |
|------|-------------|
| <hash> | <commit message first line> |

<!--
  If the report is written before the session's hub commit lands (e.g. when no submodule commits exist to anchor against), record the hub commit's hash as `_pending_` and update post-commit, OR re-run the table refresh after Step 3.
-->
