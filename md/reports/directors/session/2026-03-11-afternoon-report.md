---

title: "Co-Directors Report — Grant Briefs, PDF Pipeline, Documentation Sweep"
created: "2026-03-11"
version: "1.0"
author: Tom Cranstoun
type: info-doc
mx:
  x-mx-segment: "afternoon"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-11-afternoon-report.md
  purpose: "Co-Directors Report - Grant Briefs, PDF Pipeline, Documentation Sweep"
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Grant Briefs, PDF Pipeline, Documentation Sweep"]

---


# Co-Directors Report — Grant Briefs, PDF Pipeline, Documentation Sweep

**Date:** 11 March 2026 — Afternoon
**Segment:** afternoon (12:00-17:00)

---

## Summary

Building on this morning's handbook audit and humanizer work, the afternoon focused on grant funding materials and PDF infrastructure. A comprehensive grant brief was created for The Gathering (open standards body) to complement the existing Reginald brief. During PDF generation, two divergences between the pdf-generator cog rules and the mx-pdf.sh script were discovered and fixed - PDFs were outputting alongside source files instead of to mx-outputs/pdf/, and link colours were blue instead of the mandated black. A full documentation sweep updated skills, cogs, READMEs, the UBERCOG routing table, LEARNINGS, and CHANGELOG to reflect all changes.

---

## What Was Done

### 1. Gathering Grant Brief Created

A comprehensive grant application brief was written for The Gathering - the open standards body that governs the MX specification. This complements the Reginald brief (product company) created earlier today. Key details:

| Aspect | Reginald | Gathering |
|--------|----------|-----------|
| Entity | MX Reginald Ltd (product company) | The Gathering (standards body) |
| Funding target | GBP 250,000-500,000 | GBP 100,000-250,000 |
| Revenue model | API licensing, publisher fees | Certification, membership, events |
| Analogy | npm for documentation | W3C for AI documentation |

Both briefs are self-contained for Helen (grant writer) with "Notes for Helen" adaptation guidance for different grant programme types (innovation, Scottish development, environmental, digital skills). They can be submitted to different programmes simultaneously.

### 2. Reginald Grant Consolidation

15 fragmented grant files in mx-reginald/grant/ were consolidated into a single SSOT brief at mx-canon/ssot/business-case/grants/reginald-grant.md. The original files (budget, fund-criteria-matrix, impact-framework, letters-of-support, market-research, plan, public-explainer, risk-register, scottish-alignment, sustainability, team, tracker, traction) were deleted.

### 3. PDF Pipeline Fixes

Two cog-vs-script divergences were discovered and fixed:

| Issue | Cog rule | Script had | Fix |
|-------|----------|-----------|-----|
| Output path | mx-outputs/pdf/ | Alongside source files | Script now defaults to mx-outputs/pdf/{basename}.pdf |
| Link colours | linkcolor=black, urlcolor=black | linkcolor=blue | Changed to black in script |

The pdf-generator cog policy was also updated with explicit output path and no-intermediates rules.

### 4. Documentation Sweep

All affected documentation was updated to reflect the session's changes:

| File | Change |
|------|--------|
| .claude/skills/mx-create-pdf/skill.md | Rewritten (595 to ~150 lines): output path, no intermediates, black links |
| .claude/skills/mx-c-pdf-generator/skill.md | Rules section: output path, link colours, no intermediates |
| mx-canon/ssot/business-case/README.md | Grant briefs section and document status entries added |
| mx-canon/ssot/business-case/grants/.mx.yaml.md | SSOT folder metadata created |
| UBERCOG.cog.md | Grant routing added ("I need grant application materials") |
| LEARNINGS.md | Cog-vs-script verification rule added |
| CHANGELOG.md | Full session entry added |
| mx-outputs/README.md | Regenerated index (245 files) |

### 5. Manuscript Humanizer (Carried from Morning)

The full humanizer purge was committed this afternoon (authored in morning session):

- ~684 em dashes replaced with short dashes across 42+ files
- 155 forbidden vocabulary instances replaced across 56 files
- 214 sentence-initial conjunctions restructured
- 7 broken Handbook cross-references fixed
- Total: ~1,068 style violations fixed

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 5 (afternoon segment) |
| Files changed | 90+ (including 56 manuscript files from humanizer) |
| Lines added | ~2,800 |
| Lines removed | ~3,700 (net reduction from consolidation) |
| Grant briefs complete | 2 (Reginald + Gathering) |
| Fragmented files eliminated | 15 (mx-reginald/grant/) |
| Cog-vs-script divergences fixed | 2 |
| Documentation files updated | 8 |

---

## Decisions Made

- **Two complementary grants, not competing** - Gathering (standard) and Reginald (implementation) can be submitted simultaneously to different programmes
- **Cog is authority, script must match** - when cog mandates a rule, the implementing script must enforce it. Added to LEARNINGS.md
- **No intermediate files** - no -print.md, no .mx.json sidecars. Source directories contain source files only
- **PDFs always to mx-outputs/pdf/** - enforced in script default, cog policy, and both skills

---

## Next Steps

1. **Push to remote** - main repo ready to push
2. **Helen briefing** - share both grant PDFs with Helen for review and adaptation
3. **Review Handbook chapter flow** - continued from morning (sequential read for narrative continuity)
4. **Build final Handbook PDF** - publication-ready with all morning fixes and illustrations

---

## Commit Log

| Hash | Description |
|------|-------------|
| `ba0d60ca` | Humanizer: purge forbidden vocabulary, em dashes, sentence-initial conjunctions |
| `39695ed5` | chore: update changelog - humanizer vocabulary and style purge |
| `50ee9f5c` | Consolidate Reginald grant files into SSOT |
| `6d1c5d6d` | chore: update changelog - Reginald grant SSOT consolidation |
| `113fa61d` | Gathering grant brief, PDF pipeline fixes, documentation sweep |
