---
title: "Co-Directors Report — Global Accessibility Framing + Baremetal Audit Suite"
description: "Full baremetal.vc audit run (14 reports, all gates), plus systematic broadening of EAA-only references to global accessibility framing across all content layers"
author: "Tom Cranstoun"
created: 2026-05-02
modified: 2026-05-02
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
---

# Co-Directors Report — Global Accessibility Framing + Baremetal Audit Suite

**Date:** 2 May 2026 — Evening
**Segment:** Evening (since midnight)

---

## Summary

Today's session ran the complete baremetal.vc audit portfolio — 14 client reports, all verification gates passing — and then completed a systematic sweep to broaden every EAA-only accessibility reference to global framing. The product now speaks to US, UK, Australian, and Canadian audiences as naturally as to EU ones. The evening portion extended that sweep to the audit report templates themselves, making the change consistent across every layer of the content stack.

---

## What Was Done

### 1. Baremetal.vc audit portfolio — 14 reports, all gates passing

Ran the full audit pipeline for all baremetal.vc portfolio companies. 14 individual client reports generated and verified (deterministic verifier, fierce-critic, template-leak gate, readability gate). Portfolio (uber) report generated separately. A PostToolUse hook false-positive was fixed — the per-host data check was incorrectly firing on multi-site portfolio reports; now exclused by path pattern. Rivan's PDF section was rewritten from scratch after garbled content was identified: both PDFs are external citations, inventory populated from CSV, correct EAA framing applied.

### 2. Self-audit: mx.allabout.network

Ran the web audit suite against the company's own site. Report and PDF generated. Gate convergence improvements applied during this run fed back into the templates.

### 3. Global accessibility framing sweep

Every reference to "the European Accessibility Act" or "EAA" as the sole legal authority for PDF accessibility was broadened to name the global convergence: ISO 14289-1 as the international technical standard, with EAA (EU), Section 508/ADA (US), UK PSBAR 2018, Australia DDA, and Canada ACA as the legal instruments that resolve to it. Affected layers:

- Three manuscript chapters (Protocols ch.11, ch.21, ch.22)
- Preface
- Appendix A
- Three blog posts (tagged-pdfs-are-mx, why-an-mx-audit-pays-for-itself, many-agents-one-metadata-layer)
- All 14 individual audit reports (PDF sections rewritten and PDFs regenerated)
- Both audit templates (web-audit-suite-template.md, ecommerce-audit-template.md)
- llms-full.txt regenerated to reflect blog post changes

### 4. Template quality fixes

Two rounds of template fixes applied during the day: PDF section renamed from "EAA Compliance Snapshot" to "Accessibility and Machine Readability"; two-concern preamble added (legal + machine readability as parallel independent concerns); scope note added to all three PDF SECTION branches; div-soup instruction rewritten to remove anthropomorphic "machines understand" framing.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits today | 11 |
| Files changed (hub) | 24 |
| Lines added | +238 |
| Lines removed | −50 |
| Submodule commits (mx-audit) | 4 |
| Submodule commits (mx-outputs) | 2 |
| Individual audit reports updated | 14 |
| PDFs regenerated | 14+ |
| Content layers touched | 7 (manuscripts, appendices, blog, reports, templates, llms-full, hook) |

---

## Why It Matters

The product has been positioning PDF accessibility primarily as an EU compliance concern. That framing excludes roughly two-thirds of the potential market — US enterprises under Section 508 and ADA Title III, UK public sector bodies under PSBAR, and equivalent markets in Australia and Canada. The sweep makes the same message land for any audience, without weakening the EU-specific detail (EAA is still named as the most precisely codified example). This is a positioning fix, not a product fix.

---

## The Insight

ISO 14289-1 (PDF/UA) is genuinely a global convergence point — every major accessibility regime arrives at the same technical artefact through different legal paths. Framing EAA as one instance of that pattern, rather than the sole driver, is both more accurate and more commercially useful. The framing work was straightforward once the principle was clear; the challenge was ensuring consistency across every layer simultaneously rather than leaving some files with the old framing.

---

## Next Steps

- Run the baremetal.vc portfolio audit reports through client delivery review
- Consider whether the two-concern PDF preamble (legal + machine readability) should be extracted as a reusable prose block in the template rather than a REWRITE instruction

---

## Commit Log

| Hash | Description |
|------|-------------|
| 5b6f8762 | Bump submodules: global accessibility framing in audit templates |
| aedf8b81 | Bump mx-outputs: blog posts EAA broadening |
| 34a385cc | Manuscripts: broaden EAA references to include global accessibility legislation |
| 8d28418d | Bump submodules: PDF section machine readability + scope note, all 14 reports regenned |
| 7d13ed65 | Bump mx-audit: PDF section machine-readability framing |
| b8d0a074 | Bump mx-audit: PDF scope note in both templates |
| 82918b52 | Rivan PDF section fix: populate inventory, correct EAA framing, regen PDF |
| 788febdb | Baremetal.vc portfolio report + hook fix |
| d3f2afe9 | Hook: run-cog-enforcer -- force cog SOP execution on run/execute/follow intent |
| 977aba2d | Bump mx-audit: div-soup brittle-heuristics fix in both templates |
| f74e30cd | Audit: baremetal.vc portfolio -- 14 reports, all gates passing (2026-05-02) |
| 66ed666d | Self-audit: mx.allabout.network report + gate convergence improvements |
| mx-audit f0a90f9 | Templates: global accessibility framing in PDF section |
| mx-outputs a662c7e | Regenerate llms-full.txt: global accessibility framing |
