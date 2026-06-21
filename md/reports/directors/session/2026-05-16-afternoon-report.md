---
title: "Co-Directors Report — REGINALD bearer-token clarification + sponsor SSOT consolidation"
description: "Lost API token recovered and rotated through D1; bearer tokens demoted from spec to deployment quirk across vnext PRD and product docs; all sponsor and funding material consolidated into a single canonical SSOT with the hybrid tier model ratified."
author: "Tom Cranstoun"
created: 2026-05-16
modified: 2026-05-16
version: "1.0"

type: report
tags: [directors-report, session, afternoon, reginald, sponsorship, governance]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-16-afternoon-report.md
  purpose: "Lost API token recovered and rotated through D1; bearer tokens demoted from spec to deployment quirk across vnext PRD and product docs; all sponsor and funding material consolidated into a single canonical SSOT with the hybrid tier model ratified."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - REGINALD bearer-token clarification + sponsor SSOT consolidation"]

---

# Co-Directors Report — REGINALD bearer-token clarification + sponsor SSOT consolidation

**Date:** 16 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

Tom's REGINALD API token was lost mid-session and recovered without downtime: a new token was minted locally, the old hash revoked in the D1 publishers store, and the replacement smoke-tested against the live `reginald.allabout.network` API before being persisted to the shell. The recovery surfaced a deeper question and the segment turned to resolving it: bearer tokens have been formally demoted from "v-prior auth scheme" to "this deployment's quirk", with the vnext PRD, product docs, and feedback memory all updated to match. The session closed by consolidating every sponsor and funding artefact across the repos into a single canonical SSOT and ratifying the hybrid tier model that resolves the £10k/£15k/£25k versus £25k–£75k pricing conflict the two strategy drafts had been carrying in parallel.

---

## What Was Done

### 1. REGINALD API token recovery and rotation

The previously issued bearer token (`reg_ad4cf4a2…`, id 4 in the `reginald-auth` D1 tokens table) was unrecoverable from the registry side because the worker stores SHA-256 hashes only. Recovery path: generate a fresh `reg_` token locally with `crypto.randomBytes(32)`, compute its SHA-256, revoke every active row for publisher_id 1 (cognovamx) in D1, insert the new hash, log a `token_regenerated_manual` row to the audit table, and smoke-test against the live `/api/v1/books/generate-link` endpoint. Replacement token persisted to `~/.zshrc`, immediately used to generate a complimentary handbook download link for an inbound prospect from a sister business in the AI tooling space.

### 2. Bearer tokens demoted from spec to deployment quirk

The recovery exposed that the vnext PRD's §8.1 was ambiguous on whether bearer tokens were a "v-prior" scheme the standard accommodated, or simply this registry's pre-spec implementation choice. The decision landed on the latter: v-next requires HTTP Signature (RFC 9421) over an operator-controlled DID-document key on every write endpoint, and any registry that accepts bearer tokens is operating outside the spec on those endpoints. The earlier draft of "registry MAY accept both schemes during transition" was rejected because soft-spec MAYs create implementer ambiguity that weakens conformance testing — sponsors implementing the standard need a single unambiguous auth contract. Decision propagated through `reginald-vnext-prd.md` §8.1, `mx-reginald/docs/api-reference.md`, and `mx-reginald/docs/publisher-guide.md`, with a feedback memory saved so the soft-spec language does not resurface.

### 3. Sponsor and funding SSOT

Two strategy drafts (DDT commercial strategy v0.1 and The Gathering sustaining funding model) were sitting in the planning conversation without yet being committed to the repo, while the repo carried a v1.4 sponsorship-pitch and v2.2 business plan operating on a different tier model. Every sponsor-adjacent file across the hub was consolidated into a single SSOT at `mx-canon/ssot/papers/sponsor-and-funding-ssot.md` covering the two-entity structure, the four operating facets, the Gathering's five funding lines, DDT's six revenue lines, the two-relationship model (sponsor vs certified agency), the named founding cohort, and the decisions taken in this session. The SSOT surfaces the source disagreements explicitly in a Reconciliation Notes section rather than picking sides quietly.

### 4. Hybrid tier model ratified and propagated

Of the four resolution options offered for the tier-model conflict, the hybrid was selected: new conversations frame around the higher Founding Partner ranges (Lead £50–75k, Principal £35–50k, Contributing £25–35k) plus a separate Community Sponsor line (£500–5k); DDT and IDHL stay at the existing £25k Founding fee under a one-off grandfather provision so confirmed paperwork is not reopened. Tom added the framing that all tier figures are negotiating positions rather than a fixed rate card. The decision propagated forward through `businesses/the-gathering/business-plan.md` (the authoritative source), `businesses/the-gathering/sponsorship-pitch.md`, and `businesses/README.md`, all version-bumped and modified-dated.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 3 (so far; hub commit pending Step 3) |
| Repositories touched | 3 (hub, mx-reginald, mx-outputs) |
| Submodule pushes | 2 (mx-reginald, mx-outputs) |
| Files changed in hub | 9 (7 modified, 2 new) |
| Lines added | +780 (mostly the new SSOT and the propagated tier table) |
| Lines removed | −36 |
| New canonical files | 2 (sponsor-and-funding SSOT; appendix-v-reginald-vnext-records draft) |
| Feedback memories saved | 2 (bearer-tokens-deployment-quirk; sponsorship-tiers-are-negotiated) |
| Live API rotations | 1 (REGINALD_API_TOKEN, prefix `reg_6009af7c`) |

---

## Why It Matters

The bearer-token clarification is small in code terms but significant in standards-body terms: it closes the gap that would have let an Accenture or Deloitte read the vnext PRD and conclude that the standard endorsed a long-lived shared-secret auth model. The Gathering can now answer "what does conformance look like" with a single unambiguous sentence rather than a transitional caveat that sponsors' implementation teams would have to reason about.

The sponsor SSOT consolidation matters for the same reason as any single-source-of-truth: when Jonathan at IDHL or any other prospect asks a precise question about tier benefits, audit-days allowance, or how the two entities relate, the answer is one document away rather than scattered across six files that may or may not be in step. Reconciling the £10k/£15k/£25k versus £25k–£75k discrepancy before the next sponsor conversation lands also avoids the worst kind of credibility damage: discovering the two prices on different pages of the same site after a serious prospect has read both.

---

## The Insight

The shape of "monetise REGINALD without destroying the community" turned out to be a question the existing repo already mostly answered, just not in one place and not with the bearer-token-quirk question resolved. Walking through the existing material with a consolidation lens, rather than building a new strategy from scratch, surfaced that the structural answer (open-foundation-plus-commercial-services, two entities, ledgers never cross, multiple commercial operators welcome) was already locked in. The unresolved questions were narrower than they looked: the tier-pricing conflict, the bearer-token confusion, the implicit Maxine-bundle moat. Each of those is closable in one editing pass once named.

---

## Decisions Made

- Bearer tokens are a deployment quirk, not part of the REGINALD v-next standard. A conforming registry MUST use HTTP Signature on every write endpoint.
- Founding Partner tier model is hybrid: £25–75k ranges for new conversations, £25k grandfather position for DDT and IDHL, all figures explicitly negotiating positions rather than posted prices.
- Verifier-side billing (regulators, AI agent operators, due-diligence buyers) is the recommended commercial monetisation lever, not publisher-side. The £240/yr publisher subscription on `reginald.allabout.network` either reframes as premium attestation services or retires alongside the bearer-token cutover.
- DDT's durable product moat is recorded as Maxine running on REGINALD-attested content. Personal advantages decay; the bundle is years to replicate.
- Microsoft Certified Trainer pattern for the training-vs-certification overlap: Gathering owns the credential, DDT delivers training and keeps training revenue.
- Concentration-risk cap on the Gathering's articles binds from end of 2027 with a target of at least five Founding Partners by then. The 2026 position of DDT + IDHL at roughly 50% each is acknowledged as an early-stage exception.
- L4/L5 audits route through a partner consultancy where DDT contributes methodology but does not sign, resolving the audit-independence question for a two-person firm.

---

## Open Questions

- £240/yr publisher subscription on `reginald.allabout.network`: reframe or retire. Either path needs migration communication to existing subscribers and the answer has to be consistent with the bearer-token retirement timeline.
- Hosted REGINALD-as-a-service: contingent option as currently treated, or part of the year-two plan once verifier-side tooling lands. Affects engineering capacity decisions.
- First premium-tooling product to commit engineering to: operator dashboard (conservative pick) or verifier console (higher-leverage given the verifier-side-billing decision).

---

## Next Steps

- Decide which of the four §9 open decisions to surface to Scott in the next planning conversation. The tier-pricing one resolved this session was item 9.1; the remaining seven are real and unblocked.
- Commit the two strategy drafts that prompted the SSOT (DDT commercial strategy v0.1, Gathering funding-model v0.1) as proper files in `businesses/ddt-cognovamx/` and `businesses/the-gathering/` once a quick read-through confirms no further edits are needed.
- Bring the £240/yr publisher subscription question to the next REGINALD operational review — the contradiction with both the pricing-discipline commitment and the non-extractive principle is in writing now and the SSOT will not stop flagging it until resolved.
- Surface "open outputs from every commercial tool" as a sponsor-facing line in the next IDHL touchpoint. The discipline already exists in the strategy documents; making it visible to Jonathan strengthens the "DDT's commercial activity is structurally aligned with the open standard" pitch.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| b96b90b | mx-outputs | Add neomwellbeing.com audit deliverable for 2026-05-16 |
| 6c2bc27 | mx-reginald | Soften em-dash phrasing in audit report templates |
| 1d94ae3 | mx-reginald | Clarify bearer tokens are a deployment quirk, not the v-next standard |
| _pending_ | hub | Sponsor & funding SSOT + tier-model propagation + vnext PRD bearer-token clarification + pre-existing manuscript edits |
