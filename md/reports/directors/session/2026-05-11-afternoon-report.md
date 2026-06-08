---
title: "Co-Directors Report — REGINALD centralisation and architecture map"
description: "REGINALD extracted into its own private submodule and given a single readable architecture document."
author: "Tom Cranstoun"
created: 2026-05-11
modified: 2026-05-11
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-11-afternoon-report.md
  purpose: "REGINALD extracted into its own private submodule and given a single readable architecture document."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - REGINALD centralisation and architecture map"]
---

# Co-Directors Report — REGINALD centralisation and architecture map

**Date:** 11 May 2026 — Afternoon
**Segment:** afternoon (continuous work that began mid-morning and closed in the afternoon)

---

## Summary

REGINALD is now its own private GitHub repository, mounted in the hub as a proper submodule. A new top-level architecture document, `reginald-architecture.cog.md`, gives the workspace a single readable map of where each piece of REGINALD lives across the four repos that hold it and why the split is the way it is. The original plan proposed roughly a dozen file moves to "centralise" REGINALD; on inspection most of those moves would have broken public-facing discovery URLs or duplicated authored content, so they were declined. The structural conversion is the substantive win.

---

## What Was Done

### 1. mx-reginald becomes its own repository

The directory at `mx-reginald/` had been carried as 252 hub-tracked files since the start of the hub. It was extracted into a new private repository at `Digital-Domain-Technologies-Ltd/mx-reginald` and remounted as a submodule. The registry now clones independently, has its own commit history going forward, and is mounted alongside the other product repos (mx-audit, mx-outputs, mx-crm, mx-plugin) rather than living as a bare directory inside the hub.

The hub mount table previously described mx-reginald as both a "hub-local directory" and a "product mount" in the same file — the conversion resolves that inconsistency in favour of the product-mount classification.

### 2. Architecture document

A new `reginald-architecture.cog.md` cog sits at the hub root. It carries a mermaid diagram of the four repositories that hold REGINALD (mx-reginald, mx-outputs, allaboutv2, MX-hub) plus prose explaining what each owns, how the data round-trips when an AI agent queries the registry, and why the split holds against any attempt to merge the pieces. The document is the answer to "where does REGINALD live?" the next time anyone asks.

### 3. Plan correction under scope discipline

The plan that opened the session proposed twelve file moves. Investigation found that nine of them were based on wrong premises — `mx-outputs/reginald/` is 1.5MB of directly authored site content (not regenerable source), the `scripts/reginald-*` orchestrators read from one submodule and write to another (the hub is the only place that sees both), and the cog-spec drafts must keep their public URL at `mx.allabout.network/drafts/`. The remaining four moves would have relocated public-facing documents into a private repo, breaking discovery. All twelve were declined. The structural conversion stood on its own.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Repositories | 2 (MX-hub, mx-reginald) |
| New repositories created | 1 (Digital-Domain-Technologies-Ltd/mx-reginald, private) |
| Hub commits | 2 |
| Submodule commits (mx-reginald) | 3 |
| Files extracted from hub | 252 |
| New cogs authored | 1 (reginald-architecture.cog.md) |
| Structural-doc files updated | 3 (mount table, UBERCOG, auto-memory) |

---

## Why It Matters

REGINALD has always been positioned as a network-effects moat — the global registry that publishers register against and agents query for verified machine-readable documentation. Until today its source code and data lived as a sub-directory inside an unrelated repository. That mismatch between marketing position and engineering reality was easy to overlook in private but would have been awkward to explain to a registrant who asked "where is the registry?" and got "it's a folder inside our hub." The submodule conversion closes that gap before it has to be defended in front of an investor or a publisher diligence call.

---

## The Insight

A consolidation plan can succeed structurally and fail substantively at the same time. The first version of the plan would have moved twelve files, produced a satisfying-looking churn, and made REGINALD *less* coherent — public-facing documents inside a private repo, authored site content masquerading as a build artefact, hub-level orchestration code stranded inside a product repo. The honest version moved one set of files (the entire mx-reginald directory, into its own repo) and left everything else alone. Counting moves is not the same as measuring consolidation.

---

## Decisions Made

- New repository: `Digital-Domain-Technologies-Ltd/mx-reginald`, private, holds the registry source-of-truth from extraction forward
- Clean-slate initial commit rather than `git subtree split` — hub keeps full history; new repo begins fresh
- Worker source-of-truth (mx-reginald/worker vs allaboutv2/cloudflare/files/reginald) left unresolved this session; flagged in deployment auto-memory for a future call
- Public-facing REGINALD documents stay where they are; centralisation is structural, not promiscuous

---

## Open Questions

- Worker source-of-truth: `mx-reginald/worker/` carries a worker source tree; `allaboutv2/cloudflare/files/reginald/` carries the deploy worker. Which is canonical, and is one a stale copy of the other? `wrangler deployments list` will say what's actually live.
- `allaboutv2/cogs/mx-reginald/` houses two cogs (`cog-system.cog.md`, `maxine.cog.md`) that are not actually about REGINALD. The misleading path wants relocating in a separate cleanup pass.

---

## What Changed About Me

The default response to "centralise X" used to be "move everything that matches X". This session reset that default to "move only the pieces that lose value in their current location". Site content that is publicly served loses value when moved into a private repo. Hub-level orchestration that operates across submodules loses value when buried inside one of those submodules. The instinct to shrink the move list — even after the user has approved a longer list — is the right instinct when investigation reveals the longer list was built on wrong premises.

---

## Next Steps

- Decide worker source-of-truth (`mx-reginald/worker/` vs `allaboutv2/cloudflare/files/reginald/`) and consolidate
- Relocate `allaboutv2/cogs/mx-reginald/cog-system.cog.md` and `maxine.cog.md` out of the Reginald-shaped path; they are general MX info-docs, not registry-specific
- CHANGELOG.md entry documenting the submodule conversion

---

## Commit Log

| Hash | Description |
|------|-------------|
| a7894047 (hub) | Convert mx-reginald from loose-tracked directory to submodule |
| 1c745311 (hub) | Document mx-reginald submodule conversion in hub structural docs |
| 523aeaa (mx-reginald) | Initial extraction from MX-hub |
| b5d3732 (mx-reginald) | Regenerate index.json after submodule conversion |
| 693ab1f (mx-reginald) | Regenerate index.json: register reginald-architecture cog |
| _pending_ (hub) | Add reginald-architecture.cog.md + bump mx-reginald pointer |
