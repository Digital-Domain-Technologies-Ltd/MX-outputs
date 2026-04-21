---
title: "Co-Directors Report — Content-Signal awareness in audit"
description: "Added contentsignals.org recognition to the audit pipeline as a positive, informational, non-scoring signal."
author: "Tom Cranstoun and Maxine"
created: 2026-04-21
modified: 2026-04-21
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
---

# Co-Directors Report — Content-Signal awareness in audit

**Date:** 21 April 2026 — Evening\
**Segment:** evening (17:00 onwards)

---

## Summary

The audit pipeline now recognises Content-Signal directives from contentsignals.org — Cloudflare's robots.txt extension for declaring AI/content-use policy. Presence earns a favourable mention in the report; absence triggers a gentle suggestion. Nothing about the score changes. Every directive found is captured in `robots_txt_analysis.json` for offline analysis.

---

## What Was Done

### 1. Parser and analyser recognise Content-Signal

The robots.txt parser now detects `Content-Signal:` directives scoped to the current User-agent block and exposes them on `parsed.contentSignals[]`. The quality analyser gains `hasContentSignals` and `contentSignalCount` — strictly informational, the score formula is untouched.

### 2. Offline analysis output extended

`generateRobotsTxtAnalysis` in `llmReports.js` now classifies Content-Signal separately from dead non-standard directives. Previously it was lumped in with `Crawl-delay` and `Host` as "no known crawler reads this" — that was wrong, since contentsignals.org is a recognised evolving convention. The written analysis file now carries `contentSignals[]`, `hasContentSignals`, and a `contentSignalsSpec` pointer to the spec URL.

### 3. Report surface

The golden report skeleton gains `[ROBOTS_CONTENT_SIGNALS_STATUS]` alongside the existing discovery facts. The table handler emits `present (N)` or `absent (consider adding — see contentsignals.org)`. Rewrite guidance in the skeleton tells the reporter to treat presence as positive, absence as a single-line suggestion — never a failure.

### 4. Audit-discovery skill carve-out

The skill previously told the reporter to describe any non-standard directive as "no known crawler reads it" and listed `Content-Signal` as an example. That guidance now has an explicit exception for Content-Signal, reflecting its status as a recognised industry convention.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 (mx-audit) |
| Files changed | 4 |
| Lines added | +56 |
| Lines removed | −2 |
| Repositories | 1 submodule (mx-audit) + hub pointer bump |
| Tests | 33 passing (robotsQuality suite) |

---

## Next Steps

- None flagged. Feature is complete and test-gated.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 07aef2b | mx-audit | Recognise Content-Signal (contentsignals.org) in robots.txt as informational signal |
