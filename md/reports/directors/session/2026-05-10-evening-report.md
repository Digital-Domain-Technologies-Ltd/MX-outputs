---
title: "Co-Directors Report — Workflow Catches Its Own Failure Mode"
description: "Evening micro-segment. /step-commit's afternoon failure mode (pre-existing staged files swept into the session-close commit) addressed by a new PreToolUse hook the same day."
author: "Tom Cranstoun"
created: 2026-05-10
modified: 2026-05-10
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-10-evening-report.md
---

# Co-Directors Report — Workflow Catches Its Own Failure Mode

**Date:** 10 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

A single-commit segment closing out a workflow improvement. During the afternoon's /step-commit run, the session almost swept three pre-existing staged files (a stale PDF refactor's deletions sitting in the hub's index from earlier work) into the session-close commit. The catch was manual. This evening, that failure mode is now blocked at the harness level: a new PreToolUse hook fires before every Bash `git commit` and prints the staged set back into the agent's context as a system-reminder.

---

## What Was Done

### 1. Pre-commit staged-snapshot hook

Wrote `.claude/hooks/pre-commit-staged-snapshot.sh` and wired it into `.claude/settings.json` under `PreToolUse → matcher: Bash`. The script self-filters on the command pattern, so it only fires when the bash command actually invokes `git commit` (it correctly ignores `git commit-tree` and unrelated commands). Handles all three commit shapes the workflow uses: plain `git commit`, `git -C <path> commit`, and `cd <path> && git commit`. Output is informational only — never blocks, never modifies the commit. The agent now sees a "Pre-commit staged snapshot (workdir): file | lines+" preview right before any commit lands, with explicit guidance to run `git restore --staged <path>` if pre-existing in-flight work appears in the list.

The hook fires at every commit point in the /step-commit workflow: Step 1 submodule commits, Step 2 directors-report commit, Step 3 hub commit (the failing point this morning), Step 5 documentation commit, Step 7 README-regen commit, Step 8 auto-fixer commits, and Step 9a pointer-bump commit. End-to-end firing was confirmed live during the hook's own commit — it surfaced its own staged set before landing.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 |
| Files changed | 2 |
| Lines added | +57 |
| Lines removed | 0 |
| Repositories | 1 (hub only) |

---

## The Insight

The workflow document caught a failure in its own pre-flight, and the same workflow shipped the fix the same day. /step-commit Step 1's pre-flight audits submodule HEADs but does not audit the hub's index. The afternoon's incident proved the gap: a session inheriting pre-existing staged files in the hub index could quietly inherit them into its own session-close commit. Documenting the rule in LEARNINGS solves it for future agents who read the rule. Adding the harness-level hook solves it regardless of whether anyone reads the rule. Both interventions were needed because LEARNINGS captures the why and the hook captures the how.

The wider lesson: the gap between "agent must remember to do X" and "harness automatically surfaces X" is the gap between policy and enforcement. Workflow documents drift unless the harness backs them up.

---

## Next Steps

- [ ] Watch the next several /step-commit runs for whether the new staged-snapshot context proves load-bearing — does it actually catch in-flight work, or is the warning text noise the agent learns to skim?
- [ ] If the hook proves valuable, consider parallel hooks for the other two recurring failure modes the LEARNINGS buffer has captured this month (corpus-sweep blast radius, missing-CSS class). The pattern is the same: a pre-tool-use snapshot of the relevant state.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `ee15b07c` (hub) | Add pre-commit staged-snapshot PreToolUse hook |
| _pending_ (hub, evening) | Hub pointer bump for mx-outputs evening report |
