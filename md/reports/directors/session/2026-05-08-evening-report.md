---
title: "Co-Directors Report — Brand guide published, LinkedIn banners shipped, Schema.org post live"
description: "Evening session: mx-site brand guide HTML published, LinkedIn banner iterated to v4, html-writer skill scoped to mx-site, Schema.org provenance blog post published."
author: "Tom Cranstoun"
created: 2026-05-08
modified: 2026-05-08
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-08-evening-report.md
---

# Co-Directors Report — Brand guide published, LinkedIn banners shipped, Schema.org post live

**Date:** 8 May 2026 — Evening
**Segment:** Evening (since 5pm)

---

## Summary

The evening closed out a full day of output work. The mx-site brand guide HTML was published as a reusable reference for all future site work, LinkedIn banners were iterated through four versions to clear the profile-picture boundary, the html-writer skill was formally scoped to mx-site only (directing other sites to their own brand guides), and the Schema.org provenance blog post was published and promoted alongside three infrastructure posts. Nine commits landed, all already on origin.

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

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 9 |
| Files changed | 12 |
| Lines added | +18 |
| Lines removed | -11 |
| Repositories | 2 (hub, mx-outputs) |
| LinkedIn banner iterations | 4 |
| Blog posts live | 1 new, 3 promoted |

---

## Decisions Made

- Brand guide convention locked: one `mx-outputs/brand/<site>-brand-guide.html` per site; html-writer skill is mx-site only and explicitly says so

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
