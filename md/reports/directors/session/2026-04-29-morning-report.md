---
title: "Co-Directors Report — Infrastructure Hardening, Hook Registration, Hero Layout Fix"
description: "CSS layout widened further; hero whitespace eliminated; all Claude Code hooks registered; tg-community refresh automated; manuscripts cleaned up."
author: "Tom Cranstoun"
created: 2026-04-29
modified: 2026-04-29
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
---

# Co-Directors Report — Infrastructure Hardening, Hook Registration, Hero Layout Fix

**Date:** 29 April 2026 — Morning (updated through afternoon)
**Segment:** morning

---

## Summary

The session continued beyond the initial morning work into a series of infrastructure improvements. The CSS layout clamp values were widened further after the first pass was still too conservative. A large empty dark band on 15 section-hero pages (Learn, Services, About) was traced to `min-height: 50vh` compounding with heavy padding on a tall display and eliminated. All 19 Claude Code hook scripts that existed in `.claude/hooks/` but were never registered were wired into `settings.json` — none of them were firing. The `tg-community` read-only submodules are now automatically refreshed during step-commit. Manuscript references to the mx-audit tool were cleaned up to reflect its current status as a proprietary service rather than a public repository.

---

## What Was Done

### 1. New audience-targeted blog post drafts

Two HTML blog post drafts were converted from the raw investor and government briefing documents:

- **The new web: why the agentic era needs infrastructure, not just intelligence** — investor and business audience.
- **The new web: building machine-inclusive national digital infrastructure** — government and public-sector audience.

Both drafts land in `mx-outputs/mx-site/blog/drafts/` with full site chrome, Schema.org JSON-LD, `noindex` robots meta, and `mx:status: draft`. Markdown sources were deleted after HTML was confirmed correct.

### 2. Author bio corrected across the full blog

All published HTML posts were updated to reflect MX: The Handbook's publication date (2 April 2026). One post had a duplicate inline bio that was also removed.

### 3. CSS layout widened to fluid clamp() expressions

Fixed-pixel content containers replaced with `clamp()` across `mx-blog.css`, `mx-unified.css`, `mx-hero.css`, `mx-faq.css`, and `mx-appendix.css`. After an initial pass at `75vw/1100px` proved too narrow on Tom's display, values were increased to `90vw/1400px`. The nav header was also aligned to match the content column width on blog pages.

### 4. Hero whitespace eliminated on section pages

15 pages across Learn, Services, and About showed a large empty dark area between the hero heading and first content section. Root cause: `.hero--section` had `min-height: 50vh` which on a 1800px-tall display forced 900px minimum height for a hero whose content occupied ~250px. The property was removed entirely and padding reduced from `8rem 0 4rem` to `6rem 0 3rem`.

### 5. All Claude Code hooks registered

19 hook scripts existed in `.claude/hooks/` but the `settings.json` had no `hooks` key — none were firing. All were registered across the correct event types (UserPromptSubmit, SessionStart, PreToolUse, PostToolUse). The `pre-commit.sh` and `pre-push.sh` detached-HEAD gates were also updated to skip `tg-community/*` read-only submodules, which are always detached by design.

### 6. tg-community refresh automated in step-commit

The four `tg-community/*` submodules are now pulled from upstream at the start of every step-commit run. Previously they were never refreshed automatically.

### 7. Cloudflare cache purge added to step-commit

Cache purge was missing from the workflow, which meant CSS and HTML changes were invisible on the live site until manually purged. Added as mandatory Step 9b-ii after every push.

### 8. Manuscript cleanup

References to mx-audit in the manuscript files were updated to reflect its current status as a proprietary internal service (not a public repository). Stale paths and dead links were also corrected.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits (full day) | 14 |
| mx-outputs commits | 8 |
| mx-audit commits (bumped) | 1 |
| Hooks registered | 19 |
| CSS files updated | 5 |
| Hero pages fixed | 15 |
| Blog posts bio-fixed | 23 |
| New draft posts | 2 |

---

## Why It Matters

The hook registration is the highest-value item: 19 safety gates (readonly enforcement, manuscript guards, compliance checks, Cloudflare purge, blog sync) were written but had never fired in production. The hero whitespace fix removes a layout problem visible on every Learn, Services, and About page. The CSS widening means the site now uses available screen real estate on wide displays — a visible improvement on any modern monitor.

---

## Decisions Made

- Hook registration uses relative paths so the hub is portable; `tg-community/*` read-only submodules are skip-listed in both pre-commit and pre-push gates rather than removed from the check.
- `pre-push.sh` called with `</dev/null` from Claude Code hooks so Gates 0 and 0b (submodule drift, detached HEAD) fire while the git-hook stdin loop gets empty input gracefully.
- CSS clamp maximums set to `1400px` for content and `1600px` for wide/hero containers — balancing wide-screen usability with readable line lengths.

---

## Next Steps

- Review and approve both blog drafts before promoting to `blog/` for publication
- Run sitemap update after promotion

---

## Commit Log

| Hash | Repository | Description |
|------|-----------|-------------|
| ab2fe98 | mx-outputs | Fix author bio across all blog posts: Handbook now published |
| ae8486b | mx-outputs | Add new-web blog post drafts: investor and government versions |
| 096be29 | mx-outputs | Add co-directors morning report 2026-04-29 |
| 9e3cd84 | mx-outputs | Regen README index |
| 7a90f8d | mx-outputs | Make blog content width fluid with clamp() |
| 6a57634f | hub | Bump mx-outputs: blog bio fix, new-web drafts, morning report |
| c340c21a | hub | Docs: CHANGELOG v1.42 + REMINDERS v3.4 |
| 7facba12 | hub | Bump mx-outputs: fluid blog layout, updated morning report |
| 1abcd447 | hub | Docs: CHANGELOG v1.43 for 2026-04-29 afternoon |
| 1d95d468 | hub | Fix mx-reginald/cog-snapshot.cog.md: deprecated and naming violations |
| 69be6ada | hub | Manuscripts: fix stale paths and dead links in mx-audit references |
| e72329f7 | hub | Bump mx-audit: stale-code cleanup, infill-golden test fix, docs sync |
| c294edcf | hub | Manuscripts: reframe Web Audit Suite as proprietary service |
| cb230c85 | hub | Bump mx-outputs: responsive CSS layout, blog draft cleanup, morning report v1.1 |
| 8f3f2dc7 | hub | Add Cloudflare cache purge to step-commit Step 9; bump mx-outputs hero whitespace fix |
| c36130cb | hub | Register all Claude Code hooks in settings.json; skip read-only submodules in pre-commit |
| d3e98e3c | hub | Retire in-tree manuscript web/ staging |
| 8512b3f9 | hub | Skip tg-community read-only submodules in pre-push and pre-commit gates |
| 1357801e | hub | step-commit: refresh tg-community read-only submodules in Step 1 |
