---
title: "Co-Directors Report - Audit Hardening Sweep and the Accessibility Tree Channel"
description: "Ten audit-pipeline commits closing a long reminder backlog, the start of the slot-binding migration with a byte-identical purity proof, and a new scored Accessibility Tree section shipped, verified on a live audit, propagated into the manuscripts, and published as a blog post."
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-12-morning-report.md
  purpose: "Record the audit hardening sweep, the slot-binding migration start, and the Accessibility Tree capability for the board."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit Hardening Sweep and the Accessibility Tree Channel"]
---

# Co-Directors Report - Audit Hardening Sweep and the Accessibility Tree Channel

**Date:** 12 June 2026 - Morning
**Segment:** morning (since midnight)

---

## Summary

The Web Audit Suite took its largest single-day hardening pass to date: ten commits closed roughly twenty-five accumulated REMINDERS items, started the slot-binding migration with a byte-identical purity proof, and shipped a new client-facing capability, the Accessibility Tree section. The new capability was verified end-to-end on a live audit of mx.allabout.network (every gate passed, tagged PDF produced, the new provenance field readable from the PDF's metadata), propagated into all three manuscripts plus two appendices and the glossary, and published as a blog post through the Intent CMS pipeline. The headline consequence: the audit now measures a channel no competitor review covers, and the fix discipline it reports (one template change rather than page-by-page repairs) is the kind of finding clients can act on in a day.

---

## What Was Done

### 1. Audit pipeline hardening (Commits 1-7 of the planned batch)

The reminder backlog audit planned yesterday executed in full. Highlights: the action-cog dispatch chain was repaired end-to-end (the registry had been carrying zero action-docs; it now carries the full set with runtimes); a shared LLM output-guards module gives the rewrite, repair, and judgment passes one banned-vocabulary and refusal definition, the same one the tone gate enforces, so a producer can never emit what a gate rejects; revalidation after a successful repair now clears resolved findings by the gate-name key every entry carries, ending the closing summary contradicting the gate state; a per-host concurrency lock stops two audits of the same site corrupting each other's work; the sitemap "pages not in the sitemap" finding now compares against the full published sitemap rather than the crawl sample, turning a suppressed claim into an accurate one; and every report table now carries APA-conformant numbering and titles, stamped deterministically rather than requested of the model.

### 2. Slot-binding migration started (the largest remaining audit refactor)

The report-assembly engine moved from a sequential per-token replacement loop to a single-pass resolver. The acceptance test was strict: the golden-master fixture had to render byte-identical before and after the engine swap, and it did. The first table handler migrated to the new compute pattern the same way (byte-identical). The remaining migration steps are recorded as a sequenced REMINDERS item with a full state ledger, and the architecture documentation describes the new convention as current state.

### 3. The Accessibility Tree channel (new capability, end-to-end)

A new audit section reads each page the way assistive technologies and several kinds of machine reader do. The defect catalogue is data, not code: one registry row per pattern, each with a deterministic detector, severity, and template-level fix guidance; adding a pattern is a row plus a test. The catalogue deliberately covers only what the existing WCAG pass cannot see: behaviour without semantics, link names that say nothing, labels that vanish, reference wiring that resolves to nothing, data locked in images. Findings cluster by repeated structure across pages, so a template defect reports once with one fix. The section carries its own score in the scoring methodology. One bounded model call exists (judging whether an image's text equivalent is adequate), local-first, fully provenance-captured, and skipped cleanly when no model is reachable.

Verification was a real audit of mx.allabout.network: all gates passed, the tagged PDF rendered with the section in it, and the new stewardship field (x-mx-managedBy) read back from the PDF metadata, closing that verification item too.

### 4. Manuscripts and blog

The heterogeneous-agent framing (there is no single agent; design every page for all of them with redundant channels; humans follow journeys, machines visit once) was propagated at three depths: a light passage in the free book, a medium section in Handbook v2 chapter 2, and a full treatment in Protocols chapter 11, plus a new anti-pattern in Appendix N, a self-test procedure in Appendix R, and a glossary entry. Appendix C already carried the customer-facing capability description from the lockstep work. A blog post, "The Machine That Visits Once", was authored in the Intent CMS source layer, passed the humanizer scanners, and published through the promote pipeline with sitemap and llms corpora regenerated.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (hub) | 10 |
| Commits (mx-outputs) | 3 |
| Files changed | 114 |
| Lines added | +3028 |
| Lines removed | -590 |
| Repositories | 2 |
| REMINDERS items closed or trimmed | 19 |
| New mocha tests | 85 (suite at 449) |
| New audit capability sections | 1 (Accessibility Tree, 13-pattern registry) |

---

## Why It Matters

The audit's commercial pitch is "what an agent sees when it reads your site". The Accessibility Tree section extends that to "what every kind of agent sees", with the redundancy argument giving clients a design rule they can apply rather than a score to worry about. The template-cluster discipline matters commercially too: a finding that says "one component, one fix" prices remediation honestly and makes the re-audit measurable. The hardening sweep matters for a different audience: the pipeline's own evidence chain (gate states, provenance, the stewardship field readable from the PDF alone) is the regulated-buyer story working as designed.

---

## The Insight

Two code paths that produce one verdict will drift; this session found the same defect shape four more times (the revalidation map that cleared nothing, the test that duplicated the detector it tested, the prompt that recommended what its gate rejected, the token that no gate could see because its name broke the naming convention). The durable fix each time was the same: one shared definition, imported by both sides, with a test asserting the two agree. The session also retired a mystery: the golden fixture "self-updating" turned out to be a documented post-write hook regenerating it on template edits, a reminder that this repo's automation is dense enough that surprises deserve a hook audit before a debugging session.

---

## Open Questions

- The slot-binding migration's remaining phases (five handlers, the ad-hoc replace-site sweep, the bracket-to-curly flip) are sequenced and parked; the flip step needs an uninterrupted session.
- The blog post went straight to published per instruction; if the convention should revert to Tom-reviews-first for agent-authored posts, say so and the next post holds in drafts.

---

## Commit Log

Hub (MX-hub, main):

- 3483d28c Fix action-cog dispatch: mx-exec extractor, mx-run x-mx-execute, registry classification
- 897b861b Audit checker fixes: A/B toggle false positive, voice exemption, diagnostic-strip sweep
- 7266c51b Shared LLM output guards: one vocabulary for producers and the tone gate
- 2e832a9d Pipeline orchestration: summary reads final gate state; same-slug PID lock
- 85a1d6e7 Infill output: full-sitemap discrepancy recompute, APA table headers, page-count guard
- 481bfba6 Audit findings and fields: new platform wrinkles, temporal freshness, managedBy, auditCommand
- f64cb907 Template predicates enforced; /audit-scores starts from preflight findings
- bf4a3f6f Slot binding D1: single-pass dual-syntax resolver replaces sequential infill loop
- 7faf18b9 Slot binding D2 (first handler): errorPageTest to compute-pattern
- d492e66b Accessibility-tree channel check: pattern registry, clustered findings, scored section

mx-outputs (main):

- d850da7b Ignore per-host audit concurrency lock (audit/**/.lock)
- 730324f6 mx.allabout.network audit 2026-06-12: first delivery carrying the Accessibility Tree section
- cc34d77c Publish blog: The Machine That Visits Once

A further hub commit follows this report (manuscript propagation, blog source, the audit-scope fix, and the submodule pointer bump).
