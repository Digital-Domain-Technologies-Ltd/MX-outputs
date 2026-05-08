---
title: "Co-Directors Report — llms.txt HTML Wrapping Live in the Worker"
created: "2026-04-09"
x-mx-segment: "evening"
version: "1.0"
author: Tom Cranstoun
audience: business
confidential: true

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-09-evening-report.md
---

# Co-Directors Report — llms.txt HTML Wrapping Live in the Worker

**Date:** 9 April 2026 — Evening
**Segment:** evening (since 17:00 BST)

---

## Summary

This evening's work closes the "Critical Gap" identified in tonight's published `llms-txt-guide` blog post: AI training crawlers (Common Crawl in particular) only ingest HTML, so a plain `llms.txt` served as `text/plain` never reaches LLM training data even when sitemap-listed. The Cloudflare worker that handles every CogNovaMX-controlled domain now wraps the upstream `llms.txt` body inside a real HTML document at serve time — verbatim content inside a `<pre>` block, plus title, canonical link, robots meta, MX governance metadata, and a Schema.org `WebPage` JSON-LD block. No source `llms.txt` files were modified. The change applies to every path on every served domain (`allabout.network`, `www`, `mx`, `content`, `reginald`) at any nesting depth (root, `/blog/llms.txt`, `/services/llms.txt`, …) automatically.

The implementation followed the project's mandatory pure-function pattern: a single testable `wrapLlmsTxtAsHtml(text, requestUrl)` helper, called from both worker serve paths. Thirteen new unit tests were added to the existing suite. All 160 tests pass; the local HTML smoke test also passes (23/23).

---

## What Was Done

### 1. Blog post integration (mx-outputs)

The `llms-txt-guide.html` post and the new `llms-txt-crawl-flow.svg` diagram were integrated into the mx-site:

- New SVG embedded as a `<figure>` after "The Critical Gap" section, where it illustrates exactly the two fixes (serve as `text/html`, reference in sitemap).
- SVG added to `sitemap.xml` and `lastmod` bumped to 2026-04-09.
- New "Featured articles" section added to `mx-site/llms.txt` pointing to the post and the diagram.
- Profile picture path bug fixed in the new post (`images/avatars/...` → `../images/avatars/...`) and rolled out to all eleven Tom-authored blog posts that had the same broken path inherited from the original template.
- Visible date corrected to "9 April 2026" across the post's JSON-LD, `data-published`, `data-modified`, and visible `<time>` element, plus the listing entry in `blog/index.html`.

### 2. Worker — `wrapLlmsTxtAsHtml` pure function (allaboutv2)

A new top-level pure helper added to `cloudflare-worker.js`, exported alongside `formatISO8601Date` and other testable utilities. Behaviour:

- Takes raw llms.txt text plus an optional request URL.
- HTML-escapes the text and emits it verbatim inside `<pre class="llms-txt">`.
- Auto-extracts the page title from the first `# heading` line, falling back to `llms.txt — {hostname}` then `llms.txt`.
- Adds canonical link, `robots: index, follow`, MX meta tags (`mx:status=active`, `mx:contentType=agent-directory`, `mx:audience=machines, humans`), and a Schema.org `WebPage` JSON-LD block.
- Inline minimal CSS so the page is readable in browsers without depending on external assets.

### 3. Worker — wired into both serve paths

Both serve paths now wrap the upstream body, not just override the Content-Type header:

- `handleMxSubdomain` (covers `mx.allabout.network`, `content.allabout.network`, `reginald.allabout.network`) — basename match, so any nested path works automatically.
- `handleRequest` end (covers `allabout.network` and `www`) — `endsWith('/llms.txt')` match.

In both cases the upstream body is consumed once (`await resp.text()`), wrapped, and a new `Response` is built with `Content-Type: text/html; charset=utf-8` and the original `Content-Length` header dropped. Wrapping is gated on `resp.ok` so non-200 responses pass through untouched.

### 4. Tests

Thirteen new unit tests added to `cloudflare-worker.test.js` covering:

- DOCTYPE prefix and verbatim preservation inside `<pre>`
- HTML escaping of `<`, `>`, `&` in input
- Title extraction (first `# heading`, hostname fallback, no-URL fallback)
- Canonical link presence/absence based on supplied URL
- All four MX meta signals + JSON-LD WebPage parseability
- Empty input, undefined input, multi-line whitespace preservation
- "First heading wins" behaviour when multiple `#` lines exist

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 0 (about to land) |
| Files changed | 2 (worker + tests) |
| Lines added | +202 |
| Lines removed | −4 |
| Repositories | 1 (allaboutv2; mx-outputs already landed via overnight linter commit) |
| Tests | 160/160 vitest, 23/23 local HTML — 100% green |
| New unit tests | 13 |
| Worker version | 1.4.0 (unchanged — change is a body-replacement upgrade, no contract break) |
| Domains affected | 5 (`allabout.network`, `www`, `mx`, `content`, `reginald`) |

---

## The Insight

The blog post and the worker change land together by design. The post tells readers that serving `llms.txt` as `text/plain` is a dead end for Common Crawl ingestion. The worker change makes the CogNovaMX estate consistent with that argument: every `llms.txt` we publish, anywhere on any domain, is now actually served as a real HTML document rather than a Content-Type-faked text file. The blog post and the worker tell the same story from two sides — the HTML wrapping at serve time **is** the implementation of the "Critical Gap" diagram.

This also closes the embarrassment risk of a CogNovaMX site advocating for the pattern while being one of the sites still doing the "Content-Type override only" half-measure.

---

## Next Steps

- Deploy the worker via `npx wrangler deploy` from `allaboutv2/cloudflare/files/`.
- Verify `text/html` content-type and wrapped body on each route after deploy (root + nested paths).
- Watch the next Common Crawl pass to see whether `llms.txt` content starts appearing in CC text dumps (will take weeks to months — outside this session).
- Consider whether other "Critical Gap"-style fixes from the blog post warrant worker upgrades (e.g. `/about/for-agents` HTML equivalents are still optional, since the `.txt` URL itself is now HTML).

---

## Commit Log

| Hash | Description |
|------|-------------|
| _(pending)_ | allaboutv2 — wrap llms.txt as HTML at serve time across all paths and all domains |
| _(pending)_ | MX-Hub — Update allaboutv2 submodule pointer |
