---
title: "Dkd: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-21"
modified: "2026-05-21"
client: "Dkd"
clientSlug: "dkd-de-de"
clientUrl: "https://dkd.de"
reportId: "dkd-de-de-WEB-AUDIT-20260521"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-21"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Dkd"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 97
accessibilityScore: 15
seoScore: 92
llmSuitabilityScore: 64
totalIssues: 303
pagesAudited: 6
version: "1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Dkd. Focus on the highest-leverage MX opportunities surfaced by the audit."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-05-21/dkd.de-de/dkd-de-de-report.pdf"
    description: "Generate PDF audit report for Dkd"
---

# Dkd: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 21 May 2026\
**Report ID:** dkd-de-de-WEB-AUDIT-20260521

---

## About This Report

We audited 6 pages across dkd.de's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** This audit covers the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 6 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead: Common Crawl, the archive underpinning most major LLM training datasets, indexes only HTML files, meaning a plain-text llms.txt never enters training corpora regardless of its content quality. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **97**/100 | `#################-` |
| Accessibility | **15**/100 | `###---------------` **(!)** |
| SEO | **92**/100 | `#################-` |
| Machine Suitability | **64**/100 | `############------` |
| MX Stack | **49**/100 | `#########---------` **(!)** |
| Agent Readability | **68**/100 | `############------` |
| Pipeline Survivability | **79**/100 | `##############----` |

We audited six pages of dkd.de and found a property that serves human visitors well. The SEO foundations are solid, recording 92/100, and performance stands as the strongest human-experience dimension across the audited set. Content is well-structured for readers, and the groundwork for a credible, navigable web presence is clearly there.

Before turning to the machine-experience opportunity, we want to name accessibility as a Priority 1 compliance item. Across the audited set we recorded 303 critical WCAG AA issues. The constructive news is that 280 of those issues trace to 56 recurring template patterns, which means a single theme-level edit per pattern resolves all related instances in one pass rather than requiring page-by-page remediation. The headline opportunity, then, is to address those 56 patterns first and recover the vast majority of the compliance exposure in a contained, structured piece of work. Once that foundation is secure, the next natural step is to extend dkd.de's strengths outward to machines. Discovery Readiness sits at 25/100, Catalogue Visibility at 10/100, and the overall MX Readiness Level registers at Level 1 (Basic), which means that search crawlers, LLMs, and other automated machines currently see a much thinner version of the site than human visitors do. Structured Data Quality at 65/100 and Schema Maturity at Level 1 (Decoration) point to the same direction: the semantic layer that helps machines understand and cite dkd.de's content is present but not yet working at full reach.

The Schema.org JSON-LD already in place across the audited set, covering BreadcrumbList, WebSite, and ListItem types, gives us a concrete anchor to build from regardless of how the platform renders pages to machines. Extending that structured-data layer, pairing it with improved discovery artefacts, and resolving the template-level accessibility patterns are the three moves that together lift dkd.de from a site that performs well for people into one that performs equally well for the machines that increasingly mediate how people find and evaluate it.

> 

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, dkd.de delivers strong SEO performance at 92/100, though accessibility at 15/100 represents the clearest area for improvement.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Needs Improvement | D |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can reliably process and survive the content pipeline at 79/100, work with a partial structured data layer at 65/100, and piece together metadata at 49/100, though discovery remains the binding constraint at 25/100.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 25/100 | Needs Improvement | D |
| Structured Data Quality | 65/100 | Good | B |
| MX Stack Completeness | 49/100 | Could Be Better | C |
| Pipeline Survivability | 79/100 | Excellent | A |

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

**Evidence:** MSC 49/100 | SDQ 65/100 | Discovery 25/100 | Consistency 87%

**To reach the next level:** Add full MX fields and governance metadata. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, dkd.de demonstrates genuine technical strengths that form a solid foundation for the improvements we outline in this report. The SEO score of 92/100 and consistency rating of 87% in particular reflect disciplined, well-maintained work that machines and users alike can build on.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent - N/A - performance data not captured |
| SEO (content pages) | 92 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 0/5 |  - 5 headers absent |
| Structured Data | 65 | Good - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 90 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 87% | 87% - same metadata patterns across every page |
| Agent access | 6/6 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.
- Body content ratio averages 51%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We present the following findings as opportunities prioritised by impact across the audited set, with discovery gaps leading because they block machines from indexing and interpreting content before any other layer can function. Catalogue visibility at 10/100 and Discovery Readiness at 25/100 represent the most consequential areas to strengthen, followed by Metadata Stack Completeness at 49/100 and Structured Data Quality at 65/100.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Duplicate ID Attributes, WCAG 4.1.1 (5 IDs duplicated across 5 of 6 pages; Accessibility 15/100) | Compliance Risk | High | Low | Assistive tech users on affected pages may miss or misread interactive elements |
| 2 | Semantic Structure 53/100, worst page https://www.dkd.de/de/kontakt (26 bare divs of 48 total elements) | Compliance Risk | Medium | Medium | Screen reader and machine traversal of page structure may be unreliable |
| 3 | Discovery Readiness 25/100, Needs Improvement | AI Opportunity | High | Medium | Machines risk missing content that is not surfaced through discovery files |
| 4 | Metadata Stack Completeness 49/100, Could Be Better | AI Opportunity | Medium | Medium | Machines populating agent answers are less likely to cite pages accurately |
| 5 | Structured Data Quality 65/100, Good (schema depth and coverage gaps) | AI Opportunity | Medium | Medium | Machines extracting entity context may build incomplete knowledge representations |

---

**Priority 1: Duplicate ID Attributes, WCAG 4.1.1 (5 IDs on 5 of 6 Pages, Accessibility 15/100)**

**Bucket:** Compliance Risk

**Finding:** We recorded duplicate `id` attribute values for "accessibility", "account", "alarm", "article", and "bell" on 5 of the 6 audited pages. Each of these IDs appears more than once per page, violating WCAG 4.1.1 (Name, Role, Value), which requires that each ID value is unique within a document. The Accessibility score of 15/100 places dkd.de in the Needs Improvement band, and 280 of the 303 issues we identified across the audited set trace to 56 recurring template-level patterns, meaning a single theme edit per pattern resolves all matching instances across the audited set.

**What to change and why:**

- **Remove duplicate ID values for "accessibility", "account", "alarm", "article", and "bell" at the template level.** Because these IDs recur identically across 5 pages, they originate in a shared template partial. Resolving them at the source removes all instances in a single edit and directly moves the WCAG 4.1.1 compliance status from not yet meeting to passing for each affected ID. Assistive technologies (screen readers, switch controls) use ID references for labelling and navigation; duplicate IDs make those references ambiguous or silent.
- **Audit all remaining template patterns for further duplicate IDs before the next release.** The 56 recurring patterns identified mean the five IDs above are representative, not exhaustive. A full template-level pass before the next deployment prevents the same class of issue from re-entering the codebase and protects the Accessibility score gain.
- **Add an automated ID-uniqueness check to the build or staging pipeline.** A lightweight linting step that flags duplicate IDs at build time catches regressions before they reach production pages, reducing the effort needed for future accessibility audits.

**Effort:** Low

---

**Priority 2: Semantic Structure 53/100, Worst Page https://www.dkd.de/de/kontakt (26 Bare Divs of 48 Total Elements)**

**Bucket:** Compliance Risk

**Finding:** The rendered semantic structure score across the audited set sits at 53/100, placing it in the Medium band. The figures 26 bare divs out of 48 total elements come specifically from the worst-performing page in the audited set, https://www.dkd.de/de/kontakt. Because most pages in the audited set share the same template, the structural pattern that produces these figures is likely present elsewhere at varying degrees of severity, even if no other single page reaches the same raw count.

**What to change and why:**

- **Replace presentational divs that carry semantic meaning with appropriate landmark or sectioning elements on the contact page.** At https://www.dkd.de/de/kontakt, 26 of 48 elements are bare divs. Where those divs function as navigation regions, main content areas, complementary content, or form containers, replacing them with semantically meaningful elements gives screen readers and machines a navigable document outline rather than an undifferentiated block of markup. This directly lifts the Semantic Structure score.
- **Audit the shared template for the same substitutions.** Because dkd.de pages share a common template, the same pattern driving the contact-page score is likely present in the wider audited set. Addressing the template layer compounds the benefit of the page-level change.
- **Verify that heading hierarchy is preserved after any structural refactor.** The Heading Quality score is 90/100 across the audited set; any restructuring of div containers risks inadvertently shifting heading levels. Confirming heading order remains intact after the refactor protects an existing strength.

**Effort:** Medium

---

**Priority 3: Discovery Readiness 25/100, Needs Improvement**

**Bucket:** AI Opportunity

**Finding:** Discovery Readiness across the audited set scores 25/100, placing dkd.de in the Needs Improvement band. This score reflects the completeness of the signals that machines use to locate, index, and prioritise content before they ever render a page. At 25/100, the current configuration gives machines limited guidance, meaning content that is valuable to surface in agent answers or search results may be deprioritised or overlooked entirely.

**What to change and why:**

- **Introduce a well-formed llms.txt file at the root of the domain.** Machines that process discovery files use llms.txt to understand what content is available and how it should be treated. Its absence removes a primary routing signal for agent-driven retrieval, reducing the likelihood that dkd.de content is selected as a citation source.
- **Review and expand the sitemap to ensure all canonical pages are represented and that the file validates without errors.** A complete, error-free sitemap is the most reliable signal a machine can follow when building a content index. Gaps in sitemap coverage translate directly to content that risks being missed in agent-populated answers.
- **Confirm that robots.txt does not inadvertently restrict machine access to content intended to be discoverable.** A misconfigured robots.txt can suppress discovery entirely for specific paths, compounding the impact of an already low Discovery Readiness score. Verifying that crawl permissions align with intended visibility is a low-overhead step with a meaningful effect on the score.

**Effort:** Medium

---

**Priority 4: Metadata Stack Completeness 49/100, Could Be Better**

**Bucket:** AI Opportunity

**Finding:** The Metadata Stack Completeness score of 49/100 places dkd.de in the Could Be Better band across the audited set. Metadata completeness governs how confidently a machine can describe a page to a user or another system without needing to parse body content. At 49/100, a meaningful portion of the metadata signals that machines rely on for accurate attribution and summarisation are absent or incomplete.

**What to change and why:**

- **Audit Open Graph and meta description coverage across the audited set and fill gaps on pages where these fields are absent or duplicated.** Machines constructing previews or citations for agent answers draw on Open Graph title, description, and image fields. Where these are missing, machines fall back to heuristic extraction, which reduces citation accuracy and brand consistency in agent-generated responses.
- **Ensure canonical tags are present and correctly self-referencing on every audited page.** A missing or incorrect canonical tag creates ambiguity about which URL should be authoritative, which may lead machines to deprioritise or fragment the page's signal strength across multiple URL variants.
- **Add language metadata (hreflang where multilingual pages exist) to assist machines in routing content to the correct audience context.** Without explicit language signals, machines may serve content to the wrong audience or reduce its ranking confidence in language-specific retrieval contexts.

**Effort:** Medium

---

**Priority 5: Structured Data Quality 65/100, Good (Schema Depth and Coverage Gaps)**

**Bucket:** AI Opportunity

**Finding:** Structured Data Quality scores 65/100 across the audited set, placing it in the Good band. We identified the following schema types already in use: ListItem (11 instances), BreadcrumbList (6 instances), and WebSite (1 instance). While breadcrumb and site-level markup is in place, the schema deployment does not yet extend to entity-level or content-level types that would allow machines to extract richer, more specific knowledge representations from dkd.de pages.

**What to change and why:**

- **Add Organisation schema at the domain level to provide machines with a structured entity record for dkd.de.** Without an Organisation declaration, machines assembling knowledge about the business must infer entity attributes from unstructured content, which reduces confidence in how dkd.de is represented in agent answers and knowledge panels.
- **Extend schema coverage to key content types (for example, Service or Article pages) where the current markup does not describe the content format.** BreadcrumbList conveys navigation hierarchy but does not describe what the page is about. Adding content-type schema on service and editorial pages gives machines a structured path to understand page purpose, which improves citation eligibility and structured snippet candidacy.
- **Validate existing schema implementations to confirm there are no property errors or missing required fields.** A score of 65/100 in the Good band indicates the foundation is present but incomplete. Validating current markup ensures that the structured data that is deployed is machine-readable without errors before new types are added.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Organization**: adding `sameAs` properties to the `WebSite` entity already present across the audited set, pointing to dkd.de's profiles on Wikidata or LinkedIn, gives machines an unambiguous way to reconcile the entity across knowledge graphs and citation sources.

- **BreadcrumbList potentialAction on Organization**: the six `BreadcrumbList` instances across the audited set confirm deep page hierarchies exist, yet no `potentialAction` is declared on any Organisation entity, meaning machines cannot discover contact or service-initiation capabilities directly from the structured data layer.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt: declaring content-use policy here gives machines an explicit, machine-readable signal about how dkd.de's content may be used for training or retrieval, filling a gap we currently observe across the audited set.

---

## AI Agent Access Test

This test fetches the homepage using the User-Agent strings of known AI agents to verify whether this site is accessible at inference time.

| AI Agent | User-Agent | Status | Result |
|----------|-----------|--------|--------|
| ClaudeBot (Anthropic) | `ClaudeBot/1.0` | 200 | Accessible |
| GPTBot (OpenAI) | `GPTBot/1.0` | 200 | Accessible |
| ChatGPT-User (OpenAI) | `ChatGPT-User/1.0` | 429 | Blocked |
| PerplexityBot | `PerplexityBot/1.0` | 200 | Accessible |
| GoogleOther (Google AI) | `GoogleOther` | 200 | Accessible |
| Google-Extended (Google AI-training opt-out) | `Google-Extended` | 429 | Blocked |
| CCBot (Common Crawl) | `CCBot/2.0` | 429 | Blocked |
| Plain request (no UA) | *(empty)* | 200 | Accessible |

**Summary:** 5 of 8 tested agents can access the site. 3 agent(s) received non-200 responses.

### Markdown Content Negotiation

| Check | Result |
|-------|--------|
| URL probed | https://dkd.de/de |
| HTTP status | Not probed |
| Content-Type returned | Not probed |
| Markdown served | Not probed |

### Non-Standard Response Headers

No non-standard response headers were recorded in this audit.

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how this site handles errors for both human visitors and machines.

| Check | Result |
|-------|--------|
| HTTP status code | 404 (correct) |
| Custom error page | Yes, branded page with navigation |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | Yes |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | Yes, home link and internal navigation present |
| Internal navigation links | 65 links to same-site pages |
| MX governance tags | Not assessed in this audit |
| Schema.org JSON-LD | Not assessed in this audit |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.dkd.de/de/datenschutz`. A first-time visitor sees the cold-cache cost: the crawler recorded 0 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 136ms (HTTP 429), 34ms (HTTP 429), 56ms (HTTP 429); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Verdict:** Server response time is within healthy bounds on the slowest page and a median-load page, for both first-visit and returning-visitor requests.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /typo3/
Disallow: /typo3conf/
Disallow: /typo3temp/
Disallow: /fileadmin/_processed_/
Disallow: /_assets/
Disallow: /index.php*
Disallow: /*id=*
Disallow: /*cHash=*
```

*Showing the first 10 lines of `robots.txt`; the full 25-line file is preserved alongside this report as `dkd-de-de-robots-txt.txt`.*

We found dkd.de's robots.txt in place, carrying 21 disallow paths that define the boundaries machines must respect when crawling. A single sitemap reference is declared, giving crawlers a direct route to the site's indexable content.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | [SITEMAP_URL_COUNT] entries | [SITEMAP_LOC_ASSESSMENT] |
| `<lastmod>` | [SITEMAP_HAS_LASTMOD] | [SITEMAP_LASTMOD_ASSESSMENT] |
| `<changefreq>` | [SITEMAP_HAS_CHANGEFREQ] | [SITEMAP_CHANGEFREQ_ASSESSMENT] |
| `<priority>` | [SITEMAP_HAS_PRIORITY] | [SITEMAP_PRIORITY_ASSESSMENT] |

**Sitemap grade:** [SITEMAP_GRADE]

We did not surface data sufficient to assess the sitemap; a deeper review would extend that lens.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We did not detect an llms.txt file at dkd.de, meaning machines that query this endpoint for a structured site description, page inventory, and content policy will find nothing to work with. We recommend adding one to give machines the context they need to represent dkd.de accurately in agent-generated responses.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt at dkd.de; the endpoint returns a 404 with no sitemap reference and no discovery link in the homepage head. For a content-heavy site, we recommend adding one to give machines a single, structured representation of the full content corpus.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| ListItem | 6 | 100% | 100% | Reference |
| BreadcrumbList | 6 | 100% | 100% | - |
| WebSite | 1 | 100% | 0% | - |

**Structured Data Quality:** 65/100\
**Coverage:** 6 pages with JSON-LD out of 6 total (100%)\
**Unique types:** 3

Across the 6 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 10 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 25 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 14 | 15 | Average across entities |
| Entity richness | 0 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 6 | 15 | Nested @type values + @id linking |
| Linked-data signals | 0 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 10 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **65** | **100** | |

---

## Structured Data Findings

We identified 4 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

| Page | Type | Severity | Property | Why it matters |
|------|------|----------|----------|----------------|
| /de | WebSite | recommended | image | Site has no logo / hero image declared in structured data |
| /de | WebSite | recommended | datePublished | No site-level publish date for crawler context |
| /de | WebSite | recommended | author | Site has no top-level author/owner declared |
| /de | WebSite | recommended | publisher | Site has no top-level publisher declared |

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
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Yes | Yes | Yes | Yes | No |
| Twitter Card meta tags | Yes | Yes | Yes | Yes | No |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Not present | Not present | n/a | n/a | n/a |

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
**To reach the next level:** Fill in the required and recommended Schema.org properties for each typed block (see structured_data_findings.csv for the specific gaps). Connect related entities inline or via @id references to canonical entities defined elsewhere on the site. Ensure every @type value is a valid Schema.org type.

This is a structural classification, not a numeric score. A page can have a high SDQ score from rich properties without being graph-linked. The maturity level shows whether the schema is decoration, well-formed data, a real graph, or anchored in the linked-data web.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. Failure at any stage breaks the chain for all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Partial | 78 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 59 | Schema.org: BreadcrumbList, ListItem, ListItem (100% required properties) |
| 3 | Search & Compare | N/A | -- | No comparison content detected |
| 4 | Price Understanding | N/A | -- | No pricing content detected |
| 5 | Purchase Confidence | N/A | -- | No transaction forms detected |

Across the audited set, dkd.de is **Not Compatible**: both assessed MX Journey stages fail, and Search & Compare, Price Understanding, and Purchase Confidence are not applicable for this site type.

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 6/6 | 6 page(s) exceed the 250 KB threshold. Agents with limited fetch windows may stop reading before reaching the main content. | Largest page: 231 KB. Threshold: 250 KB. See dkd-de-de-pipeline-truncation-risk-pages.csv (6 pages). |
| SPA Shell | Pass | 6/6 | Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: 7. 0 means served and rendered match. |
| Soft 404 | Pass | 6/6 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 6/6 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.18. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 6/6 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | 2/2 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 30% of the document on some pages. |
| Broken Code Fences | Pass | 6/6 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Pass | 6/6 | The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents. | 0 page(s) advertise format negotiation. |
| Cross-Host Redirect | Pass | 6/6 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 6 page(s) cross origin during redirect. |
| Generic Headings | Pass | 6/6 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | 2/2 | Actual prose content averages 51% of served bytes - well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 51%. Threshold: 30%. |
| Inline Tag Bloat | Fail | 6/6 | 6 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 6 element(s) > 500 bytes. Largest inline CSS: 2612 B. Largest inline JS: 841 B. See dkd-de-de-pipeline-inline-tag-bloat-pages.csv (6 pages). |
| Head Weight | Pass | 2/2 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.04. Average: 0.01. Threshold: 0.50. |

**Pipeline Survivability score:** 79/100

Across the audited set, two resilience checks warrant attention: Truncation Risk, which we recorded on all six pages, and Inline Tag Bloat. When machines ingest content that is at risk of being cut short or cluttered with inline markup, they may extract incomplete or structurally noisy signals, reducing the reliability of any downstream summaries or citations. Addressing Truncation Risk across the audited set would carry the largest single effect, since it touches every page we reviewed.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 53/100 | medium | 26 | 54% | 3 | `div.text-columns__column` (67), `div.blog-card__info` (55), `div.text-columns.text-columns--` (24), `div.wrap.wrap--master` (6), `div.footer__content.footer__content--custom` (3) |

On the worst-performing page across the audited set, https://www.dkd.de/de/kontakt, we record a bare-div ratio of 54% (26 of 48 divs carry no semantic role), which means machines lose structural context and fall back on positional inference to determine meaning. The pattern here is surface-wide rather than deeply nested: the deepest bare chain reaches only 3 levels, yet selectors such as `div.text-columns__column` and `div.blog-card__info` appear at high frequency, pointing to a component framework that names elements by visual function rather than semantic role. The most cost-effective first move is wrapping the obvious landmarks (header, nav, main, footer, aside) and assigning semantically meaningful class names to the remaining high-frequency bare divs, which would bring the bare-div ratio down materially without requiring any restructuring of the existing layout.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | Yes | Prevents XSS and injection attacks |
| X-Frame-Options | Yes | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

4 of the five standard security headers are absent across every audited response: Content-Security-Policy (CSP), X-Frame-Options, X-Content-Type-Options, HSTS (Strict-Transport-Security). Adding these at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 0 audited URLs carry all five headers.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|

HTTPS: 0/0 | HSTS: 0/0 | CSP: 0/0 | X-Frame-Options: 0/0 | X-Content-Type-Options: 0/0

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 100% | - |
| MX governance tags | N/A | - |
| Open Graph tags | N/A | - |
| Twitter Card tags | N/A | - |
| Skip link | N/A | - |
| llms-txt link tag | N/A | - |
| Canonical URL | 100% | - |
| Exactly 1 H1 | 100% | - |
| Code examples present | N/A | - |
| Self-contained sections | 100% | - |
| Error/troubleshooting docs | N/A | - |
| Lighthouse heading compliance | 33% | 4 |

**Overall Consistency:** 87%

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no organisation-name or canonical-URL divergence flagged by the consistency check.

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Pass | Organisation name appears consistently across all 6 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 6-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

We found 6 identical inline fragment(s) repeated across multiple pages, totalling 37 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes | Pages | Preview |
|------|-------|-------|---------|
| css | 19 | 12 | .st0{fill:#B6D644;} |
| css | 4288 | 6 | .rek-prediction .rek-style p{margin:0}.rek-prediction .rek-s |
| css | 2478 | 6 | /*InlineDefaultCss*/ /* default styles for extension "tx_for |
| js | 414 | 6 | (function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespa |
| js | 338 | 6 | var _mtm = window._mtm = window._mtm \|\| [];   _mtm.push({'mt |
| js | 67 | 6 | var dataLayer = [];     function gtag(){dataLayer.push(argum |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `dkd-de-de-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Across major markets, accessibility legislation has converged on ISO 14289-1 (PDF/UA) as the shared technical baseline: the EAA (Directive (EU) 2019/882, in force 28 June 2025) is the most precisely codified instance, but Section 508 of the US Rehabilitation Act, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada resolve to the same structural standard. Separately, an untagged PDF is invisible to machines: search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from an image-based or untagged document, whereas a properly tagged PDF with a complete structure tree is machine-readable in the same way that semantic HTML is.

We linked no PDFs from the 6-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 303 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Discovery Readiness improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a first-mover advantage in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2 (Compliance Risk) | Priority 1, 2 resolved - WCAG 2.1 AA accessibility compliance restored |
| Full Optimization | P1, P2, P3, P4, P5 (P1-P5) | Full machine readiness - every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://dkd.de performs with genuine strength in SEO, scoring 92/100, which tells us that human visitors are well served by the foundations already in place. The most significant opportunities lie in Discovery Readiness at 25/100 and Accessibility at 15/100, where structured data, discovery artefacts, and metadata all present clear openings to improve how machines read and navigate the content. We invite you to work through the findings that follow and prioritise the steps that will close these gaps.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 64/100 | Good |
| Accessibility | 15/100 | Needs Improvement |
| SEO (all pages) | 92/100 | Excellent |
| SEO (content pages) | 92/100 | Excellent |
| MX Stack Completeness | 49/100 | Could Be Better |
| Structured Data Quality | 65/100 | Good |
| Commerce Visibility | 10/100 | Needs Improvement |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 90/100 | Excellent |
| Semantic Ratio | 22% | Needs Improvement |
| Agent Readability | 68/100 | Good |
| Pipeline Survivability | 79/100 | Excellent |
| Cross-Page Consistency | 87% | Excellent |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| /de | 92 | 0 | 95 | 72 | 64 |
| /de/leistungen | 92 | 0 | 95 | 72 | 72 |
| /de/referenzen | 94 | 80 | 95 | 56 | 56 |
| /de/kontakt | 85 | 0 | 95 | 57 | 57 |
| /de/impressum | 89 | 0 | 95 | 72 | 72 |
| /de/datenschutz | 98 | 0 | 100 | 64 | 64 |

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: [N] links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 0     |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

We did not surface data sufficient to assess image optimisation across the audited set; a deeper review would extend that lens.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** Metadata Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Unknown Platform**. No platform-specific fingerprint was detected, so the audit used conservative default rate limits, paced slowly enough to stay below typical shared-host thresholds, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 6 pages analysed | Platform: Unknown Platform | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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
| Zero heading-level jumps | 25 (else 25 - 8 per jump) |
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

**Date:** 21 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*Read the books: <https://mx.allabout.network/books/index.html>*