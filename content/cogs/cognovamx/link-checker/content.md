---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "link-checker"
version: 0.1.0
description: Validate links — critical for llms.txt and documentation

created: 2026-02-06
modified: 2026-05-07

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: draft
  x-mx-riskLevel: medium
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/link-checker.cog.md

  x-mx-category: mx-core
  partOf: mx-core
  refersTo: [llms-txt, sitemap]
  tags: [links, validation, broken-links, llms-txt, documentation]


  dependencies: []
  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
  x-mx-convergence: true
  x-mx-accessibility: true
  quality:
    semantic: true

---

# link-checker

Validate links — critical for llms.txt and documentation.

## Purpose

Broken links erode trust. For AI agents following llms.txt, a broken link means:

- Missing context
- Failed navigation
- Incomplete understanding
- Reduced confidence in the source

For humans, broken links mean frustration and abandonment.

**Keep your links alive.**

## Usage

### Check All Links

```bash
mx cog link-checker check https://example.com
mx cog link-checker check ./README.md
```

**Output:**

```json
{
  "total": 45,
  "valid": 42,
  "broken": 2,
  "redirects": 1,
  "links": [
    {"url": "https://example.com/page", "status": 200, "type": "internal"},
    {"url": "https://external.com/api", "status": 404, "type": "external"},
    {"url": "https://old.com/page", "status": 301, "redirect": "https://new.com/page"}
  ],
  "broken": [
    {"url": "https://external.com/api", "status": 404, "location": "line 45"},
    {"url": "/missing-page", "status": 404, "location": "line 78"}
  ]
}
```

### Check llms.txt

```bash
mx cog link-checker llms-txt https://example.com
```

**Output:**

```json
{
  "llmsTxtUrl": "https://example.com/llms.txt",
  "totalLinks": 12,
  "valid": 11,
  "broken": 1,
  "results": [
    {"url": "/docs", "status": 200, "section": "Documentation"},
    {"url": "/old-api", "status": 404, "section": "API Reference"}
  ],
  "recommendation": "Fix /old-api link in llms.txt — AI agents will fail to find API docs"
}
```

### Recursive Check

```bash
mx cog link-checker check https://example.com --recursive --depth 2
```

### Anchors Only

```bash
mx cog link-checker anchors https://example.com/docs
```

**Output:**

```json
{
  "totalAnchors": 23,
  "valid": 21,
  "broken": 2,
  "broken": [
    {"anchor": "#old-section", "location": "Table of contents"},
    {"anchor": "#typo-heading", "location": "Related links"}
  ]
}
```

## Status Codes

| Code | Meaning | Action |
|------|---------|--------|
| 200 | OK | None |
| 301 | Permanent redirect | Update link |
| 302 | Temporary redirect | Monitor |
| 403 | Forbidden | Check access |
| 404 | Not found | Fix or remove |
| 500 | Server error | Report issue |
| Timeout | No response | Check server |

## Why llms.txt Links Matter

When an AI agent reads your llms.txt:

1. Parses the markdown
2. Extracts links to key resources
3. Follows links to understand your site
4. **Hits 404** → Trust decreases
5. **Works** → Builds understanding

Every broken link in llms.txt is a failed handshake with AI.

## Best Practices

### Do

- Check links regularly (weekly/monthly)
- Set up monitoring for critical pages
- Use relative links for internal pages
- Implement proper redirects for moved content

### Don't

- Link to unstable external resources
- Ignore redirect chains
- Leave broken links in llms.txt
- Assume links stay valid forever

## Integration

Run link-checker before publishing:

```bash
# Pre-commit hook
mx cog link-checker check ./docs/ --recursive

# CI/CD pipeline
mx cog link-checker llms-txt https://staging.example.com
```

## Related

- [llms-txt cog](llms-txt.md)
- [sitemap cog](sitemap.md)
- [clarity cog](clarity.md)
