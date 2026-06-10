---
title: "Co-Directors Report - Web-Audit Report-Quality Fixes and Session Close"
description: "Three correctness fixes to the web-audit generator, then a clean close that folded in settled prior-session work."
author: "Tom Cranstoun"
created: 2026-06-10
modified: 2026-06-10
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-10-evening-report.md
  purpose: "Three correctness fixes to the web-audit generator, then a clean close that folded in settled prior-session work."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Web-Audit Report-Quality Fixes and Session Close"]
---

# Co-Directors Report - Web-Audit Report-Quality Fixes and Session Close

**Date:** 10 June 2026 - Evening
**Segment:** evening (since 5pm)

---

## Summary

A client reading one of our audit reports flagged three quality problems, and we fixed all three at the generator so every future report inherits the fix. The report no longer contradicts itself on personalisation findings, no longer leaks how our audit tool is built, and now treats a site that fails to answer a machine as a scored fault rather than a shrug. We then closed the session cleanly, folding in a body of settled prior-session work (the v1 handbook archival and assorted tooling) so the working tree is committed and the audit suite is fully green.

---

## What Was Done

### 1. Three report-quality fixes to the web-audit generator

- **No more self-contradiction.** The "content tailoring" section used to fire whenever it spotted a personalisation tool on a site, then describe the danger as if it had caught the tool misbehaving, even when it had not. It now separates "a tool is present" from "we saw it serve different content", so a quiet tool reads as a noted risk, not a problem demanding action.
- **No construction leak.** Client reports were naming the internal mechanics our tool uses to probe a site. We removed that language from what clients see and added an automatic guard so it cannot creep back in, while keeping the genuine findings about the client's own setup.
- **Read reliability is now scored.** When our probes hit network errors or timeouts reading a site, the report used to call that "expected" and move on. It now counts those failures, deducts from the site's machine-readability score in proportion to how often they happen, and escalates to the executive summary when they are frequent. A machine reading under a time budget gives up on an unreliable site, so the score should reflect it.

### 2. Cleared three pre-existing test failures

Two were a test that was too broad and caught an unrelated change; one was a stale snapshot that needed regenerating against the corrected output. The audit suite is now fully green.

### 3. Session close: folded in settled prior-session work

At operator request, committed the rest of the working tree as a clearly separated second commit: the MX Handbook v1 source archived out of the repo, skill and canon edits, and new self-repair and content-heal tooling. Kept apart from the audit work so the deliverable stays isolated and reversible.

### 4. Refined the report's voice: positive frame, honest substance

A hunt for the next class of report defect surfaced a real tension: our reports lead with positives and frame problems as opportunities (the right instinct for a reader who would otherwise stop reading), but that framing could quietly soften a genuine blocking fault. We resolved it without weakening the positive voice. The one rule added: every opportunity must carry the underlying fact, so a page that is invisible to a machine is still named as such, just inside an opportunity frame. We also removed an overclaim that promised a client would become the "leading AI-discoverable brand" (an outcome we cannot promise) and softened a speculative recommendation into a "worth testing" suggestion.

### 5. Every report now names the command that produced it

Reports now carry a one-line field recording the exact command that ran the audit, so an operator can re-run it from scratch without remembering the entry URL, page count, or scope. A small but real ergonomics and reproducibility win for the audit service.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits this segment | 9 (3 feature, the rest docs / indexes / pointer bumps) |
| Repositories | 2 (hub, mx-outputs) |
| Audit-fix commit | 47 files, +1527 / -127 |
| Folded-in prior work | 145 files, +2881 / -11408 (handbook archival) |
| Audit deliverable persisted | 50 files (sibotacademy.pl report + provenance trail) |
| Test result | 687 passing, 0 failing |
| Gates clean | all pre-push gates (architecture, audit-suite-sync, contract, golden, mx-validator) |

---

## Why It Matters

The audit product is sold on trust: a report a peer agency or a regulator can rely on. A report that contradicts itself, that hands a competitor the blueprint of how it was built, or that quietly excuses a site for being unreadable to a machine erodes that trust on first read. All three were caught by a real reader, and all three are now fixed deterministically at the source, not patched in one report. The enforcement is a script and a gate, so the fix holds across every future audit without anyone remembering to apply it.

---

## The Insight

"Read reliability" as a scored, frequency-weighted machine-experience metric is a genuine differentiator. Most SEO and accessibility audits never penalise a site for being unreadable to a cold, time-budgeted agent, because they only model a human with a browser. Scoring it is a credible line item for a "Machine Read Reliability" feature in the audit product.

---

## Next Steps

- The committed sibotacademy.pl report still carries the old framing it was generated under, and now also predates the voice refinement and the new re-run field; regenerate it with the fixed pipeline to ship the corrected version.
- The folded-in prior-session work landed in one sweep; if any of it was meant to ship separately, it can be split before the next release.

---

## Commit Log

| Hash | Description |
|------|-------------|
| a2c521e2 | web-audit: A/B honesty, construction-leak scrub, network-error penalty |
| f083ca9c | Fold in prior-session work: handbook archival, tooling, canon edits |
| 91391431 | audit: positive frame, honest substance - anchor every opportunity to the fact |
| b4987de8 | audit: record the re-run command in every report's frontmatter |
| e07f5ef6 | audit-architecture: exclude audit-invocation.json from the Phase-2 inline set |
| fbae905b | (mx-outputs) Add sibotacademy.pl audit deliverable, provenance trail, and strays |
