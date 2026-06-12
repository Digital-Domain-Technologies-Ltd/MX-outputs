# Audit Pipeline Explainer

URL: https://mx.allabout.network  Date: 2026-06-12  Run ID: 32495eovbs

## COLLECT - 2026-06-12 07:21:20

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.2s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.4s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.4s | pass | https://mx.allabout.network/sitemap.xml |
| 7 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 8 | crawler | COLLECT | 4.2s | pass |  |
| 9 | url-discovery | COLLECT | 0.4s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.7s | pass |  |
| 12 | error-page-test | COLLECT | 0.8s | pass |  |
| 13 | agent-access-test | COLLECT | 22.2s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 5m 20s | pass |  |
| 16 | ab-test-detection | COLLECT | 0.8s | pass | Dynamic Yield, Unbounce Smart Traffic detected (layer present, no variance observed this run) |
| 17 | framework-detection | COLLECT | 0.7s | pass | 5 framework(s) detected: React (low), Next.js (low), Bootstrap (medium), Tailwind CSS (low) … |
| 18 | freshness-expiry-detection | COLLECT | 0.2s | pass | 1/153 page(s) declare expires, 0 already past |
| 19 | a11y-tree-check | COLLECT | 1.5s | pass | 144 page(s), 9 cluster(s) (0 template-level), score 46/100 |
| 20 | provenance-gap-deterministic | COLLECT | 1.5s | pass |  |
| 21 | provenance-gap-llm | COLLECT | 1.0s | pass |  |
| 22 | audience-classify | COLLECT | 1.0s | pass |  |
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
| Total elapsed | 5m 56s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. slowest-page-probe - 5m 20s
2. agent-access-test - 22.2s
3. crawler - 4.2s

---

## REPORT - 2026-06-12 07:25:12

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

## GATES - 2026-06-12 07:30:38

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 2 mis-statement(s) |
| 7 | gate-0c | GATES | 0.5s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.2s | pass |  |
| 13 | gate-0f | GATES | 0.2s | pass |  |
| 14 | gate-1 | GATES | 0.3s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 11s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 54s | warn |  |
| 18 | unified-repair | GATES | 1m 8s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.6s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 52 finding(s) |
| 22 | gate-4d-provenance | GATES | 16.2s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.2s | pass |  |
| 24 | gate-5-pdf | GATES | 6.2s | pass | mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.pdf |

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

1. gate-4-llm-judgment - 1m 54s
2. gate-3-fierce-critic - 1m 11s
3. unified-repair - 1m 8s

---

## COLLECT - 2026-06-12 09:37:22

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.3s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.1s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.4s | pass | https://mx.allabout.network/sitemap.xml |
| 7 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 8 | crawler | COLLECT | 8m 33s | pass |  |
| 9 | url-discovery | COLLECT | 0.7s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.6s | pass |  |
| 12 | error-page-test | COLLECT | 0.9s | pass |  |
| 13 | agent-access-test | COLLECT | 21.8s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 5m 20s | pass |  |
| 16 | ab-test-detection | COLLECT | 0.3s | pass | no A/B test or personalisation vendors detected |
| 17 | framework-detection | COLLECT | 0.7s | pass | 5 framework(s) detected: React (low), Next.js (low), Bootstrap (medium), Tailwind CSS (low) … |
| 18 | freshness-expiry-detection | COLLECT | 0.2s | pass | 1/162 page(s) declare expires, 0 already past |
| 19 | a11y-tree-check | COLLECT | 1.4s | pass | 149 page(s), 6 cluster(s) (0 template-level), score 76/100 |
| 20 | provenance-gap-deterministic | COLLECT | 1.5s | pass |  |
| 21 | provenance-gap-llm | COLLECT | 1.0s | pass |  |
| 22 | audience-classify | COLLECT | 1.0s | pass |  |
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
| Total elapsed | 14m 25s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 8m 33s
2. slowest-page-probe - 5m 20s
3. agent-access-test - 21.8s

---

## REPORT - 2026-06-12 09:40:09

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 1.0s | pass |  |
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
2. infill-pass1 - 1.0s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-12 09:46:18

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
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.5s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 53s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 58s | warn |  |
| 18 | unified-repair | GATES | 1m 25s | pass |  |
| 19 | gate-4b | GATES | 0.2s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 69 finding(s) |
| 22 | gate-4d-provenance | GATES | 38.3s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 9.7s | pass | mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.pdf |

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
| Total elapsed | 6m 9s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. gate-4-llm-judgment - 1m 58s
2. gate-3-fierce-critic - 1m 53s
3. unified-repair - 1m 25s

---

## COLLECT - 2026-06-12 10:01:25

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | sweep-caches | COLLECT | 0.2s | pass |  |
| 2 | wellknown-probe | COLLECT | 0.3s | pass |  |
| 3 | sitemap-defects | COLLECT | 0.1s | pass |  |
| 4 | clear-results | COLLECT | 0.0s | pass |  |
| 5 | ai-usage-check | COLLECT | 0.2s | pass |  |
| 6 | sitemap-discovery | COLLECT | 0.6s | pass | https://mx.allabout.network/sitemap.xml |
| 7 | sitemap-anomaly | COLLECT | 0.1s | pass |  |
| 8 | crawler | COLLECT | 7m 25s | pass |  |
| 9 | url-discovery | COLLECT | 0.7s | pass |  |
| 10 | pdf-topup | COLLECT | 0.1s | pass |  |
| 11 | pdf-sample | COLLECT | 0.2s | pass |  |
| 12 | error-page-test | COLLECT | 0.8s | pass |  |
| 13 | agent-access-test | COLLECT | 21.3s | pass |  |
| 14 | served-rendered-gap | COLLECT | 0.1s | pass |  |
| 15 | slowest-page-probe | COLLECT | 5m 25s | pass |  |
| 16 | ab-test-detection | COLLECT | 0.3s | pass | no A/B test or personalisation vendors detected |
| 17 | framework-detection | COLLECT | 0.7s | pass | 5 framework(s) detected: React (low), Next.js (low), Bootstrap (medium), Tailwind CSS (low) … |
| 18 | freshness-expiry-detection | COLLECT | 0.2s | pass | 1/162 page(s) declare expires, 0 already past |
| 19 | a11y-tree-check | COLLECT | 1.6s | pass | 149 page(s), 6 cluster(s) (0 template-level), score 76/100 |
| 20 | provenance-gap-deterministic | COLLECT | 1.5s | pass |  |
| 21 | provenance-gap-llm | COLLECT | 1.0s | pass |  |
| 22 | audience-classify | COLLECT | 1.0s | pass |  |
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
| Total elapsed | 13m 21s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. crawler - 7m 25s
2. slowest-page-probe - 5m 25s
3. agent-access-test - 21.3s

---

## REPORT - 2026-06-12 10:04:08

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 1.0s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 42s | pass |  |
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
| Total elapsed | 2m 43s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 42s
2. infill-pass1 - 1.0s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-12 10:11:36

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
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.5s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 59s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 58s | warn |  |
| 18 | unified-repair | GATES | 2m 24s | warn |  |
| 19 | gate-4b | GATES | 0.2s | pass |  |
| 20 | gate-4c | GATES | 0.7s | pass |  |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 69 finding(s) |
| 22 | gate-4d-provenance | GATES | 56.0s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 7.2s | pass | mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.pdf |

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
| Total elapsed | 7m 28s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. unified-repair - 2m 24s
2. gate-3-fierce-critic - 1m 59s
3. gate-4-llm-judgment - 1m 58s

---

## REPORT - 2026-06-12 12:06:04

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | template-voice-check | REPORT | 0.1s | pass |  |
| 2 | infill-pass1 | REPORT | 1.0s | pass |  |
| 3 | rewrite-pass2 | REPORT | 2m 15s | pass |  |
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
| Total elapsed | 2m 16s |
| Steps completed | 6 |
| Steps skipped | 0 |

**Slowest steps:**

1. rewrite-pass2 - 2m 15s
2. infill-pass1 - 1.0s
3. template-voice-check - 0.1s

---

## GATES - 2026-06-12 12:13:07

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | pass |  |
| 6 | gate-0b-scope | GATES | 0.1s | warn | 2 mis-statement(s) |
| 7 | gate-0c | GATES | 0.5s | pass |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | 0.1s | pass |  |
| 12 | gate-0g | GATES | 0.1s | pass |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.5s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 32s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 53s | warn |  |
| 18 | unified-repair | GATES | 2m 18s | warn |  |
| 19 | gate-4b | GATES | 0.2s | pass |  |
| 20 | gate-4c | GATES | 0.8s | warn | 1 finding(s) |
| 21 | gate-prose-lint | GATES | 0.1s | warn | 72 finding(s) |
| 22 | gate-4d-provenance | GATES | 1m 8s | pass |  |
| 23 | gate-4e-action-findings | GATES | 0.3s | pass |  |
| 24 | gate-5-pdf | GATES | 7.4s | pass | mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.pdf |

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
| Total elapsed | 7m 3s |
| Steps completed | 24 |
| Steps skipped | 0 |

**Slowest steps:**

1. unified-repair - 2m 18s
2. gate-4-llm-judgment - 1m 53s
3. gate-3-fierce-critic - 1m 32s
