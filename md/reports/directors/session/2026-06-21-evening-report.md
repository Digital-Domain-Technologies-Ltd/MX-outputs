---
title: "Co-Directors Report - Manuscript Scaffolding Shipped"
description: "New-manuscript cog, script, and skill delivered; any new book can now be scaffolded from a plan in any form."
author: "Tom Cranstoun"
created: 2026-06-21
modified: 2026-06-21
version: "1.0"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-21-evening-report.md
  purpose: "New-manuscript cog, script, and skill delivered; any new book can now be scaffolded from a plan in any form."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Manuscript Scaffolding Shipped"]

---

# Co-Directors Report - Manuscript Scaffolding Shipped

**Date:** 21 June 2026 - Evening
**Segment:** Evening (since 5pm)

---

## Summary

The evening session delivered the new-manuscript cog -- a complete scaffold factory for any new book in the MX series. With three manuscripts already in production, the gap was that creating a fourth required manual assembly of folders, frontmatter files, and build manifests. That manual step is gone. The cog accepts a plan in any form -- a prompt, a local file, a URL, a sitemap, or a GitHub repo -- and produces a ready-to-write directory tree in a single command.

---

## What Was Done

### 1. New-manuscript scaffold cog

Three new files ship together as a complete, tested capability:

- `scripts/new-manuscript.cjs` -- the deterministic scaffold script. Reads a YAML plan (from a file, stdin, or synthesised from any source), validates it, and creates the full directory tree: book root with folder metadata, chapters folder, one folder per chapter with frontmatter-only `.md` file, and a PDF build manifest. Dry-run by default; `--apply` writes to disk.
- `scripts/cogs/new-manuscript.cog.md` -- the hybrid action-doc cog. The SOP section defines how the agent extracts a plan from any source; the embedded bash block wires it to `mx exec`. Authoritative for the plan schema.
- `.claude/skills/new-manuscript/skill.md` -- the chat-surface routing skill. Triggers on "new manuscript", "new book", and related phrases. Wired up and active in this session.

### 2. Multi-source plan intake

The cog and skill document four intake paths: a local `.md` file (the script extracts YAML frontmatter automatically), a local `.yaml` file (passed directly), a URL or repo (the agent fetches and synthesises the chapter structure), and an inline prompt (the agent extracts field by field). The script gained a `extractYamlFromText()` function that strips markdown frontmatter delimiters before parsing, so `.md` plan files work without any pre-processing step.

### 3. End-to-end test against the handbook README

The cog was tested using `datalake/manuscripts/mx-books/mx-handbook-v2/README.md` as the plan source. The agent read the YAML frontmatter for book metadata, extracted the 12-chapter list from the markdown body, synthesised a YAML plan for `mx-handbook-v3`, and ran a dry-run that produced the correct 30-file tree. No files were applied; the test confirmed the intake and scaffold mechanism are correct.

---

## Why It Matters

The MX book series is a core product and revenue asset. Until today, adding a fourth title required a developer to manually assemble a directory structure, write a dozen frontmatter files, and wire up the PDF build manifest -- work that takes an hour and is error-prone. The new-manuscript cog reduces that to a single command. More broadly, it validates the cog-as-factory pattern: deterministic scaffold logic lives in a tested script; the cog is the documented contract; the skill is the chat interface. That pattern is reusable across any content category we want to automate next.

---

## The Insight

The multi-source intake turned out to be the most interesting design question. Accepting a plan from a URL or repo is not a scripted operation -- it requires the agent to fetch, interpret, and synthesise. The hybrid cog type handles this cleanly: the scripted part is the scaffold (deterministic, reliable), the SOP part is the intake (inference-driven, flexible). The split is correct. It also means the cog is honest about which half is deterministic and which is not, which matters for governance.

---

## Next Steps

- Write chapter bodies for the next manuscript when the plan is agreed
- Run `npm run cog:sync` on main after merge to register new-manuscript in the cog registry
- Consider a companion `add-chapter` cog for adding chapters to existing manuscripts (out of scope for this session)
