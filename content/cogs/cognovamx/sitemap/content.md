---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "sitemap"
version: 0.1.0
description: Analyze sitemaps and compare with llms.txt coverage

created: 2026-02-06
modified: 2026-05-07

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: draft
  x-mx-riskLevel: medium
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/sitemap.cog.md

  x-mx-category: mx-core
  partOf: mx-core
  refersTo: [llms-txt, robots-txt, link-checker]
  tags: [sitemap, xml, seo, llms-txt, coverage]


  dependencies:
    - name: llms-txt
      kind: cog
    - name: robots-txt
      kind: cog
  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
  x-mx-convergence: true
  x-mx-accessibility: false
  quality:
    semantic: true

---

# sitemap

Analyze sitemaps and compare with llms.txt coverage.

## Purpose

Sitemaps tell search engines what pages exist. llms.txt tells AI agents what pages matter. This cog analyzes both to ensure comprehensive coverage.

A sitemap without llms.txt = search engines find you, AI doesn't understand you.
llms.txt without sitemap reference = AI understands you, but may miss pages.

## Usage

### Analyze

```bash
mx cog sitemap analyze https://example.com
mx cog sitemap analyze https://example.com/sitemap.xml
```

**Output:**

```json
{
  "url": "https://example.com/sitemap.xml",
  "type": "sitemapindex",
  "sitemaps": [
    {"url": "https://example.com/sitemap-posts.xml", "count": 150},
    {"url": "https://example.com/sitemap-pages.xml", "count": 25}
  ],
  "totalUrls": 175,
  "lastModified": "2026-02-01T10:00:00Z"
}
```

### Compare with llms.txt

```bash
mx cog sitemap compare https://example.com
```

**Output:**

```json
{
  "sitemap": {
    "totalUrls": 175,
    "categories": ["posts", "pages", "products"]
  },
  "llmsTxt": {
    "totalLinks": 12,
    "categories": ["docs", "blog", "about"]
  },
  "coverage": {
    "inBoth": 8,
    "sitemapOnly": 167,
    "llmsTxtOnly": 4
  },
  "gaps": [
    "Products not mentioned in llms.txt",
    "API docs in llms.txt but not in sitemap"
  ],
  "recommendation": "Add key product pages to llms.txt for AI visibility"
}
```

### Validate

```bash
mx cog sitemap validate https://example.com/sitemap.xml
```

**Output:**

```json
{
  "valid": true,
  "errors": [],
  "warnings": [
    "3 URLs return 404",
    "lastmod dates older than 1 year for 12 URLs"
  ]
}
```

### Freshness Check

```bash
mx cog sitemap freshness https://example.com
```

**Output:**

```json
{
  "sitemapLastModified": "2026-02-01T10:00:00Z",
  "urlFreshness": {
    "last24h": 5,
    "lastWeek": 23,
    "lastMonth": 45,
    "older": 102
  },
  "staleUrls": 15,
  "recommendation": "Update sitemap more frequently"
}
```

## Sitemap vs llms.txt

| Aspect | sitemap.xml | llms.txt |
|--------|-------------|----------|
| Audience | Search engines | AI agents |
| Purpose | Discovery | Understanding |
| Content | All URLs | Key URLs |
| Format | XML | Markdown |
| Metadata | lastmod, priority | Context, descriptions |

## Best Practice

1. **sitemap.xml** — List all indexable pages
2. **llms.txt** — Highlight key content with context
3. **Cross-reference** — Link sitemap from llms.txt
4. **Keep fresh** — Update both regularly

## Related

- [llms-txt cog](llms-txt.md)
- [robots-txt cog](robots-txt.md)
- [Sitemap Protocol](https://www.sitemaps.org/protocol.html)
