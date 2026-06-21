---
title: "Co-Directors Report — UNESCO Wiring, Frankfurt Demo Correction, Visa Letter Signed"
description: "Evening segment closed two book-level updates (UNESCO ethics alignment, Frankfurt demo correction with IDHL co-sponsor lock-in) and finished the Dogu Abaris visa reference letter with embedded signature."
author: "Tom Cranstoun"
created: 2026-05-11
modified: 2026-05-11
version: "1.0"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-11-evening-report.md
  purpose: "Evening segment closed two book-level updates (UNESCO ethics alignment, Frankfurt demo correction with IDHL co-sponsor lock-in) and finished the Dogu Abaris visa reference letter with embedded signature."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - UNESCO Wiring, Frankfurt Demo Correction, Visa Letter Signed"]

---

# Co-Directors Report — UNESCO Wiring, Frankfurt Demo Correction, Visa Letter Signed

**Date:** 11 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

The evening closed three workstreams the morning and afternoon had opened. UNESCO AI-ethics alignment is now wired through both the Free Book and Protocols. The Frankfurt stage narrative is correctly framed (The Gathering demos, not REGINALD) and IDHL is locked as the second founding sponsor. The Dogu Abaris UK Global Talent visa reference letter is signed, the PDF regenerated tagged for accessibility, and ready to submit.

---

## What Was Done

### 1. Books — UNESCO ethics alignment

Threaded the UNESCO AI ethics framing through the Free Book and the Protocols. Closed the Chapter 0 wiring item that has been carried in REMINDERS for several sessions.

### 2. Business plans — Frankfurt narrative correction and IDHL lock-in

Three coordinated commits across business-facing docs:

- Frankfurt stage demo is The Gathering (open standards body), not REGINALD (DDT's commercial registry). The earlier framing risked muddling the audience read of who owns what — the standards are vendor-neutral, REGINALD is the commercial implementation that ships on top.
- Business adjacencies dropped the Frankfurt-deadline framing — Frankfurt is a stage moment, not a product gate.
- IDHL (Jonathan Healey) confirmed as the second founding sponsor of The Gathering alongside DDT Ltd. Both will be named from the stage on 12 May.

### 3. Visa reference letter — Dogu Abaris

Finished the visa reference letter for Yunus Doğu's UK Global Talent application. Embedded Tom's signature.png at both signing blocks (Yours faithfully + final Signed), moved the company-number block alongside the address to free vertical space, and converted both signature blocks to a side-by-side layout (signature image left, typed name + date right). Both blocks are now identical in structure. First signature lands on page 3 with the closing prose; second signature lands on page 4 with the credentials section. PDF regenerated tagged (ISO 14289-1 Level 2).

Letter template (`scripts/templates/pdf/letter.css`) gained a `.signature-block` rule and tighter h2 spacing, so the next letter that follows this pattern inherits the layout.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (hub) | 5 |
| Commits (submodules) | 2 (mx-crm, mx-outputs) |
| Files changed | ~30 |
| Repositories | 3 (MX-hub, MX-CRM, MX-outputs) |
| REMINDERS items closed | 1 (Chapter 0 UNESCO wiring) |
| New canon CSS rule | `.signature-block` in `letter.css` |

---

## Decisions Made

- IDHL named as second founding sponsor of The Gathering alongside DDT Ltd, both announced from the Frankfurt stage on 12 May.
- Frankfurt stage demo is The Gathering's open standards, not REGINALD. REGINALD is referenced as the commercial implementation but not demoed; audit/REGINALD demos move to the Q2 follow-on conference circuit.
- Visa letter signature blocks unified — both use the identical side-by-side image+name+date layout, not separate Founder/Director vs. dated formats.

---

## Next Steps

- Submit Dogu Abaris visa reference letter PDF to Tech Nation.
- Consider applying the same embedded signature + side-by-side layout to `mx-crm/contacts/dogu-abaris/contractor-agreement.md` when next regenerated, for consistency across both Dogu documents.
- Frankfurt stage on 12 May — IDHL co-announcement live.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 77debc4b | REMINDERS: close ch00 UNESCO-wiring item, now landed across the manuscripts |
| 2d29ed6d | Books: wire UNESCO AI ethics alignment through Free Book and Protocols |
| 77ce30be | Frankfurt stage demo is The Gathering, not REGINALD |
| a0d237ae | Business adjacencies: drop Frankfurt-deadline framing |
| b69135ab | Business plans: drop Frankfurt connection, lock IDHL as founding sponsor |
| mx-crm 8204804 | Embed Tom Cranstoun signature in Dogu Abaris visa reference letter |
| mx-outputs f092363 | Regenerate Dogu Abaris visa reference letter PDF with embedded signature |
| _pending_ | Hub: letter.css signature-block rule + submodule pointer bumps |
