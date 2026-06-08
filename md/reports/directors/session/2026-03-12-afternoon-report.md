---

title: "Co-Directors Report — Book Tidy-Up: Titles, Scope, Typography, and Print Quality"
created: "2026-03-12"
version: "1.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "afternoon"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-12-afternoon-report.md
  purpose: "Co-Directors Report - Book Tidy-Up: Titles, Scope, Typography, and Print Quality"
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Book Tidy-Up: Titles, Scope, Typography, and Print Quality"]
---


# Co-Directors Report — Book Tidy-Up: Titles, Scope, Typography, and Print Quality

**Date:** 12 March 2026 — Afternoon
**Segment:** afternoon (12:00–17:00)

---

## Summary

A focused afternoon tidying up the books. The session addressed four areas: consistent book title formatting across the entire repository, broadening the MX definition in Chapter 00 to cover interaction patterns (not just metadata), improving the free-book back matter with a services advert and MX Printworks section, and fixing PDF typography so text no longer overflows the right margin and words are not hyphenated too aggressively. All PDFs were regenerated twice — once after the content changes, once after the typography fixes. Eleven commits across two repositories.

---

## What Was Done

### 1. Book Title Normalisation

Both books were renamed to their proper formatted titles across all prose and YAML fields in the repository:

- "MX Protocols" / "MX-Protocols" → "MX: The Protocols"
- "MX-Handbook" / "MX Handbook" → "MX: The Handbook"

This touched 62 files including manuscripts, metadata configs, Canon documents, blogs, pitches, skills, and test files. A sweep to ensure every reference uses the colon-space format consistently.

### 2. MX Definition Broadened

Chapter 00 (Introduction to MX) was updated to explicitly state that MX covers more than metadata and markup. The definition now includes toast notifications, sliders, stepped workflows, micro-animations, and hidden JavaScript variables — standard web patterns that break for machines. The services advert was updated to match: consulting now covers interaction pattern auditing, and training includes fixing interaction patterns.

### 3. Free Book Back Matter

The free-book PDF gained new back matter:

- **Services advert** — consulting, training, and speaking services with MX Printworks section
- **Footnotes QR** — replaced a placeholder SVG with scannable QR code PNGs generated via the qrcode npm package
- Vertical spacing tightened so the services page fits on a single page

### 4. PDF Typography Fixes

Two problems were identified and fixed across all five PDF generation configurations (Protocols A4, Protocols Kindle, Handbook, mx-pdf.sh, generate-document-pdf.js):

- **Text overflow** — prose was creeping past the right margin. Fixed with `\sloppy` + `\emergencystretch=3em` and conditional loading of xurl/fvextra packages with graceful fallbacks for the basic TeX Live installation
- **Aggressive hyphenation** — words were being broken too soon and too often. Hyphenation penalties raised significantly (hyphenpenalty from 50 to 5000, doublehyphendemerits from 10000 to 900000) so LaTeX prefers wider word spacing over mid-word breaks

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 11 |
| Files changed | 126 |
| Lines added | +827 |
| Lines removed | −675 |
| PDFs regenerated | 6 (Protocols A4 ×2, Kindle ×2, Handbook ×2) |
| Repositories | 2 (MX-hub, mx-outputs) |

---

## Next Steps

- Consider installing xurl and fvextra packages (`sudo tlmgr install xurl fvextra`) for improved URL and code block line breaking in PDFs
- Visual review of regenerated PDFs for any remaining typography issues
- Continue book content work

---

## Commit Log

| Hash | Description |
|------|-------------|
| e55daa0e | Rename MX-Handbook to MX: The Handbook in prose and fields |
| 24fbe8e4 | Rename MX Protocols to MX: The Protocols in prose and fields |
| 492ac3c5 | Improve footnotes QR generation and add free-book services advert |
| 97d3c862 | chore: update changelog — Protocols title normalisation and footnotes QR |
| b4965dff | Add MX Printworks section to free-book services advert |
| 4b9e83cb | Update mx-outputs submodule with regenerated PDFs |
| ad3bf855 | Broaden MX scope beyond metadata, tighten advert, regenerate all PDFs |
| 600d7df0 | chore: update changelog — broadened MX scope and full PDF regeneration |
| aff1d5d1 | Fix PDF text overflow and soften hyphenation rules |
| 7e7d380a | Update mx-outputs submodule with typography-improved PDFs |
| 3e2dabe2 | chore: update changelog — PDF typography overflow and hyphenation fixes |
