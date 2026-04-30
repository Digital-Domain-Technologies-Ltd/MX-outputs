---
title: "Co-Directors Report — GEO positioning blog ahead of WP Engine DE{CODE}"
description: "Single new blog post positioning MX as the structural specification underneath GEO, ahead of the WP Engine DE{CODE} 2026 EMEA event where GEO is featured."
author: "Tom Cranstoun"
created: 2026-04-30
modified: 2026-04-30
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
---

# Co-Directors Report — GEO positioning blog ahead of WP Engine DE{CODE}

**Date:** 30 April 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

A short evening segment producing one outbound asset: a new blog post on `mx.allabout.network` titled "GEO is a tactic. MX is the specification." The post lands ahead of WP Engine DE{CODE} 2026 EMEA, where Generative Engine Optimization will be a featured topic. It positions MX as the structural specification underneath surface-level GEO tactics, giving the agency conversation a clean handle to hold both layers in mind.

---

## What Was Done

### 1. New blog post published

A 1,340-word post drafted from a brief Tom supplied verbatim, then converted to serving-grade HTML through the `html-writer` skill. The post follows the canonical blog template, links the shared `mx-unified.css` + `mx-blog.css`, carries full Schema.org + OG + Twitter metadata, and went through the polish pass with em-dash ban, humanizer scan, and timelessness check all clean. The em-dashes in the source markdown were rewritten to commas, colons, or semicolons per the standing HTML em-dash ban.

### 2. Discovery surfaces refreshed

`blog/sitemap.xml` regenerated (26 entries), the post added to the proposition grid in `blog/index.html` at the top of the list, and `llms-full.txt` automatically picked up the new entry. The sync-blog-discovery script flagged the post as a candidate for the curated `## Featured articles` block in `llms.txt` but did not auto-feature; left as a follow-up if the post performs.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 (mx-outputs) |
| Files changed | 5 |
| Lines added | +411 |
| Lines removed | -23 |
| Repositories | 1 (mx-outputs) |
| Blog posts published | 1 |
| Word count of post | 1,340 |

---

## Why It Matters

WP Engine DE{CODE} 2026 EMEA is putting GEO on the main stage. The risk is that the WordPress-world conversation settles around GEO as the answer rather than as a tactic, and MX gets read as "another optimisation framework" rather than the specification it is. The blog post puts the right framing on record before the event, in a form that is citable, timestamped, and machine-readable, so that anyone arriving at the topic from a GEO angle can find the structural argument adjacent to the tactical one.

---

## Decisions Made

- Publish the post directly (not as a draft) and let it enter the indexed corpus immediately. Reasoning: the event window is short and the post needs to be discoverable before DE{CODE} traffic searches start landing.

---

## Next Steps

- Decide whether to add the GEO post to the curated `## Featured articles` block in `mx-outputs/mx-site/llms.txt` after a few days of soak, based on traffic and citation pickup.
- Consider a companion piece for the WP Engine / WordPress audience specifically, given DE{CODE} is the trigger event.

---

## Commit Log

| Hash | Repository | Description |
|------|------------|-------------|
| `47d2e62` | mx-outputs | Blog: GEO is a tactic, MX is the specification |
| *(pending)* | MX-hub | Bump mx-outputs + evening directors report |
