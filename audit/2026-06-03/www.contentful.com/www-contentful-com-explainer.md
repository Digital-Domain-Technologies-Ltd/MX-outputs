# Audit Pipeline Explainer

URL: https://www.contentful.com  Date: 2026-06-03  Run ID: 1lp183at6v

## COLLECT - 2026-06-03 13:21:06

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.7s | pass | https://www.contentful.com/sitemap |
| 6 | crawler | COLLECT | 11.4s | pass |  |
| 7 | url-discovery | COLLECT | 1.0s | pass |  |
| 8 | pdf-topup | COLLECT | 0.1s | pass |  |
| 9 | pdf-sample | COLLECT | 0.1s | pass |  |
| 10 | error-page-test | COLLECT | 1.4s | pass |  |
| 11 | agent-access-test | COLLECT | 29.4s | pass |  |
| 12 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 13 | slowest-page-probe | COLLECT | 3m 33s | warn |  |
| 14 | ab-test-detection | COLLECT | 0.5s | pass | Ninetailed, Google Optimize, Optimizely, Visual Website Optimizer (VWO), Kameleoon, Dynamic Yield, Unbounce Smart Traffic detected (content variance confirmed across fetches) |
| 15 | framework-detection | COLLECT | 0.5s | pass | 4 framework(s) detected: Next.js (low), Gatsby (low), Svelte (low), Tailwind CSS (medium) |
| 16 | provenance-gap-deterministic | COLLECT | 0.8s | pass |  |
| 17 | provenance-gap-llm | COLLECT | 3m 15s | pass |  |
| 18 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 7m 36s |
| Steps completed | 18 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 3m 33s
2. provenance-gap-llm - 3m 15s
3. agent-access-test - 29.4s

---

## REPORT - 2026-06-03 13:26:14

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.6s | pass |  |
| 3 | rewrite-pass2 | REPORT | 5m 7s | pass |  |
| 4 | engagement-table-regen | REPORT | 0.1s | pass |  |
| 5 | error-section-regen | REPORT | 0.1s | pass |  |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| infill-pass1 | 1 | PASS |
| rewrite-pass2 | 1 | PASS |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 5m 8s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 5m 7s
2. infill-pass1 - 0.6s
3. template-voice-check - 0.1s

---

## COLLECT - 2026-06-03 13:44:29

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.3s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.9s | pass | https://www.contentful.com/sitemap |
| 6 | crawler | COLLECT | 11.5s | pass |  |
| 7 | url-discovery | COLLECT | 3.2s | pass |  |
| 8 | pdf-topup | COLLECT | 0.1s | pass |  |
| 9 | pdf-sample | COLLECT | 0.1s | pass |  |
| 10 | error-page-test | COLLECT | 0.6s | pass |  |
| 11 | agent-access-test | COLLECT | 29.4s | pass |  |
| 12 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 13 | slowest-page-probe | COLLECT | 3m 37s | warn |  |
| 14 | ab-test-detection | COLLECT | 0.5s | pass | Ninetailed, Google Optimize, Optimizely, Visual Website Optimizer (VWO), Kameleoon, Dynamic Yield, Unbounce Smart Traffic detected |
| 15 | framework-detection | COLLECT | 0.6s | pass | 4 framework(s) detected: Next.js (low), Gatsby (low), Svelte (low), Tailwind CSS (medium) |
| 16 | provenance-gap-deterministic | COLLECT | 0.8s | pass |  |
| 17 | provenance-gap-llm | COLLECT | 3m 18s | pass |  |
| 18 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 7m 44s |
| Steps completed | 18 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 3m 37s
2. provenance-gap-llm - 3m 18s
3. agent-access-test - 29.4s

---

## REPORT - 2026-06-03 13:49:41

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.6s | pass |  |
| 3 | rewrite-pass2 | REPORT | 5m 11s | pass |  |
| 4 | engagement-table-regen | REPORT | 0.1s | pass |  |
| 5 | error-section-regen | REPORT | 0.1s | pass |  |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| infill-pass1 | 1 | PASS |
| rewrite-pass2 | 1 | PASS |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 5m 12s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 5m 11s
2. infill-pass1 - 0.6s
3. template-voice-check - 0.1s
