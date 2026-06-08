---
title: "Co-Directors Report — Local-LLM audit robustness + Scott profile alignment"
description: "Three patches make the local-LLM audit option production-grade; Scott's contact cog now carries his LinkedIn-stated CogNovaMX role."
author: "Tom Cranstoun"
created: 2026-05-30
modified: 2026-05-30
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-30-afternoon-report.md
  purpose: "Three patches make the local-LLM audit option production-grade; Scott's contact cog now carries his LinkedIn-stated CogNovaMX role."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Local-LLM audit robustness + Scott profile alignment"]
---

# Co-Directors Report — Local-LLM audit robustness + Scott profile alignment

**Date:** 30 May 2026 - Afternoon
**Segment:** afternoon (since noon)

---

## Summary

Twin themes this segment. First, three patches landed on the audit pipeline that make the local-LLM (Ollama) path production-grade after a six-attempt self-audit of mx.allabout.network kept wedging on provider defaults. The local-LLM option is the answer to "can we run an audit without site content leaving our network", so it had to actually work end-to-end. It now does. Second, Scott McGregor's CRM contact cog was enriched with his LinkedIn-stated CogNovaMX co-founder role, his LPC second-generation Director framing (1969 family business), and his prior 12-year Surfprint Web2Print history, so the CRM record matches what an external check on Scott surfaces.

---

## What Was Done

### 1. Audit-pipeline robustness for local-LLM runs

Three patches drove out of a forensic loop on mx.allabout.network's self-audit. The site is our own; the audit was meant to be a routine check; it took six runs to ship.

The first failure mode was silent input truncation. Ollama defaults its context window to 4096 tokens regardless of what the underlying model supports. Pass-2 rewrite prompts in the audit are routinely 6,000 tokens or more, so Ollama silently truncated the input, took five minutes to evaluate the truncated prompt, and returned HTTP 500 with no surfaced error. The pipeline only saw timeouts. Fix: `DEFAULT_NUM_CTX = 32768` baked into the LLM client, with `MX_AUDIT_LLM_NUM_CTX` retained as an override for memory-constrained hardware.

The second failure mode surfaced once the first was fixed. Four-way parallel requests to a 20-billion-parameter model at 32k context overwhelmed the local key-value cache on a 64 GB MacBook, dropping sockets that the client read as `fetch failed`. Lowering to 2-way pressure cut the failure markers from nine to four; only serial (1-way) eliminated them. Fix: `MX_REWRITE_CONCURRENCY` is now provider-aware. Ollama defaults to 1, Anthropic stays at 4. Slower in absolute terms; reliable in practice.

The third patch is the architecturally significant one. When retries did exhaust, the rewrite script left `[REWRITE FAILED after N attempts: <reason>]` literals inline in the deliverable markdown. No gate caught them; the findings sidecar at the top of the PDF showed only the routine findings, not the rewrite failures, so the reader had to grep the prose body to find errors. A new Gate 0-rewrite landed in the audit pipeline as the first gate in Phase 3. It scans the post-rewrite report for the failure literals, records each as a `severity: 'error'` finding in `audit_errors.json` with line numbers and a deduped reason summary, and ships four remediation suggestions inline. The PDF's error zone now surfaces rewrite failures with citations and fix paths, not buried in prose.

Validated end-to-end on run six of the mx.allabout.network audit. Four surviving markers surfaced cleanly into the sidecar's Errors block before the run with concurrency lowered to 1.

### 2. Scott McGregor contact cog aligned to LinkedIn

The CRM record for Scott was carrying the relational and equity-and-grant context (cousin, 25% A shares in CogNovaMX, MX Printworks publisher, Co-Investigator on the Reginald CCE grant) but not the public-facing identity an external check on Scott surfaces. The cog now also carries: his LinkedIn headline ("Director | Design & Print Production, Digital Systems & Applied AI | Scaling a 1969 Established Business"); the LPC second-generation framing with the 1969 establishment date; his Glasgow College of Building and Printing education; his stated CogNovaMX role as Co-founder, Commercial & Creative Strategy (since Feb 2026); and his prior 12-year Managing Director run at Surfprint (Jan 2012 to Feb 2024) on Web2Print software. The headline and the role descriptions are quoted from his profile, not paraphrased, so the CRM and his external identity say the same thing in the same words.

The LinkedIn branding `MXPrintWorks` (single-word) versus the internal `MX Printworks` (two-word) was flagged for Tom's direction; cog change does not pre-decide it.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (this segment, pending hub) | 0 hub, 1 mx-outputs |
| Files changed (hub working tree) | 15 |
| Lines added | +452 |
| Lines removed | -261 |
| Repositories touched | 2 (hub + mx-outputs) |
| Audit-pipeline patches | 3 (NUM_CTX, concurrency, Gate 0-rewrite) |
| mx.allabout.network audit attempts taken | 6 |
| CRM contact records enriched | 1 (Scott McGregor) |

---

## Why It Matters

The local-LLM audit option was the one in the regulated-buyer pitch where Tom can answer the procurement question "does our site content leave our network" with "no". Until this afternoon, that answer was technically true but operationally fragile - the local path silently truncated long prompts, dropped sockets under concurrency, and emitted failure literals into the prose where no reader would notice. Three patches converted "the local-LLM option exists" into "the local-LLM option runs end-to-end on a live site and lifts every in-band failure into the structured error surface". For the regulated-buyer conversation, that moves the local option from a claim to a demonstration.

The Scott profile alignment is a smaller but compounding move. As CogNovaMX's commercial-and-creative co-founder, Scott is increasingly the person a prospective sponsor or franchise operator checks first. The CRM record now matches what they will find publicly, in the same words he uses about himself, which removes a small but cumulative source of friction.

---

## The Insight

Local-LLM provider defaults optimise for small interactive chats, not for long structured-output pipelines. Three independent failure modes (truncation, concurrency-induced socket drops, in-band error literals) all surface as different symptoms of the same root cause: the provider's defaults are wrong for our workload. Generalising: any audit or batch job using Ollama needs explicit context-window and concurrency settings, plus a post-stage gate that lifts any in-band failure literals into the structured error surface. The same shape will apply to any future local-LLM integration. Captured in LEARNINGS.md 4.38; flagged for migration into `audit-gotchas.md` next pass.

---

## Decisions Made

- Ollama context-window default of 32k baked into the client, not just env-var-driven. Reasoning: the failure mode was silent (truncation plus a five-minute idle plus HTTP 500), so leaving the safe default at the env-var layer would have re-trapped the next operator.
- Provider-aware concurrency default. Ollama=1, Anthropic=4. Reasoning: 2-way Ollama dropped sockets on a 64 GB Mac; 1-way did not. The slower wall-clock cost is acceptable; the alternative is silent rewrite failures shipped in the deliverable.

---

## Open Questions

- `MXPrintWorks` (single word, LinkedIn branding) versus `MX Printworks` (two words, internal canon). Both forms appear in Scott's contact cog now. Pick one and align canon, or accept the LinkedIn brand as the public form and keep the internal form for the operational entity. Question logged in the response to the cog edit; no canon sweep done.

---

## Next Steps

- **Run the next regulated-buyer-shaped audit on the local-LLM path.** The mx.allabout.network self-audit demonstrated the local path; the next test is a real client-shaped site so the demonstration carries weight in a procurement conversation.
- **Decide MXPrintWorks vs MX Printworks branding.** Pick a canonical form and sweep canon to match, or formalise the split.
- **Promote audit-gotchas migration of the Ollama-defaults learning.** LEARNINGS.md 4.38 captured the rule; the context-window trap and the post-rewrite gate pattern are both stable enough to migrate to `datalake/knowledge/system/audit-gotchas.md` next pass.
- **Carry forward the morning report's outstanding items.** Watching the Machines drafts promotion decision; editorial follow-up on `many-agents-one-metadata-layer.html` and `cms-summit-26-frankfurt-write-up.html`; front-page mention for the Watching the Machines column.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 3e7e7c6 (mx-outputs) | Preserve mx.allabout.network audit run 4 before serial rerun |
| _pending_ (hub) | Audit-pipeline robustness for local-LLM runs (NUM_CTX, concurrency, Gate 0-rewrite) + Scott contact cog LinkedIn enrichment |
| _pending_ (hub) | Docs: CHANGELOG 2.84 + LEARNINGS 4.38 (audit-pipeline robustness) + REMINDERS |
| _pending_ (hub) | Directors report (this report) + mx-outputs pointer bump |

---

*Filed 2026-05-30 afternoon, version 1.0. Hub commits land in Step 3 of this step-commit run; the table will be backfilled when the SHAs exist.*
