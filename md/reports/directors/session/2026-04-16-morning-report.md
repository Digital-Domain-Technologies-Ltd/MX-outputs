---
title: "Co-Directors Report -- Morning: TG-Community integration, marker reachability pipeline, audit performance"
description: "Morning segment -- TG-Community submodule integration, then wired the 9-marker served-vs-rendered reachability matrix into the full audit pipeline, and optimised performance achieving a 93% speedup on warm-cache reruns."
author: "Tom Cranstoun"
created: 2026-04-16
modified: 2026-04-16
version: "2.0"

type: report
tags: [directors-report, session, morning]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-16-morning-report.md
  purpose: "Morning segment -- TG-Community submodule integration, then wired the 9-marker served-vs-rendered reachability matrix into the full audit pipeline, and optimised performance achieving a 93% speedup on warm-cache reruns."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report -- Morning: TG-Community integration, marker reachability pipeline, audit performance"]

---

# Co-Directors Report -- Morning: TG-Community, Marker Reachability, Performance

**Date:** 16 April 2026 -- Morning
**Segment:** morning (since midnight)

---

## Summary

This morning had three phases. First, The Gathering's community repositories were integrated into MX-Hub as read-only submodules with enforcement hooks. Second, the marker-reachability pipeline was wired end-to-end into the audit: collector, scorer migration, reports, CSV, template infill, and fierce-critic verification. Third, pipeline timing instrumentation revealed bottlenecks and four optimisations reduced warm-cache audit reruns from 160 seconds to 11 seconds.

---

## What Was Done

### 1. TG-Community submodule integration

Mounted all four TG-Community GitHub organisation repos as submodules under `tg-community/`:

- `stream-front-end`, `stream-back-end`, `stream-draft-template`, `website`
- Created a PreToolUse hook enforcing read-only constraint
- Updated CLAUDE.md, README.md, UBERCOG.cog.md

### 2. Marker reachability -- full pipeline wiring

The 9-marker registry (JSON-LD, microdata, Open Graph, Twitter Card, MX governance, canonical, discovery links, language, skip link) was wired from infrastructure into the live pipeline:

- `LLMCollector.collect` now calls `analyzeMarkerReachability(pageData)` on every page
- Legacy booleans (`hasJsonLd`, `hasMicrodata`, `microdataCount`, `jsonLdLocation`) deleted; all consumers migrated
- `schema_inventory.json` carries per-page `markerReachability`; `site_profile.json` carries `markerCoverage` aggregation
- New `marker_reachability.csv` output (one row per page per marker)
- Both report templates gain a Marker Reachability section with an infill table handler
- Fierce-critic gate gains category 8: `claim-vs-served-reachability`
- 40 new tests; 3 stale `jsonLdLocation` tests removed

Key finding from the NEOM run: JSON-LD is present on all pages but at byte offsets of 468-869KB -- well past the 250KB agent-truncation threshold.

### 3. Audit performance instrumentation and optimisation

Added `PipelineTimer` instrumentation writing `timing_profile.json`. Four optimisations applied:

1. **Pa11y browser reuse** -- acquires browser from existing pool
2. **Sitemap URL caching** -- 24h TTL disk cache
3. **Parallel phases** -- sitemap health + site-level files run concurrently
4. **Per-page PERF logging** -- cheerio/pa11y/links/metrics breakdown

Results: cold start 160s to 155s; warm cache 25s; warm cache + sitemap cache 11s (93% reduction).

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (mx-audit) | 3 |
| Commits (hub) | 6 |
| Commits (mx-outputs) | 1 |
| Files changed | 25+ |
| Lines added | +1,200 |
| Lines removed | -181 |
| New tests | 40 |

---

## Next Steps

- Run infill-report.js against NEOM data to verify Marker Reachability table renders
- Fix the pre-existing golden-master test failure
- Investigate robots.txt analysis disconnect
- Wire TG-Community repos into MX Graph for metadata querying

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| `54413b6` | hub | Add TG-Community repos as submodules under tg-community/ |
| `18072fa` | hub | Add tg-community read-only submodules to docs and settings |
| `10e81df` | mx-audit | Add marker-reachability infrastructure (not yet wired) |
| `aed62b8` | hub | Bump mx-audit: marker-reachability infrastructure |
| `317595a` | mx-audit | Wire marker-reachability into audit pipeline |
| `f4a8ab6` | hub | Wire marker-reachability: bump mx-audit + hub scripts |
| `6b5163b` | mx-audit | Performance: pipeline timer, Pa11y browser reuse, sitemap cache, parallel phases |
| `5e1c5bc` | hub | Bump mx-audit: pipeline timing + performance optimisations |
