---
title: "Co-Directors Report — Boye Profile, pdf:doc Hardened, Audit Pipeline Deepened"
description: "Built the Boye CMS Experts snapshot; fixed three silent pdf:doc pipeline failures; deepened the mx-audit pipeline with post-consent dialog capture, JSON-LD fact-stability drift detection, and a string of report-polish fixes driven by one client-report run."
author: "Tom Cranstoun and Maxine"
created: 2026-04-22
modified: 2026-04-22
version: "2.0"

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

### 3. Audit pipeline deepened — post-consent capture, JSON-LD drift, report polish

Ran a regen of the neom-wellbeing.com audit report end-to-end and used the actual client PDF as the iteration loop. Each thing Tom noticed on the PDF became a fix in the pipeline, not a one-off patch.

**Post-consent dialog capture** — the pre-existing hostile-UX check observed the served HTML passively and reported "no dialog at first paint". True, but misleading: on neom, the Klaviyo 15%-off dialog only renders AFTER the shopper accepts the Consentmo cookie banner. Built a second-pass capture: walk vendor accept-button selectors, fall back to light-DOM text patterns ("Accept", "Allow all", "Agree"), then pierce shadow-DOM roots (Consentmo ships its banner as `<csm-cookie-consent>` with internal UI in a shadow root). First neom run with this logic still missed the button because the host shadow was inert; diagnostic dump revealed the banner wasn't rendering at all. Root cause: `navigator.webdriver === true` signals automation to consent libraries, which suppress their UI to keep their analytics clean. Masked the flag, set a real Chrome UA, added `Accept-Language: en-GB`. Next run clicked the Accept successfully and captured the Klaviyo dialog the shopper actually sees. The audit now reports "Dialog after consent accepted: Yes" as a distinct row — not a replacement for the first-paint finding but an addition. Seven commits of iteration driven by one screenshot Tom sent.

**JSON-LD fact-stability drift detection** — after an `/interview-me` conversation framing MX as a technique (not our metadata namespace), consistency and stability surfaced as the layer the audit barely measures. Shipped the minimum-viable version this session: per-URL structural fingerprint of every JSON-LD `@graph` node (type, `@id`, sorted property keys, sorted nested types), stable-stringified and MD5-hashed. Persistent snapshot at `.cache/<host>/jsonld-snapshot.json`, per-run diff at `results/<host>/jsonld-drift.json`. First-ever runs record the baseline silently; subsequent runs name the types that drifted. Three states verified against neom: first-run (baseline captured), stable (135/135 nodes match), drift-detected (tampered Organization hash → "1 of 20 URLs drifted: Organization"). Structural-only; value drift (price moving £30 → £35) is deferred because it needs raw JSON-LD persistence in the main collector.

**Report polish** — a string of fixes driven by Tom's feedback on the PDF. Scores floored at 0 in `auditAverages.js` so reports can no longer say "-1/100". Console-errors table deduplicated by `(failingHost, errorCode)` with a 4-column layout capped at 10 distinct issues and a sidecar CSV carrying all raw samples. Double-lazy image-loading pattern gets a mechanical explanation block whenever detected. Crawl-delay findings re-framed as faint-praise ("polite signal, unlikely to be widely read, but mx-audit itself honours it") instead of "remove obsolete directive". The Executive Summary REWRITE block baked into infill-report.js was literally instructing the rewriter to use "I audited" / "I found" — fixed to use "we" and cited the fierce-critic gate that would otherwise catch it. Cross-Page Consistency column "Missing Pages" renamed to "Pages covered" so the header no longer contradicts the "20 of 20" value at 100% coverage.

The iteration shape was itself valuable. Every change was grounded in a specific PDF artefact Tom saw. None of this would have shipped through speculative design review.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (evening) | 5 (hub, mx-audit, mx-crm, mx-outputs ×2) |
| Files changed | 19 across 4 repos |
| Lines added | +1,109 |
| Lines removed | −176 |
| Companies profiled (Boye thread) | 86 |
| Customer pages fetched live (Boye thread) | 8 |
| Pipeline fixes (pdf:doc) | 3 (pandoc flag, xurl guard, font-aware emoji) |
| New audit detectors | 2 (post-consent dialog capture, JSON-LD fact-stability drift) |
| Audit report-polish fixes | 6 (score floor, console dedupe, double-lazy block, crawl-delay faint-praise, I→we voice, column-header rename) |
| Repositories touched | 4 (hub, mx-audit, mx-crm, mx-outputs) |

---

## The Insight

The PDF pipeline failed in three different ways, each silent until tried, each fixable in under five lines. This is the "tested by use" pattern: a tool nobody runs accumulates rot the moment its environment moves. pandoc 3 shipped, MacTeX installs vary, the colour-emoji story differs across xelatex versions, and a script that worked the day it was written becomes a dead letter without anyone noticing.

The defensive shape is the same as the morning's reconciler bug and the afternoon's submodule-push bug: ask the load-bearing question explicitly. The xurl reference now asks "is xurl loaded" before using its macros. The emoji wrap now asks "does this font exist" before invoking it. In both cases the test always existed, but nobody had wired it into the right place. The fix is small; the missing-test pattern is the same one we have been correcting all day.

The later audit-pipeline thread pointed at a related insight: the best iteration loop is the actual deliverable. The post-consent dialog, the JSON-LD drift detector, the six polish fixes — none of these would have come out of a speculative design review. They came out of looking at one PDF, noticing what was wrong, and asking "why does the pipeline let that happen". The conversation with the user on MX-as-technique was only possible because we had a concrete artefact to point at. A prospectus with no PDF is hard to sharpen.

---

## Next Steps

- The pre-existing dirty state in the working tree (audit-skill edits, mx-canon deletions, mx-audit/mx-crm/allaboutv2 internal changes) is from prior sessions and was deliberately left out of this commit. Tom should triage it next session: ship, refine, or discard.
- Optional: extend the unicode-fallback filter's mapping table as new emoji turn up in MX docs. Current set: ✓ ✅ ❌ ⚠ 🔴 🟡 🔵 🟢 📚 🎲 🚫.
- Optional: a similar font-aware refactor of the keep-together.lua filter so it falls back when `needspace` is not loaded (currently relies on the book-pipeline metadata.yaml to provide the package).
- Next session (audit pipeline): raw JSON-LD value persistence in the main collector so the drift detector can report value flicker (price £30 → £35), not just structural drift. Today's structural-hash version is working baseline.
- Next session (audit pipeline): within-page metadata-stack drift detector (og:title vs JSON-LD name vs `<title>` on a single page). Smaller than cross-run drift, flagged in the interview but deferred this evening.
- Next session (audit pipeline): the MX-as-technique framing pass across templates and findings prose — agreed during `/interview-me` but not yet executed. The audit still talks about MX largely in `mx:`-namespace terms; the technique layer should lead, with governance as one component of it.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 9cf740b | mx-outputs | Add Boye CMS Experts company-value profile PDF |
| 57eea0b | hub | pdf:doc pipeline: fix pandoc 3 flag, guard xurl, font-aware emoji fallback |
| ae62595 | mx-outputs | Directors report: 2026-04-22 evening segment (initial v1.0) |
| 8e6e01f | mx-audit | Audit pipeline: post-consent capture, JSON-LD drift detection, report polish |
| 999c7c4 | mx-crm | Neom outreach 2026-04-22: audit report, sidecars, console-errors CSV |
| 35df936 | mx-outputs | Neom PDF + console-errors CSV for 2026-04-22 |
| pending | hub | Bump submodules + update evening report to v2.0 |
