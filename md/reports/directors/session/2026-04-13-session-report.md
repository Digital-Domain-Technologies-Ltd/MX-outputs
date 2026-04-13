---
title: "Co-Directors Report — Audit Pipeline Overhaul, Platform-Aware Sitemap Health, Report Infill"
created: "2026-04-13"
segment: "full-day"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidential: true
---

# Co-Directors Report — Audit Pipeline Overhaul

**Date:** 13 April 2026 — Full Day Session

---

## Summary

Major overhaul of the audit pipeline. The report generation phase no longer computes anything — all scores, bands, grades, gap callouts, catalogue visibility scorecards, MX readiness levels, and rendering-aware tables are pre-computed by scripts and filled mechanically by a new infill tool. The sitemap health checker was rebuilt with platform-aware rate limiting, HEAD result caching, and timing. Two full audits produced (Agentica, NEOM Wellbeing). Multiple interview-driven improvements to report tone and accuracy.

---

## What Was Done

### 1. Agentica Onboarding Document

Expanded the REGINALD onboarding doc for Agentica with two technical sections: "The DNS for Agentic Documentation" (how REGINALD resolves COG identifiers like DNS resolves domain names) and "The npm for Action Docs" (how action-docs are discoverable, versioned, executable units like npm packages).

### 2. Agentica Audit (3 pages)

Full audit of agentica.wiki. SEO 94, AI Suitability 100 (SSR), Accessibility 17 (38 WCAG AA issues). Key findings: meta description uses git commit summary, soft 404 (SPA), no skip links, low semantic ratio. All findings verified against cached HTML.

### 3. NEOM Wellbeing Audit (5 pages, Shopify)

E-commerce audit using the ecommerce template. Platform: Shopify. SEO 86, SDQ 71, Accessibility 0 (98 issues), Served HTML 0 (SPA). Catalogue Visibility 5/100 — Product schema exists but no Offer. Sitemap: 902 URLs, all 200 OK (previous runs incorrectly reported 862 as 4xx due to rate limiting).

### 4. Platform-Aware Sitemap Health Checker

New `bin/sitemap-health.js` — standalone CLI that:

- Fingerprints the platform (Shopify, WordPress, etc.) from headers and HTML
- Selects safe request speed from `data/platform-rates.json`
- Retries on 429 with exponential backoff (up to 4 attempts)
- Caches HEAD results in `.cache/head-check/` (7-day TTL, 429s never cached)
- Records timing per-HEAD and saves to platform JSON
- Separates 200, 301, 404, 429, and network errors — never lumps 429 into "4xx"
- Results accumulate across runs — Shopify 902-URL sitemap completed fully

### 5. Deterministic Report Infill

New `bin/infill-report.js` — fills ~100 placeholders mechanically from JSON data files. The LLM writes only narrative sections. No score computation during report generation.

### 6. Audit Averages Generator

New `src/utils/reportUtils/auditAverages.js` — computes audit-wide averages, best/worst pages per dimension, nav/content page classification, score banding/grades, and served-vs-rendered gap callout text. Written to `audit_averages.json`.

### 7. Seven Computed Outputs (Interview-Driven)

Based on an interview about what the LLM currently infers vs what should be computed:

1. Commerce Visibility Score — in `site_profile.json`
2. Nav/content page classification — in `audit_averages.json`
3. Served vs Rendered gap callout text — in `audit_averages.json`
4. robots.txt RFC 9309 analysis — new `robots_txt_analysis.json`
5. Catalogue Visibility Scorecard (10 questions) — in `site_profile.json`
6. MX Readiness Level (0-5) — in `site_profile.json`
7. Score banding and grades — in `audit_averages.json`

### 8. Report Tone Overhaul (Interview-Driven)

Based on interview feedback about condescending tone:

- Peer-to-peer professional tone — reader knows web standards
- Accessibility framed as human concern first, not machine convergence
- One-liner finding format: what is wrong → which standard → who is affected
- No HTML code blocks showing fixes — the reader knows how to write HTML
- No internal cache paths in client reports
- Non-standard robots.txt directives flagged against RFC 9309
- "What's Next" not "How We Can Help" — agency-neutral language

### 9. Cache Policy Change

Cache preserved by default — `--force-delete-cache` only when explicitly requested. Per-URL staleness checks via Last-Modified headers handle freshness automatically.

### 10. Template Updates

Both templates updated with named placeholders matching the infill script. Old `[XX]`/`[SCORE]`/`[BAND_LABEL]` replaced with `[SEO_SCORE]`/`[A11Y_BAND]` etc. JSON code blocks removed from findings. Gap callout and rendering-aware scores table now script-generated. Legal entity support added (`[AGENT_LEGAL]`).

---

## Key Decisions

- **Never delegate report writing to subagents** — they hallucinate without the accumulated context
- **Standards claims require verification against the standard** — not just against the served HTML
- **Report audience knows web standards** — findings state what is missing, not how to fix it
- **Accessibility is a human concern** — name the specific affected user group
- **Cache is an asset** — preserved between runs, not nuked by default
- **All computation in scripts** — the LLM writes narrative, never computes scores

---

## Files Changed

### New Files

- `mx-audit/bin/sitemap-health.js` — platform-aware sitemap health checker
- `mx-audit/bin/infill-report.js` — deterministic placeholder infill
- `mx-audit/src/utils/platformFingerprint.js` — platform detection
- `mx-audit/src/utils/reportUtils/auditAverages.js` — averages, bands, gap callout
- `mx-audit/data/platform-rates.json` — platform rate limit knowledge base
- `mx-reginald/docs/agentica-onboarding.md` — expanded with DNS/npm analogies

### Modified

- 5 audit skills (audit-site, audit-collect, audit-scores, audit-discovery, audit-report)
- Both report templates (web-audit-suite, ecommerce-audit)
- `mx-audit/src/main.js` — Phase 1b delegates to sitemap-health.js
- `mx-audit/src/utils/reports.js` — wired auditAverages and robotsTxtAnalysis
- `mx-audit/src/utils/reportUtils/llmReports.js` — catalogue visibility, MX readiness, robots analysis

### Reports Generated

- `mx-crm/outreach/2026-04-13/agentica-report.md` + PDF
- `mx-crm/outreach/2026-04-13/neomwellbeing-report.md` + PDF

---

## Next Session

- Run a full audit using the new pipeline end-to-end (template → infill → narrative → verify → PDF) to validate the complete flow
- Test the infill script on a non-SPA site to verify the non-rendering-aware table variant
- Consider adding the structured data findings table to the infill script as a generated block
