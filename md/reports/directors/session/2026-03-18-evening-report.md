---
title: "Co-Directors Report — BloomReach Meeting & Plugin Expansion"
created: "2026-03-18"
segment: "evening"
version: "1.0"
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
- **Drupal module** (`drupal/mx_cogify/`) — PHP module for Drupal 10/11
- **Squarespace snippet** (`squarespace/mx-cogify.html`) — Code Injection script
- README updated with new platforms, directory tree, and tags

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 0 (pending step-commit) |
| Files changed (mx-crm) | 4 new (outreach/2026-03-18/) |
| Files changed (mx-plugin) | 1 modified + new dirs |
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
