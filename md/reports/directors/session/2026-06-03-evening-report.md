---
title: "Co-Directors Report -- Blog Index Cards, mx.servedAt Field, Protocols Ch24, Compliance Clean"
description: "Blog index cards for 14 new posts; mx.servedAt added to field dictionary; protocols chapter 24 HTML; compliance at zero violations"
author: "Tom Cranstoun"
created: 2026-06-03
modified: 2026-06-03
version: "3.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-03-evening-report.md
  purpose: "Blog index cards for 14 new posts; mx.servedAt added to field dictionary; protocols chapter 24 HTML; compliance at zero violations"
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report -- Blog Index Cards, mx.servedAt Field, Protocols Ch24, Compliance Clean"]
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

### 5. Spinner Fix -- Initial Chip Generation

A follow-on bug was reported: the spinner did not show while `main()` generated the initial question chips on popup open. The spinner only showed during `ask()`. Fix: `showSpinner()` now wraps the `readPage()` + `generateSuggestedQuestions()` block in `main()`, hidden after chips render.

### 6. Standards-Governance Blog Series (14 Drafts)

14 blog post drafts landed covering a standards-governance series and adjacent essays. Titles include "A Rule You Sell Is Not a Standard", "The Spec Was Never the Fragile Part", "Two Implementations or It Isn't a Standard", "When the Law Points at Your Standard", and ten further posts on agency, platforms, trust, and capture. All dated 2026-06-03. These feed the manuscripts chapter and the site's thought-leadership surface.

### 7. Book Chapter HTML Updates

Three book chapter HTML files were regenerated: `handbook-chapter-00`, `protocols-chapter-00`, and `protocols-chapter-12`. A new Handbook v2 chapter 00 HTML also landed (`mx-handbook-v2-chapters-chapter-00-chapter-00.html`).

### 8. Blog Index Cards and Compliance Clean

After publishing, the blog indices needed cards for all 14 new posts. Confirmed governance/index.html (10 cards) and blog/index.html (6 non-governance cards) were already complete in the published HTML. The `mx.servedAt` field -- used in 14 new blog post markdown files and across the site's own frontmatter -- was not in the field dictionary. Added it with a proper definition (the live-served URL for a document, distinct from `canonicalUri` which points to the source). All 14 unknown-field violations cleared; compliance is now at zero across all categories.

Additionally, protocols chapter 24 HTML published, and the blog sitemap and llms files were fully regenerated.

### 4. Provenance-Gap LLM Cache

`mx-reginald/audit/bin/provenance-gap-llm.js` now caches per-page LLM findings. Cache key: HTML content hash + rubric (system prompt) hash + model. A 30-day TTL backstop prevents stale entries; HTML hash is the real freshness signal. On a repeat audit of an unchanged page, the Ollama call is skipped entirely (~30-40s saved per page). Cache lives at `<cacheDir>/llm/provenance-gap-cache.json` (gitignored).

### 9. Manuscript Propagation and Investor Pitch

The standards-governance series was carried into the books and the investor materials. The deep treatment is the new Protocols chapter 24, "The Standard and the Engine"; the free book and Handbook v2 chapter 12 carry lighter versions of the same separation argument. The reference layer landed in four appendices: seven dated industry entries in Appendix J (FAIR moving to TYPO3, JPEG XL returning to Chrome, the EU AI Act Digital Omnibus deferral, Microsoft's Frontier Tuning, the Common Crawl AI Visibility Audit, the WPP and Omnicom agency platforms, and OpenSSF Model Signing), two boundary statements with two deferral rows in Appendix U, a machine-to-machine procurement composition example in Appendix V, and a new diacritic-stripping reading failure in Appendix S. The investor pitch gained the credibility argument a sceptical investor reaches for first: why a REGINALD attestation is worth buying when the body that defines compliance does not sell the verdict, and why the proprietary engine is legitimate because the open definition lives elsewhere.

All moving facts were verified against current sources before publishing: the Digital Omnibus dates of 2 December 2027 and 2 August 2028, FAIR's move to TYPO3, JPEG XL behind a flag in Chrome 145, the Common Crawl English share near 41 per cent, and Microsoft's Mayo Clinic model ownership. The European Accessibility Act enforcement language was softened to match the record: injunctions brought against major French retailers, with no ruling yet.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Extension files changed (comprehension + readiness) | 6 |
| Ollama timeout raised (30s to 120s) | 1 change |
| Status text strings removed across both extensions | 8+ |
| Lines added to provenance-gap-llm.js | ~90 |
| Contentful audit PDF delivered | 1 |
| Blog post drafts added (standards-governance series) | 14 |
| Book chapter HTML files updated or added | 4 |
| MX compliance violations fixed (invalid folderType enum) | 1 |
| Unknown field violations cleared (mx.servedAt now in dictionary) | 14 |
| Blog index cards added (governance + standalone) | 14 |
| Compliance score after this session | 0 violations |

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
| 6af6956d | (hub) Propagate governance drop into appendices J, U, V, S |
| f8917356 | (hub) Investor pitch: standard-and-the-engine credibility argument |
| 0f618ba6 | (mx-outputs) Update sitemap and llms: reflect new blog cards and protocols chapter 24 |
| e62a3f29 | (mx-outputs) Add protocols chapter 24 HTML |
| 5aedf899 | (mx-outputs) Blog index: add cards for 8 governance posts and 6 standalone essays |
| a08f822f | (hub) Add mx.servedAt field to dictionary; regenerate definitions index |
| d8cbd45a | (hub) Bump mx-outputs: sitemap + README regen for 14 blog posts |
| e6079608 | (mx-outputs) Update book chapter HTML: handbook ch00, protocols ch00 and ch12 |
| 24fc14a1 | (mx-outputs) Add 14 blog post drafts: standards-governance series and related essays |
| 7b0d5fde | (mx-outputs) Show spinner during initial question chip generation in main() |
| cb49f7b9 | (mx-outputs) Fix invalid folderType: demo -> content in comprehension demo folder |
| 842e7045 | (mx-outputs) Regenerate README index |
| 79d63a39 | (mx-outputs) Sync Contentful audit: report final pass + PDF + LLM judgment results |
| babfce53 | (mx-outputs) Extensions: remove placeholder/status text, add spinner during model inference |
| 0cbdca19 | (mx-outputs) Fix MX Comprehension Probe: increase Ollama timeout to 120s, add num_ctx |
| 678c5735 | (mx-outputs) Add Ollama fallback to MX Comprehension Probe ai-client.js |
| b12fbad2 | (hub) Bump mx-outputs: spinner during chip generation on popup open |
| 681c88a2 | (hub) Bump mx-outputs: fix invalid folderType enum in comprehension demo |
| 9d45029d | (hub) Bump mx-outputs: README regen + evening report |
| 28d6397d | (hub) Docs: CHANGELOG v3.02, LEARNINGS v4.47 |
| 5c613cec | (hub) Audit pipeline: per-probe LLM caches; agent-access verdict cache |
| a83bb65f | (hub) Bump mx-outputs: extension spinner + status text cleanup |
| 5a18e57b | (hub) Bump mx-outputs: fix Ollama timeout + num_ctx in MX Comprehension Probe |
