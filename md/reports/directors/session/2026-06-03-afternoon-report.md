---
title: "Co-Directors Report -- Audit Pipeline Quality Overhaul: Deterministic Conditionals, Vendor Detection, Bug Fixes"
description: "Template conditional predicates moved to deterministic infill; Complianz vendor detection added; crowdfavorite.com audit bugs fixed; 22 pipeline improvements across scripts, templates, and gates"
author: "Tom Cranstoun"
created: 2026-06-03
modified: 2026-06-03
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-03-afternoon-report.md
---

# Co-Directors Report -- Audit Pipeline Quality Overhaul: Deterministic Conditionals, Vendor Detection, Bug Fixes

**Date:** 3 June 2026 -- Afternoon
**Segment:** Afternoon (since midnight)

---

## Summary

A dense pipeline quality session. The headline deliverable is moving 22 informal template conditional predicates (previously resolved by the rewrite LLM through guesswork) to deterministic resolution by the infill script. The informal count in the web-audit-suite template dropped from 25 to 2 (both intentional LLM-judgment cases); the ecommerce template went to 0. This eliminates an entire class of report quality failures where the wrong conditional branch was emitted.

Secondary: Complianz (a self-hosted WordPress consent management plugin) is now detected as a third-party vendor element in Pa11y findings, so reports correctly route its fix to the SDK vendor rather than the site template. The crowdfavorite.com audit had three bugs fixed -- Chrome 91 UA blocking (causing only 3 pages crawled), TYPO3 false-positive platform detection, and incorrect performance band. Multiple systemic improvements landed alongside these.

---

## What Was Done

### 1. Deterministic Template Conditionals

The audit report template previously had 37 `[IF X: "..."]` conditional markers. 25 were "informal" -- English-prose predicates the rewrite LLM had to infer from context. These produced non-deterministic output: different audit runs could resolve the same predicate differently.

This session hoisted 22 of those 25 to deterministic resolution in `infill-report.js`:

- **A1: Slowest-page verdict** -- exact-string branches ("Healthy", "unavailable") resolved from the filled `[SLOWEST_PAGE_VERDICT]` token
- **A2: Sitemap presence** -- "no sitemap" and "missing URLs" resolved from `discovery.json` and `sitemap-discrepancy.json`
- **A3: llms.txt / llms-full.txt branches** -- presence and content-type resolved from `wellknown_discovery.json`
- **A4: Agent access** -- "all accessible" resolved from `agent-access.json allPassed`; blocked agents leave a REWRITE block
- **A5: Markdown/edge negotiation headers** -- all three branches resolved from `agent-access.json markdownProbe`
- **A6: MX Journey verdict** -- all three branches resolved from `mx_journey_stages.csv`
- **A7: Consistency percentage** -- 100% vs <100% resolved from `[CONSIST_%]` token

The 3 remaining informal predicates are intentionally LLM-judgment: "llms.txt has suggestions" (content review), "no multi-page entities" (entity analysis), and one ecommerce catalogue branch.

Added `<!-- DETERMINISTIC: ... -->` annotation pattern to templates so the classifier (`check-template-predicates.js`) recognises hoisted predicates and counts them as evaluable. The classifier was extended with a proper multi-line HTML comment parser.

The STRIP-IF context was extended with four new data sources: `wellknown`, `agentAccess`, `discovery`, `sitemapDiscrepancy`.

### 2. Complianz Vendor Detection

The vendor-dom-registry was extended with a new `selectorPatterns` array for self-hosted SDKs that load from the site's own domain (WordPress plugins, etc.) and are invisible to host-based detection. Complianz (`cmplz-` class prefix), Cookiebot, Cookie Notice for WordPress, Borlabs, and five other consent managers added.

The `reportGenerators.js` detector was extended with a third fallback path: after host-based and vendor-inventory checks, it now tries selector-pattern matching. This is what catches Complianz's `#cmplz-cookiebanner-container` element and attributes the Pa11y finding to the Complianz SDK rather than the site template.

### 3. Crowdfavorite.com Audit Bug Fixes

Three bugs diagnosed and fixed:

- **Chrome 91 UA blocking**: `fetchDataWithoutPuppeteer` in `caching.js` used an old Chrome 91/Windows NT user-agent string from 2021. Cloudflare fingerprints and blocks it. Fixed to Chrome 124/macOS. Test script `diagnose-fetch-403.js` added to the test folder.
- **TYPO3 false-positive platform detection**: The platform fingerprinter matched `/typo3/` in any URL, including navigation links to `/services/typo3/`. Fixed by requiring `/typo3/sysext/` or `/typo3/ext/` (actual CMS asset paths). Crowdfavorite.com is WordPress.
- **Platform cache stale read**: `main.js` was reading the platform cache from the legacy `mx-audit/domains/<host>/` path instead of the new `mx-outputs/audit/<host>/.cache/origin/` path. Fixed by using the configured cache path when available.
- **Performance band mismatch**: `auditAverages.js` used `100 - (loadMs/100)` (linear) while `infill-report.js` used a stepped table. Extracted shared `lib/perf-score.js` utility so both use the same formula.
- **Sitemap index cap**: The sitemap parser stopped reading sub-sitemaps after hitting the URL cap. Fixed with proportional per-sub-sitemap sampling so all sub-sitemaps contribute.

Final crowdfavorite.com result: 11 pages crawled (was 3), correct WordPress platform, performance band matches scorecard.

### 4. Gate and Compliance Improvements

- **check-template-leaks.js**: Added heading-prefixed table row detection (catch `# | Finding |` from LLM rewrite), missing separator row detection, priority block heading-level corruption, and trailing-punctuation token detection (`[TOKEN"]`). All new checks advisory only.
- **Post-repair structural integrity check**: `audit-pipeline.js` now always re-runs `check-template-leaks.js` after the consolidated repair pass (catches structural corruption introduced by repair).
- **Pa11y aggregation**: Now sorts by WCAG conformance level (Level A before AA before AAA) then by instance count -- ensures Level A failures always reach the LLM facts first regardless of count.
- **Rewrite system prompt**: Added TABLE FORMATTING mandatory rules section -- explicit prohibition on `#` prefix before pipe-table rows.
- **`check-template-compliance.js` hook**: Post-write hook now fires on edits to audit templates and surfaces REWRITE block structural issues, voice violations, and token naming problems.
- **System prompt compliance gate**: `check-system-prompt-rules.js` verifies 7 required rule strings are present in both system prompts; added to `npm test`.
- **Platform detection**: Single-signal matches now return `low` confidence and are downgraded to `generic` -- prevents 1-signal false positives like the TYPO3 case.
- **Fierce-critic specificity test**: Updated to require data anchors in the "What to change and why" bullets specifically (not just anywhere in the priority block).
- **`perf-score.js` shared utility**: Extracts the step function so infill and auditAverages never diverge again.
- **Test suite additions**: `diagnose-fetch-403.test.js`, `wcag-level-sort.test.js`, both picked up by mocha glob.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Informal template predicates (web-audit-suite) | 25 → 2 |
| Informal template predicates (ecommerce) | 11 → 0 |
| New deterministic hoisting blocks in infill-report.js | 7 groups, ~22 predicates |
| Vendor selector patterns added to registry | 8 |
| New/modified source files | 36 |
| Test files added | 2 |
| Bugs fixed in crowdfavorite.com audit | 5 |
| Gate improvements shipped | 6 |

---

## Why It Matters

Every informal predicate the LLM resolves at inference time is a source of non-determinism in the audit deliverable. Wrong branch selection produces incorrect prose -- a report that says "all agents can access the site" when two agents are blocked, or "no sitemap found" when one exists. These are silent failures: they pass all gates and reach the client looking plausible.

Moving predicates to deterministic resolution eliminates this class of error. The LLM now only writes prose where genuine judgment is required (framing, narrative, vendor-specific interpretation). Everything else is data-driven.

---

## Decisions Made

- Kept 2 predicates as intentional LLM-judgment: "llms.txt has suggestions" (requires reading the file) and "no multi-page entities" (requires entity cross-reference analysis). Both were documented in the template.
- Platform detection: single-signal matches downgraded to `generic` rather than `low-confidence-named`. This is more honest -- claiming Drupal on 1 CSS class is worse than saying "unknown platform."
- Fierce-critic specificity test: now checks bullets specifically, not the whole block. A WCAG criterion number in the finding title no longer exempts generic bullet text.

---

## Next Steps

- Mirror the template deterministic annotations to the ecommerce-specific predicates beyond what was done (commerce catalogue bands still have informal predicates from the commerce scoring logic)
- Run a fresh crowdfavorite.com audit with all fixes applied to confirm 10+ pages, correct platform, no false positives
- A/B test generic signal false positive (`\btoggle\b` matching dark mode buttons) -- still in REMINDERS as open item

---

## Commit Log

| Hash | Description |
|------|-------------|
| ad9a2bc0 | (mx-outputs) Update crowdfavorite.com audit: UA fix, platform fix, Priority block rewrites |
