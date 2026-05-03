---

title: "Co-Directors Report — Currency Formatting Expansion, Timeless Prose"
created: "2026-03-10"
version: "1.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "evening"
  audience: stakeholders
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-10-evening-report.md
---


# Co-Directors Report — Currency Formatting Expansion, Timeless Prose

**Date:** 10 March 2026 — Evening
**Segment:** evening (17:00–21:00)

---

## Summary

This session strengthened Chapter 00's core "Before and after" section — the worked example that shows readers exactly what MX looks like in HTML. The currency formatting argument was expanded from a two-way (European vs US/UK) illustration to a three-way cultural comparison including the Indian lakh numbering system. ISO standards were cited as the resolution. A separate sweep removed all specific foundation model names from manuscript prose across both books and the appendices.

---

## What Was Done

### 1. Currency Formatting Expansion (Chapter 00)

The "Before and after — what MX looks like in HTML" section was expanded through a structured interview process:

- **Comparison table added** — same price value displayed in US/UK ($2,030.00), European (€2.030,00), and Indian (₹10,00,000.00) formatting, at two scales to show where conventions diverge
- **Indian lakh system explained** — the 2-2-3 grouping pattern (three digits from right, then pairs), escalating to crore to show widening divergence
- **ISO resolution** — ISO 4217 for currency codes, Schema.org's fixed decimal convention (period separator, no grouping), cited with footnote referencing ISO 80000-1
- **Dual format examples** — prose now shows both JSON-LD (`"price": "2030.00"`) and Microdata (`content="2030.00"`) syntax, not just one
- **Gallon paragraph connected** — opening changed from "not unique to machines" to "not unique to currency", linking the two cultural-ambiguity illustrations

### 2. Timeless Model References (All Manuscripts)

Specific foundation model names date prose and violate the timeless manuscript rule. Seven files were updated:

| File | Before | After |
|------|--------|-------|
| Chapter 00 (shared) | Claude Opus 4.5, GPT-4, Gemini Ultra, SMOL | Parameter-scale descriptions |
| Chapter 02 (handbook) | GPT-4 Vision, Claude with image analysis | Frontier models with vision capabilities |
| Chapter 04 (handbook) | "not just for GPT-4" | "not just for a frontier model" |
| Chapter 08 (handbook) | GPT-4 (128,000-token context window) | A frontier model (large context window) |
| Chapter 10 (handbook) | GPT-4 or Claude | Frontier models |
| Chapter 11 (handbook) | "aren't all GPT-4" | "aren't all frontier models" |
| Appendix M (index) | GPT-4/Claude/Gemini with specific token counts | Model tiers: small edge, mid-range, frontier |

### 3. ISO Footnote Added

New footnote [^iso4217] citing ISO 4217 (currency codes) and Schema.org price specification, with links to both standards.

---

## Files Changed

| File | Change Type |
|------|------------|
| `datalake/manuscripts/mx-books/shared/chapter-00-introduction-to-mx.md` | Content expansion + timeless fix |
| `datalake/manuscripts/mx-books/mx-handbook/chapters/chapter-02-how-ai-reads.md` | Timeless fix |
| `datalake/manuscripts/mx-books/mx-handbook/chapters/chapter-04-content-architecture.md` | Timeless fix |
| `datalake/manuscripts/mx-books/mx-handbook/chapters/chapter-08-testing.md` | Timeless fix |
| `datalake/manuscripts/mx-books/mx-handbook/chapters/chapter-10-implementation.md` | Timeless fix |
| `datalake/manuscripts/mx-books/mx-handbook/chapters/chapter-11-business-imperative.md` | Timeless fix |
| `datalake/manuscripts/mx-books/mx-appendices/appendix-m-index-of-metadata.md` | Timeless fix |

---

## Decisions Made

1. **Indian lakh over other systems** — Chinese wan/yi system was considered but Indian lakh chosen because it uses the same decimal separator as Western conventions (period) whilst diverging on grouping — isolating the grouping problem clearly
2. **Category descriptions over model names** — "frontier model" is stable terminology that won't date; specific model names change with every release cycle
3. **Keep HTML code blocks as-is** — the Microdata code examples (€2.030,00 with content="2030.00") remain unchanged; only prose descriptions were made format-agnostic
4. **Author attributions preserved** — Claude Sonnet 4.5 (Maxine) in appendix-m-building-mx-os.md author field kept, as this records who wrote it, not prose about models

---

## Quality Metrics

- **Markdown lint**: 0 errors across all 7 files
- **Pre-commit hooks**: All passed (frontmatter, large files, secrets, markdown)
- **Timeless check**: Zero specific model names remain in manuscript markdown files
- **Commits**: 2 (content + changelog), pushed to main

---

## Next Steps

- Regenerate affected HTML outputs (appendix-m.html contains stale model references)
- Consider whether the currency formatting table warrants an SVG diagram for the PDF build
- Review other chapters for remaining non-timeless patterns (dates, version numbers, platform names)
