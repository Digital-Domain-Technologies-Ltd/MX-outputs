---
title: "Co-Directors Report — CogNovaMX Rename, Kindle Retirement, and Beyond the CMS Podcast"
created: "2026-03-12"
segment: "evening"
version: "2.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidentiality: internal
---

# Co-Directors Report — CogNovaMX Rename, Kindle Retirement, and Beyond the CMS Podcast

**Date:** 12 March 2026 — Evening
**Segment:** evening (17:00 onwards)

---

## Summary

Building on this afternoon's book tidy-up work, the evening session tackled two structural changes and one significant commercial milestone. First, the MX: The Handbook build was simplified — Kindle format was removed entirely and designed PDF covers were added to the A4 build. Second, the company name was standardised from "Cog-Nova-MX" to "CogNovaMX" across the entire repository ecosystem (810+ files, five repositories). Third, Tom appeared on Chris Bryce's podcast "Beyond the CMS" (episode 40), where Chris committed on-air to using the MX audit as a fundamental part of Dotfusion's package for large organisations — upgrading the relationship from prospect to partner.

---

## What Was Done

### 1. Handbook Build: Kindle Removal and PDF Covers

The Handbook A4 build was updated to include designed front and back PDF covers via the LaTeX `pdfpages` package. Simultaneously, all Kindle build infrastructure was removed:

- Deleted: `metadata-kindle.yaml`, `Kindle-Cover.png`, three Kindle npm scripts
- Removed: Letter format from `generate-document-pdf.js` (A4 only going forward)
- Replaced: text cover page (`0-cover.md`) with designed PDF cover

### 2. CogNovaMX — The Great Rename

Every instance of "Cog-Nova-MX" (capitalised) and "cog-nova-mx" (slug/directory) was replaced across the entire repository:

| Repository | Files Changed | Directories Renamed |
|------------|--------------|---------------------|
| Main repo | 251 | demo-cog-nova-mx → demo-cognovamx (svg, bitmap), specifications/cog-nova-mx → specifications/cognovamx |
| allaboutv2 | 520 | cog-nova-mx-website → cognovamx-website, demo/cog-nova-mx → demo/cognovamx, reginald/cogs/cog-nova-mx → reginald/cogs/cognovamx |
| mx-crm | 39 | cog-nova-mx → cognovamx |
| mx-collaboration | 3 | — |
| mx-outputs | Updated | Free book PDF + presentation |

**Total: 810+ files across 5 repositories.**

### 3. Chapter 00 Cleanup

After the bulk rename, Tom spotted a surviving "Cog-Nova-MX Ltd" on line 814 of the shared introduction chapter. Fixed to "CogNovaMX Ltd".

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Main repo commits | 5 |
| Submodule commits | 4 (allaboutv2, mx-crm, mx-collaboration, mx-outputs) |
| Total files changed | 810+ |
| Lines added (main) | +1,037 |
| Lines removed (main) | −1,033 |
| Repositories touched | 5 |

---

### 4. Beyond the CMS — Podcast Episode 40

Tom appeared as guest on Chris Bryce's podcast "Beyond the CMS" (episode 40). Topics covered: Machine Experience (MX), invisible users (AI agents), schema.org, data sovereignty, Enterprise Asset Layer (EAL), headless CMS barriers for agents.

**Key outcome:** Chris committed on-air to using the MX audit as a fundamental part of Dotfusion's package for large organisations. This is the first formal commercial adoption of MX audit tooling.

**CRM updated:**

- Chris Bryce relationship upgraded from prospect to partner, priority raised to high
- Podcast summary filed (`mx-crm/dotfusion/chris-bryce-podcast-2026-03-12.md`)
- Interaction log, tasks, and contacts master list all updated
- New action items tracked: receive podcast assets (next week), provide free Handbook chapter for listeners, follow up on white-label partnership

**Tom also mentioned on the podcast:**

- MX: The Handbook publishing 2 April
- MX: The Protocols planned for July
- MX audit tool offering a 10-page sample audit for organisations

---

## Decisions Made

- **Kindle format permanently retired** — A4 PDF is the sole output format for both books
- **Letter format removed** — A4 only in `generate-document-pdf.js`
- **CogNovaMX is the canonical spelling** — no hyphens, no spaces, everywhere
- **Dotfusion adopts MX audit** — Chris Bryce committed to white-label MX audit as part of Dotfusion's enterprise package [by Chris]

---

## Next Steps

- Push main repo to remote (commits pending)
- Visual review of regenerated Handbook PDF with new covers
- Receive podcast assets from Chris Bryce (early next week)
- Provide free chapter of MX: The Handbook for podcast listeners
- Follow up on white-label audit partnership with Dotfusion
- Continue book content work

---

## Commit Log

| Hash | Description |
|------|-------------|
| c41b5f6e | Remove Kindle format, add designed PDF covers to Handbook A4 build |
| a0ec842f | chore: update changelog — Handbook PDF covers and Kindle removal |
| 2caa524e | Rename Cog-Nova-MX to CogNovaMX across entire repository (251 files) |
| 9bc2066c | Fix missed Cog-Nova-MX rename in chapter-00 and update submodules |
| b3158887 | chore: update changelog — CogNovaMX rename and free book covers |
| 4ef70099 | Update mx-outputs with co-directors evening report |
| 64809ed0 | Remove step-commit command file — skill.json is sole authority |
| d50c25c4 | Update chapter-00 (newpage, file system wording) and refresh about.mx.cog.md |

### Submodule Commits

| Submodule | Hash | Description |
|-----------|------|-------------|
| allaboutv2 | 13a02422 | Rename Cog-Nova-MX to CogNovaMX (520 files, 3 directories) |
| mx-crm | be9c261 | Rename Cog-Nova-MX to CogNovaMX (39 files, 1 directory) |
| mx-collaboration | d2c7b66 | Rename Cog-Nova-MX to CogNovaMX (3 files) |
| mx-outputs | 3282575 | Update free book PDF and Chris Bryce presentation |
