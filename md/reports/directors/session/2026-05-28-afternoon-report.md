---
title: "Co-Directors Report — Audit Lander + Manuscript Propagation Skill"
description: "Afternoon had two strands. (1) /audit/ lander added at mx-site root with KEY_PAGES_DIRS extension for discovery infrastructure. (2) /manuscript-propagate skill authored, then executed on this session: provenance v2 + inspector + WAF-fingerprint concepts propagated into three books, six appendices, and the DDT business plan at depth-tier-appropriate sizes."
author: "Tom Cranstoun"
created: 2026-05-28
modified: 2026-05-28
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-28-afternoon-report.md
---

# Co-Directors Report — Audit Lander Adds Third Entry-Point on mx-site

**Date:** 28 May 2026 — Afternoon
**Segment:** afternoon (since noon, continuous with the morning's deliverable polish strand)

---

## Summary

The audit narrative now has a top-level lander at `mx.allabout.network/audit/`, alongside the three audience-specific blog posts that landed in the morning. The lander routes engineers, clients, and auditors to the read that fits them, plus the PDF inspector and the explainer so any visitor can verify a deliverable on their own machine. The sync-blog-discovery script learned that landers live in extensible top-level folders, so the next folder we add will surface in `llms.txt` without a code edit.

---

## What Was Done

### 1. /audit/ lander at mx-site root

A new lander page at `mx-outputs/mx-site/audit/index.html` opens the audit story for visitors who arrive from search, social, or a peer link rather than via the services page. It carries three audience cards (engineers, clients, auditors) pointing at the morning's three blog posts, and two verification cards pointing at the PDF inspector at `/tools/pdf-inspector.html` and the explainer at `/learn/mx-for-pdfs.html`. Schema.org `@type: Service` describes the lander to machines; `BreadcrumbList` and `WebPage` complete the standard graph. The lander appears in the main `sitemap.xml`, in the curated `## Key pages` section of `llms.txt`, and in `llms-full.txt` for agents that read the full corpus.

### 2. Discovery infrastructure: KEY_PAGES_DIRS extension

The `sync-blog-discovery` script holds a static list of top-level lander folders that surface in the `## Key pages` section of `llms.txt`. The list was `books, learn, services, about`; we extended it to include `audit`. The mechanism is general enough that the next top-level lander folder we add to mx-site only needs one entry added to the array. The script then writes the lander's title from its `<title>` tag into the curated key-pages block.

### 3. Small morning tidies that did not catch in the segment

Three small follow-ups landed this segment that the morning did not catch. The `LEARNINGS.md` prose rule now requires timeless wording and artefact-name file slugs in any public-web entry that documents a rule; the UBERCOG essential-commands table registers `npm run test:pdf-mx-compatible` next to `npm run test:pdf-eaa` so the new PDF gate is one keystroke away; and the `mx-audit` cog now carries `mx.purpose`, `mx.stability`, and `mx.x-mx-contextProvides` so it passes the now-hard Gate 10 mx-validator check.

### 4. /manuscript-propagate skill authored

A new skill at `.claude/skills/manuscript-propagate/skill.md` teaches an agent how to propagate substantive session work into the three published books and the topic-routed appendices at the depth each surface carries. The skill body documents the depth rule (lightest on free book, main on handbook v2, deepest in protocols), the 22 topic-routed appendices and which concepts route to each, anchor-point conventions per book, the Tom-voice patterns from `writing-style.md` §9 (vignette openers, punchline + expansion, named brands / dates / prices, bold paragraph leads, concrete closers), the no-repeat rule from §0, the timeless-manuscript rule from §3, and the forbidden vocabulary catalogue. A Phase 0 scope check broadens the surface beyond manuscripts to include canon business plans, position papers, action-cogs, info-cogs, and hub-level docs; scaffolds awaiting trigger (the DDT one-pager, attestation explainer, FAQ, pitch deck) are explicitly excluded from speculative propagation. The Gathering vs CogNovaMX audience-split rule is documented so the open-standard surfaces stay vendor-neutral while CogNovaMX surfaces carry regime-specific enumerations.

### 5. First propagation pass: provenance v2 + inspector + WAF fingerprint across the canon

The skill was run on this session's work. Nine inserts landed across the manuscripts and the DDT business plan. The free book chapter-00 gained one pull-quote on the verify-in-browser inspector. Handbook v2 ch12 absorbed a paragraph on the `parties[]` role taxonomy and per-step `jurisdictionalEvidence` inside the existing "Provenance Fields Travel Across Carriers" section. Protocols ch20 gained five new paragraphs covering the schema declarations, the role enum with regulatory citations, the thirty-regime registry, per-step jurisdictional tagging, and the flat-surface compatibility shape. Appendix M (the canonical metadata index) gained a "Multi-party, regime-tagged provenance fields" subsection with five field-index entries (`parties`, `frameworks`, `runRevision`, `lastWriteAt`, `jurisdictionalEvidence`), the controlled role enum, and two worked YAML examples. Appendix T (the field dictionary) gained a "Provenance Chain" subsection with five field-dictionary rows. Appendix V (the Reginald vNext record types) gained a new §4 "The provenance record" with required fields, a worked sample, and reasoning; the composition prose was updated for five record types. Appendix R (testing agent comprehension) gained a new H2 "Self-testing PDFs in the browser" framing the inspector as a continuous publisher self-test mirroring the HEAD self-test pattern. Appendix I (the pipeline failure case study) gained a second case study "The 44-False-Positive WAF Cluster" with symptom, root cause, fix, validation, and narrow + broad lessons. The DDT/CogNovaMX business plan gained two bullets after §"Why REGINALD matters for the machine economy": the thirty-regime evidence position (one chain answers every regime in its clause vocabulary; cost moat for documentation reuse) and the browser-side verifier (public, free, no-account inspection forecloses the trust objection). The Gathering business plan was reviewed and left unchanged per the vendor-neutrality rule. Scaffolds stayed untouched per their own runbooks.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 7 |
| Files changed | 12 |
| Lines added | +319 |
| Lines removed | −15 |
| Repositories | 2 (hub + mx-outputs) |
| New canonical files | 1 (audit lander) |
| New top-level mx-site folders | 1 (`audit/`) |

---

## Why It Matters

The audit narrative was already in good shape after the morning — three blog posts, a banded scorecard, a findings sidecar, and an MX Compatible regression test. What was missing was an entry-point page a visitor lands on if they search for "MX audit" or arrive from a link in a pitch document. The blog grid is chronological; the services page lists everything we sell. Neither was the right surface for someone who wants the short version of "what is an MX audit and how do I verify it." `/audit/` fills that gap with one paragraph of framing, three audience-routed reads, and two tools that let the visitor verify our claims on their own machine.

---

## Open Questions

- Should the audit lander get a card in the main header navigation, or is the footer plus search discovery enough for now? The header is already at seven items; adding an eighth crosses a visual threshold on mobile. Leaving it out keeps the visitor count for `/audit/` honest as a discovery-led page rather than a navigation-fed one.
- Are there other "topic landers" that would serve search/social arrivals better than the current blog grid? `/provenance/`, `/certified-operator/` (currently inside `/services/`), and `/eaa/` are candidates if we see real demand from those keywords.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 3176978 (mx-outputs) | Add /audit/ lander linking the three audience-routed audit posts |
| 0eab5547 (hub) | Tidy: hook-driven LEARNINGS blank-line trim + routing-registry timestamp refresh |
| eb236815 (hub) | UBERCOG: register npm run test:pdf-mx-compatible alongside test:pdf-eaa |
| 66bda54b (hub) | LEARNINGS: timeless prose + artefact-name file slugs for public-web writing |
| 3f45f074 (hub) | Bump mx-outputs: pick up directors report 1.3 final hash backfill |
| 14b50462 (hub) | scripts/cogs/mx-audit.cog.md: add mx.purpose, mx.stability, mx.x-mx-contextProvides for Gate 10 |
| 888fd291 (hub) | Manuscripts: document provenance v2 schema in published chapters |
| 4b5a937d (hub) | Manuscripts: round-out provenance v2 across appendices M, R, T, V |
| 99aee86f (hub) | mx-validator: skip /datalake/manuscripts/ from operational field gate |
| ca6d56a4 (hub) | Appendix I: add WAF false-positive cluster case study |
| 2bec6925 (hub) | Manuscript propagation: voice fixes + DDT business plan + skill scope widening |
| 6ca3127c (hub) | Business plan frontmatter: add mx.purpose, mx.stability, mx.x-mx-contextProvides for Gate 10 |
| _pending_ (mx-outputs) | This report v1.1 |
