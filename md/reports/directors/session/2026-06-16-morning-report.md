---
title: "Co-Directors Report - Faulty-Sitemap Re-crawl and Audit Index PRD"
description: "Empty-sitemap detection and automatic re-crawl shipped; audit index script PRD captured; three new audit deliverables committed."
author: "Tom Cranstoun"
created: 2026-06-16
modified: 2026-06-16
version: "1.2"

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

### 4. PDF Inspector Redesign

The PDF inspector page was dense and hard to read. Three visual improvements landed. The tier classification (MX Compatible / EAA Tagged Only / Plain PDF) moved from plain paragraphs to colour-coded cards with a clear label column and a body column, making the three tiers scannable at a glance. The badge token table received proper styling - dark surface, uppercase column headers, correct padding. The "Why this is not server-side" section converted from three run-together paragraphs to a card list with a bold reason label above the explanation. All CSS additions went into `mx-tools.css`; no inline styles.

### 5. Cog-Graph-First Hook

A new PreToolUse/Bash hook (`pre-bash-cog-graph-first.sh`) now blocks `grep -r`, `find`, and `ls` commands aimed at `scripts/cogs/` and redirects to the MX graph MCP tools (`mx_graph_query`, `mx_graph_deps`, `mx_graph_lineage`). The hook is wired into `settings.json`. The rule is also in CLAUDE.md and recorded as a feedback memory. This closes a recurring gap where the assistant used filesystem scanning to discover cogs rather than querying the registry.

---

## Why It Matters

A site with a broken sitemap used to produce a misleading thin-audit report. The pipeline now self-corrects, and clients receive an honest account of what happened and why. The audit index gives the estate its first machine-readable history of what has been audited - a piece of MX tracking infrastructure that regulators and operators will both value.

The PDF inspector is a client-facing demonstration tool: it is the page QR codes on every PDF badge resolve to. A dense, hard-to-read inspector undermines the credibility of the badge it explains. The redesign makes the three-tier verdict legible at a glance.

The cog-graph-first hook turns a known pattern of lazy filesystem scanning into a hard enforcement: the graph is the registry, and the registry is what answers cog-discovery questions correctly.

---

### 6. Session Close - Gate Fixes and Audit Inventory

The step-commit push was blocked by Gate 11 (internal link integrity): REMINDERS.md held nine links to blog draft files at their old flat root paths after the group-subfolder migration. Each path was corrected to its new subdirectory, and the push was re-attempted. Gate 25 (index idempotency) then caught four stale generated files - the hook registry, memory index, routing registry, and llms-full.txt - which were regenerated and committed. The push succeeded with all gates green.

A full audit inventory confirmed fifteen completed reports in the estate. Fourteen domains have folders but no report yet. These were captured as a REMINDERS.md item so the next session can resume the batch without re-checking the list. Two additional audit deliverables also surfaced: enhancely.ai and oxide.computer, committed to the submodule. dkd.de-de was also committed.

---

## Next Steps

- Build `scripts/update-audit-index.js` per the PRD
- Resume batch audits: axiompartners.vc, neomwellbeing.com, pentatonic.com, rivan.com, specification.website, typo3.com, www.bravecap.com, www.dreambigsemi.com, www.evantic.ai, www.exo.inc, www.leica-microsystems.com, www.marriott.com, www.roamrobotics.com, www.steelatlas.vc
