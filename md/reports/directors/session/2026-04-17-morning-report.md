---
title: "Co-Directors Report — First full audit through the hardened pipeline + two mx-audit bugs fixed"
description: "Morning segment: end-to-end mx.allabout.network audit delivered, two reproducible mx-audit bugs surfaced and fixed, skill-doc hygiene sweep"
author: "Tom Cranstoun and Maxine"
created: 2026-04-17
modified: 2026-04-17
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
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
- Patch `scripts/audit-fierce-critic.js:145` to read `auditTool:` (camelCase canonical) so future audit reports don't need the kebab-case duplicate-key workaround.

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
