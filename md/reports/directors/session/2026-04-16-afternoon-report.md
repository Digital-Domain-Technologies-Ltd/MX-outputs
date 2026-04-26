---
title: "Co-Directors Report -- TG-Community integration and Stream format decision"
description: "Afternoon session: mounted The Gathering's community repos, reviewed platform state, identified dogfooding gap, wrote discussion doc for admin"
author: "Tom Cranstoun"
created: 2026-04-16
modified: 2026-04-16
version: "1.0"

mx:
  status: active
  contentType: report
  reportType: directors
  audience: [business]
  confidential: true
  x-mx-segment: afternoon
  tags: [directors-report, session, afternoon, tg-community, stream, standards]
---

# Co-Directors Report -- TG-Community Integration

**Date:** 16 April 2026 -- Afternoon
**Segment:** afternoon (12:00-17:00)

---

## Summary

Mounted The Gathering's four community platform repos (Stream backend, frontend, draft template, website) as read-only submodules for reference. Reviewed their state and documented deficiencies for The Gathering's admin team. Discovered a strategic tension: Stream uses IETF RFC format for draft submissions, but MX's own standard says content should carry MX metadata. Wrote and committed a discussion document asking The Gathering's admin to resolve this before the Frankfurt CMS Summit. Rebuilt all Appendices HTML to reflect the canon-split changes from the previous session.

---

## What Was Done

### 1. TG-Community repos mounted and reviewed

Four repos from the TG-Community GitHub org added as read-only submodules under `tg-community/`: stream-back-end (Express/MongoDB API), stream-front-end (Next.js client), stream-draft-template (RFC-style draft authoring), and website (public marketing site). CLAUDE.md updated with a read-only enforcement rule; PreToolUse hook prevents accidental writes.

Review found seven deficiencies: no automated tests in any repo, no CI/CD pipelines, no MX metadata on platform docs, standards API not wired to ratified MXS files, hardcoded website content, missing CONTRIBUTING.md. Documented in `mx-canon/ssot/tg-community-review-notes.md` with priority ranking and effort estimates.

### 2. Stream draft format -- dogfooding gap identified

The four ratified MX standards (MXS-01..04) are ready for public submission via Stream, but Stream's draft template uses IETF RFC frontmatter -- not MX frontmatter. This means The Gathering's own platform does not use the standard it publishes. Three options analysed (adopt MX format, keep RFC with conversion, hybrid). Recommendation: Stream should adopt MX cog format natively. Discussion doc committed at `DISCUSSION-stream-draft-format.md` for admin review. Response requested by 18 April -- this is the last blocker before public submission and Frankfurt visibility.

### 3. Appendices HTML rebuilt

Ran `npm run pdf:appendix` to regenerate all appendix HTML files. Confirmed appendix-m.html now includes section 27 (Canon Layout, three-file split, External standards MX defers to). New appendices Q, R, S, T generated for recently added content. Stale-HTML REMINDERS item removed.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (afternoon) | 3 |
| Files changed | 10 |
| Lines added | +8,291 |
| Lines removed | -32 |
| Repositories touched | 2 (hub, mx-crm) |

---

## Decisions Made

- TG-Community repos are **read-only reference** -- CogNovaMX does not modify them.
- Stream draft format decision **escalated to Gathering admin** -- not a unilateral CogNovaMX call.
- Appendices rebuild confirmed all canon-split prose changes render correctly in HTML.

---

## Next Steps

- Await Gathering admin response on Stream format discussion (deadline: 18 April)
- Send TG-Community review notes to admin alongside the discussion doc
- Once format resolved: submit MXS-01..04 to Stream (plan at `~/.claude/plans/adaptive-swinging-hamster.md`)
- Frankfurt countdown: 26 days (12 May)

---

## Commit Log

| Hash | Description |
|------|-------------|
| fd900c9f | Stream draft-format discussion doc + urgent reminders |
| 8ba0ef9e | Rebuild Appendices HTML after canon split + section 27 additions |
| 80c86b58 | REMINDERS: remove completed Appendices HTML rebuild item |
