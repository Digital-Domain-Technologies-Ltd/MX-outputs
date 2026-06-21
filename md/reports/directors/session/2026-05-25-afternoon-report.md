---
title: "Co-Directors Report — paribu.com audit shipped; HTTP 402 decisions ratified"
description: "Five-page MX audit produced for www.paribu.com; one tone-gate false positive fixed in the pipeline. Afterwards, two REGINALD commercial decisions ratified (settlement protocol = Mastercard Agent Pay; pilot scope = REGINALD-internal smoke test) and propagated to commercial docs, design note v0.5, and manuscripts."
author: "Tom Cranstoun"
created: 2026-05-25
modified: 2026-05-25
version: "1.1"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-25-afternoon-report.md
  purpose: "Five-page MX audit produced for www.paribu.com; one tone-gate false positive fixed in the pipeline. Afterwards, two REGINALD commercial decisions ratified (settlement protocol = Mastercard Agent Pay; pilot scope = REGINALD-internal smoke test) and propagated to commercial docs, design note v0.5, and manuscripts."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - paribu.com audit shipped; HTTP 402 decisions ratified"]

---

# Co-Directors Report — paribu.com audit shipped; HTTP 402 decisions ratified

**Date:** 25 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

Two parallel tracks ran this afternoon. First, the MX audit pipeline shipped a five-page audit for www.paribu.com (full deliverable: markdown report, EAA Level 2 tagged PDF, both provenance sidecars; one tone-gate false positive caught and patched at source). Second, two REGINALD commercial decisions taken via structured interview were ratified and propagated end-to-end: settlement protocol on the HTTP 402 micro-fee layer is Mastercard Agent Pay (fiat rail first; x402 + L402 held for a later phase, conditional on smoke-test outputs), and the first pilot is a REGINALD-internal smoke test (no external customers, no public traffic, validates negotiation + settlement timing + accounting reconciliation). The AI-input QR procurement-tailwind argument was validated and folded into all three CogNovaMX commercial docs. Both decisions are now reflected in the design note, the manuscripts (chapter 20 + appendix J), and REMINDERS.

---

## What Was Done

### 1. paribu.com audit

Crawled seven URLs (five HTML plus discovery files), passed every collect-phase probe, generated the report through the two-pass infill + rewrite pipeline, cleared all eleven gates, and rendered a 1.1 MB tagged PDF. Provenance sidecars (AI + deterministic) accompany the markdown; the AI chain is also embedded in the PDF XMP packet.

### 2. Pipeline tone-gate fix

The first infill attempt failed Gate 0b (tone). The `tier-comparative-framing` rule matched the phrase "limited context windows ... instead of" inside one of the deterministic Pipeline Survivability sentences. The trigger was the word "Limited" sitting within forty characters of "instead of" — a known tier-label pattern. Reworded the SSOT sentence in [pipelineSurvivability.js:124](../../../../../mx-reginald/audit/bin/tableHandlers/pipelineSurvivability.js#L124) to "Small-context agents spend their budget on scaffolding rather than prose," which carries the same meaning without tripping the gate.

### 3. HTTP 402 settlement and pilot-scope decisions (structured interview)

Two open REMINDERS items dating to 2026-05-24 closed via a four-question structured interview (AskUserQuestion). The decisions ratified:

1. **AI-input QR procurement-tailwind argument: validated, fold in now.** After explanation of the procurement-expectation logic (EU AI Act enforcement from late 2027 creating a credible procurement requirement for AI-input QR codes on regulated material), the argument was validated for inclusion ahead of formal Founding-Partner field-testing — confirmed retroactively when the next 2-3 partners surface.
2. **Three commercial docs receive the argument.** AI-input QR procurement-tailwind paragraphs added to [partner-strategy.md](../../../../../mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/partner-strategy.md) (new "Regulatory tailwind: AI-input procurement requirements" section), [business-plan.md](../../../../../mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/business-plan.md) (new "Regulatory tailwind on the agency line" paragraph in §5 Agency certification), and [compliance-claims-plan.md](../../../../../mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/compliance-claims-plan.md) (new §6a "Adjacent procurement signal validated").
3. **HTTP 402 settlement protocol: Mastercard Agent Pay first.** The fiat rail leads; x402 (Coinbase stablecoin) and L402 (Bitcoin Lightning) held for a later phase, conditional on smoke-test outputs and on customer-facing demand for sub-cent settlement surfacing during the single-Founding-Partner pilot that follows the smoke test.
4. **Pilot scope: REGINALD-internal smoke test.** No external customers, no public traffic. Validates three claims (HTTP 402 negotiation end-to-end, per-resolution settlement timing acceptable, accounting reconciles) before any external traffic. Out of scope explicitly: external publishers, public AI platforms, crypto rails, publisher-paid deposits, subscription tier, abuse prevention.

### 4. Pilot brief drafted

New brief at [http-402-pilot-brief.md](../../../../../mx-canon/ssot/papers/http-402-pilot-brief.md) (v0.1) captures both decisions, the reasoning (fiat rail's lower trust friction for the first cohort of MX-certified agencies + AI platforms; smoke test as smallest scope that validates the technical claims), the scope (components in / out), the decision criteria for the next phase, and the path back to crypto rails. Follows established two-zone YAML frontmatter.

### 5. REGINALD URN resolution design note v0.4 → v0.5

[reginald-urn-resolution-design-note.md](../../../../../mx-canon/ssot/papers/reginald-urn-resolution-design-note.md) updated to fold in the settlement decision: §"Resolution micro-fees" reordered so Mastercard Agent Pay leads with the first-cohort fit named explicitly; the adoption paragraph rewritten so HTTP 402 + Mastercard Agent Pay is the first settlement protocol and crypto rails are conditional; Recommendation #4 rewritten to point at the pilot brief; runbook documents what v0.5 carries; `refersTo:` adds the pilot brief; `x-mx-canonicalUrn` bumped v0-4 → v0-5.

### 6. Manuscript propagation

Two new pieces of book prose reflect the HTTP 402 decision in author voice:

- **Chapter 20 — Cogs and Reginald.** New `### How resolution is paid for` sub-section under "Reginald — The Registry", between "The Registry API" and "Beyond the content cog". Covers HTTP 402 negotiation, the three settlement rails (Mastercard Agent Pay leading on fiat; x402 + L402 on the crypto rails), the free tier, the subscription tier, and publisher-paid resolution. Stays architectural — no commercial-brief framing, no smoke-test pilot mechanics. Version 1.4 → 1.5.
- **Appendix J — Industry Developments.** New full entry "Agentic Micropayment Protocols: HTTP 402, x402, L402, Mastercard Agent Pay (2026)" inserted after the Universal Cart entry. Follows the 12-section appendix format (Overview, Key Details, How They Differ, Capabilities, Significance, Technical Insights, Business Model Implications, What This Validates / Challenges, Architectural Insights, Questions Raised, Strategic Implications, Cross-References, Sources).

### 7. REMINDERS hygiene

Deleted the two now-actioned entries ("AI-input mandatory QR — Founding Partner field-test" and the original "HTTP 402 micro-fee resolution — scoped pilot spec"); replaced the second with a forward-looking item pointing at the pilot brief and naming the smoke-test exit criteria. Added a humanizer/voice read-through entry for the two manuscript inserts before the next book PDF rebuild. Version 3.55 → 3.56.

### 8. Memory: payments out of scope for The Gathering

Saved [feedback_gathering_no_payments.md](/Users/tomcranstoun/.claude/projects/-Users-tomcranstoun-Documents-GitHub-MX-hub/memory/feedback_gathering_no_payments.md) after Tom corrected an earlier cross-facet suggestion to draft a Gathering note on the HTTP 402 negotiation layer. Rule: payments / settlement / pricing / billing are all out of scope for The Gathering — Gathering standardises metadata only. MEMORY.md index updated.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 2 (mx-outputs) + 2 pending (hub: HTTP 402 batch + audit pointer bump) |
| Audit pages | 5 HTML (7 URLs crawled including discovery) |
| Report length | 815 lines markdown |
| PDF size | 1.1 MB, tagged, pdfuaid:Part=1 |
| Gates passed | 11 of 11 |
| Pipeline files changed | 1 (pipelineSurvivability.js) |
| Commercial docs updated | 3 (partner-strategy, business-plan, compliance-claims-plan) |
| Canon papers updated / created | 2 (reginald-urn-resolution-design-note v0.5; http-402-pilot-brief v0.1) |
| Manuscript surfaces updated | 2 (chapter 20 + appendix J) |
| Memory entries added | 1 (gathering payments out of scope) |
| REMINDERS items deleted | 2 (now actioned) |
| REMINDERS items added | 2 (smoke-test follow-on + manuscript humanizer pass) |

---

## Decisions Made

1. **HTTP 402 settlement protocol = Mastercard Agent Pay** for the first pilot. Crypto rails (x402, L402) deferred to a later phase.
2. **HTTP 402 pilot scope = REGINALD-internal smoke test.** No external customers, no public traffic, validates negotiation / settlement-timing / accounting before any external traffic.
3. **AI-input QR procurement-expectation argument validated** for inclusion in commercial docs ahead of formal Founding-Partner field-testing.
4. **Payments are out of scope for The Gathering** — HTTP 402, x402, L402, Mastercard Agent Pay, resolution pricing, billing tiers all stay in REGINALD / CogNovaMX surfaces, never Gathering drafts.

---

## Next Steps

- Watch for further `tier-comparative-framing` false positives on other deterministic placeholders; the "Limited" trigger may catch other phrasings.
- Voice read-through on the two manuscript inserts (chapter 20 §"How resolution is paid for"; appendix J HTTP 402 entry) before the next manuscript PDF build.
- Implement the REGINALD-internal smoke test per [http-402-pilot-brief.md](../../../../../mx-canon/ssot/papers/http-402-pilot-brief.md) (test publisher estate, test agent fleet, Mastercard Agent Pay merchant account, accounting-reconciliation cron, three exit criteria).

---

## Commit Log

| Hash | Description |
|------|-------------|
| 20c1569a (hub) | Audit tone gate: stop "limited ... instead of" tripping tier-comparative-framing |
| a3c948ab (hub) | Changelog: 2026-05-25 afternoon entry for paribu.com audit + tone-gate fix |
| a2943f63 (hub) | Learnings: mx-audit --report fails under nounset, bypass via pipeline.js |
| c50eb891 (hub) | Bump mx-outputs: regenerate README index after audit add |
| 38da17a8 (hub) | Promote four blog drafts to published; bump mx-outputs |
| 5c94334f (hub) | HTTP 402 settlement and pilot decisions: design note v0.5, brief, manuscripts, commercial docs |
| 43169a07 (hub) | Changelog: 2026-05-25 afternoon second-half entry |
| d3b872e5 (mx-outputs) | Add www.paribu.com audit (2026-05-25) |
| 2a6b23e (mx-outputs) | Add 2026-05-25 afternoon directors report |
| 1ba88665 (mx-outputs) | Regenerate index after paribu.com audit add |
| c71dc63 (mx-outputs) | Publish four blog posts and add files-away-from-source assets |
| 523aa71 (mx-outputs) | Afternoon report v1.1 + relocate files-away-from-source assets |
