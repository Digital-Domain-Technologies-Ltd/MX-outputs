---
title: "BMV Deck Differentiation Pass — Presentations Folder Inventory"
description: "Inventory of every file in mx-outputs/pptx/presentations/ classified as derivative-of-canonical, stand-alone, or superseded, in support of the May 2026 BMV investor-deck differentiation pass."
author: "Tom Cranstoun"
created: 2026-05-07
modified: 2026-05-07
type: migration-note
tags: [bmv, investor, deck, differentiation, frankfurt, inventory, staging]
mx:
  audience: [humans]
  status: draft
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/migrations/staging/2026-05-deck-inventory.md
  purpose: "Inventory of every file in mx-outputs/pptx/presentations/ classified as derivative-of-canonical, stand-alone, or superseded, in support of the May 2026 BMV investor-deck differentiation pass."
  stability: draft
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["BMV Deck Differentiation Pass - Presentations Folder Inventory"]

---

# BMV Deck Differentiation Pass — Presentations Folder Inventory

Working folder: `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/pptx/presentations/`.

## 1. Folder listing

Every file in `mx-outputs/pptx/presentations/` (filesystem `ls`):

| File | Size | Modified | Notes |
|------|------|----------|-------|
| `.DS_Store` | 6 KB | 12 Mar | macOS Finder metadata. Ignore. |
| `.mx.yaml.md` | 517 B | 3 May | Folder declaration; `contentType: folder-metadata`, inherits `../.mx.yaml.md`, vanilla. No deck-specific routing. |
| `bmv-pitch-2026.md` | 9.3 KB | 7 May | **Canonical source** for the BMV deck. 13 numbered slides. |
| `bmv-pitch-2026.pptx` | 322 KB | 7 May | Render of the canonical `bmv-pitch-2026.md`. PowerPoint reports 15 slides because the canonical's slide 8 (Traction) and slide 12 (The Ask) were each split into two physical slides ("Traction" + "Traction (2)" and "The Ask" + "The Ask (2)") to fit the body text on the layout. Same content, just paginated. |
| `frankfurt-cms-summit-talk.pptx` | 3.7 MB | 7 May | 21 slides. Marp-exported, image-only (each slide is a full-page PNG; XML carries no live text). No source `.md` is present in this repo — this deck was produced from a Marp source held outside `mx-outputs/`. |
| `MX-what-why-when.pptx` | 2.2 MB | 7 May | 14 slides. Marp-exported, image-only. Source markdown lives at [`mx-outputs/md/presentations/MX-what-why-when.md`](../../md/presentations/MX-what-why-when.md) — title there is **"London CMS Experts Lightning Talk"** (Boye & Company audience, 26 Feb 2026). The filename is misleading: it is a London-CMS-Experts lightning talk, not a generic "what / why / when". |
| `Reginald.pptx` | 117 KB | 7 May | 14 slides. Live-text PptxGenJS render. Filename says "Reginald" but the content is a **fully rebranded BMV investor pitch** ("MX OS · PRE-SERIES A · Investor Deck") — same problem-stack-traction-ask structure as `bmv-pitch-2026.md` but in finished PptxGenJS layout. Strongest candidate for "most polished investor deck" in the folder. |

Truncated filename in the parent task description = **`The Web Has a New Audience - MX and The Gathering.pptx`** (179 KB, 12 May 2026 modified time, 12 slides). Live-text PptxGenJS export. Tom-Cranstoun-as-"Founder, The Gathering" — community / standards-body framing, not investor framing.

## 2. Canonical deck summary — `bmv-pitch-2026.md`

### Frontmatter

- `title`: "MX — Bare Metal Ventures Pitch"
- `version`: 2.3
- `status`: active
- `contentType`: business-doc · `audience`: [investors] · `confidential`: true
- `description`: "12-slide investor pitch deck for Bare Metal Ventures meeting with Michelle Tang."

The frontmatter still says **12-slide** but the body now contains **13 numbered slides** (Slide 1 through Slide 13) — the description has drifted from the body. The PPTX render then expands further to 15 physical slides because two body slides spill onto continuation pages.

### Audience

Michelle Tang at Bare Metal Ventures. Pre-Series A infrastructure investor who is being asked to position MX inside the Bare Metal portfolio (DreamBig, FluidStack, Oxide, Callosum, MeetKai). The deck is therefore written **for an investor who already accepts that an "agent stack" is real and is buying layers of it** — it does NOT defend the existence of agents.

### Structure (13 slides)

1. **Headline** — "MX: The machine layer for meaning. A universal document runtime. Built on open standards. Operational at alpha."
2. **The Problem** — four enterprise-AI failure modes (wasted inference, energy cost, hallucinations, no provenance). Closes with "This is not a web problem. It's a document problem."
3. **The Insight** — Tom's 47-year operator track record (Nissan-Renault, BBC, Ford, McLaren, EE) framed as moat.
4. **What MX Is** — three components: COGs, REGINALD, The Gathering. "Built on Markdown, YAML, and HTML. Nothing proprietary."
5. **How It Works** — DNS / DNSSEC analogy for REGINALD. Closes with the **DNA framing**: *"MX is the DNA a file carries when it leaves any pool. A memory-pool architecture (LLM-wiki, vector store, knowledge base) organises knowledge inside one system; MX governs what survives extraction. Complementary, not competing."*
6. **Where MX Sits in the Bare Metal Stack** — explicit layer table placing MX between MeetKai (sovereign AI runtime) and applications.
7. **Why Now** — frontier models, inference cost, regulatory pressure (EU AI Act, UK assurance), Adobe Holiday 2025 700%/30% stat.
8. **Traction** — Handbook published, Protocols pre-orders, REGINALD alpha (89 COGs · Ed25519), Leica audit (14,264 URLs), TG Administration LTD, CMS Summit Frankfurt, IDHL, Mozilla Fest, Germany/Canada pipeline.
9. **Competitive Position** — 2×2 (open-vs-proprietary × executable-vs-queried) + funding table vs /dev/agents, Letta, E2B, Cognition.
10. **Local Reginald Machine** — on-prem £25k/server/year tier, ACV table, "£1.25M ARR from on-prem alone."
11. **Founder Contribution** — £358k–£599k documented founder investment.
12. **The Ask** — pre-Series A, CogNovaMX Ltd, three hires, milestone (500+ publishers, 10+ Local Reginald enterprises, services-multiple → platform-multiple shift).
13. **Connect** — registry / standards / web / contact.

### Differentiation language already present

| Objection | Where in canonical | Strength |
|-----------|--------------------|----------|
| **"It's just SEO / GEO"** | Not addressed directly anywhere. Slide 2 frames the problem as "documents", not "websites", but never says the words "this is not SEO" or "this is not GEO". | **Gap.** |
| **"It's just JSON-LD / structured data"** | Slide 4 says "Built on Markdown, YAML, and HTML. Nothing proprietary." Slide 9 lists `llms.txt` and `AGENTS.md` in the bottom-right "open + queried" quadrant. The implicit claim is that JSON-LD-style approaches are **queried** while MX is **executable**, but the deck never spells out the executable-vs-queried distinction in plain language. | **Implicit; not landed.** |
| **"It's just MeetKai / agent OS"** | Slide 6 places MX one row above MeetKai in the Bare Metal stack table. Slide 9 says "Every competitor raised on an agent-OS narrative. None is document-native." | **Addressed structurally on Slide 6 and rhetorically on Slide 9, but never with a one-liner that survives outside the deck.** |
| **"It's the pool model" (LLM-wiki, vector store, knowledge base)** | Slide 5 carries the **DNA framing**: *"MX is the DNA a file carries when it leaves any pool."* This is the strongest differentiation move in the deck and the only one that pre-empts a specific competitor mental model by name. | **Landed on Slide 5 — but only there. Nowhere else is it reinforced.** |
| **"It's Google's web.dev agent guidance"** | Not addressed anywhere. Google is not named in the deck. | **Gap.** |

### Pool framing — replacement status

A grep across the canonical for the word "pool" returns **one** occurrence — the DNA paragraph on Slide 5, which is the **new** framing. There is no **legacy** "MX is a pool" framing left in this file to replace; the "pool" word now exists only in the rhetorical move *"the DNA a file carries when it leaves any pool"*, and that paragraph is correctly bounded ("Complementary, not competing"). No "pool"-as-MX-architecture language remains.

What is **missing** is propagation of the DNA framing into the rest of the deck. Slides 1, 4, 9, and 13 all rely on phrases ("the machine layer for meaning", "document-native machine runtime", "the moat is architecture", "the machine layer for meaning — for everything you publish, everywhere") that are abstract and could each be sharpened with a "DNA / pool / extraction" callback.

### Other gaps the differentiation pass should know

- The frontmatter still says **12 slides** while the body has **13** — at minimum bump the description and re-render.
- The PPTX render splits Slide 8 (Traction) and Slide 12 (The Ask) into continuation pages, breaking the "per slide one idea" rhythm. The body of those two slides should be tightened so each fits on one rendered slide, OR the canonical should explicitly carry slides 8a / 8b / 12a / 12b so the count is honest.
- Slide 2's four-failure list and Slide 4's three-component list are both prose-bulleted. Neither sets up the "DNA versus pool" frame that Slide 5 then deploys, so the metaphor lands cold.
- Slide 9's bottom-right quadrant lists `GitBook`, `AGENTS.md`, `llms.txt` — but nothing in this deck explains why a reader-facing investor would care that those three exist or how MX differs from them. They appear as labels without a payload.
- The "Local Reginald Machine" slide (10) is the strongest revenue-mechanic story; the differentiation pass should consider whether one of its lines (e.g. "regulated buyers cannot deploy any other way") deserves promotion to Slide 5 or 9 to harden the moat claim.

## 3. Per-pptx classification

### `bmv-pitch-2026.pptx` — derivative-of-canonical

Direct PowerPoint render of `bmv-pitch-2026.md`. Same `dc:title` ("MX — Bare Metal Ventures Pitch"), same `dc:subject`, same Tom Cranstoun authorship, same body content verbatim (slide titles, bullet lists, tables match the canonical word-for-word). The only divergence is the pagination split that turns 13 logical slides into 15 physical slides. Treat as the live render of the canonical; re-export after every canonical edit.

### `Reginald.pptx` — derivative-of-canonical (alternate render, same investor story)

Filename suggests this is about REGINALD-the-product, but the content is the **same investor pitch** as `bmv-pitch-2026.md`: opening "MX OS · PRE-SERIES A · Investor Deck", same four-failures problem slide, same Tom track-record insight, same COG/REGINALD/Gathering trio, same Bare Metal stack table (DreamBig → MeetKai → MX → Applications), same Why-Now triple, same Traction beats (Handbook, REGINALD alpha 89 COGs, Leica, TG Administration, CMS Summit Frankfurt), same competitive 2×2, same Local Reginald Machine ACV table, same Ask. Differences from the canonical:

- Visually finished — generated by PptxGenJS with proper layout, numbered "02 / 14" page chrome, headline-style typography. The `bmv-pitch-2026.pptx` render is plainer.
- Slide 4 ("COGS · PROVENANCE") **adds an MX frontmatter snippet on screen** — the actual YAML header of `MX-what-why-when.md` is shown literally as part of the slide. The canonical does not do this.
- Slide 5 "THE INSIGHT" includes an **X / Twitter** track-record beat ("Best team ever, on AEM.") that does not appear in the canonical.
- The Founder Contribution table (canonical Slide 11) is **omitted**.
- The DNA framing from canonical Slide 5 is **NOT present** — Slide 7 ("HOW IT WORKS") uses only the DNS / DNSSEC analogy, with no "MX is the DNA a file carries when it leaves any pool" paragraph. The pool / memory-pool / extraction framing is missing entirely.

Classify as **derivative-of-canonical, content-divergent**. The visual quality argues for keeping it as the live render; the missing DNA framing and missing Founder Contribution slide argue for re-rendering it once the canonical is updated. Filename should be renamed to something like `bmv-pitch-2026-rendered.pptx` or `mx-investor-deck.pptx`; calling it `Reginald.pptx` will mislead anyone who opens the folder cold.

### `frankfurt-cms-summit-talk.pptx` — stand-alone

21-slide deck for **CMS Summit Frankfurt, 12 May 2026**. Marp-exported, image-only (every slide is a full-page PNG embedded as background, no live text). The `dc:subject` says "15-minute lightning talk introducing MX as a discipline, with a worked TYPO3 case study (Leica Microsystems). No live demos — slides only." Authored 6 May 2026 by Tom Cranstoun, `Company: Created by Marp`. No source markdown for this deck exists in the repo (searched `mx-outputs/`, `mx-canon/`, `datalake/`, `mx-maxine-lives/communications/talks/`).

This is a **CMS-practitioner audience**, not investor. Different pitch shape — discipline framing, accessibility-first language, TYPO3 case study. **The differentiation pass need not change this deck** unless the four-objections framing is being aligned across all surfaces; if so, the source Marp markdown must be located (Tom likely has it locally) before this PPTX can be regenerated.

The fact that this deck takes priority for 12 May means: any DNA-framing language landed in the canonical BMV deck this week should be checked for whether it also lands cleanly in the Frankfurt narrative — but the Frankfurt deck itself cannot be edited from this repo without recovering the Marp source.

### `MX-what-why-when.pptx` — stand-alone (legacy filename for the London CMS Experts lightning talk)

14-slide deck. Marp-exported, image-only. The `dc:title` is **"London CMS Experts Lightning Talk"** (26 Feb 2026 event, Boye & Company audience). Source Marp markdown is present at [`mx-outputs/md/presentations/MX-what-why-when.md`](../../md/presentations/MX-what-why-when.md). The talk's spine: AI agents as the new audience, the £2,030/£203,000 hallucination story, "fix it for machines, you fix it for humans too", WCAG/MX complementarity, COG anatomy with a live YAML frontmatter on screen.

Audience and tone are completely different from the BMV deck — this is a **CMS-practitioner education talk**, not an investor pitch. Classify as **stand-alone**: no derivation from `bmv-pitch-2026.md`, no derivation from `frankfurt-cms-summit-talk.pptx`. The `Reginald.pptx` Slide 4 borrows the YAML-on-screen device from this deck, which is the only family resemblance.

The filename is a problem in its own right (`MX-what-why-when.pptx` doesn't tell anyone it's the London Boye lightning talk), but renaming is out of scope for the BMV differentiation pass.

### `The Web Has a New Audience - MX and The Gathering.pptx` — stand-alone

12-slide deck. Live-text PptxGenJS render. 28 Apr 2026, Tom Cranstoun as "Founder, The Gathering" — **community / standards-body audience**, not investor. Spine: "Your website had a visitor this morning" cold-open, the £2,030 hallucination case, "January 2026: The Tipping Point" (Amazon Alexa+, Microsoft Copilot Checkout, Google Universal Commerce Protocol, Anthropic Claude Cowork), the "What is MX" definition card, "What MX Covers" five-pillar list, "The Gathering" governance model, "CMS as the control point", sustainability case ("the greenest kilowatt-hour is the one you never use"), volunteer / sponsor calls-to-action.

Vendor-neutral throughout — REGINALD is **not named once**, in line with the auto-memory rule that Gathering sponsor-facing material must not name Reginald. Classify as **stand-alone**: it shares the four-failures intuition with the canonical but addresses a community audience and never makes an investor ask. The differentiation pass should not pull from this deck into the BMV deck without a careful audience-translation pass — what works for a TG sponsor will undermine the BMV pitch (e.g. "no fees, no barriers" cuts against the £25k/server/year ARR story).

## 4. Concrete observations the deck-update pass should know

1. **The DNA framing has landed in exactly one place — canonical Slide 5 — and nowhere else in the family.** Neither `Reginald.pptx`, `frankfurt-cms-summit-talk.pptx`, `MX-what-why-when.pptx`, nor the Gathering deck carries the "DNA a file carries when it leaves any pool" line. If the differentiation pass intends to make DNA framing the deck's anchor metaphor, it has to be added to Slide 1 (headline subline), Slide 4 (closing line of "What MX Is"), and Slide 9 (the moat-is-architecture rhetorical close), not just Slide 5.

2. **Two of the four "I already know this" objections are not addressed at all in the canonical.** SEO/GEO is never mentioned by name; Google's web.dev agent guidance is never mentioned by name. The differentiation pass needs new language — likely as one new pre-emption slide (between current Slide 4 and Slide 5) or as a tightened Slide 9 — that names each of the four collapse-points and says, in one sentence each, why MX is not that.

3. **`Reginald.pptx` is the highest-fidelity investor render in the folder, but it is content-stale.** It misses the DNA paragraph and the Founder Contribution slide. After the canonical is updated, it must be re-rendered (PptxGenJS) and probably renamed — `Reginald.pptx` is a misleading filename that will collide with any future deck that genuinely is *about* the REGINALD product.

4. **`bmv-pitch-2026.pptx` is auto-pagination-split.** Slide 8 and Slide 12 each spill into a continuation slide. If the deck is taken into the BMV meeting in this form, the slide count goes 1 → 15 instead of 1 → 13, breaking the visual rhythm. Either tighten the bodies of those two slides or formalise the splits in the canonical.

5. **The frontmatter `description: "12-slide investor pitch deck"` is one slide stale.** The body has 13 numbered slides. Bump in the same edit that lands the differentiation language.

6. **No source markdown exists in this repo for the Frankfurt CMS Summit deck.** That deck is image-only Marp output. Editing it for 12 May requires recovering the Marp `.md` from Tom's local machine first. Do not attempt to edit the PPTX directly; image-only PNGs cannot be re-laid-out in PowerPoint without re-rendering from Marp.

7. **The canonical and `Reginald.pptx` use different track-record beats on the Insight slide.** Canonical names Nissan-Renault, BBC, Ford, McLaren, EE. `Reginald.pptx` adds X / Twitter ("Best team ever, on AEM."). Decide once which set is the official Tom-Cranstoun investor track record and propagate.

8. **`MX-what-why-when.pptx` and `The Web Has a New Audience.pptx` are useful as raw material for the differentiation pass even though neither is part of the BMV deck.** Specifically: the £2,030 / £203,000 hallucination story (in both decks) is more concrete than anything currently on canonical Slide 2, and the "January 2026: The Tipping Point" four-platform table (Web-Has-New-Audience deck) is a sharper "Why Now" than the canonical's frontier-models / inference-cost / regulatory triplet. Either could be lifted in if the BMV slide budget allows.

9. **`.mx.yaml.md` for this folder declares `audience: [humans, machines]` and `inherits: ../.mx.yaml.md`.** Nothing deck-specific. No routing or differentiation hook lives in folder metadata; everything is per-deck frontmatter.
