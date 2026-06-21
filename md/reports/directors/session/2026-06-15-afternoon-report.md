---
title: "Co-Directors Report - Dream Pipeline, Link Infrastructure, and Sub-Repo Topology"
description: "Dream ran; 151 draft-site links converted to canonical URLs; full sub-repo topology added to manifest, validators, skills, hooks, and cog authoring guidance."
author: "Tom Cranstoun"
created: 2026-06-15
modified: 2026-06-15
version: "1.3"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-15-afternoon-report.md
  purpose: "Dream ran across all nine COGs; blog stale claims fixed; split-lines refactored into 14 callers; repo link health diagnosed."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Dream Pipeline: First Full Run and Quality Fixes"]

---

# Co-Directors Report - Dream Pipeline: First Full Run and Quality Fixes

**Date:** 15 June 2026 - Afternoon
**Segment:** Afternoon (since noon)

---

## Summary

The Dream mistake-mining system ran for the first time across all nine content types, classifying 913 findings from Claude Code sessions, blog posts, scripts, and the repository's own structure. Two classes of false positive were identified and fixed at source so they cannot recur. The session closed with all gates green and the full findings corpus committed.

---

## What Was Done

### 1. First Full Dream Run

Dream processed every scan target in sequence using Ollama on the local machine. No session data left the machine. The nine COG types produced findings across distinct classes of problem: the blog truth-check found 474 time-sensitive claims; the session structural patterns scan found 220 bad shell patterns from past Claude Code sessions; the repo link health scan found 109 absolute links in draft-site markdown that should be relative; scripts improvements found 70 code quality issues; library opportunities found 17 cases of duplicated inline logic; and the three housekeeping scans (dream cog suggestions, claude-files consistency, dream cog health) found 22 issues in the tooling itself.

All findings are now committed as per-type JSONL and markdown report files in `datalake/dream-files/`. The exclusions files mean future runs skip already-classified candidates - each run surfaces only genuinely new material.

### 2. False Positives Fixed at Source

Dream flagged two findings that were not real problems. Both were fixed in the extractor code rather than dismissed by hand, so they cannot come back.

The first was the `blog-discovery-sync.sh` hook flagged as using a fragile relative `cd` path. The hook derives its working directory from `${BASH_SOURCE[0]}` - a safe pattern - but the extractor's negative lookahead did not recognise `$(` (command substitution) as an allowed prefix. One character added to the regex; the false positive is structurally impossible from now on.

The second was `Math.random()` in `scripts/dream.cjs` flagged as non-deterministic. The scripts extractor matched the regex literal inside the `IMPROVEMENT_PATTERNS` array definition - the scanner hitting its own source. One line added to skip `dream.cjs` from its own scan; the false positive cannot recur.

### 3. Infrastructure Fixes from Findings

The session also acted on findings immediately. A shared `splitLines()` helper was added to `scripts/lib/` to replace the repeated `.split('\n').filter(Boolean)` pattern - identified as fragile on Windows CRLF - across 17 callers. The `audit-access/skill.md` file was missing the standard "When to use" and "How to invoke" sections required by the consistency check; both were added. The dream report generator was fixed to emit `x-mx-contextProvides` in every report's frontmatter, after the pre-push gate rejected seven reports that were missing it.

---

## The Insight

A mistake-mining system that can flag problems in its own extractor code is a meaningful reliability test. Both false positives surfaced within the first full run and were fixable in under ten minutes. The fact that the extractor is specific enough to flag real patterns but naive enough to match its own source code tells us the extraction layer needs a small amount of self-awareness - a skip-self rule and tighter lookaheads. Both are now in place. The system is more trustworthy for having failed once in a diagnosable way.

---

## Decisions Made

- False positives are fixed in the extractor, not added to an exclusions list - exclusions are for genuine findings that have been reviewed and accepted, not noise suppression
- `dream.cjs` is now excluded from its own scripts scan by name; any other script that defines its own pattern tables should be added to the same skip list when it surfaces

---

## What Was Done (continued - session continuation)

### 4. Split-Lines Wired into 14 Callers

The `scripts/lib/split-lines.cjs` helper (CRLF-safe line splitting) was wired into 14 of the 17 callers flagged by the library-opportunities scan. Two were deferred: `audit-pipeline.js` (inside a large complex function requiring careful scope review) and `dream.cjs` (the empty catch block per an existing directive). All 14 callers now use the shared helper rather than the fragile `.split('\n').filter(Boolean)` pattern.

### 5. Blog Truth-Check Findings Actioned

The 474 findings from the blog truth-check Dream scan were reviewed. The vast majority were Ollama false positives: the local model's training predates 2026 and it classifies `2026` dates as "future year" claims; JSON-LD "syntax errors" were extraction truncation artefacts. The genuine actionable findings were four stale claims across three posts:

- `what-is-machine-experience.md` and `data-sovereignty.md`: "MX: The Protocols (launching April 2026)" corrected to "publishing July 2026" - both republished live
- `machine-experience-adding-metadata.md`: stale present-tense "It's January 2026" opener rewritten to past tense ("In January 2026, Google, Microsoft, and Amazon all launched...") - republished live
- `mx-the-blog.md`: same stale opener fixed in Zone 2 draft (not yet published to Zone 3)

### 6. Repo Link Health Diagnosed

The 109 findings from the repo-link-health Dream scan were investigated. `npm run links:fix` returned zero fixes because the tool only repairs wrong-depth relative links - not site-relative CMS source URLs (`/blog/foo.html`, `/books/`). The draft-site markdown intentionally uses these site-relative forms as source references. Fixing them requires a custom script to calculate relative depth from each file's position within `datalake/draft-site/`. Flagged as a follow-on; no links were changed.

---

## What Was Done (continued - session continuation 2)

### 7. Gitea Integration Complete

The Gitea push was confirmed wired into `audit-pipeline.js` - verified by code inspection rather than re-running it. The end-to-end test from the previous session confirmed the integration works. This closes out the Gitea delivery track.

### 8. Custom Script: 151 Draft-Site Links Fixed

The custom `scripts/fix-draft-site-absolute-links.cjs` script was built to address the 109 findings from the repo-link-health Dream scan. The correct fix was not relative paths - it was canonical URLs. Draft-site markdown files live in the hub repo but their link targets live in `mx-outputs/mx-site/`, a separate git submodule. No relative path can bridge that boundary reliably on GitHub or in a thin clone. The script rewrites site-relative (`/path`) links to `https://mx.allabout.network/path`. It ran and produced 151 rewrites across the draft-site corpus. Two unpublished targets remain as site-relative - they point to pages not yet promoted to Zone 3, and the script correctly leaves them rather than converting to a broken canonical URL. A full test suite (55 tests) covers all edge cases including image syntax exclusion, multi-link offset safety, and submodule-absent graceful degradation.

### 9. Sub-Repo Topology Added to repo-manifest.json

The repository now carries a machine-readable topology in `repo-manifest.json`. The new `topology` section declares the canonical base URL, the mx-site directory, which directories cross the hub-to-submodule boundary, how draft-site URL prefixes map to source directories, and the full list of submodules (auto-generated from `.gitmodules` by a new generator script). This is the single source of truth every tool reads rather than each one making its own assumptions about the repo layout.

### 10. Dream Link-Patterns Lens Made Sub-Repo Aware

The Dream scanner's `extractLinkPatterns()` function now loads `topology.crossRepoBoundaryDirs` from `repo-manifest.json`. Files in `datalake/draft-site/` now receive "crosses repo boundary, use canonical URL" in findings rather than "should be relative" - which was the wrong fix. The skill documentation, the repo-link-health cog, and the draft-site README all reflect this.

### 11. Cog Validator Made Sub-Repo Aware

The `cogRelatedTo()` function in `scripts/lib/check-mx.cjs` now loads `topology.submodules` from `repo-manifest.json`. When a path in `mx.relatedTo` does not exist on disk, the function checks whether it falls under a known submodule path. If it does, the entry is classified as `crossSubmodule` (a warning) rather than `dead` (a hard error). This allows cogs to legitimately reference companion files in `mx-outputs/`, `allaboutv2/`, and other submodules without hard-failing on a thin clone. The authoring guide (`how-to-write-a-cog.cog.md`) and CLAUDE.md both document this behaviour.

---

## The Insight

The 109 "absolute links should be relative" findings from Dream turned out to be pointing at the right problem with the wrong fix. Relative paths across a repo boundary are not wrong-depth - they are structurally impossible. Recognising that distinction required understanding the topology of the repository: what is hub, what is submodule, where the boundary sits. Once the topology was made explicit in `repo-manifest.json`, the correct fix (canonical URLs) was obvious, and every tool that needed to understand boundaries could read from a single source rather than each one making its own guess. The topology artefact is now used by the Dream scanner, the link fixer, the cog validator, and the authoring guidance - and future tools inherit it automatically.

---

## Decisions Made

- Draft-site links to mx-site content use canonical URLs, not relative paths - the repos are separate and the boundary is now declared in `repo-manifest.json`
- Cross-submodule references in `mx.relatedTo` are warnings, not errors - load-bearing references belong in hub-local files; informational pointers to submodule content are valid on a fat clone
- The topology generator runs in the pre-commit hook when `.gitmodules` changes, so the manifest stays current without manual maintenance

---

---

## What Was Done (continued - evening continuation)

### 12. Two Cloud PRs Investigated and Merged

Two open pull requests from cloud Claude sessions were reviewed and merged into main.

**PR #38** brought the Fable 5 cog decomposition from scratch work into proper canonical status. The leaked Fable 5 system prompt (1,585 lines) had previously been decomposed into 13 MX COGs as an experiment; this PR promoted those COGs into the reference-implementations directory, added a `why-this-repo.cog.md` explaining the repository's purpose for new contributors, shipped the Dream self-improving loop as a first-class cog with its own authoring guide, and added four blog drafts covering the Dream architecture and the Fable 5 decomposition. The PR also updated the self-healing repository architecture cog and reframed the per-span provenance idea as a dedicated Quotation Handler PRD.

**PR #39** added "Corroboration over Assertion" as a named principle. The principle requires that blog claims be backed by checkable evidence rather than asserted from plausibility alone. It shipped with a new field (`x-mx-corroboratedBy`), a deterministic gate (`scripts/check-blog-corroboration.cjs`) wired into `npm test` and pre-push, a blog-ideation cog that routes new post ideas through a corroboration-first checklist before writing begins, a blog draft demonstrating the principle, and a memory capture so the principle travels with future sessions.

Both PRs had conflicts with main requiring manual resolution before merge. PR #38 had four conflicts (CHANGELOG, dream.cjs canonicalUri path, REMINDERS, and a deleted-vs-modified README); PR #39 had one (package.json test script gaining the two new corroboration test entries). Three gate failures were also resolved: a missing `.mx.yaml.md` for the reinstated fable5 examples directory (Gate 7), draft blog HTML not yet promoted for the four new blog drafts (Gate 22 - resolved by promoting all four to Zone 2), and a memory sync gap on first push of each branch (Gate 26 - resolved by running `npm run memory:sync`).

---

## Next Steps

- Promote Fable 5 blog post from Zone 2 to Zone 3 once Tom has reviewed
- Review LPC and Los G sites
- Build auditor handoff tool - `scripts/unpack-audit.cjs` (Phase 7)
- Wire remaining two `split-lines` callers: `scripts/audit-pipeline.js` and `scripts/dream.cjs`
