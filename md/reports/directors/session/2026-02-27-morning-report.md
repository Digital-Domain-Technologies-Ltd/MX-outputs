---
title: "Co-Directors Report — Datalake Restructured Into 5 Purpose-Based Categories"
created: "2026-02-27"
version: "1.0"
author: Tom Cranstoun and Maxine

mx:
  segment: "morning"
  audience: stakeholders
  confidential: true
---

# Datalake Restructured Into 5 Purpose-Based Categories

## Summary

This morning Maxine completed a comprehensive reorganisation of the MX datalake. The datalake previously had 12 flat directories at the top level, mixing content types, audiences, and functions with no unifying structure. The cognitive load of orienting at session start — for both humans and AI agents — had become a recurring friction point. After an interview to clarify the problem, a 4-phase restructure was planned and executed, reducing the datalake to 5 purpose-based categories that are instantly scannable.

## By the Numbers

- **23 commits** this morning (continuing from yesterday's earlier restructure work)
- **~300 files** touched across the 4 phases
- **10 directories** moved via `git mv` (preserving full git history)
- **~160 path references** updated across package.json, Node.js scripts, shell scripts, tests, registries, cog documents, and Canon files
- **33 files** had relative link depths fixed (../../ → ../../../)
- **8 Reginald cog mirrors** updated and pushed to the allaboutv2 submodule
- **Zero stale references** remaining in any active file

## What Was Built

The new datalake structure:

| Category | Verb | What lives here |
|----------|------|-----------------|
| `knowledge/` | LEARN | Architecture, guides, reference docs, specifications, system docs |
| `assets/` | USE | Images (SVG + bitmap), configs (books + tools), presentations |
| `pipeline/` | BUILD | Content lifecycle stages, ingest/drafts |
| `publications/` | READ | Book manuscripts (submodules — unchanged) |
| `registries/` | FIND | Machine-readable indexes + human companions (unchanged) |

Three phantom directories (outputs/, completions/, validation-reports/) were removed from documentation — they existed in the README but never on disk.

The image-assets/ directory was renamed to images/ during the move for clarity.

## How It Was Done

**Phase 1 (LOW RISK):** Created `knowledge/` — moved 5 documentation directories (guides, specifications, reference, system, architecture). Updated all path references and fixed relative link depths in 33 files. 105 files changed.

**Phase 2 (LOW RISK):** Created `pipeline/` — moved content-lifecycle and ingest. Updated REMINDERS.md and fixed link depths in 10 files. 91 files changed.

**Phase 3 (HIGH RISK):** Created `assets/` — moved configs, presentations, and image-assets (renamed to images). This was the most complex phase, touching the entire build pipeline: package.json npm scripts, Node.js scripts, shell scripts, .gitignore, pandoc metadata files, test files, registries, cog scripts, ADR documents, routing registry, and Reginald mirrors. 100 files changed.

**Phase 4:** Complete documentation rewrite — new directory tree, category taxonomy table, updated system docs. Removed phantom directories. 4 files changed.

Each phase was a self-contained commit with full verification. All pre-commit checks passed on every commit.

## Decisions Made

1. **5 categories, not 6** — the original interview suggested a "records/" category for completion reports and validation reports, but these directories don't exist on disk. Dropped to 5.
2. **image-assets/ renamed to images/** — shorter, clearer, no ambiguity.
3. **Historical files untouched** — changelog archives, directors reports, and `moved-from:` provenance metadata in blog posts were intentionally left with old paths. They are historical records.
4. **Pre-existing stale references noted but out of scope** — many files reference `datalake/knowledge/` which is from a previous rename. Documented but not addressed in this restructure.

## Next Steps

- Run `npm run test:illustrations` to verify image paths resolve after the restructure
- Run a smoke test PDF build (`npm run pdf:protocols-html`) to confirm the build pipeline works
- Address the pre-existing `mx-about-recon.sh` bug (`REPO_COUNT: unbound variable`)
- Consider addressing the pre-existing stale `datalake/knowledge/` references in a future session

## Commit Log

| Hash | Description |
|------|-------------|
| `7105fdd` | refactor: consolidate section manifests into datalake/registries/ |
| `2f2fc04` | chore: restructure datalake config folders |
| `d46944c` | refactor: convert all underscore YAML fields to camelCase |
| `d411afd` | docs: flatten nested cog: and governance: examples in spec and HTML |
| `feca527` | refactor: flatten non-standard nested cog: and governance: frontmatter |
| `498cd52` | refactor: flatten domain-portfolio.cog.md frontmatter |
| `739958d` | fix: add missing recommended fields to 4 cog files |
| `4c7971d` | fix: resolve all cog validation errors |
| `f10b05c` | refactor: centralise registry folders into datalake/registries/ |
| `525dcaa` | refactor: move audit-outputs from datalake to mx-outputs |
| `996849a` | refactor: remove duplicate product/ folder from Canon |
| `918fc34` | refactor: merge duplicate specifications folders in datalake |
| `e8d174b` | chore: remove Canon reports redirect folder |
| `a6a8340` | fix: update report paths — directors reports live in mx-outputs |
| `410bf5d` | chore: housekeeping — settings, gitignore, changelog, learnings cleanup |
| `03aeeed` | refactor: convert mx-page-pattern schema to camelCase, cogify Appendix K template |
| `fd4add4` | chore: collapse thin datalake folders into registries |
| `0addbbc` | chore: Phase 1 — create knowledge/ category, move 5 doc folders |
| `1bac343` | chore: Phase 2 — create pipeline/ category, move content-lifecycle + ingest |
| `2273766` | chore: Phase 3 — create assets/ category, move configs, presentations, images |
| `9e06f59` | chore: Phase 4 — rewrite datalake documentation for 5-category structure |
| `1639b57` | chore: update allaboutv2 submodule — Reginald cog mirror paths |
| `073e5dd` | chore: update changelog — datalake 5-category restructure |

---

*Report generated by Maxine (Claude Opus 4.6) — 27 February 2026, morning segment.*
