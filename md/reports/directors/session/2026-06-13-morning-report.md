---
title: "Co-Directors Report - Cockpit View System and Hover Intelligence"
description: "MX Content Cockpit gains six views, hover-float metadata preview, and a persistent description bar; cog and manual updated."
author: "Tom Cranstoun"
created: 2026-06-13
modified: 2026-06-13
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-13-morning-report.md
  purpose: "MX Content Cockpit gains six views, hover-float metadata preview, and a persistent description bar; cog and manual updated."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Cockpit View System and Hover Intelligence"]
---

# Co-Directors Report - Cockpit View System and Hover Intelligence

**Date:** 13 June 2026 - Morning
**Segment:** Morning (since midnight)

---

## Summary

The MX Content Cockpit (`npm run cockpit`) gained two operator-experience features: a six-view dropdown that lets the operator browse Content, Full tree, Assets, PRD/Docs, Scripts, and Manuscripts in the same panel, and a hover-float metadata card on every tree leaf that surfaces title, kind, stage, description, tags, and missing readiness signals without requiring a click. A persistent description bar above the detail pane keeps the selected item's purpose visible while the preview pane scrolls. Both features were propagated to the action-cog and the operator manual. A batch of 11 new audit deliveries also landed in mx-outputs from a parallel session.

---

## What Was Done

### 1. Cockpit view system

A view dropdown in the header switches the tree between six modes. Content is the existing pipeline view (blog, pages, landers, registry, exceptions). Full tree, Assets, PRD/Docs, Scripts, and Manuscripts each walk different parts of the repo and surface their files as a navigable folder tree. Each non-Content view fetches `/api/view?name=X` from a new server endpoint and replaces the tree; the Content view is stashed in memory at startup so switching back is instant. Content-specific controls (kind/stage filters, import and commit buttons) hide when a non-Content view is active. Every leaf in any view opens a source preview via the existing guarded `/preview/` route.

### 2. Hover-float metadata preview and description bar

Hovering over a tree leaf raises a floating card to the right of the tree panel, showing the item's title, kind, stage, MX description (up to four lines), tags (up to six), and missing readiness signals in red. The float hides 80ms after the pointer leaves the tree to prevent flicker. A slim description bar above the detail pane shows the `description` frontmatter field of the currently-selected item and stays in place while the preview pane scrolls.

Both features required storing the actual description string in the IDX payload (previously only `hasDescription` boolean was tracked) and propagating `tags` and `readinessMissing` arrays so the hover float has data without a second server call.

### 3. Documentation propagation

The action-cog (`scripts/cogs/content-dashboard.cog.md`) and the operator manual (`mx-canon/mx-maxine-lives/manuals/manual-content-dashboard.cog.md`) were updated to cover all three new features: version bumps, extended `x-mx-contextProvides`, new sections in the `usage` prose and the manual body. Both cogs validated clean.

### 4. Audit batch deliverables

A parallel session ran the audit pipeline for 11 domains and committed the results to mx-outputs: crowdfavorite.com, dkd.de-de, dotfusion.com, enhancely.ai, sibotacademy.pl-en, specification.website, stackoptic.com, typo3.com, typo3.org, www.contentful.com, www.dkd.de-de. Updates also landed for atmors and mx.allabout.network from re-runs. 284 files, ~31k lines.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 2 (mx-outputs committed; hub commit pending Step 3) |
| mx-outputs files changed | 284 |
| mx-outputs lines added | +31 166 |
| Repositories | 2 (hub + mx-outputs) |
| New audit deliveries | 11 domains |
| New cockpit views | 5 (Full tree, Assets, PRD/Docs, Scripts, Manuscripts) |
| New server endpoints | 1 (`/api/view`) |

---

## Why It Matters

The cockpit previously showed only web-content pipeline state. Adding Assets, PRD/Docs, Scripts, and Manuscripts turns it into a general repo-browsing surface - operators can inspect any part of the estate, see frontmatter descriptions without opening files, and navigate the PRD and manuscript corpus in the same tool they use for content management. The hover float cuts the cognitive overhead of scanning a dense tree: a glance at any item gives enough context to know whether to click it.

---

## Next Steps

- Verify the cockpit view switcher in a live browser before the end-of-day close.
- Consider adding asset preview (image rendering) for the Assets view.
- Consider adding action buttons (cog validate, regen indexes) in the PRD view.

---

## Commit Log

| Hash | Description |
|------|-------------|
| e3b96ee7 | audit(batch): add 2026-06-12 batch deliverables for 11 domains |
| 479b3984 | feat(cockpit): view switcher, hover float, description bar |

</content>
</invoke>