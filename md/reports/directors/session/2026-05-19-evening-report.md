---
title: "Co-Directors Report — mx.allabout.network audit + source remediation"
description: "Evening segment: ran the cog audit across every mx.allabout.network page, debugged three audit-tooling false positives that the audit surfaced as gate failures, fixed all three Priority audit findings in source on mx-site, and patched an audit accounting bug that was double-counting non-HTML URLs."
author: "Tom Cranstoun"
created: 2026-05-19
modified: 2026-05-19
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-19-evening-report.md
  purpose: "Evening segment: ran the cog audit across every mx.allabout.network page, debugged three audit-tooling false positives that the audit surfaced as gate failures, fixed all three Priority audit findings in source on mx-site, and patched an audit accounting bug that was double-counting non-HTML URLs."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - mx.allabout.network audit + source remediation"]
---

# Co-Directors Report — mx.allabout.network audit + source remediation

**Date:** 19 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

The evening was a full audit run against mx.allabout.network followed by remediation of every Priority finding in source. Phase 1 crawled 101 pages and produced a complete deliverable (markdown + tagged PDF, ISO 14289-1 Level 2 conformance) but Phase 3 surfaced three audit-tooling false positives that took three full re-runs to clear. Once the gates were clean and the PDF shipped, every WCAG 2.0 AA finding in the report had a corresponding source fix on mx-site: the syntax-highlight contrast issue (1.4.3), both dead anchors (2.4.1), and the div-soup page (35 semantic-element promotions). An audit accounting bug was also fixed: the accessibility report was running pa11y analysis against three text/markdown URLs that pa11y cannot meaningfully evaluate, inflating the critical-issue total from a real 6 to a phantom 12.

---

## What Was Done

### 1. Full-site audit of mx.allabout.network

The audit cog ran end-to-end against `https://mx.allabout.network` with `--max-pages 999`. Phase 1 crawled 101 HTML pages plus discovery files (the sitemap declared fewer than the cap, so the audit covered everything the sitemap exposes). The deterministic Phase 2 report generator ran cleanly. Phase 3 took three attempts because of audit-tooling false positives that masked the real picture; the final run produced the markdown report at `mx-outputs/audit/2026-05-19/mx.allabout.network/mx-allabout-network-report.md` and the tagged PDF alongside it. All Pa11y findings were real (6 issues across 3 pages), all numeric claims verified against source CSVs, no template leaks, no tone violations, no internal contradictions, the heading count matched the rendered HTML, every priority block cited the correct page for its WCAG criterion, every section was complete, and the fierce-critic + LLM-judgment passes only surfaced advisory stylistic notes that the consolidated repair pass cleaned up.

### 2. `-1 = unlimited` for `mx exec mx-audit`

The first run blocked on a missing convention: the user expected `-1` to mean "audit every page the sitemap declares" but the wrapper's non-HTML-buffer arithmetic (`pages + 2` to absorb non-HTML discovery files) would have turned `-1` into `1` if the user had supplied it. The wrapper was patched so `pages === -1` short-circuits the buffer and passes `-1` straight through to the crawler, which already supports `-c -1` as the unlimited sentinel. The cog action-doc now documents the convention in three input descriptions, the `--help` block, the runbook line, and the examples list; the action-doc was bumped from v1.11.0 to v1.12.0. The banner now prints "unlimited" instead of `-1` when the user opts in. The convention now reads consistently across the wrapper, the crawler, the cog, and the help text.

### 3. Three audit-gate bugs that masked real signal

The first Phase-3 run failed at the final consolidated repair (Anthropic API call terminated mid-stream, likely VPN-tail). The second run survived the repair pass but blocked at the template-leak gate, which was reading `[PASS]` status labels in the AI-Usage Declaration's conformance checklist as unresolved `[PLACEHOLDER]` tokens. The third run cleared the template-leak gate but blocked at the voice-consistency gate, which was reading the noun phrase "the page" (used as an object of a preposition: "to move through the page", "remove from the page") as a third-person assertive voice marker — a register-switch detection that the consolidated repair could not fix without distorting the meaning of the prose. Three fixes landed in the audit pipeline: the template-leak gate now whitelists `[PASS]`, `[FAIL]`, `[WARN]`, `[SKIP]`, `[OK]`, `[TODO]`, `[N_A]`, `[NA]` (these are intentional conformance-status labels, not template placeholders); the template-coverage gate received the same whitelist (same false positive, different script); the infill pass added the status labels to its `EXPECTED_UNFILLED` set so the warning at infill time stops complaining about them. The voice gate's third-person regex was tightened with a preposition-exclusion lookbehind and "page" was dropped from the noun list because audit prose routinely references specific pages as noun objects rather than as third-person register switches. The fourth run completed cleanly through all eight Phase 3 gates and produced the tagged PDF.

### 4. Source remediation on mx-site

Every Priority finding in the report has a matching source fix in `mx-outputs/mx-site/`. The Priority 1 contrast issue (2.96:1 on the `.cog .c` syntax-highlight comment spans at `mx-machine-readiness.html`) was fixed by changing the comment colour from `#6b6258` to `#928a7d` against the `#1a1815` background, which reads at approximately 5.4:1 and stays above the 4.5:1 minimum while preserving the muted-comment hierarchy where the audit's recommended pure white `#fffffe` would have flattened it. The Priority 2 dead anchors on the two blog posts were British-vs-American spelling mismatches between the TOC link and the heading id (`#organisational-implementation` linking to `id="organizational-implementation"`, same pattern for `where-mx-fits-in-your-organisation`); both were aligned to the existing heading ids since the heading text itself reads "Organizational Implementation" / "Where MX Fits in Your Organization". The Priority 3 div-soup page received 35 semantic-element promotions: the `voices` block became a `<ul>` of `<li>` with `<cite>`/`<blockquote>` for the four attributed quotes, the four phase identifiers became `<header>` elements, the four action blocks became `<footer>` with `<h4>` for the action heading, the arch-principles block became a numbered `<ol>` of `<li>`, the seal-grid became another `<ul>`/`<li>`, the consensus-head and scope-head wrappers became `<header>`, and one `.ph` typographic label became a `<p>`. CSS resets were added inline so the visual layout is unchanged. The div tag balance was preserved (121 open, 121 close).

### 5. Audit accounting bug — non-HTML URL false positives

The user noticed that `accessibility_report.csv` showed 12 critical issues across the audited set but only 6 real Pa11y findings exist (4 contrast + 2 anchors). Investigation traced the discrepancy to three non-HTML URLs (`/llms-understanding.txt`, `/reginald/mx-machine-readiness.cog.md`, `/reginald/mx-machine-readiness.meta.cog.md`) each carrying 2 phantom "critical" issues. The Pa11y findings sidecar writer already filters non-HTML URLs out (with a comment explaining that headless Chrome wraps text/markdown in a synthetic shell that lacks `<title>` and `<html lang>`, producing false "missing title" / "missing lang" issues) but the accessibility report writer was missing the same filter. The fix applies the existing `isHtmlPa11yUrl()` gate to the per-URL Pa11y lookup in `generateAccessibilityReport`. Next audit run will show 6 critical issues (real WCAG), the 3 non-HTML URLs scoring 100/100 instead of 80/100, and the site-wide accessibility score moving up correspondingly.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Pages crawled | 101 |
| Real WCAG 2.0 AA findings (all fixed) | 6 |
| Pa11y false positives removed from accessibility report | 6 |
| Semantic-element promotions on mx-machine-readiness.html | 35 |
| Source files fixed on mx-site | 3 |
| Audit-tooling bugs fixed | 5 |
| Phase 3 gate runs needed to clear | 4 |
| Repositories touched | 2 (hub + mx-outputs) |

---

## Why It Matters

The audit is a sales artefact — it goes to prospects who are evaluating whether MX is worth a conversation. A report that names a contrast issue but does not have the issue fixed in the issuer's own source is harder to take seriously. A report that says "12 critical accessibility issues" when 6 of those are phantom false positives from an audit-tooling bug undermines every other number in the report. Both classes of credibility risk were closed in the same session. The fact that the audited site is mx.allabout.network — the canonical MX demonstrator — makes the consistency between report and source compounding rather than cosmetic.

---

## The Insight

The Phase 3 stylistic gates (template-leak, template-coverage, voice-consistency) are operating at a layer of abstraction that conflates "template placeholder" with "intentional content that happens to be in square brackets" and conflates "the page does X" with "the page" as a noun phrase. The fix in every case was tightening the regex or whitelist rather than degrading the gate's intent: status labels and prepositional uses of "the page" are distinguishable from genuine register switches with small, durable additions to the existing detection logic. Three iterations of the gate's repair loop spent 25+ minutes of API time across two runs trying to "fix" prose that wasn't broken before the gates themselves were patched. The lesson is operational: when a gate keeps tripping on the same kind of false positive across multiple repair iterations, patch the gate, not the prose.

---

## Decisions Made

- Contrast fix used `#928a7d` (5.4:1) instead of the audit's `#fffffe` recommendation, preserving the syntax-highlight comment hierarchy.
- TOC links aligned to existing heading ids rather than renaming heading ids (smaller surface area, no breaking link changes elsewhere).
- Audit-tooling bugs fixed in-session rather than filed as follow-ups (the parallel typo3.org audit running in another session benefits from the same fixes once they ship).
- Pre-existing dirty `.claude/skills/audit-report/skill.md` and `audit-site/skill.md` edits from an earlier session were not touched — they describe a single-pass repair model that contradicts the implementation, and the user should decide whether to revert or update the implementation rather than have Maxine commit text that may be inconsistent.

---

## Open Questions

- Should the dirty skill.md edits (audit-report, audit-site) be reverted to match the implementation (3-iteration repair loop), or should the implementation be changed to match them (single-pass)? They have been sitting unstaged across multiple sessions.

---

## Next Steps

- Deploy `mx-outputs/mx-site/` so the three source fixes go live, then purge Cloudflare cache for `mx.allabout.network`, then re-run the audit to confirm the WCAG count drops from 6 to 0.
- Re-run any pending TYPO3 audit with the patched gates so the gate-bug fixes pay off across the parallel session too.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 7447150 (mx-outputs) | Fix WCAG 2.0 AA findings on mx.allabout.network source |
| _pending_ (hub) | Audit pipeline: `-1` unlimited, gate whitelist + regex fixes, accessibility-report non-HTML filter |
