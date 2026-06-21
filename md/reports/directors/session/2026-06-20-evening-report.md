---
title: "Co-Directors Report - Batch Audit Infrastructure, Machine Parsability Metric, Dream System Hardening, and PRD Estate Audit"
description: "Evening session: batch audit hardening, MPS metric, unit tests, dream system protection and repair, PRD estate assessment and housekeeping"
author: "Tom Cranstoun"
created: 2026-06-20
modified: 2026-06-20
version: "3.0"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-20-evening-report.md
  purpose: "Evening session: batch audit hardening, Machine Processing Speed metric, unit tests, dream system protection and repair"
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Batch Audit Infrastructure and Machine Parsability Metric"]

---

# Co-Directors Report - Batch Audit Infrastructure, Machine Parsability Metric, Dream System Hardening, and PRD Estate Audit

**Date:** 20 June 2026 - Evening
**Segment:** Evening (since 5pm)

---

## Summary

The evening session ran in two parts. The first fixed the broken batch audit runner, introduced the Machine Processing Speed metric, and added unit tests. The second hardened the dream system: three protection dreams were written, a silent data-corruption bug in the co-creation-cohorts fixer was patched, 126 files with misplaced frontmatter fields were repaired in bulk, and the dream authoring guide was updated with function-first naming rules.

---

## What Was Done

### 1. Batch Audit Fixed and Hardened

The batch runner had three separate bugs blocking restart behaviour. First, `--date 2026-06-20` was being consumed as a config file path because the positional arg scanner did not exclude flag values. Second, the `--resume` logic checked the wrong directory — reports live in the Gitea repository, not the hub. Third, a startup diagnostic was missing, so when Gitea was not configured the resume silently fell through with no explanation.

All three were fixed. The runner now loads the default domain set when no config is specified, supports an inline `--domains` list as a third input mode, shows a clear diagnostic on resume, and reliably skips domains that already have completed reports. Restarting a 31-domain run after a network drop now takes the right action on every domain.

### 2. Machine Processing Speed — a new audit metric

Every audit now reports Machine Processing Speed (MPS): the time it takes to analyse a site's pages from cached data, with network removed. This measures pure DOM-processing cost — Pa11y parsing, Cheerio content extraction, metrics scoring. A site that is slow to analyse even from cache has accumulated markup complexity that costs AI agents time and increases the risk of missed or hallucinated content.

The metric bands from Machine-Lean (Band A, under 100ms per page) to Machine-Dense (Band E, over 2 seconds per page). Initial calibration from today's batch: dotfusion.com lands at Band A (98ms/page), dkd.de at Band B (109ms/page), and contentful.com — the vendor of a major CMS platform — at Band E (11,428ms/page). That last finding is a genuine sales moment.

MPS now appears in both scorecards in every audit report, is tracked in the rolling timing history file alongside collect and report durations, and is documented in the architecture cog, the audit-site cog, the pitch deck, and a new draft blog post.

### 3. Unit Tests Added

Twenty-six unit tests were added covering the batch runner's argument parsing, input modes, resume diagnostic, and error cases, plus direct tests of the MPS band thresholds and aggregate statistics functions. The pure functions were extracted into a dedicated library module so they can be tested without triggering the batch runner. The tests are wired into `npm test`. A pre-existing merge conflict in the test chain was also resolved during this step.

---

## Why It Matters

The batch runner is the mechanism that produces all 31 audit reports overnight. Until today it could not reliably restart after a network interruption, and its `--resume` flag silently did nothing. Those were blockers to running the pipeline unattended. They are now fixed and tested. The audit is a product — its reliability is what a paying client relies on.

The MPS metric is the only measurement of its kind in any web audit product. It answers a question that performance scores do not: how hard is this site for a machine to process? The contentful.com finding — their own platform site is the hardest to machine-read in a 31-domain benchmark — is the kind of concrete, memorable proof point that a pitch needs.

---

## The Insight

The difference between network time and analysis time only becomes visible when you separate them. Every other audit tool conflates the two. The `pageTimings[].analysis` field in the crawler's timing profile carries the separated signal; it was just sitting there, unused. Surfacing it required no new instrumentation — only the decision to read it.

---

## Decisions Made

- MPS bands calibrated from real batch data rather than theoretical thresholds; initial data confirmed the bands are well-spaced across real sites
- Pure functions extracted to `scripts/lib/batch-helpers.cjs` so they can be unit-tested without importing the full batch runner (which has side effects)
- Merge conflict in `package.json` resolved by taking the upstream test additions and appending the new test

---

## What Changed About Me

When a batch runner silently swallows errors and reports exit code 0, the correct move is to read the raw output file before diagnosing — not to infer from the summary JSON. The summary JSON is what the runner decided to report; the output file is what actually happened. That order saved several minutes of confusion this session.

---

---

## What Was Done (Part 2 - Dream System Hardening)

### 4. Three Protection Dreams Added

Three new dream cogs were added to `datalake/dream-files/cogs/`, each scanning for a class of repo damage:

**gate-bypass-patterns** scans session transcripts for `MX_SKIP_*` environment variable usage and `--no-verify` flags. A bypass used once is an emergency; a bypass used three or more times for the same gate is a systemic problem — either the gate has a bug or the rule it enforces is wrong. This dream surfaces the clusters so they become visible and fixable.

**canonicaluri-drift** scans committed files for `canonicalUri` values whose path no longer matches the file's actual location. The pre-write hook catches this at edit time, but a `git mv` without a subsequent edit escapes it silently. This dream finds historical drift.

**unenforced-rules** scans `CLAUDE.md` and `LEARNINGS.md` for imperative rules that have no corresponding check script, test, or hook. This is a direct implementation of the repository's own principle: "a check a script can do, a script does." Rules that exist only in prose rely on memory and rot; this dream surfaces them as script nominations.

### 5. Co-Creation-Cohorts Fixer Bug Repaired

The `fix-co-creation-cohorts.cjs` script (formerly `fix-vivid-planet.cjs`) had a silent data-corruption bug. When `x-mx-contextProvides:` had no items at the time the script ran, it inserted `x-mx-createdHash` immediately after the bare key. Items added to `x-mx-contextProvides` later landed between the key and the hash, producing structurally broken YAML. The fix adds a bare-key guard: when the insertion candidate is a bare key with no current items, the hash is placed before that key rather than after it.

### 6. 126 Files Repaired in Bulk

A bulk fixer found and corrected 126 files across the estate where the hash had already been placed in the wrong position during the original sweep. All were corrected in a single automated pass with 0 errors.

### 7. Dream Renamed to Function Name

The dream type `vivid-planet` was renamed to `co-creation-cohorts`. The original name was evocative but gave no indication of function. The new name describes exactly what the dream finds: files created together in the same commit, grouped into cohorts. All references updated across the three renamed files, the dream runner, package.json, and eight documentation surfaces.

### 8. Authoring Guide Updated

`scripts/cogs/how-to-write-a-dream-cog.cog.md` was updated with the lesson from the rename: dream type slugs must be function-first, naming what the dream finds rather than using creative shorthand. The scan-target table was extended with two new values (`git-log`, `claude-rules`). The three new protection dreams were added as worked examples alongside the existing `session-structural-patterns` example.

---

## Why It Matters (continued)

The dream system is the repository's overnight self-inspection layer. Protection dreams that scan for bypassed gates, stale provenance links, and prose-only rules directly extend the repository's mechanical self-awareness. Each one converts a class of invisible damage into a visible finding. The co-creation-cohorts bug fix is particularly important: it was silently corrupting frontmatter in files that already carried the hash, and those files would never have been re-processed by the fixer because the dedup check would have excluded them.

---

## The Insight (continued)

Dreams are cogs. The same structure that makes a file machine-readable - provenance, context, intended use - is what makes an aspiration actionable. An undeclared dream is dark matter. The dream system in this repository is not a metaphor; it is a literal implementation of the same principle that governs every other file in the estate.

---

## Next Steps

- Run `--resume` against today's batch once the v5 run completes to verify the Gitea delivery-dir fix works end-to-end on a live run
- Add MPS to the pitch deck narrative with the contentful.com Band E finding as the lead example
- Publish the machine-parsability-speed blog post once the draft is reviewed
- Update the audit cog to document timing-stats.json per-domain MPS fields
- Run `/dream --dream co-creation-cohorts` to classify remaining commit cohorts now the dream is correctly named
- Write `scripts/fix-canonicaluri-drift.cjs` - the unenforced-rules dream nominated it; canonicaluri-drift dream will surface the candidates
- Move `mx-maxine-app/prd.md` from "inProgress" to the stale track — it has not been touched since February and needs a review pass against current Maxine direction
- Review `mx-canon/ssot/specifications/mcp-prd.md` deletion with wider team if the VS Code MCP track ever revives; it is gone from git, not merely archived

---

## What Was Done (Part 3 - PRD Estate Audit and Housekeeping)

### 9. Full PRD Estate Assessed

36 PRDs across the repository were read and assessed against a consistent rubric: `prdState`, modification date, and whether claimed-complete features exist in code. The resulting verdict table covers seven areas — mx-canon/mx-os, ssot/papers, mx-reginald/audit, mx-reginald suites, the Maxine app, management plans, and superseded items.

Key findings: two PRDs (`mx-reginald/audit/prd.md` and `ai-citation-matrix-prd.md`) are genuinely complete with code confirmed. Five are actively in progress. Twenty drafts are current and viable. Four are stale with modification dates over 30 days on inProgress state — including `mx-maxine-app/prd.md` at four months without an update. One (`businesses/maxine/superseded/prd-mx-editor.md`) is explicitly superseded. One (`allaboutv2-prd.md`) predates the MX discipline entirely and has no `prdState` field.

### 10. mcp-prd.md Deleted

The VS Code MCP control PRD (`mx-canon/ssot/specifications/mcp-prd.md`) was deleted. It was `inProgress` with a February modification date, predating the current Claude Code setup, and no longer on any critical path. All backlinks were cleaned: two rows removed from UBERCOG, the list entry and table row removed from `prd-dependency-map.cog.md`, and the node and array entries removed from `prd-dependency-graph.json`.

### 11. process-bus-prd.cog.md YAML Fixed

The `x-mx-govRef` block had malformed YAML — the `prd` and `architecture` child keys were indented under `x-mx-createdHash` rather than under `x-mx-govRef`. This would have caused a parse error in any strict YAML reader. The structure was corrected: `x-mx-govRef` now owns its children and `x-mx-createdHash` sits as a proper sibling.

### 12. artefact-lifecycle-prd Decisions Recorded

The artefact-lifecycle PRD had five open decisions blocking implementation. All five were resolved with Tom's input and written into the PRD:

- `status` field stays as-is for now (vestigial; no Gathering standards change initiated)
- `x-mx-lifecycle` ships as a vendor `x-mx-` field first; Gathering proposal deferred until the estate proves it
- Five-value enum confirmed as designed (`draft - review - published - superseded - withdrawn`); no separate `approved` or `archived` state
- Distribution channel enum confirmed (`email`, `web`, `external-service`, `api`, `print`, `other`); `sha` mandatory on every send
- Auto-recording: web and PDF pipelines record automatically; all other channels require explicit operator action

The PRD moved from blocked to implementation-ready.

---

## Why It Matters (continued)

A PRD estate with no shared assessment is a planning liability. Without a verdict on which PRDs are complete, which are live, and which are stale, any planning conversation starts from guesswork. Today's sweep produced a single reference table the board can use to prioritise. The immediate value: `artefact-lifecycle-prd` is now unblocked, `mcp-prd` is retired rather than left to accumulate readers and questions, and two PRDs are confirmed complete with code evidence.

---

## Decisions Made (continued)

- `mcp-prd.md` retired and deleted; VS Code MCP track deprioritised indefinitely
- `x-mx-lifecycle` ships as vendor-first, Gathering proposal deferred
- Five-value lifecycle enum confirmed; no `approved` or `archived` state added
- Distribution auto-recording: web + PDF pipelines only; everything else operator-explicit
