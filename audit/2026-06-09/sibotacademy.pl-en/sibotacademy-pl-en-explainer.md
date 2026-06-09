# Audit Pipeline Explainer

URL: https://sibotacademy.pl/en  Date: 2026-06-09  Run ID: ntjw9v1g1

## COLLECT - 2026-06-09 11:48:39

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 4.7s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 1.6s | pass |  |
| 5 | sitemap-discovery | COLLECT | 0.8s | warn | no sitemap found |
| 6 | sitemap-anomaly | COLLECT | 0.6s | pass |  |
| 7 | crawler | COLLECT | 4m 26s | pass |  |
| 8 | url-discovery | COLLECT | 0.4s | pass |  |
| 9 | pdf-topup | COLLECT | 0.1s | pass |  |
| 10 | pdf-sample | COLLECT | 0.1s | pass |  |
| 11 | error-page-test | COLLECT | 0.4s | pass |  |
| 12 | agent-access-test | COLLECT | 22.9s | pass |  |
| 13 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 14 | slowest-page-probe | COLLECT | 3m 31s | warn |  |
| 15 | ab-test-detection | COLLECT | 0.1s | pass | Google Optimize detected |
| 16 | framework-detection | COLLECT | 0.1s | pass | 3 framework(s) detected: Next.js (medium), Tailwind CSS (medium), Vercel (low) |
| 17 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 12 page(s) |
| 18 | provenance-gap-deterministic | COLLECT | 0.3s | pass |  |
| 19 | provenance-gap-llm | COLLECT | 2m 13s | pass |  |
| 20 | audience-classify | COLLECT | 6.5s | pass |  |
| 21 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 10m 50s |
| Steps completed | 21 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 4m 26s
2. slowest-page-probe - 3m 31s
3. provenance-gap-llm - 2m 13s

---

## REPORT - 2026-06-09 11:52:11

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.6s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 53s | pass |  |
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
| Total elapsed | 2m 54s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 53s
2. infill-pass1 - 0.6s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-09 11:58:04

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.3s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 2 mis-statement(s) |
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
| 17 | gate-4-llm-judgment | GATES | 1m 51s | warn |  |
| 18 | unified-repair | GATES | 1m 45s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.8s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 77 finding(s) |
| 22 | gate-4d-provenance | GATES | 21.4s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.4s | pass |  |
| 24 | gate-5-pdf | GATES | 18.4s | pass | mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.pdf |

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
| Total elapsed | 5m 38s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-4-llm-judgment - 1m 51s
2. unified-repair - 1m 45s
3. gate-3-fierce-critic - 1m 19s

---

## COLLECT - 2026-06-09 12:14:12

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.3s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.8s | warn | no sitemap found |
| 6 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 7 | crawler | COLLECT | 15.2s | pass |  |
| 8 | url-discovery | COLLECT | 0.8s | pass |  |
| 9 | pdf-topup | COLLECT | 0.1s | pass |  |
| 10 | pdf-sample | COLLECT | 0.1s | pass |  |
| 11 | error-page-test | COLLECT | 0.6s | pass |  |
| 12 | agent-access-test | COLLECT | 23.4s | pass |  |
| 13 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 14 | slowest-page-probe | COLLECT | 0.6s | warn |  |
| 15 | ab-test-detection | COLLECT | 0.1s | pass | Google Optimize detected |
| 16 | framework-detection | COLLECT | 0.1s | pass | 3 framework(s) detected: Next.js (medium), Tailwind CSS (medium), Vercel (low) |
| 17 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 12 page(s) |
| 18 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 19 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 20 | audience-classify | COLLECT | 0.2s | pass |  |
| 21 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 44.5s |
| Steps completed | 21 |
| Steps skipped | 0 |

**Slowest steps:**

1. agent-access-test - 23.4s
2. crawler - 15.2s
3. sitemap-discovery - 1.8s

---

## REPORT - 2026-06-09 12:19:38

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 3m 50s | pass |  |
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
| Total elapsed | 3m 50s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 3m 50s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-09 12:27:03

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | warn | 1 mixed-voice section(s) |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 3 mis-statement(s) |
| 7 | gate-0c | GATES | 0.8s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 2m 20s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 2m 2s | pass |  |
| 18 | unified-repair | GATES | 1m 43s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | warn | 1 finding(s) |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 78 finding(s) |
| 22 | gate-4d-provenance | GATES | 37.6s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 7.4s | pass | mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.pdf |

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
| Total elapsed | 6m 55s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-3-fierce-critic - 2m 20s
2. gate-4-llm-judgment - 2m 2s
3. unified-repair - 1m 43s

---

## COLLECT - 2026-06-09 16:36:26

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.3s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.7s | warn | no sitemap found |
| 6 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 7 | crawler | COLLECT | 15.7s | pass |  |
| 8 | url-discovery | COLLECT | 0.6s | pass |  |
| 9 | pdf-topup | COLLECT | 0.1s | pass |  |
| 10 | pdf-sample | COLLECT | 0.1s | pass |  |
| 11 | error-page-test | COLLECT | 0.5s | pass |  |
| 12 | agent-access-test | COLLECT | 25.8s | pass |  |
| 13 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 14 | slowest-page-probe | COLLECT | 0.4s | warn |  |
| 15 | ab-test-detection | COLLECT | 0.1s | pass | Google Optimize detected |
| 16 | framework-detection | COLLECT | 0.1s | pass | 3 framework(s) detected: Next.js (medium), Tailwind CSS (medium), Vercel (low) |
| 17 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 12 page(s) |
| 18 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 19 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 20 | audience-classify | COLLECT | 0.2s | pass |  |
| 21 | audience-readability-penalty | COLLECT | 0.1s | pass |  |
| 22 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 47.0s |
| Steps completed | 22 |
| Steps skipped | 0 |

**Slowest steps:**

1. agent-access-test - 25.8s
2. crawler - 15.7s
3. sitemap-discovery - 1.7s

---

## REPORT - 2026-06-09 16:40:55

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 4m 7s | pass |  |
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
| Total elapsed | 4m 7s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 4m 7s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-09 16:47:34

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 4 mis-statement(s) |
| 7 | gate-0c | GATES | 0.8s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 25s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 12s | pass |  |
| 18 | unified-repair | GATES | 2m 28s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 82 finding(s) |
| 22 | gate-4d-provenance | GATES | 1m 1s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 7.6s | pass | mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.pdf |

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
| Total elapsed | 6m 17s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. unified-repair - 2m 28s
2. gate-3-fierce-critic - 1m 25s
3. gate-4-llm-judgment - 1m 12s

---

## COLLECT - 2026-06-09 17:12:37

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.3s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.3s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.7s | warn | no sitemap found |
| 6 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 7 | crawler | COLLECT | 16.0s | pass |  |
| 8 | url-discovery | COLLECT | 0.6s | pass |  |
| 9 | pdf-topup | COLLECT | 0.1s | pass |  |
| 10 | pdf-sample | COLLECT | 0.1s | pass |  |
| 11 | error-page-test | COLLECT | 0.4s | pass |  |
| 12 | agent-access-test | COLLECT | 24.5s | pass |  |
| 13 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 14 | slowest-page-probe | COLLECT | 0.4s | warn |  |
| 15 | ab-test-detection | COLLECT | 0.1s | pass | Google Optimize detected |
| 16 | framework-detection | COLLECT | 0.1s | pass | 3 framework(s) detected: Next.js (medium), Tailwind CSS (medium), Vercel (low) |
| 17 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 12 page(s) |
| 18 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 19 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 20 | audience-classify | COLLECT | 0.2s | pass |  |
| 21 | audience-readability-penalty | COLLECT | 0.1s | pass |  |
| 22 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 45.9s |
| Steps completed | 22 |
| Steps skipped | 0 |

**Slowest steps:**

1. agent-access-test - 24.5s
2. crawler - 16.0s
3. sitemap-discovery - 1.7s

---

## REPORT - 2026-06-09 17:16:56

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 4m 18s | pass |  |
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
| Total elapsed | 4m 19s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 4m 18s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-09 17:27:05

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | warn | 1 mixed-voice section(s) |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 6 mis-statement(s) |
| 7 | gate-0c | GATES | 0.8s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 3m 9s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 60s | warn |  |
| 18 | unified-repair | GATES | 3m 23s | warn |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 85 finding(s) |
| 22 | gate-4d-provenance | GATES | 1m 21s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 11.7s | pass | mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.pdf |

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
| Total elapsed | 10m 9s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. unified-repair - 3m 23s
2. gate-3-fierce-critic - 3m 9s
3. gate-4-llm-judgment - 1m 60s
