---
title: "Co-Directors Report — Brand guide, Schema.org post, cog enforcer fixed, writing-style rules codified and swept across the corpus"
description: "Evening session: mx-site brand guide; Schema.org post; cog enforcer v1.8; mx exec dispatcher; dotfusion.com 5-page audit; three-card Featured pattern; writing-style rules for neutral English in public HTML, em-dash anti-evasion, and negation-pivot ban; corpus-wide neutral-English, em-dash, and spaced-hyphen sweeps across 100+ HTML files."
author: "Tom Cranstoun"
created: 2026-05-08
modified: 2026-05-08
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-08-evening-report.md
---

# Co-Directors Report — Brand guide, Schema.org post, cog enforcer fixed, dotfusion.com re-audited

**Date:** 8 May 2026 — Evening
**Segment:** Evening (since 5pm)

---

## Summary

**v1.2 addition:** A second late-evening run codified three writing-style rules in `mx-canon/ssot/writing-guides/writing-style.md` and swept the public HTML corpus to enforce each one. The rules close loopholes that had been bending mx-site prose into AI-cliché patterns: (1) neutral English in public HTML so the split US / UK readership is not distracted by spelling divergence; (2) em-dash anti-evasion that bans the "split a thought into a long sentence and a short follow-on sentence" workaround; (3) negation-pivot ban that catches the multi-sentence cousin of "It's not just X, it's Y". Three corpus sweeps applied the rules: the neutral-English sweep touched 88 files; the em-dash sweep removed 1,924 of 1,938 occurrences across 94 files; the spaced-hyphen sweep removed 355 of 432 across 49 files. The Featured section on the blog index also expanded from one card to a balanced three-card pattern (infrastructure, provenance, metadata interoperability), each pinned post still appears in its date slot in the chronological grid.

**v1.1 addition:** A late-evening session diagnosed and fixed two bugs in the cog enforcement hook (`run-cog-enforcer.sh`), added `mx exec` as a first-class dispatcher alias, and ran a clean 5-page audit of dotfusion.com — the first complete run since the pipeline hardening in the afternoon. The cog enforcer now correctly identifies hybrid/scripted action-cogs and routes them to `mx exec` rather than emitting the wrong SOP-read directive.

**v1.0 summary:** The evening closed out a full day of output work. The mx-site brand guide HTML was published as a reusable reference for all future site work, LinkedIn banners were iterated through four versions to clear the profile-picture boundary, the html-writer skill was formally scoped to mx-site only, and the Schema.org provenance blog post was published and promoted alongside three infrastructure posts. Nine commits landed.

---

## What Was Done

### 1. mx-site Brand Guide Published

A brand guide HTML page was added to `mx-outputs/brand/` covering the mx-site palette, typography, component patterns, and naming conventions. This becomes the single reference any session or contributor uses when writing or reviewing mx-site HTML — no more guessing colours or class names from live files.

### 2. LinkedIn Banner Iterations

Four banner versions were produced and pushed:

- v1: The Gathering logo (initial)
- v2: Profile-pic safe layout (breathing room on the left)
- v3: Inverted Gathering logo variant
- v4: Logo repositioned clear of the profile-picture circle

Each iteration went to mx-outputs and was visible on LinkedIn. v4 is the current live version.

### 3. html-writer Skill Scope Convention

The html-writer skill, CLAUDE.md reference table, and UBERCOG routing note were updated to make explicit that html-writer applies to mx-site only. Any HTML for other sites (cognovamx.com, allabout.network brand pages, etc.) is directed to the relevant site's brand guide in `mx-outputs/brand/`. This prevents scope creep where the skill silently absorbs work it was not designed for.

### 4. Blog Posts Promoted

Four posts promoted or newly published:

- **Schema.org and the missing provenance layer** — new post, live today; covers the gap Schema.org leaves in provenance and how MX fills it
- Three infrastructure posts promoted from draft with full canonical head blocks and structured data tuned for prospect scans

### 5. Cog Enforcer v1.8 — Two Bugs Fixed

The `UserPromptSubmit` hook (`run-cog-enforcer.sh`) that enforces cog execution had two bugs that became visible when dotfusion.com was re-audited via "use cog to audit-site":

**Bug 1 — Wrong cog resolved.** The registry fuzzy scorer used `"/scripts/cogs/" in path` to award the action-cog bonus, but registry paths are stored without a leading slash (`scripts/cogs/mx-audit.cog.md`). The string never matched, so all audit cogs tied and the info-doc manual (`manual-web-audit-suite.cog.md`) won on description token hits. Fixed by removing the leading slash. The `mx-audit.cog.md` entry also had its tags extended with `site`, `website`, `domain` so the scorer produces a clear win (score 5 vs 4) when the user mentions a URL or site.

**Bug 2 — Wrong directive for scripted/hybrid cogs.** The hook always emitted the SOP-read message ("Read the cog, follow execute: actions") regardless of cog type. For hybrid/scripted cogs, this means the embedded script is never run. Fixed: the hook now reads `actionType` from the cog's YAML frontmatter and emits a type-specific directive. For `scripted`/`hybrid`: "Run `mx exec <cogname>` via Bash, then follow prose inference." For others: existing SOP message. An 8 KB read cap was also replaced with line-by-line iteration to handle the 25 KB frontmatter in `mx-audit.cog.md`.

### 6. mx exec Dispatcher Added

`mx exec [args]` was not working — the dispatcher (`mx.sh`) had no `exec` case and fell through to the `mx.<cmd>.sh` router which then failed. Added an `exec)` special case that calls the `mx-exec` binary directly. `mx-audit.cog.md` had its `actionType: hybrid` field added (the cog has both an embedded script and LLM prose inference steps).

### 7. dotfusion.com Re-Audited (5 Pages)

Fresh 5-page audit of <https://dotfusion.com> run via the fixed cog pipeline. Report and all gate sidecars updated in `mx-crm/outreach/2026-05-08/`. PDF delivered to `mx-outputs/pdf/outreach/2026-05-08/dotfusion-com-report.pdf` (1.1 MB). Gates ran in auto-warn mode (round count past cap from earlier runs); no factual blockers.

### 8. Featured Section: Three-Card Pattern

The blog index gained a "Featured" section above the chronological grid carrying three posts that argue the same thesis from three angles: the agentic-era-infrastructure post (infrastructure framing for the Bare Metal Ventures investor archetype), the schema-org-and-the-missing-provenance-layer post (provenance gap for the C-THRU.ai compliance archetype), and the many-agents-one-metadata-layer post (technical depth for the CTO scan). Each Featured post still appears in its date slot in the chronological listing below. The three-card pattern reads as balance rather than emphasis on a single piece.

### 9. Writing-Style Rules: Neutral English in Public HTML

A new rule in `writing-style.md` §3 declares mx-site public HTML as a neutral-English surface: rephrase to avoid US / UK divergent spellings rather than picking a side. The default for everything else (manuscripts, reports, plans, internal docs, Gathering drafts) stays British English. CLAUDE.md carries the headline mirror; the canonical rule and worked replacement table live in writing-style.md; a feedback memory captures the change for future sessions. The rule was set after the BMV pitch and the C-THRU.ai sponsorship conversation made the split US / UK readership concrete.

A corpus sweep applied the rule across 88 files, ~955 line-edits in each direction (UK-leaning words rephrased to neutral or, where rephrasing was context-dependent, fallen back to the international form). Schema.org `@type: "Organization"` tokens and other JSON-LD enum values were preserved verbatim. URL slugs and anchor IDs were preserved (changing them breaks deep links).

### 10. Writing-Style Rules: Em-Dash Anti-Evasion

The existing "no em-dashes in HTML" rule had a loophole: writers were splitting one connected thought into a long sentence followed by a short standalone sentence to avoid the em-dash. The rule was tightened with two anti-evasion clauses: (1) the existing "do not begin sentences with And, But, or Or" rule now spells out that leaving the conjunction at the start of a short follow-on sentence still counts; (2) a new "short-sentence em-dash evasion" bullet bans fragmenting a thought into emphatic stubs. The em-dash rule was also reconciled with the public-HTML scope: spaced hyphens are explicitly banned as the em-dash by another typeface; substitutes are comma, semicolon, colon, or rephrase, in that order of preference. The schema-org post that triggered this update had six prose passes applied by hand. The rule update sits in writing-style.md §3 and the no-em-dashes feedback memory.

### 11. Writing-Style Rules: Negation-Pivot Ban

A new bullet in writing-style.md §6 (Forbidden Constructs) bans the multi-sentence cousin of "It's not just X, it's Y" in any inflection: "It is not X. It is Y." / "X is not Y. X is Z." / "The question is not X. The question is Y." / chained "It is not X. It is not Y. It is Z." The rhetorical move is the same regardless of whether an em-dash, period, or short follow-on sentence bridges the two halves; the fix is to rephrase into one sentence with `but` / `rather than` / `instead of`, drop the negation altogether, or use parallel structure inside one clause. A feedback memory under `feedback_no_negation_pivot.md` captures the rule for future sessions. A corpus sweep applied it across 13 files, ~22 prose passes including all three Featured posts.

### 12. Em-Dash Corpus Sweep

The wider em-dash sweep then ran across the whole mx-site corpus: 1,924 of 1,938 em-dash occurrences across 94 files removed. Title-pattern em-dashes (inside `<title>`, `og:title`, `twitter:title`, `og:image:alt`, `twitter:image:alt`, and `<img alt="...">`) became pipe ` | ` (visual title separator); body prose, descriptions, list items, and headings became commas. The 14 em-dashes that remain are all defensible exceptions: 8 inside YAML code blocks in book appendices (the dash is YAML syntax for list items), 5 `<td>—</td>` table N/A placeholders, and 1 `<code>—</code>` example showing the em-dash character itself.

### 13. Spaced-Hyphen Corpus Sweep

A follow-on sweep applied the same logic to spaced hyphens used as dashes: 355 of 432 hits across 49 files removed; the 77 that remain are all inside Pandoc-syntax-highlighted code blocks (comment lines, CLI-output samples) where the hyphen is part of the code being shown. Together with the em-dash sweep, every dash-equivalent connective in mx-site prose now uses comma / semicolon / colon / rephrase, and pipe ` | ` for title-pattern visual separators.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (v1.0 evening) | 9 |
| Commits (v1.1 late evening) | 2 (mx-crm + hub) |
| Commits (v1.2 corpus-sweep run) | 22 (hub + mx-outputs) |
| Hook bugs fixed | 2 |
| Audit pages | 5 |
| Repositories touched | 3 (hub, mx-crm, mx-outputs) |
| LinkedIn banner iterations | 4 |
| Blog posts live | 1 new, 3 promoted |
| Writing-style rules added | 3 (neutral English public-HTML; em-dash anti-evasion; negation-pivot ban) |
| Feedback memories saved | 2 (neutral-English; negation-pivot) + 1 updated (no-em-dashes) |
| Corpus-sweep files touched | 100+ unique files across three sweeps |
| Neutral-English line-edits | ~955 in each direction across 88 files |
| Em-dashes removed | 1,924 of 1,938 (99.3%) across 94 files |
| Spaced-hyphens removed | 355 of 432 (82%) across 49 files |
| Featured cards on blog index | 3 (was 1) |

---

## Decisions Made

- Brand guide convention locked: one `mx-outputs/brand/<site>-brand-guide.html` per site; html-writer skill is mx-site only and explicitly says so
- Cog enforcement is now type-aware: scripted/hybrid cogs route to `mx exec`; SOP cogs route to the prose-read directive
- `actionType` is now required on all action-cogs for correct hook routing
- mx-site public HTML uses neutral English in prose; British English remains the default for manuscripts, reports, plans, internal docs, and Gathering drafts
- The em-dash rule for public HTML now bans the spaced-hyphen substitute and the short-follow-on-sentence workaround; substitutes are comma, semicolon, colon, or rephrase, in that order
- The negation-pivot pattern ("It is not X. It is Y." in any inflection) is now in §6 Forbidden Constructs, applies across all surfaces

---

## Next Steps

- End-to-end test `mx-audit/standalone.js` from a clean directory (carried from REMINDERS.md)

---

## Commit Log

| Hash | Description |
|------|-------------|
| 95b11d4f | Bump mx-outputs: LinkedIn banner for The Gathering |
| cd02cb59 | Bump mx-outputs: add mx-site brand guide HTML |
| ab15cd22 | Scope html-writer and brand guide convention across CLAUDE.md, UBERCOG, and skill |
| 80138376 | Bump mx-outputs: LinkedIn banner v2 (profile-pic safe layout) |
| d1a18325 | Bump mx-outputs: LinkedIn banner with inverted Gathering logo |
| 6aa721c1 | Bump mx-outputs: promote three infrastructure posts and tune site for prospect scans |
| 01671268 | Bump mx-outputs: LinkedIn banner v4 (logo clear of profile pic) |
| 7b1d0b43 | Bump mx-outputs: promote newborn-LLM-COG post with full canonical head block |
| a203e6f0 | Publish blog post: Schema.org and the missing provenance layer; add deprecations to wordlist |
| bd960ae | mx-crm: dotfusion.com audit 2026-05-08 (5 pages): report and sidecar files |
| b10da8af | hub: fix cog enforcer v1.8; add mx exec dispatcher |
| bbe08d40 | Bump mx-outputs: pin agentic-era-infrastructure as Featured on blog index |
| aa811d9 | (mx-outputs) Pin agentic-era-infrastructure post as Featured at top of blog index |
| 8789d065 | Bump mx-outputs: Featured section expands to three-card pattern |
| 8722fa3 | (mx-outputs) Featured: expand to three-card pattern (infrastructure + provenance + metadata) |
| 64bb1e0d | Writing style: switch public HTML prose to neutral English |
| 601ce0ab | Bump mx-outputs: neutral English on pinned agentic-era-infrastructure post |
| 2f37e92 | (mx-outputs) Pinned post: switch prose to neutral English |
| 713647de | Bump mx-outputs: full neutral-English sweep across mx-site |
| 8753921 | (mx-outputs) Neutralise public-HTML prose across mx-site (full corpus sweep) |
| da1aad3d | Writing style: tighten em-dash and sentence-initial-conjunction rules; bump mx-outputs |
| df989ab | (mx-outputs) schema-org post: remove em-dash evasion patterns |
| 20c135c4 | Writing style: codify negation-pivot rule + bump mx-outputs |
| 449defb | (mx-outputs) Sweep negation-pivot pattern across mx-site |
| a0d7f097 | Bump mx-outputs: em-dash sweep across mx-site public HTML |
| 32e9ebc | (mx-outputs) Sweep em-dashes from mx-site public HTML |
| 0459c497 | Bump mx-outputs: spaced-hyphen sweep across mx-site |
| 53c4366 | (mx-outputs) Sweep spaced hyphens used as dashes in mx-site public HTML |
| 98257f7 | (mx-outputs) Add ~$* lock-file pattern to gitignore (Office/Keynote) |
| *pending* | Hub: bump mx-outputs for gitignore + this report v1.2 |
