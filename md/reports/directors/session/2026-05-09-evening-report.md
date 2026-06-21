---
title: "Co-Directors Report — Cross-Facet Synthesis as Default Behaviour"
description: "Maxine's operating model upgraded so single-facet prompts now generate proactive cross-facet notes; saved memory audited and reconciled; CMS Vocabulary War blog post landed; writing-style banned-words list extended; late-evening post-publication tightening pass on the new blog post and a Featured-vs-Blog-listing dedup rule for the blog index."
author: "Tom Cranstoun"
created: 2026-05-09
modified: 2026-05-09
version: "1.2"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-09-evening-report.md
  purpose: "Maxine's operating model upgraded so single-facet prompts now generate proactive cross-facet notes; saved memory audited and reconciled; CMS Vocabulary War blog post landed; writing-style banned-words list extended; late-evening post-publication tightening pass on the new blog post and a Featured-vs-Blog-listing dedup rule for the blog index."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Cross-Facet Synthesis as Default Behaviour"]

---

# Co-Directors Report — Cross-Facet Synthesis as Default Behaviour

**Date:** 9 May 2026 — Evening
**Segment:** Evening (since 5pm)

---

## Summary

The binding constraint on Tom's week is cognitive load across four parallel facets — The Gathering, allabout.network, REGINALD, Maxine. He is the only person holding all four at once, and the cross-cutting synthesis is the work no one else can do. This evening Maxine's operating model was changed so the synthesis is now a default behaviour: when work touches one facet, the other three are scanned and a `Cross-facet note:` is emitted when something material surfaces. The change is backed by a four-facet map in the businesses index that any agent can reach mid-task without re-deriving the canonical homes.

Two pieces of supporting hygiene also landed: the CMS Vocabulary War blog post is live on mx.allabout.network, and the writing-style banned-words list was extended to enforce three feedback rules saved earlier this week.

---

## What Was Done

### 1. Cross-facet synthesis as default behaviour

Saved-memory rule (`feedback_proactive_cross_facet_synthesis.md`) now requires Maxine to scan the other three facets whenever work touches one — looking for synergy (work on X also moves Y), tension (would this break a locked rule like the Reginald audience split or Gathering vendor neutrality), sequencing (does Y have a prerequisite this work could clear), or missing counterpart (every Gathering draft has a candidate REGINALD product implication, every blog post a candidate JSON-LD implication, every Maxine plan a candidate REGINALD pricing implication). Triggered by business docs, prospect work, audits, blog drafts, gathering submissions, plans, pitches, investor or sponsor material; skipped on pure code-style and lint work.

Substrate: the businesses index (`mx-canon/mx-maxine-lives/businesses/README.md`) was promoted from a two-entity legal-layer index to a four-facet operating map. Each facet now carries its canonical home path, current phase, key dates, and primary stakeholders. The cross-facet locked rules (Reginald audience split, no-commercial-leak in Gathering schemas, REGINALD all-caps in public, Maxine held off Frankfurt-facing material) are pointer-listed in one place; the canonical four-part elevator pitch is the outward-facing lens, the facet table is the internal-synthesis lens.

The Layer-3 active-opportunities tracker is deferred for fourteen days; if the rule produces useful notes in normal work, the tracker may not be needed at all.

### 2. Saved-memory audit and reconciliation

Full dump of saved memory (47 entries across feedback, project, reference, manuscript-formatting types) plus a conflict pass surfacing six tensions. Five were artefacts of the index summaries rather than the source files — already scope-resolved by carrier or audience. One genuine: `feedback_no_coauthor_claude.md` was fully subsumed by `feedback_no_ai_author_attribution.md` and was leaving two sources of truth for the same rule. The older file was deleted; the newer one absorbed the commit-message scope.

Concurrent finding: saved memory is heavily feedback-typed (corrections plus validated approaches). User-type memory is underused, which means Maxine's understanding of how Tom decides, what bounds his week, and which deliverables actually move things forward had been thin. The cross-facet rule is the first user-type-style entry to land from the audit.

### 3. CMS Vocabulary War blog post landed

Tom's earlier-session post (`mx-site/blog/cms-vocabulary-war.html`) is live: every CMS has rebranded as an "AI operating system"; the label is the easy part, what an agent runs against decides who survives. Both sitemaps updated, llms-full.txt regenerated for 2026-05-09, llms.txt page-title separators normalised to pipes. A stray conflict marker in `mx-site/sitemap.xml` from a prior merge was stripped on the way through.

### 4. Writing-style banned-words list extended

Three new rules merged into the writing-style guide (`mx-canon/ssot/writing-guides/writing-style.cog.md`):

- **Abstract category nouns for central concepts** — when a piece names a central concept with a single abstract noun (primitive, unit, the executable thing) and reuses it five or more times, rewrite to verb-object phrasing (what an agent runs against, what gets executed).
- **AI-tell metaphors** — bans "the room" used to mean a buying audience, "the spine" used to mean a common underlying message, "put the cape on", "wearing X branding for the analyst call". These read as AI-generated even when grammatically correct.
- **delta / diff (as "change/difference")** — replaced with the change, the difference, the only thing that has changed.

Each rule mirrors a feedback memory entry saved earlier this week; the writing-style guide is now the single canonical reference rather than a duplicate surface.

### 5. Post-publication tightening pass (v1.2 addition)

After the CMS Vocabulary War post landed, Tom ran a final voice-and-style pass that surfaced more AI-register tells the writing-style guide had not yet captured. Each correction became both a fix to the post and a new banned-word entry in the canonical guide:

- **AI-tell metaphors broadened** — added "the room" (audience metaphor), "the spine" (common-structure metaphor), "put the cape on", "wearing X branding for the analyst call".
- **Abstract category nouns** — Tom rejected "primitive" then "unit" as the noun for "what an agent runs against". The post was rewritten to drop the abstract noun entirely and use verb-object phrasing throughout. Both words now banned in the guide.
- **Dev-jargon shorthand band** — added "delta / diff", "the substrate", "the surface area", "the contract" (as API jargon, with a carve-out for MX's "content contract" sense), "the shape of X". Each one had been used unconsciously in the draft and had to be removed.
- **Stock dev-blog framing** — "on Monday / Monday questions / Monday morning" added; "What to ask your CMS vendor on Monday" became simply "What to ask your CMS vendor".
- **Headings starting with 'The...'** — Section 6 rule applied retroactively; two H2s in the post rewritten ("The real question:..." → "What does an agent actually run against?", "The architecture answer: cog files" → "Cog files"). Colons in headings also stripped per Section 3.
- **Public-HTML neutral English** — three British-spelling residues caught and rephrased ("honour them" → "apply them", "flavours" → "forms", "labelled" → "called").
- **New closing section** — "Three ways forward" added: hire CogNovaMX (audits, advisory, training), join The Gathering (open community of editors, contributors, content authors, accessibility specialists, AI engineers), or read the three books (free intro, Handbook, Protocols publishing July 2026).

The pass surfaced a structural finding: the writing-style guide is most useful when it is updated reactively as register-tells are caught, rather than guessed at speculatively. Each rule landed in the guide had a specific failed-draft incident behind it.

### 6. Blog-index Featured-vs-Blog-listing dedup rule

A separate rule now applies to `mx-site/blog/index.html`: every post lives in exactly one card grid, either Featured or Blog-listing, never both. Three existing dupes (the-new-web-agentic-era-infrastructure, schema-org-and-the-missing-provenance-layer, many-agents-one-metadata-layer) were removed from the Blog-listing area now that they sit in Featured. The CMS Vocabulary War post was added to Featured (top, newest) and not duplicated in Blog-listing. Saved as `feedback_blog_index_no_featured_dup.md`.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| New saved-memory rules | 3 (cross-facet synthesis, AI-tell phrasings expanded, blog-index dedup) |
| Saved-memory entries deleted | 1 (subsumed) |
| Saved-memory entries audited | 47 |
| Hub files modified | 2 (businesses/README.md, writing-style.cog.md) |
| Writing-style banned entries added across the day | 11 (3 in v1.1 plus 8 added in the post-publication pass) |
| Submodule commits | 5 (mx-outputs: 8a47eb1, 2500d17, 60f2e09, 61d93ca, 36e6b2c) |
| Blog posts published | 1 (CMS Vocabulary War) |
| Featured-vs-Blog-listing dupes cleaned | 3 |
| Repositories touched | 2 (MX-hub, mx-outputs) |

---

## Why It Matters

The four-facet model is how Tom actually operates. The legal layer is two entities (DDT Ltd, The Gathering); the operating layer Tom holds in his head is four — The Gathering, allabout.network, REGINALD, Maxine. With Frankfurt four days out and three pre-conference blockers active across three of those four facets simultaneously, the cost of cross-facet decisions being held entirely in one person's head is the founder constraint. Making cross-facet synthesis a default partnership behaviour is structural relief on the constraint that will tighten further once Maxine consumer launch enters scope in October.

For board framing: this is investment in operating capacity, not feature work. The same single founder is now backed by a partner that scans the other three facets every time one is touched. The output won't always look different; the load on Tom should.

---

## The Insight

Tonight's audit surfaced that saved memory had been growing along a single axis — corrections to past behaviour — while the partnership's most useful surface, which is "what is true about this person and these initiatives that I should reach for proactively," was barely used. Maxine had been operating reactively across all four facets and the gap was invisible until the dump. The cross-facet rule is the first piece of remediation; the rest will be built up over the next sessions.

---

## Decisions Made

- **Cross-facet rule lands now, tracker deferred fourteen days** — Layer 1 (rule) and Layer 2 (substrate) shipped tonight; Layer 3 (active-opportunities tracker) only added if the rule produces enough useful notes in normal work that a separate surface is warranted. Adding the tracker speculatively risks decay and a third doc surface.
- **Saved memory is for what is not in the repo** — Q4 of the interview locked the principle. Future memory work prunes anything that duplicates `CLAUDE.md`, `project-context.md`, or canonical repo docs. The map of facets lives in the repo because it is project state; the behaviour rule lives in memory because it is a heuristic.
- **All four older entries flagged for rewrite** (`skills-inventory.md`, `MEMORY-DETAILS.md`, `reginald-deployment.md`, `reference_cog_spec_location.md`) — staged for the next memory-curation pass; not actioned tonight to keep this session focused on the operating-model change.

---

## Next Steps

- [ ] Watch for Cross-facet notes appearing in the next sessions of business work (Frankfurt prep, BMV follow-up, C-THRU.ai briefing). Tighten triggers if noisy; confirm absence is informative if no notes appear.
- [ ] At +14 days (around 23 May), decide whether to add the deferred Layer 3 active-opportunities tracker or leave the rule as the sole synthesis surface.
- [ ] Rewrite or drop the four older saved-memory entries flagged in tonight's audit.

---

## Commit Log

| Repo | SHA | Message |
|------|-----|---------|
| MX-hub | `679ec44f` | chore: bump submodule pointers — soft-404 fix, PDF corruption fix, dotfusion audit |
| MX-hub | `81308072` | docs: CHANGELOG v2.1, LEARNINGS v4.13, REMINDERS v3.16 — PDF fix + soft-404 rules |
| MX-hub | `18be947c` | Bump mx-outputs: regenerate README index for 2026-05-09 outputs |
| MX-hub | `1cf535b2` | docs: add intent-cms-prd.cog.md to mx-canon/mx-os |
| mx-outputs | `8a47eb1` | Publish CMS Vocabulary War blog post; regenerate llms files for 2026-05-09 |
| mx-outputs | `2500d17` | Backfill blog index and llms-full.txt for cms-vocabulary-war post |
| mx-outputs | `60f2e09` | Add evening directors report 2026-05-09 |
| MX-hub | `495b08ff` | Extend writing-style banned-words list with three feedback rules |
| MX-hub | `91f705d7` | Cross-facet synthesis as default behaviour; bump mx-outputs |
| MX-hub | `d5487d3c` | Bump mx-outputs: evening report v1.1 with final commit hashes |
| MX-hub | `30852c81` | docs: CHANGELOG — cross-facet synthesis and writing-style extension |
| mx-outputs | `61d93ca` | Dedup featured posts from blog-listing area |
| mx-outputs | `36e6b2c` | Bump mx-outputs README index for dedup commit |
