---
title: "Co-Directors Report — Pre-Publication Standards Enforcement"
created: "2026-03-27"
x-mx-segment: "evening"
version: "1.0"
author: Tom Cranstoun
audience: business
confidential: true

type: info-doc
mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-27-evening-report.md
  purpose: "Co-Directors Report - Pre-Publication Standards Enforcement"
  audience: [humans, machines]
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Pre-Publication Standards Enforcement"]

---

# Co-Directors Report — Pre-Publication Standards Enforcement

**Date:** 27 March 2026 — Evening
**Segment:** evening (17:00–)

---

## Summary

With MX: The Handbook publication six days away (2 April), tonight's session enforced MX standards across all deliverable HTML files. Inline CSS was externalised, British -ise spelling was applied throughout manuscripts, and the retailer ROI example was strengthened with a full MX implementation stack. These are quality gates — if the published assets don't follow MX's own rules, the credibility argument falls apart.

---

## What Was Done

### 1. CSS Externalisation — No Inline Styles

Moved all inline CSS from HTML files into external `.css` files across every repo: Canon templates, Gathering deliverables, reference implementations, blog HTML, and book appendices. This enforces the MX principle that HTML carries structure and metadata, not presentation.

### 2. British English and Cog Terminology Enforcement

Swept all manuscripts for American -ize spellings (optimise, organise, recognise, etc.) and corrected cog terminology consistency. British English is a stated standard — this ensures the published Handbook passes that test.

### 3. Retailer ROI Example Strengthened

The retailer case study in the manuscript now includes the full MX implementation stack (semantic HTML, Schema.org JSON-LD, MX governance metadata) rather than a generic overview. The example needs to be concrete enough that a CMS practitioner can act on it.

### 4. Trailing Whitespace Cleanup

Removed trailing whitespace and updated submodule pointers as part of the general sweep.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 4 |
| Files changed | 77 |
| Lines added | +2,860 |
| Lines removed | −2,612 |
| Repositories | 4 (hub, allaboutv2, mx-outputs, datalake) |
| Uncommitted files | 13 (appendix HTML + submodule pointers) |

---

## Next Steps

- Commit remaining appendix HTML changes (CSS externalisation in progress)
- Update submodule pointers (allaboutv2, mx-outputs)
- Regenerate book HTML outputs with updated terminology (REMINDERS item)
- Verify allaboutv2 build after changes

---

## Commit Log

| Hash | Description |
|------|-------------|
| 9892da29 | Externalise inline CSS from all HTML files across all repos |
| fa30aa4a | Enforce British -ise spelling and cog terminology across manuscripts |
| eb52e5e0 | Clean up trailing whitespace and update submodule pointers |
| 7667c77d | Strengthen retailer ROI example with full MX implementation stack |
