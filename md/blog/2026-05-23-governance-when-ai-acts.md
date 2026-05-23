---
title: "Governance for AI that Acts"
description: "Every existing AI-governance framework was designed for a static model: one input, one output, one owner. Agentic systems plan, delegate, and act across multiple steps without waiting for approval. The architecture our governance maps to no longer matches the architecture our systems run on. Here is the practical move."
author: Tom Cranstoun
created: 2026-05-23
modified: 2026-05-23
version: "0.3"

mx:
  status: draft
  contentType: blog-post
  audience: [business, humans, machines]
  targetReaders: "Boards and executives at organisations deploying agentic AI, plus the technical teams implementing the supporting evidence chains."
  tags: [governance, ai-act, agentic-ai, provenance, evidence-vehicle, mx]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/blog/2026-05-23-governance-when-ai-acts.md
---

# Governance for AI that Acts

An AI agent flags a credit anomaly in our portfolio.

It calls a second agent to verify. That agent pulls data, runs a model, and triggers a transaction. A third agent logs the decision. No human saw any of it happen.

Most boards already live some version of this tension, in their audit cycles and risk reviews. The gap they feel is real, and it runs deeper than process. The architecture of our governance was not built for the architecture of our systems.

## What the frameworks assumed

Every major framework we work with (the EU AI Act, our internal model-risk policies, and our model-validation standards) was designed for a static model. One input, one output, one owner. The validation we ask for is a sign-off at the point the model is deployed. The audit trail we expect is a record of what the model returned for each query.

Agentic systems do not work that way. They plan. They delegate. They call tools and other agents. They act across multiple steps without waiting for approval at each step. When accountability is distributed across a chain of autonomous agents, our existing governance maps to nothing in particular: every framework points at one or other end of the chain and asks for documentation that the chain itself never produced.

For financial institutions that compounds fast. Regulatory exposure, fiduciary risk, and operational blind spots arrive at once, and they arrive ahead of the policies that were meant to catch them. When capability outpaces oversight, the gap is structural. It is not solved by writing one more policy on top.

## Three moves boards should make now

We have been working with three concrete moves for some time, and we think every board should be making them now:

**Map every agentic workflow in the institution.** Not the agents you bought as products. The agents your teams have stood up themselves, often inside their own tooling, often without a procurement record. The map is more important than the policy. Without it, no policy applies in the right place.

**Assign a human accountable for each agent chain.** Not a committee. A named individual with real-time intervention authority, the ability to halt the chain, override a decision, or reverse one mid-execution, not just file a post-mortem after the fact. The chain runs at machine speed; the human cannot only see it at the next risk review.

**Require audit trails that capture intent operationally.** Not just what the agent did. What it was trying to do. The reasoning it offered for each step. The parameters it was running under. The decision tree it followed to reach an action. A traditional log records the action. An evidence trail records the action and the conditions under which the agent considered the action correct.

These three look obvious on the page. They are not obvious in the operating model. Most of the AI we are deploying does not produce this trail today, because we did not ask the vendors to produce it, and because the frameworks we shop our policies against still assume the static-model world.

## What we are doing about it

We build audits for a living. Our audit pipeline at CogNovaMX is itself an agent chain. It plans, it delegates, it calls a stack of agents (some deterministic, some LLM-driven), and it produces a deliverable PDF that goes to a client. We are accountable for what the chain does, and the chain runs without a human at every step.

We have therefore been doing the audit on ourselves, and what we have built is a worked example of the audit-trail-with-intent that the three moves above call for. We call it the provenance sidecar.

Every audit our pipeline produces now ships with a structured evidence chain alongside the report. One record per consequential step the pipeline took. Each record carries:

- A stable identifier for the step (which gate, which LLM call, which probe, which repair)
- The agent that ran the step, named explicitly: `deterministic` when it was a rule, `claude-sonnet-4-6` (or whichever model) when it was an inference call
- The intent the step was operating under, in one sentence
- The parameters the step ran with (the threshold, the model temperature, the rubric hash)
- A reference for the inputs the step consumed (hashes for tamper-evidence) and the outputs it produced
- For LLM-driven steps, the rubric hash (so an auditor can verify the system prompt has not silently changed since) and an optional reasoning trace
- The human-intervention state for the step (none, review-before, review-after, override, halted)
- The outcome (pass, warn, fail, skipped)
- A timestamp

The sidecar is now a pair of JSON files adjacent to the report. The AI sidecar (`<artefact>.provenance.ai.json`) records every non-deterministic step: LLM calls, multi-agent collectors, and human-committed actions, plus their rubric hashes and reasoning traces. The deterministic sidecar (`<artefact>.provenance.deterministic.json`) records every rule-driven step: gate verdicts, CSV checks, render steps, probe results, and the PDF conformance verdict. The pair share an audit identifier, a start timestamp, an operator, and a header carrying the exact git commit of the audit tooling that produced the run.

Our PDF generator does two things with this pair. First, it embeds the AI sidecar's full JSON body inside the PDF's XMP metadata under the `xmp:ProvenanceAiPayload` field. A regulator opening the PDF alone receives the entire AI evidence chain without needing the adjacent file: the artefact is self-contained. Second, the pointer to the deterministic file travels in the PDF's XMP under `xmp:ProvenanceCompanion` so an inspector with file-system access can walk to the deterministic chain on disk. The deterministic chain stays adjacent rather than embedded (it carries operator-relevant conformance evidence at a size that would needlessly inflate the PDF).

The split exists because regulators inspecting the metadata follow a single pointer; combining both chains into one bloats the surface with rule-driven verdicts the AI-governance regimes do not care about. Splitting lets the regulator-facing surface carry the rich AI evidence in the artefact itself, while the deterministic stream stays available for operators and EAA-aligned accessibility evidence.

An auditor with the PDF can verify the chain's hashes against the artefact the chain claims to have produced. An auditor with access to source data can walk every input back to its origin.

## Why we made it a multi-framework artefact

A specific framework will always lag the technology. The EU AI Act, the European Accessibility Act, the UK ICO AI guidance, the US NIST AI Risk Management Framework, and the Colorado AI Act: each carries its own vocabulary, its own evidence expectations, and its own definition of what counts as a substantive control. If we built the sidecar against one framework, the next framework would arrive and we would need a second sidecar.

We have built it as a multi-framework evidence vehicle. Each step in the chain carries a `frameworks` array naming the regimes the record applies to. EAA records appear on accessibility-conformance steps. EU AI Act and UK ICO records appear on every LLM-driven step. NIST AI RMF and Colorado AI Act records appear on brand-attribution and decision-track steps where output-impact and brand-mention surface as material concerns. The sidecar holds the union of all of those at the top level so an inspector can see at a glance which regimes the audit is intended to address.

This is an evidence vehicle, not a compliance grant. Producing the sidecar does not make an organisation compliant with any of those regimes. Compliance remains a legal duty of the organisation. The sidecar provides the queryable, tamper-evident record those regimes expect organisations to be able to produce on inspection. Three audiences read the same fabric: auditors trace the inspection clause to every decision that cited it; managers see a sequence-numbered tamper-evident log of every agent action against every policy version; regulators verify each link with their own standard libraries (hash check, signature check, and identifier resolution).

## A worked example, end to end

When we audit a client's website, the pipeline runs a sitemap fetch, a crawl, eleven discovery probes, a deterministic infill against a contract that declares every placeholder the report carries, an LLM-driven prose rewrite for the narrative paragraphs, a Phase 3 gate suite of more than fifteen checks (some deterministic, three or four LLM-judged), an error-section regeneration pass, and a PDF render. Each of those, individually, is one step in the chain. The chain's full length on a five-page audit is somewhere between 150 and 250 steps. The pair of sidecars record them in order, with each step routed to the AI or deterministic file by the agent that produced it.

Most are deterministic and uneventful. A reader scrolling the deterministic chain sees that the sitemap fetch returned 13 URLs, that the crawl visited 5 of them, that the well-known probe checked 41 paths and found one. They see in the AI chain that the LLM prose rewrite ran 18 times against 18 separate REWRITE blocks in the report template, each with the same rubric hash, each emitting a measured output length and a 500-character reasoning excerpt. They see that gate 4b coherence checked eight cross-section invariants and recorded zero findings. They see that the PDF generator embedded the AI chain inside the PDF's XMP metadata, named the deterministic chain in `xmp:ProvenanceCompanion`, and exited zero.

If something had gone wrong (an LLM hallucinated a figure not in the source data, a gate fired and recorded a blocker, or the rubric drifted from its declared hash), the corresponding step in the sidecar shows the drift, the reasoning, the inputs, and the operator. The chain shows what happened, why, and under whose name.

## Where this leaves us

Boards have asked us for two years what the practical AI-governance answer looks like. The answer we have settled on is not another policy document, but a record format the systems can produce while they run, a pair of sidecars that travel with the deliverable, and a doctrine that says: every artefact this organisation ships carries the AI evidence chain in its own metadata stream, with the deterministic conformance chain adjacent on disk for inspectors who want the full picture.

Our audit pipeline runs this doctrine. The blog you are reading carries the same frontmatter convention; the next time we publish a paper, the same pointer will appear on it. The principle generalises. Any system that produces an artefact can embed its AI chain inside the artefact's metadata and keep its deterministic chain adjacent. Any agent in that system can record the step it took and the rubric it took it under. Any auditor with the artefact alone can read the AI chain; any auditor with disk access can walk the deterministic chain too.

If your governance was built for AI that returned an answer, and your systems are now AI that acts on its own, the move that matters is to make the agents account for themselves in the artefacts they ship. Producing the artefact is the doable part. Asking for it is the part that needs board authority.

We are happy to walk anyone through the sidecar format. The example above is from a live audit, and the structure is public. Reach us at <info@cognovamx.com>.
