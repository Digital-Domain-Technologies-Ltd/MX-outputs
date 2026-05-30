---
title: "Mx Allabout — Audit Gate Findings"
description: "Reviewer-facing findings sidecar for the Mx Allabout audit on 2026-05-30. Records every gate finding (error, warning, info) raised during the run for human sign-off before delivery."
author: "Tom Cranstoun"
created: 2026-05-30
modified: 2026-05-30
auditDate: "2026-05-30"
companion: "mx-allabout-network-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans]
  x-mx-findingsCount: 4
  runbook: "Human reviewer reads this file before signing off on the client-facing report. Findings here are raised by the automated gates; accept, rebut, or correct each one before delivery."
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 4 findings (2 warnings, 2 infos) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | template-contract-drift | contract-stale | Contract declares tokens the template no longer uses | 2026-05-30T09:01:08Z |
| 2 | voice-consistency | mixed-voice-sections | Mixed-voice section(s) remain after auto-repair: 1 | 2026-05-30T09:01:09Z |

<details open><summary>Warning detail (2)</summary>

**1. template-contract-drift - Contract declares tokens the template no longer uses**

Gate template-contract-drift (audit-pipeline.js (Gate 0a-versioning)) returned non-zero. Output excerpt:

54 token(s) declared in contract but absent from template: [WCAG_RECURRING_PATTERNS], [ALT_COUNT], [ALT_MISSING_COUNT], [ALT_PCT], [DIV_SOUP_RENDERED_TOTAL], [DIV_SOUP_RENDERED_WORST_URL], [DIV_SOUP_RENDERED_PAGE_COUNT], [DIV_SOUP_SERVED_WORST_URL], ...

Suggested next steps:

- Run `node mx-reginald/audit/scripts/generate-template-contract.js` to refresh the contract.
- Or remove the stale entries by hand.

**2. voice-consistency - Mixed-voice section(s) remain after auto-repair: 1**

Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:

check-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-30/mx.allabout.network/mx-allabout-network-report.md
  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person ("the site does X") with first-person ("we found Y") inside the same section reads as drafted-by-committee.

  ## About This Report  (line 10)
    first-person tokens: 8 (lines 12, 14, 16…)
    third-person markers: 1 (lines 18)

  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice ("we"); scorecards and appendices use third-person.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | exaggeration | Exaggeration / hyperbole: 1 instance (line 169) | 2026-05-30T09:01:09Z |
| 2 | tone | em-dash | Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 1 instance (line 862) | 2026-05-30T09:01:09Z |

<details open><summary>Info detail (2)</summary>

**1. tone - Exaggeration / hyperbole: 1 instance**

Exaggeration / hyperbole

line 169: "flawless" - We’ve mapped a strong foundations across the audited set, with strong SEO, flawless accessibility, r

**2. tone - Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 1 instance**

Em-dash in prose (use comma, semicolon, parentheses, or two sentences)

line 862: "—" - We also recognise that an untagged PDF remains invisible to machines—search crawlers, AI systems, an

</details>

