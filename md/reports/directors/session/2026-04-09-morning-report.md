---
title: "Co-Directors Report — DDT Identity, Stripe Live, Trading-Name Rebrand"
created: "2026-04-09"
segment: "morning"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidential: true
---

# Co-Directors Report — DDT Identity, Stripe Live, Trading-Name Rebrand

**Date:** 9 April 2026 — Morning (overnight session continuing from 8 Apr evening)
**Segment:** morning (since midnight, plus the preceding evening's IDHL prep + book sales work)

---

## Summary

This was a long overnight session covering three major work streams. First, the digitaldomaintechnologies.com landing page is built and deployed via GitHub Pages from a dedicated subfolder of the public allaboutv2 repo, with a substantive bio drawn from the existing professional profile, mx-site visual styling, and a postal address. Second, the book sales system is now LIVE on the cool-cell-c75e Cloudflare Worker — Stripe checkout works end-to-end for all three handbook products, the test card flow surfaces a working download URL, and the 4.3 MB MX Handbook PDF is in R2. Third, Tom established that **CogNovaMX is the trading name of Digital Domain Technologies Ltd** until the legal entity transition is complete, and the visible HTML prose across mx.allabout.network has been swept to reflect that.

The Stripe deployment required absorbing an in-flight infrastructure migration: the deprecated `reginald-api` worker that was serving complimentary book downloads has been atomic-switched to the live `cool-cell-c75e` worker, with all 46 existing download_links rows preserved (same D1 database, same schema, same code paths). Recipients of complimentary tokens experience no change.

---

## What Was Done

### 1. Digital Domain Technologies landing page

Built a substantive landing page for digitaldomaintechnologies.com hosted on GitHub Pages from `allaboutv2/ddt-site/`. Content drawn from the existing professional profile at mx.allabout.network/blog/about.tom.cranstoun.html and bio.html in the allaboutv2 repo.

- **Hero** — "Tom Cranstoun, The MX Guy" (rebranded from "The AEM Guy", with the AEM credential preserved as historical context)
- **Bio narrative** — assembler 1977 → Superbase → BBC newsroom → Adobe AEM (decade) → Edge Delivery Services → Machine Experience
- **Track record** — BBC, Twitter (now X), Nissan-Renault, EE, Ford, MediaMonks
- **Services** — five strategic advisory offerings verbatim from the CogNovaMX professional profile
- **Schema.org `@graph`** with cross-referenced `Organization`, `Person`, and `ProfessionalService` entities; `alternateName: "CogNovaMX"` on the Organization
- **Postal address** — 33 Merchant Way, York, YO23 3TS, both visible and as Schema.org `PostalAddress`
- **Contact email** — `tom.cranstoun@gmail.com` for DDT engagements
- **Visual style** — bookshop dark theme mirroring `mx-unified.css` (deep navy, gold accents, system fonts)

Deployed via a GitHub Actions workflow (`pages-ddt-site.yml`) that uploads only the `ddt-site/` folder as the Pages artifact, leaving the rest of the allaboutv2 repo (the EDS source for allabout.network) untouched.

**Status:** GitHub Pages deploy is green at HTTP. UK2 DNS is updated to the four GitHub Pages IPs. The HTTPS / Let's Encrypt step is still pending — GitHub's DNS-check is stuck on a cached failure from an earlier `85.x` typo that has since been fixed. Documented in REMINDERS for resume.

### 2. Book sales system — LIVE on cool-cell-c75e

Three Stripe products created in test mode:

| Product | Price | Stripe price ID |
|---------|-------|----------------|
| MX Handbook (PDF) | £25 | `price_1TK2SLL6f3HzLE8radZkqGgd` |
| MX Handbook (Print, UK only) | £35 | `price_1TK2clL6f3HzLE8rdKHlx2xC` |
| MX Handbook (Print, Worldwide) | £40 | `price_1TK2WgL6f3HzLE8r5KgE4n1w` |

Tom asked for a third product (UK-only print) after creating the first two; the worker was refactored to support three products with per-product `shippingCountries` arrays (`pdf` → null, `physical_uk` → `['GB']`, `physical_world` → 19-country worldwide list). Tests updated, 146/146 pass.

**Wrangler secrets uploaded:** `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`. Webhook endpoint created on Stripe at `https://reginald.allabout.network/api/v1/stripe/webhook` listening for `checkout.session.completed`.

**Wrangler bindings added:** D1 database `reginald-auth` (id `c705c861-…`) and route `reginald.allabout.network/*`. The route was previously bound to a separate worker (`reginald-api`) which had been the canonical route since 17 March; that worker has been atomic-unbound from its route and left dormant as a rollback target.

**D1 migrations applied to remote:** schema.sql (5 base tables), migration-002 (aliveness), migration-003 (book downloads), and a new migration-004 added during the session (download_token plaintext column for the success-page polling flow — see Architecture Insight below).

**R2 upload:** 4.32 MB MX Handbook PDF uploaded to `mx-books/handbook/mx-handbook.pdf`.

**End-to-end verification:** PDF download from a real Stripe test session returns 200 with 4,532,489 bytes of `application/pdf`. Status JSON returns `4/4 downloads, expires 23 April`. Landing page renders correctly. Read-side reginald registry proxy (`/index.json`) still serves correctly.

### 3. CogNovaMX → DDT trading-name rebrand (visible prose only)

Tom established the legal-vs-trading-name distinction: **Digital Domain Technologies Ltd** is the registered company; **CogNovaMX** is the trading name DDT uses for Machine Experience work, until the legal entity transition is complete.

- **ddt-site** — leads with DDT throughout, CogNovaMX cross-referenced as the brand
- **mx-site visible prose** — 59 footer files swept by Python script (118 byte-identical replacements: "Published by CogNovaMX Ltd" + "© 2026 CogNovaMX Ltd"); 12 one-off files updated by hand (homepage proposition card, About page narrative, contact page tagline, llms.txt, ai.txt, Dublin Core publisher meta on books index, all three book-detail pages' Publisher dd, two blog posts' author cards)
- **Schema.org JSON-LD `"name":` fields** — deferred to REMINDERS, needs careful per-file review with `alternateName` pattern
- **Published Handbook book imprint** — left unchanged to preserve ISBN registration (ISBN 978-1-067638-40-5 is registered against "CogNovaMX Ltd")

Saved a memory file at `~/.claude/projects/.../memory/project_cognovamx_trading_name.md` so future sessions don't get this wrong.

### 4. Stripe Architecture Insight (the bug we fixed mid-session)

The first end-to-end test surfaced a real architectural bug. The original webhook handler stored the post-purchase download URL in **Stripe customer metadata**, then the success page polled Stripe back to retrieve it. But our `createBookCheckoutSession` only sets `customer_email` (which prefills the email field) — it doesn't create or attach a Stripe Customer object. Without a customer, the metadata write was silently skipped, and the polling endpoint returned `download_url: null` forever.

**Fix:** added a `download_token` plaintext column to the `download_links` table (migration 004), changed the webhook handler to store the plaintext token alongside the existing hash, and rewrote the polling endpoint to read directly from D1 by `stripe_session_id` — eliminating two Stripe API round-trips per poll and making the system independent of whether Stripe creates a Customer object. Re-tested end-to-end after the fix: PDF delivery now works.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| New Stripe products | 3 (PDF £25, UK print £35, World print £40) |
| Worker bundle size | 97.73 KiB (gzipped 24.66 KiB) |
| Vitest tests | 146 / 146 passing (was 144, +2 for `physical_uk`) |
| Worker routes now owned by cool-cell-c75e | 5 (allabout.network, www, content, mx, **reginald**) |
| D1 download_links rows preserved across worker switch | 46 |
| R2 files uploaded | 1 (handbook PDF, 4.32 MB) |
| ddt-site files | 4 (index.html, styles.css, CNAME, Pages workflow) |
| mx-site rebrand sweep | 71 files touched (59 by script, 12 by hand) |
| GitHub Pages workflow runs | 6 (5 to wire up correctly, 1 with the populated content) |

---

## The Insight

When you build a feature against an integration without exercising the full data flow, the bug isn't in the code — it's in the **schema of the unspoken assumption**. The book checkout code assumed Stripe would create a Customer object because we passed `customer_email`, and that assumption never appeared in any test because all the unit tests mocked Stripe at the function-call boundary, not the API-response boundary. The bug only surfaced when a real Stripe response showed `customer: null`.

The architectural fix isn't "add a test for the customer-null case" — it's "stop depending on data living in someone else's database to serve our own success page". The new design reads from our D1, which we control, and the worker code path is shorter, faster, and has fewer failure modes. **The Stripe integration is now strictly a payment processor, not also a key-value store.**

This is a worked example of an MX principle: explicit state in the system that owns the user experience, not implicit state inferred from a third-party round trip.

---

## Decisions Made

- **Atomic switch of `reginald.allabout.network/*` from `reginald-api` to `cool-cell-c75e`** — explicit Tom approval after risk review (existing complimentary tokens, recipients are colleagues who can request fresh tokens if anything breaks). `reginald-api` left dormant as a rollback target, do not delete yet.
- **Three handbook products instead of two** — UK-only print at £35 and worldwide print at £40, instead of one global print at £35. Tom's call: UK customers shouldn't subsidise worldwide shipping.
- **CogNovaMX is a trading name of Digital Domain Technologies Ltd** until the legal transition is fully set up. DDT is the legal entity. Both names can appear in the same document. Memory saved.
- **Phase 1 rebrand scope: visible HTML prose only** — Schema.org JSON-LD `"name":` fields, book manuscripts, mx-canon, CRM templates, audit reports, and source blogs are deferred to a 🟡 REMINDERS task for considered cleanup later.
- **Published Handbook imprint stays as "CogNovaMX Ltd"** — the publication record at the British Library / Amazon KDP is registered against that name. Future editions can switch.
- **Tom's contact email on ddt-site is `tom.cranstoun@gmail.com`** rather than `info@cognovamx.com` — DDT engagements route to Tom's personal address, MX brand engagements use the brand inbox.

---

## Open Questions

- **Live Stripe mode flip:** when do we want to do this? Test mode works end-to-end. Live mode requires regenerating all five values (secret key, webhook secret, three price IDs) in Stripe live mode and a 60-second redeploy. MailerLite should probably be wired first so buyers actually get an email.
- **MailerLite wiring:** currently the worker silently skips MailerLite notification because the API key + group IDs are placeholders. The buyer journey works without it but no email is sent. Should be the next priority.
- **handbook.html buy buttons:** still disabled with "purchasing available soon" text. Now that the backend works in test mode, the buttons should be enabled and a third button added for `physical_uk`. Pricing on the page may need updating (currently shows £35, now £35 UK and £40 World).
- **Stripe business profile:** Tom needs to verify the business in Stripe before going live. Use Legal name "Digital Domain Technologies Ltd", DBA "CogNovaMX", DDT tax info.
- **digitaldomaintechnologies.com HTTPS:** GitHub Pages DNS-check still stuck. The Remove + re-add custom domain trick wasn't tried last night because Tom paused. Try it tomorrow.
- **`reginald-api` cleanup:** when is it safe to delete the dormant worker? Probably 24-48h after this deploy, once we're confident no edge cases surface.

---

## Next Steps

1. Step-commit and push everything (this report is part of that)
2. Wire MailerLite (API key, two groups, custom fields, automations, then update the placeholder vars in wrangler.toml and redeploy)
3. Enable the handbook.html buy buttons + add the third button for `physical_uk`
4. Resume the GitHub Pages DNS-check fix for digitaldomaintechnologies.com
5. Schema.org JSON-LD rebrand sweep (the deferred phase 2 of the trading-name work)
6. Live Stripe mode flip — once MailerLite delivers an email end-to-end in test mode

---

## Commit Log (preview — to be filled in by step-commit)

Will be appended after step-commit completes.
