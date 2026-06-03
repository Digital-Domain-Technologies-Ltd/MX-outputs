---
title: "Www Contentful — Audit Gate Findings"
description: "Reviewer-facing findings sidecar for the Www Contentful audit on 2026-06-03. Records every gate finding (error, warning, info) raised during the run for human sign-off before delivery."
author: "Tom Cranstoun"
created: 2026-06-03
modified: 2026-06-03
auditDate: "2026-06-03"
companion: "www-contentful-com-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans]
  x-mx-findingsCount: 12
  runbook: "Human reviewer reads this file before signing off on the client-facing report. Findings here are raised by the automated gates; accept, rebut, or correct each one before delivery."
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 12 findings (7 errors, 4 warnings, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | template-coverage | unfilled-placeholders | Unfilled placeholders in rendered report (hard fail) | 2026-06-03T13:26:14Z |
| 2 | template-leaks | template-leaks | 2 leak(s) in the rendered report (hard fail) | 2026-06-03T13:26:16Z |
| 3 | template-leaks | template-leaks | Template leaks introduced by the repair pass | 2026-06-03T13:32:14Z |
| 4 | check-report-coherence.js | placeholder-leak | 3 unresolved placeholder token(s) leaked into the final report: N, NAME, KEY_METRIC | 2026-06-03T13:32:14Z |
| 5 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Canonical URL 83% but consistency_analysis says 100% (10/10) | 2026-06-03T13:32:14Z |
| 6 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Open Graph tags 83% but consistency_analysis says 100% (10/10) | 2026-06-03T13:32:14Z |
| 7 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Twitter Card tags 83% but consistency_analysis says 100% (10/10) | 2026-06-03T13:32:14Z |

<details open><summary>Error detail (7)</summary>

**1. template-coverage - Unfilled placeholders in rendered report (hard fail)**

Gate template-coverage returned non-zero with no captured output.

Suggested next steps:

- Add the missing entries to the `replacements` map in mx-reginald/audit/bin/infill-report.js for each token the leak detector flagged.
- When the source data is genuinely absent, emit a prose fallback that reads cleanly to the client — never let the raw [UPPERCASE_TOKEN] reach the PDF.
- Re-run the audit (or `mx exec mx-audit --report <reportPath> --gates`) once the infill is patched.
- For diagnostic purposes only: MX_AUDIT_FORCE_PDF=1 mx exec mx-audit ... ships the PDF anyway with the literal tokens visible.

**2. template-leaks - 2 leak(s) in the rendered report (hard fail)**

The rendered www-contentful-com-report.md contains unresolved placeholders (e.g. `[SITEMAP_...]`, `[N]`, bare bracket-instructions, or REWRITE comment blocks). These would print as literal prose in the PDF. check-template-leaks.js output:

check-template-leaks: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md
  2 leak category/categories found:
  - [malformed-placeholder-token] 1 bracket token(s) with trailing punctuation — infill substitution will not fire. Fix by removing the trailing character so the token closes with `]`.
        line 398: "[AUDIT_SCOPE_QUALIFIER""
  - [bracket-placeholder] 3 unresolved [PLACEHOLDER] token(s): NAME, KEY_METRIC, N
        line 435: "[NAME]"
        line 435: "[KEY_METRIC]"
        line 435: "[N]"
Resolve each leak before PDF generation:
  - REWRITE block           → rewrite the section into plain prose, then delete the comment
  - {{TOKEN}}               → re-run infill-report.js with the correct results directory
  - [Bracket]               → replace with actual content, or convert to a REWRITE block
  - further-reading-no-qr-table → restore the two-column QR table from the template (| Scan | Link and description |)
check-template-leaks: HARD FAIL (765 lines, 2 hard leak(s), 0 warning(s))

Suggested next steps:

- Add the missing entries to the `replacements` map in mx-reginald/audit/bin/infill-report.js (look up the placeholder name in the leak detector output above).
- When the source data is genuinely absent, fall back to a clear prose sentence that does not need the count — never let the raw token reach the PDF.
- For multi-line REWRITE blocks, ensure the LLM-rewrite phase has API access (ANTHROPIC_API_KEY set).
- For diagnostic purposes only: MX_AUDIT_FORCE_PDF=1 mx exec mx-audit ... ships the PDF anyway with the literal tokens visible.

**3. template-leaks - Template leaks introduced by the repair pass**

The consolidated repair pass rewrote prose that introduced structural corruption (e.g. heading-prefixed table rows). check-template-leaks.js output:

check-template-leaks: /Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md
  2 leak category/categories found:
  - [malformed-placeholder-token] 1 bracket token(s) with trailing punctuation — infill substitution will not fire. Fix by removing the trailing character so the token closes with `]`.
        line 398: "[AUDIT_SCOPE_QUALIFIER""
  - [bracket-placeholder] 3 unresolved [PLACEHOLDER] token(s): NAME, KEY_METRIC, N
        line 435: "[NAME]"
        line 435: "[KEY_METRIC]"
        line 435: "[N]"
Resolve each leak before PDF generation:
  - REWRITE block           → rewrite the section into plain prose, then delete the comment
  - {{TOKEN}}               → re-run infill-report.js with the correct results directory
  - [Bracket]               → replace with actual content, or convert to a REWRITE block
  - further-reading-no-qr-table → restore the two-column QR table from the template (| Scan | Link and description |)
check-template-leaks: HARD FAIL (765 lines, 2 hard leak(s), 0 warning(s))

Suggested next steps:

- Re-run gates only after fixing the structural issue in the report.

**4. check-report-coherence.js - 3 unresolved placeholder token(s) leaked into the final report: N, NAME, KEY_METRIC**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md — 3 placeholder leaks at lines: 487([N]), 487([NAME]), 487([KEY_METRIC]). Each one indicates an infill handler that did not match its template anchor, or a handler that returned empty for an expected field.

Suggested next steps:

- For each token, grep infill-report.js and tableHandlers/ for the replacement code path. Verify the template text matches the regex.

**5. check-report-coherence.js - Cross-Page Consistency reports Canonical URL 83% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**6. check-report-coherence.js - Cross-Page Consistency reports Open Graph tags 83% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**7. check-report-coherence.js - Cross-Page Consistency reports Twitter Card tags 83% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | html-render-heading-count | pandoc-truncation | HTML render heading count mismatch: markdown=33 rendered=32 | 2026-06-03T13:26:15Z |
| 2 | section-completeness | incomplete-priority-block | Section completeness issues: 11 issue(s) | 2026-06-03T13:26:16Z |
| 3 | gates-summary | gates-failed | Audit gates raised findings: 0a, 0c, 0e, 1 | 2026-06-03T13:32:14Z |
| 4 | check-recommendation-consistency.js | missing-priority | Engagement scope "No regulatory compliance findings on the audited surface" does not map to any priority | 2026-06-03T13:32:14Z |

<details open><summary>Warning detail (4)</summary>

**1. html-render-heading-count - HTML render heading count mismatch: markdown=33 rendered=32**

Gate html-render-heading-count returned non-zero with no captured output.

**2. section-completeness - Section completeness issues: 11 issue(s)**

Gate section-completeness (check-report-section-completeness.js) returned non-zero. Output excerpt:


Section completeness: www-contentful-com-report.md: 11 issue(s)

  Priority 1 — Missing Finding
    Priority 1 block has no "**Finding:**" paragraph
  Priority 2 — Missing Finding
    Priority 2 block has no "**Finding:**" paragraph
  Priority 2 — Missing What-to-change
    Priority 2 block has no "**What to change and why:**" (or "**What to maintain:**") section
  Priority 3 — Missing block
    No "**Priority 3:" heading found in the document
  Priority 4 — Missing block
    No "**Priority 4:" heading found in the document
  Priority 5 — Missing block
    No "**Priority 5:" heading found in the document
  Priority 6 — Missing block
    No "**Priority 6:" heading found in the document
  Priority 7 — Missing block
    No "**Priority 7:" heading found in the document
  Priority 8 — Missing block
    No "**Priority 8:" heading found in the document
  Priority 9 — Missing block
    No "**Priority 9:" heading found in the document
  Priority 10 — Missing block
    No "**Priority 10:" heading found in the document

→ Ensure every Priority row in the At-a-Glance table has a complete **Finding:** paragraph and a **What to change and why:** section with at least one bullet.

**3. gates-summary - Audit gates raised findings: 0a, 0c, 0e, 1**

Phase 3 gate suite reported 4 unresolved gates. Individual gates may have recorded richer detail entries above this one. The PDF below is a partial deliverable produced under the always-produce-PDF rule; treat it as diagnostic context rather than a delivered audit until the listed gates pass.

Suggested next steps:

- Review each failed gate entry above for its specific detail and suggested fix.
- Re-run gates only after fixing: mx exec mx-audit --gates mx-outputs/audit/2026-06-03/www.contentful.com/www-contentful-com-report.md
- If the same gate fails twice in a row with no underlying data change, the gate itself is misbehaving — file an issue against the gate script.

**4. check-recommendation-consistency.js - Engagement scope "No regulatory compliance findings on the audited surface" does not map to any priority**

The "What's Next" / Engagement section names "No regulatory compliance findings on the audited surface" as a scope, but it does not match any of the 2 priorities. Either the priority is missing or the engagement scope is invented.

Suggested next steps:

- Verify "No regulatory compliance findings on the audited surface" corresponds to a numbered priority. If not, add a priority that justifies it or remove it.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | em-dash | Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 2 instances (line 539) | 2026-06-03T13:26:14Z |

<details open><summary>Info detail (1)</summary>

**1. tone - Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 2 instances**

Em-dash in prose (use comma, semicolon, parentheses, or two sentences)

line 539: "—" - We found that every audited page has a truncation risk, meaning machines may miss parts of the conte
line 539: "—" - We found that every audited page has a truncation risk, meaning machines may miss parts of the conte

</details>

