---
package: draft-cranstoun-mx-cogs-2026-05-07
docname: draft-cranstoun-mx-cogs
versionSubmitted: "1.0"
preparedAt: 2026-05-07
draftPath: mx-shared-gathering/draft-cogs.md
draftCommit: b75cbc4
hubCommit: cc969141
draftUrl: https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-cogs.md
canonicalUri: https://raw.githubusercontent.com/ddttom/mx-shared-gathering/main/draft-cogs.md
---

# Submission package — MX Cogs note (draft, v1.0)

**Filed by:** Tom Cranstoun (CogNovaMX)
**Stream thread:** *(pending — file then return URL via `/mx-gathering-submit file`)*

## Cover note (post verbatim to Stream)

I'm filing the second-round revision of the MX Cogs note for community review.

The first round received a structured external review against a real publication. The findings clustered around four concerns specific to this note:

- **Two ladders both called "Level 1/2/3".** This note's cog ladder collided with the MX Core Metadata note's identity ladder; a cog had to satisfy both at "Level 3" with no way for a reader to tell which ladder was which.
- **Action-cog discriminator was two parallel fields.** `cogType: action` plus `actionType: scripted` doubled the surface area and created two ways to disagree.
- **Runtime-URL trust was SHOULD-validate.** Auto-fetching unknown spec or runtime URLs is a phishing surface; SHOULD wasn't strong enough.
- **No author or consumer journey appendix.** The note specified the right answer but never walked a reader through the smallest valid cog or the order a tool processes one.

This revision addresses each:

- **§2.1 Conformance tiers** renames the cog ladder to **Tier A / B / C**. New §2.1.1 reconciles with MX Core Level 1/2/3 via a worked-claim table ("this cog is MX Core Level 3 + Cog Tier C"). Every "Level N" reference inside §5 and §6 field-property tables is rewritten to its Tier equivalent.
- **§6.5.2 Action-cog discriminator** introduces the canonical dotted form `cogType: action.scripted` (and `action.sop`, `action.hybrid`). The deconstructed `cogType: action` + `actionType: scripted` form remains as an alias; both forms MUST agree when both are present.
- **§8 Runtime-URL trust** strengthens to MUST-validate against an operator allowlist or trusted registry, SHOULD NOT auto-fetch unknown URLs, MAY refuse to process cogs with unrecognised spec URLs.
- **§10 Author quickstart, §11 Consumer checklist, §12 Common authoring mistakes** added — minimum-viable info-cog and action-cog, the order a tool SHOULD process a cog, and four common wrong+right pairs.

The text is at: <https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-cogs.md>

Looking for community pushback particularly on:

1. The Tier A/B/C rename — does it read clearly, or does losing the descriptive "MX Cog Core / Standard / Complete" names hurt? (Bare letters were the explicit choice; happy to revisit.)
2. The dotted `cogType: action.scripted` canonical form — I picked it over a nested object on the strength of "single field, single canonical shape", but the alias keeps the deconstructed form available for tooling that prefers parallel fields.
3. The runtime-URL trust strengthening — strong enough? Too strong?

Tom

## Preparation summary (Informative, not for posting)

- **Draft commit:** [`b75cbc4`](https://github.com/ddttom/mx-shared-gathering/commit/b75cbc4) on `main`.
- **Hub pointer:** [`cc969141`](https://github.com/Digital-Domain-Technologies-Ltd/MX-hub/commit/cc969141) on `main`.
- **Format-check:** `validateGatheringDraft` passes (kramdown-rfc minimal frontmatter, no forbidden MX fields, `consensus: false`).
- **Markdownlint:** clean.
- **Spell:** wordlist coverage gaps for tech compounds (`verifier`, `untrusted`, `whitespace`, `unmodelled`, `unresolvable`); no real typos.

## Next actions (per `/mx-gathering-submit`)

1. **You file** this cover note as a thread on <https://stream.tg.community>.
2. Return with the thread URL.
3. Run `/mx-gathering-submit file draft-cranstoun-mx-cogs <url>` — registry flips to `state: in-review`.
