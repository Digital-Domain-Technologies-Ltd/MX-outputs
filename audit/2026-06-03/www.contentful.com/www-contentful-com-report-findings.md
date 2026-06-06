---
title: "Www Contentful — Audit Gate Findings"
description: "Findings sidecar for the Www Contentful audit on 2026-06-03. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-03
modified: 2026-06-03
auditDate: "2026-06-03"
companion: "www-contentful-com-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 5
  inherits: ["www-contentful-com-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"592f2d177612","patternKey":"e8d9b74c4520","timestamp":"2026-06-03T14:24:55.089Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"em-dash","title":"Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 9 instances","detail":"Em-dash in prose (use comma, semicolon, parentheses, or two sentences)\n\nline 104: \"—\" - Across the audited set we find a strong foundations that serves our human visitors well. The site’s\nline 173: \"—\" - Across the audited set, we find a strong foundations in SEO—94/100 overall and 97/100 on content pag\nline 173: \"—\" - Across the audited set, we find a strong foundations in SEO—94/100 overall and 97/100 on content pag\nline 510: \"—\" - Addressing truncation—by reducing page size or ensuring full delivery—offers the greatest chance to\nline 510: \"—\" - Addressing truncation—by reducing page size or ensuring full delivery—offers the greatest chance to\n... and 4 more","suggestions":[],"lineRef":"line 104","provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"303c42349a0e","patternKey":"f42b67b81e53","timestamp":"2026-06-03T14:24:55.944Z","severity":"warn","source":"audit-pipeline.js (Gate 0c)","gateName":"html-render-heading-count","category":"pandoc-truncation","title":"HTML render heading count mismatch: markdown=33 rendered=32","detail":"Gate html-render-heading-count returned non-zero with no captured output.","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"833beb10eead","patternKey":"6de3a9c49e22","timestamp":"2026-06-03T14:29:11.314Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Canonical URL 83% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f9ca211a824","patternKey":"6de3a9c49e22","timestamp":"2026-06-03T14:29:11.315Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Open Graph tags 83% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"34cde4ffef18","patternKey":"6de3a9c49e22","timestamp":"2026-06-03T14:29:11.315Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Twitter Card tags 83% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 5 findings (3 errors, 1 warning, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Canonical URL 83% but consistency_analysis says 100% (10/10) | 2026-06-03T14:29:11Z |
| 2 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Open Graph tags 83% but consistency_analysis says 100% (10/10) | 2026-06-03T14:29:11Z |
| 3 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Twitter Card tags 83% but consistency_analysis says 100% (10/10) | 2026-06-03T14:29:11Z |

<details open><summary>Error detail (3)</summary>

**1. check-report-coherence.js - Cross-Page Consistency reports Canonical URL 83% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**2. check-report-coherence.js - Cross-Page Consistency reports Open Graph tags 83% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**3. check-report-coherence.js - Cross-Page Consistency reports Twitter Card tags 83% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | html-render-heading-count | pandoc-truncation | HTML render heading count mismatch: markdown=33 rendered=32 | 2026-06-03T14:24:55Z |

<details open><summary>Warning detail (1)</summary>

**1. html-render-heading-count - HTML render heading count mismatch: markdown=33 rendered=32**

Gate html-render-heading-count returned non-zero with no captured output.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | em-dash | Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 9 instances (line 104) | 2026-06-03T14:24:55Z |

<details open><summary>Info detail (1)</summary>

**1. tone - Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 9 instances**

Em-dash in prose (use comma, semicolon, parentheses, or two sentences)

line 104: "—" - Across the audited set we find a strong foundations that serves our human visitors well. The site’s
line 173: "—" - Across the audited set, we find a strong foundations in SEO—94/100 overall and 97/100 on content pag
line 173: "—" - Across the audited set, we find a strong foundations in SEO—94/100 overall and 97/100 on content pag
line 510: "—" - Addressing truncation—by reducing page size or ensuring full delivery—offers the greatest chance to
line 510: "—" - Addressing truncation—by reducing page size or ensuring full delivery—offers the greatest chance to
... and 4 more

</details>

