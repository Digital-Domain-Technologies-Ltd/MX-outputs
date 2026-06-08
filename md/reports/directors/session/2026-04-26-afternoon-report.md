---
title: "Co-Directors Report -- US Letter Free Book Format Added"
description: "Free book generator extended to produce A4, A5, and US Letter PDFs in a single run."
author: "Tom Cranstoun"
created: 2026-04-26
modified: 2026-04-26
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-26-afternoon-report.md
  purpose: "Free book generator extended to produce A4, A5, and US Letter PDFs in a single run."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report -- US Letter Free Book Format Added"]
---

# Co-Directors Report -- US Letter Free Book Format Added

**Date:** 26 April 2026 -- Afternoon
**Segment:** Afternoon (noon to 5 pm)

---

## Summary

This was a focused extension session. The Frankfurt giveaway free book now generates in three formats -- A4, A5, and US Letter -- from a single `npm run pdf:free-book` command. The US Letter variant (8.5 x 11 in, 5.4 MB) was added in response to demand for a North American print-ready edition. The change was a two-line extension to the format loop in `scripts/gen-free-book.sh`; no content was altered.

---

## What Was Done

### 1. US Letter Free Book Format

Added `letter` as a third format in the free book generator loop alongside the existing `a4` and `a5` formats. The implementation added an `elif` branch setting US Letter geometry (`top=1in, left=1in, right=1in, bottom=1in, bindingoffset=5mm`), a dedicated build directory (`mx-outputs/pdf/books/free-book/letter/`), and the output path `mx-outputs/mx-site/books/mx-introduction-chapter-letter.pdf`. The loop runs all nine pipeline steps for each format: pandoc compile, copyright page, manifesto, services advert, purchase page, table of contents (with correct page numbers), merge via pypdf, and cleanup. All three formats verified clean.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 (mx-outputs) + 1 (hub, pending Step 3) |
| Files changed | 2 (gen-free-book.sh + letter PDF) |
| New PDFs generated | 3 (A4 updated, A5 updated, Letter new) |
| Repositories | 2 (hub, mx-outputs) |
| Letter PDF size | 5.4 MB |

---

## Next Steps

- Deploy updated PDFs to allabout.network books page
- The "Regenerate free book PDF" REMINDERS item (added 2026-04-25) is now complete -- remove

---

## Commit Log

| Hash | Repository | Description |
|------|------------|-------------|
| fa9db08 | mx-outputs | feat: add US Letter free book PDF alongside A4 and A5 |
| (pending) | hub | feat: add US Letter format to free book generator |
