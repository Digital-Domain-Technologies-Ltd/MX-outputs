---
title: "Co-Directors Report — Provenance Practice Generalised + Founder Bio Consolidated"
description: "Two distinct streams: the audit-only provenance sidecar became a Reginald-level primitive every pipeline can adopt; five overlapping founder-bio files collapsed into one canonical pair (public + confidential) at repo root."
author: "Tom Cranstoun"
created: 2026-05-23
modified: 2026-05-23
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-23-evening-report.md
---

# Co-Directors Report — Provenance Practice Generalised + Founder Bio Consolidated

**Date:** 23 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

Two structural tidy-ups landed this evening. First, the provenance sidecar that the morning's audit work had wired in as an audit-only feature was lifted into a Reginald-level primitive every artefact-producing pipeline can call, with a generic adjacent-to-artefact helper, a pre-commit hook that refuses to ship an artefact without one, and a dedicated skill. Second, five overlapping files that each carried a version of the founder's biography were consolidated into a single canonical pair at the repo root: `ABOUT-TOM.md` (public-safe) and `ABOUT-TOM-CONFIDENTIAL.md` (gitignored, commercials only). Four duplicate bio files were retired; their inbound graph edges still resolve because the canonical carries `slug: tom-cranstoun`.

---

## What Was Done

### 1. Provenance practice raised to a Reginald-level primitive

The audit pipeline's `.provenance.json` sidecar from the morning was a good shape but lived under `mx-reginald/audit/lib/provenance-log.js` — audit-only by accident of where it was authored. The primitive moved up to `mx-reginald/lib/provenance.js` and gained a second calling convention: instead of a directory, callers now pass the path to the `.provenance.json` file directly, so any pipeline can drop a sidecar adjacent to the artefact it produced. The audit pipeline switched to the new convention and now writes its sidecar next to the published deliverable in `mx-outputs/audit/<date>/<hostSlug>/` rather than into the gitignored `audit-data/` tree, so the evidence chain ships with the artefact.

A new `provenance-sidecar` skill carries the practice as a first-class entry in the skill catalogue, so future work that produces a regulated artefact (audit report, attestation, certificate of genuineness) inherits the same conventions without re-inventing them. A pre-commit hook (`pre-commit-provenance-sidecar.sh`) refuses to let any matching artefact ship without a sidecar — the doctrine bites at write time. `CLAUDE.md` and `README.md` were updated to document the practice as repo-wide policy rather than an audit oddity.

This is eating our own dog food on the agentic-AI evidence-chain doctrine from the morning's governance blog draft. Provenance was the right answer for the audit; it is the right answer for everything Reginald produces.

### 2. Founder biography consolidated to a canonical pair

Five files in the repo each carried a partial biography of Tom Cranstoun: the SSOT founder profile under `mx-canon/ssot/business-case/founder-profile/`, the consulting-narrative profile under `mx-canon/mx-maxine-lives/profiles/`, the CRM contact cog under `mx-crm/contacts/`, the Reginald identity record under `mx-reginald/identities/`, and the session-start bio block inside `mx-canon/mx-maxine-lives/project-context.md`. Maintenance was a five-place sweep every time a fact changed, and the day rate plus generated wealth figures were leaking into surfaces that should never have carried them.

The consolidation produced a canonical pair at the repo root. `ABOUT-TOM.md` is the public-safe biography: career narrative since 1977, AEM track record with named clients, LinkedIn recommendations, philosophy, published record, speaking, books, contact. `ABOUT-TOM-CONFIDENTIAL.md` is gitignored and carries only the commercial detail that must not appear on public surfaces — day rate and generated wealth — pointing at the public file for the rest. The four duplicate bio files were deleted (committed in the provenance-sidecar docs commit), their empty parent directories dropped, and the project-context bio block replaced with a one-line pointer that retains only the session-operational rules that do not belong in the biography (CogNovaMX capitalisation rule, Twitter handle, conference role, epiphany source).

The canonical carries `slug: tom-cranstoun` so the existing graph edges (`refersTo: tom-cranstoun` in the Maxine CRM contact and the Salva meeting notes) still resolve after the underlying file moved. `CLAUDE.md`, `MEMORY.md`, the Maxine Lives `unknown.md` template, and the Reginald identities README all rewired to point at the new canonical. The Reginald registry index regenerated cleanly with no dangling references; the index-freshness gate passes.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 3 |
| Files changed | ~25 |
| Lines added | ~744 |
| Lines removed | ~497 |
| Repositories | 1 (hub) |
| Bio surfaces collapsed | 5 → 2 (1 public + 1 gitignored) |
| Files deleted | 6 (4 bios + 2 folder-metadata stubs) |
| New canonical files at root | 2 (ABOUT-TOM.md, ABOUT-TOM-CONFIDENTIAL.md) |

---

## Why It Matters

Both streams are governance work, not feature work. The provenance generalisation moves Reginald a step closer to "every artefact Reginald produces carries its own evidence chain" — the position the morning's blog draft argued for. The bio consolidation closes a quiet leak surface: the day rate and generated wealth figures had been duplicated across files with mixed audiences, and a careful reader of the wrong file could have found them. Both changes reduce the surface area future maintenance has to touch.

---

## Next Steps

- Watch for downstream surfaces that still pull the founder bio from one of the four retired locations (LinkedIn auto-publishers, sponsor docs, books). Repoint each one at `ABOUT-TOM.md` as they surface.
- Audit whether any other artefact-producing pipeline beyond the audit suite should adopt the provenance sidecar convention now that the primitive sits at the Reginald level.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 2717f4ec | Provenance practice: Reginald-level primitive + generic wrapper + pre-commit hook + skill |
| a83e6ec1 | Docs: CLAUDE.md + README.md document the provenance-sidecar practice |
| _pending_ | Founder bio consolidated to ABOUT-TOM.md + ABOUT-TOM-CONFIDENTIAL.md; four duplicates retired |
