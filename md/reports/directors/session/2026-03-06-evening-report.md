---

title: "Co-Directors Report — SSOT Consolidation: Pitches, Business Case, Specifications, Architecture, Writing Guides"
description: "Evening session report. Major structural consolidation — 59 documents moved from scattered locations into mx-canon/ssot/, organised by topic. All references updated across the repo."
created: "2026-03-06"
version: "1.0"
author: "Tom Cranstoun"
mx:
  x-mx-segment: "evening"
  audience: "stakeholders"
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-06-evening-report.md
---


# Co-Directors Report — SSOT Consolidation

**6 March 2026 — Evening (v1.0)**

---

## Summary

Tom identified that pitch documents, business case material, compliance specifications, architecture documents, and writing guides were scattered across the repository with no single authoritative location. This session consolidated all of them into `mx-canon/ssot/` — the Single Source of Truth.

The consolidation followed the interview-me skill workflow: Tom was interviewed on scope, destination, and organisation for each batch. Every move was verified. All references across the repo were updated afterwards.

This is the largest structural reorganisation of the repository to date.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Documents moved | 59 |
| New SSOT folders created | 7 |
| Files with updated references | 24 |
| Git renames tracked | 54 |
| Files copied from submodules | 3 (mx-crm) |
| Skills updated | 6 |
| Registry files updated | 4 |
| Total files changed | 82 |

---

## What Was Consolidated

### 1. Pitches → `mx-canon/ssot/pitches/` (13 files)

Audience-organised pitch documents:

| Sub-folder | Files | Source locations |
|------------|-------|-----------------|
| `investors/` | 4 | mx-canon/mx-vision/, datalake/guides/, mx-corporate/ |
| `partners/` | 4 | mx-crm/pitches/, mx-canon/mx-maxine-lives/ |
| `public/` | 4 | mx-canon/mx-maxine-lives/deliverables/ |
| Root | 1 | mx-messaging.cog.md (framework) |

### 2. Business Case → `mx-canon/ssot/business-case/` (21 files)

Complete contents of mx-corporate/ and mx-maxine/ consolidated:

| Sub-folder | Files | Content |
|------------|-------|---------|
| `vision-strategy/` | 2 | Financial and non-financial vision briefs |
| `corporate-structure/` | 1 | Holdings structure |
| `staff-documents/` | 2 | Staff overviews |
| `operational/` | 1 | Operational roadmap |
| `founder-profile/` | 2 | About Tom, advisory board brief |
| `partnerships/` | 2 | Boye partnership, proposal template |
| `maxine/` | 6 | Architecture, vision, valuation, Arrive First pitch |
| `strategy/` | 2 | IP strategy, monetisation strategy |
| Root | 5 | SOUL, README, structure diagram, plans summary, service offerings |

### 3. Specifications → `mx-canon/ssot/specifications/` (10 files)

| Sub-folder | Files | Content |
|------------|-------|---------|
| Root | 7 | MX compliance specs (webpage, markdown, JS, CSS, conference, CMS, MCP PRD) |
| `cog/` | 3 | Cog unified spec, identity spec, glossary |

### 4. Architecture → `mx-canon/ssot/architecture/` (5 files)

Hub mount table, intent architecture, data sovereignty, doc architecture, deployment architecture.

### 5. Writing Guides → `mx-canon/ssot/writing-guides/` (6 files)

Writing style, executable documentation, context-preserving references, YAML frontmatter template, MX YAML guide, onboarding guide.

### 6. Strategy → `mx-canon/ssot/business-case/strategy/` (2 files)

IP strategy and monetisation strategy (moved from datalake/knowledge/architecture/ where they were misfiled).

---

## Reference Updates

All references to old paths were updated across:

- **Root config**: CLAUDE.md, UBERCOG.cog.md, REMINDERS.md, README.md
- **Skills**: humanizer, create-content, md-workflow, review-docs (skill + checklist + examples), mx-rankinize
- **Registries**: specifications.json, templates.json, governance.json, governance.md
- **Internal cross-refs**: 30+ link updates within moved documents
- **Other**: fields.cog.md, blog-metadata-schema.md, mx-reginald/index.json, scripts docs

**Left unchanged (correctly)**: CHANGELOG.md (historical records), progress tracking documents, operational notes.

---

## New SSOT Structure

```
mx-canon/ssot/
├── fields.cog.md                    (existing)
├── principles.cog.md                (existing)
├── mx-html-writing-guide.cog.md     (existing)
├── pitches/                         13 files — investors/, partners/, public/
├── business-case/                   23 files — 8 sub-folders
├── specifications/                  10 files — compliance + cog/
├── architecture/                     5 files
└── writing-guides/                   6 files
```

**Total SSOT files: 63** (was 3 before this session).

---

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| Audience-based pitch folders (investors/partners/public) | Maps to who receives each document |
| Preserve mx-corporate sub-folder structure | Familiarity, already well-organised |
| Move from submodules too (mx-crm) | True single source of truth |
| Drop numbered folder prefixes (02-vision-strategy → vision-strategy) | Cleaner, numbers were arbitrary |
| Messaging framework at pitches/ root | Serves all audiences, not one |
| Strategy as sub-folder of business-case | IP and monetisation are business case material |

---

## Not Yet Committed

All changes are staged but **not committed**. The commit requires:

1. Commit mx-crm submodule first (3 deleted files)
2. Commit main repo (54 renames, 3 new files, 24 modifications)

Awaiting Tom's approval to commit.

---

## What Changed About Maxine

This session was driven by the `/interview-me` skill. Maxine conducted structured interviews at each decision point, presenting options and confirming before acting. The pattern worked well for a large-scale reorganisation where Tom's intent needed clarification at multiple stages.

---

## Next Steps

- [ ] Commit the consolidation (submodule-first workflow)
- [ ] Regenerate `.mx.yaml.md` metadata files for new SSOT sub-folders
- [ ] Review whether mx-corporate/ and mx-maxine/ directories should be removed entirely or kept as stubs
- [ ] Check submodule references in allaboutv2, mx-audit, mx-collaboration (external repos)
