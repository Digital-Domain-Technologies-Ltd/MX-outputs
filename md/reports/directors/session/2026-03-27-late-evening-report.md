---
title: "Co-Directors Report — Endnotes and PDF Typography"
created: "2026-03-27"
x-mx-segment: "late-evening"
version: "1.0"
author: Tom Cranstoun
audience: business
confidential: true

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-27-late-evening-report.md
---

# Co-Directors Report — Endnotes and PDF Typography

**Date:** 27 March 2026 — Late Evening
**Segment:** late-evening (21:00–)

---

## Summary

Footnotes in PDF book output caused widow/orphan and page-break issues because LaTeX doesn't account for footnote space when calculating page breaks. All footnotes are now converted to chapter endnotes via a new Lua filter and LaTeX preamble changes. Part B of chapter 0 now starts on a new page. Zero changes to markdown source — the transformation happens entirely in the build pipeline.

---

## What Was Done

### 1. Footnotes Converted to Chapter Endnotes

Created `scripts/filters/endnotes.lua` — a Pandoc Lua filter that collects endnotes and dumps them at chapter boundaries (before the next level-1 heading). The LaTeX `endnotes` package redirects all `\footnote` calls to `\endnote`, and the filter inserts `\theendnotes` with per-chapter numbering reset.

The filter is smart about "Part" headings (e.g. `# Part A — The Business Case`) — these are treated as subdivisions within a chapter, not chapter boundaries. Endnotes appear only at the true end of each chapter.

### 2. Metadata YAML Configs Updated

Added `\usepackage{endnotes}` and `\let\footnote=\endnote` to all three metadata configs:
- `protocols/metadata.yaml`
- `protocols/metadata-chapter.yaml`
- `handbook/metadata.yaml`

### 3. Build Commands Updated

Added `--lua-filter=scripts/filters/endnotes.lua` to all five PDF build commands in `package.json`.

### 4. Part B Page Break

Added `\newpage` before `# Part B — The Technical Foundation` in chapter 0 so it starts on a fresh page.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| New files | 1 (endnotes.lua) |
| Modified files | 5 (3 metadata YAMLs, package.json, chapter-00) |
| LaTeX package installed | endnotes.sty |
| Build commands updated | 5 |

---

## Next Steps

- Verify full book builds (protocols, handbook) with endnotes
- Commit all changes

---

## Commit Log

*Changes uncommitted — pending step-commit.*
