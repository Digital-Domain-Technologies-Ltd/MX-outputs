---
title: "Co-Directors Report — Reorganisation and Improvements at Scale"
created: "2026-02-23"
segment: "afternoon"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidential: true
---

# Co-Directors Report

## Reorganisation and Improvements at Scale

**Date:** 2026-02-23 (Afternoon)
**Theme:** Registry tooling maturity and metadata hygiene

---

## Executive Summary

Today was about infrastructure maturity. The COG registry — which is the knowledge graph underlying MX OS — now has comprehensive query tools and 100% validation compliance. We shipped 5 new query commands that let anyone interrogate the registry: find COGs by category, filter by status, count action-docs, track recently modified files, identify incomplete metadata.

**What this means:** The registry is no longer just a collection of markdown files. It's a queryable system. When we say "143 COGs, 0 errors, 0 warnings", that's not a manual count — it's a validation pipeline that runs on every commit.

**Scale achieved:** 23 commits today, touching 7,797 lines of code across documentation, tooling, and metadata. This is consolidation work — the net change is +4,054 lines, but much of that is documentation and registry snapshots that make the system self-describing.

---

## By the Numbers

- **Commits:** 23
- **Lines changed:** +7,797 / -3,743 (net: +4,054)
- **COGs in registry:** 143
- **Validation status:** 0 errors, 0 warnings
- **New npm scripts:** 5
- **Documentation files updated:** 6
- **COGs enriched with metadata:** 11+

---

## What Was Built

### 1. COG Query Tooling v2.1

Five new commands added to `scripts/cog-tools.js`:

| Command | Purpose |
|---------|---------|
| `cog:show` | Display full details of any COG by name |
| `cog:filter` | Multi-criteria filtering (7 filter options) |
| `cog:count` | Quick counts matching filter criteria |
| `cog:recent` | Show COGs modified in last N days |
| `cog:incomplete` | Find COGs missing recommended fields |

**Filter options available:**

- `--status` — Filter by lifecycle status
- `--category` — Filter by category
- `--type` — Filter by info-doc or action-doc
- `--tag` — Filter by tag
- `--author` — Partial match on author name
- `--missing` — Find COGs missing a specific field
- `--has` — Find COGs that have a specific field

**Why this matters:** These tools let us ask questions of the registry. "How many action-docs do we have?" → `npm run cog:count -- --type action-doc`. "Which COGs are missing authors?" → `npm run cog:filter -- --missing author`. This is the foundation for automated quality checks.

### 2. 100% Validation Compliance

Started the day with validation warnings on 32+ COGs. Ended with zero.

**What was fixed:**

- 7 contact COGs: Added author, created, category, tags fields
- 3 BDR/planning COGs: Added category field
- Root-level COGs (mx-vision, mx-messaging, mx-agent-independence): Fixed YAML frontmatter
- MX-Cog-Registry COGs: Cleaned up duplicate/redundant fields

**Why this matters:** Every COG in the registry now has complete recommended metadata. This isn't cosmetic — it means the registry is queryable by any dimension. Filter by author, sort by date, find by category — all work reliably.

### 3. Path Consolidation

Fixed stale references across the codebase:

- `data/MX-*` paths → `hub-content/MX-*`
- `hub-content/MX-Reginald/scripts/cog-registry/query.js` → `scripts/cog-tools.js`
- Legacy script paths in CI workflow updated

**Why this matters:** The February reorganisation moved files from `data/` to `hub-content/`. Today's work ensures all documentation and tooling points to the correct locations.

---

## What Changed

### Documentation Updates

| File | Change |
|------|--------|
| `mx-reginald-manual.cog.md` | v1.3 — comprehensive command reference with filter options |
| `mx-os-manual.cog.md` | Added Query commands section |
| `cog-query.cog.md` | v2.1 — action-doc updated with new commands |
| `hub.md` | Organised command categories (Registry, Query, Validation, Graph) |
| `README.md` | Updated Cog System section |
| `field-dictionary.cog.md` | v1.4 — expanded status field values |

### Field Dictionary Expansion

The `status` field now officially supports:

- Standard: draft, active, published, deprecated, archived, unknown
- Decision records: proposed, accepted, rejected, superseded
- Workflow: pending, planning, open, closed, sent
- Special: canonical

This codifies the status values that were already in use across different COG types.

### CI/CD Integration

Updated `.github/workflows/validate-cogs.yml`:

- Now watches `scripts/cog-tools.js` for changes
- Uses consolidated tool for registry summary
- Validation runs on every PR touching COG files

---

## Decisions Made

### 1. Single Entry Point for COG Operations

**Decision:** All COG commands route through `scripts/cog-tools.js`.

**Rationale:** The old system had `query.js` and `validate-cogs.js` in different locations. Consolidation means:

- One file to maintain
- One place to add features
- Consistent YAML parser (no external dependencies)

**Legacy scripts:** Still exist with deprecation notices pointing to new location.

### 2. Builds-On Reference Cleanup

**Decision:** Removed references to deprecated `cog-unified-spec` COG.

**What changed:**

- `cog-unified-spec` → `what-is-a-cog` in all builds-on arrays
- Simplified builds-on format (removed version/relationship nesting)

**Why:** The old spec was superseded by the block architecture ADR. References to it were creating orphan warnings in validation.

---

## What This Means for Investors

### Registry as Product Infrastructure

The COG registry isn't just internal documentation — it's the knowledge graph that REGINALD will serve. Today's work makes that graph:

1. **Queryable** — API-style access to registry contents
2. **Validated** — Schema and dependency checks on every commit
3. **Complete** — 100% metadata coverage
4. **Self-describing** — The registry documents itself

When we demo REGINALD to investors, the registry query tools become part of the story: "This is how the system knows what it knows."

### Quality Signal

143 COGs, 0 errors, 0 warnings. That's a quality bar that can be demonstrated. The validation pipeline catches metadata drift before it reaches production.

---

## Commit Log (Today)

| Hash | Description |
|------|-------------|
| `8a79eac` | **feat:** add 5 new COG query commands |
| `7ea5cd4` | **docs:** update documentation for new COG query commands |
| `e2e348f` | **chore:** enrich COG metadata to achieve 100% validation compliance |
| `cda4d1f` | **chore:** update COG registry snapshot and legacy scripts |
| `00beca3` | **ci:** update workflow to use consolidated cog-tools.js |
| `8178bf1` | **chore:** fix COG metadata for validation compliance |
| `a0f226f` | **fix:** update builds-on references to current COG names |
| `5eb6cdc` | **docs:** update references and field dictionary |
| `2588e9b` | **chore:** add git cherry-pick to allowed bash commands |

Plus 14 earlier commits covering MX compliance checker, path fixes, and registry snapshots.

---

## Next Steps

### 1. London CMS Experts (26 Feb) — Priority: High

**What:** Presentation/demo at CMS Experts London
**Status:** 3 days away
**Prep needed:** Demo script, talking points, any slide updates

### 2. REGINALD Cloudflare Worker — Priority: High

**What:** Server-side language redirect implementation
**When:** Before Frankfurt (12 May)
**Status:** Proposal documented, awaiting implementation

### 3. Handbook Print Files — Priority: Medium

**What:** Print-ready PDF for Scott/LPC
**When:** Mid-March deadline for 2 April publication
**Status:** Content in progress

---

## Session Metadata

**Segment:** Afternoon (12:00–16:59)
**Commits:** 23
**Repositories modified:** 1 (main) + submodule updates
**Lines changed:** +7,797 / -3,743
**Files touched:** 45+
**Validation:** 143 COGs, 0 errors, 0 warnings

**Participants:**

- Tom Cranstoun (direction, approval)
- Maxine (implementation, documentation, commits)

---

## Conclusion

The COG registry is now a mature, queryable system with 100% metadata compliance. This is infrastructure work that makes everything else faster — finding COGs, validating changes, tracking what's been modified. The 5 new query commands are immediately useful for anyone working with the registry.

**Status:** Complete and pushed to origin/main.

---

*"Reorganisation and improvements at scale."* — Tom Cranstoun

**Prepared by:** Maxine (AI Co-Director)
**Reviewed by:** Tom Cranstoun (Co-Founder)
**Distribution:** Eleanor Cranstoun (Director), Scott McGregor (Director), Advisory Board (on request)
