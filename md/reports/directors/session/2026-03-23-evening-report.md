---
title: "Co-Directors Report — Gathering Blog Post and PDF Tooling Fix"
created: "2026-03-23"
x-mx-segment: "evening"
version: "1.0"
author: Tom Cranstoun
audience: business
confidential: true

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-23-evening-report.md
  purpose: "Co-Directors Report - Gathering Blog Post and PDF Tooling Fix"
  audience: [humans, machines]
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Gathering Blog Post and PDF Tooling Fix"]
---

# Co-Directors Report — Gathering Blog Post and PDF Tooling Fix

**Date:** 23 March 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

Created a full blog post for The Gathering, weaving together the 2024 CMS Critic article origin story, Vancouver Boye & Co confirmation, MX core principles, and the book publishing schedule into a single narrative. Humanised the text against the writing style guide. Fixed a broken PDF generation toolchain along the way.

---

## What was done

### 1. The Gathering blog post

Created `mx-canon/mx-maxine-lives/communications/blogs/md/the-gathering-blog.md` — a long-form blog post that tells the two-year arc from Tom's [CMS Critic article](https://cmscritic.com/a-cms-consultants-takeaways-from-cms-kickoff-2024) (early 2024) through Vancouver (March 2026) to The Gathering and the book publishing schedule. The post went through several iterations:

- Initial draft from Tom's provided content
- Wove in the CMS Kickoff 2024 origin story with direct link
- Integrated the MX core principles as narrative prose (not a spec sheet)
- Added the publishing schedule (Handbook 2 Apr, Frankfurt 12 May, Protocols 1 Jul)
- Ran `/humanizer` — fixed 14 writing standard violations and removed 11 AI patterns
- Passed markdownlint with zero errors

### 2. PDF generation tooling fix

`npm run pdf:doc` was broken because `scripts/package.json` declares `"type": "module"` but `generate-document-pdf.js` uses CommonJS `require()`. Fixed by renaming the script to `.cjs` and updating the npm script reference in the root `package.json`. PDF generation now works reliably.

---

## By the numbers

| Metric | Value |
|--------|-------|
| Commits | 0 (all uncommitted) |
| Files changed | 4 |
| New files | 2 (blog .md, blog .pdf) |
| Modified files | 2 (package.json, generate-document-pdf renamed) |
| Repositories | 2 (main, mx-outputs) |

---

## Next steps

- Publish blog post to allaboutv2 as HTML when ready
- Consider adding CMS Summit Frankfurt section to blog when event details finalise

---

## Commit log

All work is uncommitted at time of report generation. Will be committed in Step 3.
