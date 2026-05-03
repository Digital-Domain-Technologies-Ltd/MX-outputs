---

title: "Co-Directors Report — Free Book TOC, Reginald Rework, Footnotes Appendices"
created: "2026-03-19"
version: "2.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "morning"
  audience: stakeholders
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-19-morning-report.md
---


# Co-Directors Report — Free Book TOC, Reginald Rework, Footnotes Appendices

**Date:** 19 March 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Three streams of work this morning: the free book PDF now has a professional overarching table of contents with dynamically calculated page numbers; the Reginald registry site has been restructured with consolidated CSS and new pages; and the footnotes page gains an online appendices section linking all book appendices. Audit template whitelabelling from the earlier session also included.

---

## What Was Done

### 1. Free Book — Overarching Table of Contents

Added a TOC page to the free book PDF, inserted between front cover and chapter content. The build script (gen-free-book.sh) now:

- Uses pypdf to count pages from each component PDF
- Calculates absolute page numbers dynamically
- Generates a LaTeX tabular TOC via pandoc with entries for all sections
- Includes Part A/Part B sub-entries under MX: The Introduction
- Merges the TOC as page 2 in the final PDF (now 8 components, was 7)

### 2. Reginald Registry Site Rework

Major restructuring of the Reginald site in mx-outputs:

- Consolidated CSS — plugins.css deleted, all styles merged into reginald.css (+982 lines)
- index.html streamlined (−662 lines)
- plugins.html restructured
- New pages added: ai-readiness, api, benefits, get-started, how-it-works, pricing
- Images directory added
- Reginald cog metadata added (reginald.cog.md)

### 3. Footnotes Page — Online Appendices

Updated generate-footnotes.sh to add an "Online Appendices" section to the footnotes HTML page with links to all appendices (A through K), grouped by category: Implementation Guides, Quick References, Case Studies and Examples.

### 4. PDF Build Commands Updated

Package.json updated — protocols and handbook PDF build commands now include footnotes-qr-page.md and services-advert.md as trailing sections.

### 5. Audit Template Whitelabelling (v1.0 carried forward)

From earlier: 18 hardcoded personal/company values replaced with configurable placeholders across 3 files. Two BloomReach CRM contacts added.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (already pushed) | 2 |
| Files changed (uncommitted) | 5 (main repo) + 1 (allaboutv2) + 7 (mx-outputs) |
| Lines added | +107 (main repo) |
| Free book PDF pages | 53 (was 52) |
| New Reginald pages | 6 |

---

## Next Steps

- Commit and push all changes across submodules and main repo
- Follow up with BloomReach w/c 6 Apr as agreed
- Test audit-site skill with the new agent discovery step on next audit

---

## Commit Log

| Hash | Description |
|------|-------------|
| c0036489 | Update REMINDERS, chapter-00 cleanup, font size adjustments for free book PDFs |
| d7a32aa0 | Update mx-crm and mx-outputs: BloomReach contacts, morning report |
| (pending) | Free book TOC, footnotes appendices, PDF build updates, Reginald rework |
