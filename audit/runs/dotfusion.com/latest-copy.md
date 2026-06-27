---
title: "Dotfusion: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-06-26"
modified: "2026-06-26"
client: "Dotfusion"
clientSlug: "dotfusion-com"
clientUrl: "https://dotfusion.com"
reportId: "dotfusion-com-WEB-AUDIT-20260626"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-06-26"
auditCommand: "node scripts/audit-pipeline.js https://dotfusion.com --pages 12"
description: "Executive audit report reviewing accessibility, performance, SEO, structured data, and AI agent compatibility for Dotfusion"
type: info-doc
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 85
accessibilityScore: 76
seoScore: 85
llmServedHtmlScore: 100
agentReadabilityScore: 
totalIssues: 94
htmlPagesAudited: 12
version: "1.0"
pipelineVersion: "1.1.0"
confidential: true
mx:
  status: active
  x-mx-contentType: audit-report
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-06-26/dotfusion.com/dotfusion-com-report.md
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Dotfusion covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Dotfusion", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  # The single cog that manages this pipeline artefact, so a reader never
  # has to infer the steward (scripts/lib/managed-by.cjs is the resolver).
  x-mx-managedBy: mx-audit.cog.md
  runbook: "Executive audit report for Dotfusion. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in the top-level auditCommand field. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-26/dotfusion.com/dotfusion-com-report.md', which validates the report then renders it through scripts/bin/mx.pdf.sh."
  generate:
    command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-26/dotfusion.com/dotfusion-com-report.md"
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/runs/dotfusion.com/latest-copy.pdf"
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
**Date:** 26 June 2026\
**Report ID:** dotfusion-com-WEB-AUDIT-20260626

---

\clearpage

## About This Report

We audited 12 pages across dotfusion.com's site using the Web Audit Suite. We review each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image efficiency, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

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
| Accessibility | **76**/100 | `##############----` |
| SEO | **85**/100 | `###############---` |
| Served-HTML Structure | **100**/100 | `##################` |
| MX Stack Completeness | **43**/100 | `########----------` **(!)** |
| Agent Readability | **79**/100 | `##############----` |
| Pipeline Survivability | **95**/100 | `#################-` |
| Machine Processing Speed | **9514** ms/page | E |

*The three machine metrics measure different things. **Served-HTML Structure** is the semantic markup an agent reads before JavaScript runs; **Agent Readability** is how easily the content can be quoted once reached; **Pipeline Survivability** is whether a page survives an agent's fetch and ingest. A site can score low on one and high on another.*

The site runs on **Next.js** (detected from multiple platform signals).

Across the audited set, Dotfusion scores 76/100 for accessibility and 85/100 for SEO.

Across the audited set, the headline opportunity is to resolve six distinct WCAG AA issue types that appear in 94 elements-a Priority 1 compliance requirement that also strengthens user experience. The next step to elevate machine comprehension is to embed full MX governance metadata-mx:status, mx:contentType, mx:audience, canonicalUri, provenance markers-so machines have the structured context they need for accurate attribution. Adding these fields will raise MSC above 60 and Discovery Readiness above 40, moving the site from Discoverable to Governed.

Because the audited pages are rendered with Next.js, which delivers pre-rendered HTML that machines can parse, the most efficient path to machine comprehension is to enrich every page with Schema.org JSON-LD. This asset is readable by any agent regardless of rendering nuances and provides a strong foundations for further governance metadata.

\clearpage

<!-- AUDIT-DELTA:START -->
## Change Since Our 23 June 2026 Audit

We last audited dotfusion.com on 23 June 2026. The table compares that audit with the current one across the headline measures. Some scores improved and others slipped since that audit; the table shows each change.

| Measure | 23 June 2026 | 26 June 2026 | Change |
|---------|------:|------:|:-------|
| Performance | 35 | 85 | +50 (improved) |
| Accessibility | 100 | 76 | -24 (declined) |
| SEO | 77 | 85 | +8 (improved) |
| WCAG AA issues | 0 | 94 | +94 (declined) |

*Re-audit note: this run is 3 days after the previous one. Score swings over short windows are normal, as network conditions, CDN warm/cold state, and origin load all vary. Use audits 7 or more days apart as the reliable trend signal; treat this run as a spot-check, not a regression.*
<!-- AUDIT-DELTA:END -->

\clearpage

## Balanced Scorecard

### Human Experience

We find that across the audited set, accessibility compliance is the primary area for improvement for human visitors.

**Table 2**

*Human Experience*

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Good | B | - |
| Performance | Excellent | A | A (median) |
| Accessibility (WCAG) | Excellent | A | A (median) |
| Trust and Credibility | Good | B | - |

*The UX / Navigation grade derives from measured navigation signals: heading-outline quality, single-H1 consistency, and skip-link consistency. The Trust and Credibility grade derives from measured transport and integrity signals: HTTPS coverage, security-header coverage, canonical-URL consistency, and correct error-page status.*

### Machine Experience

Across the audited set, machines can discover and parse content with a Discovery Readiness score of 20/100, Structured Data Quality of 44/100, and MX Stack Completeness of 43/100, yet they lack governance context as reflected by an MX Readiness Level of 1 (Discoverable) while Pipeline Survivability remains high at 95/100.

**Table 3**

*Machine Experience*

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 20/100 | Needs Improvement | D | C (median) |
| Structured Data Quality | 44/100 | Could Be Better | C | B (median) |
| MX Stack Completeness | 43/100 | Could Be Better | C | B (median) |
| Pipeline Survivability | 95/100 | Excellent | A | A (median) |
| Machine Processing Speed | 9514 ms/page | E | Machine-Dense | - |

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

**Evidence:** MX Stack Completeness 43/100 | Structured Data Quality 44/100 | Discovery Readiness 20/100 | Consistency 44%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so machines have the structured context they need for accurate comprehension. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

We find SEO performance and security transport across the audited set, giving a clear starting point for the improvements ahead.

**Table 5**

*What's Working Well*

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent  -  642ms average load time |
| SEO (content pages) | 84 | Excellent  -  titles, meta descriptions, canonical URLs in place |
| Security | 2/5 | 2/5 headers present (CSP, X-Frame-Options, X-Content-Type-Options absent); 0 of 12 URLs carry all five |
| Heading Quality | 94 | Excellent  -  headings present and machine-parseable |
| Consistency | 44% | 44%  -  same metadata patterns across every page |
| Agent access | 8/8 | every tested agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.

---

## Findings

### At a Glance

The table below is the prioritised action list for this audit. Each row names a finding, its compliance-risk bucket, and the effort to fix it. The numbered blocks below the table expand each finding with specific guidance.

We identified 18 finding(s) on the audited set, ordered by regulatory exposure first and then by priority within each category.

**Table 6**

*At a Glance*

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2 | Compliance Risk | High | Medium | screen reader users may miss or misread affected content |
| 2 | Non-text Content Missing Text Alternatives, WCAG 1.1.1 | Compliance Risk | High | Low | screen reader users may miss or misread affected content |
| 3 | Info and Relationships Not Programmatically Determined, WCAG 1.3.1 | Compliance Risk | High | Medium | screen reader users may miss or misread affected content |
| 4 | No Bypass Mechanism for Repeated Blocks, WCAG 2.4.1 | Compliance Risk | Medium | Low | sighted keyboard users may miss or misread affected content |
| 5 | Heading Hierarchy Skips Levels | Compliance Risk | Medium | Low | screen-reader and machine outline-builders may misread the page structure |
| 6 | Semantic Structure (Naked Containers) 31/100 | Compliance Risk | Medium | Medium | machines lose structural context and infer page regions by position |
| 7 | Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options | Cross-cutting | Medium | Low | Missing security headers increase exposure to content injection and clickjacking |
| 8 | No `<nav>` element on any page | Cross-cutting | Medium | Medium | Agents and assistive technologies cannot identify navigation regions; Lighthouse accessibility check fails without this landmark |
| 9 | No skip-navigation link | Cross-cutting | Medium | Medium | Sighted keyboard users must tab through the full navigation on every page (WCAG 2.4.1 Level A) |
| 10 | Heading tags (h3-h6) used as footer navigation labels | Cross-cutting | Medium | Medium | Footer heading elements break the full-page heading sequence Lighthouse checks (WCAG 1.3.1 Level A) and create false document structure that misrepresents content hierarchy to assistive technologies and agents |
| 11 | Contact form explicitly disables autocomplete on name and email fields (autocomplete="off") | Cross-cutting | Medium | Medium | Users who rely on browser autofill  -  including people with motor or cognitive impairments  -  cannot use it; name and email are purpose-defined fields that must support autocomplete (WCAG 1.3.5 Level AA) |
| 12 | Cumulative Layout Shift exceeds 0.25 (Core Web Vitals 'Poor') on 4 page(s): /services/headless-cms-agency (CLS 0.298), /services/contentful-development-agency (CLS 0.491), /services/storyblok-development-agency (CLS 0.491), /services/answer-engine-optimisation-agency-dotfusion (CLS 0.358) | Cross-cutting | Medium | High | Content visibly jumps as the page loads, disrupting reading and interaction; Google treats CLS > 0.25 as a ranking signal shortfall |
| 13 | Open Graph tags entirely absent (og:title, og:description, og:image) | Cross-cutting | Low | Low | Social sharing previews and agent citation summaries have no author-controlled title, description, or thumbnail |
| 14 | Twitter Card tags absent | Cross-cutting | Low | Low | Posts shared on X/Twitter render as plain-link previews with no controlled image, title, or description |
| 15 | Identical meta description shared by 3 pages  -  likely a template default, not page-specific content | Cross-cutting | Low | Low | Search engines and agents see the same description for different pages; the description carries no page-specific context and will not accurately represent any of the pages |
| 16 | Structured Data Property Gaps | Machine Readability Opportunity | Medium | Medium | machines may extract these entities incompletely or skip them |
| 17 | Schema.org coverage is partial: Decoration (SDQ 44/100) | Machine Readability Opportunity | Medium | Medium | Agents can partially parse structured facts but key properties may be missing |
| 18 | llms.txt exists but no `<link rel="llms-txt">` in page `<head>` | Machine Readability Opportunity | Medium | Low | Agents that rely on the link-relation hint to discover llms.txt cannot find the file; only agents that guess the root path will locate it |

---

**Priority 1: Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2**

**Bucket:** Compliance Risk

**Finding:** Interactive elements lack an accessible name, role, or state that assistive technology and agents need to identify and operate them. This pattern appears 47 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Give every custom control an accessible name and the correct role and state (prefer a native button/link/input; add ARIA only where no native element fits). This satisfies WCAG 4.1.2.
- A named, correctly-roled control is also what lets an agent understand what an interactive element does.

**Effort:** Medium

---

**Priority 2: Non-text Content Missing Text Alternatives, WCAG 1.1.1**

**Bucket:** Compliance Risk

**Finding:** Images on the audited set carry no text alternative, so their content is unavailable to screen-reader users and to machines reading the page. This pattern appears 26 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Add descriptive alt text to every informative image; mark purely decorative images with empty alt (alt="") so assistive technology skips them. This satisfies WCAG 1.1.1 and gives screen-reader users the same information sighted users get.
- Where an image is the only content of a link, the alt text must describe the link destination, not the picture, so keyboard and screen-reader users know where the link goes.

**Effort:** Low

---

**Priority 3: Info and Relationships Not Programmatically Determined, WCAG 1.3.1**

**Bucket:** Compliance Risk

**Finding:** Visual structure (headings, lists, tables, form labels) is not exposed in the markup, so assistive technology and machines cannot reliably reconstruct it. This pattern appears 11 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Expose the structure a sighted user sees (headings, lists, tables, form labels) in the markup so assistive technology and machines can reconstruct it. This satisfies WCAG 1.3.1.
- Use native semantic elements before ARIA; reach for ARIA only where no native element conveys the relationship.

**Effort:** Medium

---

**Priority 4: No Bypass Mechanism for Repeated Blocks, WCAG 2.4.1**

**Bucket:** Compliance Risk

**Finding:** Pages repeat navigation blocks with no mechanism to skip them, forcing keyboard users to tab through every link on each page before reaching the main content. This pattern appears 10 time(s) across the audited set, affecting sighted keyboard users.

**What to change and why:**

- Add a skip link as the first focusable element, or wrap the repeated navigation in a landmark, so keyboard users can jump straight to the main content. This satisfies WCAG 2.4.1.
- A served-HTML skip link also gives server-side agents an explicit main-content anchor they can follow.

**Effort:** Low

---

**Priority 5: Heading Hierarchy Skips Levels**

**Bucket:** Compliance Risk

**Finding:** Heading levels skip on `/contact-us` (for example an h2 followed by an h4), so the document outline a machine or screen reader builds does not match the visible structure.

**What to change and why:**

- Order headings without skipping levels (an h2 followed by an h4 forces assistive technology and machines to guess the structure). Use heading level for hierarchy and CSS for visual size.
- A clean heading outline is the spine an agent uses to summarise the page; fixing it improves both accessibility and machine comprehension.

**Effort:** Low

---

**Priority 6: Semantic Structure (Naked Containers) 31/100**

**Bucket:** Compliance Risk

**Finding:** Rendered semantic-structure score 31/100: containers carry no role, ARIA landmark, or descriptive class, so machines fall back on positional inference to determine meaning. The worst page ([/about](https://dotfusion.com/about)) carries 269 bare divs of 369.

**What to change and why:**

- Replace the obvious landmark containers (header, nav, main, footer, aside) with their semantic elements and give the remaining containers meaningful class names, so machines stop falling back on positional inference to determine what each region is.
- Start with the page that scored worst; wrapping the landmarks alone usually drops the bare-div ratio sharply without restructuring the layout.

**Effort:** Medium

---

**Priority 7: Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options**

**Bucket:** Cross-cutting

**Finding:** Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options (All responses). Missing security headers increase exposure to content injection and clickjacking

**What to change and why:**

- Add the missing response headers at the server or CDN edge; each is a one-line directive that applies to all responses once configured.
- Set them once in the edge or server configuration rather than per page so coverage stays complete as new pages ship.

**Effort:** Low

---

**Priority 8: No `<nav>` element on any page**

**Bucket:** Cross-cutting

**Finding:** No `<nav>` element on any page (Across all audited pages). Agents and assistive technologies cannot identify navigation regions; Lighthouse accessibility check fails without this landmark

**What to change and why:**

- Review the flagged instances against the relevant standard and remediate them at the template or configuration level so the fix applies wherever the pattern recurs.
- Add a check to the publish pipeline so the pattern is caught before it ships again.

**Effort:** Medium

---

**Priority 9: No skip-navigation link**

**Bucket:** Cross-cutting

**Finding:** No skip-navigation link (Across the audited set). Sighted keyboard users must tab through the full navigation on every page (WCAG 2.4.1 Level A)

**What to change and why:**

- Review the flagged instances against the relevant standard and remediate them at the template or configuration level so the fix applies wherever the pattern recurs.
- Add a check to the publish pipeline so the pattern is caught before it ships again.

**Effort:** Medium

---

**Priority 10: Heading tags (h3-h6) used as footer navigation labels**

**Bucket:** Cross-cutting

**Finding:** Heading tags (h3-h6) used as footer navigation labels (Across all audited pages). Footer heading elements break the full-page heading sequence Lighthouse checks (WCAG 1.3.1 Level A) and create false document structure that misrepresents content hierarchy to assistive technologies and agents

**What to change and why:**

- Review the flagged instances against the relevant standard and remediate them at the template or configuration level so the fix applies wherever the pattern recurs.
- Add a check to the publish pipeline so the pattern is caught before it ships again.

**Effort:** Medium

---

**Priority 11: Contact form explicitly disables autocomplete on name and email fields (autocomplete="off")**

**Bucket:** Cross-cutting

**Finding:** Contact form explicitly disables autocomplete on name and email fields (autocomplete="off") (Contact page). Users who rely on browser autofill -  including people with motor or cognitive impairments -  cannot use it; name and email are purpose-defined fields that must support autocomplete (WCAG 1.3.5 Level AA)

**What to change and why:**

- Review the flagged instances against the relevant standard and remediate them at the template or configuration level so the fix applies wherever the pattern recurs.
- Add a check to the publish pipeline so the pattern is caught before it ships again.

**Effort:** Medium

---

**Priority 12: Cumulative Layout Shift exceeds 0.25 (Core Web Vitals 'Poor') on 4 page(s): /services/headless-cms-agency (CLS 0.298), /services/contentful-development-agency (CLS 0.491), /services/storyblok-development-agency (CLS 0.491), /services/answer-engine-optimisation-agency-dotfusion (CLS 0.358)**

**Bucket:** Cross-cutting

**Finding:** Cumulative Layout Shift exceeds 0.25 (Core Web Vitals 'Poor') on 4 page(s): /services/headless-cms-agency (CLS 0.298), /services/contentful-development-agency (CLS 0.491), /services/storyblok-development-agency (CLS 0.491), /services/answer-engine-optimisation-agency-dotfusion (CLS 0.358) (Affected pages). Content visibly jumps as the page loads, disrupting reading and interaction; Google treats CLS > 0.25 as a ranking signal shortfall

**What to change and why:**

- The slow response is at the origin (first-byte time), not the CDN: returning visitors with a warm cache see normal load times, but first-time visitors and agents fetching on a cold cache pay the full origin cost. Profile the cold-cache waterfall in your server logs or APM tool and look for a single blocking operation -  a database query, a synchronous API call, or unoptimised server-side rendering -  that takes more than 5 seconds.
- Once the bottleneck is identified, cache or precompute that path so cold-cache visitors do not trigger the full origin cost on every first visit.
- If you are on a managed hosting platform (Vercel, Netlify, and similar), check whether the origin function is in the same region as your primary audience -  a geo-mismatch adds 200-500 ms of fixed latency before any code runs.

**Effort:** High

---

**Priority 13: Open Graph tags entirely absent (og:title, og:description, og:image)**

**Bucket:** Cross-cutting

**Finding:** Open Graph tags entirely absent (og:title, og:description, og:image) (Across all audited pages). Social sharing previews and agent citation summaries have no author-controlled title, description, or thumbnail

**What to change and why:**

- Complete the flagged SEO metadata (title, meta description, canonical) so search engines and machines index the page with accurate summaries.
- Set sensible defaults in the template so every page ships with complete metadata.

**Effort:** Low

---

**Priority 14: Twitter Card tags absent**

**Bucket:** Cross-cutting

**Finding:** Twitter Card tags absent (Across all audited pages). Posts shared on X/Twitter render as plain-link previews with no controlled image, title, or description

**What to change and why:**

- Complete the flagged SEO metadata (title, meta description, canonical) so search engines and machines index the page with accurate summaries.
- Set sensible defaults in the template so every page ships with complete metadata.

**Effort:** Low

---

**Priority 15: Identical meta description shared by 3 pages -  likely a template default, not page-specific content**

**Bucket:** Cross-cutting

**Finding:** Identical meta description shared by 3 pages -  likely a template default, not page-specific content (/contact-us, /privacy, /jedi). Search engines and agents see the same description for different pages; the description carries no page-specific context and will not accurately represent any of the pages

**What to change and why:**

- Complete the flagged SEO metadata (title, meta description, canonical) so search engines and machines index the page with accurate summaries.
- Set sensible defaults in the template so every page ships with complete metadata.

**Effort:** Low

---

**Priority 16: Structured Data Property Gaps**

**Bucket:** Machine Readability Opportunity

**Finding:** 67 Schema.org property gap(s) on the audited set across Offer, Service, WebSite: required or recommended properties are missing, so machines extract these entities less reliably.

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 17: Schema.org coverage is partial: Decoration (SDQ 44/100)**

**Bucket:** Machine Readability Opportunity

**Finding:** Schema.org coverage is partial: Decoration (SDQ 44/100) (Homepage). Agents can partially parse structured facts but key properties may be missing

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 18: llms.txt exists but no `<link rel="llms-txt">` in page `<head>`**

**Bucket:** Machine Readability Opportunity

**Finding:** llms.txt exists but no `<link rel="llms-txt">` in page `<head>` (Across all audited pages). Agents that rely on the link-relation hint to discover llms.txt cannot find the file; only agents that guess the root path will locate it

**What to change and why:**

- Publish the missing discovery file at the site root so agents and crawlers can find the machine-curated index and access policy in one fetch rather than inferring them.
- Reference the file from robots.txt and the sitemap so crawlers have a reliable signal that it exists.

**Effort:** Low

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

We recommend the following optional enhancements:

- **sameAs**: Add sameAs links on the Organisation entity to authoritative profiles such as LinkedIn and Wikidata, giving machines a verified identity for the brand.
- **potentialAction**: Attach a potentialAction to the Organisation schema that references its ContactPoint, enabling agents to discover how to reach the business directly.
- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)): Add content-signal directives in robots.txt to declare usage rights for machine consumption and align with emerging standards.

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
| URL probed | https://dotfusion.com |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No  -  server returned HTML regardless of Accept header |

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
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | No |
| Navigation back to valid content | Absent - error page offers no route back to valid content |
| Internal navigation links | 0 - error page links nowhere |
| MX governance tags | Absent |
| Schema.org JSON-LD | Absent (correct: the error page makes no content claim) |

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
| Accessibility-tree score | 50/100 |
| Pages checked | 12 |

Across the 12 pages we checked, 0 distinct issue patterns reduce what reaches the tree.

The following issue type(s) were also detected in the accessibility tree but are covered in the Accessibility section above and are not repeated here: Element exposed as an image with no accessible name.

The full set, one row per pattern with every affected page counted, is recorded in the `dotfusion-com-accessibility-tree.csv` sidecar alongside this report.

**Inspect the accessibility tree.** Right-click any page, choose Inspect, open the Elements panel, click the `>>` icon, choose Accessibility, and toggle "Show Accessibility Tree". The result is what tree consumers receive: if a control or a heading is missing from that view, it is missing for them. Chrome DevTools' AI Assistance panel also accepts "Review accessibility" against any element this report flags.

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds for a returning visitor may be served from a warm CDN edge; the same page on a genuine first visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section re-measures the slowest page from the crawl and a median-load control across several fresh visits, then compares those against the first-visit response. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what a repeat visitor experiences). The overall verdict for each page is the worse of the two, so a fast returning-visitor median cannot paper over a slow first-visit response.

**Method:** Each URL is re-measured across several fresh visits and scored on the median of those measurements. For each page we compare both the crawler's cold-cache baseline and the median of three fresh GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://dotfusion.com/`. A first-time visitor sees the cold-cache cost: the crawler recorded 1780 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three fresh re-probes that followed returned 131ms, 127ms, 161ms, giving a returning-visitor median of **131 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://dotfusion.com/industries`. A first-time visitor sees the cold-cache cost: the crawler recorded 569 ms on its initial fetch. **First-visit verdict: Healthy**. Three fresh re-probes that followed returned 199ms, 151ms, 125ms, giving a returning-visitor median of **151 ms**. **Returning-visitor verdict: Healthy**.

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

The robots.txt declares no disallow paths, so every path is open to crawlers and machines. It announces the sitemap, so a machine reading the file can find the URL index directly.

### sitemap.xml

**Table 11**

*sitemap.xml*

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 149 entries | Present |
| `<lastmod>` | Yes | All identical |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | No | Absent (Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents can still use it as a relative-importance hint) |

**Sitemap grade:** Partial

The sitemap declares 149 URLs and grades Partial. Lastmod is present but identical across entries, so it reads as a single file-stamp rather than a per-URL change signal. The sitemap omits priority. Google dropped this as ranking signals in 2017, but non-Google crawlers and AI agents still read changefreq as a re-crawl cadence hint and priority as a relative-importance signal, so adding it is a low-effort way to broaden machine compatibility.

This was a full crawl: the audit reached every page it could discover, and 1 of them is absent from the sitemap (which lists 149). The unlisted pages: `/ai-voice-demos`. The full set is recorded in the `dotfusion-com-pages-not-in-sitemap.csv` sidecar alongside this report. Adding them to the sitemap lets search engines and machines discover all content.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

The llms.txt carries a site description, but lacks a page inventory and a content-use policy; adding them would give machines a complete structured index. We also recommend serving llms.txt as an HTML page that wraps the plain-text content in a `<pre>` block, rather than the text/plain the llmstxt.org specification defines. Training crawlers such as Common Crawl archive only a small fraction of plain-text files but crawl HTML pages from the sitemap reliably, so the HTML wrapper gets the file into the corpus while the `<pre>` keeps it rendering as readable plain text. The technique, with the reasoning and working code, is at https://mx.allabout.network/blog/your-site-is-already-training-ai.html.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt on the audited host. Where llms.txt is the curated index, llms-full.txt concatenates the full content of every page into a single file: a convention made popular by Fern, Mintlify, and GitBook. Agents that consume it ingest the corpus in one fetch rather than crawling page-by-page, cutting token consumption by an order of magnitude. We recommend adding an llms-full.txt alongside llms.txt; the build can run from the same sitemap-driven generator that produces llms.txt and adds the page bodies inline.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` -  the URL returned HTTP 200 but the body is the site's standard error page (soft-404), not a valid agent card. The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

<!-- SECTION:SOFT_404 -->
## Soft 404s

This site answers HTTP 200 for addresses that do not exist. A control address that cannot be real still returned a 200 with a normal-looking page. This is a soft 404, and on this site it is the default for missing addresses, not an isolated case. For a person it is invisible. For a machine it is corrosive: a 200 is the signal that a resource is present, so every check of the form "does this exist?" now returns yes. An agent confirming a price, a product, a policy, or a declaration cannot tell a real answer from a placeholder. A crawler building a training set ingests the catch-all page under thousands of distinct addresses as if each were real content. A validator probing for a well-known file records it as published when nothing is there. The correct behaviour is to return 404 (or 410) for an address that does not resolve, and to reserve 200 for addresses that do. Until that holds, no presence claim derived from a fetch of this site can be trusted, including some made elsewhere in this report where the underlying probe was misled.

We probed 44 addresses that should answer 404 when they are absent; 42 returned a soft 404 instead. Among the well-known discovery paths, 42 of 44 were soft 404s. Severity: pervasive.
<!-- END:SOFT_404 -->

---

## Structured Data Inventory

**Table 12**

*Structured Data Inventory*

| Schema Type  | Pages | Required % | Recommended % | Notes                                    |
|--------------|-------|------------|---------------|------------------------------------------|
| Question | 6 | 100% | 100% | Answer |
| Answer | 6 | 100% | 100% |  -  |
| Service | 8 | 60% | 6% | Organisation, OfferCatalog |
| Offer | 5 | 0% | 0% | Service |
| ListItem | 5 | 100% | 100% |  -  |
| Audience | 2 | 100% | 100% |  -  |
| Country | 5 | 100% | 100% |  -  |
| FAQPage | 6 | 100% | 100% |  -  |
| Organisation | 4 | 100% | 100% | ImageObject, EducationalOccupationalCredential, PostalAddress, OfferCatalog |
| OfferCatalog | 5 | 100% | 100% |  -  |
| BreadcrumbList | 4 | 100% | 100% |  -  |
| PostalAddress | 2 | 100% | 100% |  -  |
| WebSite | 3 | 100% | 8% | Organisation |
| ContactPoint | 1 | 100% | 100% |  -  |
| WebPage | 2 | 100% | 100% | WebSite, Thing, Service |
| Thing | 2 | 100% | 100% |  -  |
| ImageObject | 1 | 100% | 100% |  -  |
| EducationalOccupationalCredential | 1 | 100% | 100% | Organisation |
| ProfessionalService | 1 | 100% | 100% | PostalAddress, GeoCoordinates, OpeningHoursSpecification, Organisation |
| GeoCoordinates | 1 | 100% | 100% |  -  |
| OpeningHoursSpecification | 1 | 100% | 100% |  -  |
| ItemList | 1 | 100% | 100% |  -  |
| AggregateRating | 1 | 100% | 100% | Organisation |

**Structured Data Quality:** 44/100\
**Coverage:** 8 pages with JSON-LD out of 12 total (67%)\
**Unique types:** 23

Across the 12 pages we audited, structured data is limited. Machines cannot reliably extract entity data from these pages. Adding Schema.org JSON-LD with required properties is the highest-impact improvement.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what Dotfusion earns in each.

**Table 13**

*SDQ Score Breakdown*

| Component                       | Earned | Max | Meaning                                                       |
|---------------------------------|--------|-----|---------------------------------------------------------------|
| Presence | 7 | 10 | schema.org JSON-LD is present on the page |
| Required property coverage | 6 | 25 | Every entity carries the properties its type requires |
| Recommended property coverage | 7 | 15 | Entities carry the properties their type recommends |
| Entity richness | 5 | 15 | Entities are described with enough properties to be useful |
| Cross-entity references | 9 | 15 | Entities reference each other (nested types and @id links) |
| Linked-data signals | 3 | 10 | Linked-data properties present (sameAs, mainEntityOfPage, isPartOf, about, mentions) |
| Vocabulary validity | 7 | 10 | Every @type is a valid Schema.org type |
| **Total** | **44** | **100** | |

---

## Structured Data Findings

We identified 67 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`dotfusion-com-structured-data-findings.csv`](dotfusion-com-structured-data-findings.csv). The 67 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

**Table 14**

*Structured Data Findings*

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| Service | recommended | image | 8 | 8 | Service has no representative image |
| Service | recommended | offers | 8 | 8 | Service has no Offer block; pricing structure invisible |
| Offer | required | price | 5 | 5 | Offer has no price  -  agents cannot compare against alternatives |
| Offer | required | priceCurrency | 5 | 5 | Offer has no currency  -  agents cannot interpret the price (USD vs GBP vs EUR) |
| Offer | recommended | availability | 5 | 5 | Offer has no in-stock signal; agents cannot tell if buyable |
| Offer | recommended | seller | 5 | 5 | Offer has no seller attribution |
| Offer | recommended | itemCondition | 5 | 5 | Offer has no new/used condition declared |
| Offer | recommended | url | 5 | 5 | Offer has no purchase URL; agents cannot deep-link to checkout |
| Service | required | provider | 5 | 5 | Service has no provider attribution |
| Service | recommended | areaServed | 5 | 5 | Service has no geography declared; agents cannot filter by region |

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

**What this section checks.** Each signal below is derived deterministically from served HTML and JSON-LD on disk: no inference, no model judgement. Five structural signals fire per page: (i) self-promotional listicle (a ranked list is advertised whose first entry resolves to the publisher's own host), (ii) year-swap refresh (the title year is two or more years ahead of `dateModified`), (iii) first-party superlative (claims like "best", "leading", "high-quality" without an external reference), (iv) third-party citation count (outbound links to hosts other than the audited site), and (v) provenance metadata presence (`author`, `dateModified`, `publisher`). Pages whose body content runs over 400 words while emitting zero third-party citations carry no verifiable references and contribute to the blocker list. When the audited set is clean we omit the per-page table altogether and let the verdict line below carry the result.

**The list format is not the problem.** Ranked, comparative lists are among the most-cited content shapes in AI answers, so we never flag a page for being a list. What we flag is the self-ranking variant: a "best N" page that puts its own brand at position one. It repeats a familiar move - the FAQ markup Google deprecated for gaming while AI systems kept reading it. The gamed surface gets demoted; the format stays valuable; the gap between them is provenance. The demotion is not an SEO cost you can trade for AI reach: AI answer engines retrieve through search, Google's own among them, so a page the search engine demotes is a page the AI does not surface at the top. A self-ranking list reads as a rigged result to anything checking who made the ranking, and it forfeits the visibility it was trying to manufacture.

### Per-page findings

**Table 16**

*Per-page findings*

| Page | Self-ranking | Year-swap | First-party superlative | Third-party citations | Provenance metadata |
|------|----------|-----------|--------------------------|------------------------|----------------------|
| [/services/headless-cms-agency](https://dotfusion.com/services/headless-cms-agency) |  -  |  -  |  -  | 3 third-party links | missing: author, publisher, dateModified, sameAs |
| [/services/contentful-development-agency](https://dotfusion.com/services/contentful-development-agency) |  -  |  -  |  -  | 3 third-party links | missing: author, publisher, dateModified, sameAs |
| [/services/storyblok-development-agency](https://dotfusion.com/services/storyblok-development-agency) |  -  |  -  |  -  | 3 third-party links | missing: author, publisher, dateModified, sameAs |
| [/services](https://dotfusion.com/services) |  -  |  -  |  -  | 3 third-party links | missing: author, publisher, dateModified, sameAs |
| [/services/answer-engine-optimisation-agency-dotfusion](https://dotfusion.com/services/answer-engine-optimization-agency-dotfusion) |  -  |  -  |  -  | 3 third-party links | missing: author, publisher, dateModified, sameAs |
| [/services/agility-cms-development-agency](https://dotfusion.com/services/agility-cms-development-agency) |  -  |  -  |  -  | 3 third-party links | missing: author, publisher, dateModified, sameAs |

The **Self-ranking** column flags a self-promotional listicle: a page whose `<title>` or `<h1>` advertises a ranked list and whose position-one entry resolves to the publisher's own host or brand. A year-swap refresh is a page whose title year is two or more years ahead of its JSON-LD `dateModified`. The citation column counts outbound links to hosts other than the audited site; pages with body content over 400 words and zero third-party citations carry no verifiable references.

### Templated clusters

No templated clusters detected at the audited scale. Pages in the audited set either carry product entities or have enough structural and textual variation to clear the stamp-out threshold.

### Provenance verdict

No provenance-gap blockers detected on the audited set. Pages clear the structural primitives we measure here.

Any page contributing to a blocker above is capped at **Discoverable** readiness in the MX Readiness Level table below, regardless of its other scores. Citation readiness requires a verifiable claim to cite.

---

## Marker Reachability

**Table 17**

*Marker Reachability*

| Marker                            | In served   | In rendered | In head | Reachable <250KB | Injected by JS |
|-----------------------------------|-------------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Yes | Yes | Yes | Yes | Yes |
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

**Table 18**

*Schema Maturity Level*

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

The classification is conservative: every Schema.org block on every audited page must clear a level's bar for this site to claim it, so a handful of thin blocks or pages without markup caps the level even when most pages individually sit higher. That is deliberate. An agent does not choose which page it lands on, so the level reflects what the weakest landing point guarantees.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. A break at any stage propagates to all subsequent stages.

**Table 19**

*5-Stage MX Journey*

| Stage | Name              | Status      | Score | Key Metric                                        |
|-------|-------------------|-------------|-------|---------------------------------------------------|
| 1 | Discovery | Pass | 89 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 42 | Schema.org: ItemList, ListItem, ListItem (100% required properties) |
| 3 | Search & Compare | Pass | 60 | Commerce schema with 0 supporting patterns |
| 4 | Price Understanding | Partial | 33 | Offer schema present but no price - agents may not parse the price |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

*Each stage carries its own pass threshold, so Status and Score are not comparable across rows: a score that passes one stage can fall short on another with a stricter bar.*

Stage 2 (Citation) is the bottleneck in the agent journey. Because each stage builds on the one before it, the stages after it cannot improve until this one does. It is the highest-priority place to start; the stage's key metric is Schema.org: ItemList, ListItem, ListItem (100% required properties).

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, condensing by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Fail · 5/12
  - *Means:* 5 page(s) flag for truncation risk; 4 of them exceed the 250 KB hard ceiling, the rest place main content too far into the document. Agents with limited fetch windows may stop reading before reaching the main content.
  - *Data:* Largest page: 471 KB ([the home page](https://dotfusion.com/)). Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See dotfusion-com-pipeline-truncation-risk-pages.csv (5 pages).
- **SPA Shell** - Pass · 12/12
  - *Means:* Served HTML matches rendered HTML, no JavaScript is required for content. Server-side agents see the same content a browser does.
  - *Data:* Max gap score: 15. 0 means served and rendered match.
- **Soft 404** - Fail · catch-all
  - *Means:* This site returns HTTP 200 for addresses that do not exist (a soft-404 catch-all), so agents and search engines cannot distinguish a missing resource from a real one. Missing addresses must return HTTP 404 or 410.
  - *Data:* A control address that does not exist returned HTTP 200; 42 of 44 well-known paths are soft-404s.
- **Boilerplate Burial** - Pass · 12/12
  - *Means:* Navigation and chrome do not dominate the page; main content is reachable without wading through overhead.
  - *Data:* Highest boilerplate-to-content ratio: 0.05. Threshold: < 10 (and < 80 KB of inline head bytes).
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
  - *Means:* Prose content averages only 8% of served bytes. Scripts, styles, and images dominate; agents get little signal per byte.
  - *Data:* Average: 8%. Threshold: 30%.
- **Inline Tag Bloat** - Pass · 12/12
  - *Means:* No `<style>` or `<script>` block exceeds the 500-byte threshold on any page. Head stays lean for agents that read head-first.
  - *Data:* 0 element(s) > 500 bytes. Largest single-page inline CSS block: 0 B. Largest single-page inline JS block: 0 B.
- **Head Weight** - Pass · N/A
  - *Means:* Head bytes are a small fraction of each page. Agents reach body content quickly.
  - *Data:* Max ratio: 0.00. Average: 0.00. Threshold: 0.50.

**Pipeline Survivability score:** 95/100

Five pages have a truncation risk that can cause machines to miss part of the content, limiting their ability to understand and index those pages fully. The most effective fix is to ensure complete page delivery by adjusting server response or fetch size so that no content is truncated. Implementing this change strengthens resilience and gives machines full visibility, improving discoverability.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check set, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

**Table 20**

*Div Soup: naked containers without semantic mapping*

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Served HTML | 31/100 (high) | 261 bare divs (73% of containers, depth 5) | `div` (160), `div.flex.items-center` (57), `div.slick-slide.slick-cloned` (38), `div.input-container.flex` (28), `div.slick-slide` (15) |
| Rendered HTML | 31/100 (high) | 269 bare divs (73% of containers, depth 5) | `div` (182), `div.flex.items-center` (57), `div.slick-slide.slick-cloned` (38), `div.input-container.flex` (28), `div.slick-slide` (15) |

**Worst page (both):** [/about](https://dotfusion.com/about)

On the worst page at /about, both served and rendered surfaces exhibit a bare-div ratio of 73 %, meaning machines lose structural context and must rely on positional inference to interpret content.  
The soup is structural; a deepest bare chain of length five indicates that the source pipeline likely uses drag-and-drop builders or untyped component frameworks that inject nested divs without semantic markup.  
A low-cost first step is to wrap the main landmarks-header, nav, main, footer, aside-with semantic elements and give remaining divs meaningful class names so the bare-div ratio falls without redesigning the layout.

---

## Security Headers

**Table 21**

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

HTTPS: 12/12 | HSTS: 12/12 | CSP: 0/12 | X-Frame-Options: 0/12 | X-Content-Type-Options: 0/12

---

## Cross-Page Consistency

**Table 22**

*Cross-Page Consistency*

| Pattern                          | Coverage | Pages missing it   |
|----------------------------------|----------|--------------------|
| Schema.org JSON-LD | 67% | 4 |
| MX governance tags | 0% | 12 |
| Open Graph tags | 0% | 11 |
| Twitter Card tags | 0% | 11 |
| Skip link | 0% | 11 |
| llms.txt link tag | 0% | 11 |
| Canonical URL | 100% |  -  |
| Exactly 1 H1 | 92% | `/contact-us` |
| Code examples present | 0% | 12 |
| Self-contained sections | 100% |  -  |
| Error/troubleshooting docs | 0% | 12 |
| Lighthouse heading compliance | 92% | `/contact-us` |

**Overall Consistency:** 44%

Some pages in the 12-page sample are missing metadata patterns that others carry. Machines hitting different pages get different quality data. The Missing Pages column shows where to focus on the sampled pages.

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no brand-name or canonical-URL divergence flagged by the consistency check.

**Table 23**

*Content Consistency*

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Brand-name parity | Pass | Brand name appears consistently across all 12 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 12-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

We found 12 identical inline fragment(s) repeated across multiple pages, totalling 537 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

**Table 24**

*Inline Code Duplicates*

| Type | Bytes per fragment | Appears on N pages | Preview                                                          |
|------|-------------------:|-------------------:|------------------------------------------------------------------|
| js | 426 | 23 | (function(w,d,s,l,i){w[l]=w[l]\|\|[];         w[l].push({'gtm. |
| css | 14154 | 12 | :root{--toastify-color-light: #fff;--toastify-color-dark: #1 |
| css | 34504 | 11 | @charset "UTF-8";.rhap_container{box-sizing:border-box;displ |
| js | 657 | 11 | setTimeout(function(){!function(e,f){try{if(e.vector)return  |
| js | 634 | 11 | setTimeout(function(){!function(){var a=window.reb2b=window. |
| css | 624 | 11 | .Menu_blobby__qf9bF{position:absolute;width:527.44px;height: |
| js | 435 | 11 | setTimeout(function(){(function(a,e,f,g,b,h,d,c){a[b]\|\|(a.Gl |
| js | 376 | 11 | setTimeout(function(){function b(){return"01f314ab-30b2-4266 |
| js | 351 | 11 | setTimeout(function(){function b(){var c=Math.random().toStr |
| js | 312 | 11 | setTimeout(function(){(function(){window.ldfdr=window.ldfdr\| |

*Showing the top 10 of 12 duplicate fragments by occurrence count. The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `dotfusion-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src=".">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Legal convergence on ISO 14289-1 (PDF/UA) across major markets, with the EAA Directive as a precisely codified example, establishes the technical baseline for accessibility. Machine readability requires PDFs to contain proper structure trees; an untagged PDF is invisible to AI agents and crawlers, while a tagged PDF offers the same machine-readable semantics that semantic HTML provides.

We linked no PDFs from the 12-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

PDFs are part of the machine-readable estate but sit outside this HTML audit's scope. A dedicated PDF review checks each public document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified) and returns a per-document verdict.

---

## Content Uniqueness

Analysis of prose content across audited pages found 1 of 12 HTML pages reaching Low Machine Value on the content-uniqueness scale. Pages with high shared content give machines redundant information per page, reducing the value of multi-page crawls.

**Table 25**

*Content Uniqueness*

| Page | Unique content | Band |
|------|---------------|------|
| `/contact-us` | 0% | Low Machine Value |

**Most-shared content blocks:**
- "tell us what's on your mind name email your company about your dream project sen." (4 pages, 33%)
The full per-page breakdown (12 pages) is in `prose-repetition.json` in the results directory.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 94 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Semantic Structure improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

**Table 26**

*What's Next*

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4, P5, P6 (Compliance Risk) | Priority 1, 2, 3, 4, 5, 6 resolved: WCAG 2.1 AA accessibility compliance restored |
| Full Implementation | P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18 (P1-P18) | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | The full machine-readable estate, beyond the web pages |
| Data-Sovereign Option | Regulated industries | Run the full audit pipeline on your own infrastructure - no client content leaves your network |

This audit is a starting point. The outcome we work toward is a site any machine can read, trust, and act on, and a dated, attested record you can show to a regulator, a partner, or an acquirer on request. Reaching it (structured data, discovery files, accessibility, governance metadata, and re-audit on a schedule you set) is available as a managed service. We also run training sessions that give development teams the MX vocabulary and implementation patterns directly, so the gap between findings and fixes is weeks, not quarters. To take any of it further, contact CogNovaMX Ltd at <info@cognovamx.com>.

---

## Summary of Findings

We found that https://dotfusion.com scores 85/100 in SEO, indicating strong search visibility and on-page optimisation across the audited set. However, Discovery Readiness at 20/100 and Structured Data at 44/100 reveal significant opportunities for improving machine discoverability and rich-data markup. We invite you to address these gaps to enhance how machines understand and surface the content.

### Audit Scores

**Table 27**

*Audit Scores*

| Dimension | Score | Band |
|-----------|-------|------|
| Served-HTML Structure | 100/100 | Excellent |
| Accessibility | 76/100 | Excellent |
| SEO (all pages) | 85/100 | Excellent |
| SEO (content pages) | 84/100 | Excellent |
| MX Stack Completeness | 43/100 | Could Be Better |
| Structured Data Quality | 44/100 | Could Be Better |
| Commerce Visibility | 35/100 | Could Be Better |
| Discovery Readiness | 20/100 | Needs Improvement |
| Heading Quality | 94/100 | Excellent |
| Agent Readability | 79/100 | Excellent |
| Pipeline Survivability | 95/100 | Excellent |
| Cross-Page Consistency | 44% | Could Be Better |

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

---

## Appendix A: Pages Audited

- **`/ (nav)`**: SEO 90 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/services`**: SEO 85 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/services/headless-cms-agency`**: SEO 87 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/services/contentful-development-agency`**: SEO 83 · A11y 70 · Back 85 · Served 100 · Rendered 100
- **`/services/storyblok-development-agency`**: SEO 86 · A11y 70 · Back 85 · Served 100 · Rendered 100
- **`/services/agility-cms-development-agency`**: SEO 87 · A11y 70 · Back 85 · Served 100 · Rendered 100
- **`/services/answer-engine-optimization-agency-dotfusion`**: SEO 85 · A11y 90 · Back 85 · Served 100 · Rendered 100
- **`/industries`**: SEO 91 · A11y 75 · Back 85 · Served 100 · Rendered 100
- **`/about`**: SEO 87 · A11y 75 · Back 55 · Served 100 · Rendered 100
- **`/contact-us`**: SEO 67 · A11y 70 · Back 55 · Served 100 · Rendered 100
- **`/privacy`**: SEO 84 · A11y 80 · Back 55 · Served 100 · Rendered 100
- **`/jedi`**: SEO 82 · A11y 85 · Back 55 · Served 100 · Rendered 100

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 84/100.

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. We do not track external links; our inventory covers same-host `<a href>` links only. We disabled per-link HTTP status probing by policy (we retired the HEAD-per-link approach to avoid hammering origins with thousands of concurrent requests); individual link status shows as `SKIP` in the raw CSV, not as `ERR`. For a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

Per page, internal links range from 15 to 33, averaging 20 across 12 pages. That is typical (benchmark median 20 per page).

**Table 28**

*Appendix B: Link Inventory*

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 240 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |

---

## Appendix C: Image Efficiency

We reviewed 125 images across the audited set: 3 WebP, 60 SVG, 38 PNG and 24 in other or unidentified formats. 99 of 125 (79.2%) carry alt text, leaving 26 without it. Each missing alt attribute is a place where a screen-reader user or a machine reading the page gets no description of what the image shows.

On loading strategy, 24 images are marked `loading="lazy"` and 0 `loading="eager"`, while 101 carry no loading attribute at all. No attribute is not the same as eager: the browser decides for itself when to fetch, which removes the explicit control that lazy and eager give you. Setting an explicit attribute on those images makes the fetch behaviour predictable for browsers and machines alike.

> **Double-lazy loading pattern not detected** -  no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.x (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: **Next.js** (high confidence -  multiple fingerprint signals). The main audit uses Next.js-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** **Next.js** -  JS framework; **Tailwind CSS** -  CSS framework; **Bootstrap** (low confidence) -  CSS framework. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from the audited pages. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 12 pages examined | Platform: Next.js | Analysis method: Hybrid (automated + manual verification) | robots.txt: Present (3 directives)

**Measurement completeness:** Every probe completed during this audit, with no network errors or timeouts. The findings below rest on a full data collection.

**What comes next.** This report is the foundation, not the finish line. Implementing the recommendations requires the technical knowledge that produced them; we bring that forward. Our implementation engagements begin where this audit ends.

The outcome we work toward is a site - and an estate of documents beyond it - that any machine can read, trust, and act on, and that carries its own dated, attested record for the humans who need to verify that claim. Reaching it - structured data, discovery files, accessibility, governance metadata, and re-audit on a regular schedule - is available as a managed service or as licensed tooling your team runs independently. We also run training sessions that give development teams the MX vocabulary and implementation patterns directly. To take any of it further, contact CogNovaMX Ltd at info@cognovamx.com.

---

\clearpage

## Further Reading

The reference material cited in this report. Click the link on screen or scan the QR code on paper: both encode the same URL.

**Table 29**

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

We view machines as the counterpart of UX for users: we ask not whether a human can read this audit, but whether a machine can read it, verify it, and act on it. A standard is credible only when we run on it ourselves, so we built this audit to the standard it measures.

This audit carries its own provenance. Every step that produced it is recorded in two adjacent JSON sidecars - one AI, one deterministic - and the full evidence chain travels inside the PDF's XMP metadata: extract it with `exiftool -b -XMP-mx:ProvenanceAiPayload dotfusion-com-report.pdf | jq .`. We produced the PDF as a tagged ISO 14289-1 (PDF/UA-1) Level 2 document with a complete reading-order structure tree. What we measure for our client, this deliverable satisfies.

Machine-readable content is visible to agents and validators. Machine-trustworthy content adds a provenance layer - a dated, attested record that names who published it and under what rubric. Readable is what MX makes content; the provenance layer is what makes it trustworthy. The two do different jobs, and this report carries both. It is an example of what that looks like in practice.

\clearpage

## Practice What We Preach: This Audit's Own Evidence Chain

A standard is credible only when we run on it ourselves. We hold this audit deliverable to the same MX standards we apply to the audited site; consider this working proof of the practice it recommends. Every consequential step that produced this report (LLM-driven prose passes, deterministic gate verdicts, multi-agent attribution probes, repair iterations) is recorded in two adjacent JSON sidecars next to this PDF.

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the output it produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the operator. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `*.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `*.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload mx-allabout-network-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did. We prefer determinism to inference: explicit over inferred, recorded over remembered, a result you can reproduce over one we could only explain. Where a check can be made by a rule, a rule makes it, and the rule leaves a record rather than an opinion. That is why this chain shows what we did instead of asking you to trust a summary of it.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the operator distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it to ourselves.

The result is a report that serves two audiences simultaneously: the humans who read it, and any machine that encounters it later - whether that is a validator checking the provenance chain, an assistant answering a query about the audit, or a regulator walking from a compliance clause to the evidence that supports it. One deliverable, two audiences, no guessing.

---

**Date:** 26 June 2026\
(c) 2026 CogNovaMX Ltd. All rights reserved.

*This is a sample run over a subset of the site. CogNovaMX Ltd can scope a full-estate audit.*

