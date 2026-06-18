---
title: "Co-Directors Report - Audit Pipeline, Validator Sweep, Cockpit, Graph Discoverability, ARD Catalog"
description: "Six sessions: audit pipeline/storage overhaul, Puppeteer fix, pre-existing errors sweep, cockpit extension filter, MX graph discoverability, and ARD ai-catalog generator."
author: "Tom Cranstoun"
created: 2026-06-18
modified: 2026-06-18
version: "1.6"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-18-morning-report.md
  purpose: "Four sessions: audit pipeline/storage overhaul, Puppeteer fix, pre-existing errors sweep, and cockpit extension filter with admin view."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit Pipeline, Validator Sweep, Cockpit Extension Filter"]
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

---

## Pre-Existing Errors Sweep (Session 3)

### 8. Established the no-broken-windows policy for validators

The session began when a validator run on three new dream COGs (created at the start of the conversation) showed 24 advisory warnings. The policy was clarified: no pre-existing error, regardless of how long it has sat there, is acceptable. Every finding is addressed - either fixed by a deterministic script, deferred through a decision gate, or logged in REMINDERS for human editing. A new `pre-existing-errors-policy.cog.md` documents the three resolution tracks permanently.

### 9. Found and fixed a validator path bug (24 false warnings cleared)

The MX metadata validator checked for the `refersTo` field at the top level of cog frontmatter. The field actually lives under `mx:` - the validator was checking the wrong path. The fix is one line in `RECOMMENDED_FIELDS`. This cleared 24 false warnings across all dream COGs without requiring any edits to the cog files themselves.

### 10. Canonicalised x-mx-contextRequired

The validator recommended `mx.x-mx-contextRequired` on every cog it checked, but the field had no entry in any canon YAML file. The validator was enforcing a field the standard did not define. The field was added to `cognovamx-fields.yaml` (version 6.17) with a proper definition and documented in Appendix M alongside its sibling `x-mx-contextProvides`. A deterministic script (`fix-dream-cog-metadata.cjs`) then backfilled `x-mx-contextRequired: []` into all 12 dream COGs.

### 11. Fixed the link checker's asset-skipping inconsistency

The HTML link scanner correctly skipped asset files (PNG, PDF, etc.). The markdown link scanner did not - so image references in pandoc templates were flagged as dead links. The fix adds asset-extension skipping to the markdown scanner and extends the asset list with `.csv` (generated audit sidecar data). This cleared a set of false dead-link reports on audit templates and test fixtures.

### 12. Fixed the validation report generator wrong-depth links

When the MX validator wrote a report from a subdirectory (e.g., running inside `mx-reginald/audit/`), its internal links used hardcoded `../../` traversals that assumed a two-level-deep output path. The generator now computes the relative depth dynamically from `__dirname`, so reports written from any directory produce correct links.

---

## Why It Matters (Errors Sweep)

The no-broken-windows principle is not cosmetic. A repository where `npm test` reliably means green is one where green signals something - a new failure is immediately visible. A repository that tolerates a baseline of warnings trains operators to ignore the validator output, which is exactly when real problems slip through. Eight concrete bugs were fixed, two REMINDERS items were added for work that needs human judgment, and the policy is now documented in a cog so future sessions know the expectation.

---

## Next Steps (added this session)

- Trim 20 cog descriptions that exceed 160 chars (REMINDERS item added - needs human editing per description).
- Run repo-wide link sweep on a fat clone on main: `node scripts/check-link-paths.cjs --all --cleanup --stage` to auto-fix wrong-depth links; review dead links manually (REMINDERS item added).

---

## Cockpit Extension Filter and Admin View (Session 4)

### 13. Added a file-type filter to the cockpit tree

The Content Cockpit's tree views (Full tree, PRD/Docs, Scripts, Manuscripts, Assets) now have an extension filter dropdown in the toolbar. Selecting `.cog.md`, `.md`, `.js`, or any other registered type narrows the tree to matching files - useful when looking for all governance cogs across the repo, or all shell scripts. The dropdown is hidden for the Content view where kind/stage filters already serve the same purpose.

The filter is populated from a pre-built registry rather than live-scanning the tree on every view switch. The registry (`scripts/lib/file-extensions.json`) carries 48 file types, each with a plain-language description: `.cog.md - MX governance cog`, `.sh - Shell script`, and so on.

### 14. Self-updating extension registry

On first startup, the cockpit walks the full repo tree and writes any file extension it finds to the registry. On every subsequent startup the file is read directly - no scan overhead. A new admin view in the cockpit (accessible from the IDE views dropdown as "Extension Registry") shows all registered extensions in a two-column table and provides a Run discovery button that triggers the scan on demand, appends any new extensions it finds, and reloads the view.

### 15. Documentation kept in step

The content-dashboard cog and the operator manual were updated to reflect both additions - the extension filter and the Extension Registry admin view join the view dropdown table, the filters section now distinguishes Content-view filters from the extension filter, and the new file paths are in the Related sections.

---

## Why It Matters (Cockpit)

The cockpit is the operator's primary interface for the repo estate. Before this, browsing the full-tree view to find all `.cog.md` files meant scrolling a large tree manually. The extension filter makes that a single dropdown selection. The pre-built registry approach means there is no startup penalty - the file exists, it loads in milliseconds. The admin view gives any operator the ability to see what file types are tracked and discover new ones without touching the command line.

---

## MX Graph Discoverability (Session 5)

### 16. Closed the gap between what the graph claimed to support and what it actually indexed

A session-start search for "scripts knowing their prd" required eight attempts before finding the right cog, eventually falling back to grep. The root cause was a three-part gap in the graph query engine: the `purpose` field was listed in the MCP schema as queryable but was never copied into graph nodes; `x-mx-contextProvides` (the rich AI-context hint text each cog carries) was similarly invisible; and there was no way to search by intent across multiple fields at once.

Two files were edited. The graph builder now copies `purpose` and `contextProvides` into every cog node when it builds the graph. The MCP tool now supports a `fulltext:` prefix that searches across title, description, purpose, contextProvides, and tags in a single pass. The MCP schema string was corrected to match what the tool actually supports.

The cog whose description made it unfindable was also updated - its description now names `x-mx-govRef` directly, so searching for "govRef" returns it in one step.

Six new test assertions were added to the graph test suite, all passing.

---

## Why It Matters (Graph Discoverability)

Every session that needs to find a specific capability or specification starts by querying the graph. When the graph cannot return the right cog from an intent-based query, the operator falls back to grep - a slower, noisier path that requires knowing where to look rather than what to look for. The fix is architectural: the graph is now the honest single-source of queryable metadata, and `fulltext:` gives any operator a path from intent to cog in one query. This directly reduces session start-up friction.

---

## ARD ai-catalog and Node/Phone App Cogs (Session 6)

### 17. Built the ARD Agentic Resource Discovery catalog generator

Google published the Agentic Resource Discovery (ARD) specification — a multi-vendor standard for making callable capabilities machine-discoverable across federated registries. The house position is to complement rather than compete: build the generator now so mx-site can participate in ARD from day one, and design the REGINALD-to-ARD bridge as the proprietary differentiator (our richer evidence chain populates ARD's thin trust manifest in ways no other registry can).

The generator produces `mx-outputs/mx-site/.well-known/ai-catalog.json` from what mx-site already serves: the `llms.txt` discovery corpora, the COG spec and runtime explainers, key pages, and blog posts on request. It is deterministic, written through `write-if-changed`, and carries a full unit-test suite. Two npm scripts wire it in: `ardcatalog:generate` (writes, fat-clone only) and `ardcatalog:check` (prints, any environment). A shared library `scripts/lib/html-meta.cjs` extracts the metadata every served page carries in its `<head>` — one definition that every generator scans through, so the page's title, description, canonical, and noindex state can never drift between consumers.

The served artefact and its estate freshness gate land on a fat clone on `main`; the REMINDERS item tracks the wiring steps.

### 18. Added two how-to cogs for Node.js and phone app building

Two info-cogs were added covering the common "how do I build X?" questions that arise when extending MX tooling or building a demo: `how-to-build-a-nodejs-app.cog.md` walks a zero-dependency HTTP server from blank folder to verified endpoint; `how-to-build-a-phone-app.cog.md` covers the route choice (PWA, cross-platform, native) and the PWA route extending the Node cog. Both reference the `constellation-app/` as the worked reference implementation.

---

## Why It Matters (ARD and Cogs)

ARD positions us to be interoperable with the machine-discovery ecosystem on day one, without any platform integration work. The generator costs nothing to maintain once wired. The REGINALD-to-ARD bridge is where the commercial differentiation sits: other registries advertise capabilities; REGINALD attests them with a tamper-evident evidence chain that satisfies regulators. The two how-to cogs reduce the ramp-up time for anyone extending the MX tooling or building a new demo — a context-efficient guide the agent can read in one fetch rather than inferring from first principles.

---

## Next Steps (combined)

- Trim 20 cog descriptions that exceed 160 chars (REMINDERS - needs human editing per description).
- Run repo-wide link sweep on a fat clone on main: `node scripts/check-link-paths.cjs --all --cleanup --stage` to auto-fix wrong-depth links; review dead links manually.
- Fill in the empty description fields in `scripts/lib/file-extensions.json` for any edge-case extensions discovered by the first real startup on each new machine.
- Wire `x-mx-govRef` onto priority scripts (`scripts/promote.cjs`, `scripts/generate-content-html.cjs`, `scripts/audit-pipeline.js`) per the open REMINDERS item.
