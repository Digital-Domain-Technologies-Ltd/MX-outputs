---
title: "Dotfusion — Audit Gate Findings"
description: "Reviewer-facing findings sidecar for the Dotfusion audit on 2026-05-28. Records every gate finding (error, warning, info) raised during the run for human sign-off before delivery."
author: "Tom Cranstoun"
created: 2026-05-28
modified: 2026-05-28
auditDate: "2026-05-28"
findingsCount: 1
companion: "dotfusion-com-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans]
  runbook: "Human reviewer reads this file before signing off on the client-facing report. Findings here are raised by the automated gates; accept, rebut, or correct each one before delivery."
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 1 finding (1 warning) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | sample-vs-total-scope | scope-mis-statements | Scope mis-statements remain after auto-repair: 1 | 2026-05-28T16:43:18Z |

<details open><summary>Warning detail (1)</summary>

**1. sample-vs-total-scope - Scope mis-statements remain after auto-repair: 1**

Gate sample-vs-total-scope (check-report-scope.js) returned non-zero. Output excerpt:

check-report-scope: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-05-28/dotfusion.com/dotfusion-com-report.md
  1 scope mis-statement(s).

  [sitewide-inside-sampled-section] line 159
    section: ## Findings  (line 137)
    phrase:  "every page carries"
    line:    **Finding:** Across the audited set, every page carries at least one anchor element in the site header that has a valid 

  Fix: site-wide artefact sections (sitemap, robots, llms.txt, agent-card, security headers) describe a single file; do not write "across the audited set" — write "the sitemap declares" or "this file carries". Per-page sampled sections (Findings, Accessibility, Performance, SEO) describe N audited pages; do not write "site-wide" or "across the entire site" — write "across the audited pages" or "on the audited set".

</details>

