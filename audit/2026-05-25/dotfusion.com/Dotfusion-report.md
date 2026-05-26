---
title: "Dotfusion: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-25"
modified: "2026-05-25"
client: "Dotfusion"
clientSlug: "Dotfusion"
clientUrl: "https://dotfusion.com"
reportId: "Dotfusion-WEB-AUDIT-20260525"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-25"
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
    output: "mx-outputs/audit/2026-05-25/dotfusion.com/Dotfusion-report.pdf"
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
    sidecar: "Dotfusion-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "Dotfusion-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

# Dotfusion: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 25 May 2026\
**Report ID:** Dotfusion-WEB-AUDIT-20260525

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

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead, because Common Crawl (the archive underpinning most major LLM training datasets) prioritises HTML for its LLM-training subsets, so a plain-text llms.txt is unlikely to enter training corpora at the same rate as the rest of the site. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

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

We audited seven pages of dotfusion.com, sampling across the live Next.js build to measure how well the site serves both human visitors and the machines that increasingly mediate discovery. The picture for human visitors is genuinely solid: performance leads all dimensions, and SEO sits at 86/100, the Excellent band, meaning search engines can find, read, and rank the content without structural obstacles. The content itself is well-structured and the navigation carries clear intent, giving visitors a coherent experience from first load through to conversion-oriented pages.

Before we turn to machine readiness, we want to name accessibility as a Priority 1 compliance item. Across the audited set we recorded 68 raw instances of WCAG AA issues spanning 38 distinct issue types, all 68 flagged as critical by Pa11y. The practical remediation effort is more manageable than that raw count suggests: 43 of those instances trace back to nine recurring template patterns, so a single theme-level correction per pattern resolves all instances it generates at once. That work belongs at the top of the roadmap, both because it extends the site to users who depend on assistive technology and because it reduces legal exposure. The headline opportunity beyond accessibility is machine readiness. Discovery Readiness scores 25/100 and Catalogue Visibility sits at 35/100, meaning the infrastructure that allows AI-powered search tools, LLM citation pipelines, and automated agents to discover and confidently represent dotfusion.com is still in early development. MX Readiness sits at Level 1 (Discoverable) and Schema Maturity at Level 1 (Decoration), two independent signals pointing to the same conclusion: the groundwork is there to build on, and targeted investment in this layer would meaningfully extend the site's reach into machine-mediated channels.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, dotfusion.com delivers strong performance and SEO results for human visitors, with accessibility at 73/100 representing the clearest opportunity to improve the experience for all users.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Good | B |
| Trust and Credibility | Excellent | A |

### Machine Experience

Machines can reliably read the content we serve across the audited set, though structured discovery and stack completeness leave meaningful room to grow.

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

Across the audited set, dotfusion.com demonstrates a strong foundations to build from, with SEO performance sitting at 86/100 and a rich, well-populated schema vocabulary already in place. These strengths give the improvements that follow a firm base to land on.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent - 1732ms average load time |
| SEO (content pages) | 85 | Excellent - titles, meta descriptions, canonical URLs in place |
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

The findings below are prioritised by downstream impact, with Discovery Readiness leading because gaps at that layer constrain what machines can locate and parse before any other signal is evaluated. Structured data depth and catalogue visibility follow, where the strongest near-term opportunity lies in extending schema coverage to serve both search crawlers and AI agents more completely across the audited set.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Unlabelled anchor links in site header, WCAG 4.1.2 (7 pages) | Compliance Risk | High | Low | Screen reader users may miss navigation destinations |
| 2 | reCAPTCHA textarea missing accessible name and label, WCAG 4.1.2 and 1.3.1 (7 pages, vendor-injected via cdn-ca.aglty.io) | Compliance Risk | High | Medium | Screen reader users may miss form purpose and are less likely to complete contact forms |
| 3 | Unlabelled contact form fields (#name, #company), WCAG 4.1.2 (5 pages) | Compliance Risk | High | Low | Screen reader users may miss field purpose and risk missing form completion |
| 4 | Semantic Structure 49/100, worst page: /services/contentful-development-agency (23 of 45 bare divs) | Compliance Risk | Medium | Medium | Assistive technologies and machines are less likely to infer content hierarchy correctly |
| 5 | Security headers incomplete, 2 of 5 present across the audited set | Cross-cutting | High | Low | Visitors and machines risk missing browser-enforced security protections |
| 6 | Discovery Readiness 25/100, all five discovery artefacts absent | AI Opportunity | High | Medium | Machines may miss dotfusion.com entirely when building indexes and citation pools |
| 7 | MX Stack Completeness 44/100, gaps in MX governance fields and structured data coverage | AI Opportunity | Medium | Medium | Machines are less likely to resolve content type, audience, and canonical authority correctly |

---

**Priority 1: Unlabelled Anchor Links in Site Header, WCAG 4.1.2 (7 Pages)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, each audited page carries at least one anchor element in the site header that has a valid `href` but supplies no link content. Screen reader users encounter a link with no announced name, leaving them unable to determine where the link leads. Because the selector traces to the site header template, a single template-level edit resolves all seven instances in one pass.

**What to change and why:**
- Supply visible text, an `aria-label`, or an `aria-labelledby` reference on each affected header anchor so that screen readers announce a meaningful destination name. This directly addresses WCAG 4.1.2 (Name, Role, Value) and removes the most pervasive navigation barrier across the audited set.
- Treat this as a template-level fix: because the pattern recurs on all seven audited pages through a shared header component, correcting the component eliminates the issue everywhere that component renders, improving the Accessibility score (currently 73/100) proportionally.

**Effort:** Low

---

**Priority 2: reCAPTCHA Textarea Missing Accessible Name and Label, WCAG 4.1.2 and 1.3.1 (7 Pages, Vendor-Injected via cdn-ca.aglty.io)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, the reCAPTCHA response textarea (`#g-recaptcha-response-100000`) appears on all seven pages without an accessible name and without a programmatic label, triggering both WCAG 4.1.2 and WCAG 1.3.1 gaps. This element is injected at runtime by the third-party SDK hosted at `cdn-ca.aglty.io` and does not exist in dotfusion.com's own template. A theme edit alone will not resolve it.

**What to change and why:**
- Engage the vendor responsible for the SDK hosted at `cdn-ca.aglty.io` to ship a fix in an SDK upgrade that adds a proper accessible name to the injected textarea. This is the cleanest resolution path and addresses both WCAG 4.1.2 and WCAG 1.3.1 in one change.
- If an SDK upgrade is not immediately available, implement a DOM-observer patch that detects when the reCAPTCHA textarea is injected and programmatically adds an accessible name attribute. This preserves compliance while the vendor fix is pending, and prevents screen reader users from encountering an unnamed form control on every contact-bearing page.

**Effort:** Medium

---

**Priority 3: Unlabelled Contact Form Fields (#name, #company), WCAG 4.1.2 (5 Pages)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, the `#name` and `#company` form fields appear on five pages without an accessible name available to an accessibility API. Screen reader users encounter input controls with no announced purpose, which means they are less likely to complete the contact form successfully. Because these fields appear in a shared template component, the pattern resolves across all affected pages with a single template-level correction.

**What to change and why:**
- Associate a visible label element with each of `#name` and `#company` (using a `for` attribute or by wrapping the field), or supply an `aria-label` or `aria-labelledby` attribute, so that every input has an accessible name. This directly addresses WCAG 4.1.2 and removes a contact-conversion barrier for screen reader users.
- Treat this as a template-level fix: the two fields recur through a shared form component, so correcting the component removes the finding from all five affected pages simultaneously and moves the Accessibility score (currently 73/100) upward.

**Effort:** Low

---

**Priority 4: Semantic Structure 49/100, Worst Page /services/contentful-development-agency (23 of 45 Bare Divs)**

**Bucket:** Compliance Risk

**Finding:** We score Semantic Structure at 49/100, placing it in the high-attention band. On `https://dotfusion.com/services/contentful-development-agency`, the worst-performing page in the audited set, bare divs account for 23 of 45 total elements. Where the same template structure is shared with other audited pages, the band-level concern carries across the audited set even if individual page counts vary. A high proportion of non-semantic wrapper elements reduces the structural signal available to assistive technologies and machines attempting to infer content hierarchy.

**What to change and why:**
- Audit the layout structure on `https://dotfusion.com/services/contentful-development-agency` specifically and replace generic wrapper divs with semantically appropriate elements (such as `main`, `section`, `article`, `nav`, `aside`, `header`, or `footer`) wherever the content role is clear. Each substitution gives assistive technologies a named landmark and gives machines a stronger structural signal, directly improving the Semantic Structure score.
- Where the same div-heavy template is shared across other service pages in the audited set, apply the same structural corrections at the template level so that a single edit propagates to all pages using that component.
- Improving semantic structure supports WCAG 1.3.1 (Info and Relationships) by ensuring that the visual hierarchy of the page is also conveyed programmatically, which benefits screen reader users navigating by landmark or heading.

**Effort:** Medium

---

**Priority 5: Security Headers Incomplete, 2 of 5 Present**

**Bucket:** Cross-cutting

**Finding:** Across the audited set, we detect only HTTPS and HSTS in place. The remaining three security headers are absent from every audited URL. Missing browser-enforced headers leave visitors exposed to a range of client-side attacks that the absent headers are specifically designed to mitigate, and security scanners used by enterprise procurement teams will flag these gaps.

**What to change and why:**
- Add the three absent security response headers at the server or CDN layer (applicable across every response, not just sampled pages) so that all delivered pages carry the full complement of five headers. Browser-enforced policies reduce client-side attack surface and satisfy common enterprise security checklists.
- Configuring these headers at the CDN or reverse-proxy layer means the fix is infrastructure-level and does not require per-page or per-template changes, keeping the effort band low once the configuration work begins.
- A complete security header set improves trust signals for both human visitors and the automated scanning tools that enterprise buyers and search quality systems use, giving dotfusion.com a stronger foundation across all other audit dimensions.

**Effort:** Low

---

**Priority 6: Discovery Readiness 25/100, All Five Discovery Artefacts Absent**

**Bucket:** AI Opportunity

**Finding:** We score Discovery Readiness at 25/100 (Needs Improvement). None of the five well-known discovery artefacts (llms.txt, llms-full.txt, agent-card.json, ai.txt, and humans.txt) are reachable on dotfusion.com. Machines building crawl indexes and citation pools rely on these artefacts to understand what a site offers, who operates it, and what content is available for use. Without them, dotfusion.com is less likely to be cited or surfaced in agent-generated answers.

**What to change and why:**
- Publish `llms.txt` and `llms-full.txt` to give machines a structured content inventory and a clear signal about what dotfusion.com offers and permits. Our recommendation diverges from the llmstxt.org specification; we recommend `text/html` as the served content type to maximise compatibility with machines that parse HTML response bodies.
- Publish `agent-card.json` to declare the site's identity, capabilities, and contact details in a machine-readable format that agent orchestration systems can resolve directly, improving dotfusion.com's presence in agentic workflows.
- Publish `ai.txt` to state crawl permissions for machine agents explicitly, and `humans.txt` to provide a human-readable team and project record. Together these five artefacts move Discovery Readiness from 25/100 toward a substantially higher band and strengthen dotfusion.com's position as a citable, agent-navigable source.

**Effort:** Medium

---

**Priority 7: MX Stack Completeness 44/100, Gaps in MX Governance Fields and Structured Data Coverage**

**Bucket:** AI Opportunity

**Finding:** We score MX Stack Completeness at 44/100 (Could Be Better). Two categories contribute to this score: the discovery artefacts addressed in Priority 6, and the MX governance fields in page frontmatter (`canonicalUri`, `contentType`, `audience`, and `status`). Structured data coverage (SDQ 63/100) also feeds into this composite. Where governance fields are absent or incomplete, machines resolving content type, intended audience, and canonical authority receive weaker signals and are less likely to attribute content to dotfusion.com with confidence.

**What to change and why:**
- Populate the `canonicalUri`, `contentType`, `audience`, and `status` MX governance fields in page frontmatter across the audited set. These fields give machines the structured metadata they need to classify dotfusion.com's content correctly and to resolve canonical authority, which in turn improves citation confidence in agent-generated outputs.
- Review structured data coverage to identify content types in the audited set that are not yet covered by a schema type. The existing schema vocabulary is already broad (with types such as Service, FAQPage, BreadcrumbList, and Organisation present), so the opportunity here is filling gaps in coverage rather than introducing new types, which would move SDQ above its current 63/100 and lift the MX Stack Completeness score accordingly.
- Once the discovery artefacts from Priority 6 are published, the combined effect on MX Stack Completeness will be material; addressing both priorities together is more efficient than tackling them sequentially.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Organisation**: adding `sameAs` properties to the Organisation entities already in the audited set would let machines confidently reconcile dotfusion.com with its profiles on Wikidata, LinkedIn, and equivalent public directories, strengthening citation eligibility in agent-generated answers.

- **potentialAction on Organisation**: attaching a `potentialAction` entry to the existing Organisation entities would advertise contact or enquiry capabilities directly to machines, allowing agents to surface actionable next steps when recommending Dotfusion's services.

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

**Slowest.** The slowest page is `https://dotfusion.com/`. A first-time visitor sees the cold-cache cost: the crawler recorded 2873 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 169ms, 100ms, 96ms, giving a returning-visitor median of **100 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://dotfusion.com/services/answer-engine-optimisation-agency-dotfusion`. A first-time visitor sees the cold-cache cost: the crawler recorded 2307 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three cache-busted re-probes that followed returned 74ms, 69ms, 82ms, giving a returning-visitor median of **74 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Server response time is within healthy bounds for the slowest page across both first-visit and returning-visitor views.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /

Sitemap: https://dotfusion.com/sitemap.xml
```

*The full `robots.txt` (4 lines) is preserved alongside this report as `Dotfusion-robots-txt.txt`.*

We found robots.txt present and permissive, with no disallow paths configured, meaning all machines are free to crawl the full site. One sitemap reference is declared, giving crawlers a direct route to the content index.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 148 entries | Matches crawl count |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | No | Absent |

**Sitemap grade:** Partial

We grade the sitemap Partial: it covers 148 URLs and carries both lastmod and changefreq values, yet the absence of priority attributes across all 148 entries leaves machines without the relative crawl-weight signals that would help them sequence their visits more precisely.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We find llms.txt present on dotfusion.com with a site description in place, which gives machines a starting point for contextual orientation. The file would serve machines more fully with a page inventory and a content policy added, as both sections are currently absent.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We find no llms-full.txt at dotfusion.com, with the endpoint returning a 404 across every discovery signal we checked. Whether adding it would be worthwhile depends on the content depth of the full 148-page set, which the audited sample does not yet measure; we recommend revisiting this once a broader crawl confirms whether the site carries sufficient long-form content to justify a full machine-readable corpus.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` - the URL returned HTTP 200 but the body is the site's standard error page (soft-404), not a valid agent card. The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

| Path | Purpose | Quality |
|------|---------|---------|
| *(38 paths - see sidecar)* | Various | Soft 404 - same error page template as /zebedee.html (URL slug differs in embedded JS) |

**Soft 404s detected (40 paths):** The server returns a custom error page with HTTP 200 for these paths. AI agents and crawlers rely on HTTP status codes - a 200 response signals success, so agents treat the error page body as if it were a real discovery file. The server should return HTTP 404 (or 301 to a canonical URL) for paths it does not implement. This is a web server configuration change, not a content change.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

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

The full per-entity list is delivered alongside this report as a sidecar CSV: [`Dotfusion-structured-data-findings.csv`](Dotfusion-structured-data-findings.csv). The 61 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

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
| Truncation Risk | Fail | 2/7 | 2 page(s) flag for truncation risk; 2 of them exceed the 250 KB hard ceiling, the rest place main content too far into the document. Agents with limited fetch windows may stop reading before reaching the main content. | Largest page: 471 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See Dotfusion-pipeline-truncation-risk-pages.csv (2 pages). |
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

Across the audited set, we score pipeline survivability at 97, and the one area we flag for attention is truncation risk, which affects two of the seven pages we reviewed. When a page's content is cut short before a machine has finished reading it, the machine may form an incomplete picture of what dotfusion.com offers, potentially missing services, structured data, or key claims. Addressing truncation on those two pages would be the single highest-leverage step towards ensuring every machine that visits receives a complete and accurate representation of the content.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 49/100 | high | 23 | 51% | 4 | `div` (36), `div.input-container.flex` (20), `div.absolute.bottom-0` (6), `div.max-w-2xl.h-full` (6), `#__next` (6) |

On the worst-performing page we sampled, https://dotfusion.com/services/contentful-development-agency, the rendered surface carries a bare-div ratio of 51% (23 of 45 elements), which means machines lose structural context and fall back on positional inference to determine meaning. The pattern here is surface-wide rather than structurally deep: the deepest bare chain reaches only 4 levels, while the high bare ratio points toward a component framework that leaves many containers untyped, a common output of utility-class builders where layout and semantics are treated as the same concern. The most direct first move is to wrap the obvious landmarks (header, nav, main, footer, and aside) and assign meaningful class names to the remaining generic containers, which would bring the bare-div ratio down without requiring any restructuring of the existing layout.

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

*Showing the top 10 of 11 duplicate fragments by occurrence count. The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `Dotfusion-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Across the audited set, PDF handling sits at an intersection of two independent concerns that reinforce each other: accessibility legislation in the EU, US, UK, Australia, and Canada has converged on ISO 14289-1 (PDF/UA) as the shared technical baseline, with the European Accessibility Act (Directive (EU) 2019/882, in force 28 June 2025) as the most precisely codified instance of that global alignment; and an untagged PDF is equally invisible to machines, because search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from a scanned or image-based document in the way that a properly tagged PDF with a full structure tree allows.

We linked no PDFs from the 7-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 68 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Catalogue Visibility improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4 (Compliance Risk) | Priority 1, 2, 3, 4 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | Discovery Readiness, Catalogue Visibility, MX Stack Completeness, Semantic Structure, Structured Data, Security headers, and optional enhancements | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://dotfusion.com performs well on search fundamentals, with SEO scoring 86/100, a result that reflects solid metadata and crawlability foundations. The clearest opportunities lie in Discovery Readiness, which scores 25/100, and Structured Data at 63/100, both of which shape how machines read, interpret, and surface the site in automated contexts. We invite the dotfusion.com team to review the findings that follow and take the steps needed to close those gaps.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 100/100 | Excellent |
| Accessibility | 73/100 | Good |
| SEO (all pages) | 86/100 | Excellent |
| SEO (content pages) | 85/100 | Excellent |
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
| /services/contentful-development-agency | 82 | 70 | 85 | 100 | 100 |
| /services/storyblok-development-agency | 86 | 70 | 85 | 100 | 100 |
| /services/agility-cms-development-agency | 87 | 70 | 85 | 100 | 100 |
| /services/answer-engine-optimisation-agency-dotfusion | 85 | 75 | 85 | 100 | 100 |

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 85/100.

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

Across the audited set, we identified 89 images in total. The format distribution breaks down as 38 SVG, 27 PNG, 3 WebP, and 21 images in other or unrecognised formats, with no JPEG images present. Alt-text coverage stands at 62 images (69.7%), leaving 27 without alternative text. For a developer audience, that gap is worth prioritising: missing alt text affects both screen-reader users and the signals machines use to interpret visual content.

On loading strategy, 19 images carry an explicit `loading="lazy"` attribute and none are marked `loading="eager"`. The remaining 70 images have no loading attribute set at all. It is worth being precise here: no attribute is not equivalent to eager loading. Without an explicit instruction, the browser applies its own heuristic, typically treating above-the-fold images as eager and below-the-fold images as lazy, but that inference varies by browser version and viewport context. We recommend reviewing those 70 images and applying explicit lazy or eager declarations based on their position in the layout, so the loading behaviour is predictable rather than browser-dependent.

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

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `Dotfusion-report.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `Dotfusion-report.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload Dotfusion-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the organisation distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it first to ourselves.

---

**Date:** 25 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*