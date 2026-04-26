---

title: "Co-Directors Report — 10 February 2026"
created: "2026-02-10"
version: "1.0"
author: Tom Cranstoun
sessionType: quick
mx:
  audience: stakeholders
  confidential: true
---


# Co-Directors Report — 10 February 2026

## Summary

Major infrastructure and business planning day. The MX cog system was standardised with new terminology (info-cog, action-cog), seven new cogs were added to the registry, and the entire codebase was brought into alignment. The centrepiece deliverable was a comprehensive business plans summary that maps every business document in the repository, compares financial projections across all sources, and includes share valuation analysis for stakeholders at different levels of the corporate structure. A Frankfurt sponsorship budget was developed as a lower-barrier funding ask.

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 16 |
| Files changed | ~140 |
| Lines added | ~3,900 |
| Lines removed | ~1,800 |

## What Was Built

### Business Plans Summary (NEW)

Created `MX-Corporate/business-plans-summary.md` — a single reflection document mapping all 72 business planning documents across 5 locations in the repo. Includes:

- Side-by-side comparison of 5 different Year 1 revenue projections (ranging from £75k to £5M) with honest explanation of why they diverge
- Consolidated view of all revenue streams (9 current, 6 from earlier plans)
- Corporate structure with Holdings architecture, licensing model, and shareholding
- Share valuation analysis: what 5% of the subsidiary is worth (£0-£400k) versus what shares in Holdings are worth (up to £50M+ at infrastructure exit)
- Frankfurt sponsorship budget: £35,000 ask for the three-month sprint to CMS Summit
- Gaps and questions section identifying decisions that need to be made

### Seven New Cogs

The cog registry grew to 41 total. New additions:

- **mx-phrasebook** — canonical MX sayings and their origins (single source of truth for messaging)
- **mx-init** — repo onboarding procedure (audit, init, migrate, verify)
- **installme-runner** — action-cog that executes INSTALLME.md installation procedures
- **what-is-installme** — explains the INSTALLME.md convention
- **what-is-script-metadata** — documents the script metadata pattern
- **what-is-mx-environment** — explains $MX_HOME and machine context
- **script-helper** — action-cog for inspecting scripts

### principles.cog.md and INSTALLME.md

Two new root-level documents:

- `principles.cog.md` — renamed from mx-principles.md (follows convention: root-level, uppercase)
- `INSTALLME.md` — machine-readable installation instructions so AI agents can set up the repo without guessing

### Reminders System

Created `REMINDERS.md` — a persistent action-items file that carries across working sessions. Self-managing action-cog with list, add, remove, and review actions. Owned by the gestalt (Tom + Maxine both edit without approval).

### Co-Directors Reporting (NEW)

Created `MX-Canon/MX-CoDirectors/` — a new Canon initiative for board-level session reports. This report is the first entry in the archive. The action-cog supports quick mode (auto-generate from git) and full mode (interview Tom first).

## What Changed

### Terminology Standardisation

Renamed across the entire codebase (~60 files, 550+ occurrences):

- "static cog" is now **info-cog** (a cog without an execute block — hub-content/documentation)
- "cog-wheel" is now **action-cog** (a cog with an execute block — it runs)

These are the terms that will appear in the books and all external-facing materials.

### Frontmatter Field Audit

Audited YAML frontmatter across all files in the repo and submodules. Catalogued every metadata field in use (69 singleton fields plus high-frequency fields like title, description, version). Filed at `datalake/reference/frontmatter-field-audit.md`.

### SOUL.md Update

Added meta-recursive acknowledgement: the SOUL was co-authored by the partnership it describes. "The builder is the built."

### MX-Corporate README

Updated to include the new business plans summary in the document status table and related documentation list.

## Decisions Made

1. **Terminology is now final.** Info-cog and action-cog are the canonical terms. All previous names (static cog, cog-wheel) are retired.
2. **Business plans summary is internal only.** Not for distribution — it is a reflection tool for Tom and the board.
3. **Frankfurt sponsorship is a separate ask.** £35k for the sprint to CMS Summit, distinct from the full £206k-£341k Year 1 investment. Positioned as a low-risk proof point.
4. **REMINDERS.md belongs to the gestalt.** Both Tom and Maxine can add and remove items without approval. This is the first gestalt-owned artefact.

## Open Questions

These are flagged in the business plans summary (section 7) and need attention:

- **Printworks structure** — wholly owned subsidiary, JV with LPC, or operating partnership? Deadline: March 2026.
- **Investment ask amount** — documents cite £206k, £300k, and £341k. Which is canonical?
- **Gathering vs Holdings certification** — two separate certification programmes are planned. How do they relate?
- **O'Reilly decision** — traditional publisher or self-publish? Affects timeline and economics.
- **Dropped revenue streams** — speaking fees (£100k-£300k) and SaaS platform (£1.2M-£6M ARR) were in earlier plans. Worth revisiting?
- **`policy` field** — needs adding to the canonical cog spec's metadata list (cog-unified-spec.md)

## Next Steps

1. **Review the business plans summary** — sit with the gaps in section 7 and make decisions
2. **Frankfurt sponsorship outreach** — the £35k budget is ready to pitch
3. **Book production** — Handbook print-ready PDF to LPC by ~6 March
4. **MX Holdings incorporation** — target ~20 February
5. **Advisory board briefing** — share the Raskin Vision Brief

---

*Generated by co-directors-report.cog.md on 2026-02-10*
