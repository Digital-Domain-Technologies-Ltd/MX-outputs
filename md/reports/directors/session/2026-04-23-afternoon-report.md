---
title: "Co-Directors Report — Markdown for Agents + Audit Workflow Overhaul"
description: "Shipped Cloudflare Markdown for Agents; overhauled mx-audit workflow with 5 performance fixes; published two new blog posts."
author: "Tom Cranstoun and Maxine"
created: 2026-04-23
modified: 2026-04-23
version: "2.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
---

# Co-Directors Report — Markdown for Agents + Audit Workflow Overhaul

**Date:** 23 April 2026 — Afternoon
**Segment:** afternoon (noon–17:00 BST)

---

## Summary

The afternoon covered two substantial workstreams. We shipped Cloudflare's Markdown for Agents feature on `allabout.network` end-to-end. We then profiled the mx-audit workflow against a 10-page Shopify run, identified five performance bottlenecks, and fixed all of them — including a critical bug where Pa11y was launching a fresh Puppeteer browser for every URL despite a pool being in place (`.browser` vs `.instance` property mismatch). We also published two blog posts establishing the MX-Audit USP against self-referential agent-readiness tools, and added a vendor-protocol tagging system so Cloudflare and Google protocols are collected but never counted against site scores.

---

## What Was Done

### 1. Cloudflare Zone Configuration (Tom — dashboard)

Tom enabled the Markdown for Agents toggle in Cloudflare AI Crawl Control for `allabout.network` and created a Configuration Rule to exclude `reginald.allabout.network` (the book-sales and publisher API endpoint). This was a pure dashboard operation — no code required.

### 2. Worker Pass-Through Guards (`cloudflare-worker.js`)

Cloudflare's Markdown converter is short-circuited when a Worker wraps a response in `new Response()`. Two guards were added:

- **`handleRequest`** (apex `allabout.network`): early-returns the raw origin response before any HTML transforms when `Accept: text/markdown` is present, letting the CF converter operate on the HTML.
- **`handleMxSubdomain`** (mx-site / content subdomains): GitHub raw serves `.html` files as `text/plain`, so this guard re-labels `Content-Type: text/html; charset=utf-8` before returning — required for the CF converter to activate. Scoped to `mx-site` and `content` on `.html` paths only.

One integration test was added to `cloudflare-worker.test.js` to verify the pass-through fires (196 tests total, all passing).

### 3. Documentation

`cloudflare/cloudflare.md` updated to v1.4 with a full Markdown for Agents section covering: configuration, how to request Markdown, expected response headers, Worker compatibility details, and a note on the known content-type header quirk.

### 4. Live Probe Test (`test-markdown-for-agents.js`)

A standalone Node.js script added to `cloudflare/files/`. It fetches `https://allabout.network/llms.txt` twice — once without any Accept header (expects Worker HTML wrapper, `text/html`) and once with `Accept: text/markdown` (expects raw `llms.txt` text, confirming the pass-through guard fired). Registered as `npm run test:live`. Ran against production: **10/10 assertions passed**.

### 5. Audit Workflow Profiling and 5-Fix Overhaul (mx-audit)

Profiling the NEOM audit (10 pages, Shopify, 385s total) revealed five performance issues, all fixed this session:

1. **Output path resolution** (`index.js`): Results were landing in the caller's cwd, not `mx-audit/results/`. Fixed by using `fileURLToPath(import.meta.url)` to resolve relative to the script's directory.
2. **Pa11y `ignoreUrl` error** (`pa11yRunner.js`): The `ignoreUrl` option is only valid alongside the `page` option. Removed.
3. **Sitemap index over-fetch** (`sitemap.js`): Sub-sitemaps were fetched in full before the URL limit was applied. Now passes the remaining limit into each sub-sitemap call and breaks early.
4. **Crawl-delay concurrency** (`main.js`): When robots.txt Crawl-delay overrides the platform rate, concurrency is now raised to 2. Each thread honours the declared delay; total throughput doubles.
5. **Browser pool property mismatch** (`pa11yRunner.js`): `poolBrowser.browser` was always `undefined` — the pool returns `{ instance, id, ... }` not `{ browser }`. Pa11y was launching a fresh Puppeteer for every URL. Fixed to `poolBrowser.instance`.

### 6. Vendor-Protocol Tagging (mx-audit)

Cloudflare's isitagentready.com and Fern's afdocs both measure compliance with their own vendor's protocols, producing opposite scores for the same site. MX-Audit is platform-agnostic. To formalise this:

- `check-wellknown.js`: `ai-plugin.json`, `agent-card.json`, `mcp-server-card.json`, and `api-catalog.json` now carry `vendorProtocol: true` with a `vendor` field. Two new Cloudflare paths added.
- `infill-report.js`: Vendor signals are separated from ratified-standard signals and emitted as an informational `[VENDOR_PROTOCOL_SIGNALS]` block, never scored.

### 7. Audit Template Preamble

Both `web-audit-suite-template.md` and `ecommerce-audit-template.md` now open with an `## About This Report` section covering: ten audit dimensions, the served-vs-rendered gap, human review plus accumulated learning, tg.community standards basis, and a note on llms.txt structural limitations.

### 8. Blog Posts Published

- **agent-readiness-scores-compared.html**: Compares MX-Audit to isitagentready and afdocs; explains the self-referential scoring problem; establishes the USP (platform-agnostic, human in the loop, learns from experience).
- **the-markdown-trap.html**: Published separately this session.
- **agent-discoverability-checklist.html**: Updated to v1.1 with new evaluation section.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Submodule commits | 5 (mx-audit: 1, mx-crm: 1, mx-outputs: 2) |
| mx-audit files changed | 9 |
| Lines added | +1,459 |
| Lines removed | -49,806 (NEOM cleanup + old PDFs) |
| Repositories touched | 3 (mx-audit, mx-crm, mx-outputs) |
| Live test assertions | 10/10 (Markdown for Agents probe) |
| Audit workflow bottlenecks fixed | 5 |
| Blog posts published | 3 (2 new, 1 updated) |

---

## The Insight

The Pa11y browser pool bug (`poolBrowser.browser` vs `poolBrowser.instance`) had been silently present since the pool was introduced. Every Pa11y run was launching a fresh Puppeteer instance despite the pool being in place. The bug was invisible because Pa11y silently falls back to launching its own browser when `browser: undefined` is passed. The fix is one character, but the root cause is worth noting: property-name mismatches between pool internals and callers are undetectable without type-checking.

The vendor-protocol tagging work was triggered by a real-world observation: Cloudflare's isitagentready gave a Shopify site 33/100 while Fern's afdocs gave it 100/100. Both scores are correct according to their respective vendor's protocols. Neither is useful to the site owner without that context.

---

## Next Steps

- Re-run NEOM audit with the 5 fixes in place to verify timing improvement.
- Generate NEOM report and PDF using updated templates with preamble.
- Monitor `x-markdown-tokens` header values in production.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `06f18f45` | Worker: serve text/markdown responses for agent Accept header requests |
| `6a4bd37e` | docs: document Markdown for Agents enablement on allabout.network |
| `c3af5cc4` | test: add live Markdown for Agents probe for llms.txt |
| `86fc31c2` | Add About This Report preamble; fix 5 workflow issues; tag vendor protocols (mx-audit) |
| `b066643a` | Delete stale NEOM audit files from all previous runs (mx-crm) |
| `7fb2ef2e` | Publish two new blog posts; update agent-discoverability-checklist (mx-outputs) |
| `6eccd5ae` | Delete stale NEOM audit PDF and CSV deliverables (mx-outputs) |
