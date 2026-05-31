---
title: "Stale-Information Scan — MX-Hub"
description: "Alert report. Markdown drift in the repo: broken file refs, dated narrative in always-on rulebooks, MEMORY.md bloat, canonicalUri gaps. Excludes allaboutv2, manuscripts, mx-shared-gathering, tg-community."
author: "Tom Cranstoun"
created: 2026-05-31
modified: 2026-05-31
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business, machines]
  tags: [maintenance, drift, alert, audit, governance]
  runbook: "Read the executive summary, then the MUST-FIX section. The fix sequence at the bottom lists the chunks already approved for execution."
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/scan-stale-information-2026-05-31.md
---

# Stale-Information Scan — MX-Hub

## Executive summary

Three Explore agents and one deterministic scanner swept the MX-Hub repo (excluding `allaboutv2/`, `datalake/manuscripts/`, `mx-shared-gathering/`, `tg-community/`). The hard-gated checks pass cleanly. The unchecked surface — markdown prose, file-path references, agent-local memory — has measurable drift that compounds across sessions.

Headline numbers:

- **38 MUST-FIX** broken file references in always-on rulebooks (CLAUDE.md, SOUL.md, REMINDERS.md, LEARNINGS.md, UBERCOG.cog.md).
- **2,722 HIGH** scanner-flagged references, dominated by `mx-canon/ssot/definitions-index.md` (auto-generated, repeats the same pattern many times) and skill cross-refs.
- **MEMORY.md is 29,860 bytes** against a 24,985-byte cap — index entries are too long, content gets truncated on load.
- **canonicalUri missing systematically** in `mx-canon` internal docs (ADR, BDR, naming-decisions, templates, business papers, `.mx.yaml.md` folder metadata) despite a pre-write hook that claims hard-gate coverage.
- **Dated narrative in CLAUDE.md and SOUL.md** violates the always-on-rulebook rule the files themselves declare.

The full enumeration sits at [`mx-outputs/audit/scan-broken-refs-2026-05-31.csv`](../../../mx-outputs/audit/scan-broken-refs-2026-05-31.csv). The scanner script that produced it is at [`scripts/scan-broken-refs.cjs`](../../../scripts/scan-broken-refs.cjs) — re-run it any time with `node scripts/scan-broken-refs.cjs --csv <out>`.

## What the gates already prove clean

Independently verified on the scan date:

- Auto-generated indexes fresh: `routing-registry.json`, `mx-reginald/index.json`, `.aspell-mx.pws`, `mx-canon/ssot/definitions-index.md`. Test gate `tests/test-indexes-fresh.js` passes.
- Submodule pointers in sync. `git submodule status` shows no `+` / `-` / `U` prefixes.
- MX definition lockstep — `mx-canon/ssot/fields-data.yaml` field count matches the generated index.
- Audit architecture lockstep — `scripts/check-audit-architecture.js` returns "in lockstep with code".
- CHANGELOG.md coherent with the last 20 commits.

The drift below sits outside what these gates cover.

## MUST-FIX

### CLAUDE.md changelog-prose drift

Always-on rulebooks must not carry "as of X" / "landed on Y" narrative. The file itself states this rule and then breaks it.

- [CLAUDE.md:178](../../../CLAUDE.md#L178) — "The voice-scope prompt was actively broken on 2026-05-25 because…"
- [CLAUDE.md:212](../../../CLAUDE.md#L212) — "v2 regime-first shape (2026-05-28)."
- Same line — "structured `frameworks[]` array with 30 enumerated AI regulatory regimes" violates the size-neutral language rule.

### SOUL.md timeless-voice drift

- [SOUL.md:195](../../../SOUL.md#L195) — "In February 2026, the partnership expanded from documenting MX principles to building the infrastructure that makes them operational."
- [SOUL.md:620](../../../SOUL.md#L620) — "The Handbook (published 2 April 2026) and The Protocols (publishes 1 July 2026), plus the shared appendices"

### REMINDERS.md broken or stale references

- [REMINDERS.md:121](../../../REMINDERS.md#L121) — absolute `/Users/tomcranstoun/...` path embedded in repo content.
- [REMINDERS.md:226](../../../REMINDERS.md#L226) — `file:///Users/tomcranstoun/.claude/plans/simething-has-gone-wrong-graceful-eagle.md` — local file:// URL plus "simething" typo.
- [REMINDERS.md:271](../../../REMINDERS.md#L271) — `mx-reginald/audit/benchmarks/peer-scores.json` does not exist. Real path per CLAUDE.md storage layout: `mx-outputs/audit/.benchmarks/peer-scores.json`.
- [REMINDERS.md:275](../../../REMINDERS.md#L275) — `mx-reginald/audit/scripts/repair-report.js` and `repair-report-final.js` paths no longer resolve. Actual location: `mx-reginald/audit/bin/` or `mx-reginald/audit/scripts/` (verify before linking).
- [REMINDERS.md:281](../../../REMINDERS.md#L281) — `mx-canon/ssot/papers/geo-and-mx.md` is the wrong filename. The actual file is `geo-vs-mx.md`.

Plus 18 further backtick references in REMINDERS.md flagged by the scanner — review the appendix.

### Maxine canonical sibling references

The `mx-canon/mx-maxine-lives/businesses/maxine/` directory holds `architecture.md`, `vision.md`, `valuation-model.md` without a `maxine-` prefix. Two high-traffic docs point at non-existent prefixed names:

- [mx-canon/mx-maxine-lives/businesses/maxine/simple-explanation.md:555-560](../../../mx-canon/mx-maxine-lives/businesses/maxine/simple-explanation.md#L555-L560) — references `maxine-architecture.md`, `maxine-vision.md`, `maxine-valuation-model.md`.
- [mx-canon/mx-maxine-lives/businesses/maxine/architecture.md:1179](../../../mx-canon/mx-maxine-lives/businesses/maxine/architecture.md#L1179) — references `maxine-vision.md`.

### npm script drift

Multiple files reference `npm run validate` (bare). The actual scripts in `package.json`: `validate:mx`, `validate:links`, `validate:demo`, `validate:paths`, `validate:multilingual`, plus `cog:validate`. Files to sweep (find with `git grep -nP 'npm run validate(\s|$|\b[^:])'`):

- `.claude/skills/maxine/skill.md`
- `.claude/skills/mx-validator/skill.md`
- `UBERCOG.cog.md`
- Six further hits surfaced by the broad scan.

## HIGH

### MEMORY.md bloat (29,860 bytes vs 24,985-byte cap)

Session-start truncation warning is firing. The file's own design rule — "keep index entries to one line under ~200 chars; move detail into topic files" — is being violated by entries that grew into full prose. Top three compression candidates:

1. **Reginald audience-split feedback entry** (~800 bytes inline) — collapse to one-line pointer; full rationale is in the topic file already.
2. **Ollama deep-research synthesis** (~1,200 bytes inline) — the decision lives in CHANGELOG 2.89 and a REMINDERS item already; MEMORY entry should be a one-line link.
3. **Humanizer rule edge-cases** (~650 bytes inline) — six scanner edge-cases that belong in a topic file under `.claude/skills/humanizer/` not in the index.

Target after compression: < 24,000 bytes.

### canonicalUri gap in mx-canon internal docs

Random sample of 30 `.md` / `.cog.md` files under `mx-canon/` (excluding the gathering submodule) found `canonicalUri:` missing systematically in:

- `mx-canon/mx-maxine-lives/CHANGELOG.md`
- `mx-canon/ssot/SOUL.md`
- `mx-canon/mx-maxine-lives/registers/BDR/*.cog.md`
- `mx-canon/mx-maxine-lives/registers/.mx.yaml.md` and other `.mx.yaml.md` folder-metadata files
- `mx-canon/ssot/templates/copyright-and-attribution.md`
- `mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/inspector-cli-offering.md`
- Plus ~24 further files across registers / naming-decisions / architecture / templates / papers / business-case directories.

The pre-write hook at [.claude/hooks/pre-write-frontmatter.sh](../../../.claude/hooks/pre-write-frontmatter.sh) is declared "hard-gated" in CLAUDE.md but does not cover these paths. Two paths forward — widen the hook scope, or backfill the missing fields. The `.mx.yaml.md` folder-metadata files probably belong outside the hook; content cogs and reports almost certainly belong inside it.

### Broken-ref noise in auto-generated indexes

`mx-canon/ssot/definitions-index.md` accounts for 2,142 of the 2,722 HIGH findings. Because the file is auto-generated, the fix is in the generator: investigate why generated links point at paths that don't resolve, or add a generator-side exclusion. The full list sits in the appendix CSV.

## MEDIUM

### Validation-report generator regression

42 entries under `mx-config/validation-reports/*.md` uniformly point at `scripts/mx-validator.js` (should be `.cjs`) and a bare `principles.cog.md` (should be `mx-canon/ssot/principles.cog.md`). Fix the generator, not the 42 reports.

### REMINDERS.md completed-work residue

The file's own §5 policy says delete completed items, do not tick them. Candidates to delete:

- "MXPrintWorks vs MX Printworks" branding decision — decided in `mx-crm/contacts/scott-mcgregor/scott-mcgregor.cog.md`.
- "Watching-the-machines drafts editing" — work landed per CHANGELOG 2.89.
- "Gate 0-rewrite for rewrite-failure surface" — committed 2026-05-30.
- "Audit cog + PRD still carry legacy canonicalUri" — verify whether the cog v1.3 sync resolved it; if so, delete.

### "Currently" framing in canon prose

- [mx-canon/mx-the-gathering/TODO.md:39](../../../mx-canon/mx-the-gathering/TODO.md#L39) — "Three cogs currently carry seven `x-mx-prov-*` extension fields" — drift-prone inventory claim.
- [mx-canon/ssot/papers/conversation-reconciliation-may-2026.md:136](../../../mx-canon/ssot/papers/conversation-reconciliation-may-2026.md#L136) — "the canon currently scopes COGs to web-resolvable artefacts" — restate timeless.

### Retrospective project event in a pitch substrate

[mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/adobe-semrush-investor-note.md:31](../../../mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/adobe-semrush-investor-note.md#L31) — "Expected H1 2026, subject to regulatory and shareholder approval. Founders and 75%+ of voting power have committed." Dated commitment language in pitch substrate. Archive or restate forward-only.

## LOW

Intentional historical narration. Do not fix unless the doc is being retired.

- `CHANGELOG.md` references to files deleted in the same commit it describes — e.g. the cert-of-genuineness submodule-sweep item in the 2.89 entry references a `cert-genuineness-submodule-sweep.md` that the same change deleted. This is correct historical narration.
- `mx-canon/mx-maxine-lives/management/changelog-archives/changelog-archive-*.md` references to excluded submodules (`allaboutv2/`, `mx-shared-gathering/`) — historical, scoped to archive.
- `datalake/knowledge/architecture/context-preserving-*.md` placeholder paths — deliberate teaching examples.
- Backtick references inside code-block samples that are not real file refs — the scanner can't tell prose from code, so a small fraction of MUST-FIX/HIGH counts are illustration code. Treat the curated list above as authoritative.

## Recommended fix sequence (already approved)

1. **Chunk 2B — MEMORY.md compression.** Agent-local, no commit. Compress the three flagged entries to one-line pointers. Target < 24KB. Do first so subsequent sessions read a clean index.
2. **Chunk 2A — hub edits.** Single hub commit. CLAUDE.md (lines 178, 212), SOUL.md (lines 195, 620), REMINDERS.md (the five MUST-FIX refs plus the four MEDIUM deletions), maxine sibling refs, `npm run validate` sweep, "currently" reframing in TODO.md and conversation-reconciliation paper, adobe-semrush investor note archive.
3. **Chunk 2C — canonicalUri sweep.** Separate commit. Inventory script first; backfill content docs; raise REMINDERS item for the hook-scope decision on `.mx.yaml.md` folder metadata.
4. **Defer** — validation-report generator path-resolution fix. Note in REMINDERS for follow-up. The 42 stale generated reports will refresh as soon as the generator is fixed.

## Verification

- After 2A: `npm run test`, then `git grep -nE '2026-05-25|2026-05-28|February 2026|publishes 1 July 2026|published 2 April 2026' CLAUDE.md SOUL.md` returns no hits.
- After 2A: `git grep -nE 'maxine-architecture\.md|maxine-vision\.md|maxine-valuation-model\.md|geo-and-mx\.md|simething-has-gone' mx-canon/ REMINDERS.md` returns no hits.
- After 2B: `wc -c /Users/tomcranstoun/.claude/projects/-Users-tomcranstoun-Documents-GitHub-MX-hub/memory/MEMORY.md` returns < 24,985.
- After 2C: re-run inventory script; missing-canonicalUri count for content docs goes to zero.
- Pre-push Gate 9 confirms submodule HEADs match hub pointers on push.

## Appendix — full enumeration

The full machine-readable enumeration of 6,097 scanner findings lives at:

- [`mx-outputs/audit/scan-broken-refs-2026-05-31.csv`](../../audit/scan-broken-refs-2026-05-31.csv) — columns: `severity, file, line, kind, target, note`.

Per-directory severity counts (top buckets):

| Bucket | MUST-FIX | HIGH | MEDIUM | LOW |
|--------|----------|------|--------|-----|
| `CLAUDE.md` | 1 | 0 | 0 | 0 |
| `SOUL.md` | (4 prose, not in scanner) | 0 | 0 | 0 |
| `REMINDERS.md` | 23 | 0 | 0 | 0 |
| `LEARNINGS.md` | 11 | 0 | 0 | 0 |
| `UBERCOG.cog.md` | 2 | 0 | 0 | 0 |
| `CHANGELOG.md` | 0 | 0 | 0 | 26 |
| `.claude/skills/` | 0 | 360 | 0 | 0 |
| `mx-canon/ssot/` | 0 | 2,345 | 0 | 19 |
| `mx-canon/mx-maxine-lives/` | 1 | 0 | 246 | 1,841 |
| `mx-canon/mx-the-gathering/` | 0 | 17 | 0 | 108 |
| `mx-reginald/audit/` | 0 | 0 | 112 | 0 |
| `mx-reginald/` (other) | 0 | 0 | 28 | 13 |
| `scripts/cogs/` | 0 | 0 | 302 | 0 |
| `datalake/knowledge/` | 0 | 0 | 0 | 359 |
| `datalake/pipeline/` | 0 | 0 | 0 | 111 |
| `mx-crm/` | 0 | 0 | 0 | 10 |
| `tests/` | 0 | 0 | 0 | 16 |

Note: the HIGH cluster in `mx-canon/ssot/` is dominated by `definitions-index.md` (2,142 of 2,345). That file is auto-generated; the fix is in the generator, not in the index.

To re-run the scan and refresh the CSV:

```bash
node scripts/scan-broken-refs.cjs --csv mx-outputs/audit/scan-broken-refs-$(date +%Y-%m-%d).csv
```
