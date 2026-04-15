---
title: "Co-Directors Report — MX Field Discipline End to End"
description: "Morning session: field-SSOT consolidation, drift-prevention infrastructure, per-file compliance scanner, two cleanup passes, and a hard gate that catches field drift before any push."
author: "Tom Cranstoun and Maxine"
created: 2026-04-15
modified: 2026-04-15
version: "2.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning, governance, ssot, field-dictionary, compliance, drift-prevention]
  isAiGenerated: true
  generatedBy: "claude-opus-4-6"
  reviewedBy: "Tom Cranstoun"
---

# Co-Directors Report — MX Field Discipline End to End

**Date:** 15 April 2026 — Morning (extended)
**Segment:** morning (00:00–12:00)

---

## Summary

The morning began with five documents drifting apart while each claiming to define MX fields. It ended with a single source of truth, a machine-readable data file mirroring it, a scanner that can find every field-claim violation across every markdown file in the hub and every submodule, an auto-fixer for the mechanical cases, and a hard gate in the commit workflow so field drift cannot ship unnoticed again. 16 commits landed across the hub and four submodules; compliance violations dropped by roughly half in one session.

---

## What Was Done

### 1. Consolidation: Appendix M is the sole source of truth for MX field definitions

Five documents that each tried to define MX fields — `fields.cog.md`, `yaml-frontmatter-template.md`, `mx-yaml-md-guide.md`, `carrier-format-metadata.md`, `mx-html-writing-guide.cog.md` — were reduced to redirect stubs. Their prose (around 3,300 lines) was ported verbatim into Appendix M as five new sections (§22–§26). Appendix M grew from 1,168 to 4,557 lines and now carries the complete MX field catalogue, the folder-metadata guide, the book-manuscript frontmatter template, the carrier-format map, and the HTML carrier writing guide.

### 2. Machine-readable dictionary extracted to a neutral data file

The 3,540-line YAML dictionary that used to live inside `fields.cog.md`'s frontmatter was moved to `mx-canon/ssot/fields-data.yaml`. Tools that validate frontmatter now load YAML directly instead of parsing a markdown wrapper. Appendix M and the data file mirror each other; stubs point at both.

### 3. Validation engine derives every rule from the dictionary

`scripts/cog-field-rules.js` used to maintain its own hand-curated lists of field types, defaults, enums, profiles, and deprecations — drifting from the dictionary almost as soon as it was written. It now derives every one of those tables from `fields-data.yaml` at module load time. Field-type entries grew from ~100 hand-maintained to 337 derived (every defined field); profiles grew from 7 to 40. The compliance validator cannot drift from the dictionary by construction.

### 4. Audit tooling repaired and expanded

`scripts/mx-audit.js` had been silently broken — CommonJS `require` inside an ES-module directory, and a dictionary-parser expecting a flat shape that no longer matched. Both issues fixed; the script now loads 337 field definitions plus 40 profiles and surfaces 11 canonical deprecations that the old hand-list missed (321 occurrences across 198 files).

### 5. Three new field-governance scripts

- **`scripts/check-field-drift.js`** — SSOT drift detector. Compares prose in Appendix M §22+ to the dictionary and guards stub sizes (each of the five stubs must stay ≤80 lines). Invoked by `npm run fields:gate`.
- **`scripts/check-mx-compliance.js`** — per-file violation scanner. Walks every markdown file in the hub and every submodule and emits JSON listing files with unknown fields, deprecated fields, naming-convention violations (kebab/snake), invalid enum values, and YAML parse errors. Line numbers included. Scope and category filters via CLI.
- **`scripts/fix-mx-compliance.js`** — mechanical auto-fixer for the deprecated and naming categories. Dry-run by default. Safety guards prevent duplicate-key YAML corruption, name-as-slug identity renames, and edits to Claude Code metadata, regenerated content, and test fixtures.

### 6. Two cleanup passes and a first-tranche dictionary extension

- **Pass A** (dictionary realignment): dropped the `purpose` enum (retroactively wrong — usage was prose), widened `audience` and `folderType` enums, promoted `riskLevel` to top-level, added 15 new top-level fields. Eliminated 600+ violations in one commit.
- **Pass B** (mechanical renames): auto-fixer applied across hub and three submodules. 70 files / 108 edits in the hub, 70 files / 195 edits in mx-crm, 5 files / 10 edits in allaboutv2, 1 file / 2 edits in mx-collaboration. Skipped mx-audit (test fixture only), mx-outputs (regenerated), mx-plugin (empty).
- **Pass D first tranche**: added 21 more fields surfaced by the compliance scan (audit-report profile: `clientUrl`, `clientSlug`, `auditTool`, `auditDate`, `accessibilityScore`, `totalIssues`, `imagesAnalyzed`, `bestPracticesScore`, `htmlValidation`, `totalOpportunities`; engagement: `nextAction`, `engagementOptions`, `recipient`, `thread`; cog: `registry`, `security`, `signature`, `provenance`; generic: `definition`, `affects`, `action`, `note`, `related`, `links`). Scanner now skips `.claude/**` (Claude Code's own metadata zone, not MX-governed).

### 7. Commit workflow hardened

`/step-commit` gained a new Step 8 — **MX field compliance gate** — that runs all three validators (cog:validate, fields:gate, fields:compliance) before the push step. Hard block on required-field or SSOT-drift failures; offer auto-fix for mechanical violations; require explicit user acceptance for any residual unknown or invalid-enum categories. Field drift cannot reach the remote silently any more.

---

## The Insight

Field drift is the inevitable product of having more than one place to define fields. Every contributor, human or machine, reaches for whichever document they saw first, and each one slowly grows its own dialect. The fix is structural, not editorial: one prose authority, one data authority, everything else redirects, and a gate on the commit path that refuses to ship drift. Appendix M was already the natural prose home; `fields-data.yaml` gives the tools a clean data source; the three new scripts give the workflow teeth.

---

## Decisions Made

- **Appendix M is authoritative for MX field prose.** Machine-readable form mirrors it at `fields-data.yaml`.
- **Five former SSOTs kept as stubs**, not deleted. Inbound references throughout the repo and registries survive without immediate surgery.
- **`purpose` enum retired.** Real usage was overwhelmingly prose; the constraint was misconceived.
- **`audience`, `folderType` enums widened** to match real usage rather than forcing retrofits.
- **`.claude/**` is out of scope for MX field governance.** Claude Code's skill manifests and agent definitions use their own frontmatter shape; the scanner and fixer both skip it.
- **Auto-fix has non-negotiable safety guards.** Sibling-key duplicate detection, name-as-slug identity detection, path skip-list. If the fixer refuses, the residual is manual work, never a bypass.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment (hub) | 16 |
| Commits across submodules | 4 (mx-outputs x2, mx-crm, allaboutv2, mx-collaboration) |
| Files changed | 118 |
| Lines added | +9,097 |
| Lines removed | −8,037 |
| Former SSOTs retired | 5 |
| Broken scripts repaired | 1 (mx-audit.js) |
| Broken scripts deleted | 1 (mx-rename-tracker.js) |
| New scripts added | 3 (check-field-drift, check-mx-compliance, fix-mx-compliance) |
| Dictionary growth | 298 → 337 fields (+39) |
| Appendix M size | 1,168 → 4,557 lines |

**Compliance trajectory (full repo, hub + all submodules):**

| Category | Start | End |
|---|---|---|
| Files with violations | 1,537 | 764 |
| unknown | 933 | 375 |
| deprecated | 93 | 24 |
| naming | 291 | 32 |
| invalid-enum | 1,811 | 641 |
| frontmatter-parse-error | 54 | 47 |

Files with violations dropped by 50%; deprecated by 74%; naming by 89%; invalid-enum by 65%. The residual is real semantic work (the 375 unknown and 641 invalid-enum need human judgement case-by-case) and 47 parse errors that need hand-fixing.

---

## Next Steps

- **Residual compliance work (Pass D tail).** 375 unknown fields and 641 invalid-enum values across the corpus, plus 47 parse-error files. Most are low-single-digit occurrences needing judgement (add to dictionary, rename, or remove).
- **`npm run cog:sync`** to propagate Pass A and Pass B canon fixes into `mx-outputs` regenerated content (skipped as out-of-scope during cleanup).
- **Rebuild Appendices HTML** via `npm run pdf:appendix` before the next publish (Appendix M grew substantially).
- **Watch for stub re-bloat.** Step 8 of step-commit now fails the push if any of the five stubs exceeds 80 lines, so the discipline is enforced going forward.

---

## What This Means for Investors

MX's field governance used to live as prose in multiple documents that diverged over time. As of today, MX has a single prose authority, a machine-readable mirror, a full field dictionary derivable by tools, a scanner that finds every non-compliant file in the ecosystem, an auto-fixer for the mechanical cases, and a gate in the commit workflow that prevents regression. This is the shape of a platform that can scale beyond one author: external contributors (human or AI) have an unambiguous specification to write against, and the commit gate enforces it before anything reaches the network. The audit-report field additions alone (clientUrl, auditTool, accessibilityScore, and siblings) formalise the vocabulary `mx-audit` produces, which matters for every audit report we show a prospect.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 60e74c55 | Split MX field dictionary into standalone data file; fix mx-audit |
| 0fec2bd1 | Consolidate MX field SSOTs into Appendix M; stub former sources |
| 87f4cb2e | Docs: CHANGELOG + REMINDERS for Appendix M field-SSOT consolidation |
| 5d5ed06a | Appendix M: markdownlint auto-fix at section joins |
| d60a9f26 | LEARNINGS: 2 rules from mx-audit repair |
| 5b7136bd | Update mx-outputs pointer (regenerated index) |
| 6e177f1c | Fix camelCase violations: trust-level, derived-from |
| 3d88a7c5 | Add isGenerated, isAiGenerated, generatedBy fields to MX dictionary |
| 2a5e2772 | Validator: enforce generation-provenance consistency rules |
| e75cebdd | Drift prevention: derive validation rules from YAML, add drift checker |
| 8ef25d5a | Add per-file MX field compliance scanner |
| 12d05bc2 | Pass A: dictionary realignment for compliance cleanup |
| d53f6360 | Pass B: mechanical rewrites of deprecated and naming violations (hub) |
| 91e46352 | Pass B: submodule pointer bumps + fixer safety guards |
| 0360ac11 | Pass D first tranche: add 21 missing fields + skip .claude in scanner |
| 0fecf35c | step-commit: add Step 8 MX field compliance gate before push |

Submodule commits:

- mx-outputs: `e79ebf3` (directors report v1), `c17cb71` (index regen), `0fc8b8e` (tag generated content)
- mx-crm: `2c6f22b` (195 mechanical rewrites across 70 files)
- allaboutv2: `5aa3ac9` (10 mechanical rewrites across 5 files)
- mx-collaboration: `5ad1bae` (2 naming rewrites)

---

*Generated as part of `/step-commit` — Step 2 of 9. Supersedes v1.0 of this report (covered only the first two commits of the session).*
