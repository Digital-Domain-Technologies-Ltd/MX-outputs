---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "schema"
version: 0.1.0
description: Validate and generate Schema.org structured data markup

created: 2026-02-06
modified: 2026-05-07

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: draft
  x-mx-riskLevel: medium
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/schema.cog.md

  x-mx-category: mx-core
  partOf: mx-core
  refersTo: [metadata, pricing, semantic-html]
  tags: [schema.org, json-ld, structured-data, seo, accessibility]


  dependencies: []
  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
  x-mx-convergence: true
  x-mx-accessibility: true
  quality:
    semantic: true

---

# schema

Validate and generate Schema.org structured data markup.

## Purpose

Schema.org markup helps both AI agents and search engines understand content. This cog validates existing markup and suggests improvements.

## Usage

### Validate

```bash
mx cog schema validate https://example.com
```

### Extract

```bash
mx cog schema extract https://example.com
```

### Suggest

```bash
mx cog schema suggest https://example.com
mx cog schema suggest "Article about Robot-First Web design principles"
```

## Related

- [Schema.org](https://schema.org)
- [Google Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool)
- [JSON-LD Playground](https://json-ld.org/playground/)
