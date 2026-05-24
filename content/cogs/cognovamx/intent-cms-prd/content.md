---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "Intent CMS — Product Requirements Document"
version: "2.0.0"
description: "The complete product requirements document for Intent CMS (MX OS). Defines the problem, architecture, five-layer model, MX Readiness Model, publishing zones, REGINALD, MaXinE, competitive position, and all functional and non-functional requirements."

created: 2026-05-09
modified: 2026-05-09

author: Tom Cranstoun

mx:
  contentType: info-doc
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: published

  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-canon/mx-os/intent-cms-prd.cog.md

  x-mx-category: mx-core
  partOf: mx-os
  refersTo:
    - cog-unified-spec
    - mx-principles
    - the-gathering-spec
    - reginald
  buildsOn:
    - what-is-mx-os
    - mx-concepts
    - business-benefits

  tags:
    - prd
    - product-requirements
    - intent-cms
    - mx-os
    - architecture
    - five-layers
    - readiness-model
    - cogs
    - reginald
    - maxine

  audience: both
  readingLevel: intermediate

  x-mx-version-notes: "v2.0.0 — sourced from MX-hub manuscripts (SOUL.md, UBERCOG.cog.md, what-is-mx-os.cog.md, chapter-15, chapter-18, machine-experience-manifesto, appendix-m, Glossary)"
---

# Intent CMS — Product Requirements Document (MX OS)

**Version:** 2.0 | **Date:** May 2026 | **Entity:** CogNovaMX Ltd | **Author:** Tom Cranstoun

---

## 1. The Founding Statement

"You are inside it."

The documentation is not describing a system. The documentation IS the system.

In Tom's framing: "Intent CMS" — content that carries not just data but declared intent.
Deane Barker's parallel concept: "Contentbase" (Aug 2025) — "Data is what it IS. Content is what it is FOR."

---

## 2. The Problem — In Concrete Form

A river cruise costs £2,030. An AI agent reads £203,000.

Three failure modes (every AI content problem traces to one):

1. **Discovery** — machine cannot find the right document
2. **Trust** — machine cannot verify the document is current or genuine
3. **Currency** — machine cannot know whether what it found is still true

**Scale:** Jan 2026 — Amazon (Alexa+), Microsoft (Copilot Checkout), Google (Business Agent) launched automated commerce within 7 days. 1M+ merchants now support machine-mediated transactions. The web was built for human eyes. Machines cannot reliably read it.

**Commercial impact:** Tailwind CSS laid off 75% of staff Jan 2026 after machine-driven traffic collapsed their ad revenue model. This is structural, not cyclical.

**The Convergence Principle:** patterns that work for machines also work for humans with disabilities. Fixing the machine problem fixes the accessibility problem. Same problem.

---

## 3. The Five Generations

| Generation | What it solved | What it created |
|---|---|---|
| Gen 1 Static files | Presence | Maintenance |
| Gen 2 Database CMS (WordPress, Drupal, Sitecore) | Authoring | Lock-in |
| Gen 3 Headless CMS (Contentful, Sanity, Strapi) | Separation | Fragmentation |
| Gen 4 Composable/MACH | Flexibility | Orchestration hell |
| Gen 5 Cogs (MX OS) | The CMS itself | Adoption |

The fifth generation does not build a better CMS. It makes the CMS unnecessary.

---

## 4. The Founder as Evidence

Tom Cranstoun was "The AEM Guy" — consultant hired when Adobe Experience Manager needed to work at enterprise scale. BBC newsroom (team of 30, top-ten supplier). Nissan. EE. Ford. Content systems since 1977.

"Aren't you putting yourself out of business?"
"Yes. Deliberately. I'm putting 'The AEM Guy' out of business because the future is 'The MX Guy.' The career pivot is the proof of conviction. I'm not a theorist arguing from the sidelines."

AEM showed Tom three things:

1. **The ceiling** — even AEM creates lock-in. AEM content lives in JCR nodes. If AEM can't solve this, no CMS can. The ceiling is the CMS itself.
2. **The pattern** — AEM was heading toward self-describing content but couldn't let go of the platform. The platform was the business model.
3. **The cost** — millions in licensing, years in implementation, armies of specialists — all to manage content that could describe itself.

This is founder-market fit with receipts.

---

## 5. The Solution — MX OS

Core principles:

- Documentation IS the system — not documentation about a system
- Cogs are the programs
- SOULs are the identity layer
- The builds-on graph is the knowledge structure
- Trust is layered

**Mission:** Making the web — and everything you publish beyond it — work for everyone and everything that uses it.

**Manifesto:** "Interfaces optimised for machines inherently improve experiences for humans."

---

## 6. The OS Analogy

| OS concept | MX OS equivalent |
|---|---|
| Operating system | MX OS |
| Applications | Action-docs (with execute block + `runtime:` field) |
| Data files | Info-docs |
| Shebang line (`#!/bin/bash`) | The `runtime:` field |
| System API | The Gathering specification |
| Package registry (npm) | REGINALD |
| Code signing | COG (Community Owned Governance Standard) |
| Permission levels | Compliance levels 1–5 |
| Filesystem metadata | `.mx.yaml.md` files |
| User profile | `SOUL.md` |
| Dependency graph | `builds-on` |

Like Linux and POSIX: The Gathering governs the interface. MX OS implements it.

---

## 7. Architecture — Five Layers

### Layer 1: Cogs — The Programs

Any file carrying MX metadata in its native carrier format:

- YAML frontmatter in markdown (`.cog.md`) — canonical form
- `meta name="mx:*"` tags in HTML
- `@mx:*` JSDoc tags in JavaScript; CSS comment blocks; YAML in shell scripts

Two types:

- **Info-docs** — data files. No execute block. Describe, inform, document.
- **Action-docs** — carry an execute block + `runtime:` field.
  - `runtime: runbook` = action-doc IS the instruction set, AI agent IS the executor
  - Other runtimes: `bash`, `node`, `python`, `npm`

"Every published cog is a question that never gets answered wrong again."

### Layer 2: SOULs — The Identity Layer

`SOUL.md` in any folder defines what the folder is, how it should sound, what it must never do. SOULs are additive — they enrich, never override. One file. That is the unlock.

### Layer 3: The Builds-On Graph

Cogs reference other cogs via `builds-on` — "read these first for context." Forms a recursive context graph. Root cogs (no builds-on) are entry points.

### Layer 4: Trust — The COG Verification Layer

COG = Community Owned Governance Standard. The trust wrapper around a cog, carrying attestation (who signed it, when) and stewardship metadata (who keeps it accurate). Compliance levels 1 (local/unsigned) through 5 (independently audited). Visibility levels: Local → Private → Shared → Hosted. REGINALD is the public host for levels 3–5. Not the COG system itself.

### Layer 5: The Gathering Standard

Independent standards body, MIT licensed, W3C model. The Gathering governs the spec. MX OS implements it. No single vendor controls the standard.

---

## 8. The MX Readiness Model (0–5)

| Level | Label | What agents can do |
|---|---|---|
| 0 | Not Ready | Nothing reliably |
| 1 | Basic | Discover |
| 2 | Structured | Cite and attribute |
| 3 | Attested | Compare and recommend |
| 4 | Registered | Transact with confidence |
| 5 | Audited | Guarantee accuracy |

Skip a level and everything above it is unreachable. This is the consulting engagement ladder and product adoption sequence in one framework.

---

## 9. The Runtime

The AI agent is both the kernel and the shell.

Boot sequence:

1. **Bootloader** (`CLAUDE.md`) — always-on, lightweight pointer
2. **Init** — agent reads `cog-registry` + `what-comes-next`
3. **Routing** — matches tasks to cogs via routing action-doc
4. **Execution** — `runbook:` agent follows the action-doc; `bash/node/python:` runs the command
5. **IPC** — action-docs call other action-docs via `invokes` field

No installation. No daemon. No server.

---

## 10. The Filesystem Deployment

`.mx.yaml.md` files placed across the physical filesystem — not just in git repos.

The dot-prefix design:

- `.` prefix hides files from normal directory listings (invisible to humans)
- Machines read hidden files effortlessly
- `.md` extension provides prose when humans DO look
- Invisible to humans by default, readable by both when needed

Metadata contains enough information to recreate documents if lost.

The MX Graph (`mx-graph-builder.js`) scans every `.mx.yaml.md` and `.cog.md`, resolves inheritance chains, outputs a queryable JSON graph exposed via CLI, npm scripts, and MCP server.

---

## 11. The Companion Web

The companion web adds MX metadata to HTML so AI agents get what they need from the same URL humans use — like OpenGraph, but for machines. No new infrastructure. Just HTML.

**Physical extension:** QR codes on objects point to companion web pages. A machine scans a product and knows what it is because the object describes itself. Extends to robotics.

**WebMCP validation (Feb 2026):** Google and Microsoft shipped Web Model Context Protocol in Chrome 146 Canary. MX metadata declares what content IS. WebMCP makes that executable. MX OS was ahead of this by two years.

---

## 12. Personal Cogs — The User Side

The companion web is the world speaking cog. The personal cog is the person speaking cog.

A personal cog is a collection of cogs on the user's device — accessibility needs, interests, dietary requirements, health, skills. The user's AI agent controls what gets shared. A restaurant gets the dietary cog. A hospital gets the health cog. Nobody gets everything. The machine reads both sides. That is the Machine Experience.

---

## 13. The Datalake — Migration Path

Lift-and-shift service: existing CMS content extracted and converted to cogs. The collection forms a datalake — a cog-native collection.

After migration, what does the CMS do? The content is in cog files. The CMS was the chrysalis. The content has wings.

---

## 14. Intent-Driven Publishing — Three-Zone Architecture

**Zone 1 Raw (Draft)** — low-friction creation, incomplete metadata OK, not deployed

**Zone 2 Curated (Validation)** — automated quality gates:
- Metadata completeness
- Schema.org compliance
- WCAG 2.1 AA accessibility
- Sovereignty constraints

No manual approval bottlenecks. Same checks that ensure machine readability also ensure screen reader navigability. One solution serving everyone.

**Zone 3 Serving (Published)** — customer-owned infrastructure, MX has revocable access only. Day-one exit strategy. Data sovereignty by architecture, not policy.

Example YAML frontmatter for a published cog:

```yaml
id: product-pricing-2026
type: productDescription
intent: consideration
audiences: [b2b, enterprise]
channels: [web, print, email]
status: approved
validFrom: 2026-01-01
validTo: 2026-12-31
reviewCycle: P90D
jurisdictions: [UK, EU]
```

Multi-channel reconstruction: same content, different outputs. Web gets full HTML with reviews. Print gets CMYK TIFF at 300 DPI with legal notices. Email gets summary + CTA. Same article ID. The reconstruction engine decides based on metadata, not human judgement.

---

## 15. Two-Pillar Value Proposition

**Pillar 1: MX makes content machine-readable.**
Structured metadata in every file — AI agents find, understand, and act without guessing.

**Pillar 2: REGINALD makes content machine-trustworthy.**
Cryptographic attestation — AI agents cite attested facts, not inferences.

Together:
- Reduce AI hallucinations
- Lower inference cost and energy (structured input = fewer tokens)
- Satisfy EU AI Act, European Accessibility Act, digital-records legislation
- Create first-mover citation advantage (computational trust compounds)

---

## 16. REGINALD

Full name: Registry for Genuine Information, Notarised Authentication, and Legitimate Documentation. The npm for machine-trusted content. Currently: 89 COGs, 2 publishers.

REGINALD is not the COG system. REGINALD is the public host within the COG system.

---

## 17. MaXinE

Air-gapped, sovereign AI inference appliance for organisations that cannot send data to cloud LLMs. Full MX OS stack without internet dependency. Target: regulated sectors — legal, medical, financial, defence.

---

## 18. Product Components

| Component | Status | Description |
|---|---|---|
| COG format spec | Live (89 COGs) | YAML frontmatter in markdown |
| The Gathering | Active | Independent standards body, W3C model |
| REGINALD | Live | Public COG host and publisher verification |
| MX-hub | Active | CogNovaMX operational monorepo |
| Maxine app | In dev | AI router and chief of staff |
| MaXinE | Planned | Air-gapped Local REGINALD Machine |
| MX Audit Suite | Live | Web accessibility and MX compliance auditing |
| MX Graph | Live | Dependency graph builder and MCP server |
| Companion web | Specified | MX metadata in HTML pages |
| Personal cog | Specified | User's own cog collection on-device |
| mx-plugin | In dev | COGify WordPress sites |
| Datalake service | Available | Lift-and-shift CMS content to cogs |

---

## 19. Primary Audience

**Primary: AI Agents**

The founding inversion — every other CMS optimises for human authors. MX OS treats AI agents as the primary reader. Not a feature. An architecture.

Five machine types:

1. Server-Side Agents (ChatGPT, Claude) — raw HTML, no JavaScript execution
2. In-Browser Agents (Copilot, extensions) — full DOM, inherits sessions
3. Browser Automation (Perplexity, Playwright) — computer vision, screenshots
4. Local Agents (Ollama, Claude Code) — on-device, limited context
5. Agentic OS (Anthropic Cowork) — orchestrate multiple agents in parallel

**Worst-Agent Principle:** Build for the most constrained agent, not the most capable. If a constrained local model can parse it, every agent can. Same as accessibility: design for the most limited user, everyone benefits.

**Secondary:** Content practitioners, enterprise architects, AI developers, CMS vendors (platforms that make MX automatic become indispensable), standards bodies.

---

## 20. Competitive Position

| Capability | MX OS | Contentful | Sanity | Notion | Adobe EDS |
|---|---|---|---|---|---|
| Document-native | Yes | No | No | No | No |
| Open standards | Yes | No | No | No | No |
| Document as runtime | Yes | No | No | No | No |
| Executable docs | Yes | No | No | No | No |
| Git-native | Yes | No | No | No | Partial |
| No infrastructure needed | Yes | No | No | No | No |
| Customer owns production repo | Yes | No | No | No | No |

Core differentiator: They all query documents. MX OS runs them.

Not a feature difference. An architectural difference.

Competitors are retrofitting agent capabilities onto existing platforms. MX OS is the first platform where documents themselves are the execution environment.

---

## 21. Key Language

**Use:**
- "Intent CMS" — for non-technical investor audiences
- "Document-native runtime" — for technical audiences
- "The documentation IS the system" — the founding inversion
- "Content that manages itself" — Tom's book framing (Ch. 18 title)
- "Design for machines. Benefit humans. Advance both." — from the Manifesto
- "Every published cog is a question that never gets answered wrong again."
- "The files are the platform."
- "Stop guessing. Start reading."

**Avoid:**
- Speculative figures without verified sources
- Claiming AI features competitors demonstrably have (MCP, structured content APIs)
- Overstating adversarial relationship with Adobe/Contentful — they are migration candidates

---

## 22. Functional Requirements

**FR1–5 Document Authoring:** any text editor, YAML validated against Gathering spec, explicit `runtime:` declarations, portable (any CDN or filesystem), git-native.

**FR6–10 Machine Readability:** parseable without network access, every doc carries own identity metadata, `.mx.yaml.md` at every folder, SOULs additive, builds-on traversable.

**FR11–14 Execution:** `runtime: runbook` executable by any instruction-following AI; `bash/node/python` generate executable commands; boot sequence documented; IPC via `invokes`.

**FR15–18 Trust:** compliance levels 1–5 independently verifiable; REGINALD provides signing; every published COG has canonical URI; audit chain records AI model, action, prompt.

**FR19–21 Publishing:** three-zone architecture; Zone 2 validates metadata + WCAG 2.1 AA + sovereignty automatically; Zone 3 is customer-owned with revocable vendor access.

---

## 23. Non-Functional Requirements

- **NFR1:** No new standards — builds on CommonMark, YAML, HTML, Schema.org, git
- **NFR2:** No infrastructure overhead — files and metadata are the system
- **NFR3:** Open format — Gathering spec MIT licensed, any platform can implement
- **NFR4:** Git-native — git push is deployment
- **NFR5:** Portable — same format everywhere (USB stick, laptop, web server, conversation)
- **NFR6:** Backwards compatible — existing markdown is partially MX-compliant already
- **NFR7:** Dual audience — optimised for both human reading and machine parsing simultaneously
- **NFR8:** Invisible to humans by default — dot-prefix convention

---

*Sourced from: SOUL.md, UBERCOG.cog.md, what-is-mx-os.cog.md, chapter-15-intent-driven-publishing.md, chapter-18-content-that-manages-itself.md, machine-experience-manifesto.md, appendix-m-building-mx-os.md, Glossary.md*

*Prepared by MX Mini — May 2026*
