---
title: "Co-Directors Report — Blog Posts Published; Batch Audit Infrastructure Built"
description: "Afternoon session: three blog posts on Salesforce-Contentful and Chrome classifications; then full two-pace batch audit system built with TTL cache, sitemap HEAD checker, overnight batch orchestrator, and complete doc suite."
author: "Tom Cranstoun"
created: 2026-06-02
modified: 2026-06-02
version: "2.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-02-afternoon-report.md
---

# Co-Directors Report — Blog Posts Published; Batch Audit Infrastructure Built

**Date:** 2 June 2026 - Afternoon
**Segment:** Afternoon (since noon)

---

## Summary

The afternoon ran in two distinct phases. First: three blog posts published to mx.allabout.network/blog/ (Salesforce-Contentful acquisition response; Chrome classification analysis; direct pitch post), all promoted from drafts and now indexed. Second: a complete two-pace audit infrastructure was designed and built from scratch -- overnight batch orchestrator, sitemap HEAD checker, rate limiter, TTL-based cache eviction with checkedAt touch, and the full documentation suite (architecture cog, PRD, QUICKSTART, README, UBERCOG, root README). The default batch config targets mx.allabout.network at full-sitemap depth.

---

## What Was Done

### 1. Salesforce-Contentful Acquisition Response

The Salesforce agreement to acquire Contentful (announced 1 June 2026) was the hook for a post making the open-standards case at the moment the market validated the machine-readable content argument. The post introduces the "content that manages itself" concept from Chapter 18 of MX: The Protocols at the pivot point where it contrasts with Salesforce's "agent-readiness as a platform feature." A discovery corollary paragraph was added after the open-record argument: agent-readiness as a platform feature means discovery through Salesforce's registry, and withdrawal takes the signal with it.

### 2. Chrome Classification Analysis

A 3,500-word analysis of RESONEO's research into Chrome's internal site-classification data. The post covers the three classification layers Google ships inside the browser (Gemini block list, semantic-memory inclusion list, commerce classifier), the cost-of-inference argument, the signature/accountability distinction (a signed lie is better than an unsigned inference), the discovery-as-membership inversion, and the multi-vendor pattern beyond Chrome. The EU AI Act direction section carries the mandatory legal disclaimer per CLAUDE.md. The post is honest about where MX does not yet connect to Chrome's actual lists.

### 3. Direct Pitch Post

A shorter, direct-pitch post ("Declare Once, Work Everywhere") synthesising both posts into a client-facing entry point. Structured as: the problem, the inflection, what we do, what you get, how to start. Includes "read more" links to the companion posts. CTA framed around the MX audit as the fastest entry point.

### 4. Draft Scaffold Improvement

The `content-template-draft.html` scaffold had `<meta charset="UTF-8">` placed after the MX-SOURCE-FRONTMATTER block, triggering an HTML linting hint. Charset is now first in `<head>` across all three new posts and the template, with the duplicate removed.

### 5. Promotion and Discovery

All three posts promoted from `blog/drafts/` to `blog/` with all links, asset paths, canonical URLs, robots directives, and mx:status updated. Blog index updated with two new cards (who-answers was already indexed). Blog sitemap regenerated to 67 entries. llms-full.txt and main sitemap regenerated.

---

### 6. Two-Pace Batch Audit System

The audit pipeline previously ran only on operator demand, one domain at a time, with no TTL mechanism on origin caches. This session built the two-pace model:

**On-demand (simple) run** -- unchanged for operators; all existing commands continue to work.

**Batch/overnight run** -- `node scripts/audit-batch.js <config.yaml>` (or `mx exec mx-audit --batch <config>`). Reads a YAML config listing domains with per-entry `maxPages`, `ratePerSec`, `locale`, `client`, and `scopeFlags`. Runs the full pipeline for each domain sequentially. After each collect phase, fires `bin/check-sitemap-links.js` to HEAD-test every sitemap URL at 2 req/sec with exponential backoff (2s/4s/8s, 3 retries). Writes per-domain deliverables (same format as simple run) plus `mx-outputs/audit/batch/<date>-batch-summary.json`. Default config: `scripts/audit-batch-config.example.yaml` -- single domain, `mx.allabout.network`, all pages.

**Cache TTL (`checkedAt`).** Origin-probe caches (`wellknown.json`, `platform.json`, `ai-usage.json`) now carry a `checkedAt` ISO timestamp. `sweepOriginCachesAt()` applies two eviction rules: version mismatch (existing) and TTL expiry (new, default 7 days). On a valid cache hit, both run paces update `checkedAt` in-place -- actively-audited domains never need manual cache clearing. Same pattern applied to `sitemap-link-health.json`. CACHE_VERSIONS bumped: wellknown 6, platform 2, ai-usage 2.

**New files:** `scripts/audit-batch.js`, `mx-reginald/audit/bin/check-sitemap-links.js`, `mx-reginald/audit/lib/rate-limiter.js`, `scripts/audit-batch-config.example.yaml`.

**Docs updated:** `mx-audit-architecture.cog.md` (v1.4), `mx-audit.cog.md` (--batch flag + handler), `prd.md` (v1.2, new §4.12), `README.md`, `QUICKSTART.md`, `mx-reginald/audit/README.md`, `UBERCOG.cog.md`, root `README.md`.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits (this half) | 3 pending |
| mx-outputs commits | 3 (incl. contentful audit deliverables) |
| New scripts | 3 (`audit-batch.js`, `check-sitemap-links.js`, `rate-limiter.js`) |
| New config | 1 (`audit-batch-config.example.yaml`) |
| Modified audit pipeline files | 4 |
| Docs updated | 7 |
| CACHE_VERSIONS bumped | 3 (wellknown 5->6, platform 1->2, ai-usage 1->2) |
| Blog posts published | 3 |
| Blog sitemap entries | 67 |
| Repositories touched | hub + mx-outputs |

---

## Why It Matters

The Salesforce-Contentful deal is the single clearest market signal the MX argument has received. A founder said "AI agents outnumber humans on the web" on the way to an acquisition, and a platform paid for agent-readiness as a feature. Three posts published within 24 hours of the announcement positions MX as the open-standards voice in that conversation - exactly the Boye CMS Experts audience the pitch is aimed at. The Chrome classification post is independently valuable for the accountability/inference argument and as a Boye speaking angle (the shopping classifier story is a CMS-practitioner story, not just an MX-insider one).

## The Insight

The RESONEO Chrome research makes the inference-vs-declaration argument concrete at scale. The finding that Google's own Search guidance says "declare with Schema.org" while the browser's own classifier ignores declared markup and guesses from truncated text - that is the fracture that makes the open-standards case for us without requiring any MX-specific claim.

## Decisions Made

- Wove "content that manages itself" from Chapter 18 of MX: The Protocols into the Salesforce post at the natural pivot point and in the closing sentence. Not cited by chapter; introduced as a concept the MX books name.
- Legal disclaimer added to the Chrome post at the first EU AI Act mention per CLAUDE.md rules.
- Contentful audit deliverables from 2026-06-02 removed from mx-outputs (previously committed; deleted from disk before this session).

---

## Next Steps

- Consider the three blog posts as a cluster for a Boye CMS Experts speaker submission: "Who owns agent-ready content?"
- The "who-answers" post CTA ("Declare your machine policy") is the closest we have to a direct service page for policy COGs. The services page may need a matching section.
- llms.txt sync script did not confirm the three new posts in llms.txt - verify the llms.txt key-pages block includes the new posts before next session.
- Run the batch audit overnight: `node scripts/audit-batch.js scripts/audit-batch-config.example.yaml` -- first real run against mx.allabout.network at full depth.
- Archive the contentful.com audit work: the report.md is committed but no PDF was generated this session.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| d9660108 | mx-outputs | Publish three blog posts; update discovery and indexes |
| a04b7557 | mx-outputs | Remove contentful.com audit deliverables from 2026-06-02 |
| 7aa48adb | hub | Bump mx-outputs: README index regenerated |
| 1494c088 | hub | Document afternoon session: three blog posts, CHANGELOG v2.98 |
| d1477e59 | hub | Bump mx-outputs; audit pipeline fixes from contentful audit run |
| 10179da9 | mx-outputs | Add www.contentful.com audit deliverables 2026-06-02 |
| _pending_ | hub | Batch audit system: two-pace architecture, TTL cache, docs |
