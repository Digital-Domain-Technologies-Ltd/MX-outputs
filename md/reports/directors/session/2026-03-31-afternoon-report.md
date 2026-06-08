---
title: "Co-Directors Report — Remove Prices and Timescales from CogNovaMX Pages"
created: "2026-03-31"
x-mx-segment: "afternoon"
version: "1.0"
author: Tom Cranstoun
audience: business
confidential: true

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-31-afternoon-report.md
  purpose: "Co-Directors Report - Remove Prices and Timescales from CogNovaMX Pages"
  audience: [humans, machines]
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Remove Prices and Timescales from CogNovaMX Pages"]
---

# Remove Prices and Timescales from CogNovaMX Pages

A focused session: strip all specific prices, dollar/pound amounts, and week/day timescales from the CogNovaMX website pages. Everything is negotiable — the pages should not anchor expectations.

## By the Numbers

- **2 commits** across 2 repositories (MX-hub, allaboutv2)
- **3 HTML files** modified
- **44 lines removed**, 32 lines added (net reduction)

## What Was Done

### Prices and Timescales Removed

Three CogNovaMX website pages contained hard-coded prices and timescales that anchored client expectations before any conversation:

**benefits-of-mx.html:**

- Removed "$50,000-$300,000" investment range and specific ROI dollar amounts ($100k-$500k SEO, $75k-$400k conversions, $25k-$100k savings)
- Removed "40-60% increase... within 6 months" — replaced with "Significant increase... after implementing"
- Removed "Payback period: 6-12 months"
- Changed month-based timeline ("Month 1-3", "Month 4-6") to phase-based progression

**our-services.html:**

- Removed all week/day timescales from service descriptions: "2-3 weeks", "3-5 weeks", "2-4 weeks", "8-12 weeks", "1 day", "3 days", "30 days"
- Removed entire pricing table ($15k–$500k+ across six service lines)
- Replaced "Pricing & Timeline" section with "Investment" — states everything is negotiable
- Replaced "10-20 hours/month" advisory commitment with "Flexible advisory time"

**contact.html:**

- Replaced £ budget dropdown (£20k–£250k+ ranges) with intent-based options: "Exploring options", "Have budget allocated", "Need help building business case"
- Added "everything is negotiable" to the field label

### What Was Kept

Illustrative examples that teach MX concepts were left untouched — the river cruise £203,000 misread, hotel €150 agent query, headphones $200 shopping scenario, and code snippets showing `itemprop="price"`. These demonstrate why MX matters, not what CogNovaMX charges.

## Rationale

Tom's direction: everything is negotiable. Hard-coded prices risk anchoring conversations before understanding scope. Hard-coded timescales set expectations that depend entirely on the client's website, team, and readiness. The pages now invite conversation rather than pre-qualifying on price.

## Commits

1. `bfbdfb6d` (allaboutv2) — Remove prices and timescales from CogNovaMX service pages
2. `87ff9618` (MX-hub) — Update allaboutv2 submodule pointer
