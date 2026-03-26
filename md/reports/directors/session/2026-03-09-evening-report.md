---

title: "Co-Directors Report — Manuscript Quality Pass: Structure, Tone, Deduplication, Footnotes, and Standards Argument"
created: "2026-03-09"
version: "2.0"
author: Tom Cranstoun and Maxine
mx:
  segment: "evening"
  audience: stakeholders
  confidential: true
---


# Co-Directors Report — Manuscript Quality Pass: Structure, Tone, Deduplication, Footnotes, and Standards Argument

**9 March 2026 — Evening**

## Summary

Building on the afternoon's introduction chapter PDF rebuild, the evening session was a sustained quality pass across both book manuscripts. Five distinct improvements were made: Chapter 00 was restructured into a two-part format with a clean executive exit point, absolutist claims about agent behaviour were hedged across nine manuscript files, repeated statistics were deduplicated across eight files, seven footnotes with thirteen source URLs were added to verify all data claims in Chapter 00, and a standards argument (gallon/pint/fl oz ambiguity) was added to strengthen the case that explicit standards serve humans too — not just machines. The books now read with more authority — saying less, more precisely, and backing claims with sources.

## What Changed

### Chapter 00 restructured into Part A / Part B

The shared introduction chapter was reorganised into two explicit parts. Part A (The Business Case) gives CxO readers the commercial urgency and ends with a clean delegation point — executives can hand off to their technical teams without reading further. Part B (The Technical Foundation) continues for architects, developers, and practitioners. Case studies were merged and told once at full length. The monorepo ROI example was replaced with a retailer Schema.org example. A before/after HTML comparison was added. WebMCP was moved into the narrative flow. Organisational roles and implementation support sections were compressed.

### Absolutist agent behaviour claims hedged

A pass across nine manuscript files (Chapter 00, Protocols chapters 02, 04, 10-GEO, executive summary, Handbook chapters 03, 04, 10, 11) changed behavioural predictions from absolute to hedged. "Agents skip you" became "agents may skip you". "Agents return to" became "agents are more likely to return to". Technical facts (agents cannot see CSS) were kept absolute. The distinction matters: we can state what machines cannot do, but predicting what they will do in response requires hedging.

### Repeated statistics deduplicated

The Adobe Holiday 2025 statistics (700%, 500%, 30%), the "40% of deployed models" figure, and the £203,000 pricing error were being restated verbatim across multiple chapters. Chapter 00 is the shared introduction — readers encounter these numbers there first. Every subsequent mention now references Chapter 0 rather than restating the figures. The largest fix was in Handbook Chapter 03, which contained a near-verbatim copy of the entire "AI will figure it out" section from Chapter 00 — replaced with a concise summary. Chapter 00's platform launch count was also corrected from three to four (adding Anthropic Claude Cowork). The key phrase "
Your business, readable by every machine on Earth" was bolded as a protected phrase.

### Footnotes added for all data claims

Seven footnotes with thirteen source URLs were added to Chapter 00, verifying every significant data claim. Sources include Adobe's Holiday 2025 shopping report (business.adobe.com), TechCrunch coverage of platform launches, Wikipedia and Euronews on the Adamuz train collision, Common Crawl's own statistics page, the W3C WebMCP draft specification, and Adobe's LLMoptimizer product page. The Hugging Face model growth claim was sourced to an AI World article confirming 1M to 2M models in 335 days.

### Standards argument added (gallon/pint/fl oz)

A new paragraph was added after the €2.030,00 pricing ambiguity example, arguing that the need for explicit standards is not unique to machines. US and Imperial gallons differ by 20%. US and British pints differ (473ml vs 568ml). Even the fluid ounce differs (29.6ml vs 28.4ml). The ISO system exists precisely because "everyone knows what a gallon means" was never true. MX applies the same principle to web content.

### Title page dates updated

All book metadata configs (Protocols A4, Kindle, Chapter, Handbook) were updated from January 2026 to March 2026. PDFs and HTML regenerated.

## By the Numbers

| Metric | Value |
| ------ | ----- |
| Commits this evening | 11 |
| Files changed | 20+ (across 5 separate fixes) |
| Net lines | -63 lines removed in deduplication pass alone |
| Manuscripts touched | 12 unique files across Protocols and Handbook |
| Footnotes added | 7 (with 13 source URLs) |

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
| `7b8e7a96` | chore: update mx-outputs submodule with co-directors evening report |
| `6cd5f733` | fix: add footnotes with sources for all unsourced data claims in chapter-00 |
| `6a575a86` | chore: update changelog — chapter-00 footnotes added for all data claims |
| `bc103d84` | fix: add gallon/pint standards argument to chapter-00 |
| `6c3f1556` | chore: update changelog — gallon/pint standards argument added to chapter-00 |
