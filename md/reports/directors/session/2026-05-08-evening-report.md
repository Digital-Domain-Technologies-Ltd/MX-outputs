---
title: "Co-Directors Report — Brand guide, Schema.org post, cog enforcer fixed, dotfusion.com re-audited"
description: "Evening session: mx-site brand guide published, Schema.org post live, cog enforcer v1.8 fixed (scripted/hybrid routing), mx exec dispatcher added, dotfusion.com 5-page audit delivered."
author: "Tom Cranstoun"
created: 2026-05-08
modified: 2026-05-08
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-08-evening-report.md
---

# Co-Directors Report — Brand guide, Schema.org post, cog enforcer fixed, dotfusion.com re-audited

**Date:** 8 May 2026 — Evening
**Segment:** Evening (since 5pm)

---

## Summary

**v1.1 addition:** A late-evening session diagnosed and fixed two bugs in the cog enforcement hook (`run-cog-enforcer.sh`), added `mx exec` as a first-class dispatcher alias, and ran a clean 5-page audit of dotfusion.com — the first complete run since the pipeline hardening in the afternoon. The cog enforcer now correctly identifies hybrid/scripted action-cogs and routes them to `mx exec` rather than emitting the wrong SOP-read directive.

**v1.0 summary:** The evening closed out a full day of output work. The mx-site brand guide HTML was published as a reusable reference for all future site work, LinkedIn banners were iterated through four versions to clear the profile-picture boundary, the html-writer skill was formally scoped to mx-site only, and the Schema.org provenance blog post was published and promoted alongside three infrastructure posts. Nine commits landed.

---

## What Was Done

### 1. mx-site Brand Guide Published

A brand guide HTML page was added to `mx-outputs/brand/` covering the mx-site palette, typography, component patterns, and naming conventions. This becomes the single reference any session or contributor uses when writing or reviewing mx-site HTML — no more guessing colours or class names from live files.

### 2. LinkedIn Banner Iterations

Four banner versions were produced and pushed:
- v1: The Gathering logo (initial)
- v2: Profile-pic safe layout (breathing room on the left)
- v3: Inverted Gathering logo variant
- v4: Logo repositioned clear of the profile-picture circle

Each iteration went to mx-outputs and was visible on LinkedIn. v4 is the current live version.

### 3. html-writer Skill Scope Convention

The html-writer skill, CLAUDE.md reference table, and UBERCOG routing note were updated to make explicit that html-writer applies to mx-site only. Any HTML for other sites (cognovamx.com, allabout.network brand pages, etc.) is directed to the relevant site's brand guide in `mx-outputs/brand/`. This prevents scope creep where the skill silently absorbs work it was not designed for.

### 4. Blog Posts Promoted

Four posts promoted or newly published:

- **Schema.org and the missing provenance layer** — new post, live today; covers the gap Schema.org leaves in provenance and how MX fills it
- Three infrastructure posts promoted from draft with full canonical head blocks and structured data tuned for prospect scans

### 5. Cog Enforcer v1.8 — Two Bugs Fixed

The `UserPromptSubmit` hook (`run-cog-enforcer.sh`) that enforces cog execution had two bugs that became visible when dotfusion.com was re-audited via "use cog to audit-site":

**Bug 1 — Wrong cog resolved.** The registry fuzzy scorer used `"/scripts/cogs/" in path` to award the action-cog bonus, but registry paths are stored without a leading slash (`scripts/cogs/mx-audit.cog.md`). The string never matched, so all audit cogs tied and the info-doc manual (`manual-web-audit-suite.cog.md`) won on description token hits. Fixed by removing the leading slash. The `mx-audit.cog.md` entry also had its tags extended with `site`, `website`, `domain` so the scorer produces a clear win (score 5 vs 4) when the user mentions a URL or site.

**Bug 2 — Wrong directive for scripted/hybrid cogs.** The hook always emitted the SOP-read message ("Read the cog, follow execute: actions") regardless of cog type. For hybrid/scripted cogs, this means the embedded script is never run. Fixed: the hook now reads `actionType` from the cog's YAML frontmatter and emits a type-specific directive. For `scripted`/`hybrid`: "Run `mx exec <cogname>` via Bash, then follow prose inference." For others: existing SOP message. An 8 KB read cap was also replaced with line-by-line iteration to handle the 25 KB frontmatter in `mx-audit.cog.md`.

### 6. mx exec Dispatcher Added

`mx exec [args]` was not working — the dispatcher (`mx.sh`) had no `exec` case and fell through to the `mx.<cmd>.sh` router which then failed. Added an `exec)` special case that calls the `mx-exec` binary directly. `mx-audit.cog.md` had its `actionType: hybrid` field added (the cog has both an embedded script and LLM prose inference steps).

### 7. dotfusion.com Re-Audited (5 Pages)

Fresh 5-page audit of <https://dotfusion.com> run via the fixed cog pipeline. Report and all gate sidecars updated in `mx-crm/outreach/2026-05-08/`. PDF delivered to `mx-outputs/pdf/outreach/2026-05-08/dotfusion-com-report.pdf` (1.1 MB). Gates ran in auto-warn mode (round count past cap from earlier runs); no factual blockers.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (v1.0 evening) | 9 |
| Commits (v1.1 late evening) | 2 (mx-crm + hub) |
| Hook bugs fixed | 2 |
| Audit pages | 5 |
| Repositories touched | 3 (hub, mx-crm, mx-outputs) |
| LinkedIn banner iterations | 4 |
| Blog posts live | 1 new, 3 promoted |

---

## Decisions Made

- Brand guide convention locked: one `mx-outputs/brand/<site>-brand-guide.html` per site; html-writer skill is mx-site only and explicitly says so
- Cog enforcement is now type-aware: scripted/hybrid cogs route to `mx exec`; SOP cogs route to the prose-read directive
- `actionType` is now required on all action-cogs for correct hook routing

---

## Next Steps

- End-to-end test `mx-audit/standalone.js` from a clean directory (carried from REMINDERS.md)

---

## Commit Log

| Hash | Description |
|------|-------------|
| 95b11d4f | Bump mx-outputs: LinkedIn banner for The Gathering |
| cd02cb59 | Bump mx-outputs: add mx-site brand guide HTML |
| ab15cd22 | Scope html-writer and brand guide convention across CLAUDE.md, UBERCOG, and skill |
| 80138376 | Bump mx-outputs: LinkedIn banner v2 (profile-pic safe layout) |
| d1a18325 | Bump mx-outputs: LinkedIn banner with inverted Gathering logo |
| 6aa721c1 | Bump mx-outputs: promote three infrastructure posts and tune site for prospect scans |
| 01671268 | Bump mx-outputs: LinkedIn banner v4 (logo clear of profile pic) |
| 7b1d0b43 | Bump mx-outputs: promote newborn-LLM-COG post with full canonical head block |
| a203e6f0 | Publish blog post: Schema.org and the missing provenance layer; add deprecations to wordlist |
| bd960ae | mx-crm: dotfusion.com audit 2026-05-08 (5 pages): report and sidecar files |
| b10da8af | hub: fix cog enforcer v1.8; add mx exec dispatcher |
