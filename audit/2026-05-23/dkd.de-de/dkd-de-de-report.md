---
title: "Dkd: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-23"
modified: "2026-05-23"
client: "Dkd"
clientSlug: "dkd-de-de"
clientUrl: "https://www.dkd.de"
reportId: "dkd-de-de-WEB-AUDIT-20260523"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-23"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Dkd"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 55
accessibilityScore: 90
seoScore: 91
llmSuitabilityScore: 75
totalIssues: 813
pagesAudited: 12
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
    output: "mx-outputs/audit/2026-05-23/dkd.de-de/dkd-de-de-report.pdf"
    description: "Generate PDF audit report for Dkd"
---

# Dkd: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 23 May 2026\
**Report ID:** dkd-de-de-WEB-AUDIT-20260523

---

## About This Report

We audited 12 pages across www.dkd.de's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** This audit covers the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 12 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead: Common Crawl, the archive underpinning most major LLM training datasets, indexes only HTML files, meaning a plain-text llms.txt never enters training corpora regardless of its content quality. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **55**/100 | `##########--------` |
| Accessibility | **90**/100 | `################--` |
| SEO | **91**/100 | `################--` |
| Machine Suitability | **75**/100 | `##############----` |
| MX Stack Completeness | **62**/100 | `###########-------` |
| Agent Readability | **62**/100 | `###########-------` |
| Pipeline Survivability | **77**/100 | `##############----` |

We audited twelve pages of www.dkd.de and found a property that presents well to the humans it serves. Performance stands as the strongest dimension in the audited set, and the SEO foundations reinforce that strong first impression: across the 12 audited pages, a score of 91/100 places the audited set firmly in the Excellent band, meaning search engines can find, crawl, and interpret the content with confidence. The content itself is clear, the brand voice is consistent, and the overall experience reflects a team that has invested meaningfully in the craft of communicating with its audience.

Before we turn to machine-readiness, we want to name accessibility as a Priority 1 compliance item. Across the audited set we recorded 813 raw instances flagged by Pa11y, spanning 25 distinct WCAG AA issue types. The encouraging finding is that the majority of these instances trace to recurring template patterns, meaning a single correction at the theme level resolves a large cluster of instances in one edit rather than requiring page-by-page remediation. Addressing this work protects users who rely on assistive technology and reduces legal exposure. The headline opportunity beyond accessibility is Discovery Readiness, which sits at 25/100 and represents the dimension with the most room to strengthen. Machines, including search crawlers, AI agents, and automated bots, are navigating the site with limited structural guidance, and raising this score is the lever most likely to move overall machine-readiness quickly.

The structured data picture tells a similar story: the Schema Maturity sits at Level 1 (Decoration), with BreadcrumbList and WebSite types already in place but deeper entity signals yet to be added. JSON-LD structured data is the highest-leverage asset available in this context because every machine can read it regardless of how the page is rendered or assembled by TYPO3 at request time. Extending the schema vocabulary is therefore a high-value, low-disruption next step that builds on the groundwork already in place.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, www.dkd.de delivers a strong human experience, with Performance, Accessibility and SEO all sitting in the Excellent band, though the volume of recurring accessibility instances points to template-level patterns as the clearest area for further attention.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Excellent | A |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can survive the content pipeline and partially interpret structured data, though their ability to discover and contextualise www.dkd.de remains constrained by the gap between a strong Pipeline Survivability of 77/100 and a Discovery Readiness of 25/100.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 25/100 | Needs Improvement | D |
| Structured Data Quality | 65/100 | Good | B |
| MX Stack Completeness | 62/100 | Good | B |
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
| **→** | 1 | Discoverable | Deliberate metadata, publisher identified | Agents can discover | **←** |
|  | 2 | Citation-ready | Full MX fields, governance, provenance | Agents can cite and attribute |  |
|  | 3 | Comparable / Attested | Cryptographic attestation, cross-source verifiable | Agents can search, compare, recommend |  |
|  | 4 | Transactable | Registered, priced, SLA-backed, alive | Agents can understand pricing and transact |  |
|  | 5 | Purchase-confident | Third-party audited, fiduciary-grade | Agents can guarantee accuracy at purchase |  |

**Current Level:** 1: Discoverable

**Evidence:** MX Stack Completeness 62/100 | Structured Data Quality 65/100 | Discovery Readiness 25/100 | Consistency 62%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so agents can cite as well as discover. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, www.dkd.de demonstrates real strengths that form a solid foundation for the improvements we outline in this report. Strong SEO scores, a high accessibility baseline, and meaningful structured data coverage all represent groundwork that the recommended changes are designed to build upon.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent - 2033ms average load time |
| SEO (content pages) | 91 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | 4/5 headers present (X-Frame-Options absent); 0 of 12 URLs carry all five |
| Structured Data | 65 | Good - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 79 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 62% | 62% - same metadata patterns across every page |
| Agent access | 6/7 | 6 of 7 AI user-agents receive HTTP 200; Google-Extended blocked |

**Positive patterns observed:**

- JSON-LD is present in the served HTML of every audited page: every agent that fetches the raw HTML gets the structured data.
- Body content ratio averages 49%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We have prioritised the findings below by the degree to which each gap constrains machines from discovering, parsing, and citing www.dkd.de accurately, so discovery and visibility gaps lead because they block everything downstream. Structured data and stack completeness opportunities follow, each representing a distinct lever for extending the reach and reliability of machine-readable signals across the audited set.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Duplicate ID Attributes on 12 of 12 Pages, WCAG 4.1.1 (IDs: accessibility, account, alarm, article, bell) | Compliance Risk | High | Low | Assistive tech users may miss or misread labelled regions on every audited page |
| 2 | Semantic Structure 53/100, Worst Page: /de/kontakt (26 of 48 bare divs) | Compliance Risk | Medium | Medium | Screen reader and keyboard users are less likely to navigate content structure accurately on layout-heavy pages |
| 3 | Discovery Readiness 25/100, Needs Improvement | AI Opportunity | High | Medium | Machines risk missing large portions of www.dkd.de content when no discovery files guide crawl scope |
| 4 | Structured Data Quality 65/100 (Good band, schema gaps present) | AI Opportunity | Medium | Medium | Machines may reduce citation confidence when schema coverage is incomplete across the audited set |

---

**Priority 1: Duplicate ID Attributes on 12 of 12 Pages, WCAG 4.1.1 (IDs: accessibility, account, alarm, article, bell)**

**Bucket:** Compliance Risk

**Finding:** Pa11y surfaces five duplicate `id` values ("accessibility", "account", "alarm", "article", "bell") present on all 12 audited pages. WCAG 4.1.1 (Parsing) requires that every `id` attribute value is unique within a document; when duplicates exist, assistive technologies that use those IDs to resolve labels, landmarks, or skip-navigation targets may silently bind to the wrong element or fail to bind at all. Because the same IDs recur on every audited page, this is a template-level issue: a single fix per repeated pattern propagates the correction across the full affected set. Of the 813 total issues recorded across the audited set, 672 (83%) trace to 56 recurring template-level patterns, and these five duplicate-ID families fall within that group.

**What to change and why:**
- Ensure each `id` value appears exactly once per page. When the same icon or functional element (for example, an SVG icon labelled "accessibility" or "alarm") is used multiple times in a single document, each instance must receive a distinct, unique identifier. This directly addresses WCAG 4.1.1 and prevents assistive technologies from encountering ambiguous anchor targets.
- Audit the template component(s) that render these IDs to confirm whether they originate in a shared partial, an icon sprite, or a navigation include. Because the pattern appears on all 12 audited pages, resolving it at the template level propagates the fix without page-by-page edits, which moves the Accessibility score and closes the WCAG 4.1.1 exposure in one pass.
- After applying the fix, re-run Pa11y across the audited set to confirm the duplicate-ID errors no longer appear. This also provides the audit-trail evidence that a compliance team would expect to see against a reported WCAG 4.1.1 breach.

**Effort:** Low

---

**Priority 2: Semantic Structure 53/100, Worst Page /de/kontakt (26 of 48 Bare Divs)**

**Bucket:** Compliance Risk

**Finding:** The semantic structure rendered score across the audited set sits at 53/100, placing it in the medium band. The worst-case page, https://www.dkd.de/de/kontakt, records 26 bare divs out of 48 total structural elements. The figures cited here (26 of 48) come specifically from that page and should not be read as a uniform average across all 12 audited pages. Because the audited pages share a common template, the structural pattern that produces a high bare-div ratio on /de/kontakt is likely present to varying degrees elsewhere in the set, which is why the band-level score remains below 70 across the audited set.

**What to change and why:**
- Replace presentational wrapper divs that hold discrete, identifiable content blocks with their appropriate semantic counterparts (sections, articles, navigation, aside, main, header, footer). Each conversion gives assistive technologies a document-outline signal they can surface to users, directly addressing the semantic-structure score and supporting WCAG 1.3.1 (Info and Relationships).
- For the contact page specifically, review each bare div to determine whether it wraps a form group, a content section, or a navigation cluster, and assign the semantically correct element. Screen reader users navigating /de/kontakt by landmarks will find structured regions rather than an undifferentiated block of layout, reducing the chance of orientation errors.
- Treat this as a template-level concern where multiple pages share the same wrapper pattern: a change to a shared layout partial would move the score across the audited set rather than requiring individual page edits.
- Validate the resulting landmark and heading structure after changes to confirm the document outline is coherent; this also improves the signal machines use when parsing page structure for content extraction.

**Effort:** Medium

---

**Priority 3: Discovery Readiness 25/100, Needs Improvement**

**Bucket:** AI Opportunity

**Finding:** Discovery Readiness across www.dkd.de scores 25/100, placing it in the Needs Improvement band. This score reflects the degree to which machines (search crawlers, LLMs, and automated agents) can locate, scope, and interpret content without human guidance. A score at this level means that machines arriving at www.dkd.de have limited structured signals telling them what content exists, which pages matter, and how the site wishes its content to be used. Without those signals, coverage in AI-generated answers and search indices is likely to be narrower than the content catalogue warrants.

**What to change and why:**
- Publish a well-formed sitemap that enumerates the canonical URLs machines should index. A sitemap is the primary mechanism by which crawlers establish scope; its absence or incompleteness is the single largest driver of a low Discovery Readiness score and is the highest-leverage change available.
- Extend the existing robots.txt to reference an llms.txt file and add an ai.txt directive. The robots.txt file already carries 21 disallow paths and one sitemap reference, so the file itself is in good shape; the gap is that it carries no signal about AI-specific crawl policy or the location of an llms.txt resource, both of which the Discovery Readiness score rewards directly.
- Consider publishing an llms.txt file at the root of www.dkd.de to provide LLMs and AI agents with a curated, structured index of the site's key content, served as `text/html` so that Common Crawl indexes it. This is an emerging convention that directly improves the likelihood of www.dkd.de content appearing in agent-generated answers, and it is the primary lever for moving the Discovery Readiness score from 25/100 toward a higher band.
- Confirm that any discovery files served at the root return appropriate HTTP status codes and content types, as machines that receive error responses will treat the resource as absent regardless of intent.

**Effort:** Medium

---

**Priority 4: Structured Data Quality 65/100, Schema Coverage Gaps**

**Bucket:** AI Opportunity

**Finding:** Structured data quality across the audited set scores 65/100, sitting in the Good band but with room to extend coverage. The schema types already present are ListItem, BreadcrumbList, and WebSite, which provide navigational context. The gap lies in richer entity and content-type schema that would allow machines to extract factual claims, entity relationships, and page-level intent with greater confidence. When schema coverage is incomplete, machines handling knowledge extraction may reduce their confidence in attributing facts to www.dkd.de, which in turn reduces citation eligibility in AI-generated answers.

**What to change and why:**
- On the /de homepage, add the four recommended properties that are currently absent from the WebSite entity: `image` (a logo or hero image URL), `datePublished` (the site-level publish date), `author` (the top-level author or owner), and `publisher` (the publishing organisation). These are the specific gaps recorded in the Structured Data Findings table and are the most direct route to lifting the recommended-property coverage component of the 65/100 score.
- Where pages describe the organisation itself (such as contact or about pages), add structured data that links identifiers and contact information so that machines can anchor facts to a verified entity record. This reduces the risk of misattribution in agent answers.
- After extending schema coverage, validate all markup against the Schema.org specification to confirm there are no property mismatches or missing required fields. Validation errors in existing markup can suppress rich result eligibility even when the type is present, so clean coverage is more valuable than volume alone.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Organization**: adding `sameAs` properties pointing to dkd's Wikidata, LinkedIn, or other authoritative directory entries on the `Organization` entity gives machines an unambiguous cross-reference that ties the brand's identity across knowledge graphs, reducing the risk of conflation with similarly named entities.

- **potentialAction on Organization**: declaring a `potentialAction` on the root `Organization` entity advertises contact or search capabilities directly to machines, allowing agents to surface actionable entry points when a user asks how to reach or engage with dkd.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for AI agents.

---

## AI Agent Access Test

This test fetches the homepage using the User-Agent strings of known AI agents to verify whether this site is accessible at inference time.

| AI Agent | User-Agent | Status | Result |
|----------|-----------|--------|--------|
| ClaudeBot (Anthropic) | `ClaudeBot/1.0` | 200 | Accessible |
| GPTBot (OpenAI) | `GPTBot/1.0` | 200 | Accessible |
| ChatGPT-User (OpenAI) | `ChatGPT-User/1.0` | 200 | Accessible |
| PerplexityBot | `PerplexityBot/1.0` | 200 | Accessible |
| GoogleOther (Google AI) | `GoogleOther` | 200 | Accessible |
| Google-Extended (Google AI-training opt-out) | `Google-Extended` | 429 | Blocked |
| CCBot (Common Crawl) | `CCBot/2.0` | 200 | Accessible |
| Plain request (no UA) | *(empty)* | 200 | Accessible |

**Summary:** 7 of 8 agents can access the site.

### Markdown Content Negotiation

| Check | Result |
|-------|--------|
| URL probed | https://dkd.de/de |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No - server returned HTML regardless of Accept header |

### Non-Standard Response Headers

No non-standard response headers were recorded in this audit.

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how this site handles errors for both human visitors and machines.

| Check | Result |
|--------|--------|
| HTTP status code | 404 (correct) |
| Custom error page | Yes, branded page with navigation |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | Yes |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | Yes, home link and internal navigation present |
| Internal navigation links | 65 links to same-site pages |
| MX governance tags | Absent |
| Schema.org JSON-LD | Present (review: should not claim valid page) |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.dkd.de/de/typo3-shopware-experten-frankfurt`. A first-time visitor sees the cold-cache cost: the crawler recorded 6950 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes that followed returned 228ms (HTTP 503), 227ms (HTTP 503), 222ms (HTTP 503); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Median-load control.** The median-load control page is `https://www.dkd.de/de/referenzen`. A first-time visitor sees the cold-cache cost: the crawler recorded 1158 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 221ms (HTTP 503), 244ms (HTTP 503), 216ms (HTTP 503); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Verdict:** The slowest page returned slowly on its first cold-cache visit but is served acceptably under cache-busted re-probes; first-time visitors carry a cold-origin cost that the returning-visitor median hides.

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

We found a valid robots.txt in place, carrying 21 disallow paths that define which areas of www.dkd.de machines are restricted from crawling. One sitemap reference is declared within the file, giving crawlers a direct route to the indexed content.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 13 entries | Matches crawl count |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** A

The sitemap earns a grade of A, covering 13 URLs with lastmod dates, changefreq values, and priority attributes all present across every entry. This level of completeness gives machines a well-structured crawl signal with no missing scheduling or weighting metadata to resolve.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms.txt file present at www.dkd.de, meaning machines that query this endpoint for a structured overview of the site receive nothing in return. We recommend adding a well-formed llms.txt covering a site description, a page inventory, and a content policy to give those machines a reliable entry point.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We did not locate an llms-full.txt file; the endpoint returns a 404 and the file is absent from both the sitemap and the homepage head. For a content-rich site such as www.dkd.de, adding an llms-full.txt would give machines a consolidated, full-text view of the pages we audited, improving citation eligibility without requiring repeated crawl requests.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| ListItem | 12 | 100% | 100% | Reference |
| BreadcrumbList | 12 | 100% | 100% | - |
| WebSite | 1 | 100% | 0% | - |

**Structured Data Quality:** 65/100\
**Coverage:** 12 pages with JSON-LD out of 12 total (100%)\
**Unique types:** 3

Across the 12 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 10 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 25 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 15 | 15 | Average across entities |
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
| 3 | Search & Compare | Site type does not require | -- | No comparison content detected |
| 4 | Price Understanding | Site type does not require | -- | No pricing content detected |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

Across the audited set, www.dkd.de is Not Compatible with the MX Journey framework; the three transactional stages (Search & Compare, Price Understanding, and Purchase Confidence) are N/A for this site type, and neither of the two applicable stages passes.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 12/12 | 12 page(s) flag for truncation risk because their main content (the first <main>, <article>, or top heading) sits past the 50 KB safe-fetch offset, even though no page exceeds the 250 KB hard ceiling. Agents with limited fetch windows may stop reading before they reach prose. | Largest page: 232 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See dkd-de-de-pipeline-truncation-risk-pages.csv (12 pages). |
| SPA Shell | Pass | 12/12 | Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: 7. 0 means served and rendered match. |
| Soft 404 | Pass | 12/12 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 12/12 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.18. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 12/12 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | 2/2 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 30% of the document on some pages. Check applied to 2 of 12 audited pages; the remaining 10 pages were skipped by a size or eligibility gate. |
| Broken Code Fences | Pass | 12/12 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Fail | 6/12 | The server advertises content negotiation via Vary: Accept. Agents that ask for a different Accept header may receive different content than the browser version. | 6 page(s) advertise format negotiation. See dkd-de-de-pipeline-http-content-negotiation-(vary)-pages.csv (6 pages). |
| Cross-Host Redirect | Pass | 12/12 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 6 page(s) cross origin during redirect. |
| Generic Headings | Pass | 12/12 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | 2/2 | Actual prose content averages 49% of served bytes - well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 49%. Threshold: 30%. Check applied to 2 of 12 audited pages; the remaining 10 pages were skipped by a size or eligibility gate. |
| Inline Tag Bloat | Fail | 12/12 | 12 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 12 element(s) > 500 bytes. Largest single-page inline CSS block: 2965 B. Largest single-page inline JS block: 841 B. See dkd-de-de-pipeline-inline-tag-bloat-pages.csv (12 pages). |
| Head Weight | Pass | 2/2 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.04. Average: 0.01. Threshold: 0.50. Check applied to 2 of 12 audited pages; the remaining 10 pages were skipped by a size or eligibility gate. |

**Pipeline Survivability score:** 77/100

Across the audited set, every page carries a truncation risk, meaning machines that consume content in fixed-size windows may receive incomplete text and draw conclusions from a partial picture. Content negotiation and inline tag bloat add further friction, making it harder for automated readers to extract clean, well-structured content efficiently. Resolving truncation risk across all twelve pages would have the largest single effect on machine readability, and addressing it represents the clearest opportunity to strengthen how www.dkd.de is understood by every automated reader that visits.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 53/100 | medium | 26 | 54% | 3 | `div.text-columns__column` (133), `div.blog-card__info` (55), `div.text-columns.text-columns--` (46), `div.toujou-card__bottom` (20), `div.toujou-card__chips` (20) |

On the audited page at https://www.dkd.de/de/kontakt, rendered content carries a bare-div ratio of 54% (26 of 48 elements), meaning machines lose structural context and must rely on positional inference to determine meaning rather than reading explicit semantics. The pattern here is surface-wide rather than structural: the deepest bare chain reaches only 3 levels, yet the ratio itself is high, which points to a component framework that emits untyped wrappers at render time rather than a deeply nested hand-coded template. The most direct first move is to wrap the obvious landmarks (header, nav, main, footer, aside) and assign meaningful class names to the highest-frequency bare selectors, which would reduce the ratio materially without requiring any layout restructuring.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | Yes | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

X-Frame-Options is absent from the audited responses. Adding this header at the origin-server or CDN edge closes the corresponding attack surface without touching application code.

**Coverage:** 0 of 12 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| /de | Yes | Yes | Yes | No | Yes |
| /de/leistungen | Yes | Yes | Yes | No | Yes |
| /de/referenzen | Yes | Yes | Yes | No | Yes |
| /de/produkte | Yes | Yes | Yes | No | Yes |
| /de/kontakt | Yes | Yes | Yes | No | Yes |
| /de/impressum | Yes | Yes | Yes | No | Yes |
| /de/datenschutz | Yes | Yes | Yes | No | Yes |
| /de/blog | Yes | Yes | Yes | No | Yes |
| /de/blog/blog-data/kategorie | Yes | Yes | Yes | No | Yes |
| /de/blog/tag | Yes | Yes | Yes | No | Yes |
| /de/typo3-shopware-experten-frankfurt | Yes | Yes | Yes | No | Yes |
| /de/jobs | Yes | Yes | Yes | No | Yes |

HTTPS: 12/12 | HSTS: 12/12 | CSP: 12/12 | X-Frame-Options: 0/12 | X-Content-Type-Options: 12/12

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 100% | - |
| MX governance tags | 0% | 12 |
| Open Graph tags | 100% | - |
| Twitter Card tags | 100% | - |
| Skip link | 0% | 12 |
| llms.txt link tag | 0% | 12 |
| Canonical URL | 100% | - |
| Exactly 1 H1 | 83% | 2 |
| Code examples present | 0% | 12 |
| Self-contained sections | 100% | - |
| Error/troubleshooting docs | 0% | 12 |
| Lighthouse heading compliance | 33% | 8 |

**Overall Consistency:** 62%

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no organisation-name or canonical-URL divergence flagged by the consistency check.

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Pass | Organisation name appears consistently across all 12 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 12-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

We found 6 identical inline fragment(s) repeated across multiple pages, totalling 57 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes per fragment | Appears on N pages | Preview |
|------|-------------------:|-------------------:|---------|
| css | 19 | 24 | .st0{fill:#B6D644;} |
| css | 2478 | 12 | /*InlineDefaultCss*/ /* default styles for extension "tx_for |
| js | 414 | 12 | (function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespa |
| js | 338 | 12 | var _mtm = window._mtm = window._mtm \|\| [];   _mtm.push({'mt |
| js | 67 | 12 | var dataLayer = [];     function gtag(){dataLayer.push(argum |
| css | 4288 | 6 | .rek-prediction .rek-style p{margin:0}.rek-prediction .rek-s |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `dkd-de-de-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate CSS fragment to a shared external file (`<link rel="stylesheet">`), with two exceptions. For the two JavaScript fragments that are third-party vendor scripts (the Leadinfo analytics SDK beginning `(function(l,e,a,d,i,n,f,o)` and the Matomo Tag Manager snippet beginning `var _mtm`), the correct remediation is a configuration change within the respective vendor platform or tag manager rather than a theme-level file extraction; consult the Leadinfo and Matomo Tag Manager documentation to control how and where each snippet is injected. Similarly, the CSS fragment beginning `.rek-prediction .rek-style` carries a `rek-` prefix that identifies it as a third-party recommendation or personalisation SDK stylesheet; if this fragment is injected by a vendor SDK, the correct remediation is likewise a vendor platform configuration change rather than theme-level extraction. The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Across the audited set, we record a structural gap that operates on two independent fronts: accessibility legislation has converged on ISO 14289-1 (PDF/UA) as its technical baseline across major markets, with the EU's Directive (EU) 2019/882 (EAA, in force 28 June 2025) as the most precisely codified example alongside Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada. A tagged PDF with a proper structure tree is also machine-readable in the same way that semantic HTML is, meaning an untagged or image-based PDF is invisible to search crawlers, AI systems, and automated pipelines that would otherwise extract text, entities, and structure from it.

We linked no PDFs from the 12-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 813 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Discovery Readiness improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a first-mover advantage in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2 (Compliance Risk) | Priority 1, 2 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | P1, P2, P3, P4 (P1-P4) | Full machine readiness - every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://www.dkd.de performs well for human visitors, with SEO leading the scorecard at 91/100, reflecting a solid foundation in the signals that search crawlers read. The clearest opportunities lie in Discovery Readiness and Structured Data, where scores of 25/100 and 65/100 respectively indicate that machines encounter meaningful gaps in the metadata and discovery infrastructure needed to surface and interpret this content reliably. We welcome the chance to walk through these findings and map a practical path forward.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 75/100 | Good |
| Accessibility | 90/100 | Excellent |
| SEO (all pages) | 91/100 | Excellent |
| SEO (content pages) | 91/100 | Excellent |
| MX Stack Completeness | 62/100 | Good |
| Structured Data Quality | 65/100 | Good |
| Commerce Visibility | 10/100 | Needs Improvement |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 79/100 | Excellent |
| Semantic Ratio | 23% | Needs Improvement |
| Agent Readability | 62/100 | Good |
| Pipeline Survivability | 77/100 | Excellent |
| Cross-Page Consistency | 62% | Good |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| /de | 92 | 85 | 95 | 85 | 77 |
| /de/leistungen | 92 | 90 | 95 | 85 | 85 |
| /de/referenzen | 94 | 85 | 95 | 69 | 69 |
| /de/produkte | 95 | 95 | 95 | 85 | 85 |
| /de/kontakt | 85 | 90 | 95 | 70 | 70 |
| /de/impressum | 89 | 95 | 95 | 85 | 85 |
| /de/datenschutz | 98 | 90 | 100 | 75 | 75 |
| /de/blog | 94 | 75 | 95 | 83 | 83 |
| /de/blog/blog-data/kategorie | 89 | 95 | 95 | 73 | 73 |
| /de/blog/tag | 79 | 95 | 95 | 70 | 70 |
| /de/typo3-shopware-experten-frankfurt | 88 | 90 | 95 | 83 | 83 |
| /de/jobs | 91 | 90 | 95 | 53 | 53 |

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: 2138 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 2138  |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

We audited 115 images across the audited set. The format distribution shows 37 PNG and 37 JPEG images alongside 41 images in other or unrecognised formats; no WebP or SVG images appear in the pages we reviewed. Alt-text coverage is strong at 97.4%, with 112 of 115 images carrying descriptive text. Three images are missing alt attributes, and addressing those would bring coverage to full compliance with WCAG Success Criterion 1.1.1.

Every one of the 115 images carries a loading="lazy" attribute, and none are set to loading="eager" or left without a loading attribute. That last point is worth noting: omitting the attribute entirely is not equivalent to eager loading; it leaves the decision to the browser's own heuristics, which can vary across rendering contexts. The audited pages avoid that ambiguity entirely, with consistent lazy declarations throughout. We detected no instances of the JS Lazy Pattern, so there is no risk of double-lazy conflicts arising from a native attribute colliding with a JavaScript-driven lazy-load library.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **TYPO3 CMS**. The main audit uses TYPO3 CMS-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 12 pages analysed | Platform: TYPO3 CMS | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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

### MX Stack Completeness (`metadataStackCompleteness`)

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

**Date:** 23 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*Read the books: <https://mx.allabout.network/books/index.html>*