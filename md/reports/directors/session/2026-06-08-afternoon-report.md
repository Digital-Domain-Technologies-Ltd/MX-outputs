---
title: "Co-Directors Report — Intent CMS Revision Model, a Drift Gate, and a Verification Skill"
description: "Shipped the Intent CMS revision model (revise in place from the source), a pre-push gate that stops the spec drifting from the code, a new MX-lens verification skill, and the first blog post authored into the Intent CMS source layer."
author: "Tom Cranstoun"
created: 2026-06-08
modified: 2026-06-08
version: "1.0"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-08-afternoon-report.md
  purpose: "Board-level record of the Intent CMS revision-model, drift-gate, verification-skill, and first-source-post session."
  stability: stable
  runbook: "Session report. Read the findings; do not edit by hand once filed."
  x-mx-contextProvides: ["Co-Directors Report - Intent CMS revision model, drift gate, verification skill"]

---

# Co-Directors Report — Intent CMS Revision Model, a Drift Gate, and a Verification Skill

**Date:** 8 June 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

This session hardened the Intent CMS, the content engine we will both dogfood and sell. It fixed how a published page is revised (regenerate from the markdown source, never move or lose it), added a gate that stops the Intent CMS specification drifting away from the code, shipped a new MX-lens verification skill, and authored the first blog post straight into the Intent CMS source layer. The single most important outcome is the gate: the Intent CMS now has a self-enforcing loop where a code change cannot ship without the specification being updated, so it cannot quietly rot while it is still being built.

---

## What Was Done

### 1. Intent CMS revision model: regenerate from the source, never move it

A published blog post could not be cleanly revised: publishing moved the only copy, leaving nothing to edit from. The fix makes the markdown source in the draft-site layer the durable original and the served HTML a disposable, regenerable copy. A new `--republish` mode regenerates a live post in place from that source; the by-hand path copies the draft to published and keeps the draft as the revision point rather than moving it. This is the difference between a content system you can correct and one where every edit risks the original.

### 2. A drift gate so the specification cannot lie

The Intent CMS is documented in two product-requirements files. During the session we found the documentation already stale: one file called a feature "not yet built" the day after it shipped, and that wrong claim had spread into the assistant's own routing notes. Rather than just correct it, we added a pre-push gate that blocks any change to the Intent CMS code unless the requirements files are updated in the same step. The specification can no longer silently fall behind the code.

### 3. A new verification skill

A reusable verification capability now exists that inspects any claim or link, checks it against the most authoritative source available (the manuscripts, the canon, the wider repository, or the live web), reports what is wrong, and then proposes changes back to our own corpus. It was exercised live against an external article and against our own master plan, finding real errors in both.

### 4. The first post authored into the new engine

The first blog post written directly as Intent CMS source (rather than hand-built HTML) was drafted, edited to house standard, and staged. It argues that blocking machines from a website fails and that cooperation is the cheaper path. It also doubles as the first real exercise of the new publishing route.

### 5. Review, navigation, and a false-alarm fix

The requirements files were reviewed against reality and corrected; the importer's preview folder was made navigable; and a quality check that was wrongly flagging captured external pages was taught to leave them alone.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 8 |
| Files changed | 30 |
| Lines added | +766 |
| Lines removed | −85 |
| Repositories | 2 (MX-hub, mx-outputs) |
| New skills | 1 |
| New pre-push gates | 1 |
| Requirements files reviewed and fixed | 2 |

---

## Why It Matters

This is governance-maturity work, not a feature sprint. The Intent CMS is the engine behind the "queryable, verifiable evidence" proposition we sell; a system whose own specification is kept honest by an automatic gate is exactly the discipline a careful buyer or auditor looks for when they get under the hood. The revision fix removes a quiet data-loss risk before the engine carries real customer content.

---

## The Insight

Documentation drifts from code faster than anyone expects, and stale documentation propagates. A one-line "not yet built" note, wrong by a single day, had already spread from a README into the assistant's working notes before it was caught. The durable answer was not a correction but a gate: make the code and its specification move together, by force, so the drift cannot recur.

---

## Decisions Made

- Revision is regenerate-from-source, never move-the-source. The markdown is the original; the served page is a regenerable copy.
- A lockstep gate, not auto-generated prose, keeps the requirements files honest. A script cannot write requirements text correctly, so it enforces that a human does.

---

## Next Steps

- Promote the "Block the Machine" blog post to live once the prose edit settles, via the new publishing route.
- Build the Intent CMS page-publishing path (only the blog path is wired today).
- Address the 61 deprecated metadata fields surfaced across the wider corpus this session; pre-existing debt, left untouched.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 02cd1c1a | Add mx-practice: MX-lens statement/link verifier cog and router skill |
| 4a4065fe | Intent CMS: idempotent re-publish, copy-not-move, PRD drift gate |
| c7cab568 | Point skills and docs at the Intent CMS as the target content model |
| 7736c915 | Add blog draft: Block the Machine, It Walks Around You |
| 3a7188f7 | Docs: changelog, learnings, reminder for the Intent CMS session |
| d66c316d | Refresh definitions-index after Intent CMS cog edits |
| 2ab8e0dd | Exempt captured pages from html-hygiene; add intent-preview lander |
| d4e8ae6d | Add intent-preview index lander (mx-outputs) |
