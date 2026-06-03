---
title: Microsoft made the trace valuable. It left it unsigned.
description: Microsoft AI's Frontier Tuning turns the record of an agent's work - its steps, decisions and actions - into training data an organisation owns. That same record is the evidence of what the agent decided. Microsoft makes the trace valuable; it says nothing about how anyone establishes what is in it, who made it, or whether it has been altered. That gap is where MX sits.
author: Tom Cranstoun
created: "2026-06-03"
modified: "2026-06-03"
version: "1.0"
mx:
  status: published
  x-mx-contentState: published
  contentType: blog-post
  audience:
    - humans
    - machines
  tags:
    - mx
    - provenance
    - frontier-tuning
    - microsoft-mai
    - accountability
    - reginald
    - eu-ai-act
  blogFilename: microsoft-frontier-tuning-and-the-unsigned-trace
  blogUrl: https://mx.allabout.network/blog/microsoft-frontier-tuning-and-the-unsigned-trace.html
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/blog/microsoft-frontier-tuning-and-the-unsigned-trace.html
  servedAt: https://mx.allabout.network/blog/microsoft-frontier-tuning-and-the-unsigned-trace.html
  runbook: Blog post on mx-site. The HTML is the canonical source for this YAML frontmatter.
---

# Microsoft made the trace valuable. It left it unsigned.

3 June 2026 · Tom Cranstoun · 9 min read

Tags: AI agents · Provenance · Commentary · COGs · Open standards · Frontier Tuning · Microsoft MAI · Accountability · REGINALD · EU AI Act

**Index**

- [What was announced](#what-was-announced)
- [The trace is the new asset](#the-trace-is-the-new-asset)
- [An asset is also a record someone answers for](#an-asset-is-also-a-record-someone-answers-for)
- [Models you can trust, on whose word?](#models-you-can-trust-on-whose-word)
- [Everyone now says human in the loop](#everyone-now-says-human-in-the-loop)
- [The model consolidates; the record stays open](#the-model-consolidates-the-record-stays-open)
- [The part no model ships](#the-part-no-model-ships)

## What was announced

On 2 June, Mustafa Suleyman set out [Microsoft AI's next step](https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/): a family of models built in-house across image, voice, transcription, coding and reasoning, trained from scratch rather than distilled from other labs. Alongside the models came a way of adapting them, which Microsoft calls Frontier Tuning, a health model co-built with Mayo Clinic and owned by the hospital, and a framing for the whole programme: Humanist Superintelligence, AI meant to serve people, stay a tool, and remain subordinate to human goals.

Most of the piece is about capability and about who owns the model. Read it for what it leaves untouched and one part stands out, because it is the part that should make that untouched thing matter most. Frontier Tuning does not just train a model. It changes what the record of an organisation's work is for.

## The trace is the new asset

Frontier Tuning works by letting a model learn inside what Microsoft calls reinforcement-learning environments: training gyms wired to an organisation's real workflows. The data that matters in that setup, Suleyman says plainly, is not a public corpus. It is the trace of real work an agent completes inside the company. The sequence of steps. The decisions. The actions taken. Feed those back and the institutional knowledge becomes part of a model the organisation owns and keeps.

Set that claim down on its own, because it is the new one. For years the record of what an automated system did was treated as exhaust, logged somewhere, rarely read, kept for support tickets and the occasional post-mortem. Frontier Tuning reframes it as the asset. The trace of decisions is now the thing worth capturing, worth protecting, worth building a model around.

I agree with the reframing. It is also incomplete in a way that should be obvious the moment the trace is worth that much.

## An asset is also a record someone answers for

The same trace that trains tomorrow's model is the evidence of what happened today. If an agent approved a refund, declined a claim, rewrote a policy page, or set a price, the trace is where that decision lives. Make it valuable enough to train on and you have also made it the place anyone later asking *what did the system decide, and on what basis* will have to look.

Microsoft makes the trace valuable. It says nothing about whether anyone can establish, after the fact, what the trace contains, who produced it, against which policy, and whether it has been altered since. Those are not the same question as ownership. An organisation can own a record completely and still be unable to show a regulator, an auditor, a customer, or its own future self that the record is the one the agent actually wrote.

That second question needs a different kind of record. Not a log entry the organisation keeps to itself, but a record in a data file that travels with the decision: a small structured record, written once and readable by any system that meets it later, stating what was decided, by which agent, against which policy, and with a human in the loop where the stakes call for one. Signed, so that someone who was not present when the decision was made can confirm the record is the agent's own and has not been altered since. Signed for origin and integrity only, that is, not stamped as correct, because whether a decision was right is a judgement no signature should make.

Producing that kind of record is what Machine Experience is for. Machine Experience, or MX, is the practice of publishing what you make so the machines reading it - AI agents and the rest - can tell what it is and how to treat it without guessing, while a person can read and check the very same thing. The record format MX uses to do that is a [COG](https://mx.allabout.network/cog.html): a small structured object that briefs a machine on what it is reading and carries the signature that makes it answerable. The name matters less than the shape. It is the trace turned into something that can answer for itself.

Without that, Frontier Tuning produces a private store of consequential decisions with no accountable author. It is the same shape I wrote about on 1 June in [Who answers when the machine decides?](https://mx.allabout.network/blog/who-answers-when-the-machine-decides.html), where browsers form unsigned judgements about a site that the site cannot see or contest. The difference is only the location. There the deciding happened in a browser binary, pointed outward at the web. Here it happens inside the enterprise, pointed at its own work, and the same absence of an answerable record travels with it.

## Models you can trust, on whose word?

The lab section of the announcement makes a virtue of provenance at the training layer: built from scratch, no distillation, datasets described as clean and appropriately licensed, with safety and technical reports published alongside. The line is that these are models you can trust.

Be fair to the effort. Training without distillation and publishing reports is more discipline than much of the field shows, and the reports are a real contribution. But notice where the trust is meant to come from. It is asserted by the party that benefits from being trusted. The relying party gets an account to read, not a chain to check. That is assertion.

Attestation is the other thing, and it is worth saying plainly what the word means, because the rest turns on it. To attest a record is to sign it, so that anyone who receives it can confirm on their own side that it came from the maker it claims to and has not been altered since. Assertion asks you to take the maker's word. Attestation hands you something you can test without taking anyone's word at all. It settles where a thing came from and whether it is intact; it does not, and cannot, settle whether the thing is true. That last judgement stays with a person.

This is the distinction MX has held throughout, in [the padlock that attests the pipe and not the page](https://mx.allabout.network/blog/the-padlock-and-the-page.html) and in [provenance you can see](https://mx.allabout.network/blog/provenance-you-can-see.html). A lab's statement that its data is clean is a claim like any other claim, and the useful question is never whether to believe it. The question is whether anything lets a third party check it. A published account of one's own practice is not that. *Models you can trust* is a sentence. An attested record is evidence. Nobody is lying; the point is structural, and it does not improve as the models get better.

## Everyone now says human in the loop

Humanist Superintelligence describes systems shaped by human intent, accountable to human oversight, and, in Suleyman's phrasing, subordinate to human goals. That is the MX first principle arriving in a frontier lab's mission statement, and it is worth welcoming rather than scoring points against.

What it does not do is settle anything. Oversight is a documentation problem before it is a moral one, which is the argument I made about [Pope Leo's AI encyclical](https://mx.allabout.network/blog/pope-leo-ai-encyclical-and-mx.html): a person cannot oversee what was never recorded in a form they can read. A mission statement commits an organisation to oversight. It does not produce the evidence that oversight runs on. The slogan is free. The record is the work.

When every lab adopts the same words, the words stop being a differentiator. What separates one position from the next is who ships the artefact that makes the words checkable, the signed, dated, readable record that turns *we keep humans in control* from a value into something a third party can hold against its maker later.

## The model consolidates; the record stays open

Capability is consolidating quickly, and the largest companies will own that layer. A multimodal family, tunable weights, distribution across clouds and developer platforms: this is the model layer, and the announcement is a clear move to hold a large share of it.

None of it answers the cross-vendor question. When your agent's decisions are read, replayed, or audited by some other system, can that system establish what your agent decided and that the record is genuinely yours and unaltered? That question cannot be answered inside any single vendor's model, because the writer of the record and its later reader are different parties running different systems. A record only one model can read is not a record an auditor can use.

So the record that makes agent decisions accountable has to follow a shared, community-led standard, not the private convention of whichever model an organisation happened to tune. A record only one vendor's model can read is no use to the auditor on the other side. This is why the format these records take, and the registry that resolves them, are kept open and governed in common through [The Gathering](https://mx.allabout.network/the-gathering/); [REGINALD](https://mx.allabout.network/reginald/) is one implementation of that standard, not the standard itself. The rules of accountability cannot belong to whoever owns the most-used model, for the same reason I set out when [Salesforce bought Contentful](https://mx.allabout.network/blog/salesforce-buys-contentful-agent-ready-content.html): a layer everything depends on should not be a feature you rent.

The Mayo Clinic model sharpens the point rather than softening it. It will be owned by the hospital and run first inside the hospital's own environment, then offered more widely. That is the regulated setting where a decision's record has to outlive the model that produced it and stay readable by an auditor who never had access to the training gym. Owning the model is not the same as being able to show, years later, what it decided and why. The first is a licence. The second is a signed record, and that is a different deliverable.

**Note:** This page describes regulatory frameworks in general terms only. Nothing here is legal advice. The EU AI Act has been in force since August 2024, and its timeline shifted again under the Digital Omnibus provisional agreement in May 2026, deferring the heavier high-risk duties while leaving transparency obligations on course. Requirements vary by jurisdiction, organisation type, and use case. Consult qualified legal specialists for guidance specific to your situation.

## The part no model ships

Microsoft has built an engine for turning an organisation's work into a model it owns, and made the trace of that work the valuable input. The missing piece is not more capability. It is the record that lets anyone establish, afterwards, what the work was: signed by the party that did it, readable by the party that has to check it, and held apart from the model so it survives the next retraining.

The trace is the asset now. Whether it is also accountable is the part no model ships, and it is still ours to build in the open.

---

*The announcement referenced here is Microsoft AI's, published by Mustafa Suleyman on 2 June 2026.*

**New to Machine Experience?**

This post assumes only the plain ideas. If you want the grounding, the [Learn](https://mx.allabout.network/learn/) section starts at [what MX is](https://mx.allabout.network/learn/what-is-mx.html) and the [principles it builds on](https://mx.allabout.network/learn/key-principles.html). [Provenance you can see](https://mx.allabout.network/blog/provenance-you-can-see.html) is the long-form on checkable evidence, and [What is a COG?](https://mx.allabout.network/cog.html) is the short reference for the record format named above.

**About the author**

Tom Cranstoun is the founder of the Machine Experience (MX) community and author of the MX book series. He consults on MX strategy through Digital Domain Technologies Ltd. He started working on computers in 1977 and turned it into his career in 1979.
