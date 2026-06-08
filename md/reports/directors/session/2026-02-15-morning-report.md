---
title: "Co-Directors Report — The System Learns to Explain Itself (and a Name Problem Surfaces)"
created: "2026-02-15"
version: "1.1"
author: Tom Cranstoun

mx:
  x-mx-segment: "morning"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-02-15-morning-report.md
  purpose: "Co-Directors Report - The System Learns to Explain Itself (and a Name Problem Surfaces)"
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - The System Learns to Explain Itself (and a Name Problem Surfaces)"]
---

# Morning Session — 15 February 2026

## Summary

Saturday morning. Two things happened: the system got better at explaining itself, and we discovered we share a name with a two-billion-dollar company.

The UBERCOG is the headline. Until today, any AI agent arriving in the MX-Hub repository had to piece together context from CLAUDE.md, SOUL.md, and a 400-line onboarding guide that nobody maintained. Now there is a single briefing document — UBERCOG.cog.md — that sits at the repo root and does what the machine uber cog does at `$MX_HOME`: tells an agent exactly where it is, what surrounds it, and how to navigate. The onboarding guide is gone, absorbed into the uber cog. Two commits, 277 lines added, 409 removed. The boot chain is now clean: machine uber cog (universe) → repo uber cog (neighbourhood) → mode config → identity → local context. Cogs all the way down.

The broader thread is system self-documentation. A Convention Register (CVR) is being set up alongside the existing Architecture, Business, Naming, and Messaging registers. ROUTING.md has been updated to include it. The Gathering launch statement is being reviewed. The system is building the governance layer that makes it legible — not just to AI agents, but to standards bodies, auditors, and partners.

Then the name problem. Cog-Nova-MX Ltd is our UK company. MX Technologies, Inc. is a $1.9 billion fintech unicorn in Lehi, Utah. They own mx.com. They have $610 million in funding from TPG, CapitalG, and Battery Ventures. They partner with over 2,000 banks and fintechs. They process 150 million transactions per day. The domain cog-nova-mx.com is associated with them, not us.

This is a branding risk that needs addressing before we go public at Frankfurt.

---

## What Was Built

- **UBERCOG.cog.md** — repo-level uber cog. Action-doc with three actions (brief, route, status). Routing tables for Canon initiatives, brain registers, and intent-based navigation. Absorbs ONBOARDING.md content. References updated in README.md and SOUL.md.
- **Convention Register (CVR)** — new register type in the brain, alongside ADR/BDR/NDR/MDR. Governs how things are named and where things go. Directory created, SOUL.md written, ROUTING.md updated. Committed and pushed.

---

## The Name Problem

**MX Technologies, Inc.** (USA):

| Fact | Detail |
|------|--------|
| Founded | 2010 |
| HQ | Lehi, Utah |
| Industry | Fintech — financial data aggregation |
| Domain | mx.com |
| Funding | $610M (Series C: $300M from TPG, CapitalG) |
| Valuation | $1.9B (unicorn since 2021) |
| Partners | 2,000+ banks, credit unions, fintechs |
| Reach | 200M+ consumers |

**Cog-Nova-MX Ltd** (UK — us):

| Fact | Detail |
|------|--------|
| Founded | 2025 |
| HQ | Glasgow, Scotland |
| Industry | Content systems — machine-readable documentation |
| Domain | ? |
| Funding | Pre-seed |

The clash is direct. Same legal name structure. Different industries, different continents, but anyone searching "Cog-Nova-MX" will find the Utah fintech first. The domain cog-nova-mx.com is not ours.

**What this means:**

1. **Domain strategy needed** — we cannot use cog-nova-mx.com. Alternatives needed.
2. **Brand confusion risk** — investors, partners, and press will Google the name. The first result will be a Utah fintech, not a Glasgow content company.
3. **Trademark exposure** — a $2B company with "Cog-Nova-MX" in their name may have trademark coverage beyond fintech in some territories.
4. **Frankfurt risk** — if we present at CMS Summit as "Cog-Nova-MX" without addressing this, someone in the audience will Google us and find the wrong company.

**Recommendation:** This needs a board-level conversation before London CMS Experts (26 Feb). Options include: emphasising "MX OS" and "The Gathering" as lead brands, securing a different domain, or investigating whether the UK registration provides sufficient distinction. The company name may need to be reconsidered.

---

## By the Numbers

- **5 commits** pushed to remote (morning + afternoon step-commit)
- **14 files changed** across both sessions
- CVR register, UBER.cog.md, chapter 00 name fix, about.mx refresh, REMINDERS — all committed
- mx-gathering submodule updated (speaker background) and pushed

---

## Open Questions

- **Cog-Nova-MX name clash** — needs board/advisory discussion before any public appearance
- **Reginald demo — 20 Feb** — 5 days away
- **London CMS Experts — 26 Feb** — 11 days away, first public audience
- **Glasgow training course** — still needs dates, venue, accommodation

---

## Next Steps

1. **Investigate Cog-Nova-MX naming options** — research trademark position, domain alternatives, brand-first naming (MX OS? The Gathering? Maxine?)
2. ~~Complete CVR register setup~~ — Done. Committed and pushed.
3. **Continue The Gathering launch statement review** — the standards body needs to be ready for public
4. **Reginald demo preparation** — 5 days and counting

---

## Commit Log

| Hash | Theme |
|------|-------|
| `6978c31` | feat: add repo-level UBERCOG.cog.md, absorb ONBOARDING.md |
| `d49750e` | docs: changelog for UBERCOG.cog.md |
| `a1401ae` | feat: add Convention Register (CVR), UBER.cog.md, and chapter 00 name fix |
| `6fde85f` | feat: add pdf-generator action-doc and mx-c-pdf-generator skill |
| `4c98724` | docs: changelog for pdf-generator cog, CVR, and chapter 00 fix |

---

*The system explains itself better every day. But we need to make sure the world can find us — not a fintech in Utah.*
