---
title: "Co-Directors Report — Audit Provenance, LLM View Extension, and mx-for-pdfs Accuracy Audit"
description: "Audit provenance capture; LLM View v0.2 viewport replacement; Readiness Inspector served vs rendered diff; Comprehension Probe LLM View awareness; accuracy audit"
author: "Tom Cranstoun"
created: 2026-06-02
modified: 2026-06-02
version: "1.2"

type: report
tags: [directors-report, session, morning]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-02-morning-report.md
  purpose: "Audit provenance capture; LLM View v0.2 viewport replacement; Readiness Inspector served vs rendered diff; Comprehension Probe LLM View awareness; accuracy audit"
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit Provenance, LLM View Extension, and mx-for-pdfs Accuracy Audit"]

---

# Co-Directors Report — Audit Provenance, LLM View Extension, and mx-for-pdfs Accuracy Audit

**Date:** 2 June 2026 — Morning
**Segment:** Morning (since midnight)

---

## Summary

This morning completed three workstreams. First, the audit LLM pipeline was wired for full provenance capture: every LLM call now records the exact prompt bytes and input data to a hash-indexed file store, making the evidence chain inspectable end-to-end. Second, a third browser extension was built and shipped — MX: LLM View — which re-fetches the current page with `Accept: text/markdown` and shows whether the server honours the request, revealing content-negotiation support in one click. Third, a three-agent internet fact-check of `mx-for-pdfs.html` surfaced two factual errors and prompted a site-wide accuracy sweep and legal disclaimer rollout.

---

## What Was Done

### 1. Audit LLM Provenance Capture

A new `capture-prompt.js` library (120 lines) was added to the audit pipeline. It provides two helpers used by every LLM-driven audit script: `capturePrompt()` writes the exact rendered system + user message to a hash-indexed file; `captureInput()` writes the upstream data that fed the prompt. Both append rows to a `hash.index.csv` ledger so a regulator walking the audit chain can retrieve the verbatim rubric and input for any given LLM step.

`llm-client.js` was extended with model-identity and token-count reporting so each captured entry carries the model identifier and input/output token counts alongside the hash. All five LLM scripts (fierce-critic, judgment, attribution, repair, provenance-gap) were updated to call the capture helpers on every inference step.

`pipeline-logger.js` was added as a shared structured-logging utility for the pipeline, replacing scattered `console.log` calls with levelled output that can be silenced in CI without losing audit events.

### 2. Audit Pipeline and Cog Improvements

`scripts/audit-pipeline.js` received 166 lines of additions covering gate timeout reporting, HTTP 499 error surfacing, and URL processor improvements (57 lines in `urlProcessor.js`) that normalise trailing-slash handling and multi-path slug derivation. The `mx-audit.cog.md` routing cog was expanded by 122 lines to document the new provenance capture behaviour, updated path conventions, and the local-LLM default regime.

### 3. mx-for-pdfs.html Factual Accuracy Audit

Three parallel research agents fact-checked `mx-for-pdfs.html` against internet sources across 58 discrete claims. Two factual errors were found:

**Error 1 — pdfuaid terminology.** The page (and CLAUDE.md, the PDF pipeline comments, and the PDF inspector JS) described `pdfuaid:Part=1` as a "Level 2" conformance declaration. This is wrong. `pdfuaid:part=1` declares ISO 14289-1 (PDF/UA-1). PDF/UA-2 (ISO 14289-2) uses `pdfuaid:part=2`. The error appeared in 7 HTML files, the PDF inspector JavaScript, the inject-mx-xmp.sh pipeline script, CLAUDE.md, and the gathering draft `draft-ai-usage-declaration.md`.

**Error 2 — EU AI Act article reference.** The page attributed `authorisedRepresentative` for non-EU providers to Article 25. The correct articles are 22 (high-risk AI providers) and 54 (GPAI model providers). Article 25 covers responsibilities along the value chain (distributers, importers, deployers who re-label). Article 4 attribution for "named responsible person" was also imprecise - Article 4 covers AI literacy obligations broadly.

All errors corrected in the source files. Additionally, a "not legal advice, consult specialists" disclaimer was added to 25+ pages across the site that name specific legislation, and a rule was added to CLAUDE.md requiring the disclaimer on all future regulatory-content posts.

### 4. MX: LLM View Browser Extension (v0.1 then v0.2)

A third Chrome/Edge extension was built alongside the existing MX Readiness Inspector (teal) and MX Comprehension Probe (amber). v0.1 opened a popup showing the raw server response; v0.2 redesigned it to replace the current browser viewport: clicking the icon fetches with `Accept: text/markdown` from a background service worker and injects a full-page replacement via `chrome.scripting.executeScript`, showing the raw response body, HTTP status, Content-Type verdict, and char/line counts. The address bar URL stays unchanged; browser back returns to the original page. No popup, no cookies, no model.

### 5. Browser Extension Suite v0.2 — MX Readiness and Comprehension Probe

**MX Readiness Inspector v0.2.0** gained two capabilities. First: non-HTML detection. `content.js` now returns `contentType` and `isLlmViewPage`; if the active tab is showing raw markdown or the LLM View replacement, the inspector falls back to fetching the original URL as HTML from the background worker, parsing with `DOMParser`, and running the same 21 MX checks on the served document — with a notice banner explaining what it is doing. Second: a "Served vs rendered" button opens `diff.html` (a new extension page) in a new tab. The diff page reads both served and rendered findings from `chrome.storage.session` and displays a comparison table showing which findings changed, with auto-generated notes explaining what JavaScript added or removed relative to the crawler view.

**MX Comprehension Probe** learned to detect LLM View pages. `content.js` checks for `<pre id="llm-body">` and reads only that pre block rather than the whole body, eliminating the UI chrome (URL bar, status badge, counts row) from the model's context. A notice banner tells the user the probe is reading the server response, not the rendered page. The combination is now intentional: use LLM View to see what the server returns, then ask the Comprehension Probe questions about it.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits | ~15 this session |
| mx-outputs commits | ~12 this session |
| mx-shared-gathering commits | 1 |
| HTML files corrected | 31 (pdfuaid terminology + legal disclaimers) |
| Factual errors fixed | 2 (pdfuaid Level 2, EU AI Act Art. 25) |
| Pages with new legal disclaimer | 25+ |
| Extensions built/upgraded | 3 (LLM View v0.2, Readiness v0.2, Comprehension Probe) |
| New extension files | diff.html, diff.js |
| Repositories touched | 3 (hub, mx-outputs, mx-shared-gathering) |

---

## Why It Matters

The provenance capture infrastructure is what makes audit evidence inspectable under the EU AI Act, UK ICO AI guidance, and NIST AI RMF. Before this work, the rubrics and inputs to every LLM inference step were implicit - they existed in the code but were not recorded per-run. Now every inference step leaves a tamper-evident file (SHA-256 named, hash-indexed) so a compliance reviewer can retrieve the exact prompt the model saw for any audit, not just the template it came from. This is the difference between "we used this rubric" and "here is the rubric the model received on that run".

The LLM View extension is a sales and demonstration tool as much as a developer tool. It makes the gap between machine-readable and machine-negotiable tangible in one click - useful for client conversations about why content negotiation matters for AI agent access.

The accuracy audit matters for two reasons. First, the factual errors (wrong PDF/UA conformance terminology, wrong EU AI Act article) could undermine credibility with technically sophisticated readers - regulators, accessibility auditors, and legal teams are exactly the audience the site needs to reach. Second, the absence of "not legal advice" disclaimers on pages making specific regulatory claims is a compliance risk. Both are corrected. The CLAUDE.md rule ensures future content carries the disclaimer automatically.

---

## Decisions Made

- Prompt capture writes hashes per-call, not per-session, so individual steps are attributable even when a single audit run calls the same script multiple times.
- The LLM View extension fetches without cookies by design - it shows what an external agent sees, not what an authenticated user sees.

---

## Next Steps

- Verify the provenance capture files appear correctly in a live audit run against a test site.
- Replace placeholder solid-indigo icons in MX: LLM View with final artwork.
- The `llms-full.txt` still has one stale "Level 2" reference (from the pdf-inspector.html line that was already fixed in the HTML; regenerate llms-full.txt when the next site build runs).

---

## Commit Log

| Hash | Description |
|------|-------------|
| 9616c6a1 | Hub: Wire audit LLM pipeline for provenance capture; add pipeline-logger |
| 12c83bb5 | Hub: Bump mx-outputs; add Desktop Commander tool permissions |
| af7814eb | mx-outputs: Add MX: LLM View browser extension |
| 04bc1f6a | Hub: Bump mx-outputs: LLM View v0.2.0 viewport injection |
| bd91f5eb | Hub: Bump mx-outputs: MX Readiness v0.2.0 non-HTML and diff tab |
| 8ce246c3 | Hub: Bump mx-outputs: Comprehension Probe LLM View awareness |
| b77b982d | mx-outputs: MX Readiness Inspector v0.2.0 |
| 5c871c01 | mx-outputs: MX Comprehension Probe LLM View detection |
| fc0c623 | mx-shared-gathering: Fix pdfuaid:Part terminology — PDF/UA-1 not Level 2 |
| af0d61aa | mx-outputs: Factual accuracy fixes + legal disclaimers across mx-site |
| 07adb06d | mx-outputs: Add Salesforce/Contentful draft blog post and update drafts index |
