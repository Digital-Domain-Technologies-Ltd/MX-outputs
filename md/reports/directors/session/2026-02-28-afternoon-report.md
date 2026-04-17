---
title: "Co-Directors Report — Company Rename: Cog-Nova-MX Ltd"
created: "2026-02-28"
version: "1.0"
author: Tom Cranstoun and Maxine

mx:
  x-mx-segment: "afternoon"
  audience: stakeholders
  confidential: true
---

# Company Rename: Cog-Nova-MX Ltd

**28 February 2026 — Afternoon Session**

## Summary

The company has been renamed from MX Technologies Ltd to **Cog-Nova-MX Ltd**. This resolves a naming clash with MX Technologies, Inc. (mx.com), a $1.9 billion fintech company. The clash created genuine confusion risk — investors, partners, and search engines could conflate the two organisations. The new name is distinctive, searchable, and carries the MX identity forward.

The rename was executed comprehensively across all five repositories in a single afternoon. Every reference to "MX Technologies Ltd", "MX Technologies UK Ltd", and "MX Technologies" was replaced, including historical documents. Six directories named `mx-technologies` were renamed to `cog-nova-mx`. The Reginald COG registry was regenerated under the new `cog-nova-mx` namespace.

Before the rename, REMINDERS.md was triaged to close out the London CMS Experts event (which went well) and retarget the Reginald demo for Frankfurt. The afternoon then focused entirely on the rename.

## By the Numbers

| Metric | Value |
| --- | --- |
| Files updated (company name) | 464 across 5 repos |
| Directories renamed | 6 (`mx-technologies` → `cog-nova-mx`) |
| Files updated (directory paths) | 208 |
| Reginald registry | 155 cogs regenerated, 314 static files |
| Commits (main repo) | 8 |
| Commits (submodules) | 9 across 4 submodules |
| Total commits today | 12 main + 11 submodules = 23 |
| Repos affected | 5 (main, allaboutv2, mx-crm, mx-outputs, mx-collaboration) |

## What Changed

### Company Name Replacement

Bulk sed replacement across all five repositories, with a competitor protection pattern:

1. Protected "MX Technologies, Inc." references with a placeholder
2. "MX Technologies UK Ltd" → "Cog-Nova-MX Ltd"
3. "MX Technologies Ltd" → "Cog-Nova-MX Ltd"
4. "MX Technologies" → "Cog-Nova-MX"
5. Restored competitor placeholder

Files with spaces in directory names (e.g., "MX Coming Soon", "Apfelwein Wagner") required special handling — `xargs` splits on spaces, so a `while IFS= read -r` loop was used instead.

### Directory Renames

Six directories renamed using `git mv`:

| Old Path | New Path |
| --- | --- |
| `allaboutv2/mx/mx-technologies-website/` | `cog-nova-mx-website/` |
| `allaboutv2/mx/demo/mx-technologies/` | `demo/cog-nova-mx/` |
| `allaboutv2/reginald/cogs/mx-technologies/` | `cogs/cog-nova-mx/` |
| `mx-crm/mx-technologies/` | `cog-nova-mx/` |
| `datalake/.../demo/mx-technologies/` | `demo/cog-nova-mx/` |
| `datalake/assets/images/svg/demo-mx-technologies/` | `demo-cog-nova-mx/` |

### Registry and Static Site

- `cog:sync` regenerated `mx-reginald/index.json` (155 cogs, 0 errors)
- `reginald:generate` rebuilt the allaboutv2 static site (314 files) under the `cog-nova-mx` namespace
- Old `mx-technologies` namespace directory removed entirely

### REMINDERS Triage

- London CMS Experts marked complete ("went well")
- Reginald demo retargeted from 20 Feb to Frankfurt (12 May)
- Cog-Nova-MX naming decision recorded in "Decisions Already Made"
- Contact follow-ups from London added to "This Week"

## Decision Record

**Company name: Cog-Nova-MX Ltd** — formerly MX Technologies Ltd. Avoids naming clash with MX Technologies, Inc. (mx.com, $1.9B fintech). Decided 28 February 2026.

This decision is recorded in REMINDERS.md under "Decisions Already Made" and in MEMORY.md for session continuity.

## What This Means for Stakeholders

All corporate documents, pitches, contracts, and website references now use the Cog-Nova-MX name. The rename is complete — there is no "phase 2". Companies House filing is a separate administrative step outside this scope.

The Reginald COG registry now publishes under the `cog-nova-mx` namespace. Any external references to the old `mx-technologies` namespace in COG URLs will need updating when encountered.

## Commit Log

| Repository | Hash | Description |
| --- | --- | --- |
| main repo | `675a087` | chore: triage REMINDERS after London CMS Experts |
| main repo | `75e4504` | chore: rename MX Technologies to Cog-Nova-MX across entire repo |
| main repo | `a005502` | chore: mark Cog-Nova-MX rename as complete in REMINDERS |
| main repo | `57e184d` | chore: rename mx-technologies directories to cog-nova-mx |
| main repo | `8d32dff` | chore: update mx-outputs submodule |
| main repo | `ef61042` | chore: regenerate registry and update submodule pointers |
| main repo | `b451920` | chore: update changelog after Cog-Nova-MX rename |
| allaboutv2 | `9298fa04` | chore: rename MX Technologies to Cog-Nova-MX across all files |
| allaboutv2 | `9fb42ef2` | chore: rename mx-technologies directories to cog-nova-mx |
| allaboutv2 | `3e0d5b49` | chore: regenerate Reginald registry with cog-nova-mx namespace |
| mx-crm | `5173c23` | chore: rename MX Technologies to Cog-Nova-MX across all files |
| mx-crm | `5f4271f` | chore: rename mx-technologies directory to cog-nova-mx |
| mx-outputs | `5a474c6` | chore: rename MX Technologies to Cog-Nova-MX across all files |
| mx-outputs | `d15e23b` | chore: update remaining MX Technologies references to Cog-Nova-MX |
| mx-collaboration | `b99f12b` | chore: rename MX Technologies to Cog-Nova-MX across all files |

## Next Steps

- Companies House filing for Cog-Nova-MX Ltd (administrative, outside repo scope)
- Update any external references to old `mx-technologies` COG namespace as encountered
- London CMS Experts contact follow-ups (added to REMINDERS)
