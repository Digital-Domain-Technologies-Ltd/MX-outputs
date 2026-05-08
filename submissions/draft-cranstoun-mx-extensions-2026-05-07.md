---
package: draft-cranstoun-mx-extensions-2026-05-07
docname: draft-cranstoun-mx-extensions
versionSubmitted: "1.0"
preparedAt: 2026-05-07
draftPath: mx-shared-gathering/draft-extensions.md
draftCommit: b75cbc4
hubCommit: cc969141
draftUrl: https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-extensions.md
canonicalUri: https://raw.githubusercontent.com/ddttom/mx-shared-gathering/main/draft-extensions.md
---

# Submission package — MX Extensions note (draft, v1.0)

**Filed by:** Tom Cranstoun (CogNovaMX)
**Stream thread:** *(pending — file then return URL via `/mx-gathering-submit file`)*

## Cover note (post verbatim to Stream)

Second-round revision of the MX Extensions note. The review concerns specific to this note were three:

1. **The `x-mx-` namespace was described as "owned by CogNovaMX".** That wording wouldn't survive contact with a second adopter. The pattern needed a vendor-sub-namespace mechanism for the seed phase and beyond.
2. **The HTML kebab-case mapping table was informative here, but every Level-2 HTML page depends on it being normative.** The right home is the Carrier Formats note.
3. **No deprecation lifecycle.** The Extensions note covered promotion (extension into core) but not the reverse — what happens when a field has to retire.

This revision addresses each:

- **§1, §6.1, §6.3** reword the namespace ownership: the `x-mx-` namespace is the public extension space operated by CogNovaMX during the seed phase; vendor sub-namespaces of the form `x-mx-{vendor}-*` are reserved for individual vendors and allocated on request. Adds a worked example using a fictional Acme vendor.
- **§7.1** is now an Informative summary table with a normative pointer to the Carrier Formats note as the binding source. Specifically calls out the four MUST-at-Level-2 fields (`mx:canonical-uri`, `mx:summary`, `mx:conforms-to`, `mx:training-data-policy`) as defined there.
- **§10.4 Field deprecation and retirement** — new normative subsection with the announce → deprecate → retire workflow and a one-major-version alias guarantee. Names the active migrations (`author` → `originator` and `maintainer` / `ownership` → `stewardship` from the Core Metadata note) as the first real test of the lifecycle.
- **§14 Common authoring mistakes** — five wrong+right pairs covering prefix pollution, camelCase in extensions, vendor sub-namespace claims without allocation, decoding `x-mx-p-` values without the registry, and reinventing standard fields.

The text is at: <https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-extensions.md>

Looking for community pushback particularly on:

1. **Vendor sub-namespace allocation.** "Allocated on request" is light governance. Does The Gathering want a registry-of-allocated-vendors entry on Stream or a separate cog?
2. **`§10.4` deprecation lifecycle.** The one-major-version alias window is a guess; happy to lengthen if the feedback says "too short".
3. **Cross-reference to Carrier Formats §3.2.1/§3.2.2** for the binding HTML mapping. The two notes now declare the same fields with consistent conformance language; if the alignment slips, this is where it'll show.

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
3. Run `/mx-gathering-submit file draft-cranstoun-mx-extensions <url>`.
