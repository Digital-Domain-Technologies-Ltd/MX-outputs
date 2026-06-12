# Audit Pipeline Explainer

URL: https://atmors.netlify.app  Date: 2026-06-12  Run ID: 37e2ug62og

## COLLECT - 2026-06-12 11:28:19

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.3s | pass |  |
| 2 | wellknown-probe | COLLECT | 8.9s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.8s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 3.3s | pass |  |
| 6 | sitemap-discovery | COLLECT | 1.5s | warn | no sitemap found |
| 7 | sitemap-anomaly | COLLECT | 0.5s | pass |  |
| 8 | crawler | COLLECT | 44.9s | pass |  |
| 9 | url-discovery | COLLECT | 1.0s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.5s | pass |  |
| 13 | agent-access-test | COLLECT | 24.0s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.2s | pass |  |
| 15 | slowest-page-probe | COLLECT | 3m 33s | pass |  |
| 16 | ab-test-detection | COLLECT | 0.2s | pass | no A/B test or personalisation vendors detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 1 framework(s) detected: Bootstrap (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 3 page(s) |
| 19 | a11y-tree-check | COLLECT | 0.3s | pass | 0 page(s), 0 cluster(s) (0 template-level), score 100/100 |
| 20 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 21 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 22 | audience-classify | COLLECT | 0.2s | pass |  |
| 23 | readability-penalties | COLLECT | 0.1s | pass |  |
| 24 | generate-preflight | COLLECT | 0.1s | pass |  |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| crawler | 2 | PASS |
| generate-preflight | 1 | PASS |

### URL Deduplication

14 crawled URLs resolved to 2 unique pages (inflation factor 7x).

**Deduplication types applied:**

- Trailing-slash variants: URLs differing only by a trailing slash treated as one page
- Fragment variants: #anchor suffixes stripped before scoring

| Canonical URL | Variants |
|---------------|----------|
| https://atmors.netlify.app | 12 |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 5m 0s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 3m 33s
2. crawler - 44.9s
3. agent-access-test - 24.0s

---

## REPORT - 2026-06-12 11:36:07

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 6m 9s | pass |  |
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
| Total elapsed | 6m 10s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 6m 9s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-12 11:41:12

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 2 mis-statement(s) |
| 7 | gate-0c | GATES | 0.8s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.2s | pass |  |
| 13 | gate-0f | GATES | 0.2s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 28s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 50s | warn |  |
| 18 | unified-repair | GATES | 1m 2s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | pass |  |
| 22 | gate-4d-provenance | GATES | 18.4s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.2s | pass |  |
| 24 | gate-5-pdf | GATES | 8.8s | pass | mx-outputs/audit/2026-06-12/atmors.netlify.app/atmors-netlify-app-report.pdf |

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
| Total elapsed | 4m 51s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-4-llm-judgment - 1m 50s
2. gate-3-fierce-critic - 1m 28s
3. unified-repair - 1m 2s

---

## COLLECT - 2026-06-12 12:31:14

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.4s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.3s | pass |  |
| 3 | sitemap-defects | COLLECT | 1.5s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 1.2s | warn | no sitemap found |
| 7 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 8 | crawler | COLLECT | 16.4s | pass |  |
| 9 | url-discovery | COLLECT | 0.7s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.6s | pass |  |
| 13 | agent-access-test | COLLECT | 0.5s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 0.5s | pass |  |
| 16 | ab-test-detection | COLLECT | 0.1s | pass | no A/B test or personalisation vendors detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 1 framework(s) detected: Bootstrap (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 3 page(s) |
| 19 | a11y-tree-check | COLLECT | 0.6s | pass | 0 page(s), 0 cluster(s) (0 template-level), score 100/100 |
| 20 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 21 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 22 | audience-classify | COLLECT | 0.2s | pass |  |
| 23 | readability-penalties | COLLECT | 0.1s | pass |  |
| 24 | generate-preflight | COLLECT | 0.1s | pass |  |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| crawler | 2 | PASS |
| generate-preflight | 1 | PASS |

### URL Deduplication

14 crawled URLs resolved to 2 unique pages (inflation factor 7x).

**Deduplication types applied:**

- Trailing-slash variants: URLs differing only by a trailing slash treated as one page
- Fragment variants: #anchor suffixes stripped before scoring

| Canonical URL | Variants |
|---------------|----------|
| https://atmors.netlify.app | 12 |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 24.4s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 16.4s
2. sitemap-defects - 1.5s
3. sitemap-discovery - 1.2s

---

## COLLECT - 2026-06-12 12:39:14

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 8.7s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.8s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 3.1s | pass |  |
| 6 | sitemap-discovery | COLLECT | 1.3s | warn | no sitemap found |
| 7 | sitemap-anomaly | COLLECT | 0.3s | pass |  |
| 8 | crawler | COLLECT | 48.9s | pass |  |
| 9 | url-discovery | COLLECT | 1.6s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.4s | pass |  |
| 13 | agent-access-test | COLLECT | 21.9s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 3m 30s | pass |  |
| 16 | ab-test-detection | COLLECT | 0.1s | pass | no A/B test or personalisation vendors detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 1 framework(s) detected: Bootstrap (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 3 page(s) |
| 19 | a11y-tree-check | COLLECT | 0.2s | pass | 0 page(s), 0 cluster(s) (0 template-level), score 100/100 |
| 20 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 21 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 22 | audience-classify | COLLECT | 0.2s | pass |  |
| 23 | readability-penalties | COLLECT | 0.1s | pass |  |
| 24 | generate-preflight | COLLECT | 0.1s | pass |  |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| crawler | 2 | PASS |
| generate-preflight | 1 | PASS |

### URL Deduplication

14 crawled URLs resolved to 2 unique pages (inflation factor 7x).

**Deduplication types applied:**

- Trailing-slash variants: URLs differing only by a trailing slash treated as one page
- Fragment variants: #anchor suffixes stripped before scoring

| Canonical URL | Variants |
|---------------|----------|
| https://atmors.netlify.app | 12 |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 4m 59s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 3m 30s
2. crawler - 48.9s
3. agent-access-test - 21.9s

---

## COLLECT - 2026-06-12 12:41:38

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.4s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.3s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.8s | warn | no sitemap found |
| 7 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 8 | crawler | COLLECT | 3.3s | pass |  |
| 9 | url-discovery | COLLECT | 0.5s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.1s | pass |  |
| 12 | error-page-test | COLLECT | 0.6s | pass |  |
| 13 | agent-access-test | COLLECT | 0.4s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 0.6s | pass |  |
| 16 | ab-test-detection | COLLECT | 0.1s | pass | no A/B test or personalisation vendors detected |
| 17 | framework-detection | COLLECT | 0.1s | pass | 2 framework(s) detected: Bootstrap (low), Netlify (low) |
| 18 | freshness-expiry-detection | COLLECT | 0.1s | pass | no content-declared expires across 3 page(s) |
| 19 | a11y-tree-check | COLLECT | 0.2s | pass | 0 page(s), 0 cluster(s) (0 template-level), score 100/100 |
| 20 | provenance-gap-deterministic | COLLECT | 0.2s | pass |  |
| 21 | provenance-gap-llm | COLLECT | 0.2s | pass |  |
| 22 | audience-classify | COLLECT | 0.2s | pass |  |
| 23 | readability-penalties | COLLECT | 0.1s | pass |  |
| 24 | generate-preflight | COLLECT | 0.1s | pass |  |

### Contract Checks

| After Step | Files Checked | Result |
|------------|---------------|--------|
| crawler | 2 | PASS |
| generate-preflight | 1 | PASS |

### URL Deduplication

12 crawled URLs resolved to 1 unique pages (inflation factor 12x).

**Deduplication types applied:**

- Trailing-slash variants: URLs differing only by a trailing slash treated as one page
- Fragment variants: #anchor suffixes stripped before scoring

| Canonical URL | Variants |
|---------------|----------|
| https://atmors.netlify.app | 11 |

### Testing Methodology

This audit uses three complementary perspectives:

- **Web Audit Suite** - crawl-based checks across pages: MX metadata, accessibility signals, structured data, performance, and linking patterns.
- **DOM Analysis** - rendered-page inspection using a headless browser to capture what users and assistants actually receive.
- **MX Appropriateness** - assessment of whether the site's metadata and content structure meet the MX standard for machine readability and provenance.
- **Gates** - deterministic rule checks that confirm audit integrity and flag any findings that require human review before the report is finalised.

### Timing Summary

| Metric | Value |
|--------|-------|
| Total elapsed | 8.9s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 3.3s
2. sitemap-discovery - 0.8s
3. error-page-test - 0.6s

---

## REPORT - 2026-06-12 12:44:47

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 0.5s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 41s | pass |  |
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
| Total elapsed | 2m 42s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 41s
2. infill-pass1 - 0.5s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-12 12:50:46

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
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
| 16 | gate-3-fierce-critic | GATES | 1m 42s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 34s | pass |  |
| 18 | unified-repair | GATES | 1m 33s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | warn | 1 finding(s) |
| 21 | gate-prose-lint | GATES | 0.1s | pass |  |
| 22 | gate-4d-provenance | GATES | 56.8s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 8.5s | pass | mx-outputs/audit/2026-06-12/atmors.netlify.app/atmors-netlify-app-report.pdf |

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
| Total elapsed | 5m 58s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-3-fierce-critic - 1m 42s
2. gate-4-llm-judgment - 1m 34s
3. unified-repair - 1m 33s

---

## GATES - 2026-06-12 13:12:58

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
| 13 | gate-0f | GATES | 0.2s | pass |  |
| 14 | gate-1 | GATES | 0.2s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 2m 47s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 16s | pass |  |
| 18 | unified-repair | GATES | 41.1s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | warn | 1 finding(s) |
| 21 | gate-prose-lint | GATES | 0.1s | pass |  |
| 22 | gate-cross-check | GATES | 1m 51s | warn |  |
| 23 | gate-4d-provenance | GATES | 59.9s | pass |  |
| 24 | gate-4e-action-findings | GATES | 0.2s | pass |  |
| 25 | gate-5-pdf | GATES | 6.7s | pass | mx-outputs/audit/2026-06-12/atmors.netlify.app/atmors-netlify-app-report.pdf |

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
| Total elapsed | 7m 45s |
| Steps completed | 25 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-3-fierce-critic - 2m 47s
2. gate-cross-check - 1m 51s
3. gate-4-llm-judgment - 1m 16s

---

## GATES - 2026-06-12 13:27:30

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
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 47s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 42s | pass |  |
| 18 | unified-repair | GATES | 42.2s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.7s | warn | 1 finding(s) |
| 21 | gate-prose-lint | GATES | 0.1s | pass |  |
| 22 | gate-cross-check | GATES | 2m 39s | warn | 5 finding(s) |
| 23 | gate-4d-provenance | GATES | 1m 8s | pass |  |
| 24 | gate-4e-action-findings | GATES | 0.2s | pass |  |
| 25 | gate-5-pdf | GATES | 6.8s | pass | mx-outputs/audit/2026-06-12/atmors.netlify.app/atmors-netlify-app-report.pdf |

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
| Total elapsed | 8m 10s |
| Steps completed | 25 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-cross-check - 2m 39s
2. gate-3-fierce-critic - 1m 47s
3. gate-4-llm-judgment - 1m 42s

---

## GATES - 2026-06-12 13:36:40

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | pass |  |
| 7 | gate-0c | GATES | 0.4s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 30s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 47s | pass |  |
| 18 | unified-repair | GATES | 43.2s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.6s | warn | 1 finding(s) |
| 21 | gate-prose-lint | GATES | 0.1s | pass |  |
| 22 | gate-cross-check | GATES | 2m 26s | warn | 8 finding(s) |
| 23 | gate-4d-provenance | GATES | 1m 15s | pass |  |
| 24 | gate-4e-action-findings | GATES | 0.2s | pass |  |
| 25 | gate-5-pdf | GATES | 7.0s | pass | mx-outputs/audit/2026-06-12/atmors.netlify.app/atmors-netlify-app-report.pdf |

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
| Total elapsed | 7m 51s |
| Steps completed | 25 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-cross-check - 2m 26s
2. gate-4-llm-judgment - 1m 47s
3. gate-3-fierce-critic - 1m 30s
