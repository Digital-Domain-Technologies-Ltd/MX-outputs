---

title: "Co-Directors Report — Manifesto Integration and Build Pipeline Updates"
created: "2026-03-15"
version: "1.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "afternoon"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-15-afternoon-report.md
  purpose: "Co-Directors Report - Manifesto Integration and Build Pipeline Updates"
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Manifesto Integration and Build Pipeline Updates"]
---


# Co-Directors Report — Manifesto Integration and Build Pipeline Updates

**Date:** 15 March 2026 — Afternoon
**Segment:** afternoon (noon–evening)

---

## Summary

The Machine Experience Manifesto was updated to match the authoritative PDF version, moved to shared chapters, updated with current Gathering references, and wired into all book build pipelines. The free book was regenerated with the manifesto included and deployed to allaboutv2. The services advert contact details were corrected.

---

## What Was Done

### 1. Manifesto Synchronisation

The markdown source (`machine-experience-manifesto.md`) was completely rewritten to match the authoritative PDF (`mx-manifesto.pdf`). The old "18 principles" format was replaced with the full community manifesto structure including: Our Belief, Core Principles (7 principles), Who Uses MX Practice, Our Commitment, What MX Is Not, Why Open Source, How MX Practice Evolves, Building on Existing Disciplines, The Vision, Join the Practice, Community Membership, Sustainability, About The Gathering, and How to Contribute.

### 2. Manifesto Updates

- All references to The Gathering updated — now described as a community-led collection of repositories at tg.community (not a single repo)
- Hyperlinks added to all tg.community references
- Pound amounts removed from sponsorship tiers
- Version bumped to 2.0

### 3. File Relocation

Manifesto moved from `datalake/pipeline/drafts/ideas/` to `datalake/manuscripts/mx-books/shared/` as a shared chapter for all books.

### 4. Build Pipeline Integration

- **Protocols** (HTML, PDF, simple): manifesto added between Glossary and The-End
- **Handbook** (HTML, PDF, simple): manifesto added between Glossary and The-End
- **Free book** (`gen-free-book.sh`): new step generates manifesto PDF and merges before services advert. Steps increased from 5 to 7.

### 5. Services Advert Fix

Contact changed from `mx-printworks@cog-nova.mx` to `MX Printworks via mx-printworks@cognovamx.com`.

### 6. Free Book Deployment

Free book regenerated (93MB, 7 sections) and copied to `allaboutv2/mx/mx-introduction-chapter.pdf`.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Files modified | 4 (manifesto, package.json, gen-free-book.sh, services-advert.md) |
| Files moved | 1 (manifesto to shared) |
| Build scripts updated | 8 pandoc commands + 1 shell script |
| Free book size | 93MB (7 sections) |

---

## Commit Log

*(pending — to be filled after commit)*
