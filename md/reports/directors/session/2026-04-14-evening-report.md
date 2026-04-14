---
title: "Co-Directors Report — Knowledge architecture + audit infill hardening"
description: "Evening segment: LEARNINGS.md redistributed into four new gotcha SSOTs, then the web-audit infill pipeline was hardened against silent skeleton-fill gaps with a full safety-net test suite."
author: "Tom Cranstoun and Maxine"
created: 2026-04-14
modified: 2026-04-14
version: "2.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, knowledge-architecture, web-audit, testing]
---

# Co-Directors Report — Knowledge architecture + audit infill hardening

**Date:** 14 April 2026 — Evening
**Segment:** evening (17:00+)

---

## Summary

Two bodies of work this evening. First: LEARNINGS.md was redistributed into four new SSOT gotcha docs plus three existing homes, turning a 175-line write-only log into a rolling buffer whose rules migrate to the document a future session is already going to read. Second: the web-audit Phase 5 infill pipeline was hardened against a class of silent-failure bugs where placeholder rows stayed un-expanded and the script's own success check could not see it. Nine concrete bugs were fixed, a template contract was declared, and a mocha safety-net suite now catches byte-level regressions and template↔contract drift under the standard `npm test`.

---

## What Was Done

### 1. Four new gotcha SSOTs under `datalake/knowledge/system/`

Each file collects distilled rules (problem → fix bullets), not incident prose:

- `shell-gotchas.md` — sed substring traps, bash heredoc truncation, macOS grep -P absence, Node ESM/CJS packaging, JS destructure/NaN math
- `pdf-gotchas.md` — pandoc title override, xelatex SVG blindness, longtable + samepage conflicts, linkcolor vs urlcolor, hyperref load order
- `audit-gotchas.md` — Puppeteer signature + abort + SPA timeout trio, single-page no-links crashes, file:// limitation, limiter tokensPerInterval normalisation
- `web-gotchas.md` — Cloudflare worker HTML rewrite content-encoding, og:image SVG rejection

### 2. Rules appended to existing homes

- `GIT-README.md` — macOS case-insensitive mv, stale index, large-rename push buffer, detached-HEAD recovery, directory-naming authority
- `.claude/skills/skill-developer/SKILL.md` — folder-format requirement, prose-wins-over-templates, tone at skill level, hook permissiveness, cog-script divergence, .claude/ subagent blocks
- `.claude/skills/mx-c-registry-sync/skill.md` — excludeCogs list, no hardcoded compliance levels on external COGs

### 3. Already codified elsewhere — not re-duplicated

- markdownlint-cli2 (already in markdown-standards.md)
- `x-mx-` vendor prefix (already in vendor-extensions-policy ADR)
- Audit report tone rules (27 existing references in audit-report/skill.md)

### 4. LEARNINGS.md reset as a rolling buffer

File now documents its own migration protocol with a targets table, and carries a template entry only. Future rules land here first, migrate when stable.

### 5. Routing updated

- `UBERCOG.cog.md` routing table: LEARNINGS.md description updated; five new rows point at the gotcha SSOTs
- `CLAUDE.md` reference table: five new rows mirroring UBERCOG

### 6. Process improvement — preference captured

AskUserQuestion tool preference saved to auto-memory (`feedback_use_askuserquestion.md`). Decision points now flow through the structured UI instead of prose Q1/Q2 lists.

### 7. Web-audit infill pipeline hardened (second chunk of the evening)

While running a live audit of mx.allabout.network, several regions of the generated report skeleton were left un-filled by `mx-audit/bin/infill-report.js` even though it reported success. Diagnosed nine concrete bugs, fixed them at the source, and added a safety-net test suite so they stay fixed:

- Template frontmatter was leaking into every client report (script never replaced it)
- Schema Inventory and Pages Audited rows were never expanded
- Cross-Page Consistency missed three rows and the Overall scalar used the wrong JSON key
- Broken Links summary counts + inline `[IF ...]` blocks never resolved
- AI Agent Access table had no sidecar data path
- `audit_averages.json` key is `perPage`, script looked for `pages`
- Magento platform fingerprint matched `max-image-preview` (substring `mage-` too loose), misclassifying static sites
- Consistency scale bug: `100 * 100 = 10000%` in two places
- MX Journey row regex expected `[Pass/Partial/Fail]` but template used `[Pass/Fail]`

### 8. Safety nets added so these cannot silently return

- **Golden-master test** (`test/infill-golden.test.js`) — runs infill against a canned fixture and asserts byte-identical output. Regenerate with `UPDATE_GOLDEN=1` after an intentional change. Catches any drift.
- **Template-contract completeness test** (`test/contract-completeness.test.js`) — bidirectional drift check between each template .md and its sibling .contract.json. Fails on orphan placeholders in either direction.
- **Honest success check** — now warns on markdown table rows still carrying placeholders and on column-count drift, not just single-token gaps.
- **Stale-sidecar timestamp warning** — infill warns when any sidecar's `auditDate` differs from the main audit.
- **Skeleton-stage verifier** (`bin/verify-skeleton.js`) — runs the deterministic verifier against the infilled skeleton *before* the rewrite pass, catching fabricated numeric claims earlier.
- **Table-handler module pattern** — `bin/tableHandlers/pagesAudited.js` extracted as the reference; the remaining row handlers can be moved one at a time with the golden test as the safety net.

### 9. Declarative STRIP-IF DSL

Template authors can now write `<!-- STRIP-IF: path === value -->…<!-- END-STRIP -->` to mark conditional sections. Supports `===`, `!==`, `<`, `>`, `<=`, `>=`, `absent`, `present`. Evaluates against a merged context of all loaded result files. Replaces hand-written regex strips for AI Attribution, Bot Protection, Inline Duplicates.

### 10. Template contract declared

Every placeholder in `web-audit-suite-template.md` (116 tokens) is now declared in `web-audit-suite-template.contract.json` with its filler category (`script-deterministic` / `rewrite-llm` / `post-verifier` / `example-instruction` / `table-row-template`). The completeness test fails CI on any drift.

### 11. Link-type tagging

`mailto:`, `tel:`, `sms:`, `javascript:`, fragment, `data:` URIs now tagged explicitly in `linkAnalysis.js` so the broken-links counter no longer inflates the "network errors" count with links the scanner simply cannot HEAD.

### 12. Documentation refreshed

- [manual-web-audit-suite.cog.md](../../../../../mx-canon/mx-maxine-lives/manuals/manual-web-audit-suite.cog.md) v2.1 — Components, Output Files, two-pass pipeline section, Testing & safety nets section
- [audit-gotchas.md](../../../../../datalake/knowledge/system/audit-gotchas.md) v1.1 — Platform fingerprint, Infill pipeline, Link analysis sections
- [.claude/skills/audit-site/skill.md](../../../../../.claude/skills/audit-site/skill.md) — new "New in v2.3" summary with cross-links

### 13. Filename standardisation

`agent_access.json` → `agent-access.json` (hyphen form). Infill reader falls back to underscore form for older audit runs.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| **Knowledge architecture chunk** | |
| Rules redistributed | 35 |
| New SSOT gotcha docs | 4 |
| Existing docs updated | 3 (GIT-README, skill-developer, mx-c-registry-sync) |
| Routing tables refreshed | 2 (UBERCOG, CLAUDE) |
| **Audit hardening chunk** | |
| Infill bugs fixed | 9 |
| Safety-net mocha tests added | 2 (golden-master + contract completeness) |
| Template placeholders now declared | 116 |
| New support files | 8 (contract.json, 2 tests, fixture dir, verify-skeleton.js, tableHandlers dir + README + first extraction) |
| Submodule commits this evening | 3 (mx-audit × 2, mx-crm × 1) |
| Total commits this evening (all repos, both chunks) | ~8 |

---

## The Insight

Two insights this evening, one per chunk.

**On knowledge architecture.** LEARNINGS.md was a write-only log: rules went in, nothing came out — partly because the file grew long enough that scanning it cost more than re-making the mistake. The fix was not a bigger index but a change of shape: rules migrate out of the buffer to the document a future reader is *already* going to open (shell-gotchas when editing scripts, pdf-gotchas when touching `mx.pdf.sh`, audit-gotchas when a Puppeteer crash shows up). The rule survives where it will actually be re-encountered.

**On silent failures.** The infill script had a success check that lied. It counted unfilled single-token placeholders, but not unfilled *rows* — a pattern like `| [TYPE_1] | [N] | [X]% | ...` contains only "expected" tokens (`N`, `X`), so the check happily passed. The fix was not a better placeholder list but a different *level* of check: count markdown table rows still holding placeholders, and count column mismatches between header and data rows. The pattern generalises — whenever a success message is silent about a failure mode, the fix is usually a check at a different granularity, not a bigger allow-list at the same granularity. Paired with a golden-master test, a single-character regression now fails CI loudly instead of shipping to the client.

---

## Next Steps

- Watch whether the rolling-buffer discipline holds — if LEARNINGS.md drifts back over 50 lines without migration, the split needs a hook to enforce it.
- Consider whether the gotcha docs should be indexed by a top-level `system-gotchas.md` or left as siblings cross-referenced from UBERCOG (currently the latter).
- Extract the remaining row-expansion handlers from `bin/infill-report.js` into `bin/tableHandlers/` modules one at a time. The golden-master test will catch any regression byte-for-byte — safe to do mechanically.
- Author contract files for `ecommerce-audit-template.md` and `dom-analysis-template.md` so the completeness test covers every template that ships with infill.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 911f0866 | Redistribute LEARNINGS.md into SSOT gotcha docs (hub) |
| b4c5d217 | Settings: allow edits on skill-developer and mx-c-registry-sync skills (hub) |
| 5a1851ac | Changelog: 2026-04-14 evening — LEARNINGS.md redistribution (hub) |
| 6aa07f1f | Update mx-outputs pointer (regenerated index) (hub) |
| 7d5b574 | Harden infill-report pipeline; fix 9 silent-skeleton-gap bugs (mx-audit) |
| 75eb722 | Add template contract, safety-net tests, handler extraction pattern (mx-audit) |
| 1e9c4b9 | Update mx-allabout infilled skeleton after infill hardening (mx-crm) |
| *(pending)* | Refresh audit manual, gotchas, audit-site skill; submodule pointer updates (hub) |
