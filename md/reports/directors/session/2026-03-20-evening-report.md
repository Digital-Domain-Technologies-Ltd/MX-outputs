---
title: "Co-Directors Report — Field Dictionary Housekeeping"
created: "2026-03-20"
version: "1.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "evening"
  audience: stakeholders
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-20-evening-report.md
---

# Co-Directors Report — Field Dictionary Housekeeping

**Date:** 20 March 2026 — Evening
**Segment:** evening (since 17:00)

---

## Summary

Building on the afternoon's field migration work, this evening was devoted to cleaning up the field dictionary itself. The migration from earlier in the day left behind scaffolding that was no longer needed — two large comment blocks documenting the old kebab-case and AI-prefix field names, plus a deprecated field definition. These were removed. The dictionary is now smaller, cleaner, and self-describing through a scope note that will prevent the same class of problem recurring.

---

## What Was Built

### fields.cog.md v4.3 — Dictionary Cleanup

The field dictionary (`mx-canon/ssot/fields.cog.md`) was promoted from v4.2 to v4.3. Three categories of obsolete content were removed:

**Removed — KEBAB-CASE → CAMELCASE MIGRATIONS block (20 entries)**
These documented the migration path from legacy kebab-case field names (e.g. `blog-state`, `publication-date`) to canonical camelCase. The migration was completed this afternoon — 114 files across all repos updated. The mapping table no longer serves a purpose.

**Removed — AI FIELD PREFIX MIGRATIONS block (9 entries)**
These documented the renaming of un-prefixed AI policy fields (`assistance`, `editable`, `training`) to their canonical `ai`-prefixed equivalents. Migration complete; entries removed.

**Removed — `name` field definition (status: deprecated)**
The `name` field was documented as deprecated in favour of `title`. It was removed from the dictionary. Investigation confirmed that `name:` still appears in 76 files, but these are standard YAML frontmatter (cog identifiers, skill names, contact names) — not MX governance fields. The dictionary documents governance fields only; plain identifiers are out of scope.

**Added — Scope Note**
A `# === SCOPE NOTE ===` comment was added at the top of the `fields:` array. It states clearly that the dictionary covers MX governance fields only, and that standard YAML frontmatter conventions (such as `name`, `id`, `slug`) must not be added here.

---

## By the Numbers

| Metric | Value |
| ------ | ----- |
| Fields removed from dictionary | 1 deprecated definition |
| Overlap-resolution entries removed | 30 (20 kebab + 9 AI prefix + 1 name/title) |
| Net line change to fields.cog.md | −147 lines |
| Dictionary version | 4.2 → 4.3 |

---

## Decisions Made

**Standard YAML frontmatter is not an MX governance concern.** Fields used as plain identifiers (`name`, `id`, `slug`) do not belong in the MX field dictionary, regardless of how widely they appear in the repo. The test: does the field have validValues, a profile, and governance enforcement meaning? If not, it is out of scope.

---

## Next Steps

No new action items from this session. Existing items in REMINDERS.md remain unchanged.

---

## Commit Log

| Hash | Theme |
| ---- | ----- |
| `7d4bb5ae` | Migrate bad field names across all repos + add migration script |
| `23095df5` | Audit and update fields.cog.md: add missing fields, remove unused |
| *(uncommitted)* | fields.cog.md v4.3 cleanup + about.mx.cog.md recon refresh |

---

*Honest, dated, and complete.*
