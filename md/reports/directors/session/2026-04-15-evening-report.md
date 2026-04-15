---
title: "Co-Directors Report — Evening: Machine Experience one-pager + field-audit scripts"
description: "Evening segment — shipped the two-column MX one-pager PDF toolchain and consolidated field-audit tooling."
author: "Tom Cranstoun and Maxine"
created: 2026-04-15
modified: 2026-04-15
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
---

# Co-Directors Report — Evening: Machine Experience one-pager + field-audit scripts

**Date:** 15 April 2026 — Evening
**Segment:** evening (17:00-onwards)

---

## Summary

Evening work delivered two small but durable outputs. First, a two-column Machine Experience one-pager reproduced from the April 2026 PDF as a maintainable Markdown master plus a reusable `2pager.sh` script and `npm run pdf:twocol` entry point — the discipline one-pager is now regenerable from source rather than locked inside a PDF. Second, two field-usage audit scripts were added earlier in the segment to scan non-YAML carriers (HTML/JS/CSS, then extended to YAML/JSON) for `mx:` field references, closing a visibility gap in the field-compliance pipeline.

---

## What Was Done

### 1. Machine Experience one-pager

- Added the Markdown master at `mx-canon/mx-the-gathering/deliverables/machine-experience-one-pager.md`, reproducing the two-page discipline/direction-of-travel + Track 01 / Track 02 layout.
- Wrote `scripts/bin/2pager.sh` — generic two-column pandoc + XeLaTeX runner using `multicol`.
- Wired `npm run pdf:twocol` in `package.json`.
- Fixed a line-break rendering bug (pandoc escaping `\\` outside raw blocks) by moving the footer into a raw-LaTeX fenced block with explicit `\par` terminators.
- Generated PDF committed to `mx-outputs/pdf/machine-experience-one-pager.pdf`.

### 2. Field-usage audit tooling

- Added two reusable scripts that scan the corpus for `mx:` field mentions in non-YAML carriers.
- Extended coverage to `.yaml`, `.yml`, and `.json` files with an MX-shape filter.
- Extended again to pick up `mx:` carrier usage in HTML/JS/CSS.

### 3. House-keeping

- Resolved a pull conflict by stashing through nested submodule pulls (mx-audit, mx-crm, mx-outputs, then hub). All repos fast-forwarded cleanly, no merge commits, no lost work.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits this segment | 15 |
| Lines added | +6,534 |
| Lines removed | −365 |
| Submodules touched | mx-audit, mx-crm, mx-outputs |
| New scripts | `scripts/bin/2pager.sh`, two field-audit scripts |
| New npm target | `pdf:twocol` |

---

## Next Steps

- Review pre-existing `mx-outputs/pdf/presentations/` deletions (not this session's work) and either commit the removal or restore.
- Consider promoting `2pager.sh` into the `mx-create-pdf` skill as an additional layout option.

---

## Commit Log

### Hub (this segment)

| Hash | Description |
|------|-------------|
| 4dfc3976 | Bump mx-crm/mx-outputs: NEOM 2026-04-15 regenerated end-to-end (gates green) |
| e8482c95 | Add canon classification manifest for standard/carriers/extensions split |
| 05349955 | Field scripts: scan HTML/JS/CSS for non-YAML mx: carriers |
| ec7b57bc | Field scripts: extend scan to .yaml/.yml/.json + MX-shape filter |
| bde3317b | Bump mx-crm/mx-outputs: clear NEOM 2026-04-15 artifacts |
| d79b9b81 | Bump mx-audit: sitemap-index discovery + query-string-safe detection |
| c5524ca9 | Add two reusable field-usage audit scripts |

### Submodules (this segment)

| Repo | Hash | Description |
|------|------|-------------|
| mx-outputs | b98e2b6 | Add Machine Experience one-pager PDF (two-column layout) |
| mx-outputs | a907459 | NEOM 2026-04-15: regenerated PDF from gate-green markdown |
| mx-crm     | 79b701d | NEOM 2026-04-15: fresh regenerated report (gates green) |
| mx-audit   | 3b8c1f4 | Fix sitemap discovery: sitemap-index + query-string-safe detection |
