---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "pricing"
version: 0.1.0
description: Validate pricing data to catch range errors and formatting issues

created: 2026-02-06
modified: 2026-05-07

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: draft
  x-mx-riskLevel: medium
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/pricing.cog.md

  x-mx-category: mx-core
  partOf: mx-core
  refersTo: [schema]
  tags: [pricing, validation, range-check, formatting, trust]


  dependencies:
    - name: schema
      kind: cog
  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
  x-mx-convergence: true
  x-mx-accessibility: true
  quality:
    semantic: true

---

# pricing

Validate pricing data to catch range errors and formatting issues.

## Purpose

Catch the £200,000 errors before they erode trust. AI agents can misparse European number formatting, missing decimal points, or prices without proper Schema.org markup.

## The Problem

Tom's example: AI researching river cruises returned prices £200,000+ per person. Actual prices: £2,000-£4,000.

**Root causes:**

- European number formatting (1.000,00 vs 1,000.00)
- Missing range validation
- No structured pricing data (Schema.org)
- Delivered with same confidence as verified information

**Result:** Trust erosion through small, plausible errors delivered authoritatively.

## Usage

### Validate

```bash
mx cog pricing validate https://example.com/products
mx cog pricing validate ./prices.json --currency GBP --range '{"min": 100, "max": 10000}'
```

### Extract

```bash
mx cog pricing extract https://example.com/products
```

## What It Checks

- **Format consistency**: Decimal/thousand separators
- **Currency detection**: Symbol, code, positioning
- **Range plausibility**: Flag outliers based on context
- **Schema.org**: Proper Offer/PriceSpecification markup
- **Comparison**: Cross-reference multiple sources

## Related

- [Schema.org Offer](https://schema.org/Offer)
- [Schema.org PriceSpecification](https://schema.org/PriceSpecification)
