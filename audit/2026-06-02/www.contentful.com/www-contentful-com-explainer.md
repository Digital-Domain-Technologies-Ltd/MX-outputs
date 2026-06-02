# Audit Pipeline Explainer

URL: https://www.contentful.com  Date: 2026-06-02  Run ID: onrahu6xp

## COLLECT - 2026-06-02 11:24:40

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.9s | pass | https://www.contentful.com/sitemap |
| 6 | crawler | COLLECT | 9.4s | pass |  |
| 7 | url-discovery | COLLECT | 2.7s | pass |  |
| 8 | pdf-topup | COLLECT | 0.1s | pass |  |
| 9 | pdf-sample | COLLECT | 0.1s | pass |  |
| 10 | error-page-test | COLLECT | 0.6s | pass |  |
| 11 | agent-access-test | COLLECT | 33.9s | pass |  |
| 12 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 13 | slowest-page-probe | COLLECT | 3m 36s | warn |  |
| 14 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 15 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 16 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 4m 26s |
| Steps completed | 16 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 3m 36s
2. agent-access-test - 33.9s
3. crawler - 9.4s

---

## COLLECT - 2026-06-02 11:42:32

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.3s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.7s | pass | https://www.contentful.com/sitemap |
| 6 | crawler | COLLECT | 5m 56s | pass |  |
| 7 | url-discovery | COLLECT | 1.6s | pass |  |
| 8 | pdf-topup | COLLECT | 0.1s | pass |  |
| 9 | pdf-sample | COLLECT | 0.1s | pass |  |
| 10 | error-page-test | COLLECT | 0.6s | pass |  |
| 11 | agent-access-test | COLLECT | 28.8s | pass |  |
| 12 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 13 | slowest-page-probe | COLLECT | 3m 36s | warn |  |
| 14 | provenance-gap-deterministic | COLLECT | 0.8s | pass |  |
| 15 | provenance-gap-llm | COLLECT | 3m 9s | pass |  |
| 16 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 13m 15s |
| Steps completed | 16 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 5m 56s
2. slowest-page-probe - 3m 36s
3. provenance-gap-llm - 3m 9s
