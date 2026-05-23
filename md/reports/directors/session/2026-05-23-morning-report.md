---
title: "Co-Directors Report — Multi-Zone Prose Lands in the Cog Spec"
description: "Sponsor-pitch consolidation drove a small but structural extension to the cog spec: a single prose block may now carry multiple addressable sub-sections. Lockstepped across canon, served, and Gathering draft."
author: "Tom Cranstoun"
created: 2026-05-23
modified: 2026-05-23
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-23-morning-report.md
---

# Co-Directors Report — Multi-Zone Prose Lands in the Cog Spec

**Date:** 23 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

An operational tidy of the sponsor-pitch documents produced a small but structural extension to the cog spec: a single prose block may now carry multiple addressable sub-sections, marked by HTML comments that any markdown-aware reader can honour or ignore. One source file now produces the briefing-only PDF and the full cover-plus-briefing PDF. The pattern is now formalised in lockstep across the canon spec, the served public spec, the Gathering draft, Appendix M, and Protocols chapter 20, so both the artefact and the pattern survive past this session.

---

## What Was Done

### 1. Sponsor-pitch consolidation, one source two outputs

Two separate sponsor documents that had grown in parallel (`canonical-sponsor.md`, the formal briefing; `business-sponsor-pitch.md`, the peer-agency outbound cover) were folded into one source. The file was then renamed to `sponsor-pitch.cog.md` to reflect that it now carries more than one content zone. From that single source, two PDF targets render: the briefing-only attachment (cover stripped, 335K) and the full outbound pitch (cover plus briefing, 446K). Both rendered to the previously published filenames so external links continue to resolve. Both pass EAA Level 2 conformance.

### 2. Cog spec extension, named sub-sections within the prose block

The cog spec previously said the prose block was singular and implicit. That remains true. What is new is a convention for naming addressable sub-sections inside it, using HTML-comment markers of the form `<!-- begin: <id> --> ... <!-- end: <id> -->`. Readers and renderers that understand the convention may include, exclude, or extract a sub-section by id; readers that do not understand it render the contained content as part of the body. The pattern degrades gracefully on every existing markdown tool. Conformance: sub-sections do not nest; each id appears at most once per cog; the prose block remains the single implicit block (sub-sections do not appear in `blocks`).

### 3. Spec edit lockstepped across five surfaces

The canon spec at `mx-canon/mx-the-gathering/specifications/cog-unified-spec.cog.md`, the public served copy at `mx-outputs/mx-site/drafts/cog-spec.v1.md`, the Gathering draft at `mx-shared-gathering/draft-cogs.md`, Appendix M (`appendix-m-index-of-metadata.md`), and Protocols chapter 20 (`chapter-20-cogs-and-reginald.md`) all carry the same definition, the same conformance rules, and worked examples appropriate to each audience. The Gathering draft and the served spec use the formal MUST / MAY conformance language; the manuscripts use narrative prose with generic motivating examples (sponsor pitch, product page with internal pricing memo, policy document with versioned changelog) so the chapter reads as architectural exposition rather than as repo annotation.

### 4. Renderer wiring for the new pattern

A small section-strip preprocessor was added at `scripts/lib/pdf/strip-section.cjs`. The unified PDF orchestrator (`scripts/bin/mx.pdf.sh`) gained two new flags: `--strip-section <id>` removes a sub-section before render, and `--all-targets` iterates every entry in a cog's `mx.generate.targets[]` array, recursing once per target. The dispatcher (`scripts/lib/pdf/dispatch.cjs`) and frontmatter reader (`scripts/lib/pdf/read-frontmatter.cjs`) were extended to surface the new shape. The single existing `output:` path remains supported, so no other cogs needed migration.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (this session) | 3 (1 hub, 1 mx-outputs, 1 mx-shared-gathering) |
| Repositories touched | 3 |
| Surfaces lockstepped (spec edit) | 5 (canon spec, served spec, Gathering draft, Appendix M, Protocols ch20) |
| Source files consolidated | 2 → 1 (sponsor-pitch.cog.md) |
| PDF artefacts produced from one source | 2 (briefing-only 335K, full pitch 446K) |
| Renderer flags added | 2 (`--strip-section`, `--all-targets`) |
| Cog registry total | 222 cogs (sponsor-pitch newly registered) |

---

## Why It Matters

The spec extension is operationally invisible until you need it, then it removes a class of duplication the file system would otherwise force. Any cog whose body serves two audiences (a public summary and an internal annex; a covering letter and a formal briefing; a customer-facing pricing page and an internal pricing memo) can now sit in one source with one set of edits. The duplication problem this solves shows up everywhere prose is reused with small differences; the spec extension means we never need a stack of near-identical files diverging slowly. It also means the cog format covers a class of writing patterns Word, Google Docs, and Notion address with comments and suggested edits; we now address it with structure that survives every transport and every reader.

---

## The Insight

A small operational cleanup, executed end to end, produces structural improvement that an explicit spec-design session would not have produced as cleanly. The named sub-section pattern was authored to solve a specific consolidation problem (sponsor cover and briefing), then generalised once we saw it work. That order matters: the spec edit lands with a worked reference implementation already deployed, with PDFs already shipping, with conformance rules already tested against a real document. A spec written first and implemented later carries hypothetical conformance rules; this one carries verified ones.

---

## Decisions Made

- Multi-zone prose lockstepped to full coverage (canon, served, Gathering draft, Appendix M, Protocols ch20) rather than canon-only with a follow-up. The cost of the wider edit was small; the cost of letting the public spec drift from canon would have been a credibility hit on the next public read.
- Renamed `canonical-sponsor.md` to `sponsor-pitch.cog.md`. The `canonical` adjective implied a single canonical artefact; the file now carries two, so the name was repurposed to name the cog by what it is (a sponsor pitch), not by which of its zones is the canonical attachment.
- Audit collateral in `mx-outputs/audit/2026-05-22/` and `mx-outputs/audit/2026-05-23/` left uncommitted. Out of session scope; flagged for separate handling.

---

## Open Questions

- The Gathering draft change needs a `/mx-gathering-submit` round-trip to be tagged for community review on Stream. Edited locally but not yet submitted. When does that batch go out?
- Pre-existing uncommitted hub work (mx-reginald/audit/* refactor, mx-vision folder deletion, reginald-vnext-prd.md edits, scripts/audit-pipeline.js, scripts/cogs/mx-audit.cog.md) sits in the tree from prior sessions. Needs its own commit pass before the next session writes on top of it.

---

## Next Steps

- Submit the Gathering draft change to Stream via `/mx-gathering-submit` so the multi-zone prose convention enters community review.
- Sweep the existing canon and outputs for other cogs that could benefit from multi-zone consolidation. Likely candidates: any doc with a cover-letter / attachment pattern, any product page with an internal pricing memo, any policy doc with a versioned annex.
- Sort out the pre-existing uncommitted hub work (audit refactor, mx-vision deletion, reginald-vnext-prd edits) in a dedicated commit session.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 27e9079 | mx-shared-gathering: draft-cogs: formalise named sub-sections within the prose block |
| 33633d5 | mx-outputs: Sponsor pitch consolidation: cog-spec sub-sections + regenerated PDFs |
| _pending_ | Hub: sponsor-pitch consolidation + multi-zone prose spec (lands in Step 3) |
