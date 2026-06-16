---
title: "Dangerdevices: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-06-16"
modified: "2026-06-16"
client: "Dangerdevices"
clientSlug: "dangerdevices-com"
clientUrl: "https://dangerdevices.com"
reportId: "dangerdevices-com-WEB-AUDIT-20260616"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-06-16"
auditCommand: "node scripts/audit-pipeline.js https://dangerdevices.com --pages 10 --date 2026-06-16"
description: "Executive audit report reviewing accessibility, performance, SEO, structured data, and AI agent compatibility for Dangerdevices"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 70
accessibilityScore: 100
seoScore: 53
llmSuitabilityScore: 68
totalIssues: 0
pagesAudited: 11
version: "1.0"
pipelineVersion: "1.1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-06-16/dangerdevices.com/dangerdevices-com-report.md
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Dangerdevices covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Dangerdevices", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  # The single cog that manages this pipeline artefact, so a reader never
  # has to infer the steward (scripts/lib/managed-by.cjs is the resolver).
  x-mx-managedBy: mx-audit.cog.md
  runbook: "Executive audit report for Dangerdevices. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in the top-level auditCommand field. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-16/dangerdevices.com/dangerdevices-com-report.md', which validates the report then renders it through scripts/bin/mx.pdf.sh."
  generate:
    command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-16/dangerdevices.com/dangerdevices-com-report.md"
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/dangerdevices.com/result-copy/dangerdevices-com-report.pdf"
    description: "Generate PDF audit report for Dangerdevices"
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
    sidecar: "dangerdevices-com-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "dangerdevices-com-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 16 June 2026\
**Report ID:** dangerdevices-com-WEB-AUDIT-20260616

---

\clearpage

## About This Report

We audited 11 pages across dangerdevices.com's site using the Web Audit Suite. We review each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image efficiency, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

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
| Performance | **70**/100 | `#############-----` |
| Accessibility | **100**/100 | `##################` |
| SEO | **53**/100 | `##########--------` |
| Served-HTML Structure | **68**/100 | `############------` |
| MX Stack Completeness | **32**/100 | `######------------` **(!)** |
| Agent Readability | **54**/100 | `##########--------` |
| Pipeline Survivability | **90**/100 | `################--` |

*The three machine metrics measure different things. **Served-HTML Structure** is the semantic markup an agent reads before JavaScript runs; **Agent Readability** is how easily the content can be quoted once reached; **Pipeline Survivability** is whether a page survives an agent's fetch and ingest. A site can score low on one and high on another.*

Agent Readability was adjusted down by 13 points for site-wide gaps a machine cannot work around:

- **Origin server is slow for an agent fetch** (-5): origin verdict slow, slowest median 661ms
- **Bare-div nesting (div soup) across most pages** (-8): 9 of 11 pages are heavy with bare-div nesting

Across the 11 pages we examined, your site delivers a fully accessible experience-zero WCAG AA issues-and a solid SEO foundation that positions content well for human visitors. The clear product focus and concise copy help users find what they need quickly, reinforcing the brand’s reputation for safety and reliability.

The headline opportunity is to embed MX governance metadata on each page. Adding mx:status, mx:contentType, mx:audience, canonicalUri, and provenance markers will give machines the context they need for accurate comprehension. With AI Suitability already at 68/100, your HTML can be parsed; the missing governance layer prevents full machine understanding and keeps the site at Level 0.

By implementing these MX fields you move toward a Governed (Level 2) state, enabling richer machine interaction while preserving the strong human experience that your visitors already enjoy.

\clearpage

## Balanced Scorecard

### Human Experience

We find that across the audited set, the site delivers a strong experience for human visitors, with fast loading times and consistent accessibility, while SEO remains solid but offers room for further optimisation.

**Table 2**

*Human Experience*

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Could Be Better | C | - |
| Performance | Good | B | A (median) |
| Accessibility (WCAG) | Excellent | A | A (median) |
| Trust and Credibility | Good | B | - |

*The UX / Navigation grade derives from measured navigation signals: heading-outline quality, single-H1 consistency, and skip-link consistency. The Trust and Credibility grade derives from measured transport and integrity signals: HTTPS coverage, security-header coverage, canonical-URL consistency, and correct error-page status.*

### Machine Experience

We found that across the audited set, machines can discover and parse your content but presently lack structured governance context, as reflected by a Discovery Readiness score of 10/100, Structured Data Quality of 0/100, MX Stack Completeness of 32/100, Pipeline Survivability of 90/100, and an overall MX Readiness Level of 0.

**Table 3**

*Machine Experience*

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 10/100 | Needs Improvement | D | C (median) |
| Structured Data Quality | 0/100 | Needs Improvement | D | B (median) |
| MX Stack Completeness | 32/100 | Could Be Better | C | B (median) |
| Pipeline Survivability | 90/100 | Excellent | A | A (median) |

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

**Evidence:** MX Stack Completeness 32/100 | Structured Data Quality 0/100 | Discovery Readiness 10/100 | Consistency 26%

**To reach the next level:** raise Discovery Readiness above 15 (currently 10).

---

<div class="page-break"></div>

## What's Working Well

We found across the audited set that your pages already show strong foundations-perfect accessibility scores, robust security header coverage, and respectable SEO performance that set the groundwork for further enhancements. These strengths provide a solid base upon which we can build targeted improvements.

**Table 5**

*What's Working Well*

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Good | Good  -  1862ms average load time |
| SEO (content pages) | 52 | Good  -  titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | 4/5 headers present (X-Content-Type-Options absent); 0 of 10 URLs carry all five |
| Heading Quality | 65 | Good  -  headings present and machine-parseable |
| Consistency | 26% | 26%  -  same metadata patterns across every page |
| Agent access | 8/8 | every tested agent receives HTTP 200 |

**Positive patterns observed:**

- Accessibility is compliant across the audited set: Pa11y reports 100/100 with zero WCAG 2.1 AA errors on 11 pages.
- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Body content ratio averages 56%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We identified 10 finding(s) on the audited set, ordered by regulatory exposure first and then by priority within each category.

**Table 6**

*At a Glance*

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Image Alt-text Coverage | Compliance Risk | High | Low | screen-reader users and machines miss the content of those images |
| 2 | Heading Hierarchy Skips Levels | Compliance Risk | Medium | Low | screen-reader and machine outline-builders may misread the page structure |
| 3 | Main Landmark Absent | Compliance Risk | Medium | Low | agents and assistive technology may not locate the primary content |
| 4 | Semantic Structure (Naked Containers) 13/100 | Compliance Risk | Medium | Medium | machines lose structural context and infer page regions by position |
| 5 | Slow Origin Response | Cross-cutting | Medium | High | first-time visitors and cold-cache agents wait for the first byte |
| 6 | Security headers absent: X-Content-Type-Options | Cross-cutting | Medium | Low | Missing security headers increase exposure to content injection and clickjacking |
| 7 | Open Graph metadata incomplete or absent | Cross-cutting | Low | Low | Social sharing previews and agent link summaries lack author-controlled descriptions |
| 8 | No Schema.org structured data (SDQ 0/100) | Machine Readability Opportunity | Medium | Medium | Agents must infer entity type and facts from prose rather than declared structured data |
| 9 | No llms.txt published | Machine Readability Opportunity | Medium | Low | Agents have no machine-curated index of site content or declared access policy |
| 10 | No sitemap.xml | Machine Readability Opportunity | Medium | Low | Crawlers rely on link discovery only; unlisted pages may not be indexed |

---

**Priority 1: Image Alt-text Coverage**

**Bucket:** Compliance Risk

**Finding:** 184 of 199 images (92%) on the audited set carry no alt text, so their content is unavailable to assistive technology and to machines reading the page.

**What to change and why:**

- Add descriptive alt text to the informative images that lack it and empty alt to the decorative ones. This satisfies WCAG 1.1.1 across the image set.
- Generating alt text at upload time, or from the CMS media library, keeps coverage high as new images are added.

**Effort:** Low

---

**Priority 2: Heading Hierarchy Skips Levels**

**Bucket:** Compliance Risk

**Finding:** Heading levels skip on 7 audited page(s) (for example an h2 followed by an h4), so the document outline a machine or screen reader builds does not match the visible structure.

**What to change and why:**

- Order headings without skipping levels (an h2 followed by an h4 forces assistive technology and machines to guess the structure). Use heading level for hierarchy and CSS for visual size.
- A clean heading outline is the spine an agent uses to summarise the page; fixing it improves both accessibility and machine comprehension.

**Effort:** Low

---

**Priority 3: Main Landmark Absent**

**Bucket:** Compliance Risk

**Finding:** 11 audited page(s) have no `<main>` landmark, so assistive technology and server-side agents cannot reliably locate the primary content among the navigation and chrome.

**What to change and why:**

- Wrap the primary content of each page in a single `<main>` landmark so assistive technology can jump to it and server-side agents can locate the content among the navigation and chrome.
- One `<main>` per page; everything that is not the page's unique content stays outside it.

**Effort:** Low

---

**Priority 4: Semantic Structure (Naked Containers) 13/100**

**Bucket:** Compliance Risk

**Finding:** Rendered semantic-structure score 13/100: containers carry no role, ARIA landmark, or descriptive class, so machines fall back on positional inference to determine meaning. The worst page ([/contact](https://dangerdevices.com/contact)) carries 272 bare divs of 344.

**What to change and why:**

- Replace the obvious landmark containers (header, nav, main, footer, aside) with their semantic elements and give the remaining containers meaningful class names, so machines stop falling back on positional inference to determine what each region is.
- Start with the page that scored worst; wrapping the landmarks alone usually drops the bare-div ratio sharply without restructuring the layout.

**Effort:** Medium

---

**Priority 5: Slow Origin Response**

**Bucket:** Cross-cutting

**Finding:** The slowest audited page took 4077 ms on a first-time (cold-cache) fetch, well above the healthy origin-response band, so a first-time visitor or an agent arriving on a cold cache waits noticeably for the first byte (returning visitors with a warm cache are served in about 661 ms).

**What to change and why:**

- Profile the slow route with server-side tooling (application logs, an APM tool, the browser performance panel against an uncached load) to find the time-to-first-byte cost; origin latency is a separate engineering investigation this audit can only name.
- Cache or precompute the expensive path so first-time visitors and agents that arrive on a cold cache do not pay the full origin cost.

**Effort:** High

---

**Priority 6: Security headers absent: X-Content-Type-Options**

**Bucket:** Cross-cutting

**Finding:** Security headers absent: X-Content-Type-Options (across the audited set). Missing security headers increase exposure to content injection and clickjacking

**What to change and why:**

- Add the X-Content-Type-Options header on all 10 audited pages; this header is absent on every URL and prevents MIME-type sniffing attacks. once configured.
- Set them once in the edge or server configuration rather than per page so coverage stays complete as new pages ship.

**Effort:** Low

---

**Priority 7: Open Graph metadata incomplete or absent**

**Bucket:** Cross-cutting

**Finding:** Open Graph metadata incomplete or absent (5 page(s)). Social sharing previews and agent link summaries lack author-controlled descriptions

**What to change and why:**

- Complete the flagged SEO metadata (title, meta description, canonical) on the 5 pages absent them; Open Graph tags are present on only 36% of pages.
- Set sensible defaults in the template so every page ships with complete metadata.

**Effort:** Low

---

**Priority 8: No Schema.org structured data (SDQ 0/100)**

**Bucket:** Machine Readability Opportunity

**Finding:** No Schema.org structured data (SDQ 0/100) (Homepage). Agents must infer entity type and facts from prose rather than declared structured data

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 9: No llms.txt published**

**Bucket:** Machine Readability Opportunity

**Finding:** No llms.txt published (Root). Agents have no machine-curated index of site content or declared access policy

**What to change and why:**

- Publish the missing discovery file at the site root so agents and crawlers can find the machine-curated index and access policy in one fetch rather than inferring them.
- Reference the file from robots.txt and the sitemap so crawlers have a reliable signal that it exists.

**Effort:** Low

---

**Priority 10: No sitemap.xml**

**Bucket:** Machine Readability Opportunity

**Finding:** No sitemap.xml (Root). Crawlers rely on link discovery only; unlisted pages may not be indexed

**What to change and why:**

- Publish the missing discovery file at the site root so agents and crawlers can find the machine-curated index and access policy in one fetch rather than inferring them.
- Reference the file from robots.txt and the sitemap so crawlers have a reliable signal that it exists.

**Effort:** Low

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **Content-Signal directives**: add Content-Signal directives in robots.txt to declare content-use policy for machines.  
- **Organisation sameAs links**: add an Organisation JSON-LD with sameAs links to ORCID, Wikidata and LinkedIn to give agents authoritative identity context on the homepage.  
- **SpeakableSpecification**: add SpeakableSpecification CSS selectors on article-type pages to enable voice surfaces for agents.

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
| URL probed | https://dangerdevices.com |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
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
| Custom error page | No, generic server error |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | No |
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
| Accessibility-tree score | Not measured |
| Pages checked | 0 |

No rendered pages were available to this check on this run, so the accessibility-tree channel was not measured. We report that as "not measured" rather than clean: a verdict needs at least one scanned page behind it. A wider crawl, or a re-run once rendered pages are cached, populates this section.

**Inspect your own tree.** Right-click any page, choose Inspect, open the Elements panel, click the `>>` icon, choose Accessibility, and toggle "Show Accessibility Tree". What you see there is what tree consumers receive: if a control or a heading is missing from that view, it is missing for them. Chrome DevTools' AI Assistance panel also accepts "Review accessibility" against any element this report flags.

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds for a returning visitor may be served from a warm CDN edge; the same page on a genuine first visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section re-measures the slowest page from the crawl and a median-load control across several fresh visits, then compares those against the first-visit response. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what a repeat visitor experiences). The overall verdict for each page is the worse of the two, so a fast returning-visitor median cannot paper over a slow first-visit response.

**Method:** Each URL is re-measured across several fresh visits and scored on the median of those measurements. For each page we compare both the crawler's cold-cache baseline and the median of three fresh GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://dangerdevices.com/contact`. A first-time visitor sees the cold-cache cost: the crawler recorded 4077 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three fresh re-probes that followed returned 692ms, 531ms, 661ms, giving a returning-visitor median of **661 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://dangerdevices.com/jobs/director-technical-marketing-business-development-2`. A first-time visitor sees the cold-cache cost: the crawler recorded 1678 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three fresh re-probes that followed returned 802ms, 732ms, 720ms, giving a returning-visitor median of **732 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** The slowest page returned slowly on its first cold-cache visit but is served acceptably under fresh re-probes; first-time visitors carry a cold-origin cost that the returning-visitor median hides.

---

## Discovery Files

### robots.txt

```text
# robots.txt not found at origin
```

We found no robots.txt at the origin. With no robots file, crawlers and machines apply their own defaults: every path is treated as allowed, and there is no declared sitemap to follow. Publishing a robots.txt that allows public content and announces the sitemap location gives machines an explicit, low-effort signal to work from.

### sitemap.xml

**Table 11**

*sitemap.xml*

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 0 entries |  -  |
| `<lastmod>` | No | Absent |
| `<changefreq>` | No | Missing (Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents still use it to gauge re-crawl cadence) |
| `<priority>` | No | Absent (Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents can still use it as a relative-importance hint) |

**Sitemap grade:** Missing

No sitemap.xml was found. A sitemap helps search engines and machines discover all pages efficiently. Adding a sitemap.xml and referencing it from robots.txt is a straightforward improvement for crawl efficiency.

Our audit revealed that internal links on your site include multiple URL variants for the same canonical page, such as trailing-slash and hash-fragment forms. Because AI agents and LLM pipelines that do not normalise URLs will treat each variant as a separate resource, this duplication inflates token usage and can lead to contradictory or inflated findings; we recommend adding a <link rel="canonical"> tag to each affected URL and, when publishing a sitemap.xml, listing only one canonical form per resource.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

No llms.txt found. llms.txt is no longer a new or unusual idea: Chrome's Lighthouse now checks for it by default ([Lighthouse llms.txt audit](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt)). A file at the site root that lists the pages and feeds worth reading gives machine readers a curated entry point, alongside robots.txt and sitemap.xml.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt on the audited host. Where llms.txt is the curated index, llms-full.txt concatenates the full content of every page into a single file: a convention made popular by Fern, Mintlify, and GitBook. Agents that consume it ingest the corpus in one fetch rather than crawling page-by-page, cutting token consumption by an order of magnitude. We recommend adding an llms-full.txt alongside llms.txt; the build can run from the same sitemap-driven generator that produces llms.txt and adds the page bodies inline.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

**Table 12**

*Other discovery files detected*

| Path | Purpose | Quality |
|------|---------|---------|
| `/.well-known/acme-challenge/` | ACME / Let's Encrypt validation (RFC 8555  -  usually transient) | present but empty body |
| `/manifest.json` | Web App Manifest (PWA) |  -  |

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## AI-Content Marking Readiness

This section reports whether Dangerdevices's site marks AI-generated or AI-manipulated content in a machine-readable way: the form of marking the EU AI Act Article 50 expects from 2 August 2026, and the form the European Commission's voluntary Code of Practice on marking and labelling of AI-generated content (published 13 June 2026) sets out practical steps to meet. The probe inspects the homepage for four markers an agent could read without a human in the loop, and records which are present.

<p><small><strong>Note:</strong> This section describes regulatory frameworks in general terms only. Nothing here is legal advice. Requirements vary by jurisdiction, organisation type, and use case. Consult qualified legal specialists for guidance specific to your situation.</small></p>

**Table 13**

*AI-Content Marking Readiness*

| Attribute | Value |
|-----------|-------|
| Origin | https://dangerdevices.com |
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

## Structured Data Inventory

No Schema.org JSON-LD entities were detected across the audited set. Adding at least one typed entity per page (e.g. `Organization` on the homepage, `Product` or `Article` on content pages) is the highest-impact improvement for machine readability.

Across the 11 pages we audited, structured data is limited. Machines cannot reliably extract entity data from these pages. Adding Schema.org JSON-LD with required properties is the highest-impact improvement.

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

This is a clean-slate site with no Schema.org markup. There are no property gaps to report because no typed entities exist yet; every structured data addition is net new capability. The served HTML is machine-readable (served score 68/100); agents can extract content without JSON-LD.

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
| Canonical URL | Not present | Not present | n/a | n/a | n/a |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Not present | Not present | n/a | n/a | n/a |
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
| 1 | Discovery | Partial | 67 | Issues: no <main> |
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

- **Truncation Risk** - Pass · 11/11
  - *Means:* Every page is well under the 250 KB hard ceiling at which some server-side agents stop reading, and main content sits within the 50-100 KB offset windows. The largest page is 15 KB ([/career](https://dangerdevices.com/career)).
  - *Data:* Largest page: 15 KB ([/career](https://dangerdevices.com/career)). Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows.
- **SPA Shell** - Fail · 1/11
  - *Means:* Content requires JavaScript to appear. Server-side agents (ChatGPT, Claude, Perplexity) see an empty shell when they fetch these pages.
  - *Data:* Max gap score: 43. 0 means served and rendered match. Page: https://dangerdevices.com/contact
- **Soft 404** - Pass · 11/11
  - *Means:* Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs.
  - *Data:* 0 soft-404 page(s) detected.
- **Boilerplate Burial** - Pass · 11/11
  - *Means:* Navigation and chrome do not dominate the page; main content is reachable without wading through overhead.
  - *Data:* Highest boilerplate-to-content ratio: 2.78. Threshold: < 10 (and < 80 KB of inline head bytes).
- **Tabbed Disclosure** - Pass · 11/11
  - *Means:* No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML.
  - *Data:* 0 page(s) with tab widgets.
- **Delayed Content Start** - Pass · N/A
  - *Means:* Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily.
  - *Data:* Content starts at up to 0% of the document on some pages.
- **Broken Code Fences** - Pass · 11/11
  - *Means:* All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples.
  - *Data:* 0 page(s) with unbalanced fenced code blocks.
- **HTTP Content Negotiation (Vary)** - Pass · 11/11
  - *Means:* The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents.
  - *Data:* 0 page(s) advertise format negotiation.
- **Cross-Host Redirect** - Pass · 11/11
  - *Means:* No cross-domain redirects. Agents follow internal redirects without host-boundary issues.
  - *Data:* 0 page(s) cross origin during redirect.
- **Generic Headings** - Fail · 2/11
  - *Means:* Headings are generic on some pages (worst case: 0%). Agents building a document outline cannot distinguish sections.
  - *Data:* Worst case: 0% generic headings. See dangerdevices-com-pipeline-generic-headings-pages.csv (2 pages).
- **Body Content Ratio** - Pass · N/A
  - *Means:* Actual prose content averages 56% of served bytes, well above the 30% threshold. Pages are content-heavy, not overhead-heavy.
  - *Data:* Average: 56%. Threshold: 30%.
- **Inline Tag Bloat** - Fail · 11/11
  - *Means:* 11 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches.
  - *Data:* 2 element(s) > 500 bytes. Largest single-page inline CSS block: 0 B. Largest single-page inline JS block: 2239 B. See dangerdevices-com-pipeline-inline-tag-bloat-pages.csv (11 pages).
- **Head Weight** - Pass · N/A
  - *Means:* Head bytes are a small fraction of each page. Agents reach body content quickly.
  - *Data:* Max ratio: 0.00. Average: 0.00. Threshold: 0.50.

**Pipeline Survivability score:** 90/100

We found that every audited page suffers from Inline Tag Bloat, while some also use an SPA shell and generic headings. The bloat makes it harder for machines to parse the markup quickly and obscures the true document structure, limiting how accurately a crawler can interpret content hierarchy. Removing unnecessary inline tags across all pages would give machines a clearer view and provide the biggest improvement in resilience.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check set, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

**Table 19**

*Div Soup: naked containers without semantic mapping*

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Served HTML | 26/100 (high) | 20 bare divs (65% of containers, depth 7) | `div.job-item-location` (10), `div.text-block-8` (10), `div.job-item-right-block-2` (10), `div.job-type` (10), `div.div-block-30` (10) |
| Rendered HTML | 13/100 (high) | 272 bare divs (79% of containers, depth 16) | `div` (217), `div.gmnoprint` (12), `div.job-item-location` (10), `div.text-block-8` (10), `div.job-item-right-block-2` (10) |

**Worst page (served):** [/contact](https://dangerdevices.com/contact)\
**Worst page (rendered):** [/contact](https://dangerdevices.com/contact)

Across the audited set, the rendered surface shows a higher bare-div ratio (272 of 344, 79%) than the served surface (20 of 31, 65%) on the worst page https://dangerdevices.com/contact, meaning machines lose structural context and must rely on positional inference to interpret content.  
The soup is structural; the deepest bare chain reaches 16 levels in the rendered output, signalling that the source pipeline likely injects late-stage JavaScript or relies on an untyped component framework rather than semantic markup.  
Our cheapest first move is to wrap the obvious landmarks-header, nav, main, footer, aside-and assign meaningful class names to remaining elements so the bare-div ratio falls without a full layout rewrite.

---

## Security Headers

**Table 20**

*Security Headers*

| Header                          | Status   | Purpose                                          |
|---------------------------------|----------|--------------------------------------------------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | Yes | Prevents XSS and injection attacks |
| X-Frame-Options | Yes | Prevents clickjacking |
| X-Content-Type-Options | No | Prevents MIME-type sniffing |

One of the five standard security headers is absent on every audited response: X-Content-Type-Options. Adding it at the origin-server or CDN edge closes the corresponding attack surface without touching application code.

**Coverage:** 0 of 10 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type No
- **`/about`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type No
- **`/product`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type No
- **`/contact`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type No
- **`/career`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type No
- **`/jobs/rf-hardware-test-engineer`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type No
- **`/jobs/rf-hardware-test-engineer-2`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type No
- **`/jobs/director-technical-marketing-business-development-2`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type No
- **`/jobs/analog-geneator-developer`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type No
- **`/jobs/senior-rfic-engineer`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type No

HTTPS: 10/10 | HSTS: 10/10 | CSP: 10/10 | X-Frame-Options: 10/10 | X-Content-Type-Options: 0/10

---

## Cross-Page Consistency

**Table 21**

*Cross-Page Consistency*

| Pattern                          | Coverage | Pages missing it   |
|----------------------------------|----------|--------------------|
| Schema.org JSON-LD | 0% | 11 |
| MX governance tags | 0% | 11 |
| Open Graph tags | 36% | 5 |
| Twitter Card tags | 36% | 5 |
| Skip link | 0% | 9 |
| llms.txt link tag | 0% | 9 |
| Canonical URL | 0% | 9 |
| Exactly 1 H1 | 55% | 5 |
| Code examples present | 0% | 11 |
| Self-contained sections | 100% |  -  |
| Error/troubleshooting docs | 0% | 11 |
| Lighthouse heading compliance | 36% | 7 |

**Overall Consistency:** 26%

Some pages in the 11-page sample are missing metadata patterns that others carry. Machines hitting different pages get different quality data. The Missing Pages column shows where to focus on the sampled pages.

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no brand-name or canonical-URL divergence flagged by the consistency check.

**Table 22**

*Content Consistency*

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Brand-name parity | Consistent | Single unique page  -  no cross-page parity check possible |
| Canonical URL duplicates | Not tested | Canonical tag not present on the audited page |
| Meta description length | Not tested | Insufficient pages for distribution analysis |
| Cross-page entity spread (same entity on multiple pages) | No entities detected | Audit scope: 1 unique page |

---

## Inline Code Duplicates

We found 6 identical inline fragment(s) repeated across multiple pages, totalling 11 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

**Table 23**

*Inline Code Duplicates*

| Type | Bytes per fragment | Appears on N pages | Preview                                                          |
|------|-------------------:|-------------------:|------------------------------------------------------------------|
| js | 335 | 11 | window.__WEBFLOW_CURRENCY_SETTINGS = {"currencyCode":"USD"," |
| js | 279 | 11 | WebFont.load({  google: {    families: ["Jost:100,200,300,re |
| js | 181 | 11 | !function(o,c){var n=c.documentElement,t=" w-mod-";n.classNa |
| css | 58 | 11 | .wf-force-outline-none[tabindex="-1"]:focus{outline:none;} |
| js | 1276 | 2 | // Define the breadcrumb separator character   var separator |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `dangerdevices-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src=".">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

We noted that accessibility legislation worldwide converges on ISO 14289-1 (PDF/UA) as the technical baseline, with the European Accessibility Act providing a highly detailed example of this alignment; similar standards in the US, UK, Australia and Canada follow the same structural requirements. We also observed that an untagged PDF remains invisible to machines-search crawlers, AI systems and automated pipelines cannot extract text or structure from scanned or image-based PDFs, whereas a tagged PDF with a proper structure tree is machine-readable just like semantic HTML.

We linked no PDFs from the 11-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

PDFs are part of the machine-readable estate but sit outside this HTML audit's scope. A dedicated PDF review checks each public document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified) and returns a per-document verdict.

---

## Text Patterns

Analysis of text patterns across audited pages found content reaching Probably AI on the AI-tells scale (9 of 11 pages scored). Machines do not consistently cite or label AI-generated content; this observation describes what the analysis found, not a conclusion about authorship. The full per-page breakdown is in `ai-tells.json` in the results directory.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: resolve Commerce Visibility findings (currently 0/100)
2. **Review Priority 2-3 findings**: Structured Data improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

**Table 24**

*What's Next*

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4 (Compliance Risk) | Priority 1, 2, 3, 4 resolved: WCAG 2.1 AA accessibility compliance restored |
| Full Implementation | P1, P2, P3, P4, P5, P6, P7, P8, P9, P10 (P1-P10) | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | The full machine-readable estate, beyond the web pages |

This audit is a starting point. The outcome we work toward is a site any machine can read, trust, and act on, and a dated, attested record you can show to a regulator, a partner, or an acquirer on request. Reaching it (structured data, discovery files, accessibility, governance metadata, and re-audit on a cadence you choose) is available as a managed service. To take any of it further, contact CogNovaMX Ltd at <info@cognovamx.com>.

---

## Summary of Findings

Accessibility scored 100/100 on the audited pages.iant interface. Structured Data at 0/100 and Discovery Readiness at 10/100 reveal significant gaps in how machines can understand and surface your content; improving these will unlock richer search results and discovery pathways. We invite you to act on these findings to strengthen your digital presence.

### Audit Scores

**Table 25**

*Audit Scores*

| Dimension | Score | Band |
|-----------|-------|------|
| Served-HTML Structure | 68/100 | Good |
| Accessibility | 100/100 | Excellent |
| SEO (all pages) | 53/100 | Good |
| SEO (content pages) | 52/100 | Good |
| MX Stack Completeness | 32/100 | Could Be Better |
| Structured Data Quality | 0/100 | Needs Improvement |
| Commerce Visibility | 0/100 | Needs Improvement |
| Discovery Readiness | 10/100 | Needs Improvement |
| Heading Quality | 65/100 | Good |
| Agent Readability | 54/100 | Good |
| Pipeline Survivability | 90/100 | Excellent |
| Cross-Page Consistency | 26% | Could Be Better |

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

- **`/ (nav)`**: SEO 58 · A11y 100 · Back 65 · Served 88 · Rendered 79
- **`/about`**: SEO 53 · A11y 100 · Back 65 · Served 81 · Rendered 73
- **`/product`**: SEO 47 · A11y 100 · Back 65 · Served 83 · Rendered 74
- **`/contact`**: SEO 53 · A11y 100 · Back 75 · Served 96 · Rendered 0
- **`/career`**: SEO 56 · A11y 100 · Back 65 · Served 86 · Rendered 78
- **`/ (nav)`**: SEO 58 · A11y 100 · Back 65 · Served 88 · Rendered 79
- **`/jobs/rf-hardware-test-engineer`**: SEO 53 · A11y 100 · Back 65 · Served 51 · Rendered 43
- **`/jobs/rf-hardware-test-engineer-2`**: SEO 53 · A11y 100 · Back 65 · Served 51 · Rendered 43
- **`/jobs/director-technical-marketing-business-development-2`**: SEO 54 · A11y 100 · Back 65 · Served 51 · Rendered 43
- **`/jobs/analog-geneator-developer`**: SEO 48 · A11y 100 · Back 65 · Served 36 · Rendered 28
- **`/jobs/senior-rfic-engineer`**: SEO 52 · A11y 100 · Back 65 · Served 36 · Rendered 28

Pages marked (nav) are navigational: they route visitors to content rather than containing it, and are excluded from the SEO content average. Content-pages SEO average: 52/100.

**URL deduplication note:** 11 crawled URLs resolved to 10 unique pages after canonicalisation (inflation factor 1.1×). The following URL clusters were treated as the same page: https://dangerdevices.com/ (2 variants: https://dangerdevices.com, https://dangerdevices.com/). Fragment suffixes (such as `#` and `#/`) and trailing-slash variants are treated as identical resources by HTTP servers and search engines; this audit deduplicated them before scoring to avoid inflating per-page counts.

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. External links are not tracked; this inventory covers same-host `<a href>` links only. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

Per page, internal links range from 5 to 15, averaging 7 across 10 pages. That is sparser than typical (benchmark median 20 per page).

**Table 26**

*Appendix B: Link Inventory*

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 65 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |
| URL variant links (same canonical) | 11    |

---

## Appendix C: Image Efficiency

We reviewed 199 images across the audited set: 32 PNG, 2 JPEG and 165 in other or unidentified formats. 15 of 199 (7.5%) carry alt text, leaving 184 without it. Each missing alt attribute is a place where a screen-reader user or a machine reading the page gets no description of what the image shows.

On loading strategy, 23 images are marked `loading="lazy"` and 0 `loading="eager"`, while 176 carry no loading attribute at all. No attribute is not the same as eager: the browser decides for itself when to fetch, which removes the explicit control that lazy and eager give you. Setting an explicit attribute on those images makes the fetch behaviour predictable for browsers and machines alike.

> **Double-lazy loading pattern not detected** -  no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: No platform detected. No platform-specific fingerprint was detected, so the audit used conservative default rate limits, paced slowly enough to stay below typical shared-host thresholds, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** None detected. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from the audited pages. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 11 pages examined | Platform: Unknown Platform | Frameworks: None detected | Analysis method: Hybrid (automated + manual verification) | robots.txt: Absent (HTTP 404)

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

This report carries its own provenance. Every step that produced it is recorded in two adjacent JSON sidecars (AI and deterministic), and the full evidence chain travels inside the PDF's XMP metadata: extract it with `exiftool -b -XMP-mx:ProvenanceAiPayload dangerdevices-com-report.pdf | jq .`. The PDF is a tagged ISO 14289-1 (PDF/UA-1) Level 2 document with a complete reading-order structure tree. The standards this audit measures your site against are the standards the deliverable itself meets.

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

## Pipeline Release Notes

