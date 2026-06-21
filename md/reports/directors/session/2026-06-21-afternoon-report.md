---
title: "Co-Directors Report - Promote Pipeline URL Default Fixed"
description: "The promote pipeline now defaults to the correct mx.allabout.network/blog/ URL when a blog post has no servedAt field declared."
author: "Tom Cranstoun"
created: 2026-06-21
modified: 2026-06-21
version: "1.0"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-21-afternoon-report.md
  purpose: "The promote pipeline now defaults to the correct mx.allabout.network/blog/ URL when a blog post has no servedAt field declared."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Promote Pipeline URL Default Fixed"]

---

# Co-Directors Report - Promote Pipeline URL Default Fixed

**Date:** 21 June 2026 - Afternoon
**Segment:** Afternoon (since noon)

---

## Summary

A silent bug in the blog publishing pipeline was traced and fixed. Blog posts that do not declare an explicit `servedAt` URL were being promoted with the wrong canonical address - a retired `allabout.network/blogs/mx/` domain that no longer serves any content. Every such post would have had incorrect canonical, OpenGraph, and Schema.org URLs in its generated HTML. The fix establishes `mx.allabout.network/blog/<slug>.html` as the correct default, which is what the site actually serves. The template and the blog-post authoring guide were updated to document when `servedAt` needs to be declared and when the default suffices.

---

## What Was Done

The promote pipeline generates HTML for blog posts from markdown source files. One line in the generator used the old domain as a fallback URL when the source file did not declare `mx.servedAt`. That fallback had been correct when the blog lived on `allabout.network` but was never updated after the site moved to `mx.allabout.network`. The fix was a single-line change to the generator, a comment update to explain the rule, a note in the authoring guide, and a clarification in the blog post template. The blog post template now marks `servedAt` as optional for the common case and explains it is only required when the post is served at a non-default path such as a series subfolder.

---

## Why It Matters

Every blog post promoted without a `servedAt` field had the wrong canonical URL embedded in its HTML head, its OpenGraph metadata, and its Schema.org JSON-LD. Search engines and AI agents reading those pages would have associated the content with a URL that returns nothing. The fix corrects the generator so future promotions land cleanly, and any post that needs its HTML regenerated can be repromoted to pick up the correct URL.

---

## Next Steps

- Audit existing promoted HTML files for the old `allabout.network/blogs/mx/` URL and repromote any that carry it.

