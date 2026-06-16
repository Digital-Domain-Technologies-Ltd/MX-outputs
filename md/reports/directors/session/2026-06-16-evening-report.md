---
title: "Co-Directors Report - x-mx Namespace Governance and Field Scanner"
description: "Evening session building the x-mx- vendor extension namespace PRD, deterministic field scanner, and x-mx-govRef field for code-to-spec traceability."
author: "Tom Cranstoun"
created: 2026-06-16
modified: 2026-06-16
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-16-evening-report.md
  purpose: "Evening session building the x-mx- vendor extension namespace PRD, deterministic field scanner, and x-mx-govRef field for code-to-spec traceability."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["x-mx namespace governance session: PRD, scanner, govRef field, four open overlap rulings needed from Tom"]
---

# Co-Directors Report - x-mx Namespace Governance and Field Scanner

**Date:** 16 June 2026 - Evening
**Segment:** Evening (since 5pm)

---

## Summary

This session built the governance infrastructure for the `x-mx-` vendor extension namespace: a PRD that defines what belongs there, a deterministic scanner that audits the entire estate, a new field (`x-mx-govRef`) that lets any script declare the specification that governs it, and two REMINDERS entries that put the four open overlap decisions in front of Tom. The scanner found 371 distinct field names across all submodules, of which 116 have no dictionary entry - a concrete backlog that was previously invisible.

---

## What Was Done

### 1. Field scanner (`npm run fields:scan`)

A new script walks every initialised submodule and the hub, extracts every MX field name from every supported carrier (markdown frontmatter, HTML meta tags, YAML, JSON, HTML source-frontmatter blocks), and writes `mx-field-scan.json` to the repo root. The output gives each field its occurrence count, namespace tier (open-standard / vendor-cognovamx / unknown), semantic group, and carrier types.

First scan result: 371 total fields, 81 open-standard, 174 vendor-cognovamx, 116 unknown. Notable unknowns that need Tom's ruling: `x-mx-backport` (used 322 times), `x-mx-provenance` (214 times), plus several family clusters (`x-mx-reginald-*`, `x-mx-prov-*`, `x-mx-dream*`). These are real fields in heavy use that the dictionary simply does not know about yet.

### 2. x-mx- Vendor Extension Namespace PRD

`mx-canon/mx-os/x-mx-namespace-prd.cog.md` is the governing document for the namespace. It defines the three-tier model (open-standard / vendor-cognovamx / vendor-private), describes the scanner and how to read its output, lists the semantic groups, and frames four open overlap questions that require Tom's ruling before the consolidation sweep can run. It also sets the addition gate - the checklist any new `x-mx-` field must pass before landing in the dictionary.

### 3. `x-mx-govRef` field

Added to `mx-canon/ssot/cognovamx-fields.yaml`. Any script or source file can now carry this object in its frontmatter comment block to declare the PRD, architecture doc, and action cog that govern it. This makes code self-describing about its specification - an arriving agent or new contributor reads the file header and knows where the governing docs live without relying on human memory or a README that may be stale.

---

## Why It Matters

The field namespace has grown across two years of sessions with no governing document. The scanner result - 116 fields in use that the dictionary does not know about - is the audit evidence that confirms the problem is real, not theoretical. A namespace without governance accumulates synonyms, near-duplicates, and deprecated forms that never retire, which raises the cost of every tool that reads MX metadata (the audit pipeline, the compliance gates, the content cockpit). The PRD closes the governance gap; the scanner makes it auditable on demand. Both are prerequisites for the field-consolidation sweep the 🔴 REMINDERS item has been tracking since June.

---

## Open Questions

- Four overlap decisions are documented in the PRD and surfaced in REMINDERS. Tom needs to rule on each before the sweep runs: (1) `x-mx-contextProvides` vs `purpose`/`description`; (2) `x-mx-category` vs `tags`/`contentType`; (3) `x-mx-aiAssistance` vs `x-mx-aiEditable`; (4) bare `contentPolicy` vs `x-mx-contentPolicy`.
- `x-mx-backport` (322 occurrences) and `x-mx-provenance` (214) are the two largest unknown fields. Are they intentional extensions that should be canonicalised, or leftover scaffolding to retire?

---

## Next Steps

- Tom rules on the four overlap decisions in the PRD (closes the 🔴 classification-inconsistency REMINDERS item)
- Wire `x-mx-govRef` onto the three priority hub scripts: `scripts/promote.cjs`, `scripts/generate-content-html.cjs`, `scripts/audit-pipeline.js`
- Decide the fate of `x-mx-backport` and `x-mx-provenance` based on scan output
