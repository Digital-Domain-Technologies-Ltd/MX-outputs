---
title: "Neomwellbeing: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-13"
modified: "2026-05-13"
client: "Neomwellbeing"
clientSlug: "neomwellbeing"
clientUrl: "https://neomwellbeing.com"
reportId: "neomwellbeing-WEB-AUDIT-20260513"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-13"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Neomwellbeing"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 35
accessibilityScore: 9
seoScore: 79
llmSuitabilityScore: 24
totalIssues: 204
pagesAudited: 10
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
**Date:** 13 May 2026\
**Report ID:** neomwellbeing-WEB-AUDIT-20260513

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
| SEO | **79**/100 | `####################-----` |
| Machine Suitability | **24**/100 | `######-------------------` **(!)** |
| MX Stack | **47**/100 | `############-------------` **(!)** |
| Agent Readability | **63**/100 | `################---------` |
| Pipeline Survivability | **76**/100 | `###################------` |

Neomwellbeing has built something that genuinely resonates with human visitors. The brand carries a clear, considered identity, and across the audited set we found that the SEO foundations are solid — scoring 79/100 — meaning the content is well-structured, the page signals are coherent, and organic discovery for human audiences is working. That is a meaningful foundation to build from, and it tells us the editorial and product work has been done with care.

The next step is to address two parallel opportunities that sit beneath that strong human-facing surface. First, and as a Priority 1 compliance matter, we want to name accessibility directly: we detected 204 critical WCAG AA issues across the audited set, and we want to be clear that this carries legal and reputational weight that warrants prompt attention. The encouraging news is structural — 183 of those 204 issues trace back to just 21 recurring template patterns, which means a single theme-level edit per pattern has the potential to resolve the vast majority of instances in one pass. Second, the headline opportunity for growth is machine readiness. Discovery Readiness sits at 24/100 and MX Readiness is currently at Level 1 (Basic), which means machines — search crawlers, AI agents, and automated catalogue systems — receive fewer of the signposts needed to understand, categorise, and surface what Neomwellbeing sells. Structured Data Quality at 68/100 and Catalogue Visibility at 45/100 point to a clear and addressable path forward.

The groundwork is there. Schema.org JSON-LD is the highest-leverage asset available here, because every machine can read it regardless of how a page is rendered — making it the most durable investment for a Shopify environment where rendering behaviour can affect what automated tools actually receive. We audited 10 pages from a sitemap of 910, so the patterns we describe are indicative of template-level conditions rather than isolated incidents; resolving them at the theme level means the benefit extends across the catalogue rather than requiring page-by-page remediation.

> 

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, SEO performs well at 79/100, though the accessibility score of 9/100 — driven by 204 issues that trace largely to 21 repeating template patterns — represents the clearest opportunity to improve the experience for human visitors.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Good | B |
| Accessibility (WCAG) | Needs Improvement | D |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can reliably receive and process content — Pipeline Survivability of 76/100 confirms that — yet Discovery Readiness (24/100) and Metadata Stack Completeness (47/100) indicate that machine classification, categorisation, and citation signals are not yet complete.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 24/100 | Needs Improvement | D |
| Structured Data Quality | 68/100 | Good | B |
| MX Stack Completeness | 47/100 | Needs Improvement | D |
| Pipeline Survivability | 76/100 | Excellent | A |

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

**Evidence:** MSC 47/100 | SDQ 68/100 | Discovery 24/100 | Consistency 93%

**To reach the next level:** Add full MX fields and governance metadata. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

The ten pages we audited reveal a foundation that is genuinely solid in several respects — strong security headers, respectable SEO scores, and high structured-data consistency give you real groundwork to build on as we address the opportunities ahead.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Good | Good — 4402ms average load time |
| SEO (content pages) | 79 | Excellent — titles, meta descriptions, canonical URLs in place |
| Security | 5/5 | HTTPS, HSTS, CSP, X-Frame-Options, X-Content-Type-Options on every page |
| Structured Data | 68 | Good — JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 57 | Good — single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 93% | 93% — same metadata patterns across every page |
| Agent access | 6/6 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- Security headers are in place on every page — HTTPS, HSTS, Content-Security-Policy, X-Frame-Options, and X-Content-Type-Options on 12 of 12 audited pages.
- Commerce schema is present on every product page — 8 of 8 product pages carry both Product and Offer entities.
- All 8 tested AI agents can fetch the site — ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Body content ratio averages 50% — pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

The table below presents our findings across the audited set, prioritised by the impact each opportunity carries for the audiences that matter most — from machines reading structured data to the humans those machines surface content to. Discovery gaps lead the order because they block everything downstream: a score of 24/100 here means that even strong structured data (68/100) and metadata (47/100) are working against a weakened foundation.

## At-a-Glance Findings

| # | Finding | Priority | Effort | Impact |
|---|---------|----------|--------|--------|
| 1 | Accessibility 9/100 — 204 issues across the audited set; 183 (88%) trace to 21 template-level patterns (WCAG 4.1.1, 3.2.2, 1.3.1) | High | Medium | Assistive tech users and keyboard-only users may miss or be unable to interact with core page functions |
| 2 | Discovery Readiness 24/100 — Served HTML score 24/100; machines risk missing content not present in served markup | High | Medium | Machines indexing served HTML are less likely to surface audited pages accurately |
| 3 | Semantic Structure — Rendered score 20/100; 573 bare divs out of 867 total elements | High | High | Screen readers and machines may miss content hierarchy and page intent |
| 4 | Metadata Stack Completeness 47/100 — missing or incomplete metadata signals across the audited set | Medium | Low | Machines are less likely to classify and surface pages with confidence |
| 5 | Heading Quality 57/100 — heading structure below threshold across the audited set | Medium | Low | Screen reader users and machines may miss accurate content hierarchy |
| 6 | Structured Data Quality 68/100 — schema present but incomplete; falls below the 70-point threshold | Medium | Medium | Machines risk missing entity relationships and rich-result eligibility |
| 7 | Security headers — all five headers confirmed present on all 12 audited pages | Medium | Low | No action required; configuration is at the expected baseline |
| 8 | Performance — 4402ms average load time across the audited set | Medium | Medium | Users on slower connections risk elevated bounce before content renders |

---

**Priority 1: Accessibility 9/100 — 204 Issues Tracing to 21 Template-Level Patterns (WCAG 4.1.1, 3.2.2, 1.3.1)**

**Finding:** We recorded an accessibility score of 9/100 across the audited set, with 204 issues identified. Of these, 183 (88%) trace to 21 recurring template-level patterns, meaning a single theme edit per pattern resolves all instances rather than requiring page-by-page remediation. The five highest-impact patterns from Pa11y are detailed below.

**What to change and why:**

- **WCAG 4.1.1 — Duplicate `id` value `"quantity"` (21 instances on 9 pages):** Each `id` attribute must be unique within a document. Duplicate IDs cause assistive technologies to resolve to the wrong element, breaking form labelling, ARIA references, and in-page navigation. Resolving this pattern in the theme template removes all 21 instances at once and restores reliable programmatic association for assistive tech users.
- **WCAG 4.1.1 — Duplicate `id` value `"mini-cart"` (9 instances on 9 pages):** The same uniqueness requirement applies to the mini-cart component. Screen readers and automated machines use `id` references to build the accessibility tree; duplicates cause conflicts that reduce confidence in page structure. A theme-level fix eliminates all 9 instances.
- **WCAG 3.2.2 — Forms without a submit button (9 instances each on the header selector and the predictive-search selector, across 9 pages):** Forms that rely solely on JavaScript activation for submission cannot be completed by keyboard-only users when scripting behaviour is inconsistent. WCAG 3.2.2 requires that context changes initiated by a form are predictable; the absence of a recognised submit button violates this. Adding a conformant submit element to each form template restores keyboard accessibility for all users and resolves both selector patterns simultaneously.
- **WCAG 1.3.1 — Empty heading tags (9 instances on 9 pages, selector `#shopify-section-sections--25230890140031__redirection_popup…`):** Empty heading elements are announced by screen readers as structural landmarks with no content, creating confusion and eroding trust in page structure. WCAG 1.3.1 requires that information conveyed through presentation is also available programmatically. Removing or replacing empty heading tags in the redirection popup template resolves all 9 instances and improves both screen reader experience and machine parsing of content hierarchy.

**Effort:** Medium

---

**Priority 2: Discovery Readiness 24/100 — Served HTML Score 24/100**

**Finding:** We recorded a Discovery Readiness score of 24/100 across the audited set, with the served HTML score also at 24/100. This means the markup delivered before any client-side execution is thin relative to what machines need to index content reliably.

**What to change and why:**

- **Move critical content into served HTML:** Machines that index or evaluate pages from the initial server response — including search crawlers operating in their first-wave pass — are less likely to surface content that is absent from served markup. Ensuring that primary headings, product descriptions, and navigational context are present in the served response directly improves Discovery Readiness and Pipeline Survivability (currently 76/100).
- **Review content that depends on client-side execution:** Where content is conditionally rendered after page load, we recommend auditing which elements machines are most likely to read on first request — beginning with the homepage (`https://neomwellbeing.com/`), which the SPA Shell check identified as the page with the largest gap between served and rendered content. Prioritise moving those elements into the served response to reduce the gap between what users see and what machines receive.
- **Align served and rendered content signals:** A large gap between served and rendered content creates ambiguity for machines attempting to classify page intent. Closing this gap reduces the risk that audited pages are assigned lower relevance or confidence scores by automated pipelines.

**Effort:** Medium

---

**Priority 3: Semantic Structure — Rendered Score 20/100; 573 Bare Divs out of 867 Total Elements**

**Finding:** We recorded a semantic structure rendered score of 20/100 across the audited set. Of 867 total elements counted, 573 are bare divs — a ratio that indicates the majority of the page structure carries no semantic meaning for machines or assistive technologies.

**What to change and why:**

- **Replace non-semantic containers with appropriate landmark and sectioning elements:** Where divs are used purely for layout, replacing them with semantically meaningful elements allows screen readers to navigate by landmark and allows machines to infer content relationships. This directly addresses the 20/100 rendered score and improves the accessibility tree quality identified in Priority 1.
- **Prioritise high-frequency template regions first:** Because 573 of 867 elements are bare divs, the highest return on effort comes from addressing recurring structural patterns in shared templates — header, footer, product card, and navigation regions — rather than individual pages. Each template fix reduces the ratio across all pages that use it.
- **Semantic structure supports machine content classification:** Machines use document structure to assign weight and relevance to content blocks. A page dominated by undifferentiated containers reduces machine confidence in what constitutes a heading, a product description, or a navigational element — all of which feed into Discovery Readiness (currently 24/100).

**Effort:** High

---

**Priority 4: Metadata Stack Completeness 47/100 — Incomplete Metadata Signals**

**Finding:** We recorded a Metadata Stack Completeness score of 47/100 across the audited set, indicating that a significant portion of the expected metadata signals are missing or incomplete.

**What to change and why:**

- **Complete missing metadata fields to improve machine classification:** The MX Stack Completeness score of 47/100 means machines are less likely to classify audited pages with confidence, which feeds directly into the low Discovery Readiness score of 24/100. The Cross-Page Consistency table records Open Graph tags as not present across the 10 audited pages; adding Open Graph tags to those pages and confirming that canonical tags are consistent across them is the lowest-effort route to raising this score.

**Effort:** Low

---

**Priority 5: Heading Quality 57/100 — Heading Structure Below Threshold**

**Finding:** We recorded a Heading Quality score of 57/100 across the audited set. Heading structure is used by both screen readers and machines as the primary map of content organisation on a page.

**What to change and why:**

- **Resolve the empty heading instances identified in WCAG 1.3.1 (Priority 1):** Empty heading tags directly depress the Heading Quality score. Resolving the 9 template-level instances identified by Pa11y will produce an immediate improvement to this metric while simultaneously addressing an accessibility criterion.
- **Ensure heading levels follow a logical hierarchy:** Where headings skip levels or are used for visual styling rather than structure, screen reader users receive a misleading document outline and machines are less likely to infer accurate content priority. Correcting hierarchy in shared templates maximises the fix-to-impact ratio.
- **Heading quality feeds machine content extraction:** Machines that summarise or extract content from pages rely heavily on heading signals. A score of 57/100 indicates that content extraction confidence is reduced across the audited set, which in turn affects Discovery Readiness.

**Effort:** Low

---

**Priority 6: Structured Data Quality 68/100 — Schema Present but Incomplete**

**Finding:** We recorded a Structured Data Quality score of 68/100 across the audited set. Schema markup is present, which is a positive baseline, but the score falls just below the 70-point threshold, indicating gaps that reduce rich-result eligibility and machine entity resolution.

**What to change and why:**

- **Complete the missing recommended properties on Product and Offer entities:** We identified 73 specific property gaps across the audited set. The highest-frequency gaps are `description`, `sku`, and `brand` on Product (8 instances each across 8 pages), and `seller`, `itemCondition`, and `url` on Offer (8 instances each across 8 pages). Adding these properties is the most direct route to moving the score above the 70-point threshold.
- **Validate schema against current specifications:** Schema requirements evolve; properties that were optional in earlier specifications may now be required for rich-result eligibility. Confirming that the Product and Offer blocks on the 8 product pages meet the current specification will identify which remaining gaps are suppressing the score.
- **Structured data completeness supports Discovery Readiness:** Richer, more complete schema gives machines additional signals beyond page content alone. Improving this score from 68/100 contributes incrementally to closing the Discovery Readiness gap (currently 24/100).

**Effort:** Medium

---

**Priority 7: Security Headers — All Five Headers Confirmed Present**

**Finding:** We confirmed that all five standard security headers — HTTPS, HSTS, Content-Security-Policy, X-Frame-Options, and X-Content-Type-Options — are present across all 12 audited pages. This is the expected baseline for any production website, and no corrective action is required.

**What to maintain:**

- **Security header presence is a trust signal for some machines:** Certain automated pipelines and crawlers factor security posture into quality assessments. The current configuration (12/12 pages passing all five checks) supports this.

**Effort:** Low

---

**Priority 8: Performance — 4402ms Average Load Time**

**Finding:** We recorded an average load time of 4402ms across the audited set. Load time at this level risks user drop-off before content becomes interactive, particularly on slower connections.

**What to change and why:**

- **Profile the load waterfall to identify the largest contributors to the 4402ms average:** Performance improvements follow a diminishing-returns curve; identifying the top contributors first ensures effort is directed where it moves the metric most. Common categories to investigate include render-blocking resources and unoptimised assets — but the specific causes should be confirmed from the audited pages' waterfall data rather than assumed.
- **Load time affects both user experience and machine crawl efficiency:** Machines operating under crawl-budget constraints are less likely to fully index pages that respond slowly. Reducing average load time from 4402ms improves the probability that machines traverse and index deeper content across the audited set.
- **Performance gains compound with Discovery Readiness improvements:** Faster served responses make it more likely that machines capture content in their first-wave pass, amplifying the benefit of the served HTML improvements recommended in Priority 2.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen the site's machine readiness.

- **Organization with `sameAs`** — linking the Neomwellbeing entity to verified external profiles (such as Wikidata or LinkedIn) would give machines a confident anchor for brand disambiguation across knowledge graphs, and is straightforward to add once a base `Organization` block is in place.

- **`aggregateRating` property on Product entities** — the Structured Data Findings table shows `aggregateRating` missing as a recommended property on all 8 audited product pages; adding it to the Product schema block on those 8 audited pages would allow machines to surface credibility signals directly in AI-generated responses and rich results, without requiring any additional crawl.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in `robots.txt` — declaring a content-use policy for machines would clarify which material may be used for AI training or summarisation, a low-effort addition to `robots.txt` that requires no changes to page templates.

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
|--------|--------|
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

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. Median response time of three cache-busted GETs — healthy at or below 1500ms, acceptable up to 3000ms, slow above 3000ms.

| Page | Crawler baseline | Re-probe samples | Median | Verdict |
|------|------------------|------------------|--------|---------|
| Slowest: https://neomwellbeing.com/products/feel-refreshed-luxury-scented-candle | 6521 ms | 1035ms, 238ms, 898ms | **898 ms** | Healthy |
| Median: https://neomwellbeing.com/products/perfect-nights-sleep-standard-scented-candle | 4239 ms | 974ms, 872ms, 1046ms | **974 ms** | Healthy |

**Verdict:** Server response time is within healthy bounds for both the slowest page and a median-load page.

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
Disallow: /carts
Disallow: /account
Disallow: /collections/*sort_by*
Disallow: /*/collections/*sort_by*
Disallow: /collections/*+*
Disallow: /collections/*%2B*
Disallow: /collections/*%2b*
Disallow: /*/collections/*+*
Disallow: /*/collections/*%2B*
Disallow: /*/collections/*%2b*
Disallow: */collections/*filter*&*filter*
Disallow: /blogs/*+*
Disallow: /blogs/*%2B*
Disallow: /blogs/*%2b*
Disallow: /*/blogs/*+*
Disallow: /*/blogs/*%2B*
Disallow: /*/blogs/*%2b*
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*
Disallow: /policies/
Disallow: /*/policies/
Disallow: /*/*?*ls=*&ls=*
Disallow: /*/*?*ls%3D*%3Fls%3D*
Disallow: /*/*?*ls%3d*%3fls%3d*
Disallow: /search
Disallow: /apple-app-site-association
Disallow: /.well-known/shopify/monorail
Disallow: /cdn/wpm/*.js
Disallow: /recommendations/products
Disallow: /*/recommendations/products
Disallow: /services/login_with_shop
Disallow: /products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /*/products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /collections/*/products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /*/collections/*/products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /*.atom
Disallow: /wellbeing-scent-finder-get-results/

User-agent: adsbot-google
Allow: /
Disallow: /checkouts/
Disallow: /checkout
Disallow: /carts
Disallow: /orders
Disallow: /2825683008/checkouts
Disallow: /2825683008/orders
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*
Disallow: /cdn/wpm/*.js
Disallow: /products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /*/products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /collections/*/products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /*/collections/*/products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /services/login_with_shop

User-agent: Nutch
Allow: /
Disallow: /

User-agent: AhrefsBot
Allow: /
Disallow: /a/downloads/-/*
Disallow: /admin
Disallow: /cart
Disallow: /orders
Disallow: /checkouts/
Disallow: /checkout
Disallow: /2825683008/checkouts
Disallow: /2825683008/orders
Disallow: /carts
Disallow: /account
Disallow: /collections/*sort_by*
Disallow: /*/collections/*sort_by*
Disallow: /collections/*+*
Disallow: /collections/*%2B*
Disallow: /collections/*%2b*
Disallow: /*/collections/*+*
Disallow: /*/collections/*%2B*
Disallow: /*/collections/*%2b*
Disallow: */collections/*filter*&*filter*
Disallow: /blogs/*+*
Disallow: /blogs/*%2B*
Disallow: /blogs/*%2b*
Disallow: /*/blogs/*+*
Disallow: /*/blogs/*%2B*
Disallow: /*/blogs/*%2b*
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*
Disallow: /policies/
Disallow: /*/policies/
Disallow: /*/*?*ls=*&ls=*
Disallow: /*/*?*ls%3D*%3Fls%3D*
Disallow: /*/*?*ls%3d*%3fls%3d*
Disallow: /search
Disallow: /apple-app-site-association
Disallow: /.well-known/shopify/monorail
Disallow: /cdn/wpm/*.js
Disallow: /services/login_with_shop
Disallow: /products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /*/products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /collections/*/products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /*/collections/*/products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote

User-agent: AhrefsSiteAudit
Allow: /
Disallow: /a/downloads/-/*
Disallow: /admin
Disallow: /cart
Disallow: /orders
Disallow: /checkouts/
Disallow: /checkout
Disallow: /2825683008/checkouts
Disallow: /2825683008/orders
Disallow: /carts
Disallow: /account
Disallow: /collections/*sort_by*
Disallow: /*/collections/*sort_by*
Disallow: /collections/*+*
Disallow: /collections/*%2B*
Disallow: /collections/*%2b*
Disallow: /*/collections/*+*
Disallow: /*/collections/*%2B*
Disallow: /*/collections/*%2b*
Disallow: */collections/*filter*&*filter*
Disallow: /blogs/*+*
Disallow: /blogs/*%2B*
Disallow: /blogs/*%2b*
Disallow: /*/blogs/*+*
Disallow: /*/blogs/*%2B*
Disallow: /*/blogs/*%2b*
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*
Disallow: /policies/
Disallow: /*/policies/
Disallow: /*/*?*ls=*&ls=*
Disallow: /*/*?*ls%3D*%3Fls%3D*
Disallow: /*/*?*ls%3d*%3fls%3d*
Disallow: /search
Disallow: /apple-app-site-association
Disallow: /.well-known/shopify/monorail
Disallow: /cdn/wpm/*.js
Disallow: /services/login_with_shop
Disallow: /products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /*/products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /collections/*/products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote
Disallow: /*/collections/*/products/*-[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]-remote

Sitemap: https://neomwellbeing.com/sitemap.xml
Sitemap: https://neomwellbeing.com/sitemap.xml
Sitemap: https://neomwellbeing.com/sitemap.xml
```

The robots.txt file is present and references three sitemaps, giving machines a clear point of entry for index discovery. It carries 146 disallow paths, which means a substantial portion of the crawlable space across the audited set has been explicitly restricted — a configuration worth reviewing to confirm those exclusions remain intentional and current.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 910 entries | Fewer than crawl found |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | No | Absent |

**Sitemap grade:** Partial

The sitemap earns a Partial grade, covering 910 URLs with lastmod and changefreq values present — yet the absence of priority attributes across the audited set leaves machines without the relative weighting signals that help them allocate crawl budget more precisely.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

Neomwellbeing publishes an llms.txt file that includes a site description, giving machines a starting point for understanding the brand. The file currently lacks both a page inventory and a content policy; adding those two elements would extend the contextual guidance available to machines navigating the audited set.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

Neomwellbeing does not currently serve an llms-full.txt file — we received a 404 at the expected path, and the resource appears neither in the sitemap nor referenced in the homepage head. For a content-heavy site with 910 pages in the sitemap, adding an llms-full.txt would give machines a structured, consolidated view of the full content corpus without requiring them to crawl each URL individually.

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
| Organization | 9 | 100% | 100% | PostalAddress |
| Product | 8 | 100% | 60% | AggregateRating, Offer, Brand |
| Offer | 8 | 100% | 63% | Organization |
| ListItem | 8 | 100% | 100% | — |
| PostalAddress | 9 | 100% | 100% | — |
| AggregateRating | 8 | 100% | 100% | — |
| Brand | 8 | 100% | 100% | — |
| BreadcrumbList | 8 | 100% | 100% | — |

**Structured Data Quality:** 68/100\
**Coverage:** 9 pages with JSON-LD out of 10 total (90%)\
**Unique types:** 8

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 9 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 23 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 12 | 15 | Average across entities |
| Entity richness | 5 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 8 | 15 | Nested @type values + @id linking |
| Linked-data signals | 3 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 9 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **68** | **100** | |

---

## Structured Data Findings

The audit identified 73 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`neomwellbeing-structured-data-findings.csv`](neomwellbeing-structured-data-findings.csv). The 73 rows describe individual Schema.org property gaps on specific entities — most of them share a small number of underlying patterns, shown below ranked by instance count.

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| Product | recommended | description | 8 | 8 | Product has no description; AI shopping agents have nothing to summarise |
| Product | recommended | sku | 8 | 8 | Product cannot be uniquely identified across catalogues |
| Product | recommended | brand | 8 | 8 | Product brand attribution missing |
| Offer | recommended | seller | 8 | 8 | Offer has no seller attribution |
| Offer | recommended | itemCondition | 8 | 8 | Offer has no new/used condition declared |
| Offer | recommended | url | 8 | 8 | Offer has no purchase URL; agents cannot deep-link to checkout |
| Product | recommended | aggregateRating | 8 | 8 | Product has no rating signal for ranking |
| jsonLd | location | byteOffset | 1 | 1 | jsonLd is present in served HTML but starts at byte 851091. |
| jsonLd | location | byteOffset | 1 | 1 | jsonLd is present in served HTML but starts at byte 472854. |
| microdata | location | byteOffset | 1 | 1 | microdata is present in served HTML but starts at byte 343920. |

Each summary row covers multiple per-entity rows in the sidecar; the grouped view is for reading at a glance, the sidecar is for processing.

**Severity legend** (the values in the *Severity* column above):

| Severity | Meaning |
|----------|---------|
| `required` | Schema.org spec requires this property for the type. Missing values break validation. |
| `recommended` | Schema.org strongly recommends this property. Missing values reduce richness. |
| `vocabulary` | The `@type` value (the JSON-LD class name an entity declares itself as) is not in the Schema.org vocabulary — typically a typo or an invented type. |

---

## Marker Reachability

| Marker   | In served | In rendered | In head | Injected by JS |
|----------|-----------|-------------|---------|----------------|
| JSON-LD structured data | Yes | Yes | No | No |
| Microdata (itemscope) | Yes | Yes | Body | No |
| Open Graph meta tags | Yes | Yes | Yes | No |
| Twitter Card meta tags | Not present | Not present | n/a | n/a |
| MX governance meta tags | Not present | Not present | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | No |
| Skip link (accessibility) | Yes | Yes | Body | No |

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

Neomwellbeing is Partially Compatible with the MX Journey; Purchase Confidence is N/A for this site type.

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether the machine can read the page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether the page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily — these three determine whether the page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 9/10 | 9 page(s) exceed the page-size threshold. Agents with limited fetch windows may stop reading before reaching the main content. | Largest page: 843 KB. See neomwellbeing-pipeline-truncation-risk-pages.csv (9 pages). |
| SPA Shell | Fail | 1/10 | Content requires JavaScript to appear. Server-side agents (ChatGPT, Claude, Perplexity) see an empty shell when they fetch these pages. | Max gap score: 25. 0 means served and rendered match. Page: https://neomwellbeing.com/ |
| Soft 404 | Pass | 10/10 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 10/10 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.45. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 10/10 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 8 page(s) with tab widgets. |
| Delayed Content Start | Pass | 9/9 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 14% of the document on some pages. |
| Broken Code Fences | Pass | 10/10 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Fail | 10/10 | The server advertises content negotiation via Vary: Accept. Agents that ask for a different Accept header may receive different content than the browser version. | 10 page(s) advertise format negotiation. See neomwellbeing-pipeline-http-content-negotiation-(vary)-pages.csv (10 pages). |
| Cross-Host Redirect | Pass | 10/10 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 0 page(s) cross origin during redirect. |
| Generic Headings | Pass | 10/10 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | 9/9 | Actual prose content averages 50% of served bytes — well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 50%. Threshold: 30%. |
| Inline Tag Bloat | Fail | 9/10 | 9 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 180 element(s) > 500 bytes. Largest inline CSS: 71194 B. Largest inline JS: 68151 B. See neomwellbeing-pipeline-inline-tag-bloat-pages.csv (9 pages). |
| Head Weight | Pass | 9/9 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.14. Average: 0.11. Threshold: 0.50. |

**Pipeline Survivability score:** 76/100

Across the audited set, four resilience checks merit attention — Truncation Risk, SPA Shell, Content Negotiation, and Inline Tag Bloat — each representing an opportunity to make content more reliably readable by the machines that crawl, index, and summarise it. When a machine encounters negotiation mismatches or bloated inline markup, it may receive a degraded or incomplete version of the page, reducing confidence in what it indexes. Content Negotiation is the single highest-impact area to address first, as it affects every one of the ten audited pages and correcting it would do more to strengthen machine-readability across the audited set than any other single fix.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R — Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S — The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup — naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent the page is gone.

The Div Soup check runs against the rendered HTML on every page. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 20/100 | high | 573 | 66% | 9 | `div.star-container.yotpo-sr-star-full` (554), `div.flex.flex-col` (503), `div.star-container` (400), `div.flex.flex-row` (383), `div` (285) |

Across the audited set, we found that 573 of 867 rendered elements — 66% — are bare divs, meaning machines lose structural context and must rely on positional inference to determine meaning. The combination of a deepest chain of 9 and a high bare-div ratio points to a surface-wide soup driven by utility-class frameworks and component-level patterns such as `div.flex.flex-col` and `div.flex.flex-row`, which carry layout intent but no semantic signal whatsoever. The cheapest first move is wrapping the obvious landmarks — header, nav, main, footer, aside — in their proper elements and assigning meaningful class names to the remaining containers, which would bring the bare-div ratio down materially without touching the visual layout.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | Yes | Prevents XSS and injection attacks |
| X-Frame-Options | Yes | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

All five standard security headers are present across every page. This is the expected baseline for any production website.

**Coverage:** 12 of 12 pages have all five headers.

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
| /products/happiness-standard-scented-candle | Yes | Yes | Yes | Yes | Yes |
| /products/happiness-travel-scented-candle | Yes | Yes | Yes | Yes | Yes |

HTTPS: 12/12 | HSTS: 12/12 | CSP: 12/12 | X-Frame-Options: 12/12 | X-Content-Type-Options: 12/12

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 90% | `/agents.md` |
| MX governance tags | N/A | — |
| Open Graph tags | N/A | — |
| Twitter Card tags | N/A | — |
| Skip link | N/A | — |
| llms-txt link tag | N/A | — |
| Canonical URL | 90% | `/agents.md` |
| Exactly 1 H1 | N/A | — |
| Code examples present | 10% | 9 |
| Self-contained sections | 100% | — |
| Error/troubleshooting docs | N/A | — |
| Lighthouse heading compliance | N/A | — |

**Overall Consistency:** 93%

## Content Consistency

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Pass | Organisation name appears consistently across all 10 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 10-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

165 identical inline fragment(s) were found repeated across multiple pages, totalling 1134 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes | Pages | Preview |
|------|-------|-------|---------|
| css | 1260 | 16 | .upsell-blocks {     margin-top: 1.5rem;   }      .upsell-ca |
| css | 358 | 16 | .yotpo-verified-image-icon{display:flex;flex-direction:colum |
| css | 288 | 16 | .yotpo-star-rating{display:flex;align-items:center}.yotpo-st |
| css | 107 | 16 | .yotpo-pagination-icon{fill:var(--text-color)}.yotpo-paginat |
| css | 99 | 16 | .yotpo-star-distribution-ph{display:flex;flex-direction:colu |
| css | 77 | 16 | .disabled,.yotpo-pagination-icon{fill:var(--text-color)}.dis |
| css | 4683 | 9 | #NavImageimage_BaUPxm1 .nav-block-image {       aspect-ratio |
| js | 4588 | 9 | {       "assets": {         "themeCssFile": null,         "l |
| css | 3932 | 9 | .yotpo-reviews-star-ratings-widget { display: flex;   a:empt |
| js | 3908 | 9 | class PredictiveSearchMobile extends HTMLElement {         c |
| js | 3839 | 9 | class PredictiveSearch extends HTMLElement {         constru |
| js | 3377 | 9 | !function(){'use strict';const t='contact',e='account',n='ne |
| js | 2617 | 9 | const consentOutOfRegion = {         analytics: true,        |
| js | 2151 | 9 | // This waits for all the external ressources (including ABT |
| js | 1843 | 9 | if (typeof window.wunderkind.cart === 'undefined') {         |
| js | 1733 | 9 | window.product = {         add: `Add`,         addToCart: `A |
| js | 1651 | 9 | window.Shopify = window.Shopify || {};   if (!window.Shopify |
| css | 1551 | 9 | wishlist-page {     --text-color: var(--wk-color-text);      |
| js | 1404 | 9 | (function() {   var isLoaded = false;   function asyncLoad() |
| js | 1174 | 9 | !function(t,n){function o(n){var o=t.getElementsByTagName("s |
| js | 1076 | 9 | {     "customIconsUrl": "https:\/\/cdn.appmate.io\/themecode |
| js | 882 | 9 | window.dataLayer = window.dataLayer || [];     function gtag |
| js | 789 | 9 | {     "injectMethod": "insertAfter",     "buttonPlacement":  |
| js | 719 | 9 | function portableWalletsHideBuyerConsent(e){var t=document.g |
| css | 709 | 9 | :root {       --wk-color-solid-button-label: 255, 255, 255;  |
| js | 598 | 9 | var Shopify = Shopify || {}; Shopify.shop = "neom-organics.m |
| js | 577 | 9 | !function(){if(!window.klaviyo){window._klOnsite=window._klO |
| js | 547 | 9 | {"shopId":2825683008,"countryCode":"GB","currencyCode":"GBP" |
| css | 545 | 9 | wishlist-button-collection {     --icon-size: 18px;     --ic |
| js | 519 | 9 | {         "EU": {             "content": "It looks like you' |
| js | 507 | 9 | (function (a, s, y, n, c, h, i, d, e) {             s.classN |
| css | 482 | 9 | .cxo-basket-notify{position:relative}.cxo-basket-notify.cxo- |
| css | 368 | 9 | #shopify-buyer-consent {   margin-top: 1em;   display: inlin |
| js | 351 | 9 | document.addEventListener("DOMContentLoaded",(function(){fun |
| js | 351 | 9 | {     "showVendor": false,     "showProductTitle": true,     |
| js | 348 | 9 | var Shopify=Shopify||{};Shopify.PaymentButton=Shopify.Paymen |
| js | 208 | 9 | await import("//neomwellbeing.com/cdn/shopifycloud/shop-js/m |
| js | 191 | 9 | !function(o){function n(){var o=[];function n(){o.push(Array |
| js | 181 | 9 | {"accessToken":"614cc45c2f2b789481da2aa775d2b9f4","betas":[" |
| css | 178 | 9 | @import 'https://fonts.googleapis.com/css2?family=Inter:ital |
| css | 169 | 9 | .nav-image-block {         aspect-ratio: 1/1;     }     @med |
| css | 161 | 9 | .csm-cookie-consent{border:none!important;margin:0!important |
| css | 158 | 9 | @import url('https://cdn-widgetsrepository.yotpo.com/brandki |
| js | 158 | 9 | window.Shopify = window.Shopify || {};   window.Shopify.Sign |
| js | 153 | 9 | window.WishlistKingAppLoaderURL = "https://cdn.shopify.com/e |
| css | 148 | 9 | #adas-init-access-tool {display: none !important;} .wk-heade |
| js | 148 | 9 | window.dataLayer = window.dataLayer || [];       window.data |
| js | 133 | 9 | window.ShopifyPay = window.ShopifyPay || {};   window.Shopif |
| js | 121 | 9 | if (typeof window.bouncex === 'undefined') {       window.bo |
| js | 109 | 9 | window.performance && window.performance.mark && window.perf |
| js | 107 | 9 | window.performance && window.performance.mark && window.perf |
| css | 91 | 9 | @import url('https://staticw2.yotpo.com/web-fonts/css/nunito |
| js | 83 | 9 | if (typeof window.wunderkind === 'undefined') {       window |
| css | 77 | 9 | @import url('https://staticw2.yotpo.com/web-fonts/css/lato/v |
| js | 70 | 9 | window.gwp_excluded_products = [            '3703680532544', |
| js | 64 | 9 | window.__TREKKIE_SHIM_QUEUE = window.__TREKKIE_SHIM_QUEUE \|\| [] |
| css | 61 | 9 | .yotpo-widget-empty-placeholder { display: block!important;  |
| js | 59 | 9 | !function(o){(o.Shopify=o.Shopify||{}).modules=!0}(window); |
| css | 53 | 9 | .delivery-percentage-bar {         width: 0.0%;     } |
| js | 48 | 9 | window.ShopifyPaypalV4VisibilityTracking = true; |
| js | 46 | 9 | window.klaviyoReviewsProductDesignMode = false |
| js | 37 | 9 | window.__wunderkindShopifyApp = true; |
| js | 23 | 9 | window.cart_items = []; |
| css | 10602 | 8 | .yotpo-review-title{font-weight:var(--primary-font-weight);f |
| css | 6504 | 8 | #shopify-section-template--25230891221375__hero_simple_nRk39 |
| js | 4027 | 8 | document.addEventListener("DOMContentLoaded", function() {   |
| css | 3966 | 8 | .yotpo-widget-clear,.yotpo-widget-clear button,.yotpo-widget |
| css | 3614 | 8 | .yotpo-display-s .yotpo-dropdown-closable[data-v-021ef7c4],. |
| css | 3578 | 8 | .yotpo-filters-container{width:100%;display:flex;margin:40px |
| css | 3536 | 8 | .yotpo-bold-layout .yotpo-bottom-line-question-wrapper-verti |
| css | 2928 | 8 | .yotpo-score-filter[data-v-616e2efc]{position:relative;outli |
| css | 2710 | 8 | .yotpo-mobile-filters-popup-overlay-container[data-v-09fe97f |
| css | 2692 | 8 | .yotpo-slider-wrapper{position:relative;width:100%}.yotpo-sl |
| css | 2626 | 8 | .yotpo-display-s .yotpo-bottom-line{flex-direction:column}.y |
| css | 2345 | 8 | .yotpo-header-container[data-v-012a3912]{display:flex;flex-d |
| css | 2200 | 8 | .yotpo-tooltip-container-hover[data-v-cbb06f1c]{font-family: |
| css | 2105 | 8 | .yotpo-media-filter[data-v-7766ba0c]{position:relative;outli |
| css | 1869 | 8 | .yotpo-review-product-variant-wrapper{display:flex;flex-dire |
| css | 1826 | 8 | .yotpo-comment[data-v-4e26f402]{display:flex;flex-direction: |
| css | 1790 | 8 | @media (width < 1024px) {     #shopify-section-template--252 |
| css | 1696 | 8 | .yotpo-filters-results-btn[data-v-01c6af76]{background-color |
| css | 1646 | 8 | .yotpo-search-filter{width:176px;height:33px;display:flex;ju |
| css | 1573 | 8 | .yotpo-custom-questions-meta-data-wrapper{display:flex;flex- |
| css | 1551 | 8 | .yotpo-review-border-smooth{height:5px;background-image:url( |
| css | 1516 | 8 | .yotpo-border-smooth{height:5px;background-image:url("data:i |
| css | 1410 | 8 | .yotpo-head .yotpo-headline{font-size:20px;color:var(--text- |
| js | 1339 | 8 | (function(){if ("sendBeacon" in navigator && "performance" i |
| css | 1335 | 8 | .yotpo-horizontal-pagination[data-v-da0d22da]{margin:5px;dis |
| css | 1319 | 8 | .yotpo-icon-button__container[data-v-f9201f4a]{position:rela |
| css | 1316 | 8 | .yotpo-review-votes-icons-container[data-v-61597e82]{display |
| css | 1133 | 8 | .yotpo-custom-questions-wrapper{display:grid;grid-template-c |
| css | 1046 | 8 | .yotpo-summary-banner[data-v-0a83fe7a]{cursor:pointer;color: |
| css | 1039 | 8 | .yotpo-related-product-container{&[data-v-1dfc8e59]{display: |
| css | 945 | 8 | .yotpo-clear-filters-container{text-align:left;padding:12px  |
| css | 876 | 8 | .yotpo-progress-bar{display:flex;width:141px;height:6px;back |
| css | 869 | 8 | .yotpo-review-votes-wrapper{display:flex;flex-direction:colu |
| css | 848 | 8 | .yotpo-text-container[data-v-0909d005]{display:inline}.yotpo |
| css | 843 | 8 | .yotpo-mobile-filters-btn[data-v-4bd428b0]{display:flex;flex |
| css | 841 | 8 | .yotpo-embedded-pp{width:100%}.yotpo-base-layout{margin:0 au |
| css | 828 | 8 | .yotpo-smart-topics[data-v-49f58dcc]{font-size:14px;font-fam |
| css | 793 | 8 | .yotpo-custom-questions-range-question[data-v-21d6c743]{marg |
| css | 777 | 8 | .yotpo-border{margin-top:70px;margin-bottom:70px;color:var(- |
| css | 743 | 8 | .yotpo-icon-btn[data-v-efe11c86]{border-radius:38px;cursor:p |
| css | 742 | 8 | .yotpo-reviewer[data-v-e4b4ce4c]{display:flex;flex-direction |
| css | 729 | 8 | .yotpo-vertical-pagination[data-v-87deef4e]{display:flex;jus |
| css | 725 | 8 | .yotpo-reviews-main-widget a:empty,.yotpo-reviews-main-widge |
| css | 710 | 8 | .yotpo-smart-topic-filter[data-v-557dae96]{display:flex;flex |
| css | 683 | 8 | .ugc-storefront-widgets-tabs-container{display:flex;flex-dir |
| css | 674 | 8 | .yotpo-custom-questions-filters-wrapper{display:flex;row-gap |
| css | 662 | 8 | .yotpo-custom-questions-free-text-wrapper{display:flex;flex- |
| css | 621 | 8 | .yotpo-new-review-btn-wrapper{display:flex}.yotpo-new-review |
| css | 615 | 8 | .yotpo-simple-tooltip[data-v-748f8a28]{padding:2px 4px;color |
| css | 581 | 8 | .product-wrapper .product-media img, .product-wrapper .produ |
| css | 570 | 8 | .yotpo-main-layout{display:flex;flex-direction:column;width: |
| css | 550 | 8 | .yotpo-translate-cta-wrapper{&[data-v-1e30e7d8]{min-height:2 |
| css | 543 | 8 | .yotpo-thumbnail-container{display:flex;flex-direction:row;f |
| css | 541 | 8 | .yotpo-incentivized-badge[data-v-c5c8082a]{align-self:center |
| css | 527 | 8 | .yotpo-no-matching-reviews-container{font-weight:var(--secon |
| css | 469 | 8 | .yotpo-avatar-initials-text{font-weight:700;font-size:20px;t |
| css | 446 | 8 | .yotpo-three-dots-loader[data-v-a041152a]{color:var(--primar |
| css | 441 | 8 | #yotpo-main-widget-btn[data-v-4f716a87]{border-radius:100px; |
| css | 374 | 8 | .zoom-bg,.zoom-img{cursor:zoom-out;z-index:90000}.zoom-img{d |
| css | 360 | 8 | .yotpo-media-thumbnail[data-v-2dffe6d2]{position:relative}.y |
| css | 325 | 8 | .yotpo-custom-icon{width:40px;height:40px;background-repeat: |
| css | 323 | 8 | .yotpo-star-rating-filter{display:flex;align-items:center}.y |
| css | 313 | 8 | .js-recommended-products .wishlist-icon-area  {              |
| css | 309 | 8 | .yotpo-reviewer-verified-icon-standalone[data-v-4c2f4803]{di |
| css | 293 | 8 | .yotpo-custom-icon{width:40px;height:40px;background-repeat: |
| css | 280 | 8 | .yotpo-anonymous-person-icon{width:40px;height:40px}.yotpo-b |
| css | 273 | 8 | .yotpo-review-question-wrapper[data-v-1c18c86b]{width:100%}. |
| css | 270 | 8 | .yotpo-translation-disclaimer-container[data-v-2790ceca]{mar |
| css | 258 | 8 | .yotpo-reviews-main-widget a[href]:focus-visible,.yotpo-revi |
| css | 258 | 8 | .yotpo-verified-image-icon{display:flex;flex-direction:colum |
| css | 257 | 8 | .yotpo-thumbnail-collapsed-wrapper{display:flex;justify-cont |
| css | 240 | 8 | .yotpo-initials-icon{height:var(--da43e724);width:var(--da43 |
| css | 230 | 8 | .yotpo-media-gallery .yotpo-media-gallery-headline[data-v-a7 |
| css | 209 | 8 | .yotpo-review-date[data-v-c637d528]{color:var(--yotpo-b2b-da |
| css | 188 | 8 | .yotpo-review-title{font-weight:var(--primary-font-weight);f |
| css | 185 | 8 | .yotpo-custom-questions-see-more-label[data-v-7973b25b]{disp |
| css | 183 | 8 | .yotpo-date-format{white-space:nowrap;color:var(--text-color |
| css | 144 | 8 | .yotpo-reviews-pagination-container{display:flex;flex-direct |
| css | 135 | 8 | .yotpo-preview-media-wrapper .yotpo-preview-media[data-v-e95 |
| css | 125 | 8 | nav[aria-label="breadcrumbs"] li.seperator svg {       heigh |
| css | 102 | 8 | .yotpo-reviews-widget-dropdown[data-v-14c233e3]:focus{border |
| css | 95 | 8 | .yotpo-reviews-container{display:flex;flex-direction:column; |
| css | 93 | 8 | .yotpo-reviews-pagination-item{text-decoration:none;font-fam |
| css | 90 | 8 | #yotpo-summary[data-v-7d3b57cc]:focus-visible{outline:2px so |
| css | 90 | 8 | .yotpo-bottom-line-text{white-space:nowrap;font-size:14px;te |
| css | 89 | 8 | .yotpo-reviews-ph{display:flex;flex-direction:column}.yotpo- |
| css | 89 | 8 | .yotpo-bundled-products-filters-wrapper{display:flex;gap:11p |
| css | 82 | 8 | button.yotpo-single-thumbnail{-o-object-fit:cover;object-fit |
| css | 82 | 8 | .yotpo-countries-filters-wrapper{display:flex;gap:11px;flex- |
| css | 80 | 8 | .yotpo-product-variants-filter .yotpo-product-variant-filter |
| css | 77 | 8 | @import url('https://staticw2.yotpo.com/web-fonts/css/lato/v |
| css | 74 | 8 | .yotpo-anonymous-person-icon{width:var(--ae25cb68);height:va |
| css | 63 | 8 | .yotpo-delete-image-icon[data-v-ffe3d2c0]{height:8px;width:8 |
| css | 58 | 8 | .yotpo-close-icon[data-v-b37b43d6]{width:14px;height:14px} |
| css | 48 | 8 | .yotpo-verified-icon{margin-top:var(--b927711e)} |
| css | 44 | 8 | .ugc-carousel {     background: #ffffff;   } |
| css | 41 | 8 | .yotpo-shop-badge{box-sizing:content-box} |
| css | 38 | 8 | .hidden[data-v-8b122940]{display:none} |
| css | 25 | 8 | .zoomable{cursor:zoom-in} |
| js | 22 | 8 | {"pageType":"product"} |
| js | 140 | 6 | {                             "price": "£46.75 GBP",         |
| js | 106 | 2 | {                     "price": "£55.00 GBP",                 |

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents — Accessibility and Machine Readability

Accessibility legislation across major markets — including the EU's Directive (EU) 2019/882 (in force 28 June 2025), Section 508 of the US Rehabilitation Act, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada — has converged on ISO 14289-1 (PDF/UA) as the shared technical baseline, making the EAA the most precisely codified expression of a genuinely global standard. In parallel, and entirely independently of legal obligation, an untagged or image-based PDF is opaque to machines in the same way that unsemantic HTML is: search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from it, whereas a properly tagged PDF with a complete structure tree offers the same machine-readable signal that well-formed semantic markup does on a webpage.

No PDF documents were discovered in the audited surface. Accessibility exposure on the document carrier: **low within the pages crawled**.

**Scope note:** this audit crawls a defined set of public pages — typically the home page, key content pages, and any pages linked directly from them. PDFs sitting behind login forms, linked only from uncrawled pages, stored in unlinked directories, or hosted on third-party domains are outside the crawl boundary and do not appear in this count. If your site publishes datasheets, white papers, investor documents, or product manuals that were not part of this crawl, a wider-scope PDF audit is needed before drawing conclusions about overall accessibility exposure on the document carrier.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings** — address the 204 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings** — Discovery Readiness improvements and metadata tuning that compound over time
3. **Consider optional enhancements** — optional patterns that give a first-mover advantage in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | WCAG 2.1 AA compliance | Priority 1 items resolved, compliance risk removed |
| Performance Optimisation | Average load time reduction from 4402ms | Priority 8 addressed, user drop-off risk on slower connections reduced |
| Full Optimization | Semantic Structure improvements, Discovery Readiness improvements, Metadata Stack Completeness improvements, Structured Data Quality improvements and optional enhancements | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://neomwellbeing.com leads on SEO with a score of 79/100, reflecting a solid foundation for human-facing search visibility. The most significant opportunities lie in Discovery Readiness (24/100) and Accessibility (9/100), where targeted improvements would meaningfully expand how both machines and human visitors engage with the content. We invite you to explore the findings that follow and work with us to close those gaps.

### Audit Scores

The site serves an empty HTML shell to server-side agents. The "Rendering" column shows whether each score was measured from the served HTML (what agents actually get) or the rendered HTML (what agents would get with SSR).

| Dimension | Score | Rendering | Notes |
|-----------|-------|-----------|-------|
| AI Agent Suitability | 24/100 | Served | Empty shell — no content without JS |
| Accessibility | 9/100 | Rendered | Pa11y runs in a browser |
| SEO (all pages) | 79/100 | Rendered | Google renders JS; server-side agents do not |
| SEO (content pages) | 79/100 | Rendered |  |
| MX Stack Completeness | 47/100 | Rendered |  |
| Structured Data Quality | 68/100 | Rendered | JSON-LD in served head — valid for all agents |
| Commerce Visibility | 45/100 | Rendered |  |
| Discovery Readiness | 24/100 | Mixed | robots.txt/sitemap independent of rendering |
| Heading Quality | 57/100 | Rendered |  |
| Semantic Ratio | 7% | Rendered |  |
| Agent Readability | 63/100 | Rendered |  |
| Pipeline Survivability | 76/100 | Rendered |  |
| Cross-Page Consistency | 93% | Rendered |  |

Server-side agents see only the served HTML. The AI Suitability score reflects their experience. All other scores reflect what the site achieves after JavaScript renders.

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| /agents.md | 35 | 80 | 80 | 58 | 58 |
| / (nav) | 83 | 0 | 100 | 0 | -16 |
| /products/complete-bliss-standard-scented-candle | 81 | 0 | 100 | 0 | 0 |
| /products/perfect-night-sleep-luxury-scented-candle | 89 | 0 | 100 | 0 | 0 |
| /products/perfect-nights-sleep-standard-scented-candle | 88 | 0 | 100 | 0 | 0 |
| /products/feel-refreshed-luxury-scented-candle | 79 | 0 | 100 | 0 | 0 |
| /products/real-luxury-standard-scented-candle | 83 | 0 | 100 | 0 | 0 |
| /products/feel-refreshed-standard-scented-candle | 88 | 0 | 100 | 0 | 0 |
| /products/happiness-standard-scented-candle | 79 | 0 | 100 | 0 | 0 |
| /products/happiness-travel-scented-candle | 88 | 0 | 100 | 0 | 0 |

The page marked (nav) is navigational — it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 79/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page — 1553 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 1553  |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set, we reviewed a total of 1,460 images. The format split tells a clear story: 791 are JPEG, 227 are SVG, and 50 are PNG — with no WebP images present at all. That last point is worth noting, as WebP is the format most modern browsers prefer for photographic content. On the alt-text side, 1,064 images (72.9%) carry descriptive text, which means 396 do not. For machines — crawlers and AI agents alike — those 396 images are effectively invisible, and for screen-reader users they represent genuine accessibility gaps.

Loading strategy is split three ways, and the distinction matters. A total of 763 images carry `loading="lazy"`, and just 1 carries `loading="eager"`. The remaining 696 images have no loading attribute set at all. It is worth being precise here: no attribute is not the same as eager loading. When the attribute is absent, the browser applies its own heuristics to decide when to fetch the image — behaviour that varies across browsers and viewport conditions, and that cannot be relied upon for above-the-fold content. Only explicit `loading="eager"` gives you a guaranteed immediate fetch. With 696 images in that indeterminate state across the audited set, there is a real opportunity to audit which of those sit above the fold and assign attributes deliberately rather than leaving the decision to the browser.

> **Double-lazy loading pattern detected on 307 image(s).** These images carry BOTH the native HTML attribute `loading="lazy"` AND a JavaScript lazyload pattern (a placeholder `data:image/gif` in `src`, the real URL in `data-src`, and a `lazyload` class). The image cannot render until:
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

**Scope:** 10 pages analysed | Platform: Shopify | Analysis method: Hybrid (automated + manual verification) | robots.txt: Present (160 directives) | llms.txt: Present | llms-full.txt: Absent (HTTP 404) | agent-card.json: Absent (HTTP 404)

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

**Date:** 13 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*