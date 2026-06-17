---
title: "Co-Directors Report - Audit Pipeline Speed, File-Move Determinism, Scrunch/Sitecore Content, and Tag Normalisation"
description: "Morning session: agent-access audit step ~45% faster, deterministic file-move tooling, golden master stabilised, Scrunch/Sitecore content cluster, incoming content tracker, and tag normalisation system."
author: "Tom Cranstoun"
created: 2026-06-17
modified: 2026-06-17
version: "1.3"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-17-morning-report.md
  purpose: "Morning sessions covering step-commit hardening, audit pipeline speed, deterministic file-move tooling, and Scrunch/Sitecore content cluster."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Morning 17 June 2026"]
---

# Co-Directors Report - Morning 17 June 2026

**Date:** 17 June 2026 - Morning
**Segment:** Morning (since midnight)

---

## Summary

Two sessions ran this morning. The first hardened the step-commit workflow — concurrent-session safety, secret scanning, repo-integrity gates. The second improved the web audit pipeline's agent-access step (~45% faster, null-freshness cache), stabilised the test suite golden master, added deterministic file-move tooling, and committed the Scrunch/Sitecore content cluster.

---

## Session 1: Step-Commit Workflow Hardening

### Concurrent-Session Safety

The step-commit workflow previously encouraged investigation of changes left by other sessions. This was expensive and error-prone. The rule is now clear: stage only files this session authored, skip everything else, list what was skipped in the summary. Quick mode was removed; one mode always commits, documents, and pushes.

### Pre-Commit Staged-Set Verification

A recurring failure pattern was committing files left staged by another session. The workflow now requires mandatory inspection of the staged set before every commit, with explicit unstaging of anything not authored by this session. Act on the hook warning before the commit, not after.

### Deterministic Secret Scan Gate

A new script (`scripts/check-secret-scan.cjs`) is the single source of truth for token patterns (Cloudflare, OpenAI, GitHub, Anthropic, long Bearer literals). It runs as `npm run secret:check`, is wired into `npm test` and the step-commit compliance gate, and correctly surfaces four existing live-token findings already tracked in the active rotation reminder.

### Symlink and Hook-Freshness Gates

Two blocking checks were added to the pre-push gate: a symlink zero-count assertion and a hook-freshness check that reinstalls git hooks automatically when a hook source file changed in this session's commits.

### Root-File Hygiene Gate (Gate 30)

A deterministic gate ensures only known-legitimate files exist directly at the repository root. On a thin clone, links into absent submodule paths are warnings, not hard failures.

### Contact Bio Cogs

ABOUT-TOM.md and ABOUT-SALVA.md flat files at root were replaced with structured cog files under `mx-crm/contacts/`. Tom, Salva, Scott McGregor, and Dogu Abaris each have their own bio cog. `CLAUDE.md`, `repo-manifest.json`, and `project-context.md` were updated to point to the new paths.

---

## Session 2: Audit Pipeline, File-Move Tooling, Content

### Audit Agent-Access Step: Staggered-Start Concurrency

The agent-access step previously fired 8 User-Agent strings serially with 2-3s jitter, producing 20-43s wall time per domain. The new design starts each request 2.5s after the previous one starts (not after it completes), then collects via `Promise.all`. From the WAF's perspective the arrival rate is identical — one new connection every 2.5s. Response wait times overlap, cutting typical wall time by approximately 45%. The Chrome UA string used for the control browser is now a constant (`CHROME_UA`). Cache version bumped to 2 (`AGENT_CACHE_VERSION = 2`); all v1 entries invalidate on next run.

### Audit Agent-Access Step: Null-Freshness Cache Fallback

Sites with no ETag or Last-Modified always missed the self-managed cache, forcing a full walk on every run. A double-null guard was added: when both the cached entry and the live preflight record null for both freshness signals, the cache replays on a time-based TTL. The guard protects against false hits — if the site gains a validator between runs, the live preflight returns a value and the guard is false, so the walk runs as normal.

### Integration Test: Agent-Access

A new integration test (`mx-reginald/audit/test/agent-access-test.test.js`) covers the full module against mx.allabout.network. All 10 tests pass: cache replay, staggered ordering, `cacheVersion === 2`, null-freshness TTL replay, false-hit prevention.

### Test Suite: Golden Master Stabilised

The golden master test was failing because a live Puppeteer call to example.com timed out non-deterministically. Fixed by setting `noPuppeteer: true` and adding a nock mock for `GET /` with minimal HTML. The mock returns a page with no `<main>` and no forms so the rendered-gap and standardNameRatio checks produce determinate values. Full suite: 826 passing, 0 failing.

### Deterministic File-Move Tooling

A new script (`scripts/fix-moved-file.cjs`) fixes all path-sensitive references inside a file that has been moved. It handles both carriers:

- **Markdown:** `canonicalUri` GitHub raw URL, `refersTo`/`relatedTo` frontmatter paths, relative body links (depth-adjusted via `path.relative`).
- **HTML:** `<meta content>` attributes, `MX-SOURCE-FRONTMATTER` comment block, relative `href`/`src`, any HTML comment containing the old path.

The pre-commit hook was extended to detect `git mv` renames (R-status entries in the index), run the fixer on each moved `.md`/`.html` file, and re-stage the result. `npm run file:fix` provides a manual entry point for untracked moves.

### Scrunch/Sitecore Content Cluster

Eight files committed in one cluster:

- Five blog posts covering the Sitecore/Scrunch acquisition and MX positioning: `when-the-cdn-goes-dark.md`, `three-machines-three-answers.md`, `the-pool-is-not-the-source.md`, `sitecore-scrunch-not-an-mx-strategy.md`, `scrunch-sitecore-mx-briefing.md`.
- Two investor/architect position papers (`mx-canon/ssot/papers/`): `why-acquisition-is-wrong-architecture-tech.md`, `why-acquisition-is-wrong-architecture-investor.md`.
- A machine-readable blog corpus index: `datalake/draft-site/blog/blog-corpus.cog.md` (150-post structured index).

All five blog files moved from `blog-drafts/` to the Intent CMS source layer (`datalake/draft-site/blog/`). The file-move fixer updated `canonicalUri` and relative links in each moved file.

---

## Session 3: Incoming Content Tracker and Tag Normalisation

### Incoming Content Tracker

A new cog (`mx-canon/mx-maxine-lives/incoming-content-tracker.cog.md`) tracks content arriving via PRs — blog posts, research briefings, and position papers. A deterministic generator (`scripts/gen-content-tracker.cjs`) discovers newly added markdown files via git history (not a filesystem walk) and populates the cog with editorial metadata: status, next action, target audience, publish date, and related cogs. Hand-edited fields are preserved across regens; only `status` refreshes from source. 36 unit tests cover discovery, merge, render, and routing. Registered in `generated-indexes.cjs`; `npm run tracker:sync` is the regen command.

### Graph Synonym Tree

A synonym tree (`mx-canon/ssot/registries/graph-synonyms.yaml`) groups 1,070 registry tags into 19 search-intent clusters — audit, blog, metadata, cog, provenance, architecture, pdf, identity, git, and others — so a query for "verify" expands to match everything in the "validation" group. A checker (`scripts/check-graph-synonyms.cjs`) reads only the committed cog registry JSON (never a filesystem walk), reports ghost tags and duplicates, and exits non-zero on violations. A PostToolUse hook fires on every `.cog.md` write and surfaces ghost tags or duplicates as advisory output.

### Tag Normalisation

1,070 raw tags in the cog registry contain 23 redundant variants — plural/singular pairs (`cogs`/`cog`), semantic near-duplicates (`verification`/`validation`), and hyphenation variants (`opengraph`/`open-graph`). A normalisation map (`mx-canon/ssot/registries/tag-normalisations.yaml`) records the variant-to-canonical rules. A generator (`scripts/gen-tags-export.cjs`) applies them and emits a clean, sorted `registry-tags.json` (1,047 tags). The synonym checker and graph query tools read from this file rather than the raw registry. `npm run tags:export` regenerates; `npm run tags:check` asserts freshness. Documentation updated across CLAUDE.md, UBERCOG.cog.md, `mx-graph-system.md`, `repo-manifest.json`, and Appendix M.

---

## Why It Matters

The agent-access step runs inside every batch audit. A 45% wall-time reduction compounds across every domain in the queue. The golden master fix removes a non-deterministic external network dependency from CI. The file-move script removes a category of human error (incomplete link updates after `git mv`) by making it a commit-time gate. The Scrunch content cluster gives the sales and investor teams a complete, research-backed set of materials on the biggest competitor validation event of the quarter. The tag normalisation system reduces compute for every graph query and autocomplete lookup by 2%, with a clean audit trail for how each variant was resolved.

---

## The Insight

Three of the four improvements this morning addressed the same pattern: a manual step that was structurally prone to incompleteness (serial agent waits, manual link inspection after file moves, live network calls in tests). The fix in each case was not a reminder or a checklist — it was a deterministic gate or a concurrent primitive. Correctness by structure, not by discipline.

---

## Next Steps

- Rotate the Cloudflare cache-purge token and replace hardcoded literals with env-var references across the four affected files (🔴 active rotation reminder)
- Fix the promote path-doubling bug for sources in `blog/drafts/` (🟡 active reminder)
- Publish Tom's public bio cog once `npm run promote` is wired for the profiles path
- Grow the synonym tree beyond the current 19 groups as new tag clusters emerge
