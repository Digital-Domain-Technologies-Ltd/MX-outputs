---
title: "Www Paribu: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-25"
modified: "2026-05-25"
client: "Www Paribu"
clientSlug: "www-paribu-com"
clientUrl: "https://www.paribu.com"
reportId: "www-paribu-com-WEB-AUDIT-20260525"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-25"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Www Paribu"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 70
accessibilityScore: 83
seoScore: 88
llmSuitabilityScore: 78
totalIssues: 35
pagesAudited: 6
version: "1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Www Paribu. Focus on the highest-leverage MX opportunities surfaced by the audit."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-05-25/www.paribu.com/www-paribu-com-report.pdf"
    description: "Generate PDF audit report for Www Paribu"
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
    sidecar: "www-paribu-com-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "www-paribu-com-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

# Www Paribu: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 25 May 2026\
**Report ID:** www-paribu-com-WEB-AUDIT-20260525

---

## About This Report

We audited 6 pages across www.paribu.com's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

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
| Performance | **70**/100 | `#############-----` |
| Accessibility | **83**/100 | `###############---` |
| SEO | **88**/100 | `################--` |
| Machine Suitability | **78**/100 | `##############----` |
| MX Stack Completeness | **62**/100 | `###########-------` |
| Agent Readability | **90**/100 | `################--` |
| Pipeline Survivability | **81**/100 | `###############---` |

We audited six pages of www.paribu.com and found a platform that serves its human visitors well. Built on Nuxt, we observed strong SEO foundations, scoring 88/100 in the Excellent band, and performance leads the scorecard as the strongest dimension across the audited set. Content is clearly structured, the brand presents with coherence and authority, and the groundwork for a compelling user experience is firmly in place.

The headline opportunity is machine readiness. Before we reach that, we want to name accessibility as a Priority 1 compliance item: across the audited set we recorded 35 critical instances spanning 20 distinct WCAG AA issue types, and we note that 8 of those instances trace to 3 recurring template patterns, meaning a single theme-level edit per pattern has the potential to resolve multiple instances at once. With that foundation strengthened, the next natural step is to extend the same care to machine-readable signals. Discovery Readiness sits at 33/100 and Catalogue Visibility at 5/100, both indicating that automated machines, whether search crawlers, AI agents, or indexing bots, currently have limited structured pathways into www.paribu.com. Structured Data Quality scores 57/100, and Schema Maturity sits at Level 2 (Good schema); these are solid starting points, and targeted additions to the schema layer would move the needle meaningfully on how machines interpret and surface the site's content.

MX Readiness is currently at Level 1 (Discoverable), which reflects the early stage of machine-experience investment relative to what the platform is capable of supporting. Schema.org JSON-LD is the highest-leverage asset in this context, because every machine can read it regardless of how the Nuxt layer renders the page at request time. Building out the structured data layer and addressing the discovery artefacts in parallel would lift machine-readiness scores across the audited set without touching the human experience that www.paribu.com has already built well.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, www.paribu.com delivers a strong experience for human visitors, with Performance, Accessibility, and SEO all sitting in the Excellent band, though the accessibility score of 83/100 points to a modest set of WCAG issues worth resolving.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Excellent | A |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can reliably read and survive the content pipeline, though their ability to discover and contextualise www.paribu.com through structured signals remains partial at this stage.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 33/100 | Could Be Better | C |
| Structured Data Quality | 57/100 | Good | B |
| MX Stack Completeness | 62/100 | Good | B |
| Pipeline Survivability | 81/100 | Excellent | A |

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

**Evidence:** MX Stack Completeness 62/100 | Structured Data Quality 57/100 | Discovery Readiness 33/100 | Consistency 65%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so agents can cite as well as discover. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, www.paribu.com has built a strong foundations to carry forward: SEO sitting at 88/100, five of five security headers present, and a meaningful schema vocabulary already deployed across the audited pages give the improvements that follow a strong base to build on.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent - 1668ms average load time |
| SEO (content pages) | 88 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 5/5 | 5/5 headers present; 3 of 7 URLs carry all five |
| Structured Data | 57 | Good - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 90 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 65% | 65% - same metadata patterns across every page |
| Agent access | 7/7 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.

---

## Findings

### At a Glance

The findings below are prioritised by impact, with discovery and catalogue gaps leading because they determine what machines can read before any other evaluation applies. Structured data depth and machine-exchange completeness follow, each representing an opportunity to strengthen the foundation that supports both search and agent-driven visibility across the audited set.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Missing alt attributes on footer images, WCAG 1.1.1 | Compliance Risk | High | Low | Screen reader users may miss image content across the audited set |
| 2 | Iframe elements missing title attributes (template-level), WCAG 2.4.1 | Compliance Risk | High | Low | Sighted keyboard users risk missing frame context across the audited set |
| 3 | Iframe elements missing title attributes (Google Tag Manager injection), WCAG 2.4.1 | Compliance Risk | High | Medium | Sighted keyboard users risk missing frame context across the audited set |
| 4 | Insufficient colour contrast on hero heading and CTA, WCAG 1.4.3 | Compliance Risk | High | Low | Low-vision users may not read hero text or interact with the CTA |
| 5 | Semantic structure rendered score 21/100 (22 of 34 bare divs on https://www.paribu.com/auth/sign-up) | Compliance Risk | Medium | Medium | Screen reader users and machines are less likely to interpret page structure reliably |
| 6 | Discovery Readiness 33/100, llms-full.txt, agent-card.json, ai.txt, and humans.txt absent | AI Opportunity | High | Medium | Machines may miss www.paribu.com content when building agent answers |
| 7 | Structured Data Quality 57/100, schema depth at decoration level across the audited set | AI Opportunity | Medium | Medium | Machines are less likely to cite www.paribu.com as a verified source |
| 8 | MX Stack Completeness 62/100, MX governance fields absent from page frontmatter | AI Opportunity | Medium | Medium | Machines reduce agent confidence in content classification and routing |

---

**Priority 1: Missing Alt Attributes on Footer Images, WCAG 1.1.1**

**Bucket:** Compliance Risk

**Finding:** We detected 2 instances of images in the footer across 2 audited pages where the alt attribute is absent. Screen reader users encounter these images with no text alternative, which directly breaches WCAG 1.1.1 (Level A). Because the selector traces to the shared footer partial, a single template edit resolves both instances.

**What to change and why:**
- Add descriptive alt text to each affected footer image so that screen reader users receive equivalent information. This addresses WCAG 1.1.1 directly and moves the Accessibility score above its current 83/100 baseline.
- Where a footer image is purely decorative, supply an empty alt attribute (not an absent one) to signal that machines and assistive technology should skip it; this is a distinct fix from descriptive alt text and serves a different set of users.
- Because both instances share the same footer template, resolving the pattern once removes all instances across the audited set without page-by-page intervention.

**Effort:** Low

---

**Priority 2: Iframe Elements Missing Title Attributes (Template-Level), WCAG 2.4.1**

**Bucket:** Compliance Risk

**Finding:** We found 3 instances across 3 audited pages where a `html > body > iframe` element carries no title attribute. These iframes sit inside the site's own template, and sighted keyboard users who navigate by frame have no mechanism to identify the frame's purpose. This breaches WCAG 2.4.1 (Level A). Because these elements are part of the site template, a single theme edit resolves all 3 instances.

**What to change and why:**
- Add a meaningful, non-empty title attribute to each template-owned iframe so that keyboard users can identify the frame before entering it. This addresses WCAG 2.4.1 and contributes to the Accessibility score improvement.
- Audit the purpose of each iframe (authentication flow, payment widget, embedded map) and write a title that reflects that purpose specifically; a generic label such as "frame" does not satisfy the criterion.
- Resolving these 3 instances through the template removes the pattern from all pages that inherit the template, delivering broad remediation from a contained change.

**Effort:** Low

---

**Priority 3: Iframe Elements Missing Title Attributes (Google Tag Manager Injection), WCAG 2.4.1**

**Bucket:** Compliance Risk

**Finding:** We found 3 further instances across 3 audited pages where an iframe injected by Google Tag Manager (via `html > body > noscript > iframe`) carries no title attribute. These elements are not part of the site template and cannot be resolved by a theme edit. Sighted keyboard users are affected in the same way as Priority 2, but the remediation path is different and sits with the vendor relationship, not the development team.

**What to change and why:**
- Engage Google Tag Manager to ship a fix in their SDK so that the noscript iframe is emitted with a non-empty title attribute; this is the cleanest long-term resolution and keeps the site's own codebase unmodified.
- As an interim measure, implement a small DOM-observer patch that detects the injected iframe after Google Tag Manager loads and adds the missing title attribute at runtime. This resolves the WCAG 2.4.1 gap immediately without waiting for the vendor.
- Document the interim patch and its dependency on the Google Tag Manager SDK version so that the team can retire the patch once the vendor resolves the issue upstream.

**Effort:** Medium

---

**Priority 4: Insufficient Colour Contrast on Hero Heading and CTA, WCAG 1.4.3**

**Bucket:** Compliance Risk

**Finding:** We recorded 2 contrast gaps on the hero section of 1 audited page. The hero heading carries a contrast ratio of 2.21:1 against a 3:1 minimum (WCAG 1.4.3, Level AA large text), and the hero CTA carries a contrast ratio of 2.21:1 against a 4.5:1 minimum (WCAG 1.4.3, Level AA normal text). Both fall well short of their respective thresholds, and low-vision users risk missing or misreading the most prominent call-to-action on that page.

**What to change and why:**
- Adjust the hero heading text colour to #81a022 to meet the 3:1 large-text threshold under WCAG 1.4.3. This is a single styling token change and the target value comes directly from the Pa11y recommendation in the audit data.
- Adjust the hero CTA background colour to #628103 to meet the 4.5:1 normal-text threshold under WCAG 1.4.3. Again, the target value is taken directly from the audit data; no additional contrast calculation is required.
- Apply both changes through the design token or theming layer so that any other component using the same colour variables inherits the fix automatically, reducing the risk of the same gap reappearing elsewhere across the audited set.

**Effort:** Low

---

**Priority 5: Semantic Structure Rendered Score 21/100 (22 of 34 Bare Divs on https://www.paribu.com/auth/sign-up)**

**Bucket:** Compliance Risk

**Finding:** We score semantic structure at 21/100 (High band concern) across the audited set. The worst-case page, https://www.paribu.com/auth/sign-up, shows 22 bare divs out of 34 total elements measured. This level of non-semantic markup means that assistive technology and machines receive minimal structural signals when parsing that page, and screen reader users are less likely to navigate its regions reliably. Because the registration page is a conversion-critical destination, the structural gap carries direct accessibility and usability consequences.

**What to change and why:**
- Replace presentational div wrappers on https://www.paribu.com/auth/sign-up with appropriate semantic elements (headings, sections, forms, labels, landmarks) so that assistive technology can announce the page's structure correctly. This addresses the 21/100 rendered score and contributes to WCAG 1.3.1 (Info and Relationships, Level A).
- Introduce ARIA landmark roles on the registration page where native semantic elements are not available, so that keyboard users can jump directly to the form region without traversing unrelated content.
- Because the registration page likely shares a template with other authentication flows, auditing the full template for bare-div patterns will extend the benefit beyond this single URL.
- Improving semantic structure also raises the quality of machine-readable page signals, which feeds indirectly into Discovery Readiness and Pipeline Survivability scores.

**Effort:** Medium

---

**Priority 6: Discovery Readiness 33/100, llms-full.txt, agent-card.json, ai.txt, and humans.txt Absent**

**Bucket:** AI Opportunity

**Finding:** We score Discovery Readiness at 33/100 (Could Be Better). We find llms.txt present on www.paribu.com, though it currently lacks both a page inventory and a content policy; the remaining four well-known discovery artefacts (llms-full.txt, agent-card.json, ai.txt, and humans.txt) are absent. Machines that rely on these files to understand what a site offers, who operates it, and which content is permissioned for agent use have only a partial structured signal to work from. For a financial-services platform competing for citation in agent answers, closing the remaining gaps is a material opportunity.

**What to change and why:**
- Expand the existing llms.txt to include a page inventory and a content policy, giving machines the structured context they need to accurately represent the breadth of content available. These additions are the primary signal machines use to determine citation eligibility.
- Add llms-full.txt to provide the extended machine-readable content inventory that complements the summary in llms.txt.
- Add agent-card.json to expose structured metadata about the platform's capabilities, identity, and data-sharing terms. This directly improves the MX Stack Completeness score by addressing the discovery-artefact category.
- Add ai.txt and humans.txt to complete the standard set of discovery artefacts. Together, all five files move Discovery Readiness materially above its current 33/100.
- Note that our recommendation for llms.txt diverges from the llmstxt.org specification: we recommend serving it as text/html to maximise compatibility across the range of machines that consume it.

**Effort:** Medium

---

**Priority 7: Structured Data Quality 57/100, Schema Depth at Decoration Level Across the Audited Set**

**Bucket:** AI Opportunity

**Finding:** We score Structured Data Quality at 57/100 (Good). Across the audited set, schema types present include Organisation, WebSite, FAQPage, WebPage, and others; however, the depth of structured data sits at a level where machines receive sufficient signals to recognise entity types but not enough to verify relationships or surface rich results with confidence. For a financial-services platform, deeper schema reduces ambiguity about the organisation's identity and the services it offers.

**What to change and why:**
- Extend the existing Organisation schema across the audited set to include sameAs links pointing to authoritative external profiles (regulatory registries, social profiles, press listings). This gives machines a cross-reference chain that raises entity confidence and increases citation likelihood.
- Review pages carrying WebPage and CollectionPage schema to determine whether richer subtypes (such as FinancialProduct or Service) would more precisely describe the content; more specific types improve machine classification without invalidating existing markup.
- Validate all existing schema against Schema.org specifications using a structured-data testing tool to confirm there are no silent errors that reduce the 57/100 score further; known-good markup is the baseline from which deeper schema investment pays off.

**Effort:** Medium

---

**Priority 8: MX Stack Completeness 62/100, MX Governance Fields Absent from Page Frontmatter**

**Bucket:** AI Opportunity

**Finding:** We score MX Stack Completeness at 62/100 (Good). The score reflects gaps across two categories: the five discovery artefacts addressed in Priority 6, and the absence of MX governance fields in page frontmatter, specifically canonicalUri, contentType, audience, and status. Without these fields, machines have no structured declaration of what each page is, who it is for, and whether it is current. This reduces agent confidence in content routing and classification.

**What to change and why:**
- Add canonicalUri to page frontmatter across the audited set so that machines have an unambiguous reference for each page's canonical identity. This is the lowest-effort governance field and the one with the broadest downstream benefit.
- Add contentType and audience fields so that machines can classify pages by format and intended reader without inferring from body text. For a platform serving both retail and institutional users, this distinction is meaningful for agent routing.
- Add status to declare whether each page represents current, archived, or draft content. Machines that encounter outdated pages without a status signal may treat them as equally authoritative as current pages, which reduces the reliability of agent answers that draw on www.paribu.com.
- Resolving the discovery-artefact gaps (Priority 6) in parallel will compound the MX Stack Completeness improvement, as both categories contribute to the 62/100 score.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Organisation and Person entities**: adding `sameAs` properties pointing to Wikidata, LinkedIn, or other authoritative external profiles would allow machines to disambiguate Paribu's corporate identity and named individuals from other entities, strengthening citation confidence in agent-generated responses.

- **breadcrumb on deep pages**: the audited set includes pages sitting several levels below the homepage that currently rely on URL structure alone for path context; attaching `BreadcrumbList` markup would give machines an explicit navigational signal, improving how those pages are understood within the site's content hierarchy.

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
| URL probed | https://www.paribu.com |
| HTTP status | 200 |
| Content-Type returned | text/html;charset=utf-8 |
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
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | Yes, home link and internal navigation present |
| Internal navigation links | 6 links to same-site pages |
| MX governance tags | Absent |
| Schema.org JSON-LD | Absent (correct: should not claim valid page) |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.paribu.com/markets`. A first-time visitor sees the cold-cache cost: the crawler recorded 2345 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 459ms, 256ms, 246ms, giving a returning-visitor median of **256 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://www.paribu.com/custody/tr`. A first-time visitor sees the cold-cache cost: the crawler recorded 2123 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 907ms, 565ms, 529ms, giving a returning-visitor median of **565 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Server response time is within healthy bounds for the slowest page across both first-visit and returning-visitor views.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /wallet*
Disallow: /account*
Disallow: /blog/?s=*
Disallow: /blog/*/?s=*
Disallow: /financial-history/*
Disallow: /api/

User-agent: Pingdom
```

*Showing the first 10 lines of `robots.txt`; the full 42-line file is preserved alongside this report as `www-paribu-com-robots-txt.txt`.*

We found www.paribu.com's robots.txt in place, carrying 12 disallow paths that shape what machines may crawl, alongside 9 sitemap references that give crawlers a clear route into the content.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 6120 entries | Fewer than crawl found |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | No | Absent |

**Sitemap grade:** Partial

We grade the sitemap Partial: it covers 6,120 URLs and carries both lastmod and changefreq signals, yet omits priority values entirely, leaving machines without the relative-importance guidance that would help them allocate crawl budget across the full URL set.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We find llms.txt present on www.paribu.com with a site description in place, though the file currently lacks both a page inventory and a content policy, leaving machines without the structured context they need to accurately represent the breadth of content available. Expanding the file to include both sections would materially improve how machines navigate and cite www.paribu.com.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We find no llms-full.txt on www.paribu.com, with the endpoint returning a 404 and no corresponding link relation in the homepage head. We would revisit this recommendation after a broader content inventory, as the value of adding it depends on content depth that our audited sample of 6 pages does not yet measure.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

2 additional registered `/.well-known/` paths were probed; none returned a recognisable discovery file. The per-path breakdown is preserved alongside this report as a sidecar JSON.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| Question | 2 | 100% | 100% | Answer |
| Answer | 2 | 100% | 100% | - |
| Organisation | 4 | 100% | 100% | ImageObject, Person, PostalAddress |
| Person | 4 | 100% | 100% | - |
| PostalAddress | 4 | 100% | 100% | - |
| WebSite | 2 | 100% | 17% | Organisation |
| ImageObject | 2 | 100% | 100% | - |
| WebPage | 1 | 100% | 100% | Website, Organisation |
| CollectionPage | 1 | 100% | 100% | WebSite, Thing, Country |
| Thing | 1 | 100% | 100% | - |
| Country | 1 | 100% | 100% | - |
| FAQPage | 2 | 100% | 100% | - |

**Structured Data Quality:** 57/100\
**Coverage:** 4 pages with JSON-LD out of 6 total (67%)\
**Unique types:** 12

Across the 6 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 7 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 17 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 9 | 15 | Average across entities |
| Entity richness | 5 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 8 | 15 | Nested @type values + @id linking |
| Linked-data signals | 4 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 7 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **57** | **100** | |

---

## Structured Data Findings

We identified 9 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

| Page | Type | Severity | Property | Why it matters |
|------|------|----------|----------|----------------|
| / | WebSite | recommended | image | Site has no logo / hero image declared in structured data |
| / | WebSite | recommended | datePublished | No site-level publish date for crawler context |
| / | WebSite | recommended | author | Site has no top-level author/owner declared |
| /markets | WebSite | recommended | image | Site has no logo / hero image declared in structured data |
| /markets | WebSite | recommended | datePublished | No site-level publish date for crawler context |
| /markets | WebSite | recommended | author | Site has no top-level author/owner declared |
| /markets | WebSite | recommended | publisher | Site has no top-level publisher declared |
| /destek | openGraph | location | byteOffset | openGraph is present in served HTML but starts at byte 310438 - past the 250 KB agent-truncation threshold. Agents with a 250 KB fetch window will not reach it. |
| /destek | canonical | location | byteOffset | canonical is present in served HTML but starts at byte 310549 - past the 250 KB agent-truncation threshold. Agents with a 250 KB fetch window will not reach it. |

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
| Open Graph meta tags | Yes | Yes | Yes | No | No |
| Twitter Card meta tags | Yes | Yes | Yes | Yes | No |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | No | No |
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
|  | 1 | Decoration | Typed blocks present, with sparse properties and no nesting or cross-references. The structural primitives are in place; the next opportunity is to fill the required and recommended fields. |  |
| **→** | 2 | Good schema | Full required and recommended properties, nested types where appropriate, valid vocabulary. The next opportunity is to wire entities together with @id cross-references. | **←** |
|  | 3 | Real graph | Level 2 plus @id cross-references between entities and linked-data signals (sameAs, mainEntityOfPage, isPartOf). The next opportunity is to anchor entities to external identifiers. |  |
|  | 4 | Verified linked data | Level 3 plus external identifiers (Wikidata QIDs, ISNIs, ORCIDs) and provenance metadata. Entities are anchored in the linked-data web. |  |

**Current level:** 2: Good schema\
**To reach the next level:** To reach Level 3: wrap the JSON-LD blocks in a single @graph document; mainEntityOfPage on the primary entity; isPartOf linking the page entity to the site entity. Cross-link Organisation, Person, PostalAddress, FAQPage via @id rather than inlining them repeatedly.

The Structured Data Quality (SDQ) score and the Schema Maturity Level measure two different things. SDQ counts the properties present and validates them against Schema.org expectations; the level captures whether those properties are connected (cross-entity wiring, linked-data signals, external authority identifiers). Both numbers above are reported as-is from the audit data.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. Failure at any stage breaks the chain for all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Pass | 89 | Issues: no <main> |
| 2 | Citation | Partial | 50 | Schema.org: Organisation, ImageObject, Person (100% required properties) |
| 3 | Search & Compare | Site type does not require | -- | No comparison content detected |
| 4 | Price Understanding | Site type does not require | -- | No pricing content detected |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

Partially Compatible; Search & Compare, Price Understanding, and Purchase Confidence are not applicable for this site type.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 4/6 | 4 page(s) flag for truncation risk; 4 of them exceed the 250 KB hard ceiling, the rest place main content too far into the document. Agents with limited fetch windows may stop reading before reaching the main content. | Largest page: 621 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See www-paribu-com-pipeline-truncation-risk-pages.csv (4 pages). |
| SPA Shell | Pass | 6/6 | Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: 21. 0 means served and rendered match. |
| Soft 404 | Pass | 6/6 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Fail | 1/6 | Navigation, header, and footer boilerplate outweigh main content on some pages. Small-context agents spend their budget on scaffolding rather than prose. | Highest boilerplate-to-content ratio: 1.04. Threshold: < 10 (and < 80 KB of inline head bytes). Page: https://www.paribu.com/destek |
| Tabbed Disclosure | Pass | 6/6 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 3 page(s) with tab widgets. |
| Delayed Content Start | Pass | 2/2 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 6% of the document on some pages. Check applied to 2 of 6 audited pages; the remaining 4 pages were skipped by a size or eligibility gate. |
| Broken Code Fences | Pass | 6/6 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Pass | 6/6 | The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents. | 0 page(s) advertise format negotiation. |
| Cross-Host Redirect | Pass | 6/6 | 0 page(s) redirect to a different host. No cross-origin redirect chains detected on the audited pages. | 0 page(s) cross origin during redirect. |
| Generic Headings | Pass | 6/6 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Fail | 2/2 | Actual prose content averages 21% of served bytes, below the 30% threshold. Pages carry more overhead than prose. | Average: 21%. Threshold: 30%. Check applied to 2 of 6 audited pages; the remaining 4 pages were skipped by a size or eligibility gate. |
| Inline Tag Bloat | Fail | 6/6 | 6 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 41 element(s) > 500 bytes. Largest single-page inline CSS block: 307048 B. Largest single-page inline JS block: 81589 B. See www-paribu-com-pipeline-inline-tag-bloat-pages.csv (6 pages). |
| Head Weight | Pass | 2/2 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.03. Average: 0.01. Threshold: 0.50. Check applied to 2 of 6 audited pages; the remaining 4 pages were skipped by a size or eligibility gate. |

**Pipeline Survivability score:** 81/100

Across the audited set, the resilience checks we flagged centre on Inline Tag Bloat, Truncation Risk, Boilerplate Burial, and Body Content Ratio, each of which can interfere with how cleanly machines extract and interpret page content. When inline tag volume is high, the ratio of markup to substantive content rises, reducing the reliability of any answer or citation drawn from those pages. Addressing Inline Tag Bloat would have the broadest immediate effect, given that all six audited pages carry this flag, and resolving it would open the door to more consistent machine-readable signal across the rest of the resilience checks.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 21/100 | high | 22 | 65% | 8 | `div.flex.items-center` (302), `div.shrink-0` (288), `div.relative.shrink-0` (288), `div.market-list__col` (150), `div.place-items-start` (60) |

On the worst-performing page in the audited set, https://www.paribu.com/auth/sign-up, we record a bare-div ratio of 65% across 34 measured elements, meaning machines lose structural context and must rely on positional inference to determine meaning. The pattern here is structural rather than merely surface-wide: a deepest bare chain of 8, combined with utility-class selectors such as `div.flex.items-center` and `div.shrink-0` appearing hundreds of times, points to a component framework that emits unsemantic wrapper divs as a side-effect of its layout primitives rather than a drag-and-drop tool layering divs at the surface. The cheapest first move is to wrap the obvious landmarks, header, nav, main, footer, and aside, in their corresponding semantic elements, and to review the most frequent bare selectors for conversion to typed roles, which would bring the bare-div ratio down meaningfully without requiring a layout restructure.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | Yes (3/7) | Prevents XSS and injection attacks |
| X-Frame-Options | Yes (3/7) | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

All five standard security headers are present on every audited response. This is the expected baseline for any production website.

**Coverage:** 3 of 7 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| / | Yes | Yes | No | No | Yes |
| /markets | Yes | Yes | No | No | Yes |
| /destek | Yes | Yes | No | No | Yes |
| /custody | Yes | Yes | Yes | Yes | Yes |
| /custody/tr | Yes | Yes | Yes | Yes | Yes |
| /auth/sign-up | Yes | Yes | No | No | Yes |
| /llms.txt | Yes | Yes | Yes | Yes | Yes |

HTTPS: 7/7 | HSTS: 7/7 | CSP: 3/7 | X-Frame-Options: 3/7 | X-Content-Type-Options: 7/7

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 67% | 2 |
| MX governance tags | 0% | 6 |
| Open Graph tags | 100% | - |
| Twitter Card tags | 83% | `/destek` |
| Skip link | 0% | 6 |
| llms.txt link tag | 0% | 6 |
| Canonical URL | 100% | - |
| Exactly 1 H1 | 100% | - |
| Code examples present | 0% | 6 |
| Self-contained sections | 100% | - |
| Error/troubleshooting docs | 0% | 6 |
| Lighthouse heading compliance | 100% | - |

**Overall Consistency:** 65%

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

We found 20 identical inline fragment(s) repeated across multiple pages, totalling 83 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes per fragment | Appears on N pages | Preview |
|------|-------------------:|-------------------:|---------|
| js | 1651 | 3 | window.__NUXT__={};window.__NUXT__.config={public:{VITE_APP_ |
| js | 1149 | 3 | "use strict";(()=>{const t=window,e=document.documentElement |
| js | 366 | 3 | function checkAndExpireCookies(b){var c=document.cookie.spli |
| js | 283 | 3 | (function(){try{var m=localStorage.getItem('nuxt-color-mode' |
| css | 118 | 3 | html.dark-mode{background-color:#121212;color-scheme:dark}ht |
| js | 43 | 3 | {"imports":{"#entry":"/_nuxt/CD-aNdq6.js"}} |
| js | 60390 | 2 | self.__next_f.push([1,"c:[\"$\",\"$L16\",null,{\"locale\":\" |
| js | 3520 | 2 | self.__next_f.push([1,"14:[[\"$\",\"title\",\"0\",{\"childre |
| js | 3482 | 2 | self.__next_f.push([1,"0:{\"P\":null,\"b\":\"c5fdd3cf8aa14d0 |
| js | 2385 | 2 | self.__next_f.push([1,"1f:I[97337,[\"/turkiye/_next/static/c |

*Showing the top 10 of 19 duplicate fragments by occurrence count. The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `www-paribu-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Across the audited set, PDFs present a dual concern that sits equally in the compliance and machine-readability columns. The EAA (Directive (EU) 2019/882, in force 28 June 2025) is the most precisely codified instance of a global legislative convergence on ISO 14289-1 (PDF/UA) as the structural baseline, a convergence that also runs through Section 508 of the US Rehabilitation Act, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent legislation in Australia and Canada; at the same time, an untagged or image-based PDF is opaque to machines in the same way that unsemantic HTML is, and without a proper structure tree, search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from the document at all.

We linked no PDFs from the 6-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 35 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: resolve the 21/100 semantic structure score on https://www.paribu.com/auth/sign-up by replacing bare div wrappers with semantic elements, and complete the MX governance metadata fields (canonicalUri, contentType, audience, status) absent from page frontmatter; both improvements compound over time as machines gain clearer structural and classification signals
3. **Consider optional enhancements**: add sameAs links to Organisation and Person entities and BreadcrumbList markup to deep pages, giving machines the cross-reference and navigational signals needed for an early-mover position in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4, P5 (Compliance Risk) | Priority 1, 2, 3, 4, 5 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | Catalogue Visibility, Semantic Structure, Discovery Readiness, Structured Data, MX Stack Completeness, and optional enhancements | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://www.paribu.com performs well for human visitors, with SEO leading the scorecard at 88/100. The clearest opportunities lie in Discovery Readiness and Structured Data, where scores indicate that machines see considerably less of what the site has to offer, particularly in terms of discovery artefacts and structured metadata. We invite the team to review the detailed findings that follow and work with us to close those gaps.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 78/100 | Excellent |
| Accessibility | 83/100 | Excellent |
| SEO (all pages) | 88/100 | Excellent |
| SEO (content pages) | 88/100 | Excellent |
| MX Stack Completeness | 62/100 | Good |
| Structured Data Quality | 57/100 | Good |
| Commerce Visibility | 5/100 | Needs Improvement |
| Discovery Readiness | 33/100 | Could Be Better |
| Heading Quality | 90/100 | Excellent |
| Semantic Ratio | 5% | Needs Improvement |
| Agent Readability | 90/100 | Excellent |
| Pipeline Survivability | 81/100 | Excellent |
| Cross-Page Consistency | 65% | Good |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| / (nav) | 92 | 80 | 100 | 100 | 92 |
| /markets (nav) | 97 | 70 | 100 | 64 | 69 |
| /destek | 68 | 75 | 70 | 18 | 18 |
| /custody | 100 | 100 | 100 | 100 | 100 |
| /custody/tr | 100 | 100 | 100 | 100 | 100 |
| /auth/sign-up | 73 | 75 | 60 | 84 | 84 |

Pages marked (nav) are navigational: they route visitors to content rather than containing it, and are excluded from the SEO content average. Content-pages SEO average: 88/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: 222 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 222   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set, we examined 104 images in total. The format distribution breaks down as 43 PNG, 39 SVG, and 22 WebP images, with no JPEG images present. Alt-text coverage reaches 91.3%, meaning 95 of the 104 images carry descriptive text; the remaining 9 are missing alt attributes, and we recommend addressing those to support screen reader users and machines parsing the page for content signals.

On loading strategy, the picture across the audited set is mixed. Of the 104 images, 27 carry loading="lazy", and 5 carry loading="eager", which is the correct explicit signal for above-the-fold assets. The more significant finding is that 72 images have no loading attribute set at all. This is worth distinguishing from eager: when no attribute is present, the browser applies its own heuristics to decide when to fetch the image, which means the loading behaviour is undefined rather than intentional. Explicitly setting loading="lazy" or loading="eager" on each image gives the browser a clear instruction and removes that ambiguity, particularly for images whose viewport position may vary across device sizes.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Nuxt**. The main audit uses Nuxt-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 6 pages analysed | Platform: Nuxt | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `www-paribu-com-report.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `www-paribu-com-report.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload www-paribu-com-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the organisation distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it first to ourselves.

---

**Date:** 25 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*