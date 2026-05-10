---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "robots-txt"
version: 0.1.0
description: Analyze robots.txt — understand the old exclusion model

created: 2026-02-06
modified: 2026-05-07

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: draft
  x-mx-riskLevel: medium
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/robots-txt.cog.md

  x-mx-category: mx-core
  partOf: mx-core
  refersTo: [llms-txt, sitemap]
  tags: [robots-txt, crawlers, exclusion, seo, llms-txt]


  dependencies:
    - name: llms-txt
      kind: cog
  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
  x-mx-convergence: true
  x-mx-accessibility: false
  quality:
    semantic: true

---

# robots-txt

Analyze robots.txt — understand the old exclusion model.

## Purpose

robots.txt is the "Do Not Enter" sign of the web. For 30 years, it's been a gentlemen's agreement between websites and crawlers.

But the AI era changes things:

- **robots.txt** = exclusion (don't crawl this)
- **llms.txt** = inclusion (here's how to understand us)

This cog analyzes robots.txt to understand a site's crawler policy, especially regarding AI agents.

## Usage

### Analyze

```bash
mx cog robots-txt analyze https://example.com
```

**Output:**

```json
{
  "url": "https://example.com/robots.txt",
  "userAgents": ["*", "Googlebot", "GPTBot"],
  "rules": [
    {"agent": "*", "allow": ["/"], "disallow": ["/private/"]},
    {"agent": "GPTBot", "disallow": ["/"]}
  ],
  "sitemaps": ["https://example.com/sitemap.xml"],
  "crawlDelay": null
}
```

### Check Path

```bash
mx cog robots-txt check https://example.com --path /blog --agent Googlebot
mx cog robots-txt check https://example.com --path /api --agent GPTBot
```

### Compare with llms.txt

```bash
mx cog robots-txt compare https://example.com
```

**Output:**

```json
{
  "robotsTxt": {
    "exists": true,
    "aiBlocked": ["GPTBot", "Claude-Web"],
    "aiAllowed": ["Googlebot"]
  },
  "llmsTxt": {
    "exists": true,
    "sections": 4,
    "links": 12
  },
  "analysis": "Site blocks AI crawlers but provides llms.txt guidance — selective AI engagement"
}
```

### AI Stance

```bash
mx cog robots-txt ai-stance https://example.com
```

**Output:**

```json
{
  "overall": "restrictive",
  "crawlers": {
    "GPTBot": "blocked",
    "Claude-Web": "blocked",
    "Google-Extended": "blocked",
    "Googlebot": "allowed",
    "Bingbot": "allowed"
  },
  "hasLlmsTxt": true,
  "interpretation": "Blocks training crawlers, allows search crawlers, provides llms.txt for direct AI queries"
}
```

## Known AI Crawlers

| Crawler | Company | Purpose |
|---------|---------|---------|
| GPTBot | OpenAI | Training & browsing |
| ChatGPT-User | OpenAI | ChatGPT browsing |
| Claude-Web | Anthropic | Claude browsing |
| Google-Extended | Google | Bard/Gemini training |
| Amazonbot | Amazon | Alexa training |
| CCBot | Common Crawl | Dataset building |
| FacebookBot | Meta | AI training |

## The Evolution

**1994-2020s:** robots.txt as binary permission

- Crawl or don't crawl
- Honor system
- Simple exclusion

**2024+:** Nuanced AI policies

- Block training, allow search
- Provide llms.txt for guidance
- Selective engagement

## Related

- [llms-txt cog](llms-txt.md)
- [sitemap cog](sitemap.md)
- [robots.txt specification](https://www.robotstxt.org/)
