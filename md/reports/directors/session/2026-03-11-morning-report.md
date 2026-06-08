---

title: "Co-Directors Report — Handbook Audit, Illustrations, Build Pipeline"
created: "2026-03-11"
version: "1.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "morning"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-11-morning-report.md
  purpose: "Co-Directors Report - Handbook Audit, Illustrations, Build Pipeline"
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Handbook Audit, Illustrations, Build Pipeline"]
---


# Co-Directors Report — Handbook Audit, Illustrations, Build Pipeline

**Date:** 11 March 2026 — Morning
**Segment:** morning (00:00–12:00)

---

## Summary

This morning's session brought the Handbook to publication-ready state. A systematic audit of all chapters identified six priority issues — all resolved. Six professional illustrations were created from scratch. Three long-standing build warnings were eliminated. The AI-slop term 'battle-tested' was purged across the entire repository. With the 2 April publication date 22 days away, the Handbook manuscript is now substantively complete at approximately 53,000 words.

---

## What Was Done

### 1. AI-Slop Term Purge: 'battle-tested'

The term 'battle-tested' was identified as AI-generated vocabulary. A repo-wide replacement covered approximately 103 instances across 53 files in the main repository and 33 files across 4 submodules (allaboutv2, mx-audit, mx-crm, mx-outputs). Appendix B was renamed from 'Battle-Tested Lessons' to 'Proven Lessons', including file rename. The writing style guide and humanizer skill were updated to flag this term going forward.

### 2. Build Pipeline Fixes (Three Pre-Existing Warnings)

Three warnings that had persisted across multiple build sessions were resolved:

| Warning | Root Cause | Fix |
|---------|-----------|-----|
| `Label 'acknowledgements' multiply defined` | pandoc's LaTeX output put `\label{}` on same line as `\chapter*{}` | Modified `prepare-ack.sh` to strip only the label, not the heading |
| Missing ₹ (Indian Rupee, U+20B9) | xelatex font lacked the glyph | Created Lua filter using Helvetica fontspec for the character |
| 6 missing chapter illustrations | Image references pointed to PNGs that never existed | Created SVGs, converted to PNGs, updated resource paths |

Both books now build with zero warnings across all three formats (HTML, Kindle, A4 PDF).

### 3. Comprehensive Handbook Audit

Three parallel agents read all Handbook chapters and produced a structured assessment. Results: all chapters rated substantively complete. Six priority issues identified and fixed:

1. **Glossary** — 8 missing key terms added (MX, EAL, Computational Trust, MCP, Morning-After Test, Worst-Agent Principle, Five-Stage Agent Journey, Progressive Enhancement). Status changed from draft to published.
2. **Chapter 08 (Testing)** — broken `schema-dts` validate() code example replaced with working `structured-data-testing-tool` snippet.
3. **Chapter 06 (Navigation)** — AI User-Agent strings added (GPTBot, ChatGPT-User, ClaudeBot, Google-Extended, PerplexityBot, Amazonbot, Bytespider, CCBot) with robots.txt guidance.
4. **Chapter 11** — duplicate closing section removed (overlapped with The End chapter).
5. **Preface** — redundant Acknowledgements section removed (now appears as dedicated page before TOC).
6. **The End** — missing Appendix C added to resource list.

### 4. Six Handbook Illustrations Created

Professional SVG diagrams were designed and converted to PNG:

| Chapter | Illustration | Description |
|---------|-------------|-------------|
| 02 | Agent HTML Reading | Three-row comparison: semantic vs partial vs generic HTML parsing |
| 03 | Agent Decision Flow | Flowchart showing how agents evaluate task completion feasibility |
| 04 | Content Hierarchy | Tree diagram of semantic HTML heading hierarchy |
| 06 | Navigation Patterns | Three-column comparison: structured vs partial vs flat navigation |
| 07 | Progressive Enhancement | Layer-cake diagram: HTML/CSS/JS enhancement layers |
| 10 | Implementation Roadmap | Five-phase horizontal timeline with cumulative improvement bar |

All six are in `datalake/assets/images/svg/handbook/` (SVG source) and `datalake/assets/images/bitmap/handbook/` (PNG output).

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 6 |
| Files changed | 88 (across main repo + submodules) |
| Lines added | ~1,270 |
| Lines removed | ~220 |
| Build warnings eliminated | 3 → 0 |
| Handbook word count | ~53,000 |
| Days to Handbook publication | 22 |

---

## Decisions Made

- **Glossary is now shared** — moved from `mx-protocols` to `shared` book scope, serving both Protocols and Handbook
- **Illustrations use SVG source** — hand-crafted SVGs converted to PNG via the existing illustration pipeline, not AI-generated raster images
- **Unicode handling via Lua filter** — chosen over LaTeX package installation or YAML metadata hacks, after two failed approaches documented in LEARNINGS.md

---

## Next Steps

1. **Review Handbook chapter flow** — read all chapters sequentially to check narrative continuity before publication
2. **Build final PDF** — generate publication-ready PDF with all fixes and illustrations
3. **Create Handbook cover** — publication-ready cover design for Amazon KDP

---

## Commit Log

| Hash | Description |
|------|-------------|
| `d2aa2beb` | Purge 'battle-tested' AI-slop term across entire repo |
| `32d79df2` | chore: update changelog — battle-tested AI-slop term purge |
| `b8d5f352` | Update submodule pointers — book outputs and footnotes |
| `78860f49` | Handbook audit fixes: illustrations, glossary, build pipeline, content |
| `22c24845` | Update pdf-generator cog — v1.13.0, link colours, expand-links filter |
| `dae0bb85` | chore: update changelog, learnings, reminders — handbook audit session |
