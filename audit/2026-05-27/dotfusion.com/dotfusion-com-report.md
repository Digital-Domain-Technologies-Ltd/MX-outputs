---
title: "Dotfusion: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-27"
modified: "2026-05-27"
client: "Dotfusion"
clientSlug: "dotfusion-com"
clientUrl: "https://dotfusion.com"
reportId: "dotfusion-com-WEB-AUDIT-20260527"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-27"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Dotfusion"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 55
accessibilityScore: 74
seoScore: 85
llmSuitabilityScore: 100
totalIssues: 99
pagesAudited: 12
version: "1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Dotfusion. Focus on the highest-leverage MX opportunities surfaced by the audit."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-05-27/dotfusion.com/dotfusion-com-report.pdf"
    description: "Generate PDF audit report for Dotfusion"
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
    sidecar: "dotfusion-com-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "dotfusion-com-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

# Dotfusion: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 27 May 2026\
**Report ID:** dotfusion-com-WEB-AUDIT-20260527

---

## About This Report

We audited 12 pages across dotfusion.com's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** Here we look at the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 12 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead, because Common Crawl (the archive underpinning most major LLM training datasets) prioritises HTML for its LLM-training subsets, so a plain-text llms.txt is unlikely to enter training corpora at the same rate as the rest of the site. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **55**/100 | `##########--------` |
| Accessibility | **74**/100 | `#############-----` |
| SEO | **85**/100 | `###############---` |
| Machine Suitability | **100**/100 | `##################` |
| MX Stack Completeness | **43**/100 | `########----------` **(!)** |
| Agent Readability | **79**/100 | `##############----` |
| Pipeline Survivability | **95**/100 | `#################-` |

We audited 12 pages from dotfusion.com's 148-page sitemap and found a strong foundation built for human visitors. SEO comes in at 85/100 (Excellent), reflecting well-structured content, clean metadata, and the kind of technical groundwork that search crawlers reward. The Next.js platform is serving pages capably, and the breadth of schema types already deployed across the audited set tells us the team has been thoughtful about structured markup.

Before we turn to machine experience, we want to name accessibility as a Priority 1 compliance item. Across the audited set we recorded 99 raw instances of WCAG AA issues spanning 62 distinct issue types, and Pa11y flags every one of those instances as critical. The opportunity here is meaningful but tractable: 65 of those instances trace to 7 recurring template patterns, which means a single theme-level correction per pattern clears a large share of the raw count in one pass. Beyond compliance, removing these barriers widens access for every visitor who relies on assistive technology. The headline opportunity for machines sits one step further along the same road. dotfusion.com currently sits at MX Readiness Level 1 (Discoverable), meaning machines can find and parse the audited pages but cannot yet cite them as attested sources. Discovery Readiness scores 20/100 and Structured Data Quality at 44/100 already point to room to strengthen the machine-readable layer, but the decisive lever is different: no MX governance fields were detected across the audited set. Adding full MX fields, governance, and provenance metadata is what moves the needle from discoverable to citation-ready. Raising MSC above 60 and DR above 40 completes the picture.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, dotfusion.com delivers a solid experience for human visitors, with SEO sitting at 85/100 (Excellent) and Performance in the Good band, though Accessibility at 74/100 represents the clearest area for improvement given the concentration of issues tracing to repeating template patterns.

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Excellent | A | - |
| Performance | Good | B | median 83 |
| Accessibility (WCAG) | Good | B | median 81 |
| Trust and Credibility | Excellent | A | - |

### Machine Experience

Across the audited set, machines can discover and parse content reliably, though the low Discovery Readiness, Structured Data Quality, and MX Stack Completeness scores signal that citation-readiness remains a future state to unlock.

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 20/100 | Needs Improvement | D | median 25 |
| Structured Data Quality | 44/100 | Could Be Better | C | median 57 |
| MX Stack Completeness | 43/100 | Could Be Better | C | median 50 |
| Pipeline Survivability | 95/100 | Excellent | A | median 90 |

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

**Evidence:** MX Stack Completeness 43/100 | Structured Data Quality 44/100 | Discovery Readiness 20/100 | Consistency 45%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so agents can cite as well as discover. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, dotfusion.com demonstrates a strong foundations worth building on: SEO performance sits at 85/100, HTTPS and HSTS are in place, and a rich vocabulary of structured data types is already deployed across the audited pages. These strengths give the team clear groundwork to carry forward as we address the gaps identified in the sections ahead.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Good | Good - 2457ms average load time |
| SEO (content pages) | 84 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 2/5 | 2/5 headers present (CSP, X-Frame-Options, X-Content-Type-Options absent); 0 of 12 URLs carry all five |
| Structured Data | 44 | Could Be Better - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 94 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 45% | 45% - same metadata patterns across every page |
| Agent access | 7/7 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.

---

## Findings

### At a Glance

We have ordered these findings as opportunities, prioritised by how directly each gap blocks machines from discovering, parsing, and acting on content. Discovery and structured data lead because they affect every downstream lens; catalogue visibility and MX stack completeness follow as the surfaces where incremental gains compound most quickly.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Unlabelled Anchor Links, WCAG 4.1.2 (12 of 12 pages) | Compliance Risk | High | Low | Screen reader users may miss navigation links with no discernible name |
| 2 | reCAPTCHA Textarea Has No Accessible Name, WCAG 4.1.2 and 1.3.1 (12 of 12 pages) | Compliance Risk | High | Low | Screen reader users may miss form fields entirely and are less likely to complete submissions |
| 3 | Form Input Fields Have No Accessible Name, WCAG 4.1.2, #name and #company (8 of 12 pages) | Compliance Risk | High | Low | Screen reader users may miss unlabelled inputs and risk missing form completion cues |
| 4 | Semantic Structure 31/100 (269 bare divs of 369 total elements, worst page: dotfusion.com/about) | Compliance Risk | High | Medium | Screen readers and machines are less likely to parse document structure correctly |
| 5 | Security Headers, 2 of 5 present across all 12 audited URLs | Cross-cutting | High | Low | Visitors and downstream tools risk missing basic transport-security assurances |
| 6 | Discovery Readiness 20/100, llms-full.txt, agent-card.json, ai.txt, and humans.txt absent | AI Opportunity | High | Low | Machines may miss dotfusion.com as a citable, agent-navigable source |
| 7 | Structured Data Quality 44/100 (Could Be Better) | AI Opportunity | Medium | Medium | Machines are less likely to surface dotfusion.com content in structured responses |
| 8 | MX Stack Completeness 43/100, MX governance fields absent from page frontmatter | AI Opportunity | Medium | Medium | Machines may miss content classification signals and reduce agent confidence in attribution |

---

**Priority 1: Unlabelled Anchor Links, WCAG 4.1.2 (12 of 12 pages)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, each page carries at least one anchor element with a valid href but no discernible link text, violating WCAG 4.1.2. The pattern originates in the site header template (selector: `#site-header > div:nth-child(2) > div > div > div:nth-child(…`), meaning a single template edit resolves all 12 instances. Screen reader users encounter a link whose purpose cannot be determined from its name alone.

**What to change and why:**

- Supply a descriptive accessible name for each affected anchor in the site header template. This directly addresses WCAG 4.1.2 (Name, Role, Value) and ensures screen reader users hear a meaningful label rather than a bare URL or silence.
- Because the pattern recurs on all 12 audited pages and traces to the header template, a single theme-level edit propagates the fix across every page that shares that template, making the effort disproportionately high-value relative to its scope.
- Once labelled, the links also become more reliably indexed by machines parsing the document outline, which improves the accuracy of internal link mapping.

**Effort:** Low

---

**Priority 2: reCAPTCHA Textarea Has No Accessible Name, WCAG 4.1.2 and 1.3.1 (12 of 12 pages)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, the reCAPTCHA response textarea (`#g-recaptcha-response-100000`) carries no accessible name and no associated label, triggering both WCAG 4.1.2 and WCAG 1.3.1 gaps on all 12 audited pages. Screen reader users encounter a form field with no announced purpose, creating a barrier to form submission. Because the reCAPTCHA widget is injected by Google's reCAPTCHA SDK at runtime, the element does not exist in dotfusion.com's own template.

**What to change and why:**

- Engage Google reCAPTCHA's support or SDK release notes for an updated widget version that ships with a native accessible name. This is the cleanest resolution because it addresses the root injection rather than patching around it.
- As an interim measure, a DOM-observer script can detect the injected textarea after it appears and programmatically associate an accessible name with it, satisfying WCAG 4.1.2 and 1.3.1 without modifying the reCAPTCHA SDK itself.
- Resolving these two criteria together on 12 pages removes a double-violation pattern that presents a meaningful compliance exposure, particularly in jurisdictions where WCAG 2.1 AA conformance is expected of commercial contact forms.

**Effort:** Low

---

**Priority 3: Form Input Fields Have No Accessible Name, WCAG 4.1.2, #name and #company (8 of 12 pages)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, the `#name` and `#company` form inputs carry no accessible name on 8 of the 12 audited pages, violating WCAG 4.1.2. A screen reader user tabbing into either field receives no announcement of the field's purpose and may skip or misuse the input. The pattern is template-level, so a single edit to the form partial resolves all 8 instances simultaneously.

**What to change and why:**

- Associate a programmatic label with each of the `#name` and `#company` inputs in the form template. This satisfies WCAG 4.1.2 and ensures screen reader users receive the field's purpose when focus arrives.
- Labelling these inputs also improves autofill reliability in modern browsers, which increases form-completion rates among all users, not only those relying on assistive technology.
- Because the fix is template-scoped, the effort is low relative to the number of pages it corrects, and it removes a pattern that contributes to the current Accessibility score of 74/100.

**Effort:** Low

---

**Priority 4: Semantic Structure 31/100 (269 bare divs of 369 total elements, worst page: dotfusion.com/about)**

**Bucket:** Compliance Risk

**Finding:** We score Semantic Structure at 31/100, a band that indicates a structurally thin document outline across the audited set. The most acute instance appears on https://dotfusion.com/about, where 269 of 369 total elements are bare divs. Because dotfusion.com shares a common template across most pages, the structural pattern seen on the about page is likely representative of the wider set, though the quoted figures are specific to that URL. Machines and assistive technologies that derive meaning from document structure receive few semantic landmarks to navigate, and screen reader users may find the page outline sparse.

**What to change and why:**

- Replace layout-only div containers in the page template with appropriate sectioning elements where the content clearly represents a distinct region. This directly improves the structural signal available to both screen readers (addressing WCAG 1.3.1 Programmatic Relationships) and machines parsing the document for content blocks.
- Introduce landmark roles for primary regions such as the header, navigation, main content area, and footer if those are currently implemented as bare divs. Landmarks are the primary navigation mechanism for screen reader users and also help machines identify the most authoritative content region on each page.
- Prioritise https://dotfusion.com/about as the first page to address, given it presents the worst-case ratio. Fixes applied at the shared template layer will propagate to other pages in the audited set simultaneously, multiplying the impact of a single round of work.
- Improving semantic structure also supports schema extraction accuracy: machines that parse structured data from page content are more reliable when the surrounding document outline is coherent, which moves the Structured Data Quality score of 44/100 forward over time.

**Effort:** Medium

---

**Priority 5: Security Headers, 2 of 5 present across all 12 audited URLs**

**Bucket:** Cross-cutting

**Finding:** Across the audited set, only 2 of the 5 expected security headers (HTTPS and HSTS) are present. The remaining three headers are absent on every one of the 12 audited URLs. Missing transport and content-security declarations reduce the assurance dotfusion.com provides to browsers, downstream proxies, and security-scanning tools, and may affect how cautious machines treat the domain when evaluating source trustworthiness.

**What to change and why:**

- Add the three absent security headers at the server or CDN configuration layer. Doing so at the infrastructure level means every page inherits the headers without per-template changes, which keeps the effort low relative to the coverage gained.
- A complete security header set is increasingly a baseline signal for tools that assess domain authority and trustworthiness, including some machine-readable pipelines that factor header completeness into source confidence ratings.
- Completing the header set also removes a visible gap in any third-party security scan or compliance checklist that clients or procurement teams may run against dotfusion.com.

**Effort:** Low

---

**Priority 6: Discovery Readiness 20/100, llms-full.txt, agent-card.json, ai.txt, and humans.txt Absent**

**Bucket:** AI Opportunity

**Finding:** We score Discovery Readiness at 20/100 (Needs Improvement). Of the five standard discovery artefacts, only llms.txt is present on dotfusion.com; llms-full.txt, agent-card.json, ai.txt, and humans.txt are all absent. Machines that follow agent-discovery conventions will find dotfusion.com partially navigable but will lack the fuller content index, agent routing instructions, and governance signals that the absent artefacts provide. At this readiness level, machines can discover and parse pages but cannot yet treat dotfusion.com as an attested, citable source.

**What to change and why:**

- Publish llms-full.txt to give machines a comprehensive, curated index of dotfusion.com's content. This is the highest-leverage addition because it extends the signal already established by the present llms.txt, moving Discovery Readiness forward without requiring new infrastructure.
- Add agent-card.json to declare dotfusion.com's agent-facing capabilities and contact points. This artefact is the primary mechanism by which machines identify whether a domain actively supports agent interaction, and its absence means routing decisions default to generic heuristics.
- Add ai.txt to supply machine-access policy signals. Without it, machines apply default assumptions about crawlability and content use that may not reflect dotfusion.com's actual preferences.
- Add humans.txt to round out the governance layer. While its direct machine-influence is lower than the other artefacts, its presence contributes to the MX Stack Completeness score of 43/100 and signals a considered approach to both human and machine audiences.

**Effort:** Low

---

**Priority 7: Structured Data Quality 44/100 (Could Be Better)**

**Bucket:** AI Opportunity

**Finding:** We score Structured Data Quality at 44/100, placing dotfusion.com in the Could Be Better band. A range of schema types is already present across the audited set, including Organisation, Service, FAQPage, BreadcrumbList, and AggregateRating among others. The opportunity is to deepen the coverage and interconnection of those types so that machines reading the structured data can build a more confident, attributed picture of dotfusion.com's services, credentials, and authority. At 44/100, machines are less likely to surface dotfusion.com content in structured responses where competing sources carry denser graphs.

**What to change and why:**

- Review the existing Organisation and ProfessionalService instances for completeness of key properties such as sameAs, url, and foundingDate. Richer entity properties give machines the cross-reference signals they need to disambiguate dotfusion.com from similar businesses, improving citation confidence.
- Where AggregateRating is present, ensure the supporting Review or rating properties are populated in full. Incomplete rating objects reduce the likelihood that machines surface the rating in rich results, limiting the commercial visibility the schema was added to enable.
- Audit the relationship between the existing BreadcrumbList, WebPage, and WebSite types to confirm they are linked correctly. Well-connected graph nodes raise the overall quality signal that machines use to judge whether the structured data faithfully represents the page content, which is the primary driver of the SDQ score.

**Effort:** Medium

---

**Priority 8: MX Stack Completeness 43/100, MX Governance Fields Absent from Page Frontmatter**

**Bucket:** AI Opportunity

**Finding:** We score MX Stack Completeness at 43/100 (Could Be Better). Two categories contribute to this score: discovery artefacts (addressed in Priority 6) and MX governance fields in page frontmatter, specifically canonicalUri, contentType, audience, and status. The governance fields are absent across the audited set, which means machines processing dotfusion.com pages cannot resolve content classification, intended audience, or publication status from the page metadata directly. Machines that use these signals for routing and confidence scoring are less likely to attribute content accurately.

**What to change and why:**

- Add canonicalUri to page frontmatter on each page in the audited set. Without it, machines encountering duplicate or near-duplicate paths may resolve to the wrong canonical and reduce the authority attributed to dotfusion.com's preferred URL.
- Add contentType and audience fields so that machines can classify pages without inferring from body text alone. Explicit classification improves the accuracy with which agent pipelines route content to the right context, such as a service page versus an educational resource.
- Add status to signal whether a page is current, draft, or retired. Machines that cannot determine status from metadata may treat outdated pages as authoritative, which introduces noise into any agent response that draws on dotfusion.com content.
- Together with the discovery artefact additions in Priority 6, completing the governance fields is the most direct path to raising MX Stack Completeness from 43/100 toward the Citation-ready threshold.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Organisation**: adding sameAs properties to the Organisation entities already in the audited set connects dotfusion.com to external knowledge-graph nodes (such as Wikidata or LinkedIn), giving machines a verifiable anchor when attributing claims to the brand.

- **potentialAction on Organisation**: the Organisation entities across the audited set could carry potentialAction descriptors to advertise contact or enquiry capabilities, allowing machines to surface actionable routes to dotfusion.com directly within agent-generated responses.

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
| Google-Extended (Google AI-training opt-out) | `Google-Extended` | 200 | Accessible |
| CCBot (Common Crawl) | `CCBot/2.0` | 200 | Accessible |
| Plain request (no UA) | *(empty)* | 200 | Accessible |

**Summary:** All 8 tested agents can access the site. No bot protection blocks AI agents at inference time.

### Markdown Content Negotiation

| Check | Result |
|-------|--------|
| URL probed | https://dotfusion.com |
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
| HTTP status code | 200 (soft 404) |
| Custom error page | Yes, branded page with navigation |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | No |
| Navigation back to valid content | No |
| Internal navigation links | None: no links to valid content |
| MX governance tags | Absent |
| Schema.org JSON-LD | Absent (correct: should not claim valid page) |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://dotfusion.com/services/answer-engine-optimisation-agency-dotfusion`. A first-time visitor sees the cold-cache cost: the crawler recorded 4405 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes that followed returned 196ms, 88ms, 101ms, giving a returning-visitor median of **101 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://dotfusion.com/services/contentful-development-agency`. A first-time visitor sees the cold-cache cost: the crawler recorded 2665 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 80ms, 115ms, 121ms, giving a returning-visitor median of **115 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** The slowest page returned slowly on its first cold-cache visit but is served acceptably under cache-busted re-probes; first-time visitors carry a cold-origin cost that the returning-visitor median hides.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /

Sitemap: https://dotfusion.com/sitemap.xml
```

*The full `robots.txt` (4 lines) is preserved alongside this report as `dotfusion-com-robots-txt.txt`.*

The robots.txt file is present and declares no disallow paths, meaning machines are free to crawl the full site without restriction. One sitemap reference is included, giving crawlers a direct route to the URL inventory.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 148 entries | Matches crawl count |
| `<lastmod>` | Yes | All identical |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | No | Absent |

**Sitemap grade:** Partial

The sitemap declares 148 URLs and earns a Partial grade, carrying both lastmod and changefreq values but omitting priority attributes across all entries.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found an llms.txt at dotfusion.com, and the file carries a site description, which gives machines a useful starting point. However, the file lacks both a page inventory and a content policy, and we recommend extending it to include both so that machines querying the host receive a complete, structured picture of the content available and any access constraints that apply.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt at dotfusion.com; the endpoint returns a 404, no reference to it appears in the sitemap, and no discovery link is present in the homepage head. We frame this as a conditional recommendation because adding it would depend on the true depth of the site's content, which the audited sample does not yet measure pending a fuller content inventory.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` - the URL returned HTTP 200 but the body is the site's standard error page (soft-404), not a valid agent card. The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

| Path | Purpose | Quality |
|------|---------|---------|
| *(38 paths - see sidecar)* | Various | Soft 404 - same error page template as /zebedee.html (URL slug differs in embedded JS) |

**Soft 404s detected (41 paths):** The server returns a custom error page with HTTP 200 for these paths. AI agents and crawlers rely on HTTP status codes - a 200 response signals success, so agents treat the error page body as if it were a real discovery file. The server should return HTTP 404 (or 301 to a canonical URL) for paths it does not implement. This is a web server configuration change, not a content change.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| Question | 6 | 100% | 100% | Answer |
| Answer | 6 | 100% | 100% | - |
| Service | 8 | 60% | 6% | Organisation, OfferCatalog |
| Offer | 5 | 0% | 0% | Service |
| ListItem | 5 | 100% | 100% | - |
| Audience | 2 | 100% | 100% | - |
| Country | 5 | 100% | 100% | - |
| FAQPage | 6 | 100% | 100% | - |
| Organisation | 4 | 100% | 100% | ImageObject, EducationalOccupationalCredential, PostalAddress, OfferCatalog |
| OfferCatalog | 5 | 100% | 100% | - |
| BreadcrumbList | 4 | 100% | 100% | - |
| PostalAddress | 2 | 100% | 100% | - |
| WebSite | 3 | 100% | 8% | Organisation |
| ContactPoint | 1 | 100% | 100% | - |
| WebPage | 2 | 100% | 100% | WebSite, Thing, Service |
| Thing | 2 | 100% | 100% | - |
| ImageObject | 1 | 100% | 100% | - |
| EducationalOccupationalCredential | 1 | 100% | 100% | Organisation |
| ProfessionalService | 1 | 100% | 100% | PostalAddress, GeoCoordinates, OpeningHoursSpecification, Organisation |
| GeoCoordinates | 1 | 100% | 100% | - |
| OpeningHoursSpecification | 1 | 100% | 100% | - |
| ItemList | 1 | 100% | 100% | - |
| AggregateRating | 1 | 100% | 100% | Organisation |

**Structured Data Quality:** 44/100\
**Coverage:** 8 pages with JSON-LD out of 12 total (67%)\
**Unique types:** 23

Across the 12 pages we audited, structured data is limited. Machines cannot reliably extract entity data from these pages. Adding Schema.org JSON-LD with required properties is the highest-impact improvement; a wider audit would likely identify similar gaps across the rest of the estate.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 7 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 6 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 7 | 15 | Average across entities |
| Entity richness | 5 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 9 | 15 | Nested @type values + @id linking |
| Linked-data signals | 3 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 7 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **44** | **100** | |

---

## Structured Data Findings

We identified 67 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`dotfusion-com-structured-data-findings.csv`](dotfusion-com-structured-data-findings.csv). The 67 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| Service | recommended | image | 8 | 8 | Service has no representative image |
| Service | recommended | offers | 8 | 8 | Service has no Offer block; pricing structure invisible |
| Offer | required | price | 5 | 5 | Offer has no price - agents cannot compare against alternatives |
| Offer | required | priceCurrency | 5 | 5 | Offer has no currency - agents cannot interpret the price (USD vs GBP vs EUR) |
| Offer | recommended | availability | 5 | 5 | Offer has no in-stock signal; agents cannot tell if buyable |
| Offer | recommended | seller | 5 | 5 | Offer has no seller attribution |
| Offer | recommended | itemCondition | 5 | 5 | Offer has no new/used condition declared |
| Offer | recommended | url | 5 | 5 | Offer has no purchase URL; agents cannot deep-link to checkout |
| Service | required | provider | 5 | 5 | Service has no provider attribution |
| Service | recommended | areaServed | 5 | 5 | Service has no geography declared; agents cannot filter by region |

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

No provenance-gap blockers detected on the audited set. Pages clear the citation-readiness floor on the structural primitives we measure here.

_No blockers._

Any page contributing to a blocker above is capped at **Discoverable** readiness in the MX Readiness Level table below, regardless of its other scores. Citation readiness requires a verifiable claim to cite.

---

## Marker Reachability

| Marker   | In served | In rendered | In head | Reachable <250KB | Injected by JS |
|----------|-----------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Yes | Yes | Yes | Yes | Yes |
| Microdata (itemscope) | Yes | Yes | Body | Yes | No |
| Open Graph meta tags | Not present | Not present | n/a | n/a | n/a |
| Twitter Card meta tags | Not present | Not present | n/a | n/a | n/a |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Not present | Not present | n/a | n/a | n/a |

One or more markers appear only in the rendered DOM: they are invisible to server-side AI agents (ChatGPT, Claude, Perplexity). Move these markers into the served HTML so every agent sees them.

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
**To reach the next level:** Fill in the required and recommended Schema.org properties for each typed block (see structured_data_findings.csv for the specific gaps). Connect related commerce entities: either inline (Product with nested Brand, Offer, AggregateRating, Review) or via @id references to canonical entities. Ensure every @type value is a valid Schema.org type.

The Structured Data Quality (SDQ) score and the Schema Maturity Level measure two different things. SDQ counts the properties present and validates them against Schema.org expectations; the level captures whether those properties are connected (cross-entity wiring, linked-data signals, external authority identifiers). Both numbers above are reported as-is from the audit data.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. A break at any stage propagates to all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Pass | 89 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 42 | Schema.org: ItemList, ListItem, ListItem (100% required properties) |
| 3 | Search & Compare | Pass | 60 | Commerce schema with 0 supporting patterns |
| 4 | Price Understanding | Pass | 67 | Pricing visible |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

Partially Compatible; Purchase Confidence is N/A for this site type.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Fail · 5/12
  - *Means:* 5 page(s) flag for truncation risk; 4 of them exceed the 250 KB hard ceiling, the rest place main content too far into the document. Agents with limited fetch windows may stop reading before reaching the main content.
  - *Data:* Largest page: 471 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See dotfusion-com-pipeline-truncation-risk-pages.csv (5 pages).
- **SPA Shell** - Pass · 12/12
  - *Means:* Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does.
  - *Data:* Max gap score: 15. 0 means served and rendered match.
- **Soft 404** - Pass · 12/12
  - *Means:* Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs.
  - *Data:* 0 soft-404 page(s) detected.
- **Boilerplate Burial** - Pass · 12/12
  - *Means:* Navigation and chrome do not dominate the page; main content is reachable without wading through overhead.
  - *Data:* Highest boilerplate-to-content ratio: 0.05. Threshold: < 10 (and < 80 KB of inline head bytes).
- **Tabbed Disclosure** - Pass · 12/12
  - *Means:* No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML.
  - *Data:* 0 page(s) with tab widgets.
- **Delayed Content Start** - Pass · N/M
  - *Means:* Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily.
  - *Data:* Content starts at up to 0% of the document on some pages.
- **Broken Code Fences** - Pass · 12/12
  - *Means:* All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples.
  - *Data:* 0 page(s) with unbalanced fenced code blocks.
- **HTTP Content Negotiation (Vary)** - Pass · 12/12
  - *Means:* The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents.
  - *Data:* 0 page(s) advertise format negotiation.
- **Cross-Host Redirect** - Pass · 12/12
  - *Means:* No cross-domain redirects. Agents follow internal redirects without host-boundary issues.
  - *Data:* 0 page(s) cross origin during redirect.
- **Generic Headings** - Pass · 12/12
  - *Means:* Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction".
  - *Data:* Worst case: 0% generic headings.
- **Body Content Ratio** - Fail · N/M
  - *Means:* Prose content averages only 8% of served bytes. Scripts, styles, and images dominate; agents get little signal per byte.
  - *Data:* Average: 8%. Threshold: 30%.
- **Inline Tag Bloat** - Pass · 12/12
  - *Means:* No `<style>` or `<script>` block exceeds the 500-byte threshold on any page. Head stays lean for agents that read head-first.
  - *Data:* 0 element(s) > 500 bytes. Largest single-page inline CSS block: 0 B. Largest single-page inline JS block: 0 B.
- **Head Weight** - Pass · N/M
  - *Means:* Head bytes are a small fraction of each page. Agents reach body content quickly.
  - *Data:* Max ratio: 0.00. Average: 0.00. Threshold: 0.50.

**Pipeline Survivability score:** 95/100

Across the audited set, Pipeline Survivability scores 95/100, with Truncation Risk standing as the one resilience check we flagged, appearing on five of the twelve pages we reviewed. When a page's content is liable to be cut short, machines reading it may lose context from the portions they never receive, reducing how reliably they can represent the page's full meaning. Addressing Truncation Risk across those affected pages would therefore be the single highest-impact step towards ensuring machines consistently receive and process complete content.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Rendered HTML | 31/100 (high) | 269 bare divs · 73% ratio · depth 5 | `div` (183), `div.flex.items-center` (57), `div.slick-slide.slick-cloned` (38), `div.input-container.flex` (28), `div.slick-slide` (15) |

On the audited page at https://dotfusion.com/about, we record a bare-div ratio of 73% across the rendered surface, meaning machines lose structural context and must rely on positional inference to determine meaning. The pattern here is surface-wide rather than deeply nested, with a maximum chain depth of 5, which points to a component framework or drag-and-drop build layer that emits unsemantic wrapper divs at scale rather than a single deeply nested template block. The most immediate opportunity is to wrap the obvious landmarks, header, nav, main, footer, and aside, with their corresponding semantic elements, and to replace the high-frequency anonymous utility divs with meaningfully named containers, which would reduce the bare-div ratio without requiring a layout restructure.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | No | Prevents MIME-type sniffing |

3 of the five standard security headers are absent on every audited response: Content-Security-Policy (CSP), X-Frame-Options, X-Content-Type-Options. Adding them at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 12 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/services`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/services/headless-cms-agency`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/services/contentful-development-agency`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/services/storyblok-development-agency`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/services/agility-cms-development-agency`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/services/answer-engine-optimisation-agency-dotfusion`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/industries`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/about`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/contact-us`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/privacy`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/jedi`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No

HTTPS: 12/12 | HSTS: 12/12 | CSP: 0/12 | X-Frame-Options: 0/12 | X-Content-Type-Options: 0/12

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 67% | 4 |
| MX governance tags | 0% | 12 |
| Open Graph tags | 0% | 12 |
| Twitter Card tags | 0% | 12 |
| Skip link | 0% | 12 |
| llms.txt link tag | 0% | 12 |
| Canonical URL | 100% | - |
| Exactly 1 H1 | 92% | `/contact-us` |
| Code examples present | 0% | 12 |
| Self-contained sections | 100% | - |
| Error/troubleshooting docs | 0% | 12 |
| Lighthouse heading compliance | 92% | `/contact-us` |

**Overall Consistency:** 45%

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

We found 12 identical inline fragment(s) repeated across multiple pages, totalling 538 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes per fragment | Appears on N pages | Preview |
|------|-------------------:|-------------------:|---------|
| js | 426 | 23 | (function(w,d,s,l,i){w[l]=w[l]\|\|[];         w[l].push({'gtm. |
| css | 14154 | 12 | :root{--toastify-color-light: #fff;--toastify-color-dark: #1 |
| js | 629 | 12 | !function(e,f){try{if(e.vector)return void console.log("Vect |
| js | 606 | 12 | !function(){var a=window.reb2b=window.reb2b\|\|[];if(!a.invoke |
| js | 372 | 12 | function vqTrackId(){return"01f314ab-30b2-4266-babd-523a8f57 |
| js | 341 | 12 | function initApollo(){var b=Math.random().toString(36).subst |
| js | 284 | 12 | (function(){window.ldfdr=window.ldfdr\|\|{};(function(c,d,a,b) |
| js | 281 | 12 | (function(){var a=document.createElement("script");a.id="cle |
| js | 253 | 12 | (function(b,c,e,f,a,d){_nQc=f;a=b.createElement(c);d=b.getEl |
| css | 34504 | 11 | @charset "UTF-8";.rhap_container{box-sizing:border-box;displ |

*Showing the top 10 of 11 duplicate fragments by occurrence count. The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `dotfusion-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src=".">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Accessibility legislation worldwide has converged on ISO 14289-1 (PDF/UA) as the shared technical baseline, with the EU's EAA (Directive (EU) 2019/882, in force 28 June 2025) as the most precisely codified instance alongside Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada. In parallel, an untagged or image-based PDF is opaque to machines entirely: search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from it, whereas a properly tagged PDF with a full structure tree is machine-readable in the same way that semantic HTML is.

We linked no PDFs from the 12-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: We recommend addressing the 99 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Semantic Structure improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4 (Compliance Risk) | Priority 1, 2, 3, 4 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | P1, P2, P3, P4, P5, P6, P7, P8 (P1–P8) | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://dotfusion.com performs well on search visibility, with SEO scoring 85/100, a result that reflects solid foundational work for human visitors. Discovery Readiness at 20/100 and Structured Data at 44/100 represent the clearest opportunities to extend that strength to machines, through richer metadata, discovery artefacts, and structured markup. We invite the team to read on and prioritise the steps that will carry https://dotfusion.com from human-ready to machine-ready.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 100/100 | Excellent |
| Accessibility | 74/100 | Good |
| SEO (all pages) | 85/100 | Excellent |
| SEO (content pages) | 84/100 | Excellent |
| MX Stack Completeness | 43/100 | Could Be Better |
| Structured Data Quality | 44/100 | Could Be Better |
| Commerce Visibility | 35/100 | Could Be Better |
| Discovery Readiness | 20/100 | Needs Improvement |
| Heading Quality | 94/100 | Excellent |
| Semantic Ratio | 12% | Needs Improvement |
| Agent Readability | 79/100 | Excellent |
| Pipeline Survivability | 95/100 | Excellent |
| Cross-Page Consistency | 45% | Could Be Better |

---

## Appendix A: Pages Audited

- **`/ (nav)`**: SEO 90 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/services`**: SEO 85 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/services/headless-cms-agency`**: SEO 87 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/services/contentful-development-agency`**: SEO 83 · A11y 70 · Back 85 · Served 100 · Rendered 100
- **`/services/storyblok-development-agency`**: SEO 86 · A11y 70 · Back 85 · Served 100 · Rendered 100
- **`/services/agility-cms-development-agency`**: SEO 87 · A11y 70 · Back 85 · Served 100 · Rendered 100
- **`/services/answer-engine-optimisation-agency-dotfusion`**: SEO 85 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/industries`**: SEO 91 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/about`**: SEO 87 · A11y 75 · Back 55 · Served 100 · Rendered 100
- **`/contact-us`**: SEO 67 · A11y 70 · Back 55 · Served 100 · Rendered 100
- **`/privacy`**: SEO 84 · A11y 80 · Back 55 · Served 100 · Rendered 100
- **`/jedi`**: SEO 82 · A11y 80 · Back 55 · Served 100 · Rendered 100

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 84/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: 252 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 252   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set, we examined 125 images in total. The format distribution skews heavily toward SVG, with 60 images in that format, followed by 38 PNG files and 3 WebP images. A further 24 images were recorded in other or unrecognised formats, and we found no JPEG images at all. Alt-text coverage stands at 99 images carrying descriptive text, representing 79.2% of the total; 26 images are missing alt attributes, a gap that affects both machine-readable content signals and users who rely on assistive technology.

On loading strategy, the picture across the audited set is one where the majority of images carry no loading attribute at all: 101 of the 125 images fall into this category. It is worth being precise here, because no attribute is not equivalent to eager loading. When a browser encounters an image with no loading attribute set, it applies its own heuristic, typically loading the image immediately if it is near the viewport and deferring others, but that behaviour is not guaranteed or consistent across browser engines. Only 24 images carry an explicit loading="lazy" declaration, and none carry loading="eager". Expanding explicit lazy declarations to images that are reliably below the fold, while setting eager on hero and above-the-fold images, would give the browser clear direction rather than leaving it to guess.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Next.js**. The main audit uses Next.js-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 12 pages analysed | Platform: Next.js | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `dotfusion-com-report.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `dotfusion-com-report.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload dotfusion-com-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the organisation distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it first to ourselves.

---

**Date:** 27 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*
