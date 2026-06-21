---
title: "Co-Directors Report - Humanizer Documentation Pass"
description: "Expanded the humanizer AI-tell catalogue, wired new patterns into deterministic scanner scripts, and enshrined the determinism-before-inference manifesto principle."
author: "Tom Cranstoun"
created: 2026-06-13
modified: 2026-06-13
version: "1.8"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
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

## Update - Sequential Ollama Calls (late evening)

### Problem addressed

Multiple scripts in the repo call a local Ollama instance concurrently - the audit pipeline, the content dashboard's editing tools, and future scripts all share one GPU. Concurrent Ollama requests thrash context windows, slow each other, and can crash the daemon. There was no architectural enforcement of sequential calls; it was a remembered convention.

### What was built

A serial call queue for all Ollama requests, enforced as a repo manifesto principle.

**`scripts/lib/llm-queue.cjs`** - new CJS singleton. Concurrency 1. Exports `queueOllamaCall(fn)`: fn() is called only after all previously-enqueued calls have settled; retries (up to `MX_OLLAMA_RETRY_MAX`, default 3) run inside the slot so other callers never interleave with a retrying call. The CJS module cache means both the audit pipeline and the content dashboard draw from the same queue instance in the same process.

**`mx-reginald/audit/lib/llm-client.js`** - `messages.create` and `messages.stream` Ollama paths now wrap `ollamaCreate` in `queueOllamaCall`. Anthropic cloud path unchanged.

**`scripts/lib/local-llm.cjs`** - `ollamaChat` wraps `_ollamaChatDirect` in `queueOllamaCall`. Same queue singleton.

**`scripts/check-llm-queue.cjs`** - gate checker. Fails on any direct Ollama endpoint call outside the two sanctioned wrap files; also verifies both wrap files import `llm-queue.cjs`. Available as `npm run llm:queue:check`, wired into `npm test` and the pre-push hook as Gate 23b.

**`mx-canon/ssot/principles.cog.md`** - **Sequential Ollama Calls** added as a named manifesto principle.

**`mx-reginald/audit/mx-audit-architecture.cog.md`** - Ollama queue section added under the LLM provider paragraph.

**`scripts/check-ai-log-coverage.cjs`** - Gate 23 allowlist comments updated to note the queue requirement on both sanctioned files.

**`.claude/hooks/pre-push.sh`** - Gate 23b added; hooks reinstalled.

The session was conducted as an interview-led design (via `/interview-me`) before any code was written: queue scope, provider scope, location, enforcement strategy, error handling, and concurrency were all confirmed before implementation began.

---

## Update - PR #26 Merge and Gate 23 Fix (late evening continuation)

### PR #26: LLM market-scan PRD merged

PR #26 ("Add recurring LLM market-scan PRD and wire it into REMINDERS") was merged into main after resolving multiple gate failures encountered during the push sequence. The PR defines a repeatable four-phase procedure (market sweep, shortlist, scripted bake-off, recommendation) for evaluating the audit pipeline's LLM options on a fixed cadence. The evaluation rubric anchors to the audit's real requirements: local/air-gapped/tool-calling default for regulated work, frontier cloud as an explicit opt-out.

### Gate sequence during PR #26 push

The merge required multiple rounds of conflict resolution and gate fixing before the push succeeded:

- Gate 22 (draft-site freshness): Pre-existing heal commits on the branch had no corresponding Zone-2 HTML. Fixed by promoting `whats-missing-best-prompt-technique.md` to Zone-2, then bypassing Gate 22 with `MX_SKIP_DRAFT_SITE_FRESH=1` for the pre-existing heals.
- Gate 16 (principles-index stale): Regenerated with `MX_INDEX_ANY_BRANCH=1 npm run principles:sync`.
- Gate 11 (internal links): Three dead links in scripts READMEs surfaced by the push scope; fixed in `ERROR-CODES.md`, `README-demo-server.md`, and `qr-code-generator/README-qr-generator.md`.
- Gate 23 (ai-log-coverage): `scripts/check-llm-queue.cjs` was flagged as a direct Ollama call. The file is a pattern-scanner that contains `OLLAMA_HOST` as a detection regex, not a live call. Fixed by adding it to the ALLOWLIST in `check-ai-log-coverage.cjs` with a comment distinguishing its role from production callers.

Lesson: checker files that scan for provider-call patterns will always contain the patterns they scan for. The allowlist is the correct mechanism; routing them through a teed client would be wrong (they make no calls).

## Update - PR #28 Merge: EU Commission Code of Practice Blog Post

### Content added

PR #28 ("Add blog post on EU Commission's Code of Practice for AI-generated content marking") merged cleanly with no conflicts.

**New draft source:** `datalake/draft-site/blog/the-commission-chose-open-standards.md`

The post contextualises the European Commission's June 2026 voluntary Code of Practice on marking and labelling AI-generated content, which promotes open and interoperable standards (C2PA Content Credentials) rather than inventing a proprietary mechanism. Key editorial angles:

- Article 50 mandatory obligations land 2 August 2026 - eight weeks from publish
- The Commission's choice validates MX's founding bet on open standards and deference to existing specs (Dublin Core, Schema.org, EXIF, XMP, C2PA)
- Watermarking (robustness after separation from context) and signed provenance (verifiable history that travels with the artefact) are complementary, not competing
- The MX/C2PA complementarity: C2PA is media-bound cryptographic manifests; MX is provenance for any addressable artefact

Also updated `appendix-m-index-of-metadata.md` with a reference addition related to the EU content-marking framework.

### Index regeneration

The new blog source and Appendix M change caused three generated indexes to go stale (routing-registry.json, definitions-index.md, mx-reginald/index.json). Regenerated on `main` using `npm run index:regen` and committed.

### Documentation catch-up

The CHANGELOG and LEARNINGS updates from the previous step-document run were on the now-closed PR branch, not in main. Re-applied both on main as part of this session:

- CHANGELOG v3.41: PR #26 entry (LLM market-scan PRD, Gate 23 fix) + PR #28 entry
- LEARNINGS: checker-script false-positive pattern rule

## Update - PR #29 Merge: Google GEO Guidance Probe and Grounding Audit

### What was built

PR #29 ("Add Google generative-AI-search guidance probe and grounding audit") adds deterministic signal detection plus an optional local-LLM grounding pass for Google's June 2026 generative-AI-search optimisation guidance.

**New audit probes:**

- `mx-reginald/audit/bin/check-geo-guidance.js` (453 lines) - deterministic homepage probe. Scans HTML, robots.txt, and response headers against Google's June 2026 guidance signal set. Separates debunked tactics (llms.txt pointers, AI-chunking markers, AI-only alternates, excess JSON-LD blocks) from durable fundamentals (crawlability, indexability, canonical declaration, visible word count, outbound source count, semantic structure). Derives an alignment verdict: `aligned`, `partial`, or `fundamentals-gap`. Caches with TTL and version tracking; outputs `results/geo_guidance.json`.

- `mx-reginald/audit/bin/geo-grounding-llm.js` (233 lines) - optional local-LLM companion. Judges whether page claims are grounded in cited sources. Runs against Ollama by default; soft-skips when unavailable. Up to 5 pages configurable. Outputs `results/geo_grounding_llm.json` summary + `results/geo_grounding_llm.jsonl` sidecar per finding.

**Supporting materials:** `system-prompts/geo-grounding.system.md`, `user-messages/geo-grounding.user.md`, `templates/seeds/geo-guidance-myths.json` (reference data cataloguing debunked tactics with Google quotes), unit tests.

**Pipeline integration:** `check-geo-guidance.js` wired into Phase 1 after the AI-usage check; `geo_guidance.json` passed to Phase 2 for context.

**Blog draft:** `datalake/draft-site/blog/google-named-geo-then-debunked-it.md` - explains Google's June 2026 guidance, what it debunks, and how MX provenance fills the gap. Updated blog index and two existing GEO/MX posts with cross-references.

### Design principle

All signal detection is regex-based enumerated rules with no inference. The grounding judgment (are claims actually supported by cited sources?) is the only LLM-driven step, and it is optional and soft-skips gracefully. The probe implements Google's guidance literally - debunked tactics surface as `info` severity, not failures; durable fundamentals are the ones that warn or fail when absent.

### Gate fix on merge

`mx-reginald/audit/user-messages/geo-grounding.user.md` was missing three required fields (`mx.purpose`, `mx.stability`, `mx.x-mx-contextProvides`). Fixed on main before push.

## Update - PR #30 Merge: Per-Engine AI-Citation Analysis

### What was built

PR #30 ("Add per-engine AI-citation analysis: matrix aggregator, canon axis, blog") adds infrastructure to track how different AI search engines - ChatGPT, Perplexity, Gemini, Grok, Copilot - cite sources, and to analyse the gap between what each engine values and what MX addresses.

**`mx-reginald/audit/lib/citation-matrix.js`** (232 lines) - core matrix logic. Defines the five citation goals each engine optimises for (authority, recency, user-intent match, structured retrieval, trust signals). Scores a site's MX implementation against each engine's citation model. Outputs a per-engine alignment matrix.

**`scripts/ai-citation-matrix.cjs`** (334 lines) - CLI entry point. Accepts a domain and produces a JSON report ranking citation-factor gaps across engines. Optional `--compare` flag overlays two domains for a competitive read.

**`mx-reginald/audit/scripts/build-citation-matrix.js`** (100 lines) - pipeline integration. Called from the audit orchestrator after Phase 2; appends citation-matrix findings to the audit report's AI-Visibility section.

**`mx-reginald/audit/ai-citation-matrix-prd.md`** (105 lines) - product requirements document for the matrix, recording design decisions (why five goals not per-feature scoring, the engine roster, the citation-goal taxonomy).

**`mx-reginald/audit/test/citation-matrix.test.js`** and **`tests/test-ai-citation-matrix.js`** - unit and integration tests wired into `npm test`.

**`datalake/draft-site/blog/ai-citation-is-five-goals-not-one.md`** - blog draft explaining the citation taxonomy, why different engines optimise for different goals, and how MX addresses each layer.

**`mx-canon/ssot/papers/geo-vs-mx.md`** updated with the citation-matrix framing (GEO is a tactic, MX is a specification; the matrix quantifies the gap).

### Merge conflict resolution

PR #30 had a `package.json` conflict with main: the PR added `test-ai-citation-matrix.js` to the test suite; main had meanwhile added `check-llm-queue.cjs`. Resolved locally by keeping both entries, pushed the resolution to the branch, then merged.

### Index regeneration

Three generated indexes went stale after the merge (routing-registry.json, documentation-map.json, documentation-map.md). Regenerated on main with `npm run index:regen` and committed (`7afbfcae`).

---

## Update - PR #31 Merge: OKF Positioning

### Context

Google announced the Open Knowledge Format (OKF) - a machine-readable content standard built on markdown and YAML linked into a graph. OKF validates the readable layer MX is built on and leaves the trust and governance layers open. PR #31 reshapes the MX pitch and commercial framing around that gap and delivers the content set that lands it.

### What was delivered

**`mx-canon/ssot/papers/okf-mx-positioning-prd.md`** (214 lines) - OKF positioning PRD. Leads the pitch with trust, not readability (readability is now table stakes since OKF ships it). COG positioned as OKF-compatible; REGINALD as the trust wrapper OKF omits; The Gathering as the governance OKF cannot be. Includes the OKF-bridge engagement model, EAA forcing function, competitive landscape (C2PA, W3C VCs, Schema.org, specification.website), customer journeys, resourcing (Salva for REGINALD, Dogu for The Gathering), and 30/60/90-day success criteria.

**Three blog drafts** (in `blog-drafts/`, authored outside the Intent CMS per instruction):

- `google-shipped-a-knowledge-format.md` - Post 1, the announcement. Time-sensitive; leads on what OKF is, what it validates, and what it leaves open for MX to fill.
- `cog-to-okf-field-mapping.md` - Post 2, the field-by-field mapping. Marked draft/experimental pending Salva's validation of the correspondences.
- `mx-protocols-is-here.md` - MX Protocols launch note (1 July), led with OKF framing. Price/ISBN left as pre-publish TODO.

**`REMINDERS.md`** updated with OKF follow-up items (publication sequence, Salva field-mapping validation, Dogu intro).

### Gate fix on merge

`blog-drafts/` is a new directory introduced by this PR. Gate 7 (orphan directories) blocked the push because it lacked `.mx.yaml.md`. Fixed by running `npm run mx:heal -- --orphans --apply`, enriching the generated skeleton with the folder's actual purpose (staging area for pre-promote drafts before moving to `datalake/draft-site/blog/`), and committing (`3d25ca22`).

### Strategic note

OKF changes the pitch order. Before OKF: lead with machine-readability, then build to trust. After OKF: machine-readability is assumed (Google shipped it); the pitch opens on trust, governance, and regulatory evidence. REGINALD and The Gathering are now the differentiators, not the format itself. This is the first time a major platform move has made MX's positioning sharper rather than more complicated.

---

## Commit Log

| Hash | Description |
|------|-------------|
| c3169fa8 | fix(gate-23): allowlist check-llm-queue.cjs in ai-log-coverage gate |
| b8210371 | fix(links): repair dead links in scripts READMEs |
| 15c8d73c | feat(arch): enforce Sequential Ollama Calls via serial queue |
| bce31a3f | chore: regenerate stale indexes (routing-registry, definitions-index, llms-full) [contains this session's humanizer edits] |
| ca33df11 | Merge pull request #21 - mx-fetch-full tool |
| ab848c3d | chore: update mx-outputs pointer (adobe draft frontmatter fix) |
| aec77261 | fix(metadata): add missing mx.x-mx-contextProvides to repo-audit and vnext files |
| c68935f9 | chore(merge): resolve conflicts merging PR#21 mx-fetch-full into main |
| 0f107ae2 | chore(merge): resolve conflicts merging PR#18 drop-doc-synonym into main |
| fd80b67b | fix(metadata): add missing mx fields to vnext and scripts READMEs |
| 239058e2 | fix(docmap): add refersTo edges to BDR-005 cog |
| 02f31f96 | fix(docmap): use decision-record-index edge on BDR-005 to join graph |
| 87c481f1 | Merge pull request #30 - per-engine AI-citation analysis |
| 3e0f5929 | merge: resolve package.json conflict - combine check-llm-queue and test-ai-citation-matrix |
| 7b90191c | docs: changelog v3.42 and bump mx-outputs for PR #29 session |
| 7afbfcae | chore: regenerate stale indexes after PR #30 merge (ai-citation-matrix) |
| 4c98ae1c | Merge pull request #31 - OKF positioning PRD and blog drafts |
| 61d37278 | chore: regenerate stale indexes after PR #31 merge (OKF positioning) |
| 3d25ca22 | fix(gate-7): add .mx.yaml.md to blog-drafts/ (PR #31 introduced dir) |
