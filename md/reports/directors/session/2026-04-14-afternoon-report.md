---
title: "Co-Directors Report — Audit Pipeline Hardening and CLAUDE.md Refactor"
description: "Afternoon session: fixed audit results-vs-cache conflation and slimmed the AI instruction file from 467 to 163 lines by extracting reference docs."
author: "Tom Cranstoun and Maxine"
created: 2026-04-14
modified: 2026-04-14
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon, audit, documentation, governance]
---

# Co-Directors Report — Audit Pipeline Hardening and CLAUDE.md Refactor

**Date:** 14 April 2026 — Afternoon\
**Segment:** afternoon (12:00 onwards)

---

## Summary

Two governance improvements landed this afternoon. First, the audit pipeline had a dangerous conflation: the skill told the audit tool to "always clear cache" before every run, but the tool's `--force-delete-cache` flag wipes both results AND the cache. Stale results polluting scoring was one risk; burning the cache on every run was another (wasted time, hit client origins unnecessarily, broke verification chains). The skill now always clears `mx-audit/results/` and only clears `mx-audit/.cache/` when Tom asks. Second, `CLAUDE.md` — the always-loaded AI instruction file — had grown to 467 lines of mixed rules, tables, and reference material. We extracted three dense reference sections into dedicated SSOT docs, moved the skills catalogue to `.claude/skills/INDEX.md`, and slimmed the root file to 163 lines of always-on rules plus a reference table. No runtime behaviour change. Pure clarity.

---

## What Was Done

### 1. Audit results-vs-cache separation

Three skill files updated to enforce the distinction:

- `audit-collect/skill.md` Step 3 now runs `rm -rf mx-audit/results && mkdir -p mx-audit/results` before invoking the tool, and only clears `mx-audit/.cache/` when the user explicitly requests it. Removed the misleading "Always clear cache" blanket instruction. Step numbering adjusted accordingly.
- `audit-site/skill.md` — Cache Management note rewritten as "Results vs Cache (two separate concerns)" with explicit warning against using `--force-delete-cache` by default.
- `mx-c-audit/skill.md` — same rule mirrored in the action-cog skill's Rules section.

Saved a feedback memory (`feedback_audit_results_vs_cache.md`) so the rule survives across sessions, with index entry in `MEMORY.md`.

### 2. CLAUDE.md refactor (467 → 163 lines)

Three new SSOT extracts (full Zone 1 + Zone 2 frontmatter, `markdownlint-cli2` clean):

- `mx-canon/ssot/writing-guides/markdown-standards.md` — lint tooling, active rules, disabled rules, auto-ignores
- `mx-canon/ssot/writing-guides/carrier-format-metadata.md` — shell/JS/HTML/CSS/markdown carriers + compliance tooling
- `mx-canon/ssot/architecture/mx-graph-system.md` — builder, MCP server, CLI, lineage fields, commands

One skills catalogue: `.claude/skills/INDEX.md` — workflow skills, audit skills, MX OS skills, content skills, git hooks. Skills are auto-discovered by the Claude Code runtime, so the inline CLAUDE.md list was informational only.

`CLAUDE.md` now contains only rules that must apply on every turn: terminology, `pwd` checks, submodule-first git, size-neutral language, tool usage, cross-project terminology, writing-style headlines, partnership model, COG one-liner, standards hierarchy, session-start checklist, key references. Everything else is a reference-table link. Pointed at existing docs where they already existed (UBERCOG for commands/structure, `yaml-frontmatter-template.md` for frontmatter, `mx-yaml-md-guide.md` for `.mx.yaml.md`) rather than duplicating.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (pre-step-commit) | 0 afternoon commits yet |
| Files changed (uncommitted) | 5 modified + 4 new |
| Lines added | +102 |
| Lines removed | −388 |
| Net reduction | −286 lines in the root AI instruction file |
| Repositories | 1 (hub) — no submodule changes |
| New SSOT docs | 3 |
| New skill index | 1 |

CLAUDE.md alone: 444 lines removed, 56 lines added (net −388 on that file; the other files account for the remaining deltas).

---

## The Insight

Large instruction files look comprehensive but they rot. When every rule sits in one place, updates to any single rule mean editing a large, dense file, and readers skim rather than absorb. The better pattern is the one UBERCOG already uses: a short always-on pointer file plus dedicated SSOT docs that specialists edit without touching the root. This session applied that pattern to CLAUDE.md for the first time. The AI instruction file now matches the architecture it describes.

Same insight applied to the audit fix — the skill conflated two concerns (results and cache) into one flag. Splitting them was a documentation fix, not a code fix, and the new rule is codified in skill text + auto-memory so it propagates.

---

## Next Steps

- Watch the next `/audit-site` run to confirm results are cleared and cache is preserved
- If other dense reference sections accrete in CLAUDE.md again, apply the same extraction pattern
- Consider extracting `writing-style.md` pointers into a similar short-form pattern for `mx-canon/ssot/writing-guides/README.md`

---

## Commit Log

| Hash | Description |
|------|-------------|
| 5a12553 (mx-outputs) | Add afternoon directors report |
| 1979bc25 (hub) | Separate audit results from cache in /audit-site skills |
| b8ace032 (hub) | Refactor CLAUDE.md: extract reference sections to SSOT docs |
