---
title: "Co-Directors Report - Housekeeping, Sitemap Optimisation, and Source Consolidation"
description: "Morning session: housekeeping, robots.txt-driven sitemap scripts, removal of duplicate agent-friendly-starter-kit from mx-site"
author: "Tom Cranstoun"
created: 2026-06-14
modified: 2026-06-14
version: "1.3"

type: report
tags: [directors-report, session, morning]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-14-morning-report.md
  purpose: "Morning session: pulled upstream changes, synced submodules, cleared stale branches"
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Repo Housekeeping and Branch Cleanup"]

---

# Co-Directors Report - Housekeeping, Sitemap Optimisation, and Source Consolidation

**Date:** 14 June 2026 - Morning
**Segment:** Morning (since midnight)

---

## Summary

A full morning across five areas. Early work covered upstream pulls, branch cleanup, field cleanup, and a crawl-safety fix on corrupted draft HTML files. The second half introduced a meaningful infrastructure improvement: the sitemap generator and checker now derive exclusions from `robots.txt` at runtime rather than opening every HTML file to read a meta tag - saving a file read per excluded page and making the exclusion list self-maintaining. A content-duplication audit of the agent-friendly-starter-kit found a redundant published copy on mx-site; manuscripts only ever pointed to the manuscript-bundled copy, so the mx-site version was removed and the robots.txt exception that had been added for it was reverted.

---

## What Was Done

### 1. Upstream Pull, Submodule Sync, and Branch Cleanup

Pulled `origin/main` (PR #33: repo-audit PRD updates, skill-safety-scan spec, mx-validator crash fix). All submodules synced; no detached HEADs. Cleared six stale local branches and pruned one remote tracking ref.

### 2. Stale Field Cleanup

Removed kebab-case field duplicates (`content-type`, `x-mx-content-state`, `x-mx-ai-assistance`, `x-mx-ai-editable`) left in the field dictionary after the canonical camelCase forms were introduced. Corresponding REMINDERS and CHANGELOG were tidied.

### 3. Draft Blog HTML Fix (Crawl Safety)

Investigated a report of draft HTML files marked as published. Found four files in `mx-outputs/mx-site/blog/drafts/` that had been partially promoted: `blog-publish-retire.cjs` had flipped their `mx:status`, `robots`, and canonical URL to published values, but the files were never moved out of `drafts/`. No published copy existed at those live canonical URLs.

- Three posts reverted to clean draft state: `noindex/nofollow`, `mx:status=draft`, canonical pointing back to the `blog/drafts/` URL.
- `building-reginald-in-one-session.html` deleted: no source markdown, no published destination.

Left unchecked, crawlers would have indexed these corrupted drafts pointing at non-existent pages.

---

### 4. Sitemap Scripts: robots.txt-Driven Exclusions

Both `generate-sitemap.cjs` and `check-sitemap-coverage.js` previously opened every HTML file and read 8KB to check for a `<meta robots noindex>` tag. Both scripts now parse `robots.txt` once at startup instead, applying standard Allow/Disallow precedence (longest rule wins) to skip excluded files without opening them. The per-file `isNoIndex()` check still runs for files not covered by any robots.txt rule. A new `check-web-assets-changed.cjs` script was also added for the step-commit Cloudflare cache gate, using mtime-based detection rather than git diff.

### 5. Agent-Friendly Starter Kit: Single Source

An audit of the agent-friendly-starter-kit found two copies: `mx-code-examples/` (manuscript-bundled, pointed to by all chapters and appendices) and `mx-outputs/mx-site/books/appendices/` (published to mx-site, unreferenced by any manuscript). The mx-site copy was removed, the robots.txt `Allow` exception added for it was reverted, and the sitemap and `llms-full.txt` corpus were regenerated.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this session (hub + submodules) | 30+ |
| Files changed | 38 |
| Lines added | +839 |
| Lines removed | -153 |
| Duplicate starter kit files removed | 11 |
| File reads eliminated per sitemap run | ~141 (disallowed paths) |
| Stale branches deleted | 6 |

---

### 6. Dream Skill - Ollama-Powered Session Mistake Miner

Tom observed repeated Claude mistakes by watching tool calls in real time and asked for an automated equivalent. Dream is a new local skill that scans this project's Claude Code session JSONL transcripts, classifies tool-call errors and structural bad patterns (such as `cd` to a relative path or `Edit` without a preceding `Read`) using a local Ollama model, and commits a growing findings catalogue to `datalake/dream-files/`.

Key properties: fully off-device (no transcript content leaves the machine), interruptable (every write is synchronous `appendFileSync`; ctrl-C is safe), incremental (processed files are checkpointed, new sessions are picked up on the next run), deduplicated by normalised hash (timestamps, UUIDs, paths stripped before hashing - the same logical mistake from two sessions produces one classification call).

Deliverables this session:

- `scripts/dream.cjs` - main script with Phase 1 (hard errors + retries) and Phase 2 (cd-relative, Edit-without-Read) extraction
- `.claude/skills/dream/skill.md` - Claude Code skill routing `/dream`
- `scripts/cogs/dream.cog.md` - action cog with security scope, `refersTo` links, runbook
- `datalake/knowledge/system/dream-architecture.md` - full architecture doc with data-flow diagram, normalisation table, LLM contract
- `datalake/dream-files/` - output directory with `.mx.yaml.md` and `.gitignore`
- `npm run dream` script added to `package.json`

Dry-run confirmed: 188 session files found, candidates extracted correctly.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this session (hub + submodules) | 30+ |
| Session JSONL files Dream can process | 188 |
| Dream skill files created | 6 |
| Files changed (full morning) | 43+ |

---

## Next Steps

- Three reverted draft posts (accessibility-is-machine-readability, announcing-the-gathering, ai-native) remain in `blog/drafts/` and can be promoted when ready.
- Agent-friendly-starter-kit content review flagged it predates MX frontmatter, COGs, and provenance patterns - an `mx/` example directory would close that gap. Deferred.
- Dream completed its first full run: 106 findings across session transcripts committed to `datalake/dream-files/`. Run `npm run dream` periodically (with Ollama running) to pick up new sessions.
