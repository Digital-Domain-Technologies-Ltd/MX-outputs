---
title: "Co-Directors Report — Blog Publication + Process Documentation"
description: "Published comprehensive blog post on browser classification and declared signals. Added deterministic-patterns rule to CLAUDE.md for reproducible workflows."
author: "Tom Cranstoun"
created: 2026-06-01
modified: 2026-06-01
version: "1.0"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-01-evening-report.md
  purpose: "Published comprehensive blog post on browser classification and declared signals. Added deterministic-patterns rule to CLAUDE.md for reproducible workflows."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Blog Publication + Process Documentation"]

---

# Co-Directors Report — Blog Publication + Process Documentation

**Date:** 1 June 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

Published "Who answers when the machine decides?" — a 3503-word blog post that grounds MX's value proposition in concrete research (RESONEO's Chrome classification audit) and regulatory direction (EU AI Act transparency requirements). The post makes the case for declared, attested signals over hidden inference; positions MX as infrastructure for accountability; and demonstrates the Convergence Principle in action. Added a new process rule to CLAUDE.md reinforcing deterministic patterns and COG-based workflows over ad-hoc inference.

---

## What Was Done

### 1. Blog publication: "Who answers when the machine decides?"

**Scope:** Comprehensive post on browser classification, inference vs declaration, and the machine-experience case for MX.

**Content:**
- Analysis of RESONEO's May 2026 Chrome classification research (block lists, semantic memory, shopping classifier)
- Argument for declared signals over inference (reduce cost, energy, error rate; remove gatekeeping)
- Practical example: signed COG as accountability mechanism vs unsigned inference as unaccountable black box
- EU AI Act alignment: transparency, responsible parties, contestability
- Scope boundary: MX sits at publishing layer, not consumption layer; does not force adoption but enables the infrastructure when regulation demands it

**Deliverable:** `mx-outputs/mx-site/blog/who-answers-when-the-machine-decides.html`
- 3503 words, 18 min read time
- Generated via `node scripts/generate-content-html.cjs` (reproducible build)
- Sitemaps regenerated (65 blog entries, 116 total site entries)
- Embedded source YAML frontmatter (MX-SOURCE-FRONTMATTER standard)

**Positioning value:** Direct answer to "why should organizations care about MX?" when browsers and assistants are making undisclosed, uncontestable decisions about their sites. Demonstrates the Convergence Principle (accessibility tree = agent-readable structure; same tree serves multiple readers). Honest about current limitation: MX compliance does not yet feed Chrome's lists, but the infrastructure is ready when vendors choose to honour declarations.

### 2. CLAUDE.md: Deterministic patterns rule

**What:** Added `Deterministic patterns and COGs` section emphasizing reproducible scripts and COG-based patterns over ad-hoc inference and manual construction.

**Why:** Earlier in the session, manual HTML writing (inference-based) deviated from the specified workflow (scripts-based generation). The correction: always favour existing scripts, COGs, and reproducible systems. When a pattern repeats, it should live in a script, not in conversational inference. Keeps work auditable, portable, and aligned with stated specification.

**Impact:** Guides future sessions to use `/audit-site`, `/audit-report`, `scripts/generate-content-html.cjs`, etc., rather than attempting to replicate those behaviors conversationally. Reinforces that scripts ARE the specification; inferred output only claims to follow it.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (hub + submodules) | 3 |
| Blog post word count | 3503 |
| Blog post read time | 18 min |
| Blog post sections | 10 |
| Sitemap entries (blog) | 65 |
| Total site entries | 116 |
| Files modified | 4 |
| Lines added | 506 |
| Lines deleted | 163 |

---

## Next Steps

1. Monitor blog engagement (time-on-page, scroll depth, link clicks to Learn and Services)
2. Consider paired content: short explainer on "declared vs inferred signals" for social media
3. Continue populating the "watching-the-machines" series — this post is part of a larger narrative

---

## Decisions Made

**Slug preference:** The blog post took the slug `who-answers-when-the-machine-decides.html` (singular "the-machine"). Generated from the H1 title during reproducible build. Correct in `sitemap.xml` and blog index.

**Scope boundary:** Chose not to position MX as a solution to Chrome's lists (it isn't, yet). Instead positioned it as the infrastructure that makes declarations and attestation possible when vendors are ready to honour them. Honest framing, defensible with investors, sets up future value capture when regulatory pressure increases.

---

## Commit Log

```
f03d840b Update mx-outputs pointer: blog post publication
59878acc Add deterministic-patterns rule: favour COGs and scripts over inference
617dcf4b Publish blog post: Who answers when the machine decides?
  ├─ 3503 words, 18 min read
  ├─ Covers RESONEO research, EU AI Act, browser classification patterns
  └─ Grounds MX value prop in concrete regulation + research
```

---

*Report generated by step-commit Step 2. All changes committed and pushed.*
