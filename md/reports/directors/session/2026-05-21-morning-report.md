---
title: "Co-Directors Report — Founder Commitment Published, Governance Series Trimmed, mx-site Contrast Lifted, Audit Pipeline Hardened, Audit Docs Aligned, Content Ops Framing Spread Across the Estate, Unified Pre-Push Suite + mx:heal Self-Healing CLI"
description: "Morning segment: the founder's commitment not to be the main sponsor of The Gathering published with the trigger condition stated. The first governance post trimmed to remove FAIR, C2PA, and Adobe Experience Manager references; the WordPress kill-switch case kept as the publicly-litigated example. DDT-side canon docs made self-contained except for links to the public governance series. Late-morning: --mx-text-muted lifted across mx-site to clear WCAG AA on every documented background; audit pipeline gains an apex/www hostname normaliser, a 15-minute sitemap cache TTL, and a Phase 1 sanity gate that refuses to ship a sub-3-page report without --allow-thin. Mid-morning close: four audit-related skill and cog docs rewritten to the canonical audit-data/domains/<hostSlug>/ storage tree, closing two propagation REMINDERS in one pass. Late-morning second wave: Content Ops introduced as a new top-layer framing above the canonical five-part framing, with a paired MX what-it-is / why-it-matters definition; propagated across canon, the two test-bed chapters, fifteen mx-site pages, four outbound docs, and the agent corpus. Late-morning third wave: the pre-push hook gains five new validation gates (orphan directories, index freshness, fields:gate, mx-validator on changed files, link integrity) in soft-warn mode until 2026-07-01, paired with a new mx:heal self-healing CLI that proposes skeletons, rewrites lineage drift, regenerates stale indexes, and offers field-conformance auto-fixes; 182 orphan directories filled in one apply pass."
author: "Tom Cranstoun"
created: 2026-05-21
modified: 2026-05-21
version: "1.4"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-21-morning-report.md
---

# Co-Directors Report — Founder Commitment Published, Governance Series Trimmed, mx-site Contrast Lifted, Audit Pipeline Hardened

**Date:** 21 May 2026 — Morning
**Segment:** morning (since midnight)
**Version:** 1.4 (unified pre-push validation suite + mx:heal self-healing CLI appended after the Content Ops work)

---

## Summary

The doctrinal commitment Tom has been preparing for, and would not draw down on lightly, landed in canon and on the public blog this segment. DDT Ltd will not exceed the 25% concentration cap that binds every Founding Partner; the founder's approval on governance changes is conditional and time-limited, retiring on the day The Gathering is fully funded by sponsorship and no longer depends on DDT subsidy. The position is published in a new doctrine post and is now part of the DDT-side commercial documents that sponsors, regulators, and peer agencies read.

In the same segment the first governance post was trimmed: FAIR, C2PA, and Adobe Experience Manager cases removed in favour of the publicly-litigated WordPress kill-switch story. The doctrine survives the cuts; what is gone is the named critique of fellow standards efforts and a CMS Tom consults on. Neutral framing, kept where the public record is unambiguous.

Later in the morning two pieces of plumbing work landed. Tom flagged that the /learn pages looked washed out on a phone; the cause traced to the muted text token sitting at 4.12-6.42:1 on the navy palette, borderline AA at desktop, painful on a phone in daylight. Lifted the token across mx-site so every documented pairing clears AA. Separately, four files in the audit pipeline were hardened after the dkd.de German-language audit shipped a blank report yesterday on a stale single-URL sitemap cache: apex/www are now treated as the same site, the sitemap cache TTL drops from 24 hours to 15 minutes, the multilingual deliverable slug fix from yesterday gets a sibling guard in infill-report, and Phase 1 now refuses to ship a sub-three-page report without an explicit --allow-thin opt-in. The dkd.de /de deliverable was re-run cleanly with the fixes in place.

A short interview pass then closed the documentation-propagation debt. The audit-related skills and cogs still described the pre-2026-05-15 storage layout (`mx-reginald/audit/results/<hostname>/`) and the pre-2026-05-20 slug placeholder (`<hostname>` rather than `<hostSlug>`), and `mx-audit.cog.md` carried no documentation for the new `--allow-thin` flag and 3-page minimum. Both REMINDERS items closed together in one rewrite touching four files. The cog body now also names the Phase 1 sanity gate as a first-class behaviour rather than an internal implementation detail.

---

## What Was Done

### 1. New governance post: "Not the Main Sponsor"

Published the founder's commitment at [mx.allabout.network/blog/governance/not-the-main-sponsor.html](https://mx.allabout.network/blog/governance/not-the-main-sponsor.html). The post opens with the direct statement, recaps the WordPress lesson that motivates it, names the 25% cap with no founder exception, and defines the trigger condition for veto-relinquishment. The trigger pairs the founder's right to backstop with the founder's responsibility to backstop: when financial dependency on DDT subsidy is gone, the veto goes with it. The closing section names three limits the commitment does not fix (personnel overlap with Doğu Abaris, DDT's potential commercial dependency on REGINALD success, the case where the founding cohort fails to grow at all). Approximately 1,500 words; six-minute read.

### 2. First post trimmed to neutral framing

The previously-published "Whose Standard Is It Anyway?" was trimmed in line with the policy decision that the public governance series should not name fellow standards efforts or vendors critically. FAIR, C2PA, and Adobe Experience Manager case sections removed. The did:plc structural footnote removed. The "How MX is governed" line referencing FAIR cryptography neutralised. The closing test list trimmed to "any open standard" rather than naming specific examples. The WordPress case is kept in full — Mullenweg, WordPress.org infrastructure, WP Engine, Marucchi quote — because that is the publicly-litigated case and the doctrine rests on it. The structural failure modes summary preserved but no longer name-checks specific competitors. Word count down from 1,900 to 1,100; reading time 10 min to 6 min.

### 3. DDT-side canon docs made self-contained

The 25% cap and the founder commitment landed as new sections in three commercial-facing canon files: [`business-plan.md`](../../../../mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/business-plan.md), [`canonical-sponsor.md`](../../../../mx-canon/mx-maxine-lives/businesses/the-gathering/canonical-sponsor.md), and [`business-sponsor-pitch.md`](../../../../mx-canon/mx-maxine-lives/businesses/the-gathering/business-sponsor-pitch.md). Per Tom's instruction these docs are now self-contained briefings: all internal cross-links to other mx-canon files removed; only the public governance-series links to mx.allabout.network/blog/governance/ remain. The intent is that any sponsor, investor, or regulator can read any of these documents on its own and reach the doctrine.

### 4. Wordlist additions

10 new terms accepted via [`spell:sweep:apply`](../../../../scripts/spell-sweep.sh): `Abaris`, `DDT's`, `Doğu`, `IDHL`, `Ltd's`, `REGINALD's`, `SSOT`, `funder`, `funders`, `verifier`. All proper nouns or domain-vocabulary terms that recur in sponsor and registry-protocol prose. Wordlist total: 658 entries.

### 5. mx-site contrast lift — /learn looked washed out on a phone

Tom flagged the /learn pages reading as low-contrast on a mobile phone in daylight. Two Explore agents mapped the cause: the `--mx-text-muted` token (`#8a9bb5`) was carrying every secondary text surface across mx-site and sitting at 4.12-6.42:1 on the navy palette - borderline AA on the page background, failing AA (4.5:1 required) on the deeper card surface. No mobile breakpoint adjusts colour, so the borderline contrast on desktop becomes the painful contrast on a phone. The fix was structural rather than local: lifted `--mx-text-muted` to `#b3c1d4`, which clears AA on every documented background (6.05:1 on the mid-blue card, 9.40:1 on the page bg). Separately, `.proposition-card p` was reading as muted but is actually body copy, so it now uses `--mx-text` directly - card prose reads at full body contrast and the muted token returns to its designed role of bylines, timestamps, helper text. The brand guide token block, swatch chip, and AA pairing table were updated to match the live CSS in lockstep. The change cascades to every page using proposition cards (homepage, /learn, /blog, /books, /services, /reginald, /the-gathering, /blog sub-indexes).

### 6. Audit pipeline hardening — four bug fixes from yesterday's dkd.de incident

Yesterday's German-language audit (`dkd.de` /de path) shipped a blank report because Phase 1 collected only the entry URL: a strict hostname filter dropped `www.dkd.de` when the entry was `dkd.de`, the sitemap URL cache served the single-URL result for the next 24 hours, and infill-report's deliverable folder was named off the bare hostname instead of the path-aware slug. Four files now carry the fix:

- [`mx-reginald/audit/src/utils/urlUtils.js`](../../../../mx-reginald/audit/src/utils/urlUtils.js) - apex/www are treated as the same site; `www.dkd.de` and `dkd.de` no longer fight in the isValidUrl filter.
- [`mx-reginald/audit/src/main.js`](../../../../mx-reginald/audit/src/main.js) - sitemap URL cache TTL reduced from 24 hours to 15 minutes. Still amortises across rapid debugging reruns but invalidates before stale data bridges a session boundary.
- [`mx-reginald/audit/bin/infill-report.js`](../../../../mx-reginald/audit/bin/infill-report.js) - PDF output path uses the slug-aware `outreachDir` basename (e.g. `dkd.de-de`) instead of the bare hostname, matching the multilingual folder convention. Removed the redundant inline single-page warning; the pipeline-level sanity gate below is the real guard.
- [`scripts/audit-pipeline.js`](../../../../scripts/audit-pipeline.js) - Phase 1 sanity gate. Reads `audit_averages.json` (auditAverages.js skips writing it when no pages were audited, so an absent file means zero); if the audited page count is below three, the report stage refuses to run and prints the likely causes (stale cache, WAF block, sitemap empty after filters) with the exact remediation commands. `--allow-thin` opts in to a one-page audit for landing-page work.

### 7. dkd.de /de audit deliverable re-run

With the four fixes above in place, the German audit was re-run cleanly. The new deliverable folder at [`mx-outputs/audit/2026-05-21/dkd.de-de/`](../../../../mx-outputs/audit/2026-05-21/dkd.de-de/) carries the 11 expected files (report markdown, sidecar CSVs, scope and finding-page JSON, voice review, robots.txt snapshot, audit log).

### 8. Audit docs aligned to the canonical storage tree

The pre-2026-05-15 audit storage layout split into three roots: `mx-reginald/audit/` for code, `audit-data/domains/<hostSlug>/{cache,results}/` for tool data, `mx-outputs/audit/<date>/<hostSlug>/` for client deliverables. The path-aware `<hostSlug>` placeholder landed 2026-05-20 so multilingual audits get sibling folders. Four audit-related docs still described the older `mx-reginald/audit/results/<hostname>/` layout and the older `<hostname>` placeholder. An interview pass scoped the rewrite (interview-me detected both layers of drift; Tom chose full rewrite), then four files were brought into lockstep with CLAUDE.md and the actual code:

- [`.claude/skills/audit-collect/skill.md`](../../../../.claude/skills/audit-collect/skill.md) - 29-ref pass: paths, JS snippets, shell variables, bin-script invocations. Three layout variants (`mx-reginald/audit/{results,.cache,domains}/`) collapsed to one. The "How to derive the hostname" section became "How to derive the hostSlug" with the canonical derivation in shell. JS snippet for the standalone AI-attribution collector rewritten to compute `hostSlug` properly.
- [`.claude/skills/audit-site/skill.md`](../../../../.claude/skills/audit-site/skill.md) - 7-ref pass: per-host result/cache/origin paths rewritten, verify-audit-report.js example uses per-host roots, `--allow-thin` argument documented alongside `--force-fresh`.
- [`scripts/cogs/package-audit.cog.md`](../../../../scripts/cogs/package-audit.cog.md) - 1-ref pass: `<host>` placeholders to `<hostSlug>`, path-aware key examples added (`www.dkd.de-de`, `www.dkd.de-en`).
- [`scripts/cogs/mx-audit.cog.md`](../../../../scripts/cogs/mx-audit.cog.md) - help text adds `--allow-thin` flag and updates the `--report` path; a new "Phase 1 sanity gate" prose section explains the 3-page minimum and the four likely causes (stale sitemap cache, WAF block, sitemap empty after filters, deliberate single-page) with their remediation commands; Standard Output Paths table and `<hostSlug>` definition aligned; final-delivery-folder row added.

The change closed two REMINDERS in one commit: the 2026-05-20 path-aware-slug propagation item (3 docs) and the 2026-05-21 `--allow-thin` documentation item (2 docs). Net effect: an agent or operator reading any of the four files now sees the same storage layout the code actually uses, and the new sanity gate is documented as a first-class behaviour.

### 9. Content Ops introduced as a new top-layer framing, propagated across 25 surfaces

A late-morning interview surfaced a framing shift Tom has been working through: positioning **Content Ops** (the discipline of creating, managing, improving, publishing, distributing, archiving, and retiring content across every digital channel) as a new top layer ABOVE the canonical five-part framing (MX / Gathering / COGs / registry / REGINALD). MX in this picture is the layer that keeps Content Ops work usable when an AI agent encounters the file outside the environment that produced it. The interview also produced a paired canonical statement for MX itself: a WHAT line (metadata that records a file's provenance, context, and intended use, and travels with the file) and a WHY line (what keeps Content Ops work usable when an agent encounters the file outside the environment that produced it). Decisions taken in the interview: independent use of the "Content Ops" term (no Bailie/Halvorson lineage cited), no Gathering draft note (house framing, not standards-body material), CLAUDE.md gets a new "Content Ops (top layer)" section above the five-part framing rather than renumbering, "context pool" is descriptive prose for now rather than a canonised term.

Propagated across 25 surfaces in one pass:

- **Canon (3):** [`mx-canon/ssot/principles.cog.md`](../../../../mx-canon/ssot/principles.cog.md), [`CLAUDE.md`](../../../../CLAUDE.md), [`datalake/manuscripts/mx-books/mx-appendices/appendix-m-index-of-metadata.md`](../../../../datalake/manuscripts/mx-books/mx-appendices/appendix-m-index-of-metadata.md).
- **Test-bed chapters (2):** [Free-book ch00](../../../../datalake/manuscripts/mx-books/free-book/chapter-00/chapter-00-free.md) and [Protocols ch00](../../../../datalake/manuscripts/mx-books/mx-protocols/protocols/chapter-00/chapter-00-protocols.md). Content Ops paragraph inserted at the natural pivot in each chapter where MX gets defined as a document discipline.
- **mx-site (15):** homepage, what-is-mx, learn index, why-mx-matters, key-principles, mx-principles, benefits, about, printworks, services index, our-services, our-approach, reginald index, the-gathering index, how-it-works, sponsorship, books index. Neutral English (no British/US divergent spellings); "optimising" rephrased to "improving".
- **Outbound + scaffolds (4):** [`canonical-sponsor.md`](../../../../mx-canon/mx-maxine-lives/businesses/the-gathering/canonical-sponsor.md), [`business-sponsor-pitch.md`](../../../../mx-canon/mx-maxine-lives/businesses/the-gathering/business-sponsor-pitch.md), [`pitch-deck.md`](../../../../mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/pitch-deck.md) (Slide 4 outline), [`one-pager.md`](../../../../mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/one-pager.md) (Required content list, new item 2). Scaffolds not filled speculatively per the existing rule; only the outline / required-content lists touched so Content Ops lands when the live lead arrives.
- **Agent corpus (1):** [`mx-outputs/mx-site/llms-understanding.txt`](../../../../mx-outputs/mx-site/llms-understanding.txt) preamble now leads with "What Content Ops is" before the existing "What MX is for" / "What kind of layer MX is" beats.

The five-part framing in CLAUDE.md and the existing canonical MX one-liner in principles are untouched in place; the paired WHAT/WHY definition is added alongside them so the canon carries both phrasings together rather than swapping one for the other.

### 10. Unified pre-push validation suite + `mx:heal` self-healing CLI

A third late-morning workstream closed the gap between the validators the repo already had and the gates the pre-push hook actually ran. Five new gates land in [`.claude/hooks/pre-push.sh`](../../../../.claude/hooks/pre-push.sh) on top of the existing six: Gate 7 (orphan directories without `.mx.yaml.md`), Gate 8 (index freshness — `mx-reginald/index.json`, `routing-registry.json`, `.aspell-mx.pws`, `definitions-index.md`), Gate 9 (`fields:gate` composite — `cog:validate` + `fields:check` + `fields:conformance`), Gate 10 (mx-validator on the changed `.md` set), Gate 11 (link integrity on the changed `.md` set). Each gate is path-filtered so a single-file push stays under two seconds, individually skippable via `MX_SKIP_*` env vars for emergency overrides, and prints `Run: npm run mx:heal -- --<flag>` as the remediation line.

Soft-warn rollout: a single constant `MX_GATES_HARD_AFTER="2026-07-01"` near the top of the hook decides between `WARNING:` and `ERROR:` mode. Until the cutover the gates emit warnings and let the push through; after the cutover the same gates emit errors and exit 1. Six weeks gives time to clear the historical debt (182 tracked orphan directories at switch-on) before the hard cutover binds. The skip env vars stay available after the cutover so emergencies do not force `--no-verify`.

Companion CLI: `npm run mx:heal` extends [`scripts/mx/mx-graph-builder.js`](../../../../scripts/mx/mx-graph-builder.js) with a heal mode that pairs every gate with a fix. Composable sub-flags: `--orphans` (read README.md from the folder, infer title and description from H1 + first paragraph, infer `folderType` and `inherits` from the classifier and ancestor `.mx.yaml.md`, write skeleton), `--lineage` (scan `git log --diff-filter=R` for renames, grep `refersTo` / `buildsOn` / `inherits` / `partOf` / `replaces` / `relatedFolders` arrays in every `.md`, propose a path rewrite), `--indexes` (call the existing `tests/test-indexes-fresh.js` runner and, with `--apply`, regenerate all four), `--fields` (re-run `fields:gate`, on failure offer `fields:conformance:fix --apply`), `--all` (compose the four), `--apply` (write changes; dry-run by default), `--json` (machine-readable for hooks), `--ai` (opt-in LLM gap-fill, gated on `ANTHROPIC_API_KEY`, never invoked by the hook — keeps the pre-push path deterministic and API-key-free per the existing Reginald-determinism rule).

Pre-existing brokenness fixed in passing: [`scripts/mx-validator.js`](../../../../scripts/mx-validator.cjs) used `require()` but `scripts/package.json` declared `"type": "module"`, so the validator failed on import every time `validate:mx` ran. Renamed to `.cjs` and the two package.json references updated; the validator now actually runs.

Heal applied immediately: `npm run mx:heal -- --all --apply` wrote 182 orphan `.mx.yaml.md` skeletons (4 enriched from README sources, 178 from the classifier), regenerated three indexes (`route-sync`, `cog-tools sync`, `check-mx-definitions-index`), found no lineage references needing rewrite against the one recent rename, and confirmed `fields:gate` already clean. The 182-file fill closes the orphan debt before the 2026-07-01 cutover; subsequent pushes pass Gate 7 on a clean tree.

Supporting changes: a new [`.markdown-link-check.json`](../../../../.markdown-link-check.json) at repo root (was referenced by `validate:links` but missing on disk — blocked Gate 11 without it), [`UBERCOG.cog.md`](../../../../UBERCOG.cog.md) gains six `mx:heal` invocations in the MX Graph Operations block, [`.claude/skills/step-commit/skill.md`](../../../../.claude/skills/step-commit/skill.md) Step 8 documents the belt-and-braces relationship between the new pre-push gates and the existing Step 8 hard gate, two new rules added to [`LEARNINGS.md`](../../../../LEARNINGS.md) (soft-warn-then-hard rollout pattern; gate failure must name a single remediation command), one new 🟠 reminder added to [`REMINDERS.md`](../../../../REMINDERS.md) for the 2026-07-01 cutover.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 5 in mx-outputs (`dafee27`, `9ad0fee`, `84f1aab`, `d0ddee2`, `f5ff7e6`, `1b002ea`, `fa8cca6`); 5 hub commits (`c5c8b42d`, `cf2d0b8e`, `ad82cdda`, `26076e56`, `2a785c52`, `846a053c`); v1.2 directors report pending push |
| Files changed in mx-outputs (late morning) | 13 (2 CSS/brand, 11 audit deliverable) |
| Files changed in hub (late morning) | 4 (3 audit code, 1 pipeline) |
| Files changed in hub (mid-morning audit-docs pass) | 4 (2 cogs, 2 skills) + auto-staged registry sidecars |
| Lines added in mx-outputs (full morning) | +1,849 |
| Lines removed in mx-outputs (full morning) | -114 |
| New canonical files | 1 (`not-the-main-sponsor.html`) |
| Wordlist additions | 10 |
| Governance series posts | 2 (was 1) |
| Word count of first post | 1,900 → 1,100 (down 42%) |
| Reading time of first post | 10 min → 6 min |
| Cap on DDT contribution | 25% of total annual income, no exception, no transitional concession |
| Trigger for veto relinquishment | The Gathering fully funded by sponsorship, no DDT subsidy required |
| `--mx-text-muted` contrast (mid-blue card) | 4.12:1 → 6.05:1 (was fail AA, now pass) |
| `--mx-text-muted` contrast (page bg) | 6.42:1 → 9.40:1 |
| Audit Phase 1 minimum pages (default) | 1 (silently shipped blank reports) → 3 (refuse without `--allow-thin`) |
| Sitemap URL cache TTL | 24 hours → 15 minutes |
| Content Ops propagation surfaces | 25 (3 canon, 2 chapters, 15 mx-site, 4 outbound, 1 corpus) |
| New top-layer framing | Content Ops above the canonical five-part framing |
| Paired MX definition added to canon | WHAT (records provenance, context, intended use; travels with file) + WHY (keeps Content Ops work usable outside the producing environment) |
| New pre-push gates | 5 (orphans, indexes, fields, mx-validator on changed files, links) on top of 6 existing |
| Cutover constant | `MX_GATES_HARD_AFTER="2026-07-01"` (6 weeks soft-warn before hard-block) |
| Skeleton files written by `mx:heal --orphans --apply` | 182 (4 README-enriched, 178 classifier) |
| Indexes regenerated by `mx:heal --indexes --apply` | 3 (route-sync, cog-tools sync, definitions-index) |
| Pre-existing brokenness fixed | `scripts/mx-validator.js` renamed to `.cjs` (ESM/CommonJS mismatch had silently broken `validate:mx`) |
| New CLI entry point | `npm run mx:heal` extends `scripts/mx/mx-graph-builder.js` heal mode |

---

## Why It Matters

The previous governance post argued that records provenance should not be controlled by anyone who profits from generating the records. That argument lands stronger when paired with a personal commitment from the founder of the standards body answering the obvious sceptical question: what stops the founder from being captured the same way Mullenweg captured WordPress.org? The answer that landed today is structural rather than aspirational. The cap is binding without exception. The veto is conditional and the trigger is checkable against the annual transparency report. A sponsor evaluating The Gathering, a regulator considering MX as an evidence vehicle, or a peer agency considering the founding cohort can now read the founder's commitment in the same place they would normally read pitch language.

The trim of the first post is the other half of the same picture. A doctrine post that name-checks FAIR, C2PA, and Adobe Experience Manager critically creates ongoing relationship risk with parties whose tools or standards we may need to interoperate with, and whose constructive cooperation is more valuable than a sharper-sounding case study. The WordPress case is publicly litigated; the others are not. Trimming reduces the relationship risk while preserving the doctrine.

---

## Decisions Made

- DDT Ltd will not be the main sponsor of The Gathering. The 25% cap binds DDT without founder exception or transitional concession, with effect from the day the cap formally binds (end of 2027 per the articles of association), and DDT reduces its contribution to fit rather than allowing the cap to be informally relaxed.
- The founder's approval on governance changes is conditional and time-limited. The trigger that retires it: The Gathering is fully funded by sponsorship and no longer depends on DDT subsidy to operate. On that day, the founder's veto converts to a single board vote.
- The public governance blog series stays neutral: no named critique of FAIR, C2PA, Adobe Experience Manager, or other fellow standards bodies and vendors. The WordPress case is allowed because it is publicly litigated.
- DDT-side commercial documents (business-plan, canonical-sponsor, business-sponsor-pitch) are self-contained briefings; their only outbound links are to the public governance series on mx.allabout.network.
- "Content Ops" is positioned as a new top layer above the canonical five-part framing, not a replacement. The term is used independently (no Bailie/Halvorson citation) and is house framing rather than standards-body material (no Gathering draft note filed).
- The canonical MX definition becomes paired: WHAT (provenance, context, intended use; travels with the file) and WHY (keeps Content Ops work usable outside the producing environment). Both lines carried in canon; existing one-liner prose left in place alongside.
- CLAUDE.md gets a new "Content Ops (top layer)" section above the five-part framing rather than renumbering the five parts. Nothing that cites layer numbers elsewhere needs to change.
- The five new pre-push gates ship in soft-warn mode (warning + remediation pointer + `MX_SKIP_*` env-var escape hatches) until 2026-07-01, after which they hard-block by flipping a single constant. The pattern is the answer to a question Tom has raised before: how do you add a gate that audits historical state without making `--no-verify` the de-facto override? The answer is a published cutover date and a remediation command paired with every warning, not a flag-day cut.
- The `mx:heal --ai` flag exists but the hook never invokes it; LLM gap-fill is a manual operator tool, not part of the pre-push contract. This holds the existing Reginald-determinism rule (deterministic outputs across machines; no LLM inference in the trust path) while allowing operators to opt in when context warrants.

---

## Open Questions

- The author bio in both governance posts mentions "Adobe Experience Manager" as part of Tom's professional context. This is shared template content across many blog posts. Should it stay (biographical fact about Tom's consulting work) or be removed from governance posts specifically? Not addressed today.
- Recruiting at least three more Founding Partners by end of 2027 is now the highest-priority work between The Gathering's current state (DDT + IDHL, both at ~50% of the partner pool, mechanically in breach of the cap) and a defensible structural position. The pipeline for that recruitment is not yet on a deadline.

---

## Next Steps

- Push the late-morning hub commit (audit pipeline hardening + mx-outputs pointer bump) and Tom's pending manual push of the two mx-outputs commits (`84f1aab`, `d0ddee2`).
- Verify the live `mx.allabout.network/learn/` proposition cards read at full body contrast once Cloudflare cache is purged. Eyeball on a phone in daylight to confirm the washed-out feel is gone.
- Verify the live `mx.allabout.network/blog/governance/` paths render the trimmed first post and the new "Not the Main Sponsor" once Cloudflare cache is purged.
- Decide the Adobe Experience Manager author-bio question for governance posts specifically.
- Begin the founding-cohort recruitment work that the 25% cap and the veto-trigger condition both depend on.
- Audit the rest of mx-site (and the audit-report HTML template) for any other `--mx-text-muted` consumers on tinted surfaces where the lift may have improved readability further than expected, or revealed visual-hierarchy regressions that need a different token.
- Spot-check the 182 new `.mx.yaml.md` skeletons that `mx:heal --orphans --apply` wrote, particularly the test-fixture directories under [`mx-reginald/audit/test/fixtures/`](../../../../mx-reginald/audit/test/fixtures/) (the classifier gave them all `folderType: testing`; some may not need metadata at all and could be deleted instead) and the parent mount point at [`tg-community/.mx.yaml.md`](../../../../tg-community/.mx.yaml.md) (read-only submodules sit under it; the parent is hub-owned but worth a sanity-check).
- Before 2026-07-01, run `npm run mx:heal -- --all` periodically and confirm `npm run fields:gate` stays clean so the cutover from WARNING to ERROR mode is a non-event rather than a flag-day.

---

## Commit Log

| Hash | Description |
|------|-------------|
| dafee27 | mx-outputs: Blog governance: 'Not the Main Sponsor' added; first post trimmed to neutral framing |
| 9ad0fee | mx-outputs: Co-directors morning report 2026-05-21 v1.0 (founder commitment, governance series trim) |
| c5c8b42d | Hub: canon docs (business-plan, canonical-sponsor, business-sponsor-pitch) carry the 25% cap + founder veto-trigger; wordlist +10; mx-outputs pointer bump |
| 84f1aab | mx-outputs: Raise --mx-text-muted contrast on mx-site; promote card body copy to --mx-text |
| d0ddee2 | mx-outputs: Add dkd.de /de audit deliverable (re-run 2026-05-21) |
| f5ff7e6 | mx-outputs: Co-directors morning report v1.1 (contrast lift, audit pipeline hardened, dkd /de re-run) |
| 1b002ea | mx-outputs: dkd.de /de audit post-commit verification + fierce-critic + llm-judgment sidecars |
| fa8cca6 | mx-outputs: Regenerate README index (dkd.de /de audit deliverable + 2026-05-21 reports) |
| cf2d0b8e | Hub: Audit pipeline hardening + mx-site /learn contrast fix (mx-outputs bump) |
| ad82cdda | Hub: Document late-morning session: contrast lift + audit pipeline hardening (CHANGELOG + REMINDERS) |
| 26076e56 | Hub: Bump mx-outputs (v1.1 directors report + audit gate sidecars + README index) |
| 2a785c52 | Hub: Audit docs - rewrite to audit-data/domains/<hostSlug>/ tree; add --allow-thin (4 files + auto-staged registry sync) |
| 846a053c | Hub: REMINDERS - close audit-docs propagation items (path-aware slug + --allow-thin) |
| 8ad5c5aa | Hub: Bump mx-outputs (v1.2 directors report - audit-docs propagation closure) |
| 24b9f98f | Hub: CHANGELOG - midday audit-docs propagation entry (canonical storage tree + --allow-thin) |
| 95c967e | mx-outputs: Spread Content Ops + paired MX framing across mx-site (18 files: 17 HTML + llms-understanding.txt) |
| e78b562 | mx-outputs: Co-directors morning report v1.3 (Content Ops framing propagation across 25 surfaces) |
| a58ff9d0 | Hub: Content Ops + paired MX framing across canon, chapters, outbound |
| c3564c1f | Hub: REMINDERS - read-through + PDF rebuild for Free-book ch00 + Protocols ch00 after Content Ops insertion |
| 4c5f1dfb | Hub: CHANGELOG - Content Ops top-layer framing + paired MX definition propagated across 25 surfaces |
| 320d739 | mx-outputs: Audit dkd.de-de regeneration - fresh report, sidecars, PDF |
| _pending_ | Hub: Unified pre-push validation suite (Gates 7-11 soft-warn until 2026-07-01) + mx:heal self-healing CLI + 182 orphan skeletons + mx-validator rename to .cjs |
| _pending_ | mx-outputs: v1.4 directors report (this update) |
| _pending_ | Hub: mx-outputs pointer bump |
