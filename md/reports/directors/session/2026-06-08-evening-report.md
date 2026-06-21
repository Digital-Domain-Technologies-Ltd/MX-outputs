---
title: "Co-Directors Report — Machine-Readability Completeness and a Reusable Backfill Tool"
description: "Closed the MX required-metadata gap across the published estate with a new deterministic tool, taught the validator the document types that legitimately differ, and removed AI co-authorship corpus-wide."
author: "Tom Cranstoun"
created: 2026-06-08
modified: 2026-06-08
version: "1.1"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-08-evening-report.md
  purpose: "Closed the MX required-metadata gap across the published estate with a new deterministic tool, taught the validator the document types that legitimately differ, and removed AI co-authorship corpus-wide."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Machine-Readability Completeness and a Reusable Backfill Tool"]

---

# Co-Directors Report — Machine-Readability Completeness and a Reusable Backfill Tool

**Date:** 8 June 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

This session closed the gap between "machine-readable in principle" and "machine-readable across the whole estate" - and left a reusable tool behind to keep it closed. A new deterministic backfill tool filled the required MX metadata on roughly 290 published files in one pass, deriving every value from each file's own existing frontmatter rather than inventing anything. Separately, AI co-authorship was removed from every deliverable and code header. Every change shipped through the pre-push gates with none bypassed.

A later body of work in the same evening added a new metadata field, `x-mx-managedBy`, that names the cog or script responsible for each artefact as it travels its pipeline, so a machine reads the responsible handler instead of inferring it (and pays no inference cost to find it). The field was taken through the full canon lockstep, a single path-to-manager resolver was built and reused by every tool that touches it, and the entire blog estate was brought up to the field plus the long-missing MX compliance head tags. The blog now reports zero compliance errors where every page failed before.

---

## What Was Done

### 1. A reusable metadata backfill tool

Built `scripts/backfill-mx-required-fields.cjs`. It uses the validator itself as the authority for which fields a file is missing, so it can never drift from what the gate enforces, and it derives each value from the file's own frontmatter (description, status, title) instead of guessing. Writes are minimal and non-clobbering. It cleared 275 published files in the outputs repository plus the remaining gaps in the canon and CRM trees. An earlier one-line fix to the definitions-index generator brought the canon to a true zero, at source, so the file cannot regress on its next regeneration.

### 2. The validator now matches real document types

Two document types were being flagged for lacking operational metadata they should never carry: product licences (verbatim legal text) and the published cog-specification demonstration cogs (which deliberately use a richer schema). The validator now exempts both, the same way it already exempted README and identity files. The gate now reflects reality instead of forcing clutter onto legal text and specification showcases. A bug in the new tool, which could misplace fields under a trailing nested object, was found and fixed in the same pass.

### 3. Brand integrity: AI co-authorship removed

"Maxine" was removed from the author field of eleven documents (directors reports, changelog archives, an article) and from the author header of seventy-nine code files. The audit pipeline was checked and already defaults to a human author, so no pipeline change was needed. The immutable audit evidence captures, whose filenames are content hashes, were deliberately left as recorded.

### 4. A stewardship field, and the blog brought to the MX-head contract

Added `x-mx-managedBy` to the canon (vendor extension, dictionary 6.11 to 6.12, prose mirror in Appendix M, definitions index regenerated, gates clean). It records present-tense stewardship: the cog (preferred) or script that manages a file as it moves through its pipeline, a slot none of the existing provenance fields filled. A single resolver maps any path to its manager and is reused by every consumer (the generator, two backfills, the checker, and the test) so they cannot disagree. The blog generator template now also emits the five MX compliance head tags it had been missing, with the constant values hard-coded so the next revision infers nothing. The whole published blog was lifted in place by a head-only backfill, and a working-tree checker now reports the estate fully stamped with no drift. PDF and audit carriers, plus a stewardship question on listing pages, are recorded in REMINDERS for a later pass.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 14 (11 required-metadata + AI-author, 3 managed-by) |
| Files changed | ~630 |
| Repositories | 2 (hub, mx-outputs) |
| New reusable tools | 5 (`backfill-mx-required-fields`, `managed-by` resolver, two managed-by backfills, the managed-by checker) |
| Blog compliance errors | every page to zero |
| Gate bypasses | 0 |

---

## Why It Matters

Machine-readability is the core promise. A page that an agent, a validator, or a screen reader meets without the system that produced it must still declare what it is, who it is for, and how it may be used. After this session every published file in scope carries that declaration, and the tool means new files reach the same bar without manual effort. The brand-integrity pass ensures every authored artefact, client-facing or internal, attributes an accountable human before it ships.

---

## What This Means for Investors

The backfill tool is a small but real piece of reusable intellectual property: a deterministic workflow that makes the MX discipline cheap to maintain at scale. It is the difference between a standard that is followed by hand and one that is enforced by a script and a gate. That is the same pattern the whole product rests on, applied to its own house.

---

## Next Steps

- Apply the backfill tool to the remaining in-scope trees (the Reginald source tree and others) that still carry pre-existing required-metadata gaps; this session scoped to the published outputs, the canon, and the CRM.
- The five files that initially resisted the backfill are resolved: two were field-fixed, and three (the cog-specification demonstration cogs) are now validator-exempt by design.
- The `mx:backfill` npm aliases are in `package.json`; the tool also runs directly via node.
- Stamp the `x-mx-managedBy` field into the PDF (XMP) and audit-deliverable carriers; each needs a pipeline run to verify, so both are tracked in REMINDERS rather than done blind.
- Decide the stewardship of blog listing and index pages (the "split problem"): they have no single managing cog, so they are excluded from the field for now, also in REMINDERS.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 2b072392 | (mx-outputs) Backfill x-mx-managedBy across mx-site HTML and publish Block the Machine post |
| a3bb6962 | Update Intent CMS PRD: generator carries version and x-mx-managedBy into HTML |
| ccb7dfff | Add x-mx-managedBy stewardship field and backfill across blog sources |
| e8eef2aa | Add MX frontmatter to 24 reference and README files |
| 37678760 | Emit mx.purpose/stability/x-mx-contextProvides in definitions-index generator |
| 50904f78 | Add reusable MX required-field backfill tool; backfill mx-crm + mx-outputs |
| 2a70d17a | Exempt licence files from MX field validation (bare like README) |
| c13cd291 | Exempt mx-site/reginald spec cogs from MX field validation; fix backfill indent |
| 4d915e64 | Drop Maxine from author attribution (changelog archives + article) |
| 4fe497b0 | Drop Maxine from @author JSDoc headers across audit and script code |
| 9f41dcdb | (mx-outputs) Backfill missing required MX fields across published content |
| 9735301f | (mx-outputs) Revert MX frontmatter on product licence files - keep them bare |
| 16990ac9 | (mx-outputs) Fix MX field validation on two reports |
| 2ff9e3b3 | (mx-outputs) Drop Maxine from author attribution in four directors reports |
