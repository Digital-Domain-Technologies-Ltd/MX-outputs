---
title: "Co-Directors Report — MX Coming Soon Page Production Ready"
created: "2026-03-13"
segment: "evening"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidentiality: internal
---

# Co-Directors Report — MX Coming Soon Page Production Ready

**Date:** 13 March 2026 — Evening

**Segment:** evening (17:00 onwards)

---

## Summary

The MX coming-soon landing page is production-ready. A new design was ingested, audited against Pa11y WCAG AA (zero issues), and all identified defects fixed in the same session. The page now meets full MX compliance, has correct social sharing metadata, and carries a live llms.txt — meaning the site practises what it teaches from day one.

---

## What Was Done

### 1. New Design Ingested

A new coming-soon design was brought in with a substantially improved hero layout (`.hero-brand` with logo block + "Machine Experience" badge), better responsive breakpoints at 900px and 560px, inline CSS with Mozilla Headline font, Speculation Rules for browser-native prerender/prefetch, and Cloudflare analytics beacon. The design was adjusted for MX compliance before writing:

- Company name corrected throughout: `Cog-Nova-MX Ltd` → `CogNovaMX Ltd`
- Book names corrected: `The MX Handbook` / `The MX Protocols` → `MX: The Handbook` / `MX: The Protocols`
- `dateModified` updated to 2026-03-13

### 2. CSS Externalised

Per MX principle, CSS was extracted from inline `<style>` block into `coming-soon.css` with full MX carrier metadata (JSDoc block with `@mx:*` tags). The HTML now references the external file via `<link rel="stylesheet">`.

### 3. Audit Conducted

The page was audited using Pa11y directly (the mx-audit suite cannot crawl single-page HTML with no internal links — a known tool limitation now documented). Pa11y returned zero WCAG AA issues. Full manual HTML inspection covered DOM structure, heading hierarchy, Schema.org validity, MX compliance, and CSS patterns.

**Audit findings:**

| Priority | Issue |
|----------|-------|
| P1 | OG/Twitter image declared as SVG — social platforms reject SVG |
| P1 | llms.txt missing from allabout.network |
| P1 | Canonical URL `coming-soon.cog.html` vs actual filename |
| P2 | Font preload missing |
| P2 | `-webkit-mask-image` prefix missing (Safari) |
| P3 | theme-color and Cloudflare preconnect |

### 4. All Issues Fixed

Every finding resolved in the same session:

- `coming-soon-social.png` exported from SVG at 1200×630 via ImageMagick
- OG + Twitter image tags updated to PNG, `og:image:type` added
- All 7 canonical URL references updated to `coming-soon.html`
- `llms.txt` updated: CogNovaMX header + MX books section prepended to existing DDT content
- `<link rel="preload">` for Mozilla Headline 400 added
- `-webkit-mask-image` prefix added to CSS
- `<meta name="theme-color" content="#3143dc">` added
- `<link rel="preconnect">` for Cloudflare added

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Files changed | 4 |
| New files | 2 (coming-soon-social.png, coming-soon-report.md) |
| Pa11y issues | 0 |
| Audit findings fixed | 7 |
| Schema.org blocks | 5 |
| Repositories affected | 2 (allaboutv2, mx-crm) |

---

## Next Steps

- Push allaboutv2 and mx-crm submodules
- Verify social card rendering via LinkedIn/Facebook debugger once deployed
- Consider adding `robots.txt` to allaboutv2 root for production
- llms.txt DDT section needs version bump and date update (currently Nov 2025)

---

## Commit Log

All changes uncommitted at time of report — committing in this session.

| Repository | Change |
|------------|--------|
| allaboutv2 | New coming-soon design, CSS externalised, all audit fixes, llms.txt updated |
| mx-crm | Audit report: `outreach/2026-03-13/coming-soon-report.md` |
