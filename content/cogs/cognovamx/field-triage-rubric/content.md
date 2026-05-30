---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "MX Field Triage Rubric"
description: "The rule every candidate field must pass to appear in the MX canon. Covers the describes-the-document, three-lens, and code-provenance tests."
author: "Tom Cranstoun"
created: "2026-04-17"
modified: "2026-04-17"
version: "1.0-draft"

mx:
  status: active
  x-mx-category: mx-core
  contentType: rubric
  partOf: mx-os
  audience: [humans, machines]
  tags: [triage, rubric, fields, governance, scope, appendix-m, cull]
  buildsOn: [fields, principles]
  refersTo: [fields-data, fields-data-carriers, cognovamx-fields, appendix-m]
  runbook: |
    Read this document before deciding to add, keep, or cut any MX field.
    Every candidate must pass Rule 1 (describes the document) and match at least
    one of the three lenses in Rule 2. Code files get the narrow provenance
    exception in Rule 3. Tier placement follows Rule 4. The worked examples
    in Section 5 resolve the recurring grey zones so the same question is
    not re-litigated each time a new field is proposed.
  copyright: "Copyright (c) 2026 Tom Cranstoun. All rights reserved."
  license: "MIT for the rule text itself; MX canon content governed by The Gathering."
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-canon/ssot/field-triage-rubric.cog.md
---

# MX Field Triage Rubric

## Purpose

MX describes documents. Every field in the canon must describe the document itself, not the document's subject matter. This rubric captures that test in a form a human or a script can apply without guessing, so the cull of Appendix M and the long-term discipline of "what belongs in MX" rest on a single written rule instead of case-by-case judgement.

This rubric is load-bearing. It is referenced by the four canon YAML files (`fields-data.yaml`, `fields-data-cogs.yaml`, `fields-data-carriers.yaml`, `cognovamx-fields.yaml`), by Appendix M prose, by the triage script, and by the MX Extensions note when a vendor proposes a new `x-vendor-` field.

---

## Rule 1: The Describes-the-Document Test

**The question.** Does this field describe the document itself, or does it describe what the document is about?

**A field is in scope only if it describes the document.**

An article about cats has fields that describe the article — its title, author, publication date, reading level, licence. It does not have fields that describe cats. Cats belong to a cat taxonomy, not to MX.

A dataset carries MX identity fields (who made it, when, where it came from) and defers the dataset-specific vocabulary (columns, types, units) to DCAT or CSVW. MX describes the dataset as a document, DCAT describes its tabular structure.

The test rejects two classes of field that have historically crept into MX:

- **Subject-matter vocabulary** — fields that describe the content rather than the carrier (e.g. `carbonFootprint` of the *activity documented*, `chemicalFormula` of the *substance discussed*).
- **Domain-adjacent operational fields** — fields that describe an operation on something other than the document (e.g. `deploymentEnvironment` of the *service being described*, `testCoverage` of the *code being documented*).

Both are out. Both have external standards that already cover them.

---

## Rule 2: The Three-Lens Test

A field that passes Rule 1 must also serve at least one of these three lenses:

| Lens | Question the field answers | Examples |
|------|----------------------------|----------|
| **Lifecycle** | Who made it, when, why, how to use it, where it came from? | `author`, `created`, `publicationDate`, `version`, `derivedFrom`, `runbook` |
| **Trust** | Can this document be trusted? Authorship verified, integrity preserved, provenance traced? | `proofOfAuthorship`, `integritySignature`, `provenancePedigree`, `licence`, `authorSignature` |
| **Operational governance** | What does a maintainer need to know to operate on the document? | `maintainer`, `status`, `contentState`, `handoverContact`, `reviewCycle` |

One field can legitimately serve multiple lenses — `author` is lifecycle and trust; `licence` is trust and ops; `version` is lifecycle and ops. That is fine. The rule is *at least one*, not *exactly one*.

If a candidate field passes Rule 1 but serves none of these three lenses, it is in a different category and does not belong in MX. Candidates that repeatedly fall outside the three lenses signal a missing fourth lens in the canon, which is a standards discussion (an MXS amendment), not a field-addition decision.

---

## Rule 3: The Code Exception

Code files are documents. They have authors, licences, creation dates, and derivations. MX covers those, under the same rules.

Code files also have *behavioural* vocabulary — function signatures, API surface, test metadata, parameter lists, type annotations, call graphs. These describe what the code does, not the code as a document. They are out of MX scope.

**The line.** If a field would apply equally to a sonnet, a CSV, or a shell script — authorship, licence, derivation, source repo, modification date — it is a provenance field and belongs in the standard. If a field only makes sense for executable code — signatures, tests, APIs, type systems — it is a code-craft field and belongs in the language's own convention (JSDoc, Python docstrings, Doxygen, Rust's rustdoc).

**What stays in `fields-data-carriers.yaml`** under this rule: the minimal code-provenance vocabulary — author of the file, licence, derivation, source repo, dependency declarations framed as *derivation*, not as runtime description. Roughly ten fields, down from forty.

**What leaves.** Function-level annotations, API-surface metadata, test metadata, inline code annotations describing behaviour, parameter descriptions, type declarations, call-site metadata. If a JSDoc tag already covers it, MX does not.

---

## Rule 4: Tier Placement

A field that survives Rules 1-3 must be placed in the right tier of the three-file canon.

| Tier | File | Placement rule |
|------|------|----------------|
| **Standard** | `fields-data.yaml` | Applies to any frontmatter-carrying artefact regardless of type. No prefix. Governed by The Gathering. |
| **Carrier-specific** | `fields-data-carriers.yaml` | Applies only to a specific non-prose carrier (currently only code). Minimal provenance vocabulary. No prefix. Governed by The Gathering. |
| **Vendor** | `cognovamx-fields.yaml` (or any `x-vendor-*-fields.yaml`) | Vendor-specific workflow that passes Rules 1-3 but is not broadly applicable. Uses `x-vendor-` prefix. Governed by the vendor, never by The Gathering. |

The vendor tier is an extension mechanism, not an escape hatch. A field that fails Rules 1-3 does not qualify for the vendor tier either. It qualifies for "not in MX at all" — possibly in a workflow-config namespace, a Schema.org block, or a DCAT profile, depending on what the field actually is.

A vendor field that describes a vendor's operational governance of a document (e.g. `x-mx-blogState`, `x-mx-reviewQueue`) can sit in the vendor tier. A vendor field that describes subject matter (e.g. `x-mx-carbonFootprint` of a documented activity) cannot. The Rule 1 test applies identically at every tier.

---

## Rule 5: Genuineness

Genuineness is a new family in the standard tier, added as a named group of three trust-lens fields:

| Field | Purpose | Aligns with |
|-------|---------|-------------|
| `proofOfAuthorship` | A verifiable link between the named author and the artefact. Cryptographic signature, trust-chain, or published-by-known-entity. Answers *"I made this, and I can prove it."* | W3C Verifiable Credentials; Signed Exchanges |
| `integritySignature` | A hash or signature over the artefact content that lets a reader detect tampering since publication. Answers *"what you read is what was written."* | RFC 9421 HTTP Message Signatures; Subresource Integrity |
| `provenancePedigree` | A traceable chain from this artefact back to its source, including any transformations along the way. Derivation tree. Answers *"where did this come from, and through whom?"* | W3C PROV-O; Content Credentials (C2PA) |

The three fields are siblings at the top level. "Genuineness" is the name of the family in prose (Appendix M section header, Chapter 20 narrative) — it is not itself a field. Adopters can implement any subset: provenance without integrity, or authorship without provenance. Claiming all three gives the strongest trust signal.

---

## Section 5: Worked examples

These resolve the recurring grey zones so the same question is not re-litigated each time a new field is proposed.

| Field | Decision | Reasoning |
|-------|----------|-----------|
| `title` | **IN — standard** | Describes the document (lifecycle). Universal identity. |
| `author` | **IN — standard** | Describes the document (lifecycle + trust). Defined in the MX Core Metadata note. |
| `publicationDate` | **IN — standard** | Describes the document (lifecycle). Universal. |
| `targetAudience` | **IN — standard** | Describes the document (who it's written for). Property of the artefact, not of its subject. |
| `readingLevel` | **IN — standard** | Describes the document (how hard to read). Property of the artefact. |
| `wordCount` | **IN — standard** | Describes the document (a measurable attribute of the artefact). |
| `keywords` | **IN — standard** | Describes the document for discovery. Where it slides into subject-matter classification, align with Schema.org `keywords` and `about` rather than inventing. |
| `licence` | **IN — standard** | Describes the document (trust + ops). |
| `maintainer` | **IN — standard** | Describes the document (ops). |
| `contentState` | **IN — standard** | Describes the document's lifecycle position (draft / in-review / published / archived). |
| `runbook` | **IN — standard** | Describes how to operate on the document (ops). |
| `derivedFrom` / `source` | **IN — standard** | Describes the document's provenance (lifecycle + trust). |
| `proofOfAuthorship`, `integritySignature`, `provenancePedigree` | **IN — standard (new)** | Genuineness family, Rule 5. |
| `version` | **IN — standard** | Describes the document (lifecycle + ops). |
| `functionSignature` | **OUT** | Describes what the code does, not the code as a document. Rule 3. |
| `testCoverage` | **OUT** | Describes code behaviour, not the code document. Rule 3. |
| `apiEndpoints` / `restMethods` | **OUT** | Describes the API, not the document. OpenAPI covers this. |
| `deploymentEnvironment` | **OUT** | Describes an operation on a service, not on the document. Ops-for-the-wrong-thing. |
| `carbonFootprint` | **OUT** | Subject-matter (of the activity being documented). Rule 1. |
| `chemicalFormula` | **OUT** | Subject-matter. Rule 1. |
| `priceCurrency` | **OUT** | Schema.org Offer territory. Defer. |
| `dependencies` | **IN — carriers** (as derivation) | If framed as *this document derives from these upstream packages/modules*, it is provenance. If framed as *this runtime needs these*, it is deployment config, which is out. The frame determines the ruling. |
| `dependencyGraph` (full graph with versions and transitive edges) | **OUT** | Describes the runtime system, not the document. Tooling territory (npm, pip, cargo). |
| `sourceRepo` | **IN — carriers** | Provenance. Where the code document came from. |
| `ai.contextWindow` (parked ai.* proposal) | **OUT of MX** | Describes a runtime property of a model, not of the document. Belongs in a workflow-config namespace or a vendor-specific runtime config, not in MX frontmatter. |
| `ai.promptTemplate` | **OUT of MX** | Describes runtime behaviour, not the document. Same ruling. |
| `x-mx-blogState` | **IN — vendor** | Vendor-specific operational governance of a document (CogNovaMX workflow state machine). Passes Rules 1-3 but is vendor-specific, so vendor tier. |
| `x-mx-reviewQueue` | **IN — vendor** | Same. |
| `x-mx-targetCustomerSegment` | **OUT of MX** | Subject-matter of marketing taxonomy. Vendor prefix does not rescue a field that fails Rule 1. Belongs in CRM config, not frontmatter. |
| `validatesAgainst` | **IN — standard** | Describes the document's claimed conformance (trust). Universal. Imported from cog-spec v1.0; canon adopts camelCase per NDR-2026-02-16. |
| `contractFields` / `metadataFields` | **IN — standard (new, signing)** | Describe which parts of the document are contract-bearing (covered by signature) versus mutable. Universal trust primitive. Foundation for the MX Contract Fingerprinting and Signing note. Imported from cog-spec v1.0 where they appeared as `x-mx-contract-fields` / `x-mx-metadata-fields`; promoted to first-class in MX canon — signing is a universal concern, not vendor-specific. |
| `x-mx-thresholds`, `x-mx-approvers`, `x-mx-approvalProcedure`, `x-mx-reviewProcedure`, `x-mx-targetEnvironment` | **IN — vendor** | Workflow contract extensions for cogs that declare an executable approval/review procedure. Pass Rule 1 (describe the contract this document carries) and Rule 2 (operational governance). Vendor tier because shapes are organisation-specific even when the field names are shared; defined in the MX Extensions note's Workflow Contract Extensions section. |
| `cogHeader` | **IN — cogs** | Trust + lifecycle lens; describes the document's spec/runtime conformance claim. Frontmatter equivalent of the cog magic-header HTML comment defined in cog-spec v1.2 §2.5. Universal cog primitive, no vendor scope. Defined in the MX Cogs note; lives in `fields-data-cogs.yaml`. |

### Worked example: integrating a kebab-case external spec

When integrating an external spec that uses a different naming convention (e.g. cog-spec v1.0 in [mx-upgraded-reginald](../../mx-upgraded-reginald/) uses kebab-case), translate field names at canon authoring time. **Do NOT add a translation layer to the validator.** The external spec's read-write window is the time to sweep-convert; until then, exempt the read-only mount path from validation (see [scripts/cog-tools.js](../../scripts/cog-tools.js) `SKIP_DIRS` and [scripts/mx-validator.js](../../scripts/mx-validator.js) `SKIP_DIRS`). The integration steps are:

1. Triage every external field through Rules 1-4. Discard duplicates already in canon.
2. Translate kebab-case (`approval-procedure`) to camelCase (`approvalProcedure`) when authoring the canon entry.
3. For fields the external spec marks as vendor (`x-mx-` prefix), keep the prefix; for fields whose concern is universal, drop the prefix and place in standard core.
4. Update the relevant MX draft note(s) to document the new fields with their MX-canonical names. The external spec aligns later (read-write phase).

---

## Section 6: How to run the triage

1. **Open a candidate field.** Read its definition and where it is currently used.
2. **Apply Rule 1.** Does it describe the document, or the document's subject? If subject, cut. Record the deferral target (Schema.org, DCAT, workflow config, language convention) in the cut log.
3. **Apply Rule 2.** Lifecycle, trust, or ops? If none, the field either belongs to a missing fourth lens (flag for discussion, do not cut yet) or is a marker of scope creep (cut with prejudice).
4. **Apply Rule 3** if the field relates to code. Provenance stays, behaviour goes.
5. **Apply Rule 4** to place survivors in the right tier. Standard if universal; carriers if code-only provenance; vendor if narrow-use workflow.
6. **Record the decision.** Either the field survives with its tier recorded in `classification-manifest.yaml`, or it is removed with a one-line reason. The cut log is the audit trail; every removal must be reversible by reading one line.
7. **Run the gates.** `npm run cog:validate`, `npm run fields:gate`, `npm run fields:compliance`. Zero new errors is the bar; any displacement needs an explanation in the cut log.

---

## Section 7: When the rubric itself needs to change

This rubric is v1.0-draft. Each of its rules was derived from an interview in April 2026 about MX intent, and like any standard it will learn from its own application. The trigger to revise:

- **A new lens surfaces repeatedly.** If dozens of proposed fields cluster around something that isn't lifecycle, trust, or ops, the canon is missing a lens. Revise Rule 2.
- **A new carrier appears.** Rule 3 currently handles only code. If MX starts covering data as a native carrier (rather than deferring wholly to DCAT), or media with a provenance-native stance, Rule 3 needs parallel clauses.
- **A vendor tier threatens to fragment.** If multiple vendors propose near-identical `x-vendor-*` fields, that's a signal the field is broad enough to promote to standard. Rule 4 should describe the promotion path explicitly if that happens.

Changes to this rubric are amendments to the MX Extensions note, governed by The Gathering's Stream review. Do not change it in a single commit without posting to Stream.

---

## References

- [fields-data.yaml](fields-data.yaml) — the standard canon this rubric governs
- [fields-data-carriers.yaml](fields-data-carriers.yaml) — the code-provenance carrier canon
- [cognovamx-fields.yaml](cognovamx-fields.yaml) — the CogNovaMX vendor extension example pack
- [Appendix M](../../datalake/manuscripts/mx-books/mx-appendices/appendix-m-index-of-metadata.md) — prose mirror of the canon
- [Appendix U](../../datalake/manuscripts/mx-books/mx-appendices/appendix-u-a-standard-that-knows-what-it-isnt.md) — the architectural rationale for defer-to-existing-standards
- [MX draft notes](https://github.com/ddttom/mx-shared-gathering) — Core Metadata, Cogs, Extensions, Provenance, Carrier Formats, Contract Fingerprinting and Signing — the drafts this rubric is the scope test for
- [principles.cog.md](principles.cog.md) — core MX principles this rubric descends from
