---
title: "Co-Directors Report — Shared Blog CSS Architecture + DITA-vs-MX Positioning"
description: "Blog styling consolidated into one canonical stylesheet; new DITA-vs-MX comparison post published; html-writer skill gains a timelessness rule."
author: "Tom Cranstoun"
created: 2026-04-20
modified: 2026-04-20
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-20-afternoon-report.md
  purpose: "Blog styling consolidated into one canonical stylesheet; new DITA-vs-MX comparison post published; html-writer skill gains a timelessness rule."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Shared Blog CSS Architecture + DITA-vs-MX Positioning"]
---

# Co-Directors Report — Shared Blog CSS Architecture + DITA-vs-MX Positioning

**Date:** 20 April 2026 — Afternoon
**Segment:** afternoon (12:00–17:00)

---

## Summary

The afternoon's main deliverable is architectural: every blog post on mx.allabout.network now shares a single canonical stylesheet that respects the reader's light/dark/contrast/motion preferences, instead of each post shipping a byte-identical 570-line CSS copy of its own. Three sibling CSS files retired; the html-writer skill and the generator script updated so future posts stay in line. A new DITA-vs-MX comparison post published to the blog alongside the migration, and the skill gained a voice-and-timelessness rule to prevent meta-commentary creeping into future posts.

## What Was Done

### 1. Shared blog CSS (architectural)

Twenty older site-template posts had long linked a shared `mx-blog.css` from the site-level `css/` directory, while three newer html-writer-generated posts each shipped a per-slug copy of an identical template CSS as siblings. The divergence came from a Principle 9 (name consistency for related files) interpretation that made sense for bespoke artefacts but not for a site-wide stylesheet. This was resolved by rewriting `mx-outputs/mx-site/css/mx-blog.css` as the canonical shared stylesheet for every post: light-mode default, `prefers-color-scheme: dark` overrides with the MX gold accent, high-contrast and reduced-motion variants, print rules, responsive breakpoints, and self-contained so it does not depend on `mx-unified.css` for blog rendering. The three sibling copies were deleted. The html-writer skill template, the generator script, and the polish-pass link-sanity check were all updated. A Principle 9 carve-out note was added inline in the skill; no formal amendment to `principles.cog.md` yet — a follow-up if you want it recorded there.

### 2. DITA-vs-MX comparison post

Published `dita-vs-mx-a-comparison.html` — a structured side-by-side comparison aimed at DITA-using tech writers curious about the agent web. Covers what each framework is, a dimension-by-dimension table, where they overlap, where they diverge, what DITA confirms MX already has, the one net gap (single-source governance rule — accepted into the MX RFC pipeline), and when to use which. Tom's DITA-on-AEM experience grounds the piece without turning it into a confessional. Toolchain-neutral framing — AEM appears as one example among DITA-OT, Paligo, Heretto, Oxygen, IXIASOFT, easyDITA and others rather than as the subject. MaXinE / cogs / REGINALD references removed per editorial decision to keep the post accessible to readers outside the MX ecosystem. Speakable intro + takeaway marked for voice agents.

### 3. html-writer skill hardening

The skill now carries a **Voice and timelessness** polish-pass rule that mirrors the CLAUDE.md book-manuscript rule extended to blog content: no "a first version of this post", no "an earlier version", no drafting-history meta-commentary. Polish pass runs an automated grep before spell-check and fails the run if flagged. Added because an initial draft of the DITA post opened with exactly the pattern the rule now forbids; caught by review, codified so the next post cannot repeat it.

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (session) | 2 this session + 1 pending (main-repo) |
| Files changed (mx-outputs) | 7 |
| Lines added / removed (mx-outputs) | +642 / −1269 (net −627; de-duplication) |
| Sibling CSS files retired | 3 |
| Posts now sharing `mx-blog.css` | 22 of 22 blog HTML files |
| New blog post | 1 (dita-vs-mx-a-comparison.html, 935 body words) |
| Repositories touched (this session) | 2 (hub + mx-outputs) |

## Decisions Made

- **Light by default, dark on user preference.** The consolidation opportunity forced a theme choice; Tom chose the merged `prefers-color-scheme` approach over either pure-light or pure-dark, so reader OS preference wins.
- **AEM is an example, not the subject.** DITA post generalised mid-draft after Tom flagged that AEM should not stand in for the DITA category as a whole.
- **MX-ecosystem vocabulary stripped from the positioning post.** MaXinE, cogs and REGINALD were pulled out so the piece reads without MX ecosystem fluency. The Gathering, RFC pipeline and `mx:` field conventions stayed.

## Open Questions

- Should Principle 9 in `principles.cog.md` be formally amended to carve out site-wide assets from the same-base-name rule, or is the skill-level inline note sufficient? Left for the next Canon pass.

## Next Steps

- Visual smoke-test the blog in a browser before treating the CSS migration as finalised; structural checks passed but pixels are the final judge.
- Publish the DITA post externally when Tom is ready — canonical URL is live at `https://mx.allabout.network/blog/dita-vs-mx-a-comparison.html` but LinkedIn / Stream / The Gathering reviewer notifications are still to send.
- Decide whether the single-source governance RFC mentioned in the new post needs a linked RFC draft on tg.community for readers to follow.

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 32429ac | mx-outputs | Blog: add DITA-vs-MX post + migrate all posts to shared mx-blog.css |
| (pending) | hub | html-writer skill hardening + shared-CSS wiring in generator + pointer bump |
