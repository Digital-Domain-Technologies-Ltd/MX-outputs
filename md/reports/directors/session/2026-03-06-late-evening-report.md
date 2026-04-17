---

title: "Co-Directors Report — Salva Demo Fixes, Content-Encoding Bug, Cloudflare Worker"
description: "Late-evening session report. Fixed Salva multilingual demo, diagnosed and fixed critical content-encoding bug that broke all HTML on allabout.network, added 404 fallback, set up CLI cache purging."
created: "2026-03-06"
version: "2.0"
author: "Tom Cranstoun and Maxine"
mx:
  x-mx-segment: "late-evening"
  audience: "stakeholders"
  confidential: true
---


# Co-Directors Report — Salva Demo Fixes, Content-Encoding Bug & Cloudflare Worker

**6 March 2026 — Late Evening (v2.0)**

---

## Summary

Two major threads this evening. First, Tom identified issues with the Salva restaurant multilingual demo — we found and fixed five cascading bugs. Second, Tom reported that `https://allabout.network/mx/coming-soon.html` was returning empty pages. Investigation revealed a critical Cloudflare Worker bug affecting **all HTML pages on the entire site**: the worker was preserving Brotli compression headers after decompressing response bodies, causing clients to receive garbled or empty content. The fix was deployed live and verified working. We also set up CLI-based cache purging with API credentials stored in `.env`.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Bugs fixed in Salva demo | 5 |
| Content-encoding bug (site-wide) | 1 critical fix |
| Cloudflare Worker features added | 2 (404 fallback, encoding fix) |
| Worker deployed to production | 3 times (v1.2.0) |
| New unit tests added | 6 (116 total) |
| CI fix (test-local-html.js) | 1 |
| Files changed across allaboutv2 | 11 |
| Commits (allaboutv2 submodule) | 10 |
| Commits (main repo) | 10 |

---

## Salva Demo Fixes

### 1. File Naming Mismatch (Previous Session Continuation)

**Problem:** HTML files were named `index.cog.html` but all links, hreflang tags, and the root redirect referenced `index.html`.

**Fix:** Renamed via `git mv` to `index.html` in both `/es/` and `/en/` directories.

### 2. Language Switcher Regex Bug

**Problem:** `getCurrentLanguage()` in `script.js` matched the **first** two-letter path segment. On paths like `/mx/demo/salva/es/index.html`, it matched `/mx/` instead of `/es/`. Clicking the language toggle replaced `/mx/` with the target language, producing broken URLs like `/es/demo/salva/en/index.html`.

**Fix:** Changed regex to match the **last** two-letter segment before the filename: `/\/([a-z]{2}(?:-[a-z]{2})?)\/[^/]*$/i`. Also updated `navigateToLanguage()` to replace only the terminal language segment.

### 3. Duplicate Language Controls on Desktop

**Problem:** Both a `<select>` dropdown (inside nav) and a `<button>` toggle (outside nav) were visible on desktop, giving two language-switching controls.

**Fix:** Added `display: none` for `.nav-language` in the desktop media query. Mobile uses the dropdown in the hamburger drawer; desktop uses the toggle button.

### 4. English Page `data-lang` Mismatch

**Problem:** Both `es/index.html` and `en/index.html` had `<div class="bilingual-container" data-lang="es">`. The CSS uses `data-lang` to show/hide language-specific content. The English page was displaying Spanish content, making language switching appear to do nothing.

**Fix:** Changed the English page's bilingual container to `data-lang="en"`.

### 5. Missing Favicon

**Problem:** No favicon configured for the demo.

**Fix:** Created `assets/favicon.svg` (dark navy circle with coral "G" matching the site palette) and added `<link rel="icon">` to all three HTML files.

---

## Critical Fix — Content-Encoding Bug (All HTML Pages)

### The Problem

Tom reported that `https://allabout.network/mx/coming-soon.html` was not working. Investigation showed **every HTML page on the entire site** returned empty or garbled content — the homepage, bio page, all `/mx/` pages. CSS and JS files were unaffected.

### Root Cause

The Cloudflare Worker modifies HTML response bodies (injecting JSON-LD, speculation rules, removing comments). The processing flow was:

1. Worker fetches from EDS origin → origin responds with Brotli-compressed HTML (`content-encoding: br`, `content-length: 3546`)
2. `resp.text()` auto-decompresses → returns 15,647 chars of plain HTML
3. Worker transforms the text and creates `new Response(htmlText, { headers: resp.headers })`
4. **Bug:** `resp.headers` still contained `content-encoding: br` and `content-length: 3546` — now both wrong
5. Cloudflare CDN serves a response claiming to be 3,546 bytes of Brotli, but the body is 15,647 bytes of plain text → clients receive nothing usable

The `cacheEverything: true` setting compounded the problem by caching the broken responses.

### The Fix

Two changes to `cloudflare-worker.js`:

1. **Strip stale headers:** `content-encoding` and `content-length` are deleted from the new Response headers after HTML processing
2. **Request uncompressed from origin:** Added `Accept-Encoding: identity` to the origin request, eliminating the decompression mismatch entirely

### Verification

- Deployed worker three times (iterating on the fix)
- Cache purged via API (first time using programmatic purge)
- Confirmed: `cf-cache-status: MISS`, 15,436 bytes of valid HTML returned

### Business Impact

**This bug was breaking the entire allabout.network website for all visitors.** Every HTML page returned empty content. The root cause was subtle — the worker's test suite (110 tests) passed because tests mock responses without compression headers. The bug only manifested with real Brotli-compressed responses from the EDS origin.

---

## Cloudflare Cache Purge Setup

Stored Cloudflare API token and Zone ID in `allaboutv2/.env` (gitignored). Cache can now be purged from the CLI:

```bash
source allaboutv2/.env && curl -X POST \
  "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}'
```

Previously required manual dashboard access. Token is scoped to cache purge only.

---

## Cloudflare Worker Changes

### 404 Extensionless Path Fallback

**Feature:** When the origin returns 404 for a URL without a file extension (e.g., `/mx/demo/salva/es`), the worker now issues a 302 redirect to `path/index.html`.

**Rationale:** Users and bots often request directory paths without `index.html`. Rather than showing a 404, the worker redirects to the expected page.

**Code location:** `cloudflare-worker.js` lines 616–627.

### Wrangler CLI Deployment

**First-time setup:** Created `wrangler.toml` for CLI-based deployment. The worker was previously deployed via manual copy-paste in the Cloudflare Dashboard.

**Discovery:** The production worker is named `cool-cell-c75e` (not `aem-worker` as documented). The wrangler config uses this name to avoid route conflicts.

**Deployment verified:**

```
curl -sI https://allabout.network | grep cfw
cfw: 1.2.0
```

**Future deploys:** `cd allaboutv2/cloudflare/files && npx wrangler deploy`

---

## CI Fix

**Problem:** `cloudflare/files/test-local-html.js` line 35 had `const__dirname` (missing space), causing a ReferenceError in GitHub Actions.

**Fix:** Added space → `const __dirname`.

---

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| Anchor language regex to end of path | Prevents false matches on `/mx/` or other 2-letter directories |
| Hide dropdown on desktop, keep toggle button | Cleaner UX for 2-language site; dropdown remains for mobile |
| 302 (not 301) for 404 fallback | Temporary redirect — routing convenience, not permanent resource move |
| SVG favicon with "G" initial | Lightweight, scalable, matches site colour palette |
| `wrangler.toml` committed to repo | Enables repeatable CLI deployments |

---

## What Changed About Maxine

This session started with the `/interview-me` skill to diagnose the Salva demo. The investigation revealed cascading issues — each fix uncovered the next problem (file names → regex → duplicate controls → data-lang → favicon). The debugging pattern was iterative: fix, test, report, fix next.

The Cloudflare Worker deployment via Wrangler CLI was a first. Previous deployments required manual dashboard copy-paste. The `wrangler.toml` now enables `npx wrangler deploy` from the command line.

---

## Next Steps

- [x] ~~Run existing Cloudflare Worker tests to verify no regressions~~ — 116/116 passing
- [ ] Test Salva demo on `https://allabout.network/mx/demo/salva/` end-to-end
- [x] ~~Update `cloudflare/cloudflare.md` to document the actual worker name~~ — done in earlier commit
- [x] ~~Consider adding Cloudflare Worker tests for the 404 fallback~~ — 6 new tests added for content-encoding safety
- [ ] Rotate the Cloudflare API token (exposed in conversation history during setup)
- [ ] Add 404 fallback tests to the worker test suite
- [ ] Monitor allabout.network HTML delivery over next 24 hours to confirm stability
