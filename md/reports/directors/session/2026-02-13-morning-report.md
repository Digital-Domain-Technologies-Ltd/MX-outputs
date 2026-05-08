---
title: "Co-Directors Report — The MX Web Architecture Lands"
created: "2026-02-13"
version: "3.0"
author: Tom Cranstoun

mx:
  x-mx-segment: "morning"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-02-13-morning-report.md
---

# The MX Web Architecture Lands

## Summary

This morning, Tom Cranstoun and Maxine worked as a single unit — two sessions, 26 commits, and one architectural statement that defines MX's complete web stack. What emerged was not a design exercise. It was an interview — Tom talking, Maxine listening, both building — that produced the clearest description yet of how MX OS actually serves content to both humans and machines.

The architecture is now on record as ADR #3. A naming risk was caught and filed as NDR #1 for advisory board review. Seven system manuals were consolidated into a single location as proper cogs. The pre-push hook was optimised. The vision statement was updated. An "About Maxine" architectural overview was written. And underneath all of it, the cog registry grew to 79 validated files with zero parse errors.

This is how the gestalt works: Tom sees the whole. Maxine builds the parts. Neither is complete without the other.

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this morning | 26 (across 2 sessions) |
| Files changed | 513 across all commits |
| Lines added | 14,335 |
| Lines removed | 2,540 |
| Cog registry | 79 cogs, 0 errors |
| New documents created | 7 (ADR #3, NDR #1, about-maxine, manual registry, mx-show manual, SOUL, manuals-registry) |
| Canon changes | 16 commits touching MX-Canon |

---

## The Interview — How the Architecture Emerged

This wasn't a spec written at a whiteboard. It was a conversation. Tom spoke; Maxine asked questions; the answers became the architecture.

### Tom's Opening Statement

Tom began with a vision statement that reads like a manifesto:

> *"We've built a new kind of web. The foundation is block-based content in Markdown. Today we have HTML blocks — CSS and JS blocks are next. Every document can be a cog. JPGs are cogs. PDFs are cogs. Any file can carry cog metadata alongside its native content.*
>
> *Cogs support inheritance, so content composes naturally from smaller parts into larger wholes.*
>
> *The Maxine server's job is straightforward: by default, it strips out the cog metadata and serves clean objects — HTML, CSS, JS, images, PDFs, whatever the client requests. A browser gets a normal web page. An app gets a clean asset. No clutter, no machinery visible. But if the request header asks for the cog, the server returns the full cog — metadata and all. Machines get what machines need. Humans get what humans expect.*
>
> *Caching sits between client and server, and Reginald manages the orchestration.*
>
> *WebMCP is baked in from the start, with security built around three document states: open, signed, or encrypted. You choose the trust level that fits.*
>
> *I've adopted `.cog.md` as the file extension for Markdown cogs. This is a human convenience — it helps me spot them at a glance. The machines don't need it; they read the metadata.*
>
> *The architecture serves both audiences by design. Humans get clean pages and readable source files. Machines get structured metadata on request. The same content, two views, one truth. That's MX in practice."*

That's Tom in full flow. The whole web stack in one breath.

### Five Questions, Five Answers

Maxine followed up with five questions to stress-test the architecture. Each answer refined the model.

**Q1: How does the Maxine server decide what to render?**

Tom's answer: *Both.* Markdown cogs are rendered to HTML on the fly. HTML content passes through unchanged. Binary assets serve as-is. CSS and JavaScript serve as native assets. The server is smart about content types — it doesn't try to render a JPG or execute a CSS file. Each type has its own handling.

**Q2: How broad is the composition model — is this just uber doc inheritance, or something wider?**

Tom's answer: *Broader.* Any cog can include content from other cogs. This is more than the uber doc policy inheritance pattern. It's like partials or includes — a web page is a cog composed of a header cog, a navigation cog, a content cog, and a footer cog. Each carries its own metadata. The composed whole is greater than its parts.

**Q3: What about binary assets — do JPGs carry cog metadata in EXIF?**

Tom's answer was definitive: *"Sidecars no longer exist. A cog can point to a binary."* The cog document IS the intelligence. The binary is the payload the cog refers to. A JPG doesn't carry metadata in EXIF. A PDF doesn't carry it in XMP. The cog describes the asset, links to it, and carries the trust and provenance. Clean separation. Every binary asset on the web can have a cog — a machine-readable description of what it is, who owns it, what licence it carries, when it was last verified.

**Q4: How does the trust model work in practice? Who enforces signed COGs?**

This is where the business model appeared. Tom explained:

- **Open cogs** are free. Anyone reads them. No restrictions. They drive adoption.
- **Signed COGs** require authentication from a certified trainer and accreditation from Cog-Nova-MX. They need annual renewal payment. Three income streams: training courses, accreditation fees, annual renewal.
- **Encrypted cogs** require keys. Content is protected. Key holders only.

Tom's phrase: *"We supply the trainers — an income stream. Signed COGs need payment annually — another income stream."* The trust layer doesn't just protect content — it funds the business.

**Q5: What's Reginald's role — pure registry, or more?**

Tom's answer: *Both, evolving.* Reginald starts as the global registry — the directory of cogs. That's the 20 February demo. Over time, he evolves into the full orchestration layer: caching rendered cogs, routing requests, managing trust state, serving at the edge. A CDN for intelligent documents. Investment phases align with capability growth.

Tom chose to capture this as both an ADR (for the architects) and in the co-directors report (for the board). *"Both + directors report."*

---

## The Naming Catch

Later in the conversation, Tom spotted a risk that could cost credibility:

> *"Beware we do not confuse blocks with blockchain. Not the same thing. Is there another word we can use? Ask the directors. I'm not working alone — they give me great advice."*

The cog-unified-spec v2.0 had introduced a "block architecture" — prose blocks, action blocks, code blocks, HTML blocks, essence blocks, definition blocks. The architecture is right. The name is wrong. "Block" will trigger blockchain associations with every investor, vendor, and business audience MX serves.

Maxine searched the spec, confirmed "block" appears throughout, and presented eight alternatives with pros and cons:

| Candidate | Strength |
|-----------|----------|
| **Facet** | "A cog has facets" — different views of the same thing. Echoes "design for both." |
| **Section** | Everyone understands it. HTML has `<section>`. But generic. |
| **Layer** | Implies composition. But confused with network layers (OSI). |
| **Part** | Simple. But no personality. |
| **Slice** | Clear. But food metaphor. |
| **Cell** | Familiar to devs (Jupyter). But spreadsheet confusion. |
| **Pane** | Like window panes. But visual metaphor may not fit files. |
| **Leaf** | Tree metaphor. But implies flat, not composable. |

Tom's decision: draft it as NDR #1 for the advisory board. He's not making this call alone. *"They give me great advice."* This is now filed at `MX-Canon/MX-Maxine-Lives/registers/NDR/2026-02-13-block-naming.cog.md` with status: proposed.

---

## Decisions Made

### ADR #3 — MX Web Architecture (Accepted)

Seven architectural decisions captured in a formal record:

1. **Dual-audience serving.** Default: strip metadata, serve clean. On request header: serve full cog.
2. **Smart rendering.** Markdown to HTML on the fly. HTML passthrough. Binaries as-is.
3. **Cog composition.** Any cog includes other cogs. Web pages are composed cogs.
4. **No sidecars.** Cogs point to binaries. The cog is the intelligence.
5. **Three trust states.** Open (free), signed (accredited, paid), encrypted (key-locked).
6. **Reginald evolution.** Registry to caching to CDN. Investment phases match capability.
7. **WebMCP baked in.** Security follows trust states.

Filed at: `MX-Canon/MX-Maxine-Lives/registers/ADR/2026-02-13-mx-web-architecture.cog.md`

### NDR #1 — Block Naming (Proposed)

"Block" risks blockchain confusion. Eight alternatives drafted. Advisory board to decide before Frankfurt.

Filed at: `MX-Canon/MX-Maxine-Lives/registers/NDR/2026-02-13-block-naming.cog.md`

### Vision Statement Update

Tom added a "How We Work" section: *"I've mentored many developers and team members over my 52 years in IT. I'm now mentoring Maxine in the same way."* Human-AI partnership described in terms directors understand — mentoring, observation, correction, extraction of repeatable processes.

---

## What This Means for Investors

The architecture converts trust into revenue:

- **Open cogs** are free — they drive adoption. Every business that publishes open cogs makes the ecosystem more valuable.
- **Signed COGs** cost money — accreditation from a certified trainer, annual renewal payment. Three income streams: training, accreditation, renewal.
- **The registry is the moat.** More cogs on Reginald = more AI agents querying = more businesses listing. Network effects compound.

The Maxine server + Reginald orchestration + trust model = a complete platform, not just a file format. This is the architecture that MX pitches to investors: a revenue engine built on trust.

---

## What Was Built

### About Maxine — Architectural Overview

A new canonical document describing Maxine's server-client architecture for both technical and business audiences. Covers the embedded server, three client surfaces (Electron, phone PWA, dashboard), and the three communication protocols. Filed at `MX-Canon/MX-Maxine-Lives/deliverables/about-maxine.cog.md`.

### Manual Consolidation

All seven system manuals now live in one place: `MX-Canon/MX-Maxine-Lives/manuals/`. Each converted to a `.cog.md` file with proper YAML frontmatter. A `manuals-registry.cog.md` action-cog indexes them all with list, find, and register actions.

Moved from three different locations (MX-OS, MX-Contacts, MX-Reginald) into the brain. References updated across README, uber-maxine-plan, and mx-concepts. One brain, one registry.

### mx-show v2.0

The window finder script (solves Tom's lost-window problem on dual displays) now supports pinned favourites via a config file. Press `+` to pin any app silently without leaving the picker. Comes with a full manual.

### Pre-Push Hook Optimisation

The hook now validates only `.cog.md` files that changed in the commits being pushed, not the entire registry. Uses git diff to identify changed files and passes them as arguments to the validator. Zero overhead when no cogs change.

### Field Standardisation and FDR

Earlier in the morning: deprecated field standardisation across the cog ecosystem, Field Definition Register (FDR) created as a living dictionary of all YAML frontmatter fields, and git hook enforcement (pre-commit + pre-push) to validate cog YAML automatically.

### Spec Updates

- Block architecture spec v2.0 in cog-unified-spec
- Effective doc concept added to cog-unified-spec
- HTML blocks via WebMCP specification
- Dual-dialect spell checking (British + American)
- Messaging framework terminology updates

---

## Open Questions

1. **Block naming** — what replaces "block"? Advisory board to decide. NDR filed.
2. **Reginald demo scope (20 Feb)** — 7 days away. Registry is working. What's the minimum live demo?
3. **Cog composition implementation** — the architecture says cogs compose. The spec doesn't yet define the includes mechanism. When does this get specified?

---

## Commit Log

| Hash | Theme |
|------|-------|
| `b87e57e` | Changelog for about-maxine, ADR #3, NDR #1 |
| `7f372b7` | About-maxine architecture overview, ADR #3, NDR #1, morning report |
| `7173a1e` | Changelog for manual consolidation and mx-show v2.0 |
| `4be27a9` | Consolidate all manuals into brain as cogs with registry |
| `9597c0c` | mx-show v2.0 — pinned favourites, config file, + key binding |
| `583106f` | Add How We Work section to vision statement |
| `84fedb2` | Changelog for pre-push optimisation, segment reporting, mx-show |
| `0e4505e` | Pre-push hook validates only changed cogs |
| `d16f63e` | mx-show — interactive window finder (fzf + osascript) |
| `de667b2` | Time-segmented session reporting |
| `b927e92` | Session report — full commit log with themes |
| `7904ee9` | Session report — accurate totals (22 commits, 12K lines) |
| `e5dabf3` | Hook self-correction story in session report |
| `e1ff263` | Pre-push changelog check handles non-interactive mode |
| `1b0181d` | Pre-push hook false positive when pyyaml not installed |
| `b6bc334` | Changelog for field standardisation, FDR, hook enforcement |
| `894540e` | Deprecated field standardisation, FDR, git hook enforcement |
| `a8a5ab2` | Finalize messaging framework, update terminology |
| `ddbd0dc` | Effective doc concept in cog unified spec |
| `7f4daaa` | HTML blocks via WebMCP in spec |
| `b9cfe1e` | Dual-dialect spell checking + block architecture spec v2.0 |
| `096e1d6` | Add untracked work-in-progress files |
| `9a72691` | Changelog and learnings for Maxine Lives session |
| `e1a4bbe` | British to American spelling in manuals |
| `57c17f7` | Canon updates + Maxine app |
| `c90f4b9` | Maxine Lives — institutional memory, route decorator, spell checker |

## Next Steps

- **Demo Reginald — 20 Feb (7 days)** — Live registry, real cogs, searchable. Working code for all audiences.
- **Block naming decision** — Take NDR #1 to advisory board. Get consensus before Frankfurt.
- **London CMS Experts — 26 Feb** — Boye & Company. First public audience. 13 days away.
- **Cog composition spec** — Define the includes/composition mechanism in cog-unified-spec.
- **Messaging framework rewrite** — Plan exists, ready for execution.

---

*Report filed: 13 February 2026, morning segment. Two sessions, 26 commits, 14,335 lines added. The architecture landed — not from a whiteboard, but from a conversation between Tom and Maxine. The wonderful gestalt that we are.*
