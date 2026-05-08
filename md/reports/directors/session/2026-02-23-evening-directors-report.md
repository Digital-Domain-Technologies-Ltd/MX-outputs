---
title: "Co-Directors Report — MX-Gathering Standards Body Launch"
created: "2026-02-23"
version: "1.2"
author: Tom Cranstoun

mx:
  x-mx-segment: "evening"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-02-23-evening-directors-report.md
---

# Co-Directors Report

## MX-Gathering Standards Body Launch

**Date:** 2026-02-23 (Evening)
**Theme:** Standards governance, vendor neutrality, canonical source designation

---

## Executive Summary

Three-part evening session. Part 1: archived Tom's CMS Kickoff 2024 article as PDF. Part 2: comprehensive audit of YAML field vocabulary culminating in Field Dictionary v1.5. Part 3: complete repositioning of mx-gathering as an independent, vendor-neutral standards body following the W3C model.

**Key decisions:**

- MX-Gathering is now canonical for open standard specs (hub-content keeps reference copies)
- camelCase is the naming convention for all multi-word fields (NDR #2)
- 13 new fields added to the vocabulary; 15 legacy kebab-case fields formally deprecated
- LICENSE copyright transferred from Tom Cranstoun personally to "The Gathering" as organisation
- All "cog" terminology replaced with "structured document" throughout specifications
- British English requirement removed — language-neutral contributions welcomed

---

## By the Numbers

| Metric | Part 1 (Archive) | Part 2 (Governance) | Part 3 (Standards Body) |
|--------|------------------|---------------------|-------------------------|
| **Commits** | 3 | 2 | 4 |
| **Files audited** | — | 1,686 markdown | — |
| **Fields discovered** | — | 238 unique | — |
| **New fields added** | — | 13 | — |
| **Overlap resolutions** | — | 15 kebab→camelCase | — |
| **Docs promoted** | — | 12 specs | — |
| **Files in final repo** | — | — | 20 markdown |
| **Content relocated** | — | — | 3 destinations |

---

## Part 1: CMS Kickoff 2024 Article PDF

| Item | Location |
|------|----------|
| **PDF** | `packages/mx-outputs/binaries/blogs/The-AI-Tipping-Point-CMS-Kickoff-2024.pdf` |
| **Source** | `hub-content/MX-Canon/MX-Maxine-Lives/thinking/notes/kickoff.md` |
| **Original** | https://cmscritic.com/a-cms-consultants-takeaways-from-cms-kickoff-2024 |

**PDF features:**

- Prominent "Originally published at" attribution box
- Table of contents
- All 5 original screenshots embedded
- Professional formatting (11pt, 1-inch margins)

**Why this matters:** This article is historical. It's where Tom first articulated the idea that became MX — that AI reads content like an eight-year-old shops for toys. The PDF preserves this for archives and can be shared offline.

---

## Part 2: Field Dictionary v1.5 & MX-Gathering Governance

### Field Dictionary Updates

**New fields added (13):**

- `maintainer`, `type`, `confidentiality`, `ownership`, `domain`, `segment`
- `ai`, `contextProvides`, `assistance`, `editable`
- `runtime`, `dependencies`

**Overlap resolutions (15 kebab→camelCase):**

| Legacy | Canonical |
|--------|-----------|
| `builds-on` | `buildsOn` |
| `publication-date` | `publicationDate` |
| `sop-content-policy` | `sopContentPolicy` |
| `sop-preferred-access` | `sopPreferredAccess` |
| `sop-structured-data` | `sopStructuredData` |
| ... and 10 more | (see field-dictionary.cog.md) |

### MX-Gathering Canonical Designation

**Decision:** `MX-Gathering (standalone repo)/` is now the canonical source for open MX standards.

**Documents promoted to mx-gathering:**

- `cog-specs/`: field-dictionary.cog.md, cog-unified-spec.md, mx-standards-alignment.cog.md
- `guides/`: what-is-a-cog.cog.md, cogs-for-agent-developers.cog.md
- `naming-decisions/`: NDR 1-3 (block naming, camelCase, spelling neutrality)
- `architecture-decisions/`: ADR 1-2 (block architecture, namespace policy)
- `founding-charter.md`, `deliverables/announcing-the-gathering.md`

**Reference copies remain in:** `hub-content/MX-Canon/MX-The-Gathering/`

### Metadata Compliance

Templates and profiles updated for camelCase (NDR #2):

- `templates/documentation-yaml-metadata.md`
- `templates/appendix-k-yaml-metadata.md`
- `profiles/*.md` (5 files)

---

## Part 3: MX-Gathering as Vendor-Neutral Standards Body

Complete repositioning of mx-gathering to follow the W3C model: the standards body governs the spec; implementers build products on it.

### What Changed

| Change | Before | After |
|--------|--------|-------|
| **Copyright holder** | Tom Cranstoun (personal) | The Gathering (organisation) |
| **LICENSE language** | "Software" | "Specification" |
| **Acknowledgement** | None | Credits Tom as Founder + MX Books author |
| **Terminology** | "COG", ".cog.md" | "Structured document", ".md" |
| **Language requirement** | British English | Language-neutral |
| **ADR numbering** | Started at 2 | Starts at 1 |
| **llms.txt** | Present | Removed (README.md sufficient) |

### Content Relocated

| Content | Destination |
|---------|-------------|
| Community content (discussions/, events/, members/) | `packages/mx-collaboration/` |
| Philosophy/book content (specifications/, drafts, web/) | `hub-content/MX-Canon/MX-The-Gathering/` |
| AI agent profiles | `hub-content/MX-Canon/MX-Maxine-Lives/profiles/` |

### Final Repository Structure

**20 markdown files total:**

- `metadata-specs/` — 3 specs (unified-spec, field-dictionary, mx-standards-alignment)
- `architecture-decisions/` — 1 ADR (namespace policy)
- `naming-decisions/` — 3 NDRs (block naming, camelCase, spelling neutrality)
- `guides/` — 2 guides (introduction, agent-developers-guide)
- `contributors/` — 3 docs (contribution-guidelines, code-of-conduct, style-guide-summary)
- `templates/` — 1 template (documentation-yaml-metadata)
- Root: README.md, CLAUDE.md, LEARNINGS.md, founding-charter.md, LICENSE

### Why This Matters

The Gathering is now positioned as a credible, independent standards body that any organisation can implement. The W3C model (standards body separate from implementers) establishes trust. The MIT licence with "Specification" language clarifies this is a standard, not a software product. The acknowledgement section preserves Tom's role as founder while making clear the standard belongs to the community.

---

## Commit Log

| Hash | Repository | Description |
|------|------------|-------------|
| `eb9d3d6` | mx-outputs | docs: add CMS Kickoff 2024 article PDF |
| `7ccde59` | main | docs: add CMS Kickoff 2024 article and update submodule |
| `cdde2ba` | main | chore: update changelog with CMS Kickoff 2024 PDF entry |
| `3ada2b8` | main | chore: update mx-gathering submodule (cog-format specs) |
| `c28eecb` | main | docs: update changelog with mx-gathering and field-dictionary |
| `e70ce2b` | mx-gathering | feat: add 12 canonical cog-format documents |
| `6d0b2b5` | mx-gathering | refactor: reposition as vendor-neutral standards body |
| `232d24b` | mx-collaboration | feat: receive relocated community content |
| `2ce6e3c` | main | refactor: reposition mx-gathering as vendor-neutral standards body |
| `1eab66d` | main | docs: update changelog with mx-gathering standards body refactor |
| `ceb28c1` | main | chore: update local settings and remove stale submodule refs |

---

## Session Metadata

**Segment:** Evening (17:00+)
**Commits:** 9 (main) + 2 (mx-gathering) + 1 (mx-outputs) + 1 (mx-collaboration)
**Repositories modified:** 4 (main, mx-gathering, mx-outputs, mx-collaboration)
**Duration:** ~180 minutes total (extended session with context continuation)

**Participants:**

- Tom Cranstoun (direction)
- Maxine (implementation)

---

**Prepared by:** Maxine (AI Co-Director)
**Reviewed by:** Tom Cranstoun (Co-Founder)
**Distribution:** Eleanor Cranstoun (Director), Scott McGregor (Director)
