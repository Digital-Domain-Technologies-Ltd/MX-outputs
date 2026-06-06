# Audit Pipeline Explainer

URL: https://crowdfavorite.com  Date: 2026-06-06  Run ID: 412pquxvv0

## COLLECT - 2026-06-06 09:48:39

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.3s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 10.8s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.2s | pass | https://crowdfavorite.com/sitemap.xml |
| 6 | sitemap-anomaly | COLLECT | 2.2s | pass |  |
| 7 | crawler | COLLECT | 10.9s | pass |  |
| 8 | url-discovery | COLLECT | 2.0s | pass |  |
| 9 | pdf-topup | COLLECT | 0.1s | pass |  |
| 10 | pdf-sample | COLLECT | 0.2s | pass |  |
| 11 | error-page-test | COLLECT | 1.8s | pass |  |
| 12 | agent-access-test | COLLECT | 35.5s | pass |  |
| 13 | served-rendered-gap | COLLECT | 0.1s | warn |  |
| 14 | slowest-page-probe | COLLECT | 5m 32s | warn |  |
| 15 | ab-test-detection | COLLECT | 0.3s | pass | no A/B test or personalisation vendors detected |
| 16 | framework-detection | COLLECT | 0.4s | pass | 7 framework(s) detected: React (medium), Tailwind CSS (medium), Foundation (medium), Gutenberg (WordPress block editor) (high) … |
| 17 | provenance-gap-deterministic | COLLECT | 0.6s | pass |  |
| 18 | provenance-gap-llm | COLLECT | 0.4s | pass |  |
| 19 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 6m 40s |
| Steps completed | 19 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 5m 32s
2. agent-access-test - 35.5s
3. crawler - 10.9s

---

## REPORT - 2026-06-06 09:51:34

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.6s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 54s | pass |  |
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
| Total elapsed | 2m 55s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 54s
2. infill-pass1 - 0.6s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-06 09:55:29

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
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
| 16 | gate-3-fierce-critic | GATES | 1m 35s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 4s | pass |  |
| 18 | unified-repair | GATES | 50.7s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 25 finding(s) |
| 22 | gate-4d-provenance | GATES | 14.7s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.2s | pass |  |
| 24 | gate-5-pdf | GATES | 7.1s | pass | mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.pdf |

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
| Total elapsed | 3m 55s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-3-fierce-critic - 1m 35s
2. gate-4-llm-judgment - 1m 4s
3. unified-repair - 50.7s
