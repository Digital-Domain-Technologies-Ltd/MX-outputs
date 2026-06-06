---
title: "Stackoptic — Audit Gate Findings"
description: "Findings sidecar for the Stackoptic audit on 2026-06-04. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-04
modified: 2026-06-04
auditDate: "2026-06-04"
companion: "stackoptic-com-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 6
  inherits: ["stackoptic-com-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"465590c62c54","patternKey":"ef93bf825f21","timestamp":"2026-06-04T19:55:06.530Z","severity":"warn","source":"check-report-scope.js","gateName":"sample-vs-total-scope","category":"scope-mis-statements","title":"Scope mis-statements remain after auto-repair: 1","detail":"Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:\n\ncheck-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.md\n  1 scope mis-statement(s).\n\n  [sitewide-inside-sampled-section] line 276\n    section: ## Findings  (line 143)\n    phrase:  \"site-wide\"\n    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c\n\n  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write \"across the audited set\" — write \"the sitemap declares\" or \"this file carries\". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write \"site-wide\" or \"across the entire site\" — write \"across the audited pages\" or \"on the audited set\".\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"a2ad53ed69ac","patternKey":"9cabeb757220","timestamp":"2026-06-04T19:55:08.296Z","severity":"warn","source":"verify-audit-report.js","gateName":"deterministic-verifier","category":"unverified-claims","title":"3 claims could not be verified against source data","detail":"Deterministic verifier scanned numeric, URL, HTML-snippet, positional, and behavioural claims in the report. The entries below did not match the source CSV / JSON / cached HTML and need a reviewer's eye.\n\nline 455: Numeric 361 (361) not found in any results CSV / JSON\nline 459: Numeric 361 (361) not found in any results CSV / JSON\nline 461: Numeric 361 (361) not found in any results CSV / JSON","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"a7f087cdb106","patternKey":"321914741c31","timestamp":"2026-06-04T19:59:33.211Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"placeholder-leak","title":"1 unresolved placeholder token(s) leaked into the final report: 0","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.md — 1 placeholder leaks at lines: 788([0]). Each one indicates an infill handler that did not match its template anchor, or a handler that returned empty for an expected field.","suggestions":["For each token, grep infill-report.js and tableHandlers/ for the replacement code path. Verify the template text matches the regex."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"833beb10eead","patternKey":"6de3a9c49e22","timestamp":"2026-06-04T19:59:33.212Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Canonical URL 86% but consistency_analysis says 100% (6/6)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f9ca211a824","patternKey":"6de3a9c49e22","timestamp":"2026-06-04T19:59:33.212Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Open Graph tags 86% but consistency_analysis says 100% (6/6)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"34cde4ffef18","patternKey":"6de3a9c49e22","timestamp":"2026-06-04T19:59:33.212Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Twitter Card tags 86% but consistency_analysis says 100% (6/6)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 6 findings (4 errors, 2 warnings) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-report-coherence.js | placeholder-leak | 1 unresolved placeholder token(s) leaked into the final report: 0 | 2026-06-04T19:59:33Z |
| 2 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Canonical URL 86% but consistency_analysis says 100% (6/6) | 2026-06-04T19:59:33Z |
| 3 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Open Graph tags 86% but consistency_analysis says 100% (6/6) | 2026-06-04T19:59:33Z |
| 4 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Twitter Card tags 86% but consistency_analysis says 100% (6/6) | 2026-06-04T19:59:33Z |

<details open><summary>Error detail (4)</summary>

**1. check-report-coherence.js - 1 unresolved placeholder token(s) leaked into the final report: 0**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.md — 1 placeholder leaks at lines: 788([0]). Each one indicates an infill handler that did not match its template anchor, or a handler that returned empty for an expected field.

Suggested next steps:

- For each token, grep infill-report.js and tableHandlers/ for the replacement code path. Verify the template text matches the regex.

**2. check-report-coherence.js - Cross-Page Consistency reports Canonical URL 86% but consistency_analysis says 100% (6/6)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**3. check-report-coherence.js - Cross-Page Consistency reports Open Graph tags 86% but consistency_analysis says 100% (6/6)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**4. check-report-coherence.js - Cross-Page Consistency reports Twitter Card tags 86% but consistency_analysis says 100% (6/6)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 1 | 2026-06-04T19:55:06Z |
| 2 | deterministic-verifier | unverified-claims | 3 claims could not be verified against source data | 2026-06-04T19:55:08Z |

<details open><summary>Warning detail (2)</summary>

**1. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 1**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-04/stackoptic.com/stackoptic-com-report.md
  1 scope mis-statement(s).

  [sitewide-inside-sampled-section] line 276
    section: ## Findings  (line 143)
    phrase:  "site-wide"
    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

**2. deterministic-verifier - 3 claims could not be verified against source data**

Deterministic verifier scanned numeric, URL, HTML-snippet, positional, and behavioural claims in the report. The entries below did not match the source CSV / JSON / cached HTML and need a reviewer's eye.

line 455: Numeric 361 (361) not found in any results CSV / JSON
line 459: Numeric 361 (361) not found in any results CSV / JSON
line 461: Numeric 361 (361) not found in any results CSV / JSON

</details>

