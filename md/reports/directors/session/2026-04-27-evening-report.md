---
title: "Co-Directors Report — cogHeader Field, MXS-06, cog-spec v1.2; Dogu Contract; Blog Site-Chrome Consolidation"
description: "Added cogHeader field, MXS-06, cog-spec v1.2, wired validators, updated Dogu contractor agreement, and consolidated the entire mx-site blog: new post-conclusion block, modern site-chrome on legacy posts, footer links to TG Community + absolute Books URL, and a new published blog post on AI agent contracts."
author: "Tom Cranstoun"
created: 2026-04-27
modified: 2026-04-27
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
---

# Co-Directors Report — cogHeader Field, MXS-06, cog-spec v1.2; Dogu Contract

**Date:** 27 April 2026 — Evening
**Segment:** Evening (third session — follows afternoon SEO recovery)

---

## Summary

The cog magic-header comment (`<!-- cog v1 spec=... runtime=... -->`) is invisible to YAML-only consumers — registries, validators, the mx-graph builder. This evening shipped a frontmatter equivalent (`cogHeader`) that carries the same four pieces of information (version, spec URL, runtime URL, runtime-doc URL) as a queryable nested object, plus a new shared standard (MXS-06) that defines the field and the equivalence rule when both forms appear in the same cog. The cog spec is now at v1.2; validators flag mismatches and shape errors automatically.

---

## What Was Done

### 1. Canon and shared standard

Added `cogHeader` as a core field in `mx-canon/ssot/fields-data.yaml` (object with `version`, `spec`, `runtime`, `runtimeDoc` sub-keys; conformance MAY). The triage rubric and Appendix M §27 publishing-path table both gained the new entry. The MXS family grew by one with a new draft, `mxs-06-cog-identification.cog.md` v1.0-proposed, defining the field, the equivalence rule, and verifier conformance — bundled with MXS-05 for the next Stream community-review submission.

### 2. cog-spec bumped to v1.2

The canonical spec at `mx-outputs/mx-site/drafts/cog-spec.v1.md` was bumped to v1.2. §2.5 (the magic-header section) now references MXS-06 and states the equivalence rule: when both forms are present in the same cog they MUST agree on every value. §4.2 lists `cogHeader` as an optional Zone 1 field. The spec doc and the runtime companion both now carry self-referencing `cogHeader` blocks in their own frontmatter as a worked example.

### 3. Validator wiring

Two new lint codes shipped: `mx-cog-header-shape` (cogHeader must be an object with version + spec, URL-shaped values) and `mx-cog-header-magic-mismatch` (when both forms are present and disagree). The frontmatter parser was updated to skip a leading magic-header comment line so cogs that begin with one parse cleanly, and top-level nested objects are now overlaid via js-yaml without disturbing the existing `mx:` flattening contract. End-to-end tests against three sample cogs (good, mismatch, malformed) confirmed every rule fires correctly.

### 5. Dogu contractor agreement — address update and PDF

The contractor agreement for Yunus Dogu (`mx-crm/contacts/dogu-abaris/contractor-agreement.md`) identified the contractor by name only in the opening parties section. UK contract practice requires the contractor's full address in the "Between" block alongside the client's registered office. The address, phone, and email already appeared correctly in the Signatures section; they have now been added to the parties section as well (Birčaninova 12 / 9, 11000 Belgrade, Serbia). The PDF at `mx-outputs/pdf/dogu-abaris-contractor-agreement.pdf` was regenerated.

### 4. mx-upgraded-reginald state hygiene

Reginald's working tree carried two pending changes: deletions of `spec/cog-spec.v1.md` and `impl/js/spec/cog-spec.v1.md` (the spec moved to mx-site/drafts in a prior session) and removal of the `example.org` magic-header placeholders from the example cogs. Both were committed and pushed; the canonical spec relocation is now reflected in the reginald repo as well. The validation skip-list re-includes reginald — its cogs are authored to cog-spec strict minimum (title + description) and would otherwise fail MX-Hub's stricter required-field rules; the file-write enforcement removal stands separately.

### 6. Blog: site-chrome consolidation + new post

The third evening sub-session published a new blog post ("Why your AI agent gives you a different answer every time" — 1,190 words) and used it as the trigger to fix three accumulated visual problems across the entire blog:

- **Triple-stack at the bottom of every post.** The author markdown often ended with an italic Tom-Cranstoun bio paragraph. The generator then auto-injected an `<aside class="author-bio-link">` with the same information rephrased. The template then rendered a standalone `<section class="section-cta">` with onward links. Three competing blocks separated by horizontal rules, no visual hierarchy. Replaced with one `<aside class="post-conclusion">`: card layout with author block on the left (avatar + name + bio) and CTA block on the right (prompt + three onward links). Stacks to single column under 720px. Generator emits it natively; 22 existing posts migrated by a one-shot script; the canonical blog template at `mx-canon/ssot/templates/blog-post.html` updated in lockstep.
- **Footer drift.** The footer's "Books" link was relative (`/books/`) and TG Community was missing. Updated to absolute `https://mx.allabout.network/books/` and added `https://tg.community` (with `rel="noopener"`). All 24 posts plus both templates carry the new footer.
- **Four legacy posts off the site-chrome contract entirely.** `a-standard-that-knows-what-it-isnt`, `dita-and-mx-a-comparison`, `the-agent-web-looks-like-1995`, and `the-markdown-trap` predated the modern template — they linked only `mx-blog.css` (no `mx-unified.css`), had no `<header class="site-header">`, used an external avatar URL, had a floating "Back to Top" button, and used a minimal `<footer><p>©…</p></footer>`. A migration script brought them up to the contract: site-header inserted, unified.css added, avatar localised, back-to-top removed, full site-footer with TG Community + Books links, app.js loaded.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (this segment) | 8 |
| Files changed | 43 |
| Lines added | +2,545 |
| Lines removed | −1,961 |
| Repositories | 5 (hub + mx-crm + mx-outputs + mx-shared-gathering + mx-upgraded-reginald) |
| New shared standards | 1 (MXS-06) |
| New canon fields | 1 (cogHeader) |
| New validator lint codes | 2 |
| New blog posts published | 1 |
| Blog posts site-chrome migrated | 24 (entire blog) |

---

## Why It Matters

Cog signing and conformance pivot on machine-readability of the cog's identity claim. A magic-header HTML comment satisfies the human-and-agent recognition case but locks the spec/runtime URLs out of every YAML pipeline that doesn't parse comments. Mirroring those URLs in `cogHeader` makes them queryable by the same tooling that already consumes frontmatter — registries, the mx-graph builder, audit pipelines — without an ad-hoc HTML parsing step. The equivalence rule keeps the two forms honest: a future cog with both forms cannot drift them apart silently, because validators flag the disagreement.

---

## The Insight

The custom YAML parser inside `frontmatter-validator.js` had quietly committed to a "scalars and `mx:` block only" world. Adding `cogHeader` as a nested top-level object surfaced the limit immediately — the parser saw the field as an empty array. The fix wasn't to extend the homemade parser further, but to overlay js-yaml's full parse onto the homemade view for keys whose value is a non-flat object. The flattening of `mx:` (the parser's reason to exist) stays untouched; nested top-level objects (cogHeader today, future siblings tomorrow) just work.

---

## Decisions Made

- **Tier placement: standard core (Tier 1).** The cog format is open. The frontmatter equivalent of the magic header is part of cog identification, not vendor workflow. No `x-mx-` prefix.
- **Conformance MAY.** Mirrors cog-spec's MAY treatment of the magic header itself. Cogs intended for circulation SHOULD declare both forms; closed-system cogs MAY omit both.
- **Equivalence is enforced as an error, not a warning.** A cog with both a magic header and a `cogHeader` field that disagree is non-conformant. Validators reject; they do not auto-reconcile.

---

## Next Steps

- Submit MXS-05 and MXS-06 together to Stream for community review (REMINDERS.md captures the pairing)
- Watch for follow-on cog-authoring tooling that should populate `cogHeader` automatically when generating new cogs (mx-build, html-writer)
- When `cogHeader` adoption matures, consider whether to promote conformance from MAY to SHOULD for cogs intended for public distribution

---

## Commit Log

| Hash | Repository | Description |
|------|-----------|-------------|
| 1079435 | mx-shared-gathering | MXS-06: drop unresolved buildsOn reference |
| 93c196c | mx-shared-gathering | Add MXS-06 Cog Identification draft (v1.0-proposed) |
| 91c5c25 | mx-outputs | Bump cog-spec to v1.2; add cogHeader equivalence rule + self-reference |
| 79f04a7 | mx-upgraded-reginald | Remove example.org magic-header placeholders from examples |
| 8df3b88b | hub | Add cogHeader frontmatter field; new MXS-06; cog-spec v1.2 |
| 513db831 | hub | Bump submodule pointers: allaboutv2, mx-audit, mx-crm, mx-upgraded-reginald |
| e22f376 | mx-crm | Add Dogu address to parties section of contractor agreement |
| 1c37b8b | mx-outputs | Add Dogu contractor agreement PDF |
| ba7d1a8 | mx-outputs | Publish post + consolidate site chrome and post-end block across all blog posts |
