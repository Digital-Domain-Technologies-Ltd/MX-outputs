---
title: "Dkd — Audit Gate Findings"
description: "Findings sidecar for the Dkd audit on 2026-05-27. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-05-27
modified: 2026-05-27
auditDate: "2026-05-27"
companion: "dkd-de-de-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 2
  inherits: ["dkd-de-de-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"1c607578f3f7","patternKey":"a5b8319d5121","timestamp":"2026-05-27T19:57:23.897Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"exaggeration","title":"Exaggeration / hyperbole: 1 instance","detail":"Exaggeration / hyperbole\n\nline 160: \"next-level\" - The headline opportunity is in machine experience. Machines can already discover and parse dkd.de at","suggestions":[],"lineRef":"line 160","provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"465590c62c54","patternKey":"ef93bf825f21","timestamp":"2026-05-27T19:57:24.051Z","severity":"warn","source":"check-report-scope.js","gateName":"sample-vs-total-scope","category":"scope-mis-statements","title":"Scope mis-statements remain after auto-repair: 2","detail":"Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:\n\ncheck-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-27/dkd.de-de/dkd-de-de-report.md\n  2 scope mis-statement(s).\n\n  [sitewide-inside-sampled-section] line 219\n    section: ## Findings  (line 199)\n    phrase:  \"on every page\"\n    line:    **Finding:** Across the audited set, five ID values (accessibility, account, alarm, article, bell) each appear more than\n\n  [sampling-inside-sitewide-section] line 404\n    section: ## Discovery Files  (line 370)\n    phrase:  \"Across the audited set\"\n    line:    Across the audited set, we identified a URL variant cluster where both https://dkd.de/de and https://dkd.de/de/ appear i\n\n  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write \"across the audited set\" — write \"the sitemap declares\" or \"this file carries\". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write \"site-wide\" or \"across the entire site\" — write \"across the audited pages\" or \"on the audited set\".\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 2 findings (1 warning, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 2 | 2026-05-27T19:57:24Z |

<details open><summary>Warning detail (1)</summary>

**1. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 2**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-27/dkd.de-de/dkd-de-de-report.md
  2 scope mis-statement(s).

  [sitewide-inside-sampled-section] line 219
    section: ## Findings  (line 199)
    phrase:  "on every page"
    line:    **Finding:** Across the audited set, five ID values (accessibility, account, alarm, article, bell) each appear more than

  [sampling-inside-sitewide-section] line 404
    section: ## Discovery Files  (line 370)
    phrase:  "Across the audited set"
    line:    Across the audited set, we identified a URL variant cluster where both https://dkd.de/de and https://dkd.de/de/ appear i

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | exaggeration | Exaggeration / hyperbole: 1 instance (line 160) | 2026-05-27T19:57:23Z |

<details open><summary>Info detail (1)</summary>

**1. tone - Exaggeration / hyperbole: 1 instance**

Exaggeration / hyperbole

line 160: "next-level" - The headline opportunity is in machine experience. Machines can already discover and parse dkd.de at

</details>

