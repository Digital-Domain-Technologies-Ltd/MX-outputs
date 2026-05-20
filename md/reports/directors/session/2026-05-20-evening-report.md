---
title: "Co-Directors Report — MozFest Submitted, Lifecycle Gap Landed"
description: "Evening segment: MozFest 2026 talk submitted ahead of deadline; the Lifecycle Gap argument now sits across eleven files as the missing synthesis in MX positioning."
author: "Tom Cranstoun"
created: 2026-05-20
modified: 2026-05-20
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-20-evening-report.md
---

# Co-Directors Report — MozFest Submitted, Lifecycle Gap Landed

**Date:** 20 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

Two things landed. The MozFest 2026 talk "Wilding the metadata layer: an open standard for the machine-readable web" was submitted ahead of the 25 May 14:00 CEST deadline, putting The Gathering in front of the Mozilla Festival programming committee for the October 2026 Barcelona event. Separately, the Lifecycle Gap synthesis was named and canonicalised across eleven files: a single-sentence shorthand for what JSON-LD, SEO, GEO, and AEO do not carry once a machine has the page, paired with the existing Provenance Gap framing in Protocols chapter 10.

---

## What Was Done

### 1. MozFest 2026 submission

Talk submitted into the Talks track under the Wilding Advocacy theme, solo (Dogu Abaris not named on this submission). The Gathering Administration Ltd is named as the organisation behind the talk — a fact about the legal-entity split between The Gathering (community standards body) and DDT Ltd (CogNovaMX commercial side) that was previously implicit and is now saved to memory. The submission promises a live agent-reads-page demo; the demo is currently sketched, not built, so acceptance turns it into a hard build commitment alongside two post-festival deliverables (a community call and a co-authoring working session in the eight weeks after MozFest) and a MozFest companion note summarising every comment, suggestion, and challenge raised at the festival. All three contingent commitments are tracked in REMINDERS.

### 2. Lifecycle Gap synthesis becomes canonical

Tom's instinct — JSON-LD and the discovery layers get a machine to the page; what about once it lands? — exposed a genuine gap in MX positioning. The building blocks existed in the canon (provenance language in principles.cog.md, JSON-LD-insufficiency note in wcag-to-mx-mapping.md, the "what GEO cannot see" framing in geo-vs-mx.md), but they had never been synthesised into a single argument. Plan agent surfaced the gap, /interview-me clarified scope, /step-commit-style sweep landed the argument across Protocols chapter 10 (the canonical home, paired with the Provenance Gap), chapter 11 (cross-reference), Handbook v2 chapter 5 (metadata-agnostic section), Free-book chapter 0 (alongside the existing provenance gap passage), geo-vs-mx.md (new GEO-does-not-address subsection), principles.cog.md (Convergence section reference), and five published blog posts on mx.allabout.network with the field-mapping list and in-page TOC updates. Every signal in the argument maps to an existing MX canon field: `created`, `expires`, `originator`/`author`, `stewardship.steward`/`maintainer`, `canonicalUri`, and the `status` + `supersedes` / `supersededBy` / `replacedBy` supersession chain. No new fields needed.

### 3. Business Sponsor outbound system

The April 29 IDHL email that landed Jonathan Healey as the second founding sponsor on May 11 was distilled into a reusable peer-agency outbound template at `mx-canon/mx-maxine-lives/businesses/the-gathering/business-sponsor-pitch.md`. The template carries the two-pathway structure (sponsorship of The Gathering plus separate DDT consultancy), updated for current canon: evidence-vehicle framing instead of "real penalties", Doğu Abaris named alongside Tom, founding cohort open until ratification, hyphens not em-dashes. The phrase "Business Sponsor" is now the canonical audience label, with the position "no influence purchased, but worth being up close" saved as a feedback memory.

### 4. Compliance-disclaimer sweep

The "MX does not guarantee compliance, it helps with documentation" framing was extended across sponsor- and investor-facing materials. canonical-sponsor.md gained the multi-jurisdiction regulatory paragraph (EAA + EU AI Act + UK ICO + NIST AI RMF + Colorado AI Act + comparable instruments emerging in Canada, Australia, Singapore) plus the explicit non-guarantee disclaimer. ddt-cognovamx/business-plan.md gained the same disclaimer on the PDF Car Wash service pitch. The wider sweep audited reginald-vnext-prd.md, mx-eaa-exec-brief.md, sponsor-and-funding-ssot.md, and five investor scaffolds (one-pager, pitch-deck, attestation-explainer, faq, adobe-semrush-investor-note) — all already canonical. The corresponding REMINDERS.md:156 cross-check item was closed.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 1 in mx-outputs (078240b); hub commits pending step 3 of /step-commit |
| Files edited (committed in mx-outputs) | 7 |
| Files edited (pending hub commit) | 11 |
| New canonical files | 1 (`business-sponsor-pitch.md`) |
| Lines added (mx-outputs commit) | +157 |
| Lines removed (mx-outputs commit) | −49 |
| Repositories touched | 2 (hub + mx-outputs) |
| New REMINDERS items | 2 (`If MozFest accepts: build demo`, `If accepts: deliver two follow-up sessions + companion note`) |
| REMINDERS items closed | 2 (MozFest submission line; compliance-disclaimer cross-check) |
| Memory writes | 3 (Gathering Administration Ltd legal entity; Tom attends CMS Experts not convenes; Business Sponsor terminology) |
| Plan files | 1 (`json-ld-seo-geo-aeo-fuzzy-porcupine.md`) |
| MX field gaps opened | 0 (all six lifecycle signals map to existing canon) |

---

## Why It Matters

**MozFest 2026 acceptance** would put The Gathering on a Mozilla-flagship stage in October, four months after Protocols publishes. Mozilla audiences skew toward exactly the community-led standards-body posture The Gathering is building. The talk's framing ("an open standard for the machine-readable web before it gets enclosed") matches the festival's Wilding theme and the broader sponsor-recruitment story.

**The Lifecycle Gap synthesis** tightens every commercial conversation that follows. Before today, the question "what does MX add beyond JSON-LD and the SEO/GEO/AEO stack" was answered by gesturing at provenance, accessibility, and lifecycle signals scattered across the canon. From today, the answer is one paragraph and a six-row table that names each MX field and what it carries. The argument is now in the published book that ships 1 July (Protocols ch10), in the free-book chapter that ships earlier, in the positioning paper, in the conceptual foundations cog, and on the public-facing blog. Every sponsor pitch, investor conversation, and audit report from this point can reach for the same shape.

**The Business Sponsor template** makes the outbound system repeatable. The IDHL signing was the proof point that the shape works for peer agencies; the canonical template captures what worked so the next pitch is a personalisation pass, not a from-scratch draft.

---

## The Insight

The canon had every component of the Lifecycle Gap argument and had never named it. The Provenance Gap is named in Protocols ch10. The discovery-vs-infrastructure distinction is named in geo-vs-mx.md. The MX field set carries every lifecycle signal. The synthesis — *here is the six-signal payload MX adds once a machine has the page* — was sitting in the blast radius of every existing argument without being articulated in one place. Tom's prompt named the gap in one sentence and the canon caught up in one session. Worth holding as a lesson: when something feels obvious-but-unwritten, write it.

---

## Decisions Made

- MozFest submission goes solo. Dogu Abaris is named in the canonical sponsor briefing as co-runner of The Gathering, but not on this talk.
- The agent-reads-page demo for MozFest is a hard build commitment if accepted. Submission claim is now load-bearing.
- "Business Sponsor" is the canonical audience label for peer-agency, CMS-vendor, and platform-vendor prospects of The Gathering. Distinct from tier labels (Founding Partner / Community Sponsor) which sit inside it.
- The Gathering Administration Ltd is the separate legal entity behind The Gathering, distinct from DDT Ltd. Companies House registration 17072993.
- The Lifecycle Gap and Provenance Gap are stated together as the canonical "what discovery layers do not carry" framing. Provenance answers *can we believe it*; lifecycle answers *can we act on it now*.

---

## Open Questions

- Two pre-session mx-reginald audit changes (`networkUtils.js` and `sitemap.js`, WAF-evasion modernization with modern Chrome UA and sec-fetch headers) are uncommitted in the working tree. Decide whether to commit alongside this session's work or hold them out for the next session.
- canonical-sponsor.md picked up the multi-jurisdiction regulatory framing and the non-guarantee disclaimer today, but not the Lifecycle Gap reference. Should the formal sponsor briefing also carry a one-paragraph Lifecycle Gap pointer back to Protocols ch10, or stay scoped to the regulatory and audit-days story?

---

## What Changed About Me

Three working patterns proved themselves today and are worth retaining.

**AskUserQuestion over inline Q1/Q2 lists in prose.** Confirmed across multiple turns. Saves Tom keystrokes, makes the choice surfaces explicit, and gives the answer a structured slot the next turn can read from.

**Verify field-name claims against the canon before asserting them.** I claimed two MX-field "gaps" (start date / canonical version pointer) that did not exist; Tom's shorthand had named existing fields (`created` and `canonicalUri`) under their plain-English aliases. The corrective pattern is to grep the canon for the actual field, then ask if I'm unsure what Tom is referring to, rather than constructing a "doesn't exist" claim.

**Re-read screenshot text before declaring contradictions.** "Sponsors by influence" read to me as conflicting with "sponsorship never buys influence". It did not. The two phrases mean different things and the earlier session burned cycles on a misread that a careful second read would have caught.

---

## What This Means for Investors

The session compounds the existing thesis rather than changing it. MX as the contract layer, Reginald as the trust layer, The Gathering as the standards venue, CogNovaMX as the commercial implementation — that shape was already in place. What changed today is that the *machine-side* of the value proposition (what does MX make possible that the discovery stack does not) now has a single-paragraph answer with a concrete field-mapping payload, ratified across the published canon. Investors asking "is there anything proprietary inside MX, or is this all open standards" can be answered with: the standards are open and Gathering-governed; the moat is implementation quality (Reginald's deterministic verification) and the breadth of the field set MX names as first-class — including the six lifecycle signals JSON-LD does not carry. MozFest acceptance, if it comes, is a sponsor-recruitment lever; the Lifecycle Gap synthesis is a pitch-tightening lever. Neither changes the revenue model; both shorten the time from first conversation to sponsor or investor decision.

---

## Next Steps

- Watch for the Mozilla MozFest 2026 response (4-8 week typical window). Acceptance reactivates the two contingent REMINDERS items (build the demo, calendar the follow-up sessions).
- Deploy mx-site to allabout.network via `npx wrangler deploy` from `allaboutv2/cloudflare/files/`, then purge the Cloudflare cache against the five updated blog posts so the new Lifecycle Gap framing is live.
- Read-through pass on Protocols chapter 10's new `## The Lifecycle Gap` section before the next manuscript PDF build, to catch any voice drift.
- Manuscript PDF rebuild for Protocols (and Handbook v2 chapter 5) when the chapter 10 read-through closes.
- Decide on the mx-reginald audit-utils changes (commit with the next session, or hold).

---

## Commit Log

| Hash | Description |
|------|-------------|
| _pending_ | Hub: Lifecycle Gap canon sweep + Business Sponsor pitch + compliance-disclaimer sweep + bio fix |
| 078240b | mx-outputs: Blog: land Lifecycle Gap framing across five posts |
