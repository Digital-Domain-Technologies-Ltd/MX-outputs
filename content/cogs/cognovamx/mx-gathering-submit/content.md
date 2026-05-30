---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "mx-gathering-submit"
version: "2.1"
description: "SOP for submitting an MX draft to The Gathering: format-check, mirror to a per-draft repo, tag releases that sync to Stream, track state to ratification."

created: 2026-05-03
modified: 2026-05-12

author: Tom Cranstoun

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/mx-gathering-submit.cog.md
  maintainer: info@cognovamx.com
  license: proprietary
  status: published
  x-mx-riskLevel: medium

  x-mx-category: mx-core
  partOf: mx-os
  refersTo: [mx-onboarding, mx-add-field, how-to-write-a-cog]
  buildsOn: [mx-add-field]
  tags: [gathering, submission, ratification, review, round-trip, stream]

  audience: [humans, machines]
  readingLevel: intermediate

  contentType: action-doc
  actionType: hybrid
  runbook: "mx exec mx-gathering-submit, or `node scripts/mx/mx-gathering-submit.js <subcommand>` for the mechanical actions. ratify and incorporate stay agent-walked."
  x-mx-execute:
    runtime: runbook
    command: node scripts/mx/mx-gathering-submit.js status
    actions:
      - name: status
        description: Print the registry state — counts by state and per-row details for every submission.
        usage: |
          Run `node scripts/mx/mx-gathering-submit.js status`.
          Reads mx-canon/mx-the-gathering/submissions-registry.yaml and prints
          a state-grouped summary plus a per-row detail block.
        inputs: []
        outputs:
          - name: state-summary
            type: stdout
            description: Counts by state + per-row details (docname, canonical, sourceRepo, draftId, releases, feedback count).

      - name: prepare
        description: Format-check the local draft and stage/refresh the registry row for it.
        usage: |
          Run `node scripts/mx/mx-gathering-submit.js prepare <docname>`.
          Looks up the row in the registry, confirms the draft body exists at
          mx-shared-gathering/<canonicalDocname>.md, and refreshes draftCommit
          (from the submodule) and hubCommit (from the hub). updatedAt is
          set to today. State is not changed — prepare is idempotent and
          safe to re-run.
        inputs:
          - name: docname
            type: string
            description: The author-prefixed docname recorded in the registry (e.g. draft-cranstoun-mx-cogs).
        outputs:
          - name: registry-row
            type: file-mutation
            description: Updated draftCommit, hubCommit, updatedAt for the row.

      - name: file
        description: Record the first GitHub release once Actions has synced it to Stream. State drafted | repo-created → filed.
        usage: |
          Run `node scripts/mx/mx-gathering-submit.js file <docname> <repo-url> <release-tag> [--draft-id <id>]`.

          Preconditions (the human does these before calling `file`):
          1. Generate a per-draft repo from TG-Community/stream-draft-template.
          2. Rename draft-todo-author-stream.md to <canonicalDocname>.md.
          3. Copy the draft body from mx-shared-gathering/<canonicalDocname>.md.
          4. Push to the per-draft repo.
          5. Create a GitHub release with tag <canonicalDocname>-NN (zero-padded).
          6. Wait for the template's GitHub Actions to publish the editor copy
             and POST to https://stream.tg.community/api/v1/drafts/sync.

          What `file` does:
          - Validates the release tag matches the shape <canonicalDocname>-NN.
          - Confirms current state allows filing (drafted or repo-created).
          - If --draft-id is not supplied, tries GET https://stream.tg.community/api/v1/drafts/canonical/<canonicalDocname> to fetch the draftId Stream assigned. If the endpoint refuses, returns a helpful message and asks for the value on the command line.
          - Writes sourceRepo, draftId, releases[0] (tag + publishedAt + syncedToStreamAt). State → filed.
        inputs:
          - name: docname
            type: string
          - name: repo-url
            type: string
            description: HTTPS or SSH URL of the per-draft GitHub repo.
          - name: release-tag
            type: string
            description: <canonicalDocname>-NN (two-digit, zero-padded).
          - name: --draft-id
            type: string
            description: Optional. The Stream-assigned draftId. If omitted, the script tries the Stream API.
        outputs:
          - name: registry-row
            type: file-mutation
            description: sourceRepo, draftId, releases[0], state=filed, updatedAt today.

      - name: revise
        description: Record a follow-up release after feedback was incorporated. State filed | revised → revised.
        usage: |
          Run `node scripts/mx/mx-gathering-submit.js revise <docname> <release-tag>`.

          Use after the author has incorporated feedback (via the agent-walked
          incorporate action below), copied the new body into the per-draft
          repo, and tagged the next release. The script validates the tag
          shape, refuses duplicate tags, appends the entry to releases[], and
          flips the state to revised.
        inputs:
          - name: docname
            type: string
          - name: release-tag
            type: string
        outputs:
          - name: registry-row
            type: file-mutation
            description: releases[] appended, state=revised, updatedAt today.

      - name: feedback
        description: Log a community feedback note against a submission with disposition=pending.
        usage: |
          Run `node scripts/mx/mx-gathering-submit.js feedback <docname> --source <stream-user> --note "<text>"`.

          Appends a feedback entry with today's date, source, note, and
          disposition=pending. commitHash stays null until incorporate marks
          the feedback accepted and commits the change.
        inputs:
          - name: docname
            type: string
          - name: --source
            type: string
            description: Stream username or identifier for the reviewer.
          - name: --note
            type: string
            description: The feedback text.
        outputs:
          - name: registry-row
            type: file-mutation
            description: feedback[] appended, updatedAt today.

      - name: incorporate
        description: Agent-walked SOP — fold community feedback into the source draft in mx-shared-gathering/.
        usage: |
          NO bash command. This action is intentionally agent-walked because
          it edits draft prose with editorial judgement.

          The agent does:
          1. Read the submission row's feedback[] entries with disposition=pending.
          2. For each: ask the author whether to accept, reject, or defer.
          3. For accepted feedback: edit mx-shared-gathering/<canonicalDocname>.md
             to address the comment. The draft must stay kramdown-rfc (no MX
             fields, no mx: block — validateGatheringDraft() enforces this).
          4. Commit the edit; record the commit hash on the feedback entry.
          5. Mark the disposition (accepted | rejected | deferred).
          6. Bump versionSubmitted on the registry row.

          After incorporate finishes, the author copies the new body into the
          per-draft repo, tags the next release, waits for Actions to sync,
          and calls revise (above) to record the new release tag.

          incorporate does NOT auto-flip state to revised. State only moves
          when the next release is filed.
        inputs:
          - name: docname
            type: string
        outputs:
          - name: draft-edit
            type: file-mutation
            description: mx-shared-gathering/<canonicalDocname>.md prose updated.
          - name: registry-row
            type: file-mutation
            description: feedback[].disposition and feedback[].commitHash set per entry.

      - name: ratify
        description: Agent-walked SOP — mark The Gathering's consensus on a submission. Irreversible-feeling, requires explicit human confirmation.
        usage: |
          NO bash command. This action is intentionally agent-walked because
          ratification is irreversible-feeling and requires explicit consent.

          The agent does:
          1. Ask the author: "The Gathering has ratified this — confirm?"
          2. Refuse to proceed without an explicit yes.
          3. Set ratifiedAt = today and state = ratified on the registry row.
          4. Set consensus: true on mx-shared-gathering/<canonicalDocname>.md's
             kramdown-rfc frontmatter.

          A ratified draft can re-enter the cycle: any edit to the draft text
          re-opens its consensus state. The cog refuses to silently flip
          consensus: true back to false; it requires the author to acknowledge
          that the draft is being re-opened, which means tagging a new
          release and a fresh sync to Stream.
        inputs:
          - name: docname
            type: string
        outputs:
          - name: registry-row
            type: file-mutation
            description: ratifiedAt set, state=ratified.
          - name: draft-frontmatter
            type: file-mutation
            description: consensus=true on the kramdown-rfc draft.

---

# mx-gathering-submit

The round-trip flow for taking an MX draft note to The Gathering and tracking it until ratification.

## Default entry point

`mx exec mx-gathering-submit` runs the embedded `status` block — print the current registry state. The other mechanical actions (prepare, file, revise, feedback) take arguments and are invoked directly through the script. The two agent-walked actions (incorporate, ratify) have no script entry point at all — the agent follows the `usage` prose under `x-mx-execute.actions[]` above.

```bash @embedded:status
#!/usr/bin/env bash
# Default action when this cog is invoked without a subcommand: print the registry state.
node "$(git rev-parse --show-toplevel)/scripts/mx/mx-gathering-submit.js" status
```

## Overview

The Gathering is the community body that ratifies MX drafts. Submissions reach Stream — the community's review surface — through a structured GitHub flow, not through forum posts. For each draft, the author generates a per-draft repository from [`TG-Community/stream-draft-template`](https://github.com/TG-Community/stream-draft-template), mirrors the draft markdown into it, and tags a GitHub release. The template's GitHub Actions then publish the editor's copy and sync the release to the Stream backend via `POST /api/v1/drafts/sync`, which stores the draft as a versioned record with its own `draftId`, review state, and consensus history.

The mechanical state mutations live in [`scripts/mx/mx-gathering-submit.js`](../mx/mx-gathering-submit.js). The two judgement-driven actions — `incorporate` (folding feedback into draft prose) and `ratify` (marking consensus) — stay agent-walked because they require editorial judgement that should not be automated away.

## When to use

- A draft note is ready for community review (use `prepare`, then `file` once the release is tagged and synced).
- A revised release has been published after incorporating feedback (use `revise`).
- Community feedback has landed on a previous submission (use `feedback`, then `incorporate`).
- The Gathering has confirmed consensus on a submission (use `ratify`).
- You need to know which drafts are at which stage of the cycle (use `status`).

## When NOT to use

- The draft has not yet been written. Use `/cog-author` to draft it, or write it by hand following `mx-shared-gathering/draft-cogs.md` as the structural reference.
- The draft is for a CogNovaMX vendor extension (`x-mx-...`). Vendor extensions don't go to The Gathering; they live in `cognovamx-fields.yaml` and are governed inside the company.
- A field needs adding to the canon. That's `/mx-add-field`. The Gathering eventually reviews canon changes through the relevant draft note, but the canon edit itself is a separate flow.

## How Stream actually receives a submission

Authoritative reference: [`tg-community/stream-draft-template/CONTRIBUTING.md`](../../tg-community/stream-draft-template/CONTRIBUTING.md). The template repo's `Workflow` section spells out the protocol; the backend's `POST /api/v1/drafts/sync` schema in [`tg-community/stream-back-end/src/modules/drafts/drafts.schemas.js`](../../tg-community/stream-back-end/src/modules/drafts/drafts.schemas.js) is the contract that GitHub Actions honours.

1. **Generate a per-draft repository** from `TG-Community/stream-draft-template`. One repository per draft. The owner is the author's GitHub account or the author's organisation.
2. **Rename `draft-todo-author-stream.md`** to the canonical docname (must start with `draft-`, e.g. `draft-cogs.md`).
3. **Copy the draft body** from `mx-shared-gathering/draft-<topic>.md` into the renamed file. The kramdown-rfc frontmatter and prose come across verbatim; no MX fields, no `mx:` block.
4. **Optional: collaborate via pull requests** inside that repository.
5. **Create a GitHub release** with a tag in the form `<canonicalDocname>-<NN>` where `NN` is the two-digit version (e.g. `draft-cogs-00`, then `-01`, `-02` for revisions). The template's GitHub Actions watches for releases.
6. **Actions sync the release to Stream** by POSTing `{draftId, githubActorLogin, sourceMarkdown, status, canonicalDocname, releaseTag, releaseNumber, publishedAt, sourceRepository, formatUrls}` to `/api/v1/drafts/sync`. The `draftId` is stable across releases; Stream stores each release as a version inside that draft record.
7. **Stream review opens.** Reviewers comment, consensus state advances, and eventually the draft is marked ratified inside Stream.

The cog records the metadata the author needs to remember between sessions — repo URL, release tags, the Stream-assigned `draftId` — and the script walks each transition deterministically. It never generates repos, never tags releases, never POSTs to Stream. Those acts stay with the author so that authorship attribution on GitHub and Stream remains correct.

## The submissions registry

Single source of truth for round-trip state at [`mx-canon/mx-the-gathering/submissions-registry.yaml`](../../mx-canon/mx-the-gathering/submissions-registry.yaml). The script is the only sanctioned editor; hand-edits are reserved for correcting machine-generated state. Shape:

```yaml
submissions:
  - docname: draft-cranstoun-mx-cogs               # author-prefixed identifier inside this registry
    canonicalDocname: draft-cogs                   # filename used inside the per-draft repo
    versionSubmitted: "1.0"                        # source version in mx-shared-gathering/
    submittedAt: 2026-05-07
    updatedAt: 2026-05-12
    sourceRepo: https://github.com/<owner>/<repo>  # per-draft repo generated from the template
    draftId: <stream-backend-id>                   # ID Stream returned on first sync
    releases:                                      # ordered list of release tags that Actions synced
      - tag: draft-cogs-00
        publishedAt: 2026-05-13T09:00:00.000Z
        syncedToStreamAt: 2026-05-13T09:00:00.000Z
    state: filed                                   # drafted | repo-created | filed | revised | ratified | superseded
    draftCommit: b75cbc4
    hubCommit: cc969141
    feedback:
      - date: 2026-05-14
        source: <stream-username>
        note: "Question on §7a.1 ..."
        disposition: pending                       # pending | accepted | rejected | deferred
        commitHash: null                           # filled when accepted + incorporated
    ratifiedAt: null
```

The shape is intentionally narrow. It records what the author can't easily recover from GitHub or Stream alone in one glance: which per-draft repo backs which docname, which release tag is currently authoritative, where the feedback is in its disposition cycle. Everything else (review comments, consensus state, version history beyond tag names) lives on Stream and is the canonical source.

## State machine

```
drafted
  -> repo-created  (per-draft repo generated from the template, draft body mirrored in)
  -> filed         (first release tagged; Actions sync confirmed; draftId + releases[0] recorded)
  -> revised       (subsequent release published after feedback; releases[] extended)
  -> ratified      (Stream confirmed consensus)
  -> superseded    (rolled into a different draft)
```

The script enforces legal transitions: `file` refuses from any state other than `drafted` or `repo-created`; `revise` refuses from any state other than `filed` or `revised`.

A `ratified` draft can re-enter the cycle: any edit to the draft text re-opens its consensus state. The cog refuses to silently flip `consensus: true` back to `false`; it requires the author to acknowledge that the draft is being re-opened, which means tagging a new release with a higher `NN` and a fresh sync to Stream.

## Constraints

- **Per-draft repo + tagged release is the submission surface.** The script records the repo URL, release tags, and the Stream-assigned `draftId`, but it does not generate the repo, copy the draft body, or tag the release. The author does those acts so that GitHub and Stream attribute authorship correctly.
- **Tag format is enforced.** Release tags must match `<canonicalDocname>-<NN>` (zero-padded two digits). The template's Actions reject other shapes, and the script refuses to record them.
- **Ratification needs explicit confirmation.** No `ratify` action proceeds without the author saying "yes, The Gathering has ratified this". Same protection as the published-manuscripts read-only rule: irreversible-feeling state changes need explicit consent. ratify is intentionally agent-walked rather than scripted.
- **Drafts stay kramdown-rfc.** The agent edits a draft only in `incorporate` (folding feedback into `mx-shared-gathering/`). Even there, no `mx:` block, no MX fields — the validator's `GATHERING_FORBIDDEN_KEYS` enforces this.
- **`incorporate` does not auto-release.** Folding feedback updates the source draft in `mx-shared-gathering/` and bumps `versionSubmitted`. The author still copies the new body into the per-draft repo and tags the next release; the state only flips to `revised` after `revise` records the tag.

## Verification

After running any action:

1. `submissions-registry.yaml` parses cleanly (`yamllint` or any YAML parser).
2. Every submission in the registry corresponds to a real draft file in `mx-shared-gathering/` whose name matches `canonicalDocname`.
3. Every entry in `releases[]` follows the `<canonicalDocname>-<NN>` tag shape.
4. Every `incorporated` feedback entry has a real commit hash on `main`.
5. `state: ratified` only on submissions whose draft carries `consensus: true` in its kramdown-rfc frontmatter.

## Related

- [`mx-onboarding`](mx-onboarding.cog.md) — the newcomer reading-order navigator that points at The Gathering as the ratification body.
- [`mx-add-field`](mx-add-field.cog.md) — adds a field to the CogNovaMX-side canon; the gathering-side review for the same change lands here once the relevant draft is updated and re-submitted.
- [`how-to-write-a-cog`](how-to-write-a-cog.cog.md) — the general cog-authoring guide; gathering drafts are NOT cogs but the structural-discipline lessons transfer.
- [`mx-shared-gathering/`](../../mx-shared-gathering/) — the draft set itself.
- [`tg-community/stream-draft-template/`](../../tg-community/stream-draft-template/) — the GitHub template repo. Read its `CONTRIBUTING.md` for the canonical submission protocol.
- [`tg-community/stream-back-end/src/modules/drafts/`](../../tg-community/stream-back-end/src/modules/drafts/) — the backend API and schemas that Stream sync targets.
- [`scripts/lib/frontmatter-validator.js`](../../scripts/lib/frontmatter-validator.js) — `validateGatheringDraft()` is the format-check used by `prepare`.
- [`scripts/mx/mx-gathering-submit.js`](../mx/mx-gathering-submit.js) — the mechanical-mutation script invoked by status, prepare, file, revise, and feedback.
- The Gathering on the web: <https://tg.community>
- Stream (community workspace): <https://stream.tg.community>
