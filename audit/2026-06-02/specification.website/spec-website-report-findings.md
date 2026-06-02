---
title: "The Website Specification: Web Audit Report — Audit Gate Findings"
description: "Reviewer-facing findings sidecar for the The Website Specification: Web Audit Report audit on 2026-01-15. Records every gate finding (error, warning, info) raised during the run for human sign-off before delivery."
author: "Tom Cranstoun"
created: 2026-01-15
modified: 2026-01-15
auditDate: "2026-01-15"
companion: "spec-website-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans]
  x-mx-findingsCount: 3
  runbook: "Human reviewer reads this file before signing off on the client-facing report. Findings here are raised by the automated gates; accept, rebut, or correct each one before delivery."
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 3 findings (3 warnings) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | voice-consistency | mixed-voice-sections | Mixed-voice section(s) remain after auto-repair: 1 | 2026-06-02T17:29:33Z |
| 2 | html-render-heading-count | pandoc-truncation | HTML render heading count mismatch: markdown=33 rendered=32 | 2026-06-02T17:29:34Z |
| 3 | section-sanity | orphan-bullets-or-leaked-markers | Section sanity issues: 1 issue(s) | 2026-06-02T17:29:34Z |

<details open><summary>Warning detail (3)</summary>

**1. voice-consistency - Mixed-voice section(s) remain after auto-repair: 1**

Gate voice-consistency (check-report-voice.js) returned non-zero. Output excerpt:

check-report-voice: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-02/specification.website/spec-website-report.md
  1 mixed-voice section(s). Every section should pick one register and hold it. Mixing third-person ("the site does X") with first-person ("we found Y") inside the same section reads as drafted-by-committee.

  ## Findings  (line 142)
    first-person tokens: 3 (lines 146, 166, 198)
    third-person markers: 1 (lines 193)

  Fix: rewrite the section in a single voice. Most audit-report sections use first-person consultant voice ("we"); scorecards and appendices use third-person.

**2. html-render-heading-count - HTML render heading count mismatch: markdown=33 rendered=32**

Gate html-render-heading-count returned non-zero with no captured output.

**3. section-sanity - Section sanity issues: 1 issue(s)**

Gate section-sanity (check-report-section-sanity.js) returned non-zero. Output excerpt:


Section sanity: spec-website-report.md: 1 issue(s)

  unexplained-code-token (1):
    line 237 — section "At a Glance"
      Bullet references `@id` but the surrounding section never introduces what it is. Add an introductory sentence to the section, or fold the legend bullet into the same list so the term carries its own context across page breaks.

→ Fix the template / infill so each section is self-contained: every bullet list has an introducer in the same section, every code-token is named in surrounding prose, and every conditional marker is consumed at infill time.

</details>

