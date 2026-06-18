---
title: "Co-Directors Report - Batch Audit Launch and Pipeline Upgrade"
description: "Added full-LLM mode to the batch audit orchestrator and launched all 31 known prospect domains for overnight auditing."
author: "Tom Cranstoun"
created: 2026-06-18
modified: 2026-06-18
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-18-afternoon-report.md
  purpose: "Added full-LLM mode to the batch audit orchestrator and launched all 31 known prospect domains for overnight auditing."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Batch Audit Launch and Pipeline Upgrade"]
---

# Co-Directors Report - Batch Audit Launch and Pipeline Upgrade

**Date:** 18 June 2026 - Afternoon
**Segment:** Afternoon (since noon)

---

## Summary

The afternoon resolved a gap in the audit pipeline: the batch orchestrator previously ran a lighter collect-plus-report flow, without the full multi-pass LLM analysis that single-domain audits receive. A `--full-llm` flag was added so any batch run can now request the same depth. With that in place, all 31 known prospect domains were queued for a full overnight audit - the largest coordinated sweep the pipeline has run to date.

---

## What Was Done

### 1. Batch Pipeline Upgrade

The audit batch orchestrator (`audit-batch.js`) gained a `--full-llm` flag. When set, each domain in a batch receives the complete pipeline: data collection, four specialised LLM analysis passes (scores, discovery, agent access, and report synthesis), quality gates, and PDF generation. Previously, batch runs used a two-step collect-and-report flow that skipped the deeper analysis passes. The upgrade also updates the batch summary to correctly reflect the new result shape. All LLM calls route through the local Ollama instance - no prospect data leaves the machine.

### 2. All 31 Prospect Domains Queued

With the pipeline upgraded, a full-LLM batch audit was launched against every domain in `audit-batch-all-domains.yaml` - 31 prospects including Dotfusion, dkd, TYPO3, Neom Wellbeing, Leica Microsystems, Marriott, and the full VC/deep-tech portfolio. The run is in progress overnight. On completion each domain will have a PDF report and a full evidence sidecar, ready for outreach follow-up or client presentation.

### 3. Cog and Documentation Updated

The `mx-audit` cog, the operator README, and the quick-start guide were updated to document the new `--full-llm` flag, and a `relatedTo` field was added to the cog (it had none). CHANGELOG reflects the change.

---

## Why It Matters

The 31-domain sweep is the most systematic use of the audit pipeline to date. Each completed report is a ready-made conversation opener with a prospect - specific, evidence-backed, and PDF-rendered. The scale of the sweep means the outreach team will have material across the full prospect list by morning rather than domain by domain over weeks.

---

## Next Steps

- Review batch summary and any per-domain errors once the overnight run completes
- Prioritise high-scoring domains for outreach follow-up
- Consider scheduling regular overnight sweeps via the cron/schedule mechanism
