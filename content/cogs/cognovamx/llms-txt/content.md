---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "llms-txt"
version: 0.1.0
description: Generate and validate llms.txt files for Robot-First Web compliance

created: 2026-02-06
modified: 2026-05-07

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: draft
  x-mx-riskLevel: medium
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/llms-txt.cog.md

  x-mx-category: mx-core
  partOf: mx-core
  refersTo: [robots-txt, sitemap, link-checker]
  tags: [llms-txt, robot-first, validation, generation]


  dependencies: []
  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
  x-mx-convergence: true
  x-mx-accessibility: true
  quality:
    semantic: true

---

# llms-txt

Generate and validate llms.txt files for the Robot-First Web.

## Purpose

Help websites become AI-ready by creating proper llms.txt files that guide AI agents to relevant content.

## Usage

### Generate

```bash
mx cog llms-txt generate https://example.com
```

### Validate

```bash
mx cog llms-txt validate https://example.com/llms.txt
mx cog llms-txt validate ./llms.txt
```

## Related

- [llms.txt specification](https://llmstxt.org)
- [Tom's llms.txt guide](https://allabout.network/blogs/ddt/creating-an-llms-txt)
- [Anthropic's llms.txt](https://www.anthropic.com/llms.txt)
