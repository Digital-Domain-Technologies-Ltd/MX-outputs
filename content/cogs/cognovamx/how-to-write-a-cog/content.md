---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "how-to-write-a-cog"
version: "1.1"
description: General authorial guide for writing any cog — from blank file to a working `.cog.md`. Walks through the standard opening header, the YAML frontmatter shape, the cog-type choice, the cog-graph fields, the typed body blocks, embedded `@embedded:` scripts for action cogs, and where the file goes.

created: 2026-05-03
modified: 2026-05-05

author: Tom Cranstoun

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/how-to-write-a-cog.cog.md
  maintainer: info@cognovamx.com
  license: proprietary
  status: published
  x-mx-riskLevel: low

  x-mx-category: mx-core
  partOf: mx-os
  refersTo: [what-is-a-cog, building-action-docs, cog-id, what-is-mx-os, how-mx-os-runs]
  buildsOn: [what-is-a-cog]
  tags: [authoring, cog, guide, tutorial, frontmatter, info-cog, action-cog]

  audience: [humans, machines]
  readingLevel: intermediate
  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
---

# how-to-write-a-cog

Walks an author from a blank file to a working cog of any flavour. The steps are the same for every cog; the cog-type choice in step 1 determines which optional sections apply.

## Overview

A cog is a `.cog.md` file: markdown body, structured YAML frontmatter, opens with a fixed 5-line orientation header. Cogs come in flavours (info, action, routing, certificate-of-genuineness, community-owned-governance-standard) and the flavour shapes which Zone-2 fields apply, but every cog shares the same skeleton. This cog walks you through the skeleton in ten steps, then points at the flavour-specific drill-down docs for the bits that differ.

## Step 0 — Where this fits with skills

A cog is a portable content unit that any agent can read; an **info-cog** describes something, an **action-cog** does something. A **skill** is a Claude-Code-only configuration file that tells the assistant when to dispatch to a cog. Skills route. Cogs do. When a skill and a cog share a name, the cog is authoritative — the skill exists to wire the chat surface to the cog, not to duplicate its work.

An action-cog declares **`actionType`** alongside `contentType: action-doc` so a reader knows the cognitive class without inferring from body content. Three values:

- **`scripted`** — the cog body carries a fenced ```` ```bash @embedded:<id> ```` block. A runtime such as `mx-exec` extracts the block by id and runs it directly. Deterministic.
- **`sop`** — the cog body has no `@embedded` block. The `x-mx-execute.actions[].usage` value is descriptive prose intended for an LLM (via a skill) to read and perform. LLM-mediated.
- **`hybrid`** — both an embedded script AND descriptive usage prose. Script handles the deterministic portion; prose carries the judgment-dependent portion an LLM performs.

Two further cog kinds exist alongside info and action: a **routing-cog** (`contentType: routing-doc`) maps user intent to other cogs and carries a `routes:` block; a **certificate-of-genuineness** carries publisher-signed claims with `proofOfAuthorship` and `integritySignature`; a **community-owned-governance-standard** (`contentType: cogs`) is a cog whose definition is owned and stewarded by an open community, governed by <https://tg.community>. The full layered model — skills above, cogs as the readable content layer underneath — lives in [`cogs-for-agent-developers`](cogs-for-agent-developers.cog.md). When you are about to write a new cog, decide first whether you also need a skill alongside it (you do whenever the cog should be discoverable from chat by intent rather than by name).

## Step 1 — Pick the cog type

| Type | Purpose | Key Zone-2 fields |
|------|---------|-------------------|
| `info` | Reference documentation, specifications, guides for humans and agents | `contentType: info-doc` |
| `action` (scripted) | Deterministic action with an embedded executable artefact | `contentType: action-doc`, `actionType: scripted`, `x-mx-execute:`, body carries ```` ```bash @embedded:<id> ```` block |
| `action` (sop) | LLM-mediated action; descriptive `usage` prose a skill reads and performs | `contentType: action-doc`, `actionType: sop`, `x-mx-execute:` with descriptive `actions[].usage` |
| `action` (hybrid) | Both an embedded script AND descriptive usage prose | `contentType: action-doc`, `actionType: hybrid`, `x-mx-execute:`, embedded block, descriptive usage |
| `routing` | Agent navigation; maps user intent to other cogs or destinations | `contentType: routing-doc`, `routes:` |
| `certificate-of-genuineness` | Publisher-provenanced credential carrying signed claims | `contentType: certificate-of-genuineness`, `proofOfAuthorship`, `integritySignature` |
| `community-owned-governance-standard` | Cog whose definition is owned and stewarded by an open community as a published governance reference; governance lives at <https://tg.community> | `contentType: cogs`, declared community ownership |

Pick one. The choice drives which optional sections apply; everything else is shared.

## Step 2 — The 5-line opening header

Every cog opens with this exact block, verbatim, before any other frontmatter:

```yaml
---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
```

Five YAML-comment lines. The wording is fixed; the URL is fixed. The pre-write-cog-opening hook (`.claude/hooks/pre-write-cog-opening.sh`) is a two-way gate: it blocks any new `.cog.md` write that doesn't carry these lines, and it blocks any plain `.md` write that does. The header is reserved for `.cog.md` files — if you want it, give the file the `.cog.md` extension. When in doubt, copy from any existing cog.

## Step 3 — Zone 1 frontmatter (document identity)

Top-level keys, universal to any YAML parser:

```yaml
title: "<cogId>"
version: "1.0"
description: <one sentence; ends with a full stop. No more than 160 characters.>

created: 2026-05-03
modified: 2026-05-03

author: Tom Cranstoun
```

Rules:

- `title` matches the cogId (or, for prose-heavy cogs, a human-readable headline).
- `description` is a single sentence used by search, agents, and registry listings.
- `created` is immutable; `modified` updates whenever the body changes.
- `author` is the immutable original creator; `maintainer` (Zone 2) is who handles ongoing edits.

## Step 4 — Zone 2 frontmatter (the `mx:` block)

Everything else lives under `mx:`. Mandatory minimum:

```yaml
mx:
  canonicalUri: https://raw.githubusercontent.com/<owner>/<repo>/<branch>/<relpath>
  status: published
  partOf: <parent>
  contentType: <one of info-doc | action-doc | routing-doc | certificate-of-genuineness | cogs>
```

Recommended for any cog that ships:

```yaml
  maintainer: info@cognovamx.com
  license: proprietary
  x-mx-category: <mx-core | mx-tool | mx-content | …>
  tags: [<lowercase keywords for discovery>]
  audience: [<humans | machines | agents>]
  readingLevel: <beginner | intermediate | advanced | expert>
  runbook: "<one sentence imperative; what an agent should do with this cog>"
```

`canonicalUri` is computed from the file's location by `deriveCanonicalUri()` in [`scripts/cog-field-rules.js`](../cog-field-rules.js). It MUST match — the validator will reject a stale value.

## Step 5 — `cogId`

`cogId` is the cog's unique slug. By convention, it equals the filename with `.cog.md` stripped (`how-to-write-a-cog.cog.md` → `how-to-write-a-cog`). Use kebab-case. The ID must be unique within the cog's `partOf` namespace.

For programmatic ID generation, dispatch to the [`/mx-c-cog-id`](../../.claude/skills/mx-c-cog-id/skill.md) skill.

## Step 6 — The cog-graph fields

Cogs form a graph through four relational fields:

| Field | Meaning |
|-------|---------|
| `partOf` | The parent cog or registry namespace this cog belongs to (e.g. `mx-os`). |
| `buildsOn` | Cogs the reader should already understand. Establishes prerequisite reading. |
| `dependencies` | Hard dependencies as an array of objects. Each entry has `name` (required) plus optional `version`, `reason`, and `kind` (cog \| runtime \| package \| external; defaults to `cog`). The recommended `kind` is `cog`; non-cog kinds are escape hatches when inline declaration is genuinely the right home. |
| `refersTo` | Cogs cited or cross-referenced. Looser than `buildsOn`; doesn't imply prerequisite reading. |

`partOf`, `buildsOn`, and `refersTo` take a string or an array of cogIds. `dependencies` takes an array of objects (see the entry above). Validators check that referenced cogIds exist in the registry; broken references are warnings.

## Step 7 — `cogHeader` (optional)

For cogs that circulate outside their home registry, declare `cogHeader` at top level. It carries the same information as the magic-header HTML comment (`<!-- cog v1 spec=... runtime=... -->`):

```yaml
cogHeader:
  version: v1
  spec: https://mx.allabout.network/drafts/cog-spec.v1.md
  runtime: https://mx.allabout.network/drafts/cog-runtime.md
```

Required for any cog outside a closed system. Skip for purely internal cogs.

## Step 8 — Body — typed blocks

After the closing `---` of the frontmatter, the body holds typed blocks. Most cogs use one or two:

| Block | When to use |
|-------|-------------|
| `prose` | Default. Plain markdown. Always implicit; never declared. |
| `definition` | Field or term definitions. |
| `essence` | Binary content (image, PDF, audio, video) embedded as base64 or referenced as a pointer. |
| `code` | Code samples, with language fences. |
| `html` | Inline HTML when markdown isn't expressive enough. |
| `sop` | Step-by-step procedure for an operator. |
| `action` | Action-cog specific; describes a callable action. |
| `security` | Security or threat-model material. |
| `provenance` | Authorship, signing, derivation chain. |
| `version` | Version-history block (only if needed; prefer git history + CHANGELOG). |
| `embedded-script` | Action-cogs only. A fenced bash block marked `@embedded:<id>` that `mx-exec` extracts and runs when the cog is invoked. See Step 9b. |

Declare non-prose blocks in Zone 2:

```yaml
mx:
  blocks: [prose, definition, code]
```

## Step 9 — Action-cogs only — `x-mx-execute:`

If the cog is an action-cog (`contentType: action-doc`), it carries an `x-mx-execute:` block describing the runtime contract — what runs the cog, what actions it offers, and what each action consumes and produces. Pattern:

```yaml
mx:
  x-mx-execute:
    runtime: runbook
    command: mx exec <cogId>
    policy: |
      One sentence on what this cog is FOR; what an agent should and should
      not assume when running it.
    actions:
      - name: <verb>
        description: <one sentence>
        usage: <imperative; what to do step by step>
        inputs:
          - name: <camelCase>
            type: string
            required: true
            description: <one sentence>
        outputs:
          - name: <camelCase>
            type: string
            description: <one sentence>
```

For the full action-cog walkthrough — describe / create / test / wire — see [`building-action-docs`](building-action-docs.cog.md).

## Step 9b — Action-cogs only — the `@embedded:` script block

`x-mx-execute:` declares **what** the cog does. It does not, on its own, give `mx-exec` anything to run. For an action-cog to be executable via `mx exec <cogId>`, the cog body must also carry a fenced bash block tagged `@embedded:<id>` that the runner extracts and pipes to `bash`.

Without this block, `mx exec <cogId>` exits with `✗ No embedded script found in <cogfile>` even though the YAML declaration is complete. (This is exactly the gap that broke `mx-audit.cog.md` until 2026-05-04.)

### Shape

Place the block after the closing `---` of the frontmatter, before the body's H1:

````markdown
---
…frontmatter…
---

```bash @embedded:<script-id>
#!/bin/bash
# Brief comment block — what this script does, what it expects.
set -euo pipefail

# Parse args, validate inputs, exec the real work.
# Prefer `exec node scripts/<thing>.js "$@"` over reimplementing logic
# already living in scripts/. The cog is a thin wrapper.
```

# <H1 — the cog's human title>

…body prose…
````

### Rules

- **The marker is regex-strict.** `mx-exec` extracts the block by matching the opening and closing fences with `awk`, so the opening fence must be **exactly** four characters of three backticks plus `bash @embedded:<id>` on its own line — no trailing spaces, no language alias other than `bash`, no other content on the fence line. The id must match `[a-zA-Z0-9_-]+`. The full extractor is `awk '/^[BACKTICK][BACKTICK][BACKTICK]bash @embedded:<id>$/,/^[BACKTICK][BACKTICK][BACKTICK]$/' <cogfile>` (substitute three literal backticks for `[BACKTICK][BACKTICK][BACKTICK]`).
- **One script per cog by default.** `mx-exec` runs the first `@embedded:` block it finds. A cog can carry multiple blocks for documentation, but only the first is executable via the bare `mx exec <cogId>` invocation.
- **Keep it thin.** The embedded block is a wrapper — argument parsing, defaults, and a final `exec` into the canonical Node/Python/shell entry point that lives in `scripts/`. Do not duplicate complex logic inside the cog; the cog is a contract, not the implementation.
- **`exec` rather than re-running the wrapper.** When the script needs to dispatch to a sub-mode (for example a `--gates` pass-through), use `exec node …` so signal handling and exit codes flow through cleanly.
- **Help is mandatory.** Implement `-h | --help` so `mx exec <cogId> --help` is a useful first call. The `runbook:` field in the frontmatter and the `--help` text should agree.
- **Hard-fail on missing required input.** Print a one-line message to stderr and exit non-zero. Never invent defaults for required inputs.

### Verifying the block is wired up

Run the runner against the cog and confirm extraction succeeds:

```bash
mx exec <cogId> --help
```

Expected: the script's help text. Any output starting with `✗ No embedded script found` means the block is missing, the marker is malformed, or the fence line has trailing whitespace.

To see the extracted body without running it:

```bash
mx-exec --extract <cogId>
```

## Step 10 — Where to put the file

| Cog type | Default location |
|----------|------------------|
| Action cog (`scripts/cogs/`) | `scripts/cogs/<cogId>.cog.md` |
| Info cog about MX itself | `mx-canon/**/*.cog.md` |
| Personal / contact cog | `mx-canon/mx-maxine-lives/contacts/<who>/<who>.cog.md` |
| Registry-of-registries entry | `mx-canon/mx-reginald-canon/<cogId>.cog.md` |

When in doubt, put a new cog in `scripts/cogs/` and let `mx-reginald` discover it on the next `npm run cog:sync`.

## Verification

Before declaring the cog done:

1. **Pre-write hooks have already enforced** the 5-line opening header. If a write was blocked, the cog wouldn't have landed.
2. **Run `npm run cog:validate`** — required-field presence, enum values, deprecated usage. Must report 0 errors.
3. **Run `node scripts/check-mx-compliance.js`** for the per-file check — `unknown` should be 0; if a new field name appears, the canon dictionary needs updating per [`adding-an-mx-field.cog.md`](../../datalake/knowledge/system/adding-an-mx-field.cog.md).
4. **Run `npm run cog:sync`** to refresh `mx-reginald/index.json`. The new cog should appear with its declared `cogId`, `partOf`, and `category`.
5. **Spot-check the rendered Markdown** — read the file back and confirm the opening header is invisible to the body (it sits inside the YAML frontmatter as comments, so it never renders).
6. **For action-cogs with an `@embedded:` block** — run `mx exec <cogId> --help`. The script's help text must appear; any output starting with `✗ No embedded script found` means the embedded block is missing or its opening fence is malformed (see Step 9b).

## Common mistakes

- **Skipping the opening header.** The hook will block the write; copy the five lines verbatim from any existing cog.
- **`canonicalUri` from a different file.** Stale paths from copy-paste. Run `deriveCanonicalUri()` against the actual target path.
- **`cogId` not matching the filename.** Confuses the registry. Either rename the file or fix the field.
- **Mixing Zone 1 and Zone 2.** `status`, `tags`, `runbook` belong under `mx:`. `title`, `author`, `created` belong at the top level. The validator rejects either kind of misplacement.
- **Adding `x-mx-execute:` to an info-cog.** The block belongs only on action-cogs; an info-cog with an execute block conflates documentation with a runtime contract.
- **Using kebab-case for field names.** All MX field names use camelCase per NDR-02. The validator rejects kebab-case.
- **Inventing field names.** If the field isn't in `mx-canon/ssot/fields-data*.yaml`, the per-file scanner flags it as `unknown`. Either use the canonical name or add the field to the dictionary first.
- **Action-cog with `x-mx-execute:` but no `@embedded:` block.** The YAML declaration alone is not executable. `mx exec <cogId>` will exit with `✗ No embedded script found` because the runner has no body to extract. Add the fenced bash block per Step 9b, or remove the `x-mx-execute:` claim if the cog is purely declarative.

## Related

- [`what-is-a-cog`](what-is-a-cog.cog.md) — the conceptual primer; what cogs are and why they exist.
- [`building-action-docs`](building-action-docs.cog.md) — the action-cog drill-down (describe, create, test, wire).
- [`/mx-c-cog-id`](../../.claude/skills/mx-c-cog-id/skill.md) — programmatic `cogId` generation.
- [`mx-shared-gathering/draft-cogs.md`](../../mx-shared-gathering/draft-cogs.md) — the open-standard specification of the cog file format. Normative; defer to it on any structural question this cog doesn't answer.
- [`mx-canon/ssot/fields-data.yaml`](../../mx-canon/ssot/fields-data.yaml) — the field dictionary; the source of truth for every legal Zone-2 field name.
- [`datalake/knowledge/system/adding-an-mx-field.cog.md`](../../datalake/knowledge/system/adding-an-mx-field.cog.md) — runbook for adding a new field if your cog needs one not yet in the dictionary.
- [`/cog-author`](../../.claude/skills/cog-author/skill.md) — the slim entry-point skill that routes here.
