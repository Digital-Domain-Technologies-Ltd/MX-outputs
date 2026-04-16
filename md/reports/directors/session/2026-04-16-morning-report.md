---
title: "Co-Directors Report -- TG-Community Integration"
description: "Mounted The Gathering community repos as read-only submodules with enforcement hooks"
author: "Tom Cranstoun and Maxine"
created: 2026-04-16
modified: 2026-04-16
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
---

# Co-Directors Report -- TG-Community Integration

**Date:** 16 April 2026 -- Morning
**Segment:** morning (00:00--12:00)

---

## Summary

This session integrated The Gathering's community repositories into MX-Hub as read-only submodules under `tg-community/`. A PreToolUse hook now enforces the read-only constraint, preventing accidental edits to upstream TG-Community code. All three root-level documentation files (CLAUDE.md, README.md, UBERCOG.cog.md) were updated to reflect the new directory.

---

## What Was Done

### 1. TG-Community Submodule Integration

Mounted all four TG-Community GitHub organisation repos as submodules under `tg-community/`:

- `stream-front-end` -- The Gathering Stream frontend
- `stream-back-end` -- The Gathering Stream backend API
- `stream-draft-template` -- Stream draft publication template
- `website` -- The Gathering website

### 2. Read-Only Governance

- Created a PreToolUse hook in project `settings.json` that blocks Edit and Write operations targeting `tg-community/`
- Saved a persistent memory record so the read-only constraint is recalled in future sessions
- Documented the constraint in CLAUDE.md under Critical Rules

### 3. Documentation Updates

Updated all three root-level docs to reflect the new `tg-community/` directory:

- **CLAUDE.md** -- added "Read-only directories" rule
- **README.md** -- added to repo table, structure tree, and submodules table
- **UBERCOG.cog.md** -- added to Infrastructure routing table

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 (+ pending hub commit) |
| Files changed | 5 |
| Lines added | +16 |
| Lines removed | -0 |
| Repositories | 1 (hub) |

---

## Next Steps

- Wire TG-Community repos into MX Graph so their metadata is queryable
- Consider adding `.mx.yaml.md` folder metadata for `tg-community/`

---

## Commit Log

| Hash | Description |
|------|-------------|
| 54413b63 | Add TG-Community repos as submodules under tg-community/ |
| (pending) | Update CLAUDE.md, README.md, UBERCOG.cog.md for tg-community |
