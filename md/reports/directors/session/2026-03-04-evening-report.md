---

title: "Co-Directors Report — Audit Pipeline End-to-End and Standards Sweep"
description: "Evening session report. Full tg.community audit using the MX audit cog, Pa11y dependency fix, viewport meta SSOT update, and 372-file standards sweep across all repositories."
created: "2026-03-04"
version: "1.0"
author: "Tom Cranstoun"
type: info-doc
mx:
  x-mx-segment: "evening"
  audience: "business"
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-04-evening-report.md
  purpose: "Evening session report. Full tg.community audit using the MX audit cog, Pa11y dependency fix, viewport meta SSOT update, and 372-file standards sweep across all repositories."
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - Audit Pipeline End-to-End and Standards Sweep"]

---


# Co-Directors Report — Audit Pipeline End-to-End and Standards Sweep

**4 March 2026 — Evening**

---

## Summary

The evening session ran the full MX audit pipeline against tg.community — The Gathering's website — and delivered a complete executive report with remediation estimates, engagement options, and a business case. The audit cog was exercised end-to-end for the first time against a non-client site: a community standards body that Cog-Nova-MX co-founded.

Along the way, a broken dependency in the audit tooling (Pa11y) was diagnosed and fixed. A pre-existing standards change (removing `user-scalable=yes` from viewport meta tags) was committed across every repository in the workspace — 372 files across five git repositories.

The session produced two distinct deliverables: a sales-ready audit report and a codebase-wide standards alignment.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (evening) | 4 (main) + 4 (submodules) |
| Files touched | 130 (main) + 227 (allaboutv2) + 11 (mx-outputs) + 5 (mx-crm) + 1 (mx-audit) |
| Total files in sweep | ~374 |
| Report length | 632 lines, v2.0 |
| Pages audited | 7 (tg.community) |
| Engagement options | 3 tiers (£5k–£25k+) |
| Pa11y WCAG2AA violations | 0 across all pages |

---

## What Was Built

### tg.community Web Audit Report

Full nine-action audit cog pipeline: recon, crawl, inspect, check-discovery, verify-claims, select-template, generate-report, lint, summary. The report lives at `mx-crm/outreach/2026-03-04/tg-community-report.md`.

Key findings:

- **Performance:** 85/100 — average 786ms load time, zero CLS
- **SEO:** 60/100 — strong foundations, no Schema.org
- **AI Agent Suitability:** 92/100 — excellent semantic HTML, Schema.org absent
- **Accessibility:** 100/100 — zero Pa11y WCAG2AA violations (verified)
- **Security:** 20/100 — HTTPS only, missing all other headers
- **Discovery:** robots.txt, sitemap.xml, and llms.txt all return 404

The report includes three engagement options scaled for a community organisation (not enterprise pricing), a business case arguing The Gathering should be a reference implementation of its own standards, and a "citation advantage" section explaining why Schema.org matters for standards bodies.

### Pa11y Dependency Fix

Pa11y 9.1.1 depends on `@pa11y/html_codesniffer`, which npm's workspace hoisting was not installing. Fixed by adding it as an explicit dependency in `mx-audit/package.json`. Every Pa11y test across all audit pages had been failing silently — now verified working.

---

## What Changed

### SSOT: Viewport Meta Standard

The MX HTML writing guide (`mx-canon/ssot/mx-html-writing-guide.cog.md`) was updated: viewport meta tags should omit `user-scalable` entirely. The browser default is `yes`; including it explicitly triggers linting warnings in Edge DevTools and other validators. The previous rule ("must include `user-scalable=yes`") was well-intentioned but caused more warnings than it prevented.

The change was propagated to every HTML file in the workspace:

| Repository | Files Changed |
|------------|--------------|
| allaboutv2 | 227 |
| Main repo (books, blogs, canon, skills, app, scripts) | 126 |
| mx-outputs | 11 |
| mx-crm | 4 |
| **Total** | **368** |

---

## What This Means for The Gathering

The audit report is the first formal assessment of tg.community against MX standards. The Gathering publishes specifications for how websites should communicate with AI agents — and the audit shows where the site itself does not yet implement those specifications. The gap is not a criticism; it is an opportunity for The Gathering to become the canonical reference implementation.

The three engagement tiers (Foundation at £5k–£8k, Comprehensive at £12k–£18k, Strategic at £18k–£25k plus ongoing) provide concrete options for the administration team. The pilot option (£1.5k–£2.5k for robots.txt, sitemap.xml, and llms.txt alone) is a quick win that could be delivered in a week.

---

## Next Steps

- Present tg.community audit report to The Gathering's administration
- Schedule discovery call to discuss engagement options
- London CMS Experts contact follow-ups (this week, carried from morning)
- Frankfurt preparation — 69 days

---

## Commit Log

| Hash | Theme |
|------|-------|
| `fa312c17` | tg.community audit report + Pa11y dependency fix |
| `993071a6` | Changelog — tg.community audit, Pa11y fix |
| `7654b318` | Viewport meta sweep — 130 files + SSOT update + 4 submodule pointers |
| `b6fae0ab` | Changelog — viewport sweep |

**Submodule commits:**

| Repo | Hash | Theme |
|------|------|-------|
| mx-crm | `16dc6a6` | tg.community audit report (new file) |
| mx-crm | `4c2d286` | Viewport fix (dotfusion HTML) |
| mx-audit | `54632ea` | Pa11y `@pa11y/html_codesniffer` explicit dependency |
| allaboutv2 | `ab8c314` | Viewport sweep (227 files) |
| mx-outputs | `bd4d77e` | Viewport sweep (cached HTML) |

---

*The board does not read git logs. This report makes sure they do not have to.*
