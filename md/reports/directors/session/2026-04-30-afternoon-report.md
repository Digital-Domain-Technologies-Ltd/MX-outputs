---
title: "Co-Directors Report — Audit pipeline coordinator + Dotfusion re-engagement + canon tier updates"
description: "Afternoon: audit pipeline coordinator, robustness gates, logging improvements, plus a second tranche covering the Chris Bryce / Dotfusion re-engagement set, the agent-proliferation blog post, and Gathering / DDT canon tier-pricing updates."
author: "Tom Cranstoun"
created: 2026-04-30
modified: 2026-04-30
version: "2.1"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-30-afternoon-report.md
  purpose: "Afternoon: audit pipeline coordinator, robustness gates, logging improvements, plus a second tranche covering the Chris Bryce / Dotfusion re-engagement set, the agent-proliferation blog post, and Gathering / DDT canon tier-pricing updates."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit pipeline coordinator + Dotfusion re-engagement + canon tier updates"]

---

# Co-Directors Report — Audit pipeline coordinator, v2 baremetal.vc report, and logging improvements

**Date:** 30 April 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

The afternoon delivered three tranches of work. First: the audit pipeline coordinator and three robustness gate scripts shipped, converting the audit workflow into a two-command sequence with automated backstops for placeholder drift, voice drift, and tone conformance. Second: baremetal.vc was audited end-to-end with the new pipeline — the v2 report cleared all six gates and a v1/v2 comparison confirmed score reproducibility across six of seven dimensions. A suite of targeted pipeline improvements followed: the 3-round LLM judgment auto-cap, structured absence findings generation, an 8-agent access test (adding CCBot and Google-Extended), and critical bug fixes. Third: seven structured logging improvements were added to `audit-pipeline.js` so the human-in-the-loop CSV now captures gate failure details, verifier claim counts, EAA level and engine, LLM round markers, absence findings, placeholder fill ratios, and phase start/end timestamps.

---

## What Was Done

### 1. Audit pipeline coordinator script

`scripts/audit-pipeline.js` is a new Node.js coordinator that drives everything the LLM cannot do alone. In collect mode it runs egress checks, wellknown probes, sitemap discovery, the mx-audit crawl, error-page tests, agent-access tests, served/rendered gap analysis, and — new this session — pre-flight findings generation, all in sequence with structured logging to the human-in-the-loop CSV. Every step logs twice: once on invocation (parameters, outcome `n-a`) and once on completion (outcome `pass/fail/warn/skip`). In `--gates` mode it runs six gates in order (template coverage, tone conformance, template leaks, deterministic verifier, fierce critic, LLM judgment) and calls `mx.pdf.sh` for the final PDF. Two npm shortcuts added: `audit:pipeline` and `audit:gates`.

### 2. Three new robustness gate scripts

Three scripts, each with an authoritative copy in `mx-audit/scripts/` and a delegation stub in `scripts/`, target the failure modes most likely to degrade report quality between runs:

- **`generate-preflight-findings.js`** — reads all audit CSVs and JSON, derives schema maturity level from the `mxStack.structuredDataQuality` metric (levels 0-4), and writes a single structured `preflight-findings.json`. This becomes the LLM phase's single source of truth instead of navigating ten-plus raw result files — eliminating the root cause of placeholder drift.

- **`check-template-coverage.js`** (Gate 0a) — scans the finished report for unfilled `[PLACEHOLDER]` patterns after stripping code blocks, inline code, and HTML comments. Exit 1 blocks the gates run if any infill step was silently skipped.

- **`check-report-tone.js`** (Gate 0b) — deterministic four-category enforcement: banned verdict words (with a phrase allow-list for technical compounds like "broken links", "failure modes", "failure at any stage"), American English spellings (excluding HTML element names and software context terms), prescriptive timescales, and pricing in prose. Verified against the baremetal.vc report: zero violations. Exit 1 blocks the gates run.

### 3. Pipeline PDF improvements

Earlier in the afternoon: TOC page numbers now appear in every generated PDF (Puppeteer two-pass approach), tables render with alternating row shading, and the served/rendered gap checker was converted from CommonJS to ESM to resolve a `require is not defined` runtime error in the mx-audit package. Schema maturity Level 0 ("Clean slate") added to both the e-commerce and DOM analysis templates so the schema maturity table is complete for sites with no structured data.

### 4. baremetal.vc v2 audit + pipeline improvements

The new coordinator was used to run the full baremetal.vc audit end-to-end. The v2 report cleared all six gates after a focused iteration cycle that exposed several pipeline gaps:

- **`clientSlug` regex bug**: `/-report\.md$/` stripped the wrong suffix on versioned filenames (`-report-v2.md`), causing gate scripts to look for results in `baremetal.vc.report.v2.md/` rather than `baremetal.vc/`. Fixed to `/-report(-v\d+)?\.md$/`.
- **PDF naming bug**: `reportPath` + `.md.pdf` double extension. Fixed to `reportStem + .pdf`.
- **LLM judgment over-firing**: 6 rounds in block mode vs. 0 findings in warn mode. Added `--warn-llm` flag then an auto round-counter that degrades to warn after 3 rounds, persisted to `${reportStem}-llm-rounds.json`.
- **Tone gate allow-list gap**: `"broken internal links"` was blocked because the allow-list only matched `"broken links"`, not compound forms with an adjective in between. Fixed with `/broken\s+\w+\s+links/i`.
- **Structured absence findings**: `generate-preflight-findings.js` now deterministically derives Priority 4 findings (schema absence, llms.txt 404, sitemap 404, security gaps, OG incomplete) from audit data and includes them in `preflight-findings.json` — eliminating per-run manual synthesis.
- **8-agent test**: `agent-access-test.js` expanded from 6 to 8 agents (CCBot and Google-Extended added), with dynamic count in messages.

V1/v2 comparison confirmed: six of seven dimensions bit-for-bit identical across runs. Performance differed only due to VPN routing variance; both Excellent band.

### 5. Seven audit log improvements

`audit-pipeline.js` received seven structured additions to the human-in-the-loop CSV:

1. **Gate failure details**: All gates now run with `{ capture: true }` and re-echo output. Failure rationale includes violation counts and category names from sidecar JSON.
2. **Verifier claim counts**: Pass rationale now includes `numeric=N url=N html=N passed=N skipped=N total=N`.
3. **`absence_finding` rows**: One row per deterministic Priority 4 finding read from `preflight-findings.json` after the preflight step.
4. **`llm_round` row**: Written before each LLM judgment invocation with round number and threshold.
5. **EAA level + engine + size**: PDF gate captures and parses mx.pdf.sh output; pass rationale includes `engine=chrome EAA Level 2 size=NNK`.
6. **`placeholder_fill` ratio**: After Gate 2 passes, reads the verification sidecar and logs deterministic vs. synthesised claim counts.
7. **`phase_start` / `phase_end` markers**: Added at entry and all exit points for both gates mode and collect mode.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (hub, afternoon) | 9 (incl. pending) |
| Commits (submodules, afternoon) | 3 (mx-audit 48cd7f1, mx-crm 72e2f8f + 69a9c60) |
| Files changed | 29 |
| Lines added | ~1,050 |
| Lines removed | ~39 |
| New scripts | 4 (audit-pipeline.js, generate-preflight-findings.js, check-template-coverage.js stub, check-report-tone.js stub) |
| New npm scripts | 5 (audit:pipeline, audit:gates, audit:preflight, audit:tone, audit:coverage) |
| Gates in pipeline | 6 (was 4) |
| Audit log decision types | 8 (incl. 3 new: absence_finding, llm_round, phase_start/end) |
| Bug fixes | 4 (clientSlug regex, PDF naming, tone allow-list, LLM over-fire) |

---

## Why It Matters

The audit pipeline is now reproducible by design, not by discipline. Before this afternoon, each audit run depended on the operator remembering to invoke six separate skill phases in order, with no automated check that placeholders were filled or that prose tone was consistent. The coordinator collapses the mechanical work into two commands, and the gate backstops catch the most common LLM-phase errors before they reach the client report. The seven logging improvements mean every future audit run produces a machine-readable decision trail — gate outcomes, round counts, claim distributions, absence signals — without extra operator effort. That log is the foundation for retrospective quality analysis and eventually for automatic pipeline self-tuning.

---

## The Insight

The pre-flight findings JSON solves a problem that wasn't obvious until the baremetal.vc run: the LLM phases were navigating raw audit CSVs with different column layouts, date formats, and null-value conventions. Each navigation decision was a small opportunity for the model to invent a number rather than read one. One pre-digested JSON file with a consistent schema eliminates most of those opportunities. The right response to LLM variance in data-intensive tasks is to reduce the number of raw-data decisions the LLM has to make, not to refine the prompt.

---

## Next Steps

- Run the next client audit using the coordinator to validate the improved two-command workflow end to end
- Wire `generate-preflight-findings.js` into the `/audit-scores` skill so Phase 2 starts from the JSON rather than navigating raw CSVs directly
- Add `--gates` invocation to the `/audit-report` skill documentation so the gates mode is the default finishing step
- Review the baremetal-vc-report-v2-audit-log.csv as a worked example of the new log schema — use it to refine decision types further if needed

---

## Tranche Two — late afternoon

### 6. Gathering and DDT canon: tier prices, audit-days allowance, day rate, training menu

The IDHL proposal Tom drafted in chat surfaced terms that are now the operational position, so the canon caught up. The Gathering business plan and sponsorship pitch carry Community £10k / Standard £15k / Founding £25k, twelve-month annual-in-advance, with a two-audit-days-per-month allowance at the Standard and Founding tiers (24 audits per year, half-day each, five-page sample, no rollover). Frankfurt-stage naming is now open to all tiers signed before 12 May, not just Founding. The DDT business plan §1 declares the £1,200/day advisory rate (Leeds in the rate, travel at cost agreed in advance) and §6 replaces the generic format-band table with the five-format training menu (Awareness / Targeted in-depth / Senior outline / Delivery in-depth / Client discovery), priced per session.

### 7. Chris Bryce / Dotfusion re-engagement set (held)

The dotfusion.com audit was re-run as a 10-page sample, surfacing the lift since February (accessibility 2 to 58, AI suitability 55 to 100 with no SSR gap). Two-step Option-C email sequence drafted: Email 1 sends the audit with one specific hook (the llms.txt transport gap and the bounded Schema.org Service/Offer fix); Email 2 lands the Gathering founding-partner ask before the 12 May Frankfurt deadline, only if Chris engages with Email 1. The full set is held until 1 May for Tom's release decision; the CRM cog frontmatter records the hold state explicitly and a 🔴 reminder names the timing rule.

### 8. Manuscripts and one-pagers: agent-proliferation message

Appendix A (Implementation Cookbook) gained a folder-level metadata recipe (`.mx.yaml.md`). Chapter 14 of MX: The Protocols gained a new section on agent proliferation and the MX OS. Both public one-pagers (business-leaders and technologists) carry the agent-proliferation talking point. A new `expl-reginald.md` standalone investor explainer landed at the repo root, structured Part A (what exists today) / Part B (what the investment buys), designed to flex across angel / seed / strategic profiles.

### 9. Blog: Many Agents, One Metadata Layer

New post at `mx-outputs/mx-site/blog/many-agents-one-metadata-layer.html` with the same agent-proliferation argument. AWS Quick, Cowork, OpenClaw, Cursor, Copilot — every new platform rebuilds the same context-discovery layer, and the fix is MX metadata at file and folder boundaries. Index, sitemap, and llms-full updated.

### 10. CRM update: Chris Bryce relationship history

The `chris-bryce.cog.md` contact cog gained the full origin-and-arc context (Boye CMS Experts intro April 2024, Doctorow enshittification follow-up, June 2025 podcast invite, Handbook acknowledgement and complimentary copy April 2026), the read-on-the-relationship notes, the live commercial conversation summary (fees discussed, Gathering sponsorship under consideration, Audit Reporter briefed including hallucination-resolved disclosure), and the Gathering sponsorship close as a tracked open item. The cog was then rolled back to its on-hold state when Tom decided to hold the re-engagement set overnight.

---

## Commit Log

| Hash | Repository | Description |
|------|------------|-------------|
| *(pending)* | MX-hub | Audit log: 7 structured logging improvements to audit-pipeline.js |
| `3807402d` | MX-hub | Pipeline improvements: LLM 3-round auto-cap, absence findings, 8-agent test |
| `52f2ec78` | MX-hub | Fix audit-pipeline.js: --warn-llm flag, clientSlug v-suffix, PDF naming |
| `93f9806b` | MX-hub | Docs: CHANGELOG v1.56 + REMINDERS + LEARNINGS + UBERCOG for pipeline |
| `dbb52cd0` | MX-hub | Bump mx-crm + mx-outputs: baremetal.vc gate outputs, afternoon directors report |
| `6e79029f` | MX-hub | Audit pipeline robustness: preflight-findings, template-coverage, tone gate |
| `2c6664ad` | MX-hub | Add audit-pipeline.js: mechanical coordinator for full audit pipeline |
| `b6e8657e` | MX-hub | Bump mx-audit: Level 0 in all templates, gap script ESM fix |
| `d8755210` | MX-hub | Bump mx-audit + mx-outputs: TOC page numbers, professional CSS, Schema Level 0 |
| `48149ef7` | MX-hub | Bump mx-audit + mx-outputs: CSS injection fix + baremetal.vc PDF regen |
| `8c8919c3` | MX-hub | Bump mx-outputs: baremetal.vc PDF regen |
| `48cd7f1` | mx-audit | Improve agent-access-test, tone gate, and LLM withdrawal patterns |
| `375c962` | mx-audit | Fix: add 'no gap detected' to LLM judgment withdrawal patterns |
| `e08f6b8` | mx-audit | Add check-template-coverage.js and check-report-tone.js gate scripts |
| `72e2f8f` | mx-crm | Add baremetal.vc audit report v2 (pipeline-driven) + gate sidecars |
| `69a9c60` | mx-crm | baremetal.vc: update gate outputs and audit log from pipeline run |
