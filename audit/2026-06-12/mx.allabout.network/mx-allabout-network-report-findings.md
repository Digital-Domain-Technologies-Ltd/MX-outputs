---
title: "Mx Allabout — Audit Gate Findings"
description: "Findings sidecar for the Mx Allabout audit on 2026-06-12. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
auditDate: "2026-06-12"
companion: "mx-allabout-network-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 8
  inherits: ["mx-allabout-network-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"1c607578f3f7","patternKey":"a5b8319d5121","timestamp":"2026-06-12T10:04:09.551Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"exaggeration","title":"Exaggeration / hyperbole: 1 instance","detail":"Exaggeration / hyperbole\n\nline 136: \"flawless\" - Across the audited set, the pages deliver an excellent experience for human visitors, with fast load","suggestions":[],"lineRef":"line 136","provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T10:11:29.465Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"59f0fc04cf41","patternKey":"337934947854","timestamp":"2026-06-12T10:04:09.553Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"bogus-html-placeholder","title":"Bogus HTML-tag placeholders (use {name} not <name>): 1 instance","detail":"Bogus HTML-tag placeholders (use {name} not <name>)\n\nline 784: \"<slug> → {slug}\" - | `/blog/<slug>` | 69 | 0.27 | 0.022 | 4.62 |","suggestions":[],"lineRef":"line 784","provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T10:11:29.465Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"465590c62c54","patternKey":"ef93bf825f21","timestamp":"2026-06-12T10:04:09.713Z","severity":"warn","source":"check-report-scope.js","gateName":"sample-vs-total-scope","category":"scope-mis-statements","title":"Scope mis-statements remain after auto-repair: 2","detail":"Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:\n\ncheck-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md\n  2 scope mis-statement(s).\n\n  [sitewide-inside-sampled-section] line 260\n    section: ## Findings  (line 175)\n    phrase:  \"Site-wide\"\n    line:    **Finding:** Security headers absent: HSTS, CSP, X-Frame-Options, X-Content-Type-Options (Site-wide). Missing security h\n\n  [sitewide-inside-sampled-section] line 264\n    section: ## Findings  (line 175)\n    phrase:  \"site-wide\"\n    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c\n\n  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write \"across the audited set\" — write \"the sitemap declares\" or \"this file carries\". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write \"site-wide\" or \"across the entire site\" — write \"across the audited pages\" or \"on the audited set\".\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T10:11:29.465Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"49636c6e981a","patternKey":"9cabeb757220","timestamp":"2026-06-12T10:04:11.769Z","severity":"warn","source":"verify-audit-report.js","gateName":"deterministic-verifier","category":"unverified-claims","title":"1 claim could not be verified against source data","detail":"Deterministic verifier scanned numeric, URL, HTML-snippet, positional, and behavioural claims in the report. The entries below did not match the source CSV / JSON / cached HTML and need a reviewer's eye.\n\nline 697: Numeric 145 (145) not found in any results CSV / JSON","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T10:11:29.465Z","outcome":"skipped"}],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"68e3dfd20413","patternKey":"356e8b18815c","timestamp":"2026-06-12T10:10:32.403Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"construction-path-leak","title":"construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md:13","detail":"Internal script path \"scripts/audit-*.js\" leaked.\n\nLine 13: auditCommand: \"node scripts/audit-pipeline.js https://mx.allabout.network --pages -1 --date 2026-06-12\"","suggestions":["Rewrite the offending sentence to remove the leaked phrase."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T10:11:29.465Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"68e3dfd20413~1","patternKey":"356e8b18815c","timestamp":"2026-06-12T10:10:32.405Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"construction-path-leak","title":"construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md:32","detail":"Internal script path \"scripts/audit-*.js\" leaked.\n\nLine 32: runbook: \"Executive audit report for Mx Allabout. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in t","suggestions":["Rewrite the offending sentence to remove the leaked phrase."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T10:11:29.465Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"68e3dfd20413~2","patternKey":"356e8b18815c","timestamp":"2026-06-12T10:10:32.405Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"construction-path-leak","title":"construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md:34","detail":"Internal script path \"scripts/audit-*.js\" leaked.\n\nLine 34: command: \"node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md\"","suggestions":["Rewrite the offending sentence to remove the leaked phrase."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T10:11:29.465Z","outcome":"skipped"}],"x-mx-priority":"high","firstSeen":null,"occurrences":null},{"instanceId":"1f36f4de456d","patternKey":"60f5e9c9e807","timestamp":"2026-06-12T10:10:33.260Z","severity":"info","source":"audit-prose-lint.js","gateName":"prose-lint","category":"prose-quality","title":"Prose linter flagged 69 style finding(s) for review","detail":"Gate prose-lint (audit-prose-lint.js) returned non-zero. Output excerpt:\n\n{\n  \"report\": \"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md\",\n  \"total\": 69,\n  \"neutralSurface\": true,\n  \"byScanner\": {\n    \"mechanical\": {\n      \"count\": 31\n    },\n    \"ai-vocab\": {\n      \"count\": 7\n    },\n    \"copula\": {\n      \"count\": 6\n    },\n    \"prose-patterns\": {\n      \"count\": 25\n    },\n    \"tics\": {\n      \"count\": 0\n    }\n  },\n  \"byCategory\": {\n    \"dialect-divergence\": 31,\n    \"ai-vocab-word\": 5,\n    \"ai-vocab-phrase\": 2,\n    \"possession-copula\": 5,\n    \"locative-copula\": 1,\n    \"same-sentence-repetition\": 25\n  },\n  \"findings\": [\n    {\n      \"scanner\": \"mechanical\",\n      \"line\": 32,\n      \"column\": 173,\n      \"category\": \"dialect-divergence\",\n      \"match\": \"analyse (UK)\",\n      \"snippet\": \"runbook: \\\"Executive audit report for Mx Allabout. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-cra\",\n      \"rephrase_hint\": \"Neutral-English surface (writing-style.md §3): rephrase to avoid the US/UK divergent spelling \\\"analyse\\\" entirely - e.g. examine / review.\"\n    },\n    {\n      \"scanner\": \"copula\",\n      \"line\": 45,\n      \"column\": 15,\n      \"category\": \"possession-copula\",\n      \"match\": \"carries the\",\n      \"snippet\": \"# therefore carries the AI sidecar pointer (the regulator-facing\",\n      \"rephrase_hint\": \"Use \\\"has\\\" directly. \\\"X boasts four rooms\\\" -> \\\"X has four rooms\\\". \\\"Y features three engagement models\\\" -> \\\"Y has three engagement models\\\" or \\\"the three engagement models are A, B, C\\\".\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 57,\n      \"column\": 191,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"file (2x)\",\n      \"snippet\": \"The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that pref\",\n      \"rephrase_hint\": \"Distinctive content word \\\"file\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -> \\\"The seat at The Gathering closes when the cohort closes\\\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows.\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 57,\n      \"column\": 276,\n      \"category\": \"same-sentence-repetition\",\n      \"match\": \"deterministic (2x)\",\n      \"snippet\": \"The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv\",\n      \"rephrase_hint\": \"Distinctive content word \\\"deterministic\\\" appears 2 times in one sentence (writing-style.md §6 \\\"No distinctive content word repeated in one sentence\\\"). Rephrase the second occurrence away. Canonical fix: \\\"The Gathering cohort closes when the cohort closes\\\" -> \\\"The seat at The Gathering closes when the cohort closes\\\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows.\"\n    },\n    {\n      \"scanner\": \"copula\",\n      \"line\": 57,\n      \"column\": 300,\n      \"category\": \"possession-copula\",\n      \"match\": \"carries the\",\n      \"snippet\": \"note: \\\"AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPaylo\",\n      \"rephrase_hint\": \"Use \\\"has\\\" directly. \\\"X boasts four rooms\\\" -> \\\"X has four rooms\\\". \\\"Y features three engagement models\\\" -> \\\"Y has three engagement models\\\" or \\\"the three engagement models are A, B, C\\\".\"\n    },\n    {\n      \"scanner\": \"prose-patterns\",\n      \"line\": 57,\n      \"column\": 326,\n  ","suggestions":["Review the flagged AI-tells and mechanical prose issues in the final markdown before sending to the client. Worklist: prose-lint.json in the run results dir."],"lineRef":null,"provenanceClass":"deterministic","status":"escalated","decision":"manual-fix","actionTarget":"report","regenMode":"none","loopRound":0,"fix":null,"actionLog":[{"round":0,"action":"manual-fix","agent":"action-findings.js","at":"2026-06-12T10:11:29.465Z","outcome":"skipped"}],"x-mx-priority":"low","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 8 findings (3 errors, 2 warnings, 3 infos) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-report-coherence.js | construction-path-leak | construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md:13 | 2026-06-12T10:10:32Z |
| 2 | check-report-coherence.js | construction-path-leak | construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md:32 | 2026-06-12T10:10:32Z |
| 3 | check-report-coherence.js | construction-path-leak | construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md:34 | 2026-06-12T10:10:32Z |

<details open><summary>Error detail (3)</summary>

**1. check-report-coherence.js - construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md:13**

Internal script path "scripts/audit-*.js" leaked.

Line 13: auditCommand: "node scripts/audit-pipeline.js https://mx.allabout.network --pages -1 --date 2026-06-12"

Suggested next steps:

- Rewrite the offending sentence to remove the leaked phrase.

**2. check-report-coherence.js - construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md:32**

Internal script path "scripts/audit-*.js" leaked.

Line 32: runbook: "Executive audit report for Mx Allabout. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-crawl and re-analyse), use the command in t

Suggested next steps:

- Rewrite the offending sentence to remove the leaked phrase.

**3. check-report-coherence.js - construction-path-leak at /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md:34**

Internal script path "scripts/audit-*.js" leaked.

Line 34: command: "node scripts/audit-pipeline.js --gates mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md"

Suggested next steps:

- Rewrite the offending sentence to remove the leaked phrase.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 2 | 2026-06-12T10:04:09Z |
| 2 | deterministic-verifier | unverified-claims | 1 claim could not be verified against source data | 2026-06-12T10:04:11Z |

<details open><summary>Warning detail (2)</summary>

**1. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 2**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md
  2 scope mis-statement(s).

  [sitewide-inside-sampled-section] line 260
    section: ## Findings  (line 175)
    phrase:  "Site-wide"
    line:    **Finding:** Security headers absent: HSTS, CSP, X-Frame-Options, X-Content-Type-Options (Site-wide). Missing security h

  [sitewide-inside-sampled-section] line 264
    section: ## Findings  (line 175)
    phrase:  "site-wide"
    line:    - Add the missing response headers at the server or CDN edge; each is a one-line directive that applies site-wide once c

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

**2. deterministic-verifier - 1 claim could not be verified against source data**

Deterministic verifier scanned numeric, URL, HTML-snippet, positional, and behavioural claims in the report. The entries below did not match the source CSV / JSON / cached HTML and need a reviewer's eye.

line 697: Numeric 145 (145) not found in any results CSV / JSON

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | exaggeration | Exaggeration / hyperbole: 1 instance (line 136) | 2026-06-12T10:04:09Z |
| 2 | tone | bogus-html-placeholder | Bogus HTML-tag placeholders (use {name} not <name>): 1 instance (line 784) | 2026-06-12T10:04:09Z |
| 3 | prose-lint | prose-quality | Prose linter flagged 69 style finding(s) for review | 2026-06-12T10:10:33Z |

<details open><summary>Info detail (3)</summary>

**1. tone - Exaggeration / hyperbole: 1 instance**

Exaggeration / hyperbole

line 136: "flawless" - Across the audited set, the pages deliver an excellent experience for human visitors, with fast load

**2. tone - Bogus HTML-tag placeholders (use {name} not <name>): 1 instance**

Bogus HTML-tag placeholders (use {name} not <name>)

line 784: "<slug> → {slug}" - | `/blog/<slug>` | 69 | 0.27 | 0.022 | 4.62 |

**3. prose-lint - Prose linter flagged 69 style finding(s) for review**

Gate prose-lint (audit-prose-lint.js) returned non-zero. Output excerpt:

{
  "report": "/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-12/mx.allabout.network/mx-allabout-network-report.md",
  "total": 69,
  "neutralSurface": true,
  "byScanner": {
    "mechanical": {
      "count": 31
    },
    "ai-vocab": {
      "count": 7
    },
    "copula": {
      "count": 6
    },
    "prose-patterns": {
      "count": 25
    },
    "tics": {
      "count": 0
    }
  },
  "byCategory": {
    "dialect-divergence": 31,
    "ai-vocab-word": 5,
    "ai-vocab-phrase": 2,
    "possession-copula": 5,
    "locative-copula": 1,
    "same-sentence-repetition": 25
  },
  "findings": [
    {
      "scanner": "mechanical",
      "line": 32,
      "column": 173,
      "category": "dialect-divergence",
      "match": "analyse (UK)",
      "snippet": "runbook: \"Executive audit report for Mx Allabout. Focus on the highest-leverage MX opportunities surfaced by the audit. To re-run the audit from scratch (re-cra",
      "rephrase_hint": "Neutral-English surface (writing-style.md §3): rephrase to avoid the US/UK divergent spelling \"analyse\" entirely - e.g. examine / review."
    },
    {
      "scanner": "copula",
      "line": 45,
      "column": 15,
      "category": "possession-copula",
      "match": "carries the",
      "snippet": "# therefore carries the AI sidecar pointer (the regulator-facing",
      "rephrase_hint": "Use \"has\" directly. \"X boasts four rooms\" -> \"X has four rooms\". \"Y features three engagement models\" -> \"Y has three engagement models\" or \"the three engagement models are A, B, C\"."
    },
    {
      "scanner": "prose-patterns",
      "line": 57,
      "column": 191,
      "category": "same-sentence-repetition",
      "match": "file (2x)",
      "snippet": "The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPayload; the adjacent .ai.json file is a copy of the same JSON for tooling that pref",
      "rephrase_hint": "Distinctive content word \"file\" appears 2 times in one sentence (writing-style.md §6 \"No distinctive content word repeated in one sentence\"). Rephrase the second occurrence away. Canonical fix: \"The Gathering cohort closes when the cohort closes\" -> \"The seat at The Gathering closes when the cohort closes\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows."
    },
    {
      "scanner": "prose-patterns",
      "line": 57,
      "column": 276,
      "category": "same-sentence-repetition",
      "match": "deterministic (2x)",
      "snippet": "The companion .deterministic.json file carries the deterministic evidence chain (gate verdicts, CSV checks, render steps, probe results) and serves EAA Directiv",
      "rephrase_hint": "Distinctive content word \"deterministic\" appears 2 times in one sentence (writing-style.md §6 \"No distinctive content word repeated in one sentence\"). Rephrase the second occurrence away. Canonical fix: \"The Gathering cohort closes when the cohort closes\" -> \"The seat at The Gathering closes when the cohort closes\". Do NOT substitute a synonym (that triggers Pattern 11 elegant variation). Exemption: parallel structure across multiple clauses with the same word three or more times is anaphora, which the rule allows."
    },
    {
      "scanner": "copula",
      "line": 57,
      "column": 300,
      "category": "possession-copula",
      "match": "carries the",
      "snippet": "note: \"AI evidence chain (LLM-driven, multi-agent, and human-committed steps). The full chain travels inside this PDF's XMP metadata under xmp:ProvenanceAiPaylo",
      "rephrase_hint": "Use \"has\" directly. \"X boasts four rooms\" -> \"X has four rooms\". \"Y features three engagement models\" -> \"Y has three engagement models\" or \"the three engagement models are A, B, C\"."
    },
    {
      "scanner": "prose-patterns",
      "line": 57,
      "column": 326,

Suggested next steps:

- Review the flagged AI-tells and mechanical prose issues in the final markdown before sending to the client. Worklist: prose-lint.json in the run results dir.

</details>

