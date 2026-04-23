---
title: "Co-Directors Report — Markdown for Agents Live on allabout.network"
description: "Enabled Cloudflare Markdown for Agents zone-wide; implemented Worker pass-through guards and live probe test."
author: "Tom Cranstoun and Maxine"
created: 2026-04-23
modified: 2026-04-23
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
---

# Co-Directors Report — Markdown for Agents Live on allabout.network

**Date:** 23 April 2026 — Afternoon
**Segment:** afternoon (noon–17:00 BST, extending from yesterday evening)

---

## Summary

We shipped Cloudflare's Markdown for Agents feature on `allabout.network` end-to-end: zone toggle on, Configuration Rule excluding the book-sales API subdomain, Worker pass-through guards to let Cloudflare's native converter run, and a live probe test that confirms the behaviour with 10/10 assertions against the production site. AI agents can now send `Accept: text/markdown` and receive clean Markdown with roughly 80% fewer tokens than the equivalent HTML.

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

The `/llms.txt` result is particularly interesting: the browser path receives the HTML-wrapped version (for Common Crawl ingestion); the AI agent path receives the raw `llms.txt` text directly — no wrapper, no conversion overhead, just clean structured content.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 3 (allaboutv2) |
| Files changed | 6 |
| Lines added | +313 |
| Lines removed | −5 |
| Repositories | 1 (allaboutv2) |
| Live test assertions | 10/10 |

---

## The Insight

The `llms.txt` case revealed something elegant: the Worker's HTML wrapper (`wrapLlmsTxtAsHtml`) was designed for Common Crawl, not for AI agents. Because the pass-through guard fires before that wrapper runs, AI agents sending `Accept: text/markdown` bypass the HTML entirely and receive the raw text — which is already clean and structured. No conversion needed. The right content reached the right consumer by accident of architecture.

---

## Next Steps

- Monitor `x-markdown-tokens` header values in production to track token-reduction numbers.
- Consider adding reginald to the zone toggle exclusion review list as the API surface grows.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `06f18f45` | Worker: serve text/markdown responses for agent Accept header requests |
| `6a4bd37e` | docs: document Markdown for Agents enablement on allabout.network |
| `c3af5cc4` | test: add live Markdown for Agents probe for llms.txt |
