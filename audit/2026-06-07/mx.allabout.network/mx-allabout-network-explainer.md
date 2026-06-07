# Audit Pipeline Explainer

URL: https://mx.allabout.network  Date: 2026-06-07  Run ID: 4sf8rwpge2

## COLLECT - 2026-06-07 07:44:43

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 12.8s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 2.7s | pass |  |
| 5 | sitemap-discovery | COLLECT | 0.7s | pass | https://mx.allabout.network/sitemap.xml |
| 6 | sitemap-anomaly | COLLECT | 0.4s | pass |  |
| 7 | crawler | COLLECT | 28m 35s | pass |  |
| 8 | url-discovery | COLLECT | 0.6s | pass |  |
| 9 | pdf-topup | COLLECT | 0.1s | pass |  |
| 10 | pdf-sample | COLLECT | 1.6s | pass |  |
| 11 | error-page-test | COLLECT | 0.9s | pass |  |
| 12 | agent-access-test | COLLECT | 22.1s | pass |  |
| 13 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 14 | slowest-page-probe | COLLECT | 5m 27s | pass |  |
| 15 | ab-test-detection | COLLECT | 0.8s | pass | Dynamic Yield, Unbounce Smart Traffic detected |
| 16 | framework-detection | COLLECT | 0.7s | pass | 5 framework(s) detected: React (low), Next.js (low), Bootstrap (medium), Tailwind CSS (low) … |
| 17 | freshness-expiry-detection | COLLECT | 0.2s | pass | 1/153 page(s) declare expires, 0 already past |
| 18 | provenance-gap-deterministic | COLLECT | 1.6s | pass |  |
| 19 | provenance-gap-llm | COLLECT | 2m 4s | pass |  |
| 20 | generate-preflight | COLLECT | 0.2s | pass |  |

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
| Total elapsed | 36m 52s |
| Steps completed | 20 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 28m 35s
2. slowest-page-probe - 5m 27s
3. provenance-gap-llm - 2m 4s

---

## REPORT - 2026-06-07 07:47:49

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 1.0s | pass |  |
| 3 | rewrite-pass2 | REPORT | 3m 5s | pass |  |
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
| Total elapsed | 3m 6s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 3m 5s
2. infill-pass1 - 1.0s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-07 07:53:57

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.2s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 1 mis-statement(s) |
| 7 | gate-0c | GATES | 1.7s | pass |  |
| 8 | gate-0d | GATES | 0.2s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.2s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.2s | pass |  |
| 14 | gate-1 | GATES | 0.2s | pass |  |
| 15 | gate-2 | GATES | 0.4s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 60s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 50s | pass |  |
| 18 | unified-repair | GATES | 1m 41s | pass |  |
| 19 | gate-4b | GATES | 0.3s | pass |  |
| 20 | gate-4c | GATES | 0.8s | pass |  |
| 21 | gate-prose-lint | GATES | 0.2s | pass |  |
| 22 | gate-4d-provenance | GATES | 20.3s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 10.8s | pass | mx-outputs/audit/2026-06-07/mx.allabout.network/mx-allabout-network-report.pdf |

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
| Total elapsed | 6m 8s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-3-fierce-critic - 1m 60s
2. gate-4-llm-judgment - 1m 50s
3. unified-repair - 1m 41s
