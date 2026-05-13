---
title: "Co-Directors Report — Blog post: skills are static snapshots"
description: "Published one mx-site blog post arguing Claude Code skills capture their source at creation time and need scheduled refresh."
author: "Tom Cranstoun"
created: 2026-05-13
modified: 2026-05-13
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-13-morning-report.md
---

# Co-Directors Report — Blog post: skills are static snapshots

**Date:** 13 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Short focused segment. Published one mx-site blog post explaining that Claude Code skills are static snapshots captured at creation time, not subroutines that re-read their source on each invocation. Discovery surfaces (sitemap, blog index, llms-full corpus) refreshed. One new entry added to the MX spell-check wordlist.

---

## What Was Done

### 1. Blog post: skills are static snapshots

A new post lives at `mx-outputs/mx-site/blog/skills-static-not-subroutines.html`, canonical URL `https://mx.allabout.network/blog/skills-static-not-subroutines.html`. The argument is that the trap with Claude Code skills is treating them as dynamic subroutines when in fact they freeze their authoritative source at the moment they are authored. Skills written in January can confidently tell you in May to do something the standard no longer asks for. The post lays out three implications (manual updates, obsolescence, documentation drift) and four practices that age well (version references, embedded source content, scheduled audits, accepting static behaviour where stability is the feature).

### 2. Discovery surfaces

Blog index card added at the top of the listing grid. Blog sitemap, mx-site sitemap, and llms-full corpus regenerated. llms.txt is hand-curated featured posts only and was not touched.

### 3. MX wordlist

`changelog` added to the project wordlist via `npm run spell:sweep:apply` so the polish-pass spell check stops flagging it as a typo.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 (so far — hub commit pending Step 3) |
| Files changed | 5 (mx-outputs) + 2 (hub, pending) |
| Lines added | +621 (mx-outputs) |
| Lines removed | −0 (mx-outputs) |
| Repositories | 2 (mx-outputs, hub) |
| New blog posts | 1 |

---

## Next Steps

- Commit the hub changes (wordlist update, deleted idea draft, mx-outputs pointer bump).
- Deploy worker and purge Cloudflare cache after push, since web assets shipped.

---

## Commit Log

| Hash | Description |
|------|-------------|
| a8164c0 (mx-outputs) | Publish blog post: Claude Code skills are static snapshots |
| _pending_ (hub) | Bump mx-outputs; add `changelog` to wordlist; drop idea-draft source |
