---
title: "Www Dreambigsemi: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-06-16"
modified: "2026-06-16"
client: "Www Dreambigsemi"
clientSlug: "www-dreambigsemi-com"
clientUrl: "https://www.dreambigsemi.com"
reportId: "www-dreambigsemi-com-WEB-AUDIT-20260616"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-06-16"
auditCommand: "node scripts/audit-pipeline.js https://www.dreambigsemi.com --pages 10 --date 2026-06-16"
description: "Executive audit report reviewing accessibility, performance, SEO, structured data, and AI agent compatibility for Www Dreambigsemi"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 55
accessibilityScore: 100
seoScore: 74
llmSuitabilityScore: 75
totalIssues: 0
pagesAudited: 12
version: "1.0"
pipelineVersion: "1.1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-06-16/www.dreambigsemi.com/www-dreambigsemi-com-report.md
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Www Dreambigsemi covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Www Dreambigsemi", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  # The single cog that manages this pipeline artefact, so a reader never
  # has to infer the steward (scripts/lib/managed-by.cjs is the resolver).
  x-mx-managedBy: mx-audit.cog.md
  runbook: "Executive audit report for Www Dreambigsemi. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in the top-level auditCommand field. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-16/www.dreambigsemi.com/www-dreambigsemi-com-report.md', which validates the report then renders it through scripts/bin/mx.pdf.sh."
  generate:
    command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-16/www.dreambigsemi.com/www-dreambigsemi-com-report.md"
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/www.dreambigsemi.com/latest-report.pdf"
    description: "Generate PDF audit report for Www Dreambigsemi"
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
    sidecar: "www-dreambigsemi-com-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "www-dreambigsemi-com-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 16 June 2026\
**Report ID:** www-dreambigsemi-com-WEB-AUDIT-20260616

---

\clearpage

## About This Report

We audited 12 pages across www.dreambigsemi.com's site using the Web Audit Suite. We review each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image efficiency, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

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
| Performance | **55**/100 | `##########--------` |
| Accessibility | **100**/100 | `##################` |
| SEO | **74**/100 | `#############-----` |
| Served-HTML Structure | **75**/100 | `##############----` |
| MX Stack Completeness | **61**/100 | `###########-------` |
| Agent Readability | **47**/100 | `########----------` **(!)** |
| Pipeline Survivability | **79**/100 | `##############----` |

*The three machine metrics measure different things. **Served-HTML Structure** is the semantic markup an agent reads before JavaScript runs; **Agent Readability** is how easily the content can be quoted once reached; **Pipeline Survivability** is whether a page survives an agent's fetch and ingest. A site can score low on one and high on another.*

Agent Readability was adjusted down by 15 points for site-wide gaps a machine cannot work around:

- **Real AI agents are blocked from fetching the site** (-10): blocked: CCBot (Common Crawl)
- **Origin server is slow for an agent fetch** (-5): origin verdict slow, slowest median 485ms

We found that your pages deliver a highly accessible experience-zero WCAG AA issues across the audited set-and they showcase a clean, consistent design and a brand voice that resonates with visitors. The layout is intuitive, the imagery is high-quality, and the content hierarchy supports easy navigation, giving human users a strong foundations to engage with your offerings.

The headline opportunity we want to draw attention to is strengthening machine comprehension by adding full MX governance fields-mx:status, mx:contentType, mx:audience, canonicalUri, and provenance markers. While your HTML is already parseable (AI Suitability 75/100), the absence of these metadata means machines lack the context needed for accurate interpretation. Adding them will raise MSC above 60 and Discovery Readiness above 40, moving the site from Discoverable to Governed and enabling richer machine-driven interactions.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, we observe a strong experience for human visitors, with fast loading times and excellent accessibility, while SEO remains solid.

**Table 2**

*Human Experience*

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Excellent | A | - |
| Performance | Good | B | A (median) |
| Accessibility (WCAG) | Excellent | A | A (median) |
| Trust and Credibility | Excellent | A | - |

*The UX / Navigation grade derives from measured navigation signals: heading-outline quality, single-H1 consistency, and skip-link consistency. The Trust and Credibility grade derives from measured transport and integrity signals: HTTPS coverage, security-header coverage, canonical-URL consistency, and correct error-page status.*

### Machine Experience

We found that across the audited set, machines can discover and parse your content with a Discovery Readiness of 25/100, Structured Data Quality of 58/100, MX Stack Completeness of 61/100, and Pipeline Survivability of 79/100, yet they lack governance context as shown by an MX Readiness Level of 1 (Discoverable).

**Table 3**

*Machine Experience*

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 25/100 | Needs Improvement | D | C (median) |
| Structured Data Quality | 58/100 | Good | B | B (median) |
| MX Stack Completeness | 61/100 | Good | B | B (median) |
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

**Evidence:** MX Stack Completeness 61/100 | Structured Data Quality 58/100 | Discovery Readiness 25/100 | Consistency 76%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so machines have the structured context they need for accurate comprehension. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, we see a strong foundations in SEO (74/100), consistent accessibility (100/100), and strong structured-data quality (58/100). These strengths provide the groundwork for the improvements highlighted below.

**Table 5**

*What's Working Well*

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Good | Good  -  2473ms average load time |
| SEO (content pages) | 74 | Good  -  titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | 4/5 headers present (CSP absent); 0 of 12 URLs carry all five |
| Structured Data | 58 | Good  -  JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 83 | Excellent  -  headings present and machine-parseable |
| Consistency | 76% | 76%  -  same metadata patterns across every page |
| Agent access | 7/8 | 7 of 8 AI user-agents receive HTTP 200; CCBot (Common Crawl) blocked |

**Positive patterns observed:**

- Accessibility is compliant across the audited set: Pa11y reports 100/100 with zero WCAG 2.1 AA errors on 12 pages.
- JSON-LD is present in the served HTML of every page: every agent that fetches the raw HTML gets the structured data.
- Body content ratio averages 43%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We identified 8 finding(s) on the audited set, ordered by regulatory exposure first and then by priority within each category.

**Table 6**

*At a Glance*

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Image Alt-text Coverage | Compliance Risk | High | Low | screen-reader users and machines miss the content of those images |
| 2 | Heading Hierarchy Skips Levels | Compliance Risk | Medium | Low | screen-reader and machine outline-builders may misread the page structure |
| 3 | Semantic Structure (Naked Containers) 36/100 | Compliance Risk | Medium | Medium | machines lose structural context and infer page regions by position |
| 4 | Slow Origin Response | Cross-cutting | Medium | High | first-time visitors and cold-cache agents wait for the first byte |
| 5 | Security headers absent: CSP | Cross-cutting | Medium | Low | Missing security headers increase exposure to content injection and clickjacking |
| 6 | Structured Data Property Gaps | Machine Readability Opportunity | Medium | Medium | machines may extract these entities incompletely or skip them |
| 7 | Schema.org coverage is partial: Decoration (SDQ 58/100) | Machine Readability Opportunity | Medium | Medium | Agents can partially parse structured facts but key properties may be missing |
| 8 | No llms.txt published | Machine Readability Opportunity | Medium | Low | Agents have no machine-curated index of site content or declared access policy |

---

**Priority 1: Image Alt-text Coverage**

**Bucket:** Compliance Risk

**Finding:** 13 of 37 images (35%) on the audited set carry no alt text, so their content is unavailable to assistive technology and to machines reading the page.

**What to change and why:**

- Add descriptive alt text to the informative images that lack it and empty alt to the decorative ones. This satisfies WCAG 1.1.1 across the image set.
- Generating alt text at upload time, or from the CMS media library, keeps coverage high as new images are added.

**Effort:** Low

---

**Priority 2: Heading Hierarchy Skips Levels**

**Bucket:** Compliance Risk

**Finding:** Heading levels skip on 4 audited page(s) (for example an h2 followed by an h4), so the document outline a machine or screen reader builds does not match the visible structure.

**What to change and why:**

- Order headings without skipping levels (an h2 followed by an h4 forces assistive technology and machines to guess the structure). Use heading level for hierarchy and CSS for visual size.
- A clean heading outline is the spine an agent uses to summarise the page; fixing it improves both accessibility and machine comprehension.

**Effort:** Low

---

**Priority 3: Semantic Structure (Naked Containers) 36/100**

**Bucket:** Compliance Risk

**Finding:** Rendered semantic-structure score 36/100: containers carry no role, ARIA landmark, or descriptive class, so machines fall back on positional inference to determine meaning. The worst page ([/resources](https://www.dreambigsemi.com/resources)) carries 245 bare divs of 433.

**What to change and why:**

- Replace the obvious landmark containers (header, nav, main, footer, aside) with their semantic elements and give the remaining containers meaningful class names, so machines stop falling back on positional inference to determine what each region is.
- Start with the page that scored worst; wrapping the landmarks alone usually drops the bare-div ratio sharply without restructuring the layout.

**Effort:** Medium

---

**Priority 4: Slow Origin Response**

**Bucket:** Cross-cutting

**Finding:** The slowest audited page took 5103 ms on a first-time (cold-cache) fetch, well above the healthy origin-response band, so a first-time visitor or an agent arriving on a cold cache waits noticeably for the first byte (returning visitors with a warm cache are served in about 485 ms).

**What to change and why:**

- Profile the slow route with server-side tooling (application logs, an APM tool, the browser performance panel against an uncached load) to find the time-to-first-byte cost; origin latency is a separate engineering investigation this audit can only name.
- Cache or precompute the expensive path so first-time visitors and agents that arrive on a cold cache do not pay the full origin cost.

**Effort:** High

---

**Priority 5: Security headers absent: CSP**

**Bucket:** Cross-cutting

**Finding:** Security headers absent: CSP (your site). Missing security headers increase exposure to content injection and clickjacking

**What to change and why:**

- Add the missing Content-Security-Policy header at the server or CDN edge; each directive is a one-line statement that applies your site once configured.
- Set them once in the edge or server configuration rather than per page so coverage stays complete as new pages ship.

**Effort:** Low

---

**Priority 6: Structured Data Property Gaps**

**Bucket:** Machine Readability Opportunity

**Finding:** 83 Schema.org property gap(s) on the audited set across WebSite, LocalBusiness, Article: required or recommended properties are missing, so machines extract these entities less reliably.

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 7: Schema.org coverage is partial: Decoration (SDQ 58/100)**

**Bucket:** Machine Readability Opportunity

**Finding:** Schema.org coverage is partial: Decoration (SDQ 58/100) (Homepage). Agents can partially parse structured facts but key properties may be missing

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 8: No llms.txt published**

**Bucket:** Machine Readability Opportunity

**Finding:** No llms.txt published (Root). Agents have no machine-curated index of site content or declared access policy

**What to change and why:**

- Publish the missing discovery file at the site root so agents and crawlers can find the machine-curated index and access policy in one fetch rather than inferring them.
- Reference the file from robots.txt and the sitemap so crawlers have a reliable signal that it exists.

**Effort:** Low

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs**: linking your Organisation entities to authoritative profiles (e.g., LinkedIn, Wikidata) gives machines verifiable provenance, improving trust signals across search and assistant surfaces.  
- **SpeakableSpecification**: adding speakable selectors to Article pages enables voice assistants to surface concise, machine-readable snippets directly from the content.  
- **potentialAction**: exposing a Contact or BookAppointment action on your Organisation entity lets agents discover actionable pathways for users without navigating deeper into the site.  
- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)): declaring usage policies in robots.txt informs machines how they may reuse or transform your content, enhancing compliance and safe integration.

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
| CCBot (Common Crawl) | `CCBot/2.0` | 403 | Blocked |
| Plain request (no UA) | *(empty)* | 200 | Accessible |

**Summary:** 7 of 8 tested agents can access the site. 1 agent(s) returned non-200 responses: CCBot (Common Crawl).

### Markdown Content Negotiation

**Table 8**

*Markdown Content Negotiation*

| Check | Result |
|-------|--------|
| URL probed | https://www.dreambigsemi.com |
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
| HTTP status code | 404 (correct) |
| Custom error page | Yes, custom error page (not a bare server default) |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | Yes |
| `<meta name="robots" content="noindex">` | No |
| Navigation back to valid content | Yes, links back to same-site content present |
| Internal navigation links | 27 links to same-site pages |
| MX governance tags | Absent |
| Schema.org JSON-LD | Present (the error page carries content schema, so machines can treat the 404 as a valid page; remove it) |

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
| Accessibility-tree score | 72/100 |
| Pages checked | 12 |

Across the 12 pages we checked, 4 distinct issue patterns reduce what reaches the tree. 2 of these repeat across pages with the same structure, which marks them as template-level: one change in the shared component clears the finding everywhere it appears.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Repeats on 11 of 12 pages with the same structure (a template-level pattern).

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/resources`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Repeated landmarks with no distinguishing labels** (WCAG 2.1 1.3.6)

The page carries more than one navigation (or complementary) landmark with no aria-label to tell them apart. In the tree they read as "navigation, navigation": a consumer cannot tell the site menu from the footer links or the breadcrumb. Repeats on 12 of 12 pages with the same structure (a template-level pattern).

*The fix:* Give each repeated landmark a short aria-label in the template ("Primary", "Footer", "Breadcrumb").

**Link whose accessible name carries no destination meaning** (WCAG 2.1 2.4.4)

The link's accessible name is a generic phrase or a bare URL. In the accessibility tree, and in any links-only projection of the page, every such link reads identically: the destination is unknowable without the surrounding layout, which machines and screen reader users do not have. Seen on `/resources`.

*The fix:* Name the destination in the link text itself in the template ("View pricing plans" rather than "click here").

The full set, one row per pattern with every affected page counted, is recorded in the `www-dreambigsemi-com-accessibility-tree.csv` sidecar alongside this report.

**Inspect your own tree.** Right-click any page, choose Inspect, open the Elements panel, click the `>>` icon, choose Accessibility, and toggle "Show Accessibility Tree". What you see there is what tree consumers receive: if a control or a heading is missing from that view, it is missing for them. Chrome DevTools' AI Assistance panel also accepts "Review accessibility" against any element this report flags.

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds for a returning visitor may be served from a warm CDN edge; the same page on a genuine first visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section re-measures the slowest page from the crawl and a median-load control across several fresh visits, then compares those against the first-visit response. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what a repeat visitor experiences). The overall verdict for each page is the worse of the two, so a fast returning-visitor median cannot paper over a slow first-visit response.

**Method:** Each URL is re-measured across several fresh visits and scored on the median of those measurements. For each page we compare both the crawler's cold-cache baseline and the median of three fresh GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.dreambigsemi.com/resources`. A first-time visitor sees the cold-cache cost: the crawler recorded 5103 ms on its initial fetch. **First-visit verdict: Slow: investigate origin**. Three fresh re-probes that followed returned 485ms, 561ms, 480ms, giving a returning-visitor median of **485 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://www.dreambigsemi.com/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-xz9m8-k8ma5-njxml`. A first-time visitor sees the cold-cache cost: the crawler recorded 1791 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three fresh re-probes that followed returned 496ms, 433ms, 503ms, giving a returning-visitor median of **496 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** The slowest page returned slowly on its first cold-cache visit but is served acceptably under fresh re-probes; first-time visitors carry a cold-origin cost that the returning-visitor median hides.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /config
Disallow: /search
Disallow: /account$
Disallow: /account/
Disallow: /commerce/digital-download/
Disallow: /api/
Disallow: /static/
Disallow: /*?author=*
```

*Showing the first 10 lines of `robots.txt`; the full 31-line file is preserved alongside this report as `www-dreambigsemi-com-robots-txt.txt`.*

The robots.txt declares 27 disallow paths; all other paths are open to crawlers and machines. It announces the sitemap, so a machine reading the file can find the URL index directly.

### sitemap.xml

**Table 11**

*sitemap.xml*

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 27 entries | Present |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** Partial

The sitemap declares 27 URLs and grades Partial. Lastmod dates vary across entries, which tells machines which pages changed and when.

This was a full crawl: the audit reached every page it could discover, and 2 of them are absent from the sitemap (which lists 27). The unlisted pages: `/`, `/cart`. The full set is recorded in the `www-dreambigsemi-com-pages-not-in-sitemap.csv` sidecar alongside this report. Adding them to the sitemap lets search engines and machines discover all content.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

No llms.txt found. llms.txt is no longer a new or unusual idea: Chrome's Lighthouse now checks for it by default ([Lighthouse llms.txt audit](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt)). A file at the site root that lists the pages and feeds worth reading gives machine readers a curated entry point, alongside robots.txt and sitemap.xml.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt on the audited host. Where llms.txt is the curated index, llms-full.txt concatenates the full content of every page into a single file: a convention made popular by Fern, Mintlify, and GitBook. Agents that consume it ingest the corpus in one fetch rather than crawling page-by-page, cutting token consumption by an order of magnitude. We recommend adding an llms-full.txt alongside llms.txt; the build can run from the same sitemap-driven generator that produces llms.txt and adds the page bodies inline.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## AI-Content Marking Readiness

This section reports whether Www Dreambigsemi's site marks AI-generated or AI-manipulated content in a machine-readable way: the form of marking the EU AI Act Article 50 expects from 2 August 2026, and the form the European Commission's voluntary Code of Practice on marking and labelling of AI-generated content (published 13 June 2026) sets out practical steps to meet. The probe inspects the homepage for four markers an agent could read without a human in the loop, and records which are present.

<p><small><strong>Note:</strong> This section describes regulatory frameworks in general terms only. Nothing here is legal advice. Requirements vary by jurisdiction, organisation type, and use case. Consult qualified legal specialists for guidance specific to your situation.</small></p>

**Table 12**

*AI-Content Marking Readiness*

| Attribute | Value |
|-----------|-------|
| Origin | https://www.dreambigsemi.com |
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

<!-- SECTION:SOFT_404 -->
## Soft 404s

The custom 404 page on this site returns a correct HTTP 404 status, but it carries Schema.org content markup (the same structured data a real content page would carry). For a person the 404 is obvious. For a machine the JSON-LD is the signal that a valid, describable resource is present, so an agent reading the structured data treats the error page as a real page and can extract entities from it. This is a soft 404 at the machine layer even though the status code is right. The fix is to strip content schema from the error page so it presents to a machine as the error it is, and reserve content JSON-LD for addresses that resolve.

We probed 51 addresses that should answer 404 when they are absent; 0 returned a soft 404 instead. Among the well-known discovery paths, 0 of 43 were soft 404s. Severity: schemaOnError.
<!-- END:SOFT_404 -->

---

## Structured Data Inventory

**Table 14**

*Structured Data Inventory*

| Schema Type  | Pages | Required % | Recommended % | Notes                                    |
|--------------|-------|------------|---------------|------------------------------------------|
| WebSite | 12 | 100% | 25% |  -  |
| LocalBusiness | 12 | 50% | 33% |  -  |
| Article | 11 | 100% | 67% | Organisation |
| Organisation | 11 | 100% | 100% | ImageObject |
| ImageObject | 11 | 100% | 100% |  -  |

**Structured Data Quality:** 58/100\
**Coverage:** 12 pages with JSON-LD out of 12 total (100%)\
**Unique types:** 5

Across the 12 pages we audited, structured data is solid. Adding recommended properties and increasing type diversity on the sampled pages gives machines more to work with.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

**Table 15**

*SDQ Score Breakdown*

| Component                       | Earned | Max | Meaning                                                       |
|---------------------------------|--------|-----|---------------------------------------------------------------|
| Presence | 10 | 10 | schema.org JSON-LD is present on the page |
| Required property coverage | 13 | 25 | Every entity carries the properties its type requires |
| Recommended property coverage | 10 | 15 | Entities carry the properties their type recommends |
| Entity richness | 5 | 15 | Entities are described with enough properties to be useful |
| Cross-entity references | 6 | 15 | Entities reference each other (nested types and @id links) |
| Linked-data signals | 5 | 10 | Linked-data properties present (sameAs, mainEntityOfPage, isPartOf, about, mentions) |
| Vocabulary validity | 10 | 10 | Every @type is a valid Schema.org type |
| **Total** | **58** | **100** | |

---

## Structured Data Findings

We identified 83 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`www-dreambigsemi-com-structured-data-findings.csv`](www-dreambigsemi-com-structured-data-findings.csv). The 83 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

**Table 16**

*Structured Data Findings*

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| WebSite | recommended | datePublished | 12 | 12 | No site-level publish date for crawler context |
| WebSite | recommended | author | 12 | 12 | Site has no top-level author/owner declared |
| WebSite | recommended | publisher | 12 | 12 | Site has no top-level publisher declared |
| LocalBusiness | required | name | 12 | 12 | Business has no name |
| LocalBusiness | recommended | telephone | 12 | 12 | Business has no phone number for click-to-call |
| LocalBusiness | recommended | priceRange | 12 | 12 | Business has no price range indicator (£, ££, £££) |
| Article | recommended | image | 11 | 11 | Search snippets and social shares show no thumbnail |

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
| [/resources](https://www.dreambigsemi.com/resources) |  -  |  -  | "our high-quality" | 7 third-party links | missing: author, publisher, dateModified, sameAs |
| [/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-jlepd](https://www.dreambigsemi.com/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-jlepd) |  -  |  -  |  -  | **0 third-party links** (body 1553w) | missing: sameAs |
| [/resources/dreambig-virtual-prototyping-platform](https://www.dreambigsemi.com/resources/dreambig-virtual-prototyping-platform) |  -  |  -  |  -  | **0 third-party links** (body 535w) | missing: sameAs |

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
| Open Graph meta tags | Yes | Yes | Yes | Yes | No |
| Twitter Card meta tags | Yes | Yes | Yes | Yes | No |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Yes | Yes | Body | Yes | No |

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
| 1 | Discovery | Pass | 89 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 50 | Schema.org: WebSite, LocalBusiness, Article (88% required properties) |
| 3 | Search & Compare | Pass | 60 | Commerce schema with 0 supporting patterns |
| 4 | Price Understanding | Partial | 33 | Product/service schema present but no pricing or Offer detected |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

*Each stage carries its own pass threshold, so Status and Score are not comparable across rows: a score that passes one stage can fall short on another with a stricter bar.*

Stage 2 (Citation) is the bottleneck in the agent journey. Because each stage builds on the one before it, the stages after it cannot improve until this one does. It is the highest-priority place to start; the stage's key metric is Schema.org: WebSite, LocalBusiness, Article (88% required properties).

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, condensing by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Fail · 12/12
  - *Means:* 12 page(s) flag for truncation risk; 1 of them exceed the 250 KB hard ceiling, the rest place main content too far into the document. Agents with limited fetch windows may stop reading before reaching the main content.
  - *Data:* Largest page: 343 KB ([/resources](https://www.dreambigsemi.com/resources)). Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See www-dreambigsemi-com-pipeline-truncation-risk-pages.csv (12 pages).
- **SPA Shell** - Pass · 12/12
  - *Means:* Served HTML matches rendered HTML, no JavaScript is required for content. Server-side agents see the same content a browser does.
  - *Data:* Max gap score: 0. 0 means served and rendered match.
- **Soft 404** - Fail · site-wide
  - *Means:* The error page returns a correct HTTP 404, but it carries Schema.org content markup. A machine reading the JSON-LD treats the 404 as a valid content page, the same machine-facing confusion a soft-404 creates. Remove the content schema from the error page so machines read it as the error it is.
  - *Data:* The custom 404 page returns a correct HTTP 404 status but carries Schema.org content markup, so a machine reading the JSON-LD treats the error page as a valid content page.
- **Boilerplate Burial** - Pass · 12/12
  - *Means:* Navigation and chrome do not dominate the page; main content is reachable without wading through overhead.
  - *Data:* Highest boilerplate-to-content ratio: 1.35. Threshold: < 10 (and < 80 KB of inline head bytes).
- **Tabbed Disclosure** - Pass · 12/12
  - *Means:* No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML.
  - *Data:* 0 page(s) with tab widgets.
- **Delayed Content Start** - Pass · 1/1
  - *Means:* Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily.
  - *Data:* Content starts at up to 24% of the document on some pages. Check applied to 1 of 12 audited pages; the remaining 11 pages were skipped by a size or eligibility gate.
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
- **Body Content Ratio** - Pass · 1/1
  - *Means:* Actual prose content averages 43% of served bytes, well above the 30% threshold. Pages are content-heavy, not overhead-heavy.
  - *Data:* Average: 43%. Threshold: 30%. Check applied to 1 of 12 audited pages; the remaining 11 pages were skipped by a size or eligibility gate.
- **Inline Tag Bloat** - Fail · 12/12
  - *Means:* 12 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches.
  - *Data:* 132 element(s) > 500 bytes. Largest single-page inline CSS block: 58095 B. Largest single-page inline JS block: 36923 B. See www-dreambigsemi-com-pipeline-inline-tag-bloat-pages.csv (12 pages).
- **Head Weight** - Pass · 1/1
  - *Means:* Head bytes are a small fraction of each page. Agents reach body content quickly.
  - *Data:* Max ratio: 0.13. Average: 0.01. Threshold: 0.50. Check applied to 1 of 12 audited pages; the remaining 11 pages were skipped by a size or eligibility gate.

**Pipeline Survivability score:** 79/100

Across the audited set, every page shows a truncation risk and some pages have inline tag bloat. Because of truncation risk, machines may miss content, while inline tag bloat can slow or break parsing. Addressing truncation risk first will give the largest boost to machine comprehension.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check set, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

**Table 22**

*Div Soup: naked containers without semantic mapping*

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Served and rendered | 36/100 (high) | 245 bare divs (57% of containers, depth 6) | `div.sqs-text-block-container` (142), `div.showOnMobile` (22), `div.showOnDesktop` (22), `div.burger-box` (22), `div.top-bun` (22) |

**Worst page (served and rendered are identical):** [/resources](https://www.dreambigsemi.com/resources)

We recorded a bare-div ratio of 245 of 433 elements, or 57 %, on the worst-case page (https://www.dreambigsemi.com/resources) across the audited set; this means machines lose structural context and must rely on positional inference to determine meaning.  
The soup is surface-wide with shallow chains-deepest chain only six levels-indicating a source pipeline that relies on drag-and-drop builders or untyped component frameworks, which inject many generic divs late in the rendering process.  
The cheapest first move is to wrap the obvious landmarks (header, nav, main, footer, aside) and give the remaining elements meaningful class names so the bare-div ratio drops without restructuring the layout.

---

## Security Headers

**Table 23**

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

- **`/resources`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/resources/athos-silicon-selects-dreambig-semiconductors-chiplet-hub-for-its-safety-critical-msoc-platform-designed-ground-up-for-autonomy`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/resources/dreambig-featured-in-ee-times-silicon-100-for-second-year-in-a-row`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/resources/how-dreambig-achieved-industry-first-3d-hbm-integration-with-synopsys`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/resources/dreambig-virtual-prototyping-platform`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-xz9m8-k8ma5`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-xz9m8-k8ma5-njxml`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-xz9m8`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-jlepd`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-h9z7m-skmd8`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-h9z7m-skmd8-6nbb7-kn66b`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-h9z7m-skmd8-6nbb7-kn66b-c3zd6`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes

HTTPS: 12/12 | HSTS: 12/12 | CSP: 0/12 | X-Frame-Options: 12/12 | X-Content-Type-Options: 12/12

---

## Cross-Page Consistency

**Table 24**

*Cross-Page Consistency*

| Pattern                          | Coverage | Pages missing it   |
|----------------------------------|----------|--------------------|
| Schema.org JSON-LD | 100% |  -  |
| MX governance tags | 0% | 12 |
| Open Graph tags | 100% |  -  |
| Twitter Card tags | 100% |  -  |
| Skip link | 100% |  -  |
| llms.txt link tag | 0% | 12 |
| Canonical URL | 100% |  -  |
| Exactly 1 H1 | 92% | `/resources` |
| Code examples present | 0% | 12 |
| Self-contained sections | 100% |  -  |
| Error/troubleshooting docs | 0% | 12 |
| Lighthouse heading compliance | 67% | 4 |

**Overall Consistency:** 76%

Some pages in the 12-page sample are missing metadata patterns that others carry. Machines hitting different pages get different quality data. The Missing Pages column shows where to focus on the sampled pages.

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no brand-name or canonical-URL divergence flagged by the consistency check.

**Table 25**

*Content Consistency*

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Brand-name parity | Pass | Brand name appears consistently across all 12 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 12-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

We found 84 identical inline fragment(s) repeated across multiple pages, totalling 278 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

**Table 26**

*Inline Code Duplicates*

| Type | Bytes per fragment | Appears on N pages | Preview                                                          |
|------|-------------------:|-------------------:|------------------------------------------------------------------|
| css | 58 | 24 | .top-bun,    .patty,    .bottom-bun {     height: 2px;   } |
| css | 8365 | 12 | .fe-67a125967210295cdbbf10d9 {   --grid-gutter: calc(var(--s |
| css | 829 | 12 | #block-yui_3_17_2_1_1743176588140_236885 {         --image-c |
| css | 791 | 12 | #block-yui_3_17_2_1_1743176588140_240127 {          --stroke |
| css | 713 | 12 | #block-e87d390450e6a2fd9b39 {          --stroke-style: none; |
| css | 713 | 12 | #block-5a8ac0f2c6510aa116e9 {          --stroke-style: none; |
| css | 713 | 12 | #block-f305539032535dae7bc7 {          --stroke-style: none; |
| css | 713 | 12 | #block-0f0155c629706fbe8a86 {          --stroke-style: none; |
| css | 713 | 12 | #block-3f22c6e814d435abcdd1 {          --stroke-style: none; |
| css | 713 | 12 | #block-271125eb7b19f7641ad3 {          --stroke-style: none; |

*Showing the top 10 of 84 duplicate fragments by occurrence count. The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `www-dreambigsemi-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src=".">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

We observe that accessibility legislation has converged on ISO 14289-1 (PDF/UA) as the technical baseline for document accessibility, with the European Accessibility Act-Directive (EU) 2019/882-as a precisely codified example that mirrors Section 508 in the United States, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent statutes in Australia and Canada. Because an untagged PDF is invisible to machines, search crawlers, AI systems and automated pipelines cannot extract text, entities or structure from a scanned or image-based document; a tagged PDF that includes a proper structure tree becomes machine-readable in the same way semantic HTML is.

We linked no PDFs from the 12-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

PDFs are part of the machine-readable estate but sit outside this HTML audit's scope. A dedicated PDF review checks each public document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified) and returns a per-document verdict.

---

## Text Patterns

Analysis of text patterns across audited pages found content reaching Probably AI on the AI-tells scale (2 of 12 pages scored). Machines do not consistently cite or label AI-generated content; this observation describes what the analysis found, not a conclusion about authorship. The full per-page breakdown is in `ai-tells.json` in the results directory.

---

## Content Uniqueness

Analysis of prose content across audited pages found 12 of 12 pages reaching Low Machine Value on the content-uniqueness scale. Pages with high shared content give machines redundant information per page, reducing the value of multi-page crawls. The full per-page breakdown is in `prose-repetition.json` in the results directory.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: resolve Commerce Visibility findings (currently 0/100)
2. **Review Priority 2-3 findings**: Discovery Readiness improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

**Table 27**

*What's Next*

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3 (Compliance Risk) | Priority 1, 2, 3 resolved: WCAG 2.1 AA accessibility compliance restored |
| Full Implementation | P1, P2, P3, P4, P5, P6, P7, P8 (P1-P8) | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | The full machine-readable estate, beyond the web pages |

This audit is a starting point. The outcome we work toward is a site any machine can read, trust, and act on, and a dated, attested record you can show to a regulator, a partner, or an acquirer on request. Reaching it (structured data, discovery files, accessibility, governance metadata, and re-audit on a cadence you choose) is available as a managed service. To take any of it further, contact CogNovaMX Ltd at <info@cognovamx.com>.

---

## Summary of Findings

Across the audited set of https://www.dreambigsemi.com, Accessibility achieved a perfect 100/100, giving machines an excellent foundation for interpreting content. Discovery Readiness and Structured Data scored 25/100 and 58/100 respectively, indicating key opportunities to enhance machine discoverability and data quality. We invite you to address these areas to unlock greater visibility and richer machine interactions.

### Audit Scores

**Table 28**

*Audit Scores*

| Dimension | Score | Band |
|-----------|-------|------|
| Served-HTML Structure | 75/100 | Good |
| Accessibility | 100/100 | Excellent |
| SEO (all pages) | 74/100 | Good |
| SEO (content pages) | 74/100 | Good |
| MX Stack Completeness | 61/100 | Good |
| Structured Data Quality | 58/100 | Good |
| Commerce Visibility | 0/100 | Needs Improvement |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 83/100 | Excellent |
| Agent Readability | 47/100 | Could Be Better |
| Pipeline Survivability | 79/100 | Excellent |
| Cross-Page Consistency | 76% | Excellent |

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

- **`/resources`**: SEO 64 · A11y 100 · Back 85 · Served 26 · Rendered 26
- **`/resources/athos-silicon-selects-dreambig-semiconductors-chiplet-hub-for-its-safety-critical-msoc-platform-designed-ground-up-for-autonomy`**: SEO 67 · A11y 100 · Back 85 · Served 99 · Rendered 99
- **`/resources/dreambig-featured-in-ee-times-silicon-100-for-second-year-in-a-row`**: SEO 56 · A11y 100 · Back 85 · Served 100 · Rendered 100
- **`/resources/how-dreambig-achieved-industry-first-3d-hbm-integration-with-synopsys`**: SEO 69 · A11y 100 · Back 85 · Served 99 · Rendered 98
- **`/resources/dreambig-virtual-prototyping-platform`**: SEO 84 · A11y 100 · Back 85 · Served 100 · Rendered 100
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-xz9m8-k8ma5`**: SEO 72 · A11y 100 · Back 85 · Served 100 · Rendered 100
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-xz9m8-k8ma5-njxml`**: SEO 82 · A11y 100 · Back 85 · Served 100 · Rendered 100
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-xz9m8`**: SEO 72 · A11y 100 · Back 85 · Served 100 · Rendered 100
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-jlepd`**: SEO 81 · A11y 100 · Back 85 · Served 99 · Rendered 99
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-h9z7m-skmd8`**: SEO 72 · A11y 100 · Back 85 · Served 28 · Rendered 28
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-h9z7m-skmd8-6nbb7-kn66b`**: SEO 85 · A11y 100 · Back 85 · Served 28 · Rendered 28
- **`/resources/dreambig-world-leading-mars-open-chiplet-platform-enables-scaling-of-next-generation-large-language-model-llm-generative-ai-and-automotive-semiconductor-solutions-h9z7m-skmd8-6nbb7-kn66b-c3zd6`**: SEO 85 · A11y 100 · Back 85 · Served 28 · Rendered 28

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. External links are not tracked; this inventory covers same-host `<a href>` links only. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

Per page, internal links range from 1 to 29, averaging 9 across 26 pages. That is sparser than typical (benchmark median 20 per page).

**Table 29**

*Appendix B: Link Inventory*

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 245 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |

---

## Appendix C: Image Efficiency

We reviewed 37 images across the audited set: 37 PNG. 24 of 37 (64.9%) carry alt text, leaving 13 without it. Each missing alt attribute is a place where a screen-reader user or a machine reading the page gets no description of what the image shows.

On loading strategy, 13 images are marked `loading="lazy"` and 24 `loading="eager"`, so every image on the audited pages declares its fetch behaviour explicitly rather than leaving the browser to guess.

> **Double-lazy loading pattern not detected** -  no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: No platform detected. No platform-specific fingerprint was detected, so the audit used conservative default rate limits, paced slowly enough to stay below typical shared-host thresholds, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** None detected. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from the audited pages. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 12 pages examined | Platform: Unknown Platform | Frameworks: None detected | Analysis method: Hybrid (automated + manual verification) | robots.txt: Present (59 directives)

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

This report carries its own provenance. Every step that produced it is recorded in two adjacent JSON sidecars (AI and deterministic), and the full evidence chain travels inside the PDF's XMP metadata: extract it with `exiftool -b -XMP-mx:ProvenanceAiPayload www-dreambigsemi-com-report.pdf | jq .`. The PDF is a tagged ISO 14289-1 (PDF/UA-1) Level 2 document with a complete reading-order structure tree. The standards this audit measures your site against are the standards the deliverable itself meets.

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

