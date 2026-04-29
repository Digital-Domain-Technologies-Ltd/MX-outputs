---
title: "Co-Directors Report — Blog Pipeline, Bio Fix, and Responsive Layout"
description: "Two audience-targeted blog post drafts added; stale author bio corrected across the full blog; blog content width made fluid for wide screens."
author: "Tom Cranstoun"
created: 2026-04-29
modified: 2026-04-29
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
---

# Co-Directors Report — Blog Pipeline, Bio Fix, and Responsive Layout

**Date:** 29 April 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Two new blog post drafts were produced from the investor and government briefing documents, giving the site dedicated audience-targeted content for those stakeholder conversations. A site-wide hygiene fix corrected the author bio across all 23 published posts, replacing the stale "forthcoming book series" reference with the correct published status of MX: The Handbook (2 April 2026). A CSS layout fix replaced the fixed-width content columns with fluid `clamp()` expressions, so blog posts now use the available screen width on wide displays rather than presenting a narrow 800px column against enormous empty margins.

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

### 3. Responsive content width for wide screens

The blog stylesheets (`mx-blog.css`, `mx-unified.css`) used fixed pixel values for all content containers, leaving the site unusable on wide displays — the text column occupied roughly 25% of the screen. Three CSS variable changes replaced the fixed values with `clamp()` expressions:

- `--max-width`: `800px` → `clamp(600px, 75vw, 1100px)` — main article column
- `--max-width-wide`: `960px` → `clamp(700px, 85vw, 1400px)` — wider layout (TOC sidebar variant)
- `--mx-max-width` / `--mx-content-width`: `960px` → `clamp(800px, 85vw, 1400px)` — site-chrome containers (nav, footer, hero)

The `.post-conclusion` author card was also changed from a hardcoded `760px` to `var(--max-width)` so it scales consistently with the article body. Mobile behaviour at 768px and below is unchanged.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (mx-outputs) | 6 |
| Hub commits | 2 |
| Files changed | 31 |
| Lines added | +820 |
| Lines removed | -56 |
| Repositories | 1 submodule (mx-outputs) + hub |
| Blog posts bio-fixed | 23 |
| New draft posts | 2 (HTML + MD each) |
| CSS files updated | 2 |

---

## Why It Matters

The two new posts create dedicated, on-brand content for the investor and government stakeholder conversations that the briefing documents currently serve. Moving that argument into the blog format makes it shareable, discoverable, and linkable without distributing a private briefing document. The bio fix is a hygiene item but a visible one: any reader who checked the author details would have seen a claim that was already two weeks out of date. The layout fix corrects the single most jarring visual issue on the blog for any reader on a modern wide display.

---

## Decisions Made

- Draft posts stored as both HTML and Markdown in `blog/drafts/` — HTML is the serving format; Markdown is the editable source retained for revision cycles before publication.
- Government post bullet list converted to prose to comply with house style (sequential argument over bullet enumeration).
- CSS layout fix uses `clamp()` with capped maximums (1100px article, 1400px wide) to balance usability on large screens with readable line lengths.

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
| 9e3cd84 | mx-outputs | Regen README index: new draft posts and morning report |
| 7a90f8d | mx-outputs | Make blog content width fluid with clamp() for wide screens |
| 6a57634f | hub | Bump mx-outputs: blog bio fix, new-web drafts, morning report |
| c340c21a | hub | Docs: CHANGELOG v1.42 + REMINDERS v3.4 for 2026-04-29 morning session |
