---
package: draft-cranstoun-mx-contract-fingerprinting-2026-05-07
docname: draft-cranstoun-mx-contract-fingerprinting
versionSubmitted: "1.0"
preparedAt: 2026-05-07
draftPath: mx-shared-gathering/draft-contract-fingerprinting.md
draftCommit: b75cbc4
hubCommit: cc969141
draftUrl: https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-contract-fingerprinting.md
canonicalUri: https://raw.githubusercontent.com/ddttom/mx-shared-gathering/main/draft-contract-fingerprinting.md
---

# Submission package — MX Contract Fingerprinting and Signing note (draft, v1.0)

**Filed by:** Tom Cranstoun (CogNovaMX)
**Stream thread:** *(pending — file then return URL via `/mx-gathering-submit file`)*

## Cover note (post verbatim to Stream)

Second-round revision of the MX Contract Fingerprinting and Signing note. The community review put schema-derived contractFields at the top of its priority list — its single highest-impact change in the draft set — and identified two related issues with §4.4 defaults plus a missing pre-signature subsection.

Concerns the review surfaced specific to this note:

1. **`contractFields` had to be hand-listed even when a schema was already declared.** Authors writing `schema:` were maintaining two source-of-truth lists.
2. **`version` was excluded from the default fingerprint scope.** A signature could survive arbitrary version bumps; same signed bytes could be republished as v1, v2, v3 with the signature still valid.
3. **No statement of what an unsigned cog declaring `contractFields` actually does.** Authors prototyping with `contractFields` on unsigned cogs had no rule to point at.

This revision addresses each:

- **§4.4 Computing the contract scope** — full rewrite as a precedence ladder. (1) Explicit `contractFields` array first; (2) otherwise, resolve `schema:` and apply per-property `x-mx-contract: true | false` annotations; (3) otherwise, defaults. A worked schema example shows annotation-driven derivation. Authors who write `schema:` once need not also list contract fields.
- **§4.4 default classification** — `version` is now `contract` by default. Bumping a version is a substantive editorial act; re-versioning a signed cog re-invalidates the signature and requires re-signing.
- **§4.5 Pre-signature contract declaration (Normative)** — new subsection. An unsigned cog MAY declare `contractFields` and `metadataFields` as a unilateral commitment. Verifiers MUST treat them as informational; MAY compute and surface a "pre-signature digest"; SHOULD record that no signature is present.
- **§6.2 verifier rules** updated to require resolution per the §4.4 precedence and to surface the resolution source in any verification log.
- **§7 open questions** — the schema-derived contract item is removed; closed by §4.4. A note records the closure.
- **§11 Minimum-viable signed cog** — full worked example: schema (with annotations), cog (no explicit `contractFields`, schema-derived), the resolved projection, the fingerprint. **§12 Verifier checklist** — 9-step processing order. **§13 Common authoring mistakes** — 5 wrong+right pairs.

The text is at: <https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-contract-fingerprinting.md>

Looking for community pushback particularly on:

1. **`x-mx-contract: true | false` as the schema annotation.** This puts MX-namespace JSON-Schema annotations on user-authored schemas. The pattern is established in OpenAPI extensions; does it land cleanly here?
2. **`version` in the default scope.** Pushback expected from anyone whose workflow assumes a long-lived signature across editorial revisions. The argument is that re-versioning is a substantive editorial act and the signing model attests-this-state-was-published-by-this-signer; surviving a version bump dilutes the claim.
3. **Pre-signature contract declaration.** The §4.5 normative position is "informational, useful authorial signal". A reader who treats an unsigned `contractFields` as a soft commitment needs to be on the same page as a verifier who treats it as no-attestation.

Tom

## Preparation summary (Informative, not for posting)

- **Draft commit:** [`b75cbc4`](https://github.com/ddttom/mx-shared-gathering/commit/b75cbc4) on `main`.
- **Hub pointer:** [`cc969141`](https://github.com/Digital-Domain-Technologies-Ltd/MX-hub/commit/cc969141) on `main`.
- **Format-check:** `validateGatheringDraft` passes.
- **Markdownlint:** clean.
- **Spell:** wordlist coverage gaps for tech compounds; no real typos.

## Next actions

1. **You file** this cover note on <https://stream.tg.community>.
2. Return with the thread URL.
3. Run `/mx-gathering-submit file draft-cranstoun-mx-contract-fingerprinting <url>`.
