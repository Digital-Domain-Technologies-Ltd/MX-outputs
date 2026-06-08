---
title: "SOP Reframing, Registry Snapshot, and Universal Cog Executor"
created: "2026-02-11"

author: Tom Cranstoun
mx:
  sessionStart: "2026-02-11T07:00:00Z"
  sessionEnd: "2026-02-11T09:00:00Z"
  duration: "~2 hours"
  contentType: "feature-implementation"
  status: "completed"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/completions/2026-02-11/session-summary-2026-02-11T09-00.md
  purpose: "SOP Reframing, Registry Snapshot, and Universal Cog Executor"
  audience: [humans, machines]
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["SOP Reframing, Registry Snapshot, and Universal Cog Executor"]
---

# Session Summary: SOP Reframing, Registry Snapshot, and Universal Cog Executor

## Overview

A conceptual breakthrough session that delivered three major capabilities. Tom identified that action-cogs are Standard Operating Procedures and info-cogs are single sources of truth. This reframing was blended across every investor-facing and technical document in MX-Canon. A registry snapshot tool was built to generate machine-readable cog inventories. Finally, `mx run` was created as MX OS's first universal cog executor — name a cog, see its actions, run them.

The session moved MX OS from "a system you write" to "a system you run."

## What Was Accomplished

### 1. SOP/SSOT Reframing Across MX-Canon

Tom's insight: "These are not prompts, they are SOPs." This became the canonical investor-facing message.

- **Action-cog = Standard Operating Procedure** — machine-executable, governed, audited
- **Info-cog = Single Source of Truth** — the verified, authoritative answer

Updated 8 files across MX-Canon with consistent SOP/SSOT language:

| File | Change |
|------|--------|
| [cog-unified-spec.md](../../MX-Canon/MX-The-Gathering/deliverables/cog-unified-spec.md) | New Section 7: "Cogs in Business Terms" + section renumbering (now 20 sections) |
| [mx-vision-2026.md](../../MX-Canon/MX-Vision/deliverables/mx-vision-2026.md) | Five Capabilities and technology table updated |
| [MX-App/product-brief.md](../../MX-Canon/MX-App/product-brief.md) | SOP language in capabilities |
| [MX-App/SOUL.md](../../MX-Canon/MX-App/SOUL.md) | "not a prompt, a procedure" |
| [build-plan.md](../../MX-Canon/MX-App/deliverables/build-plan.md) | SOP in runtime description |
| [MX-OS/product-brief.md](../../MX-Canon/MX-OS/product-brief.md) | Five Layers: info-cogs as SSOT, action-cogs as SOPs |
| [explaining-mx-os.md](../../MX-Canon/MX-OS/deliverables/explaining-mx-os.md) | Both cog types redefined in business terms |
| [manual.md](../../MX-Canon/MX-OS/manual.md) | Runbook = SOP, info-cog = SSOT |

### 2. Co-Directors Report

- Created [2026-02-11-session-report.md](../../MX-Canon/MX-CoDirectors/deliverables/2026-02-11-session-report.md) documenting the SOP reframing
- Rewrote [co-directors-report.cog.md](../../MX-Canon/MX-CoDirectors/co-directors-report.cog.md) from v1.0 to v2.0:
  - Open-conversation interview format ("What should the board know about today?")
  - Fully adaptive report structure (no forced sections)
  - Auto-updates REMINDERS.md with next steps
  - Removed `quick` action, kept `generate`, `list`, `review`

### 3. Cog Registry Snapshot Tool

Added `snapshot` command to [query.js](../../MX-Reginald/scripts/cog-registry/query.js):

- Generates [cog-snapshot.cog.md](../../MX-Reginald/cog-snapshot.cog.md) — an info-cog with JSON body
- Five views: byType, byStatus, byNewness, allActions, dependency graph
- Integrated into `cog:sync` (snapshot generated alongside index.json)
- Added `npm run cog:snapshot` for standalone generation
- Updated [cog-query.cog.md](../../MX-Reginald/cogs/core/cog-query.cog.md) to v1.1

### 4. MX Run — Universal Cog Executor

Built the first universal cog executor for MX OS:

- **[mx-run.js](../../MX-Reginald/scripts/mx-run.js)** — Node.js core (index lookup, action listing, runtime dispatch)
- **[mx.run.sh](~/bin/mx.run.sh)** — Shell wrapper for the mx dispatcher
- **[mx-run.cog.md](../../MX-Reginald/cogs/core/mx-run.cog.md)** — Action-cog definition
- **[package.json](../../package.json)** — Added `cog:run` script

Three modes:

| Command | What happens |
|---------|-------------|
| `mx run` | List all 33 action-cogs |
| `mx run cog-query` | Show cog details + list 6 actions |
| `mx run cog-query summarise` | Execute the action (dispatched by runtime) |

Runtime dispatch: node/bash runs commands directly; runbook shows the SOP for AI agents to follow.

## Files Modified

**MX-Canon (SOP/SSOT reframing):**

1. **[cog-unified-spec.md](../../MX-Canon/MX-The-Gathering/deliverables/cog-unified-spec.md)** — New Section 7, renumbering 7-19 to 8-20
2. **[mx-vision-2026.md](../../MX-Canon/MX-Vision/deliverables/mx-vision-2026.md)** — SOP in Five Capabilities and tech table
3. **[MX-App/product-brief.md](../../MX-Canon/MX-App/product-brief.md)** — SOP language
4. **[MX-App/SOUL.md](../../MX-Canon/MX-App/SOUL.md)** — "not a prompt, a procedure"
5. **[build-plan.md](../../MX-Canon/MX-App/deliverables/build-plan.md)** — SOP runtime description
6. **[MX-OS/product-brief.md](../../MX-Canon/MX-OS/product-brief.md)** — SSOT + SOP in Five Layers
7. **[explaining-mx-os.md](../../MX-Canon/MX-OS/deliverables/explaining-mx-os.md)** — Both cog types in business terms
8. **[manual.md](../../MX-Canon/MX-OS/manual.md)** — Runbook = SOP, info-cog = SSOT

**Co-Directors:**

1. **[co-directors-report.cog.md](../../MX-Canon/MX-CoDirectors/co-directors-report.cog.md)** — v1.0 to v2.0
2. **[2026-02-11-session-report.md](../../MX-Canon/MX-CoDirectors/deliverables/2026-02-11-session-report.md)** — NEW session report

**Registry & Tools:**

1. **[query.js](../../MX-Reginald/scripts/cog-registry/query.js)** — Added buildSnapshot() + snapshot CLI command (~120 lines)
2. **[cog-query.cog.md](../../MX-Reginald/cogs/core/cog-query.cog.md)** — v1.0 to v1.1 with snapshot action
3. **[mx-run.js](../../MX-Reginald/scripts/mx-run.js)** — NEW universal cog executor
4. **[mx-run.cog.md](../../MX-Reginald/cogs/core/mx-run.cog.md)** — NEW action-cog definition
5. **[mx.run.sh](~/bin/mx.run.sh)** — NEW shell wrapper
6. **[index.json](../../MX-Reginald/index.json)** — Regenerated (49 cogs)
7. **[cog-snapshot.cog.md](../../MX-Reginald/cog-snapshot.cog.md)** — NEW auto-generated info-cog
8. **[package.json](../../package.json)** — Added `cog:snapshot` and `cog:run` scripts

**Gestalt-owned:**

1. **[REMINDERS.md](../../REMINDERS.md)** — Added 3 new reminders from session next steps

## Testing and Verification

```bash
# Registry sync picks up new cogs
npm run cog:sync               # 49 cogs, no errors

# mx run — list all action-cogs
mx run                         # 33 action-cogs listed

# mx run — show cog details
mx run cog-query               # Shows 6 actions

# mx run — execute node action
mx run cog-query summarise     # Runs live, outputs stats

# mx run — execute runbook action
mx run co-directors-report generate  # Displays the SOP

# mx run — info-cog handling
mx run what-is-a-cog           # "This is an info-cog — not executable"

# mx run — not found with suggestion
mx run nosuchcog               # Clean error message

# npm run equivalent
npm run cog:run                # Same as mx run
```

All tests passed.

## Technical Details

### Runtime Dispatch Logic

```
mx run <cogname> <action>
  1. Read MX-Reginald/index.json (fast lookup, no scan)
  2. Find cog entry by name
  3. Read full .cog.md file for execute block details
  4. Match action name against execute.actions[]
  5. Dispatch by runtime:
     - node/bash: exec command + actionName + extraArgs
     - runbook: check for executable command (npm/node prefix)
       → if found, run it
       → otherwise, display the SOP text
     - info-cog: tell user it's not executable
```

### Arg Parsing Fix

The shell wrapper passes `--dir /path/to/repo` before user args. Initial implementation incorrectly filtered `--dir` but left its value in the args array. Fixed with sequential arg parsing that skips both the flag and its value.

## MX Principles Applied

1. **Use existing standards** — `mx run` follows the existing mx.sh dispatcher convention
2. **Canon wins** — all SOP/SSOT language sourced from the unified spec
3. **No hardcoded counts** — mx run reads the live index, no stale numbers
4. **Write like a blog** — cog-unified-spec Section 7 reads like a business article, not a spec
5. **Any document can be a cog** — mx-run.cog.md is itself a cog describing the executor
6. **The instructions are the program** — runbook cogs display their SOP via mx run

## Decisions Made

1. **"These are not prompts, they are SOPs."** — Canonical investor-facing message
2. **Info-cog = single source of truth** — Business framing for data cogs
3. **Section 7 = the business bridge** — New spec section for compliance officers and investors
4. **Co-directors report v2: open conversation** — Not a fixed questionnaire
5. **Snapshot = info-cog with JSON body** — The registry describes itself as a cog
6. **mx run: always list actions** — Never auto-execute; show what's available first
7. **mx run: index lookup** — Fast, no filesystem scan; user runs cog:sync to update
8. **mx run: both implementations** — Node.js core + shell wrapper for mx dispatcher

## Next Steps

1. **Publish "Content That Manages Itself"** on allabout.network
2. **Frankfurt pitch materials** — ensure SOP/SSOT language in slide deck
3. **Consider an SOP example cog** — real-world SOP converted to action-cog
4. **Review Raskin Vision Brief** for SOP alignment
5. **Commit session changes** — 25 files modified, 1001 insertions, 839 deletions

## Session Context

**Previous work:** Cog system matured — info-cog/action-cog rename, runbook runtime rename, unified spec refinement
**This session:** Conceptual breakthrough (SOP/SSOT framing), tooling leap (snapshot + mx run)
**Status for next session:** All work complete. Uncommitted changes ready for review and commit.

## Success Metrics

- 8 Canon documents aligned with SOP/SSOT language
- Co-directors report v2.0 with adaptive interview format
- Registry snapshot tool generating 5-view info-cog
- Universal cog executor working via `mx run`, `npm run cog:run`, and direct node
- 49 cogs in registry (33 action-cogs, 15 info-cogs)
- REMINDERS.md updated with 3 new action items

---

**Session completed successfully.**
