---
title: "Co-Directors Report — Compliance-claims standard, two seeded vocabularies, accreditation programme, and the ratification gate"
description: "Afternoon segment: drafted and pushed the open compliance-claims standard, two seeded predicate vocabularies (WCAG 2.2 and EU AI Act Article 13), the CogNovaMX accreditation programme with Annex A independence rules, an agency pilot brief, a Protocols companion chapter, and a working plan that locks the ratification gate before any outward-facing step."
author: "Tom Cranstoun"
created: 2026-05-08
modified: 2026-05-08
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon, compliance-claims, accreditation, gathering, vocabularies]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-08-afternoon-report.md
---

# Co-Directors Report — Compliance-claims standard, two seeded vocabularies, accreditation programme, and the ratification gate

**Date:** 8 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

The afternoon turned a one-conversation outline of "MX + REGINALD compliance verification" into a full first-pass implementation: an open Gathering standard, two seeded predicate vocabularies (WCAG 2.2 and EU AI Act Article 13), a commercial accreditation programme with formal independence rules, an agency pilot brief, a Protocols companion chapter, and a working plan that explicitly locks the ratification gate. Twelve commits across the hub and two submodules; the Phase 2 stress test (AI Act vocabulary) confirmed the open standard generalises across regulatory regimes without modification. The session ends with a clean state for the compliance-claims work and a hard rule recorded in REMINDERS: nothing reaches outward until The Gathering ratifies.

---

## What Was Done

### 1. Open standard for verifiable compliance claims

Drafted [`mx-shared-gathering/draft-compliance-claims.md`](https://raw.githubusercontent.com/ddttom/mx-shared-gathering/main/draft-compliance-claims.md) v1.0: an eight-field-plus-signature claim structure, a self-attestation and third-party authority model recognised on day one, evidence and revocation contracts, and predicate-vocabulary requirements. Vendor-neutral throughout. Conformance check passes against the field-pattern primary note. A reciprocal clarifying edit landed on the existing [`draft-contract-fingerprinting.md`](https://raw.githubusercontent.com/ddttom/mx-shared-gathering/main/draft-contract-fingerprinting.md) note recording compliance claims as the first non-cog adopter of the canonicalisation algorithm.

### 2. Two seeded predicate vocabularies under hand-over commitment

Phase 1 produced [WCAG 2.2 conformance vocabulary v0.1](mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/vocabularies/wcag-2.2-mx.v0.1.md) with hand-over committed to a sector-credible body by 2027-11-08. Phase 2 produced [EU AI Act Article 13 transparency vocabulary v0.1](mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/vocabularies/eu-ai-act-art13-mx.v0.1.md) with a 24-month hand-over window because the AI-conformity ecosystem is younger than the accessibility one. Both vocabularies are CC0 licensed. Both name candidate stewards explicitly. Both describe the fallback if no steward is secured, so the hand-over commitment cannot become CogNovaMX-by-default.

### 3. CogNovaMX accreditation programme with formal independence rules

Drafted [accreditation-programme.md](mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/accreditation-programme.md): three Certified Operator tiers (Approved, Certified, Audit-Grade), admission criteria, audit programme, revocation and appeals, fee structure, REGINALD's role as the reference registry, and the deliberate separation between the Gathering's standard role and CogNovaMX's commercial role. Drafted [Annex A](mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/accreditation-programme-annex-a-independence.md): financial, personnel, methodological, and reporting independence dimensions; cooling-off periods; Tier 3 additions; verification by the programme.

### 4. Agency pilot brief and Protocols companion chapter

Drafted [agency-pilot-brief.md](mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/agency-pilot-brief.md) for delivery into a live conversation with IDHL, Dotfusion, or similar. Drafted [Protocols chapter 23](datalake/manuscripts/mx-books/mx-protocols/protocols/chapter-23/chapter-23-the-claim-and-the-authority.md) as a companion-draft that ships alongside Protocols at first release and is promoted into Protocols proper at v2 once the standard ratifies and the first agency pilot completes.

### 5. The plan that locks the ratification gate

Drafted [compliance-claims-plan.md](mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/compliance-claims-plan.md): the resumption sequence (Stream submission, ratification, steward outreach, agency pilot, auditor validation), a record of decisions made this session that should not be relitigated, and the explicit rule that no outward-facing step starts before the Gathering has ratified the standard. Added a single REMINDERS.md item pointing at the plan so the rule is visible at the start of every future session.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits, hub | 7 |
| Commits, mx-shared-gathering | 3 |
| Commits, mx-outputs (Tom WIP committed in step-commit) | 4 |
| Files added | 9 (gathering note, fingerprinting update, two vocabularies + index, accreditation programme + annex, agency pilot brief, Protocols chapter 23 + soul, plan) |
| Lines added (afternoon, hub) | ~1,100 |
| Repositories | 3 |
| Conformance checks passed | gathering-conformance on both updated drafts; cog:validate on the new business-side files |
| YAML errors fixed | 1 (mx-canon/ssot/fields-data.yaml line 942 — was blocking the canon loader) |

---

## Why It Matters

Compliance verification is one of the four buyer-segment-named outcomes in the Maxine plan, and until this session it existed only as conversation. It now exists as an operational first pass: an open standard a community can review, two seeded vocabularies that demonstrate the schema works for the two regimes most likely to ship first, a programme document that names what the agency partners need to commit to, and a brief they can be handed when conversation reaches scoping. The work is not deliverable yet — the Gathering has not ratified — but the path from here to deliverable is now a sequence of named steps with named blockers, not an open question.

The structural choice that matters most: the open standard does not name REGINALD, CogNovaMX, or any commercial entity. The accreditation programme is one of potentially many programmes that could exist on the same standard. This is the architecture Tom set in the morning's "no commercial leak into the standard" rule, and the afternoon's work tested whether that architecture survives an end-to-end implementation. It does.

---

## The Insight

Phase 2 (the EU AI Act vocabulary) was the moment the schema's generality stopped being a hypothesis and became a tested property. Article 13 documentation is multi-file (instructions for use, technical documentation per Annex IV, model cards), where WCAG documentation is single-page. The standard's `subject.uri + subject.hash` design absorbed both without modification, because a manifest is a single file with a single hash, and the manifest internally lists its components. That is the property a framework-agnostic standard needs: a primitive that does not need to be revised when a new regime appears. The framework-agnostic claim survived its first contact with a regime structurally different from the one it was designed against.

---

## Decisions Made

- **Three-layer positioning.** Gathering ratifies the open standard; Protocols chapter 23 sits in the manuscripts; CogNovaMX runs the commercial programme on top. No commercial leak into the standard.
- **Both authority types from day one.** Self and third-party are first-class authority types in v1.0. Certification programme is built alongside, not deferred.
- **CogNovaMX seeds vocabularies under hand-over commitment.** First two vocabularies (WCAG, AI Act) carry explicit hand-over deadlines, candidate stewards, and fallback procedures. CogNovaMX does not retain stewardship by default.
- **Ratification before outreach.** No Stream submission, steward outreach, agency pilot delivery, or auditor approach starts before the Gathering has ratified the open standard. The rule is recorded in REMINDERS so it survives session boundaries.

---

## Open Questions

- The first review of the steward search for the WCAG vocabulary is scheduled for one year from publication. Has the candidate-list relationship work begun, or is it deferred until after Frankfurt and Protocols release?
- The agency pilot brief lists IDHL and Dotfusion as candidate operators. The brief is held back until those conversations reach scoping; what is the next signal that triggers delivery?
- The fields-data.yaml YAML error fixed today was blocking the canon validator silently. The remaining `unknown` and `invalid-enum` violations are visible now and will need a sweep in a future session, separate from compliance-claims work.

---

## What This Means for Investors

The compliance-verification thesis (regulatory positioning is one of the three concrete benefits MX delivers) now has the artefacts that make it real, not just a promise. An investor who asks "what does compliance verification look like in practice" can be shown an open standard, two seeded vocabularies covering accessibility and AI Act regimes, a tiered accreditation programme with formal independence rules, and a pilot path through to auditor validation. The work is at draft stage, and outward-facing steps are gated on Gathering ratification, but the absence of outward steps is now a deliberate choice with a recorded rationale rather than an unstated gap.

---

## Next Steps

- Tom focuses on Frankfurt (12 May 2026) and the Protocols release (1 July 2026). Compliance-claims work is on hold.
- When Tom returns, resume at step 1 of [compliance-claims-plan.md §6](mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/compliance-claims-plan.md) — Stream submission via `/mx-gathering-submit`.
- The four candidate stewards named in each seeded vocabulary (IAAP, WebAIM, ACT-Rules CG; AI Office, OECD, Partnership on AI, emerging consortium) are listed for future-session reference; outreach is gated on ratification.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 8e6bcdab | Seed WCAG 2.2 predicate vocabulary v0.1; bump gathering pointer |
| 2a908562 | Seed EU AI Act Article 13 transparency vocabulary v0.1 |
| 46d9caf9 | Annex A: general independence rules for Certified Operators |
| f27f8ef4 | Phase 3 prep: agency pilot brief for Stage 2 Tier 2 (WCAG 2.2) |
| 2460512e | Compliance-claims plan: lock the ratification gate |
| eda0adf | (mx-shared-gathering) Compliance claims: example uses vendor-neutral vocabulary URL |
| d2a568b | (mx-outputs) Presentation infrastructure refresh |
| 2dcfcbf | (mx-outputs) BMV pitch deck: file-data reframe and per-slide layout hints |
| 39151ea | (mx-outputs) BMV deck differentiation Phase 1 briefing |
| bab6af3 | (mx-outputs) mx-site: Google web.dev blog post and learn-page refresh |
| _pending_ | Hub: manuscript edits, deck-builder scripts, mx-outputs pointer bump, this report |
