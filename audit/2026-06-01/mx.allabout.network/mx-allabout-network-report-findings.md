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
  x-mx-findingsCount: 5
  runbook: "Human reviewer reads this file before signing off on the client-facing report. Findings here are raised by the automated gates; accept, rebut, or correct each one before delivery."
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 5 findings (2 errors, 2 warnings, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | timeout-fierce-critic | subprocess-timeout | Subprocess timeout (fierce-critic) | 2026-06-01T20:10:38Z |
| 2 | timeout-llm-judgment | subprocess-timeout | Subprocess timeout (llm-judgment) | 2026-06-01T20:12:43Z |

<details open><summary>Error detail (2)</summary>

**1. timeout-fierce-critic - Subprocess timeout (fierce-critic)**

The fierce-critic subprocess exceeded the timeout threshold and was terminated. This is expected behavior — a machine reader would also stop processing here. Elapsed: 30002ms. Kill reason: hard-timeout.

Suggested next steps:

- Review the subprocess output for deadlocks or resource exhaustion.
- Check if the target URL has changed or is now unreachable.
- Consider adjusting the timeout threshold via MX_AUDIT_GATE_TIMEOUT_MS.

**2. timeout-llm-judgment - Subprocess timeout (llm-judgment)**

The llm-judgment subprocess exceeded the timeout threshold and was terminated. This is expected behavior — a machine reader would also stop processing here. Elapsed: 30002ms. Kill reason: hard-timeout.

Suggested next steps:

- Review the subprocess output for deadlocks or resource exhaustion.
- Check if the target URL has changed or is now unreachable.
- Consider adjusting the timeout threshold via MX_AUDIT_GATE_TIMEOUT_MS.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | voice-consistency | mixed-voice-sections | Mixed-voice section(s) remain after auto-repair: 1 | 2026-06-01T20:10:06Z |
| 2 | cross-section-consistency | cross-section-scope-mix | Line 306: scope-mixing prose | 2026-06-01T20:14:58Z |

<details open><summary>Warning detail (2)</summary>

**1. voice-consistency - Mixed-voice section(s) remain after auto-repair: 1**

Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:

check-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-01/mx.allabout.network/mx-allabout-network-report.md
  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person ("the site does X") with first-person ("we found Y") inside the same section reads as drafted-by-committee.

  ## About This Report  (line 10)
    first-person tokens: 8 (lines 12, 14, 16…)
    third-person markers: 1 (lines 18)

  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice ("we"); scorecards and appendices use third-person.

**2. cross-section-consistency - Line 306: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: We found no llms‑full.txt; the file is missing, not referenced in the sitemap or homepage, and returned a 404 status. If the audited sample hosts a substantial amount of content beyond the pages we audited, we recommend adding llms‑full.txt

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | exaggeration | Exaggeration / hyperbole: 1 instance (line 169) | 2026-06-01T20:10:06Z |

<details open><summary>Info detail (1)</summary>

**1. tone - Exaggeration / hyperbole: 1 instance**

Exaggeration / hyperbole

line 169: "flawless" - Across the 128 pages we audited, we see a strong foundations: SEO scores of 91/100, flawless accessi

</details>

