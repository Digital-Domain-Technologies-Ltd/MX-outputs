---
title: "Co-Directors Report — MX Handbook Press Release and Private Drafts Area"
description: "Published a press-release blog post announcing MX: The Handbook and added a robots-disallowed drafts folder under /blog/ to support unlisted work-in-progress."
author: "Tom Cranstoun"
created: 2026-04-22
modified: 2026-04-22
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-22-morning-report.md
  purpose: "Published a press-release blog post announcing MX: The Handbook and added a robots-disallowed drafts folder under /blog/ to support unlisted work-in-progress."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - MX Handbook Press Release and Private Drafts Area"]
---

# Co-Directors Report — MX Handbook Press Release and Private Drafts Area

**Date:** 22 April 2026 — Morning
**Segment:** morning (00:00–12:00)

---

## Summary

Shipped a press-release-style announcement for MX: The Handbook to the MX site blog, expanded beyond the source copy to flesh out the Five-Stage Machine Journey, the January 2026 platform launches (Alexa+, Copilot Checkout, UCP, Claude Cowork), and the "silence as a failure mode" framing that distinguishes MX failures from visible CMS errors. Alongside that, introduced a private `/blog/drafts/` area so work-in-progress posts can live on the worker without leaking into sitemap, llms.txt, llms-full.txt, or well-behaved crawlers. Also repaired a latent bug in `sync-blog-discovery.cjs` that was silently stripping `/blog/profiles/` entries from the site-level sitemap on every run.

---

## What Was Done

### 1. MX Handbook press-release post

Written directly as MX-audit-passing HTML using the html-writer skill. Lives at `mx-outputs/mx-site/blog/tom-cranstoun-launches-mx-handbook.html`. Canonical URL: <https://mx.allabout.network/blog/tom-cranstoun-launches-mx-handbook.html>. Expansions over the source press release:

- Each of the four January 2026 platform launches described operationally (what the agent actually does, not just the brand).
- New section "Silence as a failure mode" naming the *quiet abandonment* pattern — agents routing around pages they can't trust, with no error signal back to the CMS team.
- Five-Stage Machine Journey mapped to specific structural failure patterns at each stage (SPA rendering at Discovery, images-as-prices at Pricing, etc.).

### 2. Private drafts area under /blog/

New directory `mx-outputs/mx-site/blog/drafts/` with a README documenting the exclusion contract. Exclusions enforced in four places:

- `robots.txt`: explicit `Allow: /blog/` plus `Disallow: /blog/drafts/`
- `scripts/update-blog-sitemap.cjs`: skips `drafts` entry
- `scripts/generate-llms-full-txt.cjs`: `/blog/drafts/` added to `SKIP_DIRS`
- `scripts/sync-blog-discovery.cjs`: reads blog dir flat (naturally ignores subdirs)

### 3. Visual anchor for the Five-Stage Machine Journey section

Added `blog/assets/handbook-figure-03-1-agent-task-feasibility.svg` — copied from `datalake/assets/images/svg/figures/handbook/figure-03-1.svg` (the Handbook's own Chapter 3 decision tree for agent task-completion feasibility). Placed as a captioned `<figure>` directly above the Five-Stage list so the reader sees the decision logic — "Can I find the target? Can I identify the form? Do I have the required context?" — before reading the prose version. Re-using the book's own figure reinforces the "buy the book for the full treatment" message and avoids divergence between the post and the source.

### 4. Fix: sync-blog-discovery preserving subdir curations

Hub-side bug caught during the session. The reconciler treated any `/blog/*.html` URL as stale if it was not in the flat `blogFiles` set — which meant profile pages under `/blog/profiles/` (about.tom.cranstoun.html, about.claude.code.html, about.claude.sonnet.4.5.html, about.microsoft.copilot.html) were being stripped from the site-level sitemap every time the hook ran. Fixed by scoping the "stale removal" rule to top-level blog URLs only. Subdirectory URLs are now preserved regardless.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (mx-outputs) | 1 (this session) |
| Files changed | 6 |
| Lines added | +3,873 |
| Lines removed | −3,468 |
| Repositories | 2 (hub + mx-outputs) |

(Line counts are dominated by the regenerated `llms-full.txt`; the authored diff is small.)

---

## Next Steps

- Add a curated entry for the new press-release post under `## Featured articles` in `llms.txt` if it's flagship material.
- Consider whether `/blog/profiles/` should be indexed by `update-blog-sitemap.cjs` as well, or kept purely curated at the site level.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 4813d5f | mx-outputs | Blog: add MX Handbook press-release post and private drafts area |
| 713d326 | mx-outputs | Directors report: 2026-04-22 morning segment |
| 6f86c66 | mx-outputs | README: regenerate index |
| 4826522 | mx-outputs | Blog: add agent task-feasibility figure to MX Handbook press-release post |
| c8709a98 | hub | Scripts: private drafts area under /blog/ and fix profile-sitemap stripping |
| bfb40f48 | hub | Docs: changelog + reminders for press-release post and drafts area |
| bcc237f7 | hub | Learnings: sitemap reconciler scope-match rule |
| afb51e63 | hub | Bump mx-outputs: add agent task-feasibility figure to press-release post |
