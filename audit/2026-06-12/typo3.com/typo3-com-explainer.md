# Audit Pipeline Explainer

URL: https://typo3.com  Date: 2026-06-12  Run ID: 3pgymvv100

## COLLECT - 2026-06-13 01:45:50

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 5.7s | warn |  |
| 3 | sitemap-defects | COLLECT | 5.3s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.4s | pass | https://typo3.com/sitemap.xml |
| 7 | sitemap-anomaly | COLLECT | 0.8s | pass |  |
| 8 | crawler | COLLECT | 5m 29s | pass |  |
| 9 | url-discovery | COLLECT | 0.7s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.6s | pass |  |
| 13 | agent-access-test | COLLECT | 21.9s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 3m 34s | warn |  |
| 16 | ab-test-detection | COLLECT | 0.2s | pass | no A/B test or personalisation vendors detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 2 framework(s) detected: Bootstrap (low), Netlify (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 13 page(s) |
| 19 | a11y-tree-check | COLLECT | 31.3s | pass | 11 page(s), 8 cluster(s) (5 template-level), score 44/100 |
| 20 | provenance-gap-deterministic | COLLECT | 0.3s | pass |  |
| 21 | provenance-gap-llm | COLLECT | 2m 8s | pass |  |
| 22 | audience-classify | COLLECT | 4.2s | pass |  |
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
| Total elapsed | 12m 24s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 5m 29s
2. slowest-page-probe - 3m 34s
3. provenance-gap-llm - 2m 8s

---

## REPORT - 2026-06-13 08:11:15

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 26s | pass |  |
| 4 | engagement-table-regen | REPORT | 0.1s | pass |  |
| 5 | audit-delta-inject | REPORT | 0.1s | pass |  |
| 6 | error-section-regen | REPORT | 0.1s | pass |  |

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
| Total elapsed | 2m 27s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 26s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-13 09:14:04

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 2 mis-statement(s) |
| 7 | gate-0c | GATES | 0.4s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 24s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 9s | pass |  |
| 18 | unified-repair | GATES | 1m 36s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.8s | warn | 2 finding(s) |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 80 finding(s) |
| 22 | gate-4d-provenance | GATES | 19.5s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 7.0s | pass | mx-outputs/audit/2026-06-12/typo3.com/typo3-com-report.pdf |

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
| Total elapsed | 4m 40s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. unified-repair - 1m 36s
2. gate-3-fierce-critic - 1m 24s
3. gate-4-llm-judgment - 1m 9s
