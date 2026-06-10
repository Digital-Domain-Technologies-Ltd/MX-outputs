---
title: "Sibotacademy — Audit Gate Findings"
description: "Findings sidecar for the Sibotacademy audit on 2026-06-09. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-09
modified: 2026-06-09
auditDate: "2026-06-09"
companion: "sibotacademy-pl-en-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 10
  inherits: ["sibotacademy-pl-en-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"27339782a086","patternKey":"7ae7317cf2f3","timestamp":"2026-06-10T06:53:57.280Z","severity":"warn","source":"check-report-voice.js","gateName":"voice-consistency","category":"mixed-voice-sections","title":"Mixed-voice section(s) remain after auto-repair: 1","detail":"Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:\n\ncheck-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md\n  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person (\"the site does X\") with first-person (\"we found Y\") inside the same section reads as drafted-by-committee.\n\n  ## Findings  (line 150)\n    first-person tokens: 3 (lines 154, 315, 330)\n    third-person markers: 3 (lines 311, 315, 330)\n\n  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice (\"we\") for our work and second-person (\"your site\") for the audited site; scorecards and appendices use third-person.\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-10T07:02:18.183Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"465590c62c54","patternKey":"ef93bf825f21","timestamp":"2026-06-10T06:53:57.280Z","severity":"warn","source":"check-report-scope.js","gateName":"sample-vs-total-scope","category":"scope-mis-statements","title":"Scope mis-statements remain after auto-repair: 6","detail":"Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:\n\ncheck-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md\n  6 scope mis-statement(s).\n\n  [sitewide-inside-sampled-section] line 236\n    section: ## Findings  (line 150)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options (Site-wide). Missing security headers\n\n  [sitewide-inside-sampled-section] line 240\n    section: ## Findings  (line 150)\n    phrase:  \"site-wide\"\n    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c\n\n  [sitewide-inside-sampled-section] line 296\n    section: ## Findings  (line 150)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Intended audience not machine-declared (child audience inferred from content) (Site-wide). Agents must infe\n\n  [sitewide-inside-sampled-section] line 311\n    section: ## Findings  (line 150)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Age-assurance signal not machine-detectable (child audience) (Site-wide). An agent cannot tell whether age \n\n  [sitewide-inside-sampled-section] line 326\n    section: ## Findings  (line 150)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Consent signal not machine-detectable on first visit (child audience) (Site-wide). An agent cannot confirm \n\n  [sampling-inside-sitewide-section] line 438\n    section: ## Discovery Files  (line 408)\n    phrase:  \"per-page\"\n    line:    The sitemap declares 22 URLs and grades Partial. Lastmod is present but identical across entries, so it reads as a singl\n\n  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write \"across the audited set\" — write \"the sitemap declares\" or \"this file carries\". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write \"site-wide\" or \"across the entire site\" — write \"across the audited pages\" or \"on the audited set\".\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-10T07:02:18.183Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"c024888a0e81","patternKey":"41521b0601dd","timestamp":"2026-06-10T07:00:07.232Z","severity":"warn","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"inventory-mismatch","title":"Image inventory: 4 images in formats not named in prose","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md — image_optimization.csv contains 83 images: 8 PNG, 0 JPEG, 71 WebP, 0 SVG, 4 other / unrecognised. Total of named formats is 79; 4 images are in a format the Appendix C narrative does not mention.","suggestions":["Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-10T07:02:18.183Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"a7f087cdb106","patternKey":"321914741c31","timestamp":"2026-06-10T07:00:07.234Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"placeholder-leak","title":"1 unresolved placeholder token(s) leaked into the final report: 0","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md — 1 placeholder leaks at lines: 801([0]). Each one indicates an infill handler that did not match its template anchor, or a handler that returned empty for an expected field.","suggestions":["For each token, grep infill-report.js and tableHandlers/ for the replacement code path. Verify the template text matches the regex."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-10T07:02:18.183Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"68e3dfd20413","patternKey":"356e8b18815c","timestamp":"2026-06-10T07:00:07.234Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"construction-path-leak","title":"construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md:28","detail":"Internal script path \"scripts/audit-*.js\" leaked.\n\nLine 28: runbook: \"Executive audit report for Sibotacademy. Focus on the highest-leverage MX opportunities surfaced by the audit. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outpu","suggestions":["Rewrite the offending sentence to remove the leaked phrase."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-10T07:02:18.183Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"68e3dfd20413~1","patternKey":"356e8b18815c","timestamp":"2026-06-10T07:00:07.234Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"construction-path-leak","title":"construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md:30","detail":"Internal script path \"scripts/audit-*.js\" leaked.\n\nLine 30: command: \"node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md\"","suggestions":["Rewrite the offending sentence to remove the leaked phrase."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-10T07:02:18.183Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"833beb10eead","patternKey":"6de3a9c49e22","timestamp":"2026-06-10T07:00:07.234Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Canonical URL 64% but consistency_analysis says 70% (7/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-10T07:02:18.183Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"5d7e76f072e7","patternKey":"6de3a9c49e22","timestamp":"2026-06-10T07:00:07.235Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Skip link 64% but consistency_analysis says 70% (7/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md — the Cross-Page Consistency table's percentage for Skip link does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-10T07:02:18.183Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f9ca211a824","patternKey":"6de3a9c49e22","timestamp":"2026-06-10T07:00:07.235Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-10T07:02:18.183Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f36f4de456d","patternKey":"60f5e9c9e807","timestamp":"2026-06-10T07:00:08.087Z","severity":"info","source":"audit-prose-lint.js","gateName":"prose-lint","category":"prose-quality","title":"Prose linter flagged 85 style finding(s) for review","detail":"Gate prose-lint (audit-prose-lint.js) returned non-zero. Output excerpt:\n\n{\n  \"report\": \"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md\",\n  \"total\": 85,\n  \"neutralSurface\": true,\n  \"byScanner\": {\n    \"mechanical\": {\n      \"count\": 17\n    },\n    \"ai-vocab\": {\n      \"count\": 8\n    },\n    \"copula\": {\n      \"count\": 11\n    },\n    \"prose-patterns\": {\n      \"count\": 49\n    },\n    \"tics\": {\n      \"count\": 0\n    }\n  },\n  \"byCategory\": {\n    \"curly-quote\": 2,\n    \"dialect-divergence\": 15,\n    \"ai-vocab-word\": 5,\n    \"ai-vocab-phrase\": 3,\n    \"possession-copula\": 8,\n    \"locative-copula\": 2,\n    \"abstract-object-locative\": 1,\n    \"same-sentence-repetition\": 48,\n    \"meta-sentence\": 1\n  },\n  \"findings\": [\n    {\n      \"scanner\": \"copula\",\n      \"line\": 41,\n      \"column\": 15,\n      \"category\": \"possession-copula\",\n      \"match\": \"carries the\",\n      \"snippet\": \"# therefore carries the AI sidecar pointer (the regulator-facing\",\n      \"rephrase_hint\": \"Use \\\"has\\\" directly. \\\"X boasts four rooms\\\" -> \\\"X has four rooms\\\". \\\"Y features three engagement models\\\" -> \\\"Y has three engagement models\\\" or \\\"the three engagement models are A, B, C\\\".\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 53,\n      \"column\": 191,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"file (2x)\",\n      \"snippet\": \"The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that pref\",\n      \"rephrase_hint\": \"Distinctive content word \\\"file\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -> \\\"The seat at The Gathering closes when the cohort closes\\\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows.\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 53,\n      \"column\": 276,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"deterministic (2x)\",\n      \"snippet\": \"The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv\",\n      \"rephrase_hint\": \"Distinctive content word \\\"deterministic\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -> \\\"The seat at The Gathering closes when the cohort closes\\\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows.\"\n    },\n    {\n      \"scanner\": \"copula\",\n      \"line\": 53,\n      \"column\": 300,\n      \"category\": \"possession-copula\",\n      \"match\": \"carries the\",\n      \"snippet\": \"note: \\\"AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPaylo\",\n      \"rephrase_hint\": \"Use \\\"has\\\" directly. \\\"X boasts four rooms\\\" -> \\\"X has four rooms\\\". \\\"Y features three engagement models\\\" -> \\\"Y has three engagement models\\\" or \\\"the three engagement models are A, B, C\\\".\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 53,\n      \"column\": 326,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"evidence (2x)\",\n      \"snippet\": \"The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv\",\n      \"rephrase_hint\": \"Distinctive content word \\\"evidence\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sen","suggestions":["Review the flagged AI-tells and mechanical prose issues in the final markdown before sending to the client. Worklist: prose-lint.json in the run results dir."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-10T07:02:18.183Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 10 findings (6 errors, 3 warnings, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-report-coherence.js | placeholder-leak | 1 unresolved placeholder token(s) leaked into the final report: 0 | 2026-06-10T07:00:07Z |
| 2 | check-report-coherence.js | construction-path-leak | construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md:28 | 2026-06-10T07:00:07Z |
| 3 | check-report-coherence.js | construction-path-leak | construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md:30 | 2026-06-10T07:00:07Z |
| 4 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Canonical URL 64% but consistency_analysis says 70% (7/10) | 2026-06-10T07:00:07Z |
| 5 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Skip link 64% but consistency_analysis says 70% (7/10) | 2026-06-10T07:00:07Z |
| 6 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10) | 2026-06-10T07:00:07Z |

<details open><summary>Error detail (6)</summary>

**1. check-report-coherence.js - 1 unresolved placeholder token(s) leaked into the final report: 0**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md — 1 placeholder leaks at lines: 801([0]). Each one indicates an infill handler that did not match its template anchor, or a handler that returned empty for an expected field.

Suggested next steps:

- For each token, grep infill-report.js and tableHandlers/ for the replacement code path. Verify the template text matches the regex.

**2. check-report-coherence.js - construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md:28**

Internal script path "scripts/audit-*.js" leaked.

Line 28: runbook: "Executive audit report for Sibotacademy. Focus on the highest-leverage MX opportunities surfaced by the audit. Regenerate the tagged PDF with 'node scripts/audit-pipeline.js --gates mx-outpu

Suggested next steps:

- Rewrite the offending sentence to remove the leaked phrase.

**3. check-report-coherence.js - construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md:30**

Internal script path "scripts/audit-*.js" leaked.

Line 30: command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md"

Suggested next steps:

- Rewrite the offending sentence to remove the leaked phrase.

**4. check-report-coherence.js - Cross-Page Consistency reports Canonical URL 64% but consistency_analysis says 70% (7/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**5. check-report-coherence.js - Cross-Page Consistency reports Skip link 64% but consistency_analysis says 70% (7/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md — the Cross-Page Consistency table's percentage for Skip link does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**6. check-report-coherence.js - Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | voice-consistency | mixed-voice-sections | Mixed-voice section(s) remain after auto-repair: 1 | 2026-06-10T06:53:57Z |
| 2 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 6 | 2026-06-10T06:53:57Z |
| 3 | check-report-coherence.js | inventory-mismatch | Image inventory: 4 images in formats not named in prose | 2026-06-10T07:00:07Z |

<details open><summary>Warning detail (3)</summary>

**1. voice-consistency - Mixed-voice section(s) remain after auto-repair: 1**

Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:

check-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md
  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person ("the site does X") with first-person ("we found Y") inside the same section reads as drafted-by-committee.

  ## Findings  (line 150)
    first-person tokens: 3 (lines 154, 315, 330)
    third-person markers: 3 (lines 311, 315, 330)

  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice ("we") for our work and second-person ("your site") for the audited site; scorecards and appendices use third-person.

**2. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 6**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md
  6 scope mis-statement(s).

  [sitewide-inside-sampled-section] line 236
    section: ## Findings  (line 150)
    phrase:  "Site-wide"
    line:    **Finding:** Security headers absent: CSP, X-Frame-Options, X-Content-Type-Options (Site-wide). Missing security headers

  [sitewide-inside-sampled-section] line 240
    section: ## Findings  (line 150)
    phrase:  "site-wide"
    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c

  [sitewide-inside-sampled-section] line 296
    section: ## Findings  (line 150)
    phrase:  "Site-wide"
    line:    **Finding:** Intended audience not machine-declared (child audience inferred from content) (Site-wide). Agents must infe

  [sitewide-inside-sampled-section] line 311
    section: ## Findings  (line 150)
    phrase:  "Site-wide"
    line:    **Finding:** Age-assurance signal not machine-detectable (child audience) (Site-wide). An agent cannot tell whether age 

  [sitewide-inside-sampled-section] line 326
    section: ## Findings  (line 150)
    phrase:  "Site-wide"
    line:    **Finding:** Consent signal not machine-detectable on first visit (child audience) (Site-wide). An agent cannot confirm 

  [sampling-inside-sitewide-section] line 438
    section: ## Discovery Files  (line 408)
    phrase:  "per-page"
    line:    The sitemap declares 22 URLs and grades Partial. Lastmod is present but identical across entries, so it reads as a singl

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

**3. check-report-coherence.js - Image inventory: 4 images in formats not named in prose**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md — image_optimization.csv contains 83 images: 8 PNG, 0 JPEG, 71 WebP, 0 SVG, 4 other / unrecognised. Total of named formats is 79; 4 images are in a format the Appendix C narrative does not mention.

Suggested next steps:

- Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | prose-lint | prose-quality | Prose linter flagged 85 style finding(s) for review | 2026-06-10T07:00:08Z |

<details open><summary>Info detail (1)</summary>

**1. prose-lint - Prose linter flagged 85 style finding(s) for review**

Gate prose-lint (audit-prose-lint.js) returned non-zero. Output excerpt:

{
  "report": "/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-09/sibotacademy.pl-en/sibotacademy-pl-en-report.md",
  "total": 85,
  "neutralSurface": true,
  "byScanner": {
    "mechanical": {
      "count": 17
    },
    "ai-vocab": {
      "count": 8
    },
    "copula": {
      "count": 11
    },
    "prose-patterns": {
      "count": 49
    },
    "tics": {
      "count": 0
    }
  },
  "byCategory": {
    "curly-quote": 2,
    "dialect-divergence": 15,
    "ai-vocab-word": 5,
    "ai-vocab-phrase": 3,
    "possession-copula": 8,
    "locative-copula": 2,
    "abstract-object-locative": 1,
    "same-sentence-repetition": 48,
    "meta-sentence": 1
  },
  "findings": [
    {
      "scanner": "copula",
      "line": 41,
      "column": 15,
      "category": "possession-copula",
      "match": "carries the",
      "snippet": "# therefore carries the AI sidecar pointer (the regulator-facing",
      "rephrase_hint": "Use \"has\" directly. \"X boasts four rooms\" -> \"X has four rooms\". \"Y features three engagement models\" -> \"Y has three engagement models\" or \"the three engagement models are A, B, C\"."
    },
    {
      "scanner": "prose-patterns",
      "line": 53,
      "column": 191,
      "category": "same-sentence-repetition",
      "match": "file (2x)",
      "snippet": "The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that pref",
      "rephrase_hint": "Distinctive content word \"file\" appears 2 times in one sentence (writing-style.md §6 \"No distinctive content word repeated in one sentence\"). Rephrase the second occurrence away. Canonical fix: \"The Gathering cohort closes when the cohort closes\" -> \"The seat at The Gathering closes when the cohort closes\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows."
    },
    {
      "scanner": "prose-patterns",
      "line": 53,
      "column": 276,
      "category": "same-sentence-repetition",
      "match": "deterministic (2x)",
      "snippet": "The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv",
      "rephrase_hint": "Distinctive content word \"deterministic\" appears 2 times in one sentence (writing-style.md §6 \"No distinctive content word repeated in one sentence\"). Rephrase the second occurrence away. Canonical fix: \"The Gathering cohort closes when the cohort closes\" -> \"The seat at The Gathering closes when the cohort closes\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows."
    },
    {
      "scanner": "copula",
      "line": 53,
      "column": 300,
      "category": "possession-copula",
      "match": "carries the",
      "snippet": "note: \"AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPaylo",
      "rephrase_hint": "Use \"has\" directly. \"X boasts four rooms\" -> \"X has four rooms\". \"Y features three engagement models\" -> \"Y has three engagement models\" or \"the three engagement models are A, B, C\"."
    },
    {
      "scanner": "prose-patterns",
      "line": 53,
      "column": 326,
      "category": "same-sentence-repetition",
      "match": "evidence (2x)",
      "snippet": "The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv",
      "rephrase_hint": "Distinctive content word \"evidence\" appears 2 times in one sentence (writing-style.md §6 \"No distinctive content word repeated in one sen

Suggested next steps:

- Review the flagged AI-tells and mechanical prose issues in the final markdown before sending to the client. Worklist: prose-lint.json in the run results dir.

</details>

