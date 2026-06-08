---
title: "Co-Directors Report — Content Estate Mission Reframe"
description: "Propagated a refined mission framing — from website-centric to full content estate — across all public-facing surfaces and both book manuscripts"
author: "Tom Cranstoun"
created: 2026-05-08
modified: 2026-05-08
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-08-morning-report.md
  purpose: "Propagated a refined mission framing - from website-centric to full content estate - across all public-facing surfaces and both book manuscripts"
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Content Estate Mission Reframe"]
---

# Co-Directors Report — Content Estate Mission Reframe

**Date:** 8 May 2026 — Morning
**Segment:** Morning (since midnight)

---

## Summary

This session introduced a refined mission framing: the problem MX solves is not limited to websites — it extends to the full content estate (contracts, policy documents, product specifications, technical reports). The change was triggered by a LinkedIn pushback thread and crystallised as a two-sentence distinction: "Being on the web and being machine-readable are not the same thing. Web accessibility solves discoverability; MX solves comprehension." This argument was propagated to every public-facing web surface and both book manuscripts in a single session, and both PDFs were regenerated.

---

## What Was Done

### 1. Mission framing shift — content estate over website

A LinkedIn commenter (Magento architect) argued that companies are simply "sloppy" for not putting documents on the web. The response sharpened a distinction that had been implicit: web presence solves discoverability but not comprehension. The reply draft was elevated into a standing argument: your website is a fraction of your content estate; contracts, policy documents, specifications, and technical reports don't live on the web but AI agents in enterprise tools are already reading them.

### 2. Propagation across all public-facing surfaces

The argument was woven into:

- Seven mx-site HTML pages: homepage, learn hub, what-is-mx, why-mx-matters, services index, our-services, contact
- The DDT site about section
- The free-book introduction chapter (chapter-00), in the "Revenue you cannot see leaving" opening section
- Three Protocols chapters: ch01 (accessibility connection), ch02 (invisible failure scope), ch11 (universal patterns apply beyond the web)

CTAs across services pages were updated from "website" to "content estate" to match the new framing.

### 3. PDF regeneration

Both books were regenerated after content changes. The Protocols PDF (9.4 MB) and the free-book introduction chapter (three formats: A4, A5, letter, each 7.8 MB) were built and verified clean with tagged PDF accessibility markers intact.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Submodule commits | 2 |
| Hub commits | _pending_ |
| Files changed (mx-outputs) | 26 |
| Files changed (allaboutv2) | 1 |
| Manuscripts touched | 2 (free-book, Protocols) |
| Manuscript chapters updated | 4 |
| mx-site HTML pages updated | 7 |
| PDFs regenerated | 4 (3 free-book formats + 1 Protocols) |
| Repositories | 2 (allaboutv2, mx-outputs) + hub |

---

## Why It Matters

The previous mission framing — "making your website work for AI agents" — undersold the problem and the product. The revised framing positions MX as the solution for the entire content estate, which is the actual scope of enterprise AI agent activity. This matters commercially: the enterprise document problem (contracts, specifications, reports) is larger and more urgent than the website problem, and it is where MX has a clearer competitive moat. The reframe also provides a principled answer to the "just put it on the web" objection, which will recur in sales conversations and investor Q&A.

---

## The Insight

"On the web" and "machine-readable" are not synonyms — and until this session, that distinction was not stated plainly anywhere on the public site. The argument had been made internally but never as a first-paragraph positioning statement. Surfacing it in response to a LinkedIn challenge and then immediately propagating it everywhere proved that the argument was already mature; it just needed articulating once.

---

## Next Steps

- Update the LinkedIn reply draft (in the plan file) and post when ready
- Consider a short blog post or LinkedIn article on the content estate / discoverability distinction — it tested well in conversation

---

## Commit Log

| Hash | Description |
|------|-------------|
| d4d5549b | Add content estate argument to DDT site about section |
| e3130a1 | Propagate content estate argument across mx-site; regenerate Protocols and free-book PDFs |
| _pending_ | Hub: source manuscript changes + submodule pointer bumps |
