---
title: "Crowdfavorite — Audit Gate Findings"
description: "Findings sidecar for the Crowdfavorite audit on 2026-06-06. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-06
modified: 2026-06-06
auditDate: "2026-06-06"
companion: "crowdfavorite-com-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 6
  inherits: ["crowdfavorite-com-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"465590c62c54","patternKey":"ef93bf825f21","timestamp":"2026-06-06T09:51:35.077Z","severity":"warn","source":"check-report-scope.js","gateName":"sample-vs-total-scope","category":"scope-mis-statements","title":"Scope mis-statements remain after auto-repair: 1","detail":"Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:\n\ncheck-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.md\n  1 scope mis-statement(s).\n\n  [sitewide-inside-sampled-section] line 323\n    section: ## Findings  (line 142)\n    phrase:  \"site-wide\"\n    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c\n\n  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write \"across the audited set\" — write \"the sitemap declares\" or \"this file carries\". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write \"site-wide\" or \"across the entire site\" — write \"across the audited pages\" or \"on the audited set\".\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-06T09:55:22.547Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"c024888a0e81","patternKey":"41521b0601dd","timestamp":"2026-06-06T09:55:06.894Z","severity":"warn","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"inventory-mismatch","title":"Image inventory: 49 images in formats not named in prose","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.md — image_optimization.csv contains 568 images: 330 PNG, 76 JPEG, 1 WebP, 112 SVG, 49 other / unrecognised. Total of named formats is 519; 49 images are in a format the Appendix C narrative does not mention.","suggestions":["Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-06T09:55:22.547Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"833beb10eead","patternKey":"6de3a9c49e22","timestamp":"2026-06-06T09:55:06.895Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Canonical URL 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-06T09:55:22.547Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f9ca211a824","patternKey":"6de3a9c49e22","timestamp":"2026-06-06T09:55:06.895Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-06T09:55:22.547Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"34cde4ffef18","patternKey":"6de3a9c49e22","timestamp":"2026-06-06T09:55:06.896Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Twitter Card tags 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-06T09:55:22.547Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f36f4de456d","patternKey":"60f5e9c9e807","timestamp":"2026-06-06T09:55:07.677Z","severity":"info","source":"audit-prose-lint.js","gateName":"prose-lint","category":"prose-quality","title":"Prose linter flagged 25 style finding(s) for review","detail":"Gate prose-lint (audit-prose-lint.js) returned non-zero. Output excerpt:\n\n{\n  \"report\": \"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.md\",\n  \"total\": 25,\n  \"neutralSurface\": true,\n  \"byScanner\": {\n    \"mechanical\": {\n      \"count\": 16\n    },\n    \"ai-vocab\": {\n      \"count\": 1\n    },\n    \"copula\": {\n      \"count\": 2\n    },\n    \"prose-patterns\": {\n      \"count\": 6\n    },\n    \"tics\": {\n      \"count\": 0\n    }\n  },\n  \"byCategory\": {\n    \"dialect-divergence\": 13,\n    \"em-dash\": 3,\n    \"ai-vocab-phrase\": 1,\n    \"possession-copula\": 2,\n    \"same-sentence-repetition\": 6\n  },\n  \"findings\": [\n    {\n      \"scanner\": \"copula\",\n      \"line\": 40,\n      \"column\": 15,\n      \"category\": \"possession-copula\",\n      \"match\": \"carries the\",\n      \"snippet\": \"# therefore carries the AI sidecar pointer (the regulator-facing\",\n      \"rephrase_hint\": \"Use \\\"has\\\" directly. \\\"X boasts four rooms\\\" -> \\\"X has four rooms\\\". \\\"Y features three engagement models\\\" -> \\\"Y has three engagement models\\\" or \\\"the three engagement models are A, B, C\\\".\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 52,\n      \"column\": 191,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"file (2x)\",\n      \"snippet\": \"The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that pref\",\n      \"rephrase_hint\": \"Distinctive content word \\\"file\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -> \\\"The seat at The Gathering closes when the cohort closes\\\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows.\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 52,\n      \"column\": 276,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"deterministic (2x)\",\n      \"snippet\": \"The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv\",\n      \"rephrase_hint\": \"Distinctive content word \\\"deterministic\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -> \\\"The seat at The Gathering closes when the cohort closes\\\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows.\"\n    },\n    {\n      \"scanner\": \"copula\",\n      \"line\": 52,\n      \"column\": 300,\n      \"category\": \"possession-copula\",\n      \"match\": \"carries the\",\n      \"snippet\": \"note: \\\"AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPaylo\",\n      \"rephrase_hint\": \"Use \\\"has\\\" directly. \\\"X boasts four rooms\\\" -> \\\"X has four rooms\\\". \\\"Y features three engagement models\\\" -> \\\"Y has three engagement models\\\" or \\\"the three engagement models are A, B, C\\\".\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 52,\n      \"column\": 326,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"evidence (2x)\",\n      \"snippet\": \"The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv\",\n      \"rephrase_hint\": \"Distinctive content word \\\"evidence\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -","suggestions":["Review the flagged AI-tells and mechanical prose issues in the final markdown before sending to the client. Worklist: prose-lint.json in the run results dir."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-06T09:55:22.547Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 6 findings (3 errors, 2 warnings, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Canonical URL 91% but consistency_analysis says 100% (10/10) | 2026-06-06T09:55:06Z |
| 2 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10) | 2026-06-06T09:55:06Z |
| 3 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Twitter Card tags 91% but consistency_analysis says 100% (10/10) | 2026-06-06T09:55:06Z |

<details open><summary>Error detail (3)</summary>

**1. check-report-coherence.js - Cross-Page Consistency reports Canonical URL 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**2. check-report-coherence.js - Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**3. check-report-coherence.js - Cross-Page Consistency reports Twitter Card tags 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 1 | 2026-06-06T09:51:35Z |
| 2 | check-report-coherence.js | inventory-mismatch | Image inventory: 49 images in formats not named in prose | 2026-06-06T09:55:06Z |

<details open><summary>Warning detail (2)</summary>

**1. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 1**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.md
  1 scope mis-statement(s).

  [sitewide-inside-sampled-section] line 323
    section: ## Findings  (line 142)
    phrase:  "site-wide"
    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

**2. check-report-coherence.js - Image inventory: 49 images in formats not named in prose**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.md — image_optimization.csv contains 568 images: 330 PNG, 76 JPEG, 1 WebP, 112 SVG, 49 other / unrecognised. Total of named formats is 519; 49 images are in a format the Appendix C narrative does not mention.

Suggested next steps:

- Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | prose-lint | prose-quality | Prose linter flagged 25 style finding(s) for review | 2026-06-06T09:55:07Z |

<details open><summary>Info detail (1)</summary>

**1. prose-lint - Prose linter flagged 25 style finding(s) for review**

Gate prose-lint (audit-prose-lint.js) returned non-zero. Output excerpt:

{
  "report": "/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-06/crowdfavorite.com/crowdfavorite-com-report.md",
  "total": 25,
  "neutralSurface": true,
  "byScanner": {
    "mechanical": {
      "count": 16
    },
    "ai-vocab": {
      "count": 1
    },
    "copula": {
      "count": 2
    },
    "prose-patterns": {
      "count": 6
    },
    "tics": {
      "count": 0
    }
  },
  "byCategory": {
    "dialect-divergence": 13,
    "em-dash": 3,
    "ai-vocab-phrase": 1,
    "possession-copula": 2,
    "same-sentence-repetition": 6
  },
  "findings": [
    {
      "scanner": "copula",
      "line": 40,
      "column": 15,
      "category": "possession-copula",
      "match": "carries the",
      "snippet": "# therefore carries the AI sidecar pointer (the regulator-facing",
      "rephrase_hint": "Use \"has\" directly. \"X boasts four rooms\" -> \"X has four rooms\". \"Y features three engagement models\" -> \"Y has three engagement models\" or \"the three engagement models are A, B, C\"."
    },
    {
      "scanner": "prose-patterns",
      "line": 52,
      "column": 191,
      "category": "same-sentence-repetition",
      "match": "file (2x)",
      "snippet": "The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that pref",
      "rephrase_hint": "Distinctive content word \"file\" appears 2 times in one sentence (writing-style.md §6 \"No distinctive content word repeated in one sentence\"). Rephrase the second occurrence away. Canonical fix: \"The Gathering cohort closes when the cohort closes\" -> \"The seat at The Gathering closes when the cohort closes\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows."
    },
    {
      "scanner": "prose-patterns",
      "line": 52,
      "column": 276,
      "category": "same-sentence-repetition",
      "match": "deterministic (2x)",
      "snippet": "The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv",
      "rephrase_hint": "Distinctive content word \"deterministic\" appears 2 times in one sentence (writing-style.md §6 \"No distinctive content word repeated in one sentence\"). Rephrase the second occurrence away. Canonical fix: \"The Gathering cohort closes when the cohort closes\" -> \"The seat at The Gathering closes when the cohort closes\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows."
    },
    {
      "scanner": "copula",
      "line": 52,
      "column": 300,
      "category": "possession-copula",
      "match": "carries the",
      "snippet": "note: \"AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPaylo",
      "rephrase_hint": "Use \"has\" directly. \"X boasts four rooms\" -> \"X has four rooms\". \"Y features three engagement models\" -> \"Y has three engagement models\" or \"the three engagement models are A, B, C\"."
    },
    {
      "scanner": "prose-patterns",
      "line": 52,
      "column": 326,
      "category": "same-sentence-repetition",
      "match": "evidence (2x)",
      "snippet": "The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv",
      "rephrase_hint": "Distinctive content word \"evidence\" appears 2 times in one sentence (writing-style.md §6 \"No distinctive content word repeated in one sentence\"). Rephrase the second occurrence away. Canonical fix: \"The Gathering cohort closes when the cohort closes\" -

Suggested next steps:

- Review the flagged AI-tells and mechanical prose issues in the final markdown before sending to the client. Worklist: prose-lint.json in the run results dir.

</details>

