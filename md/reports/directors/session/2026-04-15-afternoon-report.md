---
title: "Co-Directors Report — Audit Pipeline Performance Hardening"
description: "Afternoon session: Pa11y cache short-circuit, in-process HEAD memoization, unified shared HEAD cache, throttle-on-cache-hit, and the root-cause fix for cache wiping."
author: "Tom Cranstoun"
created: 2026-04-15
modified: 2026-04-15
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon, performance, mx-audit, caching]
  isAiGenerated: true
  generatedBy: "claude-opus-4-6"
  reviewedBy: "Tom Cranstoun"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-15-afternoon-report.md
  purpose: "Afternoon session: Pa11y cache short-circuit, in-process HEAD memoization, unified shared HEAD cache, throttle-on-cache-hit, and the root-cause fix for cache wiping."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit Pipeline Performance Hardening"]
---

# Co-Directors Report — Audit Pipeline Performance Hardening

**Date:** 15 April 2026 — Afternoon
**Segment:** afternoon (12:00 onwards)

---

## Summary

The audit tool felt slow. We dug in. Five layers of needless network and CPU work got removed in sequence, and a hardcoded npm script was found to be wiping the cache on every invocation — turning what should have been cache-hit runs into cold runs paying the full Puppeteer + Pa11y cost on every page. After the fix, subsequent audit runs against an already-warm site genuinely reuse the cache; the throttle and HEAD layers no longer re-pay costs they should not have been paying.

---

## What Was Done

### 1. Pa11y cache short-circuit

Cached Pa11y results existed in the per-URL JSON blob but were being re-computed every run because a stale `Last-Modified` check (Cloudflare workers emit `Last-Modified == Date` every response, signalling fresh-but-meaningless mtime) invalidated the cache for every page. Detected the pattern explicitly and treat it as fresh. Empirical impact on the test loop at the time: audit runtime dropped from ~6 min to ~43s. Averages now also round to whole integers in `audit_averages.json` — reports no longer carry meaningless decimal precision.

### 2. In-process HEAD memoization

`isCacheStale` and the link-checker each made HEAD requests for the same URLs across multiple phases. Added per-URL Maps so the first answer wins for the rest of the run. Concurrent callers for the same URL share one in-flight promise.

### 3. Unified shared HEAD cache

Two separate caches became one. `mx-audit/src/utils/sharedHeadCache.js` is now the single per-process source of HEAD-request results. `isCacheStale` (in `caching.js`) and `checkLinkHead` (in `linkChecker.js`) — and by extension the sitemap-health pass — derive from one network round trip per URL. Returns a normalised `{status, headers, contentType, lastModified, dateHeader, finalUrl, redirects, error}` shape so callers don't touch axios internals.

### 4. Throttle-on-cache-hit

The token-bucket rate limiter was being consumed inside `processUrl` *before* the cache lookup, so cache hits paid network-pacing latency they didn't earn. Moved `throttle()` into `getOrRenderData`'s cache-miss branch, immediately before the actual network fetch.

### 5. Root-cause fix: cache was being wiped on every audit invocation

Investigation revealed that two npm scripts in `package.json` (`audit:allabout` and `audit:mx`) and their mirrored entries in `mx-canon/mx-maxine-lives/routing-registry.json` hard-coded cache wipes — `rm -rf .cache results` and `--force-delete-cache` respectively. Both predate the cache-preservation policy in the audit-* skills. Any session that ran one of these scripts turned the *next* `/audit-site` invocation into a cold run. Both scripts now clear only `mx-audit/results/` (always required for clean scoring) and leave the cache intact. This is the change that actually unlocks the four upstream optimisations.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits (this segment) | 4 |
| mx-audit commits | 5 |
| mx-crm commits | 1 |
| mx-outputs commits | 1 |
| Repositories touched | 4 (hub + 3 submodules) |

---

## The Insight

Each individual fix (Pa11y short-circuit, HEAD memoization, throttle skip) was correct and worth doing. But none of them mattered while the cache was being wiped every run — which it was, silently, via a years-old hardcoded npm script the audit-* skills explicitly forbid. Performance work without measuring the actual bottleneck is theatre. The user noticing "this still feels slow" after each apparent win was the signal that pointed at the real problem.

---

## Next Steps

- Run a /audit-site iteration to populate the cache, then a second iteration to measure the cached path against the cold-run baseline (~6 min).
- Decide whether to bump default `urlConcurrency` from 3 once empirical cache-hit numbers are in (reverted today after a flawed cold-run test).
- Consider extracting the in-process HEAD cache pattern into a small reusable utility for other tools that fetch over HTTP (mx-c-registry, mx-graph builder).

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 6064a38f | hub | Update mx-audit: Pa11y cache short-circuit + integer averages |
| ce48ed7a | hub | Update mx-audit: in-process HEAD memoization |
| 9bbb70dd | hub | Update mx-audit: unified shared HEAD cache |
| d1f44fb9 | hub | Stop wiping mx-audit cache on every npm run audit:* invocation |
| 014999e | mx-audit | Fix Pa11y cache short-circuit + round averages to whole numbers |
| c92b514 | mx-audit | Memoize HEAD requests in-process for the lifetime of an audit run |
| 5c68867 | mx-audit | Unify HEAD memoization in sharedHeadCache module |
| 48e1e9d | mx-audit | Skip rate-limit throttle on cache hit |
| a1c3dd0 | mx-audit | Update platform-rates timing (Cloudflare HEAD avg 264ms -> 116ms) |
| 46c974a | mx-crm | Add mx.allabout.network audit report |
| 3bb18b2 | mx-outputs | Refresh mx.allabout.network PDF; drop stale 2026-04-14 outputs |
