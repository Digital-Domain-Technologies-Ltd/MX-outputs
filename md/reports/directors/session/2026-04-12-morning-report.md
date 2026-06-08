---
title: "Co-Directors Report — Frontmatter Validator: One Rules Engine for All Markdown"
created: "2026-04-12"
x-mx-segment: "morning"
version: "1.0"
author: Tom Cranstoun
audience: business
confidential: true

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-12-morning-report.md
  purpose: "Co-Directors Report - Frontmatter Validator: One Rules Engine for All Markdown"
  audience: [humans, machines]
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Frontmatter Validator: One Rules Engine for All Markdown"]
---

# Co-Directors Report — Frontmatter Validator: One Rules Engine for All Markdown

**Date:** 12 April 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Built a shared frontmatter validation engine that enforces correct MX YAML frontmatter across every `.md` file in the ecosystem. The engine is shared between `cog:validate` (existing) and a new PreToolUse hook that blocks Claude from writing `.md` files with invalid frontmatter. Per-contentType required fields, safe defaults, and a prose-invariant guarantee mean the hook can fix frontmatter without ever touching the human-readable body of a document. This is continuation work from the previous session's 269→0 deprecated-field migration — the validator now prevents that class of error from ever returning.

---

## What Was Done

### 1. Extracted the frontmatter validator library

Pulled `parseYamlFrontmatter` and all validation logic out of `scripts/cog-tools.js` into a new shared library at `scripts/lib/frontmatter-validator.js`. `cog-tools.js` now imports from the library — zero behaviour change for `npm run cog:validate`, which still reports 0 errors.

### 2. Added per-contentType required fields to Canon

Updated `mx-canon/ssot/fields.cog.md` with machine-readable `requiredByProfile` and `contentTypeToProfile` maps in the YAML frontmatter. These are the authority the validator reads from. Profiles cover: core, cog, book, blog, contact, folder, report, audit, event, migration, script.

### 3. Built the PreToolUse hook

`pre-write-frontmatter.sh` fires on every `.md` Write. On error (missing required fields, deprecated fields, invalid enum values), the Write is blocked with a specific, actionable error. On warning (recommended fields, safe defaults available), the Write proceeds and warnings are printed. The hook skips ignored patterns (node_modules, vendor, CHANGELOG, LICENSE, .claude/skills/).

### 4. Built the /yaml-frontmatter skill

Four modes: `check` (validate a file), `generate` (interview + create frontmatter), `fix` (auto-apply safe defaults), `audit` (bulk-check a directory). The skill documents the two-zone model, per-profile required fields, safe defaults, and prose-invariant guarantee.

### 5. Wrote a 37-test suite

`tests/test-frontmatter-validator.sh` covers parsing, required fields, profile detection, per-profile requirements, deprecated fields, enum validation, date format, auto-fill, prose invariance, ignore patterns, and cog:validate compatibility. All 37 pass.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| New files | 4 (library, hook, skill, test suite) |
| Modified files | 3 (cog-tools.js, fields.cog.md, settings.local.json) |
| Test cases | 37 (all passing) |
| Lines extracted from cog-tools.js | 143 |
| cog:validate errors | 0 (unchanged) |

---

## The Insight

The 269 deprecated-field errors we fixed yesterday were a symptom: the validator existed but only ran at commit time, only on `.cog.md` files, and had no enforcement at the point of creation. By extracting the rules engine into a shared library and wiring it to a PreToolUse hook, every `.md` file now gets the same validation at the moment it is written — not hours later when someone runs `cog:validate`. The distinction between `.cog.md` and plain `.md` disappears: same engine, same rules, same enforcement. One source of truth, one enforcement surface.

---

## Next Steps

- Monitor the hook in production for false positives — the ignore list may need tuning
- Consider adding a PostToolUse variant for Edit (currently Write-only)
- The `/yaml-frontmatter audit` mode can sweep the entire repo for non-compliant `.md` files — queue this for a dedicated cleanup session

---

## Commit Log

| Hash | Description |
|------|-------------|
| (pending) | Add frontmatter validator: shared library, PreToolUse hook, skill, test suite |
