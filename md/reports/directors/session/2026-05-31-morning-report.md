---
title: "Co-Directors Report — ABOUT quartet; stale-info + drift gates; cog-spec lockstep; mx-serve cog; MX Readiness browser extension"
description: "Morning session covering three work threads: (1) the four ABOUT-* canonical biographies got declared PDF destinations and the PDF orchestrator learned to self-heal missing mx.generate blocks; (2) a repo-wide stale-information scan ran end-to-end, the audit-template drift gate was fixed, a shared drift-check library was extracted, and a manuscript drift checker landed in the test gate; (3) the cog spec sources were brought into lockstep behind a new pre-push Gate 13, the minimal scripted/hybrid action cog mx-serve shipped alongside a zero-dep local preview server, and an MX Readiness Inspector browser extension landed that grades any page on MX-readiness using whichever on-device model the browser already has (Chrome Gemini Nano / Edge Phi-Silica / local Ollama)."
author: "Tom Cranstoun"
created: 2026-05-31
modified: 2026-05-31
version: "1.2"

type: report
tags: [directors-report, session, morning]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-31-morning-report.md
  purpose: "Morning session covering three work threads: (1) the four ABOUT-* canonical biographies got declared PDF destinations and the PDF orchestrator learned to self-heal missing mx.generate blocks; (2) a repo-wide stale-information scan ran end-to-end, the audit-template drift gate was fixed, a shared drift-check library was extracted, and a manuscript drift checker landed in the test gate; (3) the cog spec sources were brought into lockstep behind a new pre-push Gate 13, the minimal scripted/hybrid action cog mx-serve shipped alongside a zero-dep local preview server, and an MX Readiness Inspector browser extension landed that grades any page on MX-readiness using whichever on-device model the browser already has (Chrome Gemini Nano / Edge Phi-Silica / local Ollama)."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - ABOUT quartet; stale-info + drift gates; cog-spec lockstep; mx-serve cog; MX Readiness browser extension"]

---

# Co-Directors Report — ABOUT quartet shipped; PDF script self-heals; stale-info scan run; drift-checker infrastructure landed

**Date:** 31 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Three threads ran this morning. First, the four canonical biographies (Tom, Salva, Scott, the new Doğu) now declare their own PDF destinations in letter format, and the PDF orchestrator auto-injects a minimal `mx.generate` block into any source markdown that lacks one. Second, a repo-wide stale-information sweep ran end-to-end, producing an alert report plus a 6,084-row scanner CSV, compressing MEMORY.md back under its cap, backfilling missing canonicalUri fields, and fixing the audit-template em-dash gate plus four drifting sections between web and ecommerce templates. The same session then extracted a shared drift-check library, wired up a new manuscript drift checker, surfaced six drifting anchors between Handbook v2 ch00 and Protocols ch00, aligned three of them and excluded three as intentional divergence. Third, the cog spec sources got a new pre-push gate that keeps the open standard, the v1 published spec, the public HTML explainer, and the authoring guide in lockstep behind a shared sentinel, with a checker and a bumper script wired into npm test and the pre-push hook; the minimal scripted/hybrid action cog mx-serve shipped alongside a zero-dep local preview server, fixing a latent bash 3.2 empty-array bug in mx-exec on the way through; and a Manifest V3 MX Readiness Inspector browser extension landed that grades any page on MX-readiness using whichever on-device language model the browser already has (Chrome Gemini Nano, Edge Phi-Silica, or local Ollama as a universal fallback), shipped with a companion blog draft and a thorough README on the CORS gotcha every first-time Ollama integrator hits.

---

## What Was Done

### 1. ABOUT-DOGU.md drafted from internal sources

Yunus Doğu Abaris is The Gathering's Software Engineer, Chair of the W3C AI Content Disclosure Community Group, and named Technical Lead and Standards Editor on the Reginald CCE grant. He has been carrying public-standing roles in every external-facing document we file (the CCE Letter of Support, the visa reference letter, the contractor agreement with The Gathering Administration Ltd) without a canonical single-source-of-truth biography. The new ABOUT-DOGU.md closes that gap. Public-safe by construction: residential address, phone, day rate, and lastContact stay in `mx-crm/contacts/dogu-abaris/`. Voice is third-person to match Scott; voice swap to first-person is one edit if Doğu prefers to take the pen.

### 2. ABOUT-* trio extended with declared PDF destinations

Tom, Salva, and Scott's biographies each gained an `mx.generate` block plus `x-mx-pdfDoctype: letter` so the regeneration command and destination are declared in the source. All four ABOUT-* PDFs now render as `doctype: letter` (no cover, no TOC, letterhead preprocessor), ship with their AI + deterministic provenance sidecar pair, and classify MX Compatible.

### 3. PDF orchestrator self-heals missing mx.generate

Added `inject_mx_generate_into_source()` to `mx-reginald/audit/scripts/bin/audit-pdf.sh`. When the script encounters a source markdown without an `mx.generate` block, it now patches the source itself rather than only inferring the destination silently at runtime. Idempotent, skips non-writable files and non-frontmatter files. Future first-time renders leave behind a declared destination instead of a guess.

### 4. Stale-information sweep — alert report and scanner

A deterministic broken-reference scanner ([`scripts/scan-broken-refs.cjs`](../../../../../scripts/scan-broken-refs.cjs), 269 lines) walks every markdown file in the repo (excluding `allaboutv2/`, `datalake/manuscripts/`, `mx-shared-gathering/`, `tg-community/`), resolves every link and bare-backtick path, and classifies by severity. End state: 6,084 findings total, 29 MUST-FIX in always-on rulebooks, full enumeration in [`mx-outputs/audit/scan-broken-refs-2026-05-31.csv`](../../../audit/scan-broken-refs-2026-05-31.csv), executive summary plus per-directory tables in [`mx-outputs/md/reports/scan-stale-information-2026-05-31.md`](../../scan-stale-information-2026-05-31.md). Acted on the high-confidence findings: stripped dated narrative from CLAUDE.md (lines 178, 212) and SOUL.md (lines 195, 620), fixed broken refs in REMINDERS.md (geo-and-mx → geo-vs-mx, peer-scores path, repair-report.js path, simething file:// URL), aligned Maxine sibling-doc refs across simple-explanation, architecture, vision, valuation-model, SOUL plus ssot/business-case/SOUL.md, swept `npm run validate` → `npm run validate:mx` in skills/maxine, removed `currently` framing from gathering TODO and conversation-reconciliation paper, archived dated commitment in adobe-semrush-investor-note.md.

### 5. MEMORY.md compressed and canonicalUri backfilled

Agent-local MEMORY.md compressed 29,860 → 18,118 bytes (under the 24,985-byte cap with ~6.8 KB headroom). All ~80 index entries preserved; detail follows the link to each topic file as the file's own design rule demands. Three canon papers backfilled with canonicalUri fields: `mx-canon/ssot/papers/geo-vs-mx.md`, `mx-eaa-exec-brief.md`, `wcag-to-mx-mapping.md`. Inventory of the remaining 47 mx-canon files missing canonicalUri raised as a REMINDERS item for the hook-scope decision (folder metadata, README navigation files, reference-implementations demos).

### 6. Audit-template em-dash gate fix + drift alignment

The em-dash gate at `mx-reginald/audit/scripts/check-template-voice.js` was false-positiving on nested-bullet markers (`^  - Item`). Tightened the regex from `/  - /` to `/\S.*  - /` so the substitute pattern only matches mid-prose, not line-start bullets. Verified with five test cases. Separately, four sections in the ecommerce template had drifted from the web template (the `## Marker Reachability` HTML comment carried an em-dash + line break instead of a hyphen; three tables had drifted column structures). Aligned all four to the web template form. Audit gate now passes cleanly.

### 7. Shared drift-check library + manuscript drift gate

Extracted the diff/extract/normalise core from the audit-template drift checker into `scripts/lib/drift-check.js` (184 lines, four pure functions plus a `runDriftCheck` orchestrator that accepts `{files, anchors, label, diffLimit}` and returns 0/1). The existing `mx-reginald/audit/scripts/check-template-drift.js` refactored to import from the new lib — same behaviour, no output regression, file shrunk from ~180 to ~75 lines.

Built a new manuscript drift checker at `scripts/check-manuscript-drift.js` (89 lines) covering Handbook v2 chapter 00 against Protocols chapter 00. First run surfaced six drifting anchors: one stat error (Handbook said "spend 50% longer on sites" against an Adobe source footnote that says "33% less likely to bounce"), one point-5 expansion in the Eight Reasons section, one Reginald-paragraph and CogNovaMX-tagline drift in the Measure section, plus three sections with structural divergence (Three structural failures has Protocols-only depth on the GEO contrast, two-pillars argument, and UNESCO ethics; What MX-ready and Audit carry book-internal Appendix-I citation patterns that legitimately differ between the two volumes). Aligned the three correctable cases (Handbook → Protocols), excluded the three intentional divergences from the registry with inline rationale comments. Wired into the top-level `npm run test` between `check-audit-architecture` and `check-cog-spec-sync`.

End state: 10 anchors in the manuscript-pair registry, all OK. 7 anchors in the audit-template pair registry, all OK.

### 8. Watching the Machines column — voice fixes across the cluster

Audit-driven surgical pass across the six draft files of the Watching the Machines column. Two-agent audit catalogued the AI tells; surgical edits collapsed them where the audit pointed and left the strong sections alone. Patterns removed: generic heading scaffolds ("What you will find here", "How it works", "Where your own content stands"), "the discipline" repeated five times as an abstract central concept (reduced to one specific use), meta-sentences that restated the previous sentence, pre-announced counts ("Three of the principles…"), negation-pivots across sentence breaks ("The detail is not X. It is Y."), sentence-initial "And", parallel "The X…" bullet openers, and one "which is" copula hedge. Calibration anchor was [`a-pdf-that-can-prove-itself.html`](../../../mx-site/blog/a-pdf-that-can-prove-itself.html). Verified clean: zero hits from the new humanizer scans against the post-edit drafts, zero false positives against the calibration anchor.

### 9. Humanizer scans — four structural detectors + integration

The rules behind the column's voice issues were already named in writing-style.cog.md §3, §5, §6 and echoed in the html-writer skill's polish-pass, but no scan caught them. New deterministic detectors close the gap: generic-heading-scaffold matcher, pre-announced-count regex (writing-style.cog.md §3), meta-sentence echo (adjacent sentences sharing the first five words plus opener patterns like "Each entry…" / "Every entry…"), abstract-noun repetition (counts ten tracked abstract category nouns across the file, scales thresholds with word count). Wired into the html-writer polish pass as mandatory blocking checks, and into `npm run test` between `check-audit-architecture` and `test-scoring-methodology-fresh`. One-line clarification added to the html-writer skill that the pass runs before HTML is written to `blog/drafts/`, not only before promotion — the class of artificiality these scans catch cannot reach commit any more.

### 10. Cog spec lockstep — Gate 13 + sync sentinels across four sources

The cog specification is described in four hand-authored files at different abstraction levels (the open standard `draft-cogs.md`, the published v1 spec `cog-spec.v1.md`, the public HTML explainer `cog.html`, and the authoring guide `how-to-write-a-cog.cog.md`). The information is the same; the language is tuned to each audience. The drift risk is real: one gets edited, the others fall behind. New lockstep: each file carries an HTML-comment sentinel `<!-- cog-spec-sync: <id> -->`; all four IDs MUST match. `scripts/check-cog-spec-sync.cjs` verifies on demand and in `npm run test`; `scripts/bump-cog-spec-sync.cjs` rewrites every sentinel to a shared id (auto-picks today's date + next free suffix, accepts an explicit id, supports `--dry-run`). Wired into pre-push as Gate 13, firing only when a push touches a file in the group. Bypass via `MX_SKIP_COGSPEC=1`. Same-session use: the deterministic vs inference-driven axis was named explicitly in draft-cogs.md §6.5.2, how-to-write-a-cog Step 0, cog.html, and cog-spec.v1.md — bumped together with the new bump helper.

### 11. mx-serve action cog + serve-site.cjs — minimal scripted/hybrid action cog as worked example

A new action cog at [`scripts/cogs/mx-serve.cog.md`](../../../../../scripts/cogs/mx-serve.cog.md) wraps a 250-line zero-dependency Node HTTP server ([`scripts/serve-site.cjs`](../../../../../scripts/serve-site.cjs)) that serves any directory in the repo for local browser testing. Bound to `127.0.0.1` (never on the LAN), `Cache-Control: no-store` for instant reload, auto-port-increment on EADDRINUSE, MIME types for the full set of mx-site formats. The cog supports blank invocation (defaults to mx-outputs/mx-site on 8081 with browser open) plus an optional URL-path first argument so the LLM caller can pass the contextually relevant URL from chat — the `actionType: hybrid` declaration records that the path-resolution step is the inference and the serve itself is deterministic. Latent bash 3.2 empty-array bug in `mx-exec` (which fired on any action cog called blank under `set -u`) fixed with the canonical `"${args[@]+"${args[@]}"}"` defensive expansion. Exposed as `npm run serve:site` / `npm run serve:site:open` for direct invocation outside the cog.

### 12. MX Readiness Inspector browser extension + companion blog draft

A Manifest V3 browser extension at [`mx-outputs/extensions/mx-readiness/`](../../../extensions/mx-readiness/) that inspects any web page for the signals MX cares about and asks an on-device language model for a brief summary. Eight finding sections mirroring the audit pipeline's scoring inputs: MX governance triplet + magic-header, WICG ai-disclosure + IPTC digitalSourceType, discovery links (rel="llms-txt", rel="ai-usage", canonical match, sitemap), origin-level probes (`/llms.txt`, `/llms-full.txt`, `/robots.txt` with AI-agent-disallow parsing, `/AI-USAGE.json` with JSON-shape validation, `/agent-card.json`, `/sitemap.xml`), Schema.org JSON-LD coverage, Open Graph + Twitter Card completeness, accessibility quick wins (lang, skip link, alt coverage, form labels), provenance markers (embedded source-YAML, XMP payload references). Equal-weight score; pass/warn/fail/info per finding. On-device model chain feature-detects four browser surfaces (`self.LanguageModel`, `self.ai.languageModel`, `self.ai.assistant`, `self.chrome.aiOriginTrial.languageModel`) and falls through to local Ollama via `http://localhost:11434` as a universal fallback when no browser API is exposed. Force-Ollama button skips the browser-API chain (useful for regulated-industries policy or model comparison); Copy-results button writes the full URL + score + summary + per-section findings to the clipboard. README walks the CORS gotcha in full: why Ollama enforces an origin allowlist, the default allowlist, why the extension's `chrome-extension://<id>` origin fails it, the wildcard vs scoped `OLLAMA_ORIGINS` fix, the threat model trade-off, and three `curl` diagnostics. Companion blog draft at [`mx-outputs/mx-site/blog/drafts/watching-with-the-machines.html`](../../../mx-site/blog/drafts/watching-with-the-machines.html) ties the extension back to the Silent Install argument: the same model Chrome installed without asking, used here for the work the column argues for, no source code in the prose. Mid-stream cleanup pass: column-wide "cluster" → "series" rename (reader-friendly word for a sequence of posts), hardcoded post counts dropped in favour of numeric-agnostic phrasing (so the column can grow without making the metadata stale), and the three-sentence prompt rule loosened to "brief" across the popup, the README, and the blog draft.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 14 hub + 6 mx-outputs + 1 mx-shared-gathering |
| Repositories | 3 (hub + mx-outputs + mx-shared-gathering) |
| New canonical biographies | 1 (ABOUT-DOGU.md) |
| ABOUT-* PDFs rendered (letter doctype) | 4 |
| Provenance sidecars produced | 8 (4 AI + 4 deterministic) |
| New scripts (second thread) | 3 (scan-broken-refs.cjs, lib/drift-check.js, check-manuscript-drift.js) |
| New scripts (third thread) | 4 (serve-site.cjs, check-cog-spec-sync.cjs, bump-cog-spec-sync.cjs, plus the extension's content.js / background.js / popup.js) |
| Refactor (audit template drift gate) | 1 (delegates to shared lib, ~100 lines saved) |
| Stale-info scanner findings | 6,084 (29 MUST-FIX, 2,727 HIGH, 681 MEDIUM, 2,649 LOW) |
| Files fixed in stale-info sweep | 17 markdown files (rulebooks, papers, maxine docs, audit template) |
| MEMORY.md size | 18,118 bytes (was 29,860; cap 24,985) |
| Manuscript pair anchors locked in | 10 (out of 13 candidates; 3 excluded as intentional divergence) |
| Audit template anchors | 7 (unchanged; gate now passes cleanly) |
| Watching the Machines drafts edited | 6 (column-wide series rename + AI-tell surgical pass + numeric-agnostic phrasing) |
| New humanizer detectors | 4 (generic-heading, pre-announced-count, meta-sentence, abstract-noun-repetition) |
| Cog spec sources brought into lockstep | 4 (draft-cogs.md, cog-spec.v1.md, cog.html, how-to-write-a-cog.cog.md) |
| Pre-push gates | +1 (Gate 13 cog-spec-sync) |
| Action cogs shipped | 1 (mx-serve, minimal scripted/hybrid worked example) |
| Browser extensions shipped | 1 (MX Readiness Inspector, MV3, dependency-free) |
| Companion blog drafts | 1 (watching-with-the-machines.html) |
| Indexes regenerated | 5 (routing-registry, .aspell-mx.pws, mx-reginald/index, definitions-index, mx-outputs README) |

---

## Why It Matters

The first thread (ABOUT-*) gave every canonical biography a declared PDF destination and taught the renderer to self-heal first-time files. The second thread did the heavier structural work: a deterministic scanner for stale references that runs in 1.4 seconds across 1,234 files and can be wired into CI; a shared library for any future lockstep gate; the manuscript lockstep gate itself, now live and proving its worth on the first run (one stat error caught against an Adobe source). The drift-check library generalises — pitch trio, future book pairs, any parallel content the project owns gets the same shape for ~30 lines of config.

The third thread shipped two pieces of product infrastructure plus a writing-quality investment. The cog spec lockstep matters for the same reason every other lockstep gate matters: the open standard, the published spec, the public explainer, and the authoring guide all describe the same axis with the same language, in step, every time one of them moves. The mx-serve cog is the minimal worked example of a hybrid action cog and the local preview path every other cog author can copy. The browser extension is a productisable surface the audit pipeline never had: ten seconds on a page, deterministic signals plus an on-device narrative, no client data crossing a vendor sandbox by design, with the fallback to local Ollama making it work on every machine regardless of which on-device model the browser carries. The blog companion ties the extension back to the column's argument with the right irony — the model Chrome installed without asking, used here for the work the column says the model should have been used for. The Watching the Machines voice fixes and the new humanizer detectors compound: every future blog post on the site goes through scans that catch the four structural patterns that almost ran on this column. Three pieces of infrastructure plus a calibrated writing-quality gate, shipped in one morning, all of which compound across every future session.

---

## Next Steps

- Send ABOUT-DOGU.md to Doğu for sign-off before it is cited in any public surface (LinkedIn, grant attachments, registry entry).
- Decide whether the third-person voice on ABOUT-DOGU.md should stay or whether Doğu takes the pen (matching Salva's first-person).
- Watch the next first-time PDF render to confirm the auto-injection works on a wild file.
- Decide canonicalUri hook scope for the 47 remaining `mx-canon/` files missing the field (folder-metadata `.mx.yaml.md`, navigation READMEs, reference-implementation demos). Documented as a REMINDERS item.
- Fix the validation-report generator path-resolution bug (42 broken refs uniformly in `mx-config/validation-reports/*.md` reference `mx-validator.js` instead of `.cjs`). Documented as a REMINDERS item.
- Decide fate of `mx-canon/ssot/business-case/SOUL.md` (stub indexing four subdirectories that were never built out). Documented as a REMINDERS item.
- When the pitch trio's per-file additions get restructured under sub-headings, the same drift-check library can extend to cover them with ~30 lines of config.
- Promote watching-with-the-machines.html from `blog/drafts/` to `blog/` (update canonical, robots, add card to blog/index.html) when the extension is ready for outward-facing reference.
- Decide whether to add icons for the MX Readiness Inspector beyond the placeholder solid-teal PNGs before any wider distribution.
- Watch the cog-spec lockstep Gate 13 catch its first drift across a real-world edit, confirming the bumper UX works end-to-end the first time someone hits it outside the test fixture.
- Consider an mx-readiness extension for Firefox / Safari following the same `extensions/mx-readiness-<browser>/` pattern, when there is a need.
- Decide whether to add OG / promotional imagery for the new blog post when promoted.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 30599fdb (hub) | Add ABOUT-DOGU + letter-doctype mx.generate across ABOUT-* trio; PDF script self-heals |
| 095fade6 (hub) | CHANGELOG 2.90: ABOUT-* trio extended to quartet; PDF script self-heals mx.generate |
| 766ef65e (hub) | Bump mx-outputs: regenerate README index for 4 ABOUT-* PDFs + morning report |
| 0a700850 (hub) | Add mx.purpose, mx.stability, mx.x-mx-contextProvides to ABOUT-* trio + DOGU |
| a1c0d82d (hub) | Bump mx-outputs: regen ABOUT-* PDFs with full mx field set |
| 28094d7 (mx-outputs) | Add ABOUT-* PDFs in letter format (Tom, Salva, Scott, Dogu) |
| 635499e (mx-outputs) | Stale-info scan: alert report + full-enumeration CSV |
| 5d22c461 (hub) | Stale-info scan: scanner + alert deliverables + 17 hub fixes |
| ca1ed899 (hub) | Audit template em-dash gate: stop flagging nested bullets + align ecom |
| a8370709 (hub) | Drift-check infrastructure: shared lib + manuscript gate + audit refactor |
| 08946b9a (hub) | Bump mx-outputs + regenerated indexes for stale-info + drift work |
| 6aeca620 (hub) | REMINDERS: drop em-dash-gate item (gate fixed in ca1ed899) |
| 6a475951 (hub) | CHANGELOG 2.91: stale-info scan, em-dash gate fix, drift-check lib, manuscript gate |
| 750248c5 (hub) | LEARNINGS: verify Explore-agent registries against ground truth |
| e18bade1 (hub) | Bump mx-outputs: regenerate README index (session-docs-check) |
| bcf74b8 (mx-outputs) | Extend morning report to cover second thread (stale-info + drift-checker) |
| b302887 (mx-outputs) | Regenerate README index (session-docs-check refresh) |
| 4c7b5e33 (hub) | Backfill required mx fields on 9 files (mx.purpose, .stability, .runbook, .x-mx-contextProvides) |
| 5dae4e3b (hub) | Papers: add top-level author + created to satisfy MXS-01 Level 1 |
| 94656c6a (hub) | Cog-spec lockstep: Gate 13 + checker + bumper + how-to-write update |
| d46de08 (mx-outputs) | Cog-spec sources: name the deterministic vs inference-driven axis |
| 97ffba0 (mx-shared-gathering) | draft-cogs §6.5.2: name the deterministic vs inference-driven axis explicitly |
| f1d28979 (hub) | Add mx-serve action cog + serve-site.cjs (minimal scripted action) |
| f4375d5a (hub) | mx-exec: bash 3.2 empty-array defensive expansion |
| eb35283 (mx-outputs) | MX Readiness Inspector Chrome extension + companion blog draft |
| a3bb174 (mx-outputs) | Watching the Machines: cluster -> series across the column |
| 0889a93 (mx-outputs) | MX Readiness Inspector: loosen summary prompt to 'brief' (drop three-sentence constraint) |
| 009dd9ce (hub) | Cogs: backfill required mx fields (purpose, stability, x-mx-contextProvides) |
| 3a1ec852 (hub) | Bump mx-outputs + refresh routing-registry |
