---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "BMV deck differentiation pass — Phase 1 briefing"
description: "Synthesis of the four Phase 1 staging notes for the May 2026 BMV investor-deck differentiation pass. Drives Phase 2 interview and Phase 3 deck update."
author: "Tom Cranstoun"
created: 2026-05-07
modified: 2026-05-07
version: "1.0"
mx:
  x-mx-category: mx-content
  status: active
  contentType: migration-note
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/migrations/2026-05-differentiation-briefing.cog.md
  audience: [humans, machines]
  tags: [bmv, investor, deck, differentiation, frankfurt, briefing, phase-1]
  partOf: mx-maxine-lives
  buildsOn: []
  summary: "What the four Phase 1 sub-agents found, what they leave open, and the questions Phase 2 must close before the deck is rewritten."
  conformsTo: [https://mx.allabout.network/cog.html]
  trainingDataPolicy: "Internal working note. Not for external training corpora until Tom releases."
  runbook: "Read top to bottom. Section 7 is the open-decisions list — that is the input to the Phase 2 interview. Sections 2 to 6 are the evidence."
  stewardship:
    steward: "Tom Cranstoun"
    accountableContact: "info@cognovamx.com"
    legalEntity: "Digital Domain Technologies Ltd"
    brand: "CogNovaMX"
---

# BMV deck differentiation pass — Phase 1 briefing

The single working document for the BMV investor-deck differentiation pass. Today is 7 May 2026. CMS Summit Frankfurt is 12 May. The canonical deck source is `mx-outputs/pptx/presentations/bmv-pitch-2026.md`.

## 1. What Phase 1 produced

Four sub-agents ran in parallel. Each wrote a staging note. The four notes are the evidence base; this briefing is their synthesis.

| Sub-agent | Topic | Staging note | Bytes |
|---|---|---|---|
| A | Deck-files inventory | `mx-outputs/md/migrations/staging/2026-05-deck-inventory.md` | 19,145 |
| B | MX / REGINALD canonical voice | `mx-outputs/md/migrations/staging/2026-05-mx-voice-notes.md` | 29,883 |
| C | Google web.dev guidance | `mx-outputs/md/migrations/staging/2026-05-google-webdev-notes.md` | 6,095 |
| D | Supporting-corpus inventory | `mx-outputs/md/migrations/staging/2026-05-corpus-inventory.md` | 26,161 |

The notes are richer than this briefing reproduces. Where this briefing summarises, the staging note is authoritative.

## 2. The deck today

### What is in the canonical

`bmv-pitch-2026.md` carries 13 numbered slides. The frontmatter still says 12 — drift to fix. The PPTX render expands to 15 physical slides because Slide 8 (Traction) and Slide 12 (The Ask) each spill onto a continuation page. The slide spine, in order: headline, the problem, the insight, what MX is, how it works, where MX sits in the Bare Metal stack, why now, traction, competitive position, Local Reginald Machine, founder contribution, the ask, connect.

Audience: Michelle Tang at Bare Metal Ventures. Pre-Series A infrastructure investor positioning MX inside the BMV portfolio (DreamBig, FluidStack, Oxide, Callosum, MeetKai). Written for an investor who already buys "the agent stack is real"; does not defend the existence of agents.

### What the canonical already does well

- **Slide 5 carries the DNA framing.** *"MX is the DNA a file carries when it leaves any pool. A memory-pool architecture (LLM-wiki, vector store, knowledge base) organises knowledge inside one system; MX governs what survives extraction. Complementary, not competing."* This is the strongest single move in the deck and the only one that pre-empts a specific competitor mental model by name.
- **Slide 6 places MX one row above MeetKai.** Explicit Bare Metal stack table — DreamBig → MeetKai → MX → Applications. This is the partnership-shape claim that defuses the *"isn't this MeetKai?"* objection structurally.
- **Slide 9 names the moat as architecture.** *"Every competitor raised on an agent-OS narrative. None is document-native."* Implicit executable-vs-queried distinction with `llms.txt` and `AGENTS.md` placed in the queried quadrant.

### What the canonical does not do

- **No prose-level rebuttal of SEO/GEO.** The words SEO and GEO never appear. Slide 2 frames the problem as *"a document problem, not a web problem"*, but never says *"this is not GEO"*.
- **No prose-level rebuttal of JSON-LD or schema.org.** Slide 4 says *"Built on Markdown, YAML, and HTML. Nothing proprietary."* Slide 9 places `llms.txt` and `AGENTS.md` in the queried quadrant. Neither names the JSON-LD objection out loud.
- **No mention of Google's web.dev guidance.** Google is not named anywhere in the deck. The 1 May 2026 *Build agent-friendly websites* article is a missing slide.
- **DNA framing landed on Slide 5 only.** Slides 1, 4, 9, and 13 all rely on phrases (*"the machine layer for meaning"*, *"document-native machine runtime"*, *"the moat is architecture"*) that could each be sharpened with a DNA / pool / extraction callback.
- **No three-benefits chain on a single slide.** The hallucination, token, and regulatory beats appear scattered (Slide 2 names hallucinations; Slide 7 names the EU AI Act; the token argument is implicit in *"wasted inference"*). Sub-agent B's verbatim canonical phrasing for all three exists on the REGINALD landing page and in the GEO blog post; it just has not been lifted to the deck.

### Render and naming problems

- **`Reginald.pptx` is the highest-fidelity investor render in the folder.** It is a fully rebranded BMV investor pitch (*"MX OS · PRE-SERIES A · Investor Deck"*) generated by PptxGenJS with proper layout. But it is content-stale: missing the DNA paragraph, missing the Founder Contribution slide, with an X / Twitter track-record beat the canonical does not carry. The filename is misleading — anyone who opens the folder cold will mistake it for a deck about REGINALD-the-product.
- **`bmv-pitch-2026.pptx` is auto-pagination-split.** Slides 8 and 12 each spill onto a continuation slide. Either tighten the bodies or formalise the splits in the canonical.
- **`frankfurt-cms-summit-talk.pptx` has no source markdown in this repo.** Marp-exported, image-only PNGs. Editing for 12 May requires recovering the Marp `.md` from Tom's local machine first.
- **`MX-what-why-when.pptx`** is a misleading filename for the London CMS Experts lightning talk (Boye & Company, 26 Feb 2026). Source is at `mx-outputs/md/presentations/MX-what-why-when.md`. Stand-alone, not a derivative.
- **`The Web Has a New Audience - MX and The Gathering.pptx`** (the truncated filename in the original prompt) is a stand-alone vendor-neutral talk for The Gathering. REGINALD is *not named once* in it, in line with the gathering-sponsor-vendor-neutrality memory rule. Do not pull from this into BMV without an audience translation pass — *"no fees, no barriers"* cuts against the £25k/server/year ARR story.

## 3. The voice — what to inherit verbatim

The canonical voice lives on the REGINALD landing page (`https://mx.allabout.network/reginald/`) and the *Everyone is looking inward* position paper (`https://mx.allabout.network/reginald/mx-machine-readiness.html`), with strong supporting density on `geo-is-a-tactic-mx-is-the-specification.html`. The deck and the manuscripts must inherit that voice precisely.

### The lines worth lifting

**Pairing line.** *"MX makes content machine-readable; REGINALD makes it machine-trustworthy."* (REGINALD landing.)

**Attestation scope, narrow form.** *"The attestation is narrow and precise: this is what the owner published, unaltered. Origin and integrity only, not factual correctness, not editorial quality."* (REGINALD landing.) Reinforced by *"REGINALD signs the truth of a file, not the truth of the world."* (Position paper.)

**Three-benefits chain, complete.** Lifted from the REGINALD landing page and `geo-is-a-tactic-mx-is-the-specification.html`:

1. *"Agents that read attested documents hallucinate less, because they have verified facts to cite rather than inferences to make."*
2. *"Fewer inference steps means lower token consumption and lower energy draw."*
3. *"EU AI Act, the European Accessibility Act, and digital-records legislation across multiple jurisdictions place documentation, logging, and verifiability obligations on the organisations they cover. MX and REGINALD do not grant compliance with any of these regulations — that remains a legal duty of the organisation. What they do is make the documentation the organisation must produce structured, machine-readable, tamper-evident, and verifiable on request."*

**Contract fingerprinting.** *"The Gathering ratifies the Machine Experience standard, including the contract fingerprinting note that defines how a document is canonicalised, hashed, and signed."* (REGINALD landing.) Pair with *"Bumping the version is a substantive editorial act; re-version means re-sign."* (Meta-cog.)

**SEO / GEO / MX three-beat.** *"SEO got you found. GEO gets you understood. MX gets you used."* (`geo-is-a-tactic-mx-is-the-specification.html`.) The page also carries the formal contrast: *"GEO asks how to increase the probability that a specific class of LLM-powered system cites a specific web page. MX asks whether any machine can find any file in a corpus, confirm it is genuine, and know whether it is current."*

**DNA framing.** *"MX is the DNA a file carries when it leaves any pool, so the next reader can answer the questions the originating system used to answer for it: what this is, who published it, whether it has been altered, whether it is current."* (Position paper, GEO blog.)

**Pool corrective.** *"A memory-pool architecture (an LLM-wiki, a vector store, a knowledge base) and MX are orthogonal layers, both useful, neither a substitute for the other."* (Position paper.)

**Cog metaphor.** *"AI is not intelligent. It is a machine, and machines, since the first water mill, have always run on cogs that mesh."* (Position paper.) Carry the full metaphor at the moment cogs are first introduced; use the noun without further metaphor thereafter.

### Voice rules in one paragraph

Calm, structural, technically precise, philosophically grounded, never breathless. Short declarative spine, with one expansion sentence after each landing line. Three-beat structures used with intent. Contrast frames: inward / outward, look good / be understood, find / cite / use, the truth of a file / the truth of the world. Italicised contrasts within a sentence to mark the pivot. Questions name an unmet challenge and get answered, never left rhetorical. No superlatives. No vendor names as shorthand for whole categories.

## 4. The four objections — current state in the canonical voice

| Objection | Where the rebuttal already lives | Where it does not yet live |
|---|---|---|
| *Isn't this just SEO / GEO?* | `mx-shared-gathering/draft-mx-not-geo.md`; `mx-outputs/mx-site/blog/geo-is-a-tactic-mx-is-the-specification.html`; *Protocols* chapter-10 (`chapter-10-generative-engine-optimization.md`). | The canonical BMV deck. The mx-site core learn pages (`learn/why-mx-matters.html`, `learn/what-is-mx.html`, etc.). The REGINALD module landing pages. The Gathering site. |
| *Isn't this just JSON-LD or schema.org?* | `mx-shared-gathering/draft-mx-not-geo.md`; `mx-outputs/reginald/how-it-works.html` (the *"MX adds where Schema.org leaves gaps; never duplicates"* line); `mx-outputs/reginald/reginald.cog.md`; `ai-readiness.html`; `plugins.html`. | The canonical BMV deck. The mx-site core learn pages and `mx-site/index.html`. `mx-shared-gathering/draft-carrier-formats.md` enumerates JSON-LD as a carrier but does not carry the rebuttal. |
| *Why wouldn't Google just do this?* | `mx-outputs/md/migrations/staging/2026-05-google-webdev-notes.md` (the source-citable research note this pass produced). `mx-outputs/mx-site/blog/web-is-just-the-start.html` (existing essay framing the web.dev guide). | The canonical BMV deck. A published blog post (planned: `what-googles-web-dev-agent-guidance-does-not-touch.html`). The Gathering's `draft-notes.html` external-standards list. The REGINALD module pages. |
| *Isn't this just MeetKai's sovereign-data work?* | The canonical BMV deck (Slide 6 stack table is the only place the partnership-shape claim lives publicly). | Every other public surface. The position paper and the REGINALD landing page do not name MeetKai. The `mx-site/about/about.html` page is silent on portfolio fit. |

### The Google guide in one paragraph

Google's *Build agent-friendly websites* (web.dev, 1 April 2026 last-updated, circulated 1 May) gives developers eight specific recommendations. Every one is a property of the rendered HTML page: stable layout, semantic HTML elements, the accessibility tree, `cursor: pointer`, `for` attribute on labels, minimum 8-square-pixel hit area. Google's own summary: *"Everything we suggest to make a site 'agent-ready' also makes sites better for humans."* The guide does not address provenance, authentication, attestation, rights, lifecycle, or off-web carriers (PDF, DOCX, EPUB, MP4, audio, CSV, ICS, RSS, Markdown). That is the MX scope. The defensible deck framing: *"Google covered the page. We cover the file."* The guide is accessibility hygiene for the rendered HTML page; MX picks up where it stops.

## 5. The supporting corpus — better state than expected

Sub-agent D's full inventory shows the corpus is in a stronger state than the original prompt assumed:

- **DNA framing is widely propagated already.** The canonical line *"MX is the DNA a file carries when it leaves any pool"* lives in 17+ files across the public site: `mx-site/index.html`, the four learn pages, the position paper, eight blog posts, the canonical deck, and `mx-shared-gathering/draft-mx-not-memory-pool.md`.
- **Every prose "pool" reference is correctly DNA-paired.** No orphan *"MX is the pool"* misframings remain. The pool corrective is consistent across the public surface.
- **The DNA framing is absent from these surfaces:** every page under `mx-outputs/reginald/`, the manuscript chapter sources (Handbook and Protocols), the Appendices, the-gathering pages, services, and about. Carrier renderings inherit from source on regeneration; the gap is at source.
- **The contract fingerprinting note exists at `mx-shared-gathering/draft-contract-fingerprinting.md`** and is linked from `mx-outputs/mx-site/the-gathering/draft-notes.html` lines 164–169. The deck moat slide can name it precisely and link there.

### The MeetKai gap

The deck is the *only* public-facing artefact making the MeetKai partnership-shape claim. None of the nine canonical voice sources mention MeetKai. If the deck is going to lean on the partnership argument, the claim should also land on a canonical page (recommendation: a paragraph in the position paper or the REGINALD landing) so the deck and the canonical surface stay in step.

### The backronym question

The full phrase *"Registry for Genuine Information, Notarised Authentication, and Legitimate Documentation"* does not appear on any of the nine canonical voice sources fetched. The REGINALD landing page describes REGINALD by function, not by acronym expansion. The position paper expands by component (R / N / L) without spelling out a phrase:

- **R:** *"A public record of what was published, by whom, and when."*
- **N:** *"Each cog carries a cryptographic signature using established standards. Tampering is detectable. Authorship is not deniable. Time of publication is provable."*
- **L:** *"The signature is paired with discoverable metadata: purpose, audience, refers-to, update rules."*

The deck must not introduce a backronym the public site does not yet carry. Two paths: (a) push the backronym onto the REGINALD landing page first, then lift it into the deck; (b) keep the deck on the existing three-component description.

**Resolved (2026-05-15): path (a).** The full phrase has been promoted to the REGINALD landing page as a visible letter-block under the intro paragraph, lifted into the page meta description, OpenGraph and Twitter card descriptions, and the JSON-LD `CollectionPage.description` and `alternateName`. The deck may now lift the backronym verbatim; the canonical surface carries it first.

## 6. Manuscript scope

| Manuscript | Status per CLAUDE.md | What this pass can do |
|---|---|---|
| *MX: The Handbook* — `datalake/manuscripts/mx-books/mx-handbook/` | **Read-only — published.** | No edits to chapter sources. The pass can edit the rendered HTML carrier and the mx-site book pages only with explicit direction from Tom. |
| *MX: The Protocols* — `datalake/manuscripts/mx-books/mx-protocols/protocols/` | **Editable.** | Natural homes: chapter-00 (intro framing + DNA line), chapter-04 (business reality + SEO contrast), chapter-10 (the dedicated GEO chapter — the natural home for the GEO objection rebuttal), chapter-14 (agent protocols — natural home for Google web.dev), chapter-22 (markdown-trap, JSON-LD framing). |
| Free-book chapter-00 — `free-book/chapter-00/chapter-00-free.md` | **Editable.** | The two-pillar value-proposition argument lives here per CLAUDE.md. Natural home for the three-benefits chain. |
| Appendix J — `mx-appendices/appendix-j-*.md` | **Editable.** | Industry developments. Natural home for the 1 May 2026 web.dev citation. |
| `shared/` — published frontmatter, glossary | **Read-only — published.** | No edits. |

## 7. Open decisions — the input to the Phase 2 interview

These are the calls the briefing cannot make on its own. The interview's job is to close them.

1. **The REGINALD backronym.** *Resolved (2026-05-15): path (a).* The full phrase "Registry for Genuine Information, Notarised Authentication, and Legitimate Documentation" has been promoted onto the REGINALD landing page as a visible letter-block, with the meta description, OpenGraph, Twitter, and JSON-LD descriptions updated in step. The deck may now lift the backronym verbatim.
2. **The MeetKai partnership claim.** Lives only on the deck today. Should the pass push the partnership-shape claim onto a canonical page (position paper or REGINALD landing) so the deck and the public surface agree?
3. **`Reginald.pptx` reconciliation.** Polished investor render but content-stale and misleadingly named. Three options: (a) treat as a derivative, re-render after canonical update, rename to `mx-investor-deck.pptx`; (b) promote its visual polish back into the canonical render path; (c) leave as-is and rely on `bmv-pitch-2026.pptx` for the BMV meeting.
4. **The Frankfurt deck.** Source Marp markdown not in this repo. In scope to update for 12 May (locate the Marp source first), or out of scope for this pass?
5. **`contract fingerprinting` on the moat slide.** Precise but jargon for an investor audience. *Recommendation: name it with a one-line gloss — it ties the moat to a specific ratifiable artefact rather than handwaving "we wrote the standard".*
6. **Slide order.** Where does the new "four objections" content land? Options: (a) one new pre-emption slide between Slide 4 (What MX Is) and Slide 5 (How It Works); (b) tighten Slide 9 (Competitive Position) to absorb all four; (c) speaker-notes only, leaving the deck visually unchanged.
7. **DNA propagation across the deck.** Sub-agent A flagged that DNA / pool / extraction callbacks could land on Slides 1, 4, 9, and 13 in addition to Slide 5. Confirm the depth — anchor metaphor (every callback) or single anchor (Slide 5 only).
8. **The three-benefits chain placement.** A single new value slide carrying all three beats together, or fold one beat each into Slides 2 (problem), 7 (why now), and 9 (moat)?
9. **Founder Contribution slide.** Canonical Slide 11. `Reginald.pptx` omits it. Keep, drop, or replace with a tighter "skin-in-the-game" line?
10. **Voice rule for the manuscript ripple.** Blog voice ports verbatim into *Protocols* chapter additions, or adapt per surface?
11. **Closing-line discipline on comparison slides.** The original prompt offered: once per comparison slide, or once per surface. Confirm.
12. **Re-fetch of the three blog posts that returned WebFetch summaries.** `web-is-just-the-start.html`, `content-that-manages-itself.html`, `what-is-machine-experience.html` returned summaries rather than verbatim. Re-fetch with `curl` + `Read` before lifting language, or rely on Sub-agent B's voice rules and treat summaries as adequate?

## 8. Phase 3 plan — sketch, subject to interview answers

### 3a. The deck (priority)

1. Update frontmatter: `version: "2.4"`, `description: "13-slide investor pitch deck for Bare Metal Ventures meeting with Michelle Tang."`, bump `modified`.
2. Add or rewrite, in the order the interview confirms:
    - The "four objections" content (one slide or absorbed into Slide 9).
    - A *"What REGINALD attests, and what it does not"* slide right after Slide 4.
    - A three-benefits value slide.
    - Tighten Slide 9 to absorb the JSON-LD and Google rebuttals if not on a separate slide.
    - Propagate the DNA / pool callback across the slides Tom names.
3. Tighten Slides 8 and 12 so the PPTX render lands at 13 physical slides, not 15.
4. Regenerate `bmv-pitch-2026.pptx`. Reconcile `Reginald.pptx` per the interview answer to (3) above.
5. Bring the rewritten `.md` and the regenerated `.pptx` to Tom for review before any ripple.

### 3b. Blog and REGINALD module

- Promote `2026-05-google-webdev-notes.md` to a published blog post under `mx-outputs/mx-site/blog/` (filename: `what-googles-web-dev-agent-guidance-does-not-touch.html`).
- Confirm `geo-is-a-tactic-mx-is-the-specification.html` already names REGINALD in mixed case; the brand-style rule says public-facing prose uses all-caps. Sweep the post to all-caps in a follow-up (out of scope for this pass unless Tom directs).
- Strengthen `what-is-machine-experience.html` with the four-objections section per the canonical voice rules.
- Strengthen `web-is-just-the-start.html` with the explicit Google web.dev contrast.
- Add the JSON-LD-and-Schema.org boundary line to the mx-site core learn pages (`learn/why-mx-matters.html`, `learn/what-is-mx.html`, `learn/key-principles.html`, `learn/mx-principles.html`, `learn/benefits.html`).
- Add the *"Reginald is not GEO"* sentence to the REGINALD module Hero sections (`reginald/index.html`, `reginald/how-it-works.html`, `reginald/benefits.html`, `reginald/pricing.html`, `reginald/get-started.html`).

### 3c. Manuscripts (per interview answer to question 10)

- *Protocols* chapter-00: intro framing plus the DNA line.
- *Protocols* chapter-04 (business reality): SEO / GEO contrast.
- *Protocols* chapter-10 (GEO chapter): tighten with the verbatim three-beat from the GEO blog.
- *Protocols* chapter-14 (agent protocols): name the 1 May 2026 web.dev guide.
- *Protocols* chapter-22 (markdown-trap): JSON-LD framing.
- Free-book chapter-00: the two-pillar value proposition with the three-benefits chain.
- Appendix J: web.dev citation.
- *Handbook*: no edits unless Tom directs.

### 3d. The Gathering and other surfaces

- Add the partnership-shape MeetKai claim to a canonical page if Tom answers question 2 in the affirmative.
- Add the four objections to `mx-site/the-gathering/draft-notes.html` external-standards-defer-to list as appropriate.
- Sponsor-facing pages stay vendor-neutral on both REGINALD and MeetKai per the audience-split rule.

### 3e. Voice consistency check

Read three matched passages back-to-back: deck slide; REGINALD landing page; *Protocols* chapter addition. Same voice, same product. Fix the manuscript if not — the deck and the REGINALD landing page are jointly canonical for voice on this pass.

## 9. Operational notes

- **Today is 7 May 2026.** CMS Summit Frankfurt is 12 May. The deck must be in BMV-meeting condition before any ripple work begins.
- **No AI author attribution.** Per the auto-memory rule, Maxine / Claude must never appear in author or contributor frontmatter, and no Co-Authored-By line on commits.
- **No em-dashes in authored HTML prose.** Markdown source allows them; HTML rendering does not.
- **British English in prose; international English in fields, code, JSON, metadata.**
- **Spell-check before any deliverable leaves Tom's hands.** MeetKai (capital M, K), REGINALD (all-caps), CogNovaMX, COG (all-caps as acronym).

---

*End of Phase 1 briefing. The Phase 2 interview is the next step.*
