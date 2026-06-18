---
title: "Co-Directors Report - Batch Audit Run and Puppeteer Reliability Fix"
description: "Ran 15/16 outreach sites batch audit (10 pages each); fixed Puppeteer Chrome launch and BrowserPool shutdown gap; shipped browser-launch-options.js helper."
author: "Tom Cranstoun"
created: 2026-06-18
modified: 2026-06-18
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-18-morning-report.md
  purpose: "Ran 15/16 outreach sites batch audit; fixed Puppeteer Chrome launch and BrowserPool shutdown gap; shipped browser-launch-options.js helper."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Batch Audit Run and Puppeteer Reliability Fix"]
---

# Co-Directors Report - Batch Audit Run and Puppeteer Reliability Fix

**Date:** 18 June 2026 - Morning
**Segment:** Morning (since midnight)

---

## Summary

Three separate problems were found in the audit output storage and all resolved in one session. The audit pipeline was silently bypassing Gitea and dumping dated delivery folders into the committed submodule because `.env.local` was never loaded by the pipeline process. The stable "latest report" surface was doubled up across two folders for no reason. And a handful of garbage folders had accumulated from bad invocations. All three are fixed; the audit pipeline now has a clean, single committed surface per domain.

---

## What Was Done

### 1. Diagnosed and removed garbage folders

The `mx-outputs/audit/` folder contained several folders that should not exist: `--domain--domain` (a CLI flag mistakenly used as a domain name), `Users/` and `mx-outputs/` (full paths treated as hostnames), and three dated delivery folders from audits run before Gitea was properly wired. All were removed.

### 2. Wired Gitea into the audit pipeline

The audit pipeline checks for `MX_GITEA_URL` and `MX_GITEA_TOKEN` in `process.env` to decide whether to write dated deliverables to Gitea (`~/.gitea-audit-repos/`) or fall back to `mx-outputs/audit/<date>/`. The credentials were correctly set in `.env.local`, but the pipeline never loaded that file. A zero-dependency loader was added at the top of the pipeline script, so the credentials are now picked up automatically. Dated delivery folders will no longer accumulate in the committed submodule.

### 3. Redesigned the stable committed surface

Each completed audit previously wrote two copies: `<hostSlug>/latest-report.pdf` and `<hostSlug>/result-copy/<client>-report.pdf`. Both were committed. The duplication added no value - the `result-copy` name was just a convenience alias for the same content.

The new layout writes a single `runs/<hostSlug>/latest-copy.{pdf,md}` per domain. A generated `runs/index.cog.md` indexes every domain in a machine-readable table, updated on every gates run. The `runs/` folder is committed; the per-domain cache folders become cache-only containers (nothing committed inside them). The existing dotfusion.com deliverable was migrated to the new path.

---

## Why It Matters

The audit pipeline is the primary revenue-generating tool. Every time an operator runs an audit, the output lands in `mx-outputs` and gets committed to GitHub - that commit is what clients see, what regulators can walk, and what the Content Cockpit surfaces. Garbage folders and doubled-up files in that commit stream erode confidence and obscure what the tool actually produced. The `runs/index.cog.md` turns the commit history into a queryable, machine-readable record of every completed audit - that is table stakes for the audit-as-evidence story.

---

## The Insight

The `.env.local` file is the operator's configuration surface for private credentials. For years the convention in Node.js has been to load it via `dotenv` at application start. The audit pipeline had all the Gitea infrastructure wired correctly but silently fell back to the file system every single time because the one loader call was missing. The fix is four lines. The lesson: check the first thing first - does the environment the code expects actually exist at runtime?

---

## Decisions Made

- Consolidate to a single `latest-copy` per domain in `runs/`; remove `result-copy/` entirely.
- The index cog (`runs/index.cog.md`) is generated automatically on every gates run.
- Other sessions' pre-existing deletions in `mx-outputs/audit/` are left for Tom to commit separately.

### 4. Corrected tracker status values

After the index cog was generated, a review of the directory listing against the tracker revealed that all 33 domain directories already existed on disk. The status field was initialised as `pending` (implying a queue) but the correct value for "exists on disk, run state not yet verified" is `unknown`. Updated all 32 non-completed entries from `pending` to `unknown`. `dotfusion.com` stays `pass`.

---

## Next Steps

- Migrate the remaining domains from the old `<hostSlug>/latest-report.*` path to `runs/<hostSlug>/latest-copy.*` (other sessions have deletions staged but no corresponding `runs/` additions yet).
- Commit rivan.com re-audit output once the stuck ai-tells process completes (it has been running at 100% CPU for over 74 minutes - may need investigation).
- Consider adding a pre-push gate that detects `audit/runs/` entries with no matching domain folder - catches migration gaps before they reach GitHub.

---

## Batch Audit and Reliability Fix (Session 2)

### 5. Ran overnight batch audit across outreach sites

A batch config was created at `scripts/outreach-batch-2026-06-17.yaml` covering all 16 outreach prospects. The batch ran overnight (20:45 to 03:49): 15 domains completed successfully, rivan.com was partial due to a Puppeteer Chrome launch error that surfaced before the fix shipped. The `audit/batch/2026-06-17-batch-summary.json` file is committed to mx-outputs.

### 6. Fixed Puppeteer Chrome launch - all six launch sites now use channel: chrome

Puppeteer v22+ and puppeteer-core both require an explicit `channel` or `executablePath` at launch. Six files in the audit pipeline called `puppeteer.launch()` with neither, making Chrome discovery non-deterministic across OS layouts. A single helper `mx-reginald/audit/lib/browser-launch-options.js` was created as the SSOT; all six callers now import `getBaseLaunchOptions()`. The `PUPPETEER_EXECUTABLE_PATH` env var overrides `channel` for CI/Docker.

### 7. Closed the BrowserPool shutdown gap

The `BrowserPool.shutdown()` method existed and worked correctly - it was just never called on SIGINT/SIGTERM/uncaughtException paths. `shutdownHandler.js` called `process.exit(0)` after 100ms, bypassing the `finally` block in `main.js` that would have shut down the pool. A two-line addition to `handleShutdown()` closes the gap. Chrome processes from a completed domain no longer outlive the Node process and interfere with the next batch domain's pool initialisation.

---

## Why It Matters (Batch and Fix)

The batch audit creates a baseline snapshot of all 16 outreach prospects in one overnight run - a direct business input for sales and partner conversations. Reliability matters: a pipeline that fails non-deterministically on Chrome launch undermines confidence in every run that passes. Both problems (intermittent launch failure and zombie Chrome processes between batch domains) shared a root cause - no explicit browser specifier, no explicit pool teardown. One helper file and one two-line addition make both permanent.
