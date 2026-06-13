---
title: "Co-Directors Report - Humanizer Documentation Pass"
description: "Expanded the humanizer AI-tell catalogue, wired new patterns into deterministic scanner scripts, and enshrined the determinism-before-inference manifesto principle."
author: "Tom Cranstoun"
created: 2026-06-13
modified: 2026-06-13
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-13-evening-report.md
  purpose: "Expanded the humanizer AI-tell catalogue, wired new patterns into deterministic scanner scripts, and enshrined the determinism-before-inference manifesto principle."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Humanizer Documentation Pass"]
---

# Co-Directors Report - Humanizer Documentation Pass

**Date:** 13 June 2026 - Evening
**Segment:** Evening (since 5pm)

---

## Summary

This session was a focused documentation pass on the humanizer skill - the tool that strips AI tells from prose before it reaches a client or a reader. The catalogue of AI tells was expanded significantly, every new pattern was wired into the deterministic pre-scanners, and a manifesto principle was added requiring scanners to run before any inference step. The work makes the humanizer harder to bypass by accident and more consistent with the repo's determinism-first operating rule.

---

## What Was Done

### 1. LinkedIn comment iterative refinement

Worked through a LinkedIn comment about MX and provenance in five passes, each stripping a newly-identified AI tell. Patterns surfaced and fixed in sequence: "lands close to" (vague proximity scene-setter), "that is the test" (hollow emphasis frame), "Where it stops short" (critique scaffold), "Not just whether X but whether Y" (negation-contrast scaffold), "That is the problem MX was built to address" (hollow importance frame), the agree-then-pivot triplet ("X is right. Y is right too. Both miss Z."), "structured surface" (MX-brand forbidden abstract noun), and the nominalised receiver construction ("the thing receiving it").

Each tell surfaced in live editing was immediately added to the humanizer catalogue.

### 2. Humanizer catalogue expansion

Added patterns across three categories:

**Single-word vocabulary (new entries):** `delve into`, `nuanced`, `robust`, `seamless/seamlessly`, `cutting-edge`, `ensure`, `landscape`, `ecosystem`, `innovative/innovation`, `crucial` - all with per-entry rephrase hints and exempt contexts, cited against the five source documents.

**Multi-word phrases (new entries):** `at the intersection of`, `shed light on`, `pave the way`, `plays a key/crucial/vital role`, `this is where X comes in`, `lands close to`, `where it stops short`, `that is the test`, `that is the problem X was built to address`, the agree-then-pivot triplet, and the `not just X but Y` / `not just whether X but whether Y` negation-contrast family.

**Structural patterns (new entries):** rhetorical question section opener ("What does this mean for X?") and three-word emphasis triplet ("fast, reliable, and scalable").

### 3. Deterministic scanner updates

All new patterns wired into the scanner scripts so detection is mechanical, not inferential:

- `scan-ai-vocab.mjs` - added single-word entries and five new phrase regexes
- `scan-prose-patterns.mjs` - added six new bridging-cliché patterns and two new scan categories (14: `rhetorical-question-opener`, 15: `three-word-triplet`)

Smoke-tested: all new patterns fire on a synthetic test file; `rhetorical-question-opener` correctly stays silent on mid-sentence questions.

### 4. Manifesto principle: determinism before inference

Added an explicit manifesto rule at Phase 2 of the humanizer skill and a gate reminder at Phase 3: deterministic scanners run before any inference - no exceptions. The reasoning is in the skill: inference is for judgement (keep-vs-drop, context, register); detection is for scripts. Phase 3 now carries a hard precondition: "Phase 2 must be complete before this phase opens."

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (this session's work) | 1 (bce31a3f, swept by concurrent session) |
| Files changed | 3 |
| Lines added | +76 |
| AI-tell patterns added to catalogue | 22 |
| New scanner categories | 2 (categories 14 and 15) |
| New scanner regex entries | 16 |

---

## Why It Matters

The humanizer is the last line of defence before client-facing prose ships. A catalogue gap means an AI tell passes the scanner and lands in a report or pitch. Each tell this session added was surfaced during real editing - not invented from a list - so every entry has a proven instance. Wiring them into the deterministic scanners means the next humanizer pass catches them mechanically, before any inference step sees the text. This is the enforcement model the repo's determinism rule demands.

---

## The Insight

"Lands close to", "where it stops short", "that is the test" - these are structural scaffolds, not vocabulary. They don't appear in AI vocabulary lists because they're made of ordinary words. The session confirmed that the catalogue needs both layers: the word-level vocabulary scanner and the phrase/structure scanner. Any session that works through real prose in live editing will surface more of these; the pattern is to add each one immediately.

---

## Decisions Made

- Manifesto principle added as a hard Phase 2 precondition in the humanizer skill - not as a note or suggestion.
- New scanner categories numbered 14 and 15 (not ad-hoc names) to maintain the numbering discipline of the existing catalogue.

---

## Next Steps

- Consider a dedicated `scan-scaffolds.mjs` for structural scaffolds (agree-then-pivot, hollow frames, critique scaffolds) as the list grows - the current bridging-cliché row in `scan-prose-patterns.mjs` is becoming long.
- Run `/humanizer` on the next client-facing deliverable to validate the new patterns fire in a real document.

---

## Update — Skills Session (later evening)

### New skill: step-document

Added `.claude/skills/step-document/skill.md`. Runs the documentation subset of the step-commit workflow (directors report, REMINDERS, documentation review, LEARNINGS, session-docs-check) without touching git, submodules, compliance gates, or the push. The skill reads step-commit on entry and applies an include/exclude test based on the nature of each step's work - no hard-coded step labels - so it tracks step-commit automatically as the workflow evolves.

### New skill: eliminate-numbers

Added `.claude/skills/eliminate-numbers/skill.md`. Removes numbered sequences from any file where the numbers are labels rather than meaning. Target named in the prompt; infers from session context if omitted. Frames the principle explicitly: numbers used only as labels create maintenance debt every time the list changes - names do not. Applies to skills, cogs, documents, and any other file with a numbered sequence.

### step-commit skill: number elimination and directors report fix

Applied `/eliminate-numbers` to step-commit itself. All numbered step cross-references in prose were replaced with the step's name (e.g. "Step 3" became "the main-repo commit step"; "Step 8" became "the MX field compliance gate"). The git-hashes requirement was also removed from the directors report step - the report does not need commit hashes to be generated.

### Memory: numbers-as-labels principle

Saved `feedback_eliminate_numbers_principle.md` to device and repo memory so future sessions default to named references in sequences.

---

## Update - PR Sequencing Session (late evening)

### PR #21 and PR #18 sequenced and merged

Tom selected the two oldest open PRs to merge first. Both had conflicts with main that required local resolution before merge.

**PR #21 - mx-fetch-full tool:** Added `scripts/bin/mx-fetch-full.cjs`, a 464-line CLI that fetches raw HTML and extracts all machine-readable artefacts (JSON-LD, meta tags, link rels, heading outline) without truncation. Classifies pages into three render-cost rungs. Optional `--rendered` flag diffs raw vs browser-rendered DOM. Optional `--discovery` flag probes origin-level files. Also added a draft blog post (`what-machines-hit-when-they-fetch.md`) and handbook sections in three chapters explaining that the raw HTTP fetch is the agent's default and that page architecture decides what agents can read without rendering.

**PR #18 - drop doc synonym:** Terminology sweep replacing the "doc" business synonym with "cog" across all audiences. Added BDR 005 (`2026-06-05-doc-to-cog-rename.cog.md`) recording the decision to retire "MX Docs"/"doc" and fold the "MX Docs Ready" badge into the existing "MX Compatible" mark.

**Pre-existing failures fixed along the way (CLAUDE.md rule):** The merge process surfaced pre-existing gate failures that were fixed as part of the work: missing `mx.x-mx-contextProvides` on seven repo-audit, vnext, and mx-os files; corrupted MX-SOURCE-FRONTMATTER YAML in the adobe blog draft HTML (a `$1.9bn` value had been corrupted to `<meta name="mx:cog">1.9bn` by the cog-header hook); missing `mx.purpose`/`mx.stability`/`mx.runbook` on four script README and vnext files; and BDR-005 cog was an island in the documentation graph (fixed by wiring it to `decision-record-index`).

---

## Commit Log

| Hash | Description |
|------|-------------|
| bce31a3f | chore: regenerate stale indexes (routing-registry, definitions-index, llms-full) [contains this session's humanizer edits] |
| ca33df11 | Merge pull request #21 - mx-fetch-full tool |
| ab848c3d | chore: update mx-outputs pointer (adobe draft frontmatter fix) |
| aec77261 | fix(metadata): add missing mx.x-mx-contextProvides to repo-audit and vnext files |
| c68935f9 | chore(merge): resolve conflicts merging PR#21 mx-fetch-full into main |
| 0f107ae2 | chore(merge): resolve conflicts merging PR#18 drop-doc-synonym into main |
| fd80b67b | fix(metadata): add missing mx fields to vnext and scripts READMEs |
| 239058e2 | fix(docmap): add refersTo edges to BDR-005 cog |
| 02f31f96 | fix(docmap): use decision-record-index edge on BDR-005 to join graph |
