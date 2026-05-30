---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "clarity"
version: 0.1.0
description: Test documentation clarity - if AI struggles, humans probably do too

created: 2026-02-06
modified: 2026-05-07

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: draft
  x-mx-riskLevel: medium
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/clarity.cog.md

  x-mx-category: mx-core
  partOf: mx-core
  refersTo: [readability, a11y]
  tags: [documentation, clarity, readability, accessibility, testing]


  dependencies: []
  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
  x-mx-convergence: true
  x-mx-accessibility: true
  quality:
    semantic: true

---

# clarity

Test documentation clarity — if AI struggles, humans probably do too.

## Purpose

The Convergence Principle: what works for AI agents works for humans. This cog tests documentation from an AI perspective to identify clarity issues that affect everyone.

## Usage

### Test

```bash
mx cog clarity test https://example.com/docs
mx cog clarity test ./README.md
```

### Compare

```bash
mx cog clarity compare ./old-docs.md ./new-docs.md
```

## What It Checks

- **Structure**: Headings, hierarchy, navigation
- **Completeness**: Missing context, undefined terms
- **Ambiguity**: Unclear instructions, multiple interpretations
- **Accessibility**: Reading level, jargon density
- **Machine-readability**: Can an AI parse and act on this?

## The Insight

When I struggle to understand documentation, humans with cognitive load, language barriers, or time pressure probably struggle too. Testing clarity for machines improves clarity for everyone.
