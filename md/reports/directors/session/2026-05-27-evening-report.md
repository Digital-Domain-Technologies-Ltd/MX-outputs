---
title: "Co-Directors Report — Audit Pipeline Matures, responsiblePerson Canonised, Manuscripts Caught Up"
description: "Evening segment hardens the audit deliverable end-to-end (WAF fingerprint, Responsible Person Identifier, full-URL badge), then canonises the responsiblePerson field in the MX dictionary and propagates the recent two-week blog cohort into the free book, handbook v2, Protocols ch07/ch20, and Appendix J."
author: "Tom Cranstoun"
created: 2026-05-27
modified: 2026-05-27
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-27-evening-report.md
  purpose: "Evening segment hardens the audit deliverable end-to-end (WAF fingerprint, Responsible Person Identifier, full-URL badge), then canonises the responsiblePerson field in the MX dictionary and propagates the recent two-week blog cohort into the free book, handbook v2, Protocols ch07/ch20, and Appendix J."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit Pipeline Matures, responsiblePerson Canonised, Manuscripts Caught Up"]
---

# Co-Directors Report — Audit Pipeline Matures: WAF, RPI, Badge

**Date:** 27 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

Three strands of audit-pipeline hardening landed in one continuous evening. The probe stack now distinguishes a genuine WAF block from a plain nginx rate-limit (so dkd.de's 44 spurious "blocked" findings collapse to six correct "rate-limited" findings); every provenance sidecar now carries a Responsible Person Identifier (name, email, role, organisation, country) so a regulator walking from a finding to the accountable human gets there in one step; and the MX Compatible badge on every audit PDF now embeds the full `https://mx.allabout.network/learn/mx-for-pdfs.html` URL as a clickable hyperlink, with the explainer page itself rewritten in Tom's voice to cover the new RPI block. The audit deliverable can stand in front of a regulator unaided.

---

## What Was Done

### 1. WAF fingerprint detection (no more false positives)

The probe networking helper now classifies an upstream response by *positive evidence* — Cloudflare `cf-ray`, server-vendor headers from named WAF vendors, WAF cookies, block-page body regex — and falls back to "rate-limited" when none of those fire. A 429 from an nginx rate-limiter is no longer treated the same as a Cloudflare challenge. Three sites were re-audited to validate: dkd.de v6 (44 wafBlocked → 0 wafBlocked, 6 rateLimited), typo3.com, dotfusion.com (soft-404 also now caught by status-200 + body-marker dual signal). The coherence gate was tightened to a single source of truth so the report and the data never disagree on a record's verdict.

### 2. Responsible Person Identifier on every provenance sidecar

A new `responsiblePerson` block sits at the top of both the AI and the deterministic provenance sidecar of every artefact this hub produces. Default identity loads from `scripts/lib/provenance/responsible-person.json` (Tom, tom.cranstoun@gmail.com, https://allabout.network, DDT Ltd trading as CogNovaMX, GB) with an environment override for runs by other operators. The Reginald primitive (`mx-reginald/lib/provenance.js`) carries the loader; both `initProvenance` and `upsertSidecar` preserve the block across re-runs. The fields match what EU AI Act Article 4, the UK ICO accountability principle, NIST AI RMF GOVERN, and EAA Directive 2019/882 each call for in their own vocabulary.

### 3. MX Compatible badge: full URL, clickable in the PDF

The badge prose was emitting `mx.allabout.network/learn/mx-for-pdfs` — no scheme, no hyperlink. A reader of the dkd.de PDF could neither click it nor resolve it. The injector now writes the full `https://mx.allabout.network/learn/mx-for-pdfs.html` as both the visible link text and the `href`, so the prose carries a clickable anchor through the PDF render. `pdftotext` and the PDF object-stream `/URI` entries on the v7 dkd.de re-render confirm the fix.

### 4. Explainer page rewritten with the RPI section + humanizer pass

`mx.allabout.network/learn/mx-for-pdfs.html` gained a new H3 "Responsible Person Identifier" subsection between AI-governance provenance and the MX metadata packet, with the JSON shape and a regulator-facing walk through each field. The whole explainer then took a humanizer pass: em-dashes around inline asides converted to parens or colons, the "Two pillars carry the value proposition" marketing opener replaced with "Two halves do the work", a sentence-initial "And" restructured, and a rule-of-six "The X is..." run varied. Voice score 6.5/10 → 8/10.

### 5. PDF pipeline rename (audit-side engine)

`mx-reginald/audit/scripts/bin/mx.pdf.sh` was renamed to `audit-pdf.sh` to make the orchestrator-vs-engine split explicit. The hub-level orchestrator `scripts/bin/mx.pdf.sh` keeps its name and now points at the renamed engine; `scripts/lib/pdf/env-contract.md` was added as the single source of truth for the env-var protocol between the two. The audit pipeline's pdf-render env block was updated to export `MX_PDF_BADGE_INJECTOR`, `MX_PDF_DOCTYPE='report'`, and `MX_PDF_SOURCE_MD`, so the badge lands on every audit PDF without per-script bespoke wiring.

### 6. Two-week blog cohort propagated into the manuscripts at three depths

Nineteen blog posts from 2026-05-13 to 2026-05-26 were swept into the books at the depth each book carries. Free book chapter-00 gained one new H2 (`From the page to the file`) plus two surgical pull-quote inserts. Handbook v2 (writable while v1 is published-frozen) absorbed: ch00 the four-part canonical pitch (MX / Gathering / Reginald / CogNovaMX) and the wider machine universe; ch11 a new H2 `Compliance Defence Already Lives Here` on the EAA *référé* filings plus a GA4 AI Assistant channel paragraph; ch12 a `What Cogs Are Not` clarification plus a `What the registry does, and does not` sub-section. Protocols ch07 gained `Structural Governance Failure Modes` (WordPress / WP Engine case study, three failure modes, buyer's three-question test, DDT's 25% cap) and `Enforcement Is Operationally Live` (EAA *référé* filings, MX Readiness L3 as compliance-defence threshold); ch20 gained `What Cogs Are Not`, `Self-Bootstrapping the Provenance Chain`, `Honest Limits`, and a named-standards inventory tying the architecture to RFC 9162, RFC 9421, RFC 6962, JCS, Ed25519, W3C DID Core. Appendix J gained two dated entries: WordPress / WP Engine (Sep-Dec 2024) and the EAA referee filings (June 2025). The published-manuscript guard hook gained a comment block documenting `mx-handbook-v2/` as the writable target so future sessions do not retry the v1 edit and bounce off the hook.

### 7. responsiblePerson field canonised, multi-carrier prose added to all three manuscripts

The `responsiblePerson` block (name, email, identifier, role, organisation, country) that the audit pipeline has been writing into every provenance sidecar since 17:00 is now a canonical MX field. `mx-canon/ssot/fields-data.yaml` carries the new entry (`type: object`, `profile: core`, version bump 6.9 → 6.10) inserted in the stewardship cluster; Appendix M §22.A gained a new sub-section `responsiblePerson — structured accountability identity` with the six-field table, YAML worked example, and a carrier-representation table mapping the JSON canonical form to Markdown, HTML, PDF XMP, JSDoc, shell, and CSS; `mx-canon/ssot/definitions-index.md` was regenerated (1201 concepts indexed, responsiblePerson at line 935 with both canon and Appendix M columns populated). Alongside the canonisation, prose explaining provenance fields traveling across carriers landed in the three manuscripts at appropriate depths: a paragraph in the free book, a new H2 `Provenance Fields Travel Across Carriers` in handbook v2 ch12 walking each carrier representation, and a deep H2 `Provenance Fields Across Carriers` in Protocols ch20 with the four field categories (who is accountable, where it came from, what it is, what was done to it) and per-carrier transcription rules including the `exiftool -b -XMP-mx:ProvenanceAiPayload` extraction command. `fields:gate` reports clean (0 errors, 1 pre-existing warning, fields-drift clean); the eight `unknown` compliance violations are all pre-existing and unrelated to responsiblePerson.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment (hub) | 9 (plus the manuscripts + canonisation commits still to land via /step-commit) |
| Commits this segment (mx-outputs) | 3 |
| Files changed (hub) | ~38 |
| Net diff (hub, headline, including manuscripts pass) | ~+1700 / -100 lines |
| Sites re-audited | 3 (dkd.de/de, typo3.com, dotfusion.com) |
| dkd.de wafBlocked findings: before / after | 44 / 0 |
| dkd.de rateLimited findings: before / after | 0 / 6 |
| Voice score on explainer: before / after | 6.5 / 8 |
| New canonical files | `scripts/lib/provenance/responsible-person.json`, `scripts/lib/pdf/env-contract.md` |
| Blog posts swept into manuscripts | 19 (cohort 2026-05-13 to 2026-05-26) |
| New manuscript sections | 9 (free 1, handbook v2 ch00/ch11/ch12 4, Protocols ch07/ch20 4, Appendix J 2 dated entries) |
| MX dictionary version bump | 6.9 → 6.10 (added responsiblePerson) |
| `fields:gate` after canonisation | 0 errors, 1 warning (pre-existing), drift clean |

---

## Why It Matters

The audit deliverable now stands on its own without an operator at the reader's elbow. The probe verdicts match reality, the sidecars name the human accountable for the audit chain, the PDF carries a clickable link to a public explainer that walks any reader through what the metadata claims. The three regimes the explainer cites — EU AI Act Article 4, UK ICO accountability, NIST AI RMF GOVERN, EAA Directive 2019/882 — each ask "who is responsible, and how is the evidence recorded" in their own language; the sidecar now answers all four with the same structured block. That is the practical work that turns "MX Compatible" from a claim on a cover page into a verifiable chain a regulator can walk.

---

## The Insight

The slowest-page-probe v5 retry helper had a one-line bug that survived three audit re-runs because the WAF false-positive cluster masked it: when both attempts returned 429/503, the helper was unconditionally overwriting the fingerprint verdict with `wafBlocked: true`, regardless of what the headers and body actually said. The fingerprint classifier I added was correct; the retry helper above it was clobbering its answer. The dkd.de re-run was what surfaced the bug — until the fingerprint classifier produced "rate-limited" for the same response that the retry helper was rewriting to "wafBlocked", the inconsistency was invisible. Two layers of correctness analysis collided, and only the cross-check made the inner one visible. Worth keeping in mind whenever a new classifier sits underneath an existing retry helper.

---

## Decisions Made

- The Responsible Person Identifier is structural, not metadata-of-metadata. It sits at the top of every sidecar rather than buried in a `_meta` field, on the grounds that a regulator's first question is "who is accountable" and the answer should be the first thing the file shows.
- The MX Compatible badge always writes the full URL with scheme. No abbreviated form ever ships in a PDF the operator can't click.
- The audit-side PDF engine is renamed but the orchestrator keeps its name. `scripts/bin/mx.pdf.sh` is the hub-wide entry point; `mx-reginald/audit/scripts/bin/audit-pdf.sh` is the canonical engine the audit pipeline calls. `env-contract.md` documents the protocol between them.
- `responsiblePerson` is canonised as an MX field rather than left as a sidecar-only convention. The field lives in the open-standard dictionary (`fields-data.yaml`), not the CogNovaMX vendor extension namespace, because the regulatory regimes it serves (EU AI Act, UK ICO, NIST AI RMF, EAA Directive) apply across vendors and the field must be available to any registry implementation on the standard.
- Manuscript edits land in `mx-handbook-v2/` rather than the published `mx-handbook/`. The published-manuscript-guard hook treats v1 as frozen until Tom explicitly promotes v2 content; the hook comment block now documents this so future sessions skip the bounce. Free book and Protocols (both writable) are edited in place; the published v1 handbook is left alone.
- The gathering-draft surface for `responsiblePerson` was deferred this pass. The field is in the CogNovaMX-side canon now; the open-standard ratification through The Gathering is the `/mx-gathering-submit` flow's job. Until that runs, the field is canonical on the CogNovaMX side and proposed on the standard side.

---

## Next Steps

- Re-audit dkd.de when its rate-limiter retraining window closes (deferred this evening; the three earlier audits trained the limiter and v4-v5 retries failed Phase 1 with HTTP 429).
- Walk every existing PDF in `mx-outputs/pdf/` through the renamed engine to back-fit the full clickable URL where the abbreviated form still lingers. Optional and on-demand; the next render lands the fix automatically.
- Confirm with Salva that the Reginald vNext fase 1 schemas (committed in parallel at 18:29) compose cleanly with the new `responsiblePerson` block on the audit-pipeline side of the boundary.
- Submit `responsiblePerson` to The Gathering via `/mx-gathering-submit` so the field gains open-standard ratification rather than living as a CogNovaMX-side-only canonical entry.
- Optional follow-ups left out of this manuscripts pass: internet-2031 vignette closer for the free book, three parallel HTML metadata channels for Protocols ch22 content-negotiation chapter, authorship-vs-cost-of-production framing for Handbook ch03 guiding principles.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 397d4728 (hub) | Bump mx-outputs: rerun deliverables (dkd v6, typo3, dotfusion) + slowest-page-probe v5 validation |
| bc447695 (hub) | Rename audit-side mx.pdf.sh -> audit-pdf.sh + wire MX Compatible badge in audit PDFs |
| 680ab0e7 (hub) | Template scope drift + Responsible Person Identifier in provenance sidecars |
| 53c02d67 (hub) | MX Compatible badge: write full URL with https:// and make the link clickable |
| 96f41b9e (hub) | Bump mx-outputs: humanizer pass on mx-for-pdfs.html + evening report |
| b1390923 (hub) | REMINDERS: dkd.de re-audit retired (v6/v7 succeeded); add badge back-fit + vNext fase-1 RPI compose follow-ups |
| c40a4e15 (hub) | Changelog 2026-05-27 evening: WAF fingerprint, RPI on every sidecar, badge URL fix, audit-pdf.sh rename |
| d17f4c2d (hub) | LEARNINGS: retry wrapper can clobber inner classifier verdict (slowest-page-probe v5 bug) |
| 31483717 (hub) | CLAUDE.md: provenance sidecars now carry responsiblePerson block |
| _pending_ (hub) | Manuscripts pass: 19 blog posts swept into free / handbook v2 / Protocols / Appendix J at three depths |
| _pending_ (hub) | Canonise responsiblePerson in MX dictionary (fields-data.yaml 6.10, Appendix M §22.A, definitions index) |
| _pending_ (hub) | Provenance-fields-travel-across-carriers prose in free book, handbook v2 ch12, Protocols ch20 |
| _pending_ (hub) | Hook doc: published-manuscript-guard.sh now names mx-handbook-v2/ as the writable target |
| _pending_ (mx-outputs) | Evening directors report v1.1: manuscripts pass + responsiblePerson canonisation appended |
| 2d0b0c9 (mx-outputs) | Audit reruns: dkd.de v6, typo3.com, dotfusion.com |
| 948b377 (mx-outputs) | mx-for-pdfs.html: explain the Responsible Person Identifier; dkd.de v7 PDF carries the full clickable URL |
| a07a6f4 (mx-outputs) | mx-for-pdfs.html: humanizer pass on RPI + value-prop sections |
| 724a5d0 (mx-outputs) | Add evening co-directors report: WAF fingerprint, RPI, badge URL fix |
