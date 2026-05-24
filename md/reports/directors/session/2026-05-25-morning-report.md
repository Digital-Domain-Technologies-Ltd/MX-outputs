---
title: "Co-Directors Report — Audit pipeline gate hardened and LLM prompts moved out of code"
description: "Dotfusion audit lands all gates green. Every LLM prompt and user message in the audit pipeline is now an editable, auditor-trackable markdown file."
author: "Tom Cranstoun"
created: 2026-05-25
modified: 2026-05-25
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-25-morning-report.md
---

# Co-Directors Report — Audit pipeline gate hardened and LLM prompts moved out of code

**Date:** 25 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

The audit pipeline shipped a clean dotfusion.com deliverable, but only after diagnosing a misleading initial failure: the 0b-voice gate blocker was traced to hardcoded prose in three template-source locations, not to anything the LLM repair pass could fix on its own. While fixing that root cause we lifted every LLM system prompt and user-message template used by the audit pipeline (eight scripts in total) out of inline JavaScript and into editable markdown files with auditor-trackable YAML frontmatter, behind a single loader. A non-developer can now edit the rubric an audit runs under without touching code, and any regulator walking the provenance chain can reach the exact prompt body the model saw.

---

## What Was Done

### 1. Dotfusion audit landed clean

We re-ran the dotfusion.com audit end-to-end and it now produces a tagged PDF with every gate green. The audit deliverable carries 18 sidecar files (per-section CSVs, gate sidecars, AI and deterministic provenance chains) under mx-outputs/audit/2026-05-24/dotfusion.com/. The report PDF is ISO 14289-1 Level 2 conformant, which is the structural baseline the EU Accessibility Act expects for digital documents distributed to EU citizens.

### 2. Root-cause fix for the voice gate

The initial audit attempt failed Gate 0b-voice. The error sidecar pointed at an overpromise warning ("agents will not discover"), but that turned out to be a sideshow. The real blocker was mixed voice in three sections, all sourced from hardcoded prose in the audit's own template ("This audit covers...", "this audit measures...", "re-running the audit can verify..."). The repair LLM could not fix this because its own rewrite instructions told it to convert "the audit" into "this audit" — but the voice gate flags both forms equally. We rewrote the three template strings to first-person consultant voice, and updated the repair prompt to drop the bad recommendation.

### 3. LLM prompts extracted to editable markdown

Every system prompt and user-message template in the eight LLM-using audit scripts now lives as a standalone markdown file. New locations: mx-reginald/audit/system-prompts/ (eight prompts plus README) and mx-reginald/audit/user-messages/ (seven templates plus README). Each file carries YAML frontmatter declaring title, description, author, created, modified, version, contentType (info-doc), audience, tags including auditor-trackable, runbook, and a canonicalUri. The loader at mx-reginald/audit/lib/prompts.js strips the frontmatter before sending the body to the model, and substitutes {{placeholder}} markers in user messages from a vars object, raising a loud error on missing keys rather than silently shipping an unfilled placeholder.

### 4. Defence-in-depth voice sanitiser

We extended mx-reginald/audit/lib/sanitise-prose.js with a deterministic hedge transform that rewrites "agents/assistants/crawlers/bots (cannot|will not|won't|do not|don't) (see|read|reach|parse|find|discover|cite|...)" by replacing the negation cluster with "may not". The sanitiser runs at every write boundary in the pipeline (infill plus three repair passes), so future probe-script or template authors who accidentally write deterministic-inability language about agent behaviour cannot reintroduce the same class of gate failure.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 4 (1 allaboutv2 + 2 mx-outputs + 1 hub pending) |
| Submodules touched | 2 writable (allaboutv2, mx-outputs) |
| LLM scripts wired to loader | 8 |
| Editable prompt files created | 8 system prompts + 7 user messages + 2 READMEs |
| Template-source lines fixed | 3 (web-audit-suite-template.md x2, provenanceGap.js x1) |
| Gates that previously blocked, now green | 0b-voice, 0b-scope |
| Final dotfusion audit gates passing | every gate (Pipeline complete, all gates passed) |
| PDF accessibility conformance | EAA Level 2 (ISO 14289-1, pdfuaid:Part=1) |

---

## Why It Matters

The audit subsystem is the product we sell. A blocked audit is a blocked invoice; a misleading error sidecar that says "blocker" while the deliverable is actually clean confuses the operator and slows every future run. Three changes landed this session reduce that operator cost:

1. The root cause was at template source, not at the LLM. Fixing prose in the template means the next audit on the next site does not encounter the same blocker. The fix scales.
2. Prompts are now content, not code. A copy editor reviewing the rubric the model runs under does not need to read JavaScript. The runbook line in each frontmatter tells the next editor what changes are safe and which gate the prompt mirrors.
3. The frontmatter on every prompt is the artefact a regulator walks to from the audit's provenance chain. EU AI Act and UK ICO AI guidance both expect the documenting organisation to surface "the system prompt the model received" on demand — we surface it as a versioned, addressable file with a canonicalUri.

---

## The Insight

The voice gate had a prompt that was actively wrong. The repair-pass system prompt recommended converting "the site" into "this site" as a fix for third-person markers, but the gate flags both forms equally — the LLM was repairing an utterance into a different utterance that also tripped the gate, then the pipeline retried, then the LLM produced another flagged version. The repair loop could not converge. This is the same failure pattern as a test that asserts the wrong contract: the system did exactly what it was told to do and still produced the wrong output. We now keep the gate's noun list and the prompt's recommended rewrites in lockstep, and the prompt body documents the anti-pattern explicitly so the next editor does not reintroduce it.

---

## Decisions Made

- Sanitise at the write boundary, not the gate. House rule confirmed: when an LLM keeps reintroducing a banned construction, fix it deterministically at every file-write boundary rather than failing the build downstream. The em-dash transform set the precedent; the voice hedge follows the same shape.
- Prompts and user messages are content, owned by editors, not code, owned by developers. The loader is the only piece of code; the rubric itself is a markdown file.
- Don't fix at source-of-LLM-output (probe scripts produce strings like "agents cannot reach") for 30+ scattered locations. The sanitiser at the write boundary handles all of them in one pass.

---

## Open Questions

- The audit pipeline's trailing summary still says "1 blocker finding(s) recorded" even when the pipeline prints "all gates passed". The mismatch comes from audit_errors.json retaining the initial-gate verdict from before the auto-repair pass cleared the issue. A small follow-up: clear the sidecar after a successful repair-and-rerun, or have the summary read from the actual final gate state rather than the cumulative log.
- Five other LLM scripts now have editable prompts too (rewrite-report, audit-fierce-critic, audit-llm-judgment, audit-llm-attribution-judge, provenance-gap-llm). Worth confirming none of them have similar lockstep issues between gate noun lists and prompt rewrite suggestions before the next paid client audit.

---

## What Changed About Me

Tom corrected the framing twice in this session. First when I patched a single line in one report by hand and Tom said "i need the scripts and the system prompts to work without blocking" — the lesson there was that hand-patching the artefact is never the answer when the artefact is regenerated by a pipeline; fix the pipeline. Second when I had extracted three system prompts and Tom said "fix all others" — the lesson there was to look at the whole class of work, not just the example. Both corrections pointed at the same underlying habit: when a structural fix exists, take it; do not stop at the first instance.

---

## What This Means for Investors

The audit subsystem is the cash mover for CogNovaMX in the near term. This session reduced the operator cost per audit (no more hand-patches), opened the prompts to copy-editor review without a developer in the loop (faster iteration on tone and framing), and produced auditor-trackable artefacts that EU AI Act and UK ICO requirements can be answered against. The dotfusion deliverable itself is now a clean reference customer for the pipeline.

---

## Next Steps

- Clear audit_errors.json (or change the summary printer) so a successful audit does not report a stale blocker in its closing message.
- Verify the four non-repair LLM script prompts have no gate-vs-prompt lockstep issues before the next paid audit (rewrite-report and the four critics).
- Move the mx-site/blog/drafts/files-away-from-source.html draft to either a published or deleted state; it has been sitting untracked across multiple sessions.

---

## Commit Log

| Hash | Description |
|------|-------------|
| ce4e995d | (allaboutv2) Update COG expansion to Community Owned Governance Standard across .mx.yaml.md files and the cog-templates README |
| 1c3bff9 | (mx-outputs) Update COG terminology to Community Owned Governance Standard across cognovamx cogs, directors reports, reginald cog, and regenerated blog sitemap and llms-full |
| 2fb22c0 | (mx-outputs) Add dotfusion.com audit deliverable for 2026-05-24: tagged PDF report, AI plus deterministic provenance sidecars, per-section CSVs, and gate sidecars (fierce-critic, llm-judgment, scope, voice, verification, wellknown). Audit lands all gates green; voice gate triggered initial template-source repair which now passes |
| _pending_ | (hub) Audit pipeline: template-source fix for 0b-voice blocker, sanitiser hedge transform, and full extraction of eight LLM script prompts plus seven user-message templates to editable markdown with auditor-trackable frontmatter |
