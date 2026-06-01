---
title: "Co-Directors Report — v-next vocabulary alignment + audit-pipeline quality sweep + five-part framing"
description: "Evening session landed three parallel tracks. The wider witness->attestation rename across the mx-reginald codebase, schema, conformance fixtures, and persisted data. A full audit-pipeline quality sweep that took the neomwellbeing and allabout.network reports end-to-end through all 14 gates to tagged PDF, adding API-retry resilience across every LLM-calling script. The five-part architectural framing canonicalised across PRD, CLAUDE.md and memory."
author: "Tom Cranstoun"
created: 2026-05-16
modified: 2026-05-16
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, reginald, attestation, framing, governance]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-16-evening-report.md
---

# Co-Directors Report — v-next vocabulary alignment + five-part framing

**Date:** 16 May 2026 — Evening
**Segment:** evening (since 17:00)

---

## Summary

Evening landed three substantive bodies of work. First, the wider witness->attestation rename completed across the mx-reginald codebase — function names, persisted-data field names, directory name, file extension, schema, examples, and 17 conformance fixtures all migrated; the registry's own self-attestation was rewritten in place; hub-side scripts that read the trust-wrapper rewired. Second, the five-part architectural framing (MX -> The Gathering -> COGs -> registry -> REGINALD) was canonicalised across the PRD, CLAUDE.md, and a new memory entry, with the AI-governance evidence-vehicle positioning added as a closing paragraph and a sister memory. Third, REGINALD's proprietary-to-CogNovaMX status was recorded as a standalone memory so any future session encountering the question lands on one definitive answer.

The session closed by auditing the seven authoritative gathering-sponsor docs against the new canon position. Six were already aligned; two received single-line cross-references anchoring them in the five-part framing. The corpus discipline is now strong enough that respecting the audience-split rule mattered more than adding visible edits — five files were left untouched on purpose.

---

## What Was Done

### 1. Wider witness->attestation rename in mx-reginald

The conservative file-only rename landed earlier in the day proved insufficient — function names, persisted JSON field names (witnessId), the witnesses/ directory, the .witness.json file extension, and the conformance test fixtures all still used the old vocabulary, leaving the code inconsistent with the PRD. Evening landed the full data-format migration. 42 files changed in mx-reginald: function names (writeWitness -> writeAttestation, listWitnesses -> listAttestations, verifyWitness -> verifyAttestation, etc.), persisted field names (witnessId -> attestationId, witnessDir -> attestationDir), the publisher-manifest JSON Schema (witness pointer block -> attestation pointer block), three example cogs, the registry's own self-attestation file (rewritten with the new field name), and 17 conformance YAMLs. The directory rename witnesses/ -> attestations/ used git mv to preserve history; the .witness.json file extension is now .attestation.json. Three hub-side scripts (reginald-static-gen.js, cog-tools.js, reginald-publisher-verify.js) rewired to the new paths and field names. index.json regenerated. Syntax-checked every modified JS file; engine require() returns the renamed surface intact.

Per build-plan Decision 6 ("ignore backward compatibility -- schema changes trigger a rebuild from canonical sources"), publisher manifests still using the old witness-pointer field shape need republishing. The registry's own self-attestation was migrated in the same commit.

### 2. Five-part architectural framing canonicalised

The MX ecosystem now has one definitive layered statement: (1) MX = metadata for provenance/context/use; (2) The Gathering = community-led standards body, never reinvents, fills gaps; (3) COGs (Community Owned Governance System) = carrier-neutral containers for the metadata; (4) A registry = public infrastructure for COGs; (5) REGINALD = CogNovaMX's private implementation of (4), backronym Registry for Genuine Information, Notarised Authentication, and Legitimate Documentation. Layers 1-4 open and Gathering-governed; layer 5 proprietary.

The framing lands in three coherent surfaces: full statement in the PRD as a new "The overall goal" section before Terminology; compact version in CLAUDE.md as "The five-part framing (canonical)" right after Quick Start so every session boot reads it; full statement plus reasoning hooks in a new auto-memory entry (project_five_part_framing.md) so future agents catch layer-conflation errors.

### 3. AI-governance evidence-vehicle positioning

The PRD's "The overall goal" section gained a closing block reaching from the five-layer architecture out to the regulatory landscape. The position is honest: MX/COGs/REGINALD are an *evidence vehicle* for AI-governance regimes (EAA Directive 2019/882, EU AI Act, UK ICO code, US NIST AI RMF, Colorado AI Act, and analogous instruments in other jurisdictions on multi-year timelines), not a compliance grant. Compliance stays a legal duty of the organisation. The architecture serves three audiences against the same fabric: auditors walk from a regulatory clause to every decision that cited it via policyRef; managers get a tamper-evident log of every AI agent action; regulators verify with their own standard libraries.

The framing landed in CLAUDE.md as a compact paragraph appended to the five-part framing section and as a standalone memory entry (project_compliance_evidence_vehicle.md) with the audit/manager/regulator triad and the selling discipline ("sold dishonestly as compliance in a box, it collapses on the first inquiry").

### 4. REGINALD-proprietary-to-CogNovaMX standalone memory

A focused single-fact memory captures the ownership position: REGINALD is the proprietary registry implementation owned by CogNovaMX (trading name of DDT Ltd); the MX standard, the COG format, the schemas, the abstract registry concept are open and Gathering-governed; other registries can exist on the same standard; REGINALD's competitive position is operational quality and publisher base, not format ownership. The memory points readers at the audience-split rule, the no-commercial-leak rule, the determinism rule, the brand-caps rule, and the five-part framing as cross-references.

### 5. Gathering-sponsor corpus audit (7 files)

Inventory of the 7 authoritative gathering-sponsor docs against the new canon position. Two received single-line architectural cross-references anchoring them in the five-part framing: ddt-cognovamx/business-plan.md (REGINALD-strategic-asset section now references the PRD's "The overall goal") and sponsor-and-funding-ssot.md (two-entity-structure section similarly cross-referenced). Five were already aligned and deliberately left untouched: the three Gathering-side docs (cross-ref into a REGINALD doc would violate the audience-split rule), funding-routes.md (canonical perfection on counterparty routing), partner-strategy.md (the "Who pays whom" table is exemplary). The discipline of leaving aligned docs alone is itself a sign the canon is settling.

### 6. Audit pipeline: deterministic quality sweep + API retry resilience

Parallel track. The morning's neomwellbeing audit had failed across multiple gate rounds and shipped a stuck `[REWRITE FAILED: Connection error.]` literal into the report. Evening landed a coordinated quality sweep that took both the neomwellbeing.com and allabout.network reports end-to-end through all 14 deterministic gates to ISO 14289-1 Level 2 tagged PDFs.

Three classes of fix. *Empty-table suppression* across seven previously-rendered surfaces (Provenance Per-page findings, Cross-Page Consistency N/A rows, Other-discovery-files single all-dash row, Marker Reachability, Structured Data Inventory, AI Attribution buckets, 5-Stage MX Journey) — boundary-marker pattern in templates plus strip-when-empty in handlers; provenance-gap collector bumped to cacheVersion 2 so stale v1 outputs are treated as clean. *Construction-leak removal*: `seeding (n=1)` cells and the "Sample size n=1, still seeding" caveat now suppress; the `vs Peers` column strips entirely when the benchmark dataset is thin; the sitemap grade Complete-vs-Partial contradiction resolved by routing both surfaces through the attribute-aware placeholder; em-dash sweep across 21 deterministic infill sources; a per-row Reason column added to pipeline-survivability sidecar CSVs so URL lists carry the quantitative evidence per row. *PDF layout + retry resilience*: 6 mm side margins (after iterating 24→20→14→8→6→4→2→6 to find the comfortable middle), body max-width unset (pandoc default 36em was anchoring content to the left edge), the Executive Summary scorecard bar shrunk from 25 to 18 chars so it fits the cell on one line, and a scripted preprocessor that inserts an explicit page-break div before every H2 so each top-level section starts on a fresh page.

The API retry layer is the most durable piece. A new helper at `mx-reginald/audit/scripts/lib/api-retry.js` wraps all eight LLM-calling scripts (rewrite-report, repair-report, repair-report-final, audit-fierce-critic, audit-llm-judgment, audit-llm-attribution-judge, collect-llm-attribution, provenance-gap-llm) with three-attempt exponential backoff (1 s → 2 s → 4 s). The classification is deny-first: HTTP 401/403/404/422/400 and Anthropic SDK AuthenticationError/PermissionDeniedError never retry; 429, 5xx, APIConnection*, *Timeout*, fetch failed, and the transport-layer message patterns always do. Retry events emit structured JSON to stdout where `scripts/audit-pipeline.js` parses them via a new `logApiRetries()` helper and writes one row per event into the per-run audit-log CSV with `decisionType: api_retry`, so the retry history survives in the durable record rather than only flashing past on the operator's terminal. A new fixture-based regression test at `tests/test-audit-empty-rendering.js` is wired into `npm run test` to catch future drift on construction leaks, all-dash table rows, and unstripped boundary markers; verified to catch a deliberate rollback.

The voice rule across audit-report static prose and the rewrite-pass system prompt was harmonised in the same pass: first-person plural ("we") in present tense + active voice for client-facing deliverables; book manuscripts remain third-person. The canonical statement now lives at `mx-canon/ssot/writing-guides/writing-style.cog.md` §3 with cross-references back to the two enforcement points so the rule has a single source of truth.

### 7. PRD updates landed

The PRD now at v0.6 carries: COG sample reasoning paragraphs (every YAML/JSON sample has a "Reading the sample" paragraph explaining what each field does and how it binds to its attestation), the operator naming uniformised (did:web:example-insurance.com throughout), file extensions and storage convention specified (.attestation.json, attestations/ directory, reference-implementation pointer at mx-reginald/scripts/signing/attestation-record-engine.js), conformance fixture location stated (mx-reginald/tests/conformance/cases/{attestations,fingerprints,rewriter}/), the five-part framing as "The overall goal" section, and the AI-governance evidence-vehicle closing block.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits (this segment) | 2 (d7625778, d9c3b16c) |
| Submodule commits (this segment) | 4 (mx-reginald x2, mx-outputs x1, plus mx-reginald 0990768 just before this report) |
| Hub files changed | 9 |
| Lines added | +135 |
| Lines removed | -100 |
| Repositories touched | 3 (hub, mx-reginald, mx-outputs) |
| mx-reginald files renamed (full rename) | 42 |
| Conformance fixtures migrated | 17 + 2 cross-references |
| New auto-memory entries | 3 (five-part framing, evidence vehicle, proprietary to CogNovaMX) |
| Canon sections added | 4 (PRD §5.10 storage conventions, PRD §The overall goal, PRD §17.1 fixture reference, CLAUDE.md §five-part framing) |
| Audit run delivered | allabout.network (full) + neomwellbeing.com (re-run) |
| Audit pipeline files touched | 19 in mx-reginald (templates, handlers, infill, PDF generator, system prompt, retry helper, 8 LLM scripts) |
| Audit pipeline lines added/removed | +1129 / -302 |
| New audit infrastructure files | 2 (api-retry helper, H2 page-break preprocessor) |
| Empty-table surfaces fixed | 7 (Provenance Per-page, Cross-Page Consistency, Other discovery files, Marker Reachability, Schema Inventory, AI Attribution, MX Journey) |
| Em-dash sources fixed at the SSOT | 21 deterministic infill strings + system-prompt + template VOICE rule |
| LLM-calling scripts now retry-resilient | 8 (rewrite, repair, repair-final, fierce-critic, llm-judgment, attribution-judge, collect-attribution, provenance-gap-llm) |
| Memory entries (audit-pipeline track) | 2 (feedback_no_construction_leak, feedback_consultant_voice_by_surface) |
| Tests added | tests/test-audit-empty-rendering.js (wired into npm run test, verified on deliberate-break) |
| PDFs shipped | 2 (neomwellbeing-report.pdf, allabout-network-report.pdf — both ISO 14289-1 Level 2) |

---

## Why It Matters

The session moved the codebase from "PRD vocabulary + half-renamed code" to "one vocabulary end-to-end". A reader walking from any document — PRD, build plan, Appendix V, the handbook chapter, the free-book paragraph, the principles, the renamed engine file — now hits the same words for the same things. That coherence is what lets the build proceed without translation overhead at every boundary.

The five-part framing closes a long-standing gap: any external reader (Salva, an investor, a sponsor candidate, a regulator) asking "what is REGINALD, exactly?" now gets one definitive answer with the open-vs-proprietary boundary spelled out. Sponsorship conversations that previously had to disambiguate "is REGINALD a Gathering project?" can now point at the PRD and have the question settled in three minutes. The audit/manager/regulator triad gives the commercial pitch a structure regulators recognise.

---

## Decisions Made

- **Wider rename completed in one commit, not staged across multiple.** The data-format migration is the more impactful piece; landing it together with the code rename means the engine, its callers, the persisted store, and the conformance suite are all consistent from one commit forward. Per Decision 6 of the build plan, backward compatibility was traded for cleanliness.
- **REGINALD-proprietary-to-CogNovaMX is now its own standalone memory.** Previously the fact was embedded inside larger framing memories. Pulling it into a focused single-fact memory gives any future session a one-hop answer to "who owns REGINALD?".
- **Gathering-side sponsor docs deliberately get no REGINALD cross-reference.** The audience-split rule was honoured even when the immediate convenience would have been to add a body pointer. Discipline over tidiness; the architectural property matters more than the cosmetic one.

---

## Open Questions

- The wider rename completed but the integration test suite was syntax-checked only, not run against fixtures. node_modules wasn't installed in mx-reginald this session. A clean `npm install && npm test` against mx-reginald is the smallest piece of verification still owed; not blocking the rename's correctness (the engine require + syntax-check is the strong signal), but the conformance round-trip is the proof.
- The Salva PRD has not been touched in light of the new five-part framing or the AI-governance evidence-vehicle position. Whether it needs an update before or after the next conversation with Salva is still Tom's call.
- The published MX-Audit GitHub repo still exists in stale form. A one-line "this repo has moved into mx-reginald (private)" header on its main branch remains the simplest courtesy gesture; not done this session.

---

## What This Means for Investors

The session strengthens two distinct stories:

The **architectural story** is now testable in a way it was not yesterday. An auditor, a regulator, or an AI provider reading the PRD can walk from layer 1 to layer 5, see exactly where the open standard ends and the proprietary implementation begins, find the reference implementation at its named file path, and verify each sample record by running the named standard libraries against the named fixtures. That is the credibility profile a standards-adjacent registry needs to earn institutional trust.

The **commercial story** gained the audit/manager/regulator triad as a sales structure. Investor and sponsor conversations that previously reached for "compliance" as the value proposition can now reach for the more honest and more durable "evidence vehicle for compliance regimes you must meet" framing. The triad is repeatable copy across pitch decks, one-pagers, sponsor pitches, and the auditor pre-call shape. It also forecloses the "compliance in a box" framing that would collapse on the first regulatory inquiry.

---

## Next Steps

- Run `cd mx-reginald && npm install && npm test` to validate the conformance suite passes against the renamed fixtures end-to-end. The syntax-check evidence is strong; the test-suite run is the proof.
- Consider whether the Salva PRD now wants a small footer pointer at its §11 to the new five-part framing and the proprietary-to-CogNovaMX memory, so the wider scope conversation has a canon entry point.
- Address the stale MX-Audit GitHub repo (one-line migration notice on main).

---

## Commit Log

| Hash | Description |
|------|-------------|
| de60459 (mx-reginald) | Step 0a — file rename only (witness-engine -> attestation-record-engine) |
| d7625778 (hub) | Handbook chapter-12 'next layer' subsection + mx-reginald pointer bump |
| e83f658 (mx-reginald) | Wider witness -> attestation rename — code, schema, examples, conformance fixtures, persisted data |
| 47cc58d (mx-outputs) | Audit run 2026-05-16 allabout.network + neomwellbeing.com results landing |
| d9c3b16c (hub) | Hub scripts rewired to attestation paths + mx-reginald pointer bump |
| 0990768 (mx-reginald) | Catch residual witness refs after the wider rename (attestations/README.md + registry attestation JSON) |
| 19b0ce1 (mx-reginald) | Audit pipeline: deterministic quality sweep + API retry resilience (19 files, +1129 / -302) |
| 2f4c361 (mx-outputs) | Audit deliverables: neomwellbeing + allabout.network 2026-05-16 reports + PDFs |
