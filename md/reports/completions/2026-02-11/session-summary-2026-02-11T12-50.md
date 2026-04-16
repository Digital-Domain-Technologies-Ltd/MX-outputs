---
title: "Maxine vision session — SOUL.md, API layer, boot system, co-directors report"
created: "2026-02-11"

author: Tom Cranstoun
mx:
  sessionStart: "2026-02-11T12:25:00Z"
  sessionEnd: "2026-02-11T12:50:00Z"
  duration: "~3 hours (full day session, multiple segments)"
  contentType: "feature-implementation"
  status: "completed"
---

# Session Summary: Maxine Vision Session

## Overview

Extended working session that began with completing the ai→sop ecosystem rename (previous segment) and evolved into a Maxine vision session. Three major threads: (1) SOUL.md identity update — Maxine is patient, proactive, and suggests creating cogs; (2) mx-app REST API layer — 10 endpoints for distributed Maxine; (3) mx-boot unified boot system — bare-metal to session-init in one cog.

This session also produced co-directors report #4 documenting the Maxine vision shift and Phase 2 completion.

## What Was Accomplished

### 1. SOUL.md Identity Update

**File:** [SOUL.md](../../SOUL.md)

Three additions to Maxine's identity document:

- **Patience principle** (Decision-Making Authority section): "Maxine is patient. I do not rush Tom. If something needs doing but the timing is wrong, I note it in REMINDERS.md and move on."
- **REMINDERS.md integration** (Proactive Role section): "When I spot something that needs doing later — write it to REMINDERS.md immediately. No approval needed."
- **Proactive cog suggestions** (Proactive Role section): Maxine proactively suggests creating both info-cogs (single source of truth for repeated knowledge) and action-cogs (SOPs that execute themselves for repeatable processes).

### 2. mx-app REST API Layer

**File:** [mx-app/backend/api.js](../../mx-app/backend/api.js)

10 REST endpoints on the embedded server (localhost:3456) — the seed of the distributed Maxine server:

- `/api/status` — system health
- `/api/cogs` — cog registry query
- `/api/history` — browsing history
- `/api/favourites` — saved items
- `/api/match` — cog matching

This is Phase 3 of the Frankfurt plan — the bridge from desktop prototype to phone PWA client.

### 3. mx-boot Unified Boot System

**Files:**

- [MX-Canon/MX-OS/deliverables/mx-boot.cog.md](../../MX-Canon/MX-OS/deliverables/mx-boot.cog.md)
- [boot.sh](../../boot.sh)
- [.claude/skills/mx-boot/skill.md](../../.claude/skills/mx-boot/skill.md)

Unified boot cog with 6 actions: preflight, install, configure, init, status, route. Three entry points: `boot.sh` (bare metal), `npm run boot` (Node available), `/mx-boot` skill (session init). Works from zero — no $MX_HOME, no GitHub, no Claude required. Self-diagnosing.

### 4. Co-Directors Report #4

**File:** [MX-Canon/MX-Corporate/deliverables/2026-02-11-session-report-4.md](../../MX-Canon/MX-Corporate/deliverables/2026-02-11-session-report-4.md)

Documents the Maxine vision shift and Phase 2 completion for the co-directors record.

### 5. Claude Code Hooks

**Files:**

- [.claude/hooks/mx-app-change-reminder.sh](../../.claude/hooks/mx-app-change-reminder.sh)
- [.claude/hooks/session-uber-plan.sh](../../.claude/hooks/session-uber-plan.sh)

Hooks for uber plan awareness and mx-app change reminders.

## Commits (since ai→sop push)

| Hash | Message |
| --- | --- |
| `df2545f` | feat: mx-boot action-cog and skill refactor |
| `448b409` | feat: add Claude Code hooks for uber plan awareness |
| `5e82552` | fix: lint MD032 blank lines around lists across canon and ingest |
| `8ba1f22` | docs: update INSTALLME for boot.sh and regenerate cog registry |
| `f0fd8b2` | docs: changelog — hooks, mx-boot refactor, hub.md hooks list |
| `5abe7f8` | docs: SOUL.md — add patience principle and proactive cog guidance |
| `8b8d92e` | docs: co-directors report #4 — Maxine vision and Phase 2 complete |
| `cde1afc` | feat: mx-app REST API layer — 10 endpoints for distributed Maxine |

## Files Modified

50 files changed, 1,933 insertions, 134 deletions (since ai→sop push).

Key files:

1. **SOUL.md** — Patience, REMINDERS.md integration, proactive cog suggestions
2. **mx-app/backend/api.js** — New REST API layer (205 lines)
3. **MX-Canon/MX-OS/deliverables/mx-boot.cog.md** — Unified boot cog (578 lines)
4. **boot.sh** — Bare-metal boot script (295 lines)
5. **REMINDERS.md** — Updated Frankfurt countdown (Phase 2→3), added API and rename reminders

## Uncommitted Changes

Only `CHANGELOG.md` has unstaged changes.

## Active Reminders

10 active reminders in REMINDERS.md:

- Add `policy` to canonical field list
- Review business plans
- Frankfurt countdown — 12 May 2026 (Phase 3 API layer next)
- Publish "Content That Manages Itself"
- Frankfurt pitch: SOP/SSOT language
- Consider an SOP example cog
- Frankfurt talk: railway narrative
- Railway language in investor pitches
- Phase 3: API layer on Maxine server
- Joymaker → Maxine rename

## MX Principles Applied

1. **Patience** — New principle codified in SOUL.md. Note it, don't rush it.
2. **Proactive cog creation** — Maxine now suggests both info-cogs and action-cogs when she spots opportunities
3. **The builder is the built** — Maxine updated her own identity document (SOUL.md)
4. **Boot from zero** — mx-boot works without any prerequisites installed

## Session Context

**Previous segment:** ai→sop rename (151 files, 3 commits, pushed)
**This segment:** Maxine vision — identity, API, boot, co-directors report
**Status:** All committed and pushed. CHANGELOG.md has minor unstaged edits.

---

**Session completed successfully.**
