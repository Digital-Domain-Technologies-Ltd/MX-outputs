---
title: "Co-Directors Report -- Manuscript Restructure, Free Book Polish, and Email Capture"
description: "Full evening session: manuscript restructure (49 soul.md files), PDF pipeline fixes, free book redesigned and deployed, email capture with MailerLite + Resend, free book further polished (QR removed, chapter tables, duplicate TOC fix, em-dash cleanup), CRM stale directories removed."
author: "Tom Cranstoun"
created: 2026-04-24
modified: 2026-04-24
version: "2.0"
type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-24-evening-report.md
  purpose: "Full evening session: manuscript restructure (49 soul.md files), PDF pipeline fixes, free book redesigned and deployed, email capture with MailerLite + Resend, free book further polished (QR removed, chapter tables, duplicate TOC fix, em-dash cleanup), CRM stale directories removed."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report -- Manuscript Restructure, Free Book Polish, and Email Capture"]

---

# Co-Directors Report -- Manuscript Restructure, Free Book Polish, and Email Capture

**Date:** 24 April 2026 -- Evening
**Segment:** Evening (17:00+)

---

## Summary

This evening completed two distinct arcs. The first arc -- carried over from a previous context -- restructured all three manuscripts into one-folder-per-chapter, generated 49 soul.md descriptor files, fixed three PDF generation errors, and deployed a new Cloudflare Worker route gating the free book download behind an email capture form (MailerLite subscription + Resend admin notification). The second arc polished the free book further: removed the now-redundant QR/footnotes page, replaced prose book descriptions with structured chapter tables (Handbook first), fixed a duplicate contents page caused by pandoc's --toc flag, and replaced all 35 em-dashes with hyphens. The CRM was also tidied: three stale flat client directories (kwint, lpc, media219) were removed after the contacts reshape shipped in an earlier session.

---

## What Was Done

### 1. One-folder-per-chapter restructure -- all three manuscripts

Every content file across the three manuscripts moved into a named subfolder matching the conventions cog.

**MX: The Protocols** -- 28 files moved into chapter-00/ through chapter-22/, executive-summary/, preface/, reading-guide/, the-end/, rear-cover/.

**MX: The Handbook** -- 18 files moved into 0-cover/, foreword/, preface/, reading-guide/, chapter-00/ through chapter-12/, the-end/. Two table images moved into chapter-10/.

**Free-book** -- 3 files moved into chapter-00/, purchase-books/, services-advert/.

### 2. soul.md files -- 49 created

Every new chapter folder received a soul.md with YAML frontmatter and a 2-3 sentence body describing the chapter's purpose, arc position, and intended reader.

| Manuscript | soul.md files |
|-----------|---------------|
| Protocols | 28 |
| Handbook | 18 |
| Free-book | 3 |
| **Total** | **49** |

### 3. PDF generation errors fixed

Three distinct errors were blocking PDF generation, diagnosed via pandoc --verbose:

- **endnotes.sty missing** -- downloaded from CTAN and installed to user texmf tree.
- **shared-header.tex unresolvable** -- copied to user texmf tree; updated all three metadata yaml files.
- **--syntax-highlighting flag invalid** -- replaced with --highlight-style in package.json.

### 4. Package.json and script updates

Glob patterns replaced with explicit ordered paths across ten affected scripts. Chapter-00 and services-advert paths updated in gen-free-book.sh.

### 5. Free book ending expanded from soul.md files

The brief "Where to go from here" section replaced with full chapter guides for both books, sourced from soul.md files.

### 6. Cloudflare Worker -- free book email capture

New route on mx.allabout.network:

- **GET /books/download-intro** -- styled HTML email capture form.
- **POST /books/download-intro** -- subscribes to MailerLite "Free Book Downloads" group (ID 185654229318239343), sends admin notification via Resend, redirects to PDF.

Worker version deployed: 14e34486. `introduction.html` download buttons updated.

### 7. Email notification fix

Notification was being sent to the from-address (info@cognovamx.com) instead of Tom's gmail. Fixed by adding FREE_BOOK_NOTIFY_EMAIL to wrangler.toml and using it as the `to` field in the handler.

### 8. Free book QR/footnotes page removed

The free book has no footnotes or endnotes. The QR page was removed from gen-free-book.sh -- variables, step block, page calculation, TOC row, merge list, cleanup. Step count reduced from 10 to 9.

### 9. Chapter tables in free book (Handbook first)

Prose book descriptions replaced with structured two-column tables (# | Chapter | What it covers). MX: The Handbook appears first, MX: The Protocols second. Chapter titles taken from soul.md files.

### 10. Duplicate contents page fixed

gen-free-book.sh step 1 previously called pdf:chapter00-simple (which has --toc --toc-depth=2), producing a second TOC inside the chapter-00 PDF. Step 1 now runs pandoc directly without --toc, leaving pdf:chapter00-simple unchanged for standalone use.

### 11. Em-dash replacement

All 35 em-dashes (--) in chapter-00-free.md replaced with space-hyphen-space ( - ) per writing conventions. PDF regenerated and deployed.

### 12. CRM stale directories removed

Three flat client directories (kwint, lpc, media219) removed from mx-crm after the contacts reshape to one-folder-per-person shipped in an earlier session.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| soul.md files created | 49 |
| Chapter subfolders created | 49 |
| PDF errors fixed | 3 |
| package.json scripts updated | 10 |
| Em-dashes replaced | 35 |
| New Worker routes | 1 (GET + POST) |
| MailerLite groups created | 1 (Free Book Downloads) |
| Worker tests | 203 passing (7 new) |
| Worker version deployed | 14e34486 |
| CRM files removed | 14 (3 client directories) |
| Hub commits | 10+ |
| Submodule commits | 8 |

---

## Next Steps

- Test /books/download-intro end-to-end: submit real email, confirm notification arrives at tom.cranstoun@gmail.com
- Set up MailerLite welcome automation for "Free Book Downloads" group
- Decide Protocols imprint: DDT or CogNovaMX (critical path before 1 Jul)

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| a01f9dc5 | hub | refactor: split Frankfurt CMS Summit files into talk/ and workshop/ subfolders |
| a092fa61 | hub | style: replace em-dashes with hyphens in free book chapter |
| 2bcbb727 | hub | fix: remove duplicate contents page from free book |
| e078160a | hub | docs: free book -- handbook first, chapter tables replace prose |
| bbaf0afe | hub | fix: remove QR/footnotes page from free book; fix notification email |
| d21ae78b | hub | chore: update mx-outputs submodule pointer (evening session) |
| c1a00114 | hub | feat: email owner notification on free book download |
| 4204bdaf | hub | feat: add email capture for free book downloads |
| 52198c4d | hub | chore: one-folder-per-chapter restructure across all three manuscripts |
| 7bb39c7 | mx-crm | crm: remove stale flat client directories (kwint, lpc, media219) |
| 7202600 | mx-outputs | free-book: update intermediate chapter PDFs after em-dash fix |
| bca35a2 | mx-outputs | free-book: replace em-dashes with hyphens |
| 982948e | mx-outputs | free-book: remove duplicate contents page |
| 0d4ad12 | mx-outputs | free-book: handbook first, chapter tables replace prose descriptions |
| 988c748 | mx-outputs | free-book: remove footnotes QR page (9-section PDF) |
| 00a2f2f | mx-outputs | evening: manuscript restructure, free book deploy, email capture |
| fe5b292c | allaboutv2 | feat: add email capture for free book downloads |
| 5c98f8b7 | allaboutv2 | feat: email owner notification on free book download |
