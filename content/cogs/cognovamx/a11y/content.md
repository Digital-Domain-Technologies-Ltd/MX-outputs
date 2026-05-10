---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "a11y"
version: 0.1.0
description: Accessibility audit — what breaks for AI breaks for humans

created: 2026-02-06
modified: 2026-05-07

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: draft
  x-mx-riskLevel: medium
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/a11y.cog.md

  x-mx-category: mx-core
  partOf: mx-core
  refersTo: [semantic-html, toast-detector, clarity]
  tags: [accessibility, wcag, aria, convergence, audit]


  dependencies:
    - name: semantic-html
      kind: cog
  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
  x-mx-convergence: true
  x-mx-accessibility: true
  quality:
    semantic: true

---

# a11y

Accessibility audit — what breaks for AI breaks for humans.

## Purpose

The Convergence Principle: accessibility issues and machine-readability issues are the same issues viewed from different angles. This cog audits websites for both simultaneously.

When an AI agent can't parse a page, a screen reader user probably can't either. When a form lacks labels, both machines and blind users are lost.

## Usage

### Full Audit

```bash
mx cog a11y audit https://example.com
mx cog a11y audit https://example.com --level AAA
```

### Quick Check

```bash
mx cog a11y check https://example.com --issue images
mx cog a11y check https://example.com --issue forms
mx cog a11y check https://example.com --issue headings
mx cog a11y check https://example.com --issue contrast
mx cog a11y check https://example.com --issue aria
```

### Convergence Comparison

```bash
mx cog a11y compare https://example.com
```

Shows side-by-side: what breaks for accessibility vs what breaks for AI agents.

## What It Checks

### Images

- Missing alt text
- Decorative images not marked
- Complex images without long descriptions

### Forms

- Missing labels
- Missing fieldsets/legends
- No error identification

### Headings

- Skipped heading levels
- Missing h1
- Multiple h1s

### Contrast

- Text contrast ratios
- Focus indicators
- Link differentiation

### ARIA

- Invalid ARIA attributes
- Missing required attributes
- Conflicting roles

## The Convergence Insight

| A11y Issue | MX Impact |
|------------|-----------|
| Missing alt text | AI can't understand images |
| No form labels | AI can't fill forms |
| Skipped headings | AI can't parse structure |
| Low contrast | N/A (visual only) |
| Missing ARIA | AI can't understand state |

Most issues affect both. That's the Convergence Principle.

## Related

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [semantic-html cog](semantic-html.md)
- [The Convergence Principle](../../docs/convergence.md)
