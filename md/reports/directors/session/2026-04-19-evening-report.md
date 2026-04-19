---
title: "Co-Directors Report — Agent-protocols chapter + blog toolchain consolidation"
description: "New MX Protocols chapter on MCP/UCP/A2A/WebMCP, LinkedIn post for The Gathering, HTML-writer skill replacing fragmented blog tooling, full content restoration of an abbreviated blog post."
author: "Tom Cranstoun and Maxine"
created: 2026-04-19
modified: 2026-04-19
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, protocols, html-writer, blog]
---

# Co-Directors Report — Agent-protocols chapter + blog toolchain consolidation

**Date:** 19 April 2026 — Evening
**Segment:** evening (17:00 onwards)

---

## Summary

This session split into two coherent streams. The first produced a new chapter in MX: The Protocols on the four agent protocols currently in pilot (MCP, UCP, A2A, WebMCP) and a companion LinkedIn article for The Gathering aimed at recruiting contributors and sponsors. The second consolidated the repo's fragmented blog-publishing tooling into a single `html-writer` skill with a fixed output route, a new sitemap generator, and a content-restoration pass that recovered about 2,000 words lost from an abbreviated blog post. All work is committed across the hub and both affected submodules.

---

## What Was Done

### 1. Chapter 14 — Agent Protocols (MX: The Protocols)

A new ~5,100-word chapter covering MCP (Anthropic, tool layer), A2A (Google, inter-agent), UCP (Google, commerce — with brief ACP contrast), and WebMCP (Microsoft Edge, browser session). Each protocol is named, located geographically (all US-anchored in different orbits), and described by layer and status. The chapter lands on an early-web parallel (1995 browser wars), names the standards-community gap as the real problem, and points at [The Gathering](https://tg.community) and the Stream review process as the community-led way out. Explicitly framed as "first attempts, trialled in distinct regions."

The chapter's MCP and WebMCP sections were later expanded (user request) to cover specific failure modes — tool poisoning, authentication gaps, clickjacking, DOM prompt injection, browser fragmentation — bringing the chapter to ~5,100 words.

Existing chapters 14–20 renumbered to 15–21 to accommodate the insertion. All cross-references and frontmatter updated. Chapter 9 ("Platform Race") got a one-line forward reference pointing to the new Ch. 14.

### 2. LinkedIn article for The Gathering

A ~1,800-word LinkedIn native article titled *"The Agent Web Looks a Lot Like 1995."* Voice: first-person plural, from The Gathering. Audience: individual practitioners (contributors), with a distinct secondary ask for sponsors. The article deliberately takes a fresh angle versus Ch. 14 — no sentence-level lift — so the post reads as its own piece rather than a chapter extract. Published to `mx-outputs/mx-site/blog/the-agent-web-looks-like-1995.*`.

A cross-link to the earlier "A Standard That Knows What It Isn't" preview post was added in a "Further reading" section. That preview post was also refreshed to reference Chapter 21 (was 20) after the renumber.

### 3. Blog-tooling consolidation: `html-writer` skill

The HTML-writing surface was split across three skills that overlapped and disagreed — `create-content` (two competing versions, `skill.md` and `skill-v2-efficient.md`), and `content-workflow` (which also covers demos and docs). Every blog post this session needed five or six manual interventions to become serving-grade.

A new `.claude/skills/html-writer/` skill replaces the blog/page-HTML portion. One entry point, two input paths (markdown file or chat context), one output location (`mx-outputs/mx-site/blog/`), and a polish pass that gates on `mx-c-audit`. `create-content` retired via `git rm -rf`. `content-workflow` kept intact because it manages non-blog HTML too (demos, docs, websites).

### 4. Generator script: durable fixes

Four durable fixes landed in `scripts/generate-content-html.cjs`:

- **Twin consolidation.** `.cjs` and `.js` versions had drifted; `.js` deleted, all callers updated to `.cjs`.
- **Canonical URL from `mx.blogUrl`.** Previously hardcoded to `allabout.network/blogs/mx`; now respects the post's declared URL and falls back to the hardcoded default only when absent.
- **Filename from `mx.blogFilename`.** The generator was slugifying titles and ignoring the frontmatter's explicit filename. Precedence chain added: CLI arg → `content-filename` → `mx.blogFilename` → slugified title.
- **Output routing.** `published` state now writes directly to `mx-outputs/mx-site/blog/` instead of the legacy `mx-outputs/html/blogs/mx/`. The manual copy step is gone.

### 5. Provenance sidecars removed

All `.mx.json` sidecar generation deleted (option 3 after honest review: no consumer existed, `source` paths had gone stale after repo moves, git history already records authorship). Removed: `createMxSidecar`, `validateMxGenerate`, `calculateChecksum`, `mxProvenance` object, seven dead template placeholders, 11 orphan sidecar files across the hub, mx-crm, and mx-outputs.

### 6. Blog sitemap generator

New `scripts/update-blog-sitemap.cjs` scans `mx-outputs/mx-site/blog/*.html`, extracts each post's canonical URL, emits standards-compliant `sitemap.xml`. First run captured 21 entries. No blog sitemap generator existed before this.

### 7. Content restoration

`principles-changed-how-i-build.html` in `mx-site/blog/` had been replaced with an abbreviated rewrite (2,852 words, missing ~2,000 words of prose across all eight principles). The fuller version lived in the legacy `html/blogs/mx/` directory. Merged the fuller prose into the mx-site template; final version 5,165 words with all 10 content H2s intact. Without this step, retiring the legacy directory would have silently lost content.

### 8. Legacy directory retirement

`mx-outputs/html/blogs/mx/` deleted. All content preserved in `mx-outputs/mx-site/blog/`. Hosting-map docs and the html-writer safety note updated.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (hub) | 2 (session-scoped; 6 over the full evening) |
| Commits (mx-outputs) | 2 (session-scoped) |
| Files changed (hub, session-scoped) | ~30 |
| Blog post word restoration | +2,313 words (principles post) |
| Ch. 14 word count | ~5,100 |
| LinkedIn article word count | ~1,800 |
| Sidecar files removed | 11 |
| Script twin consolidation | 2 → 1 |
| Skill consolidation | 3 → 2 (html-writer replaces create-content; content-workflow retained for non-blog) |

---

## The Insight

Every blog post this session needed five or six manual interventions to become serving-grade: canonical URL patching, filename reconciliation, manual copy from the script's published dir to mx-site, regeneration after frontmatter tweaks, sidecar cleanup. None of those interventions were signal — they were symptoms of tooling that hadn't been durably fixed. Each one was trivially fixable at source. The durable fix took one session; the cumulative manual tax would have continued indefinitely.

The parallel to the chapter content is worth noting: the protocols landscape is at the same point, with practitioners making manual workarounds for every agent-layer failure because no vendor has fixed the underlying fragmentation. The standards-community gap the chapter names is the same gap the toolchain had internally.

---

## Next Steps

- Consider whether the `html-writer` skill deserves a better name (`publish-html`, `blog-publisher`, `mx-publish`). Flag remains open.
- The polish pass in `html-writer/skill.md` references `mx-c-audit` as the gate — verify the audit's checks align with what `html-writer` claims it produces.
- `mx-outputs/README.md` carries stale file listings for the retired `html/blogs/mx/` directory; will refresh on next auto-regen of that file.
- The LinkedIn post's byline is `"The Gathering"` — confirm the mx-site blog template renders that correctly (it currently renders "Tom Cranstoun" avatar image as the author image regardless of byline).

---

## Commit Log

| Hash | Description |
|------|-------------|
| 83ef6517 (hub) | Content generator: consolidate twins, fix canonical URL, drop sidecars |
| b012dbef (hub) | Blog tooling: point generator at mx-site/blog, add sitemap generator |
| 875dabb  (mx-outputs) | Retire html/blogs/mx/, restore full principles post |
| 56e0b19  (mx-outputs) | Blog: new LinkedIn post + preview-post refresh after book renumber |
| 38feb3e  (mx-crm) | Remove orphaned .mx.json provenance sidecars |
| 86d35e5a (hub) | Ch 12 + Ch 14 + protocols renumbering (earlier in day, separately committed) |
