---
title: "Marriott.com — Machine-Experience Brief"
description: "What the MX Web Audit Suite could observe about www.marriott.com, and what the site refused to expose."
author: Tom Cranstoun
created: 2026-05-20
modified: 2026-05-20
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [humans, machines]
  tags: [audit, machine-experience, marriott, agent-access, mx]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-05-20/www.marriott.com/www-marriott-com-brief.md
  generate:
    output: mx-outputs/audit/2026-05-20/www.marriott.com/www-marriott-com-brief.pdf
---

# Marriott.com — Machine-Experience Brief

**Site audited:** `https://www.marriott.com`
**Audit date:** 2026-05-20
**Audit method:** MX Web Audit Suite (Phase 1 only; Phase 2 not applicable, see below).

## Headline

We attempted to audit www.marriott.com using the standard MX Web Audit Suite. The site declines to be interrogated. Every machine-readable path we tried, including general-purpose AI crawlers, plain HTTP requests, and a real browser session driven by Puppeteer, returned a 403 or rendered no content. We were unable to fetch a single page of HTML for analysis. The site is, for our purposes and for the AI agents we test on a client's behalf, machine-illegible.

That is, in its own right, the finding worth reporting. A site that closes its door to programmatic clients is making a deliberate choice about which audiences it is willing to be read by. This brief documents what we could see from the doorstep, and what the implications are for any agent acting on a user's behalf when it reaches for Marriott as a source.

## What we could observe (the origin layer)

Three artefacts on the site are reachable without a browser session: `robots.txt`, the sitemap reference, and the response code each user agent receives. Everything below comes from those.

### Agent access

We test the home origin against eight named clients. Marriott returns HTTP 403 to all of them.

| Client | Result |
| --- | --- |
| ClaudeBot (Anthropic) | 403 Forbidden |
| GPTBot (OpenAI) | 403 Forbidden |
| ChatGPT-User (OpenAI) | 403 Forbidden |
| PerplexityBot | 403 Forbidden |
| GoogleOther (Google AI) | 403 Forbidden |
| Google-Extended | 403 Forbidden |
| CCBot (Common Crawl) | 403 Forbidden |
| Plain HTTP (no user agent) | 403 Forbidden |

We also probed with a standard desktop Chrome user agent via curl: 403. We then drove a real Chrome session under Puppeteer (the same engine the audit suite uses for rendered-DOM analysis): blocked at the rendering layer, no usable HTML returned. The block is server-side fingerprinting, not user-agent string matching. A real human in a real browser will see Marriott; a machine acting on behalf of a human, in the same browser, will not.

### Robots and sitemap

`robots.txt` is reachable. It hard-blocks Baiduspider entirely. For every other client it allows the homepage and disallows a long list of search endpoints, including the URL the prompt initially cited (`/search/`). That URL was, on its own terms, a path the site asks crawlers not to read.

The robots file points crawlers at `https://www.marriott.com/sitemap-index.xml`. That endpoint returns 200 OK, but the entry-point sitemap is empty: zero URLs declared, no `lastmod`, no `changefreq`, no `priority`. The discovery layer is therefore present in form (a sitemap location is declared) and absent in substance (the declared location yields no URLs).

### AI-readability signposts

We checked the conventional locations a site uses to tell AI agents how it would like to be read. None are present:

| Signpost | Status |
| --- | --- |
| `/llms.txt` | 404 Not Found |
| `/llms-full.txt` | not present |
| `/.well-known/agent-card.json` | 503 Service Unavailable |
| `/security.txt`, `/humans.txt` | not present at standard paths |

The combination of "AI bots blocked at the edge" with "no llms.txt to read instead" is the strongest signal we test for. It means an agent has no path, sanctioned or otherwise, to reach Marriott's content programmatically. The site has not been left machine-readable by accident; it has been made machine-unreadable by choice.

### Platform fingerprint

The audit's platform detector returns no positive identification. The site does not expose a CMS signature, framework header, or generator meta tag that lets a reader place it on a known stack. What we do see is the behaviour of an edge security layer (Akamai-class or similar) consistent with a custom enterprise build sitting behind a managed bot-detection product. Marriott is choosing to invest in keeping non-browser clients out, rather than in helping them in.

## What the served HTML reveals (when a human reaches the page)

After this brief was first written we received a sample of the HTML Marriott serves to a real human in a real browser at the very URL the prompt cited. The bot block does not apply to a human session. The question this section answers is what a machine would have got if it could have made the same request. The answer is sharper than the bot block alone.

The page that comes back tells crawlers, on the server's own declaration, not to read it. The `<head>` carries `<meta name="robots" content="noindex,nofollow">`. The URL is, by Marriott's own choice, intended to exist only inside a human session.

The metadata an agent would normally use to summarise the page is declared and left empty:

| Slot | Value served |
| --- | --- |
| `og:title` | empty |
| `og:description` | empty |
| `og:image` | empty |
| `og:type` | empty |
| `og:site_name` | empty |
| `og:url` | empty |

The `<title>` is generic chain marketing ("Where Can We Take You? Endless Experiences & Top Locations | Marriott Bonvoy"). The `<meta name="description">` is generic ("Find the right destination that meets your travel interests"). The property the URL searched for, the "Eugenia de Montijo Autograph Collection", appears nowhere in the served HTML. The property data arrives later through about thirty deferred Next.js script chunks, hydrated client-side. An agent reading the raw HTML extracts nothing about the property the URL is supposed to be about.

Two further signals confirm what the bot block already implied. An inline script declares `const ak_sgnl = '3cfa7'`, which is Akamai's bot-manager fingerprint surfacing in the page itself; the 403 we hit at the edge is Akamai's product, not a vanilla origin policy. A separate script rewrites `document.referrer` via `Object.defineProperty` so that every analytics call sees the session as arriving from `https://www.bing.com/`. The brand is making deliberate measurement choices about what its own analytics record.

Machine-illegibility on this site is layered. The edge blocks the named AI clients. The page that does render is marked `noindex,nofollow`. The Open Graph block is empty. The actual content arrives only after client-side hydration. An agent that somehow held a valid session and reached the URL would still extract nothing about the property it was asked to find. The site is not just closed at the door; the room behind the door is empty of the data the agent came for.

## What we could not observe

Because no page rendered, every page-level dimension the MX Web Audit Suite measures is unavailable for this site. We have nothing to report on:

- Per-page performance, load time, FCP, CLS, or any Web Vitals metric.
- Accessibility findings, WCAG criterion counts, screen-reader-affecting issues.
- SEO scores, content-page quality bands, heading hierarchy.
- AI suitability of the served HTML versus the rendered DOM (no DOM to compare).
- Schema.org structured-data coverage, JSON-LD blocks, property gaps.
- Image counts, alt-text coverage, lazy-loading patterns.
- Security headers (CSP, HSTS, frame options) at the page level.
- Internal link graph, broken links, redirect chains.
- Metadata Stack Completeness, Structured Data Quality, Discovery Readiness, Agent Readability, Pipeline Survivability, the MX scorecards that name what a machine can do with a page.

In a normal audit each of these sections fills with data and recommendations. For Marriott they are absent because the data is absent, and the data is absent because the site refused to produce it.

## What it means

For a customer-facing brand of this scale, the machine-readable surface area is approximately what robots.txt declares and the empty sitemap implies. When a consumer asks an AI assistant where to stay in a given city, every other hotel on the comparison page hands the agent at least some structured information about itself: opening hours, locations, room types, amenities, prices. Marriott hands the agent a 403.

In practice the agent will fall back to whatever third-party sources have already scraped, cached, or reconstructed Marriott's catalogue: travel aggregators, review sites, search-engine summaries, model training cutoffs. The brand surrenders authorship of its own description to those sources. Where they are wrong, or out of date, or biased toward a competitor's listing, Marriott has no machine-readable channel by which to correct the record. Where new properties open, rates change, or a property is sold, the agent's answer can drift months out of step before the lag is noticed.

This is not a security posture. Bots that mean harm fingerprint themselves around the same defences this brief describes. The block is most effective against the ones that announce themselves honestly: the named AI clients of OpenAI, Anthropic, Perplexity, Google, and Common Crawl. The site is investing in keeping those out, and accepting whatever consequence that choice has on the share of voice it holds in agent-mediated conversations.

## What we would recommend if Marriott were our client

Three things, in priority order, all of which are recoverable from the current posture without compromising the security choices that drive it.

First, publish an `llms.txt` and an `/.well-known/agent-card.json`. These do not require unblocking any crawler. They tell agents which content the brand consents to be cited, in which form, and where the canonical machine-readable description of each property can be fetched. The cost is a static file; the benefit is becoming the source for agent-mediated answers about Marriott properties rather than the absence in them.

Second, populate the sitemap. A declared sitemap that resolves to zero URLs is worse than no sitemap at all: it tells every well-behaved client that the site has no content to offer. Marriott has tens of thousands of property pages; not one of them is machine-discoverable through the declared entry point today.

Third, choose a posture for AI agents that matches the brand's commercial intent. If Marriott wishes to be cited by AI assistants when consumers ask where to stay, the named AI clients need a path: either a relaxed origin policy for their published user agents, or a dedicated structured-data endpoint they can read without rendering the full marketing site. If Marriott wishes not to be cited, the current posture is consistent and durable, but the consequences described above are the price of that choice. The current state is the worst of both: blocked at the door, with no signpost telling an agent where else to go.

## How this brief fits the audit suite

The MX Web Audit Suite has two phases. Phase 1 captures the origin layer: agent-access tests, robots and sitemap discovery, well-known files, platform fingerprint, error-page behaviour. Phase 2 renders each page and measures per-page quality. For Marriott, Phase 1 ran to completion and produced the data this brief draws on. Phase 2 returned zero usable pages.

The standard report template assumes Phase 2 data is present. Where it is not, the report should branch into the shape of this brief: a clean origin-layer narrative ending in a recommendation set, with the page-level sections suppressed rather than left empty. We have logged this branching requirement back into the audit pipeline; the next site of this class will produce a report of this shape automatically.

## Further Reading

Every book appendix cited in this brief, plus the book itself. Click the link on screen or scan the QR code on paper: both encode the same URL.

| Scan | Link and description |
| :----: | -------------------- |
| ![Appendix R QR](assets/qr/appendix-r.png){ width=15mm } | **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)**: the methodology behind Pipeline Survivability and the rest of the MX scorecards referenced in this brief.\ <https://mx.allabout.network/books/appendices/appendix-r.html> |
| ![Appendix S QR](assets/qr/appendix-s.png){ width=15mm } | **[MX: The Protocols Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**: the catalogue of reading-resilience checks the audit suite runs against any site that lets us in.\ <https://mx.allabout.network/books/appendices/appendix-s.html> |
| ![Appendix M QR](assets/qr/appendix-m.png){ width=15mm } | **[MX: The Protocols Appendix M: Index of Metadata](https://mx.allabout.network/books/appendices/appendix-m.html)**: the field dictionary an `llms.txt` or `agent-card.json` draws from when a site chooses to be machine-readable.\ <https://mx.allabout.network/books/appendices/appendix-m.html> |
| ![llms.txt guide QR](assets/qr/llms-txt-guide.png){ width=15mm } | **[Why llms.txt Probably Isn't Working: And What to Do About It](https://mx.allabout.network/blog/llms-txt-guide.html)**: a guide to the two structural problems most `llms.txt` files have, written for the case where a site already has one.\ <https://mx.allabout.network/blog/llms-txt-guide.html> |
| ![Books index QR](assets/qr/books-index.png){ width=15mm } | **[Get the books](https://mx.allabout.network/books/)**: MX: The Intro (free), MX: The Handbook, and MX: The Protocols. The full reference for every concept this brief draws on.\ <https://mx.allabout.network/books/> |

---

*The MX Web Audit Suite is built and operated by CogNovaMX, a trading name of Digital Domain Technologies Ltd. Findings in this brief are mechanically derived from observation; the recommendations are written by a human consultant.*
