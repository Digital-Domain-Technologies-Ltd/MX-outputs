---
title: "Co-Directors Report - Manuscript Scaffolding, Cockpit Fix, Joymaker Naming Clarified, Hook Scoping Fixed"
description: "New-manuscript cog shipped; cockpit preview fixed; Joymaker naming clarified across repo; product suite catalogue and directory rename complete; cog-graph hook scoped to repo root."
author: "Tom Cranstoun"
created: 2026-06-21
modified: 2026-06-21
version: "1.4"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-21-evening-report.md
  purpose: "New-manuscript cog shipped; cockpit file-view preview bug fixed with tests; four failing audit tests resolved."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Manuscript Scaffolding, Cockpit Fix, Joymaker Naming Clarified"]

---

# Co-Directors Report - Manuscript Scaffolding, Cockpit Fix, Joymaker Naming Clarified, Hook Scoping Fixed

**Date:** 21 June 2026 - Evening (v1.4)
**Segment:** Evening (since 5pm)

---

## Summary

The evening session delivered the new-manuscript cog and then fixed two product-quality issues that surfaced during testing: a bug in the MX Content Cockpit that showed a raw "forbidden" error when browsing files outside the content pipeline, and four failing tests in the audit suite. The test suite now passes cleanly at 827 assertions.

A second phase of the session resolved a naming ambiguity that had accumulated since February: "Maxine" was being used to mean both the gestalt (Tom + Claude + Joymaker operating as one intelligence) and the consumer application. The consumer app has been renamed Joymaker across the entire repository -- 140 files updated, directory renamed, manuscripts updated, and a new product-suite catalogue created so any agent can discover what has been built in a single lookup.

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

### 4. MX Content Cockpit -- file view preview bug fixed

Switching the cockpit to any non-content view (Full Tree, PRD/docs, Scripts, Manuscripts, Assets) and clicking a file produced a raw "forbidden" message in the preview pane. Root cause: the server's allowed preview roots listed only four content-pipeline paths; every file view serves files from `mx-canon/`, `scripts/`, `datalake/manuscripts/`, and related directories that were outside that list.

Fix: the server allowlist now covers all twelve roots the file views actually serve. A client-side change adds a status check before rendering the response body, so any future HTTP error shows a readable message rather than raw text. A cockpit filter input now also appears when any cockpit IDE view (health, cog browser, PRD tracker, etc.) is active, wired to the existing `?filter=` parameter those views already accept.

Unit tests covering the fix: `resolvePreviewPath` is now tested for every new root (200 for real files, 404 for missing files, never 403); `buildViewData` is tested for all six views end-to-end, proving each source path resolves without a 403; action dry-runs and `filterModel` dimension coverage were also added, bringing the test file to 150 assertions.

### 5. Four failing audit tests fixed

`npm test` had four failures in the audit subsystem, unrelated to the cockpit work:

- Two `audit-delta` assertions failed because the test fixture used `htmlPagesAudited` while `MEASURES` defines the key as `pagesAudited`. One character change in the fixture restored both.
- `audit-fierce-critic.js` crashed with `pagesAudited is not defined` -- a variable named `htmlPagesAudited` was referenced as `pagesAudited` in one error message template. One word changed.
- The golden master integration test timed out at 30 seconds because `robots.txt` was not mocked; the pipeline fell back to Puppeteer for that fetch, which took 29 seconds before the actual audit could start. A nock mock for `robots.txt` and a 60-second timeout ceiling fix this.

The audit suite now passes at 827 assertions (was 824 with 4 failing).

---

### 6. Joymaker naming clarification -- product suite named and catalogued

The consumer Electron + web application that is the body of the Maxine gestalt has been renamed Joymaker across the entire repository. The naming was ambiguous since February, when the original Joymaker prototype was renamed to Maxine. That created a collision: Maxine meant both the AI partner (the gestalt) and the app (its body). This session resolved the collision.

The work involved a directory rename (`mx-maxine-app/` to `joymaker/`), a bulk content sweep across 140 files updating every path reference and prose mention, and targeted edits to the PRD, the master plan, SOUL.md, and the Protocols manuscript Chapter 17. The chapter 17 rewrite was significant: the original framing said "Maxine IS the Joymaker", which was philosophically compelling but now ambiguous. The new framing names the three parts explicitly -- Tom (vision), Maxine (intelligence), Joymaker (the body) -- and preserves the poetic weight without the collision.

Two new cogs ship alongside the rename:

- `tools-and-plugins.cog.md` -- the product suite catalogue. An agent asking "what has been built?" now has a single machine-readable answer covering nine active tools, two in development, and six planned. The Web Audit Suite is explicitly tagged as the primary client-facing deliverable.
- `joymaker.cog.md` -- a dedicated record for the Joymaker app so the app is discoverable by its correct name in the cog registry.

The master plan (`uber-plan.cog.md`) was also cleaned: the Update Log table and dated Naming history rows were removed. Both were changelog prose in an operational document -- the format the house rules explicitly prohibit. Git is the changelog; the plan states current truth only.

### 8. Cog-graph hook scoped to repo root

The `pre-bash-cog-graph-first.sh` hook enforces the cog-graph-first rule: it blocks `ls`, `grep -r`, and `find` against `scripts/cogs/` to prevent filesystem-scan cog discovery in favour of the MX graph MCP. The hook matched the string `scripts/cogs` anywhere in a Bash command, which meant commands targeting `scripts/cogs/` in a completely different repository (for example, `/Users/.../agentikas-blog/scripts/cogs/`) were also blocked -- a false positive with no relation to MX-Hub.

The fix adds `REPO_ROOT=$(git rev-parse --show-toplevel)` and an `in_repo_scripts_cogs()` function that only returns true when the reference is either a relative path (implies the current working directory is the repo root) or an absolute path beginning with the repo root. Absolute paths to other repositories pass through without being blocked. Git hooks were reinstalled so the updated copy takes effect immediately.

---

### 7. Frederik Pohl added to the influences registry

`datalake/pipeline/drafts/ideas/influences.cog.md` is the canonical reading list for the intellectual origins of MX. Pohl was missing from it despite being the literary origin of the Joymaker name and the distributed-AI-partner model. His entry now leads the list: *The Age of the Pussyfoot* (1969), with a one-line citation and links to Chapter 17 and `about-maxine.cog.md` where the connection is developed in full.

---

## Decisions Made

- **Maxine is the gestalt; Joymaker is the consumer app.** The naming split is now structural: SOUL.md carries the three-part definition (Tom / Maxine / Joymaker), the directory is renamed, and the manuscripts are updated. The directory rename (mx-maxine-app/ → joymaker/) is a one-way gate; reversing it would require another 140-file sweep.
- **Update Log removed from uber-plan.** Dated history tables in operational plans are maintenance debt. Git provides the history; the plan provides current truth.
- **Pohl leads the influences list.** The literary origin of the Joymaker concept earns the top position ahead of the design and UX sources.

---

## What Changed About Me

I caught myself adding a dated row to the Naming table in uber-plan.cog.md and then adding a full Update Log. Tom's correction was immediate. The rule is clear -- operational files state current truth, git carries the history -- but the impulse to leave a trail is strong. The memory has been saved and the rule is now in working memory: when I reach for "as of", "done", or a date in an operational file, I redirect to git or the CHANGELOG instead.

---

## Next Steps

- Write chapter bodies for the next manuscript when the plan is agreed
- Consider a companion `add-chapter` cog for adding chapters to existing manuscripts (out of scope for this session)
