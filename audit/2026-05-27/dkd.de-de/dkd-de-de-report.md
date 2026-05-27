---
title: "Dkd: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-27"
modified: "2026-05-27"
client: "Dkd"
clientSlug: "dkd-de-de"
clientUrl: "https://dkd.de"
reportId: "dkd-de-de-WEB-AUDIT-20260527"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-27"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Dkd"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 55
accessibilityScore: 100
seoScore: 92
llmSuitabilityScore: 79
totalIssues: 0
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
    output: "mx-outputs/audit/2026-05-27/dkd.de-de/dkd-de-de-report.pdf"
    description: "Generate PDF audit report for Dkd"
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
    sidecar: "dkd-de-de-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "dkd-de-de-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

# Dkd: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 27 May 2026\
**Report ID:** dkd-de-de-WEB-AUDIT-20260527

---

<!-- ERROR_REPORT_SECTION:START -->

## Audit gate findings for human review

Every automated gate ran to completion; this section surfaces 1 finding (1 warning) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 1 | 2026-05-27T14:16:11Z |

<details open><summary>Warning detail (1)</summary>

**1. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 1**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-27/dkd.de-de/dkd-de-de-report.md
  1 scope mis-statement(s).

  [sampling-inside-sitewide-section] line 382
    section: ## Discovery Files  (line 348)
    phrase:  "Across the audited set"
    line:    Across the audited set, we identified a URL variant cluster in the sitemap where a single canonical resource, https://dk

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

</details>

---

<!-- ERROR_REPORT_SECTION:END -->

## About This Report

We audited 5 pages across dkd.de's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** Here we look at the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 5 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead, because Common Crawl (the archive underpinning most major LLM training datasets) prioritises HTML for its LLM-training subsets, so a plain-text llms.txt is unlikely to enter training corpora at the same rate as the rest of the site. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **55**/100 | `##########--------` |
| Accessibility | **100**/100 | `##################` |
| SEO | **92**/100 | `#################-` |
| Machine Suitability | **79**/100 | `##############----` |
| MX Stack Completeness | **62**/100 | `###########-------` |
| Agent Readability | **67**/100 | `############------` |
| Pipeline Survivability | **76**/100 | `##############----` |

We audited five pages of dkd.de on 2026-05-27, scoring each across ten dimensions that span human experience and machine readiness. For human visitors, the picture is genuinely strong. Performance leads the way as the standout dimension across the audited set, and SEO follows closely at 92/100, an Excellent result that reflects well-structured content and solid technical foundations. Accessibility, too, is in excellent shape: we recorded zero distinct WCAG AA issue types across the audited set, which means human visitors encounter no detected barriers to access.

The headline opportunity is in machine readiness. Dkd.de currently sits at MX Readiness Level 1 (Discoverable), meaning machines can find and parse the content we audited, but cannot yet cite it as an attested source. Structured Data Quality scores 66/100 and Discovery Readiness sits at 25/100, yet the score thresholds that would unlock Level 2 (Citation-ready) are not the binding constraint here. The actual lever is the absence of MX governance fields across the audited set: fields such as mx:status, mx:contentType, mx:audience, canonicalUri, and provenance markers were not detected on the audited pages. Adding those fields, raising Machine Suitability above 60, and lifting Discovery Readiness above 40 is the concrete path to a level where machines can cite dkd.de as well as discover it.

One structural note worth holding alongside both of the above: Schema.org JSON-LD is the highest-leverage structured asset available, because every machine can read it regardless of how a page is rendered or what rendering environment is in play. The groundwork is already there, with BreadcrumbList, FAQPage, and related types present across the audited set. The opportunity is to deepen that foundation with the governance and provenance layer that moves the needle on MX Readiness, and to ensure the discovery artefacts that machines rely on as entry points are in place.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, dkd.de delivers a strong human experience, with Accessibility at 100/100 and SEO at 92/100, both in the Excellent band, and average page load sitting at 2025ms.

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Excellent | A | - |
| Performance | Excellent | A | median 83 |
| Accessibility (WCAG) | Excellent | A | median 81 |
| Trust and Credibility | Excellent | A | - |

### Machine Experience

Across the audited set, machines can discover and parse dkd.de content, though the current MX Readiness Level of 1 (Discoverable) means citation as an attested source is not yet available.

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 25/100 | Needs Improvement | D | median 25 |
| Structured Data Quality | 66/100 | Good | B | median 57 |
| MX Stack Completeness | 62/100 | Good | B | median 50 |
| Pipeline Survivability | 76/100 | Excellent | A | median 90 |

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

**Evidence:** MX Stack Completeness 62/100 | Structured Data Quality 66/100 | Discovery Readiness 25/100 | Consistency 62%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so agents can cite as well as discover. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, dkd.de demonstrates a strong foundations in several areas that position it well for the improvements we recommend. The SEO and accessibility results in particular provide strong groundwork for the work ahead.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent - 2025ms average load time |
| SEO (content pages) | 82 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 5/5 | 5/5 headers present; 0 of 5 URLs carry all five |
| Structured Data | 66 | Good - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 87 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 62% | 62% - same metadata patterns across every page |
| Agent access | 7/7 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- Accessibility is compliant across the audited set: Pa11y reports 100/100 with zero WCAG 2.1 AA errors on 5 pages.
- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.
- Body content ratio averages 46%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We have prioritised the findings below by the degree to which each gap constrains machine access downstream, so discovery and catalogue visibility opportunities lead, followed by structured data depth and MX stack completeness. Scores of 25/100 for Discovery Readiness, 10/100 for Catalogue Visibility, 66/100 for Structured Data Quality, and 62/100 for MX Stack Completeness mark the areas where focused effort will yield the greatest return across the audited set.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Duplicate ID Attributes, WCAG 4.1.1 (accessibility, account, alarm, article, bell, 5 pages) | Compliance Risk | High | Low | Assistive tech users may miss or misread content where ID references collide |
| 2 | Semantic Structure 53/100, Worst Page https://dkd.de/de/kontakt/ (26 of 48 bare divs) | Compliance Risk | Medium | Medium | Screen reader and machine traversal of https://dkd.de/de/kontakt/ may miss structural context |
| 3 | Discovery Readiness 25/100, Needs Improvement (llms.txt, llms-full.txt, agent-card.json, ai.txt, humans.txt absent) | AI Opportunity | High | Medium | Machines are less likely to index, cite, or surface dkd.de content in agent-driven results |
| 4 | Structured Data Quality 66/100, MX Stack Completeness 62/100 (MX governance fields absent) | AI Opportunity | Medium | Medium | Machines may treat dkd.de content as lower-confidence and reduce citation eligibility |

---

**Priority 1: Duplicate ID Attributes, WCAG 4.1.1 (accessibility, account, alarm, article, bell)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, every one of the five pages carries duplicate `id` values for accessibility, account, alarm, article, and bell. WCAG Success Criterion 4.1.1 (Parsing) requires that each `id` attribute value is unique within a document; when duplicates exist, assistive technologies referencing those IDs by anchor or ARIA pointer may resolve to the wrong element or fail to resolve at all. Because the duplicates appear on all five audited pages, the pattern traces to a shared template layer, and a single corrective edit there would propagate the fix across the audited set.

**What to change and why:**
- Remove or uniquify the duplicate `id` values for accessibility, account, alarm, article, and bell in the shared template. Each `id` must be unique within its document so that assistive technologies can unambiguously resolve ARIA relationships and in-page anchors, addressing WCAG 4.1.1 directly.
- Review any ARIA attributes (aria-labelledby, aria-describedby) that reference these IDs; when the source ID is duplicated, the association is undefined and screen readers may announce incorrect or empty labels.
- After the template fix, run an automated ID-uniqueness check as part of the build or deployment pipeline so that duplicate IDs do not re-enter the codebase through future template changes.

**Effort:** Low

---

**Priority 2: Semantic Structure 53/100, Worst Page https://dkd.de/de/kontakt/ (26 of 48 bare divs)**

**Bucket:** Compliance Risk

**Finding:** The rendered Semantic Structure score sits at 53/100, placing it in the medium band. At https://dkd.de/de/kontakt/, the worst page in the audited set, 26 of the 48 total elements we recorded are bare divs without semantic roles. Because the five audited pages share a common template, the medium-band score reflects a structural pattern common to the set, not an isolated anomaly on a single page. Screen readers and machines traversing https://dkd.de/de/kontakt/ encounter a high proportion of structurally opaque containers, reducing their ability to infer content hierarchy.

**What to change and why:**
- Audit the bare-div containers on https://dkd.de/de/kontakt/ and replace those that represent landmark regions (navigation, main content, complementary content, footers) with the appropriate semantic HTML elements; this improves the structural signal that assistive technologies use to build a page model and helps machines assign meaning to content sections.
- Where a bare div carries meaning that cannot be expressed by a native HTML element alone, add an appropriate ARIA role; this preserves visual layout while restoring the semantic layer, which matters for screen reader announcement order and for machine comprehension of document structure.
- Treat the contact page as a template reference: improvements made there are likely to lift the Semantic Structure score across the audited set given the shared template architecture, and re-running the Div Soup check post-fix will confirm whether the band rises above 70.

**Effort:** Medium

---

**Priority 3: Discovery Readiness 25/100, Needs Improvement (llms.txt, llms-full.txt, agent-card.json, ai.txt, humans.txt absent)**

**Bucket:** AI Opportunity

**Finding:** Discovery Readiness scores 25/100, placing dkd.de firmly in the Needs Improvement band. None of the five well-known discovery artefacts we checked are reachable on dkd.de: llms.txt, llms-full.txt, agent-card.json, ai.txt, and humans.txt are all absent. Without these files, machines have no structured declaration of what dkd.de offers, which content is addressable, or how the team prefers its material to be attributed. This is the single largest contributor to the low MX Stack Completeness score of 62/100.

**What to change and why:**
- Add llms.txt to dkd.de. This plain-text file tells machines which pages and content areas are intended to be read and cited, directly raising Discovery Readiness and improving the probability that agent-driven results surface dkd.de content. We recommend serving llms.txt as text/html (our recommendation diverges from the llmstxt.org specification, we recommend text/html).
- Add llms-full.txt alongside it to provide machines with the expanded content inventory; this supports richer agent traversal and reduces the risk that relevant pages are overlooked in automated discovery.
- Add agent-card.json to declare the team's identity, capabilities, and preferred attribution; this is the primary MX governance signal that moves MX Stack Completeness upward.
- Add ai.txt and humans.txt to complete the discovery artefact set; together these five files address the full Discovery Readiness gap and signal to machines that dkd.de is a well-governed, citable source.

**Effort:** Medium

---

**Priority 4: Structured Data Quality 66/100, MX Stack Completeness 62/100 (MX governance fields absent)**

**Bucket:** AI Opportunity

**Finding:** Structured Data Quality sits at 66/100 and MX Stack Completeness at 62/100, both in the Good band. The schema types already present across the audited set (ListItem, Question, Answer, BreadcrumbList, WebSite, FAQPage) give machines a meaningful content signal. The remaining headroom in both scores traces to absent MX governance fields in page frontmatter: canonicalUri, contentType, audience, and status are not present, and these fields are what allow machines to assess the authority, freshness, and intended audience of each page before deciding whether to cite it.

**What to change and why:**
- Add the canonicalUri field to page frontmatter across the audited set; machines use this to confirm the authoritative address of a page, reducing the risk that content is attributed to a duplicate or redirected URL.
- Add the contentType and audience fields to page frontmatter; these allow machines to match dkd.de content to the right query context and audience profile, improving citation eligibility for relevant searches.
- Add the status field to page frontmatter; this signals whether a page is current, draft, or deprecated, which raises machine confidence that dkd.de content is live and maintained, directly contributing to MX Stack Completeness and Structured Data Quality scores.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Organisation**: adding `sameAs` properties pointing to dkd.de's Wikidata and LinkedIn entries on the `Organisation` entity would allow machines to resolve the brand identity across knowledge graphs, strengthening citation confidence when agents encounter dkd.de as a named source.

- **potentialAction on Organisation**: declaring a `potentialAction` on the `Organisation` entity (such as a `SearchAction` or `ContactAction`) advertises machine-readable contact and search capabilities directly within the structured data layer, giving agents a clear path to interact with dkd.de programmatically rather than inferring it from page content.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for AI agents: without these directives, machines have no explicit signal about how content across the audited set may be used for training or citation, and adding them to robots.txt is a low-effort way to establish that policy clearly.

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
|-------|--------|
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

**Slowest.** The slowest page is `https://dkd.de/de`. A first-time visitor sees the cold-cache cost: the crawler recorded 5536 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes that followed returned 309ms (HTTP 503), 287ms (HTTP 429), 333ms (HTTP 503); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Median-load control.** The median-load control page is `https://dkd.de/de/leistungen/enterprise-websites/`. A first-time visitor sees the cold-cache cost: the crawler recorded 1068 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 349ms (HTTP 503), 316ms (HTTP 503), 305ms (HTTP 503); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

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

We found a robots.txt in place that declares 21 disallow paths, giving machines a detailed map of which areas are off-limits, and the file announces one sitemap reference to support crawl discovery.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 9 entries | Matches crawl count |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** A

We grade the sitemap at A: it covers 9 URLs and carries all three optional attributes, lastmod, changefreq, and priority, giving machines the freshness and crawl-weight signals they need to schedule visits accurately.

We identified a URL variant cluster in the sitemap where a single canonical resource, https://dkd.de/de, appears alongside its trailing-slash form, inflating the crawl seed by a factor of 1.1× before deduplication. Machines that skip URL normalisation will fetch both forms as distinct pages, consuming token budget redundantly and risking contradictory or inflated findings; we recommend consolidating sitemap.xml to one canonical URL per resource and adding a canonical link tag to each page.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms.txt on dkd.de, meaning machines have no structured entry point through which to discover a site description, a curated page inventory, or a content policy. We recommend adding llms.txt to address this gap.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt on the audited pages, with the endpoint returning a 404 across every signal we checked: the HTTP response, the sitemap, and the homepage head. Whether publishing a full-text version is warranted depends on the depth of content across the wider site, which the audited sample alone does not yet measure.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| ListItem | 5 | 100% | 100% | Reference |
| Question | 1 | 100% | 100% | Answer |
| Answer | 1 | 100% | 100% | - |
| BreadcrumbList | 5 | 100% | 100% | - |
| WebSite | 1 | 100% | 0% | - |
| FAQPage | 1 | 100% | 100% | - |

**Structured Data Quality:** 66/100\
**Coverage:** 5 pages with JSON-LD out of 5 total (100%)\
**Unique types:** 6

Across the 5 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

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
| **Total** | **66** | **100** | |

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

Based on the audited stages, dkd.de is Partially Compatible; Search & Compare, Price Understanding, and Purchase Confidence are N/A for this site type.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Fail · 4/5
  - *Means:* 4 page(s) flag for truncation risk because their main content (the first <main>, <article>, or top heading) sits past the 50 KB safe-fetch offset, even though no page exceeds the 250 KB hard ceiling. Agents with limited fetch windows may stop reading before they reach prose.
  - *Data:* Largest page: 223 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See dkd-de-de-pipeline-truncation-risk-pages.csv (4 pages).
- **SPA Shell** - Pass · 5/5
  - *Means:* Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does.
  - *Data:* Max gap score: 7. 0 means served and rendered match.
- **Soft 404** - Pass · 5/5
  - *Means:* Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs.
  - *Data:* 0 soft-404 page(s) detected.
- **Boilerplate Burial** - Pass · 5/5
  - *Means:* Navigation and chrome do not dominate the page; main content is reachable without wading through overhead.
  - *Data:* Highest boilerplate-to-content ratio: 0.47. Threshold: < 10 (and < 80 KB of inline head bytes).
- **Tabbed Disclosure** - Pass · 5/5
  - *Means:* No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML.
  - *Data:* 0 page(s) with tab widgets.
- **Delayed Content Start** - Pass · 1/1
  - *Means:* Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily.
  - *Data:* Content starts at up to 34% of the document on some pages. Check applied to 1 of 5 audited pages; the remaining 4 pages were skipped by a size or eligibility gate.
- **Broken Code Fences** - Pass · 5/5
  - *Means:* All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples.
  - *Data:* 0 page(s) with unbalanced fenced code blocks.
- **HTTP Content Negotiation (Vary)** - Fail · 2/5
  - *Means:* The server advertises content negotiation via Vary: Accept. Agents that ask for a different Accept header may receive different content than the browser version.
  - *Data:* 2 page(s) advertise format negotiation. See dkd-de-de-pipeline-http-content-negotiation-(vary)-pages.csv (2 pages).
- **Cross-Host Redirect** - Fail · 5/5
  - *Means:* 3 page(s) redirect to a different host. Agents that enforce same-origin policy may not follow these chains.
  - *Data:* 3 page(s) cross origin during redirect. See dkd-de-de-pipeline-cross-host-redirect-pages.csv (5 pages).
- **Generic Headings** - Pass · 5/5
  - *Means:* Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction".
  - *Data:* Worst case: 0% generic headings.
- **Body Content Ratio** - Pass · 1/1
  - *Means:* Actual prose content averages 46% of served bytes - well above the 30% threshold. Pages are content-heavy, not overhead-heavy.
  - *Data:* Average: 46%. Threshold: 30%. Check applied to 1 of 5 audited pages; the remaining 4 pages were skipped by a size or eligibility gate.
- **Inline Tag Bloat** - Fail · 5/5
  - *Means:* 5 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches.
  - *Data:* 5 element(s) > 500 bytes. Largest single-page inline CSS block: 2548 B. Largest single-page inline JS block: 841 B. See dkd-de-de-pipeline-inline-tag-bloat-pages.csv (5 pages).
- **Head Weight** - Pass · 1/1
  - *Means:* Head bytes are a small fraction of each page. Agents reach body content quickly.
  - *Data:* Max ratio: 0.13. Average: 0.03. Threshold: 0.50. Check applied to 1 of 5 audited pages; the remaining 4 pages were skipped by a size or eligibility gate.

**Pipeline Survivability score:** 76/100

Across the audited set, we identify four resilience checks that present opportunities to strengthen how machines read and process dkd.de: Truncation Risk, Content Negotiation, Cross-Host Redirect, and Inline Tag Bloat. When machines encounter redirect chains and tag bloat, they may drop content before completing a full parse, reducing how reliably the page is indexed or cited. Resolving the Cross-Host Redirect pattern, which we record across all five audited pages, would have the largest single effect on pipeline survivability.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Rendered HTML | 53/100 (medium) | 26 bare divs · 54% ratio · depth 3 | `div.text-columns__column` (67), `div.text-columns.text-columns--` (21), `div.textpic.textpic--inside` (12), `div.text-columns.text-columns--above` (6), `div.blog-card__info` (4) |

On the audited page at https://dkd.de/de/kontakt/, the rendered surface carries a bare-div ratio of 54% (26 of 48 elements), which means machines lose structural context on that page and must fall back on positional inference to determine meaning. The pattern here is surface-wide rather than structurally deep: the deepest bare chain reaches only 3 levels, yet the ratio remains high, which points to untyped component frameworks where individual blocks such as `div.text-columns__column` and `div.textpic.textpic--inside` are assembled without semantic wrapper roles rather than being buried in deeply nested trees. The most cost-effective first move is to wrap the obvious page landmarks (header, nav, main, footer, aside) and assign meaningful roles or class names to the high-frequency component containers so the bare-div ratio falls without any structural reworking of the existing layout.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | Yes (2/5) | Prevents XSS and injection attacks |
| X-Frame-Options | Yes (3/5) | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

Five standard security headers are defined; coverage across the audited pages varies by header type. This section details which headers are present and which pages carry gaps.

**Coverage:** 0 of 5 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/de`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/de/kontakt/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/de/leistungen/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/de/leistungen/enterprise-websites/`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame No · X-Content-Type Yes
- **`/de/typo3-agentur/`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame No · X-Content-Type Yes

HTTPS: 5/5 | HSTS: 5/5 | CSP: 2/5 | X-Frame-Options: 3/5 | X-Content-Type-Options: 5/5

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 100% | - |
| MX governance tags | 0% | 5 |
| Open Graph tags | 100% | - |
| Twitter Card tags | 100% | - |
| Skip link | 0% | 5 |
| llms.txt link tag | 0% | 5 |
| Canonical URL | 100% | - |
| Exactly 1 H1 | 100% | - |
| Code examples present | 0% | 5 |
| Self-contained sections | 100% | - |
| Error/troubleshooting docs | 0% | 5 |
| Lighthouse heading compliance | 20% | 4 |

**Overall Consistency:** 62%

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

| Type | Bytes per fragment | Appears on N pages | Preview |
|------|-------------------:|-------------------:|---------|
| css | 19 | 10 | .st0{fill:#B6D644;} |
| css | 2478 | 5 | /*InlineDefaultCss*/ /* default styles for extension "tx_for |
| css | 4288 | 3 | .rek-prediction .rek-style p{margin:0}.rek-prediction .rek-s |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `dkd-de-de-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src=".">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Accessibility legislation has converged on ISO 14289-1 (PDF/UA) as the technical baseline across major markets, with the EAA (Directive (EU) 2019/882, in force 28 June 2025) serving as the most precisely codified instance of a pattern that also runs through Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada. The structural requirement is equally a machine-readability requirement: an untagged or image-based PDF is opaque to search crawlers, AI systems, and automated pipelines in the same way that non-semantic HTML is, while a properly tagged PDF with a complete structure tree gives machines the same extractable text and entity surface that well-formed HTML provides.

We linked no PDFs from the 5-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Resolve Priority 1 findings**: address duplicate ID attributes on all five audited pages to restore WCAG 4.1.1 compliance.
2. **Implement Priority 2-3 improvements**: add semantic structure and discovery files to lift Discovery Readiness from 25/100 and restore machine readability.
3. **Consider optional enhancements**: optional patterns such as sameAs links and potentialAction declarations that strengthen citation confidence.

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2 (Compliance Risk) | Priority 1, 2 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | P1, P2, P3, P4 (P1–P4) | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://dkd.de achieves a perfect Accessibility score, demonstrating that human visitors are well served at every page we reviewed. SEO follows closely at 92/100, yet Discovery Readiness at 25/100 and Structured Data at 66/100 show where the greatest opportunity lies, particularly in making the site's content reliably readable and citable by machines. We invite the https://dkd.de team to explore the findings that follow and take the next steps toward closing those gaps.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 79/100 | Excellent |
| Accessibility | 100/100 | Excellent |
| SEO (all pages) | 92/100 | Excellent |
| SEO (content pages) | 82/100 | Excellent |
| MX Stack Completeness | 62/100 | Good |
| Structured Data Quality | 66/100 | Good |
| Commerce Visibility | 10/100 | Needs Improvement |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 87/100 | Excellent |
| Semantic Ratio | 21% | Needs Improvement |
| Agent Readability | 67/100 | Good |
| Pipeline Survivability | 76/100 | Excellent |
| Cross-Page Consistency | 62% | Good |

---

## Appendix A: Pages Audited

- **`/de`**: SEO 82 · A11y 100 · Back 85 · Served 83 · Rendered 77
- **`/de/kontakt/ (nav)`**: SEO 85 · A11y 100 · Back 85 · Served 68 · Rendered 70
- **`/de/leistungen/ (nav)`**: SEO 92 · A11y 100 · Back 85 · Served 83 · Rendered 85
- **`/de/leistungen/enterprise-websites/ (nav)`**: SEO 99 · A11y 100 · Back 95 · Served 83 · Rendered 83
- **`/de/typo3-agentur/ (nav)`**: SEO 100 · A11y 100 · Back 95 · Served 76 · Rendered 76

Pages marked (nav) are navigational: they route visitors to content rather than containing it, and are excluded from the SEO content average. Content-pages SEO average: 82/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: 359 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 359   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |
| URL variant links (same canonical) | 6     |

---

## Appendix C: Image Optimisation

Across the audited set, we reviewed 37 images in total. The format breakdown shows 8 PNG files and 1 JPEG, with the remaining 28 images in other or unrecognised formats. Alt-text coverage is complete: all 37 images carry descriptive alt text, leaving no gaps for screen readers or machines parsing image meaning.

Every image across the audited set carries a loading="lazy" attribute, and we found no images set to loading="eager" nor any left without a loading attribute. That last point is worth noting because omitting the attribute is not equivalent to eager loading; the browser applies its own heuristics and may defer or load images unpredictably. Here, the team has been consistent, and no such ambiguity exists across the audited pages.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **TYPO3 CMS**. The main audit uses TYPO3 CMS-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 5 pages analysed | Platform: TYPO3 CMS | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `dkd-de-de-report.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `dkd-de-de-report.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload dkd-de-de-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the organisation distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it first to ourselves.

---

**Date:** 27 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*Read the books: <https://mx.allabout.network/books/index.html>*
