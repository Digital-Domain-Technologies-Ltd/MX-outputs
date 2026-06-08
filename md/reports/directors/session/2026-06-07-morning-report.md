---
title: "Co-Directors Report — Content-Freshness Check, Built and Live"
description: "Turned the content-expiry idea into a deterministic web-audit check and proved it end-to-end against the live mx.allabout.network estate."
author: "Tom Cranstoun"
created: 2026-06-07
modified: 2026-06-07
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-07-morning-report.md
  purpose: "Turned the content-expiry idea into a deterministic web-audit check and proved it end-to-end against the live mx.allabout.network estate."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Content-Freshness Check, Built and Live"]
---

# Co-Directors Report — Content-Freshness Check, Built and Live

**Date:** 7 June 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

We turned the content-freshness idea into something the audit enforces, not just something the books describe. The Web Audit Suite now reads whether a published page declares a machine-readable expiry date and whether that date has already passed, and we proved the whole chain on our own site: we declared the first expiry on a live page, deployed it, and ran a full audit that surfaced it correctly. The discipline we sell, that scripts should enforce what the prose claims, now holds for content freshness.

---

## What Was Done

### 1. A deterministic freshness check in the audit

The audit gained a new, rule-driven check that asks two plain questions of every page: does it declare an expiry date a machine can read, and if so, has that date already passed while the page is still being served? The logic is pure and reproducible, with its own tests, and it reuses the suite's shared building blocks for wording, page links, and verdicts so it reads like the rest of the report. When a site declares no expiry anywhere, the section stays out of the report rather than nagging; it appears only when there is something to say. Every audit gate passed, including the suite's full test run and its internal consistency checks.

### 2. The standard, run on our own files

We declared an expiry on the pre-launch page for MX: The Protocols, which is genuinely time-bound, and deployed it to the live site so the new check had a real target to read. This is the same "we run the standard on our own files" posture the investor materials now lead with.

### 3. End-to-end proof on the live estate

We ran a full audit of every page on mx.allabout.network. It scanned 153 pages, found exactly one declaring an expiry (the page we had just published), confirmed none had lapsed, and rendered the new freshness section in the report grounded entirely in that evidence. The deliverable is a tagged, accessibility-conformant PDF.

---

## By the Numbers

- 153 pages audited; 1 declaring a machine-readable expiry; 0 lapsed
- Full audit-suite test run green, including 8 new tests for the check
- Audit report deliverable produced as a tagged PDF at the highest accessibility-conformance level the pipeline emits
- New work: a small, self-contained check (core logic, probe, report section, tests) plus its wiring into the existing pipeline

---

## Why It Matters

A page that still loads reads, to a machine, as a page that still counts. This check is how the audit catches the failure we have been describing to clients in plain terms: the seasonal offer still live months later, the booking page that outlived the company behind it. It is now a finding the suite can produce on its own, on every run, without a human spotting it first. It also lets us demonstrate the idea on our own site rather than only in the manuscripts.

---

## Next Steps

- Land this build into the repository (this session's commit).
- Optional follow-on: declare expiry on genuinely time-bound client pages as they arise; a page whose declared date has already passed surfaces as the stronger "stale and still served" finding.

---

## Commit Log

- `mx-outputs acb28121` — declare expiry on the Protocols pre-launch page (live deploy)
- `mx-outputs f8f22280` — full audit delivery for mx.allabout.network plus the anonymised findings-trail refresh
- hub commit — the freshness-check build and its pipeline wiring (created in the same session, immediately after this report)

---

*Generated from session data and the commit record; no separate board interview was held for this segment.*
