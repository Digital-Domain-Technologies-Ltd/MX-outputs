---
title: "Co-Directors Report — Image Pipeline and Validator Hardening"
created: "2026-03-22"
x-mx-segment: "evening"
version: "2.0"
author: Tom Cranstoun
audience: business
confidential: true

type: info-doc
mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-22-evening-report.md
  purpose: "Co-Directors Report - Image Pipeline and Validator Hardening"
  audience: [humans, machines]
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Image Pipeline and Validator Hardening"]

---

# Co-Directors Report — Image Pipeline and Validator Hardening

**Date:** 22 March 2026 — Evening
**Segment:** evening (17:00–)

---

## Summary

Two major quality improvements. First, ASCII diagrams in Protocols manuscripts were converted to professional SVG illustrations and the image pipeline was consolidated (29 redundant SVGs removed). Second, the cog validator was hardened: invalid field values and deprecated field usage now cause validation failure rather than silent warnings. All cog files were brought into compliance, and the field dictionary was cleaned up so deprecated field mappings live solely in the validation rules, not in the definitions file.

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

### 2. Image Pipeline Consolidation

- **29 SVGs removed** from manuscript folders (redundant copies)
- **4 SVGs recovered** from git that had no asset library copy
- **Architecture established**: `assets/images/svg/` = master SVGs, manuscript folders = PNGs only

### 3. Validator Severity Hardening

Promoted two checks from warning to error in `cog-tools.js`:

- **invalid-value** — enum fields with values not in the allowed list now fail validation
- **deprecated-field** — using deprecated field names now fails validation

This means `npm run cog:validate` exits non-zero on these issues, preventing bad metadata from being committed.

### 4. Cog File Compliance Fixes

Fixed 6 cog files that failed after severity change:

- Removed deprecated `name` field from 6 files (replaced with `title` where missing)
- Changed invalid audience values `[ai-agents, developers]` to canonical `[agents, tech]` across 4 files
- Fixed snapshot template audience in `cog-tools.js`

### 5. Field Definition Cleanup

- Corrected `inherits` status: canonical (not deprecated) — it declares file-level extension paths
- Added missing deprecated mappings to `cog-field-rules.js`: `prose-source`/`proseSource` → `inherits`, `lastVerified` → `maintainedDate`, `verifiedBy` → `maintainedBy`
- Removed all deprecated field references from `fields.cog.md` — deprecated mappings now live solely in `cog-field-rules.js`
- Removed overlap resolution entries that existed only to document deprecated→canonical transitions
- Removed "Replaces deprecated X" notes from individual field definitions

### 6. Existing SVG Fix

Fixed overlapping text in `chapter-04-content-hierarchy.svg` and corrected `.svg` → `.png` references in two manuscripts.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 8 |
| Files changed (uncommitted) | 10 |
| Lines added | +32 |
| Lines removed | −48 |
| SVGs created | 6 |
| SVGs removed (redundant) | 29 |
| Cog files fixed | 6 |
| Validation errors resolved | 19 |
| Repositories | 1 |

---

## Next Steps

- Verify PDF generation with new figure references
- Consider build script to auto-generate PNGs from asset SVGs into manuscript folders

---

## Commit Log

| Hash | Description |
|------|-------------|
| dd11666f | Update REMINDERS with image pipeline completion and refresh countdowns |
| 6e8f4487 | Convert ASCII diagrams to SVG illustrations and consolidate image pipeline |
| 909c41e6 | Merge pull request #3 — fix PDF base font |
| cb1201b9 | Remove download-cover-images.cjs and all references |
| 57e0295c | Remove Kindle format from PDF generation scripts |
| 308e250a | Add 5mm spine binding offset to all PDF generation scripts |
| 5c4701f6 | Add widow/orphan control and table styling to generate-document-pdf.js |
| f224979b | Fix PDF base font size from 11pt to 10pt |
