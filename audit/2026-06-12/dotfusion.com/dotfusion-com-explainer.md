# Audit Pipeline Explainer

URL: https://dotfusion.com  Date: 2026-06-12  Run ID: 3oez36qn0w

## COLLECT - 2026-06-13 00:50:30

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 1.3s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.3s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.1s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.9s | pass | https://dotfusion.com/sitemap.xml |
| 7 | sitemap-anomaly | COLLECT | 0.5s | pass |  |
| 8 | crawler | COLLECT | 2m 29s | pass |  |
| 9 | url-discovery | COLLECT | 0.6s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.6s | pass |  |
| 13 | agent-access-test | COLLECT | 21.6s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 3m 38s | warn |  |
| 16 | ab-test-detection | COLLECT | 0.4s | pass | no A/B test or personalisation vendors detected |
| 17 | framework-detection | COLLECT | 0.4s | pass | 4 framework(s) detected: Next.js (high), Tailwind CSS (high), Bootstrap (low), Netlify (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 23 page(s) |
| 19 | a11y-tree-check | COLLECT | 0.5s | pass | 12 page(s), 5 cluster(s) (3 template-level), score 50/100 |
| 20 | provenance-gap-deterministic | COLLECT | 0.6s | pass |  |
| 21 | provenance-gap-llm | COLLECT | 0.3s | pass |  |
| 22 | audience-classify | COLLECT | 5.7s | pass |  |
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
| Total elapsed | 6m 42s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 3m 38s
2. crawler - 2m 29s
3. agent-access-test - 21.6s
