---
title: "Co-Directors Report — Asset Path Anchoring: One Bug Becomes a Principle"
created: "2026-04-11"
x-mx-segment: "morning"
version: "1.0"
author: Tom Cranstoun
audience: business
confidential: true

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-11-morning-report.md
---

# Co-Directors Report — Asset Path Anchoring: One Bug Becomes a Principle

**Date:** 11 April 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

A single user-visible bug — an unstyled 404 page on `mx.allabout.network/blogs/` — surfaced a deeper class of error: relative asset paths in HTML break the moment a page is served from a URL its author did not anticipate. We fixed the visible failure, audited the rest of the site for the same pattern, found three more broken pages, hardened them, and then promoted the lesson into Canon: a new MX principle, a new section in the HTML writing guide, and a new "Common Mistake" entry in the Protocols manuscript chapter on technical advice. We also stripped a personal address from every page in the public CogNovaMX site footer.

---

## What Was Done

### 1. Fixed the unstyled 404

The custom 404 page used relative `href`/`src` attributes. When the worker served it for a request at `/blogs/`, the browser resolved CSS, JS, and image URLs against `/blogs/` and got 404s in turn, leaving the page as unstyled markup with broken images. Repaired in `mx-outputs/mx-site/404.html` by anchoring all asset paths at `/`.

### 2. Audited mx-site for the same fault

Three more pages had the same hidden bug — subdirectory pages linking to a root-level avatar via a relative path that resolved into the subdirectory and 404'd. Fixed:

- `about/printworks.html`
- `learn/mx-principles.html`
- `books/footnotes.html`

Hardened `index.html` too — it happened to work because it was only served at `/`, but the same fragility was waiting for the next routing change.

### 3. Promoted the lesson into Canon

A user-facing bug that survives a code review is not a code-review failure — it is a missing principle. Three documents updated:

- **`mx-canon/ssot/principles.cog.md`** — added Principle 14, "Root-Anchored Asset Paths." Sibling to Principle 5 (Context-Preserving References): #5 governs links between documents, #14 governs the assets a single document needs to render itself. Old #14 became #15.
- **`mx-canon/ssot/mx-html-writing-guide.cog.md`** — added a full "Asset Path Anchoring (Required)" section with the rule, the failure mode, the complete list of fetching attributes, the demo-bundle exception, and a copy-to-different-depth test. Added checklist item 12.
- **`datalake/manuscripts/mx-books/mx-protocols/protocols/chapter-12-technical-advice.md`** — added "Mistake 7: Relative Asset Paths" to the Common Mistakes section, written in timeless prose using the 404 worker scenario as the motivating example.

### 4. Removed personal address from public footers

Stripped `<p>120 Main Street, Largs, Scotland</p>` from 47 footers across `mx-outputs/mx-site/`. The lpc demo (a separate fictional site for a real Largs business) was deliberately left untouched.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| HTML files repaired (asset paths) | 5 |
| HTML files cleaned (address removal) | 47 |
| Canon documents updated | 3 |
| New MX principles | 1 |
| Manuscript chapters updated | 1 |
| Repositories | 2 (main + mx-outputs) |

---

## The Insight

The bug was in one file. The principle was missing from the whole stack. A code reviewer reading any of the four broken HTML pages would not have flagged the relative paths, because the rule did not exist yet. The audit found the rest only because we knew what to look for after the visible failure. This is why MX builds principles, not lint rules: a principle teaches the reviewer; a lint rule only catches what someone already thought to encode.

The deeper pattern: a page must be understandable in isolation, regardless of the URL it is served from. That sentence is now Canon.

---

## Next Steps

- Push `mx-outputs` and bump submodule pointer in main
- Purge Cloudflare cache for the affected pages so the fix goes live
- Consider whether `/blogs/` should 301-redirect to `/blog/` (the URL that triggered the original bug — currently only `/blogs/mx/*` redirects)
- Add the asset-path rule to any HTML lint or audit tool that sweeps the site

---

## Commit Log

| Hash | Description |
|------|-------------|
| (pending) | Strip address and harden asset paths across mx-site |
| (pending) | Add Principle 14 (Root-Anchored Asset Paths); update HTML writing guide and Protocols chapter 12 |
| (pending) | Update mx-outputs submodule pointer |
