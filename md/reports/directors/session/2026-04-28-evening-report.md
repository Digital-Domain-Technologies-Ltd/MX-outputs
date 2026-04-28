---
title: "Co-Directors Report — Adobe-Semrush market signal, dual-audience response"
description: "Adobe acquired Semrush for $1.9bn. Two artefacts shipped: vendor-neutral blog post for the Stream/Gathering audience and a Reginald-named investor note for the DDT investor audience."
author: "Tom Cranstoun"
created: 2026-04-28
modified: 2026-04-28
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
---

# Co-Directors Report — Adobe-Semrush market signal, dual-audience response

**Date:** 28 April 2026 - Evening
**Segment:** evening (since 5pm)

---

## Summary

Adobe announced the completion of its $1.9bn cash acquisition of Semrush, framed explicitly as making generative engine optimisation a first-class enterprise category alongside SEO. Within the segment we produced two response artefacts: a vendor-neutral blog post for the Stream and Gathering sponsor audience, and a Reginald-named investor note for the DDT advisory and investor audience. The market signal moves the MX commercial argument from ahead-of-the-market to exactly-on-the-market, with the largest CX vendor on earth now publicly underwriting the thesis.

---

## What Was Done

### 1. Adobe-Semrush market read and dual-audience strategy

Read the Adobe announcement, identified the sentence that re-prices the category ("a holistic understanding of how their brands appear across owned channels, LLMs, traditional search and the wider web"), and mapped two audience-specific responses against the existing audience-split rule (Reginald named for DDT investors, never named for Gathering sponsors).

### 2. DDT investor note

Wrote `adobe-semrush-investor-note.md` in `mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/`. Names Reginald explicitly as the source-of-truth attestation layer Adobe did not buy and cannot easily build. Confidential, marked for advisory board and investor distribution. Includes the explicit framing for three audiences (CMO at Adobe customers, investor, AEM-shop technical buyer) and a watch-list for follow-on Adobe acquisitions in the attestation space.

### 3. mx-site blog post and social card

Wrote `adobe-just-bought-the-dashboard.html` in `mx-outputs/mx-site/blog/`, vendor-neutral, 884 words, 4 min read. Started in `drafts/` then promoted to the published location with full asset-path rewrite (../../ to ../), robots set to index/follow, JSON-LD @ids and canonical URLs updated, mx:status set to published. Social card written as `adobe-just-bought-the-dashboard-social.svg` (1200x630) matching the existing blog social-card style. Closing paragraph added at Tom's request: a personal two-year track record explicitly stating the work pre-dates the market signal. Sitemap regenerated.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 |
| Files changed | 4 |
| Lines added | +290 |
| Lines removed | -1 |
| Repositories | 1 (mx-outputs); hub commit pending |
| Word count (blog) | 884 |
| Polish-pass checks passed | em-dash ban, en-dash ban, mdash entity ban, xmllint SVG validity, link sanity, JSON-LD schema completeness |

Hub-side artefact (DDT investor note) shipped as a separate file in `mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/`; will land in the Step 3 hub commit.

---

## Why It Matters

A $1.9bn all-cash deal at the largest CX vendor sets the price floor on the category MX has been building infrastructure for. Anil Chakravarthy's quote ("we're unlocking GEO for marketers as a new growth channel alongside their SEO") is the sentence sponsor and investor conversations can now both quote. Before today's segment, "GEO is enterprise" needed argument; after the segment, it is a press release.

The dual-audience artefact pattern (vendor-neutral public, Reginald-named confidential) is now proven on a real market signal rather than rehearsed on a hypothetical. The audience-split rule worked as written; no edits to the rule needed.

---

## The Insight

Adobe owns the answering agent (Brand Concierge) and the measurement (Semrush). They do not own the source-of-truth attestation layer at the document level. C2PA covers media provenance, not document governance. That gap is now visible at $1.9bn scale, not at thought-leadership scale, and the language for naming the gap is in Adobe's own announcement.

---

## Decisions Made

- Dual-audience response shipped: vendor-neutral blog (Reginald not named, Stream/Gathering audience) and confidential investor note (Reginald named, DDT audience). Same market signal, two different framings, neither contaminated.
- Blog promoted from drafts to published immediately rather than left to season. Rationale: market-signal half-life is 48-72 hours and the post is dated 28 April 2026.
- Tom requested a personal closing paragraph to make the two-year track record explicit. Added.

---

## Next Steps

- Push hub Adobe-Semrush commit (this Step-Commit run will handle).
- Commit and push the worker / cache purge so the blog is publicly accessible (per the deploy workflow rule, after the hub push).
- Watch for follow-on Adobe acquisitions in the attestation space (most plausible: a C2PA ecosystem player extending into document attestation). If observed, accelerate Gathering timeline.
- Consider sending the investor note (with light tailoring) to the named advisory board members.

---

## What This Means for Investors

The category we are building infrastructure for has just received a $1.9bn validation from the largest enterprise CX vendor on earth. The fundraising hook for the next two quarters writes itself: Adobe paid $1.9bn for the dashboard half; we hold the source-of-truth half they did not buy. The asymmetric-bet narrative (covered downside, infrastructure upside) now has external corroboration from a Fortune 500 deal.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 463a94e | Blog: Adobe-Semrush market signal post and social card (mx-outputs) |
| _pending_ | Hub: Adobe-Semrush investor note + mx-outputs pointer bump |
