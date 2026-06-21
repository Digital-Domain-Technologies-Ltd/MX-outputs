---
title: "Co-Directors Report - Three-Part AI-Readability Blog Series Published"
description: "Authored and published a cross-linked three-part blog series on how AI systems read the web, wired into the site's machine-readable index as a lead-gen funnel to the Web Audit Suite."
author: "Tom Cranstoun"
created: 2026-06-11
modified: 2026-06-11
version: "1.0"

type: report
tags: [directors-report, session, morning]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-11-morning-report.md
  purpose: "Authored and published a cross-linked three-part blog series on how AI systems read the web, wired into the site's machine-readable index as a lead-gen funnel to the Web Audit Suite."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Three-Part AI-Readability Blog Series Published"]

---

# Co-Directors Report - Three-Part AI-Readability Blog Series Published

**Date:** 11 June 2026 - Morning
**Segment:** morning (since midnight)

---

## Summary

We published a three-part blog series on how AI systems read the web, taking a reader from how their content becomes training data, through what robots.txt does and does not control, to why server-side rendering is the precondition for any of it. All three are live on mx-site, cross-linked as a series, and featured in the site's machine-readable index. Each post closes on the same Web Audit Suite call to action, so the series doubles as a self-contained lead-gen funnel.

---

## What Was Done

### 1. Three-Part Blog Series Authored and Published

Three posts were written in house voice and published to mx-site (Zone 3, indexed):

- **Your Site Is Already Training AI Models** - how Common Crawl turns published pages into LLM training data, and why presence in the crawl is not the same as good representation.
- **What Most robots.txt Guides Get Wrong About AI Crawlers** - why AI crawlers are not a single block-or-allow category, how training, search and user-triggered crawlers differ across the major operators, and which ones ignore robots.txt.
- **What AI Crawlers See When They Can't Run Your JavaScript** - why almost no AI crawler runs JavaScript, so server-side rendering is the precondition for everything machine-readable.

Each post passed the full publish gate set (MX validation, link paths, spell, source-frontmatter embed, WCAG/Schema/SEO compliance). The provided source draft for part two named no specific legislation, so no legal disclaimer was required; its em-dashes were converted to house style and its title corrected from a stale count.

### 2. Series Cross-Linking and Funnel Wiring

The three posts were linked into a full mesh (each references the other two) and the framing was carried from "a pair" to "a three-part series" across all sources. The series was added to the curated Featured articles block of the site's `llms.txt` source so an agent fetching the index sees the set, and `llms.txt` and `llms-full.txt` were regenerated. Both sitemaps and the blog index cards were updated by the publish pipeline.

### 3. Session Close and State Reconciliation

On close, the working tree showed the published HTML committed and pushed but the hub-side source markdown still uncommitted. The three durable draft-site sources, the funnel source, and the mx-outputs pointer bump were committed to the hub by explicit path, leaving an unrelated set of audit test fixtures and a separate infrastructure commit untouched.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (this segment) | 3 |
| Repositories | 2 (MX-hub, mx-outputs) |
| Blog posts published | 3 |
| Hub source files (blog series) | 5 files, +678 / -1 |
| Published artefacts (mx-outputs) | 8 files, +2525 / -45 |
| New machine-readable funnel entries | 3 (Featured articles) |

---

## Why It Matters

This is sales content disguised as practitioner writing. Each post answers a question prospects actually ask - "is my content in AI training data", "should I block GPTBot", "why can't AI see my site" - and lands on the audit that answers it for their specific site. The series is evergreen, costs nothing to keep live, and works equally on a human reader and on an agent that fetches the index and sees three titles offered as a set.

---

## Next Steps

- Watch referral and AI-assistant traffic to the three posts and the audit page over the coming weeks to gauge funnel performance.
- Consider a fourth post only if a genuinely distinct gap appears; the current three cover archive, access, and rendering without overlap.
- Verify the CCBot IP-verification reference in part two before any external promotion (the published text describes Common Crawl's documentation generally rather than asserting a specific JSON endpoint).

---

## Commit Log

| Hash | Description |
|------|-------------|
| 5fb7ced8 | Add three-part AI-readability blog series; bump mx-outputs to published HTML (hub) |
| 2fb8eeb5 | Publish blog series to mx-site Zone 3 (mx-outputs) |
| aa6b41db | Enforce 'a check a script can do, a script does'; add draft-site freshness gate (hub, adjacent infrastructure work) |
