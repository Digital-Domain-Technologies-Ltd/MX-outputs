---
title: "Sibotacademy — Audit Gate Findings"
description: "Findings sidecar for the Sibotacademy audit on 2026-06-12. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
auditDate: "2026-06-12"
companion: "sibotacademy-pl-en-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 9
  inherits: ["sibotacademy-pl-en-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"27339782a086","patternKey":"7ae7317cf2f3","timestamp":"2026-06-13T08:52:28.274Z","severity":"warn","source":"check-report-voice.js","gateName":"voice-consistency","category":"mixed-voice-sections","title":"Mixed-voice section(s) remain after auto-repair: 1","detail":"Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:\n\ncheck-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md\n  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person (\"the site does X\") with first-person (\"we found Y\") inside the same section reads as drafted-by-committee.\n\n  ## Findings  (line 198)\n    first-person tokens: 3 (lines 202, 367, 382)\n    third-person markers: 3 (lines 363, 367, 382)\n\n  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice (\"we\") for our work and second-person (\"your site\") for the audited site; scorecards and appendices use third-person.\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:59:42.917Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"465590c62c54","patternKey":"ef93bf825f21","timestamp":"2026-06-13T08:52:28.275Z","severity":"warn","source":"check-report-scope.js","gateName":"sample-vs-total-scope","category":"scope-mis-statements","title":"Scope mis-statements remain after auto-repair: 6","detail":"Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:\n\ncheck-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md\n  6 scope mis-statement(s).\n\n  [sitewide-inside-sampled-section] line 288\n    section: ## Findings  (line 198)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options (Site-wide). Missing security headers\n\n  [sitewide-inside-sampled-section] line 292\n    section: ## Findings  (line 198)\n    phrase:  \"site-wide\"\n    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c\n\n  [sitewide-inside-sampled-section] line 348\n    section: ## Findings  (line 198)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Intended audience not machine-declared (child audience inferred from content) (Site-wide). Agents must infe\n\n  [sitewide-inside-sampled-section] line 363\n    section: ## Findings  (line 198)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Age-assurance signal not machine-detectable (child audience) (Site-wide). An agent cannot tell whether age \n\n  [sitewide-inside-sampled-section] line 378\n    section: ## Findings  (line 198)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Consent signal not machine-detectable on first visit (child audience) (Site-wide). An agent cannot confirm \n\n  [sampling-inside-sitewide-section] line 533\n    section: ## Discovery Files  (line 499)\n    phrase:  \"per-page\"\n    line:    The sitemap declares 22 URLs and grades Partial. Lastmod is present but identical across entries, so it reads as a singl\n\n  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write \"across the audited set\" — write \"the sitemap declares\" or \"this file carries\". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write \"site-wide\" or \"across the entire site\" — write \"across the audited pages\" or \"on the audited set\".\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:59:42.917Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"c024888a0e81","patternKey":"41521b0601dd","timestamp":"2026-06-13T08:59:21.908Z","severity":"warn","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"inventory-mismatch","title":"Image inventory: 4 images in formats not named in prose","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md — image_optimization.csv contains 83 images: 8 PNG, 0 JPEG, 71 WebP, 0 SVG, 4 other / unrecognised. Total of named formats is 79; 4 images are in a format the Appendix C narrative does not mention.","suggestions":["Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:59:42.917Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"a7f087cdb106","patternKey":"321914741c31","timestamp":"2026-06-13T08:59:21.910Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"placeholder-leak","title":"1 unresolved placeholder token(s) leaked into the final report: 0","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md — 1 placeholder leaks at lines: 968([0]). Each one indicates an infill handler that did not match its template anchor, or a handler that returned empty for an expected field.","suggestions":["For each token, grep infill-report.js and tableHandlers/ for the replacement code path. Verify the template text matches the regex."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:59:42.917Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"833beb10eead","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T08:59:21.910Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Canonical URL 64% but consistency_analysis says 70% (7/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:59:42.917Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"5d7e76f072e7","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T08:59:21.910Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Skip link 64% but consistency_analysis says 70% (7/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md — the Cross-Page Consistency table's percentage for Skip link does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:59:42.917Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f9ca211a824","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T08:59:21.910Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:59:42.917Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"01934462c40b","patternKey":"245f47636cbe","timestamp":"2026-06-13T08:59:22.620Z","severity":"warn","source":"check-cross-section-consistency.js","gateName":"cross-section-consistency","category":"cross-section-scope-mix","title":"Line 763: scope-mixing prose","detail":"Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa","suggestions":["Re-check the infill sources for each cited section.","If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:59:42.917Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"ce1df85a4850","patternKey":"6128e1f99508","timestamp":"2026-06-13T08:59:22.705Z","severity":"error","source":"check-prose-score-binding.js","gateName":"check-prose-score-binding.js","category":"internal-contradiction","title":"Prose score for SEO contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md:1059","detail":"Narrative says SEO scored 86/100; the scorecard table says 87/100. The rewrite pass likely bound another dimension's number.\n\nLine 1059: Content-pages SEO average: 86/100.","suggestions":["Correct the narrative to 87/100, or re-run the repair pass - the scorecard table is the canonical value."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:59:42.917Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 9 findings (5 errors, 4 warnings) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-report-coherence.js | placeholder-leak | 1 unresolved placeholder token(s) leaked into the final report: 0 | 2026-06-13T08:59:21Z |
| 2 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Canonical URL 64% but consistency_analysis says 70% (7/10) | 2026-06-13T08:59:21Z |
| 3 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Skip link 64% but consistency_analysis says 70% (7/10) | 2026-06-13T08:59:21Z |
| 4 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10) | 2026-06-13T08:59:21Z |
| 5 | check-prose-score-binding.js | internal-contradiction | Prose score for SEO contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md:1059 | 2026-06-13T08:59:22Z |

<details open><summary>Error detail (5)</summary>

**1. check-report-coherence.js - 1 unresolved placeholder token(s) leaked into the final report: 0**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md — 1 placeholder leaks at lines: 968([0]). Each one indicates an infill handler that did not match its template anchor, or a handler that returned empty for an expected field.

Suggested next steps:

- For each token, grep infill-report.js and tableHandlers/ for the replacement code path. Verify the template text matches the regex.

**2. check-report-coherence.js - Cross-Page Consistency reports Canonical URL 64% but consistency_analysis says 70% (7/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**3. check-report-coherence.js - Cross-Page Consistency reports Skip link 64% but consistency_analysis says 70% (7/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md — the Cross-Page Consistency table's percentage for Skip link does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**4. check-report-coherence.js - Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**5. check-prose-score-binding.js - Prose score for SEO contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md:1059**

Narrative says SEO scored 86/100; the scorecard table says 87/100. The rewrite pass likely bound another dimension's number.

Line 1059: Content-pages SEO average: 86/100.

Suggested next steps:

- Correct the narrative to 87/100, or re-run the repair pass - the scorecard table is the canonical value.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | voice-consistency | mixed-voice-sections | Mixed-voice section(s) remain after auto-repair: 1 | 2026-06-13T08:52:28Z |
| 2 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 6 | 2026-06-13T08:52:28Z |
| 3 | check-report-coherence.js | inventory-mismatch | Image inventory: 4 images in formats not named in prose | 2026-06-13T08:59:21Z |
| 4 | cross-section-consistency | cross-section-scope-mix | Line 763: scope-mixing prose | 2026-06-13T08:59:22Z |

<details open><summary>Warning detail (4)</summary>

**1. voice-consistency - Mixed-voice section(s) remain after auto-repair: 1**

Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:

check-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md
  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person ("the site does X") with first-person ("we found Y") inside the same section reads as drafted-by-committee.

  ## Findings  (line 198)
    first-person tokens: 3 (lines 202, 367, 382)
    third-person markers: 3 (lines 363, 367, 382)

  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice ("we") for our work and second-person ("your site") for the audited site; scorecards and appendices use third-person.

**2. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 6**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md
  6 scope mis-statement(s).

  [sitewide-inside-sampled-section] line 288
    section: ## Findings  (line 198)
    phrase:  "Site-wide"
    line:    **Finding:** Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options (Site-wide). Missing security headers

  [sitewide-inside-sampled-section] line 292
    section: ## Findings  (line 198)
    phrase:  "site-wide"
    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c

  [sitewide-inside-sampled-section] line 348
    section: ## Findings  (line 198)
    phrase:  "Site-wide"
    line:    **Finding:** Intended audience not machine-declared (child audience inferred from content) (Site-wide). Agents must infe

  [sitewide-inside-sampled-section] line 363
    section: ## Findings  (line 198)
    phrase:  "Site-wide"
    line:    **Finding:** Age-assurance signal not machine-detectable (child audience) (Site-wide). An agent cannot tell whether age 

  [sitewide-inside-sampled-section] line 378
    section: ## Findings  (line 198)
    phrase:  "Site-wide"
    line:    **Finding:** Consent signal not machine-detectable on first visit (child audience) (Site-wide). An agent cannot confirm 

  [sampling-inside-sitewide-section] line 533
    section: ## Discovery Files  (line 499)
    phrase:  "per-page"
    line:    The sitemap declares 22 URLs and grades Partial. Lastmod is present but identical across entries, so it reads as a singl

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

**3. check-report-coherence.js - Image inventory: 4 images in formats not named in prose**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/sibotacademy.pl-en/sibotacademy-pl-en-report.md — image_optimization.csv contains 83 images: 8 PNG, 0 JPEG, 71 WebP, 0 SVG, 4 other / unrecognised. Total of named formats is 79; 4 images are in a format the Appendix C narrative does not mention.

Suggested next steps:

- Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0.

**4. cross-section-consistency - Line 763: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

</details>

