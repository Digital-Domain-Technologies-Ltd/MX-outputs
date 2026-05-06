---
title: "Co-Directors Report -- Free-Book Cover and PDF Pipeline Fix"
description: "New WhatsApp cover image shipped to all three free-book PDF formats; full-bleed CSS bug fixed; pypdf 6.x merge regression resolved."
author: "Tom Cranstoun"
created: 2026-05-06
modified: 2026-05-06
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-06-afternoon-report.md
---

# Co-Directors Report -- Free-Book Cover and PDF Pipeline Fix

**Date:** 6 May 2026 -- Afternoon
**Segment:** Afternoon (since noon)

---

## Summary

This afternoon replaced the free-book cover with the new WhatsApp design image and shipped it to all three PDF formats (A4, A5, Letter). Doing so uncovered two latent bugs in the PDF generation pipeline: a full-bleed CSS approach that was not working in current Chrome headless, and a pypdf 6.x regression that silently dropped the tagged-PDF StructTreeRoot on merge. Both are now fixed. The pipeline is in a cleaner state than it was at the start of the session.

---

## What Was Done

### 1. New cover image

The WhatsApp JPEG (`2026-05-06 at 13.08.36`) was moved to `datalake/assets/images/bitmap/book-covers/intro-cover.jpg` and set as the front cover source. The generation script was updated to handle JPEG directly (the previous source was a PDF, requiring `-density 150 [0]` flags for ImageMagick that are not valid for JPEG).

### 2. Full-bleed fix

The original approach used negative CSS margins to push the cover div into the page margin area. Testing confirmed this does not achieve full-bleed in Chrome headless -- corners showed white margins. Three CSS strategies were tested (negative margins, named pages, `@page :first`); only `@page :first { margin: 0 }` produced actual edge-to-edge rendering. The CSS was updated accordingly.

### 3. pypdf StructTreeRoot fix

The two-pass Chrome + pypdf merge pipeline previously preserved tagged-PDF accessibility structure (StructTreeRoot) by coincidence: both the body and back-cover PDFs were tagged, and pypdf 6.x happened to carry the reference through. Moving to a clean merge path exposed that pypdf 6.x's `append()` method drops the StructTreeRoot when merging multiple documents. Switched to `clone_reader_document_root()` + `add_page()`, which correctly preserves the body's structure tree. All three output PDFs now pass the StructTreeRoot and MarkInfo verification gates.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits | 2 |
| mx-outputs commits | 3 |
| Files changed (hub) | 11 |
| Lines added | +88 |
| Lines removed | -40 |
| Repositories touched | 2 |
| PDF formats regenerated | 3 |

---

## The Insight

The negative-margin approach to full-bleed covers had been documented as working (the commit message "full-bleed cover PDFs" implies it was verified), but it only worked with the old PDF source cover -- likely because the PDF was rendered at a specific size that coincidentally filled the content area. The JPEG source broke the assumption. The `@page :first` approach is unambiguous and version-stable in Chrome headless; it should have been the implementation from the start.

---

## Next Steps

- Verify cover renders correctly in the live PDF by opening the output and visually checking pages 1 and last.
- Consider updating `pdf-gotchas.md` with the `@page :first` finding and the pypdf 6.x `clone_reader_document_root` requirement.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 3cf257ab | hub | Free-book cover, manuscript updates, BMV pitch refinements |
| 9fd2d4a4 | hub | Fix book covers: new front cover, full-bleed back cover |
| 5893101 | mx-outputs | Regenerate free-book PDFs with new cover image |
| 1ae7637 | mx-outputs | Regenerate free-book PDFs: new front cover, full-bleed back cover |
| 4ddb35f | mx-outputs | Regen free-book PDFs: WhatsApp cover, full-bleed fix, StructTreeRoot preserved |
