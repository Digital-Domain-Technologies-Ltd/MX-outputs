---
title: "Enhancely: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-26"
modified: "2026-05-26"
client: "Enhancely"
clientSlug: "enhancely-ai"
clientUrl: "https://www.enhancely.ai"
reportId: "enhancely-ai-WEB-AUDIT-20260526"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-26"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Enhancely"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 35
accessibilityScore: 89
seoScore: 84
llmSuitabilityScore: 100
totalIssues: 53
pagesAudited: 7
version: "1.0"
confidential: true
mx:
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Enhancely covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Enhancely", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Enhancely. Focus on the highest-leverage MX opportunities surfaced by the audit."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-05-26/enhancely.ai/enhancely-ai-report.pdf"
    description: "Generate PDF audit report for Enhancely"
  # Provenance sidecar pair. The per-audit evidence chain is split
  # into two adjacent files: the AI stream (LLM-driven, multi-agent,
  # human-committed steps) cited below as the primary sidecar, and
  # the deterministic stream (rule-driven gates, CSV checks, render
  # steps, probe results) named in the companion field. mx.pdf.sh
  # embeds this frontmatter as XMP metadata in the PDF; the PDF
  # therefore carries the AI sidecar pointer (the regulator-facing
  # one) and names the deterministic file so an inspector who wants
  # the rule-driven evidence can walk to it on disk. Citations are
  # claims of relevance, not compliance grants. The x-mx- prefix
  # follows the vendor-extensions policy at
  # mx-canon/mx-maxine-lives/registers/ADR/vendor-extensions-policy.cog.md
  # when the canon ratifies a "provenance" field through The
  # Gathering, the prefix drops in one place.
  x-mx-provenance:
    sidecar: "enhancely-ai-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "enhancely-ai-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

# Enhancely: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 26 May 2026\
**Report ID:** enhancely-ai-WEB-AUDIT-20260526

---

## About This Report

We audited 7 pages across www.enhancely.ai's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** Here we look at the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 7 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead, because Common Crawl (the archive underpinning most major LLM training datasets) prioritises HTML for its LLM-training subsets, so a plain-text llms.txt is unlikely to enter training corpora at the same rate as the rest of the site. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **35**/100 | `######------------` **(!)** |
| Accessibility | **89**/100 | `################--` |
| SEO | **84**/100 | `###############---` |
| Machine Suitability | **100**/100 | `##################` |
| MX Stack Completeness | **68**/100 | `############------` |
| Agent Readability | **64**/100 | `############------` |
| Pipeline Survivability | **79**/100 | `##############----` |

We audited seven pages of www.enhancely.ai and found a site that is doing real work for its human visitors. SEO foundations are solid, scoring 84/100 (Excellent) across the audited set, and the structured data layer is already well-populated with 12 unique schema types across 7 audited pages that reinforce topical relevance and content organisation. The platform serves content cleanly.

Before turning to machine readiness, we want to name accessibility as a Priority 1 compliance item. Across the audited set we recorded 53 raw instances of WCAG AA issues spanning 16 distinct issue types. The good news is that 48 of those instances trace back to 11 recurring template patterns, which means a single corrective edit per pattern resolves the majority of the raw count without page-by-page intervention. Addressing these patterns is the most direct route to a meaningful improvement in inclusion and audit-trail confidence. The headline opportunity beyond that is machine readiness. www.enhancely.ai sits at MX Readiness Level 1 (Discoverable): machines can find and parse the audited pages, but they cannot yet cite those pages as attested sources. We find that the score thresholds for Citation-ready (Level 2) are already met across MSC, Structured Data Quality, and Discovery Readiness, so the lever is not raising those scores further. What is missing is a small set of MX governance fields, specifically mx:status, mx:contentType, mx:audience, canonicalUri, and provenance markers, on at least one published page. Without those fields, a machine can read the content but cannot treat it as a citable, attributed source.

The one dimension that warrants a closer look in that machine-readiness picture is Catalogue Visibility, which scores 10/100 across the audited set. Discovery Readiness at 40/100 is already above the Citation-ready threshold, yet there is still room to strengthen how well the site surfaces itself to machine catalogues and crawlers. Taken together, the groundwork is genuinely there for www.enhancely.ai to move from a site that machines can discover to one they can actively cite and recommend. The sections that follow lay out exactly where to focus to make that step.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, www.enhancely.ai delivers a strong experience for human visitors, with Accessibility and SEO both sitting in the Excellent band, and the primary area for attention being the template-level patterns that account for the majority of the WCAG instances we recorded.

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Excellent | A | - |
| Performance | Good | B | median 83 |
| Accessibility (WCAG) | Excellent | A | median 81 |
| Trust and Credibility | Excellent | A | - |

### Machine Experience

Across the audited set, machines can discover and parse content with reasonable confidence, though citation capability as an attested source remains a step ahead, contingent on closing the gaps in discovery readiness and MX governance that currently hold www.enhancely.ai at Level 1 (Discoverable).

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 40/100 | Could Be Better | C | median 25 |
| Structured Data Quality | 87/100 | Excellent | A | median 57 |
| MX Stack Completeness | 68/100 | Good | B | median 50 |
| Pipeline Survivability | 79/100 | Excellent | A | median 90 |

*Benchmark median drawn from a curated audit dataset.*

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

**Evidence:** MX Stack Completeness 68/100 | Structured Data Quality 87/100 | Discovery Readiness 40/100 | Consistency 53%

**To reach the next level:** Score thresholds for Citation-ready are met (MSC 68, SDQ 87, DR 40), but no MX-namespaced governance metadata was detected on the audited pages. Add MX governance fields (mx:status, mx:contentType, mx:audience, canonicalUri, and provenance markers) to at least one published page to unlock Citation-ready. Without those fields a machine can discover the page but cannot cite it as an attested source.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, www.enhancely.ai arrives with a strong foundations: strong SEO and Structured Data Quality scores, an Accessibility result that places the work well within reach of full compliance, and a schema vocabulary already covering a broad range of types. These results are the groundwork on which the improvements detailed below can be built with confidence.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Good | Good - 3632ms average load time |
| SEO (content pages) | 84 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 3/5 | 3/5 headers present (HSTS, CSP absent); 0 of 7 URLs carry all five |
| Structured Data | 87 | Excellent - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 89 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 53% | 53% - same metadata patterns across every page |
| Agent access | 7/7 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Structured Data Quality of 87/100 (Decoration): the schema is valid, required properties are complete, and the vocabulary is in good order.
- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.
- Body content ratio averages 57%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We have prioritised the findings below by the degree to which each gap limits what machines can do with www.enhancely.ai, placing discovery and catalogue visibility at the top because those gaps constrain every downstream capability, from crawling and indexing through to citation and structured retrieval. Structured Data Quality sits at 87/100 across the audited set, yet Catalogue Visibility at 10/100 and Discovery Readiness at 40/100 show that the strongest opportunities lie in making the content machines can already parse more fully reachable and classifiable.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Footer contrast ratio 3.67:1, below WCAG 1.4.3 minimum 4.5:1 (6 pages) | Compliance Risk | High | Low | Low-vision users may miss footer content on 6 of 7 audited pages |
| 2 | Hero section contrast ratio 3.7:1, below WCAG 1.4.3 minimum 4.5:1 (6 pages) | Compliance Risk | High | Low | Low-vision users may miss primary section content on 6 of 7 audited pages |
| 3 | Semantic structure 49/100, worst page: 44 of 103 elements are bare divs (https://www.enhancely.ai/blog/schema-markup-explained-the-invisible-code-that-makes-your-website-visible-to-ai) | Compliance Risk | Medium | Medium | Screen reader users and machines are less likely to interpret page structure correctly |
| 4 | Security headers incomplete: Content-Security-Policy and Permissions-Policy absent | Cross-cutting | Medium | Low | Browsers may apply weaker default policies; security posture reduces agent confidence |
| 5 | Discovery Readiness 40/100: llms.txt, llms-full.txt, agent-card.json, ai.txt, and humans.txt all absent | AI Opportunity | High | Medium | Machines may miss structured entry points and risk missing this site in agent-driven discovery |
| 6 | MX governance fields absent from page frontmatter (canonicalUri, contentType, audience, status) | AI Opportunity | Medium | Low | Machines are less likely to classify content intent and audience correctly, reduces agent confidence |

---

**Priority 1: Footer Contrast Gaps, WCAG 1.4.3 (3.67:1 on 6 Pages)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, footer text on 6 of 7 pages carries a contrast ratio of 3.67:1 against its background, below the WCAG 1.4.3 minimum of 4.5:1 for normal text. We identify three distinct footer selectors sharing the same shortfall, all traceable to a single shared footer template. Because 48 of the 53 total issues we recorded trace to 11 recurring template patterns, a single theme-level adjustment to the footer background resolves all instances across the audited set in one pass.

**What to change and why:**

- Adjust the footer background to #000 for the selectors in `footer > div:nth-child(1) > div:nth-child(1)` and `footer > div:nth-child(2)`: this brings the 3.67:1 ratio into WCAG 1.4.3 compliance and removes legal exposure for low-vision users who rely on sufficient contrast to read footer navigation and legal copy.
- Address this at the template level rather than per-page: because the footer is shared, a single change resolves all 6 affected pages simultaneously, giving the highest ratio of compliance gain to engineering effort.
- After the change, verify the updated ratio meets 4.5:1 for all footer text variants (link states, small print, icon labels) so that no secondary contrast issue is introduced by the fix.

**Effort:** Low

---

**Priority 2: Hero Section Contrast Gap, WCAG 1.4.3 (3.7:1 on 6 Pages)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, the primary content section on 6 of 7 pages records a contrast ratio of 3.7:1, again below the WCAG 1.4.3 threshold of 4.5:1. The affected selector (`#content > section:nth-child(1)`) points to a shared section component, so the gap is template-level. This is a distinct gap surface from the footer findings and warrants a separate remediation step to ensure neither is overlooked.

**What to change and why:**

- Adjust the background for the first content section to #1f1f1f as identified in the audit data: this closes the 3.7:1 gap and meets WCAG 1.4.3, protecting low-vision users who encounter this element before any other page content.
- Treating this as a template component edit means the fix propagates to all pages sharing the component, making the remediation proportionate to the scale of the exposure.
- After applying the change, re-test the section in both light and any dark-mode variants served by www.enhancely.ai to confirm the ratio holds under all rendering conditions.

**Effort:** Low

---

**Priority 3: Semantic Structure 49/100, Worst Page 44 of 103 Bare Divs (https://www.enhancely.ai/blog/schema-markup-explained-the-invisible-code-that-makes-your-website-visible-to-ai)**

**Bucket:** Compliance Risk

**Finding:** We score semantic structure at 49/100 across the audited set, placing it in the high-concern band. The figures we cite here come specifically from the worst-performing page in the audited set, https://www.enhancely.ai/blog/schema-markup-explained-the-invisible-code-that-makes-your-website-visible-to-ai, where 44 of 103 total elements are bare divs. Because the blog template is shared across multiple posts, pages using the same template are likely to share a comparable structural profile, even though the precise figures apply to that one URL.

**What to change and why:**

- Replace presentational container divs with semantically meaningful elements (articles, sections, asides, headers, footers, nav) where the content role is clear: this directly moves the semantic structure score upward and gives screen readers the landmark structure they need to navigate the page efficiently, addressing WCAG 1.3.1 (Info and Relationships).
- Prioritise the blog post template specifically: because that template drives the worst-page figures, improvements there propagate to every post sharing it, giving the greatest structural coverage per unit of effort.
- Machines parsing content for citation or summarisation use structural signals to determine which text is body content, which is navigation, and which is supplementary; a reduction in bare-div ratio makes those distinctions clearer and reduces the risk of content being misread or skipped by automated pipelines.

**Effort:** Medium

---

**Priority 4: Security Headers Incomplete, Content-Security-Policy and Permissions-Policy Absent**

**Bucket:** Cross-cutting

**Finding:** We detect 3 of 5 expected security headers in place across www.enhancely.ai (HTTPS, X-Frame-Options, X-Content-Type-Options). Content-Security-Policy and Permissions-Policy are absent from all 7 audited URLs. While neither header directly determines search ranking, their absence signals a weaker security posture to browsers, automated security scanners, and the machines that assess trustworthiness of content sources.

**What to change and why:**

- Add a Content-Security-Policy header at the server or CDN layer: this restricts which resources browsers may load, reducing exposure to cross-site scripting vectors and signalling to automated trust assessors that www.enhancely.ai controls its content delivery surface.
- Add a Permissions-Policy header to declare which browser features the pages require: this limits the attack surface available to injected third-party scripts and demonstrates deliberate feature governance, which contributes positively to automated security assessments.
- Resolving both headers moves www.enhancely.ai from 3/5 to 5/5 on the security header check, a foundational improvement that benefits every other audit lens (performance, structured data trustworthiness, machine confidence) rather than any single page.

**Effort:** Low

---

**Priority 5: Discovery Readiness 40/100, llms.txt, llms-full.txt, agent-card.json, ai.txt, and humans.txt All Absent**

**Bucket:** AI Opportunity

**Finding:** We score Discovery Readiness at 40/100 (Could Be Better) across the audited set. None of the five well-known discovery artefacts are reachable on www.enhancely.ai: llms.txt, llms-full.txt, agent-card.json, ai.txt, and humans.txt are all absent. Without these files, machines that probe for structured entry points before crawling or summarising a site receive no signal about content scope, permitted use, or brand attribution. The Discovery Readiness score is the single largest gap between www.enhancely.ai's current posture and full MX Stack Completeness.

**What to change and why:**

- Add llms.txt and llms-full.txt at the root of www.enhancely.ai: these files give machines a structured, human-readable index of content scope and permitted use, and are the highest-priority artefacts for improving Discovery Readiness. We note that our recommendation for the content type of llms.txt diverges from the llmstxt.org specification; we recommend serving it as text/html.
- Add agent-card.json to declare the site's machine-interaction policy in a structured format: this allows automated agents to understand capabilities, contact points, and usage terms without relying on inference from page content.
- Add ai.txt and humans.txt to complete the five-artefact set: ai.txt extends machine-readable usage policy beyond robots.txt, while humans.txt provides attribution metadata that agents can surface when crediting content sources.
- Each artefact is a standalone file deployment with no dependency on the page templates; combined, they address the primary driver of the 40/100 Discovery Readiness score and increase www.enhancely.ai's eligibility to be cited by machines as an attested source.

**Effort:** Medium

---

**Priority 6: MX Governance Fields Absent from Page Frontmatter (canonicalUri, contentType, audience, status)**

**Bucket:** AI Opportunity

**Finding:** Across the audited set, page frontmatter does not carry the four MX governance fields we look for: canonicalUri, contentType, audience, and status. These fields allow machines to classify each page by its content type, intended readership, and publication status without having to infer those properties from surrounding text. Their absence is a secondary contributor to the MX Stack Completeness score of 68/100 (Good), and addressing them is the most targeted way to move that score toward the next band.

**What to change and why:**

- Add canonicalUri to each page's frontmatter: this gives machines an unambiguous, self-declared canonical address for the page, reducing the risk of content being attributed to a variant URL rather than the preferred one.
- Add contentType and audience fields: machines use these to determine whether a page is an article, a product page, a FAQ, or a guide, and who it is written for; accurate classification improves the relevance of any agent-generated summary that draws on the page.
- Add a status field to indicate whether each page is published, draft, or deprecated: this prevents machines from citing or surfacing content that the team considers out of date, a particularly important control for a site publishing technical guidance such as the schema markup content in the audited set.
- All four fields can be added incrementally, starting with the highest-traffic pages in the audited set, and the improvement in MX Stack Completeness will be visible in the next audit cycle without requiring changes to the visible page templates.

**Effort:** Low

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Person and Organisation entities**: Adding `sameAs` properties to the Person and Organisation entries already present across the audited set would connect those entities to authoritative external identifiers (such as LinkedIn profiles or Wikidata records), giving machines a verifiable anchor when attributing content to a named individual or to Enhancely as a team.

- **AggregateRating on FAQPage and Article entities**: The FAQPage and Article types already in use across the audited set could carry `AggregateRating` markup where genuine user ratings exist on those pages; we have not audited the full estate and cannot confirm whether such ratings are present beyond the 7 pages we reviewed.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for AI agents: because no such directives are currently declared, adding them would give machines a clear, machine-readable statement of how Enhancely's content may be used, reducing ambiguity for any agent that checks before indexing or citing.

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
| URL probed | https://enhancely.ai |
| HTTP status | 200 |
| Content-Type returned | text/html;charset=UTF-8 |
| Markdown served | No - server returned HTML regardless of Accept header |

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
| `<meta name="robots" content="noindex">` | No |
| Navigation back to valid content | Yes, home link and internal navigation present |
| Internal navigation links | 2 links to same-site pages |
| MX governance tags | Absent |
| Schema.org JSON-LD | Absent (correct: should not claim valid page) |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.enhancely.ai/blog/why-your-product-pages-are-invisible-to-ai-shopping-assistants-and-how-to-fix-it`. A first-time visitor sees the cold-cache cost: the crawler recorded 7517 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes that followed returned 231ms, 114ms, 172ms, giving a returning-visitor median of **172 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://www.enhancely.ai/blog/e-e-a-t-for-the-ai-era-how-chatgpt-co-recognise-your-brand-as-a-trustworthy-source`. A first-time visitor sees the cold-cache cost: the crawler recorded 2940 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 95ms, 111ms, 124ms, giving a returning-visitor median of **111 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** The slowest page returned slowly on its first cold-cache visit but is served acceptably under cache-busted re-probes; first-time visitors carry a cold-origin cost that the returning-visitor median hides.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /panel

Sitemap: https://www.enhancely.ai/sitemap.xml
```

*The full `robots.txt` (5 lines) is preserved alongside this report as `enhancely-ai-robots-txt.txt`.*

We found robots.txt in place, declaring one disallow path and pointing machines to one sitemap reference. The configuration grants broad access while clearly signalling the crawl boundary and sitemap location.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 51 entries | Matches crawl count |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** Complete

The sitemap earns a Complete grade, covering 51 URLs with lastmod, changefreq, and priority attributes all present across every entry. This level of completeness gives machines a well-formed crawl signal with no structural gaps to resolve.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms.txt file present on www.enhancely.ai, meaning machines that rely on this artefact to understand the site's scope, page inventory, and content policy receive no structured guidance. We recommend adding an llms.txt file covering a site description, a page inventory, and a content policy to give machines a clear entry point into www.enhancely.ai's content.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

The llms-full.txt endpoint returns a 404 and no reference to it appears in the sitemap or the homepage head. Whether adding a full-content machine-readable file is worth prioritising depends on the depth of content across the remaining pages not yet covered by the audited sample; we recommend revisiting this decision once broader page coverage has been assessed.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| Question | 7 | 100% | 100% | Answer |
| Answer | 7 | 100% | 100% | - |
| ListItem | 7 | 100% | 100% | - |
| BreadcrumbList | 7 | 86% | 100% | - |
| Organisation | 7 | 100% | 100% | ImageObject |
| Person | 6 | 100% | 100% | - |
| WebPage | 7 | 100% | 100% | BreadcrumbList, Organisation, WebSite, Person |
| WebSite | 7 | 100% | 25% | Organisation |
| FAQPage | 7 | 100% | 100% | - |
| Article | 4 | 92% | 100% | Organisation, WebPage, Person |
| BlogPosting | 3 | 100% | 100% | Person, Organisation, WebPage |
| ImageObject | 1 | 100% | 100% | - |

**Structured Data Quality:** 87/100\
**Coverage:** 7 pages with JSON-LD out of 7 total (100%)\
**Unique types:** 12

Across the 7 pages we audited, structured data is strong. Machines extract entity data from these pages reliably and the typed vocabulary survives the read; whether they can cite the page as an attested source is a separate question that depends on governance metadata (see the MX Readiness Level section). A wider audit confirms whether the same structural quality holds across the rest of the estate.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 10 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 17 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 15 | 15 | Average across entities |
| Entity richness | 10 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 15 | 15 | Nested @type values + @id linking |
| Linked-data signals | 10 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 10 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **87** | **100** | |

---

## Structured Data Findings

We identified 24 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`enhancely-ai-structured-data-findings.csv`](enhancely-ai-structured-data-findings.csv). The 24 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| WebSite | recommended | image | 7 | 7 | Site has no logo / hero image declared in structured data |
| WebSite | recommended | datePublished | 7 | 7 | No site-level publish date for crawler context |
| WebSite | recommended | author | 7 | 7 | Site has no top-level author/owner declared |
| BreadcrumbList | required | itemListElement | 2 | 2 | BreadcrumbList has no items - entire entity is empty |
| Article | required | author | 1 | 1 | No attribution surface - AI agents cannot identify who wrote the article |

Each summary row covers multiple per-entity rows in the sidecar; the grouped view is for reading at a glance, the sidecar is for processing.

**Severity legend** (the values in the *Severity* column above):

| Severity | Meaning |
|----------|---------|
| `required` | Schema.org spec requires this property for the type. Missing values break validation. |
| `recommended` | Schema.org strongly recommends this property. Missing values reduce richness. |
| `vocabulary` | The `@type` value (the JSON-LD class name an entity declares itself as) is not in the Schema.org vocabulary: typically a typo or an invented type. |

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is: a Product, an Article, an Organisation: but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside any single page. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

**What this section checks.** Each signal below is derived deterministically from served HTML and JSON-LD on disk: no inference, no model judgement. Five structural signals fire per page: (i) self-promotional listicle (a ranked list is advertised whose first entry resolves to the publisher's own host), (ii) year-swap refresh (the title year is two or more years ahead of `dateModified`), (iii) first-party superlative (claims like "best", "leading", "world-class" without an external reference), (iv) third-party citation count (outbound links to hosts other than the audited site), and (v) provenance metadata presence (`author`, `dateModified`, `publisher`). Pages whose body content runs over 400 words while emitting zero third-party citations carry no verifiable references and contribute to the blocker list. When the audited set is clean we omit the per-page table altogether and let the verdict line below carry the result.

### Templated clusters

No templated clusters detected at the audited scale. Pages in the audited set either carry product entities or have enough structural and textual variation to clear the stamp-out threshold.

### Provenance verdict

No provenance-gap blockers detected on the audited set. Pages clear the citation-readiness floor on the structural primitives we measure here.

_No blockers._

Any page contributing to a blocker above is capped at **Discoverable** readiness in the MX Readiness Level table below, regardless of its other scores. Citation readiness requires a verifiable claim to cite.

---

## Marker Reachability

| Marker   | In served | In rendered | In head | Reachable <250KB | Injected by JS |
|----------|-----------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Yes | Yes | Yes | Yes | No |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Yes | Yes | Yes | Yes | No |
| Twitter Card meta tags | Not present | Not present | n/a | n/a | n/a |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Not present | Not present | n/a | n/a | n/a |

All detected markers are present in the served HTML on the pages we audited. Server-side and browser-based agents see the same signals on the sampled pages; a wider audit confirms whether the same pattern holds across the rest of the estate.

---

## Schema Maturity Level

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work. Maturity is a structural classification: it depends on what the markup carries (typed blocks, required properties, cross-references, external identifiers), not on the SDQ score the markup happens to earn. A page can sit at Level 1 with a high SDQ score and at Level 3 with a moderate one. Score and level are reported separately.

|  | Level | Name | What it looks like |  |
|---|-------|------|---------------------|---|
|  | 0 | Clean slate | No Schema.org markup present. The full maturity curve is open: every property added at this stage is net new capability. |  |
| **→** | 1 | Decoration | Typed blocks present, with sparse properties and no nesting or cross-references. The structural primitives are in place; the next opportunity is to fill the required and recommended fields. | **←** |
|  | 2 | Good schema | Full required and recommended properties, nested types where appropriate, valid vocabulary. The next opportunity is to wire entities together with @id cross-references. |  |
|  | 3 | Real graph | Level 2 plus @id cross-references between entities and linked-data signals (sameAs, mainEntityOfPage, isPartOf). The next opportunity is to anchor entities to external identifiers. |  |
|  | 4 | Verified linked data | Level 3 plus external identifiers (Wikidata QIDs, ISNIs, ORCIDs) and provenance metadata. Entities are anchored in the linked-data web. |  |

**Current level:** 1: Decoration\
**To reach the next level:** Fill in the required and recommended Schema.org properties for each typed block (see structured_data_findings.csv for the specific gaps). Connect related entities: either inline (author Person, publisher Organisation, image ImageObject) or via @id references to canonical entities defined elsewhere on the site. Ensure every @type value is a valid Schema.org type.

The Structured Data Quality (SDQ) score and the Schema Maturity Level measure two different things. SDQ counts the properties present and validates them against Schema.org expectations; the level captures whether those properties are connected (cross-entity wiring, linked-data signals, external authority identifiers). Both numbers above are reported as-is from the audit data.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. Failure at any stage breaks the chain for all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Partial | 78 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 67 | Schema.org: WebPage, BreadcrumbList, ListItem (100% required properties) |
| 3 | Search & Compare | Site type does not require | -- | No comparison content detected |
| 4 | Price Understanding | Site type does not require | -- | No pricing content detected |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

Partially Compatible; the two assessed stages are Partial, while Search & Compare, Price Understanding, and Purchase Confidence are not applicable to this site type.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Result | What it means and data |
| ---------------- | ------ | ---------------------- |
| Truncation Risk | Fail · 7/7 | 7 page(s) flag for truncation risk because their main content (the first <main>, <article>, or top heading) sits past the 50 KB safe-fetch offset, even though no page exceeds the 250 KB hard ceiling. Agents with limited fetch windows may stop reading before they reach prose. **Data:** Largest page: 104 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See enhancely-ai-pipeline-truncation-risk-pages.csv (7 pages). |
| SPA Shell | Pass · 7/7 | Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does. **Data:** Max gap score: 12. 0 means served and rendered match. |
| Soft 404 | Pass · 7/7 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. **Data:** 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass · 7/7 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. **Data:** Highest boilerplate-to-content ratio: 0.92. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass · 7/7 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. **Data:** 0 page(s) with tab widgets. |
| Delayed Content Start | Pass · N/M | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. **Data:** Content starts at up to 0% of the document on some pages. |
| Broken Code Fences | Pass · 7/7 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. **Data:** 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Pass · 7/7 | The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents. **Data:** 0 page(s) advertise format negotiation. |
| Cross-Host Redirect | Pass · 7/7 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. **Data:** 0 page(s) cross origin during redirect. |
| Generic Headings | Pass · 7/7 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". **Data:** Worst case: 0% generic headings. |
| Body Content Ratio | Pass · N/M | Actual prose content averages 57% of served bytes - well above the 30% threshold. Pages are content-heavy, not overhead-heavy. **Data:** Average: 57%. Threshold: 30%. |
| Inline Tag Bloat | Fail · 7/7 | 7 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. **Data:** 28 element(s) > 500 bytes. Largest single-page inline CSS block: 3353 B. Largest single-page inline JS block: 14117 B. See enhancely-ai-pipeline-inline-tag-bloat-pages.csv (7 pages). |
| Head Weight | Pass · N/M | Head bytes are a small fraction of each page. Agents reach body content quickly. **Data:** Max ratio: 0.00. Average: 0.00. Threshold: 0.50. |

**Pipeline Survivability score:** 79/100

Across the audited set, every page we reviewed carries a Truncation Risk flag, meaning machines that impose a content-length ceiling may cut off the page before reaching its most valuable material. Inline Tag Bloat appears alongside this on a subset of pages, adding structural noise that can further disrupt how machines parse and process the content. Addressing Truncation Risk first would have the largest effect, since resolving it across the audited set directly improves the completeness of what machines can read in a single pass.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Rendered HTML | 49/100 (high) | 44 bare divs · 43% ratio · depth 5 | `div.k-block.k-block__text` (59), `div.mobile-sub` (42), `div.max-w-[1440px].mx-auto` (41), `div.faq-a.text-[0.92rem]` (22), `div.flyout-panel` (21) |

The rendered surface of the worst-performing page we examined, https://www.enhancely.ai/blog/schema-markup-explained-the-invisible-code-that-makes-your-website-visible-to-ai, carries a bare-div ratio of 43% across 103 elements, meaning machines lose structural context on that page and fall back on positional inference to determine meaning. The pattern here is surface-wide rather than deeply nested: a deepest bare chain of 5 sits alongside a high bare-div count, and the top offending selectors suggest utility-class and component-framework conventions where divs receive visual styling classes rather than semantic roles. The most direct first move is to wrap the obvious landmark regions (header, nav, main, footer, aside) explicitly, and to ensure the remaining high-frequency elements carry meaningful roles or class names that signal purpose rather than layout position, which would bring the bare-div ratio down without requiring a structural rebuild.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | No | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | Yes | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

We find 2 of the five standard security headers absent from every audited response: HSTS (Strict-Transport-Security), Content-Security-Policy (CSP). Adding these at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 7 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/blog`**: HTTPS Yes · HSTS No · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/blog/seo-alone-isn-t-enough-what-changes-with-ai-search-and-what-stays-the-same`**: HTTPS Yes · HSTS No · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/blog/schema-markup-explained-the-invisible-code-that-makes-your-website-visible-to-ai`**: HTTPS Yes · HSTS No · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/blog/why-your-product-pages-are-invisible-to-ai-shopping-assistants-and-how-to-fix-it`**: HTTPS Yes · HSTS No · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/blog/e-e-a-t-for-the-ai-era-how-chatgpt-co-recognise-your-brand-as-a-trustworthy-source`**: HTTPS Yes · HSTS No · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/blog/the-content-code-credibility-formula-what-really-matters-for-ai-search-visibility`**: HTTPS Yes · HSTS No · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/blog/why-composable-architecture-needs-a-dedicated-structured-data-service`**: HTTPS Yes · HSTS No · CSP No · X-Frame Yes · X-Content-Type Yes

HTTPS: 7/7 | HSTS: 0/7 | CSP: 0/7 | X-Frame-Options: 7/7 | X-Content-Type-Options: 7/7

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 100% | - |
| MX governance tags | 0% | 7 |
| Open Graph tags | 100% | - |
| Twitter Card tags | 0% | 7 |
| Skip link | 0% | 7 |
| llms.txt link tag | 0% | 7 |
| Canonical URL | 100% | - |
| Exactly 1 H1 | 100% | - |
| Code examples present | 14% | 6 |
| Self-contained sections | 100% | - |
| Error/troubleshooting docs | 0% | 7 |
| Lighthouse heading compliance | 29% | 5 |

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

We found 7 identical inline fragment(s) repeated across multiple pages, totalling 103 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes per fragment | Appears on N pages | Preview |
|------|-------------------:|-------------------:|---------|
| js | 11973 | 7 | if(!("gdprAppliesGlobally" in window)){window.gdprAppliesGlo |
| css | 3347 | 7 | /* Mermaid theme overrides - light variant */ .mermaid-light |
| js | 787 | 7 | !function(t,e){var o,n,p,r;e.__SV\|\|(window.posthog && window |
| js | 736 | 7 | function initPostHog() {       if (window.__ph_inited) retur |
| js | 358 | 7 | (function(w,d,s,l,i){w[l]=w[l]\|\|[];w[l].push({'gtm.start':   |
| js | 247 | 7 | (function(){var t=localStorage.getItem('theme');if(t==='dark |
| css | 125 | 6 | div.cmpwrapper:empty, div.cmpwrapper, div#cmpwrapper.cmpwrap |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `enhancely-ai-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical. **Exception:** the `div.cmpwrapper` CSS fragment (125 bytes, 6 pages) is injected by a third-party consent management SDK rather than authored in the site template; the remediation path for that fragment is an SDK configuration update or a DOM-observer patch coordinated with the consent vendor, not externalisation to a site CSS file.

---

## PDF Documents: Accessibility and Machine Readability

Accessibility legislation across major markets, with the EU's EAA (Directive (EU) 2019/882, in force 28 June 2025) as the most precisely codified example, has converged on ISO 14289-1 (PDF/UA) as the shared structural baseline, making tagged PDF structure a legal expectation in the EU, the US, the UK, Australia, and Canada alike. The machine-readability concern is equally pressing and independent: an untagged or image-based PDF is opaque to machines, search crawlers and automated pipelines cannot extract text, entities, or structure from it, whereas a properly tagged PDF with a complete structure tree is machine-readable in the same way that semantic HTML is.

We linked no PDFs from the 7-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 53 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: close the Discovery Readiness gap (llms.txt, llms-full.txt, agent-card.json, ai.txt, and humans.txt are all absent) and add the four missing MX governance fields (canonicalUri, contentType, audience, status) to page frontmatter
3. **Consider optional enhancements**: add sameAs links on Person and Organisation entities and Content-Signal directives in robots.txt to strengthen machine attribution ahead of wider agent adoption

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3 (Compliance Risk) | Priority 1, 2, 3 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | Catalogue Visibility, Discovery Readiness, Semantic Structure, MX Stack Completeness, Performance, Security headers, and optional enhancements | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://www.enhancely.ai scores strongly on Structured Data at 87/100, reflecting a rich schema foundation that gives machines a solid basis for reading and parsing content. SEO performs well at 84/100, yet Discovery Readiness at 40/100 represents the clearest opportunity to close, as the signals machines rely on to locate, index, and surface the site remain underdeveloped. We invite you to read on for a prioritised set of recommendations that would move these dimensions forward and extend the value of the structured data already in place.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 100/100 | Excellent |
| Accessibility | 89/100 | Excellent |
| SEO (all pages) | 84/100 | Excellent |
| SEO (content pages) | 84/100 | Excellent |
| MX Stack Completeness | 68/100 | Good |
| Structured Data Quality | 87/100 | Excellent |
| Commerce Visibility | 10/100 | Needs Improvement |
| Discovery Readiness | 40/100 | Could Be Better |
| Heading Quality | 89/100 | Excellent |
| Semantic Ratio | 13% | Needs Improvement |
| Agent Readability | 64/100 | Good |
| Pipeline Survivability | 79/100 | Excellent |
| Cross-Page Consistency | 53% | Good |

---

## Appendix A: Pages Audited

- **`/blog`**: SEO 85 · A11y 85 · Back 70 · Served 100 · Rendered 100
- **`/blog/seo-alone-isn-t-enough-what-changes-with-ai-search-and-what-stays-the-same`**: SEO 85 · A11y 90 · Back 70 · Served 100 · Rendered 100
- **`/blog/schema-markup-explained-the-invisible-code-that-makes-your-website-visible-to-ai`**: SEO 84 · A11y 85 · Back 70 · Served 100 · Rendered 100
- **`/blog/why-your-product-pages-are-invisible-to-ai-shopping-assistants-and-how-to-fix-it`**: SEO 75 · A11y 90 · Back 70 · Served 100 · Rendered 100
- **`/blog/e-e-a-t-for-the-ai-era-how-chatgpt-co-recognise-your-brand-as-a-trustworthy-source`**: SEO 83 · A11y 90 · Back 70 · Served 100 · Rendered 100
- **`/blog/the-content-code-credibility-formula-what-really-matters-for-ai-search-visibility`**: SEO 84 · A11y 90 · Back 70 · Served 100 · Rendered 100
- **`/blog/why-composable-architecture-needs-a-dedicated-structured-data-service`**: SEO 91 · A11y 90 · Back 70 · Served 100 · Rendered 100

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: 358 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 358   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set, we catalogued 131 images in total. Of these, 48 are served in WebP format and 83 in PNG; we found no JPEG, SVG, or other format variants in the pages we reviewed. Alt-text coverage stands at 98 images, or 74.8% of the total, leaving 33 images without descriptive text. For a developer audience, it is worth noting that those 33 missing instances span both decorative and potentially meaningful images, so a case-by-case review will be needed to determine whether each warrants a descriptive attribute or an explicit empty one.

On loading strategy, 41 images carry a native loading="lazy" attribute, and none are set to loading="eager". The remaining 90 images have no loading attribute at all. This third state is worth separating from eager loading: when no attribute is present, the browser applies its own heuristics, typically rendering above-the-fold images immediately and making its own judgement about the rest. That means those 90 images are neither deliberately deferred nor deliberately prioritised; the loading behaviour is, in effect, unmanaged. Explicit attribution across the full image set would give the team direct control over which assets block the initial render and which are safely deferred.

> **Double-lazy loading pattern detected on 41 image(s).** These images carry BOTH the native HTML attribute `loading="lazy"` AND a JavaScript lazyload pattern (a placeholder `data:image/gif` in `src`, the real URL in `data-src`, and a `lazyload` class). The image cannot render until:
> 1. The lazyload JavaScript library loads and parses.
> 2. The script scans the DOM and swaps `data-src` → `src` on images entering the viewport.
> 3. The browser then honours `loading="lazy"` on the newly-swapped `src`, which may defer the fetch further.
> **Why this matters for above-the-fold imagery** (hero banners, logos, navigation thumbnails): the hero never renders during the initial HTML parse because the real URL is not in the document yet. Core Web Vitals (LCP) and human perception of speed both pay the cost. AI agents that fetch static HTML without running JavaScript see only the placeholder `data:image/gif` and miss the image entirely.
> **Recommended remediation:** for above-the-fold images, put the real URL in `src`, use `loading="eager"` and `fetchpriority="high"`, and remove the lazyload class. For below-the-fold images, keep one strategy - either native `loading="lazy"` (simpler, widely supported) or the JavaScript lazyload library, not both.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Unknown Platform**. No platform-specific fingerprint was detected, so the audit used conservative default rate limits, paced slowly enough to stay below typical shared-host thresholds, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 7 pages analysed | Platform: Unknown Platform | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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

\clearpage

## Practice What We Preach: This Audit's Own Evidence Chain

We hold this audit deliverable to the same MX standards we apply to your site. Every consequential step that produced this report (LLM-driven prose passes, deterministic gate verdicts, multi-agent attribution probes, repair iterations) is recorded in two adjacent JSON sidecars next to this PDF.

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `enhancely-ai-report.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `enhancely-ai-report.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload enhancely-ai-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the organisation distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it first to ourselves.

---

**Date:** 26 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*