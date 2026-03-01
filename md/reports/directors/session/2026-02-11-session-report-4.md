---
title: "Co-Directors Report — Maxine Vision and Product Infrastructure Complete"
created: "2026-02-11"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidentiality: internal
---

# Maxine Vision and Product Infrastructure Complete

## Summary

The most significant day since MX OS was conceived. Two things happened: Tom articulated the product vision — the Joymaker prototype is now called Maxine, a distributed AI partner accessible from any device — and the Electron app completed its product infrastructure phase. The app now has an embedded web server, favourites, history, DevTools, singleton mode, live reload, and a version display. Phase 2 of the roadmap is done. The path to Frankfurt is API layer, then phone client, then voice.

Separately, the entire MX ecosystem underwent a terminology rename (ai→sop across 120+ files and 7 submodules), and MX OS gained a unified boot system that takes a fresh machine from zero to operational in one command.

## The Insight — Maxine

During a session building the Electron prototype, Tom said:

> "Joymaker is the prototype name. It is not a web browser. The web browser is a capability. The Joymaker is a human interface to you, Maxine."

This reframing changes what we are building:

| Before | After |
|--------|-------|
| Desktop browser prototype | Distributed AI partner |
| Browser is the product | Browser is one capability |
| Desktop only | Phone, tablet, laptop, any screen |
| Localhost tool | Server that clients connect to |
| Claude-specific | AI-agnostic architecture |
| Text only | Text and voice from day one |

The product is called **Maxine**. The embedded web server (localhost:3456) we added today is the seed of the Maxine server. It grows into a full API endpoint serving any client — Electron desktop, phone PWA, future devices.

This vision is captured in three documents:

- `MX-Canon/MX-App/deliverables/maxine-vision.cog.md` — product vision
- `MX-Canon/MX-App/uber-maxine-plan.cog.md` — master plan (single source of truth for current state)
- `joymaker-soul.md` — updated to v2.0 with the Maxine evolution

## What Was Built

### MX App — Product Infrastructure (Phase 2 Complete)

Everything needed for a demonstrable product:

- **Embedded web server** — Node HTTP server, zero dependencies, localhost:3456, configurable for LAN access
- **Favourites** — Star button, favourites bar, JSON persistence
- **History** — Auto-recorded browsing history, sidebar tab
- **Collapsible match section** — Chevron toggle with count badge
- **DevTools** — Right-click context menus, Cmd+Opt+I/J shortcuts
- **Singleton mode** — One instance in dev, multiple in production
- **Live reload** — electronmon watches files, auto-restarts on changes
- **Pre-launch cleanup** — Kills stale processes and ports before restart
- **Version in title bar** — Reads from package.json

### MX OS Boot System

- `mx-boot.cog.md` — canonical action-cog with 6 actions: preflight, install, configure, init, status, route
- `boot.sh` — shell entry point that works from zero (no $MX_HOME, no npm, no Claude required)
- `npm run boot` / `npm run boot:status` — Node entry points
- INSTALLME.md updated: one command installs everything

### Claude Code Hooks

Two automated hooks ensure operational memory:

1. **Session start** — reads the uber plan into every new session's context
2. **File change** — reminds to update the uber plan when mx-app/ files change

### SOP Terminology Rename

All `ai-` prefixed YAML field names renamed to `sop-` (Standard Operating Procedure) across 120+ files and 7 submodules. Business rationale: "We do not expose AI to users or customers."

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits today | 33 |
| Files changed | 259 |
| Lines added | 13,496 |
| Lines removed | 1,414 |
| Canon files touched | 35 |
| Session reports filed | 4 (including this one) |
| Cogs created today | 6+ (vision, uber plan, boot, concepts, train analogy, blog generator) |

## Decisions Made

1. **Product name: Maxine** — The Electron prototype was called Joymaker. The product is Maxine. Rename pending across codebase.
2. **AI-agnostic architecture** — Claude today, any LLM tomorrow. The router abstraction is Phase 6.
3. **Phone PWA as first mobile client** — Not a native app. A Progressive Web App connecting to the Maxine server over LAN or cloud.
4. **Text and voice from day one** — Both channels as equal interfaces, not voice as an afterthought.
5. **SOP not AI in customer-facing language** — All metadata fields renamed. The word "prompt" becomes "runbook". Action-cogs are SOPs.
6. **One-command install** — `bash boot.sh` takes a machine from zero to operational.

## Next Steps

1. **Phase 3: API Layer** — REST endpoints on the embedded server. This is the bridge to distributed Maxine.
2. **Joymaker → Maxine rename** — Title bar, splash, package.json, comments. Low priority but tracks the vision shift.
3. **Publish "Content That Manages Itself"** — Blog post ready for allabout.network.
4. **Frankfurt countdown** — 90 days. Phase 3 (API) and Phase 4 (phone PWA) are the critical path.

## What This Means for Investors

The product story just got significantly stronger. "A cog-aware web browser" was a demonstration tool. "A distributed AI partner accessible from any device" is a platform. The architecture is real — we have a working server, a working desktop client, and a clear path to phone and voice. The Frankfurt demo script writes itself: same website, different personal cogs, different Machine Experience. Desktop, then phone, then voice. Three devices, one Maxine.

The one-command install (`bash boot.sh`) also matters for due diligence. An investor's technical advisor can clone the repo and have MX OS running in under a minute.

---

*Session 4 of 4 on 11 February 2026. The most productive single day in MX history.*
