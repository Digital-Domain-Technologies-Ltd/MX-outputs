---
title: "Www Paribu: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-06-16"
modified: "2026-06-16"
client: "Www Paribu"
clientSlug: "www-paribu-com"
clientUrl: "https://www.paribu.com"
reportId: "www-paribu-com-WEB-AUDIT-20260616"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-06-16"
auditCommand: "node scripts/audit-pipeline.js https://www.paribu.com --pages 10 --date 2026-06-16"
description: "Executive audit report reviewing accessibility, performance, SEO, structured data, and AI agent compatibility for Www Paribu"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 55
accessibilityScore: 100
seoScore: 93
llmSuitabilityScore: 85
totalIssues: 0
pagesAudited: 11
version: "1.0"
pipelineVersion: "1.1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-06-16/www.paribu.com/www-paribu-com-report.md
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Www Paribu covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Www Paribu", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  # The single cog that manages this pipeline artefact, so a reader never
  # has to infer the steward (scripts/lib/managed-by.cjs is the resolver).
  x-mx-managedBy: mx-audit.cog.md
  runbook: "Executive audit report for Www Paribu. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in the top-level auditCommand field. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-16/www.paribu.com/www-paribu-com-report.md', which validates the report then renders it through scripts/bin/mx.pdf.sh."
  generate:
    command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-16/www.paribu.com/www-paribu-com-report.md"
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/www.paribu.com/result-copy/www-paribu-com-report.pdf"
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

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 16 June 2026\
**Report ID:** www-paribu-com-WEB-AUDIT-20260616

---

\clearpage

## About This Report

We audited 11 pages across www.paribu.com's site using the Web Audit Suite. We review each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image efficiency, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before completing this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent patterns emerge, we update what we look for.

**How we build it.** We use scripted SOPs running deterministic checks rather than inference. The crawl, the served-versus-rendered comparison, the structured-data extraction, the accessibility passes, the discovery-file probes, the platform fingerprinting and the per-section scoring all run as scripts producing byte-identical outputs on the same input. A small number of stages run a judgement pass over the resulting report; that is the only inference layer. Those judgement passes can run against a local model, so the whole audit runs inside your own network with nothing leaving it: relevant where content is regulated or privacy-sensitive.

Our scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. MX addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** This report looks at the web estate: every page served over HTTP, examined for metadata, structured data, accessibility, and machine readability. MX runs deeper, covering every document type a business publishes (PDFs, data feeds, API responses, structured documents) and the machines that read them. The web estate is the foundation; the rest builds on it.

**About sample scope.** Findings throughout this report describe what we observed on the 11 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. The Discovery Files section below records its presence, transport type, and sitemap registration, and covers the two structural problems (content type and discovery) that limit most implementations.

---

## Executive Summary

**Table 1**

*Executive Summary*

| | Score | |
|:---|---:|:---|
| Performance | **55**/100 | `##########--------` |
| Accessibility | **100**/100 | `##################` |
| SEO | **93**/100 | `#################-` |
| Served-HTML Structure | **85**/100 | `###############---` |
| MX Stack Completeness | **66**/100 | `############------` |
| Agent Readability | **77**/100 | `##############----` |
| Pipeline Survivability | **83**/100 | `###############---` |

*The three machine metrics measure different things. **Served-HTML Structure** is the semantic markup an agent reads before JavaScript runs; **Agent Readability** is how easily the content can be quoted once reached; **Pipeline Survivability** is whether a page survives an agent's fetch and ingest. A site can score low on one and high on another.*

Agent Readability was adjusted down by 8 points for site-wide gaps a machine cannot work around:

- **Bare-div nesting (div soup) across most pages** (-8): 11 of 12 pages are heavy with bare-div nesting

Across the audited set, your brand delivers a strong human experience. SEO foundations are solid with an excellent 93/100 score, ensuring visitors find and engage with content quickly. The clean layout and clear navigation further support user journeys.

The headline opportunity is to elevate machine comprehension by embedding MX governance metadata. Across the audited set, no MX fields were detected, limiting how machines can interpret context. Adding full MX fields-mx:status, mx:contentType, mx:audience, canonicalUri, provenance markers-and raising MSC above 60 and Discovery Readiness above 40 will move your content from Discoverable to Governed.

\clearpage

## Balanced Scorecard

### Human Experience

We find that the audited pages deliver a strong experience for human visitors, with excellent performance, accessibility and SEO scores.

**Table 2**

*Human Experience*

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Good | B | - |
| Performance | Good | B | A (median) |
| Accessibility (WCAG) | Excellent | A | A (median) |
| Trust and Credibility | Excellent | A | - |

*The UX / Navigation grade derives from measured navigation signals: heading-outline quality, single-H1 consistency, and skip-link consistency. The Trust and Credibility grade derives from measured transport and integrity signals: HTTPS coverage, security-header coverage, canonical-URL consistency, and correct error-page status.*

### Machine Experience

We assessed machine experience across the audited set, finding Discovery Readiness at 36/100, Structured Data Quality at 58/100, MX Stack Completeness at 66/100 and Pipeline Survivability at 83/100, which together show that machines can discover and parse these pages but currently lack governance context for accurate comprehension (MX Readiness Level 1).

**Table 3**

*Machine Experience*

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 36/100 | Could Be Better | C | C (median) |
| Structured Data Quality | 58/100 | Good | B | B (median) |
| MX Stack Completeness | 66/100 | Good | B | B (median) |
| Pipeline Survivability | 83/100 | Excellent | A | A (median) |

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

**Evidence:** MX Stack Completeness 66/100 | Structured Data Quality 58/100 | Discovery Readiness 36/100 | Consistency 65%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so machines have the structured context they need for accurate comprehension. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, we find a strong foundations with an excellent SEO score of 93/100, consistent accessibility at 100/100, and robust security headers present on most pages. These strengths provide the groundwork for further enhancements in structured data quality and consistency.

**Table 5**

*What's Working Well*

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Good | Good  -  2009ms average load time |
| SEO (content pages) | 93 | Excellent  -  titles, meta descriptions, canonical URLs in place |
| Security | 5/5 | 5/5 headers present; 8 of 12 URLs carry all five |
| Structured Data | 58 | Good  -  JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 91 | Excellent  -  single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 65% | 65%  -  same metadata patterns across every page |
| Agent access | 8/8 | every tested agent receives HTTP 200 |

**Positive patterns observed:**

- Accessibility is compliant across the audited set: Pa11y reports 100/100 with zero WCAG 2.1 AA errors on 11 pages.
- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.

---

## Findings

### At a Glance

We identified 6 finding(s) on the audited set, ordered by regulatory exposure first and then by priority within each category.

**Table 6**

*At a Glance*

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Image Alt-text Coverage | Compliance Risk | High | Low | screen-reader users and machines miss the content of those images |
| 2 | Main Landmark Absent | Compliance Risk | Medium | Low | agents and assistive technology may not locate the primary content |
| 3 | Semantic Structure (Naked Containers) 21/100 | Compliance Risk | Medium | Medium | machines lose structural context and infer page regions by position |
| 4 | Security headers absent: CSP, X-Frame-Options | Cross-cutting | Medium | Low | Missing security headers increase exposure to content injection and clickjacking |
| 5 | Structured Data Property Gaps | Machine Readability Opportunity | Medium | Medium | machines may extract these entities incompletely or skip them |
| 6 | Schema.org coverage is partial: Decoration (SDQ 58/100) | Machine Readability Opportunity | Medium | Medium | Agents can partially parse structured facts but key properties may be missing |

---

**Priority 1: Image Alt-text Coverage**

**Bucket:** Compliance Risk

**Finding:** 9 of 585 images (2%) on the audited set carry no alt text, so their content is unavailable to assistive technology and to machines reading the page.

**What to change and why:**

- Add descriptive alt text to the informative images that lack it and empty alt to the decorative ones. This satisfies WCAG 1.1.1 across the image set.
- Generating alt text at upload time, or from the CMS media library, keeps coverage high as new images are added.

**Effort:** Low

---

**Priority 2: Main Landmark Absent**

**Bucket:** Compliance Risk

**Finding:** 3 audited page(s) have no `<main>` landmark, so assistive technology and server-side agents cannot reliably locate the primary content among the navigation and chrome.

**What to change and why:**

- Wrap the primary content of each page in a single `<main>` landmark so assistive technology can jump to it and server-side agents can locate the content among the navigation and chrome.
- One `<main>` per page; everything that is not the page's unique content stays outside it.

**Effort:** Low

---

**Priority 3: Semantic Structure (Naked Containers) 21/100**

**Bucket:** Compliance Risk

**Finding:** Rendered semantic-structure score 21/100: containers carry no role, ARIA landmark, or descriptive class, so machines fall back on positional inference to determine meaning. The worst page ([/auth/sign-up](https://www.paribu.com/auth/sign-up)) carries 22 bare divs of 34.

**What to change and why:**

- Replace the obvious landmark containers (header, nav, main, footer, aside) with their semantic elements and give the remaining containers meaningful class names, so machines stop falling back on positional inference to determine what each region is.
- Start with the page that scored worst; wrapping the landmarks alone usually drops the bare-div ratio sharply without restructuring the layout.

**Effort:** Medium

---

**Priority 4: Security headers absent: CSP, X-Frame-Options**

**Bucket:** Cross-cutting

**Finding:** Security headers absent: CSP, X-Frame-Options (across the audited set). Missing security headers increase exposure to content injection and clickjacking

**What to change and why:**

- Add the missing response headers at the server or CDN edge; each is a one-line directive that applies across the audited set once configured.
- Set them once in the edge or server configuration rather than per page so coverage stays complete as new pages ship.

**Effort:** Low

---

**Priority 5: Structured Data Property Gaps**

**Bucket:** Machine Readability Opportunity

**Finding:** 34 Schema.org property gap(s) on the audited set across WebSite, openGraph, canonical, BreadcrumbList: required or recommended properties are missing, so machines extract these entities less reliably.

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 6: Schema.org coverage is partial: Decoration (SDQ 58/100)**

**Bucket:** Machine Readability Opportunity

**Finding:** Schema.org coverage is partial: Decoration (SDQ 58/100) (Homepage). Agents can partially parse structured facts but key properties may be missing

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **Breadcrumb**: Add breadcrumb JSON-LD to deep pages that currently rely only on URL path; this gives machines a clear page hierarchy for navigation context.  
- **PotentialAction**: Attach a `potentialAction` (e.g., `ContactPoint`) to the Organisation entity; this exposes contact methods to agents and improves discoverability of support channels.  
- **Content-Signal directives**: Add Content-Signal directives ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for machines.

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
| URL probed | https://www.paribu.com |
| HTTP status | 200 |
| Content-Type returned | text/html;charset=utf-8 |
| Markdown served | No  -  server returned HTML regardless of Accept header |

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
| Custom error page | Yes, custom error page (not a bare server default) |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | Yes, links back to same-site content present |
| Internal navigation links | 6 links to same-site pages |
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
| Pages checked | 8 |

Across the 8 pages we checked, 25 distinct issue patterns reduce what reaches the tree. 2 of these repeat across pages with the same structure, which marks them as template-level: one change in the shared component clears the finding everywhere it appears.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Repeats on 5 of 8 pages with the same structure (a template-level pattern).

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Interactive element nested inside another interactive element** (WCAG 2.1 4.1.2)

A button or link sits inside another button or link. The accessibility tree cannot represent one control inside another: readers expose one, the other, or an unusable merge, and keyboard focus order becomes unpredictable. Seen on 2 pages, for example `/`.

*The fix:* Restructure the template component so each action is its own sibling control.

**Interactive element nested inside another interactive element** (WCAG 2.1 4.1.2)

A button or link sits inside another button or link. The accessibility tree cannot represent one control inside another: readers expose one, the other, or an unusable merge, and keyboard focus order becomes unpredictable. Seen on 2 pages, for example `/`.

*The fix:* Restructure the template component so each action is its own sibling control.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on 2 pages, for example `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on 2 pages, for example `/fiyat`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/auth/sign-up`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/auth/sign-up`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/bitcoin-pizza-gunu`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/fiyat-tahmini`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/fiyat-tahmini`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/markets`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/markets`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/markets`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/markets`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Repeated landmarks with no distinguishing labels** (WCAG 2.1 1.3.6)

The page carries more than one navigation (or complementary) landmark with no aria-label to tell them apart. In the tree they read as "navigation, navigation": a consumer cannot tell the site menu from the footer links or the breadcrumb. Repeats on 5 of 8 pages with the same structure (a template-level pattern).

*The fix:* Give each repeated landmark a short aria-label in the template ("Primary", "Footer", "Breadcrumb").

**No main landmark on the page** (WCAG 2.1 1.3.1)

The page declares no main landmark. Landmark navigation is how tree consumers skip repeated chrome and land on the content; without it, every visit starts from the top of everything. Seen on `/`.

*The fix:* Wrap the primary content region in a main element in the base template - one change covers every page that extends it.

**Form field labelled only by its placeholder** (WCAG 2.1 3.3.2)

An input relies on placeholder text as its only label. The placeholder vanishes the moment the visitor types, is not reliably exposed as the accessible name, and disappears entirely in text projections of the page. Seen on `/auth/sign-up`.

*The fix:* Add a real label (visible, or aria-label where the design demands it) in the form component; keep the placeholder as a hint, not the name.

**Form field labelled only by its placeholder** (WCAG 2.1 3.3.2)

An input relies on placeholder text as its only label. The placeholder vanishes the moment the visitor types, is not reliably exposed as the accessible name, and disappears entirely in text projections of the page. Seen on `/converter`.

*The fix:* Add a real label (visible, or aria-label where the design demands it) in the form component; keep the placeholder as a hint, not the name.

**Form field labelled only by its placeholder** (WCAG 2.1 3.3.2)

An input relies on placeholder text as its only label. The placeholder vanishes the moment the visitor types, is not reliably exposed as the accessible name, and disappears entirely in text projections of the page. Seen on `/converter`.

*The fix:* Add a real label (visible, or aria-label where the design demands it) in the form component; keep the placeholder as a hint, not the name.

**Form field labelled only by its placeholder** (WCAG 2.1 3.3.2)

An input relies on placeholder text as its only label. The placeholder vanishes the moment the visitor types, is not reliably exposed as the accessible name, and disappears entirely in text projections of the page. Seen on `/converter`.

*The fix:* Add a real label (visible, or aria-label where the design demands it) in the form component; keep the placeholder as a hint, not the name.

**Data-bearing image with no text equivalent** (WCAG 2.1 1.1.1)

An image whose name or description suggests it carries data (a chart, a price list, a menu, a timetable) has no adjacent text equivalent. The data exists in exactly one channel - pixels - which no agent and no screen reader can read. Seen on `/fiyat`.

*The fix:* Publish the underlying data beside the image: a table, a definition list, or descriptive prose in the same template component.

**Form field labelled only by its placeholder** (WCAG 2.1 3.3.2)

An input relies on placeholder text as its only label. The placeholder vanishes the moment the visitor types, is not reliably exposed as the accessible name, and disappears entirely in text projections of the page. Seen on `/fiyat-tahmini`.

*The fix:* Add a real label (visible, or aria-label where the design demands it) in the form component; keep the placeholder as a hint, not the name.

**Form field labelled only by its placeholder** (WCAG 2.1 3.3.2)

An input relies on placeholder text as its only label. The placeholder vanishes the moment the visitor types, is not reliably exposed as the accessible name, and disappears entirely in text projections of the page. Seen on `/markets`.

*The fix:* Add a real label (visible, or aria-label where the design demands it) in the form component; keep the placeholder as a hint, not the name.

**No main landmark on the page** (WCAG 2.1 1.3.1)

The page declares no main landmark. Landmark navigation is how tree consumers skip repeated chrome and land on the content; without it, every visit starts from the top of everything. Seen on `/markets`.

*The fix:* Wrap the primary content region in a main element in the base template - one change covers every page that extends it.

The full set, one row per pattern with every affected page counted, is recorded in the `www-paribu-com-accessibility-tree.csv` sidecar alongside this report.

**Inspect your own tree.** Right-click any page, choose Inspect, open the Elements panel, click the `>>` icon, choose Accessibility, and toggle "Show Accessibility Tree". What you see there is what tree consumers receive: if a control or a heading is missing from that view, it is missing for them. Chrome DevTools' AI Assistance panel also accepts "Review accessibility" against any element this report flags.

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds for a returning visitor may be served from a warm CDN edge; the same page on a genuine first visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section re-measures the slowest page from the crawl and a median-load control across several fresh visits, then compares those against the first-visit response. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what a repeat visitor experiences). The overall verdict for each page is the worse of the two, so a fast returning-visitor median cannot paper over a slow first-visit response.

**Method:** Each URL is re-measured across several fresh visits and scored on the median of those measurements. For each page we compare both the crawler's cold-cache baseline and the median of three fresh GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.paribu.com/destek`. A first-time visitor sees the cold-cache cost: the crawler recorded 2854 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three fresh re-probes that followed returned 537ms, 556ms, 665ms, giving a returning-visitor median of **556 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://www.paribu.com/bitcoin-pizza-gunu`. A first-time visitor sees the cold-cache cost: the crawler recorded 1908 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three fresh re-probes that followed returned 168ms, 151ms, 126ms, giving a returning-visitor median of **151 ms**. **Returning-visitor verdict: Healthy**.

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

The robots.txt declares 12 disallow paths; all other paths are open to crawlers and machines. It announces the sitemap, so a machine reading the file can find the URL index directly.

### sitemap.xml

**Table 11**

*sitemap.xml*

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 30268 entries | Present |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | No | Absent (Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents can still use it as a relative-importance hint) |

**Sitemap grade:** Partial

The sitemap declares 30268 URLs and grades Partial. Lastmod dates vary across entries, which tells machines which pages changed and when. The sitemap omits priority. Google dropped this as ranking signals in 2017, but non-Google crawlers and AI agents still read changefreq as a re-crawl cadence hint and priority as a relative-importance signal, so adding it is a low-effort way to broaden machine compatibility.

This was a full crawl: the audit reached every page it could discover, and 63 of them are absent from the sitemap (which lists 30268). The full set is recorded in the `www-paribu-com-pages-not-in-sitemap.csv` sidecar alongside this report. Adding them to the sitemap lets search engines and machines discover all content.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

The llms.txt carries a site description, but lacks a page inventory and a content-use policy; adding them would give machines a complete structured index. We also recommend serving llms.txt as an HTML page that wraps the plain-text content in a `<pre>` block, rather than the text/plain the llmstxt.org specification defines. Training crawlers such as Common Crawl archive only a small fraction of plain-text files but crawl HTML pages from the sitemap reliably, so the HTML wrapper gets the file into the corpus while the `<pre>` keeps it rendering as readable plain text. The technique, with the reasoning and working code, is at https://mx.allabout.network/blog/your-site-is-already-training-ai.html.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt on the audited host. Where llms.txt is the curated index, llms-full.txt concatenates the full content of every page into a single file: a convention made popular by Fern, Mintlify, and GitBook. Agents that consume it ingest the corpus in one fetch rather than crawling page-by-page, cutting token consumption by an order of magnitude. We recommend adding an llms-full.txt alongside llms.txt; the build can run from the same sitemap-driven generator that produces llms.txt and adds the page bodies inline.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

2 additional registered `/.well-known/` paths were probed; none returned an identifiable discovery file. The per-path breakdown is preserved alongside this report as a sidecar JSON.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## AI-Content Marking Readiness

This section reports whether Www Paribu's site marks AI-generated or AI-manipulated content in a machine-readable way: the form of marking the EU AI Act Article 50 expects from 2 August 2026, and the form the European Commission's voluntary Code of Practice on marking and labelling of AI-generated content (published 13 June 2026) sets out practical steps to meet. The probe inspects the homepage for four markers an agent could read without a human in the loop, and records which are present.

<p><small><strong>Note:</strong> This section describes regulatory frameworks in general terms only. Nothing here is legal advice. Requirements vary by jurisdiction, organisation type, and use case. Consult qualified legal specialists for guidance specific to your situation.</small></p>

**Table 12**

*AI-Content Marking Readiness*

| Attribute | Value |
|-----------|-------|
| Origin | https://www.paribu.com |
| Reference | EU AI Act Article 50; European Commission Code of Practice on marking and labelling of AI-generated content (13 June 2026) |
| Readiness level | Level 0 (Unmarked) |
| Markers present | 0/4 |
| Verdict | unmarked |

### Markers

**Table 13**

*Markers*

| Marker | Present | Detail | Note |
| --- | --- | --- | --- |
| MX provenanceOrigin | no |  -  | Machine-authorship declaration carried in the file (MX). |
| IPTC Digital Source Type | no |  -  | Standard machine-readable AI-content marker a detector reads. |
| C2PA Content Credentials | no |  -  | Content-authenticity manifest signal (presence recorded, not verified). |
| AI-disclosure meta | no |  -  | Generic, non-standard disclosure tag. |

### Probe findings

- No machine-readable machine-authorship marking was found on the homepage: no MX provenanceOrigin, no IPTC Digital Source Type, no C2PA signal, no AI-disclosure meta. A machine reading this page cannot tell whether its content was generated or altered by a machine. From 2 August 2026 the EU AI Act Article 50 expects AI-generated or AI-manipulated content to carry exactly such a marker.
- Marking readiness here is about whether content announces machine authorship in a machine-readable way. MX provenanceOrigin declares the authorship; a content-authenticity watermark (C2PA, SynthID) proves a file is synthetic. The two are complementary, and this probe reports readiness, not compliance with any regulation.

A boundary this section keeps honest: a machine-authorship declaration (MX `provenanceOrigin`) states who or what authored the content; a content-authenticity watermark (C2PA, SynthID) proves a file is synthetic. They are complementary, and marking readiness here is a structural signal, not a certification that this site meets any regulation.

---

## Structured Data Inventory

**Table 14**

*Structured Data Inventory*

| Schema Type  | Pages | Required % | Recommended % | Notes                                    |
|--------------|-------|------------|---------------|------------------------------------------|
| ListItem | 5 | 100% | 100% |  -  |
| Question | 3 | 100% | 100% | Answer |
| Answer | 3 | 100% | 100% |  -  |
| WebSite | 7 | 100% | 9% | Organisation |
| BreadcrumbList | 5 | 50% | 100% |  -  |
| Thing | 6 | 100% | 100% |  -  |
| Organisation | 4 | 100% | 100% | ImageObject, Person, PostalAddress |
| Person | 4 | 100% | 100% |  -  |
| PostalAddress | 4 | 100% | 100% |  -  |
| WebPage | 4 | 100% | 100% | Website, Organisation, WebSite, Thing |
| ImageObject | 2 | 100% | 100% |  -  |
| CollectionPage | 3 | 100% | 100% | WebSite, Thing, Country, BreadcrumbList |
| Country | 3 | 100% | 100% |  -  |
| ItemList | 4 | 100% | 100% |  -  |
| FAQPage | 3 | 100% | 100% |  -  |

**Structured Data Quality:** 58/100\
**Coverage:** 9 pages with JSON-LD out of 11 total (82%)\
**Unique types:** 15

Across the 11 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

**Table 15**

*SDQ Score Breakdown*

| Component                       | Earned | Max | Meaning                                                       |
|---------------------------------|--------|-----|---------------------------------------------------------------|
| Presence | 8 | 10 | schema.org JSON-LD is present on the page |
| Required property coverage | 9 | 25 | Every entity carries the properties its type requires |
| Recommended property coverage | 11 | 15 | Entities carry the properties their type recommends |
| Entity richness | 7 | 15 | Entities are described with enough properties to be useful |
| Cross-entity references | 8 | 15 | Entities reference each other (nested types and @id links) |
| Linked-data signals | 6 | 10 | Linked-data properties present (sameAs, mainEntityOfPage, isPartOf, about, mentions) |
| Vocabulary validity | 8 | 10 | Every @type is a valid Schema.org type |
| **Total** | **58** | **100** | |

---

## Structured Data Findings

We identified 34 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`www-paribu-com-structured-data-findings.csv`](www-paribu-com-structured-data-findings.csv). The 34 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

**Table 16**

*Structured Data Findings*

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| WebSite | recommended | image | 7 | 7 | Site has no logo / hero image declared in structured data |
| WebSite | recommended | datePublished | 7 | 7 | No site-level publish date for crawler context |
| WebSite | recommended | author | 7 | 7 | Site has no top-level author/owner declared |
| WebSite | recommended | publisher | 6 | 6 | Site has no top-level publisher declared |
| BreadcrumbList | required | itemListElement | 5 | 5 | BreadcrumbList has no items  -  entire entity is empty |
| openGraph | location | byteOffset | 1 | 1 | openGraph is present in served HTML but starts at byte 311210  -  past the 250 KB agent-truncation threshold. Agents with a 250 KB fetch window will not reach it. |
| canonical | location | byteOffset | 1 | 1 | canonical is present in served HTML but starts at byte 311321  -  past the 250 KB agent-truncation threshold. Agents with a 250 KB fetch window will not reach it. |

Each summary row covers multiple per-entity rows in the sidecar; the grouped view is for reading at a glance, the sidecar is for processing.

**Severity legend** (the values in the *Severity* column above):

**Table 17**

*Structured Data Findings*

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

**Table 18**

*Per-page findings*

| Page | Self-ranking | Year-swap | First-party superlative | Third-party citations | Provenance metadata |
|------|----------|-----------|--------------------------|------------------------|----------------------|
| [/kripto-trend-analizi](https://www.paribu.com/kripto-trend-analizi) |  -  |  -  |  -  | 14 third-party links | missing: author, publisher, sameAs |

The **Self-ranking** column flags a self-promotional listicle: a page whose `<title>` or `<h1>` advertises a ranked list and whose position-one entry resolves to the publisher's own host or brand. A year-swap refresh is a page whose title year is two or more years ahead of its JSON-LD `dateModified`. The citation column counts outbound links to hosts other than the audited site; pages with body content over 400 words and zero third-party citations carry no verifiable references.

### Templated clusters

No templated clusters detected at the audited scale. Pages in the audited set either carry product entities or have enough structural and textual variation to clear the stamp-out threshold.

### Provenance verdict

No provenance-gap blockers detected on the audited set. Pages clear the structural primitives we measure here.

Any page contributing to a blocker above is capped at **Discoverable** readiness in the MX Readiness Level table below, regardless of its other scores. Citation readiness requires a verifiable claim to cite.

---

## Marker Reachability

**Table 19**

*Marker Reachability*

| Marker                            | In served   | In rendered | In head | Reachable <250KB | Injected by JS |
|-----------------------------------|-------------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Yes | Yes | Yes | Yes | No |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Yes | Yes | Yes | No | No |
| Twitter Card meta tags | Yes | Yes | Yes | Yes | No |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | No | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Not present | Not present | n/a | n/a | n/a |

All detected markers are present in the served HTML on the pages we audited. Server-side and browser-based agents see the same signals on the sampled pages.

---

## Schema Maturity Level

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work. Maturity is a structural classification: it depends on what the markup carries (typed blocks, required properties, cross-references, external identifiers), not on the SDQ score the markup happens to earn. A page can sit at Level 1 with a high SDQ score and at Level 3 with a moderate one. Score and level are reported separately.

**Table 20**

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

**Table 21**

*5-Stage MX Journey*

| Stage | Name              | Status      | Score | Key Metric                                        |
|-------|-------------------|-------------|-------|---------------------------------------------------|
| 1 | Discovery | Pass | 100 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 50 | Schema.org: Organisation, ImageObject, Person (100% required properties) |
| 3 | Search & Compare | Fail | 0 | Pricing detected but no commerce schema |
| 4 | Price Understanding | Partial | 33 | Pricing visible but no Offer schema for agent parsing |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

*Each stage carries its own pass threshold, so Status and Score are not comparable across rows: a score that passes one stage can fall short on another with a stricter bar.*

Stage 3 (Search & Compare) is the weakest link in the agent journey. Because each stage depends on the previous one, this gap affects all downstream stages. Addressing Pricing detected but no commerce schema is the highest-priority improvement.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, condensing by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Fail · 6/11
  - *Means:* 6 page(s) flag for truncation risk; 6 of them exceed the 250 KB hard ceiling, the rest place main content too far into the document. Agents with limited fetch windows may stop reading before reaching the main content.
  - *Data:* Largest page: 825 KB ([/destek](https://www.paribu.com/destek)). Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See www-paribu-com-pipeline-truncation-risk-pages.csv (6 pages).
- **SPA Shell** - Pass · 11/11
  - *Means:* Served HTML matches rendered HTML, no JavaScript is required for content. Server-side agents see the same content a browser does.
  - *Data:* Max gap score: 17. 0 means served and rendered match.
- **Soft 404** - Pass · 11/11
  - *Means:* Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs.
  - *Data:* 0 soft-404 page(s) detected.
- **Boilerplate Burial** - Fail · 1/11
  - *Means:* Navigation, header, and footer boilerplate outweigh main content on some pages. Small-context agents spend their budget on scaffolding rather than prose.
  - *Data:* Highest boilerplate-to-content ratio: 0.63. Threshold: < 10 (and < 80 KB of inline head bytes). Page: https://www.paribu.com/destek
- **Tabbed Disclosure** - Pass · 11/11
  - *Means:* No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML.
  - *Data:* 4 page(s) with tab widgets.
- **Delayed Content Start** - Pass · 3/3
  - *Means:* Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily.
  - *Data:* Content starts at up to 6% of the document on some pages. Check applied to 3 of 11 audited pages; the remaining 8 pages were skipped by a size or eligibility gate.
- **Broken Code Fences** - Pass · 11/11
  - *Means:* All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples.
  - *Data:* 0 page(s) with unbalanced fenced code blocks.
- **HTTP Content Negotiation (Vary)** - Pass · 11/11
  - *Means:* The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents.
  - *Data:* 0 page(s) advertise format negotiation.
- **Cross-Host Redirect** - Fail · 2/11
  - *Means:* 0 page(s) redirect to a different host. Agents that enforce same-origin policy may not follow these chains.
  - *Data:* 0 page(s) cross origin during redirect. See www-paribu-com-pipeline-cross-host-redirect-pages.csv (2 pages).
- **Generic Headings** - Pass · 11/11
  - *Means:* Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction".
  - *Data:* Worst case: 0% generic headings.
- **Body Content Ratio** - Pass · 3/3
  - *Means:* Actual prose content averages 29% of served bytes, well above the 30% threshold. Pages are content-heavy, not overhead-heavy.
  - *Data:* Average: 29%. Threshold: 30%. Check applied to 3 of 11 audited pages; the remaining 8 pages were skipped by a size or eligibility gate.
- **Inline Tag Bloat** - Fail · 11/11
  - *Means:* 11 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches.
  - *Data:* 63 element(s) > 500 bytes. Largest single-page inline CSS block: 307668 B. Largest single-page inline JS block: 209955 B. See www-paribu-com-pipeline-inline-tag-bloat-pages.csv (11 pages).
- **Head Weight** - Pass · 3/3
  - *Means:* Head bytes are a small fraction of each page. Agents reach body content quickly.
  - *Data:* Max ratio: 0.05. Average: 0.01. Threshold: 0.50. Check applied to 3 of 11 audited pages; the remaining 8 pages were skipped by a size or eligibility gate.

**Pipeline Survivability score:** 83/100

We found that every audited page suffers from Inline Tag Bloat, a resilience issue that can cause search crawlers and LLMs to misinterpret or skip content because the excessive markup overwhelms parsing engines. Addressing this by refactoring inline styles and scripts into external resources will give machines clearer signals and improve indexing speed; it is the change with the greatest impact on pipeline survivability. Other flagged checks-Truncation Risk, Boilerplate Burial, and Cross-Host Redirect-present opportunities to further strengthen resilience, ensuring that content remains fully accessible and correctly routed for all automated agents.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check set, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

**Table 22**

*Div Soup: naked containers without semantic mapping*

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Served and rendered | 21/100 (high) | 22 bare divs (65% of containers, depth 8) | `div.flex.items-center` (302), `div.shrink-0` (288), `div.relative.shrink-0` (288), `div.market-list__col` (150), `div.footer__link-title` (90) |

**Worst page (served and rendered are identical):** [/auth/sign-up](https://www.paribu.com/auth/sign-up)

We found that across the audited set, the worst page (/auth/sign-up) has a bare-div ratio of 65 %, meaning machines lose structural context and fall back on positional inference to determine meaning.  
We see the soup is surface-wide with a moderate depth (deepest chain 8), signalling that the source pipeline relies on drag-and-drop builders or late-stage JavaScript injection rather than typed component frameworks.  
We recommend wrapping the obvious landmarks-header, nav, main, footer, aside-and giving remaining elements meaningful class names so the bare-div ratio drops without restructuring the layout.

---

## Security Headers

**Table 23**

*Security Headers*

| Header                          | Status   | Purpose                                          |
|---------------------------------|----------|--------------------------------------------------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | Yes (8/12) | Prevents XSS and injection attacks |
| X-Frame-Options | Yes (8/12) | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

Header coverage is uneven across audited responses: Content-Security-Policy (CSP) on 8/12 audited responses, X-Frame-Options on 8/12 audited responses. The header set is configured per route or per virtual host rather than uniformly at the origin or CDN edge; a single server-config change brings the missing responses in line with the strongest baseline already in place.

**Coverage:** 8 of 12 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/markets`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/destek`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/custody`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/custody/tr`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/auth/sign-up`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/kripto-trend-analizi`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/fiyat`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/fiyat-tahmini`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/converter`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/bitcoin-pizza-gunu`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/llms.txt`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes

HTTPS: 12/12 | HSTS: 12/12 | CSP: 8/12 | X-Frame-Options: 8/12 | X-Content-Type-Options: 12/12

---

## Cross-Page Consistency

**Table 24**

*Cross-Page Consistency*

| Pattern                          | Coverage | Pages missing it   |
|----------------------------------|----------|--------------------|
| Schema.org JSON-LD | 82% | 2 |
| MX governance tags | 0% | 11 |
| Open Graph tags | 91% |  -  |
| Twitter Card tags | 82% | `/destek` |
| Skip link | 0% | 10 |
| llms.txt link tag | 0% | 10 |
| Canonical URL | 91% |  -  |
| Exactly 1 H1 | 100% |  -  |
| Code examples present | 0% | 11 |
| Self-contained sections | 100% |  -  |
| Error/troubleshooting docs | 0% | 11 |
| Lighthouse heading compliance | 100% |  -  |

**Overall Consistency:** 65%

Some pages in the 11-page sample are missing metadata patterns that others carry. Machines hitting different pages get different quality data. The Missing Pages column shows where to focus on the sampled pages.

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no brand-name or canonical-URL divergence flagged by the consistency check.

**Table 25**

*Content Consistency*

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Brand-name parity | Pass | Brand name appears consistently across all 11 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 11-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

We found 24 identical inline fragment(s) repeated across multiple pages, totalling 89 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

**Table 26**

*Inline Code Duplicates*

| Type | Bytes per fragment | Appears on N pages | Preview                                                          |
|------|-------------------:|-------------------:|------------------------------------------------------------------|
| js | 534 | 5 | (function() { var hamburger = document.querySelector('.heade |
| css | 140 | 5 | .auth-only{display:none}.unauth-only{display:flex}html[data- |
| js | 98 | 5 | (function(){if(localStorage.getItem('auth-token')){document. |
| js | 1651 | 3 | window.__NUXT__={};window.__NUXT__.config={public:{VITE_APP_ |
| js | 1149 | 3 | "use strict";(()=>{const t=window,e=document.documentElement |
| js | 366 | 3 | function checkAndExpireCookies(b){var c=document.cookie.spli |
| js | 283 | 3 | (function(){try{var m=localStorage.getItem('nuxt-color-mode' |
| css | 118 | 3 | html.dark-mode{background-color:#121212;color-scheme:dark}ht |
| js | 43 | 3 | {"imports":{"#entry":"/_nuxt/kZqFn7_P.js"}} |
| js | 60390 | 2 | self.__next_f.push([1,"c:[\"$\",\"$L16\",null,{\"locale\":\" |

*Showing the top 10 of 22 duplicate fragments by occurrence count. The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `www-paribu-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src=".">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Legal frameworks worldwide now converge on ISO 14289-1 as the technical baseline for accessible PDFs, with the European Accessibility Act (Directive (EU) 2019/882) serving as a highly detailed example while other jurisdictions-Section 508 in the United States, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent rules in Australia and Canada-rely on the same standard. From a machine-readability standpoint, an untagged PDF remains invisible to machines; only a PDF that includes a proper structure tree can be parsed by search crawlers, AI systems, and automated pipelines in the same way semantic HTML is understood.

We linked no PDFs from the 11-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

PDFs are part of the machine-readable estate but sit outside this HTML audit's scope. A dedicated PDF review checks each public document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified) and returns a per-document verdict.

---

## Text Patterns

Analysis of text patterns across audited pages found content reaching Highly likely AI on the AI-tells scale (6 of 11 pages scored). Machines do not consistently cite or label AI-generated content; this observation describes what the analysis found, not a conclusion about authorship. The full per-page breakdown is in `ai-tells.json` in the results directory.

---

## Content Uniqueness

Analysis of prose content across audited pages found 7 of 11 pages reaching Low Machine Value on the content-uniqueness scale. Pages with high shared content give machines redundant information per page, reducing the value of multi-page crawls. The full per-page breakdown is in `prose-repetition.json` in the results directory.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: resolve Semantic Structure findings (currently 21/100)
2. **Review Priority 2-3 findings**: Commerce Visibility improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

**Table 27**

*What's Next*

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3 (Compliance Risk) | Priority 1, 2, 3 resolved: WCAG 2.1 AA accessibility compliance restored |
| Full Implementation | P1, P2, P3, P4, P5, P6 (P1-P6) | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | The full machine-readable estate, beyond the web pages |

This audit is a starting point. The outcome we work toward is a site any machine can read, trust, and act on, and a dated, attested record you can show to a regulator, a partner, or an acquirer on request. Reaching it (structured data, discovery files, accessibility, governance metadata, and re-audit on a cadence you choose) is available as a managed service. To take any of it further, contact CogNovaMX Ltd at <info@cognovamx.com>.

---

## Summary of Findings

We found that https://www.paribu.com delivers an excellent user experience, scoring 100/100 in Accessibility - a clear strength for both humans and machines. Across the audited set, Discovery Readiness sits at 36/100 and Structured Data at 58/100, representing key opportunities to improve machine discoverability and data richness. We invite you to address these gaps to enhance your site’s performance in search and AI-driven contexts.

### Audit Scores

**Table 28**

*Audit Scores*

| Dimension | Score | Band |
|-----------|-------|------|
| Served-HTML Structure | 85/100 | Excellent |
| Accessibility | 100/100 | Excellent |
| SEO (all pages) | 93/100 | Excellent |
| SEO (content pages) | 93/100 | Excellent |
| MX Stack Completeness | 66/100 | Good |
| Structured Data Quality | 58/100 | Good |
| Commerce Visibility | 25/100 | Needs Improvement |
| Discovery Readiness | 36/100 | Could Be Better |
| Heading Quality | 91/100 | Excellent |
| Agent Readability | 77/100 | Excellent |
| Pipeline Survivability | 83/100 | Excellent |
| Cross-Page Consistency | 65% | Good |

---

## Working With Us

This is an automated audit. The deeper work is a paid consultancy engagement, and we offer it across every report type:

- **Full-render, all-pages audience and age-awareness review.** Here we classify the entry page; in the consultancy version we render every page and read the age-assurance, consent, and age or date-of-birth data collection across the whole estate.
- **Full-site qualitative review.** We read every audited page for the content-quality patterns the automated pass samples on the first few pages.
- **PDF estate accessibility remediation.** We tag the structure, declare the conformance, and record an independent check across the document estate, aligned with Directive (EU) 2019/882.
- **On-premise, regulated-sector audit.** We run the whole pipeline against a local model on infrastructure you control, so no audited content leaves your network.
- **Implementation and remediation.** We carry the technical context that produced these findings into the work that resolves them.

To scope an engagement, speak to us about next steps.

---

## Content Clarity for Machines

---

## Adversarial Signal Check

---

## Appendix A: Pages Audited

- **`/ (nav)`**: SEO 91 · A11y 100 · Back 100 · Served 100 · Rendered 92
- **`/markets (nav)`**: SEO 97 · A11y 100 · Back 100 · Served 64 · Rendered 69
- **`/destek`**: SEO 70 · A11y 100 · Back 70 · Served 18 · Rendered 18
- **`/custody`**: SEO 100 · A11y 100 · Back 100 · Served 100 · Rendered 100
- **`/custody/tr`**: SEO 100 · A11y 100 · Back 100 · Served 100 · Rendered 100
- **`/auth/sign-up`**: SEO 74 · A11y 100 · Back 60 · Served 84 · Rendered 84
- **`/kripto-trend-analizi`**: SEO 100 · A11y 100 · Back 100 · Served 100 · Rendered 100
- **`/fiyat (nav)`**: SEO 95 · A11y 100 · Back 100 · Served 91 · Rendered 91
- **`/fiyat-tahmini (nav)`**: SEO 99 · A11y 100 · Back 100 · Served 91 · Rendered 91
- **`/converter`**: SEO 100 · A11y 100 · Back 100 · Served 88 · Rendered 88
- **`/bitcoin-pizza-gunu`**: SEO 99 · A11y 100 · Back 100 · Served 100 · Rendered 100

Pages marked (nav) are navigational: they route visitors to content rather than containing it, and are excluded from the SEO content average. Content-pages SEO average: 93/100.

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. External links are not tracked; this inventory covers same-host `<a href>` links only. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

Per page, internal links range from 2 to 528, averaging 101 across 11 pages. That is denser than typical (benchmark median 20 per page).

**Table 29**

*Appendix B: Link Inventory*

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 1110 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |

---

## Appendix C: Image Efficiency

We reviewed 585 images across the audited set: 22 WebP, 76 SVG, 482 PNG and 5 JPEG. 576 of 585 (98.5%) carry alt text, leaving 9 without it. Each missing alt attribute is a place where a screen-reader user or a machine reading the page gets no description of what the image shows.

On loading strategy, 477 images are marked `loading="lazy"` and 5 `loading="eager"`, while 103 carry no loading attribute at all. No attribute is not the same as eager: the browser decides for itself when to fetch, which removes the explicit control that lazy and eager give you. Setting an explicit attribute on those images makes the fetch behaviour predictable for browsers and machines alike.

> **Double-lazy loading pattern not detected** -  no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: No platform detected. No platform-specific fingerprint was detected, so the audit used conservative default rate limits, paced slowly enough to stay below typical shared-host thresholds, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** **Nuxt.js** -  JS framework; **Next.js** (low confidence) -  JS framework; **Tailwind CSS** (medium confidence) -  CSS framework; **Cloudflare CDN** (medium confidence) -  CDN / delivery. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from the audited pages. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 11 pages examined | Platform: Unknown Platform | Frameworks: **Nuxt.js** -  JS framework; **Next.js** (low confidence) -  JS framework; **Tailwind CSS** (medium confidence) -  CSS framework; **Cloudflare CDN** (medium confidence) -  CDN / delivery | Analysis method: Hybrid (automated + manual verification) | robots.txt: Present (28 directives)

**Measurement completeness:** Every probe completed during this audit, with no network errors or timeouts. The findings below rest on a full data collection.

**What comes next.** This report is the foundation, not the finish line. Implementing the recommendations requires the technical context that produced them; we carry that context forward. Our implementation engagements begin where this audit ends. Speak to us about next steps.

---

\clearpage

## Further Reading

The reference material cited in this report. Click the link on screen or scan the QR code on paper: both encode the same URL.

**Table 30**

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

This report carries its own provenance. Every step that produced it is recorded in two adjacent JSON sidecars (AI and deterministic), and the full evidence chain travels inside the PDF's XMP metadata: extract it with `exiftool -b -XMP-mx:ProvenanceAiPayload www-paribu-com-report.pdf | jq .`. The PDF is a tagged ISO 14289-1 (PDF/UA-1) Level 2 document with a complete reading-order structure tree. The standards this audit measures your site against are the standards the deliverable itself meets.

\clearpage

## Practice What We Preach: This Audit's Own Evidence Chain

We hold this audit deliverable to the same MX standards we apply to your site. Every consequential step that produced this report (LLM-driven prose passes, deterministic gate verdicts, multi-agent attribution probes, repair iterations) is recorded in two adjacent JSON sidecars next to this PDF.

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `*.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `*.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload mx-allabout-network-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the organisation distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it to ourselves.

---

**Date:** 16 June 2026\
(c) 2026 CogNovaMX Ltd. All rights reserved.

*This is a sample run over a subset of the site. CogNovaMX Ltd can scope a full-estate audit.*

## Pipeline Release Notes

