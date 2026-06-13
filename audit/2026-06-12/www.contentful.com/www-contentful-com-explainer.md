# Audit Pipeline Explainer

URL: https://www.contentful.com  Date: 2026-06-12  Run ID: 3pzaz4m00y

## COLLECT - 2026-06-13 02:04:36

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.3s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.1s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 2.1s | pass | https://www.contentful.com/sitemap |
| 7 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 8 | crawler | COLLECT | 2m 13s | pass |  |
| 9 | url-discovery | COLLECT | 1.4s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 2.6s | pass |  |
| 13 | agent-access-test | COLLECT | 37.1s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 3m 35s | warn |  |
| 16 | ab-test-detection | COLLECT | 0.5s | pass | Ninetailed, Google Optimize, Optimizely, Visual Website Optimizer (VWO), Kameleoon, Dynamic Yield, Unbounce Smart Traffic detected (layer present, no variance observed this run) |
| 17 | framework-detection | COLLECT | 0.5s | pass | 5 framework(s) detected: Next.js (low), Gatsby (low), Svelte (low), Tailwind CSS (medium) … |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 13 page(s) |
| 19 | a11y-tree-check | COLLECT | 34.0s | pass | 11 page(s), 44 cluster(s) (3 template-level), score 0/100 |
| 20 | provenance-gap-deterministic | COLLECT | 0.8s | pass |  |
| 21 | provenance-gap-llm | COLLECT | 0.6s | pass |  |
| 22 | audience-classify | COLLECT | 4.3s | pass |  |
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
| Total elapsed | 7m 13s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 3m 35s
2. crawler - 2m 13s
3. agent-access-test - 37.1s
