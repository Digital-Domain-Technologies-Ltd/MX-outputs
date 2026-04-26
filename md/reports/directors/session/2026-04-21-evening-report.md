---
title: "Co-Directors Report — Content-Signal awareness + mx-site blog reorg"
description: "Added contentsignals.org recognition to the audit pipeline as a positive, informational, non-scoring signal, and reorganised mx-site blog into assets/ and profiles/ subfolders."
author: "Tom Cranstoun"
created: 2026-04-21
modified: 2026-04-21
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
---

# Co-Directors Report — Content-Signal awareness in audit

**Date:** 21 April 2026 — Evening\
**Segment:** evening (17:00 onwards)

---

## Summary

The audit pipeline now recognises Content-Signal directives from contentsignals.org — Cloudflare's robots.txt extension for declaring AI/content-use policy. Presence earns a favourable mention in the report; absence triggers a gentle suggestion. Nothing about the score changes. Every directive found is captured in `robots_txt_analysis.json` for offline analysis.

---

## What Was Done

### 1. Parser and analyser recognise Content-Signal

The robots.txt parser now detects `Content-Signal:` directives scoped to the current User-agent block and exposes them on `parsed.contentSignals[]`. The quality analyser gains `hasContentSignals` and `contentSignalCount` — strictly informational, the score formula is untouched.

### 2. Offline analysis output extended

`generateRobotsTxtAnalysis` in `llmReports.js` now classifies Content-Signal separately from dead non-standard directives. Previously it was lumped in with `Crawl-delay` and `Host` as "no known crawler reads this" — that was wrong, since contentsignals.org is a recognised evolving convention. The written analysis file now carries `contentSignals[]`, `hasContentSignals`, and a `contentSignalsSpec` pointer to the spec URL.

### 3. Report surface

The golden report skeleton gains `[ROBOTS_CONTENT_SIGNALS_STATUS]` alongside the existing discovery facts. The table handler emits `present (N)` or `absent (consider adding — see contentsignals.org)`. Rewrite guidance in the skeleton tells the reporter to treat presence as positive, absence as a single-line suggestion — never a failure.

### 4. Audit-discovery skill carve-out

The skill previously told the reporter to describe any non-standard directive as "no known crawler reads it" and listed `Content-Signal` as an example. That guidance now has an explicit exception for Content-Signal, reflecting its status as a recognised industry convention.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 (mx-audit) |
| Files changed | 4 |
| Lines added | +56 |
| Lines removed | −2 |
| Repositories | 1 submodule (mx-audit) + hub pointer bump |
| Tests | 33 passing (robotsQuality suite) |

---

## What Was Done — Late Evening (mx-site blog reorganisation)

### 5. Manifesto rewrite — remove repo framing, add founding sponsor

`mx-manifesto.html` previously framed MX-Gathering as a GitHub repository — with "pull requests to MX repositories", a step-by-step PR/branch/TODO.txt workflow, and prose describing "This repository contains:…". The community is not a repository; that framing was a leaked implementation detail. The community-and-contribution sections now describe MX-Gathering as a collaborative space and list contribution channels via email. Digital Domain Technologies Ltd is added to the Current Sponsors section as founding sponsor, with a link to digitaldomaintechnologies.com.

### 6. Blog SVG assets separated

14 SVG files lived alongside HTML in `mx-site/blog/`. They now sit in `mx-site/blog/assets/`. Every `<img>`, `<object data=…>`, `og:image`, `twitter:image`, and Schema.org `image.url` reference across the blog HTML was updated to point at the new path. Moves done with `git mv` so history is preserved. As a side effect, four pre-existing broken links in `mx-a-new-role.html` and `machine-experience-adding-metadata.html` (which referenced short names without the article prefix) are now repaired.

### 7. Profile pages moved to blog/profiles/

The four `about.*.html` pages (Tom Cranstoun, Claude Code, Claude Sonnet 4.5, Microsoft Copilot) moved from `mx-site/blog/` to `mx-site/blog/profiles/` via `git mv`. Relative depth fixed inside each moved page (`../css/` → `../../css/`, same for `js/` and `images/`). Canonical, og:url, and twitter:url absolute URLs updated to `/blog/profiles/…`. 50 files across the site carried cross-references to these pages (Schema.org `@id` "#person" pointers from every blog post and service page, plus sitemap.xml entries in both the site root and the blog subfolder) — all rewritten in a batch sed pass and verified clean by grep.

---

## By the Numbers — Full Segment

| Metric | Value |
|--------|-------|
| Commits | 2 (mx-audit content-signal + mx-outputs blog reorg) |
| Files changed (mx-outputs) | 65 |
| Lines added (mx-outputs) | +387 |
| Lines removed (mx-outputs) | -402 |
| SVGs relocated | 14 |
| Profile pages relocated | 4 |
| Cross-references rewritten | 50 files |

---

## Next Steps

- None flagged. Both features complete and verified.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 07aef2b | mx-audit | Recognise Content-Signal (contentsignals.org) in robots.txt as informational signal |
| 56faf0d | mx-outputs | mx-site: organise blog assets and profile pages (manifesto rewrite, SVG → assets/, about.* → profiles/) |
