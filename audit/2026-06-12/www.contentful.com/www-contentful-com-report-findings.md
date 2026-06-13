---
title: "Www Contentful — Audit Gate Findings"
description: "Findings sidecar for the Www Contentful audit on 2026-06-12. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
auditDate: "2026-06-12"
companion: "www-contentful-com-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 9
  inherits: ["www-contentful-com-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"1c607578f3f7","patternKey":"a5b8319d5121","timestamp":"2026-06-13T09:19:14.388Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"exaggeration","title":"Exaggeration / hyperbole: 1 instance","detail":"Exaggeration / hyperbole\n\nline 1311: \"exceptional\" - Our audit of https://www.contentful.com shows AI Suitability at an exceptional 99/100, indicating th","suggestions":[],"lineRef":"line 1311","provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:26:55.206Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"465590c62c54","patternKey":"ef93bf825f21","timestamp":"2026-06-13T09:19:14.563Z","severity":"warn","source":"check-report-scope.js","gateName":"sample-vs-total-scope","category":"scope-mis-statements","title":"Scope mis-statements remain after auto-repair: 3","detail":"Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:\n\ncheck-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md\n  3 scope mis-statement(s).\n\n  [sitewide-inside-sampled-section] line 350\n    section: ## Findings  (line 182)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options (Site-wide). Missing security headers\n\n  [sitewide-inside-sampled-section] line 354\n    section: ## Findings  (line 182)\n    phrase:  \"site-wide\"\n    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c\n\n  [sitewide-inside-sampled-section] line 423\n    section: ## Findings  (line 182)\n    phrase:  \"on every page\"\n    line:    - **sameAs**: linking the Organisation entity to external social profiles (e.g., LinkedIn, Twitter) gives machines a ver\n\n  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write \"across the audited set\" — write \"the sitemap declares\" or \"this file carries\". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write \"site-wide\" or \"across the entire site\" — write \"across the audited pages\" or \"on the audited set\".\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:26:55.206Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"53f6be8fdc1f","patternKey":"d25fca51edc1","timestamp":"2026-06-13T09:21:16.324Z","severity":"error","source":"run-with-timeout","gateName":"timeout-fierce-critic","category":"subprocess-timeout","title":"Subprocess timeout (fierce-critic)","detail":"The fierce-critic subprocess exceeded the timeout threshold and was terminated. This is expected behavior — a machine reader would also stop processing here. Elapsed: 120013ms. Kill reason: hard-timeout.","suggestions":["Review the subprocess output for deadlocks or resource exhaustion.","Check if the target URL has changed or is now unreachable.","Consider adjusting the timeout threshold via MX_AUDIT_GATE_TIMEOUT_MS."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:26:55.206Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"c024888a0e81","patternKey":"41521b0601dd","timestamp":"2026-06-13T09:26:34.633Z","severity":"warn","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"inventory-mismatch","title":"Image inventory: 12 images in formats not named in prose","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md — image_optimization.csv contains 890 images: 264 PNG, 15 JPEG, 1 WebP, 598 SVG, 12 other / unrecognised. Total of named formats is 878; 12 images are in a format the Appendix C narrative does not mention.","suggestions":["Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:26:55.206Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"833beb10eead","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T09:26:34.635Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Canonical URL 83% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:26:55.206Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f9ca211a824","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T09:26:34.635Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Open Graph tags 83% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:26:55.206Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"34cde4ffef18","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T09:26:34.635Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Twitter Card tags 83% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:26:55.206Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"01934462c40b","patternKey":"245f47636cbe","timestamp":"2026-06-13T09:26:35.340Z","severity":"warn","source":"check-cross-section-consistency.js","gateName":"cross-section-consistency","category":"cross-section-scope-mix","title":"Line 1053: scope-mixing prose","detail":"Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa","suggestions":["Re-check the infill sources for each cited section.","If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:26:55.206Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"ce1df85a4850","patternKey":"6128e1f99508","timestamp":"2026-06-13T09:26:35.425Z","severity":"error","source":"check-prose-score-binding.js","gateName":"check-prose-score-binding.js","category":"internal-contradiction","title":"Prose score for SEO contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md:1355","detail":"Narrative says SEO scored 98/100; the scorecard table says 94/100. The rewrite pass likely bound another dimension's number.\n\nLine 1355: Content-pages SEO average: 98/100.","suggestions":["Correct the narrative to 94/100, or re-run the repair pass - the scorecard table is the canonical value."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:26:55.206Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 9 findings (5 errors, 3 warnings, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | timeout-fierce-critic | subprocess-timeout | Subprocess timeout (fierce-critic) | 2026-06-13T09:21:16Z |
| 2 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Canonical URL 83% but consistency_analysis says 100% (10/10) | 2026-06-13T09:26:34Z |
| 3 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Open Graph tags 83% but consistency_analysis says 100% (10/10) | 2026-06-13T09:26:34Z |
| 4 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Twitter Card tags 83% but consistency_analysis says 100% (10/10) | 2026-06-13T09:26:34Z |
| 5 | check-prose-score-binding.js | internal-contradiction | Prose score for SEO contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md:1355 | 2026-06-13T09:26:35Z |

<details open><summary>Error detail (5)</summary>

**1. timeout-fierce-critic - Subprocess timeout (fierce-critic)**

The fierce-critic subprocess exceeded the timeout threshold and was terminated. This is expected behavior — a machine reader would also stop processing here. Elapsed: 120013ms. Kill reason: hard-timeout.

Suggested next steps:

- Review the subprocess output for deadlocks or resource exhaustion.
- Check if the target URL has changed or is now unreachable.
- Consider adjusting the timeout threshold via MX_AUDIT_GATE_TIMEOUT_MS.

**2. check-report-coherence.js - Cross-Page Consistency reports Canonical URL 83% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**3. check-report-coherence.js - Cross-Page Consistency reports Open Graph tags 83% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**4. check-report-coherence.js - Cross-Page Consistency reports Twitter Card tags 83% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**5. check-prose-score-binding.js - Prose score for SEO contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md:1355**

Narrative says SEO scored 98/100; the scorecard table says 94/100. The rewrite pass likely bound another dimension's number.

Line 1355: Content-pages SEO average: 98/100.

Suggested next steps:

- Correct the narrative to 94/100, or re-run the repair pass - the scorecard table is the canonical value.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 3 | 2026-06-13T09:19:14Z |
| 2 | check-report-coherence.js | inventory-mismatch | Image inventory: 12 images in formats not named in prose | 2026-06-13T09:26:34Z |
| 3 | cross-section-consistency | cross-section-scope-mix | Line 1053: scope-mixing prose | 2026-06-13T09:26:35Z |

<details open><summary>Warning detail (3)</summary>

**1. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 3**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md
  3 scope mis-statement(s).

  [sitewide-inside-sampled-section] line 350
    section: ## Findings  (line 182)
    phrase:  "Site-wide"
    line:    **Finding:** Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options (Site-wide). Missing security headers

  [sitewide-inside-sampled-section] line 354
    section: ## Findings  (line 182)
    phrase:  "site-wide"
    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c

  [sitewide-inside-sampled-section] line 423
    section: ## Findings  (line 182)
    phrase:  "on every page"
    line:    - **sameAs**: linking the Organisation entity to external social profiles (e.g., LinkedIn, Twitter) gives machines a ver

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

**2. check-report-coherence.js - Image inventory: 12 images in formats not named in prose**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.contentful.com/www-contentful-com-report.md — image_optimization.csv contains 890 images: 264 PNG, 15 JPEG, 1 WebP, 598 SVG, 12 other / unrecognised. Total of named formats is 878; 12 images are in a format the Appendix C narrative does not mention.

Suggested next steps:

- Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0.

**3. cross-section-consistency - Line 1053: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | exaggeration | Exaggeration / hyperbole: 1 instance (line 1311) | 2026-06-13T09:19:14Z |

<details open><summary>Info detail (1)</summary>

**1. tone - Exaggeration / hyperbole: 1 instance**

Exaggeration / hyperbole

line 1311: "exceptional" - Our audit of https://www.contentful.com shows AI Suitability at an exceptional 99/100, indicating th

</details>

