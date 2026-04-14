---
title: "Co-Directors Report — Printer Pipeline Hardened, Strategic Blog Published"
description: "Morning session: Stripe-to-printer email fix and dual-secret webhook verification, plus a new blog post tying strategy, implementation and community to the agentic journey."
author: "Tom Cranstoun and Maxine"
created: 2026-04-14
modified: 2026-04-14
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning, stripe, webhook, fulfilment]
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

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment (incl. pending) | 8 (3 hub, 2 allaboutv2, 3 mx-outputs) |
| Files changed (this segment) | 7 (stripe-webhook.js, stripe-verify.js, this report, new blog post + SVG, blog index, sitemap) |
| Worker deploys | 3 (BCC fix, dual-secret support, fourth BCC entry) |
| Repositories touched | allaboutv2, mx-outputs, hub |
| New D1 audit rows during verification | 4 |
| New published blog posts | 1 (AI, MX, and the Future of Business) |

---

## The Insight

A silent catch block plus a fallback that does the wrong thing equals an undetectable failure. Two cheap rules close the gap: every provider attempt writes to the audit table, and the fallback's limitations are documented at the call site, not in someone's head. The dual-secret verifier adds a third: testability is a security property — if you can't safely exercise a code path, you cannot trust it.

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
| pending (allaboutv2) | Add tom.cranstoun@gmail.com to BCC; add dual-secret webhook verification |
| dca0a82 (mx-outputs) | Update morning directors report v1.1 |
| 49f1c012 (hub) | Update allaboutv2 + mx-outputs: dual-secret webhook verification and report update |
| pending (mx-outputs) | Publish AI, MX, and the Future of Business blog post + SVG; update directors report v1.2 |
| pending (hub) | Update mx-outputs submodule pointer |
