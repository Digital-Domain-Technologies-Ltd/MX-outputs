# Audit Pipeline Explainer

URL: https://www.contentful.com  Date: 2026-06-06  Run ID: 4arsowuxte

## COLLECT - 2026-06-06 17:24:43

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 32.4s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 11.1s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.5s | pass | https://www.contentful.com/sitemap |
| 6 | sitemap-anomaly | COLLECT | 0.5s | pass |  |
| 7 | crawler | COLLECT | 11.0s | pass |  |
| 8 | url-discovery | COLLECT | 1.6s | pass |  |
| 9 | pdf-topup | COLLECT | 0.1s | pass |  |
| 10 | pdf-sample | COLLECT | 0.1s | pass |  |
| 11 | error-page-test | COLLECT | 0.6s | pass |  |
| 12 | agent-access-test | COLLECT | 34.5s | pass |  |
| 13 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 14 | slowest-page-probe | COLLECT | 3m 37s | warn |  |
| 15 | ab-test-detection | COLLECT | 0.5s | pass | Ninetailed, Google Optimize, Optimizely, Visual Website Optimizer (VWO), Kameleoon, Dynamic Yield, Unbounce Smart Traffic detected |
| 16 | framework-detection | COLLECT | 0.6s | pass | 4 framework(s) detected: Next.js (low), Gatsby (low), Svelte (low), Tailwind CSS (medium) |
| 17 | provenance-gap-deterministic | COLLECT | 0.8s | pass |  |
| 18 | provenance-gap-llm | COLLECT | 1m 36s | pass |  |
| 19 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 6m 48s |
| Steps completed | 19 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 3m 37s
2. provenance-gap-llm - 1m 36s
3. agent-access-test - 34.5s

---

## REPORT - 2026-06-06 17:27:59

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.6s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 41s | pass |  |
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
| Total elapsed | 2m 42s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 41s
2. infill-pass1 - 0.6s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-06 17:37:33

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | warn | 1 mixed-voice section(s) |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 1 mis-statement(s) |
| 7 | gate-0c | GATES | 0.7s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.3s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 18s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 33s | pass |  |
| 18 | unified-repair | GATES | 1m 49s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 82 finding(s) |
| 22 | gate-4d-provenance | GATES | 15.4s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.2s | pass |  |
| 24 | gate-5-pdf | GATES | 8.4s | pass | mx-outputs/audit/2026-06-06/www.contentful.com/www-contentful-com-report.pdf |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| gate-5-pdf | 1 | PASS |

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
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. unified-repair - 1m 49s
2. gate-4-llm-judgment - 1m 33s
3. gate-3-fierce-critic - 1m 18s

---

## GATES - 2026-06-06 17:44:58

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | pass |  |
| 7 | gate-0c | GATES | 0.8s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.3s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 52s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 25s | pass |  |
| 18 | unified-repair | GATES | 1m 43s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 83 finding(s) |
| 22 | gate-4d-provenance | GATES | 22.0s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.2s | pass |  |
| 24 | gate-5-pdf | GATES | 6.8s | pass | mx-outputs/audit/2026-06-06/www.contentful.com/www-contentful-com-report.pdf |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| gate-5-pdf | 1 | PASS |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 5m 33s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-3-fierce-critic - 1m 52s
2. unified-repair - 1m 43s
3. gate-4-llm-judgment - 1m 25s

---

## GATES - 2026-06-06 18:20:54

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | pass |  |
| 7 | gate-0c | GATES | 0.7s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.3s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 29s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 28s | pass |  |
| 18 | unified-repair | GATES | 44.5s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 78 finding(s) |
| 22 | gate-4d-provenance | GATES | 29.1s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 6.9s | pass | mx-outputs/audit/2026-06-06/www.contentful.com/www-contentful-com-report.pdf |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| gate-5-pdf | 1 | PASS |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 4m 22s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-3-fierce-critic - 1m 29s
2. gate-4-llm-judgment - 1m 28s
3. unified-repair - 44.5s
