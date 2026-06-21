---
title: "Co-Directors Session Report — 19 Mar 2026 (Afternoon)"
description: "Reginald website: CSP fix, carrier format content, COG definition correction across entire codebase"
author: "Tom Cranstoun"
created: 2026-03-19
modified: 2026-03-19
version: "1.0"

type: report
tags: [session-report, reginald, cog-definition, csp, carrier-formats]
mx:
  status: active
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-19-session-report.md
  purpose: "Reginald website: CSP fix, carrier format content, COG definition correction across entire codebase"
  audience: [humans, machines]
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Session Report - 19 Mar 2026 (Afternoon)"]

---

# Co-Directors Session Report — 19 Mar 2026 (Afternoon)

## Summary

Three interconnected workstreams: (1) fix CSP blocking on `reginald.allabout.network`, (2) update all Reginald pages to show that MX metadata works in any file type — not just markdown, and (3) correct the COG definition across the entire codebase from "a markdown file with YAML frontmatter" to "any document that carries MX metadata."

## Changes Made

### 1. CSP Fix — Cloudflare Worker

**File:** `mx-reginald/worker/src/index.js`

The Reginald Worker was inheriting restrictive `Content-Security-Policy` headers from upstream (GitHub raw), which blocked external CSS and JS. Added two lines to strip these headers before serving. Deployed to Cloudflare — version `d39824d8-1db8-48da-904b-26f3d01f2e9e`.

### 2. Reginald Website — Carrier Format Content

**Files:** `mx-outputs/reginald/` — `how-it-works.html`, `index.html`, `readiness-levels.html`, `reginald.cog.md`

- **how-it-works.html**: Rewrote "What Is a COG?" section. Added carrier formats table (HTML, Markdown, JS, CSS, Shell) with how each carries MX metadata. Added full HTML example with Schema.org JSON-LD and `<meta name="mx:*">` tags. Added explanation of standards hierarchy (Schema.org first, MX adds governance). Added "Dual Meaning" and "Two Types" sections.
- **index.html**: Changed comparison table from "Structured YAML frontmatter" to "Structured metadata — YAML, JSON-LD, Schema.org."
- **readiness-levels.html**: Broadened Level 1 and 2 examples to include HTML carrier format alongside markdown. Updated overview table.
- **reginald.cog.md**: Added carrier formats section, broadened COG definition, added cumulative progression to compliance levels.

Navigation across all pages already included "Levels" link from earlier in this session (readiness-levels.html creation).

### 3. COG Definition Correction — Codebase-Wide

Systematic grep found and updated all instances of the narrow "COG = markdown file" definition across:

**Manuscripts (4 files):**

- `chapter-15-when-machines-remember.md`
- `chapter-16-the-joymaker.md`
- `chapter-17-content-that-manages-itself.md`
- `appendix-m-building-mx-os.md`

**Canon (10 files):**

- `founding-charter.md`, `announcing-the-gathering.md`, `allabout-the-gathering.html`, `landing-page.html`
- `cog-unified-spec.cog.md`
- `introducing-mx-cogs.md`, `content-that-manages-itself-blog.md`, `content-that-manages-itself.html`
- `explaining-mx-os.md`, `mx-concepts.cog.md`

All changes follow the timeless manuscript rule — stating what IS, not what CHANGED.

### 4. Memory Updated

Updated `MEMORY.md` COG System section from "COG = structured document — YAML frontmatter + markdown body" to "COG = any document with MX metadata" with full carrier format list.

## Decisions

- **COG definition**: A COG is any document carrying MX metadata. `.cog.md` is the human-readable naming convention for the markdown carrier format specifically.
- **Standards hierarchy on Reginald pages**: Schema.org JSON-LD comes first for structured data. MX adds governance metadata where standards leave gaps. MX never duplicates what Schema.org already covers.

## Statistics

- Files changed: ~20 across 4 areas (mx-outputs, mx-reginald, datalake, mx-canon)
- Deployment: Cloudflare Worker deployed successfully
