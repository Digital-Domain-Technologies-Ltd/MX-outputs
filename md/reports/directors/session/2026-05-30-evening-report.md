---
title: "Co-Directors Report — /md-writer skill, cluster rewrite, series-and-cluster rules codified, compliance gate cleared to zero"
description: "Four pieces of evening work in sequence. /md-writer landed as the markdown-grade sibling of /html-writer. The watching-the-machines cluster got an end-to-end review and rewrite pass. The series-and-cluster authoring rules then landed as a new section in blog-post.cog.md with both writer skills routing to it. A four-fix compliance cleanup drove the corpus-wide compliance numbers to zero across all five categories."
author: "Tom Cranstoun"
created: 2026-05-30
modified: 2026-05-30
version: "1.3"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, md-writer, blog-post-cog, watching-the-machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-30-evening-report.md
  purpose: "Four pieces of evening work in sequence. /md-writer landed as the markdown-grade sibling of /html-writer. The watching-the-machines cluster got an end-to-end review and rewrite pass. The series-and-cluster authoring rules then landed as a new section in blog-post.cog.md with both writer skills routing to it. A four-fix compliance cleanup drove the corpus-wide compliance numbers to zero across all five categories."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - /md-writer skill, cluster rewrite, series-and-cluster rules codified, compliance gate cleared to zero"]
---

# Co-Directors Report — /md-writer Skill Landed; Watching-the-Machines Cluster Reviewed and Rewritten Against Its Own Pattern

**Date:** 30 May 2026 - Evening
**Segment:** evening (since 5pm)

---

## Summary

Two pieces of evening work, plus a substantial user-led rewrite of the Scott brief.

First, `/md-writer` landed as the markdown-grade sibling of `/html-writer` (covered in the earlier evening pass). The Scott opportunities brief that drove the request was polished in the same pass and serves as the worked example.

Second, the `watching-the-machines` cluster got an end-to-end review and rewrite pass. Six files audited (series index, how-it-works editorial standard, cluster index, three child posts). Findings: outward inline CTA missing on `how-it-works.html`; three child-post openers used italic-eyebrow first-mention shape that doesn't carry the visual weight a first-mention reference needs; chrome author bio "Founder of the Machine Experience (MX) community..." tripped the bio-parens detection across all six; banned vocabulary across the three child posts (`same shape`, `posture` x2, `surface`, `shape` x2, `rest on` x2). All findings addressed: chrome bio rewritten across all six files to a comma-appositive form; outward CTA added to `how-it-works.html`; three child-post openers rewritten to strong-bold form; banned vocab fixes applied per file. Cog-rule codification of the underlying pattern stays deferred for a separate pass; the cluster rewrites stand on the writing-style rulebook and humanizer scanners that already exist.

Third, the Scott opportunities brief got a directed rewrite from version 3.1 to 4.0. Repositioned from "Co-directors" recipient to "Scott McGregor" recipient, restructured around nine specific actions with concrete deliverables, the operating positions behind them, the valuation framing, and the inventory items closest to Scott's remit. Tom's three open action items (updated outreach materials, licensing-model + onboarding docs, MX-vs-C2PA blog post) moved out to REMINDERS.md as 🟠 Active items so the brief stays Scott's working surface, not a mixed-owner workspace. Brief then rendered to a tagged PDF for hand-over (mx-outputs/pdf/scott-mcgregor-opportunities-2026-05-28.pdf, 421K, ISO 14289-1 Level 2, MX Compatible badge embedded, AI provenance payload in XMP).

---

## What Was Done

### 1. /md-writer skill created and catalogued

`/md-writer` mirrors `/html-writer`'s structure: when-to-use, inputs, two workflows (markdown path or chat context), polish pass, safety, related skills. The polish pass keeps the prose-quality core (frontmatter integrity, voice and timelessness, APA 7 structural compliance when in scope, full humanizer enforcement, writing-style.cog.md §6 forbidden constructs, voice patterns, mechanical sanitiser, spell-check, link sanity, britishness check). The HTML-specific stages drop out: no site-chrome contract, no JSON-LD, no AI-disclosure meta tags, no Schema.org, no sitemap or llms.txt updates, no HTML hygiene, no source-md deletion. Scope rules per content type (book manuscript, blog draft, audit report, stakeholder doc, gathering draft, cog, internal brief) so the right rule profile applies automatically. The skill is the orchestration layer over the existing humanizer skill and writing-style.cog.md rulebook; both already exist, this skill is the write-or-polish entry point that knows how to apply them. Listed in `.claude/skills/INDEX.md` under Content skills, right after `/html-writer`.

### 2. Scott opportunities brief polished as the worked example

Ran the equivalent polish pass on `mx-crm/contacts/scott-mcgregor/opportunities-2026-05-28.md` (frontmatter stayed at `audience: [business]`, `confidential: true`, `recipient: "Co-directors"`). All H1, H2, and H3 headings converted to APA 7 Title Case. Counting-in-prose removed from the inventory intro, the strongest-three heading, the what-I-want lead-in, the sponsor-recognition section's two lists, the Private REGINALD platform bundled-components and engagement-models paragraphs, and the three-layer model's question count. One negation-pivot in the Postscript fixed ("Items in section 5 aren't just conversion hygiene. They're..." became a single declarative). Version bumped 3.0 to 3.1. Body content, tables, and source-tag conventions all preserved.

### 3. Watching-the-machines cluster reviewed and rewritten end-to-end

Six-file review of the cluster (series index, how-it-works editorial standard, cluster index, three child posts). Findings: every file passed engaging-tone and editor-avatar opener; how-it-works (the editorial standard page) was missing the outward inline CTA; three child posts used an italic-eyebrow first-mention shape that doesn't carry the visual weight a first-mention reference needs; chrome author bio "Founder of the Machine Experience (MX) community..." tripped the bio-parens detection across all six; banned vocabulary across the three child posts (`same shape`, `posture` x2, `surface`, `shape` x2, `rest on` x2). Rewrites: outward inline CTA section added to `how-it-works.html`; three child-post openers rewritten to a strong-bold form; chrome bio rewritten across all six files to a comma-appositive form ("Founder of the Machine Experience community, author of the MX book series, and consultant on MX strategy through Digital Domain Technologies Ltd, trading as CogNovaMX"); banned vocab fixes applied per file. Final scanner pass clean across all six files except two context-exempt residuals (legitimate metaphor + regex false positive on `features the`).

### 4. Domain-terms lemma validator landed

New field-shape validator at `scripts/check-domain-terms-lemmas.mjs`. Flags any `x-mx-domainTerms` array that contains both a singular and its regular plural (e.g. `vendor` plus `vendors`, `opportunity` plus `opportunities`). The rule it enforces: the field declares lemmas only. Runs standalone (`node scripts/check-domain-terms-lemmas.mjs --format=table <path>`). The broader scanner integration (inflection expansion at scan time so a lemma-only field still matches plurals in prose) and a `mx:heal --domain-terms` sub-action for repo-wide cleanup were drafted alongside this validator but stay deferred for a separate pass — the validator itself is the durable output that landed this session.

### 5. Series and cluster authoring rules landed (after the rule matured)

After the cluster rewrite stabilised, a fresh codification pass added the rules to `scripts/cogs/blog-post.cog.md` as a top-level "Series and cluster authoring rules" section between the APA-prose paragraph and the CREATE lifecycle. Engaging tone (named actors, three-balanced-entry frame, editor-avatar opener), depth-based two-surface CTA (depth 0 = standalone skip, depth 1 = index-equivalent both surfaces, depth 2+ = child post series-nav + aside outward), and canonical strong-bold-only first-mention inline explanation. Italic-eyebrow form explicitly rejected as decorative scaffolding. Both writer skills now route to it: `html-writer/skill.md` paragraph in "Content sub-folders"; `mx-c-blog-post/skill.md` bullet under "How It Works". Calibration anchor named: watching-the-machines/.

Required missing-field cleanup followed: `mx.purpose`, `mx.stability`, `mx.x-mx-contextProvides` added to the `blog-post.cog.md` frontmatter (the cog had been passing `cog:validate` but was failing the broader `mx-validator` Gate 10 once it became the subject of edits). The same trio plus `mx.runbook` was added to `example-with-includes.cog.md` later in the segment when its contentType flip exposed the same gap.

### 6. Compliance gate cleared to zero across all five categories

A focused four-fix sweep drove the corpus from 8 files-with-violations to 0:

- `mx-crm/contacts/soren-schaffstein/message-soren-schaffstein.md`: `mx.reviewedAt` and `mx.reviewNote` renamed to `mx.x-mx-reviewedAt` and `mx.x-mx-reviewNote` per the vendor-extension policy. Two lines.
- `mx-canon/mx-the-gathering/reference-implementations/example-with-includes.cog.md`: contentType flipped from `reference-implementation` to the canonical `action-doc` (with `actionType: sop` as the discriminator). The first flip went to `action.sop` which is the wrong field shape (the validator wants `contentType: action-doc` literal plus `actionType: sop` separately). Corrected. Then the four required mx fields added.
- `~/.mx/graph.json` cache regenerated (9 days stale) via `npm run mx:graph`.
- Certificate-of-genuineness sweep across two submodules per the handoff doc: five `allaboutv2` files reassigned (four `.cog.md` from `x-mx-cogType: certificate-of-genuineness` to `info`, one landing-page template's nested `cog.type` to `cogs`), CHANGELOG entry added; `node scripts/reginald-static-gen.js` regenerated all 97 mx-outputs content cogs from the now-fixed sources, plus 48 reginald publisher records and namespace indexes downstream; submodule pointer bumps in the hub. The handoff doc is now obsolete.

Final compliance: `unknown: 0, deprecated: 0, naming: 0, invalid-enum: 0, frontmatter-parse-error: 0` across 2627 files. `cog:validate`: 0 errors, 0 warnings, 7 info-level description-length notes.

### 7. Additional Schema.org enrichment shipped on supporting pages

Sibling commit bundle on mx-outputs: JSON-LD enrichment across `mx-site/audit/index.html`, `mx-site/learn/mx-for-pdfs.html`, `mx-site/reginald/index.html`, `mx-site/services/certified-operator.html`, `mx-site/services/eaa/index.html`, `mx-site/tools/pdf-inspector.html` (Schema.org Offer, image, datePublished, author, publisher properties added to existing JSON-LD); `mx-site/llms-full.txt` regenerated to reflect the per-post metadata expansion. Allaboutv2 worker also got the matching enrichment on the free-book download form. Audit refresh for `mx.allabout.network` 2026-05-30 captured (16,700+ line additions across audit log, report, finding pages, voice/verification JSON, PDF, provenance hash index plus six new provenance prompt + input files).

### 6. Two deep-research workflows on local-LLM model choice — both concluded "stay on gpt-oss:20b"

Late-evening pair of deep-research workflows triggered by the question "is there a better local model for mx-audit". Each workflow ran 5 search angles, fetched 24 sources, extracted 119-120 falsifiable claims, ran 3-vote adversarial verification on the top 25, synthesised the survivors with citations. 106 agent calls each, ~885-910 seconds wall time. Verdicts converged: stay on `gpt-oss:20b` with the current num_ctx=32768 / serial-concurrency config.

The Ollama-alternatives research surfaced the structural argument: Qwen3 / Qwen3.5 family (architecturally a better fit at ~18GB and native 262k context) is currently blocked by an unfixed Ollama tool-calling regression — qwen3.go parser returns HTTP 500 on truncated JSON ([ollama#14570](https://github.com/ollama/ollama/issues/14570)), parser/renderer mismatch routes Qwen 3.5 through the Hermes JSON parser when the model was trained on XML ([ollama#14493](https://github.com/ollama/ollama/issues/14493)), fix PR #15224 still OPEN. Llama 3.3 70B has the strongest instruction-following (IFEval 0.921) but Q4_K_M + 32k KV cache leaves zero headroom on 64GB unified memory. Critical structural finding: the num_ctx=4096 default trap that bit mx-audit is an Ollama issue, not a model issue — silent truncation at slog.Debug level, no API field indicating it happened ([ollama#14259](https://github.com/ollama/ollama/issues/14259) plus 400+ related cluster). The override must stay regardless of which model is loaded.

The Apple MLX research surfaced the parallel verdict from a completely different angle: mlx-lm's multi-channel / harmony parser is absent from upstream and lives only in unmerged community forks (veganmosfet, arthurcolle, unixwzrd, cubist38). The four mx-audit tool-calling scripts would land in a strictly worse failure mode — empty tool_calls arrays, runaway `<|channel|>commentary` garbage, plain-text `[Tool call: ...]` leaks, unclosed XML cascading across turns. Same model weights work cleanly on llama.cpp ([mlx-lm#613](https://github.com/ml-explore/mlx-lm/issues/613), [#875](https://github.com/ml-explore/mlx-lm/issues/875), [#1011](https://github.com/ml-explore/mlx-lm/issues/1011), [#1061](https://github.com/ml-explore/mlx-lm/issues/1061)). API shape is not the blocker: mlx-lm exposes OpenAI `/v1/chat/completions`, and vllm-mlx + Rapid-MLX wrappers expose native Anthropic `/v1/messages` — a swap would only require flipping `ANTHROPIC_BASE_URL` in `llm-client.js`. Correctness, not API, is what kills it.

Two follow-up reminders added to REMINDERS.md (revisit Ollama-model choice in Q1 2026 once PR #15224 lands; revisit Apple MLX once harmony adapter merges upstream and stabilises) — both got wiped by a parallel session's REMINDERS.md edits later and need re-adding in Step 4 of this step-commit. Worth noting as a recurrence of the documented "parallel sessions can roll back working-tree work mid-session" pattern (LEARNINGS 2026-05-26).

### 7. /aside passthrough slash command landed (user-global)

User-global slash command at `~/.claude/commands/aside.md` (not in any repo). Two modes from a single template: with arguments, it passes the text through to Claude as a regular prompt — useful escape hatch for `/aside <text>` to add side comments mid-stream without triggering a parse error for unrecognised slash commands; with no arguments, it instructs Claude to scan the recent session for errored tool calls that look safely retryable (transient failures, configuration since fixed, cold-start races) and offer to retry one. The mode switch is a meta-instruction in the command body that Claude resolves based on whether the user message above the marker is empty. Originally named `/btw` then renamed to `/aside` to avoid any future built-in collision risk.

### 8. Scott opportunities brief tightened, Tom's items moved out, PDF rendered

End-to-end Scott pass after the v3.0→3.1 polish earlier in the evening. The brief moved from a "Co-directors" surface that mixed Tom's outstanding work with Scott's asks, to "Scott McGregor"'s working brief with nine sharpened actions (Andris one-pager, Andris meeting booking, Andris+Jonathan technical review, written PDF audit test report, compact badge SVG candidate, LinkedIn networking with Matt and Boye & Company tagging, investor one-pager, follow-up on Jonathan routing, marked-up core-vs-satellite inventory). Each action now names a deliverable and an outcome. Operating positions (concept-to-product, licensing-and-franchising, core-vs-satellite, valuation tiers, MX-vs-C2PA, terminology and local-inference) compressed; founding-sponsor recognition and three-layer model kept but tightened; inventory cut to the five items closest to Scott's remit (MX Printworks productisation, MX Compatible badge legal protection, CMS-vendor sponsor outreach, three S-effort funnel fixes Tom owns, the biggest-unclaimed Maxine subject-side counter-signing opportunity). Tom's three open items (updated outreach materials, licensing-model + onboarding docs, MX-vs-C2PA blog post) moved out to REMINDERS.md as 🟠 Active items cross-referenced back to the brief. Frontmatter recipient flipped from "Co-directors" to "Scott McGregor"; `mx.generate` block added so future renders don't need ad-hoc invocation; version bumped 3.1 to 4.0. Rendered to tagged PDF (421K, info-doc doctype, ISO 14289-1 Level 2, MX Compatible badge embedded with per-PDF QR encoding the explainer fragment, AI provenance payload embedded in XMP for the regulator-walkable evidence chain, deterministic sidecar adjacent).

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment (hub + submodules) | 18 (2 allaboutv2, 7 mx-outputs, 9 hub) |
| Files changed (hub, total) | ~15 (lemma validator + Scott rewrite + routing-registry + REMINDERS + CHANGELOG + LEARNINGS + cog series rules + 3 cog field additions + example-with-includes + Soren + indexes + submodule pointer bumps) |
| Files changed (mx-outputs) | ~82 (6 cluster HTML + 7 mx-site pages + 19 audit artefacts + 97 content cogs regen + 48 reginald records + Scott PDF artefacts + directors report v1.3) |
| Files changed (allaboutv2) | 6 (cloudflare-worker.js + 4 cogs + 1 template + CHANGELOG entry) |
| Lines added (across submodules) | ~18,000 |
| Lines removed | ~500 |
| New skills landed | 1 (/md-writer, earlier evening) |
| New scripts landed | 1 (check-domain-terms-lemmas.mjs validator) |
| New cog sections landed | 1 (Series and cluster authoring rules in blog-post.cog.md) |
| Documents polished as worked examples | 2 (Scott opportunities + 6 cluster files) |
| Compliance numbers driven to | 0 errors, 0 warnings, 0 across all 5 violation categories (2627 files scanned) |

---

## Why It Matters

The hub's content-skills catalogue had a gap. `/humanizer` strips AI tells and enforces the writing-style rulebook (the rule engine). `/review-docs` reports against the same rulebook without rewriting (the reporting sibling). `/html-writer` produces serving-grade HTML for the blog (full quality bar plus HTML output stages). `/md-fix` and `/md-workflow` handle mechanical formatting and lifecycle. None of these were the write-or-polish-markdown-to-publish-grade entry point. When the user wanted that today, the closest fit was `/html-writer` with an "as if blog content, keep as md" workaround. That gap is now closed: `/md-writer mx-crm/contacts/scott-mcgregor/opportunities-2026-05-28.md` would route directly without the workaround.

The pattern is reusable. Every time we run blog-grade enforcement on a markdown file (audit-report draft polish, manuscript fragment quality pass, gathering-draft tightening, pitch substrate edit, internal brief readability sweep), `/md-writer` is the entry point. The skill's scope-rules section knows which rule profile to apply per content type, so the right calibration lands automatically.

---

## The Insight

The most-used tools in the workflow surface their gaps by being used out-of-lane. The `/html-writer` "keep it as md" rider produced `/md-writer` earlier this evening. The same rider-pattern surfaced again on the watching-the-machines cluster: a six-file pattern (engaging magazine voice, two-surface CTA, inline first-mention explanations) that no skill formalised. A first draft of the rule was sketched and applied as the cluster rewrite. The user later asked the rule to be codified ("do it"), and on the second pass it landed cleanly in `scripts/cogs/blog-post.cog.md` with both writer skills routing at it. The pattern that emerged: build the working artefact first (the cluster rewrite), iterate the rule against it (three revisions: initial sketch, depth-based CTA differentiation, canonical strong-bold-only first-mention), then commit the rule with the artefact as its calibration anchor. Pattern-driven rule extraction works when the pattern exists in working form and the rule is allowed to mature on it before being shipped as canon.

The compliance gate cleanup at the end of the segment reinforced the same shape. Eight files with violations across five categories went to zero in one focused pass: a tiny field rename (Soren message, two lines), a contentType correction (example-with-includes, four lines), a cache regen (mx-graph.json), and a multi-file sweep (certificate-of-genuineness across allaboutv2 + mx-outputs, walking a handoff doc end to end). The lesson: residuals concentrate in known files; the handoff docs that name them in advance are worth their weight in green test runs.

---

## Decisions Made

- `/md-writer` is a separate skill, not an `/html-writer --no-html` flag. Reason: keeping HTML-only stages (site-chrome contract, JSON-LD, AI-disclosure, sitemap updates, source-md deletion) out of the markdown lane is the structural job, not a runtime branch. A separate skill makes the lane explicit and the polish pass shareable across both via the humanizer skill and the writing-style rulebook.
- Scope rules per content type baked into the skill, not deferred to the user. Reason: a user invoking `/md-writer book-chapter.md` should get the book-shaped profile (third-person, expanded contractions, longer narrative rhythms tolerated); `/md-writer audit-report-source.md` should get the consultant-voice with no construction leak; `/md-writer gathering-draft.md` should get the vendor-neutral, no-Reginald rule. Deciding by path and content type at skill-entry time avoids the user having to remember which flags apply where.
- Apply the watching-the-machines cluster fixes (chrome bio, outward CTA on `how-it-works`, strong-bold openers in three child posts, banned vocab) first; codify the underlying rule second. Reason: the rule went through three revisions mid-session (initial sketch, depth-based CTA differentiation, canonical strong-bold-only first-mention) and matured against the live cluster review. The user then asked for codification ("do it"), and the rule landed cleanly in `scripts/cogs/blog-post.cog.md` with both writer skills routing at it. Result: rule and exemplar shipped together, neither one ahead of the other.
- Land the `check-domain-terms-lemmas.mjs` validator without the paired scanner integration. Reason: the validator is standalone and useful on its own; the scanner-side inflection expansion (which would let the field declare lemmas only while still matching plurals at scan time) and the `mx:heal --domain-terms` sub-action were drafted but not committed this session. The validator catches the redundancy; the scanner-side and heal-side enrichment land separately.
- Carry the certificate-of-genuineness submodule sweep end to end in one segment. Reason: the handoff doc at `mx-canon/mx-maxine-lives/management/todo/cert-genuineness-submodule-sweep.md` already had the full script written. Running it took less than five minutes (perl rewrites in allaboutv2, `node scripts/reginald-static-gen.js` for mx-outputs regen, submodule-first commit workflow). The handoff doc is now obsolete and should be deleted in the next session.

---

## Open Questions

- The scanner-side inflection expansion in `scan-word-frequency.mjs` (so `x-mx-domainTerms` can declare lemmas only) and the `mx:heal --domain-terms` sub-action both stay drafted in working memory. The validator script is the durable output from this session; the scanner + heal pair is the next pass.
- The scanner widening across `scan-ai-vocab` / `scan-copula` / `scan-prose-patterns` (shape/substrate/surface/posture broadening, abstract-object locative regex, the `**X.** Y.` sentence-boundary fix per LEARNINGS 4.41) was drafted during the cluster review but the scanner edits were not committed. The rules these scanners would enforce now exist in `blog-post.cog.md`; the scanners themselves still need updating to catch new violations.
- The Pattern 26 distinctive-word-overuse scanner unit and its associated artefacts (parallel agent work) stay in working tree, deferred from earlier today.
- The handoff doc at `mx-canon/mx-maxine-lives/management/todo/cert-genuineness-submodule-sweep.md` is now obsolete. The work it describes is done. Delete in next session per the REMINDERS rule (do not move to a Completed section).

---

## Next Steps

- **Use /md-writer on the next markdown polish task** so the skill gets tested end-to-end through the proper entry point rather than through the today's workaround. Candidate first invocations: any of the manuscripts in `datalake/manuscripts/`, a gathering draft in `mx-shared-gathering/`, or a fresh pitch substrate.
- **Carry forward the afternoon report's outstanding items** unchanged: regulated-buyer-shaped audit on the local-LLM path, MXPrintWorks vs MX Printworks branding decision, Watching the Machines drafts promotion call, two editorial calls on existing blog drafts, and the audit-gotchas migration of LEARNINGS 4.38 (already landed in this morning's audit-gotchas commit).

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 8da02517 | allaboutv2 | Enrich free-book download form JSON-LD with author, publisher, image |
| b8f6e2df | allaboutv2 | Retire certificate-of-genuineness cogType in MX cogs (fold to info) |
| e7902ee | mx-outputs | Apply blog-post.cog.md series rules across watching-the-machines cluster |
| 575467d | mx-outputs | Enrich JSON-LD across mx-site service pages with Offer + author + publisher |
| 0ed0fc7 | mx-outputs | Audit refresh: mx.allabout.network 2026-05-30 (re-run with widened humanizer scanners) |
| 72673d3 | mx-outputs | Add Scott McGregor opportunities brief PDF + provenance pair |
| 46a7245 | mx-outputs | Regenerate cognovamx content cogs (certificate-of-genuineness retired) |
| 42f87be | mx-outputs | Fix asset paths in watching-the-machines cluster HTML (depth correction) |
| ca9e43f | mx-outputs | Regenerate reginald publisher records + namespace indexes |
| b2487e0c | hub | Add domain-terms lemma validator; refresh Scott brief; bump submodules |
| 22bd77fc | hub | REMINDERS: refresh Protocols countdown; pick up Scott action carryovers |
| 867ca348 + b3d4988c | hub | CHANGELOG 2.86 (honest accounting of what landed vs deferred mid-pass) |
| cd99d048 | hub | LEARNINGS 4.41: prose scanners must allow closing emphasis after sentence terminator |
| 4d80af75 | hub | Codify series and cluster authoring rules in blog-post.cog.md |
| ff5882d8 | hub | Regenerate indexes (definitions-index + routing-registry + mx-reginald) |
| 0a9cfad5 | hub | Add mx.purpose, mx.stability, mx.x-mx-contextProvides to blog-post.cog.md |
| 0c99781b | hub | Compliance gate cleanup: 4 fixes in one pass |
| 7000d6d0 | hub | Fix example-with-includes contentType: action-doc + actionType: sop |
| 910cb4cc | hub | Add mx.purpose, mx.stability, mx.x-mx-contextProvides, mx.runbook to example-with-includes |
| _pending_ | hub | mx-outputs pointer bump (asset paths + reginald regen + report v1.3) plus this report update |

---

_Filed 2026-05-30 evening, version 1.3. Submodule SHAs backfilled from Step 1; hub commit lands in Step 3 of this step-commit run. v1.2 added the late-evening Scott tighten-and-render pass. v1.3 captures the two model-research workflows (Ollama-alternatives + Apple MLX, both verdict: stay on gpt-oss:20b with citations to four mlx-lm and four ollama upstream issues) and the `/aside` user-global passthrough slash command._
