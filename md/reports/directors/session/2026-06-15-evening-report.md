---
title: "Co-Directors Report - Blog Content Quality: Tag Chips Removed and New Post Published"
description: "Humanized and published a new blog draft; removed misfiring visible tag chips from 98 blog posts; fixed the generator so no future post inherits the problem."
author: "Tom Cranstoun"
created: 2026-06-15
modified: 2026-06-15
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-15-evening-report.md
  purpose: "New blog post written and humanized; article-tag chip rendering removed from all 98 affected blog posts and fixed at the generator level."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Blog Content Quality: Tag Chips Removed and New Post Published"]
---

# Co-Directors Report - Blog Content Quality: Tag Chips Removed and New Post Published

**Date:** 15 June 2026 - Evening
**Segment:** Evening (since 5pm)

---

## Summary

The evening session produced one new blog post and fixed a content-quality defect affecting every post on the site. The post "Without Cogs, No Machine Moves" argues the case for COGs to a content ops and CMS audience. A row of clickable tag chips was rendering visibly at the top of every blog post; it was removed from 98 files and suppressed in the generator so nothing inherits it. Both changes are live in the mx-outputs submodule.

---

## What Was Done

### 1. New Blog Post: Without Cogs, No Machine Moves

A draft titled "Without Cogs, No Machine Moves" was humanized and published to the drafts tree. The post targets CMS decision-makers and content strategists, arguing that content ops and content design have built the right governance foundations but optimise for human readers. COGs are the natural extension that makes that work travel with the document when it leaves the CMS environment. The post runs to 876 words and is ready for final review before promotion to the published blog.

The humanizer pass removed 12 em-dashes, a negation-pivot sentence pair, two same-sentence word repeats, a three-word triplet, two possession-copula dodges, and tightened the word "shape" (AI vocabulary) to "structure" throughout. A provocative blame-chain sentence was added to the Governance section at Tom's direction: when the machine cannot read the page, the data owner blames the vendor, the vendor blames the agency, and nobody owns the failure because nobody wrote machines into the contract.

The cog registry was also corrected: an earlier serve command used an ad-hoc Python server rather than `mx exec mx-serve`. The correct invocation was noted and a memory entry saved so the error does not repeat.

### 2. Article-Tag Chip Defect Fixed

The blog post generator was rendering the post's `mx.tags` frontmatter as a visible row of clickable chips at the top of every blog post. Tags are metadata; they should not appear as a design element in the reader's view. The generator function was updated to return an empty string, and all 98 affected HTML files (published and draft) were cleaned in a single pass. The sitemap was also regenerated.

---

## The Insight

The tag chip defect had been present across the entire blog without being caught. It was only visible because a post was served locally and inspected. This is the kind of defect that does not surface in gate runs or linting - it requires actually looking at the rendered page. The local serve workflow (`mx exec mx-serve`) exists for exactly this, and the session made productive use of it.

---

## Next Steps

- Promote "Without Cogs, No Machine Moves" from drafts to published after final read-through
- Review the other two new blog drafts that appeared this session (`48-days-article-50-reginald.md`, `document-os-vs-content-os.md`) and schedule them for the same humanize-and-publish pipeline
