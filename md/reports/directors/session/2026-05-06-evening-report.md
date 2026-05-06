---
title: "Co-Directors Report — HTML Pitch Deck from Claude Design"
description: "Implemented the MX Bare Metal Ventures HTML pitch deck from a Claude Design handoff bundle, and updated the PPTX/markdown pitch to v2.2."
author: "Tom Cranstoun"
created: 2026-05-06
modified: 2026-05-06
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-06-evening-report.md
---

# Co-Directors Report — HTML Pitch Deck from Claude Design

**Date:** 6 May 2026 — Evening
**Segment:** Evening (since 5pm)

---

## Summary

This session implemented the MX pitch deck for Bare Metal Ventures in HTML from a Claude Design handoff bundle. The deck is 14 slides, editorial design (cream/ink/signal-red), built on a custom `<deck-stage>` web component with keyboard navigation, auto-scaling, and print-to-PDF. It lands in `mx-outputs/html/presentations/` as the canonical pitch artefact ahead of the Bare Metal Ventures meeting. The PPTX/markdown version was simultaneously updated to v2.2, aligning with the HTML deck's language and slide structure.

---

## What Was Done

### 1. HTML Pitch Deck Implementation

Fetched a Claude Design handoff bundle via the Reginald API endpoint. The bundle contained `MX Pitch.html` (14 slides, 79KB), `deck-stage.js` (the web component engine, 70KB), and a full chat transcript showing the design iteration. The design had been iterated through slide layout fixes, content revisions (slide 7 "Why Now" rewrite, slide 8 traction mosaic trimmed from 11 to 5 cards, slide 9 competitive matrix), and speaker notes in JSON. The implementation placed the files verbatim into `mx-outputs/html/presentations/` with a `.mx.yaml.md` folder metadata file.

**Deck contents:** Cover (red field), The Problem (4 enterprise AI failures), What's a Cog (identity/provenance/conformance), Cogs Provenance (YAML frontmatter with syntax highlighting), The Insight (credential list: Nissan-Renault, EE, X/Twitter, BBC, Ford, McLaren), What MX Is (3-card layout), How It Works (Publisher/Registry/Reader diagram), Where MX Fits (Bare Metal portfolio stack), Why Now (3 forces + 700% Adobe stat), Traction (5-card mosaic), Competitive Position (2×2 matrix + table), Local Reginald Machine (pricing + org table), The Ask (entity, milestone, multiples, use of funds), Connect (closing red slide).

### 2. BMV Pitch Deck v2.2 (PPTX)

The PPTX markdown and generated PPTX were updated to v2.2, renaming "MX OS" to "MX" throughout and rewriting slide copy to match the HTML design language. A new `Reginald.pptx` deck was added for the REGINALD registry. The `MX-what-why-when.md` lightning talk presentation was also updated.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (mx-outputs) | 2 |
| Commits (hub) | pending |
| Files changed | ~10 |
| Lines added | +4,118 |
| Lines removed | −130 |
| Repositories | 2 |
| New HTML deck slides | 14 |
| New PPTX files | 1 (Reginald.pptx) |

---

## Why It Matters

The HTML pitch deck is the primary investor-facing artefact for the Bare Metal Ventures meeting. Having it live in the repo — versioned, printable to PDF via browser, and presentable from any browser without dependencies — means it travels with the project and cannot be lost in email threads or Canva exports. The design was iterated in Claude Design and imported via the handoff API, establishing a repeatable workflow for future decks.

---

## Decisions Made

- HTML pitch deck placed in `mx-outputs/html/presentations/` (consistent with `md/presentations/` and `pptx/presentations/` patterns)
- File named `mx-pitch-bmv-2026.html` to match naming convention of `bmv-pitch-2026.pptx`
- `deck-stage.js` co-located with the HTML (relative path reference; no CDN dependency)
- Session-specific bash allowlist entries reverted from `settings.local.json` before committing

---

## Next Steps

- Open the deck in a browser and verify it renders, navigates, and prints to PDF correctly
- Consider whether the HTML deck should be served at a URL (e.g. via Cloudflare Pages or a signed link for the meeting)

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 6c7f461 | mx-outputs | Add HTML pitch deck: MX Pitch for Bare Metal Ventures (14 slides) |
| 2c10792 | mx-outputs | Update BMV pitch deck to v2.2; add Reginald.pptx; update MX-what-why-when |
| 951884d6 | hub | Bump mx-outputs: HTML pitch deck, BMV v2.2, Reginald.pptx, evening report |
| c00e4bac | hub | Update generate-pptx.mjs: improved layout and slide generation |
| 2a828c41 | hub | Rewrite BMV pitch brief to v2.2; add businesses/me/ with personal assets |
