---

title: "Co-Directors Report — The Day the Data Layer Grew Up"
description: "Evening session report. Full-day arc: field dictionary v1.7 to v3.0, cog validator to zero errors, markdownlint root-cause fixed, and 1,420+ files restructured into a two-zone YAML model."
created: "2026-03-02"
modified: "2026-03-02"
version: "1.0"
author: "Tom Cranstoun and Maxine"
mx:
  segment: "evening"
  audience: "stakeholders"
  confidential: true
---


# Co-Directors Report — The Day the Data Layer Grew Up

**2 March 2026 — Evening**

---

## Summary

Nothing visible happened today. No new features shipped. No public content published. The board will not see any evidence of this work unless they look at commit history. That is exactly the point.

Today was a structural day — the kind of day that makes every future day faster and cleaner. We overhauled the data model that underpins every document in the ecosystem: 1,420+ markdown files now follow a consistent two-zone YAML frontmatter structure, the field dictionary evolved from v1.7 to v3.0 in a single session, and the cog validator went from 143 errors to zero. We also fixed the root cause of a persistent markdown linting bug that had been introducing corruption into documents.

The groundwork is done. The data layer is now structurally sound for everything that follows.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits today | 29 |
| Files changed | 668 |
| Lines inserted | 15,658 |
| Lines deleted | 14,021 |
| Files migrated to two-zone YAML | 1,420+ |
| Field dictionary version at start | v1.7 |
| Field dictionary version at close | v3.0 |
| Cog validator errors at start | 143 |
| Cog validator errors at close | 0 |
| Repos affected | 6 (hub + 5 submodules) |

---

## The Arc

The day had a clear sequence. Each phase built on the previous one.

**Morning — Get the dictionary right.** The field dictionary is the single source of truth for every YAML field in the ecosystem. It was at v1.7 — adequate but growing inconsistent. We worked through it systematically: flattened `mx:` blocks to top-level, standardised kebab-case to camelCase, resolved 13 near-duplicate fields, deprecated three stale field names, added a machine-readable defaults policy. By noon the dictionary was at v2.1 with 129 entries, each carrying `example`, `validValues`, and `notes` properties. For the first time, tools can validate against the dictionary automatically.

**Afternoon — Fix the ecosystem.** With an authoritative dictionary in place, the cog validator had a reliable source of truth. We eliminated 143 errors: 47 missing `modified:` fields, 41 ISO timestamp format violations, 48 invalid `readingLevel` values, and more. The validator now reports zero errors, zero warnings. We also fixed 34 over-length descriptions, resolved 2 circular dependency cycles in the `buildsOn` graph, and fixed README staleness across all six repositories.

**Evening — Restructure the data layer.** The final move was structural. Every YAML frontmatter in the ecosystem now uses a two-zone model: Zone 1 (top-level) holds the six document identity fields (`title`, `description`, `author`, `created`, `modified`, `version`). Zone 2 (under an `mx:` block) holds all MX-operational fields. This separation clarifies what is identity (stable, human-readable, interoperable) versus what is operational (MX-specific, machine-readable, potentially inherited). The field dictionary v3.0 documents and enforces this boundary.

---

## The Insight

There is a pattern in how infrastructure projects go wrong: they grow incrementally and inconsistently, then someone spends a day cleaning up the mess rather than building the thing. We nearly went the same way.

The field dictionary started at v1.7 with flat YAML and no real separation between identity and operational metadata. Today we defined the boundary explicitly and migrated 1,420+ files to honour it. The line between "what a document is" (Zone 1) and "what an MX system does with it" (Zone 2) is now structural, not conventional.

That distinction matters when external systems read our documents. A standard YAML parser will see Zone 1 directly. An MX-aware parser will also read Zone 2. Both get what they need. Neither trips over the other.

---

## Decisions Made

- **Two-zone YAML frontmatter is the canonical model.** Zone 1: `title`, `description`, `author`, `created`, `modified`, `version` — always top-level, never under `mx:`. Zone 2: all MX-operational fields — always under `mx:`. Documented in field dictionary v3.0, CLAUDE.md, and explain.md.
- **Field dictionary is the single source of truth for all YAML fields** — tools validate against it, not against ad-hoc conventions.

---

## What Changed About Me

No structural changes to the self-knowledge snapshot this session — same cog count (61), same Reginald index (161), same decision registers (ADR 6, BDR 3). The changes today were about the structure of the documents I maintain, not the count. My institutional memory is the same. The format it is stored in is cleaner.

---

## Next Steps

- **Publish "Content That Manages Itself"** — the blog post is now fully modernised (correct two-zone frontmatter, updated YAML examples). It is ready to move from the Canon to the website. *(REMINDERS: 🟡 Upcoming)*
- **Update `mx-about-recon.sh` to regenerate `about.mx.cog.md` in two-zone format** — the script currently produces flat YAML, which contradicts the new model. Low priority but worth fixing before the next recon run appears in a report.
- **London CMS Experts contact follow-ups** — outstanding from last week. *(REMINDERS: 🟠 This Week)*

---

## Commit Log

| Hash | Theme |
|------|-------|
| `017f1c54` | CHANGELOG updated for migration session |
| `7ff1045c` | Blog "Content That Manages Itself" — full frontmatter + modernised examples |
| `e0dccc5f` | Stale frontmatter examples fixed in create-content skill and blog schema |
| `97673817` | Field dictionary v3.0, CLAUDE.md, explain.md — two-zone model documented |
| `338220bd` | 19 remaining files migrated (mx-maxine-app, tests, .github, root) |
| `0207c7fc` | ~1,400 files migrated to two-zone mx: namespace structure |
| `050a7683` | CHANGELOG updated for markdownlint root-cause fix |
| `6256ad85` | Root-cause fix: all linting switched from markdownlint to markdownlint-cli2 |
| `480af249` | LEARNINGS updated with markdownlint-cli2 rule |
| `25a0e497` | Post-tool-use hook updated to use markdownlint-cli2 |
| `adbafc0c` | CHANGELOG and LEARNINGS updated for markdownlint session |
| `8e906e0b` | 5 markdown lint errors fixed |
| `4e36d922` | README staleness fixed across all repos (14 issues) |
| `df42b368` | mx-crm submodule pointer updated, cog registry regenerated |
| `6b90a6ff` | 34 over-length descriptions shortened to ≤160 chars |
| `1774d675` | `certificate-of-genuineness` added as valid cogType — clears all warnings |
| `908c304b` | All cog migration issues resolved — validator to zero errors |
| `52f1474b` | cog-tools enhanced: field dictionary validation, doctor command, improved output |
| `f623b355` | 36 files updated to reference renamed cog-unified-spec |
| `a7dc1fd4` | cog-unified-spec.md renamed to .cog.md |
| `7753aef5` | allaboutv2 submodule: Cloudflare Worker regex and string fixes |
| `d7cbff06` | 11 cogs: missing `version` field added — CI warnings to zero |
| `a37ebd3c` | CI cog validator aligned to current field conventions |
| `9089c9f7` | CLAUDE.md and README.md updated for current state |
| `4335eb4d` | 14 cog validation errors resolved (broken buildsOn refs, missing descriptions) |
| `2a0529ec` | Dashboard and submodule pointers updated for 2026-03-02 |
| `e806f0a5` | Field dictionary v2.1 enriched — example, validValues, notes on all 129 entries |
| `2d1730aa` | Field dictionary v2.0 — defaults policy and boilerplate removal |
| `bcb37ba3` | v1.8/v1.9 deprecated field cleanup across all repos |
| `147c7a59` | Field dictionary v1.9 — deprecate name, venue, issued |
| `2b6035f7` | Field dictionary v1.8 — resolve 13 near-duplicate and naming issues |
| `e810d6de` | explain.md aligned with field dictionary |
| `c0203e9f` | AI policy fields prefixed with `ai`, explain.md added |
| `de745775` | mx: blocks flattened, kebab fields renamed, field dictionary v1.7 |

---

*Generated by Maxine — 2 March 2026, evening*
