---
title: "Co-Directors Report - UBERCOG and validator alignment, blog frontmatter retrofit, padlock blog post + manuscript propagation, possible.md three-audience overview, audit-pipeline non-blocking refactor"
description: "Five threads. First, Gate 10 was closed: UBERCOG.cog.md gained the three required mx-validator fields and the validator itself was aligned with the May 2026 canon vendor-namespace decision. Second, the public blog gained machine-readable structure end-to-end: a 13-tag taxonomy with a multi-select AND filter on the blog index, visible tag chips on every post and card, and retrofitted YAML frontmatter on 49 older blog posts and 17 lander pages. Third, a new blog post (the-padlock-and-the-page) shipped to mx.allabout.network and its ideas propagated into the Protocols Ch20 manuscript. Fourth, possible.md landed at hub root: a 7800-word three-audience strategy presentation (investor, partner, sponsor) that lifts the proven hooks verbatim from the canonical commercial docs and stitches them into one read; the humanizer pass and back-propagation of the forbidden word 'valuable' across the commercial spine followed. Fifth, an enhancely.ai audit caught a tone-gate false positive that the operator wanted fixed structurally: every gate now records findings at error/warn/info severity, no gate blocks the PDF, and a post-PDF reviewer sign-off prompt records a wall-clock statement into both provenance sidecars."
author: "Tom Cranstoun"
created: 2026-05-26
modified: 2026-05-26
version: "1.3"

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

### 10. Audit-pipeline non-blocking refactor (thread five)

An enhancely.ai audit (5 pages) failed at the report-phase infill step because the tone gate flagged "recognize" inside the URL slug `/blog/.../co-recognize-your-brand-...` - that slug is enhancely.ai's own blog URL, not our prose. A surgical fix extended [`check-report-tone.js`](../../../../../mx-reginald/audit/scripts/check-report-tone.js)'s `stripInline` to also strip URL path slugs and absolute-path markdown links, getting the audit through.

The operator then named the structural issue: gates that exit non-zero on stylistic findings are blocking deliverables that should ship. The directive was clear: no gate blocks the PDF, every gate records findings at a meaningful severity, all findings surface in the final md and PDF for the human reviewer, and a sign-off statement closes the chain. Implementation:

- **Severity model** extended in [`audit-errors.js`](../../../../../mx-reginald/audit/lib/audit-errors.js): three levels (`error`, `warn`, `info`) with legacy `blocker`/`warning` normalised on read. Tone-check findings land at `info`; rule violations at `warn`; only true I/O failures at `error`. Findings carry a `provenanceClass` (`ai` or `deterministic`) so the chain routes correctly.
- **Non-blocking gates**: [`check-report-tone.js`](../../../../../mx-reginald/audit/scripts/check-report-tone.js), [`verify-audit-report.js`](../../../../../mx-reginald/audit/scripts/verify-audit-report.js), [`verify-skeleton.js`](../../../../../mx-reginald/audit/bin/verify-skeleton.js), [`infill-report.js`](../../../../../mx-reginald/audit/bin/infill-report.js), and every gate orchestration site in [`audit-pipeline.js`](../../../../../scripts/audit-pipeline.js) (template-voice, template-coverage, tone, voice, scope, html-render, contradictions, finding-pages, section-completeness, provenance-gap, section-sanity, rating-grade, deterministic verifier) now exit 0 and route findings through a new `recordGateFinding()` helper instead of aborting.
- **Top-of-report findings section**: [`render-error-section.js`](../../../../../mx-reginald/audit/lib/render-error-section.js) rewritten. Section heading: "Audit gate findings for human review". Grouped by severity, each entry names the gate / category / finding / timestamp with collapsible detail. The section sits before "About This Report" so the human reviewer sees the diagnostic surface first. The previous operator-internal sources filter was dropped because the audience IS the operator.
- **Reviewer sign-off flow**: after PDF generation, the pipeline prompts the operator for a multi-line statement (skipped automatically when stdin is not a TTY or `MX_AUDIT_SKIP_SIGNOFF=1`). If given, the statement is written to `audit_errors.json` with a real wall-clock timestamp, the findings section is regenerated to include it, both provenance sidecars are rebuilt via [`build-provenance.js`](../../../../../mx-reginald/audit/scripts/build-provenance.js), and the PDF is re-rendered with the updated XMP payload.
- **Stray probe write-paths gitignored**: two probes write to `<delivery>/cache/sitemap_urls.json` and `<delivery>/www.<host>/pdf_sample.json` instead of the canonical per-host `.cache/` root. Added two new `audit/*/*/cache/` and `audit/*/*/www.*/` patterns to `mx-outputs/.gitignore`.

End-to-end test on enhancely.ai (now committed): Gate 0b-voice raised one mixed-voice finding after auto-repair; pipeline did not abort; PDF generated with the finding at the top of the report under "Audit gate findings for human review"; a follow-up reviewer-statement injection regenerated provenance + PDF cleanly.

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

### Thread five: audit-pipeline non-blocking refactor

| Metric | Value |
|---|---|
| Hub files changed | 9 (audit-pipeline.js plus 6 mx-reginald audit scripts/libs plus mx.pdf.sh + report) |
| mx-outputs commits | 2 (`81801c2` enhancely.ai delivery; `c7f0e52` gitignore strays) |
| Severity levels added | 3 (error, warn, info) |
| Gates converted to non-blocking | 13 (template-voice, template-coverage, tone, voice, scope, html-render, contradictions, finding-pages, section-completeness, provenance-gap, section-sanity, rating-grade, deterministic verifier) |
| Pre-existing recordError sites preserved | 10 (extracted gates already used the always-produce-PDF pattern) |
| Audit pages | 5 |
| PDF output (enhancely-ai-report.pdf) | 1.2M, EAA Level 2, 52KB AI provenance in XMP |
| Reviewer-statement flow | Interactive prompt (TTY) + MX_AUDIT_SKIP_SIGNOFF=1 escape |

---

## The Insight

The mx-validator and the canon dictionary are independently enforced - the validator checks at push time, the canon's deprecation table feeds the pre-write hook at edit time - and a drift between them produces an unfixable state. A file that satisfies the canon's deprecation rule fails the validator; a file that satisfies the validator's path expectation fails the pre-write hook. The pre-write hook is the harder block (every Edit hits it), so the validator must follow the canon, not the other way round. The fix is structural: when a field migrates between paths in the canon, the validator's REQUIRED_FIELDS table needs to migrate in the same release. The deprecation entry is the canonical record; the validator is downstream of it.

The second insight came from the afternoon audit. A gate that exits non-zero is asking for two distinct things at once: "this is wrong" and "stop everything until you fix it". Those are different verdicts. Tone violations and stylistic findings rarely justify blocking a deliverable; I/O failures always do. Conflating them means every gate runs as an emergency brake, and the operator ends up patching scripts mid-audit to get past stylistic checks. The structural fix is severity: every checking script emits findings at a level that names what it caught, the pipeline never aborts on a finding, and the human reviewer reads the surfaced list at the top of the deliverable. The deliverable still ships; the reviewer signs off (or rebuts) the findings; the chain captures the decision honestly. This pattern was already half-built (the always-produce-PDF rule in `audit-errors.js`, the `[ERROR_REPORT_SECTION]` placeholder in the template) — completing it took extending the severity model, converting the remaining blocking gates, and wiring the sign-off prompt.

---

## Decisions Made

- The mx-validator follows the canon's deprecation table when the two disagree. The canon decides where fields live; the validator's job is to enforce, not to define. Header comment in [`mx-validator.cjs`](../../../../../scripts/mx-validator.cjs) records this rule so future drift goes to the validator side, not the canon side.

---

## Next Steps

- Sweep the recommended-field warnings remaining on UBERCOG (`refersTo`, `mx.x-mx-contextRequired`). Both are pre-existing on the canon's recommended list but currently unmet on UBERCOG specifically. Low priority.
- Verify Gate 10 against the next cog edit that touches `x-mx-contextProvides` in a fresh push to confirm the path realignment holds end-to-end.
- Teach the html-writer skill to emit the YAML frontmatter block by default so the morning's retrofit pattern becomes the authoring default rather than a one-off pass. The canon-source posts will not need retrofitting again; new posts should carry the frontmatter from creation.
- Consider whether the public sitemap entry for `/blog/` should advertise the filter URL pattern (e.g. `#tags=ai-agents`) somewhere a search engine can index. Currently the hash fragment is not surfaced anywhere outside the filter UI.
- Fix the two probes that write stray paths inside an audit delivery folder (`cache/sitemap_urls.json` and `www.<host>/pdf_sample.json`). They should write to the per-host `<hostSlug>/.cache/` root instead. The gitignore patch added today is a containment measure, not a fix.
- Capture the `recordGateFinding()` helper's `output` parameter from each gate's stderr/stdout so the finding detail in the report carries actionable evidence rather than the placeholder "Gate X returned non-zero with no captured output" that shows up for gates whose result object doesn't expose the captured text.
- Verify the gates-phase audit log is wired into `build-provenance.js` so gate findings make it into the deterministic provenance sidecar; currently the gates log is `<stem>-report-audit-log.csv` and the build-provenance pass reads from a different stem.

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
| a73a9cb0 (hub) | Bump mx-outputs: morning directors report v1.2 with possible.md threads |
| 51f0ac58 (hub) | Changelog: 2026-05-26 late-morning entry for padlock post + possible.md + 'valuable' canon sweep |
| 384aec8d (hub) | Learnings: source-verbatim hygiene inheritance + mx-validator vs template drift |
| 60710187 (hub) | Bump mx-outputs: add possible.pdf render |
| 9c4acec6 (hub) | Bump mx-outputs: provenance sidecars for possible.pdf |
| 4d5bc374 (hub) | mx.pdf.sh: ensure provenance sidecars exist before render; inject default-convention sidecar in XMP |
| cf0a606b (hub) | mx.pdf.sh: declare no-upstream-provenance honestly when sidecar is fresh |
| 81801c2 (mx-outputs) | Add enhancely.ai audit (2026-05-26): 5 pages, new findings-section pattern |
| c7f0e52 (mx-outputs) | gitignore: stray probe write paths inside audit delivery folder |
