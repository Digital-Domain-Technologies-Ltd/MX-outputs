---
title: "MX / REGINALD canonical voice notes — research pack"
description: "Voice and language reference assembled from the published REGINALD landing page, the machine-readiness position paper (HTML + cog + meta-cog), and five MX blog posts on mx.allabout.network. For the BMV investor-deck differentiation pass and the parallel manuscript update."
author: "Tom Cranstoun"
created: 2026-05-07
modified: 2026-05-07
status: draft
---

# MX / REGINALD canonical voice notes

Research pack assembled on 2026-05-07 for the BMV investor-deck differentiation pass and the parallel manuscript update. The canonical voice of the corpus lives on the published REGINALD landing page and the public MX blog. The deck and the books must inherit that voice precisely.

This note is a working reference, not a publication. Quotes are reproduced verbatim where the public source returned them verbatim; where the public extraction returned a summary instead, the entry is marked SUMMARY-LEVEL and the deck pass should re-fetch the page directly before lifting language.

## 1. Per-source notes

### 1.1 https://mx.allabout.network/reginald/ — REGINALD landing page

- **Audience.** CIOs, CMOs, Heads of Digital. Stated explicitly as "Audience: CIOs, CMOs, Heads of Digital."
- **Voice characteristics.** Direct, short declarative sentences. Reads as positioning copy, not marketing copy. No superlatives. The pairing line and the attestation-scope line are the page's spine.
- **Key phrasing to lift verbatim.**
  - "REGINALD is the public registry where documents are registered, cryptographically signed, and made verifiable by any machine on earth."
  - "MX makes content machine-readable; REGINALD makes it machine-trustworthy."
  - "The attestation is narrow and precise: this is what the owner published, unaltered. Origin and integrity only, not factual correctness, not editorial quality."
  - "Agents that read attested documents hallucinate less, because they have verified facts to cite rather than inferences to make."
  - "Fewer inference steps means lower token consumption and lower energy draw."
  - "EU AI Act, the European Accessibility Act, and digital-records legislation across multiple jurisdictions place documentation, logging, and verifiability obligations on the organisations they cover. MX and REGINALD do not grant compliance with any of these regulations; that remains a legal duty of the organisation. What they do is make the documentation the organisation must produce structured, machine-readable, tamper-evident, and verifiable on request."
  - "The Gathering ratifies the Machine Experience standard, including the contract fingerprinting note that defines how a document is canonicalised, hashed, and signed."
- **Backronym.** Not present on this page. The page describes REGINALD by function, not by acronym expansion.
- **DNA / pool framing.** Not present on this page.

### 1.2 https://mx.allabout.network/reginald/mx-machine-readiness.html — "Everyone is looking inward" position paper

- **Audience.** CIOs, CMOs, Heads of Digital. The page's job is to reframe the AI-readiness conversation those roles are already inside.
- **Voice characteristics.** Argumentative, structured, calm. Opens with a contrast (inward/outward), proceeds through industry framing, then to MX's distinct lens, then to the four-phase implementation. Uses metaphor sparingly but deliberately: cogs, pools, DNA, gates, mesh. Short declarative statements followed by an expansion sentence. Sequences of three (audit, publish, sign, watch). Italicised contrasts.
- **Key phrasing to lift verbatim.**
  - Opening: "Every framework being published across the industry (by the platform vendors, the consultancies, the standards bodies, the regulators) asks the same inward question. How do *we* use AI safely?"
  - "MX asks the question almost nobody is asking: how is our organisation being read, retrieved and represented by machines we will never meet, on behalf of buyers we will never see?"
  - "All of it sound. All of it necessary. All of it **inside the building.** None of it answers the question that now matters as much: *what are machines saying about you out there?*"
  - "The industry consensus prepares an organisation to *use AI well* inside its walls. MX prepares an organisation to *be read well* outside them."
- **MX vs GEO (verbatim).**
  - "A common misreading places MX in the same category as **Generative Engine Optimisation** (GEO) or **AI Engine Optimisation** (AEO). It is not."
  - "GEO asks how to increase the probability that a specific class of LLM-powered system cites a specific web page."
  - "**MX asks whether any machine can find any file in a corpus, confirm it is genuine, and know whether it is current**, regardless of which machine, which format, or which access pathway."
- **DNA / pool framing (verbatim).**
  - "**MX is the DNA a file carries when it leaves any pool**, so the next reader can answer the questions the originating system used to answer for it: what this is, who published it, whether it has been altered, whether it is current."
  - "A memory-pool architecture (an LLM-wiki, a vector store, a knowledge base) and MX are orthogonal layers, both useful, neither a substitute for the other."
- **Cog metaphor (verbatim).**
  - "AI is not *intelligent*. It is a **machine**, and machines, since the first water mill, have always run on cogs that *mesh*. Your signed cog turns one cog of a system you do not operate."
  - A cog is "a small set of declarations a file makes about itself, carried inside whatever format the file already uses: Markdown, HTML, PDF, YAML, JPEG XMP, MP3 ID3, MP4 sidecar, JSON. The declarations travel with the file."
- **Attestation scope (verbatim).**
  - "**REGINALD signs the *truth of a file*, not the truth of the world.**"
  - "A signed cog does not claim to be correct. It claims to be the file its author published, unaltered, at a stated moment."
  - "The signature itself lives in an external envelope referenced by the registry record; the cog body remains human-readable Markdown."
- **Regulatory positioning (verbatim).**
  - "On the Commission's reading of the EU AI Act, a US-based SaaS handling a single inbound enquiry from Munich is within scope."
  - "Article 50 transparency obligations, requiring identifiability of AI-generated content, apply on 2 August 2026 to providers and deployers alike."
  - "A signed PDF in a drawer cannot answer the question a regulator, a buyer or an auditor will ask in the moment of an AI-mediated decision: *did this content come from who you say it did, and has it been altered since?*"
- **REGINALD components on this page.**
  - **R:** "A public record of what was published, by whom, and when."
  - **N:** "Each cog carries a cryptographic signature using established standards. Tampering is detectable. Authorship is not deniable. Time of publication is provable."
  - **L:** "The signature is paired with discoverable metadata: purpose, audience, refers-to, update rules."
- **Accessibility (verbatim).**
  - "WCAG-compliant content is, in practice, more machine-readable. Machines and humans benefit from the same structural clarity."
  - "Accessibility is a requirement. Content properly structured for assistive technology is, almost without exception, content machines can also parse cleanly."
- **Four-phase implementation.** Audit. Publish. Sign. Watch.

### 1.3 https://mx.allabout.network/reginald/mx-machine-readiness.cog.md — machine-readable companion

SUMMARY-LEVEL extraction. The cog file describes the position paper's machine identity.

- `purpose: { kind: reference, subPurpose: position paper }`
- `summary:` "A framework arguing prevailing AI readiness is inward-facing, introducing MX and REGINALD as solutions for open-web machine readability."
- `audience: humans, machines`
- `contentType: position-paper`
- Five reading contexts named in the body: training ingestion, RAG retrieval, search indexing, browser agents, voice assistants.
- Four-phase implementation: Audit machine visibility surfaces; Publish a cog (Community Owned Governance System); Sign with REGINALD verification; Monitor external machine citations.
- REGINALD deployment options: third-party managed (CogNovaMX); private cloud / datacenter; air-gapped on-premises.
- Custodians: MX framework stewarded by The Gathering; REGINALD is a CogNovaMX product (it implements, it does not define); publisher is Digital Domain Technologies Ltd.
- Three MX principles named: design for both humans and machines simultaneously; WCAG accessibility as foundational requirement; reduce computational and energy costs.
- EU AI Act Article 50 (2 August 2026) and the Digital Omnibus proposal both named.
- Penalty structure stated: up to EUR 35M or 7 percent global turnover for prohibited practices.

### 1.4 https://mx.allabout.network/reginald/mx-machine-readiness.meta.cog.md — meta-cog companion

SUMMARY-LEVEL extraction. The meta-cog walks the construction choices of the cog above. Useful for the deck because it surfaces the field-level vocabulary.

- `title: "Reading the position-paper cog — a worked example of MX cog construction"`
- `contentType: meta-cog`
- `purpose: { kind: reference, subPurpose: explanatory companion }`
- `trainingDataPolicy: permitted-with-attribution`
- `partOf: mx-machine-readiness`
- `x-mx-cog-type: info`
- Stewardship block: `steward: Tom Cranstoun`, `accountableContact: info@cognovamx.com`, `legalEntity: Digital Domain Technologies Ltd`, `brand: CogNovaMX`.
- Three conformance levels named: Core (Tier A), Standard (Tier B), Complete (Tier C).
- D2 contract-fingerprinting note (verbatim phrasing from the body): "Bumping the version is a substantive editorial act; re-version means re-sign."
- D5 purpose-as-duple note: "Purpose is now a duple — `kind` (controlled enum) plus `subPurpose` (free-form genre marker)."
- D6 stewardship-consolidation note: replaces earlier separate `mx:maintainer` / `mx:ownership` fields with `steward`, `accountableContact`, `legalEntity`, `brand`.
- Public extension naming uses kebab-case: `x-mx-reginald-service`, `x-mx-reginald-operator`. Private extensions use the `x-mx-p-` prefix.

### 1.5 https://mx.allabout.network/blog/web-is-just-the-start.html — "The web is just the start"

PARTIAL extraction. The deck pass should re-fetch this page directly before lifting language, because most of the requested elements were not visible in the summary.

- **Audience.** General MX-curious audience; framed against an existing Google developer-platform piece on agent UX.
- **Voice characteristics.** Conversational opening, then short declarative sentences. Frames the problem as a document problem, not a web problem.
- **Key phrasing observed.**
  - Opening: "Google's developer platform published a guide to AI agent UX."
  - Definition: "Machine Experience (MX) is the practice of making anything you publish ... readable by every machine that consumes it, so no machine has to guess."
  - Cog definition: "A small set of declarations a document makes about itself ... answers the ten questions directly, so no machine has to infer them."
  - Spine: "The challenge is not a web problem. It is a document problem."
- **Three-benefits chain.** Not surfaced by the summary fetch. Re-fetch before lifting.
- **Contract fingerprinting / REGINALD backronym / DNA / pool / regulatory.** Not surfaced by the summary fetch. Re-fetch before lifting; flagged as a candidate gap if genuinely absent.

### 1.6 https://mx.allabout.network/blog/many-agents-one-metadata-layer.html — "Many agents, one metadata layer"

PARTIAL extraction. The deck pass should re-fetch this page directly before lifting language.

- **Audience.** Builders, integrators, and the buyers who fund them; written against the proliferation of agent platforms.
- **Voice characteristics.** Pattern-recognition opener, then a clear redirect, then a five-primitive list.
- **Key phrasing observed.**
  - Headline: "Many Agents, One Metadata Layer."
  - Opening: "Every week another agent platform launches. Every one of them is rebuilding the same context-discovery layer from scratch."
  - Position: "The fix is not another agent. The fix is MX everywhere."
  - "The substrate underneath is not in good shape."
  - Five discovery primitives, named: "Identity: what is this thing, and is it the current version. Provenance: where did it come from, who made it, when. Lifecycle: is the content still authoritative or has it been superseded. Affordances: what may an agent do with the content, and what should it do next. Semantics: what is this about, in machine-resolvable terms."
  - REGINALD reference (functional, not backronym): "the public registry where documents are signed and registered so provenance is verifiable."
- **Three-benefits chain.** The summary notes the post references "three vectors (inference cost, hallucinations, regulatory exposure)" thematically. Re-fetch before lifting verbatim.
- **MeetKai comparison.** Not surfaced by the summary fetch. Re-fetch before concluding it is absent.

### 1.7 https://mx.allabout.network/blog/content-that-manages-itself.html — "Content that manages itself"

PARTIAL extraction. The deck pass should re-fetch this page directly before lifting language.

- **Audience.** Anyone who has worked inside a CMS, framed at decision-makers and practitioners.
- **Voice characteristics.** First-person, confessional opening. Short declarative sentences. Direct address. Technical precision paired with business framing.
- **Key phrasing observed.**
  - Thesis: "What if the content carried its own instructions?"
  - Opening: "the dirty secret of every CMS I've ever worked with is this: the content doesn't manage anything. Humans do all the managing."
  - Mechanism: self-managing content uses YAML frontmatter and Markdown to embed metadata directly in documents so machines can parse procedural documents autonomously.
  - Voice samples: "The content just sits there." "That was fine when humans were the only audience. It's not fine any more."
- **Three-benefits chain / contract fingerprinting / REGINALD backronym / DNA / pool / GEO.** Not surfaced by the summary fetch. Re-fetch before lifting; this post may be deliberately scoped narrowly to the CMS critique.

### 1.8 https://mx.allabout.network/blog/geo-is-a-tactic-mx-is-the-specification.html — "GEO is a tactic, MX is the specification"

This page returned the highest density of competitive language and is the strongest single source for the deck's MX-vs-GEO slide.

- **Audience.** Marketers and content leaders who have heard "GEO" and need to understand why MX sits underneath.
- **Voice characteristics.** Three-beat structures (SEO / GEO / MX). Building-trade analogy as the metaphorical spine. Tight, didactic.
- **Key phrasing to lift verbatim.**
  - Headline: "GEO is a tactic. MX is the specification."
  - Hook: "SEO got you found. GEO gets you understood. MX gets you used."
  - "SEO: Optimise pages so search engines can find them and rank them."
  - "GEO: Optimise pages so AI systems will cite them in generated answers."
  - "MX: Structure content so any machine, in any reading context ... can act on it."
  - Attestation: "They can be notarised through Reginald ... so that downstream consumers ... can verify they are genuine, unaltered, and authored by who they claim to be."
  - Hallucination chain: "An agent that reads a Reginald-registered document hallucinates less — it has verified origin and version to cite rather than gaps to fill."
  - Token chain: "Fewer inference steps means lower token consumption and lower energy draw across AI infrastructure."
  - Regulatory chain: "the requirement on organisations to demonstrate the provenance of content that AI acted on" — MX and Reginald do not grant compliance; they make the documentation the organisation must produce structured, machine-readable, tamper-evident, and verifiable on request.
  - DNA framing: "MX is the DNA a file carries when it leaves any pool, so each of those reading contexts gets the same answer."
  - Building analogy: GEO is surface treatment; "MX is that specification for content."

### 1.9 https://mx.allabout.network/blog/what-is-machine-experience.html — "What is Machine Experience"

PARTIAL extraction. The deck pass should re-fetch this page directly to confirm the boundaries.

- **Audience.** First-time visitors to MX, and anyone needing the one-paragraph definition.
- **Voice characteristics.** Definitional, plain. Short declarative cadence with longer explanatory passages.
- **Key phrasing to lift verbatim.**
  - "Machine Experience (MX) is the practice of making anything you publish - a video, a podcast, a PDF, an image, a web page - readable by every machine that consumes it, so no machine has to guess."
  - "Machine Experience (MX) is the practice of transferring complete context about your website to AI machines so they don't have to guess, infer, or hallucinate what your content means."
  - "It's not about making your site look good. It's about making your site understood."
  - Invisible-users frame: AI agents act on behalf of humans, and most of those agent visits are invisible to your analytics. "Both outcomes cost you conversions you'll never see in your analytics."
  - DNA reference: phrase "DNA a file carries" appears once; portability principle named.
- **REGINALD backronym / contract fingerprinting / three-benefits chain / GEO / MeetKai.** Not surfaced by the summary fetch. Re-fetch before lifting.

## 2. Consolidated voice rules

The voice that runs through the canonical sources is a single voice. The deck and the manuscripts need to sound like one author. These are the rules the corpus follows.

### Sentence shape

- Short declarative spine, with one expansion sentence after each landing line.
- Three-beat structures used with intent: SEO / GEO / MX. Audit / Publish / Sign / Watch. Identity / Provenance / Lifecycle / Affordances / Semantics. Origin / Integrity / Time. Three is the rhythm; four is the implementation list.
- Contrast frames: inward / outward, inside the building / out there, look good / be understood, find / cite / use, the truth of a file / the truth of the world.
- Italicised contrasts within a sentence to mark the pivot: "*use AI well*" vs "*be read well*".
- Questions are used to name an unmet industry challenge, not to soften an argument. Questions get answered, never left rhetorical.
- Lists of named primitives are the workhorse paragraph. Five primitives, three benefits, four phases, three deployment modes.

### Vocabulary the corpus owns

- Cog. Mesh. Pool. DNA. Carrier. Notarise. Attest. Provenance. Integrity. Origin. Lifecycle. Affordance. Semantic.
- Machine Experience (always capitalised in definition lines).
- REGINALD in all caps in public-facing prose.
- Reginald (mixed case) is acceptable inside canon files where it appears that way; the brand-style rule is for landing copy and marketing surfaces.
- "Machine-readable" and "machine-trustworthy" as a paired construction.
- "Open framework" for MX. "Proprietary signing implementation" for REGINALD operated by CogNovaMX.

### Vocabulary the corpus avoids

- Superlatives. No "best", "leading", "world-class", "revolutionary", "game-changing".
- "AI-powered" as a compliment.
- Vendor names as shorthand for whole categories. The corpus says "a specific class of LLM-powered system", not "ChatGPT".
- Promises about specific platforms: MX never promises a Google ranking, a ChatGPT citation, a Perplexity surface.
- "Solution" used as a noun. The corpus describes mechanisms.
- AI as an actor. AI is described as a machine that runs on cogs. It is not personified.
- Em-dashes in HTML carrier prose (project rule). The blog uses spaced hyphen, comma, or rephrase. The deck must follow the same rule.

### What the voice is, in one line

Calm, structural, technically precise, philosophically grounded, never breathless. It treats the reader as a peer who already knows the web, who is being shown a layer underneath the one they already understand.

## 3. Verbatim quotes by topic

These are the lines the deck and the manuscripts should lift verbatim where the topic appears in the slide flow.

### Attestation scope (narrow, origin and integrity, never editorial)

- "MX makes content machine-readable; REGINALD makes it machine-trustworthy." [REGINALD landing]
- "The attestation is narrow and precise: this is what the owner published, unaltered. Origin and integrity only, not factual correctness, not editorial quality." [REGINALD landing]
- "REGINALD signs the *truth of a file*, not the truth of the world." [Machine readiness]
- "A signed cog does not claim to be correct. It claims to be the file its author published, unaltered, at a stated moment." [Machine readiness]
- "They can be notarised through Reginald ... so that downstream consumers ... can verify they are genuine, unaltered, and authored by who they claim to be." [GEO blog]

### Three-benefits chain

1. Hallucination reduction:
   - "Agents that read attested documents hallucinate less, because they have verified facts to cite rather than inferences to make." [REGINALD landing]
   - "An agent that reads a Reginald-registered document hallucinates less — it has verified origin and version to cite rather than gaps to fill." [GEO blog]
2. Resource efficiency:
   - "Fewer inference steps means lower token consumption and lower energy draw." [REGINALD landing]
   - "Fewer inference steps means lower token consumption and lower energy draw across AI infrastructure." [GEO blog]
3. Regulatory positioning:
   - "EU AI Act, the European Accessibility Act, and digital-records legislation across multiple jurisdictions place documentation, logging, and verifiability obligations on the organisations they cover. MX and REGINALD do not grant compliance with any of these regulations; that remains a legal duty of the organisation. What they do is make the documentation the organisation must produce structured, machine-readable, tamper-evident, and verifiable on request." [REGINALD landing]
   - "the requirement on organisations to demonstrate the provenance of content that AI acted on; attestation is the layer that makes the required documentation verifiable, not a compliance grant in itself." [GEO blog]

### Contract fingerprinting

- "The Gathering ratifies the Machine Experience standard, including the contract fingerprinting note that defines how a document is canonicalised, hashed, and signed." [REGINALD landing]
- "Bumping the version is a substantive editorial act; re-version means re-sign." [Meta-cog]
- "The signature itself lives in an external envelope referenced by the registry record; the cog body remains human-readable Markdown." [Machine readiness]

### REGINALD backronym

- The fully spelled-out backronym **"Registry for Genuine Information, Notarised Authentication, and Legitimate Documentation"** does not appear verbatim on any of the nine canonical sources fetched.
- The closest construction on the canonical site is the three-component description in the position paper, which expands the brand by component, not by phrase:
  - **R:** "A public record of what was published, by whom, and when."
  - **N:** "Each cog carries a cryptographic signature using established standards. Tampering is detectable. Authorship is not deniable. Time of publication is provable."
  - **L:** "The signature is paired with discoverable metadata: purpose, audience, refers-to, update rules."
- **Resolved (2026-05-15): the backronym is now on the canonical voice surface.** The full phrase has been promoted to the REGINALD landing page as a visible letter-block under the intro paragraph and lifted into the page meta description, OpenGraph and Twitter card descriptions, and JSON-LD `CollectionPage.description` and `alternateName`. Deck and manuscripts may lift the backronym verbatim.

### MX vs SEO / GEO / JSON-LD / Google / MeetKai

- SEO / GEO / MX, three-beat (verbatim, GEO blog):
  - "SEO got you found. GEO gets you understood. MX gets you used."
  - "SEO: Optimise pages so search engines can find them and rank them."
  - "GEO: Optimise pages so AI systems will cite them in generated answers."
  - "MX: Structure content so any machine, in any reading context ... can act on it."
  - "GEO is a tactic. MX is the specification."
- MX vs GEO (verbatim, machine readiness):
  - "A common misreading places MX in the same category as **Generative Engine Optimisation** (GEO) or **AI Engine Optimisation** (AEO). It is not."
  - "GEO asks how to increase the probability that a specific class of LLM-powered system cites a specific web page."
  - "**MX asks whether any machine can find any file in a corpus, confirm it is genuine, and know whether it is current**, regardless of which machine, which format, or which access pathway."
- Google framing (verbatim, web-is-just-the-start): "Google's developer platform published a guide to AI agent UX." MX is positioned as one layer underneath that guide, not as a competitor to it.
- JSON-LD: no head-to-head competitive line surfaced on the public site in the nine fetches. The corpus treats JSON-LD as a carrier MX uses, not a competitor; the deck should follow this. Schema.org and JSON-LD are external standards MX defers to.
- MeetKai: no explicit comparison surfaced in any of the nine fetches. Treat MeetKai positioning as an open item for the deck pass.

### DNA framing

- "**MX is the DNA a file carries when it leaves any pool**, so the next reader can answer the questions the originating system used to answer for it: what this is, who published it, whether it has been altered, whether it is current." [Machine readiness]
- "MX is the DNA a file carries when it leaves any pool, so each of those reading contexts gets the same answer." [GEO blog]
- "DNA a file carries" appears once on the What-is-MX page (portability principle).

### Pool corrective (orthogonal layers, never substitutes)

- "A memory-pool architecture (an LLM-wiki, a vector store, a knowledge base) and MX are orthogonal layers, both useful, neither a substitute for the other." [Machine readiness]
- The corrective is currently single-source. The deck should treat this line as the canonical phrasing. Manuscripts that touch on memory pools should adopt the same construction.

## 4. Gaps and inconsistencies between sources

These are the places where the canonical voice has drifted, has not yet been written, or returned only summary text from the public fetch. The deck pass and the manuscript pass should land each item before they go to print.

1. **REGINALD backronym promoted to the canonical surface (resolved 2026-05-15).** The full phrase "Registry for Genuine Information, Notarised Authentication, and Legitimate Documentation" now lives on the REGINALD landing page as a visible letter-block, with the meta description, OpenGraph, Twitter, and JSON-LD descriptions updated in step. The deck and manuscripts may lift the backronym verbatim; the canonical surface carries it first. The position paper's three-component R/N/L expansion remains available as a complementary, deeper read.

2. **Brand casing inconsistency.** REGINALD is brand-style all-caps on the landing page and on the deck rule. "Reginald" (mixed case) appears in the GEO blog and in the canon files. The MEMORY rule is clear (`REGINALD` in public prose, mixed case allowed in canon). The deck must use REGINALD throughout. The blog corpus is partially still on mixed case; not the deck's job to fix, but worth flagging for a future blog sweep.

3. **Three-benefits chain coverage is uneven.** The full chain (hallucinations + tokens + regulation) lands cleanly on the REGINALD landing and the GEO blog. The other seven sources name one or two of the three but not all three. The deck must carry all three on one slide; the manuscripts should carry all three together wherever the regulatory point lands.

4. **Contract fingerprinting is named, not yet explained on a public canonical page.** The phrase "contract fingerprinting" appears once on the REGINALD landing as a reference to the Gathering note. The position paper carries the mechanism (canonicalised, hashed, signed; external signature envelope; re-version means re-sign) but does not use the phrase "contract fingerprinting". The deck should pair the phrase with the mechanism the first time it appears, then drop the explanation.

5. **MeetKai comparison absent from the canonical surface.** None of the nine sources name MeetKai. If the deck needs a MeetKai differentiator, it has to be drafted from scratch and then pushed onto a canonical page so the voice stays in step. Recommend adding to the GEO blog or to the machine-readiness page.

6. **"Web is just the start" and "What is MX" extractions returned summaries, not verbatim.** The WebFetch tool compressed both pages. Most of the requested elements were not surfaced. The deck pass should `curl` these two pages and re-read directly before declaring any element absent. The two pages are likely to carry more of the three-benefits chain and the regulatory framing than the summary suggested.

7. **"Content that manages itself" is scoped narrowly to the CMS argument.** The summary suggests this post is genuinely a single-thesis piece, not a compressed extraction. The deck should not expect REGINALD or regulatory language from this source. Treat as a voice-only sample (first-person, confessional, short declarative cadence).

8. **DNA / pool framing concentrated on two pages.** The DNA line is canonical, but it lives only on the machine-readiness paper and the GEO blog. The pool corrective lives only on the machine-readiness paper. If the deck leans on DNA framing, it is leaning on a pattern that exists on two surfaces. Recommend reinforcing DNA framing on the REGINALD landing page so the deck and the canonical surface match.

9. **Audience framing is consistent.** All four position-paper-tier sources name CIOs, CMOs, Heads of Digital. The deck should keep the same audience tag on the differentiator slide.

10. **Cog metaphor coverage.** The position paper carries the cog metaphor verbatim ("AI is not *intelligent*. It is a **machine** ... cogs that *mesh*"). The other sources name cogs without the metaphor. The deck should carry the full metaphor line at the moment cogs are first introduced, then use the noun without further metaphor for the rest of the document.
