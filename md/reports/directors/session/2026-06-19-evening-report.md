---
title: "Co-Directors Report - Graph Infrastructure, CRM Intelligence, and Canonical MX Positioning"
description: "Graph SOUL indexing and folder enrichment; canonical 'MX is to machines what UX is to users' positioning decision propagated across 9 hub files."
author: "Tom Cranstoun"
created: 2026-06-19
modified: 2026-06-19
version: "1.2"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-19-evening-report.md
  purpose: "Extended graph to index SOUL.md files and enriched 1015 folder metadata files; added deterministic enrichment, validation, and heal pipeline; fixed Gate 18 for metadata-only changes."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Graph Infrastructure: SOUL Indexing, Folder Enrichment, and CRM Intelligence"]

---

# Co-Directors Report - Graph Infrastructure, CRM Intelligence, and Canonical MX Positioning

**Date:** 19 June 2026 - Evening
**Segment:** Evening (since 5pm)

---

## Summary

The evening session completed the graph infrastructure work started earlier in the day, then continued into a strategic positioning session that produced the clearest one-sentence description of MX to date. The MX metadata graph now indexes every identity file (SOUL.md) in the repository as a first-class queryable node — alongside folder descriptors and cog files. A deterministic enrichment script populated the missing graph-value fields across 1015 folder and identity files in one pass, a validator was wired into the test suite to hold that baseline, and the self-healing system was extended so a single command repairs any future drift. The session closed with a gate fix that stopped folder-metadata enrichments from incorrectly triggering the Intent CMS code-lockstep check.

---

## What Was Done

### 1. SOUL.md Files Now First-Class Graph Nodes

The MX graph previously ignored `SOUL.md` files — the identity and context documents that tell an AI agent what a directory or subsystem is for. The graph builder now scans them in a dedicated Phase 2.5, creating `soul:` type nodes with the same queryable fields as cog and folder nodes: title, description, purpose, contentType, audience, tags, and a git-authoritative last-modified date. Sixty SOUL.md files were found and indexed. The query `mx_graph_query type:soul` and `mx_graph_query type:soul tags:crm` now return meaningful results.

Folder nodes gained four previously missing fields in the same change: canonical URI, context description, runbook, and git-authoritative modification date. The git-date map was moved to run once before all three scanning phases so every node type benefits from it.

### 2. Deterministic Enrichment of 1015 Folder Metadata Files

A new script (`enrich-folder-metadata.cjs`) provides non-clobbering, deterministic enrichment of `.mx.yaml.md` and `SOUL.md` files. It fills missing graph-value fields — tags, contentType, status, canonicalUri, and x-mx-contextProvides — using a path-based lookup table for known directories and a kebab-segment fallback for unknown ones.

Running the script against the full repository enriched 1015 files across the hub, the allaboutv2 website submodule, and the mx-outputs artefact submodule. Tags are now present on every folder and identity node, which makes queries like `mx_graph_query type:folder tags:reginald` and `mx_graph_query type:soul tags:identity` functional for the first time.

### 3. Validation Gate and Heal Integration

The enrichment is now enforced by a deterministic gate (`check-folder-metadata.cjs`) wired into `npm test`. If a new `.mx.yaml.md` or `SOUL.md` file arrives without tags, contentType, or status, the test suite fails and the pre-push hook catches it. The fix is one command: `npm run mx:heal -- --folder-metadata --apply`. That command was added to the self-healing system as a new sub-action, included in `--all`, and documented in `--help`.

### 4. MX_CLONE_TYPE Environment Variable

The index-guard that decides whether a machine can regenerate estate indexes previously ran expensive git submodule detection on every invocation. A new `MX_CLONE_TYPE=fat` environment variable skips all detection when set, making the check instantaneous on known fat development machines. `MX_CLONE_TYPE=thin` forces the refusal without detection and overrides the legacy `MX_INDEX_TRUST_COMPLETE` variable. Setting `export MX_CLONE_TYPE=fat` in `~/.zshenv` on the development machine eliminates the repeated git calls.

### 5. Gate 18 Fix and macOS Case-Sensitivity Bug

Two correctness fixes closed the session. The Intent CMS PRD lockstep gate (Gate 18) was incorrectly treating `.mx.yaml.md` and `SOUL.md` enrichments as code changes requiring a PRD update — they are folder metadata, not functional code. The gate trigger regex now excludes those file patterns.

The enrichment script itself had a macOS-specific bug: on a case-insensitive filesystem, looking for `SOUL.md` with `fs.existsSync` also matched lowercase `soul.md` manuscript chapter files, causing those files to be incorrectly processed. The fix reads the actual directory entries and checks the stored filename case exactly before processing.

---

## Why It Matters

The MX graph is the foundation of Maxine's ability to navigate the repository without human guidance. Before this session, approximately a third of the graph's nodes — all folder descriptors and identity files — were queryable only by path. They carried no tags, no content type, and no status signal. An agent asked "find all CRM-related files" would miss every folder and identity node. That gap is now closed: the graph is fully populated and consistently queryable across all three node types.

The enrichment script and validation gate mean the baseline holds. Every new directory created in the repository will be caught by the gate if its metadata is incomplete, and one heal command fixes it.

---

## The Insight

The macOS case-insensitive filesystem is a silent source of correctness bugs in file-scanning scripts. A script that checks `fs.existsSync('SOUL.md')` succeeds on a file named `soul.md` on macOS, then processes the wrong file. The correct pattern is to read the actual directory entries and compare stored filenames exactly. This pattern should be applied to any script that searches for a specific filename across a repository tree — including the graph builder's own `findFiles` function, which was patched in the same fix.

---

## Decisions Made

- `MX_CLONE_TYPE` replaces `MX_INDEX_TRUST_COMPLETE` as the preferred variable; the old variable is retained as a legacy alias rather than removed, to avoid breaking existing `~/.zshenv` configurations.
- Gate 18 exclusions use a pipeline filter (`grep -vE`) rather than a negative lookahead in the trigger regex, keeping the gate logic readable and independently auditable.

---

### 6. Dream COG Inventory and Memory Correction

A late-evening check of the dream system surfaced that Maxine was using filesystem commands (`ls` + `grep`) to list the dream COGs, when `mx_graph_query tags:dream` would have done the job through the registry. The pattern had been documented before for grep over `scripts/cogs/`, but not for `ls` over other cog directories such as `datalake/dream-files/cogs/`. The feedback memory was updated to cover both cases and any future cog directory. The redundant memory file was retired; the existing `feedback_cog_graph_first` entry now carries the full rule. The repo has eleven active dream types covering blog truth-checking, session pattern analysis, repo link health, script improvement, and more.

---

---

## What Was Done (continued)

### 7. Cognite Research and Competitive Positioning

A deep research session on Cognite (industrial AI platform, $170M ARR, $225M raised) produced a competitive brief with strategic implications for MX. Cognite's core thesis — that AI without industrial context produces unreliable outputs — maps directly to the MX thesis for documents and web content. Key differences noted: Cognite is proprietary and priced for oil majors; MX is an open standard applicable to any repository. The research validated that "context layer for AI" is a large, real, funded category — Cognite are the proof point for the industrial segment, MX targets the open web.

### 8. Canonical MX Positioning: "MX is to machines what UX is to users"

The most significant output of the evening was a positioning decision that had been implicit in the product name since the beginning but had never been stated explicitly. Researching Cognite surfaced the need for a cleaner bridge analogy. The insight: UX is not a standard, it is a practice. MX is the same kind of thing — a discipline, not a product. Since MX literally mirrors UX in its name (Machine Experience / User Experience), the analogy was already baked in.

The canonical bridge analogy is now: **"MX is to machines what UX is to users."**

Supporting lines confirmed at the same time:
- *"MX is a practice, not a product."*
- *"Without structured, provenanced documents, agents guess. MX is the practice that makes guessing unnecessary."*

These three lines were propagated to nine files across the hub in a single session:

| File | Version |
|---|---|
| `mx-canon/ssot/mx-messaging-framework.md` | 2.1 - 2.2 |
| `mx-canon/.../investor-pitch.md` | 1.2 - 1.3 |
| `mx-canon/.../team-pitch.md` | 1.4 - 1.5 |
| `mx-canon/.../one-pager.md` | 1.1 - 1.2 |
| `mx-canon/.../messaging-ideas.md` | 1.3 - 1.4 |
| `cognovamx-mx-manifesto.md` | 1.7 - 1.8 |
| `mx-canon/mx-the-gathering/.../machine-experience-one-pager.md` | 1.0 - 1.1 |
| `SOUL.md` | 2.0 (date updated) |
| `CLAUDE.md` | added to Content Ops section |

Every AI agent booting into MX-hub will now read the bridge analogy in `CLAUDE.md` on its first pass.

---

## The Insight (updated)

The positioning clarity came from an unexpected direction: the product name. "MX" has always mirrored "UX" — Machine Experience / User Experience — but the naming had never been used as the explanation. The Cognite research surfaced the gap between "connects" (wrong: too generic, plumbing language) and "understands" (right: cognitive value). From there the analogy fell out immediately. The name was the pitch all along.

---

## Next Steps

- Set `export MX_CLONE_TYPE=fat` in `~/.zshenv` on the development machine to eliminate the repeated git submodule detection overhead
- Register `x-mx-communityMemberships` formally in `cognovamx-fields.yaml` now that it is used across eleven contacts
- Re-engage the four quiet CMS Experts contacts: Stuart Rex and William Borgbarthet (BloomReach), David Strachan (HCL Software), Chris Bryce (Dotfusion)
- Commit the 9-file positioning update to main
