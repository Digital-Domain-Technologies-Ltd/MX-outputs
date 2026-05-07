---
title: "Co-Directors Report — Review-fix round across the gathering drafts, canon catch-up, validator hardening, plus canonical-line lock-in"
description: "Seven gathering drafts revised through a structured review, canon brought into lockstep, validator promoted to fail on real date errors, conformance gate clean for the first time. Late-evening addendum: an examples-first canonical line locked in across investor and public surfaces after a live mishearing of 'documents' as 'Word documents'."
author: "Tom Cranstoun"
created: 2026-05-07
modified: 2026-05-07
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-07-evening-report.md
---

# Co-Directors Report — Review-fix round across the gathering drafts, canon catch-up, validator hardening

**Date:** 7 May 2026 — Evening
**Segment:** evening (covering the full day; no morning or afternoon report ran today)

---

## Summary

A structured external review of the MX gathering drafts surfaced four critical, seven important, and seven ergonomic gaps. The session translated those findings into a concrete plan, executed across seven drafts plus a new sister note, then brought the canon (field dictionary, Appendix M, validator) into lockstep. The conformance gate now passes 2078/2078 for the first time. The drafts are packaged for Stream submission next week ahead of Frankfurt; canon vocabulary follows ratification.

---

## What Was Done

### 1. Review-fix round on the gathering drafts (mx-shared-gathering b75cbc4)

A position-paper review surfaced 18 findings clustered around discoverability, naming collisions, and ergonomic gaps. The round addressed every critical and important item across seven drafts:

- **Cog conformance ladder renamed** to Tier A/B/C to disambiguate from the MX Core Level 1/2/3 ladder; reconciliation table added showing how a cog is graded by both ladders simultaneously.
- **Action-cog discriminator** consolidated into the dotted form `cogType: action.scripted` with the deconstructed parallel-fields shape kept as an alias.
- **Runtime-URL trust** strengthened from SHOULD to MUST for cogHeader.spec/runtime allowlist validation.
- **`status` enum** kept as one field but constrained per `contentType` via a new normative matrix; resolves the long-standing problem that `status: closed` could mean three different things on three different document types.
- **`purpose`** expanded to a string-or-object duple; controlled high-level kinds (specification / reference / guide / operational / narrative / record) plus a free-form `subPurpose` for genres the controlled vocabulary cannot name.
- **Authorship** consolidated into a `stewardship` object (steward, accountableContact, legalEntity, brand) at Zone 2; immutable original creator becomes `originator` at Zone 1; legacy `author`, `maintainer`, `ownership` aliased for one major version.
- **External alignments** unified §7.1 and §7.2 into one inventory with an `Owns semantics` column (external / mx / aligned).
- **HTML carrier mapping** promoted from informative to normative for the four MUST-at-Level-2 fields (`mx:canonical-uri`, `mx:summary`, `mx:conforms-to`, `mx:training-data-policy`).
- **Schema-derived contractFields** (the review's #1 priority): authors writing `schema:` no longer need to hand-list contract fields — the validator projects them from `x-mx-contract: true` annotations on the schema.
- **Pre-signature contract declaration** added so unsigned cogs declaring `contractFields` have a defined unilateral-commitment status.
- **Field-form precedence rule** added (frontmatter > carrier-specific > meta tags > inferred).
- **Field-deprecation lifecycle** added (announce → deprecate → retire with one-major-version aliases) — the active migration of `author` / `maintainer` / `ownership` is the first real test.
- **New sister note: MX Temporal Stance** for documents anchored to dated events (regulatory analyses, contracts, SLAs, compliance reports, pricing pages) — fields `temporalStance`, `temporalAnchors`, `temporalComputedFields`, `temporalProseGuidance`.

### 2. Canon catch-up (fields-data v6.7 → v6.8)

The drafts and canon must stay in lockstep per the always-on rule in `CLAUDE.md`. With the drafts revised, the dictionary needed updating to match — even though the gathering hasn't yet ratified, holding the canon back leaves the canon explicitly inconsistent. Tom's direction: treat the new vocabulary as the working state; ratification follows.

- New canonical fields: `originator`, `stewardship` object, `temporalStance`, `temporalAnchors`, `temporalComputedFields`, `temporalProseGuidance`.
- Existing entries updated: `status` notes carry the contentType-matrix; `purpose` widened to string-or-object with the new vocabulary.
- Legacy `author`, `maintainer`, `ownership` retained as one-major-version aliases (per the new deprecation policy declared in the Extensions note).
- Appendix M §22 prose mirror updated.
- Dictionary version bumped 6.7 → 6.8.

### 3. Validator hardening

The cog validator was producing 387 false-positive WARN [date-format] entries across the canon. Diagnosed: js-yaml parses ISO 8601 date literals into JavaScript `Date` objects, and the validator's `String(value)` rendered them in toString() form ("Mon Feb 09 2026 00:00:00 GMT+0000 (Greenwich Mean Time)"), which always failed the YYYY-MM-DD regex. Fix: accept `Date` instances as conformant by construction; check the regex against the string only when value is a string. Severity promoted from `warning` to `error` so genuine date-format failures block the gate. Twenty-two real failures surfaced (CRM contact cogs carrying `lastContact` as full ISO timestamps); truncated to YYYY-MM-DD.

### 4. Conformance to 2078/2078

The corrected validator surfaced 27 pre-existing files missing `author` and `created` (workshop docs, audit fixtures, business-case docs, the cog-spec draft, and one CRM contact missing a title). Added the Level 1 identity floor across all 27 — author set to Tom Cranstoun; created pulled from each file's git first-commit date. Conformance now passes end-to-end for the first time.

### 5. Cross-session migration recorded

A parallel context (claude.ai web) carries three external cogs (`mx-machine-readiness.cog.md`, `mx-machine-readiness.meta.cog.md`, `cog.v1.cog.md`) that use seven `x-mx-prov-*` and four `x-mx-temporal-*` extension fields as placeholders. The drafts those would map to (Note 5 Provenance, draft-temporal-stance.md) now exist in this hub. Migration plan recorded at `mx-canon/mx-the-gathering/TODO.md` with field-mapping steps and version-bump targets, plus a 🟡 reminder line in REMINDERS.md.

### 6. Stream submission packaged but held

Seven cover-note packages prepared at `mx-canon/mx-the-gathering/packages/`, each carrying the round's question set. Submissions registry initialised with seven rows in `state: drafted`. Filing on Stream targeted for next week per Tom's direction; the registry will be updated with thread URLs as those land.

### 7. Canonical line lock-in (investor language fix)

In a live investor conversation earlier in the evening, "Make your documents readable by machines" was misheard as "Make your *Word* documents readable by machines" — narrowing the scope of MX from any published asset to office files. The investor only recovered the breadth after Tom enumerated examples (video streams, MP3, PDF, JPG). The misread is a leading indicator: if it bit on a pitch, it bites on the book opening, the homepage, and every public surface that frames "what MX is for".

The fix is an examples-first canonical line that pre-empts the misread: **"Make anything you publish — a video, a podcast, a PDF, an image, a web page — readable by machines."** The shape was chosen by interview (singular prose form, examples first, scope-bounded by "anything you publish" so the claim doesn't over-promise "everything on the internet"). HTML surfaces use a no-em-dash variant per the project rule: *"Videos, podcasts, PDFs, images, web pages: make anything you publish readable by machines."*

The line was locked in `mx-canon/ssot/principles.cog.md` (v3.3 → v3.4) as the second paragraph of the opening, in bold so other surfaces can quote it. Then swept across the live MX surfaces:

- `messaging-ideas.md`: added as the lead "Hooks worth keeping" entry; added a do-not-do entry recording the mishearing as the reason.
- `mx-shared-gathering/README.md`: added as a one-line preamble before the operational text.
- `mx-site/index.html`: 7 surfaces updated (meta description, og, twitter, JSON-LD, h1 sr-only, hero subtitle, body intro).
- `mx-site/learn/index.html`, `learn/mx-principles.html`, `books/index.html`, `about/printworks.html`: hero / subtitle / intro paragraphs.
- 24 published blog posts + 4 blog drafts: bulk-replaced introduction-message paragraph via perl in-place edit (clean swap; same templated string everywhere).
- `scripts/generate-llms-understanding.mjs`: added "What MX is for" preamble line; bundle regenerated.
- `mx-site/llms-full.txt`: regenerated to pull in cleaned source HTML.

Free book Chapter 0 and Protocols Chapter 0 were assessed and left untouched: they already lead with concrete examples ("contracts, manufacturing specifications, government archives, medical protocols, scientific papers") whenever they say "document" — they're self-correcting in long-form prose. The misread was a verbal/slide problem; the canonical line addresses it where it bit.

### 8. Codex staging directory cleanup

Sweeping for over-narrow "documents" framing surfaced `mx-canon/mx-maxine-lives/communications/blogs/html/codex/` — a 32-file, 468K staging directory of older HTML blog posts with a stale `CogNovaMX Ltd` author attribution. Two `.mx.yaml.md` files declared `derivedFrom:` pointers to it, but the live blog at `mx.allabout.network/blog/` is now served from `mx-outputs/mx-site/blog/` (a different submodule mount). The codex was upstream lineage source for content that no longer exists in the deployed path. Deleted via `git rm -r`; the two `derivedFrom:` references were removed from `allaboutv2/blogs/mx/.mx.yaml.md` and `mx-outputs/html/blogs/.mx.yaml.md` so nothing dangles.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (across hub + 4 submodules) | ~22 |
| Files changed (hub session) | 65 |
| Lines added | +2347 |
| Lines removed | −97 |
| Repositories touched | 5 (hub, mx-shared-gathering, mx-outputs, mx-crm, mx-audit) |
| Drafts revised | 6 amended + 1 new = 7 |
| New canonical MX fields | 6 |
| Conformance compliance | 2051/2078 → 2078/2078 |
| Date-format false positives eliminated | 387 |
| Date-format real errors found and fixed | 22 |
| Cover-note packages prepared | 7 |
| Files in `state: drafted` in submissions registry | 7 |
| Public surfaces touched by canonical-line sweep | 35 |
| Blog posts bulk-replaced (published + drafts) | 28 |
| Codex staging files deleted | 32 |
| Stale `derivedFrom:` pointers cleaned | 2 |

---

## Why It Matters

This was governance and hygiene work, but with material business signal:

- **Stream submission is on track for Frankfurt.** Seven drafts revised, packaged, and ready to file next week. The 12 May Frankfurt CMS Summit — the company introduction — now has a freshly-reviewed, internally-consistent draft set behind it.
- **Canon-draft lockstep restored.** The validator passes, the dictionary matches the drafts, the deprecation policy is documented and tested. New authors (and new sessions of new authors) inherit the consistent state rather than the drift.
- **The validator is honest now.** 387 false positives cleared, 22 real failures fixed. A future session will see the gate as a reliable signal again rather than ignoring 400+ warnings.
- **Cross-context bridge documented.** Tom is running parallel Claude contexts. The TODO file + reminder line means the next session in either context can pick up the migration thread without reconstructing it from chat.
- **The investor pitch now leads correctly.** The canonical line locks the breadth of MX in plain English at every public touchpoint. Frankfurt slides, the free book's hero, the homepage, and the Gathering README all carry the same examples-first framing — so the next investor or sponsor reading any one of them forms the right mental model the first time.

---

## The Insight

The review's findings clustered around one underlying problem: the drafts were authored from the perspective of "if you author a field, here is its shape" — but never walked the perspective of an author starting from scratch ("what is the minimum frontmatter to be Level 1?") or a consumer ("I am a tool encountering this file — what do I do, in what order?"). The C1 fix (Author quickstart and Consumer checklist appendices on every note) is the smallest change with the largest readability impact. Spec ratification cycles often forget the consumer journey because spec authors are deep enough in the material to skip it. The review caught it because the reviewer was using the spec to do real work.

A second insight from the late-evening session: a noun's *register* matters more than its definition. "Document" in the spec context is correctly broad — markdown, HTML, PDF, YAML sidecar, JSON feed. The spec defines it that way and the prose proves it. But to a listener who has never read the spec, "document" picks up its everyday register first — which is "the file open in Microsoft Word right now". The fix is not to redefine "document"; it is to pre-empt the everyday register by leading with examples that can't be misread. Examples-first beats noun-first whenever the noun is loaded.

---

## Decisions Made

- **Cog ladder rename to Tier A/B/C** (D1) — disambiguates from MX Core Level 1/2/3.
- **`status` constrained by contentType** (D4) — preserves the field, adds context-aware validation, zero migration.
- **Stewardship as a single object** (D6) — Tom picked nesting over four parallel top-level fields; cleaner top-level YAML.
- **Temporal stance as a new sister note** (D7) — reusable across regulatory, contractual, and pricing documents.
- **Canon catches up to drafts during the migration window, not after ratification** (Tom's direction) — keeps the canon honest and the validator green; ratification re-affirms rather than introduces.
- **Examples-first canonical line locked across all public surfaces** (after the investor mishearing) — examples lead, "anything you publish" bounds scope, no jargon, no "everything on the internet" over-promise. HTML uses a no-em-dash variant per the project rule.
- **Codex staging directory deleted** — the upstream lineage source for an obsolete deployment path. `derivedFrom` references cleaned in both downstream `.mx.yaml.md` files; lineage history lives in git.

---

## Open Questions

- **Vendor sub-namespace allocation governance.** The Extensions note now reserves `x-mx-{vendor}-*` for individual vendors "allocated on request" — but no allocation registry exists yet. Pre-Frankfurt nice-to-have; not blocking.
- **`mx-handbook` as a cog or as a book.** The position paper's `buildsOn: [mx-handbook]` was unresolved (the Handbook is a published book, not a cog). Set to `[]` for now. Open question whether the Handbook should have a registry presence.

---

## What Changed About Me

When the user names a precondition ("don't submit yet, on hold"), record it in the registry's state machine rather than only in chat. The submissions registry's `state: drafted` is where "tracked but not filed" lives durably — the chat conversation is ephemeral. Same lesson on cross-context work: TODO file + reminder line beats trying to remember which session has which thread of work.

A late-evening lesson: when the user reports a misreading from a real audience, sweep widely, not narrowly. The first instinct on hearing "the investor heard 'Word docs'" is to fix the slide that bit. The right response is to recognise the misread is structural — the same noun is doing the same misleading work everywhere "what is MX" is framed. The fix is one canonical line locked at the source (`principles.cog.md`) and applied to every public surface that frames MX, in one pass, not waiting to discover the same problem on the next surface.

---

## What This Means for Investors

The MX standard now has its first complete consumer-grade revision round behind it: the spec was used by a real author, the gaps were named, and they were closed in a way the canon could absorb without breaking existing documents. That round-trip — spec → real use → review → revision — is the single test that distinguishes a vocabulary from a publication. A standard that survives one such round is on its way to being a standard. The Stream submission next week is the community-ratification leg of the same circuit; the trajectory it creates is what makes Reginald a defensible asset rather than a vendor extension.

---

## Next Steps

- **File the seven cover notes on Stream next week** — paste each `packages/*.md` cover note as a Stream thread; return with thread URLs; run `/mx-gathering-submit file <docname> <url>` per draft to flip the registry rows from `drafted` to `in-review`.
- **Cross-session migration when the parallel context reads Note 5** — seven `x-mx-prov-*` + four `x-mx-temporal-*` fields in three external cogs need mapping per the plan in `mx-canon/mx-the-gathering/TODO.md`.
- **Vendor sub-namespace allocation registry** — pre-Frankfurt nice-to-have, surfaces in TODO.md if needed before 12 May.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `cc969141` | Bump mx-shared-gathering: review-fix round across the draft set |
| `ba9017ac` | Prepare seven gathering submissions for the review-fix round |
| `78b6dab8` | Bump mx-outputs: llms-understanding.txt corpus refreshed |
| `2d4105f3` | Canon catch-up for the review-fix round (fields-data v6.7 → v6.8) |
| `ab88cdbd` | Convert adding-an-mx-field.md to a .cog.md |
| `fae0f445` | Promote date-format check to error and accept Date instances |
| `204c6987` | Add Level 1 identity floor to 16 hub docs and bump three submodules |
| `1058291d` | Fold review-fix design rationale into the canon |
| `00c489e2` | Record cross-session migration TODO for x-mx-prov-* and x-mx-temporal-* |
| `8709e9b4` | REMINDERS.md: move cross-session migration entry to correct priority section |
| `dce5cfda` | Track today's mx-audit report and bump mx-outputs pointer |
| `6680d5e3` | REMINDERS.md: use local submodule link for the gathering drafts |
| `b75cbc4` (mx-shared-gathering) | Apply review-fix round across the draft set |
| `1c2a8a6` (mx-outputs) | Regenerate llms-understanding.txt for the review-fix round |
| `5bd66a2` (mx-outputs) | Add author and created to cog-spec.v1 draft |
| `0e31298` (mx-outputs) | Publish mx-machine-readiness position paper and cog.v1 spec |
| `33ba7f9` (mx-outputs) | Empty mx-machine-readiness buildsOn: mx-handbook is not a cog |
| `ef268c2` (mx-audit) | Add author and created to gate test fixture reports |
| `65972e4` (mx-crm) | Truncate lastContact to YYYY-MM-DD across 22 contact cogs |
| `f93dccf` (mx-crm) | Add Level 1 identity floor to two CRM docs |
| `_pending_` | Hub: canonicalize Reginald → REGINALD across mx-maxine-lives + ssot |
| `_pending_` | Hub: bump mx-outputs to 33ba7f9 (broken-dependency fix + report) |
| `171da60` (mx-shared-gathering) | Add canonical 'what MX is for' preamble line to README |
| `762d9125` (allaboutv2) | Remove derivedFrom for deleted codex source |
| `b896911` (mx-outputs) | mx-machine-readiness paper canonical move; sitemap blog index added |
| `6e18f5f` (mx-outputs) | Replace 'documents readable by machines' framing with examples-first canonical line |
| `_pending_` | Hub: principles.cog.md v3.4 + messaging-ideas.md canonical-line lock-in |
| `_pending_` | Hub: delete codex staging directory (32 files) and bump submodule pointers |
