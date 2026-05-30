---
title: "Co-Directors Report — /md-writer skill landed; tool gap filled in the same session it surfaced"
description: "A new markdown-grade sibling to /html-writer landed after the blog-writer skill was used out-of-lane on a markdown file. The driving Scott brief got the polish pass it asked for."
author: "Tom Cranstoun"
created: 2026-05-30
modified: 2026-05-30
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-30-evening-report.md
---

# Co-Directors Report — /md-writer Skill Landed; Tool Gap Filled in the Same Session It Surfaced

**Date:** 30 May 2026 - Evening
**Segment:** evening (since 5pm)

---

## Summary

Short evening segment, one durable output. The user asked to run the blog-writer (`/html-writer`) skill on a markdown file with the explicit instruction "keep it as md, do not turn it into a blog". That worked, but it was an out-of-lane use of the HTML-writer skill: the skill is calibrated to produce serving-grade HTML for mx.allabout.network, not to polish markdown that stays as markdown. The user then asked for a dedicated skill for the pattern. The new `/md-writer` skill landed at `.claude/skills/md-writer/skill.md`, parallel to `/html-writer` in structure, with the HTML-specific stages stripped out and the prose-quality core retained. The Scott opportunities brief that drove the request was polished in the same pass and serves as the worked example.

---

## What Was Done

### 1. /md-writer skill created and catalogued

`/md-writer` mirrors `/html-writer`'s structure: when-to-use, inputs, two workflows (markdown path or chat context), polish pass, safety, related skills. The polish pass keeps the prose-quality core (frontmatter integrity, voice and timelessness, APA 7 structural compliance when in scope, full humanizer enforcement, writing-style.md §6 forbidden constructs, voice patterns, mechanical sanitiser, spell-check, link sanity, britishness check). The HTML-specific stages drop out: no site-chrome contract, no JSON-LD, no AI-disclosure meta tags, no Schema.org, no sitemap or llms.txt updates, no HTML hygiene, no source-md deletion. Scope rules per content type (book manuscript, blog draft, audit report, stakeholder doc, gathering draft, cog, internal brief) so the right rule profile applies automatically. The skill is the orchestration layer over the existing humanizer skill and writing-style.md rulebook; both already exist, this skill is the write-or-polish entry point that knows how to apply them. Listed in `.claude/skills/INDEX.md` under Content skills, right after `/html-writer`.

### 2. Scott opportunities brief polished as the worked example

Ran the equivalent polish pass on `mx-crm/contacts/scott-mcgregor/opportunities-2026-05-28.md` (frontmatter stayed at `audience: [business]`, `confidential: true`, `recipient: "Co-directors"`). All H1, H2, and H3 headings converted to APA 7 Title Case. Counting-in-prose removed from the inventory intro, the strongest-three heading, the what-I-want lead-in, the sponsor-recognition section's two lists, the Private REGINALD platform bundled-components and engagement-models paragraphs, and the three-layer model's question count. One negation-pivot in the Postscript fixed ("Items in section 5 aren't just conversion hygiene. They're..." became a single declarative). Version bumped 3.0 to 3.1. Body content, tables, and source-tag conventions all preserved.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (pending hub) | 1 |
| Files changed (hub) | 3 (Scott md, INDEX.md, new md-writer skill.md) |
| Lines added | ~390 (most in the new skill file) |
| Lines removed | ~25 |
| New skills landed | 1 (/md-writer) |
| Skills modified | 0 (the INDEX row is a catalogue entry) |
| Brief documents polished as worked example | 1 (Scott opportunities) |

---

## Why It Matters

The hub's content-skills catalogue had a gap. `/humanizer` strips AI tells and enforces the writing-style rulebook (the rule engine). `/review-docs` reports against the same rulebook without rewriting (the reporting sibling). `/html-writer` produces serving-grade HTML for the blog (full quality bar plus HTML output stages). `/md-fix` and `/md-workflow` handle mechanical formatting and lifecycle. None of these were the write-or-polish-markdown-to-publish-grade entry point. When the user wanted that today, the closest fit was `/html-writer` with an "as if blog content, keep as md" workaround. That gap is now closed: `/md-writer mx-crm/contacts/scott-mcgregor/opportunities-2026-05-28.md` would route directly without the workaround.

The pattern is reusable. Every time we run blog-grade enforcement on a markdown file (audit-report draft polish, manuscript fragment quality pass, gathering-draft tightening, pitch substrate edit, internal brief readability sweep), `/md-writer` is the entry point. The skill's scope-rules section knows which rule profile to apply per content type, so the right calibration lands automatically.

---

## The Insight

The most-used tools in the workflow surface their gaps by being used out-of-lane. Today's was small (an html-writer call with a "keep it as md" rider) but the same pattern explains a larger one: tools that pretend to handle adjacent jobs accumulate workarounds in their prompts until the workaround becomes the tool's actual use. The fix is to extract the new lane while the workaround is still fresh, not to grow the original tool's scope. `/md-writer` is parallel to `/html-writer`, not an option flag inside it. Same rule applies the next time a skill gets called with a rider; the rider is the signal that a sibling skill is missing.

---

## Decisions Made

- `/md-writer` is a separate skill, not an `/html-writer --no-html` flag. Reason: keeping HTML-only stages (site-chrome contract, JSON-LD, AI-disclosure, sitemap updates, source-md deletion) out of the markdown lane is the structural job, not a runtime branch. A separate skill makes the lane explicit and the polish pass shareable across both via the humanizer skill and the writing-style rulebook.
- Scope rules per content type baked into the skill, not deferred to the user. Reason: a user invoking `/md-writer book-chapter.md` should get the book-shaped profile (third-person, expanded contractions, longer narrative rhythms tolerated); `/md-writer audit-report-source.md` should get the consultant-voice with no construction leak; `/md-writer gathering-draft.md` should get the vendor-neutral, no-Reginald rule. Deciding by path and content type at skill-entry time avoids the user having to remember which flags apply where.

---

## Open Questions

- None this segment. The Pattern 26 distinctive-word-overuse scanner unit and its associated artefacts (parallel agent work) stay in working tree, deferred from earlier today.

---

## Next Steps

- **Use /md-writer on the next markdown polish task** so the skill gets tested end-to-end through the proper entry point rather than through the today's workaround. Candidate first invocations: any of the manuscripts in `datalake/manuscripts/`, a gathering draft in `mx-shared-gathering/`, or a fresh pitch substrate.
- **Carry forward the afternoon report's outstanding items** unchanged: regulated-buyer-shaped audit on the local-LLM path, MXPrintWorks vs MX Printworks branding decision, Watching the Machines drafts promotion call, two editorial calls on existing blog drafts, and the audit-gotchas migration of LEARNINGS 4.38 (already landed in this morning's audit-gotchas commit).

---

## Commit Log

| Hash | Description |
|------|-------------|
| _pending_ (hub) | Add /md-writer skill + INDEX.md row + Scott opportunities polish (worked example) |

---

*Filed 2026-05-30 evening, version 1.0. The hub commit lands in Step 3 of this step-commit run; the table will be backfilled when the SHA exists.*
