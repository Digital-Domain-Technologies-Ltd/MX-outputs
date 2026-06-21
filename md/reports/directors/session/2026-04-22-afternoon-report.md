---
title: "Co-Directors Report — Site-Chrome Alignment, Em-Dash Policy, Submodule-Rebase Hardening"
description: "Aligned the press-release post with CogNovaMX site chrome, banned em-dashes in authored HTML and swept 301 occurrences across every blog post, and closed a silent-data-loss bug in the hub-rebase-with-submodule-pointer-conflict workflow."
author: "Tom Cranstoun"
created: 2026-04-22
modified: 2026-04-22
version: "1.0"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-22-afternoon-report.md
  purpose: "Aligned the press-release post with CogNovaMX site chrome, banned em-dashes in authored HTML and swept 301 occurrences across every blog post, and closed a silent-data-loss bug in the hub-rebase-with-submodule-pointer-conflict workflow."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Site-Chrome Alignment, Em-Dash Policy, Submodule-Rebase Hardening"]

---

# Co-Directors Report, Site-Chrome Alignment, Em-Dash Policy, Submodule-Rebase Hardening

**Date:** 22 April 2026, Afternoon
**Segment:** afternoon (12:00, 17:00)

---

## Summary

Three threads ran in this segment. First, the morning's press-release post was rendering without the CogNovaMX header, nav and footer because the html-writer skill's template was a minimal stand-alone scaffold rather than the site-chrome scaffold the older posts use. Fixed both the post and the template, so the next post the skill emits is visually indistinguishable from the rest of the blog. Second, Tom established a no-em-dashes-in-HTML policy; applied it with a full sweep of every blog HTML file (301 em-dashes replaced across 20 files, chrome and prose both). Third, a silent-data-loss bug in the hub-rebase-with-submodule-pointer-conflict workflow was identified, diagnosed, and closed with a pre-push gate, a recovery script, and a documented recipe.

---

## What Was Done

### 1. Site-chrome alignment for the press-release post

Visual check after publishing showed the new post had none of the CogNovaMX site chrome, just a dark body with the article. Root cause: the html-writer skill's `content-template.html` was a minimal scaffold that only linked `mx-blog.css` and carried a trivial footer. The existing posts use a two-stylesheet setup (`mx-unified.css` for site chrome plus `mx-blog.css` for article typography) and a full header/nav/section/footer/CTA/app.js scaffold. Rewrote both the post and the template to the site-chrome contract, documented the contract in the skill's `skill.md` so future authors cannot drift.

### 2. No-em-dashes-in-HTML policy and sweep

Tom's updated position: em-dashes are a stylistic signature of AI-authored prose and should not appear in authored HTML, neither literal `—` nor the entity `&mdash;`. Applied in three passes:

- Updated `feedback_no_html_entities_for_dashes.md` in auto-memory to replace the earlier "use literal —" rule.
- Added an em-dash ban check to the html-writer polish pass.
- Ran a full sweep across all 20 `mx-outputs/mx-site/blog/*.html` files, replacing ` — ` with `, ` and bare `—` with `-`. 301 occurrences removed. Chrome strings like `"CogNovaMX — Machine Experience"` are now `"CogNovaMX, Machine Experience"` throughout. The template carries the same form.

Books, Learn, Services, About, and the site root still carry ~775 em-dashes and remain out of scope; Tom will sweep those separately if he wants coherence across the whole site.

### 3. Submodule-rebase hardening

A pattern emerged twice in the morning: hub `git pull --rebase` hit a merge conflict on a submodule-pointer line; resolving it with `git -C <sub> checkout <winning-sha>` left the submodule detached; subsequent `git -C <sub> commit` landed on detached HEAD; `git -C <sub> push origin main` reported "Everything up-to-date" because it pushed the stale main branch; the new commit dangled unreachable. I recovered each time via cherry-pick, but the pattern is a silent-data-loss hazard and Tom asked for a proper fix.

Three-part solution shipped:

- Pre-push `Gate 0b` in `.claude/hooks/pre-push.sh` now blocks the hub push when any submodule is on detached HEAD, with the exact recovery command printed inline.
- New `scripts/reattach-submodules.sh` walks every submodule, reattaches detached ones to `main`, and cherry-picks any orphan commits back onto the branch so nothing is lost. macOS bash-3.2 compatible.
- New section in `datalake/knowledge/system/GIT-README.md` documents the correct resolution recipe: `git -C <sub> checkout main && git -C <sub> reset --hard <winning-sha>` rather than the detaching `checkout <sha>`.

The reattach script caught pre-existing drift on `mx-audit` and `mx-crm` from earlier sessions; both restored to aligned state with no loss (verified against their remote main branches).

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (afternoon) | 4 hub + 3 mx-outputs |
| Files changed (hub) | 6 |
| Files changed (mx-outputs) | 21 |
| Lines added | +449 |
| Lines removed | -335 |
| Em-dashes removed (mx-outputs/mx-site/blog/) | 301 |
| Repositories | 2 (hub + mx-outputs) |
| Pre-push gates added | 1 (Gate 0b) |
| Recovery scripts added | 1 |

---

## The Insight

Every silent-data-loss bug I caught this session had the same shape: a tool reports success ("Everything up-to-date", "All clean") when its operating assumption has been silently violated upstream. The sync-blog-discovery reconciler stripped profile URLs because its source-of-truth scan was flat while its removal rule was broad. The submodule-push reported "up-to-date" because its branch was stale while its HEAD carried new work. Both failed by reporting success on the wrong question.

The defence pattern is the same in both cases: write a gate that asks the actual load-bearing question explicitly. For the reconciler, scope-match scan and rule. For the submodule push, block at the hub level when any submodule is detached. Silent-success failures are fixed by adding the gate that makes the failure loud.

---

## Next Steps

- Optional: em-dash sweep across the rest of mx-site (books/, learn/, services/, about/, index.html, 404.html), ~775 occurrences.
- Optional: add the `type="button"` sweep for the `mobile-menu-btn` across all posts plus the template, if the IDE hint escalates.
- No urgent blockers out of this session.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 2732668 | mx-outputs | Blog: align press-release post with site chrome (header, nav, footer, unified CSS) |
| 5d65c5a | mx-outputs | Blog: strip em-dashes from press-release post (authored prose) |
| b3e5d80 | mx-outputs | Blog: strip em-dashes across all posts (sweep, 301 replacements) |
| 6f74922e | hub | Bump mx-outputs: press-release post site-chrome alignment |
| 6f64ca80 | hub | Bump mx-outputs: em-dash cleanup in press-release post |
| 11be9625 | hub | html-writer: align template with CogNovaMX site chrome; ban em-dashes in HTML |
| dc004300 | hub | Hooks+scripts: detect detached-HEAD submodules, document rebase recipe |
| d9e65f8c | hub | html-writer template: de-dash chrome strings; bump mx-outputs (sweep) |
