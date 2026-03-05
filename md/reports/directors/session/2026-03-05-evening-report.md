---
title: "Co-Directors Report — PDF Pipeline Matured: Illustrations, Dependencies, Zero Warnings"
description: "Evening session report. Codex illustrations moved to canonical location, TeX Live dependencies resolved, deprecated pandoc flags replaced across the repo, and all book PDFs rebuilt with zero warnings."
created: "2026-03-05"
segment: "evening"
version: "1.0"
author: "Tom Cranstoun and Maxine"
audience: "stakeholders"
confidentiality: "internal"
---

# Co-Directors Report — PDF Pipeline Matured: Illustrations, Dependencies, Zero Warnings

**5 March 2026 — Evening**

---

## Summary

The evening session resolved every outstanding issue in the book PDF pipeline. Sixteen Codex chapter illustrations that were missing from PDF output — because their SVGs sat outside the canonical asset directory — were moved to the correct location, where the automated illustration generator now picks them up without any special configuration. Missing LaTeX packages were installed. All deprecated pandoc flags were replaced with their pandoc 3.8 equivalents across every file in the repository that referenced them. Both books (MX Codex and MX Handbook) were rebuilt in all formats — A4, Kindle, and HTML — with zero warnings.

The PDF pipeline is now clean. No manual workarounds, no deprecated flags, no missing assets.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (today) | 2 (main) + 3 (submodules) |
| Files changed (main commit) | 42 |
| SVGs relocated | 16 |
| Pandoc flag replacements | ~20 across 5 files |
| Illustration conversions | 47 (31 existing + 16 new) |
| Codex PDF size | 8.5 MB (A4), 8.2 MB (Kindle) |
| Handbook PDF size | 3.1 MB (A4), 3.1 MB (Kindle) |
| PDF warnings | 0 |

---

## What Was Built

### All Book PDFs Regenerated

Both the MX Codex and MX Handbook were rebuilt in every format:

- **MX Codex** — A4 PDF (8.5 MB), Kindle PDF (8.2 MB), HTML, 17 appendix HTML pages
- **MX Handbook** — A4 PDF (3.1 MB), Kindle PDF (3.1 MB), HTML

The Codex PDFs jumped from ~4 MB to ~8.5 MB because the 16 chapter illustrations are now included — they had been silently missing from every previous build.

### tg.community Audit Report PDF

The tg.community audit report from yesterday's session was rendered to PDF with professional table formatting using the newly installed LaTeX packages.

---

## What Changed

### Illustrations Moved to Canonical Location

The 16 Codex chapter SVGs lived at `datalake/publications/mx-books/mx-codex/codex/illustrations/` — outside the canonical asset directory at `datalake/assets/images/svg/`. The illustration generator script walks the canonical directory recursively, so these SVGs were never converted. Every Codex PDF build produced 13 missing-image warnings.

The fix was architectural, not procedural:

1. `git mv` all 16 SVGs to `datalake/assets/images/svg/illustrations/`
2. The generator script discovered them automatically (no script changes)
3. PNGs appeared at `datalake/assets/images/bitmap/illustrations/`
4. Pandoc's existing `--resource-path` already included `datalake/assets/images/bitmap`

Zero chapter markdown changes. Zero script changes. Zero pandoc configuration changes. Only the file locations changed.

### Deprecated Pandoc Flags Replaced

Pandoc 3.8 deprecated two flags used throughout the build system:

| Old | New |
|-----|-----|
| `--listings` | `--syntax-highlighting=idiomatic` |
| `--highlight-style=<style>` | `--syntax-highlighting=<style>` |

Updated in:

- `package.json` — 4 npm scripts
- `scripts/cogs/pdf-generator.cog.md` — 6 references
- `scripts/generate-document-pdf.js` — 1 reference
- `allaboutv2/reginald/cogs/cog-nova-mx/pdf-generator/content.md` — 8 references (published copy)
- `mx-canon/mx-maxine-lives/routing-registry.json` — 4 cached commands

Final grep confirmed zero references to the deprecated flags remain anywhere in the repository.

### LaTeX Dependencies Installed

TeX Live 2025 was missing `framed` and `needspace` packages, required for professional table formatting in PDFs. Installation required pointing `tlmgr` at the TeX Live 2025 historic archive (the live repository had moved to 2026).

### Emoji Fix

Chapter 14 contained `❌` which XeLaTeX cannot render. Replaced with `**Failed**` — maintaining meaning while ensuring LaTeX compatibility.

---

## What Changed About Me

Self-knowledge recon (last run: 3 March) shows accumulated growth:

| Metric | Was | Now |
|--------|-----|-----|
| Cogs | 61 | 67 (+6) |
| Action-docs | 54 | 55 |
| Info-docs | 7 | 12 (+5) |
| Skills | — | 40 |
| Manuals | — | 25 |
| Reginald indexed | — | 167 |

This reflects accumulated work across sessions since 3 March, not changes made today.

---

## Next Steps

- Present tg.community audit report to The Gathering's administration
- London CMS Experts contact follow-ups (this week)
- LinkedIn ad re-submission (this week)
- Frankfurt preparation — 68 days

---

## Commit Log

| Hash | Theme |
|------|-------|
| `1a6b1360` | Move illustrations to canonical location, update pandoc flags, fix emoji |
| `99d9b886` | Changelog update |

**Submodule commits:**

| Repo | Hash | Theme |
|------|------|-------|
| mx-outputs | `bb4e905` | Regenerate all book PDFs and HTML |
| allaboutv2 | `efc9696` | Update pandoc flags to non-deprecated syntax |
| mx-crm | `9858786` | tg.community audit report PDF |

---

*The board does not read git logs. This report makes sure they do not have to.*
