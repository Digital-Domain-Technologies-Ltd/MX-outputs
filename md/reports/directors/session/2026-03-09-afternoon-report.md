---

title: "Co-Directors Report — Free Book Renamed to Introduction Chapter"
created: "2026-03-09"
version: "1.0"
author: Tom Cranstoun and Maxine
mx:
  segment: "afternoon"
  audience: stakeholders
  confidential: true
---


# Co-Directors Report — Free Book Renamed to Introduction Chapter

**9 March 2026 — Afternoon**

## Summary

Building on this morning's humanisation pass and full PDF rebuild, the afternoon focused on restructuring the free book into a cleaner introduction chapter. Tom directed three changes: remove the preface, move the footnotes QR code to the very last page, and rename from "free book" to "introduction chapter". The result is a tighter 4.4MB PDF (down from 5.2MB) that leads with chapter-00 content and ends with a scannable QR code linking to online footnotes.

## What Changed

### Free book renamed to introduction chapter

The `gen-free-book` cog (now v2.0.0) and script were restructured:

- **Preface removed** from the build pipeline entirely
- **QR code page** generated as a standalone centred page (rsvg-convert SVG to PNG, then pandoc/xelatex to PDF) and appended as the final page
- **Output renamed** from `mx-free-book.pdf` to `mx-introduction-chapter.pdf`
- **Contents:** Chapter 0 (Introduction to MX) → CMS Kickoff 2024 → Footnotes QR page
- **Size:** 4.4MB (was 5.2MB with preface)

Files modified: `scripts/gen-free-book.sh`, `scripts/cogs/gen-free-book.cog.md`, `datalake/assets/configs/books/free-book/metadata.yaml`

Old files removed from mx-outputs: `mx-free-book.pdf`, `preface.pdf`

## Next Steps

- Review introduction chapter PDF visually
- Continue humanisation passes on remaining chapters
- Fix appendix script sitemap generation (stale path)

## Commit Log

| Hash | Description |
| ---- | ----------- |
| `61538f4b` | chore: update mx-outputs submodule with co-directors report |
| `76faa78b` | refactor: rename free book to introduction chapter |
