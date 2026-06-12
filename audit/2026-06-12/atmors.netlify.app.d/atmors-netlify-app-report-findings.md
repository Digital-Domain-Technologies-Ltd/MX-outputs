---
title: "Atmors Netlify — Audit Gate Findings"
description: "Findings sidecar for the Atmors Netlify audit on 2026-06-12. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
auditDate: "2026-06-12"
companion: "atmors-netlify-app-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 2
  inherits: ["atmors-netlify-app-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"49636c6e981a","patternKey":"9cabeb757220","timestamp":"2026-06-12T16:21:23.839Z","severity":"warn","source":"verify-audit-report.js","gateName":"deterministic-verifier","category":"unverified-claims","title":"1 claim could not be verified against source data","detail":"Deterministic verifier scanned numeric, URL, HTML-snippet, positional, and behavioural claims in the report. The entries below did not match the source CSV / JSON / cached HTML and need a reviewer's eye.\n\nline 217: Numeric 12 (12) not found in any results CSV / JSON","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T16:27:39.706Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"01934462c40b","patternKey":"245f47636cbe","timestamp":"2026-06-12T16:26:00.788Z","severity":"warn","source":"check-cross-section-consistency.js","gateName":"cross-section-consistency","category":"cross-section-scope-mix","title":"Line 677: scope-mixing prose","detail":"Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa","suggestions":["Re-check the infill sources for each cited section.","If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T16:27:39.706Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 2 findings (2 warnings) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | deterministic-verifier | unverified-claims | 1 claim could not be verified against source data | 2026-06-12T16:21:23Z |
| 2 | cross-section-consistency | cross-section-scope-mix | Line 677: scope-mixing prose | 2026-06-12T16:26:00Z |

<details open><summary>Warning detail (2)</summary>

**1. deterministic-verifier - 1 claim could not be verified against source data**

Deterministic verifier scanned numeric, URL, HTML-snippet, positional, and behavioural claims in the report. The entries below did not match the source CSV / JSON / cached HTML and need a reviewer's eye.

line 217: Numeric 12 (12) not found in any results CSV / JSON

**2. cross-section-consistency - Line 677: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

</details>

