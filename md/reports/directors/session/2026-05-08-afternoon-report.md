---
title: "Co-Directors Report — Compliance-claims standard, two seeded vocabularies, accreditation programme, ratification gate, and mx-audit pipeline hardening"
description: "Afternoon segment: compliance-claims standard, two seeded predicate vocabularies, accreditation programme, deck-builder pipeline (v1.1); mx-audit standalone client script, developer verifier cog, and full pipeline quality gate fixes including SITEMAP discovery, At-a-Glance truncation, and ecommerce contract sync (v1.2)."
author: "Tom Cranstoun"
created: 2026-05-08
modified: 2026-05-08
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon, compliance-claims, accreditation, gathering, vocabularies]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-08-afternoon-report.md
---

# Co-Directors Report — Compliance-claims standard, two seeded vocabularies, accreditation programme, ratification gate, and mx-audit pipeline hardening

**Date:** 8 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

**v1.2 addition:** A second session hardened the mx-audit pipeline end-to-end. Five root-cause bugs that had surfaced in the dotfusion.com report (truncated Priority sections, SITEMAP_* placeholders unfilled, tone-gate false positives, template leak, and verifier missing a JSON sidecar) were diagnosed and fixed at source. The standalone client script was built and smoke-tested. A developer verifier cog was created so these bugs can never silently regress. The ecommerce template contract gap found during the verifier run was fixed immediately.

**v1.1 summary (compliance-claims):** The afternoon turned a one-conversation outline of "MX + REGINALD compliance verification" into a full first-pass implementation: an open Gathering standard, two seeded predicate vocabularies (WCAG 2.2 and EU AI Act Article 13), a commercial accreditation programme with formal independence rules, an agency pilot brief, a Protocols companion chapter, and a working plan that explicitly locks the ratification gate. Twelve commits across the hub and two submodules; the Phase 2 stress test (AI Act vocabulary) confirmed the open standard generalises across regulatory regimes without modification. The session ends with a clean state for the compliance-claims work and a hard rule recorded in REMINDERS: nothing reaches outward until The Gathering ratifies.

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

### 6. Markdown-to-PPTX deck-builder pipeline (engine + two production decks)

Built a generic markdown-to-PowerPoint engine that decouples content from visual brand. `bmv-pitch-2026.md` (BMV investor deck) and `talk-deck.md` (Frankfurt CMS Summit talk) now both render through the same engine. Three components: a CLI engine ([`scripts/build-deck.py`](scripts/build-deck.py)), per-deck layout modules declaring slot maps and adapters ([`scripts/lib/pitch_layouts.py`](scripts/lib/pitch_layouts.py) and [`scripts/lib/frankfurt_layouts.py`](scripts/lib/frankfurt_layouts.py)), and hand-designed PowerPoint templates that supply the visual brand. The .md is the canonical content master; per-slide `<!-- layout: NAME -->` HTML-comment hints select the layout; the engine clones the named source slide, applies the slot writes, and saves. Three modes: build (`--md` given), extract (reverse-engineer a stub .md from an existing .pptx), and pick (interactive template chooser when neither is provided). Image hints via standard markdown `![slot](path)` syntax with two slot-spec forms: replace-existing-Picture or add-at-position. The engine preserves slide relationships through the clone (images, hyperlinks, charts, OLE objects all travel correctly). The runbook lives at [`scripts/cogs/deck-builder.cog.md`](scripts/cogs/deck-builder.cog.md) typed `action.scripted` with the `@embedded:build` artefact. Frankfurt build verified end-to-end through the pipeline; original Marp output retained as backup.

### 7. Differentiation pass ripple to mx-site, Protocols, and free-book

The four-objections differentiation work that started with the BMV deck was rippled to the supporting corpus. Published a new blog post — [What Google's web.dev agent guidance does not touch](mx-outputs/mx-site/blog/what-googles-web-dev-agent-guidance-does-not-touch.html) — promoting the staging research note to the public site. Added a JSON-LD/Schema.org boundary paragraph to five mx-site core surfaces (`learn/what-is-mx.html`, `learn/key-principles.html`, `learn/why-mx-matters.html`, `learn/benefits.html`, and `mx-site/index.html`); `mx-principles.html` already had the canonical "MX never duplicates Schema.org" line. Tightened three Protocols chapters: chapter-10 (the SEO/GEO/MX three-beat verbatim), chapter-14 (the Google web.dev (1 May 2026) boundary paragraph in the Agent Protocols introduction), and chapter-22 (the JSON-LD/Schema.org relationship and "MX never duplicates" boundary). Voice consistency check across deck / REGINALD landing / Protocols chapter-00 confirmed all three speak in the same calm, structural voice on the attestation-scope and two-pillar arguments.

---

### 8. mx-audit pipeline hardening and standalone client script (v1.2 additions)

**Root-cause fixes from the dotfusion.com audit run:**

Five bugs surfaced in the dotfusion.com report; all five were fixed at source.

1. **SITEMAP_* placeholders unfilled** — `discover-urls.js` was only called from the interactive `/audit-collect` skill. Added as step 5a in `scripts/audit-pipeline.js` so every automated run grades the sitemap and writes `discovery.json` automatically. Nine `SITEMAP_*` placeholders now fill on every report.

2. **Verifier failed on a count that was correct** — `discovery.json` contained the `urlCount: 145` that matched the report's "145 pages" claim, but `verify-audit-report.js` only scanned a fixed list of JSON sidecars that did not include `discovery.json`. Added to the list.

3. **Tone gate false positives** — `api-catalog` (IANA-registered RFC 9727 identifier) and CSS `color` properties in table-cell code previews were being flagged as American English. Added three regex patterns to `AMERICAN_ALLOWLIST`.

4. **Priority sections truncated at Priority 1** — `rewrite-report.js` was using `max_tokens: 1000` globally. The At-a-Glance block generates a full findings table plus one Priority section per row; 1000 tokens was insufficient. The block now receives `max_tokens: 4000` via a per-block detection (`instruction.includes('Render the at-a-glance findings table')`).

5. **LLM judgment only checking top priorities** — RUBRIC CHECK 1 said "check the priorities" without specifying "EVERY numbered priority". Expanded to "Check EVERY numbered priority (Priority 1 through N, not just the top two or three)".

**Fierce-critic rubric hardening:** Added security-header carve-out (named headers such as CSP, X-Frame-Options, HSTS are never hollow recommendations) and a SPECIFICITY TEST guard to prevent data-anchored recommendations from being flagged as hollow.

**Template and contract sync fixes:**

- `web-audit-suite-template`: replaced the brittle inline `[IF any No: "[HEADER] should be added to prevent [ATTACK_TYPE]"]` conditional with a single `[SECURITY_NARRATIVE]` placeholder filled by `infill-report.js`; removed dead `ATTACK_TYPE` and `HEADER` contract entries.
- `ecommerce-audit-template.contract.json`: added `OTHER_WELLKNOWN_TABLE` (was present in the template body, absent from the contract — would cause CONTRACT ERROR at infill time).

**Standalone client script (`mx-audit/standalone.js`):**

Clients can now unzip the `mx-audit/` directory, run `npm install`, add their Anthropic API key to `.env`, and run the full audit pipeline with `npm run audit -- https://example.com`. The standalone script is a complete functional copy of `scripts/audit-pipeline.js` with all hub-relative paths (`HUB_ROOT`) rewritten to `AUDIT_ROOT` and output directories mapped to `./reports/` and `./results/`. Added `dotenv` dependency, `.env.example`, updated `.gitignore`, and copied the four gate scripts that previously only lived in the hub.

**Developer verifier cog (`scripts/cogs/mx-audit-dev-verify.cog.md`):**

An SOP action-cog with five verification actions: `template-contract-sync`, `contract-handler-sync`, `prompt-quality-review`, `gate-chain-check`, and `full-verify`. Running `full-verify` immediately found the ecommerce contract gap, which was fixed in the same session. The cog documents the five known-bug classes it guards against so regression is caught during developer review rather than discovered in a client report.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits, hub (afternoon total) | 14 (7 from compliance-claims phase + 7 from deck-builder & ripple phase) |
| Commits, mx-shared-gathering | 3 |
| Commits, mx-outputs | 5 |
| Files added | 13 (gathering note, fingerprinting update, two vocabularies + index, accreditation programme + annex, agency pilot brief, Protocols chapter 23 + soul, plan, build-deck engine, two layouts modules, deck-builder cog, Frankfurt design template, Google web.dev blog post) |
| Lines added (afternoon, hub) | ~4,400 |
| Repositories | 3 |
| Conformance checks passed | gathering-conformance on both updated drafts; cog:validate on the new business-side files; cog:sync clean (216 cogs) |
| YAML errors fixed | 1 (mx-canon/ssot/fields-data.yaml line 942 — was blocking the canon loader) |
| Decks rendered through the pipeline | 2 (BMV pitch, Frankfurt talk) |
| Pipeline modes | 3 (build, extract, interactive pick) |
| Pipeline bugs fixed at source (v1.2) | 5 (SITEMAP discovery, verifier sidecar, tone false positives, At-a-Glance truncation, LLM priority coverage) |
| Contract errors fixed (v1.2) | 2 (ecommerce OTHER_WELLKNOWN_TABLE missing; web ATTACK_TYPE/HEADER dead entries removed) |
| New files: standalone + cog (v1.2) | 2 (mx-audit/standalone.js, scripts/cogs/mx-audit-dev-verify.cog.md) |
| mx-audit commits (v1.2) | 2 (a01a1c8, a7dc5f1) |
| Client reports completed (v1.2) | 1 (dotfusion.com — all 6 gates pass, EAA Level 2 PDF 1.1 MB) |

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
- Run end-to-end test of `mx-audit/standalone.js` from a clean directory against a real URL to confirm the full collect + report + PDF path works without the hub.
- Run `full-verify` via the new `mx-audit-dev-verify` cog before the next template or contract edit to confirm the clean baseline holds.

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
| 57877cd6 | Protocols manuscripts: tighten boundaries against adjacent standards |
| e12fca38 | Frankfurt talk-deck: per-slide layout hints for the deck-builder engine |
| 4099bb36 | Frankfurt deck-builder: markdown-to-PPTX engine, layouts, and cog runbook |
| c9632377 | ADR stream-draft-format-decision: fix audience enum |
| 4af89974 | Bump mx-outputs: presentations refresh + BMV deck reframe + Google web.dev blog post + afternoon directors report |
| 53c51dcc | CHANGELOG v1.90: afternoon entry for compliance-claims standard, two seeded vocabularies, accreditation programme, and ratification gate |
| 7e759d3b | LEARNINGS v4.4: audience enum narrowed; actionType scripted vs sop discipline |
| *pending* | Hub: deck-builder cog typology fix (action.scripted alignment), cog registry resync (216 cogs), this report update |
| a01a1c8 | (mx-audit) Fix pipeline quality gates, prompt guards, and template/contract sync |
| a7dc5f1 | (mx-audit) Add standalone client script for distribution without MX-hub |
| 7f5e824 | (mx-crm) Add dotfusion.com audit report (2026-05-08) |
| 7ad659e | (mx-outputs) Add dotfusion.com audit PDF (2026-05-08) |
| *pending* | Hub: audit-pipeline step 5a (discover-urls), mx-audit-dev-verify cog, this report |
