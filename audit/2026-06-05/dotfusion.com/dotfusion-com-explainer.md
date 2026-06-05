# Audit Pipeline Explainer

URL: https://dotfusion.com  Date: 2026-06-05  Run ID: 37cqj17eos

## COLLECT - 2026-06-05 10:37:11

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.3s | pass |  |
| 2 | wellknown-probe | COLLECT | 9.5s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 2.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 0.5s | pass | https://dotfusion.com/sitemap.xml |
| 6 | sitemap-anomaly | COLLECT | 0.6s | pass |  |
| 7 | crawler | COLLECT | 6m 33s | pass |  |
| 8 | url-discovery | COLLECT | 0.7s | pass |  |
| 9 | pdf-topup | COLLECT | 0.1s | pass |  |
| 10 | pdf-sample | COLLECT | 0.1s | pass |  |
| 11 | error-page-test | COLLECT | 0.5s | pass |  |
| 12 | agent-access-test | COLLECT | 21.9s | pass |  |
| 13 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 14 | slowest-page-probe | COLLECT | 3m 30s | warn |  |
| 15 | ab-test-detection | COLLECT | 0.2s | pass | no A/B test or personalisation vendors detected |
| 16 | framework-detection | COLLECT | 0.2s | pass | 3 framework(s) detected: Next.js (high), Tailwind CSS (high), Bootstrap (low) |
| 17 | provenance-gap-deterministic | COLLECT | 0.3s | pass |  |
| 18 | provenance-gap-llm | COLLECT | 1m 59s | pass |  |
| 19 | generate-preflight | COLLECT | 0.2s | pass |  |

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
| Total elapsed | 12m 39s |
| Steps completed | 19 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 6m 33s
2. slowest-page-probe - 3m 30s
3. provenance-gap-llm - 1m 59s

---

## REPORT - 2026-06-05 10:39:46

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.7s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 35s | pass |  |
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
| Total elapsed | 2m 35s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 35s
2. infill-pass1 - 0.7s
3. engagement-table-regen - 0.1s

---

## GATES - 2026-06-05 10:44:32

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
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 19s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 54s | warn |  |
| 18 | unified-repair | GATES | 1m 5s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 29 finding(s) |
| 22 | gate-4d-provenance | GATES | 16.3s | pass |  |
| 23 | gate-5-pdf | GATES | 7.1s | pass | mx-outputs/audit/2026-06-05/dotfusion.com/dotfusion-com-report.pdf |

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
| Total elapsed | 4m 45s |
| Steps completed | 23 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-4-llm-judgment - 1m 54s
2. gate-3-fierce-critic - 1m 19s
3. unified-repair - 1m 5s
