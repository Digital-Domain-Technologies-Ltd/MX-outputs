---
title: "Co-Directors Report - Web-audit accuracy fixes caught by the post-PDF cross-check"
description: "A live subpath audit surfaced four reporting defects; all were fixed at source and the docs brought into step."
author: "Tom Cranstoun"
created: 2026-06-09
modified: 2026-06-09
version: "1.0"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-09-afternoon-report.md
  purpose: "A live subpath audit surfaced four reporting defects; all were fixed at source and the docs brought into step."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Web-audit accuracy fixes caught by the post-PDF cross-check"]

---

# Co-Directors Report - Web-audit accuracy fixes caught by the post-PDF cross-check

**Date:** 9 June 2026 - Afternoon
**Segment:** afternoon (since noon)

---

## Summary

We ran a web audit of a children's education site scoped to its English subpath. The scripted pipeline produced a clean, gate-passing report, but the mandatory post-PDF cross-check (the read-only verification pass that re-reads the published report against the collected evidence) found four defects the gates could not see, because the defects were in the data the gates trusted. The most serious was a finding telling the client to add a sitemap they already publish. All four were traced to source, fixed, and confirmed by a clean re-run; the audit documentation was then brought into step.

---

## What Was Done

### 1. Audit run and verification

We audited the site's English subpath under a ten-page cap. Phase 1 through PDF ran clean and all gates passed. The post-PDF cross-check then verified every substantive claim against the cache and live fetches, and surfaced four problems: a false "no sitemap" finding (the sitemap exists, is graded elsewhere in the same report, and is announced in robots.txt), a contradictory image alt-text reading (one section said seventy per cent of images lacked alt text, another said all of them carried it), a heading claim that contradicted the report's own heading-skip finding, and a pricing line that warranted checking. We confirmed each against the collected evidence before acting.

### 2. Four fixes at source, not hand-patches

Rather than patch the one report, we fixed the generators so every future audit benefits:

- The sitemap-existence check no longer misreads a subpath entry (such as `/en`) as a single page that skips sitemap discovery. It now discovers and grades the sitemap from the robots declaration regardless of entry type, while keeping the crawl scoped to the requested path. This defect affected every subpath and language-tree audit we run.
- The pre-flight alt-text count now excludes images the analysis already marks decorative, so the headline finding and the image appendix can no longer disagree. The false high-priority accessibility finding disappears.
- The "what's working well" heading line is now gated on the measured heading data instead of asserting compliance unconditionally.
- The buyer-journey pricing line no longer claims "pricing visible" when the only signal is a course-type schema with no actual price. On this site the line was in fact accurate (the site does show prices), so the guard correctly left it alone; it protects the genuine no-pricing case.

The audit test suite passes after the changes, and a clean re-run produced a corrected report and PDF.

### 3. Documentation brought into step

We added a "Cog, script, and skill" explainer to the audit cog and a matching "I need to audit a website" route to the root UBERCOG, both recording the same point: the cog and the `npm run audit` aliases drive one deterministic engine, and the cog is what adds the contract and the mandatory cross-check on top. The audit-suite lockstep sentinel was bumped across all eight sibling surfaces, and the changelog records the fixes.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Files changed (this session) | 14 |
| Lines added | +186 |
| Lines removed | -68 |
| Generators fixed | 4 |
| Audit doc surfaces re-synced | 8 |
| Commits | 0 (none requested yet) |
| Deliverable | one corrected audit report + tagged PDF |

The hub working tree carried substantial unrelated changes from earlier work before this session began; the figures above count only the files this session touched.

---

## Why It Matters

The audit is the first conversation in a partnership, so a single false finding costs credibility. "Add a sitemap you do not have" to a prospect who does have one, and who announces it in the standard place, reads as a tool that did not look. Because the bug sat in the subpath code path and our host-slug keys multilingual audits by path, every `/en` or `/de` audit we have run carried the same risk. Fixing it at source converts a recurring credibility leak into a one-time correction that travels to every future audit.

---

## The Insight

The deterministic gates verify that the report is internally well-formed and that its numbers match the source files. They cannot catch a defect that lives in the source files themselves, where two generators disagree about the same fact, or where a probe records the wrong answer. The post-PDF cross-check is the layer that reads the finished report the way a sceptical client would, against the evidence, and it earned its place this session by catching exactly that class of defect. It is the difference between "a report came out" and "a report we can stand behind."

---

## Decisions Made

- Fix the generators at source rather than hand-patch the single report, because the sitemap defect recurs on every subpath audit and a hand-patch would lose the fix next run.
- Keep the cog/script/skill layering captured in canonical docs (the cog and UBERCOG) rather than only in conversation, since the question recurs.

---

## Next Steps

- Commit the four generator fixes and the doc updates when ready, taking care to separate them from the pre-existing working-tree changes so the commit is clean.
- Optional follow-up: tighten the image-appendix wording so it does not describe decorative images as carrying a "description"; it is no longer contradictory, only slightly loose.

---

## Commit Log

| Hash | Description |
|------|-------------|
| _pending_ | Fix subpath sitemap detection, decorative alt-text count, heading highlight, journey pricing wording; add cog/script/skill layering explainer to mx-audit cog and UBERCOG; bump audit-suite sentinel |
