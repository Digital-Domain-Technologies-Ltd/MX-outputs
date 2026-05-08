---
package: draft-cranstoun-mx-carrier-formats-2026-05-07
docname: draft-cranstoun-mx-carrier-formats
versionSubmitted: "1.0"
preparedAt: 2026-05-07
draftPath: mx-shared-gathering/draft-carrier-formats.md
draftCommit: b75cbc4
hubCommit: cc969141
draftUrl: https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-carrier-formats.md
canonicalUri: https://raw.githubusercontent.com/ddttom/mx-shared-gathering/main/draft-carrier-formats.md
---

# Submission package — MX Carrier Formats note (draft, v1.0)

**Filed by:** Tom Cranstoun (CogNovaMX)
**Stream thread:** *(pending — file then return URL via `/mx-gathering-submit file`)*

## Cover note (post verbatim to Stream)

Second-round revision of the MX Carrier Formats note. Two structural concerns to address:

1. **The HTML kebab-case `mx:` mapping was informative in the Extensions note, but every Level-2 HTML page depends on it being normative somewhere.**
2. **A field can appear in multiple forms on the same artefact — YAML frontmatter, `<meta>` tags, XMP, magic-header — and the precedence was unstated.**

This revision addresses each:

- **§3.2 HTML carrier** is significantly expanded. New §3.2.1 carries the binding camelCase → `mx:` kebab-case rule with explicit precedence over the Extensions note's informative summary. New §3.2.2 makes the four MUST-at-Level-2 fields normative for HTML — `mx:canonical-uri`, `mx:summary`, `mx:conforms-to`, `mx:training-data-policy` — with a worked example showing them alongside the standard `description`, `author`, and `<link rel="canonical">`. The canonical-link agreement rule (HTML's `<link rel="canonical">` and `<meta name="mx:canonical-uri">` MUST agree) lives in §3.2.3 and cross-references the Core Metadata note's §7a.1.
- **§3.10 Field-form precedence (Normative)** — new section. When a field is declared in multiple forms on the same artefact, the order is YAML frontmatter > carrier-specific embedded form (XMP, magic-header) > `<meta>` tags > inferred. Disagreement between forms is a conformance failure. Includes an author's checklist for the multi-form case.

The text is at: <https://github.com/ddttom/mx-shared-gathering/blob/b75cbc4/draft-carrier-formats.md>

Looking for community pushback particularly on:

1. **Precedence ordering.** YAML > carrier-embedded > `<meta>` > inferred. The argument is that frontmatter is the canonical form authors maintain; carrier-embedded is the carrier's preferred form when no frontmatter is available; `<meta>` is what tooling generates from one of the higher forms. Pushback welcome if a carrier (XMP especially) feels demoted.
2. **HTML §3.2.2 normative four.** Same four fields the Core Metadata note §7a.6 makes MUST at Level 2. The two notes now declare them in lockstep; if one drifts, this is the alignment to watch.
3. **`<link rel="canonical">` agreement.** A page that declares both with disagreeing URLs is a conformance failure; tools "SHOULD flag the page as ambiguous rather than guess". Comfortable with that, but reasonable people might prefer "MAY pick a default" — happy to revisit.

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
3. Run `/mx-gathering-submit file draft-cranstoun-mx-carrier-formats <url>`.
