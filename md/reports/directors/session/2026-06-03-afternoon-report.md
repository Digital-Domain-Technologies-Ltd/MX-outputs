---
title: "Co-Directors Report -- Audit Pipeline Quality Overhaul + MX Comprehension Probe Fix + Contentful Audit"
description: "Deterministic infill; Complianz vendor detection; crowdfavorite fixes; framework detection; MX Comprehension Probe suggested questions fixed; Contentful audit delivered"
author: "Tom Cranstoun"
created: 2026-06-03
modified: 2026-06-03
version: "4.0"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-03-afternoon-report.md
  purpose: "Deterministic infill; Complianz vendor detection; crowdfavorite fixes; framework detection; MX Comprehension Probe suggested questions fixed; Contentful audit delivered"
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report -- Audit Pipeline Quality Overhaul + MX Comprehension Probe Fix + Contentful Audit"]

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
| Extension model sources (browser on-device + Ollama fallback) | 5 |
| Extension bugs fixed (chrome:// URL, Edge macOS, no model message) | 3 |
| Docs updated for extension (popup.js, README x2, getting-started) | 4 |
| MX Comprehension Probe bugs fixed (suggested questions never appeared) | 1 |
| Audit deliverables shipped (www.contentful.com, 2026-06-03) | 1 |

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

### 13. Framework Detection Pipeline (continued session)

A new `check-frameworks.js` collector (Step 8.6) fingerprints 23 framework signatures across 4 categories: JS frontend (React, Next.js, Vue, Nuxt, Astro, Gatsby, Angular, Svelte), CSS frameworks (Tailwind, Bootstrap, Foundation), CMS plugins/builders (Elementor, Divi, ACF, WooCommerce, Gutenberg, Yoast), and CDN/delivery layers (Cloudflare, Vercel, Netlify, CloudFront, Fastly, Bunny).

Detection is probabilistic and fully deterministic (no LLM): signal count determines confidence (high=3+, medium=2, low=1). Writes `frameworks.json` to the results dir.

Two new tokens added to `infill-report.js` and the audit template, both computed deterministically from collected data:

- `[PLATFORM_CONFIDENCE]` -- maps confidence tier to prose: "**WordPress** (high confidence)", "Probable **Drupal** (medium confidence -- two signals)"
- `[FRAMEWORKS_DETECTED]` -- formatted list with confidence tiers

The template now explicitly frames platform detection as probabilistic: "Platform identification is probabilistic -- a site can obscure or mimic platform signals."

### 14. Per-Platform and Per-Framework Benchmark Stats

`build-benchmark-dataset.js` extended to harvest `platform.json` and `frameworks.json` from every past audit run. New `byPlatform` and `byFramework` sections added to `peer-scores.json`. Per-platform score medians only published when a platform reaches ≥10 samples (below threshold: count is recorded but global medians apply). Framework stats exclude low-confidence detections. Schema version bumped to 2.0.0.

### 15. Template Changelog Prose Removed

Three instances of dated changelog references removed from `web-audit-suite-template.md` (e.g., "form was chosen over a table on 2026-05-14 after the rendered PDF...", "the old table was too terse", "Duplication produced an internal contradiction on the 2026-05-14 neomwellbeing audit"). Replaced with timeless explanations of the current rules.

### 17. MX Comprehension Probe -- Suggested Questions Fixed

The MX Comprehension Probe browser extension is supposed to show three clickable question chips below the textarea when the popup opens, so users can try it without typing. They were never appearing.

Root cause: `renderPresets()` was only called inside `ask()` -- triggered after the user clicked "Ask the model". The chips appeared after asking, not before, making them useless as on-ramp examples.

Fix: `main()` now eagerly reads the current page and calls `generateSuggestedQuestions()` on popup open. Three dynamic chips (generated by the on-device model from page content) appear once the model responds. Free-text input was always working; only the chips were broken.

### 16. MX Readiness Inspector -- Edge/macOS Support and Ollama Fallback

The browser extension (MX Readiness Inspector) previously showed "See browser setup instructions at chrome://extensions" on any browser without an on-device model -- which is wrong for Edge users and completely broken for Edge on macOS (where `chrome://` URLs don't open).

Three problems diagnosed and fixed:

- **Edge on macOS**: Edge's Phi-Silica on-device model is Windows-only. It does not exist on macOS regardless of chip. The fallback message now detects the browser and OS and tells Edge/macOS users to use Ollama instead (or Chrome on the same machine).
- **chrome:// URL hardcode**: The fallback message pointed to `chrome://extensions` rather than `edge://extensions`. Fixed with browser detection; Chrome users get the correct Chrome flags URL, Edge users get the Edge flags URL.
- **Ollama fallback**: Added a second model-source tier. When the browser on-device model is absent, the extension probes `127.0.0.1:11434/api/tags`, picks the first recognised model (`gpt-oss:20b` preferred -- already running on this machine), and calls `/api/chat` as a local LLM fallback. `manifest.json` updated with localhost host permissions.

The summary footer now labels Ollama results as `Ollama (gpt-oss:20b, local)` so the model source is always visible.

The `OLLAMA_ORIGINS=*` environment variable is required for Ollama to accept requests from extension pages. Set permanently via a new LaunchAgent plist at `~/Library/LaunchAgents/com.ollama.environment.plist` -- loaded at login, injects the variable into the launchd session before the Ollama app starts.

Documentation updated across four files: `popup.js` header comment, `extensions/mx-readiness/README.md` (title broadened to "Browser Extension", Ollama row added to model table, Edge/macOS section added), root `README.md` (new MX Readiness Inspector section), `getting-started.cog.md` (new section 4a covering extension install and model chain).

---

## Next Steps

- Run a fresh crowdfavorite.com audit to validate framework detection in practice
- A/B test generic signal false positive (`\btoggle\b`) -- still in REMINDERS
- Per-platform score medians will start appearing once 10 audits per platform accumulate
- Reload the MX Readiness Inspector in Edge after the Ollama LaunchAgent plist is applied; verify the Ollama summary renders

---

## Commit Log

| Hash | Description |
|------|-------------|
| 8dd27f77 | (mx-outputs) Add Contentful audit deliverables: 2026-06-03 |
| 2baa1abf | (mx-outputs) Fix MX Comprehension Probe: generate suggested questions on popup open |
| ad9a2bc0 | (mx-outputs) Update crowdfavorite.com audit: UA fix, platform fix, Priority block rewrites |
| 05db8bd7 | (mx-outputs) Add 2026-06-03 afternoon directors report |
| e4d73de7 | (mx-outputs) Regenerate README index: afternoon report + crowdfavorite audit |
| 22f2f5e1 | (mx-outputs) Update MX Readiness browser extension: README and popup improvements (Ollama fallback, Edge/macOS fix) |
| 26af7ab3 | (mx-outputs) Update afternoon report v2.0: framework detection, platform stats, template changelog prose removal |
| 8327748f | (mx-outputs) Regenerate README index: afternoon report v2 update |
| 4f129575 | (hub) Audit pipeline quality overhaul: deterministic conditionals, vendor detection, bug fixes |
| 1e7d811e | (hub) Bump mx-outputs: README regenerated, crowdfavorite audit updates, afternoon report |
| ffea383c | (hub) Docs: CHANGELOG v3.01, LEARNINGS v4.46, REMINDERS v3.72 |
| 8c630201 | (hub) Add .mx.yaml.md skeletons for mx-reginald-vnext/examples/ and examples/decisions/ |
| 7088250a | (hub) Fix audit-fierce-critic.system.md: add required mx.purpose, stability, x-mx-contextProvides |
| 52c960d7 | (hub) Add framework detection pipeline; per-platform benchmark stats; template cleanup |
| 4b298144 | (hub) Bump mx-outputs: README regen; add CHANGELOG entry for framework detection |
| c09995b3 | (hub) Sync routing registry after framework detection additions |
