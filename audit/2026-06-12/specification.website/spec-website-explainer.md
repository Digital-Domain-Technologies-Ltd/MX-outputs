# Audit Pipeline Explainer

URL: https://specification.website  Date: 2026-06-12  Run ID: 3p1dosof8r

## COLLECT - 2026-06-13 01:23:46

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.4s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.3s | pass | https://specification.website/sitemap.xml |
| 7 | sitemap-anomaly | COLLECT | 1.1s | pass |  |
| 8 | crawler | COLLECT | 3m 22s | pass |  |
| 9 | url-discovery | COLLECT | 1.2s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.4s | pass |  |
| 13 | agent-access-test | COLLECT | 22.6s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 5m 25s | pass |  |
| 16 | ab-test-detection | COLLECT | 0.1s | pass | no A/B test or personalisation vendors detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 4 framework(s) detected: Astro (low), Tailwind CSS (high), Cloudflare CDN (low), Netlify (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 13 page(s) |
| 19 | a11y-tree-check | COLLECT | 0.2s | pass | 3 page(s), 1 cluster(s) (1 template-level), score 90/100 |
| 20 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 21 | provenance-gap-llm | COLLECT | 1m 23s | pass |  |
| 22 | audience-classify | COLLECT | 4.3s | pass |  |
| 23 | readability-penalties | COLLECT | 0.1s | pass |  |
| 24 | generate-preflight | COLLECT | 0.1s | pass |  |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| crawler | 2 | PASS |
| generate-preflight | 1 | PASS |

### URL Deduplication

12 crawled URLs resolved to 11 unique pages (inflation factor 1.1x).

**Deduplication types applied:**

- Trailing-slash variants: URLs differing only by a trailing slash treated as one page
- Fragment variants: #anchor suffixes stripped before scoring

| Canonical URL | Variants |
|---------------|----------|
| https://specification.website/llms.txt | 1 |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 10m 42s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 5m 25s
2. crawler - 3m 22s
3. provenance-gap-llm - 1m 23s
