# Audit Pipeline Explainer

URL: https://specification.website  Date: 2026-06-02  Run ID: vbhpdw3fi

## COLLECT - 2026-06-02 16:42:12

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 0.4s | pass | https://specification.website/sitemap.xml |
| 6 | crawler | COLLECT | 3.1s | pass |  |
| 7 | url-discovery | COLLECT | 1.1s | pass |  |
| 8 | pdf-topup | COLLECT | 0.1s | pass |  |
| 9 | pdf-sample | COLLECT | 0.1s | pass |  |
| 10 | error-page-test | COLLECT | 0.4s | pass |  |
| 11 | agent-access-test | COLLECT | 22.6s | pass |  |
| 12 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 13 | slowest-page-probe | COLLECT | 5m 24s | pass |  |
| 14 | ab-test-detection | COLLECT | 0.1s | pass |  detected |
| 15 | provenance-gap-deterministic | COLLECT | 0.3s | pass |  |
| 16 | provenance-gap-llm | COLLECT | 2m 59s | pass |  |
| 17 | generate-preflight | COLLECT | 0.3s | pass |  |

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
| Total elapsed | 8m 52s |
| Steps completed | 17 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 5m 24s
2. provenance-gap-llm - 2m 59s
3. agent-access-test - 22.6s
