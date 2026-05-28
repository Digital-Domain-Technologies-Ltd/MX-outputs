---
title: "Co-Directors Report — Audit Lander Adds Third Entry-Point on mx-site"
description: "Afternoon segment added /audit/ as a top-level lander on mx-site, routing visitors to the three audience-specific blog posts written this morning, plus the PDF inspector and the explainer page so any reader can verify a deliverable on their own machine. Discovery infrastructure (sync-blog-discovery) learned about extensible KEY_PAGES_DIRS; a handful of small tidies the morning did not catch landed too."
author: "Tom Cranstoun"
created: 2026-05-28
modified: 2026-05-28
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-28-afternoon-report.md
---

# Co-Directors Report — Audit Lander Adds Third Entry-Point on mx-site

**Date:** 28 May 2026 — Afternoon
**Segment:** afternoon (since noon, continuous with the morning's deliverable polish strand)

---

## Summary

The audit narrative now has a top-level lander at `mx.allabout.network/audit/`, alongside the three audience-specific blog posts that landed in the morning. The lander routes engineers, clients, and auditors to the read that fits them, plus the PDF inspector and the explainer so any visitor can verify a deliverable on their own machine. The sync-blog-discovery script learned that landers live in extensible top-level folders, so the next folder we add will surface in `llms.txt` without a code edit.

---

## What Was Done

### 1. /audit/ lander at mx-site root

A new lander page at `mx-outputs/mx-site/audit/index.html` opens the audit story for visitors who arrive from search, social, or a peer link rather than via the services page. It carries three audience cards (engineers, clients, auditors) pointing at the morning's three blog posts, and two verification cards pointing at the PDF inspector at `/tools/pdf-inspector.html` and the explainer at `/learn/mx-for-pdfs.html`. Schema.org `@type: Service` describes the lander to machines; `BreadcrumbList` and `WebPage` complete the standard graph. The lander appears in the main `sitemap.xml`, in the curated `## Key pages` section of `llms.txt`, and in `llms-full.txt` for agents that read the full corpus.

### 2. Discovery infrastructure: KEY_PAGES_DIRS extension

The `sync-blog-discovery` script holds a static list of top-level lander folders that surface in the `## Key pages` section of `llms.txt`. The list was `books, learn, services, about`; we extended it to include `audit`. The mechanism is general enough that the next top-level lander folder we add to mx-site only needs one entry added to the array. The script then writes the lander's title from its `<title>` tag into the curated key-pages block.

### 3. Small morning tidies that did not catch in the segment

Three small follow-ups landed this segment that the morning did not catch. The `LEARNINGS.md` prose rule now requires timeless wording and artefact-name file slugs in any public-web entry that documents a rule; the UBERCOG essential-commands table registers `npm run test:pdf-mx-compatible` next to `npm run test:pdf-eaa` so the new PDF gate is one keystroke away; and the `mx-audit` cog now carries `mx.purpose`, `mx.stability`, and `mx.x-mx-contextProvides` so it passes the now-hard Gate 10 mx-validator check.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 7 |
| Files changed | 12 |
| Lines added | +319 |
| Lines removed | −15 |
| Repositories | 2 (hub + mx-outputs) |
| New canonical files | 1 (audit lander) |
| New top-level mx-site folders | 1 (`audit/`) |

---

## Why It Matters

The audit narrative was already in good shape after the morning — three blog posts, a banded scorecard, a findings sidecar, and an MX Compatible regression test. What was missing was an entry-point page a visitor lands on if they search for "MX audit" or arrive from a link in a pitch document. The blog grid is chronological; the services page lists everything we sell. Neither was the right surface for someone who wants the short version of "what is an MX audit and how do I verify it." `/audit/` fills that gap with one paragraph of framing, three audience-routed reads, and two tools that let the visitor verify our claims on their own machine.

---

## Open Questions

- Should the audit lander get a card in the main header navigation, or is the footer plus search discovery enough for now? The header is already at seven items; adding an eighth crosses a visual threshold on mobile. Leaving it out keeps the visitor count for `/audit/` honest as a discovery-led page rather than a navigation-fed one.
- Are there other "topic landers" that would serve search/social arrivals better than the current blog grid? `/provenance/`, `/certified-operator/` (currently inside `/services/`), and `/eaa/` are candidates if we see real demand from those keywords.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 3176978 (mx-outputs) | Add /audit/ lander linking the three audience-routed audit posts |
| 0eab5547 (hub) | Tidy: hook-driven LEARNINGS blank-line trim + routing-registry timestamp refresh |
| eb236815 (hub) | UBERCOG: register npm run test:pdf-mx-compatible alongside test:pdf-eaa |
| 66bda54b (hub) | LEARNINGS: timeless prose + artefact-name file slugs for public-web writing |
| 3f45f074 (hub) | Bump mx-outputs: pick up directors report 1.3 final hash backfill |
| 14b50462 (hub) | scripts/cogs/mx-audit.cog.md: add mx.purpose, mx.stability, mx.x-mx-contextProvides for Gate 10 |
