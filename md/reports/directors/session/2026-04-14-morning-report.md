---
title: "Co-Directors Report — Printer Pipeline, Strategic Blog, and Audit Pipeline Overhaul"
description: "Morning session: printer email fix with dual-secret verification, strategic blog launch, and full audit-report pipeline redesigned as a two-pass infill-then-rewrite flow with readability enforcement and rate-limiter fixes."
author: "Tom Cranstoun and Maxine"
created: 2026-04-14
modified: 2026-04-14
version: "1.3"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning, stripe, webhook, fulfilment, audit, readability, rate-limiter]
---

# Co-Directors Report — Printer Email Pipeline Hardened and Verified

**Date:** 14 April 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

A reported failure in the book-fulfilment chain — printed orders not reaching the printer — was investigated, fixed, deployed, and end-to-end verified this morning. The Stripe-webhook handler in our Cloudflare worker was sending order emails through Resend with a hard-coded BCC list, then falling back silently to MailerLite (which never copies the printer). We corrected the BCC list, hardened the audit log, added dual-secret webhook verification so we can fire test events at production without touching the live signing key, and confirmed via a real Stripe test trigger that all four printer addresses now appear in the audit trail.

---

## What Was Done

### 1. Root-cause analysis

Traced the order-notification flow in `allaboutv2/cloudflare/files/reginald/handlers/stripe-webhook.js`. Confirmed that physical orders were BCC'd only to `info@cognovamx.com` and `info@surprint.com`, and that any Resend failure was caught and logged to console only — never to the D1 audit table. The MailerLite fallback adds the buyer as a subscriber but never copies the printer, so a Resend outage produced a buyer confirmation, no printer notice, and no record of the gap.

### 2. BCC list corrected

Physical-order BCC now reads `mx-printworks@cognovamx.com` (the printer), `tcranstoun@outlook.com`, `tom.cranstoun@gmail.com`, and `info@surprint.com`. PDF orders unchanged.

### 3. Audit logging hardened

Added structured `[STRIPE-WEBHOOK]` console prefixes and three new D1 audit actions: `email_notification_sent` (per-provider success with BCC list), `email_provider_failed` (per-provider failure, including missing API key), and an enhanced `email_notification_failed` (only when both providers fail). Inline comments now flag the MailerLite-fallback gap so future readers do not re-discover it.

### 4. Dual-secret webhook verification

`verifyStripeSignature` now accepts an array of secrets and treats the request as valid if any one matches. The handler passes both `STRIPE_WEBHOOK_SECRET` (live) and `STRIPE_WEBHOOK_SECRET_TEST`. This lets us fire `stripe trigger` events at the production worker URL for testing without weakening live security.

### 5. End-to-end verification

Added a Stripe test-mode webhook endpoint, set its signing secret as `STRIPE_WEBHOOK_SECRET_TEST` in the worker, and fired `stripe trigger checkout.session.completed` with `metadata.type=book_purchase`. The D1 audit row confirms Resend received the send with all four BCC addresses present. The fix is live and provably working.

### 6. New strategic blog post — AI, MX, and the Future of Business

Published a new post on `mx.allabout.network/blog/` framing MX through three pillars (Strategy/Leapfrog, Implementation/Books, Community/The Gathering), with a custom SVG illustrating the four-stage agentic journey resting on those pillars. Cites the original CMS Critic article that called the AI tipping point in 2024. Promotes the free MX Maturity Audit through Digital Domain Technologies and asks for sponsors of The Gathering. Lead card on the blog index, listed in sitemap.

### 7. NEOM Wellbeing audit and audit-pipeline overhaul

Ran a full audit against `neomwellbeing.com` (Shopify storefront, 10 pages). The audit surfaced three classes of problem in our own tooling that we fixed in the same session:

- **Collector blind spots.** The audit missed BreadcrumbList microdata (only checked JSON-LD) and could not see Offer.availability when it was nested inside a Product's offers field. Fixed: JSON-LD expansion now walks nested typed properties, microdata is parsed into the schema inventory, and every entity gets a propertyNames array so the catalogue-visibility questionnaire can answer truthfully. 266 tests still pass.
- **Rate limiter crash on Shopify.** The audit tool crashed before crawling with "Requested tokens 1 exceeds maximum tokens per interval 0.5" because Shopify's 0.5 req/s config was passed verbatim to a library that requires tokens >= 1. Fixed: sub-1 rates are now inverted to "1 token per N ms" (same effective rate, valid math). Also added per-request retry-on-429 to the agent access test so burst-triggered 429s no longer contaminate every agent's result.
- **Report hallucinations.** The LLM was placing data and writing narrative in the same pass, which leaked fabrications (e.g. a fake "Performance: 62/100" score). Redesigned /audit-report as a two-pass pipeline: Pass 1 (infill-report.js) mechanically places every fact into a skeleton with `<!-- REWRITE: ... -->` blocks for narrative; Pass 2 (LLM) turns those blocks into prose and cannot change any number. Added a readability checker, pre-write hook, and standalone /audit-readability skill that gate the final report on terse tables, unexplained jargon, missing narrative, and consultant tone.

The NEOM report shipped as both the first delivery and the pattern-proof for the new pipeline.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 15 (5 hub, 2 allaboutv2, 3 mx-outputs, 3 mx-audit, 1 mx-crm, 1 mx-outputs PDF) |
| Repositories touched | allaboutv2, mx-audit, mx-crm, mx-outputs, hub |
| Worker deploys | 3 (BCC fix, dual-secret support, fourth BCC entry) |
| New D1 audit rows during verification | 4 |
| New published blog posts | 1 (AI, MX, and the Future of Business) |
| Client audit reports shipped | 1 (NEOM Wellbeing, Shopify e-commerce, 10 pages) |
| mx-audit tests passing after collector + rate-limiter fixes | 266 |
| New enforcement gates in audit pipeline | 2 (readability check + two-pass infill/rewrite) |

---

## The Insight

Two insights from this morning, both about the same thing: invisible failure modes.

The printer bug was an invisible failure — Resend could fail silently, MailerLite fallback happened without logging, and nobody learned the printer had missed orders. Three cheap rules close it: every provider attempt writes to the audit table, the fallback's limitations are documented at the call site not in someone's head, and the dual-secret verifier makes testability a security property (if you cannot safely exercise a code path, you cannot trust it).

The audit report's fabrications were a different invisible failure — the LLM would write a performance score that did not exist, or claim a BreadcrumbList was absent when it was present as microdata. Nobody would notice unless they happened to cross-check. The fix mirrors the printer one: separate placing data from writing prose (Pass 1 vs Pass 2), make the facts the ground truth that prose cannot override, and gate the output mechanically so drift cannot ship. A readability hook backs it up so terse metric dumps never reach a client.

The pattern across both: silent failures become visible failures only when every attempt writes to an audit trail and every output passes a deterministic gate.

---

## Next Steps

- Rotate `STRIPE_WEBHOOK_SECRET_TEST` (current value was disclosed in chat transcript): Stripe Dashboard → test webhooks → roll → `wrangler secret put STRIPE_WEBHOOK_SECRET_TEST`
- Visually inspect the test order email that landed in `tom.cranstoun@gmail.com` and `tcranstoun@outlook.com` — confirm formatting, subject, and that fulfilment instructions are clear to surprint
- Verify Resend domain authentication for `info@surprint.com` and `mx-printworks@cognovamx.com` (no bounces, no suppressions)
- Decide whether `tcranstoun@outlook.com` and `tom.cranstoun@gmail.com` should also BCC PDF orders

---

## Commit Log

| Hash | Description |
|------|-------------|
| 59f2e217 (allaboutv2) | Fix printer email BCC and harden audit logging in Stripe webhook |
| 1682681 (mx-outputs) | Add morning directors report |
| 88301741 → e9b285f0 (hub) | Update submodule pointers |
| dca0a82 (mx-outputs) | Update morning directors report v1.1 |
| 49f1c012 (hub) | Update allaboutv2 + mx-outputs: dual-secret webhook verification and report update |
| a20baaa (mx-outputs) | Publish AI, MX, and the Future of Business blog post + SVG |
| 46caa628 (hub) | Update mx-outputs: publish AI, MX, and the Future of Business blog post |
| 5aa68cc (mx-audit) | Collector: detect BreadcrumbList microdata and nested Offer properties |
| fce76e4 (mx-audit) | Fix rate limiter crash on Shopify and add retry-on-429 for agent access |
| 81f274e (mx-audit) | Infill and templates: REWRITE blocks, MX Journey rows, Pipeline redesign |
| 2d0cdae (mx-crm) | Add NEOM Wellbeing audit report (2026-04-13) |
| bc6dfea (mx-outputs) | Add NEOM Wellbeing audit PDF (2026-04-13) |
| e6557d24 (hub) | Add readability review system for audit reports |
| 8aeec23e (hub) | Two-pass audit report pipeline + submodule pointer updates |
