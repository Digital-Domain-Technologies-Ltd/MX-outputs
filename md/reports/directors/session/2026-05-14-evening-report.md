---
title: "Co-Directors Report — Audit pipeline upstream fixes: source-side guards + two-view performance + readability refactors"
description: "Evening session hardened the audit pipeline at source. Operator-dialogue refusals, banned-verdict words, and contradictory placeholder values now retry-then-substitute before reaching the gates. Server Response Stability switched to a two-view verdict (cold-cache first-visit + warmed returning-visitor) that surfaces a 4087 ms cold-origin cost the older single-median view was hiding. PDFs gained page numbers; large robots.txt and inline-duplicates tables now sidecar properly."
author: "Tom Cranstoun"
created: 2026-05-14
modified: 2026-05-14
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-14-evening-report.md
---

# Co-Directors Report — Audit pipeline upstream fixes: source-side guards, two-view performance, readability refactors

**Date:** 14 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

The neomwellbeing.com audit that landed at the end of the afternoon revealed four classes of warn-only finding (operator-dialogue refusals, sample-vs-total overreach, missing-in-engagement, hedged-vs-asserted contradiction) that the downstream gates correctly caught and the repair pass cleaned up before PDF. The evening was spent fixing the source — not tightening the gates further. Every drift class now has a system-prompt ban plus a regex post-check plus a deterministic substitute, so a single drift sentence can no longer block the pipeline. The same audit also surfaced three readability problems (a five-column performance table that overflowed the page edge, a 173-row inline-duplicates table, and a 164-line robots.txt code block) which are now paragraphs, capped tables, or sidecars. The performance check itself learned to report what a first-time visitor actually pays alongside the returning-visitor median, which on neomwellbeing.com is the difference between a 4087 ms cold-origin baseline and a 469 ms warmed response on the same page.

---

## What Was Done

### 1. Source-side prompt guards mirroring the gates

`mx-audit/scripts/rewrite-report.js` got two new defence layers. The system prompt now carries an absolute ban on the operator-dialogue phrases the rewrite LLM had been emitting when it ran short of facts ("I cannot write this section without fabricating specifics. To proceed, please supply the actual extracted values"). A new `detectRefusal()` post-call regex runs against every block; on hit the harness retries once with a hard reminder, and if the retry still leaks, the offending output is replaced with a neutral one-sentence client-facing fallback. The same pattern is applied to the banned-verdict word list (broken, failing, weakness, deficient, lacking) that mirrors the tone gate's banlist — `detectBannedVerdicts()` retries, then `substituteBannedVerdicts()` swaps each offending word with its neutral equivalent (broken → fragmented, failing → falling short of, weakness → opportunity, etc.). Gate 0b never sees a single drift sentence again. As a belt-and-braces backstop, `mx-audit/scripts/audit-fierce-critic.js` gained a deterministic `checkOperatorDialogue()` (Check Y2) that runs cheaper than the LLM critic.

### 2. Two-view Server Response Stability

The old performance check reported only the median of three cache-busted re-probes. On the neomwellbeing slowest page this produced "Acceptable but elevated" — but the crawler's cold-cache baseline on that page was 4087 ms, squarely in the Slow band. The cache-busted view was being fed by a regional CDN cache that the cache-buster query string did not penetrate (the third sample was 191 ms, a near-zero round trip on a 600 KB product page). The fix: `slowest-page-probe.js` now emits two verdicts per page — `firstVisitVerdict` from the crawler's cold-cache baseline (what a brand-new visitor pays) and `returningVisitorVerdict` from the cache-busted median (what someone with a warm cache experiences). The overall verdict is the worse of the two. `recommendation()` was rebranched so the headline matches the actual pattern (cold-only-slow, returning-only-slow, both-slow, all-clear). On neomwellbeing the new headline reads: "The slowest page returned slowly on its first cold-cache visit but is served acceptably under cache-busted re-probes — first-time visitors carry a cold-origin cost that the returning-visitor median hides." Cache version bumped to 2.

### 3. Readability refactors driven by the rendered PDF

Three sections that read clean as markdown were failing in the PDF render. The Server Response Stability section's five-column table truncated the long URL columns and let the right-hand verdict column overflow off the page edge — replaced with two prose paragraphs filled deterministically from `slowest-page-perf.json`. The Inline Code Duplicates table emitted 173 rows for a busy Shopify storefront, drowning the section — capped at the top 10 by occurrence count, with the full inventory (every fragment + hash + page URLs) sidecar'd to `<stem>-inline-code-duplicates.csv` next to the report. robots.txt with 164 directives bloated the discovery section — capped to first 10 lines inline, full copy sidecar'd to `<stem>-robots-txt.txt`. In both sidecar cases the template emits a named reference line so the reader knows where to find the full data — this becomes a general rule (every sidecar named in the report).

### 4. Cross-Page Consistency stopped flagging non-HTML pages

`/agents.md` was being counted as a page missing JSON-LD, missing canonical URL, etc. — but a markdown agent manifest is supposed to not carry those signals. `.md` was missing from `NON_HTML_EXTENSIONS` in `mx-audit/src/utils/reportUtils/llmReports.js`. Added. Cross-Page Consistency now shows 100% across the seven actual HTML pages instead of 88%/88%/92%. Same filter benefits every HTML-bound report that uses `isNonHtmlUrl()`.

### 5. PDF page numbers

The PDF render had been silently shipping without page numbers since the chrome engine landed — a comment in `mx.pdf.sh` claimed `@page` margin boxes were unsupported in Chrome and that a JavaScript post-processor would handle it, but the JavaScript never landed. Chrome has supported `@page @bottom-right { content: counter(page); }` since version 91. Added the rule; outdated comment replaced. Every page of every audit PDF now carries "Page N of M" in the footer.

### 6. Crawl cap delivers HTML-page count rather than URL count

`mx exec mx-audit --max-pages 10` against a site that publishes `/llms.txt`, `/llms-full.txt`, and `/agents.md` was delivering 7 HTML pages because the discovery files ate into the cap. `scripts/audit-pipeline.js` now widens the crawler-side cap by `NON_HTML_BUFFER = 2`, so the user-facing `--max-pages N` reliably yields N HTML content pages on most sites. Console output says explicitly: "10 HTML pages requested (crawl cap 12 to absorb non-HTML discovery files)".

### 7. Explanatory prose where it was missing

Server Response Stability got a leading paragraph explaining what cache-busted probing actually tests and why the first-visit / returning-visitor split matters. Provenance Gap got a "What we mean by provenance gap" definition plus a "What this section checks" enumeration of the five structural signals — the section had been jumping straight into the per-page findings table.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 4 (mx-audit, mx-crm, mx-outputs, hub pending) |
| Repositories touched | 4 |
| Files changed (source) | 16 |
| Source lines added | +1573 |
| Source lines removed | -208 |
| Audit pipeline scripts touched | 5 (rewrite-report, slowest-page-probe, audit-fierce-critic, infill-report, audit-pipeline) |
| Templates touched | 2 (web-audit-suite, ecommerce — both .md and .contract.json) |
| New deterministic placeholders | 3 (SLOWEST_PAGE_NARRATIVE, ROBOTS_TXT_SIDECAR_NOTE, INLINE_DUPLICATES_SIDECAR_NOTE) |
| Table-only placeholders retired | 9 (SLOWEST_PAGE_URL, SLOWEST_PAGE_BASELINE_MS, MEDIAN_PAGE_URL, etc.) |
| neomwellbeing audit reruns | 4 (Phase 3 failure → fix → rerun cycle) |
| PDF pages | 39 (was 51 before the table → prose + 10-row caps) |

---

## Why It Matters

The audit pipeline is the paid product. The afternoon's first neomwellbeing run reached the customer-deliverable stage with five repair findings — meaning a downstream LLM agent had to rewrite parts of the document before it could ship. Each repair burns API quota and adds latency, but more importantly each one represents a class of drift the pipeline was tolerating rather than preventing. Fixing them at source is a one-time investment that pays back on every audit going forward. The two-view performance refactor is a bigger win: it produces a finding ("first-time visitors carry a cold-origin cost the returning-visitor median hides") that previous audits couldn't even articulate. That kind of insight is what separates a useful audit report from a checklist deliverable.

---

## The Insight

When a downstream LLM gate reliably catches a class of drift, the fix belongs at source, not in tightening the gate. The natural reflex is to make the gate stricter — but the gate is already strict, that's why it catches the drift. The right move is to ask why the upstream generator (the rewrite LLM) is producing drift in the first place, and add a defence at that boundary. The pattern that worked: (1) name the offending phrase in the rewrite system prompt as an absolute ban with a defined fallback, (2) regex-detect on the API response, (3) retry once with a hard reminder, (4) on second leak, deterministically substitute or insert the fallback string. The gate stays as belt-and-braces, but the routine path no longer relies on it. Same logic applies to the data layer: when two stages compute the same fact from different sources, only one of them is right — compute once, thread the variable through every consumer.

---

## Decisions Made

- **Two-view performance is the new default.** The single cache-busted median is retained inside the sidecar JSON for backwards compatibility but the canonical verdict is the worse of first-visit and returning-visitor.
- **Every sidecar referenced from the report must be named in the prose.** Codified in `audit-gotchas.md` and the new dev-verify cog checks. Applies to robots.txt, inline-duplicates, console-errors, structured-data findings, and every future sidecar.
- **`--max-pages N` is a HTML-page target, not a URL-count target.** The 2-page buffer absorbs typical discovery files; large discovery-file estates need explicit `--max-pages` increases.
- **`@page` margin boxes work in Chrome.** Page numbers in the footer; further customisation (chapter name, run date) is now CSS-only.

---

## What Changed About Me

I learned to read warn-only findings as production signals, not as advisory output. The afternoon's neomwellbeing audit shipped with five warn-only repairs and a clean PDF — by every gate's reckoning, a pass. But the warn count itself was the signal: this audit reached deliverable status by being repaired, not by being generated correctly. Treating the warn list as a backlog of source-side bugs rather than a cleanup pass is the operating posture going forward. The retry-then-substitute pattern is the runtime expression of that posture: don't paper over drift downstream, prevent it upstream, and if it leaks anyway, fail safely with a deterministic fallback rather than escalate.

---

## What This Means for Investors

Every audit run is now cheaper and more reliable. The repair-final LLM pass — which was burning roughly 27,000 input + 25,000 output tokens to clean up drift — has progressively less work to do as the source-side guards bite. The two-view performance refactor unlocks a class of finding ("cold-origin cost hidden by warm-cache median") that competitive audit tools cannot articulate; it makes the report distinguishable. Page-numbered PDFs and named sidecars are minor in isolation but accumulate into the difference between a deliverable that reads as professional and one that reads as draft.

---

## Next Steps

- Run the same source-side guard pattern over the other LLM-call sites in the pipeline (`repair-report.js`, `repair-report-final.js`, `audit-llm-judgment.js`) so the upstream defence is symmetric across every LLM boundary.
- Monitor whether the `NON_HTML_BUFFER = 2` is enough across the next 5-10 customer audits; bump if discovery-file estates routinely run higher (some Shopify and WordPress stores publish 4-5 discovery files at root).
- Consider extending the two-view performance model to a third view ("uncached origin") that bypasses the regional CDN entirely via direct origin probing — would surface the 191-ms outlier as the CDN-warm artefact it is.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 8ac344d | mx-audit | Audit pipeline upstream fixes: refusals, banned verdicts, two-view perf |
| 76b6987 | mx-crm | Refresh neomwellbeing.com audit deliverables with two-view perf + sidecars |
| 8aa8916 | mx-outputs | Refresh neomwellbeing.com PDF + sidecars (two-view perf, page numbers) |
| _pending_ | hub | Audit pipeline upstream fixes + neomwellbeing artefact refresh + docs |
