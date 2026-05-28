---
title: "Co-Directors Report — Audit Phase 6 Final Inference + Operating Principles Update"
description: "Added a cog-only post-PDF cross-check pass to the audit pipeline and shifted Maxine's working defaults toward proactive helpfulness and monetisation surfacing."
author: "Tom Cranstoun"
created: 2026-05-28
modified: 2026-05-28
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-28-evening-report.md
---

# Co-Directors Report — Audit Phase 6 Final Inference + Operating Principles Update

**Date:** 28 May 2026 — Evening
**Segment:** evening (since 17:00)

---

## Summary

The evening added a final inference pass to the audit pipeline. After the PDF lands, an LLM re-reads the published markdown against the per-domain cache and surfaces inaccuracies, contradictions, and misstatements to Tom in a terminal summary — without rewriting the report. The same session captured a working-relationship adjustment: skill prose is editable when Tom's request names the surface (provided the edit is flagged), and Maxine's default shifts toward engaged-and-monetisation-aware rather than minimal. These are small files but real policy changes.

---

## What Was Done

### 1. Audit pipeline — Phase 6 final inference

Added `post-pdf-cross-check` as a new action in [`scripts/cogs/mx-audit.cog.md`](../../../../../scripts/cogs/mx-audit.cog.md) (version 1.12.0 → 1.13.0). The action sits between `generate-pdf` and `summary` in the cog's action sequence. Its job: re-read the linted markdown, locate the corroborating evidence for every substantive claim — positive (the site DOES X) and negative (the site DOES NOT X) — inside `mx-outputs/audit/<hostSlug>/.cache/{served,decoded,rendered,body}/<hash>.html` and the origin probes; fall back to a live `curl` when the cache is ambiguous, stale, or silent; classify findings into four buckets — INACCURACY, CONTRADICTION, MISSTATEMENT, UNVERIFIABLE; print a summary addressed to Tom in the terminal. The action never rewrites the markdown, never regenerates the PDF, never touches sidecars or audit_errors.json. It is advisory only.

Cog-only by design. The action is absent from `scripts/audit-pipeline.js`, `npm run audit:full`, and the `@embedded:mx-audit-script` bash block at the bottom of the cog. The scripted path stops at `generate-pdf → summary` as before; only an agent walking the cog through the SOP path reaches the new step. This preserves the architectural rule that scripts deliver and agents discover — Phase 6 is a discovery pass, not a mechanical gate. The deterministic verifier, fierce critic, and llm-judgment passes catch their categories at PDF time; Phase 6 catches the residual class no regex can — a claim that is locally well-formed and locally well-cited but globally contradicts what the cache shows.

The matching `/audit-site` skill grew a corresponding Phase 6 paragraph that points back at the cog action — the cog is the substantive source of truth, the skill mirrors the workflow shape.

### 2. Operating principles — helpfulness + monetisation surfacing

[`CLAUDE.md`](../../../../../CLAUDE.md)'s Partnership Model section grew two new bullets:

- **Be very helpful.** Suggest improvements as work goes along, not only when asked. If an adjacent issue is quick to fix and obviously right, do it and note it. If a pattern could be cleaner, name it. If a document is drifting from reality, flag it. The default is engaged, not minimal.
- **Surface monetisation ideas.** Always scan the work for ways MX, REGINALD, The Gathering, or Maxine could generate revenue — a productisable workflow, a billable insight, a sponsor angle, a SaaS hook, a consulting hook, a piece of IP worth protecting. Name the idea in the summary even when tangential. Surface, do not filter.

The auto-memory rule that previously said "do not edit skill prose" was rewritten as a two-case rule: an explicit feature request that names a skill's surface → edit + flag the edit prominently in the summary + offer to revert; an incidental sweep / cleanup that happens to touch skill prose → surface only, do not edit. The 28 May audit-site Phase 6 work is now the canonical Case A example; the 27 May legacy-repair-script cleanup remains the canonical Case B example.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | _pending_ (one hub commit will land in Step 3) |
| Files changed (hub) | 3 |
| Lines added | +163 |
| Lines removed | -4 |
| Repositories | 1 (hub only; no submodule changes) |
| Auto-memory files touched | 2 (rule rewritten, index line updated) |
| Cog version bumps | mx-audit 1.12.0 → 1.13.0 |

---

## Why It Matters

The Phase 6 final inference is the kind of operational gate the REGINALD evidence-vehicle pitch needs to be credible at the prospect-meeting end of the funnel. Audit reports go to prospects with named CFOs and compliance officers. A single mis-stated negative — claiming "the site lacks X" when the cache shows X present, or asserting where the evidence is partial — costs more credibility than three missed positives. The deterministic verifier and fierce critic catch what they can pattern-match; Phase 6 is the human-style final read that catches the rest. It also fits the partnership architecture cleanly: scripts run the deterministic pipeline; the cog adds the LLM-judgement final pass.

The operating-principles update is the bigger of the two changes in shape. The default mode for the assistant shifts from "execute the request as scoped" to "execute, and surface adjacent value — including monetisation". That changes what every future session's throughput looks like. It also explicitly authorises Maxine to name revenue angles in the summary without waiting to be asked — which is the behaviour Tom needs at this stage of the build.

---

## The Insight

Two scoping rules I had — "don't edit skill prose" and "don't volunteer monetisation thinking" — were calibrated for an earlier phase of the partnership where the worry was over-edit and over-pitch. The phase we are in now is the opposite: under-coverage of the audit surface, and under-naming of revenue opportunities. The two scope rules needed to be loosened together. A behaviour I exhibited in the previous turn (edit + flag + offer to revert) was already the right shape; the rule just needed to catch up with the practice.

---

## Decisions Made

- Phase 6 lives in the cog only, never in the scripted path. The scripted pipeline is for prospects who want a deterministic run; the LLM judgement pass is reserved for the cog walk Tom personally invokes.
- The auto-memory rule on skill-prose edits is now two-case, not absolute. The default for explicit feature requests is edit + flag + offer to revert.

---

## Next Steps

- Walk through Phase 6 live on the next audit run to validate the four-category split (Inaccuracy / Contradiction / Misstatement / Unverifiable) and the prompt shape that asks the LLM to ground each claim in a specific cache file.
- Watch whether "Surface monetisation ideas" generates signal or noise over the next few sessions. If it becomes mechanical, fold it into a discrete skill that runs at session close rather than a per-turn default.
- Decide whether the Phase 6 summary should also be persisted to disk (alongside the verification.json / fierce-critic.json / llm-judgment.json sidecars) or stay terminal-only. Current rule says terminal-only; the question is whether auditors and compliance officers need it in the evidence chain.

---

## Commit Log

| Hash | Description |
|------|-------------|
| _pending_ (hub) | mx-audit cog: add Phase 6 post-pdf-cross-check action + matching /audit-site skill paragraph + CLAUDE.md Partnership Model helpfulness/monetisation bullets |
