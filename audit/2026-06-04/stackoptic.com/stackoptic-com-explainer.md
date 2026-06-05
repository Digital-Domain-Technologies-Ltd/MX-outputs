# Audit Pipeline Explainer

URL: https://stackoptic.com  Date: 2026-06-04  Run ID: 2m2jm3igu7

## COLLECT - 2026-06-04 17:55:00

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.3s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 0.9s | pass | https://stackoptic.com/sitemap.xml |
| 6 | sitemap-anomaly | COLLECT | 0.1s | warn |  |
| 7 | crawler | COLLECT | 3m 36s | pass |  |
| 8 | url-discovery | COLLECT | 2.3s | pass |  |
| 9 | pdf-topup | COLLECT | 0.1s | pass |  |
| 10 | pdf-sample | COLLECT | 0.1s | pass |  |
| 11 | error-page-test | COLLECT | 0.6s | pass |  |
| 12 | agent-access-test | COLLECT | 21.9s | pass |  |
| 13 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 14 | slowest-page-probe | COLLECT | 5m 14s | warn |  |
| 15 | ab-test-detection | COLLECT | 0.1s | pass |  detected |
| 16 | framework-detection | COLLECT | 0.1s | pass | 4 framework(s) detected: Next.js (low), Tailwind CSS (high), WooCommerce (low), Cloudflare CDN (medium) |
| 17 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 18 | provenance-gap-llm | COLLECT | 1m 54s | pass |  |
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
| Total elapsed | 11m 11s |
| Steps completed | 19 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 5m 14s
2. crawler - 3m 36s
3. provenance-gap-llm - 1m 54s

---

## REPORT - 2026-06-04 17:57:36

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
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
| Total elapsed | 2m 36s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 35s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-04 18:02:05

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 1 mis-statement(s) |
| 7 | gate-0c | GATES | 0.8s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 23s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 25s | pass |  |
| 18 | unified-repair | GATES | 1m 14s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.6s | warn | 1 finding(s) |
| 21 | gate-4d-provenance | GATES | 16.0s | pass |  |
| 22 | gate-5-pdf | GATES | 7.2s | pass | mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.pdf |

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
| Total elapsed | 4m 29s |
| Steps completed | 22 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-4-llm-judgment - 1m 25s
2. gate-3-fierce-critic - 1m 23s
3. unified-repair - 1m 14s

---

## REPORT - 2026-06-04 18:41:49

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.6s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 43s | pass |  |
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
| Total elapsed | 2m 43s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 43s
2. infill-pass1 - 0.6s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-04 18:46:06

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 1 mis-statement(s) |
| 7 | gate-0c | GATES | 0.8s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | - | skip | no --results dir provided |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 7s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 42s | pass |  |
| 18 | unified-repair | GATES | 51.6s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | warn | 1 finding(s) |
| 21 | gate-4d-provenance | GATES | 25.1s | pass |  |
| 22 | gate-5-pdf | GATES | 6.9s | pass | mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.pdf |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| gate-5-pdf | 1 | PASS |

### Skipped Steps

| Step | Reason | Impact |
|------|--------|--------|
| gate-0p | no --results dir provided | provenance-gap signals not checked |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 4m 17s |
| Steps completed | 21 |
| Steps skipped | 1 |

**Slowest steps:**

1. gate-4-llm-judgment - 1m 42s
2. gate-3-fierce-critic - 1m 7s
3. unified-repair - 51.6s

---

## COLLECT - 2026-06-04 19:43:08

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.3s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 0.9s | pass | https://stackoptic.com/sitemap.xml |
| 6 | sitemap-anomaly | COLLECT | 0.1s | warn |  |
| 7 | crawler | COLLECT | 59.4s | pass |  |
| 8 | url-discovery | COLLECT | 2.6s | pass |  |
| 9 | pdf-topup | COLLECT | 0.1s | pass |  |
| 10 | pdf-sample | COLLECT | 0.1s | pass |  |
| 11 | error-page-test | COLLECT | 0.7s | pass |  |
| 12 | agent-access-test | COLLECT | 21.4s | pass |  |
| 13 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 14 | slowest-page-probe | COLLECT | 5m 30s | warn |  |
| 15 | ab-test-detection | COLLECT | 0.1s | pass | no A/B test or personalisation vendors detected |
| 16 | framework-detection | COLLECT | 0.1s | pass | 4 framework(s) detected: Next.js (low), Tailwind CSS (high), WooCommerce (low), Cloudflare CDN (medium) |
| 17 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 18 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
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
| Total elapsed | 6m 57s |
| Steps completed | 19 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 5m 30s
2. crawler - 59.4s
3. agent-access-test - 21.4s

---

## REPORT - 2026-06-04 19:45:28

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.6s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 19s | pass |  |
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
| Total elapsed | 2m 20s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 19s
2. infill-pass1 - 0.6s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-04 19:49:50

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 1 mis-statement(s) |
| 7 | gate-0c | GATES | 0.8s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 19s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 27s | pass |  |
| 18 | unified-repair | GATES | 42.0s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-4d-provenance | GATES | 44.0s | pass |  |
| 22 | gate-5-pdf | GATES | 7.2s | pass | mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.pdf |

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
| Steps completed | 22 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-4-llm-judgment - 1m 27s
2. gate-3-fierce-critic - 1m 19s
3. gate-4d-provenance - 44.0s

---

## REPORT - 2026-06-04 19:55:05

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.6s | pass |  |
| 3 | rewrite-pass2 | REPORT | 1m 53s | pass |  |
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
| Total elapsed | 1m 53s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 1m 53s
2. infill-pass1 - 0.6s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-04 20:00:34

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
| 11 | gate-0p | GATES | - | skip | no --results dir provided |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.3s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 26s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 51s | warn |  |
| 18 | unified-repair | GATES | 1m 8s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.6s | pass |  |
| 21 | gate-4d-provenance | GATES | 54.1s | pass |  |
| 22 | gate-5-pdf | GATES | 6.7s | pass | mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.pdf |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| gate-5-pdf | 1 | PASS |

### Skipped Steps

| Step | Reason | Impact |
|------|--------|--------|
| gate-0p | no --results dir provided | provenance-gap signals not checked |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 5m 29s |
| Steps completed | 21 |
| Steps skipped | 1 |

**Slowest steps:**

1. gate-4-llm-judgment - 1m 51s
2. gate-3-fierce-critic - 1m 26s
3. unified-repair - 1m 8s
