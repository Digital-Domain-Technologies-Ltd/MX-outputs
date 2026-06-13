---
title: "Enhancely — Audit Gate Findings"
description: "Findings sidecar for the Enhancely audit on 2026-06-12. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
auditDate: "2026-06-12"
companion: "enhancely-ai-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 2
  inherits: ["enhancely-ai-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"465590c62c54","patternKey":"ef93bf825f21","timestamp":"2026-06-13T08:41:47.323Z","severity":"warn","source":"check-report-scope.js","gateName":"sample-vs-total-scope","category":"scope-mis-statements","title":"Scope mis-statements remain after auto-repair: 2","detail":"Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:\n\ncheck-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/enhancely.ai/enhancely-ai-report.md\n  2 scope mis-statement(s).\n\n  [sitewide-inside-sampled-section] line 252\n    section: ## Findings  (line 182)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Security headers absent: HSTS, CSP (Site-wide). Missing security headers increase exposure to content injec\n\n  [sitewide-inside-sampled-section] line 256\n    section: ## Findings  (line 182)\n    phrase:  \"site-wide\"\n    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c\n\n  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write \"across the audited set\" — write \"the sitemap declares\" or \"this file carries\". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write \"site-wide\" or \"across the entire site\" — write \"across the audited pages\" or \"on the audited set\".\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:45:59.886Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"01934462c40b","patternKey":"245f47636cbe","timestamp":"2026-06-13T08:45:40.640Z","severity":"warn","source":"check-cross-section-consistency.js","gateName":"cross-section-consistency","category":"cross-section-scope-mix","title":"Line 734: scope-mixing prose","detail":"Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa","suggestions":["Re-check the infill sources for each cited section.","If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:45:59.886Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 2 findings (2 warnings) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 2 | 2026-06-13T08:41:47Z |
| 2 | cross-section-consistency | cross-section-scope-mix | Line 734: scope-mixing prose | 2026-06-13T08:45:40Z |

<details open><summary>Warning detail (2)</summary>

**1. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 2**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/enhancely.ai/enhancely-ai-report.md
  2 scope mis-statement(s).

  [sitewide-inside-sampled-section] line 252
    section: ## Findings  (line 182)
    phrase:  "Site-wide"
    line:    **Finding:** Security headers absent: HSTS, CSP (Site-wide). Missing security headers increase exposure to content injec

  [sitewide-inside-sampled-section] line 256
    section: ## Findings  (line 182)
    phrase:  "site-wide"
    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

**2. cross-section-consistency - Line 734: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

</details>

