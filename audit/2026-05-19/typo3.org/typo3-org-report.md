---
title: "Typo3: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-19"
modified: "2026-05-19"
client: "Typo3"
clientSlug: "typo3-org"
clientUrl: "https://typo3.org"
reportId: "typo3-org-WEB-AUDIT-20260519"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-19"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Typo3"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 85
accessibilityScore: 81
seoScore: 77
llmSuitabilityScore: 91
totalIssues: 27
pagesAudited: 7
version: "1.0"
confidential: true
mx:
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-05-19/typo3.org/typo3-org-report.pdf"
    description: "Generate PDF audit report for typo3-org"
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Typo3 covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Typo3", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Typo3. Focus on the highest-leverage MX opportunities surfaced by the audit."
---

# Typo3: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 19 May 2026\
**Report ID:** typo3-org-WEB-AUDIT-20260519

---

## About This Report

We audited 7 pages across typo3.org's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** This audit covers the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 7 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead: wrapping the raw text in a minimal HTML document with the content inside a `<pre>` block and returning `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **85**/100 | `###############---` |
| Accessibility | **81**/100 | `###############---` |
| SEO | **77**/100 | `##############----` |
| Machine Suitability | **91**/100 | `################--` |
| MX Stack | **47**/100 | `########----------` **(!)** |
| Agent Readability | **68**/100 | `############------` |
| Pipeline Survivability | **93**/100 | `#################-` |

We audited 7 pages of typo3.org across ten dimensions, and the picture for human visitors is strong. Performance stands out as the highest-scoring human-experience dimension across the audited set, suggesting the TYPO3 CMS foundation is well-configured for responsive, reliable delivery. SEO sits at 77/100, a solid result that reflects good on-page fundamentals.

Before turning to machine-readiness, we want to name accessibility as a Priority 1 compliance item. We recorded 27 critical WCAG AA issues across the audited set, and 11 of those trace directly to 2 recurring template patterns, meaning a single theme-level correction per pattern resolves every instance of each. That concentration is worth noting because it makes the remediation path considerably more tractable than a scattered issue count might suggest. The headline opportunity beyond compliance is machine-readiness: across the 7 audited pages, Structured Data Quality and Catalogue Visibility both score 0/100, and Discovery Readiness sits at 25/100, placing typo3.org at MX Readiness Level 1. Machines, whether search crawlers, AI agents, or automated bots, currently have very little structured signal to work with, which limits how confidently they can surface, cite, or recommend the content we found performing so well for people.

The good news is that the AI Suitability score of 91/100 on served content tells us the raw material is there. The challenge is instrumentation: without Schema.org JSON-LD and the supporting discovery files that machines read before they read anything else, that high-quality content is not yet reachable to the agent layer; a gap reflected directly in the Structured Data Quality score of 0/100. Adding structured data is the highest-leverage next step available, because it operates independently of any rendering constraints and gives every class of machine a reliable, standards-compliant signal to act on.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, typo3.org delivers a strong human experience, with performance averaging 762ms, accessibility at 81/100, and SEO at 77/100, all sitting in the Excellent band, though the 27 accessibility issues we identified (11 of which trace to just 2 template patterns) represent the clearest opportunity for improvement.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Needs Improvement | D |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can reliably retrieve and process content from typo3.org, as Pipeline Survivability of 93/100 confirms, though Discovery Readiness of 25/100 and Structured Data Quality of 0/100 mean those machines arrive with limited contextual signposting to guide what they index or cite.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 25/100 | Needs Improvement | D |
| Structured Data Quality | 0/100 | Needs Improvement | D |
| MX Stack Completeness | 47/100 | Could Be Better | C |
| Pipeline Survivability | 93/100 | Excellent | A |

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

**Evidence:** MSC 47/100 | SDQ 0/100 | Discovery 25/100 | Consistency 89%

**To reach the next level:** Add full MX fields and governance metadata. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, typo3.org demonstrates a solid foundation that gives the improvements ahead a strong platform to build on. An SEO score of 77/100, an accessibility score of 81/100, and a cross-page consistency rate of 89% each reflect real care in how these pages have been constructed.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent — 762ms average load time |
| SEO (content pages) | 76 | Excellent — titles, meta descriptions, canonical URLs in place |
| Security | 2/5 | HTTPS, X-Content-Type-Options — 3 headers absent |
| Structured Data | 0 | Needs Improvement — no Schema.org JSON-LD present on the audited pages |
| Heading Quality | 91 | Excellent — single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 89% | 89% — same metadata patterns across every page |
| Agent access | 6/6 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Body content ratio averages 82%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

The table below presents our findings as opportunities prioritised by impact, with discovery and structured data gaps leading because they determine how well machines can locate, parse, and cite typo3.org before any other signal takes effect. Metadata completeness and catalogue visibility follow as the next tier of addressable gains across the audited set.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Iframe Missing Title Attribute, WCAG 2.4.1 (7 instances on 7 pages) | Compliance Risk | High | Medium | Sighted keyboard users may miss the purpose of the consent iframe |
| 2 | Insufficient Contrast Ratio 3.09:1 vs 4.5:1 Required, WCAG 1.4.3 (6 instances across 5 pages) | Compliance Risk | High | Low | Low-vision users risk missing or misreading consent and content text |
| 3 | Semantic Structure 20/100, Div Soup at https://typo3.org/association (216 of 288 bare divs) | Compliance Risk | High | High | Screen-reader users and machines are less likely to interpret page structure correctly |
| 4 | Discovery Readiness 25/100, Metadata Stack 47/100 | AI Opportunity | High | Medium | Machines may miss key content signals, reducing citation eligibility |
| 5 | Structured Data Quality 0/100, No Schema Markup Detected | AI Opportunity | High | Medium | Machines are less likely to surface structured answers from audited pages |

---

**Priority 1: Iframe Missing Title Attribute, WCAG 2.4.1 (7 instances on 7 pages)**

**Bucket:** Compliance Risk

**Finding:** The consent-sharing iframe injected by the `app.usercentrics.eu` vendor SDK carries no title attribute across the audited set. WCAG 2.4.1 requires that every iframe have a non-empty title that identifies its purpose. Because this iframe is injected at runtime by the vendor SDK rather than authored in the site template, it appears on every audited page without the attribute. Sighted keyboard users traversing the page via assistive technology encounter a frame they cannot identify, creating both a usability gap and a WCAG Level A compliance exposure.

**What to change and why:**

- Engage the vendor (app.usercentrics.eu) to release an SDK update that adds a descriptive, non-empty title attribute to the `#cross-domain-consent-sharing-iframe` element at injection time. This resolves the root cause at source and addresses WCAG 2.4.1 without requiring ongoing maintenance on the typo3.org side.
- Where an SDK upgrade is not immediately available, implement a small DOM-observer patch on typo3.org that detects the injected iframe after it enters the DOM and programmatically sets a descriptive title attribute on it. This restores keyboard-user comprehension and satisfies WCAG 2.4.1 until the vendor fix lands.
- We caution against attempting to resolve this by editing the theme or any template partial; the iframe does not exist in typo3.org's own template and a theme edit will have no effect on runtime-injected vendor elements.

**Effort:** Medium

---

**Priority 2: Insufficient Contrast Ratio 3.09:1 vs 4.5:1 Required, WCAG 1.4.3 (6 instances across 5 pages)**

**Bucket:** Compliance Risk

**Finding:** We recorded a contrast ratio of 3.09:1 against the WCAG 1.4.3 minimum of 4.5:1 across the audited set. Four of these instances occur on the `#uc-btn-accept-banner` element (the consent banner accept button) appearing on 4 pages. Two further instances appear on content elements on a single page. All six instances affect low-vision users who rely on sufficient luminance contrast to distinguish text from its background. The consent button instances are of particular concern because they gate a legally required user action; a user who cannot read the button label may be unable to provide informed consent.

**What to change and why:**

- Adjust the background colour of the `#uc-btn-accept-banner` element to meet the 4.5:1 ratio required by WCAG 1.4.3 Level AA. This directly restores the contrast gap on the consent banner for low-vision users and addresses the 4 instances appearing across 4 audited pages.
- Review and correct the contrast of the content paragraph and link elements on the affected page (the instances on the `#c1012` branch). Bringing these into compliance removes the remaining 2 instances and ensures low-vision users can read body content as well as interactive controls.
- Because 4 of the 6 instances trace to the consent banner, confirm whether the banner styling is controlled by the vendor SDK configuration or by typo3.org's own stylesheet. If it is vendor-controlled, raise the contrast requirement with the SDK vendor as part of the same conversation opened for Priority 1.

**Effort:** Low

---

**Priority 3: Semantic Structure 20/100, Div Soup at https://typo3.org/association (216 of 288 bare divs)**

**Bucket:** Compliance Risk

**Finding:** We recorded a rendered semantic structure score of 20/100 (High band) across the audited set. The most severe instance comes from https://typo3.org/association, where 216 of the 288 total elements are bare divs. These figures describe that specific page; they do not represent every audited page individually. Because the 20/100 score reflects a pattern observed on the worst-performing page in the audited set, and the component framework evidenced there emits untyped wrapper layers as a matter of course, the finding is consistent with a systemic template concern rather than an isolated page anomaly, though confirming its full extent across the remaining audited pages would require a per-page structural breakdown. A DOM composed largely of undifferentiated container elements provides no semantic landmarks for assistive technologies; screen-reader users must navigate without headings, regions, or list structures that would otherwise orient them. Machines parsing the page for structured content signals face the same deficit: without semantic tags, they cannot reliably identify which blocks represent navigation, main content, or supplementary material.

**What to change and why:**

- Replace generic container elements with semantic equivalents (such as landmark regions, lists, and sectioning elements) at the template level, starting with https://typo3.org/association as the reference page. This directly improves the 20/100 structural score and addresses the conditions that limit WCAG 1.3.1 (Info and Relationships) compliance.
- Introduce appropriate landmark regions so that screen-reader users can jump between navigation, main content, and footer without traversing every element in sequence. This is the single highest-leverage change for assistive-technology users on pages sharing this template.
- Audit navigation and repeated block patterns for list-based markup where items are currently rendered as sequences of bare containers. Correct list semantics allow both screen readers and machines to understand groupings, improving both accessibility and content signal quality for crawlers.
- Prioritise the template shared across the audited set; a single structural correction at the template level propagates to every page built from it, multiplying the return on a single engineering effort.

**Effort:** High

---

**Priority 4: Discovery Readiness 25/100, Metadata Stack 47/100**

**Bucket:** AI Opportunity

**Finding:** Discovery Readiness across the audited set sits at 25/100 (Needs Improvement), with a Metadata Stack Completeness score of 47/100 (Could Be Better). Together these scores indicate that the signals machines rely on to index, summarise, and cite typo3.org content are incomplete. Machines that crawl or query the audited pages receive partial metadata, reducing the confidence with which they can attribute content correctly or surface it in agent-generated answers.

**What to change and why:**

- Complete the metadata stack across the audited set by ensuring all pages carry a full complement of Open Graph and canonical signals. Richer metadata gives machines an authoritative source for title, description, and page identity, directly lifting the 47/100 Metadata Stack score and reducing the risk of misattribution in agent responses.
- Review and publish discovery artefacts (such as llms.txt or equivalent machine-readable routing files) so that machines have an explicit, structured entry point into typo3.org content. This is a direct lever on the 25/100 Discovery Readiness score and improves the probability that agents index the correct pages rather than inferring structure from partial signals.
- Ensure that any existing sitemap accurately reflects the pages intended for machine consumption and that metadata on those pages is consistent with sitemap declarations. The current sitemap earns a Partial grade (it carries `lastmod` and `priority` values but omits `changefreq` throughout), so resolving that gap alongside on-page metadata alignment would reduce agent uncertainty about recrawl scheduling and content authority.

**Effort:** Medium

---

**Priority 5: Structured Data Quality 0/100, No Schema Markup Detected**

**Bucket:** AI Opportunity

**Finding:** Structured Data Quality across the audited set scores 0/100 (Needs Improvement). We detected no Schema.org markup on any audited page. Without structured data, machines processing typo3.org pages receive no explicit signals about content type, authorship, date, or subject matter. This reduces the likelihood that content from the audited pages is selected for rich results or cited with precision in agent-generated answers, where structured signals are a primary eligibility criterion.

**What to change and why:**

- Introduce Schema.org markup appropriate to each page type within the audited set. Even a minimal implementation covering type, name, and description gives machines the anchors they need to classify and cite pages correctly, moving the Structured Data Quality score from 0/100.
- Prioritise page types that are most likely to appear in agent answers (such as software project pages, organisation pages, and article or documentation pages). These types have well-defined Schema.org vocabularies and produce the most immediate uplift in machine-readability.
- Once initial markup is in place, validate it against the Schema.org specification and ensure consistency between structured-data claims and visible on-page content. Machines that detect discrepancies between markup and rendered text may reduce confidence in the data, limiting the citation benefit.
- Align structured data implementation with the metadata improvements described in Priority 4; the two signals are complementary, and a consistent metadata-plus-schema stack produces a stronger aggregate signal for machines than either improvement in isolation.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs**: Adding `sameAs` links on an `Organization` entity pointing to typo3.org's Wikidata and social-profile entries would allow machines to disambiguate this property from other entities sharing similar names, strengthening citation confidence across agent knowledge graphs.

- **SpeakableSpecification**: Marking designated text regions on article and documentation pages with `SpeakableSpecification` selectors would signal to voice-surface agents which passages best represent the page's meaning, improving how typo3.org content is read aloud or summarised in spoken interfaces.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)): Adding Content-Signal directives to a robots.txt file would give machines an explicit, machine-readable declaration of how typo3.org content may be used for training, retrieval, and summarisation. Because robots.txt is currently absent entirely (confirmed in the Discovery Files section), this would require creating the file from scratch, making it an opportunity to address both the missing robots.txt gap and the content-use declaration in a single step.

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
| Google-Extended (Google AI-training opt-out) | `Google-Extended` | 200 | Accessible |
| CCBot (Common Crawl) | `CCBot/2.0` | 200 | Accessible |
| Plain request (no UA) | *(empty)* | 200 | Accessible |

**Summary:** All 8 tested agents can access the site. No bot protection blocks AI agents at inference time.

### Markdown Content Negotiation

| Check | Result |
|-------|--------|
| URL probed | https://typo3.org |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No — server returned HTML regardless of Accept header |

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
| Internal navigation links | 32 links to same-site pages |
| MX governance tags | Not assessed in this audit |
| Schema.org JSON-LD | Not assessed in this audit |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://typo3.org/association/funding-finances`. A first-time visitor sees the cold-cache cost: the crawler recorded 908 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 254ms (HTTP 404), 132ms (HTTP 404), 117ms (HTTP 404); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Median-load control.** The median-load control page is `https://typo3.org/association/contact`. A first-time visitor sees the cold-cache cost: the crawler recorded 800 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 82ms (HTTP 404), 114ms (HTTP 404), 130ms (HTTP 404); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Verdict:** Server response time is within healthy bounds on both tested pages for first-visit requests. Returning-visitor timing is Indeterminate on both pages, as all cache-busted probes returned HTTP 404 and produced no usable measurements.

---

## Discovery Files

### robots.txt

```text
# robots.txt not found at origin
```

Typo3.org serves no robots.txt file, leaving machines with no declared crawl permissions, no disallow paths, and no sitemap reference to guide discovery.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 76 entries | Matches crawl count |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | No | Missing |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** Partial

The sitemap lists 76 URLs and earns a Partial grade, carrying lastmod and priority values on each entry but omitting changefreq throughout, which limits the guidance available to machines scheduling recrawls.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We did not find a llms.txt file at typo3.org, meaning machines that consult this endpoint before crawling or citing content receive no site description, no page inventory, and no content policy to guide their behaviour. We recommend adding a well-formed llms.txt to give those machines a structured entry point into the content.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We did not find an llms-full.txt file at typo3.org; the endpoint returns a 404 with no corresponding sitemap entry or homepage link relation. For a content-heavy site of this scale, we recommend adding one so that machines can retrieve a consolidated, crawlable representation of the full content without having to discover individual pages separately.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

No Schema.org JSON-LD entities were detected across the audited set. Adding at least one typed entity per page (e.g. `Organization` on the homepage, `Product` or `Article` on content pages) is the highest-impact improvement for machine readability.

Across the 7 pages we audited, structured data is limited. Machines cannot reliably extract entity data from the audited pages. Adding Schema.org JSON-LD with required properties is the highest-impact improvement available across the audited set.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 0 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 0 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 0 | 15 | Average across entities |
| Entity richness | 0 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 0 | 15 | Nested @type values + @id linking |
| Linked-data signals | 0 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 0 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **0** | **100** | |

---

## Structured Data Findings

This is a clean-slate site with no Schema.org markup. There are no property gaps to report because no typed entities exist yet; every structured data addition is net new capability. The served HTML is machine-readable (served score 91/100); agents can extract content without JSON-LD.

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
| JSON-LD structured data | Not present | Not present | n/a | n/a | n/a |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Not present | Not present | n/a | n/a | n/a |
| Twitter Card meta tags | Not present | Not present | n/a | n/a | n/a |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Yes | Yes | Body | Yes | No |

On the audited pages, the markers detected are present in the served HTML. Server-side and browser-based agents see the same signals on the audited pages; the Open Graph, Twitter Card, and MX governance rows show no markers present, confirming those signals are absent from the audited set.

---

## Schema Maturity Level

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work.

|  | Level | Name | What it looks like | Typical SDQ |  |
|---|-------|------|---------------------|------------|---|
| **→** | 0 | Clean slate | No Schema.org markup present. Every addition is net new capability: the full maturity curve is open. | 0-29 | **←** |
|  | 1 | Decoration | Typed blocks with sparse properties, no nesting, no cross-references. Schema is treated as boilerplate. | 30-50 |  |
|  | 2 | Good schema | Full required and recommended properties, nested types where appropriate, valid vocabulary. No cross-entity wiring. | 75-90 |  |
|  | 3 | Real graph | Level 2 + @id cross-references between entities + linked-data signals (sameAs, mainEntityOfPage, isPartOf). | 90-95 |  |
|  | 4 | Verified linked data | Level 3 + external identifiers (Wikidata QIDs, ISNIs, ORCIDs) + provenance metadata. | 95-100 |  |

**Current level:** 0: Clean Slate\
**To reach the next level:** Add at least one Schema.org JSON-LD block (e.g. Organization, WebSite, or Article); every property added is net new capability for AI agents.

This is a structural classification, not a numeric score. A page can have a high SDQ score from rich properties without being graph-linked. The maturity level shows whether the schema is decoration, well-formed data, a real graph, or anchored in the linked-data web.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. Failure at any stage breaks the chain for all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Partial | 78 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 50 | No Schema.org structured data |
| 3 | Search & Compare | N/A | -- | No comparison content detected |
| 4 | Price Understanding | N/A | -- | No pricing content detected |
| 5 | Purchase Confidence | N/A | -- | No transaction forms detected |

Across the audited set, typo3.org is **Not Compatible** with the MX Journey; both assessed stages are Partial, and Search & Compare, Price Understanding, and Purchase Confidence are not applicable to this site type.

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs thirteen reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 1/7 | 1 page(s) exceed the 250 KB threshold. Agents with limited fetch windows may stop reading before reaching the main content. | Largest page: 228 KB. Threshold: 250 KB. Page: https://typo3.org/association/contact |
| SPA Shell | Pass | 7/7 | Served HTML matches rendered HTML — no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: 4. 0 means served and rendered match. |
| Soft 404 | Pass | 7/7 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 7/7 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.00. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 7/7 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | 3/3 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 23% of the document on some pages. |
| Broken Code Fences | Pass | 7/7 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Pass | 7/7 | The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents. | 0 page(s) advertise format negotiation. |
| Cross-Host Redirect | Pass | 7/7 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 0 page(s) cross origin during redirect. |
| Generic Headings | Pass | 7/7 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | 3/3 | Actual prose content averages 82% of served bytes — well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 82%. Threshold: 30%. |
| Inline Tag Bloat | Fail | 5/7 | 5 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 11 element(s) > 500 bytes. Largest inline CSS: 4274 B. Largest inline JS: 387 B. See typo3-org-pipeline-inline-tag-bloat-pages.csv (5 pages). |
| Head Weight | Pass | 3/3 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.01. Average: 0.00. Threshold: 0.50. |

**Pipeline Survivability score:** 93/100

Across the audited set, pipeline survivability sits at 93/100, with two checks worth addressing: Truncation Risk and Inline Tag Bloat. Inline Tag Bloat is the more widespread of the two, appearing on 5 of the 7 audited pages, and it creates friction for machines attempting to parse and extract clean content from the page. Reducing tag bloat across the audited set would be the highest-leverage single fix, improving the clarity and reliability of content that machines consume when indexing, summarising, or citing typo3.org.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Thirteen Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 20/100 | high | 216 | 75% | 7 | `div.frame-group-container` (136), `div.frame-group-inner` (132), `div.frame-container.frame-container-default` (132), `div.frame-inner` (132), `div.contentcontainer-column` (77) |

On the worst-performing page in the audited set, https://typo3.org/association, we recorded 216 bare divs out of 288 total elements (75%), leaving machines without structural context and forcing them to rely on positional inference to determine meaning. The pattern here is surface-wide rather than deeply nested: a deepest chain of 7 is modest, yet the high bare ratio across selectors such as `div.frame-group-container`, `div.frame-group-inner`, `div.frame-container.frame-container-default`, and `div.frame-inner` (each appearing over 130 times) points to a component framework that emits untyped wrapper layers as a matter of course rather than a one-off templating oversight. The most cost-effective first move is to introduce proper landmark elements (header, nav, main, footer, aside) around the obvious structural regions, then apply meaningful class names to the remaining generic containers, so the bare-div ratio falls without requiring any layout restructuring.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | No | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

3 of the five standard security headers are absent across every audited response: Content-Security-Policy (CSP), X-Frame-Options, HSTS (Strict-Transport-Security). Adding these at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 7 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| / | Yes | No | No | No | Yes |
| /association | Yes | No | No | No | Yes |
| /company | Yes | No | No | No | Yes |
| /association/membership | Yes | No | No | No | Yes |
| /governance-values | Yes | No | No | No | Yes |
| /association/funding-finances | Yes | No | No | No | Yes |
| /association/contact | Yes | No | No | No | Yes |

HTTPS: 7/7 | HSTS: 0/7 | CSP: 0/7 | X-Frame-Options: 0/7 | X-Content-Type-Options: 7/7

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | N/A | — |
| MX governance tags | N/A | — |
| Open Graph tags | N/A | — |
| Twitter Card tags | N/A | — |
| Skip link | N/A | — |
| llms-txt link tag | N/A | — |
| Canonical URL | 100% | — |
| Exactly 1 H1 | 86% | `/association/contact` |
| Code examples present | N/A | — |
| Self-contained sections | 100% | — |
| Error/troubleshooting docs | N/A | — |
| Lighthouse heading compliance | 71% | 2 |

**Overall Consistency:** 89%

## Content Consistency

The audited set shows consistent metadata patterns across the seven pages reviewed, with no organisation-name or canonical-URL divergence flagged by the consistency check.

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Consistent | Single unique page — no cross-page parity check possible |
| Canonical URL duplicates | Not tested | Canonical tag not present on audited pages |
| Meta description length | Not tested | Insufficient pages for distribution analysis |
| Cross-page entity spread (same entity on multiple pages) | No entities detected | Audit scope: 1 unique page |

---

## Inline Code Duplicates

We found 5 identical inline fragment(s) repeated across multiple pages, totalling 215 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes | Pages | Preview |
|------|-------|-------|---------|
| js | 373 | 7 | (function(w,d,s,l,i){w[l]=w[l]\|\|[];w[l].push({'gtm.start':   |
| css | 218748 | 2 | @keyframes ucOpacity{0%{opacity:0}100%{opacity:1}}.usercentr |
| css | 773 | 2 | .usercentrics-button .uc-corner-modal .uc-corner-modal-conte |
| css | 652 | 2 | #usercentrics-button .uc-banner-content {       background-c |
| css | 151 | 2 | #uc-corner-modal a[href], #uc-center-modal a[href], #uc-bann |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `typo3-org-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Accessibility legislation has converged on ISO 14289-1 (PDF/UA) as the technical baseline across major markets: the EAA (Directive (EU) 2019/882, in force 28 June 2025), Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada all resolve to the same structural requirement, making this a global rather than regional obligation. An untagged PDF is equally invisible to machines: search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from a scanned or image-based document, whereas a properly tagged PDF with a complete structure tree is machine-readable in precisely the same way that semantic HTML is.

We linked no PDFs from the 7-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. This report covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: we recommend addressing the 27 WCAG 2.1 AA accessibility issues identified across the audited set (regulatory exposure based on the audited pages)
2. **Review Priority 2-3 findings**: we recommend pursuing structured data improvements (starting from the current Structured Data Quality score of 0/100) and metadata tuning to raise the Metadata Stack Completeness score above the current 47/100
3. **Consider optional enhancements**: we recommend implementing the sameAs, SpeakableSpecification, and Content-Signal directive patterns described in the Optional Enhancements section above, which would build on the structured data foundation and contribute to raising the current Discovery Readiness score of 25/100

### What's Next

We recommend the following phased engagement to address the priorities above.

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3 (Compliance Risk) | Priority 1, 2, 3 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | P1, P2, P3, P4 (Discovery Readiness and Metadata Stack), P5 | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the audited pages; Discovery Readiness and Metadata Stack gaps (currently 25/100 and 47/100) addressed |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Sustained machine-readiness signals and early detection of regressions across audited dimensions |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://typo3.org records its strongest result in SEO at 77/100, reflecting a solid foundation for search visibility. The most pressing opportunities lie in Structured Data, which scores 0/100, and Discovery Readiness at 25/100, both of which limit how effectively machines can interpret, index, and cite content from https://typo3.org. We welcome the chance to walk through these findings and map a practical path forward.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 91/100 | Excellent |
| Accessibility | 81/100 | Needs Improvement |
| SEO (all pages) | 77/100 | Excellent |
| SEO (content pages) | 76/100 | Excellent |
| MX Stack Completeness | 47/100 | Could Be Better |
| Structured Data Quality | 0/100 | Needs Improvement |
| Commerce Visibility | 0/100 | Needs Improvement |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 91/100 | Excellent |
| Semantic Ratio | 5% | Needs Improvement |
| Agent Readability | 68/100 | Good |
| Pipeline Survivability | 93/100 | Excellent |
| Cross-Page Consistency | 89% | Excellent |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| / (nav) | 84 | 90 | 45 | 85 | 85 |
| /association | 85 | 0 | 45 | 100 | 100 |
| /company | 75 | 90 | 45 | 99 | 99 |
| /association/membership | 85 | 70 | 45 | 100 | 100 |
| /governance-values | 85 | 60 | 45 | 100 | 100 |
| /association/funding-finances | 68 | 80 | 45 | 99 | 99 |
| /association/contact | 60 | 80 | 45 | 84 | 84 |

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 76/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 113   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set we catalogued 71 images in total, spanning four formats: 52 SVG, 14 PNG, 3 WebP, and 2 JPEG. SVG dominates, which is consistent with a developer-facing property that leans on icon sets and diagrams rather than photography. Alt-text coverage stands at 51 images, or 71.8%, leaving 20 without an alt attribute; at that volume the gap is meaningful enough to warrant a pass through the templates before the next release.

On loading strategy, 22 images carry an explicit `loading="lazy"` attribute and none carry `loading="eager"`, but the more consequential figure is the 49 images with no loading attribute at all. The absence of an attribute is worth distinguishing from eager loading: browsers apply their own heuristics in that case, typically loading above-the-fold images immediately and deferring some below-the-fold ones, but the behaviour varies across browser versions and viewport sizes. Explicit declaration removes that ambiguity, gives layout-shift calculations a firmer basis, and makes performance profiling far more predictable. Bringing those 49 images into an explicit strategy would tighten control over the render path without requiring any structural change to the markup.

> **Double-lazy loading pattern not detected** — no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** Metadata Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs thirteen reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, inline-tag bloat control, body content ratio, and head weight. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **TYPO3 CMS**. The main audit uses TYPO3 CMS-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 7 pages analysed | Platform: TYPO3 CMS | Analysis method: Hybrid (automated + manual verification) | robots.txt: Absent

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
| ![Appendix S QR](assets/qr/appendix-s.png){ width=15mm } | **[MX: The Protocols Appendix S: The Thirteen Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**: the full catalogue of reading-resilience checks scored in the Agent Reading Pipeline section.\ <https://mx.allabout.network/books/appendices/appendix-s.html> |
| ![Appendix M QR](assets/qr/appendix-m.png){ width=15mm } | **[MX: The Protocols Appendix M: Index of Metadata](https://mx.allabout.network/books/appendices/appendix-m.html)**: the full field dictionary governing the MX governance tags referenced throughout this report.\ <https://mx.allabout.network/books/appendices/appendix-m.html> |
| ![llms.txt guide QR](assets/qr/llms-txt-guide.png){ width=15mm } | **[Why llms.txt Probably Isn't Working: And What to Do About It](https://mx.allabout.network/blog/llms-txt-guide.html)**: a guide to the two structural problems most llms.txt implementations have (MIME type and sitemap registration).\ <https://mx.allabout.network/blog/llms-txt-guide.html> |
| ![Books index QR](assets/qr/books-index.png){ width=15mm } | **[Get the books](https://mx.allabout.network/books/)**: MX: The Intro (free), MX: The Handbook, and MX: The Protocols. The full reference for every concept this report draws on.\ <https://mx.allabout.network/books/> |

---

**Date:** 19 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*