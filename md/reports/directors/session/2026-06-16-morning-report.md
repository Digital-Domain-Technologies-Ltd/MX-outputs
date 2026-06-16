---
title: "Co-Directors Report - Faulty-Sitemap Re-crawl and Audit Index PRD"
description: "Empty-sitemap detection and automatic re-crawl shipped; audit index script PRD captured; three new audit deliverables committed."
author: "Tom Cranstoun"
created: 2026-06-16
modified: 2026-06-16
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-16-morning-report.md
  purpose: "Empty-sitemap detection and automatic re-crawl shipped; audit index script PRD captured; three new audit deliverables committed."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Faulty-Sitemap Re-crawl and Audit Index PRD"]
---

# Co-Directors Report - Faulty-Sitemap Re-crawl and Audit Index PRD

**Date:** 16 June 2026 - Morning
**Segment:** Morning (since midnight)

---

## Summary

The session completed the empty-sitemap re-crawl feature and captured the full PRD for the audit index script. When the pipeline now encounters a site whose sitemap exists but lists no URLs, it switches automatically to link-discovery mode from the homepage and injects a templated notice in the report explaining why. Three new audit deliverables shipped to clients. The audit index script - which will give the estate a machine-readable record of every domain audited and every run's parameters - is designed, queued, and ready to build.

---

## What Was Done

### 1. Empty-Sitemap Re-crawl Feature

When a site's sitemap.xml exists but lists zero URLs (a faulty sitemap), the pipeline previously stalled at one page and issued a thin-audit notice. The pipeline now detects this state automatically, clears the thin results, re-runs the crawler in link-discovery mode from the homepage, and re-grades discovery. The report receives a distinct templated notice - `[FAULTY_SITEMAP_RECRAWL_NOTICE]` - explaining the crawl-method switch and advising the client to repopulate their sitemap. All four surfaces were updated in lockstep: the pipeline orchestrator, the infill script, the report template, and the template contract. The architecture gate was also updated to recognise the `faulty-sitemap-recrawl.json` sidecar the feature writes. Tests passed clean.

### 2. Audit Index PRD Captured

The team interviewed to produce a complete PRD for `scripts/update-audit-index.js`. The script will maintain a global `mx-outputs/audit/index.json` (all domains, all runs, flags used, pages audited, timestamps) and a domain-scoped `index.json` inside each Gitea audit repository. It runs automatically at the end of every `--gates` phase and is also available as `npm run audit:index` for backfill. The PRD covers the JSON schema, zero-run startup, Gitea domain index, invocation point in the pipeline, and verification steps. A reminder was added to REMINDERS.md to build it soon.

### 3. Three Audit Deliverables

Full five-phase audits completed and committed for dangerdevices.com, www.bollants.de, and www.contentful.com. Reports, PDFs, and result-copies are in the shared submodule.

---

## Why It Matters

A site with a broken sitemap used to produce a misleading thin-audit report. The pipeline now self-corrects, and clients receive an honest account of what happened and why. The audit index gives the estate its first machine-readable history of what has been audited - a piece of MX tracking infrastructure that regulators and operators will both value.

---

## Next Steps

- Build `scripts/update-audit-index.js` per the PRD
- Monitor remaining batch audit chains (dkd.de-de, enhancely.ai, oxide.computer, www.leica-microsystems.com still running at session start)
- Check rivan.com lock status and re-run when clear
