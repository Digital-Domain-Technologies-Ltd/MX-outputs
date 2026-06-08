---
title: "Co-Directors Report -- Business Plans Consolidated and Compliance Cleaned"
description: "Twenty-two scattered business plans consolidated into seven authoritative documents; field-compliance scan brought to zero across all categories via dictionary extension and dead-metadata cleanup."
author: "Tom Cranstoun"
created: 2026-04-26
modified: 2026-04-26
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, consolidation, business-plans]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-26-evening-report.md
  purpose: "Twenty-two scattered business plans consolidated into seven authoritative documents; field-compliance scan brought to zero across all categories via dictionary extension and dead-metadata cleanup."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report -- Business Plans Consolidated and Compliance Cleaned"]
---

# Co-Directors Report -- Business Plans Consolidated Into the Brain

**Date:** 26 April 2026 -- Evening
**Segment:** Evening (5 pm onwards)

---

## Summary

The session consolidated 22 scattered business plans, sponsorship pitches, investor decks, and consulting variants into seven authoritative documents in the gestalt's institutional memory at `mx-canon/mx-maxine-lives/businesses/`. Two folders, one per business: The Gathering and DDT trading as CogNovaMX. Each folder carries a business plan, a sponsorship pitch, and a messaging-ideas file drawn from contact knowledge and chapter-SOUL sampling. The originals were deleted from the hub and from the mx-crm submodule. The consolidation makes the operating model legible in one place, flags the unresolved investor ask range (£300k vs £500k), and documents the planned MX Holdings restructure as a destination rather than a present state.

---

## What Was Done

### 1. Discovery and triage

Mapped the existing landscape across `mx-canon/ssot/pitches/`, `mx-canon/ssot/business-case/`, `mx-crm/pitches/`, `mx-crm/boye-co/strategy/`, `datalake/knowledge/architecture/`, and `datalake/pipeline/drafts/ideas/`. Identified the February 2026 master map (`business-plans-summary.md`) which itself flagged numerical contradictions across documents written between December 2025 and March 2026. Confirmed the brain location with reference to `SOUL.md`: "Maxine Lives is the brain." Established the destination as `mx-canon/mx-maxine-lives/businesses/`.

### 2. Authorial decisions

Wrote the consolidated docs around the grounded operating model (Year 1 revenue £75k-£210k for DDT; £210k-£335k for The Gathering as a separate entity), explicitly retiring the £940k-£5M projections from earlier "Tom personally delivers 50-100 engagements" framings. Documented the investor ask as a range (£300k-£500k) with a flag for Tom to settle before the next investor conversation. Treated MX Holdings as the destination, not the present, since incorporation has slipped past the original 20 February 2026 target. Wrote the two businesses with deliberate separation: The Gathering's independence from DDT is documented as the trust mechanism for CMS vendor sponsorship, not a technicality.

### 3. Files created

Seven new documents in the brain:

| File | Lines |
|------|-------|
| `businesses/README.md` (index, source map, supersession notes) | 75 |
| `businesses/the-gathering/business-plan.md` | 237 |
| `businesses/the-gathering/sponsorship-pitch.md` | 106 |
| `businesses/the-gathering/messaging-ideas.md` | 138 |
| `businesses/ddt-cognovamx/business-plan.md` | 302 |
| `businesses/ddt-cognovamx/sponsorship-pitch.md` | 124 |
| `businesses/ddt-cognovamx/messaging-ideas.md` | 162 |
| **Total** | **1,144** |

### 4. Files deleted

Twenty-one in the hub plus one in the mx-crm submodule. The deleted set includes the Feb 2026 business-plans-summary master map, the Arrive First fantasy investor pitch (£238M Year 1 ARR), both v2.0 investor pitches, all five consulting business plan variants, four general pitch decks, three partner one-pagers, the Boye-Co partnership pitch, the Gathering business plan draft, and one stray pitch idea from the drafts pipeline. Tactical SOW templates in `mx-crm/pitches/proposals/`, operational architecture docs in `mx-canon/ssot/business-case/maxine/`, investor PDFs, and per-contact strategy notes were deliberately retained.

### 5. Detached HEAD recovery

Step 1 of step-commit found two submodules in detached HEAD: mx-crm (at the hub's stale pointer, behind origin/main by two commits) and mx-outputs (at origin/main but local main was three commits behind). Both recovered cleanly via `checkout main` and (for mx-outputs) a fast-forward merge. No orphan commits were lost. The recovery is documented here because the pattern recurs and is worth flagging.

### 6. Compliance gate cleanup (post-consolidation)

After the consolidation push, the per-file MX field compliance scan flagged 8 pre-existing files with violations. Two follow-on sub-sessions resolved the residual:

**Deprecated-field fix (3 workshop docs).** The `mx.updateInstructions` field on `workshop-browser-setup.md`, `workshop-content-plan.md`, and `workshop-facilitator-notes.md` was deprecated in the field dictionary with `runbook` as the recommended replacement. The auto-fixer skipped them because no rename target was machine-readable, so the rename was applied manually: the multi-key `updateInstructions:` block was collapsed into a single multi-line `runbook:` string preserving source, method, style-rules, structure, and content-source information. Same pass also fixed invalid-enum violations: `audience: maintainers` → `contributors`, `audience: collaborators` → `community`. After the fix: deprecated 3→0, invalid-enum 4→0.

**Unknown-field residual (5 files across 3 repos).** Three classes of issue, three resolutions:

- **`reportMx:` block** in two mx-audit templates and two mx-crm outreach reports was dead metadata (no script consumed it). Stripped the block, lifted the useful `generate:` sub-block into the existing `mx:` block where `mx.generate` is a recognised dictionary field.
- **`mx.documentTitle`, `mx.documentDescription`, `mx.documentAuthor`** in the visa reference letter were undocumented vendor fields. Renamed to `x-mx-` prefixed vendor extensions and added to `cognovamx-fields.yaml` so the document-class structure (where formal title differs from file title) is preserved and discoverable.
- **`pagestyle`, `classoption`** in the visa letter are pandoc/LaTeX passthrough variables that pandoc reads by exact name; they cannot be renamed. Added to `cognovamx-fields.yaml` as top-level pandoc-passthrough fields with notes explaining why renaming would break the generator.

After the fix: unknown 9→0, total compliance gate clean across all five categories (`unknown`, `deprecated`, `naming`, `invalid-enum`, `frontmatter-parse-error` all zero).

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 11 (5 hub consolidation + 4 hub compliance + 1 mx-audit + 1 mx-crm follow-on; plus the 3 mx-outputs commits already counted) |
| Files created (hub) | 7 |
| Files deleted (hub) | 21 |
| Files deleted (mx-crm) | 10 |
| Lines added (hub, new docs) | 1,144 |
| Lines removed (hub, deletions) | 6,496 |
| Lines removed (mx-crm) | 2,423 |
| Net hub line change | -5,352 |
| Repositories | 4 (hub, mx-crm, mx-audit, mx-outputs) |
| Source documents consolidated | 22 |
| Output documents created | 7 |
| Compression ratio | 22:7 (~3:1) |
| Compliance violations resolved | 16 (3 deprecated + 4 invalid-enum + 9 unknown) |
| Compliance categories now clean | 5 of 5 |

---

## The Insight

The scattered business documents were not just numerous, they were actively contradictory. Year 1 revenue projections ranged from £75k to £5M depending on which document you read and when it was written. The investor ask appeared as £206k, £300k, and £500k in different docs. The corporate structure assumed a parent company (MX Holdings) that has not been incorporated. Each individual document was internally consistent; the corpus was incoherent.

The consolidation forces a single operating story. Where two earlier documents disagreed, one number is in the new plan and the other is documented as superseded. Where the corporate structure is aspirational rather than current, that fact is now explicit. Where two recent documents disagreed about the investor ask (£300k vs £500k), the new plan presents the range and flags it as a decision Tom needs to make before the next investor conversation, rather than pretending the disagreement does not exist.

A document that admits its own contradictions is more useful than two documents that each pretend to be the truth.

---

## Decisions Made

- The brain at `mx-canon/mx-maxine-lives/businesses/` is the canonical home for business planning. New pitches do not get to scatter back across the repo.
- The grounded operating model (Year 1 revenue £75k-£210k for DDT) supersedes the aspirational £940k-£5M projections.
- The Arrive First investor pitch (£238M Year 1 ARR) is retired as fantasy and explicitly named as such in the messaging-ideas hooks-to-retire section.
- DDT/CogNovaMX and The Gathering are treated as two distinct businesses with deliberate separation. Independence of the standard is the trust mechanism.
- MX Holdings is documented as the planned destination, not the present.

---

## Open Questions

- **Investor ask:** £300k or £500k? Two recent documents disagree. Decision needed before the next investor conversation. Documented as a range pending resolution.
- **MX Holdings incorporation:** original target 20 February 2026, slipped. New target?
- **MX Printworks relationship:** wholly owned subsidiary, joint venture with LPC, or operating partnership? Affects corporate structure, tax, and exit scenarios.
- **The Gathering/DDT certification overlap:** the two business plans cross-reference each other on certification (Gathering issues the standard, DDT delivers training under licence). Worth a one-page hand-off doc once the programme actually launches.

---

## Next Steps

- Tom reviews the seven new documents and corrects any framing that is not his voice.
- Tom settles the £300k vs £500k investor ask question.
- Confirm new target date for MX Holdings incorporation.
- The "scattered business plans" recurring problem is now solved structurally; if pitches start scattering again, the brain location is the structural answer rather than another summary doc.

---

## Commit Log

| Hash | Repository | Description |
|------|------------|-------------|
| cef5c9f | mx-crm | Remove scattered business plans and pitches |
| 8167d2e | mx-outputs | Add evening directors report: business plans consolidated |
| aeb21c4 | mx-outputs | Backfill hub commit hash in evening directors report |
| 5b1ff24 | mx-outputs | Regen README index: add evening directors report entry |
| 54aa7c7 | hub | Consolidate scattered business plans into mx-maxine-lives/businesses |
| 0134adf | hub | Document business plan consolidation in CHANGELOG, UBERCOG, REMINDERS |
| 340b695 | hub | Add LEARNINGS rule: mx.audience is enum-constrained |
| b371550 | hub | Add REMINDERS item: resolve updateInstructions deprecated-field residual |
| ce5f671 | hub | Bump mx-outputs: regen README index for evening directors report |
| 7ff2255 | hub | Replace deprecated updateInstructions with runbook in workshop docs |
| 14ba3aa | hub | Update REMINDERS: deprecated-field fix done, only unknown-field residual remains |
| 9a5f5d0 | mx-audit | Strip dead reportMx block from audit templates |
| caaf6d4 | mx-crm | Resolve unknown-field violations in visa letter and outreach reports |
| a54c99d | hub | Resolve unknown-field residual: extend dictionary + cleanup |
| 31ae92d | hub | Remove resolved unknown-field REMINDERS item |
