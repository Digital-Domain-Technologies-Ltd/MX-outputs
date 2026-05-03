---
title: "Co-Directors Report — Hardened audit pipeline + canon-migration sweep to 0 violations"
description: "Morning segment: end-to-end mx.allabout.network audit delivered, two reproducible mx-audit bugs fixed, skill-doc hygiene sweep, then the canon-migration sweep that drove compliance to 0 across all five categories with the scanner bug fixed and public-standards namespace rule mechanised."
author: "Tom Cranstoun"
created: 2026-04-17
modified: 2026-04-17
version: "2.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-17-morning-report.md
---

# Co-Directors Report — First full audit through the hardened pipeline + two mx-audit bugs fixed

**Date:** 17 April 2026 — Morning
**Segment:** morning (since midnight UTC)

---

## Summary

The morning delivered the first full audit produced by the hardened pipeline end-to-end — our own MX showcase site `mx.allabout.network`, 47 pages, all five verification gates green, PDF delivered. The run surfaced two reproducible bugs in `mx-audit` that were both fixed in the same session and committed upstream. The third thread was a doc-hygiene sweep across twelve skill files, stripping version-history prose so the skill files describe current behaviour only.

---

## What Was Done

### 1. mx.allabout.network audit delivered

Ran `/audit-site` against Tom's own MX showcase site, `https://mx.allabout.network`, with `-c -1 --exclude-paths /books/appendices` (49 URLs after filter, 47 audited HTML pages). Scored MSC 97, SDQ 93, Discovery Readiness 100, Pipeline Survivability 100, MX Readiness Level 5 (top tier). Three opportunities surfaced: (1) publish `/.well-known/agent-card.json`, (2) move JSON-LD from `<body>` to `<head>` on eight pages, (3) close 73 recommended-property gaps on Book/Offer/Product entities.

All five report gates passed on this run: frontmatter validator (clean), deterministic verifier (56/56 claims verified), readability hook (green), fierce-critic (zero findings), LLM-judgment (zero findings after three iterations). PDF rendered to 25 pages, 137 KB, zero continuation markers. Markdown and PDF delivered to `mx-crm/outreach/2026-04-17/` and `mx-outputs/pdf/outreach/2026-04-17/`.

### 2. Two mx-audit bugs surfaced and fixed

The audit run exposed two bugs in the tool that had been silent until now:

- **`robots_txt_analysis.json` was empty despite robots.txt being present.** The `generateRobotsTxtAnalysis` function looked at `results.robotsTxtContent` / `context.robotsTxtData.raw`, but the `siteFiles` collector had already fetched the content and put it at `results.siteFiles.robotsTxt.content`. Two code paths for the same data, one reading and one writing, never agreeing. Fix: read from the `siteFiles` cache first, fall back to the legacy locations.
- **AI Attribution collector was never wired into the main pipeline.** The collector module existed (`aiAttributionCollector.js`) with a hostname allowlist, but the main audit never invoked it. The `/audit-collect` skill documented a hand-rolled `node -e` inline snippet, easy to miss. Fix: added `generateAiAttributionReport` helper in `reports.js` that checks the hostname against the allowlist, invokes the collector, and writes `ai-attribution.json` only when applicable.

Both fixes committed as `mx-audit 224da97`, pointer-bumped as hub `c4b45c8`, both pushed. Re-ran the audit to confirm — both files now populate correctly on the first pass.

### 3. Skill doc hygiene sweep

Twelve skill files carried changelog prose — `New in v2.3 (2026-04-14)` sections, `ENHANCED 2026-04-09:` step prefixes, `Document History` blocks, `Last Updated: YYYY-MM-DD` footers. Skills are operational instructions consulted at run time, not release-history documents; version references age the moment underlying behaviour changes. Stripped approximately 46 lines of such prose across `.claude/skills/`, preserving every operational fact. The rule is now saved to auto-memory as `feedback_no_changelog_in_harness_files.md` so future sessions apply it on every edit.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (hub) | 17 |
| Commits (submodules) | 4 (mx-audit 1, mx-crm 1, mx-outputs 2) |
| Files changed (hub) | ~39 |
| Lines added (hub) | +6,736 |
| Lines removed (hub) | −8,100 |
| Net lines (hub) | −1,364 |
| Audit pages delivered | 47 |
| Verification gates passed | 5 of 5 |
| Bugs fixed upstream | 2 |
| Skill files decluttered | 12 |

---

## Decisions Made

- **Kept `web-audit-suite-template.md` for mx.allabout.network, not the e-commerce variant.** Commerce detection returned 2 signals (Product/Offer schema on 9 book pages, MX Journey Stages 3-4 passing) but both were driven by the three books as products, not a true catalogue. The site is content-first with incidental book sales; the generic template was the closer fit.
- **Accepted the `audit-tool:` kebab-case workaround in the rendered report.** The fierce-critic script reads only the kebab-case key; the canonical frontmatter uses camelCase `auditTool`. For this one report we carry both. The durable fix — patching the fierce-critic to read the canonical key — goes on the reminder list.

---

## The Insight

Two code paths for the same data can silently disagree, and the one that matters for the report is usually not the one that prints "fetched successfully" in the log. The `robots_txt_analysis.json` sidecar was empty for weeks of audits while the raw `results.json.siteFiles.robotsTxt.content` carried the real content. Both readers passed their own tests. Neither reader knew the other existed. The lesson: when a sidecar looks empty but the underlying data was clearly fetched, grep `results.json` before assuming the fetch failed. The fix is five lines; the detection was the hard part.

The broader principle — already in the memory as "mechanical enforcement beats discipline" — is that relying on any single code path to produce the right artefact is fragile when the audit has a dozen downstream consumers. The sidecar and the collector are now both wired into the main pipeline, so they produce on every run.

---

## Next Steps

- Publish `/.well-known/agent-card.json` on mx.allabout.network (Priority 1 from the audit, low effort, closes the discovery-file set).
- Move JSON-LD to `<head>` on the eight flagged pages (`/about/`, `/books/`, `/books/introduction.html`, `/books/handbook.html`, `/books/protocols.html`, `/services/`, `/services/index.html`, `/about/index.html`) — low effort template edit.
- ~~Patch `scripts/audit-fierce-critic.js:145` to read `auditTool:` (camelCase canonical)~~ — shipped in the late-morning arc; see "Canon-migration sweep" below.

---

## Late-morning addendum — Canon-migration sweep to zero violations (11:00)

After the audit/mx-audit/skills-hygiene work closed, a second arc ran end-to-end that drove MX field compliance across the whole repo to zero violations in every category. The starting picture inherited ~1691 deprecated warnings from yesterday's canon cut; the ending picture is `0 unknown, 0 deprecated, 0 naming, 0 invalid-enum, 0 frontmatter-parse-error` across 2223 files, with MXS-01 Level 1 at 2054 / 2054.

### 4. Auto-fixer rename pass

Ran `scripts/fix-mx-compliance.js --apply` against the deprecations table to migrate every caller that still used a bare field name for something now in the vendor namespace. 615 edits across 364 hub files plus 1043 edits across 5 submodules (mx-collaboration, mx-audit, allaboutv2, mx-crm, mx-outputs). Every rename matched an entry recorded in the fields-data.yaml deprecations section; sibling-collision safety guards refused unsafe renames (where both old + new keys coexisted) and were reported as skip lines for manual merge.

One scanner bug surfaced mid-apply: the compliance scanner emitted the literal string `"(removed, no replacement)"` as the replacement for cut fields that had no migration target. The auto-fixer then used that string as the new field name, which corrupted ~50 lines of mx-crm contact files. Reverted, fixed the scanner to emit `null` properly, re-applied cleanly. Documented in the commit message.

### 5. Missing `url` standard field

The rename pass consolidated three vendor fields (`website`, `canonical`, `canonicalUrl`) into `url` — but `url` was not actually in the standard vocabulary. The auto-fixer dutifully renamed callers, who then triggered unknown-field violations on the new name. Added `url` as a core-profile standard field with Schema.org url + Dublin Core identifier alignment. Dropped unknowns from 10 to 1.

### 6. Delete deprecated fields

Two scripts for the remaining 658 deprecated warnings: `scripts/delete-deprecated-fields.js` for single-line deletions, `scripts/delete-deprecated-blocks.py` for YAML-structural deletion of nested blocks. Each handles its own edge cases (line-index invalidation for overlapping violations, PyYAML round-trip reformatting, safety guards against deleting lines whose values span multiple lines). Net effect: 649 warnings cleared, 9 remaining after the first pass — all 9 in files where PyYAML's reformatted output tripped a different scanner bug.

### 7. Scanner fix — list-item indentation

The compliance scanner's YAML key walker had a one-character bug (`>=` where it should have been `>`) in the array-element pop condition. When a YAML list item sat at the same indent as its parent key — as in compact style, which PyYAML's default dump produces — the walker popped the parent off the indent stack, causing subsequent nested keys to resolve their parent path wrongly and get flagged as top-level unknowns. Fixed in one line. Retried the block-delete pass afterwards; 41 previously-false-flagged keys deleted cleanly, all 9 residuals cleared.

### 8. Three pre-existing residuals closed

- `mx-rankinize-user-manual.md` had a duplicate `refersTo:` mapping key. Merged the two lists.
- `audit-fierce-critic.js` was grepping for `audit-tool:` (kebab-case) while canonical frontmatter is `auditTool:`. Patched to accept both forms (camelCase wins). The CRM report's duplicate `audit-tool:` key removed.
- `mx-outputs/README.md` was missing the `created` field because the generator didn't emit it. Fixed the generator; README regenerated clean.

### 9. Public-standards namespace rule — mechanised

The auto-fixer's rename pass had renamed `category` → `x-mx-category` in MXS-01, MXS-02, MXS-03 frontmatter — mechanically correct per the deprecations table but semantically wrong: public standards documents MUST NOT carry vendor extension fields in their own frontmatter. They describe the namespace; they do not consume it. Reverted those three files, then updated all three field-migration tools with a path skip-list that excludes `mx-shared-gathering/`, `stream-drafts/draft-*.md`, `proposed-drafts/*.(cog.)md`, and `tg-community/*/draft-*.md`. Skip is path-based (whole-file), so MXS-02's body — which legitimately demonstrates `x-mx-mount-type` inside YAML fences to explain extension syntax — is preserved intact. New LEARNINGS entry captures the meta-principle: any document whose job is to DEFINE a namespace should be excluded from tooling that CONSUMES that namespace.

---

## Late-morning by the numbers

| Metric | Value |
|--------|-------|
| Commits this session (late-morning arc only) | ~30 across hub + 5 submodules |
| Files touched by auto-fixer | 364 hub + 283 submodules = 647 |
| Files touched by delete passes | 232 hub + 152 submodules = 384 |
| Field-migration edits (renames + deletes) | ~1,900 total |
| Scanner bugs fixed | 2 (placeholder-as-replacement, list-item indent) |
| Tools updated with skip-list | 3 (`fix-mx-compliance.js`, `delete-deprecated-fields.js`, `delete-deprecated-blocks.py`) |
| New script added | `scripts/delete-deprecated-blocks.py` (YAML-structural deletion) |
| New standard field added | `url` |
| Deprecated-warnings reduction | 1691 → 0 (100%) |
| MXS-01 Level 1 compliant files | 2052 → 2054 (100%) |

## Late-morning insight

Two bugs of the same shape in one morning: both the canon-migration tools and the audit collectors had examples where two code paths should have agreed on one artefact and didn't. The earlier morning's lesson was "if two functions handle the same artefact, they must share a source." This arc showed that the inverse also holds: if a tool operates on *every* document in the repo, it needs a way to say "but not these ones" — and that exclusion must be a hard guard in the tool, not a convention in prose. The LEARNINGS file picked up both rules today.

## What changed in the tool layer

Three migration tools now carry a path skip-list that future sessions cannot silently dismiss:

1. `scripts/fix-mx-compliance.js` — auto-renamer
2. `scripts/delete-deprecated-fields.js` — line-based deleter
3. `scripts/delete-deprecated-blocks.py` — YAML-structural deleter

All three share the same regex set for public-standards paths. If a fourth migration tool is added later, it picks up the same list by copy-paste from any of the three.

---

## Commit Log

### Hub (MX-hub)

| Hash | Description |
|------|-------------|
| c4b45c8 | Bump mx-audit: robots.txt sidecar fix + AI Attribution auto-invoke |
| 2f4e97b | Drift checker: respect deprecations + leaf-keys of cut dotted structures |
| 3eb7603 | Docs: CHANGELOG 2026-04-17 entry for the canon-definitive cut + REMINDERS MXS-04 refresh note |
| 0afc25a | Stream draft MXS-04: sync v1.1-proposed + skip RFC format from MX hook |
| c2b63d1 | Vendor file definitive: 206 fields now each carry a one-sentence description |
| a78a503 | Appendix M: update inheritable-fields list + allowed-values table for 2026-04-17 cut |
| 3f50134 | Appendix M: update canon-layout preamble, add genuineness family section |
| 11a823a | Vendor cut phase 2b: 239 -> 206, cog subject-matter + ai parked + misplaced audit |
| 0c5d115 | Vendor cut phase 2a: 310 -> 239 subject-matter fields out, 15 consolidated |
| b9688b4 | Vendor cut phase 1: 331 -> 310 fields (all code/db-profile ai.* removed) |
| d0e385d | Compliance scanner: flip deprecated fields from unknown to known-migrating |
| 627910a | Bump mx-shared-gathering: MXS-04 v1.1-proposed scope cut |
| 573912a | Genuineness family: 3 new standard fields per Rule 5 of the triage rubric |
| c7da622 | Validator: downgrade deprecated-field from error to warning |
| 3d410c6 | Standard cut: 103 fields -> 59 definitive, 22 moved to vendor x-mx- |
| e1ba970 | Carriers cut: 40 fields -> 2, triaged against the 2026-04-17 rubric |
| 43c1031 | Field triage rubric v1.0-draft: scope rules for every MX canon cut |

### Submodules

| Repo | Hash | Description |
|------|------|-------------|
| mx-audit | 224da97 | Fix robots.txt sidecar + auto-invoke AI Attribution collector |
| mx-crm | 51bc64f | Add mx.allabout.network audit: report + verification/fierce-critic/llm-judgment sidecars |
| mx-outputs | 8566a6f | Add mx.allabout.network audit PDF (2026-04-17) |
| mx-outputs | d0d08fe | Blog: update field counts to post-cut state (62 standard / 2 carriers / 206 vendor) |

### Late-morning arc — Canon-migration sweep

| Hash | Repo | Description |
|------|------|-------------|
| 243ad5e2 | hub | Auto-fix: migrate 615 deprecated field names across hub to x-mx-* prefix |
| 7f90d5b3 | hub | Standard: add 'url' field to close the consolidation gap |
| f8d4e09d | hub | Delete deprecated fields across hub + bump 4 submodule pointers |
| df1a0c42 | hub | Scanner: fix list-item indentation handling + delete residual blocks |
| 8ca968d6 | hub | Fix 3 pre-existing compliance residuals; bump 3 submodule pointers |
| d1f3e624 | hub | Bump mx-shared-gathering: remove x-mx-category from MXS-01/02/03 frontmatter |
| 044c6d96 | hub | Tooling: skip public standards paths; LEARNINGS entry on standards/namespace recursion |
| d03e7e3f | hub | Bump mx-outputs: generate-index.sh emits created/modified for MXS-01 L1 |
| 6cec70a  | mx-collaboration | Auto-fix: migrate 12 deprecated field names to x-mx-* vendor prefix |
| 3cb4db9  | mx-audit | Auto-fix: migrate deprecated field names to x-mx-* vendor prefix |
| 67685ee  | mx-audit | Delete deprecated fields (cuts + sibling collisions) per 2026-04-17 canon |
| dbed47cd | allaboutv2 | Auto-fix: migrate deprecated field names to x-mx-* vendor prefix |
| b0fc48ef | allaboutv2 | Delete deprecated fields (cuts + sibling collisions) per 2026-04-17 canon |
| cb37329b | allaboutv2 | Delete residual deprecated blocks (now safe after scanner fix) |
| bc7e9ad  | mx-crm | Auto-fix: migrate deprecated field names to x-mx-* vendor prefix |
| 6b9bc3b  | mx-crm | Delete deprecated fields (cuts + sibling collisions) per 2026-04-17 canon |
| 97d8d40  | mx-crm | Remove duplicate audit-tool kebab key from 2026-04-17 report |
| f95bda5  | mx-outputs | generate-index.sh: emit created + modified frontmatter for MXS-01 Level 1 |
| b4be3c6  | mx-outputs | Auto-fix: migrate deprecated field names to x-mx-* vendor prefix |
| 2fe8fdd  | mx-outputs | Delete deprecated fields (cuts + sibling collisions) per 2026-04-17 canon |
| b7ee479  | mx-outputs | Delete residual deprecated blocks (now safe after scanner fix) |
| 2adebee  | mx-outputs | Regenerate README after 2026-04-17 generator fix + content changes |
| 7e93d9a  | mx-shared-gathering | Rename category to x-mx-category in MXS drafts' own frontmatter |
| 2e8e36c  | mx-shared-gathering | Remove x-mx-category from MXS-01/02/03 frontmatter — no extensions in public standards |

---

## Late-morning addendum 2 — Audit findings shipped + durable enforcement scanners (12:00)

After the canon-migration sweep, a third arc closed the loop on the mx.allabout.network audit by acting on every finding it produced and building the enforcement scaffolding so those classes of bug cannot silently return.

### 5. All audit findings shipped on mx.allabout.network

- **Priority 1 — A2A agent-card.json**: new `mx-site/.well-known/agent-card.json` declaring three skills (mx-audit, mx-strategy, mx-training) with the existing content policy. Closes the discovery-file set (robots.txt + sitemap + llms.txt + ai.txt + agent-card.json).
- **Priority 2 — JSON-LD placement**: moved the Schema.org blocks from `<body>` to `<head>` on `about/index.html`, `books/introduction.html`, `books/handbook.html`, `books/protocols.html`, `services/index.html`. Script `/tmp/move-jsonld.py` did the mechanical relocation; `books/index.html` was already correct.
- **Priority 3 — Schema enrichment**: nested `itemOffered.Book` entities on the three book pages now carry `publisher`, `datePublished`, `image`, `isbn` inherited from each page's top-level Book. Offer entities got `seller` + `itemCondition` + `url`. `aggregateRating` deliberately left off — fabricating ratings violates Schema.org norms.
- **Optional — Referrer-Policy header**: added `strict-origin-when-cross-origin` to the allaboutv2 Cloudflare Worker alongside the existing security headers.
- **Sitemap coverage**: added 7 orphan HTML pages to `mx-site/sitemap.xml` (`books/faq.html`, 4 appendix sub-pages, 2 blogs). Sitemap now matches the source tree one-for-one.

### 6. Two enforcement scanners + mx-audit sitemap-discrepancy feature

Three additions that lock the audit findings into place so they can't regress:

- **`scripts/check-jsonld-in-head.js`** — filesystem HTML scanner that refuses any JSON-LD emitted inside `<body>`. Default scope covers every HTML output tree in the repo (mx-outputs/mx-site, reginald, md; allaboutv2/content). `--fix` flag relocates offending blocks in place. 77 HTML files scanned, all clean after this arc.
- **`scripts/check-sitemap-coverage.js`** — filesystem HTML ↔ sitemap.xml coverage check. Catches the orphan class of bug the audit's sitemap-based crawler can't see (pages reachable only via excluded paths, for example). Hostname-gated to `allabout.network` and `cognovamx.com` plus subdomains — skips cleanly for any other site so we don't walk someone else's filesystem.
- **mx-audit `generateMissingSitemapUrlsReport` wired + `generateSitemapDiscrepancyReport` added + `getOrphanSitemapUrls` added**: third "orphaned code that didn't run" bug in mx-audit this morning, plus a new reverse check for sitemap URLs the audit didn't reach. Combined sidecar `sitemap-discrepancy.json` now ships on every audit run.

Both scanners are wired into `/step-commit` Step 8 as the first two gates before the existing cog/fields/compliance checks. The JSON-LD check is a hard block; the sitemap-coverage check is an "offer decision" gate (orphans often need per-file judgement).

### 7. Skill and memory updates

- **`/create-content`** skill — explicit JSON-LD-in-head rule at Step 8.5, noting the step-commit gate enforces it.
- **`/audit-collect`** and **`/audit-report`** skills — document the new `missing_sitemap_urls.csv` and `sitemap-discrepancy.json` sidecars as canonical outputs; audit-report infill list now includes sitemap discrepancies.
- **`/step-commit`** skill — Step 8 now runs five gates (was three); Decision-gate section documents block-vs-offer-decision semantics for each new gate; Related section lists the two new scripts.

### Decisions Made (late-morning)

- **Accept the +1 unknown / +1 naming compliance residual** from the deliberate `audit-tool:` kebab-case workaround in the published audit report. The fierce-critic script reads only kebab-case; canonical frontmatter uses `auditTool:`. We now carry both in that report. The durable fix (patch the critic) went on REMINDERS earlier today and was actioned by the canon-migration sweep (commit 97d8d40). This residual was accepted once, resolved structurally, and closed.
- **Use filesystem scanning as the third-leg enforcement mechanism.** The audit's sitemap-based crawler can't see pages reachable only through excluded paths (books/faq.html was linked only from appendix pages we excluded). The filesystem scanner walks the source tree directly — different discovery model, complementary coverage. Both layers (crawl-based in audit, filesystem-based in step-commit) now catch discrepancies, and both feed the sitemap-discrepancy sidecar the audit-report renders.

### The Insight (late-morning)

Three different bugs this morning all had the same shape: a module exists and works correctly when called, but nothing ever calls it. `generateRobotsTxtAnalysis` was looking at the wrong key; `aiAttributionCollector.js` was never imported by the main pipeline; `generateMissingSitemapUrlsReport` was defined in `reportGenerators.js` but absent from `reports.js`. Same signature three times. The enforcement addition — a per-collector smoke test, or an "every exported function in reportGenerators.js must appear in reports.js" audit — would catch this class mechanically. Added as a REMINDER.

---

## Commit Log (addendum 2)

| Hash | Repo | Description |
|------|------|-------------|
| c0708ba5 | allaboutv2 | Worker: add Referrer-Policy: strict-origin-when-cross-origin |
| 42ea24a | mx-audit | Wire sitemap-discrepancy reports + add reverse orphan check |
| c9f6107 | mx-crm | Orders dashboard: regenerate excluding Stripe test-mode sessions |
| 8665d20 | mx-outputs | mx-site: fix all mx.allabout.network audit findings + add agent-card.json |
