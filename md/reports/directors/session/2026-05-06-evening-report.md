---
title: "Co-Directors Report — Pitch Deck and Reginald Manuscript Uplift"
description: "Implemented the BMV HTML pitch deck, published the web-is-just-the-start blog post, and surfaced Reginald as an equal pillar to MX across the free-book and Protocols manuscripts."
author: "Tom Cranstoun"
created: 2026-05-06
modified: 2026-05-06
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-06-evening-report.md
---

# Co-Directors Report — Pitch Deck and Reginald Manuscript Uplift

**Date:** 6 May 2026 — Evening
**Segment:** Evening (since 5pm)

---

## Summary

This session implemented the MX pitch deck for Bare Metal Ventures in HTML from a Claude Design handoff bundle (14 slides, cream/ink/signal-red, custom deck-stage web component), updated the PPTX to v2.2, and published a new blog post — "The web is just the start" — covering what AI agents need from documents beyond good web UX. The session also updated the MX Gathering Notes draft guide (eleventh note: MX vs GEO scope), updated the drafts index, and then undertook a manuscript uplift: Reginald is now positioned as an equal pillar to MX across the free-book introduction, the Protocols introduction chapter, orientation chapter, Chapter 20, and two appendices (U and J). Wrong chapter-number references in Appendix U were also corrected.

---

## What Was Done

### 1. HTML Pitch Deck Implementation

Fetched a Claude Design handoff bundle via the Reginald API endpoint. The bundle contained `MX Pitch.html` (14 slides, 79KB), `deck-stage.js` (the web component engine, 70KB), and a full chat transcript showing the design iteration. The design had been iterated through slide layout fixes, content revisions (slide 7 "Why Now" rewrite, slide 8 traction mosaic trimmed from 11 to 5 cards, slide 9 competitive matrix), and speaker notes in JSON. The implementation placed the files verbatim into `mx-outputs/html/presentations/` with a `.mx.yaml.md` folder metadata file.

**Deck contents:** Cover (red field), The Problem (4 enterprise AI failures), What's a Cog (identity/provenance/conformance), Cogs Provenance (YAML frontmatter with syntax highlighting), The Insight (credential list: Nissan-Renault, EE, X/Twitter, BBC, Ford, McLaren), What MX Is (3-card layout), How It Works (Publisher/Registry/Reader diagram), Where MX Fits (Bare Metal portfolio stack), Why Now (3 forces + 700% Adobe stat), Traction (5-card mosaic), Competitive Position (2×2 matrix + table), Local Reginald Machine (pricing + org table), The Ask (entity, milestone, multiples, use of funds), Connect (closing red slide).

### 2. BMV Pitch Deck v2.2 (PPTX)

The PPTX markdown and generated PPTX were updated to v2.2, renaming "MX OS" to "MX" throughout and rewriting slide copy to match the HTML design language. A new `Reginald.pptx` deck was added for the REGINALD registry. The `MX-what-why-when.md` lightning talk presentation was also updated. The Reginald.pptx was also read from Downloads to extract the slide content for use as context when writing the blog post.

### 3. Blog Post: "The web is just the start"

A new blog post was written and published to `mx-outputs/mx-site/blog/web-is-just-the-start.html`. The post argues that Google's web.dev AI agent UX guide is a useful signal but the challenge is at the document level — not just websites. Contracts, policies, specs, and handbooks are now consumed by AI agents, and none of them answer the ten questions a machine needs from a document. The post introduces COGs (Community Owned Governance Systems) as the infrastructure for documents that declare identity, state, provenance, conformance, permissions, and safe failure mode. The post was written as a draft, reviewed (incorporating the ten wants from the "What a Newborn LLM Wants From a COG" post), and promoted to published in the same session. Key editorial decision: remove any cross-reference to other draft posts to avoid dead links if promotion is not simultaneous.

### 4. Drafts and Gathering Notes Updates

The `mx-gathering-notes-guide.html` draft was updated to reflect the eleventh MX draft note — `draft-mx-not-geo.md` — added to the mx-shared-gathering repo on 6 May 2026. The note defines MX scope vs GEO/AEO. The guide's TOC, reading order, intro, and body all updated; "ten" references changed to "eleven" throughout. The drafts index received a new card for `what-a-newborn-llm-wants-from-a-cog.html`. Both files also received compliance fixes: keywords meta removed, button type added, em-dash fixed, canonical/OG/Twitter/JSON-LD added to the gathering notes guide.

### 5. Reginald Manuscript Uplift

The free-book chapter (`chapter-00-free.md`) and five Protocols files were updated to surface Reginald as an equal pillar to MX — not a final-chapter appendage. The new framing, seeded in the free-book first and then propagated into the Protocols manuscripts: "MX and Reginald are the two pillars. MX makes content machine-readable. Reginald makes it machine-trustworthy."

**Free-book (`chapter-00-free.md` v2.4):** New section "The trust layer: Reginald" inserted between "What MX-ready looks like" and "Where to go from here", picking up Stage 5 (Confidence) from the machine journey table. Covers the authenticity crisis, the human/AI/machine attestation point, Reginald's narrow claim ("this is what the owner published, unaltered"), and the two-pillar closing statement. Handbook and Protocols chapter table introductions updated to flag both pillars.

**Protocols Chapter 00 (`chapter-00-protocols.md`):** New two-pillar paragraph inserted after the MX/GEO distinction; cogs section upgraded from "Registration is optional" to equal-pillar language with human/AI/machine attestation.

**Protocols Chapter 01 (`chapter-01-what-you-will-learn.md` v1.1):** Two-pillar sentence added to Introduction; new paragraph covering Chapters 14–22 added to the chapter guide (chapter guide previously stopped at 13); "Understand the trust layer" bullet added to "What You'll Be Able to Do".

**Protocols Chapter 20 (`chapter-20-cogs-and-reginald.md` v1.2):** Opening paragraph strengthened from "Reginald does it for trust and discovery" to the explicit two-pillar statement with human/AI/machine attestation.

**Appendix U:** Stale chapter numbers corrected (line 29: "Chapter 19" → "Chapter 20"; line 113: "Chapter 20 — The Fields and the Standards" → "Chapter 21"); Reginald reframed from "one implementation of this open format" to "the machine-trustworthiness pillar"; narrow attestation section expanded to name the four attestation answers.

**Appendix J:** Two wrong "Protocols Chapter 12" references corrected to "Protocols Chapter 20"; MCP adoption statistic reframed to validate both pillars.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (mx-outputs) | 4 |
| Commits (hub) | pending |
| Files changed | ~21 |
| Lines added | +4,770 |
| Lines removed | −204 |
| Repositories | 2 |
| New HTML deck slides | 14 |
| New PPTX files | 1 (Reginald.pptx) |
| New blog posts published | 1 (web-is-just-the-start) |
| Draft posts updated | 2 (index, mx-gathering-notes-guide) |
| Manuscript files updated | 6 (free-book ch00, Protocols ch00/ch01/ch20, appendix-j, appendix-u) |

---

## Why It Matters

The HTML pitch deck is the primary investor-facing artefact for the Bare Metal Ventures meeting. Having it live in the repo — versioned, printable to PDF via browser, and presentable from any browser without dependencies — means it travels with the project and cannot be lost in email threads or Canva exports.

The manuscript uplift matters because the free-book is the primary top-of-funnel document for MX. Until this session it introduced Reginald only as a chapter listing entry at Chapter 12 / Chapter 20. Readers encountering MX for the first time had no reason to understand that Reginald is equal in importance — not a tool bolted onto the web layer, but the provenance layer for every document any machine might encounter. The two-pillar framing ("MX makes content machine-readable; Reginald makes it machine-trustworthy") is now in the introduction, in the Protocols orientation chapter, and in Chapter 20's opening. The wrong chapter-number references in Appendix U (which would have sent readers to the wrong chapter) are also fixed.

---

## Decisions Made

- HTML pitch deck placed in `mx-outputs/html/presentations/` (consistent with `md/presentations/` and `pptx/presentations/` patterns)
- File named `mx-pitch-bmv-2026.html` to match naming convention of `bmv-pitch-2026.pptx`
- `deck-stage.js` co-located with the HTML (relative path reference; no CDN dependency)
- Session-specific bash allowlist entries reverted from `settings.local.json` before committing

---

## Next Steps

- Verify the HTML pitch deck in a browser: all 14 slides render, keyboard navigation works, print-to-PDF produces clean output
- Consider whether the HTML deck should be served at a URL (e.g. via Cloudflare Pages or a signed link for the meeting)
- Promote `what-a-newborn-llm-wants-from-a-cog.html` from draft to published (companion post to the web-is-just-the-start post)
- Update the mx-shared-gathering README to list draft-mx-not-geo.md in the table
- Rebuild free-book PDF to pick up the new Reginald section
- Propagate the two-pillar framing to remaining Protocols chapters (medium-priority: ch13, ch14, ch19, ch22)

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 6c7f461 | mx-outputs | Add HTML pitch deck: MX Pitch for Bare Metal Ventures (14 slides) |
| 2c10792 | mx-outputs | Update BMV pitch deck to v2.2; add Reginald.pptx; update MX-what-why-when |
| 4961dd5 | mx-outputs | Publish web-is-just-the-start blog post; update blog index and sitemaps |
| 94d123b | mx-outputs | Update drafts: add newborn-LLM card, update gathering guide for 11th draft |
| 951884d6 | hub | Bump mx-outputs: HTML pitch deck, BMV v2.2, Reginald.pptx, evening report |
| c00e4bac | hub | Update generate-pptx.mjs: improved layout and slide generation |
| 2a828c41 | hub | Rewrite BMV pitch brief to v2.2; add businesses/me/ with personal assets |
| e804b969 | hub | Commit session docs: CHANGELOG v1.83, LEARNINGS Design API rule, REMINDERS BMV deck item |
| f3aa5fcd | hub | Bump mx-outputs: blog post, drafts updates, evening report v1.1 |
| 6cba2c9d | hub | Commit session docs: CHANGELOG v1.84, LEARNINGS draft-link + rm rules, REMINDERS two new items |
| _pending_ | mx-outputs | Update evening report to v1.2: Reginald manuscript uplift |
| _pending_ | hub | Reginald two-pillar messaging: free-book, Protocols ch00/01/20, appendix-j, appendix-u |
| _pending_ | hub | Session docs: CHANGELOG v1.85, REMINDERS update |
