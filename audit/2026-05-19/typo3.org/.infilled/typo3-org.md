---
title: "Typo3: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-19"
modified: "2026-05-19"
client: "Typo3"
clientSlug: "typo3-org"
clientUrl: "https://typo3.org"
reportId: "typo3-org-WEB-AUDIT-20260519"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-19"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Typo3"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 85
accessibilityScore: 81
seoScore: 77
llmSuitabilityScore: 91
totalIssues: 27
pagesAudited: 7
version: "1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Typo3. Focus on the highest-leverage MX opportunities surfaced by the audit."
---

# Typo3: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 19 May 2026\
**Report ID:** typo3-org-WEB-AUDIT-20260519

---

## About This Report

We audited 7 pages across typo3.org's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** This audit covers the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 7 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead: Common Crawl, the archive underpinning most major LLM training datasets, indexes only HTML files, meaning a plain-text llms.txt never enters training corpora regardless of its content quality. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **85**/100 | `###############---` |
| Accessibility | **81**/100 | `###############---` |
| SEO | **77**/100 | `##############----` |
| Machine Suitability | **91**/100 | `################--` |
| MX Stack | **47**/100 | `########----------` **(!)** |
| Agent Readability | **68**/100 | `############------` |
| Pipeline Survivability | **93**/100 | `#################-` |

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 2-3 paragraphs opening the Executive Summary in a warm, professional consultant voice.
PATTERN (follow strictly):
- Paragraph 1: Affirm what the site does well for HUMAN visitors. Reference specific design, content, or brand strengths. Lead with the human. Use the "Strongest human-experience dimension" fact as the anchor ("SEO foundations are solid", "performance is excellent"). Do NOT anchor on machine-experience dimensions (AI Suitability, Discovery Readiness, Structured Data Quality) — those belong in Paragraph 2.
- Paragraph 2: Introduce the machine-experience OPPORTUNITY. Frame it as the next natural step, not a failing. Use the phrase "the headline opportunity is..." or "the opportunity we want to draw attention to is..." Cite the specific machine dimension that most moves the needle. If there are WCAG AA issues, name accessibility as a Priority 1 compliance item here, before the MX opportunity.
- Optional Paragraph 3: If there is a served-vs-rendered gap or a platform constraint, name it — and note that Schema.org JSON-LD is the highest-leverage asset that every agent can read regardless of rendering.
SCOPE: 7 pages were audited. Scope all claims to "the audited set" — do not say "site-wide" unless cross-page consistency is explicitly confirmed in the facts.
ACCESSIBILITY NOTE: There are 27 WCAG AA issues. If Accessibility is not grade A, do NOT call it the "strongest" dimension in Paragraph 1. Acknowledge the accessibility opportunity in Paragraph 2 as a Priority 1 compliance item before the MX opportunity.
BANNED WORDS: "failing", "failure", "gap" (as verdict), "weakness", "broken", "poor", "deficient", "inadequate", "lacking" (as verdict), "site-wide" (unless facts explicitly confirm multi-page consistency).
PREFERRED WORDS: "opportunity", "headline opportunity", "next step", "room to strengthen", "foundation", "the chance to", "solid", "the groundwork is there".
TONE: "You did good for humans — now build for machines." Never condescending. Never a list of failings. Every metric is framed as a relative position that a concrete improvement can lift.
VOICE: First-person plural ("we audited", "we found", "we recommend"). NEVER use singular "I" — the consultancy speaks as a team.

Facts (do not change any number, percentage, URL, page count, or name):
- Platform: TYPO3 CMS
- Pages audited: 7
- SEO: 77/100 (Excellent)
- Accessibility: 27 critical WCAG AA issues — 11 of these trace to 2 recurring template patterns (single theme edit per pattern fixes all instances)
- AI Suitability (served): 91/100
- Structured Data Quality: 0/100
- Discovery Readiness: 25/100
- Catalogue Visibility: 0/100
- MX Readiness Level: 1 (Basic)
- Schema Maturity: Level undefined (undefined)
- Strongest human-experience dimension: performance
- Lowest machine-readiness score: 0/100
-->

> 

\clearpage

## Balanced Scorecard

### Human Experience

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 1 sentence introducing the Human Experience subtable.

PATTERN: State how the site performs for human visitors. If scores are strong, affirm it ("the site delivers a strong experience for human visitors"). If one dimension is weaker, name it as the area for improvement without dwelling.

SCOPE: These scores cover the audited pages only — do NOT write "site-wide".

TONE: Factual, warm, peer-to-peer.

Facts (do not change any number, percentage, URL, page count, or name):
- Pages audited: 7
- Performance: 762ms avg (Excellent)
- Accessibility: 81/100 (Excellent)
- SEO: 77/100 (Excellent)
- Accessibility issues: 27 (11 trace to 2 template patterns)
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
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 1 sentence introducing the Machine Experience subtable.

PATTERN: State what AI agents can do with the site today. Frame scores as capabilities ("agents can discover and cite", "agents can read but not transact"), not as deficiencies.

SCOPE: These scores cover the audited pages only — do NOT write "site-wide".

TONE: Factual, warm, peer-to-peer.

Facts (do not change any number, percentage, URL, page count, or name):
- Pages audited: 7
- Discovery Readiness: 25/100
- Structured Data Quality: 0/100
- Metadata Stack Completeness: 47/100
- Pipeline Survivability: 93/100
-->

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 25/100 | Needs Improvement | D |
| Structured Data Quality | 0/100 | Needs Improvement | D |
| MX Stack Completeness | 47/100 | Could Be Better | C |
| Pipeline Survivability | 93/100 | Excellent | A |

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

**Evidence:** MSC 47/100 | SDQ 0/100 | Discovery 25/100 | Consistency 89%

**To reach the next level:** Add full MX fields and governance metadata. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
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
- Accessibility: 81/100, 27 issues — 11 of these trace to 2 template-level patterns
- Security headers: 2/5 present (HTTPS, X-Content-Type-Options); 0 of 7 audited URLs carry all five
- Structured Data Quality: 0/100
- Consistency: 89%
-->

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent — 762ms average load time |
| SEO (content pages) | 76 | Excellent — titles, meta descriptions, canonical URLs in place |
| Security | 2/5 | HTTPS, X-Content-Type-Options — 3 headers absent |
| Structured Data | 0 | Needs Improvement — no Schema.org JSON-LD present yet |
| Heading Quality | 91 | Excellent — single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 89% | 89% — same metadata patterns across every page |
| Agent access | 6/6 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Body content ratio averages 82%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

Write 1-2 sentences introducing the At a Glance findings table.

PATTERN: Describe the findings as opportunities prioritised by impact, not as a list of problems. State what the priority order was based on (e.g. "commerce schema gaps lead because they directly affect shopping agents", "discovery gaps lead because they block everything downstream").

BANNED: "issues", "problems", "failings", "deficiencies" as headline framing. These words can appear in individual finding titles where technically necessary, but not in the intro sentence.
PREFERRED: "opportunities", "areas to strengthen", "findings", "prioritised by impact".

Facts (do not change any number, percentage, URL, page count, or name):
- Pages audited: 7
- Structured Data Quality: 0/100
- Catalogue Visibility: 0/100
- Metadata Stack Completeness: 47/100
- Discovery Readiness: 25/100
-->

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
Render the at-a-glance findings table. One row per genuine finding identified by audit-scores + audit-discovery. Order by regulatory exposure first, then by reach (number of pages affected).

Columns: # | Finding | Bucket | Priority | Effort | Impact

- Finding: a concise title: what is wrong, state the metric, name the standard if applicable.
- Bucket: one of `Compliance Risk` (accessibility, WCAG, duplicate IDs, forms, semantic structure) / `Cross-cutting` (performance, SEO foundations) / `AI Opportunity` (discovery, metadata, llms.txt, schema, agent cards, pipeline survivability). Pick the dominant lens: a finding belongs in exactly one bucket. This column tells the procurement reader which budget envelope the fix belongs in (legal/HR/accessibility for Compliance, growth/digital for AI Opportunity, foundations for Cross-cutting).
- Priority: High | Medium | Low (regulatory findings always High).
- Effort: Low | Medium | High band, no time estimates.
- Impact: one short clause naming who is affected. Use hedged language: "may miss", "risk missing", "might not", "are less likely to", "reduces agent confidence".

If the audit produced no findings, write "The audit produced no priority findings on this surface." instead of an empty table.

Sort the at-a-glance table by bucket in the order: `Compliance Risk` first (legal exposure leads), then `Cross-cutting` (foundations), then `AI Opportunity` (growth). Within each bucket, sort by Priority (High > Medium > Low).

After the at-a-glance table, render one Priority N: <Title> block per row in the table. Title format: `**Priority N: <Title>**` on a single line, with the title using only commas, colons, or parentheses. When citing a WCAG criterion or numeric anchor in the title, use a comma or parenthesis: `Duplicate ID Attributes, WCAG 4.1.1` or `Semantic Structure 20/100 (573 Bare Divs out of 867 Total Elements)`. Each Priority block has exactly four labelled fields: **Bucket**, **Finding**, **What to change and why**, **Effort**. The Bucket value matches the table row. The "What to change and why" field is 2-4 bulleted concrete fixes, each with the WHY (which metric moves, which agent behaviour unlocks, which Core Web Vital improves, which WCAG criterion is addressed): developers know HTML; what they need from this report is the reasoning behind the fix.

Div Soup (Semantic Structure): rendered score 20/100, band high. When the rendered score is below 70, include this as a numbered Priority row. The figures 216 bare divs out of 288 total describe the WORST-CASE page in the audited set (https://typo3.org/association), not a site-wide average. The finding title and the Finding paragraph must scope to that worst page; do NOT present these numbers as if they hold across every audited page. The title should include the rendered score, the worst-page URL, and the bare-divs-of-total figure (for example, a title naming the score, the page path, and the figure such as "95 of 153 bare divs"). In the Finding paragraph, name the worst page URL explicitly and note that the figures cited come from it specifically; if the band still applies because most pages share the template, say so.

Separate Priority blocks with `---`.

FACTS:
- Pa11y data for this audit:  Of these, 4 (15%) trace to 1 recurring template-level pattern; a single theme edit per pattern resolves all instances site-wide. A further 7 (26%) trace to 1 third-party iframe pattern injected at runtime by vendor SDK (app.usercentrics.eu); these are NOT in the site's template and cannot be fixed by a theme edit. Remediation is an SDK upgrade with the vendor, or a DOM-observer patch that adds the missing attribute after injection.

Pa11y findings for this audit (use ONLY these for specific recommendations):
- **WCAG 2.4.1**: Iframe element requires a non-empty title attribute that identifies the frame. | selector: `#cross-domain-consent-sharing-iframe` | 7 instances on 7 pages | affects: sighted keyboard users | third-party iframe from `app.usercentrics.eu` (vendor SDK, not site template)
- **WCAG 1.4.3**: This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.09:1. Recommendation:  change background to #c25700. | selector: `#uc-btn-accept-banner` | 4 instances on 4 pages | affects: low-vision users
- **WCAG 1.4.3**: This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.09:1. Recommendation:  change background to #c25700. | selector: `#c1012 > div > div > div > div > div:nth-child(2) > p` | 1 instance on 1 page | affects: low-vision users
- **WCAG 1.4.3**: This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.09:1. Recommendation:  change background to #c25700. | selector: `#c1012 > div > div > div > div > div:nth-child(2) > p > a:nt…` | 1 instance on 1 page | affects: low-vision users
- **WCAG 1.4.3**: This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.09:1. Recommendation:  change background to #c25700. | selector: `#c1012 > div > div > div > div > div:nth-child(2) > p > a:nt…` | 1 instance on 1 page | affects: low-vision users
- Div Soup rendered score: 20/100, band high
- Div Soup bare divs: 216 of 288 (figures from the WORST page only)
- Div Soup worst page URL: https://typo3.org/association
- Div Soup audited page count: 7

When a Pa11y finding row in  Of these, 4 (15%) trace to 1 recurring template-level pattern; a single theme edit per pattern resolves all instances site-wide. A further 7 (26%) trace to 1 third-party iframe pattern injected at runtime by vendor SDK (app.usercentrics.eu); these are NOT in the site's template and cannot be fixed by a theme edit. Remediation is an SDK upgrade with the vendor, or a DOM-observer patch that adds the missing attribute after injection.

Pa11y findings for this audit (use ONLY these for specific recommendations):
- **WCAG 2.4.1**: Iframe element requires a non-empty title attribute that identifies the frame. | selector: `#cross-domain-consent-sharing-iframe` | 7 instances on 7 pages | affects: sighted keyboard users | third-party iframe from `app.usercentrics.eu` (vendor SDK, not site template)
- **WCAG 1.4.3**: This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.09:1. Recommendation:  change background to #c25700. | selector: `#uc-btn-accept-banner` | 4 instances on 4 pages | affects: low-vision users
- **WCAG 1.4.3**: This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.09:1. Recommendation:  change background to #c25700. | selector: `#c1012 > div > div > div > div > div:nth-child(2) > p` | 1 instance on 1 page | affects: low-vision users
- **WCAG 1.4.3**: This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.09:1. Recommendation:  change background to #c25700. | selector: `#c1012 > div > div > div > div > div:nth-child(2) > p > a:nt…` | 1 instance on 1 page | affects: low-vision users
- **WCAG 1.4.3**: This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.09:1. Recommendation:  change background to #c25700. | selector: `#c1012 > div > div > div > div > div:nth-child(2) > p > a:nt…` | 1 instance on 1 page | affects: low-vision users is annotated `third-party iframe from <host> (vendor SDK, not site template)`, the "What to change and why" bullets MUST NOT prescribe a site-template, theme, or partial edit for that selector. The iframe is injected at runtime by the named vendor SDK and does not exist in the site's own template. The valid remediation paths are: (a) an SDK upgrade with the vendor (cite the host), or (b) a small DOM-observer patch that adds the missing attribute after injection. Name the third-party origin in the prose so the reader can see why the fix path is different from the in-template patterns above it.

DO_NOT:
- Use H1 (# heading) — the document already has a title H1; use ## or lower if any heading is needed.
- Output HTML code blocks or implementation tutorials.
- Write "cannot" in the Impact column; agents vary in capability and heuristics.
- Use an em-dash in any Priority title; the em-dash separator `Title — WCAG X.Y.Z` is a tone violation.
- Invent Pa11y findings (e.g. keyboard-navigation or focus-order issues) not listed in  Of these, 4 (15%) trace to 1 recurring template-level pattern; a single theme edit per pattern resolves all instances site-wide. A further 7 (26%) trace to 1 third-party iframe pattern injected at runtime by vendor SDK (app.usercentrics.eu); these are NOT in the site's template and cannot be fixed by a theme edit. Remediation is an SDK upgrade with the vendor, or a DOM-observer patch that adds the missing attribute after injection.

Pa11y findings for this audit (use ONLY these for specific recommendations):
- **WCAG 2.4.1**: Iframe element requires a non-empty title attribute that identifies the frame. | selector: `#cross-domain-consent-sharing-iframe` | 7 instances on 7 pages | affects: sighted keyboard users | third-party iframe from `app.usercentrics.eu` (vendor SDK, not site template)
- **WCAG 1.4.3**: This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.09:1. Recommendation:  change background to #c25700. | selector: `#uc-btn-accept-banner` | 4 instances on 4 pages | affects: low-vision users
- **WCAG 1.4.3**: This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.09:1. Recommendation:  change background to #c25700. | selector: `#c1012 > div > div > div > div > div:nth-child(2) > p` | 1 instance on 1 page | affects: low-vision users
- **WCAG 1.4.3**: This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.09:1. Recommendation:  change background to #c25700. | selector: `#c1012 > div > div > div > div > div:nth-child(2) > p > a:nt…` | 1 instance on 1 page | affects: low-vision users
- **WCAG 1.4.3**: This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.09:1. Recommendation:  change background to #c25700. | selector: `#c1012 > div > div > div > div > div:nth-child(2) > p > a:nt…` | 1 instance on 1 page | affects: low-vision users above.
- Include Div Soup as a Priority row when the rendered score is 70 or above.
- Prescribe a site-template / theme / partial edit for any Pa11y row annotated `third-party iframe from <host>`. Those iframes are vendor-SDK injections at runtime; the fix path is an SDK upgrade or DOM-observer patch, not a template change.

FACTS (do not change any number, percentage, URL, page count, or name):
- Pages audited: 7 — scope all Priority descriptions to "the audited page" (singular) or "the audited set" (plural); do NOT say "site-wide" or "across the site"
- Discovery Readiness: 25/100 (Needs Improvement)
- Structured Data Quality: 0/100 (Needs Improvement)
- Metadata Stack Completeness: 47/100 (Could Be Better)
- Accessibility: 81/100 (Excellent) — 27 issues — 11 trace to 2 template pattern(s)
- SEO: 77/100 (Excellent)
- Security headers: 2/5 present (HTTPS, X-Content-Type-Options); 0 of 7 audited URLs carry all five
- Heading quality: 91/100
- Pipeline Survivability: 93/100
- Served HTML: 91/100, Rendered HTML: n/a/100
- Performance: 762ms average load time

PRIORITY-BLOCK CONTRACT — non-negotiable for Gate 0e (section completeness):
- After the at-a-glance table, render one block per row.
- Every block MUST open with a bold heading line of the form `**Priority N: <Title>**` on its own line, then a blank line, then the three labelled fields (**Finding**, **What to change and why**, **Effort**).
- The Priority N number MUST match the row number in the at-a-glance table.
- Separate consecutive Priority blocks with `---` on its own line.
- A block without the `**Priority N: <Title>**` heading line will fail Gate 0e and the whole pipeline.
-->

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
List 2-3 optional enhancement bullets. Each bullet is a concrete Schema.org / MX pattern that would strengthen this site's AI-agent readiness but is not a blocking issue. Examples that frequently apply: `sameAs` links to ORCID / Wikidata / LinkedIn on Person and Organization entities; `AggregateRating` on product / book / service entities that already carry Review entries; `SpeakableSpecification` CSS selectors on article-type pages for voice surfaces; `breadcrumb` on deep pages that currently rely on URL path only; `potentialAction` on Organization to advertise contact capabilities.

Choose bullets that are (a) achievable in low effort and (b) actually applicable based on this site's current structured data inventory.

Format each bullet as:
- **<pattern-name>**: <1 sentence describing what it unlocks for agents and where on the site it would go>

FACTS:
- Inventory of types present: results/schema_inventory.csv
- Already-linked entities: results/id_reference_validation.json
- Content-Signal directives present in robots.txt: `robots_txt_analysis.json` → `hasContentSignals`

DO_NOT:
- Invent recommendations for types the site does not have.
- Include Content-Signal directives here if `hasContentSignals === true`; they belong in the What's Working Well / positive patterns section (mention favourably as "site publishes Content-Signal directives per contentsignals.org").
- Omit Content-Signal directives when `hasContentSignals === false`; include as a gentle optional suggestion: `**Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for AI agents`.

FACTS (do not change any number, percentage, URL, page count, or name):
- Schema.org types detected: none (SDQ=0 — no JSON-LD present)
- robots.txt Content-Signal directives: not declared
-->

---

## AI Agent Access Test

This test fetches the homepage using the User-Agent strings of known AI agents to verify whether this site is accessible at inference time.

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
| URL probed | https://typo3.org |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No — server returned HTML regardless of Accept header |

### Non-Standard Response Headers

No non-standard response headers were recorded in this audit.

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how this site handles errors for both human visitors and machines.

| Check | Result |
|-------|--------|
| HTTP status code | 404 (correct) |
| Custom error page | Yes, branded page with navigation |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | Yes |
| `<meta name="robots" content="noindex">` | Yes |
| Navigation back to valid content | Yes, home link and internal navigation present |
| Internal navigation links | 32 links to same-site pages |
| MX governance tags | Not assessed in this audit |
| Schema.org JSON-LD | Not assessed in this audit |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://typo3.org/association/funding-finances`. A first-time visitor sees the cold-cache cost: the crawler recorded 908 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 254ms (HTTP 404), 132ms (HTTP 404), 117ms (HTTP 404); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Median-load control.** The median-load control page is `https://typo3.org/association/contact`. A first-time visitor sees the cold-cache cost: the crawler recorded 800 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 82ms (HTTP 404), 114ms (HTTP 404), 130ms (HTTP 404); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Verdict:** Server response time is within healthy bounds on the slowest page and a median-load page, for both first-visit and returning-visitor requests.

---

## Discovery Files

### robots.txt

```text
# robots.txt not found at origin
```

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
1-2 sentences assessing the robots.txt. Describe what agents are allowed or blocked, and confirm whether the sitemap is announced.

FACTS:
- robots.txt status: missing
- Sitemap references: 0
- Disallow paths: 0

DO_NOT:
- Compare to "typical" sites or make claims about how other sites configure robots.txt. Assess only this site's robots.txt.
-->

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 76 entries | Matches crawl count |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | No | Missing |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** Partial

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
1-2 sentences assessing the sitemap. Name the grade and call out the most significant specific attribute (e.g. varied lastmod dates, appropriate changefreq values, missing priorities).

FACTS:
- Grade: Partial
- URL count: 76
- Has lastmod: Yes
- Has changefreq: No
- Has priority: Yes

DO_NOT:
- Compare to "typical" or "industry standard" sitemaps. Assess only this site.
-->

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
1-2 sentences assessing the llms.txt. Describe the structure (site description, page inventory, content policy). If well-formed, affirm it; if the file is absent, note that and recommend adding one.

FACTS:
- llms.txt present: No
- Has description: No
- Has page inventory: No
- Has content policy: No

DO_NOT:
- Frame a text/html content-type recommendation as industry standard, best practice, or established fact. Frame it as "our recommendation diverges from the llmstxt.org specification: we recommend text/html".
-->

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
1-2 sentences assessing the llms-full.txt. If present, describe coverage (how many pages, total size, whether each page carries a canonical URL header, transport). If absent, note that and recommend adding one for content-heavy sites.

FACTS:
- llms-full.txt present: No
- HTTP status: 404
- Content-Type: N/A
- Size: N/A KB
- In sitemap.xml: No
- `<link rel="llms-full-txt">` in homepage head: No

DO_NOT:
- Frame a text/html content-type recommendation as industry standard, best practice, or established fact. Frame it as "our recommendation diverges from the llmstxt.org specification: we recommend text/html".
-->

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

No Schema.org JSON-LD entities were detected across the audited set. Adding at least one typed entity per page (e.g. `Organization` on the homepage, `Product` or `Article` on content pages) is the highest-impact improvement for machine readability.

Across the 7 pages we audited, structured data is limited. Machines cannot reliably extract entity data from these pages. Adding Schema.org JSON-LD with required properties is the highest-impact improvement, and a wider audit identifies the same gaps across the rest of the estate.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your site earns in each.

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 0 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 0 | 25 | Worst-case across all entities (one broken entity is not hidden by good ones) |
| Recommended property coverage | 0 | 15 | Average across entities |
| Entity richness | 0 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 0 | 15 | Nested @type values + @id linking |
| Linked-data signals | 0 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 0 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **0** | **100** | |

---

## Structured Data Findings

This is a clean-slate site with no Schema.org markup. There are no property gaps to report because no typed entities exist yet; every structured data addition is net new capability. The served HTML is machine-readable (served score 91/100); agents can extract content without JSON-LD.

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is: a Product, an Article, an Organization: but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside any single page. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

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
| JSON-LD structured data | Not present | Not present | n/a | n/a | n/a |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Not present | Not present | n/a | n/a | n/a |
| Twitter Card meta tags | Not present | Not present | n/a | n/a | n/a |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Yes | Yes | Body | Yes | No |

All detected markers are present in the served HTML on the pages we audited. Server-side and browser-based agents see the same signals on the sampled pages; a wider audit confirms whether the same pattern holds across the rest of the estate.

---

## Schema Maturity Level

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work.

|  | Level | Name | What it looks like | Typical SDQ |  |
|---|-------|------|---------------------|------------|---|
| **→** | 0 | Clean slate | No Schema.org markup present. Every addition is net new capability: the full maturity curve is open. | 0-29 | **←** |
|  | 1 | Decoration | Typed blocks with sparse properties, no nesting, no cross-references. Schema is treated as boilerplate. | 30-50 |  |
|  | 2 | Good schema | Full required and recommended properties, nested types where appropriate, valid vocabulary. No cross-entity wiring. | 75-90 |  |
|  | 3 | Real graph | Level 2 + @id cross-references between entities + linked-data signals (sameAs, mainEntityOfPage, isPartOf). | 90-95 |  |
|  | 4 | Verified linked data | Level 3 + external identifiers (Wikidata QIDs, ISNIs, ORCIDs) + provenance metadata. | 95-100 |  |

**Current level:** 0: Clean Slate\
**To reach the next level:** Add at least one Schema.org JSON-LD block (e.g. Organization, WebSite, or Article); every property added is net new capability for AI agents.

This is a structural classification, not a numeric score. A page can have a high SDQ score from rich properties without being graph-linked. The maturity level shows whether the schema is decoration, well-formed data, a real graph, or anchored in the linked-data web.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. Failure at any stage breaks the chain for all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Partial | 78 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 50 | No Schema.org structured data |
| 3 | Search & Compare | N/A | -- | No comparison content detected |
| 4 | Price Understanding | N/A | -- | No pricing content detected |
| 5 | Purchase Confidence | N/A | -- | No transaction forms detected |

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
State the overall MX Journey verdict as one short sentence. Options: "MX Compatible" (all 5 stages pass), "Partially Compatible" (some stages pass, some fail), "Not Compatible" (most stages fail). If a stage is N/A for this site type (e.g. Purchase Confidence on a content-only site), say so explicitly: "MX Compatible for this site type; Purchase Confidence is N/A".

FACTS (from mx_journey_stages.csv):
- Stages pass: 0 of 2
- Stages N/A: Search & Compare, Price Understanding, Purchase Confidence
-->

---

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 1/7 | 1 page(s) exceed the 250 KB threshold. Agents with limited fetch windows may stop reading before reaching the main content. | Largest page: 228 KB. Threshold: 250 KB. Page: https://typo3.org/association/contact |
| SPA Shell | Pass | 7/7 | Served HTML matches rendered HTML — no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: 4. 0 means served and rendered match. |
| Soft 404 | Pass | 7/7 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 7/7 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.00. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 7/7 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | 3/3 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 23% of the document on some pages. |
| Broken Code Fences | Pass | 7/7 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Pass | 7/7 | The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents. | 0 page(s) advertise format negotiation. |
| Cross-Host Redirect | Pass | 7/7 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 0 page(s) cross origin during redirect. |
| Generic Headings | Pass | 7/7 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | 3/3 | Actual prose content averages 82% of served bytes — well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 82%. Threshold: 30%. |
| Inline Tag Bloat | Fail | 5/7 | 5 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 11 element(s) > 500 bytes. Largest inline CSS: 4274 B. Largest inline JS: 387 B. See typo3-org-pipeline-inline-tag-bloat-pages.csv (5 pages). |
| Head Weight | Pass | 3/3 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.01. Average: 0.00. Threshold: 0.50. |

**Pipeline Survivability score:** 93/100

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
A 2-3 sentence narrative naming which resilience checks need attention on this site, what the practical consequence is for machines reading it, and which fix would have the largest effect. Use plain language. Frame the remaining work as opportunities to strengthen, not as failings.

FACTS (derived from pipeline_survivability.csv):
- Pages audited: 7
- Pipeline Survivability score: 93
- Checks flagged on any page: Truncation Risk, Inline Tag Bloat
- Check with the most pages flagged: Inline Tag Bloat
- Pages affected by that check: 5 of 7

DO_NOT:
- Use raw metric numbers without explanation.
- Frame remaining work as failings rather than opportunities to strengthen.
-->

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 20/100 | high | 216 | 75% | 7 | `div.frame-group-container` (136), `div.frame-group-inner` (132), `div.frame-container.frame-container-default` (132), `div.frame-inner` (132), `div.contentcontainer-column` (77) |

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
If both rows score 75 or above (band "low"), write a single-sentence affirmation that the site uses semantic HTML well and the agent has reliable structural cues. Skip the rest of this section.

If either row scores below 75, write 2-3 sentences:
- Sentence 1: name the bare-div ratio on the rendered surface and what the practical consequence is: machines lose structural context and fall back on positional inference to determine meaning.
- Sentence 2: identify whether the soup is structural (deep chains) or surface-wide (high bare ratio with shallow chains), and what each pattern indicates about the source pipeline (drag-and-drop builders, untyped component frameworks, late-stage JS injection).
- Sentence 3: name the cheapest first move: usually wrapping the obvious landmarks (header, nav, main, footer, aside) and giving the rest meaningful class names so the bare-div ratio drops without restructuring the layout.

FACTS (figures describe the WORST-CASE page in the audited set, not a site-wide average):
- Rendered score: 20, band high (worst page: https://typo3.org/association)
- Bare divs (rendered): 216 of 288 (75%)
- Deepest bare chain (rendered): 7
- Top bare selectors (rendered): `div.frame-group-container` (136), `div.frame-group-inner` (132), `div.frame-container.frame-container-default` (132), `div.frame-inner` (132), `div.contentcontainer-column` (77)
- Pages contributing to the Div Soup aggregation: 7

SCOPE:
- The bare-div counts describe the single WORST page in the audited set, not a site-wide aggregate. State that explicitly when the figures are above the "low" band. Name the worst-page URL when you cite the figures so the reader knows where the count came from.

DO_NOT:
- Change any number, percentage, URL, or selector from the FACTS above.
- Use the phrases "this is hard for machines to understand" or "brittle heuristics".
- Present the bare-div counts as if they apply to every audited page.
-->

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | No | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

3 of the five standard security headers are absent across every audited response: Content-Security-Policy (CSP), X-Frame-Options, HSTS (Strict-Transport-Security). Adding these at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 7 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| / | Yes | No | No | No | Yes |
| /association | Yes | No | No | No | Yes |
| /company | Yes | No | No | No | Yes |
| /association/membership | Yes | No | No | No | Yes |
| /governance-values | Yes | No | No | No | Yes |
| /association/funding-finances | Yes | No | No | No | Yes |
| /association/contact | Yes | No | No | No | Yes |

HTTPS: 7/7 | HSTS: 0/7 | CSP: 0/7 | X-Frame-Options: 0/7 | X-Content-Type-Options: 7/7

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | N/A | — |
| MX governance tags | N/A | — |
| Open Graph tags | N/A | — |
| Twitter Card tags | N/A | — |
| Skip link | N/A | — |
| llms-txt link tag | N/A | — |
| Canonical URL | 100% | — |
| Exactly 1 H1 | 86% | `/association/contact` |
| Code examples present | N/A | — |
| Self-contained sections | 100% | — |
| Error/troubleshooting docs | N/A | — |
| Lighthouse heading compliance | 71% | 2 |

**Overall Consistency:** 89%

## Content Consistency

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
2-3 sentences introducing Content Consistency for the audited set.

When the injected facts include concrete inconsistencies (mismatched organisation names, duplicated canonicals, out-of-range meta descriptions, divergent entity values across pages): name them in prose, with the affected page paths.

When the injected facts are SPARSE (no multi-page entity overlap, no inconsistencies surfaced): write exactly one neutral, client-facing sentence such as "The audited set shows consistent metadata patterns across pages, with no organisation-name or canonical-URL divergence flagged by the consistency check." Then stop.

DO_NOT:
- Explain what data was missing.
- Name the JSON sources.
- Ask for more data.
- Use the operator-facing phrases: "I cannot", "I will not", "I am unable", "please supply", "please provide", "to proceed", "could you paste", "no specific values have been supplied", "the facts you have referenced", "without fabricating". These mark the AI talking to the operator and must never reach the client. Rewrite the sentence in first-person consultant voice or delete it.
-->

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Consistent | Single unique page — no cross-page parity check possible |
| Canonical URL duplicates | Not tested | Canonical tag not present on audited pages |
| Meta description length | Not tested | Insufficient pages for distribution analysis |
| Cross-page entity spread (same entity on multiple pages) | No entities detected | Audit scope: 1 unique page |

---

## Inline Code Duplicates

We found 5 identical inline fragment(s) repeated across multiple pages, totalling 217 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes | Pages | Preview |
|------|-------|-------|---------|
| js | 373 | 7 | (function(w,d,s,l,i){w[l]=w[l]\|\|[];w[l].push({'gtm.start':   |
| css | 218748 | 2 | @keyframes ucOpacity{0%{opacity:0}100%{opacity:1}}.usercentr |
| css | 773 | 2 | .usercentrics-button .uc-corner-modal .uc-corner-modal-conte |
| css | 652 | 2 | #usercentrics-button .uc-banner-content {       background-c |
| css | 151 | 2 | #uc-corner-modal a[href], #uc-center-modal a[href], #uc-bann |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `typo3-org-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
A short (2-sentence) preamble before the SECTION branches. It must cover TWO distinct concerns, parallel not sequential:
1. Legal: accessibility legislation has converged on ISO 14289-1 (PDF/UA) as the technical baseline across major markets: the EAA (Directive (EU) 2019/882, in force 28 June 2025) in the EU, Section 508 of the US Rehabilitation Act, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent legislation in Australia and Canada all resolve to the same structural artefact. Mention EAA as the most precisely codified example but frame it as one instance of a global convergence.
2. Machine readability: an untagged PDF is also invisible to machines. Search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from a scanned or image-based PDF. A tagged PDF with a proper structure tree is machine-readable in the same way that semantic HTML is.

DO_NOT:
- Reduce this to a legal compliance note. Both concerns are real and independent.
-->

We linked no PDFs from the 7-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 27 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Structured Data improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a first-mover advantage in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | WCAG 2.1 AA compliance | Priority 1 items resolved, compliance risk removed |
| Full Optimization | Catalogue Visibility, Structured Data, Semantic Structure, Discovery Readiness, Metadata Stack, Security headers, and optional enhancements | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | Long-term competitive advantage in AI-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
2–3 sentences summarising the audit findings for Typo3 (https://typo3.org). Always refer to the site by its domain (https://typo3.org), never by the consultancy name. The highest-scoring dimension is SEO at 77/100 — open with this as a strength. Open with the dimension that scored HIGHEST on the scorecard as a genuine STRENGTH. "Leads" means highest score, not highest priority finding. A dimension scoring 10/100 is never "the strongest" — it is an opportunity. High priority ≠ high score; do not confuse the two. Then name 1–2 lowest-scoring dimensions as the key OPPORTUNITIES. Close with an invitation to act.

FACTS:
- Scores: AI Suitability: —/100; Accessibility: —/100; SEO: 77/100; Structured Data: 0/100; Discovery Readiness: 25/100
- Human visitors: served well
- Machine opportunity: structured data, discovery, metadata

DO_NOT:
- Say "site-wide" unless consistency was explicitly confirmed. 7 pages were audited; scope claims to "the audited set".
-->

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 91/100 | Excellent |
| Accessibility | 81/100 | Needs Improvement |
| SEO (all pages) | 77/100 | Excellent |
| SEO (content pages) | 76/100 | Excellent |
| MX Stack Completeness | 47/100 | Could Be Better |
| Structured Data Quality | 0/100 | Needs Improvement |
| Commerce Visibility | 0/100 | Needs Improvement |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 91/100 | Excellent |
| Semantic Ratio | 5% | Needs Improvement |
| Agent Readability | 68/100 | Good |
| Pipeline Survivability | 93/100 | Excellent |
| Cross-Page Consistency | 89% | Excellent |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| / (nav) | 84 | 90 | 45 | 85 | 85 |
| /association | 85 | 0 | 45 | 100 | 100 |
| /company | 75 | 90 | 45 | 99 | 99 |
| /association/membership | 85 | 70 | 45 | 100 | 100 |
| /governance-values | 85 | 60 | 45 | 100 | 100 |
| /association/funding-finances | 68 | 80 | 45 | 99 | 99 |
| /association/contact | 60 | 80 | 45 | 84 | 84 |

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 76/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: [N] links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 113   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: Typo3 (typo3.org)
- Pages audited: 7 of 76 in sitemap — sample run
- Date: 2026-05-19
- Scores: SEO 77/100 | Accessibility 81/100 | Discovery Readiness 25/100 | Structured Data 0/100
- Scope: 7 pages audited — write "across the audited set", NEVER "site-wide"
- Voice: write as "we" throughout (e.g. "we identified", "we recorded"); avoid "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots; it is the book's canonical term and we prefer it over "AI agents" in prose

WRITE:
2-3 paragraphs summarising image optimisation findings.

Pattern:
- Paragraph 1: Total images audited, format distribution (WebP / SVG / PNG / JPEG), alt-text coverage (count and percentage, name the number missing if any).
- Paragraph 2: Loading strategy. Distinguish the three states: `loading="lazy"`, `loading="eager"`, and no attribute set (the browser guesses). No attribute is NOT the same as eager: make that point if the site has any "no attribute" images.
- Paragraph 3 is handled mechanically by the double-lazy explanation block below.

Tone: Factual, warm, peer-to-peer. The reader is a developer: assume knowledge of image formats and loading attributes; explain only the less-common things (JS Lazy Pattern, Double Lazy).

FACTS:
- Total images: 71
- WebP: 3
- SVG: 52
- PNG: 14
- JPEG: 2
- With alt text: 51 (71.8%)
- Missing alt text: 20
- loading="lazy": 22
- loading="eager": 0
- no loading attribute: 49
- JS Lazy Pattern instances: 0
- Double Lazy instances: 0

DO_NOT:
- Change any number, percentage, URL, or count from the FACTS above.
- Write "site-wide", "across the site", or "throughout the site". Findings are scoped to the audited pages only — write "across the audited set", "on the audited pages", or "in the pages we reviewed".
- Duplicate the double-lazy explanation block below in your prose.
-->

> **Double-lazy loading pattern not detected** — no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** Metadata Stack Completeness (MSC) measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **TYPO3 CMS**. The main audit uses TYPO3 CMS-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 7 pages analysed | Platform: TYPO3 CMS | Analysis method: Hybrid (automated + manual verification) | robots.txt: Absent

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

**Date:** 19 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*
