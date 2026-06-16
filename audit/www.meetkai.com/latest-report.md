---
title: "Www Meetkai: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-06-16"
modified: "2026-06-16"
client: "Www Meetkai"
clientSlug: "www-meetkai-com"
clientUrl: "https://meetkai.com"
reportId: "www-meetkai-com-WEB-AUDIT-20260616"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-06-16"
auditCommand: "node scripts/audit-pipeline.js https://www.meetkai.com --pages 10 --date 2026-06-16"
description: "Executive audit report reviewing accessibility, performance, SEO, structured data, and AI agent compatibility for Www Meetkai"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 85
accessibilityScore: 100
seoScore: 84
llmSuitabilityScore: 77
totalIssues: 0
pagesAudited: 12
version: "1.0"
pipelineVersion: "1.1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-06-16/www.meetkai.com/www-meetkai-com-report.md
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Www Meetkai covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Www Meetkai", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  # The single cog that manages this pipeline artefact, so a reader never
  # has to infer the steward (scripts/lib/managed-by.cjs is the resolver).
  x-mx-managedBy: mx-audit.cog.md
  runbook: "Executive audit report for Www Meetkai. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in the top-level auditCommand field. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-16/www.meetkai.com/www-meetkai-com-report.md', which validates the report then renders it through scripts/bin/mx.pdf.sh."
  generate:
    command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-16/www.meetkai.com/www-meetkai-com-report.md"
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/www.meetkai.com/latest-report.pdf"
    description: "Generate PDF audit report for Www Meetkai"
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
    sidecar: "www-meetkai-com-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "www-meetkai-com-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 16 June 2026\
**Report ID:** www-meetkai-com-WEB-AUDIT-20260616

---

\clearpage

## About This Report

We audited 12 pages across meetkai.com's site using the Web Audit Suite. We review each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image efficiency, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before completing this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent patterns emerge, we update what we look for.

**How we build it.** We use scripted SOPs running deterministic checks rather than inference. The crawl, the served-versus-rendered comparison, the structured-data extraction, the accessibility passes, the discovery-file probes, the platform fingerprinting and the per-section scoring all run as scripts producing byte-identical outputs on the same input. A small number of stages run a judgement pass over the resulting report; that is the only inference layer. Those judgement passes can run against a local model, so the whole audit runs inside your own network with nothing leaving it: relevant where content is regulated or privacy-sensitive.

Our scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. MX addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** This report looks at the web estate: every page served over HTTP, examined for metadata, structured data, accessibility, and machine readability. MX runs deeper, covering every document type a business publishes (PDFs, data feeds, API responses, structured documents) and the machines that read them. The web estate is the foundation; the rest builds on it.

**About sample scope.** Findings throughout this report describe what we observed on the 12 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. The Discovery Files section below records its presence, transport type, and sitemap registration, and covers the two structural problems (content type and discovery) that limit most implementations.

---

## Executive Summary

**Table 1**

*Executive Summary*

| | Score | |
|:---|---:|:---|
| Performance | **85**/100 | `###############---` |
| Accessibility | **100**/100 | `##################` |
| SEO | **84**/100 | `###############---` |
| Served-HTML Structure | **77**/100 | `##############----` |
| MX Stack Completeness | **53**/100 | `##########--------` |
| Agent Readability | **57**/100 | `##########--------` |
| Pipeline Survivability | **91**/100 | `################--` |

*The three machine metrics measure different things. **Served-HTML Structure** is the semantic markup an agent reads before JavaScript runs; **Agent Readability** is how easily the content can be quoted once reached; **Pipeline Survivability** is whether a page survives an agent's fetch and ingest. A site can score low on one and high on another.*

Across the audited set, your pages deliver a fast and engaging experience that keeps visitors focused on the content. The performance score of 84/100 shows that load times are consistently short, while the solid SEO foundation ensures that search engines can surface your material easily. These strengths give users confidence that they are finding relevant, well-structured information quickly.

The headline opportunity is to embed MX governance metadata-mx:status, mx:contentType, mx:audience, canonicalUri and provenance markers-so that machines have the context needed for accurate attribution. Accessibility already meets all WCAG AA requirements, and AI Suitability scores 77/100, confirming that your served HTML can be parsed; adding MX fields will lift you to a Governed level. Even without structured data, introducing Schema.org JSON-LD would provide an additional high-leverage asset that every agent can read regardless of rendering.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, we find that the site delivers an excellent experience for human visitors, with fast performance, consistent accessibility, and strong SEO.

**Table 2**

*Human Experience*

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Could Be Better | C | - |
| Performance | Excellent | A | A (median) |
| Accessibility (WCAG) | Excellent | A | A (median) |
| Trust and Credibility | Good | B | - |

*The UX / Navigation grade derives from measured navigation signals: heading-outline quality, single-H1 consistency, and skip-link consistency. The Trust and Credibility grade derives from measured transport and integrity signals: HTTPS coverage, security-header coverage, canonical-URL consistency, and correct error-page status.*

### Machine Experience

We found that across the audited set, machines can discover and parse content with limited governance context-Discovery Readiness is 10/100 and Structured Data Quality is 0/100-while MX Stack Completeness sits at 53/100 and Pipeline Survivability is high at 91/100, yet overall MX readiness remains Not Ready.

**Table 3**

*Machine Experience*

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 10/100 | Needs Improvement | D | C (median) |
| Structured Data Quality | 0/100 | Needs Improvement | D | B (median) |
| MX Stack Completeness | 53/100 | Good | B | B (median) |
| Pipeline Survivability | 91/100 | Excellent | A | A (median) |

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
| **→** | 0 | Not Ready | Auto-generated boilerplate | Agents guess, hallucinate | **←** |
|  | 1 | Discoverable | Deliberate metadata, publisher identified | Agents can discover |  |
|  | 2 | Governed | Full MX fields, governance, provenance | Machines have structured governance context |  |
|  | 3 | Comparable / Attested | Cryptographic attestation, cross-source verifiable | Agents can search, compare, recommend |  |
|  | 4 | Transactable | Registered, priced, SLA-backed, alive | Agents can understand pricing and transact |  |
|  | 5 | Purchase-confident | Third-party audited, fiduciary-grade | Agents can guarantee accuracy at purchase |  |

**Current Level:** 0: Not Ready

**Evidence:** MX Stack Completeness 53/100 | Structured Data Quality 0/100 | Discovery Readiness 10/100 | Consistency 45%

**To reach the next level:** raise Discovery Readiness above 15 (currently 10).

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, we see a strong foundations in accessibility-achieving a perfect score of 100/100-and robust SEO performance with an overall rating of 84/100. These strengths provide a reliable platform upon which we can build more advanced structured data and security measures.

**Table 5**

*What's Working Well*

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent  -  576ms average load time |
| SEO (content pages) | 83 | Excellent  -  titles, meta descriptions, canonical URLs in place |
| Security | 2/5 | 2/5 headers present (CSP, X-Frame-Options, X-Content-Type-Options absent); 0 of 12 URLs carry all five |
| Heading Quality | 67 | Good  -  headings present and machine-parseable |
| Consistency | 45% | 45%  -  same metadata patterns across every page |
| Agent access | 8/8 | every tested agent receives HTTP 200 |

**Positive patterns observed:**

- Accessibility is compliant across the audited set: Pa11y reports 100/100 with zero WCAG 2.1 AA errors on 12 pages.
- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.

---

## Findings

### At a Glance

We identified 5 finding(s) on the audited set, ordered by regulatory exposure first and then by priority within each category.

**Table 6**

*At a Glance*

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Image Alt-text Coverage | Compliance Risk | High | Low | screen-reader users and machines miss the content of those images |
| 2 | Heading Hierarchy Skips Levels | Compliance Risk | Medium | Low | screen-reader and machine outline-builders may misread the page structure |
| 3 | Semantic Structure (Naked Containers) 37/100 | Compliance Risk | Medium | Medium | machines lose structural context and infer page regions by position |
| 4 | Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options | Cross-cutting | Medium | Low | Missing security headers increase exposure to content injection and clickjacking |
| 5 | No Schema.org structured data (SDQ 0/100) | Machine Readability Opportunity | Medium | Medium | Agents must infer entity type and facts from prose rather than declared structured data |

---

**Priority 1: Image Alt-text Coverage**

**Bucket:** Compliance Risk

**Finding:** 2 of 43 images (5%) on the audited set carry no alt text, so their content is unavailable to assistive technology and to machines reading the page.

**What to change and why:**

- Add descriptive alt text to the informative images that lack it and empty alt to the decorative ones. This satisfies WCAG 1.1.1 across the image set.
- Generating alt text at upload time, or from the CMS media library, keeps coverage high as new images are added.

**Effort:** Low

---

**Priority 2: Heading Hierarchy Skips Levels**

**Bucket:** Compliance Risk

**Finding:** Heading levels skip on 8 audited page(s) (for example an h2 followed by an h4), so the document outline a machine or screen reader builds does not match the visible structure.

**What to change and why:**

- Order headings without skipping levels (an h2 followed by an h4 forces assistive technology and machines to guess the structure). Use heading level for hierarchy and CSS for visual size.
- A clean heading outline is the spine an agent uses to summarise the page; fixing it improves both accessibility and machine comprehension.

**Effort:** Low

---

**Priority 3: Semantic Structure (Naked Containers) 37/100**

**Bucket:** Compliance Risk

**Finding:** Rendered semantic-structure score 37/100: containers carry no role, ARIA landmark, or descriptive class, so machines fall back on positional inference to determine meaning. The worst page ([the home page](https://meetkai.com/)) carries 84 bare divs of 153.

**What to change and why:**

- Replace the obvious landmark containers (header, nav, main, footer, aside) with their semantic elements and give the remaining containers meaningful class names, so machines stop falling back on positional inference to determine what each region is.
- Start with the page that scored worst; wrapping the landmarks alone usually drops the bare-div ratio sharply without restructuring the layout.

**Effort:** Medium

---

**Priority 4: Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options**

**Bucket:** Cross-cutting

**Finding:** Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options (across the audited set). Missing security headers increase exposure to content injection and clickjacking

**What to change and why:**

- Add the missing response headers at the server or CDN edge; each is a one-line directive that applies across the audited set once configured. The audit examined 12 pages and found no CSP header on any of them.
- Set them once in the edge or server configuration rather than per page so coverage stays complete as new pages ship.

**Effort:** Low

---

**Priority 5: No Schema.org structured data (SDQ 0/100)**

**Bucket:** Machine Readability Opportunity

**Finding:** No Schema.org structured data (SDQ 0/100) (Homepage). Agents must infer entity type and facts from prose rather than declared structured data

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for machines.

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
| URL probed | https://www.meetkai.com |
| HTTP status | Not probed |
| Content-Type returned | Not probed |
| Markdown served | Not probed |

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
| HTTP status code | 200 (soft 404) |
| Custom error page | Yes, custom error page (not a bare server default) |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | Yes |
| `<meta name="robots" content="noindex">` | No |
| Navigation back to valid content | Yes, links back to same-site content present |
| Internal navigation links | 20 links to same-site pages |
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
| Pages checked | 12 |

Across the 12 pages we checked, 37 distinct issue patterns reduce what reaches the tree. 4 of these repeat across pages with the same structure, which marks them as template-level: one change in the shared component clears the finding everywhere it appears.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Repeats on 12 of 12 pages with the same structure (a template-level pattern).

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Repeats on 12 of 12 pages with the same structure (a template-level pattern).

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Repeats on 9 of 12 pages with the same structure (a template-level pattern).

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Interactive element nested inside another interactive element** (WCAG 2.1 4.1.2)

A button or link sits inside another button or link. The accessibility tree cannot represent one control inside another: readers expose one, the other, or an unusable merge, and keyboard focus order becomes unpredictable. Seen on 2 pages, for example `/`.

*The fix:* Restructure the template component so each action is its own sibling control.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on 2 pages, for example `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on 2 pages, for example `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on 2 pages, for example `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on 2 pages, for example `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Interactive element nested inside another interactive element** (WCAG 2.1 4.1.2)

A button or link sits inside another button or link. The accessibility tree cannot represent one control inside another: readers expose one, the other, or an unusable merge, and keyboard focus order becomes unpredictable. Seen on `/`.

*The fix:* Restructure the template component so each action is its own sibling control.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/contact`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/contact`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/contact`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Interactive element nested inside another interactive element** (WCAG 2.1 4.1.2)

A button or link sits inside another button or link. The accessibility tree cannot represent one control inside another: readers expose one, the other, or an unusable merge, and keyboard focus order becomes unpredictable. Seen on `/news`.

*The fix:* Restructure the template component so each action is its own sibling control.

**Interactive element nested inside another interactive element** (WCAG 2.1 4.1.2)

A button or link sits inside another button or link. The accessibility tree cannot represent one control inside another: readers expose one, the other, or an unusable merge, and keyboard focus order becomes unpredictable. Seen on `/news`.

*The fix:* Restructure the template component so each action is its own sibling control.

**Interactive element nested inside another interactive element** (WCAG 2.1 4.1.2)

A button or link sits inside another button or link. The accessibility tree cannot represent one control inside another: readers expose one, the other, or an unusable merge, and keyboard focus order becomes unpredictable. Seen on `/news`.

*The fix:* Restructure the template component so each action is its own sibling control.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/news`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/platform`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/platform`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/platform`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/platform`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/platform`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/platform`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/platform`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/platform`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/request-demo`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Interactive element nested inside another interactive element** (WCAG 2.1 4.1.2)

A button or link sits inside another button or link. The accessibility tree cannot represent one control inside another: readers expose one, the other, or an unusable merge, and keyboard focus order becomes unpredictable. Seen on `/sovereignty`.

*The fix:* Restructure the template component so each action is its own sibling control.

**Link whose accessible name carries no destination meaning** (WCAG 2.1 2.4.4)

The link's accessible name is a generic phrase or a bare URL. In the accessibility tree, and in any links-only projection of the page, every such link reads identically: the destination is unknowable without the surrounding layout, which machines and screen reader users do not have. Repeats on 12 of 12 pages with the same structure (a template-level pattern).

*The fix:* Name the destination in the link text itself in the template ("View pricing plans" rather than "click here").

**Form field labelled only by its placeholder** (WCAG 2.1 3.3.2)

An input relies on placeholder text as its only label. The placeholder vanishes the moment the visitor types, is not reliably exposed as the accessible name, and disappears entirely in text projections of the page. Seen on 2 pages, for example `/contact`.

*The fix:* Add a real label (visible, or aria-label where the design demands it) in the form component; keep the placeholder as a hint, not the name.

**Form field labelled only by its placeholder** (WCAG 2.1 3.3.2)

An input relies on placeholder text as its only label. The placeholder vanishes the moment the visitor types, is not reliably exposed as the accessible name, and disappears entirely in text projections of the page. Seen on 2 pages, for example `/contact`.

*The fix:* Add a real label (visible, or aria-label where the design demands it) in the form component; keep the placeholder as a hint, not the name.

The full set, one row per pattern with every affected page counted, is recorded in the `www-meetkai-com-accessibility-tree.csv` sidecar alongside this report.

**Inspect your own tree.** Right-click any page, choose Inspect, open the Elements panel, click the `>>` icon, choose Accessibility, and toggle "Show Accessibility Tree". What you see there is what tree consumers receive: if a control or a heading is missing from that view, it is missing for them. Chrome DevTools' AI Assistance panel also accepts "Review accessibility" against any element this report flags.

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds for a returning visitor may be served from a warm CDN edge; the same page on a genuine first visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section re-measures the slowest page from the crawl and a median-load control across several fresh visits, then compares those against the first-visit response. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what a repeat visitor experiences). The overall verdict for each page is the worse of the two, so a fast returning-visitor median cannot paper over a slow first-visit response.

**Method:** Each URL is re-measured across several fresh visits and scored on the median of those measurements. For each page we compare both the crawler's cold-cache baseline and the median of three fresh GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://meetkai.com/sovereignty`. A first-time visitor sees the cold-cache cost: the crawler recorded 1381 ms on its initial fetch. **First-visit verdict: Healthy**. Three fresh re-probes that followed returned 405ms, 404ms, 411ms, giving a returning-visitor median of **405 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://meetkai.com/careers`. A first-time visitor sees the cold-cache cost: the crawler recorded 434 ms on its initial fetch. **First-visit verdict: Healthy**. Three fresh re-probes that followed returned 518ms, 326ms, 545ms, giving a returning-visitor median of **518 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Server response time is within healthy bounds on the slowest page and a median-load page, for both first-visit and returning-visitor requests.

Origin response time for both the slowest and median-load pages stays inside the healthy band across repeated fresh visits. No server-side action is required from this audit.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

Sitemap: https://meetkai.com/sitemap.xml
```

*The full `robots.txt` (7 lines) is preserved alongside this report as `www-meetkai-com-robots-txt.txt`.*

The robots.txt declares 3 disallow paths; all other paths are open to crawlers and machines. It announces the sitemap, so a machine reading the file can find the URL index directly.

### sitemap.xml

**Table 11**

*sitemap.xml*

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 344 entries | Present |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** Complete

The sitemap declares 344 URLs and grades Complete. Lastmod dates vary across entries, which tells machines which pages changed and when.

This was a full crawl: the audit reached every page it could discover, and 1 of them is absent from the sitemap (which lists 344). The unlisted pages: `/images/blog/rethinking-ai-deployment-case-for-sovereign-ai-article.pdf`. The full set is recorded in the `www-meetkai-com-pages-not-in-sitemap.csv` sidecar alongside this report. Adding them to the sitemap lets search engines and machines discover all content.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

The llms.txt is present but carries none of the three signals we look for: a machine that queries the host for a structured content index receives no description, no page inventory, and no content-use policy. Adding a site description, a page inventory and a content-use policy would let it serve its purpose. We also recommend serving llms.txt as an HTML page that wraps the plain-text content in a `<pre>` block, rather than the text/plain the llmstxt.org specification defines. Training crawlers such as Common Crawl archive only a small fraction of plain-text files but crawl HTML pages from the sitemap reliably, so the HTML wrapper gets the file into the corpus while the `<pre>` keeps it rendering as readable plain text. The technique, with the reasoning and working code, is at https://mx.allabout.network/blog/your-site-is-already-training-ai.html.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

**Table 12**

*Other discovery files detected*

| Path | Purpose | Quality |
|------|---------|---------|
| *(5 paths  -  see sidecar)* | Various | Soft 404  -  same error page template as /zebedee.html (URL slug differs in embedded JS) |

**Soft 404s detected (7 paths):** The server returns a custom error page with HTTP 200 for these paths. AI agents and crawlers rely on HTTP status codes -  a 200 response signals success, so agents treat the error page body as if it were a real discovery file. The server should return HTTP 404 (or 301 to a canonical URL) for paths it does not implement. This is a web server configuration change, not a content change.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## AI-Content Marking Readiness

This section reports whether Www Meetkai's site marks AI-generated or AI-manipulated content in a machine-readable way: the form of marking the EU AI Act Article 50 expects from 2 August 2026, and the form the European Commission's voluntary Code of Practice on marking and labelling of AI-generated content (published 13 June 2026) sets out practical steps to meet. The probe inspects the homepage for four markers an agent could read without a human in the loop, and records which are present.

<p><small><strong>Note:</strong> This section describes regulatory frameworks in general terms only. Nothing here is legal advice. Requirements vary by jurisdiction, organisation type, and use case. Consult qualified legal specialists for guidance specific to your situation.</small></p>

**Table 13**

*AI-Content Marking Readiness*

| Attribute | Value |
|-----------|-------|
| Origin | https://www.meetkai.com |
| Reference | EU AI Act Article 50; European Commission Code of Practice on marking and labelling of AI-generated content (13 June 2026) |
| Readiness level | Level 0 (Unmarked) |
| Markers present | 0/4 |
| Verdict | unmarked |

### Markers

**Table 14**

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

<!-- SECTION:SOFT_404 -->
## Soft 404s

This site answers HTTP 200 for addresses that do not exist. A control address that cannot be real still returned a 200 with a normal-looking page. This is a soft 404, and on this site it is the default for missing addresses, not an isolated case. For a person it is invisible. For a machine it is corrosive: a 200 is the signal that a resource is present, so every check of the form "does this exist?" now returns yes. An agent confirming a price, a product, a policy, or a declaration cannot tell a real answer from a placeholder. A crawler building a training set ingests the catch-all page under thousands of distinct addresses as if each were real content. A validator probing for a well-known file records it as published when nothing is there. The correct behaviour is to return 404 (or 410) for an address that does not resolve, and to reserve 200 for addresses that do. Until that holds, no presence claim derived from a fetch of this site can be trusted, including some made elsewhere in this report where the underlying probe was misled.

We probed 51 addresses that should answer 404 when they are absent; 11 returned a soft 404 instead. Among the well-known discovery paths, 7 of 43 were soft 404s. Severity: pervasive.
<!-- END:SOFT_404 -->

---

## Structured Data Inventory

No Schema.org JSON-LD entities were detected across the audited set. Adding at least one typed entity per page (e.g. `Organization` on the homepage, `Product` or `Article` on content pages) is the highest-impact improvement for machine readability.

Across the 12 pages we audited, structured data is limited. Machines cannot reliably extract entity data from these pages. Adding Schema.org JSON-LD with required properties is the highest-impact improvement.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

**Table 15**

*SDQ Score Breakdown*

| Component                       | Earned | Max | Meaning                                                       |
|---------------------------------|--------|-----|---------------------------------------------------------------|
| Presence | 0 | 10 | schema.org JSON-LD is present on the page |
| Required property coverage | 0 | 25 | Every entity carries the properties its type requires |
| Recommended property coverage | 0 | 15 | Entities carry the properties their type recommends |
| Entity richness | 0 | 15 | Entities are described with enough properties to be useful |
| Cross-entity references | 0 | 15 | Entities reference each other (nested types and @id links) |
| Linked-data signals | 0 | 10 | Linked-data properties present (sameAs, mainEntityOfPage, isPartOf, about, mentions) |
| Vocabulary validity | 0 | 10 | Every @type is a valid Schema.org type |
| **Total** | **0** | **100** | |

---

## Structured Data Findings

This is a clean-slate site with no Schema.org markup. There are no property gaps to report because no typed entities exist yet; every structured data addition is net new capability. The served HTML is machine-readable (served score 77/100); agents can extract content without JSON-LD.

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is: a Product, an Article, an Organisation: but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside any single page. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

**What this section checks.** Each signal below is derived deterministically from served HTML and JSON-LD on disk: no inference, no model judgement. Five structural signals fire per page: (i) self-promotional listicle (a ranked list is advertised whose first entry resolves to the publisher's own host), (ii) year-swap refresh (the title year is two or more years ahead of `dateModified`), (iii) first-party superlative (claims like "best", "leading", "high-quality" without an external reference), (iv) third-party citation count (outbound links to hosts other than the audited site), and (v) provenance metadata presence (`author`, `dateModified`, `publisher`). Pages whose body content runs over 400 words while emitting zero third-party citations carry no verifiable references and contribute to the blocker list. When the audited set is clean we omit the per-page table altogether and let the verdict line below carry the result.

**The list format is not the problem.** Ranked, comparative lists are among the most-cited content shapes in AI answers, so we never flag a page for being a list. What we flag is the self-ranking variant: a "best N" page that puts its own brand at position one. It repeats a familiar move - the FAQ markup Google deprecated for gaming while AI systems kept reading it. The gamed surface gets demoted; the format stays valuable; the gap between them is provenance. The demotion is not an SEO cost you can trade for AI reach: AI answer engines retrieve through search, Google's own among them, so a page the search engine demotes is a page the AI does not surface at the top. A self-ranking list reads as a rigged result to anything checking who made the ranking, and it forfeits the visibility it was trying to manufacture.

### Templated clusters

No templated clusters detected at the audited scale. Pages in the audited set either carry product entities or have enough structural and textual variation to clear the stamp-out threshold.

### Provenance verdict

No provenance-gap blockers detected on the audited set. Pages clear the structural primitives we measure here.

Any page contributing to a blocker above is capped at **Discoverable** readiness in the MX Readiness Level table below, regardless of its other scores. Citation readiness requires a verifiable claim to cite.

---

## Marker Reachability

**Table 16**

*Marker Reachability*

| Marker                            | In served   | In rendered | In head | Reachable <250KB | Injected by JS |
|-----------------------------------|-------------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Not present | Not present | n/a | n/a | n/a |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Yes | Yes | Yes | Yes | No |
| Twitter Card meta tags | Yes | Yes | Yes | Yes | No |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | Yes | No |
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
| **→** | 0 | Clean slate | No Schema.org markup present. The full maturity curve is open: every property added at this stage is net new capability. | **←** |
|  | 1 | Decoration | Typed blocks present, with sparse properties and no nesting or cross-references. The structural primitives are in place; the next opportunity is to fill the required and recommended fields. |  |
|  | 2 | Good schema | Full required and recommended properties, nested types where appropriate, valid vocabulary. The next opportunity is to wire entities together with @id cross-references. |  |
|  | 3 | Real graph | Level 2 plus @id cross-references between entities and linked-data signals (sameAs, mainEntityOfPage, isPartOf). The next opportunity is to anchor entities to external identifiers. |  |
|  | 4 | Verified linked data | Level 3 plus external identifiers (Wikidata QIDs, ISNIs, ORCIDs) and provenance metadata. Entities are anchored in the linked-data web. |  |

**Current level:** 0: Clean Slate\
**To reach the next level:** Add at least one Schema.org JSON-LD block (e.g. Organisation, WebSite, or Article); every property added is net new capability for AI agents.

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
| 2 | Citation | Fail | 33 | No Schema.org structured data |
| 3 | Search & Compare | Site type does not require | -- | No comparison content detected |
| 4 | Price Understanding | Site type does not require | -- | No pricing content detected |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

*Each stage carries its own pass threshold, so Status and Score are not comparable across rows: a score that passes one stage can fall short on another with a stricter bar.*

Stage 2 (Citation) is the weakest link in the agent journey. Because each stage depends on the previous one, this gap affects all downstream stages. Addressing No Schema.org structured data is the highest-priority improvement.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, condensing by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Pass · 12/12
  - *Means:* Every page is well under the 250 KB hard ceiling at which some server-side agents stop reading, and main content sits within the 50-100 KB offset windows. The largest page is 162 KB ([the home page](https://meetkai.com/)).
  - *Data:* Largest page: 162 KB ([the home page](https://meetkai.com/)). Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows.
- **SPA Shell** - Fail · 1/12
  - *Means:* Content requires JavaScript to appear. Server-side agents (ChatGPT, Claude, Perplexity) see an empty shell when they fetch these pages.
  - *Data:* Max gap score: 44. 0 means served and rendered match. Page: https://meetkai.com/about
- **Soft 404** - Fail · site-wide
  - *Means:* This site returns HTTP 200 for addresses that do not exist (a soft-404 catch-all), so agents and search engines cannot distinguish a missing resource from a real one. Missing addresses must return HTTP 404 or 410.
  - *Data:* A control address that does not exist returned HTTP 200; 7 of 43 well-known paths are soft-404s.
- **Boilerplate Burial** - Pass · 12/12
  - *Means:* Navigation and chrome do not dominate the page; main content is reachable without wading through overhead.
  - *Data:* Highest boilerplate-to-content ratio: 0.00. Threshold: < 10 (and < 80 KB of inline head bytes).
- **Tabbed Disclosure** - Pass · 12/12
  - *Means:* No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML.
  - *Data:* 0 page(s) with tab widgets.
- **Delayed Content Start** - Pass · N/A
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
- **Body Content Ratio** - Fail · N/A
  - *Means:* Prose content averages only 17% of served bytes. Scripts, styles, and images dominate; agents get little signal per byte.
  - *Data:* Average: 17%. Threshold: 30%.
- **Inline Tag Bloat** - Fail · 12/12
  - *Means:* 12 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches.
  - *Data:* 120 element(s) > 500 bytes. Largest single-page inline CSS block: 0 B. Largest single-page inline JS block: 93400 B. See www-meetkai-com-pipeline-inline-tag-bloat-pages.csv (12 pages).
- **Head Weight** - Pass · N/A
  - *Means:* Head bytes are a small fraction of each page. Agents reach body content quickly.
  - *Data:* Max ratio: 0.00. Average: 0.00. Threshold: 0.50.

**Pipeline Survivability score:** 91/100

We found that every audited page suffers from **Inline Tag Bloat**, a resilience issue that can cause search crawlers to miss or misinterpret embedded scripts and styles. This limits machines’ ability to reliably render the page’s content, hampering accurate indexing. Addressing inline tag bloat-by moving scripts and styles to external files-offers the greatest opportunity to strengthen machine comprehension across all audited pages, while a smaller subset of pages also shows an SPA Shell issue that could affect dynamic content loading.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check set, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

**Table 19**

*Div Soup: naked containers without semantic mapping*

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Served HTML | 37/100 (high) | 84 bare divs (55% of containers, depth 6) | `div.flex.flex-col` (19), `div.-z-10.h-full` (15), `div.flex.justify-end` (12), `div.absolute.inset-0` (10), `div.flex-1.min-w-0` (10) |
| Rendered HTML | 37/100 (high) | 84 bare divs (55% of containers, depth 6) | `div.flex-1.min-w-0` (22), `div.text-sm.md:text-base` (20), `div.flex.flex-col` (19), `div.-z-10.h-full` (15), `div.h-4.bg-gray-200` (15) |

**Worst page (served):** [the home page](https://meetkai.com/)\
**Worst page (rendered):** [the home page](https://meetkai.com/)

Across the audited set, the worst page https://meetkai.com/ shows a bare-div ratio of 55 % on both served and rendered markup; this means machines lose structural context and must rely on positional inference to interpret content.  
The soup is surface-wide - a high bare-div proportion with only modest chain depth (maximum 6) - suggesting the page was assembled from generic component frameworks or late-stage JavaScript injection rather than semantic markup.  
A cost-effective first step is to wrap key landmarks such as header, nav, main and footer in landmark elements and assign meaningful class names to remaining divs; this will lower the bare-div ratio without altering layout.

---

## Security Headers

**Table 20**

*Security Headers*

| Header                          | Status   | Purpose                                          |
|---------------------------------|----------|--------------------------------------------------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | No | Prevents MIME-type sniffing |

3 of the five standard security headers are absent on every audited response: Content-Security-Policy (CSP), X-Frame-Options, X-Content-Type-Options. Adding them at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 12 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/about`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/careers`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/contact`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/platform`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/request-demo`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/sovereignty`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/news`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/terms`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/privacy`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/dmca`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No
- **`/news/advancing-sovereign-ai-arab-world-aicto`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type No

HTTPS: 12/12 | HSTS: 12/12 | CSP: 0/12 | X-Frame-Options: 0/12 | X-Content-Type-Options: 0/12

---

## Cross-Page Consistency

**Table 21**

*Cross-Page Consistency*

| Pattern                          | Coverage | Pages missing it   |
|----------------------------------|----------|--------------------|
| Schema.org JSON-LD | 0% | 12 |
| MX governance tags | 0% | 12 |
| Open Graph tags | 92% |  -  |
| Twitter Card tags | 92% |  -  |
| Skip link | 0% | 11 |
| llms.txt link tag | 0% | 11 |
| Canonical URL | 92% |  -  |
| Exactly 1 H1 | 42% | 7 |
| Code examples present | 0% | 12 |
| Self-contained sections | 100% |  -  |
| Error/troubleshooting docs | 0% | 12 |
| Lighthouse heading compliance | 33% | 8 |

**Overall Consistency:** 45%

Some pages in the 12-page sample are missing metadata patterns that others carry. Machines hitting different pages get different quality data. The Missing Pages column shows where to focus on the sampled pages.

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no brand-name or canonical-URL divergence flagged by the consistency check.

**Table 22**

*Content Consistency*

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Brand-name parity | Consistent | Single unique page  -  no cross-page parity check possible |
| Canonical URL duplicates | Pass | Canonical tag present on 11 audited pages; no cross-page duplicates to test in a single-page or term-thin sample |
| Meta description length | Not tested | Insufficient pages for distribution analysis |
| Cross-page entity spread (same entity on multiple pages) | No entities detected | Audit scope: 1 unique page |

---

## Inline Code Duplicates

We found 32 identical inline fragment(s) repeated across multiple pages, totalling 197 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

**Table 23**

*Inline Code Duplicates*

| Type | Bytes per fragment | Appears on N pages | Preview                                                          |
|------|-------------------:|-------------------:|------------------------------------------------------------------|
| js | 43 | 12 | (self.__next_f=self.__next_f\|\|[]).push([0]) |
| js | 45 | 10 | self.__next_f.push([1,"e:\"$9:metadata\"\n"]) |
| js | 218 | 5 | self.__next_f.push([1,"4:[\"$\",\"html\",null,{\"lang\":\"en |
| js | 22933 | 4 | self.__next_f.push([1,"12:[\"$\",\"$L13\",null,{\"formats\": |
| js | 22933 | 4 | self.__next_f.push([1,"10:[\"$\",\"$L11\",null,{\"formats\": |
| js | 4511 | 4 | self.__next_f.push([1,"14:[\"$\",\"section\",null,{\"classNa |
| js | 1131 | 4 | self.__next_f.push([1,"2c:I[3567,[\"76\",\"static/chunks/76- |
| js | 1114 | 4 | self.__next_f.push([1,"15:I[8407,[\"76\",\"static/chunks/76- |
| js | 1114 | 4 | self.__next_f.push([1,"13:I[8407,[\"76\",\"static/chunks/76- |
| js | 506 | 4 | self.__next_f.push([1,"12:[\"$\",\"main\",null,{\"className\ |

*Showing the top 10 of 32 duplicate fragments by occurrence count. The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `www-meetkai-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src=".">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

We note that accessibility legislation worldwide converges on ISO 14289-1 (PDF/UA) as the technical baseline, with the EAA Directive in the EU being a precisely codified example of this global alignment. In parallel, an untagged PDF remains invisible to machines-search crawlers, AI systems and automated pipelines cannot extract text or structure from scanned or image-based PDFs, whereas a tagged PDF with a proper structure tree is machine-readable just as semantic HTML is.

1 PDF document(s) were identified by the audit: those linked from the crawled pages combined with those declared in the sitemap. PDFs whose only source is the sitemap are marked as such in the inventory. The MX Document Accessibility note specifies a three-layer conformance contract: **Tagged** (Level 1, ISO 14289-1 PDF/UA), **Declared** (Level 2, XMP `pdfuaid:part`), **Verified** (Level 3, recorded check).

**Scope note:** this inventory covers PDFs reachable from the crawled pages plus any `.pdf` URLs the sitemap declares. PDFs behind login forms, linked only from uncrawled pages, stored in unlinked directories that are kept out of the sitemap, or hosted on third-party domains still fall outside the crawl boundary. A wider-scope engagement is needed for a complete picture of accessibility exposure across the full document estate.

### Inventory

- https://meetkai.com/images/blog/rethinking-ai-deployment-case-for-sovereign-ai-article.pdf
  Source: https://meetkai.com/news, HTML alternative: Yes

### Sample analysis

We sampled one PDF from the inventory with the heuristic checker, preferring the first document served from this site's own domain over third-party links. Findings:

**Table 24**

*Sample analysis*

| Layer | Status | What this means |
|-------|--------|-----------------|
| Level 1: Tagged (ISO 14289-1) | **pass** | Structure tree + `/Marked true` declaration |
| Level 2: Declared (XMP `pdfuaid:part`) | fail | Public conformance claim in the document metadata |
| Level 3: Verified (independent check) | n/a: out of scope of this snapshot | Vendor or in-house validator run, recorded in `provenancePedigree.checks[]` |

**Accessibility exposure on this sample: low.** 

### Full PDF review

This is a one-PDF sample. A full PDF review runs the same checker over every document in the inventory, returning per-document Level 1 / Level 2 / Level 3 verdicts with remediation notes.

Accessibility legislation in major markets (the EAA, Section 508, UK PSBAR) treats ISO 14289-1 (PDF/UA) Level 1 as the structural floor for in-scope public documents; conformance is a legal duty of the publisher. Most structural issues are cheapest to fix at PDF generation time, once the source pipeline emits tagged PDFs.

---

## Content Uniqueness

Analysis of prose content across audited pages found 3 of 12 pages reaching Low Machine Value on the content-uniqueness scale. Pages with high shared content give machines redundant information per page, reducing the value of multi-page crawls. The full per-page breakdown is in `prose-repetition.json` in the results directory.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: resolve Commerce Visibility findings (currently 0/100)
2. **Review Priority 2-3 findings**: Structured Data improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

**Table 25**

*What's Next*

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3 (Compliance Risk) | Priority 1, 2, 3 resolved: WCAG 2.1 AA accessibility compliance restored |
| Full Implementation | P1, P2, P3, P4, P5 (P1-P5) | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | The full machine-readable estate, beyond the web pages |

This audit is a starting point. The outcome we work toward is a site any machine can read, trust, and act on, and a dated, attested record you can show to a regulator, a partner, or an acquirer on request. Reaching it (structured data, discovery files, accessibility, governance metadata, and re-audit on a cadence you choose) is available as a managed service. To take any of it further, contact CogNovaMX Ltd at <info@cognovamx.com>.

---

## Summary of Findings

Accessibility scores a perfect 100/100 across the audited set. However, structured data sits at 0/100 and discovery readiness at 10/100, limiting how effectively machines can understand and surface your pages. Addressing these gaps will unlock richer machine comprehension and improve search visibility; we recommend prioritising the implementation of structured data and enhancing discovery artefacts.

### Audit Scores

**Table 26**

*Audit Scores*

| Dimension | Score | Band |
|-----------|-------|------|
| Served-HTML Structure | 77/100 | Excellent |
| Accessibility | 100/100 | Excellent |
| SEO (all pages) | 84/100 | Excellent |
| SEO (content pages) | 83/100 | Excellent |
| MX Stack Completeness | 53/100 | Good |
| Structured Data Quality | 0/100 | Needs Improvement |
| Commerce Visibility | 0/100 | Needs Improvement |
| Discovery Readiness | 10/100 | Needs Improvement |
| Heading Quality | 67/100 | Good |
| Agent Readability | 57/100 | Good |
| Pipeline Survivability | 91/100 | Excellent |
| Cross-Page Consistency | 45% | Could Be Better |

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

- **`/ (nav)`**: SEO 90 · A11y 100 · Back 55 · Served 37 · Rendered 84
- **`/about`**: SEO 82 · A11y 100 · Back 55 · Served 100 · Rendered 100
- **`/careers`**: SEO 73 · A11y 100 · Back 55 · Served 78 · Rendered 100
- **`/contact`**: SEO 87 · A11y 100 · Back 55 · Served 95 · Rendered 100
- **`/platform`**: SEO 81 · A11y 100 · Back 55 · Served 88 · Rendered 95
- **`/request-demo`**: SEO 91 · A11y 100 · Back 55 · Served 95 · Rendered 100
- **`/sovereignty`**: SEO 84 · A11y 100 · Back 55 · Served 78 · Rendered 85
- **`/news`**: SEO 88 · A11y 100 · Back 55 · Served 66 · Rendered 73
- **`/terms`**: SEO 83 · A11y 100 · Back 55 · Served 78 · Rendered 85
- **`/privacy`**: SEO 83 · A11y 100 · Back 55 · Served 78 · Rendered 85
- **`/dmca`**: SEO 84 · A11y 100 · Back 55 · Served 78 · Rendered 85
- **`/news/advancing-sovereign-ai-arab-world-aicto`**: SEO 81 · A11y 100 · Back 55 · Served 74 · Rendered 81

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 83/100.

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. External links are not tracked; this inventory covers same-host `<a href>` links only. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

Per page, internal links range from 12 to 15, averaging 12 across 12 pages. That is sparser than typical (benchmark median 20 per page).

**Table 27**

*Appendix B: Link Inventory*

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 147 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |

---

## Appendix C: Image Efficiency

We reviewed 43 images across the audited set: 43 in other or unidentified formats. 41 of 43 (95.3%) carry alt text, leaving 2 without it. Each missing alt attribute is a place where a screen-reader user or a machine reading the page gets no description of what the image shows.

On loading strategy, 43 images are marked `loading="lazy"` and 0 `loading="eager"`, so every image on the audited pages declares its fetch behaviour explicitly rather than leaving the browser to guess.

> **Double-lazy loading pattern not detected** -  no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: No platform detected. No platform-specific fingerprint was detected, so the audit used conservative default rate limits, paced slowly enough to stay below typical shared-host thresholds, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** **Next.js** (medium confidence) -  JS framework; **Tailwind CSS** -  CSS framework. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from the audited pages. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 12 pages examined | Platform: Unknown Platform | Frameworks: **Next.js** (medium confidence) -  JS framework; **Tailwind CSS** -  CSS framework | Analysis method: Hybrid (automated + manual verification) | robots.txt: Present (6 directives)

**Measurement completeness:** Every probe completed during this audit, with no network errors or timeouts. The findings below rest on a full data collection.

**What comes next.** This report is the foundation, not the finish line. Implementing the recommendations requires the technical context that produced them; we carry that context forward. Our implementation engagements begin where this audit ends. Speak to us about next steps.

---

\clearpage

## Further Reading

The reference material cited in this report. Click the link on screen or scan the QR code on paper: both encode the same URL.

**Table 28**

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

This report carries its own provenance. Every step that produced it is recorded in two adjacent JSON sidecars (AI and deterministic), and the full evidence chain travels inside the PDF's XMP metadata: extract it with `exiftool -b -XMP-mx:ProvenanceAiPayload www-meetkai-com-report.pdf | jq .`. The PDF is a tagged ISO 14289-1 (PDF/UA-1) Level 2 document with a complete reading-order structure tree. The standards this audit measures your site against are the standards the deliverable itself meets.

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

