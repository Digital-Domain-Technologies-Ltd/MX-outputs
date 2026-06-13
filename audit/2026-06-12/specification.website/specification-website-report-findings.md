---
title: "Specification — Audit Gate Findings"
description: "Findings sidecar for the Specification audit on 2026-06-12. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
auditDate: "2026-06-12"
companion: "specification-website-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 1
  inherits: ["specification-website-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"a7c60283fb4c","patternKey":"739c9ae370ff","timestamp":"2026-06-13T01:16:28.344Z","severity":"error","source":"generateImageOptimizationReport (mx-reginald/audit/src/utils/reportUtils/reportGenerators.js)","gateName":"generateImageOptimizationReport (mx-reginald/audit/src/utils/reportUtils/reportGenerators.js)","category":"image_optimization-csv-empty","title":"image_optimization.csv: collector wrote 0 rows despite 12 pages audited","detail":"results.urls has 12 entries but results.contentAnalysis[*].images produced no rows for image_optimization.csv. Pages were processed, but per-page data did not propagate from the per-page handler (pageAnalyzer / metricsUpdater) to the writer. Downstream image optimisation finding, alt-text coverage, lazy-loading audit consumers in infill-report.js see an empty CSV and either render N/A or fall into the empty-array trap that maps zero rows to a \"perfect\" verdict.","suggestions":["Check combined.log for [PERF] lines showing metrics analysis completed for each URL: https://specification.website/","If pageAnalyzer raised exceptions, results.contentAnalysis[*].images may still be empty despite \"Successfully processed\" log lines.","Inspect the writer's map() input shape — a recent rename to results.contentAnalysis[*].images can leave the writer reading from a stale key."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 1 finding (1 error) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | generateImageOptimizationReport (mx-reginald/audit/src/utils/reportUtils/reportGenerators.js) | image_optimization-csv-empty | image_optimization.csv: collector wrote 0 rows despite 12 pages audited | 2026-06-13T01:16:28Z |

<details open><summary>Error detail (1)</summary>

**1. generateImageOptimizationReport (mx-reginald/audit/src/utils/reportUtils/reportGenerators.js) - image_optimization.csv: collector wrote 0 rows despite 12 pages audited**

results.urls has 12 entries but results.contentAnalysis[*].images produced no rows for image_optimization.csv. Pages were processed, but per-page data did not propagate from the per-page handler (pageAnalyzer / metricsUpdater) to the writer. Downstream image optimisation finding, alt-text coverage, lazy-loading audit consumers in infill-report.js see an empty CSV and either render N/A or fall into the empty-array trap that maps zero rows to a "perfect" verdict.

Suggested next steps:

- Check combined.log for [PERF] lines showing metrics analysis completed for each URL: https://specification.website/
- If pageAnalyzer raised exceptions, results.contentAnalysis[*].images may still be empty despite "Successfully processed" log lines.
- Inspect the writer's map() input shape — a recent rename to results.contentAnalysis[*].images can leave the writer reading from a stale key.

</details>

