---
title: "Co-Directors Session Report — 19 Mar 2026 (Afternoon 2)"
description: "Added MX Readiness Audit section to Reginald get-started page"
author: "Maxine"
created: 2026-03-19
modified: 2026-03-19
version: "1.0"

mx:
  status: active
  contentType: report
  tags: [session-report, reginald, audit, get-started]
---

# Co-Directors Session Report — 19 Mar 2026 (Afternoon 2)

## Summary

Added an MX Readiness Audit section to the Reginald `get-started.html` page. The audit offering is positioned as a no-prep, score-based assessment that maps directly to the five REGINALD compliance levels.

## Changes Made

### Reginald Website — get-started.html

New section added after the existing four-step registration flow:

- **Three highlight cards**: No MX metadata required, score maps to readiness level, actionable improvement plan
- **Six audit category cards** covering the MX journey stages plus foundational web standards:
  - Discovery (semantic HTML, heading hierarchy, robots.txt, llms.txt, SSR)
  - Citation (Schema.org JSON-LD, Open Graph, structured data, freshness, authorship)
  - Search & Compare (product markup, specifications, FAQ schema, table quality)
  - Accessibility (Pa11y, ARIA landmarks, alt text, form labels, contrast)
  - Performance (Core Web Vitals, FCP, TTI, page weight, JS dependency)
  - Security (HTTPS, CSP/HSTS headers, mixed content, cookies, XSS patterns)
- **Level mapping table**: Audit results tied to Levels 1-5 with specific audit focus per level (Level 3 highlighted as REGINALD minimum)
- **CTA callout**: "Request Your Free MX Readiness Audit" with pre-filled mailto link

### CSS — reginald.css

Added ~85 lines for audit section styling:
- `.audit-highlight` — 3-column grid for benefit cards (responsive)
- `.audit-highlight-item` — flex layout with green checkmark icon
- `.audit-checks` — bullet list with green dots
- `.audit-cta` — centred callout with button

## Decisions

- Section on get-started.html (not a standalone page) — keeps the conversion funnel tight
- Lead message: score/gamification with readiness levels — most compelling for prospects
- Email CTA to tom.cranstoun@gmail.com with pre-filled subject and body
- Categories drawn from actual mx-audit tooling metrics for accuracy
