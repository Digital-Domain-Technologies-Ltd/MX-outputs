---
title: "Co-Directors Report - Morning: Graph Query, Build Infrastructure, and OKF Adoption"
description: "Three sessions: graph query completeness; build infrastructure guide; estate-wide OKF dual-conformant frontmatter adoption with Gate 32 promoted to strict."
author: "Tom Cranstoun"
created: 2026-06-21
modified: 2026-06-21
version: "1.2"

type: report
tags: [directors-report, session, morning]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-21-morning-report.md
  purpose: "The MX graph can now find all surfaces related to any feature change in a single query pass, making the update-cogs-and-docs workflow graph-driven rather than manual."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Morning: Graph Query + Build Infrastructure Documentation"]

---

# Co-Directors Report - Morning: Graph Query + Build Infrastructure Documentation

**Date:** 21 June 2026 - Morning
**Segment:** Morning (since midnight)

---

## Summary

Three sessions ran this morning. The first made the MX graph answer "what do I need to update when this feature changes?" in a single query pass rather than by manual prose search. The second produced a definitive reference for how to extend the repository's own infrastructure. The third adopted the Open Knowledge Format (OKF) estate-wide, making every file in the repository simultaneously readable by both OKF consumers and MX consumers, with no fact carried twice and Gate 32 passing at 1,932 from 1,932.

---

## Session 3 - OKF Dual-Conformant Frontmatter

### What Was Done

Every markdown file in the MX estate - 2,892 of them - now carries a frontmatter block that satisfies both the Open Knowledge Format standard and the full MX model simultaneously. An OKF consumer reads the file and finds a valid OKF document. An MX consumer reads the same file and finds the full trust layer, typed relationship graph, and governance fields. No fact is written twice.

The work ran in ten phases. The field dictionary grew a third zone (Zone 1b: OKF reserved surface) alongside the existing identity zone and the operational `mx:` block. The fields `type` and `tags` were promoted from under `mx:` to the top level; `resource` was added as a new optional field for documents that describe a specific external asset. A machine-readable field mapping document was created as the single source of truth for all OKF field adoptions - the migration codemod, the projection helper, and the conformance gate all read that one file.

A deterministic migration codemod handled the estate sweep, using a hybrid approach: js-yaml for value extraction (preventing the date-coercion bug) and string manipulation for the actual text changes (preserving existing formatting). For 32 files with malformed YAML - a pre-existing indentation bug where a generated hash field was inserted between a parent key and its children - a second dedicated fixer was written that works line-by-line to handle literal blocks correctly. Both tools are now in the script library with npm run entries.

Gate 32 was established, wired into both `npm test` and the pre-push hook, and promoted from warn-only to strict once the estate was clean. It now hard-blocks any push that introduces a retiring synonym or missing `type` field. The final gate reading: 1,932 scanned, 1,932 passed, 0 violations.

An operator manual for the OKF integration was written as a cog (`scripts/cogs/okf-frontmatter.cog.md`), covering the three-zone model, field mapping tables, the `resource` vs `refersToExternal` distinction, gate usage, and common error patterns.

### Why It Matters

OKF compatibility is the commercial hook in the OKF positioning PRD: COG is OKF-compatible by design. A client running any OKF consumer tool - Google Cloud's knowledge catalog, any directory-of-knowledge tool built on the standard - reads our files without an adapter. MX adds everything OKF omits: the trust layer, the typed relationship graph, the provenance chain. We are not competing with OKF; we are the layer that completes it.

The no-duplicates discipline enforced by Gate 32 is also a data quality guarantee. One fact, one field. An auditor querying the estate can trust they are not seeing the same value under two names. That matters for regulatory provenance walks and for any downstream tool that ingests MX metadata.

### The Insight

The hardest part of the migration was not the frontmatter changes themselves - the codemod handled 2,892 files deterministically. The hardest part was the 32 files with pre-existing YAML errors that the codemod could not parse. Those files had a generated hash field positioned incorrectly between a parent key and its children. The regex fix worked for simple blocks but failed on literal block scalars with blank lines inside them (e.g. `policy: |` containing blank lines). The line-by-line algorithm - with the critical insight that blank lines terminate a child block only when the next non-blank line has fewer than 4 spaces of indent - handled every case cleanly.

---

## Session 2 - Build Infrastructure Documentation

### What Was Done

A new cog, `how-to-build-for-the-repo`, documents the non-optional architectural patterns every contributor must follow when adding a script, validator, hook, or index to the repository. It covers the single-contract pattern (one module owns a rule; all consumers import from it), the four foundation modules that underpin the metadata infrastructure, the two-layer enforcement system (write-boundary hooks and pre-push gates), the three preconditions for generated index regeneration (main branch, fat clone, installed dependencies), and a condensed pre-ship checklist.

The UBERCOG, README.md, and `manual-repository-architecture.cog.md` all received a reference to the new cog so any agent or developer entering the repository via those surfaces is routed to it before building anything. The developer blog index was updated with a full inline summary of the principles in chatty prose, removing the need for a separate link - readers get the substance directly on the page.

### Why It Matters

The repository self-enforces its structural rules mechanically, but until now the underlying design rationale was distributed across CLAUDE.md, the architecture cog, and individual gate comments. A new contributor or a fresh AI session had no single place to read "here is how this infrastructure is designed, and here is why". That gap is the difference between a contributor who understands the system and one who violates a pattern without knowing it exists. The new cog closes that gap. The dev blog enrichment ensures the principle is accessible to developers who would not naturally open a cog file.

---

## Session 1 - Graph Query Completeness

The MX graph can now answer the question "what do I need to update when this feature changes?" in a single query pass rather than by manual prose search. Three new capabilities landed: a backlinks tool that finds every surface referencing a given cog, a `covers` field that lets blog posts declare what features they document, and automatic synonym expansion so a search for "validation" also finds "audit", "verification", and related terms. Blog drafts and manuscript chapters are now first-class graph nodes, which means 331 previously invisible surfaces are now queryable and can be discovered when running an update sweep.

---

## What Was Done

### 1. Graph query infrastructure

A seventh MCP tool, `mx_graph_backlinks`, returns every surface that references a given cog or file path, with the field that caused the link (`relatedTo`, `buildsOn`, or `refersTo`). Alongside it, a synonym expansion system loads `graph-synonyms.yaml` at startup so tag queries automatically expand to all synonyms in their group - a query for one term now finds everything the team has tagged as equivalent. A new `covers` field lets any surface declare which cog slugs it explicitly documents, enabling `covers:dream` as a direct way to find all writing about a feature.

### 2. Blog and manuscript indexing

The graph builder now runs a third scan phase (Phase 2.3) against `datalake/draft-site/blog/` and `datalake/manuscripts/`. Any markdown file carrying an `mx:` block is indexed as a full graph node. This pulled 331 blog drafts and manuscript chapters into the queryable graph for the first time. The immediate effect: `covers:dream` returns two blog posts; fulltext and tag queries now span the entire content estate, not just cog files.

### 3. Validator coverage extended

The post-write advisory hook that warns after editing a cog now has a second branch for blog posts and manuscript chapters. When a writer edits a blog draft, the hook runs `mx-validator` on that file immediately - the same check that Gate 10 runs at push time, but now at write time. Gaps in MX metadata surface in seconds rather than at the point of push.

### 4. update-cogs-and-docs skill made graph-driven

The workflow that propagates session changes to all related surfaces has been updated to use three graph queries (`mx_graph_backlinks`, `covers:<slug>`, `fulltext:<name>`) as its primary discovery mechanism. The manual "search for README files / search manuscript chapters" steps are replaced by deterministic queries.

---

## Why It Matters

The update-cogs-and-docs problem is a compounding risk: every session that changes infrastructure but fails to update the related operator manual, blog post, or manuscript chapter creates a gap between what the system does and what the documentation says. That gap accumulates until it becomes a credibility problem for clients and auditors who depend on the documentation being accurate. Making the discovery step graph-driven rather than manual removes the human memory dependency from the update loop. A future operator with no session context can run three queries and know exactly what to update.

The blog and manuscript indexing is the same argument applied to content: 331 surfaces were invisible to the graph, meaning an agent or operator could not find them when building an update set. They are now queryable on the same terms as every cog.

---

## The Insight

Synonym expansion revealed something about how the tag taxonomy has grown: many conceptually related cogs use different terms for the same intent because tags were added independently over time. Once expansion was wired in, `tags:validation` returned significantly more results than expected - pulling in audit, pipeline, and verification content that was clearly about the same domain. The synonym file (`graph-synonyms.yaml`) was already maintained but had no effect on live queries. The gap between "maintained but inert" and "active at query time" is now closed.

---

## What Changed About Me

The backlinks infrastructure was already built into the graph builder (`x-mx-backlinks` computed on every node) but was never exposed as a queryable tool. The pattern of having the right data but no query surface for it is something to watch for across the rest of the graph. The next session should audit what other computed fields exist but aren't surfaced to the MCP query layer.

---

## Next Steps

- Add `x-mx-covers` to the remaining blog posts that cover core MX features (mx-graph, reginald, the-gathering, cog-format)
- Audit other computed graph fields not yet exposed as queryable in the MCP layer
- Rebuild the graph on a fat clone to pick up the 331 new blog/manuscript nodes in the estate indexes
- Add `actionType: sop` to the five action cogs that have `x-mx-execute` blocks but currently carry `type: info-doc` (mx-boot, mx-scaffold, registry-of-registries, what-is-this-chat-about, whats-changed)
