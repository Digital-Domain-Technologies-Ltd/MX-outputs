---
title: "Co-Directors Report - One News Item, Every Surface"
description: "The Visa-in-ChatGPT announcement verified against AP, recorded in Appendix J, drafted as a blog post, propagated into all three manuscripts, and given a public Industry News lander at the mx-site root, with a canonical lander template and a retargeted /news skill so the next item lands faster."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
version: "1.0"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-12-afternoon-report.md
  purpose: "Record the Visa-in-ChatGPT news intake, its propagation across appendix, blog, manuscripts, and the new public news lander, for the board."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - One News Item, Every Surface"]

---

# Co-Directors Report - One News Item, Every Surface

**Date:** 12 June 2026 - Afternoon
**Segment:** afternoon (since noon)

---

## Summary

One piece of industry news, Visa embedding its payment network inside ChatGPT (announced 10 June at the Visa Payments Forum), was verified against the AP source and carried to every surface the operation maintains: a dated entry in Appendix J, a blog draft through the Intent CMS pipeline, propagation into all three manuscripts at four depths, and a new public Industry News lander at the mx-site root. The lander work produced two reusable assets: a canonical non-blog page template in the SSOT templates folder, and a retargeted /news skill whose Phase 6 now maintains the live lander deterministically. The development itself matters commercially: agent purchases now reach any merchant that accepts Visa with zero onboarding, which is the commercial-pressure argument the Web Audit Suite sells against, stated this week by the largest payment network rather than by us.

---

## What Was Done

### 1. News intake: Visa embeds its payment network in ChatGPT

The /news workflow verified the AP story (Ortutay and Sweet, 10 June 2026) from the article's own page source after AP blocked automated fetch. Two findings needed judgement: AP reports OpenAI retired Instant Checkout in March 2026, which made the existing Agentic Commerce Protocol entry's "powers Instant Checkout" line stale (now amended, attributed to AP); and the skill's news-page target did not exist anywhere in the tree (resolved by building one, below). The new Appendix J entry records the announcement in the live condensed format with the model inversion the development represents: the integration-list model asked merchants to opt in and pay, and retired within months; the network model arrives with a credential the till already accepts.

### 2. Blog draft and manuscript propagation

A blog post, "The Agent Arrives With a Wallet", was authored as Intent CMS markdown and promoted to a Zone 2 noindex draft with every gate green. Structure follows the requested gains-first/risks-second slice across shoppers, readers, and sellers. The same concept then propagated into the manuscripts at four depths: a two-sentence extension in the free book's commerce paragraph, a fourth approach block in Handbook v2 chapter 11's protocol-decision section (plus a size-neutral fix to a hard-coded count), a dated section in Protocols chapter 9 matching that chapter's convention, and a rail-versus-protocol paragraph in Protocols chapter 14. All new prose passed the humanizer scanners at zero hits.

### 3. Industry News lander and the page template

A public news lander now serves at the mx-site root: six dated entries newest-first, each linking to the full Appendix J record, with CollectionPage structured data, the embedded source frontmatter every mx-site page carries, and the regulatory disclaimer where legislation is named. The home page links it; the sitemap and both llms files carry it. The lander's chrome was generalised into a canonical template (mx-canon/ssot/templates/page-lander.html, approved this session), the html-writer skill carries the non-blog lander rules, and the /news skill's Phase 6 was rewritten against the real page with deterministic verification steps.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 2 (1 mx-outputs by this session; hub work landed inside the parallel session's shared commit) |
| Files changed (hub, this session's share) | 12 |
| Files changed (mx-outputs) | 6 (+690 / -95 lines) |
| Manuscript files touched | 5 across 3 books |
| New public pages | 1 (news.html) |
| New canonical templates | 1 (page-lander.html) |
| Repositories | 2 |

---

## Decisions Made

- Instant Checkout's reported retirement is recorded on AP's authority alone (corroborating searches declined); the ACP entry says "AP reports" rather than asserting it as settled fact.
- The blog source carries both `mx.status` and `x-mx-contentState` because the generator requires the former while routing reads the latter; the enum reconciliation stays an open decision.
- The lander trims to roughly the eight most recent entries; Appendix J keeps the full record.

---

## Open Questions

- The corpus dates ACP's launch to 29 September 2024 in Appendix J and September 2025 in Protocols chapter 9. One is wrong; which record is authoritative needs a call.
- The served appendix HTML under books/appendices predates today's entry; whatever regenerates that tree needs a run before the lander's deep link shows the Visa record.
- The spell sweep added 162 corpus words to the project wordlist in one pass, including case-variants that look like whitelisted typos; the diff deserves a review before it hardens.

---

## Next Steps

- Review and publish the blog draft (promote --publish) when ready.
- Regenerate the served appendix HTML so the lander's Appendix J link shows the Visa entry.
- Resolve the ACP launch-date conflict between Appendix J and Protocols chapter 9.
- Review the 162-word wordlist addition for accidental typo whitelisting.

---

## Commit Log

mx-outputs (main):

| Hash | Description |
|------|-------------|
| 5abf63c8 | Add Industry News lander and Visa/ChatGPT blog draft |

Hub (MX-hub, main):

| Hash | Description |
|------|-------------|
| 17e7c902 | Parallel session work: humanizer structure scanner, CRM contacts and business records, agent-wallet blog draft, page-lander template, manuscript updates (this session's hub files were swept into the concurrent audit session's commit) |
