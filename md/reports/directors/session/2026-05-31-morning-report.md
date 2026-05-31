---
title: "Co-Directors Report — ABOUT quartet shipped; PDF script self-heals; stale-info scan run; drift-checker infrastructure landed"
description: "Morning session covering two work threads: (1) the four ABOUT-* canonical biographies got declared PDF destinations and the PDF orchestrator learned to self-heal missing mx.generate blocks; (2) a repo-wide stale-information scan ran end-to-end, the audit-template drift gate was fixed, a shared drift-check library was extracted, and a new manuscript drift checker landed in the test gate."
author: "Tom Cranstoun"
created: 2026-05-31
modified: 2026-05-31
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-31-morning-report.md
---

# Co-Directors Report — ABOUT quartet shipped; PDF script self-heals; stale-info scan run; drift-checker infrastructure landed

**Date:** 31 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Two threads ran this morning. First, the four canonical biographies (Tom, Salva, Scott, the new Doğu) now declare their own PDF destinations in letter format, and the PDF orchestrator auto-injects a minimal `mx.generate` block into any source markdown that lacks one. Second, a repo-wide stale-information sweep ran end-to-end, producing an alert report plus a 6,084-row scanner CSV, compressing MEMORY.md back under its cap, backfilling missing canonicalUri fields, and fixing the audit-template em-dash gate plus four drifting sections between web and ecommerce templates. The same session then extracted a shared drift-check library, wired up a new manuscript drift checker, surfaced six drifting anchors between Handbook v2 ch00 and Protocols ch00, aligned three of them and excluded three as intentional divergence. End state: ten anchors in the manuscript lockstep registry, all green, plus the audit gate refactored to share the same library.

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

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 6 hub + 2 mx-outputs (pending hub commits this segment: 3-4) |
| Repositories | 2 (hub + mx-outputs) |
| New canonical biographies | 1 (ABOUT-DOGU.md) |
| ABOUT-* PDFs rendered (letter doctype) | 4 |
| Provenance sidecars produced | 8 (4 AI + 4 deterministic) |
| New scripts (this morning, second thread) | 3 (scan-broken-refs.cjs, lib/drift-check.js, check-manuscript-drift.js) |
| Refactor (audit template drift gate) | 1 (delegates to shared lib, ~100 lines saved) |
| Stale-info scanner findings | 6,084 (29 MUST-FIX, 2,727 HIGH, 681 MEDIUM, 2,649 LOW) |
| Files fixed in stale-info sweep | 17 markdown files (rulebooks, papers, maxine docs, audit template) |
| MEMORY.md size | 18,118 bytes (was 29,860; cap 24,985) |
| Manuscript pair anchors locked in | 10 (out of 13 candidates; 3 excluded as intentional divergence) |
| Audit template anchors | 7 (unchanged; gate now passes cleanly) |
| Indexes regenerated | 4 (routing-registry, .aspell-mx.pws, mx-reginald/index, definitions-index) |

---

## Why It Matters

The first thread (ABOUT-*) gave every canonical biography a declared PDF destination and taught the renderer to self-heal first-time files. The second thread did the heavier structural work: a deterministic scanner for stale references that runs in 1.4 seconds across 1,234 files and can be wired into CI; a shared library for any future lockstep gate; the manuscript lockstep gate itself, now live and proving its worth on the first run (one stat error caught against an Adobe source). The drift-check library generalises — pitch trio, future book pairs, any parallel content the project owns gets the same shape for ~30 lines of config. Surfacing the manuscript drift early was the right time to do it: three corrections went in cleanly, three intentional divergences are now documented in code. Two complete pieces of infrastructure shipped in one morning that compound across every future session.

---

## Next Steps

- Send ABOUT-DOGU.md to Doğu for sign-off before it is cited in any public surface (LinkedIn, grant attachments, registry entry).
- Decide whether the third-person voice on ABOUT-DOGU.md should stay or whether Doğu takes the pen (matching Salva's first-person).
- Watch the next first-time PDF render to confirm the auto-injection works on a wild file.
- Decide canonicalUri hook scope for the 47 remaining `mx-canon/` files missing the field (folder-metadata `.mx.yaml.md`, navigation READMEs, reference-implementation demos). Documented as a REMINDERS item.
- Fix the validation-report generator path-resolution bug (42 broken refs uniformly in `mx-config/validation-reports/*.md` reference `mx-validator.js` instead of `.cjs`). Documented as a REMINDERS item.
- Decide fate of `mx-canon/ssot/business-case/SOUL.md` (stub indexing four subdirectories that were never built out). Documented as a REMINDERS item.
- When the pitch trio's per-file additions get restructured under sub-headings, the same drift-check library can extend to cover them with ~30 lines of config.

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
| _pending_ (hub) | Stale-info scan + scanner + hub edits (rulebooks, papers, maxine refs, MEMORY) |
| _pending_ (hub) | Drift-check infrastructure: shared lib + audit refactor + manuscript checker |
| _pending_ (hub) | Audit template em-dash gate fix + four-section drift alignment |
| _pending_ (hub) | Regenerated indexes (routing, definitions, mx-reginald, .aspell-mx.pws) |
