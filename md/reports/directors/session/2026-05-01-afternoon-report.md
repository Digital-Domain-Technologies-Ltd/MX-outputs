---
title: "Co-Directors Report — Baremetal v10 audit delivered + fierce-critic run limiter"
description: "Completed the baremetal.vc v10 audit report through all gates and PDF; added a run-count limiter and warn-mode threshold to the fierce-critic; updated both audit templates with CogNovaMX's divergent llms.txt text/html recommendation."
author: "Tom Cranstoun"
created: 2026-05-01
modified: 2026-05-01
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-01-afternoon-report.md
---

# Co-Directors Report — Baremetal v10 audit delivered + fierce-critic run limiter

**Date:** 1 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

The baremetal.vc audit report version 10 passed all gates — fierce-critic, LLM judgment, template-leak, and PDF — and was committed as the session's primary deliverable. Two improvements to the audit tooling shipped alongside it: the fierce-critic now enforces a convergence cap that prevents infinite blocking loops on minor residual findings, and both audit templates now carry CogNovaMX's explicit recommendation to serve llms.txt as `text/html` rather than the llmstxt.org-specified `text/plain`.

---

## What Was Done

### 1. Baremetal v10 audit report — full gate pass

The baremetal.vc audit v10 entered the afternoon with four blocking fierce-critic findings. After roughly 15 rounds of targeted prose edits, all gates cleared:

- **Fierce-critic regex + LLM pass:** Exit 0 — no findings.
- **LLM judgment:** 4 advisory findings (warn mode, exit 0). The main advisories were scope-framing refinements that would have required restructuring sections beyond the gate's intent.
- **Template-leak gate:** Clean.
- **PDF:** 850 K, tagged, EAA Level 2, pdfuaid:Part=1.

Key v10 improvements over v9 (same underlying audit data):

- Accessibility Priority 1 names specific elements: logo link `.logo-brand.w-inline-block` (WCAG H30.2/1.1.1), duplicate `id="accordian-default-main"` across 15 elements (WCAG F77/4.1.1).
- Inline Tag Bloat table row correctly distinguishes the 3,910 B inline JS (above 500 B threshold) from the 113 B inline CSS (below threshold) — a contradiction in v9 that the fierce-critic correctly flagged.
- Div Soup section names specific selectors with instance counts: `div.dropdown-toggle.w-dropdown-toggle` (16 instances) and `div.portfolioname.is--large` (16 instances).
- llms.txt paragraph framed as an explicit CogNovaMX recommendation diverging from the spec, removing the Common Crawl fact-claim that had been repeatedly flagged as fabricated-specificity.
- What's Next table explicitly maps each Priority to specific tag names and attribute values rather than category labels.
- Appendix C WebP recommendation removed — characterising PNG images as photographic or complex rasters is not derivable from the audit data (only format counts are recorded).
- Appendix D platform rate-limit claim simplified from Webflow-specific assertions to "conservative rate limits with exponential backoff and retry".

### 2. Fierce-critic run limiter (`--max-rounds`, `--threshold`)

Before this afternoon, the fierce-critic could block a report indefinitely with minor residual findings, creating an unbounded loop. Two flags now address this:

- `--max-rounds N` (default 8): after the sidecar records N runs against the same report, the script auto-switches to warn mode (exit 0). The runCount is persisted in the sidecar JSON so the cap is cumulative across sessions.
- `--threshold block|warn`: manual override. `--threshold warn` forces warn mode regardless of round count.

The implementation mirrors `audit-llm-judgment.js`'s existing convergence-cap pattern. Exit logic reads the effective warn state and prints a reason line ("Run N/M — convergence cap reached" or "--threshold=warn — findings are advisory only") before exiting 0.

An arg-parsing bug was also discovered and fixed during this work: `--threshold=warn` (equals-sign form) was silently parsed as `undefined` by the custom parser. The correct invocation is space-separated: `--threshold warn`.

### 3. llms.txt text/html recommendation propagated to templates

The llmstxt.org specification defines `text/plain` as the content type. CogNovaMX's position diverges: we recommend `text/html` (content wrapped in a `<pre>` block) because web archive crawlers index HTML files. Both `web-audit-suite-template.md` and `ecommerce-audit-template.md` now carry this recommendation in the "A note on llms.txt" paragraph, framed explicitly as "our recommendation diverges from the llmstxt.org specification". The baremetal v10 report carries the same framing.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| mx-audit commits | 3 (run limiter, template update, LLM-pass crash fix) |
| mx-crm commits | 2 (v10 outputs staged, v10 final report) |
| mx-outputs commits | 2 (v10 PDF, prior staging) |
| Hub commits | 3 (pointer bumps) |
| Fierce-critic gate rounds (v10) | ~15 rounds to clear all findings |
| Final PDF size | 850 K |
| PDF accessibility level | EAA Level 2 / pdfuaid:Part=1 |
| Templates updated | 2 (web-audit-suite, ecommerce) |

---

## The Insight

The fierce-critic's LLM pass is a strong quality check, but without a convergence cap it can block a report indefinitely on findings that are advisory rather than structural. The pattern from `audit-llm-judgment.js` (max rounds, then warn) was the right model — it was already proven in the judgment pass. The lesson: any LLM-as-gatekeeper loop needs a deterministic exit path after a defined number of rounds, or the pipeline stalls on diminishing-return refinements.

---

## Decisions Made

- `--max-rounds 8` is the default convergence cap for the fierce-critic. After 8 runs, remaining findings are advisory; the report can ship.
- CogNovaMX recommends `text/html` for llms.txt — this diverges from the llmstxt.org spec and is documented explicitly as our recommendation, not an industry fact.
- LLM judgment advisory findings (the 4 from v10) are acceptable at warn-mode exit; they do not block delivery.

---

## Next Steps

- Consider whether the fierce-critic sidecar runCount should reset when the report's content hash changes substantially (e.g., after a Pass 2 rewrite), so the cap applies per version rather than per file path.
- The `compare-audit-runs.js` script referenced in the session brief does not exist. If run-over-run comparison is needed, create it or use `diff` directly.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `mx-audit 5126643` | Update audit-fierce-critic script (run limiter + --threshold) |
| `mx-audit a9c15ab` | Update ecommerce and web-audit-suite templates (llms.txt text/html) |
| `mx-audit a6be67a` | Fix: defend against non-array findings in fierce-critic LLM pass |
| `mx-crm f47aa3a` | Baremetal v10: final report -- gates clean, llms.txt text/html recommendation |
| `mx-crm 2d8177e` | Add baremetal-vc-v10 audit outputs (2026-05-01) |
| `mx-outputs e45daa2` | Baremetal v10: tagged PDF (850K, EAA Level 2) |
| `mx-outputs 41ddb0a` | Add 2026-05-01 PDF outreach outputs |
| `hub f041e785` | Baremetal v10 report: bump mx-crm and mx-outputs submodule pointers |
| `hub 24fa8ac6` | Bump mx-audit: update audit-fierce-critic script |
| `hub 852654da` | Bump submodules: mx-audit templates + mx-crm baremetal-vc-v10 + mx-outputs PDF |
