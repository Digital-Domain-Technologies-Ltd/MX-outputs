---
title: "Co-Directors Report - Step-Commit Workflow Hardening"
description: "Morning session tightening the step-commit workflow: concurrent-session safety, secret scanning, and repo-integrity gates."
author: "Tom Cranstoun"
created: 2026-06-17
modified: 2026-06-17
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-17-morning-report.md
  purpose: "Morning session tightening the step-commit workflow: concurrent-session safety, secret scanning, and repo-integrity gates."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Step-Commit Workflow Hardening"]
---

# Co-Directors Report - Step-Commit Workflow Hardening

**Date:** 17 June 2026 - Morning
**Segment:** Morning (since midnight)

---

## Summary

This session focused entirely on hardening the step-commit workflow — the process every Claude session uses to close its work and push to the shared repository. The workflow now handles concurrent sessions safely, enforces a deterministic secret scan before every push, and guards against two recurring repo-integrity risks: symlinks and stale git hooks. These changes reduce the risk of accidental data loss, credential exposure, and broken automation when multiple sessions run in parallel.

---

## What Was Done

### 1. Concurrent-Session Safety

The step-commit workflow previously encouraged investigation of changes left by other sessions. This was expensive, error-prone, and led to accidental commits of other sessions' in-flight work. The rule is now clear: stage only files this session authored, skip everything else, list what was skipped in the summary. Quick mode — a lighter path that deferred the push — was also removed; there is now one mode that always commits, documents, and pushes.

### 2. Pre-Commit Staged-Set Verification

A recurring failure pattern was committing files left staged by another session. The workflow now requires a mandatory inspection of the staged set before every commit, with explicit unstaging of anything not authored by this session. The pre-commit hook warns on every run; the rule is now to act on that warning before the commit, not after.

### 3. Deterministic Secret Scan Gate

A new script (`scripts/check-secret-scan.cjs`) replaces the inline `git grep` pattern that was written into the skill. The script is the single source of truth for token patterns (Cloudflare, OpenAI, GitHub, Anthropic, long Bearer literals), runs as `npm run secret:check`, and is wired into `npm test` and the step-commit compliance gate. It correctly surfaces four existing live-token findings, all already tracked in the active 🔴 rotation reminder.

### 4. Symlink and Hook-Freshness Gates

Two further blocking checks were added to the pre-push gate: a symlink zero-count assertion (the tracked tree must contain no symlinks, which go stale across machines), and a hook-freshness check that reinstalls git hooks automatically when a hook source file changed in this session's commits.

### 5. Root-File Hygiene Gate (Gate 30)

A deterministic gate now ensures only known-legitimate files exist directly at the repository root. An explicit allowlist in `scripts/check-root-files.cjs` defines what belongs there; any file outside it is flagged at push time. The gate also checks link integrity in every root markdown file. On a thin clone (submodules not initialised — typical in CI), links into absent submodule paths are downgraded to warnings rather than hard failures, so contributors on fresh clones are not blocked. Gitignored audit-delivery paths (which live in Gitea and are always absent from disk) are suppressed unconditionally.

### 6. Contact Bio Cogs

The ABOUT-TOM.md and ABOUT-SALVA.md flat files at root were replaced with structured cog files under `mx-crm/contacts/`. Tom now has two cogs: an internal/Maxine bio (`tom-cranstoun-bio.cog.md`) and a prospect-facing advisory-register bio (`tom-cranstoun-public.cog.md`). Salva, Scott McGregor, and Dogu Abaris each have their own bio cog in the same directory. `CLAUDE.md`, `repo-manifest.json`, and `project-context.md` were updated to point to the new paths.

---

## Why It Matters

The step-commit workflow is the quality gate every session passes through before code reaches the shared branch. Weaknesses in it directly translate into repo damage under concurrent use — which is the normal operating condition for this project. Hardening it reduces the overhead of recovery work and keeps the shared branch trustworthy.

---

## The Insight

The pre-commit hook already printed a staged-set warning. The failure was acting on it after the commit rather than before. The fix was not a new mechanism but a clearer rule: inspect first, commit second. The same principle applies to any gate output — read it before proceeding, not after.

---

## What Changed About Me

The correct response to staged files not authored by this session is now unambiguous: unstage them, list them in the summary, move on. No investigation, no restoration, no committing "just to be safe." Concurrent sessions are the normal state; their in-flight work is not this session's responsibility.

---

## Next Steps

- Rotate the Cloudflare cache-purge token and replace hardcoded literals with env-var references across all four affected files (🔴 REMINDERS item already active)
- Fix the promote path-doubling bug for sources in `blog/drafts/` (🟡 REMINDERS item)
- Publish Tom's public bio cog once `npm run promote` is wired for the profiles path
