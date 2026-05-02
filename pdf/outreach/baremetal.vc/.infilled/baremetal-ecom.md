---
title: "E-commerce Audit Report Template"
description: "Client-facing e-commerce website analysis template v1.0 — derived from web-audit-suite-template v2.0, optimised for commerce sites with catalogue, pricing, and shopping-agent flows"
author: "Tom Cranstoun"
created: 2026-04-07
modified: 2026-04-07
version: "1.0"

mx:
  status: active
  contentType: template
  audience: [humans]
  buildsOn: [web-audit-suite-template]
  runbook: "E-commerce variant. Use when the audited site sells products and has a catalogue, prices, cart, or checkout. Leads with commerce signals (Product/Offer/ItemList/BreadcrumbList) rather than retrofitting them into Priority 1 of the generic template."
  generate:
    script: "scripts/bin/mx.pdf.sh"
    format: "pdf"
    output: "mx-outputs/pdf/outreach/2026-05-02/-report.pdf"
    description: "Generate PDF audit report for "
---

# : E-commerce Audit & Shopping Agent Readiness

**Prepared by:** Tom Cranstoun | CogNovaMX Ltd\
**Contact:** <info@cognovamx.com> | <https://allabout.network>\
**Date:** 2 May 2026\
**Report ID:** -ECOM-AUDIT-20260502

---

## About This Report

This report covers 1 page audited across baremetal.vc's site using the Web Audit Suite. Each page is analysed across ten dimensions: performance (load time, Core Web Vitals), accessibility (WCAG 2.1 AA), SEO, semantic HTML structure, structured data quality, image optimisation, security headers, content consistency, discovery file coverage, and AI pipeline survivability.

Every page is fetched twice: as a server-side agent sees it (raw served HTML, no JavaScript) and after full browser rendering. The gap between those two results is the served-versus-rendered gap: the share of content invisible to agents that do not execute JavaScript. Server-side agents, including those behind ChatGPT, Claude, and Perplexity, parse served HTML only.

Automated findings are reviewed by a human consultant before the report is finalised. The automated pass identifies what is present or absent; the human review reads that against context, distinguishing platform constraints from implementation choices and findings worth acting on from those the platform makes unavoidable. Patterns that appear repeatedly across sites on the same platform get noted as platform characteristics rather than site-specific gaps. When new agent behaviours emerge, the audit updates what it looks for.

The scoring criteria follow published MX standards and proposed specifications maintained at [https://tg.community](https://tg.community). Where established external standards apply — WCAG 2.1, Schema.org, RFC 9309, W3C — those take precedence. The MX framework addresses governance and machine experience metadata in the areas those standards do not cover.

### A note on llms.txt

The [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html) convention places a structured description file at a site's root for AI systems to read, following the same pattern as robots.txt. Where a site publishes it, this report records its presence, transport type, and whether it is included in the sitemap.

Two structural problems currently limit its practical reach. The first is content type: the llmstxt.org specification defines `text/plain` as the content type for llms.txt files. We recommend serving llms.txt as `text/html` instead — Common Crawl, the archive underpinning most major LLM training datasets, indexes only HTML files, meaning a plain-text llms.txt never enters training corpora regardless of its content quality. The fix is to wrap the raw text in a minimal HTML document with the content inside a `<pre>` block and return `Content-Type: text/html` from the server or CDN edge. The second problem is discovery: without a sitemap entry, crawlers have no reliable signal that the file exists.

The Discovery Files section records llms.txt presence, transport type, and sitemap registration. Where it is absent, the report notes the gap and the effort required to address it.

---

## Executive Summary

| Dimension | Score | Bar |
|:---|---:|:---|
| Performance | **97**/100 | `#######################--` |
| Accessibility | **15**/100 | `####---------------------` **(!)** |
| SEO | **54**/100 | `##############-----------` |
| AI Suitability | **81**/100 | `####################-----` |
| MX Stack | **19**/100 | `#####--------------------` **(!)** |
| Pipeline Survivability | **92**/100 | `#######################--` |
| **Commerce Visibility** | **0**/100 | `-------------------------` **(!)** |

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 2-3 paragraphs opening the Executive Summary in a warm, professional consultant voice.
PATTERN (follow strictly):
- Paragraph 1: Affirm what the site does well for HUMAN visitors. Reference specific design, content, or brand strengths. Lead with the human. Use the "Strongest human-experience dimension" fact as the anchor ("SEO foundations are solid", "performance is excellent"). Do NOT anchor on machine-experience dimensions (AI Suitability, Discovery Readiness, Structured Data Quality) — those belong in Paragraph 2.
- Paragraph 2: Introduce the machine-experience OPPORTUNITY. Frame it as the next natural step, not a failing. Use the phrase "the headline opportunity is..." or "the opportunity we want to draw attention to is..." Cite the specific machine dimension that most moves the needle. If there are WCAG AA issues, name accessibility as a Priority 1 compliance item here, before the MX opportunity.
- Optional Paragraph 3: If there is a served-vs-rendered gap or a platform constraint, name it — and note that Schema.org JSON-LD is the highest-leverage asset that every agent can read regardless of rendering.
SCOPE: This is a single-page audit. Do NOT write "site-wide", "across the site", or any claim that generalises beyond the one audited page.
ACCESSIBILITY NOTE: There are 17 WCAG AA issues. If Accessibility is not grade A, do NOT call it the "strongest" dimension in Paragraph 1. Acknowledge the accessibility opportunity in Paragraph 2 as a Priority 1 compliance item before the MX opportunity.
BANNED WORDS: "failing", "failure", "gap" (as verdict), "weakness", "broken", "poor", "deficient", "inadequate", "lacking" (as verdict), "site-wide" (unless facts explicitly confirm multi-page consistency).
PREFERRED WORDS: "opportunity", "headline opportunity", "next step", "room to strengthen", "foundation", "the chance to", "solid", "the groundwork is there".
TONE: "You did good for humans — now build for machines." Never condescending. Never a list of failings. Every metric is framed as a relative position that a concrete improvement can lift.
VOICE: First-person plural ("we audited", "we found", "we recommend"). NEVER use singular "I" — the consultancy speaks as a team.

Facts (do not change any number, percentage, URL, page count, or name):
- Platform: Webflow
- Pages audited: 1
- SEO: 54/100 (Good)
- Accessibility: 17 critical WCAG AA issues
- AI Suitability (served): 81/100
- Structured Data Quality: 0/100
- Discovery Readiness: 10/100
- Catalogue Visibility: 0/100
- MX Readiness Level: 0 (Not Ready)
- Schema Maturity: Level undefined (undefined)
- Strongest human-experience dimension: performance
- Lowest machine-readiness score: 0/100
-->

> 

\clearpage

## Balanced Scorecard

### Human Shopper Experience

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 1 sentence introducing the Human Experience subtable.

PATTERN: State how the site performs for human visitors. If scores are strong, affirm it ("the site delivers a strong experience for human visitors"). If one dimension is weaker, name it as the area for improvement without dwelling.

SCOPE: These scores cover the audited pages only — do NOT write "site-wide".

TONE: Factual, warm, peer-to-peer.

Facts (do not change any number, percentage, URL, page count, or name):
- Pages audited: 1
- Performance: 320ms avg (Excellent)
- Accessibility: 15/100 (Needs Improvement)
- SEO: 54/100 (Good)
- Accessibility issues: 17
-->

| Dimension | Rating | Grade |
|-----------|--------|-------|
| UX / Navigation | Excellent | A |
| Performance | Excellent | A |
| Accessibility (WCAG) | Needs Improvement | D |
| Trust and Credibility | Excellent | A |
| Product Discoverability (on-site) | Excellent | A |

### Shopping Agent Experience

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 1 sentence introducing the Machine Experience subtable.

PATTERN: State what AI agents can do with the site today. Frame scores as capabilities ("agents can discover and cite", "agents can read but not transact"), not as deficiencies.

SCOPE: These scores cover the audited pages only — do NOT write "site-wide".

TONE: Factual, warm, peer-to-peer.

Facts (do not change any number, percentage, URL, page count, or name):
- Pages audited: 1
- Discovery Readiness: 10/100
- Structured Data Quality: 0/100
- Metadata Stack Completeness: 19/100
- Pipeline Survivability: 92/100
-->

| Dimension | Score | Rating | Grade |
|-----------|-------|--------|-------|
| Catalogue Visibility | 0/100 | Needs Improvement | D |
| Discovery Readiness | 10/100 | Needs Improvement | D |
| Pipeline Survivability | 92/100 | Excellent | A |

---

## Catalogue Visibility Scorecard

| Agent Question | Required Markup | Site Has It? | Notes |
|----------------|-----------------|--------------|-------|
| "What does *[product name]* cost?" | `Product` + `Offer` + `priceCurrency` + `price` | [Yes/Partial/No] | [1-line note] |
| "Is *[product name]* in stock?" | `Offer.availability` | [Yes/Partial/No] | [1-line note] |
| "Compare *[brand]*'s *[category]* under [price]" | `ItemList` of `Product` entities with `Offer` | [Yes/Partial/No] | [1-line note] |
| "What's the customer rating of *[product name]*?" | `Product.aggregateRating` | [Yes/Partial/No] | [1-line note] |
| "Read reviews of *[product name]*" | `Product.review` (multiple) | [Yes/Partial/No] | [1-line note] |
| "Where does *[product name]* sit in the catalogue?" | `BreadcrumbList` | [Yes/Partial/No] | [1-line note] |
| "What's *[brand]*'s sleep / calm / focus range?" | `CollectionPage` + `ItemList` | [Yes/Partial/No] | [1-line note] |
| "Does *[brand]* offer this scent / size / variant?" | `Product` with `hasVariant` or `additionalProperty` | [Yes/Partial/No] | [1-line note] |
| "What's the return policy?" | `Product.hasMerchantReturnPolicy` or linked policy page | [Yes/Partial/No] | [1-line note] |
| "How long does shipping take?" | `Product.shippingDetails` or linked policy page | [Yes/Partial/No] | [1-line note] |

**Catalogue Visibility Score:** [N/10] questions answerable by structured data alone.

---

## Shopping Agent Scenario Tests

We tested how the site would perform if a shopping agent received these queries today:

| Scenario | Query Example | Answerable? | Why |
|----------|--------------|-------------|-----|
| Gift discovery in price range | "Find me a calming candle around £30" | [Yes/Partial/No] | [What's missing or present] |
| Mood-driven discovery | "Best [category] for [mood/use-case]" | [Yes/Partial/No] | [What's missing or present] |
| Variant query | "Does [brand] make a small [product]?" | [Yes/Partial/No] | [What's missing or present] |
| Brand comparison | "Compare [brand] vs [competitor] on [category]" | [Yes/Partial/No] | [What's missing or present] |
| Restock query | "Is [bestseller] back in stock?" | [Yes/Partial/No] | [What's missing or present] |
| Subscription/repeat query | "Set up a regular delivery of [product]" | [Yes/Partial/No] | [What's missing or present] |

**Result:** [N of 6 scenarios] are answerable from the site's current structured data.

---

## MX Readiness Level (Commerce)

|  | Level | Name | Publisher Capability | Agent Outcome (Commerce) |  |
|---|-------|------|----------------------|--------------------------|---|
| **→** | 0 | Not Ready | Auto-generated boilerplate | Agents cannot identify the brand | **←** |
|  | 1 | Basic | Brand identified, semantic HTML | Agents can find the homepage |  |
|  | 2 | Structured | Product/Offer/Breadcrumb schema | Agents can quote prices and compare |  |
|  | 3 | Trusted | Review/AggregateRating + return/shipping policy schema | Agents can give confident recommendations |  |
|  | 4 | Transactional | Shipping/availability live, agent-checkout-ready | Agents can complete purchases |  |
|  | 5 | Verified | Third-party verified inventory and pricing | Agents can guarantee accuracy |  |

**Current Level:** 0 — Not Ready

**Evidence:** Catalogue Visibility 0/100 | SDQ 0/100 | Discovery 10/100 | Consistency 100%

**To reach the next level:** raise Metadata Stack Completeness above 30 (currently 19) and raise Discovery Readiness above 15 (currently 10).

---

<div class="page-break"></div>

## What's Working Well

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 1-2 sentences introducing the "What is Working Well" table.

PATTERN: Affirm that the site has genuine strengths. Frame them as "a solid foundation" or "the groundwork for" the improvements that come next. Never say "despite X" or "even though Y".

SCOPE: Affirm only what the audited pages show — do NOT write "site-wide".

TONE: Warm, confident, peer-to-peer. The reader should feel recognised for what they have built.

Facts (do not change any number, percentage, URL, page count, or name):
- Pages audited: 1
- SEO (all pages): 54/100
- SEO (content pages only): null/100
- Accessibility: 15/100, 17 issues
- Security headers: 1/5 present (HTTPS); 0 of 1 pages have all five
- Structured Data Quality: 0/100
- Consistency: 100%
-->

| Dimension | Score | Highlights |
|-----------|-------|------------|
| Performance | 97 | Excellent — 320ms average load time |
| SEO | 54 | Good — titles, meta descriptions, canonical URLs in place |
| Security | 1/5 | HTTPS — 4 headers absent |
| Discovery (robots / sitemap) | 10 | Needs Improvement — robots.txt + sitemap discoverable, llms.txt wired |
| Schema.org | 0 | Needs Improvement — no Schema.org JSON-LD present yet |
| Heading Quality | 92 | Excellent — single H1 per page, no level jumps, Lighthouse-compliant |
| Cross-page consistency | 100% | 100% — same metadata patterns across every page |

**Positive patterns observed:**

- All 8 tested AI agents can fetch the site — ClaudeBot (Anthropic), GPTBot (OpenAI), ChatGPT-User (OpenAI), PerplexityBot, GoogleOther (Google AI), Google-Extended, CCBot (Common Crawl), Plain request (no UA) all return HTTP 200 at inference time.
- Body content ratio averages 57% — pages are content-heavy, not overhead-heavy, which helps agents reach real prose inside a cheap fetch.

---

## Findings

### At a Glance

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 1-2 sentences introducing the At a Glance findings table.

PATTERN: Describe the findings as opportunities prioritised by impact, not as a list of problems. State what the priority order was based on (e.g. "commerce schema gaps lead because they directly affect shopping agents", "discovery gaps lead because they block everything downstream").

BANNED: "issues", "problems", "failings", "deficiencies" as headline framing. These words can appear in individual finding titles where technically necessary, but not in the intro sentence.
PREFERRED: "opportunities", "areas to strengthen", "findings", "prioritised by impact".

Facts (do not change any number, percentage, URL, page count, or name):
- Pages audited: 1
- Structured Data Quality: 0/100
- Catalogue Visibility: 0/100
- Metadata Stack Completeness: 19/100
- Discovery Readiness: 10/100
-->

| # | Finding | Priority | Effort | Commerce Impact |
|---|---------|----------|--------|-----------------|
| 1 | [Product/Offer schema gap] | High | [Low/Med/High] | [Catalogue invisibility] |
| 2 | [BreadcrumbList / ItemList gap] | High | [Low/Med/High] | [Hierarchy invisibility] |
| 3 | [AggregateRating / Review gap] | High | [Low/Med/High] | [Trust signal absence] |
| 4 | [Open Graph / Twitter Card gap] | Medium | Low | [Social share previews] |
| 5 | [Accessibility issues] | Medium | [Low/Med/High] | [Audience reach + compliance] |
| 6 | [Cart / checkout performance] | Medium | [Low/Med/High] | [Conversion friction] |
| 7 | [Form field naming] | Medium | Low | [Autofill + agent checkout] |
| 8 | [llms.txt / FAQPage] | Low | Low | [Agent discovery hint] |

### Priority 1: No Offer Schema

**Finding:** [Describe — Product JSON-LD present but no nested Offer. Prices visible but not structured. State the structured_data_findings count.]

**What to change and why:** [2-4 concrete fixes, each a bullet. For every bullet give the WHY — which metric moves, which agent behaviour unlocks, which Core Web Vital improves, which WCAG criterion is addressed — not just the WHAT.]

**Effort:** [Low / Medium / High] — [one-line context on scope of change, e.g. "theme-level edit only" or "requires Shopify admin access"]

---

### Priority 2: Served HTML Empty (if SPA)

**Finding:** [Describe the SPA gap. Use gapCallout text.]

**What to change and why:** [Concrete SSR or pre-render fixes with the WHY for each.]

**Effort:** [Low / Medium / High] — [one-line context]

---

### Priority 3: WCAG AA Accessibility Issues

**Finding:** 17 critical WCAG AA issues across 1 page (Pa11y — automated WCAG 2.1 AA testing). [Describe the specific affected users.]

Pa11y findings for this audit (use ONLY these for specific recommendations):
- **WCAG 4.1.1** — Duplicate id attribute value "accordian-default-main" found on the web page. | selector: `#accordian-default-main` | 15 instances on 1 page | affects: all assistive tech users
- **WCAG 1.1.1** — Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link. | selector: `html > body > div > div > div > div > a` | 1 instance on 1 page | affects: screen reader users
- **WCAG 1.1.1** — Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link. | selector: `html > body > div > section:nth-child(3) > section > div > d…` | 1 instance on 1 page | affects: screen reader users

**What to change and why:** [Concrete WCAG-criterion-specific fixes using ONLY the Pa11y findings listed in WCAG_RECURRING_PATTERNS above. Name each finding by its WCAG criterion number and selector. Do NOT invent findings (e.g. keyboard-navigation or focus-order issues) not listed in the Pa11y data above.]

**Effort:** [Low / Medium / High] — [one-line context]

---

### Priority 4: No BreadcrumbList Schema

**Finding:** No BreadcrumbList JSON-LD on any page. Agents cannot determine the catalogue hierarchy.

**What to change and why:** [Concrete fixes + WHY.]

**Effort:** [Low / Medium / High] — [one-line context]

---

### Priority 5: No Review / AggregateRating Schema

**Finding:** No AggregateRating or Review entities on any product page.

**What to change and why:** [Concrete fixes + WHY.]

**Effort:** [Low / Medium / High] — [one-line context]

---

### Optional Enhancements

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

List 3-5 optional enhancement bullets relevant to this commerce site. Each bullet is a concrete Schema.org / commerce pattern that would strengthen AI-agent readiness but is not a blocking issue.

Common commerce enhancements: `CollectionPage` + `ItemList` schema on collection pages; `hasVariant` / `additionalProperty` for size/scent/colour variants; `hasMerchantReturnPolicy` and `shippingDetails` in Offer entities; `SearchAction` in `WebSite` schema for agent-driven product search; `sameAs` on Organization to Wikidata/LinkedIn.

Do NOT include llms.txt here if the site already has it. Do NOT include MX governance tags if the site already has them.

**Content-Signal conditional (MANDATORY check before including):**
Read `robots_txt_analysis.json` → `hasContentSignals` field.
- If `hasContentSignals === true`: do NOT include Content-Signal directives here — they are already present and belong in the What's Working Well / positive patterns section.
- If `hasContentSignals === false`: include as a gentle optional suggestion: `**Content-Signal directives** ([contentsignals.org](https://contentsignals.org)) in robots.txt to declare content-use policy for AI agents`.
-->

---

## Cart and Checkout Analysis

### Cart Page Performance

| Metric | Value | Assessment |
|--------|-------|------------|
| Load time | [N ms] | [Good / Slow / Very Slow] |
| First Contentful Paint | [N ms] | [Good / Slow / Very Slow] |
| Total Blocking Time | [N ms] | [Good / Slow / Very Slow] |

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 2-3 sentences assessing cart-page performance. Cart is the highest-intent moment in the funnel; slow loads here cost conversions.

CONDITIONAL — check Not measured first:
- If Not measured contains "Not measurable" or "Not measured": write exactly 1 sentence in active "we" voice: "Cart-page load time was not measured in this audit because [CART_LOAD_MS reason] — the 320ms audit average is the only reference point available." Do NOT add "once measured, if..." conditionals.
- If Not measured is a number below 1.2: affirm cart load is within normal range for this audit.
- If Not measured is a number ≥ 1.2: state the ratio, note it exceeds the 1.2 threshold, and suggest profiling with Chrome DevTools Performance panel for third-party scripts, recommendation widgets, or cart-drawer JS.

Facts:
- Cart-page load time (ms): Not measured
- Audit average load time (ms): 320
- Cart vs audit-average ratio: Not measured
-->

### Form Field Standards

| Page | Standard Field % | Autocomplete % | Assessment |
|------|------------------|----------------|------------|
| / (cart) | — | — | Not measured |
| /checkout | — | — | Not measured |
| Newsletter signup (site-wide average across audited forms) | 100% | 100% | Good |

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 1-2 sentences assessing checkout form-field standards. Note that standard field names (email, firstName, phone) and autocomplete attributes (autocomplete="email", autocomplete="given-name") unlock browser autofill, mobile keyboard hints, and shopping-agent form completion.
Facts from checkout_form_analysis (if present): Not measured, Not measured, Not measured.
-->

### Checkout Schema

| Pattern | Present | Notes |
|---------|---------|-------|
| `CheckoutAction` schema | Not measured | No CheckoutAction schema detected — manual review recommended |
| Shipping details exposed (`shippingDetails` on Offer) | Not measured | No product pages in the audited set |
| Return policy exposed (`hasMerchantReturnPolicy` on Offer) | Not measured | No product pages in the audited set |
| Trust badges visible (on product pages) | Not measured | Homepage cache unavailable — manual review recommended |

---

## AI Agent Access Test

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
| URL probed | https://baremetal.vc |
| HTTP status | 200 |
| Content-Type returned | text/html; charset=utf-8 |
| Markdown served | No — server returned HTML regardless of Accept header |

### Non-Standard Response Headers

No non-standard response headers were recorded in this audit.

---

## Error Page Test

| Check | Result |
|-------|--------|
| HTTP status code | 404 (correct) |
| Custom error page | No |
| Semantic HTML (`<main>`, `<nav>`, `<h1>`) | No |
| `<meta name="robots" content="noindex">` | No |
| Navigation back to valid content | No |
| MX governance tags | Not present |
| Schema.org JSON-LD (correctly absent) | [Absent (correct) / Present (incorrect)] |

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 1-2 sentences on the error page result. Use ONLY these facts.

Facts:
- HTTP status: 404 (correct)
- Custom error page: No — generic server error
- noindex meta: Absent — add noindex to error page
- Navigation back to valid content: No
- Internal links on error page: None
- SCOPE: This covers only the single error page tested. Do NOT say "site-wide" or "across all pages".
-->

---

## Discovery Files

### robots.txt

```text
[ROBOTS_TXT_SUMMARY — key Disallow rules and any AI-agent-specific lines]
```

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 1-2 sentences assessing robots.txt. Reference the code block above. If Crawl-delay was detected AND honoured (see Facts), include the phrase "no major crawler honours this — but we did" so the reader knows we rate-limited ourselves per the site's declared preference.

SCOPE: Assess only this site's robots.txt. Do NOT compare to "typical" sites or make claims about how other sites configure robots.txt.

Facts: No Crawl-delay directive detected, or detected but not applicable to mx-audit..
-->

### sitemap.xml

| Attribute | Present | Assessment |
|-----------|---------|------------|
| `<loc>` URLs | [N entries] | [Coverage] |
| `<lastmod>` | [Yes/No] | [Quality] |
| `<changefreq>` | [Yes/No] | [Quality] |
| `<priority>` | [Yes/No] | [Quality] |
| Product URLs included | [Yes/No] | [Coverage] |
| Collection URLs included | [Yes/No] | [Coverage] |

**Sitemap grade:** Minimal

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 2 sentences for a client-facing audit report. Flag that the site's sitemap (or crawl seed) contains multiple URL variants for the same canonical page (trailing-slash and/or hash-fragment forms). Explain that AI agents and LLM pipelines that do not normalise URLs will treat these as separate pages — wasting token budget and potentially producing contradictory or inflated findings. State that the fix is to consolidate the sitemap to a single canonical form per resource and to add a canonical link tag to the page. Use British English and opportunity framing (no failure language).

Facts:
- Crawled URLs before deduplication: 4
- Unique canonical pages after normalisation: 2
- Inflation factor: 2×
- Variant clusters found:
  - Canonical: https://baremetal.vc — variants also present: https://baremetal.vc/#, https://baremetal.vc/#
- Fragment suffixes (#, #/) and trailing-slash variants are identical resources at the HTTP level
- AI agents / LLM pipelines that skip URL normalisation will fetch the same content multiple times
- Fix: publish one canonical URL per resource in sitemap.xml; add <link rel="canonical"> on each page
-->

### [llms.txt](https://mx.allabout.network/blog/llms-txt-guide.html)

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 1-2 sentences assessing the llms.txt file. If present (see Facts): confirm whether it lists product categories, links to key collections, and references the sitemap. If absent: recommend adding one with those three commerce-specific elements. Do NOT use "should ideally" or "best practice".

TRANSPORT: If recommending text/html content-type for the file, frame it as "our recommendation diverges from the llmstxt.org specification — we recommend text/html" — do NOT say it is industry standard, best practice, or established fact.

Facts:
- llms.txt present: No
- Lists product categories: No — file absent
- References sitemap: No — file absent
-->

### agent-card.json (A2A)

| Check | Result |
|-------|--------|
| Present at `/.well-known/agent-card.json` | No |
| Valid JSON | N/A |
| Service name and description | N/A |
| Capabilities declared | N/A |
| Endpoint URL | N/A |
| Authentication requirements | N/A |

## Structured Data Inventory

| Schema Type | Pages | Required % | Recommended % | Commerce Relevance |
|-------------|-------|-----------|--------------|--------------------|
| Organization | 0 | — | — | Brand identity baseline |
| Product | 0 | — | — | **Critical — every product page** |
| Offer | 0 | — | — | **Critical — price + availability** |
| ItemList | 0 | — | — | **Critical — collection pages** |
| CollectionPage | 0 | — | — | **Important — collection page type** |
| BreadcrumbList | 0 | — | — | **Important — site hierarchy** |
| AggregateRating | 0 | — | — | **Important — trust signals** |
| Review | 0 | — | — | **Important — review citations** |
| FAQPage | 0 | — | — | Useful — scent/mood pages |
| WebSite (with SearchAction) | 0 | — | — | Useful — sitelinks search box |
| Brand | 0 | — | — | Useful — brand entity |

**Structured Data Quality:** 0/100\
**Commerce Coverage:** 0 of 1 pages have at least one Product/Offer entity (0%)\
**Unique types:** 0

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 1-2 sentences specific to commerce — what a shopping agent can and cannot extract from the current structured data, given Product/Offer/ItemList/BreadcrumbList coverage.
Facts:
- Product schema coverage (product pages only): n/a (no product pages in audited set)
- Offer schema coverage (product pages only): n/a (no product pages in audited set)
- BreadcrumbList coverage (product pages only): n/a (no product pages in audited set)
- SCOPE: Coverage is against product pages in the audited set only. Do NOT say "site-wide".
-->

### SDQ Score Breakdown

The Structured Data Quality score is composed of seven measurable signals. This breakdown shows what your catalogue earns in each. For commerce sites, the highest-leverage components are typically Required coverage (Product/Offer mandatory fields) and Cross-entity references (linking Products to their Brand and Reviews).

| Component | Earned | Max | Meaning |
|-----------|--------|-----|---------|
| Presence | 0 | 10 | schema.org JSON-LD exists on the page |
| Required property coverage | 0 | 25 | Worst-case across all entities (one broken Product is not hidden by good ones) |
| Recommended property coverage | 0 | 15 | Average across entities |
| Entity richness | 0 | 15 | Average property count per entity (3-5 = 5pt, 6-9 = 10pt, 10+ = 15pt) |
| Cross-entity references | 0 | 15 | Nested @type values + @id linking (Product → Brand, Product → AggregateRating) |
| Linked-data signals | 0 | 10 | sameAs, mainEntityOfPage, isPartOf, about, mentions, etc. (capped at 10) |
| Vocabulary validity | 0 | 10 | Every @type exists in the Schema.org whitelist |
| **Total** | **0** | **100** | |

---

## Structured Data Findings

This is a clean-slate site with no Schema.org markup. There are no property gaps to report because no typed entities exist yet — every structured data addition is net new capability. The served HTML is machine-readable (served score 81/100) — agents can extract content without JSON-LD.

---

## Marker Reachability

| Marker   | In served | In rendered | In head | Reachable <250KB | Injected by JS |
|----------|-----------|-------------|---------|------------------|----------------|
| JSON-LD structured data | Not present | Not present | n/a | n/a | n/a |
| Microdata (itemscope) | Not present | Not present | n/a | n/a | n/a |
| Open Graph meta tags | Yes | Yes | Yes | Yes | No |
| Twitter Card meta tags | Not present | Not present | n/a | n/a | n/a |
| MX governance meta tags | Not present | Not present | n/a | n/a | n/a |
| Canonical URL | Not present | Not present | n/a | n/a | n/a |
| Discovery links (llms-txt, sitemap) | Not present | Not present | n/a | n/a | n/a |
| Language declaration (html lang) | Yes | Yes | Yes | Yes | No |
| Skip link (accessibility) | Not present | Not present | n/a | n/a | n/a |

All detected markers are present in the served HTML. Server-side and browser-based agents see the same signals.

---

## Schema Maturity Level

Schema.org implementations fall into four maturity tiers. For commerce sites, the transition from Level 2 to Level 3 is typically the highest-impact change: it converts a catalogue of decorated product pages into a graph that shopping agents can traverse to find related products, brands and reviews.

|  | Level | Name | What it looks like for commerce | Typical SDQ |  |
|---|-------|------|--------------------------------|------------|---|
| **→** | 0 | Clean slate | No Schema.org markup present. Every addition is net new capability: the full commerce maturity curve is open. | 0-29 | **←** |
|  | 1 | Decoration | Product blocks with name + price only, no Brand, no AggregateRating, no Offer detail. Schema as boilerplate. | 30-50 |  |
|  | 2 | Good schema | Full Product + Offer with all required and recommended properties, nested Brand and AggregateRating, valid vocabulary. No graph wiring. | 75-90 |  |
|  | 3 | Real graph | Level 2 + @id cross-references between Products and shared entities (Brand, ImageObject, Reviews) + linked-data signals (sameAs on Brand, mainEntityOfPage on Product, isPartOf to link Product → Collection). | 90-95 |  |
|  | 4 | Verified linked data | Level 3 + external authority IDs (GTIN/MPN on Product, Wikidata QID on Brand, manufacturer ISBN/ISNI) + provenance metadata. | 95-100 |  |

**Current level:** 0 — Clean Slate\
**To reach the next level:** Add at least one Schema.org JSON-LD block (e.g. Organization, WebSite, or Article) — every property added is net new capability for AI agents.

This is a structural classification, not a numeric score. A catalogue can have a high SDQ score from rich Product properties without being graph-linked. The maturity level tells you whether your schema is decoration, well-formed product data, a real catalogue graph, or anchored in the linked-data web with external identifiers that shopping agents can resolve.

---

## 5-Stage MX Journey (Commerce)

The MX Journey maps the five stages a shopping agent follows when interacting with a commerce site. For e-commerce, Stages 3-5 are first-class: they are the difference between a brand mention and a transaction.

| Stage | Name | Status | Score | Key Metric |
|-------|------|--------|-------|------------|
| 1 | Discovery | Partial | 67 | Issues: no <main> |
| 2 | Citation | Partial | 50 | No Schema.org structured data |
| 3 | Search & Compare | N/A | -- | No comparison content detected |
| 4 | Price Understanding | N/A | -- | No pricing content detected |
| 5 | Purchase Confidence | N/A | -- | No transaction forms detected |

**Overall:** [Compatible / Partially Compatible / Not Compatible]

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 1-2 sentences stating the MX Journey stage reached and the specific gap to the next stage, based ONLY on Unknown and Stage 1 Discovery (Partial) in the facts. Do NOT assert which stage is "typically" the bottleneck.
Facts:
- Stage reached (last Pass): Unknown
- Gap (first non-Pass stage): Stage 1 Discovery (Partial)
-->

---

## Agent Reading Pipeline

Pipeline Survivability runs eleven reading-resilience checks on every page. Each check verifies that the content reaches shopping agents cleanly even when the metadata is correct.

| Resilience Check | Status | Pages | What It Means | Data |
| ------------ | ------ | ----- | ------------- | ---- |
| Truncation Risk | Pass | 1/1 | Every page is well under the 250 KB threshold at which some server-side agents stop reading. The largest page is 37 KB. | Largest page: 37 KB. Threshold: 250 KB. |
| SPA Shell | Pass | 1/1 | Served HTML matches rendered HTML — no JavaScript is required for content. Server-side agents see the same content a browser does. | Max gap score: 0. 0 means served and rendered match. |
| Soft 404 | Pass | 1/1 | Missing pages return a proper HTTP 404 status. No pages misleadingly return 200 for non-existent URLs. | 0 soft-404 page(s) detected. |
| Boilerplate Burial | Pass | 1/1 | Navigation and chrome do not dominate the page; main content is reachable without wading through overhead. | Highest boilerplate-to-content ratio: 0.09. Threshold: < 10 (and < 80 KB of inline head bytes). |
| Tabbed Disclosure | Pass | 1/1 | No content is hidden behind JavaScript tabs. All content is directly reachable in the served HTML. | 0 page(s) with tab widgets. |
| Content Negotiation | [Pass/Fail/N/A] | [N/M] | [Explain whether the server offers different formats that could confuse agents] | [Vary: Accept header present on N pages.] |
| Delayed Content Start | Pass | N/M | Main content begins early in the document. Agents that truncate fetches reach the lead paragraphs easily. | Content starts at up to 0% of the document on some pages. |
| Cross-Host Redirect | Pass | 1/1 | No cross-domain redirects. Agents follow internal redirects without host-boundary issues. | 0 page(s) cross origin during redirect. |
| Generic Headings | Pass | 1/1 | Every heading carries specific content; no page is dominated by generic labels like "Overview" or "Introduction". | Worst case: 0% generic headings. |
| Body Content Ratio | Pass | N/M | Actual prose content averages 57% of served bytes — well above the 30% threshold. Pages are content-heavy, not overhead-heavy. | Average: 57%. Threshold: 30%. |
| Inline Tag Bloat | Fail | 1/1 | 1 page(s) carry inline `<style>` or executable `<script>` blocks over 500 bytes. Externalising these to separate .css/.js files lets agents skip them during cheap fetches. | 1 element(s) > 500 bytes. Largest inline CSS: 113 B. Largest inline JS: 3910 B. Page: https://baremetal.vc/ |
| Head Weight | Pass | N/M | Head bytes are a small fraction of each page. Agents reach body content quickly. | Max ratio: 0.00. Average: 0.00. Threshold: 0.50. |

**Pipeline Survivability score:** 92/100

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 2-3 sentences naming which resilience checks need attention on this commerce site, the consequence for shopping agents reading the catalogue, and which fix would have the largest effect. Plain language, no raw metric numbers without explanation. Frame the remaining work as opportunities to strengthen, not as failings.
Facts:
- Pipeline Survivability score: 92/100
- Failing modes: Inline Tag Bloat
- Top failing mode: Inline Tag Bloat
- Pages affected by top failing mode: 1 of 1
-->

For the methodology behind this section and the check catalogue, see **[MX: The Protocols Appendix R — Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** and **[Appendix S — The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**.

---

## Div Soup — naked containers without semantic mapping

When every container is a `<div>` with no role, no ARIA landmark, and no class name that describes what it is, AI agents and assistive technology see an unreadable wall of containers and have to guess what each block represents. The visual layout still works for sighted users; the machines have to fall back to brittle heuristics ("the third div from the top is probably navigation"). That fragility is the cost of div soup.

The Div Soup check runs on both served and rendered HTML so the report can tell whether the soup is in the source the publisher controls or something the JavaScript framework introduces at render time. Score 100 is a page with no naked divs; score 0 is the worst case (every container is a bare nested div).

| Source | Score | Band | Bare divs | Bare div ratio | Deepest bare chain | Top bare selectors |
|--------|-------|------|-----------|----------------|--------------------|-------------------|
| Served HTML  | —/100   | —   | —   | —%   | —   | — |
| Rendered HTML | 42/100 | high | 106 | 55% | 5 | `div` (48), `div.dropdown-toggle.w-dropdown-toggle` (16), `div.portfolio-toggle` (16), `div.portfolioname.is--large` (16), `div.w-layout-blockcontainer.container` (4) |

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

If both rows score 75 or above (band "low"), write a single-sentence affirmation that the site uses semantic HTML well and the agent has reliable structural cues. Skip the rest of this section.

If either row scores below 75, write 2-3 sentences:
- Sentence 1: name which surface (served, rendered, or both) has the highest bare-div ratio and what the practical consequence is — machines lose structural context and fall back to brittle heuristics. Do NOT use the phrase "this is hard for machines to understand".
- Sentence 2: identify whether the soup is structural (deep chains) or surface-wide (high bare ratio with shallow chains), and what each pattern indicates about the source pipeline (drag-and-drop builders, untyped component frameworks, late-stage JS injection).
- Sentence 3: name the cheapest first move — usually wrapping the obvious landmarks (header, nav, main, footer, aside) and giving the rest meaningful class names so the bare-div ratio drops without restructuring the layout.

Facts (do not change any number, percentage, URL, or selector):
- Served score: —, band —
- Rendered score: 42, band high
- Bare divs (served): — of — (—%)
- Bare divs (rendered): 106 of 194 (55%)
- Deepest bare chain: served —, rendered 5
- Top bare selectors (served): —
- Top bare selectors (rendered): `div` (48), `div.dropdown-toggle.w-dropdown-toggle` (16), `div.portfolio-toggle` (16), `div.portfolioname.is--large` (16), `div.w-layout-blockcontainer.container` (4)
-->

---

## Security Headers

| Header | Status | Purpose |
|--------|--------|---------|
| HTTPS | Yes | Encrypted transport (mandatory for commerce) |
| HSTS | No | Forces HTTPS |
| Content-Security-Policy | No | Prevents XSS — critical on payment pages |
| X-Frame-Options | No | Prevents clickjacking on cart/checkout |
| X-Content-Type-Options | No | Prevents MIME sniffing |

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 1-2 sentences assessing security headers. HTTPS, HSTS, and CSP are particularly important on commerce sites — they protect payment flows from interception and injection.

Facts:
- HTTPS coverage: 100%
- HSTS coverage: 0%
- Content-Security-Policy coverage: 0%
- SCOPE: These headers were checked on the audited pages only. Do NOT say "site-wide".
-->

---

## Cross-Page Consistency

*Not applicable — only one page was audited in this engagement.*

---

## Content Consistency: Price Parity

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 2-3 sentences introducing the Price Parity section. If the audited set contains no SKU that appears on multiple audited pages, explain that fact explicitly and pivot the matrix below to site-wide consistency checks. Otherwise, describe the per-SKU cross-surface checks (product page / collection thumbnail / cart / search result) and call out any inconsistencies.
Facts from audit_averages.json, schema_inventory.json, consistency_analysis.json: pagesAudited=1, product pages in set (look for /products/ URLs), organisation name parity, Offer coverage on product pages, canonical duplicates, meta-description length distribution.
-->

| Check | Result | Notes |
|-------|--------|-------|
| Organization name parity | Not measured | No Organization entity observed in the audited set |
| Canonical URL duplicates | None | No two audited pages share a canonical — each has a unique canonical |

---

## PDF Documents — EAA Compliance Snapshot

No PDF documents were discovered in the audited surface. EAA exposure on the document carrier: **low**. If your audience interacts with PDF reports, white papers, datasheets, or product manuals not present in this crawl, the picture changes. Let us know and we will widen the surface.

---

## Next Steps

### Recommended Actions

1. **Address Priority 1 (Product/Offer schema)** — the single highest-impact change for an e-commerce site. Unlocks Stages 3 and 4 of the MX Journey in one change and makes the catalogue visible to shopping agents.
2. **Address Priority 2 (BreadcrumbList)** — quick win, low effort.
3. **Address Priority 3 (Reviews / AggregateRating)** — agents prefer brands they can vouch for.
4. **Plan accessibility, cart performance, and form-field improvements** as a coordinated workstream.
5. **Consider optional enhancements** as a follow-on programme.

### What's Next

| Phase | Scope | Outcome |
|-------|-------|---------|
| Agent-Ready Foundation | Product/Offer + ItemList + BreadcrumbList + Open Graph + static llms.txt | Catalogue visible to shopping agents |
| Commerce-Ready Implementation | Foundation + AggregateRating/Review + FAQPage + form-field naming + cart performance + image optimisation | Rich result eligibility (reviews, prices); reliable autofill; faster cart |
| Full MX Alignment | Commerce-Ready + WCAG 2.1 AA programme + MX governance tags + sitemap enhancement + ongoing monitoring | Leading AI-discoverable brand in category |

---

## The Business Case: Agent Commerce Opportunity

### Market Context

Consumer commerce is being reshaped by AI shopping assistants. Buyers increasingly ask ChatGPT, Claude, Perplexity, and built-in browser assistants to research products and compare prices before ever visiting a brand's site.

Three things are driving this:

- Major model providers now ship shopping interfaces at scale. The buyers are already there.
- Brands with full `Product`/`Offer` schema appear in machine answers with prices and availability; without it, machines fall back to less structured competitors when richer data is available.
- "Find me a [category] for my [recipient], around [price]" is now a real shopping query. Only structured-data brands make those shortlists.

### ROI Outlook

| Investment | Effort | Expected Return |
|-----------|--------|-----------------|
| Schema.org Product/Offer + BreadcrumbList | [Low/Med/High] | Catalogue visible to all shopping agents |
| Reviews + AggregateRating | [Low/Med/High] | Rich result eligibility for review stars (where supported by search engine); trust signals in machine answers |
| Open Graph + Twitter Card on homepage | Low | Every social share becomes a controlled rich preview |
| Accessibility remediation | [Low/Med/High] | Legal compliance and broader audience reach |
| Full MX alignment | High | Leading AI-discoverable brand in category |

---

## Summary of Findings

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 2-3 paragraphs summarising this commerce audit. Paragraph 1: what is working — name specific scores and findings. Paragraph 2: the key gaps — name the specific commerce schema or discovery gaps by their Schema.org type or WCAG criterion. Paragraph 3: the priority recommendation — one concrete next step. Keep the tone warm and partnership-oriented. Use "we" throughout.

Facts:
- Discovery Readiness: 10/100
- Structured Data Quality: 0/100
- Product schema coverage: n/a (no product pages in audited set)
- Offer schema coverage: n/a (no product pages in audited set)
- Commerce Visibility: 0/100
- MX Journey stage reached: Unknown
- MX Journey gap: Stage 1 Discovery (Partial)
- Top priority finding: Catalogue Visibility — 0/100
- Pages audited: 1 page
-->

### Audit Scores

| Dimension | Score | Band |
|-----------|-------|------|
| AI Agent Suitability | 81/100 | Excellent |
| Accessibility | 15/100 | Needs Improvement |
| SEO (all pages) | 54/100 | Good |
| SEO (content pages) | —/100 | — |
| MX Stack Completeness | 19/100 | Needs Improvement |
| Structured Data Quality | 0/100 | Needs Improvement |
| Commerce Visibility | 0/100 | Needs Improvement |
| Discovery Readiness | 10/100 | Needs Improvement |
| Heading Quality | 92/100 | Excellent |
| Semantic Ratio | 9% | Needs Improvement |
| Agent Readability | 76/100 | Excellent |
| Pipeline Survivability | 92/100 | Excellent |
| Cross-Page Consistency | 100% | Excellent |

---

## Appendix A: Pages Audited

| Page | Type | SEO | A11y | Schema | Has Offer? |
|------|------|-----|------|--------|------------|
| / | home (nav) | 54 | 0 | — | n/a |

---

## Appendix B: Link Inventory

We recorded every internal link discovered on every audited page, [N] in total. Link status was not probed here. For e-commerce sites a dedicated broken-link scan is worthwhile (deleted SKUs often remain referenced from category pages or seasonal collections), but it should run on its own schedule with its own rate-limited crawler.

| Link class                      | Count |
| ------------------------------- | ----: |
| Same-host internal links        | 0     |
| External links                  | 1     |
| Anchor-only (`#fragment`) links | 0     |
| mailto / tel links              | 0     |

---

## Appendix C: Image Optimisation

<!-- REWRITE:
AUDIT CONTEXT (applies to this block):
- Site: baremetal.vc
- Pages audited: 1
- Date: 2026-05-02
- Scores: SEO 54/100 | Accessibility 15/100 | Discovery Readiness 10/100 | Structured Data 0/100
- Scope: 1 page audited — write "on the audited page", NEVER "site-wide" or "across all pages"
- Voice: write as "we" throughout — never "the page", "the site found", or "the audit detected"
- Vocabulary: use "machines" to refer to AI agents, LLMs, search crawlers, and automated bots — it is the book's canonical term; prefer it over "AI agents" in prose

Write 2-3 paragraphs summarising image optimisation across the commerce corpus.

PATTERN:
- Paragraph 1: Total images audited, format distribution (WebP / AVIF / SVG / PNG / JPEG), explicit width/height coverage, alt text coverage. For commerce, name alt text on product images as doubly important — it serves accessibility AND gives shopping agents a fallback description when structured data is absent.
- Paragraph 2: Loading strategy. Distinguish the three states: `loading="lazy"`, `loading="eager"`, and no attribute set (the browser guesses). No attribute is NOT the same as eager — make that point if the site has any "no attribute" images.
- Paragraph 3 is handled mechanically by the double-lazy explanation block below — do NOT duplicate it in your prose. Reference the count if helpful, but leave the mechanics to the block.

TONE: Factual, warm, peer-to-peer.

Facts (do not change any number, percentage, URL, or count):
- Total images: 66
- Format distribution (list counts for each present format)
- With alt text: 0 (0.0%)
- Missing alt text: 66
- Product images missing alt: 0
- loading="lazy": 66
- loading="eager": 0
- no loading attribute: 0
- JS Lazy Pattern instances: 0
- Double Lazy instances: 0
-->

> **Double-lazy loading pattern not detected** — no image in the audited set carries both native `loading="lazy"` and a JavaScript lazyload placeholder at the same time.

---

## Appendix D: Schema.org Implementation Checklist

- [ ] `Organization` schema (homepage minimum)
- [ ] `Product` schema on every product page
- [ ] `Offer` (price, currency, availability) inside every Product
- [ ] `BreadcrumbList` on every non-home page
- [ ] `CollectionPage` + `ItemList` on collection pages
- [ ] `AggregateRating` and `Review` on product pages (if reviews exist)
- [ ] `FAQPage` on category / mood / use-case pages
- [ ] `WebSite` with `SearchAction` (sitelinks search box)
- [ ] `Brand` entity referenced from each Product
- [ ] `hasMerchantReturnPolicy` inside Offer (if applicable)
- [ ] `shippingDetails` inside Offer (if applicable)
- [ ] All schema validated with the Schema.org validator
- [ ] Re-audit confirms commerce stages of MX Journey pass

---

## Appendix E: Methodology

**Tools:** Web Audit Suite v2.1 (Pa11y WCAG 2.1 AA, performance metrics, SEO scoring, LLM suitability, MX Stack Completeness, Structured Data Quality, Discovery Readiness, Heading Quality, Cross-Page Consistency, Pipeline Survivability).

**Pipeline Survivability** runs eleven reading-resilience checks: truncation resilience, SPA shell resilience, soft-404 signalling, boilerplate balance, tabbed-disclosure avoidance, code-fence integrity, single-content-type negotiation, same-host redirects, heading specificity, early content start, and inline-tag bloat control. For e-commerce sites these checks carry extra weight: long catalogue pages are vulnerable to truncation, cart and checkout flows often run as single-page applications, and product variants are frequently rendered inside tab widgets. See **[MX: The Protocols Appendix S](https://mx.allabout.network/books/appendices/appendix-s.html)** for the full catalogue and **[Appendix R](https://mx.allabout.network/books/appendices/appendix-r.html)** for the testing methodology.

**Platform detection:** The audit fingerprints the hosting platform from HTTP response headers and HTML signatures. Detected platform: **Webflow**. The main audit uses Webflow-specific rate limits from our platform knowledge base — requests are paced at that platform's known-safe speed, with exponential backoff and retry (up to 4 attempts) on rate-limit responses.

**Link inventory:** Every internal link discovered on every audited page is recorded with its URL, anchor text, and link type. The audit does not issue per-link HTTP status probes; a dedicated, rate-limited broken-link crawler handles that on its own schedule. Appendix B shows the link inventory, not a broken-link list.

**Commerce-specific verification:** Every Priority 1, 2, and 3 finding in this report was verified by direct inspection of the served, decoded, and rendered HTML for each audited page. For each commerce schema claim, the HTML was checked for `"@type":"Product"`, `"@type":"Offer"`, `"@type":"BreadcrumbList"`, `"@type":"ItemList"`, `"@type":"AggregateRating"`, and `"@type":"Review"`. Visible-but-unparseable price claims were verified by regex matching the local currency in the HTML and confirming the absence of any structured Offer entity wrapping them.

**Scope:** 1 page analysed | Platform: Webflow | Analysis method: Hybrid (automated + manual verification) | robots.txt: Absent (HTTP 404) | sitemap.xml: Absent | llms.txt: Absent (HTTP 404) | agent-card.json: Absent (HTTP 404)

---

\clearpage

## Further Reading

Every book appendix this report cites, plus the book itself. On-screen readers can click the link; printed-report readers can scan the QR code with a phone camera. The same URL is encoded in both.

| Scan | Link and description |
| :----: | -------------------- |
| ![Appendix R QR](assets/qr/appendix-r.png){ width=15mm } | **[MX: The Protocols Appendix R — Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)** — the methodology behind the Pipeline Survivability measurements used in this report.\ `https://mx.allabout.network/books/appendices/appendix-r.html` |
| ![Appendix S QR](assets/qr/appendix-s.png){ width=15mm } | **[MX: The Protocols Appendix S — The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)** — the full catalogue of reading-resilience checks scored in the Agent Reading Pipeline section.\ `https://mx.allabout.network/books/appendices/appendix-s.html` |
| ![Appendix M QR](assets/qr/appendix-m.png){ width=15mm } | **[MX: The Protocols Appendix M — Index of Metadata](https://mx.allabout.network/books/appendices/appendix-m.html)** — the full field dictionary governing the MX governance tags referenced throughout this report.\ `https://mx.allabout.network/books/appendices/appendix-m.html` |
| ![llms.txt guide QR](assets/qr/llms-txt-guide.png){ width=15mm } | **[Why llms.txt Probably Isn't Working — And What to Do About It](https://mx.allabout.network/blog/llms-txt-guide.html)** — a guide to the two structural problems most llms.txt implementations have (MIME type and sitemap registration).\ `https://mx.allabout.network/blog/llms-txt-guide.html` |
| ![Books index QR](assets/qr/books-index.png){ width=15mm } | **[Get the books](https://mx.allabout.network/books/)** — MX: The Intro (free), MX: The Handbook, and MX: The Protocols. The full reference for every concept this report draws on.\ `https://mx.allabout.network/books/` |

---

**Date:** 2 May 2026\
(c) 2026 CogNovaMX Ltd . All rights reserved.

*This is a sample run. Contact CogNovaMX Ltd for a full-scope audit and continuing oversight plans.*

*Read the books: <https://mx.allabout.network/books/index.html>*
