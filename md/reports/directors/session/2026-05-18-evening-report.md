---
title: "Co-Directors Report — Sponsor briefing canon-ised; festival pitch finalised"
description: "Sponsorship-pitch.md retired and replaced by canonical-sponsor.md as the single send-ready sponsor doc. Festival pitch finalised for MozFest submission. Fees stripped from business-plan and canonical sponsor briefing; both now describe structure, not numbers, and travel safely outside the repo. Letter-doctype page-break gate added to the PDF pipeline."
author: "Tom Cranstoun"
created: 2026-05-18
modified: 2026-05-18
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-18-evening-report.md
---

# Co-Directors Report — Sponsor briefing canon-ised; festival pitch finalised

**Date:** 18 May 2026 — Evening
**Segment:** evening (since 5pm; effectively all post-afternoon-step-commit work)

---

## Summary

Retired `sponsorship-pitch.md`; the canonical-sponsor.md is now the single send-ready sponsor document. Both it and the Gathering business plan had all £ figures stripped and the prose redrafted for external distribution; commercial ranges live in a confidential internal pricing note now. Festival pitch refined further (one-job opener, file-in-the-wild scope statement, Stream URLs, Doğu Abaris bio expanded with W3C and IETF credentials, Tom-relinquishing-major-sponsor paragraph). Five sponsor-facing taglines woven into the canonical briefing. Generated production PDFs for both documents (letter doctype, Gathering letterhead, no TOC). Added a doctype-aware page-break gate to the PDF orchestrator so letters render as continuous flow.

---

## What Was Done

### 1. Sponsorship-pitch.md retired; canonical-sponsor.md is now the single sponsor doc

Tom deliberately deleted `mx-canon/mx-maxine-lives/businesses/the-gathering/sponsorship-pitch.md`. Updated every active pointer across the canon to redirect to canonical-sponsor.md:

- canonical-sponsor.md frontmatter (`inherits`, `runbook`, `description`) and intro italic
- business-plan.md (frontmatter runbook + body pointer)
- businesses/README.md (runbook, doc-structure list, closing note)
- ddt-cognovamx/business-plan.md, one-pager.md, partner-strategy.md, funding-routes.md
- messaging-ideas.md `inherits` array
- ssot/papers/sponsor-and-funding-ssot.md `buildsOn`, current-pointer line, reference-list bullet (with deletion note added)

Historical references in SSOT lines 220, 264, 282, 284 preserved as decision-record context; changelog-archive files left untouched per the archived-changelog rule.

### 2. Fees stripped from business-plan.md and canonical-sponsor.md

The two outward-facing-adjacent documents are now safe to share externally. Every £ figure removed; the Sponsorship-tiers section now describes tier names and structure, not numbers. The "DDT's day rate" reference downgraded to "billed separately from sponsorship". The grandfather provision language kept as a structural fact (DDT + IDHL are pre-tier-model founding sponsors) without naming the grandfathered fee. Year 1 revenue table, three-year trajectory table, and cost structure table all rewritten without numeric columns. The pricing ranges now sit in a separate confidential internal pricing note referenced but not included. Business plan bumped to v3.0; canonical-sponsor.md prose tightened in the same pass.

### 3. Canonical-sponsor.md restructured for external distribution

Three additional changes brought the briefing to send-ready state:

- Single-row table ("Sponsor / Counterparty / Who it suits / What it buys / What it costs") converted to three prose paragraphs after the second row (MX-certified agency) was removed earlier; bold paragraph leads (`**What it buys.**`, `**What it costs.**`) carry the section.
- Five sponsor-facing taglines woven into the body where each lands naturally: *"Without docs, machines guess."* (closes the hallucination paragraph), *"Cut compute, not context."* + *"The greenest kilowatt-hour is the one you never use."* (frame a new energy-cost paragraph), *"Same content. Different audience. Same truth."* + *"Designed for both."* (close the convergence-principle paragraph).
- Internal repo links removed: manuscript path links (`../../../../../datalake/manuscripts/...`) stripped, leaving the italic titles intact; the business-plan.md cross-reference in the intro italic rephrased to plain prose. The document is now portable as a PDF or microsite-hosted page.
- Humanizer pass on the final version caught one §0 violation: lines 88-92 restated points already made in "Why you are reading this" and "What The Gathering is". Deleted in a single edit; the section now flows from "What it costs" directly into "## What sponsors get".

### 4. Festival pitch finalised for Mozilla Festival 2026

Several rounds of voice correction this session brought festival-pitch.md to submission-ready state:

- Opener rewritten as one-job framing: *"The Gathering has one job: write the standards that let machines read the files people publish. Nothing else."*
- Today-tomorrow machines paragraph added: ChatGPT, Claude, Gemini, Copilot, Perplexity today; autonomous vehicles, industrial controllers, small models on every phone tomorrow.
- File-in-the-wild scope paragraph added: PDFs, audio files, contracts, datasets, 3D models in manufacturing pipelines. *"The web is one place a file shows up. It is not the only place."*
- Doğu Abaris bio expanded with real credentials: Software Engineer for tg.community / Stream, W3C AI Content Disclosure Community Group Chair, author of two IETF Internet-Drafts (`draft-abaris-aicdh`, `draft-abaris-json-dcm`) and the Stream-Draft requirement-language note that anchors The Gathering's spec corpus, MediaWiki / Wikimedia Codex PHP contributor. Sources: the visa reference letter and the IETF datatracker page.
- Stream URLs replaced GitHub mx-shared-gathering links throughout: `stream.tg.community` is now the canonical public draft workspace pointer.
- Wilding section's opening paragraph expanded into three: the earlier-web-was-open frame, the Schema.org-JSON-LD-and-microdata-as-partial-solutions acknowledgement with seven concrete gaps named (provenance, history, accountability, accessibility on non-web carriers, agent-directory discoverability, signing, workflow contracts), and the vendor-enclosure indictment.
- Founder-relinquishment paragraph added to "Where The Gathering stands": *"Tom is the major sponsor today, through Digital Domain Technologies. He wants someone else to be tomorrow."*

### 5. PDF pipeline: letter doctype now suppresses H2 page breaks

Festival pitch PDF tested two iterations of doctype and revealed a gap: the `insert-h2-page-breaks.js` preprocessor ran unconditionally for every doctype, including `letter` where continuous flow is wanted. Two-file fix:

- `scripts/bin/mx.pdf.sh` (hub orchestrator) sets `MX_PDF_H2_PAGE_BREAKS=false` when resolved doctype is `letter`; defaults to `true` for every other doctype so report, chapter, book, and document layouts continue to paginate between sections.
- `mx-reginald/audit/scripts/bin/mx.pdf.sh` (canonical render) gates the page-break script invocation on the env var.

Two production PDFs generated, both EAA Level 2 tagged (ISO 14289-1):

- `mx-outputs/pdf/the-gathering-festival-pitch.pdf` — 279 KB, letter doctype, Gathering letterhead, no TOC, no inter-section page breaks.
- `mx-outputs/pdf/the-gathering-canonical-sponsor.pdf` — 370 KB, letter doctype, Gathering letterhead, no TOC, no inter-section page breaks.

### 6. Tom-Doğu bio addition to canonical-sponsor.md

A new "Who runs The Gathering" section added between "The standing of the standard" and "What we ask of you", carrying full Tom + Doğu bios. The same bios remain in festival-pitch.md so the festival doc stands alone, but canonical-sponsor.md now carries them as the authoritative source for any context that needs to introduce the team.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 1 so far (mx-outputs PDFs); 1 pending hub commit |
| Hub files changed | 14 (13 modified + 1 deleted: sponsorship-pitch.md) |
| Lines added (hub) | +195 |
| Lines removed (hub) | −259 |
| Submodule commits | 1 (mx-outputs: 3 PDFs) |
| New PDFs | 3 (festival-pitch.pdf, canonical-sponsor.pdf, mozfest.pdf) |
| Pipeline scripts touched | 2 (hub orchestrator + canonical render) |
| Em-dashes / spaced hyphens left in touched files | 0 |
| £ figures left in business-plan.md or canonical-sponsor.md | 0 |
| Sponsor-facing taglines woven in | 5 |

---

## Decisions Made

- **sponsorship-pitch.md is retired.** canonical-sponsor.md is the single send-ready sponsor document going forward. Internal sources of truth: business-plan.md (commercial terms) and a confidential internal pricing note (the actual ranges). Outbound communications reference canonical-sponsor.md by name.
- **Business plan and canonical sponsor briefing carry no £ figures.** Tier names, structural facts, and audit-days allowances stay; specific pricing lives in the confidential pricing note. The plan and briefing now describe structure, not numbers, and can travel outside the repo safely.
- **Letter doctype suppresses H2 page breaks by default.** The page-break preprocessor is gated on doctype: every other doctype keeps the previous behaviour; letters render as continuous flow. Implemented as a single env var (`MX_PDF_H2_PAGE_BREAKS`) so future doctypes can opt in or out by name.
- **Manuscript links in the canonical sponsor briefing dropped.** Italic titles remain (*MX: The Handbook*, *MX: The Protocols*); the path-based link wrappers are gone so the document survives leaving the repo. Same principle to apply to any future sponsor-facing doc.

---

## Open Questions

- The four `tg-community` submodules pulled with no upstream changes, but they are pulled every step-commit. If a session goes without tg-community activity for several weeks, the pull adds noise without value. Worth a follow-up flag to skip the tg-community refresh when the last upstream activity is older than the previous step-commit; not blocking.
- The MozFest PDF still has a `the-gathering-mozfest.pdf` artefact from an earlier draft alongside `the-gathering-festival-pitch.pdf`. Both committed today. The `-mozfest.pdf` may be the older or pre-letter-doctype version; the festival pitch is the canonical artefact going forward. Worth confirming and deleting the duplicate.

---

## What Changed About Me

The humanizer skill caught one §0 ("Don't repeat") violation in canonical-sponsor.md that none of the mechanical scanners would have caught: a paragraph block in "What sponsorship is, and is not" restated points from two earlier sections. The rules-driven scanners (em-dash count, banned-vocab grep, forbidden-construct grep, heading-pattern grep) all returned clean; the duplication was visible only by reading the document end-to-end. Confirms the §0 rule's primacy in the writing-style guide: "Above every other rule in this guide, be vigilant for repetition." Pattern noted for future humanizer passes: after the mechanical checks pass, scan paragraph topics against earlier sections.

---

## Next Steps

- Confirm Dogu Abaris is happy to be named co-host on the festival pitch before submission to MozFest (deadline 24 May 2026, six days out).
- Confirm and delete the duplicate `the-gathering-mozfest.pdf` if it is a stale draft.
- Apply the canonical-sponsor.md humanizer pattern to messaging-ideas.md and the other Gathering docs that still inherit from the deleted sponsorship-pitch.md to make sure none retained orphan references.
- The "Why new standards" canonical block now lives in three pitches (festival, sponsorship, partnership). When the next outward-facing pitch is written, decide whether the block should be extracted into a `mx-canon/ssot/templates/` fragment that all pitches reference.

---

## Commit Log

| Hash | Description |
|------|-------------|
| dfdf23a | mx-outputs: Gathering sponsor + festival PDFs (3 files) |
| _pending_ | Hub: sponsorship-pitch.md retirement + fee stripping + festival pitch finalised + canonical sponsor briefing send-ready + PDF page-break gate; mx-outputs pointer bumped |
