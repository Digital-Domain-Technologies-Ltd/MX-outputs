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
performanceScore: 70
accessibilityScore: 90
seoScore: 92
llmSuitabilityScore: 65
totalIssues: 527
pagesAudited: 7
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

<!-- ERROR_REPORT_SECTION:START -->

## Audit Diagnostics

**2 blockers detected.** The findings below are drawn from a partial or self-contradicting dataset. Treat the rest of this document as diagnostic context rather than a delivered audit until the items below are resolved and the audit is re-run.

### Blocker: 1 leak(s) in the rendered report

**Source:** audit-pipeline.js (Gate 1 — template-leak check)  ·  **Category:** template-leaks  ·  **At:** 2026-05-21T17:27:37.432Z

The rendered dkd-de-de-report.md contains unresolved placeholders (e.g. `[SITEMAP_...]`, `[N]`, bare bracket-instructions, or REWRITE comment blocks). These would print as literal prose in the PDF. check-template-leaks.js output:

check-template-leaks: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-21/dkd.de-de/dkd-de-de-report.md
  1 leak category/categories found:
  - [bracket-placeholder] 9 unresolved [PLACEHOLDER] token(s): SITEMAP_URL_COUNT, SITEMAP_LOC_ASSESSMENT, SITEMAP_HAS_LASTMOD, SITEMAP_LASTMOD_ASSESSMENT, SITEMAP_HAS_CHANGEFREQ, SITEMAP_CHANGEFREQ_ASSESSMENT, SITEMAP_HAS_PRIORITY, SITEMAP_PRIORITY_ASSESSMENT …
        line 335: "[SITEMAP_URL_COUNT]"
        line 335: "[SITEMAP_LOC_ASSESSMENT]"
        line 336: "[SITEMAP_HAS_LASTMOD]"
        line 336: "[SITEMAP_LASTMOD_ASSESSMENT]"
        line 337: "[SITEMAP_HAS_CHANGEFREQ]"
Resolve each leak before PDF generation:
  - REWRITE block           → rewrite the section into plain prose, then delete the comment
  - {{TOKEN}}               → re-run infill-report.js with the correct results directory
  - [Bracket]               → replace with actual content, or convert to a REWRITE block
  - further-reading-no-qr-table → restore the two-column QR table from the template (| Scan | Link and description |)

**Suggested next steps:**

- Add the missing entries to the `replacements` map in mx-reginald/audit/bin/infill-report.js (look up the placeholder name in the leak detector output above).
- When the source data is genuinely absent, fall back to a clear 'N/A' or a sentence that does not need the count — never let the raw token reach the PDF.
- For multi-line REWRITE blocks, ensure the LLM-rewrite phase has API access (ANTHROPIC_API_KEY set).

### Blocker: Audit gates failed: 0a, 0b, 0d, 1

**Source:** audit-pipeline.js (Phase 3 gate suite)  ·  **Category:** gates-failed  ·  **At:** 2026-05-21T17:36:17.436Z

Phase 3 gate suite reported 4 unresolved gates. Individual gates may have recorded richer detail entries above this one. The PDF below is a partial deliverable produced under the always-produce-PDF rule; treat it as diagnostic context rather than a delivered audit until the listed gates pass.

**Suggested next steps:**

- Review each failed gate entry above for its specific detail and suggested fix.
- Re-run gates only after fixing: mx exec mx-audit --gates mx-outputs/audit/2026-05-21/dkd.de-de/dkd-de-de-report.md
- If the same gate fails twice in a row with no underlying data change, the gate itself is misbehaving — file an issue against the gate script.

---

<!-- ERROR_REPORT_SECTION:END -->

## About This Report

We audited 7 pages across dkd.de's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

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
| Accessibility | **90**/100 | `################--` |
| SEO | **92**/100 | `#################-` |
| Machine Suitability | **65**/100 | `############------` |
| MX Stack | **49**/100 | `#########---------` **(!)** |
| Agent Readability | **67**/100 | `############------` |
| Pipeline Survivability | **78**/100 | `##############----` |

We audited seven pages of dkd.de against ten dimensions of quality, spanning technical SEO, accessibility, structured data, and machine readiness. Across the audited set, the foundations built for human visitors are genuinely solid. SEO sits at 92/100, an Excellent band result, and performance is the standout human-experience dimension, pointing to a well-maintained TYPO3 CMS deployment that serves real visitors efficiently. The content and information architecture read clearly, and those strengths give us a strong base from which to build.

Before we turn to machine readiness, we want to name accessibility as a Priority 1 compliance item. We recorded 527 WCAG AA issues across the audited set, and we recognise that number can look daunting at first glance. The more useful way to read it is this: 408 of those issues trace back to 64 recurring template patterns, meaning a single theme-level edit per pattern resolves all instances at once. The remediation surface is far more concentrated than the raw count implies, and addressing it protects both the users who depend on assistive technologies and the team's audit-trail position. With that work under way, the headline opportunity is machine readiness. Discovery Readiness sits at 25/100 and Catalogue Visibility at 10/100, placing dkd.de at MX Readiness Level 1. Machines, whether search crawlers, AI agents, or automated research tools, currently see a much thinner picture of the site than human visitors do, and closing that gap is where the most significant upside now lives.

The structured data picture tells a similar story. Schema Maturity sits at Level 1, meaning the schema types already present across the audited set serve as decoration rather than as a connected knowledge layer that machines can reason over. Extending that layer with richer, interlinked schema in JSON-LD format is the highest-leverage next step available, because JSON-LD is readable by every class of machine regardless of how a page is rendered or processed downstream.

> 

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, dkd.de delivers a strong experience for human visitors, with Performance, Accessibility, and SEO all reaching the Excellent band, though the 527 accessibility issues traced across the audited set point to template-level patterns worth addressing.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Excellent | A |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can reliably process content once they reach a page (Pipeline Survivability at 78/100) but face meaningful constraints in finding and contextualising that content, reflected in a Discovery Readiness score of 25/100, a Structured Data Quality score of 65/100, and a Metadata Stack Completeness score of 49/100.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 25/100 | Needs Improvement | D |
| Structured Data Quality | 65/100 | Good | B |
| MX Stack Completeness | 49/100 | Could Be Better | C |
| Pipeline Survivability | 78/100 | Excellent | A |

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

**Evidence:** MSC 49/100 | SDQ 65/100 | Discovery 25/100 | Consistency 89%

**To reach the next level:** Add full MX fields and governance metadata. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, dkd.de demonstrates a solid foundation of technical discipline: SEO at 92/100, accessibility at 90/100, and cross-page consistency at 89% represent the groundwork on which the improvements we outline below can be built with confidence. These results reflect genuine investment in quality, and our recommendations are designed to extend that investment rather than redirect it.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent - 1294ms average load time |
| SEO (content pages) | 92 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | HTTPS, HSTS, CSP, X-Content-Type-Options - 1 header absent |
| Structured Data | 65 | Good - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 92 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 89% | 89% - same metadata patterns across every page |
| Agent access | 6/6 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.
- Body content ratio averages 50%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We have prioritised the findings below by the downstream impact each opportunity carries, with discovery and machine-visibility gaps leading because they constrain what every other improvement can achieve. Catalogue Visibility at 10/100 and Discovery Readiness at 25/100 represent the sharpest areas to strengthen across the audited set, followed by Metadata Stack Completeness at 49/100 and Structured Data Quality at 65/100.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---|---|---|---|---|
| 1 | Duplicate ID Attributes on 5 IDs, WCAG 4.1.1 (7 of 7 pages) | Compliance Risk | High | Low | Assistive tech users may miss or misread landmark navigation across the audited set |
| 2 | Semantic Structure 53/100, Worst Page: dkd.de/de/kontakt (26 of 48 bare divs) | Compliance Risk | Medium | Medium | Screen reader and machine traversal of that page may miss content relationships |
| 3 | Discovery Readiness 25/100, Needs Improvement | AI Opportunity | High | Medium | Machines indexing dkd.de are less likely to locate and cache all available content |
| 4 | Metadata Stack Completeness 49/100, Could Be Better | AI Opportunity | High | Medium | Machines parsing page-level signals may assign lower confidence to dkd.de content |
| 5 | Structured Data Quality 65/100, Schema Depth Thin (Good band) | AI Opportunity | Medium | Medium | Machines reading structured markup risk missing entity relationships on audited pages |

---

**Priority 1: Duplicate ID Attributes on 5 IDs, WCAG 4.1.1 (7 of 7 pages)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, five ID values - `accessibility`, `account`, `alarm`, `article`, and `bell` - each appear as duplicate attributes, affecting all 7 audited pages. Because ID values must be unique per the HTML specification, WCAG 4.1.1 is violated on each audited page. Of the 527 total accessibility issues we recorded, 408 (77%) trace to 64 recurring template-level patterns, and these five IDs are consistent members of that pattern group, meaning a template-level correction resolves all instances across the audited set in a single edit cycle.

**What to change and why:**

- **Resolve duplicate IDs for `accessibility`, `account`, `alarm`, `article`, and `bell` at the template level.** Because these IDs recur on all 7 audited pages from a shared template, a single theme edit removes the violation everywhere in the audited set. This directly addresses WCAG 4.1.1 and restores predictable landmark targeting for screen readers and other assistive technology.
- **Audit any JavaScript or CSS that references these IDs by value.** Duplicate IDs cause browsers to return only the first matching element from `getElementById`, so any scripted behaviour tied to these identifiers may already be misfiring silently. Resolving the duplicates will make that behaviour deterministic and reduce the risk of regression during future template changes.
- **Add an automated ID-uniqueness check to the build or CI pipeline.** Because 77% of the 527 issues trace to 64 template patterns, a pre-commit or staging check that flags duplicate IDs will prevent the same class of violation from re-entering the template after the fix is applied.

**Effort:** Low

---

**Priority 2: Semantic Structure 53/100, Worst Page: dkd.de/de/kontakt (26 of 48 bare divs)**

**Bucket:** Compliance Risk

**Finding:** The rendered semantic-structure score across the audited set sits at 53/100, placing it in the medium band. The figures are most acute at https://www.dkd.de/de/kontakt, where 26 of 48 total elements are bare divs with no semantic role. Because the contact page appears to share a common template pattern with other audited pages, the structural concern is not isolated to that URL alone, even though the quantitative figures cited here come specifically from that worst-case page.

**What to change and why:**

- **Replace presentational wrapper divs on the contact page with appropriate sectioning elements where the content's purpose can be named.** Doing so moves the rendered semantic-structure score upward from the medium band and gives screen readers a navigable document outline, which addresses the practical dimension of WCAG 1.3.1 (Info and Relationships).
- **Audit the shared template components that produce the high bare-div ratio on the contact page.** If those components are reused across the audited set, correcting them at the component level will improve semantic scores beyond the contact page without requiring page-by-page edits.
- **Verify that interactive regions within the contact page carry explicit roles where native semantics are absent.** Machines traversing the page for content extraction are less likely to associate related fields and labels when structural markers are missing, reducing the quality of any automated representation of the page.

**Effort:** Medium

---

**Priority 3: Discovery Readiness 25/100, Needs Improvement**

**Bucket:** AI Opportunity

**Finding:** Discovery Readiness for dkd.de scores 25/100, placing it in the Needs Improvement band. This score reflects the availability and quality of the artefacts - such as sitemap coverage, robots.txt signals, and machine-readable discovery files - that machines rely on to locate, understand, and index content. At 25/100, machines indexing dkd.de are less likely to locate and cache the full scope of available content, and the site's presence in agent-generated answers or AI-driven search surfaces is correspondingly reduced.

**What to change and why:**

- **Review the sitemap for completeness and ensure it is declared in robots.txt.** Machines that cannot find a complete and authoritative sitemap risk missing pages that are not sufficiently linked internally, reducing the breadth of what is indexed and surfaced in agent answers.
- **Introduce an llms.txt file at the root of dkd.de.** This file signals to large language model crawlers which content is intended for machine consumption, improving the likelihood that dkd.de content is cited accurately in AI-generated responses. We recommend serving this file with a text/html content type; our recommendation diverges from the llmstxt.org specification in this regard.
- **Audit robots.txt for any Disallow rules that may be inadvertently blocking content machines should reach.** Overly broad crawl restrictions suppress Discovery Readiness directly, and at 25/100 there is material scope to recover score by ensuring the rules in place reflect current intent.

**Effort:** Medium

---

**Priority 4: Metadata Stack Completeness 49/100, Could Be Better**

**Bucket:** AI Opportunity

**Finding:** The Metadata Stack Completeness score of 49/100 indicates that across the audited set, a substantial portion of the page-level metadata signals machines use to understand and represent content are absent or incomplete. Machines parsing these signals may assign lower confidence to dkd.de content when determining whether to cite it, surface it, or use it to answer queries.

**What to change and why:**

- **Review Open Graph and meta-description coverage on the audited pages; the current Metadata Stack Completeness score of 49/100 reflects gaps in these layers.** Where pages lack these fields, machines that rely on page-level metadata for content summarisation may fall back to arbitrary text, producing less accurate representations of dkd.de content in social and AI-driven surfaces.
- **Ensure canonical tags are present and consistent across the audited set.** Missing or conflicting canonical signals may cause machines to index duplicate or lower-quality versions of a page, diluting the authority of the intended canonical URL.
- **Add structured metadata for authorship and publication dates on pages where content type warrants it; the `/de` WebSite entity currently declares neither an `author` nor a `datePublished` property.** Machines assessing content freshness and credibility use these signals; their absence reduces the confidence score machines assign to dkd.de pages when ranking candidate sources for agent answers.

**Effort:** Medium

---

**Priority 5: Structured Data Quality 65/100, Schema Depth Thin (Good band)**

**Bucket:** AI Opportunity

**Finding:** The Structured Data Quality score of 65/100 sits in the Good band, but the schema present across the audited set is limited to ListItem (13 instances), BreadcrumbList (7 instances), and WebSite (1 instance). These types convey navigational hierarchy but carry limited entity information. Machines reading this markup risk missing the relationships between dkd.de as an entity, its services, its people, and its content, reducing the richness of any machine-generated representation.

**What to change and why:**

- **Extend schema coverage to entity types that reflect dkd.de's identity and offerings, such as Organisation, Service, or Person, as appropriate to the content of each audited page.** Richer entity graphs give machines more anchors for attribution and citation, moving the structured-data score from the Good band toward the Excellent band and improving eligibility for knowledge-panel and agent-answer inclusion.
- **Add `sameAs` properties to any Organisation or Person entities where external authoritative references exist.** `sameAs` links allow machines to cross-reference dkd.de entities against known knowledge bases, increasing confidence in attribution and reducing the risk of misidentification in agent-generated answers.
- **Validate all existing schema markup against Schema.org specifications after extending coverage.** The current Pipeline Survivability score of 78/100 indicates there is headroom to improve how reliably machine pipelines parse and use dkd.de's structured output; catching schema errors early prevents silent drops in machine confidence.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Organization**: Adding `sameAs` properties to the `Organization` entity pointing to authoritative external profiles (such as Wikidata or LinkedIn) would allow machines to unambiguously resolve dkd.de to its real-world identity, strengthening citation eligibility in agent-generated answers.

- **potentialAction on Organization**: Attaching a `potentialAction` declaration to the `Organization` entity would advertise contact or search capabilities directly to machines, giving agents a structured entry point for routing user queries toward dkd.de rather than a competitor.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt: Declaring content-use policy for machines via Content-Signal directives would give dkd.de a transparent, standards-aligned signal that AI crawlers can read before deciding whether and how to index or cite the site's content.

---

## AI Agent Access Test

This test fetches the homepage using the User-Agent strings of known AI agents to verify whether this site is accessible at inference time.

| AI Agent | User-Agent | Status | Result |
|----------|-----------|--------|--------|
| ClaudeBot (Anthropic) | `ClaudeBot/1.0` | 200 | Accessible |
| GPTBot (OpenAI) | `GPTBot/1.0` | 429 | Blocked |
| ChatGPT-User (OpenAI) | `ChatGPT-User/1.0` | 200 | Accessible |
| PerplexityBot | `PerplexityBot/1.0` | 429 | Blocked |
| GoogleOther (Google AI) | `GoogleOther` | 200 | Accessible |
| Google-Extended (Google AI-training opt-out) | `Google-Extended` | 200 | Accessible |
| CCBot (Common Crawl) | `CCBot/2.0` | 200 | Accessible |
| Plain request (no UA) | *(empty)* | 429 | Blocked |

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

**Slowest.** The slowest page is `https://www.dkd.de/de`. A first-time visitor sees the cold-cache cost: the crawler recorded 2617 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 128ms (HTTP 429), 40ms (HTTP 429), 27ms (HTTP 429); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Median-load control.** The median-load control page is `https://www.dkd.de/de/datenschutz`. A first-time visitor sees the cold-cache cost: the crawler recorded 958 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 31ms (HTTP 429), 36ms (HTTP 429), 36ms (HTTP 429); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Verdict:** Server response time is within healthy bounds for the slowest page across both first-visit and returning-visitor views.

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

We found a robots.txt file in place, carrying 21 disallow paths that collectively restrict which areas machines are permitted to crawl. One sitemap reference is announced, giving crawlers a declared entry point to the permitted content.

### sitemap.xml

We did not surface data sufficient to assess the sitemap for dkd.de; a deeper review would extend that lens.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We did not detect a llms.txt file at dkd.de, meaning machines that consult this endpoint to understand the scope and purpose of the site will find nothing to work with. We recommend adding a well-formed llms.txt covering a site description, a page inventory, and a content policy to give those machines a reliable starting point.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We did not find an llms-full.txt endpoint at dkd.de; the path returns a 404 with no entry in the sitemap and no discovery link in the homepage head. For a content-heavy site such as dkd.de, adding a full-text variant would give machines a single, structured source for every page rather than requiring them to crawl each URL individually.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| ListItem | 7 | 100% | 100% | Reference |
| BreadcrumbList | 7 | 100% | 100% | - |
| WebSite | 1 | 100% | 0% | - |

**Structured Data Quality:** 65/100\
**Coverage:** 7 pages with JSON-LD out of 7 total (100%)\
**Unique types:** 3

Across the 7 pages we audited, structured data is present on every page. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

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
| 2 | Citation | Partial | 67 | Schema.org: BreadcrumbList, ListItem, ListItem (100% required properties) |
| 3 | Search & Compare | N/A | -- | No comparison content detected |
| 4 | Price Understanding | N/A | -- | No pricing content detected |
| 5 | Purchase Confidence | N/A | -- | No transaction forms detected |

Partially Compatible; Search & Compare, Price Understanding, and Purchase Confidence are N/A for this site type.

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Pass | 7/7 | All audited pages are within the 250 KB threshold. Agents with limited fetch windows are not at risk of missing main content on these pages. | Largest page: 232 KB. Threshold: 250 KB. See dkd-de-de-pipeline-truncation-risk-pages.csv (7 pages). |
| SPA Shell | Pass | 7/7 | Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: 7. 0 means served and rendered match. |
| Soft 404 | Pass | 7/7 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 7/7 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.18. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 7/7 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | 2/2 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 30% of the document on some pages. |
| Broken Code Fences | Pass | 7/7 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Fail | 1/7 | The server advertises content negotiation via Vary: Accept. Agents that ask for a different Accept header may receive different content than the browser version. | 1 page(s) advertise format negotiation. Page: https://www.dkd.de/de/datenschutz |
| Cross-Host Redirect | Pass | 7/7 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 6 page(s) cross origin during redirect. |
| Generic Headings | Pass | 7/7 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | 2/2 | Actual prose content averages 50% of served bytes - well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 50%. Threshold: 30%. |
| Inline Tag Bloat | Fail | 7/7 | 7 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 7 element(s) > 500 bytes. Largest inline CSS: 2612 B. Largest inline JS: 841 B. See dkd-de-de-pipeline-inline-tag-bloat-pages.csv (7 pages). |
| Head Weight | Pass | 2/2 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.04. Average: 0.01. Threshold: 0.50. |

**Pipeline Survivability score:** 78/100

Across the audited set, two resilience checks merit attention: Content Negotiation and Inline Tag Bloat. Inline Tag Bloat is the most widespread, touching all seven audited pages, which means agents performing cheap fetches may encounter avoidable inline overhead before reaching key information. Addressing Inline Tag Bloat across the audited set would have the largest single effect on how efficiently machines can process and pass on what dkd.de communicates.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 53/100 | medium | 26 | 54% | 3 | `div.text-columns__column` (78), `div.blog-card__info` (55), `div.text-columns.text-columns--` (28), `div.wrap.wrap--master` (7), `div.text-columns.text-columns--above` (4) |

On the audited contact page (https://www.dkd.de/de/kontakt), we recorded 26 of 48 divs as bare elements, a 54% ratio that leaves machines without the structural context needed to determine meaning from position alone. The pattern is surface-wide rather than structurally deep: a deepest bare chain of 3 alongside a high bare-div ratio points to a component framework where elements receive scoped class names such as `div.text-columns__column` and `div.blog-card__info` but no corresponding landmark semantics, suggesting untyped components assembled outside a semantically governed pipeline. The most direct first move is to wrap the obvious landmarks (header, nav, main, footer, aside) so that machines gain reliable entry points without any restructuring of the existing layout.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | Yes | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

One of the five standard security headers is absent across every audited response: X-Frame-Options. Adding these at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 7 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| /de | Yes | Yes | Yes | No | Yes |
| /de/leistungen | Yes | Yes | Yes | No | Yes |
| /de/referenzen | Yes | Yes | Yes | No | Yes |
| /de/produkte | Yes | Yes | Yes | No | Yes |
| /de/kontakt | Yes | Yes | Yes | No | Yes |
| /de/impressum | Yes | Yes | Yes | No | Yes |
| /de/datenschutz | Yes | Yes | Yes | No | Yes |

HTTPS: 7/7 | HSTS: 7/7 | CSP: 7/7 | X-Frame-Options: 0/7 | X-Content-Type-Options: 7/7

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
| Lighthouse heading compliance | 43% | 4 |

**Overall Consistency:** 89%

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no organisation-name or canonical-URL divergence flagged by the consistency check.

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Pass | Organisation name appears consistently across all 7 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 7-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

We found 6 identical inline fragment(s) repeated across multiple pages, totalling 40 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes | Pages | Preview |
|------|-------|-------|---------|
| css | 19 | 14 | .st0{fill:#B6D644;} |
| css | 2478 | 7 | /*InlineDefaultCss*/ /* default styles for extension "tx_for |
| js | 414 | 7 | (function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespa |
| js | 338 | 7 | var _mtm = window._mtm = window._mtm \|\| [];   _mtm.push({'mt |
| js | 67 | 7 | var dataLayer = [];     function gtag(){dataLayer.push(argum |
| css | 4288 | 6 | .rek-prediction .rek-style p{margin:0}.rek-prediction .rek-s |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `dkd-de-de-inline-code-duplicates.csv`.*

**Recommendation:** For CSS fragments and site-authored JS, move each duplicate to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS); the fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical. The two JS fragments beginning `(function(l,e,a,d,i,n,f,o)` and `var _mtm = window._mtm` are injected by third-party vendor integrations; moving them to an external file is not a viable path for those entries. For these, check with the respective vendors whether a server-side or tag-manager configuration exists that avoids per-page inline injection, or consider loading them via a single tag-manager container that is itself externalised.

---

## PDF Documents: Accessibility and Machine Readability

Accessibility legislation has converged on ISO 14289-1 (PDF/UA) as the technical baseline across major markets, with the EAA (Directive (EU) 2019/882, in force 28 June 2025) being the most precisely codified instance of a global alignment that also encompasses Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada. Beyond legal exposure, an untagged PDF is invisible to machines in the same way that unsemantic HTML is: search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from a scanned or image-based document, whereas a properly tagged PDF with a complete structure tree is as machine-readable as well-formed semantic markup.

We linked no PDFs from the 7-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 527 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Discovery Readiness improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a first-mover advantage in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2 (Compliance Risk) | Priority 1, 2 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimization | P1, P2, P3, P4, P5 (P1–P5) | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://dkd.de performs with particular confidence in SEO, recording 92/100 and demonstrating that the foundations for human-facing search visibility are firmly in place. The clearest opportunities lie in Discovery Readiness, which sits at 25/100, and Structured Data at 65/100, both of which represent the primary surfaces through which machines read, interpret, and cite the content we present. We invite the team at https://dkd.de to explore those findings in the sections that follow and to consider where targeted improvements would extend that reach into the growing layer of automated discovery.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 65/100 | Good |
| Accessibility | 90/100 | Needs Improvement |
| SEO (all pages) | 92/100 | Excellent |
| SEO (content pages) | 92/100 | Excellent |
| MX Stack Completeness | 49/100 | Could Be Better |
| Structured Data Quality | 65/100 | Good |
| Commerce Visibility | 10/100 | Needs Improvement |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 92/100 | Excellent |
| Semantic Ratio | 22% | Needs Improvement |
| Agent Readability | 67/100 | Good |
| Pipeline Survivability | 78/100 | Excellent |
| Cross-Page Consistency | 89% | Excellent |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| /de | 92 | 0 | 95 | 72 | 64 |
| /de/leistungen | 92 | 0 | 95 | 72 | 72 |
| /de/referenzen | 94 | 0 | 95 | 56 | 56 |
| /de/produkte | 95 | 0 | 95 | 72 | 72 |
| /de/kontakt | 85 | 0 | 95 | 57 | 57 |
| /de/impressum | 89 | 0 | 95 | 72 | 72 |
| /de/datenschutz | 98 | 0 | 100 | 62 | 62 |

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 971   |
| External links                  | 424   |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set, we catalogued 84 images in total. The format distribution skews toward traditional raster formats: 37 PNG and 33 JPEG files account for all raster imagery, with no WebP or SVG present. Alt-text coverage is strong, with 83 of 84 images carrying descriptive text (98.8%); the single image missing alt text is worth locating and addressing, as it represents the one gap in what is otherwise thorough accessibility provision for visual assets.

Every one of the 84 images carries an explicit loading="lazy" attribute, and we recorded zero instances of loading="eager" and zero images with no attribute set. That last point is worth noting: an image with no loading attribute is not treated as eager by the browser, it simply leaves the decision to the browser's own heuristics, which vary by position, viewport, and implementation. The fact that every image has been deliberately marked up removes that ambiguity entirely across the audited set, which is a clean and consistent loading strategy from a developer's standpoint.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** Metadata Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **TYPO3 CMS**. The main audit uses TYPO3 CMS-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 7 pages analysed | Platform: TYPO3 CMS | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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