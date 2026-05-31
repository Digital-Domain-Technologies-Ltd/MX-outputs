---
title: "Mx Allabout — Audit Gate Findings"
description: "Reviewer-facing findings sidecar for the Mx Allabout audit on 2026-05-31. Records every gate finding (error, warning, info) raised during the run for human sign-off before delivery."
author: "Tom Cranstoun"
created: 2026-05-31
modified: 2026-05-31
auditDate: "2026-05-31"
companion: "mx-allabout-network-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans]
  x-mx-findingsCount: 4
  runbook: "Human reviewer reads this file before signing off on the client-facing report. Findings here are raised by the automated gates; accept, rebut, or correct each one before delivery."
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 4 findings (1 error, 3 warnings) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | rewrite-failures | rewrite-failure | Pass 2 left 1 [REWRITE FAILED] marker(s) inline in the report | 2026-05-31T13:52:24Z |

<details open><summary>Error detail (1)</summary>

**1. rewrite-failures - Pass 2 left 1 [REWRITE FAILED] marker(s) inline in the report**

Gate rewrite-failures (rewrite-report.js) returned non-zero. Output excerpt:

Reasons (deduped): 1× Ollama request to http://127.0.0.1:11434/api/chat failed: fetch failed. Is the local Ollama daemon running?

Occurrences:
line 196: [REWRITE FAILED after 3 attempts: Ollama request to http://127.0.0.1:11434/api/chat failed: fetch failed. Is the local Ollama daemon running?]

Suggested next steps:

- Read the reason in the marker — typically a transient LLM failure (cold start, fetch failed, HTTP 5xx) or a configuration gap (model not pulled, context window too small).
- For Ollama: ensure the model is pulled and warm; check MX_AUDIT_LLM_NUM_CTX is large enough for the largest block (defaults to 32768).
- Lower MX_REWRITE_CONCURRENCY (default 2 for Ollama, 4 for Anthropic) if the failures correlate with parallel-request memory pressure.
- Resume only the rewrite step: mx exec mx-audit --report <hostSlug> --client <client> --date <date>

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | template-contract-drift | contract-stale | Contract declares tokens the template no longer uses | 2026-05-31T13:52:24Z |
| 2 | voice-consistency | mixed-voice-sections | Mixed-voice section(s) remain after auto-repair: 1 | 2026-05-31T13:52:25Z |
| 3 | gates-summary | gates-failed | Audit gates raised findings: 0-rewrite, 0a-versioning, 0b-voice | 2026-05-31T14:37:48Z |

<details open><summary>Warning detail (3)</summary>

**1. template-contract-drift - Contract declares tokens the template no longer uses**

Gate template-contract-drift (audit-pipeline.js (Gate 0a-versioning)) returned non-zero. Output excerpt:

54 token(s) declared in contract but absent from template: [WCAG_RECURRING_PATTERNS], [ALT_COUNT], [ALT_MISSING_COUNT], [ALT_PCT], [DIV_SOUP_RENDERED_TOTAL], [DIV_SOUP_RENDERED_WORST_URL], [DIV_SOUP_RENDERED_PAGE_COUNT], [DIV_SOUP_SERVED_WORST_URL], ...

Suggested next steps:

- Run `node mx-reginald/audit/scripts/generate-template-contract.js` to refresh the contract.
- Or remove the stale entries by hand.

**2. voice-consistency - Mixed-voice section(s) remain after auto-repair: 1**

Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:

check-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-31/mx.allabout.network/mx-allabout-network-report.md
  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person ("the site does X") with first-person ("we found Y") inside the same section reads as drafted-by-committee.

  ## About This Report  (line 10)
    first-person tokens: 8 (lines 12, 14, 16…)
    third-person markers: 1 (lines 18)

  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice ("we"); scorecards and appendices use third-person.

**3. gates-summary - Audit gates raised findings: 0-rewrite, 0a-versioning, 0b-voice**

Phase 3 gate suite reported 3 unresolved gates. Individual gates may have recorded richer detail entries above this one. The PDF below is a partial deliverable produced under the always-produce-PDF rule; treat it as diagnostic context rather than a delivered audit until the listed gates pass.

Suggested next steps:

- Review each failed gate entry above for its specific detail and suggested fix.
- Re-run gates only after fixing: mx exec mx-audit --gates mx-outputs/audit/2026-05-31/mx.allabout.network/mx-allabout-network-report.md
- If the same gate fails twice in a row with no underlying data change, the gate itself is misbehaving — file an issue against the gate script.

</details>

