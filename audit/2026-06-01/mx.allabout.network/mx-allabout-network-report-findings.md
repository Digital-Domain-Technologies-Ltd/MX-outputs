---
title: "Mx Allabout — Audit Gate Findings"
description: "Reviewer-facing findings sidecar for the Mx Allabout audit on 2026-06-01. Records every gate finding (error, warning, info) raised during the run for human sign-off before delivery."
author: "Tom Cranstoun"
created: 2026-06-01
modified: 2026-06-01
auditDate: "2026-06-01"
companion: "mx-allabout-network-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans]
  x-mx-findingsCount: 2
  runbook: "Human reviewer reads this file before signing off on the client-facing report. Findings here are raised by the automated gates; accept, rebut, or correct each one before delivery."
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 2 findings (1 error, 1 warning) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | timeout-fierce-critic | subprocess-timeout | Subprocess timeout (fierce-critic) | 2026-06-02T07:34:23Z |

<details open><summary>Error detail (1)</summary>

**1. timeout-fierce-critic - Subprocess timeout (fierce-critic)**

The fierce-critic subprocess exceeded the timeout threshold and was terminated. This is expected behavior — a machine reader would also stop processing here. Elapsed: 120004ms. Kill reason: hard-timeout.

Suggested next steps:

- Review the subprocess output for deadlocks or resource exhaustion.
- Check if the target URL has changed or is now unreachable.
- Consider adjusting the timeout threshold via MX_AUDIT_GATE_TIMEOUT_MS.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | voice-consistency | mixed-voice-sections | Mixed-voice section(s) remain after auto-repair: 1 | 2026-06-02T07:32:21Z |

<details open><summary>Warning detail (1)</summary>

**1. voice-consistency - Mixed-voice section(s) remain after auto-repair: 1**

Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:

check-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-01/mx.allabout.network/mx-allabout-network-report.md
  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person ("the site does X") with first-person ("we found Y") inside the same section reads as drafted-by-committee.

  ## About This Report  (line 10)
    first-person tokens: 9 (lines 12, 14, 16…)
    third-person markers: 1 (lines 18)

  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice ("we"); scorecards and appendices use third-person.

</details>

