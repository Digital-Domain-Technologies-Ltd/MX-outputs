---
title: "Co-Directors Report — Manuscript Quality Pass: Structure, Tone, and Deduplication"
created: "2026-03-09"
segment: "evening"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidentiality: internal
---

# Co-Directors Report — Manuscript Quality Pass: Structure, Tone, and Deduplication

**9 March 2026 — Evening**

## Summary

Building on the afternoon's introduction chapter PDF rebuild, the evening session was a sustained quality pass across both book manuscripts. Three distinct improvements were made: Chapter 00 was restructured into a two-part format with a clean executive exit point, absolutist claims about agent behaviour were hedged across nine manuscript files, and repeated statistics were deduplicated across eight files. The books now read with more authority — saying less, more precisely.

## What Changed

### Chapter 00 restructured into Part A / Part B

The shared introduction chapter was reorganised into two explicit parts. Part A (The Business Case) gives CxO readers the commercial urgency and ends with a clean delegation point — executives can hand off to their technical teams without reading further. Part B (The Technical Foundation) continues for architects, developers, and practitioners. Case studies were merged and told once at full length. The monorepo ROI example was replaced with a retailer Schema.org example. A before/after HTML comparison was added. WebMCP was moved into the narrative flow. Organisational roles and implementation support sections were compressed.

### Absolutist agent behaviour claims hedged

A pass across nine manuscript files (Chapter 00, Corpus chapters 02, 04, 10-GEO, executive summary, Handbook chapters 03, 04, 10, 11) changed behavioural predictions from absolute to hedged. "Agents skip you" became "agents may skip you". "Agents return to" became "agents are more likely to return to". Technical facts (agents cannot see CSS) were kept absolute. The distinction matters: we can state what machines cannot do, but predicting what they will do in response requires hedging.

### Repeated statistics deduplicated

The Adobe Holiday 2025 statistics (700%, 500%, 30%), the "40% of deployed models" figure, and the £203,000 pricing error were being restated verbatim across multiple chapters. Chapter 00 is the shared introduction — readers encounter these numbers there first. Every subsequent mention now references Chapter 0 rather than restating the figures. The largest fix was in Handbook Chapter 03, which contained a near-verbatim copy of the entire "AI will figure it out" section from Chapter 00 — replaced with a concise summary. Chapter 00's platform launch count was also corrected from three to four (adding Anthropic Claude Cowork). The key phrase "your business, readable by every machine on earth" was bolded as a protected phrase.

### Title page dates updated

All book metadata configs (Corpus A4, Kindle, Chapter, Handbook) were updated from January 2026 to March 2026. PDFs and HTML regenerated.

## By the Numbers

| Metric | Value |
| ------ | ----- |
| Commits this evening | 6 |
| Files changed | 20+ (across 3 separate fixes) |
| Net lines | -63 lines removed in deduplication pass alone |
| Manuscripts touched | 12 unique files across Corpus and Handbook |

## Next Steps

- Continue humanisation passes on remaining Handbook chapters
- Review introduction chapter PDF visually after all changes
- Fix appendix script sitemap generation (stale path — carried from afternoon)

## Commit Log

| Hash | Description |
| ---- | ----------- |
| `bd0a5cdb` | fix: update title page date from January 2026 to March 2026 |
| `c9ded5b3` | chore: update changelog — March 2026 title page date |
| `099b1923` | fix: restructure chapter-00, hedge absolutist agent behaviour claims across manuscripts |
| `9ab2427e` | chore: update changelog — chapter-00 restructure, absolutist claims hedged |
| `71dd8007` | fix: remove repeated statistics across manuscripts, reference chapter-00 instead |
| `60dedf64` | chore: update changelog — repeated statistics deduplicated across manuscripts |
