---
package: draft-cranstoun-mx-temporal-stance-2026-05-07
docname: draft-cranstoun-mx-temporal-stance
versionSubmitted: "1.0"
preparedAt: 2026-05-07
draftPath: mx-shared-gathering/draft-temporal-stance.md
draftCommit: b75cbc4
hubCommit: cc969141
draftUrl: https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-temporal-stance.md
canonicalUri: https://raw.githubusercontent.com/ddttom/mx-shared-gathering/main/draft-temporal-stance.md
isNewNote: true
---

# Submission package — MX Temporal Stance note (NEW, draft v1.0)

**Filed by:** Tom Cranstoun (CogNovaMX)
**Stream thread:** *(pending — file then return URL via `/mx-gathering-submit file`)*

## Cover note (post verbatim to Stream)

This is a NEW sister note — not a revision. The community review surfaced a recurring authoring problem: documents whose prose depends on dated anchors (regulatory analyses, contracts, SLAs, compliance reports, pricing pages, tech-trend pieces) had no shared vocabulary for declaring the relationship.

The reviewer hit it concretely while writing a position paper anchored to the EU AI Act application date — a date the legislator could shift. They invented `x-mx-temporal-stance`, `x-mx-temporal-anchors`, `x-mx-temporal-computed-fields`, `x-mx-temporal-prose-guidance` as private extensions. Without a shared vocabulary, every author solves the problem differently — exactly the divergence the canon exists to prevent.

The new note defines four fields:

- **`temporalStance`** — controlled enum: `frozen` (prose reflects state at publication), `living` (prose reflects state at fetch time), `anchored` (prose contains values computed from declared anchors).
- **`temporalAnchors`** — named date anchors with description and optional source URL. Each anchor has a stable identifier the other fields reference.
- **`temporalComputedFields`** — fields whose values are computed at render time from anchors via `compute: daysUntil | daysSince | monthsUntil | monthsSince | quartersUntil | quartersSince | dateValue`. Render-time agents MUST NOT cache these beyond a single render.
- **`temporalProseGuidance`** — author-supplied notes telling future stewards how to update the prose if an anchor moves. Bridges the structural vocabulary and the unstructured prose that depends on it.

The note covers static-site builders, runtime agents, and the steward update loop in §5 (informative). §6 establishes that signed contracts MUST exclude `temporalComputedFields` values from the contract surface — the anchor itself MAY be in the contract; the values derived from it at render time are by definition outside the signature.

§9 carries a worked author-quickstart for a regulatory blog post anchored to the EU AI Act application date. §10 covers three common authoring mistakes.

The text is at: <https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-temporal-stance.md>

The note slots between Provenance and Carrier Formats in the README reading order. It applies opt-in: documents that don't depend on dated anchors can ignore it.

Looking for community pushback particularly on:

1. **The three-value `temporalStance` enum.** `frozen` / `living` / `anchored` — does this carve up the space cleanly, or are there genres that don't fit (perhaps a "mixed" mode for a document with both anchored and frozen sections)?
2. **`temporalComputedFields.compute` vocabulary.** Seven values today: `daysUntil`, `daysSince`, `monthsUntil`, `monthsSince`, `quartersUntil`, `quartersSince`, `dateValue`. Pushback welcome on missing values (yearsUntil? weekdayName? businessDaysUntil?).
3. **`softCutoff` boolean on `temporalProseGuidance`.** The argument is "small anchor moves don't always require prose updates". The boolean is a coarse switch; a tolerance value (`softCutoffDays: 30`) might be cleaner. Both shapes are workable.
4. **Out-of-scope choices.** Calendar systems, timezones, time-of-day are explicitly deferred. Pushback welcome if any of those need pulling in.

Tom

## Preparation summary (Informative, not for posting)

- **Draft commit:** [`b75cbc4`](https://github.com/ddttom/mx-shared-gathering/commit/b75cbc4) on `main`.
- **Hub pointer:** [`cc969141`](https://github.com/Digital-Domain-Technologies-Ltd/MX-hub/commit/cc969141) on `main`.
- **Format-check:** `validateGatheringDraft` passes (kramdown-rfc minimal frontmatter, no forbidden MX fields, `consensus: false`, docname matches the `draft-cranstoun-mx-<slug>` pattern).
- **Markdownlint:** clean.
- **Spell:** wordlist coverage gaps for tech compounds; no real typos.
- **Scaffolded from:** `mx-canon/ssot/templates/mx-shared-gathering-draft.md` per the project feedback rule.

## Next actions

1. **You file** this cover note on <https://stream.tg.community>.
2. Return with the thread URL.
3. Run `/mx-gathering-submit file draft-cranstoun-mx-temporal-stance <url>`.
