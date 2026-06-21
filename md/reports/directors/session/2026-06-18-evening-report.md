---
title: "Co-Directors Report - Bug Fix, Tests, Link-Depth Reference, and Vivid-Planet Dream"
description: "Fixed overnight audit pipeline, added unit tests, captured link-depth rule, and built a git-based co-creation tagging system for the MX graph."
author: "Tom Cranstoun"
created: 2026-06-18
modified: 2026-06-18
version: "2.0"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-18-evening-report.md
  purpose: "Fixed a Gitea path bug that broke overnight batch audits, added unit tests, and captured the link-depth rule as a permanent cog."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Bug Fix, Tests, and Link-Depth Reference"]

---

# Co-Directors Report - Bug Fix, Tests, Link-Depth Reference, and Vivid-Planet Dream

**Date:** 18 June 2026 - Evening
**Segment:** Evening (since 5pm)

---

## Summary

The evening fixed a configuration bug that caused all 31 overnight batch audits to fail silently, added fourteen unit tests, and captured the link-depth rule as a permanent cog. Later in the evening, a new git-based tagging system called vivid-planet was built: it scans the full commit history, groups files created together in the same commit, and stamps each with a shared identifier (`x-mx-createdHash`) so the MX graph can answer "show me everything built in the same session as this file."

---

## What Was Done

### 1. Gitea Path Bug Fix

The `--full-llm` batch pipeline completed Phase 1 (data collection) correctly for all 31 domains, then failed on every single one with "Phase 1 results directory not found". Root cause: `audit-llm-phase2.js` hardcoded the data path as `mx-outputs/audit/` regardless of configuration. When Gitea is configured - which it is on this machine - Phase 1 writes to the local Gitea clone (`~/.gitea-audit-repos/`), not to `mx-outputs/`. The `--report` mode already handled this correctly with a two-line Gitea conditional; `--full-llm` mode was missing the same logic.

The fix: three import lines and a conditional block mirroring the existing `--report` pattern. All 31 domains' collected data was intact. The batch restarted with `--resume` immediately after the fix was pushed.

### 2. Unit Tests

Fourteen assertions across four test scenarios now guard the path resolution branch:

- Gitea configured and infill exists: script proceeds past the path check
- Gitea configured, infill missing: error message names the Gitea clone path (not the mx-outputs path)
- No Gitea configuration: error message names the mx-outputs path
- Gitea takes priority when both configurations could apply

The test hook is clean: setting `MX_AUDIT_LLM_PROVIDER=anthropic` with no API key causes an early exit after path resolution, so the tests run in under 10 seconds with no LLM calls. Wired into `npm test`.

### 3. Link-Depth Reference Cog

Step-commit earlier this evening surfaced multiple wrong-depth link errors in template files from another session - `../../scripts/cogs/` from a file three levels deep should have been `../../../scripts/cogs/`. The rule is simple but non-obvious, and the same mistake recurs. A new cog, `how-to-write-correct-links.cog.md`, now carries the depth formula (`'../'.repeat(depth) + target-from-root`), the three carrier exceptions (frontmatter paths, mx-site HTML, `canonicalUri`), the repair commands, and Gate 11 as the enforcer. It is in the cog registry and will surface in future sessions when link errors arise.

---

## Why It Matters

The batch audit is the core of the outreach pipeline. All 31 prospect domains were queued for reports this afternoon; a configuration mismatch would have left all 31 without deliverables until manually diagnosed. Catching this the same evening, fixing it with a test, and restarting the batch means the outreach team will still have the full set of reports by morning. The unit tests make this class of path-resolution bug permanently detectable rather than silently survivable.

---

## The Insight

The `--report` mode and the `--full-llm` mode shared the same Gitea conditional pattern, but `--full-llm` was added later and missed it. Any time a new execution path is added to a pipeline that has environment-conditional behaviour, it inherits the conditional by default only if the logic is in a shared helper. Here it was copied inline in `--report` mode, so `--full-llm` did not inherit it. The fix and the test now document this; the longer-term fix is to consolidate path resolution into a shared helper that every mode calls once.

---

### 4. Vivid-Planet Dream - Co-Creation Tagging

The MX graph previously had no way to express that a group of files was created together in the same work session. Knowing that context is useful for traceability, for grouping related work, and for understanding what changed together when something breaks.

The vivid-planet dream fills that gap. It scans the full git commit history for commits that added two or more markdown or cog files in one operation. Each such group of files shares a creation context - they were built together. The system stamps each file with `x-mx-createdHash`, an eight-character commit SHA prefix that links the cohort. Once applied, the graph can return any file's "sisters" - the other files born in the same session.

The system follows the standard dream pattern: a classifier (Ollama, running locally) reads each cohort and categorises the session type (feature addition, documentation batch, refactor, and so on). A separate fixer script applies the hash to the files' metadata. The classifier never re-processes a cohort it has already seen, even after a machine reboot, because its dedup memory is committed to the repository. Running the fixer twice is safe - it skips any file that already carries the field.

The initial scan found 128 qualifying commit cohorts across the full project history, covering 1,791 files.

---

## Why It Matters

The audit pipeline fix means 31 client-ready reports arrive as scheduled. Without the evening's fix, the batch would have been delayed by at least a full day and required manual diagnosis.

The co-creation tagging system adds a dimension to the MX graph that no existing field provides. When a team member asks "what else was built at the same time as this cog?", the graph can now answer without consulting git. For compliance and audit purposes it strengthens the provenance chain: a regulator walking from a deliverable to its creation context gets the full cohort in one query.

---

## The Insight

The dream system's scan targets are not limited to session transcripts. Any deterministic source - git log, a directory of scripts, a set of markdown files - can feed a dream type. The vivid-planet work made this explicit in the architecture documentation, which previously implied all dreams scanned JSONL session files.

---

## Next Steps

- Review batch audit results when the overnight run completes (all 31 domains)
- Consider extracting path resolution from `audit-llm-phase2.js` into a shared helper so future execution modes cannot miss the Gitea conditional
- Run `/dream --dream vivid-planet` (Ollama must be running) to classify the 128 cohorts
- Run `npm run vivid-planet:fix:apply` after reviewing the report to stamp co-created files
