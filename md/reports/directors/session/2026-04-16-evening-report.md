---
title: "Co-Directors Report — Audit Trustworthiness Pass"
description: "Evening session shipping a seven-step audit-tooling plan end-to-end: new frontmatter gate, category-locked test fixtures, classifier diagnostic, schema gap closure, and handler extraction."
author: "Tom Cranstoun and Maxine"
created: 2026-04-16
modified: 2026-04-16
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, audit-trustworthiness]
---

# Co-Directors Report — Audit Trustworthiness Pass

**Date:** 16 April 2026 — Evening
**Segment:** evening (17:00–21:00 BST)

---

## Summary

A seven-step audit-trustworthiness plan — originally scoped as several weeks of backlog — shipped end-to-end in one evening. Every MX audit report from now on passes through a per-report frontmatter gate against the canon's field dictionary before any content check runs. Category-locked fixtures mean a rubric tweak to any of the four content gates can no longer silently stop catching a class of defect. The mx.allabout.network Service/Offer schema gap is closed in code and queued behind a re-audit to confirm the live Schema Maturity promotion.

---

## What Was Done

### 1. Per-report frontmatter gate (Step 12.4)

Before tonight, the three audit content gates (verifier, fierce-critic, llm-judgment) enforced prose accuracy, but a report's own `mx:` frontmatter could ship with invalid or missing fields and pass every check. A new wrapper script (`scripts/validate-report-frontmatter.js`) exposes the canon's field dictionary as a per-report exit-code gate. It reuses `scripts/lib/frontmatter-validator.js` — the same engine `cog:validate` and the PreToolUse hook use — so the authority chain stays intact. The new gate slots into the audit-report pipeline at Step 12.4, between readability review and the confirmation pass.

The gate was proven retroactively: running it against the already-shipped agentica report surfaced a missing required `modified` field, demonstrating the class of defect the gate catches.

### 2. Category-locked gate tests

`mx-audit/test/audit-gates.test.js` is a new mocha suite that drives each gate script with one hand-crafted known-bad fixture per category plus a known-good negative control. Eighteen tests lock the gate behaviour — if someone edits a rubric and accidentally stops catching `leaked-boilerplate`, `uncited-industry`, `overpromise`, or `scope-overreach`, CI fails loudly.

Template completeness is also now CI-enforced for `ecommerce-audit-template.md` and `dom-analysis-template.md` — previously only `web-audit-suite-template.md` had a contract. Drift in any template will now fail the build.

### 3. Schema Maturity classifier diagnostic

`calculateSchemaMaturity` in `mx-audit/src/collectors/llmCollector.js` gained an optional diagnostic (gated by `MX_AUDIT_MATURITY_DIAG=1`) that, for any Level-1 verdict, prints which Level 2 prerequisite failed AND whether Level 3 would have fired if Level 2 had passed. Synthetic input confirms the classifier is behaving correctly — a site with dense linked-data signals but a single missing required property gets trapped at Level 1 and the diagnostic says exactly why.

This closes the open question from the 2026-04-14 mx.allabout.network audit: the classifier is not the bug. The data is. No classifier code change needed (pending confirmation by re-audit).

### 4. mx.allabout.network Service/Offer schema closed

`services/our-services.html` and `about/printworks.html` — the two pages flagged P1 in the 2026-04-14 audit — now carry `price`, `priceCurrency`, `availability`, `url` on every `Offer` and `provider` on every nested `Service`. Eight Offer entities updated across two files. Pattern matches what was already shipped on the Book pages. Re-audit queued pending deployment.

### 5. Infill row handlers extracted

Five inline replacement-providers in `bin/infill-report.js` — structured data findings, pages audited summary, broken links, agent access, error page test — moved into sibling modules under `bin/tableHandlers/`. Each extracted in isolation with the golden-master test re-run after every move; byte-identical output preserved throughout.

### 6. Latent golden-master bug documented

Regenerating the golden skeleton surfaced a real reproducibility bug: the `[ROBOTS_TXT_CONTENT]` handler at `bin/infill-report.js:1392` reads from `/tmp/robots.txt` — a runtime artefact of a live audit run — rather than `resultsDir`. The golden was passing in the past only because an earlier audit happened to leave that file on disk. Flagged as a follow-up reminder.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 4 (plus 2 pending in hub) |
| Files changed | 33 |
| Lines added | +932 |
| Lines removed | −118 |
| Repositories touched | 4 (mx-audit, mx-outputs, mx-crm, hub pending) |
| Tests added | 22 new passing tests (18 audit-gates + 4 field-gate) |
| Tests total after session | 28 passing (infill-golden + audit-gates + contract-completeness) |
| Handlers extracted | 5 (of 5 inline items targeted) |
| Schema entities fixed | 8 (5 Offers on services, 3 Offers on printworks) |
| Reminders closed | 4 (#3, #4, #5, #6) |
| Reminders held | 2 (#1, #2 — pending re-audit) |
| Reminders added | 1 (robots.txt handler reads /tmp) |

---

## The Insight

The original plan interview identified an assumption baked into REMINDERS #1: the Schema Maturity classifier was said to "read an older heuristic" and not recognise Wikidata `sameAs` or `@id` cross-references. The classifier code said otherwise. Instead of coding a classifier change, the investigation diagnostic proves the framing was wrong — the site was trapped at Level 1 not because the classifier missed signals but because the Level 2 prerequisites (100% required properties) were unmet. The fix belongs in the data, not the code. Two reminders collapsed into one.

---

## Next Steps

1. **Deploy mx-outputs** — push `our-services.html` and `printworks.html` changes to the live mx.allabout.network site.
2. **Re-audit mx.allabout.network** after deployment to confirm Schema Maturity promotes past Level 1. If confirmed, close REMINDERS #1 and #2.
3. **Fix the `/tmp/robots.txt` handler** — move to `resultsDir` so the golden-master can exercise the [ROBOTS_TXT_CONTENT] placeholder reproducibly.
4. **Optional**: the per-report frontmatter gate surfaced a shipped report with missing fields. A one-off sweep of `mx-crm/outreach/**/*report.md` through the gate would identify any other historical reports that would fail it today.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 1c2e7e0 | mx-audit | Audit report gates: template contracts, gate fixtures, maturity diagnostic |
| ebf4778 | mx-audit | Extract inline row handlers into bin/tableHandlers/ |
| ac6e9d2 | mx-outputs | Close Service/Offer schema gap on services + printworks pages |
| 08a2804 | mx-crm | Fix agentica report frontmatter: add modified + status fields |
| (pending) | hub | Audit-report Step 12.4 gate + per-report frontmatter validator |
| (pending) | hub | REMINDERS.md + CHANGELOG + LEARNINGS updates |
