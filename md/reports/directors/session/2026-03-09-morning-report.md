---

title: "Co-Directors Report — Infrastructure Cleanup, Humanisation Pass, and Full PDF Rebuild"
created: "2026-03-09"
version: "1.0"
author: Tom Cranstoun and Maxine
mx:
  x-mx-segment: "morning"
  audience: stakeholders
  confidential: true
---


# Co-Directors Report — Infrastructure Cleanup, Humanisation Pass, and Full PDF Rebuild

**9 March 2026 — Morning**

## Summary

Productive morning consolidating yesterday's infrastructure work and polishing the manuscript. The session had three phases: first, cleaning up stale paths left from the publications-to-manuscripts rename and renaming chapter-00 from "what-are-ai-agents" to "introduction-to-mx"; second, building the free book generator, Reginald mirror cog, and aligning all PDF metadata configs to the same table/widow standards; third, running a humanisation pass on chapter-00 (sentence case headings, em dash removal, AI pattern cleanup) and regenerating every PDF across both books. Twenty commits today, touching infrastructure, build tooling, writing quality, and output artefacts.

## By the Numbers

| Metric | Value |
| ------ | ----- |
| Commits (this morning) | 20 |
| Files changed | 50+ |
| New cogs created | 2 (gen-free-book, reginald-mirror) |
| New scripts created | 2 (gen-free-book.sh, reginald-mirror.sh) |
| PDFs regenerated | 8 (Protocols A4/Kindle, Handbook A4/Kindle, Chapter 00 A4/Kindle, Free Book, Preface) |
| HTML outputs regenerated | 4 (Protocols, Handbook, Chapter 00, appendices) |
| Illustrations converted | 47 SVGs via rsvg-convert |

## What Was Built

### Free book generator

New cog and script (`gen-free-book.cog.md`, `gen-free-book.sh`) that merges preface, chapter-00, and CMS Kickoff 2024 into a single 5.2MB free book PDF using pypdf. Replaces a manual process.

### Reginald mirror cog

New cog and script (`reginald-mirror.cog.md`, `reginald-mirror.sh`) automating the Reginald web mirror sync pipeline. Two actions: `sync` (full pipeline) and `verify` (parity check). Wired as a post-step in the PDF generator.

### Footnote URL convention

Documented the trailing backslash `\` convention for multi-URL footnotes in writing-style.md (Section 11), pdf-generator cog policy (v1.12.1), and generate-footnotes cog. Without this, pandoc collapses footnote URLs into one line.

## What Changed

### Chapter 00 humanisation

Ran the `/humanizer` skill against chapter-00-introduction-to-mx.md:

- Converted ~45 headings from Title Case to sentence case (preserving proper nouns: MX, EAL, Entity Asset Layer, Machine Experience, The Gathering, UX)
- Replaced ~50 em dashes in body prose with commas, parentheses, colons, or periods (kept em dashes in tables, definition lists, footnotes, company tagline)
- Replaced "key" adjective with "central" (forbidden vocabulary)
- Tightened generic conclusion from 7 to 4 lines
- Voice score improved from 7/10 to 8/10

### Infrastructure cleanup

- Renamed chapter-00 from "what-are-ai-agents" to "introduction-to-mx" across 15 files
- Fixed stale `publications/` paths to `manuscripts/` across 7 system docs
- Renamed book config directory from `codex/` to `protocols/`
- Aligned all 5 metadata configs (Protocols, Handbook, Chapter, Kindle, Free Book) to the same table striping and widow/orphan standards
- Removed obsolete dev-docs-plan draft

### Full PDF regeneration

Every book PDF rebuilt with the humanised chapter-00 and aligned metadata:

- Protocols: A4, Kindle, HTML, appendices
- Handbook: A4, Kindle, HTML
- Chapter 00 standalone: A4, Kindle, HTML
- Free Book: merged PDF (5.2MB)

## Next Steps

- Review humanised chapter-00 in PDF format for visual quality
- Fix appendix script sitemap generation (stale path: `datalake/publications/mx-books/mx-appendices/web`)
- Continue humanisation passes on remaining chapters
- Add footnotes to chapters as they are finalised

## Commit Log

| Hash | Description |
| ---- | ----------- |
| `b9c60f47` | fix: update stale publications paths to manuscripts across system docs |
| `acf0e84f` | chore: update changelog — stale path cleanup |
| `de5ac207` | refactor: rename chapter-00-what-are-ai-agents to chapter-00-introduction-to-mx |
| `7acedabb` | chore: update changelog — chapter-00 rename |
| `eb8f629e` | chore: refresh reminders — mark London follow-ups done, update countdowns |
| `a36d849b` | fix: rename book config directory codex to protocols and add shared resource paths |
| `2c569c60` | chore: update changelog and learnings — protocols rename, resource-path fix |
| `606a37d6` | chore: update mx-outputs submodule with Kindle PDF rebuilds |
| `cb844447` | fix: update pdf-generator cog resource-path documentation |
| `e4558f4a` | chore: remove obsolete dev-docs-plan draft |
| `75500283` | chore: update changelog — cog docs fix, Kindle rebuilds |
| `e11cdfb9` | chore: update mx-outputs submodule — track CMS Kickoff 2024 PDF |
| `5a527622` | chore: update submodules — Reginald mirror sync and free book PDF |
| `6a8f69f2` | feat: add reginald-mirror cog, free book generator, and pdf-generator updates |
| `73b46f42` | chore: update changelog — free book generator, Reginald mirror cog |
| `d9805741` | fix: align free book metadata with protocols table/widow standards |
| `e898e037` | fix: align metadata-chapter and metadata-kindle with table/widow standards |
| `eca955a0` | fix: add line breaks to footnote URLs in chapter-00 |
| `32c16d51` | docs: add footnote URL line-break convention to style guide and cogs |
| `c2327037` | fix: humanise chapter-00 — sentence case, em dash removal, AI pattern cleanup |
| `a3633c23` | chore: update changelog — chapter-00 humanisation, PDF regeneration |
