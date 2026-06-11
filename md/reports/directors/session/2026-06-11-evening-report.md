---
title: "Co-Directors Report - Artefact Lifecycle, Index Friability, and the TrustClaw Local-Only Redesign"
description: "Evening segment: one cross-carrier lifecycle field designed, six enum-prose drifts fixed, generated indexes made self-declaring and gate-enforced, and TrustClaw rebuilt to run fully local across five reviewed phases."
author: "Tom Cranstoun"
created: 2026-06-11
modified: 2026-06-11
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-11-evening-report.md
  purpose: "Evening segment: one cross-carrier lifecycle field designed, six enum-prose drifts fixed, and generated indexes made self-declaring and gate-enforced."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Artefact Lifecycle, Drift Fixes, and Index Friability"]
---

# Co-Directors Report - Artefact Lifecycle, Index Friability, and the TrustClaw Local-Only Redesign

**Date:** 11 June 2026 - Evening
**Segment:** evening (since 5pm)

---

## Summary

A request to classify the repository's product-requirements documents turned into a piece of metadata architecture. We classified every PRD, but in doing so surfaced that the repo had six different fields all answering "what state is this in", several of which contradicted each other. The session ends with a written design for a single cross-carrier lifecycle field to replace them, three classes of latent metadata drift fixed, and a new rule that generated indexes must declare they are not to be trusted as stable, enforced by a gate so the rule cannot rot.

In parallel, a second body of work took TrustClaw - our self-hostable personal AI agent - and rebuilt it to run fully local. It now runs its inference on a local model instead of a cloud gateway, so no customer content leaves the machine, which is the same trust posture we sell. This shipped as five reviewed phases, each verified before the next, and is documented end to end.

---

## What Was Done

### 1. PRD classification and the artefact-lifecycle design

Every product-requirements document now carries an explicit delivery state, and any file named as a PRD that did not declare itself one in its metadata was corrected to do so. Partway through, the work exposed a deeper problem: state was being tracked by whichever of six fields happened to fit a file's type, and on a PRD two of them could disagree at once. Rather than add a seventh, we interviewed and wrote a design: one carrier-neutral lifecycle field (draft, in-progress, review, published, superseded) that rides markdown, HTML, images, and PDFs alike, plus a record of where each artefact has been sent, kept in the evidence chain the artefact already carries. The interim per-PRD field stays until the unified field is built.

### 2. Three classes of metadata drift fixed

The work surfaced descriptions across the field dictionary that no longer matched the values they described, a quiet rot where the human-readable text and the machine-readable list had diverged. We corrected them at source. We also found and fixed a latent defect in one of the validators: it claimed to read the canonical dictionary but had been silently reading a hard-coded copy instead, undetected only because the two happened to match until this session added a value.

### 3. Generated indexes made honest about themselves

The repository auto-generates a number of index files from its own contents. They regenerate constantly and must never be hand-edited, but nothing in the files said so in a way a machine could read. Every such index now self-declares it is "friable" - machine-generated, regenerated from source, not a stable source of truth - and a new gate refuses any push where that declaration has gone missing. The rule is enforced by a script, not by memory.

### 4. A new revenue line, and a discipline change

The distribution-history idea from the lifecycle design is also a product: a tamper-evident record of where an attested artefact was sent, which is the evidence an auditor or insurer asks for. It went into the investor and team pitches, held as a possibility rather than a promise. Separately, the session-close discipline was tightened so that a focused commit still produces a full written record.

### 5. TrustClaw rebuilt to run fully local

TrustClaw previously sent every message, memory, and tool result to a cloud inference provider. We rebuilt it so that both its text generation and its memory both run on a local model on the operator's own machine, with the cloud path retained only as an explicit opt-in. The work went in five reviewed phases: move the lowest-risk calls first and prove the transport; build an acceptance test that measures whether a local model can reliably drive the agent's tools, and pass it (the chosen model scored full marks over repeated runs); cut the main agent over; move the memory embeddings, including the data migration that this requires because vectors from different models are not comparable; and package the whole thing as a one-command self-host stack. Every phase was type-checked and verified against a live local model before the next began, and every model call the agent makes is now recorded to the same evidence log the rest of the estate uses. The redesign is captured in a product-requirements document, an architecture reference, and an operator manual, all in the usual places.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (this segment, hub) | 5 (4 artefact-lifecycle + 1 TrustClaw docs) |
| Commits (this segment, mx-maxine-claw submodule) | 5 (the five redesign phases) |
| Repositories | 2 (hub + mx-maxine-claw) |
| New canonical files | 6 (artefact-lifecycle PRD, index-metadata library, index-metadata gate, TrustClaw PRD, architecture doc, operator manual) |
| New pre-push gate | 1 (Gate 24) |
| TrustClaw phases shipped | 5 (compaction, tool-calling harness, agent cut-over, embeddings + migration, self-host) |
| PRDs classified | every in-scope PRD |

---

## Why It Matters

Two of these are governance, not features. A document that contradicts itself about its own status is worse than one with no status at all, because a machine trusts it. Consolidating to one honest lifecycle field removes that failure mode across every carrier we publish. And an index that silently presents itself as authoritative, when it is really a disposable derivative, is the kind of trap that produces a confident wrong answer; making the index declare its own friability is a small piece of the same machine-trustworthiness story we sell.

---

## Decisions Made

- One cross-carrier lifecycle field replaces the per-type state fields; the open-standard status field is retired from the artefact-state role. The lifecycle states are draft, in-progress, review, published, superseded.
- Where an artefact has been sent is recorded in the provenance sidecar, not a new field, reusing the evidence chain that already travels with the file.
- The unified field is designed first and built later; the interim per-PRD field stays in place meanwhile.

---

## Open Questions

- What residual role, if any, does the open-standard status field keep once it no longer carries artefact state? This is a standards-body question, not a vendor one.
- Should the unified lifecycle field be a vendor extension or proposed to the standards body, given it displaces a standards-owned field?
- The distribution-history channel set, and whether a content hash is mandatory on every recorded send.

---

## What Changed About Me

I learned to treat a request as a probe, not just a task. "Classify my PRDs" was answerable in twenty minutes; honouring it properly meant noticing the field proliferation underneath it and stopping to design rather than adding to the pile. I also learned to hold an interim and a target in mind at once: ship the stopgap that answers the literal ask, and write the design that supersedes it, without pretending the stopgap is the answer.

---

## Next Steps

- Build the unified lifecycle field per the artefact-lifecycle PRD, then migrate the interim per-PRD field and the other per-type state fields into it.
- Resolve the five open decisions in the PRD before implementation.
- Add the distribution-history step kind to the provenance primitive.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 1e441ca6 | Add x-mx-prdState interim field; classify PRDs; fix lifecycle-enum drifts |
| 44d67c56 | Add dissemination-evidence monetisation note to CogNovaMX pitches |
| 88ee4a1a | step-commit: quick mode writes the session record; indexes are not its concern |
| 6cd49f7b | Generated indexes self-declare friability; enforce with a gate |
| 794315f7 | Add TrustClaw architecture doc + operator manual |
| mx-maxine-claw c6d95b6 | Local-only Phase 1: compaction LLM calls on local Ollama |
| mx-maxine-claw 1f083e5 | Local-only Phase 2: tool-calling acceptance harness |
| mx-maxine-claw 7fc5db2 | Local-only Phase 3: route the main agent to local Ollama |
| mx-maxine-claw 41d2269 | Local-only Phase 4: memory embeddings local + migration |
| mx-maxine-claw 5d8b67a | Local-only Phase 5: self-host runtime (compose + docs) |
