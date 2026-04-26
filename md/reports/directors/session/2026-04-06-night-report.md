---
title: "Co-Directors Report — Book Purchase System: Stripe + MailerLite + R2"
created: "2026-04-06"
x-mx-segment: "night"
version: "1.0"
author: Tom Cranstoun
audience: stakeholders
confidential: true
---

# Co-Directors Report — Book Purchase System

**Date:** 6 April 2026 — Night
**Segment:** night (21:00+)

---

## Summary

Built the complete e-commerce system for MX book sales. Buyers can purchase PDF or physical copies of MX: The Handbook via Stripe Checkout, with automatic PDF delivery through token-based download links and printworks notification via MailerLite. All infrastructure runs on the existing Reginald Cloudflare Worker. Buy buttons are disabled pending Stripe account setup.

---

## What Was Done

### 1. Stripe Checkout Integration

Added one-time payment checkout to the Reginald Worker. New `createBookCheckoutSession()` function in the Stripe client handles payment mode (not subscription), with shipping address collection for physical orders across 19 countries.

**New file:** `mx-reginald/worker/src/handlers/book-checkout.js` — POST `/api/v1/books/checkout`

### 2. Webhook Processing

Extended the existing Stripe webhook handler to route `checkout.session.completed` events. For PDF purchases, generates a 16-character hex token with 4 downloads over 14 days. For physical purchases, captures shipping address. Both types notify via MailerLite.

**Modified:** `mx-reginald/worker/src/handlers/stripe-webhook.js`

### 3. MailerLite Notification System

New MailerLite API client adds buyers as subscribers with custom fields (download URL, order type, shipping address). MailerLite automations (to be configured) will send buyer emails and printworks notifications with BCC to tom.cranstoun@gmail.com.

**New file:** `mx-reginald/worker/src/lib/mailerlite.js`

### 4. Success Pages and Download URL Polling

Added book purchase success page with live polling for download URL. PDF buyers see a download button once the webhook has processed; physical buyers see a shipping confirmation.

**Modified:** `mx-reginald/worker/src/index.js` — new routes for checkout, success page, download-url polling

### 5. R2 Upload Pipeline

Added deliberate upload scripts for all three books. Upload is decoupled from PDF generation — Tom controls when R2 content changes.

| Command | Uploads |
|---------|---------|
| `npm run pdf:handbook-upload` | Handbook only |
| `npm run pdf:protocols-upload` | Protocols only |
| `npm run pdf:intro-upload` | Introduction only |
| `npm run pdf:upload-all` | All three |

### 6. Book Metadata

Added protocols and introduction to `BOOK_METADATA` in the books handler, enabling download delivery for all three titles.

### 7. Handbook Page Updates

Replaced single buy button with two buttons (PDF £25, Physical £35 +P&P). Added checkout JavaScript and buy-button CSS. Buttons disabled with "Purchasing available soon" pending Stripe setup.

### 8. Automated Tests

Created 16 vitest tests covering checkout creation, input validation, Stripe metadata routing, MailerLite notification, shipping address formatting, and end-to-end flow simulation. All pass.

### 9. Documentation

- **Runbook:** `mx-canon/mx-maxine-lives/manuals/manual-book-sales.cog.md` — complete setup guide, API reference, troubleshooting
- **REMINDERS.md:** Updated with full Stripe setup checklist and link to runbook

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 2 (mx-outputs + hub) |
| New files | 4 |
| Modified files | 10 |
| Lines added | ~2,850 |
| Tests | 16 (all passing) |
| API endpoints added | 3 |

---

## What Remains (Tom's Actions)

1. Create Stripe account with two products (PDF £25, Physical £35)
2. Set Wrangler secrets (Stripe keys, MailerLite API key)
3. Update wrangler.toml with real price IDs and MailerLite group IDs
4. Create MailerLite groups, custom fields, and automations
5. Upload handbook PDF to R2: `npm run pdf:handbook-upload`
6. Deploy worker: `cd mx-reginald/worker && npx wrangler deploy`
7. Test with Stripe test keys, then switch to live
8. Remove disabled state from buy buttons

Full checklist in REMINDERS.md. Detailed runbook at `mx-canon/mx-maxine-lives/manuals/manual-book-sales.cog.md`.

---

## Architecture

```
handbook.html → POST /api/v1/books/checkout → Stripe Checkout
    → webhook: checkout.session.completed
        → PDF: generate download link (R2 + D1) + MailerLite
        → Physical: MailerLite (printworks + BCC Tom)
    → success page (polls for download URL)
```

---

## Risk

| Risk | Mitigation |
|------|------------|
| MailerLite email delivery failure | Non-fatal — purchase still succeeds, download link still works via success page |
| R2 PDF not uploaded | Handler returns 404 with clear message; `pdf:handbook-upload` resolves |
| Stripe webhook not configured | Checkout works but no download link generated; manual link generation available |

---

*Maxine — Night session, 6 April 2026*
