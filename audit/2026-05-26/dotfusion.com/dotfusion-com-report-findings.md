---
title: "Dotfusion — Audit Gate Findings"
description: "Findings sidecar for the Dotfusion audit on 2026-05-26. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-05-26
modified: 2026-05-26
auditDate: "2026-05-26"
companion: "dotfusion-com-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 7
  inherits: ["dotfusion-com-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"cdfa7f838b02","patternKey":"864c9a12fabb","timestamp":"2026-05-26T20:25:43.379Z","severity":"warn","source":"check-template-voice.js","gateName":"template-voice","category":"template-voice-style","title":"Template voice/style findings: 1 violation(s)","detail":"Pre-flight template-voice check raised 1 violation(s) against web-audit-suite-template.md. The template prose carries forbidden patterns (third-person leak, banned vocab, em-dash, etc.). Pipeline continues; reviewer sees the finding in the report.\n\nFAIL  /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-reginald/audit/templates/web-audit-suite-template.md  (1 violation)\n      line 378 [voice] \"the page \" — Bare third-person \"the page\" leaks into client prose. Use \"each page\", \"this page\", or \"a page\".\n        [IF SDQ_SCORE >= 76: \"Across the [NUMBER_OF_PAGES_AUDITED] pages we audited, structured data is strong. Machines extract\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"a9958b42b521","patternKey":"5265faae5774","timestamp":"2026-05-26T20:28:09.601Z","severity":"warn","source":"check-template-coverage.js","gateName":"template-coverage","category":"unfilled-placeholders","title":"Unfilled placeholders in rendered report","detail":"Gate template-coverage returned non-zero with no captured output.","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"7d6e20808d86","patternKey":"e8d9b74c4520","timestamp":"2026-05-26T20:28:09.946Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"em-dash","title":"Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 1 instance","detail":"Em-dash in prose (use comma, semicolon, parentheses, or two sentences)\n\nline 82: \"—\" - line 378 [voice] \"the page \" — Bare third-person \"the page\" leaks into client prose. Use \"each","suggestions":[],"lineRef":"line 82","provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"low","firstSeen":null,"occurrences":null},{"instanceId":"a7c0a84d44b1","patternKey":"bf1a97c77b4f","timestamp":"2026-05-26T20:35:42.727Z","severity":"warn","source":"check-report-section-sanity.js","gateName":"section-sanity","category":"orphan-bullets-or-leaked-markers","title":"Section sanity issues: 1 issue(s)","detail":"Gate section-sanity (check-report-section-sanity.js) returned non-zero. Output excerpt:\n\n\nSection sanity: dotfusion-com-report.md: 1 issue(s)\n\n  leaked-template-marker (1):\n    line 83 — section \"Warnings (rule violations)\"\n      Unprocessed template marker \"[IF SDQ_SCORE >= 76: \"Across the [NUMBER_OF_PAGES_AUDITED]\" survived infill — every IF/ELSE/ENDIF must be consumed before the report ships.\n\n→ Fix the template / infill so each section is self-contained: every bullet list has an introducer in the same section, every code-token is named in surrounding prose, and every conditional marker is consumed at infill time.\n\n","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"35461e8d9e69","patternKey":"e978befac016","timestamp":"2026-05-26T20:35:42.994Z","severity":"warn","source":"audit-pipeline.js (Gate 1 - template-leak check)","gateName":"template-leaks","category":"template-leaks","title":"1 leak(s) in the rendered report","detail":"The rendered dotfusion-com-report.md contains unresolved placeholders (e.g. `[SITEMAP_...]`, `[N]`, bare bracket-instructions, or REWRITE comment blocks). These would print as literal prose in the PDF. check-template-leaks.js output:\n\ncheck-template-leaks: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-26/dotfusion.com/dotfusion-com-report.md\n  1 leak category/categories found:\n  - [bracket-placeholder] 1 unresolved [PLACEHOLDER] token(s): NUMBER_OF_PAGES_AUDITED\n        line 32: \"[NUMBER_OF_PAGES_AUDITED]\"\nResolve each leak before PDF generation:\n  - REWRITE block           → rewrite the section into plain prose, then delete the comment\n  - {{TOKEN}}               → re-run infill-report.js with the correct results directory\n  - [Bracket]               → replace with actual content, or convert to a REWRITE block\n  - further-reading-no-qr-table → restore the two-column QR table from the template (| Scan | Link and description |)","suggestions":["Add the missing entries to the `replacements` map in mx-reginald/audit/bin/infill-report.js (look up the placeholder name in the leak detector output above).","When the source data is genuinely absent, fall back to a clear 'N/A' or a sentence that does not need the count — never let the raw token reach the PDF.","For multi-line REWRITE blocks, ensure the LLM-rewrite phase has API access (ANTHROPIC_API_KEY set)."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"d4b0c61dede3","patternKey":"29b097faec29","timestamp":"2026-05-26T20:44:12.486Z","severity":"warn","source":"audit-pipeline.js (Phase 3 gate suite)","gateName":"gates-summary","category":"gates-failed","title":"Audit gates raised findings: 0a, 0g, 1","detail":"Phase 3 gate suite reported 3 unresolved gates. Individual gates may have recorded richer detail entries above this one. The PDF below is a partial deliverable produced under the always-produce-PDF rule; treat it as diagnostic context rather than a delivered audit until the listed gates pass.","suggestions":["Review each failed gate entry above for its specific detail and suggested fix.","Re-run gates only after fixing: mx exec mx-audit --gates mx-outputs/audit/2026-05-26/dotfusion.com/dotfusion-com-report.md","If the same gate fails twice in a row with no underlying data change, the gate itself is misbehaving — file an issue against the gate script."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"2e816a6d0cb4","patternKey":"321914741c31","timestamp":"2026-05-26T20:44:12.567Z","severity":"error","source":"check-report-coherence.js","gateName":"check-report-coherence.js","category":"placeholder-leak","title":"1 unresolved placeholder token(s) leaked into the final report: NUMBER_OF_PAGES_AUDITED","detail":"/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-26/dotfusion.com/dotfusion-com-report.md — 1 placeholder leaks at lines: 83([NUMBER_OF_PAGES_AUDITED]). Each one indicates an infill handler that did not match its template anchor, or a handler that returned empty for an expected field.","suggestions":["For each token, grep infill-report.js and tableHandlers/ for the replacement code path. Verify the template text matches the regex."],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"high","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 7 findings (1 error, 5 warnings, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-report-coherence.js | placeholder-leak | 1 unresolved placeholder token(s) leaked into the final report: NUMBER_OF_PAGES_AUDITED | 2026-05-26T20:44:12Z |

<details open><summary>Error detail (1)</summary>

**1. check-report-coherence.js - 1 unresolved placeholder token(s) leaked into the final report: NUMBER_OF_PAGES_AUDITED**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-26/dotfusion.com/dotfusion-com-report.md — 1 placeholder leaks at lines: 83([NUMBER_OF_PAGES_AUDITED]). Each one indicates an infill handler that did not match its template anchor, or a handler that returned empty for an expected field.

Suggested next steps:

- For each token, grep infill-report.js and tableHandlers/ for the replacement code path. Verify the template text matches the regex.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | template-voice | template-voice-style | Template voice/style findings: 1 violation(s) | 2026-05-26T20:25:43Z |
| 2 | template-coverage | unfilled-placeholders | Unfilled placeholders in rendered report | 2026-05-26T20:28:09Z |
| 3 | section-sanity | orphan-bullets-or-leaked-markers | Section sanity issues: 1 issue(s) | 2026-05-26T20:35:42Z |
| 4 | template-leaks | template-leaks | 1 leak(s) in the rendered report | 2026-05-26T20:35:42Z |
| 5 | gates-summary | gates-failed | Audit gates raised findings: 0a, 0g, 1 | 2026-05-26T20:44:12Z |

<details open><summary>Warning detail (5)</summary>

**1. template-voice - Template voice/style findings: 1 violation(s)**

Pre-flight template-voice check raised 1 violation(s) against web-audit-suite-template.md. The template prose carries forbidden patterns (third-person leak, banned vocab, em-dash, etc.). Pipeline continues; reviewer sees the finding in the report.

FAIL  /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-reginald/audit/templates/web-audit-suite-template.md  (1 violation)
      line 378 [voice] "the page " — Bare third-person "the page" leaks into client prose. Use "each page", "this page", or "a page".
        [IF SDQ_SCORE >= 76: "Across the [NUMBER_OF_PAGES_AUDITED] pages we audited, structured data is strong. Machines extract

**2. template-coverage - Unfilled placeholders in rendered report**

Gate template-coverage returned non-zero with no captured output.

**3. section-sanity - Section sanity issues: 1 issue(s)**

Gate section-sanity (check-report-section-sanity.js) returned non-zero. Output excerpt:


Section sanity: dotfusion-com-report.md: 1 issue(s)

  leaked-template-marker (1):
    line 83 — section "Warnings (rule violations)"
      Unprocessed template marker "[IF SDQ_SCORE >= 76: "Across the [NUMBER_OF_PAGES_AUDITED]" survived infill — every IF/ELSE/ENDIF must be consumed before the report ships.

→ Fix the template / infill so each section is self-contained: every bullet list has an introducer in the same section, every code-token is named in surrounding prose, and every conditional marker is consumed at infill time.

**4. template-leaks - 1 leak(s) in the rendered report**

The rendered dotfusion-com-report.md contains unresolved placeholders (e.g. `[SITEMAP_...]`, `[N]`, bare bracket-instructions, or REWRITE comment blocks). These would print as literal prose in the PDF. check-template-leaks.js output:

check-template-leaks: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-26/dotfusion.com/dotfusion-com-report.md
  1 leak category/categories found:
  - [bracket-placeholder] 1 unresolved [PLACEHOLDER] token(s): NUMBER_OF_PAGES_AUDITED
        line 32: "[NUMBER_OF_PAGES_AUDITED]"
Resolve each leak before PDF generation:
  - REWRITE block           → rewrite the section into plain prose, then delete the comment
  - {{TOKEN}}               → re-run infill-report.js with the correct results directory
  - [Bracket]               → replace with actual content, or convert to a REWRITE block
  - further-reading-no-qr-table → restore the two-column QR table from the template (| Scan | Link and description |)

Suggested next steps:

- Add the missing entries to the `replacements` map in mx-reginald/audit/bin/infill-report.js (look up the placeholder name in the leak detector output above).
- When the source data is genuinely absent, fall back to a clear 'N/A' or a sentence that does not need the count — never let the raw token reach the PDF.
- For multi-line REWRITE blocks, ensure the LLM-rewrite phase has API access (ANTHROPIC_API_KEY set).

**5. gates-summary - Audit gates raised findings: 0a, 0g, 1**

Phase 3 gate suite reported 3 unresolved gates. Individual gates may have recorded richer detail entries above this one. The PDF below is a partial deliverable produced under the always-produce-PDF rule; treat it as diagnostic context rather than a delivered audit until the listed gates pass.

Suggested next steps:

- Review each failed gate entry above for its specific detail and suggested fix.
- Re-run gates only after fixing: mx exec mx-audit --gates mx-outputs/audit/2026-05-26/dotfusion.com/dotfusion-com-report.md
- If the same gate fails twice in a row with no underlying data change, the gate itself is misbehaving — file an issue against the gate script.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | em-dash | Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 1 instance (line 82) | 2026-05-26T20:28:09Z |

<details open><summary>Info detail (1)</summary>

**1. tone - Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 1 instance**

Em-dash in prose (use comma, semicolon, parentheses, or two sentences)

line 82: "—" - line 378 [voice] "the page " — Bare third-person "the page" leaks into client prose. Use "each

</details>

