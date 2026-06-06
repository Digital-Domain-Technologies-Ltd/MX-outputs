---
title: "Www Dkd — Audit Gate Findings"
description: "Findings sidecar for the Www Dkd audit on 2026-05-28. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-05-28
modified: 2026-05-28
auditDate: "2026-05-28"
companion: "www-dkd-de-de-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 3
  inherits: ["www-dkd-de-de-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"1c607578f3f7","patternKey":"a5b8319d5121","timestamp":"2026-05-28T12:35:26.028Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"exaggeration","title":"Exaggeration / hyperbole: 1 instance","detail":"Exaggeration / hyperbole\n\nline 101: \"next-level\" - Accessibility is a Priority 1 compliance item we want to name directly. Across the audited set we re","suggestions":[],"lineRef":"line 101","provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"465590c62c54","patternKey":"ef93bf825f21","timestamp":"2026-05-28T12:35:26.186Z","severity":"warn","source":"check-report-scope.js","gateName":"sample-vs-total-scope","category":"scope-mis-statements","title":"Scope mis-statements remain after auto-repair: 1","detail":"Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:\n\ncheck-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-28/www.dkd.de-de/www-dkd-de-de-report.md\n  1 scope mis-statement(s).\n\n  [sampling-inside-sitewide-section] line 319\n    section: ## Discovery Files  (line 285)\n    phrase:  \"across the audited set\"\n    line:    We identified a URL variant cluster across the audited set where the sitemap includes both https://www.dkd.de/de and htt\n\n  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write \"across the audited set\" — write \"the sitemap declares\" or \"this file carries\". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write \"site-wide\" or \"across the entire site\" — write \"across the audited pages\" or \"on the audited set\".\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"01934462c40b","patternKey":"245f47636cbe","timestamp":"2026-05-29T13:00:00.120Z","severity":"warn","source":"check-cross-section-consistency.js","gateName":"cross-section-consistency","category":"cross-section-scope-mix","title":"Line 378: scope-mixing prose","detail":"Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: We found no llms-full.txt at www.dkd.de; the endpoint returns a 404 and no reference to it appears in the sitemap or the homepage head. Whether adding one would meaningfully extend machine-readable coverage depends on the full depth of the ","suggestions":["Re-check the infill sources for each cited section.","If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 3 findings (2 warnings, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 1 | 2026-05-28T12:35:26Z |
| 2 | cross-section-consistency | cross-section-scope-mix | Line 378: scope-mixing prose | 2026-05-29T13:00:00Z |

<details open><summary>Warning detail (2)</summary>

**1. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 1**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-28/www.dkd.de-de/www-dkd-de-de-report.md
  1 scope mis-statement(s).

  [sampling-inside-sitewide-section] line 319
    section: ## Discovery Files  (line 285)
    phrase:  "across the audited set"
    line:    We identified a URL variant cluster across the audited set where the sitemap includes both https://www.dkd.de/de and htt

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

**2. cross-section-consistency - Line 378: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: We found no llms-full.txt at www.dkd.de; the endpoint returns a 404 and no reference to it appears in the sitemap or the homepage head. Whether adding one would meaningfully extend machine-readable coverage depends on the full depth of the

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | exaggeration | Exaggeration / hyperbole: 1 instance (line 101) | 2026-05-28T12:35:26Z |

<details open><summary>Info detail (1)</summary>

**1. tone - Exaggeration / hyperbole: 1 instance**

Exaggeration / hyperbole

line 101: "next-level" - Accessibility is a Priority 1 compliance item we want to name directly. Across the audited set we re

</details>

