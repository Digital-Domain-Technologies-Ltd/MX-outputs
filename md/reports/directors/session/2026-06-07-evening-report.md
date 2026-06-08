---
title: "Co-Directors Report — Intent CMS: Components, Importer, Fidelity"
description: "Built the Intent CMS component system and a universal site importer that captures any page at near-perfect visual fidelity, with MX metadata on every captured asset."
author: "Tom Cranstoun"
created: 2026-06-07
modified: 2026-06-07
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, intent-cms]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-07-evening-report.md
  purpose: "Built the Intent CMS component system and a universal site importer that captures any page at near-perfect visual fidelity, with MX metadata on every captured asset."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Intent CMS: Components, Importer, Fidelity"]
---

# Co-Directors Report — Intent CMS: Components, Importer, Fidelity

**Date:** 7 June 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

We built the first working version of the Intent CMS and proved its headline claim. Three layers landed: a block component system, a design-token theme library, and a static-HTML generator. On top of them, a universal importer now ingests any website (an EDS site, a React or Vue app, plain HTML) and reproduces it as static MX content at near-perfect visual fidelity: 99.95% on a live EDS page, 100% on react.dev. Every asset the importer captures carries MX metadata, generated deterministically. This is the productised form of the "lift-and-shift any site into MX" service the business case has promised.

---

## What Was Done

### 1. Intent CMS component system (Phase 1)

A markdown-authored, EDS-inspired but MX-native component model: blocks (`decorate()` plus a token-styled skin), design-token themes authored as JSON and compiled to CSS, and a build-time generator that emits fully-decorated static HTML with no JavaScript at serve time. Three seed themes harvested from existing assets (the dark mx-site brand, the EDS light theme, the appendix reading theme). The EDS decoration core was ported to run server-side at generation.

### 2. Universal importer (Phases 2 and 3)

Two ingestion paths. The EDS path reads a page's clean block structure and converts it to markdown block tables. The universal path renders any page in a browser, captures the whole post-JS DOM plus its styles, and reproduces it faithfully. A pixel-diff harness measures the result against the live page at three screen sizes and gates at 95%. A bespoke-theme tokeniser extracts a re-skinnable design-token theme from the captured styles.

### 3. MX metadata on every captured asset

Each image the importer downloads is decorated with MX metadata derived deterministically from its alt text, caption, nearest heading, and URL path, embedded in the asset's own carrier. No model guesswork. This applies the Metadata-Everywhere principle to imported binaries.

### 4. Appendix source-of-truth fix (earlier in the session)

Corrected a discrepancy where book appendices and chapters had been duplicated into the draft-site layer; their real source is the manuscripts, and the generated HTML now declares that source honestly.

### 5. Documentation hygiene (close of session)

Cleared a handful of small, unrelated fixes that had collected in the working tree, keeping them separate from a parallel audit-suite effort still in progress: the generated definitions index refreshed for the new theme fields, a brand-spelling correction in a contact record, dead documentation links in the business case repointed to the current business plans, and a stale comment in the pre-push hook. Each is a single-purpose commit so the history reads cleanly.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Repositories | 2 (hub + mx-outputs) |
| New `intent-cms/` source files | 25 |
| Seed themes | 3 curated + per-import captured |
| Importer dogfoods | 2 (allabout.network EDS, react.dev SPA) |
| Best verified fidelity | 99.95% (EDS), 100% (react.dev) |
| New test suites wired into `npm test` | 2 (13 checks total) |

---

## The Insight

Faithful capture and clean componentisation are two different products, not one. Serving the whole rendered DOM verbatim with the original styles reaches ~100% fidelity immediately, because it is the page. Turning that into clean, re-skinnable blocks is a separate, harder problem with lower fidelity. The importer should do the faithful capture first (guaranteed result) and treat blockification as a progressive improvement on top, not a precondition.

---

## What Changed About Me

I reported a 100% fidelity score that turned out to be a blank-page artefact, and only caught it by checking the screenshot dimensions. The lesson held for the rest of the session: a too-good metric is a bug until proven otherwise. I now verify a headline number against an independent signal before reporting it, and I say plainly when an earlier number was wrong.

---

## Next Steps

- Build clean blockification of arbitrary rendered DOM (the hard region-to-block heuristics).
- Add zone routing (draft-site to mx-site draft to published) and the single promote command.
- Wire the self-healing repair loop and the self-learning recipe memory onto the fidelity gate.
- Add the PDF-to-HTML ingestion path.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 31f80068 (mx-outputs) | Intent CMS Phase 1-3 artefacts: token themes, preview/import pages, fidelity evidence |
| 30f5bca0 (hub) | Intent CMS Phase 1-3: component system, generator, universal importer, tests |
| 0ccd2749 (hub) | Intent CMS: lint-normalise imported md whitespace |
| 1eabf0a0 (hub) | Docs: changelog, learnings (false-fidelity rule), REMINDERS Phase 4 |
| b782b418 (hub) | Intent CMS: folder metadata (.mx.yaml.md) for new directories (pre-push Gate 7) |
| fb4256c9 (hub) | Intent CMS: sync routing-registry for new intent:* scripts and tests (Gate 8) |
| a64eb981 (hub) | Regen definitions-index for intent-cms-importer-prd theme field references |
| f2a602ea (hub) | Hooks: pre-push header says copied, not symlinked |
| effd8712 (hub) | CRM: brand fix MXPrintWorks to MX Printworks in Scott bio |
| f38ffab7 (hub) | Business-case: repoint SOUL links to current business plans |
