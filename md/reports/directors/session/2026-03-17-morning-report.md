---

title: "Co-Directors Report — REGINALD v3: Pure Resolver and Visibility Classification"
created: "2026-03-17"
version: "1.0"
author: Tom Cranstoun
type: info-doc
mx:
  x-mx-segment: "morning"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-17-morning-report.md
  purpose: "Co-Directors Report - REGINALD v3: Pure Resolver and Visibility Classification"
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - REGINALD v3: Pure Resolver and Visibility Classification"]

---


# Co-Directors Report — REGINALD v3: Pure Resolver and Visibility Classification

**Date:** 17 March 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

REGINALD was redesigned from a content library to a pure DNS-like resolver and gained a 5-level visibility classification system. The registry dropped from 167 published COGs to 82, eliminating CRM contacts, internal manuals, product strategy, and operational tools from public output. The architecture now scales to a billion COGs without REGINALD touching content.

---

## What Was Done

### 1. Pure Resolver Architecture (v3)

Completed the REGINALD v3 redesign from the previous session's plan:

- **Content removed from registry** — REGINALD no longer hosts `content.md` files. Content moves to `content.allabout.network` (separate subdomain)
- **Per-namespace indices** — replaced monolithic `api/v1/cogs.json` with `api/v1/namespaces/{ns}/cogs.json`
- **Namespace discovery** — new `api/v1/namespaces.json` endpoint
- **All pointer mode** — every COG has `resolve_mode: "pointer"`, no more `"hosted"`
- **No cache** — removed `cache` object from all `latest.json` records
- Registry output dropped from ~3.6MB to ~500KB

### 2. Visibility Classification System

Tom identified that all COGs were being published indiscriminately. The solution:

- **5 visibility levels**: public, private-hosted, fileserver, repo, local
- **Path-based rules** with name overrides — `mx-crm/` → private, `mx-canon/ssot/` → public, `scripts/cogs/` → public with specific repo overrides
- **Frontmatter `confidential: true`** always forces private
- **Default: repo** — unknown COGs are never published (safe default)
- **Stale cleanup** — removed 127 pointer records and 85 content files for non-public COGs

### 3. Test Suite and Documentation

- Test suite expanded from 74 to 86 tests across 9 suites (new Suite 9: Visibility Classification)
- API reference updated with visibility section
- Explainer updated: "Four Visibility Levels" → "Five Visibility Levels" (added repo level)
- Launch calendar updated with v3 milestones

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Files changed (main repo) | 7 |
| Files changed (allaboutv2 submodule) | 420 |
| Lines added | +1,340 |
| Lines removed | −3,972 |
| Repositories | 2 |
| Total COGs scanned | 168 |
| Public (published) | 83 (82 CogNovaMX + 1 Agentica) |
| Repo (internal) | 76 |
| Private (excluded) | 10 |
| Tests | 86 (all passing) |

---

## The Insight

The visibility classification is not just a filter — it validates the four-level COG architecture described in the business case. Local → Repo → Private → Shared → Public is now implemented, not just documented. The flywheel has a working entry point: team COGs that are never published but still benefit from MX structure.

---

## Next Steps

- Configure `content.allabout.network` DNS (Cloudflare CNAME)
- Commit and push all changes (allaboutv2 submodule first)
- Consider adding `visibility` field to COG frontmatter spec for explicit per-COG control

---

## Commit Log

| Hash | Description |
|------|-------------|
| (pending) | REGINALD v3 pure resolver + visibility classification |
