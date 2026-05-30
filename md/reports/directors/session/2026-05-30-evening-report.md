---
title: "Co-Directors Report — /md-writer skill landed, then series-cluster authoring rules codified from the watching-the-machines pattern"
description: "Two tool gaps closed in one evening. /md-writer landed as the markdown-grade sibling of /html-writer. The watching-the-machines cluster was reviewed against new series-and-cluster authoring rules added to blog-post.cog.md, with depth-based CTA and canonical first-mention shape derived directly from the pattern it codifies."
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

# Co-Directors Report — /md-writer Skill Landed, Then Series-Cluster Authoring Rules Codified from the Watching-the-Machines Pattern

**Date:** 30 May 2026 - Evening
**Segment:** evening (since 5pm)

---

## Summary

Two evening tool gaps surfaced and got closed.

First, `/md-writer` landed as the markdown-grade sibling of `/html-writer` (covered in the earlier evening pass). The Scott opportunities brief that drove the request was polished in the same pass and serves as the worked example.

Then a second gap surfaced: the `watching-the-machines` cluster had a pattern (engaging magazine voice, two-surface CTA, inline first-mention explanations) that no skill formalised. The pattern was reverse-engineered into a new "Series and cluster authoring rules" section in `scripts/cogs/blog-post.cog.md`, with the html-writer and mx-c-blog-post skills routed at it. A live review of the cluster against the new rules surfaced misses (italic-eyebrow first-mention shape, missing outward CTA on child-equivalent pages, banned vocabulary `shape`/`posture`/`surface`/`rest on`/`same shape` across the three child posts, chrome bio tripping the bio-parens regex). All six cluster files were rewritten. Cog rule was tightened mid-review based on user interview: depth-based CTA differentiation (index-equivalents carry outward CTA; child posts carry series-nav), canonical strong-bold-only first-mention shape (italic-eyebrow form explicitly rejected), chrome bio rewritten to comma-appositive form across all six files. Cluster now passes its own bar.

---

## What Was Done

### 1. /md-writer skill created and catalogued

`/md-writer` mirrors `/html-writer`'s structure: when-to-use, inputs, two workflows (markdown path or chat context), polish pass, safety, related skills. The polish pass keeps the prose-quality core (frontmatter integrity, voice and timelessness, APA 7 structural compliance when in scope, full humanizer enforcement, writing-style.md §6 forbidden constructs, voice patterns, mechanical sanitiser, spell-check, link sanity, britishness check). The HTML-specific stages drop out: no site-chrome contract, no JSON-LD, no AI-disclosure meta tags, no Schema.org, no sitemap or llms.txt updates, no HTML hygiene, no source-md deletion. Scope rules per content type (book manuscript, blog draft, audit report, stakeholder doc, gathering draft, cog, internal brief) so the right rule profile applies automatically. The skill is the orchestration layer over the existing humanizer skill and writing-style.md rulebook; both already exist, this skill is the write-or-polish entry point that knows how to apply them. Listed in `.claude/skills/INDEX.md` under Content skills, right after `/html-writer`.

### 2. Scott opportunities brief polished as the worked example

Ran the equivalent polish pass on `mx-crm/contacts/scott-mcgregor/opportunities-2026-05-28.md` (frontmatter stayed at `audience: [business]`, `confidential: true`, `recipient: "Co-directors"`). All H1, H2, and H3 headings converted to APA 7 Title Case. Counting-in-prose removed from the inventory intro, the strongest-three heading, the what-I-want lead-in, the sponsor-recognition section's two lists, the Private REGINALD platform bundled-components and engagement-models paragraphs, and the three-layer model's question count. One negation-pivot in the Postscript fixed ("Items in section 5 aren't just conversion hygiene. They're..." became a single declarative). Version bumped 3.0 to 3.1. Body content, tables, and source-tag conventions all preserved.

### 3. Series and cluster authoring rules added to blog-post.cog.md

New `## Series and cluster authoring rules` section in `scripts/cogs/blog-post.cog.md`, sitting between "Two formats, one voice" and the lifecycle stages. The section is the single source of truth for three rules series and cluster pages follow on top of the existing polish pass: engaging magazine-column tone (named actors, stated positions, three-balanced-entry frame, editor-avatar opener), depth-based two-surface CTA conclusion (index-equivalents carry inline outward CTA + post-conclusion aside; child posts carry series-navigation + post-conclusion aside with outward link in the aside; standalone posts skip both), and canonical strong-bold-only first-mention inline explanation (cross-page sibling refs + specialist MX terms, per-page tracking, italic-eyebrow form explicitly rejected). Calibrated against `mx-outputs/mx-site/blog/drafts/watching-the-machines/`. Both `/html-writer` and `/mx-c-blog-post` skills now route to the section: html-writer adds a paragraph in its "Content sub-folders" block, mx-c-blog-post adds a bullet under "How It Works".

### 4. Watching-the-machines cluster reviewed and rewritten against the new rules

Six-file review of the cluster (series index, how-it-works editorial standard, cluster index, three child posts). Findings: every file passed engaging-tone and editor-avatar opener; how-it-works (depth-1 index-equivalent) was missing the outward inline CTA; three child posts used italic-eyebrow first-mention form instead of canonical strong-bold; chrome author bio "Founder of the Machine Experience (MX) community..." tripped the bio-parens regex across all six; banned vocabulary across the three child posts (`same shape`, `posture` x2, `surface`, `shape` x2, `rest on` x2). Rewrites: outward inline CTA section added to how-it-works.html; three child-post openers rewritten to strong-bold canonical form; chrome bio rewritten across all six files to comma-appositive form ("Founder of the Machine Experience community, author of the MX book series, and consultant on MX strategy through Digital Domain Technologies Ltd, trading as CogNovaMX"); banned vocab fixes applied per file. Final scanner pass clean across all six files except two context-exempt residuals (legitimate metaphor + regex false positive on `features the`). The cluster is back to being the calibration anchor for the cog rule — and the cog rule now actually matches what the calibration anchor does.

### 5. Additional Schema.org enrichment shipped on supporting pages

Sibling commit bundle on mx-outputs: JSON-LD enrichment across `mx-site/audit/index.html`, `mx-site/learn/mx-for-pdfs.html`, `mx-site/reginald/index.html`, `mx-site/services/certified-operator.html`, `mx-site/services/eaa/index.html`, `mx-site/tools/pdf-inspector.html` (Schema.org Offer, image, datePublished, author, publisher properties added to existing JSON-LD); `mx-site/llms-full.txt` regenerated to reflect the per-post metadata expansion. Allaboutv2 worker also got the matching enrichment on the free-book download form. Audit refresh for `mx.allabout.network` 2026-05-30 captured (16,700+ line additions across audit log, report, finding pages, voice/verification JSON, PDF, provenance hash index plus six new provenance prompt + input files).

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment (across hub + submodules) | 5 (1 allaboutv2, 3 mx-outputs, 1 pending hub) |
| Files changed (hub, pending commit) | ~10 (cog + 2 skills + new md-writer skill + Scott md + supporting) |
| Files changed (mx-outputs) | 32 (6 cluster files + 7 mx-site pages + 19 audit artefacts) |
| Files changed (allaboutv2) | 1 (cloudflare-worker.js JSON-LD enrich) |
| Lines added (across submodules) | ~16,800 (most in the audit artefacts; cluster rewrites are surgical) |
| Lines removed | ~170 |
| New skills landed | 1 (/md-writer) |
| Skills modified | 2 (html-writer + mx-c-blog-post for series routing) |
| Cogs modified | 1 (blog-post.cog.md — new top-level section) |
| Documents polished as worked examples | 2 (Scott opportunities + 6 cluster files) |

---

## Why It Matters

The hub's content-skills catalogue had a gap. `/humanizer` strips AI tells and enforces the writing-style rulebook (the rule engine). `/review-docs` reports against the same rulebook without rewriting (the reporting sibling). `/html-writer` produces serving-grade HTML for the blog (full quality bar plus HTML output stages). `/md-fix` and `/md-workflow` handle mechanical formatting and lifecycle. None of these were the write-or-polish-markdown-to-publish-grade entry point. When the user wanted that today, the closest fit was `/html-writer` with an "as if blog content, keep as md" workaround. That gap is now closed: `/md-writer mx-crm/contacts/scott-mcgregor/opportunities-2026-05-28.md` would route directly without the workaround.

The pattern is reusable. Every time we run blog-grade enforcement on a markdown file (audit-report draft polish, manuscript fragment quality pass, gathering-draft tightening, pitch substrate edit, internal brief readability sweep), `/md-writer` is the entry point. The skill's scope-rules section knows which rule profile to apply per content type, so the right calibration lands automatically.

---

## The Insight

The most-used tools in the workflow surface their gaps by being used out-of-lane. Today produced two examples in the same segment. First the `/html-writer` call with a "keep it as md" rider; `/md-writer` is the parallel skill that closes that lane. Then the watching-the-machines cluster: a six-file pattern that no skill formalised, manifest as the calibration anchor everyone could see but the rules couldn't enforce. Both were closed by extracting the new lane (a sibling skill in the first case, a new section in the existing cog in the second) rather than growing the original tool. The rider is the signal; the calibration anchor that has no codified rule is the same signal. When the next pattern surfaces, the move is to read the pattern, write the rule, then audit the pattern against its own rule. The cog rule tightened mid-review (depth-based CTA, canonical first-mention shape) precisely because the live review against the pattern surfaced edges the initial rule hadn't seen. Pattern-driven rule extraction beats rule-driven pattern construction in every case where the pattern already exists in working form.

---

## Decisions Made

- `/md-writer` is a separate skill, not an `/html-writer --no-html` flag. Reason: keeping HTML-only stages (site-chrome contract, JSON-LD, AI-disclosure, sitemap updates, source-md deletion) out of the markdown lane is the structural job, not a runtime branch. A separate skill makes the lane explicit and the polish pass shareable across both via the humanizer skill and the writing-style rulebook.
- Scope rules per content type baked into the skill, not deferred to the user. Reason: a user invoking `/md-writer book-chapter.md` should get the book-shaped profile (third-person, expanded contractions, longer narrative rhythms tolerated); `/md-writer audit-report-source.md` should get the consultant-voice with no construction leak; `/md-writer gathering-draft.md` should get the vendor-neutral, no-Reginald rule. Deciding by path and content type at skill-entry time avoids the user having to remember which flags apply where.
- Series and cluster authoring rules live in the cog (`scripts/cogs/blog-post.cog.md`), not in writing-style.md. Reason: the rules are HTML/blog-carrier-specific and tied to the depth-based CTA shape only blog and cluster posts use. The writing-style rulebook stays the prose-rules home; the cog is the carrier-specific home. Both writer skills route to the same cog section, so the rule has one source.
- CTA structure differs by depth, not by template. Reason: an index-equivalent page (series index, cluster index, editorial-standard page) is the lander a reader arrives at from outside and needs an outward action surface; a child post sits inside the cluster's argument and the action is "read the next sibling". Codifying this as a depth-based gate (depth 0 = standalone, depth 1 = index-equivalent, depth 2+ = child post) makes the rule mechanical without losing the editorial intent.
- First-mention inline explanation uses canonical strong-bold form only; italic-eyebrow is rejected. Reason: italic-eyebrow scaffolding reads decoratively, doesn't carry the visual weight a first-mention reference needs, and creates two acceptable forms where one will do. The cluster review surfaced both forms in use; the rule resolved to one.

---

## Open Questions

- None this segment. The Pattern 26 distinctive-word-overuse scanner unit and its associated artefacts (parallel agent work) stay in working tree, deferred from earlier today.

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
