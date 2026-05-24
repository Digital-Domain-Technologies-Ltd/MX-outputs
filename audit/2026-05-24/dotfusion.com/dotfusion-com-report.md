---
title: "Dotfusion: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-24"
modified: "2026-05-24"
client: "Dotfusion"
clientSlug: "dotfusion-com"
clientUrl: "https://dotfusion.com"
reportId: "dotfusion-com-WEB-AUDIT-20260524"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-24"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Dotfusion"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 70
accessibilityScore: 73
seoScore: 86
llmSuitabilityScore: 100
totalIssues: 68
pagesAudited: 7
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
    output: "mx-outputs/audit/2026-05-24/dotfusion.com/dotfusion-com-report.pdf"
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
**Date:** 24 May 2026\
**Report ID:** dotfusion-com-WEB-AUDIT-20260524

---

## About This Report

We audited 7 pages across dotfusion.com's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** Here we look at the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 7 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead (our recommendation diverges from the llmstxt.org specification, which calls for plain text); the fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **70**/100 | `#############-----` |
| Accessibility | **73**/100 | `#############-----` |
| SEO | **86**/100 | `###############---` |
| Machine Suitability | **100**/100 | `##################` |
| MX Stack Completeness | **44**/100 | `########----------` **(!)** |
| Agent Readability | **77**/100 | `##############----` |
| Pipeline Survivability | **97**/100 | `#################-` |

We audited seven pages of dotfusion.com against ten dimensions spanning human experience, technical health, and machine readiness. Across the audited set, the picture for human visitors is solid. Machine Suitability leads the scorecard at 100/100, and an SEO score of 86/100 (Excellent) tells us the foundations are well laid: pages are structured to be found, content is purposeful, and the signals that matter to organic search are largely in order. dotfusion.com delivers a competent, well-structured experience for the people it serves, with meaningful opportunities to strengthen the compliance and machine-readiness layers.

Before we turn to machine readiness, we want to name accessibility as a Priority 1 compliance item. We recorded 68 raw instances of WCAG AA issues across the audited set, flagged critical by Pa11y, spanning 38 distinct issue types. The remediation picture is more manageable than the raw count suggests: 45 of those instances trace to 10 recurring template patterns, meaning a single fix per pattern resolves every related instance in one pass. That is a meaningful opportunity to reduce exclusion risk and strengthen the compliance position before any other work begins. Once accessibility is on a stable footing, the headline opportunity is machine readiness. Discovery Readiness sits at 25/100, the lowest score across the audit, and Structured Data Quality comes in at 63/100 with Schema Maturity at Level 1 (Decoration). Together, these scores tell us that AI agents, search crawlers, and other automated machines have limited purchase on what dotfusion.com knows and offers. The groundwork is there to change that.

dotfusion.com is built on Next.js, and we note that AI Suitability on served content scores 100/100 across the audited set, which is a strong foundation. The most durable lever available, regardless of how individual agents handle rendering, is well-formed Schema.org JSON-LD: structured data embedded at the document level that every machine can read without executing client-side logic. Lifting the Structured Data Quality score and extending Discovery Readiness are the steps most likely to carry the site's strong human-facing performance into the machine-readable layer where citation eligibility and agent visibility are decided.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, dotfusion.com delivers strong results for human visitors, with SEO sitting at 86/100 (Excellent) and performance averaging 1496ms (Excellent), while accessibility at 73/100 (Good) presents the clearest opportunity to close the gap.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Good | B |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can reliably parse and survive the content pipeline at 97/100 and read structured signals at 63/100, with Discovery Readiness at 25/100 and MX Stack Completeness at 44/100 marking the primary areas for improvement.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 25/100 | Needs Improvement | D |
| Structured Data Quality | 63/100 | Good | B |
| MX Stack Completeness | 44/100 | Could Be Better | C |
| Pipeline Survivability | 97/100 | Excellent | A |

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

**Evidence:** MX Stack Completeness 44/100 | Structured Data Quality 63/100 | Discovery Readiness 25/100 | Consistency 50%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so agents can cite as well as discover. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, dotfusion.com demonstrates a strong foundation to build on, with SEO performance at 86/100 and a rich structured data vocabulary already in place across the audited pages. These strengths give us a clear, well-grounded platform from which the improvements that follow will deliver their full effect.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent - 1496ms average load time |
| SEO (content pages) | 86 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 2/5 | 2/5 headers present (CSP, X-Frame-Options, X-Content-Type-Options absent); 0 of 7 URLs carry all five |
| Structured Data | 63 | Good - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 96 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 50% | 50% - same metadata patterns across every page |
| Agent access | 7/7 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.

---

## Findings

### At a Glance

We present the findings below as opportunities prioritised by impact across the audited set, with discovery gaps leading because they block machines from indexing, citing, and routing to dotfusion.com before any other signal can take effect. Structured data depth and catalogue visibility follow, as strengthening those layers directly extends how accurately machines represent the services on offer.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Unlabelled header anchor links, WCAG 4.1.2 (7 instances on 7 pages) | Compliance Risk | High | Low | Screen reader users may miss navigation targets |
| 2 | reCAPTCHA textarea without accessible name, WCAG 4.1.2 and 1.3.1 (7 instances on 7 pages) | Compliance Risk | High | Low | Screen reader users may miss the CAPTCHA field and are unable to submit forms |
| 3 | Unlabelled form inputs (#name, #company), WCAG 4.1.2 (5 instances on 5 pages) | Compliance Risk | High | Low | Screen reader users may miss field purpose and risk form-submission errors |
| 4 | Semantic Structure 49/100, worst page: /services/contentful-development-agency (23 of 45 bare divs) | Compliance Risk | Medium | Medium | Machines and assistive tools are less likely to infer content hierarchy correctly |
| 5 | Security headers incomplete (2 of 5 present; X-Frame-Options, CSP, X-Content-Type-Options absent) | Cross-cutting | High | Low | Visitors and downstream referrers may miss key browser-enforced protections |
| 6 | Discovery Readiness 25/100: llms-full.txt, agent-card.json, ai.txt, humans.txt absent; llms.txt present but incomplete | AI Opportunity | High | Medium | Machines risk missing structured permission and identity signals for dotfusion.com |
| 7 | MX Stack Completeness 44/100: discovery artefacts and MX governance fields absent | AI Opportunity | Medium | Medium | Machines may miss audience, content-type, and canonical signals; reduces agent confidence |
| 8 | Structured Data Quality 63/100: schema coverage incomplete across the audited set | AI Opportunity | Medium | Medium | Machines may miss service and entity relationships, reducing citation eligibility |

---

**Priority 1: Unlabelled Header Anchor Links, WCAG 4.1.2 (7 instances on 7 pages)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, at least one anchor element in the site header on each audited page has a valid href attribute but supplies no link content. Screen reader users encounter a link with no announced label, leaving them unable to determine the link's destination or purpose. Because the pattern originates in the shared header template, a single template edit resolves all seven instances.

**What to change and why:**

- Add a descriptive accessible label to each header anchor that currently carries no text content; this directly addresses WCAG 4.1.2 (Name, Role, Value) and ensures screen reader users receive a meaningful announcement when they reach those links.
- Verify the fix in the shared header template rather than on individual pages; because all seven instances share the same selector path under `#site-header`, one edit propagates across every page that uses that template.
- After the edit, re-run Pa11y against the audited set to confirm zero remaining instances of this pattern; the Accessibility score of 73/100 is weighted by recurring template issues, and resolving this pattern is a direct contribution to closing that gap.

**Effort:** Low

---

**Priority 2: reCAPTCHA Textarea Without Accessible Name, WCAG 4.1.2 and 1.3.1 (7 instances on 7 pages)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, the reCAPTCHA textarea (`#g-recaptcha-response-100000`) carries two overlapping violations: it has no accessible name exposed to an accessibility API (WCAG 4.1.2) and the form field is wholly unlabelled (WCAG 1.3.1). These instances originate from the third-party SDK hosted at `cdn-ca.aglty.io` and are injected into the DOM at runtime; they do not exist in dotfusion.com's own template. A theme edit will not reach them.

**What to change and why:**

- Engage the vendor responsible for the SDK hosted at `cdn-ca.aglty.io` to ship an updated SDK version that injects the reCAPTCHA element with a proper accessible name and label; this is the cleanest long-term path and addresses both WCAG 4.1.2 and WCAG 1.3.1 at source.
- Where an SDK upgrade cannot be scheduled immediately, a DOM-observer patch that adds the missing accessible name attribute after the element is injected is an acceptable interim measure; the patch should be scoped precisely to this element to avoid conflicts with other runtime-injected content.
- Confirm with the vendor whether the current SDK version is the latest available; if a newer release already addresses these violations, upgrading is the lowest-effort remediation path and avoids maintaining a DOM-observer patch long-term.

**Effort:** Low

---

**Priority 3: Unlabelled Form Inputs (#name, #company), WCAG 4.1.2 (5 instances on 5 pages)**

**Bucket:** Compliance Risk

**Finding:** Across five pages in the audited set, the `#name` and `#company` input fields each carry a WCAG 4.1.2 violation: neither field exposes a name to an accessibility API, meaning screen reader users receive no announcement of what information the field expects. With five instances per field traced to the shared form template, a single template-level fix resolves all instances simultaneously.

**What to change and why:**

- Associate each of the `#name` and `#company` inputs with an accessible label; the valid mechanisms are a label element (either with a matching `for` attribute or wrapping the input), a `title` attribute, `aria-label`, or `aria-labelledby`. Whichever mechanism the template already uses elsewhere should be applied consistently here to address WCAG 4.1.2.
- Address both fields together in the same template edit; they share the same violation type and the same fix path, so combining them minimises deployment risk and confirms the fix in a single test cycle.
- After the fix is deployed, re-run Pa11y against the five affected pages to verify zero remaining instances of this pattern; closing this finding alongside Priority 1 and Priority 2 would meaningfully move the Accessibility score above its current 73/100.

**Effort:** Low

---

**Priority 4: Semantic Structure 49/100, Worst Page /services/contentful-development-agency (23 of 45 bare divs)**

**Bucket:** Compliance Risk

**Finding:** The rendered Semantic Structure score of 49/100 sits in the high-concern band. At `https://dotfusion.com/services/contentful-development-agency`, we recorded 23 bare divs out of 45 total elements assessed, making it the worst-performing page in the audited set. When a page's structural skeleton consists predominantly of unsemantic container elements, both assistive technologies and machines are less likely to infer the content hierarchy correctly. Because the pattern is likely to reflect a shared page template, the finding has relevance beyond this single URL, though the figures cited here are specific to that page.

**What to change and why:**

- Audit the template used by `/services/contentful-development-agency` and identify which bare div containers represent meaningful structural roles (sections, articles, navigation, headers, footers, asides); replacing those with the appropriate semantic elements directly improves the rendered Semantic Structure score and addresses the underlying cause of the 49/100 result.
- Prioritise structural containers that wrap headings, navigation menus, and call-to-action regions; these are the elements that assistive technologies use most heavily to build a page map for screen reader users, and improving them has the greatest per-element accessibility return.
- Once the template edit is deployed, re-run the Semantic Structure check across the audited set to confirm whether the score lifts and to identify whether other pages share the same bare-div density.

**Effort:** Medium

---

**Priority 5: Security Headers Incomplete (2 of 5 present; X-Frame-Options, CSP, X-Content-Type-Options absent)**

**Bucket:** Cross-cutting

**Finding:** Across the audited set, we confirm only HTTPS and HSTS among the five standard security headers we check. X-Frame-Options, Content Security Policy, and X-Content-Type-Options are absent from all seven audited URLs. These headers are browser-enforced controls; their absence means visitors' browsers miss protections against clickjacking, content injection, and MIME-type sniffing respectively. The fix sits at the server or CDN configuration layer and does not require template changes.

**What to change and why:**

- Add the X-Frame-Options header at the server or CDN layer to instruct browsers to refuse framing of dotfusion.com pages by unauthorised origins; this closes the most direct clickjacking vector and is a low-complexity configuration change.
- Add the X-Content-Type-Options header set to `nosniff` to prevent browsers from interpreting responses as a different MIME type than declared; this is one of the fastest header additions available and has no compatibility risk.
- Define and deploy a Content Security Policy header; this is the most effort-intensive of the three because it requires an accurate allowlist of all trusted sources, but it provides the broadest cross-cutting protection for visitors and is a prerequisite for many security-compliance frameworks.
- After deployment, verify all five headers are present on a representative set of URLs across the audited set to confirm the configuration has propagated correctly.

**Effort:** Low

---

**Priority 6: Discovery Readiness 25/100, llms-full.txt, agent-card.json, ai.txt, and humans.txt absent; llms.txt present but incomplete**

**Bucket:** AI Opportunity

**Finding:** We score Discovery Readiness at 25/100 (Needs Improvement) on dotfusion.com. We find llms.txt present, though it currently omits a page inventory and a content policy. The remaining four well-known discovery artefacts we check are not reachable: llms-full.txt, agent-card.json, ai.txt, and humans.txt are all absent. Without the full artefact set, machines that index dotfusion.com for citation or agentic tasks have no structured permission signal, no declared identity, and limited guidance on what content is available or how it may be used. Completing the artefact set is the single highest-leverage action available to improve dotfusion.com's presence in machine-mediated discovery.

**What to change and why:**

- Extend the existing llms.txt to include a page inventory and a content policy; we recommend serving this file as `text/html` (our recommendation diverges from the llmstxt.org specification, which calls for plain text) so that the file is accessible to both human reviewers and automated consumers.
- Publish llms-full.txt alongside llms.txt to give machines that request deeper content access a more complete representation of dotfusion.com's services and expertise.
- Publish agent-card.json to declare dotfusion.com's agent-facing identity; this is the structured mechanism by which machines recognise the site as a verified entity rather than an anonymous content source, and its presence directly supports citation eligibility.
- Add ai.txt and humans.txt to complete the discovery artefact set; ai.txt provides machine-readable access and usage permissions, while humans.txt gives human readers a point of contact and attribution record.

**Effort:** Medium

---

**Priority 7: MX Stack Completeness 44/100, Discovery Artefacts and MX Governance Fields Absent**

**Bucket:** AI Opportunity

**Finding:** MX Stack Completeness sits at 44/100 (Could Be Better). The score reflects gaps across two contributing categories: the five discovery artefacts named in Priority 6 are absent, and the MX governance fields in page frontmatter (canonicalUri, contentType, audience, and status) are not populated across the audited set. Without these governance fields, machines retrieving individual pages have no structured signal for the page's canonical address, its content type, its intended audience, or its publication status, all of which reduce agent confidence in how to represent the content in a response.

**What to change and why:**

- Populate the `canonicalUri` frontmatter field on each page; machines use this to resolve the authoritative URL for a piece of content, and its absence means agent indexes may attribute content to an incorrect or duplicate address.
- Populate the `contentType` and `audience` fields to give machines a structured declaration of what each page is (a service overview, a case study, a landing page) and who it is for; these signals directly influence whether a machine includes the page in a narrowed, audience-specific response.
- Populate the `status` field to indicate whether each page is current, draft, or deprecated; machines that cannot determine publication status are less likely to treat the content as citation-ready.
- Completing the discovery artefacts listed in Priority 6 in parallel will address the other contributing category to the 44/100 MX Stack Completeness score; both categories need to move for the overall score to lift materially.

**Effort:** Medium

---

**Priority 8: Structured Data Quality 63/100, Schema Coverage Incomplete Across the Audited Set**

**Bucket:** AI Opportunity

**Finding:** We score Structured Data Quality at 63/100 (Good) across the audited set. While the schema vocabulary in use is broad, with types including Organisation, Service, FAQPage, BreadcrumbList, and AggregateRating already present, coverage across pages is uneven and the overall score indicates room to improve the depth and consistency of structured markup. Machines rely on structured data to build confident entity graphs; gaps in coverage reduce the reliability of any entity relationships they can infer from dotfusion.com.

**What to change and why:**

- Review pages in the audited set where Organisation and WebSite schema are present to confirm that `sameAs` links connect dotfusion.com's entity to its verified profiles on external platforms; these links are a primary mechanism by which machines confirm entity identity and are a direct driver of citation eligibility.
- Ensure that Service schema instances include the full set of recommended properties (name, description, provider, areaServed, and serviceType) so that machines can represent each service offering with sufficient detail; incomplete Service instances reduce the confidence machines assign to those entities.
- Where AggregateRating is present, confirm that the associated `ratingValue`, `reviewCount`, and `bestRating` properties are populated; partial AggregateRating instances are less likely to qualify for rich-result treatment in search and agent responses.
- After any schema additions, re-validate the structured data across the audited set to confirm no new errors have been introduced; maintaining the existing breadth of schema types while improving property depth is the most direct path to lifting the 63/100 SDQ score.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Organisation**: adding sameAs properties to the Organisation entities already present across the audited set would allow machines to cross-reference dotfusion.com against authoritative external sources such as Wikidata or LinkedIn, strengthening entity disambiguation in agent knowledge graphs.

- **potentialAction on Organisation**: the existing Organisation entries are a natural home for potentialAction descriptors that advertise contact or service-request capabilities, giving machines a structured signal about how to initiate engagement with dotfusion.com on behalf of a user.

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

**Slowest.** The slowest page is `https://dotfusion.com/`. A first-time visitor sees the cold-cache cost: the crawler recorded 2257 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 259ms, 104ms, 162ms, giving a returning-visitor median of **162 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://dotfusion.com/services/answer-engine-optimisation-agency-dotfusion`. A first-time visitor sees the cold-cache cost: the crawler recorded 1720 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 70ms, 243ms, 67ms, giving a returning-visitor median of **70 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Server response time is within healthy bounds for the slowest page across both first-visit and returning-visitor views.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /

Sitemap: https://dotfusion.com/sitemap.xml
```

*The full `robots.txt` (4 lines) is preserved alongside this report as `dotfusion-com-robots-txt.txt`.*

We found dotfusion.com's robots.txt in place, carrying one sitemap reference and no disallow paths, meaning machines are permitted to crawl the full site without restriction.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 148 entries | Matches crawl count |
| `<lastmod>` | Yes | All identical |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | No | Absent |

**Sitemap grade:** Partial

We assess the sitemap as Partial: it covers 148 URLs and carries both lastmod and changefreq values, yet priority attributes are absent across all entries, which limits the guidance machines receive when deciding which pages to crawl first.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We find llms.txt present on dotfusion.com with a site description in place, which gives machines a starting point for understanding the property. The file currently omits a page inventory and a content policy, and adding both would give machines a fuller picture of what is available and how the content may be used.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We find no llms-full.txt reachable on dotfusion.com; the endpoint returns a 404 and the file appears neither in the sitemap nor linked from the homepage head. Whether adding it would deliver meaningful value depends on the content depth of the full site, which the audited sample of 7 pages does not yet measure, so we frame this as a conditional recommendation pending a broader content review.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` - the URL returned HTTP 200 but the body is the site's standard error page (soft-404), not a valid agent card. The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

| Path | Purpose | Quality |
|------|---------|---------|
| *(38 paths - see sidecar)* | Various | Soft 404 - server returns the home page for missing resources |

**Soft 404s detected (40 paths):** The server returns HTTP 200 for these paths but does not serve the expected resource. AI agents and crawlers rely on HTTP status codes to determine whether a resource exists. The server should return HTTP 404 (or 301 to a canonical URL) for paths it does not implement. This is a web server configuration change, not a content change.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## AI Usage Declaration

This site publishes a publisher-level AI Usage Declaration: a signed, scope-bounded, machine-readable statement carrying what the work is, who is responsible for it, what machines did during its production, and what machines did not do. The probe verifies the declaration's presence across its four carrier forms, validates the JSON record's schema, and checks the page-level integration on the homepage.

| Attribute | Value |
|-----------|-------|
| Origin | https://dotfusion.com |
| Draft reference | draft-cranstoun-mx-ai-usage-declaration v1.0 |
| Conformance level | Level 0 (Not declared) |
| Probed at | 2026-05-24T18:04:02.701Z |

### Carrier forms

| Form | State | URL | HTTP | Content-Type | Type matches expectation |
| --- | --- | --- | --- | --- | --- |
| Source markdown | present | `https://dotfusion.com/AI-USAGE.md` | 200 | text/html; charset=utf-8 | no |
| JSON record | present | `https://dotfusion.com/AI-USAGE.json` | 200 | text/html; charset=utf-8 | no |
| HTML rendering | present | `https://dotfusion.com/AI-USAGE.html` | 200 | text/html; charset=utf-8 | yes |
| Tagged PDF | present | `https://dotfusion.com/AI-USAGE.pdf` | 200 | text/html; charset=utf-8 | no |
| Well-known location | present | `/.well-known/ai-usage.md`, `/.well-known/ai-usage.json`, `/.well-known/ai-usage.html`, `/.well-known/ai-usage` | 200 | - | - |

### Schema validation

| Dimension | Result | Notes |
| --- | --- | --- |
| JSON record parsed | no | Required for Level 1 conformance. |
| Required §4 fields present | all | 0/0 required fields present. |
| Schema errors | 1 | See findings below for the exact rules that fired. |
| Schema warnings | 0 | No advisory violations. |
| aiUsage entries | 0 | Tasks the publisher attributes to AI assistance. |
| aiBoundary statements | 0 | Boundaries the publisher commits to: things AI did not do. |
| Review schedule | not declared | Declaration carries no `reviewSchedule`; a consumer cannot infer staleness from age alone. |
| Signature present | no | Declaration is at Level 1 (Declared); RFC 7515 JWS over a canonical payload would advance it to Level 2. |

### Page-level integration

| Surface | State | Notes |
| --- | --- | --- |
| Homepage fetched | yes | Fetched from `https://dotfusion.com/`. |
| `<link rel="ai-usage">` | no | Agents reading the homepage may not follow a link to the declaration; they must guess the well-known location. |
| WICG `<meta name="ai-disclosure">` | absent | Browser-readable page-level signal is missing; consumers that read only the WICG vocabulary get no answer. |
| Schema.org `digitalSourceType` | absent | Optional. Search-engine readable today via Schema.org JSON-LD; absence is informational, not a finding. |

### Probe findings

- [FAIL] JSON record served but did not parse as JSON.
- [WARN] Homepage does not carry <link rel="ai-usage">; agents may not discover the declaration from page-level navigation.
- [WARN] Homepage does not carry the page-level WICG <meta name="ai-disclosure"> derived per §5.6.
- [PASS] Machine-readable JSON record is served.
- [PASS] Human-readable HTML rendering is served.
- [PASS] Source markdown is served (transparency win: editable form is publicly fetchable).
- [PASS] Tagged PDF archival form is served.
---

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| Question | 6 | 100% | 100% | Answer |
| Answer | 6 | 100% | 100% | - |
| Service | 7 | 59% | 6% | Organisation, OfferCatalog |
| Offer | 5 | 0% | 0% | Service |
| ListItem | 5 | 100% | 100% | - |
| Country | 5 | 100% | 100% | - |
| FAQPage | 6 | 100% | 100% | - |
| Audience | 1 | 100% | 100% | - |
| OfferCatalog | 5 | 100% | 100% | - |
| Organisation | 3 | 100% | 100% | ImageObject, EducationalOccupationalCredential, PostalAddress, OfferCatalog |
| BreadcrumbList | 4 | 100% | 100% | - |
| PostalAddress | 2 | 100% | 100% | - |
| ContactPoint | 1 | 100% | 100% | - |
| WebSite | 2 | 100% | 13% | Organisation |
| ImageObject | 1 | 100% | 100% | - |
| EducationalOccupationalCredential | 1 | 100% | 100% | Organisation |
| ProfessionalService | 1 | 100% | 100% | PostalAddress, GeoCoordinates, OpeningHoursSpecification, Organisation |
| GeoCoordinates | 1 | 100% | 100% | - |
| OpeningHoursSpecification | 1 | 100% | 100% | - |
| ItemList | 1 | 100% | 100% | - |
| WebPage | 1 | 100% | 100% | WebSite, Thing, Service |
| Thing | 1 | 100% | 100% | - |
| AggregateRating | 1 | 100% | 100% | Organisation |

**Structured Data Quality:** 63/100\
**Coverage:** 7 pages with JSON-LD out of 7 total (100%)\
**Unique types:** 23

Across the 7 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 10 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 7 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 11 | 15 | Average across entities |
| Entity richness | 8 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 14 | 15 | Nested @type values + @id linking |
| Linked-data signals | 4 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 10 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **63** | **100** | |

---

## Structured Data Findings

We identified 61 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`dotfusion-com-structured-data-findings.csv`](dotfusion-com-structured-data-findings.csv). The 61 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| Service | recommended | image | 7 | 7 | Service has no representative image |
| Service | recommended | offers | 7 | 7 | Service has no Offer block; pricing structure invisible |
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

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. Failure at any stage breaks the chain for all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Pass | 89 | Crawlable with semantic HTML |
| 2 | Citation | Fail | 33 | Schema.org: Organisation, ImageObject, EducationalOccupationalCredential (33% required properties) |
| 3 | Search & Compare | Pass | 60 | Commerce schema with 0 supporting patterns |
| 4 | Price Understanding | Pass | 67 | Pricing visible |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

Dotfusion.com is Partially Compatible with the MX Journey; Purchase Confidence is N/A for this site type.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 2/7 | 2 page(s) flag for truncation risk; 2 of them exceed the 250 KB hard ceiling, the rest place main content too far into the document. Agents with limited fetch windows may stop reading before reaching the main content. | Largest page: 471 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See dotfusion-com-pipeline-truncation-risk-pages.csv (2 pages). |
| SPA Shell | Pass | 7/7 | Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: 8. 0 means served and rendered match. |
| Soft 404 | Pass | 7/7 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 7/7 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.05. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 7/7 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | N/M | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 0% of the document on some pages. |
| Broken Code Fences | Pass | 7/7 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Pass | 7/7 | The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents. | 0 page(s) advertise format negotiation. |
| Cross-Host Redirect | Pass | 7/7 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 0 page(s) cross origin during redirect. |
| Generic Headings | Pass | 7/7 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Fail | N/M | Prose content averages only 9% of served bytes. Scripts, styles, and images dominate; agents get little signal per byte. | Average: 9%. Threshold: 30%. |
| Inline Tag Bloat | Pass | 7/7 | No `<style>` or `<script>` block exceeds the 500-byte threshold on any page. Head stays lean for agents that read head-first. | 0 element(s) > 500 bytes. Largest single-page inline CSS block: 0 B. Largest single-page inline JS block: 0 B. |
| Head Weight | Pass | N/M | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.00. Average: 0.00. Threshold: 0.50. |

**Pipeline Survivability score:** 97/100

Across the audited set, we score pipeline survivability at 97/100, and the only resilience check we flag is a truncation risk appearing on two of the seven pages. When a machine reads content that is cut short before reaching the end, it may form an incomplete or inaccurate representation of what those pages contain. Addressing the truncation risk on those two pages is the single most effective step available to ensure machines receive the full signal we intend.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 49/100 | high | 23 | 51% | 4 | `div` (36), `div.input-container.flex` (20), `div.absolute.bottom-0` (6), `div.max-w-2xl.h-full` (6), `#__next` (6) |

On the worst-performing page across the audited set, https://dotfusion.com/services/contentful-development-agency, we record a bare-div ratio of 51% (23 of 45 elements on the rendered surface), meaning machines lose structural context and fall back on positional inference to determine meaning. The combination of a high bare ratio alongside a relatively shallow deepest chain of 4 points to a surface-wide pattern rather than deeply nested structural chains, which is typical of drag-and-drop or utility-class component frameworks where layout divs accumulate at scale without semantic intent. The most efficient first move is wrapping the obvious landmarks (header, nav, main, footer, aside) in their native HTML equivalents, which would immediately reduce the bare-div ratio without requiring any restructuring of the underlying layout.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | No | Prevents MIME-type sniffing |

3 of the five standard security headers are absent across every audited response: Content-Security-Policy (CSP), X-Frame-Options, X-Content-Type-Options. Adding these at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 7 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| / | Yes | Yes | No | No | No |
| /services | Yes | Yes | No | No | No |
| /services/headless-cms-agency | Yes | Yes | No | No | No |
| /services/contentful-development-agency | Yes | Yes | No | No | No |
| /services/storyblok-development-agency | Yes | Yes | No | No | No |
| /services/agility-cms-development-agency | Yes | Yes | No | No | No |
| /services/answer-engine-optimisation-agency-dotfusion | Yes | Yes | No | No | No |

HTTPS: 7/7 | HSTS: 7/7 | CSP: 0/7 | X-Frame-Options: 0/7 | X-Content-Type-Options: 0/7

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 100% | - |
| MX governance tags | 0% | 7 |
| Open Graph tags | 0% | 7 |
| Twitter Card tags | 0% | 7 |
| Skip link | 0% | 7 |
| llms.txt link tag | 0% | 7 |
| Canonical URL | 100% | - |
| Exactly 1 H1 | 100% | - |
| Code examples present | 0% | 7 |
| Self-contained sections | 100% | - |
| Error/troubleshooting docs | 0% | 7 |
| Lighthouse heading compliance | 100% | - |

**Overall Consistency:** 50%

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

We found 12 identical inline fragment(s) repeated across multiple pages, totalling 278 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes per fragment | Appears on N pages | Preview |
|------|-------------------:|-------------------:|---------|
| js | 426 | 13 | (function(w,d,s,l,i){w[l]=w[l]\|\|[];         w[l].push({'gtm. |
| css | 14154 | 7 | :root{--toastify-color-light: #fff;--toastify-color-dark: #1 |
| js | 629 | 7 | !function(e,f){try{if(e.vector)return void console.log("Vect |
| js | 606 | 7 | !function(){var a=window.reb2b=window.reb2b\|\|[];if(!a.invoke |
| js | 372 | 7 | function vqTrackId(){return"01f314ab-30b2-4266-babd-523a8f57 |
| js | 341 | 7 | function initApollo(){var b=Math.random().toString(36).subst |
| js | 284 | 7 | (function(){window.ldfdr=window.ldfdr\|\|{};(function(c,d,a,b) |
| js | 281 | 7 | (function(){var a=document.createElement("script");a.id="cle |
| js | 253 | 7 | (function(b,c,e,f,a,d){_nQc=f;a=b.createElement(c);d=b.getEl |
| css | 34504 | 6 | @charset "UTF-8";.rhap_container{box-sizing:border-box;displ |

*Showing the top 10 of 11 duplicate fragments by occurrence count. The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `dotfusion-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Across the audited set, we treat PDF accessibility as two parallel concerns rather than one: the EAA (Directive (EU) 2019/882, in force 28 June 2025) is the most precisely codified instance of a global convergence on ISO 14289-1 (PDF/UA) as the technical baseline, with Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent legislation in Australia and Canada resolving to the same structural artefact. An untagged or image-based PDF is also invisible to machines, because search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from a document without a proper tag tree; a PDF built to PDF/UA is machine-readable in the same way that semantic HTML is.

We linked no PDFs from the 7-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **We recommend addressing Priority 1 findings first**: the 68 WCAG 2.1 AA accessibility issues identified carry the greatest regulatory exposure and, because 45 of those instances trace to 10 recurring template patterns, resolving each pattern closes multiple issues in a single deployment.
2. **We recommend reviewing Priority 2-3 findings next**: extending Discovery Readiness from 25/100 by publishing the four missing artefacts (llms-full.txt, agent-card.json, ai.txt, humans.txt) and tuning the MX governance metadata fields (canonicalUri, contentType, audience, status) that currently score 0 across the audited set.
3. **We recommend considering the optional enhancements**: adding sameAs links to the Organisation entities already present across the audited pages and publishing Content-Signal directives in robots.txt, both of which strengthen machine-readable identity signals without requiring structural changes.

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4 (Compliance Risk) | Priority 1, 2, 3, 4 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | Discovery Readiness, Catalogue Visibility, MX Stack Completeness, Semantic Structure, Structured Data, Security headers, and optional enhancements | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://dotfusion.com performs well for search visibility, with SEO scoring 86/100, a clear sign that the foundations serving human visitors are solid. Discovery Readiness at 25/100 and Structured Data at 63/100 point to the most immediate opportunities, particularly in making pages legible to machines through richer metadata and accessible discovery artefacts. We invite the dotfusion.com team to read on for prioritised recommendations that would close those gaps efficiently.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 100/100 | Excellent |
| Accessibility | 73/100 | Good |
| SEO (all pages) | 86/100 | Excellent |
| SEO (content pages) | 86/100 | Excellent |
| MX Stack Completeness | 44/100 | Could Be Better |
| Structured Data Quality | 63/100 | Good |
| Commerce Visibility | 35/100 | Could Be Better |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 96/100 | Excellent |
| Semantic Ratio | 14% | Needs Improvement |
| Agent Readability | 77/100 | Excellent |
| Pipeline Survivability | 97/100 | Excellent |
| Cross-Page Consistency | 50% | Could Be Better |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| / (nav) | 90 | 75 | 85 | 100 | 100 |
| /services | 85 | 75 | 85 | 100 | 100 |
| /services/headless-cms-agency | 87 | 75 | 85 | 100 | 100 |
| /services/contentful-development-agency | 83 | 70 | 85 | 100 | 100 |
| /services/storyblok-development-agency | 86 | 70 | 85 | 100 | 100 |
| /services/agility-cms-development-agency | 87 | 70 | 85 | 100 | 100 |
| /services/answer-engine-optimisation-agency-dotfusion | 85 | 75 | 85 | 100 | 100 |

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 86/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: 157 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 157   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set, we sampled 88 images in total. The format distribution breaks down as 38 SVG, 27 PNG, 3 WebP, and 20 images in other or unrecognised formats, with no JPEG images present. Alt-text coverage stands at 62 of 88 images, representing 70.5% coverage, which means 26 images are currently served without descriptive text. That gap affects both accessibility and machine-readable content signals, since crawlers and assistive technologies rely on alt text to interpret visual content.

On loading strategy, 19 images carry a `loading="lazy"` attribute and none carry `loading="eager"`, but the notable figure is the 69 images with no attribute set at all. It is worth being clear about what "no attribute" means in practice: the browser applies its own heuristics to decide whether to defer or fetch immediately, and that behaviour is not equivalent to explicitly setting `loading="eager"`. Relying on browser guessing can mean above-the-fold images are deferred when they should not be, or below-the-fold images are fetched early, neither of which is the intended outcome. For images we know will be above the fold, an explicit `loading="eager"` is the cleaner signal; for everything else, `loading="lazy"` removes the ambiguity.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Next.js**. The main audit uses Next.js-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 7 pages analysed | Platform: Next.js | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

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

**Date:** 24 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*