---
title: "Co-Directors Report - Deterministic Phrase Tokens, Score Bug Fix, and Blog Construction Leaks"
description: "Introduced PHR_ token namespace for deterministic phrase generation in audit reports; fixed n/a score bug in Executive Summary; found and fixed construction leaks across three published blog posts."
author: "Tom Cranstoun"
created: 2026-06-20
modified: 2026-06-20
version: "1.0"

type: report
tags: [directors-report, session, morning]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-20-morning-report.md
  purpose: "Introduced PHR_ token namespace for deterministic phrase generation in audit reports; fixed n/a score bug in Executive Summary; found and fixed construction leaks across three published blog posts."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - PHR_ deterministic phrase tokens, score bug fix, blog construction leaks"]

---

# Co-Directors Report - Deterministic Phrase Tokens, Score Bug Fix, and Blog Construction Leaks

**Date:** 20 June 2026 - Morning
**Segment:** Morning (since midnight)

---

## Summary

The audit report pipeline has two quality improvements that make it harder for the LLM rewrite step to produce wrong output. Structural intro sentences (like the "What's Working Well" opener) are now generated directly from score data rather than written by the model, eliminating the grammar failure that produced "a strong foundations" in the dotfusion report. A gate was also added to catch the separate failure mode where the model substitutes "n/a" for a score the scorecard table shows as a real number. A sweep of published blog posts found and fixed three construction leaks — internal pipeline terms that appeared in client-visible prose.

---

## What Was Done

### 1. PHR_ Deterministic Phrase Token Namespace

Five structural intro sentences in the audit report template previously went through the Ollama rewrite pass, which produced occasional grammar errors and phrase corruption (the "a strong foundations" incident). These sentences — the Human Experience subtable intro, the Machine Experience subtable intro, and the What's Working Well section opener — follow deterministic rules from score data: accessibility above 95%, load time thresholds, MX readiness level, top two strengths by score. They do not require judgment.

The fix introduces a `PHR_` token namespace. Tokens in this namespace are filled in Pass 1 (the deterministic infill step) by formula functions in `infill-report.js`. Pass 2 (Ollama) never sees them. The template contract records these as `handler: script-phrase`, distinguishing them from raw data tokens (`script-deterministic`) and the two genuinely complex narrative blocks (`rewrite-llm`) that still go to the model: the elevator pitch and the pipeline narrative. Gate 0a catches any unfilled PHR_ token automatically.

This change also removes the quoted example phrases from the rewrite block instructions — the root cause of the grammar error was that the model treated a quoted example like "a solid foundation" as a phrase template to copy, then misread the plural.

### 2. n/a Score Bug Fix and Gate

The dotfusion audit PDF showed "n/a/100 for accessibility and n/a/100 for SEO" in the Executive Summary despite the Balanced Scorecard showing 100/100 and 77/100 respectively. The bug: score variables were initialised with an empty-string fallback and guarded by `typeof === 'number'`, which silently failed when a value arrived as a string-coerced number or empty string. The scorecard table read from `averages` directly and always showed the right value; the elevator pitch variables had already been bound at a different point.

The score variables are now coerced with `Number.isFinite(Number(v))` and initialised to `null` rather than empty string. A new check in Gate 4c detects `n/a/100` in prose where the scorecard has a numeric score and blocks the PDF.

### 3. Construction Leak Fixes in Published Blog Posts

A scan of all audit-related blog posts against the construction leak pattern catalogue found three violations:

- **`ab-test-lying-to-machines.md`**: "cache-busted (each carries a unique query parameter)" named our internal probe mechanism. Replaced with a description of what the probe does.
- **`why-an-mx-audit-pays-for-itself.md`**: "cached HTML extract" revealed that we retain a copy of the fetched page HTML. Replaced with "audited page".
- **`audit-for-engineers.md`**: An internal gate script name (`check-prose-score-binding.js`) appeared in the paragraph describing the n/a detection gate. Replaced with a description of the gate's behaviour.

Two of the three posts are live on the mx-site and were republished after the fixes. The draft post was corrected in source.

---

## Why It Matters

The PHR_ token work is infrastructure. Every future audit now has three sections that cannot contain grammar errors or phrase corruption — they are produced by code, not a language model. The gate for n/a scores closes a quality gap that let contradictory output reach a client PDF through every verification layer. The construction leak fixes keep the public-facing writing clean of internal tooling references, which matters for trust: a client reading "check-prose-score-binding.js blocked the PDF" has no context for that; describing what the gate does instead is accurate and readable.

---

## The Insight

Construction leaks are rarely caught in review because they look like technical precision. "The gate parsed the scorecard table and blocked the PDF if n/a appeared where the scorecard had digits" and "`check-prose-score-binding.js` parses the scorecard table and blocks the PDF if..." carry identical facts. The second form is only wrong from a construction-leak standpoint — and that distinction is invisible when you're close to the work. The automated scanner found it; manual review would not have.

---

## Next Steps

- Run the full 31-domain batch audit now that the pipeline is verified end-to-end on dotfusion
- The PHR_ CLIENT_CONTEXT and FINDINGS_INTRO formula functions are set but their template tokens are absent — decide whether to add these to the template or remove the dead code
- Check the `ab-test-lying-to-machines.md` draft for any other technical prose before promoting to the live site
