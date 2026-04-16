---
title: "Co-Directors Report — Audit Trustworthiness Pass + MXS Public Mirror"
description: "Evening session shipping a seven-step audit-tooling plan end-to-end plus a late-evening arc that published the four MXS proposed drafts at a public URL the Gathering community can read."
author: "Tom Cranstoun and Maxine"
created: 2026-04-16
modified: 2026-04-16
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, audit-trustworthiness, mxs, the-gathering]
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
| Commits this segment (both arcs) | 13 across 5 repos (9 audit arc + 4 MXS arc + 1 pending hub) |
| Files changed | 33 (audit arc) + 47 (MXS arc hub commit) |
| Lines added | +932 (audit arc) + 3161 (MXS arc, dominated by moved drafts) |
| Lines removed | −118 (audit arc) + 3368 (MXS arc, dominated by removed private copies) |
| Repositories touched | 5 (mx-audit, mx-outputs, mx-crm, hub, new mx-shared-gathering) |
| New public repos | 1 (ddttom/mx-shared-gathering) |
| Public artefacts enumerated in blog + Appendix U | 4 (source drafts, canon YAMLs, Stream RFC repos, book) |
| Appendices indexed (after coverage fix) | 21 (A through U) |
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

## Late-Evening Addendum — MXS Public-Mirror Arc

The audit-trustworthiness pass closed early enough that a second arc ran end-to-end in the same evening: publishing the four MXS proposed drafts in a form the Gathering community can actually read, plus the supporting book and blog material that points at them.

### 7. MXS-01..04 source drafts published publicly

MX-hub is private, so the authored `.cog.md` copies of the four proposed standards had no public URL. A new repo — `ddttom/mx-shared-gathering` (MIT, public) — now holds those four drafts plus a README explaining the relationship with the Stream RFC-format repos that already live under `TG-Community/draft-cranstoun-mx-*`. The repo is mounted back inside mx-hub as a submodule at the root, so the private build keeps using the same content, the private copies under `mx-canon/mx-the-gathering/proposed-drafts/` are removed, and a stub README in that path redirects anyone landing on the old location.

Every outward-facing reference — CLAUDE.md, REMINDERS.md, the two ADRs, the TG-Community review notes, Appendix M, Appendix T, Appendix U, and the Chapter 20 preview blog — now points at the public URL. The MXS-hub reminder flagging this gap turns from amber to green in this session.

Decision called out during the work: the repo lives in `ddttom/`, not in TG-Community. The Gathering's role is to review and ratify; until ratification, these are Tom's submitted drafts, not their property. Publishing from his own account keeps provenance clear. The `TG-Community/draft-cranstoun-mx-*` RFC repos are a separate mechanism — Stream's submission format, hosted where Stream lives, not an ownership transfer.

### 8. Appendix U added + appendices index coverage fix

A new Appendix U — "A Standard That Knows What It Isn't" — went into *MX: The Protocols* as a short architecture companion to Chapter 20. Alongside that, the appendix index template in `scripts/generate-appendix-html.sh` was holding only A–L; the quick-nav strip, index markdown, and `llms.txt` template were stale for the M–U additions that had accumulated. The build now renders twenty-one appendices (A through U) with proper section groupings (Implementation Guides, Quick References, Case Studies, Reference and Cataloguing, Workflow and Comprehension, The Standards Family). All individual appendix HTMLs carry the full A–U quick-nav.

### 9. Canon YAML public mirror + blog rewritten around four artefacts

The three canonical YAML files (`fields-data.yaml`, `fields-data-carriers.yaml`, `cognovamx-fields.yaml`) now live at `mx-outputs/mx-site/canon/` and will be served at `mx.allabout.network/canon/` when mx-outputs deploys. The Chapter 20 preview blog — "A Standard That Knows What It Isn't" — was rewritten so its "Where to look it up" section explicitly enumerates and describes the four public artefacts: the source drafts (mx-shared-gathering), the machine-readable canon (the YAMLs), the Stream RFC drafts (four named TG-Community repos), and the book reference (Appendices M + U). Closing strap lists all the URLs for copy-paste. Appendix U got the same four-artefact section so the two stay parallel.

Blog word count grew 16% (1643 → 1901) to carry the prose; every new section points at a specific public URL a reader can open today.

---

## Next Steps

1. **Deploy mx-outputs** — push `our-services.html`, `printworks.html`, the canon YAML mirror at `mx-site/canon/`, and the four-artefact blog update to the live mx.allabout.network site. Once deployed, the public canon URLs (mx.allabout.network/canon/*.yaml) referenced from Appendix U and the blog start resolving.
2. **Re-audit mx.allabout.network** after deployment to confirm Schema Maturity promotes past Level 1. If confirmed, close REMINDERS #1 and #2.
3. **Fix the `/tmp/robots.txt` handler** — move to `resultsDir` so the golden-master can exercise the [ROBOTS_TXT_CONTENT] placeholder reproducibly.
4. **Register MXS-01..04 drafts via Stream UI** — the GitHub side is done (four RFC repos in TG-Community, source drafts at `ddttom/mx-shared-gathering`); Stream registration is the remaining manual step.
5. **Send TG-Community review notes to Gathering admin** — `mx-canon/ssot/tg-community-review-notes.md` now references the public source-drafts URL; ready to send.
6. **Optional**: the per-report frontmatter gate surfaced a shipped report with missing fields. A one-off sweep of `mx-crm/outreach/**/*report.md` through the gate would identify any other historical reports that would fail it today.

---

## Commit Log

### Audit Trustworthiness Pass

| Hash | Repo | Description |
|------|------|-------------|
| 1c2e7e0 | mx-audit | Audit report gates: template contracts, gate fixtures, maturity diagnostic |
| ebf4778 | mx-audit | Extract inline row handlers into bin/tableHandlers/ |
| 05cd18c | mx-audit | Rename audit-tool to auditTool in gate fixtures |
| ac6e9d2 | mx-outputs | Close Service/Offer schema gap on services + printworks pages |
| 08a2804 | mx-crm | Fix agentica report frontmatter: add modified + status fields |
| b17d3d67 | hub | Audit-report Step 12.4 gate + per-report frontmatter validator |
| 614e7200 | hub | Docs: CHANGELOG evening entry, REMINDERS tidy, two learnings |
| 3b0e8f95 | hub | UBERCOG: add validate-report-frontmatter to audit-gate command list |
| 22e79c34 | hub | Bump mx-audit: fixture field-naming fix (auditTool) |

### MXS Public-Mirror Arc

| Hash | Repo | Description |
|------|------|-------------|
| 68a4c5b | mx-shared-gathering | Initial publication of the four MXS proposed drafts |
| 9b67514 | mx-outputs | Publish canon YAML mirror + point blog at public MXS drafts |
| e10dfcd | mx-outputs | Blog: expand "Where to look it up" to cover all four public artefacts |
| df386baa | hub | Publish MXS-01..04 proposed drafts publicly via mx-shared-gathering submodule |
| (pending) | hub | Step-commit: four-artefact blog/appendix prose + session close |
