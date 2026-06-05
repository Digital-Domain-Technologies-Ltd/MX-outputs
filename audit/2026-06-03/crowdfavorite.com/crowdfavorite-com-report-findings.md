---
title: "Crowdfavorite — Audit Gate Findings"
description: "Reviewer-facing findings sidecar for the Crowdfavorite audit on 2026-06-03. Records every gate finding (error, warning, info) raised during the run for human sign-off before delivery."
author: "Tom Cranstoun"
created: 2026-06-03
modified: 2026-06-03
auditDate: "2026-06-03"
companion: "crowdfavorite-com-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans]
  x-mx-findingsCount: 8
  runbook: "Human reviewer reads this file before signing off on the client-facing report. Findings here are raised by the automated gates; accept, rebut, or correct each one before delivery."
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 8 findings (3 errors, 4 warnings, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Errors (I/O or structural failures)

*A gate could not complete or hit a structural failure. Investigate before relying on the report’s figures in that section.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Canonical URL 91% but consistency_analysis says 100% (10/10) | 2026-06-03T20:42:26Z |
| 2 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10) | 2026-06-03T20:42:26Z |
| 3 | check-report-coherence.js | marker-section-contradiction | Cross-Page Consistency reports Twitter Card tags 91% but consistency_analysis says 100% (10/10) | 2026-06-03T20:42:26Z |

<details open><summary>Error detail (3)</summary>

**1. check-report-coherence.js - Cross-Page Consistency reports Canonical URL 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Canonical URL does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**2. check-report-coherence.js - Cross-Page Consistency reports Open Graph tags 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Open Graph tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

**3. check-report-coherence.js - Cross-Page Consistency reports Twitter Card tags 91% but consistency_analysis says 100% (10/10)**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/crowdfavorite.com/crowdfavorite-com-report.md — the Cross-Page Consistency table's percentage for Twitter Card tags does not match the underlying consistency_analysis.json record. The two values are computed from the same source data and should agree.

Suggested next steps:

- Trace the Cross-Page Consistency printer in infill-report.js — verify it reads coverage from consistency_analysis.patterns directly.

</details>

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | section-completeness | incomplete-priority-block | Section completeness issues: 14 issue(s) | 2026-06-03T20:39:49Z |
| 2 | check-report-coherence.js | inventory-mismatch | Image inventory: 49 images in formats not named in prose | 2026-06-03T20:42:26Z |
| 3 | check-recommendation-consistency.js | missing-priority | Engagement scope "No regulatory compliance findings on the audited surface" does not map to any priority | 2026-06-03T20:42:26Z |
| 4 | cross-section-consistency | cross-section-scope-mix | Line 717: scope-mixing prose | 2026-06-03T20:42:26Z |

<details open><summary>Warning detail (4)</summary>

**1. section-completeness - Section completeness issues: 14 issue(s)**

Gate section-completeness (check-report-section-completeness.js) returned non-zero. Output excerpt:


Section completeness: crowdfavorite-com-report.md: 14 issue(s)

  Priority 1 — Missing Finding
    Priority 1 block has no "**Finding:**" paragraph
  Priority 1 — Missing What-to-change
    Priority 1 block has no "**What to change and why:**" (or "**What to maintain:**") section
  Priority 2 — Missing Finding
    Priority 2 block has no "**Finding:**" paragraph
  Priority 2 — Missing What-to-change
    Priority 2 block has no "**What to change and why:**" (or "**What to maintain:**") section
  Priority 3 — Missing Finding
    Priority 3 block has no "**Finding:**" paragraph
  Priority 3 — Missing What-to-change
    Priority 3 block has no "**What to change and why:**" (or "**What to maintain:**") section
  Priority 4 — Missing Finding
    Priority 4 block has no "**Finding:**" paragraph
  Priority 4 — Missing What-to-change
    Priority 4 block has no "**What to change and why:**" (or "**What to maintain:**") section
  Priority 5 — Missing Finding
    Priority 5 block has no "**Finding:**" paragraph
  Priority 5 — Missing What-to-change
    Priority 5 block has no "**What to change and why:**" (or "**What to maintain:**") section
  Priority 6 — Missing Finding
    Priority 6 block has no "**Finding:**" paragraph
  Priority 6 — Missing What-to-change
    Priority 6 block has no "**What to change and why:**" (or "**What to maintain:**") section
  Priority 7 — Missing Finding
    Priority 7 block has no "**Finding:**" paragraph
  Priority 7 — Missing What-to-change
    Priority 7 block has no "**What to change and why:**" (or "**What to maintain:**") section

→ Ensure every Priority row in the At-a-Glance table has a complete **Finding:** paragraph and a **What to change and why:** section with at least one bullet.

**2. check-report-coherence.js - Image inventory: 49 images in formats not named in prose**

/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/audit/2026-06-03/crowdfavorite.com/crowdfavorite-com-report.md — image_optimization.csv contains 568 images: 330 PNG, 76 JPEG, 1 WebP, 112 SVG, 49 other / unrecognised. Total of named formats is 519; 49 images are in a format the Appendix C narrative does not mention.

Suggested next steps:

- Verify the [OTHER_FORMAT_COUNT] placeholder is rendered in Appendix C and the rewrite prose names it explicitly when > 0.

**3. check-recommendation-consistency.js - Engagement scope "No regulatory compliance findings on the audited surface" does not map to any priority**

The "What's Next" / Engagement section names "No regulatory compliance findings on the audited surface" as a scope, but it does not match any of the 7 priorities. Either the priority is missing or the engagement scope is invented.

Suggested next steps:

- Verify "No regulatory compliance findings on the audited surface" corresponds to a numbered priority. If not, add a priority that justifies it or remove it.

**4. cross-section-consistency - Line 717: scope-mixing prose**

Sentence mixes site-wide language with per-sample language. Choose one frame per sentence: report the site-wide source first, then describe the audited set separately. Line: We observed No content variance was detected across cache-busted fetches in this audit run. However, an unknown vendor implementing personalisation/A/B testing is present on pages in the audited set. Machines arrive cold on every fetch – no

Suggested next steps:

- Re-check the infill sources for each cited section.
- If both sources are correct and the disagreement is genuine (e.g. the sitemap covers a wider set than the audit sampled), name the asymmetry explicitly in the prose so the reader sees it.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | em-dash | Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 6 instances (line 198) | 2026-06-03T20:39:48Z |

<details open><summary>Info detail (1)</summary>

**1. tone - Em-dash in prose (use comma, semicolon, parentheses, or two sentences): 6 instances**

Em-dash in prose (use comma, semicolon, parentheses, or two sentences)

line 198: "—" - Across the audited set, the At a Glance table highlights four key opportunities—structured data qual
line 198: "—" - Across the audited set, the At a Glance table highlights four key opportunities—structured data qual
line 659: "—" - Our cheapest first move is to wrap key landmarks—header, nav, main, footer, aside—in their appropria
line 659: "—" - Our cheapest first move is to wrap key landmarks—header, nav, main, footer, aside—in their appropria
line 759: "—" - We note that accessibility legislation worldwide has converged on ISO 14289‑1 (PDF/UA) as the techni
... and 1 more

</details>

