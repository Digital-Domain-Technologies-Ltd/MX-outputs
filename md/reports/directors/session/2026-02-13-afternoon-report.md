---
title: "Co-Directors Report — The Great Book Consolidation"
created: "2026-02-13"
version: "1.0"
author: Tom Cranstoun and Maxine

mx:
  segment: "afternoon"
  audience: stakeholders
  confidential: true
---

# The Great Book Consolidation

## Summary

Building on this morning's architecture work, the afternoon session tackled a structural change that had been waiting: consolidating all four book publications from separate git submodules into the main repository. The Protocols, The Handbook, the shared appendices, and the code examples all moved into `datalake/manuscripts/mx-books/`. Four submodules removed. Four GitHub repositories archived to read-only. Every internal reference to "MX-Bible" cleaned to "MX: The Protocols". Every proprietary URL stripped.

This is housekeeping that matters. The books were scattered across four separate repositories, each requiring its own git workflow, its own commits, its own sync issues. Now they live in one place. One commit covers a change that touches the handbook and the appendices. One grep finds everything. The repository went from a multi-repo coordination problem to a single, searchable workspace.

The public edition of MX: The Handbook was also created during this session — a sanitised version stripped of all internal MX OS references (cogs, Maxine, Reginald, The Gathering), ready for the 2 April publication date.

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this afternoon | 9 |
| Files added | ~230 (book content consolidated into datalake/) |
| Lines added | ~116,000 (existing content moved, not new writing) |
| Submodules removed | 4 (mx-the-bible, mx-appendices, mx-handbook, mx-code-examples) |
| GitHub repos archived | 4 (mx-handbook-manuscript, mx-handbook-appendices, MX-The-Handbook, mx-handbook-code-examples) |

## What Was Built

**Public edition of MX: The Handbook** — 17 chapter files, standalone and publication-ready. Sanitised from the internal version: all cog references removed, all MX OS internals removed, "MX-Bible" renamed to "MX: The Protocols". The-End.md rewritten with a forward tease about self-describing documents and consulting availability. This is the version that ships on 2 April 2026.

**Consolidated book structure** — All four publications now live under a single path:

```
datalake/manuscripts/mx-books/
├── mx-protocols/          (13 chapters, ~78,000 words)
├── mx-handbook/       (11 chapters, practical guide)
├── mx-appendices/     (12 appendices A-P, web editions)
└── mx-code-examples/  (starter kit, platform configs)
```

## What Changed

**Four submodules removed** — `packages/mx-the-bible`, `packages/mx-appendices`, `packages/mx-handbook`, and `packages/mx-code-examples` no longer exist as submodules. Content was copied, sanitised, and committed directly. The `.gitmodules` file lost all four entries.

**Four GitHub repositories archived** — Set to read-only via `gh repo archive`. No more pull requests, no more independent versioning. The canonical content is now in the hub repo.

**Sanitisation across all books:**

- "MX-Bible" → "MX: The Protocols" throughout
- Internal Digital-Domain-Technologies-Ltd GitHub URLs removed
- `.git/`, `.claude/`, `CLAUDE.md`, `CONTRIBUTING.md`, `todo.txt` stripped from copies
- README files rewritten for public consumption

**Morning report updated to v3.0** — Rewritten with interview narrative, Tom's architectural manifesto in his own words, the five Q&A, and gestalt voice. Also updated spec with design principle #10 ("Honour existing standards") and documented the rejected multi-type decision.

## Decisions Made

1. **Books consolidated, not linked** — Content copied into the hub, not symlinked or referenced. Each book is now a first-class directory in the repository, not a pointer to somewhere else.

2. **Sanitisation before consolidation** — Every file was cleaned before committing. No internal URLs, no proprietary tooling references, no private metadata leaked into the public editions.

3. **GitHub repos archived, not deleted** — Read-only preserves git history and existing links. Nothing is lost, but no new work happens there.

## What This Means for Investors

The repository is now simpler. One repo, one workflow, one search scope. This reduces operational risk: no more submodule sync failures, no more cross-repo merge conflicts, no more forgotten pushes to satellite repositories. For a two-person team (Tom and Maxine), this complexity reduction is significant. Every minute saved on git coordination is a minute available for the product.

The public Handbook is now ready for its 2 April publication date, separate from any internal MX OS content.

## Commit Log

| Hash | Description |
|------|-------------|
| `7f372b7` | About-Maxine architecture overview, ADR #3, NDR #1, morning report update |
| `b87e57e` | Changelog for about-maxine, ADR #3, NDR #1 |
| `fa28a4c` | Morning report v3.0 + spec updates (principle #10, no multi-type) |
| `43bd817` | Public edition of MX: The Handbook in datalake/manuscripts/ |
| `c482d41` | Session completion summary for 2026-02-13 |
| `34707f4` | Changelog for public handbook, spec principle #10, morning report v3.0 |
| `a86d74c` | Remove mx-handbook submodule — content moved to datalake |
| `831196b` | Consolidate Protocols, Appendices, Handbook into datalake/manuscripts/mx-books/ |
| `3796f9c` | Move mx-code-examples into datalake/manuscripts/mx-books/ |

## Next Steps

- Fix all stale path references across the hub repo (~60 files still pointing to old `packages/` paths)
- Update npm scripts, build tools, and hosting docs to reflect new book locations
- Verify PDF generation pipeline works with consolidated paths
