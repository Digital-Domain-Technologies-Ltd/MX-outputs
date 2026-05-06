---
title: "Co-Directors Report — HTML Pitch Deck from Claude Design"
description: "Implemented the MX Bare Metal Ventures HTML pitch deck from a Claude Design handoff bundle, and updated the PPTX/markdown pitch to v2.2."
author: "Tom Cranstoun"
created: 2026-05-06
modified: 2026-05-06
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-06-evening-report.md
---

# Co-Directors Report — HTML Pitch Deck from Claude Design

**Date:** 6 May 2026 — Evening
**Segment:** Evening (since 5pm)

---

## Summary

This session implemented the MX pitch deck for Bare Metal Ventures in HTML from a Claude Design handoff bundle (14 slides, cream/ink/signal-red, custom deck-stage web component), updated the PPTX to v2.2, and published a new blog post — "The web is just the start" — covering what AI agents need from documents beyond good web UX. The session also read the Reginald.pptx investor deck for context, updated the MX Gathering Notes draft guide from ten to eleven notes (adding the new MX scope note on MX vs GEO), and updated the drafts index.

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

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (mx-outputs) | 4 |
| Commits (hub) | pending |
| Files changed | ~15 |
| Lines added | +4,724 |
| Lines removed | −183 |
| Repositories | 2 |
| New HTML deck slides | 14 |
| New PPTX files | 1 (Reginald.pptx) |
| New blog posts published | 1 (web-is-just-the-start) |
| Draft posts updated | 2 (index, mx-gathering-notes-guide) |

---

## Why It Matters

The HTML pitch deck is the primary investor-facing artefact for the Bare Metal Ventures meeting. Having it live in the repo — versioned, printable to PDF via browser, and presentable from any browser without dependencies — means it travels with the project and cannot be lost in email threads or Canva exports. The design was iterated in Claude Design and imported via the handoff API, establishing a repeatable workflow for future decks.

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
| _pending_ | hub | Bump mx-outputs: blog post, drafts updates, gathering guide 11th note |
