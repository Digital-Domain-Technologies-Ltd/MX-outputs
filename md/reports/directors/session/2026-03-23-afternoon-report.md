---
title: "Co-Directors Report — Handbook Rebrand, Repetition Fixes, and Paprika Studios Audit"
created: "2026-03-23"
x-mx-segment: "afternoon"
version: "2.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidential: true
---

# Co-Directors Report — Handbook Rebrand, Repetition Fixes, and Paprika Studios Audit

**Date:** 23 March 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

Completed a full rebrand of "The Invisible Users" to "MX: The Handbook" across all repositories — 165 files, every slug, directory, script name, and package reference updated. Also ran a comprehensive web audit for Paprika Studios (paprikastudios.eu), fixed three Puppeteer bugs in mx-audit, and built a demo MX-compliant site. Then swept the entire Handbook manuscript for repetition — eliminated duplicate code examples, over-explained concepts, and verbatim case study retellings across all chapters plus the shared Chapter 00 introduction. Net result: 181 lines removed, replaced with cross-references that make each chapter tighter whilst reinforcing the book's internal coherence.

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

### 5. Handbook Manuscript Repetition Sweep

Tom flagged concern about repetitive patterns across chapters. Systematic scan identified 9 high-severity code duplications and 6 conceptual over-explanations. All fixed:

- **Code examples:** Removed duplicate sitemap code (Ch 9), navigation/breadcrumb/form/table blocks (Ch 10), SPA div pattern (Ch 7), and added cross-references to canonical chapters
- **Standing Desk running example:** Introduced explicitly in Ch 3, acknowledged in Ch 5 when reused
- **Computational trust:** Defined once in Ch 1, all other chapters now use "(Chapter 1)" references
- **Inference/codification:** Defined once in Ch 2, trimmed in Ch 3, 5, 7, 8
- **Morning-after test:** Defined in Ch 1, detailed in Ch 8, Ch 4 and Ch 10 now cross-reference
- **Worst-machine principle:** Trimmed repeated "phones, warehouse scanners, kiosks" detail in Ch 3, 4, 6, 8, 11
- **Case studies:** Automotive client varied across Ch 5, 7, 10 to avoid verbatim repetition
- **Chapter 00 (shared):** Fixed User-Agent spoofing (3→1 full statement), Hugging Face million models (3→1), Common Crawl 44% stat (2→1)

10 files edited, 42 lines added, 223 lines removed.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Files changed (rename) | 165 |
| Lines changed (rename) | +1,137 / −1,137 |
| Repositories affected | 6 (hub + 5 submodules) |
| Bugs fixed in mx-audit | 3 |
| Audit pages analysed | 4 |
| Demo files created | 4 |
| Chapters edited (repetition) | 10 |
| Lines removed (repetition) | −223 |
| Lines added (cross-refs) | +42 |

---

## Decisions Made

- **Concept vs title distinction:** "Invisible users" as an MX concept (AI agents = invisible visitors) is intentionally kept in philosophical/explanatory contexts. Only the book title "The Invisible Users" was renamed.
- **Package name:** Changed to `mx-hub` (not `mx-handbook`) since the package represents the entire hub, not just the handbook.

---

## Next Steps

- Verify allaboutv2 build still works after the directory rename
- Send Paprika Studios audit report to Tom for review before client delivery
- Regenerate book HTML outputs with updated manuscript content

---

## Commit Log

| Hash | Description |
|------|-------------|
| 145de366 | Update submodule pointers — afternoon session |
| d991ad43 | Rename 'The Invisible Users' to 'MX: The Handbook' across entire repository |
| 7b85dd30 | Update documentation: changelog, learnings, reminders, mx-outputs index |
| (uncommitted) | Humanise manuscripts: remove repetition, add cross-references |
