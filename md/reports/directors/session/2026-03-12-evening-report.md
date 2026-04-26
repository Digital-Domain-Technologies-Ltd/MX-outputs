---

title: "Co-Directors Report — CogNovaMX Rename, Kindle Retirement, and Beyond the CMS Podcast"
created: "2026-03-12"
version: "3.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "evening"
  audience: stakeholders
  confidential: true
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

### 4. CI Failure Automation Pipeline

Built a fully automated pipeline for catching GitHub Actions failures and feeding them back into Claude Code sessions:

- **GitHub Actions workflow** (`notify-ci-failure.yml`): triggers when `Validate Cog Files` or `HTML Regression Check` fails, extracts failed job/step details, creates a `ci-failure` labelled issue with logs link and fix instructions. Deduplicates to avoid issue spam.
- **Session-start hook** (`check-ci-failures.sh`): queries open `ci-failure` issues via `gh` CLI and alerts Claude Code at session start.
- **Settings wired**: hook added to `settings.local.json` SessionStart hooks.
- **Label created**: `ci-failure` label (red) added to GitHub repo.

Flow: Push → CI fails → issue auto-created → next session → Claude Code alerted → fix and close.

### 5. HTML Audit Script Modernisation (.js → .cjs)

Renamed all HTML audit scripts from `.js` to `.cjs` to align with Node.js module conventions (these use `require()` and `module.exports`):

- `audit-html-baseline.js` → `audit-html-baseline.cjs`
- `audit-html-compare.js` → `audit-html-compare.cjs`
- `audit-html-patterns.js` → `audit-html-patterns.cjs`
- `html-audit-utils.js` → `html-audit-utils.cjs`

Updated all references in `package.json` scripts, `scripts/ORGANIZATION.md`, cog files, and manuals.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Main repo commits | 10+ |
| Submodule commits | 4 (allaboutv2, mx-crm, mx-collaboration, mx-outputs) |
| Total files changed | 820+ |
| Lines added (main) | +1,050+ |
| Lines removed (main) | −1,040+ |
| Repositories touched | 5 |
| New files created | 2 (workflow + hook) |

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
- **CI failure automation** — GitHub Actions failures now auto-create issues, Claude Code checks on session start
- **Audit scripts use .cjs extension** — aligns with Node.js CommonJS convention

---

## Next Steps

- Push main repo to remote (commits pending — includes CI pipeline + .cjs renames)
- Visual review of regenerated Handbook PDF with new covers
- Verify CI failure workflow triggers correctly on next failure
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
