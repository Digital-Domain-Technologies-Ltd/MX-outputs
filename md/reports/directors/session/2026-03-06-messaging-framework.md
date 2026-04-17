---

title: "Co-Directors Report — Messaging Framework v2.0"
description: "Session report. Major revision of the MX Messaging Framework — external-ready, terminology aligned across repos, PDF generated, all submodules pushed."
created: "2026-03-06"
version: "1.0"
author: "Tom Cranstoun and Maxine"
mx:
  x-mx-segment: "late-evening"
  audience: "stakeholders"
  confidential: true
---


# Co-Directors Report — Messaging Framework v2.0

**6 March 2026 — Late Evening**

---

## Summary

The MX Messaging Framework was substantially revised to v2.0, making it share-ready for investors, advisory board, CMS partners, and the internal team. The document was reviewed for external readability — internal language, stale dates, and duplicate sections were removed. Scottish branding was stripped (Sean Connery accent reference preserved). New content added: the CMS Critic origin story, the five-stage MX journey table, book and Gathering teaser guidance, and a Reginald (full) milestone at 1 May 2026. Terminology was then aligned across six files in three repositories. A PDF was generated and pushed.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Files changed | 30 |
| Repositories touched | 3 (MX-hub, allaboutv2, mx-outputs) |
| Sections added to framework | 3 (origin story, five-stage journey, teasers) |
| Sections removed/consolidated | 3 (duplicate Key Dates, deliverables checklist, Open Questions renamed) |
| Cross-repo terminology fixes | 5 files |
| PDF generated | 76K |
| Commits | 2 (main repo) + 1 (allaboutv2) + 1 (mx-outputs) |

---

## What Was Built

### Messaging Framework v2.0

The canonical messaging document (`mx-canon/ssot/mx-messaging-framework.md`) was upgraded from an internal working document to an externally shareable framework:

- **Origin story** — links to Tom's [CMS Kickoff 2024 article](https://cmscritic.com/a-cms-consultants-takeaways-from-cms-kickoff-2024) on CMS Critic, establishing the founding observation: AI consumes content, the web isn't built for that
- **Five-stage MX journey** — table showing what machines do at each stage, without MX vs with MX, and why Reginald matters at Stage 1 (Discovery)
- **Book and Gathering teasers** — guidance for the pre-2 April window: share the cover, mention tg.community, invite curiosity
- **E-commerce TAM explanation** — prose paragraph explaining why e-commerce is the largest addressable market
- **Launch calendar consolidated** — merged two duplicate date tables into one with Status column

### External Readiness

An interview-driven review identified and fixed nine issues:

1. London CMS Experts marked as done (26 Feb past)
2. Duplicate calendars merged
3. Internal name removed from Grant section
4. Stage directions rewritten as guidance
5. Gestalt language replaced in footer
6. Deliverables checklist replaced with Supporting Materials section
7. Open Questions reframed as Key Decisions
8. Essay series clarified as upcoming
9. Version bumped to 2.0

### Cross-Repository Alignment

Terminology aligned to match the framework across five additional files:

- **allaboutv2** — Reginald cog fully rewritten to match v2.0
- **investor-pitch.md** — "Both Scottish" → "Two products"
- **mx-reginald/README.md** — "Key Dates" → "Launch Calendar" with Status
- **COG-SYSTEM-OVERVIEW.md** — same calendar update
- **reginald-implementation-plan.md** — "Open Questions" → "Decisions Pending"

---

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| Remove Scottish branding from messaging | Company positioning should be international, not regional. Sean Connery accent stays for the Maxshine moment. |
| Add Reginald (full) at 1 May 2026 | Production registry must be ready before Frankfurt. Clear deadline for the team. |
| Rewrite Reginald cog, not patch it | The allaboutv2 cog was a stale snapshot from 12 Feb — too far behind to patch. Full rewrite with canonical source pointer. |
| Add `mx.generate` to framework frontmatter | Enables repeatable PDF generation via `scripts/mx-pdf.sh` |

---

## Commit Log

| Hash | Description |
|------|-------------|
| `b3499629` | docs: align terminology with messaging framework v2.0 (30 files) |
| `6e5a8b9f` | chore: update changelog — messaging framework v2.0 session |
| `4e0d3e39` | allaboutv2: update messaging framework cog and company rename alignment |
| `3f14d9c` | mx-outputs: add messaging framework PDF v2.0 |

---

## Next Steps

- Reginald (full) build — production registry target 1 May 2026
- Three essays for allabout.network — planned before 12 May
- Book and Gathering teasers — begin sharing before 2 April window opens
