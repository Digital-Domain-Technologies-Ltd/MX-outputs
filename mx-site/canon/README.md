---
"@context": https://mx.allabout.network/canon/context.json
title: "MX Canon - Public Mirror"
description: "Public mirror of the machine-readable MX canon: standard fields, carrier vocabulary, CogNovaMX vendor extensions, workflow vocabulary, and the MX frontmatter JSON Schema. Canonical source for MX-aware tools."
author: "Tom Cranstoun"
created: "2026-04-16"
modified: 2026-09-05

type: info-doc
mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/canon/README.md

---

# MX Canon - Public Mirror

This folder publishes the machine-readable MX canon at stable URLs.

## Files

| File | Purpose | Scope |
|------|---------|-------|
| [fields-data.yaml](fields-data.yaml) | Core standard vocabulary | MXS-01 + MXS-02 + MXS-03 |
| [fields-data-carriers.yaml](fields-data-carriers.yaml) | Code-carrier vocabulary | MXS-04 |
| [cognovamx-fields.yaml](cognovamx-fields.yaml) | Vendor extension pack | `x-mx-` / `x-mx-p-` namespaces |
| [workflow-fields.yaml](workflow-fields.yaml) | Workflow and process vocabulary for tooling artefacts | CogNovaMX tooling, outside the standard |
| [mx-frontmatter.schema.v0.1.json](mx-frontmatter.schema.v0.1.json) | JSON Schema (Draft 2020-12) validating MX three-zone frontmatter presence and format | The standard's CI on-ramp |
| [context.json](context.json) | The served MX context: the field dictionary's standard-vocabulary alignments as one JSON-LD 1.1 context, generated from the dictionary, never hand-edited. A frontmatter block that declares this file's URL as its `"@context"` is a linked-data island whose fields mean what the dictionary says they mean | JSON-LD / YAML-LD consumers |

The two field-dictionary files together form the proposed standard that The Gathering governs. The vendor extension pack is not part of the standard - it is a reference for other vendors authoring their own `x-vendor-` extension files - and the workflow vocabulary is CogNovaMX tooling vocabulary kept in its own dictionary so the canon stays focused on document content.

Publishing the vendor pack documents the vocabulary; it does not put those fields on the web. The vendor layer is stripped from every published artefact, so a `x-mx-` name listed here will not appear in the frontmatter of any page mx.allabout.network serves. The pack answers what an extension namespace looks like, not what CogNovaMX declared on any particular document.

## Validate with the schema

The JSON Schema lets any repo enforce MX frontmatter presence and format in the CI it already runs, with any Draft 2020-12 validator. With [docmeta](https://hawkeyexl.github.io/docmeta/), reference it by URL from `docmeta.config.yaml`:

```yaml
schemas:
  - https://mx.allabout.network/canon/mx-frontmatter.schema.v0.1.json
```

It composes with docmeta's built-in OKF schema (`google:okf:0.1`) - both allow additional properties, and the zone model keeps the claimed keys consistent. The schema proves presence and format only: a passing document is machine-readable MX. Whether anyone attests it, whether it is current, and whether its claims are corroborated are trust signals a registry answers, not a schema.

Schema ids are stable: a future revision arrives as a new versioned file and `$id`, never a change to an existing one, so an adopter's pinned check never silently retightens.

## Status

These files are drafts. The standards they underpin (MXS-01..04) are proposed, not ratified. Stream review at [stream.tg.community](https://stream.tg.community).

## License

MIT. The MX standard is free, open, and vendor-neutral.

## Authority

The prose companion is Appendix M of *MX: The Protocols*. Where machine-readable YAML and prose disagree, the YAML is authoritative by definition - a drift checker verifies alignment.
