---
title: "Co-Directors Report — Four-Site Audit Rerun Validates Evening Fixes"
description: "Morning segment reruns mx.allabout.network, typo3.com, dotfusion.com, and dkd.de/de with --force-fresh to validate the previous evening's pipeline hardening (WAF fingerprint, Responsible Person Identifier, badge URL fix, audit-pdf.sh rename). All four pipelines complete with all gates passed."
author: "Tom Cranstoun"
created: 2026-05-28
modified: 2026-05-28
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-28-morning-report.md
---

# Co-Directors Report — Four-Site Audit Rerun Validates Evening Fixes

**Date:** 28 May 2026 — Morning
**Segment:** morning (since midnight, continuous with 27 May evening)

---

## Summary

The four-site audit cohort was re-run with `--force-fresh` to validate the previous evening's pipeline hardening end-to-end on real data. mx.allabout.network, typo3.com, dotfusion.com, and dkd.de/de all completed with every gate passing. The dkd.de slowest and median performance probes report `wafBlocked: false` and `rateLimited: null`, confirming the new positive-evidence WAF fingerprint classifier no longer mis-flags an nginx rate-limiter as a Cloudflare challenge. Every AI sidecar carries the structured `responsiblePerson` block. Every PDF carries the full clickable `https://mx.allabout.network/learn/mx-for-pdfs.html` URL. The audit deliverable is stable enough to ship without operator surgery.

---

## What Was Done

### 1. Four-site cohort re-run with --force-fresh

Per-host caches wiped, every probe re-executed, every LLM call re-issued. The four pipelines ran in overlapping waves to keep the rate-limit footprint clean: mx.allabout.network first (full pipeline serial), then typo3.com and dotfusion.com Phase 1 in parallel while mx.allabout.network finished Phases 2-3, then dkd.de/de Phase 1 alongside dotfusion.com Phase 2. Total wall time around two hours from first command to last gate.

### 2. WAF fingerprint detection validated on dkd.de

dkd.de v6 (the previous evening) confirmed the fix on cached data; v8 (this morning, fresh probe) confirms it on live data. The slowest-page perf JSON now carries `wafBlocked: false` on every record, `rateLimited: null` on the slowest and median pages (the site genuinely responded; no rate-limit signal fired this run). The pre-fix regime would have falsely flagged the same responses as `wafBlocked` based on bare 429/503 status; the fix waits for positive evidence (`cf-ray`, named server vendor, WAF cookies, block-page body) before asserting WAF involvement.

### 3. Responsible Person Identifier present on all four deliveries

Every `<report>.provenance.ai.json` carries the `responsiblePerson` block at the top with the canonical six fields (name, email, identifier URL, role, organisation, country). A regulator opening any of the four AI sidecars can walk from a finding to the accountable human in one step without consulting an external directory.

### 4. MX Compatible badge full URL in every PDF

`pdftotext` confirms the prose line "Scan the QR code or visit https://mx.allabout.network/learn/mx-for-pdfs.html to read what that means" in all four PDFs. The badge URL is now clickable in PDF readers, resolves to the explainer page, and the QR code carries the same URL with the source-content SHA fragment.

### 5. audit-pdf.sh + env-contract.md path validated end-to-end

The renamed audit-side engine took every PDF render without per-script bespoke wiring. The pipeline's pdf-render env block exported `MX_PDF_BADGE_INJECTOR`, `MX_PDF_DOCTYPE='report'`, and `MX_PDF_SOURCE_MD` correctly for all four sites; the engine consumed them via the protocol documented in `scripts/lib/pdf/env-contract.md`.

### 6. Discovery Files DO_NOT scope lines held

The robots.txt, sitemap.xml, llms.txt, and llms-full.txt sections of all four reports describe their respective files directly ("the robots.txt declares", "the sitemap carries N URLs") without per-page sampling language ("across the audited set", "on each page we crawled"). The template-level DO_NOT additions from earlier in the session prevent the scope drift that the LLM repair pass used to introduce.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Sites re-audited | 4 (mx.allabout.network, typo3.com, dotfusion.com, dkd.de/de) |
| Pipelines completed | 4 of 4 (all gates passed) |
| PDFs rendered | 4 (1.3-1.5 MB each, tagged PDF/UA Level 2) |
| Files committed (mx-outputs) | 209 (133 modified + 76 new provenance) |
| dkd.de wafBlocked: before / after | 44 / 0 |
| dkd.de rateLimited: before / after | 0 / null (slowest+median) |
| Provenance prompts captured | 76 hash-keyed prompt files (16-20 per site) |

---

## Why It Matters

The evening's pipeline work was theoretical until this rerun. A classifier that passes its unit test but fails on the next dkd.de scan is a regression waiting to happen. A `responsiblePerson` block that the primitive writes but the audit pipeline drops at some integration boundary is invisible until you check four sidecars. A badge URL fix that works on the dev render but breaks in the canonical engine is the same. Running all four sites end-to-end with fresh caches is the only proof that survives. It survived.

---

## Next Steps

- Walk back any unrelated audit deliveries in `mx-outputs/audit/2026-05-*` that still carry pre-fix wafBlocked flags, if a regulator or sponsor asks. The four sites we re-ran today are clean; older deliveries on disk may not be.
- The Gate 10 mx-validator residual on the heal-generated `.mx.yaml.md` skeletons (audience: [humans] array vs. expected string, missing mx.runbook + mx.x-mx-contextProvides) is still open. Worth a generator change before the 2026-07-01 hard-cut.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 8d1e093 (mx-outputs) | Audit reruns 2026-05-27: 4 sites validate evening fixes (WAF, RPI, badge URL) |
| _pending_ (hub) | Bump mx-outputs: audit reruns + morning report |
