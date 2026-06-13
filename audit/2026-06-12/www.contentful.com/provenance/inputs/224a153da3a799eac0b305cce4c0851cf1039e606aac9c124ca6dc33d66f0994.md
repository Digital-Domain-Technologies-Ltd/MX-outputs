---
title: "Www Contentful: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-06-12"
modified: "2026-06-12"
client: "Www Contentful"
clientSlug: "www-contentful-com"
clientUrl: "https://www.contentful.com"
reportId: "www-contentful-com-WEB-AUDIT-20260612"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-06-12"
auditCommand: "node scripts/audit-pipeline.js https://www.contentful.com --pages 10 --date 2026-06-12 --client www-contentful-com"
description: "Executive audit report reviewing accessibility, performance, SEO, structured data, and AI agent compatibility for Www Contentful"
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
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Www Contentful covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Www Contentful", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  # The single cog that manages this pipeline artefact, so a reader never
  # has to infer the steward (scripts/lib/managed-by.cjs is the resolver).
  x-mx-managedBy: mx-audit.cog.md
  runbook: "Executive audit report for Www Contentful. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in the top-level auditCommand field. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md', which validates the report then renders it through scripts/bin/mx.pdf.sh."
  generate:
    command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md"
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.pdf"
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
**Date:** 12 June 2026\
**Report ID:** www-contentful-com-WEB-AUDIT-20260612

---

\clearpage

## About This Report

We audited 12 pages across www.contentful.com's site using the Web Audit Suite. We review each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image efficiency, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before completing this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent patterns emerge, we update what we look for.

**How we build it.** We use scripted SOPs running deterministic checks rather than inference. The crawl, the served-versus-rendered comparison, the structured-data extraction, the accessibility passes, the discovery-file probes, the platform fingerprinting and the per-section scoring all run as scripts producing byte-identical outputs on the same input. A small number of stages run a judgement pass over the resulting report; that is the only inference layer. Those judgement passes can run against a local model, so the whole audit runs inside your own network with nothing leaving it: relevant where content is regulated or privacy-sensitive.

Our scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. MX addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** This report looks at the web estate: every page served over HTTP, examined for metadata, structured data, accessibility, and machine readability. MX runs deeper, covering every document type a business publishes (PDFs, data feeds, API responses, structured documents) and the machines that read them. The web estate is the foundation; the rest builds on it.

**About sample scope.** Findings throughout this report describe what we observed on the 12 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so.

<!-- STATIC-SEED: note-llms-txt -->

---

## Executive Summary

**Table 1**

*Executive Summary*

| | Score | |
|:---|---:|:---|
| Performance | **35**/100 | `######------------` **(!)** |
| Accessibility | **77**/100 | `##############----` |
| SEO | **94**/100 | `#################-` |
| Served-HTML Structure | **99**/100 | `##################` |
| MX Stack Completeness | **66**/100 | `############------` |
| Agent Readability | **54**/100 | `##########--------` |
| Pipeline Survivability | **79**/100 | `##############----` |

*The three machine metrics measure different things. **Served-HTML Structure** is the semantic markup an agent reads before JavaScript runs; **Agent Readability** is how easily the content can be quoted once reached; **Pipeline Survivability** is whether a page survives an agent's fetch and ingest. A site can score low on one and high on another.*

Agent Readability was adjusted down by 18 points for site-wide gaps a machine cannot work around:

- **Origin server is slow for an agent fetch** (-5): origin verdict slow, slowest median 864ms
- **Bare-div nesting (div soup) across most pages** (-8): 6 of 12 pages are heavy with bare-div nesting
- **Pages are consistently heavy to load** (-5): median page load 3715ms across 12 pages

Your site runs on **Netlify** (detected from multiple platform signals).

Across the audited set, your site delivers a polished experience for visitors. The strong SEO foundation-scoring 94/100-ensures that search engines surface your content quickly and accurately. Clear navigation, concise copy, and consistent branding reinforce the user journey, making it easy for people to find what they need.

Accessibility remains a Priority 1 compliance area; across the audited set we identified 11 distinct WCAG AA issue types affecting 279 elements. Addressing each category with a single fix will resolve many instances and improve usability for all users. The headline opportunity that follows is to elevate your machine-readiness from Level 1 Discoverable to Level 2 Governed by adding full MX governance fields-mx:status, mx:contentType, mx:audience, canonicalUri, provenance markers-so machines have the structured context they need for accurate comprehension. Raising MSC above 60 and Discovery Readiness above 40 will unlock this next step.

\clearpage

<!-- AUDIT-DELTA:START -->
## Change Since Our 6 June 2026 Audit

We last audited www.contentful.com on 6 June 2026. The table compares that audit with the current one across the headline measures. Every headline score is unchanged from that audit, so the recommendations from that audit remain open.

| Measure | 6 June 2026 | 12 June 2026 | Change |
|---------|------:|------:|:-------|
| Performance | 35 | 35 | No change |
| Accessibility | 77 | 77 | No change |
| SEO | 94 | 94 | No change |
| Machine Suitability | 99 | 99 | No change |
| WCAG AA issues | 279 | 279 | No change |
| Pages audited | 12 | 12 | No change |

We include this comparison because it is what continuous monitoring delivers: each re-audit shows what moved and what held, so open items stay visible until they are closed.
<!-- AUDIT-DELTA:END -->

\clearpage

## Balanced Scorecard

### Human Experience

We find that across the audited set, the site delivers a strong experience for human visitors, although average page load times of 3429 ms indicate room for improvement.

**Table 2**

*Human Experience*

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Good | B | - |
| Performance | Could Be Better | C | A (median) |
| Accessibility (WCAG) | Excellent | A | A (median) |
| Trust and Credibility | Excellent | A | - |

*The UX / Navigation grade derives from measured navigation signals: heading-outline quality, single-H1 consistency, and skip-link consistency. The Trust and Credibility grade derives from measured transport and integrity signals: HTTPS coverage, security-header coverage, canonical-URL consistency, and correct error-page status.*

### Machine Experience

Across the audited set, machines can discover and parse the content with Discovery Readiness at 39/100 and Structured Data Quality at 61/100, yet they lack governance context as reflected by an MX Readiness Level of 1 (Discoverable), despite MX Stack Completeness of 66/100 and Pipeline Survivability of 79/100.

**Table 3**

*Machine Experience*

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 39/100 | Could Be Better | C | C (median) |
| Structured Data Quality | 61/100 | Good | B | B (median) |
| MX Stack Completeness | 66/100 | Good | B | B (median) |
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

**Table 4**

*MX Readiness Level*

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

We find across the audited set that your pages build a strong foundations with an impressive SEO score of 94/100 and content-page performance at 98/100. The strong baseline in accessibility (77/100), consistent security headers on four of five key directives, and structured data quality of 61/100 provide the groundwork for further optimisation.

**Table 5**

*What's Working Well*

| Dimension | Score | Highlights |
|-----------|-------|------------|
| SEO (content pages) | 98 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | 4/5 headers present (CSP absent); 0 of 12 URLs carry all five |
| Structured Data | 61 | Good - JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 55 | Good - single H1 on every page |
| Consistency | 56% | 56% - same metadata patterns across every page |
| Agent access | 8/8 | every tested agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.

---

## Findings

### At a Glance

We identified 14 finding(s) on the audited set, ordered by regulatory exposure first and then by priority within each category.

**Table 6**

*At a Glance*

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2 | Compliance Risk | High | Medium | screen reader users may miss or misread affected content |
| 2 | Insufficient Colour Contrast, WCAG 1.4.3 | Compliance Risk | High | Medium | low-vision users may miss or misread affected content |
| 3 | Duplicate ID Attributes, WCAG 4.1.1 | Compliance Risk | High | Medium | assistive-technology users may miss or misread affected content |
| 4 | Non-text Content Missing Text Alternatives, WCAG 1.1.1 | Compliance Risk | High | Low | screen reader users may miss or misread affected content |
| 5 | Info and Relationships Not Programmatically Determined, WCAG 1.3.1 | Compliance Risk | High | Medium | screen reader users may miss or misread affected content |
| 6 | No Bypass Mechanism for Repeated Blocks, WCAG 2.4.1 | Compliance Risk | Medium | Low | sighted keyboard users may miss or misread affected content |
| 7 | Heading Hierarchy Skips Levels | Compliance Risk | Medium | Low | screen-reader and machine outline-builders may misread the page structure |
| 8 | Semantic Structure (Naked Containers) 34/100 | Compliance Risk | Medium | Medium | machines lose structural context and infer page regions by position |
| 9 | Slow Origin Response | Cross-cutting | Medium | High | first-time visitors and cold-cache agents wait for the first byte |
| 10 | Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options | Cross-cutting | Medium | Low | Missing security headers increase exposure to content injection and clickjacking |
| 11 | Open Graph metadata incomplete or absent | Cross-cutting | Low | Low | Social sharing previews and agent link summaries lack author-controlled descriptions |
| 12 | Structured Data Property Gaps | Machine Readability Opportunity | Medium | Medium | machines may extract these entities incompletely or skip them |
| 13 | Schema.org coverage is partial: Decoration (SDQ 61/100) | Machine Readability Opportunity | Medium | Medium | Agents can partially parse structured facts but key properties may be missing |
| 14 | No llms.txt published | Machine Readability Opportunity | Medium | Low | Agents have no machine-curated index of site content or declared access policy |

---

**Priority 1: Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2**

**Bucket:** Compliance Risk

**Finding:** Anchor element found with a valid href attribute, but no link content has been supplied. This pattern appears 195 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Give every custom control an accessible name and the correct role and state (prefer a native button/link/input; add ARIA only where no native element fits). This satisfies WCAG 4.1.2.
- A named, correctly-roled control is also what lets an agent understand what an interactive element does.

**Effort:** Medium

---

**Priority 2: Insufficient Colour Contrast, WCAG 1.4.3**

**Bucket:** Compliance Risk

**Finding:** This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 4.05:1. Recommendation:  change background to #3478c7. This pattern appears 38 time(s) across the audited set, affecting low-vision users.

**What to change and why:**

- Raise the contrast ratio of the flagged text and its background to at least 4.5:1 for normal text (3:1 for large text). This satisfies WCAG 1.4.3 and keeps the text readable for low-vision users and in bright-light conditions.
- Fix the values in the design tokens or theme stylesheet once so the change propagates wherever the colour pair is reused, rather than patching individual pages.

**Effort:** Medium

---

**Priority 3: Duplicate ID Attributes, WCAG 4.1.1**

**Bucket:** Compliance Risk

**Finding:** Duplicate id attribute value "section-0" found on the web page. This pattern appears 15 time(s) across the audited set, affecting all assistive tech users.

**What to change and why:**

- Make every id attribute unique within each page; duplicate ids break label/for associations, aria-labelledby references, and in-page anchors. This satisfies WCAG 4.1.1.
- When the duplication comes from a repeated template module, fix it once in the template so every page that includes the module is corrected together.

**Effort:** Medium

---

**Priority 4: Non-text Content Missing Text Alternatives, WCAG 1.1.1**

**Bucket:** Compliance Risk

**Finding:** Img element missing an alt attribute. Use the alt attribute to specify a short text alternative. This pattern appears 13 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Add descriptive alt text to every informative image; mark purely decorative images with empty alt (alt="") so assistive technology skips them. This satisfies WCAG 1.1.1 and gives screen-reader users the same information sighted users get.
- Where an image is the only content of a link, the alt text must describe the link destination, not the picture, so keyboard and screen-reader users know where the link goes.

**Effort:** Low

---

**Priority 5: Info and Relationships Not Programmatically Determined, WCAG 1.3.1**

**Bucket:** Compliance Risk

**Finding:** Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes. This pattern appears 5 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Expose the structure a sighted user sees (headings, lists, tables, form labels) in the markup so assistive technology and machines can reconstruct it. This satisfies WCAG 1.3.1.
- Use native semantic elements before ARIA; reach for ARIA only where no native element conveys the relationship.

**Effort:** Medium

---

**Priority 6: No Bypass Mechanism for Repeated Blocks, WCAG 2.4.1**

**Bucket:** Compliance Risk

**Finding:** Iframe element requires a non-empty title attribute that identifies the frame. This pattern appears 12 time(s) across the audited set, affecting sighted keyboard users.

**What to change and why:**

- Add a skip link as the first focusable element, or wrap the repeated navigation in a landmark, so keyboard users can jump straight to the main content. This satisfies WCAG 2.4.1.
- A served-HTML skip link also gives server-side agents an explicit main-content anchor they can follow.

**Effort:** Low

---

**Priority 7: Heading Hierarchy Skips Levels**

**Bucket:** Compliance Risk

**Finding:** Heading levels skip on 10 audited page(s) (for example an h2 followed by an h4), so the document outline a machine or screen reader builds does not match the visible structure.

**What to change and why:**

- Order headings without skipping levels (an h2 followed by an h4 forces assistive technology and machines to guess the structure). Use heading level for hierarchy and CSS for visual size.
- A clean heading outline is the spine an agent uses to summarise the page; fixing it improves both accessibility and machine comprehension.

**Effort:** Low

---

**Priority 8: Semantic Structure (Naked Containers) 34/100**

**Bucket:** Compliance Risk

**Finding:** Rendered semantic-structure score 34/100: containers carry no role, ARIA landmark, or descriptive class, so machines fall back on positional inference to determine meaning. The worst page ([/products/personalization/](https://www.contentful.com/products/personalization/)) carries 290 bare divs of 566.

**What to change and why:**

- Replace the obvious landmark containers (header, nav, main, footer, aside) with their semantic elements and give the remaining containers meaningful class names, so machines stop falling back on positional inference to determine what each region is.
- Start with the page that scored worst; wrapping the landmarks alone usually drops the bare-div ratio sharply without restructuring the layout.

**Effort:** Medium

---

**Priority 9: Slow Origin Response**

**Bucket:** Cross-cutting

**Finding:** The slowest audited page took 4248 ms on a first-time (cold-cache) fetch, well above the healthy origin-response band, so a first-time visitor or an agent arriving on a cold cache waits noticeably for the first byte (returning visitors with a warm cache are served in about 864 ms).

**What to change and why:**

- Profile the slow route with server-side tooling (application logs, an APM tool, the browser performance panel against an uncached load) to find the time-to-first-byte cost; origin latency is a separate engineering investigation this audit can only name.
- Cache or precompute the expensive path so first-time visitors and agents that arrive on a cold cache do not pay the full origin cost.

**Effort:** High

---

**Priority 10: Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options**

**Bucket:** Cross-cutting

**Finding:** Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options (Site-wide). Missing security headers increase exposure to content injection and clickjacking

**What to change and why:**

- Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once configured.
- Set them once in the edge or server configuration rather than per page so coverage stays complete as new pages ship.

**Effort:** Low

---

**Priority 11: Open Graph metadata incomplete or absent**

**Bucket:** Cross-cutting

**Finding:** Open Graph metadata incomplete or absent (1 page(s)). Social sharing previews and agent link summaries lack author-controlled descriptions

**What to change and why:**

- Complete the flagged SEO metadata (title, meta description, canonical) so search engines and machines index the page with accurate summaries.
- Set sensible defaults in the template so every page ships with complete metadata.

**Effort:** Low

---

**Priority 12: Structured Data Property Gaps**

**Bucket:** Machine Readability Opportunity

**Finding:** 63 Schema.org property gap(s) on the audited set across jsonLd, WebSite, openGraph, twitterCard: required or recommended properties are missing, so machines extract these entities less reliably.

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 13: Schema.org coverage is partial: Decoration (SDQ 61/100)**

**Bucket:** Machine Readability Opportunity

**Finding:** Schema.org coverage is partial: Decoration (SDQ 61/100) (Homepage). Agents can partially parse structured facts but key properties may be missing

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 14: No llms.txt published**

**Bucket:** Machine Readability Opportunity

**Finding:** No llms.txt published (Root). Agents have no machine-curated index of site content or declared access policy

**What to change and why:**

- Publish the missing discovery file at the site root so agents and crawlers can find the machine-curated index and access policy in one fetch rather than inferring them.
- Reference the file from robots.txt and the sitemap so crawlers have a reliable signal that it exists.

**Effort:** Low

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs**: linking the Organisation entity to external social profiles (e.g., LinkedIn, Twitter) gives machines a verified identity context and improves attribution; add this link in the Organisation schema on every page that includes Organisation markup.  
- **potentialAction (ContactPoint)**: adding a ContactPoint action to the Organisation schema exposes contact methods for agents, enhancing discoverability of support channels; include it within the Organisation markup across all relevant pages.  
- **SearchAction**: embedding SearchAction inside the WebSite schema lets agents perform full-text queries against your content, improving machine navigation; place this action in the WebSite markup on the homepage and any page that offers a search interface.

---

## AI Agent Access Test

This test fetches the homepage using the User-Agent strings of known AI agents to verify whether this site is accessible at inference time.

**Table 7**

*AI Agent Access Test*

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

**Table 8**

*Markdown Content Negotiation*

| Check | Result |
|-------|--------|
| URL probed | https://www.contentful.com |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No - server returned HTML regardless of Accept header |

The site returns standard HTML to all requests, including those with `Accept: text/markdown`.

### Non-Standard Response Headers

No non-standard response headers detected. The site returns a clean, standard header set.

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how this site handles errors for both human visitors and machines.

**Table 9**

*Error Page Test*

| Check | Result |
|-------|--------|
| HTTP status code | 404 (correct) |
| Custom error page | No, generic server error |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | No: no route back to valid content |
| Internal navigation links | None: no links to valid content |
| MX governance tags | Absent |
| Schema.org JSON-LD | Absent (correct: the error page makes no content claim) |

---

## The Accessibility Tree

There is no single kind of machine visitor, and no single thing a machine reads. A small model on a phone works inside a tight context window. A foundation model arrives with browsing tools. A plain scraper never runs a model at all. A converter flattens each page to text before a model ever sees it, stripping layout and scripts on the way. A coding agent fetches a page once over HTTP and moves on. Some of these read raw markup, some read a text projection, some consult the accessibility tree, some parse structured metadata. None of them see the visual layout, and you cannot know which one will arrive next.

The design answer is redundancy: carry the same meaning in page semantics, in the accessibility tree, in metadata, and in plain text, so that whichever channel a visitor reads, the meaning survives. A page that depends on any single channel fails every visitor that lacks that channel. The accessibility tree is the channel this section checks, and it is shared by screen readers, so every fix here serves human visitors and machine visitors at once.

The contrast with your human visitors is worth holding onto. People cannot take in everything at once, so good pages guide them: a journey, step by step, page by page. Machines are the opposite. They hit one page, once, and leave; they follow no journey unless explicitly instructed to. A site that reveals its meaning only across a multi-page journey is invisible to a machine that lands on one page in the middle of it. Every page therefore has to stand alone for the machine while the journey still works for the human. These are complementary designs on the same pages, not a trade-off.

This check reads each audited page the way a tree consumer does and flags the places where each page's behaviour, names, and structure fail to reach the tree. It deliberately covers what the WCAG scan in the Accessibility section does not: those results measure conformance per page; these findings are about meaning that exists in only one channel.

**Table 10**

*The Accessibility Tree*

| Measure | Result |
|---------|--------|
| Accessibility-tree score | 0/100 |
| Pages checked | 11 |

Across the 11 pages we checked, 44 distinct issue patterns reduce what reaches the tree. 3 of these repeat across pages with the same structure, which marks them as template-level: one change in the shared component clears the finding everywhere it appears.

**Duplicate id used as an accessibility reference** (WCAG 2.1 4.1.1)

An id that label/for or an ARIA attribute relies on appears more than once on the page. Which element the reference resolves to is undefined, so different readers expose different names for the same control. Seen on 2 pages, for example `/`.

*The fix:* Make the id unique in the template, or scope component ids when the component repeats on a page.

**Duplicate id used as an accessibility reference** (WCAG 2.1 4.1.1)

An id that label/for or an ARIA attribute relies on appears more than once on the page. Which element the reference resolves to is undefined, so different readers expose different names for the same control. Seen on 2 pages, for example `/`.

*The fix:* Make the id unique in the template, or scope component ids when the component repeats on a page.

**Duplicate id used as an accessibility reference** (WCAG 2.1 4.1.1)

An id that label/for or an ARIA attribute relies on appears more than once on the page. Which element the reference resolves to is undefined, so different readers expose different names for the same control. Seen on 2 pages, for example `/`.

*The fix:* Make the id unique in the template, or scope component ids when the component repeats on a page.

**Clickable element with no semantic role** (WCAG 2.1 4.1.2)

A container is wired to respond to clicks but carries no role and is not a native control, so it does not exist as an interactive element in the accessibility tree. A screen reader user cannot reach it; an agent reading the tree or the markup cannot tell it is actionable. Seen on `/`.

*The fix:* Use a native button or link in the template, or add the matching role plus keyboard handling to the existing container.

**Duplicate id used as an accessibility reference** (WCAG 2.1 4.1.1)

An id that label/for or an ARIA attribute relies on appears more than once on the page. Which element the reference resolves to is undefined, so different readers expose different names for the same control. Seen on `/`.

*The fix:* Make the id unique in the template, or scope component ids when the component repeats on a page.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Clickable element with no semantic role** (WCAG 2.1 4.1.2)

A container is wired to respond to clicks but carries no role and is not a native control, so it does not exist as an interactive element in the accessibility tree. A screen reader user cannot reach it; an agent reading the tree or the markup cannot tell it is actionable. Seen on `/contact/sales/`.

*The fix:* Use a native button or link in the template, or add the matching role plus keyboard handling to the existing container.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/contact/sales/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Clickable element with no semantic role** (WCAG 2.1 4.1.2)

A container is wired to respond to clicks but carries no role and is not a native control, so it does not exist as an interactive element in the accessibility tree. A screen reader user cannot reach it; an agent reading the tree or the markup cannot tell it is actionable. Seen on `/marketplace/`.

*The fix:* Use a native button or link in the template, or add the matching role plus keyboard handling to the existing container.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/marketplace/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Clickable element with no semantic role** (WCAG 2.1 4.1.2)

A container is wired to respond to clicks but carries no role and is not a native control, so it does not exist as an interactive element in the accessibility tree. A screen reader user cannot reach it; an agent reading the tree or the markup cannot tell it is actionable. Seen on `/pricing/`.

*The fix:* Use a native button or link in the template, or add the matching role plus keyboard handling to the existing container.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/pricing/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Clickable element with no semantic role** (WCAG 2.1 4.1.2)

A container is wired to respond to clicks but carries no role and is not a native control, so it does not exist as an interactive element in the accessibility tree. A screen reader user cannot reach it; an agent reading the tree or the markup cannot tell it is actionable. Seen on `/products/ai-actions/`.

*The fix:* Use a native button or link in the template, or add the matching role plus keyboard handling to the existing container.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/products/ai-actions/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Clickable element with no semantic role** (WCAG 2.1 4.1.2)

A container is wired to respond to clicks but carries no role and is not a native control, so it does not exist as an interactive element in the accessibility tree. A screen reader user cannot reach it; an agent reading the tree or the markup cannot tell it is actionable. Seen on `/products/analytics/`.

*The fix:* Use a native button or link in the template, or add the matching role plus keyboard handling to the existing container.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/products/analytics/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Clickable element with no semantic role** (WCAG 2.1 4.1.2)

A container is wired to respond to clicks but carries no role and is not a native control, so it does not exist as an interactive element in the accessibility tree. A screen reader user cannot reach it; an agent reading the tree or the markup cannot tell it is actionable. Seen on `/products/ecosystem/`.

*The fix:* Use a native button or link in the template, or add the matching role plus keyboard handling to the existing container.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/products/ecosystem/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Clickable element with no semantic role** (WCAG 2.1 4.1.2)

A container is wired to respond to clicks but carries no role and is not a native control, so it does not exist as an interactive element in the accessibility tree. A screen reader user cannot reach it; an agent reading the tree or the markup cannot tell it is actionable. Seen on `/products/personalization/`.

*The fix:* Use a native button or link in the template, or add the matching role plus keyboard handling to the existing container.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/products/personalization/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Clickable element with no semantic role** (WCAG 2.1 4.1.2)

A container is wired to respond to clicks but carries no role and is not a native control, so it does not exist as an interactive element in the accessibility tree. A screen reader user cannot reach it; an agent reading the tree or the markup cannot tell it is actionable. Seen on `/products/personalization/ai-suggestions/`.

*The fix:* Use a native button or link in the template, or add the matching role plus keyboard handling to the existing container.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/products/personalization/ai-suggestions/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Clickable element with no semantic role** (WCAG 2.1 4.1.2)

A container is wired to respond to clicks but carries no role and is not a native control, so it does not exist as an interactive element in the accessibility tree. A screen reader user cannot reach it; an agent reading the tree or the markup cannot tell it is actionable. Seen on `/products/platform/`.

*The fix:* Use a native button or link in the template, or add the matching role plus keyboard handling to the existing container.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/products/platform/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Clickable element with no semantic role** (WCAG 2.1 4.1.2)

A container is wired to respond to clicks but carries no role and is not a native control, so it does not exist as an interactive element in the accessibility tree. A screen reader user cannot reach it; an agent reading the tree or the markup cannot tell it is actionable. Seen on `/products/studio/`.

*The fix:* Use a native button or link in the template, or add the matching role plus keyboard handling to the existing container.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/products/studio/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Data-bearing image with no text equivalent** (WCAG 2.1 1.1.1)

An image whose name or description suggests it carries data (a chart, a price list, a menu, a timetable) has no adjacent text equivalent. The data exists in exactly one channel - pixels - which no agent and no screen reader can read. Repeats on 10 of 11 pages with the same structure (a template-level pattern).

*The fix:* Publish the underlying data beside the image: a table, a definition list, or descriptive prose in the same template component.

**Repeated landmarks with no distinguishing labels** (WCAG 2.1 1.3.6)

The page carries more than one navigation (or complementary) landmark with no aria-label to tell them apart. In the tree they read as "navigation, navigation": a consumer cannot tell the site menu from the footer links or the breadcrumb. Repeats on 10 of 11 pages with the same structure (a template-level pattern).

*The fix:* Give each repeated landmark a short aria-label in the template ("Primary", "Footer", "Breadcrumb").

**Data-bearing image with no text equivalent** (WCAG 2.1 1.1.1)

An image whose name or description suggests it carries data (a chart, a price list, a menu, a timetable) has no adjacent text equivalent. The data exists in exactly one channel - pixels - which no agent and no screen reader can read. Repeats on 8 of 11 pages with the same structure (a template-level pattern).

*The fix:* Publish the underlying data beside the image: a table, a definition list, or descriptive prose in the same template component.

**Data-bearing image with no text equivalent** (WCAG 2.1 1.1.1)

An image whose name or description suggests it carries data (a chart, a price list, a menu, a timetable) has no adjacent text equivalent. The data exists in exactly one channel - pixels - which no agent and no screen reader can read. Seen on 4 pages, for example `/products/analytics/`.

*The fix:* Publish the underlying data beside the image: a table, a definition list, or descriptive prose in the same template component.

**Data-bearing image with no text equivalent** (WCAG 2.1 1.1.1)

An image whose name or description suggests it carries data (a chart, a price list, a menu, a timetable) has no adjacent text equivalent. The data exists in exactly one channel - pixels - which no agent and no screen reader can read. Seen on 3 pages, for example `/`.

*The fix:* Publish the underlying data beside the image: a table, a definition list, or descriptive prose in the same template component.

**Link whose accessible name carries no destination meaning** (WCAG 2.1 2.4.4)

The link's accessible name is a generic phrase or a bare URL. In the accessibility tree, and in any links-only projection of the page, every such link reads identically: the destination is unknowable without the surrounding layout, which machines and screen reader users do not have. Seen on 2 pages, for example `/pricing/`.

*The fix:* Name the destination in the link text itself in the template ("View pricing plans" rather than "click here").

**Data-bearing image with no text equivalent** (WCAG 2.1 1.1.1)

An image whose name or description suggests it carries data (a chart, a price list, a menu, a timetable) has no adjacent text equivalent. The data exists in exactly one channel - pixels - which no agent and no screen reader can read. Seen on 2 pages, for example `/products/analytics/`.

*The fix:* Publish the underlying data beside the image: a table, a definition list, or descriptive prose in the same template component.

**Link whose accessible name carries no destination meaning** (WCAG 2.1 2.4.4)

The link's accessible name is a generic phrase or a bare URL. In the accessibility tree, and in any links-only projection of the page, every such link reads identically: the destination is unknowable without the surrounding layout, which machines and screen reader users do not have. Seen on `/marketplace/`.

*The fix:* Name the destination in the link text itself in the template ("View pricing plans" rather than "click here").

**Link whose accessible name carries no destination meaning** (WCAG 2.1 2.4.4)

The link's accessible name is a generic phrase or a bare URL. In the accessibility tree, and in any links-only projection of the page, every such link reads identically: the destination is unknowable without the surrounding layout, which machines and screen reader users do not have. Seen on `/marketplace/`.

*The fix:* Name the destination in the link text itself in the template ("View pricing plans" rather than "click here").

**Link whose accessible name carries no destination meaning** (WCAG 2.1 2.4.4)

The link's accessible name is a generic phrase or a bare URL. In the accessibility tree, and in any links-only projection of the page, every such link reads identically: the destination is unknowable without the surrounding layout, which machines and screen reader users do not have. Seen on `/marketplace/`.

*The fix:* Name the destination in the link text itself in the template ("View pricing plans" rather than "click here").

**Link whose accessible name carries no destination meaning** (WCAG 2.1 2.4.4)

The link's accessible name is a generic phrase or a bare URL. In the accessibility tree, and in any links-only projection of the page, every such link reads identically: the destination is unknowable without the surrounding layout, which machines and screen reader users do not have. Seen on `/marketplace/`.

*The fix:* Name the destination in the link text itself in the template ("View pricing plans" rather than "click here").

**Form field labelled only by its placeholder** (WCAG 2.1 3.3.2)

An input relies on placeholder text as its only label. The placeholder vanishes the moment the visitor types, is not reliably exposed as the accessible name, and disappears entirely in text projections of the page. Seen on `/marketplace/`.

*The fix:* Add a real label (visible, or aria-label where the design demands it) in the form component; keep the placeholder as a hint, not the name.

**Data-bearing image with no text equivalent** (WCAG 2.1 1.1.1)

An image whose name or description suggests it carries data (a chart, a price list, a menu, a timetable) has no adjacent text equivalent. The data exists in exactly one channel - pixels - which no agent and no screen reader can read. Seen on `/products/analytics/`.

*The fix:* Publish the underlying data beside the image: a table, a definition list, or descriptive prose in the same template component.

**Data-bearing image with no text equivalent** (WCAG 2.1 1.1.1)

An image whose name or description suggests it carries data (a chart, a price list, a menu, a timetable) has no adjacent text equivalent. The data exists in exactly one channel - pixels - which no agent and no screen reader can read. Seen on `/products/analytics/`.

*The fix:* Publish the underlying data beside the image: a table, a definition list, or descriptive prose in the same template component.

**Data-bearing image with no text equivalent** (WCAG 2.1 1.1.1)

An image whose name or description suggests it carries data (a chart, a price list, a menu, a timetable) has no adjacent text equivalent. The data exists in exactly one channel - pixels - which no agent and no screen reader can read. Seen on `/products/analytics/`.

*The fix:* Publish the underlying data beside the image: a table, a definition list, or descriptive prose in the same template component.

**Link whose accessible name carries no destination meaning** (WCAG 2.1 2.4.4)

The link's accessible name is a generic phrase or a bare URL. In the accessibility tree, and in any links-only projection of the page, every such link reads identically: the destination is unknowable without the surrounding layout, which machines and screen reader users do not have. Seen on `/products/ecosystem/`.

*The fix:* Name the destination in the link text itself in the template ("View pricing plans" rather than "click here").

**Data-bearing image with no text equivalent** (WCAG 2.1 1.1.1)

An image whose name or description suggests it carries data (a chart, a price list, a menu, a timetable) has no adjacent text equivalent. The data exists in exactly one channel - pixels - which no agent and no screen reader can read. Seen on `/products/platform/`.

*The fix:* Publish the underlying data beside the image: a table, a definition list, or descriptive prose in the same template component.

The full set, one row per pattern with every affected page counted, is recorded in the `www-contentful-com-accessibility-tree.csv` sidecar alongside this report.

**Inspect your own tree.** Right-click any page, choose Inspect, open the Elements panel, click the `>>` icon, choose Accessibility, and toggle "Show Accessibility Tree". What you see there is what tree consumers receive: if a control or a heading is missing from that view, it is missing for them. Chrome DevTools' AI Assistance panel also accepts "Review accessibility" against any element this report flags.

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds for a returning visitor may be served from a warm CDN edge; the same page on a genuine first visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section re-measures the slowest page from the crawl and a median-load control across several fresh visits, then compares those against the first-visit response. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what a repeat visitor experiences). The overall verdict for each page is the worse of the two, so a fast returning-visitor median cannot paper over a slow first-visit response.

**Method:** Each URL is re-measured across several fresh visits and scored on the median of those measurements. For each page we compare both the crawler's cold-cache baseline and the median of three fresh GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.contentful.com/sitemap`. A first-time visitor sees the cold-cache cost: the crawler recorded 4248 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three fresh re-probes that followed returned 1160ms, 604ms, 864ms, giving a returning-visitor median of **864 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://www.contentful.com/products/ecosystem/`. A first-time visitor sees the cold-cache cost: the crawler recorded 3456 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three fresh re-probes that followed returned 763ms, 694ms, 681ms, giving a returning-visitor median of **694 ms**. **Returning-visitor verdict: Healthy**.

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

The robots.txt declares no disallow paths, so every path is open to crawlers and machines. It announces the sitemap, so a machine reading the file can find the URL index directly.

### sitemap.xml

**Table 11**

*sitemap.xml*

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 3391 entries | Present |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | No | Missing (Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents still use it to gauge re-crawl cadence) |
| `<priority>` | No | Absent (Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents can still use it as a relative-importance hint) |

**Sitemap grade:** Partial

The sitemap declares 3391 URLs and grades Partial. Lastmod dates vary across entries, which tells machines which pages changed and when. The sitemap omits changefreq and priority. Google dropped both as ranking signals in 2017, but non-Google crawlers and AI agents still read changefreq as a re-crawl cadence hint and priority as a relative-importance signal, so adding them is a low-effort way to broaden machine compatibility.

This was a full crawl: the audit reached every page it could discover, and 45 of them are absent from the sitemap (which lists 3391). The full set is recorded in the `www-contentful-com-pages-not-in-sitemap.csv` sidecar alongside this report. Adding them to the sitemap lets search engines and machines discover all content.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

No llms.txt found. llms.txt is no longer a new or unusual idea: Chrome's Lighthouse now checks for it by default ([Lighthouse llms.txt audit](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt)). A file at the site root that lists the pages and feeds worth reading gives machine readers a curated entry point, alongside robots.txt and sitemap.xml.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt on the audited host. Where llms.txt is the curated index, llms-full.txt concatenates the full content of every page into a single file: a convention made popular by Fern, Mintlify, and GitBook. Agents that consume it ingest the corpus in one fetch rather than crawling page-by-page, cutting token consumption by an order of magnitude. We recommend adding an llms-full.txt alongside llms.txt; the build can run from the same sitemap-driven generator that produces llms.txt and adds the page bodies inline.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

1 additional registered `/.well-known/` path were probed; none returned an identifiable discovery file. The per-path breakdown is preserved alongside this report as a sidecar JSON.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

**Table 12**

*Structured Data Inventory*

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

**Table 13**

*SDQ Score Breakdown*

| Component                       | Earned | Max | Meaning                                                       |
|---------------------------------|--------|-----|---------------------------------------------------------------|
| Presence | 10 | 10 | schema.org JSON-LD is present on the page |
| Required property coverage | 25 | 25 | Every entity carries the properties its type requires |
| Recommended property coverage | 8 | 15 | Entities carry the properties their type recommends |
| Entity richness | 5 | 15 | Entities are described with enough properties to be useful |
| Cross-entity references | 0 | 15 | Entities reference each other (nested types and @id links) |
| Linked-data signals | 3 | 10 | Linked-data properties present (sameAs, mainEntityOfPage, isPartOf, about, mentions) |
| Vocabulary validity | 10 | 10 | Every @type is a valid Schema.org type |
| **Total** | **61** | **100** | |

---

## Structured Data Findings

We identified 63 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`www-contentful-com-structured-data-findings.csv`](www-contentful-com-structured-data-findings.csv). The 63 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

**Table 14**

*Structured Data Findings*

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

**Table 15**

*Structured Data Findings*

| Severity | Meaning |
|----------|---------|
| `required` | Schema.org spec requires this property for the type. Missing values break validation. |
| `recommended` | Schema.org strongly recommends this property. Missing values reduce richness. |
| `vocabulary` | The `@type` value (the JSON-LD class name an entity declares itself as) is not in the Schema.org vocabulary: typically a typo or an invented type. |

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is: a Product, an Article, an Organisation: but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside any single page. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

**What this section checks.** Each signal below is derived deterministically from served HTML and JSON-LD on disk: no inference, no model judgement. Five structural signals fire per page: (i) self-promotional listicle (a ranked list is advertised whose first entry resolves to the publisher's own host), (ii) year-swap refresh (the title year is two or more years ahead of `dateModified`), (iii) first-party superlative (claims like "best", "leading", "world-class" without an external reference), (iv) third-party citation count (outbound links to hosts other than the audited site), and (v) provenance metadata presence (`author`, `dateModified`, `publisher`). Pages whose body content runs over 400 words while emitting zero third-party citations carry no verifiable references and contribute to the blocker list. When the audited set is clean we omit the per-page table altogether and let the verdict line below carry the result.

**The list format is not the problem.** Ranked, comparative lists are among the most-cited content shapes in AI answers, so we never flag a page for being a list. What we flag is the self-ranking variant: a "best N" page that puts its own brand at position one. It repeats a familiar move - the FAQ markup Google deprecated for gaming while AI systems kept reading it. The gamed surface gets demoted; the format stays valuable; the gap between them is provenance. The demotion is not an SEO cost you can trade for AI reach: AI answer engines retrieve through search, Google's own among them, so a page the search engine demotes is a page the AI does not surface at the top. A self-ranking list reads as a rigged result to anything checking who made the ranking, and it forfeits the visibility it was trying to manufacture.

### Templated clusters

No templated clusters detected at the audited scale. Pages in the audited set either carry product entities or have enough structural and textual variation to clear the stamp-out threshold.

### Provenance verdict

No provenance-gap blockers detected on the audited set. Pages clear the structural primitives we measure here.

_No blockers._

Any page contributing to a blocker above is capped at **Discoverable** readiness in the MX Readiness Level table below, regardless of its other scores. Citation readiness requires a verifiable claim to cite.

---

## Marker Reachability

**Table 16**

*Marker Reachability*

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

All detected markers are present in the served HTML on the pages we audited. Server-side and browser-based agents see the same signals on the sampled pages.

---

## Schema Maturity Level

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work. Maturity is a structural classification: it depends on what the markup carries (typed blocks, required properties, cross-references, external identifiers), not on the SDQ score the markup happens to earn. A page can sit at Level 1 with a high SDQ score and at Level 3 with a moderate one. Score and level are reported separately.

**Table 17**

*Schema Maturity Level*

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

The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pages individually sit higher. That is deliberate. An agent does not choose which page it lands on, so the level reflects what the weakest landing point guarantees.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. A break at any stage propagates to all subsequent stages.

**Table 18**

*5-Stage MX Journey*

| Stage | Name              | Status      | Score | Key Metric                                        |
|-------|-------------------|-------------|-------|---------------------------------------------------|
| 1 | Discovery | Partial | 78 | Crawlable with semantic HTML |
| 2 | Citation | Fail | 33 | Schema.org: WebSite, Organisation, WebSite (100% required properties) |
| 3 | Search & Compare | Fail | 20 | Pricing detected but no commerce schema |
| 4 | Price Understanding | Partial | 33 | Pricing visible but no Offer schema for agent parsing |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

*Each stage carries its own pass threshold, so Status and Score are not comparable across rows: a score that passes one stage can fall short on another with a stricter bar.*

Stage 2 (Citation) is the weakest link in the agent journey. Because each stage depends on the previous one, this gap affects all downstream stages. Addressing Schema.org: WebSite, Organisation, WebSite (100% required properties) is the highest-priority improvement.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, condensing by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Fail · 12/12
  - *Means:* 12 page(s) flag for truncation risk; 12 of them exceed the 250 KB hard ceiling, the rest place main content too far into the document. Agents with limited fetch windows may stop reading before reaching the main content.
  - *Data:* Largest page: 3267 KB ([the home page](https://www.contentful.com/)). Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See www-contentful-com-pipeline-truncation-risk-pages.csv (12 pages).
- **SPA Shell** - Pass · 12/12
  - *Means:* Served HTML matches rendered HTML, no JavaScript is required for content. Server-side agents see the same content a browser does.
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

We found that every audited page carries a truncation risk, which can cause machines to miss part of the content when they stop fetching after a safe offset. This limits what search crawlers and LLMs can understand about your pages. Fixing the truncation risk-by reducing page size or moving key content earlier in the markup-will give machines full access and has the biggest impact on resilience.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check set, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

**Table 19**

*Div Soup: naked containers without semantic mapping*

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Served HTML | 34/100 (high) | 209 bare divs (52% of containers, depth 7) | `div` (206), `div.grid-helper-col.col-span-1` (132), `div.tooltip_root__EulUk` (95), `div.button_markup_root__sACGr.button_markup_secondary__F_qxS` (61), `div.round-icon.round_icon_container__Jmlwp` (57) |
| Rendered HTML | 34/100 (high) | 290 bare divs (51% of containers, depth 7) | `div` (242), `div.grid-helper-col.col-span-1` (144), `div.tooltip_root__EulUk` (95), `div.button_markup_root__sACGr.button_markup_secondary__F_qxS` (68), `div.round-icon.round_icon_container__Jmlwp` (57) |

**Worst page (served):** [/products/personalization/ai-suggestions/](https://www.contentful.com/products/personalization/ai-suggestions/)\
**Worst page (rendered):** [/products/personalization/](https://www.contentful.com/products/personalization/)

We found that across the audited set, the served surface shows the highest bare-div ratio-209 of 405 elements (52 %) on the worst-page URL https://www.contentful.com/products/personalization/ai-suggestions/-meaning machines lose structural context and must fall back to positional inference to determine meaning.  
We determined that the soup is structural, with deep chains reaching seven levels; this pattern points to a drag-and-drop builder or untyped component framework that injects many nested divs during rendering.  
The cheapest first move we recommend is to wrap the obvious landmarks (header, nav, main, footer, aside) and assign meaningful class names to remaining elements so the bare-div ratio drops without restructuring the layout.

---

## Security Headers

**Table 20**

*Security Headers*

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

**Table 21**

*Cross-Page Consistency*

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

Some pages in the 12-page sample are missing metadata patterns that others carry. Machines hitting different pages get different quality data. The Missing Pages column shows where to focus on the sampled pages.

## Content Tailoring and A/B Testing: Machine Visitor Impact

Ninetailed, Google Optimise, Optimizely, Visual Website Optimizer (VWO), Kameleoon, Dynamic Yield and Unbounce Smart Traffic is present on https://www.contentful.com/products/ai-actions/, https://www.contentful.com/products/studio/, https://www.contentful.com/contact/sales/, https://www.contentful.com/products/platform/, https://www.contentful.com/products/personalization/ and seven additional pages, but every visit returned the same content during this audit.

This is a latent risk to note. Machines arrive with no cookie or session, so if the layer is later configured to act on first-touch or uncohorted traffic, machine visitors could start receiving variant content. The current configuration served machines consistent content throughout the audit.

No action is needed today. If you later configure the personalisation layer to act on uncohorted or first-touch traffic, add bypass rules so machine visitors (ClaudeBot, GPTBot, CCBot and similar) keep receiving canonical content. Keep key pages available as a stable, non-personalised variant for machine User-Agents, so a future configuration change cannot silently start feeding crawlers inconsistent content.

---

## Content Consistency

Content consistency examines how metadata such as titles, descriptions, canonical URLs, and brand identifiers align across pages. Across the audited set we evaluated these elements to ensure that machines can reliably interpret page identity and relevance. We also checked for duplicate or conflicting values that could confuse crawlers.  

We found that the audited set shows consistent metadata patterns across pages, with no brand-name or canonical-URL divergence flagged by the consistency check.

**Table 22**

*Content Consistency*

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Brand-name parity | Pass | Brand name appears consistently across all 12 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 12-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

We found 141 identical inline fragment(s) repeated across multiple pages, totalling 1889 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

**Table 23**

*Inline Code Duplicates*

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

We observed that accessibility legislation across major markets converges on ISO 14289-1 (PDF/UA) as the technical baseline, with the European Accessibility Act serving as a precisely codified example of this global alignment.  
We also found that an untagged PDF is invisible to machines; without a proper structure tree, search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from scanned or image-based PDFs.

We linked no PDFs from the 12-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

PDFs are part of the machine-readable estate but sit outside this HTML audit's scope. A dedicated PDF review checks each public document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified) and returns a per-document verdict.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 279 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Semantic Structure improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

**Table 24**

*What's Next*

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4, P5, P6, P7, P8 (Compliance Risk) | Priority 1, 2, 3, 4, 5, 6, 7, 8 resolved: WCAG 2.1 AA accessibility compliance restored |
| Full Implementation | P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14 (P1-P14) | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | The full machine-readable estate, beyond the web pages |

This audit is a starting point. The outcome we work toward is a site any machine can read, trust, and act on, and a dated, attested record you can show to a regulator, a partner, or an acquirer on request. Reaching it (structured data, discovery files, accessibility, governance metadata, and re-audit on a cadence you choose) is available as a managed service. To take any of it further, contact CogNovaMX Ltd at <info@cognovamx.com>.

---

## Summary of Findings

Our audit of https://www.contentful.com shows AI Suitability at an exceptional 99/100, indicating that machines can quickly understand and use the content. Across the audited set, Discovery Readiness (39/100) and Structured Data (61/100) are the lowest-scoring dimensions, presenting clear opportunities to improve machine discoverability and data richness. We invite you to address these gaps to enhance your digital presence for both human visitors and machines.

### Audit Scores

**Table 25**

*Audit Scores*

| Dimension | Score | Band |
|-----------|-------|------|
| Served-HTML Structure | 99/100 | Excellent |
| Accessibility | 77/100 | Excellent |
| SEO (all pages) | 94/100 | Excellent |
| SEO (content pages) | 98/100 | Excellent |
| MX Stack Completeness | 66/100 | Good |
| Structured Data Quality | 61/100 | Good |
| Commerce Visibility | 0/100 | Needs Improvement |
| Discovery Readiness | 39/100 | Could Be Better |
| Heading Quality | 55/100 | Good |
| Agent Readability | 54/100 | Good |
| Pipeline Survivability | 79/100 | Excellent |
| Cross-Page Consistency | 56% | Good |

---

<!-- STATIC-SEED: working-with-us -->

---

## Appendix A: Pages Audited

- **`/sitemap (nav)`**: SEO 69 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/ (nav)`**: SEO 100 · A11y 75 · Back 95 · Served 90 · Rendered 89
- **`/pricing/ (nav)`**: SEO 96 · A11y 65 · Back 95 · Served 94 · Rendered 98
- **`/contact/sales/ (nav)`**: SEO 85 · A11y 75 · Back 85 · Served 100 · Rendered 91
- **`/products/platform/`**: SEO 98 · A11y 80 · Back 95 · Served 100 · Rendered 100
- **`/products/personalization/`**: SEO 98 · A11y 80 · Back 95 · Served 100 · Rendered 100
- **`/products/ai-actions/`**: SEO 100 · A11y 80 · Back 95 · Served 100 · Rendered 100
- **`/products/analytics/`**: SEO 100 · A11y 80 · Back 95 · Served 100 · Rendered 100
- **`/products/studio/`**: SEO 98 · A11y 80 · Back 95 · Served 100 · Rendered 100
- **`/products/ecosystem/`**: SEO 96 · A11y 80 · Back 95 · Served 100 · Rendered 100
- **`/marketplace/ (nav)`**: SEO 94 · A11y 70 · Back 95 · Served 100 · Rendered 100
- **`/products/personalization/ai-suggestions/`**: SEO 98 · A11y 80 · Back 95 · Served 100 · Rendered 100

Pages marked (nav) are navigational: they route visitors to content rather than containing it, and are excluded from the SEO content average. Content-pages SEO average: 98/100.

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. The total is dominated by the HTML sitemap page (`/sitemap`), which lists 3,388 same-host URLs across the full site. The remaining 11 pages average 66 links each -- normal for a site with a large navigation menu and footer. External links are not tracked; this inventory covers same-host `<a href>` links only. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

Per page, internal links range from 9 to 81, averaging 66 across 11 pages. That is denser than typical (benchmark median 20 per page). One page (`/sitemap`) is a link hub and is excluded from these per-page figures.

**Table 26**

*Appendix B: Link Inventory*

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 4119 |
| -- `/sitemap` page only | 3388 |
| -- remaining 11 pages | 731 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |

---

## Appendix C: Image Efficiency

We reviewed 890 images across the audited set: 1 WebP, 598 SVG, 264 PNG, 15 JPEG and 12 in other or unidentified formats. 868 of 890 (97.5%) carry alt text, leaving 22 without it. Each missing alt attribute is a place where a screen-reader user or a machine reading the page gets no description of what the image shows.

On loading strategy, 840 images are marked `loading="lazy"` and 14 `loading="eager"`, while 36 carry no loading attribute at all. No attribute is not the same as eager: the browser decides for itself when to fetch, which removes the explicit control that lazy and eager give you. Setting an explicit attribute on those images makes the fetch behaviour predictable for browsers and machines alike.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: **Netlify** (high confidence - multiple fingerprint signals). The main audit uses Netlify-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** **Next.js** (low confidence) - JS framework; **Gatsby** (low confidence) - JS framework; **Svelte** (low confidence) - JS framework; **Tailwind CSS** (medium confidence) - CSS framework; **Netlify** (low confidence) - CDN / delivery. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from the audited pages. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 12 pages examined | Platform: Netlify | Frameworks: **Next.js** (low confidence) - JS framework; **Gatsby** (low confidence) - JS framework; **Svelte** (low confidence) - JS framework; **Tailwind CSS** (medium confidence) - CSS framework; **Netlify** (low confidence) - CDN / delivery | Analysis method: Hybrid (automated + manual verification) | robots.txt: Present (3 directives)

**Measurement completeness:** Every probe completed during this audit, with no network errors or timeouts. The findings below rest on a full data collection.

**What comes next.** This report is the foundation, not the finish line. Implementing the recommendations requires the technical context that produced them; we carry that context forward. Our implementation engagements begin where this audit ends. Speak to us about next steps.

---

\clearpage

## Further Reading

The reference material cited in this report. Click the link on screen or scan the QR code on paper: both encode the same URL.

**Table 27**

*Further Reading*

| Scan | Link and description |
| :----: | -------------------- |
| ![Appendix R QR](assets/qr/appendix-r.png){ width=15mm } | **[Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)**: the methodology behind the Pipeline Survivability measurements used in this report.\ <https://mx.allabout.network/books/appendices/appendix-r.html> |
| ![Appendix S QR](assets/qr/appendix-s.png){ width=15mm } | **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**: the full set of reading-resilience checks scored in the Agent Reading Pipeline section.\ <https://mx.allabout.network/books/appendices/appendix-s.html> |
| ![Appendix M QR](assets/qr/appendix-m.png){ width=15mm } | **[Appendix M: Index of Metadata](https://mx.allabout.network/books/appendices/appendix-m.html)**: the field dictionary governing the MX governance tags referenced in this report.\ <https://mx.allabout.network/books/appendices/appendix-m.html> |
| ![llms.txt guide QR](assets/qr/llms-txt-guide.png){ width=15mm } | **[Why llms.txt Probably Isn't Working](https://mx.allabout.network/blog/llms-txt-guide.html)**: the two structural problems most llms.txt implementations have (MIME type and sitemap registration).\ <https://mx.allabout.network/blog/llms-txt-guide.html> |

---

\clearpage

## This Report's Own Evidence Chain

This report carries its own provenance. Every step that produced it is recorded in two adjacent JSON sidecars (AI and deterministic), and the full evidence chain travels inside the PDF's XMP metadata: extract it with `exiftool -b -XMP-mx:ProvenanceAiPayload www-contentful-com-report.pdf | jq .`. The PDF is a tagged ISO 14289-1 (PDF/UA-1) Level 2 document with a complete reading-order structure tree. The standards this audit measures your site against are the standards the deliverable itself meets.

\clearpage

## Practice What We Preach: This Audit's Own Evidence Chain

We hold this audit deliverable to the same MX standards we apply to your site. Every consequential step that produced this report (LLM-driven prose passes, deterministic gate verdicts, multi-agent attribution probes, repair iterations) is recorded in two adjacent JSON sidecars next to this PDF.

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `*.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `*.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload mx-allabout-network-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the organisation distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it to ourselves.

---

**Date:** 12 June 2026\
(c) 2026 CogNovaMX Ltd. All rights reserved.

*This is a sample run over a subset of the site. CogNovaMX Ltd can scope a full-estate audit.*

