---
title: "Co-Directors Report — Printworks Audit: Clean Sheet, Then Fix the Two Gaps"
created: "2026-03-30"
x-mx-segment: "afternoon"
version: "1.0"
author: Tom Cranstoun
audience: stakeholders
confidential: true
---

# Printworks Audit: Clean Sheet, Then Fix the Two Gaps

A focused session: run a fresh audit against allabout.network/mx/printworks/index.html, clear all previous reports, then fix the two enhancement opportunities the audit identified. Four commits across four repositories.

## By the Numbers

- **4 commits** across 4 repositories (MX-hub, allaboutv2, mx-crm, mx-outputs)
- **9 HTML pages + 1 llms.txt** audited from the printworks entry point
- **0 Pa11y issues** across all HTML pages (WCAG 2.1 AA)
- **100/100** AI agent suitability (served and rendered)
- **92/100** SEO average across HTML pages
- **6/6 AI agents** return HTTP 200
- **14 internal links** on printworks page (up from 3)

## What Was Done

### Fresh Printworks Audit

Cleared the previous report and PDF, then ran a full 10-page audit from the printworks entry point. The crawler discovered and audited pages across printworks, the-books, mx principles, and cognovamx-website sections.

**Scores:**

| Dimension | Score | Band |
|-----------|-------|------|
| Performance | 90/100 | Excellent |
| Accessibility | 100/100 | Excellent |
| SEO | 92/100 | Excellent |
| AI Agent Suitability | 100/100 | Excellent |

The complete metadata stack was verified: Open Graph, Twitter Cards, Schema.org JSON-LD, 7 MX governance tags, llms.txt linked from every page, robots.txt clean with no AI bot restrictions.

### Two Fixes Applied

The audit identified two minor enhancement opportunities:

**1. Content Depth (SEO content length score: 0.31/1.0)**

The printworks landing page was brief. Added:

- A new "How It Works" section — 5-step numbered process explaining the Printworks pipeline from content audit through to digital companion
- Expanded descriptions across all existing sections: richer list items, more context on LPC partnership, methodology detail in services, audience specifics
- Closing sentence in "Our Position" linking the explicit-over-implicit MX principle to publishing

**2. Internal Linking (3 links, score: 0.22/1.0)**

Wove 12 contextual internal links into body text, targeting:

- key-principles, the-books, handbook, introduction (in "What Makes Us Different" and "Built on Real Print Expertise")
- what-is-mx, our-services, implementation-examples (in "What We Do")
- why-mx-matters (in "Who We Work With")
- explicit-over-implicit (in "Our Position")
- Expanded Explore nav from 2 to 4 items (added Our Services and About CogNovaMX)

All 14 link targets verified to exist on disk before commit.

### Report and PDF

Fresh audit report at `mx-crm/outreach/2026-03-30/printworks-report.md` with matching PDF at `mx-outputs/pdf/outreach/2026-03-30/printworks-report.pdf`. Clean markdownlint (0 errors).

## What Was Not Done

- No changes to other pages (audit found no issues elsewhere)
- No CSS changes (existing styles handle the new content)
- No Schema.org changes (existing Organization schema is complete)

## Decisions

- **Content additions are factual, not promotional.** The new "How It Works" section describes actual process steps. No superlatives added.
- **Links are contextual, not decorative.** Every internal link appears where a reader would naturally want to explore deeper, not bolted on as a list.

## Next Steps

- Re-run audit after deployment to confirm SEO content length score improved
- Consider whether the printworks section needs its own sitemap entry (currently covered by mx-sitemap.xml)
