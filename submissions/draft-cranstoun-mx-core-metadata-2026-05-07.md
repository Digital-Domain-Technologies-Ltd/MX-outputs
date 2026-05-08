---
package: draft-cranstoun-mx-core-metadata-2026-05-07
docname: draft-cranstoun-mx-core-metadata
versionSubmitted: "1.0"
preparedAt: 2026-05-07
draftPath: mx-shared-gathering/draft-core-metadata.md
draftCommit: b75cbc4
hubCommit: cc969141
draftUrl: https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-core-metadata.md
canonicalUri: https://raw.githubusercontent.com/ddttom/mx-shared-gathering/main/draft-core-metadata.md
---

# Submission package — MX Core Metadata note (draft, v1.0)

**Filed by:** Tom Cranstoun (CogNovaMX)
**Stream thread:** *(pending — file then return URL via `/mx-gathering-submit file`)*

## Cover note (post verbatim to Stream)

This is the second-round revision of the MX Core Metadata note. It carries the largest set of structural changes in the draft set.

The community review surfaced six concerns specific to this note:

1. **`status` packed three lifecycles into one 18-value enum.** A consumer reading `status: closed` couldn't tell which lifecycle.
2. **`purpose` was a six-value enum that didn't fit position papers, press releases, regulatory filings, or contracts.**
3. **`author` / `maintainer` / `ownership` carried five real-world roles in three fields, with `ownership` polymorphic.**
4. **`§7.1 pass-through` and `§7.2 externally-aligned` distinction was hard for authors to act on.**
5. **`mx:canonicalUri` and HTML `<link rel="canonical">` had no agreement rule.**
6. **No author quickstart for the smallest valid Level 1/2/3 frontmatter.**

This revision addresses each:

- **§5.3 `originator`** renames `author` (Zone 1, immutable). `author` aliased for one major version per the new §10.4 deprecation lifecycle in the Extensions note.
- **§6.6 `stewardship` object** consolidates `maintainer` and `ownership` into named sub-keys (`steward`, `accountableContact`, `legalEntity`, `brand`). The string-or-object polymorph on `ownership` retires. §6.7-§6.17 renumbered down by one.
- **§6.1.1 `status` by `contentType` matrix** keeps the 18-value enum but constrains valid values per content type. Out-of-matrix values are conformance failures; no document migration needed.
- **§6.4 `purpose` duple** — controlled high-level kind (`specification`, `reference`, `guide`, `operational`, `narrative`, `record`) with optional free-form `subPurpose`. Object form catches genres the enum can't.
- **§7 unified "External alignments"** — single inventory with an `Owns semantics` column (`external`, `mx`, `aligned`) replacing the §7.1/§7.2 split. New §7.3 tiebreaker rule for when external standards almost-but-not-quite fit.
- **§7a.1** adds the canonical-link agreement: HTML `<link rel="canonical">` and `<meta name="mx:canonical-uri">` MUST agree.
- **§1 Abstract** adds normative MUSTs for accessibility (WCAG 2.1 AA, with PDF deferring to draft-document-accessibility) and provenance (link to draft-provenance — part of the Level-2 floor).
- **§11 Author quickstart, §12 Common authoring mistakes** — three minimum-viable frontmatter blocks (Level 1, 2, 3) and five wrong+right pairs.

The text is at: <https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-core-metadata.md>

Looking for community pushback particularly on:

1. **`stewardship` object vs four parallel fields.** This was a judgment call. Authors with one role to declare write a small nested object; authors with all four write what naturally belongs together. The expand-into-four alternative was rejected on top-level surface-area grounds. Comfortable revisiting if the nesting friction shows up in practice.
2. **`status`-by-`contentType` matrix.** The cheapest path that preserves the field name. The alternatives (split into three fields; namespace values as `doc.published`) had higher migration cost.
3. **`purpose` controlled vocabulary.** The six values are a guess at the natural axis. Pushback welcome.
4. **§7 Owns-semantics column.** The three-way distinction (`external`, `mx`, `aligned`) is meant to make the alignment relationship explicit at the field-by-field level. If it reads cleanly, the §7.3 tiebreaker rule should give authors the guidance they need when the relationship gets ambiguous.

Aliases for legacy field names (`author`, `maintainer`, `ownership`) are supported for one major version per the new §10.4 deprecation lifecycle in the Extensions note. Canon updates (mx-canon/ssot/fields-data*.yaml + Appendix M) wait for ratification.

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
3. Run `/mx-gathering-submit file draft-cranstoun-mx-core-metadata <url>`.
