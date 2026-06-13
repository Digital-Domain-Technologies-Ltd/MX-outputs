---
title: "Typo3 — Audit Gate Findings"
description: "Findings sidecar for the Typo3 audit on 2026-06-12. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
auditDate: "2026-06-12"
companion: "typo3-org-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 7
  inherits: ["typo3-org-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"1c607578f3f7","patternKey":"a5b8319d5121","timestamp":"2026-06-13T09:14:04.863Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"exaggeration","title":"Exaggeration / hyperbole: 1 instance","detail":"Exaggeration / hyperbole\n\nline 118: \"flawless\" - Across the audited set your pages deliver a smooth and engaging experience for visitors. Performance","suggestions":[],"lineRef":"line 118","provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:19:06.235Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"833beb10eead","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T09:18:45.661Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Canonical URL 92% but consistency_analysis says 100% (11/11)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/typo3.org/typo3-org-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:19:06.235Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"5d7e76f072e7","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T09:18:45.663Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Skip link 92% but consistency_analysis says 100% (11/11)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/typo3.org/typo3-org-report.md — the Cross-Page Consistency table's percentage for Skip link does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:19:06.235Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"01934462c40b","patternKey":"245f47636cbe","timestamp":"2026-06-13T09:18:46.381Z","severity":"warn","source":"check-cross-section-consistency.js","gateName":"cross-section-consistency","category":"cross-section-scope-mix","title":"Line 222: scope-mixing prose","detail":"Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: Across the audited set, your pages demonstrate a strong foundations in SEO and accessibility, with an overall SEO score of 75/100 and perfect compliance on accessibility (0 distinct WCAG codes). These strengths provide the groundwork for ta","suggestions":["Re-check the infill sources for each cited section.","If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:19:06.235Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"01934462c40b~1","patternKey":"245f47636cbe","timestamp":"2026-06-13T09:18:46.383Z","severity":"warn","source":"check-cross-section-consistency.js","gateName":"cross-section-consistency","category":"cross-section-scope-mix","title":"Line 652: scope-mixing prose","detail":"Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa","suggestions":["Re-check the infill sources for each cited section.","If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:19:06.235Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"ce1df85a4850","patternKey":"6128e1f99508","timestamp":"2026-06-13T09:18:46.467Z","severity":"error","source":"check-prose-score-binding.js","gateName":"check-prose-score-binding.js","category":"internal-contradiction","title":"Prose score for SEO contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/typo3.org/typo3-org-report.md:936","detail":"Narrative says SEO scored 74/100; the scorecard table says 75/100. The rewrite pass likely bound another dimension's number.\n\nLine 936: Content-pages SEO average: 74/100.","suggestions":["Correct the narrative to 75/100, or re-run the repair pass - the scorecard table is the canonical value."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:19:06.235Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f36f4de456d","patternKey":"60f5e9c9e807","timestamp":"2026-06-13T09:18:46.612Z","severity":"info","source":"audit-prose-lint.js","gateName":"prose-lint","category":"prose-quality","title":"Prose linter flagged 82 style finding(s) for review","detail":"Gate prose-lint (audit-prose-lint.js) returned non-zero. Output excerpt:\n\n{\n  \"report\": \"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/typo3.org/typo3-org-report.md\",\n  \"total\": 82,\n  \"neutralSurface\": true,\n  \"byScanner\": {\n    \"mechanical\": {\n      \"count\": 11\n    },\n    \"ai-vocab\": {\n      \"count\": 13\n    },\n    \"copula\": {\n      \"count\": 8\n    },\n    \"prose-patterns\": {\n      \"count\": 50\n    },\n    \"tics\": {\n      \"count\": 0\n    }\n  },\n  \"byCategory\": {\n    \"dialect-divergence\": 11,\n    \"ai-vocab-word\": 10,\n    \"ai-vocab-phrase\": 3,\n    \"possession-copula\": 6,\n    \"locative-copula\": 1,\n    \"abstract-object-locative\": 1,\n    \"same-sentence-repetition\": 48,\n    \"false-range\": 1,\n    \"meta-sentence\": 1\n  },\n  \"findings\": [\n    {\n      \"scanner\": \"mechanical\",\n      \"line\": 37,\n      \"column\": 167,\n      \"category\": \"dialect-divergence\",\n      \"match\": \"analyse (UK)\",\n      \"snippet\": \"runbook: \\\"Executive audit report for Typo3. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and\",\n      \"rephrase_hint\": \"Neutral-English surface (writing-style.md §3): rephrase to avoid the US/UK divergent spelling \\\"analyse\\\" entirely - e.g. examine / review.\"\n    },\n    {\n      \"scanner\": \"copula\",\n      \"line\": 50,\n      \"column\": 15,\n      \"category\": \"possession-copula\",\n      \"match\": \"carries the\",\n      \"snippet\": \"# therefore carries the AI sidecar pointer (the regulator-facing\",\n      \"rephrase_hint\": \"Use \\\"has\\\" directly. \\\"X boasts four rooms\\\" -> \\\"X has four rooms\\\". \\\"Y features three engagement models\\\" -> \\\"Y has three engagement models\\\" or \\\"the three engagement models are A, B, C\\\".\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 62,\n      \"column\": 191,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"file (2x)\",\n      \"snippet\": \"The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that pref\",\n      \"rephrase_hint\": \"Distinctive content word \\\"file\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -> \\\"The seat at The Gathering closes when the cohort closes\\\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows.\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 62,\n      \"column\": 276,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"deterministic (2x)\",\n      \"snippet\": \"The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv\",\n      \"rephrase_hint\": \"Distinctive content word \\\"deterministic\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -> \\\"The seat at The Gathering closes when the cohort closes\\\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows.\"\n    },\n    {\n      \"scanner\": \"copula\",\n      \"line\": 62,\n      \"column\": 300,\n      \"category\": \"possession-copula\",\n      \"match\": \"carries the\",\n      \"snippet\": \"note: \\\"AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPaylo\",\n      \"rephrase_hint\": \"Use \\\"has\\\" directly. \\\"X boasts four rooms\\\" -> \\\"X has four rooms\\\". \\\"Y features three engagement models\\\" -> \\\"Y has three engagement models\\\" or \\\"the three engagement models are A, B, C\\\".\"\n    },\n    {\n      \"scanne","suggestions":["Review the flagged AI-tells and mechanical prose issues in the final markdown before sending to the client. Worklist: prose-lint.json in the run results dir."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:19:06.235Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 7 findings (3 errors, 2 warnings, 2 infos) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Canonical URL 92% but consistency_analysis says 100% (11/11) | 2026-06-13T09:18:45Z |
| 2 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Skip link 92% but consistency_analysis says 100% (11/11) | 2026-06-13T09:18:45Z |
| 3 | check-prose-score-binding.js | internal-contradiction | Prose score for SEO contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/typo3.org/typo3-org-report.md:936 | 2026-06-13T09:18:46Z |

<details open><summary>Error detail (3)</summary>

**1. check-report-coherence.js - Cross-Page Consistency reports Canonical URL 92% but consistency_analysis says 100% (11/11)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/typo3.org/typo3-org-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**2. check-report-coherence.js - Cross-Page Consistency reports Skip link 92% but consistency_analysis says 100% (11/11)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/typo3.org/typo3-org-report.md — the Cross-Page Consistency table's percentage for Skip link does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**3. check-prose-score-binding.js - Prose score for SEO contradicts the scorecard at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/typo3.org/typo3-org-report.md:936**

Narrative says SEO scored 74/100; the scorecard table says 75/100. The rewrite pass likely bound another dimension's number.

Line 936: Content-pages SEO average: 74/100.

Suggested next steps:

- Correct the narrative to 75/100, or re-run the repair pass - the scorecard table is the canonical value.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | cross-section-consistency | cross-section-scope-mix | Line 222: scope-mixing prose | 2026-06-13T09:18:46Z |
| 2 | cross-section-consistency | cross-section-scope-mix | Line 652: scope-mixing prose | 2026-06-13T09:18:46Z |

<details open><summary>Warning detail (2)</summary>

**1. cross-section-consistency - Line 222: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: Across the audited set, your pages demonstrate a strong foundations in SEO and accessibility, with an overall SEO score of 75/100 and perfect compliance on accessibility (0 distinct WCAG codes). These strengths provide the groundwork for ta

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

**2. cross-section-consistency - Line 652: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | exaggeration | Exaggeration / hyperbole: 1 instance (line 118) | 2026-06-13T09:14:04Z |
| 2 | prose-lint | prose-quality | Prose linter flagged 82 style finding(s) for review | 2026-06-13T09:18:46Z |

<details open><summary>Info detail (2)</summary>

**1. tone - Exaggeration / hyperbole: 1 instance**

Exaggeration / hyperbole

line 118: "flawless" - Across the audited set your pages deliver a smooth and engaging experience for visitors. Performance

**2. prose-lint - Prose linter flagged 82 style finding(s) for review**

Gate prose-lint (audit-prose-lint.js) returned non-zero. Output excerpt:

{
  "report": "/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/typo3.org/typo3-org-report.md",
  "total": 82,
  "neutralSurface": true,
  "byScanner": {
    "mechanical": {
      "count": 11
    },
    "ai-vocab": {
      "count": 13
    },
    "copula": {
      "count": 8
    },
    "prose-patterns": {
      "count": 50
    },
    "tics": {
      "count": 0
    }
  },
  "byCategory": {
    "dialect-divergence": 11,
    "ai-vocab-word": 10,
    "ai-vocab-phrase": 3,
    "possession-copula": 6,
    "locative-copula": 1,
    "abstract-object-locative": 1,
    "same-sentence-repetition": 48,
    "false-range": 1,
    "meta-sentence": 1
  },
  "findings": [
    {
      "scanner": "mechanical",
      "line": 37,
      "column": 167,
      "category": "dialect-divergence",
      "match": "analyse (UK)",
      "snippet": "runbook: \"Executive audit report for Typo3. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and",
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
      "scanne

Suggested next steps:

- Review the flagged AI-tells and mechanical prose issues in the final markdown before sending to the client. Worklist: prose-lint.json in the run results dir.

</details>

