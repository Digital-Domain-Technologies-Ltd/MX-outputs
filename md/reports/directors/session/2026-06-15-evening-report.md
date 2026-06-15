---
title: "Co-Directors Report - Audit Pipeline Hardened: Language Guard, Three Posts Published, Probes Wired"
description: "Adversarial and machine-readability probes wired into the audit pipeline; AI-tells probe now skips non-English sites deterministically; three blog posts published; prose quality pass on 8 live posts."
author: "Tom Cranstoun"
created: 2026-06-15
modified: 2026-06-15
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-15-evening-report.md
  purpose: "Adversarial and machine-readability probes wired into audit pipeline; AI-tells probe gains a deterministic English-language guard; three blog posts published to the live site."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit Pipeline Hardened: Language Guard, Three Posts Published, Probes Wired"]
---

# Co-Directors Report - Audit Pipeline Hardened: Language Guard, Three Posts Published, Probes Wired

**Date:** 15 June 2026 - Evening
**Segment:** Evening (since 5pm)

---

## Summary

The evening session produced new blog content and a series of improvements to the web audit pipeline. Three blog posts went live on the site. Two new deterministic probes - one detecting adversarial signals in crawled HTML, one scoring machine-readability - were wired into the audit collection phase. The AI-writing-tells detector gained a language guard: it now reads the site's declared locales and skips the scan entirely on non-English sites, writing a structured skip record that removes the "Text Patterns" section from the client report automatically. A prose-quality pass was also applied across eight existing live posts.

---

## What Was Done

### 1. Blog Content Quality and Tag Chip Fix

"Without Cogs, No Machine Moves" was humanized, published to the live site, and a PDF was generated with the full provenance chain. Two further posts - one on 48 days to EU AI Act compliance and one comparing Document OS to Content OS - were also published. A row of clickable tag chips that had been rendering visibly at the top of every blog post was removed from all 98 affected HTML files and suppressed in the generator. A further prose-quality pass was applied across eight previously published posts: contraction normalization, word-choice tightening, and filler removal.

### 2. Audit Pipeline: New Probes Wired

Two new deterministic probes were added to the web audit collection phase and wired into the report template and infill system. The adversarial-signal probe scans cached HTML for prompt injection, invisible Unicode, CSS-hidden content, and steganographic metadata patterns. The machine-readability probe scores parse difficulty against four weighted signals: semantic content ratio, DOM nesting depth, average sentence length, and tables without header rows. Both probes produce structured JSON sidecars that feed placeholder tokens in the client report.

### 3. Audit Pipeline: Non-English Language Guard on AI-Tells Detector

The AI-writing-tells probe runs six English-only prose scanners. Applying them to non-English content produces meaningless scores. The probe now reads `hreflang_coverage.json` from the delivery folder before scanning. If the site declares no locale starting with `en`, the probe writes a skip sidecar (`skipped: true`, `peakBand: 0`) and exits. The infill system detects the skip and empties the template tokens, causing the `STRIP-IF: aiTells.peakBand < 2` guard in the report template to remove the "Text Patterns" section entirely. Sites without any `hreflang` declaration default to English - conservative, non-fatal.

### 4. Pipeline Version Stamp and Gate

The audit pipeline moved to v1.1.0 with a version stamp in every generated report, a CHANGELOG in the audit package, and a new Gate 28 that enforces version-stamp presence in committed reports.

---

## The Insight

The language guard is a small change with a clear correctness argument: an English-only scanner on a German site produces a score that means nothing and could mislead a client. The fix is fully deterministic - no LLM involvement - and the report section disappears cleanly when the probe skips. This is the pattern the audit pipeline is built on: deterministic detection, structured skip records, template guards that respond to data rather than conditional logic in prose.

---

## Next Steps

- Review the two new blog posts (`48-days-article-50-reginald.md`, `document-os-vs-content-os.md`) once live - confirm rendering and prose quality
- Run a non-English audit to verify the language guard fires correctly end-to-end in a real delivery
