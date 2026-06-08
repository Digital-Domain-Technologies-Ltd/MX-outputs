---
title: "Co-Directors Report — A2A Agent Cards, Full Audit, Wikidata Level 4"
created: "2026-04-12"
x-mx-segment: "afternoon"
version: "1.0"
author: Tom Cranstoun
audience: business
confidential: true

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-12-afternoon-report.md
  purpose: "Co-Directors Report - A2A Agent Cards, Full Audit, Wikidata Level 4"
  audience: [humans, machines]
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - A2A Agent Cards, Full Audit, Wikidata Level 4"]
---

# Co-Directors Report — A2A Agent Cards, Full Audit, Wikidata Level 4

**Date:** 12 April 2026 — Afternoon
**Segment:** afternoon

---

## Summary

Three deliverables in one session. First, added awareness of the A2A (Agent2Agent) protocol's agent card (`/.well-known/agent-card.json`) across the entire audit infrastructure — skills, collector, templates, and config. Second, ran a full-scope audit of mx.allabout.network (45 pages, unlimited) producing the first report that includes the Service Description Layer assessment. Third, created Wikidata entries for Tom Cranstoun, CogNovaMX, and The Gathering, then wired the QIDs into Schema.org `sameAs` across all three sites — moving schema maturity from Level 3 (Real graph) to Level 4 (Verified linked data).

---

## What Was Done

### 1. A2A Agent Card — Audit Infrastructure Update

Added the Service Description Layer concept to the audit pipeline. The A2A protocol defines `/.well-known/agent-card.json` as the standard location for service description — complementary to llms.txt (which describes content, not services).

Files updated:

- `mx-audit/src/config/template-v2-config.js` — `hasAgentCard` in discovery and confidence checks
- `mx-audit/templates/web-audit-suite-template.md` — new `agent-card.json (A2A)` subsection in Discovery Files
- `.claude/skills/audit-discovery/skill.md` — full agent card check workflow in Step 5
- `.claude/skills/audit-collect/skill.md` — MX Context discovery files list
- `.claude/skills/audit-site/skill.md` — MX Context, Phase 3 outputs, phase description
- `.claude/skills/audit-report/skill.md` — Discovery Files references throughout

Design: service-oriented sites get a finding; informational sites get an optional enhancement note.

### 2. Full-Scope Audit of mx.allabout.network

Ran the 5-phase audit pipeline (`/audit-site`) with `-c -1` (unlimited), excluding `/books/appendices`.

Key results:

| Dimension | Score |
|-----------|-------|
| Performance | 95/100 |
| Accessibility | 100/100 |
| SEO (all / content) | 96 / 98 |
| AI Suitability | 100/100 |
| MX Stack | 98/100 |
| SDQ | 98/100 |
| Discovery | 100/100 |
| Pipeline Survivability | 100/100 |
| Consistency | 100% |

One actionable finding: broken link on `/blog/mx-a-new-role.html` — smart quotes (`\u201d`) around a Schema.org href caused a 404. Fixed in-session, committed, and pushed.

Agent card assessment: absent (404) — correctly noted as optional enhancement for an informational site.

Deliverables: markdown report, verification JSON, and PDF in `mx-crm/outreach/2026-04-12/` and `mx-outputs/pdf/outreach/2026-04-12/`.

### 3. Wikidata Entries — Schema Maturity Level 4

Created three Wikidata items with Tom:

| Entity | QID |
|--------|-----|
| Tom Cranstoun | Q139251136 |
| CogNovaMX | Q139251183 |
| The Gathering | Q139251250 |

All three are cross-linked (founded by / founder relationships). Wikidata QIDs added to Schema.org `sameAs` arrays across all sites:

- `mx.allabout.network` — homepage, about page, author profile page
- `allabout.network` — homepage
- `ddt-site` — homepage

This moves schema maturity from Level 3 (Real graph) to Level 4 (Verified linked data) — entities are now anchored in the global knowledge graph.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Audit pages scanned | 45 |
| Pa11y accessibility issues | 0 |
| Schema.org entity types | 21 |
| Schema.org entities | 143 |
| Wikidata items created | 3 |
| Sites updated with QIDs | 3 |
| Broken links fixed | 1 |
| Files modified (skills/config) | 6 |
| Submodules committed | 4 (mx-audit, mx-crm, mx-outputs, allaboutv2) |

---

## The Insight

The session connected three layers that are usually treated separately. The A2A agent card is the service-discovery complement to llms.txt — together they cover both content and capabilities. The Wikidata QIDs anchor the site's entities in a global graph that AI models already index. And the audit report demonstrates the result: a site where every metadata layer from semantic HTML through to linked-data identifiers is present, consistent, and verified. The path from "good metadata" to "entities that AI models recognise as authoritative" is shorter than most organisations realise — three Wikidata entries and a few `sameAs` values.

---

## Next Steps

- Deploy the Cloudflare Worker to serve the updated allaboutv2 files (QIDs go live)
- Consider ORCID registration for Tom Cranstoun (author identifier, complements Wikidata)
- Monitor Wikidata items for community edits or deletion nominations
- Run the audit again after Wikidata propagation to verify Level 4 detection

---

## Commit Log

| Hash | Description |
|------|-------------|
| 9924004b | Fix smart-quote blog link, add audit PDF |
| 522dbff7 | Add Wikidata QIDs to mx-outputs Schema.org entities |
| b9815c60 | Add Wikidata QIDs to allaboutv2 Schema.org entities |
| 73bc97bf | Add The Gathering Wikidata QID (Q139251250) |
| 1752f03f | Add A2A agent-card.json to audit skills |
| ef070b52 | A2A agent-card support + audit report |
| 6ae7f7a3 | Orders dashboard + PDF cleanup |
