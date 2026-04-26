---
title: "Co-Directors Report — Audit-pipeline post-mortem, sidecar design, and vocab-drift eliminated"
description: "Evening segment: self-audit of mx.allabout.network ran, surfaced nine discrete tool-side issues plus two client-facing hallucinations. All nine fixed, nine improvements planned and executed, second self-audit validated every fix landed. Long findings tables now ship as sidecar CSV alongside the PDF. Schema vocabulary whitelist refreshed from 125 hand-curated types to the full 933-type schema.org catalogue."
author: "Tom Cranstoun"
created: 2026-04-17
modified: 2026-04-17
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, audit-pipeline, mx-audit, mx.allabout.network]
---

# Co-Directors Report — Audit-pipeline post-mortem, sidecar design, and vocab-drift eliminated

**Date:** 17 April 2026 — Evening\
**Segment:** evening (17:00–22:24 BST)

---

## Summary

The evening segment turned a single client-facing audit report into a stress test of the whole audit pipeline. Running the report against our own site surfaced nine discrete tool-side bugs plus two kinds of hallucination in the client-facing prose (literal placeholders leaking through, internal script names leaking through). Every one of those nine got a fix, a skill-documentation update, and a validating second self-audit that confirmed the numbers moved. The whitelist of recognised Schema.org types went from 125 hand-curated entries to the full 933-type upstream catalogue, eliminating the entire class of "valid Schema.org type flagged as invalid vocabulary" false positives. A new length-adaptive rendering rule turned a four-page Structured Data Findings table into a 10-row grouped summary with a sidecar CSV carrying the per-entity detail — and `mx.pdf.sh` now copies that sidecar into the PDF folder automatically so the two always ship together.

---

## What Was Done

### 1. Nine post-mortem improvements landed in one batch

The self-audit's instrumentation addendum listed nine follow-up items spanning cache behaviour, schema-maturity aggregation, platform detection, rubric alignment, and documentation hygiene. All nine shipped this segment:

- Cloudflare purge automated in audit-collect (allabout.network allowlist only)
- AEM Edge Delivery Services fingerprint added to platform detection
- Pipeline Survivability handler — all 11 failure-mode rows now fill deterministically from CSV
- Schema vocabulary freshness script + weekly CI hook proposed in REMINDERS
- LLM-judgment rubric gained an `IS_FULL_SITE_AUDIT` preamble so self-audits skip the sample-vs-total check that was producing non-converging nitpick loops
- Site-wide `@id` index at the aggregator so cross-page property resolution (Book → Organization@id on another page) actually works
- Tom's ORCID (`0009-0008-7527-6286`) added to every canonical Person entity on mx-site
- Pass 2 split contract documented with a disjoint-marker-family design that makes parallel rewrite passes safe
- LEARNINGS gained seven new rules; REMINDERS gained three follow-ups

### 2. A second self-audit validated every fix

Three headline metrics moved in the right direction on the re-audit against fresh HTML: Schema Maturity climbed from the previously-reported Level 0 ("No structured data" — a scorer bug) to Level 1 ("Decoration"); per-page Served/Rendered AI-suitability scores went from N/A in every row of the Pages Audited appendix to populated 100/100 values; vocabulary false-positives went from four to zero. The verifier gate passed 66/66 claims and the whole-site `@id` index now carries 95 entries downstream consumers can resolve against.

### 3. Long findings tables now ship as sidecar CSV + grouped summary

Tom pointed at the shipped PDF's Structured Data Findings section — four pages of near-identical "Offer has no seller attribution" rows burying the rest of the report. The template and infill handler now switch rendering mode above 20 data rows: the full CSV ships as a sidecar alongside the PDF, and the inline table becomes a 10-row grouped-by-pattern summary ranked by instance count with Instances and unique-Pages columns. `mx.pdf.sh` got a new step that copies sidecar files from the markdown directory into the PDF directory so PDF and CSV travel together; the stem-matching convention excludes pipeline-internal JSON files (verification, manifest, fierce-critic, llm-judgment). The 2026-04-17 report dropped from 841 to 723 lines; the PDF from 141 K to 131 K.

### 4. Schema vocabulary drift is now a solved problem

The hand-curated whitelist had 125 types against schema.org's 933. Four valid types on one FAQ page were flagged as "not recognised" in the audit. The fix is structural: `scripts/audit-schema-whitelist.js --apply` now rewrites the `SCHEMA_ORG_TYPES` Set in `llmCollector.js` from the live `schemaorg-current-https.jsonld` catalogue. The generated section carries a "do NOT hand-edit — run the refresh script" comment. The skill now treats any vocab finding during an audit as a signal to refresh the whitelist to parity and re-run, so the same false positives never recur.

### 5. The Cloudflare worker was cleared of suspicion

Tom asked "does the Cloudflare worker interfere with JSON-LD placement?" A parallel explore ran: five pages of source HTML vs five live-served HTML → identical line numbers for every JSON-LD block (all in `<head>`). The worker runs an unconditional pipeline (replacePicturePlaceholder, injectJsonLd, injectSpeculationRules, removeNonSocialMetadata, removeHtmlComments) but none of them move existing JSON-LD — injectSpeculationRules only ADDS content before `</head>`. The earlier-reported "JSON-LD in body" finding was correct at audit time because Cloudflare was serving a stale edge copy from before the 11:04 fix commit. The no-cache header + pre-audit purge now documented in memory addresses the class.

### 6. Long-tail hygiene

- `robots.txt` disallows `/books/appendices/` and `/canon/` — supplementary/data paths that should not be indexed
- Additional Reading section added to both templates linking the mx.allabout.network llms.txt guide; rendered only when the site does not already serve the wrapped HTML pattern
- Verification footer in all three templates stopped naming internal tooling (`verificationCommand`, `scripts/verify-audit-report.js`); placeholders now substituted mechanically by the verifier itself after the sidecar JSON is written

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Segments commits (hub) | 6 |
| Segment commits (mx-audit) | 4 |
| Segment commits (mx-outputs) | 8 |
| Segment commits (mx-crm) | 1 |
| Segment commits total | 19 |
| Hub files changed (evening) | 6 |
| mx-audit lines added/removed | +276 / −2 |
| mx-outputs lines added/removed | +62 / −68 |
| Schema.org whitelist | 125 → 933 types |
| Audit report length | 841 → 723 lines |
| Audit PDF size | 141 K → 131 K |
| Self-audits run this segment | 2 |
| Test suite (mx-audit) | 342 passing |
| LEARNINGS new rules | 7 |
| REMINDERS new follow-ups | 3 |

---

## The Insight

The audit pipeline's trust model has two distinct failure modes and the session surfaced both. Stale cache (Cloudflare serves old HTML while the source has been fixed) produces findings that are factually correct for the bytes the audit saw but wrong about the source. That class is now closed by the no-cache header + allabout.network pre-audit purge. The other mode is pipeline-internal drift — fields the aggregator expects but the producer never writes (`r.lm?.servedHtmlScore`), whitelists that lag upstream by hundreds of types, placeholders documented as "filled in a final human pass" that the human forgot. Those are silent; they ship as N/A cells or literal `[VERIFICATION_TOTAL]` text until someone points at the PDF. The evening fix is to mechanise those gaps: the aggregator now calls the same scorer as the producer, the whitelist refreshes from upstream in one command, and placeholders get substituted by the script that computes their values. The lesson: "a human will do it in the final pass" is a bug report written in future tense.

---

## Decisions Made

- **Do NOT rewrite the 2026-04-17 client-facing report prose.** Tom rejected a plan to regenerate the narrative sections against fresh audit data for that historical artefact. The pipeline generates the prose from current audit data on every fresh run, so the stale prose is a characteristic of that one moment-in-time report; future runs will reflect current state automatically.
- **Length-adaptive rendering as the default pattern.** Tables over 20 rows become grouped summaries + sidecar CSV. The threshold is in `infill-report.js` and applies to the Structured Data Findings table today; the same pattern extends to any future long-tail table (currently `[PAGE_URL]`-placeholder style) that would otherwise bury the report.
- **Sidecar stem-matching convention is load-bearing.** The PDF generator matches sidecars by stem prefix (`[client]-*.csv`, `[client]-*.json`) and excludes four pipeline-internal suffixes (`*-verification.json`, `*-manifest.json`, `*-fierce-critic.json`, `*-llm-judgment.json`). Any new sidecar a handler emits needs to follow the stem convention to get picked up automatically; any pipeline-internal sidecar that should NOT travel with the PDF needs to end with one of the four excluded suffixes.

---

## Next Steps

- Re-audit mx.allabout.network to confirm the full promotion path post-fixes (Schema Maturity should climb further as @id cross-references are added; the sidecar-rendered report will ship to a new outreach folder)
- Wire `scripts/audit-schema-whitelist.js` into a weekly CI job so whitelist drift never accumulates again
- First real-world test of the Pass 2 split: whichever long report comes next
- Investigate the 10 deleted PDFs in `mx-outputs/pdf/outreach/2026-04-1[1-6]/` that surfaced during the segment — not mine, unclear where they came from, kept out of scope for the segment but worth a look

---

## Commit Log

### Hub

| Hash | Description |
|------|-------------|
| 129006eb | Bump mx-audit: Additional Reading section for llms.txt guide |
| db19c895 | Vocab whitelist: parity with upstream + auto-refresh on drift |
| d3367468 | Bump mx-outputs: robots.txt disallows /books/appendices/ + /canon/ |
| b1b00255 | mx.pdf.sh: copy client-deliverable sidecars next to PDF |
| f00504be | Long findings tables become sidecar CSVs, not page-after-page walls |
| bd053b12 | Round of improvements from 2026-04-17 post-mortem |

### mx-audit

| Hash | Description |
|------|-------------|
| 55cb410 | Additional Reading: link llms.txt guide when the site needs it |
| 72bf81b | Schema whitelist: 125 hand-curated → 933 (full schema.org catalogue) |
| a22ccbb | Structured Data Findings: sidecar CSV + grouped summary over 20 rows |
| 1eb99fb | Batch: cache-bypass, AEM fingerprint, Pipeline handler, @id index |

### mx-outputs

| Hash | Description |
|------|-------------|
| 33c90e2 | Regenerate 2026-04-17 PDF after sidecar propagation flow |
| 8b2c111 | robots.txt: disallow /books/appendices/ and /canon/ |
| 86736a7 | Sidecar CSV now ships alongside PDF in outreach folder |
| 7773144 | Regenerate PDF with grouped findings summary (141K → 131K) |
| 54ef75b | Add ORCID 0009-0008-7527-6286 to Tom's Person entities |
| 7ec3d59 | Regenerate PDF with populated Served/Rendered scores in Appendix A |
| d998b5f | Regenerate mx-allabout-network PDF with fixed verification footer |
| 7056dee | mx-site: apply real fixes from 2026-04-17 audit |

### mx-crm

| Hash | Description |
|------|-------------|
| 375e677 | Reissue audit with grouped summary + sidecar CSV |
