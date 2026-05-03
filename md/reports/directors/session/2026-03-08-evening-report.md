---

title: "Co-Directors Report — Chapter 0 Expansion, Footnote System, and PDF Typography"
created: "2026-03-08"
version: "1.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "evening"
  audience: stakeholders
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-08-evening-report.md
---


# Co-Directors Report — Chapter 0 Expansion, Footnote System, and PDF Typography

**8 March 2026 — Evening**

## Summary

Major content and infrastructure session. Chapter 0 received substantial new material: the MX metadata-agnostic principle, The Gathering standards body, compute/energy waste framing, a 5-stage MX Journey SVG diagram, and a complete footnote rewrite. We built a dynamic footnote page generator (cog + script) that produces HTML footnote pages and QR code link cards from markdown footnotes — wired as a prerequisite in the PDF pipeline. The session also included the Codex→Protocols rename and publications→manuscripts folder rename completed earlier today.

Tom's editorial direction drove the content: MX should be positioned as metadata-agnostic (building on existing standards, adding light-touch conventions where gaps remain), and the compute/energy cost of hallucinations should be front and centre as a business argument.

## By the Numbers

| Metric | Value |
| ------ | ----- |
| Commits (today) | 10 |
| Files changed | 20+ |
| Lines added | ~1,100 |
| New files created | 4 (SVG diagram, QR SVG, footnote cog, footnote script) |
| Generated files | 2 (footnote HTML page, QR code SVG) |
| Cogs in registry | 166 (up from 165) |

## What Was Built

### Footnote page generator

New action cog (`scripts/cogs/generate-footnotes.cog.md`) and script (`scripts/generate-footnotes.sh`) that:

- Scans all chapter markdown for `[^name]:` footnote definitions
- Generates HTML pages at `allaboutv2/mx/footnotes/` with MX carrier metadata, Schema.org JSON-LD
- Creates QR code link card SVGs alongside chapter files
- Supports `--list` mode to show which chapters have footnotes
- Registered as a prerequisite in the PDF generator pipeline (Step 0)

First output: `allaboutv2/mx/footnotes/shared-chapter-00.html` with all 10 footnotes.

### 5-Stage MX Journey SVG

Colour-coded diagram showing Discovery → Citation → Search & Compare → Price → Purchase with requirements, failure consequences, convergence principle, and computational trust. Referenced in chapter-00.

## What Changed

### Chapter 0 content expansion

- **MX metadata-agnostic principle** — MX builds on Schema.org, RDFa, JSON-LD, EXIF, Dublin Core, Open Graph, etc. It adds light-touch conventions (YAML frontmatter, `.mx.yaml.md` sidecars) only where standards leave gaps. Surfaced in Handbook ch-05, Protocols ch-10, ch-12.
- **Compute/energy waste statement** — Hallucinations and infilling waste inference compute, energy, and latency. Added to chapter-00, Handbook ch-01, Protocols ch-01 with different phrasing in each.
- **The Gathering** — Explained the independent, community-governed standards body (tg.community) and its role proposing a new standard for the llms.txt gap.
- **llms.txt corrected** — Not HTML MIME type, not in sitemap.xml, not used at inference time. Falls between both access mechanisms.
- **Footnotes rewritten** — URLs as visible link text (not page titles), multi-URL on separate lines.

### PDF table and typography improvements

- **Tables:** Visible striped rows (`#EEF0F3`), distinct header row (`#D9DEE4`), `\small` font for better column fit, `\toprule` redefined for header coloring
- **Widow/orphan controls:** Added `\displaywidowpenalty`, `\brokenpenalty`, `\predisplaypenalty`; increased heading needspace (sections 10, subsections 8, subsubsections 6)
- Applied consistently to Protocols metadata.yaml, Handbook metadata.yaml, `mx-pdf.sh`, and pdf-generator.cog.md

### Repository rename (earlier today)

- `datalake/publications/` → `datalake/manuscripts/`
- MX Codex → MX Protocols (401 files across 5 repos)

## Decisions Made

- **MX is metadata-agnostic** — builds on existing standards, adds conventions only where gaps remain. This is now the canonical framing across all books.
- **Footnote pages are dynamic** — generated from chapter source, not manually maintained. Regenerated before every PDF build.
- **PDF generator prerequisites** — `generate-footnotes` is a declared prerequisite of `pdf-generator`. Step 0 runs footnote generation before any PDF compilation.

## Next Steps

- Generate PDFs to verify table and widow improvements visually
- Add footnotes to remaining chapters as they are finalised
- Run full Protocols and Handbook PDF builds to validate end-to-end pipeline

## Commit Log

| Hash | Description |
| ---- | ----------- |
| `4f858d60` | refactor: rename datalake/publications to datalake/manuscripts |
| `b3872035` | chore: update changelog and fix stale CLAUDE.md reference |
| `26b7964c` | refactor: rename Codex to Protocols throughout |
| `98eaa2c2` | refactor: rename Codex to Protocols throughout the repo |
| `43fd749c` | chore: update changelog — Codex to Protocols rename |
| `d6367f96` | feat: expand chapter-00 with metadata-agnostic principle, The Gathering, compute cost statement, 5-stage SVG, and footnote system |
| `7d4c5e9d` | feat: add footnote page generator cog and script |
| `a3268f23` | fix: improve PDF table formatting and widow/orphan controls |
| `92773f20` | chore: update allaboutv2 submodule and cog registry |
| `c315ac1b` | chore: update changelog — chapter-00 expansion, footnotes, PDF fixes |
