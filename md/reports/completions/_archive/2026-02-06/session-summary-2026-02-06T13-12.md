---

title: "Rename 'The Bible' to 'The Protocols' across entire repository"
created: "2026-02-06"
sessionStart: "2026-02-06T12:00:00Z"
sessionEnd: "2026-02-06T13:12:00Z"
duration: "~70 minutes"
author: Tom Cranstoun

mx:
  contentType: "refactoring"
  status: "completed"
---


# Session Summary: Bible to Protocols Rename

## Overview

Completed a repo-wide rename of all human-readable references from "The Bible" / "MX-Bible" to "The Protocols" / "MX-Protocols", reflecting the book's title evolution. This was a large-scale refactoring touching 146 files across the main repository, followed by two step-commit cycles to clean up markdown lint issues.

The rename preserved all filesystem paths (`packages/mx-the-bible/`, `manuscripts/bible/`), npm script names (`pdf:bible-*`), historical CHANGELOG entries, and completion session logs. Submodule contents were not changed (require separate per-repo updates).

## What Was Accomplished

### 1. Bible to Protocols Rename (commit `6db728b`)

- Renamed all human-readable "The Bible" / "MX-Bible" text to "The Protocols" / "MX-Protocols"
- Renamed `outputs/bible/` directory to `outputs/protocols/` via `git mv` (26 files)
- 128 files changed: 102 content edits + 26 directory renames
- 376 insertions, 376 deletions
- Used 5 parallel agents to process different file groups:
  - Agent 1: Root + `.claude/` files
  - Agent 2: `datalake/` files (47 files)
  - Agent 3: `content-lifecycle/` + `scripts/` + `ingest/` (27 files)
  - Agent 4: `outputs/bible` path references (19 files)
  - Agent 5: Remaining root + `.claude/` files (16 files)

### 2. Markdown Lint Fix - Tilde Fences (commit `6e84e44`)

- Replaced 3 tilde code fences (`~~~`) with 4-backtick fences (`` ```` ``) in [scripts/GENERATE-DOCUMENT-PDF-MANUAL.md](../../scripts/GENERATE-DOCUMENT-PDF-MANUAL.md)
- These were nested code blocks showing markdown examples containing backtick fences

### 3. Markdown Lint Auto-Fixes (commit `fa40d30`)

- Applied MD032 rule (blank lines before lists/code blocks) across 18 files:
  - 8 `ingest/MX-Corporate/` documents
  - 2 `content-lifecycle/` READMEs
  - 4 `scripts/` docs (git-hooks, qr-code-generator)
  - 2 `.mx.yaml.md` files (root + scripts)
  - 1 text fix in `content-lifecycle/use-cases/README.md`

### 4. Changelog Updates (commits `38f0762`, `998db16`)

- Documented Bible→Protocols rename with preservation notes
- Documented both rounds of lint fixes

## Files Modified

**Total: 146 files** (across 5 commits in this session)

Key file groups:

- **Root files:** README.md, SOUL.md, ONBOARDING.md, index.html, coming-soon.html, llms.txt, package.json
- **`.claude/`:** mode-configs/base.md, hub.md, settings.local.json, 10+ skill files
- **`datalake/`:** 47+ files across architecture/, system/, guides/, presentations/, outputs/
- **`content-lifecycle/`:** 20 files across drafts, specifications, raw-ideas, ready-to-publish
- **`scripts/`:** 12 files including QR code generator, appendix scripts, GENERATE-DOCUMENT-PDF-MANUAL.md
- **`ingest/`:** 10 files (MX-Corporate suite + bigger-deas + new-plan)
- **`outputs/`:** 26 files renamed (`bible/` → `protocols/`)

## Testing and Verification

**Lint verification (2 rounds):**

```bash
npx markdownlint-cli2 "**/*.md" "#node_modules" "#packages"
# Result: 0 error(s) after each fix round
```

**Bible reference verification:**

```bash
grep -ri "bible" --include="*.md" --include="*.json" --include="*.html" --include="*.js" --include="*.txt" | grep -v CHANGELOG | grep -v completions | grep -v node_modules | grep -v packages/
# Result: 12 files remain — all legitimate (filesystem paths, npm script names, historical records)
```

**Submodule check:**

```bash
git submodule status
# Result: All 13 submodules clean, no modified content
```

## Technical Details

### Path vs Text Distinction

The key technical decision was distinguishing between:

- **Human-readable text** (changed): "MX-Bible", "The Bible", "MX Bible" in descriptions, titles, headings
- **Filesystem paths** (preserved): `packages/mx-the-bible/`, `manuscripts/bible/`, `pdf:bible-*`

This distinction was maintained consistently across all 5 parallel agents.

### Parallel Agent Strategy

Split the ~115 main repo files across 5 agents working different file groups simultaneously, significantly reducing processing time. When Agent 1 ran out of context, Agent 5 was launched to handle the remaining root files.

## MX Principles Applied

1. **Metadata on write** — CHANGELOG updated with precise change counts and preservation notes
2. **Self-documenting** — Title lineage documented: "MX: The Handbook" → "The Bible" → "The Protocols"
3. **Explicit over implicit** — Preserved paths are explicitly noted in CHANGELOG and MEMORY.md

## Commits (This Session)

| Commit | Description |
|--------|-------------|
| `6db728b` | refactor: rename "The Bible" to "The Protocols" across entire repository |
| `6e84e44` | fix: replace tilde code fences with 4-backtick fences for lint compliance |
| `38f0762` | docs: update changelog with Bible→Protocols rename and lint fix |
| `fa40d30` | fix: apply markdown lint auto-fixes across 18 files |
| `998db16` | docs: update changelog with markdown lint auto-fixes |

All commits pushed to `origin/main`.

## Next Steps / Future Enhancements

1. **Submodule updates** — `packages/*` submodules still contain "Bible" references; each requires a separate per-repo update
2. **allabout.network book promo page** — Still references "MX: The Handbook" (in `allaboutv2` submodule)
3. **Physical directory rename** — `packages/mx-the-bible/` remains as the submodule path; renaming requires `.gitmodules` update and submodule reconfiguration

## Session Context

**Previous work:** Datalake consolidation (190+ files moved), client outputs migration, MX-Corporate document creation
**This session:** Book title rename (Bible→Protocols) + lint cleanup
**Status:** Complete. All changes committed and pushed.

## Success Metrics

- ✓ All human-readable "Bible" references renamed to "Protocols"
- ✓ All filesystem paths preserved
- ✓ Markdown lint: 0 errors
- ✓ All submodules clean
- ✓ CHANGELOG updated
- ✓ MEMORY.md updated
- ✓ All commits pushed to remote

---

**Session completed successfully.**
