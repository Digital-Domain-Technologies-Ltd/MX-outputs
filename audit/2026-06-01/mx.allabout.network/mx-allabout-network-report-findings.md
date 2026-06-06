---
title: "Mx Allabout — Audit Gate Findings"
description: "Findings sidecar for the Mx Allabout audit on 2026-06-01. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-01
modified: 2026-06-01
auditDate: "2026-06-01"
companion: "mx-allabout-network-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 3
  inherits: ["mx-allabout-network-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"27339782a086","patternKey":"7ae7317cf2f3","timestamp":"2026-06-02T07:42:18.696Z","severity":"warn","source":"check-report-voice.js","gateName":"voice-consistency","category":"mixed-voice-sections","title":"Mixed-voice section(s) remain after auto-repair: 1","detail":"Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:\n\ncheck-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-01/mx.allabout.network/mx-allabout-network-report.md\n  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person (\"the site does X\") with first-person (\"we found Y\") inside the same section reads as drafted-by-committee.\n\n  ## About This Report  (line 10)\n    first-person tokens: 10 (lines 12, 14, 16…)\n    third-person markers: 1 (lines 18)\n\n  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice (\"we\"); scorecards and appendices use third-person.\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"53f6be8fdc1f","patternKey":"d25fca51edc1","timestamp":"2026-06-02T07:44:20.307Z","severity":"error","source":"run-with-timeout","gateName":"timeout-fierce-critic","category":"subprocess-timeout","title":"Subprocess timeout (fierce-critic)","detail":"The fierce-critic subprocess exceeded the timeout threshold and was terminated. This is expected behavior — a machine reader would also stop processing here. Elapsed: 120003ms. Kill reason: hard-timeout.","suggestions":["Review the subprocess output for deadlocks or resource exhaustion.","Check if the target URL has changed or is now unreachable.","Consider adjusting the timeout threshold via MX_AUDIT_GATE_TIMEOUT_MS."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"2b113b1f1ed3","patternKey":"fff7118542b0","timestamp":"2026-06-02T07:46:24.921Z","severity":"error","source":"run-with-timeout","gateName":"timeout-llm-judgment","category":"subprocess-timeout","title":"Subprocess timeout (llm-judgment)","detail":"The llm-judgment subprocess exceeded the timeout threshold and was terminated. This is expected behavior — a machine reader would also stop processing here. Elapsed: 120005ms. Kill reason: hard-timeout.","suggestions":["Review the subprocess output for deadlocks or resource exhaustion.","Check if the target URL has changed or is now unreachable.","Consider adjusting the timeout threshold via MX_AUDIT_GATE_TIMEOUT_MS."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 3 findings (2 errors, 1 warning) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | timeout-fierce-critic | subprocess-timeout | Subprocess timeout (fierce-critic) | 2026-06-02T07:44:20Z |
| 2 | timeout-llm-judgment | subprocess-timeout | Subprocess timeout (llm-judgment) | 2026-06-02T07:46:24Z |

<details open><summary>Error detail (2)</summary>

**1. timeout-fierce-critic - Subprocess timeout (fierce-critic)**

The fierce-critic subprocess exceeded the timeout threshold and was terminated. This is expected behavior — a machine reader would also stop processing here. Elapsed: 120003ms. Kill reason: hard-timeout.

Suggested next steps:

- Review the subprocess output for deadlocks or resource exhaustion.
- Check if the target URL has changed or is now unreachable.
- Consider adjusting the timeout threshold via MX_AUDIT_GATE_TIMEOUT_MS.

**2. timeout-llm-judgment - Subprocess timeout (llm-judgment)**

The llm-judgment subprocess exceeded the timeout threshold and was terminated. This is expected behavior — a machine reader would also stop processing here. Elapsed: 120005ms. Kill reason: hard-timeout.

Suggested next steps:

- Review the subprocess output for deadlocks or resource exhaustion.
- Check if the target URL has changed or is now unreachable.
- Consider adjusting the timeout threshold via MX_AUDIT_GATE_TIMEOUT_MS.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | voice-consistency | mixed-voice-sections | Mixed-voice section(s) remain after auto-repair: 1 | 2026-06-02T07:42:18Z |

<details open><summary>Warning detail (1)</summary>

**1. voice-consistency - Mixed-voice section(s) remain after auto-repair: 1**

Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:

check-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-01/mx.allabout.network/mx-allabout-network-report.md
  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person ("the site does X") with first-person ("we found Y") inside the same section reads as drafted-by-committee.

  ## About This Report  (line 10)
    first-person tokens: 10 (lines 12, 14, 16…)
    third-person markers: 1 (lines 18)

  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice ("we"); scorecards and appendices use third-person.

</details>

