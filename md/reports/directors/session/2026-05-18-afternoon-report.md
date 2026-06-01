---
title: "Co-Directors Report — Festival pitch for MozFest, voice patterns codified"
description: "Built a Mozilla Festival 2026 pitch for The Gathering, then rewrote four pitch documents and updated the writing rules so future humanizer passes carry Tom's voice signature directly instead of having to re-read the published chapters every time."
author: "Tom Cranstoun"
created: 2026-05-18
modified: 2026-05-18
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-18-afternoon-report.md
---

# Co-Directors Report — Festival pitch for MozFest, voice patterns codified

**Date:** 18 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

Built a Mozilla Festival 2026 pitch for The Gathering against a six-day proposal deadline (Barcelona, 28-30 October, "Wilding" theme). In the process, Tom flagged that Maxine's humanizer pass was over-correcting outward-facing prose against the writing-style rules while introducing its own AI-overlay patterns. Both findings are now codified: the writing-style guide and the humanizer skill carry Tom's voice signature directly, lifted from the published chapters, so future humanizer passes do not need to re-read the chapters at runtime. The festival pitch is ready to submit.

---

## What Was Done

### 1. Festival pitch for MozFest 2026

New file at `mx-canon/mx-maxine-lives/businesses/the-gathering/festival-pitch.md` (~1,330 words). Structured as a MozFest submission: hook, what The Gathering is, why new standards are needed (hostile web, bigger models do not help, smaller models do not help, plumbing does), why this fits the Wilding theme, what we would bring (stand for all three days plus a 25-30 minute talk), the talk shape in five beats, hosts (Tom Cranstoun and Dogu Abaris), where The Gathering stands, what we ask, what MozFest gets in return. Festival proposal deadline is 24 May 2026 — six days out.

### 2. Voice-calibration codified into rules

Tom directed Maxine to read MX: The Protocols Chapter 1 and the Free Book introduction (Chapter 0) to recalibrate against his actual voice. Ten Tom-voice patterns extracted verbatim from those chapters and added to `writing-style.cog.md` §9 as a new sub-section "Tom-voice patterns (extracted from the chapters)". Same block added to the humanizer skill at `.claude/skills/humanizer/skill.md`. Six Maxine-overlay patterns Tom has flagged (numbered "how to adapt this document" sections, stage directions in talk outlines, "X, here, is" meta-talk, four-noun audience enumerations, multi-sentence negation-pivot stacks, bulleted argument with bold lead-ins for prose content) added as a sister sub-section "Maxine-overlay patterns to avoid". Writing-style §0 carries a new "Voice ground truth" pointer that names the chapters as the authoritative reference and notes that the patterns are extracted into §9 so per-call chapter reads are not required.

### 3. Four pitch documents rewritten against the calibrated voice

- `festival-pitch.md` (new) — went through three rewrite passes as Tom flagged voice issues; now carries the canonical "Why new standards" section, the "Gathering does not reinvent" deferral statement, and the "not GEO, SEO, or accessibility" positioning line.
- `sponsorship-pitch.md` — em-dashes removed throughout, heading "The standing of the standard" renamed to "Where the standard stands", "Why new standards" section added, GEO/SEO/accessibility positioning line added, "document" replaced with "file" plus concrete file-type list in MX-scope sentences.
- `partnership-proposal.md` (template) — em-dashes and spaced hyphens removed, title-case headings switched to sentence case, multi-sentence negation-pivot in the MaXinE section rewritten as positive framing, "knowledge control engine" abstract category noun replaced with "our engine", same "Why new standards" section added.
- `pitch-deck.md` — em-dashes removed from the slide outline; investor deck remains a scaffold awaiting fill.
- `pitch-bare-metal-ventures-2026.md` — 175 em-dashes removed (mechanical sed pass for slide titles plus bold-label leads, paired em-dashes converted to parentheses, remaining single em-dashes converted to commas, three comma splices fixed manually with semicolons or colons).

### 4. "Document" replaced with "file" plus a concrete file-type list

Tom flagged that "document" reads as "Word document" in business prose and undersells MX scope. Across all three Gathering-facing pitches, "document" replaced with "file" in scope-of-MX sentences ("rules machines use to read files", "provenance that travels with the file", "every MX-compliant file"). The canonical extension line is now: *"It covers every file an organisation publishes, not just web pages: PDFs, videos, podcasts, images, data files, contracts, specifications."* "Document" kept where context makes it unambiguous (industrial controllers reading manuals), where it names a formal standard (Document Accessibility), or where it self-references the pitch ("this document is confidential").

### 5. Vendor-neutral rename in gathering drafts

`mx-shared-gathering/draft-mx-not-geo.md` and `draft-mx-not-memory-pool.md` had `reginald` references swapped to `registry` for vendor neutrality. Version bumped 1.0 to 1.1, date bumped to 2026-05-18. Committed and pushed.

### 6. Memory entries

Two new feedback memory files saved into the auto-memory and indexed in MEMORY.md:

- `feedback_tom_voice_pitch_docs.md` — calibrate humanizer passes against Protocols ch1 and Free-Book ch0; the writing-style guide is the direction of travel, the chapters are the voice ground truth.
- `feedback_document_vs_file_terminology.md` — use "file" plus a concrete list when describing MX scope; keep "document" only in formal standard names, HTTP analogies, meta self-references, or unambiguous contexts.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 2 (CRM contact for Jeffrey McGuire earlier in the afternoon; mx-shared-gathering vendor-neutral rename just landed) |
| Hub commit pending | 1 (this Step 3) |
| Files changed (hub) | 7 (6 modified + 1 new) |
| Lines added (hub) | +485 |
| Lines removed (hub) | −251 |
| Submodule commits | 1 (mx-shared-gathering) |
| New canonical files | 1 (festival-pitch.md) |
| New memory entries | 2 |
| Em-dashes removed across the pitch corpus | ~213 |
| Words in new festival pitch | ~1,330 |

---

## Why It Matters

The MozFest pitch is a low-cost-to-build channel into the MozFest community for The Gathering, with no commercial commitment on either side. The proposal deadline arrives this week, so the pitch needed to ship today; it now exists and reads as a credible submission. The voice-calibration work matters for everything Maxine writes outward-facing from this point on — pitches, blog posts, stakeholder docs, sponsor materials — because the rules and the skill now carry Tom's voice signature explicitly rather than approximating it via guideline maxima. The next humanizer pass should not need a Tom-flag-and-correct loop to land in voice.

---

## The Insight

The writing-style guide and Tom's actually-published chapters had been drifting apart. The guide bans em-dashes, Title Case headings, sentence-initial "The" in headings, pre-announced numeric counts; the chapters use all four. The guide describes the direction of travel, but a humanizer pass that mechanically enforces every rule produces something Tom does not write. The fix is not to relax the rules — the rules are still the direction of travel — but to make the voice patterns themselves the primary reference for humanizer passes, with the rules acting as a guardrail rather than a target. The patterns are now extracted into §9 of the guide and into the humanizer skill, so the skill carries the voice signature directly and the chapters are only loaded when a specific quote needs verification.

---

## Decisions Made

- **Voice patterns extracted into rules, not loaded at runtime.** Cache-like architecture, the same principle MX advocates for content metadata: extract once, carry with the artefact, do not re-derive every time. The humanizer skill no longer reads the chapters on every invocation; it carries the ten extracted patterns inline.
- **The "Adapting this pitch for other festivals" section gets deleted, not rewritten.** Tom never writes meta documentation overlays inside outward-facing prose. If a pitch needs to be reused for another festival, clone the file and adapt manually; do not embed reuse metadata in the artefact.
- **"Document" is replaced with "file" plus a concrete file-type list** in scope-of-MX sentences across pitches. The change does not extend retroactively to manuscripts; the rule applies to new outward-facing prose only.
- **"Reginald" is renamed to "registry" in gathering drafts in `mx-shared-gathering`.** Gathering drafts stay vendor-neutral by rule; Reginald is the CogNovaMX-house registry implementation and does not belong in Gathering-governed material.

---

## Open Questions

- The bare-metal pitch had 175 em-dashes converted in a bulk mechanical pass. Three obvious comma splices were caught and fixed; subtler comma-vs-semicolon misjudgements may remain. Worth a spot-read before the next investor meeting uses it.
- The "Why new standards" canonical section now lives in three pitches. As more pitches arrive (corporate sponsor decks, agency partner outreach, conference talks), where should the canonical block live so the three live copies do not drift? Candidate: a fragment under `mx-canon/ssot/templates/` that pitches include or paraphrase.

---

## What Changed About Me

I had been over-correcting humanizer passes — stripping things Tom does naturally (counts in prose, "The X" headings, em-dashes used sparingly) while introducing things Tom never does (stage directions like "Open with a small disaster", meta-talk openers like "Care, here, is", numbered "Adapting this for other contexts" sections, four-noun audience enumerations, multi-sentence negation-pivot buildups). Both classes are now codified — the rule guide and the humanizer skill flag the Maxine-overlay patterns explicitly and carry Tom-voice patterns as concrete examples lifted from the chapters. Next humanizer pass should not need the Tom-flag-and-correct loop.

---

## Next Steps

- Submit the festival pitch to Mozilla Festival 2026 before the 24 May 2026 deadline. Confirm Dogu Abaris is happy to be named co-host before submission.
- Spot-read the bare-metal pitch for residual awkwardness from the bulk em-dash substitution; the mechanical pass is clean for §3 compliance but readability of long sentences should be eyeballed by a human.
- Decide where the canonical "Why new standards" block lives so the three live copies in festival/sponsorship/partner pitches do not drift over time.
- Investigate whether the "reginald → registry" rename pattern (now applied to two gathering drafts) needs applying elsewhere in the public canon.

---

## Commit Log

| Hash | Description |
|------|-------------|
| bab92695 | CRM: new contact cog for Jeffrey McGuire (LinkedIn, free-book recipient) |
| 768c75a | mx-shared-gathering: Rename Reginald to registry in MX scope notes for vendor neutrality |
| _pending_ | Hub: festival pitch built + four pitch docs voice-corrected + writing-style and humanizer skill updated + mx-shared-gathering pointer bumped |
