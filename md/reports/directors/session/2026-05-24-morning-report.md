---
title: "Co-Directors Report — Audit Driver Hardened: Watch-and-Kill Pattern + Filename-Collision Fix After First Wall-Clock Test"
description: "First wall-clock test of npm run audit:full against a real host (typo3.com, 5 pages) surfaced two production-blocking bugs the dispatcher-only verification could not catch. Both fixed in the same morning: the headless Claude Code session for /audit-report now terminates cleanly once the report markdown stabilises (was hanging 24+ minutes after completing its work), and the chained Phase 3 dispatcher now reads the actual report filename from a result-file sidecar rather than pre-computing a path the skill does not honour. The tool now runs end-to-end on a single npm command without operator intervention, with the bug-evidence partial deliverable preserved in mx-outputs as a reference artefact."
author: "Tom Cranstoun"
created: 2026-05-24
modified: 2026-05-24
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-24-morning-report.md
  purpose: "First wall-clock test of npm run audit:full against a real host (typo3.com, 5 pages) surfaced two production-blocking bugs the dispatcher-only verification could not catch. Both fixed in the same morning: the headless Claude Code session for /audit-report now terminates cleanly once the report markdown stabilises (was hanging 24+ minutes after completing its work), and the chained Phase 3 dispatcher now reads the actual report filename from a result-file sidecar rather than pre-computing a path the skill does not honour. The tool now runs end-to-end on a single npm command without operator intervention, with the bug-evidence partial deliverable preserved in mx-outputs as a reference artefact."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit Driver Hardened: Watch-and-Kill Pattern + Filename-Collision Fix After First Wall-Clock Test"]
---

# Co-Directors Report — Audit Driver Hardened

**Date:** 24 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

The new `npm run audit:full` command shipped yesterday evening as the one-command path through the higher-quality audit. This morning's first wall-clock test against typo3.com (5 pages) found two production-blocking bugs that the dispatcher-only verification could not have caught: the headless Claude Code session for `/audit-report` writes the report markdown then hangs idle for 25+ minutes before exiting, and the report filename the skill chooses differs from the deterministic pipeline's pre-computed path. Both fixed before the morning closed. The fix pattern is the same in both: stop pre-computing and start observing — poll the outreach directory for a new `*-report.md`, wait for size+mtime stability, then SIGTERM the headless session, and pass the discovered filename downstream via a `.phase2-result.json` sidecar rather than guessing it. Tool readiness for client audits stays on track without external commitment having been at risk.

---

## What Was Done

### 1. Bugs surfaced by the first wall-clock test, both now fixed

The typo3.com smoke-test exposed two distinct failure modes the unit-tested dispatcher could not have predicted, because both come from interactions between the new driver and the existing `/audit-report` skill's behaviour.

**Bug A — headless `claude -p` hang.** The driver spawned a `claude -p '/audit-report ...'` subprocess and waited for it to exit (`spawnSync`). The headless session produced the report markdown at the 23-minute mark, then sat idle for another 24+ minutes before being killed manually. The reason is opaque from the outside — could be a skill-internal loop continuing past the report write, a stdout buffer that never flushed an exit signal, a stdin wait for prompts the headless session never gets — but the practical effect was the parent pipeline blocked indefinitely on a job that had already completed its useful work. Fix: replace `spawnSync` with async `spawn`, stream stdio live to the operator, and start a polling loop. Every 5 seconds the loop checks the outreach directory for a new `*-report.md`. Once one appears and its size + mtime stay unchanged for 15 seconds (the stability check rules out catching the file mid-write), the loop sends SIGTERM to the headless session — SIGKILL 5 seconds later if it still has not exited. A 30-minute absolute hard cap acts as backstop. The pattern is: stop waiting for a clean exit that may never come; declare completion when the visible artefact lands.

**Bug B — filename-collision.** The pipeline pre-computed the report path as `<outreachDir>/<client>-report.md` where `client = hostname.replace(/\./g, '-')` (so `typo3.com` becomes `typo3-com`). But the `/audit-report` skill internally derives its own client slug differently — it appears to take the first hostname label, producing `typo3-report.md`. Two filenames for the same artefact, neither aware of the other. The pre-computed Phase 3 dispatch then looked for `typo3-com-report.md` (which never existed) and bailed, while a separate manual gates invocation against `typo3-report.md` (which did exist) ran the verifier and LLM-judgment in parallel. The provenance sidecars split across two filenames as well, one for the driver's pre-write `recordStep` calls and one for the skill's own `recordLlmCall` writes. Fix: the driver no longer trusts its own path computation. It snapshots the existing `*-report.md` files in the outreach directory before spawning the headless session, watches for any NEW one to land, and uses that path as the canonical report path everywhere downstream. The two provenance files are migrated into the canonical name (renamed if the destination is empty, merged in chronological order if both exist). The driver writes a `.phase2-result.json` next to the report carrying the discovered path; the parent pipeline reads that file first before falling back to a directory glob, before falling back to the pre-computed path. Three layers of defence against the same drift.

The shared lesson: when a contract between two components is implicit (one computes, one assumes), the first time real data exercises the assumption it breaks. Both fixes are the same architectural move — observe what landed rather than predict what should land.

### 2. Documentation propagated into reach

The onboarding doc `getting-started.cog.md` was on version 1.2 from 12 May, missing every audit-suite command. Bumped to 1.3 with: `/audit-site` added to the try-a-skill list; a new "Run an audit from the shell" subsection surfacing `npm run audit:full` and `npm run audit:provenance` as the two operator-facing one-liners; the dead `mx-vision/` row dropped from the canon-folder table (folder does not exist on disk); and the formerly-named "MX Reginald Ltd" Deep Context section rewritten as "REGINALD and CogNovaMX" to match the current corporate structure — REGINALD is the proprietary registry implementation Layer 5, CogNovaMX is a trading name of DDT Ltd, The Gathering Administration Ltd is the separate entity owning Layers 1-4. Speculative claims that were not in the canon (MX Holdings entity, Scott McGregor cofounder, £250k-£1.1M Scottish Government grant target, fixed Protocols publish date) were removed because the current `ABOUT-TOM.md` does not support them.

Two new REMINDERS items also landed: one to move the screenshot dump folder `ss/` from the hub root into the per-host `audit-data/domains/<hostSlug>/cache/screenshots/` tree so multi-host audits do not collide their PNG outputs, and one to add a lockfile to `audit-data/domains/<hostSlug>/` so two concurrent audits of the same host cannot clobber each other's partial work.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (this segment) | 2 (mx-outputs) + 2 pending (hub code + docs) |
| Repositories | 2 (hub + mx-outputs) |
| Production-blocking bugs fixed | 2 |
| Lines added (mx-outputs typo3 evidence) | +3497 |
| Hub files changed (working tree) | 7 |
| Hub lines added | +307 |
| Hub lines removed | −69 |
| Hung processes killed | 6 (parent + driver + claude-p + gates + repair-report-final + monitor task) |
| Wall-clock cost of the bug-exposing test | ~55 minutes (typo3.com 5-page audit, ran from 08:08 to manual kill) |

---

## Why It Matters

The audit suite is the most directly commercial tool in the repo: every prospect audit it produces is a piece of business development. The `npm run audit:full` command was meant to remove the operator-in-the-loop friction so the same workflow that produces an internal smoke-test produces a client deliverable. Shipping that command with the two bugs from this morning would have meant every client audit either hung silently or wrote its provenance to a path the gates could not find — neither failure mode is graceful in front of a prospect. Catching both before any external use means the tool is now what it was advertised as. The cost was about an hour of API credit and one wall-clock test against a public site we have no relationship with.

The watch-and-kill pattern is also worth noting separately. Headless Claude Code is a useful pattern for any sub-agent invocation where the work is well-bounded but the session does not cleanly close. We will reach for it again. Treating the visible artefact as the completion signal — not the process exit — is now a documented practice with a working reference implementation.

---

## Decisions Made

- The first typo3.com audit run that surfaced the bugs stays in git history as bug evidence rather than being discarded — committed to `mx-outputs/audit/2026-05-24/typo3.com/` with a commit message naming both bugs and the fix that follows. Future debugging of similar headless-session issues has a real artefact to reference.
- The `ABOUT-TOM-CONFIDENTIAL.md` pattern (gitignored sibling carrying the confidential layer) was extended to a second file this morning: `The Possible Future.md` (business-plan strategy companion) is now gitignored at both the hub level and the mx-outputs level. Same convention, same reason.

---

## Next Steps

- Re-test `npm run audit:full -- https://typo3.com --pages 5` end-to-end on the fixed driver. Confirm: (a) `claude -p` exits within 30 seconds of the report.md going stable; (b) `.phase2-result.json` names the actual report path; (c) Phase 3 gates run against that path automatically without manual intervention; (d) provenance sidecar carries the merged Phase 2 SDK + audit-report + Phase 3 gate steps in chronological order.
- Move `ss/` screenshot dump from hub root into `audit-data/domains/<hostSlug>/cache/screenshots/` so multi-host audits do not collide.
- Add a lockfile at `audit-data/domains/<hostSlug>/.lock` so two concurrent audits of the same host cannot clobber each other's results.

---

## What Changed About Me

The plan-mode pushback rule from yesterday evening's LEARNINGS got its first real test this morning. The wall-clock test of `audit:full` was exactly the implementation-reality check the rule is meant to trigger; when the hang and the filename collision both surfaced, the response was to stop, diagnose, and rebuild the headless-skill runner around what was actually observable rather than what the plan had assumed. Two bugs found and fixed in one morning at the cost of an hour of API credit feels like the right ratio. The pattern to retain: when a new component first meets real data, expect at least one assumption to break; budget for the fix in the same session as the test, not in a follow-up.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 4950241 (mx-outputs) | Gitignore "The Possible Future" PDF + sidecars |
| 206115a (mx-outputs) | Bug evidence: typo3.com smoke-test partial deliverables (pre-round-3) |
| _pending_ (hub) | Audit driver round-3 fixes: watch-and-kill on report.md stability + discovered-filename migration + .phase2-result.json sidecar |
| _pending_ (hub) | Docs + REMINDERS + getting-started.cog.md v1.3 update for round-3 fixes |
