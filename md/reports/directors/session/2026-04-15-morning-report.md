---
title: "Co-Directors Report — Single-Source Discipline Restored on MX Field Definitions"
description: "Morning session: five drifting field-definition SSOTs collapsed into Appendix M and a single machine-readable data file. Broken audit tooling fixed in passing."
author: "Tom Cranstoun and Maxine"
created: 2026-04-15
modified: 2026-04-15
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning, governance, ssot, field-dictionary]
  isAiGenerated: true
  generatedBy: "claude-opus-4-6"
  reviewedBy: "Tom Cranstoun"
---

# Co-Directors Report — Single-Source Discipline Restored on MX Field Definitions

**Date:** 15 April 2026 — Morning
**Segment:** morning (00:00–12:00)

---

## Summary

Five separate documents had been drifting apart while each claiming to define MX fields. This morning we collapsed them into one authoritative location — Appendix M of the MX Appendices book — backed by a single machine-readable data file. The machine-readable dictionary now lives at `mx-canon/ssot/fields-data.yaml`; every former SSOT redirects to Appendix M. A long-broken audit script was fixed along the way and once again reports field usage across the hub.

---

## What Was Done

### 1. Governance: Appendix M is now the sole source of truth for MX field definitions

Five documents that each tried to define MX fields — `fields.cog.md`, `yaml-frontmatter-template.md`, `mx-yaml-md-guide.md`, `carrier-format-metadata.md`, `mx-html-writing-guide.cog.md` — were reduced to redirect stubs. Their combined prose (around 3,300 lines) was ported verbatim into Appendix M as five new sections (§22–§26). The appendix grew from 1,168 to 4,557 lines and now carries the complete MX field catalogue, the folder-metadata guide, the book-manuscript frontmatter template, the carrier format map, and the HTML carrier writing guide.

Appendix M's frontmatter now declares `replaces:` for all five former SSOTs and names `fields-data.yaml` as its machine-readable companion. Every inbound pointer in `CLAUDE.md`, `mx-canon/ssot/README.md`, and two Claude Code skills (`yaml-frontmatter`, `create-content`) was updated to target Appendix M directly.

### 2. Machine-readable dictionary extracted to a neutral data file

The 3,540-line YAML dictionary that used to live inside `fields.cog.md`'s frontmatter was moved to `mx-canon/ssot/fields-data.yaml`. Tools that need to validate frontmatter programmatically now load YAML directly instead of parsing a markdown wrapper. This is the split the original `fields.cog.md` design was reaching for but never achieved cleanly.

### 3. Audit tooling repaired in passing

`scripts/mx-audit.js` had been silently broken — it used CommonJS `require` inside an ES-module directory, so it crashed on import, and its field-dictionary parser expected a flat shape that no longer matched the nested structure. Both issues were fixed. The script now loads 295 field definitions plus 40 profiles and produces a usable audit again. The companion `scripts/mx-rename-tracker.js` — broken the same way and duplicating mx-audit's functionality — was deleted. Six further scripts had their authority-chain comments updated to point at `fields-data.yaml` and Appendix M.

---

## The Insight

Field drift is the inevitable product of having more than one place to define fields. Every contributor, human or machine, reaches for whichever document they saw first, and each one slowly grows its own dialect. The fix is structural, not editorial: one prose authority, one data authority, everything else redirects. Appendix M was already the natural home — it had always been indexed in the book, it was already maintained under the timeless-manuscript rule, and it was already published. Promoting it to sole authority required no new infrastructure; it required only the discipline to stop maintaining parallel copies.

---

## Decisions Made

- **Appendix M is authoritative for MX field prose.** Machine-readable form mirrors it at `fields-data.yaml`.
- **Five former SSOTs kept as stubs** rather than deleted outright. Inbound references throughout the repo and registries survive without immediate surgery, and each stub lists the specific Appendix M sections that replaced it.
- **`fields.cog.md` frontmatter was not hand-edited** — its machine-readable content was extracted verbatim to preserve behaviour for any tool that consumes it.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 1 (so far; a second pending) |
| Files changed (committed) | 8 |
| Lines added | +3,568 |
| Lines removed | −776 |
| Files changed (pending) | 12 |
| Lines added (pending) | +3,498 |
| Lines removed (pending) | −6,887 |
| Former SSOTs retired | 5 |
| Broken scripts repaired | 1 (mx-audit.js) |
| Broken scripts deleted | 1 (mx-rename-tracker.js) |
| Appendix M size | 1,168 → 4,557 lines |

Net effect on the field-definition surface area: −3,389 lines of drifting prose across five documents, +3,389 lines consolidated into one.

---

## Next Steps

- Add a cross-reference from Appendix M §4 (existing YAML Frontmatter Fields) into the new §22 so book readers following §4 see the full catalogue
- Update registry entries in `datalake/registries/specifications.json` and `mx-reginald/index.json` to reflect the stubbed state of the five former SSOTs (these regenerate from frontmatter on next `npm run cog:sync`)
- Rebuild the Appendices HTML via `npm run pdf:appendix` before the next publish

---

## Commit Log

| Hash | Description |
|------|-------------|
| 60e74c55 | Split MX field dictionary into standalone data file; fix mx-audit |
| _(pending)_ | Consolidate MX field SSOTs into Appendix M; stub former sources |

---

*Generated as part of `/step-commit` — Step 2 of 8.*
