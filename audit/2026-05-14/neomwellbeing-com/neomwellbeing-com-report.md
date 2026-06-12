---
title: "Neomwellbeing: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-14"
modified: "2026-05-14"
client: "Neomwellbeing"
clientSlug: "neomwellbeing-com"
clientUrl: "https://neomwellbeing.com"
reportId: "neomwellbeing-com-WEB-AUDIT-20260514"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-14"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Neomwellbeing"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 35
accessibilityScore: 9
seoScore: 83
llmSuitabilityScore: 19
totalIssues: 316
pagesAudited: 10
version: "1.0"
confidential: true
mx:
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-05-14/neomwellbeing-com/neomwellbeing-com-report.pdf"
    description: "Generate PDF audit report for neomwellbeing-com"
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Neomwellbeing covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Neomwellbeing", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Neomwellbeing. Focus on the highest-leverage MX opportunities surfaced by the audit."
---

# Neomwellbeing: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 14 May 2026\
**Report ID:** neomwellbeing-com-WEB-AUDIT-20260514

---

## About This Report

This report covers 10 pages audited across neomwellbeing.com's site using the Web Audit Suite. Each page is analysed across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

Every page is fetched twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

Automated findings are reviewed by a human consultant before the report is finalised. The automated pass identifies what is present or absent; the human review reads that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns that appear repeatedly across sites on the same platform get noted as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, the audit updates what it looks for.

The scoring criteria follow published MX standards and proposed specifications maintained at [`https://tg.community`](https://tg.community). Where established external standards apply — WCAG 2.1, Schema.org, RFC 9309, W3C — those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What this audit covers — and what MX covers.** This audit checks the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes — PDFs, data feeds, API responses, structured documents, presentations — and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. Our recommendation diverges from the specification — we recommend serving llms.txt as `text/html`, wrapping the raw text in a minimal HTML document with the content inside a `<pre>` block and returning `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, the report notes the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **35**/100 | `#########----------------` **(!)** |
| Accessibility | **9**/100 | `##-----------------------` **(!)** |
| SEO | **83**/100 | `#####################----` |
| Machine Suitability | **19**/100 | `#####--------------------` **(!)** |
| MX Stack | **51**/100 | `#############------------` |
| Agent Readability | **64**/100 | `################---------` |
| Pipeline Survivability | **74**/100 | `###################------` |

Neomwellbeing has built something genuinely worth visiting. Across the audited set, we found a well-constructed human experience: the SEO foundations are solid, scoring 83/100, and the site clearly communicates its brand, its products, and its purpose to the people who land on it. That is no small achievement across a catalogue of 910 pages, and it reflects disciplined content and structural thinking that gives us a strong base to build from.

Before we turn to machine readiness, we want to name accessibility as a Priority 1 compliance item. We identified 316 critical WCAG AA issues across the audited set — and the good news is that 190 of those trace back to just 20 recurring template patterns, meaning a single theme-level edit per pattern resolves all instances in one move. This is the most pressing item on the roadmap, both because it is the right thing to do for every visitor and because WCAG AA conformance carries legal weight in an increasing number of markets. Addressing it is both an ethical and a commercial imperative. The headline opportunity beyond compliance, however, sits squarely in machine readiness: a Discovery Readiness score of 26/100 and an AI Suitability score of 19/100 tell us that the machines — the search crawlers, AI agents, and automated bots that increasingly mediate how products are found and recommended — are not yet reading Neomwellbeing with anything close to the clarity that human visitors enjoy. Structured Data Quality at 74/100 is a meaningful asset, and it points to exactly where we should focus next.

The groundwork is there. Shopify's rendering environment means that some content may not be fully visible to machines that do not execute JavaScript, making Schema.org JSON-LD the highest-leverage investment available — it is readable by every agent regardless of how the page is rendered, and it sits alongside an already-healthy structured data foundation. Closing the distance between the human experience and the machine experience is the natural next chapter for Neomwellbeing, and the sections that follow map out precisely how to do it.

> 

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, Neomwellbeing delivers strong SEO performance and solid load speeds, with accessibility representing the clearest opportunity for improvement.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Good | B |
| Accessibility (WCAG) | Needs Improvement | D |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can partially identify and process Neomwellbeing's content — structured data and pipeline survivability both reach 74/100, meaning structured signals survive transit reliably — yet Discovery Readiness at 26/100 and Metadata Stack Completeness at 51/100 indicate that machines currently have limited means to fully locate, classify, and contextualise those pages without additional signalling.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 26/100 | Needs Improvement | D |
| Structured Data Quality | 74/100 | Good | B |
| MX Stack Completeness | 51/100 | Could Be Better | C |
| Pipeline Survivability | 74/100 | Excellent | A |

---

## MX Readiness Level

|  | Level | Name | Publisher Capability | Agent Outcome |  |
|---|-------|------|---------------------|---------------|---|
|  | 0 | Not Ready | Auto-generated boilerplate | Agents guess, hallucinate |  |
| **→** | 1 | Basic | Deliberate metadata, publisher identified | Agents can discover | **←** |
|  | 2 | Structured | Full MX fields, governance | Agents can cite and attribute |  |
|  | 3 | Signed | Cryptographic verification | Agents can compare and recommend |  |
|  | 4 | Registered | Registry, SLA, aliveness | Agents can transact |  |
|  | 5 | Audited | Third-party verified | Agents can guarantee accuracy |  |

**Current Level:** 1 — Basic

**Evidence:** MSC 51/100 | SDQ 74/100 | Discovery 26/100 | Consistency 100%

**To reach the next level:** Add full MX fields and governance metadata. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, Neomwellbeing has built a solid foundation — one that machines and humans alike can recognise and build upon. The scores and patterns we found across the ten audited pages give us a clear, confident platform from which the improvements ahead will carry real weight.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Good | Good — 3318ms average load time |
| SEO (content pages) | 83 | Excellent — titles, meta descriptions, canonical URLs in place |
| Security | 5/5 | HTTPS, HSTS, CSP, X-Frame-Options, X-Content-Type-Options on every audited URL |
| Structured Data | 74 | Good — JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 59 | Good — single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 100% | 100% — same metadata patterns across every page |
| Agent access | 6/6 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- Security headers are in place on every page — HTTPS, HSTS, Content-Security-Policy, X-Frame-Options, and X-Content-Type-Options on 12 of 12 audited pages.
- Commerce schema is present on every product page — 6 of 6 product pages carry both Product and Offer entities.
- All 8 tested AI agents can fetch the site — ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Cross-page consistency is complete — every audited page carries the same metadata pattern, confirming uniform implementation across the 10-page audit set.
- JSON-LD is present in the served HTML of every page — every agent that fetches the raw HTML gets the structured data.

---

## Findings

### At a Glance

The findings below are prioritised by downstream impact: discovery readiness leads because gaps there constrain how effectively machines can locate, interpret, and act on the content across the audited set, before any other signals come into play. Catalogue visibility and metadata stack completeness follow, with structured data quality — scoring 74/100 — representing the strongest foundation to build from.

## At-a-Glance Findings

| # | Finding | Priority | Effort | Impact |
|---|---------|----------|--------|--------|
| 1 | Accessibility 9/100 — WCAG 4.1.1: Duplicate `id="quantity"` (56 instances, 9 pages) | High | Medium | Assistive tech users may miss or misread form controls that share a non-unique identifier |
| 2 | Accessibility 9/100 — WCAG 4.1.1: Duplicate `id="mini-cart"` (9 instances, 9 pages) | High | Medium | Assistive tech users may miss or misread cart controls that share a non-unique identifier |
| 3 | Accessibility 9/100 — WCAG 3.2.2: Header form missing submit button (9 instances, 9 pages) | High | Low | Keyboard-only users may be unable to submit the header search form |
| 4 | Accessibility 9/100 — WCAG 3.2.2: Predictive search form missing submit button (9 instances, 9 pages) | High | Low | Keyboard-only users may be unable to submit the predictive search form |
| 5 | Accessibility 9/100 — WCAG 1.3.1: Empty heading tag in redirection popup (9 instances, 9 pages) | High | Low | Screen reader users may encounter a confusing, content-free heading announcement |
| 6 | Discovery Readiness 26/100 — Served HTML score 19/100; metadata stack 51/100 | High | High | Machines indexing served HTML are less likely to read complete page metadata |
| 7 | Semantic Structure — Div Soup 20/100: 573 bare divs out of 867 total elements | Medium | High | Machines and assistive tech users may miss content hierarchy due to absent semantic landmarks |

---

**Priority 1: WCAG 4.1.1 — Duplicate id="quantity" (56 instances, 9 pages)**

**Finding:** Across the audited set, the id value `quantity` appears 56 times across 9 pages. WCAG 4.1.1 requires that id attributes are unique within a document; duplication breaks the programmatic contract that assistive technologies rely on to associate labels, descriptions, and controls.

**What to change and why:**

- Ensure every quantity input in the page receives a unique id value (for example, scoped to the product or variant context). This resolves all 56 WCAG 4.1.1 instances and restores correct label-to-control association for screen readers and other assistive tech, moving the Accessibility score away from 9/100.
- Because 190 of the 316 total issues trace to 20 recurring template-level patterns, addressing this id in the shared template component resolves all affected instances across the audited set in a single edit rather than page-by-page intervention.
- Unique ids also allow machines that parse structured form data to correctly identify and index interactive elements, supporting Discovery Readiness improvement.

**Effort:** Medium

---

**Priority 2: WCAG 4.1.1 — Duplicate id="mini-cart" (9 instances, 9 pages)**

**Finding:** The id value `mini-cart` is repeated 9 times across 9 pages in the audited set, again violating WCAG 4.1.1. Where the same id appears more than once, assistive technologies typically reference only the first occurrence, leaving subsequent instances programmatically invisible.

**What to change and why:**

- Assign a unique id to each mini-cart region instance so that assistive technologies can resolve a single, unambiguous target. This directly addresses the WCAG 4.1.1 violation and reduces the risk that cart controls are missed by screen reader users.
- As with Priority 1, this pattern originates in a shared template component; a single theme-level edit resolves all 9 instances across the audited set and contributes to reducing the total 316-issue count.
- Unique landmark ids also allow machines parsing page structure to distinguish cart interaction zones from other page regions, which has a secondary benefit for Discovery Readiness.

**Effort:** Medium

---

**Priority 3: WCAG 3.2.2 — Header Form Missing Submit Button (9 instances, 9 pages)**

**Finding:** The header form (selector: `#shopify-section-header > div:nth-child(1) > div:nth-child(1…`) lacks a submit button across all 9 pages in the audited set. WCAG 3.2.2 requires that forms are operable via keyboard; without a recognisable submit control, keyboard-only users risk being unable to complete the interaction.

**What to change and why:**

- Add a submit button to the header form so that keyboard users can activate it without relying on JavaScript event bindings or Enter-key assumptions. This resolves the WCAG 3.2.2 violation and removes a genuine barrier for users who cannot use a pointer device.
- A visible or visually-hidden (but focusable) submit control also signals form intent unambiguously to machines that parse interactive elements, supporting the Discovery Readiness score.
- Because this appears on 9 of the 10 audited pages and originates in a shared template, a single component edit addresses all instances across the audited set.

**Effort:** Low

---

**Priority 4: WCAG 3.2.2 — Predictive Search Form Missing Submit Button (9 instances, 9 pages)**

**Finding:** A second form (selector: `html > body > div:nth-child(5) > div:nth-child(3) > predicti…`) also lacks a submit button across 9 pages, generating a parallel WCAG 3.2.2 violation. This is a separate component from the header form and must be addressed independently.

**What to change and why:**

- Add a submit button to the predictive search form for the same reasons as Priority 3: keyboard operability is a WCAG 3.2.2 requirement, and its absence risks excluding users who cannot submit via pointer.
- Resolving both form issues together moves the Accessibility score meaningfully from 9/100 and reduces the 316-issue total, given these patterns each affect 9 of the 10 audited pages.
- Machines that evaluate page interactivity for indexing purposes are less likely to correctly classify a form without a clear submission control, which has a minor but measurable bearing on Discovery Readiness.

**Effort:** Low

---

**Priority 5: WCAG 1.3.1 — Empty Heading Tag in Redirection Popup (9 instances, 9 pages)**

**Finding:** A heading element within the redirection popup (selector: `#shopify-section-sections--25230890140031__redirection_popup…`) contains no text content across 9 pages. WCAG 1.3.1 requires that programmatic structure conveys meaning; an empty heading announced by a screen reader provides no navigational information and may disorient users traversing the page by heading.

**What to change and why:**

- Either populate the heading with meaningful text that describes the popup's purpose, or replace the heading tag with a semantically neutral element if no heading is intended. This resolves the WCAG 1.3.1 violation and removes a confusing announcement for screen reader users.
- Heading quality is already scored at 59/100 across the audited set; eliminating empty headings is a direct lever for improving that metric.
- Well-structured headings also help machines build an accurate content outline of the page, contributing incrementally to Discovery Readiness.

**Effort:** Low

---

**Priority 6: Discovery Readiness 26/100 — Served HTML 19/100, Metadata Stack 51/100**

**Finding:** Discovery Readiness scores 26/100 across the audited set — a "Needs Improvement" band. The served HTML score of 19/100 means that machines reading the pre-render response encounter a sparse document, and the Metadata Stack Completeness of 51/100 indicates that a significant portion of the signals machines use to understand, classify, and surface content are absent or incomplete.

**What to change and why:**

- Improve the completeness of the metadata stack (currently 51/100) by ensuring that Open Graph, canonical, and descriptive meta fields are fully populated on every audited page. Richer metadata gives machines the context needed to classify and present content accurately in search and AI-driven surfaces.
- Investigate what content is present in the served HTML (19/100) versus what requires rendering, and consider whether critical metadata and structured signals can be moved into the served response. Machines that do not execute JavaScript risk missing content that only exists post-render; improving served-HTML completeness reduces that risk and directly targets the 26/100 Discovery Readiness score.
- The Pipeline Survivability score of 74/100 provides a partial buffer, but the low served-HTML score means that machines operating in low-fidelity modes — common among cost-constrained crawlers — are less likely to extract a complete picture of the page.

**Effort:** High

---

**Priority 7: Semantic Structure — Div Soup 20/100 (573 bare divs out of 867 total elements)**

**Finding:** Across the audited set, 573 of 867 total elements are bare divs, yielding a Semantic Structure score of 20/100. At this ratio, the document outline that both assistive technologies and machines depend on to navigate content is largely absent, replaced by undifferentiated container elements.

**What to change and why:**

- Replace structurally meaningful div containers with appropriate semantic elements (such as those conveying navigation, main content, article, section, or complementary roles) so that assistive technologies can offer users meaningful landmark navigation. This directly addresses the low 20/100 Semantic Structure score and supports screen reader users who navigate by landmark.
- Improved semantic structure gives machines a clearer content hierarchy to parse, reducing the risk that key content is mis-classified or overlooked — a secondary benefit for the Discovery Readiness score of 26/100.
- Given that 190 of the 316 accessibility issues trace to 20 template-level patterns, semantic structure improvements made at the template level will propagate broadly across the audited set and reduce the overall issue count more efficiently than page-by-page edits.

**Effort:** High

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen the site's machine readiness.

- **Organization with `sameAs`** — adding a `sameAs` property linking the Neomwellbeing organisation entity to its verified profiles (such as Wikidata or LinkedIn) gives machines a stable, cross-platform identity anchor, reducing ambiguity when they attempt to reconcile brand mentions across the web.

- **`AggregateRating` on product or service entities** — once foundational JSON-LD is in place, attaching aggregate rating data to any product or service pages allows machines to surface credibility signals directly in rich results and knowledge panels without requiring further human intervention.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in `robots.txt` — declaring a content-use policy here gives machines an unambiguous, machine-readable signal about how Neomwellbeing's content may be used, reducing the risk of unintended ingestion by AI training pipelines.

---

## AI Agent Access Test

This test fetches the homepage using the User-Agent strings of known AI agents to verify whether the site is accessible at inference time.

| AI Agent | User-Agent | Status | Result |
|----------|-----------|--------|--------|
| ClaudeBot (Anthropic) | `ClaudeBot/1.0` | 200 | Accessible |
| GPTBot (OpenAI) | `GPTBot/1.0` | 200 | Accessible |
| ChatGPT-User (OpenAI) | `ChatGPT-User/1.0` | 200 | Accessible |
| PerplexityBot | `PerplexityBot/1.0` | 200 | Accessible |
| GoogleOther (Google AI) | `GoogleOther` | 200 | Accessible |
| Google-Extended (Google AI-training opt-out) | `Google-Extended` | 200 | Accessible |
| CCBot (Common Crawl) | `CCBot/2.0` | 200 | Accessible |
| Plain request (no UA) | *(empty)* | 200 | Accessible |

**Summary:** All 8 tested agents can access the site. No bot protection blocks AI agents at inference time.

### Markdown Content Negotiation

| Check | Result |
|-------|--------|
| URL probed | https://neomwellbeing.com |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No — server returned HTML regardless of Accept header |

### Non-Standard Response Headers

No non-standard response headers were recorded in this audit.

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how the site handles errors for both human visitors and machines.

| Check | Result |
|-------|--------|
| HTTP status code | 404 (correct) |
| Custom error page | Yes — custom error page |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | Yes |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | Yes |
| Internal navigation links | 178 — links to same-site pages |
| MX governance tags | Not present |
| Schema.org JSON-LD | Absent — add noindex to error page |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page — a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://neomwellbeing.com/collections/body-wash`. A first-time visitor sees the cold-cache cost: the crawler recorded 5447 ms on its initial fetch — **first-visit verdict: Slow — investigate origin**. Three cache-busted re-probes that followed returned 819ms, 684ms, 136ms, giving a returning-visitor median of **684 ms** — **returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://neomwellbeing.com/products/complete-bliss-standard-scented-candle`. A first-time visitor sees the cold-cache cost: the crawler recorded 2909 ms on its initial fetch — **first-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 1311ms, 137ms, 180ms, giving a returning-visitor median of **180 ms** — **returning-visitor verdict: Healthy**.

**Verdict:** The slowest page returned slowly on its first cold-cache visit but is served acceptably under cache-busted re-probes — first-time visitors carry a cold-origin cost that the returning-visitor median hides.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /a/downloads/-/*
Disallow: /admin
Disallow: /cart
Disallow: /orders
Disallow: /checkouts/
Disallow: /checkout
Disallow: /2825683008/checkouts
Disallow: /2825683008/orders
```

*Showing the first 10 lines of `robots.txt` — the full 164-line file is preserved alongside this report as `neomwellbeing-com-robots-txt.txt`.*

The robots.txt file is present and references three sitemaps, giving machines a clear entry point to the site's indexed content. It carries 146 disallow paths, which suggests a deliberate effort to shape crawl scope by steering machines away from a substantial portion of the directory structure.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 910 entries | Fewer than crawl found |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | No | Absent |

**Sitemap grade:** Complete

The sitemap earns a Partial grade, declaring 910 URLs with both lastmod and changefreq attributes present across entries — yet the absence of priority values leaves machines without the relative importance signals that would help them sequence their crawl more intelligently.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

The llms.txt file is present and opens with a site description, which gives machines a foundational context for the domain — however, it lacks both a page inventory and a content policy, leaving the file incomplete and representing a clear opportunity to extend it with those two sections so machines can navigate and interpret the content with greater precision.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt across the audited set — the file returns a 404, carries no sitemap entry, and no discovery link appears in the homepage head. For a content-heavy site with 910 pages in the sitemap, adding an llms-full.txt would give machines a single, structured surface through which to consume the full body of content without crawling each URL individually.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

| Path | Purpose | Quality |
|------|---------|---------|
| *(5 paths — see sidecar)* | Various | — |

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| ListItem | 8 | 100% | 100% | — |
| Organization | 9 | 100% | 100% | PostalAddress |
| Product | 6 | 100% | 60% | AggregateRating, Offer, Brand |
| Offer | 6 | 100% | 63% | Organization |
| PostalAddress | 9 | 100% | 100% | — |
| BreadcrumbList | 8 | 100% | 100% | — |
| AggregateRating | 6 | 100% | 100% | — |
| Brand | 6 | 100% | 100% | — |

**Structured Data Quality:** 74/100\
**Coverage:** 9 pages with JSON-LD out of 9 total (100%)\
**Unique types:** 8

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 10 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 25 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 14 | 15 | Average across entities |
| Entity richness | 5 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 8 | 15 | Nested @type values + @id linking |
| Linked-data signals | 2 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 10 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **74** | **100** | |

---

## Structured Data Findings

The audit identified 59 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`neomwellbeing-com-structured-data-findings.csv`](neomwellbeing-com-structured-data-findings.csv). The 59 rows describe individual Schema.org property gaps on specific entities — most of them share a small number of underlying patterns, shown below ranked by instance count.

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| Product | recommended | description | 6 | 6 | Product has no description; AI shopping agents have nothing to summarise |
| Product | recommended | sku | 6 | 6 | Product cannot be uniquely identified across catalogues |
| Product | recommended | brand | 6 | 6 | Product brand attribution missing |
| Offer | recommended | seller | 6 | 6 | Offer has no seller attribution |
| Offer | recommended | itemCondition | 6 | 6 | Offer has no new/used condition declared |
| Offer | recommended | url | 6 | 6 | Offer has no purchase URL; agents cannot deep-link to checkout |
| Product | recommended | aggregateRating | 6 | 6 | Product has no rating signal for ranking |
| jsonLd | location | byteOffset | 1 | 1 | jsonLd is present in served HTML but starts at byte 851257 — past the 250 KB agent-truncation threshold. Agents with a 250 KB fetch window will not reach it. |
| jsonLd | location | byteOffset | 1 | 1 | jsonLd is present in served HTML but starts at byte 473022 — past the 250 KB agent-truncation threshold. Agents with a 250 KB fetch window will not reach it. |
| microdata | location | byteOffset | 1 | 1 | microdata is present in served HTML but starts at byte 344088 — past the 250 KB agent-truncation threshold. Agents with a 250 KB fetch window will not reach it. |

Each summary row covers multiple per-entity rows in the sidecar; the grouped view is for reading at a glance, the sidecar is for processing.

**Severity legend** (the values in the *Severity* column above):

| Severity | Meaning |
|----------|---------|
| `required` | Schema.org spec requires this property for the type. Missing values break validation. |
| `recommended` | Schema.org strongly recommends this property. Missing values reduce richness. |
| `vocabulary` | The `@type` value (the JSON-LD class name an entity declares itself as) is not in the Schema.org vocabulary — typically a typo or an invented type. |

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is — a Product, an Article, an Organization — but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside the page itself. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

**What this section checks.** Each signal below is derived deterministically from served HTML and JSON-LD on disk — no inference, no model judgement. Five structural signals fire per page: (i) self-promotional listicle (the page advertises a ranked list whose first entry resolves to the publisher's own host), (ii) year-swap refresh (the title year is two or more years ahead of `dateModified`), (iii) first-party superlative (claims like "best", "leading", "world-class" without an external reference), (iv) third-party citation count (outbound links to hosts other than the audited site), and (v) provenance metadata presence (`author`, `dateModified`, `publisher`). Pages whose body content runs over 400 words while emitting zero third-party citations carry no verifiable references and contribute to the blocker list. A clean run shows a single em-dash row and the "no blockers" verdict.

### Per-page findings

| Page | Listicle | Year-swap | First-party superlative | Third-party citations | Provenance metadata |
|------|----------|-----------|--------------------------|------------------------|----------------------|
| — | — | — | — | — | — |

A self-promotional listicle is a page whose `<title>` or `<h1>` advertises a ranked list and whose position-one entry resolves to the publisher's own host or brand. A year-swap refresh is a page whose title year is two or more years ahead of its JSON-LD `dateModified`. The citation column counts outbound links to hosts other than the audited site; pages with body content over 400 words and zero third-party citations carry no verifiable references.

### Templated clusters

No templated clusters detected at the audited scale. Pages in the audited set either carry product entities or have enough structural and textual variation to clear the stamp-out threshold.

### Provenance verdict

No provenance-gap blockers detected on the audited set. Pages clear the citation-readiness floor on the structural primitives this audit measures.

_No blockers._

Any page contributing to a blocker above is capped at **Discoverable** readiness in the MX Readiness Level table below, regardless of its other scores. Citation readiness requires a verifiable claim to cite.

---

## Marker Reachability

| Marker   | In served | In rendered | In head | Reachable <250KB | Injected by JS |
|----------|-----------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Yes | Yes | No | No | No |
| Microdata (itemscope) | Yes | Yes | Body | No | No |
| Open Graph meta tags | Yes | Yes | Yes | Yes | No |
| Twitter Card meta tags | Not present | Not present | n/a | n/a | n/a |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Yes | Yes | Body | Yes | No |

All detected markers are present in the served HTML. Server-side and browser-based agents see the same signals.

---

## Schema Maturity Level

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work.

|  | Level | Name | What it looks like | Typical SDQ |  |
|---|-------|------|---------------------|------------|---|
|  | 0 | Clean slate | No Schema.org markup present. Every addition is net new capability — the full maturity curve is open. | 0-29 |  |
|  | 1 | Decoration | Typed blocks with sparse properties, no nesting, no cross-references. Schema is treated as boilerplate. | 30-50 |  |
| **→** | 2 | Good schema | Full required and recommended properties, nested types where appropriate, valid vocabulary. No cross-entity wiring. | 75-90 | **←** |
|  | 3 | Real graph | Level 2 + @id cross-references between entities + linked-data signals (sameAs, mainEntityOfPage, isPartOf). | 90-95 |  |
|  | 4 | Verified linked data | Level 3 + external identifiers (Wikidata QIDs, ISNIs, ORCIDs) + provenance metadata. | 95-100 |  |

**Current level:** 2 — Good schema\
**To reach the next level:** To reach Level 3: wrap the JSON-LD blocks in a single @graph document; sameAs links on Person / Organization; mainEntityOfPage on the primary entity; isPartOf linking the page entity to the site entity. Cross-link Organization, PostalAddress via @id rather than inlining them repeatedly.

This is a structural classification, not a numeric score. A page can have a high SDQ score from rich properties without being graph-linked. The maturity level shows whether the schema is decoration, well-formed data, a real graph, or anchored in the linked-data web.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. Failure at any stage breaks the chain for all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Pass | 89 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 50 | Schema.org: Organization, PostalAddress (100% required properties) |
| 3 | Search & Compare | Pass | 70 | Commerce schema with 1 supporting patterns |
| 4 | Price Understanding | Pass | 100 | Pricing visible |
| 5 | Purchase Confidence | N/A | -- | No transaction forms detected |

Neomwellbeing is **Partially Compatible** with the MX Journey; three of four assessed stages pass, and Purchase Confidence is N/A for this site type.

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether the machine can read the page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether the page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily — these three determine whether the page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 9/9 | 9 page(s) exceed the 250 KB threshold. Agents with limited fetch windows may stop reading before reaching the main content. | Largest page: 951 KB. Threshold: 250 KB. See neomwellbeing-com-pipeline-truncation-risk-pages.csv (9 pages). |
| SPA Shell | Fail | 1/9 | Content requires JavaScript to appear. Server-side agents (ChatGPT, Claude, Perplexity) see an empty shell when they fetch these pages. | Max gap score: 26. 0 means served and rendered match. Page: https://neomwellbeing.com/ |
| Soft 404 | Pass | 9/9 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 9/9 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.47. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 9/9 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 6 page(s) with tab widgets. |
| Delayed Content Start | Pass | 9/9 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 14% of the document on some pages. |
| Broken Code Fences | Pass | 9/9 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Fail | 9/9 | The server advertises content negotiation via Vary: Accept. Agents that ask for a different Accept header may receive different content than the browser version. | 9 page(s) advertise format negotiation. See neomwellbeing-com-pipeline-http-content-negotiation-(vary)-pages.csv (9 pages). |
| Cross-Host Redirect | Pass | 9/9 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 0 page(s) cross origin during redirect. |
| Generic Headings | Pass | 9/9 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | 9/9 | Actual prose content averages 45% of served bytes — well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 45%. Threshold: 30%. |
| Inline Tag Bloat | Fail | 9/9 | 9 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 174 element(s) > 500 bytes. Largest inline CSS: 71194 B. Largest inline JS: 76755 B. See neomwellbeing-com-pipeline-inline-tag-bloat-pages.csv (9 pages). |
| Head Weight | Pass | 9/9 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.14. Average: 0.12. Threshold: 0.50. |

**Pipeline Survivability score:** 74/100

Across the audited set, the resilience checks most in need of attention are Truncation Risk, SPA Shell, Content Negotiation, and Inline Tag Bloat — with Truncation Risk standing out as the most pervasive, touching every one of the nine pages we reviewed. When machines encounter content that risks being cut off mid-stream, they may form an incomplete picture of the page, reducing the reliability of any summarisation, indexing, or reasoning built on top of it. Resolving the Truncation Risk pattern across the audited set would therefore deliver the broadest single improvement to how confidently machines can read and process this content.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R — Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S — The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup — naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent the page is gone.

The Div Soup check runs against the rendered HTML on every page. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 20/100 | high | 573 | 66% | 9 | `div.star-container.yotpo-sr-star-full` (667), `div.flex.flex-col` (538), `div.flex.flex-row` (472), `div.star-container` (300), `div` (221) |

Across the audited set, we found that 573 of 867 rendered elements — 66% — are bare divs, meaning machines have no semantic signal from those nodes and must rely on positional inference to determine meaning. The pattern here is surface-wide rather than structurally deep: a deepest chain of 9 is not extreme, but a bare-div ratio of 66% spread across high-frequency utility classes such as flex containers and star-rating wrappers points strongly to a utility-CSS or component framework pipeline where layout and presentation divs are emitted without semantic wrapping. The cheapest first move is to wrap the obvious landmarks — header, nav, main, footer, aside — so that machines immediately gain reliable structural anchors, then assign meaningful class names to the remaining high-frequency bare elements, which would bring the ratio down materially without any restructuring of the visual layout.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | Yes | Prevents XSS and injection attacks |
| X-Frame-Options | Yes | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

All five standard security headers are present on every audited response. This is the expected baseline for any production website.

**Coverage:** 12 of 12 audited URLs carry all five headers.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| /llms.txt | Yes | Yes | Yes | Yes | Yes |
| /llms-full.txt | Yes | Yes | Yes | Yes | Yes |
| /agents.md | Yes | Yes | Yes | Yes | Yes |
| / | Yes | Yes | Yes | Yes | Yes |
| /products/complete-bliss-standard-scented-candle | Yes | Yes | Yes | Yes | Yes |
| /products/perfect-night-sleep-luxury-scented-candle | Yes | Yes | Yes | Yes | Yes |
| /products/perfect-nights-sleep-standard-scented-candle | Yes | Yes | Yes | Yes | Yes |
| /products/feel-refreshed-luxury-scented-candle | Yes | Yes | Yes | Yes | Yes |
| /products/real-luxury-standard-scented-candle | Yes | Yes | Yes | Yes | Yes |
| /products/feel-refreshed-standard-scented-candle | Yes | Yes | Yes | Yes | Yes |
| /collections/gift-with-purchase | Yes | Yes | Yes | Yes | Yes |
| /collections/body-wash | Yes | Yes | Yes | Yes | Yes |

HTTPS: 12/12 | HSTS: 12/12 | CSP: 12/12 | X-Frame-Options: 12/12 | X-Content-Type-Options: 12/12

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 100% | — |
| MX governance tags | N/A | — |
| Open Graph tags | N/A | — |
| Twitter Card tags | N/A | — |
| Skip link | N/A | — |
| llms-txt link tag | N/A | — |
| Canonical URL | 100% | — |
| Exactly 1 H1 | N/A | — |
| Code examples present | N/A | — |
| Self-contained sections | 100% | — |
| Error/troubleshooting docs | N/A | — |
| Lighthouse heading compliance | N/A | — |

**Overall Consistency:** 100%

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no organisation-name or canonical-URL divergence flagged by the consistency check.

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Pass | Organisation name appears consistently across all 9 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 9-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

173 identical inline fragment(s) were found repeated across multiple pages, totalling 935 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes | Pages | Preview |
|------|-------|-------|---------|
| css | 1260 | 12 | .upsell-blocks {     margin-top: 1.5rem;   }      .upsell-ca |
| css | 358 | 12 | .yotpo-verified-image-icon{display:flex;flex-direction:colum |
| css | 288 | 12 | .yotpo-star-rating{display:flex;align-items:center}.yotpo-st |
| css | 107 | 12 | .yotpo-pagination-icon{fill:var(--text-color)}.yotpo-paginat |
| css | 99 | 12 | .yotpo-star-distribution-ph{display:flex;flex-direction:colu |
| css | 77 | 12 | .disabled,.yotpo-pagination-icon{fill:var(--text-color)}.dis |
| css | 4683 | 9 | #NavImageimage_BaUPxm1 .nav-block-image {       aspect-ratio |
| css | 3932 | 9 | .yotpo-reviews-star-ratings-widget { display: flex;   a:empt |
| js | 3908 | 9 | class PredictiveSearchMobile extends HTMLElement {         c |
| js | 3839 | 9 | class PredictiveSearch extends HTMLElement {         constru |

*Showing the top 10 of 173 duplicate fragments by occurrence count. The full inventory — every fragment with its hash and the page URLs that carry it — is preserved alongside this report as `neomwellbeing-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents — Accessibility and Machine Readability

Accessibility legislation across major markets — including the EU's Directive (EU) 2019/882 (in force 28 June 2025), Section 508 of the US Rehabilitation Act, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada — has converged on ISO 14289-1 (PDF/UA) as the shared technical baseline, making the EAA the most precisely codified expression of a genuinely global standard. In parallel, and entirely independently of the legal question, an untagged PDF is opaque to machines: where a tagged document with a proper structure tree is machine-readable in the same way that semantic HTML is, a scanned or image-based PDF yields nothing to search crawlers, AI systems, or automated pipelines attempting to extract text, entities, or structure from across the audited set.

No PDF documents were discovered in the audited surface. Accessibility exposure on the document carrier: **low within the pages crawled**.

**Scope note:** this audit crawls a defined set of public pages — typically the home page, key content pages, and any pages linked directly from them. PDFs sitting behind login forms, linked only from uncrawled pages, stored in unlinked directories, or hosted on third-party domains are outside the crawl boundary and do not appear in this count. If your site publishes datasheets, white papers, investor documents, or product manuals that were not part of this crawl, a wider-scope PDF audit is needed before drawing conclusions about overall accessibility exposure on the document carrier.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings** — address the 316 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings** — Discovery Readiness improvements and metadata tuning that compound over time
3. **Consider optional enhancements** — optional patterns that give a first-mover advantage in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | WCAG 2.1 AA compliance | Priority 1 items resolved, compliance risk removed |
| Full Optimization | Semantic Structure, Discovery Readiness, Catalogue Visibility, Metadata Stack, Structured Data, Heading Quality, Performance, and optional enhancements | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://neomwellbeing.com performs at its strongest in SEO, scoring 83/100 — a solid foundation that reflects well-structured content and meaningful metadata signals for search. The most significant opportunities lie in Discovery Readiness at 26/100 and Accessibility at 9/100, where targeted improvements would meaningfully extend both reach and inclusivity for all visitors and the machines that index and interpret the site. We invite you to explore the detailed findings that follow and discuss a prioritised roadmap with our team.

### Audit Scores

The site serves an empty HTML shell to server-side agents. The "Rendering" column shows whether each score was measured from the served HTML (what agents actually get) or the rendered HTML (what agents would get with SSR).

| Dimension | Score | Rendering | Notes |
|-----------|-------|-----------|-------|
| AI Agent Suitability | 19/100 | Served | Empty shell — no content without JS |
| Accessibility | 9/100 | Rendered | Pa11y runs in a browser |
| SEO (all pages) | 83/100 | Rendered | Google renders JS; server-side agents do not |
| SEO (content pages) | 83/100 | Rendered |  |
| MX Stack Completeness | 51/100 | Rendered |  |
| Structured Data Quality | 74/100 | Rendered | JSON-LD in served head — valid for all agents |
| Commerce Visibility | 45/100 | Rendered |  |
| Discovery Readiness | 26/100 | Mixed | robots.txt/sitemap independent of rendering |
| Heading Quality | 59/100 | Rendered |  |
| Semantic Ratio | 7% | Rendered |  |
| Agent Readability | 64/100 | Rendered |  |
| Pipeline Survivability | 74/100 | Rendered |  |
| Cross-Page Consistency | 100% | Rendered |  |

Server-side agents see only the served HTML. The AI Suitability score reflects their experience. All other scores reflect what the site achieves after JavaScript renders.

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| /agents.md | 35 | 80 | — | 58 | 58 |
| / (nav) | 83 | 0 | 100 | 0 | -16 |
| /products/complete-bliss-standard-scented-candle | 90 | 0 | 100 | 0 | 0 |
| /products/perfect-night-sleep-luxury-scented-candle | 89 | 0 | 100 | 0 | 0 |
| /products/perfect-nights-sleep-standard-scented-candle | 88 | 0 | 100 | 0 | 0 |
| /products/feel-refreshed-luxury-scented-candle | 89 | 0 | 100 | 0 | 0 |
| /products/real-luxury-standard-scented-candle | 92 | 0 | 100 | 0 | 0 |
| /products/feel-refreshed-standard-scented-candle | 88 | 0 | 100 | 0 | 0 |
| /collections/gift-with-purchase | 90 | 0 | 100 | 0 | 0 |
| /collections/body-wash | 89 | 0 | 100 | 0 | 0 |

The page marked (nav) is navigational — it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 83/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page — 1591 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 1591  |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set, we found 1,744 images in total. The format distribution skews heavily toward JPEG, which accounts for 1,085 images, with SVG contributing a further 221 and PNG adding 56. Notably, WebP adoption stands at zero across the audited set — a format well worth introducing given its broad browser support. On alt-text coverage, 1,356 images carry descriptive text, representing 77.8% of the total. That leaves 388 images without alt text, a meaningful gap both for accessibility and for machines that rely on textual signals to understand image content.

Loading strategy is a mixed picture. Of the 1,744 images, 734 carry a `loading="lazy"` attribute and 346 are marked `loading="eager"` — so those two groups are at least explicit about intent. The more pressing concern is the 664 images with no loading attribute set at all. It is worth being clear that "no attribute" is not equivalent to eager loading: the browser applies its own heuristics, which can vary by position in the document, viewport size, and browser implementation. For images that genuinely need to load immediately — hero shots, above-the-fold visuals — explicit `loading="eager"` removes that ambiguity and gives you predictable behaviour across environments.

> **Double-lazy loading pattern detected on 311 image(s).** These images carry BOTH the native HTML attribute `loading="lazy"` AND a JavaScript lazyload pattern (a placeholder `data:image/gif` in `src`, the real URL in `data-src`, and a `lazyload` class). The image cannot render until:
>
> 1. The lazyload JavaScript library loads and parses.
> 2. The script scans the DOM and swaps `data-src` → `src` on images entering the viewport.
> 3. The browser then honours `loading="lazy"` on the newly-swapped `src`, which may defer the fetch further.
>
> **Why this matters for above-the-fold imagery** (hero banners, logos, navigation thumbnails): the hero never renders during the initial HTML parse because the real URL is not in the document yet. Core Web Vitals (LCP) and human perception of speed both pay the cost. AI agents that fetch static HTML without running JavaScript see only the placeholder `data:image/gif` and miss the image entirely.
>
> **Recommended remediation:** for above-the-fold images, put the real URL in `src`, use `loading="eager"` and `fetchpriority="high"`, and remove the lazyload class. For below-the-fold images, keep one strategy — either native `loading="lazy"` (simpler, widely supported) or the JavaScript lazyload library, not both.

---

## Appendix D: Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** Metadata Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks — truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** The audit fingerprints the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Shopify**. The main audit uses Shopify-specific rate limits from our platform knowledge base — requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** Every internal link discovered on every audited page is recorded with its URL, anchor text, and link type. The audit does not probe link status — a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 10 pages analysed | Platform: Shopify | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

---

\clearpage

## Further Reading

Every book appendix cited in this report, plus the book itself. Click the link on screen or scan the QR code on paper — both encode the same URL.

| Scan | Link and description |
| :----: | -------------------- |
| ![Appendix R QR](assets/qr/appendix-r.png){ width=15mm } | **[MX: The Protocols Appendix R — Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** — the methodology behind the Pipeline Survivability measurements used in this report.\ <https://mx.allabout.network/books/appendices/appendix-r.html> |
| ![Appendix S QR](assets/qr/appendix-s.png){ width=15mm } | **[MX: The Protocols Appendix S — The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)** — the full catalogue of reading-resilience checks scored in the Agent Reading Pipeline section.\ <https://mx.allabout.network/books/appendices/appendix-s.html> |
| ![Appendix M QR](assets/qr/appendix-m.png){ width=15mm } | **[MX: The Protocols Appendix M — Index of Metadata](https://mx.allabout.network/books/appendices/appendix-m.html)** — the full field dictionary governing the MX governance tags referenced throughout this report.\ <https://mx.allabout.network/books/appendices/appendix-m.html> |
| ![llms.txt guide QR](assets/qr/llms-txt-guide.png){ width=15mm } | **[Why llms.txt Probably Isn't Working — And What to Do About It](https://mx.allabout.network/blog/llms-txt-guide.html)** — a guide to the two structural problems most llms.txt implementations have (MIME type and sitemap registration).\ <https://mx.allabout.network/blog/llms-txt-guide.html> |
| ![Books index QR](assets/qr/books-index.png){ width=15mm } | **[Get the books](https://mx.allabout.network/books/)** — MX: The Intro (free), MX: The Handbook, and MX: The Protocols. The full reference for every concept this report draws on.\ <https://mx.allabout.network/books/> |

---

**Date:** 14 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*
