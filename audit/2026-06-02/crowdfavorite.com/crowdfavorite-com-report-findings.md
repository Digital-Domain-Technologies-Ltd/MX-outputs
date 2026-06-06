---
title: "Crowdfavorite — Audit Gate Findings"
description: "Findings sidecar for the Crowdfavorite audit on 2026-06-02. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-02
modified: 2026-06-02
auditDate: "2026-06-02"
companion: "crowdfavorite-com-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 6
  inherits: ["crowdfavorite-com-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"592f2d177612","patternKey":"e8d9b74c4520","timestamp":"2026-06-02T21:27:36.262Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"em-dash","title":"Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 4 instances","detail":"Em-dash in prose (use comma, semicolon, parentheses, or two sentences)\n\nline 601: \"—\" - Fixing the truncation risk—by ensuring the full page is delivered—offers the biggest opportunity to\nline 601: \"—\" - Fixing the truncation risk—by ensuring the full page is delivered—offers the biggest opportunity to\nline 722: \"—\" - We note that accessibility legislation worldwide has converged on ISO 14289‑1 (PDF/UA) as the techni\nline 722: \"—\" - We note that accessibility legislation worldwide has converged on ISO 14289‑1 (PDF/UA) as the techni","suggestions":[],"lineRef":"line 601","provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"303c42349a0e","patternKey":"f42b67b81e53","timestamp":"2026-06-02T21:27:37.195Z","severity":"warn","source":"audit-pipeline.js (Gate 0c)","gateName":"html-render-heading-count","category":"pandoc-truncation","title":"HTML render heading count mismatch: markdown=33 rendered=32","detail":"Gate html-render-heading-count returned non-zero with no captured output.","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"833beb10eead","patternKey":"6de3a9c49e22","timestamp":"2026-06-02T21:31:20.307Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Canonical URL 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-02/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f9ca211a824","patternKey":"6de3a9c49e22","timestamp":"2026-06-02T21:31:20.308Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-02/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"34cde4ffef18","patternKey":"6de3a9c49e22","timestamp":"2026-06-02T21:31:20.309Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Twitter Card tags 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-02/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1dbff065251d","patternKey":"cfe95e30679a","timestamp":"2026-06-02T21:31:20.794Z","severity":"warn","source":"check-recommendation-consistency.js","gateName":"check-recommendation-consistency.js","category":"missing-priority","title":"Engagement scope \"No regulatory compliance findings on the audited surface\" does not map to any priority","detail":"The \"What's Next\" / Engagement section names \"No regulatory compliance findings on the audited surface\" as a scope, but it does not match any of the 4 priorities. Either the priority is missing or the engagement scope is invented.","suggestions":["Verify \"No regulatory compliance findings on the audited surface\" corresponds to a numbered priority. If not, add a priority that justifies it or remove it."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 6 findings (3 errors, 2 warnings, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Canonical URL 91% but consistency_analysis says 100% (10/10) | 2026-06-02T21:31:20Z |
| 2 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10) | 2026-06-02T21:31:20Z |
| 3 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Twitter Card tags 91% but consistency_analysis says 100% (10/10) | 2026-06-02T21:31:20Z |

<details open><summary>Error detail (3)</summary>

**1. check-report-coherence.js - Cross-Page Consistency reports Canonical URL 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-02/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**2. check-report-coherence.js - Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-02/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**3. check-report-coherence.js - Cross-Page Consistency reports Twitter Card tags 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-02/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | html-render-heading-count | pandoc-truncation | HTML render heading count mismatch: markdown=33 rendered=32 | 2026-06-02T21:27:37Z |
| 2 | check-recommendation-consistency.js | missing-priority | Engagement scope "No regulatory compliance findings on the audited surface" does not map to any priority | 2026-06-02T21:31:20Z |

<details open><summary>Warning detail (2)</summary>

**1. html-render-heading-count - HTML render heading count mismatch: markdown=33 rendered=32**

Gate html-render-heading-count returned non-zero with no captured output.

**2. check-recommendation-consistency.js - Engagement scope "No regulatory compliance findings on the audited surface" does not map to any priority**

The "What's Next" / Engagement section names "No regulatory compliance findings on the audited surface" as a scope, but it does not match any of the 4 priorities. Either the priority is missing or the engagement scope is invented.

Suggested next steps:

- Verify "No regulatory compliance findings on the audited surface" corresponds to a numbered priority. If not, add a priority that justifies it or remove it.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | em-dash | Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 4 instances (line 601) | 2026-06-02T21:27:36Z |

<details open><summary>Info detail (1)</summary>

**1. tone - Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 4 instances**

Em-dash in prose (use comma, semicolon, parentheses, or two sentences)

line 601: "—" - Fixing the truncation risk—by ensuring the full page is delivered—offers the biggest opportunity to
line 601: "—" - Fixing the truncation risk—by ensuring the full page is delivered—offers the biggest opportunity to
line 722: "—" - We note that accessibility legislation worldwide has converged on ISO 14289‑1 (PDF/UA) as the techni
line 722: "—" - We note that accessibility legislation worldwide has converged on ISO 14289‑1 (PDF/UA) as the techni

</details>

