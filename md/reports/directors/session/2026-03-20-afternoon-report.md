---

title: "Co-Directors Report — Submodule Cleanup and Book PDF Generation"
created: "2026-03-20"
version: "1.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "afternoon"
  audience: stakeholders
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-20-afternoon-report.md
---


# Co-Directors Report — Submodule Cleanup and Book PDF Generation

**Date:** 20 March 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

Cleared outstanding changes across submodules (mx-crm outreach materials, mx-outputs foodautonomy report), committed revised chapter-00 introduction and chapter-11 to the main repo, and generated fresh handbook and protocols PDFs. Discovered and fixed a longstanding LaTeX image path bug that was preventing PDF generation — raw `\includegraphics` commands bypass pandoc's `--resource-path`, so bare filenames fail. Root cause fixed in source markdown; policy documented in the pdf-generator cog.

---

## What Was Done

### 1. Submodule Cleanup

Committed and pushed outstanding content across two submodules:
- **mx-crm:** Outreach materials for 2026-03-20 (foodautonomy report in print and standard markdown formats)
- **mx-outputs:** foodautonomy report PDF

Updated submodule pointers in the main hub repository.

### 2. Chapter Revisions

- **chapter-00-introduction-to-mx.md:** Substantial revision (251 insertions, 304 deletions) — updated content structure
- **chapter-11-designing-for-both.md:** Minor fix (1 line)

### 3. Handbook PDF Generation

Generated `mx-handbook.pdf` (77 MB) using `npm run pdf:mx-generate`. Initial attempt failed with XeLaTeX error: `Unable to load picture or PDF file 'chapter-00-footnotes-qr.png'`.

### 4. LaTeX Image Path Fix

**Root cause:** `footnotes-qr-page.md` used a bare filename in raw LaTeX `\includegraphics`. Pandoc's `--resource-path` only applies to pandoc-managed images — raw LaTeX bypasses it entirely, and XeLaTeX resolves from the working directory (repo root).

**Fix:** Changed bare filename to repo-root-relative path: `datalake/manuscripts/mx-books/shared/chapter-00-footnotes-qr.png`. This follows the same pattern already used in the protocols metadata.yaml for cover images.

**Documentation:** Added policy rule to `pdf-generator.cog.md` explaining that raw LaTeX `\includegraphics` must use repo-root-relative paths.

**Verification:** Both `pdf:mx-generate` (handbook) and `pdf:protocols-generate` (protocols) now build cleanly without any `TEXINPUTS` workaround.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (hub) | 1 |
| Commits (submodules) | 2 (mx-crm, mx-outputs) |
| Files changed (hub) | 4 |
| Lines added | +254 |
| Lines removed | −307 |
| PDFs generated | 2 (handbook 77 MB, protocols) |
| Repositories | 3 (hub, mx-crm, mx-outputs) |

---

## Next Steps

- Commit the TEXINPUTS fix (footnotes-qr-page.md + pdf-generator.cog.md)
- Commit generated PDFs to mx-outputs

---

## Commit Log

| Hash | Description |
|------|-------------|
| 37bbdd13 | Update chapter-00 introduction and chapter-11, update submodule pointers |
| 5d69864 (mx-crm) | Add outreach materials for 2026-03-20 |
| 4a00fbe (mx-outputs) | Add foodautonomy report PDF |
