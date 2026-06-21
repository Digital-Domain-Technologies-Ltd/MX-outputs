---
title: "Co-Directors Report — MX Coherent End-to-End"
description: "The four-cog define-and-document pipeline is complete and the public surface for the audit service has been corrected. The MX framework now has a single normative path at every authoring step, hook-level routing enforcement, and a clean public face."
author: "Tom Cranstoun"
created: 2026-05-03
modified: 2026-05-03
version: "1.0"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-03-evening-report.md
  purpose: "The four-cog define-and-document pipeline is complete and the public surface for the audit service has been corrected. The MX framework now has a single normative path at every authoring step, hook-level routing enforcement, and a clean public face."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - MX Coherent End-to-End"]

---

# Co-Directors Report — MX Coherent End-to-End

**Date:** 3 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

Two pieces of work landed. The four-cog define-and-document pipeline is now complete: every MX definition surface has an entry-point skill, hook-level enforcement that routes authoring intent to the normative source, and an empty deprecations block by design. Separately, Appendix C of the published manuscript pair has been rewritten from a 1,550-line implementation manual into a 102-line client-facing service overview — the framework is now coherent in private and presentable in public.

---

## What Was Done

### 1. Define-and-document pipeline — steps 3 through 6

Step 3: `/mx-onboarding` — the newcomer reading-order navigator across the four tiers (the open-standard drafts, the published manuscripts, the cog registry, the validator stack). Three actions: read the list, explain MX in one paragraph, report progress.

Step 4: `/mx-gathering-submit` — the round-trip SOP for taking a draft through The Gathering's review. Six actions covering status, prepare, file, feedback, incorporate, ratify. Single-file submissions registry. Ratification refuses to proceed without explicit human confirmation.

Step 5: `pre-write-mx-canon.sh` — a PreToolUse advisory hook on direct edits to `fields-data*.yaml`, `cognovamx-fields.yaml`, and Appendix M. Surfaces the `/mx-add-field` dispatch advice; non-blocking, the author can proceed for non-field edits. CLAUDE.md gained a new "MX definition lockstep" section naming all the entry points.

Step 6: `cog-authoring-gate.sh` — a UserPromptSubmit hook that intercepts prompts mentioning "write/edit/create/draft/scaffold/fix a cog" and injects a directive pointing the agent at `how-to-write-a-cog.cog.md` as the authoring authority. Honours explicit bypass. Sister to the existing `run-cog-enforcer.sh` (which handles RUN intent).

### 2. Appendix C reframe and propagation

The published Appendix C was an implementation manual: 1,550 lines covering CLI commands, internal flag names, report file names, scoring formulae, detection patterns, configuration internals, CI/CD integration code. The rewrite trims it to 102 lines covering what the service is, what it measures (seven dimensions named at the conceptual level), what the client receives (six deliverables), who it is for, how an engagement works, what changes after an audit, and how to engage. The frontmatter runbook now carries an explicit "MUST NOT carry implementation internals" guard so the constraint survives future edits.

The change propagated across every cross-reference: the Protocols' end-of-book appendix card, the script-side appendix-list generator, the footnotes generator, the sitemap generator, the published appendix-c.html, the appendices index, the appendices llms.txt, the consolidated llms-full.txt, the standalone footnotes.html, and the faq.html. The Handbook's parallel reference was guarded by the published-manuscript hook and intentionally left for the next Handbook revision cycle.

A planned Cloudflare worker redirect was cancelled after analysis showed no URL change actually occurred — only the title and content shifted; the `appendix-c.html` slug is unchanged.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 5 (steps 3-6 cog drop, appendix-c rewrite, mx-outputs regen, plus pending hub commits) |
| Files changed | ~50 |
| Net lines | +2,000 / −5,000 (the appendix-c trim is the source of the negative balance) |
| Repositories touched | 2 (MX-hub + mx-outputs) |
| New skills registered | /mx-onboarding, /mx-gathering-submit |
| New hooks registered | pre-write-mx-canon.sh, cog-authoring-gate.sh |
| Appendix C: source lines | 1,550 → 102 |
| Appendix C: words | ~5,906 → ~980 |
| MX field violations introduced | 0 |

---

## Why It Matters

Two principles concluded today.

**Coherence.** The work to define MX has lived across many surfaces — the gathering drafts, the canon YAMLs, the prose mirror, the cogs, the manuscripts, the validator stack — held in step by discipline plus post-hoc drift detection. The pipeline that landed today closes that loop. Authoring a new field is one command. Routing a "write a cog" prompt to the normative source is automatic. Newcomers (human or agent) have one entry point. Round-trip with The Gathering has a documented SOP. Direct canon edits surface an advisory pointing to the right tool. The framework is now legible from the inside in a way it was not yesterday.

**Public face.** A published manuscript appendix was leaking the commercial measurement service's internal mechanics — flag names, scoring formulae, detection patterns — to anyone with a browser. That has been replaced with a service overview that points prospects at the contact routes and tells them what the engagement delivers. The leaked internals are gone from every public surface (the appendix HTML, the consolidated llms-full.txt, the appendices llms.txt, the footnotes and faq pages); the only carry-over is the Handbook book bundle, which gets refreshed on the next book cycle.

These two threads matter together: a framework that is coherent inside but leaking outside is not a credible product offering. After today, the framework reads consistently in both places.

---

## Decisions Made

- The `mx.visibility` field stays cut. No tier enum in the canon; the URI scheme on `canonicalUri` carries the signal. Confirmed across the pipeline.
- Cog-authoring intent gets a hook, not a memory rule. Memory cannot enforce automated behaviours; only hooks can. The `cog-authoring-gate.sh` UserPromptSubmit hook is the right shape.
- The deprecations block stays empty. Renaming a field adds the new name without leaving migration archaeology in the dictionary. CLAUDE.md now codifies this rule.
- The Cloudflare worker redirect was cancelled. Analysis showed the URL did not change; only the content did. Adding a redirect for a non-change would have been a self-inflicted complication.
- The Handbook's stale "User Guide" reference is intentionally left for the next Handbook revision cycle, not bypassed today. The published-manuscript guard is a real protection; respecting it costs little.

---

## Next Steps

- The book bundles at `mx-outputs/html/books/{handbook,protocols,codex}/mx-{name}.html` still embed the old 1,550-line Appendix C content. They refresh on the next book rebuild cycle, alongside the PDF regen. Not urgent unless a new book release is imminent.
- The Handbook chapter `the-end/The-End.md` still reads "Appendix C: Web Audit Suite User Guide". Refresh on the next Handbook revision cycle (or with explicit override).
- The four pipeline cogs are not yet exercised end-to-end against a real new field, draft, or onboarding. First user (Tom or another) will surface any rough edges.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `_pending_` (MX-hub) | Complete define-and-document pipeline: steps 3 through 6 (already in `589a804b`) |
| `_pending_` (MX-hub) | Reframe Appendix C as service overview; sweep cross-references |
| `1d0cda4` (mx-outputs) | Regenerate appendix HTML + llms.txt + index for new Appendix C |
| `_pending_` (MX-hub) | Bump mx-outputs pointer + docs (CHANGELOG v1.69) |
