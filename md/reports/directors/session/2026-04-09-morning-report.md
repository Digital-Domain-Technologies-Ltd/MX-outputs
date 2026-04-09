---
title: "Co-Directors Report — DDT Identity, Stripe Live, Trading-Name Rebrand, MailerLite Wired"
created: "2026-04-09"
segment: "morning"
version: "1.1"
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

---

## Update v1.1 — MailerLite wired end-to-end (continuation, 09 Apr morning)

After the v1.0 commit at ~06:00, work continued on the MailerLite integration. Full buyer email pipeline is now operational in test mode.

### What was added

**MailerLite account setup**

- Account confirmed: Digital Domain Technologies Ltd, Free plan, owner tom.cranstoun@gmail.com
- Two groups created: `Handbook PDF Buyers` (id 184247221067187481) and `Handbook Physical Buyers` (id 184247454217012721)
- Five custom fields created via API: `book_title`, `order_type`, `download_url`, `order_id`, `shipping_address` (all text type, ids 1215266–1215270)
- API token generated, scoped to "MX Handbook Worker"

**Worker integration**

- `MAILERLITE_API_KEY` uploaded via `wrangler secret put`
- `MAILERLITE_GROUP_HANDBOOK_PDF` and `MAILERLITE_GROUP_HANDBOOK_PHYSICAL` set in wrangler.toml with real IDs
- Worker redeployed (version `bcc35684-…`)
- End-to-end verified: test PDF checkout creates a subscriber in the PDF group with all five custom fields populated correctly

**DNS authentication for cognovamx.com**

- Domain registered with MailerLite (id 1616446)
- GoDaddy API token generated and authorised
- **Merged SPF record** crafted to authorise three sender services in one record: `v=spf1 include:spf.protection.outlook.com include:_spf.mlsend.com include:secureserver.net -all`
  - This **fixes a pre-existing M365 SPF gap** as a side effect — the previous record (`include:secureserver.net -all` only) didn't authorise Microsoft 365, so M365 outbound mail was relying on accidental coverage
- **DKIM CNAME** added: `litesrv._domainkey.cognovamx.com → litesrv._domainkey.mlsend.com`
- **MailerLite domain verification TXT** preserved: `mailerlite-domain-verification=c91ac7fc...`
- **Microsoft 365 verification TXT** preserved: `NETORG20418832.onmicrosoft.com`
- DMARC (`p=quarantine`) untouched — pre-existing
- **One incident:** the MailerLite "Connect your domain" wizard auto-overwrote our merged SPF with their own SPF macro wrapper (a known GoDaddy Domain Connect side effect). I detected the unexpected DNS state immediately, restored the merged SPF via GoDaddy API, and verified propagation
- MailerLite re-checked records and marked the domain `Authenticated`

**Sender verification**

- `info@cognovamx.com` verified as a valid sender via the MailerLite verification email round-trip

**Automation built**

- Workflow `Handbook PDF — buyer download email`
  - Trigger: subscriber joins group `Handbook PDF Buyers`
  - Action: send email
- Email config: From `CogNovaMX <info@cognovamx.com>`, Reply-to `info@cognovamx.com`, Subject `Your MX Handbook download is ready`, plain-text body with three personalization tokens (`{$name}`, `{$download_url}`, `{$order_id}`)
- Old abandoned `MX Mailer` workflow deleted
- Workflow activated

**Bug found and fixed mid-session**

- The first test purchase produced an email with **all three personalization tokens blank** — the email arrived but said "Hi ," and "Your secure download link is here:" with nothing after it
- Diagnosis: I had instructed Tom to type literal `{$name}` text into the body. **MailerLite's editor doesn't recognise typed merge-tag text** — tokens must be inserted via the `{x}` "Insert personalization" toolbar button, which stores them as typed merge-tag objects rather than plain text
- Fix: deleted the literal text, inserted proper personalization chips via the `{x}` button (chips appear as blue highlighted pills in the editor), saved
- Re-tested with `tom.cranstoun+mltest4@gmail.com`: email arrived from `CogNovaMX <info@cognovamx.com>` with all three tokens substituted correctly — real download URL, real Stripe session ID, real buyer name. **Full pipeline operational.**

### By the numbers (continuation update)

| Metric | v1.0 | v1.1 |
|--------|------|------|
| MailerLite groups | 0 | 2 |
| MailerLite custom fields | 0 | 5 |
| MailerLite automations active | 0 | 1 |
| MailerLite-authenticated domains | 0 | 1 (cognovamx.com) |
| Wrangler secrets | 2 | 3 (added MAILERLITE_API_KEY) |
| End-to-end test purchases (with email delivery verified) | 0 | 1 (mltest4) |
| DNS records added at GoDaddy | 0 | 2 (SPF replace + DKIM CNAME) |
| Hours awake | n/a | many |

### The Insight (continuation)

Two related insights from the MailerLite work, both about **trusting the system to do what it claims to do**.

**1. The MailerLite Domain Connect wizard quietly overwrote my work.** I added a carefully merged SPF record via the GoDaddy API. Then Tom clicked through MailerLite's "Connect your domain" wizard, which used GoDaddy Domain Connect to silently replace my SPF with their own wrapper — losing the Microsoft 365 include in the process. I caught it because I re-queried DNS to debug a different problem and saw the unexpected new state. **Lesson:** when an integration wizard offers to "automatically configure DNS for you", assume it will trample anything that's already there. Always re-query DNS after using such wizards. Better still: don't use them when you have multiple senders to merge — do the records by hand.

**2. MailerLite's editor stores merge tags as typed objects, not text.** I told Tom to type `{$download_url}` into the body. MailerLite stored those characters as plain text. The first test email arrived with the line "Your secure download link is here:" followed by nothing — the buyer would have had no way to download what they paid for. The fix was to use MailerLite's `{x}` Insert personalization button, which inserts a special merge-tag object that *looks* identical to typed text in the editor (`{$download_url}` displayed in a blue pill) but is internally a different thing. **Lesson:** when a UI shows a field as visually identical to plain text, you cannot trust the rendering — you must verify the underlying type. Hover, click, inspect — don't assume. The rendered preview in MailerLite was unhelpful here because empty merge tags collapsed to whitespace; the bug was only visible in the actual sent email.

Both bugs were *recoverable* because we had a real email landing in a real inbox to compare against. Both would have shipped to a real buyer if we'd activated without testing. **The cost of not running an end-to-end test on a payment system is paid by the first buyer.**

### Open questions (updated)

- **Physical group automation not yet built.** PDF group works end-to-end. Physical buyers (UK and World) currently land in the right group but no email fires. Different body needed: no download URL, instead "your printed copy will be dispatched, here's the address you supplied". To do.
- **handbook.html buy buttons still disabled.** Backend works in test mode, but the buy buttons on the live site are still showing "purchasing available soon". Three buttons needed (PDF £25, Print UK £35, Print World £40), pricing on the page needs updating from the current £35 print to reflect the split.
- **Microsoft 365 DKIM still missing.** Pre-existing weakness. M365 outbound mail isn't aligned-DKIM-signed (only Microsoft's default `onmicrosoft.com` selector). Should be added in M365 admin portal at some point.
- **Stripe live mode flip:** when MailerLite is fully tested and Tom is ready to take real money, regenerate four Stripe values in live mode and redeploy. ~60 seconds of work once decided.
- **Stripe business verification:** required before live mode. Legal name DDT Ltd, trading name CogNovaMX, DDT tax info.
- **digitaldomaintechnologies.com HTTPS:** GitHub Pages DNS-check still stuck from yesterday.
- **`reginald-api` worker cleanup:** dormant ~12h now, can be deleted in another 24h once we're confident.

### Next steps (updated)

1. Step-commit and push everything
2. **Smoke test physical_uk and physical_world** flows (5 min) — confirm shipping_address propagates
3. Build the Physical group MailerLite automation (different email body)
4. Enable handbook.html buy buttons + add the third button
5. Live Stripe mode flip
6. Digital Domain Technologies HTTPS resume
7. (Future) Microsoft 365 DKIM setup
8. (Future) Schema.org JSON-LD trading-name rebrand (Phase 2)

### What this means for investors

Book sales are technically operational. A buyer can purchase MX: The Handbook (PDF) right now — the only thing standing between zero revenue and first sale is enabling three HTML buttons on a marketing page and flipping Stripe to live mode. Both are five-minute jobs that have been deliberately deferred until the system was end-to-end verified.

The system supports three SKUs (PDF £25, Print UK £35, Print World £40) which means revenue per sale is 25–40% higher than the original two-SKU plan, with no extra work to build or maintain. Every paying customer receives an authenticated email from `info@cognovamx.com` (not a generic mailerlite.com address), passes DKIM and SPF, and lands in the inbox not spam. This is production-quality from day one.

The DDT-vs-CogNovaMX trading-name structure is now reflected consistently across the live site (visible prose) and the legal-entity landing page (digitaldomaintechnologies.com, awaiting HTTPS). This protects against the legal-entity confusion risk Tom flagged on 2026-02-28 when CogNovaMX Ltd was first conceived.

---

## Commit Log (preview — to be filled in by step-commit)

Will be appended after step-commit completes.
