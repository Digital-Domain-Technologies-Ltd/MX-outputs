---
title: "Co-Directors Report — Contentful Audit; A/B Test Detection Pipeline; Manuscripts"
description: "Afternoon session (extended): Contentful 10-page audit rerun confirming caching fix; full A/B test vendor detection pipeline built (12 vendors, stateless machine visitor finding); Stateless Machine Visitor pattern added to MX Protocols chapter 11; blog post drafted; architecture lockstep checker extended."
author: "Tom Cranstoun"
created: 2026-06-02
modified: 2026-06-02
version: "3.0"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-02-afternoon-report.md
  purpose: "Afternoon session (extended): Contentful 10-page audit rerun confirming caching fix; full A/B test vendor detection pipeline built (12 vendors, stateless machine visitor finding); Stateless Machine Visitor pattern added to MX Protocols chapter 11; blog post drafted; architecture lockstep checker extended."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Contentful Audit; A/B Test Detection Pipeline; Manuscripts"]

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

## Part 2 (Extended Afternoon) -- A/B Test Detection and Manuscript Work

The session ran well past its planned scope when the Contentful audit rerun surfaced a novel finding: Ninetailed (a personalisation platform) was serving different H1 variants on every cold HTTP fetch -- "Sorry, content chaos" on one probe, "Lorem ipsum dolor sit amet" on another. This confirmed a structural problem in how A/B testing interacts with stateless machine visitors. The finding drove a substantial new pipeline feature and a named concept in the manuscripts.

### Contentful Audit Rerun

The 2026-06-02 Contentful audit output folder was deleted to test all pipeline fixes end-to-end. The rerun confirmed:

- `resolveHostCacheDir()` fix: decoded HTML now writes correctly to `mx-outputs/audit/<hostSlug>/.cache/decoded/` (13 files confirmed after the run)
- `error-page-test.js` hasSchemaOrg false positive fixed (now returns false for the Next.js error boundary shell)
- Sitemap-dominates detection in Appendix B: `/sitemap` page (3,388 links) correctly isolated from the 11-page average (66 links)
- Div soup table format fix: `(51% of containers, depth N)` prevents fierce-critic false positive on ratio values
- All gates passed, PDF generated at EAA Level 2

New finding in this run: Contentful's personalisation layer serves A/B test variant H1s to cold machine fetches. The Ninetailed SDK was detected in the served HTML; content variance was confirmed across three probes. Filed as a judgment finding. This became the seed for the A/B test detection pipeline below.

### A/B Test Detection Pipeline

Built a complete new detection system for the audit, from vendor data to template section:

- `mx-reginald/audit/data/ab-test-vendors.json` -- 12 vendor signatures (Ninetailed, Optimizely, VWO, AB Tasty, Google Optimize, LaunchDarkly, Kameleoon, Convert, Dynamic Yield, Qubit, Unbounce, Monetate); updatable without code changes
- `mx-reginald/audit/bin/check-ab-test.js` -- detection script scanning cached HTML for script patterns, DOM attributes, inline JS globals; cross-references `slowest-page-perf.json` for content-variance evidence (H1 differs across probes)
- `mx-reginald/audit/bin/slowest-page-probe.js` -- extended to capture H1 per sample and emit `contentSamples[]` + `contentVarianceDetected`
- `mx-reginald/audit/bin/tableHandlers/abTestDiscovery.js` -- infill handler; strips section when nothing detected
- Both audit templates updated with `<!-- SECTION:AB_TEST_DISCOVERY -->` block
- `scripts/audit-pipeline.js` Step 6.5 wired in (non-fatal)
- `scripts/audit-llm-phase2.js` updated to include `ab-test-discovery.json` in `PHASE1_JSON_FILES`
- `scripts/audit-ab-vendors-sync.js` -- maintenance script HEAD-checking CDN URLs
- `mx-reginald/audit/test/check-ab-test.test.js` -- 8 tests, all passing

The report section frames the finding as the "Stateless Machine Visitor" problem -- machines arrive cold on every fetch, receive random cohort assignments, and assemble incoherent cross-page journeys. Also covers the training corpus problem: sitemap-sweeping bots ingest different variants of the same URL across multiple crawl passes.

### Architecture Lockstep Checker Extended

`check-audit-architecture.js` now covers six surfaces instead of three:

1. Bin scripts (existing)
2. Table handlers, collectors, scorers, reporters, skills (existing)
3. **Data files** -- new: `data/` JSON files must be documented in the architecture cog
4. **Test coverage** -- new: every `check-*.js` bin script must have a test file; pre-existing untested scripts given exempt status with comments
5. **PHASE1_JSON_FILES completeness** -- new: any sidecar written by the pipeline must be in `audit-llm-phase2.js` PHASE1_JSON_FILES or in the intentional exclusions list

`check-llm-phase2-completeness.js` created as a standalone tool then absorbed into `check-audit-architecture.js`. The checker now runs in `npm test`.

### Manuscripts and Blog

- MX Protocols, Chapter 11 ("Designing for Both"): new section "The Stateless Machine Visitor" -- names the pattern, defines it, gives four mitigation paths (User-Agent bypass, llms.txt declaration, canonical response header, separate machine path), connects it to the training corpus problem
- Blog post draft `ab-test-lying-to-machines.html` written and published to `mx-outputs/mx-site/blog/drafts/` -- hook is the Contentful audit finding; covers the stateless machine problem, the training corpus risk, and what publishers should do; passes all HTML hygiene checks
- `npm-run-audit.cog.md` bumped to v1.5.0 with Step 6.5 documented

---

## Next Steps

- Consider the three blog posts as a cluster for a Boye CMS Experts speaker submission: "Who owns agent-ready content?"
- The "who-answers" post CTA ("Declare your machine policy") is the closest we have to a direct service page for policy COGs. The services page may need a matching section.
- llms.txt sync script did not confirm the three new posts in llms.txt - verify the llms.txt key-pages block includes the new posts before next session.
- Run the batch audit overnight: `node scripts/audit-batch.js scripts/audit-batch-config.example.yaml` -- first real run against mx.allabout.network at full depth.
- **Promote the A/B test blog post**: the Contentful finding gives it a concrete hook. Review for tone before promoting.
- **Gather Gathering feedback on the "Stateless Machine Visitor" pattern**: this may belong as a formal MX gathering draft for the canonical definition.

---

## By the Numbers (Part 2)

| Metric | Value |
|--------|-------|
| New scripts created | 5 (check-ab-test.js, abTestDiscovery.js, audit-ab-vendors-sync.js, check-ab-test.test.js, check-llm-phase2-completeness.js) |
| Vendors in ab-test-vendors.json | 12 |
| Tests for new detection script | 8 (all passing) |
| New checks in check-audit-architecture.js | 3 (data files, test coverage, PHASE1_JSON_FILES) |
| Manuscript words added | ~1,200 (Stateless Machine Visitor section) |
| Blog post words | ~1,580 |

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
| 1f5de699 | hub | Batch audit system: two-pace architecture, TTL cache, docs |
| 100a429d | hub | Add mx.triggers field to canon (v6.13) |
| 99b97e83 | hub | Fix pre-existing dead relative links in appendix-m |
| 6416e278 | hub | Document check-ab-test.js and abTestDiscovery.js in architecture cog |
| f677e14e | mx-outputs | Add A/B test blog post draft |
| _pending_ | hub | A/B test detection pipeline; caching fix; architecture checker; manuscripts |
