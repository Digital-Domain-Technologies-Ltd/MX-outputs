---
title: "Co-Directors Report — Printer Email Pipeline Hardened"
created: "2026-04-14"
segment: "morning"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidential: true
---

# Co-Directors Report — Printer Email Pipeline Hardened

**Date:** 14 April 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

A reported failure in the book-fulfilment chain — printed orders not reaching the printer — was investigated and root-caused this morning. The Stripe-webhook handler in our Cloudflare worker was sending order emails through Resend with a hard-coded BCC list, then falling back silently to MailerLite (which never copies the printer). We corrected the BCC list, added the new printer mailbox, and rebuilt the failure-logging path so the next misdelivery cannot hide.

---

## What Was Done

### 1. Root-cause analysis

Traced the order-notification flow in `allaboutv2/cloudflare/files/reginald/handlers/stripe-webhook.js`. Confirmed that physical orders were BCC'd only to `info@cognovamx.com` and `info@surprint.com`, and that any Resend failure was caught and logged to console only — never to the D1 audit table. The MailerLite fallback adds the buyer as a subscriber but never copies the printer, so a Resend outage produces a buyer confirmation, no printer notice, and no record of the gap.

### 2. BCC list corrected

Physical-order BCC now reads `mx-printworks@cognovamx.com` (the printer), `tcranstoun@outlook.com` (Tom's monitoring inbox), and `info@surprint.com`. PDF orders unchanged.

### 3. Audit logging hardened

Added structured `[STRIPE-WEBHOOK]` console prefixes and three new D1 audit actions: `email_notification_sent` (per-provider success with BCC list), `email_provider_failed` (per-provider failure, including missing API key), and an enhanced `email_notification_failed` (only when both providers fail). Inline comments now flag the MailerLite-fallback gap so future readers do not re-discover it.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 0 (pending) |
| Files changed | 1 |
| Lines added | +60 |
| Lines removed | −13 |
| Repositories | 1 (allaboutv2) |

---

## The Insight

A silent catch block plus a fallback that does the wrong thing equals an undetectable failure. Two cheap rules close the gap: every provider attempt writes to the audit table, and the fallback's limitations are documented at the call site, not in someone's head.

---

## Next Steps

- Deploy the worker: `cd allaboutv2/cloudflare/files && npx wrangler deploy`
- After next test order, query D1 for `email_notification_sent` to confirm the printer BCC reached Resend
- Verify Resend's domain authentication for `info@surprint.com` and `mx-printworks@cognovamx.com` (no bounces/suppressions)
- Decide whether `tcranstoun@outlook.com` should also BCC PDF orders

---

## Commit Log

| Hash | Description |
|------|-------------|
| pending | Fix printer email BCC and harden audit logging in Stripe webhook |
