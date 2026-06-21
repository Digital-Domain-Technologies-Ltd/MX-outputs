---
title: "Co-Directors Report - Artefact Lifecycle, Index Friability, and the TrustClaw Local-Only Redesign"
description: "Evening segment: one cross-carrier lifecycle field designed, six enum-prose drifts fixed, generated indexes made self-declaring and gate-enforced, TrustClaw rebuilt to run fully local across five reviewed phases, and the long-standing working-tree churn ended by making every index generator deterministic behind a new idempotency gate."
author: "Tom Cranstoun"
created: 2026-06-11
modified: 2026-06-11
version: "1.2"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
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

A third body of work closed a recurring friction that had nagged the team for over a week: every test run and every push left the same handful of files modified, so a developer kept reverting them by hand. The root cause was that the repository's auto-generated index files were built non-deterministically - they stamped the current time into themselves and read directories in whatever order the filesystem returned - so they differed on every run even when nothing had changed. We made every one of those generators deterministic, isolated the test suite so it writes its scratch files to a temporary location rather than into the repository, and added a gate that proves the property holds so it cannot quietly return. The wider lesson became two written rules: a repository whose test suite is tolerated red has stopped meaning anything by "green", and changelog-style narration does not belong in the files that state the current rules. Both are now enforced or documented rather than remembered.

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

### 6. The working-tree churn ended at its source

The index files the repository generates from its own contents stamped the current time into themselves and read directories in filesystem order, so they came out different on every run. A separate maintenance command applied that difference in place after each push, which is why the same files reappeared as "modified" no matter how many times they were reverted. We removed both causes: every generator now sorts its inputs and emits no timestamp, writing only when the content genuinely changed, so regenerating an index twice produces an identical file. The test suite was a second source of the same noise - some tests wrote their working files into the repository's own fixtures, and one rewrote the appendix pages of the public site without the metadata every served page must carry. The tests now write to a temporary location, the appendix pages were corrected at the generator that produces them, and the machine-readable corpus was regenerated to match. A new push-time gate runs every generator and refuses the push if the tree changes as a result, so a future regression that reintroduces the non-determinism is caught immediately rather than rediscovered by hand weeks later. Two operating rules came out of the work and were written into the always-on rulebook: fix a failing check you surface rather than stepping around it, and keep change-narration out of the files that state the current rules.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (this segment, hub) | 9 (4 artefact-lifecycle + 1 TrustClaw docs + 4 working-tree churn) |
| Commits (this segment, mx-maxine-claw submodule) | 5 (the five redesign phases) |
| Commits (this segment, mx-outputs submodule) | 1 (appendix noindex + corpus regen) |
| Repositories | 3 (hub + mx-maxine-claw + mx-outputs) |
| New canonical files | 6 + 6 (lifecycle PRD, index-metadata library and gate, TrustClaw PRD, architecture doc, operator manual; plus the idempotent-write helper, generated-index registry, idempotency gate, test isolation setup, and two unit tests) |
| New pre-push gates | 2 (Gate 24 index friability, Gate 25 generator idempotency) |
| New always-on rules | 2 (fix a surfaced failure; no change-narration in rulebooks) |
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
- Wire the served-page metadata comment into the appendix page generator so its own freshness check and the site-wide served-page gate stop contradicting each other; today the generator omits a comment the gate requires, so they cannot both be satisfied at once.

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
| 6fc2d181 | End working-tree churn: deterministic generators + idempotency gate |
| 3b1d8215 | Docs: determinism contract; two rulebook rules; changelog-prose sweep |
| 843c1e65 | Bump mx-outputs pointer (appendices noindex + corpus regen) |
| 88797e64 | Tie the cog-sync cogs together; note cog:sync determinism |
| mx-outputs 547a6f3a | Appendices noindex; regenerate machine corpus deterministically |
