---
title: "Co-Directors Report — UBERCOG required-fields fix and mx-validator path realignment"
description: "Closes the Gate 10 warning surfaced at yesterday's afternoon push. UBERCOG.cog.md gains the three required mx-validator fields, and the validator itself is aligned with the 2026-05 canon vendor-namespace decision so future cogs that adopt the canon path do not re-trip the gate."
author: "Tom Cranstoun"
created: 2026-05-26
modified: 2026-05-26
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-26-morning-report.md
---

# Co-Directors Report — UBERCOG required-fields fix and mx-validator path realignment

**Date:** 26 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Two commits closed a tooling-and-canon drift that surfaced at the end of yesterday's afternoon push. UBERCOG.cog.md picked up the three required fields the pre-push mx-validator (Gate 10) had been flagging on every push, and the validator itself was realigned with the May 2026 canon vendor-namespace decision so that the agreement holds for every future cog. Gate 10 is now clean for the canonical path; the next push that touches any cog will see a validator and a canon that agree.

---

## What Was Done

### 1. UBERCOG required-field fix

[`UBERCOG.cog.md`](../../../../../UBERCOG.cog.md) gained three fields that the mx-validator declares required for every cog: `mx.purpose` (a one-sentence statement of what the file does), `mx.stability` (set to `stable`; the cog has been the repo briefing for several months), and `x-mx-contextProvides` (an explicit array of what an agent gains by reading the cog: repository map, canon layout, routing rules, essential commands, boot chain). The pre-write field-compliance hook rejected the first attempt (the path under `mx.ai` was flagged as deprecated); the canon's preferred extension-namespace path was used instead. Two of three Gate 10 errors immediately cleared.

### 2. mx-validator alignment with canon vendor namespace

[`scripts/mx-validator.cjs`](../../../../../scripts/mx-validator.cjs) was reading `mx.ai.contextProvides` for both its required field and its recommended `contextRequired` field. That path no canon dictionary now ratifies. The May 2026 vendor split documented in [`mx-canon/ssot/cognovamx-fields.yaml`](../../../../../mx-canon/ssot/cognovamx-fields.yaml) (deprecations `contextProvides → x-mx-contextProvides` and `mx:contextProvides → x-mx-contextProvides`) moved the field to the CogNovaMX vendor-extension namespace, sitting directly under `mx:`. The validator's REQUIRED_FIELDS, RECOMMENDED_FIELDS, self-emitted report-frontmatter example, and remediation snippet were all updated to point at `mx.x-mx-contextProvides` and `mx.x-mx-contextRequired`. A header comment in the validator records the rationale so the next reader does not unwind the alignment.

### 3. Verification

`node scripts/mx-validator.cjs UBERCOG.cog.md` now returns 1 valid, 0 invalid, 0 errors, 2 non-blocking warnings (recommended `refersTo` and `mx.x-mx-contextRequired`). The push of the validator commit triggered the pre-push Gate 10 on no markdown files (the diff only touched `scripts/mx-validator.cjs`, a `.cjs` not a `.md`), so the hook's `--changed-only` mode produced no validator output and the push completed without re-running the gate. Future pushes that touch any cog will see the new path expectations.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 2 (`6c3cd18b` UBERCOG fields-add; `4ce28f62` validator alignment) |
| Files changed | 2 (UBERCOG.cog.md, scripts/mx-validator.cjs) |
| Lines added | +27 |
| Lines removed | −15 |
| Repositories | 1 (hub only) |
| Submodule pointer bumps | 0 |
| Gate 10 errors cleared | 3 (mx.purpose, mx.stability, contextProvides path) |

---

## The Insight

The mx-validator and the canon dictionary are independently enforced — the validator checks at push time, the canon's deprecation table feeds the pre-write hook at edit time — and a drift between them produces an unfixable state. A file that satisfies the canon's deprecation rule fails the validator; a file that satisfies the validator's path expectation fails the pre-write hook. The pre-write hook is the harder block (every Edit hits it), so the validator must follow the canon, not the other way round. The fix is structural: when a field migrates between paths in the canon, the validator's REQUIRED_FIELDS table needs to migrate in the same release. The deprecation entry is the canonical record; the validator is downstream of it.

---

## Decisions Made

- The mx-validator follows the canon's deprecation table when the two disagree. The canon decides where fields live; the validator's job is to enforce, not to define. Header comment in [`mx-validator.cjs`](../../../../../scripts/mx-validator.cjs) records this rule so future drift goes to the validator side, not the canon side.

---

## Next Steps

- Sweep the recommended-field warnings remaining on UBERCOG (`refersTo`, `mx.x-mx-contextRequired`). Both are pre-existing on the canon's recommended list but currently unmet on UBERCOG specifically. Low priority.
- Verify Gate 10 against the next cog edit that touches `x-mx-contextProvides` in a fresh push to confirm the path realignment holds end-to-end.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 6c3cd18b | UBERCOG: add mx.purpose, mx.stability, x-mx-contextProvides |
| 4ce28f62 | mx-validator: align contextProvides path with canon vendor namespace |
