---
title: "Co-Directors Report — Audit Pipeline Hardening + Third-Party Iframe Detection"
description: "Morning session: shipped third-party iframe awareness across the audit stack, simplified gates to single-pass, and fixed two latent bugs the new revalidation step surfaced."
author: "Tom Cranstoun"
created: 2026-05-20
modified: 2026-05-20
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-20-morning-report.md
  purpose: "Morning session: shipped third-party iframe awareness across the audit stack, simplified gates to single-pass, and fixed two latent bugs the new revalidation step surfaced."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit Pipeline Hardening + Third-Party Iframe Detection"]
---

# Co-Directors Report — Audit Pipeline Hardening + Third-Party Iframe Detection

**Date:** 20 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

We re-ran the typo3.org audit and used it as a forcing function to harden the audit pipeline against three structural defects we had been carrying. The pipeline now distinguishes vendor-injected iframes from site-template content (a class of finding the audit was misattributing to the client), runs each stylistic gate exactly once instead of looping, and re-checks any failed early gate against the post-repair report so the final consolidated repair's fixes actually count. The headline result: typo3.org closed cleanly on first attempt with the new code in place.

---

## What Was Done

### 1. Third-party iframe detection (end-to-end)

The typo3 audit flagged a "missing iframe title" Pa11y finding that the report told the client to fix in their template. The iframe in question was injected at runtime by Usercentrics' consent-management SDK and does not exist in the typo3 template, so the recommendation was wrong. Five surfaces now know this:

- **Detection** (`reportGenerators.js`): every Pa11y recurring pattern is stamped with `thirdPartyHost` when its `<iframe src>` resolves to an external host.
- **Infill** (`infill-report.js`): the WCAG_RECURRING_PATTERNS facts block splits site-template patterns from vendor-iframe patterns and labels each bullet with the third-party host, so the Pass 2 rewrite sees the distinction.
- **Both audit templates** (`web-audit-suite-template.md`, `ecommerce-audit-template.md`): explicit WRITE rule directing the rewrite to name the vendor and prescribe an SDK upgrade or DOM-observer patch, and an explicit DO_NOT rule against prescribing template edits for these rows.
- **Fierce-critic deterministic** (`audit-fierce-critic.js`): new `checkThirdPartyIframeTemplateBlame` check loads the patterns sidecar and flags template-fix prose near third-party selectors.
- **Fierce-critic LLM** (same file): new AREA 7 in the rubric and new `third-party-iframe-template-blame` category catch the variants the regex cannot.

The detection works against the real typo3 data (confirmed: `#cross-domain-consent-sharing-iframe → app.usercentrics.eu`), and the published Priority 1 prose now reads "Engage the vendor (app.usercentrics.eu) to release an SDK update" rather than "edit the template that renders this iframe."

### 2. Single-pass gates (no more loop machinery)

Gates 3 (fierce critic) and 4 (LLM judgment) used to run in a self-repair loop capped at three iterations, with persistent round counters per report. We collapsed the loop: each gate runs once, then `repair-report.js` patches if needed, then we move on. Removed `LLM_RUN_CAP`, the rounds-file read/write, the cap-reached "skipped" branch, the for-loop, and the `repaired` break logic from `audit-pipeline.js`. Docs in lockstep: `mx-audit.cog.md`, `audit-site/skill.md`, `audit-report/skill.md` no longer mention "self-repair loop" or "3 iterations."

### 3. Post-repair revalidation (the structural fix Tom asked for)

The pipeline had a real bug: failing early gates set `anyFail = true`, then the final consolidated repair rewrote the report, but the pipeline never re-checked the early gates and exited 1 on the stale failure state. We now track failed gates in a `Set`, build a `gateRunners` map of cheap script invocations, re-run each previously-failed gate against the post-repair report, and clear `anyFail` only if every previously-failed gate now passes. The pipeline log shows a new `Gates 0 — Post-repair revalidation` section when this fires.

### 4. Two latent bugs the revalidation surfaced (fixed)

The revalidation step did its job: it stopped masking these.

- **`repair-report-final.js`** was writing the model's reasoning preamble ("Looking at the 5 findings, I need to determine which actually require fixes...") to the report file. The leak made it into a published PDF (page 1 of 45). Added a strip block that detects free-form prose before the YAML frontmatter and slices the file from the first `---` delimiter. The fix is paranoid by design — if the model emits clean output, the strip is a no-op.
- **`check-report-voice.js`** was treating `the site` as a third-person voice marker even when it sat inside a compound noun like *the site theme*. Tightened `THIRD_PERSON_RE` to require either a verb (curated list of voice-marker verbs) or clause-terminal punctuation after `the (site|audit|report|customer|client|company)`. Real third-person assertions still get flagged; compound nouns no longer trip false positives.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 2 (mx-outputs); hub commit pending Step 3 |
| Files changed (hub working tree) | 13 |
| Lines added | +281 |
| Lines removed | −52 |
| Repositories | 2 (mx-hub, mx-outputs) |
| Surfaces aligned for third-party-iframe rule | 5 (detector, infill, two templates, fierce-critic) |
| Pipeline complexity removed | LLM_RUN_CAP loop + rounds files |
| Pipeline complexity added | Post-repair revalidation gate |
| Latent bugs surfaced + fixed | 2 |

---

## Why It Matters

The audit pipeline is the proof artefact for the CogNovaMX consultancy revenue line — every prospect engagement that goes via this pipeline carries our signature on the output. Three classes of defect were leaking through:

1. **Wrong remediation guidance** (template-fix for third-party iframes) makes us look like we don't understand the client's stack. Clients with consent SDKs are a large slice of any enterprise prospect set.
2. **LLM reasoning preamble** in a published PDF is the kind of artefact that gets screenshot and shared as evidence the tool is not production-ready. Tom caught one on this session.
3. **False-positive voice flags** were forcing manual intervention on every audit, eroding the "deterministic pipeline" claim.

Each of these now has both a fix and a structural defence: revalidation surfaces gate failures the consolidated repair didn't address, the strip block catches preamble leaks at write time, and the voice regex stops false-flagging compound nouns.

---

## The Insight

When the consolidated repair sits between gate detection and gate enforcement, the gate's failure state becomes stale the moment the repair runs. Either the gate must re-check, or the repair must address whatever the gate flagged. We took the first path because the second requires the repair script to understand every gate's rubric (a much larger surface). The revalidation pattern generalises: any pipeline where a fix step modifies the artefact a check step inspected should re-run the check.

---

## Decisions Made

- Drop fierce-critic + llm-judgment from a 3-iteration loop to a single pass. The loop was masking real defects rather than converging.
- Keep `failedGates` as a Set rather than a boolean. The revalidation step needs to know *which* gates to re-run, not just *whether* any failed.
- Strip the model's preamble in the repair script rather than tightening the prompt to forbid it. Prompts the model already ignores are not a control.

---

## Next Steps

- Verify on the next non-typo3 audit (next prospect run) that the revalidation step continues to behave when zero early gates fail (silent no-op confirmed; want a real-traffic confirmation too).
- Consider extending the third-party-iframe detection pattern to other DOM elements vendor SDKs inject (chat widgets, analytics buttons, banners): the same selector-vs-source-host check applies.
- The `repair-report-final.js` preamble leak suggests the system prompt is not reliably steering the model to emit clean output. Worth a focused tightening pass on that prompt at the next quiet moment.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 9d32f05 | Add typo3.org audit deliverable (5 pages, 2026-05-19) [mx-outputs] |
| 0949041 | Regenerate Gathering festival pitch PDF [mx-outputs] |
| _pending_ | Hub commit — audit pipeline simplification + third-party iframe detection + repair preamble strip + voice regex tightening |
