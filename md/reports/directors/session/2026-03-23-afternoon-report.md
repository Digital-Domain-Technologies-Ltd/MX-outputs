---
title: "Co-Directors Report — Invisible Users Rebrand and Paprika Studios Audit"
created: "2026-03-23"
segment: "afternoon"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidential: true
---

# Co-Directors Report — Invisible Users Rebrand and Paprika Studios Audit

**Date:** 23 March 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

Completed a full rebrand of "The Invisible Users" to "MX: The Handbook" across all repositories — 165 files, every slug, directory, script name, and package reference updated. Also ran a comprehensive web audit for Paprika Studios (paprikastudios.eu), fixed three Puppeteer bugs in mx-audit that were blocking SPA audits, and built a demo MX-compliant site as a client deliverable.

---

## What Was Done

### 1. "Invisible Users" → "MX: The Handbook" Rebrand

Tom identified that the book title "The Invisible Users" was still referenced throughout the codebase under its working title. Performed a systematic rename across all repositories:

- Title text: "The Invisible Users" → "MX: The Handbook" (all book-title references)
- Slug: `invisible-users` → `mx-handbook` (URLs, paths, CSS classes)
- Package name: `the-invisible-users` → `mx-hub`
- Directory: `allaboutv2/invisible-users/` → `allaboutv2/mx-handbook/`
- Scripts: renamed sitemap generator and presentation updater
- Metadata: updated `.mx.yaml.md` files in renamed directories

Carefully preserved the MX concept term "invisible users" (AI agents as invisible visitors) which appears in philosophical/explanatory contexts — only book-title references were changed.

### 2. Paprika Studios Web Audit

Ran the full audit-site workflow against paprikastudios.eu. The site is a pure JavaScript SPA — server-side AI agents see only "You need to enable JavaScript to run this app." Key scores: Performance 65/100, Accessibility 78/100, SEO 61/100, AI Agent Suitability 56/100. Generated a comprehensive client report using the manual template.

### 3. mx-audit Puppeteer Bug Fixes

The audit exposed three bugs in the Puppeteer fallback path of `mx-audit/src/utils/sitemap.js`:

- **Wrong argument order** in `executePuppeteerOperation` call — context passed as options
- **Navigation timeout** too short for JS-heavy SPAs — increased from 20s to 60s with graceful fallback
- **Request abort race condition** — `request.abort()` on already-handled requests threw unhandled rejections

### 4. Demo MX Site for Paprika Studios

Built a four-file demo showing what MX-compliant implementation looks like: `index.html` with Schema.org JSON-LD, semantic landmarks, and external CSS; `llms.txt` cataloguing all 62 productions; `robots.txt` and `style.css`.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Files changed (rename) | 165 |
| Lines changed | +1,137 / −1,137 |
| Repositories affected | 6 (hub + 5 submodules) |
| Bugs fixed in mx-audit | 3 |
| Audit pages analysed | 4 |
| Demo files created | 4 |

---

## Decisions Made

- **Concept vs title distinction:** "Invisible users" as an MX concept (AI agents = invisible visitors) is intentionally kept in philosophical/explanatory contexts. Only the book title "The Invisible Users" was renamed.
- **Package name:** Changed to `mx-hub` (not `mx-handbook`) since the package represents the entire hub, not just the handbook.

---

## Next Steps

- Commit and push all changes across submodules and main repo
- Verify allaboutv2 build still works after the directory rename
- Send Paprika Studios audit report to Tom for review before client delivery

---

## Commit Log

| Hash | Description |
|------|-------------|
| (uncommitted) | Rename "The Invisible Users" → "MX: The Handbook" across all repos |
| (uncommitted) | Fix three Puppeteer bugs in mx-audit sitemap.js |
| (uncommitted) | Paprika Studios audit report and demo MX site |
