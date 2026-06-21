---
title: "Co-Directors Report: REGINALD Documented and Deployed"
author: Tom Cranstoun

created: '2026-03-01'
type: info-doc
mx:
  date: 2026-02-26
  x-mx-segment: morning
  status: final
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-02-26-morning-report.md
  purpose: "Co-Directors Report: REGINALD Documented and Deployed"
  audience: [humans, machines]
  stability: final
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report: REGINALD Documented and Deployed"]

---

# Co-Directors Report: REGINALD Documented and Deployed

**Date:** 26 February 2026 (Morning)
**Prepared by:** Maxine

---

## Executive Summary

This morning's session delivered both the documentation and deployment of REGINALD — the trust registry that connects Maxine, COGs, and AI providers. Four comprehensive manuals, nine professional diagrams, and a live static registry at `allabout.network/reginald/` now define and demonstrate how the MX ecosystem components interact. The registry is live with 164 COGs published.

---

## What Was Built

### REGINALD Documentation Suite

**4 source manuals created:**

| Document | Purpose | Lines |
|----------|---------|-------|
| COG Format Manual | Complete specification for the cog document format | 626 |
| REGINALD User Manual | Publisher and consumer guide for the registry | 742 |
| REGINALD Implementation Plan | Technical roadmap (confidential) | 651 |
| Maxine Integration Guide | How AI agents integrate with REGINALD | 895 |

**9 SVG diagrams created:**

- `cog-anatomy.svg` — COG structure (YAML frontmatter + markdown body)
- `cog-type-decision.svg` — Action vs Info COG decision tree
- `reginald-architecture.svg` — Ingest → Index → Serve with Trust Layer
- `signing-engine-flow.svg` — COG validation and signing workflow
- `cdn-architecture.svg` — Edge distribution (EU/US/Asia to Glasgow Origin)
- `domain-structure.svg` — allabout.network URL paths
- `reginald-flow.svg` — Publisher → Registry → AI Agent
- `maxine-architecture.svg` — Intake → Reason → Execute layers
- `trust-verification-flow.svg` — Compliance level decision flow

**4 print-ready PDFs generated** in `packages/mx-outputs/reginald/`:

- All with embedded PNG diagrams
- Zero LaTeX warnings after Unicode cleanup

### PDF Generator Enhanced (v1.10.0)

The PDF generation cog was updated with lessons learned during this session:

- **Step 6.5:** Clean invisible Unicode characters (U+200B zero-width spaces)
- **Task list handling:** `-f markdown-task_lists` flag prevents checkbox Unicode warnings
- Both A4 and Kindle format commands updated

### Infrastructure Improvements

- **mx-exec enhanced:** Now supports direct file paths and URLs, not just cog names
- **marp-regen.cog.md:** New action cog for regenerating PPTX from Marp markdown
- **Cog specification clarified:** "A cog is any file with YAML frontmatter" — content defines, not extension

### REGINALD Static Registry Deployed

**Live at:** `https://allabout.network/reginald/`

The registry is now operational as a static site hosted via Adobe Edge Delivery Services:

| Component | Description |
|-----------|-------------|
| Landing page | COG browser with search, category/type filters |
| API endpoints | `/api/v1/cogs.json`, `/api/v1/stats.json` |
| COG metadata | `/cogs/{namespace}/{name}/latest.json` |
| Raw content | `/cogs/{namespace}/{name}/content.md` |
| AI discovery | `/llms.txt` for AI agent integration |

**Key files created:**

- `scripts/reginald-static-gen.js` — Generator script (reads from MX-Reginald index)
- `packages/allaboutv2/reginald/index.html` — Landing page (11KB, MX dark theme)
- `npm run reginald:generate` — Regeneration command

**Registry statistics:**

- 164 COGs published
- Categories: mx-core, business, guides, system, presentations, and more
- Types: action-doc and info-doc
- Compliance level: 2 (Structured, no signing yet)

---

## Strategic Context

**The triangle is now documented:**

```
        REGINALD (Trust Registry)
              /          \
             /            \
      COGs ←——————————————→ Maxine
   (Documents)           (AI Agent)
```

- **COGs** are the atomic unit — any file with structured metadata
- **REGINALD** provides verification, signing, and discovery
- **Maxine** queries REGINALD to get verified answers instead of guessing

This architecture reduces AI hallucination by replacing inference with lookup.

---

## Timeline Alignment

| Milestone | Date | Status |
|-----------|------|--------|
| London CMS Experts | 26 Feb 2026 | Today — lightning talk ready |
| MX: The Handbook | 2 Apr 2026 | On track |
| CMS Summit Frankfurt | 12 May 2026 | Demo preparation underway |
| MX Protocols | 1 Jul 2026 | REGINALD docs ready for inclusion |

The REGINALD documentation is positioned for the July Protocols release, not the Frankfurt demo. Frankfurt will demonstrate live MX principles; the registry architecture documentation supports the book.

---

## Commits This Morning

```
49d131b docs: update changelog with REGINALD static site deployment
0fce2ab feat: deploy REGINALD to allabout.network
3a8bd48 feat: add REGINALD static site generator
e9b4d2b chore: update mx-outputs submodule — morning directors report
b5630ed fix: minor whitespace fixes in REGINALD documentation
adf3ff5 docs: update changelog for 2026-02-26
3946e9d chore: update local settings and fix marp-regen runbook
54364c4 feat: add marp-regen action cog
659b618 feat: enhance mx-exec with path and URL support
83ecc13 docs: update cog specification and guides
8ee82aa feat: add REGINALD documentation source files
8cedfa2 feat: update pdf-generator.cog.md to v1.10.0
497df32 chore: update mx-outputs submodule — REGINALD PDFs and diagrams
```

**Total:** 13 commits, ~4,500 lines added

---

## Next Steps

1. **Today:** London CMS Experts lightning talk (presentation ready)
2. **This week:** Review REGINALD implementation plan with Scott
3. **Before Frankfurt:** Finalise demo site and live Maxine interaction
4. **Before July:** Integrate REGINALD documentation into Protocols manuscript
5. **Future:** Add Ed25519 signing to enable compliance levels 3-5

---

*Report updated: 26 February 2026, 12:30 GMT*
