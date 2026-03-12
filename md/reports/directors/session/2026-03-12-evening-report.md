---
title: "Co-Directors Report — CogNovaMX: The Great Rename and Kindle Retirement"
created: "2026-03-12"
segment: "evening"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidentiality: internal
---

# Co-Directors Report — CogNovaMX: The Great Rename and Kindle Retirement

**Date:** 12 March 2026 — Evening
**Segment:** evening (17:00 onwards)

---

## Summary

Building on this afternoon's book tidy-up work, the evening session tackled two structural changes. First, the MX: The Handbook build was simplified — Kindle format was removed entirely and designed PDF covers were added to the A4 build. Second, and more significantly, the company name was standardised from "Cog-Nova-MX" to "CogNovaMX" across the entire repository ecosystem. Over 810 files were updated across five repositories, with directory renames to match. A final sweep caught one remaining old-format instance in Chapter 00 that had been missed by the bulk replacement.

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

## Decisions Made

- **Kindle format permanently retired** — A4 PDF is the sole output format for both books
- **Letter format removed** — A4 only in `generate-document-pdf.js`
- **CogNovaMX is the canonical spelling** — no hyphens, no spaces, everywhere

---

## Next Steps

- Push main repo to remote (commits pending)
- Visual review of regenerated Handbook PDF with new covers
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

### Submodule Commits

| Submodule | Hash | Description |
|-----------|------|-------------|
| allaboutv2 | 13a02422 | Rename Cog-Nova-MX to CogNovaMX (520 files, 3 directories) |
| mx-crm | be9c261 | Rename Cog-Nova-MX to CogNovaMX (39 files, 1 directory) |
| mx-collaboration | d2c7b66 | Rename Cog-Nova-MX to CogNovaMX (3 files) |
| mx-outputs | 3282575 | Update free book PDF and Chris Bryce presentation |
