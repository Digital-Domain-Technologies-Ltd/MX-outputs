---
title: "Co-Directors Report — Spell-check infrastructure and 'What I Do' blog publish"
description: "Published the 'What I Do' positioning blog and turned the morning's spell-check learnings into permanent repo infrastructure: aspell installed by default, wordlist sweep automation, dual-dialect policy documented across canon."
author: "Tom Cranstoun"
created: 2026-05-01
modified: 2026-05-01
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
---

# Co-Directors Report — Spell-check infrastructure and 'What I Do' blog publish

**Date:** 1 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Published a new positioning blog post ('What I Do') on mx.allabout.network and turned the morning's spell-check work into permanent repository infrastructure. aspell is now installed by default on fresh clones, the project wordlist grew from 230 to 501 entries, and a new sweep script keeps the wordlist tracking the corpus automatically. Three figure-caption typos that had been shipping in two existing posts since January were caught and fixed.

---

## What Was Done

### 1. New blog post published

`What I Do: Helping Organisations Move From Found to Used` is live at `https://mx.allabout.network/blog/what-i-do-helping-organisations-move-from-found-to-used.html`. 729 words, 4-minute read, dated 1 May 2026. Plain-language positioning across the six service lines: MX audits, the MX book series, MX architecture, accessibility / AI convergence, The Gathering, and strategic advisory. Index card added to `/blog/`, sitemap regenerated, `llms-full.txt` synced. Polish pass clean (no em-dashes, no inline styles, humanizer scan clean, timelessness clean, all internal links resolve).

### 2. aspell promoted to first-class repo infrastructure

aspell was previously listed as `optional` in `check-deps.sh` and was not installed by the fresh-Mac setup. This morning's spell sweep made it obvious that spell-check was being treated as a hand-tool rather than part of the workflow. Changes:

- `scripts/cogs/INSTALLME.cog.md` — added aspell to the Phase 1 brew installs so fresh clones get it automatically.
- `scripts/bin/check-deps.sh` — promoted aspell from `optional` to `tooling` tier so missing aspell now fails preflight.
- New `scripts/spell-sweep.sh` (+x) — automates the wordlist sweep with proper `<script>/<style>/<code>/<pre>` stripping, dual-dictionary aspell filter, preview by default, `--apply` to write, configurable scope via `--path`.
- `package.json` — added `spell:check`, `spell:sweep`, `spell:sweep:apply` (kept `mx:spell` as alias).
- `mx-canon/mx-maxine-lives/.aspell-mx.pws` — wordlist grew 230 → 501 entries (271 verified additions: tech acronyms, proper nouns, MX domain terms, valid English words aspell didn't recognise).

### 3. Three real prose typos fixed

The wordlist sweep surfaced three title-case typos in figure captions that had been shipping in published posts since January (auto-generated from SVG slug filenames):

- `machine-experience-adding-metadata.html` — "Vs Ai" → "vs AI", "Cms" → "CMS"
- `mx-a-new-role.html` — "Vs Rendered Html" → "vs Rendered HTML"

These are exactly the failures the new sweep script is designed to catch.

### 4. Dual-dialect spell-check policy documented across canon

Codified the rule that both American (organize, color, optimization) and British (organise, colour, optimisation) spellings pass — only typos are flagged, dialect is a separate writing-style review. Documented in:

- `CLAUDE.md` — new always-on rule under Critical Rules
- `UBERCOG.cog.md` — Essential Commands subsection + routing-by-intent entry, version bumped to 1.5.2
- `README.md` — `### Spell Check` subsection under Quick Start, version bumped to 3.5
- `getting-started.cog.md` — new "4a. Spell-check" subsection in Your First Hour

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (this segment, mx-outputs only at time of writing) | 1 |
| Files changed (mx-outputs commit) | 7 |
| Lines added (mx-outputs commit) | +415 |
| Lines removed (mx-outputs commit) | −12 |
| Repositories touched | 2 (hub, mx-outputs) |
| Hub files staged for commit | 9 (1 new, 8 modified) |
| Wordlist growth | 230 → 501 (+271 entries) |
| Real typos caught and fixed | 3 (in 2 posts that had been live since January) |
| New blog posts published | 1 |
| New npm scripts | 3 (spell:check, spell:sweep, spell:sweep:apply) |
| Canon files updated to document the dual-dialect policy | 4 (CLAUDE, UBERCOG, README, getting-started) |

---

## Why It Matters

Two things shipped that compound. The blog post is the first published artefact that names what CogNovaMX sells in plain language and lists the books, the audit, and The Gathering as concrete pillars. Investors and prospects asking "what does this business do" now have a one-page answer at a stable URL on the live site. The spell-check infrastructure is unglamorous but removes a category of typo-in-published-content from the workflow permanently — the three bugs found this morning had been live since January, and the new sweep would have caught them on day one.

The fresh-Mac setup script now installs aspell by default, so any new team member gets a working spell-check on their first clone with zero per-machine configuration. That is the same operating principle MX OS preaches: the documentation is the system, and the system is portable.

---

## The Insight

The skill's documented spell-check snippet (`sed -E 's/<[^>]+>//g'`) was leaking JSON-LD field names and inline-code tokens into the prose stream, which had been making spot-checks look much noisier than they really were ("389 typos in the blog corpus"). Once the strip pre-removed `<script>/<style>/<code>/<pre>` blocks, the candidate pool dropped to 274, and once that residual was triaged the actual prose-typo count was three. The lesson: a noisy diagnostic gets ignored, and "ignore the noise" is how real bugs (the three caption typos) were sitting in published posts for four months.

The fix is to make the diagnostic correct, not to lower the bar.

---

## Decisions Made

- aspell is now `tooling` tier in `deps:check`, not `optional`. Missing aspell fails preflight from this point forward.
- Spell-check is dual-dialect by policy: both American and British spellings pass, codified as a Critical Rule in CLAUDE.md.
- The wordlist sweep ships with `<script>/<style>/<code>/<pre>` stripping built in. The original snippet without stripping is no longer the canonical recipe.
- Sweep scope defaults to `mx-outputs/mx-site/blog/*.html`. Other paths can be passed via `--path`; expanding the default scope is a deliberate future decision, not the next sweep's job.

---

## Next Steps

- After publishing future blog posts, run `npm run spell:sweep:apply` as part of the publish workflow so the wordlist tracks the corpus.
- Consider folding `npm run spell:check` into a future `/step-commit` documentation pass once the wordlist has stabilised across more of the corpus.
- Decide whether to extend the sweep's default scope to book manuscripts under `datalake/manuscripts/` (deliberate scope-expansion decision; not done today).

---

## Commit Log

| Hash | Description |
|------|-------------|
| `mx-outputs 101a9d8` | Publish 'What I Do' blog post; fix three figure-caption typos |
| `mx-outputs ad5032c` | Directors report: 2026-05-01 morning - spell-check infra + 'What I Do' publish |
| `hub 2ae06e3d` | Add aspell to setup; new spell:sweep; wordlist 230→501; dual-dialect policy |
