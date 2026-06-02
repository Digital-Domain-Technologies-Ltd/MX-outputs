---
title: "Co-Directors Report — Audit Provenance Infrastructure and LLM View Extension"
description: "Audit LLM pipeline wired for provenance capture; new browser extension shows Accept: text/markdown responses"
author: "Tom Cranstoun"
created: 2026-06-02
modified: 2026-06-02
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-02-morning-report.md
---

# Co-Directors Report — Audit Provenance Infrastructure and LLM View Extension

**Date:** 2 June 2026 — Morning
**Segment:** Morning (since midnight)

---

## Summary

This morning completed two independent workstreams. First, the audit LLM pipeline was wired for full provenance capture: every LLM call now records the exact prompt bytes and input data to a hash-indexed file store, making the evidence chain inspectable end-to-end. Second, a third browser extension was built and shipped — MX: LLM View — which re-fetches the current page with `Accept: text/markdown` and shows whether the server honours the request, revealing content-negotiation support in one click.

---

## What Was Done

### 1. Audit LLM Provenance Capture

A new `capture-prompt.js` library (120 lines) was added to the audit pipeline. It provides two helpers used by every LLM-driven audit script: `capturePrompt()` writes the exact rendered system + user message to a hash-indexed file; `captureInput()` writes the upstream data that fed the prompt. Both append rows to a `hash.index.csv` ledger so a regulator walking the audit chain can retrieve the verbatim rubric and input for any given LLM step.

`llm-client.js` was extended with model-identity and token-count reporting so each captured entry carries the model identifier and input/output token counts alongside the hash. All five LLM scripts (fierce-critic, judgment, attribution, repair, provenance-gap) were updated to call the capture helpers on every inference step.

`pipeline-logger.js` was added as a shared structured-logging utility for the pipeline, replacing scattered `console.log` calls with levelled output that can be silenced in CI without losing audit events.

### 2. Audit Pipeline and Cog Improvements

`scripts/audit-pipeline.js` received 166 lines of additions covering gate timeout reporting, HTTP 499 error surfacing, and URL processor improvements (57 lines in `urlProcessor.js`) that normalise trailing-slash handling and multi-path slug derivation. The `mx-audit.cog.md` routing cog was expanded by 122 lines to document the new provenance capture behaviour, updated path conventions, and the local-LLM default regime.

### 3. MX: LLM View Browser Extension

A third Chrome/Edge extension was built alongside the existing MX Readiness Inspector (teal) and MX Comprehension Probe (amber). The new extension — indigo accent, 9 files, 607 lines — re-fetches the current page with `Accept: text/markdown, text/plain;q=0.9, */*;q=0.1` from a background service worker and displays the raw response body with HTTP status, Content-Type, and a pass/warn/fail verdict on whether the server honoured the Accept header. No cookies sent, no model called, entirely deterministic.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits | _pending_ (Step 3) |
| mx-outputs commits | 2 |
| Hub files changed | 16 |
| Hub lines added | +624 |
| Hub lines removed | -19 |
| Extension files | 9 |
| Extension lines | +607 |
| Repositories touched | 2 (hub, mx-outputs) |
| New library modules | 2 (capture-prompt.js, pipeline-logger.js) |

---

## Why It Matters

The provenance capture infrastructure is what makes audit evidence inspectable under the EU AI Act, UK ICO AI guidance, and NIST AI RMF. Before this work, the rubrics and inputs to every LLM inference step were implicit - they existed in the code but were not recorded per-run. Now every inference step leaves a tamper-evident file (SHA-256 named, hash-indexed) so a compliance reviewer can retrieve the exact prompt the model saw for any audit, not just the template it came from. This is the difference between "we used this rubric" and "here is the rubric the model received on that run".

The LLM View extension is a sales and demonstration tool as much as a developer tool. It makes the gap between machine-readable and machine-negotiable tangible in one click - useful for client conversations about why content negotiation matters for AI agent access.

---

## Decisions Made

- Prompt capture writes hashes per-call, not per-session, so individual steps are attributable even when a single audit run calls the same script multiple times.
- The LLM View extension fetches without cookies by design - it shows what an external agent sees, not what an authenticated user sees.

---

## Next Steps

- Verify the provenance capture files appear correctly in a live audit run against a test site.
- Replace placeholder solid-indigo icons in MX: LLM View with final artwork.

---

## Commit Log

| Hash | Description |
|------|-------------|
| _pending_ | Hub: audit provenance capture, pipeline improvements, LLM View extension |
| af7814eb | mx-outputs: Add MX: LLM View browser extension |
| 1f38529c | mx-outputs: Update mx.allabout.network audit provenance and JSON sidecars |
