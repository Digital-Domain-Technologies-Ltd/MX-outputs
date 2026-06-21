---

title: "Co-Directors Report — PDF Rebuilds and Publication Update"
created: "2026-03-15"
version: "1.0"
author: Tom Cranstoun
type: info-doc
mx:
  x-mx-segment: "morning"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-15-morning-report.md
  purpose: "Co-Directors Report - PDF Rebuilds and Publication Update"
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - PDF Rebuilds and Publication Update"]

---


# Co-Directors Report — PDF Rebuilds and Publication Update

**Date:** 15 March 2026 — Morning
**Segment:** morning (midnight–noon)

---

## Summary

Following yesterday evening's terminology correction (agent → machine), all publication artefacts were rebuilt. Both book PDFs, HTML versions, and the free introduction chapter on allaboutv2 now reflect the corrected terminology. The appendices web HTML was regenerated automatically during the Protocols build.

---

## What Was Done

### 1. PDF Rebuilds

Both book PDFs rebuilt with corrected terminology:

- **MX: The Protocols** — 6.9MB (via `pdf:protocols-all`, includes illustrations)
- **MX: The Handbook** — 77MB (via `pdf:mx-all`)
- Both HTML versions regenerated alongside

### 2. Free Chapter Update

The free introduction chapter (`mx-introduction-chapter.pdf`) on allaboutv2 was updated from the rebuilt `chapter-00-introduction-to-mx.pdf` in mx-outputs.

### 3. Appendices Web HTML

The Protocols build automatically regenerated 16 appendix HTML files plus `sitemap.xml` in `datalake/manuscripts/mx-books/mx-appendices/web/`. These reflect the terminology corrections.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (today) | 2 |
| Commits (yesterday evening) | 4 |
| PDF files rebuilt | 2 |
| HTML files regenerated | 19 (2 book HTML + 17 appendices web) |
| Repositories touched | 3 (main, mx-outputs, allaboutv2) |

---

## Next Steps

- Review sample chapters in PDF for tone consistency
- Commit appendices web HTML (pending)

---

## Commit Log

| Hash | Description |
|------|-------------|
| a6377724 | Update mx-outputs pointer: rebuilt PDFs with agent→machine terminology |
| a82654e5 | Update allaboutv2 pointer: refreshed introduction chapter PDF |
