---
title: "Co-Directors Report — Practising What We Preach"
created: "2026-02-16"
version: "3.0"
author: Tom Cranstoun and Maxine

mx:
  segment: "morning"
  audience: stakeholders
  confidential: true
---

# Morning Session — 16 February 2026

## Summary

Two themes this morning: cleaning up language and cleaning up our own front door.

The language cleanup that started yesterday evening is complete. Both core MX metadata fields now speak business: `runbook` and `deliverable`. No AI jargon remains in the metadata layer. The agent-independence principle was formalised. Two submodules with accumulated changes were finally pushed.

Then the attention turned inward. Our public landing page — the one that introduces MX to the world — was not itself MX-compliant. It referenced a companion cog file that did not exist. It used plain `.html` instead of `.cog.html`. It lacked the metadata layer we tell everyone else to add. This morning fixed that: the page is now an exemplary `.cog.html` with full mx: meta tags, a companion `.cog.md`, Schema.org structured data, social sharing images, and accessibility throughout.

But we also asked a harder question: does the page give too much away? The original design was view-source-as-tutorial — every MX convention visible with explanatory comments. We pulled back. The public page now markets the product without teaching the pattern. Tutorial HTML comments, multi-block metadata conventions, and the console self-report were stripped. The product family was trimmed to three cards (Cog-Nova-MX, MX Docs, "more coming soon") — Maxine, Reginald, and The Gathering are saved for the Frankfurt stage reveal. All stripped material is preserved in `ingest/dev-docs-plan.md` with a six-section developer documentation structure planned for post-launch.

The biggest strategic move came from a LinkedIn conversation about Google's WebMCP (Web Model Context Protocol), shipped in Chrome 146 Canary on 10 February. WebMCP lets websites expose callable tools to AI agents — search functions, booking forms, checkout flows. Tom's one-line response crystallised the MX position: "But an endpoint in a web page needs documentation or a standard to guide it." WebMCP gives agents hands. MX gives agents eyes. Neither works alone. Together they form the companion web.

This insight drove a full integration across both books: 16 files updated with WebMCP positioning. The narrative thread is consistent: MX came first (published lineage from January 2024, two years before WebMCP shipped). WebMCP validates the thesis but only solves half — the action half. MX provides the understanding half. The coming-soon landing page now opens with this problem statement: "The industry is building tools for agents to act on web pages. But nobody is making the content itself machine-readable. Actions without understanding."

---

## What Was Built (Earlier This Morning)

- **BDR 002 — deliverable rename** — second Business Decision Record. Companion to BDR 001. Documents the rationale for renaming `createOutputPrompt` to `deliverable`. All future cogs use the business term.
- **mx-agent-independence.cog.md** — foundational architectural principle. MX is agent-agnostic. The file is the interface.
- **mx-show v3.2** — multi-window tree grouping, Electron apps resolve to real bundle names, ctrl-r refresh.

## What Was Built (This Session)

- **coming-soon.cog.html** — complete rewrite of the MX landing page. Full mx: meta tag identity layer (7 tags), companion `.cog.md`, Schema.org JSON-LD (WebPage + Organization + 2 Books with publication dates), Open Graph + Twitter Cards, AI-specific meta tags, `coming-soon-social.svg` for social sharing. Responsive, accessible (ARIA, prefers-reduced-motion).
- **coming-soon.cog.md** — registry-grade companion cog with YAML frontmatter. The file that was referenced by the old page but never existed.
- **coming-soon-social.svg** — 1200x630 programmatic SVG for og:image. MX brand, tagline, dark theme.
- **dev-docs-plan.md** — captures all tutorial material stripped from the landing page. Six-section developer documentation structure planned for post-Frankfurt.
- **Week 4 action plan** — Boye prep, Dotfusion reconnect, Chapter 00, KDP setup.

---

## What Changed

- **11 files renamed** (earlier) — `createOutputPrompt` → `deliverable` across standards registries, bootloader config, reference docs, validator code, blog posts, and book appendix
- **7 prose references updated** (earlier) — "prompting instructions" → "runbook" language; "AI reads" → "machine reads"
- **16 book manuscript files updated with WebMCP positioning** — Protocols chapters 00, 03, 09, 11-15 + Glossary; Handbook chapters 02, 05, 07, 08, 10; Appendices J and L. Consistent "MX came first / hands vs eyes / companion web" narrative throughout
- **allaboutv2 submodule** — coming-soon.html deleted, three new files (`.cog.html`, `.cog.md`, `.svg`) committed and pushed

---

## Decisions Made

- **WebMCP is complementary, not competitive** — MX provides understanding (metadata), WebMCP provides action (tool contracts). MX absorbs WebMCP as one more standard it honours. Never position as threat or alternative.
- **"MX came first" as standard narrative** — published lineage: Jan 2024 (CMSCritic), Jan 2025 (Boye), Jan 2026 (market trigger), Feb 2026 (WebMCP validates thesis). Two years ahead.
- **Los Granainos as proof of concept** — the test website (https://los-granainos.pages.dev/) demonstrates both MX metadata and WebMCP tool registration on a real restaurant site.
- **Two-tier documentation approach** — public pages market the product; developer docs (post-launch) teach the pattern. View-source is no longer a tutorial.
- **Product family trimmed for competitive safety** — Maxine, Reginald, MX OS, and The Gathering removed from the public landing page. Saved for Frankfurt reveal (12 May).
- **Console self-report removed** — the pattern where cog pages announce themselves in browser DevTools was stripped from the public page. Will return in developer docs.
- **deliverable replaces createOutputPrompt** (earlier) — permanent, ecosystem-wide. BDR 002 filed.
- **Agent independence as architectural principle** (earlier) — MX does not integrate with agents. Agents integrate with files.
- **"Machine" not "AI" in system prose** (earlier) — where MX documentation describes automated behaviour, it says "machine" not "AI."

---

## By the Numbers

- **7 commits** this morning (across 3 sessions)
- **20 files** modified in main repo
- **4 files** in allaboutv2 submodule (1 deleted, 3 created)
- **522 lines** added across book manuscripts
- **2 new ingest documents** (dev-docs-plan, what-mx-would-mean-for-an-ai)
- **451 files** pushed in allaboutv2 submodule (earlier — accumulated hooks, skills, blocks, content)
- **97 files** pushed in mx-audit submodule (earlier)

---

## The Insight

Field names are user interface (from earlier). Your own landing page is user interface too. And now: **the biggest competitive insight of the week.** Google and Microsoft shipped WebMCP — a standard for agents to press buttons on web pages. The industry celebrated. But nobody asked: what is the agent pressing buttons *about*? WebMCP gives agents hands. MX gives agents eyes. An endpoint without documentation is a button without a label. Tom said it in one sentence on LinkedIn: "But an endpoint in a web page needs documentation or a standard to guide it." MX is that standard. Two years ahead. First-mover advantage confirmed by the industry catching up to half the problem.

---

## Next Steps

1. **Demo Reginald — 20 Feb** — 4 days away. Live registry, real docs, searchable.
2. **London CMS Experts — 26 Feb** — Boye & Company. First public audience. Lightning talk materials needed.
3. **Chapter 00 rewrite with case studies** — week's priority for PayPal and Chris Bryce marketing
4. **Deploy demo cogs to allabout.network** — restaurant, conference, product cogs need deploying for live QR scanning
5. **Update cog spec for deliverable** — cog-unified-spec.md still references `createOutputPrompt`
6. **Send rewritten Dotfusion report to Chris Bryce** — partnership tone rewrite complete, awaiting send

---

## Commit Log

| Hash | Theme |
|------|-------|
| `929fc6f` | chore: capture accumulated changes — tool configs, session summaries, submodule pointers |
| `4a5c5d5` | docs: morning co-directors report — language cleanup complete |
| `1bf84b8` | plan: week 4 action plan — Boye prep, Dotfusion reconnect, Chapter 00, KDP |
| `e3e3ab9` | docs: book manuscript updates — Protocols chapters, Handbook chapters, appendices |
| `41a5887` | cog: coming-soon.html → coming-soon.cog.html + dev docs plan |
| `a73e605` | chore: update changelog |
| `eb69b75` | docs: morning co-directors report v2.0 — practising what we preach |

---

*Our front door now practises what we preach. But it doesn't give away the recipe.*
