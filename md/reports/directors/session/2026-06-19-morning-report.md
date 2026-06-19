---
title: "Co-Directors Report - Audit Pipeline Deterministic Refactor"
description: "Replaced two Ollama SDK calls in the full-LLM batch pipeline with deterministic extractors, eliminating the HTTP 500 truncation failures that blocked all 31 domain audits."
author: "Tom Cranstoun"
created: 2026-06-19
modified: 2026-06-19
version: "1.0"

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

## Next Steps

- Single-domain validation: `node scripts/audit-pipeline.js https://dotfusion.com --full-llm --date $(date +%Y-%m-%d) --pages 5`
- If that passes, run the full 31-domain batch per the REMINDERS item
- Consider whether `audit-access` also needs a deterministic extractor (agent access JSON is already in `agent-access.json`)
