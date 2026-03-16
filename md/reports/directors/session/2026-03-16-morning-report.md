---
title: "Co-Directors Report — Handbook PDF Rebuild"
created: "2026-03-16"
segment: "morning"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidentiality: internal
---

# Co-Directors Report — Handbook PDF Rebuild

**Date:** 16 March 2026 — Morning
**Segment:** morning (00:00–11:59)

---

## Summary

Quick session to regenerate the MX: The Handbook PDF via `npm run pdf:mx-generate`. The build completed cleanly with no errors, producing an updated PDF at `mx-outputs/pdf/books/handbook/mx-handbook.pdf`.

---

## What Was Done

### 1. Handbook PDF Regeneration

Rebuilt the Handbook manuscript using the pandoc pipeline (`npm run pdf:mx-generate`). Build completed successfully — XeLaTeX, Lua filters (blockquote-styles, unicode-fallback, keep-together), table of contents, A4 format.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 0 (pre-commit) |
| Files changed | 1 (mx-handbook.pdf) |
| Lines added | +2 |
| Lines removed | −2 |
| Repositories | 1 (mx-outputs) |

---

## Next Steps

- Commit and push the updated Handbook PDF
- Continue with Handbook publication prep (target: 2 Apr)

---

## Commit Log

| Hash | Description |
|------|-------------|
| (pending) | Handbook PDF rebuild |
