---
title: "MX AI/Agent Policy Standard"
version: "1.0-draft"
created: 2026-04-02
modified: 2026-04-16
author: The Gathering
description: "DEFERRED. The ai.* field namespace was moved to CogNovaMX vendor extensions (cognovamx-fields.yaml) on 2026-04-15 pending concrete adoption. See mx-canon/mx-maxine-lives/registers/ADR/ai-governance-namespace-proposal.cog.md for the current proposal status. This standard will be revised or withdrawn once adoption evidence exists."

mx:
  status: deferred
  license: MIT
  category: standard
  partOf: mx-the-gathering
  contentType: specification
  buildsOn: [cog-unified-spec, mxs-01-core-metadata]
  tags: [standard, ai, agent, policy, governance, specification]
  audience: [humans, machines]
  cacheability: permanent
  runbook: "This standard defines all AI/agent governance fields. Use the conformance tables to determine which AI fields are required at each level. Core governance fields (Sections 5-6) apply to all documents. Context-specific fields (Sections 7-10) apply only to their designated profiles."
---

# MX AI/Agent Policy Standard

**Version:** 1.0-draft
**Status:** Draft
**Date:** 2 April 2026
**Governing body:** The Gathering
**License:** MIT

---

## 1. Abstract

This document defines the AI and agent governance metadata vocabulary for the Machine Experience (MX) framework. It specifies the fields that control how AI agents interact with MX-aware documents, folders, code, media, and database resources — covering assistance policies, training controls, generation permissions, inline annotations, and context-specific AI governance.

The vocabulary is organised into six groups: core AI governance fields (top-level assistance and disclosure policies), AI training and data access fields (folder-level training controls), code-level AI fields (source code governance), inline code annotations (line-level AI instructions), media AI fields (asset-level AI governance), and database AI fields (data resource governance).

This standard adopts the conformance level framework (Level 1, Level 2, Level 3) defined in the [MX Core Metadata Standard](mxs-01-core-metadata.cog.md) by reference.

---

## 2. Conformance

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

### 2.1 Conformance levels

This standard adopts the three conformance levels defined in the [MX Core Metadata Standard](mxs-01-core-metadata.cog.md), Section 2.1:

| Level | Name | Requirement (for AI/Agent fields) |
|-------|------|-----------------------------------|
| Level 1 | **MX Core** | `aiAssistance` declared |
| Level 2 | **MX Standard** | Adds `aiTraining`, `aiEditable`, `aiGenerationAllowed` |
| Level 3 | **MX Complete** | Full `ai.*` field coverage for all applicable contexts |

A document claiming conformance at a given level MUST satisfy all requirements at that level and all lower levels.

### 2.2 Authoritative status

This standard is an authoritative specification published by The Gathering. The field definitions, conformance requirements, and normative rules in this document are self-standing.

---

## 3. Scope and relationship to other standards

### 3.1 What this document covers

This document specifies:

- **Core AI governance fields** — assistance policies, disclosure, attribution, and context declarations
- **AI training and data access fields** — folder-level training policies, sensitive paths, and generation permissions
- **Code-level AI fields** — governance applied to source code files, functions, classes, dependencies, tests, and APIs
- **Inline code annotations** — line-level AI instructions embedded in source code
- **Media AI fields** — AI governance for images, video, audio, and media rights
- **Database AI fields** — AI governance for database schemas, tables, columns, queries, and procedures

### 3.2 What this document does not cover

The following are defined in companion standards:

| Topic | Standard |
|-------|----------|
| Zone 1/Zone 2 identity and operational fields | [MX Core Metadata Standard](mxs-01-core-metadata.cog.md) |
| Namespace policy, carrier formats, extension mechanisms | [MX Extensions Standard](mxs-02-extensions.cog.md) |
| Trust, attribution, verification, decision records | [MX Provenance Standard](mxs-03-provenance.cog.md) |
| Content-type-specific fields (non-AI aspects) | [MX Profile-Specific Metadata Standard](mxs-05-profile-metadata.cog.md) |

### 3.3 Relationship to existing standards

This standard builds upon:

- **[MX Core Metadata Standard](mxs-01-core-metadata.cog.md)** — defines the conformance level framework this standard adopts
- **[Cog Unified Specification](../specifications/cog-unified-spec.cog.md)** — defines the cog file format that these fields populate
- **[NDR-02: camelCase Naming](../naming-decisions/ndr-02-camelcase-naming.cog.md)** — all field names in this standard use camelCase
- **[NDR-03: Spelling Neutrality](../naming-decisions/ndr-03-spelling-neutrality.cog.md)** — field names avoid regional spelling variants

### 3.4 Shared fields with the Core standard

Two fields — `readingLevel` and `contextProvides` — have their base definitions in the [MX Core Metadata Standard](mxs-01-core-metadata.cog.md). This document specifies the AI/agent policy implications of those fields: how agents SHOULD use `readingLevel` for content selection, and how `contextProvides` declares what context a document offers to agents.

---

## 4. Terminology

- **Agent** — An AI system that reads, interprets, or acts upon MX metadata. Includes server-side LLMs, browser extensions, automation tools, local models, and agentic OS orchestrators.
- **Inheritable** — A field whose value propagates from a parent folder's `.mx.yaml.md` to all child documents and sub-folders unless explicitly overridden.
- **Profile** — A named set of fields applicable to a specific document type (e.g., `core`, `folder`, `code-file`, `media-image`, `database`). Profiles are defined in the [MX Profile-Specific Metadata Standard](mxs-05-profile-metadata.cog.md).
- **Training-time access** — AI model training from crawled data (Common Crawl, historical). Respects `robots.txt`.
- **Inference-time access** — Real-time data fetch during user queries. May or may not respect `robots.txt`.

---

## 5. Field definitions — Core AI governance fields

### 5.1 `ai`

| Property | Value |
|----------|-------|
| **Type** | object |
| **Zone** | 2 (mx:) |
| **Profile** | core |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Container for AI-related metadata: disclosure, attribution, and freshness policies.

**Example:**

```yaml
mx:
  ai:
    disclosure: true
    attribution: "Generated by Claude"
```

**Normative notes:**

- The `ai` object acts as a namespace for AI-specific metadata at the document level.
- When present, implementations SHOULD process all declared sub-fields.
- Context-specific `ai.*` fields (Sections 7-10) extend this namespace for code, media, and database profiles.

---

### 5.2 `aiAssistance`

| Property | Value |
|----------|-------|
| **Type** | string-or-object |
| **Zone** | 2 (mx:) |
| **Profile** | core, folder |
| **Conformance** | MUST (Level 1) |
| **Valid values** | welcome, restricted, prohibited |
| **Default** | "welcome" |

**Definition:** AI assistance policy. Declares the level of AI interaction permitted for this document or folder.

**Example:**

```yaml
mx:
  aiAssistance: welcome
```

**Normative notes:**

- This field is inheritable. Child documents inherit the parent folder's value unless they explicitly override it.
- `welcome` — AI agents MAY freely assist with this content.
- `restricted` — AI agents MAY assist under constraints (check additional fields for specific restrictions).
- `prohibited` — AI agents MUST NOT interact with this content.
- Authors SHOULD only declare this field when restricting or prohibiting. The default value of `"welcome"` applies when the field is omitted.
- As a Level 1 field, `aiAssistance` is the minimum AI governance declaration required for MX conformance.

---

### 5.3 `aiEditable`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | core, folder |
| **Conformance** | SHOULD (Level 2) |
| **Default** | false (in documents), true (in folder metadata) |

**Definition:** Whether AI may edit content within this document or folder.

**Example:**

```yaml
mx:
  aiEditable: false
```

**Normative notes:**

- This field is inheritable. Child documents inherit the parent folder's value unless they explicitly override it.
- The default differs by context: `false` for individual documents (conservative — human content is protected by default), `true` for folder metadata (folder metadata is operational and AI-manageable).
- When `aiAssistance` is `prohibited`, `aiEditable` MUST be treated as `false` regardless of its declared value.

---

### 5.4 `contextProvides`

| Property | Value |
|----------|-------|
| **Type** | string-or-array |
| **Zone** | 2 (mx:) |
| **Profile** | core |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** What context this document provides to agents. Declares the knowledge or capabilities an agent gains by reading this document.

**Example:**

```yaml
mx:
  contextProvides: "Field definitions and naming conventions for the MX ecosystem"
```

```yaml
mx:
  contextProvides:
    - "MX field naming conventions"
    - "Conformance level definitions"
    - "Zone 1 and Zone 2 field model"
```

**Normative notes:**

- The base definition of this field is in the [MX Core Metadata Standard](mxs-01-core-metadata.cog.md). This document specifies the agent policy implication: agents SHOULD use `contextProvides` to determine whether a document is relevant to their current task before reading the full content.
- The value MAY be a single string or an array of strings.
- Agents SHOULD match their information needs against `contextProvides` declarations to optimise context window usage.

---

### 5.5 `readingLevel`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | core |
| **Conformance** | MAY (Level 3) |
| **Valid values** | beginner, intermediate, advanced, expert |
| **Default** | *(none)* |

**Definition:** Content reading level. Helps agents recommend content based on user expertise.

**Example:**

```yaml
mx:
  readingLevel: intermediate
```

**Normative notes:**

- The base definition of this field is in the [MX Core Metadata Standard](mxs-01-core-metadata.cog.md). This document specifies the agent policy implication: agents SHOULD use `readingLevel` to select content appropriate to the user's expertise when multiple documents cover the same topic.
- When an agent is serving a beginner user and multiple documents exist on the same topic, the agent SHOULD prefer documents with `readingLevel: beginner` over those marked `expert`.
- When omitted, agents SHOULD NOT make assumptions about the content's difficulty.

---

## 6. Field definitions — AI training and data access fields

### 6.1 `aiTraining`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | folder |
| **Conformance** | SHOULD (Level 2) |
| **Valid values** | conditional, allowed, prohibited |
| **Default** | *(none)* |

**Definition:** AI training policy. Declares whether the content within this folder may be used for AI model training.

**Example:**

```yaml
mx:
  aiTraining: conditional
```

**Normative notes:**

- This field is inheritable. Child folders and documents inherit the parent's value unless they explicitly override it.
- `allowed` — content MAY be used for AI training without restriction.
- `conditional` — content MAY be used for AI training subject to conditions declared in `aiTrainingConditions`.
- `prohibited` — content MUST NOT be used for AI training.
- When `conditional`, implementations MUST check `aiTrainingConditions` to determine what restrictions apply.

---

### 6.2 `aiTrainingConditions`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | folder |
| **Conformance** | SHOULD (Level 2) when `aiTraining` is `conditional` |
| **Default** | *(empty array)* |

**Definition:** Conditions under which training is permitted. Only relevant when `aiTraining` is `conditional`.

**Example:**

```yaml
mx:
  aiTraining: conditional
  aiTrainingConditions:
    - exclude credentials
    - exclude personal data
```

**Normative notes:**

- This field is only meaningful when `aiTraining` is `conditional`. When `aiTraining` is `allowed` or `prohibited`, this field SHOULD be omitted.
- Values are free-form strings describing the conditions. Implementations SHOULD interpret them as exclusion or inclusion rules.

---

### 6.3 `aiSensitivePaths`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | folder |
| **Conformance** | SHOULD (Level 2) |
| **Default** | *(empty array)* |

**Definition:** Glob patterns for paths that AI agents must not read or train on.

**Example:**

```yaml
mx:
  aiSensitivePaths:
    - "secrets/**"
    - ".env"
    - "credentials.*"
```

**Normative notes:**

- Patterns use standard glob syntax.
- AI agents encountering paths matching these patterns MUST NOT read, index, or include the matched files in training data.
- This field complements `aiTraining` by providing path-level granularity within a folder that otherwise permits AI access.

---

### 6.4 `aiPermittedAreas`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | folder |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** Glob patterns identifying paths where AI generation is allowed.

**Example:**

```yaml
mx:
  aiPermittedAreas:
    - "docs/**"
    - "src/public/**"
```

**Normative notes:**

- When declared, AI generation SHOULD be limited to paths matching these patterns.
- If both `aiPermittedAreas` and `aiProhibitedAreas` are declared, `aiProhibitedAreas` takes precedence for any path matching both patterns.

---

### 6.5 `aiProhibitedAreas`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | folder |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** Glob patterns identifying paths where AI generation is prohibited.

**Example:**

```yaml
mx:
  aiProhibitedAreas:
    - "legal/**"
    - "contracts/**"
```

**Normative notes:**

- AI agents MUST NOT generate content in paths matching these patterns.
- `aiProhibitedAreas` takes precedence over `aiPermittedAreas` when a path matches both.

---

### 6.6 `aiGenerationAllowed`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | folder |
| **Conformance** | SHOULD (Level 2) |
| **Default** | true |

**Definition:** Whether AI may generate new content within this folder.

**Example:**

```yaml
mx:
  aiGenerationAllowed: true
```

**Normative notes:**

- This field is inheritable. Child folders inherit the parent's value unless they explicitly override it.
- When `false`, AI agents MUST NOT create new files or content within this folder.
- This is a broad switch. For path-level granularity, use `aiPermittedAreas` and `aiProhibitedAreas`.

---

### 6.7 `aiGenerationReviewRequired`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | folder |
| **Conformance** | SHOULD (Level 2) |
| **Default** | true |

**Definition:** Whether AI-generated content requires human review before publication or commitment.

**Example:**

```yaml
mx:
  aiGenerationReviewRequired: true
```

**Normative notes:**

- This field is inheritable. Child folders inherit the parent's value unless they explicitly override it.
- When `true`, AI-generated content MUST be flagged for human review before it is considered final.
- When `false`, AI-generated content MAY be committed or published without human review.
- The default of `true` reflects the principle that human oversight is the norm; autonomous AI generation is the exception.

---

## 7. Field definitions — Code-level AI fields

The following fields govern AI behaviour in source code contexts. They reside within the `ai` namespace (e.g., `ai.contextRequired`) and apply to the profiles indicated. All code-level AI fields reside in Zone 2 (the `mx:` object).

### 7.1 `ai.contextRequired`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | code-file, code-function, code-class |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** Files AI should read before editing this resource.

**Example:**

```yaml
mx:
  ai:
    contextRequired:
      - "src/types/user.ts"
```

**Normative notes:**

- AI agents SHOULD read all listed files before making changes to ensure they understand the broader context.
- Paths MAY be relative to the repository root.

---

### 7.2 `ai.contextProvides`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | code-file |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** Concepts this file defines that other files depend on.

**Example:**

```yaml
mx:
  ai:
    contextProvides:
      - "User type definitions"
```

**Normative notes:**

- This is the code-level counterpart to the document-level `contextProvides` field (Section 5.4).
- AI agents SHOULD use this field to understand dependency relationships between code files.

---

### 7.3 `ai.generationNotes`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | code-file, code-function |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Guidance for AI generating similar code.

**Example:**

```yaml
mx:
  ai:
    generationNotes: "Follow the factory pattern established in UserFactory.ts"
```

**Normative notes:**

- AI agents SHOULD follow these notes when generating new code that is structurally similar.

---

### 7.4 `ai.reason`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | code-file, code-function, code-class, database |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Explanation for AI restrictions on this resource.

**Example:**

```yaml
mx:
  ai:
    reason: "This function contains legally mandated calculation logic that must match the specification exactly."
```

**Normative notes:**

- When `ai.doNotModify` is `true` or `aiEditable` is `false`, this field SHOULD explain why.
- AI agents SHOULD present this reason to users who request changes.

---

### 7.5 `ai.confidence`

| Property | Value |
|----------|-------|
| **Type** | number |
| **Zone** | 2 (mx:) |
| **Profile** | code-function, code-class |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Confidence in implementation correctness, expressed as a value between 0 and 1.

**Example:**

```yaml
mx:
  ai:
    confidence: 0.95
```

**Normative notes:**

- Values MUST be in the range 0.0 to 1.0 inclusive.
- AI agents SHOULD exercise greater caution when modifying code with low confidence scores.

---

### 7.6 `ai.testCoverage`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | code-function |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether this function has test coverage.

**Example:**

```yaml
mx:
  ai:
    testCoverage: true
```

**Normative notes:**

- When `true`, AI agents SHOULD run existing tests after modifying this function.
- When `false`, AI agents SHOULD recommend adding tests before making changes.

---

### 7.7 `ai.edgeCases`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | code-function, code-test |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** Known edge cases and expected behaviour.

**Example:**

```yaml
mx:
  ai:
    edgeCases:
      - "Returns null when input array is empty"
      - "Throws TypeError for non-numeric values"
```

**Normative notes:**

- AI agents SHOULD ensure edge cases remain handled after any modification.
- In test profiles, this field declares what the tests are designed to cover.

---

### 7.8 `ai.refactorNotes`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | code-function |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Guidance for refactoring this function.

**Example:**

```yaml
mx:
  ai:
    refactorNotes: "Consider extracting the validation logic into a separate validator class."
```

**Normative notes:**

- AI agents SHOULD consult this field before proposing refactoring changes.

---

### 7.9 `ai.doNotModify`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | code-function, code-class |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** AI should not change this function or class.

**Example:**

```yaml
mx:
  ai:
    doNotModify: true
    reason: "Certified calculation — changes require regulatory approval."
```

**Normative notes:**

- When `true`, AI agents MUST NOT modify this resource.
- Authors SHOULD provide `ai.reason` when setting this to `true`.

---

### 7.10 `ai.sensitive`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | code-class, code-api |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether this resource handles sensitive data.

**Example:**

```yaml
mx:
  ai:
    sensitive: true
```

**Normative notes:**

- When `true`, AI agents SHOULD apply heightened caution: avoid logging, avoid exposing values in output, and flag any proposed changes for human review.

---

### 7.11 `ai.modificationImpact`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | code-class |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** What might break if this class is changed.

**Example:**

```yaml
mx:
  ai:
    modificationImpact: "All API endpoints depend on this base class. Changes cascade to the entire REST layer."
```

**Normative notes:**

- AI agents SHOULD present this information to users before proposing changes.
- This field is particularly valuable for high-fan-out classes with many dependants.

---

### 7.12 `ai.replacementPermitted`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | code-dependency |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI may suggest replacing this dependency.

**Example:**

```yaml
mx:
  ai:
    replacementPermitted: false
    reason: "Contractual obligation to use this vendor library."
```

**Normative notes:**

- When `false`, AI agents MUST NOT suggest alternative libraries or frameworks.

---

### 7.13 `ai.upgradePermitted`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | code-dependency |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI may suggest upgrading this dependency.

**Example:**

```yaml
mx:
  ai:
    upgradePermitted: true
```

**Normative notes:**

- When `false`, AI agents MUST NOT suggest version upgrades. Authors SHOULD provide `ai.reason` to explain why.

---

### 7.14 `ai.generationPermitted`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | code-test |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI may generate tests for this test suite or test file.

**Example:**

```yaml
mx:
  ai:
    generationPermitted: true
```

**Normative notes:**

- When `true`, AI agents MAY add new test cases.
- When `false`, AI agents MUST NOT generate new tests — only modify existing ones if `aiEditable` permits.

---

### 7.15 `ai.mustCover`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | code-test |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** Scenarios that tests must cover.

**Example:**

```yaml
mx:
  ai:
    mustCover:
      - "Null input handling"
      - "Concurrent access"
      - "Boundary values for pagination"
```

**Normative notes:**

- AI agents generating tests SHOULD ensure all listed scenarios are covered.
- AI agents MUST NOT remove test cases that cover listed scenarios.

---

### 7.16 `ai.doNotMock`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | code-test |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** Dependencies that should not be mocked in tests.

**Example:**

```yaml
mx:
  ai:
    doNotMock:
      - "DatabaseConnection"
      - "PaymentGateway"
```

**Normative notes:**

- AI agents generating or modifying tests MUST NOT create mock implementations for the listed dependencies.

---

### 7.17 `ai.safeToCall`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | code-api, database-query |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI may call this endpoint or execute this query.

**Example:**

```yaml
mx:
  ai:
    safeToCall: true
```

**Normative notes:**

- When `false`, AI agents MUST NOT invoke this endpoint or query, even in test or development contexts, unless explicitly authorised by a human.

---

### 7.18 `ai.testMode`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | code-api |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Test mode availability for this API endpoint.

**Example:**

```yaml
mx:
  ai:
    testMode: "sandbox"
```

**Normative notes:**

- Indicates how AI agents can safely interact with this API during testing.
- Common values include: `sandbox`, `dry-run`, `mock`, `none`.

---

### 7.19 `ai.sensitiveRequestFields`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | code-api |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** Request fields that contain sensitive data.

**Example:**

```yaml
mx:
  ai:
    sensitiveRequestFields:
      - "password"
      - "creditCardNumber"
      - "socialSecurityNumber"
```

**Normative notes:**

- AI agents MUST NOT log, display, or include the values of these fields in output.

---

### 7.20 `ai.sensitiveResponseFields`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | code-api |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** Response fields that contain sensitive data.

**Example:**

```yaml
mx:
  ai:
    sensitiveResponseFields:
      - "authToken"
      - "encryptionKey"
```

**Normative notes:**

- AI agents MUST NOT log, display, or include the values of these fields in output.
- AI agents SHOULD redact these fields when presenting API responses to users.

---

### 7.21 `ai.sideEffects`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | code-api, database-procedure |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** Side effects of calling this endpoint or procedure.

**Example:**

```yaml
mx:
  ai:
    sideEffects:
      - "Sends email notification"
      - "Updates billing record"
      - "Triggers webhook to external service"
```

**Normative notes:**

- AI agents MUST present side effects to users before calling an endpoint or procedure.
- When `ai.safeToCall` is `false` and `ai.sideEffects` is populated, agents SHOULD explain the side effects as the reason the call is not safe.

---

## 8. Field definitions — Inline code annotations

The following fields are inline annotations embedded in source code comments rather than in YAML frontmatter. They provide line-level AI governance.

### 8.1 `mx:ai`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | *(inline — source code comment)* |
| **Profile** | code-inline |
| **Conformance** | MAY (Level 3) |
| **Valid values** | do-not-remove, do-not-modify, preserve-logic, explain-before-changing, generated, reviewed |
| **Default** | *(none)* |

**Definition:** Line-level annotation with AI instructions. Applied as a comment on or adjacent to a line of source code.

**Example:**

```javascript
const TAX_RATE = 0.20; // mx:ai do-not-modify
```

```python
# mx:ai preserve-logic
def calculate_pension_contribution(salary, age):
    ...
```

**Normative notes:**

- `do-not-remove` — AI agents MUST NOT delete this line.
- `do-not-modify` — AI agents MUST NOT change this line.
- `preserve-logic` — AI agents MAY refactor syntax but MUST NOT alter the logical behaviour.
- `explain-before-changing` — AI agents MUST explain proposed changes to the user and obtain approval before modifying.
- `generated` — This line was generated by AI. Informational; no behavioural constraint.
- `reviewed` — This AI-generated line has been reviewed by a human. Informational; no behavioural constraint.
- Annotations SHOULD appear as end-of-line comments or as a comment on the line immediately preceding the annotated code.

---

### 8.2 `mx:sensitive`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | *(inline — source code comment)* |
| **Profile** | code-inline |
| **Conformance** | MAY (Level 3) |
| **Valid values** | no-log, no-expose |
| **Default** | *(none)* |

**Definition:** Line-level annotation marking sensitive data.

**Example:**

```javascript
const apiKey = process.env.API_KEY; // mx:sensitive no-log no-expose
```

**Normative notes:**

- `no-log` — AI agents MUST NOT include this value in logs, output, or conversation history.
- `no-expose` — AI agents MUST NOT display this value to users or include it in generated output.
- Multiple flags MAY be combined, separated by spaces.

---

## 9. Field definitions — Media AI fields

### 9.1 `ai.altText`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | media-image, media-video |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** AI-friendly alternative text for media assets.

**Example:**

```yaml
mx:
  ai:
    altText: "Bar chart showing quarterly revenue growth from Q1 to Q4 2025, with Q3 showing a 15% increase."
```

**Normative notes:**

- This field supplements the standard HTML `alt` attribute by providing richer context optimised for AI comprehension.
- AI agents SHOULD prefer `ai.altText` over the HTML `alt` attribute when both are present, as it is designed to convey more semantic detail.

---

### 9.2 `ai.contentTags`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | media-image, media-video |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** AI-detected or human-assigned content tags for media assets.

**Example:**

```yaml
mx:
  ai:
    contentTags:
      - "chart"
      - "revenue"
      - "quarterly-report"
```

**Normative notes:**

- Tags SHOULD be lowercase strings.
- Tags enable AI agents to search and classify media assets without processing the media content itself.

---

### 9.3 `ai.descriptionConfidence`

| Property | Value |
|----------|-------|
| **Type** | number |
| **Zone** | 2 (mx:) |
| **Profile** | media-image, media-video, media-audio, database-schema |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Confidence in the accuracy of the description or alternative text, expressed as a value between 0 and 1.

**Example:**

```yaml
mx:
  ai:
    altText: "Photograph of a server rack in a data centre."
    descriptionConfidence: 0.85
```

**Normative notes:**

- Values MUST be in the range 0.0 to 1.0 inclusive.
- AI agents SHOULD treat low-confidence descriptions with caution and MAY offer to re-describe the asset.

---

### 9.4 `ai.sensitiveContent`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | media-image, media-video |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether media contains sensitive content.

**Example:**

```yaml
mx:
  ai:
    sensitiveContent: true
```

**Normative notes:**

- When `true`, AI agents SHOULD apply content warnings and avoid displaying the media without user consent.
- This field applies to visual or auditory sensitivity, not data sensitivity (for which `ai.sensitive` is used).

---

### 9.5 `ai.transcriptSource`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | media-video, media-audio |
| **Conformance** | MAY (Level 3) |
| **Valid values** | human, ai-generated, ai-assisted |
| **Default** | *(none)* |

**Definition:** Origin of the transcript associated with this media asset.

**Example:**

```yaml
mx:
  ai:
    transcriptSource: ai-assisted
```

**Normative notes:**

- `human` — transcript was created entirely by a human.
- `ai-generated` — transcript was created entirely by AI.
- `ai-assisted` — transcript was created by AI and reviewed or corrected by a human.
- AI agents SHOULD assign higher confidence to `human` transcripts and lower confidence to `ai-generated` transcripts.

---

### 9.6 `ai.citationRequired`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | media-rights |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI must cite this asset when referencing it.

**Example:**

```yaml
mx:
  ai:
    citationRequired: true
```

**Normative notes:**

- When `true`, AI agents MUST include a citation or attribution when referencing, quoting, or describing this media asset.

---

### 9.7 `ai.extraction`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | media-rights |
| **Conformance** | MAY (Level 3) |
| **Valid values** | prohibited, permitted |
| **Default** | *(none)* |

**Definition:** Whether AI may extract information from this media asset.

**Example:**

```yaml
mx:
  ai:
    extraction: permitted
```

**Normative notes:**

- `prohibited` — AI agents MUST NOT extract data, text, or structured information from this asset.
- `permitted` — AI agents MAY extract information.

---

### 9.8 `ai.reproduction`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | media-rights |
| **Conformance** | MAY (Level 3) |
| **Valid values** | prohibited, permitted |
| **Default** | *(none)* |

**Definition:** Whether AI may reproduce this media asset.

**Example:**

```yaml
mx:
  ai:
    reproduction: prohibited
```

**Normative notes:**

- `prohibited` — AI agents MUST NOT reproduce, duplicate, or generate derivatives of this asset.
- `permitted` — AI agents MAY reproduce the asset, subject to any licence restrictions declared in the `license` field.

---

## 10. Field definitions — Database AI fields

### 10.1 `ai.queryAllowed`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | database, database-schema, database-table |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI may execute queries against this resource.

**Example:**

```yaml
mx:
  ai:
    queryAllowed: true
```

**Normative notes:**

- When `false`, AI agents MUST NOT execute any queries against this database, schema, or table.
- This field is inheritable: a `false` value at the database level prohibits queries on all schemas and tables within it.

---

### 10.2 `ai.schemaAccess`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | database |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI may read the database schema.

**Example:**

```yaml
mx:
  ai:
    schemaAccess: true
```

**Normative notes:**

- When `false`, AI agents MUST NOT inspect table structures, column definitions, or relationship metadata.

---

### 10.3 `ai.sampleData`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | database, database-table |
| **Conformance** | MAY (Level 3) |
| **Valid values** | allowed, anonymised, prohibited |
| **Default** | *(none)* |

**Definition:** Sample data access policy.

**Example:**

```yaml
mx:
  ai:
    sampleData: anonymised
```

**Normative notes:**

- `allowed` — AI agents MAY access sample data without restriction.
- `anonymised` — AI agents MAY access sample data only if personally identifiable information has been removed or anonymised.
- `prohibited` — AI agents MUST NOT access sample data.

---

### 10.4 `ai.trainingData`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | database, database-table |
| **Conformance** | MAY (Level 3) |
| **Valid values** | permitted, anonymised, prohibited |
| **Default** | *(none)* |

**Definition:** Training data usage policy.

**Example:**

```yaml
mx:
  ai:
    trainingData: prohibited
```

**Normative notes:**

- `permitted` — data MAY be used for AI model training.
- `anonymised` — data MAY be used for AI model training only after anonymisation.
- `prohibited` — data MUST NOT be used for AI model training.

---

### 10.5 `ai.schemaVisible`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | database-table |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI may see this table's schema (column definitions, types, constraints).

**Example:**

```yaml
mx:
  ai:
    schemaVisible: true
```

**Normative notes:**

- This provides table-level granularity within a database where `ai.schemaAccess` is `true`.

---

### 10.6 `ai.semanticDescription`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | database-table, database-view |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** AI-friendly description of the table or view's purpose and content.

**Example:**

```yaml
mx:
  ai:
    semanticDescription: "Contains customer order history including order dates, items, quantities, and fulfilment status."
```

**Normative notes:**

- AI agents SHOULD use this field to understand the table's purpose without needing to inspect data.
- The description SHOULD be written in plain language suitable for an agent with no prior knowledge of the database.

---

### 10.7 `ai.commonQueries`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | database-table, database-view |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** Common query patterns for this table or view.

**Example:**

```yaml
mx:
  ai:
    commonQueries:
      - "SELECT * FROM orders WHERE customer_id = ? ORDER BY order_date DESC"
      - "SELECT COUNT(*) FROM orders WHERE status = 'pending'"
```

**Normative notes:**

- AI agents MAY use these patterns as starting points when constructing queries.
- Patterns SHOULD use parameter placeholders rather than literal values.

---

### 10.8 `ai.joinsWith`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Zone** | 2 (mx:) |
| **Profile** | database-table |
| **Conformance** | MAY (Level 3) |
| **Default** | *(empty array)* |

**Definition:** Common join relationships for this table.

**Example:**

```yaml
mx:
  ai:
    joinsWith:
      - "customers ON orders.customer_id = customers.id"
      - "products ON order_items.product_id = products.id"
```

**Normative notes:**

- AI agents SHOULD use these declarations to construct correct joins without needing to infer relationships from foreign key metadata alone.

---

### 10.9 `ai.searchable`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | database-column |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI may search this column (use it in WHERE clauses or filters).

**Example:**

```yaml
mx:
  ai:
    searchable: true
```

**Normative notes:**

- When `false`, AI agents MUST NOT use this column in query filters.
- This does not prevent the column from appearing in result sets; it only restricts its use as a search criterion.

---

### 10.10 `ai.maskInResponses`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | database-column |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI must mask values from this column in responses.

**Example:**

```yaml
mx:
  ai:
    maskInResponses: true
```

**Normative notes:**

- When `true`, AI agents MUST replace column values with masked representations (e.g., `****`, `[REDACTED]`) in all output.
- Applies to query results, summaries, and any context where the column value would be visible.

---

### 10.11 `ai.displayName`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Zone** | 2 (mx:) |
| **Profile** | database-column |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Human-friendly name for this column, used by AI when presenting results.

**Example:**

```yaml
mx:
  ai:
    displayName: "Customer Email Address"
```

**Normative notes:**

- AI agents SHOULD use `ai.displayName` instead of the raw column name when presenting data to users.

---

### 10.12 `ai.traverse`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | database-relationship |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI may traverse this relationship in queries.

**Example:**

```yaml
mx:
  ai:
    traverse: true
```

**Normative notes:**

- When `false`, AI agents MUST NOT follow this relationship when constructing joins or nested queries.

---

### 10.13 `ai.safeToRun`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | database-query, database-procedure |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI may execute this query or stored procedure.

**Example:**

```yaml
mx:
  ai:
    safeToRun: false
    reason: "This procedure triggers batch processing and should only be run during maintenance windows."
```

**Normative notes:**

- When `false`, AI agents MUST NOT execute this query or procedure.
- Authors SHOULD provide `ai.reason` or `ai.sideEffects` to explain why execution is restricted.

---

### 10.14 `ai.returnsPii`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | database-query |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether this query returns personally identifiable information (PII).

**Example:**

```yaml
mx:
  ai:
    returnsPii: true
```

**Normative notes:**

- When `true`, AI agents MUST handle the query results with PII safeguards: avoid logging, mask sensitive fields, and present only aggregated or anonymised information unless explicitly authorised.

---

### 10.15 `ai.neverSuggest`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Zone** | 2 (mx:) |
| **Profile** | database-procedure |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Whether AI should never suggest running this procedure.

**Example:**

```yaml
mx:
  ai:
    neverSuggest: true
    reason: "Destructive operation — drops and recreates all indexes."
```

**Normative notes:**

- When `true`, AI agents MUST NOT proactively suggest executing this procedure, even if it appears relevant to the user's task.
- Users may still explicitly request execution; this field governs AI-initiated suggestions only.

---

## 11. Conformance levels summary

### 11.1 Core AI governance fields (Section 5)

| Field | Level 1 (MUST) | Level 2 (SHOULD) | Level 3 (MAY) |
|-------|:-:|:-:|:-:|
| `aiAssistance` | MUST | -- | -- |
| `aiEditable` | -- | SHOULD | -- |
| `contextProvides` | -- | -- | MAY |
| `readingLevel` | -- | -- | MAY |
| `ai` | -- | -- | MAY |

### 11.2 AI training and data access fields (Section 6)

| Field | Level 1 (MUST) | Level 2 (SHOULD) | Level 3 (MAY) |
|-------|:-:|:-:|:-:|
| `aiTraining` | -- | SHOULD | -- |
| `aiTrainingConditions` | -- | SHOULD (when conditional) | -- |
| `aiSensitivePaths` | -- | SHOULD | -- |
| `aiGenerationAllowed` | -- | SHOULD | -- |
| `aiGenerationReviewRequired` | -- | SHOULD | -- |
| `aiPermittedAreas` | -- | -- | MAY |
| `aiProhibitedAreas` | -- | -- | MAY |

### 11.3 Code-level AI fields (Sections 7-8)

| Field | Level 1 (MUST) | Level 2 (SHOULD) | Level 3 (MAY) |
|-------|:-:|:-:|:-:|
| `ai.contextRequired` | -- | -- | MAY |
| `ai.contextProvides` | -- | -- | MAY |
| `ai.generationNotes` | -- | -- | MAY |
| `ai.reason` | -- | -- | MAY |
| `ai.confidence` | -- | -- | MAY |
| `ai.testCoverage` | -- | -- | MAY |
| `ai.edgeCases` | -- | -- | MAY |
| `ai.refactorNotes` | -- | -- | MAY |
| `ai.doNotModify` | -- | -- | MAY |
| `ai.sensitive` | -- | -- | MAY |
| `ai.modificationImpact` | -- | -- | MAY |
| `ai.replacementPermitted` | -- | -- | MAY |
| `ai.upgradePermitted` | -- | -- | MAY |
| `ai.generationPermitted` | -- | -- | MAY |
| `ai.mustCover` | -- | -- | MAY |
| `ai.doNotMock` | -- | -- | MAY |
| `ai.safeToCall` | -- | -- | MAY |
| `ai.testMode` | -- | -- | MAY |
| `ai.sensitiveRequestFields` | -- | -- | MAY |
| `ai.sensitiveResponseFields` | -- | -- | MAY |
| `ai.sideEffects` | -- | -- | MAY |
| `mx:ai` (inline) | -- | -- | MAY |
| `mx:sensitive` (inline) | -- | -- | MAY |

### 11.4 Media AI fields (Section 9)

| Field | Level 1 (MUST) | Level 2 (SHOULD) | Level 3 (MAY) |
|-------|:-:|:-:|:-:|
| `ai.altText` | -- | -- | MAY |
| `ai.contentTags` | -- | -- | MAY |
| `ai.descriptionConfidence` | -- | -- | MAY |
| `ai.sensitiveContent` | -- | -- | MAY |
| `ai.transcriptSource` | -- | -- | MAY |
| `ai.citationRequired` | -- | -- | MAY |
| `ai.extraction` | -- | -- | MAY |
| `ai.reproduction` | -- | -- | MAY |

### 11.5 Database AI fields (Section 10)

| Field | Level 1 (MUST) | Level 2 (SHOULD) | Level 3 (MAY) |
|-------|:-:|:-:|:-:|
| `ai.queryAllowed` | -- | -- | MAY |
| `ai.schemaAccess` | -- | -- | MAY |
| `ai.sampleData` | -- | -- | MAY |
| `ai.trainingData` | -- | -- | MAY |
| `ai.schemaVisible` | -- | -- | MAY |
| `ai.semanticDescription` | -- | -- | MAY |
| `ai.commonQueries` | -- | -- | MAY |
| `ai.joinsWith` | -- | -- | MAY |
| `ai.searchable` | -- | -- | MAY |
| `ai.maskInResponses` | -- | -- | MAY |
| `ai.displayName` | -- | -- | MAY |
| `ai.traverse` | -- | -- | MAY |
| `ai.safeToRun` | -- | -- | MAY |
| `ai.returnsPii` | -- | -- | MAY |
| `ai.neverSuggest` | -- | -- | MAY |

---

## 12. Security and privacy considerations

- The `aiSensitivePaths` field declares paths that AI agents must not access. Implementations that index or crawl files MUST respect this field. However, this is a metadata declaration, not an access control mechanism — it relies on agent compliance, not enforcement.
- The `aiTraining` field controls whether content may be used for model training. When set to `prohibited`, training pipelines MUST exclude the affected content. Enforcement depends on the training pipeline's ability to read and respect MX metadata.
- Inline `mx:sensitive` annotations with `no-log` and `no-expose` flags provide defence-in-depth for sensitive values in source code. These annotations SHOULD be combined with proper secrets management practices, not used as a substitute.
- The `ai.maskInResponses` field for database columns ensures PII is not exposed in AI-generated output. Implementations SHOULD validate that masking is applied at the response layer, not only at the query layer.
- Fields such as `ai.safeToCall`, `ai.safeToRun`, and `ai.neverSuggest` are advisory. They depend on agent compliance and SHOULD be complemented by infrastructure-level access controls.
- The `ai.returnsPii` field flags queries that return personally identifiable information. Implementations processing PII MUST comply with applicable data protection regulations (e.g., GDPR, CCPA) regardless of MX metadata declarations.

---

## 13. References

### 13.1 Normative references

- [MX Core Metadata Standard](mxs-01-core-metadata.cog.md) — conformance level framework, Zone 1/Zone 2 model, `readingLevel` and `contextProvides` base definitions
- [Cog Unified Specification](../specifications/cog-unified-spec.cog.md) — the cog document format
- [NDR-02: camelCase Naming](../naming-decisions/ndr-02-camelcase-naming.cog.md) — field naming convention
- [NDR-03: Spelling Neutrality](../naming-decisions/ndr-03-spelling-neutrality.cog.md) — spelling-neutral vocabulary
- [MX Extensions Standard](mxs-02-extensions.cog.md) — namespace policy, carrier formats, extension mechanisms
- [MX Provenance Standard](mxs-03-provenance.cog.md) — trust, attribution, verification
- [MX Profile-Specific Metadata Standard](mxs-05-profile-metadata.cog.md) — content-type-specific fields and profile definitions

### 13.2 Informative references

- [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) — Key words for use in RFCs to indicate requirement levels
- [MX Standards Alignment](../specifications/mx-standards-alignment.cog.md) — how MX conventions align with existing web standards

---

## 14. Change log

| Version | Date | Changes |
|---------|------|---------|
| 1.0-draft | 2026-04-02 | Initial draft. Initial draft. |
