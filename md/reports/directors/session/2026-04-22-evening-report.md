---
title: "Co-Directors Report — Boye Profile, pdf:doc Hardened, Audit Pipeline Deepened, Egress Pre-Flight"
description: "Built the Boye CMS Experts snapshot; fixed three silent pdf:doc pipeline failures; deepened the mx-audit pipeline with post-consent dialog capture, JSON-LD fact-stability drift detection, and a string of report-polish fixes; added a pre-flight egress probe so audits run behind a VPN/tracker-blocker no longer publish misleading 'site has 62 errors' findings."
author: "Tom Cranstoun and Maxine"
created: 2026-04-22
modified: 2026-04-22
version: "3.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
---

# Co-Directors Report, Boye CMS Experts Profile, pdf:doc Pipeline Hardened, Egress Pre-Flight

**Date:** 22 April 2026, Evening
**Segment:** evening (17:00 onwards)

---

## Summary

Three threads. First, built a competitive-landscape snapshot of every organisation in the Boye CMS Experts group, ~86 entities deduplicated from ~100 listed members. Revenue, staff bands, customer logos per row, with confidence labels making honest separation between verified data, public-knowledge fact, and educated guess. Tom is in the group himself; the file is positioning intel for the room he will be in. Second, the canonical `npm run pdf:doc` pipeline turned out to have three silent failures stacked on top of each other. Each one was found by trying to use it. All three are now fixed and the pipeline builds clean on this machine, with the unicode-fallback filter portable to systems that lack Apple Color Emoji. Third, a client-style PDF Tom queried turned out to overstate "console errors" because his VPN had NXDOMAINed every analytics endpoint during the audit. Built a pre-flight egress probe and a report-side caveat injection so the same misreading cannot ship from this pipeline again.

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

### 4. Audit pipeline egress pre-flight (VPN / tracker-blocker detection)

Tom showed me a page from a regenerated neom-wellbeing PDF asking "I get these errors, are they real?" The Browser Console Errors section reported 62 `console.error`, 14 uncaught exceptions, 68 failed subresource requests, with a deduplicated table where every single distinct failure was `ERR_NAME_NOT_RESOLVED` against `monorail-edge.shopifysvc.com`, `p.typekit.net`, `try.abtasty.com`, `tag.rmp.rakuten.com`, `tag.wknd.ai`, `bat.bing.com`. He had been running with NordVPN active during the audit. NordVPN's Threat Protection NXDOMAINs trackers; Puppeteer faithfully recorded those failures as "site errors". The report's existing caveat ("a real shopper on an ordinary connection likely reaches them fine") was honest but soft — a client reading the headline number could conclude their site has 62 broken things. Tom's directive: "do not give misleading information."

Shipped `mx-audit/bin/check-egress.js` as a pre-flight probe. It runs as Step 2.6 of `/audit-collect`, between the Cloudflare-cache-purge step and the main audit. Two layers of detection: macOS-direct VPN signals (`scutil --nc list`, `pgrep` for known VPN daemons, active `utunN` interfaces with an inet address), recorded informationally; and a DNS reachability probe against a panel of ten well-known tracker/CDN hostnames (the exact six that failed in the neom incident, plus Google Analytics, GTM, Cloudflare Insights, Meta Pixel, Hotjar). Verdict: degraded if ≥30% of the panel fails to resolve. Exit 2 on degraded, 0 on clean, sidecar `egress_check.json` written either way for archival traceability.

Critical design choice during build: an early version made VPN signals or DNS-probe failures both trip the verdict. First test run had NordVPN's daemon resident in the macOS tray (no active tunnel), DNS resolved all ten probes cleanly, and the verdict still came back "degraded" — a false positive that would have prompted on every audit just because the app was open. Refactored: DNS probe is the verdict, VPN signals are supplementary context. What matters for audit accuracy is whether tracker hostnames resolve, not which apps are running. With the VPN tunnel actually engaged, all six neom failure-set hosts NXDOMAIN, the probe trips at 60% fail rate, and the prompt fires.

When degraded, the skill prompts the user with three options via `AskUserQuestion`: abort and disable VPN (recommended default per Tom's "no misleading information"), continue and tag the report (the infill script prepends an "Audit-environment caveat" callout above the Browser Console Errors sample table, naming the unresolvable hosts and telling the reader to re-run on a clean connection), or continue silently (escape hatch). The infill side reads `egress_check.json` and conditionally prepends the caveat into `[CONSOLE_SAMPLES_TABLE]` — no template surgery, no contract.json update, the caveat rides along with the existing token. Tested across all four scenarios (degraded+default, degraded+silent, clean, missing sidecar): caveat appears only when it should.

The iteration shape was itself valuable. Every change was grounded in a specific PDF artefact Tom saw. None of this would have shipped through speculative design review.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (evening) | 11 (hub ×7, mx-audit ×3, mx-crm, mx-outputs ×2) |
| Files changed | ~22 across 4 repos |
| Lines added | +1,400 |
| Lines removed | −180 |
| Companies profiled (Boye thread) | 86 |
| Customer pages fetched live (Boye thread) | 8 |
| Pipeline fixes (pdf:doc) | 3 (pandoc flag, xurl guard, font-aware emoji) |
| New audit detectors | 3 (post-consent dialog capture, JSON-LD fact-stability drift, egress pre-flight) |
| Audit report-polish fixes | 6 (score floor, console dedupe, double-lazy block, crawl-delay faint-praise, I→we voice, column-header rename) |
| Tracker hostnames in egress probe panel | 10 |
| Repositories touched | 4 (hub, mx-audit, mx-crm, mx-outputs) |

---

## The Insight

The PDF pipeline failed in three different ways, each silent until tried, each fixable in under five lines. This is the "tested by use" pattern: a tool nobody runs accumulates rot the moment its environment moves. pandoc 3 shipped, MacTeX installs vary, the colour-emoji story differs across xelatex versions, and a script that worked the day it was written becomes a dead letter without anyone noticing.

The defensive shape is the same as the morning's reconciler bug and the afternoon's submodule-push bug: ask the load-bearing question explicitly. The xurl reference now asks "is xurl loaded" before using its macros. The emoji wrap now asks "does this font exist" before invoking it. In both cases the test always existed, but nobody had wired it into the right place. The fix is small; the missing-test pattern is the same one we have been correcting all day.

The later audit-pipeline thread pointed at a related insight: the best iteration loop is the actual deliverable. The post-consent dialog, the JSON-LD drift detector, the six polish fixes — none of these would have come out of a speculative design review. They came out of looking at one PDF, noticing what was wrong, and asking "why does the pipeline let that happen". The conversation with the user on MX-as-technique was only possible because we had a concrete artefact to point at. A prospectus with no PDF is hard to sharpen.

The egress thread sharpened that pattern further. The audit's existing caveat sentence ("a real shopper on an ordinary connection likely reaches them fine") was honest writing, but it sat below the headline numbers and read as a footnote. The fix was not "rephrase the footnote" — it was "do not let the audit report a number that needs a footnote". The pre-flight probe stops the run before the misleading bytes are written; the caveat injection is a fall-back for cases where the user knowingly proceeds. And the design question that came up mid-build — "does VPN-process detection or DNS-probe-failure carry the verdict" — was settled by trying it: the false-positive on the first run made the answer obvious. Build, observe, refactor. Same loop as the audit polish.

---

## Next Steps

- The pre-existing dirty state in the working tree (mx-canon deletions, mx-audit/mx-crm/allaboutv2 internal changes) is from prior sessions and was deliberately left out of this commit. Tom should triage it next session: ship, refine, or discard.
- Optional: extend the unicode-fallback filter's mapping table as new emoji turn up in MX docs. Current set: ✓ ✅ ❌ ⚠ 🔴 🟡 🔵 🟢 📚 🎲 🚫.
- Optional: a similar font-aware refactor of the keep-together.lua filter so it falls back when `needspace` is not loaded (currently relies on the book-pipeline metadata.yaml to provide the package).
- Next session (audit pipeline): raw JSON-LD value persistence in the main collector so the drift detector can report value flicker (price £30 → £35), not just structural drift. Today's structural-hash version is working baseline.
- Next session (audit pipeline): within-page metadata-stack drift detector (og:title vs JSON-LD name vs `<title>` on a single page). Smaller than cross-run drift, flagged in the interview but deferred this evening.
- Next session (audit pipeline): the MX-as-technique framing pass across templates and findings prose — agreed during `/interview-me` but not yet executed. The audit still talks about MX largely in `mx:`-namespace terms; the technique layer should lead, with governance as one component of it.
- Next session (audit egress): once Tom has run a degraded-egress audit through the full skill, capture any rough edges in the AskUserQuestion prompt copy and add Linux/Windows VPN detection to the direct-signals layer. macOS-only is fine for now because that is Tom's machine, and the DNS probe carries the verdict on every platform.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 9cf740b | mx-outputs | Add Boye CMS Experts company-value profile PDF |
| 9686731a | hub | pdf:doc pipeline: fix pandoc 3 flag, guard xurl, font-aware emoji fallback |
| ae62595 | mx-outputs | Directors report: 2026-04-22 evening segment (initial v1.0) |
| 8e6e01f | mx-audit | Audit pipeline: post-consent capture, JSON-LD drift detection, report polish |
| 999c7c4 | mx-crm | Neom outreach 2026-04-22: audit report, sidecars, console-errors CSV |
| 35df936 | mx-outputs | Neom PDF + console-errors CSV for 2026-04-22 |
| 0fdbd881 | hub | Skills + filter updates to match mx-audit pipeline changes |
| fb1bf87f | hub | CHANGELOG + REMINDERS: 2026-04-22 evening audit pipeline deepening |
| fb7cf1ac | hub | LEARNINGS: two rules from 2026-04-22 audit session |
| 5c689593 | hub | UBERCOG + mx-outputs bump: add jsonld-snapshot routing, regen README index |
| 2568e251 | hub | keep-together.lua: tighten HR+heading clearpage rule to level-2 only |
| 34776b9 | mx-audit | Add check-egress.js for audit-collect Step 2.6 pre-flight |
| 5b5114c3 | hub | audit-collect Step 2.6 egress check: skill, gotcha, mx-audit bump |
| 84403d72 | hub | LEARNINGS: pdf:doc pipeline failures from font/flag/package assumptions |
| fa1fad6 | mx-audit | infill-report: prepend audit-environment caveat when egress probe degraded |
| pending | hub | Bump mx-audit pointer to fa1fad6 + update evening report to v3.0 |
