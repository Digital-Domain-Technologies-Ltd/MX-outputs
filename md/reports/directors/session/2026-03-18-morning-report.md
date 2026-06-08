---

title: "Co-Directors Report — Cog Lifecycle and SSOT Consolidation"
created: "2026-03-18"
version: "1.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "morning"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-18-morning-report.md
  purpose: "Co-Directors Report - Cog Lifecycle and SSOT Consolidation"
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Cog Lifecycle and SSOT Consolidation"]
---


# Co-Directors Report — Cog Lifecycle and SSOT Consolidation

**Date:** 18 March 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

This morning completed the specification layer that makes cogs self-aware about their own age, freshness, and succession. The SSOT fields dictionary was overhauled — deprecated fields removed, `inherits` and `cacheability` canonised, and the full 7-state lifecycle model formalised in the unified spec. The Reginald explainer was updated to v1.2 with the new concepts, and a consistency pass ensured lifecycle states are uniform across all sections of the specification.

---

## What Was Done

### 1. SSOT Fields Overhaul

Removed 7 deprecated fields from `fields.cog.md` (prose-source, name, type, confidentiality, inherit, inheritFrom, issued, venue). Canonised `inherits` as full-document extension (any file type, any path), `cacheability` with 5 tiers (ephemeral to permanent, default: medium), and `supersededBy` for succession pointers. Replaced `confidentiality: internal` with `confidential: true` across 35 director reports and 2 templates.

### 2. Cog Lifecycle Model

Wrote comprehensive Section 13 in cog-unified-spec.cog.md: 7 lifecycle states (draft → active → published → review → deprecated → superseded → archived), certificate lifecycle for REGINALD-registered cogs, versioning semantics (patch/minor/new cog with "the test"), trust decay model (fresh → ageing → stale via lastVerified/cacheability/expires), and type-specific overrides for info, action, routing, and certificate cogs.

### 3. Reginald Explainer Update (v1.2)

Added four new subsections to the business case document: Document Extension with `inherits`, Cacheability tiers, Lifecycle states, and Trust Decay. Updated comparison tables, business case bullets, summary table, "What Exists Today", and launch calendar with 18 March milestones.

### 4. Specification Consistency Pass

Aligned lifecycle enums across the entire cog-unified-spec: Section 15 (validation rules — removed deprecated `name`, added `status` requirement), Section 20 (non-cog documents — replaced `stable` with proper 7-state enum), Section 21 (scripts — extended status enum with superseded/archived). Bumped spec to v2.2-draft.

### 5. Inherits and Prose-Source Migration

Added `mx.inherits` to all paired .md/.cog.md files in mx-canon/mx-maxine-lives/. Removed `prose-source` from all cogs across main repo, allaboutv2, and mx-outputs. Updated narrative text in fields.cog.md and cog-unified-spec.cog.md to reflect the new semantics.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 0 (all uncommitted, pending step-commit) |
| Files changed | 12 |
| Lines added | +200 |
| Lines removed | −97 |
| Repositories | 3 (main, allaboutv2, mx-outputs) |

---

## Next Steps

- Commit and push all changes (step-commit in progress)
- Andres advisory meeting prep (Thursday 20 Mar)
- WordPress plugin Phase 1 testing
- MX-Reginald monetisation deployment checklist

---

## Commit Log

| Hash | Description |
|------|-------------|
| (pending) | SSOT overhaul, lifecycle model, Reginald explainer v1.2, spec consistency |
