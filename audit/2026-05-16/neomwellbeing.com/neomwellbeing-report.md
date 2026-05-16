---
title: "Neomwellbeing: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-16"
modified: "2026-05-16"
client: "Neomwellbeing"
clientSlug: "neomwellbeing"
clientUrl: "https://neomwellbeing.com"
reportId: "neomwellbeing-WEB-AUDIT-20260516"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-16"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Neomwellbeing"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 35
accessibilityScore: 18
seoScore: 73
llmSuitabilityScore: 25
totalIssues: 96
pagesAudited: 5
version: "1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Neomwellbeing. Focus on the highest-leverage MX opportunities surfaced by the audit."
---

# Neomwellbeing: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 16 May 2026\
**Report ID:** neomwellbeing-WEB-AUDIT-20260516

---

## About This Report

We audited 5 pages across neomwellbeing.com's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [`https://tg.community`](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What this audit covers: and what MX covers.** This audit checks the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. Our recommendation diverges from the specification: we recommend serving llms.txt as `text/html`, wrapping the raw text in a minimal HTML document with the content inside a `<pre>` block and returning `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **35**/100 | `######------------` **(!)** |
| Accessibility | **18**/100 | `###---------------` **(!)** |
| SEO | **73**/100 | `#############-----` |
| Machine Suitability | **25**/100 | `#####-------------` **(!)** |
| MX Stack | **51**/100 | `#########---------` |
| Agent Readability | **65**/100 | `############------` |
| Pipeline Survivability | **72**/100 | `#############-----` |

Neomwellbeing presents a well-considered destination for wellness seekers. Across the audited set, the brand communicates with clarity and warmth, and the product content is substantive enough to support genuine purchase decisions. SEO foundations are solid at 73/100, meaning the pages we reviewed are well-positioned to attract and hold human visitors who arrive through search.

Before turning to the machine-experience opportunity, we want to name accessibility as a Priority 1 compliance item. We recorded 96 critical WCAG AA issues across the audited set, and that number, while large, carries a constructive note: 80 of those issues trace to 22 recurring template patterns, meaning a single theme-level edit per pattern resolves all instances at once. The groundwork for a faster-than-expected remediation is already there. The headline opportunity, once accessibility is on a remediation path, is machine readiness. Discovery Readiness and AI Suitability both sit at 25/100, placing Neomwellbeing at MX Readiness Level 1. Machines reading the audited pages today see a substantially thinner version of the brand than a human visitor does, and closing that distance is the lever most likely to extend Neomwellbeing's reach into agent-mediated search and AI-driven recommendations.

The Schema Maturity picture is more encouraging, sitting at Level 2 (74/100), with a meaningful set of structured-data types already in place across the audited set. That foundation matters because Schema.org JSON-LD is readable by machines regardless of how a page is ultimately rendered, making it the highest-leverage asset available for closing the machine-readiness distance quickly and reliably.

> 

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, SEO sits at a solid 73/100 while Accessibility at 18/100, with 96 issues identified across 5 pages, represents the clearest opportunity to improve the experience for human visitors.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Could Be Better | C |
| Accessibility (WCAG) | Needs Improvement | D |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can parse structured product and organisational data with reasonable confidence (Structured Data Quality 74/100) and carry content through processing pipelines at a moderate rate (Pipeline Survivability 72/100), though their ability to discover and index those pages remains constrained (Discovery Readiness 25/100, Metadata Stack Completeness 51/100).

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 25/100 | Needs Improvement | D |
| Structured Data Quality | 74/100 | Good | B |
| MX Stack Completeness | 51/100 | Could Be Better | C |
| Pipeline Survivability | 72/100 | Excellent | A |

---

## Reading the Report: Two Budget Lenses

The findings below are tagged with one of three buckets so different budget owners can navigate to the work that matters to them:

- **Compliance Risk**: accessibility (WCAG 2.1 AA), duplicate IDs, forms, and semantic structure. These are inclusion and legal-exposure issues; the budget owner is typically legal, HR, or an accessibility lead.
- **Cross-cutting Foundations**: performance and SEO. These affect both human visitors and AI agents; the budget owner is usually digital operations or a foundation engineering team.
- **AI Opportunity**: discovery readiness, metadata stack, llms.txt, structured data, agent cards, and pipeline survivability. These determine whether the site lands in agent answers; the budget owner is typically the CMO or head of digital.

Every priority block in the Findings section carries a **Bucket:** label matching one of the three above. The at-a-glance table sorts findings into bucket order so each budget owner can read straight to their own list.

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

**Current Level:** 1: Basic

**Evidence:** MSC 51/100 | SDQ 74/100 | Discovery 25/100 | Consistency 100%

**To reach the next level:** Add full MX fields and governance metadata. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, we found a solid foundation of technical strengths that the improvements ahead are designed to build on. Consistent security headers, a Structured Data Quality score of 74/100, and a 100% consistency rating across the audited pages give machines and human visitors alike a reliable base to work from.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Could Be Better | Could Be Better — 5988ms average load time |
| SEO (content pages) | 73 | Good — titles, meta descriptions, canonical URLs in place |
| Security | 5/5 | HTTPS, HSTS, CSP, X-Frame-Options, X-Content-Type-Options on every audited URL |
| Structured Data | 74 | Good — JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 61 | Good — single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 100% | 100% — same metadata patterns across every page |
| Agent access | 6/6 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- Security headers are in place on every page: HTTPS, HSTS, Content-Security-Policy, X-Frame-Options, and X-Content-Type-Options on 7 of 7 audited pages.
- Commerce schema is present on every product page: 3 of 3 product pages carry both Product and Offer entities.
- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Cross-page consistency is complete: every audited page carries the same metadata pattern, confirming uniform implementation across the 5-page audit set.
- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.

---

## Findings

### At a Glance

The findings below are prioritised by impact across the audited set, with discovery and visibility opportunities leading because gaps at that layer constrain everything downstream. Structured Data Quality sits at 74/100, Catalogue Visibility at 45/100, Metadata Stack Completeness at 51/100, and Discovery Readiness at 25/100.

## At-a-Glance Findings

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Duplicate ID attributes (#quantity, #mini-cart) violate WCAG 4.1.1 — 15 instances across 4 pages | Compliance Risk | High | Medium | Assistive tech users may mis-navigate or receive incorrect announcements |
| 2 | Forms missing submit buttons violate WCAG 3.2.2 — 8 instances across 4 pages | Compliance Risk | High | Medium | Keyboard-only users risk being unable to submit forms |
| 3 | Empty heading tags violate WCAG 1.3.1 — 4 instances across 4 pages | Compliance Risk | High | Low | Screen reader users may receive confusing or redundant navigation cues |
| 4 | Semantic structure score 20/100 — 573 bare divs out of 867 total elements | Compliance Risk | High | High | Screen reader and assistive tech users are less likely to navigate content accurately |
| 5 | Slow average load time — 5,988ms average across the audited set | Cross-cutting | High | Medium | All users and machines may abandon or deprioritise pages before content loads |
| 6 | SEO score 73/100 — Heading quality at 61/100 | Cross-cutting | Medium | Low | Search crawlers are less likely to correctly rank and index page content |
| 7 | Discovery Readiness 25/100 — Served HTML at 25/100 | AI Opportunity | High | Medium | Machines risk missing content that is not available in served HTML |
| 8 | Metadata Stack Completeness 51/100 — incomplete metadata across the audited set | AI Opportunity | Medium | Medium | Machines are less likely to correctly attribute or surface pages in agent answers |
| 9 | Pipeline Survivability 72/100 — partial agent-pipeline readiness | AI Opportunity | Medium | Low | Machines may reduce confidence in page content during discovery and citation |

---

**Priority 1: Duplicate ID Attributes (#quantity, #mini-cart), WCAG 4.1.1**

**Bucket:** Compliance Risk

**Finding:** We identified 11 instances of the duplicate ID value "quantity" across 4 pages and 4 instances of the duplicate ID value "mini-cart" across 4 pages. WCAG 4.1.1 requires that all ID attribute values on a page are unique; duplicate IDs cause assistive technologies to behave unpredictably because they cannot reliably resolve which element is being referenced.

**What to change and why:**

- Ensure every instance of the "quantity" ID is unique across the audited set. When the same ID appears on multiple elements, screen readers and other assistive technologies may announce the wrong element or skip subsequent instances entirely, directly affecting WCAG 4.1.1 conformance.
- Ensure every instance of the "mini-cart" ID is unique across the audited set. Duplicate IDs in interactive cart regions are particularly disruptive because they sit in high-traffic user flows; resolving them reduces assistive-tech confusion and improves WCAG 4.1.1 compliance.
- Because 80% of the 96 accessibility issues we found trace to 22 recurring template-level patterns, addressing these duplicate IDs at the template level will resolve all instances across the audited set in a single edit rather than requiring page-by-page remediation.

**Effort:** Medium

---

**Priority 2: Forms Missing Submit Buttons, WCAG 3.2.2**

**Bucket:** Compliance Risk

**Finding:** We identified 8 instances across 4 pages where forms do not contain a submit button, affecting both the header region (selector: `#shopify-section-header`) and a predictive search region (selector: `html > body > div:nth-child(5) > div:nth-child(3) > predicti…`). WCAG 3.2.2 requires that forms can be submitted without requiring a pointer device; the absence of a valid submit button prevents keyboard-only users from completing form interactions.

**What to change and why:**

- Add a valid submit button to the header form region. Without one, keyboard-only users cannot trigger the form's intended action, which constitutes a WCAG 3.2.2 violation and excludes a measurable segment of the user base from core site functionality.
- Add a valid submit button to the predictive search form region. Predictive search is a navigational aid; keyboard users who rely on it to find products are at risk of reaching a dead end if no submit mechanism is available without a pointer device.
- As with Priority 1, these patterns recur across 4 pages and are template-level issues; a single theme-level fix resolves all instances across the audited set.

**Effort:** Medium

---

**Priority 3: Empty Heading Tags, WCAG 1.3.1**

**Bucket:** Compliance Risk

**Finding:** We identified 4 instances across 4 pages where heading tags contain no text content (selector: `#shopify-section-sections--25230890140031__redirection_popup…`). WCAG 1.3.1 requires that information conveyed through visual presentation is also available to programmatic determination; empty heading tags create ghost entries in the document outline that screen readers announce without meaningful content.

**What to change and why:**

- Remove or replace empty heading tags in the redirection popup section. When a screen reader encounters an empty heading, it announces a heading level with no label, which can disorient users navigating by heading structure and constitutes a WCAG 1.3.1 violation.
- If the markup is present for styling purposes only, the element should be changed to a non-heading element so that the document outline remains accurate. This resolves the WCAG 1.3.1 violation and ensures the heading hierarchy is meaningful for assistive technology users.

**Effort:** Low

---

**Priority 4: Semantic Structure 20/100 (573 Bare Divs out of 867 Total Elements)**

**Bucket:** Compliance Risk

**Finding:** We recorded a semantic structure score of 20/100 across the audited set. Of 867 total elements, 573 are bare divs, meaning page structure across the audited set carries no semantic role for the majority of elements. Screen readers and assistive technologies depend on semantic elements to build an accurate document model; when content is wrapped primarily in divs, users navigating by landmark, role, or element type are less likely to locate sections accurately.

**What to change and why:**

- Replace structural divs with appropriate semantic elements where those elements reflect the content's actual role (for example, navigation regions, main content areas, article or section containers). Semantic elements communicate meaning to assistive technologies directly through the document structure, improving WCAG 1.3.1 compliance and the accuracy of the accessibility tree.
- Audit landmark regions across the audited set to ensure users navigating by landmark can reach all major content areas. Where landmarks are absent, assistive technology users may find large portions of each audited page effectively invisible to their navigation mode.
- Improving semantic structure also benefits machines. Search crawlers and AI-driven indexers use document structure to infer content hierarchy; a higher proportion of semantic elements increases the likelihood that machines accurately interpret page content, which is relevant to the Discovery Readiness score of 25/100.

**Effort:** High

---

**Priority 5: Average Load Time 5,988ms**

**Bucket:** Cross-cutting

**Finding:** We measured an average load time of 5,988ms across the audited set. Extended load times affect all users by increasing the likelihood of abandonment before content is interactive, and they affect machines because crawlers and pipeline agents operating under time or resource constraints are less likely to fully process pages that respond slowly.

**What to change and why:**

- Investigate and reduce the sources of load-time delay across the audited set. Pages that load slowly are less likely to be fully crawled in a single pass, which compounds the Discovery Readiness score of 25/100 by reducing the proportion of content machines can retrieve.
- Prioritise load-time improvements on pages that carry the richest structured data, given that the Structured Data Quality score of 74/100 represents Neomwellbeing's strongest machine-facing signal; slow delivery risks that signal going unread by time-constrained machines.
- Improved load times contribute directly to SEO performance. The current SEO score of 73/100 has room to grow, and performance is a well-documented input into search-ranking signals.

**Effort:** Medium

---

**Priority 6: SEO 73/100, Heading Quality 61/100**

**Bucket:** Cross-cutting

**Finding:** We recorded an SEO score of 73/100 across the audited set. Within that, heading quality sits at 61/100; the 4 empty heading tag instances identified across 4 pages (Priority 3) contribute directly to that shortfall by introducing unlabelled entries into the document outline that search crawlers cannot interpret as meaningful topic signals.

**What to change and why:**

- Review heading hierarchies across the audited set to ensure headings accurately reflect the content structure of each page. Search crawlers use heading order and content to infer topic relevance; the 4 empty heading tag instances recorded across 4 pages introduce unlabelled document-outline entries that carry no topic signal and are the primary contributor to the 61/100 heading quality score.
- Resolving the empty heading tags identified in Priority 3 will also improve heading quality as a by-product, meaning the work across Priority 3 and Priority 6 is partially overlapping and can be scoped together efficiently.

**Effort:** Low

---

**Priority 7: Discovery Readiness 25/100, Served HTML 25/100**

**Bucket:** AI Opportunity

**Finding:** We recorded a Discovery Readiness score of 25/100 and a Served HTML score of 25/100 across the audited set. Machines that retrieve pages at the network level rather than executing client-side rendering are less likely to encounter the full content of these pages, reducing the proportion of text, links, and structured signals available for indexing or citation.

**What to change and why:**

- Investigate the gap between served and rendered content across the audited set. When meaningful content is absent from served HTML, machines relying on that layer risk missing product descriptions, navigation signals, and structured data that would otherwise improve citation eligibility.
- Consider whether critical content, including content that supports the Structured Data Quality score of 74/100, is present in served HTML. Structured data that is only present after rendering may go unread by machines that do not execute JavaScript, reducing the return on investment of the schema already present.
- Review whether an llms.txt file is in place. A well-formed llms.txt provides machines with a direct declaration of key content surfaces across the audited set, which partially compensates for low served-HTML coverage by giving agent pipelines an explicit index of where to look.

**Effort:** Medium

---

**Priority 8: Metadata Stack Completeness 51/100**

**Bucket:** AI Opportunity

**Finding:** We recorded a Metadata Stack Completeness score of 51/100 across the audited set, indicating that roughly half of the expected metadata signals are absent or incomplete. Machines constructing knowledge about a page rely on metadata to determine authorship, topic, canonical identity, and freshness; gaps in the metadata stack reduce the confidence with which machines attribute or surface content in agent answers.

**What to change and why:**

- Across the 5 audited pages, two field groups are absent entirely: MX governance tags (`mx-status`, `mx-content-type`) and Twitter Card tags, both recorded as "Not present" in the Marker Reachability table. Populating these fields on each page would directly raise the MX Stack Completeness score from its current 51/100 by filling the governance and social metadata layers that currently contribute nothing to the score.
- Ensure that Open Graph fields are consistently populated across the audited set. The Marker Reachability table confirms Open Graph tags are present but recorded as "N/A" for coverage in the Cross-Page Consistency table, indicating the fields exist without confirmed uniform population; completing them on every audited page gives machines a corroborated social-metadata signal alongside the canonical URL already in place.
- Cross-reference the metadata stack against the existing schema types already present across the audited set. Where schema and metadata signals are aligned, machines gain a stronger, corroborated signal; where they diverge, machines may reduce confidence in both.

**Effort:** Medium

---

**Priority 9: Pipeline Survivability 72/100**

**Bucket:** AI Opportunity

**Finding:** We recorded a Pipeline Survivability score of 72/100 across the audited set. This score reflects the degree to which content can pass intact through machine-driven discovery and processing pipelines; a score below the top band indicates opportunities to strengthen the signals machines use to retrieve, parse, and cite content.

**What to change and why:**

- Review the components contributing to the 72/100 score in the context of the Discovery Readiness score of 25/100. Low discovery readiness is likely the dominant drag on pipeline survivability; improvements to served HTML coverage (Priority 7) are likely to move this score upward as a by-product.
- Confirm that security headers, which we recorded at 5/5 on every audited URL, are consistently maintained. Strong security headers contribute to machine trust signals, and this is one of the stronger foundations already in place across the audited set.
- Align the metadata stack (Priority 8) with the existing structured data to present machines with a coherent, cross-validated set of signals. Coherent signals across layers reduce the risk that machines deprioritise or partially ignore page content during pipeline processing.

**Effort:** Low

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen machine readiness across Neomwellbeing.

- **sameAs links on Organization**: adding `sameAs` properties to the Organization entity, pointing to verified third-party profiles such as Wikidata or LinkedIn, gives machines an unambiguous identity anchor that lets them confidently attribute brand mentions across the web to Neomwellbeing.

- **potentialAction on Organization**: attaching a `potentialAction` entry to the Organization entity advertises the brand's contact or search capabilities directly to machines, increasing the likelihood that agent-driven interfaces surface Neomwellbeing as an actionable result rather than a passive reference.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for AI agents.

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
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | Yes |
| `<meta name="robots" content="noindex">` | Yes |
| MX governance tags | Not present |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://neomwellbeing.com/`. A first-time visitor sees the cold-cache cost: the crawler recorded 16243 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes that followed returned 438ms, 324ms, 535ms, giving a returning-visitor median of **438 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://neomwellbeing.com/products/perfect-night-sleep-luxury-scented-candle`. A first-time visitor sees the cold-cache cost: the crawler recorded 2941 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 217ms, 262ms, 253ms, giving a returning-visitor median of **253 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** The slowest page returned slowly on its first cold-cache visit but is served acceptably under cache-busted re-probes; first-time visitors carry a cold-origin cost that the returning-visitor median hides.

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

*Showing the first 10 lines of `robots.txt`; the full 164-line file is preserved alongside this report as `neomwellbeing-robots-txt.txt`.*

The robots.txt file is present and references three sitemaps, giving machines a clear set of starting points for discovery. It carries 146 disallow paths, meaning a substantial portion of the crawlable address space is explicitly restricted from machine access.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 908 entries | Fewer than crawl found |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | No | Absent |

**Sitemap grade:** Partial

The sitemap earns a Partial grade, covering 908 URLs with lastmod and changefreq values present on every entry, yet the absence of priority attributes leaves machines without the relative crawl-weighting signals that would otherwise help them allocate attention across the catalogue.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

The llms.txt file is present and carries a site description, which gives machines an initial orientation to Neomwellbeing's purpose. We recommend extending it to include a page inventory and a content policy, so machines can index the full scope of the audited set and understand how content may be used.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

Neomwellbeing.com does not currently serve an llms-full.txt file; a request to the expected path returns a 404, and the file is absent from both the sitemap and the homepage head. For a content-heavy catalogue of 908 pages, adding an llms-full.txt would give machines a single, structured surface from which to draw accurate product and brand information without crawling individual pages.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

5 additional registered `/.well-known/` paths were probed; none returned a recognisable discovery file. The per-path breakdown is preserved alongside this report as a sidecar JSON.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| Organization | 4 | 100% | 100% | PostalAddress |
| Product | 3 | 100% | 60% | AggregateRating, Offer, Brand |
| Offer | 3 | 100% | 63% | Organization |
| ListItem | 3 | 100% | 100% | — |
| PostalAddress | 4 | 100% | 100% | — |
| AggregateRating | 3 | 100% | 100% | — |
| Brand | 3 | 100% | 100% | — |
| BreadcrumbList | 3 | 100% | 100% | — |

**Structured Data Quality:** 74/100\
**Coverage:** 4 pages with JSON-LD out of 4 total (100%)\
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
| Linked-data signals | 3 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 10 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **74** | **100** | |

---

## Structured Data Findings

We identified 28 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`neomwellbeing-structured-data-findings.csv`](neomwellbeing-structured-data-findings.csv). The 28 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| Product | recommended | description | 3 | 3 | Product has no description; AI shopping agents have nothing to summarise |
| Product | recommended | sku | 3 | 3 | Product cannot be uniquely identified across catalogues |
| Product | recommended | brand | 3 | 3 | Product brand attribution missing |
| Offer | recommended | seller | 3 | 3 | Offer has no seller attribution |
| Offer | recommended | itemCondition | 3 | 3 | Offer has no new/used condition declared |
| Offer | recommended | url | 3 | 3 | Offer has no purchase URL; agents cannot deep-link to checkout |
| Product | recommended | aggregateRating | 3 | 3 | Product has no rating signal for ranking |
| jsonLd | location | byteOffset | 1 | 1 | jsonLd is present in served HTML but starts at byte 851218 — past the 250 KB agent-truncation threshold. Agents with a 250 KB fetch window will not reach it. |
| jsonLd | location | byteOffset | 1 | 1 | jsonLd is present in served HTML but starts at byte 473016 — past the 250 KB agent-truncation threshold. Agents with a 250 KB fetch window will not reach it. |
| microdata | location | byteOffset | 1 | 1 | microdata is present in served HTML but starts at byte 344071 — past the 250 KB agent-truncation threshold. Agents with a 250 KB fetch window will not reach it. |

Each summary row covers multiple per-entity rows in the sidecar; the grouped view is for reading at a glance, the sidecar is for processing.

**Severity legend** (the values in the *Severity* column above):

| Severity | Meaning |
|----------|---------|
| `required` | Schema.org spec requires this property for the type. Missing values break validation. |
| `recommended` | Schema.org strongly recommends this property. Missing values reduce richness. |
| `vocabulary` | The `@type` value (the JSON-LD class name an entity declares itself as) is not in the Schema.org vocabulary: typically a typo or an invented type. |

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is: a Product, an Article, an Organization: but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside that page itself. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

**What this section checks.** Each signal below is derived deterministically from served HTML and JSON-LD on disk: no inference, no model judgement. Five structural signals fire per page: (i) self-promotional listicle (a ranked list is advertised whose first entry resolves to the publisher's own host), (ii) year-swap refresh (the title year is two or more years ahead of `dateModified`), (iii) first-party superlative (claims like "best", "leading", "world-class" without an external reference), (iv) third-party citation count (outbound links to hosts other than the audited site), and (v) provenance metadata presence (`author`, `dateModified`, `publisher`). Pages whose body content runs over 400 words while emitting zero third-party citations carry no verifiable references and contribute to the blocker list. When the audited set is clean we omit the per-page table altogether and let the verdict line below carry the result.

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
|  | 0 | Clean slate | No Schema.org markup present. Every addition is net new capability: the full maturity curve is open. | 0-29 |  |
|  | 1 | Decoration | Typed blocks with sparse properties, no nesting, no cross-references. Schema is treated as boilerplate. | 30-50 |  |
| **→** | 2 | Good schema | Full required and recommended properties, nested types where appropriate, valid vocabulary. No cross-entity wiring. | 75-90 | **←** |
|  | 3 | Real graph | Level 2 + @id cross-references between entities + linked-data signals (sameAs, mainEntityOfPage, isPartOf). | 90-95 |  |
|  | 4 | Verified linked data | Level 3 + external identifiers (Wikidata QIDs, ISNIs, ORCIDs) + provenance metadata. | 95-100 |  |

**Current level:** 2: Good schema\
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

The audited pages are Partially Compatible with the MX Journey; Purchase Confidence is N/A for this site type.

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether the machine can read each audited page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether each audited page survives a known agent-reading risk: truncation by an agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each audited page is reachable to an agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 4/4 | 4 page(s) exceed the 250 KB threshold. Agents with limited fetch windows may stop reading before reaching the main content. | Largest page: 843 KB. Threshold: 250 KB. See neomwellbeing-pipeline-truncation-risk-pages.csv (4 pages). |
| SPA Shell | Fail | 1/4 | Content requires JavaScript to appear. Server-side agents (ChatGPT, Claude, Perplexity) see an empty shell when they fetch these pages. | Max gap score: 25. 0 means served and rendered match. Page: https://neomwellbeing.com/ |
| Soft 404 | Pass | 4/4 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 4/4 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.45. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 4/4 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 3 page(s) with tab widgets. |
| Delayed Content Start | Pass | 4/4 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 14% of the document on some pages. |
| Broken Code Fences | Pass | 4/4 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Fail | 4/4 | The server advertises content negotiation via Vary: Accept. Agents that ask for a different Accept header may receive different content than the browser version. | 4 page(s) advertise format negotiation. See neomwellbeing-pipeline-http-content-negotiation-(vary)-pages.csv (4 pages). |
| Cross-Host Redirect | Pass | 4/4 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 0 page(s) cross origin during redirect. |
| Generic Headings | Pass | 4/4 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | 4/4 | Actual prose content averages 45% of served bytes — well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 45%. Threshold: 30%. |
| Inline Tag Bloat | Fail | 4/4 | 4 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 80 element(s) > 500 bytes. Largest inline CSS: 71194 B. Largest inline JS: 68215 B. See neomwellbeing-pipeline-inline-tag-bloat-pages.csv (4 pages). |
| Head Weight | Pass | 4/4 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.14. Average: 0.12. Threshold: 0.50. |

**Pipeline Survivability score:** 72/100

Across the audited set, we identified four resilience checks that present opportunities to strengthen how machines read and retain the pages: Truncation Risk, SPA Shell, Content Negotiation, and Inline Tag Bloat. Truncation Risk stands out as the most pervasive, appearing on all four audited pages, which means machines processing these pages may cut off content before reaching key product or brand information. Resolving Truncation Risk across the audited set would have the largest single effect on pipeline survivability, since content that machines cannot fully ingest is content that cannot inform answers, citations, or structured outputs.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent the page is gone.

The Div Soup check runs against the rendered HTML on every page. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 20/100 | high | 573 | 66% | 9 | `div.star-container.yotpo-sr-star-full` (317), `div.flex.flex-col` (243), `div.flex.flex-row` (213), `div` (150), `div.star-container` (150) |

Across the audited set, we recorded a bare-div ratio of 573 of 867 elements (66%) on the rendered surface, meaning machines lose structural context and fall back on positional inference to determine meaning. The combination of a high bare ratio with a deepest chain of only 9 suggests this is a surface-wide pattern rather than a deep structural tangle; the top selectors point toward a utility-class framework (flex columns, flex rows) and a third-party reviews widget (the star-container clusters), both of which emit generic divs rather than typed landmarks. The most cost-effective first move is to wrap the obvious page landmarks in their appropriate semantic elements and assign meaningful class names to the remaining containers, which would reduce the bare-div ratio without requiring any restructuring of the visual layout.

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

**Coverage:** 7 of 7 audited URLs carry all five headers.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| /llms.txt | Yes | Yes | Yes | Yes | Yes |
| /llms-full.txt | Yes | Yes | Yes | Yes | Yes |
| /agents.md | Yes | Yes | Yes | Yes | Yes |
| / | Yes | Yes | Yes | Yes | Yes |
| /products/complete-bliss-standard-scented-candle | Yes | Yes | Yes | Yes | Yes |
| /products/perfect-night-sleep-luxury-scented-candle | Yes | Yes | Yes | Yes | Yes |
| /products/perfect-nights-sleep-standard-scented-candle | Yes | Yes | Yes | Yes | Yes |

HTTPS: 7/7 | HSTS: 7/7 | CSP: 7/7 | X-Frame-Options: 7/7 | X-Content-Type-Options: 7/7

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 100% | — |
| Canonical URL | 100% | — |
| Self-contained sections | 100% | — |

**Overall Consistency:** 100%

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no organisation-name or canonical-URL divergence flagged by the consistency check.

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Pass | Organisation name appears consistently across all 4 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 4-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

165 identical inline fragment(s) were found repeated across multiple pages, totalling 366 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes | Pages | Preview |
|------|-------|-------|---------|
| css | 1260 | 6 | .upsell-blocks {     margin-top: 1.5rem;   }      .upsell-ca |
| css | 358 | 6 | .yotpo-verified-image-icon{display:flex;flex-direction:colum |
| css | 288 | 6 | .yotpo-star-rating{display:flex;align-items:center}.yotpo-st |
| css | 107 | 6 | .yotpo-pagination-icon{fill:var(--text-color)}.yotpo-paginat |
| css | 99 | 6 | .yotpo-star-distribution-ph{display:flex;flex-direction:colu |
| css | 77 | 6 | .disabled,.yotpo-pagination-icon{fill:var(--text-color)}.dis |
| css | 4683 | 4 | #NavImageimage_BaUPxm1 .nav-block-image {       aspect-ratio |
| js | 4588 | 4 | {       "assets": {         "themeCssFile": null,         "l |
| css | 3932 | 4 | .yotpo-reviews-star-ratings-widget { display: flex;   a:empt |
| js | 3908 | 4 | class PredictiveSearchMobile extends HTMLElement {         c |

*Showing the top 10 of 165 duplicate fragments by occurrence count. The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `neomwellbeing-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Accessibility legislation across major markets, from the European Accessibility Act (Directive (EU) 2019/882, in force 28 June 2025) to Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada, has converged on ISO 14289-1 (PDF/UA) as the shared technical baseline, making structured tagging a legal expectation in every major jurisdiction we serve. The same structural tagging that satisfies those legal requirements also makes a PDF readable to machines: search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from an untagged or image-based PDF, whereas a properly tagged document with a complete structure tree is as transparent to machines as well-formed semantic HTML.

No PDF documents were discovered in the audited surface. Accessibility exposure on the document carrier: **low within the pages crawled**.

**Scope note:** this audit crawls a defined set of public pages: typically the home page, key content pages, and any pages linked directly from them. PDFs sitting behind login forms, linked only from uncrawled pages, stored in unlinked directories, or hosted on third-party domains are outside the crawl boundary and do not appear in this count. If your site publishes datasheets, white papers, investor documents, or product manuals that were not part of this crawl, a wider-scope PDF audit is needed before drawing conclusions about overall accessibility exposure on the document carrier.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 96 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Discovery Readiness improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a first-mover advantage in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4 (Compliance Risk) | Priority 1, 2, 3, 4 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | P1, P2, P3, P4, P5, P6, P7, P8, P9 (P1–P9) | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://neomwellbeing.com shows its strongest footing in Structured Data, scoring 74/100, with a well-populated schema layer that gives machines a reliable structured signal for products, ratings, and breadcrumbs. The sharpest opportunities lie in Discovery Readiness at 25/100 and Accessibility at 18/100, where gains in crawlability, metadata, and inclusive design would extend Neomwellbeing's reach to both machines and the full range of human visitors. We welcome the chance to walk the team through the detailed findings and a prioritised path forward.

### Audit Scores

Neomwellbeing serves an empty HTML shell to server-side agents. The "Rendering" column shows whether each score was measured from the served HTML (what agents actually get) or the rendered HTML (what agents would get with SSR).

| Dimension | Score | Rendering | Notes |
|-----------|-------|-----------|-------|
| AI Agent Suitability | 25/100 | Served | Empty shell — no content without JS |
| Accessibility | 18/100 | Rendered | Pa11y runs in a browser |
| SEO (all pages) | 73/100 | Rendered | Google renders JS; server-side agents do not |
| SEO (content pages) | 73/100 | Rendered |  |
| MX Stack Completeness | 51/100 | Rendered |  |
| Structured Data Quality | 74/100 | Rendered | JSON-LD in served head — valid for all agents |
| Commerce Visibility | 45/100 | Rendered |  |
| Discovery Readiness | 25/100 | Mixed | robots.txt/sitemap independent of rendering |
| Heading Quality | 61/100 | Rendered |  |
| Semantic Ratio | 7% | Rendered |  |
| Agent Readability | 65/100 | Rendered |  |
| Pipeline Survivability | 72/100 | Rendered |  |
| Cross-Page Consistency | 100% | Rendered |  |

Server-side agents see only the served HTML. The AI Suitability score reflects their experience. All other scores reflect what Neomwellbeing achieves after JavaScript renders.

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| /agents.md | 35 | 80 | — | 58 | 58 |
| / (nav) | 74 | 0 | 100 | 0 | -16 |
| /products/complete-bliss-standard-scented-candle | 90 | 0 | 100 | 0 | 0 |
| /products/perfect-night-sleep-luxury-scented-candle | 88 | 0 | 100 | 0 | 0 |
| /products/perfect-nights-sleep-standard-scented-candle | 79 | 0 | 100 | 0 | 0 |

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 73/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: 733 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 733   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set we catalogued 670 images in total. The format split breaks down as 377 JPEG, 97 SVG, and 24 PNG; we recorded zero WebP images across the audited pages. Alt-text coverage stands at 490 images carrying descriptive text, or 73.1% of the total, which leaves 180 images without alt text. Those 180 represent both a WCAG accessibility gap and a signal-loss issue for machines that rely on alt attributes to understand visual content.

On loading strategy, the picture is mixed. Of the 670 images, 363 carry `loading="lazy"`, and just 1 carries `loading="eager"`. The more significant figure is 306 images with no loading attribute at all. It is worth being precise here: no attribute is not the same as eager loading. When the attribute is absent, the browser applies its own heuristic, which varies by viewport position, connection type, and browser version. That unpredictability is distinct from the deliberate, consistent behaviour you get from either explicit value. We would recommend auditing those 306 to determine which should be lazy and which should be eager, then setting the attribute explicitly on each.

We also detected 265 instances of the JS Lazy Pattern across the audited set, and 137 images that qualify as Double Lazy. The JS Lazy Pattern refers to images whose source is deferred via JavaScript rather than the native loading attribute; machines that do not execute JavaScript will not see these images at all, which affects both crawl coverage and accessibility tooling. Double Lazy compounds the issue further: these are images flagged as both `loading="lazy"` and subject to JS-based deferral simultaneously, meaning they may never load in environments where scripting is restricted or slow.

> **Double-lazy loading pattern detected on 137 image(s).** These images carry BOTH the native HTML attribute `loading="lazy"` AND a JavaScript lazyload pattern (a placeholder `data:image/gif` in `src`, the real URL in `data-src`, and a `lazyload` class). The image cannot render until:
>
> 1. The lazyload JavaScript library loads and parses.
> 2. The script scans the DOM and swaps `data-src` → `src` on images entering the viewport.
> 3. The browser then honours `loading="lazy"` on the newly-swapped `src`, which may defer the fetch further.
>
> **Why this matters for above-the-fold imagery** (hero banners, logos, navigation thumbnails): the hero never renders during the initial HTML parse because the real URL is not in the document yet. Core Web Vitals (LCP) and human perception of speed both pay the cost. AI agents that fetch static HTML without running JavaScript see only the placeholder `data:image/gif` and miss the image entirely.
>
> **Recommended remediation:** for above-the-fold images, put the real URL in `src`, use `loading="eager"` and `fetchpriority="high"`, and remove the lazyload class. For below-the-fold images, keep one strategy — either native `loading="lazy"` (simpler, widely supported) or the JavaScript lazyload library, not both.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** Metadata Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** The audit fingerprints the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Shopify**. The main audit uses Shopify-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** Every internal link discovered on every audited page is recorded with its URL, anchor text, and link type. The audit does not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 5 pages analysed | Platform: Shopify | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

---

## Appendix E: Scoring Methodology

Every score in this report is bounded 0-100 with the same four-band scale (Excellent ≥76, Good ≥51, Could Be Better ≥26, Needs Improvement <26). The table below names each score's inputs and weights so the number can be traced back to the underlying signals: useful when a stakeholder asks "why is this 51 and not 70?"

**Bands (universal):** Excellent ≥76 · Good ≥51 · Could Be Better ≥26 · Needs Improvement <26.

### Served HTML Score (`servedHtml`)

*Scale: 0-100 · Bucket: ai-opportunity*

What an AI agent sees when it fetches the raw HTML before JavaScript runs. Aggregates 27 dimensions across semantic HTML, forms, structured data, metadata, validation, and pipeline patterns.

| Input | Weight |
|-------|--------|
| Semantic HTML landmarks (main / nav / header / footer / article-or-section) | 3-6 each, sum ≤20 |
| Form fields with standard name attributes | ≤15 (× ratio) |
| Form fields with associated labels | ≤10 (× ratio) |
| Form autocomplete coverage | ≤15 (× ratio) |
| Schema.org JSON-LD present + required-property + recommended-property coverage | 5 + 5 + 3 (+2 validation bonus) |
| FAQ schema present + completeness | 8 + 5; -3 if duplicate markup |
| llms.txt referenced | 10 |
| robots.txt: ai.txt reference / agent restrictions | +5 / -5 |
| Tables with scope + caption, or no tables | 10 / 10 |
| Open Graph + Twitter Card + completeness | 8 + 5 + 7 |
| SEO meta tag completeness | ≤5 (× ratio) |
| Reading time metadata (ISO 8601) + completeness | 5 + 5 |
| HTML validation: no-issues bonus, per-issue penalties (ampersand / role / aria / non-semantic) | +10; -1 / -1 / -2 / -1 each |
| Schema type disambiguation: proper / multi-type penalty | +5 / -3 each |
| Inline CSS: external-only bonus / inline penalty | +8 / -10 (× ratio) |
| Heading hierarchy: perfect / jump penalty / multiple-H1 penalty | +10 / -5 each / -5 |
| Pre-rendering: prerendered / empty SPA root penalty | +20 / -20 |
| PDF content: HTML alternative / PDF-only penalty | +10 / -20 each |
| SSR with content / SSR without content penalty | +20 / -20 |
| DOM order: main-first / sidebar-before-main / nav-before-main | +5 / -10 / -5 |
| Pricing tables: with schema / without penalty | +15 / -10 |
| Product variants present | 10 |
| AJAX with real URLs / hash-based SPA penalty | +10 / -10 |
| Table abuse: layout-table penalty / proper data table | -15 each / +5 |
| Iframe with alternative / without alternative penalty | +5 / -10 each |
| Definition lists / skeleton / progressive enhancement / multiple authors / content separation | 5 / 5 (penalty -5) / 5 / 3 / 5 |
| MX governance tags: hasBothRequired / hasStatus / hasContentType / optional / unknown / validation issues | +3 / +1 / +1 / +1 each (cap 2) / -1 each / -1 each |

**What moves this score:**

- Add semantic HTML5 landmarks (main, nav, header, footer): quickest visible jump.
- Publish llms.txt and reference it from robots.txt or meta: +10 to +25 combined.
- Add Schema.org JSON-LD with at least the required properties for the page's primary type.
- Remove layout tables and inline style attributes: large hidden penalties.
- Pre-render content (SSR or static export): empty SPA roots cost -20.

### Rendered HTML Score (`renderedHtml`)

*Scale: 0-100 · Bucket: ai-opportunity*

Served HTML plus what becomes visible after JavaScript executes: what a browser-rendered agent sees. Bonus capped at +30 over Served HTML; dynamic-content penalties (carousels, autoplay, JS-dependent pricing) drag it back down.

| Input | Weight |
|-------|--------|
| Base: Served HTML Score (0-100) | starting value |
| Data attributes: hasDataState / hasValidationState / hasLoadingIndicators | +7 / +5 / +3 |
| Error handling: persistent errors / aria-invalid | +10 / +5 |
| Carousels: informational without proper a11y / decorative | -8 / -3 each |
| Autoplay video without controls (WCAG 2.2.2) | -8 each |
| Animated GIF without alt | -3 each |
| Animation library (typed.js, type-it) | -2 |
| Visual dynamism with active animation library | -5 |
| JavaScript-dependent pricing | -15 |

**What moves this score:**

- Eliminate JavaScript-dependent pricing: single largest rendered-only lever (-15).
- Provide caption/transcript for autoplay video and alt for animated GIFs.
- Annotate carousels with proper ARIA role / aria-roledescription.
- Use data-state / data-loading attributes so agents can interpret UI state without DOM heuristics.

### Discovery Readiness (`discoveryReadiness`)

*Scale: 0-100 · Bucket: ai-opportunity*

Can an AI agent find your site and know what it's allowed to do? Scores robots.txt + sitemap + llms.txt + Schema.org + ai.txt as one bundle.

| Input | Weight |
|-------|--------|
| robots.txt present (or robots meta) | 15 |
| No agent restrictions in robots.txt | 10 |
| llms.txt present (referenced or meta) | 20 |
| llms.txt referenced directly from the page | 15 |
| Sitemap linked from robots.txt | 15 (full) or 8 (alternate) |
| Schema.org JSON-LD present | 15 |
| ai.txt referenced in robots.txt | 10 |

**What moves this score:**

- Publish /llms.txt at the site root: +20 to +35 combined (presence + reference + content).
- Add a Schema.org JSON-LD block with at least one entity: +15.
- Link sitemap from robots.txt: +15 (vs +8 if only alternate path).

### Metadata Stack Completeness (MX Stack) (`metadataStackCompleteness`)

*Scale: 0-100 · Bucket: ai-opportunity*

How complete is the seven-layer MX metadata stack? Uses an applicable-points denominator: score isn't dragged down by checks that don't apply (e.g. no forms means form-label checks are excluded from the denominator).

| Input | Weight |
|-------|--------|
| Semantic landmarks (max 15 across main/nav/header/footer/article-or-section) | ≤15 |
| SEO meta: description (5) + canonical (5) + completeness (≤5) | ≤15 |
| Social: OpenGraph (8) + Twitter (4) + completeness (≤3) | ≤15 |
| Discovery: llms.txt (8) + robots.txt (4) + permissive (3) | ≤15 |
| Structured data: schema.org (10) + required props (≤5) + recommended (≤5) | ≤20 |
| Skip link | 4 |
| Forms (if present): label ratio (≤3) + name ratio (≤3) | ≤6 (applicable only when forms exist) |
| MX governance: both required (6) or one (3) + optional (≤4) | ≤10 |

**What moves this score:**

- Fill in OpenGraph + canonical + meta description: quick wins for the SEO + Social layers.
- Add MX governance tags (mx-status, mx-content-type): only 6 points but no other way to earn them.
- Improve Schema.org required/recommended coverage: the largest single layer (≤20).

### Structured Data Quality (SDQ) (`structuredDataQuality`)

*Scale: 0-100 · Bucket: ai-opportunity*

How good is the structured data, given that it exists? Seven components: penalty cap at 5 if JSON-LD exists but uses a non-schema.org vocabulary.

| Input | Weight |
|-------|--------|
| Presence: schema.org JSON-LD exists | 10 |
| Required-property coverage: WORST entity (one broken entity isn't hidden by good ones) | ≤25 |
| Recommended-property coverage: average across entities | ≤15 |
| Entity richness: avg content properties; 3-5 props = 5pt, 6-9 = 10pt, 10+ = 15pt | ≤15 |
| Cross-entity references: nested @type + @id linking | ≤15 (10 nesting + 5 @id) |
| Linked-data signals: sameAs / mainEntityOfPage / isPartOf etc., +1 each capped 10 | ≤10 |
| Vocabulary validity: fraction of @type values in Schema.org whitelist | ≤10 |

**What moves this score:**

- Audit your worst entity first: required-property coverage uses the minimum, not the average.
- Add cross-entity @id references: wires the graph and unlocks 15 points.
- Include linked-data signals (sameAs to Wikidata, mainEntityOfPage): easy +5 to +10.

### Agent Readability (`agentReadability`)

*Scale: 0-100 · Bucket: ai-opportunity*

How easy is the content for an AI agent to parse and quote? Applicable-points denominator: checks for code blocks only apply when code exists.

| Input | Weight |
|-------|--------|
| Self-contained (no orphan backward references) | 15 / 8 partial |
| Code blocks: language tag + comment coverage (if code present) | ≤20 |
| Section length quality (if ≥2 sections) | 15 / 8 partial |
| Content position: important content first + CTA last | 15 / 10 / 5 |
| Error documentation (if ≥2 code blocks) | 10 |
| Progressive disclosure (if ≥5 sections) | 10 |
| Heading quality (folded in as 15% of heading-quality score) | ≤15 |

**What moves this score:**

- Move important content to the top, CTAs to the bottom: content position is worth 15.
- Resolve backward references inline: 'as discussed above' costs 7-15 points.
- Add language tags to code blocks; document errors structurally.

### Heading Quality (`headingQuality`)

*Scale: 0-100 · Bucket: compliance-risk*

Semantic structure measured at the heading hierarchy. Counts as Compliance Risk because heading order is an accessibility concern (screen-reader navigation, WCAG 1.3.1).

| Input | Weight |
|-------|--------|
| H1 present + unique | 25 (or 10 if multiple) |
| Zero heading-level jumps | 25 (else 25 − 8 per jump) |
| H2 present | 15 |
| H3+ present | 15 (or 8 if only H2) |
| Heading-to-word ratio (50-500 words/heading optimal) | 20 / 15 / 12 / 5 |
| Full-page-spanning jumps | -5 each |

**What moves this score:**

- Ensure exactly one H1 per page.
- Eliminate level jumps (no H2 → H4 without an intervening H3).
- Aim for one heading per 50-500 words: too sparse or too dense both lose points.

### Pipeline Survivability (`pipelineSurvivability`)

*Scale: 0-100 · Bucket: ai-opportunity*

Will the content survive the journey through an AI's ingestion pipeline? Thirteen weighted binary issue-mode checks; returns score + failedChecks[]. See MX Protocols Appendix S.

| Input | Weight |
|-------|--------|
| truncationRisk (weight 3) | 3 |
| servedRenderedGap (weight 3) | 3 |
| softFourOhFour (weight 3) | 3 |
| boilerplateBurial (weight 2) | 2 |
| tabbedDisclosure (weight 2) | 2 |
| contentStartPosition (weight 2) | 2 |
| inlineTagBloat (weight 2) | 2 |
| headWeight (weight 2) | 2 |
| brokenCodeFences (weight 1) | 1 |
| bodyContentRatio (weight 1) | 1 |
| contentNegotiation (weight 1) | 1 |
| redirectChain (weight 1) | 1 |
| headingSpecificity (weight 1) | 1 |

**What moves this score:**

- Fix any check that fails with weight 3 first: biggest score per fix (truncation, served/rendered gap, soft-404).
- Resolve boilerplate burial (content trapped behind nav/footer): weight 2, common.
- Eliminate redirect chains and broken code fences: low weight but quick to fix.

### Performance (`performance`)

*Scale: 0-100 (derived from load time) · Bucket: cross-cutting*

Scorecard-only band derived from average page load time. The audit does NOT generate prose about Performance: the figure is informational, treat the underlying load-time average and FCP/CLS/TBT for diagnosis. Reported in both the Compliance Risk and AI Opportunity contexts because slow pages exclude users AND make pipeline ingestion brittle.

| Input | Weight |
|-------|--------|
| Average page load time across all audited pages | score = max(0, 100 - avgLoadTimeMs / 100) |

**What moves this score:**

- Eliminate render-blocking resources in <head>.
- Defer non-critical JavaScript.
- Compress and lazy-load images below the fold.

### SEO (`seo`)

*Scale: 0-100 · Bucket: cross-cutting*

Per-page SEO score averaged across audited pages. Aggregates 13 scoring functions (title, meta description, URL, H1, content length, content quality, internal linking, image optimisation, page speed, mobile, security, structured data, social tags).

| Input | Weight |
|-------|--------|
| titleOptimization (30-60 chars optimal) | 10 |
| metaDescriptionOptimization (70-160 chars optimal) | 8 |
| urlStructure (lowercase, no underscores, ≤4 levels) | 7 |
| h1Optimization (present, ≤70 chars) | 6 |
| contentLength (200-800 words optimal) | 8 |
| contentQuality (keyword in title/meta/h1, h2/h3 presence) | 9 |
| internalLinking (1-10 links) | 7 |
| imageOptimization (alt text or decorative) | 6 |
| pageSpeed (load time 1000-5000ms band) | 9 |
| mobileOptimization (responsive meta tag) | 8 |
| securityFactors (HTTPS) | 7 |
| structuredData (any present) | 6 |
| socialMediaTags (OpenGraph or Twitter Card) | 5 |

**What moves this score:**

- Optimise title (30-60 chars) and meta description (70-160 chars): high weight, low effort.
- Ensure HTTPS, responsive meta tag, and OpenGraph are all present: three quick foundation wins.
- Lift weakest content pages to 200+ words; resolve URL structure issues (underscores, uppercase, query strings).

### Accessibility (Pa11y WCAG 2.1 AA) (`accessibility`)

*Scale: 0-100 · Bucket: compliance-risk*

Pa11y-derived per-page score against WCAG 2.1 Level AA. The audit reports Pa11y's raw issue counts (errors, warnings, notices) alongside the numeric score so legal/HR reviewers see both the headline number and the underlying violations.

| Input | Weight |
|-------|--------|
| Pa11y errors (WCAG 2.1 AA violations) | -5 each |
| Pa11y warnings (likely WCAG concerns) | -2 each |
| Pa11y notices (informational findings) | -0.5 each |

**What moves this score:**

- Fix Pa11y errors first: heaviest penalty, also strongest legal exposure under EAA / WCAG.
- Resolve duplicate IDs, missing form labels, low-contrast text: common high-frequency errors.
- Reduce notices last: they have the smallest score impact but the largest catalogue noise.

---

\clearpage

## Further Reading

Every book appendix cited in this report, plus the book itself. Click the link on screen or scan the QR code on paper: both encode the same URL.

| Scan | Link and description |
| :----: | -------------------- |
| ![Appendix R QR](assets/qr/appendix-r.png){ width=15mm } | **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)**: the methodology behind the Pipeline Survivability measurements used in this report.\ <https://mx.allabout.network/books/appendices/appendix-r.html> |
| ![Appendix S QR](assets/qr/appendix-s.png){ width=15mm } | **[MX: The Protocols Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**: the full catalogue of reading-resilience checks scored in the Agent Reading Pipeline section.\ <https://mx.allabout.network/books/appendices/appendix-s.html> |
| ![Appendix M QR](assets/qr/appendix-m.png){ width=15mm } | **[MX: The Protocols Appendix M: Index of Metadata](https://mx.allabout.network/books/appendices/appendix-m.html)**: the full field dictionary governing the MX governance tags referenced throughout this report.\ <https://mx.allabout.network/books/appendices/appendix-m.html> |
| ![llms.txt guide QR](assets/qr/llms-txt-guide.png){ width=15mm } | **[Why llms.txt Probably Isn't Working: And What to Do About It](https://mx.allabout.network/blog/llms-txt-guide.html)**: a guide to the two structural problems most llms.txt implementations have (MIME type and sitemap registration).\ <https://mx.allabout.network/blog/llms-txt-guide.html> |
| ![Books index QR](assets/qr/books-index.png){ width=15mm } | **[Get the books](https://mx.allabout.network/books/)**: MX: The Intro (free), MX: The Handbook, and MX: The Protocols. The full reference for every concept this report draws on.\ <https://mx.allabout.network/books/> |

---

**Date:** 16 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*