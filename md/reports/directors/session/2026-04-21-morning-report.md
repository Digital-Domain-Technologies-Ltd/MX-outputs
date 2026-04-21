---
title: "Co-Directors Report — NEOM audit + audit-toolkit politeness upgrade"
description: "Full NEOM Wellbeing e-commerce audit shipped; audit toolkit upgraded with per-host layout, two new collectors, and polite-crawling discipline."
author: "Tom Cranstoun and Maxine"
created: 2026-04-21
modified: 2026-04-21
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
---

# Co-Directors Report — NEOM audit + audit-toolkit politeness upgrade

**Date:** 21 April 2026 — Morning\
**Segment:** morning (midnight to 07:00)

---

## Summary

We delivered a full e-commerce audit of NEOM Wellbeing (a UK Shopify wellness brand, 15 pages sampled from 904) and in the same session upgraded the audit toolkit so the next run is both more useful and less intrusive. The report shipped as a 28-page PDF scoring the client Excellent on Pa11y and Performance, Partial on commerce visibility, with a clear 8-priority roadmap. The toolkit upgrade added two new post-audit collectors (JSON-feed detection and hostile-UX fingerprinting via Puppeteer-screenshot MD5), moved every output to a per-host directory so a second audit can never overwrite the first, and — on Tom's instruction — removed every pre-audit HEAD-storm so we never anger the sites we audit.

---

## What Was Done

### 1. NEOM Wellbeing audit shipped

A complete e-commerce audit against `neomwellbeing.com` — 15 audited pages, all 6 AI agents accessible (ClaudeBot, GPTBot, ChatGPT-User, PerplexityBot, Google-Extended, CCBot), Pa11y 100, Performance averaging 1.07s, SEO 89. Headline finding: valid Product/Offer/Breadcrumb/AggregateRating JSON-LD on every audited product page, but it sits at byte 822,578 on the homepage — past the 250 KB agent-fetch threshold. The catalogue is well-instrumented and largely unreachable.

Report, PDF (162 KB, 28 pages), and five row-sidecar CSVs (accessibility, image-optimisation, link-analysis, marker-reachability, structured-data-findings) shipped under `mx-crm/outreach/2026-04-20/neom-*` and `mx-outputs/pdf/outreach/2026-04-20/neom-report.pdf`.

### 2. Per-host results layout

`mx-audit/results/` became `mx-audit/results/<hostname>/`, matching the cache layout that already existed at `mx-audit/.cache/<hostname>/`. A second audit against a different host no longer overwrites the first one's sidecars — a real failure mode that wiped the first neom run mid-session and forced a restart. `main.js` now derives hostname from the `-s` URL and appends it to `outputDir` at run start; downstream readers are unchanged. Every bin script and consumer script that accepts a `--results` flag now requires the per-host path.

### 3. Two new post-audit collectors

- **`json-feed-check.js`** — probes every audited URL with `Accept: application/json`. When the server honours content negotiation (Shopify's built-in product feed, WordPress REST, JSON-LD exposure), captures the first feed, parses it for shape recognition, and scores MX suitability on presence signals (name, description, price, availability, images, canonical, timestamps, identifiers). Neom scored 90/100 Excellent. Three-way classification (feed / no-feed / error) with transient 429 retry-plus-backoff and `assessmentQuality: complete|partial|degraded` so a rate-limited run never reports a false-confident "no feed".

- **`hostile-ux-check.js`** — Puppeteer collector that samples N pages, takes five screenshots at one-second intervals, MD5-compares the bytes to detect motion, and fingerprints modal dialogs, consent banners, autoplaying content, scroll hijack, and aria-label translation-missing leaks. Neom shows continuous motion on every sampled page, Klaviyo newsletter popup, Consentmo consent banner with pre-consent cookies, and `scroll-behavior: smooth` — none of which a static audit can catch.

### 4. Polite crawling — warmup and full-sitemap-HEAD removed

Tom's instruction: "we do not want to anger the sites we audit." Both were removed outright:

- `bin/discover-urls.js` lost its `--warm` flag and parallel-curl workers. `bin/warm-cache.js` deleted.
- `bin/sitemap-health.js` deleted. The Phase 1b pass in `main.js` that HEAD-tested every URL in every discovered sitemap is gone. The Sitemap Health block is out of both templates. Eight `[SITEMAP_*]` placeholders removed from both contract JSONs. Documentation, skills, and `audit-gotchas.md` all updated to explain the change with the rationale (politeness to third-party origins).

The main audit still fetches each URL once, sequential and rate-limited. That is polite and necessary. What's gone is the bulk pre-audit HEAD storm.

### 5. Fierce-critic hardening and new skill

Two behavioural rules were codified from this session's near-misses:

- **`rewrite-process-leak`** — catches "in fact", "actually" (as correction), "this finding stays on the list because…", "the heading asserts X but the body…", references to Pass 1 / Pass 2 / template slots. The rewrite pipeline must never peek through into the client deliverable.
- **Overpromise category expanded** — "agents will cite / surface / recommend" (non-deterministic), "agents cannot see / read / reach" (deterministic negative), "brands without X are skipped" (categorical agent-ranking claim), "measured, not inferred" (AI-authored methodology hedging), "star ratings in search" → "eligibility for star-rating rich results".

The **`/regen-report` skill** (new) regenerates Phase 5 from existing audit data without re-auditing — three modes (`from-template`, `from-skeleton`, `from-report`) with an auto-mode that now checks template and infill-machinery mtimes first, so a template change never silently picks the faster mode and skips the new section.

### 6. Templates and infill polish

- Scorecard: fixed double-backtick nesting that was collapsing three rows into one cell.
- SECTION markers: all opening `<!-- SECTION:NAME` comments now explicitly closed with `-->` so pandoc renders the heading that follows.
- Empty-table strips for Sitemap Health (removed outright), Vocabulary Validity Issues, Broken Links URL list, and the llms.txt-guide Further Reading row.
- Further Reading now renders as one continuous 5-row table; the inline `<!--ROW_IF_LLMS_TXT_MISSING-->` sentinel replaces the between-row SECTION markers that broke pandoc's table parser.
- Gap callout softened: "may not reach content that sits deep in the body" instead of "cannot see JavaScript-dependent content".
- Voice: first-person plural "we" everywhere. Fierce critic flags bare `I [verb]` as a hard block.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (hub + submodules) | 3 submodule + pending hub bundle |
| Submodules updated | 3 (mx-audit, mx-crm, mx-outputs) |
| mx-audit files changed | 23 (2 new, 2 deleted, 19 modified) |
| Hub files changed | 26 (15 skills/scripts, 2 hooks, templates/docs, new skill directory) |
| Lines added | +2,128 (mx-audit) + 9,398 (mx-crm deliverables) + hub delta |
| Lines removed | −1,279 (mx-audit) |
| PDF pages | 28 |
| PDF size | 162 KB |

---

## The Insight

The most valuable change this session wasn't a feature — it was the politeness discipline. Warmup + sitemap-health existed because they made scores more accurate (warm cache = real performance numbers) and the Sitemap Health section read as a useful table. But every time the audit ran we hammered the origin with parallel HEAD requests before the real audit even started, and a well-configured WAF could legitimately read that as a low-grade attack. Stripping both out costs us nothing an honest audit needs, and it means we can audit any site — client or prospect — without the first minute looking like we're probing for weaknesses.

---

## Next Steps

- Finish the `/step-commit` Step 3 onwards (hub commit, REMINDERS, docs review, compliance gate, push)
- Decide if neom gets outreach-ready messaging now or waits for Tom's review pass
- The fierce-critic + LLM-judgment loop hit convergence cap once this session (phase-grouping nits) — still a useful signal; not a problem

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| `9ad15ef` | mx-audit | Audit toolkit: per-domain layout, new collectors, polite crawling |
| `640b02d` | mx-crm | outreach/2026-04-20: neom audit — new deliverable pack |
| `03b83bc` | mx-outputs | pdf/outreach/2026-04-20: neom PDF + sidecar CSVs |
| _pending_ | hub | scripts + skills + docs + pointer bumps (next commit) |
