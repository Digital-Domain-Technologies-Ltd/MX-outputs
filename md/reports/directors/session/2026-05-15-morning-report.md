---
title: "Co-Directors Report — The agent-script rule becomes canonical"
description: "Morning session: the agents-discover-scripts-deliver rule lands in every governing surface, the Salva PRD ships, and the scoring methodology becomes a single source of truth."
author: "Tom Cranstoun"
created: 2026-05-15
modified: 2026-05-15
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-15-morning-report.md
---

# Co-Directors Report — The agent-script rule becomes canonical

**Date:** 15 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

The rule that governs how MX uses AI agents stopped being a working preference and became canonical. Today it ships, in the same words, across nineteen surfaces: the Protocols manuscript chapter on Reginald, the MX principles cog, the Maxine uber-plan, the Reginald TODO invariant, the mx-audit and mx-reginald READMEs (and SOUL, explainer, reginald.md), the audit cog and audit-site skill, the seven DDT/CogNovaMX business documents (accreditation-programme, agency-pilot-brief, attestation-explainer, business-plan, faq, one-pager, pitch-deck), and a public blog post. Alongside that, the Stage 1 Reginald MVP PRD for Salva is in mx-crm, ready for him to fork from, and the audit pipeline's scoring methodology is now a single source of truth with a lockstep test that fails any drift.

---

## What Was Done

### 1. The agent-script rule, canonicalised

The same paragraph now governs every surface where the question "may we use an AI agent here?" can come up. The REGINALD core (cog validation, signing, verification, registry index) is deterministic and may not invoke a model. The web-audit suite may, under a bounded pattern: run the agent, observe, log, instrument, convert the steady-state behaviour into a deterministic script, and reserve a small LLM-judgement pass for the end only where a human-style verdict is genuinely needed. Anything an agent does the same way more than twice becomes code.

The rule lands in chapter 20 of the Protocols, the principles cog, the mx-audit README, the mx-reginald README and explainer, the audit cog (mapped phase-by-phase onto the audit pipeline), the audit-site skill, and a public blog post extending the existing static-snapshot piece. Same wording in every place, so a reader who finds the rule in one surface is reading the same rule any other reader is.

### 2. Salva Reginald MVP PRD shipped

The buildable specification agreed with Salva at the 14 May meeting is now in mx-crm as `tom-salva-prd.md`. It scopes Stage 1 (personal-wiki) only — single user, local filesystem, no public registry — and carries cog format, worked use cases, example cogs, component design, CLI surface, and test plan sufficient for Salva to fork the existing Reginald and audit codebases and ship test-first.

### 3. Scoring methodology becomes SSOT

`mx-audit/lib/scoring-methodology.json` is now the single source of truth for every score the audit pipeline emits. `tests/test-scoring-methodology-fresh.js` in the hub fails any drift between the formulas and the documented bands; it joins the `npm run test` chain so the gate runs every time. Peer-comparison numbers move to `mx-audit/benchmarks/peer-scores.json`, scanned by the report verifier so "vs Peers" claims in the prose resolve back to real data rather than being asserted. Audit templates gain a "vs Peers" column and a Compliance / Cross-cutting / AI-Opportunity bucket on each finding, so different budget owners can navigate to their own work. A new hub script, `scripts/build-benchmark-dataset.js`, rebuilds the peer dataset from existing audit outputs.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 5 (4 submodule + 1 hub, pending) |
| Files changed | 33 |
| Lines added | +1,318 |
| Lines removed | -71 |
| Repositories | 5 |
| Surfaces carrying the new rule | 19 |

---

## Why It Matters

Spreading the same rule across nineteen surfaces is governance work, not feature work, and the value is visible only when the rule is challenged. The next time someone (human or agent) proposes adding a model call inside the verification path, the answer is no, and the no can be cited from the manuscript, the principles cog, the audit cog, the skill, the READMEs, and the public blog. The cost of saying yes in a moment of expedience drops; the cost of saying no later, when an integrator has built on the expedient yes, drops further. Canonical text in many places is what makes a rule expensive to break.

---

## The Insight

The blog post Tom asked for at the start of the session ("update skills-static-not-subroutines.html with: I am a fan of getting the agents to run, observed, logged, instrumental, then convert to a deterministic script. Add a little llm judgement pass at the end") was not a one-off content edit; it was the public-facing surface of a rule that needed to land in six internal places too. Treating the blog post as the small request and the canon edits as the project would have buried the lead. The pattern to keep: when a single sentence captures a working preference, check whether it belongs in canon, and if it does, propagate before responding.

---

## Decisions Made

- Stage 1 Reginald (personal-wiki) is scoped to single-user, local filesystem, no public registry; everything else moves to a later stage. The PRD codifies this so Salva does not implement against ambient assumptions.
- The audit pipeline's Phase 2 default stays deterministic; Option B (agent-authored narrative) is explicitly the discovery surface, not the production surface, and any pattern that earns its keep there is expected to migrate back into the deterministic generator.

---

## Next Steps

- Salva to confirm receipt of the PRD and start of Stage 1 implementation.
- Peer benchmark dataset has sample size 1; rebuild after the next batch of external audits so peer-median lines stop being trivial.
- Watch for the first attempt to add a model call inside the REGINALD core; the canonical rule now makes the rejection cheap, and the first rejection is the proof the rule works.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 7951a22 | mx-audit: Scoring methodology SSOT + peer benchmarks + bucket-aware framing |
| ad1b062 | mx-crm: Add Salva Reginald MVP PRD |
| d1071a6 | mx-outputs: Blog — agent-to-script pattern in skills-static-not-subroutines |
| d5b6695 | mx-reginald: Docs — REGINALD core determinism + agent-script boundary |
| _pending_ | hub: agent-script rule canonicalised + scoring methodology wire-up |
