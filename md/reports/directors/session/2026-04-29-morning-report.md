---
title: "Co-Directors Report — Blog Content Pipeline: New Posts and Bio Fix"
description: "Two audience-targeted blog post drafts added; stale author bio corrected across the full blog."
author: "Tom Cranstoun"
created: 2026-04-29
modified: 2026-04-29
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
---

# Co-Directors Report — Blog Content Pipeline: New Posts and Bio Fix

**Date:** 29 April 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Two new blog post drafts were produced from the investor and government briefing documents, giving the site dedicated audience-targeted content for those stakeholder conversations. A site-wide hygiene fix corrected the author bio across all 23 published posts, replacing the stale "forthcoming book series" reference with the correct published status of MX: The Handbook (2 April 2026). The content pipeline now has both the assets and the consistent metadata it needs to support outreach to investor and government audiences.

---

## What Was Done

### 1. New audience-targeted blog post drafts

Two HTML blog post drafts were converted from the raw investor and government briefing documents:

- **The new web: why the agentic era needs infrastructure, not just intelligence** — investor and business audience. Covers the 1990s fragmentation analogy, the machine adoption curve, MX as the missing contract layer, COGS economics (inference vs execution), and The Gathering as governance venue.
- **The new web: building machine-inclusive national digital infrastructure** — government and public-sector audience. Same architecture, framed around national resilience, cross-agency interoperability, sustainability, and digital trust. Bullet list from the original briefing converted to prose per house style.

Both drafts land in `mx-outputs/mx-site/blog/drafts/` with full site chrome (header, nav, footer, CTA), Schema.org `BlogPosting` JSON-LD, `noindex` robots meta, and `mx:status: draft`. Markdown sources retained alongside the HTML.

### 2. Author bio corrected and standardised across the full blog

The author bio in every blog post referred to the "forthcoming MX book series" despite MX: The Handbook having been published on 2 April 2026. All 23 published HTML posts were updated in a single pass to read "author of the MX book series, including MX: The Handbook (published 2 April 2026)."

One post (`dita-and-mx-a-comparison.html`) had a duplicate inline `<p class="author-bio">` inside the article body in addition to the canonical `post-conclusion` aside. The duplicate was removed; every post now uses the canonical structure exclusively.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (mx-outputs) | 2 |
| Hub commit | _pending_ (Step 3) |
| Files changed | 28 |
| Lines added | +724 |
| Lines removed | -50 |
| Repositories | 1 submodule (mx-outputs) + hub |
| Blog posts bio-fixed | 23 |
| New draft posts | 2 (HTML + MD each) |

---

## Why It Matters

The two new posts create dedicated, on-brand content for the investor and government stakeholder conversations that the briefing documents currently serve. Moving that argument into the blog format makes it shareable, discoverable, and linkable without distributing a private briefing document. The bio fix is a hygiene item but a visible one: any reader who checked the author details would have seen a claim that was already two weeks out of date.

---

## Decisions Made

- Draft posts stored as both HTML and Markdown in `blog/drafts/` — HTML is the serving format; Markdown is the editable source retained for revision cycles before publication.
- Government post bullet list converted to prose to comply with house style (sequential argument over bullet enumeration).

---

## Next Steps

- Review and approve both drafts before promoting to `blog/` for publication
- Run `node scripts/update-blog-sitemap.cjs` after promotion (drafts are excluded from sitemap by design)
- Consider social card images for both posts before publish

---

## Commit Log

| Hash | Repository | Description |
|------|-----------|-------------|
| ab2fe98 | mx-outputs | Fix author bio across all blog posts: Handbook now published |
| ae8486b | mx-outputs | Add new-web blog post drafts: investor and government versions |
| 096be29 | mx-outputs | Add co-directors morning report 2026-04-29: blog pipeline and bio fix |
| _pending_ | hub | Bump mx-outputs pointer |
