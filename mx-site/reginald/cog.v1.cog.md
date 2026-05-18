---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# ─────────────────────────────────────────────────────────────
# MX-compliant cog · The cog v1 specification
#
# This is the cog that the magic-header HTML comment in every
# v1 cog points at. It defines what cog v1 means: the magic-
# header format, the cogHeader equivalent, and the equivalence
# rule between the two.
#
# A spec cog rather than an info cog. Classified under
# x-mx-cog-type: cogs per Note 3 §6.5.1 — a Community Owned
# Governance Standard, owned by The Gathering, not by any
# single vendor.
# ─────────────────────────────────────────────────────────────


# ── ZONE 1 · Identity (Note 2 §5) ────────────────────────────
title: "cog v1, the magic-header specification"
description: "Defines the magic-header YAML comment line and the cogHeader frontmatter field that every cog v1 file declares for self-identification."

# D6 · originator at Zone 1; author retained as alias.
originator: "Tom Cranstoun"
author: "Tom Cranstoun"

created: 2026-05-07
modified: 2026-05-07
version: "1.1"

schema: ./schemas/mx-spec.v1.yaml
validatesAgainst:
  - cog.meta.v1
  - mx.spec.v1


# ── ZONE 1 · Cog header (Note 3 §5) ──────────────────────────
# This cog is itself a cog. The header self-references; that
# is fine and intended. A future v2 cog will reference v2 here.
cogHeader:
  version: v1
  spec: https://tg.community/spec/cog.v1
  runtime: https://tg.community/runtimes/cog.v1


# ── ZONE 1 · Contract fingerprint scope (Note 8 §4) ──────────
# Spec cogs benefit from explicit fingerprint scope: the
# normative content (terminology, the magic-header grammar,
# the equivalence rule) belongs in contractFields. Editorial
# additions (history, references, examples) belong in
# metadataFields so they can evolve without invalidating
# any signature.
#
# D2 · version is in contractFields. Bumping the spec version
# is by definition a normative change; the fingerprint changes
# with it.
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
  x-mx-category: mx-core
  status: draft
  contentType: specification
  audience: [humans, machines, agents]
  tags:
    - mx
    - cog
    - magic-header
    - specification
    - the-gathering

  # D5 · Duple form
  purpose:
    kind: specification
    subPurpose: format spec

  license: CC-BY-4.0

  # D6 · Stewardship as a single nested object. The Gathering
  # owns this spec; Tom Cranstoun acts as delegated steward.
  stewardship:
    steward: "The Gathering, MX cog working group"
    accountableContact: "info@tg.community"
    legalEntity: "The Gathering"
    brand: "tg.community"

  x-mx-domain: "machine-experience"
  readingLevel: advanced

  runbook: >
    A spec cog. Implementations parsing a v1 cog should
    fetch this document by URI and treat its normative
    sections (§3 magic-header, §4 cogHeader, §5 equivalence)
    as authoritative. The grammar is the contract.

  # ── Document discovery and lifecycle (Note 2 §7a) ──
  canonicalUri: https://tg.community/spec/cog.v1

  summary: >
    Normative specification for the cog v1 magic-header HTML
    comment and its cogHeader frontmatter equivalent. Defines
    the grammar, the conventional keys (spec, runtime,
    runtime-doc), and the rule that both forms must agree on
    every overlapping key.

  topic:
    - cog-format
    - mx-specification

  conformsTo:
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-field-pattern.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-core-metadata.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-cogs.md
    - https://github.com/ddttom/mx-shared-gathering/blob/main/draft-extensions.md
    - https://www.rfc-editor.org/rfc/rfc2119
    - https://www.w3.org/TR/WCAG21/

  speakable: >
    The cog v1 specification. Defines the magic-header YAML
    comment line carried inside the frontmatter and its
    frontmatter-field equivalent, both of which announce a
    file as a cog and identify which spec version the file
    claims.

  trainingDataPolicy: permitted-with-attribution
  doNotIndex: false

  reviewBy: 2026-11-07

  relatedDocs:
    - https://tg.community
    - https://github.com/ddttom/mx-shared-gathering
    - https://digitaldomaintechnologies.com/papers/mx-machine-readiness.cog.md
  supportContact: "info@tg.community"

  # ── Cog structural fields (Note 3 §6) ──
  partOf: tg-mx-specifications
  buildsOn: []
  dependencies:
    - name: tg-note-1-field-pattern
      kind: external
      reason: Defines the field-definition shape this spec follows.
    - name: tg-note-2-core-metadata
      kind: external
      reason: Defines Zone 1 / Zone 2 vocabulary used by this cog.
    - name: tg-note-3-cogs
      kind: external
      reason: Defines the cog layer this spec is the v1 of.
  refersTo:
    - https://tg.community/spec/cog.v0
    - https://datatracker.ietf.org/doc/html/rfc2119

  # ── Cog classification (Note 3 §6.5) ──
  # cogType: cogs is the Community Owned Governance Standard
  # classification per Note 3 §6.5.1. Governance lives at
  # The Gathering, not at a single vendor.
  x-mx-cog-id: cog-v1-spec
  x-mx-cog-type: cogs
  x-mx-cog-category: tg-mx-specification
  x-mx-cogs-governance-body: tg.community

  # ── Provenance (vendor extension pending Note 5) ──
  x-mx-prov-publisher: "The Gathering"
  x-mx-prov-publisher-jurisdiction: international
  x-mx-prov-authored-by: human
  x-mx-prov-ai-assistance: editorial-and-design
  x-mx-prov-confidence-level: working-draft
  x-mx-prov-review-status: pre-review
---


# cog v1, the magic-header specification.

**Status:** Draft. Authored by Tom Cranstoun on behalf of The Gathering, offered for community review. Not yet ratified.

**License:** Creative Commons Attribution 4.0 International.

---


## 1. Abstract.

A cog file announces itself as a cog by carrying either a magic-header YAML comment line inside its frontmatter or a `cogHeader` frontmatter object, or both. This note specifies the grammar of both forms, the conventional keys each carries, and the rule that they must agree on every overlapping key when both are present.

This is the spec the magic-header line `# cog v1 spec=https://tg.community/spec/cog.v1` points at. A consumer parsing a cog with `version=v1` should fetch this document and treat §3, §4 and §5 as authoritative.

The magic-header line is preserved by YAML parsers as a comment token and is visible to consumers that scan raw text. The `cogHeader` field is the parsed-data equivalent for consumers that work on structured YAML output. Together they let any consumer recognise a cog with whatever parser it has to hand.


## 2. Conformance.

The keywords MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, and OPTIONAL in this document are to be interpreted as described in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

This spec defines two equivalent identification mechanisms. A cog circulating outside a closed system MUST carry at least one of them; a cog SHOULD carry both.


## 3. The magic-header line.

A cog file SHOULD identify itself as a cog by carrying a magic-header line as a YAML comment inside its frontmatter, placed on the line immediately after the opening `---` delimiter:

```yaml
---
# cog VERSION KEY=VALUE KEY=VALUE ...
title: ...
```

Tokens after the leading `# `, in order:

1. The literal `cog` (case-sensitive).
2. A version token of the form `v\d+(\.\d+)*`. Examples: `v1`, `v1.2`, `v2`. The version token names which spec version the cog claims.
3. Zero or more space-separated `key=value` pairs.

The conventional keys are:

| Key | Value type | Purpose |
|---|---|---|
| `spec` | URL | Where this specification is published. SHOULD be HTTPS. |
| `runtime` | URL | Where a runtime implementation lives. SHOULD be HTTPS. |
| `runtime-doc` | URL | Documentation for the runtime named in `runtime`. SHOULD be HTTPS. |

Implementations MUST treat unknown keys as informational and MUST NOT reject a cog on the basis of an unrecognised key. Implementations MUST NOT silently rewrite or normalise keys they do not recognise.

The line is a single YAML comment. Multi-line magic-headers are not conforming. Whitespace between tokens is one or more space characters.

A worked example, identical to the one carried by the position-paper cog:

```yaml
---
# cog v1 spec=https://tg.community/spec/cog.v1 runtime=https://tg.community/runtimes/cog.v1
title: ...
```


## 4. The cogHeader frontmatter equivalent.

A cog MAY declare a `cogHeader` object at the top level of its YAML frontmatter (Zone 1). The field carries the same information as the magic-header comment in a form addressable by YAML-only consumers.

Sub-keys:

| Sub-key | Type | Required when present | Definition |
|---|---|---|---|
| `version` | string | yes | Cog spec version. Same token as the magic-header version slot (`v1`, `v1.1`, `v2`). |
| `spec` | string (URL) | yes | URL where this specification is published. SHOULD be HTTPS. |
| `runtime` | string (URL) | optional | URL where a runtime implementation can be found, downloaded, or invoked. |
| `runtimeDoc` | string (URL) | optional | URL pointing to runtime documentation. Camel-case in YAML; kebab-case (`runtime-doc`) in the magic-header. |

A cog declaring `cogHeader` MUST populate `version` and `spec`. `runtime` and `runtimeDoc` are optional; consumers MUST NOT treat their absence as a conformance failure.

Implementations SHOULD treat `cogHeader` values as informational metadata, excluded from any contract fingerprint applied to the cog. These values describe identity, not contract, and changing them should not invalidate a signature.

A worked example:

```yaml
cogHeader:
  version: v1
  spec: https://tg.community/spec/cog.v1
  runtime: https://tg.community/runtimes/cog.v1
  runtimeDoc: https://tg.community/runtimes/cog.v1/docs
```


## 5. The equivalence rule.

When a cog carries both a magic-header comment and a `cogHeader` field, the two forms MUST agree on every key they both declare:

- The magic-header version token MUST equal `cogHeader.version`.
- The magic-header `spec=` MUST equal `cogHeader.spec`.
- The magic-header `runtime=` MUST equal `cogHeader.runtime` when both are present.
- The magic-header `runtime-doc=` MUST equal `cogHeader.runtimeDoc` when both are present.

A key present in only one form is permitted; a key present in both with mismatched values is a conformance failure. A verifier encountering a mismatch SHOULD treat it as a tampering signal: someone has edited one form without editing the other.


## 6. Implementation guidance.

Implementations producing cogs intended for circulation SHOULD emit both forms, so that consumers of either kind can recognise the file without round-trip parsing. Specifically:

- The magic-header line as a YAML comment in the frontmatter, for raw-text file recognition by agents that scan bytes before parsing YAML structurally.
- The `cogHeader` field for programmatic consumption by registries, validators, graph builders, and signing tools.

Implementations consuming cogs:

- A cog parser that does not understand `v1` MUST report the version mismatch and SHOULD refuse to interpret the cog as if it were an earlier version.
- A runtime that auto-fetches the URL in `runtime` MUST validate it against an operator allowlist or trusted registry before fetching. The `runtime` URL is declared by the cog itself and is therefore untrusted input. Auto-fetching unrecognised runtimes is a phishing surface.
- A signing tool reading `cogHeader` SHOULD exclude it from the fingerprint scope by listing it in `metadataFields`. The header identifies the spec the cog claims, not the contract the cog binds itself to.


## 7. Security and privacy considerations.

- URLs declared in `cogHeader.runtime` may leak deployment topology. A cog declaring an internal runtime URL is exposing that URL to any reader of the cog. Operators concerned about topology privacy SHOULD either publish a public runtime URL or omit the field.
- A `cogHeader.spec` URL pointing at an attacker-controlled host is a phishing vector for runtimes that auto-fetch the spec. Runtimes SHOULD validate the spec URL against a trusted registry or operator allowlist before fetching.
- The magic-header comment and `cogHeader` field are NOT authenticated. Anyone who can write the cog can lie about which spec it claims to follow. Authentication, if required, is the responsibility of an external signing or witness mechanism (see The Gathering's Contract Fingerprinting and Signing note), not this spec.


## 8. Versioning.

The version token in both forms names a specific version of this specification. A consumer encountering `cog v2` is encountering a cog that claims to follow a future version of this document. Compatibility between versions is not guaranteed.

The Gathering will publish a successor (`cog v2`) only when a backwards-incompatible change is needed. Backwards-compatible additions (new conventional keys, new optional sub-keys) are made within `v1` and announced at the canonical URI.


## 9. References.

**Normative:**

- [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119), Key words for use in RFCs to indicate requirement levels.

**Informative:**

- [The Gathering's MX Cogs note draft](https://github.com/ddttom/mx-shared-gathering/blob/main/draft-cogs.md), of which this spec formalises §4 and §5.
- [The Gathering's MX Field Definition Pattern note draft](https://github.com/ddttom/mx-shared-gathering/blob/main/draft-field-pattern.md), the authoring pattern this spec follows.
- [The Gathering's MX Core Metadata note draft](https://github.com/ddttom/mx-shared-gathering/blob/main/draft-core-metadata.md), Zone 1 / Zone 2 vocabulary used by this cog's frontmatter.

---

**Author:** Tom Cranstoun, on behalf of The Gathering.
**Canonical URI:** [tg.community/spec/cog.v1](https://tg.community/spec/cog.v1)
**Source:** [github.com/ddttom/mx-shared-gathering](https://github.com/ddttom/mx-shared-gathering)
