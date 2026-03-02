---
title: "MX Joymaker — Splash Screen, Co-Directors Report, Submodule Cleanup"
created: "2026-02-10"

mx:
  sessionStart: "2026-02-10T15:00:00Z"
  sessionEnd: "2026-02-10T17:49:00Z"
  duration: "~3 hours"
  contentType: "feature-implementation"
  status: "completed"
---

# Session Summary: MX Joymaker Splash Screen, Co-Directors Report, Submodule Cleanup

## Overview

This session continued from a prior conversation that built the MX Joymaker app (Phases 1-3 of the build plan). The prior session ended with the request for a Pohl-inspired splash screen. This session completed the splash screen system, created a co-directors report documenting the Joymaker build, disconnected the mx-collaboration submodule, and cleaned up all references.

The headline: **the Joymaker is real.** Phase 1 is complete. Frankfurt CMS Summit is 91 days away.

## What Was Accomplished

### 1. Splash Screen System (carried from prior session)

Built a two-mode splash screen for the Joymaker app:

- **Boot mode**: Spinning cog SVG, pulsing red core, Pohl quote, loading bar, "Initialising" status. Auto-dismisses when shell + content finish loading.
- **About mode**: Same design but replaces loading bar with "A product of Cog-Nova-MX Ltd" credit. Close button. Toggled from MX wordmark click.

Key technical solutions:

- Window hidden at creation (`show: false`) to prevent flash of unstyled content
- Splash added LAST as a `WebContentsView` (z-order by insertion order in Electron)
- Splash positioned at `y: SHELL_HEIGHT` so the 56px shell bar stays visible and clickable
- No preload on splash view: main process communicates via `executeJavaScript()`, splash signals via `document.title` change

### 2. Co-Directors Report — Joymaker Build

Created [2026-02-10-joymaker-build-report.md](../../MX-Canon/MX-CoDirectors/deliverables/2026-02-10-joymaker-build-report.md) using the full (interviewed) mode:

- Interviewed Tom with 3 questions: significance, feeling, headline
- Tom's answers: "It's real now" / Pride, urgency, joy / Frankfurt countdown
- Report includes: By the Numbers table (51 files, 17,486 lines), Pohl parallel table (1969 vs 2026), technical decisions table, Frankfurt priority stack, 4 open questions for the board

### 3. mx-collaboration Submodule Disconnected

Permanently removed `packages/mx-collaboration` from the hub repo:

- `git submodule deinit -f packages/mx-collaboration`
- `git rm -f packages/mx-collaboration`
- Cleaned `.git/modules/packages/mx-collaboration`
- Cloned standalone at `~/Documents/MX/mx-collaboration`
- Cleaned 5 files with live references (README.md, hub.md, next-steps-plan.md, add-new-repository.md)
- Left historical/narrative references in CHANGELOG.md, mx-init.cog.md, cog-registry.cog.md

### 4. Stylelint Configuration

Added `/* stylelint-disable-next-line property-no-vendor-prefix */` comments for all Electron-specific `-webkit-app-region` properties. Updated VS Code settings to ignore vendor prefix warnings for the Electron app. Created `.hintrc` for webhint configuration.

## Files Modified

### New Files

1. **[2026-02-10-joymaker-build-report.md](../../MX-Canon/MX-CoDirectors/deliverables/2026-02-10-joymaker-build-report.md)** - Co-directors report for Joymaker build session
2. **[.hintrc](../../.hintrc)** - webhint configuration (CSS compat warnings off)

### Modified Files

1. **[.gitmodules](../../.gitmodules)** - Removed mx-collaboration entry
2. **[README.md](../../README.md)** - Removed mx-collaboration from submodule lists
3. **[hub.md](../../.claude/mode-configs/hub.md)** - Removed mx-collaboration from repository map
4. **[next-steps-plan.md](../../next-steps-plan.md)** - Removed mx-collaboration from scan list
5. **[add-new-repository.md](../../datalake/guides/for-humans/add-new-repository.md)** - Updated example URL
6. **[app-shell.css](../../mx-app/src/css/app-shell.css)** - Stylelint disable comments for Electron properties
7. **[settings.json](../../.vscode/settings.json)** - CSS lint settings for Electron vendor prefixes
8. **[CHANGELOG.md](../../CHANGELOG.md)** - Added removal and report entries

### Deleted

1. **packages/mx-collaboration** - Submodule removed (cloned to ~/Documents/MX/mx-collaboration)

## Commits This Session

| Hash | Message |
|------|---------|
| `fcd8874` | feat: MX Joymaker -- Electron cog-aware browser with splash screen |
| `970a2b3` | fix: markdown lint -- blank lines before numbered lists |
| `3854544` | docs: changelog and learnings for Joymaker app build |
| `52ecf47` | feat: remove mx-collaboration submodule, add Joymaker co-directors report |
| `fec6bc5` | docs: changelog -- mx-collaboration removal and Joymaker co-directors report |
| `6cfdb96` | fix: stylelint disable for Electron vendor-prefix CSS properties |

All pushed to `origin/main`.

## Technical Details

### Splash Screen Architecture

The splash is a separate `WebContentsView` — not a CSS overlay, not a DOM element in the shell. This gives it an independent lifecycle and avoids DOM conflicts. Z-order in Electron's `BaseWindow` is determined purely by `addChildView()` insertion order (no `setZIndex` API). The splash must be added last.

Cross-view communication without preload:

- **Main to splash**: `splashView.webContents.executeJavaScript("...")`
- **Splash to main**: `document.title = 'splash-close'` (main watches `page-title-updated` event)
- **Mode selection**: URL hash `#about` triggers `body.about` CSS class

### Submodule Removal Pattern

Three-step removal: deinit, git rm, clean `.git/modules/` cache. Then grep the entire repo for remaining references and classify each as live (must remove) or historical (can keep). This prevented both broken references and unnecessary history rewriting.

## MX Principles Applied

1. **Canon wins** - Co-directors report follows the format defined in MX-Canon/MX-CoDirectors/SOUL.md
2. **Write like a blog** - Report uses narrative voice, not spec language
3. **Use existing standards** - Electron APIs, standard HTML/CSS/JS, no custom frameworks
4. **Design for both** - Splash screen works for humans (visual delight) and machines (boot sequence signal)

## Next Steps

### Frankfurt Priority Stack (from co-directors report)

1. **AI agent dialogue (Phase 4)** - Wire Claude as the conversation agent
2. **Three demo profiles** - Base Tom, wheelchair user, consultant Tom
3. **Voice command** - "Book the restaurant" moment
4. **QR code scanning** - Physical-to-digital bridge
5. **Polish and rehearsal**
6. **Android** (stretch goal)

### Open Questions for Board

1. Demo hardware: 3 Macs for Frankfurt stage?
2. LLM provider: Claude API key, backup provider?
3. allabout.network demo cogs: when to deploy?
4. Conference WiFi: mitigation beyond mobile hotspot?

### Reminders (from REMINDERS.md)

- [ ] Add `policy` to canonical field list (cog-unified-spec.md)
- [ ] Review business plans gaps (section 7 of business-plans-summary.md)

## Session Context

**Previous work:** Built MX Joymaker app across multiple sessions (Tauri to Electron pivot, Phases 1-3 implementation, splash screen request at end of prior session)

**This session:** Completed splash screen, created co-directors report, disconnected mx-collaboration, stylelint cleanup

**Status for next session:** Clean working tree (only .claude/settings.local.json modified). All commits pushed. Ready to start Phase 4 (AI agent dialogue) or address Frankfurt demo priorities.

---

**Session completed successfully.**
