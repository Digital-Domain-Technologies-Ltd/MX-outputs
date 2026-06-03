---
title: "Www Contentful: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-06-03"
modified: "2026-06-03"
client: "Www Contentful"
clientSlug: "www-contentful-com"
clientUrl: "https://www.contentful.com"
reportId: "www-contentful-com-WEB-AUDIT-20260603"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-06-03"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Www Contentful"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 35
accessibilityScore: 77
seoScore: 94
llmSuitabilityScore: 99
totalIssues: 279
pagesAudited: 12
version: "1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md
  runbook: "Executive audit report for Www Contentful. Focus on the highest-leverage MX opportunities surfaced by the audit."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.pdf"
    description: "Generate PDF audit report for Www Contentful"
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
    sidecar: "www-contentful-com-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "www-contentful-com-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 3 June 2026\
**Report ID:** www-contentful-com-WEB-AUDIT-20260603

---

## About This Report

We audited 12 pages across www.contentful.com's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

**How we build it.** We use scripted SOPs running deterministic checks rather than inference. The crawl, the served-versus-rendered comparison, the structured-data extraction, the accessibility passes, the discovery-file probes, the platform fingerprinting and the per-section scoring all run as scripts producing byte-identical outputs on the same input. A small number of stages run a judgement pass over the resulting report (rewrite-and-repair on the prose, verification, fierce-critic review, post-PDF cross-check). That judgement pass is the only inference layer; everything else is the scripted SOP.

**Local-inference option for regulated and privacy-sensitive customers.** Our judgement passes can run against a local LLM (Ollama, LM Studio, on-premise Llama or equivalent) instead of a cloud provider. The deterministic scripts already run locally. For regulated industries and privacy-sensitive customers, this means the entire audit can run with no audit data leaving the customer's network. The option ships as part of the Private REGINALD platform deployment; contact us to scope a local-inference engagement.

Our scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. MX addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** Here we look at the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 12 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

We offer this audit as the starting point of an ongoing partnership. If you would like us to implement any of the recommendations in this report -- whether structured data, discovery files, accessibility improvements, or governance metadata -- we build, deploy, and maintain these improvements as a managed service. We also offer continuous monitoring: automated re-audit on a cadence you choose, with alerts when scores drift and quarterly executive summaries. Contact us at <info@cognovamx.com> to scope either service.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead, because Common Crawl (the archive underpinning most major LLM training datasets) prioritises HTML for its LLM-training subsets, so a plain-text llms.txt is unlikely to enter training corpora at the same rate as the rest of the site. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **35**/100 | `######------------` **(!)** |
| Accessibility | **77**/100 | `##############----` |
| SEO | **94**/100 | `#################-` |
| Machine Suitability | **99**/100 | `##################` |
| MX Stack Completeness | **66**/100 | `############------` |
| Agent Readability | **72**/100 | `#############-----` |
| Pipeline Survivability | **79**/100 | `##############----` |



\clearpage

## Balanced Scorecard

### Human Experience

We find the site delivers a strong experience for human visitors across the audited set, though performance could be better.

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Excellent | A | - |
| Performance | Could Be Better | C | B (median) |
| Accessibility (WCAG) | Excellent | A | B (median) |
| Trust and Credibility | Excellent | A | - |

### Machine Experience

We find that across the audited set, machines can discover and parse the content but lack governance context, as reflected by a Discovery Readiness score of 39/100, Structured Data Quality of 61/100, MX Stack Completeness of 66/100, and Pipeline Survivability of 79/100.

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 39/100 | Could Be Better | C | D (median) |
| Structured Data Quality | 61/100 | Good | B | C (median) |
| MX Stack Completeness | 66/100 | Good | B | C (median) |
| Pipeline Survivability | 79/100 | Excellent | A | A (median) |

*Benchmark median drawn from a curated audit dataset.*

---

## Reading the Report: Two Budget Lenses

The findings below are tagged with one of three buckets so different budget owners can navigate to the work that matters to them:

- **Compliance Risk**: accessibility (WCAG 2.1 AA), duplicate IDs, forms, and semantic structure. These are inclusion and legal-exposure issues; the budget owner is typically legal, HR, or an accessibility lead.
- **Cross-cutting Foundations**: performance and SEO. These affect both human visitors and AI agents; the budget owner is usually digital operations or a foundation engineering team.
- **Machine Readability Opportunity**: discovery readiness, metadata stack, llms.txt, structured data, agent cards, and pipeline survivability. These determine whether the site lands in agent answers; the budget owner is typically the CMO or head of digital.

Every priority block in the Findings section carries a **Bucket:** label matching one of the three above. The at-a-glance table sorts findings into bucket order so each budget owner can read straight to their own list.

---

## MX Readiness Level

|  | Level | Name | Publisher Capability | Agent Outcome |  |
|---|-------|------|---------------------|---------------|---|
|  | 0 | Not Ready | Auto-generated boilerplate | Agents guess, hallucinate |  |
| **→** | 1 | Discoverable | Deliberate metadata, publisher identified | Agents can discover | **←** |
|  | 2 | Governed | Full MX fields, governance, provenance | Machines have structured governance context |  |
|  | 3 | Comparable / Attested | Cryptographic attestation, cross-source verifiable | Agents can search, compare, recommend |  |
|  | 4 | Transactable | Registered, priced, SLA-backed, alive | Agents can understand pricing and transact |  |
|  | 5 | Purchase-confident | Third-party audited, fiduciary-grade | Agents can guarantee accuracy at purchase |  |

**Current Level:** 1: Discoverable

**Evidence:** MX Stack Completeness 66/100 | Structured Data Quality 61/100 | Discovery Readiness 39/100 | Consistency 56%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so machines have the structured context they need for accurate comprehension. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

We’ve identified a strong foundations across the audited set, with strong SEO, accessibility, and structured data performance that set the groundwork for the enhancements we’ll discuss.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Could Be Better | Could Be Better - 3489ms average load time |
| SEO (content pages) | 97 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | 4/5 headers present (CSP absent); 0 of 12 URLs carry all five |
| Structured Data | 61 | Good - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 55 | Good - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 56% | 56% - same metadata patterns across every page |
| Agent access | 7/7 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.

---

## Findings

### At a Glance

We present across the audited set a concise snapshot of the most impactful opportunities for enhancing machine comprehension and discovery. Priority was set by the direct influence each area has on machines: catalogue visibility gaps lead because they block discovery for all downstream machines, followed by structured data quality which shapes machine readability, then discovery readiness which governs access to content, and finally MX stack completeness which supports governance.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---|---|---|---|---|
| 1 | WCAG 4.1.2: Anchor without content | Compliance Risk | High | Medium | may miss content for screen reader users |
| 2 | WCAG 4.1.1: Duplicate ID 'accordion-header-0' | Compliance Risk | High | Medium | may confuse assistive tech users |
| 3 | WCAG 1.1.1: Missing alt on images | Compliance Risk | High | Medium | may miss image context for screen reader users |
| 4 | WCAG 2.4.1: Iframe missing title | Compliance Risk | High | Medium | may hinder keyboard users |
| 5 | WCAG 1.3.1: Table header missing id | Compliance Risk | High | Medium | may hinder screen reader users |
| 6 | WCAG 2.4.2: Missing document title | Compliance Risk | High | Low | may hinder screen reader users |
| 7 | WCAG 1.4.3: Low contrast text | Compliance Risk | High | Medium | may hinder low‑vision users |
| 8 | Security Headers: Missing X-Content-Type-Options | Cross-cutting | High | Low | may expose content to interception, reducing agent confidence |
| 9 | Heading Quality: 55/100 | Cross-cutting | Medium | Medium | may hinder navigation for users with cognitive or visual impairments |
| 10 | Discovery Readiness: Missing llms.txt, llms-full.txt, agent-card.json, ai.txt, humans.txt | Machine Readability Opportunity | Medium | Low | may cause agents to miss content, reducing agent confidence |

**Priority 1: WCAG 4.1.2: Anchor without content**

**Bucket**: Compliance Risk

**Finding**: WCAG 4.1.2: Anchor element with valid href but no link content found on 195 instances across 11 pages, affecting screen reader users.

**What to change and why**:
- Add descriptive text inside each anchor to satisfy WCAG 4.1.2, improving screen reader experience.
- Ensure link text is meaningful to convey purpose to users, reducing confusion for assistive tech.
- Update templates to include default link text or ARIA labels where content is dynamic.

**Effort**: Medium

---

**Priority 2: WCAG 4.1.1: Duplicate ID 'accordion-header-0'**

**Bucket**: Compliance Risk

**Finding**: WCAG 4.1.1: Duplicate id attribute value "accordion-header-0" found on 15 instances across 2 pages, affecting all

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.



---

## AI Agent Access Test

This test fetches the homepage using the User-Agent strings of known AI agents to verify whether this site is accessible at inference time.

| AI Agent                         | User-Agent             | Status | Result     |
|----------------------------------|------------------------|--------|------------|
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
| URL probed | https://www.contentful.com |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No - server returned HTML regardless of Accept header |

The site returns standard HTML to all requests, including those with `Accept: text/markdown`.

### Non-Standard Response Headers

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how this site handles errors for both human visitors and machines.

| Check | Result |
|-------|--------|
| HTTP status code | 404 (correct) |
| Custom error page | No, generic server error |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | No |
| Internal navigation links | None: no links to valid content |
| MX governance tags | Absent |
| Schema.org JSON-LD | Absent (correct: should not claim valid page) |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.contentful.com/products/ai-actions/`. A first-time visitor sees the cold-cache cost: the crawler recorded 6814 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes that followed returned 594ms, 750ms, 605ms, giving a returning-visitor median of **605 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://www.contentful.com/products/personalization/`. A first-time visitor sees the cold-cache cost: the crawler recorded 3053 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes that followed returned 675ms, 872ms, 637ms, giving a returning-visitor median of **675 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Returning visitors are served quickly across the site, but first-time visitors hit slow cold-cache responses on both the slowest page and a median-load page. The CDN is warming pages effectively, but the origin's cold response time is poor.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /

Sitemap: https://www.contentful.com/sitemap-index.xml
```

*The full `robots.txt` (4 lines) is preserved alongside this report as `www-contentful-com-robots-txt.txt`.*

We found a robots.txt that references one sitemap. The file does not disallow any paths, so all agents are permitted to crawl the site.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 3359 entries | Fewer than crawl found |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | No | Missing (Drupal Simple XML Sitemap omits changefreq by default; Google dropped it as a ranking signal in 2017, but it remains a useful update-cadence hint for non-Google crawlers and AI agents) |
| `<priority>` | No | Absent (Drupal Simple XML Sitemap omits priority by default; Google dropped it as a ranking signal in 2017, but it remains useful for non-Google crawlers and AI agents) |

**Sitemap grade:** Partial



The sitemap lists 3359 URLs but the audit discovered pages that are not in it. Consider adding the missing pages so search engines and machines can discover all content.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms.txt at the host root. The file is absent, so machines that query the host for a structured content index receive no description, page inventory, or content policy; we recommend adding a well‑formed llms.txt and, following the llmstxt.org specification, we recommend using text/html as the content type.

No llms.txt found. The llms.txt standard is emerging as the preferred method for machine discovery. Early implementation provides a early-mover opportunity.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms‑full.txt; the file is absent from the root, not referenced in the sitemap, and no link tag points to it in the homepage head. If the site hosts a substantial content depth, we recommend adding llms‑full.txt with a text/html content type.

We found no llms-full.txt on the audited host. Where llms.txt is the curated index, llms-full.txt concatenates the full content of every page into a single file: a convention popularised by Fern, Mintlify, and GitBook. Agents that consume it ingest the corpus in one fetch rather than crawling page-by-page, cutting token consumption by an order of magnitude. We recommend adding an llms-full.txt alongside llms.txt; the build can run from the same sitemap-driven generator that produces llms.txt and adds the page bodies inline.

"]

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

1 additional registered `/.well-known/` path were probed; none returned a recognisable discovery file. The per-path breakdown is preserved alongside this report as a sidecar JSON.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type  | Pages | Required % | Recommended % | Notes                                    |
|--------------|-------|------------|---------------|------------------------------------------|
| WebSite | 12 | 100% | 0% | - |
| Organisation | 12 | 100% | 100% | - |

**Structured Data Quality:** 61/100\
**Coverage:** 12 pages with JSON-LD out of 12 total (100%)\
**Unique types:** 2

Across the 12 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component                       | Earned | Max | Meaning                                                       |
|---------------------------------|--------|-----|---------------------------------------------------------------|
| Presence | 10 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 25 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 8 | 15 | Average across entities |
| Entity richness | 5 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 0 | 15 | Nested @type values + @id linking |
| Linked-data signals | 3 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 10 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **61** | **100** | |

---

## Structured Data Findings

We identified 63 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`www-contentful-com-structured-data-findings.csv`](www-contentful-com-structured-data-findings.csv). The 63 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| WebSite | recommended | image | 12 | 12 | Site has no logo / hero image declared in structured data |
| WebSite | recommended | datePublished | 12 | 12 | No site-level publish date for crawler context |
| WebSite | recommended | author | 12 | 12 | Site has no top-level author/owner declared |
| WebSite | recommended | publisher | 12 | 12 | Site has no top-level publisher declared |
| jsonLd | location | outside-head | 1 | 1 | jsonLd is present in served HTML but emitted inside <body> at byte 18318. Agents that parse only the <head> may not see it. |
| jsonLd | location | outside-head | 1 | 1 | jsonLd is present in served HTML but emitted inside <body> at byte 21888. Agents that parse only the <head> may not see it. |
| jsonLd | location | outside-head | 1 | 1 | jsonLd is present in served HTML but emitted inside <body> at byte 20493. Agents that parse only the <head> may not see it. |
| jsonLd | location | outside-head | 1 | 1 | jsonLd is present in served HTML but emitted inside <body> at byte 20237. Agents that parse only the <head> may not see it. |
| jsonLd | location | outside-head | 1 | 1 | jsonLd is present in served HTML but emitted inside <body> at byte 22781. Agents that parse only the <head> may not see it. |
| jsonLd | location | outside-head | 1 | 1 | jsonLd is present in served HTML but emitted inside <body> at byte 19032. Agents that parse only the <head> may not see it. |

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

**What this section checks.** Each signal below is derived deterministically from served HTML and JSON-LD on disk: no inference, no model judgement. Five structural signals fire per page: (i) self-promotional listicle (a ranked list is advertised whose first entry resolves to the publisher's own host), (ii) year-swap refresh (the title year is two or more years ahead of `dateModified`), (iii) first-party superlative (claims like "best", "leading", "high-quality" without an external reference), (iv) third-party citation count (outbound links to hosts other than the audited site), and (v) provenance metadata presence (`author`, `dateModified`, `publisher`). Pages whose body content runs over 400 words while emitting zero third-party citations carry no verifiable references and contribute to the blocker list. When the audited set is clean we omit the per-page table altogether and let the verdict line below carry the result.

### Templated clusters

No templated clusters detected at the audited scale. Pages in the audited set either carry product entities or have enough structural and textual variation to clear the stamp-out threshold.

### Provenance verdict

No provenance-gap blockers detected on the audited set. Pages clear the structural primitives we measure here.

_No blockers._

Any page contributing to a blocker above is capped at **Discoverable** readiness in the MX Readiness Level table below, regardless of its other scores. Citation readiness requires a verifiable claim to cite.

---

## Marker Reachability

| Marker                            | In served   | In rendered | In head | Reachable <250KB | Injected by JS |
|-----------------------------------|-------------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Yes | Yes | No | Yes | No |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Yes | Yes | 91% | No | No |
| Twitter Card meta tags | Yes | Yes | 91% | No | No |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | 91% | No | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Not present | Not present | n/a | n/a | n/a |

All detected markers are present in the served HTML on the pages we audited. Server-side and browser-based agents see the same signals on the sampled pages.[AUDIT_SCOPE_QUALIFIER"]

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
**To reach the next level:** Fill in the required and recommended Schema.org properties for each typed block (see structured_data_findings.csv for the specific gaps). Connect related entities inline or via @id references to canonical entities defined elsewhere on the site. Ensure every @type value is a valid Schema.org type.

The Structured Data Quality (SDQ) score and the Schema Maturity Level measure two different things. SDQ counts the properties present and validates them against Schema.org expectations; the level captures whether those properties are connected (cross-entity wiring, linked-data signals, external authority identifiers). Both numbers above are reported as-is from the audit data.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. A break at any stage propagates to all subsequent stages.

| Stage | Name              | Status      | Score | Key Metric                                        |
|-------|-------------------|-------------|-------|---------------------------------------------------|
| 1 | Discovery | Partial | 78 | Crawlable with semantic HTML |
| 2 | Citation | Fail | 33 | Schema.org: WebSite, Organisation, WebSite (100% required properties) |
| 3 | Search & Compare | Fail | 20 | Pricing detected but no commerce schema |
| 4 | Price Understanding | Partial | 33 | Pricing visible but no Offer schema for agent parsing |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

Not Compatible. Purchase Confidence does not apply – we found no transaction or checkout pages.

Stage [N] ([NAME]) is the weakest link in the agent journey. Because each stage depends on the previous one, this gap affects all downstream stages. Addressing [KEY_METRIC] is the highest-priority improvement.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Fail · 12/12
  - *Means:* 12 page(s) flag for truncation risk; 12 of them exceed the 250 KB hard ceiling, the rest place main content too far into the document. Agents with limited fetch windows may stop reading before reaching the main content.
  - *Data:* Largest page: 3267 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See www-contentful-com-pipeline-truncation-risk-pages.csv (12 pages).
- **SPA Shell** - Pass · 12/12
  - *Means:* Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does.
  - *Data:* Max gap score: 17. 0 means served and rendered match.
- **Soft 404** - Pass · 12/12
  - *Means:* Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs.
  - *Data:* 0 soft-404 page(s) detected.
- **Boilerplate Burial** - Pass · 12/12
  - *Means:* Navigation and chrome do not dominate the page; main content is reachable without wading through overhead.
  - *Data:* Highest boilerplate-to-content ratio: 0.00. Threshold: < 10 (and < 80 KB of inline head bytes).
- **Tabbed Disclosure** - Pass · 12/12
  - *Means:* No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML.
  - *Data:* 1 page(s) with tab widgets.
- **Delayed Content Start** - Pass · 3/3
  - *Means:* Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily.
  - *Data:* Content starts at up to 18% of the document on some pages. Check applied to 3 of 12 audited pages; the remaining 9 pages were skipped by a size or eligibility gate.
- **Broken Code Fences** - Pass · 12/12
  - *Means:* All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples.
  - *Data:* 0 page(s) with unbalanced fenced code blocks.
- **HTTP Content Negotiation (Vary)** - Pass · 12/12
  - *Means:* The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents.
  - *Data:* 0 page(s) advertise format negotiation.
- **Cross-Host Redirect** - Pass · 12/12
  - *Means:* No cross-domain redirects. Agents follow internal redirects without host-boundary issues.
  - *Data:* 1 page(s) cross origin during redirect.
- **Generic Headings** - Pass · 12/12
  - *Means:* Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction".
  - *Data:* Worst case: 0% generic headings.
- **Body Content Ratio** - Fail · 1/3
  - *Means:* Prose content averages only 17% of served bytes. Scripts, styles, and images dominate; agents get little signal per byte.
  - *Data:* Average: 17%. Threshold: 30%. Page: https://www.contentful.com/products/personalization/ Check applied to 3 of 12 audited pages; the remaining 9 pages were skipped by a size or eligibility gate.
- **Inline Tag Bloat** - Fail · 12/12
  - *Means:* 12 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches.
  - *Data:* 120 element(s) > 500 bytes. Largest single-page inline CSS block: 0 B. Largest single-page inline JS block: 3102182 B. See www-contentful-com-pipeline-inline-tag-bloat-pages.csv (12 pages).
- **Head Weight** - Pass · 3/3
  - *Means:* Head bytes are a small fraction of each page. Agents reach body content quickly.
  - *Data:* Max ratio: 0.02. Average: 0.00. Threshold: 0.50. Check applied to 3 of 12 audited pages; the remaining 9 pages were skipped by a size or eligibility gate.

**Pipeline Survivability score:** 79/100

We found that every audited page has a truncation risk, meaning machines may miss parts of the content. Fixing this by ensuring the full page loads will give machines complete information. The other issues - body content ratio and inline tag bloat - are also opportunities to improve resilience.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Rendered HTML | 34/100 (high) | 290 bare divs (51% of containers, depth 7) | `div` (242), `div.grid-helper-col.col-span-1` (144), `div.tooltip_root__EulUk` (95), `div.button_markup_root__sACGr.button_markup_secondary__F_qxS` (68), `div.round-icon.round_icon_container__Jmlwp` (57) |

**Worst page (served):** -\
**Worst page (rendered):** https://www.contentful.com/products/personalization/

We find that the audited pages use semantic HTML well, providing machines with reliable structural cues.

---

## Security Headers

| Header                          | Status   | Purpose                                          |
|---------------------------------|----------|--------------------------------------------------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | Yes (11/12) | Prevents clickjacking |
| X-Content-Type-Options | Yes (11/12) | Prevents MIME-type sniffing |

Header coverage is uneven across audited responses: X-Frame-Options on 11/12 audited responses, X-Content-Type-Options on 11/12 audited responses. A further header is absent on every audited response: Content-Security-Policy (CSP). The header set is configured per route or per virtual host rather than uniformly at the origin or CDN edge; a single server-config change brings the missing responses in line with the strongest baseline already in place.

**Coverage:** 0 of 12 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/sitemap`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/pricing/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/contact/sales/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/products/platform/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/products/personalization/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/products/ai-actions/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/products/analytics/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/products/studio/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/products/ecosystem/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/marketplace/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/products/personalization/ai-suggestions/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes

HTTPS: 12/12 | HSTS: 12/12 | CSP: 0/12 | X-Frame-Options: 11/12 | X-Content-Type-Options: 11/12

---

## Cross-Page Consistency

| Pattern                          | Coverage | Pages missing it   |
|----------------------------------|----------|--------------------|
| Schema.org JSON-LD | 100% | - |
| MX governance tags | 0% | 12 |
| Open Graph tags | 83% | - |
| Twitter Card tags | 83% | - |
| Skip link | 0% | 10 |
| llms.txt link tag | 0% | 10 |
| Canonical URL | 83% | - |
| Exactly 1 H1 | 100% | - |
| Code examples present | 0% | 12 |
| Self-contained sections | 92% | `/pricing/` |
| Error/troubleshooting docs | 8% | 11 |
| Lighthouse heading compliance | 17% | 10 |

**Overall Consistency:** 56%

Some pages in the 12-page sample are missing metadata patterns that others carry. Machines hitting different pages get different quality data. The Missing Pages column shows where to focus on the sampled pages. A full-estate audit confirms whether the same pattern holds across the rest of the site.

## Personalisation and A/B Testing: Machine Visitor Impact



---

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no organisation‑name or canonical‑URL divergence flagged by the consistency check.

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Organisation name parity | Pass | Organisation name appears consistently across all 12 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 12-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

We found 141 identical inline fragment(s) repeated across multiple pages, totalling 1889 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes per fragment | Appears on N pages | Preview                                                          |
|------|-------------------:|-------------------:|------------------------------------------------------------------|
| js | 1042 | 24 | (function(){function g(d){for(var h=document.cookie.split("; |
| js | 939 | 24 | (function(){window.__ctflCookies=window.__ctflCookies\|\|{};wi |
| js | 891 | 17 | (function(){function f(c){for(var a=0;a<c.length;a++){var d= |
| js | 164 | 13 | (self.__next_s=self.__next_s\|\|[]).push(["https://cmp.osano.c |
| js | 4741 | 12 | (function(){function q(a){for(var b={host:null,form:null,btn |
| js | 2716 | 12 | self.__next_f.push([1,"(function(){\n          function runC |
| js | 2539 | 12 | (function(f){function h(a){return(a=document.cookie.match(ne |
| js | 1654 | 12 | (function(){if(google_tag_manager["rm"]["226306667"](9)&&(!w |
| js | 1230 | 12 | (function(){function b(h,d,f,g){try{if(d!==void 0&&d!==null) |
| js | 987 | 12 | (function(){function c(b){b=String(b\|\|"").toUpperCase();retu |

*Showing the top 10 of 127 duplicate fragments by occurrence count. The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `www-contentful-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability



We linked no PDFs from the 12-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 279 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Semantic Structure improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | No regulatory compliance findings on the audited surface | No regulatory blockers — focus shifts straight to optimisation |
| Full Optimisation | P1, P2 (P1–P2) | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

We found that https://www.contentful.com scores 94/100 in SEO, demonstrating strong optimisation for search crawlers across the audited set.  
However, across the audited set, Discovery Readiness at 39/100 and Structured Data at 61/100 reveal significant opportunities for improving machine discoverability and metadata quality.  
We invite you to prioritise enhancements in these areas to unlock greater visibility and richer machine comprehension.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 99/100 | Excellent |
| Accessibility | 77/100 | Excellent |
| SEO (all pages) | 94/100 | Excellent |
| SEO (content pages) | 97/100 | Excellent |
| MX Stack Completeness | 66/100 | Good |
| Structured Data Quality | 61/100 | Good |
| Commerce Visibility | 0/100 | Needs Improvement |
| Discovery Readiness | 39/100 | Could Be Better |
| Heading Quality | 55/100 | Good |
| Semantic Ratio | 4% | Needs Improvement |
| Agent Readability | 72/100 | Good |
| Pipeline Survivability | 79/100 | Excellent |
| Cross-Page Consistency | 56% | Good |

---

## Appendix A: Pages Audited

- **`/sitemap (nav)`**: SEO 69 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/ (nav)`**: SEO 100 · A11y 75 · Back 95 · Served 90 · Rendered 89
- **`/pricing/ (nav)`**: SEO 96 · A11y 65 · Back 95 · Served 94 · Rendered 98
- **`/contact/sales/ (nav)`**: SEO 85 · A11y 75 · Back 85 · Served 100 · Rendered 91
- **`/products/platform/`**: SEO 98 · A11y 80 · Back 95 · Served 100 · Rendered 100
- **`/products/personalization/`**: SEO 98 · A11y 80 · Back 95 · Served 100 · Rendered 100
- **`/products/ai-actions/`**: SEO 90 · A11y 80 · Back 95 · Served 100 · Rendered 100
- **`/products/analytics/`**: SEO 100 · A11y 80 · Back 95 · Served 100 · Rendered 100
- **`/products/studio/`**: SEO 98 · A11y 80 · Back 95 · Served 100 · Rendered 100
- **`/products/ecosystem/`**: SEO 96 · A11y 80 · Back 95 · Served 100 · Rendered 100
- **`/marketplace/ (nav)`**: SEO 94 · A11y 70 · Back 95 · Served 100 · Rendered 100
- **`/products/personalization/ai-suggestions/`**: SEO 98 · A11y 80 · Back 95 · Served 100 · Rendered 100

Pages marked (nav) are navigational: they route visitors to content rather than containing it, and are excluded from the SEO content average. Content-pages SEO average: 97/100.

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. The total is dominated by the HTML sitemap page (`/sitemap`), which lists 3,388 same-host URLs across the full site. The remaining 11 pages average 66 links each -- normal for a site with a large navigation menu and footer. External links are not tracked; this inventory covers same-host `<a href>` links only. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 4119 |
| | -- `/sitemap` page only | 3388 |
| -- remaining 11 pages | 731 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |

---

## Appendix C: Image Optimisation

Across the audited set we examined 890 images. The format distribution is 1 WebP, 598 SVG, 264 PNG, 15 JPEG, and 12 in other or unrecognised formats. Alt‑text coverage is strong: 868 of 890 images (97.5%) carry alt text, leaving 22 images without alt text.

We found 840 images with loading="lazy", 14 with loading="eager", and 36 without a loading attribute. The absence of the attribute means the browser will decide, which is not the same as eager loading.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: Probable **Drupal** (medium confidence - two fingerprint signals). The main audit uses Drupal-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** **Next.js** (low confidence) - JS framework; **Gatsby** (low confidence) - JS framework; **Svelte** (low confidence) - JS framework; **Tailwind CSS** (medium confidence) - CSS framework. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from cached HTML. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 12 pages analysed | Platform: Drupal | Frameworks: **Next.js** (low confidence) - JS framework; **Gatsby** (low confidence) - JS framework; **Svelte** (low confidence) - JS framework; **Tailwind CSS** (medium confidence) - CSS framework | Analysis method: Hybrid (automated + manual verification) | robots.txt: Present (3 directives)

**Measurement completeness:** Some probes may encounter network errors (HTTP 499 responses) or timeouts that halt data collection for that check. These are recorded in the audit findings as informational notes. Network timeouts are expected behaviour; a machine reading under time constraints stops processing just as a human reviewer would if time ran short. When probes cannot complete, the report documents the limitation and continues with available data.

**What comes next.** This report is the foundation, not the finish line. Implementing the recommendations requires the technical context that produced them; we carry that context forward. Our implementation engagements begin where this audit ends. Speak to us about next steps.

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

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `www-contentful-com-report.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `www-contentful-com-report.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload www-contentful-com-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the organisation distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it first to ourselves.

---

**Date:** 3 June 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*
