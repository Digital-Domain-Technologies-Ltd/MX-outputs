---
title: "Allabout: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-16"
modified: "2026-05-16"
client: "Allabout"
clientSlug: "allabout-network"
clientUrl: "https://allabout.network"
reportId: "allabout-network-WEB-AUDIT-20260516"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-16"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Allabout"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 97
accessibilityScore: 69
seoScore: 77
llmSuitabilityScore: 98
totalIssues: 106
pagesAudited: 7
version: "1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Allabout. Focus on the highest-leverage MX opportunities surfaced by the audit."
---

# Allabout: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 16 May 2026\
**Report ID:** allabout-network-WEB-AUDIT-20260516

---

## About This Report

We audited 7 pages across allabout.network's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [`https://tg.community`](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What this audit covers: and what MX covers.** This audit checks the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. Our recommendation diverges from the specification: we recommend serving llms.txt as `text/html`, wrapping the raw text in a minimal HTML document with the content inside a `<pre>` block and returning `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **97**/100 | `#################-` |
| Accessibility | **69**/100 | `############------` |
| SEO | **77**/100 | `##############----` |
| Machine Suitability | **98**/100 | `##################` |
| MX Stack | **52**/100 | `#########---------` |
| Agent Readability | **60**/100 | `###########-------` |
| Pipeline Survivability | **98**/100 | `##################` |

Allabout presents well for human visitors. Across the audited set, Allabout shows its strongest dimension on performance: pages load cleanly, the Cloudflare Pages infrastructure delivers content reliably, and the SEO foundations sit at 77/100, placing them in the Excellent band. The content carries clear intent, the brand voice is consistent, and the groundwork is there for a site that earns and holds audience attention.

Before turning to the machine-readiness opportunity, we want to name accessibility as a Priority 1 compliance item. We recorded 106 WCAG AA issues across the audited set, and while that number is substantial, 4 of those issues trace to just 2 recurring template patterns, meaning a single theme-level edit per pattern resolves all instances. Addressing these systematically is both the right thing to do for users who rely on assistive technology and a prerequisite for any broader quality programme.

The headline opportunity is machine readiness. Structured Data Quality stands at 47/100 and Discovery Readiness at 30/100, with Commerce Visibility recording 0/100 across the audited set. Machines, whether search crawlers, LLMs, or automated agents, read the structured signals that human visitors never see, and right now those signals are thin. Allabout currently sits at MX Readiness Level 1 and Schema Maturity Level 1. The Schema.org JSON-LD already present across the audited set is the highest-leverage asset to build from: it is readable by every agent regardless of how the page is rendered, and enriching it is the single change that most moves the needle on the dimensions where the site has the most room to strengthen.

> 

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, the site delivers a strong experience for human visitors on performance and SEO, with accessibility at 69/100 representing the clearest area for improvement.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Needs Improvement | D |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can reliably retrieve and process content (Pipeline Survivability 98/100) but face meaningful constraints when it comes to discovery and structured understanding, with Discovery Readiness at 30/100, Structured Data Quality at 47/100, and Metadata Stack Completeness at 52/100.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 30/100 | Could Be Better | C |
| Structured Data Quality | 47/100 | Could Be Better | C |
| MX Stack Completeness | 52/100 | Good | B |
| Pipeline Survivability | 98/100 | Excellent | A |

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

**Evidence:** MSC 52/100 | SDQ 47/100 | Discovery 30/100 | Consistency 53%

**To reach the next level:** Add full MX fields and governance metadata. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, we find a solid foundation to build on: SEO sitting at 77/100, four of five security headers consistently present, and a meaningful range of Schema types already deployed across the pages we reviewed. These strengths represent the groundwork for the targeted improvements that follow.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent — 402ms average load time |
| SEO (content pages) | 76 | Excellent — titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | HTTPS, HSTS, X-Frame-Options, X-Content-Type-Options — 1 header absent |
| Structured Data | 47 | Could Be Better — JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 78 | Excellent — single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 53% | 53% — same metadata patterns across every page |
| Agent access | 6/6 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Body content ratio averages 67%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

The findings below are prioritised by impact, with discovery and catalogue visibility leading because gaps there constrain what machines can index, interpret, and act on before any other signal reaches them. Structured data quality at 47/100 and metadata completeness at 52/100 follow, as strengthening those layers compounds the gains made upstream.

## At-a-Glance Findings

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Contrast Gaps, WCAG 1.4.3 (3.46:1, 3.19:1, 3.29:1 vs 4.5:1 required) | Compliance Risk | High | Low | Low-vision users may miss or misread text across the audited set |
| 2 | Empty Heading Tag, WCAG 1.3.1 (1 instance, 1 page) | Compliance Risk | High | Low | Screen reader users may receive a disorienting or empty announcement at the affected heading position |
| 3 | Semantic Structure 40/100 (12 bare divs out of 18 total elements) | Compliance Risk | Medium | Medium | Machines and assistive technologies are less likely to interpret content hierarchy correctly |
| 4 | Discovery Readiness 30/100 (Could Be Better) | Cross-cutting | High | Medium | Machines risk missing content that is present but not surfaced through crawlable or declared signals |
| 5 | Structured Data Quality 47/100 (Could Be Better) | AI Opportunity | Medium | Medium | Machines processing schema may find entity relationships thin and reduce confidence in attribution |
| 6 | Missing Content-Security-Policy header (0 of 7 audited URLs carry all five security headers) | Cross-cutting | Medium | Low | Browsers and security scanners may flag the audited set as incompletely hardened |

---

**Priority 1: Contrast Gaps, WCAG 1.4.3 (Ratios 3.46:1, 3.19:1, and 3.29:1 vs 4.5:1 Required)**

**Bucket:** Compliance Risk

**Finding:** We recorded four contrast-ratio shortfalls across the audited set, tracing to two recurring template-level patterns. Text within the selector `html > body > main > div:nth-child(2) > div > div > div > p:…` carries a contrast ratio of 3.46:1 on 2 pages. Separate elements within `html > body > main > div:nth-child(1) > div:nth-child(4) > d…` record ratios of 3.19:1 and 3.29:1 on `/blogs/ddt/ai-generated-code`. All fall below the WCAG 1.4.3 minimum of 4.5:1.

**What to change and why:**

- Adjust the text colour on the `div:nth-child(2)` pattern to #004fc2; this resolves the 3.46:1 shortfall on both affected pages in a single theme-level edit, directly addressing WCAG 1.4.3 and restoring legibility for low-vision users.
- Adjust the text colour on the `div:nth-child(1) > div:nth-child(4)` element to #101010; this resolves the 3.19:1 shortfall on the affected page and brings the element into WCAG 1.4.3 conformance.
- Adjust the background on the same `div:nth-child(4)` element to #3177c9; this resolves the 3.29:1 shortfall and addresses the second contrast gap within that template pattern, again satisfying WCAG 1.4.3.
- Because both patterns are template-level, each correction propagates across every page that inherits that template, meaning two targeted edits resolve all four recorded instances without page-by-page intervention.

**Effort:** Low

---

**Priority 2: Empty Heading Tag, WCAG 1.3.1 (1 Instance, 1 Page)**

**Bucket:** Compliance Risk

**Finding:** We recorded one instance of an empty heading element at selector `html > body > main > div:nth-child(1) > div > h2:nth-child(5…` on `/blogs/ddt/aem-development-with-ai`. WCAG 1.3.1 requires that heading markup conveys meaningful structure; an empty heading tag presents a structural anchor with no content, which screen readers announce as a heading and then read nothing.

**What to change and why:**

- Remove the empty heading tag if no content is intended at that position; preserving an empty heading element in the markup causes screen readers to announce a heading level with no label, disrupting the document outline for users who navigate by heading.
- If content is genuinely intended at that position, populate the heading with descriptive text; this restores the navigational value of the heading landmark and satisfies WCAG 1.3.1 by ensuring that programmatic structure matches visible content.
- Confirm no other pages in the audited set carry the same template fragment; although we recorded 1 instance on `/blogs/ddt/aem-development-with-ai`, a shared template origin would mean the gap propagates wherever that fragment is reused.

**Effort:** Low

---

**Priority 3: Semantic Structure 40/100 (12 Bare Divs out of 18 Total Elements)**

**Bucket:** Compliance Risk

**Finding:** We recorded a semantic structure score of 40/100 across the audited set, with 12 bare divs out of 18 total elements. At that ratio, the majority of the layout relies on non-semantic containers that provide reduced structural signal for machines and assistive technologies.

**What to change and why:**

- Replace bare div containers that serve a clear structural purpose (navigation, main content, article, aside, footer) with the corresponding semantic HTML5 elements; this gives assistive technologies an accurate document outline without requiring any visual change to each audited page.
- Where a div wraps a self-contained unit of content, consider whether a sectioning element better describes the content's role; correct sectioning improves how machines parse and attribute content to the right entity, which in turn supports the Structured Data Quality score (currently 47/100).
- Prioritise the template-level containers first, as changes there propagate across every page that inherits the same structure, giving the highest return per edit across the audited set.

**Effort:** Medium

---

**Priority 4: Discovery Readiness 30/100 (Could Be Better)**

**Bucket:** Cross-cutting

**Finding:** We recorded a Discovery Readiness score of 30/100 across the audited set, placing it in the Could Be Better band. At this level, the signals that machines use to locate, index, and prioritise content are thin, meaning pages present on the server risk being underweighted or missed in agent and crawler pipelines.

**What to change and why:**

- Review canonical tag coverage across the audited set; the Cross-Page Consistency table shows canonical URLs present on 100% of audited pages, but absent or inconsistent canonical declarations on any pages outside that set reduce a machine's confidence about which URL represents authoritative content, and the Discovery Readiness score of 30/100 warrants confirming that coverage holds across the audited pages.
- Confirm that the sitemap (485 URLs declared) accurately reflects the pages machines should index, and that each audited URL is included and carries a correctly formatted lastmod value; machines use these signals to prioritise re-crawl scheduling.
- Evaluate robots.txt directives to confirm that the two declared disallow paths (`/drafts/` and `/demo/`) do not inadvertently exclude crawlable content across the audited set; a Discovery Readiness score of 30/100 warrants verifying that these are the only paths restricted and that no audited URLs fall within them.
- Consider adding an llms.txt file at the root to declare content endpoints explicitly for machine pipelines; our recommendation diverges from the llmstxt.org specification in that we recommend serving it as text/html rather than plain text, to ensure broad compatibility across agent and browser clients.

**Effort:** Medium

---

**Priority 5: Structured Data Quality 47/100 (Could Be Better)**

**Bucket:** AI Opportunity

**Finding:** We recorded a Structured Data Quality score of 47/100 across the audited set. Schema types are present; including Organization, Person, ProfessionalService, Article, ImageObject, Book, WebPage, and WebSite; but the quality score indicates that entity relationships, property completeness, or interlinking between those types are thin enough to reduce machine confidence in attribution and citation.

**What to change and why:**

- Audit the existing schema instances for required and recommended properties that are absent; machines making citation decisions favour schema graphs where entities carry enough properties to be unambiguously resolved; missing recommended fields lower that confidence without triggering a hard error.
- Strengthen interlinking between schema types already present; for example, ensuring that Article nodes reference their author Person nodes by identifier, and that Person nodes carry sameAs links to authoritative external records, improves the coherence of the entity graph machines read.
- Where Book and Article types appear together on the audited set, confirm that edition, publisher, and author relationships are fully declared; these are the fields machine pipelines weight heavily when deciding whether to attribute or cite a source.

**Effort:** Medium

---

**Priority 6: Missing Content-Security-Policy Header (0 of 7 Audited URLs Carry All Five Security Headers)**

**Bucket:** Cross-cutting

**Finding:** We recorded 4 of 5 expected security headers as present across the audited set (HTTPS, HSTS, X-Frame-Options, and X-Content-Type-Options). The Content-Security-Policy header is absent, and 0 of the 7 audited URLs carry all five. While not a WCAG matter, an incomplete security header set is flagged by automated scanners and may affect procurement or partner due-diligence assessments.

**What to change and why:**

- Add a Content-Security-Policy header at the server or CDN layer; this is the one header absent from an otherwise largely complete set, and adding it at infrastructure level means it propagates to all served responses without page-by-page edits.
- Begin with a permissive policy and tighten iteratively; a policy that is too restrictive can break third-party scripts or fonts, so a staged rollout reduces the risk of unintended disruption while still closing the gap.
- Once deployed, re-test all 7 audited URLs to confirm the full set of five headers is present; this resolves the 0 of 7 shortfall and removes the flag from automated security scans.

**Effort:** Low

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen Allabout's machine readiness.

- **sameAs links on Person and Organization entities**: we recommend connecting each Person and Organization node to its corresponding Wikidata, LinkedIn, or ORCID record to give machines an unambiguous identity anchor, enabling them to reconcile Allabout's contributors and the business itself with external knowledge graphs.

- **AggregateRating on Book entities**: we find that the two Book entries in the structured data inventory are natural candidates for aggregated review signals; adding AggregateRating to those nodes makes the titles eligible for rich results and increases the confidence with which machines can surface them in recommendation contexts.

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
| URL probed | https://allabout.network |
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
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | No |
| Navigation back to valid content | Yes, home link and internal navigation present |
| Internal navigation links | 1 links to same-site pages |
| MX governance tags | Not assessed in this audit |
| Schema.org JSON-LD | Not assessed in this audit |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://allabout.network/blogs/ddt/ai-generated-code`. A first-time visitor sees the cold-cache cost: the crawler recorded 473 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 569ms, 62ms, 947ms, giving a returning-visitor median of **569 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://allabout.network/blogs/adobe-franklin-revolutionizing-content-management`. A first-time visitor sees the cold-cache cost: the crawler recorded 404 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 131ms, 72ms, 65ms, giving a returning-visitor median of **72 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Server response time is within healthy bounds on the slowest page and a median-load page, for both first-visit and returning-visitor requests.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /drafts/
Disallow: /demo/

Sitemap: https://allabout.network/mx-sitemap.xml
Sitemap: https://allabout.network/eds-sitemap.xml
Sitemap: https://mx.allabout.network/blog/sitemap.xml
Sitemap: https://mx.allabout.network/sitemap.xml
```

*The full `robots.txt` (9 lines) is preserved alongside this report as `allabout-network-robots-txt.txt`.*

We found a valid robots.txt, with two disallow paths restricting machine access to specific areas and four sitemap references ensuring crawlers can locate the full index. This configuration gives machines a clear map of what to crawl and what to skip.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 485 entries | Fewer than crawl found |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** Partial

The sitemap carries a Partial grade despite listing 485 URLs with lastmod, changefreq, and priority attributes all present. The most significant opportunity lies in ensuring those values are accurate and dynamically maintained rather than statically assigned, as machines rely on them to schedule recrawls efficiently.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We find no llms.txt file present at the site root, meaning machines have no structured declaration of the site's purpose, page inventory, or content policy to draw on when deciding how to represent Allabout. We recommend adding a well-formed llms.txt to address this gap; our recommendation diverges from the llmstxt.org specification in one respect: we recommend serving the file with a text/html content-type rather than the plain-text default.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We find no llms-full.txt in place: the file returns a 404, carries no sitemap entry, and no discovery link appears in the homepage head. For a content-heavy property such as Allabout, we recommend adding one to give machines a single, structured corpus covering the full page inventory rather than requiring incremental crawling.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| Organization | 6 | 71% | 100% | Person |
| Person | 5 | 100% | 100% | — |
| ProfessionalService | 1 | 100% | 100% | Organization |
| Article | 4 | 67% | 59% | Person, ImageObject, Organization |
| ImageObject | 3 | 100% | 100% | — |
| Book | 1 | 67% | 25% | Person, Organization |
| WebPage | 1 | 100% | 100% | WebSite, Organization |
| WebSite | 1 | 100% | 0% | — |

**Structured Data Quality:** 47/100\
**Coverage:** 6 pages with JSON-LD out of 7 total (86%)\
**Unique types:** 8

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 9 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 2 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 12 | 15 | Average across entities |
| Entity richness | 5 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 5 | 15 | Nested @type values + @id linking |
| Linked-data signals | 5 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 9 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **47** | **100** | |

---

## Structured Data Findings

We identified 22 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`allabout-network-structured-data-findings.csv`](allabout-network-structured-data-findings.csv). The 22 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| Organization | required | name | 5 | 5 | Organization entity cannot be resolved on the 5 audited pages where this gap was recorded |
| Article | required | datePublished | 4 | 4 | AI agents cannot date the article; freshness signals lost |
| Article | recommended | dateModified | 4 | 4 | Crawlers cannot tell when the article was last updated; freshness signals stale |
| WebSite | recommended | image | 1 | 1 | Site has no logo / hero image declared in structured data |
| WebSite | recommended | datePublished | 1 | 1 | No site-level publish date for crawler context |
| WebSite | recommended | author | 1 | 1 | Site has no top-level author/owner declared |
| WebSite | recommended | publisher | 1 | 1 | Site has no top-level publisher declared |
| Book | required | bookFormat | 1 | 1 | Book has no format (ebook, hardcover, paperback) |
| Book | recommended | datePublished | 1 | 1 | Book has no publication date |
| Book | recommended | image | 1 | 1 | Book has no cover image |

Each summary row covers multiple per-entity rows in the sidecar; the grouped view is for reading at a glance, the sidecar is for processing.

**Severity legend** (the values in the *Severity* column above):

| Severity | Meaning |
|----------|---------|
| `required` | Schema.org spec requires this property for the type. Missing values break validation. |
| `recommended` | Schema.org strongly recommends this property. Missing values reduce richness. |
| `vocabulary` | The `@type` value (the JSON-LD class name an entity declares itself as) is not in the Schema.org vocabulary: typically a typo or an invented type. |

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is: a Product, an Article, an Organization: but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside that page itself. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

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
| JSON-LD structured data | Yes | Yes | Yes | Yes | Yes |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Yes | Yes | Yes | Yes | No |
| Twitter Card meta tags | Yes | Yes | Yes | Yes | No |
| MX governance meta tags | Yes | Yes | Yes | Yes | No |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Yes | Yes | Yes | Yes | No |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | Yes |
| Skip link (accessibility) | Yes | Yes | Body | Yes | No |

One or more markers appear only in the rendered DOM: they are invisible to server-side AI agents (ChatGPT, Claude, Perplexity). Move these markers into the served HTML to ensure universal agent visibility.

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
| 2 | Citation | Partial | 50 | Schema.org: Article, Person, ImageObject (67% required properties) |
| 3 | Search & Compare | Pass | 60 | Commerce schema with 0 supporting patterns |
| 4 | Price Understanding | Pass | 67 | Pricing visible but no Offer schema for agent parsing |
| 5 | Purchase Confidence | N/A | -- | No transaction forms detected |

Allabout is Partially Compatible with the MX Journey; Purchase Confidence is N/A for this site type.

---

## AI Attribution

When a human clicks a link from ChatGPT, Perplexity, Gemini, Copilot, or Claude to your site, the browser does not record which AI sent them. Your server sees a visit with no "came from" field, and your analytics counts it as if the user typed the URL directly. A higher-converting channel quietly hides inside direct traffic.

This is not a configuration mistake on your end: the information is stripped before your server ever sees the request. In-app browsers on iOS and Android do the same thing, and any AI surface that makes a server-side fetch on the user's behalf carries no browser context at all. The only place to recover the attribution is at the edge, by capturing and classifying the request before it reaches your analytics tag.

We did not surface data sufficient to assess edge capture status across the audited pages; a deeper review would extend that lens.

### The 6-step playbook

1. **Set up custom regex channel groups in GA4.** Catches AI referrers that would otherwise land in direct. Match source/medium against `chat.openai.com`, `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`, `claude.ai`.
2. **Monitor direct traffic to deep pages.** True type-in traffic lands on the homepage. Direct traffic to deep interior pages is almost always misattributed AI-referred traffic with stripped referrers.
3. **Track AI share of voice.** How often your brand is mentioned as an answer, before anyone clicks. This is the only metric that captures AI attribution at the recommendation layer, not the click layer.
4. **Get third-party validation on sites AI actually cites.** AI models weight citations to high-authority third-party sources. Presence on those sources is a leading indicator of AI recommendation volume.
5. **Structure data so AI models parse you as an entity.** Schema.org Organization + Product + Offer, explicit entity relationships, consistent naming across pages. AI models recommend entities, not page collections.
6. **Capture the first-mover baseline now.** Traditional search volume is shifting into AI surfaces. Brands instrumenting capture now build the historical baseline everyone else will wish they had.

> **Recommendation for Allabout:** adopt an edge-capture pattern. Any runtime that sits in front of the origin and can write to a small datastore works: Cloudflare Workers + D1, Fastly Compute + KV, Vercel Edge Middleware + a serverless DB, AWS Lambda@Edge + DynamoDB, or a lightweight server-side middleware on the origin itself. The shape is the same in each: a User-Agent classifier, a surface classifier, a small insert, and a non-blocking write that does not add latency to the user response.

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether the machine can read an audited page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether each audited page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each audited page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Pass | 7/7 | Every page is well under the 250 KB threshold at which some server-side agents stop reading. The largest page is 28 KB. | Largest page: 28 KB. Threshold: 250 KB. |
| SPA Shell | Fail | 1/7 | Content requires JavaScript to appear. Server-side agents (ChatGPT, Claude, Perplexity) see an empty shell when they fetch these pages. | Max gap score: 65. 0 means served and rendered match. Page: https://allabout.network/blogs/ddt/aem-development-with-ai |
| Soft 404 | Pass | 7/7 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 7/7 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.56. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 7/7 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | N/M | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 0% of the document on some pages. |
| Broken Code Fences | Pass | 7/7 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Pass | 7/7 | The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents. | 0 page(s) advertise format negotiation. |
| Cross-Host Redirect | Pass | 7/7 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 1 page(s) cross origin during redirect. |
| Generic Headings | Pass | 7/7 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | N/M | Actual prose content averages 67% of served bytes — well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 67%. Threshold: 30%. |
| Inline Tag Bloat | Pass | 7/7 | No `<style>` or `<script>` block exceeds the 500-byte threshold on any page. Head stays lean for agents that read head-first. | 0 element(s) > 500 bytes. Largest inline CSS: 0 B. Largest inline JS: 173 B. |
| Head Weight | Pass | N/M | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.00. Average: 0.00. Threshold: 0.50. |

**Pipeline Survivability score:** 98/100

Pipeline Survivability across the audited set sits at 98/100, which places it in the strongest possible band and means machines can read and process the pages with a high degree of confidence. The one area with room to strengthen is the SPA Shell check, which we flagged on one of the seven audited pages; where a page is served as a JavaScript shell before content loads, some machines may record an empty or incomplete snapshot rather than the full text. Resolving that single page represents the highest-leverage opportunity to make the already-strong survivability picture consistent across the entire audited set.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent the page is gone.

The Div Soup check runs against the rendered HTML on every page. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 40/100 | high | 12 | 67% | 4 | `div` (14), `div.section` (3), `div.section.bio-container` (3), `div.bio-wrapper` (3), `div.bio.block` (3) |

Across the audited set, we record a rendered bare-div ratio of 67% (12 of 18 elements), which means machines lose structural context and must fall back on positional inference to determine meaning. The pattern here is surface-wide rather than structurally deep: a high bare ratio paired with a shallow maximum chain of 4 suggests content is being assembled through an untyped component framework or drag-and-drop builder where semantic wrappers are never introduced at the authoring stage. The cheapest first move is to wrap the obvious landmarks (header, nav, main, footer, aside) and assign meaningful class names to the remaining containers, so the bare-div ratio falls without requiring any restructuring of the visual layout.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | Yes | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

One of the five standard security headers is absent across every audited response: Content-Security-Policy (CSP). Adding these at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 7 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| / | Yes | Yes | No | Yes | Yes |
| /blogs/adobe-franklin-revolutionizing-content-management | Yes | Yes | No | Yes | Yes |
| /blogs/ddt/a-guide-to-ai-optimization-an-update | Yes | Yes | No | Yes | Yes |
| /blogs/ddt/a-managers-guide-to-document-authoring-with-edge-delivery-services | Yes | Yes | No | Yes | Yes |
| /blogs/ddt/adobe-eds-revolutionizing-content-management | Yes | Yes | No | Yes | Yes |
| /blogs/ddt/aem-development-with-ai | Yes | Yes | No | Yes | Yes |
| /blogs/ddt/ai-generated-code | Yes | Yes | No | Yes | Yes |

HTTPS: 7/7 | HSTS: 7/7 | CSP: 0/7 | X-Frame-Options: 7/7 | X-Content-Type-Options: 7/7

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 86% | `/blogs/adobe-franklin-revolutionizing-content-management` |
| MX governance tags | 14% | 6 |
| Open Graph tags | 14% | 6 |
| Twitter Card tags | 100% | — |
| Skip link | 14% | 6 |
| llms-txt link tag | 14% | 6 |
| Canonical URL | 100% | — |
| Exactly 1 H1 | 43% | 4 |
| Code examples present | 43% | 4 |
| Self-contained sections | 100% | — |
| Error/troubleshooting docs | 29% | 5 |
| Lighthouse heading compliance | 43% | 4 |

**Overall Consistency:** 53%

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

1 identical inline fragment(s) were found repeated across multiple pages, totalling 1 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes | Pages | Preview |
|------|-------|-------|---------|
| js | 169 | 7 | {     "prerender": [{ "where": { "href_matches": "/*" }, "ea |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `allabout-network-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Accessibility legislation across major markets, from the EU's Directive (EU) 2019/882 (in force 28 June 2025) to Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada, has converged on ISO 14289-1 (PDF/UA) as the shared technical baseline, making the EAA the most precisely codified expression of a global standard rather than an outlier. In parallel, an untagged or image-based PDF is invisible to machines in exactly the way that non-semantic HTML is: without a proper structure tree, search crawlers, AI systems, and automated pipelines cannot extract text, entities, or relationships from the document, so the legal imperative and the machine-readability imperative reinforce each other as two independent reasons to act.

We linked no PDFs from the 5-page sample we crawled. This is a statement about what we sampled, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 106 WCAG 2.1 AA accessibility issues identified by resolving the two recurring template-level contrast patterns described in Priority 1; two targeted theme-level edits resolve all four recorded instances across the audited set
2. **Review Priority 4-5 findings**: Discovery Readiness improvements and metadata tuning that compound over time
3. **Review Priority 6 findings**: add the missing Content-Security-Policy header at the CDN or server layer so that all 7 audited URLs carry the full set of five security headers

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3 (Compliance Risk) | Priority 1, 2, 3 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | P1, P2, P3, P4, P5, P6 (P1–P6) | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Sustained agent visibility and up-to-date signal accuracy across the audited set |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://allabout.network performs most strongly in SEO, recording 77/100, which tells us the foundations for human discoverability are in reasonable shape. The clearest opportunities lie in Discovery Readiness at 30/100 and Structured Data at 47/100, where those scores indicate gaps in how machines read and cite the content. Targeted investment in those two dimensions will yield the greatest return across the audited set.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 98/100 | Excellent |
| Accessibility | 69/100 | Needs Improvement |
| SEO (all pages) | 77/100 | Excellent |
| SEO (content pages) | 76/100 | Excellent |
| MX Stack Completeness | 52/100 | Good |
| Structured Data Quality | 47/100 | Could Be Better |
| Commerce Visibility | 0/100 | Needs Improvement |
| Discovery Readiness | 30/100 | Could Be Better |
| Heading Quality | 78/100 | Excellent |
| Semantic Ratio | 33% | Could Be Better |
| Agent Readability | 60/100 | Good |
| Pipeline Survivability | 98/100 | Excellent |
| Cross-Page Consistency | 53% | Good |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| / (nav) | 86 | 100 | 95 | 100 | 100 |
| /blogs/adobe-franklin-revolutionizing-content-management | 70 | 100 | 55 | 92 | 92 |
| /blogs/ddt/a-guide-to-ai-optimization-an-update | 73 | 90 | 85 | 100 | 100 |
| /blogs/ddt/a-managers-guide-to-document-authoring-with-edge-delivery-services | 73 | 80 | 95 | 100 | 100 |
| /blogs/ddt/adobe-eds-revolutionizing-content-management | 67 | 100 | 85 | 98 | 98 |
| /blogs/ddt/aem-development-with-ai | 99 | 0 | 85 | 94 | 94 |
| /blogs/ddt/ai-generated-code | 74 | 0 | 85 | 100 | 100 |

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 76/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: [N] links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 37    |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set we recorded 27 images in total, split between 23 PNG files and 4 JPEGs. Neither WebP nor SVG appeared across the audited pages, which means the format mix leans entirely on raster formats that tend to carry heavier payloads than modern alternatives. On alt text, coverage stands at 10 images with descriptive text, representing 37.0% of the total; the remaining 17 carry no alt attribute, a gap that affects both machine-readable accessibility signals and the experience of users relying on assistive technology.

On loading strategy, the picture is largely consistent: 22 of the 27 images carry a `loading="lazy"` attribute and 5 carry `loading="eager"`, meaning every image across the audited set has an explicit loading instruction. No images were left without an attribute, so the browser is never left to guess whether to defer or fetch immediately.

> **Double-lazy loading pattern not detected** — no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** Metadata Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** The audit fingerprints the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Cloudflare Pages**. The main audit uses Cloudflare Pages-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** Every internal link discovered on every audited page is recorded with its URL, anchor text, and link type. The audit does not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 7 pages analysed | Platform: Cloudflare Pages | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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