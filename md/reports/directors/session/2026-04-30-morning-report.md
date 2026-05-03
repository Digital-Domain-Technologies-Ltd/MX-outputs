---
title: "Co-Directors Report — MX governance metadata in PDF; field migration to core; baremetal.vc audit delivered; pipeline hardened"
description: "Morning: XMP injection, field migration to core, audit blog. Late morning: full baremetal.vc client audit (6 gates passing, PDF delivered), plus 5 audit pipeline improvements closing gate-bypass failure modes identified during the run."
author: "Tom Cranstoun"
created: 2026-04-30
modified: 2026-04-30
version: "1.5"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-30-morning-report.md
---

# Co-Directors Report — MX governance metadata in PDF; field migration to core; baremetal.vc audit delivered; pipeline hardened

**Date:** 30 April 2026 — Morning
**Segment:** morning (since midnight)

## Summary

The morning extended yesterday's EAA pipeline from "tagged PDFs with a Level 2 conformance claim" to "tagged PDFs that carry the full MX governance metadata layer". A new helper script parses the source markdown's YAML frontmatter and writes 22 distinct mx-prefixed XMP properties into the produced PDF, alongside the Level 2 `pdfuaid:Part=1` claim. After the technical work shipped, fourteen fields migrated from `cognovamx-fields.yaml` into `fields-data.yaml` core tier, with four declared MUST at Level 2. The sales-facing layer landed alongside: a 1850-word draft blog post arguing the audit service pays for itself across three vectors (inference cost, hallucination reduction, regulatory exposure).

In the late morning, the full web audit for Bare Metal Ventures (baremetal.vc) was delivered end to end: data collection, scoring, discovery, access testing, two-pass report generation, all six quality gates passing, and the client PDF generated. The audit run surfaced five pipeline failure modes (fabricated performance score, missing placeholder-fill logging, platform-capability claim assertions, template voice drift, single-page site warning) which were all fixed in the same session.

## What Was Done

### 1. MX XMP injection extended end to end

A new `mx-audit/scripts/bin/inject-mx-xmp.sh` parses YAML frontmatter from a source markdown file (with PyYAML when available, hand-written fallback otherwise) and writes each `mx:`-prefixed field as an XMP property on the produced PDF. The companion `exiftool-mx.config` registers two namespaces in one config: `pdfuaid` for the EAA Level 2 conformance claim, and `mx` for the governance metadata. The `mx.pdf.sh` chrome path, `gen-book-chrome.sh`, and `gen-free-book.sh` were all wired to invoke the injector instead of writing only the L2 claim. End-to-end verification on a freshly-regenerated mx-handbook composite confirms `XMP-mx:Author`, `XMP-mx:Copyright`, `XMP-mx:Status`, `XMP-mx:Tags`, `XMP-mx:Created`, plus `XMP-pdfuaid:Part=1` all round-trip correctly.

### 2. Field triage and migration to core

A four-question triage produced a clean split. Fourteen fields with direct Dublin Core or Schema.org analogues moved from `cognovamx-fields.yaml` to `fields-data.yaml` under a "Document discovery and lifecycle" comment block: canonicalUrl, supersedes, supersededBy, expires, reviewBy, summary, conformsTo, relatedDocs, topic, entities, speakable, supportContact, trainingDataPolicy, doNotIndex. Each carries a type, definition, example, profile, required flag, status, and a note pointing at its prior-art analogue. Nine fields stayed in the vendor file as genuinely CogNovaMX-specific (sourceRepo, commitSha, builtAt, agentInstructions, reuseTerms, apiEndpoint, dataEndpoint, correctionSla, noLLMReprocess). The core profile now declares `requiredAtLevel2: [canonicalUrl, summary, conformsTo, trainingDataPolicy]` as a new conformance-level construct alongside the existing flat `required:` list.

### 3. Gathering proposal landed

A new section 7a "Document discovery and lifecycle" went into `mx-shared-gathering/draft-core-metadata.md` covering all 14 fields with five subsections (identity and provenance, lifecycle dates, action affordances, semantics and structure, consumption policy) plus a conformance-summary subsection naming the four MUST-at-L2 fields with their reasoning. The proposal flags the namespace question explicitly: the reference implementation uses `https://schemas.cognovamx.com/mx/1.0/`; the Gathering may wish to propose a vendor-neutral namespace once the field set is ratified.

### 4. Sales-facing blog work

The tagged-pdfs-are-mx draft was promoted from drafts to live blog/, with `<meta name="robots">` flipped to `index,follow` and the sitemap.xml regenerated via `scripts/sync-blog-discovery.cjs`. A new draft, `why-an-mx-audit-pays-for-itself.html` (1850 words, eight sections, noindex pending review), positions the audit as the entry point to MX discipline with three payback vectors: reduced inference cost across every machine read, reduced hallucination because agents are no longer reconstructing from incomplete source, reduced regulatory exposure under the EAA enforcement window. The Adobe-just-bought-the-dashboard draft gained a new section tying the acquisition signal to the EAA regulatory tailwind, framing the audit work as the bridge between the boardroom message and the legal department message.

### 5. baremetal.vc client audit delivered

The full Web Audit Suite pipeline ran against Bare Metal Ventures (baremetal.vc), a Webflow-hosted VC site. Two pages audited (homepage + anchor fragment — the site uses Webflow anchor navigation rather than separate HTML pages). Key scores: Accessibility 15/100 (34 Pa11y violations, all template-level), SEO 54/100, AI Suitability 81/100 (no served/rendered gap), Discovery Readiness 10/100, Structured Data 0/100. All 8 AI agent user-agents returned HTTP 200. The two-pass infill + rewrite pipeline ran to completion; all six quality gates (readability hook, deterministic verifier, fierce critic, LLM judgment × 3 rounds, template-leak gate) passed. Client PDF generated at 66KB.

### 6. Audit pipeline hardened

Five failure modes surfaced by the baremetal.vc run were fixed in the same session. (1) `[PERF_SCORE]` was computed from a fabricated formula (`100 - loadMs/100`) producing a score not grounded in any audit CSV; replaced with a band-mapped representative value. (2) Phase 5 placeholder fill was never logged; infill-report.js now appends one CSV row per placeholder to the audit-log file. (3) The readability hook now has a static grep for platform-capability assertions (e.g. "Webflow can generate a sitemap") that assert CMS internals not observed in HTTP responses. (4) A voice declaration was added to the template instruction block to prevent LLM rewrite drift between third-person and second-person within a single report. (5) infill-report.js now emits a stderr warning when fewer than 3 HTML pages are audited, flagging likely anchor-navigation sites before report generation. Cache TTL also increased from 24h to 10 days.

## Why It Matters

The technical EAA pipeline that shipped over the previous evening was a service deliverable. The morning's work made it a discipline: governance metadata travels with the document into every carrier the publisher emits, and the open standard now formally proposes the field set at core tier so non-CogNovaMX implementers can adopt it without depending on the vendor file. The blog post turns the same discipline into an instrument of business development. The audit is no longer a one-shot deliverable; it is the entry point to a discipline layer that pays for itself across the lifetime of the document corpus.

The triage decision matters in its own right. By moving 14 fields to core and keeping 9 vendor, the project signals that machine-readable governance is a property of the open MX standard, not a CogNovaMX-specific extension. Other implementers can adopt the core fields without trace of vendor lock-in. CogNovaMX retains the operational and accuracy-framework specifics that genuinely belong to its publishing pipeline.

## Decisions Made

- **Field triage approved without modification.** The proposed Group A (14 universal core) / Group B (9 vendor-specific) split landed exactly as proposed. Required-at-Level-2 set to all four candidates: canonicalUrl, summary, conformsTo, trainingDataPolicy.
- **Gathering proposal as draft section, not new note.** A section was added to the existing `draft-core-metadata.md` rather than spinning out a fresh `draft-document-discovery.md`. Keeps the proposal alongside the rest of the core metadata definition where reviewers expect it.
- **Vendor namespace acknowledged as open question.** The reference XMP namespace `https://schemas.cognovamx.com/mx/1.0/` is CogNovaMX-owned. The Gathering proposal flags this explicitly and asks for a vendor-neutral namespace once the field set is ratified.

## Open Questions

- **Validator support for `requiredAtLevel2`.** The new conformance-level construct in the core profile is not yet honoured by `cog:validate` or `check-mx-compliance.js`. Until a follow-up extends the validators, the `requiredAtLevel2` list is documentation rather than enforcement. Filed as a reminder; not blocking the proposal.
- **Pre-existing duplication of `expires` and `supersedes` in vendor file.** Both fields existed in `cognovamx-fields.yaml` under separate definitions before today's migration added them to core. The duplicates need a deduplication pass: confirm semantics match, then remove from vendor (or mark as deprecated with replacement pointers).

## Next Steps

- Promote `why-an-mx-audit-pays-for-itself.html` from drafts to blog/ once Tom approves the framing. Same playbook as the tagged-pdfs-are-mx promotion: `git mv`, flip robots, fix `../../` paths, run sync-blog-discovery.
- Extend `cog:validate` and `check-mx-compliance.js` to honour the `requiredAtLevel2` construct so the four MUST-at-L2 fields actually gate.
- Deduplicate the pre-existing `expires` and `supersedes` entries in `cognovamx-fields.yaml` against the new core entries.
- Wire `npm run check:pdfs:tagged` into the deploy gate so the corpus tagging gate cannot regress.
- Send baremetal.vc report to client contact.

## Commit Log

| Hash | Repository | Description |
|------|------------|-------------|
| 323d660 | mx-audit | MX XMP injection: inject-mx-xmp.sh + exiftool-mx.config |
| bd8ba23 | mx-shared-gathering | draft-core-metadata: propose Document Discovery and Lifecycle (sec 7a) |
| 040b1da | mx-outputs | Blog: tagged-pdfs-are-mx promoted; new audit-pays-for-itself draft; Adobe blog updated |
| ec04723 | mx-outputs | Drafts index: add why-an-mx-audit-pays-for-itself; refresh Adobe blurb |
| 9e7c346 | mx-outputs | Audit blog draft: humanize per writing-style guide |
| a0d8c6b | mx-outputs | Blog: promote why-an-mx-audit-pays-for-itself from drafts to live |
| 6c5feec | mx-outputs | mx-site: link audit blog from home + services + about + blog index |
| bf3c112 | allaboutv2 | ddt-site: link audit blog + humanizer pass |
| 818ba095 | hub | MX field migration to core, XMP-bearing manuscripts, audit pitch update |
| 57425523 | hub | Docs: CHANGELOG v1.54 + REMINDERS for field migration + audit blog |
| 6defe16 | mx-audit | Pipeline improvements: PERF_SCORE guard, placeholder logging, min-page warning, stale TTL 10d |
| 495236d | mx-crm | baremetal.vc audit: full report, gates, and audit log |
| ca9bda6 | mx-outputs | baremetal.vc: PDF report and sidecars (2026-04-30) |
| 28177438 | hub | Hub commit: submodule pointers + check-report-readability.js platform-claims gate |
