---
title: "Whiteroseclub"
subtitle: "Website Analysis & Machine Readiness"
type: report
author: "Tom Cranstoun"
created: "2026-07-01"
modified: "2026-07-01"
client: "Whiteroseclub"
clientSlug: "www-whiteroseclub-com"
clientUrl: "https://www.whiteroseclub.com"
reportId: "www-whiteroseclub-com-WEB-AUDIT-20260701"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-07-01"
auditCommand: "node scripts/audit-pipeline.js https://www.whiteroseclub.com/"
description: "Executive audit report reviewing accessibility, performance, SEO, structured data, and AI agent compatibility for Whiteroseclub"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 97
accessibilityScore: 94
seoScore: 77
llmServedHtmlScore: 89
agentReadabilityScore: 
totalIssues: 76
htmlPagesAudited: 10
version: "1.0"
pipelineVersion: "1.1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-07-01/www.whiteroseclub.com/www-whiteroseclub-com-report.md
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Whiteroseclub covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Whiteroseclub", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  # The single cog that manages this pipeline artefact, so a reader never
  # has to infer the steward (scripts/lib/managed-by.cjs is the resolver).
  x-mx-managedBy: mx-audit.cog.md
  x-mx-generatedBy: "mx-reginald/audit/bin/infill-report.js"
  x-mx-canonicalSource: "Audit results for https://www.whiteroseclub.com on 2026-07-01 - fix via generator, not this file"
  runbook: "Executive audit report for Whiteroseclub. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in the top-level auditCommand field. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-07-01/www.whiteroseclub.com/www-whiteroseclub-com-report.md', which validates the report then renders it through scripts/bin/mx.pdf.sh."
  generate:
    command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-07-01/www.whiteroseclub.com/www-whiteroseclub-com-report.md"
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/runs/www.whiteroseclub.com/latest-copy.pdf"
    description: "Generate PDF audit report for Whiteroseclub"
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
    sidecar: "www-whiteroseclub-com-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "www-whiteroseclub-com-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 1 July 2026\
**Report ID:** www-whiteroseclub-com-WEB-AUDIT-20260701

---

\clearpage

## About This Report

We audited 10 pages across www.whiteroseclub.com's site using the Web Audit Suite. We also reviewed the site's discovery files (sitemap.xml, llms.txt). We review each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image efficiency, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before completing this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as characteristics of that platform rather than site-specific gaps. When new agent patterns emerge, we update what we look for.

**How we build it.** We use scripted SOPs running deterministic checks rather than inference. The crawl, the served-versus-rendered comparison, the structured-data extraction, the accessibility passes, the discovery-file probes, the platform fingerprinting and the per-section scoring all run as scripts producing byte-identical outputs on the same input. A small number of stages run a judgement pass over the resulting report; that is the only inference layer. Those judgement passes can run against a local model, so the whole audit runs inside the organisation's own network with nothing leaving it: relevant where content is regulated or privacy-sensitive. Every AI decision made during the audit is recorded in the provenance layer attached to this document - the AI and deterministic evidence sidecars embedded in the PDF. The only connection the audit makes to the internet is fetching the pages of the website being audited. Nothing is sent out.

Our scoring criteria follow published MX standards and proposed specifications maintained at [The Gathering](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. MX addresses governance and machine experience metadata in the areas those standards do not cover. The methodology behind every section of this report is documented in full in MX: The Protocols at [MX: The Protocols](https://mx.allabout.network/books/).

**What we cover here, and what MX covers.** This report looks at the web estate: every page served over HTTP, examined for metadata, structured data, accessibility, and what machines can read. MX runs deeper, covering every document type a business publishes (PDFs, data feeds, API responses, structured documents) and the machines that read them. The web estate is the foundation; the rest builds on it.

**Audit scope.** Findings throughout this report describe what we observed on the 10 HTML pages we examined in depth, drawn from a sitemap of 45 URLs. We also reviewed the site's discovery files (sitemap.xml, llms.txt). Structural findings - a missing header, a soft 404 pattern, a discovery file gap - hold across the full estate and are noted as such. Verdicts scoped to the sampled pages should not be extrapolated to the full estate without a wider audit.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. The Discovery Files section below records its presence, transport type, and sitemap registration, and covers the two structural problems (content type and discovery) that limit most implementations.

---

## Executive Summary

**Table 1**

*Executive Summary*

| | Score | Verdict |
|:---|---:|:---|
| Performance | **97**/100 | `#################-` Excellent |
| Accessibility | **94**/100 | `#################-` Excellent |
| SEO | **77**/100 | `##############----` Excellent |
| Served-HTML Structure | **89**/100 | `################--` Excellent |
| MX Stack Completeness | **54**/100 | `##########--------` Good |
| Agent Readability | **36**/100 | `######------------` **(!)** Could Be Better |
| Pipeline Survivability | **71**/100 | `#############-----` Good |
| Machine Processing Speed | **9078** ms/page | Machine-Dense |

*The three machine metrics measure different things. **Served-HTML Structure** is the semantic markup an agent reads before JavaScript runs; **Agent Readability** is how easily the content can be quoted once reached; **Pipeline Survivability** is whether a page survives an agent's fetch and ingest. A site can score low on one and high on another.*

Agent Readability was adjusted down by 23 points for site-wide gaps a machine cannot work around:

- **Audience had to be inferred (no machine-readable signal declared)** (-15): adult audience, basis inferred
- **Bare-div nesting (div soup) across most pages** (-8): 11 of 12 pages are heavy with bare-div nesting

The site reads as aimed at a adult audience, but the structured data declares no age band, so an agent has to infer the audience; declaring `schema:typicalAgeRange` or `mx:intendedAgeRange` would make it explicit. The site runs on **Shopify** (detected from multiple platform signals).

Across the audited set, Whiteroseclub scores 94/100 for accessibility and 77/100 for SEO, with solid page performance (97/100)  -  a strong baseline for both human visitors and machine readers.

The headline opportunity is to address the seven distinct WCAG AA issue types that appear across 76 raw instances. Fixing each category will lift accessibility compliance and remove critical alerts flagged by Pa11y, while also improving overall user experience for all visitors. The next step after remediation is to embed MX governance fields-mx:status, mx:contentType, mx:audience, canonicalUri, and provenance markers-so that machines can understand the purpose, target audience, and editorial standing of each page; this move will elevate the audited set from Level 0 (Not Ready) to Level 2 (Governed).

Another key area of focus is the platform and markup foundation. Across the audited set, Shopify’s dynamic rendering can obscure content for agents that rely on served HTML, yet every machine can still consume robust Schema.org JSON-LD regardless of how the page is rendered. The current structured data quality sits at 5/100 with only a single WebSite type present; enriching pages with comprehensive JSON-LD will provide a solid, high-leverage asset that all agents can read and interpret consistently.

\clearpage

## Balanced Scorecard

### Human Experience

Human visitors experience Excellent performance (avg 377 ms load time), Excellent accessibility across 10 pages, and Excellent search visibility.

**Table 2**

*Human Experience*

| Dimension | Score | Band | vs Peers |
|-----------|-------|------|----------|
| Performance | 97/100 | Excellent | A (median) |
| Accessibility | 94/100 | Excellent | A (median) |
| SEO (content pages) | 75/100 | Excellent | A (median) |
| Security headers |  -  |  -  |  -  |

### Machine Experience

Machines experience Excellent HTML structure at first fetch, Needs Improvement discovery readiness (12/100), Needs Improvement structured data quality (5/100), and Could Be Better agent readability.

**Table 3**

*Machine Experience*

| Dimension | Score | Band | vs Peers |
|-----------|-------|------|----------|
| Served-HTML Structure | 89/100 | Excellent | A (median) |
| Discovery Readiness | 12/100 | Needs Improvement | C (median) |
| Structured Data Quality | 5/100 | Needs Improvement | B (median) |
| MX Stack Completeness | 54/100 | Good | B (median) |
| Pipeline Survivability | 71/100 | Good | A (median) |
| Machine Processing Speed | 9078 ms/page | Machine-Dense |  -  |

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

**Evidence:** MX Stack Completeness 54/100 Core metadata layers are in place; governance fields and provenance declarations are missing. | Structured Data Quality 5/100 Schema.org data is absent or minimal; machines receive no structured facts about the site's entities. | Discovery Readiness 12/100 Machines have almost no structured context about what the site covers or how to use it. | Consistency 41% Fewer than half the tracked metadata patterns apply across all pages; agents reading different pages get different signal quality.

**To reach the next level:** raise Discovery Readiness above 15 (currently 12).

---

## Audience and Age Awareness

We assess that this page is aimed at an adult audience (inferred from the page content; no audience signal was declared). We describe who the page appears to be for; we do not judge the content, and we do not block anything.

**Adult confirmation:** No adult-confirmation step was observed; an adult-oriented page with no confirmation is the gap to name.

**Age range found:** No age range is declared on the page.

**Content rating:** No machine-readable content rating was found.

We expect an adult-oriented page to carry a clear adult-confirmation step and plain labelling. We frame this as routing for people and machines, never as a reason to block lawful content.

### Age-Assurance Signals

**Table 5**

*Age-Assurance Signals*

| Signal | Status | Details |
|--------|--------|---------|
| Age gate (HTML) | Absent |  |
| Age-verification vendor | None detected |  |
| `/.well-known/age-verification` | Absent |  |
| Schema.org contentRating | Not declared |  |
| RTA meta label | Absent |  |

### Regulatory Exposure

> **Note:** This section describes regulatory frameworks in general terms only. Nothing here is legal advice. Requirements vary by jurisdiction, organisation type, and use case. Consult qualified legal specialists for guidance specific to your situation.

**Table 6**

*Regulatory Exposure*

| Regulation | Jurisdiction | Status | Site posture |
|------------|--------------|--------|--------------|
| EU Digital Services Act Article 28 | EU | Enforced Feb 2024 | No machine-readable signal detected |
| UK Online Safety Act Part 5 | UK | Active (OFCOM guidance) | No machine-readable signal detected |
| Louisiana Act 440 (HB 142) | US - Louisiana | Active since 2022 | No machine-readable signal detected |
| Virginia HB 1515 | US - Virginia | Active July 2025 | No machine-readable signal detected |
| Utah SB 287 | US - Utah | Active (under First Amendment appeal) | No machine-readable signal detected |
| Montana SB 544 | US - Montana | Active | No machine-readable signal detected |
| Australia Online Safety Act | Australia | Active | No machine-readable signal detected |

Deploy an age gate (HTML form or third-party service) and link it to a /.well-known/age-verification endpoint. Add Schema.org contentRating or mx:intendedAgeRange. Add a robots.txt Content-Signal directive.

We inferred this audience rather than reading a declared signal, so we recommend making it machine-readable: declare the intended audience in the structured data, a schema.org Audience entry in the JSON-LD, and in MX metadata, mx:audience, with an age range where relevant, so an agent reads who the page is for instead of inferring it. The age-awareness signals an agent looks for were not observed either: where you operate an adult-confirmation step or a consent mechanism, make it machine-detectable, and declare a content rating. We carry these forward as Machine Readability findings; they make the signals legible to machines, and they are not compliance requirements.

<div class="page-break"></div>

## What's Working Well

We find SEO performance and security transport across the audited set, giving a clear starting point for the improvements ahead.

**Table 7**

*What's Working Well*

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent  -  377ms average load time |
| SEO (content pages) | 75 | Excellent  -  titles, meta descriptions, canonical URLs in place |
| Security | 3/5 | 3/5 headers present (CSP, X-Frame-Options absent); 0 of 12 URLs carry all five |
| Heading Quality | 57 | Good  -  headings present and machine-parseable |
| Consistency | 41% | 41%  -  same metadata patterns across every page |
| Agent access | 8/8 | every tested agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.

---

## Findings

### At a Glance

The table below is the prioritised action list for this audit. Each row names a finding, its compliance-risk bucket, and the effort to fix it. The numbered blocks below the table expand each finding with specific guidance.

We identified 14 finding(s) on the audited set, ordered by regulatory exposure first and then by priority within each category.

**Table 8**

*At a Glance*

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Insufficient Colour Contrast, WCAG 1.4.3 | Compliance Risk | High | Medium | low-vision users may miss or misread affected content |
| 2 | Duplicate ID Attributes, WCAG 4.1.1 | Compliance Risk | High | Medium | assistive-technology users may miss or misread affected content |
| 3 | Info and Relationships Not Programmatically Determined, WCAG 1.3.1 | Compliance Risk | High | Medium | screen reader users may miss or misread affected content |
| 4 | Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2 | Compliance Risk | High | Medium | screen reader users may miss or misread affected content |
| 5 | Accessibility Issue, WCAG 3.2.2 | Compliance Risk | High | Medium | all users may miss or misread affected content |
| 6 | Image Alt-text Coverage | Compliance Risk | High | Low | screen-reader users and machines miss the content of those images |
| 7 | Heading Hierarchy Skips Levels | Compliance Risk | Medium | Low | screen-reader and machine outline-builders may misread the page structure |
| 8 | Semantic Structure (Naked Containers) 7/100 | Compliance Risk | Medium | Medium | machines lose structural context and infer page regions by position |
| 9 | Security headers absent: CSP, X-Frame-Options | Cross-cutting | Medium | Low | Missing security headers increase exposure to content injection and clickjacking |
| 10 | Structured Data Property Gaps | Machine Readability Opportunity | Medium | Medium | machines may extract these entities incompletely or skip them |
| 11 | Schema.org coverage is partial: Clean slate (SDQ 5/100) | Machine Readability Opportunity | Medium | Medium | Agents can partially parse structured facts but key properties may be missing |
| 12 | Intended audience not machine-declared (adult audience inferred from content) | Machine Readability Opportunity | Medium | Low | Agents must infer the intended audience from the prose; a declared signal removes the ambiguity and supports age-appropriate routing |
| 13 | Age-assurance signal not machine-detectable (adult audience) | Machine Readability Opportunity | Medium | Medium | An agent cannot tell whether age assurance is in place; where one is operated, it is not exposed in a way a machine can read |
| 14 | Consent signal not machine-detectable on first visit (adult audience) | Machine Readability Opportunity | Medium | Medium | An agent cannot confirm whether a consent mechanism is presented before processing |

---

**Priority 1: Insufficient Colour Contrast, WCAG 1.4.3**

**Bucket:** Compliance Risk

**Finding:** Text and its background do not meet the minimum contrast ratio, leaving the content hard to read for low-vision users and in bright-light conditions. This pattern appears 47 time(s) across the audited set, affecting low-vision users.

**What to change and why:**

- Raise the contrast ratio of the flagged text and its background to at least 4.5:1 for normal text (3:1 for large text). This satisfies WCAG 1.4.3 and keeps the text readable for low-vision users and in bright-light conditions.
- Fix the values in the design tokens or theme stylesheet once so the change propagates wherever the colour pair is reused, rather than patching individual pages.

**Effort:** Medium

---

**Priority 2: Duplicate ID Attributes, WCAG 4.1.1**

**Bucket:** Compliance Risk

**Finding:** Duplicate id attributes appear across the audited set, breaking label associations, ARIA references, and in-page anchor links. This pattern appears 20 time(s) across the audited set, affecting all assistive tech users.

**What to change and why:**

- Make every id attribute unique within each page; duplicate ids break label/for associations, aria-labelledby references, and in-page anchors. This satisfies WCAG 4.1.1.
- When the duplication comes from a repeated template module, fix it once in the template so every page that includes the module is corrected together.

**Effort:** Medium

---

**Priority 3: Info and Relationships Not Programmatically Determined, WCAG 1.3.1**

**Bucket:** Compliance Risk

**Finding:** Visual structure (headings, lists, tables, form labels) is not exposed in the markup, so assistive technology and machines cannot reliably reconstruct it. This pattern appears 4 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Expose the structure a sighted user sees (headings, lists, tables, form labels) in the markup so assistive technology and machines can reconstruct it. This satisfies WCAG 1.3.1.
- Use native semantic elements before ARIA; reach for ARIA only where no native element conveys the relationship.

**Effort:** Medium

---

**Priority 4: Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2**

**Bucket:** Compliance Risk

**Finding:** Interactive elements lack an accessible name, role, or state that assistive technology and agents need to identify and operate them. This pattern appears 3 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Give every custom control an accessible name and the correct role and state (prefer a native button/link/input; add ARIA only where no native element fits). This satisfies WCAG 4.1.2.
- A named, correctly-roled control is also what lets an agent understand what an interactive element does.

**Effort:** Medium

---

**Priority 5: Accessibility Issue, WCAG 3.2.2**

**Bucket:** Compliance Risk

**Finding:** This form does not contain a submit button, which creates issues for those who cannot submit the form using the keyboard. Submit buttons are INPUT elements with type attribute "submit" or "image", or BUTTON elements with type "submit" or omitted/invalid. This pattern appears 2 time(s) across the audited set, affecting all users.

**What to change and why:**

- Review the flagged instances against the relevant standard and remediate them at the template or configuration level so the fix applies wherever the pattern recurs.
- Add a check to the publish pipeline so the pattern is caught before it ships again.

**Effort:** Medium

---

**Priority 6: Image Alt-text Coverage**

**Bucket:** Compliance Risk

**Finding:** 17 of 53 images (32%) on the audited set carry no alt text, so their content is unavailable to assistive technology and to machines reading the page.

**What to change and why:**

- Add descriptive alt text to the informative images that lack it and empty alt to the decorative ones. This satisfies WCAG 1.1.1 across the image set.
- Generating alt text at upload time, or from the CMS media library, keeps coverage high as new images are added.

**Effort:** Low

---

**Priority 7: Heading Hierarchy Skips Levels**

**Bucket:** Compliance Risk

**Finding:** Heading levels skip on 9 audited page(s) (for example an h2 followed by an h4), so the document outline a machine or screen reader builds does not match the visible structure.

**What to change and why:**

- Order headings without skipping levels (an h2 followed by an h4 forces assistive technology and machines to guess the structure). Use heading level for hierarchy and CSS for visual size.
- A clean heading outline is the spine an agent uses to summarise the page; fixing it improves both accessibility and machine comprehension.

**Effort:** Low

---

**Priority 8: Semantic Structure (Naked Containers) 7/100**

**Bucket:** Compliance Risk

**Finding:** Rendered semantic-structure score 7/100: containers carry no role, ARIA landmark, or descriptive class, so machines fall back on positional inference to determine meaning. The worst page ([/members-data-update](https://www.whiteroseclub.com/members-data-update)) carries 219 bare divs of 246.

**What to change and why:**

- Replace the obvious landmark containers (header, nav, main, footer, aside) with their semantic elements and give the remaining containers meaningful class names, so machines stop falling back on positional inference to determine what each region is.
- Start with the page that scored worst; wrapping the landmarks alone usually drops the bare-div ratio sharply without restructuring the layout.

**Effort:** Medium

---

**Priority 9: Security headers absent: CSP, X-Frame-Options**

**Bucket:** Cross-cutting

**Finding:** Security headers absent: CSP, X-Frame-Options (All responses). Missing security headers increase exposure to content injection and clickjacking

**What to change and why:**

- Add the missing response headers at the server or CDN edge; each is a one-line directive that applies to all responses once configured.
- Set them once in the edge or server configuration rather than per page so coverage stays complete as new pages ship.

**Effort:** Low

---

**Priority 10: Structured Data Property Gaps**

**Bucket:** Machine Readability Opportunity

**Finding:** 4 Schema.org property gap(s) on the audited set across WebSite: required or recommended properties are missing, so machines extract these entities less reliably.

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 11: Schema.org coverage is partial: Clean slate (SDQ 5/100)**

**Bucket:** Machine Readability Opportunity

**Finding:** Schema.org coverage is partial: Clean slate (SDQ 5/100) (Homepage). Agents can partially parse structured facts but key properties may be missing

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 12: Intended audience not machine-declared (adult audience inferred from content)**

**Bucket:** Machine Readability Opportunity

**Finding:** Intended audience not machine-declared (adult audience inferred from content) (Per page). Agents must infer the intended audience from the prose; a declared signal removes the ambiguity and supports age-appropriate routing

**What to change and why:**

- Declare the intended audience with a machine-readable signal so an agent reads who the page is for rather than inferring it from the prose: a schema.org Audience or typicalAgeRange entry in the JSON-LD for an age band, and mx:intendedAgeRange (or mx:audience for a general audience) in your MX metadata.
- Set the signal once in the page template or CMS so every page in the section carries the same declaration as new content ships.

**Effort:** Low

---

**Priority 13: Age-assurance signal not machine-detectable (adult audience)**

**Bucket:** Machine Readability Opportunity

**Finding:** Age-assurance signal not machine-detectable (adult audience) (Per page). An agent cannot tell whether age assurance is in place; where one is operated, it is not exposed in a way a machine can read

**What to change and why:**

- We did not observe a machine-detectable age-assurance or age-verification signal. Where you operate one, expose its presence in a way a machine can detect, and declare the content's age-appropriateness (schema.org typicalAgeRange / mx:intendedAgeRange), so an agent can read the protection context rather than infer it.
- This is about machine-readability of the signal, not a requirement to collect age or date-of-birth data; keep data collection to a minimum for a young audience.

**Effort:** Medium

---

**Priority 14: Consent signal not machine-detectable on first visit (adult audience)**

**Bucket:** Machine Readability Opportunity

**Finding:** Consent signal not machine-detectable on first visit (adult audience) (Per page). An agent cannot confirm whether a consent mechanism is presented before processing

**What to change and why:**

- We did not detect a consent signal on first visit. Where you present a consent mechanism, surface its state in a way a machine can detect, so an agent can confirm how consent is handled rather than infer it.
- Set it once in the consent layer or CMS so the signal is consistent across pages.

**Effort:** Medium

<!-- OPT_ENH_SLOT -->
**Table 9**

*At a Glance*

| Enhancement | What it adds for machines | Effort |
|---|---|---|
| Add **sameAs** links to the WebSite JSON-LD | Provides external identifiers (e.g., brand social profiles) so machines can link the site to authoritative sources | Low |
| Add a **SearchAction** potentialAction to the WebSite JSON-LD | Enables machines to discover and invoke a search capability directly from the structured data | Medium |
| Include **Content-Signal directives** in robots.txt | Declares content-use policy, allowing machines to understand usage rights for indexed content | Low

---

## AI Agent Access Test

This test fetches the homepage using the User-Agent strings of known AI agents to verify whether this site is accessible at inference time.

**Table 10**

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

### Non-Standard Response Headers

No non-standard response headers detected. The site returns a clean, standard header set.

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how this site handles errors for both human visitors and machines.

**Table 11**

*Error Page Test*

| Check | Result |
|-------|--------|
| HTTP status code | 400 (soft 404) |
| Custom error page | No, generic server error |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | Absent - error page offers no route back to valid content |
| Internal navigation links | 0 - error page links nowhere |
| MX governance tags | Absent |
| Schema.org JSON-LD | Absent (correct: the error page makes no content claim) |

The site returns 200 for a non-existent URL with no custom error page and no internal navigation links. Visitors and machines both hit a dead end with no guidance. A custom page returning HTTP 404, carrying a `<meta name='robots' content='noindex'>` tag, and linking back to the homepage and key sections turns a dead end into a recovery point for both human visitors and agents.

---

## The Accessibility Tree

Machine visitors vary more than human ones. A small model on a phone works inside a tight context window. A foundation model arrives with browsing tools. A plain scraper never runs a model. A converter flattens each page to text before any model sees it; layout and scripts disappear in the process. A coding agent fetches a page once over HTTP and moves on. Raw markup, text projections, the accessibility tree, structured metadata - each kind of visitor reads a different layer. None of them read the visual layout, and you cannot know which one will arrive next.

Put the same meaning in every channel: page semantics, accessibility tree, metadata, and plain text. A page that stakes its meaning on one channel loses every visitor without it. The accessibility tree is the channel this section checks; it is shared by screen readers, so every fix here serves human and machine visitors alike.

Human visitors follow a path - step by step, page by page. Machines do not. They hit one page, once, and leave; they follow no path unless that page sends them somewhere. A site that hides its meaning across multiple pages is invisible to a machine landing in the middle. Every page has to stand alone for the machine while the journey still works for the human. These are complementary designs on the same pages.

This check reads each audited page as a tree consumer does and flags where behaviour, names, and structure fail to reach it. It covers what the WCAG scan does not: that section measures conformance per page; this one catches meaning that exists in only one channel.

**Table 12**

*The Accessibility Tree*

| Measure | Result |
|---------|--------|
| Accessibility-tree score | 76/100 |
| Pages checked | 10 |

Every page passes all tree-level checks; no structural gaps block complete traversal.

Across the 10 pages we checked, 2 distinct issue patterns reduce what reaches the tree. 1 of these repeat across pages with the same structure, which marks them as template-level: one change in the shared component clears the finding everywhere it appears.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Repeats on 9 of 10 pages with the same structure (a template-level pattern).

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

**Data-bearing image with no text equivalent** (WCAG 2.1 1.1.1)

An image whose name or description suggests it carries data (a chart, a price list, a menu, a timetable) has no adjacent text equivalent. The data exists in exactly one channel - pixels - which no agent and no screen reader can read. Seen on `/visitor-s-fees`.

*The fix:* Publish the underlying data beside the image: a table, a definition list, or descriptive prose in the same template component.

The following issue type(s) were also detected in the accessibility tree but are covered in the Accessibility section above and are not repeated here: Clickable element with no semantic role.

The full set, one row per pattern with every affected page counted, is recorded in the `www-whiteroseclub-com-accessibility-tree.csv` sidecar alongside this report.

**Inspect the accessibility tree.** Right-click any page, choose Inspect, open the Elements panel, click the `>>` icon, choose Accessibility, and toggle "Show Accessibility Tree". The result is what tree consumers receive: if a control or a heading is missing from that view, it is missing for them. Chrome DevTools' AI Assistance panel also accepts "Review accessibility" against any element this report flags.

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds for a returning visitor may be served from a warm CDN edge. The same page on a genuine first visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section re-measures the slowest page from the crawl and a median-load control across several fresh visits, then compares those against the first-visit response. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what a repeat visitor experiences). The overall verdict for each page is the worse of the two, so a fast returning-visitor median cannot paper over a slow first-visit response.

**Method:** Each URL is re-measured across several fresh visits and scored on the median of those measurements. For each page we compare both the crawler's cold-cache baseline and the median of three fresh GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.whiteroseclub.com/visitorregistration`. A first-time visitor sees the cold-cache cost: the crawler recorded 694 ms on its initial fetch. **First-visit verdict: Healthy**. Three fresh re-probes that followed returned 1825ms, 1705ms, 1720ms, giving a returning-visitor median of **1720 ms**. **Returning-visitor verdict: Acceptable but elevated**.

**Median-load control.** The median-load control page is `https://www.whiteroseclub.com/home`. A first-time visitor sees the cold-cache cost: the crawler recorded 259 ms on its initial fetch. **First-visit verdict: Healthy**. Three fresh re-probes that followed returned 1335ms, 1081ms, 1034ms, giving a returning-visitor median of **1081 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** The slowest page is in the elevated band under fresh re-probes but not slow: borderline rather than concerning.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: *?lightbox=

User-agent: AdsBot-Google
Allow: /
Disallow: /_partials*
Disallow: /pro-gallery-webapp/v1/galleries/*

User-agent: PetalBot
```

*Showing the first 10 lines of `robots.txt`; the full 14-line file is preserved alongside this report as `www-whiteroseclub-com-robots-txt.txt`.*

The robots.txt declares 4 disallow paths; all other paths are open to crawlers and machines. It references the sitemap, so a machine reading the file can locate the URL index directly.

### sitemap.xml

**Table 13**

*sitemap.xml*

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 45 entries | Present |
| `<lastmod>` | Yes | All identical |
| `<changefreq>` | No | Missing (Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents still use it to gauge re-crawl cadence) |
| `<priority>` | No | Absent (Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents can still use it as a relative-importance hint) |

**Sitemap grade:** Partial

The sitemap declares 45 URLs and grades Partial. Lastmod is present but identical across entries, so it reads as a single file-stamp rather than a per-URL change signal. The sitemap omits changefreq and priority. Google dropped both as ranking signals in 2017, but non-Google crawlers and AI agents still read changefreq as a re-crawl cadence hint and priority as a relative-importance signal, so adding them is a low-effort way to broaden machine compatibility.

The sitemap lists 45 URLs; 6 of the pages this audit reached are not among them. The unlisted pages: `/_files/ugd/2eb026_553b6ef0cb3444e68cd40dcaac007609.docx`, `/_files/ugd/b823dd_cd1783306265430287ef1ecb5acf453e.pdf`, `/_files/ugd/b823dd_cd566789c4b7461e944e21105a228816.pdf`, `/_files/ugd/b823dd_f3b66e8a04e147078edf3cde1cf875b7.pdf`, `/final-booking-entry`, `/members-area`. The full set is recorded in the `www-whiteroseclub-com-pages-not-in-sitemap.csv` sidecar alongside this report. Adding them to the sitemap lets search engines and machines discover all content.

The sitemap lists multiple URL variants-trailing-slash and hash-fragment forms-for the same canonical resource, such as https://www.whiteroseclub.com/llms.txt appearing twice. Machines that skip URL normalisation will fetch each variant separately, wasting token budget and risking contradictory or inflated findings; we recommend publishing one canonical URL per resource in sitemap.xml and adding a <link rel="canonical"> tag to each affected URL.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

The llms.txt carries a site description and a content-use policy, but lacks a page inventory; adding it would give machines a complete structured index. We also recommend serving llms.txt as an HTML page that wraps the plain-text content in a `<pre>` block, rather than the text/plain the llmstxt.org specification defines. Training crawlers such as Common Crawl archive only a small fraction of plain-text files but crawl HTML pages from the sitemap reliably, so the HTML wrapper gets the file into the corpus while the `<pre>` keeps it rendering as readable plain text. The technique, with the reasoning and working code, is at https://mx.allabout.network/blog/your-site-is-already-training-ai.html.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt on the audited host. Where llms.txt is the curated index, llms-full.txt concatenates the full content of every page into a single file: a convention made popular by Fern, Mintlify, and GitBook. Agents that consume it ingest the corpus in one fetch rather than crawling page-by-page, cutting token consumption by an order of magnitude. We recommend adding an llms-full.txt alongside llms.txt; the build can run from the same sitemap-driven generator that produces llms.txt and adds the page bodies inline.

Not found. A full content corpus at /llms-full.txt would let agents ingest the complete site in a single fetch. Without it, an agent that wants to index all content must crawl page by page.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 400). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

1 additional registered `/.well-known/` path were probed; none returned an identifiable discovery file. The per-path breakdown is preserved alongside this report as a sidecar JSON.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## AI-Content Marking Readiness

This section reports whether Whiteroseclub's site marks AI-generated or AI-manipulated content in a machine-readable way. Two frameworks define what that marking looks like: EU AI Act Article 50, which expects it from 2 August 2026, and the European Commission's voluntary Code of Practice on marking and labelling of AI-generated content, published 13 June 2026. The probe inspects the homepage for four markers an agent could read without a human in the loop, and records which are present.

<p><small><strong>Note:</strong> This section describes regulatory frameworks in general terms only. Nothing here is legal advice. Requirements vary by jurisdiction, organisation type, and use case. Consult qualified legal specialists for guidance specific to your situation.</small></p>

**Table 14**

*AI-Content Marking Readiness*

| Attribute | Value |
|-----------|-------|
| Origin | https://www.whiteroseclub.com |
| Reference | EU AI Act Article 50; European Commission Code of Practice on marking and labelling of AI-generated content (13 June 2026) |
| Readiness level | Level 0 (Unmarked) |
| Markers present | 0/4 |
| Verdict | unmarked |

### Markers

**Table 15**

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
- **No machine-readable authorship markers were found.** A machine reading this page cannot tell whether its content was generated by an AI tool or written by a person - absence of markers means undeclared, not "human." If this site's content is entirely human-authored, a positive declaration would make that explicit and provide a trust signal to regulators and AI citation engines. Options: add `MX provenanceOrigin: human` in page metadata, or apply IPTC Digital Source Type `humanCreated` to image assets. Either is better than silence.

A boundary this section keeps honest: a machine-authorship declaration (MX `provenanceOrigin`) states who or what authored the content; a content-authenticity watermark (C2PA, SynthID) proves a file is synthetic. They are complementary, and marking readiness here is a structural signal, not a certification that this site meets any regulation.

---

## Structured Data Inventory

**Table 16**

*Structured Data Inventory*

| Schema Type  | Pages | Mandatory fields present | Optional fields added | Notes                                    |
|--------------|-------|--------------------------|-----------------------|------------------------------------------|
| WebSite | 1 | 100% | 0% | All required fields present; 100% of optional fields missing |

**Structured Data Quality:** 5/100 - Schema.org data is absent or minimal; machines receive no structured facts about the site's entities.\
**Coverage:** 1 page with JSON-LD out of 10 total (10%)\
**Unique types:** 1

*Schema types are from Schema.org - a shared vocabulary machines use to read content without guessing. "Mandatory fields present" shows whether the required properties for that type are filled in. "Optional fields added" shows bonus properties that help machines understand the content more precisely. Higher is better on both.*

9 of 10 audited pages carry no Schema.org JSON-LD: `/visitorregistration`, `/supporting-documents`, `/new2naturism3`, `/members-data-update`, `/visitor-s-fees`, `/archive-photos` and 3 more. Adding JSON-LD to these pages brings them into the structured data coverage.

Across the 10 pages we audited, structured data is limited. Machines cannot reliably extract entity data from these pages. Adding Schema.org JSON-LD with required properties is the highest-impact improvement.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what Whiteroseclub earns in each.

**Table 17**

*SDQ Score Breakdown*

| Component                       | Earned | Max | Meaning                                                       |
|---------------------------------|--------|-----|---------------------------------------------------------------|
| Presence | 1 | 10 | schema.org JSON-LD is present on the page |
| Required property coverage | 3 | 25 | Every entity carries the properties its type requires |
| Recommended property coverage | 0 | 15 | Entities carry the properties their type recommends |
| Entity richness | 0 | 15 | Entities are described with enough properties to be useful |
| Cross-entity references | 0 | 15 | Entities reference each other (nested types and @id links) |
| Linked-data signals | 0 | 10 | Linked-data properties present (sameAs, mainEntityOfPage, isPartOf, about, mentions) |
| Vocabulary validity | 1 | 10 | Every @type is a valid Schema.org type |
| **Total** | **5** | **100** | |

Across the audited set, Structured Data and Discovery Readiness are the lowest-scoring components, indicating that machines receive minimal structured data signals from the site. This results in a schema maturity level of Decoration, reflecting limited governance and cross-entity linkage.

---

## Structured Data Findings

We identified 4 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

**Table 18**

*Structured Data Findings*

| Page | Type | Severity | Property | Why it matters |
|------|------|----------|----------|----------------|
| / | WebSite | recommended | image | Site has no logo / hero image declared in structured data |
| / | WebSite | recommended | datePublished | No site-level publish date for crawler context |
| / | WebSite | recommended | author | Site has no top-level author/owner declared |
| / | WebSite | recommended | publisher | Site has no top-level publisher declared |

**Severity legend** (the values in the *Severity* column above):

**Table 19**

*Structured Data Findings*

| Severity | Meaning |
|----------|---------|
| `required` | Schema.org spec requires this property for the type. Missing values break validation. |
| `recommended` | Schema.org strongly recommends this property. Missing values reduce richness. |
| `vocabulary` | The `@type` value (the JSON-LD class name an entity declares itself as) is not in the Schema.org vocabulary: typically a typo or an invented type. |

**Age requirement:** none declared. This page reads as aimed at a adult audience, yet its structured data carries no schema.org `typicalAgeRange` or `Audience` age (nor an `mx:intendedAgeRange`); declaring one lets a machine read the age band rather than infer it.

---

## Marker Reachability

**Table 20**

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
| Skip link (accessibility) | Not present | Not present | n/a | n/a | n/a |

All detected markers are present in the served HTML on the pages we audited. Server-side and browser-based agents see the same signals on the sampled pages.

---

## Schema Maturity Level

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work. Maturity is a structural classification: it depends on what the markup carries (typed blocks, required properties, cross-references, external identifiers), not on the SDQ score the markup happens to earn. A page can sit at Level 1 with a high SDQ score and at Level 3 with a moderate one. Score and level are reported separately.

**Table 21**

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

**Table 22**

*5-Stage MX Journey*

| Stage | Name              | Status      | Score | Key Metric                                        |
|-------|-------------------|-------------|-------|---------------------------------------------------|
| 1 | Discovery | Pass | 89 | Crawlable with semantic HTML |
| 2 | Citation | Fail | 33 | No Schema.org structured data |
| 3 | Search & Compare | Site type does not require | -- | No comparison content detected |
| 4 | Service Inquiry Readiness | Site type does not require | -- | No pricing content detected |
| 5 | Transaction (N/A for services) | Site type does not require | -- | No transaction forms detected |

*Each stage carries its own pass threshold, so Status and Score are not comparable across rows: a score that passes one stage can fall short on another with a stricter bar.*

Stage 2 (Citation) is the weakest link in the agent journey. Because each stage depends on the previous one, this gap affects all downstream stages. Addressing No Schema.org structured data is the highest-priority improvement.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, condensing by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Fail · 10/10
  - *Means:* 10 page(s) flag for truncation risk; 10 of them exceed the 250 KB hard ceiling, the rest place main content too far into the document. Agents with limited fetch windows may stop reading before reaching the main content.
  - *Data:* Largest page: 1439 KB ([/members-data-update](https://www.whiteroseclub.com/members-data-update)). Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. See www-whiteroseclub-com-pipeline-truncation-risk-pages.csv (10 pages).
- **SPA Shell** - Pass · 0/10
- **Soft 404** - Pass · 0/10
- **Boilerplate Burial** - Fail · 10/10
  - *Means:* Navigation, header, and footer boilerplate outweigh main content on some pages. Small-context agents spend their budget on scaffolding rather than prose.
  - *Data:* Highest boilerplate-to-content ratio: 1.13. Threshold: < 10 (and < 80 KB of inline head bytes). See www-whiteroseclub-com-pipeline-boilerplate-burial-pages.csv (10 pages).
- **Tabbed Disclosure** - Pass · 0/10
- **Delayed Content Start** - Pass · N/A
- **Broken Code Fences** - Pass · 0/10
- **HTTP Content Negotiation (Vary)** - Pass · 0/10
- **Cross-Host Redirect** - Pass · 0/10
- **Generic Headings** - Pass · 0/10
- **Body Content Ratio** - Fail · N/A
  - *Means:* Prose content averages only 5% of served bytes. Scripts, styles, and images dominate; agents get little signal per byte.
  - *Data:* Average: 5%. Threshold: 30%.
- **Inline Tag Bloat** - Fail · 10/10
  - *Means:* 10 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches.
  - *Data:* 199 element(s) > 500 bytes. Largest single-page inline CSS block: 720114 B. Largest single-page inline JS block: 142192 B. See www-whiteroseclub-com-pipeline-inline-tag-bloat-pages.csv (10 pages).
- **Head Weight** - Pass · N/A

**Pipeline Survivability score:** 71/100
Most pages reach agents intact; a small number have size or structure issues worth addressing.

Truncation Risk is flagged on all ten audited pages, meaning machines cannot fully parse the page content and may miss key information. Boilerplate Burial and Inline Tag Bloat also appear but affect fewer pages; these issues cause unnecessary load and can slow machine processing. Addressing Truncation Risk by ensuring complete HTML output will give machines full access to the content and has the greatest impact on overall resilience.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check set, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

**Table 23**

*Div Soup: naked containers without semantic mapping*

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Served and rendered | 7/100 (high bare-div density) | 219 bare divs (89% of containers, depth 8) | `div` (268), `div.hAdMV6` (64), `div.s__5mJsIL.oKPjoIj---errorAppearance-8-TextOnly` (44), `div.GLWhGq` (25), `div.LNYVZi.ayCf9D` (24) |

**Worst page (served and rendered are identical):** [/members-data-update](https://www.whiteroseclub.com/members-data-update)

We observed that the worst-page at https://www.whiteroseclub.com/members-data-update contains 219 of 246 divs (89 %) that lack semantic tags, so machines lose structural context and must rely on positional inference to determine meaning; these figures refer to the single worst page in the audited set.  
We see this soup is characterised by deep chains of bare divs-up to eight levels deep-and a high overall ratio, signalling that the source pipeline likely relies on drag-and-drop builders or untyped component frameworks that inject many generic containers.  
The cheapest first move we recommend is to wrap the obvious landmarks (header, nav, main, footer, aside) with their semantic elements and give remaining divs meaningful class names; this reduces the bare-div ratio without restructuring the layout.

---

## Security Headers

**Table 24**

*Security Headers*

| Header                          | Status   | Purpose                                          |
|---------------------------------|----------|--------------------------------------------------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

2 of the five standard security headers are absent on every audited response: Content-Security-Policy (CSP), X-Frame-Options. Adding them at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 12 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/member-profiles_p_first-chunk-sitemap.xml`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/llms.txt`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/visitorregistration`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/supporting-documents`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/new2naturism3`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/members-data-update`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/visitor-s-fees`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/archive-photos`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/visiting-us-booking`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/home`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes
- **`/events-and-gallery`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame No · X-Content-Type Yes

HTTPS: 12/12 | HSTS: 12/12 | CSP: 0/12 | X-Frame-Options: 0/12 | X-Content-Type-Options: 12/12

---

## Data Quality and Consistency

### Cross-Page Consistency

**Table 25**

*Cross-Page Consistency*

| Pattern                          | Coverage | Pages missing it   |
|----------------------------------|----------|--------------------|
| Schema.org JSON-LD | 10% | 9 |
| MX governance tags | 0% | 10 |
| Open Graph tags | 100% |  -  |
| Twitter Card tags | 100% |  -  |
| Skip link | 0% | 9 |
| llms.txt link tag | 0% | 9 |
| Canonical URL | 100% |  -  |
| Exactly 1 H1 | 20% | 8 |
| Code examples present | 0% | 10 |
| Self-contained sections | 100% |  -  |
| Error/troubleshooting docs | 0% | 10 |
| Lighthouse heading compliance | 10% | 9 |

**Overall Consistency:** 41%
Fewer than half the tracked metadata patterns apply across all pages; agents reading different pages get different signal quality.

Some pages in the 10-page sample are missing metadata patterns that others carry. Machines hitting different pages get different quality data. The Missing Pages column shows where to focus on the sampled pages.


**Table 26**

*Content Consistency*

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Brand-name parity | Pass | Brand name appears consistently across all 10 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 10-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

We found that across the audited set brand-name parity, canonical URL duplicates, meta description length, and cross-page entity spread are inconsistent; aligning these elements will improve consistency.

---

## Inline Code Duplicates

We found 56 identical inline fragment(s) repeated across multiple pages, totalling 2263 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

**Table 27**

*Inline Code Duplicates*

| Type | Bytes per fragment | Appears on N pages | Preview                                                          |
|------|-------------------:|-------------------:|------------------------------------------------------------------|
| js | 55220 | 10 | "use strict";(self.webpackJsonp__wix_thunderbolt_app=self.we |
| css | 22020 | 10 | .ZhVEJq{touch-action:manipulation}.twJknM{text-align:initial |
| css | 14216 | 10 | .EtmdIW{cursor:pointer}.XWeqiF{opacity:0}.bWoigz{opacity:1;t |
| js | 10127 | 10 | "use strict";(self.webpackJsonp__wix_thunderbolt_app=self.we |
| css | 9424 | 10 | div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote |
| js | 7094 | 10 | (()=>{"use strict";let e,t,r,o;var n={},i={};function l(e){v |
| js | 6849 | 10 | (()=>{"use strict";var e={},t={};function r(o){var n=t[o];if |
| js | 6512 | 10 | (()=>{"use strict";var e={},r={};function t(i){var n=r[i];if |
| css | 6174 | 10 | .Qh0lWW{width:100%;height:100%;display:block}.Qh0lWW img{max |
| js | 6068 | 10 | !function(n){var r={},t=function(){return t=Object.assign\|\|f |

*Showing the top 10 of 56 duplicate fragments by occurrence count. The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `www-whiteroseclub-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---


5 PDF document(s) were identified by the audit: those linked from the crawled pages combined with those declared in the sitemap.

**Scope note:** this inventory covers PDFs reachable from the crawled pages plus any `.pdf` URLs the sitemap declares. PDFs behind login forms, linked only from uncrawled pages, stored in unlinked directories, or hosted on third-party domains fall outside this boundary.

### Documents

- https://b823ddca-beec-4bc9-8183-9ff30295bbcf.usrfiles.com/ugd/b823dd_cd1783306265430287ef1ecb5acf453e.pdf
  Source: https://www.whiteroseclub.com/members-data-update, HTML alternative: No
- https://docs.wixstatic.com/ugd/2eb026_83e714b630a94b5482bfd6dbab76b949.pdf
  Source: https://www.whiteroseclub.com/visitor-s-fees, HTML alternative: Yes
- https://www.whiteroseclub.com/_files/ugd/b823dd_cd1783306265430287ef1ecb5acf453e.pdf
  Source: https://www.whiteroseclub.com/members-data-update, HTML alternative: Yes
- https://www.whiteroseclub.com/_files/ugd/b823dd_cd566789c4b7461e944e21105a228816.pdf
  Source: https://www.whiteroseclub.com/visitorregistration, HTML alternative: Yes
- https://www.whiteroseclub.com/_files/ugd/b823dd_f3b66e8a04e147078edf3cde1cf875b7.pdf
  Source: https://www.whiteroseclub.com/members-data-update, HTML alternative: Yes

### Accessibility and legal risk

We checked 1 of 5 PDF document(s). All pass the structural accessibility test (tagged PDF with language declared). Under the European Accessibility Act (in force 28 June 2025) and the UK Equality Act 2010, inaccessible service documents carry complaint and enforcement risk. Current documents meet the structural baseline.

**Table 28**

*Accessibility and legal risk*

| Document | What it is | Structural pass | Language | Alt text | Form labels | Risk |
|----------|-----------|-----------------|----------|----------|-------------|------|
| ...iles/ugd/b823dd_cd1783306265430287ef1ecb5acf453e.pdf | Document | Pass | Not checked | Not checked | Not checked | ? |

**What to do:** No action required. Current documents meet the accessibility baseline. Continue to test new documents before publishing.

### Full PDF review

For a complete picture, a full PDF review checks every document in the inventory with the same checks plus manual screen-reader testing. It returns a per-document verdict (tagged structure, language, alt text on images, heading navigation, form field labels) with remediation notes and a per-document effort estimate.

Accessibility legislation in major markets (the EAA, Section 508, UK Equality Act) treats ISO 14289-1 (PDF/UA) structural conformance as the baseline for in-scope public documents. Most structural issues are cheapest to fix at PDF generation time.

---

## Content Uniqueness

5 of 10 pages carry distinctive content. 5 pages have content that appears on multiple pages, giving machines redundant information per page.

**Table 29**

*Content Uniqueness*

| Page | Unique content | Band |
|------|---------------|------|
| `/supporting-documents` | 50% | Significant Duplication |
| `/archive-photos` | 50% | Significant Duplication |
| `/` | 50% | Significant Duplication |
| `/events-and-gallery` | 50% | Significant Duplication |
| `/home` | 75% | Moderate Duplication |
| `/visitor-s-fees` | 80% | Expected Boilerplate |
| `/visitorregistration` | 89% | Expected Boilerplate |

**Shared prose found on multiple pages:** An agent reading the pages below sees this content repeated.
- "top of page white rose club naturist tranquility in the heart of yorkshire book ..." - appears on 10 of 10 pages (100%)
The remaining 3 pages all scored Distinctive or Expected Boilerplate.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 76 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: declaring the intended adult audience in machine-readable metadata (the audit had to infer it) and making any age-assurance and consent steps machine-detectable, alongside Structured Data improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

**Table 30**

*What's Next*

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4, P5, P6, P7, P8 (Compliance Risk) | Priority 1, 2, 3, 4, 5, 6, 7, 8 resolved: WCAG 2.1 AA accessibility compliance restored |
| Full Implementation | P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14 (P1-P14) | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | The full machine-readable estate, beyond the web pages |
| Data-Sovereign Option | Regulated industries | Run the full audit pipeline on your own infrastructure - no client content leaves your network |

This audit is a starting point. The outcome we work toward is a site any machine can read, trust, and act on, and a dated, attested record you can show to a regulator, a partner, or an acquirer on request. Reaching it (structured data, discovery files, accessibility, governance metadata, and re-audit on a schedule you set) is available as a managed service. We also run training sessions that give development teams the MX vocabulary and implementation patterns directly, so the gap between findings and fixes is weeks, not quarters. To take any of it further, contact CogNovaMX Ltd at <info@cognovamx.com>.

---


### Audit Scores

The site serves an empty HTML shell to server-side agents. The "Rendering" column shows whether each score was measured from the served HTML (what agents actually get) or the rendered HTML (what agents would get with SSR).

**Table 31**

*Audit Scores*

| Dimension | Score | Rendering | Notes |
|-----------|-------|-----------|-------|
| Served-HTML Structure | 89/100 | Served | Structural markup an agent parses before JS |
| Accessibility | 94/100 | Rendered | Pa11y runs in a browser |
| SEO (all pages) | 77/100 | Rendered | Google renders JS; server-side agents do not |
| SEO (content pages) | 75/100 | Rendered |  |
| MX Stack Completeness | 54/100 | Rendered |  |
| Structured Data Quality | 5/100 | Rendered | JSON-LD in served head  -  valid for all agents |
| Discovery Readiness | 12/100 | Mixed | robots.txt/sitemap independent of rendering. Machines have almost no structured context about what the site covers or how to use it. |
| Heading Quality | 57/100 | Rendered | Page structure is mostly navigable; some heading hierarchies need tightening. |
| Agent Readability | 36/100 | Rendered |  |
| Pipeline Survivability | 71/100 | Rendered |  |
| Cross-Page Consistency | 41% | Rendered | Fewer than half the tracked metadata patterns apply across all pages; agents reading different pages get different signal quality. |

Server-side agents see only the served HTML. The Served-HTML Structure score reflects their experience. All other scores reflect what the site achieves after JavaScript renders.

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

- **`/visitorregistration`**: SEO 73 · A11y 75 · Back 60 · Served 89 · Rendered 95
- **`/supporting-documents`**: SEO 64 · A11y 100 · Back 60 · Served 98 · Rendered 100
- **`/new2naturism3`**: SEO 77 · A11y 100 · Back 60 · Served 90 · Rendered 97
- **`/members-data-update`**: SEO 74 · A11y 80 · Back 60 · Served 59 · Rendered 66
- **`/visitor-s-fees`**: SEO 73 · A11y 100 · Back 70 · Served 100 · Rendered 100
- **`/archive-photos`**: SEO 76 · A11y 95 · Back 60 · Served 98 · Rendered 100
- **`/ (nav)`**: SEO 88 · A11y 100 · Back 90 · Served 100 · Rendered 100
- **`/visiting-us-booking`**: SEO 81 · A11y 95 · Back 60 · Served 96 · Rendered 100
- **`/home`**: SEO 79 · A11y 100 · Back 60 · Served 91 · Rendered 98
- **`/events-and-gallery`**: SEO 82 · A11y 95 · Back 60 · Served 99 · Rendered 100

*Backend: score for HTML served without JavaScript. Served: AI suitability from served HTML. Rendered: AI suitability after JavaScript.*

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 75/100.

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. External links are not tracked; this inventory covers same-host `<a href>` links only. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

Per page, internal links range from 8 to 20, averaging 11 across 10 pages. That is sparser than typical (benchmark median 20 per page).

**Table 32**

*Appendix B: Link Inventory*

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 106 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |

At 11 internal links per page on average, the internal navigation graph sits below the typical range for sites of this type (benchmark median 20). No hash-fragment links were found - the site navigates entirely by full-page URL, which is standard for content and service sites. No inline mailto or tel links appear in page content; direct contact routes through a form.

---

## Appendix C: Image Efficiency

We reviewed 53 images across the audited set: 14 PNG, 38 JPEG and 1 in other or unidentified formats. 36 of 53 (67.9%) carry alt text, leaving 17 without it. Each missing alt attribute is a place where a screen-reader user or a machine reading the page gets no description of what the image shows.

On loading strategy, 0 images are marked `loading="lazy"` and 0 `loading="eager"`, while 53 carry no loading attribute at all. No attribute is not the same as eager: the browser decides for itself when to fetch, which removes the explicit control that lazy and eager give you. Setting an explicit attribute on those images makes the fetch behaviour predictable for browsers and machines alike.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.x (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: **Shopify** (high confidence  -  multiple fingerprint signals). The main audit uses Shopify-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** **React**  -  JS framework; **Angular** (low confidence)  -  JS framework. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from the audited pages. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 10 pages examined | Platform: Shopify | Analysis method: Hybrid (automated + manual verification) | robots.txt: Present (14 directives)

**Measurement completeness:** Every probe completed during this audit, with no network errors or timeouts. The findings below rest on a full data collection.

**What comes next.** This report is the foundation, not the finish line. Implementing the recommendations requires the technical knowledge that produced them; we bring that forward. Our implementation engagements begin where this audit ends.

We work toward a site - and an estate of documents beyond it - that any machine can read, trust, and act on. It holds its own dated, attested record for anyone who needs to verify that claim. Reaching it - structured data, discovery files, accessibility, governance metadata, and re-audit on a regular schedule - is available as a managed service or as licensed tooling your team runs independently. We also run training sessions that give development teams the MX vocabulary and implementation patterns directly. To take any of it further, contact CogNovaMX Ltd at info@cognovamx.com.

---

## Appendix E: Markdown Content Negotiation

**Table 33**

*Appendix E: Markdown Content Negotiation*

| Check | Result |
|-------|--------|
| URL probed | https://www.whiteroseclub.com |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=UTF-8 |
| Markdown served | No  -  server returned HTML regardless of Accept header |

The site returns standard HTML to all requests, including those carrying `Accept: text/markdown`. Markdown content negotiation is a feature that lets a server deliver a lighter, markup-free page to agents that request it - reducing the parsing load on the agent side. It is an optional enhancement with no compliance obligations attached. One consideration before enabling it: Markdown conversion strips `<head>` metadata, governance fields, and discovery signals, so any page carrying MX fields, canonical URIs, or structured data in the document head would lose those signals for agents that receive the Markdown version. Whether the reduction in parsing cost outweighs that loss is a publisher decision; this probe records the current state.

---

\clearpage

## Further Reading

The reference material cited in this report. Click the link on screen or scan the QR code on paper: both encode the same URL.

**Table 34**

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

---

\clearpage

## This Report's Own Evidence Chain

MX is to machines what UX is to users: it asks not whether a human can read this report, but whether a machine can read it, verify it, and act on it. A standard is credible only when we run on it ourselves, so we built this report to the standard it measures.

This report carries its own provenance. Every step that produced it is recorded in two adjacent JSON sidecars - one AI, one deterministic - and the full evidence chain travels inside the PDF's XMP metadata: extract it with `exiftool -b -XMP-mx:ProvenanceAiPayload www-whiteroseclub-com-report.pdf | jq .`. The PDF is a tagged ISO 14289-1 (PDF/UA-1) Level 2 document with a complete reading-order structure tree. What this audit measures on a client's behalf, this deliverable meets.

Machine-readable content is visible to agents and validators. Machine-trustworthy content adds a provenance layer - a dated, attested record that names who published it and under what rubric. Readable is what MX makes content; the provenance layer is what makes it trustworthy. The two do different jobs, and this report carries both. It is an example of what that looks like in practice.

\clearpage

## Practice What We Preach: This Audit's Own Evidence Chain

A standard is credible only when we run on it ourselves. We hold this audit deliverable to the same MX standards we apply to the audited site; consider this working proof of the practice it recommends. Every consequential step that produced this report (LLM-driven prose passes, deterministic gate verdicts, multi-agent attribution probes, repair iterations) is recorded in two adjacent JSON sidecars next to this PDF.

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the output it produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the operator. This PDF holds the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `*.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain is at `*.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload www-whiteroseclub-com-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output includes a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did. We prefer determinism to inference: explicit over inferred, recorded over remembered, a result you can reproduce over one we could only explain. Where a check can be made by a rule, a rule makes it, and the rule leaves a record rather than an opinion. That is why this chain shows what we did instead of asking you to trust a summary of it.

**Verify this report yourself - no internal access required.** Three commands, open tools, no login:

1. Extract the full AI evidence chain from the PDF: `exiftool -b -XMP-mx:ProvenanceAiPayload www-whiteroseclub-com-report.pdf | jq .`
2. Confirm the operator identity: the JSON contains `operator.name`, `operator.email`, and `operator.organisation` naming the accountable individual.
3. Cross-reference the sidecar: `diff <(jq .auditId www-whiteroseclub-com-report.provenance.ai.json) <(exiftool -b -XMP-mx:ProvenanceAiPayload www-whiteroseclub-com-report.pdf | jq .auditId)` - both should return the same `auditId`.

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

**Date:** 1 July 2026\
(c) 2026 CogNovaMX Ltd. All rights reserved.

*This is a sample run over a subset of the site. CogNovaMX Ltd can scope a full-estate audit.*

