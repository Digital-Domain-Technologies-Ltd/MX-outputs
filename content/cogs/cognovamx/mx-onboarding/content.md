---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "mx-onboarding"
version: "1.0"
description: Single entry-point reading-order navigator for newcomers to MX. Walks the gathering drafts in dependency order, then the published manuscripts, then the cog registry, then the validator stack. Use as the first thing a fresh human or agent reads.

created: 2026-05-03
modified: 2026-05-05

author: Tom Cranstoun

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/mx-onboarding.cog.md
  maintainer: info@cognovamx.com
  license: proprietary
  status: published
  x-mx-riskLevel: low

  x-mx-category: mx-core
  partOf: mx-os
  refersTo: [what-is-a-cog, what-is-mx-os, how-to-write-a-cog, mx-add-field]
  buildsOn: []
  tags: [onboarding, reading-order, newcomer, navigator, mx]

  audience: [humans, machines]
  readingLevel: beginner
  contentType: info-doc
  runbook: "Reference reading-order navigator. The chat-mediated walkthrough lives in the /mx-onboarding skill."

---

# mx-onboarding

The first thing a newcomer should read about MX.

## What is MX?

MX (Machine Experience) is the framework for making the web work for machines as well as people. It defines the metadata vocabulary, the file conventions, and the governance discipline that lets a document be self-describing, discoverable, and trustworthy when an agent reads it. MX is not a parser, not a server, not a CMS — it is the agreement that everyone who writes a document, an agent, or a tool can build against.

The framework is published as a set of open-standard draft notes (in IETF style), a machine-readable field dictionary, a published manuscript pair, and a registry of operational cogs. The drafts are the contract; the dictionary is the machine SSOT; the manuscripts are the human reference; the cogs are the runtime.

## Recommended reading order

Each item is self-contained. The order below moves from the structural floor upwards. A newcomer can jump to any item, but the prerequisites declared on each one are the items that make it land cleanly.

### Tier 1 — The standard

Read these first. They define the contract everyone else operates under.

| Order | Item | What you will know after reading | Prerequisite |
|------:|------|----------------------------------|--------------|
| 1 | [`mx-shared-gathering/draft-field-pattern.md`](../../mx-shared-gathering/draft-field-pattern.md) | The structural template every MX field definition follows. The single shape every other note uses to define a field. | None |
| 2 | [`mx-shared-gathering/draft-core-metadata.md`](../../mx-shared-gathering/draft-core-metadata.md) | The floor: identity, lifecycle, and operational fields every MX-aware document declares (`title`, `author`, `created`, `description`, `status`, `contentType`, `canonicalUri`, ...). | 1 |
| 3 | [`mx-shared-gathering/draft-provenance.md`](../../mx-shared-gathering/draft-provenance.md) | Attribution, trust, maintenance, and decision-record references — the metadata that makes a document's origin and stewardship verifiable. | 2 |
| 4 | [`mx-shared-gathering/draft-extensions.md`](../../mx-shared-gathering/draft-extensions.md) | Namespace policy: how vendors extend the vocabulary (`x-mx-`, `x-mx-p-`) without polluting the core. | 2 |
| 5 | [`mx-shared-gathering/draft-carrier-formats.md`](../../mx-shared-gathering/draft-carrier-formats.md) | How MX metadata is carried across markdown, HTML, JSDoc, CSS, shell, EXIF/XMP, sidecar, and SQL carriers. | 2 |
| 6 | [`mx-shared-gathering/draft-cogs.md`](../../mx-shared-gathering/draft-cogs.md) | The optional `.cog.md` layer for documents that want to be navigable, composable, and runnable by agents. | 2 |
| 7 | [`mx-shared-gathering/draft-workflow-contracts.md`](../../mx-shared-gathering/draft-workflow-contracts.md) | Top-level fields for cogs that declare an executable approval, review, or procedural workflow. | 6 |
| 8 | [`mx-shared-gathering/draft-contract-fingerprinting.md`](../../mx-shared-gathering/draft-contract-fingerprinting.md) | The signing format a cog uses *when it elects to be signed*. Signing is optional. | 6 |
| 9 | [`mx-shared-gathering/draft-document-accessibility.md`](../../mx-shared-gathering/draft-document-accessibility.md) | How a publisher SHOULD declare and demonstrate the accessibility of a non-HTML document carrier. | 2 |
| 10 | [`mx-shared-gathering/draft-agent-directory-discovery.md`](../../mx-shared-gathering/draft-agent-directory-discovery.md) | How a host serves an llms.txt-style agent-directory file so crawlers and agents reliably find it. | None (independent) |

### Tier 2 — The published manuscripts

The standards above are the contract. The manuscripts are the human reference and the worked-out narrative for why MX exists.

| Order | Item | What you will know after reading |
|------:|------|----------------------------------|
| 11 | `datalake/manuscripts/mx-books/mx-handbook/` | The Handbook. The business case for MX, the mechanics of how AI reads the web, and the practical patterns. Read for the *why*. |
| 12 | `datalake/manuscripts/mx-books/mx-protocols/` | The Protocols. The implementation specifications, in book form. Read for the *how*. |
| 13 | `datalake/manuscripts/mx-books/mx-appendices/appendix-m-index-of-metadata.md` | Appendix M — the prose mirror of the field dictionary. Look up any field's natural-language definition here. |

### Tier 3 — The cog registry

The operational layer. These are the cogs you'll actually invoke.

| Order | Item | What you will know after reading |
|------:|------|----------------------------------|
| 14 | [`scripts/cogs/what-is-a-cog.cog.md`](what-is-a-cog.cog.md) | The conceptual primer for cogs — what they are and why they exist. |
| 15 | [`scripts/cogs/how-to-write-a-cog.cog.md`](how-to-write-a-cog.cog.md) | The general authoring guide for any cog. The single normative path from blank file to working `.cog.md`. |
| 16 | [`scripts/cogs/mx-add-field.cog.md`](mx-add-field.cog.md) | The action-cog flow for adding a new MX field to the canon (lockstep across `fields-data.yaml`, Appendix M, and any relevant gathering draft). |
| 17 | [`scripts/cogs/what-is-mx-os.cog.md`](what-is-mx-os.cog.md) | What the MX OS is — the runtime layer that turns the standard into an operational system. |
| 18 | [`scripts/cogs/building-action-docs.cog.md`](building-action-docs.cog.md) | The drill-down for action-cogs — the self-executing flavour with `x-mx-execute:` blocks. |

### Tier 4 — The machine SSOT and the validator stack

The fields the standard names are enforced by tooling. Read these last; you'll use them, not study them.

| Order | Item | What you will know after reading |
|------:|------|----------------------------------|
| 19 | [`mx-canon/ssot/fields-data.yaml`](../../mx-canon/ssot/fields-data.yaml) | The machine-readable field dictionary. Every field name, type, profile, status. |
| 20 | [`mx-canon/ssot/definitions-index.md`](../../mx-canon/ssot/definitions-index.md) | The cross-reference index. Look up any concept to find every file where it is defined or referenced. |
| 21 | [`scripts/lib/frontmatter-validator.js`](../../scripts/lib/frontmatter-validator.js) | The validator. Enforces required fields, deprecations, enum values, `canonicalUri` correctness, and the carrier-specific routing. |
| 22 | [`scripts/check-mx-compliance.js`](../../scripts/check-mx-compliance.js) | The per-file compliance scanner used by `/step-commit` Step 8. |
| 23 | [`datalake/knowledge/system/adding-an-mx-field.cog.md`](../../datalake/knowledge/system/adding-an-mx-field.cog.md) | The runbook for extending the dictionary by hand. The action-cog `mx-add-field` automates this. |

## For agents specifically

If you are an agent landing fresh on MX, your shortest legible path is:

1. Read `mx-shared-gathering/draft-field-pattern.md` (the structural template).
2. Read `mx-shared-gathering/draft-core-metadata.md` (the field floor).
3. Read `mx-canon/ssot/fields-data.yaml` (the machine dictionary you'll consult).
4. Consult `mx-canon/ssot/definitions-index.md` whenever you need to know where a concept lives.

That's enough to read any MX-aware document and act on it correctly.

## For humans considering writing a cog

If your goal is to author a `.cog.md` of any flavour, your shortest legible path is:

1. Read items 1, 2, 6 from Tier 1 (field-pattern, core-metadata, cogs).
2. Read items 14, 15 from Tier 3 (what-is-a-cog, how-to-write-a-cog).
3. Invoke `/cog-author` to scaffold your cog.

If your goal is to add a new MX field, your shortest legible path is:

1. Read items 1, 2 from Tier 1 (field-pattern, core-metadata).
2. Read item 16 from Tier 3 (mx-add-field).
3. Invoke `/mx-add-field` to walk the lockstep flow.

## Related

- [`/cog-author`](../../.claude/skills/cog-author/skill.md) — entry point for cog authoring.
- [`/mx-add-field`](../../.claude/skills/mx-add-field/skill.md) — entry point for adding a field.
- [`/mx-onboarding`](../../.claude/skills/mx-onboarding/skill.md) — the slim entry-point skill that routes here.
