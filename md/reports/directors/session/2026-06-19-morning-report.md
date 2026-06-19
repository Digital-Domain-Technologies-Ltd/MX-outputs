---
title: "Co-Directors Report - Audit Pipeline Determinism + Gitea Test Infrastructure"
description: "Completed audit pipeline deterministic refactor; built Gitea management tooling with a full mock-server unit test suite and a unit-testing guide cog."
author: "Tom Cranstoun"
created: 2026-06-19
modified: 2026-06-19
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-19-morning-report.md
  purpose: "Replaced two Ollama SDK calls in the full-LLM batch pipeline with deterministic extractors, eliminating the HTTP 500 truncation failures that blocked all 31 domain audits."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit Pipeline Deterministic Refactor"]
---

# Co-Directors Report - Audit Pipeline Deterministic Refactor

**Date:** 19 June 2026 - Morning
**Segment:** Morning (since midnight)

---

## Summary

The overnight work finished what the previous evening started: eliminating the Ollama HTTP 500 truncation failures that blocked all 31 prospect domain audits. Two further Phase 2 skills - `audit-scores` and `audit-discovery` - were replaced with deterministic extractors that read Phase 1 result files directly and write the expected sidecar without any LLM call. The batch pipeline is now ready to re-run once a single-domain end-to-end test confirms the remaining Ollama call (`audit-access`) does not hit the same problem.

---

## What Was Done

### 1. Deterministic Replacement of audit-scores

`audit-scores` was the largest Ollama call in Phase 2: it sent the full set of Phase 1 JSON files - scores CSVs, site profile, preflight findings, and optional probe sidecars - and asked the model to reformat them into a structured output. The model generated valid JSON but Ollama truncated it mid-object and returned HTTP 500.

A new script, `extract-audit-scores.cjs`, reads `audit_averages.json` and `preflight-findings.json` directly and writes `llm-audit-scores.json` in the same shape the downstream report skill expects. It produces: score analysis per dimension, navigational page classification (already in `perPage`), dual SEO averages, MX journey stage results, security header findings, broken links, and the full pre-flight A-M findings object. Model: `deterministic`. Token usage: zero.

### 2. Deterministic Replacement of audit-discovery

`audit-discovery` sent `wellknown_discovery.json` plus up to four cached HTML pages to Ollama, asking it to assess llms.txt, robots.txt, agent-card.json, and extract manual HTML findings. Same truncation failure.

A new script, `extract-audit-discovery.cjs`, reads `wellknown_discovery.json` and `preflight-findings.json` and produces presence/absence assessments for all discovery files, the full other-well-known-paths list, and agent card profile. `manualFindings` and `judgmentFindings` are honest empty arrays - no HTML inspection is run without an LLM, and that is stated explicitly in the sidecar.

### 3. Shared Extractor Pattern in Phase 2 Driver

The two per-skill runner functions were consolidated into a single `runDeterministicExtractor()` in `audit-llm-phase2.js`. The dispatch logic now routes `audit-scores` and `audit-discovery` to their respective extractors; only `audit-access` still calls Ollama. The batch is parked pending a single-domain validation run; the REMINDERS item carries the exact commands.

---

## Why It Matters

The 31-domain batch is the core of the current outreach push. Every domain that completes Phase 2 produces a client-ready PDF report. The Ollama truncation failures were blocking the entire pipeline; the fix is not a workaround - it is the correct architecture. The data being sent to the model was already computed deterministically by Phase 1; asking the model to reformat it was wasteful and fragile. The extractors are faster, cheaper, and provably correct because they read the same source files the report infiller reads directly.

---

## The Insight

The two-phase architecture (Phase 1 deterministic, Phase 2 LLM) was designed correctly, but the boundary was drawn in the wrong place. The Phase 2 SDK skills were asking Ollama to reformat data rather than interpret it. Genuine LLM work in this pipeline is narrow: `audit-access` (content consistency across pages) and `audit-report` (narrative synthesis). Everything else is data reshaping that belongs in a script.

---

---

## Gitea Test Infrastructure

### 4. Gitea Reset Tooling

The local Gitea instance (26 audit repositories) was manually cleared for test reset. To avoid repeating the ad-hoc approach, a deterministic management script and an action cog were built.

`scripts/bin/mx.gitea.sh` reads env vars (`MX_GITEA_TOKEN`, `MX_GITEA_URL`, `MX_GITEA_USER`, `MX_GITEA_AUDIT_LOCAL_DIR`) and supports four commands: `list`, `clear-all`, `clear-remote`, `clear-local`. It paginates the Gitea API (50 repos per page), sources `.env.local` at invocation boundaries rather than inside the script itself (so tests can inject their own URL), and hard-fails with a named error on a missing token. A subtle `set -euo pipefail` + curl bug was found and fixed: connection-refused returns curl exit code 7, which killed the script before the helpful error message could print. Fix was `|| true` after the curl call, checking the HTTP status code independently.

`scripts/cogs/gitea-reset.cog.md` is the action cog. Its embedded `@embedded:gitea-reset` block sources `.env.local` with `set -a` (to export bare `KEY=VALUE` lines) then `exec`s the script. `mx exec gitea-reset clear-all` is now the single command to reset the entire Gitea estate for a fresh test run.

### 5. Mock-Server Unit Test Suite

`tests/test-gitea-reset.js` provides 36 checks across 7 sections. The mock Gitea HTTP server runs in-process on a port-0 ephemeral port; the bash script runs as a subprocess via `spawn`. No real Gitea instance is needed. Coverage: list (with/without repos), clear-remote (normal, no-repos, delete failure with continued processing), clear-local (present/absent dir), clear-all, missing token, unreachable server, 55-repo pagination across two pages, unknown command. The test is wired into both `test:gitea-reset` (isolated run) and the main `npm test` chain.

### 6. Unit-Test Guide Cog

`scripts/cogs/how-to-write-unit-tests.cog.md` documents the testing conventions in this repository: the three file types (`.js`, `.sh`, `.test.mjs`), the `ok` helper pattern, sync vs async IIFE structure, temp-dir and in-process HTTP mocking, the `set -euo pipefail` + curl trap, the bash assert-helpers pattern, fixture placement, and the two-step `package.json` wiring. The "what NOT to do" section explicitly rules out Jest, Mocha, hardcoded ports, and skipped cleanup.

---

## Why It Matters

The Gitea tooling converts a manual, ad-hoc reset operation into a deterministic, repeatable command. The test suite proves the script behaviour without a real Gitea instance, which means CI can run it safely. The unit-test guide gives future agents and developers a single authoritative reference so new tests match the existing conventions instead of introducing new patterns.

---

---

## MX Graph Fulltext Search Fix

### 7. Multi-Word AND Tokenisation in `mx_graph_query`

A practical blocker surfaced during the session: searching for `fulltext:audit prd` returned zero results, even though `repo-adoption-prd.cog.md` carries both "audit" and "prd" in its tags and description. The bug was in the fulltext implementation in `scripts/mx/mx-graph-mcp.js`: it treated the entire string after `fulltext:` as a single literal substring. No node contains the exact text "audit prd" (with space), so every multi-word search returned nothing.

The fix splits on whitespace and requires all tokens to match (AND semantics). `fulltext:audit prd` now finds every node where both "audit" and "prd" appear anywhere across the six searched fields. Single-word queries are unaffected.

A second issue in the builder CLI (`scripts/mx/mx-graph-builder.js`) was fixed at the same time: the `queryGraph()` function had no fulltext support at all, used exact-match (`===`) instead of substring matching, and split on `:` with `str.split(':')` which breaks on values containing colons. Both were corrected to match the MCP server's behaviour.

A new test in `tests/test-mx-graph.sh` asserts that `fulltext:audit prd` finds `repo-adoption-prd`. All 98 graph tests pass.

---

## Next Steps

- Single-domain validation: `node scripts/audit-pipeline.js https://dotfusion.com --full-llm --date $(date +%Y-%m-%d) --pages 5`
- If that passes, run the full 31-domain batch per the REMINDERS item
- Consider whether `audit-access` also needs a deterministic extractor (agent access JSON is already in `agent-access.json`)
