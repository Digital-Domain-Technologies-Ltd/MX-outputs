---
title: "Co-Directors Report — Brand guide, Schema.org post, cog enforcer fixed, writing-style rules codified and swept across the corpus, elevator pitch landed and home prose redesigned, audit gate pipeline redesigned with self-repair loop, cog enforcer plan-mode gate added"
description: "Evening session: mx-site brand guide; Schema.org post; cog enforcer v1.8; mx exec dispatcher; dotfusion.com 5-page audit; three-card Featured pattern; writing-style rules for neutral English in public HTML, em-dash anti-evasion, and negation-pivot ban; corpus-wide neutral-English, em-dash, and spaced-hyphen sweeps across 100+ HTML files; elevator pitch added as a new strategic-framing section on the mx-site landing page and saved to memory as the canonical four-part framing; the two long prose blocks on the home page first split into shorter paragraphs and then redesigned with a constrained 65vw prose column, a real section-lead rule, and a framework-card grid for the four-part split (MX, The Gathering, REGINALD, CogNovaMX); audit gates 3 & 4 redesigned from blocking/warn-mode to a self-repair loop; cog enforcer upgraded to v2.0 with URL/arg parsing and a two-layer plan-mode gate that blocks EnterPlanMode and any non-Bash tool when cog enforcement is active."
author: "Tom Cranstoun"
created: 2026-05-08
modified: 2026-05-08
version: "1.7"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-08-evening-report.md
  purpose: "Evening session: mx-site brand guide; Schema.org post; cog enforcer v1.8; mx exec dispatcher; dotfusion.com 5-page audit; three-card Featured pattern; writing-style rules for neutral English in public HTML, em-dash anti-evasion, and negation-pivot ban; corpus-wide neutral-English, em-dash, and spaced-hyphen sweeps across 100+ HTML files; elevator pitch added as a new strategic-framing section on the mx-site landing page and saved to memory as the canonical four-part framing; the two long prose blocks on the home page first split into shorter paragraphs and then redesigned with a constrained 65vw prose column, a real section-lead rule, and a framework-card grid for the four-part split (MX, The Gathering, REGINALD, CogNovaMX); audit gates 3 & 4 redesigned from blocking/warn-mode to a self-repair loop; cog enforcer upgraded to v2.0 with URL/arg parsing and a two-layer plan-mode gate that blocks EnterPlanMode and any non-Bash tool when cog enforcement is active."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Brand guide, Schema.org post, cog enforcer fixed, writing-style rules codified and swept across the corpus, elevator pitch landed and home prose redesigned, audit gate pipeline redesigned with self-repair loop, cog enforcer plan-mode gate added"]
---

# Co-Directors Report — Brand guide, Schema.org post, cog enforcer fixed, dotfusion.com re-audited, audit gate pipeline redesigned

**Date:** 8 May 2026 — Evening
**Segment:** Evening (since 5pm)

---

## Summary

**v1.7 addition:** The cog enforcer was upgraded to v2.0 with two changes. First, `run-cog-enforcer.sh` now parses the URL and page-count arguments directly from the user's prompt and includes the exact pre-computed `mx exec` command in the enforcement message — so Claude receives `mx exec mx-audit https://mx.allabout.network --max-pages 999` rather than "[args from user prompt]" and has nothing to infer. Second, a new `PreToolUse` catch-all hook (`pre-tool-use-plan-mode-gate.sh`) was added: when the enforcer's short-lived flag file is present, every tool except `ExitPlanMode` and `Bash` is blocked outright. This covers both the "plan mode not yet active" case (EnterPlanMode never succeeds) and the "plan mode already active" case (all other tools are blocked, leaving ExitPlanMode as the only legal first move, then Bash as the only second move). The flag is written by `UserPromptSubmit`, consumed when Bash is called, and expires after 90 seconds regardless.

**v1.6 addition:** The audit gate pipeline was redesigned. Gates 3 & 4 (fierce critic and LLM judgment) previously ran in blocking mode then auto-degraded to warn mode after 3 rounds — a design that accumulated 28 invocations against a 3-round cap, never fired any repair, and left the round counters in a permanently-saturated state. The new design is a self-repair loop: the gates run as a pair, find issues, `repair-report.js` patches the report in place using a constrained LLM call (no new facts, no structure changes), then the loop re-runs — up to 3 iterations total per domain. Round counters track total invocations and are capped at 3; both counters stay in sync. All `--warn-fierce`, `--warn-llm`, and `--strict-fierce` flags were removed from the pipeline, the cog, both skills, and all documentation. The audit log is now opened before any other pipeline operation so every error (sweep failures, round-counter parse errors, gate errors) lands directly in the audit CSV with no buffering and no stderr fallback. The dotfusion.com report was corrected (llms.txt status in Appendix D; Priority 4 finding now names the three absent security headers explicitly), round counters were reset to 0, and gates passed cleanly on the first iteration. PDF delivered.

**v1.5 addition:** A second readability pass redesigned the two long prose sections on the mx-site home rather than just re-paragraphing them. Diagnosis after a wide-screen preview: `section-lead` was an inert class (never defined in CSS, so my "leads" rendered as plain body), and `section-inner` had no width cap, so prose ran the full 1600px max-width and read as a wall. The fix lands in `mx-unified.css` as three new rules — `section-prose` caps prose at 65vw / 780px; `section-lead` is now a real 1.5rem white block-level statement; `framework-list` is a 2-column card grid using the existing surface and border tokens, matching the page's visual language. The Introduction was trimmed from seven paragraphs to five (the redundant "CogNovaMX provides X" beat is removed because the offering cards sit directly above; the DNA / memory-pool metaphor compresses to one sentence keeping the kernel). The provenance-layer section now opens with a real lead, sets up the gap, and hands off to a four-card grid (MX, The Gathering, REGINALD, CogNovaMX). EU AI Act becomes its own short paragraph; the Schema.org and agentic-web beats stay as paragraphs but now sit in the constrained column with proper rhythm.

**v1.4 addition:** A short follow-on edit broke the two long prose blocks at the top of the mx-site home page into shorter, scannable paragraphs. The Introduction's first paragraph (eight sentences in one block) was split at four natural breaks and the opening sentence was lifted to a section-lead. The new "A provenance layer for machines" pitch section had its four-part split (MX, The Gathering, REGINALD, CogNovaMX) pulled out of inline prose into a real bulleted list, with the EU AI Act forcing-function sentence as a separate short paragraph. Every word of the original prose is preserved; only paragraph boundaries and one list element changed. This is a readability tighten on the page Tom landed earlier this segment, made after seeing it in a browser at full width.

**v1.3 addition:** A short late-evening session landed Tom's elevator pitch as a new strategic-framing section on the mx-site landing page, between the existing introduction and Training. The section carries the four-part framing (MX is the contract, The Gathering sets the standards, REGINALD does the signing, CogNovaMX operates the service), the Schema.org / FAQ-deprecation proof point, and the agentic-web economic case (cogs replace expensive inference with cheap execution). The pitch was simultaneously saved to long-term memory as the canonical opening for any outward-facing prose, indexed under a new "Pitch / Framing" section in `MEMORY.md`. Two commits: the mx-outputs HTML edit and a pending hub pointer bump.

**v1.2 addition:** A second late-evening run codified three writing-style rules in `mx-canon/ssot/writing-guides/writing-style.cog.md` and swept the public HTML corpus to enforce each one. The rules close loopholes that had been bending mx-site prose into AI-cliché patterns: (1) neutral English in public HTML so the split US / UK readership is not distracted by spelling divergence; (2) em-dash anti-evasion that bans the "split a thought into a long sentence and a short follow-on sentence" workaround; (3) negation-pivot ban that catches the multi-sentence cousin of "It's not just X, it's Y". Three corpus sweeps applied the rules: the neutral-English sweep touched 88 files; the em-dash sweep removed 1,924 of 1,938 occurrences across 94 files; the spaced-hyphen sweep removed 355 of 432 across 49 files. The Featured section on the blog index also expanded from one card to a balanced three-card pattern (infrastructure, provenance, metadata interoperability), each pinned post still appears in its date slot in the chronological grid.

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

A new rule in `writing-style.cog.md` §3 declares mx-site public HTML as a neutral-English surface: rephrase to avoid US / UK divergent spellings rather than picking a side. The default for everything else (manuscripts, reports, plans, internal docs, Gathering drafts) stays British English. CLAUDE.md carries the headline mirror; the canonical rule and worked replacement table live in writing-style.cog.md; a feedback memory captures the change for future sessions. The rule was set after the BMV pitch and the C-THRU.ai sponsorship conversation made the split US / UK readership concrete.

A corpus sweep applied the rule across 88 files, ~955 line-edits in each direction (UK-leaning words rephrased to neutral or, where rephrasing was context-dependent, fallen back to the international form). Schema.org `@type: "Organization"` tokens and other JSON-LD enum values were preserved verbatim. URL slugs and anchor IDs were preserved (changing them breaks deep links).

### 10. Writing-Style Rules: Em-Dash Anti-Evasion

The existing "no em-dashes in HTML" rule had a loophole: writers were splitting one connected thought into a long sentence followed by a short standalone sentence to avoid the em-dash. The rule was tightened with two anti-evasion clauses: (1) the existing "do not begin sentences with And, But, or Or" rule now spells out that leaving the conjunction at the start of a short follow-on sentence still counts; (2) a new "short-sentence em-dash evasion" bullet bans fragmenting a thought into emphatic stubs. The em-dash rule was also reconciled with the public-HTML scope: spaced hyphens are explicitly banned as the em-dash by another typeface; substitutes are comma, semicolon, colon, or rephrase, in that order of preference. The schema-org post that triggered this update had six prose passes applied by hand. The rule update sits in writing-style.cog.md §3 and the no-em-dashes feedback memory.

### 11. Writing-Style Rules: Negation-Pivot Ban

A new bullet in writing-style.cog.md §6 (Forbidden Constructs) bans the multi-sentence cousin of "It's not just X, it's Y" in any inflection: "It is not X. It is Y." / "X is not Y. X is Z." / "The question is not X. The question is Y." / chained "It is not X. It is not Y. It is Z." The rhetorical move is the same regardless of whether an em-dash, period, or short follow-on sentence bridges the two halves; the fix is to rephrase into one sentence with `but` / `rather than` / `instead of`, drop the negation altogether, or use parallel structure inside one clause. A feedback memory under `feedback_no_negation_pivot.md` captures the rule for future sessions. A corpus sweep applied it across 13 files, ~22 prose passes including all three Featured posts.

### 12. Em-Dash Corpus Sweep

The wider em-dash sweep then ran across the whole mx-site corpus: 1,924 of 1,938 em-dash occurrences across 94 files removed. Title-pattern em-dashes (inside `<title>`, `og:title`, `twitter:title`, `og:image:alt`, `twitter:image:alt`, and `<img alt="...">`) became pipe ` | ` (visual title separator); body prose, descriptions, list items, and headings became commas. The 14 em-dashes that remain are all defensible exceptions: 8 inside YAML code blocks in book appendices (the dash is YAML syntax for list items), 5 `<td>—</td>` table N/A placeholders, and 1 `<code>—</code>` example showing the em-dash character itself.

### 13. Spaced-Hyphen Corpus Sweep

A follow-on sweep applied the same logic to spaced hyphens used as dashes: 355 of 432 hits across 49 files removed; the 77 that remain are all inside Pandoc-syntax-highlighted code blocks (comment lines, CLI-output samples) where the hyphen is part of the code being shown. Together with the em-dash sweep, every dash-equivalent connective in mx-site prose now uses comma / semicolon / colon / rephrase, and pipe ` | ` for title-pattern visual separators.

### 14. Elevator Pitch on the mx-site Landing Page

A new section, "A provenance layer for machines", was added to `mx-outputs/mx-site/index.html` between the existing introduction and the Training offerings. The section carries Tom's canonical four-part framing (MX = the contract; The Gathering = the standards body; REGINALD = the signing service; CogNovaMX = the operating service), the Schema.org / FAQ-rich-results-deprecation as the in-miniature proof point that "what something is" without "whether to believe it" gets gamed, and the agentic-web economic case where cogs replace expensive inference with cheap execution. The `dateModified` in the WebSite JSON-LD was bumped from 2026-04-02 to 2026-05-08. The same pitch text was saved to long-term memory as `project_elevator_pitch.md` and indexed in `MEMORY.md` under a new "Pitch / Framing" section, so future sessions open outward-facing prose with this framing by default. Pitch text is neutral English, REGINALD all-caps, no em-dashes — house style was already compatible.

### 15. Home-Page Readability Tighten

After a full-width preview of the home page, both long prose blocks were broken into shorter, scannable paragraphs. The Introduction's opening paragraph (eight sentences) split into four paragraphs at the natural breaks (definition; machine-universe scope; content-estate scope; what CogNovaMX provides), and the opening sentence took the `section-lead` class so it carries visual weight. The provenance-layer section's four-part split was pulled out of one inline sentence into a real `<ul>` so the framing becomes glanceable, with the EU-AI-Act forcing-function clause hived off as its own short paragraph for the same reason. Every word of the original prose is preserved; only paragraph boundaries and one list element changed. The HTML was re-validated against the JSON-LD-in-head and HTML-hygiene gates and the page parsed clean; the cache was repurged after the push.

### 16. Home-Page Redesign: typography, line length, framework cards

A second wide-screen preview made it visible that paragraph splits alone were not enough. The diagnosis: the `section-lead` class was inert (never defined in CSS, so all my "lead" paragraphs rendered identical to body), and `section-inner` had no width cap (1600px on a wide screen), so even short paragraphs ran across half the screen and read as a slab. The fix is three new rules in `mx-unified.css`. `section-prose` caps text-only sections at `clamp(560px, 65vw, 780px)`, putting line length back into the 65 to 75 character readable range. `section-lead` is now a real rule — 1.5rem, white, weight 500, generous bottom margin — so opening sentences read as section statements instead of body. `framework-list` is a two-column card grid using `--mx-surface` and `--mx-border`, matching the proposition-card pattern the rest of the page uses, and collapsing to one column under 600px. The Introduction trimmed from seven paragraphs to five — the redundant "CogNovaMX provides consultancy, training, books, and tools" paragraph was cut because the offering cards directly above already do that job, and the DNA / memory-pool paragraph compressed to one sentence keeping the kernel. The provenance-layer section now opens with a real lead, sets up the gap in two sentences, hands off to the four cards, then carries three short follow-on paragraphs (EU AI Act forcing function; Schema.org gap-in-miniature; agentic-web economic case). The cache was repurged after the push.

### 20. Cog Enforcer v2.0 — Plan-Mode Gate

Two additions to the `UserPromptSubmit` enforcement pipeline that prevent Claude from entering plan mode when a scripted or hybrid cog is detected.

**URL and arg parsing.** `run-cog-enforcer.sh` previously told Claude to "pass args from user prompt" — leaving argument extraction as an inference task and giving Claude enough ambiguity to enter plan mode while it reasoned about the inputs. The hook now extracts the URL (full protocol URL or bare hostname with `https://` prepended) and the page count (`--max-pages N`, `N pages`, or `all pages` mapped to `--max-pages 999`) directly from the prompt text. The exact command is embedded in the enforcement message: `mx exec mx-audit https://mx.allabout.network --max-pages 999`. Nothing is left to infer.

**PreToolUse catch-all gate.** A new hook `pre-tool-use-plan-mode-gate.sh` is registered as a `PreToolUse` hook with an empty matcher (fires on every tool call). When `run-cog-enforcer.sh` detects a hybrid/scripted cog, it writes `/tmp/.cog-enforcer-active` with the current timestamp. For the next 90 seconds:

- `ExitPlanMode` — allowed (needed to escape if plan mode is already active)
- `Bash` — allowed and consumes the flag (the cog command executes)
- `EnterPlanMode` — blocked with an explicit message
- Any other tool (`Read`, `Write`, `TodoWrite`, etc.) — blocked

The effect when plan mode is already active: Claude's only permitted first action is `ExitPlanMode`. After that, only `Bash` is permitted. The enforcer does not need to know whether plan mode is active — the gate forces the correct sequence regardless.

### 17. Audit Gate Pipeline: Self-Repair Loop

The blocking/warn-mode design for gates 3 & 4 was replaced entirely. The problem: round counters were incrementing on every pipeline invocation rather than only when a blocking failure occurred, so 28 invocations had accumulated against a 3-round cap. The gates were silently skipped on every run. Rather than patching the counter logic, the underlying design was changed.

The new design treats gates 3 & 4 as a paired self-repair loop:

1. Fierce critic gate runs (threshold: warn) — issues logged to a findings sidecar
2. If issues found: `repair-report.js` calls Claude with the full report and all findings, applies the minimum necessary prose edits, writes the result back in place, sets `repaired = true`
3. LLM judgment gate runs (threshold: warn) — issues logged
4. If issues found: `repair-report.js` repairs again
5. Round counter increments once for the iteration
6. If nothing was repaired in this iteration: break early
7. After 3 total iterations across all runs for this domain: skip and log

`repair-report.js` is a new script with a strict prompt: do not change any numbers, scores, URLs, headings, section order, or table structure. A safety check aborts if the output is less than 80% of the original length (catches runaway truncation). Both round-counter files are updated together at the end of the loop so they stay in sync.

### 18. Audit Pipeline: initLog at Startup, All Errors to Audit Log

`initLog(logPath)` was moved to immediately after the log path is calculated — before `sweepOriginCaches`, before round-counter reads, before any other operation. Every `catch { /* ignore */ }` block in the pipeline was replaced with a `logEntry` call so errors are visible in the audit CSV. The prior design required a buffer because the log wasn't open yet when round-counter reads ran; the buffer is now gone. `sweepOriginCaches` corrupt-file catches, `parseSidecarFindings` parse errors, verification JSON parse failures, and platform.json parse failures all now write a `warn`-level entry to the audit log.

### 19. Documentation: Removed --warn-fierce / --warn-llm / --strict-fierce

The old flags and "auto-degrade to warn after round 3" language were present in nine files. All were updated to describe the self-repair loop instead:

- `scripts/audit-pipeline.js` — flags and auto-warn logic removed
- `scripts/cogs/mx-audit.cog.md` — gate table and step 9 instruction updated
- `.claude/skills/audit-site/skill.md` — gate degradation section replaced
- `.claude/skills/audit-report/skill.md` — convergence cap section replaced
- `.claude/skills/regen-report/skill.md` — step 5 updated
- `mx-audit/README.md` — gate 6 description updated
- `mx-audit/mx-audit-architecture.cog.md` — gate table and LLM judgment paragraph
- `mx-audit/prd.md` — gate table row and round-cap paragraph
- `datalake/knowledge/system/audit-gotchas.md` — entry rewritten

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (v1.0 evening) | 9 |
| Commits (v1.1 late evening) | 2 (mx-crm + hub) |
| Commits (v1.2 corpus-sweep run) | 22 (hub + mx-outputs) |
| Commits (v1.3 elevator pitch) | 2 (hub + mx-outputs) |
| Memory entries added (v1.3) | 1 (project_elevator_pitch.md) |
| Commits (v1.4 readability tighten) | 2 (hub + mx-outputs) |
| Commits (v1.5 home redesign) | 2 (hub + mx-outputs) |
| New CSS rules (v1.5) | 3 (section-prose, section-lead, framework-list) |
| Commits (v1.6 gate redesign) | 3 (mx-audit, mx-crm, mx-outputs) + hub |
| Files updated for gate redesign | 9 (pipeline + cog + skills + docs + architecture) |
| New scripts (v1.6) | 1 (repair-report.js) |
| Silent error catches fixed | 6 (sweep, round-counter reads, parseSidecarFindings, 3 JSON parses) |
| Hook bugs fixed (total) | 4 (v1.8: 2; v2.0: 2) |
| Commits (v1.7 plan-mode gate) | 2 (mx-crm log + hub pending) |
| New hooks (v1.7) | 1 (pre-tool-use-plan-mode-gate.sh) |
| Hook files modified (v1.7) | 2 (run-cog-enforcer.sh, settings.json) |
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
- Audit gates 3 & 4 are no longer blocking judges — they are self-repair agents; the pipeline never blocks on stylistic findings
- Round counters track total invocations per domain (cap 3); blocking/warn-mode distinction removed permanently
- All audit pipeline errors log to the audit CSV; no stderr fallback, no silent ignoring
- Cog enforcer now parses URL and page-count from the user prompt and emits the exact `mx exec` command; no inference left to Claude
- A `PreToolUse` catch-all gate blocks all tools except `ExitPlanMode` and `Bash` when cog enforcement is active; plan mode cannot be entered and cannot persist through a cog-run turn

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
| 915ca68d | Bump mx-outputs: gitignore Office lock-files; evening report v1.2 |
| 82f33022 | CHANGELOG v1.94: writing-style codification + three corpus sweeps |
| 6466406c | LEARNINGS v4.9: corpus-sweep over-application + inline-list mistake |
| 8f3d59c | (mx-outputs) Add elevator-pitch section to mx-site landing page |
| c8f6303 | (mx-outputs) Evening report v1.3: elevator pitch landed on mx-site home + saved to memory |
| 3d1a4618 | Bump mx-outputs: elevator pitch on mx-site landing page; evening report v1.3 |
| e32e35b5 | CHANGELOG v1.95: elevator pitch on mx-site landing page + saved to memory |
| 1959ca1 | (mx-outputs) Improve readability of mx-site landing-page text blocks |
| d156218 | (mx-outputs) Evening report v1.4: home-page readability tighten |
| 26686369 | Bump mx-outputs: home-page readability tighten; evening report v1.4 |
| 62ec26c6 | CHANGELOG v1.96: home-page readability tighten |
| 526fabe | (mx-outputs) Redesign mx-site home prose sections: typography, line length, framework cards |
| cfe5081f | Hub: bump mx-outputs for home redesign + this report v1.5 |
| 0618cc8 | mx-audit: self-repair loop replaces blocking gate design; add repair-report.js |
| 6cf33da | mx-crm: dotfusion.com audit run 2026-05-08 — gates passed, PDF generated |
| 47646d6 | mx-outputs: dotfusion.com audit published outputs 2026-05-08 |
| 4001c5e6 | feat: audit gate self-repair loop — repair-report.js, initLog at startup, error logging |
| 0a13a13d | docs: CHANGELOG v1.99 and LEARNINGS v4.11 — audit gate self-repair loop |
| de19c5d | mx-crm: append dotfusion.com collect-run log entries 2026-05-08 evening |
| *pending* | Hub: cog enforcer v2.0 plan-mode gate + this report v1.7 |
