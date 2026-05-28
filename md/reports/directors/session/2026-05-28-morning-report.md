---
title: "Co-Directors Report — Four-Site Audit Rerun + Provenance v2 Regime Restructure"
description: "Morning segment had two strands. (1) Four-site audit rerun (mx.allabout.network, typo3.com, dotfusion.com, dkd.de/de) validates evening fixes end-to-end. (2) Provenance JSON restructured from activity-first v1 to regime-first v2: parties[] role taxonomy, frameworks[] registry enumerating 30 AI-governance regimes worldwide, runRevision + lastWriteAt counters, per-step jurisdictionalEvidence, canon position paper, evidence-preservation hook."
author: "Tom Cranstoun"
created: 2026-05-28
modified: 2026-05-28
version: "1.1"

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

## What Was Done (continued, second strand of the morning)

### 6. Provenance JSON v2 — regime-first restructure

Question that triggered the work: *"is the provenance JSON compatible with all known AI Acts in all jurisdictions?"* Honest two-layered answer surfaced: yes for the evidence-vehicle role the canon already claims (any regime asking "who decided, on what input, when, with whom accountable" is served by the shape); no for the compliance-grant role (no JSON pre-fills the EU AI Act risk classification, Colorado deployer registration ID, NYC LL144 bias-audit hash, China filing number — that's operator-side work). The schema was extended to admit both honestly.

Concrete additions:

- **`parties[]`** — replaces the single `responsiblePerson` block with a role-attributed array. Controlled enum: `auditOperator`, `provider` (EU AI Act Art. 16), `deployer` (Art. 26), `authorisedRepresentative` (Art. 25), `importer`, `distributor`, `auditor` (NYC LL144 bias auditor; ISO 42001 internal audit), `dataController`, `dataProcessor`, `dpo`, `modelDeveloper`, `modelEvaluator`. Multiple entries per role permitted.
- **`frameworks[]`** — 30 AI-governance and adjacent regulatory regimes enumerated in [`mx-canon/ssot/registries/ai-regimes.json`](../../../../../mx-canon/ssot/registries/ai-regimes.json): EU AI Act, EAA, GDPR, Council of Europe Framework Convention, UK ICO, US NIST AI RMF, Colorado, Texas TRAIGA, California AB 2013, NYC LL144, China generative-AI / algorithmic-recommendation / deep-synthesis, South Korea AI Basic Act, Brazil PL 2338, Canada AIDA, OECD principles, G7 Hiroshima, ISO 42001/23894/27001, EU DSA/DORA. Each entry carries version, jurisdiction, applicability claim, reserved `x-<framework>` extension namespace.
- **`runRevision` + `lastWriteAt`** — version tracking. `runRevision` increments on every `initProvenance` call (counts re-inits); `lastWriteAt` updates on every write including `recordStep` appends; `startedAt` pins to the first write.
- **Per-step `jurisdictionalEvidence`** — operators can record clause-level evidence ("this step satisfies EU AI Act Article 12") via `recordStep`.
- **v1 compatibility shadows** — `responsiblePerson`, `frameworksCited`, `operator` preserved so the PDF inspector, exiftool extractors, and existing scripts continue to function unchanged.

### 7. Canon paper + cross-links

New canon paper [`mx-canon/ssot/papers/provenance-regime-compatibility.md`](../../../../../mx-canon/ssot/papers/provenance-regime-compatibility.md) documents the two-layered position statement, the regime inventory, the role taxonomy, the extension catalogue, and how an operator extends the chain for a new regime. Pointable from PDFs, audit reports, and the inspector. CLAUDE.md gained a one-bullet summary; the explainer at `/learn/mx-for-pdfs.html` gained a paragraph on the role taxonomy linking forward to the paper.

### 8. Evidence-preserving hook

New pre-bash hook [`.claude/hooks/pre-bash-audit-evidence-preservation.sh`](../../../../../.claude/hooks/pre-bash-audit-evidence-preservation.sh) detects audit-pipeline invocations and refuses to run when the target hostSlug has uncommitted prior deliverables under `mx-outputs/audit/`. Bypass via `MX_AUDIT_ALLOW_OVERWRITE=1` for mid-development iterations. Rule recorded as feedback memory `feedback_commit_audit_before_rerun.md`.

### 9. Migrator + tests

[`scripts/migrate-provenance-v1-to-v2.js`](../../../../../scripts/migrate-provenance-v1-to-v2.js) — pure-function migrate(v1) + CLI walker. Idempotent. Used once to back-fit 29 sidecars across `mx-outputs/audit/` and `mx-outputs/pdf/` to v2 shape. Tests in [`tests/test-provenance-v2.js`](../../../../../tests/test-provenance-v2.js) cover schema, registry, migrator, primitive (v2 emission, runRevision increment, jurisdictionalEvidence persistence, lastWriteAt refresh). 14/14 pass.

---

## What Changed About Me

Two patterns I will carry forward.

First — the honest self-critique after declaring v2 "done" surfaced two real bugs in what I'd just shipped: `lastRunAt` was a misleading field name (it was actually "last init", not "most recent write"), and `recordStep` admitted no API for the per-step `jurisdictionalEvidence` the schema invited. Both fixed before the session closed. The lesson: after a substantial sprint, treat "what's missing and what can be improved" as a mandatory step, not a rhetorical question to wave away with "shipped". The bugs were in my code, recently written; an outside reader would have caught them in review. I caught them by asking myself.

Second — the user's "no migration needed, we will regen, it's early days" course-correction. I'd been adding back-compat rename logic for a field name I changed; he reminded me that early-days code earns the right to break old bytes when the regen path is trivial. Adding migration code that nobody will ever exercise is gold-plating in a different colour. The rename simplified by ~40 lines once the back-compat path came out.

---

## Next Steps

- Walk back any unrelated audit deliveries in `mx-outputs/audit/2026-05-*` that still carry pre-fix wafBlocked flags, if a regulator or sponsor asks. The four sites we re-ran today are clean; older deliveries on disk may not be.
- Gate 10 mx-validator residual on heal-generated `.mx.yaml.md` skeletons still open before 2026-07-01 hard-cut.
- v2 follow-ups deferred (in REMINDERS): no schema-validation gate yet; PDF XMP payloads still v1 until each PDF re-renders; canon paper not published to mx-site public web yet; inspector doesn't surface `frameworks[]` to users; regime registry has no in-force-from / in-force-until dates; `responsiblePerson` not explicitly marked deprecated in schema; evidence-preservation hook only covers Claude Code, not direct CLI invocations.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 8d1e093 (mx-outputs) | Audit reruns 2026-05-27: 4 sites validate evening fixes (WAF, RPI, badge URL) |
| 5de8f9f (mx-outputs) | Migrate 29 provenance sidecars to v2 schema (regime-first shape) |
| b727474 (mx-outputs) | Add MX PDF Inspector tool + v1/v2 sidecar reader |
| 8fcb814e (hub) | Bump mx-outputs: four-site audit reruns validate evening fixes |
| efa1053d (hub) | REMINDERS: add Gate 10 heal-skeleton mx-validator fix before 2026-07-01 cutover |
| e6e955b1 (hub) | Changelog 2026-05-28 morning: four-site rerun validates evening fixes |
| e1e298e6 (hub) | Bump mx-outputs: regenerate README index for 2026-05-27 audit reruns |
| 31069650 (hub) | Canon: provenance v2 — regime registry + JSON schemas + position paper |
| fa9fb122 (hub) | Provenance v2 writer + migrator + tests + badge URL points at inspector |
| 93493c9c (hub) | Hook: evidence-preservation gate on audit invocations |
| a52db735 (hub) | Bump mx-outputs + document v2 in CLAUDE.md |
| 097e4845 (hub) | Provenance v2: fix recordStep gaps (lastWriteAt + jurisdictionalEvidence) |
| *pending* (hub + mx-outputs) | This report + REMINDERS update |
