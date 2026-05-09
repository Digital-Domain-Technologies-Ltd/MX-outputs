---
title: "Co-Directors Report — Audit Quality Gate Overhaul"
description: "Fierce-critic LLM pass upgraded with AI artifact detection, final consolidated repair wired into pipeline, dotfusion.com audit delivered."
author: "Tom Cranstoun"
created: 2026-05-09
modified: 2026-05-09
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-09-morning-report.md
---

# Co-Directors Report — Audit Quality Gate Overhaul

**Date:** 9 May 2026 — Morning
**Segment:** Morning (since midnight)

---

## Summary

This morning's session audited dotfusion.com (5 pages, full pipeline), then used the findings to drive a targeted upgrade of the audit quality gates. The fierce-critic LLM pass now explicitly detects AI generation artifacts leaking into client reports — the most critical gap exposed by the dotfusion run — and a new consolidated final repair script runs after the self-repair loop to fix any remaining advisory findings before PDF generation. All four LLM-calling scripts in the audit pipeline were converted to streaming to prevent connection timeout failures on large reports.

---

## What Was Done

### 1. dotfusion.com Audit

Ran the full audit pipeline against dotfusion.com with a 5-page crawl. The pipeline completed all six gates and produced a client-facing PDF. Post-run analysis of the gate findings drove the improvements below.

Key findings from the run:
- Fierce-critic LLM pass flagged a leaked AI generation artifact in the Content Consistency section — internal dialogue asking for missing data had slipped into the client report
- Four hollow-recommendation findings were raised; review confirmed some were false positives caused by the specificity test looking only at the preceding sentence, not the full priority block
- LLM-judgment flagged a sample-scope overreach (JS duplicate cited on 9 pages; only 5 audited)

### 2. Fierce-Critic LLM Pass Upgrade

Three targeted changes to `audit-fierce-critic.js`:

- **Area 5 added** — new check category for leaked AI generation artifacts: AI-to-operator dialogue (requests for data, empty-facts complaints), visible system-prompt fragments, unfilled placeholder tokens, self-referential generation notes. Flags under `fabricated-specificity`.
- **max_tokens raised** 2048 → 4096 — gives the model enough headroom to articulate all findings without compression
- **SPECIFICITY TEST widened** — hollow-recommendation check now searches the entire priority block (from the `### Priority N:` heading to end of prose) for a data anchor, not just the immediately preceding sentence. Eliminates false positives where the score, header name, or count appeared earlier in the same block.

### 3. Final Consolidated Repair Script

New script: `mx-audit/scripts/repair-report-final.js`

- Runs after the per-round gate loop (up to 3 iterations) and before Gate 5 (PDF)
- Auto-discovers both `*-fierce-critic.json` and `*-llm-judgment.json` sidecars
- Merges and deduplicates findings from both gates
- Runs one authoritative repair at `max_tokens: 32000` with per-category repair instructions (leaked artifacts are removed, not replaced; hollow recommendations are tightened with in-block data)
- Exits 0 immediately with no API call when sidecars are clean

Wired into `scripts/audit-pipeline.js` between the gate loop and Gate 4.5, so every report that reaches PDF has had the final repair applied.

### 4. Streaming Conversion

All four LLM-calling scripts converted from `messages.create` to `messages.stream` + `stream.finalMessage()`:

- `audit-fierce-critic.js`
- `audit-llm-judgment.js`
- `repair-report.js`
- `repair-report-final.js`

Prevents the Anthropic SDK 10-minute connection-timeout failure (`"Streaming is required for operations that may take longer than 10 minutes"`) that fires when large report text is sent as user content.

### 5. Documentation

Updated six docs to reflect the above: CHANGELOG, LEARNINGS (two new rules), `mx-audit/README.md`, `mx-audit-architecture.cog.md`, `manual-web-audit-suite.cog.md`, `audit-gotchas.md`.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Pages audited (dotfusion.com) | 5 |
| Gate findings resolved by final repair | 7 (5 fierce-critic + 2 llm-judgment) |
| Scripts modified | 4 (fierce-critic, llm-judgment, repair-report, pipeline) |
| New scripts | 1 (repair-report-final.js) |
| Docs updated | 6 |
| Submodule commits | 3 (mx-audit, mx-crm, mx-outputs) |

---

## Decisions Made

- **Final repair runs unconditionally** — not just when the cap is reached. When both sidecars are clean, the script exits 0 in milliseconds. Running it always means the PDF always reflects a repair pass, regardless of how the loop exited.
- **Leaked AI artifacts flag as `fabricated-specificity`** — no new category added to the tool schema. Existing category is semantically close enough and avoids breaking sidecar consumers.
- **pptx/presentations/mx-investor-deck.pptx not committed** — file shrank from 126 KB to 71 KB with no explanation; likely corrupted or overwritten by a system process outside this session. Left unstaged for manual inspection.

---

## Next Steps

- [ ] Inspect `mx-outputs/pptx/presentations/mx-investor-deck.pptx` — file shrank unexpectedly; confirm whether it needs restoring from a previous commit
- [ ] Re-run dotfusion.com gates only (`mx exec mx-audit --gates`) to verify the improved fierce-critic prompt reduces the false-positive hollow-recommendation count

---

## Commit Log

| Repo | SHA | Message |
|------|-----|---------|
| mx-audit | `8c3f78d` | feat: fierce-critic Area 5 + final repair pass + streaming for all LLM calls |
| mx-crm | `8e54d10` | audit: dotfusion.com audit 2026-05-08 — final repaired report and PDF |
| mx-outputs | `efda0d3` | audit: dotfusion.com 2026-05-08 — PDF and sidecars from final repair |
| MX-hub | pending Step 3 | docs + pipeline wire-in + CHANGELOG/LEARNINGS |
