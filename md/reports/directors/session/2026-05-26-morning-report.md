---
title: "Co-Directors Report — UBERCOG and validator alignment, blog frontmatter retrofit, padlock blog post + manuscript propagation, possible.md three-audience overview"
description: "Four threads. First, Gate 10 was closed: UBERCOG.cog.md gained the three required mx-validator fields and the validator itself was aligned with the May 2026 canon vendor-namespace decision. Second, the public blog gained machine-readable structure end-to-end: a 13-tag taxonomy with a multi-select AND filter on the blog index, visible tag chips on every post and card, and retrofitted YAML frontmatter on 49 older blog posts and 17 lander pages. Third, a new blog post (the-padlock-and-the-page) shipped to mx.allabout.network and its ideas propagated into the Protocols Ch20 manuscript. Fourth, possible.md landed at hub root: a 7800-word three-audience strategy presentation (investor, partner, sponsor) that lifts the proven hooks verbatim from the canonical commercial docs and stitches them into one read; the humanizer pass and back-propagation of the forbidden word 'valuable' across the commercial spine followed."
author: "Tom Cranstoun"
created: 2026-05-26
modified: 2026-05-26
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-26-morning-report.md
---

# Co-Directors Report — UBERCOG required-fields fix, mx-validator path realignment, and blog frontmatter retrofit

**Date:** 26 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Two parallel threads landed this morning. First thread: two commits closed a tooling-and-canon drift that surfaced at the end of yesterday's afternoon push. UBERCOG.cog.md picked up the three required fields the pre-push mx-validator (Gate 10) had been flagging on every push, and the validator itself was realigned with the May 2026 canon vendor-namespace decision so that the agreement holds for every future cog. Gate 10 is now clean for the canonical path.

Second thread: the public blog gained machine-readable structure end-to-end. A 13-tag taxonomy was designed, a multi-select AND filter shipped on the blog index, every Featured and Blog-listing card grew visible tag chips, every blog post grew a clickable tag chip row beneath the byline, and 66 pages (49 older posts plus all 17 lander/index pages) gained retrofitted YAML frontmatter inside an HTML comment in `<head>`. With no markdown source for these older pages, the HTML is now declared the canonical source for the YAML via a runbook line on every block. The Cloudflare cache fronting mx.allabout.network was purged twice.

Third thread: a new 1900-word blog post (the-padlock-and-the-page) shipped to mx.allabout.network. Argues that the TLS padlock has been the web's most-misread icon for twenty years and that the discovery and trust problems are two faces of the same gap, closed by reader-side verification against a registry that indexes and attests but does not arbitrate. The post's TLS-chain-analogy idea propagated into Protocols Ch20's existing "Padlock Attests the Pipe, Not the Page" sub-section as a closing paragraph, completing the canon coverage of the framing.

Fourth thread: `possible.md` landed at hub root. Single-source 7800-word strategy presentation across three audiences (investor, partner, sponsor), structured as a universal preamble plus three audience sections plus a bridge plus a navigation map. Lifts the proven hooks verbatim from the canonical commercial docs (business-plan.md, partner-strategy.md, sponsor-pitch.cog.md, funding-routes.md, the two messaging-ideas files) so a reader holds the whole strategy in one read. The strict house separation holds inside the doc: REGINALD named eight times in the investor section, zero times in the sponsor section, partner section names it as the reference registry. A humanizer pass on the new file cleared a superlative echo, the forbidden word "valuable", and the leading-The H3 heading pattern. The "valuable" fix back-propagated to seven source docs across the commercial spine so the next lift doesn't reintroduce the word.

---

## What Was Done

### 1. UBERCOG required-field fix

[`UBERCOG.cog.md`](../../../../../UBERCOG.cog.md) gained three fields that the mx-validator declares required for every cog: `mx.purpose` (a one-sentence statement of what the file does), `mx.stability` (set to `stable`; the cog has been the repo briefing for several months), and `x-mx-contextProvides` (an explicit array of what an agent gains by reading the cog: repository map, canon layout, routing rules, essential commands, boot chain). The pre-write field-compliance hook rejected the first attempt (the path under `mx.ai` was flagged as deprecated); the canon's preferred extension-namespace path was used instead. Two of three Gate 10 errors immediately cleared.

### 2. mx-validator alignment with canon vendor namespace

[`scripts/mx-validator.cjs`](../../../../../scripts/mx-validator.cjs) was reading `mx.ai.contextProvides` for both its required field and its recommended `contextRequired` field. That path no canon dictionary now ratifies. The May 2026 vendor split documented in [`mx-canon/ssot/cognovamx-fields.yaml`](../../../../../mx-canon/ssot/cognovamx-fields.yaml) (deprecations `contextProvides → x-mx-contextProvides` and `mx:contextProvides → x-mx-contextProvides`) moved the field to the CogNovaMX vendor-extension namespace, sitting directly under `mx:`. The validator's REQUIRED_FIELDS, RECOMMENDED_FIELDS, self-emitted report-frontmatter example, and remediation snippet were all updated to point at `mx.x-mx-contextProvides` and `mx.x-mx-contextRequired`. A header comment in the validator records the rationale so the next reader does not unwind the alignment.

### 3. Verification

`node scripts/mx-validator.cjs UBERCOG.cog.md` now returns 1 valid, 0 invalid, 0 errors, 2 non-blocking warnings (recommended `refersTo` and `mx.x-mx-contextRequired`). The push of the validator commit triggered the pre-push Gate 10 on no markdown files (the diff only touched `scripts/mx-validator.cjs`, a `.cjs` not a `.md`), so the hook's `--changed-only` mode produced no validator output and the push completed without re-running the gate. Future pushes that touch any cog will see the new path expectations.

### 4. Blog taxonomy and multi-select AND filter (thread two)

Designed a 13-tag taxonomy for the public blog: `mx-foundations`, `ai-agents`, `provenance`, `cogs`, `seo-geo-aeo`, `cms`, `standards`, `accessibility`, `practitioner`, `business-case`, `commentary`, `blockchain`, `announcements`. Every Featured and Blog-listing card on [`mx-outputs/mx-site/blog/index.html`](../../../../mx-site/blog/index.html) carries 2 to 4 of these as a `data-tags` attribute plus a visible chip list. A filter bar sits between the Featured and Blog-listing sections: 13 chip buttons plus a Clear button, multi-select AND semantics (a post must match every selected tag), a live status line that announces the visible-post count. The filter logic is a small vanilla-JS IIFE inline on the index page — no JS dependency change. Profile cards do not carry `data-tags` so they remain visible regardless of the filter state.

### 5. Per-post tag chips with hash-preselect

Every one of the 50 published blog posts gained a clickable tag-chip row directly under the byline. Each chip is an anchor linking to `index.html#tags=<slug>`; the index parses the `#tags=` hash on load and pre-selects matching chips, so a reader who clicks a chip on one post arrives at the index already filtered. The Clear button also clears the hash via `history.replaceState`. Chip styling lives in [`mx-outputs/mx-site/css/mx-blog.css`](../../../../mx-site/css/mx-blog.css) (the canonical blog stylesheet), with hover and focus-visible states that match the existing accent-colour pattern.

### 6. YAML frontmatter retrofit (HTML declared canonical)

Forty-nine older blog posts had no embedded YAML frontmatter at all. Every one now carries a block inside `<!-- ... -->` immediately after `<head>` opening, generated from existing page metadata: title (stripped of the `| CogNovaMX` brand suffix), description, author, dates from JSON-LD `datePublished` / `dateModified`, mx.status / contentType / audience / aiAssistance from existing meta tags, taxonomy tags from the morning's pass. `canonicalUri` points at raw.githubusercontent.com for the HTML file; `servedAt` points at the live mx.allabout.network URL; a `runbook` line on every block records that the HTML is the canonical source for this YAML because no separate markdown source exists. The same treatment applied to 17 lander/index pages on mx-site: the homepage, about, blog/drafts, blog/governance, blog/profiles, blog/use-cases, books and its appendices subtree, learn, services, reginald, the-gathering. The one blog post that already had a markdown-sourced YAML block (`files-away-from-source.html`) was left alone.

### 7. The-padlock-and-the-page blog post + Ch20 propagation (thread three)

New 1900-word, 10-min-read post at [`mx.allabout.network/blog/the-padlock-and-the-page.html`](https://mx.allabout.network/blog/the-padlock-and-the-page.html). Argues that the TLS padlock has been the web's most-misread icon for twenty years: it attests the connection, not the content. The discovery problem (a machine cannot use a document it cannot find) and the trust problem (a machine cannot rely on a document whose origin it cannot check) are two faces of the same gap, closed by reader-side verification against a registry that indexes and attests but does not arbitrate. Walks the publisher's three concrete steps (machine-readable identity, signed metadata, discoverable attestation) and names the honest limits (doesn't stop lying, no compliance grant, doesn't stop a determined adversary). Distinct angle from the earlier `provenance-you-can-see` post; tagged provenance, mx-foundations, practitioner. The post's TLS-chain-analogy idea propagated into Protocols Ch20's existing "Padlock Attests the Pipe, Not the Page" sub-section as a closing paragraph.

### 8. possible.md three-audience strategy overview (thread four)

New 7800-word document at hub root: [`possible.md`](../../../../../possible.md). Single-source strategic overview that explains MX across three distinct audiences (investor, partner, sponsor) in one read. Structured as: universal preamble (the five-part framing, the two-pillar value proposition, the public-blog cluster index, the evidence-vehicle honest limits) plus three audience sections plus a bridge plus a navigation map. Lifts the proven hooks verbatim from the canonical commercial docs so a counterparty reads the proven framing, not a paraphrase. Strict separation holds inside the doc: investor section names REGINALD eight times as DDT's strategic asset; sponsor section names REGINALD zero times (vendor-neutral, the relationship is with The Gathering); partner section names REGINALD as the reference registry. Drafted in plan mode at `.claude/plans/the-blog-posts-cover-atomic-tulip.md`; design approved by Tom, then written.

### 9. Humanizer pass on possible.md + canon back-propagation

Pre-scanner caught a superlative echo on line 166. Catalogue walk caught a forbidden vocab hit ("valuable", from a verbatim lift) and 15 H3 headings opening with "The" (a smell, even when the heading names a concrete thing). All three classes fixed. The "valuable" fix back-propagated to the source canon: partner-strategy.md, canonical-agency-mx-partner.md, plus five maxine/ docs that carried the same word in network-effects bullet form. Zero "valuable" hits remain in `mx-canon/mx-maxine-lives/businesses/`.

---

## By the Numbers

### Thread one: UBERCOG and validator

| Metric | Value |
|--------|-------|
| Commits | 2 (`6c3cd18b` UBERCOG fields-add; `4ce28f62` validator alignment) |
| Files changed | 2 (UBERCOG.cog.md, scripts/mx-validator.cjs) |
| Lines added | +27 |
| Lines removed | -15 |
| Submodule pointer bumps | 0 |
| Gate 10 errors cleared | 3 (mx.purpose, mx.stability, contextProvides path) |

### Thread two: blog taxonomy, filter, YAML retrofit

| Metric | Value |
|--------|-------|
| Hub commits | 2 (`8d84953f`, `f4eff122`) |
| mx-outputs commits | 3 (`e05bffa` filter; `98b938d` blog YAML; `4934b4e` lander YAML) |
| Blog posts gaining filter chips | 50 (Featured 4 + Blog-listing 46) |
| Blog posts gaining clickable tag chips under byline | 50 |
| Blog posts gaining retrofitted YAML frontmatter | 49 |
| Lander/index pages gaining retrofitted YAML frontmatter | 17 |
| Total pages now carrying YAML frontmatter | 67 (50 blog posts + 17 landers) |
| Tags in taxonomy | 13 |
| Filter UX | Multi-select AND, hash-preselect (`#tags=foo,bar`) |
| Cloudflare cache purges | 2 (after blog YAML; after lander YAML) |

### Thread three: padlock blog post + Ch20 propagation

| Metric | Value |
|---|---|
| Blog post words | 1900 (10-min read) |
| Hub commits | 3 (publish 76f7b30a, humanize 590b3dee, Ch20 add a69bf1c8) |
| mx-outputs commits | 2 (publish 421dccf, humanizer pass 25f3661) |
| Manuscript sections updated | Ch20 sub-section gained TLS-chain closing paragraph |
| Cloudflare cache purges | 2 (post publish, post humanizer) |

### Thread four: possible.md + canon back-propagation

| Metric | Value |
|---|---|
| Document words | 7800 (sub the 10k target; lift-verbatim policy capped natural bloat) |
| Audience sections | 3 (investor, partner, sponsor) + universal preamble + bridge + nav map |
| Hub commits | 3 (initial 3cf5f5f7, humanize 535da8ff, canon sweep 6e46a60b) |
| REGINALD mentions (investor section) | 8 |
| REGINALD mentions (sponsor section) | 0 (strict vendor-neutral hold) |
| Source files swept for "valuable" | 7 (2 partner cluster + 5 maxine cluster) |
| Verbatim hooks lifted | 10 distinct paragraphs across CLAUDE.md and 5 commercial source docs |
| Plan-mode artefact | `.claude/plans/the-blog-posts-cover-atomic-tulip.md` |

---

## The Insight

The mx-validator and the canon dictionary are independently enforced — the validator checks at push time, the canon's deprecation table feeds the pre-write hook at edit time — and a drift between them produces an unfixable state. A file that satisfies the canon's deprecation rule fails the validator; a file that satisfies the validator's path expectation fails the pre-write hook. The pre-write hook is the harder block (every Edit hits it), so the validator must follow the canon, not the other way round. The fix is structural: when a field migrates between paths in the canon, the validator's REQUIRED_FIELDS table needs to migrate in the same release. The deprecation entry is the canonical record; the validator is downstream of it.

---

## Decisions Made

- The mx-validator follows the canon's deprecation table when the two disagree. The canon decides where fields live; the validator's job is to enforce, not to define. Header comment in [`mx-validator.cjs`](../../../../../scripts/mx-validator.cjs) records this rule so future drift goes to the validator side, not the canon side.

---

## Next Steps

- Sweep the recommended-field warnings remaining on UBERCOG (`refersTo`, `mx.x-mx-contextRequired`). Both are pre-existing on the canon's recommended list but currently unmet on UBERCOG specifically. Low priority.
- Verify Gate 10 against the next cog edit that touches `x-mx-contextProvides` in a fresh push to confirm the path realignment holds end-to-end.
- Teach the html-writer skill to emit the YAML frontmatter block by default so the morning's retrofit pattern becomes the authoring default rather than a one-off pass. The canon-source posts will not need retrofitting again; new posts should carry the frontmatter from creation.
- Consider whether the public sitemap entry for `/blog/` should advertise the filter URL pattern (e.g. `#tags=ai-agents`) somewhere a search engine can index. Currently the hash fragment is not surfaced anywhere outside the filter UI.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 6c3cd18b (hub) | UBERCOG: add mx.purpose, mx.stability, x-mx-contextProvides |
| 4ce28f62 (hub) | mx-validator: align contextProvides path with canon vendor namespace |
| 8bef350d (hub) | Bump mx-outputs: 2026-05-26 morning directors report (v1.0) |
| af70f8b0 (hub) | Changelog: 2026-05-26 morning entry for UBERCOG and validator alignment |
| 9f670154 (hub) | Learnings: canon deprecation table is authoritative for every enforcement tool |
| d49335ff (hub) | Bump mx-outputs: README regen after morning report add |
| 8d84953f (hub) | Bump mx-outputs: retroactive YAML frontmatter on 49 blog posts |
| f4eff122 (hub) | Bump mx-outputs: retroactive YAML frontmatter on 17 mx-site landers |
| e05bffa (mx-outputs) | Blog: multi-select AND tag filter on index; visible tag chips on every post |
| 98b938d (mx-outputs) | Blog: HTML now canonical for YAML frontmatter on 49 older posts |
| 4934b4e (mx-outputs) | Landers: HTML canonical for YAML frontmatter on 17 lander pages |
| 76f7b30a (hub) | Bump mx-outputs: publish padlock-and-the-page blog post |
| 421dccf (mx-outputs) | Publish blog post: The Padlock Attests the Pipe, Not the Page |
| 590b3dee (hub) | Bump mx-outputs: humanizer pass on padlock-and-the-page |
| 25f3661 (mx-outputs) | Humanize padlock-and-the-page: remove Maxine-overlay scaffolds |
| a69bf1c8 (hub) | Ch20: add TLS-chain reader-side-verification paragraph to padlock sub-section |
| 3cf5f5f7 (hub) | Add possible.md: three-audience MX strategy presentation |
| 535da8ff (hub) | Humanize possible.md: drop 'The'-prefixed H3 headings, fix superlative echo, swap 'valuable' |
| 6e46a60b (hub) | Canon sweep: remove forbidden word 'valuable' from business docs |
