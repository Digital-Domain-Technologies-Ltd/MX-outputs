---
title: "Co-Directors Report — Vendor-DOM Detection Generalised Across the Audit Stack"
description: "Afternoon session: third-party-iframe detection extended into a class-of-finding vendor-DOM detector. New curated registry, sidecar inventory builder, regression suite, plus a real-data bug caught and closed during smoke-test."
author: "Tom Cranstoun"
created: 2026-05-20
modified: 2026-05-20
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-20-afternoon-report.md
  purpose: "Afternoon session: third-party-iframe detection extended into a class-of-finding vendor-DOM detector. New curated registry, sidecar inventory builder, regression suite, plus a real-data bug caught and closed during smoke-test."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Vendor-DOM Detection Generalised Across the Audit Stack"]
---

# Co-Directors Report — Vendor-DOM Detection Generalised Across the Audit Stack

**Date:** 20 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

We took this morning's third-party iframe detection and generalised it. The audit pipeline now treats *any* DOM element that traces to a vendor-injected source (consent SDK, chat widget, tag manager, analytics pixel, social embed, scheduling widget) the same way: vendor named, remediation routed to SDK upgrade or DOM-observer patch instead of a template edit. A curated 18-vendor registry resolves hosts to human names; a new sidecar collector walks cached HTML to surface vendor signatures; a 14-assertion regression suite locks the behaviour in. Smoke-testing against typo3 data caught a real bug mid-flight — the detector was including editorial `<a href>` links — fixed before the work landed.

---

## What Was Done

### 1. Curated vendor registry

A new file at [`mx-reginald/audit/lib/vendor-dom-registry.json`](../../../../../mx-reginald/audit/lib/vendor-dom-registry.json) maps 18 third-party hosts to a vendor identity, SDK family, and remediation hint. The families covered are consent management (Usercentrics, OneTrust / cookielaw, TrustArc), tag management (GTM, GA), customer-messaging widgets (Intercom, HubSpot, Drift, Zendesk, Crisp), session-recording analytics (Hotjar, FullStory, Mouseflow), pixel-style analytics (Meta Pixel, DoubleClick), scheduling (Calendly), and social embeds (X / Twitter). Host matching is suffix-based: `usercentrics.eu` matches `app.usercentrics.eu`, `consent.usercentrics.eu`, and so on. Unknown hosts fall back to host-only attribution.

### 2. Detector generalised end-to-end

The single-purpose `extractIframeThirdPartyHost` in [`reportGenerators.js`](../../../../../mx-reginald/audit/src/utils/reportUtils/reportGenerators.js) became `extractVendorOrigin`: a class-of-finding detector that flags any tag with a `src`, `data-src`, `data-url`, `data-iframe-src`, or `data-href` attribute pointing to an external host, then resolves the host through the registry for vendor enrichment. The pa11y pattern generator was extended to consult an optional vendor DOM inventory sidecar by selector, so a pa11y issue on a vendor-injected element gets the third-party tag even when the pa11y context snippet alone doesn't carry the URL.

### 3. Vendor DOM inventory collector

A new pipeline-callable script at [`mx-reginald/audit/scripts/build-vendor-dom-inventory.js`](../../../../../mx-reginald/audit/scripts/build-vendor-dom-inventory.js) walks every cached HTML file under `audit-data/domains/<host>/cache/{rendered,decoded,served}/`, regex-finds elements with vendor URL attributes, resolves through the registry, and writes `vendor_dom_inventory.json` next to the other audit results. Output covers selector, tag name, attribute name, host, vendor identity, SDK type, and remediation hint per element, with per-page de-duplication. Tested live against typo3's cached HTML — emits two vendor entries (Usercentrics loader script + same-origin CDN script with vendor=null).

### 4. Infill, templates, fierce-critic, skill docs in lockstep

Five surfaces updated to consume the new pattern shape: [`infill-report.js`](../../../../../mx-reginald/audit/bin/infill-report.js) WCAG-recurring-patterns block, [`web-audit-suite-template.md`](../../../../../mx-reginald/audit/templates/web-audit-suite-template.md), [`ecommerce-audit-template.md`](../../../../../mx-reginald/audit/templates/ecommerce-audit-template.md), [`audit-fierce-critic.js`](../../../../../mx-reginald/audit/scripts/audit-fierce-critic.js) (both the deterministic regex check and the LLM-rubric AREA 7), and both audit skill catalogues. The fierce-critic category renamed from `third-party-iframe-template-blame` to `third-party-vendor-template-blame` to match the broader scope. Report prose now reads "Engage Usercentrics to ship a fix" when the registry resolved a vendor, and "the third-party SDK hosted at `<host>`" when only the host is available.

### 5. Regression suite + bug caught in smoke-test

A new test fixture at [`mx-reginald/audit/test/fixtures/vendor-dom/sample-page.html`](../../../../../mx-reginald/audit/test/fixtures/vendor-dom/sample-page.html) carries four vendor signatures (Usercentrics loader script, Usercentrics consent iframe, Intercom chat-widget button using `data-iframe-src`, Meta Pixel image) plus one editorial outbound link that must be ignored. The matching test driver at [`mx-reginald/audit/test/vendor-dom-inventory.test.js`](../../../../../mx-reginald/audit/test/vendor-dom-inventory.test.js) builds an inventory against a temp domains-dir and asserts 14 properties: every vendor element correctly tagged, both editorial outbound and same-origin links ignored. All 14 assertions pass. Smoke-test against the typo3 audit data exposed a real bug: the detector originally included `href` in its attribute list, false-flagging an editorial outbound link to `typo3.community`. Tightened the attribute list to drop `href` and `formaction` (kept in lockstep with the inventory builder), re-validated against typo3 — only the Usercentrics finding tagged.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | Pending Step 3 (single hub commit covers everything) |
| Files changed (hub) | 8 modified + 3 new = 11 |
| Lines added | +168 |
| Lines removed | -55 |
| New scripts / data files | 4 (registry, inventory builder, regression test, fixture) |
| Curated vendor entries | 18 |
| Regression assertions | 14 (all pass) |
| Bugs caught in smoke-test | 1 (attribute-list mismatch between detector and inventory builder) |

---

## The Insight

The first instinct on extending the iframe detection was a per-element-type approach — one detector for iframes, one for buttons, one for scripts. The class-of-finding generalisation is simpler and stronger: any pa11y finding whose offending element has an external `src` or `data-*` URL is vendor-injected, regardless of tag name. The mistake we would have made with the per-element approach is exactly the bug we caught in smoke-test: the detector accidentally included `href`, which is correct for hyperlinks (`<a>`) but not for vendor injection. By tightening the attribute list to only `src` and `data-*` URLs — the precise set browsers load resources from at parse time — the detection became both broader (any tag) and stricter (no editorial outbound) in the same change. The inventory builder and the inline detector now share the same attribute set, so the two surfaces cannot drift apart silently.

---

## Decisions Made

- Class-of-finding detection over per-element detectors. One detector, broader catch, less code to maintain.
- Curated registry plus host-only fallback (the hybrid option from the interview), not vendor-only or host-only alone. Top vendors named precisely; long-tail vendors stay honest.
- The inventory sidecar lives alongside other audit results in `audit-data/domains/<host>/results/`, not next to the rendered report. It is collector output, consumed by downstream gates.
- The fixture HTML is force-tracked despite the audit-module `*.html` gitignore. Reason: this is a test fixture (deliberately under version control) not a captured artefact.

---

## Open Questions

- The inventory builder currently walks whatever cache root is present (`rendered/` preferred, falling back to `decoded/` or `served/`). For typo3 only one page was cached, so the inventory captures the homepage's vendor signatures only. Once the audit caches all crawled pages' rendered HTML, the inventory will scale automatically — worth confirming on the next prospect run that the multi-page case behaves as expected.

---

## Next Steps

- Smoke-test on a next non-typo3 prospect audit to confirm the new detector + inventory behave end-to-end against unfamiliar vendor signatures and a richer multi-page cache.
- If the registry's 18-vendor seed misses a vendor surfacing in a real audit, extend by adding the host to `vendor-dom-registry.json` — no code change needed.
- The `repair-report-final.js` system-prompt tightening (REMINDERS yellow) remains as the next audit-stack quality item.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `69291b49` | Audit pipeline: generalise third-party-iframe detection to vendor-DOM class |
| `eb8cad31` | REMINDERS: track multi-page vendor-DOM detection smoke-test |
| `5228f8c5` | CHANGELOG: vendor-DOM detection generalised across the audit stack |
| `d5cfab9c` | LEARNINGS: tight attribute lists when generalising narrow detectors |
| `5818e6ed` | Bump mx-outputs: afternoon directors report + regenerated README index |

---

## Addendum: Bollants vs Marriott audit pair, plus a pipeline bug caught in flight

### Headline

Ran two prospect audits back to back, on opposite ends of the brand-scale axis: Bollants im Park (a single independent hotel on Contao) and Marriott (a global chain on a custom enterprise stack behind Akamai bot-management). Bollants completed cleanly, 7 of 131 sitemap URLs audited, full Web Audit Suite report shipped. Marriott refused every form of programmatic interrogation we test: all eight named clients returned 403 (ClaudeBot, GPTBot, ChatGPT-User, PerplexityBot, GoogleOther, Google-Extended, CCBot, plain HTTP); curl with a real browser UA also returned 403; Puppeteer was fingerprinted and blocked. Phase 1 captured the origin layer; Phase 2 crashed because the deterministic infill expected page-level data that did not exist.

Mid-session Tom supplied the served HTML from a real human session in his own browser, which revealed a second layer to Marriott's posture: the page does render to humans, but it is marked `noindex,nofollow` in `<head>`, every Open Graph slot is declared and empty, the `<title>` and description are generic Marriott Bonvoy chrome rather than the property the URL searched for, and the property data only materialises after client-side hydration. The `ak_sgnl` constant in the page confirms Akamai bot-manager; an inline `Object.defineProperty(document, "referrer", ...)` script rewrites the referrer to `bing.com` for analytics. Machine-illegibility is layered: blocked at the edge, declared not-for-indexing on the page, empty metadata in the head, content only after JS execution.

### Three deliverables shipped

A full bollants audit report (1.3 MB tagged PDF, EAA Level 2 conformant), a Marriott machine-experience brief built from Phase-1 origin data only (392 KB tagged PDF, EAA Level 2), and a bollants-vs-Marriott contrast report (448 KB tagged PDF, EAA Level 2) that puts the two postures side by side and names what MX adds beyond either. All three land under `mx-outputs/audit/2026-05-20/`, with QR assets and per-host sidecars in place.

The contrast report is reusable as outward-facing pitch material: it shows, with named brands attached, that machine-legibility is a posture choice independent of brand budget. The small site is the legible one; the global chain is, for the audiences we tested, machine-illegible by deliberate, layered choice.

### A real bug, caught and closed

When the bollants PDF generated, it landed at `mx-outputs/pdf/www-bollants-de-report.pdf` instead of next to the markdown at `mx-outputs/audit/2026-05-20/www.bollants.de/`. I caught it by copying the file across; Tom caught the diagnosis: a hook should have stopped the drift, the script should have been re-run with the fix in place, not the symptom papered over. The bug was in [`mx-reginald/audit/bin/infill-report.js`](../../../../../mx-reginald/audit/bin/infill-report.js): when the script regenerates a fresh client-report frontmatter, it had been stripping the template's `mx.generate.output` field entirely. Without that field, `mx.pdf.sh` falls back to its default output directory.

Fix landed in three layers: (a) infill-report.js now composes `pdfOutputPath` from `new URL(clientUrl).hostname` + slug + date and writes a full `mx.generate.{script,format,output,description}` block into the regenerated frontmatter; (b) the two audit templates ([`web-audit-suite-template.md`](../../../../../mx-reginald/audit/templates/web-audit-suite-template.md) and [`ecommerce-audit-template.md`](../../../../../mx-reginald/audit/templates/ecommerce-audit-template.md)) updated to advertise the same shape with a `[CLIENT_HOSTNAME]` placeholder; (c) the test fixture at [`mx-reginald/audit/test/fixtures/infill/golden-skeleton.md`](../../../../../mx-reginald/audit/test/fixtures/infill/golden-skeleton.md) was auto-regenerated by the `sync-golden-skeleton.sh` PostToolUse hook the moment the template changed.

### A new hook to stop this class of drift recurring

A standalone Node check at [`scripts/check-audit-report-generate.js`](../../../../../scripts/check-audit-report-generate.js) validates any audit-report markdown's frontmatter: detects the audit-report signature (one of three field markers), looks for `mx.generate.output`, asserts it points to a sibling-path `.pdf` file. Exits 0 on pass, 1 on fail, 2 on skip.

A new PostToolUse Bash hook at [`.claude/hooks/post-bash-audit-report-generate.sh`](../../../../../.claude/hooks/post-bash-audit-report-generate.sh) fires only when the Bash command was `mx exec mx-audit` or `audit-pipeline.js`, then scans audit-report markdowns modified in the last 10 minutes and runs the check on each. On any failure it emits `additionalContext` naming the file and the fix. Wired into [`.claude/settings.json`](../../../../../.claude/settings.json) as a PostToolUse Bash hook. Three scenarios smoke-tested: pass (regenerated bollants), skip (non-audit Bash), fail (synthetic broken report).

### REMINDERS: pipeline branch for interrogation-refused sites

A 🟠 This Week reminder was added in REMINDERS v3.46: when an audit run yields 0 pages crawled because the site refuses interrogation, the pipeline should branch into a "Site refuses programmatic interrogation" report shape rather than crashing on em-dashes in unfilled placeholders. Specific surfaces named: [`web-audit-suite-template.md`](../../../../../mx-reginald/audit/templates/web-audit-suite-template.md), [`ecommerce-audit-template.md`](../../../../../mx-reginald/audit/templates/ecommerce-audit-template.md), placeholder fragments, [`infill-report.js`](../../../../../mx-reginald/audit/bin/infill-report.js), [`reportGenerators.js`](../../../../../mx-reginald/audit/src/utils/reportUtils/reportGenerators.js), and the rewrite + repair system prompts.

### Addendum commit log

| Hash | Description |
|------|-------------|
| `7d59898` (mx-outputs) | Add 2026-05-20 audit deliverables: bollants report, Marriott machine-experience brief, bollants-vs-Marriott contrast |
| `fbded06` (mx-outputs) | Regenerate README index after 2026-05-20 audit deliverables |
| _pending_ | Hub commit: infill-report.js generate.output fix + templates + golden-skeleton refresh + new check script + new hook + REMINDERS + settings.json + mx-outputs pointer. Pending Step 3. |
