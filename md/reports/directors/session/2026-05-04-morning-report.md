---
title: "Co-Directors Report — Skills frontmatter alignment with the Claude Skills spec"
description: "Aligned every Claude Code surface file in the hub with Anthropic's Skills spec; tightened the cog opening header rule into a two-way pre-write gate."
author: "Tom Cranstoun"
created: 2026-05-04
modified: 2026-05-04
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-04-morning-report.md
---

# Co-Directors Report — Skills frontmatter alignment with the Claude Skills spec

**Date:** 04 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

The hub's Claude Code surface (`.claude/skills`, `.claude/commands`, `.claude/cogs`) had drifted: every skill, command, and command cog carried an MX cog briefing header plus an `mx:` block with a `canonicalUri` stub, which conflicts with the Anthropic Skills spec. This morning we brought all 61 skills, both slash commands, and the one command cog into compliance with `name + description` frontmatter only, deleted 577 lines of redundant metadata, tightened the pre-write hook into a two-way gate so the cog header can never leak back into a non-cog file, and updated CLAUDE.md, LEARNINGS.md, the cog-author skill, and the how-to-write-a-cog SOP so the policy reads the same on every surface.

---

## What Was Done

### 1. Skills frontmatter brought into Claude Skills spec

Every `.claude/skills/*/skill.md` (61 files) was rewritten so the YAML frontmatter carries only the two fields the Anthropic spec requires: `name` and `description`. The five-line MX cog briefing block at the top, the `mx:` block, and the `canonicalUri` stub are gone. Descriptions were preserved where they already existed and otherwise re-derived from the body's first prose paragraph (with a preference for `**Purpose:**` lines and a discard rule for `Command: /xxx` stubs). Net delta on the skills tree alone: roughly 515 lines removed, 141 added.

### 2. Slash commands and the command cog

`.claude/commands/md-fix.md` and `.claude/commands/review-docs.md` were stripped to a single-line `description:` plus body. The `.claude/cogs/mx-compliance.cog.md` file was renamed via `git mv` to `.claude/cogs/mx-compliance.md` (the user's call: files inside `.claude/` should not carry the `.cog.md` suffix), its frontmatter pared back to a single `description:`, and the two cross-references in the matching skill were updated.

### 3. Validators taught to leave the Claude Code surface alone

`scripts/lib/frontmatter-validator.js` now skips any path matching `(^|\/)\.claude\/` — covering both absolute and relative path forms. `scripts/mx-validator.js` adds `.claude` to its `SKIP_DIRS` set, adds `/.claude/` to its `SKIP_PATH_FRAGMENTS`, and gives `validateFile()` an early-return that emits `{ skipped: true }` so explicit-path invocation also no-ops. Together this means the MX canon validators can never again flag a Claude Code file for missing MX metadata.

### 4. Two-way cog-opening gate

`.claude/hooks/pre-write-cog-opening.sh` was rewritten as a symmetric gate. The old hook only enforced *presence* of the briefing header on `.cog.md` writes; the new one also enforces *absence* on plain `.md` writes. The asymmetry that let this drift accumulate is gone. Six synthetic Write payloads were piped through the hook to confirm each branch — `.cog.md` with header allow, `.cog.md` without header deny, plain `.md` without header allow, plain `.md` with header deny, anything under `.claude/` skipped regardless.

### 5. Documentation in lockstep

CLAUDE.md, LEARNINGS.md (new dated rule at the top of the active buffer), the `cog-author` skill, the `how-to-write-a-cog.cog.md` action cog (Step 2's explanation paragraph), and `mx-watch-index.md` were all updated so that wherever the cog opening header is described, the description matches the new two-way enforcement. The auto-memory entry that previously framed the header as a universal rule was rewritten to make the `.cog.md`-only scope explicit.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 0 (hub commit lands at Step 3 of /step-commit) |
| Files changed | 72 |
| Lines added | +201 |
| Lines removed | −577 |
| Net delta | −376 lines (almost entirely redundant frontmatter) |
| Skill files normalised | 61 |
| Validators tightened | 2 (frontmatter-validator, mx-validator) |
| Hooks tightened | 1 (pre-write-cog-opening, now two-way) |
| Repositories | 1 (hub only — no submodule changes this session) |

---

## Why It Matters

This was hygiene work, but with two business consequences worth naming. First, every skill description that Claude Code reads at session start now matches the spec Anthropic publishes — which means when the Skills feature evolves (signed skills, marketplace listings, sharing across surfaces), the hub's skill library is portable without remediation. Second, the two-way pre-write gate closes the regression vector that produced this whole cleanup: an agent can no longer paste the cog briefing comment into a non-cog file by accident, no matter how often the convention is forgotten.

---

## The Insight

The original rule asked every "authored briefing file" — cogs, skills, commands — to carry the cog opening header. The intent was good (any first-time reader gets oriented). The cost was that we treated the Claude Code surface as if it were a sub-dialect of the MX canon, when it is not. Anthropic publishes a spec; we should obey it on those files and reserve the cog dialect for files we own. The fix isn't fewer rules — it's a rule whose scope matches the file extension. `.cog.md` carries the header, `.md` does not, and the hook enforces both directions.

---

## Decisions Made

- The COG opening header is `.cog.md`-only. Plain `.md` files (skills, commands, READMEs, reports, manuscripts) must not carry it. Enforced both ways.
- `.claude/` is foreign territory to the MX validators. The frontmatter validator and mx-validator both skip it; the cog-opening hook skips it; CLAUDE.md says so.
- `.claude/cogs/*.cog.md` is no longer a valid shape — those files are renamed to plain `.md` (only one existed: `mx-compliance.cog.md`). The `.cog.md` extension is reserved for cogs in the MX canon, not Claude Code surface files that happen to look cog-shaped.

---

## Next Steps

- None this segment. The cleanup is complete and self-enforcing — the new two-way gate prevents the regression from recurring.

---

## Commit Log

| Hash | Description |
|------|-------------|
| _pending_ | Strip MX cog frontmatter from Claude Code surface; add two-way cog-opening gate |

<!--
  Hub commit lands at Step 3 of /step-commit; replace `_pending_` with the
  real hash after the commit, or re-run the table refresh.
-->
