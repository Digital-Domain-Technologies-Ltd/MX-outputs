---
title: "Typo3: Website Analysis & Machine Readiness"
author: "Tom Cranstoun"
created: "2026-05-24"
modified: "2026-05-24"
client: "Typo3"
clientSlug: "typo3"
clientUrl: "https://typo3.com"
reportId: "typo3-WEB-AUDIT-20260524"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-05-24"
description: "Executive audit report analysing accessibility, performance, SEO, structured data, and AI agent compatibility for Typo3"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 85
accessibilityScore: 86
seoScore: 80
llmSuitabilityScore: 85
totalIssues: 35
pagesAudited: 7
version: "1.0"
confidential: true
mx:
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Typo3 covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Typo3", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  status: active
  contentType: audit-report
  audience: [humans, machines]
  runbook: "Executive audit report for Typo3. Focus on the highest-leverage MX opportunities surfaced by the audit."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/2026-05-24/typo3.com/typo3-report.pdf"
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
    sidecar: "typo3-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "typo3-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

# Typo3: Website Analysis & Machine Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 24 May 2026\
**Report ID:** typo3-WEB-AUDIT-20260524

---

<!-- ERROR_REPORT_SECTION:START -->
<!-- ERROR_REPORT_SECTION:END -->

## About This Report

We audited 7 pages across typo3.com's site using the Web Audit Suite. We analyse each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before finalising this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, we update what we look for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

**What we cover here, and what MX covers.** This audit covers the web estate: every page served over HTTP, analysed for metadata, structured data, accessibility, and machine readability. MX runs deeper. A machine-ready estate covers every document type an organisation publishes: PDFs, data feeds, API responses, structured documents, presentations: and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**About sample scope.** Findings throughout this report describe what we observed on the 7 pages we crawled. Verdicts scoped to the sample should not be extrapolated to the full estate without a wider audit; where a finding is structural (a missing security header, a soft 404 pattern, an llms.txt transport problem) we say so. Contact <info@cognovamx.com> to scope a full-estate engagement.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead, because Common Crawl (the archive underpinning most major LLM training datasets) prioritises HTML for its LLM-training subsets, so a plain-text llms.txt is unlikely to enter training corpora at the same rate as the rest of the site. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, we note the gap and the effort required to address it.

---

## Executive Summary

| | Score | |
|:---|---:|:---|
| Performance | **85**/100 | `###############---` |
| Accessibility | **86**/100 | `###############---` |
| SEO | **80**/100 | `##############----` |
| Machine Suitability | **85**/100 | `###############---` |
| MX Stack Completeness | **50**/100 | `#########---------` |
| Agent Readability | **71**/100 | `#############-----` |
| Pipeline Survivability | **96**/100 | `#################-` |

We audited seven pages of typo3.com against ten dimensions spanning human experience, accessibility compliance, and machine readability. The strongest dimension we recorded across the audited set is performance, and the SEO foundations at 80/100 (Excellent) reinforce that: canonical signals, meta structure, and crawlability are all working in favour of the people typo3.com is built to serve. The content is well-organised and the brand presents with authority.

Before we turn to machine readiness, we want to name an accessibility priority. Across the audited set, we recorded 35 raw instances spanning 20 distinct WCAG AA issue types, all flagged at critical severity. That figure is more manageable than it first appears: 17 of those instances trace to three recurring template patterns, meaning a single theme-level correction per pattern resolves the bulk of the raw count in one pass. We recommend treating this as a Priority 1 compliance item. Closing those 20 issue types protects users who rely on assistive technology and reduces audit-trail exposure.

The headline opportunity, once the accessibility work is under way, is machine readability. Structured Data Quality sits at 0/100 and Discovery Readiness at 25/100, which means the groundwork for machines to identify, interpret, and cite typo3.com content is still to be laid. AI Suitability on the served layer scores 85/100, so the content itself is well-positioned; the chance to capitalise on that is in adding the structured signals and discovery artefacts that give machines a reliable, unambiguous picture of what each page represents. Schema.org JSON-LD is the highest-leverage asset here, readable by every machine regardless of how content is rendered, and it is the natural next step after accessibility remediation.

\clearpage

## Balanced Scorecard

### Human Experience

Across the audited set, typo3.com delivers a strong human experience, with Performance, Accessibility, and SEO each sitting in the Excellent band, though the accessibility score leaves room to grow given the concentration of issues tracing to a small number of template patterns.

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Excellent | A |
| Trust and Credibility | Excellent | A |

### Machine Experience

Across the audited set, machines can reliably read and process content (Pipeline Survivability 96/100) but currently have limited ability to discover structured context or verify provenance, reflecting Discovery Readiness of 25/100, a Structured Data Quality of 0/100, and an MX Stack Completeness of 50/100.

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Discovery Readiness | 25/100 | Needs Improvement | D |
| Structured Data Quality | 0/100 | Needs Improvement | D |
| MX Stack Completeness | 50/100 | Could Be Better | C |
| Pipeline Survivability | 96/100 | Excellent | A |

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

**Evidence:** MX Stack Completeness 50/100 | Structured Data Quality 0/100 | Discovery Readiness 25/100 | Consistency 30%

**To reach the next level:** Add full MX fields, governance, and provenance metadata so agents can cite as well as discover. Raise MSC above 60 and DR above 40.

---

<div class="page-break"></div>

## What's Working Well

Across the audited set, typo3.com demonstrates real strengths in SEO and accessibility that provide a strong foundations for the improvements this report recommends. The scores we recorded give the team a credible platform to build from, and the patterns we identified show considered, deliberate construction rather than accidental results.

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent - 892ms average load time |
| SEO (content pages) | 81 | Excellent - titles, meta descriptions, canonical URLs in place |
| Security | 2/5 | 2/5 headers present (HSTS, CSP, X-Frame-Options absent); 0 of 7 URLs carry all five |
| Structured Data | 0 | Needs Improvement - no Schema.org JSON-LD present yet |
| Heading Quality | 90 | Excellent - single H1 per page, no level jumps, Lighthouse-compliant |
| Consistency | 30% | 30% - same metadata patterns across every page |
| Agent access | 7/7 | every tested AI user-agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Body content ratio averages 73%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

We have prioritised the findings below by their downstream impact on machines, with discovery and structured data gaps leading because they constrain every other layer of visibility before a crawler or agent ever reaches the content itself. The table covers the four areas where we see the clearest opportunity to strengthen typo3.com's presence across the audited set.

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Iframe element without title attribute (WCAG 2.4.1) on 7 of 7 audited pages | Compliance Risk | High | Low | Sighted keyboard users may miss the purpose of the cross-domain consent iframe |
| 2 | Banner button contrast ratio 3.09:1, below 4.5:1 (WCAG 1.4.3) on 7 of 7 audited pages | Compliance Risk | High | Low | Low-vision users are less likely to read the consent banner action |
| 3 | Duplicate id attribute "Ebene_1" (WCAG 4.1.1) on 2 of 7 audited pages | Compliance Risk | High | Low | All assistive-tech users may receive ambiguous element references |
| 4 | Body text contrast 3.09:1 on 1 audited page, below 4.5:1 (WCAG 1.4.3) | Compliance Risk | Medium | Low | Low-vision users on that page are less likely to read the affected text |
| 5 | Form without submit button (WCAG 3.2.2) on 1 audited page | Compliance Risk | Medium | Low | Keyboard users may not be able to submit the case-study filter form |
| 6 | Security headers: only 2 of 5 present (HTTPS, X-Content-Type-Options); 0 of 7 audited URLs carry all five | Cross-cutting | Medium | Low | Browsers and intermediaries have less defence against MIME sniffing, framing, and policy drift |
| 7 | Div soup on the homepage: rendered semantic score 22/100, 222 bare divs of 310 total elements | Cross-cutting | Medium | Medium | Machines parsing the worst-case page may take longer to identify the main content region |
| 8 | Structured Data Quality 0/100: no Schema.org JSON-LD present across the audited set | AI Opportunity | High | Medium | Machines may miss the Organisation, Article, and FAQ entities they need to cite typo3.com confidently |
| 9 | Discovery Readiness 25/100: llms.txt, llms-full.txt, agent-card.json, ai.txt, and humans.txt are absent | AI Opportunity | High | Low | Machines looking for a curated reading list or agent contract may fall back to crawling and risk missing the canonical entry points |
| 10 | MX Stack Completeness 50/100: discovery artefacts (above), structured data coverage, and MX governance fields (canonicalUri, contentType, audience, status) are missing from page frontmatter | AI Opportunity | Medium | Medium | Machines may not pick up provenance, content lifecycle, or intended audience signals when reading each page in isolation |

---

**Priority 1: Iframe Element Without Title Attribute, WCAG 2.4.1**

**Bucket:** Compliance Risk

**Finding:** Every audited page injects a cross-domain consent iframe (`#cross-domain-consent-sharing-iframe`) that lacks the `title` attribute WCAG 2.4.1 requires. The iframe is loaded by Usercentrics (host: `app.usercentrics.eu`) as part of the consent-management SDK; it is not part of the site's own template, so a theme edit will not fix it.

**What to change and why:**

- Engage Usercentrics to ship a fix in their consent SDK so the injected iframe carries a descriptive `title` attribute. This addresses WCAG 2.4.1 at the vendor layer, where the element actually lives.
- As an interim measure, add a small DOM-observer patch that sets a meaningful `title` on `#cross-domain-consent-sharing-iframe` after injection. The patch closes the WCAG 2.4.1 gap without waiting for an SDK release and removes the finding from sighted keyboard users' experience on every audited page.

**Effort:** Low

---

**Priority 2: Consent Banner Button Contrast 3.09:1, WCAG 1.4.3**

**Bucket:** Compliance Risk

**Finding:** The consent banner accept button (`#uc-btn-accept-banner`) on every audited page presents text against a background with a contrast ratio of 3.09:1, below the 4.5:1 minimum WCAG 1.4.3 requires for normal body text. The button is rendered by the Usercentrics consent SDK and sits outside the site's template.

**What to change and why:**

- Ask Usercentrics to update the banner button background to a darker tone (the Pa11y suggestion of `#c25700` would bring the ratio above 4.5:1). This addresses WCAG 1.4.3 at the SDK layer where the element is styled.
- If the SDK exposes a brand-colour override, set the banner button background through that hook to a value with a verified 4.5:1 ratio against the button text. Either path makes the consent action readable for low-vision users on every page that loads the banner.

**Effort:** Low

---

**Priority 3: Duplicate id Attribute "Ebene_1", WCAG 4.1.1**

**Bucket:** Compliance Risk

**Finding:** Two audited pages carry the id attribute value `Ebene_1` more than once across their SVG sprites (3 instances on 2 pages), in breach of WCAG 4.1.1's uniqueness requirement. Assistive technology and any DOM lookup keyed on this id will receive ambiguous references.

**What to change and why:**

- Audit the SVG sprite generator (the source of `Ebene_1`, a default Adobe Illustrator layer name) and re-export each icon with a unique id or strip layer ids on export. WCAG 4.1.1 compliance returns as soon as every id in the document is unique.
- Add a build-time check that fails the asset pipeline when duplicate ids appear in shipped HTML or SVG. This stops the same regression returning the next time icons are added.

**Effort:** Low

---

**Priority 4: Body Text Contrast 3.09:1 on /partners, WCAG 1.4.3**

**Bucket:** Compliance Risk

**Finding:** One block on the partners page (selector starting `#c491 > div > div > div > div > div > div > div:nth-child(2)`) renders text at a contrast ratio of 3.09:1 against its background, below the 4.5:1 minimum WCAG 1.4.3 requires. Unlike the consent banner finding, this one is in the site's own content.

**What to change and why:**

- Adjust the foreground or background colour on that block in the CMS template or the page-level styling so the contrast ratio meets or exceeds 4.5:1. The Pa11y output suggests `#c25700` for the orange tone in use; verify with a contrast checker after the change.
- Consider tightening the brand palette tokens so any pairing that resolves below 4.5:1 cannot be selected from the editor. This stops the same finding recurring on future pages and addresses WCAG 1.4.3 at the source.

**Effort:** Low

---

**Priority 5: Form Without Submit Button on /case-studies, WCAG 3.2.2**

**Bucket:** Compliance Risk

**Finding:** The case-study filter form (`#collapseCaseStudyFilter > div > form`) on the case-studies page lacks a submit button, which means keyboard users may not be able to submit it. WCAG 3.2.2 expects a deliberate submit control on every form.

**What to change and why:**

- Add an explicit submit `<button>` or `<input type="submit">` to the case-study filter form so keyboard users can submit it without relying on Enter-key shortcuts. The change addresses WCAG 3.2.2 directly on the affected page.
- Audit the template that renders filter forms so the same omission does not return on other listing pages added later.

**Effort:** Low

---

**Priority 6: Security Headers, 2 of 5 Present**

**Bucket:** Cross-cutting

**Finding:** Across the audited set, only two security response headers are consistently present (HTTPS and X-Content-Type-Options); 0 of 7 audited URLs carry all five recommended headers. Strict-Transport-Security, Content-Security-Policy, and Referrer-Policy are absent or inconsistent.

**What to change and why:**

- Set Strict-Transport-Security with a sensible max-age and `includeSubDomains` at the edge so browsers pin HTTPS for typo3.com and its subdomains. This closes the SSL-stripping window and is a standard expectation for enterprise SaaS in 2026.
- Define a Content-Security-Policy header that lists the third-party hosts the site actually loads (Usercentrics, analytics, font hosts). A first pass in `report-only` mode catches violations without breaking pages, and provides the evidence trail many procurement and AI-governance reviews now request.
- Add a Referrer-Policy of `strict-origin-when-cross-origin` so outbound links and assets disclose the minimum referrer needed. This is a one-line edge configuration with no functional impact.

**Effort:** Low

---

**Priority 7: Div Soup on the Homepage, Rendered Semantic Score 22/100 (222 Bare Divs of 310 Total Elements)**

**Bucket:** Cross-cutting

**Finding:** The worst-case page in the audited set (https://typo3.com/) carries 222 bare `<div>` elements out of 310 total elements, with a rendered semantic score of 22/100. The figures cited here come from the homepage specifically; because most pages share the template, the pattern is likely to recur across other landing surfaces.

**What to change and why:**

- Replace generic `<div>` wrappers with semantic landmarks where the role is known: `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`. Machines that parse the page can then identify the main content region without inferring it from class names.
- Consolidate decorative wrapper divs in the CMS template where they exist for styling alone. Replacing nested wrappers with direct CSS targeting reduces the bare-div count and helps the rendered semantic score climb past the 70 threshold.

**Effort:** Medium

---

**Priority 8: Structured Data Quality 0/100, no Schema.org JSON-LD**

**Bucket:** AI Opportunity

**Finding:** No Schema.org JSON-LD is present on any audited page. Schema Maturity sits at Level 0 ("Clean slate"). Machines have no attested entities to cite when answering questions about typo3.com, its products, its case studies, or its partner network.

**What to change and why:**

- Add an Organization JSON-LD block to every page, declaring `name`, `url`, `logo`, and the `sameAs` identifiers that link typo3.com to its Wikidata, LinkedIn, and Twitter/X profiles. This is the single highest-leverage change because it gives every downstream entity an attested parent to reference.
- Add an Article (or BlogPosting) JSON-LD block to each editorial page, with `headline`, `author`, `datePublished`, `dateModified`, and the same Organization as `publisher`. This moves the schema maturity score to Level 1 and gives machines a citation anchor with date provenance.
- Add a Product or SoftwareApplication JSON-LD block to the product surfaces (TYPO3 CMS, TYPO3 Console, TYPO3 v13). Machines asked to compare CMS options need a structured anchor for each product, not just prose.

**Effort:** Medium

---

**Priority 9: Discovery Readiness 25/100, Discovery Artefacts Absent**

**Bucket:** AI Opportunity

**Finding:** Discovery Readiness scores 25/100 across the audited set. The site is missing every machine-facing discovery artefact we look for: llms.txt, llms-full.txt, agent-card.json, ai.txt, and humans.txt are absent.

**What to change and why:**

- Add an llms.txt file at the site root with a curated reading list (homepage, product pages, key blog posts, key documentation entry points). Machines looking for a fast way into typo3.com's canonical content can read this in a single fetch instead of inferring it from sitemap and crawl behaviour.
- Add an agent-card.json at `/.well-known/agent-card.json` declaring the site's policies for AI agents (allowed use cases, attribution requirements, contact endpoint). This gives machines a contract surface before they fetch any prose, and provides the audit-trail entry many AI-governance regimes (EU AI Act, UK ICO guidance) increasingly expect.
- Add a humans.txt file naming the team behind typo3.com and the TYPO3 Association. This is a lightweight signal that complements the Organization JSON-LD above and gives machines a deterministic place to find authorship attribution.

**Effort:** Low

---

**Priority 10: MX Stack Completeness 50/100, Governance Fields Missing**

**Bucket:** AI Opportunity

**Finding:** MX Stack Completeness sits at 50/100 across the audited set. The components contributing to this score are the discovery artefacts named in Priority 9, the structured data coverage named in Priority 8, and the MX governance fields that should appear in each page's frontmatter or as meta tags: `canonicalUri`, `contentType`, `audience`, and `status`.

**What to change and why:**

- Add the four MX governance fields to every page either through the CMS template (as `<meta name="mx:canonicalUri">`, `<meta name="mx:contentType">`, `<meta name="mx:audience">`, `<meta name="mx:status">`) or through the page-level metadata layer the CMS already manages. Machines reading the page in isolation then receive provenance, lifecycle, and audience signals without crawling related pages first.
- Document the controlled vocabulary used for `contentType` and `status` (for example: `info-doc`, `blog-post`, `case-study` and `active`, `archive`, `draft`) in the CMS author guide so editors apply the same values consistently. The fierce-critic and verifier passes on future audits will then see a coherent metadata stack rather than ad-hoc values per page.

**Effort:** Medium

### Optional Enhancements

These are not issues but areas where additional metadata or patterns would strengthen this site's machine readiness.

- **sameAs links on Organisation**: Adding `sameAs` properties pointing to Typo3's Wikidata and LinkedIn entries on the root `Organisation` entity would let machines resolve the brand to authoritative external records, improving citation confidence in agent answers.

- **BreadcrumbList on deep content pages**: Pages sitting several levels below the root currently rely on URL path alone for hierarchical context; adding `BreadcrumbList` markup gives machines an explicit trail and supports richer search-result presentations.

- **Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for AI agents.

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

**Slowest.** The slowest page is `https://typo3.com/partners`. A first-time visitor sees the cold-cache cost: the crawler recorded 1023 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 380ms (HTTP 404), 157ms (HTTP 404), 148ms (HTTP 404); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Median-load control.** The median-load control page is `https://typo3.com/products-services`. A first-time visitor sees the cold-cache cost: the crawler recorded 838 ms on its initial fetch. **First-visit verdict: Healthy**. Three cache-busted re-probes that followed returned 113ms (HTTP 404), 149ms (HTTP 404), 145ms (HTTP 404); no median is reported because no sample returned a usable timing. **Returning-visitor verdict: Indeterminate**.

**Verdict:** First-visit response time is within healthy bounds. The returning-visitor view is Indeterminate for both pages because cache-busted re-probes were rate-limited (HTTP 429) or otherwise unsuccessful, so we cannot characterise the warmed-cache experience from this audit.

---

## Discovery Files

### robots.txt

```text
# robots.txt not found at origin
```

We found no robots.txt file on typo3.com, meaning machines receive no crawl directives and no sitemap reference to guide their indexing of the domain.

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 276 entries | Matches crawl count |
| `<lastmod>` | Yes | Varied dates |
| `<changefreq>` | No | Missing |
| `<priority>` | Yes | Differentiated values |

**Sitemap grade:** Partial

We grade the sitemap Partial: it covers 276 URLs and carries both lastmod dates and priority values, yet the absence of changefreq attributes leaves machines without explicit guidance on how frequently each URL is expected to change.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We find no llms.txt reachable on typo3.com, meaning machines that consult this file to understand the site's purpose, page inventory, and content policy receive no structured guidance. We recommend adding llms.txt to give machines a clear entry point into what typo3.com covers and how its content may be used.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We find no llms-full.txt on typo3.com, with the endpoint returning a 404 across all discovery checks. Whether adding it would materially serve machines depends on the depth of the full site's content, which our audited sample of 7 pages does not yet measure; we recommend treating it as a conditional next step, to be prioritised once a broader crawl confirms the volume of indexable content.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

### Other discovery files detected

No additional registered `/.well-known/` or root discovery files were detected on this site beyond the ones reported in their own sections above.

*Reference: the [IANA Well-Known URIs registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) lists the full set of registered `/.well-known/` paths and their RFCs. If a path on that registry would be useful here, consider implementing it.*

## Structured Data Inventory

No Schema.org JSON-LD entities were detected across the audited set. Adding at least one typed entity per page (e.g. `Organisation` on the homepage, `Product` or `Article` on content pages) is the highest-impact improvement for machine readability.

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

This is a clean-slate site with no Schema.org markup. There are no property gaps to report because no typed entities exist yet; every structured data addition is net new capability. The served HTML is machine-readable (served score 85/100); agents can extract content without JSON-LD.

---

## Provenance Gap

**What we mean by provenance gap.** A provenance gap is the structural distance between a page that *describes* a claim and a page that *evidences* it. Schema markup tells a machine what an entity is: a Product, an Article, an Organisation: but it cannot tell a machine who made the assertion, when, or whether the claim is supported by anything outside any single page. AI systems that cite content increasingly need both halves: the typed assertion and a verifiable trail behind it. A page with rich JSON-LD but no third-party links, no `dateModified`, no `author`, and a year-swapped title is structurally indistinguishable from a page that was generated to fill an index slot. The Provenance Gap concept and its full taxonomy are documented at <https://mx.allabout.network/blog/the-provenance-gap.html>.

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

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. Failure at any stage breaks the chain for all subsequent stages.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Partial | 78 | Crawlable with semantic HTML |
| 2 | Citation | Partial | 50 | No Schema.org structured data |
| 3 | Search & Compare | Site type does not require | -- | No comparison content detected |
| 4 | Price Understanding | Site type does not require | -- | No pricing content detected |
| 5 | Purchase Confidence | Site type does not require | -- | No transaction forms detected |

Across the audited set, typo3.com is Not Compatible with the MX Journey; both assessed stages fall short of passing, and Search & Compare, Price Understanding, and Purchase Confidence are not applicable to this site type.

---

## Agent Reading Pipeline

Scoring a machine's metadata is not the same as scoring whether a machine can read each page at all. Pipeline Survivability runs eleven reading-resilience checks on every audited page. Each one asks whether a page survives a known agent-reading risk: truncation by the agent's fetch tool, summarisation by the relevance layer, JavaScript-only content, tab disclosure, soft 404s, broken code fences, content negotiation drift, cross-host redirects, generic headings, content that begins too far into the document, or overhead-heavy pages where scripts, styles, and images outweigh actual content.

Every check runs on every audited page. The aggregate score weights truncation resilience, SPA resilience, and proper 404 signalling most heavily: these three determine whether each page is reachable to the agent at all. Boilerplate burial, tabbed disclosure, and delayed content start carry medium weight. The remaining checks contribute to the score but any single one slipping is less critical on its own.

| Resilience Check | Status | Pages | What It Means | Data |
| ---------------- | ------ | ----- | ------------- | ---- |
| Truncation Risk | Fail | 1/7 | 1 page(s) flag for truncation risk because their main content (the first <main>, <article>, or top heading) sits past the 50 KB safe-fetch offset, even though no page exceeds the 250 KB hard ceiling. Agents with limited fetch windows may stop reading before they reach prose. | Largest page: 231 KB. Thresholds: 250 KB hard ceiling; 50/75/100 KB content-offset windows. Page: https://typo3.com/partners |
| SPA Shell | Pass | 7/7 | Served HTML matches rendered HTML - no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: 11. 0 means served and rendered match. |
| Soft 404 | Pass | 7/7 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 7/7 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.40. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 7/7 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Delayed Content Start | Pass | 4/4 | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 32% of the document on some pages. Check applied to 4 of 7 audited pages; the remaining 3 pages were skipped by a size or eligibility gate. |
| Broken Code Fences | Pass | 7/7 | All fenced code blocks are properly balanced. No parser-confusion risk for agents reading prose that contains code examples. | 0 page(s) with unbalanced fenced code blocks. |
| HTTP Content Negotiation (Vary) | Pass | 7/7 | The server returns a single content type per URL. No Vary-on-Accept ambiguity that could confuse agents. | 0 page(s) advertise format negotiation. |
| Cross-Host Redirect | Pass | 7/7 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 0 page(s) cross origin during redirect. |
| Generic Headings | Pass | 7/7 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | 4/4 | Actual prose content averages 73% of served bytes - well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 73%. Threshold: 30%. Check applied to 4 of 7 audited pages; the remaining 3 pages were skipped by a size or eligibility gate. |
| Inline Tag Bloat | Fail | 2/7 | 2 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 5 element(s) > 500 bytes. Largest single-page inline CSS block: 4365 B. Largest single-page inline JS block: 41981 B. See typo3-pipeline-inline-tag-bloat-pages.csv (2 pages). |
| Head Weight | Pass | 4/4 | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.18. Average: 0.03. Threshold: 0.50. Check applied to 4 of 7 audited pages; the remaining 3 pages were skipped by a size or eligibility gate. |

**Pipeline Survivability score:** 96/100

Across the audited set, pipeline survivability is strong at 96/100, with two checks meriting attention: Truncation Risk and Inline Tag Bloat. When machines parse pages carrying excess inline tagging, the signal-to-noise ratio in the extracted content can drop, making it harder for automated readers to isolate the core message. Reducing Inline Tag Bloat, which we flagged on two of the seven audited pages, would deliver the broadest improvement to machine readability across the audited set.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check catalogue, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup: naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, machines lose structural context and fall back on positional inference ("the third div from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is gone.

We run the Div Soup check on both served and rendered HTML so we can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Rendered HTML | 22/100 | high | 222 | 72% | 7 | `div.frame-group-container` (85), `div.frame-group-inner` (85), `div.frame-container.frame-container-default` (85), `div.frame-inner` (85), `div.partner-list-item__types` (20) |

Across the audited set, the worst page (https://typo3.com/) carries a rendered bare-div ratio of 72%, meaning machines lose structural context on that page and must rely on positional inference to determine meaning. The pattern here is surface-wide rather than deeply chained: a rendered depth of 7 is moderate, but selectors such as `div.frame-group-container`, `div.frame-group-inner`, `div.frame-container.frame-container-default`, and `div.frame-inner` each appearing 85 times point to a component framework that wraps layout concerns in untyped container divs rather than communicating purpose through element choice. The most direct first move is to replace the outermost layout wrappers with named landmark elements where appropriate, and to ensure the remaining container divs carry class names that signal role rather than visual position, which would bring the bare-div ratio down without requiring any restructuring of the existing layout.

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport |
| HSTS | No | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | No | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

3 of the five standard security headers are absent across every audited response: HSTS (Strict-Transport-Security), Content-Security-Policy (CSP), X-Frame-Options. Adding these at the origin-server or CDN edge closes the corresponding attack surfaces without touching application code.

**Coverage:** 0 of 7 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

| Page | HTTPS | HSTS | CSP | X-Frame | X-Content-Type |
|------|-------|------|-----|---------|----------------|
| / | Yes | No | No | No | Yes |
| /case-studies | Yes | No | No | No | Yes |
| /products-services | Yes | No | No | No | Yes |
| /solutions | Yes | No | No | No | Yes |
| /partners | Yes | No | No | No | Yes |
| /typo3-cms/what-is-typo3 | Yes | No | No | No | Yes |
| /typo3-cms/why-typo3 | Yes | No | No | No | Yes |

HTTPS: 7/7 | HSTS: 0/7 | CSP: 0/7 | X-Frame-Options: 0/7 | X-Content-Type-Options: 7/7

---

## Cross-Page Consistency

| Pattern | Coverage | Pages missing it |
|---------|----------|------------------|
| Schema.org JSON-LD | 0% | 7 |
| MX governance tags | 0% | 7 |
| Open Graph tags | 0% | 7 |
| Twitter Card tags | 0% | 7 |
| Skip link | 0% | 7 |
| llms.txt link tag | 0% | 7 |
| Canonical URL | 100% | - |
| Exactly 1 H1 | 100% | - |
| Code examples present | 0% | 7 |
| Self-contained sections | 100% | - |
| Error/troubleshooting docs | 0% | 7 |
| Lighthouse heading compliance | 0% | 7 |

**Overall Consistency:** 30%

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

We found 6 identical inline fragment(s) repeated across multiple pages, totalling 648 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

| Type | Bytes per fragment | Appears on N pages | Preview |
|------|-------------------:|-------------------:|---------|
| js | 373 | 7 | (function(w,d,s,l,i){w[l]=w[l]\|\|[];w[l].push({'gtm.start':   |
| css | 20 | 5 | .cls-1{fill:#f18518} |
| css | 218748 | 4 | @keyframes ucOpacity{0%{opacity:0}100%{opacity:1}}.usercentr |
| css | 773 | 4 | .usercentrics-button .uc-corner-modal .uc-corner-modal-conte |
| css | 652 | 4 | #usercentrics-button .uc-banner-content {       background-c |
| css | 151 | 4 | #uc-corner-modal a[href], #uc-center-modal a[href], #uc-bann |

*The full inventory (every fragment with its hash and the page URLs that carry it) is preserved alongside this report as `typo3-inline-code-duplicates.csv`.*

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## PDF Documents: Accessibility and Machine Readability

Across the audited set, we identify PDF accessibility as a concern that operates on two independent axes: legal and structural. Accessibility legislation has converged globally on ISO 14289-1 (PDF/UA) as the technical baseline, with the EAA (Directive (EU) 2019/882, enforceable from 28 June 2025) representing the most precisely codified instance of a requirement that also appears in Section 508, the UK Public Sector Bodies Accessibility Regulations 2018, and equivalent frameworks in Australia and Canada; at the same time, an untagged PDF is opaque to machines, because search crawlers, AI systems, and automated pipelines cannot extract text, entities, or structure from a scanned or image-based document in the way that a properly tagged PDF with a complete structure tree permits.

We linked no PDFs from the 7-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

**Contact us for a wider PDF audit.** If you publish datasheets, white papers, investor documents, product manuals, accessibility statements, annual reports, or any other public-facing documents that were not reached by this sample, a focused PDF audit walks the full estate, checks every document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified), and produces a per-document verdict you can act on. The audit you are reading covers HTML structure, structured data, and machine-readability across the crawled pages; the document layer is a separate engagement we run on request.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 35 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Structured Data improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | WCAG 2.1 AA compliance | Priority 1 items resolved, compliance risk removed |
| Full Optimisation | Catalogue Visibility, Structured Data, Semantic Structure, Discovery Readiness, MX Stack Completeness, Security headers, and optional enhancements | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | Every document, every format, every machine |

---

## Summary of Findings

Across the audited set, https://typo3.com performs well on SEO, scoring 80/100, giving human visitors a strong foundations in search visibility and on-page metadata. The clearest opportunities lie in Structured Data, which scores 0/100, and Discovery Readiness at 25/100, both of which limit how effectively machines can read, interpret, and surface content from the site. We welcome the chance to walk through the full findings and outline a prioritised path forward.

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 85/100 | Excellent |
| Accessibility | 86/100 | Excellent |
| SEO (all pages) | 80/100 | Excellent |
| SEO (content pages) | 81/100 | Excellent |
| MX Stack Completeness | 50/100 | Could Be Better |
| Structured Data Quality | 0/100 | Needs Improvement |
| Commerce Visibility | 0/100 | Needs Improvement |
| Discovery Readiness | 25/100 | Needs Improvement |
| Heading Quality | 90/100 | Excellent |
| Semantic Ratio | 3% | Needs Improvement |
| Agent Readability | 71/100 | Good |
| Pipeline Survivability | 96/100 | Excellent |
| Cross-Page Consistency | 30% | Could Be Better |

---

## Appendix A: Pages Audited

| Page | SEO | A11y | Back | Served | Rendered |
|------|-----|------|------|--------|----------|
| / (nav) | 76 | 90 | 45 | 95 | 100 |
| /case-studies | 83 | 80 | 45 | 65 | 76 |
| /products-services | 69 | 90 | 45 | 95 | 100 |
| /solutions | 83 | 85 | 45 | 95 | 100 |
| /partners | 88 | 75 | 45 | 55 | 60 |
| /typo3-cms/what-is-typo3 | 82 | 90 | 45 | 95 | 100 |
| /typo3-cms/why-typo3 | 79 | 90 | 45 | 95 | 100 |

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 81/100.

---

## Appendix B: Link Inventory

We recorded every internal link found on every audited page: 451 links in total. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 451   |
| External links                  | 0     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

Across the audited set, we catalogued 143 images in total. The format breakdown skews heavily towards SVG and WebP: 80 images are SVG, 54 are WebP, and the remaining 9 are PNG. We found no JPEG images in the pages we reviewed. Alt-text coverage stands at 113 images, or 79.0% of the total, leaving 30 images without descriptive text. Those gaps matter both for screen-reader users and for machines attempting to interpret visual content without a text anchor.

On loading strategy, 94 images carry an explicit `loading="lazy"` attribute, which is a strong foundations. What draws our attention is the 49 images with no loading attribute set at all. It is worth being clear about what that means in practice: the absence of a loading attribute is not the same as `loading="eager"`. The browser makes its own heuristic decision about when to fetch those images, and that behaviour varies by browser, viewport, and position in the document. With no `loading="eager"` images present across the audited set, the split is effectively between explicitly deferred images and images left to the browser's discretion. For images appearing above the fold, that ambiguity is usually benign; for images further down the page, an explicit `loading="lazy"` attribute gives more predictable performance gains.

> **Double-lazy loading pattern not detected** - no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers and HTML signatures. Detected platform: **TYPO3 CMS**. The main audit uses TYPO3 CMS-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 7 pages analysed | Platform: TYPO3 CMS | Analysis method: Hybrid (automated + manual verification) | robots.txt: Absent

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

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the file the step produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the organisation. This PDF carries the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `typo3-report.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain lives at `typo3-report.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload typo3-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output carries a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone re-running the audit can verify byte-for-byte what we did.

The PDF itself is a structured, tagged document. It conforms to ISO 14289-1 (PDF/UA-1) at Level 2 with `pdfuaid:Part=1` declared in the XMP packet and a complete `/StructTreeRoot` carrying the document's logical reading order. This is the accessibility-conformance grade that the European Accessibility Act (EAA Directive 2019/882) expects of digital documents distributed to citizens of the EU and EEA. Producing the PDF at Level 2 is not a compliance grant; conformance with the EAA remains a legal duty of the organisation distributing the document. What the tagged PDF provides is the structural prerequisite the EAA expects: a document a screen reader can traverse in semantic order and a regulator can verify with any conforming PDF/UA validator.

This practice is what MX expects of every artefact in the field. We apply it first to ourselves.

---

**Date:** 24 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a quote for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*
