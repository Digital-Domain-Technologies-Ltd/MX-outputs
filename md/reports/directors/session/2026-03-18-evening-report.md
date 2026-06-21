---

title: "Co-Directors Report — BloomReach Meeting, Plugin Expansion & Reginald Infrastructure"
created: "2026-03-18"
version: "4.0"
author: Tom Cranstoun
type: info-doc
mx:
  x-mx-segment: "evening"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-18-evening-report.md
  purpose: "Co-Directors Report - BloomReach Meeting, Plugin Expansion & Reginald Infrastructure"
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - BloomReach Meeting, Plugin Expansion & Reginald Infrastructure"]

---


# Co-Directors Report — BloomReach Meeting, Plugin Expansion & Reginald Infrastructure

**Date:** 18 March 2026 — Evening
**Segment:** evening (since 17:00)

---

## Summary

First commercial CMS vendor meeting completed. Tom demonstrated the MX metadata standard to BloomReach (William), who confirmed the CMS plugin approach is viable for their platform. Two audit reports delivered (BloomReach: 41/100 AI suitability, Farnell: 35/100) with follow-up message drafted. Separately, the mx-plugin repository expanded to cover Drupal and Squarespace, bringing CMS coverage to seven platforms. Later in the evening, discovered the Reginald plugins page was returning 404 on the live site — root cause was a deployment gap where static files lived in `allaboutv2/reginald/` but the Worker serves from `mx-outputs/reginald/`. Consolidated all Reginald content to `mx-outputs/reginald/` as the single source of truth, removing all duplicates from `allaboutv2/reginald/`. Subsequently migrated the Reginald Worker from Cloudflare Pages to GitHub raw, eliminating the Pages dependency entirely and aligning with the same delivery pattern used by `content.allabout.network`.

---

## What Was Done

### 1. BloomReach Vendor Meeting

Demonstrated the full MX stack: YAML frontmatter, HTML meta tag generation, The Gathering open standard, and Reginald registry. William confirmed the plugin approach works for BloomReach — generate MX metadata tags in HTML head from existing content model. Key finding: BloomReach runs on WordPress + Elementor with good homepage Schema.org but missing JSON-LD on inner pages.

### 2. Audit Reports Delivered

Two executive audit reports prepared for delivery:

- **BloomReach** (`bloomreach-report.md`): Performance 25/100, Accessibility 0/100, SEO 65/100, AI Suitability 41/100. 148 WCAG AA errors across 4 pages.
- **Farnell** (`farnell-report.md`): Performance 50/100, Accessibility 0/100, SEO 63/100, AI Suitability 35/100. 171 WCAG AA errors across 2 pages. Included as real-world B2B example.

### 3. Follow-up Message Drafted

Post-meeting outreach message created (`bloomreach-followup.md`) — references both reports, confirms plugin approach, includes links to The Gathering, Reginald, and Chapter 0 availability (2 April).

### 4. MX Plugin Expansion

Plugin repository expanded from 5 to 7 CMS platforms:

- **Drupal module** (`drupal/mx_cogify/`) — PHP module for Drupal 10/11, 9 files (info.yml, config schema, routing, permissions, settings form, hook-based meta injection, per-node overrides via Third Party Settings, Metatag conflict detection)
- **Squarespace snippet** (`squarespace/mx-cogify.html`) — Code Injection script with Squarespace-specific `collection-type-*` body class detection
- README updated with new platforms, directory tree, and tags

### 5. Reginald Plugins Download Page

New public page at `reginald.allabout.network/plugins.html` — non-technical download page for all 7 CMS plugins:

- 7 plugin cards with step-by-step setup instructions for non-developers
- Zip downloads for WordPress and Drupal (multi-file), direct file downloads for others
- "What every plugin does" feature grid and FAQ section
- Reginald index.html updated with link to plugins page

### 6. Reginald Content Consolidation

Discovered `reginald.allabout.network/plugins.html` returning 404. Root cause: the Reginald Worker proxies read requests to `mx-outputs.pages.dev/reginald/`, but static website files (HTML, CSS, JS, plugin downloads) only existed in `allaboutv2/reginald/`.

- Copied all missing static files to `mx-outputs/reginald/` (plugins.html, CSS, JS, plugin downloads)
- Removed all duplicate content from `allaboutv2/reginald/` via `git rm` — 105 files, ~9,700 lines removed
- Left only a `.mx.yaml.md` pointer in `allaboutv2/reginald/` explaining the new location
- Updated reginald-mirror cog (source + published copies), CHANGELOG, and all JSON index files
- Updated auto-memory with single-source rule to prevent recurrence

### 8. Reginald Worker Migration to GitHub Raw

Discovered that deploying `mx-outputs` via Cloudflare Pages was failing silently due to large PDFs (>25 MiB limit). Rather than work around Pages limitations, migrated the Reginald Worker to fetch read-side content directly from GitHub raw — the same pattern already used by `content.allabout.network`.

- Updated `mx-reginald/worker/src/index.js` to proxy to `raw.githubusercontent.com` instead of `mx-outputs.pages.dev`
- Added `MX_OUTPUTS_HOSTNAME` and `MX_OUTPUTS_REPO_PATH` env vars to `wrangler.toml`
- Added comprehensive MIME type mapping (GitHub raw serves everything as `text/plain`)
- Deployed Worker and verified all endpoints (HTML, CSS, JS, JSON, llms.txt)
- Deleted the `mx-outputs` Cloudflare Pages project — no longer needed
- Delivery is now: push to GitHub → live within 5 minutes (Cloudflare edge cache TTL)

### 9. No-Inline-CSS/JS Refactor

Applied MX HTML coding principle (no inline CSS or JS) to Reginald pages:

- Extracted `reginald/index.html` styles to `css/reginald.css`, script to `js/reginald.js`
- Extracted `plugins.html` styles to `css/plugins.css`
- Removed one remaining inline `style=` attribute
- Rule saved to auto-memory for future sessions

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (prior) | 6 (evening) |
| Files changed (mx-crm) | 4 new (outreach/2026-03-18/) |
| Files changed (mx-plugin) | 13 new, 1 modified (Drupal + Squarespace) |
| Files changed (allaboutv2) | 105 removed, 3 modified (Reginald consolidation) |
| Files changed (mx-outputs) | 12 new/modified (Reginald static files + cog updates) |
| CMS platforms covered | 7 (WordPress, Drupal, EDS, Shopify, Wix, Squarespace, generic) |
| Cloudflare Pages projects deleted | 1 (mx-outputs — replaced by GitHub raw) |
| Files changed (mx-reginald) | 2 modified (Worker + wrangler.toml) |

---

## The Insight

BloomReach is the first CMS vendor to see the standard and confirm viability. The fact that their own site scores 41/100 for AI agents — while they sell an "agentic platform for personalisation" — is a powerful credibility hook. This pattern (vendor sites failing their own value proposition) recurs across the CMS market and validates the audit-led sales approach.

---

## Next Steps

- Send BloomReach follow-up with both reports attached
- Follow up in a few weeks as agreed
- Continue WordPress plugin Phase 1 testing
- Andres advisory meeting prep (Thursday 20 Mar)

---

## Commit Log

| Hash | Description |
|------|-------------|
| c231e548 | Update mx-crm, mx-outputs, mx-plugin: BloomReach meeting, evening report, plugin expansion |
| e964ecab | Update REMINDERS and CHANGELOG for 18 Mar evening session |
| 15c71f54 | Update allaboutv2 and mx-outputs submodule pointers |
| 79bb38e2 | Update CHANGELOG and REMINDERS: plugins page + no-inline refactor |
| 854753e0 | Consolidate Reginald content to mx-outputs/reginald/ as single source |
| 4767b8fa | Update REMINDERS: Reginald content consolidation |
| (pending) | Reginald Worker migration: GitHub raw, delete Pages project |
