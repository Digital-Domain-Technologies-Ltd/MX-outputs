---
title: "Co-Directors Report — Provenance Generalised, Bio Consolidated, Staleness Swept, Trading-Name Sweep Continued"
description: "Four streams: the audit-only provenance sidecar became a Reginald-level primitive every pipeline can adopt; five overlapping founder-bio files collapsed into one canonical pair (public + confidential) at repo root; a hub-wide staleness sweep refreshed canon REGINALD positioning, frontmatter dates, drafts terminology, and the tests/ README; a bounded trading-name follow-up sweep corrected 122 files across public HTML, canon, UBERCOG, and the Maxine splash."
author: "Tom Cranstoun"
created: 2026-05-23
modified: 2026-05-23
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-23-evening-report.md
---

# Co-Directors Report — Provenance Generalised, Bio Consolidated, Staleness Swept

**Date:** 23 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

Three structural tidy-ups landed this evening. First, the provenance sidecar that the morning's audit work had wired in as an audit-only feature was lifted into a Reginald-level primitive every artefact-producing pipeline can call, with a generic adjacent-to-artefact helper, a pre-commit hook that refuses to ship an artefact without one, and a dedicated skill. Second, five overlapping files that each carried a version of the founder's biography were consolidated into a single canonical pair at the repo root: `ABOUT-TOM.md` (public-safe) and `ABOUT-TOM-CONFIDENTIAL.md` (gitignored, commercials only). Four duplicate bio files were retired; their inbound graph edges still resolve because the canonical carries `slug: tom-cranstoun`. Third, a hub-wide staleness sweep checked four classes of drift (generated indexes, frontmatter `modified:` lag, content correctness, duplicate-document drift) across the hub and writable submodules. The headline finding: the hub is healthier than feared. Real but bounded fixes landed in canon REGINALD positioning (mx-concepts Layer 9 and product-brief), gathering-draft terminology (`.cog.md` leak scrubbed from three drafts), one stale phrase in a published Protocols chapter, the legal-entity wording for CogNovaMX (it remains a trading name, not a registered Ltd), and a full rewrite of `tests/README.md` to match the actual test surface.

---

## What Was Done

### 1. Provenance practice raised to a Reginald-level primitive

The audit pipeline's `.provenance.json` sidecar from the morning was a good shape but lived under `mx-reginald/audit/lib/provenance-log.js` — audit-only by accident of where it was authored. The primitive moved up to `mx-reginald/lib/provenance.js` and gained a second calling convention: instead of a directory, callers now pass the path to the `.provenance.json` file directly, so any pipeline can drop a sidecar adjacent to the artefact it produced. The audit pipeline switched to the new convention and now writes its sidecar next to the published deliverable in `mx-outputs/audit/<date>/<hostSlug>/` rather than into the gitignored `audit-data/` tree, so the evidence chain ships with the artefact.

A new `provenance-sidecar` skill carries the practice as a first-class entry in the skill catalogue, so future work that produces a regulated artefact (audit report, attestation, certificate of genuineness) inherits the same conventions without re-inventing them. A pre-commit hook (`pre-commit-provenance-sidecar.sh`) refuses to let any matching artefact ship without a sidecar — the doctrine bites at write time. `CLAUDE.md` and `README.md` were updated to document the practice as repo-wide policy rather than an audit oddity.

This is eating our own dog food on the agentic-AI evidence-chain doctrine from the morning's governance blog draft. Provenance was the right answer for the audit; it is the right answer for everything Reginald produces.

### 2. Founder biography consolidated to a canonical pair

Five files in the repo each carried a partial biography of Tom Cranstoun: the SSOT founder profile under `mx-canon/ssot/business-case/founder-profile/`, the consulting-narrative profile under `mx-canon/mx-maxine-lives/profiles/`, the CRM contact cog under `mx-crm/contacts/`, the Reginald identity record under `mx-reginald/identities/`, and the session-start bio block inside `mx-canon/mx-maxine-lives/project-context.md`. Maintenance was a five-place sweep every time a fact changed, and the day rate plus generated wealth figures were leaking into surfaces that should never have carried them.

The consolidation produced a canonical pair at the repo root. `ABOUT-TOM.md` is the public-safe biography: career narrative since 1977, AEM track record with named clients, LinkedIn recommendations, philosophy, published record, speaking, books, contact. `ABOUT-TOM-CONFIDENTIAL.md` is gitignored and carries only the commercial detail that must not appear on public surfaces — day rate and generated wealth — pointing at the public file for the rest. The four duplicate bio files were deleted (committed in the provenance-sidecar docs commit), their empty parent directories dropped, and the project-context bio block replaced with a one-line pointer that retains only the session-operational rules that do not belong in the biography (CogNovaMX capitalisation rule, Twitter handle, conference role, epiphany source).

The canonical carries `slug: tom-cranstoun` so the existing graph edges (`refersTo: tom-cranstoun` in the Maxine CRM contact and the Salva meeting notes) still resolve after the underlying file moved. `CLAUDE.md`, `MEMORY.md`, the Maxine Lives `unknown.md` template, and the Reginald identities README all rewired to point at the new canonical. The Reginald registry index regenerated cleanly with no dangling references; the index-freshness gate passes.

### 3. Staleness sweep — hub and writable submodules

A worry surfaced that markdown across the hub had quietly gone stale. Three parallel investigations checked the four classes of drift that tend to bite: generated indexes out of sync with their sources, frontmatter `modified:` dates lagging git history, content references to things that no longer match canon, and duplicate or near-duplicate copies drifting apart. The headline finding: the hub is healthier than the worry suggested. Almost everything touched was either a date bump on canon-clean content or a small REGINALD-positioning fix that current canon (CLAUDE.md) had already settled but the older mx-os docs had not yet absorbed. No mission-drift between canonical surfaces, no broken five-part framing, no orphaned archives.

Real fixes that landed: `npm run mx:heal -- --indexes --apply` confirmed all four tracked indexes were content-fresh (the routing-registry dirtiness in `git status` was a timestamp ghost from a prior session, restored cleanly). In `mx-canon/mx-os/`, the REGINALD Layer 9 entry in `mx-concepts.cog.md` and three places in `product-brief.md` were rewritten from the old "package registry for MX OS tools" framing to the current canonical "REGINALD = CogNovaMX's proprietary implementation of the open registry layer that the cog standard defines". The `uber-plan.cog.md` Current State header was refreshed to acknowledge the mx-maxine-app implementation has not changed since 2026-02-12 — the substrate work since then has been at the hub level (audit pipeline, provenance, founder bio). One stale phrase in `datalake/manuscripts/mx-books/mx-protocols/protocols/chapter-20-cogs-and-reginald.md` ("MX Reginald ships with core action-cogs") was corrected to "The REGINALD registry indexes a set of core action-cogs". A broken `.claude/plans/...` link in `REMINDERS.md` was neutralised (plans live in the user home dir, not the repo).

Two corporate-positioning corrections also landed. `mx-reginald/README.md`'s Company section called the parent "CogNovaMX Ltd" and listed "Digital Domain Technologies Ltd" as one of its assets — structurally wrong now that CogNovaMX is the trading name and DDT is the parent. Restructured to "CogNovaMX (the trading name of Digital Domain Technologies Ltd)" and removed the redundant DDT bullet from the "remain with" list. Same fix in `mx-crm/README.md` description and prose. Worth noting because the README was written recently (2026-05-20) yet drifted: the trading-name doctrine needs to land in every public-facing surface, not just the canonical five-part framing.

Three gathering drafts (`draft-contract-fingerprinting.md`, `draft-core-metadata.md`, `draft-carrier-formats.md`) carried `.cog.md` as if it were the canonical file extension for the carrier — a CogNovaMX-leaky framing in a vendor-neutral standards document. Section headers in `draft-carrier-formats.md` §3.1-3.5 renamed to carrier names (Markdown, HTML, JavaScript, CSS, Image); File-types rows scrubbed of `.cog.*`. Three scattered example references also cleaned. The only remaining `.cog.md` mention is the §7 out-of-scope pointer to the MX Cogs note, which is the allowed exception. Frontmatter `date:` fields bumped on five drafts where they lagged 6-21 days behind git history.

The hub-side `mx-canon/README.md`, `mx-canon/SOUL.md`, `scripts/SOUL.md` got date bumps after spot-reading confirmed content is timeless. `tests/README.md` was rewritten end-to-end: the old description claimed "LaTeX/PDF generation testing, illustration workflow validation, and image sizing experiments" but the actual surface now covers freshness gates, the PDF pipeline contract, shell-tooling tests, audit pipeline, MCP helper, and the legacy LaTeX experiments. New structure groups tests by category matching the real `npm test` chain.

Two items surfaced but deferred to Tom's judgement, then resolved mid-session: the REGINALD-positioning rewrite was confirmed before edits landed, and the legal-entity wording was confirmed (CogNovaMX is still a trading name, not a Ltd) before propagating across files.

### 4. Trading-name follow-up sweep — bounded pass across public HTML, canon, UBERCOG, splash

The first staleness sweep flagged in REMINDERS that many "CogNovaMX Ltd" occurrences across the repo still needed the same correction. A second pass this evening tackled the bounded subset agreed mid-session: public-facing HTML on `allaboutv2/` and `mx-outputs/mx-site/blog/`, plus the canonical site (`mx-outputs/mx-site/about/` already on the canonical pattern), plus all of `mx-canon/`, plus `UBERCOG.cog.md` and `mx-maxine-app/src/splash.html`. Out of scope: `mx-crm/`, `mx-shared-gathering/draft-provenance.md`, `mx-reginald/docs,pr,plans,publishers.json,audit/templates`, `scripts/cogs,qr-code-generator`, `datalake/{pipeline,knowledge,assets,registries}`, `.claude/skills`, generated mirror files (`mx-outputs/reginald/cogs/`, `mx-outputs/html/books/`, `mx-outputs/.well-known/`), and book manuscripts (Handbook ISBN-locked, Protocols pending imprint decision).

The bounded sweep landed across three repos: 49 files in `allaboutv2/` (demos, landing, cogs, .well-known), 6 files in `mx-outputs/mx-site/blog/`, and 70+ files in the hub (mostly `mx-canon/`, plus `UBERCOG.cog.md`, `mx-maxine-app/src/splash.html`, and the auto-regenerated `mx-canon/mx-maxine-lives/routing-registry.json` triggered by the canon edits). Substitution patterns: Schema.org JSON-LD `"name"` becomes `"CogNovaMX"`, `"legalName"` becomes `"Digital Domain Technologies Ltd"` (rare but critical fix at `allaboutv2/index.html:50`), `"alternateName": "CogNovaMX Ltd"` preserved as the canonical historical-name slot (all 20 occurrences left intact); YAML `author:` and HTML `<meta name="author">` corrected to "CogNovaMX"; footer copyrights restructured to the canonical "2026 Digital Domain Technologies Ltd, trading as CogNovaMX. All rights reserved." form; body prose `CogNovaMX Ltd` swept to `CogNovaMX`. The `allaboutv2/index.html` Organization block also gained the missing `alternateName` line to complete the canonical three-field pattern that `mx-outputs/mx-site/about/about.html` lines 51-53 already carry.

Remaining work tracked in REMINDERS: the internal/non-public surfaces (`mx-crm/`, `mx-shared-gathering/draft-provenance.md`, `mx-reginald/docs,pr,plans`, `datalake/`, scripts cogs, `.claude/skills`) plus generated mirrors that will catch up on next regen. Book manuscripts remain locked per the imprint constraints already tracked separately.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 8 (3 earlier + 1 hub staleness + 1 hub REMINDERS + 1 hub CHANGELOG + 1 mx-shared-gathering + 1 mx-outputs report v1.1) plus 3 follow-up trading-name commits (allaboutv2 ad3edd5d, mx-outputs e2466eb, hub 0a8113a5) |
| Files changed | ~165 (~25 earlier + 18 staleness sweep + 122 trading-name sweep) |
| Lines added | ~744 (earlier) plus staleness-sweep + trading-name-sweep deltas |
| Lines removed | ~497 (earlier) plus staleness-sweep + trading-name-sweep deltas |
| Repositories | 3 (hub + mx-shared-gathering + allaboutv2 + mx-outputs) |
| Trading-name corrections this segment | 122 files across 3 repos (49 allaboutv2 + 6 mx-outputs + 77 hub including auto-regen of routing-registry) |
| Schema.org `alternateName` slots preserved | 20 (canonical pattern: name/legalName/alternateName triple) |
| Bio surfaces collapsed | 5 → 2 (1 public + 1 gitignored) |
| Files deleted | 6 (4 bios + 2 folder-metadata stubs) |
| New canonical files at root | 2 (ABOUT-TOM.md, ABOUT-TOM-CONFIDENTIAL.md) |
| Stale REGINALD descriptions repositioned | 2 canon docs + 1 chapter + 2 READMEs |
| `.cog.md` leak occurrences scrubbed from drafts | 13 of 14 (one allowed exception kept) |
| Tracked indexes confirmed fresh | 4 of 4 (routing-registry, .aspell-mx.pws, mx-reginald/index.json, definitions-index.md) |

---

## Why It Matters

All three streams are governance work, not feature work. The provenance generalisation moves Reginald a step closer to "every artefact Reginald produces carries its own evidence chain" — the position the morning's blog draft argued for. The bio consolidation closes a quiet leak surface: the day rate and generated wealth figures had been duplicated across files with mixed audiences, and a careful reader of the wrong file could have found them. The staleness sweep proved the hub does not have the rot problem the worry suspected — but it did surface real positional drift on REGINALD framing and the CogNovaMX trading-name question. The three changes together reduce the surface area future maintenance has to touch and tighten what the public-facing surfaces say about who owns what.

---

## Next Steps

- Watch for downstream surfaces that still pull the founder bio from one of the four retired locations (LinkedIn auto-publishers, sponsor docs, books). Repoint each one at `ABOUT-TOM.md` as they surface.
- Audit whether any other artefact-producing pipeline beyond the audit suite should adopt the provenance sidecar convention now that the primitive sits at the Reginald level.
- Sweep other public-facing surfaces (sponsor decks, investor one-pager, contracts, sponsor-pitch doc) for "CogNovaMX Ltd" wording and apply the same trading-name correction.
- Consider whether a recurring staleness sweep (monthly or per-quarter) is worth automating, or whether the existing `tests/test-indexes-fresh.js` and frontmatter-validator gates plus the new pre-commit-provenance hook are sufficient coverage.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 2717f4ec | Provenance practice: Reginald-level primitive + generic wrapper + pre-commit hook + skill |
| a83e6ec1 | Docs: CLAUDE.md + README.md document the provenance-sidecar practice |
| f76e393e | Founder bio consolidated to ABOUT-TOM.md + ABOUT-TOM-CONFIDENTIAL.md; four duplicates retired |
| 8f6b15c3 | CHANGELOG: 2026-05-23 evening entry for founder bio consolidation |
| a6ae95e5 | UBERCOG: surface ABOUT-TOM.md in boot chain + bump mx-outputs README regen |
| 63f75d0 (mx-shared-gathering) | Drafts: bump frontmatter dates and scrub .cog.md terminology leaks |
| 4bcdc1b (mx-outputs) | Directors evening report v1.1 add staleness-sweep stream |
| 41a4adbb | Staleness sweep: REGINALD positioning, CogNovaMX trading-name, drafts terminology, tests README |
| 60787901 | REMINDERS: 2026-05-23 evening staleness sweep |
| 7c62c0c3 | CHANGELOG: 2026-05-23 evening staleness sweep entry |
| ad3edd5d (allaboutv2) | Trading-name sweep: CogNovaMX Ltd -> CogNovaMX across demos + landing |
| e2466eb (mx-outputs) | Trading-name sweep: CogNovaMX Ltd -> CogNovaMX in 6 blog posts |
| 0a8113a5 | Trading-name sweep: CogNovaMX Ltd -> CogNovaMX across canon, UBERCOG, splash |
| _pending_ (mx-outputs) | Directors evening report v1.2 add trading-name-sweep stream |
| _pending_ (hub) | REMINDERS + CHANGELOG: trading-name sweep round 2 |
