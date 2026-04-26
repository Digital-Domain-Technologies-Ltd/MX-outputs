---
title: "Co-Directors Report: Repository Reorganisation — Separation of Concerns"
author: Tom Cranstoun

created: '2026-03-01'
mx:
  date: 2026-02-26
  x-mx-segment: evening
  status: final
---

# Co-Directors Report: Repository Reorganisation — Separation of Concerns

**Date:** 26 February 2026 (Evening)
**Prepared by:** Maxine

---

## Executive Summary

Building on this morning's REGINALD deployment, this evening's session was a comprehensive cleanup of the entire MX-Hub repository. Files that had accumulated in the wrong places — client deliverables mixed into Canon, contacts scattered across three locations, website code sitting in the CRM — were audited, moved to their correct homes, and every reference updated. The result is a repository where each submodule has a clear, single purpose.

This matters for the board because it reduces confusion for anyone onboarding (Eleanor, Scott, future team members) and enforces the separation of concerns that MX preaches to others.

---

## What Changed

### The Problem

Over months of rapid development, files had landed wherever was convenient rather than where they belonged:

- **Client deliverables** (media219 audit, kwint overview, LPC brochure) were scattered across Canon and mx-outputs
- **Contact data** existed in three places: Canon/MX-Contacts, datalake/architecture/prospects, and mx-crm
- **Website code** (cog-nova-mx site, REGINALD site, LPC site) was stored in the CRM repository
- **Orphaned files** — an old UBER.cog.md, a stale todo list, a dock configuration — cluttered the repo

### The Fix

Each file type now lives in exactly one place:

| Content type | Before (scattered) | After (single home) |
|---|---|---|
| Contact COGs and messages | Canon + datalake + mx-crm | `packages/mx-crm/contacts/` only |
| Prospect outreach templates | datalake/architecture/prospects/ | `packages/mx-crm/outreach/templates/` |
| Client audit reports | Canon/management/audits/ | `packages/mx-crm/{client}/` |
| Website implementations | mx-crm | `packages/allaboutv2/` |
| Build artefacts | mx-outputs/datalake/ | `packages/mx-outputs/` (datalake removed) |

### Path References Updated

Every file that referenced the old locations was updated — skills, cogs, the registry index, Canon README, manuals, the audit tool, and the datalake README. A verification sweep confirmed no active source files still point to deleted paths.

### Datalake Structure Tidied

The `datalake/content-lifecycle/` folder was given consistent numbered prefixes: `1-raw-ideas/`, `2-drafts/`, `3-specifications/`, `4-use-cases/`.

---

## By the Numbers

| Metric | Value |
|---|---|
| Commits (mx-hub) | 10 |
| Commits (mx-crm) | 5 |
| Commits (allaboutv2) | 1 |
| Commits (mx-outputs) | 3 |
| **Total commits across all repos** | **19** |
| Files touched (mx-hub) | 200 |
| Lines removed | 17,438 |
| Lines added | 1,954 |
| Net reduction | ~15,500 lines |
| Directories removed | 3 (MX-Contacts, prospects, mx-outputs/datalake) |
| Orphaned files deleted | 5 |

The large net deletion reflects consolidation — duplicate content was removed, not lost. Every file was verified present in its new location before deletion.

---

## Decisions Made

1. **mx-crm is the single source of truth for contacts** — No contact, prospect, or client data lives outside the CRM submodule
2. **Website code belongs in allaboutv2** — Reference implementations and client websites are web assets, not CRM data
3. **mx-outputs/datalake removed entirely** — The concept of a "datalake within a submodule" was architecturally wrong
4. **MX-Cog-Registry deprecated folder left alone** — The deprecated staging area in `hub-content/MX-Cog-Registry/` is deliberately awaiting review, not a problem to fix
5. **Datalake numbering convention** — Content lifecycle folders use numbered prefixes (1-, 2-, 3-, 4-) for clear stage ordering

---

## Known Follow-Up Items

Three areas still reference the deleted `packages/mx-outputs/datalake/clients/` path:

1. **Demo server** (`scripts/demo-server.js` and related docs) — Needs refactoring to serve demos from allaboutv2 instead
2. **Content-workflow skill** (`.claude/skills/content-workflow/`) — Staging path references need updating throughout
3. **REGINALD static site** — Generated COG files have stale MX-Contacts paths; regenerating with `npm run reginald:generate` will fix them

All three are logged in REMINDERS.md.

---

## Strategic Context

This cleanup is not just housekeeping. Cog-Nova-MX tells clients that structure matters — that AI agents fail when information is scattered and inconsistent. The same principle applies to our own repository. A clean separation of concerns means:

- **Onboarding is simpler** — new team members see one place for contacts, one for websites, one for build outputs
- **Access control works** — mx-crm (private) holds confidential client data; allaboutv2 (public) holds only publishable content
- **Submodule boundaries are meaningful** — each repo has a clear, non-overlapping purpose

---

## Commit Log (Evening)

**mx-hub (main repo):**

```
13c0b71 chore: rename use-cases to 4-use-cases for consistent numbering
0d6ca36 chore: step-commit — changelog, reminders, stale path fixes
53919ee docs: update all stale path references after reorganisation
7cb917a docs: update README.md after repository reorganisation
f7171dc docs: update repo structure documentation after reorganisation
3e76af1 chore: remove orphaned files
4dbf245 refactor: move website code from mx-crm to allaboutv2
71420ac refactor: consolidate contacts into mx-crm as single source of truth
3a48b41 refactor: move client deliverables to mx-crm
da5e25c chore: update mx-crm and mx-outputs submodules
```

**mx-crm:**

```
e995dba fix: update stale outreach paths in contact files
436d3ae refactor: remove website code — moved to allaboutv2
be46c72 feat: consolidate all contacts and prospects into CRM
e5f99c9 feat: add media219, kwint, and LPC brochure client deliverables
5686902 feat: add cog-nova-mx and reginald client deliverables
```

**allaboutv2:**

```
3a33f7a feat: add website implementations from mx-crm
```

**mx-outputs:**

```
5ea01b5 chore: update London CMS Experts presentation
b98aec0 refactor: remove LPC brochure — moved to mx-crm
92aaa75 refactor: remove datalake/clients — moved to mx-crm
```

---

## Next Steps

1. **Refactor demo server** — Update `scripts/demo-server.js` to serve from allaboutv2 instead of deleted mx-outputs path
2. **Update content-workflow skill** — Fix staging path references throughout the skill files
3. **Regenerate REGINALD static site** — Run `npm run reginald:generate` to pick up corrected registry paths
4. **Brief team on new structure** — Eleanor and Scott need to know contacts are now exclusively in mx-crm

---

*Report filed: 26 February 2026, 22:40 GMT*
