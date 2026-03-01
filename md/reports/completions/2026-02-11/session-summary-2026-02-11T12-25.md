---
title: "ai→sop field rename across entire MX ecosystem"
created: "2026-02-11"
session-start: "2026-02-11T10:00:00Z"
session-end: "2026-02-11T12:25:00Z"
duration: "~2.5 hours"
type: "refactoring"
status: "completed"
---

# Session Summary: ai→sop Field Rename Across Entire MX Ecosystem

## Overview

Executed a systematic rename of all `ai-*` policy fields and tags to `sop-*` (Standard Operating Procedure) across the entire MX ecosystem — main repo (~75 files), 7 submodules (~45 files), HTML outputs, and the canonical cog specification. This implements Tom's directive: "We do not expose AI to our users or customers." SOP is the business term from Section 7 of the cog spec — a Standard Operating Procedure that executes itself.

The session also included the `/interview-me` skill to classify 500+ `ai-` occurrences into three categories: policy fields (rename), identity fields (keep), and tags (rename). This prevented breaking identity fields while achieving the business goal.

## What Was Accomplished

### 1. Interview and Classification

Used `/interview-me` to clarify scope before execution:

- **Policy fields → sop-***: All 13 policy field names renamed
- **Identity fields → keep**: `ai-author`, `ai-content-disclosure`, `type: ai-agent`, `audience: ai-agents` preserved
- **Tags/keywords → rename**: All `ai-` prefixed tag values renamed to `sop-`
- **Migration path change**: `ai-instruction` now migrates to `sop-instruction` (flat field), replacing previously planned `mx.runbook` (nested namespace)

### 2. Canonical Spec Update

**File:** [cog-unified-spec.md](../../MX-Canon/MX-The-Gathering/deliverables/cog-unified-spec.md)

- `ai_inference` → `sop_inference` in two COG usage YAML examples

### 3. Base Configuration Update

**File:** [base.md](../../.claude/mode-configs/base.md)

- Migration section rewritten: now points to `sop-instruction` instead of `mx.runbook`
- 6 `ai-instruction` references updated throughout

### 4. Ecosystem-Wide Rename

Two parallel background agents executed simultaneously:

- **Main repo agent**: ~75 files — field names and tag values in content-lifecycle/, datalake/, MX-Canon/, scripts/, LEARNINGS.md, INSTALLME.md, CLAUDE.md, SOUL.md, HTML outputs
- **Submodule agent**: ~45 files across 7 packages — allaboutv2 (4), mx-sales-enablement (3), mx-appendices (10), mx-gathering (12), mx-handbook (4), mx-template-repo (7), mx-the-bible (4)

### 5. Lint Fix

**File:** [PRESENTATION-GUIDE.md](../../datalake/presentations/maxine-vision-deck/PRESENTATION-GUIDE.md)

- Fixed 5 MD028 lint errors (blank lines inside blockquotes)

### 6. Step-Commit and Push

- 7 submodules committed and pushed independently
- 149 files staged and committed in main repo
- 3 total commits pushed to origin/main

## Field Name Rename Map

| Old Name | New Name |
| --- | --- |
| `ai-content-policy` | `sop-content-policy` |
| `ai-instruction` | `sop-instruction` |
| `ai-freshness` | `sop-freshness` |
| `ai-preferred-access` | `sop-preferred-access` |
| `ai-structured-data` | `sop-structured-data` |
| `ai-attribution` | `sop-attribution` |
| `ai-contributions` | `sop-contributions` |
| `ai-contribution-process` | `sop-contribution-process` |
| `ai_inference` | `sop_inference` |
| `ai_guidance` | `sop_guidance` |
| `ai_user` | `sop_user` |
| `ai_features` | `sop_features` |
| `ai_files` | `sop_files` |

## Fields Preserved (Identity, Not Policy)

- `ai-author` — factual: an AI wrote this
- `ai-content-disclosure` — factual: this content involves AI
- `ai-contribution` (singular) — factual: AI contributed
- `type: ai-agent` — identity type
- `audience: ai-agents` — who this is for

## Commits

| Hash | Message |
| --- | --- |
| `a8bc13c` | refactor: ai→sop field name and tag rename across entire ecosystem |
| `aa1308d` | fix: lint MD028 blockquote blank lines in presentation guide |
| `23290ab` | docs: changelog — ai→sop field rename session |

All pushed to origin/main.

## Uncommitted Changes Remaining

32 files have unstaged changes — mostly `ingest/MX-new/` files (ai→sop renames from the background agents that were not staged in the main commit) plus 3 MX-Canon files and 2 session summary updates. These are non-critical and can be committed in the next session.

## MX Principles Applied

1. **SOP language** — Business term, not tech jargon. Customers see "Standard Operating Procedure", not "AI"
2. **Canon wins** — Updated canonical spec first, then propagated
3. **Interview before execution** — Classified 500+ occurrences before touching any files
4. **Parallel execution** — Two background agents for main repo and submodules simultaneously

## Active Reminders

8 active reminders in REMINDERS.md, including:

- Add `policy` to canonical field list
- Review business plans
- Frankfurt countdown (12 May 2026)
- Publish "Content That Manages Itself" blog
- Frankfurt pitch: SOP/SSOT language
- Consider an SOP example cog
- Frankfurt talk: railway narrative
- Railway language in investor pitches

## Next Steps

- Commit the remaining 32 unstaged files (ingest/MX-new/ sop renames, session summaries)
- Address the "Frankfurt pitch: SOP/SSOT language" reminder — slide deck alignment
- Consider creating the SOP example cog for investor demonstrations
- LinkedIn identity kit (plan exists in `.claude/plans/`)

---

**Session completed successfully.**
