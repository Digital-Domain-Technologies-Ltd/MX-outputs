---
title: "Dkd: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-23"
modified: "2026-05-23"
client: "Dkd"
clientSlug: "dkd"
clientUrl: "https://www.dkd.de"
reportId: "dkd-WEB-AUDIT-20260523"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-23"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Dkd"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 70
accessibilityScore: 90
seoScore: 92
llmSuitabilityScore: 78
totalIssues: 527
pagesAudited: 7
version: "1.0"
confidential: true
mx:
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Dkd covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Dkd", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Dkd. Focus on the highest-leverage MX opportunities surfaced by the audit."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-05-23/dkd.de-de/dkd-report.pdf"
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
    sidecar: "dkd-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "dkd-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

# Dkd: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 23 May 2026\
**Report ID:** dkd-WEB-AUDIT-20260523

---

<!-- ERROR_REPORT_SECTION:START -->
<!-- ERROR_REPORT_SECTION:END -->

## About This Report

We audited 7 pages across www.dkd.de using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** This audit covers the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 7 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead; wrapping the raw text in a minimal HTML document with the content inside a `<pre>` block and returning `Content-Type: text/html` from the server or CDN edge makes the file more broadly interpretable across the machines we test against. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **70**/100 | `#############-----` |
| Accessibility | **90**/100 | `################--` |
| SEO | **92**/100 | `#################-` |
| Machine Suitability | **78**/100 | `##############----` |
| MX Stack Completeness | **62**/100 | `###########-------` |
| Agent Readability | **67**/100 | `############------` |
| Pipeline Survivability | **78**/100 | `##############----` |

We audited seven pages of www.dkd.de and found a great deal to respect in how www.dkd.de serves its human visitors. Performance leads the scorecard as the strongest dimension across the audited set, and an SEO score of 92/100 places www.dkd.de firmly in the Excellent band, reflecting disciplined on-page foundations: well-structured content, considered metadata, and a TYPO3 CMS implementation that delivers pages reliably.

Before turning to machine-readiness, we want to name accessibility as a Priority 1 compliance item. Across the audited set we recorded 527 raw instances of WCAG AA issues spanning 14 distinct issue types, all 527 flagged as critical by Pa11y. That figure is large, but the remediation picture is more manageable than it first appears: 408 of those instances trace to 64 recurring template patterns, meaning a single theme-level edit per pattern resolves every instance it generates. Addressing accessibility at the template layer is the first concrete step we recommend. The headline opportunity beyond accessibility is machine-readiness. Discovery Readiness sits at 25/100, Catalogue Visibility at 10/100, and Schema Maturity at Level 1 (Decoration), reflecting a site that machines can reach but cannot yet read with confidence. Structured Data Quality scores 65/100, and the additional structured data properties required for citation eligibility in agent-generated answers are absent. These scores represent a clear, concrete opportunity rather than an entrenched problem.

The AI Suitability score of 78/100 on served content shows that the underlying material is well-suited to machine consumption once machines can find and interpret it. The most direct lever available is Schema.org JSON-LD: it is readable by every agent regardless of rendering environment, it sits within the team's control at the CMS layer, and lifting it from Decoration toward richer structured descriptions would move the needle on both Structured Data Quality and Catalogue Visibility simultaneously. Adding the missing structured data properties, publishing llms.txt, and registering both in the sitemap are concrete steps that would move www.dkd.de toward citation eligibility in agent-mediated discovery.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, www.dkd.de delivers a strong human experience, with Performance, Accessibility and SEO all sitting in the Excellent band, though the volume of recurring accessibility patterns signals a clear opportunity at the template level.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Excellent | A |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can partially traverse and parse www.dkd.de, with pipeline survivability at 78/100 giving automated readers a reasonably stable content signal. Discovery readiness sits at 25/100 and structured data quality at 65/100, meaning consistent citation and deep semantic understanding are not yet supported by the current configuration.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 25/100 | Needs Improvement | D |
| Structured Data Quality | 65/100 | Good | B |
| MX Stack Completeness | 62/100 | Good | B |
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
| **→** | 1 | Discoverable | Deliberate metadata, publisher identified | Agents can discover | **←** |
|  | 2 | Citation-ready | Full MX fields, governance, provenance | Agents can cite and attribute |  |
|  | 3 | Comparable / Attested | Cryptographic attestation, cross-source verifiable | Agents can search, compare, recommend |  |
|  | 4 | Transactable | Registered, priced, SLA-backed, alive | Agents can understand pricing and transact |  |
|  | 5 | Purchase-confident | Third-party audited, fiduciary-grade | Agents can guarantee accuracy at purchase |  |

**Current Level:** 1: Discoverable

**Evidence:** MX Stack Completeness 62/100 | Structured Data Quality 65/100 | Discovery Readiness 25/100 | Consistency 64%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so agents can cite as well as discover. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, www.dkd.de demonstrates a strong foundations in the areas that matter most to both users and machines: SEO scores of 92/100 and an Accessibility score of 90/100 reflect deliberate, well-maintained standards that provide strong groundwork for the improvements we outline in the sections ahead.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent - 1294ms average load time |
| SEO (content pages) | 92 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | 4/5 headers present (X-Frame-Options absent); 0 of 7 URLs carry all five |
| Structured Data | 65 | Good - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 92 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 64% | 64% - same metadata patterns across every page |
| Agent access | 5/7 | 5 of 7 AI user-agents receive HTTP 200; Google-Extended, CCBot (Common Crawl) blocked |

**Positive patterns observed:**

- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.
- Body content ratio averages 50%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We present the following findings as opportunities prioritised by impact, with discovery and machine-readability gaps leading the order because they block every downstream channel, from search crawlers to AI citation engines. Structured data depth, catalogue visibility, and stack completeness follow in sequence, each representing a concrete area to strengthen across the audited set.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Duplicate ID Attributes on 5 IDs, WCAG 4.1.1 (accessibility, account, alarm, article, bell), 7 of 7 pages | Compliance Risk | High | Low | Assistive tech users may receive incorrect focus or navigation signals on every audited page |
| 2 | Semantic Structure 53/100, Rendered (worst page: /de/kontakt, 26 of 48 bare divs) | Compliance Risk | Medium | Medium | Screen readers and machines are less likely to interpret page regions correctly |
| 3 | Security Header Gap, X-Frame-Options Absent, 7 of 7 pages | Cross-cutting | High | Low | Browsers may not block framing attempts; users risk clickjacking exposure |
| 4 | Discovery Readiness 25/100, Five Artefacts Absent (llms.txt, llms-full.txt, agent-card.json, ai.txt, humans.txt) | AI Opportunity | High | Medium | Machines may miss www.dkd.de entirely when building answer sets and citations |
| 5 | Structured Data Quality 65/100, Schema Maturity at Decoration Level | AI Opportunity | Medium | Medium | Machines are less likely to verify entity relationships or surface rich results |
| 6 | MX Stack Completeness 62/100, Discovery Artefacts and Frontmatter Fields Absent | AI Opportunity | Medium | Medium | Agent pipelines risk missing structured context on canonicalUri, contentType, audience, and status |

---

**Priority 1: Duplicate ID Attributes, WCAG 4.1.1 (IDs: accessibility, account, alarm, article, bell)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, we identify five ID values ("accessibility", "account", "alarm", "article", and "bell") each appearing more than once per page, across all 7 audited pages. WCAG 4.1.1 requires every ID to be unique within a document; when duplicates are present, assistive technologies may resolve to the wrong element when following internal references, breaking focus management, landmark navigation, and labelling relationships for screen-reader users. Of the 527 total accessibility issues we recorded, 408 trace to 64 recurring template-level patterns, meaning a targeted theme edit per pattern resolves all instances across the audited set efficiently.

**What to change and why:**
- Ensure the IDs "accessibility", "account", "alarm", "article", and "bell" appear no more than once per rendered document. Where these IDs are used for icon or SVG elements repeated in a shared component (such as a navigation bar), each instance requires a distinct ID value. This directly addresses WCAG 4.1.1 and prevents assistive technologies from sending focus or aria-labelledby references to the wrong element.
- Because these five patterns repeat identically across all 7 audited pages, the fix belongs at the template or theme layer rather than page by page. A single corrective edit per pattern propagates the resolution consistently and prevents regression as new pages are published.
- After remediation, rerun an automated accessibility audit to confirm no secondary duplicate-ID issues remain; the template-level nature of these patterns means other IDs sharing the same structural origin may warrant inspection.

**Effort:** Low

---

**Priority 2: Semantic Structure 53/100, Rendered Score, Worst Page https://www.dkd.de/de/kontakt (26 of 48 Bare Divs)**

**Bucket:** Compliance Risk

**Finding:** We score Semantic Structure at 53/100 on the rendered pass, placing it in the medium band. The figures for bare divs come specifically from the worst page in the audited set, https://www.dkd.de/de/kontakt, where a high proportion of container elements carry no semantic role. Because the template is shared across the audited set, the structural pattern that produces this result on the contact page is likely present on other audited pages as well. Assistive technologies rely on landmark and sectioning elements to help users navigate efficiently; a dense bare-div structure reduces that navigability and gives machines fewer structural signals to interpret page regions with confidence.

**What to change and why:**
- Audit the container elements on https://www.dkd.de/de/kontakt specifically, and replace generic containers with appropriate sectioning elements (such as main, section, article, aside, nav, or header) where the content has a discrete semantic meaning. This addresses the rendered score and improves the document outline for screen-reader users who rely on landmark navigation.
- Where sectioning elements are not appropriate, consider adding ARIA landmark roles to generic containers so that assistive technologies can still expose a navigable structure. This is a secondary measure; native elements are preferred.
- Because the template is shared, a structural audit at the component level will propagate improvements to all pages sharing the same layout, increasing the return on a single round of work.

**Effort:** Medium

---

**Priority 3: Security Header Gap, X-Frame-Options Absent, 7 of 7 Pages**

**Bucket:** Cross-cutting

**Finding:** Across the audited set, we confirm that 4 of 5 recommended security headers are present (HTTPS, HSTS, CSP, and X-Content-Type-Options), but X-Frame-Options is absent on all 7 audited URLs. Without this header, browsers have no explicit instruction to refuse framing by third-party pages, leaving users exposed to potential clickjacking vectors. The fix is a server-level configuration change and carries no dependency on template or content work.

**What to change and why:**
- Add the X-Frame-Options header at the server or reverse-proxy layer, set to DENY or SAMEORIGIN depending on whether any legitimate same-origin framing is required. This closes the remaining gap in the five-header baseline we audit against and removes the clickjacking exposure for all users.
- Confirm that the existing Content Security Policy (CSP) header includes a frame-ancestors directive as a complementary control; X-Frame-Options and frame-ancestors in CSP work together and support a broader range of browsers.
- After deploying the header, verify the response on at least one representative URL to confirm the header is present and correctly valued before marking the finding resolved.

**Effort:** Low

---

**Priority 4: Discovery Readiness 25/100, Five Artefacts Absent (llms.txt, llms-full.txt, agent-card.json, ai.txt, humans.txt)**

**Bucket:** AI Opportunity

**Finding:** We score Discovery Readiness at 25/100, placing www.dkd.de in the Needs Improvement band. None of the five well-known discovery artefacts we check for are reachable on the host: llms.txt, llms-full.txt, agent-card.json, ai.txt, and humans.txt are all absent. Machines building answer sets or citation indexes rely on these artefacts to understand what a site offers, who it is for, and how it may be used; without them, www.dkd.de is less likely to be surfaced confidently in agent-generated responses.

**What to change and why:**
- Add llms.txt to the root of www.dkd.de. This file gives machines a concise, structured summary of the site's content scope and primary pages. We recommend serving it as text/html; our recommendation here diverges from the llmstxt.org specification, which calls for text/plain, because text/html is more broadly interpretable across the machines we test against.
- Add llms-full.txt as a deeper content inventory for machines that request more detail. This complements llms.txt and increases citation eligibility for longer-form or more specific queries.
- Add agent-card.json to declare the site's agent-facing identity, capabilities, and permitted interaction modes. This artefact is particularly relevant for machines that assess trust and permissions before including a source in a generated answer.
- Add ai.txt to state content-use permissions for AI training and inference pipelines, and add humans.txt as a conventional disclosure of team and editorial contact information. Both artefacts contribute to the MX Stack Completeness score (currently 62/100) and signal editorial accountability to both machines and human readers.

**Effort:** Medium

---

**Priority 5: Structured Data Quality 65/100, Schema Maturity at Decoration Level**

**Bucket:** AI Opportunity

**Finding:** We score Structured Data Quality at 65/100. Schema Maturity sits at Level 1 (Decoration); the level is a structural classification distinct from the numeric score. The schema types we identify across the audited set (ListItem, BreadcrumbList, WebSite) confirm that structured markup is present and correctly formed, but the vocabulary in use describes navigation paths rather than the entities and relationships that machines consult when building knowledge about an organisation. At the Decoration level, machines can confirm that pages exist and are navigable, but they have fewer signals to verify what www.dkd.de does, who it serves, or how it relates to other entities.

**What to change and why:**
- Add an Organisation schema entity to the site's shared template, including properties that describe www.dkd.de's identity, services, and geographic scope. This moves Schema Maturity from Level 1 (Decoration) toward Level 2 (Good Schema) and gives machines verifiable entity data to include in answer-set construction.
- Add sameAs links within the Organisation entity to connect www.dkd.de to its authoritative profiles on third-party knowledge sources. This supports entity disambiguation and increases the probability that machines attribute content correctly to the right organisation.
- Review the existing BreadcrumbList and WebSite markup to confirm all required properties are populated; well-formed existing types improve the SDQ numeric score and reduce the risk of markup being discounted by validators.

**Effort:** Medium

---

**Priority 6: MX Stack Completeness 62/100, Discovery Artefacts and Frontmatter Fields Absent**

**Bucket:** AI Opportunity

**Finding:** We score MX Stack Completeness at 62/100, placing it in the Good band, but with material gaps across two categories. The discovery artefact gaps (llms.txt, llms-full.txt, agent-card.json, ai.txt, humans.txt) are addressed in Priority 4. The second category is MX governance fields in page frontmatter: canonicalUri, contentType, audience, and status are absent across the audited set. These fields give machines the structured context they need to assess whether a page is current, who it is intended for, and how it should be indexed within an agent's knowledge graph.

**What to change and why:**
- Add the canonicalUri field to page frontmatter so that machines can resolve the definitive URL for each page without ambiguity. This reduces the risk of machines indexing duplicate or near-duplicate representations of the same content.
- Add contentType and audience fields to give machines a declared content classification and target-reader signal. Without these, machines must infer content type and intended audience from unstructured text, which reduces confidence in how the page is categorised in agent responses.
- Add the status field to declare whether each page is current, draft, archived, or deprecated. Machines that assess freshness and relevance before including a source in an answer benefit from an explicit status signal rather than having to infer it from publication dates or indirect cues.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Organisation**: adding sameAs properties to the WebSite and BreadcrumbList-anchoring Organisation entity with links to Wikidata, LinkedIn, or other authoritative profiles gives machines an unambiguous cross-reference to resolve dkd.de as a known entity rather than an unnamed node in the knowledge graph.

- **potentialAction on Organisation**: attaching a potentialAction to the Organisation entity (for example, a contact or navigation action pointing to the relevant URL) allows machines to surface actionable entry points directly in agent-mediated responses, rather than requiring a full page traversal to discover them.

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
| Google-Extended (Google AI-training opt-out) | `Google-Extended` | 429 | Blocked |
| CCBot (Common Crawl) | `CCBot/2.0` | 429 | Blocked |
| Plain request (no UA) | *(empty)* | 200 | Accessible |

**Summary:** 6 of 8 tested agents can access the site. 2 agent(s) returned non-200 responses: Google-Extended, CCBot (Common Crawl).

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

**Slowest.** The slowest page is `https://www.dkd.de/de`. A first-time visitor sees the cold-cache cost: the crawler recorded 2617 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 222ms (HTTP 503), 216ms (HTTP 503), 217ms (HTTP 503); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Median-load control.** The median-load control page is `https://www.dkd.de/de/datenschutz`. A first-time visitor sees the cold-cache cost: the crawler recorded 958 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 240ms (HTTP 503), 212ms (HTTP 503), 225ms (HTTP 503); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Verdict:** First-visit response time is within healthy bounds. The returning-visitor view is Indeterminate for both pages because cache-busted re-probes were rate-limited (HTTP 429) or otherwise unsuccessful, so we cannot characterise the warmed-cache experience from this audit.

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

*Showing the first 10 lines of `robots.txt`; the full 25-line file is preserved alongside this report as `dkd-robots-txt.txt`.*

We found a robots.txt file in place, carrying 21 disallow paths that define the boundaries of what machines are permitted to crawl, alongside a single sitemap reference to guide discovery. The breadth of those disallow rules means a meaningful portion of the content is intentionally off-limits to crawlers, and we recommend reviewing each path periodically to confirm the exclusions remain deliberate.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 8 entries | Matches crawl count |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** A

We grade the sitemap at A, covering 8 URLs with lastmod, changefreq, and priority attributes all present across every entry. The inclusion of priority values is the most complete signal set a sitemap can offer machines, giving crawlers clear guidance on both recency and relative importance.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms.txt reachable on www.dkd.de, meaning machines have no structured entry point for a site description, page inventory, or content policy. We recommend adding llms.txt to give machines the context they need to represent www.dkd.de accurately in agent-generated responses.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We find no llms-full.txt reachable on www.dkd.de, with the endpoint returning a 404 across every signal we checked, including the sitemap and the homepage head. We recommend adding llms-full.txt as a deeper content inventory to complement llms.txt; doing so would increase citation eligibility and contribute to raising Discovery Readiness above its current 25/100, as noted in Priority 4.

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

Across the 7 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

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

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is: a Product, an Article, an Organisation: but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside any single page. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

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

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. Failure at any stage breaks the chain for all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Partial | 78 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 67 | Schema.org: BreadcrumbList, ListItem, ListItem (100% required properties) |
| 3 | Search & Compare | Site type does not require | -- | No comparison content detected |
| 4 | Price Understanding | Site type does not require | -- | No pricing content detected |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

Across the audited set, www.dkd.de is Not Compatible at the MX Journey level, with neither assessed stage reaching a pass; Search & Compare, Price Understanding, and Purchase Confidence are not applicable to this site type.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 7/7 | 7 page(s) flag for truncation risk because their main content (the first <main>, <article>, or top heading) sits past the 50 KB safe-fetch offset, even though no page exceeds the 250 KB hard ceiling. Agents with limited fetch windows may stop reading before they reach prose. | Largest page: 232 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See dkd-pipeline-truncation-risk-pages.csv (7 pages). |
| SPA Shell | Pass | 7/7 | Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: 7. 0 means served and rendered match. |
| Soft 404 | Pass | 7/7 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 7/7 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.18. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 7/7 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | 2/2 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 30% of the document on some pages. Check applied to 2 of 7 audited pages; the remaining 5 pages were skipped by a size or eligibility gate. |
| Broken Code Fences | Pass | 7/7 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Fail | 1/7 | The server advertises content negotiation via Vary: Accept. Agents that ask for a different Accept header may receive different content than the browser version. | 1 page(s) advertise format negotiation. Page: https://www.dkd.de/de/datenschutz |
| Cross-Host Redirect | Pass | 7/7 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 6 page(s) cross origin during redirect. |
| Generic Headings | Pass | 7/7 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | 2/2 | Actual prose content averages 50% of served bytes - well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 50%. Threshold: 30%. Check applied to 2 of 7 audited pages; the remaining 5 pages were skipped by a size or eligibility gate. |
| Inline Tag Bloat | Fail | 7/7 | 7 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 7 element(s) > 500 bytes. Largest single-page inline CSS block: 2612 B. Largest single-page inline JS block: 841 B. See dkd-pipeline-inline-tag-bloat-pages.csv (7 pages). |
| Head Weight | Pass | 2/2 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.04. Average: 0.01. Threshold: 0.50. Check applied to 2 of 7 audited pages; the remaining 5 pages were skipped by a size or eligibility gate. |

**Pipeline Survivability score:** 78/100

Across the audited set, every page we examined carries a truncation risk, meaning machines that impose a content-length ceiling may receive an incomplete picture of the page before they stop reading. Content negotiation and inline tag bloat each affect a smaller share of the pages, but together they add friction to how cleanly structured data and readable content reach automated readers. Resolving truncation risk across the audited set would have the largest single effect on machine readability, and addressing it would immediately strengthen the foundation on which the other two checks build.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 53/100 | medium | 26 | 54% | 3 | `div.text-columns__column` (78), `div.blog-card__info` (55), `div.text-columns.text-columns--` (28), `div.wrap.wrap--master` (7), `div.text-columns.text-columns--above` (4) |

On the worst page we sampled, https://www.dkd.de/de/kontakt, rendered markup carries a bare-div ratio of 54% (26 of 48 elements), meaning machines lose structural context and must rely on positional inference to determine meaning. The pattern here is surface-wide rather than structural: a relatively shallow deepest chain of 3 sits alongside a high bare ratio, which points toward untyped component frameworks where containers accumulate without semantic roles rather than toward deeply nested build-tool output. The most cost-effective first move is wrapping the obvious landmarks (header, nav, main, footer, aside) so that machines have reliable entry points, then giving the remaining component containers meaningful class semantics; that alone would pull the bare-div ratio down without requiring any restructuring of the visual layout.

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
| MX governance tags | 0% | 7 |
| Open Graph tags | 100% | - |
| Twitter Card tags | 100% | - |
| Skip link | 0% | 7 |
| llms.txt link tag | 0% | 7 |
| Canonical URL | 100% | - |
| Exactly 1 H1 | 100% | - |
| Code examples present | 0% | 7 |
| Self-contained sections | 100% | - |
| Error/troubleshooting docs | 0% | 7 |
| Lighthouse heading compliance | 43% | 4 |

**Overall Consistency:** 64%

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

| Type | Bytes per fragment | Appears on N pages | Preview |
|------|-------------------:|-------------------:|---------|
| css | 19 | 14 | .st0{fill:#B6D644;} |
| css | 2478 | 7 | /*InlineDefaultCss*/ /* default styles for extension "tx_for |
| css | 4288 | 6 | .rek-prediction .rek-style p{margin:0}.rek-prediction .rek-s |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `dkd-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Accessibility legislation across major markets has converged on ISO 14289-1 (PDF/UA) as the shared technical baseline, with the EAA (Directive (EU) 2019/882, in force 28 June 2025) representing the most precisely codified instance of a pattern that runs through Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada. The structural requirement that satisfies those legal obligations, a tagged PDF with a proper document tree, is also what makes a PDF readable to machines: without it, search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from the document, in the same way an untagged page defeats semantic HTML parsing.

We linked no PDFs from the 7-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **We recommend addressing Priority 1 findings**: the 527 WCAG 2.1 AA accessibility issues identified represent the primary regulatory exposure.
2. **We recommend reviewing Priority 2-3 findings**: Discovery Readiness improvements and metadata tuning that compound over time.
3. **We recommend considering optional enhancements**: optional patterns that give an early-mover opportunity in AI search.

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2 (Compliance Risk) | Priority 1, 2 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | Catalogue Visibility, Discovery Readiness, Semantic Structure, MX Stack Completeness, Structured Data, Security headers, and optional enhancements | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://www.dkd.de performs well for search visibility, with SEO scoring 92/100, a strong foundation for organic reach. Discovery Readiness at 25/100 and Structured Data at 65/100 represent the clearest opportunities, particularly in equipping machines to understand, index, and cite the content accurately. We invite the team to review the findings that follow and take the first steps toward closing these gaps.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 78/100 | Excellent |
| Accessibility | 90/100 | Excellent |
| SEO (all pages) | 92/100 | Excellent |
| SEO (content pages) | 92/100 | Excellent |
| MX Stack Completeness | 62/100 | Good |
| Structured Data Quality | 65/100 | Good |
| Commerce Visibility | 10/100 | Needs Improvement |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 92/100 | Excellent |
| Semantic Ratio | 22% | Needs Improvement |
| Agent Readability | 67/100 | Good |
| Pipeline Survivability | 78/100 | Excellent |
| Cross-Page Consistency | 64% | Good |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| /de | 92 | 85 | 95 | 83 | 77 |
| /de/leistungen | 92 | 90 | 95 | 83 | 85 |
| /de/referenzen | 94 | 85 | 95 | 68 | 69 |
| /de/produkte | 95 | 95 | 95 | 83 | 85 |
| /de/kontakt | 85 | 90 | 95 | 68 | 70 |
| /de/impressum | 89 | 95 | 95 | 83 | 85 |
| /de/datenschutz | 98 | 90 | 100 | 75 | 75 |

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: 1395 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 1395  |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set, we reviewed 84 images in total. The format distribution breaks down as 37 PNG, 33 JPEG, and 14 images in other or unrecognised formats; we found no WebP or SVG images in the audited sample. Alt-text coverage is strong: 83 of the 84 images carry descriptive alt text (98.8%), leaving one image without, which we flag as an accessibility gap worth closing.

Every one of the 84 images we sampled carries a loading="lazy" attribute, and we recorded no instances of loading="eager" and no images left without a loading attribute at all. That last point is worth noting in general: when no attribute is set, the browser applies its own heuristic, which may defer or eagerly load images in ways the team did not intend. On the audited pages that ambiguity is absent, since every image carries an explicit instruction.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **TYPO3 CMS**. The main audit uses TYPO3 CMS-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 7 pages analysed | Platform: TYPO3 CMS | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `dkd-report.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `dkd-report.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in this report's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -XMP-mx:ProvenanceAiPayload dkd-report.pdf` and pipe the output to `jq` for a structured view. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone re-running the audit can verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the organisation distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it first to ourselves.

---

**Date:** 23 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*Read the books: <https://mx.allabout.network/books/index.html>*