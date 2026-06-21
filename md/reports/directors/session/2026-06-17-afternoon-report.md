---
title: "Co-Directors Report - Blog Post Hygiene and Cockpit Source Detection Fix"
description: "Renamed a time-sensitive blog post slug, fixed a cockpit blind spot, and resolved dead links across blog discovery files."
author: "Tom Cranstoun"
created: 2026-06-17
modified: 2026-06-17
version: "1.0"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-17-afternoon-report.md
  purpose: "Renamed a time-sensitive blog post slug, fixed a cockpit blind spot, and resolved dead links across blog discovery files."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Blog Post Hygiene and Cockpit Source Detection Fix"]

---

# Co-Directors Report - Blog Post Hygiene and Cockpit Source Detection Fix

**Date:** 17 June 2026 - Afternoon
**Segment:** Afternoon (since noon)

---

## Summary

A published blog post was carrying a countdown in its title and body ("48 days from today") that would go stale at the moment of publication. The post has been renamed, its countdown language stripped, expiry and review dates added, and the full discovery stack - sitemap, llms.txt, blog index - regenerated cleanly. A deeper investigation revealed the Content Cockpit had a structural blind spot: it could not see any blog post sourced from `blog-drafts/`, treating all of them as orphans. That was fixed with a one-line scan addition.

---

## What Was Done

### 1. Blog post rename and content fix

The EU AI Act Article 50 post was originally titled "48 Days. EUR 15 Million. Does Your CMS Know What It Published?" - a countdown that would expire before the post even went live. The title, heading, slug, and two countdown phrases in the body were all updated to reference the fixed date (2 August 2026) rather than a relative count. Frontmatter expiry (2 December 2026, the Omnibus extended deadline) and a review date (1 September 2026) were added. The post was published through the Intent CMS pipeline, regenerating the sitemap, blog sitemap, llms.txt, and llms-full.txt.

### 2. Cockpit source-detection fix

The Content Cockpit was reporting the post as "page without source." Investigation found the root cause: the cockpit scans `datalake/draft-site/blog/` for source markdown but all authored blog posts live in `blog-drafts/` at the repo root. Every post sourced from there was being treated as an orphan. Adding `blog-drafts/` as a first-class scan location (three lines in `content-dashboard.cjs`) resolved the issue across all affected posts, not just this one.

---

## Why It Matters

Content with baked-in relative dates degrades automatically. The Article 50 post is time-sensitive by nature; making its anchor a fixed calendar date rather than a countdown means it remains accurate as a reference piece after the deadline passes. The cockpit fix removes a long-standing false alarm that was masking the real state of blog content from the operator view.

---

## The Insight

The cockpit's orphan detection is slug-based: it joins source markdown to published HTML by filename. The join only works if the source lives in a directory the cockpit scans. The `blog-drafts/` directory was the original source location before the Intent CMS migration and never got added to the scan list - a quiet gap that produced correct-but-misleading "no source" labels for the entire pre-migration corpus.

---

## Decisions Made

- Expiry date set to 2 December 2026 (Omnibus extended deadline) so the post flags for retirement at the right time
- `blog-drafts/` added as a permanent first-class scan root in the cockpit rather than a migration note, because the migration is incremental and the posts there are real

---

## Next Steps

- Publish the Article 50 post publicly when ready (currently live at the URL, no further promote step needed)
- Review remaining `blog-drafts/` posts for any other time-relative language before they publish
