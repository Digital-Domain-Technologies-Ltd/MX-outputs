---
title: "Co-Directors Report — Chapter 15 + Overlap Fix + Agentica Audit + Reginald Rebuild"
created: "2026-03-16"
segment: "evening"
version: "2.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidentiality: internal
---

# Co-Directors Report — Chapter 15 + Overlap Fix + Agentica Audit + Reginald Rebuild

**Date:** 16 March 2026 — Evening
**Segment:** evening (17:00–23:59)

---

## Summary

Four deliverables this evening. First, a new Protocols chapter — Chapter 15: When Machines Remember (260 lines on persistent context, entity memory, and the sovereignty implications of machine recall). Three sections inserted into existing chapters from the Banting analysis, with chapters 16-18 renumbered. Second, an overlap resolution between Ch 15 and Ch 16 (The Joymaker) — Pohl's thin client parallel, enriched restaurant example, and the Forgotten Men section moved into Ch 15, with Ch 16 slimmed to focus on the product vision. Third, our first audit of an AI-native platform: Agentica. Fourth, a Reginald architecture rebuild with static-gen pipeline, publisher verification, and new documentation.

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

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 6 |
| Files changed | 42 |
| Lines added | +9,965 |
| Lines removed | -1,000 |
| Repositories | 1 (mx-hub) + 3 submodules |
| Manuscript files touched | 7 |
| Audit pages analysed | 4 |

---

## Next Steps

- Push all commits to remote
- Consider sending Agentica report as an outreach opportunity
- Address business case gap identified in interview (pricing, ROI, market sizing)

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
