---
title: "Mx Allabout — Audit Gate Findings"
description: "Findings sidecar for the Mx Allabout audit on 2026-05-27. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-05-27
modified: 2026-05-27
auditDate: "2026-05-27"
companion: "mx-allabout-network-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 2
  inherits: ["mx-allabout-network-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"861d73ad56f4","patternKey":"42dae8443f4d","timestamp":"2026-05-27T19:40:00.210Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"negation-pivot","title":"Negation-pivot pattern (\"not just X, Y\" / \"isn’t about A, it’s about B\"): 1 instance","detail":"Negation-pivot pattern (\"not just X, Y\" / \"isn’t about A, it’s about B\")\n\nline 162: \"not just\" - The Structured Data Quality score of 94/100 and AI Suitability of 95/100 (served) confirm that the s","suggestions":[],"lineRef":"line 162","provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"1dbff065251d","patternKey":"cfe95e30679a","timestamp":"2026-05-27T19:41:31.559Z","severity":"warn","source":"check-recommendation-consistency.js","gateName":"check-recommendation-consistency.js","category":"missing-priority","title":"Engagement scope \"No regulatory compliance findings on the audited surface\" does not map to any priority","detail":"The \"What's Next\" / Engagement section names \"No regulatory compliance findings on the audited surface\" as a scope, but it does not match any of the 3 priorities. Either the priority is missing or the engagement scope is invented.","suggestions":["Verify \"No regulatory compliance findings on the audited surface\" corresponds to a numbered priority. If not, add a priority that justifies it or remove it."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 2 findings (1 warning, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-recommendation-consistency.js | missing-priority | Engagement scope "No regulatory compliance findings on the audited surface" does not map to any priority | 2026-05-27T19:41:31Z |

<details open><summary>Warning detail (1)</summary>

**1. check-recommendation-consistency.js - Engagement scope "No regulatory compliance findings on the audited surface" does not map to any priority**

The "What's Next" / Engagement section names "No regulatory compliance findings on the audited surface" as a scope, but it does not match any of the 3 priorities. Either the priority is missing or the engagement scope is invented.

Suggested next steps:

- Verify "No regulatory compliance findings on the audited surface" corresponds to a numbered priority. If not, add a priority that justifies it or remove it.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | negation-pivot | Negation-pivot pattern ("not just X, Y" / "isn’t about A, it’s about B"): 1 instance (line 162) | 2026-05-27T19:40:00Z |

<details open><summary>Info detail (1)</summary>

**1. tone - Negation-pivot pattern ("not just X, Y" / "isn’t about A, it’s about B"): 1 instance**

Negation-pivot pattern ("not just X, Y" / "isn’t about A, it’s about B")

line 162: "not just" - The Structured Data Quality score of 94/100 and AI Suitability of 95/100 (served) confirm that the s

</details>

