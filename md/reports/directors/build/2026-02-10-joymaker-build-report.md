---
title: "Co-Directors Report — The Joymaker Build"
created: "2026-02-10"
version: "1.0"
author: Tom Cranstoun and Maxine

mx:
  audience: stakeholders
  confidential: true
  session-type: full
---

# Co-Directors Report — The Joymaker Build

## Summary

The Joymaker is real. In a single afternoon session, we built working software that implements the core Machine Experience: a cog-aware web browser that detects metadata, generates personalised replacement pages, and manages personal cogs on-device. This is not a mockup, not a wireframe, not a slide deck. It is a running Electron application on Tom's Mac. Phase 1 of the Frankfurt demo is complete. Three months remain until the CMS Summit on 12 May 2026.

Frederik Pohl described the Joymaker in 1969. Fifty-seven years later, his words appear on the splash screen of ours: *"The Joymaker is your most intimate friend. It will guide, advise, entertain, and protect you. It is your link to the world."* The lineage is deliberate and the ambition is literal.

## By the Numbers

| Metric | Value |
|--------|-------|
| Session commits | 3 (feat, fix, docs) |
| New files created | 51 |
| Lines of code added | 17,486 |
| Rust backend stubs | 14 modules |
| Node.js backend | 478 lines (functional) |
| Frontend JS | 902 lines across 5 modules |
| CSS | 796 lines across 4 stylesheets |
| HTML views | 3 (shell, splash, demo) |
| Demo cogs | 1 (The Highland Kitchen restaurant) |

## What Was Built

### The Application

**MX Joymaker** (`mx-app/`) — a desktop application built on Electron with a dual-view architecture:

- **Shell view** (top 56px): Address bar, navigation buttons, cog indicator, cleanup toggle, view switcher, personal cogs sidebar, voice button, and the MX wordmark
- **Content view** (below): A full Chromium browser that loads any URL natively — not an iframe, not a webview wrapper, but a real browser engine

The two views are independent `WebContentsView` instances inside a single `BaseWindow`. The shell controls the content. The content knows nothing about the shell.

### Cog Detection

When the content view loads a page, JavaScript is injected to scan for `<meta name="cog:...">` and `<link rel="cog">` tags. If found, the cog indicator in the address bar turns green. If not found in-page, a server-side fallback fetches the HTML and parses it. This dual-detection strategy handles both traditional sites and single-page applications where meta tags load late.

### MX View — "Their Page, Your Page"

When a cog is detected, the user can toggle between the original page and the **MX View** — a personalised replacement page generated from the cog's YAML metadata and markdown content. The MX View includes:

- Metadata pills (category, type, status)
- Tags
- The cog's markdown body, rendered to HTML
- **Personal cog matches** — scored against the user's own cogs

This is the core promise working end-to-end: visit a restaurant with a cog, and your dietary requirements match against their menu. Their page becomes your page.

### Personal Cogs

Personal cogs live on the user's device at `~/.mx-app/`. The sidebar shows the collection, supports viewing and editing, and switches between identity layers (base, consultant, speaker, business). Zero data leaves the device. Privacy by architecture, not by policy.

### The Matching Engine

A scoring algorithm compares site cog metadata (tags, category, type) against personal cogs. Category-specific rules apply: restaurants match against dietary and accessibility cogs; conferences match against speaker profiles. Matches appear in the MX View with relevance scores.

### Cleanup Mode

On sites without cogs, the cleanup engine strips cookie banners, newsletter popups, fixed position overlays, and ads. A subtle banner appears at the bottom: *"This site doesn't speak cog yet."* It auto-dismisses after 8 seconds.

### The Splash Screen

A Pohl-inspired boot screen with:

- Spinning cog SVG with pulsing red core
- "MX Joymaker" title and "The Machine Experience" tagline
- The Pohl quote in full
- Loading bar during boot, product credit when toggled from the MX wordmark

The splash exists in two modes: **boot** (loading indicator, auto-dismisses when the app is ready) and **about** (product credit, close button, toggled from the MX wordmark). It was the final piece built — solving the flash of unstyled content that appeared when the app first launched.

### Demo Infrastructure

A demo server with a restaurant page (`The Highland Kitchen`) carrying full cog metadata: location, cuisine, dietary options, accessibility, booking links. This is the rehearsal ground for the Frankfurt demo.

## Technical Decisions Made

| Decision | Rationale |
|----------|-----------|
| **Electron over Tauri** | Tauri v2's multi-webview is desktop-only and immature. Electron's `WebContentsView` API is stable, documented, and delivers the dual-view architecture we need. The Tauri scaffold remains for future cross-platform work. |
| **Plain HTML/CSS/JS** | No React, no Vue, no framework. The shell is 146 lines of HTML. This is deliberate — the app must be comprehensible to any developer, and the complexity lives in the cog system, not the UI toolkit. |
| **Node.js backend** | The backend runs in Electron's main process. Cog parsing, matching, MX View generation, and cleanup are all server-side JavaScript. This keeps the content view sandboxed and the shell view lightweight. |
| **js-yaml only dependency** | The entire app has one runtime dependency. Everything else is built from scratch — the markdown renderer, the matching engine, the MX View generator. No supply chain risk. |
| **Splash as separate WebContentsView** | Not a CSS overlay, not a modal — a dedicated view that renders on top (z-order by insertion order) and is destroyed when dismissed. This avoids DOM conflicts and gives the splash its own lifecycle. |

## The Pohl Connection

The Joymaker is named after Frederik Pohl's 1969 novel *The Age of the Pussyfoot*, in which every citizen carries a device that "will guide, advise, entertain, and protect you." Tom read the novel as a youth. The parallel is not metaphorical:

| Pohl's Joymaker (1969) | MX Joymaker (2026) |
|-------------------------|---------------------|
| Thin client device | Cog file (`.cog.md`) |
| Central computers | Cloud AI agents |
| Voice interaction | Voice command + agent response |
| Personal interests profile | Personal cogs at `~/.mx-app/` |
| One per person | Every object is a joymaker |

The splash screen carries his words deliberately. This is the product's soul.

## Frankfurt Countdown — What Remains

**CMS Summit, Frankfurt: 12 May 2026 — 91 days from today**

### Phase 1: Browser Shell — COMPLETE

The browser launches, navigates, detects cogs, generates MX Views, manages personal cogs, and cleans up non-cog sites. The splash screen boots cleanly.

### Phase 2: MX View Engine — Partially Complete

Cog fetching, parsing, and rendering work. Remaining: per-URL cache system, polish to MX View styling, more demo cogs on allabout.network.

### Phase 3: Personal Cogs + Matching — Partially Complete

Sidebar works, identity layers switch, matching scores display. Remaining: sample cog collections for the three demo profiles (Tom base, wheelchair user, consultant Tom).

### Phase 4: AI Agent + Narrative — Not Started

Wire Claude as the dialogue agent. Prompt construction from site cog + personal cogs + guardrail action-cog. This is where the Machine Experience goes from data display to personalised narrative. Priority: must-have for Frankfurt.

### Phase 5: Voice + QR Discovery — Not Started

Text-to-speech, speech-to-text, QR scanning. The "Book the restaurant" moment. Priority: must-have for Frankfurt, but can use typed commands as fallback.

### Phase 6: Multi-Device + Polish — Not Started

Encrypted sync, three demo profiles, Android build, rehearsal. Priority: sync is nice-to-have; three Mac profiles and rehearsal are essential.

### Priority Stack for Frankfurt

1. AI agent dialogue (Phase 4) — the narrative is the demo
2. Three demo profiles with distinct personal cog collections
3. Voice command ("Book the restaurant")
4. QR code scanning (the physical-to-digital bridge)
5. Polish and rehearsal
6. Android (stretch goal)

## Open Questions for Co-Directors

1. **Demo hardware**: Do we have access to three Macs for the Frankfurt stage demo? The three-profile demonstration (base Tom, wheelchair user, consultant Tom) is the centrepiece.
2. **LLM provider**: The AI agent needs an API key. Claude (Anthropic) is the intended provider. Do we need a backup provider for resilience?
3. **allabout.network demo cogs**: The demo needs cog-enabled pages on allabout.network (restaurant, product, event). When should we deploy these?
4. **Conference WiFi**: Frankfurt conference WiFi is unreliable. Pre-cached LLM responses and a mobile hotspot are planned mitigations. Any other suggestions?

## What Tom Said

*On what today proved:* "It's real now. The Joymaker stopped being a concept document and became running software. That changes the conversation."

*On seeing the splash screen:* Pride, urgency, and joy. The Joymaker made joy. That's the whole point.

*On the headline for this report:* Frankfurt countdown. Three months. Phase 1 is done. Here's what's next.

---

*Generated by co-directors-report.cog.md on 2026-02-10*
