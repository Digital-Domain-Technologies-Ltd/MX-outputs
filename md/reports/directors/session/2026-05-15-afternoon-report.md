---
title: "Co-Directors Report — mx-audit folded into mx-reginald"
description: "Afternoon session executed the approved plan to merge the public mx-audit submodule into the private mx-reginald repository as mx-reginald/audit/, with all hub references rewired in lockstep."
author: "Tom Cranstoun"
created: 2026-05-15
modified: 2026-05-15
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon, mx-audit, mx-reginald, merge, architecture]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-15-afternoon-report.md
  purpose: "Afternoon session executed the approved plan to merge the public mx-audit submodule into the private mx-reginald repository as mx-reginald/audit/, with all hub references rewired in lockstep."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - mx-audit folded into mx-reginald"]
---

# Co-Directors Report — mx-audit folded into mx-reginald

**Date:** 15 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

The web-audit codebase, previously a separate public submodule (`mx-audit`), now lives inside the private `mx-reginald` repository at `mx-reginald/audit/`. The merge ran in six logical commits across two repos, removed the submodule cleanly, rewired ~280 references across 97 hub files plus a second-pass cleanup of 23 quoted-path references the first sed missed, and produced an ADR plus a Salva PRD section rewrite to record the architectural decision in canon.

Headline consequence: one fork target for new contributors, not two. The deterministic-core / agent-tolerant-audit boundary that the morning session landed across the canon is now visible inside one tree rather than across two repositories.

---

## What Was Done

### 1. Plan and decision capture

Spent the planning phase in formal plan mode. Three Explore agents ran in parallel to inventory the rewire surface — mx-audit's contents (283 source files), mx-reginald's existing structure and natural landing zone, and every hub-side reference to `mx-audit/` (95 files, 280+ references). Tom answered four scope-defining questions via AskUserQuestion: keep mx-reginald private, clean copy (no `git subtree` history graft), land at `mx-reginald/audit/`, defer the public-MX-Audit-repo fate to a later decision. Plan written to `~/.claude/plans/create-plan-first-glimmering-clarke.md`, approved via ExitPlanMode.

### 2. Code move and submodule removal

Copied mx-audit's full source tree (283 files, 4.6 MB) into `mx-reginald/audit/` — all source dirs, dotfiles, runtime config — skipping gitignored runtime state (`.cache/`, `results/`, `domains/`, `ss/`, `node_modules/`). Committed and pushed to mx-reginald private repo. Removed the mx-audit submodule cleanly: `git submodule deinit`, `git rm`, removed `.git/modules/packages/mx-audit/`, dropped the `.gitmodules` entry. Hub working tree no longer has `/mx-audit` at top level.

### 3. The big rewire

Mechanical `mx-audit/` → `mx-reginald/audit/` rewrite across 97 hub files in one commit: package.json npm scripts (workspaces array, audit:* scripts switched from `-w mx-audit` to `--prefix mx-reginald/audit`), 33 hub scripts, 9 audit-related Claude skills, 3 hooks, hub-level docs (CLAUDE.md, README.md, UBERCOG.cog.md, LEARNINGS.md, REMINDERS.md), 26 mx-canon files, 17 manuscript files. Historical records (CHANGELOG.md, changelog-archives, audit-log CSVs) deliberately not rewritten. A second pass caught 23 files holding quoted-path components (`'mx-audit', 'scripts'` in `join()` calls) that the first slash-suffix sed missed, plus removed mx-audit from four submodule-list arrays and one REPO_MAP.

### 4. mx-reginald narrative absorbs the audit subsystem

Updated mx-reginald's README structure tree and SOUL.md to name the audit subsystem as a first-class part of the folder. The architectural split now lives in the folder structure: registry core (`worker/`, `scripts/signing/`, `scripts/validate-cog/`) is deterministic; `audit/` is agent-tolerant under the agent-to-script pattern. SOUL.md's narrative section rewritten around that boundary. `audit/README.md` lost its "MX-Audit" framing and became "REGINALD Audit Subsystem".

### 5. Canon: ADR + Salva PRD

New ADR #7 at `mx-canon/mx-maxine-lives/registers/ADR/2026-05-15-mx-audit-into-mx-reginald.cog.md` captures the merge decision, the deterministic-core / agent-tolerant-audit boundary, and three open questions deferred to follow-on ADRs (whether to refactor thin script wrappers into `audit/lib/`, whether to move hub-side audit orchestrators into `mx-reginald/audit/`, whether `audit/` becomes an npm workspace).

Salva PRD §11 rewritten in mx-crm — collapsed the "two codebases" framing into one. The PRD now describes a single fork target (`mx-reginald`) with the deterministic-core / agent-tolerant-audit boundary visible inside the folder structure. §14 references updated, frontmatter `relatedDocs` collapsed, cross-reference to ADR #7 added. mx-crm bumped to v1.1.

### 6. Generated indexes refreshed and pushed

Re-ran `npm run route:sync`, `npm run cog:sync`, and `node scripts/check-mx-definitions-index.js`. `tests/test-indexes-fresh.js` gate passes (was stale until the definitions-index regen). Hub pushed.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits (this segment) | 5 |
| Submodule commits (this segment) | 4 (mx-reginald × 3, mx-crm × 1) |
| Hub files changed | 113 |
| Lines added | +1,103 |
| Lines removed | -635 |
| Repositories touched | 3 (hub, mx-reginald, mx-crm) |
| mx-audit source files moved | 283 |
| Submodule entries removed | 1 (`packages/mx-audit`) |
| Hub references rewired (path-style) | 84 files |
| Hub references rewired (quoted-path, 2nd pass) | 23 files |
| New ADR | 1 (ADR #7) |
| Documents touched in canon | 26 |
| Manuscripts touched | 17 |

---

## Why It Matters

The morning landed the determinism rule — REGINALD core is deterministic by design, agents are permitted only in the web-audit suite under the run-then-script pattern. The afternoon turned that rule from a written principle into a structural fact. A reader who picks up the codebase now sees the boundary in the folder layout, not in prose that links two repos. A developer (Salva, on his Reginald MVP) forks one repository and gets both halves with the boundary already drawn.

The framing tightens commercially too. "REGINALD is DDT's proprietary implementation" used to require explaining that part of the implementation lived in a public repo. After today, the whole implementation is in one private repo. The audit code is no longer the open complement to the proprietary registry — both are the proprietary product. The public artefact stays alive (deferred decision) but stops being canonical.

---

## Decisions Made

- **Merge mx-audit into mx-reginald as `mx-reginald/audit/`.** Clean copy, no `git subtree` history graft. Single commit on mx-reginald, history preserved on the old public MX-Audit GitHub repo for reference. Approved via ExitPlanMode after four scope questions.
- **Keep mx-reginald private.** The audit code becomes private with it. Aligns with the "REGINALD is DDT's proprietary implementation" framing in business-plan.md.
- **Leave the old `MX-Audit` public GitHub repo alone for now.** No archive, no delete, no mirror push. The decision on its eventual fate is deferred — captured in ADR #7 as open question.

---

## Open Questions

- Should the `mx-reginald/scripts/{a11y,clarity,…}` thin wrappers be refactored to call into `audit/lib/` rather than reinvent? Currently both work in parallel; refactor would consolidate but is bigger than this session's scope.
- Should the hub-side audit orchestrators (`scripts/audit-pipeline.js`, the audit cogs in `scripts/cogs/`) move into `mx-reginald/audit/`? They currently sit at the hub because they reference cross-submodule paths.
- The `audit/package.json` has a native `chartjs-node-canvas → canvas` dependency that failed to compile on this machine during smoke test. Same dep was in `mx-audit/package.json` before the merge, so this is environmental drift, not a merge regression. Worth surfacing because it blocks `npm test` against the audit subsystem on systems without cairo/pango.

---

## What This Means for Investors

Cleaner story to tell. Before: "REGINALD is the proprietary registry; the audit tool is the open complement." After: "REGINALD is the proprietary registry-and-audit toolchain — one repository, one product, one fork target." That is closer to how the business-plan revenue lines are structured (Audit consultancy is a CogNovaMX revenue stream, not a separate open-source community contribution). The architectural simplification matches the commercial framing.

The old MX-Audit public repo stays alive for now. If Tom decides to archive it later, that is a small follow-up — the canonical work lives in `mx-reginald` and the deferred decision does not block anything.

---

## Next Steps

- Decide the long-term fate of the public `MX-Audit` GitHub repo (archive, mirror, or delete). Not urgent. (added: 2026-05-15)
- Add a one-line note to the public MX-Audit repo's main-branch README saying the content has moved into mx-reginald. Five-minute manual edit, optional. (added: 2026-05-15)
- Address the `chartjs-node-canvas` native-build dependency before Salva onboards — either pin a pre-built binary, switch to a pure-JS chart library, or document the cairo/pango install prerequisite in `mx-reginald/audit/README.md`. (added: 2026-05-15)
- Re-run a representative end-to-end audit (`/audit-site` against allabout.network or similar) to confirm the pipeline still produces a clean report from the new path layout. The smoke-test on this machine was blocked by the dependency issue above; the pipeline code itself is wired correctly. (added: 2026-05-15)

---

## Commit Log

| Hash | Description |
|------|-------------|
| fa8e30f | mx-reginald: Fold mx-audit source tree into mx-reginald/audit/ |
| 54ddd708 | hub: Remove mx-audit submodule (folded into mx-reginald/audit/) |
| fda6720c | hub: Rewire all mx-audit/ references to mx-reginald/audit/ (97 files) |
| e6e47ff | mx-reginald: README + SOUL absorb the audit subsystem into the narrative |
| 4a2d6ca | mx-crm: PRD §11 + gitignore collapse two-codebase framing to one repo |
| d3d70333 | hub: Canon ADR #7 + Salva PRD + submodule pointers |
| 326dba12 | hub: Regen generated indexes after the rewrite |
| b74f9f70 | hub: Rewire quoted-path mx-audit references missed by the first sed pass |
| c1ae4f1 | mx-reginald: Audit subsystem path-comment updates after the merge |
