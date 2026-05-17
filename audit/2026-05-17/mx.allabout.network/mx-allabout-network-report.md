---
title: "Mx Allabout: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-17"
modified: "2026-05-17"
client: "Mx Allabout"
clientSlug: "mx-allabout-network"
clientUrl: "https://mx.allabout.network"
reportId: "mx-allabout-network-WEB-AUDIT-20260517"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-17"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Mx Allabout"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 97
accessibilityScore: 99
seoScore: 91
llmSuitabilityScore: 97
totalIssues: 14
pagesAudited: 95
version: "1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Mx Allabout. Focus on the highest-leverage MX opportunities surfaced by the audit."
---

# Mx Allabout: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 17 May 2026\
**Report ID:** mx-allabout-network-WEB-AUDIT-20260517

---

## About This Report

We audited 95 pages across mx.allabout.network's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** This audit covers the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 95 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead: Common Crawl, the archive underpinning most major LLM training datasets, indexes only HTML files, meaning a plain-text llms.txt never enters training corpora regardless of its content quality. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **97**/100 | `#################-` |
| Accessibility | **99**/100 | `##################` |
| SEO | **91**/100 | `################--` |
| Machine Suitability | **97**/100 | `#################-` |
| MX Stack | **96**/100 | `#################-` |
| Agent Readability | **91**/100 | `################--` |
| Pipeline Survivability | **100**/100 | `##################` |

We audited 95 pages of mx.allabout.network and found a property that serves its human audience with clear intent. Performance across the audited set is the standout human-experience dimension, and the SEO foundations reinforce that picture, with a score of 91/100 placing mx.allabout.network firmly in the Excellent band. The content architecture is coherent, the structured vocabulary is already rich, and the groundwork is there for a strong presence across both human and machine audiences.

Before turning to machine readiness, we want to name accessibility as a Priority 1 compliance item. We recorded 14 critical WCAG AA issues across the audited set, and addressing these is the first order of business, ahead of any other investment. Inclusive design protects users, reduces legal exposure, and tends to improve the structural quality of a page in ways that benefit every other dimension we measure. From there, the headline opportunity is machine-experience readiness. Discovery Readiness sits at 93/100 and Structured Data Quality matches it, both well into the Excellent band, which tells us that machines can find and parse a great deal of what mx.allabout.network publishes. The next natural step is moving Schema Maturity beyond Level 1 (Decoration) so that the structured data already present begins to carry the weight of a fully expressive knowledge graph, not merely a labelling layer.

mx.allabout.network is hosted on GitHub Pages, and AI Suitability on the served score reaches 97/100, which confirms that the rendered content machines receive is already high quality. With that foundation in place, Schema.org JSON-LD becomes the highest-leverage asset available, readable by every agent regardless of how each page is assembled or served, and the natural vehicle for lifting Schema Maturity from decoration toward genuine machine-readable depth.

> 

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, mx.allabout.network delivers a strong experience for human visitors, with performance averaging 273ms, accessibility scoring 99/100, and SEO at 91/100, though 14 accessibility issues remain the clearest area for further refinement.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Needs Improvement | D |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can discover, parse, and reliably cite content with high confidence, as Discovery Readiness (93/100), Structured Data Quality (93/100), Metadata Stack Completeness (96/100), and Pipeline Survivability (100/100) collectively confirm a machine-readable foundation that is both structurally coherent and resilient under agent processing.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 93/100 | Excellent | A |
| Structured Data Quality | 93/100 | Excellent | A |
| MX Stack Completeness | 96/100 | Excellent | A |
| Pipeline Survivability | 100/100 | Excellent | A |

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
|  | 1 | Basic | Deliberate metadata, publisher identified | Agents can discover |  |
|  | 2 | Structured | Full MX fields, governance | Agents can cite and attribute |  |
|  | 3 | Signed | Cryptographic verification | Agents can compare and recommend |  |
|  | 4 | Registered | Registry, SLA, aliveness | Agents can transact |  |
| **→** | 5 | Audited | Third-party verified | Agents can guarantee accuracy | **←** |

**Current Level:** 5: Audited

**Evidence:** MSC 96/100 | SDQ 93/100 | Discovery 93/100 | Consistency 99%

**The site is at the top level, continue monitoring**

---

<div class="page-break"></div>

## What's Working Well

Across the audited set of 95 pages, mx.allabout.network demonstrates a genuinely strong technical foundation, with SEO at 91/100, Accessibility at 99/100, Structured Data Quality at 93/100, and near-perfect consistency at 99%. These scores represent the groundwork for the targeted improvements we outline in the sections that follow.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent — 273ms average load time |
| SEO (content pages) | 91 | Excellent — titles, meta descriptions, canonical URLs in place |
| Security | 5/5 | HTTPS, HSTS, CSP, X-Frame-Options, X-Content-Type-Options — 0 headers absent |
| Structured Data | 93 | Excellent — JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 96 | Excellent — single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 99% | 99% — same metadata patterns across every page |
| Agent access | 6/6 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Structured Data Quality of 93/100 (Decoration): the schema is valid, required properties are complete, and the vocabulary is in good order.
- Body content ratio averages 63%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We present the findings below as opportunities prioritised by impact, ordered so that structured data quality and catalogue visibility lead, given their direct influence on how machines interpret and surface content from mx.allabout.network. Discovery readiness and metadata completeness follow, as their strong baseline scores of 93/100 and 96/100 respectively confirm the foundations are in place to build upon.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Missing document titles, WCAG 2.4.2 (5 pages) | Compliance Risk | High | Low | Screen reader users may miss page-level context |
| 2 | Missing lang attribute, WCAG 3.1.1 (5 pages) | Compliance Risk | High | Low | Screen reader users risk receiving content in the wrong language voice |
| 3 | Broken anchor targets, WCAG 2.4.1 (1 page, 2 links) | Compliance Risk | High | Low | Sighted keyboard users may miss in-page navigation targets |
| 4 | Contrast gap, WCAG 1.4.3 (1 page, ratio 2.96:1 vs 4.5:1) | Compliance Risk | High | Low | Low-vision users are less likely to read affected text |
| 5 | Semantic structure, rendered 43/100 (worst page: /reginald/mx-machine-readiness.html, 95 of 153 bare divs) | Cross-cutting | Medium | Medium | Machines and assistive tech may miss content hierarchy |

---

**Priority 1: Missing Document Titles, WCAG 2.4.2 (5 Pages)**

**Bucket:** Compliance Risk

**Finding:** We recorded 5 pages across the audited set where the document head carries no non-empty title element, a direct violation of WCAG 2.4.2 (Level A). Screen reader users depend on the title to orient themselves when switching between tabs or returning to an affected page; without it, each such page is announced in a way that provides no context. The same absence reduces search-engine confidence in each page's subject, which modestly suppresses SEO signal.

**What to change and why:**

- Supply a descriptive, non-empty title element for each of the 5 affected pages. This resolves the WCAG 2.4.2 Level A violation and restores orientation cues for screen reader users navigating by tab.
- Ensure each title is unique and reflects each page's primary topic, not a generic placeholder. Distinct titles improve how machines index and distinguish pages, supporting the SEO score.
- Add the title correction to the template or CMS field for any affected page type so the gap does not recur on new pages of the same pattern.

**Effort:** Low

---

**Priority 2: Missing lang Attribute, WCAG 3.1.1 (5 Pages)**

**Bucket:** Compliance Risk

**Finding:** We identified 5 pages across the audited set where the html element carries no lang or xml:lang attribute, a WCAG 3.1.1 Level A violation. Screen readers use this attribute to select the correct text-to-speech language engine; its absence means content may be read aloud in the wrong language voice, reducing intelligibility for screen reader users. Machines that parse language for content categorisation and localisation signals are also less likely to assign each affected page to the correct locale.

**What to change and why:**

- Add a lang attribute to the html element on each of the 5 affected pages, declaring the primary language of the document. This resolves the WCAG 3.1.1 Level A violation and ensures assistive technology selects the correct speech engine.
- Confirm the lang value matches the actual language of the content rather than a default system value. An accurate declaration also supports accurate language-based indexing by machines.
- If the 5 affected pages share a template, apply the fix at the template level to address all instances simultaneously and prevent recurrence.

**Effort:** Low

---

**Priority 3: Fragmented Anchor Targets, WCAG 2.4.1 (1 Page, 2 Links)**

**Bucket:** Compliance Risk

**Finding:** On one page in the audited set we found 2 in-page navigation links pointing to named anchors ("organisational-implementation" and "where-mx-fits-in-your-organisation") that do not exist in the document. Under WCAG 2.4.1 (Level A), skip and bypass mechanisms must function correctly. Sighted keyboard users who rely on the table-of-contents navigation may miss entire content sections because the link target resolves nowhere.

**What to change and why:**

- Verify whether the target anchor IDs were renamed or removed during a content update, then either restore the anchors at their intended positions or update the links to match the current anchor IDs in the document. This resolves the WCAG 2.4.1 Level A gap and ensures keyboard users can bypass content blocks as intended.
- Apply a regression check to in-page navigation links whenever content sections are renamed or restructured, so anchor references remain consistent with document structure.
- Machines that parse in-page navigation structure for content outline signals are less likely to surface the correct section hierarchy when target anchors are absent; correcting them also supports accurate document parsing.

**Effort:** Low

---

**Priority 4: Contrast Gap, WCAG 1.4.3 (1 Page, Ratio 2.96:1)**

**Bucket:** Compliance Risk

**Finding:** We recorded one instance on one page in the audited set where text carries a contrast ratio of 2.96:1 against its background, well below the WCAG 1.4.3 Level AA minimum of 4.5:1. Low-vision users reading this element under typical display conditions are less likely to perceive the text clearly. The Pa11y data indicates the text colour adjustment to #fffffe would meet the required threshold.

**What to change and why:**

- Adjust the text colour on the affected element so that the contrast ratio meets the 4.5:1 minimum required by WCAG 1.4.3 Level AA. The Pa11y data identifies #fffffe as a compliant target value, closing the gap from 2.96:1 to the required threshold.
- Review the same styling pattern in any other instances of the same component or section type across the audited set, as the visual appearance may be shared across templates; addressing it at the source removes the risk of recurrence.
- Document the approved contrast values in the design system or style guide so future text-on-background combinations are checked before deployment.

**Effort:** Low

---

**Priority 5: Semantic Structure, Rendered 43/100 (Worst Page: /reginald/mx-machine-readiness.html, 95 of 153 Bare Divs)**

**Bucket:** Cross-cutting

**Finding:** We recorded a rendered semantic structure score of 43/100 on the audited set. The most acute case is https://mx.allabout.network/reginald/mx-machine-readiness.html, where 95 of 153 total elements are bare divs carrying no semantic role. The figures 95 and 153 describe that specific page; other pages in the audited set may not share the same ratio, though the band that produces a 43/100 rendered score indicates the pattern is present at scale. Machines that walk the document tree to infer content hierarchy, sectioning, and landmark regions are less likely to extract an accurate outline when structural elements are replaced by generic containers.

**What to change and why:**

- Replace generic container elements with semantically appropriate sectioning elements (such as those conveying header, navigation, main, section, article, aside, and footer roles) where the content warrants it. This directly addresses the 43/100 rendered score and gives machines a navigable document outline rather than a flat sequence of containers.
- For the worst-affected page at /reginald/mx-machine-readiness.html, prioritise the outermost structural wrappers first, as each semantic replacement at the top level cascades benefit to child elements and improves the landmark map assistive technologies expose to users.
- Improving semantic structure supports the Accessibility dimension by providing landmark regions for screen reader navigation, and supports the AI Opportunity dimension by giving machines clear sectioning boundaries they can use to attribute cited content to the correct topic area.
- Treat the most frequently used layout templates as the highest-leverage targets: a single template-level change propagates across every page that inherits it, multiplying the impact of a single fix across the audited set.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen mx.allabout.network's machine readiness.

- **`sameAs` links on Person and Organization entities**: Adding `sameAs` properties pointing to authoritative external identifiers (such as Wikidata or LinkedIn profiles) on the Person (29) and Organization (30) entities already present across the audited set would allow machines to resolve and disambiguate these real-world entities with confidence, improving citation eligibility in agent-generated answers.

- **`potentialAction` on Organization entities**: The 30 Organization entities already in place are well-positioned to carry `potentialAction` descriptors advertising contact or enquiry capabilities, giving machines a structured signal about how users can engage rather than requiring them to infer intent from page content alone.

- **Content-Signal directives ([contentsignals.org](https://contentsignals.org)) in robots.txt**: Declaring content-use policy directives in robots.txt would give machines an explicit, machine-readable statement of how content across the audited set may be used for training, summarisation, or citation, reducing ambiguity for AI systems that inspect this file before processing page content.

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
| URL probed | https://mx.allabout.network |
| HTTP status | 200 |
| Content-Type returned | text/markdown; charset=utf-8 |
| Markdown served | Yes — server responded with text/markdown |

### Non-Standard Response Headers

No non-standard response headers were recorded in this audit.

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how the site handles errors for both human visitors and machines.

| Check | Result |
|-------|--------|
| HTTP status code | 404 (correct) |
| Custom error page | Yes, branded page with navigation |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | Yes |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | Yes, home link and internal navigation present |
| Internal navigation links | 21 links to same-site pages |
| MX governance tags | Not assessed in this audit |
| Schema.org JSON-LD | Not assessed in this audit |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://mx.allabout.network/drafts/cog-spec.v1.md`. A first-time visitor sees the cold-cache cost: the crawler recorded 781 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 450ms, 199ms, 211ms, giving a returning-visitor median of **211 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://mx.allabout.network/learn/what-is-mx.html`. A first-time visitor sees the cold-cache cost: the crawler recorded 259 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 359ms, 244ms, 437ms, giving a returning-visitor median of **359 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Server response time is within healthy bounds on the slowest page and a median-load page, for both first-visit and returning-visitor requests.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /books/mx-introduction-chapter.pdf
Disallow: /books/appendices/
Disallow: /canon/
Disallow: /blog/drafts/

Sitemap: https://mx.allabout.network/sitemap.xml
```

*The full `robots.txt` (8 lines) is preserved alongside this report as `mx-allabout-network-robots-txt.txt`.*

We found mx.allabout.network's robots.txt in place, declaring four disallow paths to guide which areas machines may not crawl, and it references one sitemap to support structured discovery.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 88 entries | Matches crawl count |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** Complete

The sitemap earns a Complete grade, covering 88 URLs with lastmod dates, changefreq values, and priority attributes all present. The inclusion of all three optional fields gives machines the full scheduling context they need to crawl efficiently.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms.txt file present on mx.allabout.network, meaning machines have no structured entry point through which to discover a site description, page inventory, or content policy. We recommend adding a well-formed llms.txt to close this gap and give machines the orientation they need to represent this content accurately in agent answers.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We did not find a llms-full.txt endpoint; the path returns a 404 and the file is neither referenced in the sitemap nor declared via a link relation in the homepage head. For a content-rich property of 95 pages, adding a llms-full.txt would give machines a single, structured source covering the full body of content rather than requiring them to traverse individual pages.

### agent-card.json (A2A)

| Check | Result |
|-------|--------|
| Present at `/.well-known/agent-card.json` | Yes |
| Valid JSON | Yes |
| Service name and description | CogNovaMX — Machine Experience consultancy — strategy, advisory, training, and audit serv… |
| Capabilities declared | 3 skill(s) declared, no transport-level capabilities flag |
| Endpoint URL | https://mx.allabout.network |
| Authentication requirements | None declared (open access) |

### Other discovery files detected

1 additional registered `/.well-known/` path were probed; none returned a recognisable discovery file. The per-path breakdown is preserved alongside this report as a sidecar JSON.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| ListItem | 74 | 100% | 100% | Product |
| WebPage | 81 | 100% | 100% | Website, WebSite, Organization, Person |
| BreadcrumbList | 74 | 100% | 100% | — |
| Offer | 10 | 100% | 100% | Organization, Service, Country, PriceSpecification |
| ImageObject | 29 | 100% | 100% | — |
| BlogPosting | 44 | 100% | 100% | Person, Organization, Reference, Website |
| Organization | 26 | 100% | 100% | Person, ContactPoint, Reference, Website |
| Person | 24 | 100% | 100% | Organization, PropertyValue |
| SpeakableSpecification | 29 | 100% | 100% | — |
| Question | 3 | 100% | 100% | Answer |
| Answer | 3 | 100% | 100% | Person |
| Article | 27 | 98% | 93% | ImageObject, Person, Organization, Reference |
| Book | 6 | 100% | 100% | Person, Organization, Offer, Reference |
| PriceSpecification | 6 | 100% | 100% | — |
| Service | 4 | 100% | 100% | Organization, Service, Website, Offer |
| Product | 6 | 100% | 100% | Brand, Offer, AggregateRating, AggregateOffer |
| Brand | 6 | 100% | 100% | — |
| AggregateRating | 6 | 100% | 100% | — |
| Blog | 6 | 100% | 100% | Organization, Person, Reference, Website |
| CollectionPage | 6 | 100% | 100% | WebPage, Organization, Person, Website |
| LearningResource | 6 | 100% | 100% | EducationalAudience, Organization, Reference, Website |
| EducationalAudience | 6 | 100% | 100% | — |
| PropertyValue | 3 | 100% | 100% | — |
| Review | 3 | 100% | 100% | Person, Organization |
| OfferShippingDetails | 1 | 100% | 100% | MonetaryAmount, DefinedRegion |
| MonetaryAmount | 1 | 100% | 100% | — |
| MerchantReturnPolicy | 1 | 100% | 100% | — |
| ProfessionalService | 4 | 100% | 100% | Organization, Reference, Website, Person |
| WebSite | 3 | 100% | 67% | Organization, Person, Website, Reference |
| AboutPage | 3 | 100% | 100% | Organization, Reference, Website, Person |
| ItemList | 3 | 100% | 100% | — |
| AggregateOffer | 3 | 100% | 100% | Organization |
| FAQPage | 3 | 100% | 100% | Person, Thing, Book, WebPage |
| Country | 1 | 100% | 100% | — |
| Occupation | 1 | 100% | 100% | — |
| ContactPoint | 2 | 100% | 100% | — |
| EntryPoint | 2 | 100% | 100% | — |
| DefinedRegion | 1 | 100% | 100% | — |
| TechArticle | 2 | 100% | 100% | Person, Organization, Reference, Website |
| CommunicateAction | 1 | 100% | 100% | EntryPoint |
| ContactPage | 1 | 100% | 100% | Organization, Person, Reference, Website |
| Thing | 1 | 100% | 100% | — |
| AskAction | 1 | 100% | 100% | EntryPoint |
| ProfilePage | 1 | 100% | 100% | Person, Reference, Website, Organization |
| OfferCatalog | 1 | 100% | 100% | — |

**Structured Data Quality:** 93/100\
**Coverage:** 90 pages with JSON-LD out of 91 total (99%)\
**Unique types:** 45

Across the 95 pages we audited, structured data is strong. Machines extract and cite entity data on these pages reliably; a wider audit confirms whether the same holds across the rest of the estate.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 10 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 25 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 15 | 15 | Average across entities |
| Entity richness | 11 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 15 | 15 | Nested @type values + @id linking |
| Linked-data signals | 9 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 10 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **93** | **100** | |

---

## Structured Data Findings

We identified 12 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

| Page | Type | Severity | Property | Why it matters |
|------|------|----------|----------|----------------|
| /reginald | Article | required | author | No attribution surface — AI agents cannot identify who wrote the article |
| /reginald | Article | recommended | image | Search snippets and social shares show no thumbnail |
| /reginald | Article | recommended | publisher | AI agents cannot identify the publishing organisation; brand attribution lost |
| /reginald | Article | recommended | dateModified | Crawlers cannot tell when the article was last updated; freshness signals stale |
| /reginald/ | Article | required | author | No attribution surface — AI agents cannot identify who wrote the article |
| /reginald/ | Article | recommended | image | Search snippets and social shares show no thumbnail |
| /reginald/ | Article | recommended | publisher | AI agents cannot identify the publishing organisation; brand attribution lost |
| /reginald/ | Article | recommended | dateModified | Crawlers cannot tell when the article was last updated; freshness signals stale |
| /books/download-intro | WebSite | recommended | image | Site has no logo / hero image declared in structured data |
| /books/download-intro | WebSite | recommended | datePublished | No site-level publish date for crawler context |
| /books/download-intro | WebSite | recommended | author | Site has no top-level author/owner declared |
| /books/download-intro | WebSite | recommended | publisher | Site has no top-level publisher declared |

**Severity legend** (the values in the *Severity* column above):

| Severity | Meaning |
|----------|---------|
| `required` | Schema.org spec requires this property for the type. Missing values break validation. |
| `recommended` | Schema.org strongly recommends this property. Missing values reduce richness. |
| `vocabulary` | The `@type` value (the JSON-LD class name an entity declares itself as) is not in the Schema.org vocabulary: typically a typo or an invented type. |

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is: a Product, an Article, an Organization: but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside any single page. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

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
| JSON-LD structured data | Yes | Yes | Yes | Yes | No |
| Microdata (itemscope) | Yes | Yes | Body | Yes | No |
| Open Graph meta tags | Yes | Yes | Yes | Yes | No |
| Twitter Card meta tags | Yes | Yes | Yes | Yes | No |
| MX governance meta tags | Yes | Yes | Yes | Yes | No |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Yes | Yes | Yes | Yes | No |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Yes | Yes | Body | Yes | No |

All detected markers are present in the served HTML on the pages we audited. Server-side and browser-based agents see the same signals on the sampled pages; a wider audit confirms whether the same pattern holds across the rest of the estate.

---

## Schema Maturity Level

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work.

|  | Level | Name | What it looks like | Typical SDQ |  |
|---|-------|------|---------------------|------------|---|
|  | 0 | Clean slate | No Schema.org markup present. Every addition is net new capability: the full maturity curve is open. | 0-29 |  |
| **→** | 1 | Decoration | Typed blocks with sparse properties, no nesting, no cross-references. Schema is treated as boilerplate. | 30-50 | **←** |
|  | 2 | Good schema | Full required and recommended properties, nested types where appropriate, valid vocabulary. No cross-entity wiring. | 75-90 |  |
|  | 3 | Real graph | Level 2 + @id cross-references between entities + linked-data signals (sameAs, mainEntityOfPage, isPartOf). | 90-95 |  |
|  | 4 | Verified linked data | Level 3 + external identifiers (Wikidata QIDs, ISNIs, ORCIDs) + provenance metadata. | 95-100 |  |

**Current level:** 1: Decoration\
**To reach the next level:** Fill in the required and recommended Schema.org properties for each typed block (see structured_data_findings.csv for the specific gaps). Connect related entities: either inline (author Person, publisher Organization, image ImageObject) or via @id references to canonical entities defined elsewhere on the site. Ensure every @type value is a valid Schema.org type.

This is a structural classification, not a numeric score. A page can have a high SDQ score from rich properties without being graph-linked. The maturity level shows whether the schema is decoration, well-formed data, a real graph, or anchored in the linked-data web.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. Failure at any stage breaks the chain for all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Pass | 89 | Crawlable with semantic HTML |
| 2 | Citation | Pass | 100 | Schema.org: WebSite, BreadcrumbList, ListItem (100% required properties) |
| 3 | Search & Compare | Pass | 60 | Commerce schema with 0 supporting patterns |
| 4 | Price Understanding | Pass | 67 | Pricing visible |
| 5 | Purchase Confidence | N/A | -- | No transaction forms detected |

MX Compatible for this site type; Purchase Confidence is N/A.

---

## AI Attribution

When a human clicks a link from ChatGPT, Perplexity, Gemini, Copilot, or Claude to your site, the browser does not record which AI sent them. Your server sees a visit with no "came from" field, and your analytics counts it as if the user typed the URL directly. A higher-converting channel quietly hides inside direct traffic.

This is not a configuration mistake on your end: the information is stripped before your server ever sees the request. In-app browsers on iOS and Android do the same thing, and any AI surface that makes a server-side fetch on the user's behalf carries no browser context at all. The only place to recover the attribution is at the edge, by capturing and classifying the request before it reaches your analytics tag.

We did not surface data sufficient to assess whether an edge capture pattern is active across the audited set; a deeper review would extend that lens.

### Live capture (last 30 days)

| Metric | Count |
|--------|-------|
| AI crawler hits (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …) | 1143 |
| AI referral hits (human visits from chat surfaces) | 1 |
| Total AI-attributable visits | 1144 |

**Top referring AI surfaces:**

| Agent | Event Type | Hits |
|-------|-----------|------|
| amazonbot | crawler | 392 |
| chatgpt | crawler | 238 |
| bytespider | crawler | 190 |
| claude | crawler | 173 |
| meta-ai | crawler | 95 |
| perplexity | crawler | 32 |
| gemini | crawler | 12 |
| ccbot | crawler | 9 |
| applebot | crawler | 1 |
| claude | referral | 1 |

### The 6-step playbook

1. **Set up custom regex channel groups in GA4.** Catches AI referrers that would otherwise land in direct. Match source/medium against `chat.openai.com`, `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`, `claude.ai`. Takes about 30 minutes.
2. **Monitor direct traffic to deep pages.** True type-in traffic lands on the homepage. Direct traffic to deep interior pages is almost always misattributed AI-referred traffic with stripped referrers.
3. **Track AI share of voice.** How often your brand is mentioned as an answer, before anyone clicks. This is the only metric that captures AI attribution at the recommendation layer, not the click layer.
4. **Get third-party validation on sites AI actually cites.** AI models weight citations to high-authority third-party sources. Presence on those sources is a leading indicator of AI recommendation volume.
5. **Structure data so AI models parse you as an entity.** Schema.org Organization + Product + Offer, explicit entity relationships, consistent naming across pages. AI models recommend entities, not page collections.
6. **Capture the first-mover baseline now.** Traditional search volume is shifting into AI surfaces. Brands instrumenting capture now build the historical baseline everyone else will wish they had.

> **Recommendation for Mx Allabout:** adopt an edge-capture pattern. Any runtime that sits in front of the origin and can write to a small datastore works: Cloudflare Workers + D1, Fastly Compute + KV, Vercel Edge Middleware + a serverless DB, AWS Lambda@Edge + DynamoDB, or a lightweight server-side middleware on the origin itself. The shape is the same in each: a User-Agent classifier, a surface classifier, a small insert, and a non-blocking write that does not add latency to the user response. The full pattern is around 100 lines in any of these runtimes and backfills data from deploy day forward.

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether the machine can read the page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether the page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Pass | 91/91 | Every page is well under the 250 KB threshold at which some server-side agents stop reading. The largest page is 92 KB. | Largest page: 92 KB. Threshold: 250 KB. |
| SPA Shell | Pass | 91/91 | Served HTML matches rendered HTML — no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: 0. 0 means served and rendered match. |
| Soft 404 | Pass | 91/91 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 91/91 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 3.44. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 91/91 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | N/M | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 0% of the document on some pages. |
| Broken Code Fences | Pass | 91/91 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Pass | 91/91 | The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents. | 0 page(s) advertise format negotiation. |
| Cross-Host Redirect | Pass | 91/91 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 1 page(s) cross origin during redirect. |
| Generic Headings | Pass | 91/91 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | N/M | Actual prose content averages 63% of served bytes — well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 63%. Threshold: 30%. |
| Inline Tag Bloat | Fail | 1/91 | 1 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 2 element(s) > 500 bytes. Largest inline CSS: 37135 B. Largest inline JS: 1382 B. Page: https://mx.allabout.network/reginald/mx-machine-readiness.html |
| Head Weight | Pass | N/M | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.00. Average: 0.00. Threshold: 0.50. |

**Pipeline Survivability score:** 100/100

Across the audited set, pipeline survivability sits at 100, with only one resilience check warranting attention: inline tag bloat, which we recorded on a single page out of 91. When machines parse a page carrying excess inline tagging, they may spend processing budget on structural noise rather than substantive content, slightly reducing the fidelity of what they extract. Tidying that one page would bring the full audited set to a clean baseline and is the single fix that would close the remaining gap.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 43/100 | high | 95 | 62% | 4 | `div` (17), `div.icon` (6), `div.k` (4), `div.v` (4), `div.who` (4) |

On the worst-performing page in the audited set, https://mx.allabout.network/reginald/mx-machine-readiness.html, we recorded 95 bare divs out of 153 total elements (62%), which means machines processing that page lose structural context and must rely on positional inference to determine meaning. The pattern here is surface-wide rather than deeply nested: a deepest bare chain of only 4 alongside a high bare-div ratio points to a component pipeline where elements are assembled without semantic type assignment, consistent with untyped component frameworks or drag-and-drop tooling. The most immediate opportunity is to wrap the obvious landmarks (header, nav, main, footer, aside) and assign meaningful class names to the top offenders we identified (div, div.icon, div.k, div.v, div.who), which would reduce the bare-div ratio on that page without requiring any structural rebuild.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes (97/98) | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | Yes (97/98) | Prevents XSS and injection attacks |
| X-Frame-Options | Yes (97/98) | Prevents clickjacking |
| X-Content-Type-Options | Yes (97/98) | Prevents MIME-type sniffing |

All five standard security headers are present on every audited response. This is the expected baseline for any production website.

**Coverage:** 97 of 98 audited URLs carry all five headers (`/about` is the exception).

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| / | Yes | Yes | Yes | Yes | Yes |
| /about | Yes | No | No | No | No |
| /about/about.html | Yes | Yes | Yes | Yes | Yes |
| /about/contact.html | Yes | Yes | Yes | Yes | Yes |
| /about/printworks.html | Yes | Yes | Yes | Yes | Yes |
| /blog | Yes | Yes | Yes | Yes | Yes |
| /blog/a-standard-that-knows-what-it-isnt.html | Yes | Yes | Yes | Yes | Yes |
| /blog/agent-discoverability-checklist.html | Yes | Yes | Yes | Yes | Yes |
| /blog/agent-readiness-scores-compared.html | Yes | Yes | Yes | Yes | Yes |
| /blog/ai-mx-and-the-future-of-business.html | Yes | Yes | Yes | Yes | Yes |
| /blog/claude-joins-mx-community.html | Yes | Yes | Yes | Yes | Yes |
| /blog/content-that-manages-itself.html | Yes | Yes | Yes | Yes | Yes |
| /blog/data-sovereignty.html | Yes | Yes | Yes | Yes | Yes |
| /blog/designing-workflows-for-humans-and-machines.html | Yes | Yes | Yes | Yes | Yes |
| /blog/dita-and-mx-a-comparison.html | Yes | Yes | Yes | Yes | Yes |
| /blog/from-blobs-to-bots.html | Yes | Yes | Yes | Yes | Yes |
| /blog/geo-is-a-tactic-mx-is-the-specification.html | Yes | Yes | Yes | Yes | Yes |
| /blog/llms-txt-guide.html | Yes | Yes | Yes | Yes | Yes |
| /blog/machine-experience-adding-metadata.html | Yes | Yes | Yes | Yes | Yes |
| /blog/many-agents-one-metadata-layer.html | Yes | Yes | Yes | Yes | Yes |
| /blog/mx-a-new-role.html | Yes | Yes | Yes | Yes | Yes |
| /blog/mx-handbook-is-here.html | Yes | Yes | Yes | Yes | Yes |
| /blog/mx-manifesto.html | Yes | Yes | Yes | Yes | Yes |
| /blog/principles-changed-how-i-build.html | Yes | Yes | Yes | Yes | Yes |
| /blog/profiles/about.claude.code.html | Yes | Yes | Yes | Yes | Yes |
| /blog/profiles/about.claude.sonnet.4.5.html | Yes | Yes | Yes | Yes | Yes |
| /blog/profiles/about.microsoft.copilot.html | Yes | Yes | Yes | Yes | Yes |
| /blog/profiles/about.tom.cranstoun.html | Yes | Yes | Yes | Yes | Yes |
| /blog/tagged-pdfs-are-mx.html | Yes | Yes | Yes | Yes | Yes |
| /blog/the-agent-web-looks-like-1995.html | Yes | Yes | Yes | Yes | Yes |
| /blog/the-markdown-trap.html | Yes | Yes | Yes | Yes | Yes |
| /blog/tom-cranstoun-launches-mx-handbook.html | Yes | Yes | Yes | Yes | Yes |
| /blog/web-is-just-the-start.html | Yes | Yes | Yes | Yes | Yes |
| /blog/what-i-do-helping-organisations-move-from-found-to-used.html | Yes | Yes | Yes | Yes | Yes |
| /blog/what-is-machine-experience.html | Yes | Yes | Yes | Yes | Yes |
| /blog/why-ai-agents-need-contracts-not-instructions.html | Yes | Yes | Yes | Yes | Yes |
| /blog/why-an-mx-audit-pays-for-itself.html | Yes | Yes | Yes | Yes | Yes |
| /books | Yes | Yes | Yes | Yes | Yes |
| /books/faq.html | Yes | Yes | Yes | Yes | Yes |
| /books/footnotes.html | Yes | Yes | Yes | Yes | Yes |
| /books/handbook.html | Yes | Yes | Yes | Yes | Yes |
| /books/introduction.html | Yes | Yes | Yes | Yes | Yes |
| /books/protocols.html | Yes | Yes | Yes | Yes | Yes |
| /books/the-author.html | Yes | Yes | Yes | Yes | Yes |
| /books/training-vs-inference.html | Yes | Yes | Yes | Yes | Yes |
| /cog.html | Yes | Yes | Yes | Yes | Yes |
| /drafts/cog-spec.v1.md | Yes | Yes | Yes | Yes | Yes |
| /drafts/cog-runtime.md | Yes | Yes | Yes | Yes | Yes |
| /learn | Yes | Yes | Yes | Yes | Yes |
| /learn/accessibility-ai-convergence.html | Yes | Yes | Yes | Yes | Yes |
| /learn/benefits.html | Yes | Yes | Yes | Yes | Yes |
| /learn/common-mistakes.html | Yes | Yes | Yes | Yes | Yes |
| /learn/explicit-over-implicit.html | Yes | Yes | Yes | Yes | Yes |
| /learn/key-principles.html | Yes | Yes | Yes | Yes | Yes |
| /learn/mx-principles.html | Yes | Yes | Yes | Yes | Yes |
| /learn/what-is-mx.html | Yes | Yes | Yes | Yes | Yes |
| /learn/why-mx-matters.html | Yes | Yes | Yes | Yes | Yes |
| /llms-full.txt | Yes | Yes | Yes | Yes | Yes |
| /llms.txt | Yes | Yes | Yes | Yes | Yes |
| /reginald | Yes | Yes | Yes | Yes | Yes |
| /reginald/mx-machine-readiness.html | Yes | Yes | Yes | Yes | Yes |
| /services | Yes | Yes | Yes | Yes | Yes |
| /services/examples.html | Yes | Yes | Yes | Yes | Yes |
| /services/our-approach.html | Yes | Yes | Yes | Yes | Yes |
| /services/our-services.html | Yes | Yes | Yes | Yes | Yes |
| /the-gathering | Yes | Yes | Yes | Yes | Yes |
| /the-gathering/draft-notes.html | Yes | Yes | Yes | Yes | Yes |
| /the-gathering/how-it-works.html | Yes | Yes | Yes | Yes | Yes |
| /the-gathering/join.html | Yes | Yes | Yes | Yes | Yes |
| /the-gathering/sponsorship.html | Yes | Yes | Yes | Yes | Yes |
| /blog/index.html | Yes | Yes | Yes | Yes | Yes |
| /blog/what-googles-web-dev-agent-guidance-does-not-touch.html | Yes | Yes | Yes | Yes | Yes |
| /blog/adobe-just-bought-the-dashboard.html | Yes | Yes | Yes | Yes | Yes |
| /blog/the-new-web-agentic-era-infrastructure.html | Yes | Yes | Yes | Yes | Yes |
| /blog/the-new-web-government-public-sector.html | Yes | Yes | Yes | Yes | Yes |
| /blog/schema-org-and-the-missing-provenance-layer.html | Yes | Yes | Yes | Yes | Yes |
| /blog/what-a-newborn-llm-wants-from-a-cog.html | Yes | Yes | Yes | Yes | Yes |
| /blog/cms-vocabulary-war.html | Yes | Yes | Yes | Yes | Yes |
| /blog/skills-static-not-subroutines.html | Yes | Yes | Yes | Yes | Yes |
| /blog/why-llms-dont-execute-javascript.html | Yes | Yes | Yes | Yes | Yes |
| /blog/cms-summit-26-frankfurt-write-up.html | Yes | Yes | Yes | Yes | Yes |
| /blog/the-provenance-gap.html | Yes | Yes | Yes | Yes | Yes |
| /blog/ai-assistants-are-a-traffic-channel.html | Yes | Yes | Yes | Yes | Yes |
| /blog/why-machines-need-human-creativity.html | Yes | Yes | Yes | Yes | Yes |
| /books/ | Yes | Yes | Yes | Yes | Yes |
| /learn/ | Yes | Yes | Yes | Yes | Yes |
| /services/ | Yes | Yes | Yes | Yes | Yes |
| /blog/ | Yes | Yes | Yes | Yes | Yes |
| /the-gathering/ | Yes | Yes | Yes | Yes | Yes |
| /about/ | Yes | Yes | Yes | Yes | Yes |
| /reginald/ | Yes | Yes | Yes | Yes | Yes |
| /about/index.html | Yes | Yes | Yes | Yes | Yes |
| /books/index.html | Yes | Yes | Yes | Yes | Yes |
| /books/download-intro | Yes | Yes | Yes | Yes | Yes |
| /llms-understanding.txt | Yes | Yes | Yes | Yes | Yes |
| /reginald/mx-machine-readiness.cog.md | Yes | Yes | Yes | Yes | Yes |
| /reginald/mx-machine-readiness.meta.cog.md | Yes | Yes | Yes | Yes | Yes |
| /services/index.html | Yes | Yes | Yes | Yes | Yes |

HTTPS: 98/98 | HSTS: 97/98 | CSP: 97/98 | X-Frame-Options: 97/98 | X-Content-Type-Options: 97/98

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 99% | `/reginald/mx-machine-readiness.html` |
| MX governance tags | 99% | `/reginald/mx-machine-readiness.html` |
| Open Graph tags | 99% | `/reginald/mx-machine-readiness.html` |
| Twitter Card tags | 99% | `/reginald/mx-machine-readiness.html` |
| Skip link | 98% | 2 |
| llms-txt link tag | 98% | 2 |
| Canonical URL | 100% | — |
| Exactly 1 H1 | 100% | — |
| Code examples present | 18% | 75 |
| Self-contained sections | 100% | — |
| Error/troubleshooting docs | 8% | 84 |
| Lighthouse heading compliance | 99% | `/reginald/mx-machine-readiness.html` |

**Overall Consistency:** 99%

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no organisation-name or canonical-URL divergence flagged by the consistency check.

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Pass | Organisation name appears consistently across all 91 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 91-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

---

## PDF Documents: Accessibility and Machine Readability

Accessibility legislation across major markets has converged on ISO 14289-1 (PDF/UA) as the shared technical baseline, with the EAA (Directive (EU) 2019/882, in force 28 June 2025) being the most precisely codified instance of a pattern that also runs through Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada. The machine-readability concern is equally independent: an untagged or image-based PDF is invisible to machines in the same way that unsemantic HTML is, and a properly tagged PDF with a complete structure tree allows search crawlers, AI systems, and automated pipelines to extract text, entities, and structure just as they would from well-formed markup.

We linked no PDFs from the 95-page sample we crawled. This is a statement about what we sampled, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by our sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. We covered HTML structure, structured data, and machine-readability across the crawled pages here; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 14 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: metadata and schema improvements that compound over time
3. **Consider optional enhancements**: optional patterns that give a first-mover advantage in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4 (Compliance Risk) | Priority 1, 2, 3, 4 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimization | P1, P2, P3, P4, P5 (P1–P5) | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set of 95 pages, https://mx.allabout.network demonstrates genuine strength in Structured Data, scoring 93/100, with a rich vocabulary of schema types deployed consistently to help machines understand and surface content accurately. Discovery Readiness matches that figure at 93/100, and SEO reaches 91/100, together forming a solid foundation for both human visitors and the machines that mediate access to them. Where we see the clearest opportunity is in AI Suitability and Accessibility, dimensions where targeted improvements would extend that foundation and ensure no audience, human or machine, is left underserved; we would welcome the chance to walk your team through the prioritised next steps.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 97/100 | Excellent |
| Accessibility | 99/100 | Needs Improvement |
| SEO (all pages) | 91/100 | Excellent |
| SEO (content pages) | 91/100 | Excellent |
| MX Stack Completeness | 96/100 | Excellent |
| Structured Data Quality | 93/100 | Excellent |
| Commerce Visibility | 90/100 | Excellent |
| Discovery Readiness | 93/100 | Excellent |
| Heading Quality | 96/100 | Excellent |
| Semantic Ratio | 57% | Good |
| Agent Readability | 91/100 | Excellent |
| Pipeline Survivability | 100/100 | Excellent |
| Cross-Page Consistency | 99% | Excellent |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| / (nav) | 91 | 100 | 100 | 100 | 100 |
| /about | 90 | 100 | 75 | 100 | 100 |
| /about/about.html | 100 | 100 | 100 | 100 | 100 |
| /about/contact.html | 92 | 100 | 100 | 100 | 100 |
| /about/printworks.html | 100 | 100 | 100 | 100 | 100 |
| /blog | 98 | 100 | 100 | 100 | 100 |
| /blog/a-standard-that-knows-what-it-isnt.html | 92 | 100 | 100 | 100 | 100 |
| /blog/agent-discoverability-checklist.html | 97 | 100 | 100 | 100 | 100 |
| /blog/agent-readiness-scores-compared.html | 92 | 100 | 100 | 100 | 100 |
| /blog/ai-mx-and-the-future-of-business.html | 91 | 100 | 100 | 100 | 100 |
| /blog/claude-joins-mx-community.html | 97 | 100 | 100 | 100 | 100 |
| /blog/content-that-manages-itself.html | 96 | 100 | 100 | 100 | 100 |
| /blog/data-sovereignty.html | 97 | 100 | 100 | 100 | 100 |
| /blog/designing-workflows-for-humans-and-machines.html | 94 | 100 | 100 | 100 | 100 |
| /blog/dita-and-mx-a-comparison.html | 83 | 100 | 100 | 100 | 100 |
| /blog/from-blobs-to-bots.html | 94 | 100 | 100 | 100 | 100 |
| /blog/geo-is-a-tactic-mx-is-the-specification.html | 86 | 100 | 100 | 100 | 100 |
| /blog/llms-txt-guide.html | 99 | 100 | 100 | 100 | 100 |
| /blog/machine-experience-adding-metadata.html | 95 | 90 | 100 | 100 | 100 |
| /blog/many-agents-one-metadata-layer.html | 88 | 100 | 100 | 100 | 100 |
| /blog/mx-a-new-role.html | 97 | 100 | 100 | 100 | 100 |
| /blog/mx-handbook-is-here.html | 92 | 100 | 100 | 100 | 100 |
| /blog/mx-manifesto.html | 98 | 100 | 100 | 100 | 100 |
| /blog/principles-changed-how-i-build.html | 97 | 100 | 100 | 100 | 100 |
| /blog/profiles/about.claude.code.html | 99 | 100 | 100 | 100 | 100 |

*Showing the first 25 of 95 audited pages; the remaining 70 are in `mx-allabout-network-pages-audited.csv` next to this report.*

Pages marked (nav) are navigational: they route visitors to content rather than containing it, and are excluded from the SEO content average. Content-pages SEO average: 91/100.

**URL deduplication note:** 98 crawled URLs resolved to 91 unique pages after canonicalisation (inflation factor 1.08×). The following URL clusters were treated as the same page: https://mx.allabout.network/about (2 variants: https://mx.allabout.network/about, https://mx.allabout.network/about/); https://mx.allabout.network/blog (2 variants: https://mx.allabout.network/blog, https://mx.allabout.network/blog/); https://mx.allabout.network/books (2 variants: https://mx.allabout.network/books, https://mx.allabout.network/books/); https://mx.allabout.network/learn (2 variants: https://mx.allabout.network/learn, https://mx.allabout.network/learn/); https://mx.allabout.network/reginald (2 variants: https://mx.allabout.network/reginald, https://mx.allabout.network/reginald/); https://mx.allabout.network/services (2 variants: https://mx.allabout.network/services, https://mx.allabout.network/services/); https://mx.allabout.network/the-gathering (2 variants: https://mx.allabout.network/the-gathering, https://mx.allabout.network/the-gathering/). Fragment suffixes (such as `#` and `#/`) and trailing-slash variants are treated as identical resources by HTTP servers and search engines; this audit deduplicated them before scoring to avoid inflating per-page counts.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: [N] links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 1387  |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 5     |

---

## Appendix C: Image Optimisation

We audited 297 images across the audited set. The format distribution is strongly consolidated: 294 are served as WebP, with the remaining 3 delivered as SVG. No PNG or JPEG images appear across the audited set, which means the team has already completed the format modernisation work that many projects still have queued. Alt-text coverage stands at 257 images, or 86.5%, leaving 40 images without descriptive text. Those 40 represent the primary accessibility and machine-readability gap in this dimension, and addressing them would bring coverage to full.

Loading strategy is split between two explicit states: 195 images carry `loading="lazy"` and 102 carry `loading="eager"`. Notably, every image in the audited set has an explicit loading attribute set, meaning zero images are left to browser discretion. That is a meaningful quality signal: the browser-default behaviour when no attribute is present is not equivalent to eager loading, because the browser applies its own heuristics that can differ between engines and viewport contexts. The fact that the team has made an explicit decision on every image removes that unpredictability entirely.

> **Double-lazy loading pattern not detected** — no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** Metadata Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **GitHub Pages**. The main audit uses GitHub Pages-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 95 pages analysed | Platform: GitHub Pages | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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

**Date:** 17 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*Read the books: <https://mx.allabout.network/books/index.html>*