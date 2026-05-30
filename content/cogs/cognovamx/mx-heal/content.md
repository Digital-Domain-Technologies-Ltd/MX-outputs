---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "mx-heal"
version: "1.0.0"
description: "Self-healing infiller for the MX repository. Composes sub-modes (orphans, lineage, indexes, fields, architecture) that propose targeted fixes for the most common drift classes; default is dry-run and --apply writes the proposal."

created: 2026-05-28
modified: 2026-05-28

author: Tom Cranstoun

mx:
  contentType: action-doc
  purpose: "Document the npm run mx:heal entry-point so an agent or operator can compose the right sub-flags for the drift class they want to fix, without re-reading the underlying mx-graph-builder source."
  runbook: "Reach for this cog when a pre-push gate prints `Run: npm run mx:heal -- --<flag>`, or when bulk drift has accumulated and the operator wants a known-clean starting point. Read the matching action in x-mx-execute.actions[] for the sub-mode you need, run dry-run first, eyeball the proposal, then re-run with --apply. Every mode is dry-run by default; --apply is the write gate."
  stability: stable
  maintainer: tom.cranstoun@gmail.com
  license: proprietary
  status: published
  x-mx-riskLevel: low
  actionType: sop
  x-mx-contextProvides:
    - "The exhaustive list of mx:heal sub-flags and what each one fixes"
    - "The dry-run-by-default contract and the --apply gate"
    - "The pre-push hook remediation hint each gate prints when it fails"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/mx-heal.cog.md

  x-mx-category: mx-tools
  partOf: mx-os
  refersTo: [cog-registry, registry-sync, mx-audit]
  buildsOn: [what-is-a-cog, building-action-docs]
  tags: [heal, drift, conformance, gates, orphans, lineage, indexes, fields, dry-run]

  audience: agents
  readingLevel: intermediate

  x-mx-execute:
    runtime: runbook
    command: npm run mx:heal
    actions:
      - name: help
        description: Print the full help text for mx:heal
        usage: |
          Run `npm run mx:heal -- --help` to print the complete option list including
          query options not used in heal mode (--deps, --lineage as a query, --stats).
          Heal mode is entered by composing `--heal` with one or more of the sub-flags
          listed below.

          Captured output (treat this section as the authoritative help text reference
          when the command itself is not at hand):

          ```
          MX Graph Builder — Local metadata graph for MX OS

          Usage:
            node mx-graph-builder.js [options]

          Build:
            --rebuild           Scan filesystem and regenerate graph.json
            --dir <path>        Root directory to scan (default: cwd)
            --output <path>     Output path (default: ~/.mx/graph.json)
            --validate          Include validation report
            --fix-orphans       Generate .mx.yaml.md for all orphan directories

          Query:
            --deps <cogname>    Show dependency tree for a cog
            --lineage <path>    Trace derivation chain for a path
            --stats             Summary statistics
            --orphans           List directories without .mx.yaml.md
            --stale <days>      Nodes not modified in N days (default: 90)

          Heal (self-healing infiller):
            --heal              Enter heal mode. Compose with sub-flags below.
            --orphans           Propose .mx.yaml.md skeletons for orphan directories
            --lineage           Scan recent renames; propose updates to refersTo /
                                buildsOn / inherits / partOf / replaces references
            --indexes           Diff generated indexes (registry, routes, definitions,
                                aspell) against committed state
            --fields            Run fields:gate; propose conformance auto-fixes
            --architecture      Check the audit architecture cog + PRD against the
                                code (inventory, paths, cache versions). Check-only.
            --ai                Opt-in LLM gap-fill for orphan skeletons (requires
                                ANTHROPIC_API_KEY). Never invoked by hooks.
            --all               Run --orphans, --lineage, --indexes, --fields, --architecture
            --apply             Write proposed changes (default is dry-run)
            --json              Machine-readable output for hooks
          ```

      - name: heal-orphans
        description: Find directories with no .mx.yaml.md and propose skeletons for each one
        usage: |
          A directory becomes an orphan when content lands inside it without a sibling
          `.mx.yaml.md` file declaring what the directory contains. The orphan-heal mode
          walks the repository, lists every orphan directory, and proposes a skeleton
          `.mx.yaml.md` for each one. The proposal carries the minimum fields the
          mx-validator now requires: purpose, audience, stability, runbook,
          x-mx-contextProvides.

          Dry-run by default. Add `--apply` to write the skeletons:

          ```
          npm run mx:heal -- --orphans            # propose, do not write
          npm run mx:heal -- --orphans --apply    # write the skeletons
          ```

          The skeletons land with placeholder content the operator should review and
          edit before the next commit. The `--ai` flag, when paired with `--orphans`,
          opts into an LLM gap-fill pass that drafts more specific values for the
          placeholders; this requires `ANTHROPIC_API_KEY` in the environment and is
          never invoked from a git hook automatically.

          Pre-push Gate 7 prints `Run: npm run mx:heal -- --orphans` when an orphan
          directory is found in the push set.

      - name: heal-lineage
        description: Scan recent renames and propose updates to lineage fields that still point at the old paths
        usage: |
          When a file moves, references to it in other cogs' `refersTo`, `buildsOn`,
          `inherits`, `partOf`, and `replaces` fields keep pointing at the old path.
          Lineage-heal mode detects the rename via the git log, walks every cog that
          referenced the old path, and proposes updated references.

          ```
          npm run mx:heal -- --lineage            # propose, do not write
          npm run mx:heal -- --lineage --apply    # rewrite the references
          ```

          The proposal is per-reference, not per-file, so a single rename that affected
          twelve cogs produces twelve discrete proposals the operator can accept en
          bloc with `--apply` or selectively by editing the diff. Run the lineage heal
          after any `git mv` that the operator forgot to follow up on, and after any
          bulk path migration.

      - name: heal-indexes
        description: Regenerate the four generated indexes and diff against the committed state
        usage: |
          Four files in the repository are auto-generated from source: the routing
          registry, the mx-reginald cog index, the aspell project wordlist, and the
          MX definitions index. Each has its own regen command, and the
          `tests/test-indexes-fresh.js` gate in `npm test` catches stale indexes by
          regenerating, diffing, and restoring.

          `--indexes` runs all four regen commands in one pass and shows what would
          change:

          ```
          npm run mx:heal -- --indexes            # diff stale indexes
          npm run mx:heal -- --indexes --apply    # regenerate all four in place
          ```

          Pre-push Gate 8 prints `Run: npm run mx:heal -- --indexes --apply` when an
          index source has changed in the push set without the matching regen.

      - name: heal-fields
        description: Run fields:gate and propose conformance auto-fixes for mechanical violations
        usage: |
          `npm run fields:gate` checks every cog and frontmatter-bearing markdown file
          against the MX field dictionary at `mx-canon/ssot/fields-data*.yaml`. Two
          categories of violation are mechanically fixable: deprecated field names
          (the dictionary names the rename target) and naming-convention violations
          (kebab-case where the canon wants camelCase, etc.). The fields-heal mode
          runs the gate and proposes an auto-fix for every mechanically fixable hit.

          ```
          npm run mx:heal -- --fields             # propose, do not write
          npm run mx:heal -- --fields --apply     # apply across the hub
          ```

          The fixer respects a path skip-list (`.claude/**`, `content/cogs/**`,
          `test/fixtures/**`) and refuses to rewrite values where a sibling key
          already exists with the target name. Unknown fields and invalid enum values
          are not auto-fixable; they need judgement (extend the dictionary, rename,
          or remove). The fixer prints them for the operator to address manually.

          Pre-push Gate 9 prints `Run: npm run mx:heal -- --fields` when fields:gate
          fails. Cross-reference the field-extension runbook at
          `datalake/knowledge/system/adding-an-mx-field.cog.md` when the right fix is
          extending the dictionary rather than mass-renaming.

      - name: heal-all
        description: Run every heal sub-mode in one pass
        usage: |
          The `--all` shorthand runs `--orphans`, `--lineage`, `--indexes`, and
          `--fields` together. Use it after a bulk migration or at the start of a
          long session to clear accumulated drift in one pass.

          ```
          npm run mx:heal -- --all                # dry-run every heal mode
          npm run mx:heal -- --all --apply        # write every proposal
          ```

          `--all` does not include `--ai`. Opt into LLM gap-fill explicitly when the
          orphan skeletons need fleshing out beyond the deterministic placeholder
          set.

      - name: dry-run-contract
        description: How the dry-run / apply contract works
        usage: |
          Every heal mode is dry-run by default. The output describes the proposed
          changes file-by-file but writes nothing. Add `--apply` to write the
          proposal. The two-stage contract matches the cog-tools convention and gives
          the operator one read-through opportunity between proposal and write.

          When called from a git hook the `--json` flag emits machine-readable output
          instead of the human-readable diff. The hook then decides whether to fail
          the push or print a hint. Pre-push gates use this path; `--apply` is never
          invoked automatically from a hook.

      - name: remediation-hints
        description: What pre-push gates tell the operator to run
        usage: |
          The pre-push hook bundles a set of gates, each of which prints a specific
          `npm run mx:heal -- <flag>` remediation hint when it fails. Cross-reference
          for fast triage:

          | Gate | Failure | Remediation |
          |------|---------|-------------|
          | 7    | Orphan directory in the push set | `npm run mx:heal -- --orphans` |
          | 8    | Generated index stale relative to its source | `npm run mx:heal -- --indexes --apply` |
          | 9    | `fields:gate` errors / mechanically fixable | `npm run mx:heal -- --fields` |
          | 10   | mx-validator missing required fields on a changed file | Fix manually (the validator does not auto-fix; check the SKIP_PATH_FRAGMENTS list in scripts/mx-validator.cjs if the file should be exempt) |

          When the same push triggers more than one gate, run `--all` first to clear
          the mechanical drift, then re-attempt the push and address whatever
          residual the gates flag.

  x-mx-readBy:
    - operator: any agent or human running `npm run mx:heal`
    - reader: any reader trying to recover what each heal sub-mode does without reading the underlying mx-graph-builder source
---

# mx:heal — Self-healing infiller for the MX repository

`mx:heal` is the operator-facing entry point for the four most common drift classes the MX repository accumulates: orphan directories without `.mx.yaml.md` files, lineage fields pointing at moved paths, generated indexes that have drifted from their sources, and field-dictionary conformance violations the gates catch.

The underlying script is [`scripts/mx/mx-graph-builder.js`](../mx/mx-graph-builder.js), invoked through the [`mx:heal` npm script](../../package.json) so the operator never types the full path. Every heal mode is dry-run by default and writes only when `--apply` is added.

The `x-mx-execute.actions[]` block above carries the canonical SOP for each sub-mode. Read the action that matches the drift class you have, run the dry-run first, eyeball the proposal, then run again with `--apply`.

## When to reach for `mx:heal`

- After a `git mv` that renamed a file referenced from other cogs (`--lineage`)
- After editing a source file that feeds one of the four auto-generated indexes (`--indexes`)
- After a bulk migration that wrote files into new directories without `.mx.yaml.md` siblings (`--orphans`)
- After the field dictionary changed and the corpus drifted away (`--fields`)
- Before opening a session where the operator wants a known-clean starting point (`--all`)

## What `mx:heal` does NOT do

- It does not invent fields the validator requires; mx-validator's required-field set is policy and `mx:heal` only addresses drift, not policy gaps.
- It does not write to read-only submodules (`tg-community/*`).
- It does not invoke the LLM gap-fill (`--ai`) unless explicitly requested; git hooks never call it.
- It does not skip the pre-commit / pre-push hooks; if `--apply` writes changes, the hooks still run on the resulting commit.

## Related

- [`cog-registry.cog.md`](cog-registry.cog.md) — cog-tools and the `npm run cog:sync` regen that `--indexes` calls
- [`registry-sync.cog.md`](registry-sync.cog.md) — the `npm run route:sync` regen that `--indexes` calls
- [`mx-audit.cog.md`](mx-audit.cog.md) — audit pipeline, which has its own gate cluster distinct from `mx:heal`
- [`datalake/knowledge/system/adding-an-mx-field.cog.md`](../../datalake/knowledge/system/adding-an-mx-field.cog.md) — when the right fix is dictionary extension, not field rename
