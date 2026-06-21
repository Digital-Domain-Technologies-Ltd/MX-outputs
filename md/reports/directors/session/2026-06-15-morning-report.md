---
title: "Co-Directors Report - Dream Architecture: COG-Driven Mistake Mining"
description: "Dream skill rebuilt from hardcoded dual-lens to COG-governed deterministic extractors across nine content types."
author: "Tom Cranstoun"
created: 2026-06-15
modified: 2026-06-15
version: "1.0"

type: report
tags: [directors-report, session, morning]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-15-morning-report.md
  purpose: "Dream skill rebuilt from hardcoded dual-lens to COG-governed deterministic extractors across nine content types."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Dream Architecture: COG-Driven Mistake Mining"]

---

# Co-Directors Report - Dream Architecture: COG-Driven Mistake Mining

**Date:** 15 June 2026 - Morning
**Segment:** Morning (since midnight)

---

## Summary

The Dream skill - the system that mines Claude Code sessions for recurring mistakes - was rebuilt from a hardcoded two-lens scanner into a COG-driven pipeline where each scan type is defined by its own cog file and runs a deterministic extractor. The system now covers nine content types: session errors, session patterns, blog truth-checking, script code quality, library opportunities, dream cog health, dream cog suggestions, markdown link patterns, and claude-tree consistency. A dry run confirmed all nine cogs discovered and extracted candidates correctly.

---

## What Was Done

### 1. Dream Architecture Rewrite

The original `scripts/dream.cjs` hardcoded both its extraction lenses and wrote to a single unsuffixed output file. The rewrite changes three things. First, the script discovers dream cogs from `datalake/dream-files/cogs/` at runtime rather than hardcoding the scan types. Second, each scan target has a deterministic extractor - specific pattern-matching code that finds concrete candidates before any Ollama call is made. Third, every dream type writes to its own prefixed output files (`<prefix>-findings.jsonl`, `<prefix>-exclusions.jsonl`, `<prefix>-report.md`), so the results from nine different scan types do not mix.

The architecture matches the principle that governs everything else in the repo: deterministic extraction first, Ollama only for classification of what the extractor found. Passing whole files to a language model and asking it to find problems is not deterministic and produces noisy, unverifiable results. Extracting specific candidates first - and hashing them for dedup - means the same file produces the same candidates on every run, and Ollama only sees genuine novel findings.

### 2. Deterministic Extractors per Scan Target

Nine extractors were built. The `session-jsonl` extractors were already in place; the new work covered the remaining targets. The blog truth extractor finds sentences containing year references, "currently", "recently", and version numbers - the class of time-sensitive claims most likely to go stale. The scripts extractors find empty catch blocks, unresolved TODOs, non-deterministic `new Date()` calls, and patterns that duplicate helpers already in `scripts/lib/`. The dream cog health extractor checks required frontmatter fields and body length. The link-patterns extractor finds absolute-path links in markdown that should be relative. The claude-tree consistency extractor checks skill files for required sections and hooks for fragile relative `cd` calls.

### 3. Skill File and Cleanup

The skill file at `.claude/skills/dream/skill.md` was rewritten to document the new architecture, including the distinction between adding a new lens on an existing scan target (cog only, no code change) versus adding a new scan target (cog plus a dispatch-table entry). Three legacy unprefixed output files were removed. A dry run across all nine cogs completed without errors.

---

## The Insight

The Dream system now uses the COG pattern to govern its own operation. Each dream type is a cog that declares what to scan and how to scan it. This is the same pattern MX uses everywhere else in the repo. A system that governs its own extension through the same mechanism it governs everything else is easier to audit, easier to hand to a new operator, and closer to the self-describing ideal the repository holds.

---

## Decisions Made

- Each scan target requires a deterministic extractor in code - the cog declares intent, the extractor enforces it. New scan targets require both a cog and a code change; new lenses on existing scan targets are cog-only.
- Legacy unprefixed output files deleted rather than migrated - they were from a single hardcoded run and do not represent the new per-type structure.

---

## Next Steps

- Run Dream for real (not dry-run) after confirming Ollama is serving; the blog truth extractor found 474 candidates that have not yet been classified.
- Promote the Fable 5 blog post from Zone 2 to Zone 3 once Tom has reviewed.
- Review LPC and Los G sites.
- Test Gitea end-to-end.
