---
title: "Co-Directors Report — Four-Site Audit Rerun + Provenance v2 + Lead-Capture Endpoints + Hard Gates + Audit Deliverable Polish"
description: "Morning segment had four strands. (1) Four-site audit rerun validates evening fixes end-to-end. (2) Provenance JSON restructured from activity-first v1 to regime-first v2. (3) Public lead-capture endpoints shipped on mx.allabout.network for the free PDF check and the Certified Operator waitlist; MX Compatible badge tied to Certified Operator status in canon §3.1; alpha REGINALD declared live in canon §10.1; pre-push Gate 7-11 grace period removed (hard from now on); 909 .mx.yaml.md skeletons backfilled to pass the now-hard validator. (4) Audit deliverable polish: one scoring vocabulary across the Balanced Scorecard, TOC forced onto its own page, reviewer findings moved to a sibling sidecar, two pre-existing test failures fixed, a new MX Compatible regression test, and three blog posts on mx-site for engineers, clients, and auditors."
author: "Tom Cranstoun"
created: 2026-05-28
modified: 2026-05-28
version: "1.3"

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

## What Was Done (continued, third strand of the morning)

### 10. Lead-capture endpoints live on mx.allabout.network

Two new POST endpoints on the `cool-cell-c75e` Cloudflare worker:

- `POST /api/v1/lead/pdf-check` — backs the free MX-readiness check form on [`/learn/mx-for-pdfs.html`](https://mx.allabout.network/learn/mx-for-pdfs.html). Visitor pastes a PDF URL + email + consent; the form posts JSON, the worker validates, sends an admin notification + submitter acknowledgement via Resend, and either returns JSON (for JS-enabled clients) or 303 to the source page with a `?submitted=pdf-check` flag the page JS uses for an inline status banner.
- `POST /api/v1/lead/certified-operator-waitlist` — backs the waitlist form on the new [`/services/certified-operator.html`](https://mx.allabout.network/services/certified-operator.html) page. Captures name, email, organisation, target tier, predicate vocabulary, optional note.

Pure functions in `reginald/lib/lead-capture.js` (`validateLeadCapture`, `escapeHtml`, `buildAdminEmail`, `buildAcknowledgementEmail`, `buildSuccessRedirectUrl`, `buildSuccessResponseBody`); handler in `reginald/handlers/lead-capture.js` (`classifyLeadCaptureRequest`, `handleLeadCapture`); 28 new unit tests; total suite 252/252 passing. Worker deployed at version `7a6fda33-3af7-48b4-a522-e9b0c76e7654`. Smoke-tested live: OPTIONS preflight 200, GET 405, bad payload 400 JSON, unknown lead path 404 JSON.

### 11. MX Compatible badge bound to Certified Operator status

[`/learn/mx-for-pdfs.html`](https://mx.allabout.network/learn/mx-for-pdfs.html) "If you publish PDFs" section rewritten. The standard the badge points to is open (ISO 14289-1 + MX metadata + provenance pair); the badge itself is reserved to accredited MX practitioners — formally Certified Operators of the CogNovaMX Accreditation Programme. Three tiers named in-prose. Canon updated in lockstep: [`accreditation-programme.md`](../../../../../mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/accreditation-programme.md) gains §3.1 "The MX Compatible badge" with the honour-system tooling note, and §10.1 "Liveness" declaring alpha REGINALD live at `reginald.allabout.network` as of 2026-05-28. Decision per Tom: tooling stays honour-system (no online verification at render time, no env-var gate).

### 12. Two Service entities and three Offer rows added to schema.org JSON-LD

The explainer page's JSON-LD graph now declares the Accreditation Programme as a `Service` with three `Offer` rows (Tier 1 £750, Tier 2 £3,500, Tier 3 £12,000 as `PreOrder`), plus separate Service entities for the free PDF check and MX PrintWorks. High-intent queries like "EU AI Act PDF compliance" now surface CogNovaMX as the offer, not just MX as a concept.

### 13. Pre-push Gates 7-11 grace period removed

[`.claude/hooks/pre-push.sh`](../../../../../.claude/hooks/pre-push.sh): deleted `MX_GATES_HARD_AFTER="2026-07-01"`, deleted `mx_gate_is_hard()`, simplified `mx_gate_fail()` to always print `❌ ERROR` and return 1. Every existing caller already had `|| exit 1`, so the gates flip to hard immediately. `MX_SKIP_*` emergency overrides preserved.

### 14. mx-validator audience enum aligned with canon

`scripts/mx-validator.cjs` `audience` field now loads its enum from `mx-canon/ssot/fields-data.yaml` at startup (with safe fallback) and accepts `string-or-array` type. Earlier it hardcoded `['human', 'machine', 'both']` (singular) which diverged from the canon's `[tech, business, humans, machines, agents, both]` (plural). Validators and canon are now in lockstep.

### 15. 909 .mx.yaml.md skeletons backfilled (Gate 10 cleanup)

Sweeping mx-validator across all 931 `.mx.yaml.md` files surfaced 909 violators — every folder skeleton in the corpus lacked `mx.runbook` and `mx.x-mx-contextProvides`, with 99 needing `stability` fixes (72 missing, 27 `evolving` remapped to `unstable`), 116 needing audience adjustments (114 missing, 1 `developers` remapped to `tech`, 1 object flattened), 3 needing `purpose`. One-off script [`scripts/one-off/backfill-mx-validator-fields.cjs`](../../../../../scripts/one-off/backfill-mx-validator-fields.cjs) does the bulk fix with YAML round-trip; idempotent. Result: **931 valid, 0 invalid** corpus-wide. Heal generator at `scripts/mx/mx-graph-builder.js` patched to emit `runbook` + `x-mx-contextProvides` by default so future orphans land valid.

---

## What Was Done (continued, fourth strand of the morning)

### 16. Balanced Scorecard speaks one vocabulary

The vs Peers column previously emitted raw peer medians ("median 25", "median 83") next to bands and grades in every other cell. An auditor had to translate the number into a band in their head to compare site against cohort. `formatPeerComparison()` in `mx-reginald/audit/bin/infill-report.js` now routes the peer median through `scoreBandFromValue()` and emits letter grades — `A (median)`, `B (median)`, `C (median)`, `D (median)` — so the row's own grade and its peer comparison speak the same vocabulary. Golden-skeleton fixture moved with the code.

### 17. Table of contents lands on its own page

Cover doctypes already broke the page after the MX Compatible badge zone, but the rule did not always carry through to the contents page in practice. Added an explicit `nav#TOC { break-before: page; break-after: page; }` (with legacy `page-break-*` siblings) in `scripts/templates/pdf/_base.css`. Doctypes that hide the TOC (letter, blog-post, briefing-2col) already set `display: none`, so the new rule is a no-op there. Net flow on a report: title plus badge on page one, contents alone on page two, body from page three onward.

### 18. Reviewer findings move out of the report into a sibling sidecar

The "Audit gate findings for human review" block used to open every report — gate name, category, evidence, every warning the deterministic gates raised. The reviewer needed it for sign-off; the client read it too, which is not who it was for. Now the same content travels in a sibling markdown file (`<basename>-report-findings.md`) with its own MX frontmatter (`contentType: audit-findings`, `companion` pointer back to the report). Renderer split in `mx-reginald/audit/lib/render-error-section.js` (`renderFindingsMarkdownDoc()` new, `renderErrorReportSection()` retained as an empty-sentinel no-op for legacy skeletons). `regenerate-error-section.js` repurposed to write the sidecar and strip any residual block from the report markdown. Templates and contracts dropped the `[ERROR_REPORT_SECTION]` placeholder. Golden-skeleton fixture lost the block.

### 19. Two pre-existing test failures fixed

`infill-golden.test.js` had been failing on the random `mkdtemp` directory's basename leaking into `mx.generate.output` on every run; the test was using the random dir directly as `[CLIENT_HOST_SLUG]`'s source. Fix: write the skeleton into a stable `example.com` subfolder inside the tmp root, golden updates to match, byte-identical from then on. `audit-gates.test.js`'s verifier assertion still expected exit code 1 on unsupported-numeric claims; the verifier moved to the always-produce-PDF contract some time ago (exit zero, log warnings to `audit_errors.json`). Test updated to assert exit zero and check stdout contains `unverified claim(s) - logged as warnings`.

### 20. MX Compatible regression test on the rendered PDF

`tests/test-pdf-mx-compatible.js` writes a fixture markdown to `/tmp`, renders it through `scripts/bin/mx.pdf.sh`, then asserts every signal an inspector relies on: AI sidecar adjacent, deterministic sidecar adjacent, `pdfuaid:Part=1` declared in XMP, MX-namespaced identity fields populated from frontmatter (Status, ContentType, Audience, Tags, Author), provenance pointer fields naming the sidecars by basename, full AI evidence chain embedded inline under `XMP-mx:ProvenanceAiPayload`, and the inline payload matching the adjacent `.ai.json` byte-for-byte after JSON normalisation. Eleven assertions; wired into `npm test` and `npm run test:pdf-mx-compatible`. Companion to the existing `test-pdf-provenance-chain.js` (structural honesty of the chain) and `test-pdf-eaa.js` (accessibility conformance); together the three tests cover the three orthogonal aspects of MX Compatible.

### 21. Three blog posts shipped to mx-site

Evergreen descriptions of how an MX audit deliverable is shaped, one post per audience:

- [`/blog/audit-for-engineers.html`](https://mx.allabout.network/blog/audit-for-engineers.html) — scorecard vocabulary, page composition, sidecar layout, regression tests, MX Compatible contract; from inside the pipeline
- [`/blog/audit-for-clients.html`](https://mx.allabout.network/blog/audit-for-clients.html) — what the deliverable looks like on the desk; the document is yours, the reviewer's working is alongside
- [`/blog/audit-for-auditors.html`](https://mx.allabout.network/blog/audit-for-auditors.html) — how the evidence chain travels with the PDF; `exiftool` extraction recipe; pointer to the interactive inspector

All three link to the interactive PDF inspector at `/tools/pdf-inspector.html` and the explainer at `/learn/mx-for-pdfs.html`. Drafts went through the humanizer skill (verbal-tics pre-scan plus a manual sweep for headings starting with "The...", hollow-quantifier openers, rule-of-three forcing, em-dashes, sentence-initial conjunctions, AI vocabulary). Two course-corrections from Tom shaped the final shape: timeless prose (no "this week", "we landed", "five small changes" — describe how the deliverable IS, not what changed) and rename from `audit-clean-up-*` to `audit-for-*`. Index cards added at the top of the blog listing; sitemap and llms-full.txt regenerated; both .html files indexable (no draft noindex).

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
| 971cede9 (hub) | REMINDERS + bump mx-outputs: provenance v2 follow-ups + morning report |
| 1c53cafd (allaboutv2) | Add lead-capture endpoints for mx.allabout.network |
| 3b9d797 (mx-outputs) | mx-site: Free PDF check form + Certified Operator waitlist page |
| aaa46cfb (hub) | Lead capture endpoints + Certified Operator waitlist live |
| 17cc5709 (allaboutv2) | Backfill mx-validator required fields across all .mx.yaml.md |
| 29d69e2 (mx-outputs) | Backfill mx-validator required fields across all .mx.yaml.md |
| c5b9a69 (mx-outputs) | Add three audit blog posts for engineers, clients, and auditors |
| 77cb6f4 (mx-outputs) | PDF inspector: read lastWriteAt instead of lastRunAt |
| *pending* (hub) | Audit deliverable polish: banded scorecard, TOC page break, findings sidecar, two test fixes, MX Compatible regression test, three blog posts (and earlier morning strands' bumps + this report) |
