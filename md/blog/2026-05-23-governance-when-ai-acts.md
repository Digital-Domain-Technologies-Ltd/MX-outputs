---
title: "Governance for AI that Acts"
description: "Every existing AI-governance framework was designed for a static model: one input, one output, one owner. Agentic systems plan, delegate, and act across multiple steps without waiting for approval. The architecture our governance maps to no longer matches the architecture our systems run on. Here is the practical move."
author: Tom Cranstoun
created: 2026-05-23
modified: 2026-05-23
version: "0.1"

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

Every major framework we work with, the EU AI Act, our internal model-risk policies, our model-validation standards, was designed for a static model. One input, one output, one owner. The validation we ask for is a sign-off at the point the model is deployed. The audit trail we expect is a record of what the model returned for each query.

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

The sidecar is a single JSON file at the audit's results directory. The report's frontmatter carries a pointer to it. Our PDF generator embeds the frontmatter as XMP metadata inside the PDF. The result: the PDF artefact a client receives carries, in its own metadata stream, a pointer to the evidence chain that produced it. An auditor with the PDF and access to the source data can walk the chain. An auditor without the source data can still verify the chain's hashes against the PDF the chain claims to have produced.

## Why we made it a multi-framework artefact

A specific framework will always lag the technology. The EU AI Act, the European Accessibility Act, the UK ICO AI guidance, the US NIST AI Risk Management Framework, the Colorado AI Act: each carries its own vocabulary, its own evidence expectations, its own definition of what counts as a substantive control. If we built the sidecar against one framework, the next framework would arrive and we would need a second sidecar.

We have built it as a multi-framework evidence vehicle. Each step in the chain carries a `frameworks` array naming which regimes that step's record is intended to serve as evidence for. EAA records appear on accessibility-conformance steps. EU AI Act and UK ICO records appear on every LLM-driven step. NIST AI RMF and Colorado AI Act records appear on brand-attribution and decision-track steps where output-impact and brand-mention surface as material concerns. The sidecar holds the union of all of those at the top level so an inspector can see at a glance which regimes the audit is intended to address.

We are explicit on the point that needs to be explicit: this is an evidence vehicle, not a compliance grant. Producing the sidecar does not make an organisation compliant with any of those regimes. Compliance remains a legal duty of the organisation. What the sidecar provides is the queryable, tamper-evident record those regimes expect organisations to be able to produce on inspection. Three audiences read the same fabric: auditors trace the inspection clause to every decision that cited it; managers see a sequence-numbered tamper-evident log of every agent action against every policy version; regulators verify each link with their own standard libraries (hash check, signature check, identifier resolution).

## The shape of the chain, in one example

When we audit a client's website, the pipeline runs a sitemap fetch, a crawl, eleven discovery probes, a deterministic infill against a contract that declares every placeholder the report carries, an LLM-driven prose rewrite for the narrative paragraphs, a Phase 3 gate suite of more than fifteen checks (some deterministic, three or four LLM-judged), an error-section regeneration pass, and a PDF render. Each of those, individually, is one step in the chain. The chain's full length on a five-page audit is somewhere between 150 and 250 steps. The sidecar records them in order.

Most are deterministic and uneventful. A reader scrolling the chain sees that the sitemap fetch returned 13 URLs, that the crawl visited 5 of them, that the well-known probe checked 41 paths and found one. They see that the LLM prose rewrite ran 18 times against 18 separate REWRITE blocks in the report template, each with the same rubric hash, each emitting a measured output length. They see that gate 4b coherence checked eight cross-section invariants and recorded zero findings. They see that the PDF generator embedded the sidecar's path in the PDF's XMP metadata and exited zero.

If something had gone wrong (an LLM hallucinated a figure not in the source data, a gate fired and recorded a blocker, the rubric drifted from its declared hash), the corresponding step in the sidecar shows the drift, the reasoning, the inputs, and the operator. The chain shows what happened, why, and under whose name.

## Where this leaves us

Boards have asked us for two years what the practical AI-governance answer looks like. The answer we have settled on is not another policy document. It is a record format the systems can produce while they run, a sidecar that travels with the deliverable, and a doctrine that says: every artefact this organisation ships has, in its own metadata, a pointer to the evidence chain that produced it.

Our audit pipeline runs this doctrine. The blog you are reading carries the same frontmatter convention; the next time we publish a paper, the same pointer will appear on it. The principle generalises. Any system that produces an artefact can carry a sidecar pointer that travels with it. Any agent in that system can record the step it took and the rubric it took it under. Any auditor with the artefact can walk back to the chain.

If your governance was built for AI that returned an answer, and your systems are now AI that acts on its own, the move that matters is to make the agents account for themselves in the artefacts they ship. Producing the artefact is the doable part. Asking for it is the part that needs board authority.

We are happy to walk anyone through the sidecar format. The example above is from a live audit, and the structure is public. Reach us at <info@cognovamx.com>.
