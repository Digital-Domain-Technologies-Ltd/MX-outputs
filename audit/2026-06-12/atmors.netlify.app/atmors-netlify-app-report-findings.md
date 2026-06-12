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
  x-mx-findingsCount: 10
  inherits: ["atmors-netlify-app-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"49636c6e981a","patternKey":"9cabeb757220","timestamp":"2026-06-12T13:28:51.490Z","severity":"warn","source":"verify-audit-report.js","gateName":"deterministic-verifier","category":"unverified-claims","title":"1 claim could not be verified against source data","detail":"Deterministic verifier scanned numeric, URL, HTML-snippet, positional, and behavioural claims in the report. The entries below did not match the source CSV / JSON / cached HTML and need a reviewer's eye.\n\nline 217: Numeric 12 (12) not found in any results CSV / JSON","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T13:36:33.551Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"01934462c40b","patternKey":"245f47636cbe","timestamp":"2026-06-12T13:32:52.491Z","severity":"warn","source":"check-cross-section-consistency.js","gateName":"cross-section-consistency","category":"cross-section-scope-mix","title":"Line 677: scope-mixing prose","detail":"Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa","suggestions":["Re-check the infill sources for each cited section.","If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T13:36:33.551Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"80062d9db0c2","patternKey":"14d211179966","timestamp":"2026-06-12T13:35:18.016Z","severity":"info","source":"cross-check-claims.js","gateName":"cross-check-claims.js","category":"cross-check-unverifiable","title":"unverifiable: Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2","detail":"Claim: Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2\n\nEvidence: No evidence file contains interactive element analysis (Pa11y results not provided).","suggestions":["Include Pa11y accessibility findings or remove this claim."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T13:36:33.551Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"d276b43c62a7","patternKey":"14d211179966","timestamp":"2026-06-12T13:35:18.016Z","severity":"info","source":"cross-check-claims.js","gateName":"cross-check-claims.js","category":"cross-check-unverifiable","title":"unverifiable: Insufficient Colour Contrast, WCAG 1.4.3","detail":"Claim: Insufficient Colour Contrast, WCAG 1.4.3\n\nEvidence: No contrast analysis present in the evidence bundle.","suggestions":["Add color-contrast audit data or delete the claim."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T13:36:33.551Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"c70796609133","patternKey":"14d211179966","timestamp":"2026-06-12T13:35:18.017Z","severity":"info","source":"cross-check-claims.js","gateName":"cross-check-claims.js","category":"cross-check-unverifiable","title":"unverifiable: Info and Relationships Not Programmatically Determined, WCAG 1.3.1","detail":"Claim: Info and Relationships Not Programmatically Determined, WCAG 1.3.1\n\nEvidence: Missing accessibility relationship data; not found in any evidence file.","suggestions":["Provide relationship mapping evidence or omit the statement."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T13:36:33.551Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"d7ec9e6e2086","patternKey":"14d211179966","timestamp":"2026-06-12T13:35:18.017Z","severity":"info","source":"cross-check-claims.js","gateName":"cross-check-claims.js","category":"cross-check-unverifiable","title":"unverifiable: Accessibility Issue, WCAG 3.2.2","detail":"Claim: Accessibility Issue, WCAG 3.2.2\n\nEvidence: No specific Pa11y issue report included to support this claim.","suggestions":["Add relevant Pa11y findings or remove the claim."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T13:36:33.551Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"da4378510be4","patternKey":"14d211179966","timestamp":"2026-06-12T13:35:18.017Z","severity":"info","source":"cross-check-claims.js","gateName":"cross-check-claims.js","category":"cross-check-unverifiable","title":"unverifiable: Heading Hierarchy Skips Levels","detail":"Claim: Heading Hierarchy Skips Levels\n\nEvidence: No heading hierarchy audit data in evidence bundle.","suggestions":["Include heading structure analysis or delete the claim."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T13:36:33.551Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"9eecb53183a9","patternKey":"14d211179966","timestamp":"2026-06-12T13:35:18.017Z","severity":"info","source":"cross-check-claims.js","gateName":"cross-check-claims.js","category":"cross-check-unverifiable","title":"unverifiable: Main Landmark Absent","detail":"Claim: Main Landmark Absent\n\nEvidence: Marker reachability and other evidence do not report <main> presence; no explicit evidence of absence.","suggestions":["Add markup inspection evidence or remove the claim."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T13:36:33.551Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"11b8193baf79","patternKey":"14d211179966","timestamp":"2026-06-12T13:35:18.018Z","severity":"info","source":"cross-check-claims.js","gateName":"cross-check-claims.js","category":"cross-check-unverifiable","title":"unverifiable: The site delivers a strong human experience","detail":"Claim: The site delivers a strong human experience\n\nEvidence: No objective metric or user‑experience data provided to substantiate this assertion.","suggestions":["Replace with measurable performance or usability metrics, or remove subjective statement."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T13:36:33.551Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"4ad97a917973","patternKey":"14d211179966","timestamp":"2026-06-12T13:35:18.018Z","severity":"info","source":"cross-check-claims.js","gateName":"cross-check-claims.js","category":"cross-check-unverifiable","title":"unverifiable: Performance score 70/100","detail":"Claim: Performance score 70/100\n\nEvidence: Audit bundle provides average load time but no mapping to the 70/100 score; scoring methodology not documented.","suggestions":["Provide explicit performance scoring method or adjust score to align with measured data."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T13:36:33.551Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 10 findings (2 warnings, 8 infos) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | deterministic-verifier | unverified-claims | 1 claim could not be verified against source data | 2026-06-12T13:28:51Z |
| 2 | cross-section-consistency | cross-section-scope-mix | Line 677: scope-mixing prose | 2026-06-12T13:32:52Z |

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

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | cross-check-claims.js | cross-check-unverifiable | unverifiable: Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2 | 2026-06-12T13:35:18Z |
| 2 | cross-check-claims.js | cross-check-unverifiable | unverifiable: Insufficient Colour Contrast, WCAG 1.4.3 | 2026-06-12T13:35:18Z |
| 3 | cross-check-claims.js | cross-check-unverifiable | unverifiable: Info and Relationships Not Programmatically Determined, WCAG 1.3.1 | 2026-06-12T13:35:18Z |
| 4 | cross-check-claims.js | cross-check-unverifiable | unverifiable: Accessibility Issue, WCAG 3.2.2 | 2026-06-12T13:35:18Z |
| 5 | cross-check-claims.js | cross-check-unverifiable | unverifiable: Heading Hierarchy Skips Levels | 2026-06-12T13:35:18Z |
| 6 | cross-check-claims.js | cross-check-unverifiable | unverifiable: Main Landmark Absent | 2026-06-12T13:35:18Z |
| 7 | cross-check-claims.js | cross-check-unverifiable | unverifiable: The site delivers a strong human experience | 2026-06-12T13:35:18Z |
| 8 | cross-check-claims.js | cross-check-unverifiable | unverifiable: Performance score 70/100 | 2026-06-12T13:35:18Z |

<details open><summary>Info detail (8)</summary>

**1. cross-check-claims.js - unverifiable: Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2**

Claim: Interactive Elements Missing Name, Role, or Value, WCAG 4.1.2

Evidence: No evidence file contains interactive element analysis (Pa11y results not provided).

Suggested next steps:

- Include Pa11y accessibility findings or remove this claim.

**2. cross-check-claims.js - unverifiable: Insufficient Colour Contrast, WCAG 1.4.3**

Claim: Insufficient Colour Contrast, WCAG 1.4.3

Evidence: No contrast analysis present in the evidence bundle.

Suggested next steps:

- Add color-contrast audit data or delete the claim.

**3. cross-check-claims.js - unverifiable: Info and Relationships Not Programmatically Determined, WCAG 1.3.1**

Claim: Info and Relationships Not Programmatically Determined, WCAG 1.3.1

Evidence: Missing accessibility relationship data; not found in any evidence file.

Suggested next steps:

- Provide relationship mapping evidence or omit the statement.

**4. cross-check-claims.js - unverifiable: Accessibility Issue, WCAG 3.2.2**

Claim: Accessibility Issue, WCAG 3.2.2

Evidence: No specific Pa11y issue report included to support this claim.

Suggested next steps:

- Add relevant Pa11y findings or remove the claim.

**5. cross-check-claims.js - unverifiable: Heading Hierarchy Skips Levels**

Claim: Heading Hierarchy Skips Levels

Evidence: No heading hierarchy audit data in evidence bundle.

Suggested next steps:

- Include heading structure analysis or delete the claim.

**6. cross-check-claims.js - unverifiable: Main Landmark Absent**

Claim: Main Landmark Absent

Evidence: Marker reachability and other evidence do not report <main> presence; no explicit evidence of absence.

Suggested next steps:

- Add markup inspection evidence or remove the claim.

**7. cross-check-claims.js - unverifiable: The site delivers a strong human experience**

Claim: The site delivers a strong human experience

Evidence: No objective metric or user‑experience data provided to substantiate this assertion.

Suggested next steps:

- Replace with measurable performance or usability metrics, or remove subjective statement.

**8. cross-check-claims.js - unverifiable: Performance score 70/100**

Claim: Performance score 70/100

Evidence: Audit bundle provides average load time but no mapping to the 70/100 score; scoring methodology not documented.

Suggested next steps:

- Provide explicit performance scoring method or adjust score to align with measured data.

</details>

