---
title: "Co-Directors Report — Provenance Generalised, Bio Consolidated, Staleness Swept, Trading-Name Sweep Continued, Audit PDF Self-Contained, Audit Driver Automated"
description: "Six streams: the audit-only provenance sidecar became a Reginald-level primitive every pipeline can adopt; five overlapping founder-bio files collapsed into one canonical pair (public + confidential) at repo root; a hub-wide staleness sweep refreshed canon REGINALD positioning, frontmatter dates, drafts terminology, and the tests/ README; a bounded trading-name follow-up sweep corrected 122 files across public HTML, canon, UBERCOG, and the Maxine splash; the audit PDF now ships self-contained with the full AI evidence chain embedded in its XMP metadata under xmp:ProvenanceAiPayload; and the manual Option B (four copy-paste skill commands between Phase 1 and Phase 3) became a single npm command, npm run audit:full, that drives the four LLM skills as sub-agents (three via thin SDK calls, audit-report via headless claude -p) with provenance logged at each step, plus a sibling npm run audit:provenance helper that wraps the correct exiftool -b extraction so the next operator does not trip the column-11 jq error."
author: "Tom Cranstoun"
created: 2026-05-23
modified: 2026-05-23
version: "1.4"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-23-evening-report.md
  purpose: "Six streams: the audit-only provenance sidecar became a Reginald-level primitive every pipeline can adopt; five overlapping founder-bio files collapsed into one canonical pair (public + confidential) at repo root; a hub-wide staleness sweep refreshed canon REGINALD positioning, frontmatter dates, drafts terminology, and the tests/ README; a bounded trading-name follow-up sweep corrected 122 files across public HTML, canon, UBERCOG, and the Maxine splash; the audit PDF now ships self-contained with the full AI evidence chain embedded in its XMP metadata under xmp:ProvenanceAiPayload; and the manual Option B (four copy-paste skill commands between Phase 1 and Phase 3) became a single npm command, npm run audit:full, that drives the four LLM skills as sub-agents (three via thin SDK calls, audit-report via headless claude -p) with provenance logged at each step, plus a sibling npm run audit:provenance helper that wraps the correct exiftool -b extraction so the next operator does not trip the column-11 jq error."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Provenance Generalised, Bio Consolidated, Staleness Swept, Trading-Name Sweep Continued, Audit PDF Self-Contained, Audit Driver Automated"]
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

A new `provenance-sidecar` skill carries the practice as a first-class entry in the skill catalogue, so future work that produces a regulated artefact (audit report, attestation, attested COG) inherits the same conventions without re-inventing them. A pre-commit hook (`pre-commit-provenance-sidecar.sh`) refuses to let any matching artefact ship without a sidecar — the doctrine bites at write time. `CLAUDE.md` and `README.md` were updated to document the practice as repo-wide policy rather than an audit oddity.

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

### 5. Audit PDF made self-contained: AI evidence chain embedded in XMP + EAA conformance + rubric hardening

The morning's provenance pair (`.provenance.ai.json` plus `.provenance.deterministic.json`) shipped with the AI sidecar pointer in PDF XMP but the chain itself stayed adjacent on disk. The closing prose said "the PDF carries a pointer to the AI evidence chain"; a regulator opening the PDF alone still needed file-system access to read the chain. The evening session closed that gap. The XMP injector (`mx-reginald/audit/scripts/bin/inject-mx-xmp.sh`) now reads the AI sidecar and embeds its full JSON body inside the PDF XMP under `xmp:ProvenanceAiPayload`. The PDF is self-contained: `exiftool -b -XMP-mx:ProvenanceAiPayload dkd-report.pdf | jq .` returns the 22-step AI chain with every rubric hash and reasoning trace. The deterministic chain stays adjacent on disk (size + scope: ~50 KB operator-relevant conformance evidence does not need to inflate the PDF; its pointer travels in `xmp:ProvenanceCompanion`). Two ancillary bugs surfaced and fixed: the Python emit pipeline was splitting the 800-line JSON into 540 separate XMP fields (tab/newline mishandling — fixed by using `exiftool -XMP-mx:Field<=file` syntax in a second pass), and the sidecar path resolved relative to `mx.pdf.sh`'s `/tmp/` staging directory instead of the PDF's output directory (fixed via a `MX_PROVENANCE_SIDECAR_DIR` env var the bash wrapper exports for the Python inside).

The audit template gained a closing section, *Practice What We Preach: This Audit's Own Evidence Chain*, that names the practice in client-facing prose: the AI chain in XMP, the deterministic chain on disk, the EAA Directive 2019/882 conformance (ISO 14289-1 PDF/UA Level 2, `pdfuaid:Part=1` declared, complete `StructTreeRoot`), the inspection command. The governance blog at `mx-outputs/md/blog/2026-05-23-governance-when-ai-acts.md` bumped from v0.1 to v0.3 to reflect the pair-of-sidecars shape and the embedded-payload practice; the published prose now matches what the pipeline actually does.

Five rounds of template + rubric hardening followed against the dkd.de/de fierce-critic + LLM-judgment findings, working from a baseline of 9 (5 fierce-critic + 4 LLM-judgment). The high-leverage mechanical wins all landed: (a) operator-prose sanitiser in the Audit Diagnostics section (no more `mx exec mx-audit`, `infill-report.js` or `Re-run gates` leaking into client deliverables); (b) vendor-SDK signature exclusion from the Inline Code Duplicates table (Matomo `_mtm`, Leadinfo `GlobalLeadinfoNamespace`, Google Tag Manager `dataLayer`, etc. no longer mis-framed as site template duplicates); (c) the `[X agents can access the site.]` placeholder bug — a regex that hardcoded "of 6" never matched the current "of 8" template — fixed in `tableHandlers/agentAccess.js`; (d) US to UK spelling collapses for `Optimization`, `Organization`, `Analyze`, and family added to `rewrite-report.js`'s post-rewrite TONE_FIXES; (e) WITHDRAWAL_PATTERNS filter ported from `audit-llm-judgment.js` to `audit-fierce-critic.js` so model self-cancellations ("withdrawing this finding", "no US/UK drift confirmed", "Skipping this") no longer count toward the exit code; (f) SYSTEM_PROMPT additions for fact-named-entity ("when the FACTS name X-Frame-Options, the recommendation MUST say X-Frame-Options"), vendor-blame (Matomo / Leadinfo / GTM are not the site's failure), cross-section voice consistency, sample-scoping every quantitative claim, hedge-vs-priority consistency, tier-label comparative-framing ban; (g) Schema Maturity table dropped the misleading "Typical SDQ" column that implied score-driven tier assignment.

After five rounds the LLM-side finding count bounces between 2 and 8 — the LLM judges re-score fresh prose each run, so the floor is noisy rather than zero. The structural fixes are sticky; the bounce is signal in itself (the gates are still finding things to flag, which is the point). The PDF carries the full evidence chain, the closing prose names the practice, the EAA conformance is declared, and the rubric forbids the patterns that produced last round's findings.

### 6. Audit driver automated: npm run audit:full + audit:provenance helper

The higher-quality LLM-driven Phase 2 (Option B in the audit cog) had been the only non-scripted surface in the workflow: an operator ran `mx exec mx-audit ... --phase1-only`, then copy-pasted `/audit-scores`, `/audit-discovery`, `/audit-access`, `/audit-report` into a Claude Code session by hand, then ran `mx exec mx-audit --gates ...` to finish. This session closed that gap. A new pipeline mode, `--full-llm`, dispatches into `scripts/audit-llm-phase2.js` between Phase 1 and Phase 3, which drives the four skills as sub-agents and chains straight into the gates. The three "mechanical" skills (audit-scores, audit-discovery, audit-access) run as thin single-shot Anthropic SDK calls: skill body as system prompt, Phase 1 outputs aggregated into the user message, structured output via a `submit_skill_output` tool. The fourth, audit-report, is delegated to a headless `claude -p` session because its narrative work depends on the full skill-orchestration code path (template selection, two-pass placeholder fill, readability review, LLM confirmation pass). Each step records to the future report's `.provenance.ai.json` sidecar via the Reginald primitive, so the same evidence chain the morning's stream embedded in the PDF now extends to the automated invocations. Exposed as `npm run audit:full -- <url> [--pages N]`. Bails fast on first failure with a `--resume-from` resume command printed to stderr.

The hybrid SDK + claude-p shape was a deliberate trade-off. A pure-headless implementation (all four via `claude -p`) keeps zero forked logic but adds wall-clock latency: each headless Claude Code session spins up cold. A pure-SDK implementation forks the four skill bodies into hand-written tool-use loops that drift the moment a skill changes. The hybrid uses the SDK where the contract is small enough to express as a single tool call (scores + discovery + access produce structured findings) and keeps the canonical code path for the prose-heavy report.

The session also surfaced a separate operator-ergonomics gap: the documented extraction command in CLAUDE.md and the audit template for pulling the AI chain out of a generated PDF was correct but easy to mistype. The `-b` flag (raw binary output) is mandatory because without it `exiftool` prepends a labelled header that `jq` chokes on at column 11. A new wrapper at `scripts/bin/mx.audit.provenance.sh` makes the flag impossible to forget, exposed as `npm run audit:provenance -- <pdf> '<jq-filter>'`. The flag rule was added to three surfaces: CLAUDE.md provenance bullet, the provenance-sidecar skill's inspect section, and the audit cog's new "Inspect a generated PDF's AI evidence chain" subsection. The web-audit-suite template's closing *Practice What We Preach* section was corrected in lockstep so the auto-regenerated `golden-skeleton.md` fixture picks up the right command for every future report.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 8 earlier streams (provenance + bio + staleness + trading-name round 1) + 3 trading-name round 2 + 2 audit-stream submodule commits (allaboutv2 e4e97fe7, mx-outputs 8e26eb3) + pending hub commits for the audit-stream hardening |
| Files changed | ~165 earlier + ~25 in the audit-stream rubric/template/script hardening |
| Lines added | ~744 earlier + audit-stream additions (SYSTEM_PROMPT rules, TONE_FIXES regex, vendor-SDK filter, sanitiser, XMP payload injection, EAA closing section) |
| Lines removed | ~497 earlier + audit-stream removals (Schema Maturity Typical-SDQ column, llms-full.txt conditional hedge, misleading note text) |
| Repositories | 4 (hub + mx-shared-gathering + allaboutv2 + mx-outputs) |
| Audit PDF self-containment | Full AI evidence chain (22 LLM steps, 27 KB JSON) embedded in PDF XMP under xmp:ProvenanceAiPayload; PDF inspectable via `exiftool -b -XMP-mx:ProvenanceAiPayload report.pdf \| jq .` |
| EAA conformance | Declared in XMP (`pdfuaid:Part=1`) and named in closing prose; ISO 14289-1 Level 2; `StructTreeRoot` present |
| Fierce-critic + LLM-judgment baseline → final | 9 findings → 8 findings; mechanical patterns retired (US spellings, placeholder leaks, vendor-SDK blame, operator-prose Audit Diagnostics); residual is LLM-judge noise floor on soft phrasings |
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
- End-to-end smoke-test `npm run audit:full -- https://www.dkd.de/de/ --pages 5` once with `ANTHROPIC_API_KEY` set and the `claude` CLI on `PATH`; confirm the four `claude-code:audit-*` / SDK steps land in the report's `.provenance.ai.json` alongside the existing rewrite + critic + judgment steps. The hybrid driver was syntax-verified and dispatcher-tested this session but the wall-clock LLM run was not executed (10+ minute runtime, API credit cost).

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
| 81a72be (mx-outputs) | Directors evening report v1.2 add trading-name-sweep stream |
| 3ae01c90 | REMINDERS + CHANGELOG: trading-name sweep round 2 |
| e4e97fe7 (allaboutv2) | notebook-validator: add cell-quality checks for headings, emoji, line breaks |
| 8e26eb3 (mx-outputs) | Audit deliverables + governance blog: dkd.de/de re-run with split provenance + embedded AI payload |
| a28f1b5f | Audit pipeline: AI provenance payload embedded in PDF XMP + EAA conformance + rubric/template hardening (5 rounds) |
| b1552748 | Docs + REMINDERS: 2026-05-23 evening round 2 (audit PDF self-contained + EAA + rubric hardening) |
| 6bddb91d (mx-outputs) | Directors evening report v1.3: audit-PDF-self-contained stream |
| c796af56 | LEARNINGS: three rules from the 2026-05-23 evening round 2 (tab/newline pipeline + staging-path resolution + backticks in template literals) |
| ec6561d0 (mx-outputs) | README index regen for dkd.de/de round-2 audit + governance blog v0.3 |
| _pending_ (hub) | npm run audit:full hybrid driver (SDK + claude -p) + npm run audit:provenance helper + em-dash sweep on new prose + template fix propagated to golden fixture |
| _pending_ (mx-outputs) | Directors evening report v1.4: add audit-driver-automated stream |
