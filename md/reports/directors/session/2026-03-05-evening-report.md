---
title: "Co-Directors Report — PDF Pipeline, tg.community Re-Audit, and Three Tooling Fixes"
description: "Evening session report. PDF pipeline completed, tg.community audited 24 hours after initial assessment showing transformative improvements, and three bugs fixed in the audit tool."
created: "2026-03-05"
segment: "evening"
version: "2.0"
author: "Tom Cranstoun and Maxine"
audience: "stakeholders"
confidentiality: "internal"
---

# Co-Directors Report — PDF Pipeline, tg.community Re-Audit, and Three Tooling Fixes

**5 March 2026 — Evening (update)**

---

## Summary

The evening session had two phases. First, the book PDF pipeline was completed: illustrations moved, pandoc flags updated, LaTeX dependencies resolved, and both books rebuilt with zero warnings. Second, a full follow-up audit of tg.community was conducted — just 24 hours after the initial assessment. The results show that The Gathering's team responded to the March 4 audit with exceptional speed: security headers went from 20/100 to 100/100, all discovery files (robots.txt, sitemap.xml, llms.txt) went from 404 to 200, and Schema.org JSON-LD appeared on every page. AI agent suitability reached 100/100.

Three bugs in the audit tool were also identified and fixed during the process: a false positive in llms.txt detection, a macOS compatibility issue in the recon script, and duplicate URL processing during crawls.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (evening) | 5 (main) + 3 (submodules) |
| Files changed (uncommitted) | 8 (mx-audit: 5, recon script: 1, about.mx: 1) |
| tg.community pages audited | 8 |
| Audit tool bugs fixed | 3 |
| Codex PDF size | 8.5 MB (A4), 8.2 MB (Kindle) |
| Handbook PDF size | 3.1 MB (A4), 3.1 MB (Kindle) |
| PDF warnings | 0 |

---

## What Was Built

### tg.community Follow-Up Audit Report

A full 9-action audit pipeline was executed against tg.community with cache cleared, producing an executive report documenting transformative 24-hour improvements:

| Metric | 4 March | 5 March | Change |
|--------|---------|---------|--------|
| Security Headers | 20/100 | 100/100 | +80 |
| AI Agent Suitability (served HTML) | 92/100 | 100/100 | +8 |
| SEO | 60/100 | 67/100 | +7 |
| Accessibility (Pa11y WCAG2AA) | 100/100 | 100/100 | Maintained |
| Performance | 85/100 | 85/100 | Maintained |

**Report filed:** `mx-crm/outreach/2026-03-05/tg-community-report.md`

The report acknowledges what The Gathering's team accomplished and shifts the engagement framing from foundation-building to refinement. The remaining opportunities are polish (meta descriptions, content freshness signals, llms.txt enhancements) rather than critical gaps.

### All Book PDFs Regenerated

Both the MX Codex and MX Handbook were rebuilt in every format:

- **MX Codex** — A4 PDF (8.5 MB), Kindle PDF (8.2 MB), HTML, 17 appendix HTML pages
- **MX Handbook** — A4 PDF (3.1 MB), Kindle PDF (3.1 MB), HTML

The Codex PDFs jumped from ~4 MB to ~8.5 MB because the 16 chapter illustrations are now included — they had been silently missing from every previous build.

---

## What Changed

### Three Audit Tool Bugs Fixed

During the tg.community audit, three bugs surfaced and were fixed:

**1. llms.txt False Positive** — The LLM suitability report flagged "No llms.txt file detected" on every page despite the file existing at the site root (200, 698 bytes). Root cause: the feedback generator (`llmFeedback.js`) only checked for in-page HTML references (`<link>`, `<meta>`), not the site-level HTTP check that correctly detected the file. Fixed by passing `siteContext` through the feedback chain. Files: `llmFeedback.js`, `llmMetrics.js`, `llmReports.js`.

**2. Meta-Extract macOS Incompatibility** — The recon script's meta-extraction reported "(none)" for every field (title, description, Open Graph, language, headings). Root cause: `grep -P` (Perl regex) is a GNU grep feature unavailable on macOS BSD grep. All six calls silently failed, hidden by `2>/dev/null`. Fixed by replacing all `grep -oP` patterns with equivalent `perl -ne` one-liners. File: `scripts/mx-audit-recon.sh`.

**3. Duplicate URLs in Crawl** — The automated suite processed the homepage and /about twice each, producing duplicate CSV rows. Root cause: `processHtmlContent()` in `sitemap.js` added every `<a href>` without deduplication — pages with the same link in header and footer appeared twice. Fixed by adding `Set`-based deduplication with URL normalisation in both `sitemap.js` and `urlProcessor.js`.

### PDF Pipeline Completed

The earlier phase of this session resolved every outstanding PDF pipeline issue (full details in v1.0 of this report):

- 16 Codex SVGs moved to canonical asset location (`datalake/assets/images/svg/illustrations/`)
- Deprecated pandoc flags replaced across all files (`--listings` to `--syntax-highlighting=idiomatic`)
- TeX Live 2025 `framed` and `needspace` packages installed
- Chapter 14 emoji fix for LaTeX compatibility
- Both books rebuilt in all formats with zero warnings

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

- Present tg.community follow-up audit report to The Gathering's administration
- London CMS Experts contact follow-ups (this week)
- LinkedIn ad re-submission (this week)
- Frankfurt preparation — 68 days

---

## Commit Log

| Hash | Theme |
|------|-------|
| `457d0afe` | Style: fix markdown spacing in about.mx.cog.md |
| `4bfe8002` | Changelog update — evening report, self-knowledge recon |
| `f295c6a9` | Co-directors evening report — 5 March 2026 |
| `99d9b886` | Changelog update — illustration move, pandoc flags, PDF rebuild |
| `1a6b1360` | Move illustrations, update pandoc flags, fix emoji, rebuild PDFs |

**Submodule commits:**

| Repo | Hash | Theme |
|------|------|-------|
| mx-outputs | `bb4e905` | Regenerate all book PDFs and HTML |
| allaboutv2 | `efc9696` | Update pandoc flags to non-deprecated syntax |
| mx-crm | `9858786` | tg.community audit report PDF |

**Uncommitted (this session):**

| File | Change |
|------|--------|
| `mx-audit/src/reporters/llmFeedback.js` | llms.txt false positive fix |
| `mx-audit/src/utils/llmMetrics.js` | Pass siteContext through facade |
| `mx-audit/src/utils/reportUtils/llmReports.js` | Pass siteContext to feedback generator |
| `mx-audit/src/utils/sitemap.js` | Deduplicate URLs in processHtmlContent |
| `mx-audit/src/utils/urlProcessor.js` | Safety-net dedup in processUrlsConcurrently |
| `scripts/mx-audit-recon.sh` | Replace grep -P with perl for macOS |
| `mx-crm/outreach/2026-03-05/tg-community-report.md` | tg.community follow-up audit report |

---

*The board does not read git logs. This report makes sure they do not have to.*
