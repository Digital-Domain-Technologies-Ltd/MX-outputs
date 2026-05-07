---
# ─────────────────────────────────────────────────────────────
# MX-compliant cog file
#
# Follows the vocabulary defined by The Gathering's draft notes
# in mx-shared-gathering on GitHub. Reflects the four locked
# decisions of the 2026-05-07 review-fix round:
#
#   D1  Cog ladder renamed Tier A/B/C (was Level 1/2/3)
#   D2  version moved into default fingerprint contract
#   D5  mx:purpose now a duple (kind + subPurpose)
#   D6  stewardship object replaces author/maintainer/ownership
#       (with originator added at Zone 1)
#
# The five normative notes referenced:
#
#   Note 1  Field Definition Pattern        governs all field shapes
#   Note 2  Core Metadata                   Zone 1 / Zone 2 + levels
#   Note 3  Cogs                            the optional cog layer
#   Note 4  Extensions                      x-mx-* / x-mx-p-*
#   draft-contract-fingerprinting           contractFields + metadataFields
#
# Two-zone model:
#   Zone 1  top-level identity (title, description, originator,
#           author, created, modified, version, schema,
#           validatesAgainst). No mx: prefix.
#   Zone 2  operational metadata under mx: namespace.
#
# Conformance levels per Note 2 §2.1 (document ladder):
#   Level 1 (MX Core)      all MUST fields
#   Level 2 (MX Standard)  all MUST + SHOULD fields
#   Level 3 (MX Complete)  all MUST + SHOULD + MAY fields
#
# Cog tiers per Note 3 §2.1 (separate ladder, post-D1 rename):
#   Tier A (MX Cog Core)      .cog.md file with mx:partOf
#   Tier B (MX Cog Standard)  + buildsOn + cogHeader/magic-header
#   Tier C (MX Cog Complete)  + dependencies, refersTo, extensions
#
# This cog claims Note 2 Level 3 + Note 3 Tier C.
# ─────────────────────────────────────────────────────────────


# ── ZONE 1 · Identity (Note 2 §5) ────────────────────────────
title: "Everyone is looking inward — A position paper on MX & REGINALD"
description: "Argues that the AI-readiness consensus is inward-facing and misses the outward question MX exists to answer: how is our organisation being read, retrieved and represented by machines we will never meet?"

# D6 · originator is the immutable Zone 1 creator. author is
# retained as an alias for one major version per the U3
# deprecation policy.
originator: "Tom Cranstoun"
author: "Tom Cranstoun"

created: 2026-05-07
modified: 2026-05-07
version: "2.2"

# Mandatory when signed (Note 8 §4.3). Names the schema this cog
# claims contract conformance against, and the validators it
# claims to pass at sign time.
schema: ./schemas/mx-position-paper.v1.yaml
validatesAgainst:
  - cog.meta.v1
  - mx.position-paper.v1


# ── ZONE 1 · Cog header (Note 3 §5) ──────────────────────────
# Frontmatter equivalent of the byte-zero magic-header HTML
# comment. Identifies this file as a cog to YAML-only consumers.
cogHeader:
  version: v1
  spec: https://github.com/ddttom/mx-shared-gathering/blob/main/draft-cogs.md
  runtime: https://github.com/ddttom/mx-shared-gathering


# ── ZONE 1 · Contract fingerprint scope (Note 8 §4) ──────────
# Names the top-level keys covered by the signature (when this
# cog is signed) and those explicitly excluded. Disjoint arrays.
# The signature itself lives in an external envelope (JWS, COSE)
# and is out of scope for this file per Note 8 §3.2.
#
# D2 · version is now in contractFields. Bumping the version
# is a substantive editorial act; a signature that survived
# version bumps would let the same signed bytes be republished
# unchanged as v1, v2, v3. Re-version means re-sign.
contractFields:
  - title
  - description
  - version
  - schema
  - validatesAgainst
  - cogHeader
  - mx
metadataFields:
  - created
  - modified
  - originator
  - author
  - contractFields
  - metadataFields


# ── ZONE 2 · Operational metadata (Note 2 §6) ────────────────
mx:
  # Lifecycle (§6.1)
  status: published

  # Classification (§6.9, free-form)
  contentType: position-paper

  # Audience (§6.3, controlled enum)
  audience: [humans, machines]

  # Discovery (§6.2)
  tags:
    - machine-experience
    - mx
    - reginald
    - the-gathering
    - cog
    - machine-readiness
    - provenance
    - eu-ai-act

  # D5 · Why this document exists. Duple form: a controlled
  # high-level kind, plus a free-form sub-purpose that names
  # the genre. Catches position-paper / press-release /
  # regulatory-filing / academic-paper without re-opening
  # the enum each time.
  purpose:
    kind: reference
    subPurpose: position paper

  # SPDX licence (§6.5)
  license: proprietary

  # D6 · Stewardship as a single nested object. originator
  # lives at Zone 1 (immutable identity, paired with created).
  # The four inner fields cover the full real-world role set:
  # the human or team currently maintaining the document, the
  # contact for questions, the legal entity, and the brand
  # under which this work is published. author / maintainer /
  # ownership are aliases for one major version per U3.
  stewardship:
    steward: "Tom Cranstoun"
    accountableContact: "info@cognovamx.com"
    legalEntity: "Digital Domain Technologies Ltd"
    brand: "CogNovaMX"

  # Subject area (§6.8)
  x-mx-domain: "machine-experience"

  # Reading level (§6.12)
  readingLevel: advanced

  # Operational guidance for agents (§6.13)
  runbook: >
    A position paper. Read body for argument; consult cog
    relationships (mx:partOf, mx:buildsOn, mx:dependencies,
    mx:refersTo) for context graph; treat fixed_anchors in
    x-mx-temporal as authoritative dates rather than relative
    phrasing in body prose.

  # ── Discovery and lifecycle (Note 2 §7a) ──
  canonicalUri: https://digitaldomaintechnologies.com/papers/mx-machine-readiness.cog.md

  # Earlier versions (§7a.1)
  supersedes: mx-machine-readiness@2.1

  # One-to-two-sentence machine summary (§7a.4, MUST at Level 2)
  summary: >
    A position paper from CogNovaMX arguing that prevailing AI
    readiness frameworks are inward-facing and miss the outward
    question of how organisations are read by machines on the
    open web. Introduces the MX framework and REGINALD as one
    signing implementation of The Gathering's contract
    fingerprinting standard.

  # Topics, as Wikidata QIDs where stable identifiers exist (§7a.4)
  topic:
    - artificial-intelligence
    - eu-ai-act
    - content-provenance
    - machine-readability

  # Standards declared (§7a.4, MUST at Level 2)
  conformsTo:
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-field-pattern.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-core-metadata.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-cogs.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-extensions.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-contract-fingerprinting.md
    - https://www.w3.org/TR/WCAG21/
    - https://schema.org/Article
    - https://www.dublincore.org/specifications/dublin-core/dcmi-terms/
    - https://c2pa.org/specifications/specifications/2.0/
    - https://www.w3.org/TR/did-core/
    - https://www.w3.org/TR/vc-data-model/
    - https://eur-lex.europa.eu/eli/reg/2024/1689

  # Speakable summary for voice agents (§7a.4)
  speakable: >
    A position paper from CogNovaMX. Argues that AI readiness
    work has focused inward on safe adoption and missed the
    outward question of how organisations are read by machines
    on the open web. Introduces the MX framework and REGINALD.

  # Consumption policy (§7a.5, MUST at Level 2)
  trainingDataPolicy: permitted-with-attribution
  doNotIndex: false

  # Lifecycle dates (§7a.2)
  reviewBy: 2026-11-07

  # Action affordances (§7a.3)
  relatedDocs:
    - https://mx.allabout.network/about/about.html
    - https://mx.allabout.network/blog/web-is-just-the-start.html
    - https://digitaldomaintechnologies.com/papers/mx-machine-readiness.html
    - https://digitaldomaintechnologies.com/papers/mx-machine-readiness.meta.cog.md
  supportContact: "info@cognovamx.com"

  # ── Cog structural fields (Note 3 §6) ──
  partOf: mx-position-papers
  buildsOn: []
  dependencies:
    - name: tg-note-1-field-pattern
      kind: external
      reason: Defines the field-definition shape every other Gathering note follows.
    - name: tg-note-2-core-metadata
      kind: external
      reason: Defines Zone 1 / Zone 2 vocabulary used by this cog.
    - name: tg-note-3-cogs
      kind: external
      reason: Defines the cog layer (partOf, buildsOn, dependencies, refersTo, cogHeader).
    - name: tg-note-4-extensions
      kind: external
      reason: Governs the x-mx-* extension namespace this cog uses for REGINALD fields.
    - name: tg-note-8-contract-fingerprinting
      kind: external
      reason: Defines contractFields and metadataFields used at the top level.
  refersTo:
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-provenance.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-carrier-formats.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-workflow-contracts.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-agent-directory-discovery.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-document-accessibility.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-mx-not-geo.md
    - https://tg.community
    - https://reginald.allabout.com
    - https://digitaldomaintechnologies.com/papers/mx-machine-readiness.meta.cog.md

  # ── Cog classification (Note 3 §6.5) ──
  # These fields live in vendor-extension space (x-mx-*) per
  # Note 3 §6.5 — the bare names are reserved.
  x-mx-cog-id: mx-machine-readiness
  x-mx-cog-type: info
  x-mx-cog-category: mx-position-paper

  # ── REGINALD signing service (vendor extension, Note 4 §6.3) ──
  # Public extension fields are flat, kebab-case, at Zone 2.
  # See Note 4 §10.2: "Use kebab-case. Extension field names MUST
  # use kebab-case (unlike standard fields which use camelCase
  # in YAML)."
  x-mx-reginald-service: REGINALD
  x-mx-reginald-operator: CogNovaMX
  x-mx-reginald-registry-record: https://reginald.allabout.com/r/ddt/papers/mx-machine-readiness
  x-mx-reginald-deployment: third-party-managed
  # deployment values: third-party-managed | private | air-gapped

  # ── Temporal stance (vendor extension) ──
  # Not yet a standard field. Carried under x-mx-temporal-* until
  # it is either ratified by The Gathering or formalised in the
  # Provenance note (Note 5). Each entry uses kebab-case per Note 4.
  x-mx-temporal-stance: evergreen
  x-mx-temporal-anchors:
    - id: eu-ai-act-entered-force
      label: "EU AI Act entered into force"
      date: 2024-08-01
      jurisdiction: EU
      regulation: Regulation (EU) 2024/1689
      authoritative-source: https://eur-lex.europa.eu/eli/reg/2024/1689
      lifecycle-status: passed

    - id: eu-ai-act-prohibitions-and-literacy
      label: "EU AI Act, prohibited practices and AI literacy obligations applicable"
      date: 2025-02-02
      jurisdiction: EU
      regulation: Regulation (EU) 2024/1689
      lifecycle-status: passed
      affects: All providers and deployers, regardless of risk tier.

    - id: eu-ai-act-gpai-applicable
      label: "EU AI Act, GPAI model obligations applicable"
      date: 2025-08-02
      jurisdiction: EU
      regulation: Regulation (EU) 2024/1689
      lifecycle-status: passed
      affects: General-purpose AI model providers.

    - id: eu-ai-act-article-50-transparency
      label: "EU AI Act Article 50, transparency for AI-generated content"
      date: 2026-08-02
      jurisdiction: EU
      regulation: Regulation (EU) 2024/1689, Article 50
      authoritative-source: https://eur-lex.europa.eu/eli/reg/2024/1689
      affects: >
        Providers of generative AI must ensure AI-generated content
        is identifiable. Certain content (deep fakes, AI-generated
        text published to inform the public on matters of public
        interest) must be clearly and visibly labelled. Deployers
        of chatbots must inform users they are interacting with AI.
      omnibus-status: >
        Article 50 transparency obligations are NOT among the
        provisions the Digital Omnibus proposal would defer.
        Plan to this date as fixed.

    - id: eu-ai-act-broad-enforcement
      label: "EU AI Act, broad enforcement of high-risk obligations"
      date: 2026-08-02
      jurisdiction: EU
      regulation: Regulation (EU) 2024/1689
      affects: >
        High-risk AI systems under Annex III: documentation,
        logging, transparency, human oversight, accuracy and
        robustness obligations. Penalties become enforceable.
      omnibus-status: >
        The Digital Omnibus (Commission proposal, 19 November 2025)
        would defer this to 2 December 2027. As of the latest
        publication of this cog, trilogue negotiations had not
        concluded. Plan to the original date until the Omnibus
        is formally adopted.

    - id: eu-ai-act-high-risk-product-embedded
      label: "EU AI Act, high-risk AI in regulated products"
      date: 2027-08-02
      jurisdiction: EU
      regulation: Regulation (EU) 2024/1689
      affects: >
        High-risk AI systems embedded into products already
        regulated under EU sectoral law (medical devices,
        machinery, toys etc.). Extended transition.
      omnibus-status: >
        The Digital Omnibus would defer this to 2 August 2028.

  x-mx-temporal-computed-fields:
    - field: time-remaining-to-article-50
      derived-from: eu-ai-act-article-50-transparency
      compute: anchor.date minus reader.now, in days
      states:
        before: "{n} days remaining"
        on:     "in force today"
        after:  "in force since {n} days ago"
      rendered-in: HTML alternate, .countdown[data-target] panel

  x-mx-temporal-prose-guidance:
    - Do not write "today", "this year", "this week", "currently",
      "right now" or other present-moment deictics into the prose.
    - Refer to fixed anchors by their date, not by their distance
      from publication. Prefer "2 August 2026" to "in three months".
    - When making claims that depend on a temporal threshold,
      prefer steady-state framings ("increasingly", "is now")
      over progress framings ("about to", "just starting").
    - The HTML alternate carries the live countdown widget. The
      cog body must not duplicate that widget's computed values.

  # ── Provenance disclosure (vendor extension pending Note 5) ──
  # Until the Provenance note is ratified, attribution beyond
  # author is carried under x-mx-prov-* extension fields.
  x-mx-prov-publisher: CogNovaMX
  x-mx-prov-publisher-legal-name: Digital Domain Technologies Ltd
  x-mx-prov-publisher-jurisdiction: United Kingdom
  x-mx-prov-authored-by: human
  x-mx-prov-ai-assistance: editorial-and-design
  x-mx-prov-confidence-level: argued-position
  x-mx-prov-review-status: pre-review
---

# Everyone is looking inward.

A position paper on MX and REGINALD by Tom Cranstoun.

Every framework being published across the industry — by the platform vendors, the consultancies, the standards bodies, the regulators — asks the same inward question. *How do we use AI safely?* MX asks the question almost nobody is asking: *how is our organisation being read, retrieved and represented by machines we will never meet, on behalf of buyers we will never see?*

## The whole industry is having the same conversation.

Pick any major framework on the table — from a software vendor, a Big Four advisory, a national standards body, a regulator. They differ in emphasis. They share a frame. The frame is the building.

- **Platform vendors:** "Adopt our AI responsibly. Train your people. Govern your prompts. Evaluate your suppliers."
- **Big Four advisory:** "Assess your readiness. Pilot use cases. Scale adoption. Measure ROI and risk together."
- **Standards bodies:** "Manage AI risk inside the lifecycle. Document the model. Audit the deployment. Govern the system."
- **Regulators:** "Classify the AI you operate. Disclose the AI you use. Remediate the AI you deploy."

All of it sound. All of it necessary. All of it inside the building. None of it answers the question that now matters as much: *what are machines saying about you out there?*

## The two lenses.

**The industry consensus — inward.** Inside the organisation: governance, training, vendor evaluation, monitoring, risk management. The boundary is the perimeter. The audience is your own staff. The question is: *Are our people, vendors and policies ready for the AI we are buying?*

**The MX lens — outward.** Outside the organisation: the five reading contexts — training ingestion, RAG retrieval, search indexing, browser agents, voice and LLM assistants. They quote your prices, summarise your policies and recommend you to buyers you will never meet. The boundary is the open web. The question is: *When a machine quotes us, can we prove the words came from us — and have not been altered since?*

### MX is not GEO.

A common misreading places MX in the same category as Generative Engine Optimisation (GEO) or AI Engine Optimisation (AEO). It is not. The questions are different, and so are the answers.

GEO asks how to increase the probability that a specific class of LLM-powered system cites a specific web page. It is a marketing optimisation, focused on a single channel and a single moment of consumption. MX asks whether any machine can find any document in a corpus, verify it is genuine, and know whether it is current — regardless of which machine, which format, or which access pathway.

The implication is structural. A document marked up for GEO has been tuned for one kind of reader. A document made MX-compliant is interpretable in isolation, by every kind of reader, with provenance and currency intact even when the document has been copied, summarised, or extracted from its original site.

- **GEO scope.** One channel — LLM citation. One format — web pages. One outcome — probability of being cited.
- **MX scope.** Any machine — training pipelines, RAG retrievers, search indexers, browser agents, voice assistants. Any format — markdown, HTML, PDF, XMP, code. Three outcomes — findability, genuineness, currency.

## Part one — the four phases of machine readiness.

### Phase 01 — Audit how machines see you.

Inward frameworks audit governance, infrastructure and AI literacy. MX adds an outward audit: the surfaces — pages, feeds, schemas, robots files, documentation — that machines crawl, ingest and quote.

Most organisations have no inventory of how they appear to machines. They cannot answer simple questions: which pages are in Common Crawl? What does our `llms.txt` declare? Are our prices in JSON-LD? Does our schema match our HTML? Can a retrieval agent get an answer from our site without inventing one?

Actions:
- Map the five reading contexts.
- Test the easy wins: `llms.txt` correct MIME type, sitemap inclusion.
- Treat WCAG accessibility as foundation — it is, in practice, the same problem as machine readability.

### Phase 02 — Publish a cog.

Inward frameworks pilot use cases. MX pilots a cog — a Community Owned Governance System: a small set of declarations a document makes about itself, carried inside whatever file format the document already uses. Markdown, HTML, PDF, YAML.

One cog is enough to begin. Pick a high-stakes document — a price page, a product specification, a regulatory disclosure — and republish it as a cog.

Actions:
- Choose one high-cost-of-error document.
- Publish it as a cog with frontmatter declaring purpose, audience, stability, refers-to, update instructions.
- Measure quotation fidelity before and after across the major LLMs and retrieval agents.

### Phase 03 — Sign with REGINALD.

Inward frameworks rest on transparency. Transparency without verification is just a claim. The verification layer for MX is REGINALD — a proprietary shepherd from CogNovaMX that signs cogs using open authentication standards ratified by The Gathering, the independent standards body for Machine Experience.

REGINALD does not invent the cryptography. It implements existing, well-understood standards — W3C Decentralised Identifiers, Verifiable Credentials, Ed25519 signatures — wrapped in a workflow tuned for cogs. The standards body defines. REGINALD shepherds.

Actions:
- Sign your high-stakes cogs first.
- Make signatures discoverable from sitemaps, feeds and `llms.txt`.
- Train teams to think in cogs.

### Phase 04 — Watch the citations.

Inward frameworks monitor AI system performance inside the enterprise. MX monitors machine output about the enterprise — what assistants quote, what retrieval agents return, what voice interfaces volunteer when nobody asked.

The risk is no longer only that your AI behaves badly. The risk is that other people's AI describes you badly — and you do not find out until a customer arrives quoting something you never said.

Actions:
- Track what assistants say about you across major LLMs, browser agents and voice interfaces.
- Tie corrections to cogs. When a machine misquotes, the fix is rarely a takedown; it is publishing a signed cog the machine can find next time.
- Choose what is better for the planet. Reduce inference. Build on what works.

## Part two — the web is just the start.

The four phases above describe how to make your *web surfaces* machine-ready. But most enterprise content does not live on the web. It sits in document management systems, intranets, contract repositories and regulated archives — and AI agents are reading all of it.

Documents that need cogs include:
- Contracts and agreements (.docx, .pdf)
- Policy documents (.pdf, .md)
- Product specifications (.pdf, .xlsx)
- Technical handbooks (.docx, .pdf)
- Regulatory filings (.pdf)
- Internal knowledge bases (.md, .docx)

A cog sits inside whatever format the document already uses. It declares the document's identity, state, provenance, the standards it conforms to, and what readers (human or machine) are allowed to do with it. No new runtime. No proprietary tooling. The declarations travel with the file.

### The cog metaphor.

AI is not intelligent. It is a machine — and machines, since the first water mill, have always run on cogs that mesh. Your signed cog turns one cog of a system you do not operate. When the teeth fit, the work flows. When they do not, the whole machine grinds.

## REGINALD — the verification shepherd.

REGINALD signs the truth of a document, not the truth of the world. A signed cog does not claim to be correct. It claims to be the document its author published, unaltered, at a stated moment.

REGINALD is the shepherd that applies that signature, using open authentication standards ratified or passed through by The Gathering. The wheel is already round — REGINALD's job is to use it well.

The three pillars:
- **Registry** — a public record of what was published, by whom, and when. Queryable by humans, machines and auditors.
- **Notarised** — each cog carries a cryptographic signature. Tampering is detectable. Authorship is not deniable. Time of publication is provable.
- **Legitimate** — the signature is paired with discoverable metadata: purpose, audience, refers-to, update rules. A machine can decide whether to quote it without guessing.

## The bar is now provenance, not paperwork.

Article 50 of the EU AI Act, requiring that AI-generated content be identifiable, applies on 2 August 2026 — and the Brussels Effect means the geographic reach is wider than most boardrooms assume. A US-based SaaS handling a single inbound enquiry from Munich is, on the Commission's reading, within scope; if your AI outputs touch a European citizen, you are in the net regardless of where your engineers sleep. Static compliance — signed PDFs filed in a drawer — cannot answer the questions a regulator, a buyer or an auditor will ask in the moment of an AI-mediated decision. Governance has to execute at runtime, in the open, where any party can verify it.

Where the demands for proof are coming from:

- **Reach — the Brussels Effect.** If your AI outputs touch an EU citizen, you are within scope, whether your servers, your team or your headquarters sit inside the EU or not. Treating the Act as a European problem is a strategic misread.
- **Regulation — EU AI Act.** Article 50 transparency obligations, requiring identifiability of AI-generated content, apply on 2 August 2026 to providers and deployers alike. Where high-risk systems are involved, deployers also carry FRIA obligations — not only the providers who built the model.
- **Convergence — the governance maze.** The AI Act overlaps with GDPR and the Cyber Resilience Act in ways most legal-and-engineering workflows are not yet integrated to handle. Running them as separate silos compounds cost and risk on every audit cycle.
- **Standards — C2PA, Content Credentials.** Industry coalitions are converging on cryptographic provenance as the baseline for trustworthy media and documents. The technical primitives REGINALD uses are the ones the standards bodies have already settled on.
- **Liability — misattribution exposure.** When an AI assistant misquotes your prices, terms or claims, the question of who said what (and when) becomes a legal one. Without signed provenance, you have no clean answer.
- **Procurement — buyer-side scrutiny.** Major buyers are increasingly requiring auditable provenance chains for any content they rely on in regulated decisions. Your AI inventory and your content inventory now face the same scrutiny.

### Scale of penalties — Regulation (EU) 2024/1689.

- **Up to €35M or 7% of global turnover** — for prohibited AI practices, whichever is higher.
- **Up to €15M or 3% of global turnover** — for high-risk system non-compliance, whichever is higher.
- **Up to €7.5M or 1% of global turnover** — for supplying inaccurate information to authorities, whichever is higher.

SMEs receive proportionate enforcement under Article 62, but no full exemption.

### A live demonstration — the Digital Omnibus.

On 19 November 2025, the European Commission published the Digital Omnibus, a proposal to defer the high-risk obligations of the AI Act from 2 August 2026 to 2 December 2027. Trilogue negotiations between the Parliament, Council and Commission have not concluded; the second trilogue ended without agreement. As of the latest publication of this paper, the legislative outcome is unresolved.

Article 50 transparency obligations are not among the provisions the Omnibus would defer. But high-risk system requirements may move — and there is no certainty about when the answer will be known.

This is the case for runtime governance, not against it. A static compliance posture pinned to "2 August 2026" needs rewriting if the Omnibus passes. A cog with declared `fixed_anchors` updates the date in one place, and every document that depends on it re-derives. The teeth still mesh.

### Runtime governance, three ways to run REGINALD.

A folder full of signed PDFs no longer counts. To prove provenance at the moment a machine reads, quotes or modifies your content, the verification has to be available at runtime — queryable by humans, machines and auditors alike. REGINALD is the same product in every deployment; what changes is the network posture.

- **Option A — Third party, managed.** CogNovaMX runs REGINALD as a managed service. Fastest path to live; no infrastructure to operate.
- **Option B — Private deployment.** A REGINALD container running in your own cloud or data centre — reachable on the web but private to your enterprise. Your keys, your perimeter, your operations team.
- **Option C — Air-gapped on-premises.** REGINALD inside a facility with no public network egress. Suits defence, regulated finance, healthcare and sovereign data environments where the web is not an option at all.

This is not legal advice. The regulatory landscape is moving quickly and varies by jurisdiction. The dates above reflect the EU AI Act (Regulation 2024/1689) as currently in force; the Digital Omnibus proposal would adjust some — but not all — of them. Treat the items above as signals, not statutes, and consult counsel about your specific obligations. Provisions and dates should be verified against the current Official Journal text.

## The three MX principles.

1. **Design for both humans and machines.** The human stays in the loop. Every output is readable and reviewable by both audiences. There is no machine-only artefact in MX, and no human-only artefact either.
2. **Accessibility is a requirement.** WCAG conformance is not an optional adjacency. Content properly structured for assistive technology is, almost without exception, content machines can also parse cleanly.
3. **Choose what is better for the planet.** Reduce compute, reduce inference, reduce energy. Build on what humans already know and use. Cleaner upstream content reduces downstream cost on every machine that touches it.

## How the parts fit together.

Four pieces, each with one job. Standards are defined in one place. Authentication is shepherded in another. Books and commercial work are published by a third. The framework ties them together.

- **MX** — the framework. The discipline of preparing an organisation's content to be read, retrieved and represented by machines without guesswork. Custodian: The Gathering.
- **The Gathering** (tg.community) — the independent standards body. Defines and ratifies standards, with pass-throughs to W3C, IETF and others. We do not reinvent wheels. Welcomes founding sponsors.
- **REGINALD** — proprietary CogNovaMX product. The verification shepherd. Implements authentication standards; does not define them. Deploys as managed, private or air-gapped.
- **CogNovaMX** — trading name of Digital Domain Technologies Ltd. Publishes the MX book series and offers commercial services: readiness assessment, strategic planning, signing, hosting, implementation, training. Web: <https://mx.allabout.network>. Contact: <info@CogNovaMX.com>.

> Making the web — and everything you publish beyond it — work for everyone and everything that uses it.

## Closing.

The industry consensus prepares an organisation to *use AI well* inside its walls. MX prepares an organisation to *be read well* outside them — by AI it never met, on behalf of buyers it will never see.

---

**Author:** Tom Cranstoun. Founder and principal sponsor, The Gathering. Principal Consultant, Digital Domain Technologies Ltd.

**Books:** *MX: The Handbook* is now published. *The Protocols* follow on 1 July 2026.

**Sponsorship:** The Gathering welcomes founding sponsors at <https://tg.community>.

**Companion HTML edition:** <https://digitaldomaintechnologies.com/papers/mx-machine-readiness.html>
