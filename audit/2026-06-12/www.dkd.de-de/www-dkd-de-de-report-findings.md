---
title: "Www Dkd — Audit Gate Findings"
description: "Findings sidecar for the Www Dkd audit on 2026-06-12. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
auditDate: "2026-06-12"
companion: "www-dkd-de-de-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 4
  inherits: ["www-dkd-de-de-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"1c607578f3f7","patternKey":"a5b8319d5121","timestamp":"2026-06-13T09:27:03.252Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"exaggeration","title":"Exaggeration / hyperbole: 1 instance","detail":"Exaggeration / hyperbole\n\nline 121: \"flawless\" - The headline opportunity is to enrich the site with MX governance metadata so machines have the stru","suggestions":[],"lineRef":"line 121","provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:32:54.596Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"49636c6e981a","patternKey":"9cabeb757220","timestamp":"2026-06-13T09:27:04.871Z","severity":"warn","source":"verify-audit-report.js","gateName":"deterministic-verifier","category":"unverified-claims","title":"1 claim could not be verified against source data","detail":"Deterministic verifier scanned numeric, URL, HTML-snippet, positional, and behavioural claims in the report. The entries below did not match the source CSV / JSON / cached HTML and need a reviewer's eye.\n\nline 998: Numeric 121 (121) not found in any results CSV / JSON","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:32:54.596Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"c024888a0e81","patternKey":"41521b0601dd","timestamp":"2026-06-13T09:32:34.134Z","severity":"warn","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"inventory-mismatch","title":"Image inventory: 37 images in formats not named in prose","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.dkd.de-de/www-dkd-de-de-report.md — image_optimization.csv contains 148 images: 63 PNG, 44 JPEG, 0 WebP, 4 SVG, 37 other / unrecognised. Total of named formats is 111; 37 images are in a format the Appendix C narrative does not mention.","suggestions":["Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:32:54.596Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"01934462c40b","patternKey":"245f47636cbe","timestamp":"2026-06-13T09:32:34.848Z","severity":"warn","source":"check-cross-section-consistency.js","gateName":"cross-section-consistency","category":"cross-section-scope-mix","title":"Line 706: scope-mixing prose","detail":"Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa","suggestions":["Re-check the infill sources for each cited section.","If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:32:54.596Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 4 findings (3 warnings, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | deterministic-verifier | unverified-claims | 1 claim could not be verified against source data | 2026-06-13T09:27:04Z |
| 2 | check-report-coherence.js | inventory-mismatch | Image inventory: 37 images in formats not named in prose | 2026-06-13T09:32:34Z |
| 3 | cross-section-consistency | cross-section-scope-mix | Line 706: scope-mixing prose | 2026-06-13T09:32:34Z |

<details open><summary>Warning detail (3)</summary>

**1. deterministic-verifier - 1 claim could not be verified against source data**

Deterministic verifier scanned numeric, URL, HTML-snippet, positional, and behavioural claims in the report. The entries below did not match the source CSV / JSON / cached HTML and need a reviewer's eye.

line 998: Numeric 121 (121) not found in any results CSV / JSON

**2. check-report-coherence.js - Image inventory: 37 images in formats not named in prose**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/www.dkd.de-de/www-dkd-de-de-report.md — image_optimization.csv contains 148 images: 63 PNG, 44 JPEG, 0 WebP, 4 SVG, 37 other / unrecognised. Total of named formats is 111; 37 images are in a format the Appendix C narrative does not mention.

Suggested next steps:

- Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0.

**3. cross-section-consistency - Line 706: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | exaggeration | Exaggeration / hyperbole: 1 instance (line 121) | 2026-06-13T09:27:03Z |

<details open><summary>Info detail (1)</summary>

**1. tone - Exaggeration / hyperbole: 1 instance**

Exaggeration / hyperbole

line 121: "flawless" - The headline opportunity is to enrich the site with MX governance metadata so machines have the stru

</details>

