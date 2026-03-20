---

title: "Co-Directors Report — Chapter 15 + Agentica Onboarding + Reginald Compliance Engine"
created: "2026-03-16"
version: "3.0"
author: Tom Cranstoun and Maxine
mx:
  segment: "evening"
  audience: stakeholders
  confidential: true
---


# Co-Directors Report — Chapter 15 + Agentica Onboarding + Reginald Compliance Engine

**Date:** 16 March 2026 — Evening
**Segment:** evening (17:00–23:59)

---

## Summary

Six deliverables this evening, spanning both engineering depth and strategic breadth. The manuscript work landed Chapter 15 and resolved overlap with Chapter 16. The Agentica audit established the first external publisher relationship. The Reginald work went deeper than planned — from a basic architecture rebuild to a genuine compliance assessment engine, UBERCOG hygiene fix, and a complete documentation pass. Agentica is now fully onboarded as REGINALD's first pointer-mode publisher with a dedicated guide explaining their compliance path from level 2 to level 4.

---

## What Was Done

### 1. Protocols Manuscript — Chapter 15 + Section Insertions

New Chapter 15: "When Machines Remember" — covers persistent context, entity memory, recall sovereignty, and implications for MX architecture. Three sections inserted into existing chapters (Ch 9: The Platform Race, Ch 11: Business Imperative, Ch 13: What Agent Creators Must Build) drawing on Banting analysis material. Chapters 16-18 renumbered to accommodate the insertion.

### 2. Chapter 15/16 Overlap Resolution

Interview identified overlap between the new Ch 15 and Ch 16 (The Joymaker). Resolution: Ch 15 becomes the definitive strategic/vision chapter, Ch 16 the product chapter. Moved into Ch 15: Pohl thin client parallel ("The Thin Client Returns" section), enriched restaurant walk-in example, "The Forgotten Men" section adapted for the memory layer. Removed from Ch 16: "Every Object Introduces Itself" and "The Forgotten Men" (35 lines). Added bridge paragraph in Ch 16 referencing Ch 15 for the memory argument.

### 3. Agentica Web Audit

Full Web Audit Suite run against `https://agentica.wiki/articles/machine-experience`. Four pages analysed. Executive sales report generated: `mx-crm/outreach/2026-03-16/agentica-report.md`. Key finding: 100/100 accessibility and 91/100 LLM suitability, but 57/100 SEO creates a citation gap.

### 4. Reginald Architecture Rebuild

Rewrote static-gen pipeline with publisher support, signing stubs, a11y/clarity/toast-detector scripts. Added publisher verification, schemas, and test scaffolding. Removed legacy query.js and validate-cogs.js.

### 5. Compliance Assessment Engine + UBERCOG Exclusion

Built `assessCogCompliance()` — external COGs are now assessed against all five compliance levels from their cached frontmatter and metadata, instead of being hardcoded to level 1. Agentica's machine-experience article correctly scores level 2 (Structured). Also discovered that UBERCOG (repo-internal navigation file) was being published to the registry — added `excludeCogs` config to the generator, removed stale output, and cleaned publisher verification to 334/334 clean. Registry now serves 168 COGs (167 local + 1 external).

### 6. Agentica Onboarding Guide + Documentation Pass

Created `mx-reginald/docs/agentica-onboarding.md` — a dedicated guide for Agentica covering their current compliance level, what each step unlocks, manifest format, signing workflow, and timeline. Updated all REGINALD documentation: corrected COG counts (169→168), updated API reference examples, added compliance assessment explanation for external COGs, filled documentation gaps (cache staleness policy, crawl behaviour, resolve-mode guidance).

---

## The Insight

Agentica is not just a test case — it is REGINALD's first proof that the DNS-like model works with a real external publisher. The compliance engine now has teeth: it assesses external COGs honestly (Agentica scores level 2, not a rubber-stamped 3), giving publishers a clear path to improve. This is the network effect starting.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (this segment) | 13 |
| Files changed | 48+ |
| Lines added | +10,300 |
| Lines removed | -1,060 |
| Repositories | 1 (mx-hub) + 3 submodules |
| Manuscript files touched | 7 |
| Audit pages analysed | 4 |
| Test suite | 72/72 passing (8 suites) |
| Publisher verification | 334/334 clean |
| New docs created | 1 (agentica-onboarding.md) |

---

## Next Steps

- Push all commits to remote
- Consider sending Agentica report and onboarding guide as outreach
- Address business case gap identified in interview (pricing, ROI, market sizing)
- Re-sign UBERCOG if it should ever re-enter the registry (currently excluded)

---

## Commit Log

| Hash | Description |
|------|-------------|
| ddab9449 | Add Ch 15 (When Machines Remember) + three section insertions from Banting analysis |
| 5d44e68c | Update submodules: mx-outputs, mx-crm, allaboutv2 |
| a176241b | Update Protocols Ch 15 (When Machines Remember) and Ch 16 (The Joymaker) |
| 80010a26 | Reginald architecture rebuild: static-gen pipeline, publisher verification, new docs |
| 129625a4 | Update CHANGELOG: evening entries |
| 2894c0b0 | Update REMINDERS: evening changes |
| 4f812577 | Update mx-outputs report, clean stale worktree, update Reginald docs |
| c2e7c7bc | Update REMINDERS and CHANGELOG: note Ch 15/16 overlap resolution |
| 017d3ca3 | Update UBERCOG routing and mx-outputs index |
| *(pending)* | REGINALD compliance engine, UBERCOG exclusion, Agentica onboarding, doc updates |
