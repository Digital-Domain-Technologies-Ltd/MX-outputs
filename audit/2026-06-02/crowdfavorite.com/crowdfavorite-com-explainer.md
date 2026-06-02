# Audit Pipeline Explainer

URL: https://crowdfavorite.com  Date: 2026-06-02  Run ID: 10otbd094y

## COLLECT - 2026-06-02 20:59:41

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 1.7s | pass |  |
| 2 | wellknown-probe | COLLECT | 1m 29s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 12.4s | pass |  |
| 5 | sitemap-discovery | COLLECT | 0.9s | pass | https://crowdfavorite.com/sitemap.xml |
| 6 | crawler | COLLECT | 4m 8s | pass |  |
| 7 | url-discovery | COLLECT | 1.8s | pass |  |
| 8 | pdf-topup | COLLECT | 0.1s | pass |  |
| 9 | pdf-sample | COLLECT | 1.0s | pass |  |
| 10 | error-page-test | COLLECT | 1.8s | pass |  |
| 11 | agent-access-test | COLLECT | 54.1s | pass |  |
| 12 | served-rendered-gap | COLLECT | 0.1s | warn |  |
| 13 | slowest-page-probe | COLLECT | 5m 48s | warn |  |
| 14 | ab-test-detection | COLLECT | 0.3s | pass |  detected |
| 15 | provenance-gap-deterministic | COLLECT | 0.6s | pass |  |
| 16 | provenance-gap-llm | COLLECT | 1m 12s | pass |  |
| 17 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| https://crowdfavorite.com/llms.txt | 1 |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 13m 51s |
| Steps completed | 17 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 5m 48s
2. crawler - 4m 8s
3. wellknown-probe - 1m 29s

---

## REPORT - 2026-06-02 21:05:28

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 5m 46s | pass |  |
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
| Total elapsed | 5m 47s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 5m 46s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-02 21:09:11

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | pass |  |
| 7 | gate-0c | GATES | 0.7s | warn |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.3s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 57s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 24s | pass |  |
| 18 | unified-repair | GATES | 0.2s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.6s | warn | 1 finding(s) |
| 21 | gate-4d-provenance | GATES | 12.6s | pass |  |
| 22 | gate-5-pdf | GATES | 6.2s | pass | mx-outputs/audit/2026-06-02/crowdfavorite.com/crowdfavorite-com-report.pdf |

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
| Total elapsed | 3m 44s |
| Steps completed | 22 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-3-fierce-critic - 1m 57s
2. gate-4-llm-judgment - 1m 24s
3. gate-4d-provenance - 12.6s
