---
title: "Co-Directors Report — Use-cases series, AI Usage Declaration, audit-suite recovery, submodule consolidation"
description: "Day-long close-out of the MX-hub submodule layout. The morning shipped four blog posts on MX vs blockchain/NFTs/crypto plus a use-cases sub-folder; the early evening landed the publisher-level AI Usage Declaration suite (four carriers, Gathering draft, deterministic audit probe), cleared 22 audit-suite failures to zero, and added HTML hygiene Rule 3; the late evening collapsed three submodules into the hub (mx-crm and mx-reginald absorbed as plain folders, mx-plugin deleted entirely), archived all four upstream repos on GitHub (MX-CRM, mx-reginald, MX-Audit, mx-plugin), replaced .git/hooks symlinks with copies per Tom's preference, regenerated the github-repositories.md registry with archive state and lowercase-org coverage, and filed two new Gathering drafts (Decision Records, Policy Records)."
author: "Tom Cranstoun"
created: 2026-05-17
modified: 2026-05-18
version: "1.4"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-17-evening-report.md
---

# Co-Directors Report — Use-cases blog series and sub-folder discovery

**Date:** 17 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

Tom supplied the integrator essay for a four-part series answering the question MX gets asked most often once people have seen the blockchain wave: how does this fit alongside crypto, NFTs, and chains? The other three posts in the set were written this segment, the series was published under a new `blog/use-cases/` sub-folder on mx-site, the sub-folder got its own lander, and the two blog-discovery scripts that did not previously recurse were taught to. The result is a reusable pattern: future content series can group under their own sub-folder without breaking the sitemap or llms-full corpus.

---

## What Was Done

### 1. Use-cases series, four posts plus lander

The integrator post Tom drafted, *MX and Cryptocurrency: Drawing the Line*, was paired with three companion posts: *What Blockchain and Crypto Have to Do with MX* (foundations: shared primitive, not shared design; REGINALD compared to Certificate Transparency), *Is MX Useful to Blockchain?* (chain as record system, with worked examples for verifiable credentials and a public register), and *NFTs and MX* (the seam where token-on-chain meets content-off-chain; three-piece fix using an integrity hash at mint, MX provenance on the content document, and a paired registry record). The folder also gained its own `index.html` lander carrying a `CollectionPage` with an ordered `ItemList`, a Home > Blog > Use cases breadcrumb, and a hero matching the blog lander's chrome. Four cards landed at the top of the blog index pointing at the in-folder paths. Two polish passes ran: the standard html-writer polish (em-dash ban, prose-entity ban, dual-dictionary spell-check, link sanity, HTML hygiene) and a full humanizer pass that surfaced three "The..." headings, one sentence-initial "Or", several missing Oxford commas, and the `organization`/`tokenised`/`recognised` divergent spellings that the mx-site neutral-English rule forbids. All fixed before publish.

### 2. Discovery scripts taught to recurse

The first attempt at running `update-blog-sitemap.cjs` after the use-cases folder was created produced 44 entries, not 48. The script used a flat `readdirSync`; sub-folder posts were invisible to it. The same was true of `sync-blog-discovery.cjs`, which additionally carried an explicit `isTopLevelBlog` predicate that *rejected* sub-folder URLs by design. Both scripts now walk the blog directory recursively, skipping only `drafts/`, `_*.html`, and `index.html` at any level. The blog-local sitemap rose from 40-ish entries to 48 (four use-cases posts plus four profile pages that were never previously indexed); the site-level sitemap rose to 91 entries; the llms-full corpus now includes the four new posts. The three other blog-discovery scripts (`generate-sitemap.cjs`, `generate-llms-full-txt.cjs`, `check-sitemap-coverage.js`) already recursed, so no change was needed there.

### 3. html-writer skill now codifies the sub-folder pattern

A new **Content sub-folders** section was added to the html-writer skill spelling out the rule: every new sub-folder under `blog/` MUST contain an `index.html` lander in the same commit as its first post. The lander differs from a post in three documented ways (stylesheets, metadata, Schema.org), the relative-path contract table gained a third column for sub-folder paths, and the regeneration commands the sub-folder needs are named in the same block. Next time anyone (Tom or a future agent) opens a sub-folder, the rule is in the skill, not in folklore.

### 4. Project wordlist gained 17 technical terms

The spell-check residue from the four crypto/blockchain posts was 17 terms aspell did not know in either dialect: `Arweave`, `CogNovaMX's`, `Crypto`/`crypto`/`crypto's`, `ERC`, `IPFS`, `MX's`, `MiCA`, `NFT`/`NFTs`, `VC`, `attestable`, `tokenised`, `tradeable`, `trustable`, `verifier's`. All landed in `.aspell-mx.pws` via `npm run spell:sweep:apply`. Future crypto-adjacent content will not retrigger those.

---

### 5. AI Usage Declaration suite, hub root through to mx-site

Tom drafted a first-person AI Usage Declaration: a signed statement on how AI participated in writing the MX book series. From that draft we built a publisher-level disclosure stack and shipped it as four carrier forms at `https://mx.allabout.network/AI-USAGE.{md,json,html,pdf}`. The HTML carries the discovery and disclosure markup the standard requires: `<link rel="ai-usage" type="application/json" href="/AI-USAGE.json">`, the WICG page-level `<meta name="ai-disclosure" content="ai-assisted">`, and the Schema.org `digitalSourceType` IRI inside the JSON-LD. The PDF is tagged to ISO 14289-1 Level 2 conformance. The same `<link rel="ai-usage">` was wired into the homepage and into the html-writer skill's content-template so every future blog post discovers the declaration.

### 6. Gathering draft for the AI Usage Declaration

`mx-shared-gathering/draft-ai-usage-declaration.md` (draft-cranstoun-mx-ai-usage-declaration v1.0) specifies the schema (subject, publisher, author, `aiUsage` array, `aiBoundary` array, signature, derived disclosure), the discovery convention (root-level or `/.well-known/ai-usage`, plus `<link rel="ai-usage">`), the signature mechanism (RFC 7515 JWS over an RFC 8785 JCS-canonicalised payload, Ed25519 RECOMMENDED), and the §4.7 mapping from the underlying record to the WICG ai-content-disclosure four-value enum and the IPTC Digital Source Type vocabulary. The note is vendor-neutral throughout: it names its carrier as "markdown with structured YAML frontmatter", never as `.cog.md` or "cog", because those terms are CogNovaMX-internal. A new feedback memory `feedback_no_cog_leak_in_gathering.md` codifies the rule.

### 7. Audit-pipeline integration

A new probe at `mx-reginald/audit/bin/check-ai-usage.js` discovers the four carrier forms on a host being audited, validates the JSON record against §4 of the draft (required fields, ISO 8601 dates, enum values, ISO 8601 duration for `reviewSchedule`, signature shape at Level 2), inspects the homepage for the page-level WICG / Schema.org markup, and verifies the §4.7 derivation rule (re-derives expected `wicg`/`iptc` from `aiUsage` + `aiBoundary`, fails on disagreement). No LLM in the path. The probe wires into `scripts/audit-pipeline.js` at the collect phase (CACHE_VERSIONS bumped, invocation registered) and the report side at `infill-report.js`: a new `SECTION:AI_USAGE` template block fills with deterministic placeholders when the declaration is present and strips entirely when it is absent. Tested end-to-end against the live local server: 8 pass findings, 0 warnings, 0 failures, derivation consistent.

### 8. Audit test suite recovered, 22 failures to 0

The full audit `npm test` was reporting 22 failures plus a hub-level `check-template-drift.js` gate failure that nobody had cleared. The session walked them down to zero:

- Three test files had a stale `mx-audit/` directory prefix in their `repoRoot` joins (the directory has always been `audit/`). Twelve audit-gate failures and seven provenance-gap failures and three contract-completeness failures collapsed when the path was corrected to `auditRoot = join(__dirname, '..')`.
- The fierce-critic gate persists a `runCount` in a sidecar JSON next to each fixture report; after the `--max-rounds 8` cap the script flips to warn-only mode and exits 0 instead of the expected 1. A `beforeEach` now wipes the sidecar before every fixture run, so each test starts at `runCount=1`.
- The `pipelineSurvivability` truncation test built a 200 KB HTML string with 40,000 nested `<div>` tags; Cheerio parsing alone took close to the 2 s default timeout. Replaced with an 80 KB `<style>` text node that exercises the same byte-offset check in single-digit milliseconds.
- The `infill-golden` snapshot was stale (commit 54f4a7a added an "About sample scope" paragraph and Div Soup worst-page scoping but did not regenerate the golden). Verified the five drift chunks all matched their introducing commits, then ran `UPDATE_GOLDEN=1` to bless the snapshot.
- The `check-template-drift.js` shared-sections registry was flagging "## About This Report" as drifted between the generic and ecommerce templates; the divergence is intentional content (generic says "verdicts/estate", ecommerce says "catalogue-visibility verdicts/catalogue"). Removed from `SHARED_SECTIONS` with a documented note matching the existing convention for intentionally-divergent sections.
- Two stale generated indexes (`routing-registry.json`, `definitions-index.md`) were caught by `test-indexes-fresh.js`; regenerated via `npm run route:sync` and `node scripts/check-mx-definitions-index.js`.

Result: audit suite 390 passing, 0 failing; hub-root `npm test` exits 0; the new probe's test file (`audit/test/utils/checkAiUsage.test.js`, 30 chai assertions) is part of the 390.

### 9. HTML hygiene rule 3 — folder-level index consistency

Tom asked the validator to check every folder containing an HTML set for an `index.html`, count the lander's links to sibling pages, and warn when the count does not match the number of content files. Implemented as Rule 3 in `scripts/check-html-hygiene.js`: warn-only severity (errors block, warnings advise), URL-prefix-aware link resolution so both root-anchored hrefs (`/X.html` from the site root) and relative hrefs (`X.html` from a sub-folder) match correctly, `SKIP_FOLDERS = {allaboutv2, books}` and `NEVER_LINKED_FILES = {404.html}` exclusion sets. First `--all` sweep surfaced three real findings: eight backlogged blog posts not on the blog lander, the missing `blog/profiles/index.html`, and a `cog.html` link missing from the homepage. Acted on all three. Re-run: 122 files scanned, zero warnings.

### 10. Plain-characters-in-prose principle planted across the canon

A new principle "Plain Characters in Prose" landed in `principles.cog.md`: no HTML entities (`&ldquo;`, `&rdquo;`, `&hellip;`, `&nbsp;`) inside the reader's words, ASCII straight quotes only, entities reserved for plumbing (URL escapes, displayed code, layout glyphs in chrome). Cross-referenced into `writing-style.cog.md` §3 (typography rules), Pattern 18 in §9 (updated to call back to the §3 rule), Appendix M §26 (HTML carrier guide, with an executable test), and the html-writer skill's polish pass (executable shell check that strips script/style/code/pre and scans the remainder).

### 15. github-repositories.md registry regenerated with archive state + lowercase-org coverage

The auto-generated GitHub repositories registry at `datalake/knowledge/architecture/github-repositories.md` was regenerated and the embedded scanner improved in three ways: it now pulls from a third org (`digital-domain-technologies`, lowercase — where MX-Audit, MX-template-repo, and demo-repository live, previously invisible to the registry); it marks each archived repo with `[ARCHIVED]` in the description, sourced from GitHub's `.isArchived` field; and a long-standing column-shift bug (rows with empty descriptions silently lost their owner column because bash's `read` collapses consecutive tab separators) was fixed by switching the field separator to ASCII Unit Separator. The registry grew from 124 to 135 rows and now accurately reflects archive state across all DDT + ddttom repos.

### 14. Four upstream submodule repos archived on GitHub

Four `gh api -X PATCH archived=true` calls, one per repo: `Digital-Domain-Technologies-Ltd/MX-CRM`, `Digital-Domain-Technologies-Ltd/mx-reginald`, `digital-domain-technologies/MX-Audit`, `Digital-Domain-Technologies-Ltd/mx-plugin`. All four are now read-only on GitHub; history is preserved; existing links continue to resolve. The five "Decide long-term fate of..." and "Add migration notice to..." REMINDERS items those decisions were tracked under have been deleted from REMINDERS.md (decisions resolved, no further action). New REMINDERS items added: the fate decisions for these four are gone, but REMINDERS gained a note tracking that this segment converted the hub's submodule layout from "everything is a submodule" toward "hub is the canon, submodules are only what's genuinely external".

### 13. mx-plugin removed entirely; hook symlinks replaced with copies

Different from the mx-crm and mx-reginald absorptions: Tom asked for mx-plugin to be removed completely, not absorbed. The hub keeps nothing. The folder, the `[submodule "mx-plugin"]` block, the gitlink at mode 160000, and `.git/modules/mx-plugin` are all gone. Submodule-aware code in six scripts was pruned in lockstep so it no longer expects mx-plugin to exist. Five docs were swept (`UBERCOG.cog.md`, `README.md`, `getting-started.cog.md`, `intent-cms-prd.cog.md`, `github-repositories.md`).

In the same commit, `.git/hooks/pre-commit` and `.git/hooks/pre-push` stopped being symlinks. Tom's feedback was "we do not like symlinks"; the installer at `scripts/install-hooks.sh` switched from `ln -sf` to `rm -f` + `cp -f` so the installed hook is now a real file. Trade-off documented in the installer header: every edit to `.claude/hooks/*.sh` now needs `npm run hooks:install` to take effect on subsequent commits/pushes. The two pre-commit hook failures earlier this segment (the markdownlint-cli2 ignore-file leakage) had already produced the `.markdownlintignore` exclusion for `mx-reginald/` and the staged-files filter in the hook itself; the copy-not-symlink change locks those edits in at install time rather than tracking live source edits.

### 12. mx-reginald absorbed into the hub

Same pattern as the mx-crm absorption, applied to the larger and more central mx-reginald submodule. The hub takes a snapshot of upstream `Digital-Domain-Technologies-Ltd/mx-reginald` and the submodule entry leaves `.gitmodules`. 580 tracked files (8.7 MB without `node_modules`) re-enter the hub as plain tracked files at `mx-reginald/`, including the registry codebase, the cog index, the signing stubs, the publisher-verification scripts, the full audit subsystem at `mx-reginald/audit/`, and the worker at `mx-reginald/worker/`. Commit history stays in the upstream repository.

The narrative sweep this time touched eight docs: `UBERCOG.cog.md` and `README.md` lost their `[SUBMODULE, PRIVATE]` markers on both `mx-reginald/` and `mx-reginald/audit/`, and the root-level submodule rows no longer include either; `SOUL.md` had its "mounted as a submodule into the hub alongside the other product repos" line rewritten to "lives in the hub at `mx-reginald/`"; the audit-collect skill dropped its "submodule must be initialised" prerequisite; `manual-repository-architecture.cog.md`, `doc-architecture.md`, `hub-mount-table-architecture.md`, and `folder-layout.md` had their `mx-reginald/audit/ [SUBMODULE]` labels rephrased to "hub folder". The mount table in `hub-mount-table-architecture.md` now marks `mx-reginald/` as `(in-repo, not submodule)` alongside `mx-canon/`. The code surface needed no changes: `cog-field-rules.js` already had no explicit `mx-reginald` entry in its `REPO_MAP` (the empty-string MX-hub default covered it), and every path reference in `scripts/audit-pipeline.js` and the audit binaries still resolves because `mx-reginald/audit/` lives at the same path it always did.

Historical entries were left untouched: the CHANGELOG body, the changelog-archives, and the `2026-05-15-mx-audit-into-mx-reginald.cog.md` ADR all correctly describe past state when `mx-reginald` was a submodule; LEARNINGS entry referencing the `mx-audit -> mx-reginald/audit/` rename remains as a worked example.

### 11. mx-crm absorbed into the hub

The mx-crm submodule was retired and its contents brought into the hub as a regular folder at `mx-crm/`. Snapshot-absorb: the hub takes the current `caac795` snapshot from `Digital-Domain-Technologies-Ltd/MX-CRM`; commit history stays in the original repository (which Tom can archive on GitHub at his leisure). The conversion took three coordinated edits — `.gitmodules` lost the `[submodule "packages/mx-crm"]` block, the gitlink at mode 160000 was removed from the hub index, and the working tree was restored from a fresh clone with its `.git` directory stripped so 75 files now live in the hub as plain tracked files.

Six scripts that enumerate writable submodules were pruned in lockstep: `cog-field-rules.js` `REPO_MAP`, and the `SUBMODULE_DIRS` sets in `check-mx-compliance.js`, `fix-mx-compliance.js`, `delete-deprecated-fields.js`, `field-usage-report.js`, `find-dead-canon-fields.js`. Usage-string examples in those scripts and in `reattach-submodules.sh` switched from `--submodule mx-crm` to `--submodule mx-outputs` so they reference something that still exists.

Narrative was swept across thirteen docs so the prose matches the new reality: `UBERCOG.cog.md` and `README.md` lost the `[SUBMODULE, PRIVATE]` markers and the root-level submodule rows now omit mx-crm; the three contact-related skill notes (`mx-contacts`, `write-to`, `opportunity`) had their "commit submodule first then bump pointer" guidance rewritten to "commit alongside other hub work"; `GIT-README.md`'s long submodule tutorial swapped its running example from mx-crm to mx-outputs (still a submodule, so the tutorial stays accurate); the inheritance-boundary example in Appendix M did the same; `manual-repository-architecture.cog.md`, `doc-architecture.md`, `hub-mount-table-architecture.md`, `copyright-and-attribution.md`, `team-onboarding.cog.md`, `mx-canon/README.md`, `folder-layout.md`, and `github-repositories.md` had their "private submodule" / "READ-ONLY" framing rephrased to "hub folder", and the GitHub-repositories registry now marks the upstream `MX-CRM` repo as "archived; contents absorbed into MX-hub at `mx-crm/`". Historical entries (CHANGELOG body, changelog-archives, `about.mx.cog.md` past activity, LEARNINGS rules that name mx-crm as an example identifier) were left untouched on principle.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 5 (3 submodules pushed Part 2 + 2 hub commits in Parts 2 and 3) |
| Files changed (Part 3) | 99 (75 new files under mx-crm/, 1 .gitmodules edit, 1 gitlink removal, 22 narrative sweep edits, 6 script edits) |
| Lines added (Part 3) | hub: +7,824 / −4 (the bulk is mx-crm content arriving as plain tracked files) |
| Repositories absorbed into the hub | 1 (`MX-CRM` snapshot at `caac795`; history stays in the original upstream) |
| New blog posts | 4 (Part 1) |
| New blog landers | 2 (use-cases + profiles) |
| New top-level pages on mx-site | 4 carriers of AI Usage Declaration (md, json, html, pdf) |
| Gathering draft notes | 1 new (`draft-cranstoun-mx-ai-usage-declaration`) |
| Audit probes | 1 new (`check-ai-usage.js`) wired into pipeline + infill |
| Audit test failures | 22 → 0 (full suite: 390 passing) |
| Hub `npm test` | exits 0 |
| HTML hygiene rule 3 | added (folder-level index check, warn-only) |
| HTML hygiene warnings remaining | 0 (122 files scanned clean) |
| Sub-folder pattern | first content sub-folder on mx-site (Part 1) |
| Wordlist additions | 17 (Part 1) |
| Submodule count (after Part 3) | 9 (was 10 before mx-crm absorption) |
| Files changed (Part 4) | 588 (580 new files under mx-reginald/, 1 .gitmodules edit, 1 gitlink removal, 6 narrative sweep edits) |
| Lines added (Part 4) | hub: ~149,691 / -4 (mx-reginald carries a much larger codebase than mx-crm: registry, audit, worker, signing, schemas, plans) |
| Submodule count (after Part 4) | 8 (was 9; mx-reginald absorbed into the hub) |
| Files changed (Part 5) | 15 (mx-plugin removal: 7 scripts + 5 docs + .gitmodules + install-hooks.sh + D mx-plugin) |
| Submodule count (after Part 5) | 7 (mx-plugin removed entirely) |
| Hook symlinks replaced | 2 (.git/hooks/pre-commit + .git/hooks/pre-push are now real files) |
| Repos archived on GitHub (Part 6) | 4 (MX-CRM, mx-reginald, MX-Audit, mx-plugin) |
| Registry rows after regen (Part 7) | 135 (was 124; +3 from lowercase org coverage, +8 from column-shift bug fix that exposed previously misaligned rows) |
| New Gathering drafts filed | 2 (`draft-cranstoun-mx-decision-records`, `draft-cranstoun-mx-policy-records`) |

---

## Why It Matters

The use-cases series closes the most expensive misunderstanding about MX in customer conversations. Prospects who have lived through the NFT cycle assume any system that signs records cryptographically is a blockchain play, and they bring all of blockchain's procurement, treasury, and reputational baggage to the meeting. The four posts give Tom one URL to send before that meeting (and three follow-ups for prospects who want the worked detail) that draws the line plainly without dismissing the chain world or pretending MX is part of it. The sub-folder pattern is the second-order win: now that the discovery scripts handle sub-folders cleanly and the html-writer skill codifies the lander requirement, future series (regulatory, sectoral, product) can ship the same way without a script rewrite per series.

---

## The Insight

A "we recurse into subfolders" change in two utility scripts looks like trivial maintenance until you notice the explicit `isTopLevelBlog` check in `sync-blog-discovery.cjs` that was added on purpose to keep `profiles/` private. The earlier author had a real reason for flat scanning. Removing the gate exposed those four profile pages to the blog sitemap for the first time. That is not necessarily wrong, but it was not what I intended either. The lesson: a comment that says "must never be stripped by this reconciler — the blogFiles scan is flat on purpose" deserves a longer pause than "fix sitemap and discovery scripts to re-curse into all sub-folders" makes you take. The fix as shipped honours the stronger instruction; `drafts/` is still skipped because it carries a hard noindex contract. But profiles are now discoverable, which is a policy decision the next agent (or Tom) should ratify or revert in a follow-up.

---

## Decisions Made

- Sub-folder posts under `blog/` now appear in both the blog-local and site-level sitemaps; reading-order is encoded in the lander's `ItemList` (`itemListOrder: ItemListOrderAscending` with explicit `position`).
- `mx-outputs/mx-site/sitemap.xml` and `mx-site/llms-full.txt` were intentionally NOT committed this segment; both have been touched by an in-flight AI-USAGE rollout in adjacent files, and bundling them with the use-cases commit would have shipped sitemap URLs for AI-USAGE pages that are not yet committed themselves. Tom can regenerate both when the AI-USAGE work lands.

---

## Open Questions

- Should `blog/profiles/*.html` (the author/AI-assistant bio pages) be in the blog sitemap, now that the recursive walker picks them up? Current state: yes, they are, and they now also have their own lander at `blog/profiles/index.html` with breadcrumb chain Home → Blog → Profiles. If the answer to "should they be discoverable" is still no, the walker needs a `profiles` entry in its skip list and the lander reverts to a noindex page.
- The AI Usage Declaration rollout is now shipped (the question the Part 1 report deferred). What remains is the Level 2 signature workflow: an Ed25519 keypair, a key-resolution URI, and the canonical-form signing step. None of those are in this segment's commits; they belong to a follow-up.

---

## What Changed About Me

This segment ran the humanizer skill against material I had just written under the html-writer skill's own polish pass. The two checked different things: html-writer caught the mechanical AI-vocabulary list and the em-dashes and the prose entities; humanizer caught what they missed, mostly Section-6 forbidden constructs (three "The..." headings I had not noticed) and Section-7 divergent spellings (`organization`/`tokenised`) that the html-writer polish pass treats as in-scope of spell-check but does not flag as style problems. Next time I publish to mx-site, the humanizer scan is part of the same workflow, not a follow-up step.

---

## Next Steps

- Decide and act on the profile-pages-in-sitemap question above (still open from Part 1).
- Level 2 (Signed) implementation for `/AI-USAGE.json`: generate an Ed25519 keypair, publish the public key at a dereferenceable URI, write a small derivation-and-sign script that produces a JWS over the JCS-canonicalised payload, and update the JSON record with the `signature` block. Touch §6 of the Gathering draft only to clarify if implementation surfaces an ambiguity.
- Optional: write a derivation script that produces `/AI-USAGE.json` from the source markdown's YAML frontmatter (mentioned in §8.3 of the draft as a 30-line reference implementation).

---

## Commit Log

| Hash | Description |
|------|-------------|
| 71ff1b7 | Blog: add use-cases sub-folder with the MX-and-blockchain set (mx-outputs, Part 1) |
| 372bed7 | AI Usage Declaration suite at mx.allabout.network root: HTML, JSON, MD, PDF carriers; profiles lander; eight backlogged blog posts surfaced (mx-outputs, Part 2) |
| cbf2823 | Audit: AI Usage Declaration probe + pipeline integration + test-suite fixes (mx-reginald, Part 2) |
| 285424c | Add MX AI Usage Declaration note (mx-shared-gathering, Part 2) |
| 01ae9ebd | Hub: golden-skeleton sync hook + template-voice pre-flight + sidecar API move (hub, Part 2) |
| 948cd74f | Hub: CHANGELOG entry + REMINDERS items + html-writer skill rule-count fix (hub, Part 2) |
| 94ff7c5d | Hub: absorb mx-crm submodule into hub as a plain folder + sweep submodule-aware code and narrative (hub, Part 3) |
| b3c13c8d | Docs: CHANGELOG entry + REMINDERS item for the mx-crm absorption (hub, Part 3) |
| 3dad8997 | Learnings: git submodule deinit clears the working tree (hub, Part 3) |
| f528e526 | Hub: absorb mx-reginald submodule into hub as a plain folder + narrative sweep (hub, Part 4) |
| f7fc37f5 | Docs: CHANGELOG entry + REMINDERS items for mx-reginald absorption (hub, Part 4) |
| e7fb406d | Learnings: markdownlint-cli2 ignore-file vs explicit args; absorb upstream lint config (hub, Part 4) |
| 3346399a | Hub: remove mx-plugin submodule + replace hook symlinks with copies (hub, Part 5) |
| 5b47f498 | Docs: CHANGELOG entry for mx-plugin removal + archive; drop completed symlink reminder (hub, Part 5) |
| 2a160cce | Docs: archive MX-CRM + mx-reginald + MX-Audit; drop resolved REMINDERS items (hub, Part 6) |
| 7f7948aa | Registry: regenerate github-repositories.md with archive state + lowercase-org coverage (hub, Part 7) |
| dea0654 | Add MX Decision Records + MX Policy Records draft notes (mx-shared-gathering) |
| 274b61f | 2026-05-17 audit regen + directors v1.3 + sitemap/llms + new PDF (mx-outputs) |
| _pending_ | Hub: pointer bumps for mx-outputs + mx-shared-gathering + accumulated parallel-session changes + untracked hook (hub, day close-out) |
