---
title: "Neomwellbeing: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-15"
modified: "2026-05-15"
client: "Neomwellbeing"
clientSlug: "neomwellbeing-com"
clientUrl: "https://neomwellbeing.com"
reportId: "neomwellbeing-com-WEB-AUDIT-20260515"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-15"
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
**Date:** 15 May 2026\
**Report ID:** neomwellbeing-com-WEB-AUDIT-20260515

---

## About This Report

This report covers 5 pages audited across neomwellbeing.com's site using the Web Audit Suite. Each page is analysed across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

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
| Accessibility | **18**/100 | `#####--------------------` **(!)** |
| SEO | **73**/100 | `##################-------` |
| Machine Suitability | **25**/100 | `######-------------------` **(!)** |
| MX Stack | **51**/100 | `#############------------` |
| Agent Readability | **65**/100 | `################---------` |
| Pipeline Survivability | **72**/100 | `##################-------` |

Neomwellbeing arrives with a clear and confident brand proposition. Across the audited set, the SEO foundations are solid — a score of 73/100 reflects well-structured page content, coherent title conventions, and an indexable catalogue that serves human visitors purposefully. The product and wellbeing narrative comes through with warmth, and the groundwork is there for a strong organic presence as the brand grows.

Before we turn to the machine-experience opportunity, we want to name accessibility as a Priority 1 compliance item. We recorded 96 critical WCAG AA issues across the audited set, and while that number is significant, the picture is more manageable than it first appears: 80 of those issues trace back to 22 recurring template patterns, which means a single theme-level edit per pattern resolves all instances at once. The chance to close the bulk of this exposure through a focused sprint of template work — rather than page-by-page remediation — is both practical and well within reach. The headline opportunity on the machine-experience side is Discovery Readiness, which scored 25/100 across the audited set. Search crawlers, AI agents, and the broader class of automated systems we refer to as machines are increasingly the first point of contact between a brand and a prospective customer, and at MX Readiness Level 1 there is meaningful room to strengthen how those machines find, interpret, and surface Neomwellbeing's content.

The Structured Data Quality score of 74/100 is an encouraging foundation — Schema.org JSON-LD is the one asset that every machine can read regardless of how a page is rendered or assembled by the platform, and Neomwellbeing already has the scaffolding in place. Building on that Schema maturity, lifting Catalogue Visibility from its current 45/100, and equipping the site with the signals machines need to confidently represent the brand in answers and recommendations represents the clearest path from where the audited set sits today to a meaningfully stronger machine-readable presence.

> 

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, SEO lands in good shape at 73/100, though performance averaging 5,988ms and an accessibility score of 18/100 — with 96 issues, 80 of which trace to 22 template patterns — represent the clearest opportunity to strengthen the experience for human visitors.

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Excellent | A | — |
| Performance | Could Be Better | C | seeding (n=1) |
| Accessibility (WCAG) | Needs Improvement | D | seeding (n=1) |
| Trust and Credibility | Excellent | A | — |

### Machine Experience

Across the audited set, machines can parse structured content with reasonable fidelity — Structured Data Quality at 74/100 and Pipeline Survivability at 72/100 give agents a workable foundation — yet Discovery Readiness at 25/100 and Metadata Stack Completeness at 51/100 mean those same machines will struggle to locate and contextualise Neomwellbeing's pages reliably before they even begin reading them.

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 25/100 | Needs Improvement | D | seeding (n=1) |
| Structured Data Quality | 74/100 | Good | B | seeding (n=1) |
| MX Stack Completeness | 51/100 | Could Be Better | C | seeding (n=1) |
| Pipeline Survivability | 72/100 | Excellent | A | seeding (n=1) |

*Peer-comparison dataset `2026-05-15.4` — sample size n=1, still seeding. The "vs Peers" column will populate as fresh audits land.*

---

## Reading the Report: Two Budget Lenses

The findings below are tagged with one of three buckets so different budget owners can navigate to the work that matters to them:

- **Compliance Risk** — accessibility (WCAG 2.1 AA), duplicate IDs, forms, and semantic structure. These are inclusion and legal-exposure issues; the budget owner is typically legal, HR, or an accessibility lead.
- **Cross-cutting Foundations** — performance and SEO. These affect both human visitors and AI agents; the budget owner is usually digital operations or a foundation engineering team.
- **AI Opportunity** — discovery readiness, metadata stack, llms.txt, structured data, agent cards, and pipeline survivability. These determine whether the site lands in agent answers; the budget owner is typically the CMO or head of digital.

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

**Current Level:** 1 — Basic

**Evidence:** MSC 51/100 | SDQ 74/100 | Discovery 25/100 | Consistency 100%

**To reach the next level:** Add full MX fields and governance metadata. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

The five pages we audited across the audited set reveal a set of genuine strengths — consistent security headers, a structured data score of 74/100, and an SEO baseline of 73/100 that together form a solid foundation for the improvements that follow. These results reflect real care in how Neomwellbeing has been built, and they give us a strong platform to work from.

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

- Security headers are in place on every page — HTTPS, HSTS, Content-Security-Policy, X-Frame-Options, and X-Content-Type-Options on 7 of 7 audited pages.
- Commerce schema is present on every product page — 3 of 3 product pages carry both Product and Offer entities.
- All 8 tested AI agents can fetch the site — ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Cross-page consistency is complete — every audited page carries the same metadata pattern, confirming uniform implementation across the 5-page audit set.
- JSON-LD is present in the served HTML of every page — every agent that fetches the raw HTML gets the structured data.

---

## Findings

### At a Glance

The findings below surface the highest-impact opportunities across the audited set, prioritised so that the gaps most likely to limit how machines read, rank, and cite Neomwellbeing come first. Discovery Readiness leads at 25/100 because the signals it covers sit upstream of everything else — when machines cannot reliably interpret a page, stronger Structured Data scores of 74/100 and Metadata Stack Completeness of 51/100 deliver less than they otherwise would.

## At-a-Glance Findings

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | WCAG 4.1.1 — Duplicate `id="quantity"` on 4 pages (11 instances) | Compliance Risk | High | Low | Assistive tech users may miss or mis-navigate interactive controls |
| 2 | WCAG 4.1.1 — Duplicate `id="mini-cart"` on 4 pages (4 instances) | Compliance Risk | High | Low | Assistive tech users may receive incorrect focus targets |
| 3 | WCAG 3.2.2 — Forms without submit buttons, header selector (4 pages) | Compliance Risk | High | Low | Keyboard-only users are less likely to complete form interactions |
| 4 | WCAG 3.2.2 — Forms without submit buttons, predictive selector (4 pages) | Compliance Risk | High | Low | Keyboard-only users are less likely to complete form interactions |
| 5 | WCAG 1.3.1 — Empty heading tags on 4 pages (4 instances) | Compliance Risk | High | Low | Screen reader users may encounter disorienting phantom headings |
| 6 | Semantic structure score 20/100 — 573 bare divs out of 867 total elements | Compliance Risk | High | Medium | Machines and assistive tech are less likely to interpret page structure accurately |
| 7 | Accessibility score 18/100 — 96 issues across the audited set | Compliance Risk | High | Medium | All assistive tech users risk missing functional or navigational cues |
| 8 | SEO score 73/100 — Heading quality 51/100; Served HTML 25/100 | Cross-cutting | High | Medium | Crawlers may miss content not present in the served HTML |
| 9 | Performance — 5988ms average load time across the audited set | Cross-cutting | Medium | Medium | Users on slower connections are less likely to remain engaged before content loads |
| 10 | Discovery Readiness 25/100 — Metadata Stack Completeness 51/100 | AI Opportunity | High | Medium | Machines risk missing sufficient signals to confidently index or cite pages |
| 11 | Structured Data 74/100 — Pipeline Survivability 72/100 | AI Opportunity | Medium | Low | Machines may not extract full entity context, reducing citation confidence |

---

**Priority 1: WCAG 4.1.1 — Duplicate id="quantity" (11 instances, 4 pages)**

**Bucket:** Compliance Risk

**Finding:** The `id` attribute value `"quantity"` appears 11 times across 4 of the audited pages. The HTML specification requires every `id` to be unique within a document; duplication means assistive technologies referencing that identifier may resolve to the wrong element or none at all.

**What to change and why:**
- Ensure each quantity-related control carries a unique `id` within its document. This directly addresses WCAG Success Criterion 4.1.1 (Parsing), which requires that elements have unique IDs so assistive technologies can reliably expose them to users.
- Because 80% of accessibility issues across the audited set trace to 22 recurring template-level patterns, resolving the template source of this duplication will clear all 11 instances at once — making a single theme edit the highest-leverage route.
- Unique IDs also enable correct programmatic association between labels and controls, supporting WCAG 1.3.1 (Info and Relationships) as a co-benefit.

**Effort:** Low

---

**Priority 2: WCAG 4.1.1 — Duplicate id="mini-cart" (4 instances, 4 pages)**

**Bucket:** Compliance Risk

**Finding:** The `id` attribute value `"mini-cart"` is repeated 4 times across 4 of the audited pages, creating the same parsing ambiguity identified in Priority 1. Users of screen readers and other assistive technologies may be directed to an unintended element when this ID is referenced.

**What to change and why:**
- Make each mini-cart container's `id` unique within its page. This resolves the WCAG 4.1.1 violation and ensures that any programmatic reference to the cart region targets the correct element.
- As with Priority 1, this pattern almost certainly originates in a shared template; a single theme-level correction will address all 4 flagged instances across the audited set.
- Correct ID uniqueness also supports assistive-technology landmark navigation, reducing the risk that users are deposited at the wrong region of the page.

**Effort:** Low

---

**Priority 3: WCAG 3.2.2 — Form without submit button, header selector (4 pages)**

**Bucket:** Compliance Risk

**Finding:** Four forms matched against the selector `#shopify-section-header > div:nth-child(1) > div:nth-child(1…` across 4 pages do not contain a recognised submit button. WCAG Success Criterion 3.2.2 (On Input) requires that form submission be achievable without a pointing device; the absence of a submit button means keyboard-only users and switch-access users are less likely to be able to complete the interaction.

**What to change and why:**
- Add a submit-capable control to each affected form. WCAG 3.2.2 explicitly lists the element types that qualify; developers can consult the criterion directly for the permitted options, so this report focuses on the reasoning: without a submit button, keyboard users have no standard mechanism to trigger form submission.
- Because this recurs on all 4 audited pages via what appears to be a shared header template, a template-level fix will resolve all instances simultaneously.
- Resolving this gap also benefits users on voice-control software, which relies on operable, labelled controls to allow command-based interaction.

**Effort:** Low

---

**Priority 4: WCAG 3.2.2 — Form without submit button, predictive selector (4 pages)**

**Bucket:** Compliance Risk

**Finding:** A second set of 4 forms — matched against the selector `html > body > div:nth-child(5) > div:nth-child(3) > predicti…` across 4 pages — presents the same WCAG 3.2.2 gap as Priority 3. These appear to relate to predictive-search or autocomplete functionality and likewise lack a standard submit control.

**What to change and why:**
- Introduce a submit-capable control into each predictive-search form. The same WCAG 3.2.2 reasoning applies: keyboard users need a standard submission path and should not be dependent on JavaScript-triggered behaviours that may not be accessible to all input methods.
- Addressing this at the template level will clear all 4 instances across the audited set in a single edit.
- Accessible search submission also improves overall task-completion rates for users who navigate by keyboard or assistive device, broadening the audience able to engage with product-discovery features.

**Effort:** Low

---

**Priority 5: WCAG 1.3.1 — Empty heading tags on 4 pages (4 instances)**

**Bucket:** Compliance Risk

**Finding:** Heading elements with no text content appear 4 times across 4 pages, tracing to the selector `#shopify-section-sections--25230890140031__redirection_popup…`. WCAG Success Criterion 1.3.1 (Info and Relationships) requires that structure conveyed visually be programmatically determinable; an empty heading announces structural context to a screen reader user without delivering any content, creating a disorienting navigation experience.

**What to change and why:**
- Remove heading markup from any element that carries no meaningful heading text, or supply the intended content if the heading is meant to be present. This directly addresses WCAG 1.3.1 by ensuring that heading tags convey real informational structure rather than phantom landmarks.
- Heading elements also inform search crawlers about page structure and topic hierarchy; empty headings contribute nothing to that signal and may dilute the heading-quality score, which sits at 61/100 across the audited set.
- This pattern originates in a named template section, so a single correction at that section level will resolve all 4 instances.

**Effort:** Low

---

**Priority 6: Semantic Structure 20/100 — 573 bare divs out of 867 total elements**

**Bucket:** Compliance Risk

**Finding:** We recorded a semantic structure score of 20/100 across the audited set, with 573 of 867 total elements consisting of bare, non-semantic divs. When the majority of layout is expressed through generic containers rather than meaningful HTML elements, both assistive technologies and machines are less likely to interpret the purpose and hierarchy of page regions correctly.

**What to change and why:**
- Replace generic container elements with semantically appropriate HTML equivalents where the content's role is well defined — for example, navigation, header, footer, main, article, and section regions. This supports WCAG 1.3.1 by making structure programmatically determinable, and it provides machines with clearer landmarks when parsing content for indexing or citation.
- The 573 bare divs represent a volume that justifies a templated, top-down approach rather than page-by-page remediation — auditing the shared layout templates first will yield the greatest reduction in non-semantic markup.
- A higher semantic structure score also supports the heading-quality score (currently 61/100) by ensuring heading elements sit within meaningful landmark regions, reinforcing the document outline for both users and crawlers.

**Effort:** Medium

---

**Priority 7: Accessibility 18/100 — 96 issues across the audited set**

**Bucket:** Compliance Risk

**Finding:** The overall accessibility score of 18/100 reflects 96 issues detected across the 5 audited pages. Of these, 80 — that is, 80% — trace to 22 recurring template-level patterns. This concentration means that a relatively small number of targeted template edits carries disproportionate remediation value.

**What to change and why:**
- Prioritise the 22 identified template patterns as the primary remediation surface. Because these patterns recur across multiple pages, each template fix resolves multiple instances simultaneously, compressing the overall effort required to move the score materially.
- An accessibility score of 18/100 places the audited set well below the threshold at which legal exposure is typically considered manageable under WCAG 2.1 AA obligations; this makes remediation a time-sensitive task for the legal and accessibility leads, not a future roadmap item.
- Progress against this score should be tracked at the template level first, and then at the individual-page level for the residual 20% of issues that are not template-driven.

**Effort:** Medium

---

**Priority 8: SEO 73/100 — Heading quality 61/100; Served HTML 25/100**

**Bucket:** Cross-cutting

**Finding:** The SEO score of 73/100 is solid at the composite level, but two underlying signals present clear opportunities: heading quality at 61/100 and served HTML at 25/100. Low served-HTML content means that crawlers consuming the initial HTML response encounter significantly less content than a rendered browser session would deliver.

**What to change and why:**
- Improve the volume and quality of content present in the served HTML so that crawlers do not need to execute scripts to encounter meaningful page content. When served HTML scores are low, crawlers may miss or de-prioritise content that only appears after rendering, reducing the likelihood that pages rank for their intended terms.
- Review heading structure across the audited set to improve the 61/100 heading-quality score. Headings should accurately reflect page topics, follow a logical hierarchy, and — as noted in Priority 5 — never be empty. Strong heading structure gives crawlers a reliable content outline.
- These two changes address the cross-cutting nature of this finding: SEO foundations affect both human audiences (via ranking and discoverability) and machines (via the signals used to decide which pages to index and cite).

**Effort:** Medium

---

**Priority 9: Performance — 5988ms average load time**

**Bucket:** Cross-cutting

**Finding:** We recorded an average load time of 5988ms across the audited set. Extended load times increase the probability that users on slower connections disengage before content is available, and they may also influence crawler time-budget decisions that affect the depth of indexation.

**What to change and why:**
- Investigate the sources of load-time cost across the audited pages — common contributors include render-blocking resources, large asset payloads, and slow server response — and prioritise reductions that move the largest individual contributors. This report does not have asset-level data for the audited set, so a dedicated performance audit would identify the specific targets.
- Reducing load time improves Core Web Vitals signals, which are a recognised input to search ranking; improvement here therefore compounds the benefit of the SEO work recommended in Priority 8.
- Faster pages also reduce the likelihood that machines abandon page parsing mid-load, supporting the Pipeline Survivability score of 72/100.

**Effort:** Medium

---

**Priority 10: Discovery Readiness 25/100 — Metadata Stack Completeness 51/100**

**Bucket:** AI Opportunity

**Finding:** A Discovery Readiness score of 25/100 reflects a significant opportunity to improve the signals that machines use to locate, evaluate, and cite pages. Metadata Stack Completeness at 51/100 indicates that roughly half of the expected metadata surface is present across the audited set, leaving machines with an incomplete picture of page identity and relevance.

**What to change and why:**
- Audit and extend the metadata stack — including Open Graph, canonical, and any agent-oriented metadata signals — to bring Metadata Stack Completeness closer to full coverage. Machines use this metadata to assess page authority and topic; gaps reduce the confidence with which they assign citations or surface content in generated responses.
- Consider the role of a well-formed llms.txt file in signalling which content is intended for machine consumption. The Discovery Readiness score of 25/100 reflects the absence or incompleteness of such agent-facing signals; introducing them creates a dedicated, low-noise surface for machines to parse.
- A low Discovery Readiness score also reduces Pipeline Survivability headroom; improving metadata completeness supports the current 72/100 Pipeline Survivability score and creates more resilient agent-facing infrastructure.

**Effort:** Medium

---

**Priority 11: Structured Data 74/100 — Pipeline Survivability 72/100**

**Bucket:** AI Opportunity

**Finding:** Structured Data quality at 74/100 is a constructive baseline, and Pipeline Survivability at 72/100 indicates that content is reaching machines with reasonable fidelity. The opportunity lies in closing the remaining gap: incomplete or absent structured data properties reduce the confidence with which machines extract entity-level information and attribute it accurately in generated outputs.

**What to change and why:**
- Review the structured data implementations across the audited set to identify properties that are present but incomplete, and properties that are entirely absent. Machines use structured data as a high-confidence signal for entity recognition; a richer schema implementation increases the likelihood that pages are cited with accurate entity context.
- Improving Pipeline Survivability beyond 72/100 requires ensuring that structured data is present in the served HTML rather than injected post-render, so that crawlers consuming the initial response encounter it without requiring script execution. Given the served HTML score of 25/100, this is a realistic risk to investigate.
- Both scores compound each other: richer structured data raises the ceiling on Pipeline Survivability, and higher survivability means more machines successfully process the structured data that is already in place.

**Effort:** Low

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen the site's machine readiness.

- **Organization with `sameAs`** — linking Neomwellbeing's Organization entity to verified third-party identifiers (such as Wikidata or LinkedIn) gives machines a stable, cross-platform anchor for the brand, reducing ambiguity when agents attempt to surface or cite the company.

- **`AggregateRating` on Product entities** — once Product markup is introduced, adding aggregate rating data allows machines to compare and rank Neomwellbeing's offerings directly within structured results and agent-generated recommendations, without requiring a click to the page itself.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt — declaring a content-use policy for machines gives Neomwellbeing an explicit, machine-readable statement of how automated systems may engage with its content, a lightweight addition to robots.txt that is increasingly expected by responsible AI agents.

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
| Custom error page | Yes — custom error page |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | Yes |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | Yes |
| Internal navigation links | 178 — links to same-site pages |
| MX governance tags | Not present |
| Schema.org JSON-LD | Absent — add noindex to error page |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page — a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://neomwellbeing.com/`. A first-time visitor sees the cold-cache cost: the crawler recorded 16243 ms on its initial fetch — **first-visit verdict: Slow — investigate origin**. Three cache-busted re-probes that followed returned 859ms, 1361ms, 225ms, giving a returning-visitor median of **859 ms** — **returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://neomwellbeing.com/products/perfect-night-sleep-luxury-scented-candle`. A first-time visitor sees the cold-cache cost: the crawler recorded 2941 ms on its initial fetch — **first-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 1241ms, 1412ms, 262ms, giving a returning-visitor median of **1241 ms** — **returning-visitor verdict: Healthy**.

**Verdict:** The slowest page returned slowly on its first cold-cache visit but is served acceptably under cache-busted re-probes — first-time visitors carry a cold-origin cost that the returning-visitor median hides.

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

*Showing the first 10 lines of `robots.txt` — the full 164-line file is preserved alongside this report as `neomwellbeing-com-robots-txt.txt`.*

Neomwellbeing's robots.txt is present and references three sitemaps, giving machines a clear route into the crawlable content. At the same time, we found 146 disallowed paths across the audited set, a breadth of restriction that warrants a careful review to confirm no commercially valuable content is inadvertently withheld from machines.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 908 entries | Fewer than crawl found |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | No | Absent |

**Sitemap grade:** Complete

The sitemap earns a Partial grade, covering 908 URLs with both lastmod and changefreq attributes present — yet the absence of priority values across the audited set leaves machines without the relative-importance signals that help them allocate crawl budget more deliberately.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

The llms.txt file is present and includes a site description, which gives machines a meaningful starting point for understanding Neomwellbeing's content — however, the file currently lacks both a page inventory and a content policy, leaving machines without the fuller context needed to index and represent the brand accurately across the audited set.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

Neomwellbeing does not currently serve an llms-full.txt file — a request to the expected path returns a 404, and no reference to the file appears in the sitemap or homepage head. For a content-heavy catalogue of 908 pages, adding an llms-full.txt would give machines a single, structured surface from which to read and cite the full body of the site's content without crawling each page individually.

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

The audit identified 28 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`neomwellbeing-com-structured-data-findings.csv`](neomwellbeing-com-structured-data-findings.csv). The 28 rows describe individual Schema.org property gaps on specific entities — most of them share a small number of underlying patterns, shown below ranked by instance count.

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
| `vocabulary` | The `@type` value (the JSON-LD class name an entity declares itself as) is not in the Schema.org vocabulary — typically a typo or an invented type. |

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is — a Product, an Article, an Organization — but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside the page itself. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

**What this section checks.** Each signal below is derived deterministically from served HTML and JSON-LD on disk — no inference, no model judgement. Five structural signals fire per page: (i) self-promotional listicle (the page advertises a ranked list whose first entry resolves to the publisher's own host), (ii) year-swap refresh (the title year is two or more years ahead of `dateModified`), (iii) first-party superlative (claims like "best", "leading", "world-class" without an external reference), (iv) third-party citation count (outbound links to hosts other than the audited site), and (v) provenance metadata presence (`author`, `dateModified`, `publisher`). Pages whose body content runs over 400 words while emitting zero third-party citations carry no verifiable references and contribute to the blocker list. A clean run shows a single em-dash row and the "no blockers" verdict.

### Per-page findings

| Page | Listicle | Year-swap | First-party superlative | Third-party citations | Provenance metadata |
|------|----------|-----------|--------------------------|------------------------|----------------------|
| — | — | — | — | — | — |

A self-promotional listicle is a page whose `<title>` or `<h1>` advertises a ranked list and whose position-one entry resolves to the publisher's own host or brand. A year-swap refresh is a page whose title year is two or more years ahead of its JSON-LD `dateModified`. The citation column counts outbound links to hosts other than the audited site; pages with body content over 400 words and zero third-party citations carry no verifiable references.

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

Neomwellbeing is Partially Compatible with the MX Journey; Purchase Confidence is N/A for this site type, with 3 of 4 applicable stages passing across the audited set.

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether the machine can read the page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether the page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily — these three determine whether the page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 4/4 | 4 page(s) exceed the 250 KB threshold. Agents with limited fetch windows may stop reading before reaching the main content. | Largest page: 843 KB. Threshold: 250 KB. See neomwellbeing-com-pipeline-truncation-risk-pages.csv (4 pages). |
| SPA Shell | Fail | 1/4 | Content requires JavaScript to appear. Server-side agents (ChatGPT, Claude, Perplexity) see an empty shell when they fetch these pages. | Max gap score: 25. 0 means served and rendered match. Page: https://neomwellbeing.com/ |
| Soft 404 | Pass | 4/4 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 4/4 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.45. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 4/4 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 3 page(s) with tab widgets. |
| Delayed Content Start | Pass | 4/4 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 14% of the document on some pages. |
| Broken Code Fences | Pass | 4/4 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Fail | 4/4 | The server advertises content negotiation via Vary: Accept. Agents that ask for a different Accept header may receive different content than the browser version. | 4 page(s) advertise format negotiation. See neomwellbeing-com-pipeline-http-content-negotiation-(vary)-pages.csv (4 pages). |
| Cross-Host Redirect | Pass | 4/4 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 0 page(s) cross origin during redirect. |
| Generic Headings | Pass | 4/4 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | 4/4 | Actual prose content averages 45% of served bytes — well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 45%. Threshold: 30%. |
| Inline Tag Bloat | Fail | 4/4 | 4 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 80 element(s) > 500 bytes. Largest inline CSS: 71194 B. Largest inline JS: 68215 B. See neomwellbeing-com-pipeline-inline-tag-bloat-pages.csv (4 pages). |
| Head Weight | Pass | 4/4 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.14. Average: 0.12. Threshold: 0.50. |

**Pipeline Survivability score:** 72/100

Across the audited set, four resilience checks drew flags — Truncation Risk, SPA Shell, Content Negotiation, and Inline Tag Bloat — and Truncation Risk stands out as the most pervasive, affecting every one of the four pages we reviewed. When machines encounter content that is cut short before it can be fully processed, they may index or cite an incomplete version of the page, which means Neomwellbeing's messaging risks reaching agents and crawlers in a degraded or fragmentary form. Addressing Truncation Risk across the audited set would therefore deliver the broadest single improvement to how machines read and represent this content.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R — Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S — The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup — naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent the page is gone.

The Div Soup check runs against the rendered HTML on every page. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 20/100 | high | 573 | 66% | 9 | `div.star-container.yotpo-sr-star-full` (317), `div.flex.flex-col` (243), `div.flex.flex-row` (213), `div` (150), `div.star-container` (150) |

Across the audited set, we found that 573 of 867 rendered elements — 66% — are bare divs, meaning machines lose structural context and must fall back on positional inference to determine the role and meaning of each node. The pattern is both surface-wide and structurally deep: a bare chain reaching 9 levels, combined with a high bare-div ratio, points to a layout pipeline built on utility-first class composition (note the prevalence of `div.flex.flex-col` and `div.flex.flex-row`) alongside third-party widget injection (the `div.star-container.yotpo-sr-star-full` selector accounts for 317 instances alone). The cheapest first move is to wrap the obvious page landmarks — header, nav, main, footer, aside — in their proper semantic elements, which immediately gives machines reliable structural anchors and begins to reduce the bare-div ratio without requiring any restructuring of the visual layout.

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
| MX governance tags | N/A | — |
| Open Graph tags | N/A | — |
| Twitter Card tags | N/A | — |
| Skip link | N/A | — |
| llms-txt link tag | N/A | — |
| Canonical URL | 100% | — |
| Exactly 1 H1 | N/A | — |
| Code examples present | N/A | — |
| Self-contained sections | 100% | — |
| Error/troubleshooting docs | N/A | — |
| Lighthouse heading compliance | N/A | — |

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

*Showing the top 10 of 165 duplicate fragments by occurrence count. The full inventory — every fragment with its hash and the page URLs that carry it — is preserved alongside this report as `neomwellbeing-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents — Accessibility and Machine Readability

Accessibility legislation across major markets — including the EAA (Directive (EU) 2019/882, in force 28 June 2025), Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada — has converged on ISO 14289-1 (PDF/UA) as the shared technical baseline, making structured PDF tagging both a legal obligation and a professional standard. In parallel, an untagged or image-based PDF is opaque to machines: search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from it, just as they cannot parse unsemantic HTML — a properly tagged PDF with a complete structure tree earns machine readability by the same logic that semantic markup does for web pages.

No PDF documents were discovered in the audited surface. Accessibility exposure on the document carrier: **low within the pages crawled**.

**Scope note:** this audit crawls a defined set of public pages — typically the home page, key content pages, and any pages linked directly from them. PDFs sitting behind login forms, linked only from uncrawled pages, stored in unlinked directories, or hosted on third-party domains are outside the crawl boundary and do not appear in this count. If your site publishes datasheets, white papers, investor documents, or product manuals that were not part of this crawl, a wider-scope PDF audit is needed before drawing conclusions about overall accessibility exposure on the document carrier.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings** — address the 96 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings** — Discovery Readiness improvements and metadata tuning that compound over time
3. **Consider optional enhancements** — optional patterns that give a first-mover advantage in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | WCAG 2.1 AA compliance | Priority 1 items resolved, compliance risk removed |
| Full Optimization | Semantic Structure, Discovery Readiness, Catalogue Visibility, Metadata Stack, Structured Data, Heading Quality, Performance, and optional enhancements | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://neomwellbeing.com leads with Structured Data at 74/100 — a meaningful foundation that gives machines a reliable foothold for interpreting content. The most significant opportunities lie in Discovery Readiness at 25/100 and Accessibility at 18/100, where targeted improvements would extend the reach of that structured foundation to both machines and the full range of human visitors. We invite you to explore the detailed findings below and take the next step toward closing those gaps.

### Audit Scores

The site serves an empty HTML shell to server-side agents. The "Rendering" column shows whether each score was measured from the served HTML (what agents actually get) or the rendered HTML (what agents would get with SSR).

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

Server-side agents see only the served HTML. The AI Suitability score reflects their experience. All other scores reflect what the site achieves after JavaScript renders.

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| /agents.md | 35 | 80 | — | 58 | 58 |
| / (nav) | 74 | 0 | 100 | 0 | -16 |
| /products/complete-bliss-standard-scented-candle | 90 | 0 | 100 | 0 | 0 |
| /products/perfect-night-sleep-luxury-scented-candle | 88 | 0 | 100 | 0 | 0 |
| /products/perfect-nights-sleep-standard-scented-candle | 79 | 0 | 100 | 0 | 0 |

The page marked (nav) is navigational — it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 73/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page — 733 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 733   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set, we reviewed 670 images spanning four formats: 377 JPEG, 97 SVG, 24 PNG, and zero WebP. Alt-text coverage stands at 490 images — 73.1% — leaving 180 without any alt attribute. For a brand whose proposition is likely rooted in wellbeing and sensory experience, those 180 images represent a meaningful opportunity to extend the content's reach to screen-reader users and to give machines the descriptive signal they need to understand visual content in context.

On loading strategy, the picture across the audited set splits three ways. A healthy 363 images carry an explicit `loading="lazy"` attribute, and one image is marked `loading="eager"`. The remaining 306 images have no loading attribute set at all — and that is worth pausing on, because "no attribute" is not equivalent to eager loading. The browser makes its own inference based on position in the viewport and document flow, which means these 306 images are in an indeterminate state: some will load eagerly, some will not, and the outcome is not under deliberate authorial control. Auditing and explicitly attributing each of those images — either lazy or eager depending on whether it sits above or below the fold — would bring the loading strategy fully under intentional control.

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

**MX-specific metrics:** Metadata Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks — truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** The audit fingerprints the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Shopify**. The main audit uses Shopify-specific rate limits from our platform knowledge base — requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** Every internal link discovered on every audited page is recorded with its URL, anchor text, and link type. The audit does not probe link status — a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 5 pages analysed | Platform: Shopify | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

---

## Appendix E: Scoring Methodology

Every score in this report is bounded 0-100 with the same four-band scale (Excellent ≥76, Good ≥51, Could Be Better ≥26, Needs Improvement <26). The table below names each score's inputs and weights so the number can be traced back to the underlying signals — useful when a stakeholder asks "why is this 51 and not 70?"

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

- Add semantic HTML5 landmarks (main, nav, header, footer) — quickest visible jump.
- Publish llms.txt and reference it from robots.txt or meta — +10 to +25 combined.
- Add Schema.org JSON-LD with at least the required properties for the page's primary type.
- Remove layout tables and inline style attributes — large hidden penalties.
- Pre-render content (SSR or static export) — empty SPA roots cost -20.

### Rendered HTML Score (`renderedHtml`)

*Scale: 0-100 · Bucket: ai-opportunity*

Served HTML plus what becomes visible after JavaScript executes — what a browser-rendered agent sees. Bonus capped at +30 over Served HTML; dynamic-content penalties (carousels, autoplay, JS-dependent pricing) drag it back down.

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

- Eliminate JavaScript-dependent pricing — single largest rendered-only lever (-15).
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

- Publish /llms.txt at the site root — +20 to +35 combined (presence + reference + content).
- Add a Schema.org JSON-LD block with at least one entity — +15.
- Link sitemap from robots.txt — +15 (vs +8 if only alternate path).

### Metadata Stack Completeness (MX Stack) (`metadataStackCompleteness`)

*Scale: 0-100 · Bucket: ai-opportunity*

How complete is the seven-layer MX metadata stack? Uses an applicable-points denominator — score isn't dragged down by checks that don't apply (e.g. no forms means form-label checks are excluded from the denominator).

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

- Fill in OpenGraph + canonical + meta description — quick wins for the SEO + Social layers.
- Add MX governance tags (mx-status, mx-content-type) — only 6 points but no other way to earn them.
- Improve Schema.org required/recommended coverage — the largest single layer (≤20).

### Structured Data Quality (SDQ) (`structuredDataQuality`)

*Scale: 0-100 · Bucket: ai-opportunity*

How good is the structured data, given that it exists? Seven components — penalty cap at 5 if JSON-LD exists but uses a non-schema.org vocabulary.

| Input | Weight |
|-------|--------|
| Presence: schema.org JSON-LD exists | 10 |
| Required-property coverage — WORST entity (one broken entity isn't hidden by good ones) | ≤25 |
| Recommended-property coverage — average across entities | ≤15 |
| Entity richness — avg content properties; 3-5 props = 5pt, 6-9 = 10pt, 10+ = 15pt | ≤15 |
| Cross-entity references — nested @type + @id linking | ≤15 (10 nesting + 5 @id) |
| Linked-data signals — sameAs / mainEntityOfPage / isPartOf etc., +1 each capped 10 | ≤10 |
| Vocabulary validity — fraction of @type values in Schema.org whitelist | ≤10 |

**What moves this score:**

- Audit your worst entity first — required-property coverage uses the minimum, not the average.
- Add cross-entity @id references — wires the graph and unlocks 15 points.
- Include linked-data signals (sameAs to Wikidata, mainEntityOfPage) — easy +5 to +10.

### Agent Readability (`agentReadability`)

*Scale: 0-100 · Bucket: ai-opportunity*

How easy is the content for an AI agent to parse and quote? Applicable-points denominator — checks for code blocks only apply when code exists.

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

- Move important content to the top, CTAs to the bottom — content position is worth 15.
- Resolve backward references inline — 'as discussed above' costs 7-15 points.
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
- Aim for one heading per 50-500 words — too sparse or too dense both lose points.

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

- Fix any check that fails with weight 3 first — biggest score per fix (truncation, served/rendered gap, soft-404).
- Resolve boilerplate burial (content trapped behind nav/footer) — weight 2, common.
- Eliminate redirect chains and broken code fences — low weight but quick to fix.

### Performance (`performance`)

*Scale: 0-100 (derived from load time) · Bucket: cross-cutting*

Scorecard-only band derived from average page load time. The audit does NOT generate prose about Performance — the figure is informational, treat the underlying load-time average and FCP/CLS/TBT for diagnosis. Reported in both the Compliance Risk and AI Opportunity contexts because slow pages exclude users AND make pipeline ingestion brittle.

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

- Optimise title (30-60 chars) and meta description (70-160 chars) — high weight, low effort.
- Ensure HTTPS, responsive meta tag, and OpenGraph are all present — three quick foundation wins.
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

- Fix Pa11y errors first — heaviest penalty, also strongest legal exposure under EAA / WCAG.
- Resolve duplicate IDs, missing form labels, low-contrast text — common high-frequency errors.
- Reduce notices last — they have the smallest score impact but the largest catalogue noise.

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

**Date:** 15 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*
