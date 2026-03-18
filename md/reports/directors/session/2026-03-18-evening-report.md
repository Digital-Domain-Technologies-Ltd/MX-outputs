---
title: "Co-Directors Report — BloomReach Meeting & Plugin Expansion"
created: "2026-03-18"
segment: "evening"
version: "2.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidential: true
---

# Co-Directors Report — BloomReach Meeting & Plugin Expansion

**Date:** 18 March 2026 — Evening
**Segment:** evening (since 17:00)

---

## Summary

First commercial CMS vendor meeting completed. Tom demonstrated the MX metadata standard to BloomReach (William), who confirmed the CMS plugin approach is viable for their platform. Two audit reports delivered (BloomReach: 41/100 AI suitability, Farnell: 35/100) with follow-up message drafted. Separately, the mx-plugin repository expanded to cover Drupal and Squarespace, bringing CMS coverage to seven platforms.

---

## What Was Done

### 1. BloomReach Vendor Meeting

Demonstrated the full MX stack: YAML frontmatter, HTML meta tag generation, The Gathering open standard, and Reginald registry. William confirmed the plugin approach works for BloomReach — generate MX metadata tags in HTML head from existing content model. Key finding: BloomReach runs on WordPress + Elementor with good homepage Schema.org but missing JSON-LD on inner pages.

### 2. Audit Reports Delivered

Two executive audit reports prepared for delivery:
- **BloomReach** (`bloomreach-report.md`): Performance 25/100, Accessibility 0/100, SEO 65/100, AI Suitability 41/100. 148 WCAG AA errors across 4 pages.
- **Farnell** (`farnell-report.md`): Performance 50/100, Accessibility 0/100, SEO 63/100, AI Suitability 35/100. 171 WCAG AA errors across 2 pages. Included as real-world B2B example.

### 3. Follow-up Message Drafted

Post-meeting outreach message created (`bloomreach-followup.md`) — references both reports, confirms plugin approach, includes links to The Gathering, Reginald, and Chapter 0 availability (2 April).

### 4. MX Plugin Expansion

Plugin repository expanded from 5 to 7 CMS platforms:

- **Drupal module** (`drupal/mx_cogify/`) — PHP module for Drupal 10/11, 9 files (info.yml, config schema, routing, permissions, settings form, hook-based meta injection, per-node overrides via Third Party Settings, Metatag conflict detection)
- **Squarespace snippet** (`squarespace/mx-cogify.html`) — Code Injection script with Squarespace-specific `collection-type-*` body class detection
- README updated with new platforms, directory tree, and tags

### 5. Reginald Plugins Download Page

New public page at `reginald.allabout.network/plugins.html` — non-technical download page for all 7 CMS plugins:

- 7 plugin cards with step-by-step setup instructions for non-developers
- Zip downloads for WordPress and Drupal (multi-file), direct file downloads for others
- "What every plugin does" feature grid and FAQ section
- Reginald index.html updated with link to plugins page

### 6. No-Inline-CSS/JS Refactor

Applied MX HTML coding principle (no inline CSS or JS) to Reginald pages:

- Extracted `reginald/index.html` styles to `css/reginald.css`, script to `js/reginald.js`
- Extracted `plugins.html` styles to `css/plugins.css`
- Removed one remaining inline `style=` attribute
- Rule saved to auto-memory for future sessions

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (prior) | 2 (evening) |
| Files changed (mx-crm) | 4 new (outreach/2026-03-18/) |
| Files changed (mx-plugin) | 13 new, 1 modified (Drupal + Squarespace) |
| Files changed (allaboutv2) | 6 new, 1 modified (plugins page, external CSS/JS) |
| CMS platforms covered | 7 (WordPress, Drupal, EDS, Shopify, Wix, Squarespace, generic) |

---

## The Insight

BloomReach is the first CMS vendor to see the standard and confirm viability. The fact that their own site scores 41/100 for AI agents — while they sell an "agentic platform for personalisation" — is a powerful credibility hook. This pattern (vendor sites failing their own value proposition) recurs across the CMS market and validates the audit-led sales approach.

---

## Next Steps

- Send BloomReach follow-up with both reports attached
- Follow up in a few weeks as agreed
- Continue WordPress plugin Phase 1 testing
- Andres advisory meeting prep (Thursday 20 Mar)

---

## Commit Log

| Hash | Description |
|------|-------------|
| (pending) | BloomReach meeting materials, plugin expansion |
