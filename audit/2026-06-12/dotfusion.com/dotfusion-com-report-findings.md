---
title: "Dotfusion — Audit Gate Findings"
description: "Findings sidecar for the Dotfusion audit on 2026-06-12. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
auditDate: "2026-06-12"
companion: "dotfusion-com-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 8
  inherits: ["dotfusion-com-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"27339782a086","patternKey":"7ae7317cf2f3","timestamp":"2026-06-13T08:35:19.371Z","severity":"warn","source":"check-report-voice.js","gateName":"voice-consistency","category":"mixed-voice-sections","title":"Mixed-voice section(s) remain after auto-repair: 1","detail":"Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:\n\ncheck-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md\n  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person (\"the site does X\") with first-person (\"we found Y\") inside the same section reads as drafted-by-committee.\n\n  ## Agent Reading Pipeline  (line 790)\n    first-person tokens: 1 (lines 838)\n    third-person markers: 2 (lines 792, 803)\n\n  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice (\"we\") for our work and second-person (\"your site\") for the audited site; scorecards and appendices use third-person.\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:41:37.477Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"465590c62c54","patternKey":"ef93bf825f21","timestamp":"2026-06-13T08:35:19.372Z","severity":"warn","source":"check-report-scope.js","gateName":"sample-vs-total-scope","category":"scope-mis-statements","title":"Scope mis-statements remain after auto-repair: 3","detail":"Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:\n\ncheck-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md\n  3 scope mis-statement(s).\n\n  [sitewide-inside-sampled-section] line 317\n    section: ## Findings  (line 182)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options (Site-wide). Missing security headers\n\n  [sitewide-inside-sampled-section] line 321\n    section: ## Findings  (line 182)\n    phrase:  \"site-wide\"\n    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c\n\n  [sampling-inside-sitewide-section] line 545\n    section: ## Discovery Files  (line 515)\n    phrase:  \"per-page\"\n    line:    The sitemap declares 149 URLs and grades Partial. Lastmod is present but identical across entries, so it reads as a sing\n\n  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write \"across the audited set\" — write \"the sitemap declares\" or \"this file carries\". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write \"site-wide\" or \"across the entire site\" — write \"across the audited pages\" or \"on the audited set\".\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:41:37.477Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"53f6be8fdc1f","patternKey":"d25fca51edc1","timestamp":"2026-06-13T08:37:20.907Z","severity":"error","source":"run-with-timeout","gateName":"timeout-fierce-critic","category":"subprocess-timeout","title":"Subprocess timeout (fierce-critic)","detail":"The fierce-critic subprocess exceeded the timeout threshold and was terminated. This is expected behavior — a machine reader would also stop processing here. Elapsed: 120006ms. Kill reason: hard-timeout.","suggestions":["Review the subprocess output for deadlocks or resource exhaustion.","Check if the target URL has changed or is now unreachable.","Consider adjusting the timeout threshold via MX_AUDIT_GATE_TIMEOUT_MS."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:41:37.477Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"c024888a0e81","patternKey":"41521b0601dd","timestamp":"2026-06-13T08:41:17.092Z","severity":"warn","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"inventory-mismatch","title":"Image inventory: 24 images in formats not named in prose","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md — image_optimization.csv contains 125 images: 38 PNG, 0 JPEG, 3 WebP, 60 SVG, 24 other / unrecognised. Total of named formats is 101; 24 images are in a format the Appendix C narrative does not mention.","suggestions":["Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:41:37.477Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"833beb10eead","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T08:41:17.094Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Canonical URL 92% but consistency_analysis says 100% (11/11)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:41:37.477Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"01934462c40b","patternKey":"245f47636cbe","timestamp":"2026-06-13T08:41:17.825Z","severity":"warn","source":"check-cross-section-consistency.js","gateName":"cross-section-consistency","category":"cross-section-scope-mix","title":"Line 826: scope-mixing prose","detail":"Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa","suggestions":["Re-check the infill sources for each cited section.","If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:41:37.477Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"ce1df85a4850","patternKey":"6128e1f99508","timestamp":"2026-06-13T08:41:17.912Z","severity":"error","source":"check-prose-score-binding.js","gateName":"check-prose-score-binding.js","category":"internal-contradiction","title":"Prose score for SEO contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md:1116","detail":"Narrative says SEO scored 83/100; the scorecard table says 84/100. The rewrite pass likely bound another dimension's number.\n\nLine 1116: Content-pages SEO average: 83/100.","suggestions":["Correct the narrative to 84/100, or re-run the repair pass - the scorecard table is the canonical value."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:41:37.477Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f36f4de456d","patternKey":"60f5e9c9e807","timestamp":"2026-06-13T08:41:18.053Z","severity":"info","source":"audit-prose-lint.js","gateName":"prose-lint","category":"prose-quality","title":"Prose linter flagged 73 style finding(s) for review","detail":"Gate prose-lint (audit-prose-lint.js) returned non-zero. Output excerpt:\n\n{\n  \"report\": \"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md\",\n  \"total\": 73,\n  \"neutralSurface\": true,\n  \"byScanner\": {\n    \"mechanical\": {\n      \"count\": 26\n    },\n    \"ai-vocab\": {\n      \"count\": 8\n    },\n    \"copula\": {\n      \"count\": 7\n    },\n    \"prose-patterns\": {\n      \"count\": 32\n    },\n    \"tics\": {\n      \"count\": 0\n    }\n  },\n  \"byCategory\": {\n    \"dialect-divergence\": 23,\n    \"curly-quote\": 3,\n    \"ai-vocab-word\": 6,\n    \"ai-vocab-phrase\": 2,\n    \"possession-copula\": 6,\n    \"locative-copula\": 1,\n    \"same-sentence-repetition\": 32\n  },\n  \"findings\": [\n    {\n      \"scanner\": \"mechanical\",\n      \"line\": 37,\n      \"column\": 171,\n      \"category\": \"dialect-divergence\",\n      \"match\": \"analyse (UK)\",\n      \"snippet\": \"runbook: \\\"Executive audit report for Dotfusion. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl\",\n      \"rephrase_hint\": \"Neutral-English surface (writing-style.md §3): rephrase to avoid the US/UK divergent spelling \\\"analyse\\\" entirely - e.g. examine / review.\"\n    },\n    {\n      \"scanner\": \"copula\",\n      \"line\": 50,\n      \"column\": 15,\n      \"category\": \"possession-copula\",\n      \"match\": \"carries the\",\n      \"snippet\": \"# therefore carries the AI sidecar pointer (the regulator-facing\",\n      \"rephrase_hint\": \"Use \\\"has\\\" directly. \\\"X boasts four rooms\\\" -> \\\"X has four rooms\\\". \\\"Y features three engagement models\\\" -> \\\"Y has three engagement models\\\" or \\\"the three engagement models are A, B, C\\\".\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 62,\n      \"column\": 191,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"file (2x)\",\n      \"snippet\": \"The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that pref\",\n      \"rephrase_hint\": \"Distinctive content word \\\"file\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -> \\\"The seat at The Gathering closes when the cohort closes\\\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows.\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 62,\n      \"column\": 276,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"deterministic (2x)\",\n      \"snippet\": \"The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv\",\n      \"rephrase_hint\": \"Distinctive content word \\\"deterministic\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -> \\\"The seat at The Gathering closes when the cohort closes\\\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows.\"\n    },\n    {\n      \"scanner\": \"copula\",\n      \"line\": 62,\n      \"column\": 300,\n      \"category\": \"possession-copula\",\n      \"match\": \"carries the\",\n      \"snippet\": \"note: \\\"AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPaylo\",\n      \"rephrase_hint\": \"Use \\\"has\\\" directly. \\\"X boasts four rooms\\\" -> \\\"X has four rooms\\\". \\\"Y features three engagement models\\\" -> \\\"Y has three engagement models\\\" or \\\"the three engagement models are A, B, C\\\".\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 62,\n      \"column","suggestions":["Review the flagged AI-tells and mechanical prose issues in the final markdown before sending to the client. Worklist: prose-lint.json in the run results dir."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T08:41:37.477Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 8 findings (3 errors, 4 warnings, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | timeout-fierce-critic | subprocess-timeout | Subprocess timeout (fierce-critic) | 2026-06-13T08:37:20Z |
| 2 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Canonical URL 92% but consistency_analysis says 100% (11/11) | 2026-06-13T08:41:17Z |
| 3 | check-prose-score-binding.js | internal-contradiction | Prose score for SEO contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md:1116 | 2026-06-13T08:41:17Z |

<details open><summary>Error detail (3)</summary>

**1. timeout-fierce-critic - Subprocess timeout (fierce-critic)**

The fierce-critic subprocess exceeded the timeout threshold and was terminated. This is expected behavior — a machine reader would also stop processing here. Elapsed: 120006ms. Kill reason: hard-timeout.

Suggested next steps:

- Review the subprocess output for deadlocks or resource exhaustion.
- Check if the target URL has changed or is now unreachable.
- Consider adjusting the timeout threshold via MX_AUDIT_GATE_TIMEOUT_MS.

**2. check-report-coherence.js - Cross-Page Consistency reports Canonical URL 92% but consistency_analysis says 100% (11/11)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**3. check-prose-score-binding.js - Prose score for SEO contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md:1116**

Narrative says SEO scored 83/100; the scorecard table says 84/100. The rewrite pass likely bound another dimension's number.

Line 1116: Content-pages SEO average: 83/100.

Suggested next steps:

- Correct the narrative to 84/100, or re-run the repair pass - the scorecard table is the canonical value.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | voice-consistency | mixed-voice-sections | Mixed-voice section(s) remain after auto-repair: 1 | 2026-06-13T08:35:19Z |
| 2 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 3 | 2026-06-13T08:35:19Z |
| 3 | check-report-coherence.js | inventory-mismatch | Image inventory: 24 images in formats not named in prose | 2026-06-13T08:41:17Z |
| 4 | cross-section-consistency | cross-section-scope-mix | Line 826: scope-mixing prose | 2026-06-13T08:41:17Z |

<details open><summary>Warning detail (4)</summary>

**1. voice-consistency - Mixed-voice section(s) remain after auto-repair: 1**

Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:

check-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md
  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person ("the site does X") with first-person ("we found Y") inside the same section reads as drafted-by-committee.

  ## Agent Reading Pipeline  (line 790)
    first-person tokens: 1 (lines 838)
    third-person markers: 2 (lines 792, 803)

  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice ("we") for our work and second-person ("your site") for the audited site; scorecards and appendices use third-person.

**2. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 3**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md
  3 scope mis-statement(s).

  [sitewide-inside-sampled-section] line 317
    section: ## Findings  (line 182)
    phrase:  "Site-wide"
    line:    **Finding:** Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options (Site-wide). Missing security headers

  [sitewide-inside-sampled-section] line 321
    section: ## Findings  (line 182)
    phrase:  "site-wide"
    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c

  [sampling-inside-sitewide-section] line 545
    section: ## Discovery Files  (line 515)
    phrase:  "per-page"
    line:    The sitemap declares 149 URLs and grades Partial. Lastmod is present but identical across entries, so it reads as a sing

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

**3. check-report-coherence.js - Image inventory: 24 images in formats not named in prose**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md — image_optimization.csv contains 125 images: 38 PNG, 0 JPEG, 3 WebP, 60 SVG, 24 other / unrecognised. Total of named formats is 101; 24 images are in a format the Appendix C narrative does not mention.

Suggested next steps:

- Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0.

**4. cross-section-consistency - Line 826: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | prose-lint | prose-quality | Prose linter flagged 73 style finding(s) for review | 2026-06-13T08:41:18Z |

<details open><summary>Info detail (1)</summary>

**1. prose-lint - Prose linter flagged 73 style finding(s) for review**

Gate prose-lint (audit-prose-lint.js) returned non-zero. Output excerpt:

{
  "report": "/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/dotfusion.com/dotfusion-com-report.md",
  "total": 73,
  "neutralSurface": true,
  "byScanner": {
    "mechanical": {
      "count": 26
    },
    "ai-vocab": {
      "count": 8
    },
    "copula": {
      "count": 7
    },
    "prose-patterns": {
      "count": 32
    },
    "tics": {
      "count": 0
    }
  },
  "byCategory": {
    "dialect-divergence": 23,
    "curly-quote": 3,
    "ai-vocab-word": 6,
    "ai-vocab-phrase": 2,
    "possession-copula": 6,
    "locative-copula": 1,
    "same-sentence-repetition": 32
  },
  "findings": [
    {
      "scanner": "mechanical",
      "line": 37,
      "column": 171,
      "category": "dialect-divergence",
      "match": "analyse (UK)",
      "snippet": "runbook: \"Executive audit report for Dotfusion. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl",
      "rephrase_hint": "Neutral-English surface (writing-style.md §3): rephrase to avoid the US/UK divergent spelling \"analyse\" entirely - e.g. examine / review."
    },
    {
      "scanner": "copula",
      "line": 50,
      "column": 15,
      "category": "possession-copula",
      "match": "carries the",
      "snippet": "# therefore carries the AI sidecar pointer (the regulator-facing",
      "rephrase_hint": "Use \"has\" directly. \"X boasts four rooms\" -> \"X has four rooms\". \"Y features three engagement models\" -> \"Y has three engagement models\" or \"the three engagement models are A, B, C\"."
    },
    {
      "scanner": "prose-patterns",
      "line": 62,
      "column": 191,
      "category": "same-sentence-repetition",
      "match": "file (2x)",
      "snippet": "The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that pref",
      "rephrase_hint": "Distinctive content word \"file\" appears 2 times in one sentence (writing-style.md §6 \"No distinctive content word repeated in one sentence\"). Rephrase the second occurrence away. Canonical fix: \"The Gathering cohort closes when the cohort closes\" -> \"The seat at The Gathering closes when the cohort closes\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows."
    },
    {
      "scanner": "prose-patterns",
      "line": 62,
      "column": 276,
      "category": "same-sentence-repetition",
      "match": "deterministic (2x)",
      "snippet": "The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv",
      "rephrase_hint": "Distinctive content word \"deterministic\" appears 2 times in one sentence (writing-style.md §6 \"No distinctive content word repeated in one sentence\"). Rephrase the second occurrence away. Canonical fix: \"The Gathering cohort closes when the cohort closes\" -> \"The seat at The Gathering closes when the cohort closes\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows."
    },
    {
      "scanner": "copula",
      "line": 62,
      "column": 300,
      "category": "possession-copula",
      "match": "carries the",
      "snippet": "note: \"AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPaylo",
      "rephrase_hint": "Use \"has\" directly. \"X boasts four rooms\" -> \"X has four rooms\". \"Y features three engagement models\" -> \"Y has three engagement models\" or \"the three engagement models are A, B, C\"."
    },
    {
      "scanner": "prose-patterns",
      "line": 62,
      "column

Suggested next steps:

- Review the flagged AI-tells and mechanical prose issues in the final markdown before sending to the client. Worklist: prose-lint.json in the run results dir.

</details>

