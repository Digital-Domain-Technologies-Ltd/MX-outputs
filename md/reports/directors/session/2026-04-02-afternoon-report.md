---
title: "Co-Directors Report — PDF Orphan/Widow Heading Fix"
created: "2026-04-02"
segment: "afternoon"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidential: true
---

# PDF Orphan/Widow Heading Fix

Fixed a systemic orphaned heading problem in the PDF pipeline where headings and labels were stranded at the bottom of pages with their associated content (code blocks, lists) appearing on the next page, leaving large blank spaces.

## By the Numbers

- **1 filter file** updated (`scripts/filters/keep-together.lua`)
- **4 new patterns** added to prevent orphaning
- **0 orphaned headings** remaining across both books (handbook: 170+ pages, protocols: 465 pages)
- **Both books** regenerated and verified clean

## Root Cause

The `samepage` LaTeX environment prevents page breaks *within* a group, but `\BeforeBeginEnvironment{Shaded}` in `shared-header.tex` inserts `\needspace{5\baselineskip}` which triggers a page break *after* the label but *before* the code block — splitting the group despite `samepage`.

## What Was Fixed

### Systematic `\Needspace` before all `samepage` groups

Added forcing `\Needspace{N\baselineskip}` (uppercase = absolute) before every `samepage` environment across all seven patterns (heading+prose+code, heading+subheading, prose+list, standalone list, standalone code, bold-lead+code, bold-lead+list). This ensures LaTeX breaks *before* the group when insufficient room remains, rather than splitting inside.

### Three new patterns in keep-together.lua

1. **Bold-lead + long code block** (>12 lines) — previously unhandled, now uses `\Needspace{12\baselineskip}` to keep the label with at least the first several lines of code
2. **Bold-lead + prose + code block** — e.g., `**The fix:**` followed by `Use semantic table elements:` followed by code. Now chains `\nopagebreak[4]` across all three blocks with adequate `\Needspace`
3. **Prose ending with colon + code block** — regular paragraphs like "Here's Manchester Motors in JSON-LD rather than microdata:" followed by a long code block. New `prose_ends_with_colon()` helper function detects these and applies `\Needspace{10\baselineskip}`

## Specific Cases Fixed

- **Handbook page 47**: "HTML order (what AI reads):" stranded with blank space, code block on next page
- **Handbook page 80**: "rather than microdata:" at page bottom, JSON-LD code on next page
- **Handbook page 96**: "Example hub page:" orphaned from its HTML code block
- **Handbook page 153**: "The fix:" / "Use semantic table elements:" separated from code block

## Verification

Automated scanning of both PDFs (pdftotext + page boundary analysis) confirms zero orphaned heading patterns remain. Visual spot-checks confirmed proper layout at all previously problematic locations.

## Files Changed

| File | Change |
|------|--------|
| `scripts/filters/keep-together.lua` | Added `prose_ends_with_colon()` helper, `\Needspace` before all `samepage` groups, three new orphan-prevention patterns |
| `mx-outputs/pdf/books/handbook/mx-handbook.pdf` | Regenerated |
| `mx-outputs/pdf/books/protocols/mx-protocols.pdf` | Regenerated |
