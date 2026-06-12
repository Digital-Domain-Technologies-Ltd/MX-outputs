---
title: "Contentful: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-06-02"
modified: "2026-06-02"
client: "Contentful"
clientSlug: "www-contentful-com"
clientUrl: "https://www.contentful.com"
reportId: "www-contentful-com-WEB-AUDIT-20260602"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-06-02"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Contentful"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 44
accessibilityScore: 77
seoScore: 94
llmSuitabilityScore: 99
totalIssues: 279
pagesAudited: 12
version: "1.0"
confidential: true
mx:
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Contentful covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Contentful", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  status: active
  contentType: audit-report
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-06-02/www.contentful.com/www-contentful-com-report.md
  runbook: "Executive audit report for Contentful. Focus on the highest-leverage MX opportunities surfaced by the audit."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-06-02/www.contentful.com/www-contentful-com-report.pdf"
    description: "Generate PDF audit report for Contentful"
  x-mx-provenance:
    sidecar: "www-contentful-com-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "www-contentful-com-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

**Prepared by:** Tom Cranstoun | CogNovaMX\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 2 June 2026\
**Report ID:** www-contentful-com-WEB-AUDIT-20260602

---

## About This Report

We audited 12 pages across www.contentful.com using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable.

**How the audit is built.** Most of the audit is scripted SOPs running deterministic checks rather than inference. The crawl, the served-versus-rendered comparison, the structured-data extraction, the accessibility passes, the discovery-file probes, the platform fingerprinting and the per-section scoring all run as scripts producing byte-identical outputs on the same input. A small number of stages run a judgement pass over the resulting report. That judgement pass is the only inference layer; everything else is the scripted SOP.

**Local-inference option for regulated and privacy-sensitive customers.** The judgement passes can run against a local LLM (Ollama, LM Studio, on-premise Llama or equivalent) instead of a cloud provider. The deterministic scripts already run locally. For regulated industries and privacy-sensitive customers, this means the entire audit can run with no audit data leaving the customer's network. The option ships as part of the Private REGINALD platform deployment; contact us to scope a local-inference engagement.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply -- WCAG 2.1, Schema.org, RFC 9309, W3C -- those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**About sample scope.** Findings throughout this report describe what we observed on the 12 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

We offer this audit as the starting point of an ongoing partnership. If you would like us to implement any of the recommendations in this report -- whether structured data, discovery files, accessibility improvements, or governance metadata -- we build, deploy, and maintain these improvements as a managed service. We also offer continuous monitoring: automated re-audit on a cadence you choose, with alerts when scores drift and quarterly executive summaries. Contact us at <info@cognovamx.com> to scope either service.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead, because Common Crawl (the archive underpinning most major LLM training datasets) prioritises HTML for its LLM-training subsets, so a plain-text llms.txt is unlikely to enter training corpora at the same rate as the rest of the site. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **44**/100 | `###########----------` **(!)** |
| Accessibility | **77**/100 | `##############----` |
| SEO | **94**/100 | `#################-` |
| Machine Suitability | **99**/100 | `##################` |
| MX Stack Completeness | **66**/100 | `############------` |
| Agent Readability | **72**/100 | `#############-----` |
| Pipeline Survivability | **79**/100 | `##############----` |

Contentful's website serves its human audience well. SEO foundations across the audited set are excellent at 94/100, titles and meta descriptions are in place across product and navigational pages, and Schema.org JSON-LD is present in the served HTML of every audited page -- meaning every machine that fetches the raw HTML receives structured data without needing to execute JavaScript. The Organization entity carries `sameAs` links to Wikidata (Q18348837), Wikipedia, LinkedIn, GitHub, and YouTube, providing external authority anchors that machines can use to verify the publisher's identity.

The headline opportunity we want to draw attention to first is accessibility. Pa11y (automated WCAG 2.1 AA testing) identified 279 issues across 11 distinct issue types on the 12 audited pages. Of those, 156 instances trace to 14 recurring template-level patterns -- a single theme edit per pattern resolves all instances at once. A further 12 instances originate from a tracking element injected at runtime by a third-party SDK hosted at ad.ipredictive.com; that fix runs through the vendor, not the site template. Accessibility is a Priority 1 compliance item: the European Accessibility Act (EAA Directive 2019/882), ADA, EN 301 549, and analogous instruments across major markets all resolve to the same technical baseline.

This audit also detected seven A/B test and personalisation vendor frameworks active across the audited pages. We confirmed that the `/products/personalization/` page returned a different headline on one of three cache-busted probes -- evidence that the personalisation layer assigns machine fetchers to test cohorts randomly on each cold request. This is the Stateless Machine Visitor problem: machines do not maintain session state, so they receive different experiment variants on each visit and cannot assemble a coherent picture of what the site actually says. The training corpus risk compounds this: sitemap-sweeping bots that ingest pages for model training may record contradictory versions of the same URL across multiple crawl passes.

On the machine-experience side, the site sits at MX Readiness Level 1 (Discoverable): machines can find and parse the site, but they cannot yet cite it as an attested source. The path to Level 2 (Citation-ready) is adding MX governance fields and publishing an llms.txt that gives machines a canonical, authored description of the site's content.

\clearpage

## Balanced Scorecard

### Human Experience

The audited pages deliver a solid experience for human visitors, with SEO and navigation standing out and performance as the dimension with the most room to improve.

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Excellent | A | - |
| Performance | Good | B | B (median) |
| Accessibility (WCAG) | Excellent | A | B (median) |
| Trust and Credibility | Excellent | A | - |

### Machine Experience

Machines can discover and parse the audited pages today; the next capability level -- citation and attestation -- requires governance metadata that the audited set does not yet carry.

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

- **Compliance Risk**: accessibility (WCAG 2.1 AA), duplicate IDs, forms, and semantic structure. These are inclusion and legal-exposure items; the budget owner is typically legal, HR, or an accessibility lead.
- **Cross-cutting Foundations**: performance and SEO. These affect both human visitors and machines; the budget owner is usually digital operations or a foundation engineering team.
- **Machine Readability Opportunity**: discovery readiness, metadata stack, llms.txt, structured data, agent cards, and pipeline survivability. These determine whether the site lands in agent answers; the budget owner is typically the CMO or head of digital.

Every priority block in the Findings section carries a **Bucket:** label matching one of the three above. The at-a-glance table sorts findings into bucket order so each budget owner can read straight to their own list.

---

## MX Readiness Level

|  | Level | Name | Publisher Capability | Agent Outcome |  |
|---|-------|------|---------------------|---------------|---|
|  | 0 | Not Ready | Auto-generated boilerplate | Agents guess, hallucinate |  |
| **->** | 1 | Discoverable | Deliberate metadata, publisher identified | Agents can discover | **<-** |
|  | 2 | Citation-ready | Full MX fields, governance, provenance | Agents can cite and attribute |  |
|  | 3 | Comparable / Attested | Cryptographic attestation, cross-source verifiable | Agents can search, compare, recommend |  |
|  | 4 | Transactable | Registered, priced, SLA-backed, alive | Agents can understand pricing and transact |  |
|  | 5 | Purchase-confident | Third-party audited, fiduciary-grade | Agents can guarantee accuracy at purchase |  |

**Current Level:** 1: Discoverable

**Evidence:** MX Stack Completeness 66/100 | Structured Data Quality 61/100 | Discovery Readiness 39/100 | Consistency 59%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so agents can cite as well as discover. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

The audited set shows genuine strengths across SEO, security, and machine access -- a solid foundation for the improvements that follow.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Good | Good - 3489ms average load time |
| SEO (content pages) | 93 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | 4/5 headers present (CSP absent); 0 of 12 URLs carry all five |
| Structured Data | 61 | Good - JSON-LD on every audited page with valid Schema.org vocabulary |
| Heading Structure | 55 | Single H1 on every audited page; heading level jumps on 10 of 12 pages |
| Consistency | 59% | 59% - same metadata patterns across every audited page |
| Agent access | 8/8 | Every tested machine user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested machines can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), and plain requests with no User-Agent all return HTTP 200 at inference time.
- JSON-LD is present in the served HTML of every audited page: every machine that fetches the raw HTML receives structured data without needing to execute JavaScript.
- Organization JSON-LD carries `sameAs` links to Wikidata (Q18348837), Wikipedia, LinkedIn, GitHub, and YouTube, providing external authority anchors that machines can use to verify the publisher's identity.

---

## Findings

### At a Glance

We prioritised findings by regulatory exposure first, then by the number of audited pages affected and the effort required to resolve them.

| # | Finding | Bucket | Pri | Effort | Impact |
|---|---------|--------|-----|--------|--------|
| 1 | WCAG AA: 279 issues, 11 types, 10 pages with heading jumps | Compliance Risk | High | Low-Med | Keyboard and screen reader barriers; EAA/ADA exposure |
| 2 | Content Security Policy absent on all 12 pages | Compliance Risk | High | Low | XSS attack surface open; primary browser injection defence missing |
| 3 | Skip link absent on all 12 pages (WCAG 2.4.1) | Compliance Risk | Med | Low | Keyboard users must tab through full navigation on every page |
| 4 | 32 first-party images missing alt text (WCAG 1.1.1) | Compliance Risk | Med | Low | Screen reader users receive no image description |
| 5 | Cold-origin response: avg 3489ms, slowest 6814ms | Cross-cutting | Med | Med | First-time visitor abandonment risk; CDN serves returning visitors quickly |
| 6 | 7 A/B test and personalisation vendors; variant confirmed on /products/personalization/ | Machine Readability Opportunity | High | Low | Machines receive random experiment variants; training corpora ingest contradictory versions |
| 7 | No llms.txt, no discovery link tags in page heads | Machine Readability Opportunity | High | Low | Machines receive no structured content index; growing AI-search gap |
| 8 | Schema Maturity Level 1: WebSite missing recommended properties | Machine Readability Opportunity | Med | Low | Machines lack attribution, publishing context, visual identity |
| 9 | JSON-LD in body (not head) on several audited pages | Machine Readability Opportunity | Med | Low | Head-only parsers may miss structured data |

---

**Priority 1: WCAG AA Accessibility, 279 Issues Across 11 Distinct Types**

**Bucket:** Compliance Risk

**Finding:** Pa11y (automated WCAG 2.1 AA testing) identified 279 issues across the 12 audited pages. Of these, 156 instances trace to 14 recurring template-level patterns -- a single theme edit per pattern resolves all instances at once. A further 12 instances originate from a tracking element injected at runtime by a third-party SDK hosted at ad.ipredictive.com; those elements are not in the site template and the fix runs through the vendor. The three most widespread template-level patterns are: iframes without title attributes (12 pages, WCAG 2.4.1 -- affects sighted keyboard users who navigate frames by title); footer anchor links with no text content (11 pages, WCAG 4.1.2 -- screen reader users encounter links with no label); and heading level jumps from h2 to h4 (10 pages, WCAG 2.4.6 -- screen reader users navigating by heading lose the structural thread). The pricing page carries additional button-name violations (WCAG 4.1.2) on the feature comparison table's tooltip controls -- these are also template-level and resolve in one pass.

**What to change and why:**

- Add `title` attributes to every iframe element. These are template-level: fixing the shared template propagates the change to every page that uses it. WCAG 2.4.1 requires every frame to have a title that identifies its purpose; sighted keyboard users navigate iframes by title in most screen readers and browser frame menus.
- Add visible text content (or `aria-label`) to the empty anchor links in the footer's social media columns. These links have `href` attributes but no accessible name -- WCAG 4.1.2 requires interactive elements to have a name, role, and value available to accessibility APIs. Screen reader users hear a link with no description.
- Resolve the h2-to-h4 heading jumps present on 10 of the 12 audited pages. Heading levels must not skip: WCAG 2.4.6 and Lighthouse require sequential heading order across the full page including header and footer components. The h4 elements identified appear in shared template sections; correcting the template resolves the jump across all affected pages.
- For the tracking image at ad.ipredictive.com: engage the third-party SDK provider to ship a fix that adds `alt=""` on the decorative tracking pixel. Alternatively, a small DOM-observer script can add the attribute after SDK injection. This element is not in the site's own template.

**Effort:** Low-Medium (template-level changes per pattern; one vendor engagement for the tracking SDK)

---

**Priority 2: Content Security Policy Absent on All 12 Audited Pages**

**Bucket:** Compliance Risk

**Finding:** The `Content-Security-Policy` (CSP) header is absent from every response in the audited set. HTTPS and HSTS are present on all 12 pages, and X-Frame-Options and X-Content-Type-Options are present on 11 of 12 pages -- but without CSP, the site has no browser-enforced restriction on which scripts, styles, or iframes may load. CSP is the primary mechanism for preventing cross-site scripting (XSS) and data injection attacks; its absence leaves every visitor's session exposed to any script that can be injected into the page. The `/sitemap` route additionally lacks X-Frame-Options and X-Content-Type-Options.

**What to change and why:**

- Deploy a Content-Security-Policy header at the CDN or origin level. A policy scoped to the site's own origins plus known third-party providers closes the XSS surface. For a Next.js deployment on Vercel, the policy can be set via response headers in the config or at the CDN edge.
- Extend X-Frame-Options and X-Content-Type-Options to the `/sitemap` route. The current gap suggests the header set is configured per route; a single origin-level or CDN-level rule covers all routes in one change.

**Effort:** Low (CDN or Next.js config change; policy definition requires a review of third-party origins in use)

---

**Priority 3: Skip Link Absent on All 12 Audited Pages, WCAG 2.4.1**

**Bucket:** Compliance Risk

**Finding:** No skip link is present on any of the 12 audited pages. WCAG 2.4.1 (Level A) requires a mechanism to bypass blocks of content that are repeated on multiple pages. Without a skip link, sighted keyboard users must press Tab through the full site navigation -- typically 20 or more focusable elements -- before reaching the main content on every page. This affects users who navigate by keyboard only and do not use a screen reader (who can jump to landmarks directly). The absence is template-level and a single change to the shared layout resolves it across all pages.

**What to change and why:**

- Add a visually hidden skip link as the first focusable element in the page template, pointing to the `id` of the main content region. The link becomes visible on focus. WCAG 2.4.1 Level A is a minimum-conformance criterion; its absence is a clear inclusion gap for keyboard users.

**Effort:** Low (single template change)

---

**Priority 4: 32 First-Party Images Missing Alt Text, WCAG 1.1.1**

**Bucket:** Compliance Risk

**Finding:** Across the 12 audited pages, 44 images are missing alt text. Of these, 32 are first-party images served from Contentful's own CDN (`images-www.contentful.com`) -- hero images, case study thumbnails, and product illustrations. A further 12 are tracking pixels injected by a third-party SDK at ad.ipredictive.com; those require a vendor fix, not a template change. WCAG 1.1.1 (Level A) requires a text alternative for every non-decorative image. Screen reader users receive no description of these images, losing context for product features, case study references, and visual identity cues.

**What to change and why:**

- Audit the first-party Contentful CDN images across the wider estate and add descriptive alt text to every non-decorative image. For decorative images, use `alt=""` explicitly to signal to assistive technology that the image carries no information. WCAG 1.1.1 Level A is a minimum-conformance requirement.
- For the tracking pixel at ad.ipredictive.com: engage the vendor to add `alt=""` to the injected element, or apply a DOM-observer patch.

**Effort:** Low (each image requires a concise description; the work is editorial, not technical)

---

**Priority 5: Cold-Origin Response Time, First-Visit Loads Average 3489ms**

**Bucket:** Cross-cutting

**Finding:** Returning visitors are served quickly -- cache-busted re-probes of the slowest page (`/products/ai-actions/`) returned a median of 727ms, and the median-load control (`/products/personalization/`) returned 578ms. However, first-time visitors pay the cold-cache cost at origin: the crawler recorded 6,814ms on the initial fetch of `/products/ai-actions/` and 3,053ms for `/products/personalization/`. The CDN warms pages after the first visitor absorbs the cost; first-time visitors on mobile or slow connections risk abandoning before content appears.

**What to change and why:**

- Investigate origin response time on the slowest pages. The gap between a cold 6,814ms and a warm 727ms indicates that the CDN caching is working but the origin render path is slow. Examine server-side rendering cost, database query time (if any), and whether edge-side rendering or Incremental Static Regeneration (ISR) is appropriate for these product pages.
- Consider proactive cache warming for high-traffic landing pages. Triggering a single fetch after each deployment ensures the CDN edge has a warm copy before the first real visitor arrives.

**Effort:** Medium (origin investigation and possible ISR/edge-rendering change)

---

**Priority 6: 7 A/B Test and Personalisation Vendors, Variant Confirmed on /products/personalization/**

**Bucket:** Machine Readability Opportunity

**Finding:** We detected seven A/B test and personalisation vendor frameworks across the 12 audited pages: Ninetailed, Google Optimize, Optimizely, Visual Website Optimizer (VWO), Kameleoon, Dynamic Yield, and Unbounce Smart Traffic. We confirmed content variance on `/products/personalization/`: three cache-busted probes of the same URL returned "Flexible personalization made for marketers" on probes 1 and 2, then "Personalization that puts devs in the driver seat" on probe 3. The experiment layer assigned a different cohort on the third cold fetch.

This is the Stateless Machine Visitor problem. A/B tests assume persistent sessions: cookies assign a visitor to a cohort on first fetch and that cohort follows them across pages. Machines arrive cold on every fetch -- no cookies, no cohort, no session continuity. Each HTTP request is independent. A machine building an understanding of Contentful may receive variant A on the homepage, variant B on the pricing page, and the control on the product page, assembling a picture from incoherent fragments.

The training corpus risk compounds this. Sitemap-sweeping bots that ingest pages for model training run across the full sitemap on each crawl pass. Each pass is cold. The bot may ingest "Personalization that puts devs in the driver seat" on one crawl and "Flexible personalization made for marketers" on the next, embedding contradictory descriptions of the same product into training data.

**What to change and why:**

- Configure each personalisation platform to serve the control (canonical) variant to known machine User-Agents. ClaudeBot, GPTBot, ChatGPT-User, PerplexityBot, GoogleOther, CCBot, and Google-Extended are the most important to cover. Most platforms support User-Agent bypass rules; this is a configuration change, not a code change.
- Reference experiment URLs in llms.txt with a note that content varies by session, so machines are warned not to treat any single fetch as canonical.
- Consider serving a stable, non-personalised version of key pages to bot User-Agents via CDN routing rules, ensuring machines see the publisher's intended canonical content.

**Effort:** Low (platform configuration change; llms.txt update)

---

**Priority 7: No llms.txt, No Discovery Link Tags in Page Heads**

**Bucket:** Machine Readability Opportunity

**Finding:** The site publishes no [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) at any of the standard locations (`/llms.txt`, `/llms-full.txt`, `/.well-known/llms.txt`). No `<link rel="llms-txt">` or `<link rel="sitemap">` link tags appear in the head of any audited page. Machines querying the site for a structured content index receive no description; they must crawl individual pages to build an understanding of what the site covers. Discovery Readiness scores 39/100 (Could Be Better) as a result.

**What to change and why:**

- Publish an llms.txt at `/llms.txt` containing a brief site description, the primary URL, and a page inventory with canonical URLs and summaries. Serve it as `text/html` (with the content inside a `<pre>` block) rather than `text/plain`; our recommendation diverges from the llmstxt.org specification on this point because Common Crawl, which underpins most major LLM training datasets, prioritises HTML pages. Add a sitemap entry so crawlers have a reliable discovery path.
- For a content estate of Contentful's scale (3,358 URLs in the sitemap), publishing an llms-full.txt companion file is worth scoping. This concatenates the full text of every published page into a single file so machines can ingest the corpus in one fetch.
- Add `<link rel="llms-txt" href="/llms.txt">` and `<link rel="sitemap" href="/sitemap-index.xml">` to the page template's head. These link relations are the standard machine-discovery pointers and require a single template change to propagate across all pages.

**Effort:** Low (file authoring + template change + sitemap entry)

---

**Priority 8: Schema Maturity Level 1, WebSite Missing Recommended Properties**

**Bucket:** Machine Readability Opportunity

**Finding:** Both Schema.org types in use -- WebSite and Organization -- appear on the audited pages with 100% required-property coverage. The Organization entity is particularly well-implemented: its `sameAs` array connects to authoritative external identifiers including Wikidata (Q18348837) and Wikipedia. However, WebSite blocks earn 0% on recommended properties: `image`, `datePublished`, `author`, and `publisher` are absent from every instance. JSON-LD blocks are emitted inside `<body>` rather than `<head>` on several audited pages. The overall Structured Data Quality score is 61/100 (Good). Schema Maturity sits at Level 1 (Decoration).

**What to change and why:**

- Add `image`, `datePublished`, `author`, and `publisher` to the WebSite JSON-LD block. These are the recommended properties that let machines enrich answers with visual identity, publishing context, and attribution. A single template-level change propagates to all pages.
- Move JSON-LD blocks into the `<head>` section. Structured data in `<head>` is reachable by machines that parse only the head for metadata.
- For product pages, consider adding `SoftwareApplication` schema to describe each product's capabilities, pricing model, and platform requirements.

**Effort:** Low (template and JSON-LD changes)

---

**Priority 9: JSON-LD Emitted Inside body on Several Audited Pages**

**Bucket:** Machine Readability Opportunity

**Finding:** On several audited pages, JSON-LD `<script>` blocks are placed inside `<body>` at byte offsets of 18,000 to 22,000 -- well past the start of the main content. Machines that parse only the `<head>` for metadata signals will not reach these blocks. The blocks are present in the served HTML and not JavaScript-injected, so they will be found by machines that parse the full document; the risk is specifically for head-only parsers with limited fetch windows.

**What to change and why:**

- Move all JSON-LD blocks to the `<head>` section. HTML5 permits `<script type="application/ld+json">` in either location, but placing structured data in `<head>` is the standard approach and follows Google's implementation guidance. The change is a template-level move with no visual or functional impact.

**Effort:** Low (template change only)

---

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **`potentialAction` (SearchAction) on WebSite**: the site has a search function at `/search` and a Marketplace-specific search, but neither is declared in the WebSite JSON-LD. Adding a `potentialAction` with a `SearchAction` target makes the search machine-discoverable -- enabling machines to surface direct search referrals for Contentful content.
- **`BreadcrumbList` on product pages**: product and feature pages currently have no breadcrumb structured data. Adding BreadcrumbList gives machines a structured navigation path, which reduces positional inference and improves how the page hierarchy is represented in agent answers.
- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for machines -- a lightweight signal that informs training and indexing decisions without requiring a full MX governance implementation.

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

**Summary:** All 8 tested agents can access the site. No bot protection blocks machines at inference time.

**Impact:** All tested machines can access this site at inference time. When users ask AI assistants about Contentful, those assistants can fetch and read current content. This is the ideal state for MX compatibility.

### Markdown Content Negotiation

| Check | Result |
|-------|--------|
| URL probed | <https://www.contentful.com> |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No - server returns HTML regardless of Accept header |

### Non-Standard Response Headers

No non-standard response headers were recorded in this audit.

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how this site handles errors for both human visitors and machines.

| Check | Result |
|-------|--------|
| HTTP status code | 404 (correct) |
| Custom error page | No -- Next.js error boundary shell, no custom 404 content in served HTML |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | No |
| Internal navigation links | None: no links to valid content |
| MX governance tags | Absent |
| Schema.org JSON-LD | No -- schema.org strings detected in JS bundle only, no JSON-LD script tags in served HTML |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms.

**Slowest.** The slowest page is `https://www.contentful.com/products/ai-actions/`. A first-time visitor sees the cold-cache cost: the crawler recorded 6,814ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes returned a returning-visitor median of **727ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://www.contentful.com/products/personalization/`. A first-time visitor sees the cold-cache cost: the crawler recorded 3,053ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes returned a returning-visitor median of **578ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Returning visitors are served quickly across the site, but first-time visitors hit slow cold-cache responses on both the slowest page and a median-load page. The CDN is warming pages effectively, but the origin's cold response time is poor.

---

## Personalisation and A/B Testing: Machine Visitor Impact

We observed confirmed content variance on `/products/personalization/`: the page returned "Personalization that puts devs in the driver seat" on probe 3 versus "Flexible personalization made for marketers" on probes 1 and 2. The experiment layer assigned a different cohort on the third cold, stateless HTTP fetch.

Seven A/B test and personalisation vendor frameworks were detected across the audited pages: Ninetailed, Google Optimize, Optimizely, Visual Website Optimizer (VWO), Kameleoon, Dynamic Yield, and Unbounce Smart Traffic. These were identified from script URL patterns, DOM attributes, and inline JavaScript globals in the served HTML.

The underlying problem is structural: A/B tests assume persistent sessions. A human visitor receives a cohort assignment on first fetch -- stored in a cookie -- and that cohort follows them across every subsequent page. The experiment is coherent. The journey is internally consistent. Machines do not honour this contract. Each HTTP request arrives cold: no session, no cohort, no history. An experiment layer assigns the request to a cohort based on whatever signals are available (timestamp, IP range, a random number) and serves a variant. The machine records the content it received, constructs its answer, and moves on. The next fetch of the same URL repeats the process from the beginning.

The training corpus risk runs deeper. Sitemap-sweeping bots that ingest pages for model training run across the full sitemap on each crawl pass. Each pass is cold. The bot may record "Personalization that puts devs in the driver seat" on one crawl and "Flexible personalization made for marketers" on the next, embedding contradictory descriptions of the same product page into training data. A model trained on this corpus cannot give a consistent answer about what Contentful's personalisation product does, because the training data contains both versions as equally-weighted facts.

**Recommended mitigations:**

- Configure each personalisation platform to serve the control (canonical) variant to known machine User-Agents. ClaudeBot, GPTBot, ChatGPT-User, PerplexityBot, GoogleOther, CCBot, and Google-Extended are the most important to cover. Most platforms support User-Agent bypass rules; this is a configuration change, not a code change.
- Reference experiment URLs in llms.txt with a note that content varies by session, so machines are warned not to treat any single fetch as canonical.
- Consider serving a stable, non-personalised version of key pages to bot User-Agents via CDN routing rules, ensuring machines see the publisher's intended canonical content.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /

Sitemap: https://www.contentful.com/sitemap-index.xml
```

The robots.txt declares a permissive open crawl for all user-agents with no disallowed paths, and announces the sitemap index at `https://www.contentful.com/sitemap-index.xml`. All three directives (`User-agent`, `Allow`, `Sitemap`) are standard RFC 9309 fields; no non-standard or vendor-specific directives are present.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 3358 entries | Fewer than crawl found |
| `<lastmod>` | Yes | Varied dates -- reliable freshness signal |
| `<changefreq>` | No | Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents still use it to gauge re-crawl cadence |
| `<priority>` | No | Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents can use it as a relative-importance hint |

**Sitemap grade:** Partial

The sitemap declares 3,358 URLs with `<lastmod>` dates, giving machines a reliable freshness signal per entry. The `<changefreq>` and `<priority>` attributes are absent. Google dropped both as ranking signals in 2017, but non-Google crawlers and AI agents still read them -- `changefreq` as a re-crawl cadence hint and `priority` as a relative-importance signal. Adding them is low-effort and broadens machine compatibility beyond Google.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms.txt at the standard location (`/llms.txt`) or the alternative well-known path (`/.well-known/llms.txt`). Machines that query the host for a structured content index receive no authored description of the site's purpose, scope, or content policy. Adding an llms.txt with a site description and a curated page inventory is the single change with the clearest return on the Discovery Readiness score.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt at `/llms-full.txt`. The llms-full.txt convention, popularised by documentation tooling such as Fern and Mintlify, concatenates the full text of every published page into a single file so machines can ingest the entire corpus in one fetch rather than crawling each page individually. Given the scale of the Contentful site (3,358 URLs in the sitemap), a full-corpus file would be substantial; whether it is worthwhile depends on the content depth of the wider estate, which this 12-page sample does not fully represent.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most relevant next step for Stage 5 capability.

### Other discovery files detected

One additional registered `/.well-known/` path returned a response: `/.well-known/security.txt` (HTTP 200, PGP-signed). This is a positive signal -- the security.txt file provides a machine-readable security contact following RFC 9116.

## Structured Data Inventory

| Schema Type  | Pages | Required % | Recommended % | Notes                                    |
|--------------|-------|------------|---------------|------------------------------------------|
| WebSite | 12 | 100% | 0% | `image`, `datePublished`, `author`, `publisher` missing |
| Organization | 12 | 100% | 100% | Well-implemented with sameAs to Wikidata, Wikipedia, LinkedIn |

**Structured Data Quality:** 61/100\
**Coverage:** 12 pages with JSON-LD out of 12 total (100%)\
**Unique types:** 2

Across the 12 pages we audited, structured data presence is solid. Both types carry full required-property coverage. The Organization entity is a standout: its sameAs array connects to authoritative external identifiers including Wikidata (Q18348837), which is the kind of linked-data signal that moves the SDQ score and increases machine confidence in entity identity.

### SDQ Score Breakdown

| Component                       | Earned | Max | Meaning                                                       |
|---------------------------------|--------|-----|---------------------------------------------------------------|
| Presence | 10 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 25 | 25 | Worst-case across all entities |
| Recommended property coverage | 8 | 15 | Average across entities |
| Entity richness | 5 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 0 | 15 | Nested @type values + @id linking |
| Linked-data signals | 3 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 10 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **61** | **100** | |

---

## Structured Data Findings

We identified structured data property gaps across the audited set. The full per-entity list is delivered alongside this report as a sidecar CSV: [`www-contentful-com-structured-data-findings.csv`](www-contentful-com-structured-data-findings.csv).

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| WebSite | recommended | image | 12 | 12 | Site has no logo / hero image declared in structured data |
| WebSite | recommended | datePublished | 12 | 12 | No site-level publish date for crawler context |
| WebSite | recommended | author | 12 | 12 | Site has no top-level author/owner declared |
| WebSite | recommended | publisher | 12 | 12 | Site has no top-level publisher declared |
| jsonLd | location | outside-head | 5 | 5 | JSON-LD emitted inside body at byte 18,000-22,000. Agents that parse only the head may not see it. |
| openGraph | location | byteOffset | 1 | 1 | Open Graph tags start past the 250 KB agent-truncation threshold on one page. |

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

### Provenance verdict

No provenance-gap blockers detected on the audited set. Pages clear the citation-readiness floor on the structural primitives we measure here.

*No blockers.*

---

## Marker Reachability

| Marker                            | In served   | In rendered | In head | Reachable <250KB | Injected by JS |
|-----------------------------------|-------------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Yes | Yes | No | Yes | No |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Yes | Yes | 82% | No | No |
| Twitter Card meta tags | Yes | Yes | 82% | No | No |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | 82% | No | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Not present | Not present | n/a | n/a | n/a |

All detected markers are present in the served HTML on the content pages we audited. Open Graph, Twitter Card, and canonical tags are present on all 11 content pages. The HTML sitemap page (`/sitemap`) is a navigational directory listing and does not require these tags; it is excluded from content-page consistency checks.

---

## Schema Maturity Level

|  | Level | Name | What it looks like |  |
|---|-------|------|---------------------|---|
|  | 0 | Clean slate | No Schema.org markup present. |  |
| **->** | 1 | Decoration | Typed blocks present, with sparse properties and no nesting or cross-references. | **<-** |
|  | 2 | Good schema | Full required and recommended properties, nested types where appropriate, valid vocabulary. |  |
|  | 3 | Real graph | Level 2 plus @id cross-references between entities and linked-data signals. |  |
|  | 4 | Verified linked data | Level 3 plus external identifiers (Wikidata QIDs, ISNIs, ORCIDs) and provenance metadata. |  |

**Current level:** 1: Decoration\
**To reach the next level:** Fill in the required and recommended Schema.org properties for each typed block (see www-contentful-com-structured-data-findings.csv for the specific gaps). Connect related entities inline or via @id references to canonical entities defined elsewhere on the site.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one.

| Stage | Name              | Status      | Score | Key Metric                                        |
|-------|-------------------|-------------|-------|---------------------------------------------------|
| 1 | Discovery | Partial | 78 | Crawlable with semantic HTML |
| 2 | Citation | Fail | 33 | Schema.org: WebSite, Organization (100% required properties) |
| 3 | Search & Compare | Fail | 20 | Pricing detected but no commerce schema |
| 4 | Price Understanding | Partial | 33 | Pricing visible but no Offer schema for agent parsing |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

The site is Partially Compatible for its type. Stage 1 (Discovery) is partial: semantic HTML and robots.txt are in place, but the missing llms.txt and discovery link tags hold the score below a full pass. Stages 2 and 3 stall on schema depth -- WebSite and Organization cover identity but not the product catalogue, pricing, or comparison signals that move machines through the later stages. Stage 5 (Purchase Confidence) does not apply: Contentful is a SaaS platform and does not host transactions directly on the marketing site.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability (PS) runs eleven reading-resilience checks on every audited page.

- **Truncation Risk** - Fail - 12/12
  - *Means:* Every page in the audited set exceeds the 250 KB threshold at which some machines stop reading. A machine with a limited fetch window may reach the metadata in the head but stop before the main content.
  - *Data:* All 12 pages exceed the 250 KB ceiling.
- **SPA Shell** - Pass - 12/12
  - *Means:* Served HTML matches rendered HTML -- no JavaScript is required for content. Server-side machines see the same content a browser does.
  - *Data:* Max gap score: 3.
- **Soft 404** - Pass - 12/12
  - *Means:* Missing pages return a proper HTTP 404 status.
  - *Data:* 0 soft-404 pages detected.
- **Boilerplate Burial** - Pass - 12/12
  - *Means:* Navigation and chrome do not dominate the page; main content is reachable without wading through overhead.
  - *Data:* Highest boilerplate-to-content ratio: 0.00.
- **Tabbed Disclosure** - Pass - 12/12
  - *Means:* No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML.
  - *Data:* 1 page with tab widgets.
- **Delayed Content Start** - Pass - 3/3
  - *Means:* Main content begins early in the document.
  - *Data:* Content starts at up to 17% of the document on some pages.
- **Broken Code Fences** - Pass - 12/12
  - *Means:* All fenced code blocks are properly balanced.
  - *Data:* 0 pages with unbalanced fenced code blocks.
- **HTTP Content Negotiation (Vary)** - Pass - 12/12
  - *Means:* The server returns a single content type per URL.
  - *Data:* 0 pages advertise format negotiation.
- **Cross-Host Redirect** - Pass - 12/12
  - *Means:* No cross-domain redirects.
  - *Data:* 1 page crosses origin during redirect.
- **Generic Headings** - Pass - 12/12
  - *Means:* Every heading carries specific content.
  - *Data:* Worst case: 0% generic headings.
- **Body Content Ratio** - Fail - 1/3
  - *Means:* Body prose averages only 17% of served bytes on the sampled pages. Scripts, styles, and images account for the remaining 83%; machines receive very little readable signal per byte fetched.
  - *Data:* Average: 17%. Threshold: 30%.
- **Inline Tag Bloat** - Fail - 12/12
  - *Means:* Every page in the audited set carries large inline `<script>` blocks. Externalising these blocks to separate `.js` files lets machines skip them during cheap head-first fetches.
  - *Data:* Multiple elements over 500 bytes per page.
- **Head Weight** - Pass - 3/3
  - *Means:* Head bytes are a small fraction of each page. Machines reach body content quickly.
  - *Data:* Max ratio: 0.03.

**Pipeline Survivability score:** 79/100

The two failing checks -- Truncation Risk and Inline Tag Bloat -- both point to the same root cause: page payloads dominated by JavaScript. All 12 audited pages exceed the 250 KB truncation threshold, and all 12 carry large inline script blocks. Moving repeated analytics and consent scripts to external files would reduce both the inline bloat and the total page size in one pass.

For the methodology behind this section, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

| Source        | Score (band)  | Bare div stats                              | Top bare selectors                                                                                                                                                                                          |
|---------------|---------------|---------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Rendered HTML | 34/100 (high) | 290 bare divs (51% of containers, depth 7) | `div` (240), `div.grid-helper-col.col-span-1` (144), `div.tooltip_root__EulUk` (95), `div.button_markup_root__sACGr.button_markup_secondary__F_qxS` (68), `div.round-icon.round_icon_container__Jmlwp` (57) |

**Worst page (rendered):** <https://www.contentful.com/products/personalization/>

On the `/products/personalization/` page -- the worst case in the audited set -- 290 of 566 container elements (51%) are bare divs with no semantic role, a depth reaching 7 levels. Machines encountering this page lose structural context and fall back on position and class-name inference to determine meaning. The most impactful first move is wrapping the obvious landmarks (the feature sections, the testimonial blocks, the comparison grid) with `<section>`, `<article>`, or `<aside>` elements, which drops the bare-div ratio without restructuring the layout.

---

## Security Headers

| Header                          | Status   | Purpose                                          |
|---------------------------------|----------|--------------------------------------------------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | Yes (11/12) | Prevents clickjacking |
| X-Content-Type-Options | Yes (11/12) | Prevents MIME-type sniffing |

Header coverage is uneven across audited responses: X-Frame-Options on 11/12 audited responses, X-Content-Type-Options on 11/12 audited responses. CSP is absent from every audited response. A single server-config change brings the missing responses in line with the strongest baseline already in place.

**Coverage:** 0 of 12 audited URLs carry all five headers.

- **`/sitemap`**: HTTPS Yes - HSTS Yes - CSP No - X-Frame No - X-Content-Type No
- **All other pages**: HTTPS Yes - HSTS Yes - CSP No - X-Frame Yes - X-Content-Type Yes

HTTPS: 12/12 | HSTS: 12/12 | CSP: 0/12 | X-Frame-Options: 11/12 | X-Content-Type-Options: 11/12

---

## Cross-Page Consistency

| Pattern                          | Coverage | Pages missing it   |
|----------------------------------|----------|--------------------|
| Schema.org JSON-LD | 100% | - |
| MX governance tags | 0% | 12 |
| Open Graph tags | 100% | - (nav pages excluded) |
| Twitter Card tags | 100% | - (nav pages excluded) |
| Skip link | 0% | 12 |
| llms.txt link tag | 0% | 12 |
| Canonical URL | 100% | - (nav pages excluded) |
| Exactly 1 H1 | 100% | - |
| Code examples present | 0% | 12 |
| Self-contained sections | 92% | `/pricing/` |
| Error/troubleshooting docs | 8% | 11 |
| Lighthouse heading compliance | 17% | 10 |

*Note: Open Graph, Twitter Card, and Canonical URL are evaluated on content pages only. The HTML sitemap page (`/sitemap`) is a navigational directory listing -- these tags are optional for it.*

**Overall Consistency:** 62%

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no organisation-name or canonical-URL divergence flagged by the consistency check.

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Organisation name parity | Pass | Organisation name appears consistently across all 12 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 12-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

We found 180 identical inline fragments repeated across multiple pages, totalling approximately 1.8 MB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes per fragment | Appears on N pages | Preview                                                          |
|------|-------------------:|-------------------:|------------------------------------------------------------------|
| js | 1042 | 24 | (function(){function g(d){for(var h=document.cookie.split("; |
| js | 939 | 24 | (function(){window.__ctflCookies=... |
| js | 891 | 14 | (function(){function f(c){for(var a=0;a<c.length;a++){var d= |
| js | 164 | 14 | (self.__next_s=self.__next_s||[]).push([...]) |
| js | 4741 | 12 | (function(){function q(a){for(var b={host:null,form:null,btn |
| js | 2716 | 12 | self.__next_f.push([1,"(function(){...runCanaryToken..."]) |
| js | 2539 | 12 | (function(f){function h(a){return(a=document.cookie.match(ne |
| js | 1654 | 12 | (function(){if(google_tag_manager["rm"]["226306667"](9)... |
| js | 1230 | 12 | (function(){function b(h,d,f,g){try{if(d!==void 0&&d!==null) |
| js | 987 | 12 | (function(){function c(b){b=String(b||"").toUpperCase()... |

*Showing the top 10 of 161 duplicate fragments by occurrence count. The full inventory is preserved alongside this report as `www-contentful-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file. The fragment hash in the consistency analysis identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Accessibility legislation across major markets -- the EAA (Directive (EU) 2019/882, in force 28 June 2025) in the EU, Section 508 of the US Rehabilitation Act, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent instruments in Australia and Canada -- has converged on ISO 14289-1 (PDF/UA) as the technical baseline for accessible documents. Separately, an untagged PDF is invisible to machines: search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from an image-based or untagged PDF in the same way they can from semantic HTML.

We linked no PDFs from the 12-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline, and produces a per-document verdict you can act on.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 279 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Address Priority 6**: configure A/B test platforms to serve canonical content to known machine User-Agents
3. **Review Priority 2-5**: CSP, skip link, alt text, performance improvements
4. **Consider optional enhancements**: potentialAction, BreadcrumbList, Content-Signal directives

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | WCAG 2.1 AA compliance + A/B test bypass rules | Priority 1 compliance resolved; machines receive canonical content |
| Full Optimization | Catalogue Visibility, Semantic Structure, Discovery Readiness, Structured Data, MX Stack Completeness, Performance, Security headers | Full machine readiness |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

SEO is the standout strength across the audited set: 94/100 overall and 93/100 on content pages. JSON-LD is present in the served HTML of every audited page, all 8 tested machines return HTTP 200 at inference time, and the Organization entity carries strong linked-data signals including Wikidata (Q18348837). The headline opportunities are accessibility (279 WCAG 2.1 AA issues with 14 template-level patterns to resolve), seven active A/B test and personalisation vendors with confirmed content variance on the `/products/personalization/` page, a missing Content Security Policy across all audited pages, and a Discovery Readiness score of 39/100 driven by the absence of llms.txt, discovery link tags, and MX governance fields. Addressing the A/B test bypass rules alongside the accessibility and CSP items closes the most urgent gaps; adding llms.txt and MX governance metadata moves the site from MX Readiness Level 1 (Discoverable) to Level 2 (Citation-ready). We are ready to scope either engagement.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 99/100 | Excellent |
| Accessibility | 77/100 | Excellent |
| SEO (all pages) | 94/100 | Excellent |
| SEO (content pages) | 93/100 | Excellent |
| MX Stack Completeness | 66/100 | Good |
| Structured Data Quality | 61/100 | Good |
| Discovery Readiness | 39/100 | Could Be Better |
| Heading Quality | 55/100 | Good |
| Semantic Ratio | 4% | Needs Improvement |
| Agent Readability | 72/100 | Good |
| Pipeline Survivability | 79/100 | Excellent |
| Cross-Page Consistency | 59% | Good |

---

## Appendix A: Pages Audited

- **`/sitemap`**: SEO 69 - A11y 75 - Back 85 - Served 100 - Rendered 100
- **`/ (nav)`**: SEO 98 - A11y 75 - Back 95 - Served 90 - Rendered 95
- **`/pricing/ (nav)`**: SEO 96 - A11y 70 - Back 95 - Served 95 - Rendered 98
- **`/contact/sales/ (nav)`**: SEO 85 - A11y 75 - Back 85 - Served 100 - Rendered 91
- **`/products/platform/`**: SEO 98 - A11y 80 - Back 95 - Served 100 - Rendered 100
- **`/products/personalization/`**: SEO 98 - A11y 75 - Back 95 - Served 100 - Rendered 100
- **`/products/ai-actions/`**: SEO 100 - A11y 80 - Back 95 - Served 100 - Rendered 100
- **`/products/analytics/`**: SEO 90 - A11y 80 - Back 95 - Served 100 - Rendered 100
- **`/products/studio/`**: SEO 98 - A11y 80 - Back 95 - Served 100 - Rendered 100
- **`/products/ecosystem/`**: SEO 87 - A11y 80 - Back 95 - Served 100 - Rendered 100
- **`/marketplace/ (nav)`**: SEO 94 - A11y 70 - Back 95 - Served 100 - Rendered 100
- **`/products/personalization/ai-suggestions/`**: SEO 98 - A11y 80 - Back 95 - Served 100 - Rendered 100

Pages marked (nav) are navigational: they route visitors to content rather than containing it, and are excluded from the SEO content average. Content-pages SEO average: 93/100.

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. The total is dominated by the HTML sitemap page (`/sitemap`), which lists 3,388 same-host URLs across the full site. The remaining 11 pages average 66 links each -- normal for a site with a large navigation menu and footer. External links are not tracked; this inventory covers same-host `<a href>` links only.

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 4119 |
| -- `/sitemap` page only | 3388 |
| -- remaining 11 pages | 731 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |

---

## Appendix C: Image Optimisation

We audited 890 images across the 12 pages sampled. Format distribution: 598 SVG, 264 PNG, 15 JPEG, 1 WebP, and 12 in other or unrecognised formats. Alt text coverage requires attention: 846 of 890 images (95.1%) carry alt text; 44 images are missing it. Of the 44 missing, 32 are first-party images served from Contentful's own CDN -- hero images, case study thumbnails, and product illustrations. A further 12 are tracking pixels injected at runtime by a third-party SDK at ad.ipredictive.com; those require a vendor fix, not a template change.

Loading strategy across the audited set is well-managed: 840 images carry `loading="lazy"`, 14 carry `loading="eager"`, and 36 have no loading attribute set. No attribute is not the same as eager -- the browser applies its default, which historically treated all images as eager but modern browsers may apply lazy heuristics to off-screen images. Only `loading="lazy"` guarantees deferred loading across all browsers.

The image pipeline predominantly uses SVG for icons and UI elements (appropriate -- SVG is already optimal for vector graphics) and PNG for photographs and product images. The 264 PNG and 15 JPEG images are candidates for WebP conversion: WebP delivers meaningfully smaller file sizes with no visible quality loss, and all modern browsers support it. The original PNG/JPEG files should be retained for `og:image` and `twitter:image` social tags, which benefit from maximum platform compatibility.

> **Double-lazy loading pattern not detected** -- no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness (DR) scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. **Pipeline Survivability (PS)** runs eleven reading-resilience checks. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**A/B test and personalisation detection.** The audit scans each cached decoded HTML file for known vendor signatures (script URL patterns, DOM attributes, inline JavaScript globals) against a registry of 12 vendors. When detected, the slowest-page probe's content samples are cross-referenced for H1 variance -- confirming whether the experiment layer is serving different content to stateless machine fetchers.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Next.js**. The main audit uses Next.js-specific rate limits from our platform knowledge base.

**Scope:** 12 pages analysed | Platform: Next.js | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

**Measurement completeness:** Some probes may encounter network errors (HTTP 499 responses) or timeouts that halt data collection for that check. These are recorded in the audit findings as informational notes.

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

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran, the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. The adjacent `www-contentful-com-report.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `www-contentful-com-report.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict.

To extract the chain from the PDF: `exiftool -b -XMP-mx:ProvenanceAiPayload www-contentful-com-report.pdf | jq .`.

The PDF itself conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot`.

This practice is what MX expects of every artefact in the field. We apply it first to ourselves.

---

**Confidence Level:** High -- full automated testing plus cache-verified cross-referencing.\
**Document Version:** 1.0\
**Date:** 2 June 2026\
(c) 2026 CogNovaMX. All rights reserved.

*This is a sample run. Contact CogNovaMX for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*
