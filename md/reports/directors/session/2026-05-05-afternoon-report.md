---
title: "Co-Directors Report — Cog enforcement, audit pipeline, PDF engine, visa letter, free-book refresh"
description: "Hardened cog enforcement, shipped end-to-end audit pipeline, defaulted PDF engine to Chrome for EAA compliance, generated visa reference letter for Yunus Doğu, and refreshed the free-book introduction with current site statistics."
author: "Tom Cranstoun"
created: 2026-05-05
modified: 2026-05-05
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-05-afternoon-report.md
---

# Co-Directors Report — Cog enforcement, audit pipeline, PDF engine, visa letter

**Date:** 5 May 2026 — Afternoon/Evening
**Segment:** afternoon (updated with evening work, further updated with late-evening free-book work)

---

## Summary

The afternoon closed three gaps that all bit a real audit run earlier in the day: the cog enforcement hook silently dropped its directive on long cog bodies, the mx-audit cog had no executable script behind its declared runbook, and the audit PDF rendered with wide margins and clipped table text. All three are now fixed end-to-end. The evening added EAA-compliant PDF output by default and produced the Yunus Doğu UK Global Talent visa reference letter as a signed-ready PDF.

---

## What Was Done

### 1. Cog enforcement hook — made trustworthy at any cog size

The `run-cog-enforcer.sh` UserPromptSubmit hook used to inject the entire cog body into `additionalContext` whenever it detected a cog-run intent. For mx-audit (51 KB) the harness silently dropped the payload because UserPromptSubmit has no `<persisted-output>` fallback, so the enforcement directive never reached the model — Claude proceeded to invoke the same-named skill instead of the cog. The hook now emits a short pointer ordering Claude to Read the cog file before any other tool call. A second hardening pass added stripping of `<task-notification>`, `<system-reminder>`, `<ide_opened_file>`, `<ide_selection>`, `<ide_diagnostics>`, `<persisted-output>`, and `<command-name>` blocks before scanning, so a background-task completion message whose summary text echoes "Run the cog…" no longer falsely fuzzy-resolves to a different cog.

### 2. mx-audit cog — declarative runbook now backed by an executable script

The cog declared `runbook: "mx exec mx-audit"` in YAML but carried no `@embedded:` block, so `mx exec mx-audit` exited "No embedded script found." Added a fenced `bash @embedded:mx-audit-script` block that wraps `scripts/audit-pipeline.js` and runs all three scripted phases end-to-end in one invocation: Phase 1 recon + crawl + access, Phase 2 deterministic report generation, Phase 3 the six gates plus PDF. The wrapper does not stop half-way; on any phase failure it reports which phase died, where partial outputs survive, and the exact resume command. The "missing ANTHROPIC_API_KEY" case in Phase 2 gets a one-screen actionable message pointing at either `export ANTHROPIC_API_KEY=...` or `--phase1-only` to drive Phase 2 in Claude Code.

### 3. Authoring guide — `@embedded:` scripts now in the canon

The hole that produced gap (2) was traced back to `how-to-write-a-cog.cog.md`, which described the YAML `x-mx-execute:` declaration but never mentioned that an action cog also needs a fenced `@embedded:` block to be runnable. Added Step 9b explaining the marker-extraction contract, the `mx exec <cogId> --help` verification command, and the "x-mx-execute without @embedded leads to silent No embedded script found" trap as a Common Mistake. Step 8 typed-blocks table grew an `embedded-script` row.

### 4. Audit-PDF typography — wide margins and clipped tables fixed

A real PDF surfaced two complaints: 1-inch margins wasted page width, and the rightmost column in the Resilience Check table truncated long words mid-phrase ("ratio:" rendered as "ra…"). Three fixes in `mx-audit/scripts/bin/mx.pdf.sh` and `mx-audit/scripts/filters/shared-header.tex`: margins reduced to 12 mm sides (15 mm/18 mm vertical) reclaiming about 27 mm of textwidth on A4; longtable column-width minimum floor lifted from 5% to 7% so short headers like "Status" and "Pages" stop starving the data column; tabcolsep tightened from 5pt to 3pt; and inside `longtable`/`tabular`, `emergencystretch=12em` plus `tolerance=9999` plus low hyphenation penalties so narrow `p{}` columns split long words gracefully rather than clip them. Verified by regenerating the 2026-05-02 mx.allabout.network PDF — every table cell now renders complete sentences.

### 5. PDF engine defaulted to Chrome — EAA compliance for all future PDFs

`mx.pdf.sh` previously defaulted to xelatex, which produces untagged PDFs (no `/StructTreeRoot`). This fails EAA Level 1. The default is now `chrome` (`MX_PDF_ENGINE:-chrome`), which uses headless Chrome's `--export-tagged-pdf` flag to produce a PDF with a structure tree built from the HTML accessibility tree, passing EAA Level 1 (ISO 14289-1 Tagged) and Level 2 (pdfuaid:Part=1 XMP) without any document-author intervention. xelatex remains available via `MX_PDF_ENGINE=xelatex` for typeset manuscripts where accessibility metadata is acceptable to defer.

### 6. `x-mx-generateTableOfContents` — new MX extension field

Letters, briefs, and formal correspondence do not want a table of contents. Added `x-mx-generateTableOfContents` (boolean, default true when absent) to the CogNovaMX extension field dictionary (`cognovamx-fields.yaml` v6.6→v6.7). When set to `false` inside a document's `mx:` block, `mx.pdf.sh` suppresses the pandoc `--toc` flag in both Chrome and xelatex paths. The `extract_metadata` regex was also fixed to handle indented fields (inside a `mx:` block) by changing `^${field}:` to `^\s*${field}:`.

### 7. Visa reference letter for Yunus Doğu — signed-ready PDF

Generated a 4-page EAA-compliant PDF visa reference letter for Yunus Doğu's UK Global Talent visa application (Tech Nation digital technology route), written by Tom as Director of The Gathering Administration Ltd and founder of CogNovaMX. Layout work during the session: letterhead logo moved from LaTeX `\hfill` commands (which Chrome ignores) to an HTML `<div class="letterhead-logo">` with right-alignment CSS; address and contact blocks given pandoc hard line breaks (`\` trailing) so each line renders as a distinct `<br>` rather than concatenating; post-signature contact block trimmed to name and titles only (no repeated address); author credentials Contact line trimmed (registered office removed); date set to 5 May 2026. PDF output: `mx-outputs/pdf/dogu-abaris-visa-reference-letter.pdf` (219 KB, 4pp, Chrome-tagged).

### 9. Free-book introduction refreshed from live site content

Read all 108 HTML pages in mx-outputs/mx-site to identify statistics and framings present on the live site but absent from the free-book PDF. Introduced four targeted additions to `chapter-00-free.md` (v2.2 → v2.3):

- **40% agent-mediated purchases** (Feb 2026, growing 5–10%/month) — sourced from `why-mx-matters.html`, inserted after the platform-launches paragraph.
- **Support-cost multiplier** — agents that misread pages confidently relay wrong information to users, generating "your AI said..." support tickets. Added as a standalone paragraph in the "Why this matters to you" section.
- **E-commerce Site A / Site B scenario** — condensed from the shopping-agent test on the site: one site hides prices behind buttons, the other uses Schema.org `Offer` markup; the structured site gets the sale, the other is never considered.
- **Measurable ROI outcomes** — 3–5x agent recommendations, 25–40% ticket reduction, 20–35% shorter B2B sales cycles — inserted into "What MX-ready looks like."

All additions were humanized (removed AI-isms: weak existential openers, negative parallelisms, bureaucratic phrasing, rule-of-three lists). `soul.md` description updated to reflect the expanded case count. PDFs rebuilt in all three formats (A4, A5, Letter) via the Chrome tagged-PDF engine: `/StructTreeRoot` and `pdfuaid:Part=1` confirmed present.

### 8. Three real bugs found and fixed along the way

While testing the wrapper end-to-end three previously-silent bugs surfaced and were fixed: `mx-audit/bin/infill-report.js` block (R) referenced an undefined `reportPath` (corrected to in-scope `outPath`); `mx-audit/templates/web-audit-suite-template.contract.json` was missing five placeholders (`OTHER_WELLKNOWN_TABLE` plus the four `LLM_ATTRIBUTION_*`) which aborted the deterministic infill with a contract error; and `mx.pdf.sh`'s `pandoc --resource-path` did not include `mx-outputs/pdf/assets/` or `mx-audit/assets/`, so audit reports referencing `assets/qr/appendix-r.png` died at the xelatex stage with a missing-image error that the script's `|| true` swallowed, leaving a partial corrupt PDF that then failed the EAA gate downstream. Resource-path now includes both asset roots and `\graphicspath` in the LaTeX header mirrors the same set.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 7 (1 hub + submodules) |
| Repositories touched | 4 (hub + mx-audit + mx-crm + mx-outputs) |
| Hub files modified | 29+ (cog updates + mx-canon field dictionary + free-book edits) |
| Bugs fixed | 5 (hook drop, missing embedded script, infill `reportPath`, contract gap, asset-path silent failure) |
| Audit pipeline phases now scripted end-to-end | 3 of 3 (was 1 — Phase 1 only) |
| New cog wrapper flags | 8 (`--phase1-only`, `--no-gates`, `--warn-fierce`, `--warn-llm`, `--strict-fierce`, `--gates`, `--report`, `-h`) |
| PDF margin reduction | 25.4 mm → 12 mm per side (≈ 27 mm reclaimed textwidth on A4) |
| PDF engine default | xelatex → Chrome (EAA Level 1 + Level 2 for all future PDFs) |
| New MX extension fields | 1 (`x-mx-generateTableOfContents`) — cognovamx-fields.yaml v6.7 |
| Visa letter PDF | 219 KB, 4pp, EAA-tagged, signed-ready |

---

## Why It Matters

Every external audit we sell starts with a PDF the recipient sees in the first 30 seconds. Yesterday the workflow needed three separate commands run in a specific order, with the operator reading the printed instructions between each, and the resulting PDF clipped table text mid-phrase. After today it is one command (`mx exec mx-audit <url>`) producing a PDF that renders cleanly. This is the difference between a tool the founders can use and a tool a sales engineer can run unattended. The cog-enforcement hardening has the same shape: the cog system only earns its keep if the enforcer reliably routes execution to the cog. A silent drop on long cogs was the second-most-common cause of "the cog isn't running" complaints over the last week.

---

## The Insight

The `x-mx-execute:` YAML block declares what an action cog does; the `@embedded:` fenced bash block is what actually runs. Today's session showed those are two halves of the same contract and the canonical authoring guide treated only one half as load-bearing. Adding Step 9b to `how-to-write-a-cog.cog.md` closes that loophole for every future action cog — and the verification step (`mx exec <cogId> --help` must return useful help text) makes the gap detectable mechanically.

---

## Decisions Made

- The cog wrapper runs all three scripted phases by default; `--phase1-only` is the explicit opt-in for the LLM-driven Phase 2 path. Reasoning: silent half-way stops were the original complaint, and the wrapper now reports gaps rather than allowing them.
- Stylistic gates (fierce critic, LLM-judgment) keep their auto-warn-after-3-rounds behaviour from yesterday's mx-audit v1.8 work; the wrapper exposes `--strict-fierce` for operators who want to keep blocking past round 3.
- PDF asset paths fall back to `mx-outputs/pdf/` and `mx-audit/` rather than requiring per-report symlinks. Reasoning: every audit report references the same QR set; symlinks would multiply maintenance.

---

## Next Steps

- Run a fresh end-to-end audit on mx.allabout.network using the new wrapper once `ANTHROPIC_API_KEY` is set, to confirm Phase 3 gates and PDF land cleanly with the new typography.
- Consider pruning the auto-warn-after-3-rounds counter files (`*-fierce-rounds.json`, `*-llm-rounds.json`) when a report is regenerated from scratch, so a re-audit after a meaningful gap doesn't inherit yesterday's round count.
- The `mx-audit/bin/generate-template-contract.js` script referenced in the contract JSON's `_notes` does not exist; either build it or remove the stale pointer so future contract gaps are noticed sooner.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `4094c38c` (hub) | Cog enforcer hardening; mx-audit cog wrapper + embedded script; how-to-write-a-cog Step 9b; submodule pointer bumps |
| `a4f0eca` (mx-audit) | Audit pipeline: end-to-end wrapper, PDF typography, infill bug, contract gaps |
| `3ac8b54` (mx-audit) | PDF: default engine → Chrome (EAA); conditional TOC; indented-field metadata extraction; letterhead-logo CSS |
| `d4d4d64` (mx-crm) | Clear stale 2026-05-04 mx.allabout.network audit artefacts |
| `b6e8abd` (mx-crm) | dogu-abaris: x-mx-generateTableOfContents:false; letterhead line breaks; HTML logo; trimmed contact info; date 5 May 2026 |
| `5f66f24` (mx-outputs) | Add dogu-abaris visa reference letter PDF (EAA-compliant, Chrome, 4pp) |
| `bf21a4fd` (hub) | cognovamx-fields.yaml v6.7; submodule pointer bumps for mx-audit, mx-crm, mx-outputs |
| `137805b` (mx-outputs) | Rebuild free-book PDFs: fresh stats, e-commerce scenario, support-cost multiplier |
| _pending_ (hub) | Free-book chapter-00 + soul.md refresh; mx-outputs pointer bump |
