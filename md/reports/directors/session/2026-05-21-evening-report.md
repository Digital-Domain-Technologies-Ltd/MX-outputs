---
title: "Co-Directors Report — Audit Pipeline: Always-Produce-PDF + dkd.de Triage"
description: "Six subtle audit-pipeline bugs traced and fixed; the deliverable is now an error PDF when gates fail, not a silent exit. dkd.de prospect audit is now self-consistent."
author: "Tom Cranstoun"
created: 2026-05-21
modified: 2026-05-21
version: "1.0"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-21-evening-report.md
  purpose: "Six subtle audit-pipeline bugs traced and fixed; the deliverable is now an error PDF when gates fail, not a silent exit. dkd.de prospect audit is now self-consistent."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit Pipeline: Always-Produce-PDF + dkd.de Triage"]

---

# Co-Directors Report — Audit Pipeline: Always-Produce-PDF + dkd.de Triage

**Date:** 21 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

The dkd.de audit was a single live prospect deliverable that exposed six distinct defects in the audit pipeline. Each was traced to its root cause and fixed at the source layer (collectors, gates, templates) rather than patched in the rendered PDF. The architectural change of the evening: the pipeline now always produces a PDF, with failed gates surfaced as a visible diagnostic block on page one, instead of exiting silently to the terminal. A failed audit is now a deliverable that names what went wrong.

---

## What Was Done

### 1. dkd.de prospect audit shipped self-consistent

The earlier dkd.de report contradicted itself in three places: the header table claimed every security header was present, the priority row said "0 of 5", and the per-page summary divided by zero. Traced to a redundant language-filter that re-rejected URLs the crawler had already accepted, plus an empty-array edge case that mapped zero rows to "Yes". The redundant filter is gone, a shared coverage helper now drives every consumer of the security CSV, and the rendered PDF shows real numbers: HTTPS 7/7, HSTS 7/7, CSP 7/7, X-Frame-Options 0/7, X-Content-Type-Options 7/7. The "all five" coverage line and the priority finding both agree with what the table shows.

### 2. Always-produce-PDF architecture

The pipeline previously exited non-zero when gates failed, leaving the operator with terminal output but no deliverable. The new rule: every audit produces a PDF. When gates fail, the PDF carries an "Audit Diagnostics" section at the top with one entry per gate failure — source, category, timestamp, full detail, and operator next steps. A new `audit_errors.json` sidecar collects entries from any gate or collector via a shared `recordError()` helper. The Phase 3 gates still detect contradictions and template leaks; they just record-and-continue instead of aborting. mx.pdf.sh's internal leak gate now respects an `MX_AUDIT_ALWAYS_PDF=1` env var that the pipeline sets when generating audit deliverables.

### 3. Performance and accessibility scoring fixes that compounded

Earlier in the day two scoring layers had drifted from reality on the same audit: performance scored "Excellent 97" against no measured data (zero milliseconds was interpreted as instantaneous load instead of "no data") and accessibility scored 0 against 527 raw Pa11y instances (most of which were one duplicate-SVG-icon-sprite repeated 56 times per page). The performance scorer now treats null as "data absent", the accessibility scorer counts distinct WCAG codes per page rather than raw instances, and the Pa11y-only "isLanguageAllowed" filter that was silently rejecting every German URL has been removed. Real numbers across the report now: Performance 70, Accessibility 90, SEO 92, Machine Suitability 65.

### 4. Two prospect-facing blog posts published

mx-site shipped two new use-case posts in the evening — one on carrier-neutrality and how agents discover metadata through HTTP content negotiation, one on MX as a compliance defence anchored on the European Accessibility Act. Sitemap, llms-full.txt, and use-cases/index.html bumped accordingly.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 4 hub + 5 mx-outputs (this evening segment) |
| Files changed (hub) | 23 |
| Lines added | +597 |
| Lines removed | −288 |
| Repositories touched | 2 (hub + mx-outputs) |
| Audit-pipeline gates refactored | 4 |
| New library modules | 3 (audit-errors, render-error-section, regenerate-error-section) |
| New blog posts (mx-site) | 2 |
| Failed-PDF cases recovered into deliverable | 1 (dkd.de error PDF) |

---

## Why It Matters

A polished PDF with contradictory cells damages the credibility of every other number in the report. The prospect reading the dkd.de audit would have stopped trusting the Accessibility score or the SEO score the moment they noticed the security headers section disagreed with itself. Fixing the underlying data paths — rather than the rendered prose — means the next prospect audit ships clean by default, not because we noticed the contradiction in time.

The always-produce-PDF change is a procurement signal: a tool that fails by producing a clear failure document is one that operators can hand to a colleague to triage, where one that exits silently is one only the operator can recover. The error PDF is the same shape as the success PDF — same template, same cover, same audit log link — with a diagnostic block at the top. There is no separate "error mode" the operator has to know about.

---

## The Insight

Three of the six bugs this session were the same shape: a function that filtered the same data twice from two different code paths with subtly different rules. The redundant language filter in CSV writers. The accessibility-score "adjusted" path that disagreed with the main path. The PDF leak gate that ran on top of audit-pipeline's leak gate. Each one was correct in isolation; each one drifted from its sibling under load. The architectural rule that emerged: when two code paths produce a verdict on the same data, extract a shared helper so they cannot drift. This session extracted three such helpers (security-header coverage, accessibility band derivation, error-section render). The "single source of truth for every section" sweep is now logged as the next follow-up.

---

## Decisions Made

- Always-produce-PDF as a hard architectural rule. Failed gates record-and-continue; only catastrophic Phase 1 collector failures still abort.
- The error section sits at the TOP of the report (after the cover header, before "About This Report"), not in an appendix. Operators see it before any audit prose.
- Accessibility scoring counts distinct WCAG codes per page (Lighthouse-style), not raw instances. Single-source dictionary file for the formula; no parallel "adjusted" path that can drift.
- The shared `audit-errors.json` sidecar replaces ad-hoc stderr-and-exit error handling everywhere it touches.

---

## Open Questions

- The same pattern that bit us on security headers (zero rows treated as "all present") could be lurking in seo_report.csv, link_analysis.csv, image_optimization.csv, performance_analysis.csv, content_quality.csv — they all wrote zero rows on this audit before the redundant-filter fix. Worth scheduling a sweep that audits each per-page CSV writer for the same empty-array trap.
- The pre-push gate suite (Step 9) was added 2026-05-21 and currently warns rather than blocking. The cutover to hard-block is 2026-07-01. Worth deciding whether the new audit_errors.json sidecar should be a Step 9 input — if any blocker entries exist in any results dir, should the hub push be blocked?

---

## Next Steps

- Sweep the other per-page CSV writers (seo_report.csv, link_analysis.csv, image_optimization.csv, performance_analysis.csv, content_quality.csv) for the same redundant-filter / empty-array pattern that bit security_report.csv.
- Wire `check-mx-compliance.js` to also detect the "two-code-paths-for-one-verdict" pattern as it crops up across the audit pipeline.
- Confirm the dkd.de error PDF reads cleanly to a non-technical operator (open the PDF, scan for the diagnostic block, check the prose is operator-actionable).
- Review whether the new `MX_AUDIT_ALWAYS_PDF` env var should default to 1 across all audit pipelines or stay opt-in.

---

## What This Means for Investors

The audit product is the front door for every prospect engagement. A polished audit that contradicts itself is worse than no audit — it signals that the tool generating it cannot be trusted, by extension that the underlying MX framework cannot be trusted. This session's six fixes raise the floor on what the worst-case audit looks like: failed gates now produce a clear failure document rather than a contradictory success. The fixes are at the source layer, so they harden every future audit, not just dkd.de.

---

## Commit Log

| Hash | Description |
|------|-------------|
| dd9ffcc (mx-outputs) | mx-site: publish two use-case blog posts (metadata discovery, compliance defence) + sitemap/llms-full bumps |
| cc3cf1f (mx-outputs) | Audit: dkd.de-de error-PDF rerun (always-produce-PDF, error section, consistent security headers) |
| e3f3c66 (mx-outputs) | mx-site: humanizer pass across 23 HTML pages |
| 42e6039 (mx-outputs) | Publish blog post: When the AI world realised it needed standards |
| 9cb3fb2 (mx-outputs) | Fix mx-site mobile layout: overflow on phones and contrast on /learn/ |
| a45102c1 (hub) | Bump mx-outputs: humanizer pass on 23 mx-site HTML pages |
| 0b08ae3a (hub) | Bump mx-outputs: publish blog post 'When the AI world realised it needed standards' |
| 76d6ed61 (hub) | Changelog: 2026-05-21 evening, mx-site mobile layout fixes |
| c51763f6 (hub) | Bump mx-outputs: mx-site mobile overflow + /learn contrast fix |
| _pending_ (hub) | Audit pipeline: always-produce-PDF + error-report section + four scoring/contradiction fixes |
