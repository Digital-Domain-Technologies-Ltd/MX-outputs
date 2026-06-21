---
title: "Co-Directors Report — Tooling Discipline Across the Pipeline"
description: "Evening segment. One PDF orchestrator replaces four overlapping engines, the mx-graph validator stops emitting 425 spurious errors, cog actionType lands as a required field, a PreToolUse hook closes the staged-file failure mode, and a new blog draft enters the queue."
author: "Tom Cranstoun"
created: 2026-05-10
modified: 2026-05-10
version: "2.1"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-10-evening-report.md
  purpose: "Evening segment. One PDF orchestrator replaces four overlapping engines, the mx-graph validator stops emitting 425 spurious errors, cog actionType lands as a required field, a PreToolUse hook closes the staged-file failure mode, and a new blog draft enters the queue."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Tooling Discipline Across the Pipeline"]

---

# Co-Directors Report — Tooling Discipline Across the Pipeline

**Date:** 10 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

A long evening of pipeline-correctness work across four fronts. The PDF pipeline collapses from four overlapping engines into a single orchestrator that dispatches off `mx.contentType` across ten doctypes. The mx-graph validator stops emitting 425 spurious errors caused by a field-name drift against the canonical two-zone frontmatter convention. Two cogs that declared `contentType: action-doc` without an `actionType` get the missing field, since `cog:validate` now treats that as a hard error. A new PreToolUse hook closes the staged-file failure mode the afternoon's `/step-commit` run nearly tripped over. And a fresh blog draft ("Bridging the Machine Partnership") enters the queue, extending Linda Hill's bridger leader archetype to the human-machine boundary.

---

## What Was Done

### 1. Pre-commit staged-snapshot hook

Wrote `.claude/hooks/pre-commit-staged-snapshot.sh` and wired it into `.claude/settings.json` under `PreToolUse → matcher: Bash`. The script self-filters on the command pattern, so it only fires when the bash command actually invokes `git commit` (it correctly ignores `git commit-tree` and unrelated commands). Handles all three commit shapes the workflow uses: plain `git commit`, `git -C <path> commit`, and `cd <path> && git commit`. Output is informational only — never blocks, never modifies the commit. The agent now sees a "Pre-commit staged snapshot (workdir): file | lines+" preview right before any commit lands, with explicit guidance to run `git restore --staged <path>` if pre-existing in-flight work appears in the list.

The hook fires at every commit point in the `/step-commit` workflow: Step 1 submodule commits, Step 2 directors-report commit, Step 3 hub commit (the failing point this morning), Step 5 documentation commit, Step 7 README-regen commit, Step 8 auto-fixer commits, and Step 9a pointer-bump commit. End-to-end firing was confirmed live during the hook's own commit — it surfaced its own staged set before landing.

### 2. Cog `actionType` lockstep

Two cogs declared `contentType: action-doc` without an `actionType`, which `cog:validate` now flags as a hard error. `scripts/cogs/generate-footnotes.cog.md` and `scripts/cogs/manual-metadata.cog.md` are both SOPs (one points at `scripts/generate-footnotes.sh`, the other carries pedagogical examples in prose), so `actionType: sop` is the right classification for both. `generate-footnotes` also gains a multi-line `usage` prose so it satisfies the SOP rule that an LLM-readable usage description must exceed 80 characters. The auto-regenerated `routing-registry.json`, `definitions-index.md` and `mx-reginald/index.json` that PostToolUse hooks produced when the cog files were edited are committed alongside so the registries match current state.

### 3. PDF unification — one orchestrator, ten doctypes

Replaces four overlapping PDF engines (xelatex via cjs script, xelatex via pandoc-direct npm scripts, two parallel Chrome paths) with a single orchestrator at `scripts/bin/mx.pdf.sh` that dispatches off `mx.contentType`. Ten doctypes are now first-class: letter, report, blog-post, agreement, info-doc, chapter, book, free-book, briefing-2col, document. Supporting modules at `scripts/lib/pdf/`: a `js-yaml`-backed frontmatter parser returning structured directives (title, contentType, doctype, generateToc, output, formats, manifest, cover, audience) and a doctype resolver that maps directives plus CLI overrides to a behaviour bundle (CSS template, TOC config, title page, cover, manifest mode, preprocessor list, paper sizes). Manifest mode handles book and free-book builds; multi-format loops handle A4/A5/Letter for the introduction sampler. New book manifests for the handbook, introduction sampler, and protocols sit in `scripts/book-manifests/`. The retired `scripts/generate-document-pdf.cjs` and `scripts/GENERATE-DOCUMENT-PDF-MANUAL.md` are deleted; the `mx.pdf` shell entry point is the only path forward.

### 4. mx-graph validator surgery

`scripts/mx/mx-graph-builder.js`: the validator was checking against old field names (`name`, `type`) but the canonical MX two-zone frontmatter convention uses `title` and `mx.contentType`. The drift produced 425 of 428 spurious validation errors. `REQUIRED_COG_FIELDS` now lists the convention-correct fields and `RECOMMENDED_COG_FIELDS` gets `x-mx-category` in place of `category`. A second fix in the same file: `parseYamlFrontmatter` now strips a leading HTML magic-header comment so cog v1 spec files parse cleanly. (The cog v1 spec defines the magic header `<!-- cog v1 spec=https://tg.community/spec/cog.v1 -->` which sits before the YAML `---` delimiter. Previously the canonical example failed parsing entirely.) `scripts/route-sync.cjs` gets two fixes alongside: the parser now accepts both top-level and `mx:`-nested `routing:`/`concepts:` shapes, and the output paths use the correct lowercase `mx-maxine-lives` directory (a Linux/CI bug masked on macOS HFS+ default). New `tests/test-mx-graph.sh` covers the validator and route-sync behaviour. After all the fixes plus `contentType` additions to six stragglers, the validator sees a clean graph.

### 5. Blog draft: "Bridging the Machine Partnership"

A new draft enters `mx-outputs/mx-site/blog/drafts/`, extending Linda Hill's Harvard Business Review piece on bridger leaders (with Emily Tedards and Jason Wild) to the human-machine boundary. The argument: machine participants (LLMs, agents, crawlers, assistants) are now partners in the value chain, and Hill's principle "people do not take risks with those they do not trust" applies to them too. The post names MX, the Intent Data Lake, REGINALD, and the Convergence Principle as what gives bridgers something to bridge with, and closes with a six-question test any asset should pass. Passes every polish gate including the humanizer scan and the dual-dictionary spell-check (nine genuine MX terms added to the wordlist as a side-effect).

### 6. Visa letter PDF refresh + llms-full.txt regeneration

Small `mx-outputs` housekeeping commit between the major work and the blog draft.

### 7. Blog drafts index: full coverage

Two drafts that already sat in `mx-outputs/mx-site/blog/drafts/` were missing from the drafts `index.html`. Added cards for "Bridging the Machine Partnership" and "Where MX meets the UNESCO Recommendation on the Ethics of AI", ordered newest-first ahead of the gathering-notes guide. The page itself is `noindex, nofollow` so this is internal-navigation hygiene, not a public-surface change.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (hub) | 6 |
| Commits (mx-outputs) | 4 |
| Files changed (hub) | 60 |
| Lines added (hub) | +3,374 |
| Lines removed (hub) | -1,369 |
| Files changed (mx-outputs) | 4 |
| Lines added (mx-outputs) | +340 |
| Lines removed (mx-outputs) | -3 |
| Repositories | 2 (hub, mx-outputs) |

---

## The Insight

Each piece of work this evening followed the same shape: a validator or pipeline component was emitting noise because it had drifted out of step with a convention that had moved underneath it. The mx-graph validator was checking the wrong field names. `route-sync` was parsing the wrong YAML shape and writing to the wrong-case directory. Two cogs were declaring `contentType` without the `actionType` partner that the validator had since started requiring. The PDF pipeline had four engines because nobody had ever forced a single contract.

The fix in each case was the same: pull the component back into step with the current convention, then make the contract explicit. The PDF orchestrator's `mx.contentType` dispatch makes the doctype contract explicit at the call site. The mx-graph validator's `REQUIRED_COG_FIELDS` list makes the field contract explicit at the validator. The new `actionType` field makes the cog kind explicit at the cog. The staged-snapshot hook makes the in-flight state explicit at the commit.

The pattern repeats because the gap between policy and enforcement is the only place drift can hide. Every component that documents its contract in prose alone will drift; every component that enforces its contract in code will not. The evening's work pulled four such components from prose into code.

The workflow document caught a failure in its own pre-flight earlier in the day, and the same workflow shipped the fix the same evening. That round-trip — incident → documented rule → harness enforcement — is the loop we want to keep shortening.

---

## Next Steps

- [ ] Watch the next several `/step-commit` runs for whether the new staged-snapshot context proves load-bearing — does it actually catch in-flight work, or is the warning text noise the agent learns to skim?
- [ ] If the hook proves valuable, consider parallel hooks for the other two recurring failure modes the LEARNINGS buffer has captured this month (corpus-sweep blast radius, missing-CSS class). The pattern is the same: a pre-tool-use snapshot of the relevant state.
- [ ] Investigate `route-sync.cjs`'s destructive aspell-write (the REMINDERS follow-up): the sync currently overwrites the manually-curated wordlist on every registry sync.
- [ ] Promote the "Bridging the Machine Partnership" draft to published when ready — flip status, switch paths, add card to blog index, regenerate sitemap and llms.txt.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `ee15b07c` (hub) | Add pre-commit staged-snapshot PreToolUse hook |
| `d2ff08c0` (hub) | Cogs: declare actionType on generate-footnotes and manual-metadata |
| `f778284c` (hub) | CHANGELOG + REMINDERS: staged-snapshot hook, cog actionType, route-sync bug |
| `90e619f5` (hub) | LEARNINGS: cog-edit cascade + route-sync wordlist-destroy bug |
| `b08c68b3` (hub) | PDF unification: one script, one cog, one skill, ten doctypes |
| `c2b93506` (hub) | mx-graph validator + route-sync + index-freshness test |
| `254b334`  (mx-outputs) | Co-directors report: 2026-05-10 evening (staged-snapshot hook) |
| `0d6ed7e`  (mx-outputs) | Regenerate visa letter PDF; refresh llms-full.txt |
| `ab22fe0`  (mx-outputs) | Add 'Bridging the Machine Partnership' blog draft |
| `a503dc3`  (mx-outputs) | Blog drafts index: list bridging and UNESCO drafts alongside gathering-notes guide |
| _pending_  (hub) | Hub pointer bump for mx-outputs evening commits + wordlist update |
