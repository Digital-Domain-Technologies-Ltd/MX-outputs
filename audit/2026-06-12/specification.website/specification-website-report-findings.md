---
title: "Specification — Audit Gate Findings"
description: "Findings sidecar for the Specification audit on 2026-06-12. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
auditDate: "2026-06-12"
companion: "specification-website-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 8
  inherits: ["specification-website-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"1c607578f3f7","patternKey":"a5b8319d5121","timestamp":"2026-06-13T08:59:50.884Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"exaggeration","title":"Exaggeration / hyperbole: 1 instance","detail":"Exaggeration / hyperbole\n\nline 114: \"flawless\" - We found that the audited pages deliver a strong user experience. Performance is excellent, with con","suggestions":[],"lineRef":"line 114","provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:05:14.776Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"833beb10eead","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T09:05:04.897Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Canonical URL 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/specification.website/specification-website-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:05:14.776Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"5d7e76f072e7","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T09:05:04.899Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Skip link 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/specification.website/specification-website-report.md — the Cross-Page Consistency table's percentage for Skip link does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:05:14.776Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f9ca211a824","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T09:05:04.899Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/specification.website/specification-website-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:05:14.776Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"34cde4ffef18","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T09:05:04.899Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports Twitter Card tags 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/specification.website/specification-website-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:05:14.776Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"f1a3a9e2081f","patternKey":"6de3a9c49e22","timestamp":"2026-06-13T09:05:04.899Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"marker-section-contradiction","title":"Cross-Page Consistency reports llms.txt link tag 91% but consistency_analysis says 100% (10/10)","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/specification.website/specification-website-report.md — the Cross-Page Consistency table's percentage for llms.txt link tag does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.","suggestions":["Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:05:14.776Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"01934462c40b","patternKey":"245f47636cbe","timestamp":"2026-06-13T09:05:05.613Z","severity":"warn","source":"check-cross-section-consistency.js","gateName":"cross-section-consistency","category":"cross-section-scope-mix","title":"Line 611: scope-mixing prose","detail":"Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa","suggestions":["Re-check the infill sources for each cited section.","If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:05:14.776Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"1f36f4de456d","patternKey":"60f5e9c9e807","timestamp":"2026-06-13T09:05:05.829Z","severity":"info","source":"audit-prose-lint.js","gateName":"prose-lint","category":"prose-quality","title":"Prose linter flagged 49 style finding(s) for review","detail":"Gate prose-lint (audit-prose-lint.js) returned non-zero. Output excerpt:\n\n{\n  \"report\": \"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/specification.website/specification-website-report.md\",\n  \"total\": 49,\n  \"neutralSurface\": true,\n  \"byScanner\": {\n    \"mechanical\": {\n      \"count\": 11\n    },\n    \"ai-vocab\": {\n      \"count\": 6\n    },\n    \"copula\": {\n      \"count\": 4\n    },\n    \"prose-patterns\": {\n      \"count\": 28\n    },\n    \"tics\": {\n      \"count\": 0\n    }\n  },\n  \"byCategory\": {\n    \"dialect-divergence\": 10,\n    \"curly-quote\": 1,\n    \"ai-vocab-phrase\": 2,\n    \"ai-vocab-word\": 4,\n    \"possession-copula\": 4,\n    \"same-sentence-repetition\": 28\n  },\n  \"findings\": [\n    {\n      \"scanner\": \"mechanical\",\n      \"line\": 37,\n      \"column\": 175,\n      \"category\": \"dialect-divergence\",\n      \"match\": \"analyse (UK)\",\n      \"snippet\": \"runbook: \\\"Executive audit report for Specification. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-c\",\n      \"rephrase_hint\": \"Neutral-English surface (writing-style.md §3): rephrase to avoid the US/UK divergent spelling \\\"analyse\\\" entirely - e.g. examine / review.\"\n    },\n    {\n      \"scanner\": \"copula\",\n      \"line\": 50,\n      \"column\": 15,\n      \"category\": \"possession-copula\",\n      \"match\": \"carries the\",\n      \"snippet\": \"# therefore carries the AI sidecar pointer (the regulator-facing\",\n      \"rephrase_hint\": \"Use \\\"has\\\" directly. \\\"X boasts four rooms\\\" -> \\\"X has four rooms\\\". \\\"Y features three engagement models\\\" -> \\\"Y has three engagement models\\\" or \\\"the three engagement models are A, B, C\\\".\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 62,\n      \"column\": 191,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"file (2x)\",\n      \"snippet\": \"The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that pref\",\n      \"rephrase_hint\": \"Distinctive content word \\\"file\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -> \\\"The seat at The Gathering closes when the cohort closes\\\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows.\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 62,\n      \"column\": 276,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"deterministic (2x)\",\n      \"snippet\": \"The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv\",\n      \"rephrase_hint\": \"Distinctive content word \\\"deterministic\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -> \\\"The seat at The Gathering closes when the cohort closes\\\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows.\"\n    },\n    {\n      \"scanner\": \"copula\",\n      \"line\": 62,\n      \"column\": 300,\n      \"category\": \"possession-copula\",\n      \"match\": \"carries the\",\n      \"snippet\": \"note: \\\"AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPaylo\",\n      \"rephrase_hint\": \"Use \\\"has\\\" directly. \\\"X boasts four rooms\\\" -> \\\"X has four rooms\\\". \\\"Y features three engagement models\\\" -> \\\"Y has three engagement models\\\" or \\\"the three engagement models are A, B, C\\\".\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 62,\n      \"column\": 326,\n  ","suggestions":["Review the flagged AI-tells and mechanical prose issues in the final markdown before sending to the client. Worklist: prose-lint.json in the run results dir."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-13T09:05:14.776Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 8 findings (5 errors, 1 warning, 2 infos) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Canonical URL 91% but consistency_analysis says 100% (10/10) | 2026-06-13T09:05:04Z |
| 2 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Skip link 91% but consistency_analysis says 100% (10/10) | 2026-06-13T09:05:04Z |
| 3 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10) | 2026-06-13T09:05:04Z |
| 4 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Twitter Card tags 91% but consistency_analysis says 100% (10/10) | 2026-06-13T09:05:04Z |
| 5 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports llms.txt link tag 91% but consistency_analysis says 100% (10/10) | 2026-06-13T09:05:04Z |

<details open><summary>Error detail (5)</summary>

**1. check-report-coherence.js - Cross-Page Consistency reports Canonical URL 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/specification.website/specification-website-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**2. check-report-coherence.js - Cross-Page Consistency reports Skip link 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/specification.website/specification-website-report.md — the Cross-Page Consistency table's percentage for Skip link does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**3. check-report-coherence.js - Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/specification.website/specification-website-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**4. check-report-coherence.js - Cross-Page Consistency reports Twitter Card tags 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/specification.website/specification-website-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**5. check-report-coherence.js - Cross-Page Consistency reports llms.txt link tag 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/specification.website/specification-website-report.md — the Cross-Page Consistency table's percentage for llms.txt link tag does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | cross-section-consistency | cross-section-scope-mix | Line 611: scope-mixing prose | 2026-06-13T09:05:05Z |

<details open><summary>Warning detail (1)</summary>

**1. cross-section-consistency - Line 611: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: The level is a site-wide, conservative classification: every Schema.org block across the audited pages must clear a level's bar before this site claims it, so a handful of thin blocks or pages without markup caps the level even when most pa

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | exaggeration | Exaggeration / hyperbole: 1 instance (line 114) | 2026-06-13T08:59:50Z |
| 2 | prose-lint | prose-quality | Prose linter flagged 49 style finding(s) for review | 2026-06-13T09:05:05Z |

<details open><summary>Info detail (2)</summary>

**1. tone - Exaggeration / hyperbole: 1 instance**

Exaggeration / hyperbole

line 114: "flawless" - We found that the audited pages deliver a strong user experience. Performance is excellent, with con

**2. prose-lint - Prose linter flagged 49 style finding(s) for review**

Gate prose-lint (audit-prose-lint.js) returned non-zero. Output excerpt:

{
  "report": "/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/specification.website/specification-website-report.md",
  "total": 49,
  "neutralSurface": true,
  "byScanner": {
    "mechanical": {
      "count": 11
    },
    "ai-vocab": {
      "count": 6
    },
    "copula": {
      "count": 4
    },
    "prose-patterns": {
      "count": 28
    },
    "tics": {
      "count": 0
    }
  },
  "byCategory": {
    "dialect-divergence": 10,
    "curly-quote": 1,
    "ai-vocab-phrase": 2,
    "ai-vocab-word": 4,
    "possession-copula": 4,
    "same-sentence-repetition": 28
  },
  "findings": [
    {
      "scanner": "mechanical",
      "line": 37,
      "column": 175,
      "category": "dialect-divergence",
      "match": "analyse (UK)",
      "snippet": "runbook: \"Executive audit report for Specification. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-c",
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
      "column": 326,

Suggested next steps:

- Review the flagged AI-tells and mechanical prose issues in the final markdown before sending to the client. Worklist: prose-lint.json in the run results dir.

</details>

