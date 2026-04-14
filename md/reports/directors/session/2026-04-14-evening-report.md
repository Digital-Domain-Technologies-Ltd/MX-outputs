---
title: "Co-Directors Report — LEARNINGS.md redistributed to SSOT gotcha docs"
description: "Evening segment: 35 proven rules moved from LEARNINGS.md into four new gotcha SSOTs and three existing skill/doc homes; LEARNINGS.md reset as a rolling buffer."
author: "Tom Cranstoun and Maxine"
created: 2026-04-14
modified: 2026-04-14
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, knowledge-architecture]
---

# Co-Directors Report — LEARNINGS.md redistributed to SSOT gotcha docs

**Date:** 14 April 2026 — Evening
**Segment:** evening (17:00+)

---

## Summary

LEARNINGS.md had grown to 175 lines — 35 dated "Rule" entries that were really a mix of incident narrative and durable guidance, all in one file, only retrieved by luck. We split it: each rule now lives in the SSOT document that a future session is likely to read anyway. LEARNINGS.md itself becomes a rolling buffer with a migration checklist, not a permanent archive. UBERCOG and CLAUDE.md reference tables point directly at the new gotcha docs.

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

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Rules redistributed | 35 |
| New SSOT docs | 4 |
| Existing docs updated | 3 (GIT-README, skill-developer, mx-c-registry-sync) |
| Routing tables refreshed | 2 (UBERCOG, CLAUDE) |
| Files changed (hub) | 11 |
| Net line change (hub) | +94 / −159 (LEARNINGS.md trim dominates) |
| New gotcha-doc line count | 168 (distilled from ~175 of incident prose) |
| Submodule commits this segment | 0 |

---

## The Insight

LEARNINGS.md was acting as a write-only log. Rules went in, nothing came out — partly because the file grew long enough that scanning it cost more than re-making the mistake. The fix was not a bigger index but a change of shape: rules migrate out of the buffer to the document a future reader is *already* going to open (shell-gotchas when editing scripts, pdf-gotchas when touching `mx.pdf.sh`, audit-gotchas when a Puppeteer crash shows up). The rule survives where it will actually be re-encountered.

---

## Next Steps

- Watch whether the rolling-buffer discipline holds — if LEARNINGS.md drifts back over 50 lines without migration, the split needs a hook to enforce it.
- Consider whether the gotcha docs should be indexed by a top-level `system-gotchas.md` or left as siblings cross-referenced from UBERCOG (currently the latter).

---

## Commit Log

| Hash | Description |
|------|-------------|
| *(pending)* | Redistribute LEARNINGS.md into SSOT gotcha docs |
