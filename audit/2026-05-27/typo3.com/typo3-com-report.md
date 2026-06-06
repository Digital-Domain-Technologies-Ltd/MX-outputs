---
title: "Typo3: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-27"
modified: "2026-05-27"
client: "Typo3"
clientSlug: "typo3-com"
clientUrl: "https://typo3.com"
reportId: "typo3-com-WEB-AUDIT-20260527"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-27"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Typo3"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 85
accessibilityScore: 88
seoScore: 81
llmSuitabilityScore: 85
totalIssues: 43
pagesAudited: 12
version: "1.0"
confidential: true
mx:
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Typo3. Focus on the highest-leverage MX opportunities surfaced by the audit."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-05-27/typo3.com/typo3-com-report.pdf"
    description: "Generate PDF audit report for Typo3"
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
    sidecar: "typo3-com-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "typo3-com-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

# Typo3: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 27 May 2026\
**Report ID:** typo3-com-WEB-AUDIT-20260527

---

## About This Report

We audited 12 pages across typo3.com's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** Here we look at the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 12 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead, because Common Crawl (the archive underpinning most major LLM training datasets) prioritises HTML for its LLM-training subsets, so a plain-text llms.txt is unlikely to enter training corpora at the same rate as the rest of the site. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **85**/100 | `###############---` |
| Accessibility | **88**/100 | `################--` |
| SEO | **81**/100 | `###############---` |
| Machine Suitability | **85**/100 | `###############---` |
| MX Stack Completeness | **49**/100 | `#########---------` **(!)** |
| Agent Readability | **67**/100 | `############------` |
| Pipeline Survivability | **98**/100 | `##################` |

We audited 12 pages from typo3.com's 278-page sitemap as a representative sample, and the picture for human visitors is genuinely encouraging. Performance leads the scorecard as the strongest dimension across the audited set, giving real users a fast, responsive experience that reflects well on the platform's technical foundations. SEO scores at 81/100 (Excellent), which tells us the groundwork for organic discoverability is solid and well-maintained.

Before we turn to machine readiness, we want to name accessibility as a Priority 1 compliance item. Across the audited set we recorded 28 distinct WCAG AA issue types across 43 raw instances, all 43 flagged as critical by Pa11y. The remediation picture is more manageable than the raw count suggests: 22 of those instances trace to just two recurring template patterns, meaning a single theme-level correction per pattern resolves the majority of affected elements in one pass. Addressing these patterns is the most direct path to a more inclusive experience for all visitors. The headline opportunity beyond that sits firmly in machine readiness. typo3.com currently sits at MX Readiness Level 1 (Discoverable), meaning machines can find and parse the audited pages but cannot yet cite them as an attested source. The score thresholds for Citation-ready (Level 2) are within reach, but the lever is not raising Discovery Readiness or deepening Schema.org markup in isolation; the concrete next step is adding full MX governance fields, including mx:status, mx:contentType, mx:audience, canonicalUri, and provenance markers, so that machines can treat the content as a citable, trustworthy source rather than simply a readable one.

The path forward is clear and well-sequenced. We recommend addressing the two template-level accessibility patterns first to close the compliance exposure, then adding MX governance metadata and raising MSC above 60 and DR above 40 to unlock citation readiness. The groundwork typo3.com has already established for human visitors makes it well-placed to extend that same quality of signal to the machines that increasingly shape how audiences discover and trust content.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, typo3.com delivers a strong human experience, with Performance, Accessibility, and SEO each reaching the Excellent band, though the accessibility score leaves room to address the template-level patterns that account for a meaningful share of the raw WCAG instances we identified.

| Dimension | Rating | Grade | vs Peers |
|-----------|--------|-------|----------|
| UX / Navigation | Excellent | A | - |
| Performance | Excellent | A | median 83 |
| Accessibility (WCAG) | Excellent | A | median 81 |
| Trust and Credibility | Excellent | A | - |

### Machine Experience

Across the audited set of 12 pages, machines can discover and parse typo3.com content reliably, though the scores for Discovery Readiness, Structured Data Quality, and MX Stack Completeness indicate that citation-level readiness remains an opportunity to develop.

| Dimension | Score | Rating | Grade | vs Peers |
|-----------|-------|--------|-------|----------|
| Discovery Readiness | 25/100 | Needs Improvement | D | median 25 |
| Structured Data Quality | 0/100 | Needs Improvement | D | median 57 |
| MX Stack Completeness | 49/100 | Could Be Better | C | median 50 |
| Pipeline Survivability | 98/100 | Excellent | A | median 90 |

*Benchmark median drawn from a curated audit dataset.*

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
| **→** | 1 | Discoverable | Deliberate metadata, publisher identified | Agents can discover | **←** |
|  | 2 | Citation-ready | Full MX fields, governance, provenance | Agents can cite and attribute |  |
|  | 3 | Comparable / Attested | Cryptographic attestation, cross-source verifiable | Agents can search, compare, recommend |  |
|  | 4 | Transactable | Registered, priced, SLA-backed, alive | Agents can understand pricing and transact |  |
|  | 5 | Purchase-confident | Third-party audited, fiduciary-grade | Agents can guarantee accuracy at purchase |  |

**Current Level:** 1: Discoverable

**Evidence:** MX Stack Completeness 49/100 | Structured Data Quality 0/100 | Discovery Readiness 25/100 | Consistency 28%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so agents can cite as well as discover. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, typo3.com demonstrates a strong foundations in search visibility and accessibility, with SEO scoring 81/100 and accessibility reaching 88/100. These results reflect considered work at the template level and give the team a strong base from which to address the remaining opportunities in this report.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent - 1000ms average load time |
| SEO (content pages) | 81 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 2/5 | 2/5 headers present (HSTS, CSP, X-Frame-Options absent); 0 of 12 URLs carry all five |
| Structured Data | 0 | Needs Improvement - no Schema.org JSON-LD present yet |
| Heading Quality | 84 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 28% | 28% - same metadata patterns across every page |
| Agent access | 7/7 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Body content ratio averages 79%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We have prioritised the findings below by the degree to which each gap constrains what machines can do with typo3.com, so the opportunities that block the most downstream capability appear first. Structured Data Quality and Catalogue Visibility both at 0/100 lead the table because they determine whether machines can read, classify, and act on the content at all; Discovery Readiness at 25/100 and MX Stack Completeness at 49/100 follow as the next layer of capability to unlock across the audited set.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Iframe Missing Title Attribute, WCAG 2.4.1 (12 instances, 12 pages, Usercentrics SDK) | Compliance Risk | High | Low | Sighted keyboard users may miss consent iframe context across the audited set |
| 2 | Consent Banner Contrast Ratio 3.09:1, WCAG 1.4.3 (10 instances, 10 pages, Usercentrics SDK) | Compliance Risk | High | Low | Low-vision users risk missing or misreading the consent accept button across the audited set |
| 3 | Duplicate ID "Ebene_1", WCAG 4.1.1 (3 instances, 2 pages) | Compliance Risk | High | Low | All assistive-technology users may receive incorrect element references on affected pages |
| 4 | Form Missing Submit Button, WCAG 3.2.2 (1 instance, 1 page) | Compliance Risk | High | Low | Keyboard-only users are less likely to submit the case-study filter form successfully |
| 5 | Contrast Ratio 3.09:1 on Content Element, WCAG 1.4.3 (1 instance, 1 page) | Compliance Risk | Medium | Low | Low-vision users may miss text content on the affected page |
| 6 | Semantic Structure 22/100, High Bare-Div Ratio (https://typo3.com/, 222 of 310) | Compliance Risk | Medium | Medium | Machines and assistive technologies are less likely to parse document structure accurately on that page |
| 7 | Security Headers Incomplete, 2 of 5 Present | Cross-cutting | High | Low | Browsers and security scanners may flag typo3.com as a lower-trust origin |
| 8 | Discovery Readiness 25/100, Five Artefacts Absent (llms.txt, llms-full.txt, agent-card.json, ai.txt, humans.txt) | AI Opportunity | High | Medium | Machines may miss typo3.com as a crawlable, citable source; reduces agent confidence |
| 9 | Structured Data Quality 0/100, No Schema Markup Detected | AI Opportunity | High | Medium | Machines are less likely to surface structured facts from typo3.com in agent answers |
| 10 | MX Stack Completeness 49/100, Discovery and Governance Gaps | AI Opportunity | Medium | Medium | Machines may treat typo3.com as a lower-confidence source; reduces agent citation eligibility |

---

**Priority 1: Iframe Missing Title Attribute, WCAG 2.4.1 (12 instances, 12 pages, Usercentrics SDK)**

**Bucket:** Compliance Risk

**Finding:** Across the audited set, all 12 pages carry an untitled iframe injected by the Usercentrics consent-management SDK (`#cross-domain-consent-sharing-iframe`, hosted at `app.usercentrics.eu`). This element is not part of typo3.com's own template; it is injected at runtime by the Usercentrics SDK and therefore cannot be addressed through a theme or partial edit. Sighted keyboard users navigating by frame receive no label identifying the iframe's purpose, a direct breach of WCAG 2.4.1.

**What to change and why:**
- Engage Usercentrics to ship a fix in their consent SDK that supplies a non-empty, descriptive title attribute on the `#cross-domain-consent-sharing-iframe` element; this is the cleanest resolution because it removes the violation at source and requires no ongoing maintenance from the typo3.com team.
- If the SDK fix is delayed, apply a DOM-observer patch that detects the injected iframe after insertion and programmatically assigns a descriptive title; this addresses the WCAG 2.4.1 criterion immediately and can be removed once the vendor ships a native fix.
- Resolving this finding moves the Accessibility score by addressing the largest single-volume pattern across the audited set (12 instances on 12 pages).

**Effort:** Low

---

**Priority 2: Consent Banner Contrast Ratio 3.09:1, WCAG 1.4.3 (10 instances, 10 pages, Usercentrics SDK)**

**Bucket:** Compliance Risk

**Finding:** Across 10 of the 12 audited pages, the Usercentrics consent banner accept button (`#uc-btn-accept-banner`) presents text at a contrast ratio of 3.09:1 against its background, below the 4.5:1 minimum required by WCAG 1.4.3 for normal text. This button is injected by the Usercentrics SDK and does not exist in the typo3.com template. Low-vision users attempting to accept or decline consent may be unable to read the button label clearly.

**What to change and why:**
- Engage Usercentrics to update the contrast-ratio of the `#uc-btn-accept-banner` element in their SDK so that text meets the 4.5:1 minimum; the audit data identifies background colour #c25700 as a compliant target value.
- If the SDK cannot be configured to the required contrast through its theming options, apply a DOM-observer patch that overrides the injected button's background after insertion to reach the #c25700 value; this satisfies WCAG 1.4.3 until a vendor-side fix is available.
- Addressing this pattern across the 10 affected pages is a direct contribution to improving the 88/100 Accessibility score and reduces legal exposure under WCAG 1.4.3.

**Effort:** Low

---

**Priority 3: Duplicate ID "Ebene_1", WCAG 4.1.1 (3 instances, 2 pages)**

**Bucket:** Compliance Risk

**Finding:** We detected the duplicate ID value `Ebene_1` on 2 of the 12 audited pages, with 3 instances in total. Duplicate IDs violate WCAG 4.1.1 because assistive technologies rely on ID uniqueness to associate labels, descriptions, and landmarks with their target elements. When the same ID appears more than once, screen readers and other assistive technologies may resolve to the wrong element or fail to resolve at all, affecting all assistive-technology users on those pages. These instances trace to a template-level pattern, meaning a single targeted fix in the relevant template component resolves all occurrences across the audited set.

**What to change and why:**
- Audit the template component that renders SVG or graphic elements named `Ebene_1` and ensure each instance receives a unique ID value; because this traces to a template pattern, a single edit propagates the fix to every page sharing that component.
- Confirm after remediation that no remaining elements carry the `Ebene_1` ID more than once per page, as WCAG 4.1.1 requires all ID attribute values to be unique within a single document.
- Fixing duplicate IDs directly supports the Accessibility score and removes a WCAG 4.1.1 audit trail risk.

**Effort:** Low

---

**Priority 4: Form Missing Submit Button, WCAG 3.2.2 (1 instance, 1 page)**

**Bucket:** Compliance Risk

**Finding:** On the page containing the case-study filter (`#collapseCaseStudyFilter > div > form`), we identified a form element with no submit button. WCAG 3.2.2 requires forms to either submit on change or provide an explicit submit control so that all users, including those who rely solely on a keyboard, can complete submission. Without a submit button, keyboard-only users are less likely to submit the filter form successfully, and the predictability expectation of WCAG 3.2.2 is unmet.

**What to change and why:**
- Add an explicit submit control to the case-study filter form so that keyboard-only users can trigger submission without relying on change-event behaviour; this directly addresses WCAG 3.2.2.
- Verify that the form's submission behaviour is predictable and does not change the page context unexpectedly on input, as the same criterion covers unexpected context changes triggered by form controls.
- Resolving this finding removes a WCAG 3.2.2 violation on the affected page and improves the experience for all users who do not use a pointing device.

**Effort:** Low

---

**Priority 5: Contrast Ratio 3.09:1 on Content Element, WCAG 1.4.3 (1 instance, 1 page)**

**Bucket:** Compliance Risk

**Finding:** On one page in the audited set, a content element (`#c491 > div > div > div > div > div > div > div:nth-child(2)…`) presents text at a contrast ratio of 3.09:1, below the 4.5:1 threshold required by WCAG 1.4.3. Unlike the consent-banner contrast finding, this element is part of the page content and is addressable through the site's own template or content layer. Low-vision users may miss or misread the text on the affected page.

**What to change and why:**
- Update the background colour of the affected content element to reach a contrast ratio of at least 4.5:1; the audit data identifies #c25700 as a compliant background value.
- Where the colour is set in a shared style or component, updating it at the component level will prevent the same contrast gap from appearing on other pages that reuse the component.
- This fix directly satisfies WCAG 1.4.3 on the affected page and reduces legal exposure for low-vision users.

**Effort:** Low

---

**Priority 6: Semantic Structure 22/100, High Bare-Div Ratio (https://typo3.com/, 222 of 310)**

**Bucket:** Compliance Risk

**Finding:** We score Semantic Structure at 22/100 (High band). The figures cited here come specifically from the homepage, https://typo3.com/, which is the worst-performing page in the audited set: 222 of its 310 total elements are bare divs. Because the homepage is built from templates shared with other pages, the structural pattern is likely to recur across the audited set, even if the raw counts differ per page. Assistive technologies depend on semantic elements to communicate document structure; a high proportion of bare divs reduces the reliability of that structural signal. Machines parsing the page for entity relationships and content hierarchy are also less likely to derive an accurate document outline from a largely flat div tree.

**What to change and why:**
- Review the homepage template and replace presentational div wrappers with semantically appropriate elements (articles, sections, nav, header, footer, main, aside) where the content role warrants it; this directly reduces the bare-div ratio on https://typo3.com/ and, via the shared template, across the audited set.
- Prioritise structural landmarks first, as these have the greatest impact on assistive-technology navigation and on the machine-readable document outline.
- Improving Semantic Structure supports both the Accessibility score and machine parsing quality, making this a finding that moves multiple metrics simultaneously.

**Effort:** Medium

---

**Priority 7: Security Headers Incomplete, 2 of 5 Present**

**Bucket:** Cross-cutting

**Finding:** Across the audited set, only 2 of the 5 expected security headers are present: HTTPS and X-Content-Type-Options. The remaining three are absent from every one of the 12 audited URLs. Absent security headers reduce the trust signal typo3.com sends to browsers, security-scanning tools, and increasingly to machines that assess page trustworthiness as part of content-ranking heuristics.

**What to change and why:**
- Add the three absent security response headers at the server or CDN layer; because header configuration is typically a single server or infrastructure change, the fix propagates across all served pages without per-page edits.
- Prioritise headers that govern framing and cross-site behaviour, as these carry the most direct exposure for a CMS-vendor site likely to be embedded or referenced by third parties.
- Completing the security header set moves the score from 2 of 5 to 5 of 5 and removes a common audit-tool flag that reduces perceived trustworthiness.

**Effort:** Low

---

**Priority 8: Discovery Readiness 25/100, Five Artefacts Absent (llms.txt, llms-full.txt, agent-card.json, ai.txt, humans.txt)**

**Bucket:** AI Opportunity

**Finding:** We score Discovery Readiness at 25/100 (Needs Improvement). None of the five well-known discovery artefacts are reachable on typo3.com: llms.txt, llms-full.txt, agent-card.json, ai.txt, and humans.txt are all absent. Without these files, machines crawling typo3.com have no structured declaration of what content is available, what the site represents, or how agents should interact with it. This reduces the likelihood that typo3.com is selected as a source in agent-generated answers and directly suppresses the Discovery Readiness score.

**What to change and why:**
- Add llms.txt to declare the content inventory and intent for machine consumption; we recommend serving it as text/html, noting that our recommendation diverges from the llmstxt.org specification, which specifies plain text.
- Add llms-full.txt to extend the machine-readable content declaration with fuller page-level detail, increasing the depth of information available to crawling agents.
- Add agent-card.json to declare typo3.com's identity, capabilities, and preferred interaction patterns for AI agents; this is the primary route to unlocking citation eligibility at MX Readiness Level 2.
- Add ai.txt and humans.txt to complete the discovery artefact set; ai.txt signals machine-access preferences and humans.txt provides team and project attribution, both of which contribute to agent confidence in the source.

**Effort:** Medium

---

**Priority 9: Structured Data Quality 0/100, No Schema Markup Detected**

**Bucket:** AI Opportunity

**Finding:** We score Structured Data Quality at 0/100 (Needs Improvement) across the audited set. We detect no schema markup on any of the 12 audited pages. Without structured data, machines reading typo3.com pages cannot extract typed facts (product names, software descriptions, pricing, authorship, organisation identity) with confidence. This means typo3.com is less likely to be surfaced as a structured-fact source in agent answers, and rich-result eligibility in search is also absent.

**What to change and why:**
- Implement Schema.org markup covering at minimum the Organisation and SoftwareApplication types, as these are the most directly relevant to a CMS-vendor site and give machines typed identity and product facts to work with.
- Add markup for page-level content types (Article, FAQPage, BreadcrumbList as applicable) so that machines can classify individual pages and extract structured facts from them.
- Moving Structured Data Quality from 0/100 to a working baseline directly improves MX Stack Completeness (currently 49/100) and is a prerequisite for advancing beyond MX Readiness Level 1.
- Prioritise pages that represent typo3.com's core value proposition (product pages, feature pages) as these are the most likely candidates for agent citation once structured data is present.

**Effort:** Medium

---

**Priority 10: MX Stack Completeness 49/100, Discovery and Governance Gaps**

**Bucket:** AI Opportunity

**Finding:** We score MX Stack Completeness at 49/100 (Could Be Better). The score reflects gaps across three contributing categories: discovery artefacts (llms.txt, llms-full.txt, agent-card.json, ai.txt, and humans.txt are all absent, addressed in Priority 8), structured data coverage (SDQ is 0/100, addressed in Priority 9), and MX governance fields in page frontmatter (canonicalUri, contentType, audience, and status are not consistently present across the audited set). Machines assessing typo3.com as a potential citation source use these signals collectively; gaps in any category reduce overall agent confidence and keep typo3.com at MX Readiness Level 1, where agents can discover and parse pages but cannot yet cite the site as an attested source.

**What to change and why:**
- Once the discovery artefacts and structured data work in Priorities 8 and 9 are in progress, address the MX governance fields by adding canonicalUri, contentType, audience, and status declarations to page frontmatter; these fields give machines the context they need to classify content accurately and assess its authority.
- Treat MX Stack Completeness as the composite score it is: progress on discovery artefacts and structured data will lift it, but the governance fields represent an independent category that requires its own attention

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **SameAs links on Organisation**: adding `sameAs` properties pointing to typo3.com's Wikidata and LinkedIn entries on an Organisation entity would allow machines to cross-reference the brand across knowledge graphs and improve citation confidence when agents resolve the publisher's identity.

- **BreadcrumbList on deep content pages**: typo3.com serves a large page tree (278 URLs in the sitemap), and structured breadcrumb markup on deeper pages would give machines an unambiguous path context that URL structure alone cannot guarantee.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for AI agents, giving machines a machine-readable signal about how typo3.com content may be used in training and inference pipelines.

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
| URL probed | https://typo3.com |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No - server returned HTML regardless of Accept header |

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
| Internal navigation links | 57 links to same-site pages |
| MX governance tags | Absent |
| Schema.org JSON-LD | Absent (correct: should not claim valid page) |

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds on the crawler's second visit may be served from a warm CDN edge; the same page on a genuine cold visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section probes the slowest page from the crawl and a median-load control with three cache-busted GETs each, then compares those measurements against the crawler's original cold-cache baseline. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what someone with a warm cache experiences). The overall verdict for each page is the worse of the two, so a fast warmed median cannot paper over a slow cold-cache response.

**Method:** Each URL fetched three times with a `?_mx_cb={stamp}` cache-busting query parameter and `Cache-Control: no-cache`. For each page we compare both the crawler's cold-cache baseline and the median of three cache-busted GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://typo3.com/case-studies`. A first-time visitor sees the cold-cache cost: the crawler recorded 1485 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 247ms (HTTP 404), 168ms (HTTP 404), 427ms (HTTP 404); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Median-load control.** The median-load control page is `https://typo3.com/typo3-cms/why-typo3`. A first-time visitor sees the cold-cache cost: the crawler recorded 979 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 1068ms (HTTP 404), 160ms (HTTP 404), 187ms (HTTP 404); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Verdict:** First-visit response time is within healthy bounds. The returning-visitor view is Indeterminate for both pages because cache-busted re-probes were rate-limited (HTTP 429) or otherwise unsuccessful, so we cannot characterise the warmed-cache experience from this audit.

---

## Discovery Files

### robots.txt

```text
# robots.txt not found at origin
```

We found no robots.txt file at typo3.com, meaning machines receive no crawl guidance, no disallow paths, and no sitemap declaration from this endpoint.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 278 entries | Matches crawl count |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | No | Missing |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** Partial

The sitemap declares 278 URLs and earns a Partial grade, with lastmod and priority values present throughout but no changefreq attributes supplied to guide crawl scheduling.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms.txt at the site root, meaning machines that query typo3.com for a structured content index receive no site description, no page inventory, and no content policy. We recommend adding llms.txt to give machines the structured entry point they need to discover and interpret the content offered here.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt at typo3.com; the endpoint returns a 404 with no reference to it in the sitemap or the homepage head. Whether adding this file would deliver meaningful value depends on the depth of the full content set, which the audited sample does not yet measure, so we recommend treating its creation as conditional on a fuller content review.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

No Schema.org JSON-LD entities were detected across the audited set. Adding at least one typed entity per page (e.g. `Organisation` on the homepage, `Product` or `Article` on content pages) is the highest-impact improvement for machine readability.

Across the 12 pages we audited, structured data is limited. Machines cannot reliably extract entity data from these pages. Adding Schema.org JSON-LD with required properties is the highest-impact improvement, and the gaps identified on the audited sample may recur elsewhere in the full estate.

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

This is a clean-slate site with no Schema.org markup. There are no property gaps to report because no typed entities exist yet; every structured data addition is net new capability. The served HTML is machine-readable (served score 85/100); agents can extract content without JSON-LD.

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is: a Product, an Article, an Organisation: but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside any single page. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

**What this section checks.** Each signal below is derived deterministically from served HTML and JSON-LD on disk: no inference, no model judgement. Five structural signals fire per page: (i) self-promotional listicle (a ranked list is advertised whose first entry resolves to the publisher's own host), (ii) year-swap refresh (the title year is two or more years ahead of `dateModified`), (iii) first-party superlative (claims like "best", "leading", "high-quality" without an external reference), (iv) third-party citation count (outbound links to hosts other than the audited site), and (v) provenance metadata presence (`author`, `dateModified`, `publisher`). Pages whose body content runs over 400 words while emitting zero third-party citations carry no verifiable references and contribute to the blocker list. When the audited set is clean we omit the per-page table altogether and let the verdict line below carry the result.

### Templated clusters

No templated clusters detected at the audited scale. Pages in the audited set either carry product entities or have enough structural and textual variation to clear the stamp-out threshold.

### Provenance verdict

No provenance-gap blockers detected on the audited set. Pages clear the citation-readiness floor on the structural primitives we measure here.

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

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work. Maturity is a structural classification: it depends on what the markup carries (typed blocks, required properties, cross-references, external identifiers), not on the SDQ score the markup happens to earn. A page can sit at Level 1 with a high SDQ score and at Level 3 with a moderate one. Score and level are reported separately.

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

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. A break at any stage propagates to all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Partial | 78 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 50 | No Schema.org structured data |
| 3 | Search & Compare | Site type does not require | -- | No comparison content detected |
| 4 | Price Understanding | Site type does not require | -- | No pricing content detected |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

Partially Compatible; the three commerce-oriented stages (Search & Compare, Price Understanding, and Purchase Confidence) are not applicable to this site type, and neither of the two relevant stages currently pass.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

- **Truncation Risk** - Fail · 1/12
  - *Means:* 1 page(s) flag for truncation risk because their main content (the first <main>, <article>, or top heading) sits past the 50 KB safe-fetch offset, even though no page exceeds the 250 KB hard ceiling. Agents with limited fetch windows may stop reading before they reach prose.
  - *Data:* Largest page: 231 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. Page: https://typo3.com/partners
- **SPA Shell** - Pass · 12/12
  - *Means:* Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does.
  - *Data:* Max gap score: 9. 0 means served and rendered match.
- **Soft 404** - Pass · 12/12
  - *Means:* Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs.
  - *Data:* 0 soft-404 page(s) detected.
- **Boilerplate Burial** - Pass · 12/12
  - *Means:* Navigation and chrome do not dominate the page; main content is reachable without wading through overhead.
  - *Data:* Highest boilerplate-to-content ratio: 0.41. Threshold: < 10 (and < 80 KB of inline head bytes).
- **Tabbed Disclosure** - Pass · 12/12
  - *Means:* No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML.
  - *Data:* 0 page(s) with tab widgets.
- **Delayed Content Start** - Pass · 7/7
  - *Means:* Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily.
  - *Data:* Content starts at up to 32% of the document on some pages. Check applied to 7 of 12 audited pages; the remaining 5 pages were skipped by a size or eligibility gate.
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
- **Body Content Ratio** - Pass · 7/7
  - *Means:* Actual prose content averages 79% of served bytes - well above the 30% threshold. Pages are content-heavy, not overhead-heavy.
  - *Data:* Average: 79%. Threshold: 30%. Check applied to 7 of 12 audited pages; the remaining 5 pages were skipped by a size or eligibility gate.
- **Inline Tag Bloat** - Fail · 2/12
  - *Means:* 2 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches.
  - *Data:* 5 element(s) > 500 bytes. Largest single-page inline CSS block: 4365 B. Largest single-page inline JS block: 42011 B. See typo3-com-pipeline-inline-tag-bloat-pages.csv (2 pages).
- **Head Weight** - Pass · 7/7
  - *Means:* Head bytes are a small fraction of each page. Agents reach body content quickly.
  - *Data:* Max ratio: 0.18. Average: 0.02. Threshold: 0.50. Check applied to 7 of 12 audited pages; the remaining 5 pages were skipped by a size or eligibility gate.

**Pipeline Survivability score:** 98/100

Across the audited set, resilience is strong, with the two checks that warrant attention being Truncation Risk and Inline Tag Bloat, the latter touching a small number of the audited pages. When machines ingest content that carries excess inline tagging, they may spend parsing capacity on markup rather than meaning, which can reduce the fidelity of what they extract. Addressing Inline Tag Bloat across the affected pages would deliver the greatest single improvement to how reliably machines read and represent typo3.com content.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score (band) | Bare div stats | Top bare selectors |
|--------|--------------|----------------|--------------------|
| Rendered HTML | 22/100 (high) | 222 bare divs · 72% ratio · depth 7 | `div.frame-group-container` (93), `div.frame-group-inner` (93), `div.frame-container.frame-container-default` (93), `div.frame-inner` (93), `div.container` (35) |

On the worst-performing page we recorded, https://typo3.com/, the rendered surface carries a bare-div ratio of 72%, meaning machines lose structural context across that page and fall back on positional inference to determine meaning. The pattern here is both deep and surface-wide: a deepest bare chain of 7 combined with a high bare ratio points to a component framework where layout containers are stacked without semantic roles, a behaviour pattern consistent with untyped component wrappers rather than a drag-and-drop builder. The most direct first move is to wrap the obvious landmarks, header, nav, main, footer, and aside, with their corresponding semantic elements, then assign meaningful class names to the dominant bare selectors such as `div.frame-group-container`, `div.frame-group-inner`, `div.frame-container.frame-container-default`, and `div.frame-inner`, which together account for the bulk of the count; this reduces the bare-div ratio without requiring any layout restructuring.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | No | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

3 of the five standard security headers are absent on every audited response: HSTS (Strict-Transport-Security), Content-Security-Policy (CSP), X-Frame-Options. Adding them at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 12 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type Yes
- **`/case-studies`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type Yes
- **`/products-services`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type Yes
- **`/solutions`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type Yes
- **`/partners`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type Yes
- **`/typo3-cms/what-is-typo3`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type Yes
- **`/typo3-cms/why-typo3`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type Yes
- **`/typo3-cms/the-brand`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type Yes
- **`/typo3-cms/the-typo3-story`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type Yes
- **`/partner`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type Yes
- **`/privacy-policy`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type Yes
- **`/legal-notice`**: HTTPS Yes · HSTS No · CSP No · X-Frame No · X-Content-Type Yes

HTTPS: 12/12 | HSTS: 0/12 | CSP: 0/12 | X-Frame-Options: 0/12 | X-Content-Type-Options: 12/12

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 0% | 12 |
| MX governance tags | 0% | 12 |
| Open Graph tags | 0% | 12 |
| Twitter Card tags | 0% | 12 |
| Skip link | Inconsistent | 12 |
| llms.txt link tag | 0% | 12 |
| Canonical URL | 100% | - |
| Exactly 1 H1 | 83% | 2 |
| Code examples present | 0% | 12 |
| Self-contained sections | 100% | - |
| Error/troubleshooting docs | 0% | 12 |
| Lighthouse heading compliance | 0% | 12 |

**Overall Consistency:** 28%

## Content Consistency

The audited set shows consistent metadata patterns across pages, with no organisation-name or canonical-URL divergence flagged by the consistency check.

| Check | Result | Notes |
|-------|--------|-------|
| Organisation name parity | Consistent | Single unique page - no cross-page parity check possible |
| Canonical URL duplicates | Not tested | Canonical tag not present on audited pages |
| Meta description length | Not tested | Insufficient pages for distribution analysis |
| Cross-page entity spread (same entity on multiple pages) | No entities detected | Audit scope: 1 unique page |

---

## Inline Code Duplicates

We found 2 identical inline fragment(s) repeated across multiple pages, totalling 4 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes per fragment | Appears on N pages | Preview |
|------|-------------------:|-------------------:|---------|
| js | 373 | 12 | (function(w,d,s,l,i){w[l]=w[l]\|\|[];w[l].push({'gtm.start':   |
| css | 20 | 5 | .cls-1{fill:#f18518} |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `typo3-com-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src=".">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Across the audited set, we find that accessibility legislation has converged on ISO 14289-1 (PDF/UA) as the shared technical baseline: the EAA (Directive (EU) 2019/882, in force 28 June 2025) is the most precisely codified example, but Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada resolve to the same structural requirement. The machine-readability dimension is equally consequential and independent: an untagged or image-based PDF is opaque to search crawlers, AI systems, and automated pipelines in the same way that unsemantic markup is, while a properly tagged PDF with a complete structure tree gives machines the same foothold that well-formed HTML does.

1 PDF document(s) were identified by the audit: those linked from the crawled pages combined with those declared in the sitemap. PDFs whose only source is the sitemap are marked as such in the inventory. Accessibility legislation has converged on ISO 14289-1 (PDF/UA) as the technical baseline across major markets: the EAA (Directive (EU) 2019/882, in force 28 June 2025) in the EU, Section 508 in the US, UK PSBAR 2018, and equivalent laws in Australia and Canada all treat public-facing PDFs as regulated digital services for in-scope businesses. The MX Document Accessibility note specifies a three-layer conformance contract: **Tagged** (Level 1, ISO 14289-1 PDF/UA), **Declared** (Level 2, XMP `pdfuaid:part`), **Verified** (Level 3, recorded check).

**Scope note:** this inventory covers PDFs reachable from the crawled pages plus any `.pdf` URLs the sitemap declares. PDFs behind login forms, linked only from uncrawled pages, stored in unlinked directories that are kept out of the sitemap, or hosted on third-party domains still fall outside the crawl boundary. A wider-scope engagement is needed for a complete picture of accessibility exposure across the full document estate.

### Inventory

| URL | Source page | Has HTML alternative |
|-----|-------------|----------------------|
| https://typo3.com/fileadmin/TYPO3_org_assets/History/2014-04-06_15-40_Berlin_Manifesto_-_TYPO3.pdf | https://typo3.com/typo3-cms/the-typo3-story | No |

### Sample analysis: first PDF

We sampled the first PDF in the inventory with the heuristic checker. Findings:

| Layer | Status | What this means |
|-------|--------|-----------------|
| Level 1: Tagged (ISO 14289-1) | **fail** | Structure tree + `/Marked true` declaration |
| Level 2: Declared (XMP `pdfuaid:part`) | n/a | Public conformance claim in the document metadata |
| Level 3: Verified (independent check) | n/a: out of scope of this snapshot | Vendor or in-house validator run, recorded in `provenancePedigree.checks[]` |

**Accessibility exposure on this sample: high.** 

**This PDF does not meet the ISO 14289-1 (PDF/UA) baseline.** Accessibility legislation across major markets (EAA, Section 508, UK PSBAR) treats Level 1 as the structural floor for in-scope public PDFs; non-conformance with the baseline is the regulatory finding, not a stylistic note. We inspected the sample against the cached PDF bytes (sha256 `78cd5ed75f360ab7f515111565863a8f3fbacd14144c7f125283aff4359aba1a`); the verdict is reproducible offline against the same bytes.

### Future work: full PDF accessibility engagement

This is a one-PDF sample. The full PDF Accessibility Audit service runs the same checker over every document in the inventory and adds:

- per-document Level 1 / Level 2 / Level 3 reports with remediation guidance
- structural fixes (alt-text, reading order, tag tree) where the source pipeline supports them
- `provenancePedigree.checks[]` entries to record outcomes in the document metadata
- a regression-safe re-check schedule so each new release stays within the accessibility compliance boundary

Enforcement penalties vary by jurisdiction and enterprise size: the EAA (Directive (EU) 2019/882) carries fines ranging from low four-figure to six-figure euro sums depending on severity, and Section 508 and ADA Title III carry litigation exposure in the US market. The structural issues above are the cheapest layer to fix; most disappear at PDF generation time once the source pipeline is configured to emit tagged PDFs.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 43 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Structured Data improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4, P5, P6 (Compliance Risk) | Priority 1, 2, 3, 4, 5, 6 resolved — WCAG 2.1 AA accessibility compliance restored |
| Full Optimisation | P1, P2, P3, P4, P5, P6, P7, P8, P9, P10 (P1–P10) | Full machine readiness — every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://typo3.com performs well on technical SEO, scoring 81/100, which gives human visitors and search crawlers a strong foundations to work from. Structured Data and Discovery Readiness are the clearest opportunities, scoring 0/100 and 25/100 respectively, meaning machines currently have limited signals to parse, attribute, or act on the content they encounter. The team should review the findings that follow and prioritise the steps that will extend that foundation to machine audiences.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 85/100 | Excellent |
| Accessibility | 88/100 | Excellent |
| SEO (all pages) | 81/100 | Excellent |
| SEO (content pages) | 81/100 | Excellent |
| MX Stack Completeness | 49/100 | Could Be Better |
| Structured Data Quality | 0/100 | Needs Improvement |
| Commerce Visibility | 0/100 | Needs Improvement |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 84/100 | Excellent |
| Semantic Ratio | 5% | Needs Improvement |
| Agent Readability | 67/100 | Good |
| Pipeline Survivability | 98/100 | Excellent |
| Cross-Page Consistency | 28% | Could Be Better |

---

## Appendix A: Pages Audited

- **`/ (nav)`**: SEO 76 · A11y 95 · Back 45 · Served 95 · Rendered 100
- **`/case-studies`**: SEO 83 · A11y 80 · Back 45 · Served 65 · Rendered 76
- **`/products-services`**: SEO 69 · A11y 95 · Back 45 · Served 95 · Rendered 100
- **`/solutions`**: SEO 86 · A11y 85 · Back 45 · Served 95 · Rendered 95
- **`/partners`**: SEO 88 · A11y 75 · Back 45 · Served 55 · Rendered 55
- **`/typo3-cms/what-is-typo3`**: SEO 85 · A11y 90 · Back 45 · Served 95 · Rendered 95
- **`/typo3-cms/why-typo3`**: SEO 82 · A11y 90 · Back 45 · Served 95 · Rendered 95
- **`/typo3-cms/the-brand`**: SEO 83 · A11y 90 · Back 45 · Served 95 · Rendered 95
- **`/typo3-cms/the-typo3-story`**: SEO 88 · A11y 90 · Back 45 · Served 75 · Rendered 75
- **`/partner`**: SEO 63 · A11y 90 · Back 45 · Served 84 · Rendered 84
- **`/privacy-policy`**: SEO 88 · A11y 90 · Back 45 · Served 95 · Rendered 95
- **`/legal-notice`**: SEO 76 · A11y 90 · Back 45 · Served 79 · Rendered 79

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 81/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: 729 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 729   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set, we sampled 179 images in total. The format distribution skews strongly toward SVG and WebP, with 100 SVG files and 70 WebP files accounting for the clear majority, while the remaining 9 images are PNG. We recorded no JPEG images in the pages we reviewed. Alt-text coverage stands at 149 images carrying descriptive text, 83.2% of the total, leaving 30 images without alt attributes. For a developer audience, that gap is worth addressing methodically: decorative images need an empty alt to be correctly silenced for screen readers, while informative images need meaningful descriptions.

On loading strategy, 95 images carry an explicit `loading="lazy"` attribute, which is the correct signal for below-the-fold content. None carry `loading="eager"`. The remaining 84 images have no loading attribute set at all, and it is worth being precise here: the absence of a loading attribute is not equivalent to `loading="eager"`. When no attribute is present, the browser applies its own heuristics, typically loading the image eagerly if it appears early in the document, but the behaviour is not guaranteed or consistent across engines. For images that are intentionally above the fold and business-critical, setting `loading="eager"` explicitly removes that ambiguity and makes the intent legible to both the browser and future maintainers.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **TYPO3 CMS**. The main audit uses TYPO3 CMS-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 12 pages analysed | Platform: TYPO3 CMS | Analysis method: Hybrid (automated + manual verification) | robots.txt: Absent

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

\clearpage

## Practice What We Preach: This Audit's Own Evidence Chain

We hold this audit deliverable to the same MX standards we apply to your site. Every consequential step that produced this report (LLM-driven prose passes, deterministic gate verdicts, multi-agent attribution probes, repair iterations) is recorded in two adjacent JSON sidecars next to this PDF.

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `typo3-com-report.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `typo3-com-report.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload typo3-com-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the organisation distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it first to ourselves.

---

**Date:** 27 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*
