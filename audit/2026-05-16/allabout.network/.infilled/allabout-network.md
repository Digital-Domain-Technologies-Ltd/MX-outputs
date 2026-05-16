---
title: "Allabout: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-16"
modified: "2026-05-16"
client: "Allabout"
clientSlug: "allabout-network"
clientUrl: "https://allabout.network"
reportId: "allabout-network-WEB-AUDIT-20260516"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-16"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Allabout"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 97
accessibilityScore: 69
seoScore: 77
llmSuitabilityScore: 98
totalIssues: 106
pagesAudited: 7
version: "1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Allabout. Focus on the highest-leverage MX opportunities surfaced by the audit."
---

# Allabout: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 16 May 2026\
**Report ID:** allabout-network-WEB-AUDIT-20260516

---

## About This Report

We audited 7 pages across allabout.network's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising the report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what the audit looks for.

The scoring criteria follow published MX standards and proposed specifications maintained at [`https://tg.community`](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What this audit covers: and what MX covers.** This audit checks the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. Our recommendation diverges from the specification: we recommend serving llms.txt as `text/html`, wrapping the raw text in a minimal HTML document with the content inside a `<pre>` block and returning `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, the report notes the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **97**/100 | `#################-` |
| Accessibility | **69**/100 | `############------` |
| SEO | **77**/100 | `##############----` |
| Machine Suitability | **98**/100 | `##################` |
| MX Stack | **52**/100 | `#########---------` |
| Agent Readability | **60**/100 | `###########-------` |
| Pipeline Survivability | **98**/100 | `##################` |

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 2-3 paragraphs opening the Executive Summary in a warm, professional consultant voice.
PATTERN (follow strictly):
- Paragraph 1: Affirm what the site does well for HUMAN visitors. Reference specific design, content, or brand strengths. Lead with the human. Use the "Strongest human-experience dimension" fact as the anchor ("SEO foundations are solid", "performance is excellent"). Do NOT anchor on machine-experience dimensions (AI Suitability, Discovery Readiness, Structured Data Quality) — those belong in Paragraph 2.
- Paragraph 2: Introduce the machine-experience OPPORTUNITY. Frame it as the next natural step, not a failing. Use the phrase "the headline opportunity is..." or "the opportunity we want to draw attention to is..." Cite the specific machine dimension that most moves the needle. If there are WCAG AA issues, name accessibility as a Priority 1 compliance item here, before the MX opportunity.
- Optional Paragraph 3: If there is a served-vs-rendered gap or a platform constraint, name it — and note that Schema.org JSON-LD is the highest-leverage asset that every agent can read regardless of rendering.
SCOPE: 7 pages were audited. Scope all claims to "the audited set" — do not say "site-wide" unless cross-page consistency is explicitly confirmed in the facts.
ACCESSIBILITY NOTE: There are 106 WCAG AA issues. If Accessibility is not grade A, do NOT call it the "strongest" dimension in Paragraph 1. Acknowledge the accessibility opportunity in Paragraph 2 as a Priority 1 compliance item before the MX opportunity.
BANNED WORDS: "failing", "failure", "gap" (as verdict), "weakness", "broken", "poor", "deficient", "inadequate", "lacking" (as verdict), "site-wide" (unless facts explicitly confirm multi-page consistency).
PREFERRED WORDS: "opportunity", "headline opportunity", "next step", "room to strengthen", "foundation", "the chance to", "solid", "the groundwork is there".
TONE: "You did good for humans — now build for machines." Never condescending. Never a list of failings. Every metric is framed as a relative position that a concrete improvement can lift.
VOICE: First-person plural ("we audited", "we found", "we recommend"). NEVER use singular "I" — the consultancy speaks as a team.

Facts (do not change any number, percentage, URL, page count, or name):
- Platform: Cloudflare Pages
- Pages audited: 7
- SEO: 77/100 (Excellent)
- Accessibility: 106 critical WCAG AA issues — 4 of these trace to 2 recurring template patterns (single theme edit per pattern fixes all instances)
- AI Suitability (served): 98/100
- Structured Data Quality: 47/100
- Discovery Readiness: 30/100
- Catalogue Visibility: 0/100
- MX Readiness Level: 1 (Basic)
- Schema Maturity: Level 1 (Decoration)
- Strongest human-experience dimension: performance
- Lowest machine-readiness score: 0/100
-->

> 

\clearpage

## Balanced Scorecard

### Human Experience

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 1 sentence introducing the Human Experience subtable.

PATTERN: State how the site performs for human visitors. If scores are strong, affirm it ("the site delivers a strong experience for human visitors"). If one dimension is weaker, name it as the area for improvement without dwelling.

SCOPE: These scores cover the audited pages only — do NOT write "site-wide".

TONE: Factual, warm, peer-to-peer.

Facts (do not change any number, percentage, URL, page count, or name):
- Pages audited: 7
- Performance: 402ms avg (Excellent)
- Accessibility: 69/100 (Good)
- SEO: 77/100 (Excellent)
- Accessibility issues: 106 (4 trace to 2 template patterns)
-->

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Needs Improvement | D |
| Trust and Credibility | Excellent | A |

### Machine Experience

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 1 sentence introducing the Machine Experience subtable.

PATTERN: State what AI agents can do with the site today. Frame scores as capabilities ("agents can discover and cite", "agents can read but not transact"), not as deficiencies.

SCOPE: These scores cover the audited pages only — do NOT write "site-wide".

TONE: Factual, warm, peer-to-peer.

Facts (do not change any number, percentage, URL, page count, or name):
- Pages audited: 7
- Discovery Readiness: 30/100
- Structured Data Quality: 47/100
- Metadata Stack Completeness: 52/100
- Pipeline Survivability: 98/100
-->

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 30/100 | Could Be Better | C |
| Structured Data Quality | 47/100 | Could Be Better | C |
| MX Stack Completeness | 52/100 | Good | B |
| Pipeline Survivability | 98/100 | Excellent | A |

---

## Reading the Report: Two Budget Lenses

The findings below are tagged with one of three buckets so different budget owners can navigate to the work that matters to them:

- **Compliance Risk**: accessibility (WCAG 2.1 AA), duplicate IDs, forms, and semantic structure. These are inclusion and legal-exposure issues; the budget owner is typically legal, HR, or an accessibility lead.
- **Cross-cutting Foundations**: performance and SEO. These affect both human visitors and AI agents; the budget owner is usually digital operations or a foundation engineering team.
- **AI Opportunity**: discovery readiness, metadata stack, llms.txt, structured data, agent cards, and pipeline survivability. These determine whether the site lands in agent answers; the budget owner is typically the CMO or head of digital.

Every priority block in the Findings section carries a **Bucket:** label matching one of the three above. The at-a-glance table sorts findings into bucket order so each budget owner can read straight to their own list.

---

## MX Readiness Level

|  | Level | Name | Publisher Capability | Agent Outcome |  |
|---|-------|------|---------------------|---------------|---|
|  | 0 | Not Ready | Auto-generated boilerplate | Agents guess, hallucinate |  |
| **→** | 1 | Basic | Deliberate metadata, publisher identified | Agents can discover | **←** |
|  | 2 | Structured | Full MX fields, governance | Agents can cite and attribute |  |
|  | 3 | Signed | Cryptographic verification | Agents can compare and recommend |  |
|  | 4 | Registered | Registry, SLA, aliveness | Agents can transact |  |
|  | 5 | Audited | Third-party verified | Agents can guarantee accuracy |  |

**Current Level:** 1: Basic

**Evidence:** MSC 52/100 | SDQ 47/100 | Discovery 30/100 | Consistency 53%

**To reach the next level:** Add full MX fields and governance metadata. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 1-2 sentences introducing the "What is Working Well" table.

PATTERN: Affirm that the site has genuine strengths. Frame them as "a solid foundation" or "the groundwork for" the improvements that come next. Never say "despite X" or "even though Y".

SCOPE: Affirm only what the audited pages show — do NOT write "site-wide".

TONE: Warm, confident, peer-to-peer. The reader should feel recognised for what they have built.

Facts (do not change any number, percentage, URL, page count, or name):
- Pages audited: 7
- SEO (all pages): 77/100
- SEO (content pages only): 76/100
- Accessibility: 69/100, 106 issues — 4 of these trace to 2 template-level patterns
- Security headers: 4/5 present (HTTPS, HSTS, X-Frame-Options, X-Content-Type-Options); 0 of 7 audited URLs carry all five
- Structured Data Quality: 47/100
- Consistency: 53%
-->

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent — 402ms average load time |
| SEO (content pages) | 76 | Excellent — titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | HTTPS, HSTS, X-Frame-Options, X-Content-Type-Options — 1 header absent |
| Structured Data | 47 | Could Be Better — JSON-LD on every page with valid Schema.org vocabulary |
| Heading Quality | 78 | Excellent — single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 53% | 53% — same metadata patterns across every page |
| Agent access | 6/6 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Body content ratio averages 67%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 1-2 sentences introducing the At a Glance findings table.

PATTERN: Describe the findings as opportunities prioritised by impact, not as a list of problems. State what the priority order was based on (e.g. "commerce schema gaps lead because they directly affect shopping agents", "discovery gaps lead because they block everything downstream").

BANNED: "issues", "problems", "failings", "deficiencies" as headline framing. These words can appear in individual finding titles where technically necessary, but not in the intro sentence.
PREFERRED: "opportunities", "areas to strengthen", "findings", "prioritised by impact".

Facts (do not change any number, percentage, URL, page count, or name):
- Pages audited: 7
- Structured Data Quality: 47/100
- Catalogue Visibility: 0/100
- Metadata Stack Completeness: 52/100
- Discovery Readiness: 30/100
-->

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Render the at-a-glance findings table. One row per genuine finding identified by audit-scores + audit-discovery. Order by regulatory exposure first, then by reach (number of pages affected).

HEADINGS: Do NOT use any H1 (# heading) in your output: the document already has a title H1. Use ## or lower if any heading is needed.

Columns: # | Finding | Bucket | Priority | Effort | Impact

- Finding: a concise title: what is wrong, state the metric, name the standard if applicable. No HTML code blocks. No implementation tutorials.
- Bucket: one of `Compliance Risk` (accessibility, WCAG, duplicate IDs, forms, semantic structure) / `Cross-cutting` (performance, SEO foundations) / `AI Opportunity` (discovery, metadata, llms.txt, schema, agent cards, pipeline survivability). Pick the dominant lens: a finding belongs in exactly one bucket. This column tells the procurement reader which budget envelope the fix belongs in (legal/HR/accessibility for Compliance, growth/digital for AI Opportunity, foundations for Cross-cutting).
- Priority: High | Medium | Low (regulatory findings always High).
- Effort: Low | Medium | High band, no time estimates.
- Impact: one short clause naming who is affected. IMPORTANT: never write "cannot": agents vary in capability and heuristics. Use hedged language: "may miss", "risk missing", "might not", "are less likely to", "reduces agent confidence".

If the audit produced no findings, write "The audit produced no priority findings on this surface." instead of an empty table.

Sort the at-a-glance table by bucket in the order: `Compliance Risk` first (legal exposure leads), then `Cross-cutting` (foundations), then `AI Opportunity` (growth). Within each bucket, sort by Priority (High > Medium > Low).

After the at-a-glance table, render one Priority N: <Title> block per row in the table. Title format: `**Priority N: <Title>**` on a single line, with the title using only commas, colons, or parentheses. Never use an em-dash in the title; the em-dash separator `Title — WCAG X.Y.Z` is a tone violation. When citing a WCAG criterion or numeric anchor in the title, use a comma or parenthesis: `Duplicate ID Attributes, WCAG 4.1.1` or `Semantic Structure 20/100 (573 Bare Divs out of 867 Total Elements)`. Each Priority block has exactly four labelled fields: **Bucket**, **Finding**, **What to change and why**, **Effort**. The Bucket value matches the table row. The "What to change and why" field is 2-4 bulleted concrete fixes, each with the WHY (which metric moves, which agent behaviour unlocks, which Core Web Vital improves, which WCAG criterion is addressed): developers know HTML; what they need from this report is the reasoning behind the fix.

For any WCAG/accessibility Priority block: use ONLY the Pa11y findings listed in  Of these, 4 (4%) trace to 2 recurring template-level patterns — a single theme edit per pattern resolves all instances site-wide.

Pa11y findings for this audit (use ONLY these for specific recommendations):
- **WCAG 1.4.3** — This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.46:1. Recommendation:  change text colour to #004fc2. | selector: `html > body > main > div:nth-child(2) > div > div > div > p:…` | 2 instances on 2 pages | affects: low-vision users
- **WCAG 1.4.3** — This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.46:1. Recommendation:  change text colour to #004fc2. | selector: `html > body > main > div:nth-child(2) > div > div > div > p:…` | 2 instances on 2 pages | affects: low-vision users
- **WCAG 1.3.1** — Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags. | selector: `html > body > main > div:nth-child(1) > div > h2:nth-child(5…` | 1 instance on 1 page | affects: screen reader users
- **WCAG 1.4.3** — This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.19:1. Recommendation:  change text colour to #101010. | selector: `html > body > main > div:nth-child(1) > div:nth-child(4) > d…` | 1 instance on 1 page | affects: low-vision users
- **WCAG 1.4.3** — This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.29:1. Recommendation:  change background to #3177c9. | selector: `html > body > main > div:nth-child(1) > div:nth-child(4) > d…` | 1 instance on 1 page | affects: low-vision users below for specific recommendations. Name each finding by its WCAG criterion number and selector. Do NOT invent findings (e.g. keyboard-navigation or focus-order issues) not listed in the Pa11y data below.

Div Soup (Semantic Structure): rendered score 40/100, band high. When the rendered score is below 70, include this as a numbered Priority row. The finding title should name the score and ratio (available from 12 bare divs out of 18 total). Do NOT include it when the score is 70 or above.

Separate Priority blocks with `---`.

Pa11y data for this audit:
 Of these, 4 (4%) trace to 2 recurring template-level patterns — a single theme edit per pattern resolves all instances site-wide.

Pa11y findings for this audit (use ONLY these for specific recommendations):
- **WCAG 1.4.3** — This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.46:1. Recommendation:  change text colour to #004fc2. | selector: `html > body > main > div:nth-child(2) > div > div > div > p:…` | 2 instances on 2 pages | affects: low-vision users
- **WCAG 1.4.3** — This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.46:1. Recommendation:  change text colour to #004fc2. | selector: `html > body > main > div:nth-child(2) > div > div > div > p:…` | 2 instances on 2 pages | affects: low-vision users
- **WCAG 1.3.1** — Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags. | selector: `html > body > main > div:nth-child(1) > div > h2:nth-child(5…` | 1 instance on 1 page | affects: screen reader users
- **WCAG 1.4.3** — This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.19:1. Recommendation:  change text colour to #101010. | selector: `html > body > main > div:nth-child(1) > div:nth-child(4) > d…` | 1 instance on 1 page | affects: low-vision users
- **WCAG 1.4.3** — This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.29:1. Recommendation:  change background to #3177c9. | selector: `html > body > main > div:nth-child(1) > div:nth-child(4) > d…` | 1 instance on 1 page | affects: low-vision users

Facts (do not change any number, percentage, URL, page count, or name):
- Pages audited: 7 — scope all Priority descriptions to "the audited page" (singular) or "the audited set" (plural); do NOT say "site-wide" or "across the site"
- Discovery Readiness: 30/100 (Could Be Better)
- Structured Data Quality: 47/100 (Could Be Better)
- Metadata Stack Completeness: 52/100 (Good)
- Accessibility: 69/100 (Good) — 106 issues — 4 trace to 2 template pattern(s)
- SEO: 77/100 (Excellent)
- Security headers: 4/5 present (HTTPS, HSTS, X-Frame-Options, X-Content-Type-Options); 0 of 7 audited URLs carry all five
- Heading quality: 78/100
- Pipeline Survivability: 98/100
- Served HTML: 98/100, Rendered HTML: n/a/100
- Performance: 402ms average load time

PRIORITY-BLOCK CONTRACT — non-negotiable for Gate 0e (section completeness):
- After the at-a-glance table, render one block per row.
- Every block MUST open with a bold heading line of the form `**Priority N: <Title>**` on its own line, then a blank line, then the three labelled fields (**Finding**, **What to change and why**, **Effort**).
- The Priority N number MUST match the row number in the at-a-glance table.
- Separate consecutive Priority blocks with `---` on its own line.
- A block without the `**Priority N: <Title>**` heading line will fail Gate 0e and the whole pipeline.
-->

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen the site's machine readiness.

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

List 2-3 optional enhancement bullets. Each bullet is a concrete Schema.org / MX pattern that would strengthen this site's AI-agent readiness but is not a blocking issue. Examples that frequently apply: `sameAs` links to ORCID / Wikidata / LinkedIn on Person and Organization entities; `AggregateRating` on product / book / service entities that already carry Review entries; `SpeakableSpecification` CSS selectors on article-type pages for voice surfaces; `breadcrumb` on deep pages that currently rely on URL path only; `potentialAction` on Organization to advertise contact capabilities.

Choose bullets that are (a) achievable in low effort and (b) actually applicable based on the site's current structured data inventory. Do NOT invent recommendations for types the site does not have.

Format each bullet as:
- **<pattern-name>**: <1 sentence describing what it unlocks for agents and where on the site it would go>

Facts to consult: results/schema_inventory.csv (what types are present), results/id_reference_validation.json (what's already linked).

**Content-Signal conditional (MANDATORY check before including):**
Read `robots_txt_analysis.json` → `hasContentSignals` field.
- If `hasContentSignals === true`: do NOT include Content-Signal directives here: they are already present and belong in the What's Working Well / positive patterns section (mention favourably as "site publishes Content-Signal directives per contentsignals.org").
- If `hasContentSignals === false`: include as a gentle optional suggestion: `**Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for AI agents`.

Facts (do not change any number, percentage, URL, page count, or name):
- Schema.org types detected: none (SDQ=0 — no JSON-LD present)
- robots.txt Content-Signal directives: not declared
-->

---

## AI Agent Access Test

This test fetches the homepage using the User-Agent strings of known AI agents to verify whether the site is accessible at inference time.

| AI Agent | User-Agent | Status | Result |
|----------|-----------|--------|--------|
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
| URL probed | https://allabout.network |
| HTTP status | 200 |
| Content-Type returned | text/markdown; charset=utf-8 |
| Markdown served | Yes — server responded with text/markdown |

### Non-Standard Response Headers

No non-standard response headers were recorded in this audit.

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how the site handles errors for both human visitors and machines.

| Check | Result |
|-------|--------|
| HTTP status code | 404 (correct) |
| Custom error page | Yes, branded page with navigation |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | No |
| Navigation back to valid content | Yes, home link and internal navigation present |
| Internal navigation links | 1 links to same-site pages |
| MX governance tags | Not assessed in this audit |
| Schema.org JSON-LD | Not assessed in this audit |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://allabout.network/blogs/ddt/ai-generated-code`. A first-time visitor sees the cold-cache cost: the crawler recorded 473 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 569ms, 62ms, 947ms, giving a returning-visitor median of **569 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://allabout.network/blogs/adobe-franklin-revolutionizing-content-management`. A first-time visitor sees the cold-cache cost: the crawler recorded 404 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 131ms, 72ms, 65ms, giving a returning-visitor median of **72 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Server response time is within healthy bounds on the slowest page and a median-load page, for both first-visit and returning-visitor requests.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /drafts/
Disallow: /demo/

Sitemap: https://allabout.network/mx-sitemap.xml
Sitemap: https://allabout.network/eds-sitemap.xml
Sitemap: https://mx.allabout.network/blog/sitemap.xml
Sitemap: https://mx.allabout.network/sitemap.xml
```

*The full `robots.txt` (9 lines) is preserved alongside this report as `allabout-network-robots-txt.txt`.*

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 1-2 sentences assessing the robots.txt. Describe what agents are allowed or blocked, and confirm whether the sitemap is announced.

SCOPE: Assess only this site's robots.txt. Do NOT compare to "typical" sites or make claims about how other sites configure robots.txt.

Facts:
- robots.txt status: found
- Sitemap references: 4
- Disallow paths: 2
-->

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 485 entries | Fewer than crawl found |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | Yes | Appropriate values |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** Partial

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 1-2 sentences assessing the sitemap. Name the grade and call out the most significant specific attribute (e.g. varied lastmod dates, appropriate changefreq values, missing priorities).

SCOPE: Assess only this site's sitemap. Do NOT compare to "typical" or "industry standard" sitemaps.

Facts:
- Grade: Partial
- URL count: 485
- Has lastmod: Yes
- Has changefreq: Yes
- Has priority: Yes
-->

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 1-2 sentences assessing the llms.txt. Describe the structure (site description, page inventory, content policy). If well-formed, affirm it; if the file is absent, note that and recommend adding one.

TRANSPORT: If recommending text/html content-type for the file, frame it as "our recommendation diverges from the llmstxt.org specification: we recommend text/html": do NOT say it is industry standard, best practice, or established fact.

Facts:
- llms.txt present: No
- Has description: No
- Has page inventory: No
- Has content policy: No
-->

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 1-2 sentences assessing the llms-full.txt. If present, describe coverage (how many pages, total size, whether each page carries a canonical URL header, transport). If absent, note that and recommend adding one for content-heavy sites.

TRANSPORT: If recommending text/html content-type for this file, frame it as "our recommendation diverges from the llmstxt.org specification: we recommend text/html": do NOT say it is industry standard, best practice, or established fact.

Facts:
- llms-full.txt present: No
- HTTP status: 404
- Content-Type: N/A
- Size: N/A KB
- In sitemap.xml: No
- `<link rel="llms-full-txt">` in homepage head: No
-->

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Notes |
|-------------|-------|-----------|--------------|-------|
| Organization | 6 | 71% | 100% | Person |
| Person | 5 | 100% | 100% | — |
| ProfessionalService | 1 | 100% | 100% | Organization |
| Article | 4 | 67% | 59% | Person, ImageObject, Organization |
| ImageObject | 3 | 100% | 100% | — |
| Book | 1 | 67% | 25% | Person, Organization |
| WebPage | 1 | 100% | 100% | WebSite, Organization |
| WebSite | 1 | 100% | 0% | — |

**Structured Data Quality:** 47/100\
**Coverage:** 6 pages with JSON-LD out of 7 total (86%)\
**Unique types:** 8

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 9 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 2 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 12 | 15 | Average across entities |
| Entity richness | 5 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 5 | 15 | Nested @type values + @id linking |
| Linked-data signals | 5 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 9 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **47** | **100** | |

---

## Structured Data Findings

We identified 22 specific Schema.org property gaps. Each row names a single missing property on a single entity with a short note on why it matters to machines.

The full per-entity list is delivered alongside this report as a sidecar CSV: [`allabout-network-structured-data-findings.csv`](allabout-network-structured-data-findings.csv). The 22 rows describe individual Schema.org property gaps on specific entities; most of them share a small number of underlying patterns, shown below ranked by instance count.

| Type | Severity | Property | Instances | Pages | Why it matters |
|------|----------|----------|----------:|------:|----------------|
| Organization | required | name | 5 | 5 | Organization entity has no name — entire entity is meaningless |
| Article | required | datePublished | 4 | 4 | AI agents cannot date the article; freshness signals lost |
| Article | recommended | dateModified | 4 | 4 | Crawlers cannot tell when the article was last updated; freshness signals stale |
| WebSite | recommended | image | 1 | 1 | Site has no logo / hero image declared in structured data |
| WebSite | recommended | datePublished | 1 | 1 | No site-level publish date for crawler context |
| WebSite | recommended | author | 1 | 1 | Site has no top-level author/owner declared |
| WebSite | recommended | publisher | 1 | 1 | Site has no top-level publisher declared |
| Book | required | bookFormat | 1 | 1 | Book has no format (ebook, hardcover, paperback) |
| Book | recommended | datePublished | 1 | 1 | Book has no publication date |
| Book | recommended | image | 1 | 1 | Book has no cover image |

Each summary row covers multiple per-entity rows in the sidecar; the grouped view is for reading at a glance, the sidecar is for processing.

**Severity legend** (the values in the *Severity* column above):

| Severity | Meaning |
|----------|---------|
| `required` | Schema.org spec requires this property for the type. Missing values break validation. |
| `recommended` | Schema.org strongly recommends this property. Missing values reduce richness. |
| `vocabulary` | The `@type` value (the JSON-LD class name an entity declares itself as) is not in the Schema.org vocabulary: typically a typo or an invented type. |

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is: a Product, an Article, an Organization: but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside the page itself. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

**What this section checks.** Each signal below is derived deterministically from served HTML and JSON-LD on disk: no inference, no model judgement. Five structural signals fire per page: (i) self-promotional listicle (a ranked list is advertised whose first entry resolves to the publisher's own host), (ii) year-swap refresh (the title year is two or more years ahead of `dateModified`), (iii) first-party superlative (claims like "best", "leading", "world-class" without an external reference), (iv) third-party citation count (outbound links to hosts other than the audited site), and (v) provenance metadata presence (`author`, `dateModified`, `publisher`). Pages whose body content runs over 400 words while emitting zero third-party citations carry no verifiable references and contribute to the blocker list. When the audited set is clean we omit the per-page table altogether and let the verdict line below carry the result.

### Templated clusters

No templated clusters detected at the audited scale. Pages in the audited set either carry product entities or have enough structural and textual variation to clear the stamp-out threshold.

### Provenance verdict

No provenance-gap blockers detected on the audited set. Pages clear the citation-readiness floor on the structural primitives this audit measures.

_No blockers._

Any page contributing to a blocker above is capped at **Discoverable** readiness in the MX Readiness Level table below, regardless of its other scores. Citation readiness requires a verifiable claim to cite.

---

## Marker Reachability

| Marker   | In served | In rendered | In head | Reachable <250KB | Injected by JS |
|----------|-----------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Yes | Yes | Yes | Yes | Yes |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Yes | Yes | Yes | Yes | No |
| Twitter Card meta tags | Yes | Yes | Yes | Yes | No |
| MX governance meta tags | Yes | Yes | Yes | Yes | No |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Yes | Yes | Yes | Yes | No |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | Yes |
| Skip link (accessibility) | Yes | Yes | Body | Yes | No |

One or more markers appear only in the rendered DOM: they are invisible to server-side AI agents (ChatGPT, Claude, Perplexity). Move these markers into the served HTML to ensure universal agent visibility.

---

## Schema Maturity Level

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work.

|  | Level | Name | What it looks like | Typical SDQ |  |
|---|-------|------|---------------------|------------|---|
|  | 0 | Clean slate | No Schema.org markup present. Every addition is net new capability: the full maturity curve is open. | 0-29 |  |
| **→** | 1 | Decoration | Typed blocks with sparse properties, no nesting, no cross-references. Schema is treated as boilerplate. | 30-50 | **←** |
|  | 2 | Good schema | Full required and recommended properties, nested types where appropriate, valid vocabulary. No cross-entity wiring. | 75-90 |  |
|  | 3 | Real graph | Level 2 + @id cross-references between entities + linked-data signals (sameAs, mainEntityOfPage, isPartOf). | 90-95 |  |
|  | 4 | Verified linked data | Level 3 + external identifiers (Wikidata QIDs, ISNIs, ORCIDs) + provenance metadata. | 95-100 |  |

**Current level:** 1: Decoration\
**To reach the next level:** Fill in the required and recommended Schema.org properties for each typed block (see structured_data_findings.csv for the specific gaps). Connect related entities inline or via @id references to canonical entities defined elsewhere on the site. Ensure every @type value is a valid Schema.org type.

This is a structural classification, not a numeric score. A page can have a high SDQ score from rich properties without being graph-linked. The maturity level shows whether the schema is decoration, well-formed data, a real graph, or anchored in the linked-data web.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. Failure at any stage breaks the chain for all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Partial | 78 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 50 | Schema.org: Article, Person, ImageObject (67% required properties) |
| 3 | Search & Compare | Pass | 60 | Commerce schema with 0 supporting patterns |
| 4 | Price Understanding | Pass | 67 | Pricing visible but no Offer schema for agent parsing |
| 5 | Purchase Confidence | N/A | -- | No transaction forms detected |

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

State the overall MX Journey verdict as one short sentence. Options: "MX Compatible" (all 5 stages pass), "Partially Compatible" (some stages pass, some fail), "Not Compatible" (most stages fail). If a stage is N/A for this site type (e.g. Purchase Confidence on a content-only site), say so explicitly: "MX Compatible for this site type; Purchase Confidence is N/A".

Facts from mx_journey_stages.csv: 2 of 4 stages pass; Purchase Confidence are N/A.
-->

---

## AI Attribution

When a human clicks a link from ChatGPT, Perplexity, Gemini, Copilot, or Claude to your site, the browser does not record which AI sent them. Your server sees a visit with no "came from" field, and your analytics counts it as if the user typed the URL directly. A higher-converting channel quietly hides inside direct traffic.

This is not a configuration mistake on your end: the information is stripped before your server ever sees the request. In-app browsers on iOS and Android do the same thing, and any AI surface that makes a server-side fetch on the user's behalf carries no browser context at all. The only place to recover the attribution is at the edge, by capturing and classifying the request before it reaches your analytics tag.

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 1-2 short sentences stating what this means for https://allabout.network specifically. State whether the site currently has an edge capture pattern (yes/no) and what the consequence is (AI visits are or are not being separated from organic direct traffic). Use plain language: avoid the phrases "referrer", "Referrer-Policy", "same-origin", "cross-origin" in the customer-facing sentence; use "the browser does not tell your server which AI sent them" or similar.

Facts:
- Site: https://allabout.network
- Edge capture worker in place: [EDGE_CAPTURE_ACTIVE yes/no]
-->

### Live capture (last 30 days)

| Metric | Count |
|--------|-------|
| AI crawler hits (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …) | 12408 |
| AI referral hits (human visits from chat surfaces) | 5 |
| Total AI-attributable visits | 12413 |

**Top referring AI surfaces:**

| Agent | Event Type | Hits |
|-------|-----------|------|
| chatgpt | crawler | 10369 |
| amazonbot | crawler | 531 |
| claude | crawler | 451 |
| perplexity | crawler | 350 |
| bytespider | crawler | 337 |
| meta-ai | crawler | 301 |
| you | crawler | 28 |
| gemini | crawler | 27 |
| mistral | crawler | 10 |
| applebot | crawler | 2 |

### The 6-step playbook

1. **Set up custom regex channel groups in GA4.** Catches AI referrers that would otherwise land in direct. Match source/medium against `chat.openai.com`, `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`, `claude.ai`. Takes about 30 minutes.
2. **Monitor direct traffic to deep pages.** True type-in traffic lands on the homepage. Direct traffic to deep interior pages is almost always misattributed AI-referred traffic with stripped referrers.
3. **Track AI share of voice.** How often your brand is mentioned as an answer, before anyone clicks. This is the only metric that captures AI attribution at the recommendation layer, not the click layer.
4. **Get third-party validation on sites AI actually cites.** AI models weight citations to high-authority third-party sources. Presence on those sources is a leading indicator of AI recommendation volume.
5. **Structure data so AI models parse you as an entity.** Schema.org Organization + Product + Offer, explicit entity relationships, consistent naming across pages. AI models recommend entities, not page collections.
6. **Capture the first-mover baseline now.** Traditional search volume is shifting into AI surfaces. Brands instrumenting capture now build the historical baseline everyone else will wish they had.

> **Recommendation for Allabout:** adopt an edge-capture pattern. Any runtime that sits in front of the origin and can write to a small datastore works: Cloudflare Workers + D1, Fastly Compute + KV, Vercel Edge Middleware + a serverless DB, AWS Lambda@Edge + DynamoDB, or a lightweight server-side middleware on the origin itself. The shape is the same in each: a User-Agent classifier, a surface classifier, a small insert, and a non-blocking write that does not add latency to the user response. The full pattern is around 100 lines in any of these runtimes and backfills data from deploy day forward.

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether the machine can read the page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether the page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether the page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Pass | 7/7 | Every page is well under the 250 KB threshold at which some server-side agents stop reading. The largest page is 28 KB. | Largest page: 28 KB. Threshold: 250 KB. |
| SPA Shell | Fail | 1/7 | Content requires JavaScript to appear. Server-side agents (ChatGPT, Claude, Perplexity) see an empty shell when they fetch these pages. | Max gap score: 65. 0 means served and rendered match. Page: https://allabout.network/blogs/ddt/aem-development-with-ai |
| Soft 404 | Pass | 7/7 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 7/7 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.56. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 7/7 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | N/M | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 0% of the document on some pages. |
| Broken Code Fences | Pass | 7/7 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Pass | 7/7 | The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents. | 0 page(s) advertise format negotiation. |
| Cross-Host Redirect | Pass | 7/7 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 1 page(s) cross origin during redirect. |
| Generic Headings | Pass | 7/7 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | N/M | Actual prose content averages 67% of served bytes — well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 67%. Threshold: 30%. |
| Inline Tag Bloat | Pass | 7/7 | No `<style>` or `<script>` block exceeds the 500-byte threshold on any page. Head stays lean for agents that read head-first. | 0 element(s) > 500 bytes. Largest inline CSS: 0 B. Largest inline JS: 173 B. |
| Head Weight | Pass | N/M | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.00. Average: 0.00. Threshold: 0.50. |

**Pipeline Survivability score:** 98/100

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write a 2-3 sentence narrative naming which resilience checks need attention on this site, what the practical consequence is for machines reading it, and which fix would have the largest effect. Use plain language: no raw metric numbers without explanation. Frame the remaining work as opportunities to strengthen, not as failings.

Facts (derived from pipeline_survivability.csv):
- Pages audited: 7
- Pipeline Survivability score: 98
- Checks flagged on any page: SPA Shell
- Check with the most pages flagged: SPA Shell
- Pages affected by that check: 1 of 7
-->

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent the page is gone.

The Div Soup check runs against the rendered HTML on every page. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 40/100 | high | 12 | 67% | 4 | `div` (14), `div.section` (3), `div.section.bio-container` (3), `div.bio-wrapper` (3), `div.bio.block` (3) |

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

If both rows score 75 or above (band "low"), write a single-sentence affirmation that the site uses semantic HTML well and the agent has reliable structural cues. Skip the rest of this section.

If either row scores below 75, write 2-3 sentences:
- Sentence 1: name the bare-div ratio on the rendered surface and what the practical consequence is: machines lose structural context and fall back on positional inference to determine meaning. Do NOT use the phrases "this is hard for machines to understand" or "brittle heuristics".
- Sentence 2: identify whether the soup is structural (deep chains) or surface-wide (high bare ratio with shallow chains), and what each pattern indicates about the source pipeline (drag-and-drop builders, untyped component frameworks, late-stage JS injection).
- Sentence 3: name the cheapest first move: usually wrapping the obvious landmarks (header, nav, main, footer, aside) and giving the rest meaningful class names so the bare-div ratio drops without restructuring the layout.

Facts (do not change any number, percentage, URL, or selector):
- Rendered score: 40, band high
- Bare divs (rendered): 12 of 18 (67%)
- Deepest bare chain (rendered): 4
- Top bare selectors (rendered): `div` (14), `div.section` (3), `div.section.bio-container` (3), `div.bio-wrapper` (3), `div.bio.block` (3)
-->

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | Yes | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

One of the five standard security headers is absent across every audited response: Content-Security-Policy (CSP). Adding these at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 7 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| / | Yes | Yes | No | Yes | Yes |
| /blogs/adobe-franklin-revolutionizing-content-management | Yes | Yes | No | Yes | Yes |
| /blogs/ddt/a-guide-to-ai-optimization-an-update | Yes | Yes | No | Yes | Yes |
| /blogs/ddt/a-managers-guide-to-document-authoring-with-edge-delivery-services | Yes | Yes | No | Yes | Yes |
| /blogs/ddt/adobe-eds-revolutionizing-content-management | Yes | Yes | No | Yes | Yes |
| /blogs/ddt/aem-development-with-ai | Yes | Yes | No | Yes | Yes |
| /blogs/ddt/ai-generated-code | Yes | Yes | No | Yes | Yes |

HTTPS: 7/7 | HSTS: 7/7 | CSP: 0/7 | X-Frame-Options: 7/7 | X-Content-Type-Options: 7/7

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 86% | `/blogs/adobe-franklin-revolutionizing-content-management` |
| MX governance tags | 14% | 6 |
| Open Graph tags | 14% | 6 |
| Twitter Card tags | 100% | — |
| Skip link | 14% | 6 |
| llms-txt link tag | 14% | 6 |
| Canonical URL | 100% | — |
| Exactly 1 H1 | 43% | 4 |
| Code examples present | 43% | 4 |
| Self-contained sections | 100% | — |
| Error/troubleshooting docs | 29% | 5 |
| Lighthouse heading compliance | 43% | 4 |

**Overall Consistency:** 53%

## Content Consistency

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 2-3 sentences introducing Content Consistency for the audited set.

When the injected facts include concrete inconsistencies (mismatched organisation names, duplicated canonicals, out-of-range meta descriptions, divergent entity values across pages): name them in prose, with the affected page paths.

When the injected facts are SPARSE (no multi-page entity overlap, no inconsistencies surfaced): write exactly one neutral, client-facing sentence such as "The audited set shows consistent metadata patterns across pages, with no organisation-name or canonical-URL divergence flagged by the consistency check." Then stop. Do NOT explain what data was missing. Do NOT name the JSON sources. Do NOT ask for more data.

ABSOLUTELY FORBIDDEN in this block (and every block): "I cannot", "I will not", "I am unable", "please supply", "please provide", "to proceed", "could you paste", "no specific values have been supplied", "the facts you have referenced", "without fabricating". These phrases mark the AI talking to the operator and must never reach the client. If your draft contains any of them, rewrite the sentence in third-person consultant voice or delete it.
-->

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Pass | Organisation name appears consistently across all 7 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 7-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

---

## Inline Code Duplicates

1 identical inline fragment(s) were found repeated across multiple pages, totalling 1 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes | Pages | Preview |
|------|-------|-------|---------|
| js | 169 | 7 | {     "prerender": [{ "where": { "href_matches": "/*" }, "ea |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `allabout-network-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write a short (2-sentence) preamble before the SECTION branches. It must cover TWO distinct concerns:
1. Legal: accessibility legislation has converged on ISO 14289-1 (PDF/UA) as the technical baseline across major markets: the EAA (Directive (EU) 2019/882, in force 28 June 2025) in the EU, Section 508 of the US Rehabilitation Act, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent legislation in Australia and Canada all resolve to the same structural artefact. Mention EAA as the most precisely codified example but frame it as one instance of a global convergence.
2. Machine readability: an untagged PDF is also invisible to machines. Search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from a scanned or image-based PDF. A tagged PDF with a proper structure tree is machine-readable in the same way that semantic HTML is: structure the two concerns as parallel, not sequential.
Do NOT reduce this to a legal compliance note. Both concerns are real and independent.
-->

No PDF documents were discovered in the audited surface. Accessibility exposure on the document carrier: **low within the pages crawled**.

**Scope note:** this audit crawls a defined set of public pages: typically the home page, key content pages, and any pages linked directly from them. PDFs sitting behind login forms, linked only from uncrawled pages, stored in unlinked directories, or hosted on third-party domains are outside the crawl boundary and do not appear in this count. If your site publishes datasheets, white papers, investor documents, or product manuals that were not part of this crawl, a wider-scope PDF audit is needed before drawing conclusions about overall accessibility exposure on the document carrier.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 106 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Discovery Readiness improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a first-mover advantage in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | WCAG 2.1 AA compliance | Priority 1 items resolved, compliance risk removed |
| Full Optimization | Catalogue Visibility, Discovery Readiness, Semantic Structure, Structured Data, Metadata Stack, Security headers, and optional enhancements | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 2–3 sentences summarising the audit findings for Allabout (https://allabout.network). IMPORTANT: Always refer to the site by its domain (https://allabout.network), never by the consultancy name.
The highest-scoring dimension is SEO at 77/100 — open with this as a strength.
CRITICAL RULE: Open with the dimension that scored HIGHEST on the scorecard as a genuine STRENGTH. "Leads" means highest score, not highest priority finding. A dimension scoring 10/100 is never "the strongest" — it is an opportunity. High priority ≠ high score; do not confuse the two.
Then name 1–2 lowest-scoring dimensions as the key OPPORTUNITIES. Close with an invitation to act.
SCOPE: 7 pages were audited. Scope claims to "the audited set" — do not say "site-wide" unless consistency was explicitly confirmed.
Scores: AI Suitability: —/100; Accessibility: —/100; SEO: 77/100; Structured Data: 47/100; Discovery Readiness: 30/100.
Human visitors: served well. Machine opportunity: structured data, discovery, metadata.
-->

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 98/100 | Excellent |
| Accessibility | 69/100 | Needs Improvement |
| SEO (all pages) | 77/100 | Excellent |
| SEO (content pages) | 76/100 | Excellent |
| MX Stack Completeness | 52/100 | Good |
| Structured Data Quality | 47/100 | Could Be Better |
| Commerce Visibility | 0/100 | Needs Improvement |
| Discovery Readiness | 30/100 | Could Be Better |
| Heading Quality | 78/100 | Excellent |
| Semantic Ratio | 33% | Could Be Better |
| Agent Readability | 60/100 | Good |
| Pipeline Survivability | 98/100 | Excellent |
| Cross-Page Consistency | 53% | Good |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| / (nav) | 86 | 100 | 95 | 100 | 100 |
| /blogs/adobe-franklin-revolutionizing-content-management | 70 | 100 | 55 | 92 | 92 |
| /blogs/ddt/a-guide-to-ai-optimization-an-update | 73 | 90 | 85 | 100 | 100 |
| /blogs/ddt/a-managers-guide-to-document-authoring-with-edge-delivery-services | 73 | 80 | 95 | 100 | 100 |
| /blogs/ddt/adobe-eds-revolutionizing-content-management | 67 | 100 | 85 | 98 | 98 |
| /blogs/ddt/aem-development-with-ai | 99 | 0 | 85 | 94 | 94 |
| /blogs/ddt/ai-generated-code | 74 | 0 | 85 | 100 | 100 |

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 76/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: [N] links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 37    |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Allabout (allabout.network)
- Pages audited: 7 of 485 in sitemap — sample run
- Date: 2026-05-16
- Scores: SEO 77/100 | Accessibility 69/100 | Discovery Readiness 30/100 | Structured Data 47/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Schema types already present (do NOT recommend adding these): Organization (17), Person (7), ProfessionalService (4), Article (4), ImageObject (3), Book (2), WebPage (1), WebSite (1)
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 2-3 paragraphs summarising image optimisation findings.

SCOPE: All findings are scoped to the audited pages only. Do NOT write "site-wide", "across the site", or "throughout the site": write "across the audited set", "on the audited pages", or "in the pages we reviewed".

PATTERN:
- Paragraph 1: Total images audited, format distribution (WebP / SVG / PNG / JPEG), alt-text coverage (count and percentage, name the number missing if any).
- Paragraph 2: Loading strategy. Distinguish the three states: `loading="lazy"`, `loading="eager"`, and no attribute set (the browser guesses). No attribute is NOT the same as eager: make that point if the site has any "no attribute" images.
- Paragraph 3 is handled mechanically by the double-lazy explanation block below: do NOT duplicate it in your prose.

TONE: Factual, warm, peer-to-peer. The reader is a developer: assume knowledge of image formats and loading attributes; explain only the less-common things (JS Lazy Pattern, Double Lazy).

Facts (do not change any number, percentage, URL, or count):
- Total images: 27
- WebP: 0
- SVG: 0
- PNG: 23
- JPEG: 4
- With alt text: 10 (37.0%)
- Missing alt text: 17
- loading="lazy": 22
- loading="eager": 5
- no loading attribute: 0
- JS Lazy Pattern instances: 0
- Double Lazy instances: 0
-->

> **Double-lazy loading pattern not detected** — no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** Metadata Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** The audit fingerprints the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Cloudflare Pages**. The main audit uses Cloudflare Pages-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** Every internal link discovered on every audited page is recorded with its URL, anchor text, and link type. The audit does not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 7 pages analysed | Platform: Cloudflare Pages | Analysis method: Hybrid (automated + manual verification) | robots.txt: Found

---

## Appendix E: Scoring Methodology

Every score in this report is bounded 0-100 with the same four-band scale (Excellent ≥76, Good ≥51, Could Be Better ≥26, Needs Improvement <26). The table below names each score's inputs and weights so the number can be traced back to the underlying signals: useful when a stakeholder asks "why is this 51 and not 70?"

**Bands (universal):** Excellent ≥76 · Good ≥51 · Could Be Better ≥26 · Needs Improvement <26.

### Served HTML Score (`servedHtml`)

*Scale: 0-100 · Bucket: ai-opportunity*

What an AI agent sees when it fetches the raw HTML before JavaScript runs. Aggregates 27 dimensions across semantic HTML, forms, structured data, metadata, validation, and pipeline patterns.

| Input | Weight |
|-------|--------|
| Semantic HTML landmarks (main / nav / header / footer / article-or-section) | 3-6 each, sum ≤20 |
| Form fields with standard name attributes | ≤15 (× ratio) |
| Form fields with associated labels | ≤10 (× ratio) |
| Form autocomplete coverage | ≤15 (× ratio) |
| Schema.org JSON-LD present + required-property + recommended-property coverage | 5 + 5 + 3 (+2 validation bonus) |
| FAQ schema present + completeness | 8 + 5; -3 if duplicate markup |
| llms.txt referenced | 10 |
| robots.txt: ai.txt reference / agent restrictions | +5 / -5 |
| Tables with scope + caption, or no tables | 10 / 10 |
| Open Graph + Twitter Card + completeness | 8 + 5 + 7 |
| SEO meta tag completeness | ≤5 (× ratio) |
| Reading time metadata (ISO 8601) + completeness | 5 + 5 |
| HTML validation: no-issues bonus, per-issue penalties (ampersand / role / aria / non-semantic) | +10; -1 / -1 / -2 / -1 each |
| Schema type disambiguation: proper / multi-type penalty | +5 / -3 each |
| Inline CSS: external-only bonus / inline penalty | +8 / -10 (× ratio) |
| Heading hierarchy: perfect / jump penalty / multiple-H1 penalty | +10 / -5 each / -5 |
| Pre-rendering: prerendered / empty SPA root penalty | +20 / -20 |
| PDF content: HTML alternative / PDF-only penalty | +10 / -20 each |
| SSR with content / SSR without content penalty | +20 / -20 |
| DOM order: main-first / sidebar-before-main / nav-before-main | +5 / -10 / -5 |
| Pricing tables: with schema / without penalty | +15 / -10 |
| Product variants present | 10 |
| AJAX with real URLs / hash-based SPA penalty | +10 / -10 |
| Table abuse: layout-table penalty / proper data table | -15 each / +5 |
| Iframe with alternative / without alternative penalty | +5 / -10 each |
| Definition lists / skeleton / progressive enhancement / multiple authors / content separation | 5 / 5 (penalty -5) / 5 / 3 / 5 |
| MX governance tags: hasBothRequired / hasStatus / hasContentType / optional / unknown / validation issues | +3 / +1 / +1 / +1 each (cap 2) / -1 each / -1 each |

**What moves this score:**

- Add semantic HTML5 landmarks (main, nav, header, footer): quickest visible jump.
- Publish llms.txt and reference it from robots.txt or meta: +10 to +25 combined.
- Add Schema.org JSON-LD with at least the required properties for the page's primary type.
- Remove layout tables and inline style attributes: large hidden penalties.
- Pre-render content (SSR or static export): empty SPA roots cost -20.

### Rendered HTML Score (`renderedHtml`)

*Scale: 0-100 · Bucket: ai-opportunity*

Served HTML plus what becomes visible after JavaScript executes: what a browser-rendered agent sees. Bonus capped at +30 over Served HTML; dynamic-content penalties (carousels, autoplay, JS-dependent pricing) drag it back down.

| Input | Weight |
|-------|--------|
| Base: Served HTML Score (0-100) | starting value |
| Data attributes: hasDataState / hasValidationState / hasLoadingIndicators | +7 / +5 / +3 |
| Error handling: persistent errors / aria-invalid | +10 / +5 |
| Carousels: informational without proper a11y / decorative | -8 / -3 each |
| Autoplay video without controls (WCAG 2.2.2) | -8 each |
| Animated GIF without alt | -3 each |
| Animation library (typed.js, type-it) | -2 |
| Visual dynamism with active animation library | -5 |
| JavaScript-dependent pricing | -15 |

**What moves this score:**

- Eliminate JavaScript-dependent pricing: single largest rendered-only lever (-15).
- Provide caption/transcript for autoplay video and alt for animated GIFs.
- Annotate carousels with proper ARIA role / aria-roledescription.
- Use data-state / data-loading attributes so agents can interpret UI state without DOM heuristics.

### Discovery Readiness (`discoveryReadiness`)

*Scale: 0-100 · Bucket: ai-opportunity*

Can an AI agent find your site and know what it's allowed to do? Scores robots.txt + sitemap + llms.txt + Schema.org + ai.txt as one bundle.

| Input | Weight |
|-------|--------|
| robots.txt present (or robots meta) | 15 |
| No agent restrictions in robots.txt | 10 |
| llms.txt present (referenced or meta) | 20 |
| llms.txt referenced directly from the page | 15 |
| Sitemap linked from robots.txt | 15 (full) or 8 (alternate) |
| Schema.org JSON-LD present | 15 |
| ai.txt referenced in robots.txt | 10 |

**What moves this score:**

- Publish /llms.txt at the site root: +20 to +35 combined (presence + reference + content).
- Add a Schema.org JSON-LD block with at least one entity: +15.
- Link sitemap from robots.txt: +15 (vs +8 if only alternate path).

### Metadata Stack Completeness (MX Stack) (`metadataStackCompleteness`)

*Scale: 0-100 · Bucket: ai-opportunity*

How complete is the seven-layer MX metadata stack? Uses an applicable-points denominator: score isn't dragged down by checks that don't apply (e.g. no forms means form-label checks are excluded from the denominator).

| Input | Weight |
|-------|--------|
| Semantic landmarks (max 15 across main/nav/header/footer/article-or-section) | ≤15 |
| SEO meta: description (5) + canonical (5) + completeness (≤5) | ≤15 |
| Social: OpenGraph (8) + Twitter (4) + completeness (≤3) | ≤15 |
| Discovery: llms.txt (8) + robots.txt (4) + permissive (3) | ≤15 |
| Structured data: schema.org (10) + required props (≤5) + recommended (≤5) | ≤20 |
| Skip link | 4 |
| Forms (if present): label ratio (≤3) + name ratio (≤3) | ≤6 (applicable only when forms exist) |
| MX governance: both required (6) or one (3) + optional (≤4) | ≤10 |

**What moves this score:**

- Fill in OpenGraph + canonical + meta description: quick wins for the SEO + Social layers.
- Add MX governance tags (mx-status, mx-content-type): only 6 points but no other way to earn them.
- Improve Schema.org required/recommended coverage: the largest single layer (≤20).

### Structured Data Quality (SDQ) (`structuredDataQuality`)

*Scale: 0-100 · Bucket: ai-opportunity*

How good is the structured data, given that it exists? Seven components: penalty cap at 5 if JSON-LD exists but uses a non-schema.org vocabulary.

| Input | Weight |
|-------|--------|
| Presence: schema.org JSON-LD exists | 10 |
| Required-property coverage: WORST entity (one broken entity isn't hidden by good ones) | ≤25 |
| Recommended-property coverage: average across entities | ≤15 |
| Entity richness: avg content properties; 3-5 props = 5pt, 6-9 = 10pt, 10+ = 15pt | ≤15 |
| Cross-entity references: nested @type + @id linking | ≤15 (10 nesting + 5 @id) |
| Linked-data signals: sameAs / mainEntityOfPage / isPartOf etc., +1 each capped 10 | ≤10 |
| Vocabulary validity: fraction of @type values in Schema.org whitelist | ≤10 |

**What moves this score:**

- Audit your worst entity first: required-property coverage uses the minimum, not the average.
- Add cross-entity @id references: wires the graph and unlocks 15 points.
- Include linked-data signals (sameAs to Wikidata, mainEntityOfPage): easy +5 to +10.

### Agent Readability (`agentReadability`)

*Scale: 0-100 · Bucket: ai-opportunity*

How easy is the content for an AI agent to parse and quote? Applicable-points denominator: checks for code blocks only apply when code exists.

| Input | Weight |
|-------|--------|
| Self-contained (no orphan backward references) | 15 / 8 partial |
| Code blocks: language tag + comment coverage (if code present) | ≤20 |
| Section length quality (if ≥2 sections) | 15 / 8 partial |
| Content position: important content first + CTA last | 15 / 10 / 5 |
| Error documentation (if ≥2 code blocks) | 10 |
| Progressive disclosure (if ≥5 sections) | 10 |
| Heading quality (folded in as 15% of heading-quality score) | ≤15 |

**What moves this score:**

- Move important content to the top, CTAs to the bottom: content position is worth 15.
- Resolve backward references inline: 'as discussed above' costs 7-15 points.
- Add language tags to code blocks; document errors structurally.

### Heading Quality (`headingQuality`)

*Scale: 0-100 · Bucket: compliance-risk*

Semantic structure measured at the heading hierarchy. Counts as Compliance Risk because heading order is an accessibility concern (screen-reader navigation, WCAG 1.3.1).

| Input | Weight |
|-------|--------|
| H1 present + unique | 25 (or 10 if multiple) |
| Zero heading-level jumps | 25 (else 25 − 8 per jump) |
| H2 present | 15 |
| H3+ present | 15 (or 8 if only H2) |
| Heading-to-word ratio (50-500 words/heading optimal) | 20 / 15 / 12 / 5 |
| Full-page-spanning jumps | -5 each |

**What moves this score:**

- Ensure exactly one H1 per page.
- Eliminate level jumps (no H2 → H4 without an intervening H3).
- Aim for one heading per 50-500 words: too sparse or too dense both lose points.

### Pipeline Survivability (`pipelineSurvivability`)

*Scale: 0-100 · Bucket: ai-opportunity*

Will the content survive the journey through an AI's ingestion pipeline? Thirteen weighted binary issue-mode checks; returns score + failedChecks[]. See MX Protocols Appendix S.

| Input | Weight |
|-------|--------|
| truncationRisk (weight 3) | 3 |
| servedRenderedGap (weight 3) | 3 |
| softFourOhFour (weight 3) | 3 |
| boilerplateBurial (weight 2) | 2 |
| tabbedDisclosure (weight 2) | 2 |
| contentStartPosition (weight 2) | 2 |
| inlineTagBloat (weight 2) | 2 |
| headWeight (weight 2) | 2 |
| brokenCodeFences (weight 1) | 1 |
| bodyContentRatio (weight 1) | 1 |
| contentNegotiation (weight 1) | 1 |
| redirectChain (weight 1) | 1 |
| headingSpecificity (weight 1) | 1 |

**What moves this score:**

- Fix any check that fails with weight 3 first: biggest score per fix (truncation, served/rendered gap, soft-404).
- Resolve boilerplate burial (content trapped behind nav/footer): weight 2, common.
- Eliminate redirect chains and broken code fences: low weight but quick to fix.

### Performance (`performance`)

*Scale: 0-100 (derived from load time) · Bucket: cross-cutting*

Scorecard-only band derived from average page load time. The audit does NOT generate prose about Performance: the figure is informational, treat the underlying load-time average and FCP/CLS/TBT for diagnosis. Reported in both the Compliance Risk and AI Opportunity contexts because slow pages exclude users AND make pipeline ingestion brittle.

| Input | Weight |
|-------|--------|
| Average page load time across all audited pages | score = max(0, 100 - avgLoadTimeMs / 100) |

**What moves this score:**

- Eliminate render-blocking resources in <head>.
- Defer non-critical JavaScript.
- Compress and lazy-load images below the fold.

### SEO (`seo`)

*Scale: 0-100 · Bucket: cross-cutting*

Per-page SEO score averaged across audited pages. Aggregates 13 scoring functions (title, meta description, URL, H1, content length, content quality, internal linking, image optimisation, page speed, mobile, security, structured data, social tags).

| Input | Weight |
|-------|--------|
| titleOptimization (30-60 chars optimal) | 10 |
| metaDescriptionOptimization (70-160 chars optimal) | 8 |
| urlStructure (lowercase, no underscores, ≤4 levels) | 7 |
| h1Optimization (present, ≤70 chars) | 6 |
| contentLength (200-800 words optimal) | 8 |
| contentQuality (keyword in title/meta/h1, h2/h3 presence) | 9 |
| internalLinking (1-10 links) | 7 |
| imageOptimization (alt text or decorative) | 6 |
| pageSpeed (load time 1000-5000ms band) | 9 |
| mobileOptimization (responsive meta tag) | 8 |
| securityFactors (HTTPS) | 7 |
| structuredData (any present) | 6 |
| socialMediaTags (OpenGraph or Twitter Card) | 5 |

**What moves this score:**

- Optimise title (30-60 chars) and meta description (70-160 chars): high weight, low effort.
- Ensure HTTPS, responsive meta tag, and OpenGraph are all present: three quick foundation wins.
- Lift weakest content pages to 200+ words; resolve URL structure issues (underscores, uppercase, query strings).

### Accessibility (Pa11y WCAG 2.1 AA) (`accessibility`)

*Scale: 0-100 · Bucket: compliance-risk*

Pa11y-derived per-page score against WCAG 2.1 Level AA. The audit reports Pa11y's raw issue counts (errors, warnings, notices) alongside the numeric score so legal/HR reviewers see both the headline number and the underlying violations.

| Input | Weight |
|-------|--------|
| Pa11y errors (WCAG 2.1 AA violations) | -5 each |
| Pa11y warnings (likely WCAG concerns) | -2 each |
| Pa11y notices (informational findings) | -0.5 each |

**What moves this score:**

- Fix Pa11y errors first: heaviest penalty, also strongest legal exposure under EAA / WCAG.
- Resolve duplicate IDs, missing form labels, low-contrast text: common high-frequency errors.
- Reduce notices last: they have the smallest score impact but the largest catalogue noise.

---

\clearpage

## Further Reading

Every book appendix cited in this report, plus the book itself. Click the link on screen or scan the QR code on paper: both encode the same URL.

| Scan | Link and description |
| :----: | -------------------- |
| ![Appendix R QR](assets/qr/appendix-r.png){ width=15mm } | **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)**: the methodology behind the Pipeline Survivability measurements used in this report.\ <https://mx.allabout.network/books/appendices/appendix-r.html> |
| ![Appendix S QR](assets/qr/appendix-s.png){ width=15mm } | **[MX: The Protocols Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**: the full catalogue of reading-resilience checks scored in the Agent Reading Pipeline section.\ <https://mx.allabout.network/books/appendices/appendix-s.html> |
| ![Appendix M QR](assets/qr/appendix-m.png){ width=15mm } | **[MX: The Protocols Appendix M: Index of Metadata](https://mx.allabout.network/books/appendices/appendix-m.html)**: the full field dictionary governing the MX governance tags referenced throughout this report.\ <https://mx.allabout.network/books/appendices/appendix-m.html> |
| ![llms.txt guide QR](assets/qr/llms-txt-guide.png){ width=15mm } | **[Why llms.txt Probably Isn't Working: And What to Do About It](https://mx.allabout.network/blog/llms-txt-guide.html)**: a guide to the two structural problems most llms.txt implementations have (MIME type and sitemap registration).\ <https://mx.allabout.network/blog/llms-txt-guide.html> |
| ![Books index QR](assets/qr/books-index.png){ width=15mm } | **[Get the books](https://mx.allabout.network/books/)**: MX: The Intro (free), MX: The Handbook, and MX: The Protocols. The full reference for every concept this report draws on.\ <https://mx.allabout.network/books/> |

---

**Date:** 16 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*
