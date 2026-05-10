---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "review-fix-design-rationale-2026-05-07"
version: "1.0"
description: "Design rationale for the seven decisions taken in the 2026-05-07 review-fix round on the mx-shared-gathering drafts. Records what was chosen, what was rejected, and why."

created: 2026-05-07
modified: 2026-05-07

originator: Tom Cranstoun
author: Tom Cranstoun

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-canon/mx-the-gathering/architecture-decisions/2026-05-07-review-fix-design-rationale.cog.md
  stewardship:
    steward: Tom Cranstoun
    accountableContact: info@cognovamx.com
    legalEntity: Digital Domain Technologies Ltd
    brand: CogNovaMX
  license: MIT
  status: active

  x-mx-category: architecture
  partOf: mx-the-gathering
  buildsOn: [adr-01-block-architecture, adr-02-namespace-policy]
  refersTo:
    - draft-cogs
    - draft-core-metadata
    - draft-extensions
    - draft-contract-fingerprinting
    - draft-carrier-formats
    - draft-provenance
    - draft-temporal-stance
  tags: [rationale, decisions, review-fix, gathering, design]

  audience: [humans, machines]
  readingLevel: intermediate
  contentType: info-doc
  purpose:
    kind: record
    subPurpose: design rationale
  runbook: "Read alongside the seven cover-note packages in `mx-outputs/submissions/` and the submissions registry. Each D-section explains why a particular decision was taken in the 2026-05-07 review round, what alternatives were rejected, and what the migration cost looks like. Update the file in-place if a decision is later reversed or superseded."

  x-mx-roundContext:
    submodulePin: b75cbc4
    hubPin: cc969141
    affectedDrafts:
      - draft-cogs
      - draft-core-metadata
      - draft-extensions
      - draft-contract-fingerprinting
      - draft-carrier-formats
      - draft-provenance
      - draft-temporal-stance
---

# Review-fix design rationale (round of 2026-05-07)

Design rationale for the seven decisions taken when revising the mx-shared-gathering draft set after the position-paper review. The plan tells you *what* changes; this document tells you *why* each contested choice was made, what was rejected, and what the migration cost looks like in practice. Decision IDs (`D1`, `D2`, ...) are stable across the plan, the cover-note packages, and this record.

The companion artefacts:

- The cover-note packages at [`mx-outputs/submissions/`](../../../mx-outputs/submissions/) — one per amended draft, each carrying the question set the round wants pushback on.
- The submissions registry at [`mx-canon/mx-the-gathering/submissions-registry.yaml`](../submissions-registry.yaml) — current state of each draft's round-trip.
- The seven amended drafts in the [mx-shared-gathering](../../../mx-shared-gathering/) submodule at HEAD `b75cbc4`.

---

## D1 — Conformance ladder: rename cog ladder to Tier A/B/C

### The conflict

Two notes both grade documents on a 1/2/3 scale:

- **Note 2** ([`draft-core-metadata.md §2.1`](../../../mx-shared-gathering/draft-core-metadata.md)) grades the metadata floor — Level 1 = MUST, Level 2 = +SHOULD, Level 3 = +MAY. This applies to *every* MX document (blog post, manuscript, cog, anything).
- **Note 3** ([`draft-cogs.md §2.1`](../../../mx-shared-gathering/draft-cogs.md)) grades the cog layer — Level 1 = is a `.cog.md`, Level 2 = +cogHeader+buildsOn, Level 3 = +dependencies+refersTo. This applies *only* to cogs.

A cog claiming "Level 3" must satisfy *both* ladders. A reader sees "Level 3" and can't tell which note's Level 3 is meant.

### Options considered

1. **Rename cog ladder to Tier A/B/C.** Disambiguates on first read. One note carries the textual change.
2. **Keep names, add a reconciliation table.** Smaller textual change but reader still mentally tags every "Level" with which note it lives in.
3. **Rename Note 2 ladder instead.** Same effect, opposite note. Note 2 is older and more cited — disrupts more callers.

### Choice: option 1

The cog ladder is the smaller surface — fewer existing references to break. Tier A/B/C reads cleanly as a tier system, not a numeric grade, which is honest about what it actually is. A claim like "this cog is Note 2 Level 3 + Note 3 Tier C" is unambiguous on first read.

### Cost

- Sweep `draft-cogs.md` for every "Level 1/2/3" reference and rewrite.
- Update cross-references in `draft-field-pattern.md`, `README.md`, and any sister note that mentions the cog ladder.
- One-line worked-claim table added at the end of `§2.1`.

---

## D4 — `status` enum: constrain by `contentType`

### The conflict

`draft-core-metadata.md §6.1` packs three different lifecycles into one 18-value enum:

- **Document lifecycle:** draft / active / published / deprecated / archived / canonical
- **Decision lifecycle:** proposed / accepted / rejected / superseded
- **Workflow state:** pending / review / approved / planning / open / closed / sent

A consumer reading `status: closed` cannot tell if it means "workflow-closed" or some other lifecycle's "closed" without external context. There is no way to validate the value either, because every value is acceptable on every document.

### Options considered

1. **Constrain by `contentType`.** Field name and values unchanged. Spec adds a matrix: `contentType=blog` allows {draft, active, published, archived}; `contentType=decision` allows {proposed, accepted, rejected, superseded}; etc. Validators enforce the matrix.
2. **Split into three fields:** `docStatus`, `decisionStatus`, `workflowStatus`. Cleanest semantics. Every existing document needs migrating to the right field name.
3. **Namespace the values:** `status: doc.published`, `status: decision.accepted`, `status: workflow.closed`. Self-describing. Existing flat values become legacy aliases.

### Choice: option 1

Zero migration. The 18-value list stays. The thing that was missing was *context-dependent validation*, which is what the spec adds. Authors who wrote `status: closed` on a workflow ticket keep working; authors who wrote `status: closed` on a blog post (a category mistake) start failing validation, which is the desired behaviour.

### Cost

- New sub-section `§6.1.1 Status by contentType` with the matrix.
- Validators that already parse `status` need a contentType-aware guard. The `mx-validator` skill or the canonical lint must learn the matrix.
- A document that legitimately spans lifecycles (rare — for example, a decision-record blog post) must declare a single contentType and pick the matching status vocabulary.

### What the rejected options would have given

Option 2 (split) would have been the cleanest design starting from zero, but the migration cost across the existing canon is real. Option 3 (namespace) is more discoverable than option 1 but introduces a new value-shape (`x.y` dotted strings) that doesn't exist elsewhere in the canon, just to fix one field — disproportionate.

---

## D6 — Authorship: single `stewardship` object + Zone 1 `originator`

### The conflict

Three fields try to capture five real-world roles:

| Real-world role            | Today's field         | Zone | Mutability |
|----------------------------|-----------------------|------|------------|
| Original creator           | `author`              | 1    | immutable  |
| Current maintainer         | `maintainer`          | 2    | mutable    |
| Accountable owner          | `ownership` (poly)    | 2    | mutable    |
| Legal entity               | `ownership` (poly)    | 2    | mutable    |
| Contact for questions      | `ownership` (poly)    | 2    | mutable    |

`ownership` is a string-or-object polymorph absorbing three distinct concepts. There's no canonical mapping from the five roles to the three fields, so every author resolves it differently.

### Options considered

1. **Expand into four named fields:** `originator` + `steward` + `accountableContact` + `ownership`. One concept per field. Existing names alias for one major version.
2. **Consolidate into a single `stewardship` object** with named sub-keys. Cleaner top-level YAML, but every author writes a nested object even when only one role is needed.
3. **Keep current three fields, sharpen prose.** No schema change. Doesn't solve the structural mismatch.

### Choice: option 2

A single nested object signals "these belong together" in a way that four parallel top-level fields don't. Authors who only need a contact write `stewardship: { accountableContact: ... }` — the nesting is overhead but it's small and consistent. Originator stays at the top level because it's identity (immutable, Zone 1), not stewardship.

The shape:

```yaml
# Zone 1 (immutable)
originator: "Tom Cranstoun"

# Zone 2 (mutable)
stewardship:
  steward:             "Maxine + Tom"
  accountableContact:  "info@cognovamx.com"
  legalEntity:         "Digital Domain Technologies Ltd"
  brand:               "CogNovaMX"
```

### Cost

- `originator` is a new Zone 1 field — added via `/mx-add-field` in the canon catch-up.
- `stewardship` is a new Zone 2 object — same.
- `author`, `maintainer`, `ownership` become aliases for one major version (drives U3 deprecation policy concretely — the first real test of the field-deprecation lifecycle).
- Every existing canonical document carries the new fields after the migration sweep.

### What the rejected options would have given

Option 1 (expand) was Maxine's recommendation. Tom picked the nested object instead — judgment call about top-level surface area. Option 3 (prose-only) leaves the structural redundancy in place; rejected because the review specifically called the redundancy out as load-bearing for getting authorship right.

---

## D7 — Temporal stance: new sister note

### The gap

The reviewer hit a real temporal problem when writing a position paper: the EU AI Act dates are anchors, the Digital Omnibus might shift them, and the prose has to read correctly today *and* in eighteen months. They invented `x-mx-temporal-stance`, `x-mx-temporal-anchors`, `x-mx-temporal-computed-fields`, `x-mx-temporal-prose-guidance` to fill the gap.

Every regulatory document, pricing document, contract, SLA, compliance report, and tech-trend piece will face the same problem. Without a shared vocabulary, every author solves it differently — exactly the divergence the canon exists to prevent.

### Options considered

(a) Publish a new sister note `draft-temporal-stance.md`.
(b) Fold a "temporal" subsection into `draft-core-metadata.md §7a`.
(c) Defer entirely.

### Choice: option (a)

Discoverable as its own note. Reusable. Sized to grow — a note can absorb later additions (timezone handling, calendar systems, anchor resolution algorithms) that would clutter core-metadata if folded in. Slot it between Provenance and Carrier Formats in the README reading order.

### Cost

- One new draft, scaffolded from `mx-canon/ssot/templates/mx-shared-gathering-draft.md`.
- Round-trips via `/mx-gathering-submit` like any other sister note.
- Initial field set documented in the plan; deeper design (anchor resolution algorithm, timezone semantics) lands in a follow-up edition of the note.

---

## D2, D3, D5 — recommendations standing without contest

These three were lower-impact and the recommendations stand:

- **D2 — `version` in default fingerprint.** Bumping a version is a substantive editorial act; a signature that survives version bumps lets the same signed bytes be republished as v1/v2/v3. Including `version` in the default fingerprint enforces "re-version means re-sign".
- **D3 — `cogType: action.scripted` dotted form.** Single field, single canonical shape. The deconstructed form (`cogType: action` + `actionType: scripted`) remains valid as a fallback.
- **D5 — `mx:purpose` as a duple.** Small controlled high-level vocabulary (specification / reference / guide / operational / narrative / record) plus a free-form sub-purpose. Catches the position-paper / press-release / regulatory-filing / academic-paper cases without re-opening the enum every time a new genre lands.

If any of these turn out wrong on review, they are cheaper to redo than the four locked decisions above.

---

## What the review got right that we kept verbatim

These are explicitly preserved by the plan:

- **Two-zone model** (identity vs. operational) — architectural keystone.
- **Three-tier extension namespace** ((none) / `x-mx-` / `x-mx-p-`) — prefix-as-policy is elegant; no registry lookup needed.
- **Signing-attests-provenance-not-truth** ([`draft-contract-fingerprinting.md §9`](../../../mx-shared-gathering/draft-contract-fingerprinting.md)) — prevents whole categories of misuse downstream.
- **Deterministic fingerprint, signature format out-of-scope** — compatible with JWS, COSE, VC Data Integrity, C2PA without competing.
- **Recommended reading order in `README.md`** — kindness to newcomers, preserved verbatim.

## What the review got wrong

- **"Note 5 (Provenance) doesn't yet exist."** It does — [`draft-provenance.md`](../../../mx-shared-gathering/draft-provenance.md) is 552 lines, complete, dated 2026-04-27. The reviewer simply didn't have it in their read set. Fix is discoverability (forward-links from the four notes they read), not authorship.
- **"Note 8" mapping.** The reviewer's "Note 8" content (signing, fingerprint, default-excluded fields, "most cogs ship unsigned") all lives in [`draft-contract-fingerprinting.md`](../../../mx-shared-gathering/draft-contract-fingerprinting.md). The README's actual position-8 file is `draft-agent-directory-discovery.md`, which the reviewer wasn't talking about. The plan and this record treat "Note 8" = fingerprinting throughout.
