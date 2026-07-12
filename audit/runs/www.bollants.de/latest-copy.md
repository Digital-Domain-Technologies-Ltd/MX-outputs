---
title: "Bollants"
subtitle: "Website Analysis & Machine Readiness"
type: report
author: "Tom Cranstoun"
created: "2026-07-12"
modified: "2026-07-12"
client: "Bollants"
clientSlug: "www-bollants-de"
clientUrl: "https://www.bollants.de"
reportId: "www-bollants-de-WEB-AUDIT-20260712"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-07-12"
auditCommand: "node scripts/audit-pipeline.js https://www.bollants.de --pages 10"
description: "Executive audit report reviewing accessibility, performance, SEO, structured data, and AI agent compatibility for Bollants"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 85
accessibilityScore: 57
seoScore: 91
llmServedHtmlScore: 59
agentReadabilityScore: 46
a11yIssues: 290
htmlPagesAudited: 12
version: "1.0"
pipelineVersion: "1.1.0"
confidential: true
mx:
  status: active
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-07-12/www.bollants.de/www-bollants-de-report.md
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Bollants covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Bollants", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  # The single cog that manages this pipeline artefact, so a reader never
  # has to infer the steward (scripts/lib/managed-by.cjs is the resolver).
  x-mx-managedBy: mx-audit.cog.md
  x-mx-generatedBy: "mx-reginald/audit/bin/infill-report.js"
  x-mx-canonicalSource: "Audit results for https://www.bollants.de on 2026-07-12 - fix via generator, not this file"
  runbook: "Executive audit report for Bollants. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in the top-level auditCommand field. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-07-12/www.bollants.de/www-bollants-de-report.md', which validates the report then renders it through scripts/bin/mx.pdf.sh."
  generate:
    command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-07-12/www.bollants.de/www-bollants-de-report.md"
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/runs/www.bollants.de/latest-copy.pdf"
    description: "Generate PDF audit report for Bollants"
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
    sidecar: "www-bollants-de-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "www-bollants-de-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 12 July 2026\
**Report ID:** www-bollants-de-WEB-AUDIT-20260712

---

\clearpage

## Executive Verdict

> **Bottom line.** Bollants runs on Unknown Platform and scores 57/100 on automated accessibility checks and 91/100 for SEO. It sits at MX Readiness Level 1 (Discoverable). The single most important next step is to resolve the 14 distinct WCAG issue types flagged below (a Priority 1 compliance obligation).

**Top risks**

1. **Commerce Visibility (20/100)** - Needs Improvement.
2. **Discovery Readiness (40/100)** - Could Be Better.
3. **Agent Readability (46/100)** - Could Be Better.

---

## Executive Summary

**Table 1**

*Executive Summary*

| | Score | Verdict |
|:---|---:|:---|
| Performance | **85**/100 | `###############---` Excellent |
| Accessibility | **57**/100 | `##########--------` Good |
| SEO | **91**/100 | `################--` Excellent |
| Served-HTML Structure | **59**/100 | `###########-------` Good |
| MX Stack Completeness | **59**/100 | `###########-------` Good |
| Agent Readability | **46**/100 | `########----------` **(!)** Could Be Better |
| Pipeline Survivability | **91**/100 | `################--` Excellent |
| Machine Processing Speed | **154** ms/page | `#################-` Machine-Ready |

*The three machine metrics measure different things. **Served-HTML Structure** is the semantic markup an agent reads before JavaScript runs; **Agent Readability** is how easily the content can be quoted once reached; **Pipeline Survivability** is whether a page survives an agent's fetch and ingest. A site can score low on one and high on another.*

Agent Readability was adjusted down by 26 points for site-wide gaps a machine cannot work around:

- **Real AI agents are blocked from fetching the site** (-10): blocked: ClaudeBot (Anthropic)
- **Content appears only after JavaScript runs (site-wide)** (-8): 10 of 12 pages serve a JS shell or far less text than they render
- **Generic containers without landmark roles on most pages** (-8): 11 of 12 pages rely on generic containers without landmark roles

The site appears to be a transactional retail or e-commerce operation.

Bollants runs on Unknown Platform. Across the audited set, Bollants scores 57/100 for accessibility and 91/100 for SEO.

The headline opportunity is to elevate the site's commerce visibility, currently at 20/100, which limits machine discovery of product offerings. A Priority 1 compliance item is the 14 distinct WCAG AA issue types affecting 290 elements; addressing each pattern would remove most accessibility barriers.

Because AI Suitability is only 59/100, there is a served-versus-rendered gap that hampers machine parsing. On the current platform, the highest-leverage action is to add full MX governance fields-mx:status, mx:contentType, mx:audience, canonicalUri, and provenance markers-to move from Level 1 Discoverable to Governed.

\clearpage

## Balanced Scorecard

### Human Experience

Human visitors experience Excellent performance (avg 579 ms load time), Good accessibility across 12 pages, and Excellent search visibility.

**Table 2**

*Human Experience*

| Dimension | Score | Band | vs Peers |
|-----------|-------|------|----------|
| Performance | 85/100 | Excellent | A (median) |
| Accessibility | 57/100 | Good | A (median) |
| SEO (content pages) | 91/100 | Excellent | A (median) |

### Machine Experience

Machines experience Good HTML structure at first fetch, Could Be Better discovery readiness (40/100), Good structured data quality (52/100), and Could Be Better agent readability.

**Table 3**

*Machine Experience*

| Dimension | Score | Band | vs Peers |
|-----------|-------|------|----------|
| Served-HTML Structure | 59/100 | Good | A (median) |
| Discovery Readiness | 40/100 | Could Be Better | C (median) |
| Structured Data Quality | 52/100 | Good | B (median) |
| MX Stack Completeness | 59/100 | Good | B (median) |
| Pipeline Survivability | 91/100 | Excellent | A (median) |
| Security headers |  -  |  -  |  -  |
| Machine Processing Speed | 154 ms/page | Machine-Ready |  -  |

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

**Evidence:** MX Stack Completeness 59/100 Core metadata layers are in place; governance fields and provenance declarations are missing. | Structured Data Quality 52/100 Schema.org data is present and valid; recommended properties and entity links are sparse. | Discovery Readiness 40/100 Machines can find the site but lack structured signals about its purpose and content policy. | Consistency 55% Most metadata patterns are consistent; a few gaps mean some pages deliver weaker signals than others.

**To reach the next level:** Add full MX fields, governance, and provenance metadata so machines have the structured context they need for accurate comprehension. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

We find SEO performance, security transport, and structured-data quality across the audited set, giving a clear starting point for the improvements ahead.

**Table 5**

*What's Working Well*

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent  -  579ms average load time |
| SEO (content pages) | 91 | Excellent  -  titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | 4/5 headers present (CSP absent); 0 of 12 URLs carry all five |
| Structured Data | 52 | Good  -  JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 84 | Excellent  -  headings present and machine-parseable |
| Consistency | 55% | 55%  -  same metadata patterns across every page |
| Agent access | 7/8 | 7 of 8 AI user-agents receive HTTP 200; ClaudeBot (Anthropic) blocked |

**Positive patterns observed:**

- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.
- Body content ratio averages 74%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

The table below is the prioritised action list for this audit. Each row names a finding, its compliance-risk bucket, and the effort to fix it. The numbered blocks below the table expand each finding with specific guidance.

We identified 12 finding(s) on the audited set, ordered by regulatory exposure first and then by priority within each category.

**Table 6**

*At a Glance*

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2 | Compliance Risk | High | Medium | screen reader users may miss or misread affected content |
| 2 | Insufficient Colour Contrast, WCAG 1.4.3 | Compliance Risk | High | Medium | low-vision users may miss or misread affected content |
| 3 | Info and Relationships Not Programmatically Determined, WCAG 1.3.1 | Compliance Risk | High | Medium | screen reader users may miss or misread affected content |
| 4 | Duplicate ID Attributes, WCAG 4.1.1 | Compliance Risk | High | Medium | assistive-technology users may miss or misread affected content |
| 5 | Non-text Content Missing Text Alternatives, WCAG 1.1.1 | Compliance Risk | High | Low | screen reader users may miss or misread affected content |
| 6 | No Bypass Mechanism for Repeated Blocks, WCAG 2.4.1 | Compliance Risk | Medium | Low | sighted keyboard users may miss or misread affected content |
| 7 | Heading Hierarchy Skips Levels | Compliance Risk | Medium | Low | screen-reader and machine outline-builders may misread the page structure |
| 8 | Semantic Structure 30/100 | Compliance Risk | Medium | Medium | machines lose structural context and infer page regions by position |
| 9 | Security headers absent: CSP | Cross-cutting | Medium | Low | Missing security headers increase exposure to content injection and clickjacking |
| 10 | Structured Data Property Gaps | Machine Readability Opportunity | Medium | Medium | machines may extract these entities incompletely or skip them |
| 11 | Schema.org coverage is partial: Decoration (SDQ 52/100) | Machine Readability Opportunity | Medium | Medium | Agents can partially parse structured facts but key properties may be missing |
| 12 | No llms.txt published | Machine Readability Opportunity | Medium | Low | Agents have no machine-curated index of site content or declared access policy |

---

**Priority 1: Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2**

**Bucket:** Compliance Risk

**Finding:** Interactive elements lack an accessible name, role, or state that assistive technology and agents need to identify and operate them. This pattern appears 111 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Give every custom control an accessible name and the correct role and state (prefer a native button/link/input; add ARIA only where no native element fits). This satisfies WCAG 4.1.2.
- A named, correctly-roled control is also what lets an agent understand what an interactive element does.

**Effort:** Medium

---

**Priority 2: Insufficient Colour Contrast, WCAG 1.4.3**

**Bucket:** Compliance Risk

**Finding:** Text and its background do not meet the minimum contrast ratio, leaving the content hard to read for low-vision users and in bright-light conditions. This pattern appears 71 time(s) across the audited set, affecting low-vision users.

**What to change and why:**

- Raise the contrast ratio of the flagged text and its background to at least 4.5:1 for normal text (3:1 for large text). This satisfies WCAG 1.4.3 and keeps the text readable for low-vision users and in bright-light conditions.
- Fix the values in the design tokens or theme stylesheet once so the change propagates wherever the colour pair is reused, rather than patching individual pages.

**Effort:** Medium

---

**Priority 3: Info and Relationships Not Programmatically Determined, WCAG 1.3.1**

**Bucket:** Compliance Risk

**Finding:** Visual structure (headings, lists, tables, form labels) is not exposed in the markup, so assistive technology and machines cannot reliably reconstruct it. This pattern appears 69 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Expose the structure a sighted user sees (headings, lists, tables, form labels) in the markup so assistive technology and machines can reconstruct it. This satisfies WCAG 1.3.1.
- Use native semantic elements before ARIA; reach for ARIA only where no native element conveys the relationship.

**Effort:** Medium

---

**Priority 4: Duplicate ID Attributes, WCAG 4.1.1**

**Bucket:** Compliance Risk

**Finding:** Duplicate id attributes appear across the audited set, breaking label associations, ARIA references, and in-page anchor links. This pattern appears 36 time(s) across the audited set, affecting all assistive tech users.

**What to change and why:**

- Make every id attribute unique within each page; duplicate ids break label/for associations, aria-labelledby references, and in-page anchors. This satisfies WCAG 4.1.1.
- When the duplication comes from a repeated template module, fix it once in the template so every page that includes the module is corrected together.

**Effort:** Medium

---

**Priority 5: Non-text Content Missing Text Alternatives, WCAG 1.1.1**

**Bucket:** Compliance Risk

**Finding:** Images on the audited set carry no text alternative, so their content is unavailable to screen-reader users and to machines reading the page. This pattern appears 2 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Add descriptive alt text to every informative image; mark purely decorative images with empty alt (alt="") so assistive technology skips them. This satisfies WCAG 1.1.1 and gives screen-reader users the same information sighted users get.
- Where an image is the only content of a link, the alt text must describe the link destination, not the picture, so keyboard and screen-reader users know where the link goes.

**Effort:** Low

---

**Priority 6: No Bypass Mechanism for Repeated Blocks, WCAG 2.4.1**

**Bucket:** Compliance Risk

**Finding:** Pages repeat navigation blocks with no mechanism to skip them, forcing keyboard users to tab through every link on each page before reaching the main content. This pattern appears 1 time(s) across the audited set, affecting sighted keyboard users.

**What to change and why:**

- Add a skip link as the first focusable element, or wrap the repeated navigation in a landmark, so keyboard users can jump straight to the main content. This satisfies WCAG 2.4.1.
- A served-HTML skip link also gives server-side agents an explicit main-content anchor they can follow.

**Effort:** Low

---

**Priority 7: Heading Hierarchy Skips Levels**

**Bucket:** Compliance Risk

**Finding:** Heading levels skip on 3 audited page(s) (for example an h2 followed by an h4), so the document outline a machine or screen reader builds does not match the visible structure.

**What to change and why:**

- Order headings without skipping levels (an h2 followed by an h4 forces assistive technology and machines to guess the structure). Use heading level for hierarchy and CSS for visual size.
- A clean heading outline is the spine an agent uses to summarise the page; fixing it improves both accessibility and machine comprehension.

**Effort:** Low

---

**Priority 8: Semantic Structure 30/100**

**Bucket:** Compliance Risk

**Finding:** Semantic-structure score 30/100: regions carry no role, ARIA landmark, or descriptive class, so machines fall back on positional inference to determine meaning. The worst rendered page ([/en/the-hotel/our-story](https://www.bollants.de/en/the-hotel/our-story)) carries 137 generic containers of 216.

**What to change and why:**

- Replace the obvious landmark containers (header, nav, main, footer, aside) with their semantic elements and give the remaining containers meaningful class names, so machines stop falling back on positional inference to determine what each region is.
- Start with the page that scored worst; wrapping the landmarks alone usually drops the generic-container ratio sharply without restructuring the layout.

**Effort:** Medium

---

**Priority 9: Security headers absent: CSP**

**Bucket:** Cross-cutting

**Finding:** Security headers absent: CSP (All responses). Missing security headers increase exposure to content injection and clickjacking

**What to change and why:**

- Add the missing response headers at the server or CDN edge; each is a one-line directive that applies to all responses once configured.
- Set them once in the edge or server configuration rather than per page so coverage stays complete as new pages ship.

**Effort:** Low

---

**Priority 10: Structured Data Property Gaps**

**Bucket:** Machine Readability Opportunity

**Finding:** 29 Schema.org property gap(s) on the audited set across WebPage, Page, WebSite, Event: required or recommended properties are missing, so machines extract these entities less reliably.

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 11: Schema.org coverage is partial: Decoration (SDQ 52/100)**

**Bucket:** Machine Readability Opportunity

**Finding:** Schema.org coverage is partial: Decoration (SDQ 52/100) (Homepage). Agents can partially parse structured facts but key properties may be missing

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 12: No llms.txt published**

**Bucket:** Machine Readability Opportunity

**Finding:** No llms.txt published (Root). Agents have no machine-curated index of site content or declared access policy

**What to change and why:**

- Publish the missing discovery file at the site root so agents and crawlers can find the machine-curated index and access policy in one fetch rather than inferring them.
- Reference the file from robots.txt and the sitemap so crawlers have a reliable signal that it exists.

**Effort:** Low


---

## AI Agent Access Test

This test fetches the homepage using the User-Agent strings of known AI agents to verify whether this site is accessible at inference time.

**Table 7**

*AI Agent Access Test*

| AI Agent                         | User-Agent             | Status | Result     |
|----------------------------------|------------------------|--------|------------|
| ClaudeBot (Anthropic) | `ClaudeBot/1.0` | 0 | Blocked |
| GPTBot (OpenAI) | `GPTBot/1.0` | 200 | Accessible |
| ChatGPT-User (OpenAI) | `ChatGPT-User/1.0` | 200 | Accessible |
| PerplexityBot | `PerplexityBot/1.0` | 200 | Accessible |
| GoogleOther (Google AI) | `GoogleOther` | 200 | Accessible |
| Google-Extended (Google AI-training opt-out) | `Google-Extended` | 200 | Accessible |
| CCBot (Common Crawl) | `CCBot/2.0` | 200 | Accessible |
| Plain request (no UA) | *(empty)* | 200 | Accessible |

**Summary:** 7 of 8 tested agents can access the site. 1 agent(s) returned non-200 responses: ClaudeBot (Anthropic).

### Non-Standard Response Headers

No non-standard response headers detected. The site returns a clean, standard header set.

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how this site handles errors for both human visitors and machines.

**Table 8**

*Error Page Test*

| Check | Result |
|-------|--------|
| HTTP status code | 404 (correct) |
| Custom error page | Yes, custom error page (not a bare server default) |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | Yes |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | Present - links back to same-site content found |
| Internal navigation links | 109 links to same-site pages |
| MX governance tags | Absent |
| Schema.org JSON-LD | Present (the error page carries content schema, so machines can treat the 404 as a valid page; remove it) |

The site returns HTTP 404 for a non-existent URL - the correct signal. Machines detect the dead end immediately and move on without spending context on content that does not exist. The custom error page is a good foundation; adding navigation links back to valid sections turns a dead end into a recovery point for both human visitors and agents trying to complete a task.

---

## The Accessibility Tree

Machine visitors vary more than human ones. A small model on a phone works inside a tight context window. A foundation model arrives with browsing tools. A plain scraper never runs a model. A converter flattens each page to text before any model sees it; layout and scripts disappear in the process. A coding agent fetches a page once over HTTP and moves on. Raw markup, text projections, the accessibility tree, structured metadata - each kind of visitor reads a different layer. None of them read the visual layout, and you cannot know which one will arrive next.

Put the same meaning in every channel: page semantics, accessibility tree, metadata, and plain text. A page that stakes its meaning on one channel loses every visitor without it. The accessibility tree is the channel this section checks; it is shared by screen readers, so every fix here serves human and machine visitors alike.

Human visitors follow a path - step by step, page by page. Machines do not. They hit one page, once, and leave; they follow no path unless that page sends them somewhere. A site that hides its meaning across multiple pages is invisible to a machine landing in the middle. Every page has to stand alone for the machine while the journey still works for the human. These are complementary designs on the same pages.

This check reads each audited page as a tree consumer does and flags where behaviour, names, and structure fail to reach it. It covers what the WCAG scan does not: that section measures conformance per page; this one catches meaning that exists in only one channel.

**Table 9**

*The Accessibility Tree*

| Measure | Result |
|---------|--------|
| Accessibility-tree score | Not measured |
| Pages checked | 0 |

Every page passes all tree-level checks; no structural gaps block complete traversal.

No rendered pages were available to this check on this run, so the accessibility-tree channel was not measured. We report that as "not measured" rather than clean: a verdict needs at least one scanned page behind it. A wider crawl, or a re-run once rendered pages are cached, populates this section.

**Inspect the accessibility tree.** Right-click any page, choose Inspect, open the Elements panel, click the `>>` icon, choose Accessibility, and toggle "Show Accessibility Tree". The result is what tree consumers receive: if a control or a heading is missing from that view, it is missing for them. Chrome DevTools' AI Assistance panel also accepts "Review accessibility" against any element this report flags.

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds for a returning visitor may be served from a warm CDN edge. The same page on a genuine first visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section re-measures the slowest page from the crawl and a median-load control across several fresh visits, then compares those against the first-visit response. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what a repeat visitor experiences). The overall verdict for each page is the worse of the two, so a fast returning-visitor median cannot paper over a slow first-visit response.

**Method:** Each URL is re-measured across several fresh visits and scored on the median of those measurements. For each page we compare both the crawler's cold-cache baseline and the median of three fresh GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.bollants.de/en/gift-vouchers-extras`. A first-time visitor sees the cold-cache cost: the crawler recorded 1022 ms on its initial fetch. **First-visit verdict: Healthy**. Three fresh re-probes that followed returned 354ms, 309ms, 263ms, giving a returning-visitor median of **309 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://www.bollants.de/en/before-you-arrive`. A first-time visitor sees the cold-cache cost: the crawler recorded 473 ms on its initial fetch. **First-visit verdict: Healthy**. Three fresh re-probes that followed returned 389ms, 351ms, 316ms, giving a returning-visitor median of **351 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Server response time is within healthy bounds on the slowest page and a median-load page, for both first-visit and returning-visitor requests.

Origin response time for both the slowest and median-load pages stays inside the healthy band across repeated fresh visits. No server-side action is required from this audit.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /contao/
Disallow: /_contao/

Sitemap: https://www.bollants.de/sitemap.xml
```

The robots.txt declares 2 disallow paths; all other paths are open to crawlers and machines. It references the sitemap, so a machine reading the file can locate the URL index directly.

### sitemap.xml

**Table 10**

*sitemap.xml*

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 144 entries | Present |
| `<lastmod>` | No | Absent |
| `<changefreq>` | No | Missing (Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents still use it to gauge re-crawl cadence) |
| `<priority>` | No | Absent (Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents can still use it as a relative-importance hint) |

**Sitemap grade:** Minimal

The sitemap declares 144 URLs and grades Minimal. Lastmod is absent, so machines have no per-URL change signal to schedule re-crawls against. The sitemap omits changefreq and priority. Google dropped both as ranking signals in 2017, but non-Google crawlers and AI agents still read changefreq as a re-crawl cadence hint and priority as a relative-importance signal, so adding them is a low-effort way to broaden machine compatibility.

The sitemap lists 144 URLs; 187 of the pages this audit reached are not among them. The full set is recorded in the `www-bollants-de-pages-not-in-sitemap.csv` sidecar alongside this report. Adding them to the sitemap lets search engines and machines discover all content.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

No llms.txt found. llms.txt is no longer a new or unusual idea: Chrome's Lighthouse now checks for it by default ([Lighthouse llms.txt audit](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt)). A file at the site root that lists the pages and feeds worth reading gives machine readers a curated entry point, alongside robots.txt and sitemap.xml.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt on the audited host. Where llms.txt is the curated index, llms-full.txt concatenates the full content of every page into a single file: a convention made popular by Fern, Mintlify, and GitBook. Agents that consume it ingest the corpus in one fetch rather than crawling page-by-page, cutting token consumption by an order of magnitude. We recommend adding an llms-full.txt alongside llms.txt; the build can run from the same sitemap-driven generator that produces llms.txt and adds the page bodies inline.

Not found. A full content corpus at /llms-full.txt would let agents ingest the complete site in a single fetch. Without it, an agent that wants to index all content must crawl page by page.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

## AI-Content Marking Readiness

This section reports whether Bollants's site marks AI-generated or AI-manipulated content in a machine-readable way. Two frameworks define what that marking looks like: EU AI Act Article 50, which expects it from 2 August 2026, and the European Commission's voluntary Code of Practice on marking and labelling of AI-generated content, published 13 June 2026. The probe inspects the homepage for four markers an agent could read without a human in the loop, and records which are present.

<p><small><strong>Note:</strong> This section describes regulatory frameworks in general terms only. Nothing here is legal advice. Requirements vary by jurisdiction, organisation type, and use case. Consult qualified legal specialists for guidance specific to your situation.</small></p>

**Table 11**

*AI-Content Marking Readiness*

| Attribute | Value |
|-----------|-------|
| Origin | https://www.bollants.de |
| Reference | EU AI Act Article 50; European Commission Code of Practice on marking and labelling of AI-generated content (13 June 2026) |
| Readiness level | Level 0 (Unmarked) |
| Markers present | 0/4 |
| Verdict | unmarked |

### Markers

**Table 12**

*Markers*

| Marker | Present | Detail | Note |
| --- | --- | --- | --- |
| MX provenanceOrigin | no | None | Machine-authorship declaration carried in the file (MX). |
| IPTC Digital Source Type | no | None | Standard machine-readable AI-content marker a detector reads. |
| C2PA Content Credentials | no | None | Content-authenticity manifest signal (presence recorded, not verified). |
| AI-disclosure meta | no | None | Generic, non-standard disclosure tag. |

### Probe findings

- No machine-readable machine-authorship marking was found on the homepage: no MX provenanceOrigin, no IPTC Digital Source Type, no C2PA signal, no AI-disclosure meta. A machine reading this page cannot tell whether its content was generated or altered by a machine. From 2 August 2026 the EU AI Act Article 50 expects AI-generated or AI-manipulated content to carry exactly such a marker.
- Marking readiness here is about whether content announces machine authorship in a machine-readable way. MX provenanceOrigin declares the authorship; a content-authenticity watermark (C2PA, SynthID) proves a file is synthetic. The two are complementary, and this probe reports readiness, not compliance with any regulation.
- **No machine-readable authorship markers were found.** A machine reading this page cannot tell whether its content was generated by an AI tool or written by a person - absence of markers means undeclared, not "human." If this site's content is entirely human-authored, a positive declaration would make that explicit and provide a trust signal to regulators and AI citation engines. Options: add `MX provenanceOrigin: human` in page metadata, or apply IPTC Digital Source Type `humanCreated` to image assets. Either is better than silence.

A boundary this section keeps honest: a machine-authorship declaration (MX `provenanceOrigin`) states who or what authored the content; a content-authenticity watermark (C2PA, SynthID) proves a file is synthetic. They are complementary, and marking readiness here is a structural signal, not a certification that this site meets any regulation.

---

<!-- SECTION:SOFT_404 -->
## Soft 404s

The custom 404 page on this site returns a correct HTTP 404 status, but it carries Schema.org content markup (the same structured data a real content page would carry). For a person the 404 is obvious. For a machine the JSON-LD is the signal that a valid, describable resource is present, so an agent reading the structured data treats the error page as a real page and can extract entities from it. This is a soft 404 at the machine layer even though the status code is right. The fix is to strip content schema from the error page so it presents to a machine as the error it is, and reserve content JSON-LD for addresses that resolve.

We probed 53 addresses that should answer 404 when they are absent; 0 returned a soft 404 instead. Among the well-known discovery paths, 0 of 45 were soft 404s. Severity: schemaOnError.

<!-- END:SOFT_404 -->

---

## Structured Data Inventory

**Table 13**

*Structured Data Inventory*

| Schema Type  | Pages | Mandatory fields present | Optional fields added | Notes                                    |
|--------------|-------|--------------------------|-----------------------|------------------------------------------|
| ImageObject | 8 | 100% | 100% | Complete |
| ListItem | 12 | 100% | 100% | Complete |
| PostalAddress | 12 | 100% | 100% | Complete |
| Hotel | 12 | 100% | 100% | Complete |
| WebPage | 12 | 8% | 100% | 92% of required fields missing |
| GeoCoordinates | 12 | 100% | 100% | Complete |
| OpeningHoursSpecification | 12 | 100% | 100% | Complete |
| BreadcrumbList | 12 | 100% | 100% | Complete |
| Page | 12 | 100% | 100% | Complete |
| Organisation | 1 | 100% | 100% | Complete |
| WebSite | 1 | 100% | 25% | All required fields present; 75% of optional fields missing |
| Place | 1 | 100% | 100% | Complete |
| Event | 1 | 100% | 33% | All required fields present; 67% of optional fields missing |
| Audience | 1 | 100% | 100% | Complete |
| ItemList | 1 | 100% | 100% | Complete |

**Structured Data Quality:** 52/100 - Schema.org data is present and valid; recommended properties and entity links are sparse.\
**Coverage:** 12 pages with JSON-LD out of 12 total (100%)\
**Unique types:** 15

*Schema types are from Schema.org - a shared vocabulary machines use to read content without guessing. "Mandatory fields present" shows whether the required properties for that type are filled in. "Optional fields added" shows bonus properties that help machines understand the content more precisely. Higher is better on both.*

Across the 12 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what Bollants earns in each.

**Table 14**

*SDQ Score Breakdown*

| Component                       | Earned | Max | Meaning                                                       |
|---------------------------------|--------|-----|---------------------------------------------------------------|
| Presence | 10 | 10 | schema.org JSON-LD is present on the page |
| Required property coverage | 0 | 25 | Every entity carries the properties its type requires |
| Recommended property coverage | 15 | 15 | Entities carry the properties their type recommends |
| Entity richness | 5 | 15 | Entities are described with enough properties to be useful |
| Cross-entity references | 10 | 15 | Entities reference each other (nested types and @id links) |
| Linked-data signals | 3 | 10 | Linked-data properties present (sameAs, mainEntityOfPage, isPartOf, about, mentions) |
| Vocabulary validity | 9 | 10 | Every @type is a valid Schema.org type |
| **Total** | **52** | **100** | |

We found the lowest-scoring components are Required coverage and Linked-data signals.  
These gaps mean the site's structured data is shallow and poorly connected, keeping its schema maturity at Decoration.

### Vocabulary Validity Issues

We detected 12 @type values that are not part of the Schema.org vocabulary. Machines that strictly validate against Schema.org will skip these entities entirely.

**Table 15**

*Vocabulary Validity Issues*

| Page | Invalid @type | Suggested replacement |
|------|---------------|----------------------|
| /en | Page | @type |
| /en/the-hotel/our-story | Page | @type |
| /en/gift-vouchers-extras | Page | @type |
| /en/before-you-arrive | Page | @type |
| /en/the-hotel/photo-gallery | Page | @type |
| /en/living | Page | @type |
| /en/living/rooms-suites/details | Page | @type |
| /en/living/whats-included | Page | @type |
| /en/living/enquire-about-a-room | Page | @type |
| /en/special-offers | Page | @type |
| /en/special-offers/details | Page | @type |
| /en/spa-im-park | Page | @type |

---

## Structured Data Findings

We identified 29 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`www-bollants-de-structured-data-findings.csv`](www-bollants-de-structured-data-findings.csv). The 29 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

**Table 16**

*Structured Data Findings*

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| WebPage | required | name | 12 | 12 | Page has no machine-readable title beyond <title> element |
| Page | vocabulary | @type | 12 | 12 | Schema type is not recognised by the Schema.org vocabulary  -  likely a typo or invented type |
| WebSite | recommended | image | 1 | 1 | Site has no logo / hero image declared in structured data |
| WebSite | recommended | datePublished | 1 | 1 | No site-level publish date for crawler context |
| WebSite | recommended | author | 1 | 1 | Site has no top-level author/owner declared |
| Event | recommended | offers | 1 | 1 | Event has no ticket pricing structure |
| Event | recommended | endDate | 1 | 1 | Event has no end date  -  agents assume single point in time |

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

## Marker Reachability

**Table 18**

*Marker Reachability*

| Marker                            | In served   | In rendered | In head | Reachable <250KB | Injected by JS |
|-----------------------------------|-------------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Yes | Yes | Yes | Yes | No |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Yes | Yes | Yes | Yes | No |
| Twitter Card meta tags | Yes | Yes | Yes | Yes | No |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Not present | Not present | n/a | n/a | n/a |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Not present | Not present | n/a | n/a | n/a |

All detected markers are present in the served HTML on the pages we audited. Server-side and browser-based agents see the same signals on the sampled pages.

---

## Schema Maturity Level

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work. Maturity is a structural classification: it depends on what the markup carries (typed blocks, required properties, cross-references, external identifiers), not on the SDQ score the markup happens to earn. A page can sit at Level 1 with a high SDQ score and at Level 3 with a moderate one. Score and level are reported separately.

**Table 19**

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

The classification is conservative: every Schema.org block on every audited page must clear a level's bar for this site to claim it, so a handful of thin blocks or pages without markup caps the level even when most pages individually sit higher. That is deliberate. An agent does not choose which page it lands on, so the level reflects what the weakest landing point guarantees.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. A break at any stage propagates to all subsequent stages.

**Table 20**

*5-Stage MX Journey*

| Stage | Name              | Status      | Score | Key Metric                                        |
|-------|-------------------|-------------|-------|---------------------------------------------------|
| 1 | Discovery | Pass | 89 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 50 | Schema.org: Hotel, PostalAddress, GeoCoordinates (50% required properties) |
| 3 | Search & Compare | Pass | 70 | Commerce schema with 1 supporting patterns |
| 4 | Service Inquiry Readiness | Partial | 33 | Pricing visible but no Offer schema for agent parsing |
| 5 | Transaction (N/A for services) | Site type does not require | -- | No transaction forms detected |

*Each stage carries its own pass threshold, so Status and Score are not comparable across rows: a score that passes one stage can fall short on another with a stricter bar.*

Stage 2 (Citation) is the bottleneck in the agent journey. Because each stage builds on the one before it, the stages after it cannot improve until this one does. It is the highest-priority place to start; the stage's key metric is Schema.org: Hotel, PostalAddress, GeoCoordinates (50% required properties).

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, condensing by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Fail · 1/12
  - *Means:* 1 page(s) flag for truncation risk; 1 of them exceed the 250 KB hard ceiling, the rest place main content too far into the document. Agents with limited fetch windows may stop reading before reaching the main content.
  - *Data:* The flagged page is 338 KB with main content starting at 7 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. Page: https://www.bollants.de/en/the-hotel/photo-gallery
- **SPA Shell** - Pass · 0/12
- **Soft 404** - Fail · catch-all
  - *Means:* The error page returns a correct HTTP 404, but it carries Schema.org content markup. A machine reading the JSON-LD treats the 404 as a valid content page, the same machine-facing confusion a soft-404 creates. Remove the content schema from the error page so machines read it as the error it is.
  - *Data:* The custom 404 page returns a correct HTTP 404 status but carries Schema.org content markup, so a machine reading the JSON-LD treats the error page as a valid content page.
- **Boilerplate Burial** - Pass · 0/12
- **Tabbed Disclosure** - Pass · 0/12
- **Delayed Content Start** - Pass · N/A
- **Broken Code Fences** - Pass · 0/12
- **HTTP Content Negotiation (Vary)** - Pass · 0/12
- **Cross-Host Redirect** - Pass · 0/12
- **Generic Headings** - Pass · 0/12
- **Body Content Ratio** - Pass · N/A
- **Inline Tag Bloat** - Fail · 12/12
  - *Means:* 12 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches.
  - *Data:* 40 element(s) > 500 bytes. Largest single-page inline CSS block: 0 B. Largest single-page inline JS block: 9164 B. See www-bollants-de-pipeline-inline-tag-bloat-pages.csv (12 pages).
- **Head Weight** - Pass · N/A

**Pipeline Survivability score:** 91/100
Pages reach agents intact with no observed survivability issues.

Across the audited set, every page shows Inline Tag Bloat, which can cause machines to truncate or misread content because the excessive tags overwhelm parsing logic. Truncation Risk also appears on some pages, potentially leading agents to miss parts of the text. Addressing the inline tag bloat-by reducing unnecessary markup-offers the greatest impact and provides an opportunity to strengthen the site's resilience for machine consumption.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check set, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Semantic Structure: landmark roles for machine navigation

When a page's containers are generic `<div>` elements with no role, no ARIA landmark, and no class name that describes what they are, machines lose structural context and fall back on positional inference ("the third region from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is missing. Component frameworks emit generic containers by design, so this is usually a component-level configuration fix (add landmark roles), not a rebuild.

We measure semantic structure on both served and rendered HTML so we can tell whether the generic containers are in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page whose regions carry landmark roles; score 0 is the worst case (every region is a generic nested container with no role).

**Table 21**

*Semantic Structure: landmark roles for machine navigation*

| Source | Score (band) | Generic-container stats | Top container selectors |
|--------|--------------|----------------|--------------------|
| Served HTML | 30/100 (many generic containers) | 139 generic containers (66% of containers, depth 6) | `div.line1` (68), `div.line2` (68), `div.decolines` (59), `div.inside` (57), `div.line3` (55) |
| Rendered HTML | 32/100 (many generic containers) | 137 generic containers (63% of containers, depth 6) | `div` (78), `div.line1` (68), `div.line2` (68), `div.decolines` (59), `div.inside` (57) |

**Worst page (both):** [/en/the-hotel/our-story](https://www.bollants.de/en/the-hotel/our-story)

On the rendered surface of the worst page (https://www.bollants.de/en/the-hotel/our-story), the generic-container ratio is highest, with 63 % of elements being bare divs; this forces machines to lose structural context and rely on positional inference.  
The pattern is surface-wide rather than deeply nested, as the deepest bare chain is only six levels deep; without evidence of a component framework, it suggests late-stage JavaScript injection or drag-and-drop builders are adding generic containers.  
A low-cost first step is to wrap key landmarks-header, nav, main, footer, aside-with their semantic elements or landmark roles and assign meaningful class names to the remaining content; this will reduce the generic-container ratio without altering layout.

---

## Security Headers

**Table 22**

*Security Headers*

| Header                          | Status   | Purpose                                          |
|---------------------------------|----------|--------------------------------------------------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | Yes | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

One of the five standard security headers is absent on every audited response: Content-Security-Policy (CSP). Adding it at the origin-server or CDN edge closes the corresponding attack surface without touching application code.

**Coverage:** 0 of 12 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/en`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/en/the-hotel/our-story`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/en/gift-vouchers-extras`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/en/before-you-arrive`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/en/the-hotel/photo-gallery`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/en/living`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/en/living/rooms-suites/details`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/en/living/whats-included`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/en/living/enquire-about-a-room`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/en/special-offers`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/en/special-offers/details`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/en/spa-im-park`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes

HTTPS: 12/12 | HSTS: 12/12 | CSP: 0/12 | X-Frame-Options: 12/12 | X-Content-Type-Options: 12/12

---

## Data Quality and Consistency

### Cross-Page Consistency

**Table 23**

*Cross-Page Consistency*

| Pattern                          | Coverage | Pages missing it   |
|----------------------------------|----------|--------------------|
| Schema.org JSON-LD | 100% | None |
| MX governance tags | 0% | 12 |
| Open Graph tags | 100% | None |
| Twitter Card tags | 100% | None |
| Skip link | 0% | 12 |
| llms.txt link tag | 0% | 12 |
| Canonical URL | 0% | 12 |
| Exactly 1 H1 | 75% | 3 |
| Code examples present | 0% | 12 |
| Self-contained sections | 100% | None |
| Error/troubleshooting docs | 0% | 12 |
| Lighthouse heading compliance | 75% | 3 |

**Overall Consistency:** 55%
Most metadata patterns are consistent; a few gaps mean some pages deliver weaker signals than others.

Some pages in the 12-page sample are missing metadata patterns that others carry. Machines hitting different pages get different quality data. The Missing Pages column shows where to focus on the sampled pages.

### Content Consistency

The audited set shows consistent metadata patterns across pages, with no brand-name, canonical-URL, meta-description, or entity divergence detected.

**Table 24**

*Content Consistency*

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Brand-name parity | Pass | Brand name appears consistently across all 12 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 12-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

Every consistency check passes, so an agent reading any two audited pages receives the same brand, canonical, and entity signals.

---

## Inline Code Duplicates

We found 9 identical inline fragment(s) repeated across multiple pages, totalling 1271 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

**Table 25**

*Inline Code Duplicates*

| Type | Bytes per fragment | Appears on N pages | Preview                                                          |
|------|-------------------:|-------------------:|------------------------------------------------------------------|
| css | 107052 | 12 | /*! * CleanSlate *   github.com/premasagar/cleanslate * */   |
| js | 4732 | 12 | $(function () {       var $quickform  = $('.quickform');     |
| css | 1535 | 12 | @font-face {         font-family: 'Roboto';         font-sty |
| js | 643 | 12 | function generateUUID() {     return 'xxxxxxxx-xxxx-4xxx-yxx |
| js | 423 | 12 | !function(b,e,f,g,a,c,d){b.fbq\|\|(a=b.fbq=function(){a.callMe |
| js | 387 | 12 | //

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src=".">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## Infrastructure and Hosting

Hosted directly with **Hetzner Online GmbH**. Platform is estimated to be **Unknown Platform**, though signals are ambiguous.

---


We linked no PDFs from the 12-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

PDFs are part of the machine-readable estate but sit outside this HTML audit's scope. A dedicated PDF review checks each public document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified) and returns a per-document verdict.

---

## Content Uniqueness

12 of 12 pages have significant shared content, giving machines redundant information per page and reducing the value of multi-page crawls. Every flagged page consumes crawl budget without adding distinct knowledge to an agent's model of the site.

**Table 26**

*Content Uniqueness*

| Page | Unique content | Band |
|------|---------------|------|
| /en/gift-vouchers-extras | None | Low Machine Value |
| /en/living/rooms-suites/details | None | Low Machine Value |
| /en/special-offers/details | 2% | Low Machine Value |
| /en/the-hotel/our-story | 3% | Low Machine Value |
| /en/the-hotel/photo-gallery | 3% | Low Machine Value |
*Showing the top 5 of 10 pages by duplication level. Full per-page scores are in `www-bollants-de-content-uniqueness.csv`.*
The remaining 2 pages all scored Distinctive or Expected Boilerplate.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 290 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Semantic Structure improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

**Table 27**

*What's Next*

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4, P5, P6, P7, P8 (Compliance Risk) | Priority 1, 2, 3, 4, 5, 6, 7, 8 resolved: WCAG 2.1 AA accessibility compliance restored |
| Full Implementation | P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12 (P1-P12) | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | The full machine-readable estate, beyond the web pages |
| Data-Sovereign Option | Regulated industries | Run the full audit pipeline on your own infrastructure - no client content leaves your network |

This audit is a starting point. The outcome we work toward is a site any machine can read, trust, and act on, and a dated, attested record you can show to a regulator, a partner, or an acquirer on request. Reaching it (structured data, discovery files, accessibility, governance metadata, and re-audit on a schedule you set) is available as a managed service. We also run training sessions that give development teams the MX vocabulary and implementation patterns directly, so the gap between findings and fixes is weeks, not quarters. To take any of it further, contact CogNovaMX Ltd at <info@cognovamx.com>.

---


### Audit Scores

Each dimension is measured independently. Served dimensions reflect each page before JavaScript runs; Rendered dimensions reflect what a browser produces after JavaScript executes. The Notes column explains the measurement method for each score.

**Table 28**

*Audit Scores*

| Dimension | Score | Band |
|-----------|-------|------|
| Served-HTML Structure | 59/100 | Good |
| Accessibility | 57/100 | Good |
| SEO (all pages) | 91/100 | Excellent |
| SEO (content pages) | 91/100 | Excellent |
| MX Stack Completeness | 59/100 | Good |
| Structured Data Quality | 52/100 | Good |
| Discovery Readiness | 40/100 | Could Be Better |
| Heading Quality | 84/100 | Excellent |
| Agent Readability | 46/100 | Could Be Better |
| Pipeline Survivability | 91/100 | Excellent |
| Cross-Page Consistency | 55% | Good |

---

## Working With Us

We run the automated pass and surface findings to priority. The next step is remediation, and we offer it in several forms:

- **Full-render, all-pages audience and age-awareness review.** We classify the entry page in this audit; the full-render version covers every page - age-assurance, consent, and date-of-birth data collection across the whole estate.
- **Full-site qualitative review.** We read every audited page for the content-quality patterns the automated pass samples only on the first few pages.
- **PDF estate accessibility remediation.** We tag the structure, declare conformance, and record an independent check across the document estate, aligned with Directive (EU) 2019/882.
- **On-premise, regulated-sector audit.** We run the whole pipeline against a local model on infrastructure you control, so no audited content leaves your network.
- **Implementation and remediation.** We bring the technical context from these findings into the work that resolves them.

To set up a remediation plan, contact info@cognovamx.com.

---

## Appendix A: Pages Audited

- **/en**
  SEO 98 · A11y 55 · Backend 85 · Served 61 · Rendered 23
- **/en/the-hotel/our-story**
  SEO 97 · A11y 55 · Backend 85 · Served 61 · Rendered 32
- **/en/gift-vouchers-extras**
  SEO 84 · A11y 60 · Backend 95 · Served 61 · Rendered 23
- **/en/before-you-arrive**
  SEO 97 · A11y 65 · Backend 85 · Served 71 · Rendered 42
- **/en/the-hotel/photo-gallery**
  SEO 94 · A11y 55 · Backend 85 · Served 71 · Rendered 42
- **/en/living**
  SEO 95 · A11y 55 · Backend 85 · Served 45 · Rendered 23
- **/en/living/rooms-suites/details**
  SEO 78 · A11y 60 · Backend 85 · Served 59 · Rendered 30
- **/en/living/whats-included**
  SEO 92 · A11y 50 · Backend 85 · Served 61 · Rendered 32
- **/en/living/enquire-about-a-room**
  SEO 95 · A11y 45 · Backend 85 · Served 44 · Rendered 23
- **/en/special-offers**
  SEO 91 · A11y 55 · Backend 85 · Served 61 · Rendered 32
- **/en/special-offers/details**
  SEO 77 · A11y 65 · Backend 85 · Served 49 · Rendered 23
- **/en/spa-im-park**
  SEO 98 · A11y 60 · Backend 85 · Served 71 · Rendered 32

*Backend: score for HTML served without JavaScript. Served: AI suitability from served HTML. Rendered: AI suitability after JavaScript.*

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. External links are not tracked; this inventory covers same-host `<a href>` links only. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

Per page, internal links range from 39 to 199, averaging 59 across 13 crawled pages. That is denser than typical (benchmark median 20 per page).

**Table 29**

*Appendix B: Link Inventory*

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 773 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |

At 59 internal links per page on average, the internal navigation graph sits above the typical range for sites of this type (benchmark median 20). No hash-fragment links were found - the site navigates entirely by full-page URL, which is standard for content and service sites. No inline mailto or tel links appear in page content; direct contact routes through a form.

---

## Appendix C: Image Efficiency

We reviewed 316 images across the audited set: 1 SVG, 36 PNG and 279 JPEG. 281 of 316 (88.9%) carry alt text, leaving 35 without it. Each missing alt attribute is a place where a screen-reader user or a machine reading the page gets no description of what the image shows.

On loading strategy, 166 images are marked `loading="lazy"` and 0 `loading="eager"`, while 150 carry no loading attribute at all. No attribute is not the same as eager: the browser decides for itself when to fetch, which removes the explicit control that lazy and eager give you. Setting an explicit attribute on those images makes the fetch behaviour predictable for browsers and machines alike.

JPEG and PNG account for 99% of the 316 images (279 and 36 files respectively). None use WebP, the modern format that typically reduces file size by 25-35% over PNG or JPEG with no visible quality loss.

**Table 30**

*Appendix C: Image Efficiency*

| Format | Count | Share |
|--------|-------|-------|
| SVG | 1 | 0% |
| PNG | 36 | 11% |
| JPEG | 279 | 88% |

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.x (automated WCAG 2.1 AA accessibility checks, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Accessibility is assessed with an open-source automated testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

Accessibility testing here is automated only. Automated tools reliably detect roughly a third to a half of WCAG 2.1 AA success criteria - typically contrast, missing alternative text, form-label association, and document-structure errors. They cannot evaluate the criteria that need human judgement: keyboard operability and focus order, the absence of keyboard traps, logical reading and tab sequence, meaningful link and heading text in context, error-recovery flows, and cognitive load. A clean automated pass is a necessary baseline, not a certification: an automated tool cannot certify WCAG 2.1 AA conformance, and a full conformance claim needs manual expert testing and assistive-technology walkthroughs. The accessibility score reflects the automated-checkable subset only.

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: No platform detected. No platform-specific fingerprint was detected, so the audit used conservative default rate limits, paced slowly enough to stay below typical shared-host thresholds, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** None detected. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from the audited pages. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 12 pages examined | Platform: Unknown Platform | Analysis method: Automated checks with expert review | robots.txt: Present (4 directives)

**Measurement completeness:** Every probe completed during this audit, with no network errors or timeouts. The findings below rest on a full data collection.

**What comes next.** This report is the foundation, not the finish line. Implementing the recommendations requires the technical knowledge that produced them; we bring that forward. Our implementation engagements begin where this audit ends.

We work toward a site - and an estate of documents beyond it - that any machine can read, trust, and act on. It holds its own dated, attested record for anyone who needs to verify that claim. Reaching it - structured data, discovery files, accessibility, governance metadata, and re-audit on a regular schedule - is available as a managed service or as licensed tooling your team runs independently. We also run training sessions that give development teams the MX vocabulary and implementation patterns directly. To take any of it further, contact CogNovaMX Ltd at info@cognovamx.com.

### About This Report

We audited 12 pages across www.bollants.de's site using the Web Audit Suite. We also reviewed the site's discovery files (sitemap.xml). We review each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image efficiency, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before completing this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as characteristics of that platform rather than site-specific gaps. When new agent patterns emerge, we update what we look for.

**How we build it.** We use scripted SOPs running deterministic checks rather than inference. The crawl, the served-versus-rendered comparison, the structured-data extraction, the accessibility passes, the discovery-file probes, the platform fingerprinting and the per-section scoring all run as scripts producing byte-identical outputs on the same input. A small number of stages run a judgement pass over the resulting report; that is the only inference layer. Those judgement passes can run against a local model, so the whole audit runs inside the organisation's own network with nothing leaving it: relevant where content is regulated or privacy-sensitive. Every AI decision made during the audit is recorded in the provenance layer attached to this document - the AI and deterministic evidence sidecars embedded in the PDF. The only connection the audit makes to the internet is fetching the pages of the website being audited. Nothing is sent out.

Our scoring criteria follow published MX standards and proposed specifications maintained at [The Gathering](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. MX addresses governance and machine experience metadata in the areas those standards do not cover. The methodology behind every section of this report is documented in full in MX: The Protocols at [MX: The Protocols](https://mx.allabout.network/books/).

**What we cover here, and what MX covers.** This report looks at the web estate: every page served over HTTP, examined for metadata, structured data, accessibility, and what machines can read. MX runs deeper, covering every document type a business publishes (PDFs, data feeds, API responses, structured documents) and the machines that read them. The web estate is the foundation; the rest builds on it.

**Audit scope.** Findings throughout this report describe what we observed on the 12 HTML pages we examined in depth, drawn from a sitemap of 144 URLs. We also reviewed the site's discovery files (sitemap.xml). Structural findings - a missing header, a soft 404 pattern, a discovery file gap - hold across the full estate and are noted as such. Verdicts scoped to the sampled pages should not be extrapolated to the full estate without a wider audit.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. The Discovery Files section below records its presence, transport type, and sitemap registration, and covers the two structural problems (content type and discovery) that limit most implementations.

---

## Appendix E: Markdown Content Negotiation

**Table 31**

*Appendix E: Markdown Content Negotiation*

| Check | Result |
|-------|--------|
| URL probed | https://www.bollants.de |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=UTF-8 |
| Markdown served | No  -  server returned HTML regardless of Accept header |

The site returns standard HTML to all requests, including those carrying `Accept: text/markdown`. Markdown content negotiation is a feature that lets a server deliver a lighter, markup-free page to agents that request it - reducing the parsing load on the agent side. It is an optional enhancement with no compliance obligations attached. One consideration before enabling it: Markdown conversion strips `<head>` metadata, governance fields, and discovery signals, so any page carrying MX fields, canonical URIs, or structured data in the document head would lose those signals for agents that receive the Markdown version. Whether the reduction in parsing cost outweighs that loss is a publisher decision; this probe records the current state.

---

\clearpage

## Further Reading

The reference material cited in this report. Click the link on screen or scan the QR code on paper: both encode the same URL.

**Table 32**

*Further Reading*

| Scan | Link and description |
| :----: | -------------------- |
| ![Appendix R QR](assets/qr/appendix-r.png){ width=15mm } | **[Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)**: the methodology behind the Pipeline Survivability measurements used in this report.\ <https://mx.allabout.network/books/appendices/appendix-r.html> |
| ![Appendix S QR](assets/qr/appendix-s.png){ width=15mm } | **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**: the full set of reading-resilience checks scored in the Agent Reading Pipeline section.\ <https://mx.allabout.network/books/appendices/appendix-s.html> |
| ![Appendix M QR](assets/qr/appendix-m.png){ width=15mm } | **[Appendix M: Index of Metadata](https://mx.allabout.network/books/appendices/appendix-m.html)**: the field dictionary governing the MX governance tags referenced in this report.\ <https://mx.allabout.network/books/appendices/appendix-m.html> |
| ![llms.txt guide QR](assets/qr/llms-txt-guide.png){ width=15mm } | **[Why llms.txt Probably Isn't Working](https://mx.allabout.network/blog/llms-txt-guide.html)**: the two structural problems most llms.txt implementations have (MIME type and sitemap registration).\ <https://mx.allabout.network/blog/llms-txt-guide.html> |
| ![The Gathering QR](assets/qr/tg-community.png){ width=15mm } | **[The Gathering](https://tg.community)**: the community-led open-standards body that governs the MX metadata standard.\ <https://tg.community> |
| ![MX Books QR](assets/qr/books-index.png){ width=15mm } | **[MX: The Protocols](https://mx.allabout.network/books/)**: the practitioner reference covering the scoring methodology and implementation patterns behind this report.\ <https://mx.allabout.network/books/> |
| ![Provenance Gap QR](assets/qr/provenance-gap.png){ width=15mm } | **[The Provenance Gap](https://mx.allabout.network/blog/the-provenance-gap.html)**: the structural distinction between content that describes a claim and content that evidences it - and why machines treat unverified claims differently.\ <https://mx.allabout.network/blog/the-provenance-gap.html> |
| ![MX Inspector QR](assets/qr/mx-inspector.png){ width=15mm } | **[MX Inspector](https://mx.allabout.network/tools/pdf-inspector.html)**: drop this PDF into the browser-based inspector to read the full provenance chain, attestation, and machine-readability score - no command-line tools required.\ <https://mx.allabout.network/tools/pdf-inspector.html> |

---

\clearpage

## This Report's Own Evidence Chain

MX is to machines what UX is to users: it asks not whether a human can read this report, but whether a machine can read it, verify it, and act on it. A standard is credible only when we run on it ourselves, so we built this report to the standard it measures. You can inspect this PDF and read every claim it makes directly in your browser at the [MX Inspector](https://mx.allabout.network/tools/pdf-inspector.html) - no command-line tools, no login, no installation required. Drop the file, read the chain.

This report carries its own provenance. Every step that produced it is recorded in two adjacent JSON sidecars - one AI, one deterministic - and the full evidence chain travels inside the PDF's XMP metadata: extract it with `exiftool -b -XMP-mx:ProvenanceAiPayload www-bollants-de-report.pdf | jq .`. The PDF is a tagged ISO 14289-1 (PDF/UA-1) Level 2 document with a complete reading-order structure tree. What this audit measures on a client's behalf, this deliverable meets.

Machine-readable content is visible to agents and validators. Machine-trustworthy content adds a provenance layer - a dated, attested record that names who published it and under what rubric. Readable is what MX makes content; the provenance layer is what makes it trustworthy. The two do different jobs, and this report carries both. It is an example of what that looks like in practice.

\clearpage

## Practice What We Preach: This Audit's Own Evidence Chain

A standard is credible only when we run on it ourselves. We hold this audit deliverable to the same MX standards we apply to the audited site; consider this working proof of the practice it recommends. Every consequential step that produced this report (LLM-driven prose passes, deterministic gate verdicts, multi-agent attribution probes, repair iterations) is recorded in two adjacent JSON sidecars next to this PDF.

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the output it produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the operator. This PDF holds the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `*.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain is at `*.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload www-bollants-de-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output includes a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did. We prefer determinism to inference: explicit over inferred, recorded over remembered, a result you can reproduce over one we could only explain. Where a check can be made by a rule, a rule makes it, and the rule leaves a record rather than an opinion. That is why this chain shows what we did instead of asking you to trust a summary of it.

**Verify this report yourself - no tools, no login, no installation.** Drop this PDF into the [MX Inspector](https://mx.allabout.network/tools/pdf-inspector.html) to read the full provenance chain, operator identity, and attestation in your browser, or run three commands directly against the file:

1. Extract the full AI evidence chain from the PDF: `exiftool -b -XMP-mx:ProvenanceAiPayload www-bollants-de-report.pdf | jq .`
2. Confirm the operator identity: the JSON contains `operator.name`, `operator.email`, and `operator.organisation` naming the accountable individual.
3. Cross-reference the sidecar: `diff <(jq .auditId www-bollants-de-report.provenance.ai.json) <(exiftool -b -XMP-mx:ProvenanceAiPayload www-bollants-de-report.pdf | jq .auditId)`; both should return the same `auditId`.

The evidence does not require trust. It requires tools. That is the difference between a governance claim and a governance record.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` with the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the operator distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it to ourselves.

This report serves two audiences: the humans who read it, and any machine that encounters it later - a validator checking the provenance chain, an assistant answering a query, or a regulator walking from a compliance clause to the evidence behind it. One deliverable, two audiences, no guessing.

## Be Ready

A site audit measures what machines read from your web estate. MX readiness reaches further.

**Three audits. One standard. Working together.**

**Site Audit.** This report. What machines read from your web estate: structure, metadata, accessibility, provenance, pipeline survivability. A dated, attested record any third party can verify.

**Repository Audit.** What agents see inside your codebase. Most repositories were never written for the AI agents, copilots, and build tools now working inside them. The repository audit scores self-description, boundaries, checkability, and provenance - and maps the path to a repo that describes itself, checks its own rules, and repairs its own drift.

**Developer Audit.** Whether your team is ready. The MX vocabulary, the implementation patterns, and the habits that keep an estate machine-ready as the standard evolves. The goal is a team that holds the practice itself, not a dependency on outside help.

All three audits run locally. No content leaves your infrastructure unless you authorise it. You need all three in sync for MX readiness. Contact CogNovaMX to scope the full picture: [info@cognovamx.com](mailto:info@cognovamx.com)

---

**Date:** 12 July 2026\
(c) 2026 CogNovaMX Ltd. All rights reserved.

*This is a sample run over a subset of the site. CogNovaMX Ltd can scope a full-estate audit.*

