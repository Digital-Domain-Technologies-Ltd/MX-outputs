---
title: "Co-Directors Report — Terminology Correction: Agent to Machine"
created: "2026-03-14"
segment: "evening"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidentiality: internal
---

# Co-Directors Report — Terminology Correction: Agent to Machine

**Date:** 14 March 2026 — Evening
**Segment:** evening (17:00–midnight)

---

## Summary

Both book manuscripts were corrected to use "machine" as the umbrella term instead of "agent". MX is about all machines — language models, browser automation, voice assistants, crawlers — not just AI agents. The correction touched 52 files across both books, followed by a readability pass to prevent mechanical-sounding prose.

---

## What Was Done

### 1. Terminology Correction Across Both Books

Generic uses of "agent/agents" were converted to "machine/machines" throughout:

- **MX: The Protocols** — all 15 chapters, executive summary, preface, reading guide, rear cover
- **MX: The Handbook** — all 11 chapters, preface, reading guide, cover, end matter
- **Shared chapters** — chapter-00 (Introduction to MX), Glossary
- **Appendices** — all appendices (A through O)

Specific agent types were preserved: "AI agent", "browser agent", "server-side agent", "in-browser agent", "local agent", "agentic", "agent creators", compound adjectives like "agent-friendly" and "agent-readable".

### 2. Readability Pass

After the mechanical conversion, paragraphs with excessive "machine/machines" repetition were rewritten for natural prose. Techniques: pronouns ("it", "they"), synonyms ("automated systems", "software"), and sentence restructuring.

- **Before:** 210 paragraphs with 3+ occurrences of "machine/machines"
- **After:** 106 paragraphs (remaining are mostly tables with structural repetition)
- Worst single paragraph went from 21 occurrences to 6

### 3. Validation

All 71 manuscript files pass markdownlint with zero errors.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 0 (pending) |
| Files changed | 52 |
| Lines added | +2,466 |
| Lines removed | −2,468 |
| Repositories | 1 (datalake) |
| Individual edits | ~500+ |
| Readability fixes | ~170 paragraphs improved |

---

## The Insight

This was a correction, not a cosmetic change. The books were saying "agents" when they meant "machines". MX applies to every machine that reads a web page — language models, browser extensions, automation frameworks, voice assistants, local models. Calling them all "agents" narrowed the concept and contradicted the core principle: design for the worst machine, and you're compatible with all of them.

---

## Next Steps

- Review sample chapters for tone consistency after the bulk edit
- Rebuild PDFs with corrected terminology
- Update allaboutv2 coming-soon page terminology if needed

---

## Commit Log

| Hash | Description |
|------|-------------|
| (pending) | Terminology correction: agent → machine across both books |
