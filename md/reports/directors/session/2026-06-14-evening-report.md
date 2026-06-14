---
title: "Co-Directors Report - Gate Hardening, Prose Engine, and Fable 5 Blog Draft"
description: "Evening covered Gate 25 data-loss fix, prose engine centralisation, Fable 5 blog draft, Gitea audit delivery infrastructure, and live push notifications in the cockpit."
author: "Tom Cranstoun"
created: 2026-06-14
modified: 2026-06-14
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-14-evening-report.md
  purpose: "Evening covered Gate 25 data-loss fix, prose engine centralisation, Fable 5 blog draft, Gitea audit delivery infrastructure, and live push notifications in the cockpit."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Gate Hardening, Prose Engine, Fable 5 Blog Draft, and Gitea Audit Infrastructure"]
---

# Co-Directors Report - Gate Hardening, Prose Engine, Fable 5 Blog Draft, and Gitea Audit Infrastructure

**Date:** 14 June 2026 - Evening
**Segment:** Evening (since 5pm)

---

## Summary

A full evening across four streams. The most safety-critical work was hardening Gate 25, which had a restore loop that could silently destroy another session's uncommitted edits - now fixed with two structural guards. The prose/AI-tell detection engine was centralised into a shared library and shipped via a merged PR. A new blog post draft uses Anthropic's Fable 5 system prompt as the strongest external validation yet for MX OS architecture. The evening's second half completed the Gitea audit delivery infrastructure: 50 per-domain audit repos are now live on the local Gitea instance, the MX Content Cockpit has a new Gitea view showing all repos and delivery dates, and push events from Gitea arrive as live browser notifications that auto-refresh the view.

---

## What Was Done

### Gate 25 restore loop hardened against data loss

`scripts/check-tree-clean.cjs` runs generators to check the tree is clean, then restores any files the generators touched to their pre-run state. The restore loop previously used a simple `git checkout -- <file>` on anything that showed as modified after generators ran - meaning any file edited by a concurrent session could be wiped silently.

Two guards now protect every restore:

1. **Pre-run dirty check** - files already dirty before generators ran are never restored. A snapshot of dirty files is taken at the start; anything in that snapshot is skipped.
2. **Known-outputs check** - only files listed in `scripts/lib/generated-indexes.cjs` as generator outputs are eligible for restore.

The result: Gate 25 can only restore files that were clean at gate-start AND are declared outputs of a known generator. The confirmed data-loss scenario from 12 June cannot recur.

Additional fixes: Gate 7 received `.mx.yaml.md` skeletons for the new prose lib directories introduced by the centralisation work; Gate 11 was updated to exclude `mx-outputs/audit/` paths from the internal link checker, which was generating false positives on audit delivery folders.

### Prose and AI-tell detection engine centralised

All humanizer scanner modules (`scan-ai-vocab`, `scan-copula`, `scan-mechanical`, `scan-prose-patterns`, `scan-register`, `scan-stranded-preposition`, `scan-structure`, `scan-tics`, `scan-word-frequency`) were moved from their scattered locations into `scripts/lib/prose/`, with a shared entry point and consistent module contract. This shipped as a merged PR. The humanizer skill, review-docs, and any future prose-quality tool now import from one place rather than duplicating detection logic.

### Repository hygiene

All 29 stale remote branches (merged and abandoned Claude session branches) were deleted. The remote now carries only `main`. A `pr-merge-cleanup` action cog was written to formalise the workflow: list open PRs, check CI status, squash-merge the green ones, then delete all stale branches. Future sessions can invoke this directly rather than running the commands ad hoc.

### Fable 5 blog draft: the system prompt as a COG

A new blog draft argues that Anthropic's leaked Claude Fable 5 system prompt decomposes naturally into 13 MX COGs - with no residue and no forced cuts. The five structural problems the decomposition exposes (leakage-only readability, all-or-nothing versioning, model lock-in, no composability, no provenance) map directly to the problems MX and REGINALD solve. The draft was saved to `blog-drafts/` and passed through the full humanizer pass. It makes the case that The Gathering exists to standardise and govern what Anthropic built implicitly.

### Gitea audit delivery infrastructure

Every web audit the pipeline runs now lives in its own per-domain Gitea repository on the local Gitea instance, rather than in the `mx-outputs` GitHub submodule. The migration moved 50 domains - roughly 3,400 files - across in a single commit. Each repo carries a `README.md`, a root `.mx.yaml.md` folder descriptor, a `.gitattributes` file that routes PDFs to a download button rather than the browser's broken PDF renderer, and per-delivery date folders with the complete artefact set.

Three operational improvements followed the initial migration. The `app.ini` Gitea configuration was extended to raise the file-display limit so large JSON and CSV deliverables render rather than showing a "too large" warning, and to enable Gitea Actions for future automated workflows. A system webhook was registered pointing at the cockpit so every repo push fires an event to the running dashboard.

The `mx-outputs/.gitignore` was extended to exclude dated delivery folders permanently, and the 21 orphaned working-tree folders left behind by the `git rm` migration commit were deleted from disk.

### MX Content Cockpit - Gitea view and live push notifications

The cockpit gained a new "Gitea" view in the header dropdown. It scans the 50 local Gitea clones at `~/.gitea-audit-repos/`, builds a collapsible tree of repos and delivery dates, and shows file counts and direct links to each delivery in the Gitea web UI. No API round-trip on page load - the view reads the local clone directories directly for speed.

Push notifications are live. The cockpit now holds an SSE (Server-Sent Events) connection open to the server. When Gitea fires its webhook on a repo push, the server pulls the relevant local clone immediately and broadcasts an event to all connected browser tabs. If the Gitea view is active, it auto-reloads within 1.5 seconds to show the new delivery. If another view is active, a status bar message announces the push.

### Documentation and cog updates

All audit-facing cogs and docs were updated to reflect the two-tier storage model: `gitea.cog.md` (v1.1) gained sections on Actions, system webhook, audit repositories, and the cockpit Gitea view; the audit architecture cog (v1.7) gained a new section describing the GitHub/Gitea split; the audit routing cog, README, and QUICKSTART all received Gitea environment variable documentation. The `audit-suite-sync` sentinel was bumped to `2026-06-14-a` across all eight lockstep files.

---

## Why It Matters

The Fable 5 draft is the most concrete external proof point MX has had. A leaked 1,585-line monolith decomposing cleanly into 13 typed cogs is not a coincidence - it confirms that the mental model MX formalises is the one practitioners reach for independently. That argument, published, is worth more to The Gathering's positioning than any internal architecture document.

The Gitea infrastructure solves a real operational problem: GitHub is the wrong home for per-audit artefacts. Deliverables are large, change frequently, and accumulate per client - they belong in a storage tier that can hold them privately and surface them to the auditor without polluting the main repository's commit history. The live push notifications mean the cockpit stays current without manual refresh; that matters when an audit run takes 45 minutes and the operator wants to know the moment results are ready.

The gate hardening work protects developer confidence in the tooling. A gate that can destroy work is worse than no gate.

---

## Decisions Made

- Restore eligibility requires both guards simultaneously. Either guard alone still allows edge-case data loss.
- The prose detection engine lives in `scripts/lib/prose/`, not in `.claude/skills/humanizer/`. Skills route; libraries do the work.
- `pr-merge-cleanup` is a SOP cog rather than a scripted cog - the merge step requires reading CI status and making a judgment call on each PR.
- Gitea is local-only for now. The instance runs on `localhost:3000` and is not exposed externally. External auditor handoff will use git bundles (Phase 7 of the migration plan), not direct Gitea access.
- The Gitea view reads local clone directories rather than hitting the Gitea API on page load. Faster, and avoids token exposure in the browser.

---

## Next Steps

- Publish the Fable 5 blog post via `/md-workflow` once Tom has reviewed the draft
- Monitor Gate 25 across the next few push cycles to confirm the guards hold under concurrent-session load
- Phase 4: wire the Gitea push into `scripts/audit-pipeline.js` so a completed audit run pushes to Gitea automatically
- Phase 7: build the auditor handoff tool - git bundle plus cover sheet PDF, triggered from the cockpit Unpack tab
