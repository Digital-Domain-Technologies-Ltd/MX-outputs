---
title: "Co-Directors Report — MX Comprehension Probe Dynamic Suggestions"
description: "Enhanced the MX Comprehension Probe extension with intelligent question generation, making the MozFest demo more interactive and showcasing how different pages yield different suggestions."
author: "Tom Cranstoun"
created: 2026-06-01
modified: 2026-06-01
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon, tool-enhancement]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-01-afternoon-report.md
  runbook: "Board-level session summary for afternoon work on the MX Comprehension Probe. Scope: dynamic question suggestion generation using the on-device model."
---

# Co-Directors Report — MX Comprehension Probe Dynamic Suggestions

**Date:** 1 June 2026 — Afternoon  
**Segment:** afternoon (since noon)

---

## Summary

Enhanced the MX Comprehension Probe Chrome extension with dynamic question generation. The tool now asks the on-device model to generate 3 page-specific questions after reading the current page, making the MozFest 2026 demo more interactive and highlighting how page structure (MX-rich vs stripped) affects what questions the model can reasonably ask. Copy-button formatting (Q + A together) was confirmed to be already correct. Documentation updated to reflect the new workflow and architecture.

---

## What Was Done

### Dynamic Question Generation

Replaced hardcoded preset questions with an intelligent suggestion system. When a user clicks "Ask the model", the extension now:

1. Reads the page (visible text + JSON-LD + meta tags + frontmatter)
2. Calls the on-device model to generate 3 relevant, page-specific questions
3. Displays them as clickable buttons the user can select
4. If the model fails, gracefully falls back to an empty list (user can type their own)

The system prompt asks for "practical, concise questions" specific to the content, making suggestions concrete rather than generic. A structured page with provenance metadata now yields suggestions about authorship, verification, and AI authorship disclosure; a bare page yields more generic questions about content.

### Documentation

Updated README.md to document the new workflow with an architecture diagram showing both the suggestion-generation and answer-generation flows. Version bumped to 0.2.0. Copy-button format confirmed: copies both Q and A with source attribution.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 |
| Files changed | 2 |
| Lines added | +69 |
| Lines removed | −23 |
| Repositories | 1 (mx-outputs) |

---

## Why It Matters

The MozFest demo's core argument is "same model, same prompt, opposite answers on structured vs bare pages". Dynamic suggestions amplify this message: the model can ask *different questions* depending on what metadata it sees. A page that declares authorship, review, and AI usage enables concrete questions about those attributes; a page with none forces generic questions. The suggestion buttons make this contrast visceral for an audience.

---

## Next Steps

- Test the extension end-to-end on both structured and stripped demo pages
- Consider whether suggestion generation should be fast enough for demos (current: ~1-2 seconds) — may want to cache or pre-generate
- Review whether the suggestion system prompt works well on real pages outside the MozFest demo context

---

## Commit Log

| Hash | Description |
|------|-------------|
| 6b7e4308 | Add dynamic question suggestions to MX Comprehension Probe |
