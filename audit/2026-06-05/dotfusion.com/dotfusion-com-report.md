---
title: "Dotfusion: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-06-05"
modified: "2026-06-05"
client: "Dotfusion"
clientSlug: "dotfusion-com"
clientUrl: "https://dotfusion.com"
reportId: "dotfusion-com-WEB-AUDIT-20260605"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-06-05"
description: "Executive audit report reviewing accessibility, performance, SEO, structured data, and AI agent compatibility for Dotfusion"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 35
accessibilityScore: 73
seoScore: 81
llmSuitabilityScore: 100
totalIssues: 517
pagesAudited: 22
version: "1.0"
confidential: true
mx:
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Dotfusion covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Dotfusion", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  status: active
  contentType: audit-report
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-06-05/dotfusion.com/dotfusion-com-report.md
  runbook: "Executive audit report for Dotfusion. Focus on the highest-leverage MX opportunities surfaced by the audit."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-06-05/dotfusion.com/dotfusion-com-report.pdf"
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

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 5 June 2026\
**Report ID:** dotfusion-com-WEB-AUDIT-20260605

---

\clearpage

## About This Report

We audited 22 pages across dotfusion.com's site using the Web Audit Suite. We review each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image efficiency, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before completing this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent patterns emerge, we update what we look for.

**How we build it.** We use scripted SOPs running deterministic checks rather than inference. The crawl, the served-versus-rendered comparison, the structured-data extraction, the accessibility passes, the discovery-file probes, the platform fingerprinting and the per-section scoring all run as scripts producing byte-identical outputs on the same input. A small number of stages run a judgement pass over the resulting report (rewrite-and-repair on the prose, verification, fierce-critic review, post-PDF cross-check). That judgement pass is the only inference layer; everything else is the scripted SOP.

**Local-inference option for regulated and privacy-sensitive customers.** Our judgement passes can run against a local LLM (Ollama, LM Studio, on-premise Llama or equivalent) instead of a cloud provider. The deterministic scripts already run locally. For regulated industries and privacy-sensitive customers, this means the entire audit can run with no audit data leaving the customer's network. The option ships as part of the Private REGINALD platform deployment; contact us to scope a local-inference engagement.

Our scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. MX addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** Here we look at the web estate: every page served over HTTP, examined for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type a business publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 22 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

We offer this audit as the starting point of an ongoing partnership. If you would like us to implement any of the recommendations in this report -- whether structured data, discovery files, accessibility improvements, or governance metadata -- we build, deploy, and maintain these improvements as a managed service. We also offer continuous monitoring: automated re-audit on a cadence you choose, with alerts when scores drift and quarterly executive summaries. Contact us at <info@cognovamx.com> to scope either service.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead, because Common Crawl (the archive underpinning most major LLM training datasets) ranks HTML ahead of plain text for its LLM-training subsets, so a plain-text llms.txt is unlikely to enter training corpora at the same rate as the rest of the site. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **35**/100 | `######------------` **(!)** |
| Accessibility | **73**/100 | `#############-----` |
| SEO | **81**/100 | `###############---` |
| AI Agent Suitability | **100**/100 | `##################` |
| MX Stack Completeness | **46**/100 | `########----------` **(!)** |
| Agent Readability | **80**/100 | `##############----` |
| Pipeline Survivability | **92**/100 | `#################-` |



\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, we find that the site delivers a strong experience for human visitors, although page load times could be improved.

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Excellent | A | - |
| Performance | Could Be Better | C | B (median) |
| Accessibility (WCAG) | Good | B | B (median) |
| Trust and Credibility | Excellent | A | - |

### Machine Experience

We find that across the audited set, machines can discover and parse content but lack governance context, as reflected in discovery readiness of 22/100, structured data quality of 58/100, MX stack completeness of 46/100, and pipeline survivability of 92/100.

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 22/100 | Needs Improvement | D | D (median) |
| Structured Data Quality | 58/100 | Good | B | C (median) |
| MX Stack Completeness | 46/100 | Could Be Better | C | C (median) |
| Pipeline Survivability | 92/100 | Excellent | A | A (median) |

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

**Evidence:** MX Stack Completeness 46/100 | Structured Data Quality 58/100 | Discovery Readiness 22/100 | Consistency 38%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so machines have the structured context they need for accurate comprehension. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

We find that across the audited set, Dotfusion has built a strong foundations in SEO and accessibility, with an overall score of 81/100 and an accessibility rating of 73/100 underpinned by consistent template-level patterns. These strengths provide the groundwork for targeted improvements moving forward.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Could Be Better | Could Be Better - 12208ms average load time |
| SEO (content pages) | 80 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 2/5 | 2/5 headers present (CSP, X-Frame-Options, X-Content-Type-Options absent); 0 of 22 URLs carry all five |
| Structured Data | 58 | Good - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 87 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 38% | 38% - same metadata patterns across every page |
| Agent access | 8/8 | every tested agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.

---

## Findings

### At a Glance

We identified 11 finding(s) on the audited set, ordered by regulatory exposure first and then by priority within each category.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2 | Compliance Risk | High | Medium | screen reader users may miss or misread affected content |
| 2 | Non-text Content Missing Text Alternatives, WCAG 1.1.1 | Compliance Risk | High | Low | screen reader users may miss or misread affected content |
| 3 | Info and Relationships Not Programmatically Determined, WCAG 1.3.1 | Compliance Risk | High | Medium | screen reader users may miss or misread affected content |
| 4 | No Bypass Mechanism for Repeated Blocks, WCAG 2.4.1 | Compliance Risk | Medium | Low | sighted keyboard users may miss or misread affected content |
| 5 | Heading Hierarchy Skips Levels | Compliance Risk | Medium | Low | screen-reader and machine outline-builders may misread the page structure |
| 6 | Semantic Structure (Naked Containers) 31/100 | Compliance Risk | Medium | Medium | machines lose structural context and infer page regions by position |
| 7 | Slow Origin Response | Cross-cutting | Medium | High | first-time visitors and cold-cache agents wait for the first byte |
| 8 | Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options | Cross-cutting | Medium | Low | Missing security headers increase exposure to content injection and clickjacking |
| 9 | Open Graph metadata incomplete or absent | Cross-cutting | Low | Low | Social sharing previews and agent link summaries lack author-controlled descriptions |
| 10 | Structured Data Property Gaps | Machine Readability Opportunity | Medium | Medium | machines may extract these entities incompletely or skip them |
| 11 | Schema.org coverage is partial: Decoration (SDQ 58/100) | Machine Readability Opportunity | Medium | Medium | Agents can partially parse structured facts but key properties may be missing |

---

**Priority 1: Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2**

**Bucket:** Compliance Risk

**Finding:** Anchor element found with a valid href attribute, but no link content has been supplied. This pattern appears 334 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Give every custom control an accessible name and the correct role and state (prefer a native button/link/input; add ARIA only where no native element fits). This satisfies WCAG 4.1.2.
- A named, correctly-roled control is also what lets an agent understand what an interactive element does.

**Effort:** Medium

---

**Priority 2: Non-text Content Missing Text Alternatives, WCAG 1.1.1**

**Bucket:** Compliance Risk

**Finding:** Img element missing an alt attribute. Use the alt attribute to specify a short text alternative. This pattern appears 148 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Add descriptive alt text to every informative image; mark purely decorative images with empty alt (alt="") so assistive technology skips them. This satisfies WCAG 1.1.1 and gives screen-reader users the same information sighted users get.
- Where an image is the only content of a link, the alt text must describe the link destination, not the picture, so keyboard and screen-reader users know where the link goes.

**Effort:** Low

---

**Priority 3: Info and Relationships Not Programmatically Determined, WCAG 1.3.1**

**Bucket:** Compliance Risk

**Finding:** This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate. This pattern appears 18 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Expose the structure a sighted user sees (headings, lists, tables, form labels) in the markup so assistive technology and machines can reconstruct it. This satisfies WCAG 1.3.1.
- Use native semantic elements before ARIA; reach for ARIA only where no native element conveys the relationship.

**Effort:** Medium

---

**Priority 4: No Bypass Mechanism for Repeated Blocks, WCAG 2.4.1**

**Bucket:** Compliance Risk

**Finding:** Iframe element requires a non-empty title attribute that identifies the frame. This pattern appears 17 time(s) across the audited set, affecting sighted keyboard users.

**What to change and why:**

- Add a skip link as the first focusable element, or wrap the repeated navigation in a landmark, so keyboard users can jump straight to the main content. This satisfies WCAG 2.4.1.
- A served-HTML skip link also gives server-side agents an explicit main-content anchor they can follow.

**Effort:** Low

---

**Priority 5: Heading Hierarchy Skips Levels**

**Bucket:** Compliance Risk

**Finding:** Heading levels skip on 10 audited page(s) (for example an h2 followed by an h4), so the document outline a machine or screen reader builds does not match the visible structure.

**What to change and why:**

- Order headings without skipping levels (an h2 followed by an h4 forces assistive technology and machines to guess the structure). Use heading level for hierarchy and CSS for visual size.
- A clean heading outline is the spine an agent uses to summarise the page; fixing it improves both accessibility and machine comprehension.

**Effort:** Low

---

**Priority 6: Semantic Structure (Naked Containers) 31/100**

**Bucket:** Compliance Risk

**Finding:** Rendered semantic-structure score 31/100: containers carry no role, ARIA landmark, or descriptive class, so machines fall back on positional inference to determine meaning. The worst page (https://dotfusion.com/about) carries 269 bare divs of 369.

**What to change and why:**

- Replace the obvious landmark containers (header, nav, main, footer, aside) with their semantic elements and give the remaining containers meaningful class names, so machines stop falling back on positional inference to determine what each region is.
- Start with the page that scored worst; wrapping the landmarks alone usually drops the bare-div ratio sharply without restructuring the layout.

**Effort:** Medium

---

**Priority 7: Slow Origin Response**

**Bucket:** Cross-cutting

**Finding:** The slowest audited page took 41289 ms on a first-time (cold-cache) fetch, well above the healthy origin-response band, so a first-time visitor or an agent arriving on a cold cache waits noticeably for the first byte (returning visitors with a warm cache are served in about 274 ms).

**What to change and why:**

- Profile the slow route with server-side tooling (application logs, an APM tool, the browser performance panel against an uncached load) to find the time-to-first-byte cost; origin latency is a separate engineering investigation this audit can only name.
- Cache or precompute the expensive path so first-time visitors and agents that arrive on a cold cache do not pay the full origin cost.

**Effort:** High

---

**Priority 8: Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options**

**Bucket:** Cross-cutting

**Finding:** Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options (All). Missing security headers increase exposure to content injection and clickjacking

**What to change and why:**

- Add the missing response headers at the server or CDN edge; each is a one-line directive that applies once configured.
- Set them once in the edge or server configuration rather than per page so coverage stays complete as new pages ship.

**Effort:** Low

---

**Priority 9: Open Graph metadata incomplete or absent**

**Bucket:** Cross-cutting

**Finding:** Open Graph metadata incomplete or absent (All). Social sharing previews and agent link summaries lack author-controlled descriptions

**What to change and why:**

- Complete the flagged SEO metadata (title, meta description, canonical) so search engines and machines index the page with accurate summaries.
- Set sensible defaults in the template so every page ships with complete metadata.

**Effort:** Low

---

**Priority 10: Structured Data Property Gaps**

**Bucket:** Machine Readability Opportunity

**Finding:** 76 Schema.org property gap(s) on the audited set across Offer, Service, WebSite, jsonLd: required or recommended properties are missing, so machines extract these entities less reliably.

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 11: Schema.org coverage is partial: Decoration (SDQ 58/100)**

**Bucket:** Machine Readability Opportunity

**Finding:** Schema.org coverage is partial: Decoration (SDQ 58/100) (Homepage). Agents can partially parse structured facts but key properties may be missing

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

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
| URL probed | https://dotfusion.com |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No - server returned HTML regardless of Accept header |

The site returns standard HTML to all requests, including those with `Accept: text/markdown`.

### Non-Standard Response Headers

No non-standard response headers detected. The site returns a clean, standard header set.

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how this site handles errors for both human visitors and machines.

| Check | Result |
|-------|--------|
| HTTP status code | 200 (soft 404) |
| Custom error page | Yes, branded custom page |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | No |
| Navigation back to valid content | No |
| Internal navigation links | None: no links to valid content |
| MX governance tags | Absent |
| Schema.org JSON-LD | Absent (correct: the error page makes no content claim) |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://dotfusion.com/our-work/case-study-faith-based-content-hub`. A first-time visitor sees the cold-cache cost: the crawler recorded 41289 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes that followed returned 237ms, 274ms, 347ms, giving a returning-visitor median of **274 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://dotfusion.com/services/answer-engine-optimization-agency-dotfusion`. A first-time visitor sees the cold-cache cost: the crawler recorded 4570 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three cache-busted re-probes that followed returned 315ms, 318ms, 243ms, giving a returning-visitor median of **315 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Returning visitors are served quickly across the site, but first-time visitors hit slow cold-cache responses on both the slowest page and a median-load page. The CDN is warming pages effectively, but the origin's cold response time is poor.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /

Sitemap: https://dotfusion.com/sitemap.xml
```

*The full `robots.txt` (4 lines) is preserved alongside this report as `dotfusion-com-robots-txt.txt`.*

The robots.txt declares no disallow paths, so every path is open to crawlers and machines. It announces the sitemap, so a machine reading the file can find the URL index directly.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 148 entries | Declares more than the 22-page sample audited |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | No | Absent (Drupal Simple XML Sitemap omits priority by default; Google dropped it as a ranking signal in 2017, but it remains useful for non-Google crawlers and AI agents) |

**Sitemap grade:** Partial

The sitemap declares 148 URLs and grades Partial. Lastmod dates vary across entries, which tells machines which pages changed and when. The sitemap omits priority. Google dropped this as ranking signals in 2017, but non-Google crawlers and AI agents still read changefreq as a re-crawl cadence hint and priority as a relative-importance signal, so adding it is a low-effort way to broaden machine compatibility.

The sitemap lists 148 URLs but the audit discovered pages that are not in it. Consider adding the missing pages so search engines and machines can discover all content.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

The llms.txt carries a site description, but lacks a page inventory and a content-use policy; adding them would give machines a complete structured index. We also recommend serving llms.txt as text/html rather than the text/plain the llmstxt.org specification defines; our recommendation diverges from the specification because Common Crawl ranks HTML ahead of plain text for its LLM-training subsets, so a plain-text file is unlikely to enter training corpora at the same rate as the rest of the site.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` - the URL returned HTTP 200 but the body is the site's standard error page (soft-404), not a valid agent card. The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

| Path | Purpose | Quality |
|------|---------|---------|
| *(34 paths - see sidecar)* | Various | Soft 404 - server returns the home page for missing resources |
| *(4 paths - see sidecar)* | Various | Soft 404 - body contains 404 error text (HTTP 200) |

**Soft 404s detected (41 paths):** The server returns HTTP 200 for these paths but does not serve the expected resource. AI agents and crawlers rely on HTTP status codes to determine whether a resource exists. The server should return HTTP 404 (or 301 to a canonical URL) for paths it does not implement. This is a web server configuration change, not a content change.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

<!-- SECTION:SOFT_404 -->
## Soft 404s

This site answers HTTP 200 for addresses that do not exist. A control address that cannot be real still returned a 200 with a normal-looking page. This is a soft 404, and on this site it is the default for missing addresses, not an isolated case. For a person it is invisible. For a machine it is corrosive: a 200 is the signal that a resource is present, so every check of the form "does this exist?" now returns yes. An agent confirming a price, a product, a policy, or a declaration cannot tell a real answer from a placeholder. A crawler building a training set ingests the catch-all page under thousands of distinct addresses as if each were real content. A validator probing for a well-known file records it as published when nothing is there. The correct behaviour is to return 404 (or 410) for an address that does not resolve, and to reserve 200 for addresses that do. Until that holds, no presence claim derived from a fetch of this site can be trusted, including some made elsewhere in this report where the underlying probe was misled.

We probed 51 addresses that should answer 404 when they are absent; 49 returned a soft 404 instead (41 of 43 well-known addresses). Severity: pervasive.
<!-- END:SOFT_404 -->

---

## Structured Data Inventory

| Schema Type  | Pages | Required % | Recommended % | Notes                                    |
|--------------|-------|------------|---------------|------------------------------------------|
| Question | 6 | 100% | 100% | Answer |
| Answer | 6 | 100% | 100% | - |
| ListItem | 14 | 100% | 100% | - |
| Service | 8 | 60% | 6% | Organisation, OfferCatalog |
| Offer | 5 | 0% | 0% | Service |
| Organisation | 13 | 100% | 100% | ImageObject, EducationalOccupationalCredential, PostalAddress, OfferCatalog |
| BreadcrumbList | 13 | 100% | 100% | - |
| Audience | 2 | 100% | 100% | - |
| Country | 5 | 100% | 100% | - |
| CreativeWork | 9 | 100% | 100% | Organisation |
| FAQPage | 6 | 100% | 100% | - |
| OfferCatalog | 5 | 100% | 100% | - |
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

**Structured Data Quality:** 58/100\
**Coverage:** 17 pages with JSON-LD out of 22 total (77%)\
**Unique types:** 24

Across the 22 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component                       | Earned | Max | Meaning                                                       |
|---------------------------------|--------|-----|---------------------------------------------------------------|
| Presence | 8 | 10 | schema.org JSON-LD is present on the page |
| Required property coverage | 14 | 25 | Every entity carries the properties its type requires |
| Recommended property coverage | 10 | 15 | Entities carry the properties their type recommends |
| Entity richness | 7 | 15 | Entities are described with enough properties to be useful |
| Cross-entity references | 9 | 15 | Entities reference each other (nested types and @id links) |
| Linked-data signals | 3 | 10 | Linked-data properties present (sameAs, mainEntityOfPage, isPartOf, about, mentions) |
| Vocabulary validity | 8 | 10 | Every @type is a valid Schema.org type |
| **Total** | **58** | **100** | |

---

## Structured Data Findings

We identified 76 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`dotfusion-com-structured-data-findings.csv`](dotfusion-com-structured-data-findings.csv). The 76 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

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

**The list format is not the problem.** Ranked, comparative lists are among the most-cited content shapes in AI answers, so we never flag a page for being a list. What we flag is the self-ranking variant: a "best N" page that puts its own brand at position one. It repeats a familiar move - the FAQ markup Google deprecated for gaming while AI systems kept reading it. The gamed surface gets demoted; the format stays valuable; the gap between them is provenance. The demotion is not an SEO cost you can trade for AI reach: AI answer engines retrieve through search, Google's own among them, so a page the search engine demotes is a page the AI does not surface at the top. A self-ranking list reads as a rigged result to anything checking who made the ranking, and it forfeits the visibility it was trying to manufacture.

### Per-page findings

| Page | Self-ranking | Year-swap | First-party superlative | Third-party citations | Provenance metadata |
|------|----------|-----------|--------------------------|------------------------|----------------------|
| [/services/headless-cms-agency](https://dotfusion.com/services/headless-cms-agency) | - | - | - | 3 third-party links | missing: author, publisher, dateModified, sameAs |
| [/services/contentful-development-agency](https://dotfusion.com/services/contentful-development-agency) | - | - | - | 3 third-party links | missing: author, publisher, dateModified, sameAs |
| [/services/storyblok-development-agency](https://dotfusion.com/services/storyblok-development-agency) | - | - | - | 3 third-party links | missing: author, publisher, dateModified, sameAs |
| [/services](https://dotfusion.com/services) | - | - | - | 3 third-party links | missing: author, publisher, dateModified, sameAs |
| [/services/answer-engine-optimisation-agency-dotfusion](https://dotfusion.com/services/answer-engine-optimization-agency-dotfusion) | - | - | - | 3 third-party links | missing: author, publisher, dateModified, sameAs |
| [/services/agility-cms-development-agency](https://dotfusion.com/services/agility-cms-development-agency) | - | - | - | 3 third-party links | missing: author, publisher, dateModified, sameAs |

The **Self-ranking** column flags a self-promotional listicle: a page whose `<title>` or `<h1>` advertises a ranked list and whose position-one entry resolves to the publisher's own host or brand. A year-swap refresh is a page whose title year is two or more years ahead of its JSON-LD `dateModified`. The citation column counts outbound links to hosts other than the audited site; pages with body content over 400 words and zero third-party citations carry no verifiable references.

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
| JSON-LD structured data | Yes | Yes | 40% | Yes | Yes |
| Microdata (itemscope) | Yes | Yes | Body | Yes | No |
| Open Graph meta tags | Not present | Not present | n/a | n/a | n/a |
| Twitter Card meta tags | Not present | Not present | n/a | n/a | n/a |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Not present | Not present | n/a | n/a | n/a |

One or more markers appear only in the rendered DOM: they are invisible to server-side machines (ChatGPT, Claude, Perplexity). Move these markers into the served HTML so every agent sees them.

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

| Stage | Name              | Status      | Score | Key Metric                                        |
|-------|-------------------|-------------|-------|---------------------------------------------------|
| 1 | Discovery | Pass | 89 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 50 | Schema.org: ItemList, ListItem, ListItem (100% required properties) |
| 3 | Search & Compare | Pass | 60 | Commerce schema with 0 supporting patterns |
| 4 | Price Understanding | Partial | 33 | Offer schema present but no price - agents may not parse the price |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

We could not resolve a single MX Journey verdict from the stage data; the per-stage results in the table above carry the detail.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. We run eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, condensing by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Fail · 15/22
  - *Means:* 15 page(s) flag for truncation risk; 14 of them exceed the 250 KB hard ceiling, the rest place main content too far into the document. Agents with limited fetch windows may stop reading before reaching the main content.
  - *Data:* Largest page: 508 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See dotfusion-com-pipeline-truncation-risk-pages.csv (15 pages).
- **SPA Shell** - Pass · 22/22
  - *Means:* Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does.
  - *Data:* Max gap score: 15. 0 means served and rendered match.
- **Soft 404** - Fail · site-wide
  - *Means:* This site returns HTTP 200 for addresses that do not exist (a soft-404 catch-all), so agents and search engines cannot distinguish a missing resource from a real one. Missing addresses must return HTTP 404 or 410.
  - *Data:* A control address that does not exist returned HTTP 200; 41 of 43 well-known paths are soft-404s.
- **Boilerplate Burial** - Pass · 22/22
  - *Means:* Navigation and chrome do not dominate the page; main content is reachable without wading through overhead.
  - *Data:* Highest boilerplate-to-content ratio: 0.05. Threshold: < 10 (and < 80 KB of inline head bytes).
- **Tabbed Disclosure** - Pass · 22/22
  - *Means:* No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML.
  - *Data:* 0 page(s) with tab widgets.
- **Delayed Content Start** - Pass · N/A
  - *Means:* Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily.
  - *Data:* Content starts at up to 0% of the document on some pages.
- **Broken Code Fences** - Pass · 22/22
  - *Means:* All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples.
  - *Data:* 0 page(s) with unbalanced fenced code blocks.
- **HTTP Content Negotiation (Vary)** - Pass · 22/22
  - *Means:* The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents.
  - *Data:* 0 page(s) advertise format negotiation.
- **Cross-Host Redirect** - Pass · 22/22
  - *Means:* No cross-domain redirects. Agents follow internal redirects without host-boundary issues.
  - *Data:* 0 page(s) cross origin during redirect.
- **Generic Headings** - Pass · 22/22
  - *Means:* Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction".
  - *Data:* Worst case: 0% generic headings.
- **Body Content Ratio** - Fail · N/A
  - *Means:* Prose content averages only 9% of served bytes. Scripts, styles, and images dominate; agents get little signal per byte.
  - *Data:* Average: 9%. Threshold: 30%.
- **Inline Tag Bloat** - Pass · 22/22
  - *Means:* No `<style>` or `<script>` block exceeds the 500-byte threshold on any page. Head stays lean for agents that read head-first.
  - *Data:* 0 element(s) > 500 bytes. Largest single-page inline CSS block: 0 B. Largest single-page inline JS block: 0 B.
- **Head Weight** - Pass · N/A
  - *Means:* Head bytes are a small fraction of each page. Agents reach body content quickly.
  - *Data:* Max ratio: 0.00. Average: 0.00. Threshold: 0.50.

**Pipeline Survivability score:** 92/100

We found that truncation risk is the only resilience check flagged across the audited set; it affects roughly two-thirds of the 22 pages we examined. When machines fetch these pages, they may receive incomplete content, which can lead to missing or inaccurate data extraction and poorer search visibility. Addressing this by reducing page size or adjusting the fetch offset so that the full main content is retrieved will have the greatest impact on resilience.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check set, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Rendered HTML | 31/100 (high) | 269 bare divs (73% of containers, depth 5) | `div.object-cover.w-full` (675), `div.slick-slide.slick-cloned` (488), `div` (241), `div.slick-slide` (204), `div.flex.items-center` (57) |

**Worst page (served):** none (no served page exceeded the threshold)\
**Worst page (rendered):** https://dotfusion.com/about

On the worst-case page https://dotfusion.com/about we observed a bare-div ratio of 73 % (269 of 369 elements), which forces machines to abandon semantic cues and rely on positional inference to determine meaning. The soup is largely surface-wide, characterised by a high bare-div ratio coupled with shallow chains; this pattern suggests the page was assembled with a drag-and-drop builder or an untyped component framework that injects generic divs late in the rendering pipeline.

---

## Security Headers

| Header                          | Status   | Purpose                                          |
|---------------------------------|----------|--------------------------------------------------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | No | Prevents MIME-type sniffing |

3 of the five standard security headers are absent on every audited response: Content-Security-Policy (CSP), X-Frame-Options, X-Content-Type-Options. Adding them at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 22 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/services`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/services/headless-cms-agency`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/services/contentful-development-agency`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/services/storyblok-development-agency`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/services/agility-cms-development-agency`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/services/answer-engine-optimization-agency-dotfusion`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/industries`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/about`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/contact-us`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/privacy`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/jedi`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/our-work`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/our-work/case-study-premier-caribbean-resort-company`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/our-work/case-study-mitsubishi-electric`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/our-work/case-study-first-canadian-place`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/our-work/case-study-westman-communications-website`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/our-work/case-study-yorkdale-shopping-centre`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/our-work/case-study-enterprise-agency-partnerships`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/our-work/case-study-faith-based-content-hub`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/our-work/case-study-boystown-website`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/our-work/case-study-intuit-website`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No

HTTPS: 22/22 | HSTS: 22/22 | CSP: 0/22 | X-Frame-Options: 0/22 | X-Content-Type-Options: 0/22

---

## Cross-Page Consistency

| Pattern                          | Coverage | Pages missing it   |
|----------------------------------|----------|--------------------|
| Schema.org JSON-LD | 77% | 5 |
| MX governance tags | 0% | 22 |
| Open Graph tags | 0% | 21 |
| Twitter Card tags | 0% | 21 |
| Skip link | 0% | 21 |
| llms.txt link tag | 0% | 21 |
| Canonical URL | 95% | - |
| Exactly 1 H1 | 55% | 10 |
| Code examples present | 0% | 22 |
| Self-contained sections | 100% | - |
| Error/troubleshooting docs | 0% | 22 |
| Lighthouse heading compliance | 55% | 10 |

**Overall Consistency:** 38%

Some pages in the 22-page sample are missing metadata patterns that others carry. Machines hitting different pages get different quality data. The Missing Pages column shows where to focus on the sampled pages. A full-estate audit confirms whether the same pattern holds across the rest of the site.

## Content Consistency

Across the audited set, we find consistent metadata patterns, with no brand-name or canonical-URL divergence flagged by the consistency check.

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Brand-name parity | Pass | Brand name appears consistently across all 22 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 22-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

We found 12 identical inline fragment(s) repeated across multiple pages, totalling 1062 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes per fragment | Appears on N pages | Preview                                                          |
|------|-------------------:|-------------------:|------------------------------------------------------------------|
| js | 426 | 43 | (function(w,d,s,l,i){w[l]=w[l]\|\|[];         w[l].push({'gtm. |
| css | 14154 | 22 | :root{--toastify-color-light: #fff;--toastify-color-dark: #1 |
| js | 657 | 22 | setTimeout(function(){!function(e,f){try{if(e.vector)return  |
| js | 634 | 22 | setTimeout(function(){!function(){var a=window.reb2b=window. |
| js | 435 | 22 | setTimeout(function(){(function(a,e,f,g,b,h,d,c){a[b]\|\|(a.Gl |
| js | 376 | 22 | setTimeout(function(){function b(){return"01f314ab-30b2-4266 |
| js | 351 | 22 | setTimeout(function(){function b(){var c=Math.random().toStr |
| js | 312 | 22 | setTimeout(function(){(function(){window.ldfdr=window.ldfdr\| |
| js | 293 | 22 | setTimeout(function(){var a=document.createElement("script") |
| js | 271 | 22 | setTimeout(function(){var b=document,c="script",e="serve.alb |

*Showing the top 10 of 12 duplicate fragments by occurrence count. The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `dotfusion-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src=".">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

We note that accessibility legislation worldwide converges on ISO 14289-1 (PDF/UA) as the technical baseline, with the EAA Directive (EU 2019/882) exemplifying the most precise codification among EU, US Section 508, UK Public Sector Bodies Accessibility Regulations 2018, and equivalent Australian and Canadian statutes.  
We also recognise that an untagged PDF remains invisible to machines; without a proper structure tree, search crawlers, AI systems, and automated pipelines cannot extract text, entities or structure from scanned or image-based PDFs.

We linked no PDFs from the 22-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 517 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Semantic Structure improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4, P5, P6 (Compliance Risk) | Priority 1, 2, 3, 4, 5, 6 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Implementation | P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11 (P1–P11) | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

We found that SEO is a strength for https://dotfusion.com, scoring 81/100 across the audited set.  
Key opportunities lie in Discovery Readiness (22/100) and Structured Data (58/100), where improving metadata and machine discoverability will unlock further value.  
We invite you to act on these findings to enhance machine comprehension and drive better performance for https://dotfusion.com.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 100/100 | Excellent |
| Accessibility | 73/100 | Good |
| SEO (all pages) | 81/100 | Excellent |
| SEO (content pages) | 80/100 | Excellent |
| MX Stack Completeness | 46/100 | Could Be Better |
| Structured Data Quality | 58/100 | Good |
| Commerce Visibility | 35/100 | Could Be Better |
| Discovery Readiness | 22/100 | Needs Improvement |
| Heading Quality | 87/100 | Excellent |
| Semantic Ratio | 10% | Needs Improvement |
| Agent Readability | 80/100 | Excellent |
| Pipeline Survivability | 92/100 | Excellent |
| Cross-Page Consistency | 38% | Could Be Better |

---

## Appendix A: Pages Audited

- **`/ (nav)`**: SEO 90 · A11y 70 · Back 85 · Served 100 · Rendered 100
- **`/services`**: SEO 85 · A11y 70 · Back 85 · Served 100 · Rendered 100
- **`/services/headless-cms-agency`**: SEO 87 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/services/contentful-development-agency`**: SEO 83 · A11y 70 · Back 85 · Served 100 · Rendered 100
- **`/services/storyblok-development-agency`**: SEO 86 · A11y 70 · Back 85 · Served 100 · Rendered 100
- **`/services/agility-cms-development-agency`**: SEO 87 · A11y 70 · Back 85 · Served 100 · Rendered 100
- **`/services/answer-engine-optimization-agency-dotfusion`**: SEO 85 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/industries`**: SEO 91 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/about`**: SEO 87 · A11y 75 · Back 55 · Served 100 · Rendered 100
- **`/contact-us`**: SEO 67 · A11y 70 · Back 55 · Served 100 · Rendered 100
- **`/privacy`**: SEO 84 · A11y 80 · Back 55 · Served 100 · Rendered 100
- **`/jedi`**: SEO 82 · A11y 80 · Back 55 · Served 100 · Rendered 100
- **`/our-work`**: SEO 69 · A11y 90 · Back 55 · Served 100 · Rendered 100
- **`/our-work/case-study-premier-caribbean-resort-company`**: SEO 71 · A11y 65 · Back 85 · Served 100 · Rendered 100
- **`/our-work/case-study-mitsubishi-electric`**: SEO 80 · A11y 80 · Back 85 · Served 100 · Rendered 100
- **`/our-work/case-study-first-canadian-place`**: SEO 77 · A11y 65 · Back 85 · Served 100 · Rendered 100
- **`/our-work/case-study-westman-communications-website`**: SEO 82 · A11y 80 · Back 85 · Served 100 · Rendered 100
- **`/our-work/case-study-yorkdale-shopping-centre`**: SEO 74 · A11y 65 · Back 85 · Served 100 · Rendered 100
- **`/our-work/case-study-enterprise-agency-partnerships`**: SEO 76 · A11y 80 · Back 85 · Served 100 · Rendered 100
- **`/our-work/case-study-faith-based-content-hub`**: SEO 74 · A11y 70 · Back 85 · Served 100 · Rendered 100
- **`/our-work/case-study-boystown-website`**: SEO 75 · A11y 65 · Back 85 · Served 100 · Rendered 100
- **`/our-work/case-study-intuit-website`**: SEO 82 · A11y 65 · Back 85 · Served 100 · Rendered 100

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 80/100.

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. External links are not tracked; this inventory covers same-host `<a href>` links only. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 643 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |

---

## Appendix C: Image Efficiency

We reviewed 944 images across the audited set: 5 WebP, 100 SVG, 778 PNG, 25 JPEG and 36 in other or unidentified formats. 798 of 944 (84.5%) carry alt text, leaving 146 without it. Each missing alt attribute is a place where a screen-reader user or a machine reading the page gets no description of what the image shows.

On loading strategy, 34 images are marked `loading="lazy"` and 0 `loading="eager"`, while 910 carry no loading attribute at all. No attribute is not the same as eager: the browser decides for itself when to fetch, which removes the explicit control that lazy and eager give you. Setting an explicit attribute on those images makes the fetch behaviour predictable for browsers and machines alike.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: Probable **Drupal** (medium confidence - two fingerprint signals). The main audit uses Drupal-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** **Next.js** - JS framework; **Tailwind CSS** - CSS framework; **Bootstrap** (low confidence) - CSS framework. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from cached HTML. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 22 pages examined | Platform: Drupal | Frameworks: **Next.js** - JS framework; **Tailwind CSS** - CSS framework; **Bootstrap** (low confidence) - CSS framework | Analysis method: Hybrid (automated + manual verification) | robots.txt: Present (3 directives)

**Measurement completeness:** Some probes may encounter network errors (HTTP 499 responses) or timeouts that halt data collection for that check. These are recorded in the audit findings as informational notes. Network timeouts are expected; a machine reading under time constraints stops processing just as a human reviewer would if time ran short. When probes cannot complete, the report documents the limitation and continues with available data.

**What comes next.** This report is the foundation, not the finish line. Implementing the recommendations requires the technical context that produced them; we carry that context forward. Our implementation engagements begin where this audit ends. Speak to us about next steps.

---

\clearpage

## Further Reading

Every book appendix cited in this report, plus the book itself. Click the link on screen or scan the QR code on paper: both encode the same URL.

| Scan | Link and description |
| :----: | -------------------- |
| ![Appendix R QR](assets/qr/appendix-r.png){ width=15mm } | **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)**: the methodology behind the Pipeline Survivability measurements used in this report.\ <https://mx.allabout.network/books/appendices/appendix-r.html> |
| ![Appendix S QR](assets/qr/appendix-s.png){ width=15mm } | **[MX: The Protocols Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**: the full set of reading-resilience checks scored in the Agent Reading Pipeline section.\ <https://mx.allabout.network/books/appendices/appendix-s.html> |
| ![Appendix M QR](assets/qr/appendix-m.png){ width=15mm } | **[MX: The Protocols Appendix M: Index of Metadata](https://mx.allabout.network/books/appendices/appendix-m.html)**: the full field dictionary governing the MX governance tags referenced throughout this report.\ <https://mx.allabout.network/books/appendices/appendix-m.html> |
| ![llms.txt guide QR](assets/qr/llms-txt-guide.png){ width=15mm } | **[Why llms.txt Probably Isn't Working: And What to Do About It](https://mx.allabout.network/blog/llms-txt-guide.html)**: a guide to the two structural problems most llms.txt implementations have (MIME type and sitemap registration).\ <https://mx.allabout.network/blog/llms-txt-guide.html> |
| ![Books index QR](assets/qr/books-index.png){ width=15mm } | **[Get the books](https://mx.allabout.network/books/)**: MX: The Intro (free), MX: The Handbook, and MX: The Protocols. The full reference for every concept this report draws on.\ <https://mx.allabout.network/books/> |

---

\clearpage

## Practice What We Preach: This Audit's Own Evidence Chain

We hold this audit deliverable to the same MX standards we apply to your site. Every consequential step that produced this report (LLM-driven prose passes, deterministic gate verdicts, multi-agent attribution probes, repair iterations) is recorded in two adjacent JSON sidecars next to this PDF.

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the company. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `dotfusion-com-report.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `dotfusion-com-report.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload dotfusion-com-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the company distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it first to ourselves.

---

**Date:** 5 June 2026\
(c) 2026 CogNovaMX Ltd. All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*
