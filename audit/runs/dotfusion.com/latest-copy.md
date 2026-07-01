---
title: "Dotfusion"
subtitle: "Website Analysis & Machine Readiness"
type: report
author: "Tom Cranstoun"
created: "2026-07-01"
modified: "2026-07-01"
client: "Dotfusion"
clientSlug: "dotfusion-com"
clientUrl: "https://dotfusion.com"
reportId: "dotfusion-com-WEB-AUDIT-20260701"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-07-01"
auditCommand: "node scripts/audit-pipeline.js https://dotfusion.com --pages 10"
description: "Executive audit report reviewing accessibility, performance, SEO, structured data, and AI agent compatibility for Dotfusion"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 85
accessibilityScore: 74
seoScore: 83
llmServedHtmlScore: 100
agentReadabilityScore: 71
a11yIssues: 98
htmlPagesAudited: 10
version: "1.0"
pipelineVersion: "1.1.0"
confidential: true
mx:
  status: active
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-07-01/dotfusion.com/dotfusion-com-report.md
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Dotfusion covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Dotfusion", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  # The single cog that manages this pipeline artefact, so a reader never
  # has to infer the steward (scripts/lib/managed-by.cjs is the resolver).
  x-mx-managedBy: mx-audit.cog.md
  x-mx-generatedBy: "mx-reginald/audit/bin/infill-report.js"
  x-mx-canonicalSource: "Audit results for https://dotfusion.com on 2026-07-01 - fix via generator, not this file"
  runbook: "Executive audit report for Dotfusion. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in the top-level auditCommand field. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-07-01/dotfusion.com/dotfusion-com-report.md', which validates the report then renders it through scripts/bin/mx.pdf.sh."
  generate:
    command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-07-01/dotfusion.com/dotfusion-com-report.md"
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
**Date:** 1 July 2026\
**Report ID:** dotfusion-com-WEB-AUDIT-20260701

---

\clearpage

## About This Report

We audited 10 pages across dotfusion.com's site using the Web Audit Suite. We also reviewed the site's discovery files (sitemap.xml, llms.txt). We review each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image efficiency, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before completing this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as characteristics of that platform rather than site-specific gaps. When new agent patterns emerge, we update what we look for.

**How we build it.** We use scripted SOPs running deterministic checks rather than inference. The crawl, the served-versus-rendered comparison, the structured-data extraction, the accessibility passes, the discovery-file probes, the platform fingerprinting and the per-section scoring all run as scripts producing byte-identical outputs on the same input. A small number of stages run a judgement pass over the resulting report; that is the only inference layer. Those judgement passes can run against a local model, so the whole audit runs inside the organisation's own network with nothing leaving it: relevant where content is regulated or privacy-sensitive. Every AI decision made during the audit is recorded in the provenance layer attached to this document - the AI and deterministic evidence sidecars embedded in the PDF. The only connection the audit makes to the internet is fetching the pages of the website being audited. Nothing is sent out.

Our scoring criteria follow published MX standards and proposed specifications maintained at [The Gathering](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. MX addresses governance and machine experience metadata in the areas those standards do not cover. The methodology behind every section of this report is documented in full in MX: The Protocols at [MX: The Protocols](https://mx.allabout.network/books/).

**What we cover here, and what MX covers.** This report looks at the web estate: every page served over HTTP, examined for metadata, structured data, accessibility, and what machines can read. MX runs deeper, covering every document type a business publishes (PDFs, data feeds, API responses, structured documents) and the machines that read them. The web estate is the foundation; the rest builds on it.

**Audit scope.** Findings throughout this report describe what we observed on the 10 HTML pages we examined in depth, drawn from a sitemap of 150 URLs. We also reviewed the site's discovery files (sitemap.xml, llms.txt). Structural findings - a missing header, a soft 404 pattern, a discovery file gap - hold across the full estate and are noted as such. Verdicts scoped to the sampled pages should not be extrapolated to the full estate without a wider audit.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. The Discovery Files section below records its presence, transport type, and sitemap registration, and covers the two structural problems (content type and discovery) that limit most implementations.

---

## Executive Summary

**Table 1**

*Executive Summary*

| | Score | Verdict |
|:---|---:|:---|
| Performance | **85**/100 | `###############---` Excellent |
| Accessibility | **74**/100 | `#############-----` Good |
| SEO | **83**/100 | `###############---` Excellent |
| Served-HTML Structure | **100**/100 | `##################` Excellent |
| MX Stack Completeness | **43**/100 | `########----------` **(!)** Could Be Better |
| Agent Readability | **71**/100 | `#############-----` Good |
| Pipeline Survivability | **95**/100 | `#################-` Excellent |
| Machine Processing Speed | **2004** ms/page | `######------------` **(!)** Machine-Dense |

*The three machine metrics measure different things. **Served-HTML Structure** is the semantic markup an agent reads before JavaScript runs; **Agent Readability** is how easily the content can be quoted once reached; **Pipeline Survivability** is whether a page survives an agent's fetch and ingest. A site can score low on one and high on another.*

Agent Readability was adjusted down by 8 points for site-wide gaps a machine cannot work around:

- **Bare-div nesting (div soup) across most pages** (-8): 5 of 12 pages are heavy with bare-div nesting

The site runs on **Shopify** (detected from multiple platform signals). The site appears to be a professional services or B2B agency.

Schema.org types indicate a professional services or agency context.

Dotfusion runs on Shopify. Across the audited set, Dotfusion scores 74/100 for accessibility and 83/100 for SEO.

The audited set shows consistent metadata patterns across pages, with no brand-name, canonical-URL, meta-description, or entity divergence detected.

**Table 2**

*Executive Summary*

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Brand-name parity | Pass | Brand name appears consistently across all 12 audited pages |
| Canonical URL duplicates | Pass | No duplicate canonical URLs detected across the 12-page audited set |
| Meta description length | Pass | Meta descriptions present on all pages; none flagged for length violations |
| Cross-page entity spread (same entity on multiple pages) | Pass | Schema.org entities reference consistent identifiers across the audited set |

We identified inconsistencies in brand-name usage, duplicate canonical URLs and uneven distribution of structured data entities across the audited set; correcting these will enhance machine comprehension.

---

## Inline Code Duplicates

We found 12 identical inline fragment(s) repeated across multiple pages, totalling 537 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

**Table 3**

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

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## Infrastructure and Hosting

Hosted directly with **Amazon.com, Inc.**. Platform: **Shopify**.

---


We linked no PDFs from the 10-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

PDFs are part of the machine-readable estate but sit outside this HTML audit's scope. A dedicated PDF review checks each public document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified) and returns a per-document verdict.

---

## Content Uniqueness

11 of 12 pages carry distinctive content - machines reading each page get different information. 1 page has content that also appears on other pages, giving machines no unique information for that URL. Pages with significant duplication give agents redundant signals that consume crawl budget without adding knowledge.

**Table 4**

*Content Uniqueness*

| Page | Unique content | Band |
|------|---------------|------|
| /contact-us | None | Low Machine Value |

**Shared prose found on multiple pages:** An agent reading the pages below sees this content repeated.
- "tell us what's on your mind name email your company about your dream project sen..." - appears on 4 of 12 pages (33%)
The remaining 11 pages all scored Distinctive or Expected Boilerplate.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 98 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Semantic Structure improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

**Table 5**

*What's Next*

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | WCAG 2.1 AA compliance | Priority 1 items resolved, compliance risk removed |
| Full Implementation | Discovery Readiness, Semantic Structure, Commerce Visibility, MX Stack Completeness, Structured Data, Security headers, and optional enhancements | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | The full machine-readable estate, beyond the web pages |
| Data-Sovereign Option | Regulated industries | Run the full audit pipeline on your own infrastructure - no client content leaves your network |

This audit is a starting point. The outcome we work toward is a site any machine can read, trust, and act on, and a dated, attested record you can show to a regulator, a partner, or an acquirer on request. Reaching it (structured data, discovery files, accessibility, governance metadata, and re-audit on a schedule you set) is available as a managed service. We also run training sessions that give development teams the MX vocabulary and implementation patterns directly, so the gap between findings and fixes is weeks, not quarters. To take any of it further, contact CogNovaMX Ltd at <info@cognovamx.com>.

---


### Audit Scores

Each dimension is measured independently. Served dimensions reflect the page before JavaScript runs; Rendered dimensions reflect what a browser produces after JavaScript executes. The Notes column explains the measurement method for each score.

The site serves an empty HTML shell to server-side agents. The "Rendering" column shows whether each score was measured from the served HTML (what agents actually get) or the rendered HTML (what agents would get with SSR).

**Table 6**

*Audit Scores*

| Dimension | Score | Rendering | Notes |
|-----------|-------|-----------|-------|
| Served-HTML Structure | 100/100 | Served | Structural markup an agent parses before JS |
| Accessibility | 74/100 | Rendered | Checked in a rendered browser environment |
| SEO (all pages) | 83/100 | Rendered | Google renders JS; server-side agents do not |
| SEO (content pages) | 82/100 | Rendered |  |
| MX Stack Completeness | 43/100 | Rendered |  |
| Structured Data Quality | 44/100 | Rendered | JSON-LD in served head  -  valid for all agents |
| Discovery Readiness | 20/100 | Mixed | robots.txt/sitemap independent of rendering. Machines have almost no structured context about what the site covers or how to use it. |
| Heading Quality | 94/100 | Rendered | Page structure is clear and consistent; agents can build an accurate content outline from headings alone. |
| Agent Readability | 71/100 | Rendered | Most pages are well-structured for agents; a few have formatting or bloat issues that slow ingestion. |
| Pipeline Survivability | 95/100 | Rendered | Pages reach agents intact with no observed survivability issues. |
| Cross-Page Consistency | 44% | Rendered | Fewer than half the tracked metadata patterns apply across all pages; agents reading different pages get different signal quality. |

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

## Appendix A: Pages Audited

- **/ (nav)**
  SEO 90 · A11y 70 · Backend 85 · Served 100 · Rendered 100
- **/services**
  SEO 85 · A11y 75 · Backend 85 · Served 100 · Rendered 100
- **/services/headless-cms-agency**
  SEO 78 · A11y 75 · Backend 85 · Served 100 · Rendered 100
- **/services/contentful-development-agency**
  SEO 82 · A11y 70 · Backend 85 · Served 100 · Rendered 100
- **/services/storyblok-development-agency**
  SEO 86 · A11y 70 · Backend 85 · Served 100 · Rendered 100
- **/services/agility-cms-development-agency**
  SEO 87 · A11y 70 · Backend 85 · Served 100 · Rendered 100
- **.../services/answer-engine-optimisation-agency-dotfusion**
  SEO 76 · A11y 75 · Backend 85 · Served 100 · Rendered 100
- **/industries**
  SEO 91 · A11y 75 · Backend 85 · Served 100 · Rendered 100
- **/about**
  SEO 87 · A11y 80 · Backend 55 · Served 100 · Rendered 100
- **/contact-us**
  SEO 67 · A11y 70 · Backend 55 · Served 100 · Rendered 100
- **/privacy**
  SEO 84 · A11y 80 · Backend 55 · Served 100 · Rendered 100
- **/jedi**
  SEO 81 · A11y 80 · Backend 55 · Served 100 · Rendered 100

*Backend: score for HTML served without JavaScript. Served: AI suitability from served HTML. Rendered: AI suitability after JavaScript.*

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 82/100.

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. External links are not tracked; this inventory covers same-host `<a href>` links only. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

Per page, internal links range from 15 to 33, averaging 20 across 12 pages. That is typical (benchmark median 20 per page).

**Table 7**

*Appendix B: Link Inventory*

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 240 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |

At 20 internal links per page on average, the internal navigation graph sits within the typical range for sites of this type (benchmark median 20). No hash-fragment links were found - the site navigates entirely by full-page URL, which is standard for content and service sites. No inline mailto or tel links appear in page content; direct contact routes through a form.

---

## Appendix C: Image Efficiency

We reviewed 127 images across the audited set: 3 WebP, 60 SVG, 38 PNG and 26 in other or unidentified formats. 99 of 127 (78.0%) carry alt text, leaving 28 without it. Each missing alt attribute is a place where a screen-reader user or a machine reading the page gets no description of what the image shows.

On loading strategy, 24 images are marked `loading="lazy"` and 0 `loading="eager"`, while 103 carry no loading attribute at all. No attribute is not the same as eager: the browser decides for itself when to fetch, which removes the explicit control that lazy and eager give you. Setting an explicit attribute on those images makes the fetch behaviour predictable for browsers and machines alike.

SVG and PNG account for 77% of the 127 images (60 and 38 files respectively). WebP adoption is low (2%). Converting PNG and JPEG files to WebP reduces their size by 25-35% with no visible quality loss.

**Table 8**

*Appendix C: Image Efficiency*

| Format | Count | Share |
|--------|-------|-------|
| WebP | 3 | 2% |
| SVG | 60 | 47% |
| PNG | 38 | 30% |
| Other | 26 | 20% |

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.x (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Pa11y is an open-source automated accessibility testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: **Shopify** (high confidence  -  multiple fingerprint signals). The main audit uses Shopify-specific rate limits from our platform knowledge base. Requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** **Next.js**  -  JS framework; **Tailwind CSS**  -  CSS framework; **Bootstrap** (low confidence)  -  CSS framework. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from the audited pages. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

Tailwind CSS generates utility-class div chains that appear as bare containers to machines - this is the primary driver of the div-soup score. Next.js provides server-side rendering, giving agents full HTML on first fetch with no JavaScript dependency.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 10 pages examined | Platform: Shopify | Analysis method: Hybrid (automated + manual verification) | robots.txt: Present (3 directives)

**Measurement completeness:** Every probe completed during this audit, with no network errors or timeouts. The findings below rest on a full data collection.

**What comes next.** This report is the foundation, not the finish line. Implementing the recommendations requires the technical knowledge that produced them; we bring that forward. Our implementation engagements begin where this audit ends.

We work toward a site - and an estate of documents beyond it - that any machine can read, trust, and act on. It holds its own dated, attested record for anyone who needs to verify that claim. Reaching it - structured data, discovery files, accessibility, governance metadata, and re-audit on a regular schedule - is available as a managed service or as licensed tooling your team runs independently. We also run training sessions that give development teams the MX vocabulary and implementation patterns directly. To take any of it further, contact CogNovaMX Ltd at info@cognovamx.com.

---

## Appendix E: Markdown Content Negotiation

**Table 9**

*Appendix E: Markdown Content Negotiation*

| Check | Result |
|-------|--------|
| URL probed | https://dotfusion.com |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No  -  server returned HTML regardless of Accept header |

The site returns standard HTML to all requests, including those carrying `Accept: text/markdown`. Markdown content negotiation is a feature that lets a server deliver a lighter, markup-free page to agents that request it - reducing the parsing load on the agent side. It is an optional enhancement with no compliance obligations attached. One consideration before enabling it: Markdown conversion strips `<head>` metadata, governance fields, and discovery signals, so any page carrying MX fields, canonical URIs, or structured data in the document head would lose those signals for agents that receive the Markdown version. Whether the reduction in parsing cost outweighs that loss is a publisher decision; this probe records the current state.

---

\clearpage

## Further Reading

The reference material cited in this report. Click the link on screen or scan the QR code on paper: both encode the same URL.

**Table 10**

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

This report carries its own provenance. Every step that produced it is recorded in two adjacent JSON sidecars - one AI, one deterministic - and the full evidence chain travels inside the PDF's XMP metadata: extract it with `exiftool -b -XMP-mx:ProvenanceAiPayload dotfusion-com-report.pdf | jq .`. The PDF is a tagged ISO 14289-1 (PDF/UA-1) Level 2 document with a complete reading-order structure tree. What this audit measures on a client's behalf, this deliverable meets.

Machine-readable content is visible to agents and validators. Machine-trustworthy content adds a provenance layer - a dated, attested record that names who published it and under what rubric. Readable is what MX makes content; the provenance layer is what makes it trustworthy. The two do different jobs, and this report carries both. It is an example of what that looks like in practice.

\clearpage

## Practice What We Preach: This Audit's Own Evidence Chain

A standard is credible only when we run on it ourselves. We hold this audit deliverable to the same MX standards we apply to the audited site; consider this working proof of the practice it recommends. Every consequential step that produced this report (LLM-driven prose passes, deterministic gate verdicts, multi-agent attribution probes, repair iterations) is recorded in two adjacent JSON sidecars next to this PDF.

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the output it produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the operator. This PDF holds the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `*.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain is at `*.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload dotfusion-com-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output includes a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did. We prefer determinism to inference: explicit over inferred, recorded over remembered, a result you can reproduce over one we could only explain. Where a check can be made by a rule, a rule makes it, and the rule leaves a record rather than an opinion. That is why this chain shows what we did instead of asking you to trust a summary of it.

**Verify this report yourself - no tools, no login, no installation.** Drop this PDF into the [MX Inspector](https://mx.allabout.network/tools/pdf-inspector.html) to read the full provenance chain, operator identity, and attestation in your browser. Or run three commands directly against the file:

1. Extract the full AI evidence chain from the PDF: `exiftool -b -XMP-mx:ProvenanceAiPayload dotfusion-com-report.pdf | jq .`
2. Confirm the operator identity: the JSON contains `operator.name`, `operator.email`, and `operator.organisation` naming the accountable individual.
3. Cross-reference the sidecar: `diff <(jq .auditId dotfusion-com-report.provenance.ai.json) <(exiftool -b -XMP-mx:ProvenanceAiPayload dotfusion-com-report.pdf | jq .auditId)`; both should return the same `auditId`.

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

