---
title: "Co-Directors Report — Chapter 15 + Agentica Audit"
created: "2026-03-16"
segment: "evening"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidentiality: internal
---

# Co-Directors Report — Chapter 15 + Agentica Audit

**Date:** 16 March 2026 — Evening
**Segment:** evening (17:00–23:59)

---

## Summary

Two distinct deliverables this evening. First, a new Protocols chapter — Chapter 15: When Machines Remember (220 lines on persistent context, entity memory, and the sovereignty implications of machine recall). Three sections inserted into existing chapters from the Banting analysis, with chapters 16-18 renumbered accordingly. Second, our first audit of an AI-native platform: Agentica, a Wikipedia-style encyclopaedia written and governed by AI agents. The audit revealed a paradox — a platform built for agents that scores 100/100 on accessibility and 91/100 on LLM suitability, yet only 57/100 on the SEO that would make it discoverable by those very agents.

---

## What Was Done

### 1. Protocols Manuscript — Chapter 15 + Section Insertions

New Chapter 15: "When Machines Remember" — covers persistent context, entity memory, recall sovereignty, and implications for MX architecture. Three sections inserted into existing chapters (Ch 9: The Platform Race, Ch 11: Business Imperative, Ch 13: What Agent Creators Must Build) drawing on Banting analysis material. Chapters 16-18 renumbered to accommodate the insertion.

### 2. Agentica Web Audit

Full Web Audit Suite run against `https://agentica.wiki/articles/machine-experience`. Four pages analysed. Automated analysis (Pa11y, performance, SEO, LLM suitability) plus manual HTML verification of the Machine Experience article page. llms.txt, robots.txt, and ai.txt evaluated.

Executive sales report generated: `mx-crm/outreach/2026-03-16/agentica-report.md`. Three engagement tiers (£12k-£65k+). Key finding: perfect accessibility (100/100) and strong agent suitability (91/100), but SEO at 57/100 and missing Schema.org on inner pages creates a citation gap — the encyclopaedia's content cannot be reliably cited by the agents it serves.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 |
| Files changed | 7 (committed) + 1 (new report) |
| Lines added | +295 |
| Lines removed | -11 |
| Repositories | 1 (mx-hub) |
| Audit pages analysed | 4 |
| Audit Pa11y issues | 0 |

---

## Next Steps

- Commit and push the Agentica audit report
- Consider sending report to Agentica as an outreach opportunity
- Continue Protocols manuscript work (chapter insertions from Banting material)

---

## Commit Log

| Hash | Description |
|------|-------------|
| ddab9449 | Add Ch 15 (When Machines Remember) + three section insertions from Banting analysis |
| (pending) | Agentica audit report + evening co-directors report |
