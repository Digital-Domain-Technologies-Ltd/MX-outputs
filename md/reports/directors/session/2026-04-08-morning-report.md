---
title: "Co-Directors Report — IDHL Prep + Book Sales Worker Port"
created: "2026-04-08"
x-mx-segment: "morning"
version: "1.1"
author: Tom Cranstoun
audience: business
confidential: true

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-08-morning-report.md
---

# Co-Directors Report — IDHL Prep + Book Sales Worker Port

**Date:** 8 April 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Two distinct work streams completed this morning. First, audit prep for the 2pm IDHL presentation in Leeds — all three target audits (Bob W, NEOM, Freeths) ready with reports and PDFs. Second, the entire book sales code path (Stripe checkout, webhook, R2 download delivery, MailerLite notifications) was ported from the deprecated `mx-reginald/worker/` codebase into the live `cool-cell-c75e` Cloudflare Worker. The book sales system is now technically ready to deploy — only awaiting Stripe account credentials and a MailerLite group ID before going live for MX: The Handbook PDF (£25).

---

## What Was Done

### 1. Freeths Audit (New)

Added complete web audit report for freeths.co.uk (578 lines) with matching PDF. Third and final target site for the IDHL presentation.

### 2. NEOM Wellbeing Report Refresh

Substantial rewrite of the NEOM audit report — 194 lines added, 135 removed. PDF regenerated.

### 3. IDHL Presentation Stack Ready

All three audits (Bob W, NEOM, Freeths) now have current reports and PDFs ready for the 2pm meeting with Jonathan Healey at IDHL, 10 South Parade, Leeds.

### 4. Book Sales Worker Port (New work stream)

Discovered during pre-port audit that the book sales code path lived entirely in `mx-reginald/worker/`, a worker that has never been deployed and would conflict with the live `cool-cell-c75e` worker if anyone tried `wrangler deploy` on it. The REMINDERS.md checklist for "set up Stripe and enable handbook buy buttons" would have failed at the deploy step.

Resolved by porting the full book sales code path into the live worker:

- **5 new files** in `allaboutv2/cloudflare/files/reginald/`: `handlers/book-checkout.js`, `handlers/books.js` (download landing page, secure file serving, generate-link), `db/downloads.js`, `lib/mailerlite.js`, `db/migration-003-book-downloads.sql`
- **5 edited files** in the live worker: appended `createBookCheckoutSession` to `stripe/client.js`; merged book-purchase branch into `handlers/stripe-webhook.js`; added 4 imports, 7 routes and `bookSuccessPageHTML` to `cloudflare-worker.js`; added `BOOKS_R2` binding and 4 placeholder vars to `wrangler.toml`; appended 13 plain-object-mock tests to `cloudflare-worker.test.js`
- **Defused dead worker:** commented out the conflicting route binding in `mx-reginald/worker/wrangler.toml` with deprecation notice; source kept as canonical reference
- **Updated runbook:** `mx-canon/mx-maxine-lives/manuals/manual-book-sales.cog.md` — all paths now point at `allaboutv2/cloudflare/files/reginald/`, deploy commands updated, D1 migration step added

**Validation:**

- `npm test` → 144/144 vitest tests pass (131 existing + 13 new book tests)
- `npx wrangler deploy --dry-run` → worker bundles to 99 KB (under 1 MB limit), all imports resolve, BOOKS_R2 binding accepted
- Lint regression check → zero new lint errors

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Audit reports ready | 3 (Bob W, NEOM, Freeths) |
| Worker files added | 5 |
| Worker files edited | 5 |
| Vitest tests added | 13 |
| Vitest tests passing | 144 / 144 |
| Worker bundle size | 99 KB |
| Repositories touched | 3 (allaboutv2, mx-canon, mx-hub) |

---

## The Insight

The book sales blocker wasn't Stripe — it was a dead worker. The REMINDERS checklist assumed `mx-reginald/worker/` was deployable. It wasn't, and never had been: its `wrangler.toml` claimed a route already owned by `cool-cell-c75e`. Pre-flight discovered this in the first 10 minutes of the session, which turned a "set up Stripe and flip the buttons" task into a 10-file porting job. The lesson: trust the live system, not the source tree. Always probe `curl` against the deployed endpoint before assuming the wrangler.toml in front of you is authoritative.

---

## Next Steps

- Travel to Leeds for 2pm IDHL presentation
- 15 min pre/post with Jonathan Healey
- After IDHL: Tom returns with Stripe test keys + price ID + MailerLite group ID
- Apply D1 migration `migration-003-book-downloads.sql` to remote `reginald-auth`
- `wrangler secret put` for `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `MAILERLITE_API_KEY`
- Update var placeholders in `wrangler.toml` with real price ID and group ID
- `npx wrangler deploy` from `allaboutv2/cloudflare/files/`
- End-to-end test with Stripe test card `4242 4242 4242 4242`
- Switch to live keys, redeploy, enable handbook.html buy button

---

## Key Dates

- **Today 2pm** — IDHL presentation, 10 South Parade, Leeds LS1 5QS
- **12 May 2026** — CMS Summit Frankfurt (34 days)
- **1 Jul 2026** — MX: The Protocols publication (84 days)
