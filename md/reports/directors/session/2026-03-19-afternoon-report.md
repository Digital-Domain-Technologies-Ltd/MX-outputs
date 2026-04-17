---

title: "Co-Directors Report — Unified Readiness Model and Root Cleanup"
created: 2026-03-19
version: "2.0"
author: Tom Cranstoun and Maxine

mx:
  x-mx-segment: afternoon
  audience: stakeholders
  confidential: true
  status: active
  contentType: report
  tags: [session-report, readiness-model, manuscripts, templates, cleanup]
---


# Co-Directors Report — Unified Readiness Model and Root Cleanup

## Summary

Major consolidation session. Merged two separate models (REGINALD Readiness Levels 1-5 and the 5-Stage AI Agent Journey) into a single unified 0-5 readiness model across the entire ecosystem — HTML pages, audit templates, and book manuscripts. Added Level 0 (Not Ready) as a starting point. Reframed all "failure mode" language to "improvement steps" per Tom's direction. Cleaned up misplaced files from the hub root.

## By the Numbers

- **12 commits** this afternoon
- **14 manuscript files** updated (shared chapter-00, Handbook chapters 1, 6, 7, 8, 9, 10, 11, preface, reading-guide, The-End, Protocols chapter-11, Appendix C, Glossary)
- **4 HTML pages** updated (readiness-levels.html, audit.html, ai-readiness.html, CSS)
- **4 templates** updated or created (Web Audit Suite, MX Appropriateness, DOM Analysis, new MX Readiness Score Card)
- **10 files** relocated from hub root to correct submodule locations
- **3 submodules** touched (mx-outputs, mx-crm, datalake)

## What Was Built

### Unified MX Readiness Model (0-5)

Single hybrid model replacing two separate frameworks:

| Level | Name | Publisher Capability | Agent Outcome |
|-------|------|---------------------|---------------|
| 0 | Not Ready | Auto-generated boilerplate, no deliberate MX | Agents guess, hallucinate |
| 1 | Basic | Deliberate metadata, publisher identified | Agents can discover |
| 2 | Structured | Full MX fields, governance | Agents can cite and attribute |
| 3 | Signed | Cryptographic verification | Agents can compare and recommend |
| 4 | Registered | REGINALD registry, SLA | Agents can transact |
| 5 | Audited | Third-party verified | Agents can guarantee accuracy |

### New Template: MX Readiness Score Card

Standalone template answering three questions: Where are you? Where should you be? What gets you there? Attachable to any audit report.

### Language Reframing

All readiness model content now uses improvement-focused language:

- "failure" → "without Level X" or "needs improvement"
- "failure modes" → "improvement steps"
- "breaks the chain" → "skip a level and everything above is unreachable"
- "Catastrophic Failure Principle" → "The Cumulative Chain"

## What Changed

### HTML Source of Truth

- **readiness-levels.html** — Added Level 0 card, Agent Outcome column to all tables, updated progression flow
- **audit.html** — Added Level 0 row, Agent Outcome column, updated intro text
- **ai-readiness.html** — All 5 stage headings → level headings, removed fail language throughout
- **reginald.css** — Level 0 muted/grey styling

### Templates

- **IMPROVED-web-audit-suite-template-v2.md** — 5-stage table → 6-level table
- **IMPROVED-mx-appropriateness-template.md** — Largest change — full stage-to-level rename, Level 0 section added
- **IMPROVED-dom-analysis-template.md** — Added readiness model reference in conclusion
- **mx-readiness-scorecard.md** — New standalone template

### Manuscripts (14 files)

Updated terminology from "stages" and "journey" to "levels" and "readiness model" across both books (Handbook and Protocols), shared chapters, and appendices. Glossary entry renamed from "Five-Stage Agent Journey" to "MX Readiness Model (0-5)".

### Root Cleanup

Moved 10 misplaced files from hub root:

- 3 Farnell audit deliverables → `mx-crm/outreach/2026-03-19/`
- 2 audit scripts → `scripts/bin/`
- 5 project summaries → `mx-outputs/md/reports/completions/2026-03-19/`

## Decisions Made

- **Unified model approved** — single 0-5 model replaces both REGINALD levels and AI Agent Journey
- **Level 0 = "Not Ready"** — partial/insufficient, no deliberate MX intent
- **Improvement language** — no "fail" or "failure" in readiness model context; use improvement steps instead
- **Timeless manuscript rule** — no changelog language in books; state what IS

## Commit Log

| Hash | Description |
|------|-------------|
| `30c91c3e` | Remove files moved to submodules in previous commit |
| `1551822c` | Move misplaced files from root to correct locations |
| `d0171759` | Update submodule pointers: unified 0-5 readiness model |
| `e9a38259` | Fix markdown lint — blank lines before lists |
| `1b3c2a92` | Mark audit templates v2.0 as completed in REMINDERS |
| `4dce69bc` | Update mx-audit and mx-crm: v2.0 templates and integration code |
| `c8eaf322` | Update CLAUDE.md, audit-site skill, add v2.0 project docs and Farnell audit |
| `2238e492` | Remove changelog from REMINDERS — action items only |
| `5fbfbef2` | Update mx-outputs: standalone audit page, primary homepage CTA |
| `0cdce8d9` | Update mx-outputs: MX Readiness Audit on get-started page |

Submodule commits: mx-outputs (4), mx-crm (3), datalake (2).

## Next Steps

- Update the SVG diagram (`chapter-00-5-stage-mx-journey.svg`) to reflect the 0-5 model
- Remaining old terminology in appendix-d, appendix-j (context-specific — lower priority)
- Update v1 templates and INDEX/README docs if still referenced
