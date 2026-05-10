---
title: "Co-Directors Report — UNESCO Alignment Draft Filed"
description: "Quiet hygiene afternoon. One draft blog post mapping MX onto the UNESCO Recommendation on the Ethics of AI; held in blog/drafts/."
author: "Tom Cranstoun"
created: 2026-05-10
modified: 2026-05-10
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-10-afternoon-report.md
---

# Co-Directors Report — UNESCO Alignment Draft Filed

**Date:** 10 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

A quiet hygiene segment. One piece of work landed: a draft blog post mapping the MX core principles onto the four values and ten principles of the UNESCO Recommendation on the Ethics of Artificial Intelligence. The post is filed in `blog/drafts/` as noindex; it is not yet public. No board-level signal.

---

## What Was Done

### 1. UNESCO alignment draft

Wrote and filed a draft blog post — *Where MX meets the UNESCO Recommendation on the Ethics of AI* — in `mx-outputs/mx-site/blog/drafts/`. The post walks the four UNESCO core values and the ten principles, identifying which already map onto MX practice (Transparency and Explainability, Human Oversight, Responsibility and Accountability, Fairness, Awareness and Literacy, Sustainability) and which sit further from MX's technical surface (Proportionality, Safety, Privacy, Multi-stakeholder Governance). Closes with the practical hook that UNESCO's RAM and EIA assessments work better against MX-compliant systems because the assessor finds declared evidence rather than having to excavate it.

The draft followed the standard polish gates: no em-dashes, neutral English in prose (no UK/US divergent spellings), no AI-vocabulary patterns, single H1, all relative paths resolve, JSON-LD `BlogPosting` plus a `citation` block pointing at the UNESCO Recommendation, social card SVG generated. Three terms (`EIA`, `Explainability`, `Reviewability`) added to the project aspell wordlist via `npm run spell:sweep:apply` so the spell-check gate stays clean for this and future posts that touch the same vocabulary.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 |
| Files changed | 2 |
| Lines added | +333 |
| Lines removed | 0 |
| Repositories | 1 (mx-outputs) |
| Words in draft | 920 |
| New wordlist entries | 3 |

---

## Next Steps

- [ ] Review the UNESCO draft and decide whether to promote to `blog/` (publish) or keep noindex pending edits
- [ ] If published: update Protocols ch00 references so the "MX gives technical shape to UNESCO's principles" line in the post is also load-bearing in the manuscript

---

## Commit Log

| Hash | Description |
|------|-------------|
| `fefa68c` (mx-outputs) | Add UNESCO AI ethics alignment draft blog post |
| _pending_ (hub) | Hub pointer bump for mx-outputs + 3-word wordlist additions |
