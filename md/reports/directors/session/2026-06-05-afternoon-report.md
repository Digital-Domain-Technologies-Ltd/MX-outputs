---
title: "Co-Directors Report - Social Card System and the GEO Self-Defeat Argument"
description: "A site-wide social card, a GEO blog post arguing the tactics backfire, and an audit-report reframe of listicles."
author: "Tom Cranstoun"
created: 2026-06-05
modified: 2026-06-05
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-05-afternoon-report.md
---

# Co-Directors Report - Social Card System and the GEO Self-Defeat Argument

**Date:** 5 June 2026 - Afternoon
**Segment:** afternoon (since noon)

---

## Summary

One observation from Tom about listicles turned into three connected pieces of work: a reframe of how the audit report treats listicles, a new blog post arguing that the standard AI-visibility playbook is self-defeating, and a single brand-consistent social card now serving every page on the site. The through-line is a sharper position we can defend: search-engine demotion and AI-invisibility are the same event, because the AI answer engines read the search index.

---

## What Was Done

### 1. Audit report: listicle reframe

The web-audit report flagged "listicles" in a way that read as "lists are bad". Research says the opposite for AI: best-style lists are the single most-cited content shape in AI answers. The report now flags only the real fault, a self-promotional list that ranks the publisher first, renames the table column to "Self-ranking", and explains that the demotion such a list earns is itself the loss of AI visibility.

### 2. New blog post: "Game the Signals, Lose the Engine"

A fuller companion to the existing GEO post, written as a draft for review. Its argument: the tactics Generative Engine Optimization recommends (FAQ markup, self-ranking lists, year-swap freshness, unverifiable superlatives) are the same signals search engines now demote, so the tactic manufactures the invisibility it was hired to cure. It folds in a current, sourced contradiction: Google's Chrome Lighthouse now audits for an llms.txt file while Google Search's own guidance says do not bother creating one.

### 3. Site-wide social sharing card

The site carried per-page social cards in two inconsistent locations, several on an outdated palette, and most as SVG (which the major platforms do not render). Replaced with one shared card on the current brand palette, served as PNG, now referenced by every page (50 in total). MX Printworks keeps its own sub-brand card, refreshed to match. Both are documented in the brand guide, and the publishing tools now apply the shared card automatically so new pages inherit it.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 2 (this segment) |
| Files changed | 66 |
| Lines added | 676 |
| Lines removed | 238 |
| Repositories | 2 (hub, mx-outputs) |
| Pages repointed to the shared card | 50 |

---

## The Insight

The standard advice splits "SEO" and "AI visibility" into two channels you can trade between. That split is false. The AI answer engines retrieve through search: Google's own AI features ground in Google's index, and the others ground in web search. So a page the search engine demotes is a page the AI does not surface. Gaming a ranking signal does not buy an AI citation; it spends the ranking the citation rode on. That is a cleaner, more defensible MX position than "build good content", and it now appears in both the audit report and a public blog post.

---

## Decisions Made

- Social card `og:image` points at the PNG, not the SVG Tom asked for, because Facebook, LinkedIn, X, Slack, and iMessage do not render SVG cards. The SVG is kept as the editable source.
- MX Printworks keeps its own card rather than adopting the generic one, because it is a distinct sub-brand; its card was refreshed to the current palette instead.

---

## Next Steps

- Review and promote (or hold) the `game-the-signals-lose-the-engine.html` blog draft.
- Optional: generate a per-post social card variant later if a flagship post wants its own; the shared card is the default.

---

## Commit Log

| Hash | Description |
|------|-------------|
| a50484da | (mx-outputs) Add generic MX social card, roll out site-wide, add GEO blog draft |
| 8abc9817 | (hub) Generic MX social card rollout + GEO listicle reframing in audit template |

<!-- Report generated from session data during /step-commit; the standard NEW-report interview was skipped to keep the commit flow moving. -->
