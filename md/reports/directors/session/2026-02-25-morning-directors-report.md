---
title: "Co-Directors Report — MX OS Toolkit Enters Version Control"
created: "2026-02-25"
version: "1.0"
author: Tom Cranstoun and Maxine

mx:
  x-mx-segment: "morning"
  audience: stakeholders
  confidential: true
---

# Co-Directors Report

## MX OS Toolkit Enters Version Control

**Date:** 2026-02-25 (Morning)
**Theme:** Infrastructure complete — toolkit under git, machine identity accurate, attention shifts to London

---

## Executive Summary

This morning completed the MX OS toolkit migration — a significant infrastructure milestone
that has been building across several sessions. All 34 personal `mx.*` scripts (the command
toolkit used to operate the machine every day) are now checked into the MX-hub repository
under version control, alongside test suites, a canonical template, and a comprehensive
reference manual.

The machine now also knows itself accurately. Environment variables (`MX_HOME`, `MX_REPO`,
`MX_BIN_DIR`) are established, the `~/.mx/` configuration files reflect the current hardware,
and no hardcoded paths remain anywhere in the repository. The infrastructure work is done.

With that foundation in place, attention shifts to Wednesday — the London CMS Experts
lightning talk at Boye & Company.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this morning | 5 |
| Scripts migrated to version control | 34 |
| New lines added | 8,798+ |
| Test assertions (three suites) | 142 |
| Files touched across all commits | 46 |
| Hardcoded absolute paths removed | 8 |

---

## What Was Built

### 1. mx.* Toolkit Under Version Control

All 34 `mx.*` scripts moved from `~/bin/` (local only, untracked) into
`scripts/bin/` (version controlled, reproducible). Every script updated to use
`$(dirname "${BASH_SOURCE[0]}")` for location-independent sourcing — no more
hardcoded `$HOME/bin` references inside scripts.

**Effect:** The entire personal toolkit is now in git. It travels with the repository.
Any machine with the repo and the right env vars has the complete toolkit.

### 2. Test Suites

Three new test suites wired into `npm test`:

| Suite | Assertions | What It Covers |
|-------|-----------|----------------|
| `tests/test-mx-shell.sh` | 93 | Explain list, preview rendering for all 7 types, fzf lookup chain, regression guards |
| `tests/test-mx-tools.sh` | 18 | Script discovery and metadata extraction |
| `tests/test-mx-scaffold.sh` | 31 | Template generation, integration tests |

### 3. MX OS Manual

`hub-content/MX-Canon/MX-OS/mx-os.manual.md` — a comprehensive reference for the
operating system layer: architecture, script pattern, metadata frontmatter, colour module,
scaffold workflow, health checking, shell integration, environment variables,
machine home documentation, and AI boot sequence.

### 4. mx.shell explain — Shell Configuration Fzf Picker

`mx.shell explain` is a new interactive tool: an fzf picker over 303+ entries covering
seven categories: shell functions, keybindings, npm scripts, action cogs, MX-OS tools,
Claude Code skills, and hooks. Includes `--json` / `-j` output for machine consumption.

### 5. Canonical Script Template + Scaffold Cog

`hub-content/MX-Canon/MX-OS/deliverables/mx-script-template.sh` — the single source
of truth for new script structure. `scripts/cogs/mx-scaffold.cog.md` allows AI agents
to generate correctly structured scripts from this template.

---

## What Changed

### Machine Identity Layer Accurate

The `~/.mx/` configuration files now reflect the actual machine:

- **`machine.yaml`** — hostname (`15577`), macOS 26.4, Darwin 25.4.0; added `mx-repo:`
  block with `env-var: MX_REPO`
- **`repos.yaml`** — entry updated from `MX-The-Books` to `MX-hub`, correct path,
  `env-var: MX_REPO` documented

### Path Architecture Simplified

`$MX_REPO` introduced as the canonical pointer to `~/Documents/MX-hub`:

```
MX_HOME   = ~/.mx/               (machine identity layer)
MX_REPO   = ~/Documents/MX-hub   (main repository)
MX_BIN_DIR = $MX_REPO/scripts/bin  (derived — no hardcoding)
```

Eight previously hardcoded absolute paths in `settings.local.json`,
`mx-exec`, and `scripts/bin/README.md` now resolve through these variables.

---

## Next Steps

1. **London CMS Experts — Wednesday 26 Feb** — Prepare and rehearse the lightning talk.
   Outline at `hub-content/MX-Canon/MX-Maxine-Lives/communications/talks/london-cms-experts-lightning-talk.md`
2. **Chapter 00 rewrite** — Mix of general proof points and commerce scenarios. Before London.
3. **Print business cards** — Before Wednesday.
4. **Demo Reginald** — Live registry with real docs. Overdue (was 20 Feb).

---

## Commit Log

| Hash | Theme |
|------|-------|
| `75a0037` | feat: migrate mx-os scripts to scripts/bin/ under version control |
| `0aba910` | chore: update cog registry, settings, and changelog for mx-os migration |
| `c0c6f44` | docs: add machine home, env vars, and boot sequence to mx-os.manual.md |
| `acd5788` | refactor: replace hardcoded paths with $MX_REPO and $MX_BIN_DIR env vars |
| `0629dac` | docs: update CHANGELOG with MX_REPO env var and ~/.mx config updates |
