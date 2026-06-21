---
title: "Co-Directors Report — canonicalUri Shipped End-to-End"
description: "Renamed canonicalUrl to canonicalUri across the open MX standard, added a hard-blocking validator gate, and backfilled the field across every MX-aware md file in the workspace."
author: "Tom Cranstoun"
created: 2026-05-03
modified: 2026-05-03
version: "1.0"

type: report
tags: [directors-report, session, morning]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-03-morning-report.md
  purpose: "Renamed canonicalUrl to canonicalUri across the open MX standard, added a hard-blocking validator gate, and backfilled the field across every MX-aware md file in the workspace."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - canonicalUri Shipped End-to-End"]

---

# Co-Directors Report — canonicalUri Shipped End-to-End

**Date:** 3 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

The MX Core Metadata draft's `canonicalUri` field is now shipped end-to-end: the open-standard draft has been renamed and rewritten in timeless prose, the hub validator hard-blocks any md file missing the field, and a one-shot backfill has applied the correct raw-GitHub URI to 2,165 existing files across six repositories. Every MX-aware document in the workspace now declares its authoritative location.

---

## What Was Done

### 1. Open-standard draft set tightened

The MX Core Metadata note (`mx-shared-gathering/draft-core-metadata.md`) was updated in three passes. First, a duplicate `url` pass-through was removed. Then `canonicalUrl` was reframed: the value type widened to any RFC 3986 URI (so `file://`, `smb://`, internal `https://`, and public `https://` all carry meaningful tier signal through the URI scheme alone), and the field was renamed to `canonicalUri` to match. An `mx.visibility` enum was prototyped and then explicitly cut after interview — the URI scheme already disambiguates the tier and a separate field would be standard-weight without a downstream consumer.

The whole draft set was then swept for changelog-flavoured prose and brought into the timeless wording rule: `mx-shared-gathering/draft-{core-metadata, field-pattern, cogs, contract-fingerprinting, document-accessibility, agent-directory-discovery}.md` all read as if their current state has always been the state. Carve-outs preserved: each note's §2.2 draft-status disclaimer, domain uses of "migration" / "deprecated" / "superseded", and real present-tense business-process language.

### 2. Validator hard gate

`scripts/cog-field-rules.js` now exports a hardcoded `REPO_MAP` covering MX-hub plus all eleven submodule mounts (owner, repo, branch, visibility), captured live from `gh repo view`. Two helpers (`getRepoForPath`, `deriveCanonicalUri`) compute the expected raw-GitHub URI for any file in the workspace.

`scripts/lib/frontmatter-validator.js` now hard-blocks any md file missing `canonicalUri`. Two enforcement paths: MX docs require `mx.canonicalUri` (the parser flattens the `mx:` block, so the check reads `parsed.canonicalUri`); gathering drafts require the field at top level (kramdown-rfc compatible, since gathering drafts cannot carry the `mx:` namespace by their own rules). Mismatch with the derived URI is also a hard error so a stale value (e.g. after a file move) cannot pass.

### 3. Backfill across the workspace

`scripts/backfill-canonical-uri.js` walks every md file the validator considers in-scope, computes the derived URI, and inserts it into the right zone for each file. The sweep modified 2,165 files across six writable submodules and the hub. Zero errors. The 174 in-scope files without any frontmatter were left untouched (they fail the pre-existing `missing-frontmatter` check, which is unrelated to this work).

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 7 (6 submodule + 1 hub pending) |
| Files changed | ~2,172 |
| Lines added | +2,646 |
| Lines removed | −33 |
| Repositories touched | 7 |
| md files brought into compliance | 2,165 |
| md files still failing (pre-existing, no frontmatter) | 174 |

| Submodule | Files | Hash |
|-----------|-------|------|
| mx-shared-gathering | 10 | `d5d9d07` |
| allaboutv2 | 427 | `9fe89c7d` |
| mx-audit | 49 | `f474194` |
| mx-crm | 122 | `f90ca70` |
| mx-outputs | 559 | `28b2037` |
| mx-plugin | 7 | `1e91a47` |

---

## Why It Matters

Standards work that lives only in a draft is theatre. This segment closed the gap between the standard (the draft note) and the enforcement (the validator hook on every Edit/Write of an md file). The hardcoded repo-visibility map keeps the URI derivation deterministic and offline — no network call, no token, no surprise on a flight. Every md file in the workspace now declares where it authoritatively lives, in a form an agent holding a copy can actually fetch.

---

## Decisions Made

- Cut the proposed `mx.visibility` field entirely. The URI scheme on `canonicalUri` already disambiguates local / shared / corporate / public; `confidential` and `doNotIndex` already cover distribution policy. A new tier field would be weight without a consumer.
- Keep the field universally MUST at Level 2. Files with no public URL declare `file://`; the carrier itself is the canonical location and the URI says so explicitly.
- Hardcode the repo→GitHub map in `cog-field-rules.js` rather than reach for `gh repo view` at runtime. Deterministic, offline-safe, version-controlled.

---

## Next Steps

- Watch for the next session that adds a new submodule — the `REPO_MAP` in `scripts/cog-field-rules.js` will need a matching entry, or the validator will fail every file under the new mount.
- Pre-existing `missing-frontmatter` failures on 174 in-scope md files remain. These are not new, but the validator now lists them more visibly. A separate sweep would clear them.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `d5d9d07` (mx-shared-gathering) | Rename canonicalUrl to canonicalUri, widen value type to URI, backfill across drafts |
| `9fe89c7d` (allaboutv2) | Backfill canonicalUri across MX-aware md files |
| `f474194` (mx-audit) | Backfill canonicalUri across MX-aware md files |
| `f90ca70` (mx-crm) | Backfill canonicalUri across MX-aware md files |
| `28b2037` (mx-outputs) | Backfill canonicalUri across MX-aware md files |
| `1e91a47` (mx-plugin) | Backfill canonicalUri across MX-aware md files |
| `_pending_` (MX-hub) | Add canonicalUri validator gate, hardcoded repo-visibility map, backfill script |
