---
title: "Co-Directors Report — Global Accessibility Framing + Baremetal Audit Suite + COG Opening Convention"
description: "Full baremetal.vc audit run (14 reports, all gates), systematic global-accessibility framing sweep, and a new house-style convention requiring every .cog.md / skill / command file to open with a fixed orientation header pointing at /cog.html"
author: "Tom Cranstoun"
created: 2026-05-02
modified: 2026-05-02
version: "1.1"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-02-evening-report.md
  purpose: "Full baremetal.vc audit run (14 reports, all gates), systematic global-accessibility framing sweep, and a new house-style convention requiring every .cog.md / skill / command file to open with a fixed orientation header pointing at /cog.html"
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Global Accessibility Framing + Baremetal Audit Suite + COG Opening Convention"]

---

# Co-Directors Report — Global Accessibility Framing + Baremetal Audit Suite

**Date:** 2 May 2026 — Evening
**Segment:** Evening (since midnight)

---

## Summary

Today's session ran the complete baremetal.vc audit portfolio — 14 client reports, all verification gates passing — and then completed a systematic sweep to broaden every EAA-only accessibility reference to global framing. The product now speaks to US, UK, Australian, and Canadian audiences as naturally as to EU ones. The evening portion extended that sweep to the audit report templates themselves, making the change consistent across every layer of the content stack.

---

## What Was Done

### 1. Baremetal.vc audit portfolio — 14 reports, all gates passing

Ran the full audit pipeline for all baremetal.vc portfolio companies. 14 individual client reports generated and verified (deterministic verifier, fierce-critic, template-leak gate, readability gate). Portfolio (uber) report generated separately. A PostToolUse hook false-positive was fixed — the per-host data check was incorrectly firing on multi-site portfolio reports; now exclused by path pattern. Rivan's PDF section was rewritten from scratch after garbled content was identified: both PDFs are external citations, inventory populated from CSV, correct EAA framing applied.

### 2. Self-audit: mx.allabout.network

Ran the web audit suite against the company's own site. Report and PDF generated. Gate convergence improvements applied during this run fed back into the templates.

### 3. Global accessibility framing sweep

Every reference to "the European Accessibility Act" or "EAA" as the sole legal authority for PDF accessibility was broadened to name the global convergence: ISO 14289-1 as the international technical standard, with EAA (EU), Section 508/ADA (US), UK PSBAR 2018, Australia DDA, and Canada ACA as the legal instruments that resolve to it. Affected layers:

- Three manuscript chapters (Protocols ch.11, ch.21, ch.22)
- Preface
- Appendix A
- Three blog posts (tagged-pdfs-are-mx, why-an-mx-audit-pays-for-itself, many-agents-one-metadata-layer)
- All 14 individual audit reports (PDF sections rewritten and PDFs regenerated)
- Both audit templates (web-audit-suite-template.md, ecommerce-audit-template.md)
- llms-full.txt regenerated to reflect blog post changes

### 4. Template quality fixes

Two rounds of template fixes applied during the day: PDF section renamed from "EAA Compliance Snapshot" to "Accessibility and Machine Readability"; two-concern preamble added (legal + machine readability as parallel independent concerns); scope note added to all three PDF SECTION branches; div-soup instruction rewritten to remove anthropomorphic "machines understand" framing.

### 5. COG opening header convention (new house style)

A standard 5-line orientation header now sits at the top of every authored briefing file in the repository. The header tells any first-time reader, human or machine, what kind of object they are looking at, how to navigate it, and where to find the deeper rules. It is written as YAML comments inside the existing frontmatter so no parser is affected.

- Applied to all 377 `.cog.md` files across the hub and the four writable submodules (allaboutv2, mx-audit, mx-crm, mx-outputs)
- Applied to all 57 `.claude/skills/*/skill.md` files (52 received a new minimal frontmatter block; 7 had an existing block extended)
- Applied to both `.claude/commands/*.md` files
- New reference page published at `mx-outputs/mx-site/cog.html` (canonical URL `https://mx.allabout.network/cog.html`) explaining what a COG is, how to read one, and pointing on to the published spec and runtime drafts. The first draft pointed the header at `/cog`; corrected to `/cog.html` in the same session, so the marker is consistent across every file
- A new `PreToolUse` hook `.claude/hooks/pre-write-cog-opening.sh` blocks any future `Write` of a `*.cog.md` file unless it carries both the marker line and the `https://mx.allabout.network/cog.html` URL. Wired into `.claude/settings.json` after the existing `Write` hooks, JSON validated, smoke-tested on three input shapes
- The convention is recorded as a feedback memory under "House Style" so future sessions apply it automatically when creating new cogs, skills, or commands

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits today | 11 (plus this session's commit) |
| Submodule commits (allaboutv2) | 1 (this session) |
| Submodule commits (mx-audit) | 5 (4 earlier + 1 this session) |
| Submodule commits (mx-crm) | 1 (this session) |
| Submodule commits (mx-outputs) | 3 (2 earlier + 1 this session) |
| .cog.md files touched (header) | 377 |
| Skill / command files touched (header) | 59 |
| Individual audit reports updated (earlier) | 14 |
| PDFs regenerated (earlier) | 14+ |
| New site pages published | 1 (`/cog.html`) |
| New PreToolUse hooks added | 1 (`pre-write-cog-opening.sh`) |
| Content layers touched | 8 (manuscripts, appendices, blog, reports, templates, llms-full, hooks, briefing-files) |

---

## Why It Matters

The product has been positioning PDF accessibility primarily as an EU compliance concern. That framing excludes roughly two-thirds of the potential market — US enterprises under Section 508 and ADA Title III, UK public sector bodies under PSBAR, and equivalent markets in Australia and Canada. The sweep makes the same message land for any audience, without weakening the EU-specific detail (EAA is still named as the most precisely codified example). This is a positioning fix, not a product fix.

The COG header work matters for a different reason: it lowers the cost of every first-contact moment. Whenever an unfamiliar AI agent or a new collaborator opens a briefing file in this repository — and that happens many times a day — the first five lines now tell them what the object is and where to find the rules. That replaces guesswork with a one-link path to the specification. The hook makes the convention durable: nobody can write a non-conforming `.cog.md` by accident, and future authors do not need to remember the rule because the system enforces it.

---

## The Insight

ISO 14289-1 (PDF/UA) is genuinely a global convergence point — every major accessibility regime arrives at the same technical artefact through different legal paths. Framing EAA as one instance of that pattern, rather than the sole driver, is both more accurate and more commercially useful. The framing work was straightforward once the principle was clear; the challenge was ensuring consistency across every layer simultaneously rather than leaving some files with the old framing.

A second insight from the COG header work: a convention is only durable if it is enforced at the point of creation, not at review. Adding the header to 377 existing files is a one-time cost; preventing the next author from forgetting it is the lasting value. A 30-line PreToolUse hook does that work for free, every time, without anyone having to remember it.

---

## Next Steps

- Run the baremetal.vc portfolio audit reports through client delivery review
- Consider whether the two-concern PDF preamble (legal + machine readability) should be extracted as a reusable prose block in the template rather than a REWRITE instruction
- Decide whether the COG opening header should also be applied to other authored briefing files in the hub root (SOUL.md, REMINDERS.md, LEARNINGS.md, CHANGELOG.md, UBERCOG.cog.md is already covered) — current scope was deliberately limited to `.cog.md`, skills, and commands

---

## Commit Log

| Hash | Description |
|------|-------------|
| 5b6f8762 | Bump submodules: global accessibility framing in audit templates |
| aedf8b81 | Bump mx-outputs: blog posts EAA broadening |
| 34a385cc | Manuscripts: broaden EAA references to include global accessibility legislation |
| 8d28418d | Bump submodules: PDF section machine readability + scope note, all 14 reports regenned |
| 7d13ed65 | Bump mx-audit: PDF section machine-readability framing |
| b8d0a074 | Bump mx-audit: PDF scope note in both templates |
| 82918b52 | Rivan PDF section fix: populate inventory, correct EAA framing, regen PDF |
| 788febdb | Baremetal.vc portfolio report + hook fix |
| d3f2afe9 | Hook: run-cog-enforcer -- force cog SOP execution on run/execute/follow intent |
| 977aba2d | Bump mx-audit: div-soup brittle-heuristics fix in both templates |
| f74e30cd | Audit: baremetal.vc portfolio -- 14 reports, all gates passing (2026-05-02) |
| 66ed666d | Self-audit: mx.allabout.network report + gate convergence improvements |
| mx-audit f0a90f9 | Templates: global accessibility framing in PDF section |
| mx-outputs a662c7e | Regenerate llms-full.txt: global accessibility framing |
| allaboutv2 193869a9 | Add standard COG opening header to all .cog.md files |
| mx-audit e43b864 | Add standard COG opening header to mx-audit-architecture.cog.md |
| mx-crm 5d416ed | Add standard COG opening header to all contact and business .cog.md files |
| mx-outputs d3ce65b | Add COG opening header; publish /cog.html reference page |
