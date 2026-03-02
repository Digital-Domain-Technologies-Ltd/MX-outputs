---
title: "Co-Directors Report — 14 February 2026 (Morning)"
description: "Morning session: partnership outreach tooling, operational maturity milestones, and the system learning to talk to partners."
author: Tom Cranstoun and Maxine

mx:
  date: 2026-02-14
  segment: morning
  status: published
---

# Morning Session — 14 February 2026

## Summary

Pitches and networking. This morning was about building the tools that help us talk to partners — and teaching the system to do it properly.

The Dotfusion report — the one that went to our first advisory board member — came back with a lesson: technical accuracy isn't enough. The original read like a cold-call attack when it should have read like a partnership conversation. We rewrote it completely. Every score, every table, every finding preserved — but reframed as "here's what our audit produces, imagine offering this to your clients." Then we baked the lesson into both report templates so it never happens again. Tone rules are now embedded in the templates themselves, as comments that every future report will carry.

The Dotfusion report is ready to send.

The bigger story is operational maturity. The cog ID system gives every document in the ecosystem a unique, obfuscated identity — an MD5 hash that traces back to the cog that created it. Only registry holders can decode the hash. This isn't about protecting IP for investors. It's about the system governing itself. Documents know where they came from. The decode registry exists at two levels: the Canon for company cog IDs, and $MX_HOME for personal ones. Personal overrides win on decode. The namespace policy formalises this: standard fields have no prefix (owned by The Gathering), MX-public extensions use `x-mx-`, and MX-private extensions use `x-mx-p-`. The prefix is the policy.

We also gave Maxine a public voice. HELLO.cog.md sits at the root of the system — Maxine introducing herself to team members and collaborators. A self-knowledge scanner regenerates her "about me" file before every session report, so she always knows her own numbers. Nine public voice rules ensure she never leaks internal vocabulary to external audiences.

---

## What Was Built

- **Cog ID system** — action-doc with 6 actions (generate, register, decode, stamp, list, bulk-generate), two-level registry, Node.js reference implementation, manual, and skill
- **Attribute namespace policy (ADR)** — three-tier prefix convention, formally recorded as an architecture decision
- **Maxine self-knowledge system** — bash scanner (`mx-about-recon.sh`), auto-generated `about.mx.cog.md`, `/mx-about` skill with public voice rules
- **HELLO.cog.md** — Maxine's public-facing introduction for collaborators
- **mx-audit pre-inference recon** — site scanner that gathers context before AI analysis
- **Partnership tone templates** — both report templates updated with tone rules from the Dotfusion lesson
- **Glasgow training course plan** — 2-day team training structure

---

## The Insight

The Dotfusion lesson is worth remembering: the same data, presented two different ways, produces two different outcomes. A technical audit that reads like "your site is broken" closes doors. The same audit, reframed as "here's what we can offer your clients," opens them. We didn't change a single number. We changed every word around the numbers. And then we made it structural — the tone rules live in the templates, not in someone's memory.

---

## By the Numbers

- **7 commits** pushed to remote
- **20+ files changed** in the Canon alone
- **~4,000 lines** added across the session (including new cog, manual, scanner, and templates)
- **85 files** updated in the path reference migration (book consolidation cleanup)

---

## Decisions Made

1. **Namespace policy accepted** — `x-mx-` for public extensions, `x-mx-p-` for private/obfuscated. The prefix is the policy. No additional markers needed.
2. **Two-level cog ID registry** — repo for company, $MX_HOME for personal. Personal overrides win.
3. **Public voice rules** — 9 rules for Maxine's external-facing communication. No numbers in prose, no cog names, no internal vocabulary.
4. **Partnership tone as template standard** — tone rules embedded in report templates, not left to memory.

---

## Open Questions

- **Glasgow training dates** — still need dates, venue, and accommodation for the 2-day training (Scott, Helen, Tom, Esther, Tony)
- **Reginald demo — 20 Feb** — 6 days away. Live registry needs to be working
- **London CMS Experts — 26 Feb** — 12 days away. First public audience

---

## Commit Log

| Hash | Theme |
|------|-------|
| `0df8d11` | fix: update ~85 path references after book consolidation |
| `1517217` | docs: mx-audit cog, session reports, ingested reference |
| `565976d` | docs: changelog for path fixes and mx-audit |
| `d025bde` | feat: cog ID system, self-knowledge, namespace policy, public voice (20 files, +2,707 lines) |
| `068ce40` | fix: missing name/description fields in cog frontmatter |
| `bc2c493` | docs: changelog update |
| `0cbba42` | chore: sales-enablement submodule (partnership tone templates) |

---

*The system is learning to talk to partners. The templates carry the lesson. The prefix is the policy.*
