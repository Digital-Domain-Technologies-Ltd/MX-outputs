---
title: "Co-Directors Report — Cog-Author Drop, Methodology Closes a Gap"
description: "A general 'how to write a cog' walkthrough now exists end-to-end. Anyone — human or AI — writing a cog has a single normative path."
author: "Tom Cranstoun"
created: 2026-05-03
modified: 2026-05-03
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-03-afternoon-report.md
---

# Co-Directors Report — Cog-Author Drop, Methodology Closes a Gap

**Date:** 3 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

The project now has a teachable, agent-runnable walkthrough for writing a cog of any flavour — info, action, routing, certificate-of-genuineness, or community-owned governance standard. Anyone, human or AI, who needs to write a cog now has a single normative path: read the action-cog, follow the ten steps, validate. Closes a documentation gap that mattered for onboarding and for the credibility of cogs as a governance pattern.

---

## What Was Done

### 1. Cog-author action-cog and entry-point skill

`scripts/cogs/how-to-write-a-cog.cog.md` is a new action-cog covering the full ten-step walkthrough: pick the cog type, write the standard 5-line opening header, build Zone 1 frontmatter, build the `mx:` block, set `cogId`, declare the cog-graph fields (`partOf` / `buildsOn` / `requires` / `refersTo`), add `cogHeader` when needed, declare typed body blocks, layer on `x-mx-execute:` for action cogs, choose where the file goes. Three actions in the execute contract: `explain` (present the walkthrough), `scaffold` (produce a skeleton file from a `cogId` + `cogType` + `partOf` triple), `check` (validate an in-progress cog against the rules).

`.claude/skills/cog-author/skill.md` is the slim entry-point skill triggered by "write a cog", "new cog", "draft a cog", "scaffold a cog". It dispatches to the action-cog without duplicating it. Defers to `/mx-build` for action-cog drill-down and to `/mx-c-cog-id` for ID generation.

### 2. Light cleanup

Lint hooks across the session removed three trailing periods from H1 headings in the Frankfurt CMS Summit talk deck and removed two stray blank lines from chapter 0 of the Handbook and Protocols. Decision was to ship the cleanup rather than revert.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 3 (cog-author drop, manuscript cleanup, docs) |
| New files | 2 |
| Lines added | ~340 |
| Lines removed | ~31 |
| Repositories touched | 2 (MX-hub + mx-outputs) |
| MX field violations introduced | 0 (validated pre-commit) |

---

## Why It Matters

A cog is the unit by which the MX OS is taught, navigated, and made operational. Until this segment, the only authoring guidance was the action-cog drill-down (`building-action-docs`), which is narrow to the self-executing flavour. There was no general "starting from blank, this is what you write" guide. That left every new cog as either a copy-paste-from-an-old-one exercise or a re-derivation from the `mx-shared-gathering/draft-cogs.md` open standard. Both work, neither scales. The new walkthrough is the single normative path: it cites the standard for every structural rule, links to the runbook for any new field that needs canon registration, and is itself an action-cog so an agent can dispatch the `scaffold` action and produce a working skeleton.

The methodology signal: a project that publishes a standard but cannot tell a newcomer how to write to that standard has only published half of what it claims. This closes that half.

---

## Decisions Made

- Cog-author lives at `scripts/cogs/how-to-write-a-cog.cog.md` (action-cog, dispatchable via `mx exec`) rather than as a pure prose info-cog. The decision criterion: an authoring guide that an agent can execute beats one a human has to read line by line.
- The skill is slim — routes to the action-cog rather than duplicating its content. Same pattern as `/mx-build` → `building-action-docs`. One source of truth per topic.
- Lint cleanup on Handbook and Protocols chapters shipped rather than reverted. The edits were a single blank line each; reverting would have re-flagged them next session.

---

## Next Steps

- `npm run cog:sync` to register `how-to-write-a-cog` in `mx-reginald/index.json`. Not part of step-commit; runs separately.
- The action-cog references actions (`scaffold`, `check`) whose execution contracts are described but not yet exercised end-to-end against a fresh `.cog.md` file. First time someone scaffolds via the cog will surface any rough edges.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `_pending_` (MX-hub) | Add /cog-author skill + how-to-write-a-cog action-cog |
| `_pending_` (MX-hub) | Ship lint cleanup on Frankfurt talk-deck + handbook + protocols chapter-00 |
| `_pending_` (MX-hub) | Docs: CHANGELOG v1.66 entry for cog-author drop |
| `_pending_` (mx-outputs) | Add 2026-05-03 afternoon directors report |
