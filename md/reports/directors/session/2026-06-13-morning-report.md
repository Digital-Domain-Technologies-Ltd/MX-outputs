---
title: "Co-Directors Report - Cockpit View System and Hover Intelligence"
description: "MX Content Cockpit gains six views, hover-float metadata preview, and a persistent description bar; cog and manual updated."
author: "Tom Cranstoun"
created: 2026-06-13
modified: 2026-06-13
version: "1.0"

type: report
tags: [directors-report, session, morning]
mx:
  status: active
  audience: [business]
  confidential: true
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

### 1. Audit collect-phase debug library

A deterministic debug library (`mx-reginald/audit/lib/debug-run.js`) was added to the audit suite alongside a CLI wrapper (`scripts/audit-debug.js`, `npm run audit:debug`), an action-cog (`scripts/cogs/mx-audit-debug.cog.md`), and a routing skill (`.claude/skills/audit-debug/skill.md`). When a collect phase fails, the tool identifies the first failing gate, shows an evidence snapshot from the cached results, and recommends a targeted fix - replacing the previous approach of manual inspection of raw JSON. The operator manual and QUICKSTART were updated to document the `--resume` flag and the debug workflow.

### 2. Cog relatedTo scanner and update-cogs-and-docs workflow

A deterministic scanner (`scripts/check-cog-related-to.cjs`, `npm run cog:related-to`) checks every action-doc cog for a `relatedTo` field that lists all related surfaces. A fix mode (`npm run cog:related-to:fix`) inserts a skeleton `relatedTo: []` on cogs missing it. The `/update-cogs-and-docs` skill was written to govern the "update all related surfaces" workflow and is now the canonical entry point for propagating session changes across cogs, manuals, manuscripts, and mx-site pages. A cog authoring template (`mx-canon/ssot/templates/cog-template.md`) was added to give a ready-to-fill starting point for new cogs.

### 3. MX-aware universal editor PRD and prompt library

A PRD (`mx-canon/mx-os/mx-aware-editor-prd.cog.md`) and accompanying prompt library (`mx-canon/mx-os/mx-aware-editor-prompt-library.cog.md`) were committed from a parallel session. These define the MX-aware editor feature, its integration contract, and the reusable prompt patterns it will rely on.

### 4. Deterministic MCP check library

A check library (`d47a8c38`) was added to provide deterministic tool-use verification for Claude's MCP integrations.

### 5. Cockpit view system

A view dropdown in the header switches the tree between six modes. Content is the existing pipeline view (blog, pages, landers, registry, exceptions). Full tree, Assets, PRD/Docs, Scripts, and Manuscripts each walk different parts of the repo and surface their files as a navigable folder tree. Each non-Content view fetches `/api/view?name=X` from a new server endpoint and replaces the tree; the Content view is stashed in memory at startup so switching back is instant. Content-specific controls (kind/stage filters, import and commit buttons) hide when a non-Content view is active. Every leaf in any view opens a source preview via the existing guarded `/preview/` route.

### 2. Hover-float metadata preview and description bar

Hovering over a tree leaf raises a floating card to the right of the tree panel, showing the item's title, kind, stage, MX description (up to four lines), tags (up to six), and missing readiness signals in red. The float hides 80ms after the pointer leaves the tree to prevent flicker. A slim description bar above the detail pane shows the `description` frontmatter field of the currently-selected item and stays in place while the preview pane scrolls.

Both features required storing the actual description string in the IDX payload (previously only `hasDescription` boolean was tracked) and propagating `tags` and `readinessMissing` arrays so the hover float has data without a second server call.

### 3. Documentation propagation

The action-cog (`scripts/cogs/content-dashboard.cog.md`) and the operator manual (`mx-canon/mx-maxine-lives/manuals/manual-content-dashboard.cog.md`) were updated to cover all three new features: version bumps, extended `x-mx-contextProvides`, new sections in the `usage` prose and the manual body. Both cogs validated clean.

### 4. Link-paths bug fix

The link checker and fixer (`scripts/lib/link-paths.cjs`) had a latent bug: host-absolute URLs like `/about/contact.html` in markdown were treated as internal relative paths. `path.resolve(fileDir, '/about/contact.html')` ignores `fileDir` entirely and resolves from the filesystem root, so the fixer found no file there, searched the basename index, and relocated the link to the only `contact.html` in the repo - `mx-crm/dotfusion/data/contact.html`. The damage was caught by Gate 22 during the session-close push, which blocked until the bad rewrites were reverted. The root fix is a single guard in `resolveMarkdownTarget`: any `pathPart` starting with `/` is now returned as `external` immediately, leaving host-absolute web URLs untouched. All existing tests pass; the fix is live at `4b0410d3`.

### 5. Audit batch deliverables

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
| 605316d6 | feat(cog-workflow): update-cogs-and-docs skill, relatedTo scanner, cog template |
| f91bd5d9 | feat(audit): /audit-debug skill + relatedTo on debug cog |
| 1b928048 | docs(audit): add debug tool and --resume flag to README and QUICKSTART |
| 07ee148f | feat(audit): deterministic debug library for collect-phase failures |
| d47a8c38 | feat(check-library): deterministic MCP check library for Claude |
| bc2c99dc | feat(mx-os): MX-aware universal editor PRD and prompt library |
| 712caf5a | fix(gate-12): document /audit-debug skill in architecture cog |
| bb1522ef | fix(links): revert bad contact.html rewrites in draft-site sources |
| 4b0410d3 | fix(link-paths): treat host-absolute paths as external in markdown |

</content>
</invoke>