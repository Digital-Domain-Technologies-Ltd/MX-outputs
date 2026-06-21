---

title: "Co-Directors Report — 10 February 2026 (Session 2: The Machine Experience)"
created: "2026-02-10"
version: "1.0"
author: Tom Cranstoun

type: info-doc
mx:
  audience: business
  confidential: true
  sessionType: full
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/interview/2026-02-10-mx-view-interview.md
  purpose: "Co-Directors Report - 10 February 2026 (Session 2: The Machine Experience)"
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - 10 February 2026 (Session 2: The Machine Experience)"]

---


# Co-Directors Report — 10 February 2026 (Session 2)

## Summary

Strategic interview session that redefined the MX App from a companion web browser into a full web transformation engine. Tom articulated a concept called **The Machine Experience** (the MX View) that fundamentally changes what the MX App does: it generates personalised replacement pages from cog metadata, stripping out ads, dark patterns, and web annoyances, and presenting the user with an agent-written narrative tailored to their personal cogs. This is the defining feature of the platform and the headline for the Frankfurt demo. The privacy model is the core pitch: personalisation without sharing.

## What Was Decided

### The Machine Experience (MX View)

The MX App is a web browser. When a website has cog metadata, the app detects it, matches it against the user's personal cogs, and generates a **replacement page** — The Machine Experience. The original website's design is irrelevant. The cog data is the source. The user's cogs shape the output.

The MX View is layered:

1. **Matched results** — only what's relevant to this user (safe dishes, accessible routes)
2. **Full cog data, reordered** — everything the site offers, ranked by personal relevance
3. **Conversational summary** — the agent writes a personalised overview
4. **Interactive dialogue** — ask questions, drill into details, book

### Two Modes

| Mode | Trigger | What Happens |
|------|---------|--------------|
| **Cog mode** | Site has cog metadata | Perfect MX View. Agent narrative. Fully personalised. |
| **Cleanup mode** | Site has NO cog | Strip ads, cookie banners, carousels, infinite scroll, dark patterns. Clean but not personalised. |

### What Gets Stripped

Ads. GDPR/cookie banners. Infinite scroll. Carousels. "Click here to find out more" traps. Multi-page pagination hooks. Moving banners. Dark patterns. All the annoyances that make the modern web hostile.

The generated page is as MX-compliant as possible: clean, accessible, relevant.

### "Always MX View" Preference

Users can set in their personal cog: "always present the MX View." They never see the original page. The original website becomes **source code** for the MX engine. The user browses a transformed web.

### Consent as a Cog

GDPR consent preferences live in the personal cog. Set once, applied everywhere. No per-site cookie banners. The MX engine reads the consent cog and applies it automatically.

### Cache and Learn

First visit to any site: real-time MX View generation (brief wait). Subsequent visits: cached, instant. The engine learns site structure over time.

### Notification Mechanism (Accessibility-Adaptive)

The app signals an available MX View through three channels, adapting to the user's accessibility cog:

- **Subtle indicator** — icon in address bar (like HTTPS padlock)
- **Banner** — "This site speaks cog. Switch to your personalised view?"
- **Voice prompt** — "This site has a cog. Want me to show you what matters to you?"

Sites without cogs get a gentle nudge: "This site doesn't speak cog yet."

### The Privacy Paradox (Core Pitch)

**Personalisation without privacy intrusion.** Every personalisation system today (Google, Meta, Amazon) requires users to give up their data. MX inverts the model:

- The user's cogs stay on their device
- The site's cogs are public
- The AI agent matches them locally
- Nobody shares anything with anyone
- The result is deeply personal
- The data flow is zero

This is the differentiator. This is the headline. This is the pitch.

### Two-Way Feedback Loop

- **User** doesn't like what they see? Update their cogs. MX View changes instantly, locally, privately.
- **Site owner** doesn't like the result? Update their cogs. All MX Views improve for all users.
- **Fully private.** No user data flows to the site owner. Ever.
- **Site owners get Preview mode** — test through sample personal cog profiles ("Show me what a wheelchair user sees").

### The Joymaker Writ Large

Pohl's joymaker was one device per person. MX makes **every cog-enabled object** a joymaker. The restaurant IS a joymaker. The museum IS a joymaker. Every website IS a joymaker. The planet is wired.

Three audiences, one architecture:

- **Site owners** get personalisation at scale without privacy intrusion
- **Users** get appropriate content without sharing their interests
- **Robots** know where they are and what's around them (vision, not demo)

### Business Model: Lift and Shift

The MX engine that generates the MX View can also be used by site owners to **migrate their current site to MX-compatible architecture**:

- Content extracted and structured into cogs
- Datalake + Intent CMS architecture
- Cog-Nova-MX hosts the resulting site
- Revenue: consulting (Tom at standard rate) + hosted platform (recurring)
- Infrastructure ready: datalake concept, Intent CMS concept, static hosting, Reginald

### Frankfurt Demo Changes

| Element | Previous | Now |
|---------|----------|-----|
| Mobile | iPhone | **Android** (Tauri v2 iOS unstable) |
| Desktop | One Mac | **Multiple Macs** |
| Headline | Companion web demo | **The Machine Experience** |

Multi-Mac setup demonstrates simultaneously:

- Cross-device sync (edit cog on Mac 1, MX View updates on Mac 2)
- Different people (Tom's view vs wheelchair user's view)
- Different identities (Personal Tom vs Consultant Tom)
- Scale (multiple users, same website, different Machine Experiences)

## Decisions Made

1. **The Machine Experience** is the name for the personalised replacement page
2. **Android replaces iOS** for the Frankfurt demo (Tauri v2 iOS instability)
3. **Multiple Macs** at the demo, not just one
4. **Privacy paradox** is the core pitch: personalisation without sharing
5. **Two modes**: Cog mode (personalised) and Cleanup mode (strip dark patterns)
6. **"Always MX View"** is a personal cog preference
7. **Consent as a cog** replaces per-site GDPR banners
8. **Lift and shift** is a revenue stream: migrate sites to MX-compatible architecture
9. **Robots** are vision-only, not part of the Frankfurt demo
10. **Build plan** needs complete restructure around the MX View as centre of gravity

## Open Questions

1. How does Cleanup mode handle JavaScript-rendered content (SPAs)?
2. What is the minimum viable MX View for the Frankfurt demo?
3. Does the lift-and-shift service need its own Canon initiative?
4. How does "Always MX View" interact with sites that require JavaScript for functionality (banking, forms)?

## Next Steps

1. Update product brief (v3) with Machine Experience concept
2. Rewrite build plan phases around MX View
3. Update Chapter 15 with Machine Experience vision
4. Begin Tauri v2 Android scaffold

---

*Generated by co-directors-report.cog.md on 2026-02-10 (Session 2)*
