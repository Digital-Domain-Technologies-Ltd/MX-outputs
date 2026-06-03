---
title: "Co-Directors Report -- Extension Overhaul: Ollama Fallback, Spinner UX, Probe Cache"
description: "Ollama fallback added to MX Comprehension Probe; spinner replaces status text in both extensions; provenance-gap LLM cache lands"
author: "Tom Cranstoun"
created: 2026-06-03
modified: 2026-06-03
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-03-evening-report.md
---

# Co-Directors Report -- Extension Overhaul: Ollama Fallback, Spinner UX, Probe Cache

**Date:** 3 June 2026 -- Evening
**Segment:** Evening (since 5pm)

---

## Summary

Four extension fixes landed this evening, turning the two browser extensions into something ready to demo in Edge. The MX Comprehension Probe now has Ollama as a fallback model source (previously it only worked in Chrome with Gemini Nano), generates question chips on popup open, and shows a spinner instead of verbose status text. The MX Readiness Inspector got the same spinner treatment. A provenance-gap LLM cache also landed in the audit pipeline, cutting repeated audit time on unchanged pages.

---

## What Was Done

### 1. MX Comprehension Probe -- Ollama Fallback

`mx-outputs/extensions/mx-comprehension/lib/ai-client.js` had no fallback when the browser on-device model was unavailable (Edge on macOS, Chrome without Gemini Nano). Added `tryOllamaModel()` probing `127.0.0.1:11434`: prefers `gpt-oss:20b`, falls back to first available model. Timeout raised from 30s to 120s after diagnosing that the 30s timeout was long enough for chips (3 short questions) but not for a full page-comprehension answer from a 12,000-char payload. Added `options: { num_ctx: 8192 }` to give Ollama enough context for the full payload.

Fixed `OLLAMA_ORIGINS=*` setup: LaunchAgent is loaded and the env is live; Ollama just needs a restart to inherit it.

### 2. MX Comprehension Probe -- Suggested Questions on Popup Open

`renderPresets()` was only called inside `ask()` (post-submit), so question chips never appeared until after the user had already submitted a question. Moved page-read and `generateSuggestedQuestions()` into `main()` so chips appear on popup open. This was the root cause of the empty chip area seen in the screenshot.

### 3. Extension UX -- Spinner Replaces Status Text

Both extensions had verbose status strings ("Asking the on-device model...", "Generating question suggestions...", "DOM findings ready...") and placeholder text. Replaced with:

- **mx-comprehension**: CSS spinner (amber, 20px, `@keyframes mx-spin`) in the answer area; shown during `ask()` model call, hidden on completion. Textarea placeholder removed. "answered by: ..." source label removed on completion.
- **mx-readiness**: CSS spinner (teal, 16px) in the summary text area; shown while `generateSummary()` runs, hidden on completion. All intermediate status strings removed. Summary-source attribution removed. Footer updated to mention Ollama alongside on-device models.

### 4. Provenance-Gap LLM Cache

`mx-reginald/audit/bin/provenance-gap-llm.js` now caches per-page LLM findings. Cache key: HTML content hash + rubric (system prompt) hash + model. A 30-day TTL backstop prevents stale entries; HTML hash is the real freshness signal. On a repeat audit of an unchanged page, the Ollama call is skipped entirely (~30-40s saved per page). Cache lives at `<cacheDir>/llm/provenance-gap-cache.json` (gitignored).

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Extension files changed (comprehension + readiness) | 6 |
| Ollama timeout raised (30s to 120s) | 1 change |
| Status text strings removed across both extensions | 8+ |
| Lines added to provenance-gap-llm.js | ~90 |
| Contentful audit PDF delivered | 1 |

---

## Why It Matters

The Comprehension Probe is the public-facing demo of what MX metadata does for a machine reader. It was broken in Edge (no Ollama fallback, no chips on open). Both are fixed. The spinner UX makes the extension feel professional rather than developmental.

The provenance-gap cache is cost-reduction for repeat audits: a 10-page audit that re-runs the same site re-uses all 10 findings if pages are unchanged, avoiding 5-8 minutes of Ollama inference per run.

---

## Decisions Made

- Ollama timeout: 120s (not 60s) -- gpt-oss:20b needs up to 90s on a 12,000-char page payload.
- Spinner placement: answer area for comprehension probe, summary text area for readiness inspector.
- Source attribution ("answered by: Ollama...") removed on completion -- cleaner UX, no meaningful information lost for typical users.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 79d63a39 | (mx-outputs) Sync Contentful audit: report final pass + PDF + LLM judgment results |
| babfce53 | (mx-outputs) Extensions: remove placeholder/status text, add spinner during model inference |
| 0cbdca19 | (mx-outputs) Fix MX Comprehension Probe: increase Ollama timeout to 120s, add num_ctx |
| 678c5735 | (mx-outputs) Add Ollama fallback to MX Comprehension Probe ai-client.js |
| a83bb65f | (hub) Bump mx-outputs: extension spinner + status text cleanup |
| 5a18e57b | (hub) Bump mx-outputs: fix Ollama timeout + num_ctx in MX Comprehension Probe |
| abe1671d | (hub) slowest-page-probe: HEAD-based cache; skip re-probe when ETag/Last-Modified unchanged |
| 0491c138 | (hub) Fix golden and markerReachability: quoted-string capture prevents [TOKEN] truncation |
| 85a2a587 | (hub) Fix markerReachability.js: use quoted-string capture to avoid [TOKEN] truncation |
| eacd9370 | (hub) Docs: remove COG-ONLY exclusion from audit-site skill; add platform/framework tokens |
| 71baf38d | (hub) Bump mx-outputs: add Ollama fallback to MX Comprehension Probe |
| 7cac3f61 | (hub) Bump mx-outputs: Contentful audit final pass; routing-registry timestamp |
