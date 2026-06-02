# Audit Pipeline Explainer

Run ID: wij11i31m

## GATES - 2026-06-02 17:33:54

### Steps

| # | Step | Phase | Duration | Outcome | Notes |
|---|------|-------|----------|---------|-------|
| 1 | gate-0-rewrite | GATES | 0.0s | pass |  |
| 2 | gate-0a | GATES | 0.1s | pass |  |
| 3 | gate-0a-versioning | GATES | 0.0s | pass |  |
| 4 | gate-0b | GATES | 0.2s | pass |  |
| 5 | gate-0b-voice | GATES | 0.1s | warn | 1 mixed-voice section(s) |
| 6 | gate-0b-scope | GATES | 0.1s | pass |  |
| 7 | gate-0c | GATES | 0.7s | warn |  |
| 8 | gate-0d | GATES | 0.1s | pass |  |
| 9 | gate-0d-pages | GATES | 0.1s | pass |  |
| 10 | gate-0e | GATES | 0.1s | pass |  |
| 11 | gate-0p | GATES | - | skip | no --results dir provided |
| 12 | gate-0g | GATES | 0.1s | warn |  |
| 13 | gate-0f | GATES | 0.1s | pass |  |
| 14 | gate-1 | GATES | 0.1s | pass |  |
| 15 | gate-2 | GATES | 0.2s | pass |  |
| 16 | gate-3-fierce-critic | GATES | 1m 54s | pass |  |
| 17 | gate-4-llm-judgment | GATES | 1m 11s | pass |  |
| 18 | unified-repair | GATES | 52.6s | pass |  |
| 19 | gate-4b | GATES | 0.1s | pass |  |
| 20 | gate-4c | GATES | 0.6s | pass |  |
| 21 | gate-4d-provenance | GATES | 13.5s | pass |  |
| 22 | gate-5-pdf | GATES | 6.6s | pass | mx-outputs/audit/2026-06-02/specification.website/spec-website-report.pdf |

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
| Total elapsed | 4m 21s |
| Steps completed | 21 |
| Steps skipped | 1 |

**Slowest steps:**

1. gate-3-fierce-critic - 1m 54s
2. gate-4-llm-judgment - 1m 11s
3. unified-repair - 52.6s
