---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "validate-cog"
version: 0.1.0
description: Validate cogs against the MX Cog Specification

created: 2026-02-06
modified: 2026-05-07

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: draft
  x-mx-riskLevel: medium
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/validate-cog.cog.md

  x-mx-category: mx-core
  partOf: mx-core
  refersTo: [cog-spec]
  tags: [validation, cog, spec, meta]


  dependencies: []
  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
  x-mx-convergence: true
  x-mx-accessibility: true
  quality:
    semantic: true

---

# validate-cog

Validate cogs (Community Owned Governance Standards) against the MX Cog Specification.

## Purpose

MX eats its own dogfood. This cog validates other cogs to ensure they follow the spec.

## Usage

### Check Single Cog

```bash
mx cog validate-cog check MX/cogs/core/llms-txt.md
```

**Output:**

```json
{
  "valid": true,
  "path": "MX/cogs/core/llms-txt.md",
  "errors": [],
  "warnings": [
    "Consider adding more tags"
  ],
  "score": 95
}
```

### Check All Cogs

```bash
mx cog validate-cog all MX/cogs
```

**Output:**

```json
{
  "total": 12,
  "valid": 12,
  "invalid": 0,
  "cogs": [...]
}
```

### Auto-Fix

```bash
mx cog validate-cog fix MX/cogs/core/my-cog.md
```

## What It Checks

### Must Pass (Errors)

- [ ] Frontmatter present and valid YAML
- [ ] `name` matches filename
- [ ] All required fields present
- [ ] Valid ISO 8601 timestamps
- [ ] At least one action in `execute.actions`
- [ ] Valid semver version

### Should Pass (Warnings)

- [ ] `mx` alignment declared
- [ ] Description under 160 characters
- [ ] At least one tag
- [ ] `refersTo` populated
- [ ] Examples in documentation

## Validation Score

| Criteria | Points |
|----------|--------|
| Required fields | 40 |
| Valid structure | 20 |
| MX alignment | 15 |
| Documentation | 15 |
| Relationships | 10 |

## Related

- [Cog Specification](../../spec/cog-spec.md)

---

**"Design for Both."** ⚡
