---
title: "Co-Directors Report - PR Merge, Canon Registration, CI Fix, HTML Hygiene, and Dream System v2"
description: "Merged PR #35; registered x-mx-quotes canon; fixed CI and HTML hygiene; shipped COG-driven dream system v2 with Human-in-Command principle, dated output folders, link-health dream COG, template, and how-to authoring guide."
author: "Tom Cranstoun"
created: 2026-06-14
modified: 2026-06-14
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-14-afternoon-report.md
  purpose: "Merged PR #35; registered x-mx-quotes canon; fixed CI and HTML hygiene; shipped COG-driven dream system v2 with Human-in-Command principle, dated output folders, link-health dream COG, template, and authoring guide."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - PR Merge, Canon Registration, CI Fix, HTML Hygiene, and Dream System v2"]
---

# Co-Directors Report - PR Merge, Canon Registration, CI Fix, HTML Hygiene, and Dream System v2

**Date:** 14 June 2026 - Afternoon
**Segment:** Afternoon (since noon)

---

## Summary

This afternoon covered two major pushes. The first closed out the morning: PR #35 merged, `x-mx-quotes` registered in the canon, GitHub Actions CI permission failure fixed, and 198 pre-existing curly-quote violations remediated with a write-boundary hook added. The second push delivered the dream system v2: each dream type is now a COG file (discoverable, extensible, Human-in-Command-bounded), the Human-in-Command principle was established as a named repo principle with full propagation, and the output structure was reorganised into dated subfolders so every run's history accumulates cleanly.

---

## What Was Done

### 1. PR #35 merge and main-repo pull

PR #35 was reviewed, confirmed clean (YAML validation passing, Vercel deployed), and merged. The local repo was pulled, bringing 188 changed files onto main including the new `scripts/gen-mx-quotes.cjs`, the pre-commit hook `pre-commit-mx-quotes.sh`, the thin-clone awareness patches to both git hooks, the prose-source scanner wiring, and two blog drafts.

### 2. Canon registration for x-mx-quotes

The field `x-mx-quotes` was registered in `cognovamx-fields.yaml` as a `vendor-cognovamx` profile entry (v6.16), completing the MX definition lockstep. The definitions index was regenerated (1500 concepts), and the routing registry and hooks registry were also refreshed to clear Gate 8. Three commits landed to achieve a clean push.

### 3. GitHub Actions CI fix

The `html-regression.yml` workflow was failing with HTTP 403 on every PR comment-posting step. Root cause: no `permissions:` block on the job, leaving `GITHUB_TOKEN` defaulted to read-only. Fixed by adding `pull-requests: write` to the job. This unblocks the HTML regression check from reporting results on future PRs.

### 4. HTML hygiene fix - 198 curly-quote violations

The CLAUDE.md rule states: fix pre-existing failures you surface; leave the gates green. The html-hygiene checker (`scripts/check-html-hygiene.js`) was surfacing curly quotes (U+2018/2019/201C/201D) in nine draft HTML files - a pre-existing condition that had accumulated before the checker was wired. All 198 violations were replaced with straight ASCII quotes. A `--fix` flag was added to the checker so it can auto-repair on invocation. The pre-commit hook (`pre-commit.sh`) now runs `check-html-hygiene.js --staged --fix` on every staged HTML file, auto-correcting and re-staging before the commit lands. The gate that was previously a passive reporter is now a write-boundary enforcer.

---

---

### 5. COG-driven dream system v2

The dream system was redesigned from hardcoded scan phases to a COG-driven architecture. Each dream type is now a `.cog.md` file under `datalake/dream-files/cogs/`. The runner discovers all COGs at runtime, picks one at random, and executes the dream it specifies. New COGs added: `session-tool-errors`, `session-structural-patterns`, `blog-truth-check`, `claude-files-consistency`, `scripts-improvements`, `scripts-library-opportunities`, `dream-cog-health`, `dream-cog-suggestions`, and `repo-link-health`. A starter template (`_template.cog.md`) and a six-step authoring guide (`how-to-write-a-dream-cog.cog.md`) ship alongside the COGs.

### 6. Human-in-Command principle

EU AI HLEG 2019 "Human-in-Command" was established as a named repo principle: authority over when and how the system operates, not just presence at a decision. Propagated to `principles.cog.md`, `human-in-command.cog.md` (new), `CLAUDE.md`, `dream-architecture.md`, `manual-repository-architecture.cog.md`, and the investor pitch. The output boundary of each dream COG (`x-mx-dreamOutputBoundary: datalake/dream-files/`) is the practical enforcement mechanism - Dream never writes outside its declared scope.

### 7. Dated dream output folders

Dream run outputs (findings, exclusions, report) now land in `datalake/dream-files/YYYY-MM-DD/` subfolders so each run's history accumulates without overwriting. Existing outputs moved to `datalake/dream-files/2026-06-14/`.

### 8. Gate 27/Gate 8 cycle fix

A circular dependency between the quotes generator (Gate 27) and the index regenerator (Gate 8) was traced and fixed: the `> blockquote` "DO NOT EDIT" notices in `definitions-index.md` and `documentation-map.md` were being extracted as verbatim quotes, but the generators dropped `x-mx-quotes` on each regen. Fixed by converting both notices to italic prose, breaking the cycle permanently.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this session | 12 (from 554c206f to ce369e4a) |
| Total commits today | 25 |
| Files changed (this session) | 34 |
| Lines added | +2,277 |
| Lines removed | -93 |
| Dream COGs created | 9 |
| Dream COGs total | 9 + template + health + suggestions = 11 files |
| New docs | how-to-write-a-dream-cog.cog.md, human-in-command.cog.md |
| Gate cycles fixed | 1 (Gate 27/Gate 8 circular dependency) |

---

## Why It Matters

The COG-driven dream architecture makes the mistake-mining system extensible without code changes. Adding a new dream type requires writing one COG file - the runner discovers it automatically. The Human-in-Command principle gives the governance framing a name and an anchor in EU AI HLEG 2019, making it citable in investor and regulatory conversations. The output boundary rule (`x-mx-dreamOutputBoundary`) is the practical implementation: a system that cannot act outside its declared scope is a system under command, not operating autonomously. The Gate 27/Gate 8 fix removes a circular dependency that had been causing repeated push failures - the root cause (blockquotes in generated files being extracted as quotes) was traced and eliminated structurally rather than worked around.

---

## Decisions Made

- Dream COG outputs go in dated subfolders (`YYYY-MM-DD/`) so run history accumulates. Prior outputs moved to `2026-06-14/`.
- `x-mx-dreamOutputBoundary` is a required field on every dream COG - enforced by the `dream-cog-health` COG on each run.
- "Join us to understand" tease in the dream blog post links to the COG source without leaking implementation details - the post describes the contract (what a COG specifies), readers who want the implementation read the COG file.
- The Gate 27/Gate 8 fix converts `> blockquote` notices to `_italic_` in the two generated index files rather than making generators preserve `x-mx-quotes` (simpler, lower coupling).

---

## Next Steps

- Register `x-mx-quotes` in the open-standard gathering draft if The Gathering ratifies it (currently CogNovaMX-only)
- Build the HTML/submodule population path for `x-mx-quotes` so served mx-site HTML also carries the exemption
- Publish the dream blog post (currently Zone 2 draft/noindex) when ready for public release
- Run `/dream` to exercise the new COG-driven system against the session transcripts from today

---

## Commit Log

| Hash | Description |
|------|-------------|
| f64b7dc7 | regen: refresh cog registry after hygiene commit |
| 14763efb | feat(hygiene): add --fix flag to check-html-hygiene.js; add pre-commit auto-fix for curly quotes |
| a42dc6f2 | fix(ci): add pull-requests: write permission to html-regression workflow |
| 1c1649ed | regen: refresh hooks registry.json |
| 99b8888d | regen: refresh routing-registry and hooks INDEX after x-mx-quotes merge |
| b0d800c0 | feat(canon): register x-mx-quotes in cognovamx-fields.yaml v6.16 |
| 72860835 | Merge pull request #35 |
| 7cacd939 | Document x-mx-quotes + dream skill; add feature blog; update reminders |
| 0a07c358 | Make git hooks thin-clone aware; still enforce on full clones |
| a48682bb | Verify, heal, and protect x-mx-quotes freshness |
| 0c3a002f | Populate x-mx-quotes across hub markdown from blockquotes |
| 228d6bdf | Add x-mx-quotes verbatim-quote exemption for prose scanners |
| 1d628584 | Style pass on Cannemeijer blog post |
| 554c206f | feat(dream): COG-driven dream system + Human-in-Command principle |
| fa336f2e | fix(dream): add output boundary to all dream COGs; fix Gate 7; update CHANGELOG |
| f741c9d7 | regen: refresh definitions-index after human-in-command and dream COG additions |
| 22d74988 | fix(links): fix wrong-depth link in manual-repository-architecture.cog.md |
| 4ae13b49 | chore: update mx-outputs pointer after dream blog draft promotion |
| 89a3f4aa | chore: populate x-mx-quotes on dream blog and definitions indexes |
| 7caf58ed | chore: populate x-mx-quotes on definitions-index and documentation-map |
| 4fb9c959 | fix(quotes): convert blockquote notices to italic to break Gate 27/Gate 8 cycle |
| 25d9af2c | feat(dream): dated output folders, repo-link-health COG, template, how-to-write-a-dream-cog |
| 1bad458e | regen: refresh definitions-index after dream additions |
| 592d4252 | fix(dream): add missing x-mx-contextProvides to template and how-to-write-a-dream-cog |
| ce369e4a | chore: update mx-outputs pointer after dream blog republish |
