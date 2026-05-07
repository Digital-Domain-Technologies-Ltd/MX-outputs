---
# ─────────────────────────────────────────────────────────────
# MX-compliant meta-cog
#
# A meta-cog is a cog whose subject is another cog. Per Note 3
# (Cogs), the relationship is expressed via partOf — this
# meta-cog is part of the same editorial unit as the position-
# paper cog it documents.
#
# Reflects the four locked decisions of the 2026-05-07
# review-fix round:
#   D1  Cog ladder renamed Tier A/B/C
#   D2  version moved into default fingerprint contract
#   D5  mx:purpose now a duple (kind + subPurpose)
#   D6  stewardship object replaces author/maintainer/ownership
# ─────────────────────────────────────────────────────────────


# ── ZONE 1 · Identity (Note 2 §5) ────────────────────────────
title: "Reading the position-paper cog — a worked example of MX cog construction"
description: "A worked example explaining the cog-construction choices in mx-machine-readiness.cog.md, mapped to The Gathering's draft notes (Field Pattern, Core Metadata, Cogs, Extensions, Contract Fingerprinting)."

# D6 · originator is the immutable Zone 1 creator. author is
# retained as an alias for one major version per the U3
# deprecation policy.
originator: "Tom Cranstoun"
author: "Tom Cranstoun"

created: 2026-05-07
modified: 2026-05-07
version: "2.2"

schema: ./schemas/mx-meta-cog.v1.yaml
validatesAgainst:
  - cog.meta.v1
  - mx.meta-cog.v1


# ── ZONE 1 · Cog header (Note 3 §5) ──────────────────────────
cogHeader:
  version: v1
  spec: https://github.com/ddttom/mx-shared-gathering/blob/main/draft-cogs.md
  runtime: https://github.com/ddttom/mx-shared-gathering


# ── ZONE 1 · Contract fingerprint scope (Note 8 §4) ──────────
# D2 · version is in contractFields. Bumping the version is a
# substantive editorial act; re-version means re-sign.
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
  status: published
  contentType: meta-cog
  audience: [humans, machines]
  tags:
    - meta-cog
    - cog-construction
    - the-gathering
    - mx-core-metadata
    - mx-cogs
    - worked-example

  # D5 · Why this document exists. Duple form.
  purpose:
    kind: reference
    subPurpose: explanatory companion

  license: proprietary

  # D6 · Stewardship as a single nested object.
  stewardship:
    steward: "Tom Cranstoun"
    accountableContact: "info@cognovamx.com"
    legalEntity: "Digital Domain Technologies Ltd"
    brand: "CogNovaMX"

  x-mx-domain: "machine-experience"
  readingLevel: advanced

  runbook: >
    Documentation companion to mx-machine-readiness.cog.md.
    Walk the field-by-field section to understand which fields
    map to which Gathering note. Use the quick-reference table
    near the end as the validator-friendly summary.

  canonicalUri: https://digitaldomaintechnologies.com/papers/mx-machine-readiness.meta.cog.md
  supersedes: mx-machine-readiness-meta@2.1

  summary: >
    Walks every block in mx-machine-readiness.cog.md, naming
    each field's conformance level (Level 1, 2, or 3 per Note 2)
    and tier (standard, public extension, private extension per
    Note 4). Acts as a worked reference for organisations
    preparing their own MX-compliant documents.

  topic:
    - mx-cog-format
    - cog-authoring
    - mx-conformance

  conformsTo:
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-field-pattern.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-core-metadata.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-cogs.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-extensions.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-contract-fingerprinting.md

  speakable: >
    A meta-cog explaining the construction of the MX position
    paper. Walks each field, names its conformance level and
    extension tier, and shows how the cog maps to The
    Gathering's draft vocabulary.

  trainingDataPolicy: permitted-with-attribution
  doNotIndex: false

  reviewBy: 2026-11-07

  relatedDocs:
    - https://digitaldomaintechnologies.com/papers/mx-machine-readiness.cog.md
    - https://digitaldomaintechnologies.com/papers/mx-machine-readiness.html
    - https://github.com/ddttom/mx-shared-gathering
  supportContact: "info@cognovamx.com"

  # ── Cog structural fields (Note 3 §6) ──
  partOf: mx-machine-readiness
  buildsOn: []
  dependencies:
    - name: tg-note-1-field-pattern
      kind: external
      reason: Defines the field-definition shape every Gathering note follows.
    - name: tg-note-2-core-metadata
      kind: external
      reason: Defines Zone 1 / Zone 2 vocabulary and conformance levels.
    - name: tg-note-3-cogs
      kind: external
      reason: Defines the cog layer and meta-cog relationship via partOf.
    - name: mx-machine-readiness
      kind: cog
      reason: The cog this meta-cog explains; partOf points at it.
  refersTo:
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-extensions.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-provenance.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-carrier-formats.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-workflow-contracts.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-contract-fingerprinting.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-agent-directory-discovery.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-document-accessibility.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-mx-not-geo.md
    - https://tg.community

  # ── Cog classification (Note 3 §6.5) ──
  x-mx-cog-id: mx-machine-readiness-meta
  x-mx-cog-type: info
  x-mx-cog-category: mx-meta-cog

  # ── REGINALD signing service (Note 4 §6.3) ──
  x-mx-reginald-service: REGINALD
  x-mx-reginald-operator: CogNovaMX
  x-mx-reginald-registry-record: https://reginald.allabout.com/r/ddt/papers/mx-machine-readiness-meta
  x-mx-reginald-deployment: third-party-managed

  # ── Provenance disclosure (vendor extension) ──
  x-mx-prov-publisher: CogNovaMX
  x-mx-prov-publisher-legal-name: Digital Domain Technologies Ltd
  x-mx-prov-publisher-jurisdiction: United Kingdom
  x-mx-prov-authored-by: human
  x-mx-prov-ai-assistance: editorial-and-design
  x-mx-prov-confidence-level: explanatory-companion
  x-mx-prov-review-status: pre-review
  x-mx-prov-version-documented: "2.1"
---

# Reading the position-paper cog.

A worked example of MX cog construction, explaining the choices made in `mx-machine-readiness.cog.md`.

## Why a meta-cog exists.

A cog is a small, dense file. Every field is doing work, but the work is not always obvious to a reader meeting the format for the first time. The Gathering's eleven draft notes define the vocabulary; this meta-cog explains how that vocabulary is *used* in one substantive document, so the next author has a worked example to follow rather than a bare spec to interpret.

A meta-cog is a normal cog whose subject happens to be another cog. The relationship is declared via the `partOf` field defined in note 3 (Cogs): this meta-cog and the position-paper cog form a single editorial unit. Removing the meta-cog does not break the cog — the cog stands alone — but the meta-cog has no reason to exist without it.

## The MX architecture in one page.

The Gathering's first four notes give the architecture, with note 8 adding the optional signing layer. Note 1 (Field Definition Pattern) sets the structural template every field follows. Note 2 (Core Metadata) establishes two **zones** and three **conformance levels**. Note 3 (Cogs) adds an optional layer for documents that need to be navigable, composable, or runnable by agents. Note 4 (Extensions) defines the namespace policy. Note 8 (Contract Fingerprinting and Signing) defines what a signature covers.

Hold those five ideas together and the whole format makes sense.

### Zone 1 and Zone 2.

Note 2 §4 splits the metadata surface into two zones, distinguished by where they live and what they describe.

**Zone 1** carries identity, with no `mx:` prefix. The fields are `title`, `description`, `author`, `created`, `modified`, `version`, plus the optional `schema` and `validatesAgainst`. They live at the top level of the document — top-level YAML keys in markdown, top-level `<meta>` tags in HTML — because that is where every other ecosystem (Schema.org, Dublin Core, OpenGraph, Twitter Cards) already looks for them. Zone 1 is what makes a document *findable* and *attributable* before any MX-specific tooling runs.

**Zone 2** carries operational state under the `mx:` namespace. Lifecycle (`mx:status`), classification (`mx:contentType`), discovery (`mx:tags`), audience, purpose, licence, ownership, the canonical URI, the machine summary, conformance claims, training and indexing policy, related documents, the cog-layer fields (`mx:partOf`, `mx:buildsOn`, `mx:dependencies`, `mx:refersTo`) — all live under `mx:` so they cannot collide with anything from another ecosystem.

The split matters because identity is universal and operational state is MX-specific. Putting them in the same namespace would force every Schema.org consumer to know about MX, and every MX consumer to know about Schema.org. The two-zone discipline keeps the contracts cleanly separated.

A Zone 1 field MUST NOT appear inside `mx:`. A Zone 2 field MUST NOT appear at the top level. The position-paper cog observes this rigidly.

### Three conformance levels.

Note 2 §2.1 defines three layered levels of conformance. They are cumulative — each level includes everything in the level below.

**Level 1 — MX Core.** All MUST fields present and valid. The minimum viable MX metadata. A document at Level 1 is machine-identifiable and attributable. The required Zone 1 fields are `title`, `description`, `author`, `created`, `modified`. Most documents on the web could reach Level 1 with five lines of frontmatter.

**Level 2 — MX Standard.** All MUST fields plus all SHOULD fields. Recommended for production use. A document at Level 2 is fully classified and lifecycle-managed. The Level 2 fields include Zone 1 `version`, plus Zone 2 `mx:status`, `mx:contentType`, `mx:runbook`, and crucially the four MUST-at-Level-2 fields named in Note 2 §7a.6: `mx:canonicalUri`, `mx:summary`, `mx:conformsTo`, `mx:trainingDataPolicy`.

**Level 3 — MX Complete.** All MUST + SHOULD + applicable MAY fields. Full metadata coverage. Reserved for documents that need full discoverability, classification, agent affordances, and (where applicable) the cog layer. The position-paper cog and this meta-cog are both at Level 3.

A document claiming conformance at a given level MUST satisfy all requirements at that level and all lower levels.

### A second conformance ladder for cogs.

Note 3 §2.1 defines its own three-level ladder — separate from the Note 2 ladder above — for cog-specific structure. Per the 2026-05-07 review-fix round (D1), the cog ladder is graded as **Tier A / B / C** rather than the numeric *Level 1 / 2 / 3* used by Note 2. The rename disambiguates: *"this cog is at Note 2 Level 3 + Note 3 Tier C"* is unambiguous on first read in a way *"Level 3 of which ladder?"* never quite was. A cog conforms to both ladders; the cog ladder applies in addition to, not in place of, the document ladder.

- **Tier A (MX Cog Core).** The document is a `.cog.md` file with `mx:partOf` declared.
- **Tier B (MX Cog Standard).** Adds `mx:buildsOn` (or an empty array) and either a magic-header HTML comment or a `cogHeader` field.
- **Tier C (MX Cog Complete).** Adds explicit `mx:dependencies`, `mx:refersTo`, plus the relevant extension fields for the cog's role.

The position-paper cog is at Tier C: every cog field is populated, the `cogHeader` is present, and the dependency graph is explicit.

### Three extension tiers.

Note 4 §6 defines the namespace policy with three tiers, distinguished by who owns the field and how the prefix signals that ownership.

**Standard fields** carry no prefix. They are owned by The Gathering community and ratified through the notes process. `title`, `author`, `mx:status`, `mx:partOf`, `mx:dependencies` — all standard.

**Public extensions** carry the `x-mx-` prefix. They are owned by CogNovaMX and may be promoted into Standard fields if The Gathering accepts them, or retired if they fail to find adoption. Crucially, public extension field names use **kebab-case**, not camelCase (Note 4 §6.3, §10.2). REGINALD-specific fields appear as flat keys: `x-mx-reginald-service`, `x-mx-reginald-operator`, `x-mx-reginald-registry-record`, `x-mx-reginald-deployment` — each one a top-level key inside `mx:`.

**Private extensions** carry the `x-mx-p-` prefix. They are owned by CogNovaMX with values opaque to anyone without the decode registry at `$MX_HOME`. Used for organisation-internal data — workflow identifiers, internal cost codes, deployment-tier markers. Implementations encountering `x-mx-p-` values MUST pass them through unchanged.

The prefix is the contract. A reader of any cog can tell at a glance who owns each field and what its standing is.

### Cogs are an optional layer.

Note 3 §1 names the most important thing newcomers tend to miss: **not every MX-compliant document is a cog**. A document at Level 1 or Level 2 is fully MX-compliant without using any of the cog vocabulary. Cogs are for the subset of documents that need to be navigable, composable or runnable by agents — documents with explicit relationships, dependencies, or execution contracts.

A cog is identified by either a magic-header HTML comment at byte zero or a `cogHeader` frontmatter field, both defined in Note 3. The magic-header is a single line:

```html
<!-- cog v1 spec=https://example.org/cog-spec.v1.md runtime=https://example.org/cog-runtime.md -->
```

The `cogHeader` field is the YAML equivalent. Either suffices for cog identification; consumers SHOULD prefer the magic-header for byte-zero recognition and `cogHeader` for programmatic consumption. When both are present, every overlapping key MUST agree. The position-paper cog declares both.

The position-paper cog is a cog because it has explicit relationship structure (`mx:partOf`, `mx:buildsOn`, `mx:dependencies`, `mx:refersTo`) and a contract-fingerprint scope (`contractFields`, `metadataFields`). A blog post explaining a single idea probably is not a cog; a `<meta>`-tagged HTML page with Zone 1 + Zone 2 fields reaches Level 2 and is enough.

## Signing is optional, and Note 8 defines what a signature covers.

Signing is optional. An unsigned cog is still a valid, useful cog — and most cogs in the wild will be unsigned. A draft circulated to reviewers; a community publication from someone without a DID; an experimental document being iterated; an internal note never intended to leave the perimeter — all of these are legitimate cogs that have no need to carry a signature.

What a signature adds is *verifiability*: a reader can confirm the cog's contract surface was last in this exact state when the named signer applied the signature. For high-stakes cogs — prices, contracts, regulatory filings, anything a counterparty might later need to prove — signing is strongly recommended.

Note 8 (Contract Fingerprinting and Signing) defines what a signature covers, but deliberately does not define the signature itself. Two Zone 1 (top-level) fields make the scope explicit:

- **`contractFields`** — array of top-level frontmatter keys whose values are covered by the signature. These are the fields whose values, taken together, the publisher is willing to attest to. Modifying any of them invalidates the signature.
- **`metadataFields`** — array of top-level frontmatter keys explicitly excluded from the signature. These may be revised without re-signing — typical members are timestamps (`created`, `modified`), version, author, tags. Note 8 §4.4 lists default-excluded fields.

The two arrays MUST be disjoint (Note 8 §2.1).

The **fingerprint** is computed deterministically: project the cog frontmatter to only the keys named in `contractFields`, sort keys lexicographically, canonicalise values to RFC 8259 JSON, hash with SHA-256. The 32-byte digest is the fingerprint. The signature is then produced *outside the cog* by signing the fingerprint with the chosen algorithm — Ed25519, ECDSA, RSA, post-quantum — using whatever transport envelope the operator chose (JWS, COSE, detached signature, sidecar file). Note 8 deliberately leaves signature algorithm, key management and transport out of scope (§3.2).

This is the architectural point that easily gets missed: **the cog YAML carries the fingerprint scope, not the signature itself.** The signature lives in an external envelope that references this cog by its `canonicalUri`. A cog can be signed, re-signed, multi-signed, or unsigned, all without changing the YAML's `contractFields`/`metadataFields` declaration.

REGINALD is one signing service among several possible kinds:

- A **third-party managed signing service**, such as REGINALD. The author submits the cog, the service signs the fingerprint, and a signing record is written to a public registry the service operates.
- An **in-house enterprise signer**, where an organisation runs its own certificate authority and signs against keys held in its own HSMs.
- A **community-run signer**, where a not-for-profit or industry consortium provides signing as a public good.
- A **bare cryptographic signature**, applied directly by the author with their own key, no service involved.

All four operate on the same fingerprint computed from the same `contractFields`. What differs is the trust model around the key and where the signature itself is published. Service-specific implementation details — registry URL, deployment posture, operator branding — live as flat extension fields under the appropriate prefix. REGINALD's go under `x-mx-reginald-service`, `x-mx-reginald-operator`, `x-mx-reginald-registry-record`, `x-mx-reginald-deployment`. A tool that does not understand the prefix MUST ignore those fields; the fingerprint mechanism still works.

The signature attests **provenance and integrity, not truth** (Note 8 §9). A verified signature confirms that the cog's contract surface came from the named signer and has not been altered since signing. It says nothing about whether the contract values are factually correct. User-facing language SHOULD say *attested*, not *verified*, to avoid implying a truth claim no signer makes.

This separation is what keeps The Gathering's spec a community standard rather than a vendor product. The spec ratifies the primitive (a fingerprint over a contract surface); the market supplies the implementations (REGINALD, in-house signers, community signers).

## The four kinds of inter-cog relationship.

Note 3 §6 names four relationship verbs because they answer different questions a tool needs to answer about a cog before processing it:

- **`mx:partOf`** — *Is this cog part of a larger structure?* A single string naming the parent collection, suite, or initiative. A meta-cog is `partOf` the cog it documents. MUST at Tier A (§6.1).
- **`mx:buildsOn`** — *Does this cog build on other cogs?* Array of cog names that provide context. Soft dependency, not a hard requirement. SHOULD at Tier B (§6.2).
- **`mx:dependencies`** — *Can this cog be correctly processed if the named thing is absent?* Array of objects, each with `name`, optional `version`, `reason`, `kind` (`cog` | `runtime` | `package` | `external`). A tool encountering an unsatisfied dependency MUST refuse to consider the cog functional. MAY at Tier C (§6.3).
- **`mx:refersTo`** — *Does this cog cite related work as informational context?* Array of cog names or URLs. Non-binding; absence does not break processing. MAY at Tier C (§6.4).

Mixing these up is the most common mistake new authors make. A blog post that mentions another article uses `mx:refersTo`. A cog whose vocabulary is defined by a spec uses `mx:dependencies` with `kind: external`. A chapter in a book series uses `mx:partOf`. A position paper that builds on an earlier book uses `mx:buildsOn`.

The position-paper cog declares: `mx:partOf: mx-position-papers`; `mx:buildsOn: [mx-handbook]`; `mx:dependencies` lists Notes 1, 2, 3, 4 and 8 with `kind: external`; `mx:refersTo` cites the remaining Gathering notes plus tg.community and the meta-cog.

## The blocks in the position-paper cog, in order.

Each section below names the field's **conformance level** (1, 2, or 3 per Note 2 §2.1) and where relevant its **tier** (Standard, Public extension, Private extension per Note 4). A tool that just wants validation rules can scan the `[Level · field]` markers without parsing prose.

### Zone 1 · Identity (Note 2 §5).

`[Level 1 · title]` — string. Human-readable document title. The canonical identity field.

`[Level 1 · description]` — string. One-line summary, ≤160 chars, single sentence. Used by search engines, registry listings, machine summaries.

`[Level 1 · originator]` — string (D6). Original creator of the document. Immutable after creation (Note 2 §5.3). Replaces `author` as the canonical Zone 1 identity field; `author` retained as alias for one major version per U3.

`[Level 3 · author]` — string. Alias for `originator`, deprecated in favour of the new field but kept readable for one major version.

`[Level 1 · created]` — string (ISO 8601). Creation date. Immutable; never changes.

`[Level 1 · modified]` — string (ISO 8601). Last modification date. Updated every time content changes.

`[Level 2 · version]` — string. Semantic version, MUST be quoted in YAML to prevent numeric coercion (`"2.2"` not `2.2`). Lives in frontmatter, never in filenames. **Per D2, `version` is now in the default contract fingerprint** — bumping the version is a substantive editorial act that requires re-signing. A signature that survived version bumps would let the same signed bytes be republished as v1, v2, v3 unchanged, which is exactly the failure mode D2 closes.

`[Level 3 · schema]` — string. Pointer to the schema document defining and validating this cog's contract. MUST resolve when this cog is signed (Note 8 §4.3).

`[Level 3 · validatesAgainst]` — array of string. Named validators (dotted notation) the cog claims conformance to. MUST resolve and pass when this cog is signed (Note 8 §4.3).

These nine fields together get a document well past Level 1 conformance with the foundation needed for signing.

### Zone 1 · Cog header (Note 3 §5).

`[Tier B · cogHeader]` — object. Frontmatter equivalent of the byte-zero magic-header HTML comment. Sub-keys: `version` (required), `spec` (required), `runtime` (optional), `runtimeDoc` (optional). Identifies this file as a cog to YAML-only consumers. When both this field and a magic-header comment exist, every overlapping key MUST agree (§5.2).

### Zone 1 · Contract fingerprint scope (Note 8 §4).

`[Level 1 when signed · contractFields]` — array of string. Top-level keys whose values are covered by the signature. Must reference keys that exist at the top level. MUST be disjoint from `metadataFields`. Per D2, `version` is now in the default set.

`[Level 1 when signed · metadataFields]` — array of string. Top-level keys explicitly excluded from the signature. Note 8 §4.4 default-excluded set is `created`, `modified`, `originator`, `author`, `updateInstructions` (D2 removed `version` from defaults). The position-paper cog and meta-cog both excludes `created`, `modified`, `originator`, `author`, plus `contractFields` and `metadataFields` themselves.

These two fields together define what a signature would cover *if* the cog were signed. They do not require a signature to be present; an unsigned cog with `contractFields`/`metadataFields` declared is fully valid.

### Zone 2 · Operational metadata (Note 2 §6).

`[Level 2 · mx.status]` — controlled enum. Lifecycle state. Valid values include `draft`, `active`, `published`, `deprecated`, `archived`, `unknown` plus context-specific values for decision records and workflows (Note 2 §6.1).

`[Level 2 · mx.contentType]` — string, free-form. Machine-readable content type. Common values: `specification`, `guide`, `reference`, `info-doc`, `identity`, `report`, `field-dictionary`, `standards-alignment`. The position-paper cog uses `position-paper`.

`[Level 3 · mx.audience]` — string-or-array. Controlled enum: `tech, business, humans, machines, agents, both`. The position-paper cog uses `[humans, machines]`.

`[Level 3 · mx.tags]` — array of string. Discovery keywords, lowercase.

`[Level 3 · mx.purpose]` — duple object (D5). Why this document exists. Two sub-keys: `kind` (controlled enum: `specification, reference, guide, operational manual, dispatcher, configuration, narrative, record`) plus `subPurpose` (free-form genre marker). The duple form catches genres that don't fit the closed enum — *position paper, press release, regulatory filing, academic paper* — without re-opening the enum each time. The position-paper cog uses `kind: reference, subPurpose: position paper`. Distinct from `mx.contentType`.

`[Level 3 · mx.license]` — string. SPDX licence identifier.

`[Level 3 · mx.stewardship]` — object (D6). Real-world roles for the document's ongoing care, grouped under a single nested object. Sub-keys: `steward` (current maintainer, mutable), `accountableContact` (where to direct questions), `legalEntity` (the legal owner), `brand` (the publishing brand). Replaces the earlier separate `mx:maintainer` and `mx:ownership` fields, which are retained as aliases for one major version per the U3 deprecation policy. The original creator is at Zone 1 as `originator` — immutable identity, not stewardship.

`[Level 3 · mx.domain]` — string. Business domain or subject area.

`[Level 3 · mx.readingLevel]` — controlled enum: `beginner, intermediate, advanced, expert`.

`[Level 2 · mx.runbook]` — string. Operational guidance for agents. Imperative voice. Specific enough that an agent can act without reading the body. Particularly valuable for machine-facing documents.

### Zone 2 · Document discovery and lifecycle (Note 2 §7a).

The single highest-value section in the spec. Four of these fields are MUST at Level 2 (§7a.6).

`[Level 2 MUST · mx.canonicalUri]` — RFC 3986 URI. Canonical location of this cog. The URI scheme tells the receiver what kind of location it is: `file://` for on-disk, `smb://`/`nfs://`/internal `https://` for network-reachable, public `https://` for the open internet. Without this, agents holding a copy cannot find the authoritative version. Note 2 §7a.6 calls this *the single highest-value field of the standard*.

`[Level 3 · mx.supersedes]` — string-or-array. URL or identifier of an earlier document this one replaces.

`[Level 2 MUST · mx.summary]` — string. One-to-two-sentence machine-summary. Targets agents that need to decide whether the artefact is relevant before reading the body. Without it, agents read the whole document; the energy and inference saving is direct (§7a.6).

`[Level 3 · mx.topic]` — array. Controlled-vocabulary identifiers (Wikidata QIDs, Schema.org Concept URLs).

`[Level 2 MUST · mx.conformsTo]` — array of URI. Standards this document declares conformance to. Centralises what would otherwise be scattered across many fields. Lets an agent read one field and know which contracts the document claims.

`[Level 3 · mx.speakable]` — string. Optional inline summary suitable for a voice agent to read aloud. Maps to Schema.org `SpeakableSpecification`.

`[Level 2 MUST · mx.trainingDataPolicy]` — string. Whether this artefact may be included in AI training corpora. Embedded so it survives copying and syndication. The flip side of robots.txt. Without an explicit policy, AI training pipelines have no signal a publisher can rely on.

`[Level 3 · mx.doNotIndex]` — boolean. When `true`, the document should not be added to public indices (search, llms.txt, sitemap) even where it is technically reachable.

`[Level 3 · mx.reviewBy]` — ISO 8601 date. When the document is scheduled for next editorial review. Distinct from any expiry; review may confirm continued validity.

`[Level 3 · mx.relatedDocs]` — array of URL. URLs an agent should consider fetching for full context.

`[Level 3 · mx.supportContact]` — string (mailto, URL, or organisation reference). Where to direct follow-up questions.

### Zone 2 · Cog structural fields (Note 3 §6).

`[Tier A · mx.partOf]` — string. Parent collection, suite, or initiative. Names a registry namespace, a series, or a parent artefact.

`[Tier B · mx.buildsOn]` — array of string. Cog names this document builds upon. Soft dependency.

`[Tier C · mx.dependencies]` — array of objects. Hard dependencies. Each entry has `name` (required); optional `version`, `reason`, `kind` (`cog` | `runtime` | `package` | `external`; defaults to `cog`).

`[Tier C · mx.refersTo]` — array. Related cogs or external resources. Informational only.

### Zone 2 · Cog classification (Note 3 §6.5, public extension space).

These three fields live under `x-mx-` per Note 3 §6.5: the bare names are reserved.

`[Public extension · mx.x-mx-cog-id]` — string. Unique cog identifier within the registry, typically derived from the filename without `.cog.md`. MUST be unique within its `mx.partOf` namespace.

`[Public extension · mx.x-mx-cog-type]` — string. Cog classification. Common values: `info`, `action`, `routing`, `certificate-of-genuineness`, `cogs`. The position-paper cog uses `info`.

`[Public extension · mx.x-mx-cog-category]` — string. Registry grouping; coarser than `cog-type`.

### Zone 2 · REGINALD signing service (Public extension, Note 4).

REGINALD is one signing service. Its fields appear as flat kebab-case keys per Note 4 §10.2:

`[Public extension · mx.x-mx-reginald-service]` — string. Service name.
`[Public extension · mx.x-mx-reginald-operator]` — string. Operating organisation.
`[Public extension · mx.x-mx-reginald-registry-record]` — URL. Public REGINALD record where the signing event is logged.
`[Public extension · mx.x-mx-reginald-deployment]` — controlled enum: `third-party-managed`, `private`, `air-gapped`.

A tool that does not understand the `x-mx-reginald-*` extension MUST ignore those fields. The cog still validates against the standard fields above. The fingerprint mechanism still works using the Zone 1 `contractFields`/`metadataFields` declaration. The signature itself lives in an external envelope (JWS, COSE, sidecar) and is fetched separately if a verifier wants to confirm it.

### Zone 2 · Temporal stance (Public extension pending Note 5).

The temporal block carries fields not yet defined in any ratified note. Until either The Gathering accepts a temporal-stance proposal or the Provenance note (Note 5) formalises one, this cog uses public-extension fields.

`[Public extension · mx.x-mx-temporal-stance]` — controlled enum: `evergreen`, `time-stamped`, `dated-on-publication`. `evergreen` declares that the document is intended to remain accurate as the calendar advances.

`[Public extension · mx.x-mx-temporal-anchors]` — array of objects. Real-world dates referenced in the prose, with stable IDs, labels, ISO dates, jurisdictions, regulations, and authoritative-source URLs. Anchors let the prose say "2 August 2026" without committing to "three months from now".

`[Public extension · mx.x-mx-temporal-computed-fields]` — array of objects. Fields that SHOULD be derived against the reader's clock, not baked into the prose. Tells any renderer how to display "days remaining" — and tells the prose author *not* to compute that value into the body.

`[Public extension · mx.x-mx-temporal-prose-guidance]` — array of string. Style rules binding on future revisions. Hint-level for tools (a validator MAY check), but binding on the next author.

### Zone 2 · Provenance (Public extension pending Note 5).

Until Note 5 (Provenance) is fetched and reviewed in detail, additional attribution beyond the Zone 1 `author` field is carried under `x-mx-prov-*` extensions:

`[Public extension · mx.x-mx-prov-publisher]`, `mx.x-mx-prov-publisher-legal-name`, `mx.x-mx-prov-publisher-jurisdiction` — publisher identity.

`[Public extension · mx.x-mx-prov-authored-by]` — controlled enum: `human`, `agent`, `mixed`.

`[Public extension · mx.x-mx-prov-ai-assistance]` — controlled enum: `none`, `editorial-and-design`, `research-assistance`, `co-authorship`.

`[Public extension · mx.x-mx-prov-confidence-level]` — controlled enum signalling how the claims should be weighted (e.g. `peer-reviewed`, `argued-position`, `informal-note`, `explanatory-companion`).

`[Public extension · mx.x-mx-prov-review-status]` — controlled enum: `pre-review`, `under-review`, `approved`, `revised`.

When Note 5 is ratified, fields that map cleanly to its vocabulary should be promoted to Standard names, and the `x-mx-prov-` aliases retained for one major version per Note 4 §10.3.

## Quick-reference table.

Every field used in the position-paper cog, by zone and conformance ladder. Two ladders apply: Note 2's Level 1/2/3 (the document floor) and Note 3's Tier A/B/C (the cog layer).

| Zone / Tier | Ladder position | Fields |
|---|---|---|
| **Zone 1 · Standard** | Level 1 (MUST) | `title`, `description`, `originator`, `created`, `modified` |
| **Zone 1 · Standard** | Level 2 (SHOULD) | `version` |
| **Zone 1 · Standard** | Level 3 (MAY) | `schema`, `validatesAgainst`, `author` (alias for `originator`, deprecated) |
| **Zone 1 · Standard (cog layer)** | Tier B | `cogHeader` |
| **Zone 1 · Standard (signing)** | Level 1 when signed | `contractFields`, `metadataFields` |
| **Zone 2 · Standard** | Level 2 (MUST) | `mx:canonicalUri`, `mx:summary`, `mx:conformsTo`, `mx:trainingDataPolicy` |
| **Zone 2 · Standard** | Level 2 (SHOULD) | `mx:status`, `mx:contentType`, `mx:runbook` |
| **Zone 2 · Standard** | Level 3 (MAY) | `mx:audience`, `mx:tags`, `mx:purpose` (duple), `mx:license`, `mx:stewardship`, `mx:domain`, `mx:readingLevel`, `mx:supersedes`, `mx:topic`, `mx:speakable`, `mx:doNotIndex`, `mx:reviewBy`, `mx:relatedDocs`, `mx:supportContact` |
| **Zone 2 · Standard (cog layer)** | Tier A–C | `mx:partOf` (Tier A), `mx:buildsOn` (Tier B), `mx:dependencies` (Tier C), `mx:refersTo` (Tier C) |
| **Zone 2 · Public extension** | n/a | `mx:x-mx-cog-id`, `mx:x-mx-cog-type`, `mx:x-mx-cog-category`, `mx:x-mx-reginald-*` (4 fields), `mx:x-mx-temporal-*` (4 fields, pending temporal-stance note), `mx:x-mx-prov-*` (7 fields, pending Provenance note migration) |
| **Zone 2 · Private extension** | n/a | None used. Reserved for organisation-internal fields under the `x-mx-p-` prefix. |

A tool building a cog validator can use this table directly. Validate at the position on each ladder the cog claims by field presence (Note 2 §2.1: a cog claims a level/tier by carrying all the fields required at that position). Public extensions MUST be ignored when not understood, never reported as errors.

## Common mistakes when authoring an MX cog.

A short list, drawn from the rules the position-paper cog encodes for itself:

- **Mixing zones.** Putting operational metadata in Zone 1 (without the `mx:` prefix) collides with Schema.org and Dublin Core; putting identity metadata in Zone 2 (under `mx:`) hides it from every existing ecosystem. Note 2 §4 forbids both.
- **Using `canonical` instead of `mx:canonicalUri`.** The Zone 1 `canonical` from earlier MX iterations does not exist in Note 2. The canonical location lives at Zone 2 as `mx:canonicalUri`, with a URI scheme that tells the receiver what kind of location it is.
- **Camel-casing extension fields.** Standard fields use camelCase (`buildsOn`, `dependencies`). Extension fields use kebab-case after the prefix (`x-mx-deploy-target`, NOT `x-mx-deployTarget`). Note 4 §10.2 makes this normative.
- **Nesting extensions under a parent key.** `extensions.reginald.service` is wrong. Per Note 4, extensions are flat top-level keys at Zone 2 (`mx.x-mx-reginald-service`, `mx.x-mx-reginald-operator`).
- **Using `requires` instead of `mx:dependencies`.** Note 3 §6.3 names the field `dependencies`, type array of objects with `name` plus optional `version`/`reason`/`kind`.
- **Trying to put the signature inside the cog.** Note 8 §3.2 places the signature itself out of scope. The cog declares only the *fingerprint scope* (`contractFields` and `metadataFields`); the signature lives in an external envelope.
- **Excluding `version` from the contract fingerprint** (D2). Bumping the version is a substantive editorial act. A signature that survives version bumps lets the same signed bytes be republished as v1, v2, v3 unchanged. Re-version means re-sign.
- **Using the old `purpose: reference` flat enum** (D5). Purpose is now a duple — `purpose: { kind: reference, subPurpose: position paper }`. The flat form is read for one major version as an alias for `{ kind: <value> }`, but new authors should use the duple form.
- **Mixing `author`, `maintainer` and `ownership` instead of `originator` + `stewardship`** (D6). The old three-field structure absorbed five real-world roles ambiguously. The new shape is `originator` at Zone 1 (immutable creator) and `stewardship` at Zone 2 with named sub-keys (`steward`, `accountableContact`, `legalEntity`, `brand`). The old fields remain readable for one major version.
- **Conflating Note 2 Level with Note 3 Tier** (D1). The two ladders measure different things: Note 2 grades the metadata floor (Level 1/2/3), Note 3 grades the cog layer (Tier A/B/C). A cog at Note 2 Level 3 + Note 3 Tier C is at full conformance on both. *"Level 3"* alone is ambiguous on first read.
- **Date-pinning the prose.** Writing "this year", "currently" or "right now" creates drift. Use temporal anchors and computed-at-read fields instead.
- **Treating a signature as proof of truth.** Note 8 §9 is explicit: the signature attests provenance and integrity, not truth. A perfectly signed cog can carry false claims.
- **Treating an unsigned cog as invalid.** Signing is optional. Most cogs in the wild will be unsigned. A tool that rejects unsigned cogs is broken.
- **Skipping `mx:summary`.** Without it, agents read the whole document to decide if it is relevant. Note 2 §7a.6 names this MUST at Level 2; the energy and inference saving is direct.
- **Skipping `mx:trainingDataPolicy`.** AI training corpora ingest public documents. An explicit policy is the only way for a publisher to express a position the consumer can act on.

## How a tool should process this meta-cog.

A cog-aware tool encountering this file should:

1. Read the frontmatter, recognising the `cogHeader` field and confirming this is a cog with a known spec version (`v1`). Optionally cross-check against the byte-zero magic-header comment, requiring the keys to agree.
2. Read `mx:partOf` to see this is a meta-cog whose subject is the cog at `mx-machine-readiness`. Fetch the documented cog if context is needed.
3. Read `mx:dependencies` and verify each `kind: external` entry resolves. The position-paper cog and meta-cog both depend on Notes 1, 2, 3, plus 4 and 8 for the position paper. Refuse to consider the meta-cog functional if any dependency is missing.
4. If signed (an external envelope referencing this cog by `mx:canonicalUri` exists), compute the canonical JSON projection of the fields in `contractFields`, hash with SHA-256, and verify the resulting fingerprint against the signature in the envelope. If `mx:x-mx-reginald-registry-record` is present and the tool understands REGINALD, additionally check the registry record. Tools that do not understand the extension MUST ignore the `x-mx-reginald-*` fields and rely on the standard fingerprint check alone.
5. If no signature envelope exists, process the meta-cog as an unsigned but valid cog — absence of signature is not an error.
6. Treat the body as documentation of the cog named in `mx:partOf`, not as a substantive position paper in its own right.

The result is a documentation chain rooted in The Gathering's draft notes: the position-paper cog argues a position about MX and REGINALD; this meta-cog explains how the position-paper cog is constructed; the notes define the vocabulary both use. Where signing is applied, each link is verifiable against the publisher's DID, and (optionally) against a signing service's public registry. Each link points only at things that can be reached.

That, in operational terms, is what *evergreen, machine-readable, signed governance* means.

---

**Author:** Tom Cranstoun. Founder and principal sponsor, The Gathering. Principal Consultant, Digital Domain Technologies Ltd.

**Part of:** [`mx-machine-readiness.cog.md`](mx-machine-readiness.cog.md) — the position paper this meta-cog explains.

**Dependencies:** The Gathering's draft notes 1, 2, 3, 4, 8 in [`github.com/ddttom/mx-shared-gathering`](https://github.com/ddttom/mx-shared-gathering).
