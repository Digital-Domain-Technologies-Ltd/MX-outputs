---
title: "Co-Directors Report — Audit Pipeline Hardened, Registry at 179 Cogs"
created: "2026-04-13"
x-mx-segment: "evening"
version: "1.0"
author: Tom Cranstoun
audience: business
confidential: true

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-13-evening-report.md
  purpose: "Co-Directors Report - Audit Pipeline Hardened, Registry at 179 Cogs"
  audience: [humans, machines]
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Audit Pipeline Hardened, Registry at 179 Cogs"]
---

# Co-Directors Report — Audit Pipeline Hardened, Registry at 179 Cogs

**Date:** 13 April 2026 — Evening Session

---

## Summary

Building on the full-day audit pipeline overhaul, the evening session hardened the entire chain from crawl to PDF. Cache poisoning detection was added after a Shopify bot-challenge page persisted in the cache and corrupted the NEOM report. The main audit crawl gained platform-aware rate limiting (previously only the sitemap health checker had it). Nine pipeline modules were added or improved. The NEOM Wellbeing audit was re-run at 10 pages and the report and PDF regenerated clean. Documentation — manual, appendix, and action cog — was updated to reflect all session changes. The cog registry was synced to 179 cogs.

---

## By the Numbers

| Metric | Value |
| ------ | ----- |
| Commits | 11 |
| Files changed | 50 |
| Insertions | 646 |
| Deletions | 246 |
| Cogs in registry | 179 |
| NEOM audit pages | 10 (up from 5) |

---

## What Was Built

### Cache Poisoning Detection

New `detectCachePoisoning()` validates content at both write and read time. Checks: canonical URL mismatch, title indicators (e.g. Shopify "Please verify you are a human"), and content length anomalies. Bot-challenge pages from Shopify's Instagram OAuth flow can no longer persist in the cache and corrupt reports.

### Nine Pipeline Improvements

Agent access test, error page test, infill table generators, Pa11y severity scoring, served/rendered CSV fallback, shared rate limiter, and analysis caching infrastructure — all committed as a single coherent update to `mx-audit`.

### Platform-Aware Rate Limiting (Main Crawl)

The main audit crawl now fingerprints the platform and selects safe request speeds from `data/platform-rates.json`, matching the sitemap health checker. Shopify sites no longer trigger 429s during the crawl phase.

---

## What Changed

### NEOM Wellbeing — 10-Page Audit Complete

After the cache poisoning fix and cache clear, the NEOM Wellbeing audit ran clean at 10 pages. Report and PDF regenerated. The previous 5-page version had been corrupted by cached bot-challenge pages.

### Documentation Updated

The audit manual (`manual-web-audit-suite.cog.md`), Appendix C guide, and the `mx-audit.cog.md` action cog were all updated to reflect: cache preserved by default, platform fingerprinting, HEAD cache, infill script, new output files (audit_averages, robots_txt_analysis, agent_access, error_page_test), e-commerce template, rendering-aware scores, and cache poisoning detection. The "always use --force-delete-cache" instruction was removed from all documents.

### Registry Sync

Cog registry synced to 179 cogs. Content copies pushed to mx-outputs for the allabout.network content site.

### Housekeeping

Audit skill permissions added to `.claude/settings.json`. Orphaned `pdf-forge-exports/.mx.yaml.md` metadata file removed (folder no longer exists).

---

## Commit Log

| Hash | Summary |
| ---- | ------- |
| `96827743` | Deterministic report infill, audit averages, HEAD cache, 7 computed outputs |
| `39b816c3` | Update templates, infill script, cache policy, and audit skills |
| `31aa8212` | Update submodules: audit fixes, NEOM draft, cleanup, directors report |
| `49925c4b` | Update mx-audit: 9 pipeline improvements |
| `0742f120` | Fix cache poisoning, 10-page NEOM audit, report regenerated |
| `60e6542f` | Platform-aware rate limiting for main audit crawl |
| `376facee` | Update submodules: platform rates, NEOM 10-page report + PDF |
| `5b3751b7` | Update audit documentation: manual, appendix, action cog |
| `a99e8610` | Registry sync: 179 cogs |
| `e8341b5a` | Sync: registry (179 cogs), mx-audit content copies |
| `468668f7` | Add audit skill permissions, remove pdf-forge-exports metadata |

---

## Next Steps

- Run a full audit using the complete new pipeline end-to-end (template → infill → narrative → verify → PDF) to validate the flow on a non-SPA site
- Consider adding the structured data findings table to the infill script as a generated block
- CMS Summit Frankfurt is 29 days away — audit pipeline is now demo-ready
