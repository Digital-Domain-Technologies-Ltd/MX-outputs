---
title: "Careington"
subtitle: "Website Analysis & Machine Readiness"
type: report
author: "Tom Cranstoun"
created: "2026-07-04"
modified: "2026-07-04"
client: "Careington"
clientSlug: "www-careington-com"
clientUrl: "https://www.careington.com"
reportId: "www-careington-com-WEB-AUDIT-20260704"
reportType: "executive-sales-report"
auditTool: "web-audit-suite"
auditDate: "2026-07-04"
auditCommand: "node scripts/audit-pipeline.js https://www.careington.com/"
description: "Executive audit report reviewing accessibility, performance, SEO, structured data, and AI agent compatibility for Careington"
tags: [web-audit, accessibility, wcag-aa, ai-agents, seo, performance, mx, executive-report]
performanceScore: 85
accessibilityScore: 93
seoScore: 81
llmServedHtmlScore: 68
agentReadabilityScore: 64
a11yIssues: 25
htmlPagesAudited: 11
version: "1.0"
pipelineVersion: "1.1.0"
confidential: true
mx:
  status: active
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-07-04/www.careington.com/www-careington-com-report.md
  maintainer: info@cognovamx.com
  stability: stable
  partOf: mx-audit
  purpose: "Executive machine-readiness audit for Careington covering accessibility, performance, SEO, structured data, and AI agent compatibility."
  x-mx-contextProvides: ["web audit findings for Careington", "WCAG accessibility assessment", "AI agent compatibility scores", "SEO and structured data analysis", "machine readiness recommendations"]
  # The single cog that manages this pipeline artefact, so a reader never
  # has to infer the steward (scripts/lib/managed-by.cjs is the resolver).
  x-mx-managedBy: mx-audit.cog.md
  x-mx-generatedBy: "mx-reginald/audit/bin/infill-report.js"
  x-mx-canonicalSource: "Audit results for https://www.careington.com on 2026-07-04 - fix via generator, not this file"
  runbook: "Executive audit report for Careington. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in the top-level auditCommand field. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-07-04/www.careington.com/www-careington-com-report.md', which validates the report then renders it through scripts/bin/mx.pdf.sh."
  generate:
    command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-07-04/www.careington.com/www-careington-com-report.md"
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/audit/runs/www.careington.com/latest-copy.pdf"
    description: "Generate PDF audit report for Careington"
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
    sidecar: "www-careington-com-report.provenance.ai.json"
    frameworks: [EU-AI-Act, UK-ICO-AI-guidance, NIST-AI-RMF, Colorado-AI-Act]
    companion: "www-careington-com-report.provenance.deterministic.json"
    note: "AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that prefers file access. The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directive 2019/882 accessibility-conformance evidence; it stays adjacent on disk only (its pointer is in xmp:ProvenanceCompanion)."
---

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 4 July 2026\
**Report ID:** www-careington-com-WEB-AUDIT-20260704

---

\clearpage

## Executive Verdict

> **Bottom line.** Careington runs on Unknown Platform and scores 93/100 on automated accessibility checks and 81/100 for SEO. It sits at MX Readiness Level 0 (Not Ready). The single most important next step is to raise Structured Data Quality, the lowest machine-readiness dimension at 0/100.

**Top risks**

1. **Structured Data Quality (0/100)** - Needs Improvement.
2. **Commerce Visibility (0/100)** - Needs Improvement.
3. **Discovery Readiness (10/100)** - Needs Improvement.

---

## Executive Summary

**Table 1**

*Executive Summary*

| | Score | Verdict |
|:---|---:|:---|
| Performance | **85**/100 | `###############---` Excellent |
| Accessibility | **93**/100 | `#################-` Good |
| SEO | **81**/100 | `###############---` Excellent |
| Served-HTML Structure | **68**/100 | `############------` Good |
| MX Stack Completeness | **39**/100 | `#######-----------` **(!)** Could Be Better |
| Agent Readability | **64**/100 | `############------` Good |
| Pipeline Survivability | **92**/100 | `#################-` Excellent |
| Machine Processing Speed | **68** ms/page | `#################-` Machine-Lean |

*The three machine metrics measure different things. **Served-HTML Structure** is the semantic markup an agent reads before JavaScript runs; **Agent Readability** is how easily the content can be quoted once reached; **Pipeline Survivability** is whether a page survives an agent's fetch and ingest. A site can score low on one and high on another.*

Agent Readability was adjusted down by 8 points for site-wide gaps a machine cannot work around:

- **Generic containers without landmark roles on most pages** (-8): 11 of 11 pages rely on generic containers without landmark roles

Careington runs on Unknown Platform. Across the audited set, Careington scores 93/100 on automated accessibility checks and 81/100 for SEO, with solid page performance (85/100).

The headline opportunity is to eliminate the four distinct WCAG AA issue types that affect 25 elements; a single template fix can resolve all instances. This accessibility improvement also clears a critical compliance gap before we focus on machine-readiness, and adding MX governance metadata will lift the set from Level 0 to Governed.

The audited set runs on an unknown platform, with AI Suitability at 68/100 indicating HTML is parseable but MX readiness remains Level 0. The highest-leverage action is to embed the MX governance fields-mx:status, mx:contentType, mx:audience and canonicalUri-into each page’s markup.

\clearpage

## Balanced Scorecard

### Human Experience

Human visitors experience Excellent performance (avg 878 ms load time), Good accessibility across 11 pages, and Excellent search visibility.

**Table 2**

*Human Experience*

| Dimension | Score | Band | vs Peers |
|-----------|-------|------|----------|
| Performance | 85/100 | Excellent | A (median) |
| Accessibility | 93/100 | Good | A (median) |
| SEO (content pages) | 81/100 | Excellent | A (median) |

### Machine Experience

Machines experience Good HTML structure at first fetch, Needs Improvement discovery readiness (10/100), Needs Improvement structured data quality (0/100), and Good agent readability.

**Table 3**

*Machine Experience*

| Dimension | Score | Band | vs Peers |
|-----------|-------|------|----------|
| Served-HTML Structure | 68/100 | Good | A (median) |
| Discovery Readiness | 10/100 | Needs Improvement | C (median) |
| Structured Data Quality | 0/100 | Needs Improvement | B (median) |
| MX Stack Completeness | 39/100 | Could Be Better | B (median) |
| Pipeline Survivability | 92/100 | Excellent | A (median) |
| Security headers |  -  |  -  |  -  |
| Machine Processing Speed | 68 ms/page | Machine-Lean |  -  |

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

**Evidence:** MX Stack Completeness 39/100 The metadata stack is partial; machines must infer context the site does not explicitly declare. | Structured Data Quality 0/100 Schema.org data is absent or minimal; machines receive no structured facts about the site's entities. | Discovery Readiness 10/100 Machines have almost no structured context about what the site covers or how to use it. | Consistency 32% Fewer than half the tracked metadata patterns apply across all pages; agents reading different pages get different signal quality.

**To reach the next level:** raise Discovery Readiness above 15 (currently 10).

---

<div class="page-break"></div>

## What's Working Well

We find SEO performance and security transport across the audited set, giving a clear starting point for the improvements ahead.

**Table 5**

*What's Working Well*

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | Excellent | Excellent  -  878ms average load time |
| SEO (content pages) | 81 | Excellent  -  titles, meta descriptions, canonical URLs in place |
| Security | 4/5 | 4/5 headers present (CSP absent); 0 of 11 URLs carry all five |
| Heading Quality | 84 | Excellent  -  single H1 on every page |
| Consistency | 32% | 32%  -  same metadata patterns across every page |
| Agent access | 8/8 | every tested agent receives HTTP 200 |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site: ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Body content ratio averages 82%: pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

The table below is the prioritised action list for this audit. Each row names a finding, its compliance-risk bucket, and the effort to fix it. The numbered blocks below the table expand each finding with specific guidance.

We identified 12 finding(s) on the audited set, ordered by regulatory exposure first and then by priority within each category.

**Table 6**

*At a Glance*

| # | Finding | Bucket | Priority | Effort | Impact |
|---|---------|--------|----------|--------|--------|
| 1 | Duplicate ID Attributes, WCAG 4.1.1 | Compliance Risk | High | Medium | assistive-technology users may miss or misread affected content |
| 2 | Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2 | Compliance Risk | High | Medium | screen reader users may miss or misread affected content |
| 3 | Info and Relationships Not Programmatically Determined, WCAG 1.3.1 | Compliance Risk | High | Medium | screen reader users may miss or misread affected content |
| 4 | Image Alt-text Coverage | Compliance Risk | High | Low | screen-reader users and machines miss the content of those images |
| 5 | No Bypass Mechanism for Repeated Blocks, WCAG 2.4.1 | Compliance Risk | Medium | Low | sighted keyboard users may miss or misread affected content |
| 6 | Heading Hierarchy Skips Levels | Compliance Risk | Medium | Low | screen-reader and machine outline-builders may misread the page structure |
| 7 | Main Landmark Absent | Compliance Risk | Medium | Low | agents and assistive technology may not locate the primary content |
| 8 | Semantic Structure 35/100 | Compliance Risk | Medium | Medium | machines lose structural context and infer page regions by position |
| 9 | Security headers absent: CSP | Cross-cutting | Medium | Low | Missing security headers increase exposure to content injection and clickjacking |
| 10 | Open Graph metadata incomplete or absent | Cross-cutting | Low | Low | Social sharing previews and agent link summaries lack author-controlled descriptions |
| 11 | No Schema.org structured data (SDQ 0/100) | Machine Readability Opportunity | Medium | Medium | Agents must infer entity type and facts from prose rather than declared structured data |
| 12 | No llms.txt published | Machine Readability Opportunity | Medium | Low | Agents have no machine-curated index of site content or declared access policy |

---

**Priority 1: Duplicate ID Attributes, WCAG 4.1.1**

**Bucket:** Compliance Risk

**Finding:** Duplicate id attributes appear across the audited set, breaking label associations, ARIA references, and in-page anchor links. This pattern appears 12 time(s) across the audited set, affecting all assistive tech users.

**What to change and why:**

- Make every id attribute unique within each page; duplicate ids break label/for associations, aria-labelledby references, and in-page anchors. This satisfies WCAG 4.1.1.
- When the duplication comes from a repeated template module, fix it once in the template so every page that includes the module is corrected together.

**Effort:** Medium

---

**Priority 2: Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2**

**Bucket:** Compliance Risk

**Finding:** Interactive elements lack an accessible name, role, or state that assistive technology and agents need to identify and operate them. This pattern appears 1 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Give every custom control an accessible name and the correct role and state (prefer a native button/link/input; add ARIA only where no native element fits). This satisfies WCAG 4.1.2.
- A named, correctly-roled control is also what lets an agent understand what an interactive element does.

**Effort:** Medium

---

**Priority 3: Info and Relationships Not Programmatically Determined, WCAG 1.3.1**

**Bucket:** Compliance Risk

**Finding:** Visual structure (headings, lists, tables, form labels) is not exposed in the markup, so assistive technology and machines cannot reliably reconstruct it. This pattern appears 1 time(s) across the audited set, affecting screen reader users.

**What to change and why:**

- Expose the structure a sighted user sees (headings, lists, tables, form labels) in the markup so assistive technology and machines can reconstruct it. This satisfies WCAG 1.3.1.
- Use native semantic elements before ARIA; reach for ARIA only where no native element conveys the relationship.

**Effort:** Medium

---

**Priority 4: Image Alt-text Coverage**

**Bucket:** Compliance Risk

**Finding:** 1 of 139 images (1%) on the audited set carry no alt text, so their content is unavailable to assistive technology and to machines reading the page.

**What to change and why:**

- Add descriptive alt text to the informative images that lack it and empty alt to the decorative ones. This satisfies WCAG 1.1.1 across the image set.
- Generating alt text at upload time, or from the CMS media library, keeps coverage high as new images are added.

**Effort:** Low

---

**Priority 5: No Bypass Mechanism for Repeated Blocks, WCAG 2.4.1**

**Bucket:** Compliance Risk

**Finding:** Pages repeat navigation blocks with no mechanism to skip them, forcing keyboard users to tab through every link on each page before reaching the main content. This pattern appears 11 time(s) across the audited set, affecting sighted keyboard users.

**What to change and why:**

- Add a skip link as the first focusable element, or wrap the repeated navigation in a landmark, so keyboard users can jump straight to the main content. This satisfies WCAG 2.4.1.
- A served-HTML skip link also gives server-side agents an explicit main-content anchor they can follow.

**Effort:** Low

---

**Priority 6: Heading Hierarchy Skips Levels**

**Bucket:** Compliance Risk

**Finding:** Heading levels skip on 8 audited page(s) (for example an h2 followed by an h4), so the document outline a machine or screen reader builds does not match the visible structure.

**What to change and why:**

- Order headings without skipping levels (an h2 followed by an h4 forces assistive technology and machines to guess the structure). Use heading level for hierarchy and CSS for visual size.
- A clean heading outline is the spine an agent uses to summarise the page; fixing it improves both accessibility and machine comprehension.

**Effort:** Low

---

**Priority 7: Main Landmark Absent**

**Bucket:** Compliance Risk

**Finding:** 11 audited page(s) have no `<main>` landmark, so assistive technology and server-side agents cannot reliably locate the primary content among the navigation and chrome.

**What to change and why:**

- Wrap the primary content of each page in a single `<main>` landmark so assistive technology can jump to it and server-side agents can locate the content among the navigation and chrome.
- One `<main>` per page; everything that is not the page's unique content stays outside it.

**Effort:** Low

---

**Priority 8: Semantic Structure 35/100**

**Bucket:** Compliance Risk

**Finding:** Semantic-structure score 35/100: regions carry no role, ARIA landmark, or descriptive class, so machines fall back on positional inference to determine meaning. The worst rendered page ([/careers](https://www.careington.com/careers)) carries 83 generic containers of 148.

**What to change and why:**

- Replace the obvious landmark containers (header, nav, main, footer, aside) with their semantic elements and give the remaining containers meaningful class names, so machines stop falling back on positional inference to determine what each region is.
- Start with the page that scored worst; wrapping the landmarks alone usually drops the generic-container ratio sharply without restructuring the layout.

**Effort:** Medium

---

**Priority 9: Security headers absent: CSP**

**Bucket:** Cross-cutting

**Finding:** Security headers absent: CSP (All responses). Missing security headers increase exposure to content injection and clickjacking

**What to change and why:**

- Add the missing response headers at the server or CDN edge; each is a one-line directive that applies to all responses once configured.
- Set them once in the edge or server configuration rather than per page so coverage stays complete as new pages ship.

**Effort:** Low

---

**Priority 10: Open Graph metadata incomplete or absent**

**Bucket:** Cross-cutting

**Finding:** Open Graph metadata incomplete or absent (All). Social sharing previews and agent link summaries lack author-controlled descriptions

**What to change and why:**

- Complete the flagged SEO metadata (title, meta description, canonical) so search engines and machines index the page with accurate summaries.
- Set sensible defaults in the template so every page ships with complete metadata.

**Effort:** Low

---

**Priority 11: No Schema.org structured data (SDQ 0/100)**

**Bucket:** Machine Readability Opportunity

**Finding:** No Schema.org structured data (SDQ 0/100) (Homepage). Agents must infer entity type and facts from prose rather than declared structured data

**What to change and why:**

- Add the missing required and recommended Schema.org properties to the flagged entity types so machines can extract the entity reliably rather than guessing from surrounding text.
- Maintain the structured data in the template that renders each entity type so every instance carries the same complete markup.

**Effort:** Medium

---

**Priority 12: No llms.txt published**

**Bucket:** Machine Readability Opportunity

**Finding:** No llms.txt published (Root). Agents have no machine-curated index of site content or declared access policy

**What to change and why:**

- Publish the missing discovery file at the site root so agents and crawlers can find the machine-curated index and access policy in one fetch rather than inferring them.
- Reference the file from robots.txt and the sitemap so crawlers have a reliable signal that it exists.

**Effort:** Low

<!-- OPT_ENH_SLOT -->


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

### Non-Standard Response Headers

No non-standard response headers detected. The site returns a clean, standard header set.

---

## Error Page Test

This test fetches a deliberately non-existent page (`/zebedee.html`) to evaluate how this site handles errors for both human visitors and machines.

**Table 8**

*Error Page Test*

| Check | Result |
|-------|--------|
| HTTP status code | 404 (correct) |
| Custom error page | Yes, custom error page (not a bare server default) |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | No |
| Navigation back to valid content | Absent - error page offers no route back to valid content |
| Internal navigation links | 0 - error page links nowhere |
| MX governance tags | Absent |
| Schema.org JSON-LD | Absent (correct: the error page makes no content claim) |

The site returns HTTP 404 for a non-existent URL - the correct signal. Machines detect the dead end immediately and move on without spending context on content that does not exist. The custom error page is a good foundation; adding navigation links back to valid sections turns a dead end into a recovery point for both human visitors and agents trying to complete a task.

---

## The Accessibility Tree

Machine visitors vary more than human ones. A small model on a phone works inside a tight context window. A foundation model arrives with browsing tools. A plain scraper never runs a model. A converter flattens each page to text before any model sees it; layout and scripts disappear in the process. A coding agent fetches a page once over HTTP and moves on. Raw markup, text projections, the accessibility tree, structured metadata - each kind of visitor reads a different layer. None of them read the visual layout, and you cannot know which one will arrive next.

Put the same meaning in every channel: page semantics, accessibility tree, metadata, and plain text. A page that stakes its meaning on one channel loses every visitor without it. The accessibility tree is the channel this section checks; it is shared by screen readers, so every fix here serves human and machine visitors alike.

Human visitors follow a path - step by step, page by page. Machines do not. They hit one page, once, and leave; they follow no path unless that page sends them somewhere. A site that hides its meaning across multiple pages is invisible to a machine landing in the middle. Every page has to stand alone for the machine while the journey still works for the human. These are complementary designs on the same pages.

This check reads each audited page as a tree consumer does and flags where behaviour, names, and structure fail to reach it. It covers what the WCAG scan does not: that section measures conformance per page; this one catches meaning that exists in only one channel.

**Table 9**

*The Accessibility Tree*

| Measure | Result |
|---------|--------|
| Accessibility-tree score | 76/100 |
| Pages checked | 10 |

Every page passes all tree-level checks; no structural gaps block complete traversal.

Across the 10 pages we checked, 1 distinct issue pattern reduce what reaches the tree.

**Element exposed as an image with no accessible name** (WCAG 2.1 1.1.1)

An element declares role="img" (or is an inline SVG acting as content) with no accessible name. The tree exposes an image-shaped hole: consumers know something pictorial is there and nothing else. Seen on `/`.

*The fix:* Add an aria-label (or a title element inside the SVG) in the component, or mark it decorative with aria-hidden when it carries no meaning.

The following issue type(s) were also detected in the accessibility tree but are covered in the Accessibility section above and are not repeated here: Clickable element with no semantic role, No main landmark on the page.

The full set, one row per pattern with every affected page counted, is recorded in the `www-careington-com-accessibility-tree.csv` sidecar alongside this report.

**Inspect the accessibility tree.** Right-click any page, choose Inspect, open the Elements panel, click the `>>` icon, choose Accessibility, and toggle "Show Accessibility Tree". The result is what tree consumers receive: if a control or a heading is missing from that view, it is missing for them. Chrome DevTools' AI Assistance panel also accepts "Review accessibility" against any element this report flags.

---

## Server Response Stability

Single load-time measurements can mislead. A page that returns in a few hundred milliseconds for a returning visitor may be served from a warm CDN edge. The same page on a genuine first visit could spend several seconds at the origin before the first byte arrives. To separate the two experiences, this section re-measures the slowest page from the crawl and a median-load control across several fresh visits, then compares those against the first-visit response. The result is two distinct verdicts per page: a first-visit cost (what a brand-new visitor actually pays) and a returning-visitor cost (what a repeat visitor experiences). The overall verdict for each page is the worse of the two, so a fast returning-visitor median cannot paper over a slow first-visit response.

**Method:** Each URL is re-measured across several fresh visits and scored on the median of those measurements. For each page we compare both the crawler's cold-cache baseline and the median of three fresh GETs: a response is treated as healthy at or below 1500ms, acceptable up to 3000ms, and slow above 3000ms. The overall verdict reflects the worse of the two views.

**Slowest.** The slowest page is `https://www.careington.com/dentists-and-dsos/prospective`. A first-time visitor sees the cold-cache cost: the crawler recorded 1846 ms on its initial fetch. **First-visit verdict: Acceptable but elevated**. Three fresh re-probes that followed returned 979ms, 1072ms, 1053ms, giving a returning-visitor median of **1053 ms**. **Returning-visitor verdict: Healthy**.

**Median-load control.** The median-load control page is `https://www.careington.com/businesses-and-organizations/our-services`. A first-time visitor sees the cold-cache cost: the crawler recorded 611 ms on its initial fetch. **First-visit verdict: Healthy**. Three fresh re-probes that followed returned 935ms, 900ms, 717ms, giving a returning-visitor median of **900 ms**. **Returning-visitor verdict: Healthy**.

**Verdict:** Server response time is within healthy bounds for the slowest page across both first-visit and returning-visitor views.

---

## Discovery Files

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /brokers/
Disallow: /businesses/
Disallow: /media/
Disallow: /members/search-only/
Disallow: /businesses/
Disallow: /military/
Disallow: /help/terms-and-conditions/
Disallow: /members/nationwide/plans/C50017/
```

*Showing the first 10 lines of `robots.txt`; the full 21-line file is preserved alongside this report as `www-careington-com-robots-txt.txt`.*

The robots.txt declares 19 disallow paths; all other paths are open to crawlers and machines. It does not announce a sitemap, so machines reading the file have no direct pointer to the URL index; adding a Sitemap line is a low-effort improvement.

### sitemap.xml

**Table 10**

*sitemap.xml*

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | 153 entries | Present |
| `<lastmod>` | No | Absent |
| `<changefreq>` | No | Missing (Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents still use it to gauge re-crawl cadence) |
| `<priority>` | No | Absent (Google dropped this as a ranking signal in 2017; non-Google crawlers and AI agents can still use it as a relative-importance hint) |

**Sitemap grade:** Minimal

The sitemap declares 153 URLs and grades Minimal. Lastmod is absent, so machines have no per-URL change signal to schedule re-crawls against. The sitemap omits changefreq and priority. Google dropped both as ranking signals in 2017, but non-Google crawlers and AI agents still read changefreq as a re-crawl cadence hint and priority as a relative-importance signal, so adding them is a low-effort way to broaden machine compatibility.

The sitemap lists 153 URLs; 5 of the pages this audit reached are not among them. The unlisted pages: `/brokers-and-consultants/index.aspx`, `/businesses-and-organizations/index.aspx`, `/dentists-and-dsos/patient-loyalty/`, `/dentists-and-dsos/prospective/index.aspx`, `/members/current/index.aspx`. The full set is recorded in the `www-careington-com-pages-not-in-sitemap.csv` sidecar alongside this report. Adding them to the sitemap lets search engines and machines discover all content.

We discovered that the sitemap lists multiple URL variants-trailing-slash and hash-fragment forms-for the same canonical resource, such as https://www.careington.com/dentists-and-dsos/prospective and its trailing-slash counterpart. Machines that do not normalise URLs will treat each variant as a distinct page, consuming extra token budget and risking contradictory or inflated findings; to resolve this we recommend publishing one canonical URL per resource in sitemap.xml and adding a <link rel="canonical"> tag to each affected URL.

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

No llms.txt found. llms.txt is no longer a new or unusual idea: Chrome's Lighthouse now checks for it by default ([Lighthouse llms.txt audit](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt)). A file at the site root that lists the pages and feeds worth reading gives machine readers a curated entry point, alongside robots.txt and sitemap.xml.

### [llms-full.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

We found no llms-full.txt on the audited host. Where llms.txt is the curated index, llms-full.txt concatenates the full content of every page into a single file: a convention made popular by Fern, Mintlify, and GitBook. Agents that consume it ingest the corpus in one fetch rather than crawling page-by-page, cutting token consumption by an order of magnitude. We recommend adding an llms-full.txt alongside llms.txt; the build can run from the same sitemap-driven generator that produces llms.txt and adds the page bodies inline.

Not found. A full content corpus at /llms-full.txt would let agents ingest the complete site in a single fetch. Without it, an agent that wants to index all content must crawl page by page.

### agent-card.json (A2A)

No agent-card.json found at `/.well-known/agent-card.json` (HTTP 404). The A2A (Agent2Agent) protocol defines this location as the standard way to make services findable in agentic workflows. If this site offers transactional or service capabilities, publishing an agent card here is the most important gap to close for Stage 5 (Confidence).

## AI-Content Marking Readiness

This section reports whether Careington's site marks AI-generated or AI-manipulated content in a machine-readable way. Two frameworks define what that marking looks like: EU AI Act Article 50, which expects it from 2 August 2026, and the European Commission's voluntary Code of Practice on marking and labelling of AI-generated content, published 13 June 2026. The probe inspects the homepage for four markers an agent could read without a human in the loop, and records which are present.

<p><small><strong>Note:</strong> This section describes regulatory frameworks in general terms only. Nothing here is legal advice. Requirements vary by jurisdiction, organisation type, and use case. Consult qualified legal specialists for guidance specific to your situation.</small></p>

**Table 11**

*AI-Content Marking Readiness*

| Attribute | Value |
|-----------|-------|
| Origin | https://www.careington.com |
| Reference | EU AI Act Article 50; European Commission Code of Practice on marking and labelling of AI-generated content (13 June 2026) |
| Readiness level | Level 0 (Unmarked) |
| Markers present | 0/4 |
| Verdict | unmarked |

### Markers

**Table 12**

*Markers*

| Marker | Present | Detail | Note |
| --- | --- | --- | --- |
| MX provenanceOrigin | no | None | Machine-authorship declaration carried in the file (MX). |
| IPTC Digital Source Type | no | None | Standard machine-readable AI-content marker a detector reads. |
| C2PA Content Credentials | no | None | Content-authenticity manifest signal (presence recorded, not verified). |
| AI-disclosure meta | no | None | Generic, non-standard disclosure tag. |

### Probe findings

- No machine-readable machine-authorship marking was found on the homepage: no MX provenanceOrigin, no IPTC Digital Source Type, no C2PA signal, no AI-disclosure meta. A machine reading this page cannot tell whether its content was generated or altered by a machine. From 2 August 2026 the EU AI Act Article 50 expects AI-generated or AI-manipulated content to carry exactly such a marker.
- Marking readiness here is about whether content announces machine authorship in a machine-readable way. MX provenanceOrigin declares the authorship; a content-authenticity watermark (C2PA, SynthID) proves a file is synthetic. The two are complementary, and this probe reports readiness, not compliance with any regulation.
- **No machine-readable authorship markers were found.** A machine reading this page cannot tell whether its content was generated by an AI tool or written by a person - absence of markers means undeclared, not "human." If this site's content is entirely human-authored, a positive declaration would make that explicit and provide a trust signal to regulators and AI citation engines. Options: add `MX provenanceOrigin: human` in page metadata, or apply IPTC Digital Source Type `humanCreated` to image assets. Either is better than silence.

A boundary this section keeps honest: a machine-authorship declaration (MX `provenanceOrigin`) states who or what authored the content; a content-authenticity watermark (C2PA, SynthID) proves a file is synthetic. They are complementary, and marking readiness here is a structural signal, not a certification that this site meets any regulation.

---

## Structured Data Inventory

No Schema.org JSON-LD entities were detected across the audited set. Adding at least one typed entity per page (e.g. `Organization` on the homepage, `Product` or `Article` on content pages) is the highest-impact improvement for what machines can read from each page.

11 of 11 audited pages carry no Schema.org JSON-LD: `/`, `/careers`, `/businesses-and-organizations`, `/businesses-and-organizations/our-services`, `/businesses-and-organizations/frequently-asked-questions`, `/brokers-and-consultants` and 5 more. Adding JSON-LD to these pages brings them into the structured data coverage.

Across the 11 pages we audited, structured data is limited. Machines cannot reliably extract entity data from these pages. Adding Schema.org JSON-LD with required properties is the highest-impact improvement.

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what Careington earns in each.

**Table 13**

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

We found that **Presence** and **Required coverage** are the lowest-scoring components, each scoring zero across the audited set. This indicates a Clean Slate schema maturity level, meaning the site currently lacks any structured data signals for machines to interpret.

---

## Structured Data Findings

This is a clean-slate site with no Schema.org markup. There are no property gaps to report because no typed entities exist yet; every structured data addition is net new capability. The served HTML is machine-readable (served score 68/100); agents can extract content without JSON-LD.

---

## Marker Reachability

**Table 14**

*Marker Reachability*

| Marker                            | In served   | In rendered | In head | Reachable <250KB | Injected by JS |
|-----------------------------------|-------------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Not present | Not present | n/a | n/a | n/a |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Not present | Not present | n/a | n/a | n/a |
| Twitter Card meta tags | Not present | Not present | n/a | n/a | n/a |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Yes | Yes | Yes | Yes | No |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Not present | Not present | n/a | n/a | n/a |

All detected markers are present in the served HTML on the pages we audited. Server-side and browser-based agents see the same signals on the sampled pages.

---

## Schema Maturity Level

Schema.org implementations fall into five maturity tiers. The transitions are not continuous. Each level requires structurally different work. Maturity is a structural classification: it depends on what the markup carries (typed blocks, required properties, cross-references, external identifiers), not on the SDQ score the markup happens to earn. A page can sit at Level 1 with a high SDQ score and at Level 3 with a moderate one. Score and level are reported separately.

**Table 15**

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

The classification is conservative: every Schema.org block on every audited page must clear a level's bar for this site to claim it, so a handful of thin blocks or pages without markup caps the level even when most pages individually sit higher. That is deliberate. An agent does not choose which page it lands on, so the level reflects what the weakest landing point guarantees.

---

## 5-Stage MX Journey

The MX Journey maps the five stages a machine follows when interacting with a website. Each stage builds on the previous one. A break at any stage propagates to all subsequent stages.

**Table 16**

*5-Stage MX Journey*

| Stage | Name              | Status      | Score | Key Metric                                        |
|-------|-------------------|-------------|-------|---------------------------------------------------|
| 1 | Discovery | Partial | 67 | Issues: no <main> |
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

- **Truncation Risk** - Pass · 0/11
- **SPA Shell** - Pass · 0/11
- **Soft 404** - Pass · 0/11
- **Boilerplate Burial** - Pass · 0/11
- **Tabbed Disclosure** - Pass · 0/11
- **Delayed Content Start** - Pass · N/A
- **Broken Code Fences** - Pass · 0/11
- **HTTP Content Negotiation (Vary)** - Pass · 0/11
- **Cross-Host Redirect** - Pass · 0/11
- **Generic Headings** - Pass · 0/11
- **Body Content Ratio** - Pass · N/A
- **Inline Tag Bloat** - Fail · 11/11
  - *Means:* 11 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches.
  - *Data:* 11 element(s) > 500 bytes. Largest single-page inline CSS block: 0 B. Largest single-page inline JS block: 2366 B. See www-careington-com-pipeline-inline-tag-bloat-pages.csv (11 pages).
- **Head Weight** - Pass · N/A

**Pipeline Survivability score:** 92/100
Pages reach agents intact with no observed survivability issues.

All 11 audited pages exhibit inline tag bloat, a resilience check that can hinder machines from efficiently parsing the markup. Because of this bloat, agents may experience slower load times or incomplete rendering, limiting their ability to extract content accurately. Refactoring the HTML to reduce inline tag density offers the greatest impact, turning an opportunity into stronger machine comprehension and faster processing.

For the methodology behind this section, the relevance layer concept, and the canary-token method that informs the check set, see **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Semantic Structure: landmark roles for machine navigation

When a page's containers are generic `<div>` elements with no role, no ARIA landmark, and no class name that describes what they are, machines lose structural context and fall back on positional inference ("the third region from the top is probably navigation") to determine meaning. The visual layout still works for sighted users; the structural information that machines need to index, cite, and represent each page is missing. Component frameworks emit generic containers by design, so this is usually a component-level configuration fix (add landmark roles), not a rebuild.

We measure semantic structure on both served and rendered HTML so we can tell whether the generic containers are in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page whose regions carry landmark roles; score 0 is the worst case (every region is a generic nested container with no role).

**Table 17**

*Semantic Structure: landmark roles for machine navigation*

| Source | Score (band) | Generic-container stats | Top container selectors |
|--------|--------------|----------------|--------------------|
| Served and rendered | 35/100 (many generic containers) | 82 generic containers (59% of containers, depth 6) | `div.row` (271), `div.dropdown-divider` (169), `div.col-sm-5.text-sm-right` (88), `div.col-sm-7` (88), `div.container-fluid` (19) |

**Worst page (served and rendered are identical):** [/careers](https://www.careington.com/careers)

Across the audited set, the rendered surface shows the highest generic-container ratio on the worst page (https://www.careington.com/careers), where 83 of 148 elements are bare divs; this forces machines to abandon structural cues and rely on positional inference.  
The pattern is a deep container chain with moderate depth, typical of a component framework such as Bootstrap; the high density is expected from that framework and represents a component-level issue rather than a fault in the source pipeline.  
A low-cost first step is to wrap key landmarks-header, nav, main, footer, aside-with their semantic elements or landmark roles and assign meaningful class names to remaining containers, which will reduce the generic-container ratio without altering layout.

---

## Security Headers

**Table 18**

*Security Headers*

| Header                          | Status   | Purpose                                          |
|---------------------------------|----------|--------------------------------------------------|
| HTTPS | Yes | Encrypted transport |
| HSTS | Yes | Forces HTTPS, prevents downgrade attacks |
| Content-Security-Policy | No | Prevents XSS and injection attacks |
| X-Frame-Options | Yes | Prevents clickjacking |
| X-Content-Type-Options | Yes | Prevents MIME-type sniffing |

One of the five standard security headers is absent on every audited response: Content-Security-Policy (CSP). Adding it at the origin-server or CDN edge closes the corresponding attack surface without touching application code.

**Coverage:** 0 of 11 audited URLs carry all five headers; see the Security Headers appendix for the full exception list.

- **`/`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/careers`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/businesses-and-organizations`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/businesses-and-organizations/our-services`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/businesses-and-organizations/frequently-asked-questions`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/brokers-and-consultants`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/brokers-and-consultants/current-brokers`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/brokers-and-consultants/frequently-asked-questions`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/dentists-and-dsos`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/dentists-and-dsos/prospective`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes
- **`/dentists-and-dsos/current`**: HTTPS Yes · HSTS Yes · CSP No · X-Frame Yes · X-Content-Type Yes

HTTPS: 11/11 | HSTS: 11/11 | CSP: 0/11 | X-Frame-Options: 11/11 | X-Content-Type-Options: 11/11

---

## Data Quality and Consistency

### Cross-Page Consistency

**Table 19**

*Cross-Page Consistency*

| Pattern                          | Coverage | Pages missing it   |
|----------------------------------|----------|--------------------|
| Schema.org JSON-LD | 0% | 11 |
| MX governance tags | 0% | 11 |
| Open Graph tags | 0% | 10 |
| Twitter Card tags | 0% | 10 |
| Skip link | 0% | 10 |
| llms.txt link tag | 0% | 10 |
| Canonical URL | 100% | None |
| Exactly 1 H1 | 100% | None |
| Code examples present | 0% | 11 |
| Self-contained sections | 100% | None |
| Error/troubleshooting docs | 0% | 11 |
| Lighthouse heading compliance | 27% | 8 |

**Overall Consistency:** 32%
Fewer than half the tracked metadata patterns apply across all pages; agents reading different pages get different signal quality.

Some pages in the 11-page sample are missing metadata patterns that others carry. Machines hitting different pages get different quality data. The Missing Pages column shows where to focus on the sampled pages.


---

### Content Consistency

The audited set shows consistent metadata patterns across pages, with no brand-name, canonical-URL, meta-description, or entity divergence detected.

**Table 20**

*Content Consistency*

| Check                            | Result | Notes                    |
|----------------------------------|--------|--------------------------|
| Brand-name parity | Consistent | Single unique page  -  no cross-page parity check possible |
| Canonical URL duplicates | Pass | Canonical tag present on 10 audited pages; no cross-page duplicates to test in a single-page or term-thin sample |
| Meta description length | Not tested | Insufficient pages for distribution analysis |
| Cross-page entity spread (same entity on multiple pages) | No entities detected | Audit scope: 1 unique page |

Every consistency check passes, so an agent reading any two audited pages receives the same brand, canonical, and entity signals.

---

## Inline Code Duplicates

We found 9 identical inline fragment(s) repeated across multiple pages, totalling 27 KB redundant bytes. Extracting these to external CSS or JS files would reduce page weight, improve cacheability, and simplify maintenance.

**Table 21**

*Inline Code Duplicates*

| Type | Bytes per fragment | Appears on N pages | Preview                                                          |
|------|-------------------:|-------------------:|------------------------------------------------------------------|
| js | 1201 | 11 | var _vwo_code=(function(){ var account_id=54538, settings_to |
| js | 423 | 11 | !function(b,e,f,g,a,c,d){b.fbq\|\|(a=b.fbq=function(){a.callMe |
| js | 341 | 11 | (function(w,d,s,l,i){w[l]=w[l]\|\|[];w[l].push({'gtm.start': n |
| js | 283 | 11 | var $buoop={vs:{i:10,f:-4,o:-4,s:7,c:-4},api:4};function $bu |
| js | 230 | 11 | (function(){var a=document.createElement("script");a.type="t |
| js | 81 | 11 | var dteNow = new Date;var intYear = dteNow.getFullYear();doc |
| css | 89 | 8 | body{opacity:0 !important;filter:alpha(opacity=0) !important |
| js | 73 | 6 | $(document).ready(function(){$('.phonenumber').mask('(000) 0 |
| js | 151 | 5 | function countChar(val) {var len = val.value.length;if (len  |

**Recommendation:** Move each duplicate fragment to a shared external file (`<link rel="stylesheet">` for CSS, `<script src="...">` for JS). The fragment hash in `consistency_analysis.json` identifies exactly which blocks are identical.

---

## Infrastructure and Hosting

The site is served via **Cloudflare** (Cloudflare, Inc.). Platform is estimated to be **Unknown Platform**, though signals are ambiguous. The site loads third-party scripts from HubSpot, all US-hosted. A privacy notice should name each processor and their data location.

**Table 22**

*Infrastructure and Hosting*

| Category | What we found | Risk |
|----------|---------------|------|
| Third-party embed | HubSpot (US) | forms/CRM - named in privacy notice |

- **US-hosted third-party services** (HubSpot): visitor data is processed by US companies. Confirm your privacy notice names each processor, their country, and the legal basis for transfer (adequacy decision, SCCs, or UK IDTA).

---


We linked no PDFs from the 11-page sample we crawled, and the sitemap declares no `.pdf` URLs either. This is a statement about what we sampled and what the sitemap reports, not a verdict about the wider document estate: PDFs do not appear in this count if they sit behind login forms, are linked only from uncrawled pages, are stored in unlinked directories, are kept out of the sitemap, or are hosted on third-party domains.

PDFs are part of the machine-readable estate but sit outside this HTML audit's scope. A dedicated PDF review checks each public document against the ISO 14289-1 (PDF/UA) baseline (Tagged, Declared, Verified) and returns a per-document verdict.

---

## Text Patterns

Analysis of text patterns across audited pages found content reaching Probably AI on the AI-tells scale (2 of 11 pages scored). Machines do not consistently cite or label AI-generated content; this observation describes what the analysis found, not a conclusion about authorship.

**/careers** (Occasional) - vocabulary, prose patterns.

**/businesses-and-organisations** (Occasional) - prose patterns.

**/businesses-and-organisations/frequently-asked-questions** (Occasional) - prose patterns.

**/brokers-and-consultants** (Probably AI) - prose patterns, vocabulary, copula density.

**/brokers-and-consultants/frequently-asked-questions** (Hints at AI) - prose patterns.

6 of 11 audited pages read clean of AI-writing patterns.

The prose appears largely conventional with occasional use of specialized vocabulary and varied sentence structures, indicating a balanced mix of clarity and domain specificity. This aligns well with the expectations for career guidance, business information, and professional consulting pages, which typically blend accessible language with industry-relevant terminology.

---

## Content Uniqueness

2 of 11 pages carry distinctive content. 9 pages have content that appears on multiple pages, giving machines redundant information per page. Pages with Significant Duplication give agents redundant signals with no additional information, reducing the effective page count a crawl budget can usefully read.

**Table 23**

*Content Uniqueness*

| Page | Unique content | Band |
|------|---------------|------|
| /dentists-and-dsos | 20% | Low Machine Value |
| /dentists-and-dsos/current | 25% | Low Machine Value |
| /dentists-and-dsos/prospective | 33% | Significant Duplication |
| / | 39% | Significant Duplication |
| /businesses-and-organisations/our-services | 42% | Significant Duplication |
*Showing the top 5 of 10 pages by duplication level. Full per-page scores are in `www-careington-com-content-uniqueness.csv`.*
The remaining page scored Distinctive or Expected Boilerplate.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 findings**: address the 25 WCAG 2.1 AA accessibility issues identified (regulatory exposure)
2. **Review Priority 2-3 findings**: Structured Data improvements and metadata tuning that compound over time
3. **Consider optional enhancements**: optional patterns that give a early-mover opportunity in AI search

### What's Next

**Table 24**

*What's Next*

| Phase | Scope | Outcome |
|-------|-------|---------|
| Critical Fixes | P1, P2, P3, P4, P5, P6, P7, P8 (Compliance Risk) | Priority 1, 2, 3, 4, 5, 6, 7, 8 resolved: WCAG 2.1 AA accessibility compliance restored |
| Full Implementation | P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12 (P1-P12) | Full machine readiness: every agent, search engine, and structured-data consumer can read, trust, and act on the site |
| Ongoing Monitoring | Continuous monitoring and quarterly audits | durable visibility in agent-mediated discovery |
| Machine-Ready Estate | Web estate + PDFs + data feeds + APIs + documents | The full machine-readable estate, beyond the web pages |
| Data-Sovereign Option | Regulated industries | Run the full audit pipeline on your own infrastructure - no client content leaves your network |

This audit is a starting point. The outcome we work toward is a site any machine can read, trust, and act on, and a dated, attested record you can show to a regulator, a partner, or an acquirer on request. Reaching it (structured data, discovery files, accessibility, governance metadata, and re-audit on a schedule you set) is available as a managed service. We also run training sessions that give development teams the MX vocabulary and implementation patterns directly, so the gap between findings and fixes is weeks, not quarters. To take any of it further, contact CogNovaMX Ltd at <info@cognovamx.com>.

---


### Audit Scores

Each dimension is measured independently. Served dimensions reflect each page before JavaScript runs; Rendered dimensions reflect what a browser produces after JavaScript executes. The Notes column explains the measurement method for each score.

**Table 25**

*Audit Scores*

| Dimension | Score | Band |
|-----------|-------|------|
| Served-HTML Structure | 68/100 | Good |
| Accessibility | 93/100 | Good |
| SEO (all pages) | 81/100 | Excellent |
| SEO (content pages) | 81/100 | Excellent |
| MX Stack Completeness | 39/100 | Could Be Better |
| Structured Data Quality | 0/100 | Needs Improvement |
| Discovery Readiness | 10/100 | Needs Improvement |
| Heading Quality | 84/100 | Excellent |
| Agent Readability | 64/100 | Good |
| Pipeline Survivability | 92/100 | Excellent |
| Cross-Page Consistency | 32% | Could Be Better |

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
  SEO 81 · A11y 95 · Backend 55 · Served 71 · Rendered 68
- **/careers**
  SEO 88 · A11y 95 · Backend 55 · Served 86 · Rendered 83
- **/businesses-and-organisations**
  SEO 76 · A11y 85 · Backend 55 · Served 52 · Rendered 49
- **/businesses-and-organisations/our-services**
  SEO 76 · A11y 95 · Backend 55 · Served 81 · Rendered 78
- **.../businesses-and-organisations/frequently-asked-ques...**
  SEO 84 · A11y 95 · Backend 55 · Served 96 · Rendered 93
- **/brokers-and-consultants**
  SEO 79 · A11y 90 · Backend 55 · Served 28 · Rendered 25
- **/brokers-and-consultants/current-brokers**
  SEO 78 · A11y 90 · Backend 55 · Served 55 · Rendered 52
- **/brokers-and-consultants/frequently-asked-questions**
  SEO 86 · A11y 95 · Backend 55 · Served 96 · Rendered 93
- **/dentists-and-dsos**
  SEO 77 · A11y 95 · Backend 55 · Served 81 · Rendered 78
- **/dentists-and-dsos/prospective**
  SEO 79 · A11y 95 · Backend 55 · Served 53 · Rendered 50
- **/dentists-and-dsos/current**
  SEO 82 · A11y 95 · Backend 55 · Served 53 · Rendered 50

*Backend: score for HTML served without JavaScript. Served: AI suitability from served HTML. Rendered: AI suitability after JavaScript.*

The page marked (nav) is navigational: it routes visitors to content rather than containing it, and is excluded from the SEO content average. Content-pages SEO average: 81/100.

---

## Appendix B: Link Inventory

We recorded every same-host internal link found on each audited page. External links are not tracked; this inventory covers same-host `<a href>` links only. Link status was not probed; for a dedicated broken-link audit, run a rate-limited crawler on the link set at a time that suits the site.

Per page, internal links range from 41 to 43, averaging 42 across 11 crawled pages. That is typical (benchmark median 20 per page).

**Table 26**

*Appendix B: Link Inventory*

| Link class | Count |
| --- | ---: |
| Same-host internal links (all pages) | 459 |
| External links (not tracked) | -- |
| Anchor-only (`#fragment`) links | 0 |
| mailto / tel links | 0 |
| URL variant links (same canonical) | 11    |

At 42 internal links per page on average, the internal navigation graph sits within the typical range for sites of this type (benchmark median 20). No hash-fragment links were found - the site navigates entirely by full-page URL, which is standard for content and service sites. No inline mailto or tel links appear in page content; direct contact routes through a form.

---

## Appendix C: Image Efficiency

We reviewed 139 images across the audited set: 133 PNG and 6 JPEG. 138 of 139 (99.3%) carry alt text, leaving 1 without it. Each missing alt attribute is a place where a screen-reader user or a machine reading the page gets no description of what the image shows.

On loading strategy, 0 images are marked `loading="lazy"` and 0 `loading="eager"`, while 139 carry no loading attribute at all. No attribute is not the same as eager: the browser decides for itself when to fetch, which removes the explicit control that lazy and eager give you. Setting an explicit attribute on those images makes the fetch behaviour predictable for browsers and machines alike.

PNG and JPEG account for 100% of the 139 images (133 and 6 files respectively). None use WebP, the modern format that typically reduces file size by 25-35% over PNG or JPEG with no visible quality loss.

**Table 27**

*Appendix C: Image Efficiency*

| Format | Count | Share |
|--------|-------|-------|
| PNG | 133 | 96% |
| JPEG | 6 | 4% |

---

## Appendix D: Audit Methodology

**Tools:** Web Audit Suite v2.x (automated WCAG 2.1 AA accessibility checks, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency)

Accessibility is assessed with an open-source automated testing tool that checks web pages against the Web Content Accessibility Guidelines (WCAG 2.1 AA).

Accessibility testing here is automated only. Automated tools reliably detect roughly a third to a half of WCAG 2.1 AA success criteria - typically contrast, missing alternative text, form-label association, and document-structure errors. They cannot evaluate the criteria that need human judgement: keyboard operability and focus order, the absence of keyboard traps, logical reading and tab sequence, meaningful link and heading text in context, error-recovery flows, and cognitive load. A clean automated pass is a necessary baseline, not a certification: an automated tool cannot certify WCAG 2.1 AA conformance, and a full conformance claim needs manual expert testing and assistive-technology walkthroughs. The accessibility score reflects the automated-checkable subset only.

**MX-specific metrics:** MX Stack Completeness measures all 7 metadata layers. Structured Data Quality (SDQ) scores JSON-LD entity richness. Discovery Readiness scores the robots.txt + sitemap + llms.txt + agent-card.json quartet. Cross-Page Consistency flags pages that deviate from site-wide patterns. Site Profile JSON enables cross-audit comparison. **Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full taxonomy and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** We fingerprint the hosting platform from HTTP response headers, HTML signatures, asset paths, and class patterns. Platform identification is probabilistic -- a site can obscure or mimic platform signals. We report the result as: No platform detected. No platform-specific fingerprint was detected, so the audit used conservative default rate limits, paced slowly enough to stay below typical shared-host thresholds, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Frameworks detected:** **Bootstrap**  -  CSS framework; **Foundation** (low confidence)  -  CSS framework. Framework detection scans JS component frameworks, CSS utility libraries, CMS plugins and page builders, and CDN/delivery layers from the audited pages. Confidence is high (3+ signals), medium (2 signals), or low (1 signal, treat as a hint). Low-confidence detections are noted but do not influence scoring.

**Link inventory:** We record every internal link found on every audited page with its URL, anchor text, and link type. We do not probe link status: a dedicated, rate-limited broken-link crawler handles that separately and avoids hammering the origin. Appendix B is a link inventory, not a broken-link list.

**Scope:** 11 pages examined | Platform: Unknown Platform | Analysis method: Automated checks with expert review | robots.txt: Present (22 directives)

**Measurement completeness:** Every probe completed during this audit, with no network errors or timeouts. The findings below rest on a full data collection.

**What comes next.** This report is the foundation, not the finish line. Implementing the recommendations requires the technical knowledge that produced them; we bring that forward. Our implementation engagements begin where this audit ends.

We work toward a site - and an estate of documents beyond it - that any machine can read, trust, and act on. It holds its own dated, attested record for anyone who needs to verify that claim. Reaching it - structured data, discovery files, accessibility, governance metadata, and re-audit on a regular schedule - is available as a managed service or as licensed tooling your team runs independently. We also run training sessions that give development teams the MX vocabulary and implementation patterns directly. To take any of it further, contact CogNovaMX Ltd at info@cognovamx.com.

### About This Report

We audited 11 pages across www.careington.com's site using the Web Audit Suite. We also reviewed the site's discovery files (sitemap.xml). We review each page across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image efficiency, security headers, content consistency, discovery file coverage, and machine pipeline survivability.

We fetch every page twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

We then review automated findings by hand before completing this report. The automated pass identifies what is present or absent; we read that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns we see repeatedly across sites on the same platform we note as characteristics of that platform rather than site-specific gaps. When new agent patterns emerge, we update what we look for.

**How we build it.** We use scripted SOPs running deterministic checks rather than inference. The crawl, the served-versus-rendered comparison, the structured-data extraction, the accessibility passes, the discovery-file probes, the platform fingerprinting and the per-section scoring all run as scripts producing byte-identical outputs on the same input. A small number of stages run a judgement pass over the resulting report; that is the only inference layer. Those judgement passes can run against a local model, so the whole audit runs inside the organisation's own network with nothing leaving it: relevant where content is regulated or privacy-sensitive. Every AI decision made during the audit is recorded in the provenance layer attached to this document - the AI and deterministic evidence sidecars embedded in the PDF. The only connection the audit makes to the internet is fetching the pages of the website being audited. Nothing is sent out.

Our scoring criteria follow published MX standards and proposed specifications maintained at [The Gathering](https://tg.community). Where established external standards apply: WCAG 2.1, Schema.org, RFC 9309, W3C: those take precedence. MX addresses governance and machine experience metadata in the areas those standards do not cover. The methodology behind every section of this report is documented in full in MX: The Protocols at [MX: The Protocols](https://mx.allabout.network/books/).

**What we cover here, and what MX covers.** This report looks at the web estate: every page served over HTTP, examined for metadata, structured data, accessibility, and what machines can read. MX runs deeper, covering every document type a business publishes (PDFs, data feeds, API responses, structured documents) and the machines that read them. The web estate is the foundation; the rest builds on it.

**Audit scope.** Findings throughout this report describe what we observed on the 11 HTML pages we examined in depth, drawn from a sitemap of 153 URLs. We also reviewed the site's discovery files (sitemap.xml). Structural findings - a missing header, a soft 404 pattern, a discovery file gap - hold across the full estate and are noted as such. Verdicts scoped to the sampled pages should not be extrapolated to the full estate without a wider audit.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. The Discovery Files section below records its presence, transport type, and sitemap registration, and covers the two structural problems (content type and discovery) that limit most implementations.

---

## Appendix E: Markdown Content Negotiation

**Table 28**

*Appendix E: Markdown Content Negotiation*

| Check | Result |
|-------|--------|
| URL probed | https://www.careington.com |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No  -  server returned HTML regardless of Accept header |

The site returns standard HTML to all requests, including those carrying `Accept: text/markdown`. Markdown content negotiation is a feature that lets a server deliver a lighter, markup-free page to agents that request it - reducing the parsing load on the agent side. It is an optional enhancement with no compliance obligations attached. One consideration before enabling it: Markdown conversion strips `<head>` metadata, governance fields, and discovery signals, so any page carrying MX fields, canonical URIs, or structured data in the document head would lose those signals for agents that receive the Markdown version. Whether the reduction in parsing cost outweighs that loss is a publisher decision; this probe records the current state.

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
| ![The Gathering QR](assets/qr/tg-community.png){ width=15mm } | **[The Gathering](https://tg.community)**: the community-led open-standards body that governs the MX metadata standard.\ <https://tg.community> |
| ![MX Books QR](assets/qr/books-index.png){ width=15mm } | **[MX: The Protocols](https://mx.allabout.network/books/)**: the practitioner reference covering the scoring methodology and implementation patterns behind this report.\ <https://mx.allabout.network/books/> |
| ![Provenance Gap QR](assets/qr/provenance-gap.png){ width=15mm } | **[The Provenance Gap](https://mx.allabout.network/blog/the-provenance-gap.html)**: the structural distinction between content that describes a claim and content that evidences it - and why machines treat unverified claims differently.\ <https://mx.allabout.network/blog/the-provenance-gap.html> |
| ![MX Inspector QR](assets/qr/mx-inspector.png){ width=15mm } | **[MX Inspector](https://mx.allabout.network/tools/pdf-inspector.html)**: drop this PDF into the browser-based inspector to read the full provenance chain, attestation, and machine-readability score - no command-line tools required.\ <https://mx.allabout.network/tools/pdf-inspector.html> |

---

\clearpage

## This Report's Own Evidence Chain

MX is to machines what UX is to users: it asks not whether a human can read this report, but whether a machine can read it, verify it, and act on it. A standard is credible only when we run on it ourselves, so we built this report to the standard it measures. You can inspect this PDF and read every claim it makes directly in your browser at the [MX Inspector](https://mx.allabout.network/tools/pdf-inspector.html) - no command-line tools, no login, no installation required. Drop the file, read the chain.

This report carries its own provenance. Every step that produced it is recorded in two adjacent JSON sidecars - one AI, one deterministic - and the full evidence chain travels inside the PDF's XMP metadata: extract it with `exiftool -b -XMP-mx:ProvenanceAiPayload www-careington-com-report.pdf | jq .`. The PDF is a tagged ISO 14289-1 (PDF/UA-1) Level 2 document with a complete reading-order structure tree. What this audit measures on a client's behalf, this deliverable meets.

Machine-readable content is visible to agents and validators. Machine-trustworthy content adds a provenance layer - a dated, attested record that names who published it and under what rubric. Readable is what MX makes content; the provenance layer is what makes it trustworthy. The two do different jobs, and this report carries both. It is an example of what that looks like in practice.

\clearpage

## Practice What We Preach: This Audit's Own Evidence Chain

A standard is credible only when we run on it ourselves. We hold this audit deliverable to the same MX standards we apply to the audited site; consider this working proof of the practice it recommends. Every consequential step that produced this report (LLM-driven prose passes, deterministic gate verdicts, multi-agent attribution probes, repair iterations) is recorded in two adjacent JSON sidecars next to this PDF.

The AI evidence chain records every non-deterministic step: the model identifier, the SHA-256 of the system prompt we ran (so an auditor can verify the rubric we used), the SHA-256 of the output it produced, a short excerpt of the model's reasoning, and the human-intervention state. This chain is designed as evidence for AI-governance regimes: EU AI Act, UK ICO AI guidance, US NIST AI RMF, and Colorado AI Act. The framework citations are claims of relevance, not compliance grants; conformance with each regulation remains a legal duty of the operator. This PDF holds the full AI evidence chain inside its XMP metadata under `xmp:ProvenanceAiPayload`. A regulator inspecting the PDF alone receives the entire chain; the adjacent `*.provenance.ai.json` is a copy of the same JSON for tooling that prefers file access.

The deterministic evidence chain is at `*.provenance.deterministic.json`. It records every rule-driven step: gate verdicts, CSV checks, regex matches, render steps, probe results, and the closing PDF conformance verdict. This chain is designed as evidence for EAA Directive 2019/882 accessibility-conformance. The deterministic file is named in the PDF's XMP metadata under `xmp:ProvenanceCompanion` so an inspector who has the PDF alone can walk to it on disk.

To extract the chain from the PDF, run `exiftool -b -XMP-mx:ProvenanceAiPayload www-careington-com-report.pdf | jq .`. The `-b` flag is required so exiftool emits the raw payload; without it the output includes a label that breaks the JSON parse. The two chains share `auditId`, `startedAt`, `operator`, and a `provenance` header naming the exact git commit of the audit tooling that produced this run, so anyone can re-run it and verify byte-for-byte what we did. We prefer determinism to inference: explicit over inferred, recorded over remembered, a result you can reproduce over one we could only explain. Where a check can be made by a rule, a rule makes it, and the rule leaves a record rather than an opinion. That is why this chain shows what we did instead of asking you to trust a summary of it.

**Verify this report yourself - no tools, no login, no installation.** Drop this PDF into the [MX Inspector](https://mx.allabout.network/tools/pdf-inspector.html) to read the full provenance chain, operator identity, and attestation in your browser, or run three commands directly against the file:

1. Extract the full AI evidence chain from the PDF: `exiftool -b -XMP-mx:ProvenanceAiPayload www-careington-com-report.pdf | jq .`
2. Confirm the operator identity: the JSON contains `operator.name`, `operator.email`, and `operator.organisation` naming the accountable individual.
3. Cross-reference the sidecar: `diff <(jq .auditId www-careington-com-report.provenance.ai.json) <(exiftool -b -XMP-mx:ProvenanceAiPayload www-careington-com-report.pdf | jq .auditId)`; both should return the same `auditId`.

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

**Date:** 4 July 2026\
(c) 2026 CogNovaMX Ltd. All rights reserved.

*This is a sample run over a subset of the site. CogNovaMX Ltd can scope a full-estate audit.*

