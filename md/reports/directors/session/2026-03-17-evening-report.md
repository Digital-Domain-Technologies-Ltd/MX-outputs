---

title: "Co-Directors Report — MX-Reginald: From Stub to Storefront"
created: "2026-03-17"
version: "3.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "evening"
  audience: stakeholders
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-17-evening-report.md
---


# Co-Directors Report — MX-Reginald: From Stub to Storefront

**Date:** 17 March 2026 — Evening
**Segment:** evening (since 17:00)

---

## Summary

The MX-Reginald landing page was rebuilt from a 65-line technical stub into a comprehensive single-page website covering the full value proposition, pricing, compliance levels, and API documentation. Combined with the subscription infrastructure built earlier today, MX-Reginald now has both the backend (Cloudflare Worker + D1 + Stripe) and the frontend (marketing site with pricing cards and getting-started guide) ready for production deployment.

---

## What Was Done

### 1. Comprehensive Website (mx-outputs/reginald/index.html)

The minimal API endpoint listing was replaced with a full marketing and documentation site. Twelve sections, self-contained HTML with inline CSS, dark theme (#0a0a0a background, #00d4aa teal accent), responsive design. Content sourced from the explainer, monetisation strategy, publisher guide, and API reference.

Sections: Hero with backronym, The Problem (£200k pricing error, 40k-token waste, $1B inference cost), How It Works (DNS analogy with resolution flow), What Is a COG? (YAML example, dual meaning), Benefits (publishers, AI providers, enterprises), Pricing (4-tier cards: Open/Professional/Business/Enterprise with API rate limits), Registry Today (live stats, 13 audit action-COGs), Compliance Levels (5-level table), API Endpoints (read + write with auth badges), Get Started (4-step guide with curl examples), Footer.

### 2. Subscription System Completion

The Cloudflare Worker subscription API was finalised with both cognovamx and agentica as permanently free publishers (2099 expiry). Local testing confirmed: read-side proxy returns clean JSON from mx-outputs Pages, write-side auth returns 401 without token and 200 with valid token, subscribe endpoint correctly hits Stripe API.

### 3. MX Plugin Submodule Updates

Six commits advancing the mx-plugin submodule: EDS block-based integration, Wix and Shopify platform integrations, universal/generic integration guide. REGINALD documentation updated with MX Cogify plugin references and registration webhook flow.

### 4. REGINALD API Merged into allaboutv2 Worker (late evening)

The standalone `mx-reginald/worker/` project was consolidated into the existing allaboutv2 Cloudflare Worker. 23 new source files in `allaboutv2/cloudflare/files/reginald/` — write-side routes (Stripe, auth, registration), resolution analytics (categoriseAgent + Analytics Engine), aliveness check engine (monthly cron, SHA-256 verification, auto-hide after 3 consecutive failures), publisher dashboard API (analytics, aliveness, COGs endpoints). Scheduled handlers for daily subscription expiry and monthly aliveness checks. Worker v1.4.0, 126 tests pass.

### 5. Book PDF Pipeline Fixes (late evening)

Footnote PDF line breaks restored across both books. Pandoc was collapsing multi-URL footnotes into single paragraphs because the source markdown lacked trailing backslashes. Created `scripts/fix-footnote-backslashes.cjs` — validates and auto-fixes footnotes, usable as a CI gate (`npm run footnotes:check`). Applied 39 fixes to chapter-00. Updated `generate-footnotes.sh` to strip backslashes for HTML output. Added action cog and npm scripts (`footnotes:check`, `footnotes:fix`, `footnotes:generate`).

Fixed Protocols PDF build failure caused by missing cover image (`A4-Cover.png`). Wrapped `\includegraphics` in `\IfFileExists` guards so absent covers no longer block the build. The illustration generator then downloaded the actual cover.

Created three chapter-18 illustrations (named `chapter-17-*` per existing convention): Three-Layer IA Framework pyramid, URL Depth discovery decay chart, and IA Audit Workflow (five-check sequence). SVGs in `datalake/assets/images/svg/illustrations/`, PNGs generated via `npm run illustrations:generate`. Both book PDFs and free book rebuilt cleanly with zero warnings.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (evening) | 10 |
| Files changed | 15+ |
| New SVG illustrations | 3 |
| Footnote fixes applied | 39 lines |
| New scripts/cogs | 2 (fix-footnote-backslashes.cjs + .cog.md) |
| New npm scripts | 3 (footnotes:check/fix/generate) |
| PDFs rebuilt | 3 (Protocols, Handbook, free book) |
| Website sections | 12 |
| Repositories affected | 3 (main, mx-outputs, allaboutv2) |

---

## The Insight

Today's four sessions (morning, afternoon, evening, night) represent a single continuous arc: from pure resolver architecture (morning) → subdomain deployment (afternoon) → subscription backend (night, carried forward) → marketing frontend (evening). MX-Reginald went from a code-only registry to a deployable commercial product in one day. The entire stack — Worker, D1 database, Stripe integration, marketing site — runs on Cloudflare's free/pay-as-you-go tiers with infrastructure costs under £20/month.

---

## Next Steps

- Commit and push all changes (submodules first)
- Complete deployment checklist (D1 schema/seed, Analytics Engine, Stripe Dashboard)
- Set Stripe secrets via wrangler
- Deploy Worker and verify production endpoints
- Deliver production tokens to publishers

---

## Commit Log

| Hash | Description |
|------|-------------|
| 15367ef7 | Update mx-plugin: EDS block-based integration |
| ee8858ed | Update mx-plugin: EDS block self-executes |
| e403d5b1 | Update mx-plugin: EDS guides aligned to block approach |
| e48eb2a5 | Update mx-plugin: add Wix and Shopify integrations |
| f9eb7fa0 | Update mx-plugin: add universal/generic integration |
| 8744d6b9 | Update REGINALD docs: MX Cogify plugins + registration webhook |
| 153ced43 | MX-Reginald: subscription API + comprehensive website + monetisation |
| 4110f850 | Update REMINDERS, chapter 00 footnotes, Andres meeting prep |
| 0d55bf96 | Update REMINDERS: evening session log with deployment status |
| cb432f30 | Update allaboutv2 and mx-outputs submodule pointers |
| (pending) | Chapter-18 illustrations + PDF pipeline fixes |
| (pending) | REGINALD API merged into allaboutv2 Worker |
