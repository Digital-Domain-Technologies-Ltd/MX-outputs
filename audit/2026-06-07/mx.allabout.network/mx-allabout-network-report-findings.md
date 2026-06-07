---
title: "Mx Allabout — Audit Gate Findings"
description: "Findings sidecar for the Mx Allabout audit on 2026-06-07. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-07
modified: 2026-06-07
auditDate: "2026-06-07"
companion: "mx-allabout-network-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 2
  inherits: ["mx-allabout-network-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"59f0fc04cf41","patternKey":"337934947854","timestamp":"2026-06-07T07:47:50.200Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"bogus-html-placeholder","title":"Bogus HTML-tag placeholders (use {name} not <name>): 1 instance","detail":"Bogus HTML-tag placeholders (use {name} not <name>)\n\nline 641: \"<slug> → {slug}\" - | `/blog/<slug>` | 63 | 0.275 | 0.023 | 4.76 |","suggestions":[],"lineRef":"line 641","provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-07T07:53:46.685Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"465590c62c54","patternKey":"ef93bf825f21","timestamp":"2026-06-07T07:47:50.386Z","severity":"warn","source":"check-report-scope.js","gateName":"sample-vs-total-scope","category":"scope-mis-statements","title":"Scope mis-statements remain after auto-repair: 1","detail":"Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:\n\ncheck-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-07/mx.allabout.network/mx-allabout-network-report.md\n  1 scope mis-statement(s).\n\n  [sitewide-inside-sampled-section] line 242\n    section: ## Findings  (line 157)\n    phrase:  \"site-wide\"\n    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c\n\n  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write \"across the audited set\" — write \"the sitemap declares\" or \"this file carries\". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write \"site-wide\" or \"across the entire site\" — write \"across the audited pages\" or \"on the audited set\".\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-07T07:53:46.685Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 2 findings (1 warning, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 1 | 2026-06-07T07:47:50Z |

<details open><summary>Warning detail (1)</summary>

**1. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 1**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-07/mx.allabout.network/mx-allabout-network-report.md
  1 scope mis-statement(s).

  [sitewide-inside-sampled-section] line 242
    section: ## Findings  (line 157)
    phrase:  "site-wide"
    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | bogus-html-placeholder | Bogus HTML-tag placeholders (use {name} not <name>): 1 instance (line 641) | 2026-06-07T07:47:50Z |

<details open><summary>Info detail (1)</summary>

**1. tone - Bogus HTML-tag placeholders (use {name} not <name>): 1 instance**

Bogus HTML-tag placeholders (use {name} not <name>)

line 641: "<slug> → {slug}" - | `/blog/<slug>` | 63 | 0.275 | 0.023 | 4.76 |

</details>

