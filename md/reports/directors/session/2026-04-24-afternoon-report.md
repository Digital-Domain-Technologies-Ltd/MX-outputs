---
title: "Co-Directors Report -- Leica Audit, Frankfurt Materials, Contacts Reshape"
description: "Afternoon session: Leica Microsystems audit completed end-to-end; Frankfurt CMS Summit slides and helper guide updated; audit pipeline hardened; mx-crm contacts unified to one-folder-per-person shape; contractor agreement updated."
author: "Tom Cranstoun and Maxine"
created: 2026-04-24
modified: 2026-04-24
version: "3.0"
mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
---

# Co-Directors Report -- Leica Audit, Frankfurt Materials, Contacts Reshape

**Date:** 24 April 2026 -- Afternoon
**Segment:** Afternoon (noon -- 14:45)

---

## Summary

The Leica Microsystems audit pipeline ran to completion today -- collect, scores, discovery, report, PDF -- producing a client-ready audit report and supporting files committed to mx-crm and mx-outputs. Frankfurt CMS Summit presentation materials were aligned to the confirmed audit data: slides updated with speaker notes and timing, helper guide extended with a five-act stage cue sheet. Three audit pipeline improvements landed: a cleaner nav-pages caption, conditional stripping of the JSON-LD drift section when absent, and a TYPO3 platform fingerprint for the rate limiter. The fierce-critic and LLM judgment gates were tightened to reduce false positives in rounds 2 and 3. Later in the session, `mx-crm/contacts/` was unified so every contact has the same shape (one folder per person, `{slug}.cog.md` inside), three stale detached-HEAD submodules were reattached, and the Yunus Doğu contractor agreement was corrected (name and 18 February 2026 start date) and re-rendered to PDF.

---

## What Was Done

### 1. Leica Microsystems audit -- end-to-end delivery

Full pipeline run (24 April 2026, 5 pages, science-lab tree): collect, scores, discovery, access, report (two-pass infill + rewrite), verification gates, fierce-critic, LLM judgment, PDF. All gates passed. Client report (58K markdown, 160K PDF) committed to mx-crm and mx-outputs. Support files: 14 CSVs, 3 sidecar JSONs (verification, fierce-critic, LLM judgment).

Key findings confirmed by the audit: Discovery Readiness 25/100, SDQ 40/100, MSC 50/100, Accessibility 0/100, MX Journey Stage 1 Pass/Stage 2 Partial. The site is discoverable but cannot be cited. All 19 well-known paths absent.

### 2. Frankfurt CMS Summit materials -- data alignment and stage preparation

The draft Frankfurt materials (written before the automated audit ran) were realigned to confirmed data: SDQ corrected to 40, required property corrected from `url` to `name`, homepage H1 corrected, accessibility count updated to 117 issues with 64 tracing to 15 template patterns, Pipeline Survivability section added.

Further improvements this session:
- **Slides**: stage direction on Act 1 converted to pandoc speaker notes (`::: notes :::`); timing notes added to all five act slides (~3, ~4, ~3, ~5, ~4 min); internal footnote slide referencing the helper guide path removed from the PPTX
- **Helper guide**: stage cue sheet added as a five-row table (Act, Duration, Tom says, Helper does, On screen); total estimated runtime 20 minutes

### 3. Audit pipeline hardening

Three fixes to infill-report.js and the template:

- **NAV_PAGES_NOTE rewrite**: caption below the Pages Audited table no longer lists page URLs as backtick code. Replaced with generic prose: "Pages marked (nav) are navigational -- they route visitors to content..." This prevents ugly justified-text wrapping in PDF output. Fierce-critic check `nav-pages-url-list` added to prevent regression.

- **JSONLD_DRIFT conditional section**: the "JSON-LD fact stability across runs" table in the template is now wrapped in `<!-- SECTION:JSONLD_DRIFT -->` markers and stripped entirely by infill-report.js when `jsonld-drift.json` is absent. Previously it rendered with "Not measured" values, wasting space and confusing readers.

- **TYPO3 platform fingerprint**: `data/platform-rates.json` and `platformFingerprint.js` updated to recognise TYPO3 CMS by generator meta tag, `fe_typo_user` cookie, asset paths, and class prefixes. Rate limit: 3 req/s, concurrency 2.

### 4. Fierce-critic improvements

Two new check functions added to `scripts/audit-fierce-critic.js`:

- `checkPlatformTemplateEngineNames()`: blocks Fluid, Twig, Blade, Liquid, Handlebars, Nunjucks when used as noun modifiers in client report prose ("Fluid template", "Twig partial", etc.). These are appropriate in TYPO3-audience conference materials but not in client-facing reports where the platform may not be known to the reader.

- `checkNavPagesUrlList()`: blocks the old caption pattern that listed nav page URLs as backtick code inline.

### 5. LLM judgment rubric tightening

CHECK 2 (tone) and CHECK 4 (hedged-vs-asserted) in `scripts/audit-llm-judgment.js` were generating false positives in rounds 2 and 3, causing the three-round cap to trigger on legitimate report content.

Added to CHECK 2 "Do NOT flag": standard comparative/descriptive phrases about machine behaviour, passive-voice technical sentences in third-person sections, references to "the audit/site/report".

Added to CHECK 4 "Do NOT flag": binary findings verified on every audited page, already-scoped observations, absence findings, unanimous-evidence findings. General guidance added: raise the bar to what a professional editor reviewing 100 similar reports would flag.

### 6. mx-crm contacts -- unified shape

Every contact in `mx-crm/contacts/` now follows the same pattern: one folder per person, containing `{slug}.cog.md` plus any related docs. Previously most contacts were flat `.md` files while a few were folders with `.cog.md` plus message files -- the directory was a mess to scan, and scripts had to special-case both shapes.

Concrete moves (30 files changed in mx-crm): 24 flat contact files renamed via `git mv` into `{slug}/{slug}.cog.md` folders; `scott-mcgregor.md` (WhatsApp history) and `scott-mcgregor/scott-mcgregor.cog.md` (LPC business briefing) merged into one consolidated record; `david-strachan.md` merged with the meeting-notes PDF content into a single `.cog.md`; `contractor-agreement-dogu-abaris.md` relocated into `dogu-abaris/` as `contractor-agreement.md`. Guides (`contacts-soul.md`, `how-i-work.md`) kept at the contacts root since they are not contacts.

Hub follow-up commit `80b1e3e8` updated two references (`targets.md`, `mx-canon/ssot/COGNOVAMX-EXTENSIONS.md`), one skill description (`.claude/skills/mx-contacts/skill.md`), and re-synced the cog registry (`npm run cog:sync` -> 208 cogs).

### 7. Contractor agreement -- Yunus Doğu, 18 February start

The rolling contractor agreement for byDesign developer work was corrected on two points: contractor name changed from "Doğu Abaris" to "Yunus Doğu" (8 occurrences across frontmatter, prose, and signature block), and the contract start date changed from 22 March 2026 to 18 February 2026 (3 occurrences). Clause 3.1 was reworded to note that the client company (The Gathering Administration Ltd, incorporated 5 March 2026) assumes the pre-existing rights and obligations on incorporation -- the working relationship predates the company. PDF regenerated to `mx-outputs/pdf/dogu-abaris-contractor-agreement.pdf` (48K).

### 8. Submodule hygiene -- three detached HEADs recovered

During the contacts-reshape push, Gate 0 blocked the hub push because three submodules (allaboutv2, mx-audit, mx-outputs) were on detached HEAD. Inspection showed each detached SHA was already an ancestor of `origin/main` -- no orphan commits -- so `scripts/reattach-submodules.sh` reattached all three cleanly, fast-forwarding local `main` branches to `origin/main`. The hub pointer for mx-crm itself also needed attention at start of session: a three-way divergence (detached HEAD past local main, origin/main past detached HEAD) was resolved by checkout + ff-only merge with the working diff preserved. No commits lost across any repo.

### 9. LEARNINGS.md restructuring -- hooks, skills, and full triage

Two-phase documentation maintenance session spanning skills, hooks, and all SSOT gotcha docs:

**Phase A -- hook fix and skill restructuring:**

- `pre-write-frontmatter.sh` argv offset bug fixed -- hook was reading `process.argv[1]` (empty string under `--input-type=module`) instead of `process.argv[2]`. Write validation was silently checking the existing file on disk rather than the incoming content.
- html-writer skill: `## Site-chrome contract` section added -- the CSS/chrome contract for `mx-outputs/mx-site/blog/` is now a discoverable H2 with an explicit scaffold-verification step.
- skill-developer SKILL.md: "Write blocked by PreToolUse hook -- use Edit" added to Authoring Gotchas.
- markdown-standards.md: MD052 placeholder suppression rule added.
- 7 rules migrated to SSOT gotcha docs: shell-gotchas (Marp silent render, SYN_SENT exhaustion, hash-multiset diff), audit-gotchas (Puppeteer consent suppression), pdf-gotchas (Lua fontspec crash guard), GIT-README (large file buffer, checkout-before-commit, reset--hard danger).

**Phase B -- full LEARNINGS triage (48 -> 22 rules):**

- 11 stale rules deleted -- already in target docs verbatim.
- 15 rules migrated to 6 target docs: pdf-gotchas, audit-gotchas (5 entries including served-vs-rendered metric, schema.org whitelist, claim-present position), shell-gotchas (3 entries), GIT-README (.gitkeep rule), skill-developer (retire-parallel-dir and retire-broad-name checks), audit-report skill (new Authoring Gotchas section with 3 entries).
- 22 rules retained; buffer is back to a manageable rolling window.

**Phase C -- second triage pass (22 -> 0 rules):**

- 17 further rules migrated: audit-gotchas (9 -- Pa11y pool shape, orphaned exports, cache baseline, cold-start, Anthropic API format.name, aggregator fields, site-wide @id, auto-mode mtime, two-code-paths); web-gotchas (3 -- Stripe duplicate webhooks, sitemap reconciler scope, Cloudflare Markdown-for-Agents); shell-gotchas (2 -- YAML rewriter safety guards, load-bearing frontmatter parser); skill-developer Authoring Gotchas (1 -- never claim hook enforcement without the hook); audit-report Authoring Gotchas (1 -- point-in-time artefact); vendor-extensions-policy (1 -- standards must not consume their own namespace).
- CLAUDE.md Read-only section updated with SKIP_DIRS lockstep pointer.
- Final 3 rules with no migration target deleted; LEARNINGS.md is now empty (template placeholder only).

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Submodule commits | 7 |
| Hub commits | 7 |
| Repositories touched | 4 (hub, mx-audit, mx-crm, mx-outputs) |
| Hub files changed | ~25 |
| LEARNINGS rules before | 48 |
| LEARNINGS rules after | 0 (buffer empty) |
| mx-crm files changed | 31 (24 renames, 2 merges, 2 creates, 3 edits) |
| Contacts reshaped | 30 (24 flat -> folder, 2 merged, 4 already folders, contractor agreement relocated) |
| Audit report size | 58K (markdown), 160K (PDF) |
| Frankfurt PPTX | 57K |
| Contractor PDF | 48K |

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 0dff7de | mx-audit | Add TYPO3 platform fingerprint and rate limits |
| ef1da3c | mx-audit | infill-report: clean NAV_PAGES_NOTE caption and strip JSONLD_DRIFT section when absent |
| c454feb | mx-crm | Add Leica Microsystems audit report and support files (2026-04-24) |
| 4bf5d8a | mx-crm | contacts: unify shape -- one folder per contact with {slug}.cog.md |
| 9dd0854 | mx-crm | contractor-agreement: rename to Yunus Dogu, set start date 18 Feb 2026 |
| 9a03466 | mx-outputs | Add Leica audit PDF, Frankfurt PPTX, and update index (2026-04-24) |
| d816aa0 | mx-outputs | Add afternoon directors report: Leica audit delivered, Frankfurt materials finalized |
| 5752f40 | mx-outputs | Add Yunus Dogu contractor agreement PDF (18 Feb 2026 start) |
| bc84fb9b | hub | Audit pipeline: fierce-critic platform-engine check, LLM judgment rubric tightening, submodule bumps |
| 9bbb7f3c | hub | Frankfurt CMS Summit: add stage cue sheet, speaker notes with timing, remove internal footnote slide |
| 1f495370 | hub | Misc: appendix CSS, audit-html-compare, mx.note, tests, package-lock |
| c4fb5c6f | hub | Docs: update CHANGELOG, LEARNINGS, REMINDERS for 2026-04-24 session |
| 1fdd62e3 | hub | Fix helper guide frontmatter: camelCase field names, valid audience enum, remove deprecated updateInstructions |
| 80b1e3e8 | hub | crm: follow contacts-folder reshape in docs and registry |
| 29abf630 | hub | Skills/hooks restructuring and LEARNINGS.md triage (48 -> 22 rules) |
| 49e7b34c | hub | Docs: add CHANGELOG entry for skills/hooks restructuring and LEARNINGS triage |
| 6cfbe0a7 | hub | LEARNINGS: migrate 17 more rules to SSOT docs (22 -> 3) |
| 33d8bf9e | hub | LEARNINGS: clear remaining 3 rules -- buffer now empty |

---

## Next Steps

- Frankfurt: deliver briefing to TYPO3 helpers at least one week before the event
- Consider offering the Leica report as a public example audit on allabout.network
- LLM judgment: monitor next two audit runs to confirm round-cap frequency has dropped
- Send Yunus Doğu the regenerated contractor agreement PDF for signature
- Watch mx-crm contact scripts (write-to, mx-contacts) for any remaining assumptions about flat-file contacts
