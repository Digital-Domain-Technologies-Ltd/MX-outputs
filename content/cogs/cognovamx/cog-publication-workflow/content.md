---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "cog-publication-workflow"
version: "1.0"
description: "Cog publication workflow — author, validate, register, and publish a cog to the Reginald registry."
created: 2026-03-03
modified: 2026-05-05
author: Tom Cranstoun

mx:
  maintainer: info@cognovamx.com
  license: proprietary
  status: published
  x-mx-riskLevel: high
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/cog-publication-workflow.cog.md

  x-mx-category: mx-tools
  partOf: mx-os
  refersTo: [registry-sync, what-is-a-cog]
  buildsOn: [what-is-a-cog]
  tags: [cog, publication, registry, reginald, workflow, validation]
  deliverable: "validated cog registered in REGINALD"

  audience: both

  contentType: info-doc
  runbook: "Reference SOP for publishing a cog. Walk the steps manually; no executable script is provided."
---

# Cog Publication Workflow

The quality gate for the cog ecosystem. Every cog — whether authored by Tom, Maxine, or a future contributor — passes through the same pipeline before it enters the Reginald registry.

## Why This Exists

A registry is only as trustworthy as its contents. Without a publication workflow:

- Cogs with missing metadata enter the registry and break discovery tools
- Inconsistent frontmatter makes machine parsing unreliable
- Undocumented fields creep in, diverging from the field dictionary
- Validation happens informally or not at all

This cog formalises the process. Author. Validate. Register. Publish. Every time.

---

## The Pipeline

```
Author          Validate           Register          Publish
  │                │                  │                 │
  ▼                ▼                  ▼                 ▼
Write cog  →  Lint + check  →  npm run cog:sync  →  Confirmed
  file        frontmatter,       updates              in
              fields,            index.json            registry
              structure
```

Each phase is an explicit checkpoint. Failure at any phase stops the pipeline.

---

## What Gets Checked

| Check | Tool | What It Verifies |
|-------|------|-----------------|
| Markdown linting | `markdownlint-cli2` | Formatting rules (blank lines, headings, code blocks) |
| YAML frontmatter | Parser | Two-zone model, required fields, valid values |
| Field dictionary | Cross-reference | All fields exist in `fields.cog.md`, correct types |
| Content structure | Reader | H1 heading, H2 sections, British English |
| Action cog rules | Checker | License, execute block, runbook, file location |

---

## For AI Agents

1. Read the `execute.actions` block for full procedures
2. Start with `validate` to check a cog before publishing
3. Use `publish` for the full pipeline (validate is included)
4. Use `status` to check if a cog is already registered
5. Use existing `npm run cog:validate` and `npm run cog:sync` commands — do not reimplement

**Output Reporting Principle:** Report the full absolute path of every output file created or modified.

---

## Dependencies

| Tool | Required | Install |
|------|----------|---------|
| node | Yes | `brew install node` |
| npm | Yes | Comes with Node |
| markdownlint-cli2 | Yes | `npm install -g markdownlint-cli2` or use `npx` |

---

## Related

- `scripts/cogs/registry-sync.cog.md` — keeps the registry in sync after changes
- `mx-canon/ssot/fields.cog.md` — field dictionary (validation source of truth)
- `mx-canon/mx-the-gathering/specifications/cog-unified-spec.cog.md` — the cog format specification
- `mx-reginald/index.json` — the registry this workflow publishes to

---

*"Every cog earns its place. No shortcuts, no exceptions."*
