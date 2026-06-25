---
title: "Mx Allabout: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-06-24"
modified: "2026-06-24"
client: "Mx Allabout"
clientSlug: "mx-allabout-network"
clientUrl: "https://mx.allabout.network"
reportId: "mx-allabout-network-WEB-AUDIT-20260624"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-06-24"
auditCommand: "node scripts/audit-pipeline.js https://mx.allabout.network --pages 10"
description: "Executive audit report reviewing accessibility, performance, SEO, structured data, and AI agent compatibility for Mx Allabout"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 85
accessibilityScore: 100
seoScore: 93
llmServedHtmlScore: 100
agentReadabilityScore: 
totalIssues: 0
htmlPagesAudited: 12
version: "1.0"
pipelineVersion: "1.1.0"
confidential: true
type: audit-report
mx:
  status: active
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-06-24/mx.allabout.network/mx-allabout-network-report.md
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Mx Allabout covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Mx Allabout", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  # The single cog that manages this pipeline artefact, so a reader never
  # has to infer the steward (scripts/lib/managed-by.cjs is the resolver).
  x-mx-managedBy: mx-audit.cog.md
  runbook: "Executive audit report for Mx Allabout. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in the top-level auditCommand field. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-24/mx.allabout.network/mx-allabout-network-report.md', which validates the report then renders it through scripts/bin/mx.pdf.sh."
  generate:
    command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-24/mx.allabout.network/mx-allabout-network-report.md"
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/runs/mx.allabout.network/latest-copy.pdf"
    description: "Generate PDF audit report for Mx Allabout"
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
    sidecar: "mx-allabout-network-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "mx-allabout-network-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 24 June 2026\
**Report ID:** mx-allabout-network-WEB-AUDIT-20260624

---

\clearpage

## About This Report

We audited 12 pages across mx.allabout.network's site using the Web Audit Suite. We review each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image efficiency, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before completing this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent patterns emerge, we update what we look for.

**How we build it.** We use scripted SOPs running deterministic checks rather than inference. The crawl, the served-versus-rendered comparison, the structured-data extraction, the accessibility passes, the discovery-file probes, the platform fingerprinting and the per-section scoring all run as scripts producing byte-identical outputs on the same input. A small number of stages run a judgement pass over the resulting report; that is the only inference layer. Those judgement passes can run against a local model, so the whole audit runs inside the organisation's own network with nothing leaving it: relevant where content is regulated or privacy-sensitive.

Our scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. MX addresses governance and machine experience metadata in the areas those standards do not cover. The methodology behind every section of this report is documented in full in MX: The Protocols at [mx.allabout.network/books/](https://mx.allabout.network/books/).

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
| SEO | **93**/100 | `#################-` |
| Served-HTML Structure | **100**/100 | `##################` |
| MX Stack Completeness | **96**/100 | `#################-` |
| Agent Readability | **90**/100 | `################--` |
| Pipeline Survivability | **100**/100 | `##################` |
| Machine Processing Speed | **33** ms/page | A |

*The three machine metrics measure different things. **Served-HTML Structure** is the semantic markup an agent reads before JavaScript runs; **Agent Readability** is how easily the content can be quoted once reached; **Pipeline Survivability** is whether a page survives an agent's fetch and ingest. A site can score low on one and high on another.*

Your site runs on **Netlify** (detected from multiple platform signals).

Across the audited set, Mx Allabout scores 100/100 for accessibility and 93/100 for SEO, with solid page performance (85/100) - a strong baseline for both human visitors and machine readers.

Across the audited set, commerce visibility sits at 20/100, the lowest machine-readiness score in this audit. The headline opportunity is to enrich product and price data so that agents can reliably identify purchase points. The site already has MX governance markers present, giving a strong foundation; adding detailed Product schema and PriceSpecification entries will lift this metric toward full transactable readiness and enable a third-party audit to guarantee accuracy at the purchase point.

Because the site runs on Netlify, edge functions can inject dynamic product data in real time. Regardless of any served-versus-rendered differences, JSON-LD remains the highest-leverage asset that every agent can read, ensuring consistent machine comprehension across all pages.

\clearpage

<!-- AUDIT-DELTA:START -->
## Change Since Our 23 June 2026 Audit

We last audited mx.allabout.network on 23 June 2026. The table compares that audit with the current one across the headline measures. Every headline score is unchanged from that audit, so the recommendations from that audit remain open.

| Measure | 23 June 2026 | 24 June 2026 | Change |
|---------|------:|------:|:-------|
| Performance | 85 | 85 | No change |
| Accessibility | 100 | 100 | No change |
| SEO | 93 | 93 | No change |
| WCAG AA issues | 0 | 0 | No change |

*Re-audit note: this run is 1 day after the previous one. Score swings over short windows are normal, as network conditions, CDN warm/cold state, and origin load all vary. Use audits 7 or more days apart as the reliable trend signal; treat this run as a spot-check, not a regression.*
<!-- AUDIT-DELTA:END -->

\clearpage

## Balanced Scorecard

### Human Experience

We find a strong human experience across the audited set.

**Table 2**

*Human Experience*

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Excellent | A | - |
| Performance | Excellent | A | A (median) |
| Accessibility (WCAG) | Excellent | A | A (median) |
| Trust and Credibility | Good | B | - |

*The UX / Navigation grade derives from measured navigation signals: heading-outline quality, single-H1 consistency, and skip-link consistency. The Trust and Credibility grade derives from measured transport and integrity signals: HTTPS coverage, security-header coverage, canonical-URL consistency, and correct error-page status.*

### Machine Experience

Across the audited set, machines have full governance context for comprehension - MX Stack Completeness 96/100, Discovery Readiness 87/100, Structured Data Quality 94/100.

**Table 3**

*Machine Experience*

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 87/100 | Excellent | A | C (median) |
| Structured Data Quality | 94/100 | Excellent | A | B (median) |
| MX Stack Completeness | 96/100 | Excellent | A | B (median) |
| Pipeline Survivability | 100/100 | Excellent | A | A (median) |
| Machine Processing Speed | 33 ms/page | A | Machine-Lean |  -  |

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
|  | 1 | Discoverable | Deliberate metadata, publisher identified | Agents can discover |  |
|  | 2 | Governed | Full MX fields, governance, provenance | Machines have structured governance context |  |
|  | 3 | Comparable / Attested | Cryptographic attestation, cross-source verifiable | Agents can search, compare, recommend |  |
| **→** | 4 | Transactable | Registered, priced, SLA-backed, alive | Agents can understand pricing and transact | **←** |
|  | 5 | Purchase-confident | Third-party audited, fiduciary-grade | Agents can guarantee accuracy at purchase |  |

**Current Level:** 4: Transactable

**Evidence:** MX Stack Completeness 96/100 | Structured Data Quality 94/100 | Discovery Readiness 87/100 | Consistency 96%

**To reach the next level:** Obtain a third-party audit so agents can guarantee accuracy at purchase point.

---

<div class="page-break"></div>

## What's Working Well

We find accessibility scores, SEO performance, and security transport across the audited set, giving a clear starting point for the improvements ahead.

**Table 5**

*What's Working Well*

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent  -  519ms average load time |
| SEO (content pages) | 93 | Excellent  -  titles, meta descriptions, canonical URLs in place |
| Security | 5/5 | 5/5 headers present; 11 of 12 URLs carry all five |
| Structured Data | 94 | Excellent  -  JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 92 | Excellent  -  single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 96% | 96%  -  same metadata patterns across every page |
| Agent access | 8/8 | every tested agent receives HTTP 200 |

**Positive patterns observed:**

- Accessibility is compliant across the audited set: Pa11y reports 100/100 with zero WCAG 2.1 AA errors on 12 pages.
- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Structured Data Quality of 94/100 (Verified linked data): the schema is valid, required properties are complete, and the vocabulary is in good order.
- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.
- Body content ratio averages 61%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

The table below is the prioritised action list for this audit. Each row names a finding, its compliance-risk bucket, and the effort to fix it. The numbered blocks below the table expand each finding with specific guidance.

We identified 1 finding(s) on the audited set, ordered by regulatory exposure first and then by priority within each category.

**Table 6**

*At a Glance*

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Image Alt-text Coverage | Compliance Risk | High | Low | screen-reader users and machines miss the content of those images |

---

**Priority 1: Image Alt-text Coverage**

**Bucket:** Compliance Risk

**Finding:** 5 of 37 images (14%) on the audited set carry no alt text, so their content is unavailable to assistive technology and to machines reading the page.

**What to change and why:**

- The audit identified 5 images absent alt text; add descriptive alt text to those informative images and empty alt to decorative ones. This satisfies WCAG 1.1.1 across the image set.
- Generating alt text at upload time, or from the CMS media library, keeps coverage high as new images are added.

**Effort:** Low

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs**: link Person and Organisation entities to ORCID, Wikidata or LinkedIn profiles so machines can resolve authoritative identities across platforms.  
- **potentialAction**: add a ContactAction on the Organisation entity to expose contact capabilities for machines seeking outreach options.  
- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)): declare content-use policy in robots.txt to inform machines how they may reuse or transform the site’s content.

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
| URL probed | https://mx.allabout.network |
| HTTP status | 200 |
| Content-Type returned | text/markdown; charset=utf-8 |
| Markdown served | Yes  -  server responded with text/markdown |

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
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | Yes |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | Present - links back to same-site content found |
| Internal navigation links | 21 links to same-site pages |
| MX governance tags | Present |
| Schema.org JSON-LD | Present (the error page carries content schema, so machines can treat the 404 as a valid page; remove it) |

---

## The Accessibility Tree

There is no single kind of machine visitor, and no single thing a machine reads. A small model on a phone works inside a tight context window. A foundation model arrives with browsing tools. A plain scraper never runs a model at all. A converter flattens each page to text before a model ever sees it, stripping layout and scripts on the way. A coding agent fetches a page once over HTTP and moves on. Some of these read raw markup, some read a text projection, some consult the accessibility tree, some parse structured metadata. None of them see the visual layout, and you cannot know which one will arrive next.

The design answer is redundancy: carry the same meaning in page semantics, in the accessibility tree, in metadata, and in plain text, so that whichever channel a visitor reads, the meaning survives. A page that depends on any single channel fails every visitor that lacks that channel. The accessibility tree is the channel this section checks, and it is shared by screen readers, so every fix here serves human visitors and machine visitors at once.

The contrast with human visitors is worth holding onto. People cannot take in everything at once, so good pages guide them: a journey, step by step, page by page. Machines are the opposite. They hit one page, once, and leave; they follow no journey unless explicitly instructed to. A site that reveals its meaning only across a multi-page journey is invisible to a machine that lands on one page in the middle of it. Every page therefore has to stand alone for the machine while the journey still works for the human. These are complementary designs on the same pages, not a trade-off.

This check reads each audited page the way a tree consumer does and flags the places where each page's behaviour, names, and structure fail to reach the tree. It deliberately covers what the WCAG scan in the Accessibility section does not: those results measure conformance per page; these findings are about meaning that exists in only one channel.

**Table 10**

*The Accessibility Tree*

| Measure | Result |
|---------|--------|
| Accessibility-tree score | 100/100 |
| Pages checked | 9 |

Across the 9 pages we checked, every pattern in the catalogue came back clean: the page semantics that reach the tree match what the page presents visually. This is the state to protect when templates change.

**Inspect the accessibility tree.** Right-click any page, choose Inspect, open the Elements panel, click the `>>` icon, choose Accessibility, and toggle "Show Accessibility Tree". The result is what tree consumers receive: if a control or a heading is missing from that view, it is missing for them. Chrome DevTools' AI Assistance panel also accepts "Review accessibility" against any element this report flags.

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds for a returning visitor may be served from a warm CDN edge; the same page on a genuine first visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section re-measures the slowest page from the crawl and a median-load control across several fresh visits, then compares those against the first-visit response. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what a repeat visitor experiences). The overall verdict for each page is the worse of the two, so a fast returning-visitor median cannot paper over a slow first-visit response.

**Method:** Each URL is re-measured across several fresh visits and scored on the median of those measurements. For each page we compare both the crawler's cold-cache baseline and the median of three fresh GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://mx.allabout.network/audit`. A first-time visitor sees the cold-cache cost: the crawler recorded 729 ms on its initial fetch. **First-visit verdict: Healthy**. Three fresh re-probes that followed returned 397ms, 262ms, 495ms, giving a returning-visitor median of **397 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://mx.allabout.network/blog/a-standard-that-knows-what-it-isnt.html`. A first-time visitor sees the cold-cache cost: the crawler recorded 492 ms on its initial fetch. **First-visit verdict: Healthy**. Three fresh re-probes that followed returned 371ms, 282ms, 584ms, giving a returning-visitor median of **371 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Server response time is within healthy bounds on the slowest page and a median-load page, for both first-visit and returning-visitor requests.

Origin response time for both the slowest and median-load pages stays inside the healthy band across repeated fresh visits. No server-side action is required from this audit.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /books/appendices/
Disallow: /blog/drafts/

Sitemap: https://mx.allabout.network/sitemap.xml
```

*The full `robots.txt` (6 lines) is preserved alongside this report as `mx-allabout-network-robots-txt.txt`.*

The robots.txt declares 2 disallow paths; all other paths are open to crawlers and machines. It announces the sitemap, so a machine reading the file can find the URL index directly.

### sitemap.xml

**Table 11**

*sitemap.xml*

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 147 entries | Present |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** Complete

The sitemap declares 147 URLs and grades Complete. Lastmod dates vary across entries, which tells machines which pages changed and when.

This was a full crawl: the audit reached every page it could discover, and 18 of them are absent from the sitemap (which lists 147). The full set is recorded in the `mx-allabout-network-pages-not-in-sitemap.csv` sidecar alongside this report. Adding them to the sitemap lets search engines and machines discover all content.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

The llms.txt carries a site description, a page inventory and a content-use policy, which is well-formed: a machine that queries the host for a structured content index receives all three. We also recommend serving llms.txt as an HTML page that wraps the plain-text content in a `<pre>` block, rather than the text/plain the llmstxt.org specification defines. Training crawlers such as Common Crawl archive only a small fraction of plain-text files but crawl HTML pages from the sitemap reliably, so the HTML wrapper gets the file into the corpus while the `<pre>` keeps it rendering as readable plain text. The technique, with the reasoning and working code, is at https://mx.allabout.network/blog/your-site-is-already-training-ai.html.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

### agent-card.json (A2A)

**Table 12**

*agent-card.json (A2A)*

| Check | Result |
|-------|--------|
| Present at `/.well-known/agent-card.json` | Yes |
| Valid JSON | Yes |
| Service name and description | CogNovaMX  -  Machine Experience consultancy  -  strategy, advisory, training, and audit serv... |
| Capabilities declared | 3 skill(s) declared, no transport-level capabilities flag |
| Endpoint URL | https://mx.allabout.network |
| Authentication requirements | None declared (open access) |

### Other discovery files detected

3 additional registered `/.well-known/` paths were probed; none returned an identifiable discovery file. The per-path breakdown is preserved alongside this report as a sidecar JSON.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## AI Usage Declaration

This site publishes a publisher-level AI Usage Declaration: a scope-bounded, machine-readable statement carrying what the work is, who is responsible for it, what machines did during its production, and what machines did not do. The probe verifies the declaration's presence across its four carrier forms, validates the JSON record's schema, checks the page-level integration on the homepage, and reports whether the declaration carries a signature.

**Table 13**

*AI Usage Declaration*

| Attribute | Value |
|-----------|-------|
| Origin | https://mx.allabout.network |
| Draft reference | draft-cranstoun-mx-ai-usage-declaration v1.0 |
| Conformance level | Level 1 (Declared) |
| Probed at | 2026-06-07T07:08:07.453Z |

### Carrier forms

**Table 14**

*Carrier forms*

| Form | State | URL | HTTP | Content-Type | Type matches expectation |
| --- | --- | --- | --- | --- | --- |
| Source markdown | present | `https://mx.allabout.network/AI-USAGE.md` | 200 | text/markdown; charset=utf-8 | yes |
| JSON record | present | `https://mx.allabout.network/AI-USAGE.json` | 200 | application/json; charset=utf-8 | yes |
| HTML rendering | present | `https://mx.allabout.network/AI-USAGE.html` | 200 | text/html; charset=utf-8 | yes |
| Tagged PDF | present | `https://mx.allabout.network/AI-USAGE.pdf` | 200 | application/pdf | yes |

### Schema validation

**Table 15**

*Schema validation*

| Dimension | Result | Notes |
| --- | --- | --- |
| JSON record parsed | yes | Required for Level 1 conformance. |
| Required §4 fields present | all | 7/7 required fields present. |
| Schema errors | 0 | No enum, type, or format violations detected. |
| Schema warnings | 0 | No advisory violations. |
| aiUsage entries | 3 | Tasks the publisher attributes to AI assistance. |
| aiBoundary statements | 5 | Boundaries the publisher commits to: things AI did not do. |
| Review schedule | `P1Y` | Publisher commits to re-confirming the declaration at this interval. |
| Declared disclosure (WICG / IPTC) | `ai-assisted` / `compositeWithTrainedAlgorithmicMedia` | The values the publisher carried in the JSON record. |
| §4.7 derivation check | consistent | Derived from aiUsage + aiBoundary; declared values match. |
| Signature present | no | Declaration is at Level 1 (Declared); RFC 7515 JWS over a canonical payload would advance it to Level 2. |
| Authority type | `self` | Self-attested by the publisher. |

### Page-level integration

**Table 16**

*Page-level integration*

| Surface | State | Notes |
| --- | --- | --- |
| Homepage fetched | yes | Fetched from `https://mx.allabout.network/`. |
| `<link rel="ai-usage">` | yes | Discovered at `/AI-USAGE.json` (type `application/json`). |
| WICG `<meta name="ai-disclosure">` | `ai-assisted` | Value is in the WICG enum. |
| Schema.org `digitalSourceType` | absent | Optional. Search-engine readable today via Schema.org JSON-LD; absence is informational, not a finding. |

### Probe findings

- [PASS] Machine-readable JSON record is served.
- [PASS] Human-readable HTML rendering is served.
- [PASS] Source markdown is served (transparency win: editable form is publicly fetchable).
- [PASS] PDF form is served (verified application/pdf; PDF/UA tagging not checked by this probe).
- [PASS] JSON record conforms to §4 schema (required fields, enum values, ISO 8601 dates).
- [PASS] Declared disclosure values agree with the §4.7 derivation from aiUsage + aiBoundary.
- [PASS] Homepage carries <link rel="ai-usage"> for in-page discovery (§5.3).
- [PASS] Homepage carries WICG <meta name="ai-disclosure" content="ai-assisted">.

---

## AI-Content Marking Readiness

This section reports whether Mx Allabout's site marks AI-generated or AI-manipulated content in a machine-readable way: the form of marking the EU AI Act Article 50 expects from 2 August 2026, and the form the European Commission's voluntary Code of Practice on marking and labelling of AI-generated content (published 13 June 2026) sets out practical steps to meet. The probe inspects the homepage for four markers an agent could read without a human in the loop, and records which are present.

<p><small><strong>Note:</strong> This section describes regulatory frameworks in general terms only. Nothing here is legal advice. Requirements vary by jurisdiction, organisation type, and use case. Consult qualified legal specialists for guidance specific to your situation.</small></p>

**Table 17**

*AI-Content Marking Readiness*

| Attribute | Value |
|-----------|-------|
| Origin | https://mx.allabout.network |
| Reference | EU AI Act Article 50; European Commission Code of Practice on marking and labelling of AI-generated content (13 June 2026) |
| Readiness level | Level 1 (Marked) |
| Markers present | 1/4 |
| Verdict | partially-marked |

### Markers

**Table 18**

*Markers*

| Marker | Present | Detail | Note |
| --- | --- | --- | --- |
| MX provenanceOrigin | no |  -  | Machine-authorship declaration carried in the file (MX). |
| IPTC Digital Source Type | no |  -  | Standard machine-readable AI-content marker a detector reads. |
| C2PA Content Credentials | no |  -  | Content-authenticity manifest signal (presence recorded, not verified). |
| AI-disclosure meta | yes | ai-disclosure | Generic, non-standard disclosure tag. |

### Probe findings

- A generic AI-disclosure meta tag is present (`ai-disclosure` = ai-assisted). It is a non-standard signal; an IPTC Digital Source Type marker or MX provenanceOrigin is the machine-readable form a regulator's tooling looks for.
- Marking readiness here is about whether content announces machine authorship in a machine-readable way. MX provenanceOrigin declares the authorship; a content-authenticity watermark (C2PA, SynthID) proves a file is synthetic. The two are complementary, and this probe reports readiness, not compliance with any regulation.

A boundary this section keeps honest: a machine-authorship declaration (MX `provenanceOrigin`) states who or what authored the content; a content-authenticity watermark (C2PA, SynthID) proves a file is synthetic. They are complementary, and marking readiness here is a structural signal, not a certification that this site meets any regulation.

---

<!-- SECTION:SOFT_404 -->
## Soft 404s

The custom 404 page on this site returns a correct HTTP 404 status, but it carries Schema.org content markup (the same structured data a real content page would carry). For a person the 404 is obvious. For a machine the JSON-LD is the signal that a valid, describable resource is present, so an agent reading the structured data treats the error page as a real page and can extract entities from it. This is a soft 404 at the machine layer even though the status code is right. The fix is to strip content schema from the error page so it presents to a machine as the error it is, and reserve content JSON-LD for addresses that resolve.

We probed 52 addresses that should answer 404 when they are absent; 0 returned a soft 404 instead. Among the well-known discovery paths, 0 of 44 were soft 404s. Severity: schemaOnError.
<!-- END:SOFT_404 -->

---

## Structured Data Inventory

**Table 19**

*Structured Data Inventory*

| Schema Type  | Pages | Required % | Recommended % | Notes                                    |
|--------------|-------|------------|---------------|------------------------------------------|
| ListItem | 8 | 100% | 100% |  -  |
| WebPage | 12 | 100% | 100% | Website, WebSite, Organisation, Person |
| Organisation | 8 | 100% | 100% | Person, ContactPoint, Reference, Website |
| BreadcrumbList | 8 | 100% | 100% |  -  |
| Person | 7 | 100% | 100% | Organisation, PropertyValue |
| Offer | 2 | 100% | 100% | Organisation, Service, PriceSpecification |
| Service | 2 | 100% | 100% | Organisation, Service, Website, Reference |

| WebSite | 2 | 100% | 100% | Organisation, Person, Website, Reference |
| ContactPoint | 2 | 100% | 100% |  -  |
| AboutPage | 1 | 100% | 100% | Organisation, Reference, Website, Person |
| CommunicateAction | 1 | 100% | 100% | EntryPoint |
| EntryPoint | 1 | 100% | 100% |  -  |
| PropertyValue | 1 | 100% | 100% |  -  |
| ContactPage | 1 | 100% | 100% | Organisation, Person, Reference, Website |
| ImageObject | 1 | 100% | 100% |  -  |
| PriceSpecification | 1 | 100% | 100% |  -  |
| Blog | 1 | 100% | 100% | Organisation, Person, Reference, Website |

**Structured Data Quality:** 94/100\
**Coverage:** 12 pages with JSON-LD out of 12 total (100%)\
**Unique types:** 18

Across the 12 pages we audited, structured data is strong. Machines extract entity data from these pages reliably and the typed vocabulary survives the read. Whether machines use the content for attribution or recommendation is their decision -- governance metadata (see the MX Readiness Level section) gives them the structured context to do so accurately.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what Mx Allabout earns in each.

**Table 20**

*SDQ Score Breakdown*

| Component                       | Earned | Max | Meaning                                                       |
|---------------------------------|--------|-----|---------------------------------------------------------------|
| Presence | 10 | 10 | schema.org JSON-LD is present on the page |
| Required property coverage | 25 | 25 | Every entity carries the properties its type requires |
| Recommended property coverage | 15 | 15 | Entities carry the properties their type recommends |
| Entity richness | 10 | 15 | Entities are described with enough properties to be useful |
| Cross-entity references | 15 | 15 | Entities reference each other (nested types and @id links) |
| Linked-data signals | 9 | 10 | Linked-data properties present (sameAs, mainEntityOfPage, isPartOf, about, mentions) |
| Vocabulary validity | 10 | 10 | Every @type is a valid Schema.org type |
| **Total** | **94** | **100** | |

---

## Structured Data Findings

The audit found no gaps in the Schema.org property coverage on the audited pages. Every typed entity on the sampled pages carries its required and recommended properties, and every `@type` value is valid Schema.org vocabulary. A wider audit is the only way to confirm the same holds across the rest of the estate.

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is: a Product, an Article, an Organisation: but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside any single page. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

**What this section checks.** Each signal below is derived deterministically from served HTML and JSON-LD on disk: no inference, no model judgement. Five structural signals fire per page: (i) self-promotional listicle (a ranked list is advertised whose first entry resolves to the publisher's own host), (ii) year-swap refresh (the title year is two or more years ahead of `dateModified`), (iii) first-party superlative (claims like "best", "leading", "high-quality" without an external reference), (iv) third-party citation count (outbound links to hosts other than the audited site), and (v) provenance metadata presence (`author`, `dateModified`, `publisher`). Pages whose body content runs over 400 words while emitting zero third-party citations carry no verifiable references and contribute to the blocker list. When the audited set is clean we omit the per-page table altogether and let the verdict line below carry the result.

**The list format is not the problem.** Ranked, comparative lists are among the most-cited content shapes in AI answers, so we never flag a page for being a list. What we flag is the self-ranking variant: a "best N" page that puts its own brand at position one. It repeats a familiar move - the FAQ markup Google deprecated for gaming while AI systems kept reading it. The gamed surface gets demoted; the format stays valuable; the gap between them is provenance. The demotion is not an SEO cost you can trade for AI reach: AI answer engines retrieve through search, Google's own among them, so a page the search engine demotes is a page the AI does not surface at the top. A self-ranking list reads as a rigged result to anything checking who made the ranking, and it forfeits the visibility it was trying to manufacture.

### Per-page findings

**Table 21**

*Per-page findings*

| Page | Self-ranking | Year-swap | First-party superlative | Third-party citations | Provenance metadata |
|------|----------|-----------|--------------------------|------------------------|----------------------|
| [/about/contact.html](https://mx.allabout.network/about/contact.html) |  -  |  -  |  -  | **0 third-party links** (body 426w) | complete |
| [/blog/the-provenance-gap.html](https://mx.allabout.network/blog/the-provenance-gap.html) |  -  |  -  | "we are the best" | 2 third-party links | no JSON-LD entities |
| [/cog.html](https://mx.allabout.network/cog.html) |  -  |  -  |  -  | **0 third-party links** (body 1318w) | no JSON-LD entities |
| [/services/certified-operator.html](https://mx.allabout.network/services/certified-operator.html) |  -  |  -  |  -  | **0 third-party links** (body 1923w) | no JSON-LD entities |
| [/audit/](https://mx.allabout.network/audit/) |  -  |  -  |  -  | **0 third-party links** (body 458w) | no JSON-LD entities |
| [/learn/mx-principles.html](https://mx.allabout.network/learn/mx-principles.html) |  -  |  -  |  -  | **0 third-party links** (body 2437w) | no JSON-LD entities |
| [/audit/](https://mx.allabout.network/audit/) |  -  |  -  |  -  | **0 third-party links** (body 458w) | no JSON-LD entities |
| [/llms-full.txt](https://mx.allabout.network/llms-full.txt) |  -  |  -  | "we are the best" | **0 third-party links** (body 347292w) | no JSON-LD entities |
| [/services/](https://mx.allabout.network/services/) |  -  |  -  |  -  | **0 third-party links** (body 613w) | no JSON-LD entities |
| [/news.html](https://mx.allabout.network/news.html) |  -  |  -  |  -  | **0 third-party links** (body 769w) | no JSON-LD entities |
| [/](https://mx.allabout.network/) |  -  |  -  |  -  | **0 third-party links** (body 1047w) | complete |
| [/about/printworks.html](https://mx.allabout.network/about/printworks.html) |  -  |  -  |  -  | **0 third-party links** (body 887w) | missing: author, publisher |
| [/books/](https://mx.allabout.network/books/) |  -  |  -  |  -  | **0 third-party links** (body 792w) | no JSON-LD entities |
| [/services/](https://mx.allabout.network/services/) |  -  |  -  |  -  | **0 third-party links** (body 613w) | no JSON-LD entities |
| [/learn/explicit-over-implicit.html](https://mx.allabout.network/learn/explicit-over-implicit.html) |  -  |  -  |  -  | **0 third-party links** (body 671w) | no JSON-LD entities |
| [/services/eaa/](https://mx.allabout.network/services/eaa/) |  -  |  -  |  -  | **0 third-party links** (body 740w) | no JSON-LD entities |
| [/learn/accessibility-ai-convergence.html](https://mx.allabout.network/learn/accessibility-ai-convergence.html) |  -  |  -  |  -  | **0 third-party links** (body 688w) | no JSON-LD entities |
| [/learn/](https://mx.allabout.network/learn/) |  -  |  -  |  -  | **0 third-party links** (body 492w) | no JSON-LD entities |
| [/tools/pdf-inspector.html](https://mx.allabout.network/tools/pdf-inspector.html) |  -  |  -  |  -  | **0 third-party links** (body 1892w) | no JSON-LD entities |
| [/books/](https://mx.allabout.network/books/) |  -  |  -  |  -  | **0 third-party links** (body 792w) | no JSON-LD entities |
| [/llms.txt](https://mx.allabout.network/llms.txt) |  -  |  -  |  -  | **0 third-party links** (body 2268w) | no JSON-LD entities |
| [/learn/](https://mx.allabout.network/learn/) |  -  |  -  |  -  | **0 third-party links** (body 492w) | no JSON-LD entities |

The **Self-ranking** column flags a self-promotional listicle: a page whose `<title>` or `<h1>` advertises a ranked list and whose position-one entry resolves to the publisher's own host or brand. A year-swap refresh is a page whose title year is two or more years ahead of its JSON-LD `dateModified`. The citation column counts outbound links to hosts other than the audited site; pages with body content over 400 words and zero third-party citations carry no verifiable references.

### Templated clusters

No templated clusters detected at the audited scale. Pages in the audited set either carry product entities or have enough structural and textual variation to clear the stamp-out threshold.

### Provenance verdict

No provenance-gap blockers detected on the audited set. Pages clear the structural primitives we measure here.

Any page contributing to a blocker above is capped at **Discoverable** readiness in the MX Readiness Level table below, regardless of its other scores. Citation readiness requires a verifiable claim to cite.

---

## Marker Reachability

**Table 22**

*Marker Reachability*

| Marker                            | In served   | In rendered | In head | Reachable <250KB | Injected by JS |
|-----------------------------------|-------------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Yes | Yes | Yes | Yes | No |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Yes | Yes | Yes | Yes | No |
| Twitter Card meta tags | Yes | Yes | Yes | Yes | No |
| MX governance meta tags | Yes | Yes | Yes | Yes | No |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Yes | Yes | Yes | Yes | No |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Yes | Yes | Body | Yes | No |

All detected markers are present in the served HTML on the pages we audited. Server-side and browser-based agents see the same signals on the sampled pages.

---

## Schema Maturity Level

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work. Maturity is a structural classification: it depends on what the markup carries (typed blocks, required properties, cross-references, external identifiers), not on the SDQ score the markup happens to earn. A page can sit at Level 1 with a high SDQ score and at Level 3 with a moderate one. Score and level are reported separately.

**Table 23**

*Schema Maturity Level*

|  | Level | Name | What it looks like |  |
|---|-------|------|---------------------|---|
|  | 0 | Clean slate | No Schema.org markup present. The full maturity curve is open: every property added at this stage is net new capability. |  |
|  | 1 | Decoration | Typed blocks present, with sparse properties and no nesting or cross-references. The structural primitives are in place; the next opportunity is to fill the required and recommended fields. |  |
|  | 2 | Good schema | Full required and recommended properties, nested types where appropriate, valid vocabulary. The next opportunity is to wire entities together with @id cross-references. |  |
|  | 3 | Real graph | Level 2 plus @id cross-references between entities and linked-data signals (sameAs, mainEntityOfPage, isPartOf). The next opportunity is to anchor entities to external identifiers. |  |
| **→** | 4 | Verified linked data | Level 3 plus external identifiers (Wikidata QIDs, ISNIs, ORCIDs) and provenance metadata. Entities are anchored in the linked-data web. | **←** |

**Current level:** 4: Verified linked data\
**The site is at the top level, continue monitoring**

The Structured Data Quality (SDQ) score and the Schema Maturity Level measure two different things. SDQ counts the properties present and validates them against Schema.org expectations; the level captures whether those properties are connected (cross-entity wiring, linked-data signals, external authority identifiers). Both numbers above are reported as-is from the audit data.

The classification is conservative: every Schema.org block on every audited page must clear a level's bar for this site to claim it, so a handful of thin blocks or pages without markup caps the level even when most pages individually sit higher. That is deliberate. An agent does not choose which page it lands on, so the level reflects what the weakest landing point guarantees.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. A break at any stage propagates to all subsequent stages.

**Table 24**

*5-Stage MX Journey*

| Stage | Name              | Status      | Score | Key Metric                                        |
|-------|-------------------|-------------|-------|---------------------------------------------------|
| 1 | Discovery | Pass | 100 | Crawlable with semantic HTML |
| 2 | Citation | Pass | 100 | Schema.org: WebSite, BreadcrumbList, ListItem (100% required properties) |
| 3 | Search & Compare | Pass | 60 | Commerce schema with 0 supporting patterns |
| 4 | Price Understanding | Pass | 67 | Pricing visible |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

*Each stage carries its own pass threshold, so Status and Score are not comparable across rows: a score that passes one stage can fall short on another with a stricter bar.*

The pages we audited meet MX compatibility across all applicable stages of the agent journey. Machines have the structured context they need for accurate comprehension and attribution across the sampled content.

---

## AI Attribution

When a human clicks a link from ChatGPT, Perplexity, Gemini, Copilot, or Claude to the site, the browser does not record which AI sent them. The server sees a visit with no "came from" field, and the analytics platform counts it as if the user typed the URL directly. A higher-converting channel quietly hides inside direct traffic.

This is not a configuration mistake on mx.allabout.network's end: the information is stripped before the server ever sees the request. In-app browsers on iOS and Android do the same thing, and any AI surface that makes a server-side fetch on the user's behalf carries no browser context at all. The only place to recover the attribution is at the edge, by capturing and classifying the request before it reaches the analytics tag.

We see that mx.allabout.network has an active edge-capture pattern, so AI visits are being separated from organic direct traffic. The browser does not tell the server which AI sent them.

### Live capture (last 30 days)

**Table 25**

*Live capture (last 30 days)*

| Metric | Count |
|--------|-------|
| AI crawler hits (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, ...) | 2605 |
| AI referral hits (human visits from chat surfaces) | 0 |
| Total AI-attributable visits | 2605 |

**Top referring AI surfaces:**

**Table 26**

*Live capture (last 30 days)*

| Agent | Event Type | Hits |
|-------|-----------|------|
| amazonbot | crawler | 866 |
| meta-ai | crawler | 482 |
| chatgpt | crawler | 393 |
| bytespider | crawler | 361 |
| claude | crawler | 240 |
| ccbot | crawler | 136 |
| perplexity | crawler | 74 |
| gemini | crawler | 53 |

### The 6-step playbook

1. **Set up custom regex channel groups in GA4.** Catches AI referrers that would otherwise land in direct. Match source/medium against `chat.openai.com`, `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`, `claude.ai`. Takes about 30 minutes.
2. **Monitor direct traffic to deep pages.** True type-in traffic lands on the homepage. Direct traffic to deep interior pages is almost always misattributed AI-referred traffic with stripped referrers.
3. **Track AI share of voice.** How often the brand is mentioned as an answer, before anyone clicks. This is the only metric that captures AI attribution at the recommendation layer, not the click layer.
4. **Get third-party validation on sites AI actually cites.** AI models weight citations to high-authority third-party sources. Presence on those sources is a leading indicator of AI recommendation volume.
5. **Structure data so AI models parse you as an entity.** Schema.org Organisation + Product + Offer, explicit entity relationships, consistent naming across pages. AI models recommend entities, not page collections.
6. **Capture the first-mover baseline now.** Traditional search volume is shifting into AI surfaces. Brands instrumenting capture now build the historical baseline everyone else will wish they had.

> **Recommendation for Mx Allabout:** adopt an edge-capture pattern. Any runtime that sits in front of the origin and can write to a small datastore works: Cloudflare Workers + D1, Fastly Compute + KV, Vercel Edge Middleware + a serverless DB, AWS Lambda@Edge + DynamoDB, or a lightweight server-side middleware on the origin itself. The pattern is the same in each: a User-Agent classifier, a surface classifier, a small insert, and a non-blocking write that does not add latency to the user response. The full pattern is around 100 lines in any of these runtimes and backfills data from deploy day forward.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, condensing by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Pass · 12/12
  - *Means:* Every page is well under the 250 KB hard ceiling at which some server-side agents stop reading, and main content sits within the 50-100 KB offset windows. The largest page is 49 KB ([/blog](https://mx.allabout.network/blog)).
  - *Data:* Largest page: 49 KB ([/blog](https://mx.allabout.network/blog)). Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows.
- **SPA Shell** - Pass · 12/12
  - *Means:* Served HTML matches rendered HTML, no JavaScript is required for content. Server-side agents see the same content a browser does.
  - *Data:* Max gap score: 0. 0 means served and rendered match.
- **Soft 404** - Fail · catch-all
  - *Means:* The error page returns a correct HTTP 404, but it carries Schema.org content markup. A machine reading the JSON-LD treats the 404 as a valid content page, the same machine-facing confusion a soft-404 creates. Remove the content schema from the error page so machines read it as the error it is.
  - *Data:* The custom 404 page returns a correct HTTP 404 status but carries Schema.org content markup, so a machine reading the JSON-LD treats the error page as a valid content page.
- **Boilerplate Burial** - Pass · 12/12
  - *Means:* Navigation and chrome do not dominate the page; main content is reachable without wading through overhead.
  - *Data:* Highest boilerplate-to-content ratio: 1.34. Threshold: < 10 (and < 80 KB of inline head bytes).
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
  - *Data:* 1 page(s) cross origin during redirect.
- **Generic Headings** - Pass · 12/12
  - *Means:* Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction".
  - *Data:* Worst case: 0% generic headings.
- **Body Content Ratio** - Pass · N/A
  - *Means:* Actual prose content averages 61% of served bytes, well above the 30% threshold. Pages are content-heavy, not overhead-heavy.
  - *Data:* Average: 61%. Threshold: 30%.
- **Inline Tag Bloat** - Pass · 12/12
  - *Means:* No `<style>` or `<script>` block exceeds the 500-byte threshold on any page. Head stays lean for agents that read head-first.
  - *Data:* 0 element(s) > 500 bytes. Largest single-page inline CSS block: 0 B. Largest single-page inline JS block: 0 B.
- **Head Weight** - Pass · N/A
  - *Means:* Head bytes are a small fraction of each page. Agents reach body content quickly.
  - *Data:* Max ratio: 0.00. Average: 0.00. Threshold: 0.50.

**Pipeline Survivability score:** 100/100

No pipeline survivability checks require attention; every audited page passes the resilience tests. As a result, machines can retrieve and parse each page in its entirety without truncation or errors. The opportunity here is to continue monitoring updates so that this full accessibility for automated agents remains intact.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check set, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

**Table 27**

*Div Soup: naked containers without semantic mapping*

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Served and rendered | 100/100 (low) | 0 bare divs (0% of containers, depth 0) |  -  |

**Worst page (served and rendered are identical):** [the home page](https://mx.allabout.network/)

We confirm that across the audited set, the site uses semantic HTML well and provides machines with reliable structural cues.

---

## Security Headers

**Table 28**

*Security Headers*

| Header                          | Status   | Purpose                                          |
|---------------------------------|----------|--------------------------------------------------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes (11/12) | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | Yes (11/12) | Prevents XSS and injection attacks |
| X-Frame-Options | Yes (11/12) | Prevents clickjacking |
| X-Content-Type-Options | Yes (11/12) | Prevents MIME-type sniffing |

Header coverage is uneven across audited responses: HSTS (Strict-Transport-Security) on 11/12 audited responses, Content-Security-Policy (CSP) on 11/12 audited responses, X-Frame-Options on 11/12 audited responses, X-Content-Type-Options on 11/12 audited responses. The header set is configured per route or per virtual host rather than uniformly at the origin or CDN edge; a single server-config change brings the missing responses in line with the strongest baseline already in place.

**Coverage:** 11 of 12 audited URLs carry all five headers (`/about` is the exception).

- **`/`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/about`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type No
- **`/about/about.html`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/about/contact.html`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/about/printworks.html`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/AI-USAGE.html`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/audit`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/blog`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/blog/2-august-2026-article-50-reginald.html`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/blog/a-standard-that-knows-what-it-isnt.html`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/blog/adobe-just-bought-the-dashboard.html`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes
- **`/blog/agent-discoverability-checklist.html`**: HTTPS Yes · HSTS Yes · CSP Yes · X-Frame Yes · X-Content-Type Yes

HTTPS: 12/12 | HSTS: 11/12 | CSP: 11/12 | X-Frame-Options: 11/12 | X-Content-Type-Options: 11/12

---

## Cross-Page Consistency

**Table 29**

*Cross-Page Consistency*

| Pattern                          | Coverage | Pages missing it   |
|----------------------------------|----------|--------------------|
| Schema.org JSON-LD | 100% |  -  |
| MX governance tags | 100% |  -  |
| Open Graph tags | 100% |  -  |
| Twitter Card tags | 100% |  -  |
| Skip link | 100% |  -  |
| llms.txt link tag | 100% |  -  |
| Canonical URL | 100% |  -  |
| Exactly 1 H1 | 100% |  -  |
| Code examples present | 0% | 12 |
| Self-contained sections | 100% |  -  |
| Error/troubleshooting docs | 0% | 12 |
| Lighthouse heading compliance | 100% |  -  |

**Overall Consistency:** 96%

Some pages in the 12-page sample are missing metadata patterns that others carry. Machines hitting different pages get different quality data. The Missing Pages column shows where to focus on the sampled pages.

## Content Freshness and Expiry

2 of 147 audited page(s) declare a machine-readable `expires`, the date after which the content should no longer be treated as authoritative.

None of the declared `expires` dates is in the past; the declared content is current as of the audit run on 2026-06-24.

A page that still renders reads to a machine as a page that still counts. A declared `expires` lets an agent treat lapsed content as out of date rather than current, instead of acting on a page the world has already left behind.

**What to do:**

- Bring a page's `expires` forward to the withdrawal date, or remove the page, when the service it describes ends.
- Set `expires` on time-bound content (timetables, fare tables, offers, event and campaign pages) so a machine can tell when it lapses.
- Surface the review and unpublish dates the content system already holds into the published page, where a machine can read them.

---

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no brand-name or canonical-URL divergence flagged by the consistency check.

**Table 30**

*Content Consistency*

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Brand-name parity | Pass | Brand name appears consistently across all 12 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 12-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## PDF Documents: Accessibility and Machine Readability

We observe that accessibility legislation across major markets converges on ISO 14289-1 (PDF/UA) as the technical baseline, with the EAA Directive serving as a precisely codified example of this global alignment.  
We also find that an untagged PDF is invisible to AI agents, search crawlers and automated pipelines because they cannot extract text or structure; tagging the PDF with a proper structure tree makes it machine-readable in the same way semantic HTML is.

1 PDF document(s) were identified by the audit: those linked from the crawled pages combined with those declared in the sitemap. PDFs whose only source is the sitemap are marked as such in the inventory. The MX Document Accessibility note specifies a three-layer conformance contract: **Tagged** (Level 1, ISO 14289-1 PDF/UA), **Declared** (Level 2, XMP `pdfuaid:part`), **Verified** (Level 3, recorded check).

**Scope note:** this inventory covers PDFs reachable from the crawled pages plus any `.pdf` URLs the sitemap declares. PDFs behind login forms, linked only from uncrawled pages, stored in unlinked directories that are kept out of the sitemap, or hosted on third-party domains still fall outside the crawl boundary. A wider-scope engagement is needed for a complete picture of accessibility exposure across the full document estate.

### Inventory

- https://mx.allabout.network/AI-USAGE.pdf
  Source: https://mx.allabout.network/, HTML alternative: Yes

### Sample analysis

We sampled one PDF from the inventory with the heuristic checker, preferring the first document served from this site's own domain over third-party links. Findings:

**Table 31**

*Sample analysis*

| Layer | Status | What this means |
|-------|--------|-----------------|
| Level 1: Tagged (ISO 14289-1) | **pass** | Structure tree + `/Marked true` declaration |
| Level 2: Declared (XMP `pdfuaid:part`) | pass | Public conformance claim in the document metadata |
| Level 3: Verified (independent check) | n/a: out of scope of this snapshot | Vendor or in-house validator run, recorded in `provenancePedigree.checks[]` |

**Accessibility exposure on this sample: low.** 

### Full PDF review

This is a one-PDF sample. A full PDF review runs the same checker over every document in the inventory, returning per-document Level 1 / Level 2 / Level 3 verdicts with remediation notes.

Accessibility legislation in major markets (the EAA, Section 508, UK PSBAR) treats ISO 14289-1 (PDF/UA) Level 1 as the structural floor for in-scope public documents; conformance is a legal duty of the publisher. Most structural issues are cheapest to fix at PDF generation time, once the source pipeline emits tagged PDFs.

---

## Text Patterns

Analysis of text patterns across audited pages found content reaching Hints at AI on the AI-tells scale (6 of 12 pages scored). Machines do not consistently cite or label AI-generated content; this observation describes what the analysis found, not a conclusion about authorship. The full per-page breakdown is in `ai-tells.json` in the results directory.

---

## Content Uniqueness

Analysis of prose content across audited pages found 5 of 12 HTML pages reaching Significant Duplication on the content-uniqueness scale. Pages with high shared content give machines redundant information per page, reducing the value of multi-page crawls.

**Table 32**

*Content Uniqueness*

| Page | Unique content | Band |
|------|---------------|------|
| `/about` | 43% | Significant Duplication |
| `/blog/a-standard-that-knows-what-it-isnt.html` | 45% | Significant Duplication |
| `/blog/agent-discoverability-checklist.html` | 54% | Moderate Duplication |
| `/blog/2-august-2026-article-50-reginald.html` | 71% | Moderate Duplication |
| `/audit` | 75% | Moderate Duplication |
| `/about/contact.html` | 77% | Expected Boilerplate |
| `/about/about.html` | 86% | Expected Boilerplate |
| `/blog/adobe-just-bought-the-dashboard.html` | 86% | Expected Boilerplate |
| `/AI-USAGE.html` | 87% | Expected Boilerplate |

**Most-shared content blocks:**
- "making the web, and everything you publish beyond it, work for everyone and ever." (12 pages, 100%)
- "© 2026 digital domain technologies ltd, trading as cognovamx. all rights reserve." (12 pages, 100%)
- "contact info@cognovamx.com published by digital domain technologies ltd, trading." (11 pages, 92%)
The full per-page breakdown (12 pages) is in `prose-repetition.json` in the results directory.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: resolve Commerce Visibility findings (currently 20/100)
2. **Review Priority 2-3 findings**: metadata and schema improvements that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

**Table 33**

*What's Next*

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1 (Compliance Risk) | Priority 1 resolved: WCAG 2.1 AA accessibility compliance restored |
| Full Implementation | P1 (P1-P1) | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | The full machine-readable estate, beyond the web pages |
| Data-Sovereign Option | Regulated industries | Run the full audit pipeline on your own infrastructure - no client content leaves your network |

This audit is a starting point. The outcome we work toward is a site any machine can read, trust, and act on, and a dated, attested record you can show to a regulator, a partner, or an acquirer on request. Reaching it (structured data, discovery files, accessibility, governance metadata, and re-audit on a schedule you set) is available as a managed service. We also run training sessions that give development teams the MX vocabulary and implementation patterns directly, so the gap between findings and fixes is weeks, not quarters. To take any of it further, contact CogNovaMX Ltd at <info@cognovamx.com>.

---

## Summary of Findings

Accessibility scored a perfect 100/100, showing that machines can easily interpret the content and users enjoy an inclusive experience. Discovery readiness at 87/100 highlights an opportunity to enhance discovery artefacts so that machines can locate and index the pages more effectively. We invite you to act on these opportunities to further strengthen machine comprehension of https://mx.allabout.network.

### Audit Scores

**Table 34**

*Audit Scores*

| Dimension | Score | Band |
|-----------|-------|------|
| Served-HTML Structure | 100/100 | Excellent |
| Accessibility | 100/100 | Excellent |
| SEO (all pages) | 93/100 | Excellent |
| SEO (content pages) | 93/100 | Excellent |
| MX Stack Completeness | 96/100 | Excellent |
| Structured Data Quality | 94/100 | Excellent |
| Commerce Visibility | 20/100 | Needs Improvement |
| Discovery Readiness | 87/100 | Excellent |
| Heading Quality | 92/100 | Excellent |
| Agent Readability | 90/100 | Excellent |
| Pipeline Survivability | 100/100 | Excellent |
| Cross-Page Consistency | 96% | Excellent |

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

---

## Appendix A: Pages Audited

- **`/ (nav)`**: SEO 92 · A11y 100 · Back 100 · Served 100 · Rendered 100
- **`/about`**: SEO 90 · A11y 100 · Back 75 · Served 100 · Rendered 100
- **`/about/about.html`**: SEO 100 · A11y 100 · Back 100 · Served 100 · Rendered 100
- **`/about/contact.html`**: SEO 93 · A11y 100 · Back 100 · Served 100 · Rendered 100
- **`/about/printworks.html`**: SEO 100 · A11y 100 · Back 100 · Served 100 · Rendered 100
- **`/AI-USAGE.html`**: SEO 95 · A11y 100 · Back 100 · Served 97 · Rendered 100
- **`/audit`**: SEO 84 · A11y 100 · Back 100 · Served 100 · Rendered 100
- **`/blog`**: SEO 98 · A11y 100 · Back 100 · Served 100 · Rendered 100
- **`/blog/2-august-2026-article-50-reginald.html`**: SEO 82 · A11y 100 · Back 100 · Served 100 · Rendered 100
- **`/blog/a-standard-that-knows-what-it-isnt.html`**: SEO 92 · A11y 100 · Back 100 · Served 100 · Rendered 100
- **`/blog/adobe-just-bought-the-dashboard.html`**: SEO 95 · A11y 100 · Back 100 · Served 100 · Rendered 100
- **`/blog/agent-discoverability-checklist.html`**: SEO 97 · A11y 100 · Back 100 · Served 100 · Rendered 100

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 93/100.

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. External links are not tracked; this inventory covers same-host `<a href>` links only. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

Per page, internal links range from 1 to 76, averaging 3 across 173 pages. That is sparser than typical (benchmark median 20 per page).

**Table 35**

*Appendix B: Link Inventory*

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 441 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |

---

## Appendix C: Image Efficiency

We reviewed 37 images across the audited set: 37 WebP. 32 of 37 (86.5%) carry alt text, leaving 5 without it. Each missing alt attribute is a place where a screen-reader user or a machine reading the page gets no description of what the image shows.

On loading strategy, 24 images are marked `loading="lazy"` and 13 `loading="eager"`, so every image on the audited pages declares its fetch behaviour explicitly rather than leaving the browser to guess.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.x (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: **Netlify** (high confidence - multiple fingerprint signals). The main audit uses Netlify-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** **React** (low confidence) - JS framework; **Next.js** (low confidence) - JS framework; **Bootstrap** (medium confidence) - CSS framework; **Tailwind CSS** (low confidence) - CSS framework; **WooCommerce** (low confidence) - CMS plugin; **Netlify** (low confidence) - CDN / delivery. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from the audited pages. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 12 pages examined | Platform: Netlify | Analysis method: Hybrid (automated + manual verification) | robots.txt: Present (6 directives)

**Measurement completeness:** Every probe completed during this audit, with no network errors or timeouts. The findings below rest on a full data collection.

**What comes next.** This report is the foundation, not the finish line. Implementing the recommendations requires the technical knowledge that produced them; we bring that forward. Our implementation engagements begin where this audit ends.

The outcome we work toward is a site - and an estate of documents beyond it - that any machine can read, trust, and act on, and that carries its own dated, attested record for the humans who need to verify that claim. Reaching it - structured data, discovery files, accessibility, governance metadata, and re-audit on a regular schedule - is available as a managed service or as licensed tooling your team runs independently. We also run training sessions that give development teams the MX vocabulary and implementation patterns directly. To take any of it further, contact CogNovaMX Ltd at info@cognovamx.com.

---

\clearpage

## Further Reading

The reference material cited in this report. Click the link on screen or scan the QR code on paper: both encode the same URL.

**Table 36**

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

MX is to machines what UX is to users: it asks not whether a human can read this report, but whether a machine can read it, verify it, and act on it. A standard is credible only when the people who publish it run on it, so this report is built to the standard it measures.

This report carries its own provenance. Every step that produced it is recorded in two adjacent JSON sidecars - one AI, one deterministic - and the full evidence chain travels inside the PDF's XMP metadata: extract it with `exiftool -b -XMP-mx:ProvenanceAiPayload mx-allabout-network-report.pdf | jq .`. The PDF is a tagged ISO 14289-1 (PDF/UA-1) Level 2 document with a complete reading-order structure tree. What this audit measures on a client's behalf, this deliverable meets.

Machine-readable content is visible to agents and validators. Machine-trustworthy content adds a provenance layer - a dated, attested record that names who published it and under what rubric. Readable is what MX makes content; the provenance layer is what makes it trustworthy. The two do different jobs, and this report carries both. It is an example of what that looks like in practice.

\clearpage

## Practice What We Preach: Our Evidence Chain

A standard is credible only when we run on it ourselves. We hold this audit deliverable to the same MX standards we apply to the audited site; consider it working proof of the practice it recommends. Every consequential step that produced this report (LLM-driven prose passes, deterministic gate verdicts, multi-agent attribution probes, repair iterations) is recorded in two adjacent JSON sidecars next to this PDF.

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the output it produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the operator. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `*.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `*.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload mx-allabout-network-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did. We prefer determinism to inference: explicit over inferred, recorded over remembered, a result you can reproduce over one we could only explain. Where a check can be made by a rule, a rule makes it, and the rule leaves a record rather than an opinion. That is why this chain shows what we did instead of asking you to trust a summary of it.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the operator distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it to ourselves.

The result is a report that serves two audiences simultaneously: the humans who read it, and any machine that encounters it later - whether that is a validator checking the provenance chain, an assistant answering a query about the audit, or a regulator walking from a compliance clause to the evidence that supports it. One deliverable, two audiences, no guessing.

---

**Date:** 24 June 2026\
(c) 2026 CogNovaMX Ltd. All rights reserved.

*This is a sample run over a subset of the site. CogNovaMX Ltd can scope a full-estate audit.*

