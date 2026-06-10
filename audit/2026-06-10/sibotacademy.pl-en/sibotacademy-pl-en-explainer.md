# Audit Pipeline Explainer

Run ID: 1gtr0tx1kt

## REPORT - 2026-06-10 10:24:49

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 3m 11s | pass |  |
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
| Total elapsed | 3m 12s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 3m 11s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-10 10:32:41

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | warn | 1 mixed-voice section(s) |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 6 mis-statement(s) |
| 7 | gate-0c | GATES | 0.9s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | - | skip | no --results dir provided |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 2m 5s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 55s | warn |  |
| 18 | unified-repair | GATES | 3m 23s | warn |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 86 finding(s) |
| 22 | gate-4d-provenance | GATES | 17.5s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 7.6s | pass | mx-outputs/audit/2026-06-10/sibotacademy.pl-en/sibotacademy-pl-en-report.pdf |

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
| Total elapsed | 7m 52s |
| Steps completed | 23 |
| Steps skipped | 1 |

**Slowest steps:**

1. unified-repair - 3m 23s
2. gate-3-fierce-critic - 2m 5s
3. gate-4-llm-judgment - 1m 55s

---

## COLLECT - 2026-06-10 12:34:23

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | sitemap-defects | COLLECT | 1.3s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.7s | warn | no sitemap found |
| 7 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 8 | crawler | COLLECT | 15.4s | pass |  |
| 9 | url-discovery | COLLECT | 0.6s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.4s | pass |  |
| 13 | agent-access-test | COLLECT | 23.1s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 0.4s | warn |  |
| 16 | ab-test-detection | COLLECT | 0.1s | pass | Google Optimize detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 3 framework(s) detected: Next.js (medium), Tailwind CSS (medium), Vercel (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 12 page(s) |
| 19 | provenance-gap-deterministic | COLLECT | 0.4s | pass |  |
| 20 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 21 | audience-classify | COLLECT | 0.2s | pass |  |
| 22 | readability-penalties | COLLECT | 0.1s | pass |  |
| 23 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 44.4s |
| Steps completed | 23 |
| Steps skipped | 0 |

**Slowest steps:**

1. agent-access-test - 23.1s
2. crawler - 15.4s
3. sitemap-defects - 1.3s

---

## REPORT - 2026-06-10 12:37:07

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 43s | pass |  |
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
| Total elapsed | 2m 44s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 43s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## COLLECT - 2026-06-10 12:51:53

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.4s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.8s | warn | no sitemap found |
| 7 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 8 | crawler | COLLECT | 17.2s | pass |  |
| 9 | url-discovery | COLLECT | 1.0s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.4s | pass |  |
| 13 | agent-access-test | COLLECT | 22.2s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 0.4s | warn |  |
| 16 | ab-test-detection | COLLECT | 0.1s | pass | Google Optimize detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 3 framework(s) detected: Next.js (medium), Tailwind CSS (medium), Vercel (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 12 page(s) |
| 19 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 20 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 21 | audience-classify | COLLECT | 0.2s | pass |  |
| 22 | readability-penalties | COLLECT | 0.1s | pass |  |
| 23 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 44.4s |
| Steps completed | 23 |
| Steps skipped | 0 |

**Slowest steps:**

1. agent-access-test - 22.2s
2. crawler - 17.2s
3. url-discovery - 1.0s

---

## COLLECT - 2026-06-10 12:54:02

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.5s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.4s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.8s | warn | no sitemap found |
| 7 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 8 | crawler | COLLECT | 14.6s | pass |  |
| 9 | url-discovery | COLLECT | 0.5s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.5s | pass |  |
| 13 | agent-access-test | COLLECT | 24.3s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 0.4s | warn |  |
| 16 | ab-test-detection | COLLECT | 0.1s | pass | Google Optimize detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 3 framework(s) detected: Next.js (medium), Tailwind CSS (medium), Vercel (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 12 page(s) |
| 19 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 20 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 21 | audience-classify | COLLECT | 0.2s | pass |  |
| 22 | readability-penalties | COLLECT | 0.1s | pass |  |
| 23 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 43.7s |
| Steps completed | 23 |
| Steps skipped | 0 |

**Slowest steps:**

1. agent-access-test - 24.3s
2. crawler - 14.6s
3. sitemap-discovery - 0.8s

---

## COLLECT - 2026-06-10 12:57:15

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.4s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.8s | warn | no sitemap found |
| 7 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 8 | crawler | COLLECT | 14.9s | pass |  |
| 9 | url-discovery | COLLECT | 0.8s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.4s | pass |  |
| 13 | agent-access-test | COLLECT | 23.2s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 0.4s | warn |  |
| 16 | ab-test-detection | COLLECT | 0.1s | pass | Google Optimize detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 3 framework(s) detected: Next.js (medium), Tailwind CSS (medium), Vercel (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 12 page(s) |
| 19 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 20 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 21 | audience-classify | COLLECT | 0.2s | pass |  |
| 22 | readability-penalties | COLLECT | 0.1s | pass |  |
| 23 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 42.8s |
| Steps completed | 23 |
| Steps skipped | 0 |

**Slowest steps:**

1. agent-access-test - 23.2s
2. crawler - 14.9s
3. sitemap-discovery - 0.8s

---

## COLLECT - 2026-06-10 16:07:31

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | sitemap-defects | COLLECT | 1.1s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.8s | warn | no sitemap found |
| 7 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 8 | crawler | COLLECT | 15.8s | pass |  |
| 9 | url-discovery | COLLECT | 0.5s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.4s | pass |  |
| 13 | agent-access-test | COLLECT | 26.3s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 0.4s | warn |  |
| 16 | ab-test-detection | COLLECT | 0.1s | pass | Google Optimize detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 3 framework(s) detected: Next.js (medium), Tailwind CSS (medium), Vercel (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 12 page(s) |
| 19 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 20 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 21 | audience-classify | COLLECT | 0.2s | pass |  |
| 22 | readability-penalties | COLLECT | 0.1s | pass |  |
| 23 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 47.5s |
| Steps completed | 23 |
| Steps skipped | 0 |

**Slowest steps:**

1. agent-access-test - 26.3s
2. crawler - 15.8s
3. sitemap-defects - 1.1s

---

## REPORT - 2026-06-10 16:10:18

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 46s | pass |  |
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
| Total elapsed | 2m 47s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 46s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-10 16:19:17

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | warn | 1 mixed-voice section(s) |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 6 mis-statement(s) |
| 7 | gate-0c | GATES | 0.9s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | - | skip | no --results dir provided |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 2m 13s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 3m 54s | pass |  |
| 18 | unified-repair | GATES | 1m 22s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 85 finding(s) |
| 22 | gate-4d-provenance | GATES | 1m 16s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 8.8s | pass | mx-outputs/audit/2026-06-10/sibotacademy.pl-en/sibotacademy-pl-en-report.pdf |

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
| Total elapsed | 8m 58s |
| Steps completed | 23 |
| Steps skipped | 1 |

**Slowest steps:**

1. gate-4-llm-judgment - 3m 54s
2. gate-3-fierce-critic - 2m 13s
3. unified-repair - 1m 22s

---

## COLLECT - 2026-06-10 16:24:15

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.3s | pass |  |
| 3 | sitemap-defects | COLLECT | 1.1s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.7s | warn | no sitemap found |
| 7 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 8 | crawler | COLLECT | 16.8s | pass |  |
| 9 | url-discovery | COLLECT | 0.6s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.4s | pass |  |
| 13 | agent-access-test | COLLECT | 23.7s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 0.4s | warn |  |
| 16 | ab-test-detection | COLLECT | 0.1s | pass | Google Optimize detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 3 framework(s) detected: Next.js (medium), Tailwind CSS (medium), Vercel (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 12 page(s) |
| 19 | provenance-gap-deterministic | COLLECT | 0.3s | pass |  |
| 20 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 21 | audience-classify | COLLECT | 0.2s | pass |  |
| 22 | readability-penalties | COLLECT | 0.1s | pass |  |
| 23 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 46.0s |
| Steps completed | 23 |
| Steps skipped | 0 |

**Slowest steps:**

1. agent-access-test - 23.7s
2. crawler - 16.8s
3. sitemap-defects - 1.1s

---

## REPORT - 2026-06-10 16:27:01

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 45s | pass |  |
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
| Total elapsed | 2m 46s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 45s
2. infill-pass1 - 0.5s
3. engagement-table-regen - 0.1s

---

## GATES - 2026-06-10 16:35:17

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | warn | 1 mixed-voice section(s) |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 6 mis-statement(s) |
| 7 | gate-0c | GATES | 1.1s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | - | skip | no --results dir provided |
| 12 | gate-0g | GATES | 0.2s | pass |  |
| 13 | gate-0f | GATES | 0.2s | pass |  |
| 14 | gate-1 | GATES | 0.2s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 43s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 44s | pass |  |
| 18 | unified-repair | GATES | 2m 58s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.2s | warn | 85 finding(s) |
| 22 | gate-4d-provenance | GATES | 1m 39s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 7.5s | pass | mx-outputs/audit/2026-06-10/sibotacademy.pl-en/sibotacademy-pl-en-report.pdf |

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
| Total elapsed | 8m 16s |
| Steps completed | 23 |
| Steps skipped | 1 |

**Slowest steps:**

1. unified-repair - 2m 58s
2. gate-4-llm-judgment - 1m 44s
3. gate-3-fierce-critic - 1m 43s
