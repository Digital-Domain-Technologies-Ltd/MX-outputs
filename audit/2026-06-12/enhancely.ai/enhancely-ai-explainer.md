# Audit Pipeline Explainer

URL: https://enhancely.ai  Date: 2026-06-12  Run ID: 3ok6ne0rjo

## COLLECT - 2026-06-13 01:02:29

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.3s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.7s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.6s | pass | https://enhancely.ai/sitemap.xml |
| 7 | sitemap-anomaly | COLLECT | 0.6s | pass |  |
| 8 | crawler | COLLECT | 5m 32s | pass |  |
| 9 | url-discovery | COLLECT | 0.6s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.8s | pass |  |
| 13 | agent-access-test | COLLECT | 25.4s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 3m 35s | warn |  |
| 16 | ab-test-detection | COLLECT | 0.2s | pass | no A/B test or personalisation vendors detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 3 framework(s) detected: Tailwind CSS (high), WooCommerce (low), Netlify (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 13 page(s) |
| 19 | a11y-tree-check | COLLECT | 28.0s | pass | 12 page(s), 7 cluster(s) (4 template-level), score 60/100 |
| 20 | provenance-gap-deterministic | COLLECT | 0.4s | pass |  |
| 21 | provenance-gap-llm | COLLECT | 1m 41s | pass |  |
| 22 | audience-classify | COLLECT | 5.9s | pass |  |
| 23 | readability-penalties | COLLECT | 0.1s | pass |  |
| 24 | generate-preflight | COLLECT | 0.1s | pass |  |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| crawler | 2 | PASS |
| generate-preflight | 1 | PASS |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 11m 52s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 5m 32s
2. slowest-page-probe - 3m 35s
3. provenance-gap-llm - 1m 41s
