---
title: "Co-Directors Report - Gate Hardening, Prose Engine, Fable 5 Publication, and JS/CSS Carrier Guides"
description: "Evening covered Gate 25 data-loss fix, prose engine centralisation, Fable 5 blog post published to Zone 2 with WCAG overlay, frontmatter humanizer cog, JS and CSS carrier authoring guides, and Gitea audit delivery infrastructure."
author: "Tom Cranstoun"
created: 2026-06-14
modified: 2026-06-14
version: "1.4"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-14-evening-report.md
  purpose: "Evening covered Gate 25 data-loss fix, prose engine centralisation, Fable 5 blog post published to Zone 2 with WCAG overlay, frontmatter humanizer cog, JS/CSS carrier guides, and Gitea audit delivery infrastructure."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Gate Hardening, Prose Engine, Fable 5 Blog Draft, and Gitea Audit Infrastructure"]
---

# Co-Directors Report - Gate Hardening, Prose Engine, Fable 5 Publication, and JS/CSS Carrier Guides

**Date:** 14 June 2026 - Evening
**Segment:** Evening (since 5pm)

---

## Summary

A full evening across six streams. The most safety-critical work was hardening Gate 25, which had a restore loop that could silently destroy another session's uncommitted edits - now fixed with two structural guards. The prose/AI-tell detection engine was centralised into a shared library and shipped via a merged PR. A new blog post draft uses Anthropic's Fable 5 system prompt as the strongest external validation yet for MX OS architecture. The evening's second half completed the Gitea audit delivery infrastructure: 50 per-domain audit repos are now live on the local Gitea instance, the MX Content Cockpit has a new Gitea view showing all repos and delivery dates, and push events from Gitea arrive as live browser notifications that auto-refresh the view.

---

## What Was Done

### Gate 25 restore loop hardened against data loss

`scripts/check-tree-clean.cjs` runs generators to check the tree is clean, then restores any files the generators touched to their pre-run state. The restore loop previously used a simple `git checkout -- <file>` on anything that showed as modified after generators ran - meaning any file edited by a concurrent session could be wiped silently.

Two guards now protect every restore:

1. **Pre-run dirty check** - files already dirty before generators ran are never restored. A snapshot of dirty files is taken at the start; anything in that snapshot is skipped.
2. **Known-outputs check** - only files listed in `scripts/lib/generated-indexes.cjs` as generator outputs are eligible for restore.

The result: Gate 25 can only restore files that were clean at gate-start AND are declared outputs of a known generator. The confirmed data-loss scenario from 12 June cannot recur.

Additional fixes: Gate 7 received `.mx.yaml.md` skeletons for the new prose lib directories introduced by the centralisation work; Gate 11 was updated to exclude `mx-outputs/audit/` paths from the internal link checker, which was generating false positives on audit delivery folders.

### Prose and AI-tell detection engine centralised

All humanizer scanner modules (`scan-ai-vocab`, `scan-copula`, `scan-mechanical`, `scan-prose-patterns`, `scan-register`, `scan-stranded-preposition`, `scan-structure`, `scan-tics`, `scan-word-frequency`) were moved from their scattered locations into `scripts/lib/prose/`, with a shared entry point and consistent module contract. This shipped as a merged PR. The humanizer skill, review-docs, and any future prose-quality tool now import from one place rather than duplicating detection logic.

### Repository hygiene

All 29 stale remote branches (merged and abandoned Claude session branches) were deleted. The remote now carries only `main`. A `pr-merge-cleanup` action cog was written to formalise the workflow: list open PRs, check CI status, squash-merge the green ones, then delete all stale branches. Future sessions can invoke this directly rather than running the commands ad hoc.

### Fable 5 blog draft: the system prompt as a COG

A new blog draft argues that Anthropic's leaked Claude Fable 5 system prompt decomposes naturally into 13 MX COGs - with no residue and no forced cuts. The five structural problems the decomposition exposes (leakage-only readability, all-or-nothing versioning, model lock-in, no composability, no provenance) map directly to the problems MX and REGINALD solve. The draft was saved to `blog-drafts/` and passed through the full humanizer pass. It makes the case that The Gathering exists to standardise and govern what Anthropic built implicitly.

### Gitea audit delivery infrastructure

Every web audit the pipeline runs now lives in its own per-domain Gitea repository on the local Gitea instance, rather than in the `mx-outputs` GitHub submodule. The migration moved 50 domains - roughly 3,400 files - across in a single commit. Each repo carries a `README.md`, a root `.mx.yaml.md` folder descriptor, a `.gitattributes` file that routes PDFs to a download button rather than the browser's broken PDF renderer, and per-delivery date folders with the complete artefact set.

Three operational improvements followed the initial migration. The `app.ini` Gitea configuration was extended to raise the file-display limit so large JSON and CSV deliverables render rather than showing a "too large" warning, and to enable Gitea Actions for future automated workflows. A system webhook was registered pointing at the cockpit so every repo push fires an event to the running dashboard.

The `mx-outputs/.gitignore` was extended to exclude dated delivery folders permanently, and the 21 orphaned working-tree folders left behind by the `git rm` migration commit were deleted from disk.

### MX Content Cockpit - Gitea view and live push notifications

The cockpit gained a new "Gitea" view in the header dropdown. It scans the 50 local Gitea clones at `~/.gitea-audit-repos/`, builds a collapsible tree of repos and delivery dates, and shows file counts and direct links to each delivery in the Gitea web UI. No API round-trip on page load - the view reads the local clone directories directly for speed.

Push notifications are live. The cockpit now holds an SSE (Server-Sent Events) connection open to the server. When Gitea fires its webhook on a repo push, the server pulls the relevant local clone immediately and broadcasts an event to all connected browser tabs. If the Gitea view is active, it auto-reloads within 1.5 seconds to show the new delivery. If another view is active, a status bar message announces the push.

### Audit template quality fixes and quotes enforcement removal

A session-long debugging cycle exposed and fixed four interconnected problems in the audit quality machinery.

The audience classification handler was leaking the `[AUDIENCE_NOTICE_TEXT]` placeholder token into reports whenever the audience was not indeterminate. A defensive replacement now strips the token on the non-indeterminate code path, so it never reaches the rendered output.

The `x-mx-quotes` enforcement machinery was removed from the gate suite. The field remains available as an opt-in hint - prose scanners still use it when declared - but Gate 27 (pre-push freshness check), the pre-commit auto-population hook, and the `npm test` wiring are gone. The reason: as the repo grows, the populator treats all `> blockquotes` as verbatim external quotes, including template callout boxes, fixture output, and operational notices. Any time one changes, Gate 27 would block the push. The gate was generating more churn than value.

During the fix cycle, three `>` blockquote prefixes in the audit template were incorrectly converted to plain text. This removed the visual callout styling from rendered PDFs. All three were restored. The audit template directory is now excluded from the quotes populator so the restored formatting cannot trigger a re-extraction cycle.

Nine fable5 cog files in `mx-outputs` were declared as `action-doc` but carried no `x-mx-execute` block or `actionType` - a pre-existing cog validator failure that was blocking pushes. All nine were correctly demoted to `info-doc`.

### Fable 5 blog post published to Zone 2 with WCAG-compliant overlay

The Fable 5 blog draft moved from `blog-drafts/` through the full publication pipeline to Zone 2 HTML at `mx-outputs/mx-site/blog/drafts/`. The post uses Anthropic's leaked Fable 5 system prompt as evidence that MX OS architecture is the natural decomposition practitioners reach for independently.

The list of 13 COG files in the post was made interactive. Clicking any filename opens a modal overlay that fetches and displays the raw COG content without leaving the page. The overlay is built to WCAG 2.1 AA modal requirements: focus trap on Tab/Shift-Tab, return-focus to the trigger on close, keyboard activation (Enter and Space) on each filename, Escape and backdrop-click close, and full `role="dialog"` / `aria-modal` / `aria-labelledby` semantics. The first implementation failed contrast - the dark page theme's CSS variables bled into the overlay `<pre>` element, making text near-invisible. All overlay elements now carry explicit `#111111` text on `#ffffff`/`#f9fafb` backgrounds, independent of the page theme.

MX JSDoc metadata was added to `cog-viewer.js` (dogfooding the JS carrier format on the first script that needed it). The drafts lander was updated with four new post cards from this sprint.

### Frontmatter humanizer cog and script

Prose scanners mask YAML frontmatter before running, so em-dashes and unexpanded contraction forms in `description`, `purpose`, `x-mx-contextProvides`, and similar free-text frontmatter fields pass every gate silently. A new script (`scripts/fix-frontmatter-humanizer.cjs`) scans YAML frontmatter string values for em-dashes and - on blog-post surfaces - expanded auxiliary forms (`does not`, `it is`, etc.) where the Chatty register requires contractions. The `x-mx-quotes` field is skipped (verbatim content). A companion scripted action-cog (`frontmatter-humanizer.cog.md`) wraps the script with `mx exec` so any future session can run it as part of the humanizer workflow.

### JS and CSS carrier format authoring guides

Two new info-cogs cover how to author JS and CSS files as first-class MX carriers. `how-to-write-a-js-cog.cog.md` covers JSDoc `@mx:` tags, the two-zone model in a comment block, `contentType: script/module/worker`, `canonicalUri` vs `servedAt`, and the `cog-viewer.js` file as a worked example. `how-to-write-a-css-cog.cog.md` covers comment-block `@mx:` tags, `contentType: stylesheet/theme/component`, `:root` custom property recognition, and `mx-unified.css` as a worked example. Each cog cross-references the other. The combined draft (`how-to-write-a-js-css-cog.cog.md`) was replaced by the two focused guides.

### Documentation and cog updates

All audit-facing cogs and docs were updated to reflect the two-tier storage model: `gitea.cog.md` (v1.1) gained sections on Actions, system webhook, audit repositories, and the cockpit Gitea view; the audit architecture cog (v1.7) gained a new section describing the GitHub/Gitea split; the audit routing cog, README, and QUICKSTART all received Gitea environment variable documentation. The `audit-suite-sync` sentinel was bumped to `2026-06-14-a` across all eight lockstep files.

---

## Why It Matters

The Fable 5 post is now live in Zone 2 and ready for promotion to Zone 3 after Tom's final read. It is the most concrete external proof point MX has had. A leaked 1,585-line monolith decomposing cleanly into 13 typed cogs is not a coincidence - it confirms that the mental model MX formalises is the one practitioners reach for independently. That argument, published, is worth more to The Gathering's positioning than any internal architecture document.

The Gitea infrastructure solves a real operational problem: GitHub is the wrong home for per-audit artefacts. Deliverables are large, change frequently, and accumulate per client - they belong in a storage tier that can hold them privately and surface them to the auditor without polluting the main repository's commit history. The live push notifications mean the cockpit stays current without manual refresh; that matters when an audit run takes 45 minutes and the operator wants to know the moment results are ready.

The gate hardening work protects developer confidence in the tooling. A gate that can destroy work is worse than no gate.

---

## Decisions Made

- Restore eligibility requires both guards simultaneously. Either guard alone still allows edge-case data loss.
- The prose detection engine lives in `scripts/lib/prose/`, not in `.claude/skills/humanizer/`. Skills route; libraries do the work.
- `pr-merge-cleanup` is a SOP cog rather than a scripted cog - the merge step requires reading CI status and making a judgment call on each PR.
- Gitea is local-only for now. The instance runs on `localhost:3000` and is not exposed externally. External auditor handoff will use git bundles (Phase 7 of the migration plan), not direct Gitea access.
- The Gitea view reads local clone directories rather than hitting the Gitea API on page load. Faster, and avoids token exposure in the browser.

---

## Next Steps

- Promote the Fable 5 blog post from Zone 2 drafts to Zone 3 published (`npm run promote -- --republish`) once Tom has reviewed it
- Wire `frontmatter-humanizer` into the standard `/humanizer` session workflow so frontmatter is always scanned alongside body prose
- Monitor Gate 25 across the next few push cycles to confirm the guards hold under concurrent-session load
- Phase 4: wire the Gitea push into `scripts/audit-pipeline.js` so a completed audit run pushes to Gitea automatically
- Phase 7: build the auditor handoff tool - git bundle plus cover sheet PDF, triggered from the cockpit Unpack tab
