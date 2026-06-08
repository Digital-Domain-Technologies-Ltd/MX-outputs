---
title: "Co-Directors Report — mx-collaboration drain and submodule retirement"
description: "Morning session 2026-04-27: drained the dormant mx-collaboration submodule, rehomed forward-looking content into canon, retired the proposals pipeline."
author: "Tom Cranstoun"
created: 2026-04-27
modified: 2026-04-27
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning, repo-hygiene, governance]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-27-morning-report.md
  purpose: "Morning session 2026-04-27: drained the dormant mx-collaboration submodule, rehomed forward-looking content into canon, retired the proposals pipeline."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - mx-collaboration drain and submodule retirement"]
---

# Co-Directors Report — mx-collaboration drain and submodule retirement

**Date:** 27 April 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

The dormant `mx-collaboration` submodule has been drained and removed. The proposals pipeline it carried (incoming → proposals → accepted → published) never moved past the proposal stage — `accepted/` and `published/` had been empty since inception. Forward-looking content has been rehomed in `mx-canon`; superseded and stale material has been dropped; two helper scripts that depended on the submodule have been retired. Net effect: roughly 1,000 lines of dead helper-script removed, 1,360 lines of canonical content added in their proper homes, one fewer submodule to maintain.

---

## What Was Done

### 1. Pipeline drain

A planned sweep identified what in `mx-collaboration` was forward-looking, what was already implemented elsewhere, what was superseded, and what was simply stale. The plan ([`.claude/plans/the-repo-mx-collaboration-is-logical-sun.md`](../../../../.claude/plans/the-repo-mx-collaboration-is-logical-sun.md)) was approved before any edits landed. With manuscripts excluded as candidates per Tom's direction, the scope reduced to:

- **Migrate four files** to canonical homes
- **Verify two proposals** as already implemented in MX-Hub (no migration needed)
- **Archive one large PRD** as superseded by `mx-app`
- **Drop the rest** (stale, off-topic, or empty-template scaffolding)

### 2. Migrations into mx-canon

Four files now live where they belong:

| New canonical home | Source | Purpose |
|--------------------|--------|---------|
| [`mx-canon/mx-maxine-lives/thinking/brainstorm.md`](../../../../mx-canon/mx-maxine-lives/thinking/brainstorm.md) | `mx-collaboration/incoming/brainstorm.md` (modified that morning) | The Idea Garden — recursive-loop ideas, CMS Summit roadmap |
| [`mx-canon/mx-app/proposals/cogify-hamburger-component.cog.md`](../../../../mx-canon/mx-app/proposals/cogify-hamburger-component.cog.md) | `mx-collaboration/proposals/cogify-hamburger-component.md` | Mobile hamburger + n-language UI proposal, Ready for Implementation |
| [`mx-canon/mx-app/superseded/prd-mx-editor.md`](../../../../mx-canon/mx-app/superseded/prd-mx-editor.md) | `mx-collaboration/proposals/prd-mx-editor.md` | 26 KB Electron + local-AI PRD, archived as superseded by mx-app |
| [`mx-canon/ssot/architecture/backend-architecture-draft.md`](../../../../mx-canon/ssot/architecture/backend-architecture-draft.md) | `mx-collaboration/proposals/backend-architecture-guidelines.md` | Multi-tenant principles, draft, freshness pass flagged |

The brainstorm file folded in the small "Beyond HTML" seed (media/PDF/NotebookLM) and re-pointed prior references at REMINDERS.md. Path references in the hamburger proposal and PRD were re-resolved against the hub's actual layout.

### 3. Reminders captured

Six items salvaged from `mx-collaboration` that hadn't yet been actioned, added to [REMINDERS.md](../../../../REMINDERS.md):

- Reginald language-redirect Phase 2 (hreflang edge injection) and Phase 3 (GeoIP, lang cookies, A/B, analytics) — Phase 1 already shipped at Cloudflare Worker v1.2.0
- Security tooling sweep — evaluate Gate, Semgrep, CodeQL, OWASP ZAP; pick a Postman-equivalent for API tests
- Schema and date-format hygiene — worked FAQ JSON-LD example; tighten validators to reject non-ISO 8601 dates
- mx-template-repo audit — hooks present, low CLAUDE.md startup cost, no symlinks, dynamic Claude commands
- Backlog: identity-surface fields in `.mx.yaml` (ACL, unoverridable attributes, digital-twin scripting)
- Backlog: allabout.network content negotiation (YAML/HTML/MD) + topic-subscription companion app

### 4. Submodule retirement

The `mx-collaboration` submodule itself was deinitialised, its working tree removed, its entry in `.gitmodules` deleted, and its module cache cleaned. Two helper scripts that depended exclusively on it (`scripts/bin/mx.collab.sh` for the pipeline dashboard and `scripts/bin/mx.note.sh` for quick-capture into incoming) were deleted. Five compliance scripts had `mx-collaboration` removed from their `SUBMODULE_DIRS` skip lists. `package.json` and `package-lock.json` no longer carry `mx-collaboration` as an npm workspace.

The standalone GitHub repository at `ddttom/mx-collaboration` is untouched — that decision sits with Tom.

### 5. Items dropped without migration

Per the approved plan and Tom's direction:

- **MX-cards content** (book-ideas-registry-qr-cards, mx-card-scenarios) — superseded by personal-cog work in mx-app
- **mx-editor PRD** archived rather than migrated — superseded by mx-app's BaseWindow + WebContentsView direction
- **Stale or off-topic**: contact-details note, business-engagement terms, expense-tracking PRD, project-starter guidelines (2025-era tech choices)
- **Already implemented** (no migration needed): step-commit workflow (lives as a skill); reginald language redirect Phase 1 (lives as a Cloudflare Worker)
- **Empty-template scaffolding**: discussions/, events/, members/ folders all carried template placeholders with no real content; pipeline templates and READMEs scoped to the dead pipeline

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Files changed (modified + new) | 17 |
| Lines added (new canonical content + edits) | ~1,360 |
| Lines removed (dead helpers + submodule pointer) | ~1,035 |
| Submodules retired | 1 (`mx-collaboration`) |
| Helper scripts deleted | 2 (`mx.collab.sh`, `mx.note.sh`) |
| Compliance scripts updated | 5 (`SUBMODULE_DIRS` lists) |
| New canonical files | 4 |
| New REMINDERS items | 6 (4 Upcoming, 2 Backlog) |
| Repositories touched | 1 (hub) |

---

## Why It Matters

This is governance work, not feature work. With the CMS Summit 17 days out, having a stale pipeline submodule attached to the hub was friction — every session start, every grep, every `submodule status` check carried it as noise. Worse, it carried *real* forward-looking ideas (brainstorm, hamburger UI, backend draft) that were silently orphaned outside the canonical homes where they belong. The drain reduces the hub's surface area, makes orphaned ideas discoverable in `mx-canon`, and removes a source of "is this still alive?" questions for anyone reading the repo cold.

The discipline shows in the asymmetry: ~1,000 lines of dead infrastructure out, ~1,360 lines of substantive canonical content in. The repo is more curated, not just smaller.

---

## Next Steps

- Review the four migrated files at their new canonical homes; correct any framing not in Tom's voice.
- Decide the GitHub-side fate of `https://github.com/ddttom/mx-collaboration` (archive, leave, or delete on GitHub).
- The freshness pass on `backend-architecture-draft.md` (the 2025-era GraphQL message-queue assumption) is queued behind more urgent CMS Summit prep.

---

## Commit Log

| Repo | Hash | Description |
|------|------|-------------|
| mx-outputs | `94a3954` | Add morning directors report and canonical session-report template |
| hub | `62c6bed2` | Drain mx-collaboration submodule into MX-Hub; add canonical templates |
| hub | `1f048b00` | REMINDERS: track scripts/mx-validator.js ESM/CJS mismatch bug |
| hub | `8109fca7` | Remove mx-collaboration references from UBERCOG and README |
| mx-outputs | `793ec95` | Regenerate index after morning directors report + template land |
| hub | `4e7e3c6b` | Bump mx-outputs: regenerate index after morning report + template |
