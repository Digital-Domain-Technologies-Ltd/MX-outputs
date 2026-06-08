---
title: "Co-Directors Report — MX Bookshop: Wix to Static with Full MX Treatment"
created: "2026-03-31"
x-mx-segment: "evening"
version: "1.0"
author: Tom Cranstoun
audience: business
confidential: true

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-31-evening-report.md
  purpose: "Co-Directors Report - MX Bookshop: Wix to Static with Full MX Treatment"
  audience: [humans, machines]
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - MX Bookshop: Wix to Static with Full MX Treatment"]
---

# MX Bookshop: Wix to Static with Full MX Treatment

Rebuilt the Wix-hosted book-sale website as a static site inside allaboutv2, applying MX comprehensively. Used Playwright with system Chrome to scrape the JavaScript-rendered Wix page, extracted all content and images, then rebuilt from scratch with semantic HTML, Schema.org structured data, cog metadata, and accessibility throughout. Also committed pre-existing unstaged changes across manuscripts, appendices, and book outputs.

## By the Numbers

- **7 commits** across 3 repositories (MX-hub, allaboutv2, mx-outputs)
- **16 new files** in the bookshop (HTML, CSS, JS, cog, llms.txt, robots.txt, 10 images)
- **25 files** updated in manuscripts and appendices
- **5 book outputs** regenerated (HTML + PDF)

## What Was Built

### MX Bookshop (`allaboutv2/mx/bookshop/`)

A complete book-sale website replacing the Wix-hosted version, now publishing to `mx.allabout.network/books/`. Three books presented: MX: The Intro (free), MX: The Handbook, and MX: The Protocols.

**MX treatment applied:**

- **Schema.org JSON-LD** — Book, Organization, Person, Offer, ItemList, WebPage types
- **MX meta tags** — status, contentType, audience, tags, aiAssistance, contentPolicy
- **Cog metadata** — cog:name, cog:version, cog:category, cog:tags, cog:description, plus `<link rel="cog">`
- **Open Graph + Twitter Cards** — full social sharing metadata
- **Dublin Core** — library and academic discoverability
- **llms.txt** — AI agent context file describing all three books, MX, the author, and contact details
- **robots.txt** — crawler guidance with cog and llms.txt pointers
- **Accessibility** — skip link, ARIA landmarks, role attributes, alt text, focus-visible states, print styles
- **Responsive design** — mobile-first breakpoints at 480px, 768px, 1024px
- **No inline CSS or JS** — all external per MX HTML coding principle

### Technical Approach

Playwright (with system Chrome — bundled Chromium requires root) scraped the fully client-rendered Wix page, extracting visible text, image URLs, buttons, and section structure. All images downloaded and served locally. The rebuild is not a port — it is a ground-up implementation using the Wix content as source material.

## What Changed

- Book appendices HTML (A through P) — updated across all files
- Appendix llms.txt and sitemap.xml — refreshed
- Chapter 00 introduction — minor update
- Free book pages (purchase-books.md, services-advert.md) — updated
- MX introduction chapter PDF — regenerated
- Book HTML and PDF outputs — rebuilt (handbook, protocols, chapter 00)

## The Insight

The Wix site was a perfect case study in what MX solves. The entire page was JavaScript-rendered — no content visible to any server-side agent. No Schema.org. No semantic HTML. No metadata for machines. The rebuilt version serves identical visual content to humans while being fully machine-readable from every angle. Same page, radically different machine experience.

## Decisions Made

- **Bookshop location:** `allaboutv2/mx/bookshop/` (publishes to allabout.network) rather than a standalone repo
- **Playwright approach:** System Chrome via `channel="chrome"` — saved to memory as a reusable pattern

## Commits

1. `4b1b3ee5` (allaboutv2) — Add MX Bookshop — book-sale website with full MX treatment
2. `70c5517e` (MX-hub) — Update allaboutv2 submodule — add MX Bookshop
3. `6d3ca158` (allaboutv2) — Update MX introduction chapter PDF
4. `d5ea967` (mx-outputs) — Update book HTML and PDF outputs
5. `32b98c9d` (MX-hub) — Update submodules and book manuscripts
