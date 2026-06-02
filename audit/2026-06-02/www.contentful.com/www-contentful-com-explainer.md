# Audit Pipeline Explainer

URL: https://www.contentful.com  Date: 2026-06-02  Run ID: s4taca2hl

## COLLECT - 2026-06-02 14:11:12

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.3s | pass |  |
| 2 | wellknown-probe | COLLECT | 10.8s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 3.9s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.4s | pass | https://www.contentful.com/sitemap |
| 6 | crawler | COLLECT | 10.2s | pass |  |
| 7 | url-discovery | COLLECT | 1.7s | pass |  |
| 8 | pdf-topup | COLLECT | 0.1s | pass |  |
| 9 | pdf-sample | COLLECT | 0.1s | pass |  |
| 10 | error-page-test | COLLECT | 0.6s | pass |  |
| 11 | ab-test-detection | COLLECT | 0.5s | pass | Ninetailed, Google Optimize, Optimizely, Visual Website Optimizer (VWO), Kameleoon, Dynamic Yield, Unbounce Smart Traffic detected |
| 12 | agent-access-test | COLLECT | 30.1s | pass |  |
| 13 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 14 | slowest-page-probe | COLLECT | 3m 29s | warn |  |
| 15 | provenance-gap-deterministic | COLLECT | 0.8s | pass |  |
| 16 | provenance-gap-llm | COLLECT | 3m 8s | pass |  |
| 17 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 7m 38s |
| Steps completed | 17 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 3m 29s
2. provenance-gap-llm - 3m 8s
3. agent-access-test - 30.1s
