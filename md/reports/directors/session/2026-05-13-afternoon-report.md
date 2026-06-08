---
title: "Co-Directors Report — Cog hygiene, slowest-page probe, and CMS Summit write-up"
description: "Cleared cog:validate backlog, pruned ten REMINDERS items, shipped a slowest-page re-probe into the audit pipeline, and published the CMS Summit 26 Frankfurt write-up to the blog."
author: "Tom Cranstoun"
created: 2026-05-13
modified: 2026-05-13
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-13-afternoon-report.md
  purpose: "Cleared cog:validate backlog, pruned ten REMINDERS items, shipped a slowest-page re-probe into the audit pipeline, and published the CMS Summit 26 Frankfurt write-up to the blog."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Cog hygiene, slowest-page probe, and CMS Summit write-up"]
---

# Co-Directors Report — Cog hygiene, slowest-page probe, and CMS Summit write-up

**Date:** 13 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

Four threads. First: cleared the cog-validator backlog from 52 warnings plus 21 info notes to one deliberate exception. Second: pruned ten stale REMINDERS items as the standards-drafting flow and four live outreach threads closed. Third: extended the audit pipeline with a cache-busted slowest-page re-probe so origin response stability gets a real verdict in every report. Fourth: published the CMS Summit 26 Frankfurt write-up to mx-site, with a self-contained MX-vs-GEO side note.

---

## What Was Done

### 1. Cog hygiene sweep

`cog:validate` had been carrying a long tail of `recommended-field` warnings (22 contact cogs missing version / x-mx-category, four other cogs missing x-mx-category), three `execute-without-action-doc` warnings on cogs that mix briefing-or-config contentType with an `x-mx-execute` block, and 21 `description-length` info notes (descriptions over the 160-character recommended cap). After the sweep: one warning remains by design, the rest are clear.

The sweep touched four repos: hub (UBERCOG + scripts/cogs + 9 mx-canon cogs), mx-crm (22 contact cogs), mx-outputs (4 reginald and migration cogs), and mx-audit (one architecture cog). All four submodules committed and pushed; hub commit bumps the pointers. mx-reginald's auto-generated index also regenerated to reflect the new descriptions.

The single remaining warning is the `example-with-includes.cog.md` reference implementation, which carries `x-mx-execute:` for demonstration purposes and is explicitly marked "not a production action-doc" in its own policy block. Silencing this warning would defeat the cog's purpose.

### 2. REMINDERS housekeeping

Ten items dropped in two passes.

Four were Stream / Gathering filing items (file seven draft notes, compliance-claims programme resume, cross-session migration backlog, TG-Community review notes) removed after Tom confirmed the standards-drafting flow is no longer in scope.

Four were live outreach threads now closed: Dogu visa submission, Dotfusion / Chris Bryce re-engagement decision, C-THRU.ai technical call, Bare Metal Ventures follow-up.

Two were BMV-dependent prerequisites (HTML pitch-deck verification and pitch-deck timing update) that became moot once the BMV thread closed.

The high-priority REMINDERS landscape is now: one urgent (business plans review, 17 days old), three orange (GA4 property, REGINALD publisher list, DDT DNS validation). The outreach-pending bucket is empty.

### 3. Slowest-page re-probe in the audit pipeline

New `mx-audit/bin/slowest-page-probe.js` runs during collect step 8a. It re-fetches the slowest URL from the crawl plus a median-load URL, three cache-busted samples each, and writes `slowest-page-perf.json` into `mx-audit/results/<host>/`. The infill-report consumer reads that sidecar to populate a new family of `[SLOWEST_PAGE_*]` placeholders, giving every report a verdict on origin response stability that the crawler's single-shot timing cannot deliver on its own. When the sidecar is absent (older runs, probe skipped), the placeholders collapse to a single graceful sentence rather than leaving raw tokens in the report. PRD, architecture cog, and both audit templates updated to reference the new sidecar.

### 4. CMS Summit 26 Frankfurt write-up

Published [cms-summit-26-frankfurt-write-up.html](https://mx.allabout.network/blog/cms-summit-26-frankfurt-write-up.html). A speaker's-eye conference write-up: thanks to Janus Boye and Matt Garrepy, every speaker named and credited by what they actually said, and a self-contained MX-versus-GEO side note positioned to answer the question several talks raised without naming. Card added to the top of the Blog-listing grid on the index. Blog sitemap, root sitemap, and llms-full.txt regenerated. Forty-three new proper nouns (speaker names, venue, vendor names) added to the project wordlist; three tokenisation artefacts from HTML-entity stripping removed.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (mx-crm) | 1 |
| Commits (mx-audit) | 2 |
| Commits (mx-outputs) | 3 |
| Commits (mx-reginald) | 2 |
| Commits (hub) | 5 published + this evening's bump pending |
| Cog files touched | 36 |
| cog:validate warnings | 52 to 1 |
| cog:validate info | 21 to 0 |
| REMINDERS items removed | 10 |
| Blog posts published | 1 (CMS Summit 26 write-up, ~2,200 words) |
| Repos touched | 5 |

---

## The Insight

Two themes collided this afternoon. The cog-validator cleanup restored signal value to a noisy gate. The slowest-page probe added signal to the audit report where there was previously a black hole around the difference between "the crawler measured a slow page once" and "the origin is consistently slow." Both moves cost roughly the same effort and produce the same kind of value: a reader can trust the system because the dial is calibrated, not because the dial has been hidden. The CMS Summit write-up rides on top of that calibration discipline — naming GEO and MX precisely matters for the same reason naming a `cog:validate` warning matters: vague signals erode trust, precise ones build it.

---

## Next Steps

- The 🔴 business plans review (since 26 April) is now the standout overdue item.
- Consider folding `cog:validate` warning-count into the pre-commit hook so the tail cannot grow silently again.
- Verify the CMS Summit 26 post renders correctly on live mx.allabout.network after Cloudflare purge.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 21c0635 (mx-crm) | Backfill contact-cog frontmatter: version + x-mx-category + tags |
| 88f8d93 (mx-audit) | Tighten architecture-cog description below the 160-char cap |
| 10e635a (mx-audit) | Add slowest-page re-probe + report placeholders |
| 873019c (mx-outputs) | Cog hygiene: backfill x-mx-category and trim long descriptions |
| 82cced8 (mx-outputs) | Publish CMS Summit 26 Frankfurt write-up |
| cd604ad (mx-outputs) | Add Tom photo to REGINALD profile assets |
| 0d74adc (mx-reginald) | Regenerate cog registry index after cog-hygiene sweep |
| ef82f29 (mx-reginald) | Regenerate registry index |
| 95a6c01a (hub) | Cog hygiene sweep: clear all cog:validate warnings except one exception |
| 1ca2b4da (hub) | REMINDERS pruning sweep; bump mx-outputs + mx-reginald |
| fc1ab828 (hub) | CHANGELOG 2026-05-13 afternoon: cog hygiene sweep + REMINDERS pruning |
| 5da24cc4 (hub) | Bump mx-outputs: regenerate README index for afternoon report |
| _pending_ (hub) | Publish CMS Summit 26 write-up: bump submodules, audit-pipeline edits, wordlist |
