---
title: "Co-Directors Report - Lead-With-the-Outcome Selling Rule"
description: "Made 'lead with the outcome, never the hours or the deliverable' a canonical selling rule across CLAUDE.md, the audit report template, and the pitch family, alongside a parallel TrustClaw / Reginald-vnext engineering push."
author: "Tom Cranstoun"
created: 2026-06-11
modified: 2026-06-11
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-11-afternoon-report.md
  purpose: "Made 'lead with the outcome, never the hours or the deliverable' a canonical selling rule across CLAUDE.md, the audit report template, and the pitch family, alongside a parallel TrustClaw / Reginald-vnext engineering push."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Lead-With-the-Outcome Selling Rule"]
---

# Co-Directors Report - Lead-With-the-Outcome Selling Rule

**Date:** 11 June 2026 - Afternoon
**Segment:** afternoon (since noon)

---

## Summary

The afternoon ran two concurrent workstreams. The one I drove turned a positioning principle into a standing rule: pitches, proposals, and client deliverables must lead with the outcome the buyer gets, never the hours spent or the artefact produced. It now lives in the always-on rulebook, in the audit report template as a soft upsell, and across the pitch family after a full audit of it. In parallel, a separate engineering session advanced the TrustClaw / Reginald-vnext local-inference work through three more PRD phases and tightened several repo gates; that work is summarised below from its commit log, not from authorship.

---

## What Was Done

### 1. "Lead with the outcome" made a canonical selling rule

Tom's framing: clients do not buy hours or deliverables, they buy what the work does for them. A pitch that opens with "we will run a Level 1 audit and produce a COG manifest" describes a deliverable the buyer does not want; one that opens with "you will know exactly what an AI agent sees on your site, and hold a dated, attested record you can show a regulator" describes the outcome they pay for. On hours and deliverables, someone always undercuts you.

The rule landed in three places that enforce it, not just describe it:

- The always-on rulebook (CLAUDE.md), beside the two-pillar value proposition, so it binds every business-facing turn.
- The web-audit report template: a tone rule for every authored section, plus a reworded Next Steps section that leads with the outcome and keeps the deliverable list as the how. This is a soft upsell the client reads at the close of every audit.
- The pitch family, after auditing all twelve pitch and investor documents against the rule. The live decks already led with the problem; only three unfilled scaffolds and one sponsor cover letter needed correcting.

### 2. Parallel workstream: TrustClaw / Reginald-vnext (reported from the commit log)

A separate session advanced the local-inference TrustClaw track and repo hygiene this afternoon. From the commit log: TrustClaw PRD phases 2, 3, and 4 recorded (gpt-oss tool-calling cleared, agent cut-over done, embeddings local plus migration); the mcp-prd marked in-progress and wired into the Maxine plan's documentation map; llms generators set to exclude noindex pages with a freshness gate; a git-hook-install drift gate added to the test suite; and stale indexes regenerated after a remote merge. I did not author this work and record it here only for segment completeness.

### 3. Session close under concurrency

The working tree was heavily entangled, with two sessions live. I committed only my own work, by explicit path, in isolated commits, leaving the other session's in-flight canon, scripts, and a foreign submodule pointer untouched. The push carried my two commits plus the two settled TrustClaw commits beneath them, on Tom's instruction.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| My commits (this session) | 2 |
| My files changed | 6 |
| My lines | +18 / -6 |
| Pitch documents audited | 12 |
| Pitch documents needing correction | 4 |
| Segment commits (all workstreams) | 12 |
| Repositories | 2 (MX-hub, mx-outputs) |

---

## Why It Matters

This is a sales-discipline fix, not a cosmetic one. Every pitch and every audit report is a place where the work can be sold on outcome or undersold on deliverable. Encoding the rule in the always-on rulebook and in the report template means it applies by default, not case by case, and the audit report now carries a soft upsell that frames the next engagement by what the client gets. The cost was small; the leverage is every future client-facing document.

---

## Decisions Made

- "Lead with the outcome, never the hours or the deliverable" is now a standing rule for all business-facing writing, enforced in CLAUDE.md and the audit template.
- A deterministic gate to flag hours-or-deliverable language was considered and rejected: outcome-versus-deliverable framing is a judgement call, not a clean regex, so the rule stays a written rule rather than a scanner.

---

## Next Steps

- Consider mirroring the rule into writing-style.cog.md (the canonical house rulebook) so the rulebook-versus-enforcer split stays consistent; tracked in REMINDERS.
- Fill the pitch scaffolds (one-pager, pitch-deck) only on a live lead, now that they prescribe outcome-led ordering.

---

## Commit Log

| Hash | Description |
|------|-------------|
| e3eab824 | Changelog: record lead-with-the-outcome selling rule (mine) |
| f69f18aa | Pitch rule: lead with the outcome, never the hours or deliverable (mine) |
| c49b3318 | TrustClaw PRD: record Phase 4 (embeddings local + migration) |
| 9d01efe5 | mcp-prd: mark inProgress + tags; connect to Maxine uber-plan (doc-map edge) |
| 76c496f5 | TrustClaw PRD: record Phase 3 (agent cut-over done) |
| e48dc4d7 | Gate git-hook install drift: check-hooks-installed in npm test |
| 6b237a9d | mx-reginald-vnext: add folder metadata for scripts/ (resolves orphan) |
| 146322a4 | TrustClaw PRD: record Phase 2 result (gpt-oss tool-calling cleared) |
| c0140493 | Regenerate stale indexes after merge (routing registry, cog index, definitions) |
| 14afd955 | llms generators: exclude noindex pages; gate llms.txt freshness |
| cb56b4f9 | Merge remote-tracking branch 'origin/main' |
| 59d24992 | Resolve TrustClaw PRD open decisions |
