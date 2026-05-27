---
title: "Co-Directors Report - Unified Repair Speedup + Audit Template Fixes"
description: "Unified single-pass LLM repair landed (~178x faster on the repair phase) and three template/script fixes closed a self-feeding feedback loop in the audit gates."
author: "Tom Cranstoun"
created: 2026-05-27
modified: 2026-05-27
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-27-morning-report.md
---

# Co-Directors Report - Unified Repair Speedup + Audit Template Fixes

**Date:** 27 May 2026 - Morning
**Segment:** morning (since midnight)

---

## Summary

The audit pipeline's repair phase now runs in seconds instead of minutes. A single tool-use call to Haiku 4.5 replaced three sequential Sonnet calls, dropping the dotfusion.com repair time from 16.3 minutes to 5.5 seconds (~178x). A full 106-page audit of mx.allabout.network under the new pipeline produced a clean deliverable in one pass; what looked like residual gate failures turned out to be a self-feeding loop where each gate's diagnostic prose embedded placeholder tokens that the next gate read as fresh leaks. Five template and script fixes closed that loop. The audit suite now produces zero errors on a real 106-page run.

---

## What Was Done

### 1. Unified repair pass (replaces the three-call sequence)

Built `repair-report-unified.js` to replace the voice-scope, per-round, and final repair scripts. Two layers: a deterministic patch library (em-dashes, banned verdicts, exaggeration adjectives, American-to-British, bogus HTML placeholders) that resolves 30-60% of findings without an LLM call, then a single tool-use call to Haiku 4.5 that returns structured `{find, replace}` patches for the residue. The script applies each patch deterministically with a uniqueness check, so the model cannot accidentally orphan or duplicate text. A post-apply hygiene pass cleans double full-stops, sentence-leading "and", double spaces, and orphan semicolons.

Wired behind `MX_REPAIR_UNIFIED=1` so the existing three-script pathway remains the default until the new path has more miles. The pipeline defers per-gate repair to a single consolidated pass when the flag is on.

### 2. Three repair-quality improvements

- Tightened the system prompt to require clause-boundary `find` strings, with worked correct/incorrect examples. The earlier failure mode was the model returning a partial-clause patch that orphaned the trailing text; this is now rule and example.
- Swept em-dashes out of `web-audit-suite-template.md` so the deterministic patcher does not have to fix template-derived text every run.
- Added the hygiene-pass cleanup so the residue from any imperfect LLM patch is repaired in place rather than shipped to the reader.

### 3. Audit gate feedback-loop fix

A live audit of mx.allabout.network surfaced what looked like three failing gates (0a template coverage, 0g per-section sanity, 1 template leak). Root causes:

- The Cross-Page Consistency table handler's regex required the em-dash form `[N missing or -]` but the template now had the hyphen form; no rows got filled. Fixed the regex to accept both.
- The SDQ_SCORE conditional's prose contained "the page" inside an active-voice clause, which the template-voice check flagged. The gate's diagnostic context then quoted the literal `[IF SDQ_SCORE >= 76: "..."]` text, which downstream gates read as a fresh template leak.
- `audit_errors.json` accumulated findings across gate runs because no step ever cleared it; the diagnostic section in the rendered report kept growing.
- The diagnostic section ("Audit gate findings for human review") embeds earlier gate findings verbatim. By design those findings reference placeholder tokens like `[NUMBER_OF_PAGES_AUDITED]` and `[X]` for the reviewer. The leak gate, the tone gate, the coverage gate, the section-sanity gate, and the coherence gate were all reading that meta-block as if it were report content and re-flagging the same findings every run.

Fixed at five gates with a shared `stripDiagnosticSection` helper that skips the sentinel-delimited block. Added a `clearErrors()` call at the start of every gates run. Rephrased the SDQ_SCORE prose to drop "the page". Made the Cross-Page Consistency regex accept both em-dash and hyphen forms.

After the fixes a fresh 106-page audit produces 0 errors, 1 warning (a legitimate audit content observation about Priority 2 not appearing in the engagement phases), all 11 gates pass, PDF generated with EAA Level 2 tagged conformance.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 2 (1 mx-outputs, 1 hub pending) |
| Files changed | 147 (mx-outputs) + 9 (hub) |
| Lines added | +95,758 (mx-outputs) |
| Lines removed | -668 (mx-outputs) |
| Repositories | 2 (hub, mx-outputs) |
| Audit speedup measured | 178x on dotfusion.com repair phase (16.3 min -> 5.5 s) |
| Live audit pages | 106 (mx.allabout.network full sitemap) |
| Final audit findings | 0 errors, 1 warning (legitimate content observation) |
| Audit gates fixed | 5 (leak, tone, coverage, section-sanity, coherence) |

---

## Why It Matters

The audit is the front line of CogNovaMX's outbound work. Every prospect run takes operator time and API budget; cutting the repair phase from sixteen minutes to under six seconds changes what scale of outreach is economically viable. Five-minute audits become viable as a no-friction prospect first-touch. Twenty-minute audits forced a deliberate decision before running each one.

The gate feedback-loop fix matters separately. Before today every audit shipped with cosmetic residue in the diagnostic section that re-tripped on subsequent runs; an operator looking at the warnings table could not distinguish "this site has a real issue" from "this gate is reading its own prior output". The five-gate strip helper makes the diagnostic block what it was meant to be: a human-facing meta-summary that does not interfere with the machine-facing checks.

---

## The Insight

The diagnostic section was leaking into the gates that produced it. A meta-block whose entire purpose is to surface findings - in their verbatim form, for human review - is invisible as a source when its content matches the same patterns the gates scan for. The fix is not better escaping; it is recognising that the meta-block sits outside the report's "content" boundary and should be excluded by any gate scanning that content. The sentinels were already in place; nothing read them.

This pattern probably repeats elsewhere in the audit codebase. Any check that scans the rendered report markdown should ask whether the diagnostic section is in scope, and the answer is almost always no.

---

## Decisions Made

- Unified repair stays behind a feature flag (`MX_REPAIR_UNIFIED=1`) until the new path has more miles across diverse audits; the legacy three-script path remains the default.
- The deterministic-patches library deliberately omits the verb-noun ambiguous word "broken" (broken-link / broken-code-fences are technical compounds, not banned verdicts).
- The diagnostic-strip helper is the right abstraction across multiple gates; we paid a small refactoring cost to share it rather than inline the same logic five times.

---

## Next Steps

- Run the cleaned pipeline against the rest of the prospect list to validate the unified-repair path across diverse sites; promote `MX_REPAIR_UNIFIED=1` to default once two or three more audits ship clean under it.
- Audit other gates that scan rendered report markdown to see whether they should also strip the diagnostic section (this morning's five were the ones the audit log surfaced; more may exist).
- Document the deterministic-patches library + tool-use repair pattern as a Reginald-friendly evidence example: the three-hash chain travels with each patch, the patcher is byte-deterministic, the LLM call returns structured patches that an inspector can replay.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 9da9721 | mx-outputs | Audit deliverables: dotfusion.com, mx.allabout.network, enhancely.ai re-runs |
| _pending_ | hub | Unified repair stack + audit template fixes + gate diagnostic-section strip helper |
