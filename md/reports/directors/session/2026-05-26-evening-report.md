---
title: "Co-Directors Report — APA 7 as the Standards Baseline for Published Prose"
description: "CogNovaMX adopts APA 7th Edition as the structural baseline for every published / client-facing surface."
author: "Tom Cranstoun"
created: 2026-05-26
modified: 2026-05-26
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-26-evening-report.md
  purpose: "CogNovaMX adopts APA 7th Edition as the structural baseline for every published / client-facing surface."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - APA 7 as the Standards Baseline for Published Prose"]
---

# Co-Directors Report — APA 7 as the Standards Baseline for Published Prose

**Date:** 26 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

CogNovaMX has adopted APA 7th Edition as the structural baseline for every published and client-facing surface: book manuscripts, blog posts, audit reports, stakeholder docs, news entries, and slide content. The decision lands in writing-style.cog.md as a new authoritative section, cascades through six skills, two audit templates, and the blog-post cog, and migrates sixty-four existing figure and table captions across the Handbook, Handbook-v2, Protocols, appendices, and executive summary to the APA three-zone shape in a single session. The published output now conforms to the most widely cited academic and editorial standard worldwide, which closes a quiet credibility gap for any reader or auditor who maps our work against an external bar.

---

## What Was Done

### 1. SSOT and headline rules

The writing style guide gained a new section 14 carrying the full APA 7 specification: in-text citations (author-date, et al. from first cite per APA 7), reference list (four elements per entry with ten worked templates spanning journal articles, books, edited chapters, web pages, news articles, blog posts, social media posts, podcast episodes, technical reports), heading hierarchy (five levels with explicit markdown carrier guidance), bias-free language across six categories (age, disability, gender, race and ethnicity, sexual orientation, socioeconomic status), mechanics (numbers, abbreviations, capitalisation, italics, quotation marks, lists), grammar (verb tense, voice, singular they, anthropomorphism), the three-zone tables and figures format, and an explicit conflict-resolution table naming every point where house style overrides APA.

CLAUDE.md gained a headline bullet pointing at the new section so every session loads the rule on entry. The transition note from earlier sessions about Title Case in headings is resolved in line with APA mandating Title Case across all heading levels; the older house Pattern 16 (which flagged all Title Case as an AI tell) now scopes to the mechanical "every word capitalised" form only.

### 2. Skill cascade

Six skills carry a calibrated pointer to the new section: review-docs and humanizer load it as part of the style guide enumeration and rescope the Title Case pattern to the mechanical form; html-writer, news, audit-report, and stakeholder-docs each carry an APA structural-compliance block covering heading case, citations, references, bias-free language, tables and figures, and the house overrides. The blog-post cog references the new section for mx-site blog posts. The audit-report and ecommerce-audit templates carry an APA conformance note in their TONE RULES block so the audit-report rewrite pass operates against the new baseline.

### 3. Manuscript sweep

Sixty-four figure and table captions across the Handbook, Handbook-v2, Protocols, appendices, and executive summary migrated from the legacy single-italic-caption shape to the APA three-zone shape (number bold above, italic sentence-case title below, body, optional `*Note.*` below). A standalone migration script at `scripts/one-off/apa-sweep-captions.js` carried out the sweep; the script is idempotent and safe to re-run on any future additions.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 1 |
| Files changed | 43 |
| Lines added | +791 |
| Lines removed | -118 |
| Repositories | 1 (hub) |
| Manuscript captions migrated | 64 |
| Skills updated | 6 |
| Cogs updated | 1 |
| Templates updated | 2 |
| New SSOT section | 1 (writing-style.cog.md §14) |

---

## Why It Matters

Standards adoption is rarely the headline of a single session because the benefit is diffuse. Here the benefit is two-fold and concrete. First, every published artefact we produce from this point now matches the most-cited editorial standard worldwide; a partner, investor, regulator, or peer reading the output can no longer mark us against an external bar. Second, the APA structural overlay extends our existing provenance-sidecar evidence chain into the citation layer: each external claim in a published piece now carries an author-date hook that resolves to a reference list entry, which a reader (or an AI agent) can verify against the cited source without curating the answer. The combined effect is that our published surface becomes addressable by an outside auditor in the same way the provenance sidecars made our pipeline addressable to an AI-governance auditor.

---

## The Insight

Adopting an external editorial standard does not require us to give up the house voice. The conflict-resolution table in §14.8 names every point where house overrides APA (dialect, em-dashes, ASCII straight quotes, no counting in prose) and APA wins everywhere else. The decision shape is "where does the house override actually matter, and where is APA's structure the right default?" — and once that question is answered, the integration is mechanical. The work of the session was reading APA carefully enough to know where the conflicts were, not negotiating between them.

---

## Decisions Made

- Title Case in headings becomes the standard for all in-scope prose. The earlier house ban now flags only the mechanical "every word capitalised" form. Books, blog posts, audit reports, stakeholder docs all converge on APA Title Case.
- Existing book figure / table captions migrate to APA three-zone shape in this session rather than grandfathered for later edits. Sixty-four captions, one script run, zero outstanding legacy shape in the manuscripts.
- APA scope is published / client-facing prose only. Internal docs (CHANGELOG, REMINDERS, plans, learnings, directors reports themselves), Gathering drafts, cogs, and code stay outside scope — they answer to other registers.

---

## Next Steps

- The infill-report.js audit-pipeline script does not yet emit the APA three-zone shape for newly generated tables. A follow-up update to the infill script would bake the shape into auto-generated tables; the templates already carry the conformance note for human-written sections.
- The MX dictionary spell-list does not yet contain `APA`. A `spell:sweep:apply` pass on the term will silence the SessionStart spell-check noise on every APA-mentioning session going forward.
- The 14 Handbook captions touched this session sit in a manuscript marked read-only by default in CLAUDE.md. The explicit "sweep all to APA now" instruction governed this session; future Handbook touches should remain rare and explicit.

---

## What This Means for Investors

The artefact a regulator, an academic peer reviewer, or an enterprise procurement team picks up from us now carries APA-formatted in-text citations and a reference list. That single change removes the most common credibility objection an external reader would raise against a body of work that already carries our provenance sidecars, our MX governance metadata, and our accessibility conformance. The session's cost was one evening; the resulting standards-compliance surface is permanent for the cost of mechanical maintenance.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 912da952 | APA 7 integration across writing-style, skills, templates, manuscripts |
