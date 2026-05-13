---
title: "Co-Directors Report — Two mx-site blog posts (skills snapshots, LLMs and JavaScript)"
description: "Published two mx-site blog posts: skills are static snapshots, and why LLMs do not execute JavaScript. Includes a corrected Common Crawl section."
author: "Tom Cranstoun"
created: 2026-05-13
modified: 2026-05-13
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-13-morning-report.md
---

# Co-Directors Report — Two mx-site blog posts (skills snapshots, LLMs and JavaScript)

**Date:** 13 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Two mx-site blog posts shipped this segment. The first argues Claude Code skills are static snapshots, not subroutines, and need scheduled refresh. The second explains why LLMs do not execute JavaScript (training data via Common Crawl) while Google does (current-state search), and walks the screen-reader / ARIA parallel for ephemeral content. The second post also picked up a factual correction mid-session about how `robots.txt` actually interacts with CCBot; the corrected version is the one live now.

---

## What Was Done

### 1. Blog post: skills are static snapshots

`mx-outputs/mx-site/blog/skills-static-not-subroutines.html`. Canonical URL `https://mx.allabout.network/blog/skills-static-not-subroutines.html`. The argument: the trap with Claude Code skills is treating them as dynamic subroutines when in fact they freeze their authoritative source at the moment they are authored. Skills written in January can confidently tell you in May to do something the standard no longer asks for. Three implications (manual updates, obsolescence, documentation drift), four practices that age well (version references, embedded source content, scheduled audits, accepting static behaviour where stability is the feature).

### 2. Blog post: why LLMs do not execute JavaScript (but Google does)

`mx-outputs/mx-site/blog/why-llms-dont-execute-javascript.html`. Canonical URL `https://mx.allabout.network/blog/why-llms-dont-execute-javascript.html`. Long-form (~3,400 words, 17 min read). Establishes the architectural distinction between Common Crawl (training data, no JS execution) and Google (current-state search index, full JS rendering), then uses ARIA live regions as the working precedent for marking ephemeral content for non-visual consumers. Includes the production-ready `llms.txt` wrap-as-HTML recipe with a cross-link to the companion `llms-txt-guide.html` post, plus `mx:dynamic` meta-tag patterns and the case for not making AI think.

### 3. Correction caught before publish: Common Crawl section

The first draft of the JavaScript post asserted that "Common Crawl does not respect robots.txt the way Googlebot does" and that "your `Disallow: /` will not prevent your content from being scraped." Tom flagged this as factually wrong while the file was still on local disk, before the mx-outputs commit and before any push, so the public site never saw the wrong version. The corrected section states CCBot honours `robots.txt`, `Crawl-delay`, and sitemap references; verifies via reverse DNS under `crawl.commoncrawl.org`; observes ML opt-out signals; and complies with retrospective-removal requests. The MX caveat is preserved as: `robots.txt` is a voluntary signal, so well-behaved bots honour it and ill-behaved ones do not, so verify by IP, not user-agent string. The llms.txt discoverability point survives as a separate sub-section.

### 4. Source-draft update

`datalake/pipeline/drafts/ideas/why-llms-dont-execute-javascript.md` updated to the same corrected text, and its `llms.txt` recipe replaced with the wrap-as-HTML pattern plus a link to the published companion. Kept as a draft for future reference.

### 5. MX wordlist

Four sweep applications across the morning: `changelog` (skills post), then `AAPL`, `Googlebot`, `OG` (LLM post), then `CCBot`, `DNS`, `NYT`, `spoofer` (correction). Polish-pass spell check now clean across both posts.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (mx-outputs) | 3 published + 1 pending |
| Commits (hub) | 2 published + 1 pending |
| Repositories touched | 2 |
| New blog posts | 2 |
| Words shipped | ~4,150 |
| Wordlist additions | 8 |

---

## The Insight

The pre-publish catch matters more than the volume. A post about how LLMs interact with the web that gets the `robots.txt` / Common Crawl interaction wrong is exactly the kind of thing a credible-sounding AI assistant would write, and it would have damaged the credibility of every other claim in the post. The save was Tom holding the facts in his head and pushing back before the file left the working tree. The systemic lesson: when the polish pass, spell check, and HTML hygiene gates all return clean, those gates have only checked form, not truth. Factual review is still a human job, and it has to happen before the commit, not after.

---

## Next Steps

- Push hub changes and purge Cloudflare cache.
- Decide whether the corrected `robots.txt` framing should also propagate into the existing `llms-txt-guide.html` companion post (currently consistent, but worth a re-read).

---

## Commit Log

| Hash | Description |
|------|-------------|
| a8164c0 (mx-outputs) | Publish blog post: skills are static snapshots |
| f2f1b51 (mx-outputs) | Add 2026-05-13 morning directors report (v1.0) |
| 7174ac3 (mx-outputs) | Regenerate README index |
| 8aba40a (mx-outputs) | Publish blog post: why LLMs do not execute JavaScript (corrected text) |
| _pending_ (mx-outputs) | Directors report v1.1 (covers both posts and the pre-publish correction) |
| 1d13e8d9 (hub) | Publish skills-static-not-subroutines + wordlist + drop idea draft |
| a715b685 (hub) | CHANGELOG 2026-05-13: skills-static-not-subroutines |
| fcf00579 (hub) | Bump mx-outputs pointer (README regen) |
| _pending_ (hub) | Bump mx-outputs (LLM post); wordlist additions; draft update |
