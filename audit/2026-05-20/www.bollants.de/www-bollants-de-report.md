---
title: "Www Bollants: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-20"
modified: "2026-05-20"
client: "Www Bollants"
clientSlug: "www-bollants-de"
clientUrl: "https://www.bollants.de"
reportId: "www-bollants-de-WEB-AUDIT-20260520"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-20"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Www Bollants"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 70
accessibilityScore: 2
seoScore: 93
llmSuitabilityScore: 61
totalIssues: 162
pagesAudited: 7
version: "1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Www Bollants. Focus on the highest-leverage MX opportunities surfaced by the audit."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-05-20/www.bollants.de/www-bollants-de-report.pdf"
    description: "Generate PDF audit report for Www Bollants"
---

# Www Bollants: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 20 May 2026\
**Report ID:** www-bollants-de-WEB-AUDIT-20260520

---

## About This Report

We audited 7 pages across www.bollants.de's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** This audit covers the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 7 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead: Common Crawl, the archive underpinning most major LLM training datasets, indexes only HTML files, meaning a plain-text llms.txt never enters training corpora regardless of its content quality. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **70**/100 | `#############-----` |
| Accessibility | **2**/100 | `------------------` **(!)** |
| SEO | **93**/100 | `#################-` |
| Machine Suitability | **61**/100 | `###########-------` |
| MX Stack | **59**/100 | `###########-------` |
| Agent Readability | **65**/100 | `############------` |
| Pipeline Survivability | **90**/100 | `################--` |

We audited seven pages of www.bollants.de and came away with a clear picture of a site that serves its human visitors well. The SEO foundations are strong, recorded at 93/100 across the audited set, and the strongest single dimension we measured is performance, which speaks directly to the quality of the experience a guest or prospective visitor encounters on arrival. The content and brand presentation carry the site purposefully, and the groundwork is plainly there for a confident digital presence.

Before we turn to machine-readiness, we want to name accessibility as a Priority 1 compliance item. We recorded 162 critical WCAG AA issues across the audited set, and while that number is large, the more instructive figure is this: 102 of those issues trace back to 14 recurring template patterns, meaning a single theme-level edit per pattern resolves all instances at once. The headline opportunity on the machine-readiness side is Discovery Readiness, which sits at 40/100, with Catalogue Visibility at 10/100. These scores reflect how visible and legible www.bollants.de is to the machines that increasingly shape where travellers first encounter a property, and lifting them is the natural next step from the solid SEO position already in place.

Structured Data Quality, recorded at 51/100 at Schema Maturity Level 1, is the highest-leverage asset to develop. Rich, well-formed schema is readable by every machine regardless of how a page is rendered or which platform serves it, making schema development a practical priority that pays across search, AI-assisted discovery, and any automated agent that surfaces accommodation options to prospective guests.

> 

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, www.bollants.de delivers strong performance and SEO results, with accessibility representing the primary area for improvement.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Needs Improvement | D |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can reliably retrieve and parse content (Pipeline Survivability 90/100) and extract partial structured context (Structured Data Quality 51/100), though their ability to discover and cite pages with confidence is constrained by the current Discovery Readiness score of 40/100 and Metadata Stack Completeness of 59/100.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 40/100 | Could Be Better | C |
| Structured Data Quality | 51/100 | Good | B |
| MX Stack Completeness | 59/100 | Good | B |
| Pipeline Survivability | 90/100 | Excellent | A |

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

**Evidence:** MSC 59/100 | SDQ 51/100 | Discovery 40/100 | Consistency 90%

**To reach the next level:** Add full MX fields and governance metadata. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, www.bollants.de demonstrates genuine strengths that provide a solid foundation for the improvements ahead, most notably an SEO score of 93/100 and a cross-page consistency rate of 90%. These results reflect careful, considered work and give us a strong platform to build from.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent — 1912ms average load time |
| SEO (content pages) | 93 | Excellent — titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | HTTPS, HSTS, X-Frame-Options, X-Content-Type-Options — 1 header absent |
| Structured Data | 51 | Good — JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 80 | Excellent — single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 90% | 90% — same metadata patterns across every page |
| Agent access | 6/6 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.
- Body content ratio averages 71%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

The findings below are prioritised by impact, with discovery and structured data opportunities leading because gaps there constrain what machines can index, interpret, and act upon before any other signal is evaluated. Catalogue Visibility at 10/100 and Discovery Readiness at 40/100 sit at the top of the order, followed by Structured Data Quality at 51/100 and Metadata Stack Completeness at 59/100.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Duplicate ID "basic-switch", WCAG 4.1.1 (21 instances, 7 pages) | Compliance Risk | High | Low | Assistive tech users may miss interactive controls parsed incorrectly by accessibility APIs |
| 2 | Unlabelled Form Inputs and Empty Anchor, WCAG 4.1.2 (21 instances, 7 pages) | Compliance Risk | High | Low | Screen reader users may miss form fields and footer links with no accessible name |
| 3 | Unlabelled Form Field, WCAG 1.3.1 (7 instances, 7 pages) | Compliance Risk | High | Low | Screen reader users risk missing form fields not exposed to the accessibility tree |
| 4 | Semantic Structure 39/100 (170 of 283 bare divs, https://www.bollants.de/en/living) | Compliance Risk | High | Medium | Screen reader and machine users are less likely to interpret page structure correctly |
| 5 | Discovery Readiness 40/100 (Could Be Better) | Cross-cutting | High | Medium | Machines may miss indexable content, reducing crawl coverage and citation eligibility |
| 6 | Structured Data Quality 51/100 (Good) | AI Opportunity | Medium | Medium | Machines may miss entity relationships, reducing confidence in knowledge-graph entries |

---

**Priority 1: Duplicate ID Attribute "basic-switch", WCAG 4.1.1 (21 instances, 7 pages)**

**Bucket:** Compliance Risk

**Finding:** We recorded 21 instances of the duplicate ID value "basic-switch" across the audited set. The HTML specification requires every ID to be unique within a document; when the same value appears multiple times, accessibility APIs cannot reliably resolve which element a label, control, or ARIA reference points to. With an accessibility score of 2/100 across the audited set, this pattern is one of the most consequential template-level issues we identified.

**What to change and why:**

- Assign a unique ID to each instance of the "basic-switch" element so that accessibility APIs and assistive technologies can map controls to their labels without ambiguity. This directly addresses WCAG 4.1.1 (Parsing) and is a prerequisite for any label or ARIA association that references this ID to function correctly.
- Because this appears 21 times across 7 pages, the element originates in a shared template component. A single correction at the template level removes all 21 instances simultaneously, which is consistent with the audit finding that 102 of 162 issues (63%) trace to 14 recurring template-level patterns.
- Resolving this finding also removes a blocker for downstream WCAG 4.1.2 compliance: any label or aria-labelledby that references "basic-switch" by ID will only bind reliably once the ID is unique.

**Effort:** Low

---

**Priority 2: Unlabelled Form Inputs and Empty Anchor, WCAG 4.1.2 (21 instances, 7 pages)**

**Bucket:** Compliance Risk

**Finding:** We identified three distinct WCAG 4.1.2 violations across the audited set: a number input element with no accessible name (7 instances, 7 pages), a text input element with no accessible name (7 instances, 7 pages), and an anchor element with a valid href but no link content (7 instances, 7 pages). In each case, screen readers encounter a control with no label to announce, leaving the user without context for the purpose or destination of the element. The footer anchor and footer text input share a common selector path, indicating both originate in the same footer template component.

**What to change and why:**

- Provide an accessible name for the number input in the extras area so that screen readers can announce the field's purpose. Without a name, users who cannot see the visual layout have no way to determine what value the field expects. This directly addresses WCAG 4.1.2 (Name, Role, Value).
- Provide link content for the empty footer anchor so that screen reader users understand where the link leads. An anchor with a valid href but no text or alternative text is announced as a bare URL or omitted entirely, which excludes keyboard and screen reader users from that navigation path. This also addresses WCAG 4.1.2.
- Provide an accessible name for the footer text input. Given the shared selector path with the WCAG 1.3.1 finding (Priority 3), a single template correction to the footer component is likely to resolve both this violation and the form-labelling violation simultaneously.

**Effort:** Low

---

**Priority 3: Unlabelled Form Field, WCAG 1.3.1 (7 instances, 7 pages)**

**Bucket:** Compliance Risk

**Finding:** We recorded 7 instances of an unlabelled form field across the audited set, each sharing the same footer selector path as the text input identified under WCAG 4.1.2 in Priority 2. WCAG 1.3.1 (Info and Relationships) requires that information conveyed through visual presentation, such as a field's label, be available in the programmatic structure of the page. Where no label is associated with a form field, that relationship is invisible to assistive technologies and to machines parsing the page's semantic structure.

**What to change and why:**

- Associate a label with the footer form field using a programmatic relationship so that the field's purpose is part of the page's accessibility tree, not just its visual layout. This resolves the WCAG 1.3.1 violation and, because the selector is shared with the WCAG 4.1.2 text input finding, a single footer template edit is expected to address both criteria simultaneously.
- Labelling form fields correctly also benefits machines that parse forms for content extraction; a named field is more reliably interpreted than an anonymous input, which supports the broader goal of improving the audited set's machine-readability.

**Effort:** Low

---

**Priority 4: Semantic Structure 39/100 (170 of 283 bare divs, https://www.bollants.de/en/living)**

**Bucket:** Compliance Risk

**Finding:** At https://www.bollants.de/en/living, the worst page in the audited set, we recorded 170 bare divs out of 283 total elements, yielding a semantic structure score of 39/100 (high-concern band). These figures are specific to that page and are not an average across the audited set; however, because most pages across the audited set share the same template, the structural pattern is likely to recur. When a layout relies heavily on non-semantic containers rather than elements that carry meaning (headings, lists, articles, sections, navigation landmarks), both screen reader users and machines face reduced structural signals for interpreting the page's hierarchy and content relationships.

**What to change and why:**

- Replace generic container elements used for landmark regions (navigation, main content, footer, complementary content) with their appropriate semantic equivalents. This gives screen reader users the ability to navigate by landmark, which is one of the primary keyboard-navigation strategies for users of assistive technologies. It also addresses the programmatic structure requirement underlying WCAG 1.3.1.
- Replace generic wrappers used around lists of items (room features, amenities, links) with list elements so that screen readers announce item counts and allow list navigation. Machines parsing the page for structured content are more likely to extract list relationships correctly when semantic markup is present.
- Because the 39/100 score on the worst page is tied to a shared template, a template-level refactor has the potential to lift the semantic score across the audited set rather than requiring page-by-page edits.

**Effort:** Medium

---

**Priority 5: Discovery Readiness 40/100, Could Be Better**

**Bucket:** Cross-cutting

**Finding:** We recorded a Discovery Readiness score of 40/100 (Could Be Better) across the audited set. This score reflects the completeness of the signals that machines use to find, understand, and prioritise content: sitemap coverage, robots.txt configuration, metadata completeness, and related discovery artefacts. A score in this band means machines are working with an incomplete picture of what www.bollants.de publishes and how its pages relate to one another.

**What to change and why:**

- Review the signals contributing to the 40/100 score, including sitemap accuracy and robots.txt directives, to confirm that the pages intended to be indexed are discoverable and that no accidental disallow rules are narrowing crawl coverage. Machines that cannot reliably find a page cannot index or cite it, regardless of content quality.
- The Metadata Stack Completeness score of 59/100 sits within the same discovery envelope. Ensuring that each page carries a complete set of metadata signals gives machines the context needed to classify content correctly and increases the likelihood of accurate representation in search and agent answers.
- Improving Discovery Readiness is a foundation fix: it raises the ceiling for every other score in this report. A page that is not reliably discovered does not benefit fully from the structured data, SEO, or pipeline-survivability work completed elsewhere.

**Effort:** Medium

---

**Priority 6: Structured Data Quality 51/100, Good**

**Bucket:** AI Opportunity

**Finding:** We recorded a Structured Data Quality score of 51/100 (Good) across the audited set. The audited set already carries a substantial schema vocabulary: ImageObject (178 instances), ListItem (19), Hotel (7), PostalAddress (7), GeoCoordinates (7), OpeningHoursSpecification (7), WebPage (7), BreadcrumbList (7), and Page (7). The gap between what is present and a higher score reflects opportunities to enrich the existing types and to add entity relationships that machines use when building knowledge-graph entries and generating cited answers.

**What to change and why:**

- Enrich the Hotel schema instances with additional properties that machines use to distinguish one property from another in agent answers, such as review aggregations, amenity lists, and price range signals, where those values are accurate and up to date. Machines that encounter a richer Hotel entity are more likely to surface it with confidence in response to relevant queries.
- Review the BreadcrumbList and WebPage instances to confirm that the relationships between them accurately reflect the site's navigation hierarchy. Consistent breadcrumb data reduces ambiguity for machines traversing the content graph and improves the quality of structured snippets in search results.
- Consider whether the existing ImageObject instances carry sufficient descriptive properties. Machines that parse hotel imagery for context use the structured metadata associated with images; incomplete ImageObject records reduce agent confidence in attributing visual content to the correct property or amenity.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **`sameAs` links on Hotel entities**: connecting the seven Hotel entities already in the audited set to authoritative external identifiers (such as Wikidata or Google Knowledge Graph entries) gives machines a stable, cross-platform anchor for www.bollants.de, improving citation eligibility in agent answers about the property.

- **`AggregateRating` on Hotel entities**: the seven Hotel entities across the audited set have no aggregated rating data attached; adding an `AggregateRating` block would allow machines to surface star ratings directly in rich results and agent responses, increasing the property's competitive visibility without structural changes to existing markup.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for AI agents: www.bollants.de currently carries no such directives, and adding them would give machines an explicit, machine-readable signal governing how the site's content may be used for training and retrieval.

---

## AI Agent Access Test

This test fetches the homepage using the User-Agent strings of known AI agents to verify whether this site is accessible at inference time.

| AI Agent | User-Agent | Status | Result |
|----------|-----------|--------|--------|
| ClaudeBot (Anthropic) | `ClaudeBot/1.0` | 0 | Blocked |
| GPTBot (OpenAI) | `GPTBot/1.0` | 200 | Accessible |
| ChatGPT-User (OpenAI) | `ChatGPT-User/1.0` | 200 | Accessible |
| PerplexityBot | `PerplexityBot/1.0` | 200 | Accessible |
| GoogleOther (Google AI) | `GoogleOther` | 200 | Accessible |
| Google-Extended (Google AI-training opt-out) | `Google-Extended` | 200 | Accessible |
| CCBot (Common Crawl) | `CCBot/2.0` | 200 | Accessible |
| Plain request (no UA) | *(empty)* | 200 | Accessible |

**Summary:** 7 of 8 tested agents can access the site. 1 agent(s) received non-200 responses.

### Markdown Content Negotiation

| Check | Result |
|-------|--------|
| URL probed | https://www.bollants.de |
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
| Internal navigation links | 108 links to same-site pages |
| MX governance tags | Not assessed in this audit |
| Schema.org JSON-LD | Not assessed in this audit |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.bollants.de/en`. A first-time visitor sees the cold-cache cost: the crawler recorded 3823 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes that followed returned 548ms, 393ms, 386ms, giving a returning-visitor median of **393 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://www.bollants.de/en/the-hotel/our-story`. A first-time visitor sees the cold-cache cost: the crawler recorded 1673 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 174ms, 176ms, 177ms, giving a returning-visitor median of **176 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** The slowest page returned slowly on its first cold-cache visit but is served acceptably under cache-busted re-probes; first-time visitors carry a cold-origin cost that the returning-visitor median hides.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /contao/
Disallow: /_contao/

Sitemap: https://www.bollants.de/sitemap.xml
```

*The full `robots.txt` (6 lines) is preserved alongside this report as `www-bollants-de-robots-txt.txt`.*

We confirmed that www.bollants.de serves a valid robots.txt declaring two disallow paths and referencing one sitemap, giving machines a clear map of both the crawlable and restricted areas of the property.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 131 entries | Matches crawl count |
| `<lastmod>` | No | Absent |
| `<changefreq>` | No | Missing |
| `<priority>` | No | Absent |

**Sitemap grade:** Minimal

The sitemap for www.bollants.de carries 131 URLs and earns a Minimal grade, with no lastmod, changefreq, or priority attributes present across any entry. Without these signals, machines have no guidance on how frequently content changes or which pages merit prioritised crawling.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms.txt file present on www.bollants.de, meaning machines have no structured entry point for discovering a site description, page inventory, or content policy. We recommend adding one to give crawlers and AI-driven agents a reliable, machine-readable overview of what the audited pages cover.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We did not locate an llms-full.txt file across the audited set; the endpoint returns a 404 and the file is absent from both the sitemap and the homepage head. For a content-heavy property like www.bollants.de, we recommend adding one, as it gives machines a single, structured document covering the full depth of the site's content without requiring repeated page-by-page requests.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| ImageObject | 5 | 100% | 100% | — |
| ListItem | 7 | 100% | 100% | Reference |
| Hotel | 7 | 100% | 100% | PostalAddress, GeoCoordinates, OpeningHoursSpecification |
| PostalAddress | 7 | 100% | 100% | — |
| GeoCoordinates | 7 | 100% | 100% | — |
| OpeningHoursSpecification | 7 | 100% | 100% | — |
| WebPage | 7 | 0% | 100% | — |
| BreadcrumbList | 7 | 100% | 100% | — |
| Page | 7 | 100% | 100% | — |

**Structured Data Quality:** 51/100\
**Coverage:** 7 pages with JSON-LD out of 7 total (100%)\
**Unique types:** 9

Across the 7 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 10 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 0 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 15 | 15 | Average across entities |
| Entity richness | 5 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 10 | 15 | Nested @type values + @id linking |
| Linked-data signals | 2 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 9 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **51** | **100** | |

### Vocabulary Validity Issues

We detected 7 @type values that are not part of the Schema.org vocabulary. Machines that strictly validate against Schema.org will skip these entities entirely.

| Page | Invalid @type | Suggested replacement |
|------|---------------|----------------------|
| /en | Page | @type |
| /en/the-hotel/our-story | Page | @type |
| /en/gift-vouchers-extras | Page | @type |
| /en/before-you-arrive | Page | @type |
| /en/the-hotel/photo-gallery | Page | @type |
| /en/living | Page | @type |
| /en/living/rooms-suites/details | Page | @type |

---

## Structured Data Findings

We identified 14 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

| Page | Type | Severity | Property | Why it matters |
|------|------|----------|----------|----------------|
| /en | WebPage | required | name | Page has no machine-readable title beyond <title> element |
| /en | Page | vocabulary | @type | Schema type is not recognised by the Schema.org vocabulary — likely a typo or invented type |
| /en/the-hotel/our-story | WebPage | required | name | Page has no machine-readable title beyond <title> element |
| /en/the-hotel/our-story | Page | vocabulary | @type | Schema type is not recognised by the Schema.org vocabulary — likely a typo or invented type |
| /en/gift-vouchers-extras | WebPage | required | name | Page has no machine-readable title beyond <title> element |
| /en/gift-vouchers-extras | Page | vocabulary | @type | Schema type is not recognised by the Schema.org vocabulary — likely a typo or invented type |
| /en/before-you-arrive | WebPage | required | name | Page has no machine-readable title beyond <title> element |
| /en/before-you-arrive | Page | vocabulary | @type | Schema type is not recognised by the Schema.org vocabulary — likely a typo or invented type |
| /en/the-hotel/photo-gallery | WebPage | required | name | Page has no machine-readable title beyond <title> element |
| /en/the-hotel/photo-gallery | Page | vocabulary | @type | Schema type is not recognised by the Schema.org vocabulary — likely a typo or invented type |
| /en/living | WebPage | required | name | Page has no machine-readable title beyond <title> element |
| /en/living | Page | vocabulary | @type | Schema type is not recognised by the Schema.org vocabulary — likely a typo or invented type |
| /en/living/rooms-suites/details | WebPage | required | name | Page has no machine-readable title beyond <title> element |
| /en/living/rooms-suites/details | Page | vocabulary | @type | Schema type is not recognised by the Schema.org vocabulary — likely a typo or invented type |

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
| Canonical URL | Not present | Not present | n/a | n/a | n/a |
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
| 1 | Discovery | Pass | 89 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 50 | Schema.org: Hotel, PostalAddress, GeoCoordinates (50% required properties) |
| 3 | Search & Compare | Pass | 70 | Commerce schema with 1 supporting patterns |
| 4 | Price Understanding | Pass | 67 | Pricing visible but no Offer schema for agent parsing |
| 5 | Purchase Confidence | N/A | -- | No transaction forms detected |

Www Bollants is Partially Compatible; Purchase Confidence is N/A for this site type.

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 1/7 | 1 page(s) exceed the 250 KB threshold. Agents with limited fetch windows may stop reading before reaching the main content. | Largest page: 337 KB. Threshold: 250 KB. Page: https://www.bollants.de/en/the-hotel/photo-gallery |
| SPA Shell | Pass | 7/7 | Served HTML matches rendered HTML — no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: -22. 0 means served and rendered match. |
| Soft 404 | Pass | 7/7 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 7/7 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.10. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 7/7 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | N/M | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 0% of the document on some pages. |
| Broken Code Fences | Pass | 7/7 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Pass | 7/7 | The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents. | 0 page(s) advertise format negotiation. |
| Cross-Host Redirect | Pass | 7/7 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 1 page(s) cross origin during redirect. |
| Generic Headings | Pass | 7/7 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | N/M | Actual prose content averages 71% of served bytes — well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 71%. Threshold: 30%. |
| Inline Tag Bloat | Fail | 7/7 | 7 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 24 element(s) > 500 bytes. Largest inline CSS: 0 B. Largest inline JS: 9707 B. See www-bollants-de-pipeline-inline-tag-bloat-pages.csv (7 pages). |
| Head Weight | Pass | N/M | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.00. Average: 0.00. Threshold: 0.50. |

**Pipeline Survivability score:** 90/100

Across the audited set, pipeline survivability sits at 90/100, with two checks worth attention: Truncation Risk and Inline Tag Bloat. Inline Tag Bloat appears on all seven audited pages, meaning machines that process content by stripping or simplifying markup may receive noisier, less coherent text than the underlying content warrants. Addressing Inline Tag Bloat across the audited set would deliver the broadest single improvement to how machines read and relay content from www.bollants.de.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 39/100 | high | 170 | 60% | 5 | `div.inside` (49), `div.tooltip` (30), `div` (21), `div.decolines` (20), `div.handorgel__content__inner` (20) |

On the worst-performing page in the audited set, https://www.bollants.de/en/living, we recorded 170 bare divs out of 283 total elements (60%), a ratio at which machines lose structural context and fall back on positional inference to determine meaning. The pattern here is surface-wide rather than deeply nested: the deepest bare chain reaches only 5 levels, yet selectors such as `div.inside`, `div.tooltip`, and `div.decolines` repeat at high frequency, which is characteristic of component frameworks that emit presentational wrappers without semantic roles. The most cost-effective first move is to wrap the obvious landmark regions (header, nav, main, footer, aside) in their respective elements and assign meaningful class names to the remaining high-frequency wrappers, bringing the bare-div ratio down without any restructuring of the visual layout.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | Yes (6/7) | Prevents clickjacking |
| X-Content-Type-Options | Yes (6/7) | Prevents MIME-type sniffing |

One of the five standard security headers is absent across every audited response: Content-Security-Policy (CSP). Adding these at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 7 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| /en | Yes | Yes | No | No | No |
| /en/the-hotel/our-story | Yes | Yes | No | Yes | Yes |
| /en/gift-vouchers-extras | Yes | Yes | No | Yes | Yes |
| /en/before-you-arrive | Yes | Yes | No | Yes | Yes |
| /en/the-hotel/photo-gallery | Yes | Yes | No | Yes | Yes |
| /en/living | Yes | Yes | No | Yes | Yes |
| /en/living/rooms-suites/details | Yes | Yes | No | Yes | Yes |

HTTPS: 7/7 | HSTS: 7/7 | CSP: 0/7 | X-Frame-Options: 6/7 | X-Content-Type-Options: 6/7

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 100% | — |
| MX governance tags | N/A | — |
| Open Graph tags | 100% | — |
| Twitter Card tags | 100% | — |
| Skip link | N/A | — |
| llms-txt link tag | N/A | — |
| Canonical URL | N/A | — |
| Exactly 1 H1 | 71% | 2 |
| Code examples present | N/A | — |
| Self-contained sections | 100% | — |
| Error/troubleshooting docs | N/A | — |
| Lighthouse heading compliance | 71% | 2 |

**Overall Consistency:** 90%

## Content Consistency

The audited set shows consistent metadata patterns across the seven pages, with no organisation-name or canonical-URL divergence flagged by the consistency check.

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Pass | Organisation name appears consistently across all 7 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 7-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

We found 10 identical inline fragment(s) repeated across multiple pages, totalling 694 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes | Pages | Preview |
|------|-------|-------|---------|
| css | 107052 | 7 | /*! * CleanSlate *   github.com/premasagar/cleanslate * */   |
| js | 4732 | 7 | $(function () {       var $quickform  = $('.quickform');     |
| js | 3087 | 7 | window.dataLayer = window.dataLayer \|\| [];             funct |
| css | 1535 | 7 | @font-face {         font-family: 'Roboto';         font-sty |
| js | 643 | 7 | function generateUUID() {     return 'xxxxxxxx-xxxx-4xxx-yxx |
| js | 423 | 7 | !function(b,e,f,g,a,c,d){b.fbq\|\|(a=b.fbq=function(){a.callMe |
| js | 387 | 7 | //

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Accessibility legislation is converging on ISO 14289-1 (PDF/UA) as the shared technical baseline across major markets, with the EU's EAA (Directive (EU) 2019/882, in force 28 June 2025) representing the most precisely codified instance of a pattern that also runs through Section 508 of the US Rehabilitation Act, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada. The structural requirement, however, carries equal weight for machines: an untagged or image-based PDF is opaque to search crawlers, AI systems, and automated pipelines in the same way that an image-only web page resists semantic parsing, whereas a properly tagged PDF with a complete structure tree becomes machine-readable by the same principle that makes semantic HTML legible to automated readers.

We linked no PDFs from the 7-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 162 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Semantic Structure improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a first-mover advantage in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4 (Compliance Risk) | Priority 1, 2, 3, 4 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimization | P1, P2, P3, P4, P5, P6 (P1–P6) | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://www.bollants.de performs with confidence in search optimisation, recording an SEO score of 93/100 that reflects solid foundational work for human visitors. The clearest opportunities lie in Discovery Readiness at 40/100 and Structured Data at 51/100, where gaps in metadata and machine-readable signals limit how well machines can interpret, index, and cite the content. We welcome the chance to discuss a prioritised roadmap that addresses both dimensions and extends that strong SEO foundation into territory where machines increasingly drive discovery.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 61/100 | Good |
| Accessibility | 2/100 | Needs Improvement |
| SEO (all pages) | 93/100 | Excellent |
| SEO (content pages) | 93/100 | Excellent |
| MX Stack Completeness | 59/100 | Good |
| Structured Data Quality | 51/100 | Good |
| Commerce Visibility | 10/100 | Needs Improvement |
| Discovery Readiness | 40/100 | Could Be Better |
| Heading Quality | 80/100 | Excellent |
| Semantic Ratio | 13% | Needs Improvement |
| Agent Readability | 65/100 | Good |
| Pipeline Survivability | 90/100 | Excellent |
| Cross-Page Consistency | 90% | Excellent |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| /en | 100 | 0 | 75 | 22 | 17 |
| /en/the-hotel/our-story | 100 | 0 | 85 | 32 | 27 |
| /en/gift-vouchers-extras | 84 | 0 | 95 | 20 | 15 |
| /en/before-you-arrive | 97 | 0 | 85 | 42 | 37 |
| /en/the-hotel/photo-gallery | 94 | 0 | 85 | 42 | 37 |
| /en/living | 99 | 0 | 85 | 16 | 11 |
| /en/living/rooms-suites/details | 80 | 0 | 85 | 30 | 25 |

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: [N] links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 491   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set, we catalogued 230 images in total. The format distribution is entirely traditional: 209 are JPEG and 21 are PNG, with no WebP or SVG present anywhere in the pages we reviewed. On the positive side, alt-text coverage is complete, with all 230 images carrying descriptive alt attributes and none missing.

Of the 230 images, 160 carry an explicit `loading="lazy"` attribute and none carry `loading="eager"`. That leaves 70 images with no loading attribute set at all. It is worth being precise about what that means in practice: an absent attribute is not equivalent to eager loading. The browser applies its own heuristics to decide when to fetch those images, typically based on viewport position and connection conditions, which means behaviour can vary across devices and browsers in ways that are difficult to predict or control. For images above the fold, the omission carries a particular cost, since the browser may delay fetching them through its heuristic pass rather than prioritising them as eager would guarantee. Auditing those 70 unattributed images and assigning explicit values where appropriate would give the rendering pipeline a more reliable signal.

> **Double-lazy loading pattern not detected** — no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** Metadata Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Unknown Platform**. No platform-specific fingerprint was detected, so the audit used conservative default rate limits, paced slowly enough to stay below typical shared-host thresholds, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 7 pages analysed | Platform: Unknown Platform | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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

**Date:** 20 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*
