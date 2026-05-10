---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "mx-gathering-submit"
version: "1.0"
description: SOP for submitting an MX draft note to The Gathering for review and tracking the round-trip until ratification. Format-checks the draft, packages it for Stream, files the submission, tracks the review state in a per-draft registry, folds incorporated community feedback back into the draft.

created: 2026-05-03
modified: 2026-05-05

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
  contentType: info-doc
  runbook: "Reference SOP. The chat-mediated workflow lives in the /mx-gathering-submit skill."

---

# mx-gathering-submit

The round-trip flow for taking an MX draft note to The Gathering and tracking it until ratification.

## Overview

The Gathering is the community body that ratifies MX drafts. Submissions go via [Stream](https://stream.tg.community) — the community's review surface. Today the cycle (submit → review → fold-feedback → submit-again → ratify) is informal: Tom remembers, Tom files, Tom notes feedback, Tom incorporates. This cog turns the cycle into an explicit five-action SOP with a per-draft registry that survives the conversation and the calendar.

## When to use

- A draft note is ready for community review (use `prepare`, then `file`).
- Community feedback has landed on a previous submission (use `feedback`, then `incorporate`).
- The Gathering has confirmed consensus on a submission (use `ratify`).
- You need to know which drafts are at which stage of the cycle (use `status`).

## When NOT to use

- The draft has not yet been written. Use `/cog-author` to draft it, or write it by hand following `mx-shared-gathering/draft-cogs.md` as the structural reference.
- The draft is for a CogNovaMX vendor extension (`x-mx-...`). Vendor extensions don't go to The Gathering; they live in `cognovamx-fields.yaml` and are governed inside the company.
- A field needs adding to the canon. That's `/mx-add-field`. The Gathering eventually reviews canon changes through the relevant draft note, but the canon edit itself is a separate flow.

## The submissions registry

Single source of truth for round-trip state at [`mx-canon/mx-the-gathering/submissions-registry.yaml`](../../mx-canon/mx-the-gathering/submissions-registry.yaml). Created by the cog on first use. Shape:

```yaml
submissions:
  - docname: draft-cranstoun-mx-core-metadata
    versionSubmitted: "1.0"
    submittedAt: 2026-05-03
    updatedAt: 2026-05-03
    streamUrl: https://stream.tg.community/<thread-id>
    packagePath: mx-outputs/submissions/draft-cranstoun-mx-core-metadata-2026-05-03.md
    state: in-review            # drafted | in-review | feedback-incorporated | ratified | superseded
    feedback:
      - date: 2026-05-04
        source: <stream-username>
        note: "Question on §7a.1 ..."
        disposition: pending     # pending | accepted | rejected | deferred
        commitHash: null         # filled when accepted + incorporated
    ratifiedAt: null
    ratificationThreadUrl: null
```

## State machine

```
drafted -> in-review -> feedback-incorporated -> in-review (next cycle) -> ratified
                                              \-> superseded (if rolled into a different draft)
```

A `ratified` draft can re-enter the cycle: any edit to the draft text re-opens its consensus state. The cog refuses to silently flip `consensus: true` back to `false`; it requires the author to acknowledge that the draft is being re-opened.

## Constraints

- **Stream is the submission surface.** The cog cannot file to Stream programmatically — the human files the submission on the platform and provides the thread URL back to the cog. Then the cog records it.
- **Ratification needs explicit confirmation.** No `ratify` action proceeds without the author saying "yes, The Gathering has ratified this". Same protection as the published-manuscripts read-only rule: irreversible-feeling state changes need explicit consent.
- **Drafts stay IETF-style.** The cog edits a draft only in `incorporate` (folding feedback). Even there, no `mx:` block, no MX fields — the validator's `GATHERING_FORBIDDEN_KEYS` enforces this.

## Verification

After running any action:

1. `submissions-registry.yaml` parses cleanly (`yamllint` or any YAML parser).
2. Every submission in the registry corresponds to a real draft file in `mx-shared-gathering/`.
3. Every `incorporated` feedback entry has a real commit hash on `main`.
4. `ratified: true` only on submissions whose draft carries `consensus: true`.

## Related

- [`mx-onboarding`](mx-onboarding.cog.md) — the newcomer reading-order navigator that points at The Gathering as the ratification body.
- [`mx-add-field`](mx-add-field.cog.md) — adds a field to the CogNovaMX-side canon; the gathering-side review for the same change lands here once the relevant draft is updated and re-submitted.
- [`how-to-write-a-cog`](how-to-write-a-cog.cog.md) — the general cog-authoring guide; gathering drafts are NOT cogs but the structural-discipline lessons transfer.
- [`mx-shared-gathering/`](../../mx-shared-gathering/) — the draft set itself.
- [`scripts/lib/frontmatter-validator.js`](../../scripts/lib/frontmatter-validator.js) — `validateGatheringDraft()` is the format-check used by `prepare`.
- The Gathering on Stream: <https://stream.tg.community>
