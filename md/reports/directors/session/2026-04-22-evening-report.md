---
title: "Co-Directors Report — Boye CMS Experts Profile, pdf:doc Pipeline Hardened"
description: "Built an operating-scale snapshot of the ~86 organisations in the Boye CMS Experts group; fixed three silent failures in the canonical npm run pdf:doc pipeline so it builds clean on systems without colour-emoji font support."
author: "Tom Cranstoun and Maxine"
created: 2026-04-22
modified: 2026-04-22
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
---

# Co-Directors Report, Boye CMS Experts Profile, pdf:doc Pipeline Hardened

**Date:** 22 April 2026, Evening
**Segment:** evening (17:00 onwards)

---

## Summary

Two short threads. First, built a competitive-landscape snapshot of every organisation in the Boye CMS Experts group, ~86 entities deduplicated from ~100 listed members. Revenue, staff bands, customer logos per row, with confidence labels making honest separation between verified data, public-knowledge fact, and educated guess. Tom is in the group himself; the file is positioning intel for the room he will be in. Second, the canonical `npm run pdf:doc` pipeline turned out to have three silent failures stacked on top of each other. Each one was found by trying to use it. All three are now fixed and the pipeline builds clean on this machine, with the unicode-fallback filter portable to systems that lack Apple Color Emoji.

---

## What Was Done

### 1. Boye CMS Experts company-value profile

Fetched the member list from `boye-co.com/groups/cms-experts/members`, deduplicated to ~86 unique organisations across Australia, Europe, UK & Ireland, Canada and the US. Categorised every row as vendor, hosting/platform, agency, enterprise user (PayPal, TELUS, Edinburgh, ICANN), or sole trader. For each row: country/HQ, ownership (public ticker, PE, VC stage, founder-owned), staff band, revenue or ARR, notable customer logos.

The honest part is the confidence labelling. Four labels: `[verified]` for cells fetched live from the company's own customer page this session, `[public]` for cells from training-data knowledge through January 2026, `[guess]` for figures inferred from staff times industry-typical revenue-per-head, `[private]` for cells the company genuinely does not disclose. The brief was "give me the value of these companies" and Tom escalated to "make guesses when not known", so the deliverable is an order-of-magnitude estimate sheet rather than an audited balance sheet, and it labels itself that way line by line.

WebSearch was unavailable in the session, so the fetched-this-session column is thinner than it would otherwise be (eight vendor customer pages confirmed, the rest trade on prior knowledge). Output saved to `mx-outputs/pdf/cms-experts-company-values.pdf`. Source markdown lives at `/tmp/cms-experts-company-values.md` and is emoji-free per Tom's instruction.

### 2. pdf:doc pipeline hardened

Promoting the Boye PDF to mx-outputs through the canonical `npm run pdf:doc` script revealed three stacked failures. Each was a silent dead-letter — the script would have looked broken to anyone trying to use it on a fresh machine.

Failure 1: pandoc 3.x dropped the `--syntax-highlighting` flag. The script in `scripts/generate-document-pdf.cjs` still passed it. Fix: renamed to `--highlight-style=tango`.

Failure 2: the script's LaTeX header conditionally loaded `xurl.sty` if available, then unconditionally referenced its `\UrlBreaks` and `\UrlOrds` macros. On any MacTeX install without xurl, the build crashed with "Undefined control sequence". Fix: wrapped the macro reference in the same `\IfFileExists{xurl.sty}` guard.

Failure 3: the unicode-fallback Lua filter wrapped emoji in `\fontspec{Apple Color Emoji}`. xelatex on this Mac (and on most macOS xelatex installs without HarfBuzz/lualatex) cannot load colour-emoji fonts; the build crashed with a fontspec error. Fix: changed the filter's `wrap()` helper to use `\IfFontExistsTF{font}{...}{fallback text}`. On systems where the font loads, real emoji renders. On systems where it does not, the filter substitutes a readable text label (`[verified]`, `[ok]`, `[X]`, `[!]`, etc.) instead of crashing or emitting Latin Modern "missing character" warnings. Added 📚 🎲 🚫 to the filter's mapping table since the Boye PDF used them.

After all three fixes, `npm run pdf:doc` produced the Boye PDF (88KB, A4, ToC) with zero pandoc warnings.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (evening) | 1 mx-outputs (PDF), 1+ hub (pipeline fixes, pending) |
| Files changed (hub) | 2 (`generate-document-pdf.cjs`, `unicode-fallback.lua`) |
| Files changed (mx-outputs) | 1 (`pdf/cms-experts-company-values.pdf`) |
| Pipeline fixes | 3 (pandoc flag rename, xurl guard, font-aware emoji wrap) |
| Companies profiled | 86 |
| Customer pages fetched live | 8 (Contentful, CoreMedia, Magnolia, Kontent.ai, Hygraph, Pantheon, Staffbase, TYPO3) |
| Repositories | 2 (hub + mx-outputs) |

---

## The Insight

The PDF pipeline failed in three different ways, each silent until tried, each fixable in under five lines. This is the "tested by use" pattern: a tool nobody runs accumulates rot the moment its environment moves. pandoc 3 shipped, MacTeX installs vary, the colour-emoji story differs across xelatex versions, and a script that worked the day it was written becomes a dead letter without anyone noticing.

The defensive shape is the same as the morning's reconciler bug and the afternoon's submodule-push bug: ask the load-bearing question explicitly. The xurl reference now asks "is xurl loaded" before using its macros. The emoji wrap now asks "does this font exist" before invoking it. In both cases the test always existed, but nobody had wired it into the right place. The fix is small; the missing-test pattern is the same one we have been correcting all day.

---

## Next Steps

- The pre-existing dirty state in the working tree (audit-skill edits, mx-canon deletions, mx-audit/mx-crm/allaboutv2 internal changes) is from prior sessions and was deliberately left out of this commit. Tom should triage it next session: ship, refine, or discard.
- Optional: extend the unicode-fallback filter's mapping table as new emoji turn up in MX docs. Current set: ✓ ✅ ❌ ⚠ 🔴 🟡 🔵 🟢 📚 🎲 🚫.
- Optional: a similar font-aware refactor of the keep-together.lua filter so it falls back when `needspace` is not loaded (currently relies on the book-pipeline metadata.yaml to provide the package).

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 9cf740b | mx-outputs | Add Boye CMS Experts company-value profile PDF |
| pending | hub | pdf:doc pipeline: fix pandoc 3 flag, guard xurl macros, font-aware emoji fallback |
| pending | hub | Bump mx-outputs: Boye CMS Experts PDF |
