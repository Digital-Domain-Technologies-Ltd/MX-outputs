---
title: "Co-Directors Report — SEO Recovery and Entity Identity"
description: "Fixed a Cloudflare worker redirect that was breaking 103 blog URLs, added sameAs Organisation identity across all domains, and documented the concept in MX Protocols."
author: "Tom Cranstoun"
created: 2026-04-27
modified: 2026-04-27
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-27-afternoon-report.md
  purpose: "Fixed a Cloudflare worker redirect that was breaking 103 blog URLs, added sameAs Organisation identity across all domains, and documented the concept in MX Protocols."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - SEO Recovery and Entity Identity"]
---

# Co-Directors Report — SEO Recovery and Entity Identity

**Date:** 27 April 2026 — Afternoon
**Segment:** Afternoon (second session — follows mx-collaboration drain)

---

## Summary

A Cloudflare worker bug introduced a `/blogs/* -> /blog/*` redirect that had silently broken 103 of 108 allabout.network sitemap URLs, compounded by a 404-to-index.html fallback that made the final destination doubly wrong. The root cause was identified via the new `sitemap:check` tooling, the worker was fixed and redeployed, and the sitemap is now clean. The session also added Schema.org `sameAs` Organisation identity linking allabout.network, cognovamx.com, and mx.allabout.network as the same entity — in the Cloudflare worker's JSON-LD output and documented in MX Protocols Chapter 21.

---

## What Was Done

### 1. Sitemap health tooling

Built `scripts/check-sitemap.js` with two npm commands: `sitemap:check` (HEAD-checks every `<loc>` URL in `eds-sitemap.xml`, reports 404s, exits 1 if any found) and `sitemap:clean` (runs the check then removes dead entries from the sitemap, `my-blog.json` x2, and `llms.txt` x2 in a single pass). The tool is reusable for regular auditing and CI.

### 2. Cloudflare worker bug fix

Removed the `/blogs/* -> /blog/*` general redirect that was intercepting every allabout.network blog URL and sending it to a non-existent path. Also removed the 404-to-index.html fallback that fired as a consequence. Before fix: 103/108 sitemap URLs returning 404. After fix: 107/108 returning 200. One genuinely dead URL (`mx.allabout.network/blog/content-operations`) was removed from `eds-sitemap.xml` by `sitemap:clean`.

### 3. Schema.org sameAs Organisation identity

Added `ORGANISATION_CONFIG` to the Cloudflare worker with `name: CogNovaMX`, `legalName: Digital Domain Technologies Ltd`, and `sameAs` listing all three domains. Every Article JSON-LD block now emits a complete publisher Organisation with `sameAs` — enabling search engines and AI agents to consolidate authority and knowledge across allabout.network, cognovamx.com, and mx.allabout.network as a single entity.

### 4. MX Protocols Chapter 21 — sameAs entry

Added a new section "Entity identity: the sameAs property" to Chapter 21 (The Fields and the Standards). The section explains why machines cannot infer cross-domain organisational identity, demonstrates the solution with a real allabout.network article as the worked example, and grounds it in the MX deferral principle (Schema.org owns this — MX does not define a duplicate).

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (allaboutv2) | 2 |
| Files changed (allaboutv2) | 5 |
| Lines added | +233 |
| Lines removed | -37 |
| Repositories touched | 1 submodule + hub |
| Sitemap URLs recovered | 103 |
| Worker tests passing | 204 |

---

## Decisions Made

- **sameAs domains**: allabout.network, cognovamx.com, and mx.allabout.network declared as the same Organisation entity in all JSON-LD output.
- **Subdomain vs subdirectory**: Noted that moving mx.allabout.network to allabout.network/mx/ would further consolidate link equity, but deferred — not in scope this session.
- **sameAs in Protocols**: Documented as a Chapter 21 worked example rather than a new MX field, consistent with the deferral-first principle.

---

## Next Steps

- Click "Validate Fix" in Google Search Console to ask Google to re-crawl the 13 affected pages
- Consider moving mx.allabout.network content to allabout.network/mx/ subdirectory for full link-equity consolidation
- Run `npm run sitemap:check` regularly (or add to CI) to catch future sitemap drift early

---

## Commit Log

| Hash | Repository | Description |
|------|-----------|-------------|
| 2bd13afe | allaboutv2 | fix+feat(worker): remove /blogs redirect, add sameAs Organisation identity |
| 5fed11c2 | allaboutv2 | feat(sitemap): add sitemap:check and sitemap:clean; remove dead URL |
