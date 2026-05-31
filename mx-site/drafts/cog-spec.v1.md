---
author: Tom Cranstoun
created: 2026-04-27
title: "Cog Specification"
description: "The cog file format, artefact model, and verification algorithm."
version: "1.2"
status: "proposed"
date: 2026-04-27
audience: ["tech", "humans"]
readiness:
  sufficientFor: ["independent-implementation", "alignment-testing", "community-review"]
  notYetSufficientFor: ["certified-conformance", "production-deployment-without-second-impl"]
cogHeader:
  version: v1
  spec: https://mx.allabout.network/drafts/cog-spec.v1.md
  runtime: https://mx.allabout.network/drafts/cog-runtime.md
  runtimeDoc: https://mx.allabout.network/drafts/cog-runtime.md

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/drafts/cog-spec.v1.md
---

# Cog Specification

Version 1.2 (draft, review-ready)

> **v1.2 — `cogHeader` frontmatter field.** A new optional frontmatter field carries the same information as the magic-header line (version + spec + runtime + runtime-doc URLs) so consumers that work on parsed YAML can read the cog's spec/runtime conformance claim from a queryable nested object. Defined in [MXS-06 Cog Identification](https://mx.allabout.network/drafts/mxs-06-cog-identification.cog.md). When both forms are present in the same cog they MUST agree on values (§2.5).
>
> **v1.1 — Naming convention change.** Frontmatter field names are now `camelCase` (aligned with MX [NDR-2026-02-16](https://github.com/Digital-Domain-Technologies-Ltd/MX-hub/blob/main/mx-canon/mx-maxine-lives/registers/NDR/2026-02-16-camelcase-naming.cog.md)). The `x-mx-` and `x-mx-p-` namespace prefixes themselves remain kebab; only the suffix is camelCase (e.g. `x-mx-contractFields`, not `xMxContractFields`). v1.0 cogs that used kebab-case field names should be migrated by converting all field names to camelCase. File and directory names retain kebab-case (e.g. `cog-spec.v1.md`, `cog-review-procedure.cog.md`).

## Status

This specification is a v1.0 draft, sufficient for independent implementation and ready for community review. It describes the cog file format, the artefact model that gives the format its meaning, the verification algorithm that allows a third party to confirm a cog satisfies a stated contract, and the recognition conventions that allow agents and humans to identify cogs encountered without context.

### What this draft is sufficient for

An implementer in any language can read this specification and produce a working cog parser, validator, and witness-signing system. The previously-identified interoperability blockers — schema reference resolution, canonical JSON serialisation, identifier syntax, structural delimiters — are now specified to a level that supports implementation without guesswork. A draft conformance test suite (v0.1) accompanies the specification and provides the basis for confirming behavioural agreement between implementations.

### What this draft is not yet sufficient for

This draft is sufficient for *alignment* — implementations can run the conformance suite and report which cases pass — but not yet for *certified conformance*. The reasons:

- **Conformance suite coverage.** The v0.1 suite covers 23 cases across parsing, annotations, fingerprints, witnesses, and validators. The specification contains substantially more MUST and SHOULD requirements than this suite exercises. An implementation that passes all 23 cases can still violate spec requirements that no case tests. Suite expansion is community work.

- **No second implementation.** All claims about portability are theoretical until at least one independent implementation exists. Until that point, the specification is reasoned-about rather than tested against the reality of being read by someone who did not write it.

- **No external review.** Two LLM-driven review cycles have been performed and addressed (one from the perspective of an implementer building the system, one from the perspective of an agent encountering a cog without context). These found and fixed real issues but share a common failure mode; human standards-body review has not yet happened.

- **No security review.** The threat model in section 10 is reasoned-about. It has not been adversarially tested, and the cryptographic primitives (currently HMAC-SHA-256) have not been reviewed for the threat profiles in which witnesses might be used.

### What the next draft will address

Issues against this specification are welcomed. The v1.1 draft is expected to incorporate findings from a second implementation effort, expanded conformance coverage, and external technical review. Open questions explicitly deferred from this draft are listed in section 11.

### About the reference implementation

The reference implementation is available separately. This specification is independent of any particular implementation; conforming implementations may be written in any language. Where the reference implementation and this specification disagree, the specification takes precedence and the reference implementation is the bug.

## Conventions

The key words MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, and OPTIONAL in this document are to be interpreted as described in RFC 2119.

Examples in this specification are illustrative. Where examples differ from the normative text, the normative text takes precedence.

## 1. Overview

A cog is a single Markdown file with YAML frontmatter that contains structured information of distinct types, organised so that machine consumers can address each type separately while human readers see one continuous document.

Here is the simplest possible cog:

```markdown
---
title: Example
description: A minimal cog
---

# Example

This is the body.
```

A more representative cog declares a contract — a schema it claims to satisfy, the validators that confirm the claim, and structured fields the schema constrains. It also declares itself as a cog at the top of the file and includes a preamble for any agent reading it without context:

```markdown
<!-- cog v1 spec=https://example.org/cog-spec.v1.md runtime=https://example.org/cog-runtime -->
---
title: Invoice approval procedure
description: How the finance team approves supplier invoices
schema: ./schemas/invoice-approval.v1.yaml
validatesAgainst:
  - cogs.validators.frontmatter
  - cogs.validators.schema-conformance
thresholds:
  autoApproveBelow: 500
  currency: GBP
approvers:
  primary:
    - finance-lead@example.com
---

<!-- mx:narrative -->

> **This file is a cog, not a document.** It carries a contract that
> requires a cog-aware runtime to consume correctly. Reading it as ordinary
> prose will produce a plausible-looking summary that omits the contract.
> If you do not have a cog runtime, refer to the spec linked in the header.

# Invoice approval procedure

This cog defines how supplier invoices are approved at our company.

## Why we have thresholds
<!-- mx:narrative -->

Auto-approval below £500 exists because the cost of routing small invoices
through human review exceeds the risk of paying a duplicate or incorrect
small amount.

## Setup
<!-- mx:executable -->

```bash @embedded:check-invoice
node tools/validate-invoice.js "$1"
```
```

The file as a whole is the cog. Inside it, four artefacts coexist: the frontmatter contract, the prose narrative (which begins with a preamble addressed to readers who do not know what a cog is), an embedded executable code block addressable by the id `check-invoice`, and a referenced external schema at the declared path. Each artefact type has its own purpose and its own treatment by the runtime — the rest of this specification is concerned with what those types are, how they are recognised, and what guarantees a system built on them can offer.

The optional magic header line on the first line identifies the file as a cog and points at the specification it claims to follow. It is invisible in rendered Markdown but immediately visible to any agent reading the raw text. The preamble in the body addresses the same concern at a different layer: when an agent has read past the header into the prose, the preamble re-states the cog's nature in language a language model will understand.

A cog is the unit of storage, transport, and signing. The artefact types within a cog are the units that runtimes address. The artefact types are typed by their location and their annotations within the file.

This specification defines:

- The file format (section 2)
- The artefact model (section 3)
- The frontmatter conventions, including how a cog declares its contract (section 4)
- The embedded artefact convention (section 5)
- The witness format and signing process (section 6)
- The verification algorithm (section 7)
- Conformance requirements (section 8)

## 2. File format

### 2.1 Encoding

A cog file MUST be UTF-8 encoded. A cog file MUST NOT contain a byte order mark.

### 2.2 Filename

A cog file SHOULD use the extension `.cog.md`. The double extension distinguishes cogs from plain Markdown files while remaining recognisable to Markdown editors and renderers.

Implementations MUST NOT rely on the filename to determine whether a file is a cog. The structural test described in section 2.3 is authoritative.

### 2.3 Structural shape

A cog file consists of, in order:

1. **Optionally**, a magic header line, defined in section 2.5.
2. A frontmatter delimiter line — a line whose content, after stripping leading and trailing horizontal whitespace (spaces and tabs), is exactly the three characters `---`.
3. A frontmatter block containing valid YAML, with no occurrence of a delimiter line as defined in (2).
4. A second frontmatter delimiter line of the same form.
5. A body, consisting of zero or more lines of Markdown text.

The whitespace tolerance on delimiter lines exists because text editors commonly introduce trailing whitespace on otherwise-empty-looking lines. Implementations MUST accept lines like `--- ` (trailing space) or `\t---` (leading tab) as valid delimiters. Implementations SHOULD emit a warning when delimiter lines contain whitespace, to encourage clean source files.

A file that does not match this structure is not a cog. Implementations MUST reject such files with an error that names the missing or malformed structural element.

### 2.4 Line endings

Line endings within a cog file MAY be LF or CRLF. Implementations MUST normalise CRLF to LF as a parsing step, before any further processing. Fingerprint computation operates on the normalised text, so the same logical content produces the same fingerprint regardless of editor or platform.

A file containing a mixture of LF and CRLF line endings is valid; the normalisation step produces a uniform LF result.

### 2.5 Magic header line

A cog file SHOULD begin with a magic header line that identifies it unambiguously as a cog and points at the specification it claims to follow. The magic header line is an HTML comment on the very first line of the file, before any other content. Its format is:

```
<!-- cog v1 spec=https://example.org/cog-spec.v1.md runtime=https://example.org/cog-runtime -->
```

The line is parsed by:

- The literal opening `<!--`, with optional surrounding whitespace.
- The literal token `cog` (case-insensitive).
- A version token matching `v[0-9]+(\.[0-9]+)*` indicating the spec version the cog claims to conform to.
- Zero or more whitespace-separated `key=value` pairs. Recognised keys:
  - `spec` — a URL where the specification is published
  - `runtime` — a URL where a runtime implementation can be found, downloaded, or invoked
  - `runtime-doc` — a URL pointing to documentation explaining how to consume cogs
- The literal closing `-->`, with optional surrounding whitespace.

The magic header line is invisible in rendered Markdown (it is a comment) and is ignored by Markdown parsers that do not know about cogs. Implementations that recognise the line MAY use it to:

- Verify that the cog claims a spec version they support.
- Direct an unfamiliar reader (a human or an unaware agent) to the spec URL.
- Refuse to process the cog if the runtime URL is required but unreachable.

The magic header line is OPTIONAL in the sense that its absence does not invalidate a cog — a file without one is still a valid cog if its structural shape and frontmatter satisfy this specification. It is RECOMMENDED for any cog that may be encountered outside a closed system where all consumers are known to be cog-aware. Cogs intended for circulation, public registries, or mixed audiences SHOULD include the magic header line; cogs operating only within a known runtime MAY omit it.

The line exists primarily to help agents that encounter a cog without prior context. An agent reading a cog cold cannot reliably distinguish it from any other Markdown file with YAML frontmatter; the magic header line is the unambiguous self-identification that lets such agents recognise the file's nature and either invoke the appropriate runtime or refuse to interpret the cog as ordinary prose.

If present, the magic header line MUST be the very first line of the file, before any byte order mark removal (which is not permitted) or whitespace. Implementations MUST NOT recognise a magic header line that appears anywhere other than the first line.

The information carried by the magic header MAY also be expressed as a `cogHeader` frontmatter field defined in [MXS-06 Cog Identification](https://mx.allabout.network/drafts/mxs-06-cog-identification.cog.md). The two forms are equivalent. When both are present in the same cog they MUST agree on `version`, `spec`, `runtime`, and `runtimeDoc` values; validators MUST flag mismatches. Implementations SHOULD prefer the `cogHeader` field for programmatic consumption (queryable, robust to comment-stripping parsers) and the magic-header line for unambiguous self-identification when a consumer scans raw text. A cog intended for circulation SHOULD declare both.

## 3. Artefact model

A cog contains the following artefact types:

### 3.1 The frontmatter artefact

Every cog has exactly one frontmatter artefact. It is the YAML content between the two delimiter lines. The frontmatter artefact carries the cog's contract: schema reference, declared validators, structural fields, and any other typed declarations.

The frontmatter artefact is the artefact whose stability matters. A change to the frontmatter is a change to the contract.

### 3.2 The narrative artefact

Every cog has exactly one narrative artefact. It is the body content following the closing frontmatter delimiter. The narrative artefact carries explanation, rationale, and context for human readers.

The narrative artefact is allowed to evolve freely. A change to the narrative is not a change to the contract.

#### 3.2.1 Named sub-sections within the narrative

The narrative artefact MAY carry more than one named zone. A **sub-section** is a contiguous span of body content enclosed by two HTML comments of the form `<!-- begin: <id> -->` and `<!-- end: <id> -->`. The `<id>` is a stable, kebab-case identifier matching the regular expression `^[a-z][a-z0-9_-]*$`. The markers are HTML comments so they survive markdown round-trips and render invisibly in any HTML view of the document.

The narrative artefact remains a single artefact for fingerprinting and identity purposes. Sub-sections are an addressing convention within that artefact, not separate artefacts.

A reader MAY include, exclude, or extract a named sub-section. The canonical motivating case is a renderer that produces two derived artefacts from one source cog — for example, a covering letter plus a formal briefing in one document, where one derived artefact strips the covering-letter sub-section and the other keeps it. Narrative outside any marker pair is the default zone and is always included.

Conformance requirements:

- Sub-sections MUST NOT nest. A marker pair MUST close before the next pair opens. Nested ids constitute a malformed cog.
- Each `<id>` MUST appear in at most one marker pair per cog. Repeated ids constitute a malformed cog.
- A reader that does not implement sub-section addressing MUST treat the markers as ordinary HTML comments and render the contained content as part of the narrative.

### 3.3 Embedded executable artefacts

A cog MAY contain zero or more embedded executable artefacts. These are fenced code blocks within the narrative that carry an explicit annotation marking them as addressable by the runtime.

An embedded executable artefact is a fenced code block whose opening fence carries an annotation matching the regular expression `^```(\w+)[ \t]+@embedded:([a-z][a-z0-9_-]*)[ \t]*$` (where the leading backticks are literal and the closing newline is implied). The first capture group is the language identifier; the second capture group is the artefact id.

The id format constraint — lowercase letters, digits, underscore and hyphen, starting with a letter — matches the validator name segment format defined in section 4.2. Both are lowercase to remove case-sensitivity ambiguity between filesystems and registries that handle case differently. Each id MUST be unique within a single cog.

The annotation requires at least one space or tab between the language identifier and the `@embedded:` token, and allows trailing whitespace. Tabs and spaces are equivalent in this position; mixing them is permitted but discouraged.

Example:

```
\`\`\`bash @embedded:setup-script
echo "this is the setup script"
\`\`\`
```

Embedded executable artefacts are extractable from the cog by id. A runtime invoking an embedded artefact MUST extract it by id and execute its content directly; it MUST NOT pass the surrounding narrative or the code text to a language model for interpretation.

### 3.4 Embedded data artefacts

A cog MAY contain fenced code blocks of types like `yaml`, `json`, `xml`, or `csv` without the `@embedded:<id>` annotation. These are embedded data artefacts. They are part of the narrative for fingerprinting purposes but are machine-parseable when a runtime needs them.

Embedded data artefacts SHOULD be annotated with `@embedded:<id>` if a runtime is expected to address them. Unannotated data blocks are illustrative only.

### 3.5 Referenced external artefacts

The frontmatter MAY reference files outside the cog itself. References are paths in frontmatter fields. Common reference fields include:

- `schema` — a JSON Schema (in YAML form) the frontmatter must satisfy
- `styleRules` — a style or convention reference
- Phase or step `source` fields — the location of an embedded source file

Referenced external artefacts are not part of the cog. Conforming implementations MUST validate that referenced files resolve at the time the cog is consumed. Conforming implementations SHOULD report unresolved references as validation failures.

### 3.6 Artefact summary

| Artefact type | Cardinality | Location | Drift policy |
|---|---|---|---|
| Frontmatter | Exactly one | Between `---` delimiters | Stability matters; covered by contract fingerprint |
| Narrative | Exactly one | After closing delimiter | Free to evolve; covered by body fingerprint, not signed |
| Embedded executable | Zero or more | Code blocks with `@embedded:<id>` | In body; addressable by id |
| Embedded data | Zero or more | Code blocks of structured types | In body; may be annotated |
| Referenced external | Zero or more | Files named in frontmatter paths | Not in cog; must resolve at consumption time |

## 4. Frontmatter conventions

The frontmatter is a YAML object. The following fields have defined meanings within this specification. Implementations MAY define additional fields. Field names follow `camelCase` (the `x-mx-` and `x-mx-p-` namespace prefixes are themselves kebab; only the suffix is camelCase).

### 4.1 Required fields

Every cog MUST declare:

- `title` — a string. The string MUST contain at least one character that is not a Unicode whitespace character (categories Zs, Zl, Zp, plus tab, line feed, carriage return, vertical tab, form feed). Whitespace-only strings are not valid titles.
- `description` — a string, with the same non-emptiness constraint as `title`.

The non-emptiness check is applied to the string as written in the YAML, before any normalisation. Implementations MUST NOT trim leading or trailing whitespace before checking non-emptiness; a string consisting only of whitespace is rejected even if a trimmed version would be non-empty. This avoids cases where two implementations disagree about whether a title like `"   "` is valid because they apply different trimming rules.

### 4.2 Contract-declaring fields

A cog that participates in the contract model declares:

- `schema` — a string referencing a JSON Schema in YAML form. Resolution rules are defined in section 4.4.
- `validatesAgainst` — an array of validator names. Each name MUST match the regular expression `^[a-z][a-z0-9_-]*(\.[a-z][a-z0-9_-]*)+$` (anchored, lowercase only, at least two dot-separated segments). The names are looked up in the runtime registry; this specification does not constrain the runtime's choice of names beyond the syntax.

A cog without these fields is a valid cog but cannot be notarised. Notarisation requires a declared schema and at least one declared validator.

A cog MAY also declare:

- `cogHeader` — an object carrying the spec version and the spec/runtime/runtimeDoc URLs. This is the frontmatter equivalent of the magic-header comment defined in section 2.5; the equivalence rule (mismatched values are a conformance failure) is specified in [MXS-06](https://mx.allabout.network/drafts/mxs-06-cog-identification.cog.md). `cogHeader` SHOULD be a member of `metadataFields` (excluded from the contract fingerprint) — its values describe the cog's identity, not its contract.
- `produces` — an object declaring the typed shape of a successful execution output. Sub-keys are `shape` (a schema reference resolved per section 4.4), `format` (a MIME type or named format identifier), and `example` (an illustrative value). `produces` is informational unless a runtime chooses to validate the output against `produces.shape` post-execution; runtimes that validate MUST treat a shape mismatch as an unmodelled failure (see section 4.6). A cog with no `execute` block and no procedure-declaring field SHOULD NOT declare `produces`. Distinct from `schema` (input contract for the document itself); `produces` is the contract for what comes out, not what goes in.
- `actionType` — a string that names the cognitive class of an action cog. The cog specification draws a sharp axis through every action cog: it MAY be **deterministic**, **inference-driven**, or **both**. A deterministic action cog carries fixed instructions a runtime executes the same way every time; an inference-driven action cog carries instructions a language-model runtime reads and performs using its own reasoning; a both-form action cog carries each in the role each is fit for. The `actionType` field is how the cog declares which, so a consumer can choose to accept, reject, or sandbox the cog without inspecting the body. Valid values are `scripted`, `sop`, and `hybrid`. A `scripted` action cog carries an embedded executable artefact (an `@embedded:<id>` block per section 3.3); a runtime extracts the artefact by id and runs it directly; the same inputs produce the same outputs. An `sop` action cog has no embedded executable artefact; the `execute.actions[].usage` value is descriptive prose intended for a language-model runtime to read and perform the steps; the runtime is the language model itself. A `hybrid` action cog carries both an embedded executable artefact AND descriptive `usage` prose; the script handles the deterministic portion and the prose carries the part that needs reasoning. Cogs with an `execute` block SHOULD declare `actionType` so that consumers can determine the runtime requirement (interpreter vs. language model vs. both) without inspecting the body. Cogs without an `execute` block MUST NOT declare `actionType`.

### 4.3 Relationship-declaring fields

A cog that stands on another cog — by being part of it, building on it, requiring it, inheriting from it, including it, or referring to it — MUST declare the relationship in the frontmatter using the appropriate relationship field. Inheritance and inclusion count as dependencies for this purpose: any field that names another cog the current cog stands on carries the rule.

The relationship fields a cog uses to make these declarations are:

- `partOf` — string. The parent collection, suite, registry, or initiative the cog belongs to. MUST.
- `buildsOn` — array of cog names. Cogs that provide context and that a reader is expected to have read first. SHOULD.
- `dependencies` — array of dependency objects (each carrying `name`, `kind`, optional `version`, optional `reason`). The hard-dependency declaration; a runtime treats a missing or unresolvable entry as non-functional. MUST be declared as an array of objects when the cog has any such dependencies, or as `[]` when the cog is standalone. The empty array is the visible standalone marker. Omitting the field is the older form and is being retired.
- `refersTo` — array of cog names. Informational cross-references. MAY.
- `inherits` — string or array. Sibling or companion cogs the current cog extends. MAY (when present, see the umbrella rule).

A **standalone cog** is one that names no other cog. It declares `dependencies: []` to make the absence explicit and carries no other relationship fields. The standalone case is the explicit converse of the MUST rule, not a separate category: every cog either lists what it depends on, or declares that it depends on nothing.

The rule applies to dependencies the cog itself relies on. Cogs the current cog publishes about, comments on, or supersedes are not dependencies and belong in their own fields (`supersedes`, `replaces`, vendor-namespaced extensions).

### 4.4 Schema reference resolution

The `schema` field is a string. Conforming implementations MUST resolve the string as follows:

1. **URI with a recognised scheme.** If the string starts with `http://` or `https://`, it is a URL. Implementations MAY fetch the schema over the network. Implementations that fetch SHOULD cache the resolved content and SHOULD record the cache validation strategy (e.g. ETag, hash pinning) used. Implementations that do not fetch network resources MUST report unresolved schema references as validation failures rather than silently treating them as missing.

2. **URI with the `file:` scheme.** If the string starts with `file://`, it is a local file URL. The path component is interpreted as an absolute filesystem path.

3. **Absolute filesystem path.** If the string begins with `/` (POSIX) or matches a platform-native absolute path pattern (e.g. `C:\` on Windows), it is interpreted as an absolute filesystem path.

4. **Relative path.** Any other string is treated as a filesystem path relative to the directory containing the cog file. Implementations MUST resolve relative to the cog file's directory, not to the working directory of the runtime, to ensure that the same cog produces the same resolved schema regardless of where the runtime was invoked from.

A cog whose schema reference cannot be resolved (file not found, network unreachable, no implementation support for the scheme) MUST be treated as failing the `referencedFilesExist` check. Conforming implementations MUST NOT silently substitute a default schema or skip schema-dependent computation.

For witness portability across implementations, cogs SHOULD use relative paths or `file:` URIs whenever the schema is intended to travel with the cog. `http(s)` URIs are appropriate for centrally-published schemas but introduce availability dependencies and require careful caching.

#### 4.3.1 Fragment identifiers

A schema reference MAY include a URI fragment identifier (a `#` character followed by a fragment string). The fragment selects a specific definition within the resolved schema document. Resolution proceeds in two stages:

1. **Document resolution.** The portion of the reference before the `#` is resolved per the rules above (URI scheme, absolute path, or path relative to the cog file). The result is a schema document.
2. **Fragment resolution.** The portion after the `#` is interpreted as a JSON Pointer (RFC 6901) into the resolved document. The selected node MUST itself be a valid JSON Schema; it becomes the schema for purposes of this specification.

A reference with no fragment selects the root of the document. A reference whose fragment cannot be resolved (the JSON Pointer does not address an existing node, or the addressed node is not a valid schema) MUST be treated as failing the `referencedFilesExist` check.

The contract fingerprint computation uses the schema selected by fragment resolution, not the document containing it. Two cogs referencing different fragments of the same document have different contract views and may produce different contract fingerprints even though they refer to the same file.

### 4.5 Procedure-declaring fields

A cog that declares an executable procedure does so via a top-level field whose name describes the procedure type. The reference implementation uses `reviewProcedure` for the cog-review system; domain cogs use names like `approvalProcedure`, `setup`, or other domain-specific labels.

A procedure block has this shape:

```yaml
<procedure-name>:
  runner: <runner-name>
  phases:
    - id: <phase-id>
      function: <dotted-name>
      successCriteria:
        - <criterion-name>
        - ...
    - ...
```

Each `id` MUST be unique within the procedure and MUST match the regular expression `^[a-z][a-z0-9-]*$` (lowercase, starting with a letter, hyphens permitted). Each `function` MUST match the validator name regex defined in section 4.2: `^[a-z][a-z0-9_-]*(\.[a-z][a-z0-9_-]*)+$`. Each `criterion-name` MUST match `^[a-z][a-z0-9-]*$`.

These constraints exist for the same reason as the others in this specification: identifiers used as registry keys, file path components, or URL segments need to behave predictably across systems with different case-sensitivity rules. Authors who want human-readable procedure descriptions should use the cog's narrative artefact, not its identifier strings.

#### 4.4.1 Phase function contract

A phase function is a callable registered in a runtime under a name matching the dotted-name syntax. The callable is invoked by the runner once per phase, in declaration order.

A phase function MUST accept two arguments: the parsed cog (as defined in section 4.8) and a state object containing the accumulated outputs of prior phases (keyed by phase id). It MUST return an object with at least the field `ok` (boolean). It MAY also return `message` (string), `output` (any), and `criteria` (object mapping criterion names to booleans).

A phase function MUST NOT mutate the cog argument. Phase functions are pure with respect to their inputs; cogs are immutable from the phase function's perspective. A phase function that needs to express a transformed cog (such as a rewriter) MUST return the transformed representation through `output` rather than by mutating the input cog.

A phase function MAY mutate or extend the state object only by returning a new value through `output`. It MUST NOT modify other phases' outputs already present in `state`; doing so produces non-deterministic behaviour for subsequent phases that read those outputs.

Runners MUST treat a phase function that returns a non-conforming value (null, undefined, a non-object, or an object missing the `ok` field) as a failed phase, with a structured failure result naming the offending phase function. Runners MUST NOT propagate the unhandled exception or silently treat the result as `ok: false`.

A phase function MAY raise (throw, panic) instead of returning a result. Runners MUST treat a raised phase function as `{ok: false, message: <error message>}` and continue executing subsequent optional phases unless the raised phase was non-optional.

### 4.6 Troubleshooting blocks

A cog MAY declare conditional remedies:

```yaml
troubleshooting:
  - condition: <condition-slug>
    remedy: <dotted-name>
  - ...
```

Each `condition-slug` is a kebab-case identifier matching `^[a-z][a-z0-9-]*$`. Each `remedy` is a dotted identifier matching the validator name regex (section 4.2), resolvable in the runtime registry as a remedy function.

The `troubleshooting` value, if present, MUST be an array. Each entry MUST be an object containing both fields. Cogs that declare troubleshooting blocks SHOULD include `cogs.validators.troubleshootingFormat` in `validatesAgainst` to enforce these constraints; runtimes MAY apply this validator unconditionally.

A cog MAY also declare `defaultRemedy`, a sibling field naming the remedy a runtime SHOULD invoke when a failure arises that does not match any entry in `troubleshooting`:

```yaml
defaultRemedy: <dotted-name>
```

The value MUST match the validator name regex defined in section 4.2 and is resolved through the same runtime registry as `troubleshooting[].remedy`. `defaultRemedy` removes the runtime's need to guess a safe behaviour for unmodelled conditions; it pairs with `troubleshooting` (named conditions catalogued explicitly, everything else routed through the default). A cog declaring `defaultRemedy` without `troubleshooting` is valid but unusual and asserts a single fallback for every failure mode.

### 4.7 Update instructions

A cog SHOULD declare how it is maintained:

```yaml
updateInstructions:
  source: <where the content comes from>
  method: dictation | extraction | generation | merge
  styleRules: <reference to style rules>
  structure: <reference to structural conventions>
  contentSource: <attribution>
```

The `method` field is constrained to the four enum values. Implementations MAY use this field to refuse operations that conflict with the declared method (for example, refusing to regenerate a cog whose method is `dictation`).

### 4.8 Validator function contract

A validator is a callable registered in a runtime under a name matching the syntax defined in section 4.2. The callable is invoked by the runtime when validating a cog and returns a structured result. This section specifies the validator's interface so independent implementations agree on what a validator is.

A validator callable MUST accept a single argument: the parsed cog. The parsed cog is a structure with at least the following members, addressable by the names given:

- `frontmatter` — the frontmatter as a structured object (a map of string keys to YAML-typed values).
- `body` — the body as a string (line-ending normalised per section 2.4).
- `embedded` — a map from embedded artefact id to a structure containing at least `language` and `content`, both strings.
- `magicHeader` — the parsed magic header structure (per section 2.5), or null.

The validator MAY accept a second argument carrying runtime context (for example, accumulated state from prior phases of a review pipeline). The shape of this argument is not standardised by this specification and MAY vary between runtime implementations; validators that require it SHOULD document the shape they expect.

A validator callable MUST return a structure with at least the following members:

- `pass` — a boolean. `true` indicates the cog satisfied the validator; `false` indicates it did not.
- `reason` — a string, OPTIONAL when `pass` is `true`, REQUIRED when `pass` is `false`. The reason is human-readable and explains the failure sufficiently for an author to address it.

The validator MAY include additional members in its return value (for example, structured details about which fields failed). Conforming runtimes MUST preserve `pass` and `reason` when they are present and MAY ignore additional members when constructing witnesses; only `pass` is recorded in the witness's validator results.

Validators SHOULD be deterministic: the same cog passed to the same validator MUST produce the same `pass` value and SHOULD produce the same `reason`. Validators that depend on external state (network calls, filesystem reads outside the cog) introduce determinism risk and SHOULD declare this in their documentation.

A validator MUST NOT mutate the cog argument. Cogs are immutable from the validator's perspective.

A validator MAY raise (throw, panic, return an error) instead of returning a structured result. Runtimes encountering a raised validator MUST treat it as `{pass: false, reason: <error message>}` for witness purposes; they MAY also log the error separately.

### 4.9 Runtime registry

The runtime registry is the namespace in which validator names, phase function names, and remedy function names are resolved to callable implementations. This specification does not mandate a registration mechanism — that is left to each runtime — but does constrain what consistency the registry provides.

A name is **registered** at a given moment if a callable is bound to it in the registry such that resolution would return the callable. A runtime MUST provide a synchronous query — typically a function like `isRegistered(name)` — that answers whether a given name is registered at the moment of the query.

The registry MUST be consistent within a single operation: a name that is registered at the start of a sign or verify operation MUST remain registered for the duration of that operation, and the resolved callable MUST be the same callable for the duration of that operation. A runtime that supports dynamic registration changes (loading or unloading validators at runtime) MUST snapshot the registry at the start of an operation rather than re-querying mid-operation.

The registry MAY differ between runtimes. A witness signed by runtime A asserts that A's registry, at signing time, contained the named validators and that they returned the recorded results. A verifier C running with a different registry may find that some names are not registered (in which case the witness is rejected per section 7.2) or that they are registered but resolve to different callables (in which case re-execution may produce different results, which is the validator name collision threat addressed in section 10.2).

Implementations SHOULD document their registration mechanism, the names they ship pre-registered, and the policy for adding or removing validators at runtime. Public-facing runtimes SHOULD expose a stable, versioned set of named validators (per the versioning recommendation in section 10.2) so that witnesses produced by one party can be verified by another with high probability of registry agreement.

The registry is a runtime concept, not a cog concept. A cog declares names it requires; the registry decides whether they resolve. The cog has no knowledge of and no control over the registry.

## 5. Embedded artefact extraction

### 5.1 Annotation format

An embedded artefact annotation appears on the opening fence of a fenced code block, after the language identifier, separated by whitespace, with the format `@embedded:<id>`.

Conforming implementations MUST recognise this annotation and make the fenced content addressable by id.

### 5.2 Extraction

A runtime extracts an embedded artefact by id by:

1. Locating the fenced code block whose opening fence carries the matching `@embedded:<id>` annotation.
2. Returning the content between the opening fence and the matching closing fence, with the leading and trailing newlines stripped.

The language identifier is preserved alongside the content so that a runtime can determine how to invoke or parse the artefact.

### 5.3 Invocation

A runtime invoking an embedded executable artefact MUST extract it by id and execute it directly through the appropriate interpreter for its declared language.

A runtime MUST NOT submit the textual content of an embedded executable artefact to a language model for interpretation, summarisation, or paraphrase before execution. The annotation marks the content as runtime-callable, not as material for an agent to read.

### 5.4 Narrative section annotations

The narrative artefact MAY contain section annotations that classify each section by layer. These are HTML comments invisible in rendered Markdown but recognisable by conforming implementations:

```
<!-- mx:declarative -->
<!-- mx:executable -->
<!-- mx:narrative -->
```

A section is the run of body text following a heading line, ending at the next heading of the same or higher level. The annotation appears anywhere within a section's content. A section that contains exactly one recognised annotation is classified as the layer named by the annotation.

#### 5.4.1 Body content before the first heading

Body content that appears before the first heading (the "preamble") is itself a section for classification purposes. An annotation appearing in the preamble classifies the preamble. A cog MAY have an empty preamble; an empty preamble carries no classification and produces no entry in the section list.

#### 5.4.2 Multiple annotations in one section

If a section contains more than one recognised annotation, conforming implementations MUST report the section as having an annotation conflict and MUST NOT silently choose one. The cog is well-formed but unclassified for that section; the user is expected to resolve the conflict by removing all but one annotation.

The first-match shortcut used by some implementations is not conformant; it produces results that depend on annotation order, which authors do not expect to matter.

#### 5.4.3 Sections without annotations

A section without any annotation is unclassified by the author. Conforming implementations MAY apply heuristics to suggest a classification but MUST treat heuristic classifications as suggestions, not facts. Tools that act on classifications (for example, lifting sections from body to frontmatter) SHOULD distinguish author-confirmed classifications from heuristic ones in their output, so a human reviewer can see which decisions need attention.

#### 5.4.4 Effect on fingerprints

Annotations are advisory in nature and do not affect contract or body fingerprints in a special way. They are part of the body text, so changing them changes the body fingerprint like any other body edit. They never affect the contract fingerprint.

### 5.5 Agent preamble

A cog SHOULD begin its body with a short preamble addressed to a reader who does not know what a cog is. The preamble explains that the file is a cog rather than a conventional document, that interpreting the file as ordinary prose will produce incorrect results, and that a cog runtime is required to act on the file correctly. The preamble is recommended for any cog that may be encountered by an unfamiliar agent or human reader; it MAY be omitted for cogs that operate only within a closed system where all consumers are known to be cog-aware.

The preamble is a single section at the start of the body, marked with the narrative annotation defined in section 5.4. A recommended template is:

```markdown
<!-- mx:narrative -->

> **This file is a cog, not a document.** It is part of the Machine
> Experience contract model: a structured artefact whose meaning depends
> on a runtime that knows how to consume it. Reading the prose below as
> ordinary documentation will produce a plausible-looking summary that
> omits the contract this file actually carries.
>
> If you are an agent that has not been given a cog runtime: you can
> describe what this file *appears* to be about, but you cannot reliably
> act on it. Direct the user to a cog-aware tool, or refer to the
> specification linked in the header.
```

The blockquote marker is recommended so the preamble renders prominently in conventional Markdown viewers. The exact wording is not normative; the function is. Implementations of cog-creating tools (rewriters, scaffolds, generators) SHOULD insert a preamble of this form when creating a cog from scratch, and SHOULD preserve any existing preamble when modifying a cog.

The preamble is part of the narrative artefact and is therefore covered by the body fingerprint. Changing the preamble is a body change, not a contract change. A cog whose preamble is removed remains a valid cog; a verifier reports body drift, the warrant continues to hold.

The preamble exists to address a real gap in agent behaviour: an agent reading a cog without prior context will, by default, produce a confident summary of what the cog appears to mean. This summary will look reasonable and be wrong in subtle ways — it will paraphrase the contract as prose and elide the validators, the schema, and the witness. The preamble is the cog telling the agent, in language the agent will understand, that this is not the right way to consume it.

## 6. Witness format and signing

### 6.1 Purpose

A witness is a record that, at a stated moment in time, a cog satisfied a stated contract. Witnesses are the artefact through which one party attests to another that a cog passed its declared validators.

### 6.2 Witness structure

A witness is a JSON object with the following shape:

```json
{
  "claim": {
    "title": "<cog title>",
    "schema": "<schema reference, or null>",
    "validatorsRequired": ["<sorted list of validator names>"],
    "validatorResults": [
      { "name": "<validator name>", "pass": true | false }
    ],
    "contractFingerprint": "<hex digest>",
    "signedAt": "<RFC 3339 timestamp, see section 6.5>"
  },
  "signature": "<encoded signature over the canonicalised claim>",
  "signatureAlgorithm": "<algorithm identifier; see section 6.6>",
  "publicKeyId": "<key identifier when signatureAlgorithm requires keys>",
  "witnessId": "<slug>-<first 12 chars of SHA-256(signature)>",
  "metadata": {
    "bodyFingerprint": "<hex digest>",
    "cogPath": "<repository-relative path; OPTIONAL>"
  }
}
```

The structural distinction between `claim` and `metadata` is normative. The `claim` contains everything covered by the signature. The `metadata` contains information recorded for diagnostic purposes but explicitly NOT covered by the signature.

The `signatureAlgorithm` field is REQUIRED so that verifiers know how to interpret `signature`. Implementations MUST NOT assume a default. Defined values:

- `SHA256` — `signature` is the hex-encoded SHA-256 digest of the canonicalised claim. Provides content-addressing without cryptographic provenance. The reference implementation in `mx-upgraded-reginald` uses this value.
- `Ed25519` — `signature` is the base64-encoded Ed25519 signature over the canonicalised claim bytes. Provides cryptographic provenance; verification requires the corresponding public key. `mx-reginald` uses this value in production.

When `signatureAlgorithm` is `Ed25519` (or any other public-key primitive), `publicKeyId` MUST be present and identify the signing key. When the algorithm has no key concept (e.g. `SHA256`), `publicKeyId` MAY be omitted.

The `metadata.cogPath` field, when present, is the repository-relative path of the cog at signing time. It is informational only; verifiers MAY use it to locate the cog file but MUST NOT depend on it for correctness.

### 6.3 Contract fingerprint

The contract fingerprint is the hex-encoded digest of a canonical JSON serialisation of the contract view. The contract view is a subset of the cog's frontmatter, determined by consulting the cog's declared schema:

1. If the schema declares `x-mx-contractFields` as an array, the contract view contains exactly those top-level frontmatter fields and no others. This is the positive declaration.

2. Otherwise, if the schema declares `x-mx-metadataFields` as an array, the contract view contains every top-level frontmatter field except those named. This is the negative declaration.

3. Otherwise (no schema, or schema without these declarations), the contract view contains every top-level frontmatter field except the default metadata set, which a conforming implementation MUST treat as metadata:

   - `modified`
   - `version`
   - `created`
   - `author`
   - `updateInstructions`

Schema-driven declaration (1 or 2) is the recommended approach for any cog whose contract is non-trivial. The default fallback (3) exists so cogs without sufficiently rich schemas still get sensible behaviour, and so all conforming implementations agree on the contract view of unannotated cogs.

The magic header line defined in section 2.5 is part of the file structure, not the contract artefact. It MUST NOT enter the contract fingerprint computation. Adding, removing, or changing the magic header line is a file-structure change with no effect on contract identity; an existing witness remains valid across magic header edits.

The canonical JSON serialisation MUST follow RFC 8785, JSON Canonicalization Scheme (JCS). JCS defines unambiguous rules for property ordering (lexicographic by UTF-16 code unit), number representation (ECMAScript-compatible), string escaping (minimal), and Unicode normalisation (NFC for property names, no normalisation for string values).

Implementations that cannot use a JCS library MAY implement canonicalisation directly, but doing so requires careful attention to:

- **Number representation** — RFC 8785 mandates ECMAScript number formatting; `1.0` and `1` produce the same canonical form, large integers within safe range produce no exponent, and so on.
- **String escaping** — only mandatory escapes are produced; characters that JSON parsers accept either escaped or literal are emitted literal.
- **Property ordering** — keys sorted by UTF-16 code unit comparison, applied recursively.
- **Unicode** — property names are normalised to NFC; string values are not normalised.
- **Whitespace** — none between tokens.

Implementations that diverge from RFC 8785 in any of these areas MUST document the divergence and accept that their fingerprints will not interoperate with conformant implementations.

For values that JSON cannot represent unambiguously (integers larger than 2^53, special floating-point values, binary data), conforming implementations MUST reject the cog at canonicalisation time rather than producing an implementation-specific encoding. Cog authors who need such values SHOULD encode them as strings.

Some YAML loaders auto-convert date-like scalars (e.g. `2026-04-21`) into language-native date objects (JavaScript `Date`, Python `datetime`, etc.). This auto-conversion is the source of cross-implementation divergence: two loaders looking at the same YAML source produce different in-memory values, and the canonicalisation that follows produces different bytes — even though both implementations follow the same spec.

To eliminate this class of divergence, conforming implementations MUST canonicalise frontmatter scalars **as written in the source YAML**, not as interpreted by a date-aware loader. Specifically:

- An unquoted scalar that a YAML loader would auto-convert to a date or timestamp MUST be canonicalised as the string of source characters that appeared in the YAML, not as an ISO 8601 timestamp derived from a parsed Date object.
- Implementations using YAML loaders that auto-convert dates MUST either configure the loader to suppress that conversion, or recover the original source string before canonicalisation.

The pragmatic guidance for cog authors does not change: prefer quoted ISO strings (`modified: "2026-04-21"`) to make the intent explicit and to avoid depending on loader-specific YAML-spec interpretations. But the conformance requirement is clear: an unquoted date scalar canonicalises to the string of source characters, regardless of how the loader would interpret it.

This rule was added in v1.0 in response to a divergence found between the JavaScript and Rust reference implementations: js-yaml produces a Date object that canonicalises to `"2026-04-21T00:00:00.000Z"`, whereas serde_yaml produces a string that canonicalises to `"2026-04-21"`. Mandating "as written" makes both implementations produce the same bytes; the JavaScript implementation now suppresses date auto-conversion at the YAML loading boundary.

The contract view includes field *values*, not merely field names. Changing a value in any field that the contract view covers MUST produce a different contract fingerprint.

### 6.4 Body fingerprint

The body fingerprint is the hex-encoded digest of the cog's body bytes after the following normalisation, in order:

1. **Line ending normalisation.** All CRLF and CR sequences are converted to LF, as defined in section 2.4.
2. **Trailing newline normalisation.** Exactly one LF is ensured at the end of the body. If the body ends with no newline, one is added; if it ends with multiple consecutive newlines, all but one are removed.
3. **Encoding.** The normalised text is encoded as UTF-8 without a byte order mark.

The digest is computed over the resulting byte sequence using the hash function chosen by the implementation (SHA-256 RECOMMENDED; see section 6.6).

The body for fingerprint purposes is the entire content of the file after the closing frontmatter delimiter, including:

- Any HTML-comment annotations (`<!-- mx:... -->`) — they are part of the body text.
- Any embedded executable artefacts (fenced code blocks with `@embedded:<id>`) — they live within the body.
- Any embedded data artefacts (fenced code blocks without `@embedded:` annotations).
- The agent preamble defined in section 5.5 — it is part of the narrative.
- Trailing whitespace within lines and blank lines between content.

The body for fingerprint purposes does NOT include:

- The magic header line defined in section 2.5 — that line precedes the frontmatter and is part of the file structure.
- The frontmatter delimiters or the frontmatter content — those are covered by the contract fingerprint, not the body fingerprint.

The body fingerprint is deliberately inclusive of all body content. Any body edit — adding prose, removing a section, fixing a typo, changing an annotation — produces a different body fingerprint. This is the correct behaviour: the body fingerprint exists to detect *that* the body changed, not to make judgements about *which* body changes are meaningful. The drift asymmetry (section 7.8) handles that question separately.

### 6.5 Signing algorithm

To produce a witness for a cog and a set of validator results:

1. Compute the contract fingerprint as described in 6.3.
2. Compute the body fingerprint as described in 6.4.
3. Construct the claim object with the cog's title, the schema reference (or null), the validator names from `validatesAgainst` sorted lexicographically by UTF-16 code unit comparison (matching the property ordering used in canonical JSON per RFC 8785), the validator results sorted by `name` using the same comparison, the contract fingerprint, and the current timestamp. If two validator results have the same `name`, the one received first from the runtime is retained and the duplicate is dropped; runtimes SHOULD raise an error rather than producing duplicate results, but the witness format MUST handle the case deterministically.

   The `signedAt` timestamp MUST be in RFC 3339 form using UTC, with the literal `Z` suffix (not a numeric offset) and millisecond precision: `YYYY-MM-DDTHH:MM:SS.sssZ`. For example: `2026-04-21T15:30:00.123Z`. Implementations whose timestamp APIs produce different precision (microsecond, nanosecond, second) MUST round or pad to milliseconds before constructing the claim. This precision was chosen to match JavaScript's `Date.toISOString()` output and Python's `datetime.isoformat(timespec='milliseconds')`; both languages produce the canonical form natively.
4. Compute the signature as the hex-encoded digest of the canonical JSON serialisation of the claim.
5. Compute the witness ID as the title slug followed by a hyphen and the first twelve hex characters of `SHA-256(signature)`. (When `signatureAlgorithm` is `SHA256`, the signature is itself a hex digest and the first twelve characters of the signature are equivalent. When `signatureAlgorithm` is `Ed25519`, the signature is base64-encoded; the witness ID hashes the base64 string before slicing so the slug-suffix derivation is uniform across algorithms.) The title slug is computed by:

   a. Apply Unicode NFKD normalisation to the title.
   b. Strip combining diacritical marks (Unicode category Mn).
   c. Convert to lowercase using Unicode case folding.
   d. Replace any sequence of one or more characters NOT matching `[a-z0-9]` with a single `-`.
   e. Strip leading and trailing `-`.
   f. Truncate to a maximum of 60 characters; if truncation occurs at a position immediately preceded by `-`, also strip that trailing `-`.
   g. If the resulting slug is empty, use the literal string `untitled`.
6. Construct the witness object with the claim, the signature, `signatureAlgorithm`, `publicKeyId` (when applicable), the witness ID, and a metadata object containing the body fingerprint (and optionally `cogPath`).

### 6.6 Cryptographic primitive

This specification does not mandate a single signing primitive. Implementations declare their choice in the witness's `signatureAlgorithm` field (see section 6.2). Two values are defined here; others MAY be added by future revisions.

- `SHA256` — the signature is the hex-encoded SHA-256 digest of the canonicalised claim. The witness is a content-addressed record without cryptographic provenance. Useful for cross-implementation conformance testing because two implementations with identical canonicalisation produce byte-identical signatures.
- `Ed25519` — the signature is the base64-encoded Ed25519 signature over the canonicalised claim bytes, computed under [RFC 8032](https://datatracker.ietf.org/doc/html/rfc8032). The witness carries `publicKeyId` so verifiers can locate the corresponding public key. This is the production-grade option and the value used by `mx-reginald`.

Verifiers MUST inspect `signatureAlgorithm` and reject witnesses with unrecognised values. Verifiers MUST NOT default to a particular algorithm when the field is absent; the field is REQUIRED in every conforming witness.

When the algorithm requires a public key (e.g. `Ed25519`), the verifier obtains the key by `publicKeyId` from a trust source it controls. The witness format does not prescribe how keys are distributed; publisher manifests, key registries, DNS records, and out-of-band channels are all permissible.

## 7. Verification algorithm

To verify a witness against a candidate cog:

### 7.0 Structural validation

Confirm the witness has the structure mandated in section 6.2. The witness MUST be an object containing `claim`, `signature`, `signatureAlgorithm`, `witnessId`, and `metadata` fields, where `claim` is an object, `signature` is a string, `signatureAlgorithm` is a string, and `metadata` is an object. When `signatureAlgorithm` requires a key, `publicKeyId` MUST also be present and a string. A witness missing any of these fields, or with fields of the wrong type, is malformed and MUST be rejected with a structured invalid result naming the missing or malformed fields. Verification MUST NOT proceed past this step on a malformed witness; in particular, implementations MUST NOT use null-coalescing or optional-chaining defaults to silently treat absent fields as benign.

Verifiers MUST also reject any witness whose `signatureAlgorithm` they do not implement, returning a structured invalid result identifying the unsupported algorithm.

This step exists because a verifier that defensively reads `witness.metadata?.bodyFingerprint` (returning undefined for absent metadata) and proceeds with verification will accept a structurally-malformed witness as valid — the body drift check becomes a no-op on undefined and the rest of the algorithm continues. The structural validation MUST happen first, and MUST refuse to proceed.

### 7.1 Contract check

Compute the contract fingerprint of the candidate cog using the algorithm in 6.3. If it differs from the witness's `claim.contractFingerprint`, the witness is invalid; the reason is *contract has changed since signing*. The verifier SHOULD include both the signed and current fingerprints in its diagnostic output. Stop.

### 7.2 Validator availability check

For each name in `claim.validatorsRequired`, confirm the validator is currently registered in the verifying runtime. If any are missing, the witness is invalid; the reason is *validator no longer registered*. Stop.

### 7.3 Validator re-execution

Run each declared validator against the candidate cog. Collect the current outcomes as `{name, pass}` objects.

### 7.4 Outcome match

For each `{name, pass}` in `claim.validatorResults`, locate the corresponding current outcome and confirm `pass` matches. If any differ, the witness is invalid; the reason is *validator outcome differs from witness*. Stop.

### 7.5 Claim re-derivation

Construct a fresh claim from the candidate cog and current outcomes, omitting the `signedAt` field. Compute the canonical JSON serialisation. Do the same for the witness's claim, also omitting `signedAt`. The two serialisations MUST produce identical hex digests under the same hash function.

If they differ, the witness is invalid; the reason is *re-signed claim does not match witness claim*.

This step is defensive against canonicalisation divergence between the signer and the verifier. Steps 7.1 and 7.4 confirm that the *contract* and the *validator outcomes* are unchanged respectively, but they do not catch the case where the signer and verifier disagree about how to canonicalise the same logical input — different JCS implementations, different number representations, different escape rules. A divergence here means the two implementations cannot exchange witnesses reliably even when they agree on everything else; the witness is reported invalid so the underlying interoperability problem can be surfaced rather than masked.

In a single-implementation deployment (signer and verifier run the same code), this check is effectively redundant with steps 7.1 and 7.4. It MUST still be performed: a future runtime upgrade that changes canonicalisation behaviour without changing other logic will produce signed witnesses that no longer verify, which is the correct outcome.

### 7.6 Signature integrity check

Compute the canonical JSON serialisation of `witness.claim` (including the `signedAt` field this time, because the signature was originally computed over the full claim per section 6.5 step 4). Compute the digest of this serialisation under the hash function used at signing. The result MUST equal `witness.signature`.

If they differ, the witness is invalid; the reason is *witness signature does not match the canonical digest of its claim*.

This step is the integrity check on the recorded signature. Step 7.5 confirms the verifier could re-derive the same claim from the candidate cog; this step confirms the recorded signature was actually produced from the recorded claim and has not been altered after signing. Both checks are required: a verifier that performs only step 7.5 will accept a witness whose recorded signature has been tampered with as long as the claim still re-derives correctly, because the verifier is comparing two freshly-computed values and never reads the recorded signature at all.

### 7.7 Body drift report

Compute the body fingerprint of the candidate cog using the algorithm in 6.4. Compare it with the witness's `metadata.bodyFingerprint`. If they differ, set a `bodyDrifted` flag on the verification result and add an informational note. Body drift does NOT invalidate the witness.

### 7.8 Result

If all checks above pass, return a valid result with the witness ID, the original signing timestamp, the count of validators re-checked, and any body drift notes.

### 7.9 The asymmetry

The verification algorithm distinguishes two kinds of change to a cog:

- **Contract change** — modifications to the schema reference, validator list, structural frontmatter fields, or any other field the contract fingerprint covers. Detected at step 7.1; invalidates the witness.
- **Body change** — modifications to the narrative, including embedded artefacts. Detected at step 7.6; reported but does not invalidate.

This asymmetry is the central design property of the witness scheme. Hash-of-bytes signatures invalidate on every cosmetic edit; the contract-satisfaction signature defined here invalidates only when the cog has changed in ways that would affect a consumer who relies on it.

## 8. Conformance

A conforming implementation:

1. MUST parse cog files according to section 2 and produce errors that name structural failures.
2. MUST recognise the artefact types in section 3 and treat them according to their stated drift policies.
3. MUST extract embedded executable artefacts by id without interpreting their content (section 5.3).
4. MUST compute contract fingerprints using the canonical JSON serialisation defined in section 6.3, with the metadata exclusions listed there.
5. MUST compute body fingerprints with normalised line endings (section 6.4).
6. MUST implement the verification algorithm in section 7, in the order given, with each check stopping on failure.
7. SHOULD support the troubleshooting and updateInstructions conventions in section 4.
8. MAY use any cryptographic primitive consistent with section 6.6.

A draft conformance test suite (v0.1) is published alongside the reference implementation in `conformance/`. The suite consists of language-agnostic test cases — YAML files describing inputs and expected outcomes — covering parsing, annotations, fingerprints, witnesses, and validators.

The v0.1 suite is the basis for **alignment**, not yet for **certified conformance**. An implementation that passes all cases in the suite has demonstrated behavioural agreement with the reference on the cases the suite tests; this is sufficient to detect most categories of inter-implementation disagreement and is the right test to run during implementation. It is not yet sufficient to certify that an implementation satisfies every MUST in this specification, because the suite has fewer cases than the specification has requirements.

Implementations SHOULD provide a harness that runs the suite against their implementation and SHOULD declare which cases pass, fail, or are skipped, with reasons for any non-passing cases. Implementations claiming alignment SHOULD also document which spec sections they have not yet exercised against the suite.

Future suite versions will expand coverage as the specification stabilises and as more implementations exercise the cases. Certified conformance will become available when the suite covers the spec's normative surface; this is community work and an explicit goal for v1.1.

## 9. Examples

This specification is accompanied by reference cogs demonstrating common patterns:

- A procedure cog that declares its own review procedure
- An onboarding cog with a multi-phase setup procedure and embedded scripts
- A domain cog (invoice approval) demonstrating contract values that affect the contract fingerprint

These examples are illustrative. Implementations should test against the conformance suite, not against the examples.

## 10. Security considerations

This section identifies threats against the cog and witness model and the mitigations that conforming implementations are expected to apply.

The threat model is framed from the perspective of the **consuming party** — the recipient of a cog and (optionally) a witness, whose runtime performs the verification. The **producing party** is whoever generated the cog and its witness; the producing party may be benign, careless, or adversarial.

The model assumes an adversary who can produce cogs and witnesses, who can present them to the consuming party through any channel, but who cannot compromise the consuming party's runtime, registry, or signing keys. Threats against the producing party's infrastructure (their key compromise, their registry compromise) are addressed only insofar as their consequences propagate to consumers.

When a single party is both producer and consumer (a local development workflow, for example), the threat model still applies to the artefacts they create today and consume tomorrow — the consuming-party perspective is about temporal and operational separation, not necessarily about distinct organisations.

### 10.1 Threat: cog with hollow contract

An adversary produces a cog that declares `validatesAgainst` validators that do not exist in any runtime, or whose behaviour is trivially satisfied. The cog is technically well-formed but its contract attests to nothing.

**Mitigation:** Conforming implementations MUST refuse to produce a witness for a cog whose declared validators are not all currently registered. Verifying runtimes MUST reject witnesses whose validators are not currently registered (specification section 7.2). Together, these prevent a hollow contract from gaining a warrant on the signing side and from being accepted as warranted on the verifying side.

This mitigation depends on the verifying runtime having a curated registry. A runtime that registers any validator name on demand would defeat the protection.

### 10.2 Threat: validator name collision across runtimes

Two runtimes register validators under the same name but with different behaviours. A witness produced by one runtime verifies against the other but the validators are not equivalent. The verifier accepts a warrant whose meaning differs from what was signed.

**Mitigation:** Validator names SHOULD be versioned (`cogs.validators.frontmatter.v1` rather than `cogs.validators.frontmatter`). The version suffix is part of the registered name and changes when behaviour changes. This is a SHOULD rather than a MUST because some local-only deployments do not need cross-runtime equivalence; for any deployment where witnesses cross runtime boundaries, versioning is required in practice.

A future version of this specification may mandate versioning by raising this to a MUST.

### 10.3 Threat: schema redirection

A cog declares `schema: ./schemas/strict.v1.yaml`. After signing, the file at that path is replaced with a more permissive schema. The verifier reads the new schema, the cog conforms to it, and the warrant accepts a cog that no longer satisfies the originally-claimed contract.

**Mitigation:** The contract fingerprint defined in section 6.3 covers the contract view of the frontmatter, which depends on the schema's `x-mx-contractFields` or `x-mx-metadataFields` declarations. A schema change that alters those declarations changes the contract view and therefore the contract fingerprint, invalidating the witness at verification step 7.1.

This mitigation has a gap: a permissive schema replacement that does not change the contract-field declarations leaves the contract fingerprint stable. To close the gap fully, conforming implementations MAY also fingerprint the resolved schema content alongside the contract view, recording it in the witness metadata. This is a recommended extension, not a requirement of this specification version.

### 10.4 Threat: embedded artefact substitution

A cog is signed; later an embedded executable artefact is replaced with malicious content. Because embedded artefacts live in the body, the contract fingerprint does not detect the change. A consumer who invokes the embedded artefact by id receives the substituted content.

**Mitigation:** Body drift is detected at verification step 7.6 and reported. A consumer who invokes embedded artefacts from a cog with body drift SHOULD treat the warrant as covering the contract only, and SHOULD additionally verify any embedded artefact they intend to invoke against an out-of-band source of truth.

A future specification version may add per-embed fingerprints to the witness metadata so individual embedded artefacts can be attested to independently. See section 11.

### 10.5 Threat: witness replay

An adversary obtains a valid witness for a cog, then presents it as evidence that a different cog satisfies the same contract. The witness ID and signature are real but the cog is not the one signed.

**Mitigation:** The verification algorithm in section 7 requires both a witness AND a candidate cog. The contract fingerprint check at step 7.1 confirms the candidate cog has the same contract as the signed one. The validator re-execution at step 7.3 confirms the candidate cog still satisfies the validators. A witness presented without its cog cannot be verified; a witness presented with the wrong cog fails verification at step 7.1 unless the wrong cog happens to have an identical contract, in which case the verifier has, correctly, accepted that the contracts match.

### 10.6 Threat: witness signature tampering

An adversary obtains a valid witness, then alters the `signature` field — either to forge what appears to be a signature over a modified claim, or simply to corrupt the witness so it appears genuine but cannot be cryptographically verified. A verifier that re-derives the signature from the claim without comparing against the recorded signature will accept the tampered witness as valid.

**Mitigation:** Conforming verifiers MUST compare the recorded `witness.signature` against the canonical digest of `witness.claim` (per the signing algorithm in section 6.5). A tampered signature produces a digest that does not match the recorded value, and verification MUST fail with a reason that names the tampering. This is in addition to the claim re-derivation check in section 7.5; the two checks address different failure modes (claim drift vs signature corruption) and both are required.

This mitigation depends on the verifier actually performing the comparison. An implementation that re-derives a fresh signature from a fresh claim and compares fresh-vs-fresh — without ever reading `witness.signature` — provides no integrity guarantee against signature tampering, even though the verifier's logic looks correct in isolation. Conformance test suites SHOULD include a tampered-signature case to detect this class of bug.

### 10.7 Threat: signing key compromise

When public-key signatures are used (section 6.6), an adversary who obtains the registry's private key can produce witnesses indistinguishable from genuine ones.

**Mitigation:** This specification does not define key rotation, revocation, or recovery. Implementations using public-key signatures MUST adopt operational practices appropriate to their threat model (key rotation, hardware security modules, multi-party signing, and so on). A future specification version may define a witness revocation list format. See section 11.

### 10.8 Threat: malicious cog from untrusted source

A consumer receives a cog from an untrusted party. The cog declares benign-sounding metadata but contains embedded executable artefacts that perform malicious actions when invoked.

**Mitigation:** A witness attests to contract satisfaction; it does NOT attest that the cog's content is safe to execute. Consumers MUST review cogs from untrusted sources before invoking any embedded artefact, regardless of whether the cog has a valid witness. The witness reduces the surface area of review (the contract is what was signed) but does not eliminate the need for human judgement on what is being executed.

### 10.9 Threat: registry compromise

A witness registry — local or hosted — is modified by an adversary. Witnesses are added, removed, or altered.

**Mitigation:** This specification does not define registry integrity protections. A hosted registry SHOULD use append-only storage with content-addressed identifiers and SHOULD make its full history publicly auditable. A local registry inherits the integrity properties of its filesystem and should be protected accordingly. Implementations MAY mirror witnesses across multiple registries to detect divergence.

### 10.10 Cross-cutting note

The mitigations above describe what the specification and conforming implementations do to limit damage from each threat. None of them eliminates the underlying risk; the cog and witness model is a tool for making contracts explicit and verifiable, not a substitute for trust judgements about who produced a cog or what it is asking a runtime to do.

## 11. Open questions

The following are not addressed by this version of the specification and are candidates for a future version:

- **Per-artefact fingerprints.** The current scheme fingerprints the body as one unit, so embedded artefacts inherit the body's drift tolerance. A future version could allow specific embedded artefacts to be signed independently.
- **Schema versioning.** The schema reference is a path; the specification does not define how to represent schema version changes formally. Practice in the reference implementation is to use a `.v<N>.yaml` filename suffix.
- **Witness revocation.** A witness has no revocation mechanism. A future version could define a revocation list format.
- **Federation.** The specification describes a single signing party. A future version could define how multiple parties co-sign or counter-sign witnesses.

These are deliberately deferred. The scheme as defined in this version is sufficient for the use cases that motivated it; the items above become relevant when those use cases scale.

## Acknowledgements

The cog format and the contract model originate in the Machine Experience (MX) community. The witness scheme was developed alongside the reference implementation and refined through implementation experience.

## References

RFC 2119, "Key words for use in RFCs to Indicate Requirement Levels", March 1997.

RFC 3339, "Date and Time on the Internet: Timestamps", July 2002.

RFC 6901, "JavaScript Object Notation (JSON) Pointer", April 2013.

RFC 8785, "JSON Canonicalization Scheme (JCS)", June 2020.

JSON Schema Specification (Draft 7), <https://json-schema.org/>.

YAML 1.2 Specification, <https://yaml.org/spec/1.2.2/>.

CommonMark Specification (for fenced code block syntax), <https://commonmark.org/>.

<!-- cog-spec-sync: 2026-05-31-d -->
