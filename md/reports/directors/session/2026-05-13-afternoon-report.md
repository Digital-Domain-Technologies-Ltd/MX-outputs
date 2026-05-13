---
title: "Co-Directors Report — Cog hygiene sweep and REMINDERS pruning"
description: "Cleared all but one cog:validate warning across 27 files; pruned 10 stale REMINDERS items (Stream filing, four completed outreach threads, two BMV-dependent follow-ons)."
author: "Tom Cranstoun"
created: 2026-05-13
modified: 2026-05-13
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-13-afternoon-report.md
---

# Co-Directors Report — Cog hygiene sweep and REMINDERS pruning

**Date:** 13 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

Two threads, both housekeeping. First: cleared the cog-validator backlog from 52 warnings plus 21 info notes to one deliberate exception. Second: pruned ten stale REMINDERS items as the standards-drafting flow and four live outreach threads closed.

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

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (mx-crm) | 1 |
| Commits (mx-audit) | 1 |
| Commits (mx-outputs) | 1 |
| Commits (mx-reginald) | 1 |
| Commits (hub) | 1 published + 2 pending |
| Cog files touched | 36 |
| cog:validate warnings | 52 to 1 |
| cog:validate info | 21 to 0 |
| REMINDERS items removed | 10 |
| Repos touched | 5 |

---

## The Insight

The cog-validator tail had grown because nobody was watching it. Forty-nine of the warnings were one missing top-level field per CRM contact cog, repeated across the contact directory. The fix took one Python script and a categorical decision (`mx-contact` is the right `x-mx-category` for every contact). The cost of the cleanup was small; the cost of the noise was that anyone running `cog:validate` learned to skim past warnings as background hum. Periodic zero-out matters for the same reason a clean error log matters: it restores the signal value of the next warning that shows up.

---

## Next Steps

- The 🔴 business plans review (since 26 April) is now the standout overdue item.
- Consider folding `cog:validate` warning-count into the pre-commit hook so the tail cannot grow silently again.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 21c0635 (mx-crm) | Backfill contact-cog frontmatter: version + x-mx-category + tags |
| 88f8d93 (mx-audit) | Tighten architecture-cog description below the 160-char cap |
| 873019c (mx-outputs) | Cog hygiene: backfill x-mx-category and trim long descriptions |
| 0d74adc (mx-reginald) | Regenerate cog registry index after cog-hygiene sweep |
| 95a6c01a (hub) | Cog hygiene sweep: clear all cog:validate warnings except one exception |
| _pending_ (hub) | REMINDERS pruning: 10 items removed; bump mx-reginald pointer |
