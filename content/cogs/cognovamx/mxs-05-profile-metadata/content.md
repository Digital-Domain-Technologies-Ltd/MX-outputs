---
title: "MX Profile-Specific Metadata Standard"
version: "1.0-draft"
created: 2026-04-02
modified: 2026-04-02
author: The Gathering
description: "Formal specification of MX profile-specific metadata fields — content-type-specific vocabularies for general documents, source code, media assets, and databases."

mx:
  status: draft
  license: MIT
  category: standard
  partOf: mx-the-gathering
  contentType: specification
  buildsOn: [cog-unified-spec, mxs-01-core-metadata, mxs-02-extensions, mxs-03-provenance, mxs-04-ai-agent-policy]
  tags: [standard, profiles, metadata, code, media, database, specification]
  audience: [humans, machines]
  cacheability: permanent
  runbook: "This standard defines profile-specific metadata fields organised into four groups: General (book, blog, contact, folder, report, audit, event, routing, script), Code (repository, file, function, class, inline, dependency, test, API), Media (sidecar, image, video, audio, document, rights), and Database (database, schema, table, column, relationship, view, query, procedure, dictionary). AI governance fields are defined in the companion AI/Agent Policy Standard."
---

# MX Profile-Specific Metadata Standard

**Version:** 1.0-draft
**Status:** Draft
**Date:** 2 April 2026
**Governing body:** The Gathering
**License:** MIT

---

## 1. Abstract

This document defines profile-specific metadata fields for the Machine Experience (MX) framework. While the [MX Core Metadata Standard](mxs-01-core-metadata.cog.md) specifies fields common to all documents, this standard specifies fields that apply only to specific content types — books, blogs, contacts, source code, media assets, databases, and other specialised profiles.

The fields are organised into four parts: General Profiles (document-type metadata), Code Profiles (source code metadata), Media Profiles (media asset metadata), and Database Profiles (database object metadata).

This is the largest document in the MX standards suite. Each profile defines its own required, recommended, and optional fields within the conformance framework established by the Core standard.

---

## 2. Conformance

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

### 2.1 Conformance levels

This standard adopts the three-level conformance framework defined in the [MX Core Metadata Standard](mxs-01-core-metadata.cog.md), Section 2.1.

For profile-specific fields:

- **Level 1 (MX Core):** All MUST fields for the applicable profile are present and valid.
- **Level 2 (MX Standard):** All MUST and SHOULD fields for the applicable profile are present.
- **Level 3 (MX Complete):** All MUST, SHOULD, and applicable MAY fields for the profile are present.

### 2.2 Authoritative status

This standard is an authoritative specification published by The Gathering. The field definitions, conformance requirements, and normative rules in this document are self-standing.

### 2.3 AI governance fields

AI governance fields (`ai.*` and `ai`-prefixed fields) that apply to specific profiles are defined in the [MX AI/Agent Policy Standard](mxs-04-ai-agent-policy.cog.md), not in this document. Each profile section below includes a cross-reference to the relevant AI fields.

---

## 3. Scope and relationship to other standards

### 3.1 What this document covers

This document specifies metadata fields for these profiles:

- **General:** book, blog, contact, folder, report, audit, event, routing, script
- **Code:** code-repository, code-file, code-function, code-class, code-inline, code-dependency, code-test, code-api
- **Media:** media-sidecar, media-image, media-video, media-audio, media-document, media-rights
- **Database:** database, database-schema, database-table, database-column, database-relationship, database-view, database-query, database-procedure, database-dictionary

### 3.2 What this document does not cover

| Topic | Standard |
|-------|----------|
| Core identity and operational fields | [MX Core Metadata Standard](mxs-01-core-metadata.cog.md) |
| Namespace policy and carrier formats | [MX Extensions Standard](mxs-02-extensions.cog.md) |
| Trust, attribution, and verification | [MX Provenance Standard](mxs-03-provenance.cog.md) |
| AI governance and agent policies | [MX AI/Agent Policy Standard](mxs-04-ai-agent-policy.cog.md) |

### 3.3 Relationship to existing standards

- **[Cog Unified Specification](../specifications/cog-unified-spec.cog.md)** — defines the cog file format
- **[NDR-02: camelCase Naming](../naming-decisions/ndr-02-camelcase-naming.cog.md)** — all field names use camelCase
- **ISO 8601** — all date fields use YYYY-MM-DD format
- **SPDX Licence List** — licence fields use SPDX identifiers
- **Creative Commons** — media rights licence values align with CC licence types

---

## 4. Terminology

- **Profile** — A named set of fields applicable to a specific document type. A document declares its applicable profile through context (file extension, content type, or explicit declaration).
- **Required field** — A field marked MUST for a given profile. The document is non-conformant without it.
- **Shared field** — A field that appears in multiple profiles (e.g., `format` applies to media-image, media-video, media-audio, and media-document).

---

## Part A: General Profiles

---

## 5. Book profile

The book profile applies to book chapter manuscripts.

> For AI governance fields applicable to this profile, see [MX AI/Agent Policy Standard](mxs-04-ai-agent-policy.cog.md).

### 5.1 `book`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | book |
| **Conformance** | SHOULD (Level 2) |
| **Default** | *(none)* |

**Definition:** Which book this chapter belongs to.

**Example:**

```yaml
mx:
  book: "MX: The Protocols"
```

---

### 5.2 `chapter`

| Property | Value |
|----------|-------|
| **Type** | number |
| **Profile** | book |
| **Conformance** | SHOULD (Level 2) |
| **Default** | *(none)* |

**Definition:** Chapter number within the book.

**Example:**

```yaml
mx:
  chapter: 5
```

**Normative notes:**

- Used for ordering and cross-referencing within the book.

---

### 5.3 `wordCount`

| Property | Value |
|----------|-------|
| **Type** | number |
| **Profile** | book |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Word count of the document content.

**Example:**

```yaml
mx:
  wordCount: 3500
```

---

### 5.4 `copyright`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | book |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Copyright notice. Distinct from `license` (SPDX identifier in the Core standard).

**Example:**

```yaml
mx:
  copyright: "© 2026 Tom Cranstoun. All rights reserved."
```

---

## 6. Blog profile

The blog profile applies to blog post manuscripts and published articles.

> For AI governance fields applicable to this profile, see [MX AI/Agent Policy Standard](mxs-04-ai-agent-policy.cog.md).

### 6.1 `publicationDate`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | [blog, cog] |
| **Conformance** | SHOULD (Level 2) |
| **Default** | *(none)* |

**Definition:** Publication or issuance date in ISO 8601 format.

**Example:**

```yaml
mx:
  publicationDate: 2026-03-01
```

**Normative notes:**

- Distinct from `created` (file creation) and `modified` (last edit). Publication date records when the content was made public.

---

### 6.2 `blogUrl`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | blog |
| **Conformance** | MAY (Level 3) |
| **Default** | *(none)* |

**Definition:** Published URL of the blog post.

**Example:**

```yaml
mx:
  blogUrl: "https://mx.allabout.network/blog/field-dictionary"
```

**Normative notes:**

- Set after deployment. MAY be absent for draft posts.

---

### 6.3 `blogState`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | blog |
| **Conformance** | SHOULD (Level 2) |
| **Valid values** | draft, review, published |
| **Default** | *(none)* |

**Definition:** Blog-specific lifecycle state. Distinct from `status` (generic lifecycle in the Core standard).

**Example:**

```yaml
mx:
  blogState: published
```

---

## 7. Contact profile

The contact profile applies to CRM contact records.

> For AI governance fields applicable to this profile, see [MX AI/Agent Policy Standard](mxs-04-ai-agent-policy.cog.md).

### 7.1 `relationship`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | contact |
| **Conformance** | SHOULD (Level 2) |
| **Valid values** | advisory-board, investor, partner, prospect, team |
| **Default** | *(none)* |

**Definition:** Relationship type.

**Example:**

```yaml
mx:
  relationship: advisory-board
```

---

### 7.2 `role`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | contact |
| **Conformance** | MAY (Level 3) |

**Definition:** Job title or role.

**Example:**

```yaml
mx:
  role: "CTO"
```

---

### 7.3 `company`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | contact |
| **Conformance** | MAY (Level 3) |

**Definition:** Organisation name.

**Example:**

```yaml
mx:
  company: "CogNovaMX Ltd"
```

---

### 7.4 `nextAction`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | contact |
| **Conformance** | MAY (Level 3) |

**Definition:** Next action for this contact. Free-form text describing the next step.

**Example:**

```yaml
mx:
  nextAction: "Follow up after Frankfurt CMS Summit"
```

---

### 7.5 Contact communication fields

The following fields are all MAY (Level 3) string fields in the contact profile:

| Field | Type | Definition |
|-------|------|------------|
| `email` | string | Email address |
| `phone` | string | Phone number |
| `whatsapp` | string | WhatsApp contact |
| `linkedin` | string | LinkedIn profile URL |
| `nickname` | string | Informal name |
| `priority` | string | Contact priority level |
| `lastContact` | string | Date of last contact (ISO 8601) |
| `twinOf` | string | Links duplicate contact records |
| `location` | string | Geographic location |
| `platform` | string | Primary communication platform |

### 7.6 `messages`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | contact |
| **Conformance** | MAY (Level 3) |

**Definition:** Communication history entries.

---

## 8. Folder profile

The folder profile applies to `.mx.yaml.md` folder metadata files.

> For AI governance fields applicable to this profile, see [MX AI/Agent Policy Standard](mxs-04-ai-agent-policy.cog.md), Sections 6–7.

### 8.1 `folderType`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | folder |
| **Conformance** | SHOULD (Level 2) |
| **Valid values** | category, content, config, build, scripts, submodule |
| **Default** | *(none)* |

**Definition:** Type of folder.

**Example:**

```yaml
mx:
  folderType: content
```

---

### 8.2 `stability`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | folder |
| **Conformance** | SHOULD (Level 2) |
| **Valid values** | stable, evolving, experimental, deprecated, archived |
| **Default** | *(none)* |

**Definition:** Content stability. Helps agents assess information reliability.

**Example:**

```yaml
mx:
  stability: stable
```

---

### 8.3 `lifecycle`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | folder |
| **Conformance** | MAY (Level 3) |
| **Valid values** | production, development, prototype, legacy, deprecated |
| **Default** | *(none)* |

**Definition:** Folder lifecycle stage. Distinct from `stability` (content reliability).

---

### 8.4 `hasSubfolders`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Profile** | folder |
| **Conformance** | MAY (Level 3) |

**Definition:** Whether the folder contains subfolders. Helps tools decide whether to recurse.

---

### 8.5 `relatedFolders`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | folder |
| **Conformance** | MAY (Level 3) |

**Definition:** Related folders with path, relationship type, and description.

---

### 8.6 `primaryLanguages`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | folder |
| **Conformance** | MAY (Level 3) |

**Definition:** Primary programming or human languages used in this folder.

---

### 8.7 `mxSpecVersion`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | folder |
| **Conformance** | MAY (Level 3) |

**Definition:** MX specification version. Distinct from `version` (document version). Tracks MX specification conformance.

---

### 8.8 Folder container objects

The following fields are container objects in the folder profile. All are MAY (Level 3).

#### `project`

| Property | Value |
|----------|-------|
| **Type** | object |
| **Sub-fields** | name, description, repository, documentation |

**Definition:** Project metadata. Contains project-level information for root folder files.

#### `context`

| Property | Value |
|----------|-------|
| **Type** | object |
| **Sub-fields** | domain, purpose, constraints |

**Definition:** Domain context. Contains business or technical domain information.

#### `stack`

| Property | Value |
|----------|-------|
| **Type** | object |
| **Sub-fields** | language, runtime, version |

**Definition:** Technical stack information.

#### `conventions`

| Property | Value |
|----------|-------|
| **Type** | object |
| **Sub-fields** | style, testing, documentation, markdown, commits |

**Definition:** Code and documentation conventions. Inheritable.

---

### 8.9 `inheritable`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | folder |
| **Conformance** | SHOULD (Level 2) |

**Definition:** List of field paths that child folders inherit from this folder's metadata.

**Example:**

```yaml
mx:
  inheritable: [author, audience, stability, aiAssistance, aiEditable]
```

**Normative notes:**

- Parent declares which fields children MAY inherit.
- Identity fields (`title`, `description`, `created`) MUST NOT be listed as inheritable.
- If a child declares a field, the child's value MUST win.

---

### 8.10 `mxWatchesFiles`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | folder |
| **Conformance** | MAY (Level 3) |

**Definition:** File paths this document watches for changes. MX OS monitors these and triggers re-evaluation when they change.

**Example:**

```yaml
mx:
  mxWatchesFiles: [../README.md, ../package.json]
```

---

### 8.11 `contentState`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | core |
| **Conformance** | MAY (Level 3) |
| **Valid values** | raw, editing, review, approved, published |

**Definition:** Content workflow position. Distinct from `status` (generic lifecycle) — `contentState` tracks where content is in the editorial pipeline.

---

## 9. Report profile

The report profile applies to session reports and director reports.

### 9.1 `reportType`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | report |
| **Conformance** | SHOULD (Level 2) |

**Definition:** Type of report (e.g., session, interview, build, directors).

---

### 9.2 `reportId`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | report |
| **Conformance** | MAY (Level 3) |

**Definition:** Unique report identifier.

---

### 9.3 `client`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | report |
| **Conformance** | MAY (Level 3) |

**Definition:** Client the report was produced for.

---

### 9.4 `sessionStart` / `sessionEnd`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | report |
| **Conformance** | MAY (Level 3) |

**Definition:** Session start and end timestamps in ISO 8601 format.

---

## 10. Audit profile

The audit profile applies to web audit results.

### 10.1 `pagesAudited`

| Property | Value |
|----------|-------|
| **Type** | number |
| **Profile** | audit |
| **Conformance** | SHOULD (Level 2) |

**Definition:** Number of pages audited.

---

### 10.2 Score fields

The following fields are all MAY (Level 3) number fields (0–100 scale) in the audit profile:

| Field | Definition |
|-------|------------|
| `performanceScore` | Performance score (0–100) |
| `llmSuitabilityScore` | LLM suitability score (0–100) |
| `seoScore` | SEO score (0–100) |

---

## 11. Event profile

The event profile applies to conferences and events.

### 11.1 `event`

| Property | Value |
|----------|-------|
| **Type** | string-or-object |
| **Profile** | event |
| **Conformance** | SHOULD (Level 2) |

**Definition:** Event name or event details object.

**Example:**

```yaml
mx:
  event: "CMS Summit Frankfurt 2026"
```

---

### 11.2 `organiser`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | event |
| **Conformance** | MAY (Level 3) |

**Definition:** Event organiser name or organisation.

---

### 11.3 `hours`

| Property | Value |
|----------|-------|
| **Type** | string-or-object |
| **Profile** | event |
| **Conformance** | MAY (Level 3) |

**Definition:** Operating hours or event schedule. Include timezone.

---

## 12. Routing profile

The routing profile applies to ROUTING.cog.md files that guide agent navigation.

### 12.1 `words`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | routing |
| **Conformance** | SHOULD (Level 2) |

**Definition:** Spell-checker dictionary entries. Declares which terms are valid vocabulary. Distinct from `tags` — `words` validates spelling, `tags` enables discovery.

---

### 12.2 `keyFields`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | routing |
| **Conformance** | SHOULD (Level 2) |

**Definition:** Route hint. Tells agents which YAML fields matter most when reading files in a given folder. Distinct from `tags` — `keyFields` directs attention, `tags` enables discovery.

**Example:**

```yaml
mx:
  keyFields: [title, status, contentType, category]
```

---

## 13. Script profile

The script profile applies to executable scripts.

### 13.1 `runtime`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | script |
| **Conformance** | SHOULD (Level 2) |
| **Valid values** | node, browser, deno, bun |

**Definition:** Execution environment.

---

### 13.2 `dependencies`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | script |
| **Conformance** | MAY (Level 3) |

**Definition:** Package dependencies. Array of package names or `package@version` strings.

---

## Part B: Code Profiles

Code profiles define metadata for source code artefacts. They are carried via code repository metadata files (`mx.yaml`), JSDoc comments, or inline annotations.

> For AI governance fields applicable to code profiles, see [MX AI/Agent Policy Standard](mxs-04-ai-agent-policy.cog.md), Sections 7–8.

---

## 14. Code-repository profile

Applies to repository-level metadata in `mx.yaml` or `.mx/config.yaml`.

### 14.1 `project.name`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-repository |
| **Conformance** | MUST (Level 1) |

**Definition:** Project name for code repository metadata.

**Example:**

```yaml
project:
  name: "My Project"
```

---

### 14.2 `project.description`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-repository |
| **Conformance** | MUST (Level 1) |

**Definition:** Brief description of what this project does.

---

### 14.3 Additional project fields

The following are MAY (Level 3) fields:

| Field | Type | Definition |
|-------|------|------------|
| `project.repository` | string | Source repository URL |
| `project.documentation` | string | Documentation site URL |

### 14.4 Context fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `context.domain` | string | Business or technical domain |
| `context.purpose` | string | Operational purpose of the project |
| `context.constraints` | array | Non-functional requirements and constraints |

### 14.5 Stack fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `stack.language` | string | Primary programming language |
| `stack.runtime` | string | Execution environment |
| `stack.version` | string | Runtime version |
| `stack.framework` | string | Primary framework |

### 14.6 Conventions fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `conventions.style` | string | Code style tool/standard |
| `conventions.testing` | string | Testing framework |
| `conventions.documentation` | string | Documentation standard |

---

## 15. Code-file profile

Applies to file-level metadata in JSDoc comments or sidecar files.

### 15.1 `owner`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-file |
| **Conformance** | MAY (Level 3) |

**Definition:** Primary owner of this file.

---

### 15.2 `reviewers`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | code-file |
| **Conformance** | MAY (Level 3) |

**Definition:** Required reviewers for changes to this file.

**Example:**

```yaml
reviewers: ["@senior-dev", "@security-team"]
```

---

## 16. Code-function profile

Applies to function-level metadata in JSDoc comments.

### 16.1 `pure`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Profile** | code-function |
| **Conformance** | MAY (Level 3) |

**Definition:** Whether function has no side effects.

---

### 16.2 `idempotent`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Profile** | [code-function, code-api] |
| **Conformance** | MAY (Level 3) |

**Definition:** Whether repeated calls produce the same result.

---

### 16.3 `complexity`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-function |
| **Conformance** | MAY (Level 3) |

**Definition:** Time complexity in Big O notation (e.g., `O(n)`, `O(n log n)`).

---

### 16.4 `throws`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | code-function |
| **Conformance** | MAY (Level 3) |

**Definition:** Exception types this function may throw. Use `raises` for Python.

---

### 16.5 `since`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-function |
| **Conformance** | MAY (Level 3) |

**Definition:** Version when this function was introduced.

---

### 16.6 `see`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | code-function |
| **Conformance** | MAY (Level 3) |

**Definition:** Related functions or documentation.

---

## 17. Code-class profile

Applies to class-level metadata.

### 17.1 `pattern`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-class |
| **Conformance** | MAY (Level 3) |
| **Valid values** | singleton, factory, observer, strategy, builder, adapter, decorator, proxy, command, mediator |

**Definition:** Design pattern used by this class.

---

### 17.2 `threadSafe`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Profile** | code-class |
| **Conformance** | MAY (Level 3) |

**Definition:** Whether class is safe for concurrent access.

---

### 17.3 `invariants`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | code-class |
| **Conformance** | MAY (Level 3) |

**Definition:** Conditions that must always be true for this class.

**Example:**

```yaml
invariants:
  - "If currentUser is set, tokens must be valid"
  - "Token refresh happens before expiry"
```

---

## 18. Code-inline profile

Applies to inline source code annotations using `// @mx:*` comments.

### 18.1 `mx:begin` / `mx:end`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-inline |
| **Valid values** | security-critical, performance-critical, compatibility, workaround, generated, legacy |

**Definition:** Opens and closes an annotated code block. The value declares the block's classification.

**Example:**

```javascript
// @mx:begin security-critical
const token = await validateJWT(header);
// @mx:end security-critical
```

---

### 18.2 `mx:intentional`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-inline |

**Definition:** Line annotation marking deliberate unusual code.

**Example:**

```javascript
await sleep(100); // @mx:intentional rate-limiting
```

---

### 18.3 `mx:todo`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-inline |

**Definition:** Line annotation for tasks to complete.

**Example:**

```javascript
// @mx:todo refactor Extract to separate function
```

---

## 19. Code-dependency profile

Applies to dependency metadata.

### 19.1 Dependency fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `dependency.purpose` | string | Why this dependency exists |
| `dependency.critical` | boolean | Whether critical to the project |
| `dependency.upgradePolicy` | string | How aggressively to upgrade. Values: aggressive, conservative, locked, manual |
| `dependency.alternativesConsidered` | array | Alternative packages considered |

---

## 20. Code-test profile

Applies to test file metadata.

### 20.1 `testType`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-test |
| **Conformance** | MUST (Level 1) |
| **Valid values** | unit, integration, e2e, performance, security, smoke, acceptance |

**Definition:** Type of test file.

---

### 20.2 `subject`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-test |
| **Conformance** | MUST (Level 1) |

**Definition:** What this test file tests. Path to the source file or module.

**Example:**

```yaml
subject: "src/services/pricing.ts"
```

---

### 20.3 Additional test fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `coverageTarget` | number | Target code coverage percentage |
| `fixtures` | array | Test data files required |

---

## 21. Code-api profile

Applies to API endpoint metadata.

### 21.1 `method`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-api |
| **Conformance** | MUST (Level 1) |
| **Valid values** | GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS |

**Definition:** HTTP method for the API endpoint.

---

### 21.2 `path`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-api |
| **Conformance** | MUST (Level 1) |

**Definition:** API endpoint path.

**Example:**

```yaml
path: "/api/v1/orders"
```

---

### 21.3 `auth`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | code-api |
| **Conformance** | SHOULD (Level 2) |
| **Valid values** | none, basic, bearer, api-key, oauth2, session |

**Definition:** Authentication requirement for the API endpoint.

---

### 21.4 Additional API fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `rateLimit` | string | Rate limiting configuration (e.g., "100/minute") |
| `cache.enabled` | boolean | Whether API response is cacheable |
| `cache.ttl` | number | Cache time-to-live in seconds |

---

## Part C: Media Profiles

Media profiles define metadata for media assets. They are carried via sidecar YAML files (`.mx.yaml`), EXIF/XMP metadata, or embedded in HTML.

> For AI governance fields applicable to media profiles, see [MX AI/Agent Policy Standard](mxs-04-ai-agent-policy.cog.md), Section 9.

---

## 22. Media-sidecar profile

Applies to `.mx.yaml` sidecar files alongside media assets.

### 22.1 `asset`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | media-sidecar |
| **Conformance** | MAY (Level 3) |

**Definition:** Explicit link to the media asset file. Optional if sidecar filename matches the asset.

---

### 22.2 `embedded.source`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | media-sidecar |
| **Conformance** | SHOULD (Level 2) |
| **Valid values** | preserve, override, ignore |

**Definition:** How to handle embedded metadata (EXIF/IPTC/XMP/ID3).

**Normative notes:**

- `preserve` — sidecar extends embedded metadata.
- `override` — sidecar wins when conflicts exist.
- `ignore` — skip embedded metadata entirely.

---

### 22.3 `embedded.sync`

| Property | Value |
|----------|-------|
| **Type** | boolean |
| **Profile** | media-sidecar |
| **Conformance** | MAY (Level 3) |

**Definition:** Whether to sync sidecar metadata back to embedded fields.

---

## 23. Media-image profile

Applies to image asset metadata.

### 23.1 `alt`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | [media-image, media-video] |
| **Conformance** | MUST (Level 1) |

**Definition:** Alternative text for screen readers and AI agents.

**Example:**

```yaml
alt: "Silver Widget Pro on white background"
```

---

### 23.2 `caption`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | [media-image, media-video] |
| **Conformance** | MAY (Level 3) |

**Definition:** Human-readable caption for display.

---

### 23.3 Dimension and format fields

All MAY (Level 3):

| Field | Type | Profile | Definition |
|-------|------|---------|------------|
| `format` | string | [media-image, media-video, media-audio, media-document] | File format (e.g., jpeg, png, webp) |
| `width` | number | [media-image, media-video] | Width in pixels |
| `height` | number | [media-image, media-video] | Height in pixels |
| `aspectRatio` | string | [media-image, media-video] | Aspect ratio as width:height |
| `fileSize` | number | [media-image, media-video, media-audio, media-document] | File size in bytes |
| `dpi` | number | [media-image, media-document] | Resolution in dots per inch |

### 23.4 Image-specific fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `colorSpace` | string | Colour space (e.g., sRGB, Adobe RGB) |
| `compression` | string | Compression type. Values: lossy, lossless, none |
| `variants` | array | Responsive or alternative image variants |

### 23.5 Capture fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `capture.date` | string | Date media was captured (ISO 8601) |
| `capture.location` | string | Location where media was captured |
| `capture.device` | string | Camera or recording device model |
| `photographer` | string | Name of the photographer |

---

## 24. Media-video profile

Applies to video asset metadata. Inherits `alt`, `caption`, `format`, `width`, `height`, `aspectRatio`, `fileSize` from shared media fields (Section 23).

### 24.1 Video-specific fields

All MAY (Level 3):

| Field | Type | Profile | Definition |
|-------|------|---------|------------|
| `codec.video` | string | media-video | Video codec (e.g., h264, h265, vp9) |
| `codec.audio` | string | [media-video, media-audio] | Audio codec (e.g., aac, opus) |
| `frameRate` | number | media-video | Frames per second |
| `duration` | number | [media-video, media-audio] | Duration in seconds |
| `chapters` | array | [media-video, media-audio] | Chapter markers with title and times |
| `captions` | array | media-video | Caption/subtitle tracks with language and file |
| `transcript` | object | [media-video, media-audio] | Transcript file with language and format |

---

## 25. Media-audio profile

Applies to audio asset metadata.

### 25.1 Audio-specific fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `sampleRate` | number | Sample rate in Hz |
| `channels` | number | Number of audio channels |

---

## 26. Media-document profile

Applies to document assets (PDFs, etc.).

### 26.1 Document fields

| Field | Type | Conformance | Definition |
|-------|------|-------------|------------|
| `pages` | number | MAY (Level 3) | Number of pages |
| `taggedPdf` | boolean | MAY (Level 3) | Whether PDF has accessibility tags |

---

## 27. Media-rights profile

Applies to media asset rights and licensing.

### 27.1 `rights.owner`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | media-rights |
| **Conformance** | MUST (Level 1) |

**Definition:** Entity that owns this media asset.

---

### 27.2 `rights.license`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | media-rights |
| **Conformance** | MUST (Level 1) |
| **Valid values** | proprietary, public-domain, cc-by, cc-by-sa, cc-by-nc, cc-by-nc-sa, cc-by-nd, cc-by-nc-nd, cc0, editorial, royalty-free, rights-managed, custom |

**Definition:** Licence type for the media asset.

---

### 27.3 Additional rights fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `rights.copyright` | string | Copyright statement |
| `rights.attribution.required` | boolean | Whether attribution is required |
| `rights.usage.commercial` | boolean | Whether asset may be used commercially |
| `rights.usage.thirdParty` | boolean | Whether asset may be shared with third parties |
| `rights.territorial.allowed` | array | Territory codes where usage is allowed |
| `rights.temporal.perpetual` | boolean | Whether usage rights are perpetual |

---

## Part D: Database Profiles

Database profiles define metadata for database objects. They are carried via database sidecar YAML files or inline SQL comments (`-- @mx ... -- @mx:end`).

> For AI governance fields applicable to database profiles, see [MX AI/Agent Policy Standard](mxs-04-ai-agent-policy.cog.md), Section 10.

---

## 28. Database profile

Applies to database-level metadata.

### 28.1 `database.engine`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | database |
| **Conformance** | MUST (Level 1) |

**Definition:** Database engine type.

**Example:**

```yaml
database:
  engine: "postgresql"
```

---

### 28.2 Additional database fields

| Field | Type | Conformance | Definition |
|-------|------|-------------|------------|
| `database.version` | string | MAY (Level 3) | Database engine version |
| `database.environment` | string | SHOULD (Level 2) | Deployment environment. Values: production, staging, development, testing |
| `database.steward` | string | MAY (Level 3) | Data steward contact. Profile: [database, database-table] |

### 28.3 Classification fields

All MAY (Level 3). Profile: [database, database-schema, database-table] unless noted.

| Field | Type | Definition |
|-------|------|------------|
| `classification.sensitivity` | string | Sensitivity level. Values: public, internal, confidential, restricted |
| `classification.containsPii` | boolean | Contains PII. Profile: [database, database-table] |
| `classification.containsFinancial` | boolean | Contains financial data. Profile: [database, database-table] |
| `classification.regulatory` | array | Applicable regulatory frameworks. Profile: [database, database-table] |

### 28.4 `retention.defaultDays`

| Property | Value |
|----------|-------|
| **Type** | number |
| **Profile** | database |
| **Conformance** | MAY (Level 3) |

**Definition:** Default data retention period in days.

---

## 29. Database-schema profile

### 29.1 `schema.domains`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | database-schema |
| **Conformance** | MAY (Level 3) |

**Definition:** Business domains covered by this schema.

**Example:**

```yaml
schema:
  domains: [identity, commerce, inventory]
```

---

## 30. Database-table profile

### 30.1 Table domain fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `table.domain` | string | Business domain this table belongs to |
| `table.subdomain` | string | Business subdomain |

### 30.2 Table classification fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `classification.piiTypes` | array | Types of PII present |
| `classification.gdprLawfulBasis` | string | GDPR lawful basis. Values: consent, contract, legal-obligation, vital-interests, public-task, legitimate-interests |

### 30.3 Volume and quality fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `volume.rowCountEstimate` | number | Estimated number of rows |
| `volume.growthRate` | string | Estimated growth rate (e.g., "10000/day") |
| `quality.completeness` | number | Data completeness score (0–1) |

---

## 31. Database-column profile

### 31.1 Semantic fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `column.semantic.type` | string | Semantic type. Values: identifier, name, email, phone, address, country, currency, quantity, percentage, timestamp, date, duration, status, category, description, url, json, binary |
| `column.semantic.entity` | string | Entity type this column belongs to |
| `column.semantic.role` | string | Role within the entity |
| `column.semantic.standard` | string | Standard this column conforms to (e.g., iso-3166-1-alpha-2) |

### 31.2 PII and security fields

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `column.pii` | boolean | Whether column contains PII |
| `column.piiType` | string | Type of PII. Values: name, email, phone, address, dob, ssn, financial, health |
| `column.encrypted` | boolean | Whether values are encrypted |

---

## 32. Database-relationship profile

### 32.1 `relationship.type`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | database-relationship |
| **Conformance** | MUST (Level 1) |
| **Valid values** | one_to_one, one_to_many, many_to_one, many_to_many |

**Definition:** Relationship cardinality.

---

### 32.2 `relationship.from`

| Property | Value |
|----------|-------|
| **Type** | object |
| **Profile** | database-relationship |
| **Conformance** | MUST (Level 1) |

**Definition:** Source table and column.

**Example:**

```yaml
relationship:
  from:
    table: users
    column: id
```

---

### 32.3 `relationship.to`

| Property | Value |
|----------|-------|
| **Type** | object |
| **Profile** | database-relationship |
| **Conformance** | MUST (Level 1) |

**Definition:** Target table and column.

---

## 33. Database-view profile

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `view.materialized` | boolean | Whether this is a materialised view |
| `view.sourceTables` | array | Tables this view is built from |

---

## 34. Database-query profile

### 34.1 `query.sql`

| Property | Value |
|----------|-------|
| **Type** | string |
| **Profile** | database-query |
| **Conformance** | MUST (Level 1) |

**Definition:** The SQL query definition.

---

### 34.2 `query.parameters`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | database-query |
| **Conformance** | MAY (Level 3) |

**Definition:** Query parameters with name, type, and description.

---

## 35. Database-procedure profile

All MAY (Level 3):

| Field | Type | Definition |
|-------|------|------------|
| `procedure.parameters` | array | Parameters with name, type, direction (in/out) |
| `procedure.tablesModified` | array | Tables modified and the operation type |

---

## 36. Database-dictionary profile

### 36.1 `dictionary.glossary`

| Property | Value |
|----------|-------|
| **Type** | array |
| **Profile** | database-dictionary |
| **Conformance** | MAY (Level 3) |

**Definition:** Business term definitions with term, definition, and aliases.

**Example:**

```yaml
dictionary:
  glossary:
    - term: "Active User"
      definition: "User who logged in within last 30 days"
      aliases: ["MAU"]
```

---

## 37. Conformance levels summary

### 37.1 MUST fields (Level 1) by profile

| Profile | Required fields |
|---------|----------------|
| code-repository | `project.name`, `project.description` |
| code-test | `testType`, `subject` |
| code-api | `method`, `path` |
| media-image | `alt` |
| media-video | `alt` |
| media-rights | `rights.owner`, `rights.license` |
| database | `database.engine` |
| database-relationship | `relationship.type`, `relationship.from`, `relationship.to` |
| database-query | `query.sql` |

### 37.2 SHOULD fields (Level 2) by profile

| Profile | Recommended fields |
|---------|--------------------|
| book | `book`, `chapter` |
| blog | `publicationDate`, `blogState` |
| contact | `relationship` |
| folder | `folderType`, `stability`, `inheritable` |
| report | `reportType` |
| audit | `pagesAudited` |
| event | `event` |
| routing | `words`, `keyFields` |
| script | `runtime` |
| code-api | `auth` |
| media-sidecar | `embedded.source` |
| database | `database.environment` |

---

## 38. Security and privacy considerations

- Contact profile fields (`email`, `phone`, `whatsapp`, `linkedin`) contain personal information. Implementations MUST respect the `confidential` field (defined in the [Core standard](mxs-01-core-metadata.cog.md)) when processing contact records.
- Database classification fields (`classification.sensitivity`, `classification.containsPii`, `classification.gdprLawfulBasis`) carry regulatory implications. Implementations that expose database metadata MUST enforce the sensitivity classification.
- Media rights fields (`rights.usage.commercial`, `rights.territorial.allowed`) have legal implications. Implementations SHOULD NOT make assumptions about rights when these fields are absent.

---

## 39. References

### 39.1 Normative references

- [MX Core Metadata Standard](mxs-01-core-metadata.cog.md) — core identity and operational fields
- [MX Extensions Standard](mxs-02-extensions.cog.md) — namespace policy and carrier formats
- [MX Provenance Standard](mxs-03-provenance.cog.md) — trust, attribution, and verification
- [MX AI/Agent Policy Standard](mxs-04-ai-agent-policy.cog.md) — AI governance and agent policies
- [Cog Unified Specification](../specifications/cog-unified-spec.cog.md) — the cog document format
- [NDR-02: camelCase Naming](../naming-decisions/ndr-02-camelcase-naming.cog.md) — field naming convention

### 39.2 Informative references

- [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) — Key words for use in RFCs to indicate requirement levels
- [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) — Date and time format
- [SPDX Licence List](https://spdx.org/licenses/) — Software Package Data Exchange licence identifiers
- [Creative Commons Licences](https://creativecommons.org/licenses/) — Media rights licence types
- [GDPR Lawful Bases](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/lawful-basis-for-processing/) — GDPR processing bases

---

## 40. Change log

| Version | Date | Changes |
|---------|------|---------|
| 1.0-draft | 2026-04-02 | Initial draft. Initial draft. |
