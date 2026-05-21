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
performanceScore: 
accessibilityScore: 0
seoScore: 82
llmSuitabilityScore: 65
totalIssues: 301
pagesAudited: 5
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

We audited 5 pages across dkd.de's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** This audit covers the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 5 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead: Common Crawl, the archive underpinning most major LLM training datasets, indexes only HTML files, meaning a plain-text llms.txt never enters training corpora regardless of its content quality. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **-**/100 | `------------------` |
| Accessibility | **0**/100 | `------------------` **(!)** |
| SEO | **82**/100 | `###############---` |
| Machine Suitability | **65**/100 | `############------` |
| MX Stack | **49**/100 | `#########---------` **(!)** |
| Agent Readability | **69**/100 | `############------` |
| Pipeline Survivability | **77**/100 | `##############----` |

We audited five pages of dkd.de and found a team that clearly invests in its human visitors. The SEO foundations are solid, scoring 82/100 across the audited set, which tells us that the content is well-structured, the metadata is considered, and search engines are being given the right signals to understand what dkd.de offers. The overall presentation and content architecture reflect a team that takes brand communication seriously, and that groundwork serves as a strong base for everything that follows.

Before we turn to the machine-experience opportunity, we want to draw attention to a Priority 1 compliance item. We recorded 301 WCAG AA issues across the audited set, and we want to be direct about what that means for users who rely on assistive technologies. The encouraging finding is that 280 of those issues trace back to 56 recurring template patterns in the TYPO3 CMS theme, which means a focused round of template-level edits, rather than page-by-page remediation, could resolve the majority in a single pass. From there, the headline opportunity is machine readiness. Discovery Readiness sits at 25/100 and Catalogue Visibility at 10/100, which means the infrastructure that machines use to find, index, and cite dkd.de content is at MX Readiness Level 1. Closing that distance is the next natural step, and the groundwork is there to do it efficiently.

The Structured Data Quality score of 65/100 and Schema Maturity at Level 1 point to a schema layer that is present but has room to strengthen. Schema.org JSON-LD is the highest-leverage asset in this context, because every machine can read it regardless of how a page is rendered or delivered. Enriching the existing vocabulary beyond the current BreadcrumbList and WebSite types, and connecting it to the discovery artefacts that agents consult first, would move dkd.de from a site that humans find easily to one that machines can also read, cite, and surface with confidence.

> 

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, dkd.de delivers a strong SEO foundation at 82/100, though accessibility stands as the clear area for improvement, with a score of 0/100 driven by 301 issues that trace largely to repeating template patterns.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | N/A | - |
| Accessibility (WCAG) | Needs Improvement | D |
| Trust and Credibility | Excellent | A |

### Machine Experience

Machines can reliably process content across the audited set once they reach it (Pipeline Survivability 77/100), and structured data gives them a meaningful foothold for interpretation (65/100), though limited discovery readiness (25/100) and a partial metadata stack (49/100) constrain how consistently they can find and contextualise what the site publishes.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 25/100 | Needs Improvement | D |
| Structured Data Quality | 65/100 | Good | B |
| MX Stack Completeness | 49/100 | Could Be Better | C |
| Pipeline Survivability | 77/100 | Excellent | A |

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

**Evidence:** MSC 49/100 | SDQ 65/100 | Discovery 25/100 | Consistency 88%

**To reach the next level:** Add full MX fields and governance metadata. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, dkd.de demonstrates a solid foundation in several areas that give the team a strong platform to build from. An SEO score of 82/100, a consistency rating of 88%, and the presence of structured data across the audited pages all reflect deliberate, careful work that will carry forward into the improvements ahead.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | N/A | N/A - performance data not captured |
| SEO (content pages) | 82 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 0/5 |  - 5 headers absent |
| Structured Data | 65 | Good - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 93 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 88% | 88% - same metadata patterns across every page |
| Agent access | 6/6 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.
- Body content ratio averages 52%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We have prioritised the findings below by the degree to which each gap limits machine access to dkd.de, with discovery and catalogue visibility leading because they determine whether machines can reach and interpret content before any other signal comes into play. Structured Data Quality at 65/100, Discovery Readiness at 25/100, and Metadata Stack Completeness at 49/100 each represent a concrete opportunity to extend the site's reach and legibility across the audited set.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Duplicate ID Attributes, WCAG 4.1.1 (5 IDs × 5 pages, Accessibility 0/100) | Compliance Risk | High | Medium | Assistive tech users may miss or mis-navigate repeated landmark IDs |
| 2 | Semantic Structure 53/100, Worst Page: dkd.de/de/kontakt (26 of 48 bare divs) | Compliance Risk | Medium | Medium | Screen reader users are less likely to navigate content accurately |
| 3 | Discovery Readiness 25/100, robots.txt and sitemap coverage | Cross-cutting | High | Low | Machines risk missing large portions of the audited set |
| 4 | Metadata Stack Completeness 49/100 | Cross-cutting | Medium | Low | Machines may apply lower relevance signals to audited pages |
| 5 | Structured Data Quality 65/100, no Article or Organization schema | AI Opportunity | Medium | Medium | Machines are less likely to attribute content confidently to dkd.de |
| 6 | Pipeline Survivability 77/100 | AI Opportunity | Low | Low | Machines may treat audited pages as lower-confidence sources |

---

**Priority 1: Duplicate ID Attributes, WCAG 4.1.1 (5 IDs, 5 Pages, Accessibility 0/100)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, we recorded five duplicate ID values ("accessibility", "account", "alarm", "article", "bell"), each appearing on all five audited pages. In total, 301 accessibility issues are recorded; 280 of them (93%) trace to 56 recurring template-level patterns, meaning a single theme edit per pattern addresses all instances across the audited set. The Accessibility score stands at 0/100, placing every audited page in legal-exposure territory under WCAG 4.1.1, which requires every ID attribute value to be unique within a document.

**What to change and why:**

- Ensure each ID value is unique within its document. Duplicate IDs break the programmatic name resolution that assistive technologies rely on to connect labels, landmarks, and controls; resolving this moves the Accessibility score away from 0/100 and addresses WCAG 4.1.1 directly.
- Because 280 of the 301 issues trace to 56 template-level patterns, prioritise theme-level changes over page-by-page edits. A single corrected template propagates the fix to every page that inherits it, yielding the highest return per unit of effort.
- Audit the icon-sprite or SVG symbol system that likely generates the "accessibility", "alarm", "bell", "article", and "account" IDs; these labels suggest an icon set whose symbol IDs are being reused across components on the same page, which is a common template-level root cause.
- After template changes are deployed, re-run automated accessibility testing to confirm the duplicate ID count reaches zero, and schedule a manual review to surface any WCAG issues that automated tooling does not reach.

**Effort:** Medium

---

**Priority 2: Semantic Structure 53/100, Worst Page dkd.de/de/kontakt (26 of 48 Bare Divs)**

**Bucket:** Compliance Risk

**Finding:** The rendered Semantic Structure score across the audited set is 53/100, placing it in the medium band and below the 70/100 threshold that indicates sound structural foundations. The figures cited here come specifically from https://www.dkd.de/de/kontakt, the worst-performing page in the audited set: 26 of its 48 total elements are bare divs that carry no semantic role. Because this page shares a template with the other audited pages, the structural pattern is representative of the broader template; the per-page degree will vary, but the root cause applies across the audited set.

**What to change and why:**

- Replace presentational container divs with semantically appropriate elements where the content type is clear (sections of content, navigation regions, lists, articles). Doing so gives screen readers a meaningful document outline to traverse, directly improving navigation for assistive tech users and contributing to the Semantic Structure score.
- Review the contact page template at https://www.dkd.de/de/kontakt specifically, as it surfaces the sharpest concentration of bare divs at 26 of 48 elements; resolving the template driving that page will likely lift the score across the audited set.
- Correct structural choices also benefit machines: a well-formed document outline allows search crawlers and AI agents to segment content into coherent passages, which increases confidence in content attribution and supports the Structured Data Quality score moving upward from 65/100.
- Pair structural changes with a re-run of the semantic structure test to confirm the score moves above 70/100, the threshold at which this finding would be retired from the priority list.

**Effort:** Medium

---

**Priority 3: Discovery Readiness 25/100, robots.txt and Sitemap Coverage**

**Bucket:** Cross-cutting

**Finding:** Discovery Readiness sits at 25/100, placing dkd.de in the Needs Improvement band. This score covers the signals that machines rely on to locate, index, and prioritise content: robots.txt configuration, sitemap quality, and related discovery artefacts. At this level, machines risk missing content across the audited set, and any pages not explicitly discoverable are less likely to be indexed or cited.

**What to change and why:**

- Review the robots.txt file to confirm it does not inadvertently restrict paths that should be crawlable; a misconfigured disallow rule is one of the fastest ways for machines to stop indexing otherwise-well-structured content, and correcting it requires low effort for meaningful Discovery Readiness gain.
- Verify that the XML sitemap is present, valid, and references the correct canonical URLs for all intended pages; a sitemap is one of the primary signals machines use to confirm which URLs are authoritative, and its absence or invalidity directly depresses the 25/100 score.
- Ensure the sitemap is declared in robots.txt so that machines following the robots.txt path can locate it without a separate crawl step; this coupling is a low-effort, high-signal change.
- Once both artefacts are corrected, re-submit the sitemap through available search tooling to prompt re-indexing of the audited set.

**Effort:** Low

---

**Priority 4: Metadata Stack Completeness 49/100**

**Bucket:** Cross-cutting

**Finding:** The Metadata Stack Completeness score of 49/100 indicates that a substantial share of the metadata signals machines read when evaluating page relevance are absent or thin across the audited set. Open Graph tags, canonical declarations, and language attributes each contribute to this score; gaps in any of them reduce the reliability of how machines classify and represent dkd.de content.

**What to change and why:**

- Audit Open Graph metadata across the audited set; pages without valid og:title, og:description, and og:image are likely to receive auto-generated previews from machines and social platforms, reducing the accuracy of how content is represented when shared or cited.
- Confirm that a canonical URL declaration is present on each audited page; without it, machines may index duplicate or near-duplicate versions of the same content, diluting the signal strength of the original page.
- Verify that language metadata is declared consistently; machines use language signals to match content to the correct regional audience, and an absent or inconsistent declaration reduces the likelihood that German-language pages are served to the intended audience.
- Resolving these gaps moves the 49/100 score toward a Good band and strengthens the foundation on which both SEO (currently 82/100) and Discovery Readiness (currently 25/100) improvements rest.

**Effort:** Low

---

**Priority 5: Structured Data Quality 65/100, No Article or Organization Schema**

**Bucket:** AI Opportunity

**Finding:** The Structured Data Quality score of 65/100 indicates that while foundational types are present (BreadcrumbList, ListItem, WebSite), the schema graph across the audited set does not include types that would allow machines to attribute content to an identifiable entity or to classify individual pages as authored articles. Without these types, machines are less likely to surface dkd.de content in contexts where authorship, entity identity, or content type are key ranking signals.

**What to change and why:**

- Add Organization schema to establish dkd.de as a named, identifiable entity; machines use this type to build entity graphs and to confirm that content on a domain belongs to a recognised team or company, which directly supports citation eligibility in AI-generated answers.
- Add Article schema to content-led pages where an author and publication date can be asserted; this type unlocks structured-result eligibility in search and gives machines the signals needed to attribute content accurately, moving the 65/100 score upward.
- Where Article schema is added, include sameAs links pointing to authoritative external profiles (such as a Wikidata entry or a professional directory listing); sameAs triples are the primary mechanism by which machines resolve an on-page entity claim to a known, off-page entity record, reducing ambiguity in agent answers.
- Validate all schema additions against the existing BreadcrumbList and WebSite types to ensure the structured data graph remains internally consistent; a fragmented schema graph reduces machine confidence rather than increasing it.

**Effort:** Medium

---

**Priority 6: Pipeline Survivability 77/100**

**Bucket:** AI Opportunity

**Finding:** Pipeline Survivability sits at 77/100, the Excellent band, indicating that machines can generally extract and process content from the audited set with reasonable confidence. However, the gap between this score and a stronger rating suggests that some structural or content signals may reduce the reliability with which machines reconstruct page content across processing pipelines.

**What to change and why:**

- Review how content is delivered in served HTML (currently 65/100); pages where meaningful content is absent from the served HTML are less likely to survive pipelines that do not execute client-side rendering, reducing confidence for machines that index served HTML directly.
- Resolving the duplicate ID issues identified in Priority 1 will also benefit pipeline survivability: well-formed, structurally sound HTML is more reliably parsed by machines, and the current 0/100 Accessibility score is a strong signal of structural fragility that affects machine processing as well as human users.
- Improving Discovery Readiness (currently 25/100) and Metadata Stack Completeness (currently 49/100) contributes to pipeline survivability indirectly: machines that can locate, identify, and classify pages correctly are more likely to include them in downstream answers and citation sets.

**Effort:** Low

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Organization**: Adding `sameAs` properties to the `WebSite` entity already present across the audited set, pointing to Dkd's Wikidata or LinkedIn profiles, allows machines to disambiguate the brand confidently and increases the likelihood of citation in agent-generated answers about the company.

- **BreadcrumbList potentialAction pairing**: The five `BreadcrumbList` instances across the audited set establish path context, but pairing the root `Organization` or `WebSite` entity with a `potentialAction` (such as a contact or search action) would advertise callable capabilities directly to machines navigating the graph without relying on page content alone.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for AI agents.

---

## AI Agent Access Test

This test fetches the homepage using the User-Agent strings of known AI agents to verify whether this site is accessible at inference time.

| AI Agent | User-Agent | Status | Result |
|----------|-----------|--------|--------|
| ClaudeBot (Anthropic) | `ClaudeBot/1.0` | 429 | Blocked |
| GPTBot (OpenAI) | `GPTBot/1.0` | 429 | Blocked |
| ChatGPT-User (OpenAI) | `ChatGPT-User/1.0` | 429 | Blocked |
| PerplexityBot | `PerplexityBot/1.0` | 429 | Blocked |
| GoogleOther (Google AI) | `GoogleOther` | 429 | Blocked |
| Google-Extended (Google AI-training opt-out) | `Google-Extended` | 429 | Blocked |
| CCBot (Common Crawl) | `CCBot/2.0` | 429 | Blocked |
| Plain request (no UA) | *(empty)* | 429 | Blocked |

**Summary:** 0 of 8 tested agents can access the site. 8 agent(s) received non-200 responses.

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

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. no measurements available for this run.

Server response stability was not measured in this run.

**Verdict:** Slowest-page re-probe data not available for this run.

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

We identified a robots.txt file at dkd.de that declares 21 disallow paths, placing meaningful restrictions on what machines may access, and it announces one sitemap reference to support crawl discovery.

### sitemap.xml

We did not surface data sufficient to assess the sitemap in detail; a deeper review would extend that lens.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We did not find an llms.txt file present on dkd.de, meaning machines have no structured entry point through which to understand the scope, content, or usage policy of this domain. We recommend adding a well-formed llms.txt covering a site description, a page inventory, and a content policy to give machines the context they need to represent this domain accurately.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We did not find an llms-full.txt file at dkd.de; the endpoint returns a 404 with no sitemap reference and no discovery link in the homepage head. For a content-heavy site, we recommend adding one so that machines can retrieve a structured, full-text snapshot of the pages without crawling each URL individually.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| ListItem | 5 | 100% | 100% | Reference |
| BreadcrumbList | 5 | 100% | 100% | - |
| WebSite | 1 | 100% | 0% | - |

**Structured Data Quality:** 65/100\
**Coverage:** 5 pages with JSON-LD out of 5 total (100%)\
**Unique types:** 3

Across the 5 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 10 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 25 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 14 | 15 | Average across entities |
| Entity richness | 0 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 5 | 15 | Nested @type values + @id linking |
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
| 2 | Citation | Partial | 67 | Schema.org: BreadcrumbList, ListItem, ListItem (100% required properties) |
| 3 | Search & Compare | N/A | -- | No comparison content detected |
| 4 | Price Understanding | N/A | -- | No pricing content detected |
| 5 | Purchase Confidence | N/A | -- | No transaction forms detected |

Across the audited set, dkd.de is **Not Compatible** with the MX Journey framework; both applicable stages fail, and Search & Compare, Price Understanding, and Purchase Confidence are N/A for this site type.

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 5/5 | 5 page(s) exceed the 250 KB threshold. Agents with limited fetch windows may stop reading before reaching the main content. | Largest page: 184 KB. Threshold: 250 KB. See dkd-de-de-pipeline-truncation-risk-pages.csv (5 pages). |
| SPA Shell | Pass | 5/5 | Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: 7. 0 means served and rendered match. |
| Soft 404 | Pass | 5/5 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 5/5 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.18. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 5/5 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | 1/1 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 30% of the document on some pages. |
| Broken Code Fences | Pass | 5/5 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Fail | 2/5 | The server advertises content negotiation via Vary: Accept. Agents that ask for a different Accept header may receive different content than the browser version. | 2 page(s) advertise format negotiation. See dkd-de-de-pipeline-http-content-negotiation-(vary)-pages.csv (2 pages). |
| Cross-Host Redirect | Pass | 5/5 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 3 page(s) cross origin during redirect. |
| Generic Headings | Pass | 5/5 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | 1/1 | Actual prose content averages 52% of served bytes - well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 52%. Threshold: 30%. |
| Inline Tag Bloat | Fail | 5/5 | 5 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 5 element(s) > 500 bytes. Largest inline CSS: 2612 B. Largest inline JS: 841 B. See dkd-de-de-pipeline-inline-tag-bloat-pages.csv (5 pages). |
| Head Weight | Pass | 1/1 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.04. Average: 0.01. Threshold: 0.50. |

**Pipeline Survivability score:** 77/100

Across the audited set, we record a Pipeline Survivability score of 77/100, with three checks warranting attention: Truncation Risk, Content Negotiation, and Inline Tag Bloat. Truncation Risk is the most widespread concern, flagged on all five audited pages, meaning machines that cap the length of content they ingest may receive an incomplete picture of each page before they stop reading. Resolving Truncation Risk across the audited set would therefore have the largest single effect on how reliably machines can extract and act on the content we publish.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 53/100 | medium | 26 | 54% | 3 | `div.text-columns__column` (56), `div.text-columns.text-columns--` (20), `div.wrap.wrap--master` (5), `div.blog-card__info` (4), `div.footer__content.footer__content--custom` (3) |

On the worst-performing page in the audited set, https://www.dkd.de/de/kontakt, we record a bare-div ratio of 54% (26 of 48 divs carry no semantic role), which means machines lose structural context and must fall back on positional inference to determine meaning. The pattern here is surface-wide rather than deeply nested: a deepest chain of just 3 levels alongside a high bare ratio points to a component framework that wraps content in untyped divs by default, rather than a hand-coded nesting problem. The most immediate opportunity is to wrap the obvious landmarks (header, nav, main, footer, aside) and assign meaningful roles to the repeated offenders such as `div.text-columns__column` and `div.wrap.wrap--master`, which would bring the bare-div ratio down without requiring any restructuring of the visual layout.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | No | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | No | Prevents MIME-type sniffing |

4 of the five standard security headers are absent from the audited responses: Content-Security-Policy (CSP), X-Frame-Options, X-Content-Type-Options, and HSTS (Strict-Transport-Security). Adding these at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

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
| Lighthouse heading compliance | 40% | 3 |

**Overall Consistency:** 88%

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no organisation-name or canonical-URL divergence flagged by the consistency check.

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Pass | Organisation name appears consistently across all 5 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 5-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

We found 6 identical inline fragment(s) repeated across multiple pages, totalling 21 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes | Pages | Preview |
|------|-------|-------|---------|
| css | 19 | 10 | .st0{fill:#B6D644;} |
| css | 2478 | 5 | /*InlineDefaultCss*/ /* default styles for extension "tx_for |
| js | 414 | 5 | (function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespa |
| js | 338 | 5 | var _mtm = window._mtm = window._mtm \|\| [];   _mtm.push({'mt |
| js | 67 | 5 | var dataLayer = [];     function gtag(){dataLayer.push(argum |
| css | 4288 | 3 | .rek-prediction .rek-style p{margin:0}.rek-prediction .rek-s |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `dkd-de-de-inline-code-duplicates.csv`.*

**Recommendation:** For the two CSS fragments and the `dataLayer` / gtag JS fragment, move each to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS); the fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical. The `GlobalLeadinfoNamespace` fragment (414 bytes, 5 pages) originates from the Leadinfo third-party visitor-identification SDK; the correct remediation is an SDK configuration change with the Leadinfo vendor or an update to the tag-manager deployment, rather than a template-level edit. The `_mtm` fragment (338 bytes, 5 pages) originates from the Matomo Tag Manager loader snippet, which is intentionally inlined by the vendor's installation instructions; the correct remediation is a Matomo configuration change or a tag-manager deployment update, rather than a template-level externalisation.

---

## PDF Documents: Accessibility and Machine Readability

Across the audited set, we identify two parallel concerns that converge on the same structural requirement: accessibility legislation in the EU (EAA, Directive (EU) 2019/882, in force 28 June 2025), the US, the UK, Australia, and Canada has converged on ISO 14289-1 (PDF/UA) as the common technical baseline, meaning any PDF asset we surface carries legal exposure across multiple jurisdictions simultaneously. Equally pressing, an untagged or image-based PDF is opaque to machines: search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from it, whereas a properly tagged PDF with a complete structure tree is machine-readable in precisely the same way that semantic HTML is.

We linked no PDFs from the 5-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 301 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Discovery Readiness improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: implement the sameAs links on Organization and BreadcrumbList potentialAction patterns described in the Optional Enhancements section to strengthen machine attribution and advertise callable capabilities to agents

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2 (Compliance Risk) | Priority 1, 2 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | P1, P2, P3, P4, P5, P6 (P1-P6) | Full machine readiness - every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://dkd.de performs at its strongest in SEO, scoring 82/100, which reflects a well-maintained foundation for search visibility and human-facing discoverability. The clearest opportunities lie in Discovery Readiness at 25/100, where machines encounter meaningful gaps in the signals they rely upon to index and surface content reliably. The findings that follow set out the specific steps available to close these gaps.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 65/100 | Good |
| Accessibility | 0/100 | Needs Improvement |
| SEO (all pages) | 82/100 | Excellent |
| SEO (content pages) | 82/100 | Excellent |
| MX Stack Completeness | 49/100 | Could Be Better |
| Structured Data Quality | 65/100 | Good |
| Commerce Visibility | 10/100 | Needs Improvement |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 93/100 | Excellent |
| Semantic Ratio | 22% | Needs Improvement |
| Agent Readability | 69/100 | Good |
| Pipeline Survivability | 77/100 | Excellent |
| Cross-Page Consistency | 88% | Excellent |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| /de | 82 | 0 | 95 | 72 | 64 |
| /de/leistungen | 82 | 0 | 95 | 72 | 72 |
| /de/kontakt | 76 | 0 | 95 | 57 | 57 |
| /de/impressum | 81 | 0 | 95 | 70 | 70 |
| /de/datenschutz | 88 | 0 | 100 | 62 | 62 |

---

## Appendix B: Link Inventory

Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

---

## Appendix C: Image Optimisation

We did not surface any images across the audited set during this review. With a total image count of zero, there is no format distribution, alt-text coverage, or loading strategy data to report for the five pages we examined.

Because no images were detected, loading attribute analysis does not apply here. We recorded zero instances of loading="lazy", loading="eager", and no-attribute images alike, so there is nothing to distinguish between browser-delegated guessing and explicitly declared loading intent.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** Metadata Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **TYPO3 CMS**. The main audit uses TYPO3 CMS-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 5 pages analysed | Platform: TYPO3 CMS | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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