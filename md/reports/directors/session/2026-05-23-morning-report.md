---
title: "Co-Directors Report — Multi-Zone Prose + Audit Pipeline Substrate Refactor"
description: "Two distinct streams: morning sponsor-pitch consolidation extended the cog spec; the rest of the morning closed eight audit-report bugs at their substrate and added five gates so the failures can't recur silently."
author: "Tom Cranstoun"
created: 2026-05-23
modified: 2026-05-23
version: "1.1"

type: report
tags: [directors-report, session, morning]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-23-morning-report.md
  purpose: "Two distinct streams: morning sponsor-pitch consolidation extended the cog spec; the rest of the morning closed eight audit-report bugs at their substrate and added five gates so the failures can't recur silently."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Multi-Zone Prose + Audit Pipeline Substrate Refactor"]

---

# Co-Directors Report — Multi-Zone Prose + Audit Pipeline Substrate Refactor

**Date:** 23 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Two distinct streams of work landed this morning. The first was an operational tidy of the sponsor-pitch documents that produced a small but structural extension to the cog spec: a single prose block may now carry multiple addressable sub-sections, lockstepped across the canon spec, the served public spec, the Gathering draft, Appendix M, and Protocols chapter 20. The second was an extended pass through the audit pipeline: eight client-visible bugs in the dkd.de deliverable were each traced to a substrate weakness and fixed at the source, a new deterministic gate (`check-report-coherence.js`) was built to catch the failure modes that caused them, and a five-part substrate refactor that followed eliminated three more classes of recurring bug (scoring duplication, parallel-burst WAF blocks, fierce-critic doing deterministic work inside an LLM call). A PreToolUse hook now surfaces the resulting architectural conventions at edit time so future contributors land on the same rails.

---

## What Was Done

### 1. Sponsor-pitch consolidation, one source two outputs

Two separate sponsor documents that had grown in parallel (`canonical-sponsor.md`, the formal briefing; `business-sponsor-pitch.md`, the peer-agency outbound cover) were folded into one source. The file was then renamed to `sponsor-pitch.cog.md` to reflect that it now carries more than one content zone. From that single source, two PDF targets render: the briefing-only attachment (cover stripped, 335K) and the full outbound pitch (cover plus briefing, 446K). Both rendered to the previously published filenames so external links continue to resolve. Both pass EAA Level 2 conformance.

### 2. Cog spec extension, named sub-sections within the prose block

The cog spec previously said the prose block was singular and implicit. That remains true. What is new is a convention for naming addressable sub-sections inside it, using HTML-comment markers of the form `<!-- begin: <id> --> ... <!-- end: <id> -->`. Readers and renderers that understand the convention may include, exclude, or extract a sub-section by id; readers that do not understand it render the contained content as part of the body. The pattern degrades gracefully on every existing markdown tool. Conformance: sub-sections do not nest; each id appears at most once per cog; the prose block remains the single implicit block (sub-sections do not appear in `blocks`).

### 3. Spec edit lockstepped across five surfaces

The canon spec at `mx-canon/mx-the-gathering/specifications/cog-unified-spec.cog.md`, the public served copy at `mx-outputs/mx-site/drafts/cog-spec.v1.md`, the Gathering draft at `mx-shared-gathering/draft-cogs.md`, Appendix M (`appendix-m-index-of-metadata.md`), and Protocols chapter 20 (`chapter-20-cogs-and-reginald.md`) all carry the same definition, the same conformance rules, and worked examples appropriate to each audience. The Gathering draft and the served spec use the formal MUST / MAY conformance language; the manuscripts use narrative prose with generic motivating examples (sponsor pitch, product page with internal pricing memo, policy document with versioned changelog) so the chapter reads as architectural exposition rather than as repo annotation.

### 4. Renderer wiring for the new pattern

A small section-strip preprocessor was added at `scripts/lib/pdf/strip-section.cjs`. The unified PDF orchestrator (`scripts/bin/mx.pdf.sh`) gained two new flags: `--strip-section <id>` removes a sub-section before render, and `--all-targets` iterates every entry in a cog's `mx.generate.targets[]` array, recursing once per target. The dispatcher (`scripts/lib/pdf/dispatch.cjs`) and frontmatter reader (`scripts/lib/pdf/read-frontmatter.cjs`) were extended to surface the new shape. The single existing `output:` path remains supported, so no other cogs needed migration.

### 5. Audit pipeline: eight bugs fixed at their substrate

A dkd.de audit shipped a PDF carrying eight contradictions a client would notice on first read. Each was traced to its source rather than papered over:

- **Truncation Risk verdict claimed "12 pages exceed the 250 KB threshold"** when the largest page was 232 KB. The narrative was pinned to one of five possible failure conditions; rewrote it to name the actual trigger (typically content offset past 50 KB, not size).
- **Sitemap.xml table leaked five `[SITEMAP_*]` placeholders.** The handler returned `{}` when `discovery.json#sitemapQuality` was missing. Made it self-sufficient: when the upstream field is null, the handler now parses `cache/sitemap_urls.json` directly.
- **Appendix A's accessibility column read 0 for every page** while the headline said 90/100. The per-page formula was `100 - issueCount*10` (raw Pa11y instances); the aggregate used distinct-WCAG-code clustering. Two formulas, one truth — extracted `scoreAccessibilityFromIssues()` and routed both sites through it.
- **Server Response Stability re-probes returned 503/429** because three cache-busted GETs fired 500 ms apart tripped the dkd.de WAF. Switched to serial firing with 2.5 s jitter and a 10 s 429/503 retry; added a `wafBlocked: true` flag.
- **`[N] links in total` placeholder leaked into prose** because the regex required an em-dash prefix that the template no longer carried. Anchored the new regex on `[N]` itself, not the surrounding punctuation.
- **Error Page Test rows hardcoded "Not assessed in this audit"** for MX governance tags and Schema.org despite the data being present in the JSON sidecar. Wired the handler to read the existing `hasMxTags` / `hasSchemaOrg` fields.
- **Image inventory said "115 images, 37 PNG + 37 JPEG"** with 41 images unaccounted for. Added the `[OTHER_FORMAT_COUNT]` placeholder + template clause; the per-format counts now sum to the headline total.
- **Inline byte numbers contradicted across sections** (Pipeline Survivability said "Largest inline CSS: 2965 B", Inline Code Duplicates listed a 4288 B fragment). Both were correct in isolation; renamed the Inline Code Duplicates column header to "Bytes per fragment" and qualified the Pipeline Survivability metric as "Largest single-page inline block".

### 6. New deterministic gate: `check-report-coherence.js`

A last-mile gate that reads the final markdown plus every JSON sidecar in the results dir and runs eight cross-section checks: single-letter and uppercase placeholder leaks; numeric internal contradictions ("N pages exceed threshold" verified against the underlying CSV); per-page vs aggregate impossibility (Appendix A average vs headline); WAF-blocked probe surfacing (any 429/503 sidecar entry); image format inventory closure; cross-section scope qualifier consistency; Executive Summary vs Audit Scores score equality. Findings record to `audit_errors.json` and surface in the PDF's error section via the always-produce-PDF mechanism. Wired into the gate suite as Gate 4b/6 between the existing gates and PDF generation.

### 7. Substrate refactor: eliminate the bug classes themselves

After the eight fixes shipped, an architectural investigation surfaced three substrate weaknesses producing recurring bugs: regex-anchored infill (191 sites), scoring duplication (per-page vs aggregate using different formulas), and parallel-burst external fetches (the same WAF bug in three probes). A four-phase plan landed in lockstep:

- **Phase A — Scoring SSOT.** Per-page Served/Rendered now read from the array the aggregate path already computes (with CSV fallback); `scoreAccessibilityFromIssues()` is the sole accessibility formula; SSOT citation comments on every scorer; new `check-scorer-imports.js` lint gate forbids `bin/` from importing scorer functions.
- **Phase B — Shared `executeRateLimitedProbe()`.** Single helper in `src/utils/networkUtils.js`: serial firing, 10 s 429/503 backoff, Puppeteer fallback for fingerprint-blocked requests, uniform `wafBlocked` flag on output. Migrated four probes (`agent-access-test`, `error-page-test`, `check-wellknown`, `check-ai-usage`); the latter two converted from `Promise.all` to serial walk. The pattern is now mandatory; `bin/` may not call `axios.get()` directly.
- **Phase C — Fierce-critic deterministic extraction.** Twelve regex/CSV checks that lived inside the LLM-based fierce-critic moved out. Six are now dedicated gates (`check-image-claims`, `check-pa11y-consistency`, `check-table-logic`, `check-marker-reachability`, `check-platform-claims`, `check-url-dedup`); six prose-leak pattern lists merged into the coherence gate via a shared `prose-leak-patterns.js`. Fierce-critic's main loop is now half its previous length and runs only the seven qualitative LLM zones the rubric was designed for.
- **Phase D — Mustache slot binding.** Deferred to a focused PR; the plan documents 191 regex-replace sites + 299 placeholder tokens + 6 expand-pattern handlers + a new build-time contract gate.

### 8. Cross-cutting: trend metric + cog release criterion + edit-time architecture hook

A per-host `audit-data/domains/<hostSlug>/.history.jsonl` now records one line per audit run summarising blocker / warning counts by category. Lets release reviews see at a glance whether a host is trending cleaner over time. The `mx-audit` cog's `summary` step now declares an explicit release criterion: any blocker-severity entry in `audit_errors.json` disqualifies a clean delivery, even though the PDF still ships (always-produce-PDF holds). A new PreToolUse hook (`.claude/hooks/pre-write-template-fill-arch.sh`) detects edits to any of the template-fill solution's ten distinct surfaces (template, contract, handler, infill-orchestrator, scorer, probe-helper, probe, gate, fierce-critic, prose-patterns) and prints the relevant architectural rules to the user at edit time. The hook is advisory only — the actual enforcement is the lint suite plus the gates — but it surfaces the conventions before the edit lands rather than after CI fails.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (this session) | 5 (2 hub already, 1 mx-outputs already + this session pending, 1 mx-shared-gathering, 1 mx-outputs audit deliverables) |
| Repositories touched | 3 |
| Surfaces lockstepped (spec edit) | 5 (canon spec, served spec, Gathering draft, Appendix M, Protocols ch20) |
| Source files consolidated | 2 → 1 (sponsor-pitch.cog.md) |
| PDF artefacts produced from one source | 2 (briefing-only 335K, full pitch 446K) |
| Renderer flags added | 2 (`--strip-section`, `--all-targets`) |
| Audit bugs traced to substrate + fixed at source | 8 |
| New deterministic gates added | 7 (`check-report-coherence` + 6 extracted from fierce-critic) |
| Audit probes migrated to shared rate-limited helper | 4 (agent-access, error-page, check-wellknown, check-ai-usage) |
| Scoring sites de-duplicated | 3 (Served/Rendered re-call removed; two accessibility formulas collapsed to one) |
| Fierce-critic main loop call sites removed | 12 (moved to dedicated gates or coherence gate) |
| PreToolUse hooks added | 1 (`pre-write-template-fill-arch.sh`) |
| Cog registry total | 222 cogs (sponsor-pitch newly registered) |

---

## Why It Matters

The spec extension is operationally invisible until you need it, then it removes a class of duplication the file system would otherwise force. Any cog whose body serves two audiences (a public summary and an internal annex; a covering letter and a formal briefing; a customer-facing pricing page and an internal pricing memo) can now sit in one source with one set of edits. The duplication problem this solves shows up everywhere prose is reused with small differences; the spec extension means we never need a stack of near-identical files diverging slowly. It also means the cog format covers a class of writing patterns Word, Google Docs, and Notion address with comments and suggested edits; we now address it with structure that survives every transport and every reader.

The audit substrate refactor matters for a different reason. The eight bugs that triggered it were not coincidences — each was a symptom of a pattern the pipeline kept producing: regex-replace infill that broke on template edge-shifts, scorers invoked from multiple sites with different formulas, probes that fired bursts and tripped per-IP WAF rate limits, an LLM-based critic doing deterministic work that belonged in a free fast gate. Fixing the eight bugs was necessary but not sufficient; fixing the substrate is what stops the next eight from appearing on the next audit. The new coherence gate plus the six extracted gates plus the edit-time architecture hook together close the loop: future contributions land on the same rails, the deterministic gates catch what slips through, and the always-produce-PDF rule means even a broken audit ships a PDF with the failure named on the front page.

---

## The Insight

A small operational cleanup, executed end to end, produces structural improvement that an explicit spec-design session would not have produced as cleanly. The named sub-section pattern was authored to solve a specific consolidation problem (sponsor cover and briefing), then generalised once we saw it work. That order matters: the spec edit lands with a worked reference implementation already deployed, with PDFs already shipping, with conformance rules already tested against a real document. A spec written first and implemented later carries hypothetical conformance rules; this one carries verified ones.

The audit refactor reinforced a separate insight: when a system produces the same class of bug repeatedly, the cure is making that class structurally impossible, not catching it harder. The substrate refactor closed eight bugs at the source AND it shrank the LLM-based fierce-critic by half (the deterministic work that belonged in dedicated gates was costing us API tokens). The same architectural move improved correctness, speed, and cost simultaneously. The pattern to look for: any LLM call that includes "check that N = M" or "verify the table doesn't say X while showing Y" is doing work a regex would do faster, cheaper, and more reliably. The LLM stays for what only an LLM can do — qualitative reading of voice, framing, hedge patterns.

---

## Decisions Made

- Multi-zone prose lockstepped to full coverage (canon, served, Gathering draft, Appendix M, Protocols ch20) rather than canon-only with a follow-up. The cost of the wider edit was small; the cost of letting the public spec drift from canon would have been a credibility hit on the next public read.
- Renamed `canonical-sponsor.md` to `sponsor-pitch.cog.md`. The `canonical` adjective implied a single canonical artefact; the file now carries two, so the name was repurposed to name the cog by what it is (a sponsor pitch), not by which of its zones is the canonical attachment.
- For the agent-access test specifically, no Puppeteer fallback. The test's purpose is "what does the site send to ClaudeBot/1.0?" — disguising as Chrome would falsify the deliverable. Three-valued userAgent semantics in the shared probe helper (undefined → default, "" → strip header, value → set) preserves the "Plain request (no UA)" control row.
- N/A → 0% display in the Cross-Page Consistency table. Earlier sessions showed "N/A" for patterns absent everywhere (MX governance tags, llms.txt link, Skip link, code examples). Readers interpret N/A as "not measured" when the truth is "measured and found absent". Switched to explicit "0%" with "N missing" counts; the overall consistency score now reflects the honest measurement (62% on dkd.de, down from an inflated 89% that skipped the N/A rows).
- Mustache slot binding migration deferred to a focused PR. Highest leverage refactor in the substrate plan but largest blast radius (191 sites, 299 tokens, one template that every audit consumes). Doing it inside this session would have dragged unrelated risk into the substrate-refactor commits. The plan documents the migration path; the coexistence + build-time contract gate are scoped for a single focused session.
- The architectural reminder hook is advisory, not blocking. The deterministic gates (lint:templates + the pipeline gate suite) are the enforcement; the hook's job is to surface the conventions BEFORE the edit lands rather than after CI fails. Blocking at edit time would trip on legitimate refactors of the hook's own surfaces.

---

## Open Questions

- The Gathering draft change needs a `/mx-gathering-submit` round-trip to be tagged for community review on Stream. Edited locally but not yet submitted. When does that batch go out?
- Phase D (Mustache slot binding) is documented but unscheduled. Largest single refactor remaining on the audit pipeline; landing it removes the regex-anchored infill bug class entirely. Worth a focused session this week or next?

---

## Next Steps

- Submit the Gathering draft change to Stream via `/mx-gathering-submit` so the multi-zone prose convention enters community review.
- Sweep the existing canon and outputs for other cogs that could benefit from multi-zone consolidation. Likely candidates: any doc with a cover-letter / attachment pattern, any product page with an internal pricing memo, any policy doc with a versioned annex.
- Schedule the Mustache slot binding migration (substrate refactor Phase D). Plan already documents the 191 regex-replace sites + 299 token contract + 6 expand-pattern handlers + the build-time contract gate.
- First-run-on-a-fresh-host check for the trend metric: confirm `.history.jsonl` writes correctly on a host that has never been audited before (today's verification was on dkd.de-de which already had an empty errors file).

---

## Commit Log

| Hash | Description |
|------|-------------|
| 27e9079 | mx-shared-gathering: draft-cogs formalise named sub-sections within the prose block |
| 33633d5 | mx-outputs: sponsor pitch consolidation + regenerated PDFs |
| d85eb6c | mx-outputs: dkd.de-de audit deliverables for 2026-05-22 + 2026-05-23 runs |
| d65a165 | Hub: sponsor-pitch consolidation + multi-zone prose lands in cog spec |
| 3bcb677 | Hub: docs/CHANGELOG + REMINDERS refresh for sponsor-pitch consolidation |
| _pending_ | Hub: eight-bug fix + coherence gate + substrate refactor + edit-time hook (lands in Step 3) |
