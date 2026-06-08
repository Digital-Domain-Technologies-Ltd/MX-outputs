---
title: "Co-Directors Report — Skills frontmatter alignment plus terminology-registry wiring and CLAUDE.md trim"
description: "Aligned the Claude Code surface with Anthropic's Skills spec earlier in the segment; this update adds two follow-on changes: a vocabulary registry pointer wired into four operational surfaces, and a CLAUDE.md trim that brings the always-on rules file back to its stated contract."
author: "Tom Cranstoun"
created: 2026-05-04
modified: 2026-05-04
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-04-morning-report.md
  purpose: "Aligned the Claude Code surface with Anthropic's Skills spec earlier in the segment; this update adds two follow-on changes: a vocabulary registry pointer wired into four operational surfaces, and a CLAUDE.md trim that brings the always-on rules file back to its stated contract."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Skills frontmatter alignment plus terminology-registry wiring and CLAUDE.md trim"]
---

# Co-Directors Report — Skills frontmatter alignment with the Claude Skills spec

**Date:** 04 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

The hub's Claude Code surface (`.claude/skills`, `.claude/commands`, `.claude/cogs`) had drifted: every skill, command, and command cog carried an MX cog briefing header plus an `mx:` block with a `canonicalUri` stub, which conflicts with the Anthropic Skills spec. This morning we brought all 61 skills, both slash commands, and the one command cog into compliance with `name + description` frontmatter only, deleted 577 lines of redundant metadata, tightened the pre-write hook into a two-way gate so the cog header can never leak back into a non-cog file, and updated CLAUDE.md, LEARNINGS.md, the cog-author skill, and the how-to-write-a-cog SOP so the policy reads the same on every surface.

---

## What Was Done

### 1. Skills frontmatter brought into Claude Skills spec

Every `.claude/skills/*/skill.md` (61 files) was rewritten so the YAML frontmatter carries only the two fields the Anthropic spec requires: `name` and `description`. The five-line MX cog briefing block at the top, the `mx:` block, and the `canonicalUri` stub are gone. Descriptions were preserved where they already existed and otherwise re-derived from the body's first prose paragraph (with a preference for `**Purpose:**` lines and a discard rule for `Command: /xxx` stubs). Net delta on the skills tree alone: roughly 515 lines removed, 141 added.

### 2. Slash commands and the command cog

`.claude/commands/md-fix.md` and `.claude/commands/review-docs.md` were stripped to a single-line `description:` plus body. The `.claude/cogs/mx-compliance.cog.md` file was renamed via `git mv` to `.claude/cogs/mx-compliance.md` (the user's call: files inside `.claude/` should not carry the `.cog.md` suffix), its frontmatter pared back to a single `description:`, and the two cross-references in the matching skill were updated.

### 3. Validators taught to leave the Claude Code surface alone

`scripts/lib/frontmatter-validator.js` now skips any path matching `(^|\/)\.claude\/` — covering both absolute and relative path forms. `scripts/mx-validator.js` adds `.claude` to its `SKIP_DIRS` set, adds `/.claude/` to its `SKIP_PATH_FRAGMENTS`, and gives `validateFile()` an early-return that emits `{ skipped: true }` so explicit-path invocation also no-ops. Together this means the MX canon validators can never again flag a Claude Code file for missing MX metadata.

### 4. Two-way cog-opening gate

`.claude/hooks/pre-write-cog-opening.sh` was rewritten as a symmetric gate. The old hook only enforced *presence* of the briefing header on `.cog.md` writes; the new one also enforces *absence* on plain `.md` writes. The asymmetry that let this drift accumulate is gone. Six synthetic Write payloads were piped through the hook to confirm each branch — `.cog.md` with header allow, `.cog.md` without header deny, plain `.md` without header allow, plain `.md` with header deny, anything under `.claude/` skipped regardless.

### 5. Documentation in lockstep

CLAUDE.md, LEARNINGS.md (new dated rule at the top of the active buffer), the `cog-author` skill, the `how-to-write-a-cog.cog.md` action cog (Step 2's explanation paragraph), and `mx-watch-index.md` were all updated so that wherever the cog opening header is described, the description matches the new two-way enforcement. The auto-memory entry that previously framed the header as a universal rule was rewritten to make the `.cog.md`-only scope explicit.

### 6. Terminology registry wired into the operational surfaces

The unified terminology pointer at `datalake/registries/vocabulary.md` (with its machine-readable companion `vocabulary.json`) was already the canonical entry point to the published Glossary plus the conversational Working Vocabulary, but the surfaces that need to consult it on every turn did not know it existed. Four files were updated in lockstep so the next session opens with a working route to the registry:

- **CLAUDE.md** — new row in the Reference table; the existing "Cross-project terminology" rule now points at the registry instead of restating the term list inline.
- **UBERCOG.cog.md** — new "I need to check a term, glossary, or shorthand vocabulary" routing block, placed above the spell-check block since the two are related.
- **`/html-writer` skill** — new "Terminology" sub-section in the polish pass, just before "Voice and timelessness", so blog prose stays consistent with the published Glossary.
- **`/cog-author` skill** — new row in the Files table pointing cog authors at the registry when naming, describing, or tagging a cog.

### 7. CLAUDE.md trim back to "rules that apply on every turn"

CLAUDE.md was 231 lines / 18.2 KB at the start of this update. The file states its own contract on line 5: it should hold only the rules that apply on every turn; everything else is linked. Several sections had drifted away from that contract — they carried implementation detail, code fences, or routing lists that already lived on linked SSOT pages. The trim: 231 lines / 18.2 KB → 182 lines / 13.1 KB, a 28% reduction in both line count and bytes. No policy was lost; every cut redirects to the existing SSOT page that already carries the detail.

Specifically, the rule statements stayed and the supporting prose was the cut. The `pwd`-checks code fence moved to `GIT-README.md` (already linked); the cog-spec v1.0 historical paragraph in "Read-only directories" was deleted (project history, not an always-on rule); the MX-definition-lockstep five-bullet pipeline collapsed to two lines pointing at `definitions-index.md` and the three skills that orchestrate the round-trip; the canonicalUri implementation detail collapsed to the rule plus the hook that enforces it; the spell-check policy collapsed to the one-line policy with the commands referenced via UBERCOG. Two reference-table rows that had grown into paragraphs (MX field catalogue and The Gathering draft notes) are short again. The "COG System" subsection and the "Standards Hierarchy" subsection were folded into the Reference table and the Writing Style block respectively, removing two whole headings.

---

## By the Numbers

This is the morning-segment cumulative tally, covering both the earlier skills-frontmatter work and the two follow-on updates above.

| Metric | Value |
|--------|-------|
| Commits | 0 still pending at Step 3 of /step-commit |
| Files changed (this update only) | 4 (CLAUDE.md, UBERCOG.cog.md, two skills) |
| Files changed (earlier in segment) | 72 |
| CLAUDE.md size | 231 → 182 lines, 18.2 KB → 13.1 KB (−28%) |
| Skill files normalised | 61 |
| Validators tightened | 2 (frontmatter-validator, mx-validator) |
| Hooks tightened | 1 (pre-write-cog-opening, now two-way) |
| Repositories | 1 (hub only — no submodule changes this session) |

---

## Why It Matters

This was hygiene work, but with two business consequences worth naming. First, every skill description that Claude Code reads at session start now matches the spec Anthropic publishes — which means when the Skills feature evolves (signed skills, marketplace listings, sharing across surfaces), the hub's skill library is portable without remediation. Second, the two-way pre-write gate closes the regression vector that produced this whole cleanup: an agent can no longer paste the cog briefing comment into a non-cog file by accident, no matter how often the convention is forgotten.

The terminology-registry wiring and the CLAUDE.md trim are smaller in scope but compound for the same reason — the cost of an always-on file is paid on every prompt. Trimming CLAUDE.md from 18.2 KB to 13.1 KB without losing any policy makes every future session cheaper and quicker to load, while the new vocabulary-registry pointers mean the next agent can route to the canonical Glossary without scanning the manuscripts to find it.

---

## The Insight

The original rule asked every "authored briefing file" — cogs, skills, commands — to carry the cog opening header. The intent was good (any first-time reader gets oriented). The cost was that we treated the Claude Code surface as if it were a sub-dialect of the MX canon, when it is not. Anthropic publishes a spec; we should obey it on those files and reserve the cog dialect for files we own. The fix isn't fewer rules — it's a rule whose scope matches the file extension. `.cog.md` carries the header, `.md` does not, and the hook enforces both directions.

The CLAUDE.md trim makes the same point in a different register. A file that says "I contain only the rules that apply on every turn" must actually contain only those rules. The discipline is to refer rather than to restate, even when restating feels more helpful in the moment — the linked page is one click away, and every line that earns its place by being pointed-to rather than copied keeps the always-on file honest about its scope.

---

## Decisions Made

- The COG opening header is `.cog.md`-only. Plain `.md` files (skills, commands, READMEs, reports, manuscripts) must not carry it. Enforced both ways.
- `.claude/` is foreign territory to the MX validators. The frontmatter validator and mx-validator both skip it; the cog-opening hook skips it; CLAUDE.md says so.
- `.claude/cogs/*.cog.md` is no longer a valid shape — those files are renamed to plain `.md` (only one existed: `mx-compliance.cog.md`). The `.cog.md` extension is reserved for cogs in the MX canon, not Claude Code surface files that happen to look cog-shaped.
- The terminology-registry pointer at `datalake/registries/vocabulary.md` is now wired into CLAUDE.md, UBERCOG, and the two cog/blog-authoring skills. Future references should link to the registry rather than restating the term list inline.
- A separate "MX Bible → MX: The Protocols" rename sweep is sitting in the working tree across the hub and three submodules. It pre-dates this session and was deferred per directors call — it is not part of this commit and will be reviewed and committed separately.

---

## Next Steps

- The deferred "MX Bible → MX: The Protocols" rename sweep needs a review pass before it lands. Some of the rewrites are mechanical and uncontroversial; a few read awkwardly ("EDS.md is Your Bible" → "EDS.md is Your Protocols", "MX Bible author" → "MX: The Protocols author") and may want a hand-edit before committing.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `e22917af` | Strip MX cog frontmatter from Claude Code surface; add two-way cog-opening gate (hub) |
| `ae6d9c50` | CHANGELOG v1.70: Claude Code surface alignment with Anthropic Skills spec (hub) |
| `598c6146` | Bump mx-outputs: regenerate README index for 2026-05-04 morning report (hub) |
| `8b105505` | Wire vocabulary registry pointer into operational surfaces; trim CLAUDE.md (hub) |
| `bacf509`  | Co-directors morning report v1.1 (mx-outputs) |
