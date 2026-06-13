---
title: "Dkd — Audit Gate Findings"
description: "Findings sidecar for the Dkd audit on 2026-06-12. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
auditDate: "2026-06-12"
companion: "dkd-de-de-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 5
  inherits: ["dkd-de-de-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"465590c62c54","patternKey":"ef93bf825f21","timestamp":"2026-06-13T08:30:55.854Z","severity":"warn","source":"check-report-scope.js","gateName":"sample-vs-total-scope","category":"scope-mis-statements","title":"Scope mis-statements remain after auto-repair: 2","detail":"Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:\n\ncheck-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dkd.de-de/dkd-de-de-report.md\n  2 scope mis-statement(s).\n\n  [sitewide-inside-sampled-section] line 270\n    section: ## Findings  (line 183)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Security headers absent: X-Frame-Options (Site-wide). Missing security headers increase exposure to content\n\n  [sitewide-inside-sampled-section] line 274\n    section: ## Findings  (line 183)\n    phrase:  \"site-wide\"\n    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c\n\n  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write \"across the audited set\" — write \"the sitemap declares\" or \"this file carries\". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write \"site-wide\" or \"across the entire site\" — write \"across the audited pages\" or \"on the audited set\".\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:35:09.824Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"49636c6e981a","patternKey":"9cabeb757220","timestamp":"2026-06-13T08:30:57.353Z","severity":"warn","source":"verify-audit-report.js","gateName":"deterministic-verifier","category":"unverified-claims","title":"1 claim could not be verified against source data","detail":"Deterministic verifier scanned numeric, URL, HTML-snippet, positional, and behavioural claims in the report. The entries below did not match the source CSV / JSON / cached HTML and need a reviewer's eye.\n\nline 1000: Numeric 121 (121) not found in any results CSV / JSON","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:35:09.824Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"c024888a0e81","patternKey":"41521b0601dd","timestamp":"2026-06-13T08:34:49.519Z","severity":"warn","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"inventory-mismatch","title":"Image inventory: 37 images in formats not named in prose","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dkd.de-de/dkd-de-de-report.md — image_optimization.csv contains 148 images: 63 PNG, 44 JPEG, 0 WebP, 4 SVG, 37 other / unrecognised. Total of named formats is 111; 37 images are in a format the Appendix C narrative does not mention.","suggestions":["Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:35:09.824Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"01934462c40b","patternKey":"245f47636cbe","timestamp":"2026-06-13T08:34:50.231Z","severity":"warn","source":"check-cross-section-consistency.js","gateName":"cross-section-consistency","category":"cross-section-scope-mix","title":"Line 706: scope-mixing prose","detail":"Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa","suggestions":["Re-check the infill sources for each cited section.","If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:35:09.824Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"1d58c07fa192","patternKey":"6128e1f99508","timestamp":"2026-06-13T08:34:50.315Z","severity":"error","source":"check-prose-score-binding.js","gateName":"check-prose-score-binding.js","category":"internal-contradiction","title":"Prose score for Accessibility contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dkd.de-de/dkd-de-de-report.md:221","detail":"Narrative says Accessibility scored 94/100; the scorecard table says 100/100. The rewrite pass likely bound another dimension's number.\n\nLine 221: Across the audited set, your pages demonstrate strong foundations in SEO and accessibility., with a 94/100 score and perfect compliance respectively.","suggestions":["Correct the narrative to 100/100, or re-run the repair pass - the scorecard table is the canonical value."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:35:09.824Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 5 findings (1 error, 4 warnings) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-prose-score-binding.js | internal-contradiction | Prose score for Accessibility contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dkd.de-de/dkd-de-de-report.md:221 | 2026-06-13T08:34:50Z |

<details open><summary>Error detail (1)</summary>

**1. check-prose-score-binding.js - Prose score for Accessibility contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dkd.de-de/dkd-de-de-report.md:221**

Narrative says Accessibility scored 94/100; the scorecard table says 100/100. The rewrite pass likely bound another dimension's number.

Line 221: Across the audited set, your pages demonstrate strong foundations in SEO and accessibility., with a 94/100 score and perfect compliance respectively.

Suggested next steps:

- Correct the narrative to 100/100, or re-run the repair pass - the scorecard table is the canonical value.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 2 | 2026-06-13T08:30:55Z |
| 2 | deterministic-verifier | unverified-claims | 1 claim could not be verified against source data | 2026-06-13T08:30:57Z |
| 3 | check-report-coherence.js | inventory-mismatch | Image inventory: 37 images in formats not named in prose | 2026-06-13T08:34:49Z |
| 4 | cross-section-consistency | cross-section-scope-mix | Line 706: scope-mixing prose | 2026-06-13T08:34:50Z |

<details open><summary>Warning detail (4)</summary>

**1. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 2**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dkd.de-de/dkd-de-de-report.md
  2 scope mis-statement(s).

  [sitewide-inside-sampled-section] line 270
    section: ## Findings  (line 183)
    phrase:  "Site-wide"
    line:    **Finding:** Security headers absent: X-Frame-Options (Site-wide). Missing security headers increase exposure to content

  [sitewide-inside-sampled-section] line 274
    section: ## Findings  (line 183)
    phrase:  "site-wide"
    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

**2. deterministic-verifier - 1 claim could not be verified against source data**

Deterministic verifier scanned numeric, URL, HTML-snippet, positional, and behavioural claims in the report. The entries below did not match the source CSV / JSON / cached HTML and need a reviewer's eye.

line 1000: Numeric 121 (121) not found in any results CSV / JSON

**3. check-report-coherence.js - Image inventory: 37 images in formats not named in prose**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dkd.de-de/dkd-de-de-report.md — image_optimization.csv contains 148 images: 63 PNG, 44 JPEG, 0 WebP, 4 SVG, 37 other / unrecognised. Total of named formats is 111; 37 images are in a format the Appendix C narrative does not mention.

Suggested next steps:

- Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0.

**4. cross-section-consistency - Line 706: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

</details>

