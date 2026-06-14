---
title: "Co-Directors Report - Gate 25 Data-Loss Fix"
description: "Fixed a Gate 25 bug that was destroying uncommitted edits in concurrent sessions by wiping any dirty file its restore loop touched, even files it had no business touching."
author: "Tom Cranstoun"
created: 2026-06-14
modified: 2026-06-14
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-14-evening-report.md
  purpose: "Fixed a Gate 25 bug that was destroying uncommitted edits in concurrent sessions by wiping any dirty file its restore loop touched."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Gate 25 Data-Loss Fix"]
---

# Co-Directors Report - Gate 25 Data-Loss Fix

**Date:** 14 June 2026 - Evening
**Segment:** Evening (since 5pm)

---

## Summary

A single focused fix landed this evening: Gate 25 - the pre-push tree-cleanliness check - contained a restore loop that would silently wipe any dirty file it encountered, including files edited by concurrent sessions that had nothing to do with generated indexes. The confirmed data-loss scenario was from 12 June when REMINDERS.md and CHANGELOG.md edits were destroyed mid-gate-chain. Two guards were added to the restore loop: skip files that were dirty before generators ran, and skip files not listed as known generator outputs.

---

## What Was Done

### Gate 25 restore loop hardened against data loss

`scripts/check-tree-clean.cjs` runs generators to check the tree is clean, then restores any files the generators touched to their pre-run state. The restore loop previously used a simple `git checkout -- <file>` on anything that showed as modified after the generators ran. That meant any file edited by another concurrent session - or any file not produced by a generator - could be wiped silently.

Two guards now protect every restore:

1. **Pre-run dirty check** - files already dirty before generators ran are never restored. A snapshot of dirty files is taken at the start; anything in that snapshot is skipped by the restorer.
2. **Known-outputs check** - only files listed in `scripts/lib/generated-indexes.cjs` as generator outputs are eligible for restore. Any other file the restorer would have touched is left alone.

The result: Gate 25 can only restore files that (a) were clean before the gate ran and (b) are declared outputs of a known generator. Everything else is untouched.

---

## Why It Matters

The repository runs multiple concurrent Claude sessions. Any gate that can silently destroy another session's uncommitted work is a trust risk: it makes the tooling adversarial rather than protective. The pre-existing behaviour was a latent foot-gun that had already fired once (12 June). The fix is narrow and structural - it does not change what the gate checks, only which files the restore loop is permitted to touch. That narrowing is the safe default; it could only have been wrong to allow the wider behaviour.

---

## Decisions Made

- Restore eligibility requires both guards simultaneously. A file must be clean at gate-start AND listed in `generated-indexes.cjs`. Either guard alone would still allow edge-case data loss.

---

## Next Steps

- Monitor Gate 25 across the next few push cycles to confirm the guards hold under real concurrent-session load
