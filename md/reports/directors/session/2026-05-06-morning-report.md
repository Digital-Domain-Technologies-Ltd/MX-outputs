---
title: "Co-Directors Report — Corrected Core Thesis Sweep Complete"
description: "Morning session completing the MX positioning sweep: protocols manuscript, gathering drafts, audit templates, and site HTML all now reflect machines-not-AI-agents framing"
author: "Tom Cranstoun"
created: 2026-05-06
modified: 2026-05-06
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-06-morning-report.md
---

# Co-Directors Report — Corrected Core Thesis Sweep Complete

**Date:** 6 May 2026 — Morning
**Segment:** Morning (since midnight)

---

## Summary

This session completed the Corrected Core Thesis positioning sweep across all MX repositories. Every public-facing surface — the protocols manuscript, the gathering drafts, the audit report templates, the site HTML, and the free-book chapters — now consistently presents MX as the machine layer for meaning, covering the full universe of machines rather than AI agents specifically. The audit templates gained a new estate scope note making explicit that MX runs deeper than the web audit, covering every document type for every machine class.

---

## What Was Done

### 1. Protocols Manuscript — Corrected Core Thesis Applied

Five files updated in the protocols manuscript (`datalake/manuscripts/mx-books/mx-protocols/`):

- `README.md`: title, description, and Convergence Principle all updated from "Designing the Web for AI Agents and Everyone Else" to "Making Documents Work for Every Machine and Everyone Else"
- `chapter-00-protocols.md`: "AI agents cannot read any of it" → "Machines cannot read any of it" (matching the free-book fix)
- `preface/preface.md`: early review title updated
- `protocols-plan.md`: Convergence Principle definition updated
- `chapter-11/chapter-11-designing-for-both.md`: client question "Is my site ready for AI agents?" → "Is my site ready for machines?"

Context-specific "AI agent" references throughout chapters 12, 17, 20, and 21 were left intentionally — those discuss specific technical behaviours (named crawlers, security models, the January 2026 commerce platform launches) where the narrow term is accurate.

### 2. Audit Templates — Terminology Sweep and Estate Scope Note

Both audit templates (`mx-audit/templates/`) updated:

**Terminology changes across both templates:**
- Report titles: "AI Agent Optimisation" / "Shopping Agent Readiness" → "Machine Readiness" / "Machine Commerce Readiness"
- Scorecard dimension: "AI Suitability" → "Machine Suitability"
- SDQ score interpretations, MX Journey verdicts, pipeline survivability intro, error page conditionals, sitemap conditionals, cross-page consistency conditionals, hostile-UX table rows — all updated from "AI agents" to "machines"

**Estate scope note added to About This Report in both templates:**
> This audit checks the web estate. MX runs deeper. A machine-ready estate covers every document type an organisation publishes — PDFs, data feeds, API responses, structured documents, presentations — and every machine class that consumes them: search crawlers, AI assistants, autonomous vehicles, industrial systems, IoT devices, and future classes not yet defined. Get the web estate right, and you have the foundation. Get all of it right, and you have a machine-ready estate.

**Machine-Ready Estate row added to What's Next tables** in both templates, giving clients a visible roadmap from web audit to full MX estate.

### 3. Gathering Drafts — Three Files Updated

`mx-shared-gathering` updated:
- `draft-core-metadata.md`: description field example and field prose updated from "AI agents" to "machines of every class"
- `draft-carrier-formats.md`: HTML meta description example updated
- `draft-mx-not-geo.md`: new draft added to the gathering (previously untracked)

### 4. Site HTML and Outputs — Previously Committed

The `allaboutv2` and `mx-outputs` site HTML sweep (60+ HTML files across mx-site, allaboutv2, reginald) was completed and committed this session. New presentations also committed: BMV pitch deck, "The Web Has a New Audience" presentation, and updated MX-what-why-when.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Submodule commits | 4 |
| Repositories touched | 5 (allaboutv2, mx-audit, mx-outputs, mx-shared-gathering, hub) |
| HTML files updated (site sweep) | 60+ |
| Manuscript files updated | 5 |
| Audit template files updated | 2 |
| Gathering draft files updated | 3 (2 modified, 1 new) |
| New presentations committed | 4 |
| Hub commit | _pending_ |

---

## Why It Matters

The Corrected Core Thesis is now embedded across every document surface that represents MX externally. The old framing — "MX is for AI agents" — would have aged poorly and understated the market. The corrected framing — "MX is the machine layer for meaning" — positions the product for the full machine stack and aligns with the BMV portfolio narrative (Oxide, FluidStack, Callosum, MeetKai, MX OS: one machine for each layer). Every client report, every gathering draft, every book title page, every site meta description now carries the same claim. The consistency is investable.

The audit template estate scope note is particularly significant: it makes every audit report a sales document for the deeper MX engagement, without being a sales pitch. The client reads the scope note, understands the web audit is the starting point, and sees "Machine-Ready Estate" as the destination row in the roadmap table.

---

## Next Steps

- Hub main-repo commit (Step 3 — in progress)
- Monitor BMV pitch timing and update pitch-bare-metal-ventures-2026.md once meeting is confirmed
- Continue Stream submission process (paused on Tom — confirm Stream platform before 8 May)

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 35cdb79 | mx-shared-gathering | Corrected Core Thesis sweep: machines, not AI agents |
| f401e69 | mx-audit | Corrected Core Thesis sweep and estate scope note |
| 1d76117a | allaboutv2 | Corrected Core Thesis sweep: machines, not AI agents |
| 659c52a | mx-outputs | Corrected Core Thesis sweep across site HTML; add new presentations |
| _pending_ | hub | Hub manuscript and pointer updates |
