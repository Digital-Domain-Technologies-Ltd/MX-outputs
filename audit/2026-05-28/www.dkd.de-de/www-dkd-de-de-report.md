---
title: "Www Dkd: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-28"
modified: "2026-05-28"
client: "Www Dkd"
clientSlug: "www-dkd-de-de"
clientUrl: "https://www.dkd.de"
reportId: "www-dkd-de-de-WEB-AUDIT-20260528"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-28"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Www Dkd"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 55
accessibilityScore: 89
seoScore: 92
llmSuitabilityScore: 79
totalIssues: 368
pagesAudited: 6
version: "1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Www Dkd. Focus on the highest-leverage MX opportunities surfaced by the audit."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-05-28/www.dkd.de-de/www-dkd-de-de-report.pdf"
    description: "Generate PDF audit report for Www Dkd"
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
    sidecar: "www-dkd-de-de-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "www-dkd-de-de-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

# Www Dkd: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 28 May 2026\
**Report ID:** www-dkd-de-de-WEB-AUDIT-20260528

---

## About This Report

We audited 6 pages across www.dkd.de's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** Here we look at the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 6 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead, because Common Crawl (the archive underpinning most major LLM training datasets) prioritises HTML for its LLM-training subsets, so a plain-text llms.txt is unlikely to enter training corpora at the same rate as the rest of the site. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **55**/100 | `##########--------` |
| Accessibility | **89**/100 | `################--` |
| SEO | **92**/100 | `#################-` |
| Machine Suitability | **79**/100 | `##############----` |
| MX Stack Completeness | **62**/100 | `###########-------` |
| Agent Readability | **69**/100 | `############------` |
| Pipeline Survivability | **78**/100 | `##############----` |

We audited six pages of www.dkd.de and found a property that serves its human audience with clear intent. Performance stands as the strongest human-experience dimension across the audited set, and an SEO score of 92/100 confirms that the foundations search engines depend on are well established. The content is purposeful, the information architecture is coherent, and the groundwork is there for an effective digital presence.

Accessibility is a Priority 1 compliance item we want to name directly. Across the audited set we recorded 368 raw instances flagged as critical, spanning 13 distinct WCAG AA issue types. That figure is more tractable than it first appears: 356 of those instances trace to 65 recurring template patterns, meaning a single corrective edit per pattern resolves every instance it governs. Addressing accessibility at the template level is the most efficient path, and we recommend treating it as the first workstream. Beyond accessibility, the headline opportunity is in machine readiness. www.dkd.de currently sits at MX Readiness Level 1 (Discoverable), which means machines can find and parse the pages we audited but cannot yet cite them as an attested source. The concrete lever to move from Discoverable to Citation-ready is the addition of MX governance fields, specifically mx:status, mx:contentType, mx:audience, canonicalUri, and provenance markers, none of which we detected across the audited set. Discovery Readiness and Structured Data Quality already approach the thresholds needed for Level 2; it is the governance layer that holds the level where it stands. The next-level action is clear: add full MX fields, governance, and provenance metadata so machines can cite as well as discover, and then raise Machine Suitability above 60 and Discovery Readiness above 40 to consolidate the position.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, www.dkd.de delivers a strong human experience, with SEO and Performance both sitting in the Excellent band, and Accessibility at 89/100 where a set of template-level patterns accounts for the majority of raw instances and represents the clearest opportunity for improvement.

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Excellent | A | - |
| Performance | Excellent | A | B (median) |
| Accessibility (WCAG) | Excellent | A | B (median) |
| Trust and Credibility | Excellent | A | - |

### Machine Experience

Across the audited set, machines can discover and parse www.dkd.de, though the current MX Readiness Level of 1 (Discoverable) means citation as an attested source is not yet supported.

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 25/100 | Needs Improvement | D | D (median) |
| Structured Data Quality | 65/100 | Good | B | C (median) |
| MX Stack Completeness | 62/100 | Good | B | C (median) |
| Pipeline Survivability | 78/100 | Excellent | A | A (median) |

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

**Evidence:** MX Stack Completeness 62/100 | Structured Data Quality 65/100 | Discovery Readiness 25/100 | Consistency 62%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so agents can cite as well as discover. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set of six pages, www.dkd.de demonstrates a strong foundations of technical and content quality that provides real momentum for the improvements ahead. Strong SEO scores, a meaningful accessibility result, and the presence of four out of five security headers show a team that has invested carefully in the fundamentals.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent - 2305ms average load time |
| SEO (content pages) | 82 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | 4/5 headers present (X-Frame-Options absent); 0 of 6 URLs carry all five |
| Structured Data | 65 | Good - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 88 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 62% | 62% - same metadata patterns across every page |
| Agent access | 7/7 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.
- Body content ratio averages 46%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We have prioritised the findings below by the degree to which each gap constrains what machines can do with www.dkd.de, so discovery and structural gaps lead because they limit every downstream capability. Catalogue Visibility at 10/100 and Discovery Readiness at 25/100 head the list precisely because they shape the ceiling for all other scores.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Duplicate ID Attributes across the audited set, WCAG 4.1.1 (ids: accessibility, account, alarm, article, bell, 6 pages each) | Compliance Risk | High | Medium | Assistive technology users may miss or misread content where duplicate IDs cause ambiguous DOM references |
| 2 | Semantic Structure 53/100, worst page https://www.dkd.de/de/kontakt/ (26 of 48 bare divs) | Compliance Risk | Medium | Medium | Screen reader and keyboard users are less likely to navigate content meaningfully where structural landmarks are absent |
| 3 | Discovery Readiness 25/100, Needs Improvement (llms.txt, llms-full.txt, agent-card.json, ai.txt, humans.txt all absent) | AI Opportunity | High | Low | Machines risk missing www.dkd.de as a citable source; discovery and agent-routing may be unreliable |
| 4 | Structured Data Quality 65/100, MX Stack Completeness 62/100 (MX governance fields absent: canonicalUri, contentType, audience, status) | AI Opportunity | Medium | Medium | Machines may assign lower confidence to structured claims and are less likely to attribute content accurately |

---

**Priority 1: Duplicate ID Attributes across the Audited Set, WCAG 4.1.1 (IDs: accessibility, account, alarm, article, bell)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, five ID values ("accessibility", "account", "alarm", "article", and "bell") each appear on all six audited pages, breaching WCAG 4.1.1, which requires every ID to be unique within a document. Because 356 of the 368 total issues we recorded trace to 65 recurring template-level patterns, correcting these IDs at the template layer resolves the bulk of the exposure in a single pass.

**What to change and why:**
- Make each of the five duplicate IDs ("accessibility", "account", "alarm", "article", "bell") unique within each page so that assistive technologies can unambiguously resolve any programmatic reference to those elements; this directly addresses the WCAG 4.1.1 criterion and removes the primary route by which screen readers may land in the wrong place or skip content entirely.
- Because the 65 recurring patterns account for 356 of 368 issues across the audited set, prioritise a template-level resolution: fixing the pattern in the shared component eliminates all descendant instances without page-by-page edits, which keeps the remediation effort proportionate to the compliance gain.
- After correcting the IDs, validate each audited page with an automated accessibility checker to confirm no residual duplicates remain and to produce an audit trail that can be presented to compliance stakeholders.

**Effort:** Medium

---

**Priority 2: Semantic Structure 53/100, Worst Page https://www.dkd.de/de/kontakt/ (26 of 48 Bare Divs)**

**Bucket:** Compliance Risk

**Finding:** We score Semantic Structure at 53/100 across the audited set, a Medium band result that indicates a structural pattern shared across the template. The figures most clearly surface at https://www.dkd.de/de/kontakt/, where 26 of the 48 total elements we measured are bare divs; that page represents the worst case in the audited set. Where the template is shared, most other audited pages share the same underlying structure. Bare divs carry no implicit ARIA role, so machines and assistive technologies receive no signal about the purpose of those containers.

**What to change and why:**
- Replace bare div containers that serve a structural purpose (navigation, main content, sidebar, footer sections) with the appropriate semantic HTML elements; this gives screen readers and keyboard-navigation tools the landmark roles they need to let users skip to relevant sections, directly addressing the conditions that contribute to a Semantic Structure score below 70.
- Where a structural landmark cannot be replaced at the element level, add an explicit ARIA landmark role to the div so that assistive technologies and machines processing the page can interpret the content hierarchy; this supports both WCAG compliance and machine-readable structure used by search crawlers.
- Review the shared template responsible for the contact-page layout first, since a correction there is likely to lift the score across all pages that inherit the same component, maximising the return on a single change.

**Effort:** Medium

---

**Priority 3: Discovery Readiness 25/100, Needs Improvement (llms.txt, llms-full.txt, agent-card.json, ai.txt, humans.txt Absent)**

**Bucket:** AI Opportunity

**Finding:** We score Discovery Readiness at 25/100 (Needs Improvement). None of the five well-known discovery artefacts are reachable on www.dkd.de: llms.txt, llms-full.txt, agent-card.json, ai.txt, and humans.txt are all absent. Without these files, machines that rely on declared endpoints to route, scope, or attribute content have no structured signal from www.dkd.de, reducing the likelihood that the domain is surfaced confidently in agent-generated responses.

**What to change and why:**
- Add llms.txt (we recommend text/html as the content-type; our recommendation diverges from the llmstxt.org specification) and llms-full.txt to declare the scope of content that machines are invited to read; this is the single highest-leverage change for lifting Discovery Readiness because it gives language models a declared, structured entry point rather than requiring them to infer content scope from crawled pages.
- Publish agent-card.json to provide machine-readable identity and capability metadata for www.dkd.de; agent-routing systems that consume this file can attribute responses to the domain with greater confidence.
- Add ai.txt and humans.txt to round out the discovery artefact set; ai.txt signals permitted machine-access policies, and humans.txt provides contact and ownership context that supports both agent attribution and editorial transparency.

**Effort:** Low

---

**Priority 4: Structured Data Quality 65/100, MX Stack Completeness 62/100 (MX Governance Fields canonicalUri, contentType, audience, status Absent)**

**Bucket:** AI Opportunity

**Finding:** We score Structured Data Quality at 65/100 (Good) and MX Stack Completeness at 62/100 (Good) across the audited set. The schema types already present (ListItem, Question, Answer, BreadcrumbList, WebSite, FAQPage) provide a useful foundation. The gap reducing MX Stack Completeness sits in the MX governance fields: canonicalUri, contentType, audience, and status are absent from page frontmatter across the audited set. Without these fields, machines lack the metadata needed to confirm canonical identity, classify content type, understand the intended audience, and assess content currency, all of which reduce agent confidence in citing www.dkd.de as an attested source.

**What to change and why:**
- Add canonicalUri as a declared governance field in page frontmatter so that machines processing the page have an explicit canonical reference; this closes the most direct route by which duplicate or syndicated versions of content might be attributed to the wrong source, supporting both SDQ and MX Stack Completeness scores.
- Declare contentType and audience fields to allow machines to classify pages by format and intended readership; these signals improve the precision of agent-generated responses that draw on www.dkd.de content and reduce the risk that content is surfaced in an inappropriate context.
- Add the status field to signal content currency; machines that assess whether a source is current before citing it will receive a clear, structured answer rather than inferring recency from dates scattered through the page body.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Organisation**: Adding `sameAs` properties pointing to www.dkd.de's Wikidata and LinkedIn entries on the `Organisation` entity would allow machines to cross-reference the brand identity across knowledge graphs, strengthening attribution confidence when agents encounter the site in external sources.

- **BreadcrumbList on deeper pages**: Where the audited set relies on URL path structure alone for navigational context, adding `BreadcrumbList` markup gives machines an explicit, structured trail that supports accurate page-hierarchy interpretation without requiring path inference.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt: Declaring content-use policy via Content-Signal directives would give machines a machine-readable statement of how the site's content may be used, a low-effort addition that places governance intent directly in a file machines already fetch.

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
| URL probed | https://www.dkd.de/de |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
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
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | Yes, home link and internal navigation present |
| Internal navigation links | 67 links to same-site pages |
| MX governance tags | Absent |
| Schema.org JSON-LD | Present (review: should not claim valid page) |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.dkd.de/de`. A first-time visitor sees the cold-cache cost: the crawler recorded 6380 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes that followed returned 154ms (HTTP 429), 124ms (HTTP 503), 219ms (HTTP 503); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Median-load control.** The median-load control page is `https://www.dkd.de/de/kontakt/`. A first-time visitor sees the cold-cache cost: the crawler recorded 923 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 133ms (HTTP 503), 184ms (HTTP 503), 204ms (HTTP 503); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

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

*Showing the first 10 lines of `robots.txt`; the full 25-line file is preserved alongside this report as `www-dkd-de-de-robots-txt.txt`.*

The robots.txt file is present and declares 21 disallow paths, restricting machines from a substantial portion of the crawlable space. One sitemap reference is announced within the file, giving compliant crawlers a direct route to the indexed content.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 9 entries | Matches crawl count |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** A

We grade the sitemap at A: it declares 9 URLs and carries lastmod, changefreq, and priority attributes on every entry, giving machines a complete set of crawl-guidance signals.

The sitemap includes both https://www.dkd.de/de and https://www.dkd.de/de/ as separate entries, producing nine crawled URLs before deduplication against eight unique canonical pages, an inflation factor of 1.1×. Machines that do not normalise URLs will fetch the same content multiple times, wasting token budget and risking contradictory findings; we recommend consolidating sitemap.xml to one canonical form per resource and adding a canonical link tag to each page.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms.txt at the site root, meaning machines that query www.dkd.de for a structured content index receive no description, no page inventory, and no content policy. We recommend adding llms.txt to give machines the orientation they need to represent the site accurately.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt at www.dkd.de; the endpoint returns a 404 and no reference to it appears in the sitemap or the homepage head. Whether adding one would meaningfully extend machine-readable coverage depends on the full depth of the site's content, which the audited sample does not yet measure, so we recommend treating this as a conditional next step once a content inventory has been completed.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| ListItem | 6 | 100% | 100% | Reference |
| Question | 1 | 100% | 100% | Answer |
| Answer | 1 | 100% | 100% | - |
| BreadcrumbList | 6 | 100% | 100% | - |
| WebSite | 2 | 100% | 0% | - |
| FAQPage | 1 | 100% | 100% | - |

**Structured Data Quality:** 65/100\
**Coverage:** 6 pages with JSON-LD out of 6 total (100%)\
**Unique types:** 6

Across the 6 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 10 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 25 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 13 | 15 | Average across entities |
| Entity richness | 0 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 6 | 15 | Nested @type values + @id linking |
| Linked-data signals | 1 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 10 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **65** | **100** | |

---

## Structured Data Findings

We identified 8 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

| Page | Type | Severity | Property | Why it matters |
|------|------|----------|----------|----------------|
| /de | WebSite | recommended | image | Site has no logo / hero image declared in structured data |
| /de | WebSite | recommended | datePublished | No site-level publish date for crawler context |
| /de | WebSite | recommended | author | Site has no top-level author/owner declared |
| /de | WebSite | recommended | publisher | Site has no top-level publisher declared |
| /en/ | WebSite | recommended | image | Site has no logo / hero image declared in structured data |
| /en/ | WebSite | recommended | datePublished | No site-level publish date for crawler context |
| /en/ | WebSite | recommended | author | Site has no top-level author/owner declared |
| /en/ | WebSite | recommended | publisher | Site has no top-level publisher declared |

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
| Twitter Card meta tags | Yes | Yes | Yes | Yes | No |
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
**To reach the next level:** Fill in the required and recommended Schema.org properties for each typed block (see structured_data_findings.csv for the specific gaps). Connect related entities inline or via @id references to canonical entities defined elsewhere on the site. Ensure every @type value is a valid Schema.org type.

The Structured Data Quality (SDQ) score and the Schema Maturity Level measure two different things. SDQ counts the properties present and validates them against Schema.org expectations; the level captures whether those properties are connected (cross-entity wiring, linked-data signals, external authority identifiers). Both numbers above are reported as-is from the audit data.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. A break at any stage propagates to all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Partial | 78 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 50 | Schema.org: WebSite, BreadcrumbList, ListItem (100% required properties) |
| 3 | Search & Compare | Site type does not require | -- | No comparison content detected |
| 4 | Price Understanding | Site type does not require | -- | No pricing content detected |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

Partially Compatible; Search & Compare, Price Understanding, and Purchase Confidence are not applicable for this site type, and neither of the two relevant stages currently passes.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Fail · 5/6
  - *Means:* 5 page(s) flag for truncation risk because their main content (the first <main>, <article>, or top heading) sits past the 50 KB safe-fetch offset, even though no page exceeds the 250 KB hard ceiling. Agents with limited fetch windows may stop reading before they reach prose.
  - *Data:* Largest page: 223 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See www-dkd-de-de-pipeline-truncation-risk-pages.csv (5 pages).
- **SPA Shell** - Pass · 6/6
  - *Means:* Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does.
  - *Data:* Max gap score: 7. 0 means served and rendered match.
- **Soft 404** - Pass · 6/6
  - *Means:* Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs.
  - *Data:* 0 soft-404 page(s) detected.
- **Boilerplate Burial** - Pass · 6/6
  - *Means:* Navigation and chrome do not dominate the page; main content is reachable without wading through overhead.
  - *Data:* Highest boilerplate-to-content ratio: 0.47. Threshold: < 10 (and < 80 KB of inline head bytes).
- **Tabbed Disclosure** - Pass · 6/6
  - *Means:* No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML.
  - *Data:* 0 page(s) with tab widgets.
- **Delayed Content Start** - Pass · 1/1
  - *Means:* Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily.
  - *Data:* Content starts at up to 34% of the document on some pages. Check applied to 1 of 6 audited pages; the remaining 5 pages were skipped by a size or eligibility gate.
- **Broken Code Fences** - Pass · 6/6
  - *Means:* All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples.
  - *Data:* 0 page(s) with unbalanced fenced code blocks.
- **HTTP Content Negotiation (Vary)** - Fail · 5/6
  - *Means:* The server advertises content negotiation via Vary: Accept. Agents that ask for a different Accept header may receive different content than the browser version.
  - *Data:* 5 page(s) advertise format negotiation. See www-dkd-de-de-pipeline-http-content-negotiation-(vary)-pages.csv (5 pages).
- **Cross-Host Redirect** - Pass · 6/6
  - *Means:* No cross-domain redirects. Agents follow internal redirects without host-boundary issues.
  - *Data:* 1 page(s) cross origin during redirect.
- **Generic Headings** - Pass · 6/6
  - *Means:* Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction".
  - *Data:* Worst case: 0% generic headings.
- **Body Content Ratio** - Pass · 1/1
  - *Means:* Actual prose content averages 46% of served bytes - well above the 30% threshold. Pages are content-heavy, not overhead-heavy.
  - *Data:* Average: 46%. Threshold: 30%. Check applied to 1 of 6 audited pages; the remaining 5 pages were skipped by a size or eligibility gate.
- **Inline Tag Bloat** - Fail · 6/6
  - *Means:* 6 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches.
  - *Data:* 6 element(s) > 500 bytes. Largest single-page inline CSS block: 2548 B. Largest single-page inline JS block: 841 B. See www-dkd-de-de-pipeline-inline-tag-bloat-pages.csv (6 pages).
- **Head Weight** - Pass · 1/1
  - *Means:* Head bytes are a small fraction of each page. Agents reach body content quickly.
  - *Data:* Max ratio: 0.13. Average: 0.02. Threshold: 0.50. Check applied to 1 of 6 audited pages; the remaining 5 pages were skipped by a size or eligibility gate.

**Pipeline Survivability score:** 78/100

Across the audited set, pipeline survivability scores 78/100, and the three checks drawing attention are Truncation Risk, Content Negotiation, and Inline Tag Bloat, with the last of these present on every one of the six audited pages. When machines parse pages carrying excessive inline tag weight, they spend processing capacity on structural overhead rather than content, which reduces the reliability of what they extract and carry forward. Addressing Inline Tag Bloat across the audited set would have the greatest single effect on machine-readability and represents the clearest opportunity to strengthen the pipeline.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Rendered HTML | 53/100 (medium) | 26 bare divs · 54% ratio · depth 3 | `div.text-columns__column` (81), `div.text-columns.text-columns--` (26), `div.textpic.textpic--inside` (12), `div.blog-card__info` (8), `div.text-columns.text-columns--above` (6) |

On the contact page (https://www.dkd.de/de/kontakt/), we recorded a rendered bare-div ratio of 54%, meaning machines processing that page lose structural context and must rely on positional inference to determine meaning. The pattern here is surface-wide rather than deeply nested, with the deepest bare chain reaching only three levels, which points to component frameworks that emit class-named divs without semantic equivalents rather than deeply nested layout scaffolding. The most immediate lever is wrapping the obvious landmarks, header, nav, main, and footer, and ensuring components such as the text-columns and textpic containers carry semantic roles, so the bare-div ratio on that page falls without requiring a layout restructure.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | Yes | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

One of the five standard security headers is absent on every audited response: X-Frame-Options. Adding it at the origin-server or CDN edge closes the corresponding attack surface without touching application code.

**Coverage:** 0 of 6 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/de`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame No · X-Content-Type Yes
- **`/de/kontakt/`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame No · X-Content-Type Yes
- **`/en/`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame No · X-Content-Type Yes
- **`/de/leistungen/`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame No · X-Content-Type Yes
- **`/de/leistungen/enterprise-websites/`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame No · X-Content-Type Yes
- **`/de/typo3-agentur/`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame No · X-Content-Type Yes

HTTPS: 6/6 | HSTS: 6/6 | CSP: 6/6 | X-Frame-Options: 0/6 | X-Content-Type-Options: 6/6

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 100% | - |
| MX governance tags | 0% | 6 |
| Open Graph tags | 100% | - |
| Twitter Card tags | 100% | - |
| Skip link | 0% | 6 |
| llms.txt link tag | 0% | 6 |
| Canonical URL | 100% | - |
| Exactly 1 H1 | 100% | - |
| Code examples present | 0% | 6 |
| Self-contained sections | 100% | - |
| Error/troubleshooting docs | 0% | 6 |
| Lighthouse heading compliance | 17% | 5 |

**Overall Consistency:** 62%

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

We found 6 identical inline fragment(s) repeated across multiple pages, totalling 25 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes per fragment | Appears on N pages | Preview |
|------|-------------------:|-------------------:|---------|
| css | 19 | 12 | .st0{fill:#B6D644;} |
| css | 2478 | 6 | /*InlineDefaultCss*/ /* default styles for extension "tx_for |
| css | 4288 | 3 | .rek-prediction .rek-style p{margin:0}.rek-prediction .rek-s |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `www-dkd-de-de-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src=".">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Across the audited set, PDFs present a dual concern that operates on two independent tracks: accessibility legislation in the EU, US, UK, Australia, and Canada has converged on ISO 14289-1 (PDF/UA) as the shared technical baseline, with the European Accessibility Act (Directive (EU) 2019/882, in force 28 June 2025) offering the most precisely codified example of a global regulatory direction. Equally, an untagged or image-based PDF is opaque to machines, search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from it, whereas a properly tagged PDF with a complete structure tree is machine-readable in precisely the way that semantic HTML is.

We linked no PDFs from the 6-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 368 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Discovery Readiness improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2 (Compliance Risk) | Priority 1, 2 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | P1, P2, P3, P4 (P1–P4) | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://www.dkd.de performs strongly on SEO, scoring 92/100, a signal that the foundations for human-facing search visibility are well established. The clearest opportunities lie in Discovery Readiness, which scores 25/100, and Structured Data at 65/100, meaning machines encounter meaningful gaps when attempting to parse, index, and act on the content. We invite the team to review the findings that follow and take the steps needed to bring machine readiness in line with the strong SEO baseline already in place.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 79/100 | Excellent |
| Accessibility | 89/100 | Excellent |
| SEO (all pages) | 92/100 | Excellent |
| SEO (content pages) | 82/100 | Excellent |
| MX Stack Completeness | 62/100 | Good |
| Structured Data Quality | 65/100 | Good |
| Commerce Visibility | 10/100 | Needs Improvement |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 88/100 | Excellent |
| Semantic Ratio | 22% | Needs Improvement |
| Agent Readability | 69/100 | Good |
| Pipeline Survivability | 78/100 | Excellent |
| Cross-Page Consistency | 62% | Good |

---

## Appendix A: Pages Audited

- **`/de`**: SEO 82 · A11y 85 · Back 95 · Served 83 · Rendered 77
- **`/de/kontakt/ (nav)`**: SEO 85 · A11y 95 · Back 95 · Served 68 · Rendered 70
- **`/en/ (nav)`**: SEO 92 · A11y 85 · Back 95 · Served 83 · Rendered 77
- **`/de/leistungen/ (nav)`**: SEO 93 · A11y 85 · Back 95 · Served 83 · Rendered 83
- **`/de/leistungen/enterprise-websites/ (nav)`**: SEO 99 · A11y 90 · Back 95 · Served 83 · Rendered 83
- **`/de/typo3-agentur/ (nav)`**: SEO 100 · A11y 95 · Back 95 · Served 76 · Rendered 76

Pages marked (nav) are navigational: they route visitors to content rather than containing it, and are excluded from the SEO content average. Content-pages SEO average: 82/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: 483 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 483   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |
| URL variant links (same canonical) | 6     |

---

## Appendix C: Image Optimisation

Across the audited set, we catalogued 48 images in total. The format distribution skews heavily toward other or unrecognised formats, which account for 38 of those images, with 9 PNG files and a single JPEG making up the remainder. WebP and SVG are absent from the audited sample entirely. On the positive side, alt-text coverage is complete: all 48 images carry descriptive alt text, leaving no gaps for screen readers or machines parsing image content.

Loading strategy is consistently applied across the audited set. Every one of the 48 images carries the `loading="lazy"` attribute, and none are set to `loading="eager"` or left without a loading attribute. That last point is worth noting because omitting the attribute entirely is not the same as eager loading; it leaves the decision to the browser's heuristic, which can produce inconsistent behaviour depending on viewport position and network conditions. Here, that ambiguity does not arise: the loading posture is uniform.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Unknown Platform**. No platform-specific fingerprint was detected, so the audit used conservative default rate limits, paced slowly enough to stay below typical shared-host thresholds, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 6 pages analysed | Platform: Unknown Platform | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `www-dkd-de-de-report.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `www-dkd-de-de-report.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload www-dkd-de-de-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the organisation distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it first to ourselves.

---

**Date:** 28 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*Read the books: <https://mx.allabout.network/books/index.html>*
