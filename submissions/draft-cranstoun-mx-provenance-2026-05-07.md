---
package: draft-cranstoun-mx-provenance-2026-05-07
docname: draft-cranstoun-mx-provenance
versionSubmitted: "1.0"
preparedAt: 2026-05-07
draftPath: mx-shared-gathering/draft-provenance.md
draftCommit: b75cbc4
hubCommit: cc969141
draftUrl: https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-provenance.md
canonicalUri: https://raw.githubusercontent.com/ddttom/mx-shared-gathering/main/draft-provenance.md
---

# Submission package — MX Provenance note (draft, v1.0)

**Filed by:** Tom Cranstoun (CogNovaMX)
**Stream thread:** *(pending — file then return URL via `/mx-gathering-submit file`)*

## Cover note (post verbatim to Stream)

A light second-round revision. The community review actually missed this note — the reviewer concluded "Note 5 (Provenance) doesn't yet exist in the read set" when the note has been complete for two weeks. The fix at the canon level is the README and Core Metadata cross-references that now forward-link here as part of the Level-2 floor; in this note itself the changes are author-experience additions:

- **§13 Minimum-viable provenance block** — a five-field worked example for Zone 2: `provenanceAuthor`, `provenancePublisher`, `provenanceOrigin`, `reviewCycle`, `maintainedDate`. Sufficient for most documents; builds up to the quality triad and decision-record references for higher-trust cases.
- **§14 Common authoring mistakes** — three wrong+right pairs covering identity-vs-stewardship confusion, dishonest `provenanceOrigin: human-only` after AI-assisted authorship, and `expires` declared without a paired `reviewCycle`.

Cross-references to `originator` and `stewardship.steward` from the Core Metadata note's renames are wired in.

The text is at: <https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-provenance.md>

Pushback welcome on the discoverability framing — the README now positions Provenance as part of the Level-2 floor (alongside Core Metadata) rather than an optional sister note. That's a stronger claim than the original "extends the floor" wording. Comfortable with it because skipping provenance leaves authors inventing private `x-mx-prov-*` fields they have to migrate later, but happy to soften if the read is "Tom, you're elbowing this in".

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
3. Run `/mx-gathering-submit file draft-cranstoun-mx-provenance <url>`.
