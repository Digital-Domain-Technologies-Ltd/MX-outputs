---
title: "A Standard That Knows What It Isn't"
description: "A preview of Chapter 20 of MX: The Protocols — why the MX standard stays small, defers to DCAT, Schema.org, EXIF, and IETF, and why that restraint is the architecture, not a limitation."
author: "Tom Cranstoun"
created: "2026-04-16"
modified: "2026-04-16"

mx:
  contentState: "draft"
  blogFilename: "a-standard-that-knows-what-it-isnt"
  blogUrl: ""
  publicationDate: ""
  tags: [mx, standards, the-gathering, architecture, preview, protocols]
  runbook: "Preview blog post for chapter 20 of MX: The Protocols (publishes 1 July 2026). Explains the architecture of the proposed MX standards family and the 'defer to existing standards' principle that keeps the core small."
  generate:
    script: "scripts/generate-content-html.cjs"
    format: "html"
    instructions: "Generate semantic HTML with WCAG 2.1 AA compliance"
---

# A Standard That Knows What It Isn't

Most metadata standards tell you what they cover. They publish a vocabulary, define every field, claim a scope, and ask implementers to adopt the whole surface. MX is different. MX is an open standard for Machine Experience, and the thing it is most careful about is what it does not define.

This post previews Chapter 20 of *MX: The Protocols*, which publishes on 1 July 2026. The chapter names the field dictionary and the standards that govern it. This preview gives you the architecture in five minutes: why the standard is small, what it defers to, how it extends, and where the governance lives.

## The problem the architecture solves

A machine-readable metadata standard has a failure mode. It grows to describe everything, collides with existing standards, and forces implementers to choose. Does this dataset use MX database vocabulary or DCAT? Does this image use MX media fields or Schema.org? Does this API use MX code fields or OpenAPI? Every collision is a fork. Every fork splits the community.

MX refuses the collision. The principle is stated in Appendix M of The Protocols: **reuse existing standards, do not duplicate them**. When Schema.org defines `ImageObject` with `width`, `height`, `encodingFormat`, and `creator`, MX does not publish its own image vocabulary. When DCAT v3 defines `Dataset`, `Distribution`, and `accessURL`, MX does not invent a database profile. When IETF defines the RFC format for standards-document authoring, MX uses it for standards proposals instead of building its own.

MX is what is left after you subtract what the established standards already cover. What is left turns out to be a small, coherent vocabulary about governance: identity, provenance, machine-readable instructions, conformance, the rules for extending the standard without polluting it. That is the scope of the four proposed standards that went into public review in April 2026.

## The four proposed standards

The Gathering — the independent, community-governed body behind MX — currently has four proposed standards awaiting community ratification via Stream. None is final. All are stable enough to build against, and all will evolve through public review.

**MXS-01 Core Metadata (proposed).** The identity vocabulary every MX-aware document carries. Title, author, created, modified, version, description, tags, audience, status, licence, maintainer. Plus the two-zone frontmatter model that keeps Zone 1 for document identity and Zone 2 (the `mx:` block) for operational metadata. Three conformance levels: Level 1 is the baseline every MX document must satisfy; Level 2 adds complete metadata; Level 3 adds AI-specific optimisation.

**MXS-02 Extensions (proposed).** The namespace policy. Standard fields carry no prefix and belong to The Gathering. Vendor public extensions use `x-vendor-` (for CogNovaMX, `x-mx-`). Vendor private extensions add a `-p-` marker (for CogNovaMX, `x-mx-p-`). The prefix is the policy: every reader of a cog can tell at a glance whether a field belongs to the standard, to a named vendor, or to a vendor's operational private layer. The convention follows HTTP custom-header practice.

**MXS-03 Provenance (proposed).** Attribution, trust, maintenance, and decision-record references. The fields that establish who created content, how it was derived, who maintains it, and what governance decisions shaped it. This is the layer that turns a cog from "some text claiming to be a guide" into "a guide with a traceable origin and a nominated maintainer."

**MXS-04 Carrier Formats (proposed).** Code. Source files — JavaScript, TypeScript, Python, Go, shell, CSS — carry metadata through their native mechanisms (JSDoc, CSS comments, shell comment blocks, SQL comment blocks). MXS-04 specifies the field vocabulary for those carriers: function-level annotations, API surface metadata, test metadata, inline code annotations. Databases and media are explicitly not in scope.

That is the entire active family. Two earlier drafts were deferred. An AI/Agent Policy draft was shelved because adjacent efforts at W3C, NIST, and IEEE are still converging, and standardising an MX-specific AI vocabulary now would risk forking. A Profile-Specific Metadata draft was withdrawn after the canon split because the profiles it was going to cover had either moved to MXS-04 or to external standards.

## The three-file canon

The proposed standards have a machine-readable form. It lives in three sibling YAML files, published at stable URLs so any implementer can fetch them directly.

[`fields-data.yaml`](https://mx.allabout.network/canon/fields-data.yaml) is the core — roughly 103 fields. Identity, classification, relationships, lifecycle, machine-readability infrastructure, folder metadata, cog contract, non-YAML markup carriers, Dublin Core and Schema.org pass-through fields. This is what MXS-01 specifies.

[`fields-data-carriers.yaml`](https://mx.allabout.network/canon/fields-data-carriers.yaml) is the carriers companion — roughly 40 fields. Code vocabulary only: function metadata, API surface, tests, inline annotations, dependency declarations. This is what MXS-04 specifies.

[`cognovamx-fields.yaml`](https://mx.allabout.network/canon/cognovamx-fields.yaml) is a vendor extension example pack — roughly 309 fields carrying CogNovaMX-specific workflow vocabulary. It is not part of the standard. Other vendors author parallel files under the same three-tier pattern.

Tooling loads all three and merges them into a unified view. A document that uses a standard field does not know which file the field came from. That is the point.

## What MX defers to

This is the table that defines the architecture. When the content on the left needs a vocabulary, MX points at the standard on the right and does not duplicate.

| Content type | Defer to |
|--------------|----------|
| Images, video, audio, creative works | Schema.org (`ImageObject`, `VideoObject`, `AudioObject`, `CreativeWork`, `license`) |
| Embedded media metadata | EXIF, IPTC, XMP, ID3 |
| Datasets and data catalogues | DCAT v3 |
| Tabular schemas (CSV, database columns, keys) | CSVW |
| Generic resource identity (dates, rights, formats, language) | Dublin Core |
| API surface specification | OpenAPI |
| Accessibility | WCAG 2.1, ARIA |
| Standards-document authoring | IETF RFC format |
| Package manifests | `package.json`, `pyproject.toml`, equivalents |

A cog describing a dataset declares its MX identity fields (title, author, created) and then includes a DCAT or CSVW block with the dataset-specific vocabulary. The MX identity comes from MXS-01. The dataset vocabulary comes from DCAT or CSVW. There is no conflict because there is no overlap.

This is why the IETF RFC format is in the table. The Stream platform The Gathering uses for its own standards drafts adopts RFC frontmatter (`title`, `abbrev`, `docname`, `normative`, `informative`) and RFC body structure (`--- abstract`, `--- middle`, `--- back`). That is not a contradiction of MX's own metadata standard. It is the same principle applied consistently. Standards-document authoring is the IETF's domain. MX defers there too.

## Why this matters

The discipline looks austere. A standard this small feels suspiciously incomplete. It is not incomplete. It is scoped.

Three things follow from the scoping.

**Ecosystem compatibility.** A cog that carries Schema.org for its media, DCAT for its datasets, and OpenAPI for its API surface is simultaneously a valid MX document, a valid Schema.org document, a valid DCAT document, and a valid OpenAPI document. No translation layer is needed. No converter has to run. The existing tool chains for each external standard work directly on MX content.

**Clear extensibility.** When a vendor needs fields MX does not define, MXS-02 provides the extension mechanism. The `x-vendor-` prefix is a visible, auditable marker. A cog reader encountering an unfamiliar prefixed field knows immediately that it is a vendor extension, not a claim on standard vocabulary. The namespace is the honest declaration: *this is my extension, not The Gathering's standard, read at your discretion*.

**Manageable standard growth.** A small core stays maintainable. The community can read it. Conformance is achievable. Review cycles are bounded. The Gathering's governance model — open participation, consensus ratification, no membership — only works when the specification is small enough that the community can hold it in its collective head.

## Where to look it up

Four public artefacts carry the material. Each has a distinct job and a different shape, and together they let a reader pick up the standard in whichever form suits them.

**The source drafts** — [github.com/ddttom/mx-shared-gathering](https://github.com/ddttom/mx-shared-gathering). This is the reading copy: the four `.cog.md` files that carry MXS-01..04 in their authored form, with YAML frontmatter, prose, and the cross-references Appendix U points at. Open the repo in a browser and you can read the four proposed standards end-to-end. If you want to cite a specific clause, link here. If you want to file an editorial issue against the source text, this is the tracker.

**The machine-readable canon** — [mx.allabout.network/canon/](https://mx.allabout.network/canon/). Three YAML files that are the actual source of truth behind the four drafts. `fields-data.yaml` carries the core vocabulary (MXS-01 + MXS-02 + MXS-03). `fields-data-carriers.yaml` carries the code-carrier vocabulary (MXS-04). `cognovamx-fields.yaml` is the CogNovaMX vendor extension example pack — not part of the standard, but useful as a reference for other vendors authoring their own `x-vendor-` files. Tooling that validates MX documents should fetch from here. When the YAML and the prose disagree, the YAML is authoritative by definition — a drift checker verifies alignment.

**The Stream RFC drafts** — one repo per standard under [TG-Community](https://github.com/TG-Community): [draft-cranstoun-mx-core-metadata](https://github.com/TG-Community/draft-cranstoun-mx-core-metadata), [draft-cranstoun-mx-extensions](https://github.com/TG-Community/draft-cranstoun-mx-extensions), [draft-cranstoun-mx-provenance](https://github.com/TG-Community/draft-cranstoun-mx-provenance), [draft-cranstoun-mx-carrier-formats](https://github.com/TG-Community/draft-cranstoun-mx-carrier-formats). Same content as the source drafts, converted into IETF RFC format for Stream's review process — the frontmatter keys (`title`, `abbrev`, `docname`, `normative`, `informative`) and body delimiters (`--- abstract`, `--- middle`, `--- back`) that Stream expects. These are the versions the community reviews and ratifies through [stream.tg.community](https://stream.tg.community). They carry the formal RFC 2119 language ("MUST", "SHOULD", "MAY") the conformance levels depend on.

**The book** — Appendix M of *MX: The Protocols* is the complete prose reference for every field the drafts cite: definitions, types, validation values, profile membership, usage examples, cross-references. Sections 22 through 27 cover the field dictionary, folder metadata, the book-manuscript template, the carrier format map, the HTML carrier writing guide, and the canon-layout explanation with the external-standards deferral table. Appendix U is the short architecture companion to Chapter 20 — the same "defer to existing standards" argument this blog previews, in a form the book can link to from any chapter that needs it.

Four artefacts, one set of drafts. Source for reading, YAML for tooling, RFC for formal review, book for reference prose. Pick whichever entry point fits what you are trying to do — they all point at the same standard.

## Chapter 20 goes further

This preview hits the architecture and the rationale. Chapter 20 of *MX: The Protocols* goes further: it traces the full three-pass reading model a machine uses to comprehend a cog, walks through the economics of shared vocabulary, covers author-facing guidance (what to include at each conformance level), and explains how participation through The Gathering's Stream process actually works. The chapter reads as reference material — the authoritative place to send a reader who has understood the cog format from Chapter 19 and now needs to know what governs it.

The book publishes on **1 July 2026**. The standards described in Chapter 20 will, by then, have been through several weeks of Stream review. Where a field has changed, the chapter will track it. Where a standard has been ratified, it will say so.

If you are building content for machine consumption, the architecture in Chapter 20 is what you are building against. You can start today. The drafts are stable. The deferrals are real. The extensibility mechanism is published. The standard stays small because the discipline is tight.

And because The Gathering's process is open and requires no membership, if you have a view on how MX should evolve, Stream is how you contribute. The cog format you use in a year will reflect whoever engages between now and then — including, potentially, you.

---

*MX: The Protocols publishes on 1 July 2026. Chapter 20 is "The Fields and the Standards." Source drafts: [github.com/ddttom/mx-shared-gathering](https://github.com/ddttom/mx-shared-gathering). Machine-readable canon: [mx.allabout.network/canon/](https://mx.allabout.network/canon/). Stream RFC drafts: [github.com/TG-Community](https://github.com/TG-Community) (the four `draft-cranstoun-mx-*` repos). Community review: [tg.community](https://tg.community) · [stream.tg.community](https://stream.tg.community). Book reference: Appendix M and Appendix U of *The Protocols*.*
