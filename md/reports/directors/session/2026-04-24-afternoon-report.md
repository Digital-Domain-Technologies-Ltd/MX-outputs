---
title: "Co-Directors Report -- Leica Audit Delivered, Frankfurt Materials Finalized"
description: "Afternoon session: Leica Microsystems audit completed end-to-end; Frankfurt CMS Summit slides and helper guide updated; audit pipeline hardened."
author: "Tom Cranstoun and Maxine"
created: 2026-04-24
modified: 2026-04-24
version: "1.0"
mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
---

# Co-Directors Report -- Leica Audit Delivered, Frankfurt Materials Finalized

**Date:** 24 April 2026 -- Afternoon
**Segment:** Afternoon (noon -- 14:00)

---

## Summary

The Leica Microsystems audit pipeline ran to completion today -- collect, scores, discovery, report, PDF -- producing a client-ready audit report and supporting files committed to mx-crm and mx-outputs. Frankfurt CMS Summit presentation materials were aligned to the confirmed audit data: slides updated with speaker notes and timing, helper guide extended with a five-act stage cue sheet. Three audit pipeline improvements landed: a cleaner nav-pages caption, conditional stripping of the JSON-LD drift section when absent, and a TYPO3 platform fingerprint for the rate limiter. The fierce-critic and LLM judgment gates were tightened to reduce false positives in rounds 2 and 3.

---

## What Was Done

### 1. Leica Microsystems audit -- end-to-end delivery

Full pipeline run (24 April 2026, 5 pages, science-lab tree): collect, scores, discovery, access, report (two-pass infill + rewrite), verification gates, fierce-critic, LLM judgment, PDF. All gates passed. Client report (58K markdown, 160K PDF) committed to mx-crm and mx-outputs. Support files: 14 CSVs, 3 sidecar JSONs (verification, fierce-critic, LLM judgment).

Key findings confirmed by the audit: Discovery Readiness 25/100, SDQ 40/100, MSC 50/100, Accessibility 0/100, MX Journey Stage 1 Pass/Stage 2 Partial. The site is discoverable but cannot be cited. All 19 well-known paths absent.

### 2. Frankfurt CMS Summit materials -- data alignment and stage preparation

The draft Frankfurt materials (written before the automated audit ran) were realigned to confirmed data: SDQ corrected to 40, required property corrected from `url` to `name`, homepage H1 corrected, accessibility count updated to 117 issues with 64 tracing to 15 template patterns, Pipeline Survivability section added.

Further improvements this session:
- **Slides**: stage direction on Act 1 converted to pandoc speaker notes (`::: notes :::`); timing notes added to all five act slides (~3, ~4, ~3, ~5, ~4 min); internal footnote slide referencing the helper guide path removed from the PPTX
- **Helper guide**: stage cue sheet added as a five-row table (Act, Duration, Tom says, Helper does, On screen); total estimated runtime 20 minutes

### 3. Audit pipeline hardening

Three fixes to infill-report.js and the template:

- **NAV_PAGES_NOTE rewrite**: caption below the Pages Audited table no longer lists page URLs as backtick code. Replaced with generic prose: "Pages marked (nav) are navigational -- they route visitors to content..." This prevents ugly justified-text wrapping in PDF output. Fierce-critic check `nav-pages-url-list` added to prevent regression.

- **JSONLD_DRIFT conditional section**: the "JSON-LD fact stability across runs" table in the template is now wrapped in `<!-- SECTION:JSONLD_DRIFT -->` markers and stripped entirely by infill-report.js when `jsonld-drift.json` is absent. Previously it rendered with "Not measured" values, wasting space and confusing readers.

- **TYPO3 platform fingerprint**: `data/platform-rates.json` and `platformFingerprint.js` updated to recognise TYPO3 CMS by generator meta tag, `fe_typo_user` cookie, asset paths, and class prefixes. Rate limit: 3 req/s, concurrency 2.

### 4. Fierce-critic improvements

Two new check functions added to `scripts/audit-fierce-critic.js`:

- `checkPlatformTemplateEngineNames()`: blocks Fluid, Twig, Blade, Liquid, Handlebars, Nunjucks when used as noun modifiers in client report prose ("Fluid template", "Twig partial", etc.). These are appropriate in TYPO3-audience conference materials but not in client-facing reports where the platform may not be known to the reader.

- `checkNavPagesUrlList()`: blocks the old caption pattern that listed nav page URLs as backtick code inline.

### 5. LLM judgment rubric tightening

CHECK 2 (tone) and CHECK 4 (hedged-vs-asserted) in `scripts/audit-llm-judgment.js` were generating false positives in rounds 2 and 3, causing the three-round cap to trigger on legitimate report content.

Added to CHECK 2 "Do NOT flag": standard comparative/descriptive phrases about machine behaviour, passive-voice technical sentences in third-person sections, references to "the audit/site/report".

Added to CHECK 4 "Do NOT flag": binary findings verified on every audited page, already-scoped observations, absence findings, unanimous-evidence findings. General guidance added: raise the bar to what a professional editor reviewing 100 similar reports would flag.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Submodule commits | 4 |
| Repositories touched | 3 (mx-audit, mx-crm, mx-outputs) |
| Hub files changed | ~10 |
| Lines added (hub) | +170 |
| Lines removed (hub) | -50 |
| Audit report size | 58K (markdown), 160K (PDF) |
| Frankfurt PPTX | 57K |

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 0dff7de | mx-audit | Add TYPO3 platform fingerprint and rate limits |
| ef1da3c | mx-audit | infill-report: clean NAV_PAGES_NOTE caption and strip JSONLD_DRIFT section when absent |
| c454feb | mx-crm | Add Leica Microsystems audit report and support files (2026-04-24) |
| 9a03466 | mx-outputs | Add Leica audit PDF, Frankfurt PPTX, and update index (2026-04-24) |

---

## Next Steps

- Commit hub changes (scripts, skills, presentations, guides)
- Frankfurt: deliver briefing to TYPO3 helpers at least one week before the event
- Consider offering the Leica report as a public example audit on allabout.network
- LLM judgment: monitor next two audit runs to confirm round-cap frequency has dropped
