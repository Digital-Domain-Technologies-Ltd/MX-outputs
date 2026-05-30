---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "metadata"
version: 0.1.0
description: Extract and validate page metadata (Open Graph, Twitter Cards, meta tags)

created: 2026-02-06
modified: 2026-05-07

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: draft
  x-mx-riskLevel: medium
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/metadata.cog.md

  x-mx-category: mx-core
  partOf: mx-core
  refersTo: [schema, semantic-html]
  tags: [metadata, opengraph, twitter-cards, seo, social]


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

# metadata

Extract and validate page metadata (Open Graph, Twitter Cards, meta tags).

## Purpose

Metadata tells machines about your content before they read it. Good metadata means:

- **AI agents** understand context immediately
- **Social platforms** display rich previews
- **Search engines** show accurate snippets
- **Screen readers** announce meaningful titles

Poor metadata = AI guessing, broken previews, missed context.

## Usage

### Extract

```bash
mx cog metadata extract https://example.com/article
```

**Output:**

```json
{
  "basic": {
    "title": "How to Build for the Robot-First Web",
    "description": "A guide to making your website AI-ready",
    "author": "Tom Cranstoun",
    "canonical": "https://example.com/article"
  },
  "openGraph": {
    "og:title": "How to Build for the Robot-First Web",
    "og:description": "A guide to making your website AI-ready",
    "og:image": "https://example.com/images/robot-web.jpg",
    "og:type": "article",
    "og:url": "https://example.com/article"
  },
  "twitter": {
    "twitter:card": "summary_large_image",
    "twitter:title": "How to Build for the Robot-First Web",
    "twitter:description": "A guide to making your website AI-ready",
    "twitter:image": "https://example.com/images/robot-web.jpg"
  },
  "schema": {
    "@type": "Article",
    "headline": "How to Build for the Robot-First Web",
    "author": {"@type": "Person", "name": "Tom Cranstoun"}
  }
}
```

### Validate

```bash
mx cog metadata validate https://example.com/article
```

**Output:**

```json
{
  "score": 85,
  "missing": [
    "og:locale",
    "twitter:creator",
    "article:published_time"
  ],
  "invalid": [],
  "warnings": [
    "og:image smaller than recommended (1200x630)",
    "description longer than 160 characters"
  ]
}
```

### Social Preview

```bash
mx cog metadata preview https://example.com/article
mx cog metadata preview https://example.com/article --platform twitter
```

### Suggest Improvements

```bash
mx cog metadata suggest https://example.com/article
```

## Required Metadata

### Minimum (All Pages)

```html
<title>Page Title</title>
<meta name="description" content="Page description">
<link rel="canonical" href="https://example.com/page">
```

### Open Graph (Social Sharing)

```html
<meta property="og:title" content="Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="website">
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Title">
<meta name="twitter:description" content="Description">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

## Image Requirements

| Platform | Minimum | Recommended | Aspect |
|----------|---------|-------------|--------|
| Open Graph | 200x200 | 1200x630 | 1.91:1 |
| Twitter | 144x144 | 1200x628 | ~2:1 |
| LinkedIn | 1200x627 | 1200x627 | 1.91:1 |

## Related

- [schema cog](schema.md)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards)
