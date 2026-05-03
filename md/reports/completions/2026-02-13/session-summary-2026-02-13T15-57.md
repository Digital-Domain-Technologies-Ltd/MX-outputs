---
title: "Book Consolidation — All Publications Moved to Datalake"
created: "2026-02-13"

author: Tom Cranstoun
mx:
  sessionStart: "2026-02-13T14:00:00Z"
  sessionEnd: "2026-02-13T15:57:00Z"
  duration: "~2 hours"
  contentType: "refactoring"
  status: "completed"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/completions/2026-02-13/session-summary-2026-02-13T15-57.md
---

# Session Summary: Book Consolidation — All Publications Moved to Datalake

## Overview

Consolidated all four MX publication repositories from git submodules into a single datalake location. Each was copied, sanitised (removed internal repo artifacts, renamed "MX-Bible" to "MX: The Protocols", cleaned GitHub URLs), had its submodule removed, and its GitHub repo archived. The result is a clean, self-contained publications directory at `datalake/manuscripts/mx-books/` with no external dependencies.

This session continued from an earlier session that created the public Handbook edition, wrote morning report v3.0, and conducted the doc/block architecture interview.

## What Was Accomplished

### 1. Protocols Sanitisation

Copied `packages/mx-the-bible/` to `datalake/manuscripts/mx-books/mx-protocols/`. Removed internal artifacts (.git, .claude/, CLAUDE.md, CONTRIBUTING.md, todo.txt). Rewrote README.md as a clean public edition. Updated LICENSE to remove "CONFIDENTIAL" language. Fixed "MX Bible" references to "MX: The Protocols" in chapter-00 YAML frontmatter and prose. Removed all Digital-Domain-Technologies-Ltd GitHub URLs from web/ HTML files and chapter-12. Reviewed Chapter 15 (Joymaker partnership) — kept as-is (vision content, not confidential business data).

### 2. Appendices Sanitisation

Copied `packages/mx-appendices/` to `datalake/manuscripts/mx-books/mx-appendices/`. Removed .git. Bulk renamed "MX-Bible" to "MX: The Protocols" across 54 files (markdown, HTML, txt). Replaced all Digital-Domain-Technologies-Ltd GitHub URLs with allabout.network or removed them. Rewrote README.md for public edition. Fixed remaining references: "The Bible" in for-reviewers.html, "MX: The Protocols Bible" in appendix-m metadata table, product IDs (book-mx-bible → book-mx-protocols) and filenames (mx-bible-sample → mx-protocols-sample) in appendix-k.

### 3. Handbook Relocation

Moved existing `datalake/manuscripts/mx-handbook/` into `datalake/manuscripts/mx-books/mx-handbook/` (already sanitised in previous session).

### 4. Code Examples Migration

Copied `packages/mx-code-examples/` to `datalake/manuscripts/mx-books/mx-code-examples/`. Removed .git. Renamed "MX-Bible" to "MX: The Protocols" across all files. Rewrote README.md for public edition.

### 5. Submodule Removal

Deinited and removed four submodules:

- `packages/mx-handbook` (previous session)
- `packages/mx-the-bible`
- `packages/mx-appendices`
- `packages/mx-code-examples`

### 6. GitHub Repo Archiving

Archived four GitHub repos (now read-only):

- `Digital-Domain-Technologies-Ltd/MX-The-Handbook`
- `Digital-Domain-Technologies-Ltd/mx-handbook-manuscript`
- `Digital-Domain-Technologies-Ltd/mx-handbook-appendices`
- `Digital-Domain-Technologies-Ltd/mx-handbook-code-examples`

## Files Modified

### New/Modified in datalake/manuscripts/mx-books/

1. **mx-protocols/** — 82 files (manuscripts, illustrations, web appendices). Sanitised README, LICENSE, chapter-00.
2. **mx-appendices/** — 71 files (19 appendices, web/ HTML pages, site/ demo pages). All "MX-Bible" renamed to "MX: The Protocols". All GitHub URLs cleaned.
3. **mx-handbook/** — 18 files (moved from mx-handbook/).
4. **mx-code-examples/** — 55 files (starter kit, platform examples, structured data). README rewritten.

### Modified in repo root

1. **.gitmodules** — Removed entries for mx-the-bible, mx-appendices, mx-code-examples.

## Commits

| Hash | Description |
|------|-------------|
| `831196b` | Consolidate all books into datalake/manuscripts/mx-books/ (151 files) |
| `3796f9c` | Move mx-code-examples into datalake/manuscripts/mx-books/ (57 files) |

Both pushed to remote.

## Technical Details

### Sanitisation Approach

**Light sanitisation** (Tom's specification):

- **Remove:** .git files, .claude/ directories, CLAUDE.md, CONTRIBUTING.md, todo.txt
- **Rename:** All "MX-Bible" → "MX: The Protocols" (book title evolution)
- **Clean:** All Digital-Domain-Technologies-Ltd GitHub URLs (replace with allabout.network or remove)
- **Rewrite:** README.md files for public edition (remove submodule references, internal build instructions)
- **Update:** LICENSE files (remove "CONFIDENTIAL" language, keep copyright)
- **Keep:** MX branding, Maxine, Reginald, The Gathering as named concepts
- **Keep:** Chapter 15 Joymaker partnership content (public vision, not business-confidential)

### What Was NOT Touched

- No confidential business data found in any book (no advisory board names, no investment figures, no pricing tiers, no share structure)
- `outputs/bible/` directory paths in appendix-p build workflow (internal build paths, would need deeper refactor)
- `manuscripts/bible/` directory name in Protocols (physical directory, renaming would break structure)

## Remaining Submodules

After this session, 7 submodules remain:

- `packages/allaboutv2`
- `packages/business/mx-business`
- `packages/business/mx-sales-enablement`
- `packages/mx-audit`
- `MX-Gathering (standalone)`
- `packages/mx-template-repo`
- `packages/mx-workspace`

## Final State

```
datalake/manuscripts/mx-books/
├── mx-protocols/          # The Protocols (16 chapters, ~78K words)
├── mx-appendices/     # The Appendices (19 appendices, ~62K words)
├── mx-handbook/       # The Handbook (11 chapters, ~8K words)
└── mx-code-examples/  # Code Examples (55 reference files)
```

All four publications are now self-contained, sanitised, and independent of git submodules or external GitHub repos.

## Next Steps

- **Messaging framework rewrite** — Plan exists at `sorted-churning-sparrow.md`, covers all interview results from the doc/cog terminology session
- **Reginald demo — 20 Feb** — 7 days away. Registry working. Define minimum live demo scope.
- **Block naming decision** — NDR #1 filed. Advisory board to decide before Frankfurt.
- **London CMS Experts — 26 Feb** — Boye & Company. First public audience.

---

**Session completed successfully. All four MX publications consolidated into datalake.**
