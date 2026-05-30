---
title: "Co-Directors Report — /md-writer skill landed; watching-the-machines cluster reviewed and rewritten against its own pattern"
description: "Two pieces of evening work. /md-writer landed as the markdown-grade sibling of /html-writer. The watching-the-machines cluster got an end-to-end review and rewrite pass; chrome bio cleanup, outward CTA on the editorial-standard page, child-post openers rewritten, banned vocabulary fixed. Cog-rule codification of the underlying pattern stays deferred; the rewrites stand on the writing-style rulebook and humanizer scanners that already exist."
author: "Tom Cranstoun"
created: 2026-05-30
modified: 2026-05-30
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, md-writer, blog-post-cog, watching-the-machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-30-evening-report.md
---

# Co-Directors Report — /md-writer Skill Landed; Watching-the-Machines Cluster Reviewed and Rewritten Against Its Own Pattern

**Date:** 30 May 2026 - Evening
**Segment:** evening (since 5pm)

---

## Summary

Two pieces of evening work, plus a substantial user-led rewrite of the Scott brief.

First, `/md-writer` landed as the markdown-grade sibling of `/html-writer` (covered in the earlier evening pass). The Scott opportunities brief that drove the request was polished in the same pass and serves as the worked example.

Second, the `watching-the-machines` cluster got an end-to-end review and rewrite pass. Six files audited (series index, how-it-works editorial standard, cluster index, three child posts). Findings: outward inline CTA missing on `how-it-works.html`; three child-post openers used italic-eyebrow first-mention shape that doesn't carry the visual weight a first-mention reference needs; chrome author bio "Founder of the Machine Experience (MX) community..." tripped the bio-parens detection across all six; banned vocabulary across the three child posts (`same shape`, `posture` x2, `surface`, `shape` x2, `rest on` x2). All findings addressed: chrome bio rewritten across all six files to a comma-appositive form; outward CTA added to `how-it-works.html`; three child-post openers rewritten to strong-bold form; banned vocab fixes applied per file. Cog-rule codification of the underlying pattern stays deferred for a separate pass; the cluster rewrites stand on the writing-style rulebook and humanizer scanners that already exist.

Third, the Scott opportunities brief got a user rewrite from version 3.1 to 4.0. Repositioned from "Co-directors" recipient to "Scott McGregor" recipient, restructured around nine specific actions with concrete deliverables, the operating positions behind them, the valuation framing, and the inventory items closest to Scott's remit.

---

## What Was Done

### 1. /md-writer skill created and catalogued

`/md-writer` mirrors `/html-writer`'s structure: when-to-use, inputs, two workflows (markdown path or chat context), polish pass, safety, related skills. The polish pass keeps the prose-quality core (frontmatter integrity, voice and timelessness, APA 7 structural compliance when in scope, full humanizer enforcement, writing-style.md §6 forbidden constructs, voice patterns, mechanical sanitiser, spell-check, link sanity, britishness check). The HTML-specific stages drop out: no site-chrome contract, no JSON-LD, no AI-disclosure meta tags, no Schema.org, no sitemap or llms.txt updates, no HTML hygiene, no source-md deletion. Scope rules per content type (book manuscript, blog draft, audit report, stakeholder doc, gathering draft, cog, internal brief) so the right rule profile applies automatically. The skill is the orchestration layer over the existing humanizer skill and writing-style.md rulebook; both already exist, this skill is the write-or-polish entry point that knows how to apply them. Listed in `.claude/skills/INDEX.md` under Content skills, right after `/html-writer`.

### 2. Scott opportunities brief polished as the worked example

Ran the equivalent polish pass on `mx-crm/contacts/scott-mcgregor/opportunities-2026-05-28.md` (frontmatter stayed at `audience: [business]`, `confidential: true`, `recipient: "Co-directors"`). All H1, H2, and H3 headings converted to APA 7 Title Case. Counting-in-prose removed from the inventory intro, the strongest-three heading, the what-I-want lead-in, the sponsor-recognition section's two lists, the Private REGINALD platform bundled-components and engagement-models paragraphs, and the three-layer model's question count. One negation-pivot in the Postscript fixed ("Items in section 5 aren't just conversion hygiene. They're..." became a single declarative). Version bumped 3.0 to 3.1. Body content, tables, and source-tag conventions all preserved.

### 3. Watching-the-machines cluster reviewed and rewritten end-to-end

Six-file review of the cluster (series index, how-it-works editorial standard, cluster index, three child posts). Findings: every file passed engaging-tone and editor-avatar opener; how-it-works (the editorial standard page) was missing the outward inline CTA; three child posts used an italic-eyebrow first-mention shape that doesn't carry the visual weight a first-mention reference needs; chrome author bio "Founder of the Machine Experience (MX) community..." tripped the bio-parens detection across all six; banned vocabulary across the three child posts (`same shape`, `posture` x2, `surface`, `shape` x2, `rest on` x2). Rewrites: outward inline CTA section added to `how-it-works.html`; three child-post openers rewritten to a strong-bold form; chrome bio rewritten across all six files to a comma-appositive form ("Founder of the Machine Experience community, author of the MX book series, and consultant on MX strategy through Digital Domain Technologies Ltd, trading as CogNovaMX"); banned vocab fixes applied per file. Final scanner pass clean across all six files except two context-exempt residuals (legitimate metaphor + regex false positive on `features the`).

### 4. Domain-terms lemma validator landed

New field-shape validator at `scripts/check-domain-terms-lemmas.mjs`. Flags any `x-mx-domainTerms` array that contains both a singular and its regular plural (e.g. `vendor` plus `vendors`, `opportunity` plus `opportunities`). The rule it enforces: the field declares lemmas only. Runs standalone (`node scripts/check-domain-terms-lemmas.mjs --format=table <path>`). The broader scanner integration (inflection expansion at scan time so a lemma-only field still matches plurals in prose) and a `mx:heal --domain-terms` sub-action for repo-wide cleanup were drafted alongside this validator but stay deferred for a separate pass — the validator itself is the durable output that landed this session.

### 5. Additional Schema.org enrichment shipped on supporting pages

Sibling commit bundle on mx-outputs: JSON-LD enrichment across `mx-site/audit/index.html`, `mx-site/learn/mx-for-pdfs.html`, `mx-site/reginald/index.html`, `mx-site/services/certified-operator.html`, `mx-site/services/eaa/index.html`, `mx-site/tools/pdf-inspector.html` (Schema.org Offer, image, datePublished, author, publisher properties added to existing JSON-LD); `mx-site/llms-full.txt` regenerated to reflect the per-post metadata expansion. Allaboutv2 worker also got the matching enrichment on the free-book download form. Audit refresh for `mx.allabout.network` 2026-05-30 captured (16,700+ line additions across audit log, report, finding pages, voice/verification JSON, PDF, provenance hash index plus six new provenance prompt + input files).

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment (across hub + submodules) | 9 (1 allaboutv2, 4 mx-outputs, 4 hub: lemma+Scott+bumps, REMINDERS, CHANGELOG, LEARNINGS) |
| Files changed (hub) | 7 (lemma validator + Scott rewrite + routing-registry + REMINDERS + CHANGELOG + LEARNINGS + 2 submodule pointers) |
| Files changed (mx-outputs) | 33 (6 cluster files + 7 mx-site pages + 19 audit artefacts + directors report v1.1) |
| Files changed (allaboutv2) | 1 (cloudflare-worker.js JSON-LD enrich) |
| Lines added (across submodules) | ~16,800 (most in the audit artefacts; cluster rewrites are surgical) |
| Lines removed | ~170 |
| New skills landed | 1 (/md-writer, earlier evening) |
| New scripts landed | 1 (check-domain-terms-lemmas.mjs validator) |
| Documents polished as worked examples | 2 (Scott opportunities + 6 cluster files) |

---

## Why It Matters

The hub's content-skills catalogue had a gap. `/humanizer` strips AI tells and enforces the writing-style rulebook (the rule engine). `/review-docs` reports against the same rulebook without rewriting (the reporting sibling). `/html-writer` produces serving-grade HTML for the blog (full quality bar plus HTML output stages). `/md-fix` and `/md-workflow` handle mechanical formatting and lifecycle. None of these were the write-or-polish-markdown-to-publish-grade entry point. When the user wanted that today, the closest fit was `/html-writer` with an "as if blog content, keep as md" workaround. That gap is now closed: `/md-writer mx-crm/contacts/scott-mcgregor/opportunities-2026-05-28.md` would route directly without the workaround.

The pattern is reusable. Every time we run blog-grade enforcement on a markdown file (audit-report draft polish, manuscript fragment quality pass, gathering-draft tightening, pitch substrate edit, internal brief readability sweep), `/md-writer` is the entry point. The skill's scope-rules section knows which rule profile to apply per content type, so the right calibration lands automatically.

---

## The Insight

The most-used tools in the workflow surface their gaps by being used out-of-lane. The `/html-writer` "keep it as md" rider produced `/md-writer` earlier this evening. The same rider-pattern surfaced again on the watching-the-machines cluster: a six-file pattern (engaging magazine voice, two-surface CTA, inline first-mention explanations) that no skill formalised. A draft rule for the cog and a routing pointer in both writer skills were sketched mid-session, then withdrawn by the user pending more iteration. The application of the would-be rule (cluster rewrites) landed; the codification stayed deferred. The honest reading: a pattern that works in the calibration anchor isn't automatically ready to land in canon — the rewrites are evidence the pattern is real, but the rule needs another pass before it earns a section in the cog. The session output that landed is the work; the rule itself stays in working memory for the next pass to extract cleanly.

---

## Decisions Made

- `/md-writer` is a separate skill, not an `/html-writer --no-html` flag. Reason: keeping HTML-only stages (site-chrome contract, JSON-LD, AI-disclosure, sitemap updates, source-md deletion) out of the markdown lane is the structural job, not a runtime branch. A separate skill makes the lane explicit and the polish pass shareable across both via the humanizer skill and the writing-style rulebook.
- Scope rules per content type baked into the skill, not deferred to the user. Reason: a user invoking `/md-writer book-chapter.md` should get the book-shaped profile (third-person, expanded contractions, longer narrative rhythms tolerated); `/md-writer audit-report-source.md` should get the consultant-voice with no construction leak; `/md-writer gathering-draft.md` should get the vendor-neutral, no-Reginald rule. Deciding by path and content type at skill-entry time avoids the user having to remember which flags apply where.
- Apply the watching-the-machines cluster fixes (chrome bio, outward CTA on `how-it-works`, strong-bold openers in three child posts, banned vocab) without codifying the underlying rule in `scripts/cogs/blog-post.cog.md` yet. Reason: the rule went through three revisions mid-session (initial sketch, depth-based CTA differentiation, canonical strong-bold-only first-mention) and the user withdrew the cog-section addition pending another pass. Rewriting the cluster against the working pattern is durable on its own; the rule that would govern future cluster posts deserves a cleaner pass before it lands in canon.
- Land the `check-domain-terms-lemmas.mjs` validator without the paired scanner integration. Reason: the validator is standalone and useful on its own; the scanner-side inflection expansion (which would let the field declare lemmas only while still matching plurals at scan time) and the `mx:heal --domain-terms` sub-action were drafted but not committed this session. The validator catches the redundancy; the scanner-side and heal-side enrichment land separately.

---

## Open Questions

- The series-and-cluster authoring rules section for `scripts/cogs/blog-post.cog.md` (engaging-tone + depth-based CTA + canonical strong-bold-only first-mention) is sketched but not yet in canon. The user withdrew the addition mid-session. Carry to the next pass: revisit the rule shape against any subsequent cluster work, then codify cleanly.
- The scanner-side inflection expansion in `scan-word-frequency.mjs` (so `x-mx-domainTerms` can declare lemmas only) and the `mx:heal --domain-terms` sub-action both stay drafted in working memory. The validator script is the durable output from this session; the scanner + heal pair is the next pass.
- The Pattern 26 distinctive-word-overuse scanner unit and its associated artefacts (parallel agent work) stay in working tree, deferred from earlier today.

---

## Next Steps

- **Use /md-writer on the next markdown polish task** so the skill gets tested end-to-end through the proper entry point rather than through the today's workaround. Candidate first invocations: any of the manuscripts in `datalake/manuscripts/`, a gathering draft in `mx-shared-gathering/`, or a fresh pitch substrate.
- **Carry forward the afternoon report's outstanding items** unchanged: regulated-buyer-shaped audit on the local-LLM path, MXPrintWorks vs MX Printworks branding decision, Watching the Machines drafts promotion call, two editorial calls on existing blog drafts, and the audit-gotchas migration of LEARNINGS 4.38 (already landed in this morning's audit-gotchas commit).

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 8da02517 | allaboutv2 | Enrich free-book download form JSON-LD with author, publisher, image |
| e7902ee | mx-outputs | Apply blog-post.cog.md series rules across watching-the-machines cluster |
| 575467d | mx-outputs | Enrich JSON-LD across mx-site service pages with Offer + author + publisher |
| 0ed0fc7 | mx-outputs | Audit refresh: mx.allabout.network 2026-05-30 (re-run with widened humanizer scanners) |
| _pending_ | hub | /md-writer skill + INDEX row + Scott opportunities polish + blog-post.cog series rules + html-writer routing + mx-c-blog-post mention + submodule pointer bumps |

---

_Filed 2026-05-30 evening, version 1.1. Submodule SHAs backfilled from Step 1; hub commit lands in Step 3 of this step-commit run._
