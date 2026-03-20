---

title: "Co-Directors Report — REGINALD v3.1: Subdomain Architecture Live"
created: "2026-03-17"
version: "1.0"
author: Tom Cranstoun and Maxine
mx:
  segment: "afternoon"
  audience: stakeholders
  confidential: true
---


# Co-Directors Report — REGINALD v3.1: Subdomain Architecture Live

**Date:** 17 March 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

The morning's pure resolver architecture was deployed to production this afternoon. REGINALD now serves from dedicated subdomains — `reginald.allabout.network` for the registry API and `content.allabout.network` for COG content — routed through a single Cloudflare Worker to Cloudflare Pages. All documentation was updated to reflect the new URL structure. The infrastructure cost remains ~£85/month.

---

## What Was Done

### 1. Cloudflare Worker Multi-Origin Routing (v1.3.0)

The existing Cloudflare Worker was extended to handle four hostnames through a single entry point:

- `allabout.network` / `www.allabout.network` → AEM origin (website, unchanged)
- `reginald.allabout.network` → mx-outputs Pages origin (registry API)
- `content.allabout.network` → mx-outputs Pages origin (COG content)
- Backward-compatible 301 redirect: `allabout.network/reginald/*` → `reginald.allabout.network/*`

Worker deployed via `npx wrangler deploy` with all four routes active.

### 2. Cloudflare Pages Deployment

Generated output from mx-outputs deployed to Cloudflare Pages (257 files — registry, content, `.well-known/`). The 79MB PDF in mx-outputs exceeded Pages' 25MB file limit, so deployment was scoped to only the needed directories.

### 3. DNS Configuration

CNAME records added in Cloudflare for both `content` and `reginald` subdomains, proxied through the Worker. DNS propagated on Cloudflare's resolver (`1.1.1.1`); local resolver had negative cache from earlier NXDOMAIN — confirmed working via `--resolve` bypass.

### 4. Generator Output Paths (v3.1.0)

- Output moved from `allaboutv2/reginald/` and `allaboutv2/content/` to `mx-outputs/reginald/` and `mx-outputs/content/`
- Base URLs updated: `reginald.allabout.network` (registry), `content.allabout.network` (content)
- `.well-known/mx-cogs.json` moved to `mx-outputs/.well-known/`

### 5. Code Quality Fixes

- **YAML parser** — replaced naive flat parser with nested-aware version handling `mx:` sub-properties, booleans, arrays
- **Visibility config** — extracted hardcoded rules to `mx-reginald/visibility.json`
- **Version history** — pointer records now write versioned snapshots (`v1-0-0.json`) alongside `latest.json`
- **Dry-run mode** — `--dry-run` CLI flag prevents destructive operations
- **Test paths** — updated to `mx-outputs/reginald/` and `mx-outputs/content/`

### 6. Documentation Sweep

Updated all REGINALD documentation to reflect subdomain architecture:

- Registry URL: `allabout.network/reginald` → `reginald.allabout.network` across all docs
- Output paths: `allaboutv2/reginald/` → `mx-outputs/reginald/` across all scripts and cogs
- Files updated: README, explainer, API reference, publisher guide, Agentica onboarding, pilot proposal, both press releases, publisher manifest schema, mirror script, mirror cog, publisher verify script, pdf-generator cog

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Files changed | 25 |
| Lines added | +652 |
| Lines removed | −2,641 |
| Repositories affected | 3 (main, allaboutv2, mx-outputs) |
| Cloudflare Worker routes | 4 |
| Pages files deployed | 257 |
| Documentation files updated | 13 |
| Tests | 86/86 (all passing) |

---

## The Insight

The entire REGINALD infrastructure — registry API, content hosting, subdomain routing, DNS, and deployment — runs on a single Cloudflare Worker (~500 lines) and Cloudflare Pages (free tier). No servers, no databases, no containers. The monthly cost is ~£85. This validates the "static files + edge routing" architecture described in the business case — REGINALD scales to a billion COGs without REGINALD touching content, and the infrastructure cost remains trivial.

---

## Next Steps

- Clean up old `allaboutv2/reginald/` and `allaboutv2/content/` directories
- Commit all changes (mx-outputs submodule first, then allaboutv2, then main repo)
- Rotate Cloudflare API token (exposed during DNS setup)
- Consider adding `_headers` file to Pages for custom cache-control

---

## Commit Log

| Hash | Description |
|------|-------------|
| (pending) | REGINALD v3.1 — subdomain architecture, documentation sweep |
