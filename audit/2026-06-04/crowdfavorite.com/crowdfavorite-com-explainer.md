# Audit Pipeline Explainer

URL: https://crowdfavorite.com  Date: 2026-06-04  Run ID: 274ij9q85a

## COLLECT - 2026-06-04 06:01:33

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.3s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.7s | pass | https://crowdfavorite.com/sitemap.xml |
| 6 | crawler | COLLECT | 14.8s | pass |  |
| 7 | url-discovery | COLLECT | 2.4s | pass |  |
| 8 | pdf-topup | COLLECT | 0.1s | pass |  |
| 9 | pdf-sample | COLLECT | 0.3s | pass |  |
| 10 | error-page-test | COLLECT | 1.6s | pass |  |
| 11 | agent-access-test | COLLECT | 0.5s | pass |  |
| 12 | served-rendered-gap | COLLECT | 0.1s | warn |  |
| 13 | slowest-page-probe | COLLECT | 2.1s | warn |  |
| 14 | ab-test-detection | COLLECT | 0.3s | pass |  detected |
| 15 | framework-detection | COLLECT | 0.4s | pass | 7 framework(s) detected: React (medium), Tailwind CSS (medium), Foundation (medium), Gutenberg (WordPress block editor) (high) … |
| 16 | provenance-gap-deterministic | COLLECT | 0.6s | pass |  |
| 17 | provenance-gap-llm | COLLECT | 0.4s | pass |  |
| 18 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 26.2s |
| Steps completed | 18 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 14.8s
2. url-discovery - 2.4s
3. slowest-page-probe - 2.1s

---

## REPORT - 2026-06-04 06:06:51

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 5m 17s | pass |  |
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
| Total elapsed | 5m 18s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 5m 17s
2. infill-pass1 - 0.5s
3. engagement-table-regen - 0.1s

---

## COLLECT - 2026-06-04 06:18:58

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.3s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.3s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.7s | pass | https://crowdfavorite.com/sitemap.xml |
| 6 | crawler | COLLECT | 14.2s | pass |  |
| 7 | url-discovery | COLLECT | 1.7s | pass |  |
| 8 | pdf-topup | COLLECT | 0.1s | pass |  |
| 9 | pdf-sample | COLLECT | 0.2s | pass |  |
| 10 | error-page-test | COLLECT | 1.8s | pass |  |
| 11 | agent-access-test | COLLECT | 0.5s | pass |  |
| 12 | served-rendered-gap | COLLECT | 0.2s | warn |  |
| 13 | slowest-page-probe | COLLECT | 1.1s | warn |  |
| 14 | ab-test-detection | COLLECT | 0.4s | pass |  detected |
| 15 | framework-detection | COLLECT | 0.4s | pass | 7 framework(s) detected: React (medium), Tailwind CSS (medium), Foundation (medium), Gutenberg (WordPress block editor) (high) … |
| 16 | provenance-gap-deterministic | COLLECT | 0.6s | pass |  |
| 17 | provenance-gap-llm | COLLECT | 0.4s | pass |  |
| 18 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 24.1s |
| Steps completed | 18 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 14.2s
2. error-page-test - 1.8s
3. sitemap-discovery - 1.7s

---

## REPORT - 2026-06-04 06:24:18

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.6s | pass |  |
| 3 | rewrite-pass2 | REPORT | 5m 19s | pass |  |
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
| Total elapsed | 5m 20s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 5m 19s
2. infill-pass1 - 0.6s
3. template-voice-check - 0.1s

---

## COLLECT - 2026-06-04 07:22:31

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.7s | pass | https://crowdfavorite.com/sitemap.xml |
| 6 | crawler | COLLECT | 15.2s | pass |  |
| 7 | url-discovery | COLLECT | 1.7s | pass |  |
| 8 | pdf-topup | COLLECT | 0.1s | pass |  |
| 9 | pdf-sample | COLLECT | 0.2s | pass |  |
| 10 | error-page-test | COLLECT | 1.5s | pass |  |
| 11 | agent-access-test | COLLECT | 0.5s | pass |  |
| 12 | served-rendered-gap | COLLECT | 0.1s | warn |  |
| 13 | slowest-page-probe | COLLECT | 0.9s | warn |  |
| 14 | ab-test-detection | COLLECT | 0.3s | pass |  detected |
| 15 | framework-detection | COLLECT | 0.4s | pass | 7 framework(s) detected: React (medium), Tailwind CSS (medium), Foundation (medium), Gutenberg (WordPress block editor) (high) … |
| 16 | provenance-gap-deterministic | COLLECT | 0.6s | pass |  |
| 17 | provenance-gap-llm | COLLECT | 0.4s | pass |  |
| 18 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 24.3s |
| Steps completed | 18 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 15.2s
2. sitemap-discovery - 1.7s
3. url-discovery - 1.7s

---

## REPORT - 2026-06-04 07:25:22

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 50s | pass |  |
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
| Total elapsed | 2m 51s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 50s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-04 07:32:50

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 1 mis-statement(s) |
| 7 | gate-0c | GATES | 0.5s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.3s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 4m 54s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 53.7s | pass |  |
| 18 | unified-repair | GATES | 45.1s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.6s | warn | 1 finding(s) |
| 21 | gate-4d-provenance | GATES | 45.8s | pass |  |
| 22 | gate-5-pdf | GATES | 7.0s | pass | mx-outputs/audit/2026-06-04/crowdfavorite.com/crowdfavorite-com-report.pdf |

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
| Total elapsed | 7m 29s |
| Steps completed | 22 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-3-fierce-critic - 4m 54s
2. gate-4-llm-judgment - 53.7s
3. gate-4d-provenance - 45.8s

---

## COLLECT - 2026-06-04 07:53:14

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.6s | pass | https://crowdfavorite.com/sitemap.xml |
| 6 | crawler | COLLECT | 11.9s | pass |  |
| 7 | url-discovery | COLLECT | 1.7s | pass |  |
| 8 | pdf-topup | COLLECT | 0.1s | pass |  |
| 9 | pdf-sample | COLLECT | 0.1s | pass |  |
| 10 | error-page-test | COLLECT | 1.4s | pass |  |
| 11 | agent-access-test | COLLECT | 0.9s | pass |  |
| 12 | served-rendered-gap | COLLECT | 0.1s | warn |  |
| 13 | slowest-page-probe | COLLECT | 0.9s | warn |  |
| 14 | ab-test-detection | COLLECT | 0.3s | pass |  detected |
| 15 | framework-detection | COLLECT | 0.4s | pass | 7 framework(s) detected: React (medium), Tailwind CSS (medium), Foundation (medium), Gutenberg (WordPress block editor) (high) … |
| 16 | provenance-gap-deterministic | COLLECT | 0.6s | pass |  |
| 17 | provenance-gap-llm | COLLECT | 0.4s | pass |  |
| 18 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 21.2s |
| Steps completed | 18 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 11.9s
2. url-discovery - 1.7s
3. sitemap-discovery - 1.6s

---

## REPORT - 2026-06-04 07:56:04

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 49s | pass |  |
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
| Total elapsed | 2m 49s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 49s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-04 08:03:51

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 1 mis-statement(s) |
| 7 | gate-0c | GATES | 0.4s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.3s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 4m 54s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 53.5s | pass |  |
| 18 | unified-repair | GATES | 45.1s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.6s | warn | 1 finding(s) |
| 21 | gate-4d-provenance | GATES | 1m 6s | pass |  |
| 22 | gate-5-pdf | GATES | 6.0s | pass | mx-outputs/audit/2026-06-04/crowdfavorite.com/crowdfavorite-com-report.pdf |

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
| Total elapsed | 7m 47s |
| Steps completed | 22 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-3-fierce-critic - 4m 54s
2. gate-4d-provenance - 1m 6s
3. gate-4-llm-judgment - 53.5s

---

## COLLECT - 2026-06-04 08:23:03

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.4s | pass |  |
| 3 | clear-results | COLLECT | 0.0s | pass |  |
| 4 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 5 | sitemap-discovery | COLLECT | 1.3s | pass | https://crowdfavorite.com/sitemap.xml |
| 6 | crawler | COLLECT | 12.2s | pass |  |
| 7 | url-discovery | COLLECT | 2.1s | pass |  |
| 8 | pdf-topup | COLLECT | 0.1s | pass |  |
| 9 | pdf-sample | COLLECT | 0.2s | pass |  |
| 10 | error-page-test | COLLECT | 1.6s | pass |  |
| 11 | agent-access-test | COLLECT | 0.5s | pass |  |
| 12 | served-rendered-gap | COLLECT | 0.1s | warn |  |
| 13 | slowest-page-probe | COLLECT | 0.8s | warn |  |
| 14 | ab-test-detection | COLLECT | 0.3s | pass |  detected |
| 15 | framework-detection | COLLECT | 0.4s | pass | 7 framework(s) detected: React (medium), Tailwind CSS (medium), Foundation (medium), Gutenberg (WordPress block editor) (high) … |
| 16 | provenance-gap-deterministic | COLLECT | 0.6s | pass |  |
| 17 | provenance-gap-llm | COLLECT | 0.4s | pass |  |
| 18 | generate-preflight | COLLECT | 0.1s | pass |  |

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
| Total elapsed | 21.5s |
| Steps completed | 18 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 12.2s
2. url-discovery - 2.1s
3. error-page-test - 1.6s

---

## REPORT - 2026-06-04 08:25:56

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.6s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 52s | pass |  |
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
| Total elapsed | 2m 53s |
| Steps completed | 5 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 52s
2. infill-pass1 - 0.6s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-04 08:31:36

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
| 16 | gate-3-fierce-critic | GATES | 1m 53s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 23s | pass |  |
| 18 | unified-repair | GATES | 1m 1s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.6s | warn | 1 finding(s) |
| 21 | gate-4d-provenance | GATES | 1m 13s | pass |  |
| 22 | gate-5-pdf | GATES | 6.0s | pass | mx-outputs/audit/2026-06-04/crowdfavorite.com/crowdfavorite-com-report.pdf |

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
| Total elapsed | 5m 39s |
| Steps completed | 22 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-3-fierce-critic - 1m 53s
2. gate-4-llm-judgment - 1m 23s
3. gate-4d-provenance - 1m 13s

---

## GATES - 2026-06-04 13:02:54

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | pass |  |
| 7 | gate-0c | GATES | 0.5s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | - | skip | no --results dir provided |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.3s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 52s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 21s | pass |  |
| 18 | unified-repair | GATES | 43.8s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | warn | 1 finding(s) |
| 21 | gate-4d-provenance | GATES | 1m 35s | pass |  |
| 22 | gate-5-pdf | GATES | 8.6s | pass | mx-outputs/audit/2026-06-04/crowdfavorite.com/crowdfavorite-com-report.pdf |

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
| Total elapsed | 5m 44s |
| Steps completed | 21 |
| Steps skipped | 1 |

**Slowest steps:**

1. gate-3-fierce-critic - 1m 52s
2. gate-4d-provenance - 1m 35s
3. gate-4-llm-judgment - 1m 21s
