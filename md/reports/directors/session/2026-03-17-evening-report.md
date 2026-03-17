---
title: "Co-Directors Report — MX-Reginald: From Stub to Storefront"
created: "2026-03-17"
segment: "evening"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidentiality: internal
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

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (evening) | 6 |
| Files changed (committed) | 8 |
| Lines added (committed) | +104 |
| Lines removed (committed) | −12 |
| Uncommitted files | 11 |
| Uncommitted lines added | +286 |
| Uncommitted lines removed | −101 |
| Website sections | 12 |
| Repositories affected | 3 (main, mx-outputs, allaboutv2) |

---

## The Insight

Today's four sessions (morning, afternoon, evening, night) represent a single continuous arc: from pure resolver architecture (morning) → subdomain deployment (afternoon) → subscription backend (night, carried forward) → marketing frontend (evening). MX-Reginald went from a code-only registry to a deployable commercial product in one day. The entire stack — Worker, D1 database, Stripe integration, marketing site — runs on Cloudflare's free/pay-as-you-go tiers with infrastructure costs under £20/month.

---

## Next Steps

- Commit and push all changes (submodules first)
- Deploy reginald-api Worker to production
- Redeploy allabout Worker (remove reginald route conflict)
- Set Stripe secrets and init production D1
- Stripe Dashboard: create product, price, webhook endpoint

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
| (pending) | MX-Reginald subscription + auth system |
| (pending) | MX-Reginald comprehensive website |
