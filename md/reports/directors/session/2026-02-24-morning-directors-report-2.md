---
title: "Co-Directors Report — Memory & Content Consolidation"
created: "2026-02-24"
segment: "morning (continued)"
version: "2.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidentiality: internal
---

# Co-Directors Report

## Memory & Content Consolidation

**Date:** 2026-02-24 (Morning, continued)
**Theme:** Institutional memory updates, content consolidation, operational patterns

---

## Executive Summary

Short focused session establishing operational patterns for content organisation. MEMORY.md updated with authoritative locations for key content types. Blog authoring content consolidated from scattered submodules into the brain.

**Key principle established:** "Manuals live in the brain."

---

## What Was Done

### 1. MEMORY.md Updates

Added/updated key locations in institutional memory:

| Content Type | Authoritative Location |
|--------------|------------------------|
| **The Brain** | `hub-content/MX-Canon/MX-Maxine-Lives/` — all content authoring |
| **Manuals** | `hub-content/MX-Canon/MX-Maxine-Lives/manuals/` |
| **Blog authoring** | `hub-content/MX-Canon/MX-Maxine-Lives/communications/blogs/md/` |
| **Blog hosting (MX)** | `packages/allaboutv2/blogs/mx/` — published HTML |
| **Blog hosting (DDT)** | `packages/allaboutv2/blogs/ddt/` — published HTML |
| **Action cogs** | `scripts/` folder |

### 2. Blog Content Consolidation

Moved stray blog files from submodules to the brain:

| File | Source | Status |
|------|--------|--------|
| `spectrum-card-blog.md` | allaboutv2/build/ | Moved |
| `cloudflare-workers-blog.md` | allaboutv2/cloudflare/ | Moved |
| `cms-future-blog.md` | mx-ingest/content/ | Duplicate removed |

**Brain now has 22 blog files** — all source markdown in one place.

### 3. Content Lifecycle Deprecated

Removed `content-lifecycle/` folder references from MEMORY.md. Content lifecycle stages are now implicit in the brain's folder structure.

---

## Patterns Established

1. **"Manuals live in the brain"** — all documentation for humans goes in `hub-content/MX-Canon/MX-Maxine-Lives/manuals/`

2. **Authoring vs Hosting** — source markdown (brain) separate from published HTML (packages/allaboutv2/blogs/)

3. **Brain-first content** — when creating new content, default to brain location, then publish to hosting

---

## Commits

| Hash | Description |
|------|-------------|
| `adb75b4` | refactor: consolidate blog authoring in the brain |
| `c1a5a81` | docs: move mx-exec manual to brain (manuals/) |

---

## Additional Work — Coming Soon Page Simplification

### Context

The MX coming-soon landing page (`packages/allaboutv2/mx/coming-soon.html`) looked "AI-generated" — generic marketing speak, multiple CTAs, and a fake email form that didn't work (Google Forms doesn't accept GET parameters).

### What Was Done

1. **Removed fake email form** — replaced with direct link to Google Form
2. **Added commercial context** — January 2026 launches (Alexa+, Copilot Checkout, UCP, Claude Cowork)
3. **Single CTA** — one "Join the Waitlist" button
4. **Removed generic sections** — Product Family, Social Proof
5. **Simplified author bio** — no expand/collapse, key facts inline
6. **Removed JavaScript** — no longer needed without animations

### Result

Direct, informative page. States the problem, names the urgency, explains MX, shows the books, one CTA.

### Commits

| Hash | Repo | Description |
|------|------|-------------|
| `d5006732` | allaboutv2 | refactor: simplify coming-soon page with single CTA |
| `f6f9928` | MX-hub | chore: update allaboutv2 submodule |
| `45a65d9` | MX-hub | docs: update changelog |

---

## Session Metadata

**Segment:** Morning (continued)
**Duration:** ~45 minutes
**Context:** Content organisation, memory updates, landing page refinement

**Participants:**

- Tom Cranstoun (direction)
- Maxine (implementation)

---

**Prepared by:** Maxine (AI Co-Director)
**Reviewed by:** Tom Cranstoun (Co-Founder)
**Distribution:** Eleanor Cranstoun (Director), Scott McGregor (Director)
