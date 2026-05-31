---
title: "Co-Directors Report — ABOUT trio extended to a quartet; mx.generate auto-injection lands in the PDF script"
description: "Morning session that gave each of the four ABOUT-* canonical biographies a declared PDF destination in letter format, drafted ABOUT-DOGU from internal sources, and taught the PDF pipeline to self-heal missing mx.generate blocks on first encounter."
author: "Tom Cranstoun"
created: 2026-05-31
modified: 2026-05-31
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-31-morning-report.md
---

# Co-Directors Report — ABOUT trio extended to a quartet; mx.generate auto-injection lands in the PDF script

**Date:** 31 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

The four canonical biographies (Tom, Salva, Scott, and the new Doğu) now declare their own PDF destinations in letter format, and the PDF orchestrator auto-injects a minimal `mx.generate` block into any source markdown that lacks one. One missing partner profile, three improved by metadata, and one fewer paper-cut for anyone who later runs the PDF script on a fresh file.

---

## What Was Done

### 1. ABOUT-DOGU.md drafted from internal sources

Yunus Doğu Abaris is The Gathering's Software Engineer, Chair of the W3C AI Content Disclosure Community Group, and named Technical Lead and Standards Editor on the Reginald CCE grant. He has been carrying public-standing roles in every external-facing document we file (the CCE Letter of Support, the visa reference letter, the contractor agreement with The Gathering Administration Ltd) without a canonical single-source-of-truth biography. The new ABOUT-DOGU.md closes that gap. Public-safe by construction: residential address, phone, day rate, and lastContact stay in `mx-crm/contacts/dogu-abaris/`. Voice is third-person to match Scott; voice swap to first-person is one edit if Doğu prefers to take the pen.

### 2. ABOUT-* trio extended with declared PDF destinations

Tom, Salva, and Scott's biographies each gained an `mx.generate` block plus `x-mx-pdfDoctype: letter` so the regeneration command and destination are declared in the source. All four ABOUT-* PDFs now render as `doctype: letter` (no cover, no TOC, letterhead preprocessor), ship with their AI + deterministic provenance sidecar pair, and classify MX Compatible.

### 3. PDF orchestrator self-heals missing mx.generate

Added `inject_mx_generate_into_source()` to `mx-reginald/audit/scripts/bin/audit-pdf.sh`. When the script encounters a source markdown without an `mx.generate` block, it now patches the source itself rather than only inferring the destination silently at runtime. Idempotent, skips non-writable files and non-frontmatter files. Future first-time renders leave behind a declared destination instead of a guess. Tom's request was literal: "patch [the file] and fix [the] script to do this in future" — done both ways.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 2 |
| Files changed | 17 |
| Lines added | +1,991 |
| Lines removed | −5 |
| Repositories | 2 (hub + mx-outputs) |
| New canonical biographies | 1 (ABOUT-DOGU.md) |
| ABOUT-* PDFs rendered (letter doctype) | 4 |
| Provenance sidecars produced | 8 (4 AI + 4 deterministic) |

---

## Why It Matters

The four canonical biographies are the source of truth that grant applications, sponsor pitches, the Reginald CCE submission, the visa reference letter, and the public-facing partnership pages all draw from. Until this morning, Doğu's was missing — which meant any artefact citing him pulled facts from whichever document the author happened to have open. With ABOUT-DOGU.md in place, every future artefact pulls from one place. The script fix is smaller but compounds: every new markdown file we PDF from this point forward gets a declared destination, so future regenerations are deterministic without anyone having to remember to add the block by hand.

---

## Next Steps

- Send ABOUT-DOGU.md to Doğu for sign-off before it is cited in any public surface (LinkedIn, grant attachments, registry entry).
- Decide whether the third-person voice on ABOUT-DOGU.md should stay or whether Doğu takes the pen (matching Salva's first-person).
- Watch the next first-time PDF render to confirm the auto-injection works on a wild file (the helper is idempotent and safe; this is verification, not doubt).

---

## Commit Log

| Hash | Description |
|------|-------------|
| 28094d7 (mx-outputs) | Add ABOUT-* PDFs in letter format (Tom, Salva, Scott, Dogu) |
| _pending_ (hub) | ABOUT-* trio + DOGU biography; PDF script auto-injects mx.generate |
