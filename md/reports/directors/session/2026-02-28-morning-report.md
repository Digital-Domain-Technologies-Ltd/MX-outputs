---
title: "Co-Directors Report — mx-outputs Type-First Restructure"
created: "2026-02-28"
version: "1.0"
author: Tom Cranstoun

mx:
  x-mx-segment: "morning"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-02-28-morning-report.md
---

# mx-outputs Type-First Restructure

**28 February 2026 — Morning Session**

## Summary

The mx-outputs repository — where all build artefacts, reports, and generated outputs live — was restructured from a flat grab-bag into a type-first directory layout that mirrors how a website organises content. The top-level folders are now organised by media type: `pdf/`, `md/`, `html/`, `json/`, and `pptx/`. Topic folders sit beneath each type. This makes the outputs repository navigable for non-technical stakeholders — directors, advisory board members, and investors can browse to the format they need without understanding the build pipeline.

An auto-generated README index (`scripts/generate-index.sh`) scans the entire structure and produces a navigable markdown document with file counts, links, and sub-category breakdowns. This runs on demand and keeps the index current as new outputs are added.

The restructure itself moved 206 files using `git mv` to preserve history. The harder work was updating path references — approximately 30 files across three repositories (mx-outputs, allaboutv2, and the main hub) needed their paths corrected. This included package.json build commands, cog action-docs, routing registries, skills, and the published Reginald cog mirrors.

## By the Numbers

| Metric | Value |
| --- | --- |
| Files moved | 206 |
| Commits today | 4 (1 mx-outputs, 1 allaboutv2, 2 main repo) |
| Files with path updates | ~30 across 3 repositories |
| Main repo files changed | 22 (across both commits) |
| mx-outputs files indexed | 203 |
| New directories created | 5 type-first top-level (`pdf/`, `md/`, `html/`, `json/`, `pptx/`) |

## What Was Built

- **Type-first directory structure** in mx-outputs: `pdf/` (books, reports, presentations, diagrams), `md/` (reports, reginald docs), `html/` (blogs with CSS/SVG, audit baselines), `json/` (audit data), `pptx/` (presentation source files)
- **Auto-generated README index** (`mx-outputs/scripts/generate-index.sh`) — shell script that scans the structure and produces a 315-line navigable markdown index
- **Directors report sub-categories** — session reports split from a flat folder into `session/`, `interview/`, and `build/` sub-directories

## What Changed

- All path references updated across: `package.json`, `UBERCOG.cog.md`, `README.md`, `ROUTING.cog.md`, `routing-registry.json`, step-commit skill, create-content skill, `.mxignore`, and 8 action cogs in `scripts/cogs/`
- allaboutv2 Reginald mirrors updated (11 content.md files with matching path changes)
- `about.mx.cog.md` regenerated — 61 cogs (54 action-docs), 25 manuals, 40 skills, 156 indexed in Reginald

## What This Means for Stakeholders

The outputs repository is now browsable. A director looking for the latest board report navigates to `md/reports/directors/session/`. An investor wanting the pitch deck goes to `pptx/`. Someone reviewing blog output looks in `html/blogs/`. The structure is self-explanatory and the auto-generated index provides a complete map.

This is MX OS eating its own cooking — making the repository itself machine-readable and human-navigable. The same principle we advocate for websites (clear structure, explicit metadata, no guessing) now applies to our own build artefacts.

## Commit Log

| Repository | Hash | Description |
| --- | --- | --- |
| mx-outputs | `5aac12f` | restructure: type-first organisation (pdf/, md/, html/, json/, pptx/) |
| allaboutv2 | `9ad24344` | chore: update all mx-outputs path references after type-first restructure |
| main repo | `828f2e6` | chore: update all path references after mx-outputs restructure |
| main repo | `18117b3` | chore: update remaining mx-outputs path references across entire repo |

## Next Steps

- Commit remaining mx-outputs README timestamp update and this session report
- Verify workflow paths still function (`npm run pdf:protocols-html`, blog generation)
- Update REMINDERS.md with workflow verification item (if not already present)
