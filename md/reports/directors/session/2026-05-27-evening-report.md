---
title: "Co-Directors Report — Audit Pipeline Matures: WAF, RPI, Badge"
description: "Evening segment hardens the audit deliverable end-to-end: WAF fingerprint rather than rate-limit conflation, Responsible Person Identifier on every provenance sidecar, MX Compatible badge now carrying a full clickable URL in every PDF."
author: "Tom Cranstoun"
created: 2026-05-27
modified: 2026-05-27
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-27-evening-report.md
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

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment (hub) | 5 (plus the hub pointer bump landing in step 3) |
| Commits this segment (mx-outputs) | 3 |
| Files changed (hub) | ~26 |
| Net diff (hub, headline) | +1163 / −58 lines |
| Sites re-audited | 3 (dkd.de/de, typo3.com, dotfusion.com) |
| dkd.de wafBlocked findings: before / after | 44 / 0 |
| dkd.de rateLimited findings: before / after | 0 / 6 |
| Voice score on explainer: before / after | 6.5 / 8 |
| New canonical files | `scripts/lib/provenance/responsible-person.json`, `scripts/lib/pdf/env-contract.md` |

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

---

## Next Steps

- Re-audit dkd.de when its rate-limiter retraining window closes (deferred this evening; the three earlier audits trained the limiter and v4-v5 retries failed Phase 1 with HTTP 429).
- Walk every existing PDF in `mx-outputs/pdf/` through the renamed engine to back-fit the full clickable URL where the abbreviated form still lingers. Optional and on-demand; the next render lands the fix automatically.
- Confirm with Salva that the Reginald vNext fase 1 schemas (committed in parallel at 18:29) compose cleanly with the new `responsiblePerson` block on the audit-pipeline side of the boundary.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 397d4728 (hub) | Bump mx-outputs: rerun deliverables (dkd v6, typo3, dotfusion) + slowest-page-probe v5 validation |
| bc447695 (hub) | Rename audit-side mx.pdf.sh -> audit-pdf.sh + wire MX Compatible badge in audit PDFs |
| 680ab0e7 (hub) | Template scope drift + Responsible Person Identifier in provenance sidecars |
| 53c02d67 (hub) | MX Compatible badge: write full URL with https:// and make the link clickable |
| _pending_ (hub) | Bump mx-outputs: humanizer pass on mx-for-pdfs.html |
| 2d0b0c9 (mx-outputs) | Audit reruns: dkd.de v6, typo3.com, dotfusion.com |
| 948b377 (mx-outputs) | mx-for-pdfs.html: explain the Responsible Person Identifier; dkd.de v7 PDF carries the full clickable URL |
| a07a6f4 (mx-outputs) | mx-for-pdfs.html: humanizer pass on RPI + value-prop sections |
