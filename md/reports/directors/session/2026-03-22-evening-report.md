---
title: "Co-Directors Report — Image Pipeline Consolidation and ASCII Diagram Conversion"
created: "2026-03-22"
segment: "evening"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidential: true
---

# Co-Directors Report — Image Pipeline Consolidation and ASCII Diagram Conversion

**Date:** 22 March 2026 — Evening
**Segment:** evening (17:00–)

---

## Summary

Two complementary improvements to the book manuscripts. First, ASCII art diagrams in Protocols chapters 2, 4, and Appendix L were converted to professional SVG illustrations with proper funnel shapes, flow diagrams, and namespace trees — then rendered as PNGs and embedded with figure captions. Second, a systemic duplication problem was identified and resolved: SVG source files existed in both the asset library and alongside manuscripts. All 29 redundant SVGs were removed from manuscript folders, establishing `datalake/assets/images/svg/` as the single source of truth. Four SVGs that had no asset copy were recovered and properly filed.

---

## What Was Done

### 1. ASCII Diagram Conversion (6 diagrams)

Replaced ASCII art code blocks with professional SVG illustrations matching the existing book visual style:

- **Figure 2.2** — Traditional website action flow (cause and effect)
- **Figure 2.3** — HTTP state transitions (GET/POST/redirect semantics)
- **Figure 2.4** — Validation error cascade (sequential submit-fix cycle)
- **Figure 4.2** — Customer acquisition funnel comparison (traditional vs agent-influenced, trapezoid funnel shapes)
- **Figure 4.3** — Competitive feedback loops (Hotel A positive vs Hotel B negative)
- **Figure L.1** — MX namespace tree (mx.ai/mx.co/mx.ho hierarchy)

Each diagram: SVG created, PNG generated at 1600px width, ASCII block replaced with image reference and descriptive figure caption. Figure 4.2 was redesigned after initial review to use proper funnel trapezoids with centred text.

### 2. Image Pipeline Consolidation

Identified and resolved systemic SVG duplication across the repository:

- **29 SVGs removed** from manuscript folders (protocols illustrations, handbook chapters, appendices, shared)
- **4 SVGs recovered** from git that had no asset library copy (`chapter-02-layout-vs-dom`, `chapter-10-org-models`, `chapter-00-org-models`, `chapter-00-5-stage-mx-journey`)
- **Architecture established**: `assets/images/svg/` = master SVGs, `assets/images/bitmap/` = master PNGs, manuscript folders = PNGs only

### 3. Existing SVG Fix

Fixed overlapping text in `chapter-04-content-hierarchy.svg` (handbook) — h2/h3 items in the agent-extracted outline section were sharing y-coordinates. Each now on its own line.

### 4. Manuscript Image Reference Fixes

Two manuscripts referenced `.svg` instead of `.png` — corrected to point to bitmap versions:
- `chapter-10-implementation.md` (Figure 10.2)
- `chapter-00-introduction-to-mx.md` (MX Readiness Model)

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (prior) | 6 |
| Files changed (uncommitted) | 36 |
| Lines added | +69 |
| Lines removed | −2,463 |
| SVGs created | 6 |
| SVGs removed (redundant) | 29 |
| SVGs recovered | 4 |
| Repositories | 1 |

---

## Next Steps

- Verify PDF generation with new figure references
- Consider build script to auto-generate PNGs from asset SVGs into manuscript folders

---

## Commit Log

| Hash | Description |
|------|-------------|
| 909c41e6 | Merge pull request #3 — fix PDF base font |
| cb1201b9 | Remove download-cover-images.cjs and all references |
| 57e0295c | Remove Kindle format from PDF generation scripts |
| 308e250a | Add 5mm spine binding offset to all PDF generation scripts |
| 5c4701f6 | Add widow/orphan control and table styling to generate-document-pdf.js |
| f224979b | Fix PDF base font size from 11pt to 10pt |
