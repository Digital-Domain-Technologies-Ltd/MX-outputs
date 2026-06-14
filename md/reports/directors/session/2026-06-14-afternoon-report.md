---
title: "Co-Directors Report - PR Merge, Canon Registration, and CI Fix"
description: "Merged PR #35 (x-mx-quotes), completed follow-up canon registration, fixed GitHub Actions CI permission failure."
author: "Tom Cranstoun"
created: 2026-06-14
modified: 2026-06-14
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-14-afternoon-report.md
  purpose: "Merged PR #35 (x-mx-quotes), completed follow-up canon registration, fixed GitHub Actions CI permission failure."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - PR Merge, Canon Registration, and CI Fix"]
---

# Co-Directors Report - PR Merge, Canon Registration, and CI Fix

**Date:** 14 June 2026 - Afternoon
**Segment:** Afternoon (since noon)

---

## Summary

This afternoon closed out the work started in the morning session. PR #35 (x-mx-quotes verbatim-quote exemption, thin-clone-aware hooks, dream-skill direction) was merged onto main, delivering 188 changed files. The follow-up canon registration landed immediately after: `x-mx-quotes` is now formally recorded in `cognovamx-fields.yaml` v6.16 with full definition and notes. A GitHub Actions CI permission failure that had been blocking PR comment posting was also diagnosed and fixed in one commit.

---

## What Was Done

### 1. PR #35 merge and main-repo pull

PR #35 was reviewed, confirmed clean (YAML validation passing, Vercel deployed), and merged. The local repo was pulled, bringing 188 changed files onto main including the new `scripts/gen-mx-quotes.cjs`, the pre-commit hook `pre-commit-mx-quotes.sh`, the thin-clone awareness patches to both git hooks, the prose-source scanner wiring, and two blog drafts.

### 2. Canon registration for x-mx-quotes

The field `x-mx-quotes` was registered in `cognovamx-fields.yaml` as a `vendor-cognovamx` profile entry (v6.16), completing the MX definition lockstep. The definitions index was regenerated (1500 concepts), and the routing registry and hooks registry were also refreshed to clear Gate 8. Three commits landed to achieve a clean push.

### 3. GitHub Actions CI fix

The `html-regression.yml` workflow was failing with HTTP 403 on every PR comment-posting step. Root cause: no `permissions:` block on the job, leaving `GITHUB_TOKEN` defaulted to read-only. Fixed by adding `pull-requests: write` to the job. This unblocks the HTML regression check from reporting results on future PRs.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 11 |
| Files changed | 198 |
| Lines added | +1,542 |
| Lines removed | -26 |
| Repositories | 1 (hub only) |
| PRs merged | 1 (#35) |
| Canon version bump | 6.15 -> 6.16 |

---

## Why It Matters

The x-mx-quotes field closes a correctness gap in the prose-quality scanners: without it, every verbatim blockquote in a document would be flagged as an AI-style writing violation, producing false positives that erode trust in the scanner output. Registering it in the canon makes the exemption part of the formal field dictionary rather than a convention held only in code. The CI fix restores the HTML regression check's ability to report on PRs - a gate that has been silently non-reporting since the workflow was authored.

---

## Decisions Made

- `x-mx-quotes` is a `vendor-cognovamx` extension (not open standard `fields-data.yaml`) - correct per the namespace policy: `x-mx-` prefix signals CogNovaMX ownership.
- HTML regression workflow gets `pull-requests: write` at the job level only, not repo-wide, following least-privilege.

---

## Next Steps

- Register `x-mx-quotes` in the open-standard gathering draft if The Gathering ratifies it (currently CogNovaMX-only)
- Build the HTML/submodule population path for `x-mx-quotes` so served mx-site HTML also carries the exemption
- Research dream-skills spec (per-span provenance) - REMINDERS item added 2026-06-14

---

## Commit Log

| Hash | Description |
|------|-------------|
| a42dc6f2 | fix(ci): add pull-requests: write permission to html-regression workflow |
| 1c1649ed | regen: refresh hooks registry.json |
| 99b8888d | regen: refresh routing-registry and hooks INDEX after x-mx-quotes merge |
| b0d800c0 | feat(canon): register x-mx-quotes in cognovamx-fields.yaml v6.16 |
| 72860835 | Merge pull request #35 |
| 7cacd939 | Document x-mx-quotes + dream skill; add feature blog; update reminders |
| 0a07c358 | Make git hooks thin-clone aware; still enforce on full clones |
| a48682bb | Verify, heal, and protect x-mx-quotes freshness |
| 0c3a002f | Populate x-mx-quotes across hub markdown from blockquotes |
| 228d6bdf | Add x-mx-quotes verbatim-quote exemption for prose scanners |
| 1d628584 | Style pass on Cannemeijer blog post |
