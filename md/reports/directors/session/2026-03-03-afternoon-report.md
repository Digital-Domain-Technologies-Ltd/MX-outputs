---
title: "Co-Directors Report — Cleaning the Last Fingerprints"
description: "Afternoon session report. Four work streams: allaboutv2 carrier compliance (4%→99%), npm vulnerability elimination (0 vulnerabilities), field dictionary reference sweep (40+ files), and redirect file removal."
created: "2026-03-03"
segment: "afternoon"
version: "1.0"
author: "Tom Cranstoun and Maxine"
audience: "stakeholders"
confidentiality: "internal"
---

# Co-Directors Report — Cleaning the Last Fingerprints

**3 March 2026 — Afternoon**

---

## Summary

Building on this morning's infrastructure work, the afternoon was pure consolidation — extending compliance to the last excluded directory, eliminating every security vulnerability in the build pipeline, and tracking down every stale reference to a file that no longer exists.

The morning created the SSOT and the carrier compliance tooling. The afternoon proved they work at scale: allaboutv2 went from 4% to 99% carrier compliance, npm audit reached zero vulnerabilities for the first time, and a redirect file that should never have existed was deleted along with every reference to its old location across 40 files.

This is the kind of work that does not produce new features. It produces trust. Every path now resolves. Every dependency is clean. Every tool points to the right source.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (afternoon) | 7 |
| Unique files touched | 40 |
| Lines added | 12,037 |
| Lines removed | 2,554 |
| npm vulnerabilities | 8 → 0 |
| allaboutv2 carrier compliance | 4% → 99% |
| Stale references fixed | 40+ across 30 files |
| Redirect files removed | 1 |
| Registry cogs | 160 → 159 (redirect removed) |

---

## What Was Done

### Carrier Compliance on allaboutv2 (commit 50af5ff0)

The morning's carrier compliance audit had excluded `allaboutv2/` — the live website directory. This afternoon, the exclusion was removed from both the audit and remediation scripts, and the full remediation ran: 465 files received MX carrier metadata. The website directory went from 4% to 99% compliant, bringing the total ecosystem to 940 files at 99%.

### npm Vulnerability Elimination (commits 52c8726a, d854c619)

A CI pipeline failure surfaced 8 npm audit vulnerabilities. Root causes:

1. **`markdownlint-cli`** — a dead dependency carrying `ajv` and `minimatch` vulnerabilities. Removed from both root and mx-audit `package.json`. The project uses `markdownlint-cli2`, not `markdownlint-cli`.
2. **`pa11y` 8.x** — carried a vulnerable `jsonpath` transitive dependency. Upgraded to 9.1.1.
3. **`xmlbuilder2` 3.x** — carried a vulnerable `js-yaml`. Upgraded to 4.0.3.
4. **`mocha` transitive deps** — `serialize-javascript` and `diff` had known vulnerabilities. Fixed via npm overrides in root `package.json` (workspace packages ignore local overrides).
5. **`tar`** — vulnerability via `@mapbox/node-pre-gyp`. Fixed via npm override.

Result: `npm audit` returns 0 vulnerabilities. All 170 mx-audit tests pass.

### Field Dictionary Reference Sweep (commits cf6e77ba, d706c656)

The morning created `mx-canon/ssot/fields.cog.md` and left a redirect at the old location. This afternoon, the redirect was deleted and every reference to the old paths was hunted down:

- **Old FDR path** (`mx-canon/mx-maxine-lives/registers/FDR/field-dictionary.cog.md`) — updated in ADRs, NDRs, manuals, routing files, content copies
- **Old specifications path** (`mx-canon/mx-the-gathering/specifications/field-dictionary.cog.md`) — updated in README, namespace docs, architecture decisions
- **Generic filename** (`field-dictionary.cog.md`) — updated to `fields.cog.md` in cog-unified-spec, carrier audit tool, cog-tools
- **`buildsOn` references** — 5 cogs referenced `field-dictionary` as a dependency; updated to `fields`
- **JavaScript constants** — `FIELD_DICT_PATH` in mx-audit.js and mx-rename-tracker.js pointed to the old FDR path
- **Shell script** — `mx-about-recon.sh` looked for the field dictionary at the old register location

30 files in the main repo, 10 in allaboutv2. Registry regenerated: 159 cogs, 0 errors.

---

## What Changed About Me

Reginald indexes 160 cogs (down from 161 — the redirect file was removed from the registry). The recon script now reads the field dictionary from its SSOT location. NDR count adjusted after naming decision restructure.

---

## Decisions Made

1. **No redirect files.** When a file moves, update all references. Do not leave stubs. Stubs accumulate and confuse future tooling.
2. **npm overrides in root only.** Workspace packages cannot use local overrides. All transitive dependency fixes go in the root `package.json`.
3. **`markdownlint-cli` is dead.** This project uses `markdownlint-cli2`. The old CLI corrupts YAML frontmatter and carries unnecessary vulnerabilities.
4. **Historical reports are immutable.** Dated session reports and audit outputs in `mx-outputs/` are snapshots. Stale references in historical files are not updated — they reflect the state at the time of writing.

---

## Next Steps

- Update CHANGELOG.md with afternoon work (npm fixes, allaboutv2 compliance, reference sweep)
- Frankfurt CMS Summit preparation (70 days) — demo scripting against the now-stable infrastructure
- Handbook publication (30 days) — manuscript references verified against SSOT
- LinkedIn ad re-submission using messaging materials

---

## Commit Log

| Hash | Theme |
|------|-------|
| `a25b037a` | Co-directors morning report, update reminders and self-knowledge |
| `50af5ff0` | Carrier compliance on allaboutv2 — 4% → 99% (465 files remediated) |
| `8736d7f5` | Mark allaboutv2 carrier compliance complete in reminders |
| `52c8726a` | Resolve npm audit vulnerabilities — remove markdownlint-cli, upgrade markdownlint-cli2 |
| `d854c619` | Resolve all npm audit vulnerabilities — 0 vulnerabilities |
| `cf6e77ba` | Update all field-dictionary references to SSOT path |
| `d706c656` | Remove field-dictionary redirect, update all references to SSOT |

---

*The board does not read git logs. This report makes sure they do not have to.*
