---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "mx-audit System Architecture"
description: "Architecture reference for mx-audit: pipeline phases, source modules, table handlers, caching, report generation, gate chain, templates."
author: Tom Cranstoun
created: 2026-04-28
modified: 2026-05-30
version: "1.3"

mx:
  contentType: info-doc
  status: active
  x-mx-category: architecture
  tags: [architecture, audit, pipeline, templates, scripts, skills, report-generation, gate-chain]
  partOf: mx-audit
  audience: [humans, agents]
  stability: stable
  runbook: "Read before modifying any audit pipeline component, adding a template placeholder, or writing a new skill that invokes mx-audit. One of three lockstep docs in mx-reginald/audit/ (this cog, prd.md, README.md), all partOf mx-audit - keep them in step. Lockstep with the code is gate-enforced by scripts/check-audit-architecture.js (wired into npm test and pre-push Gate 12); run npm run mx:heal -- --architecture to re-check after changes."
  x-mx-contextProvides:
    - "Full phase-by-phase audit pipeline (Phases 1–5)"
    - "Source module map: collectors, scorers, reporters, utils"
    - "Bin utility catalogue: standalone scripts + table handlers"
    - "Caching layer layout (mx-outputs/audit/<hostSlug>/.cache/body|decoded|rendered|served|origin)"
    - "Results directory layout (mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/)"
    - "Two-pass report generation: infill-report.js → LLM rewrite"
    - "Gate chain sequence: markdownlint → frontmatter → verifier → fierce-critic → LLM judgment → template-leak → PDF"
    - "Template + contract file relationship"
    - "Claude Code skills that orchestrate the pipeline"
  refersTo:
    - "mx-audit/bin/infill-report.js"
    - "mx-audit/src/main.js"
    - "mx-audit/templates/web-audit-suite-template.md"
    - "mx-audit/templates/ecommerce-audit-template.md"
    - "mx-audit/src/utils/reportUtils/auditAverages.js"
    - "mx-hub/.claude/skills/audit-report/skill.md"
    - "mx-hub/.claude/skills/regen-report/skill.md"
  canonicalUri: https://raw.githubusercontent.com/digital-domain-technologies/MX-Audit/main/mx-audit-architecture.cog.md
---

# mx-audit System Architecture

mx-audit is a Node.js website analysis platform that measures Machine Experience (MX) readiness across SEO, accessibility, performance, structured data, AI agent access, and content quality. It produces per-site CSV/JSON result files, then assembles them into a verified, gated client-facing PDF report.

**LLM provider — local-first, regulated-safe.** Every model-driven step (Pass 2 rewrite, unified repair, fierce-critic, LLM-judgment, provenance-gap, attribution collector) routes through a single provider abstraction at [`lib/llm-client.js`](lib/llm-client.js). The default provider is a **local Ollama model** (`gpt-oss:20b`; `MX_AUDIT_OLLAMA_MODEL` to override), so audits for regulated industries never send client content to an external inference API and can run fully air-gapped. The client exposes the slice of the Anthropic SDK surface the scripts use (`messages.create()`, `messages.stream().finalMessage()`) and translates to Ollama's native `/api/chat`, so no call site or prompt changed. Set `MX_AUDIT_LLM_PROVIDER=anthropic` for the explicit non-regulated opt-out. References to `claude-sonnet-4-6` / `claude-haiku-4-5` below are the legacy Anthropic-mode defaults; in the default mode they map to the configured local model.

---

## 1. Conceptual Layers

```
┌─────────────────────────────────────────────────────┐
│  Claude Code Skills (orchestration)                 │
│  /audit-collect  /audit-scores  /audit-discovery    │
│  /audit-access   /audit-report  /regen-report        │
├─────────────────────────────────────────────────────┤
│  Gate Chain (verification + PDF)                    │
│  markdownlint → frontmatter → verifier →            │
│  fierce-critic → LLM judgment → template-leak → PDF │
├─────────────────────────────────────────────────────┤
│  Report Generation (bin/infill-report.js + rewrite) │
│  Templates + Contracts → Infilled Skeleton → Report │
├─────────────────────────────────────────────────────┤
│  Bin Utilities (standalone scripts + table handlers)│
├─────────────────────────────────────────────────────┤
│  Source Engine  (src/)                              │
│  main.js · collectors · scorers · reporters · utils │
├─────────────────────────────────────────────────────┤
│  Caching Layer  (mx-outputs/audit/<hostSlug>/.cache)│
│  body · decoded · rendered · served · origin        │
├─────────────────────────────────────────────────────┤
│  Results Store                                      │
│  mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/  │
│  *.csv · *.json · site_profile.json · audit_averages│
└─────────────────────────────────────────────────────┘
```

---

## 2. Audit Pipeline — Five Phases

The full pipeline runs in five sequential phases, each implemented as a Claude Code skill. Each skill depends on the previous one completing successfully.

### Phase 1 — Collect (`/audit-collect`)

**What it does:** Crawls the site, warms the cache, fingerprints the platform, fetches robots.txt and discovery files, tests error pages, detects bot-blocking.

**Key operations:**

- URL discovery via `bin/discover-urls.js` (sitemap + crawl)
- Puppeteer fetches each URL → writes `mx-outputs/audit/<hostSlug>/.cache/{body,decoded,rendered,served,screenshots}/`
- `src/main.js` orchestrates per-URL collection via `src/utils/urlProcessor.js`
- `src/utils/platformFingerprint.js` identifies CMS/platform
- `bin/check-wellknown.js` probes `robots.txt`, `llms.txt`, `agent-card.json`, `ai-plugin.json`
- `bin/error-page-test.js` fetches a non-existent path to inspect error-page quality
- `bin/check-egress.js` pre-flight validates network health
- `bin/slowest-page-probe.js` re-probes the slowest URL and a median-load URL three times each with a `?_mx_cb=<stamp>` cache-busting query parameter and `Cache-Control: no-cache` — measures origin response stability after the crawler has captured single-shot timings. Writes `slowest-page-perf.json` with a Healthy / Acceptable / Slow verdict (median-of-three thresholds: ≤ 1500ms / ≤ 3000ms / > 3000ms).
- `bin/provenance-gap.js` (Step 8b) detects the six deterministic provenance-gap primitives from the served HTML and JSON-LD already on disk: self-promotional listicles (title/h1 regex + own-host position-one), year-swap refreshes (title year vs JSON-LD `dateModified` ≥ 2), first-party superlative phrases, citation gaps (third-party outbound link count + JSON-LD `citation`/`isBasedOn`/off-domain `sameAs`), missing provenance metadata (`author`/`publisher`/`dateModified`/`sameAs` presence across page entities), and deprecated FAQ/Q&A markup. Also site-level: templated stamp-out clusters via path-template buckets + DOM-skeleton Jaccard + text-shingle Jaccard, excluding clusters that carry `Product`/`Offer` entities so legitimate product catalogues are not flagged. Writes `provenance_gap.json` + `provenance_gap.csv`.
- `bin/provenance-gap-llm.js` (Step 8c) — model-driven companion. Scans the first five HTML pages in discovery order for qualitative kinds the deterministic primitives cannot catch: `hollow-listicle`, `ai-stamped-boilerplate`, `recycled-definition`, `location-implausibility`, `unverifiable-first-party-claim`, `competitor-could-publish`. Obtains its client through `lib/llm-client.js` (`createLlmClient()`; local Ollama by default, Anthropic only via `MX_AUDIT_LLM_PROVIDER=anthropic`) and uses tool-use for structured output. Soft-skips silently when no LLM provider is reachable (`provenance_gap_llm.json` still written with `skipped: true` so the table handler can distinguish "ran clean" from "did not run"). Findings stream into `provenance_gap_llm.jsonl` one row per finding. Five-page budget is deliberate: the report template renders a scope-limit note pointing readers at the commissioned full-site qualitative review.
- Outputs: all CSV/JSON result files under `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/`

### Phase 2 — Scores (`/audit-scores`)

**What it does:** Reads all result files, runs the pre-flight checklist, computes averages, classifies navigational pages, and surfaces the pre-flight findings object.

**Key operations:**

- `src/utils/reportUtils/auditAverages.js` computes `audit_averages.json` — the single source of truth for all numeric averages in the report
- Classifies pages as `nav` vs `content` (homepage is always `nav`)
- Reads `pa11y_recurring_patterns.json` produced by `generatePa11yRecurringPatterns()`
- `src/utils/schemaAnalysis.js` + `src/scorers/llmScorer.js` score structured data quality
- `src/utils/seoScoring.js` computes SEO scores; dual averages: all pages and content-only
- Pre-flight checklist runs categories A–M to surface all issues in one pass
- Outputs: `preFlightFindings` object, `audit_averages.json`, `pa11y_recurring_patterns.json`

### Phase 3 — Discovery (`/audit-discovery`)

**What it does:** Manually verifies HTML quality against cached decoded HTML, assesses discovery files, performs the hallucination-gated manual findings pass.

**Key operations:**

- `bin/check-wellknown.js` results read from `wellknown_discovery.json`
- Reads decoded cache HTML directly (never via WebFetch — avoids model truncation)
- Verifies every claim with a `verificationCommand` + `verificationOutput` pair before adding to `manualFindings`
- `bin/llmsTxtSummary.js` handler processes `llms.txt` and `llms-full.txt`
- `bin/agent-access-test.js` is queued for Phase 4
- Outputs: `manualFindings` object with `critical`, `highPriority`, `medium`, `positivePatterns`, `judgmentFindings`

### Phase 4 — Access (`/audit-access`)

**What it does:** Tests real AI agent HTTP access with eight User-Agent strings, detects CDN-layer content transformation, cross-references content consistency.

**Key operations:**

- `bin/agent-access-test.js` fetches with ClaudeBot, GPTBot, ChatGPT-User, PerplexityBot, GoogleOther, Google-Extended, CCBot, plain curl
- Writes `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/agent-access.json` (infill-report.js reads this for the AI Agent Access table)
- Markdown content negotiation probe: `Accept: text/markdown` request detects Cloudflare Markdown for Agents (`x-markdown-tokens`) or Adobe LLM Optimizer (`x-edgeoptimize-request-id`)
- Content consistency check: cross-references prices, dates, availability, ISBNs across all cached pages
- Outputs: `agentAccessResults` object, updated `agent-access.json`

### Phase 5 — Report (`/audit-report`, `/regen-report`)

**What it does:** Assembles all findings into a verified, gated client PDF. Two sub-phases: infill (mechanical) then rewrite (LLM prose).

See [Section 6](#6-report-generation--two-pass-pipeline) for full detail.

---

## 3. Source Engine (`src/`)

### Entry points

| File | Role |
|------|------|
| `index.js` | CLI entry point (Commander.js). Parses flags, calls `src/main.js` or `src/bulk-audit.js` |
| `src/main.js` | Core single-site audit engine. Orchestrates collectors, utils, scorers, reporters |
| `src/bulk-audit.js` | Multi-site batch orchestrator; delegates to `src/main.js` per site |
| `src/core/AuditContext.js` | Central state object for an audit run; passed through every module |

### Collectors (`src/collectors/`)

Gather data types not covered by the main analysis loop. All collectors follow the same interface: `collect(input, context?) → { applicable: boolean, data: object }` (async where network I/O is involved).

| Module | Gathers |
|--------|---------|
| `llmCollector.js` | LLM/AI compatibility metadata from served HTML. 60+ `analyze*()` methods; scoring functions delegated to `llmScorer.js`. |
| `aiAttributionCollector.js` | AI attribution signals from the Reginald API. Runs for any site; `liveData` is null when the host is not yet instrumented. |
| `markerReachabilityCollector.js` | Custom MX marker presence and reachability |
| `accessibilityCollector.js` | WCAG 2.1 AA findings via Pa11y. Wraps `pa11yRunner.js`. |
| `linkCollector.js` | Internal and external links extracted from served HTML. Wraps `linkAnalyzer.js`. |
| `securityCollector.js` | Security header scores, mixed-content signals, vulnerability patterns. Wraps `securityAnalysis.js`. |

### Config (`src/config/`)

| Module | Purpose |
|--------|---------|
| `defaults.js` | Default values for all audit options |
| `options.js` | CLI flag definitions (passed to Commander.js) |
| `scoringWeights.js` | Weight multipliers for each dimension score |
| `navPages.js` | Navigational-page classification config (nav vs content) |
| `env.js` | Environment variable resolution |
| `markers.js` | Custom marker pattern definitions |
| `validation.js` | Input validation rules |

### Scorers (`src/scorers/`)

| Module | Scores |
|--------|--------|
| `llmScorer.js` | AI/LLM suitability score (0–100) from metadata completeness (`calculateServedScore`, `calculateRenderedScore`). Also exports five derived scores extracted from `llmCollector.js`: `calculateHeadingQuality`, `calculateDiscoveryReadiness`, `calculateMetadataStackCompleteness`, `calculateAgentReadability`, `calculatePipelineSurvivability`. |

### Reporters (`src/reporters/`)

| Module | Formats |
|--------|---------|
| `llmFeedback.js` | LLM-specific structured feedback output |

(Report-skeleton rendering itself lives in `bin/infill-report.js`, not in a `src/reporters/` module — see [Section 6](#6-report-generation--two-pass-pipeline).)

### Utils (`src/utils/`)

The heaviest layer — 50+ analysis modules. Key groupings:

**HTTP + network:**
`networkUtils.js` · `rateLimiter.js` · `robotsFetcher.js` · `robotsTxtParser.js` · `robotsCompliance.js`

**Page analysis:**
`pageAnalyzer.js` · `pageAnalyzerHelpers.js` · `pageTypeDetector.js` · `contentMetrics.js` · `patternExtraction.js` · `sharedHeadCache.js`

**Performance + technical:**
`performanceAnalyzer.js` (Lighthouse, Core Web Vitals) · `technicalMetrics.js` · `browserPool.js` (Puppeteer pooling) · `pipelineTimer.js`

**Schema + structured data:**
`schemaAnalysis.js` · `schemaValidator.js` · `schemaVersion.js`

**SEO + content:**
`seoScoring.js` · `urlMetrics.js` · `linkAnalyzer.js` · `linkChecker.js`

**Images + media:**
`reportUtils/imageAnalysis.js` (image audit roll-up)

**Accessibility:**
`pa11yRunner.js` (Pa11y wrapper) · `reportUtils/accessibilityAnalysis.js`

**Sitemap:**
`sitemap.js` · `sitemapUtils.js`

**Discovery files:**
`llmsTxtParser.js`

**MX-specific:**
`journeyStageMapper.js` · `markerDetection.js` · `metricsCommon.js` · `metricsUpdater.js`

**I/O:**
`caching.js` · `csvFormatter.js` · `results.js` · `reports.js` · `setup.js` · `historicalComparison.js`

**Report sub-modules (`src/utils/reportUtils/`):**
`auditAverages.js` · `accessibilityAnalysis.js` · `contentAnalysis.js` · `schemaReports.js` · `imageAnalysis.js` · `linkAnalysis.js` · `llmReports.js` · `securityAnalysis.js` · `journeyStageReports.js` · `executiveSummary.js` · `dashboardGenerator.js` · `reportGenerators.js` · `formatUtils.js`

---

## 4. Results Store (`mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/`)

Every audit writes its raw results into the per-delivery `.infill/` folder (gitignored). `<hostSlug>` is the entry URL's host plus path-segments (`https://www.dkd.de/de/` keys `www.dkd.de-de`) so multilingual audits land in sibling folders rather than colliding; slug derivation is kept in lockstep across `scripts/audit-pipeline.js`, `scripts/cogs/mx-audit.cog.md`, and `bin/infill-report.js`. Key files:

| File | Content |
|------|---------|
| `site_profile.json` | Site-level summary: platform, mxReadiness level/name, schemaMaturity level/name, botBlocked, entryUrl |
| `audit_averages.json` | Pre-computed averages for all dimensions. **Single source of truth for all numeric claims in the report.** Never recompute from CSVs. |
| `results.json` | Full per-URL result array |
| `seo_scores.csv` | Per-URL SEO scores (title, meta description, canonical, content score) |
| `pa11y_findings.csv` | Per-URL WCAG 2.1 AA issue list |
| `pa11y_recurring_patterns.json` | Issues grouped by `(issueCode, selector)`; `isTemplatePattern: true` when ≥40% of pages |
| `llm_general_suitability.csv` | Per-URL LLM/AI suitability: served score, rendered score, heading compliance, JS dependency |
| `image_optimization.csv` | Per-URL image audit: alt text, dimensions, format, loading attribute, JS lazy pattern, double-lazy |
| `link_analysis.csv` | All links extracted: status code, type, anchor text |
| `security_report.csv` | Per-URL security headers: HTTPS, HSTS, CSP, X-Frame-Options, X-Content-Type-Options |
| `structured_data_findings.csv` | Per-URL JSON-LD findings: type, severity, property gaps |
| `mx_journey_stages.csv` | Five-stage MX Journey scores: Discovery, Citation, Search+Compare, Price Understanding, Purchase Confidence |
| `sitemap_health_summary.json` | Sitemap health: URL counts, discrepancy analysis, freshness |
| `sitemap-discrepancy.json` | crawled-not-in-sitemap vs in-sitemap-not-audited |
| `consistency_analysis.json` | Cross-page metadata consistency metrics |
| `robots_txt_analysis.json` | Parsed robots.txt: directives, contentSignals, AI bot coverage |
| `wellknown_discovery.json` | All `/.well-known/` probe results + llms.txt, llms-full.txt, agent-card.json |
| `agent-access.json` | Per-agent HTTP status codes + markdown content negotiation probe |
| `slowest-page-perf.json` | Cache-busted re-probe (three samples each) of the slowest URL and a median-load URL; drives the Server Response Stability section |
| `performance_metrics.csv` | Per-URL Core Web Vitals (LCP, FCP, CLS, TTFB) |
| `mx_meta_tags.csv` | Per-URL MX governance tag presence: `mx:status`, `mx:contentType`, optional tags |
| `pipeline_survivability.csv` | Per-URL eleven reading-resilience check results (Pass/Fail/N/A + data) |
| `schema_inventory.json` | Site-wide Schema.org type inventory; per-page `structuredDataQualityComponents`; `schemaMaturity` |
| `div_soup.json` | Per-page bare-div metrics: score, band, bare count, ratio, deepest chain, top selectors (served + rendered) |
| `pdfs.csv` | PDF inventory: URL, source page, HTML alternative presence |
| `pdf_sample.json` | First PDF sample: Level 1 (ISO 14289-1 tagged) and Level 2 (XMP `pdfuaid:part`) status, EAA exposure |
| `preflight-findings.json` | Pre-flight checklist results from Phase 2; persisted for downstream skill use |

---

## 5. Caching Layer (`mx-outputs/audit/<hostSlug>/.cache/`)

The cache is per-host (keyed by `<hostSlug>`, shared across deliveries); each audited URL generates several cache artefacts keyed by `md5(url)`:

| Subdirectory | Content |
|-------------|---------|
| `body/` | Raw HTTP response body (bytes as received) |
| `served/` | Raw HTML as served before any JS execution |
| `decoded/` | HTML with all HTML entities resolved to Unicode — **use this for all grep/read operations** |
| `rendered/` | HTML after full JavaScript execution (Puppeteer) |
| `screenshots/` | PNG screenshot of the rendered page |
| `json-feeds/` | Platform JSON feed responses (Shopify, WordPress, etc.) |
| `origin/` | Origin-probe caches (`wellknown.json`, `platform.json`, `ai-usage.json`), version-swept by `CACHE_VERSIONS` in `scripts/audit-pipeline.js` |

**Cache key:** `echo -n "<URL>" | md5` → `<hash>.html`

**Rule:** All manual HTML inspection uses `decoded/<hash>.html`. Never use WebFetch — it delegates to a small model that truncates and may hallucinate tag absence.

---

## 6. Report Generation — Two-Pass Pipeline

### Pass 1: Infill (`bin/infill-report.js`)

Mechanically fills every `[PLACEHOLDER_TOKEN]` in the selected template from authoritative data sources. **Never changes during a session** — same source data always produces identical output.

**Inputs:** Template file + all CSV/JSON result files + `site_profile.json` + `audit_averages.json`

**Key behaviours:**

- Reads `audit_averages.json` for all numeric averages (never recomputes from CSVs)
- `[CLIENT_SLUG]` fills from `clientSlug`; `[DATE_YYYY_MM_DD]` fills from `today` (ISO format) — both used in YAML frontmatter `output:` path
- Bar chart tokens (`[BAR_SEO]` etc.) computed via `bar()` helper (Unicode block chars, 0–20 segments)
- Arrow indicator tokens (`[MX_LVL_ARROW_L_N]`, `[SCHEMA_LVL_ARROW_L_N]` etc.) mark the current-level row in the scale tables with `**→**` / `**←**`
- `[MX_READINESS_NEXT_LINE]` and `[SCHEMA_MATURITY_NEXT_LINE]` emit "The site is at the top level, continue monitoring" at ceiling, or "**To reach the next level:** …" otherwise
- Table handlers in `bin/tableHandlers/` are called for complex multi-row tables (pages audited, structured data findings, pipeline survivability, etc.)
- Prose-only sections emit `<!-- REWRITE: … -->` blocks containing verified fact bullets for Pass 2
- **Contract check:** If a sibling `.contract.json` exists, verifies every `[TOKEN]` in the template is declared and every declared token appears in the template. Contract warnings are printed but do not block infill.

**Output:** `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infilled/<slug>.md` — the skeleton; not client-facing (the `.infilled/` staging dir is distinct from the raw-results `.infill/` dir)

### Pass 2: Rewrite (`scripts/rewrite-report.js`)

Replaces every `<!-- REWRITE: … -->` block with polished prose via `lib/llm-client.js` (local Ollama by default; Anthropic `claude-sonnet-4-6` only when `MX_AUDIT_LLM_PROVIDER=anthropic`, overridable with `--model`). **Cannot change any number, URL, percentage, page count, name, or table value.**

The script operates in two output modes depending on the block instruction:

- **MODE 1 — Prose (default):** Block describes a narrative section → 2–3 sentences of flowing consultant prose, no markdown headings or lists.
- **MODE 2 — Table column rewrite:** Block says "rewrite the [Column] column of the following table" → outputs the complete table with only that column rewritten; all other columns and the table structure stay exactly as they are.

`max_tokens` per API call: **1000** (raised from 600 to prevent truncation of longer executive summary blocks).

**Voice rule (enforced by fierce-critic):** Use "we" throughout. No bare "I " — no "I audited", "I found", "I recommend".

**AI vocabulary ban (enforced in system prompt):** `showcasing`, `highlight` (verb), `underscore` (verb), `emphasise`, `pivotal`, `tapestry`, `vibrant`, `crucial`, `delve`, `garner`, `interplay`, `intricate`, `testament`, `enduring`, `landscape` (abstract), `foster`, `cultivate`, `encompass`, `leverage` (verb).

**Output:** `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/<slug>-report.md` — client-ready

### Template selection (Step 6.1)

| Template | When to use |
|----------|-------------|
| `web-audit-suite-template.md` | Default: brand, content, SaaS, publishing, services |
| `ecommerce-audit-template.md` | Sites with a cart/checkout or e-commerce platform fingerprint |

Two-gate rule: Gate 1 requires a commerce anchor (cart/checkout URL or platform fingerprint). Gate 2 requires two or more signals total. A content site with Product/Offer JSON-LD but no cart uses the generic template.

---

## 7. Gate Chain

Every mode (from-template, from-skeleton, from-report) runs the same gate chain in order. First failure stops the chain.

| # | Gate | Command | Pass condition |
|---|------|---------|---------------|
| 1 | markdownlint | `npx markdownlint-cli2 --config .markdownlint-cli2.jsonc <report>` | 0 errors |
| 2 | Frontmatter | `node scripts/validate-report-frontmatter.js --report <report>` | exit 0 |
| 3 | Deterministic verifier | `node scripts/verify-audit-report.js --report <report> --results … --cache …` | exit 0, 0 failures |
| 3p | Provenance-gap | `node mx-audit/scripts/check-report-provenance-gap.js --results …` | exit 0 — fails on self-promotional listicle (P-1), year-swap refresh (P-2, demote with `--warn-year-swap`), or templated citation-empty cluster (P-3); deprecated FAQ/Q&A (P-4) warns only |
| 4 | Fierce critic | `node scripts/audit-fierce-critic.js --report <report> --results … --cache …` | 0 findings |
| 5 | LLM judgment | `node scripts/audit-llm-judgment.js --report <report> --results …` | Findings logged to sidecar; consumed by the unified repair pass after every gate has run. Never blocking. Uses tool use (`report_findings` tool) for structured output. |
| 6 | Template-leak | `node scripts/check-template-leaks.js <report>` | 0 leaks |
| 7 | PDF | `./scripts/bin/mx.pdf.sh <report> <output.pdf>` | exit 0, 0 `↪` continuation markers |

**Verifier checks five claim types:**

- Numeric claims vs CSVs / `site_profile.json` / `audit_averages.json`
- URL existence (skip — trust rendered markdown; no HEAD/GET issued)
- Fenced HTML snippets vs cached HTML
- Positional claims ("JSON-LD in the `<head>`") vs `served/*.html`
- Behavioural claims (JS-driven interactions) — must be hedged or `<!-- MANUAL-VERIFIED: … -->`

**Fierce-critic — two passes (LLM pass via `lib/llm-client.js`; local Ollama by default, soft-skips if no provider is reachable):**

*Regex pass* flags:

- Leaked template/article prose in non-blog reports
- Un-cited industry comparisons
- Internal table contradictions (Pass + breached threshold in same row)
- Image and Pa11y claims conflicting with source CSVs
- Overpromise phrases ("star ratings in search", "reinforces training data")
- Bare "I " voice violations
- Construction-path leaks, changelog-leak, platform capability claims, rewrite-process leaks, unverified percentages

*LLM pass* (via `createLlmClient()`, tool use, `max_tokens: 4096`, streaming; `claude-sonnet-4-6` only in Anthropic opt-out mode) catches what regex cannot:

- **subtle-failure-framing** — "struggles to", "falls short of", "lags behind", inverse praise ("surprisingly good for")
- **hollow-recommendation** — recommendations that name only a category, not a mechanism or specific element; SPECIFICITY TEST searches the entire surrounding priority block, not just the preceding sentence
- **voice-drift** — "After reviewing", "Having examined", academic hedges ("One might argue"), passive voice switching mid-paragraph
- **fabricated-specificity** — industry statistics, effort estimates, or named competitors not present in the audit data; also catches **leaked AI generation artifacts**: AI-to-operator dialogue, unfilled placeholder text, visible system-prompt fragments, self-referential generation notes

Both passes write findings to `<slug>-report-fierce-critic.json` with `source: 'llm'` tags on LLM findings. The sidecar records `regexFindingCount` and `llmFindingCount` separately.

**Template-leak flags:**

- Unresolved `<!-- REWRITE: … -->` blocks
- Unresolved `{{TOKEN}}` mustache placeholders
- Bracket-instruction prose: `[Summary of image findings …]` etc.
- Missing `## Further Reading` section with two-column QR table

---

## 8. Templates and Contracts

### Templates

| File | Purpose |
|------|---------|
| `web-audit-suite-template.md` | General web audit. ~1,100 lines. Covers all MX dimensions. Includes a **Provenance Gap** section between Structured Data Findings and Marker Reachability: a per-page table of deterministic provenance signals (only rows where a signal matched render; clean runs collapse to a single em-dash row), a templated-clusters block gated by `[IF/ELSE/ENDIF]`, a verdict line, a blockers list, and a wrapped "Qualitative provenance review" subsection. The wrapper `<!-- PROVENANCE_LLM_SECTION_START/END -->` is the strip-zone: the handler removes the whole subsection when the LLM pass produced zero findings (silent), renders an inline table for 1–5 findings, or renders the first three findings plus a sidecar pointer for >5. Every rendered variant carries the scope-limit prose pointing readers at the commissioned full-site review. |
| `ecommerce-audit-template.md` | E-commerce variant. Adds Catalogue Visibility Scorecard, Shopping Agent Scenarios, Commerce MX Readiness, Cart/Checkout analysis, Inline Code Duplicates, PDF EAA Compliance Snapshot. At parity with the generic template for: Markdown Content Negotiation, Non-Standard Response Headers, Bot Protection Analysis, agent-card.json (A2A), AI Attribution (SECTION:AI_ATTRIBUTION), Div Soup (SECTION:DIV_SOUP), PDF EAA (SECTION:PDF_EAA with three branches: PDF_EAA_EMPTY, PDF_EAA_SAMPLE, PDF_EAA_NO_QPDF). Does not yet carry the Provenance Gap section — backlog. |
| `dom-analysis-template.md` | Technical DOM deep-dive for developers/CTOs. |
| `mx-readiness-scorecard.md` | One-page handout for follow-up conversations. |

### Contracts

Each report-generating template has a sibling `.contract.json` (the `mx-readiness-scorecard.md` handout and the `CONDITIONAL-PROSE-GUIDE.md` / `REWRITE-BLOCK-GUIDE.md` authoring guides do not):

```json
{
  "_description": "…",
  "placeholders": {
    "TOKEN_NAME": { "handler": "script-deterministic | rewrite-llm | post-verifier | example-instruction | table-row-template" }
  }
}
```

Handler meanings:

- `script-deterministic` — filled mechanically by `infill-report.js`
- `rewrite-llm` — left as `<!-- REWRITE: … -->` for the LLM rewrite pass
- `post-verifier` — filled after the verifier runs
- `example-instruction` — inside HTML comment blocks only; never appears in output
- `table-row-template` — expanded into N rows by a table handler

### Scale table arrow tokens

Both templates use per-row arrow indicator tokens in the MX Readiness Level and Schema Maturity Level tables:

- `[MX_LVL_ARROW_L_0]` … `[MX_LVL_ARROW_L_5]` — left arrow column for MX Readiness rows 0–5
- `[MX_LVL_ARROW_R_0]` … `[MX_LVL_ARROW_R_5]` — right arrow column for MX Readiness rows 0–5
- `[SCHEMA_LVL_ARROW_L_0]` … `[SCHEMA_LVL_ARROW_L_4]` — left arrow column for Schema Maturity rows 0–4 (ecommerce template has row 0 "Clean slate"; generic template starts at row 1)
- `[SCHEMA_LVL_ARROW_R_0]` … `[SCHEMA_LVL_ARROW_R_4]` — right arrow column for Schema Maturity rows 0–4

`infill-report.js` fills the matching row with `**→**` / `**←**`; all other rows get empty string.

---

## 9. Bin Utilities

### Standalone scripts (`bin/`)

| Script | Purpose |
|--------|---------|
| `infill-report.js` | Pass 1 report generation — fills all `[PLACEHOLDER]` tokens from result files |
| `discover-urls.js` | URL discovery: sitemap + crawl, single source of truth for "what URLs to audit" |
| `check-wellknown.js` | Probes `robots.txt`, `llms.txt`, `llms-full.txt`, `agent-card.json`, `ai-plugin.json` etc.; writes `wellknown_discovery.json`. Fingerprints `/zebedee.html` for soft-404 detection using both `bodyMd5` (raw body) and `messageMd5` (visible-text-only MD5, stable across Next.js `__NEXT_DATA__` slug variants). Classifies soft-404s as `error-page`, `homepage`, or `mixed` via `softFourOhFourType`. |
| `agent-access-test.js` | Fetches homepage with eight AI bot User-Agent strings; writes `agent-access.json` |
| `error-page-test.js` | Fetches `/zebedee.html`; analyses error response for MX compliance. Records `bodyMd5`, `messageMd5` (visible-text hash), and `messageSnippet` (first 300 chars of visible text) for report infill. |
| `slowest-page-probe.js` | Re-probes the slowest URL (from `audit_averages.json`) and a median-load URL (from `performance_analysis.csv`) three times each with a `?_mx_cb=<stamp>` cache-busting query parameter and `Cache-Control: no-cache`. Writes `slowest-page-perf.json` with per-sample timings, a median-of-three for each URL, and a Healthy / Acceptable / Slow verdict. Separates "one slow page" from "whole site slow" without re-probing every URL. |
| `hostile-ux-check.js` | Detects UX hostile to AI agents: autoplay carousels, cookie banners, scroll hijack, missing ARIA |
| `json-feed-check.js` | Detects platform JSON feeds; assesses MX suitability |
| `jsonld-snapshot.js` | Captures JSON-LD `@graph` fingerprint per URL; detects entity drift across audits |
| `validate-id-references.js` | Builds site-wide `@id` → entity map; reports dangling cross-references |
| `verify-skeleton.js` | Runs the deterministic verifier against the infilled skeleton before the rewrite pass |
| `capture-pdf-sample.js` | Fetches first PDF linked from audited pages; runs Level 1 (qpdf structure-tree check) and Level 2 (XMP `pdfuaid:part` check); writes `pdf_sample.json`. Requires `qpdf` on PATH; skips analysis gracefully if absent. |
| `write-sitemap-health.js` | Derives `sitemap_health_summary.json` from the sitemap fetch results in `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/` |
| `prune-cache.js` | Removes cache entries older than TTL (default 24 h); atomic per-URL cleanup |
| `cache-status.js` | Reports fresh / stale / missing cache entries before an audit run |
| `check-egress.js` | Pre-flight network health check; detects VPN/tracker-blocker interference |
| `provenance-gap.js` | Step 8b — deterministic provenance-gap primitives; writes `provenance_gap.json` + `.csv` |
| `provenance-gap-llm.js` | Step 8c — model-driven provenance-gap companion (via `lib/llm-client.js`); writes `provenance_gap_llm.jsonl` |
| `check-ai-usage.js` | Probes the site's declared AI-usage signals; writes the `ai-usage.json` origin cache |
| `get-cached-page.js` | Reads a single cached page (decoded HTML) by URL for inspection |
| `sanitise-prose.js` | Standalone prose sanitiser (em-dash, banned verdicts) over a report |
| `topup-pdfs-from-sitemap.js` | Supplements the discovered-PDF inventory from sitemap entries |

### Table handlers (`bin/tableHandlers/`)

Each handler receives the raw result data and returns one or more rendered markdown table rows. Called by `infill-report.js` for multi-row tables.

| Handler | Table produced |
|---------|---------------|
| `pagesAudited.js` | Full pages-audited appendix with per-URL scores |
| `pagesAuditedSimple.js` | Compact pages-audited table |
| `structuredDataFindings.js` | Per-type JSON-LD findings with severity |
| `structuredDataInventory.js` | JSON-LD type inventory across all pages |
| `pipelineSurvivability.js` | Pipeline survivability checks (11 rows); calls `aggregateFn` when all per-page values are N/A due to small-page gate |
| `pipelineSurvivabilitySummary.js` | Summary survival rate table |
| `agentAccess.js` | AI agent access results (8 agents + markdown probe) |
| `robotsSummary.js` | robots.txt compliance summary |
| `llmsTxtSummary.js` | llms.txt discovery and content quality |
| `sitemapSummary.js` | Sitemap discovery and health summary |
| `imageSummary.js` | Image optimisation statistics |
| `brokenLinks.js` | Broken link appendix |
| `positivePatterns.js` | What's working well table rows |
| `markerReachability.js` | Custom marker detection results |
| `mxJourneySummary.js` | 5-Stage MX Journey table |
| `formFieldStandards.js` | Form field standards compliance |
| `scopeStatus.js` | Audit scope coverage |
| `errorPageTest.js` | Error page compliance findings |
| `aiAttribution.js` | AI attribution signals |
| `provenanceGap.js` | Provenance-gap per-page table + templated-cluster block (renders the §8 Provenance Gap section) |
| `checkoutSchema.js` | E-commerce checkout schema (ecommerce template only) |
| `priceParity.js` | Cross-page price consistency (ecommerce template only) |
| `ecommerceScalars.js` | E-commerce scalar metrics (ecommerce template only) |

---

## 10. Claude Code Skills

The skills that orchestrate the pipeline live in `MX-hub/.claude/skills/`:

| Skill | Phase | Key operations |
|-------|-------|---------------|
| `/audit-collect` | 1 | Crawl, cache, fingerprint, collect all metrics |
| `/audit-scores` | 2 | Score analysis, pre-flight checklist, `audit_averages.json` |
| `/audit-discovery` | 3 | Discovery files, verification-gated manual HTML inspection |
| `/audit-access` | 4 | AI agent access test, markdown negotiation probe, content consistency |
| `/audit-report` | 5 | Template selection, infill Pass 1, LLM rewrite Pass 2, full gate chain, PDF |
| `/regen-report` | 5 | Re-run Phase 5 only from `from-template`, `from-skeleton`, or `from-report` mode; auto-detects mode from mtimes |
| `/audit-pdf-access` | 3 (aux) | Heuristic PDF accessibility check (`qpdf`/EAA) over every PDF discovered in Phase 3 |
| `/audit-readability` | 5 (aux) | Readability review of a report: terse tables, unexplained jargon, missing context |
| `/audit-site` | all | Three-perspective orchestrator (Web Audit Suite + DOM + scorecard) over the full pipeline |

**Auto mode selection (`/regen-report`):**

1. If any template or infill machinery file is newer than the skeleton → `from-template`
2. If final report is newer than skeleton → `from-report`
3. If skeleton is newer than final report → `from-skeleton`
4. If neither exists → `from-template`

### Orchestrator and action cog (the deterministic driver)

The skills above are the operator-facing, LLM-assisted entry points. Underneath them, the repo-root
orchestrator `scripts/audit-pipeline.js` is the deterministic driver: it owns `<hostSlug>` derivation,
the `CACHE_VERSIONS` origin-cache sweep, the `mx-outputs/audit/` directory layout, and the
`collect` / `--report` / `--gates` modes. The action cog `scripts/cogs/mx-audit.cog.md` wraps it as a
runnable cog (`mx exec mx-audit …`) and is the SSOT for the end-to-end pipeline contract (phases, env
vars, output layout, hostSlug rules). When a path, env var, or slug rule changes, those two files plus
`bin/infill-report.js` must move together — and `scripts/check-audit-architecture.js` gate-checks this
document against them.

---

## 11. Test Suite (`test/`)

| Directory | Contains |
|-----------|---------|
| `test/collectors/` | Unit tests for `src/collectors/` modules |
| `test/reporters/` | Unit tests for `src/reporters/` modules |
| `test/utils/` | Unit tests for `src/utils/` modules |
| `test/integration/` | End-to-end integration tests against fixture sites |
| `test/fixtures/` | Static HTML, JSON, CSV fixtures for unit tests |
| `test/golden_output/` | Expected output files for regression comparison |
| `test/helpers/` | Shared test utilities and mock factories |
| `test/.cache/` | Cache artefacts for integration tests |

Run with: `npm test` (Mocha, recursive)

---

## 12. Configuration (`src/config/`)

Key configuration points:

**`scoringWeights.js`** — Weight multipliers per dimension. Changing these alters how sub-scores combine into the overall MX readiness score.

**`defaults.js`** — Default values: crawl depth, max URLs, cache TTL, rate limit, Pa11y timeout, Puppeteer launch args.

**`options.js`** — CLI flags available via `node index.js --help`:

- `--url` / `--urls` — target URL(s)
- `--max-urls` — crawl limit
- `--cache-ttl` — cache freshness window
- `--no-cache` — bypass cache
- `--output-dir` — results path override
- `--bulk` — batch mode input file

**`navPages.js`** — Navigational-page classification config (which paths count as `nav` vs `content`).

**`.env` (from `.env.example`)** — Optional overrides for API keys, Puppeteer executable path, proxy settings.

---

## 13. Deterministic Flow, Debug Tracing, and Human-in-the-Loop

### Deterministic flow

The pipeline is split into two irreversible phases with a hard boundary between them.

**Phase 1 (deterministic):** Everything from `src/main.js` through `bin/infill-report.js` is deterministic — given the same cached HTML and result files, every run produces identical output. The key properties:

- All output writes are stderr (warnings, status lines); stdout is reserved for the infilled skeleton when `--out` is omitted (piped mode).
- Before writing any skeleton byte, infill calls `cleanStaleDeliverables()` — it deletes the prior run's skeleton, final report, verification JSON, fierce-critic JSON, manifest, and PDF. This prevents stale prose from surviving a re-run.
- `audit_averages.json` is the single source of truth for all numbers. Infill reads it once; no arithmetic runs inside infill-report.js except bar-chart rendering.
- Stale-sidecar detection: if `site_profile.json` or `agent-access.json` carries an `auditDate` that differs from `audit_averages.json`'s `auditDate`, a `WARNING` is printed before any placeholder is filled. This surfaces mixed-run data before it reaches the report.
- After writing the skeleton, infill automatically spawns `bin/verify-skeleton.js` (via `spawnSync`). If the skeleton contains numeric drift, the process exits 1 before any LLM pass runs. Pass `--no-verify-skeleton` only in test harnesses.

**Phase 2 (LLM prose, locked values):** The rewrite pass reads the skeleton and replaces `<!-- REWRITE: … -->` blocks. It cannot change any value the skeleton contains — the deterministic verifier (`scripts/verify-audit-report.js`) runs immediately after and fails the chain if any number, URL, or table value drifted.

### Debug tracing

There is no `--debug` or `--verbose` flag. Diagnostic output is always emitted to **stderr**, so it does not contaminate skeleton output when stdout is piped. What stderr emits:

| Trigger | stderr line |
|---------|-------------|
| Stale sidecar detected | `WARNING: <name> auditDate is <X>, but audit_averages.json auditDate is <Y>. Sidecar may be stale…` |
| Contract violation (default mode) | `CONTRACT ERROR: <N> placeholder(s) in template but not declared in contract: [TOKEN]…` — exits 1 |
| Contract violation (`--loose` flag) | `CONTRACT WARNING: …` — continues, does not exit |
| Stale deliverables removed | `Cleaned <N> stale deliverable file(s) before regenerating.` |
| Infill complete | `Infilled report written: <path>` + `Placeholders filled: <N>` |
| Unexpected unfilled placeholders | `WARNING: <N> unexpected unfilled placeholder(s): [TOKEN]…` |
| Expected-unfilled placeholders | `Info: <N> expected-unfilled placeholder(s) (template examples / post-verifier slots): …` |
| Table row still carries placeholder | `WARNING: <N> markdown table row(s) still carry placeholders — an expansion handler failed.` |
| All filled cleanly | `All placeholders filled.` or `All real placeholders filled. Template examples and post-verifier slots left for later passes.` |
| Skeleton numeric drift | `Skeleton verification failed — fix numeric drift before rewriting.` — exits 1 |
| Handler error (non-fatal) | `<HandlerName> handler error: <message>` — infill continues with empty output for that table |
| Fatal error | `Fatal: <message>` — exits 1 |

**`--loose` flag:** Downgrades contract violations from errors to warnings and allows infill to continue. Use only when scaffolding new templates where the contract is intentionally incomplete.

**`--no-verify-skeleton` flag:** Skips the automatic `verify-skeleton.js` spawn after writing the skeleton. For test harnesses only — never use in production runs.

### Human-in-the-loop

The pipeline has four explicit human checkpoints:

**1. Manual verification gate (Phase 3 — `/audit-discovery`).**
Every `manualFindings` entry must carry a `verificationCommand` and a non-empty `verificationOutput` before it can enter the report. The skill never fabricates a finding without grounding it in cached HTML. Claims that require genuine LLM judgment (e.g. "this paragraph reads too long") go to a separate `judgmentFindings` bucket and render in the report under a clearly-marked "AI judgment — review required" section. A human must accept these before the report ships — they never silently merge into the deterministic findings list.

**2. Behavioural claim override (Phase 5 — verifier).**
Behavioural claims about JS-driven interactions (focus management, autoplay, drawer behaviour, scroll animations) cannot be grounded in static HTML. They fail the deterministic verifier unless the sentence is hedged as "worth manual verification" / "not exercised by this static audit", **or** preceded by an explicit `<!-- MANUAL-VERIFIED: <description> -->` HTML comment. That comment is the human's declaration that they personally observed the behaviour. The verifier accepts it and records the claim as `skip (manual-verified)`.

**3. LLM judgment pass (Phase 5 — gate 5).**
After the deterministic verifier and fierce critic, `scripts/audit-llm-judgment.js` runs an LLM re-read for things only a model can catch: recommendation consistency, voice consistency, quoted-text accuracy, hedged-vs-asserted balance. Findings stream to its sidecar; after every gate has run, `mx-reginald/audit/scripts/repair-report-unified.js` applies one consolidated pass that fixes mechanical findings deterministically and routes the residue through a single tool-use call to Haiku 4.5. The pre-2026-05-27 self-repair loop (multiple `repair-report.js` rounds, then `repair-report-final.js`) was retired here.

**4. `--loose` contract bypass.**
If a template is being developed and the contract is not yet complete, a human must explicitly pass `--loose` to proceed past contract violations. This is a conscious override, not a silent skip.

---

## 14. Key Invariants

**Audit averages are pre-computed.** `audit_averages.json` is the authoritative source for all numeric claims in reports. Never compute averages manually from CSVs; the tool's `auditAverages.js` handles nav-page exclusion, null-safe averaging, and dual SEO averages.

**Cache is per-host, keyed by URL MD5.** `md5("<URL>")` → `<hash>.html` in each cache subdirectory. Use decoded cache for all HTML inspection.

**Results are per-delivery, cache is per-host.** Raw results live in `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/`; the cache lives in `mx-outputs/audit/<hostSlug>/.cache/`. `<hostSlug>` is derived from the audit entry URL (host plus path-segments), keeping multilingual audits in sibling folders.

**infill-report.js is deterministic.** Given the same source data and template, it always produces identical output. Re-running infill on unchanged data is safe.

**Gate chain is sequential and non-skippable.** A failure at any gate stops the chain. Fix the specific issue, then re-run from that gate — not from the top.

**The fierce-critic blocks on voice violations.** Any bare "I " in the report body (not inside a quoted string or code block) fails the gate. The rewrite pass must use "we" throughout.

**Placeholder contracts enforce template integrity.** Any `[TOKEN]` in a template that is not declared in the sibling `.contract.json` generates a contract warning. Any declared token that does not appear in the template also warns. Both directions are checked.
