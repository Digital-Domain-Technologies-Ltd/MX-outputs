---
title: "Co-Directors Report - Dream Pipeline, Blog Truth-Check, and Split-Lines Refactor"
description: "Dream ran across all nine COGs; blog stale claims fixed; split-lines refactored into 14 callers; repo link health diagnosed."
author: "Tom Cranstoun"
created: 2026-06-15
modified: 2026-06-15
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-15-afternoon-report.md
  purpose: "Dream ran across all nine COGs; blog stale claims fixed; split-lines refactored into 14 callers; repo link health diagnosed."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Dream Pipeline: First Full Run and Quality Fixes"]
---

# Co-Directors Report - Dream Pipeline: First Full Run and Quality Fixes

**Date:** 15 June 2026 - Afternoon
**Segment:** Afternoon (since noon)

---

## Summary

The Dream mistake-mining system ran for the first time across all nine content types, classifying 913 findings from Claude Code sessions, blog posts, scripts, and the repository's own structure. Two classes of false positive were identified and fixed at source so they cannot recur. The session closed with all gates green and the full findings corpus committed.

---

## What Was Done

### 1. First Full Dream Run

Dream processed every scan target in sequence using Ollama on the local machine. No session data left the machine. The nine COG types produced findings across distinct classes of problem: the blog truth-check found 474 time-sensitive claims; the session structural patterns scan found 220 bad shell patterns from past Claude Code sessions; the repo link health scan found 109 absolute links in draft-site markdown that should be relative; scripts improvements found 70 code quality issues; library opportunities found 17 cases of duplicated inline logic; and the three housekeeping scans (dream cog suggestions, claude-files consistency, dream cog health) found 22 issues in the tooling itself.

All findings are now committed as per-type JSONL and markdown report files in `datalake/dream-files/`. The exclusions files mean future runs skip already-classified candidates - each run surfaces only genuinely new material.

### 2. False Positives Fixed at Source

Dream flagged two findings that were not real problems. Both were fixed in the extractor code rather than dismissed by hand, so they cannot come back.

The first was the `blog-discovery-sync.sh` hook flagged as using a fragile relative `cd` path. The hook derives its working directory from `${BASH_SOURCE[0]}` - a safe pattern - but the extractor's negative lookahead did not recognise `$(` (command substitution) as an allowed prefix. One character added to the regex; the false positive is structurally impossible from now on.

The second was `Math.random()` in `scripts/dream.cjs` flagged as non-deterministic. The scripts extractor matched the regex literal inside the `IMPROVEMENT_PATTERNS` array definition - the scanner hitting its own source. One line added to skip `dream.cjs` from its own scan; the false positive cannot recur.

### 3. Infrastructure Fixes from Findings

The session also acted on findings immediately. A shared `splitLines()` helper was added to `scripts/lib/` to replace the repeated `.split('\n').filter(Boolean)` pattern - identified as fragile on Windows CRLF - across 17 callers. The `audit-access/skill.md` file was missing the standard "When to use" and "How to invoke" sections required by the consistency check; both were added. The dream report generator was fixed to emit `x-mx-contextProvides` in every report's frontmatter, after the pre-push gate rejected seven reports that were missing it.

---

## The Insight

A mistake-mining system that can flag problems in its own extractor code is a meaningful reliability test. Both false positives surfaced within the first full run and were fixable in under ten minutes. The fact that the extractor is specific enough to flag real patterns but naive enough to match its own source code tells us the extraction layer needs a small amount of self-awareness - a skip-self rule and tighter lookaheads. Both are now in place. The system is more trustworthy for having failed once in a diagnosable way.

---

## Decisions Made

- False positives are fixed in the extractor, not added to an exclusions list - exclusions are for genuine findings that have been reviewed and accepted, not noise suppression
- `dream.cjs` is now excluded from its own scripts scan by name; any other script that defines its own pattern tables should be added to the same skip list when it surfaces

---

## What Was Done (continued - session continuation)

### 4. Split-Lines Wired into 14 Callers

The `scripts/lib/split-lines.cjs` helper (CRLF-safe line splitting) was wired into 14 of the 17 callers flagged by the library-opportunities scan. Two were deferred: `audit-pipeline.js` (inside a large complex function requiring careful scope review) and `dream.cjs` (the empty catch block per an existing directive). All 14 callers now use the shared helper rather than the fragile `.split('\n').filter(Boolean)` pattern.

### 5. Blog Truth-Check Findings Actioned

The 474 findings from the blog truth-check Dream scan were reviewed. The vast majority were Ollama false positives: the local model's training predates 2026 and it classifies `2026` dates as "future year" claims; JSON-LD "syntax errors" were extraction truncation artefacts. The genuine actionable findings were four stale claims across three posts:

- `what-is-machine-experience.md` and `data-sovereignty.md`: "MX: The Protocols (launching April 2026)" corrected to "publishing July 2026" - both republished live
- `machine-experience-adding-metadata.md`: stale present-tense "It's January 2026" opener rewritten to past tense ("In January 2026, Google, Microsoft, and Amazon all launched...") - republished live
- `mx-the-blog.md`: same stale opener fixed in Zone 2 draft (not yet published to Zone 3)

### 6. Repo Link Health Diagnosed

The 109 findings from the repo-link-health Dream scan were investigated. `npm run links:fix` returned zero fixes because the tool only repairs wrong-depth relative links - not site-relative CMS source URLs (`/blog/foo.html`, `/books/`). The draft-site markdown intentionally uses these site-relative forms as source references. Fixing them requires a custom script to calculate relative depth from each file's position within `datalake/draft-site/`. Flagged as a follow-on; no links were changed.

---

## Next Steps

- Build custom script to resolve 109 draft-site absolute site-relative links to correct relative paths
- Promote Fable 5 blog post from Zone 2 to Zone 3 once Tom has reviewed
- Test Gitea end-to-end
- Review LPC and Los G sites
- Wire Gitea push into audit-pipeline.js (Phase 4)
- Build auditor handoff tool (Phase 7)
