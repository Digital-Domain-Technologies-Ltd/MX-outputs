---
title: Software Agreed the Deal. Who Is Accountable?
description: "Software is starting to negotiate contracts with other software, no human in the exchange. The answer is not a human in the loop but a human in command: a signed mandate the agent executes under, and the decision, policy and attestation COGs that prove it."
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
    - agent-commerce
    - accountability
    - human-in-command
    - cog
    - reginald
    - eu-ai-act
  blogFilename: software-agreed-the-deal
  blogUrl: https://mx.allabout.network/blog/software-agreed-the-deal.html
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/blog/software-agreed-the-deal.html
  servedAt: https://mx.allabout.network/blog/software-agreed-the-deal.html
  runbook: Blog post on mx-site. The HTML is the canonical source for this YAML frontmatter.
---

# Software Agreed the Deal. Who Is Accountable?

3 June 2026 · Tom Cranstoun · 12 min read

- [Machine Experience](https://mx.allabout.network/blog/index.html#tags=machine-experience)
- [Agent commerce](https://mx.allabout.network/blog/index.html#tags=agent-commerce)
- [Accountability](https://mx.allabout.network/blog/index.html#tags=accountability)
- [Human in command](https://mx.allabout.network/blog/index.html#tags=human-in-command)
- [COG](https://mx.allabout.network/blog/index.html#tags=cog)
- [Reginald](https://mx.allabout.network/blog/index.html#tags=reginald)
- [Eu Ai Act](https://mx.allabout.network/blog/index.html#tags=eu-ai-act)
- [Convergence Principle](https://mx.allabout.network/blog/index.html#tags=convergence-principle)

A question the AI-governance strategist Birgul Cotelli put on LinkedIn this week is worth sitting with. A procurement platform negotiates pricing with a supplier's platform. Terms are discussed, conditions adjusted, a final agreement reached. A seven-figure contract, settled. No emails, no meetings, no human in the exchange.

Then something goes wrong. Who approved the final terms? Who is accountable for the outcome? What if the agreement broke company policy? What if nobody can explain how the final position was reached?

The framing behind the questions is the one contracts have rested on for as long as there have been contracts. Humans negotiate. Humans agree. Humans are accountable. Software negotiating with software pulls the first two away and leaves the third hanging in the air with nothing under it.

## The sibling case to a question already asked

A fortnight ago I wrote about machines deciding *about* a site - Chrome's hidden lists ruling whether an agent may act on your pages, whether you are remembered, whether you count as a place that trades, with no record you can read and no party you can name. [Who answers when the machine decides?](https://mx.allabout.network/blog/who-answers-when-the-machine-decides.html) made the accountability argument in full: an inference made about you can be wrong and answered for by no one, while a signed declaration has someone on the hook. I will not rebuild that argument here. It holds.

This is its sibling. There the machine decides about you. Here the machine transacts *for* you. The first is a classification problem, settled in private before you ever see it. The second is a transaction problem, and it has a property the classification case does not: it leaves a moment where a commitment is made. The question is whether anything is written down at that moment, and in a form anyone can later read.

## Command moves upstream

Look again at the four questions, because they are not four questions. They are one question asked from four angles, and the angle decides the answer.

Start with the one that sounds hardest. *What if nobody can explain how the final position was reached?* This is the determinism problem I have written about before - [why an AI agent gives a different answer every time](https://mx.allabout.network/blog/why-ai-agents-need-contracts-not-instructions.html) when you instruct it instead of contracting with it. A negotiation with no record of its path is a negotiation that happened once and cannot be re-walked. The fix is not to slow the machine down. It is to make the agent emit a **decision COG**: the record of the position it took, the inputs it weighed, and the path to the number it agreed. Not a transcript of every token. The declared account of how the deal got where it got, written at the moment it got there.

*What if the agreement broke company policy?* Then the policy was never given to the agent in a form it had to respect. A **policy COG** is the mandate the agent negotiates inside - the floor on price, the terms that may never be conceded, the categories it may not buy at all - published as a record both the agent and a later auditor can read. Checking whether the deal broke policy stops being forensic. You hold the agreed position against the mandate it was bound by, and the answer is plain.

*Who approved the final terms?* Approval is the wrong word for it, and reaching for it is what makes the scenario feel ungoverned. In machine-to-machine commerce nobody approves the terms, because the terms are settled in milliseconds with no one watching. What a human does instead is command the mandate: direct the agent on what it may transact, on whose behalf, and inside what limits, before the negotiation runs. Command sits upstream of the deal and stays in force through it. The price is not approved after it lands; it is commanded before it is sought. That is not a workaround for the missing human. It is where authority has to live once the exchange itself has none.

*Who is accountable for the outcome?* The party whose key signed the mandate and the record. An **attestation COG** carries an Ed25519 signature over the canonicalised bytes - a confirmation that this mandate, this agreed position, this account of the path, are genuinely from the party they name and have not been altered since. That gives the outcome an accountable author. Not a guarantee the deal was wise. A name against it that can be questioned, audited and held to its own record later.

So the four questions resolve into a sequence. A human commands the mandate and signs it. The agent negotiates under that command. The agent records what it agreed and how. Each record is attested. The deal runs at machine speed, and a person can still answer for it afterwards, because the deal ran under their command and left something behind that carries their name.

## Human in command, not in the loop

The LinkedIn framing said: humans negotiate, humans agree, humans are accountable. The instinct that follows is to put a human back into the negotiation, to keep all three bound together by refusing to let the exchange run without one present.

That instinct reaches for the wrong model. Oversight of an automated system comes in distinct strengths, and the difference is not pedantic. A human *in the loop* is a checkpoint inside the flow: the machine pauses, the person decides, the machine proceeds. A human *on the loop* watches a running system and can intervene. A human *in command* directs what the system is for and what it may do, and carries the answer for it, whether or not they witness any single act. The EU's own trustworthy-AI work names all three; the European Economic and Social Committee built its position on the last of them, arguing that people should stay in command of what tasks are transferred to a machine at all.

Machine-speed negotiation rules out the first. There is no point in the loop to stand at - the exchange completes faster than a person can be a checkpoint in it, and a human stationed there would only be a rubber stamp pretending to be a brake. On the loop is little better when a deal closes in milliseconds. In command is the only model that fits, and it fits well, because command never required the commander to be present at the moment of action. It requires that they directed it and own it.

Read the three clauses through that lens and they come apart cleanly. *Humans negotiate* changes hands - the machine runs the exchange, and that is the point of building it - but the human commands the negotiation that the machine runs. *Humans agree* narrows to the act that carries weight: a human agreed to the mandate, under their own authority, not to each term struck beneath it. *Humans are accountable* survives in full, and survives precisely because the first clause became command rather than disappearing. Accountability with nothing above it is what the scenario feared. Accountability that flows from a signed command is the thing that was missing.

This is the Convergence Principle in a commercial setting. The record that lets a finance team audit a deal after the fact is the same record the counterparty's machine reads to confirm the deal sat within mandate. The internal auditor and the external agent want the same artefact. Build it for one and you have built it for both, and neither has to guess.

The MX standard anticipated this case before the case arrived. The contract-fingerprinting note exists precisely so that a document a machine commits to carries a checkable identity - so the thing the supplier's agent agreed to is provably the thing your agent proposed, byte for byte, with no quiet substitution between proposal and signature.

## What the command looks like on disk

The doctrine stays abstract until you see the artefact, so here is the procurement mandate written as a command rather than a fence. The fields are illustrative and would align to the canonical COG schema, but the shape is the argument.

A fence says only *do not exceed two million*. A command says who issued the limit, over what authority, to which agent, and for how long:

```yaml
# policy COG - the mandate, issued as a command
cog: policy
issuer:
  name: A. Buyer
  role: Head of Procurement
  key: ed25519:9f2c…           # the key that carries accountability
commands: agent:procurement-bot-04
on_behalf_of: Example Trading Ltd
authority: indirect-spend procurement, IT and facilities categories
mandate:
  may_transact: [software-licences, support-contracts]
  ceiling: 2000000
  currency: GBP                 # ISO 4217
  never_concede: [data-processing-outside-UK-EU, auto-renewal-clauses]
  forbidden_categories: [hardware, professional-services]
valid_until: 2026-09-30T23:59:59Z
signature: ed25519:…            # over the canonicalised bytes
```

The agent negotiates under that command, and at the moment it agrees it emits its own record - the decision COG - that points back at the mandate by fingerprint, so the two are tied and neither can be swapped later:

```yaml
# decision COG - what the agent agreed, and how
cog: decision
under_mandate: sha256:1a4b…     # fingerprint of the policy COG above
counterparty: agent:supplier-platform-acme
agreed:
  item: enterprise-support-contract
  price: 1840000
  currency: GBP
  term_months: 24
weighed: [list-price, three-year-TCO, two-rival-quotes]
reached_at: 2026-06-03T14:36:11Z
signature: ed25519:…
```

Read the two together and the four questions answer themselves. The path was recorded (`weighed`, `agreed`). The mandate is checkable (`ceiling`, `never_concede`), and £1.84m sits under £2m with no forbidden clause in sight, so the deal was within command. The author is named and signed. And approval was never a thing that happened after the price landed - it was the act of issuing and signing the mandate before the agent ran. The human in command did one thing, once, in advance, and the record carries it forward through every deal struck under it.

The distinction the example makes plain: take the `issuer` and `signature` away and you are left with a fence, a constraint with no one behind it. Put them back and the same record becomes a command, with a name on it that answers for whatever the agent does inside the limits.

## Where this stops being flattering to MX

Honesty about the limit matters more than the argument winning.

A decision COG does not make the deal a good one. It records the position the agent took; it does not improve the agent's judgement, and it will faithfully record a bad bargain struck badly. Attestation signs the bytes, never the wisdom. A signed mandate that was loosely drawn produces a signed record of a loss. MX makes the deal reconstructable and assigns it an author. It does not make the deal sound. That work stays with whoever writes the mandate, which is to say it stays with a human.

And nothing here is read by the platforms doing the negotiating today. The decision, policy and attestation COGs are the publishing-layer answer; the agents transacting at machine speed would have to choose to write and read them. That is the same parallel-layer point the earlier post made about Chrome's lists, now moved to the transaction. MX is not the rule the negotiating agents currently follow. It is the argument that a negotiation worth a seven-figure commitment should leave a record worth the same.

## The direction the law is taking

The claim has to be made carefully, and the regulatory ground is moving. The EU AI Act's transparency duties - among them telling a person when an automated system is acting - remain on course for August 2026, while the heavier high-risk obligations were deferred under the May 2026 Digital Omnibus agreement. Adjacent regimes, from the data-protection limits on decisions taken by machine alone to the accountability frameworks emerging on both sides of the Atlantic, lean the same way: towards disclosure that a decision was automated, a party responsible for it, and a route to contest it.

The human-in-command model is not a phrase MX coined for the occasion. It is the language European policy reached for years ago, when the European Economic and Social Committee argued for an approach in which machines remain machines and people stay in command of what is transferred to them. The point of repeating it here is that command without a record is a claim no one can check. A mandate that was commanded but never written, a position reached but never recorded, leaves the commander asserting authority over a deal they cannot produce. Command is the doctrine; the COG is what makes the command provable after the fact.

**Note:** This page describes regulatory frameworks in general terms only. Nothing here is legal advice. Requirements vary by jurisdiction, organisation type, and use case. Consult qualified legal specialists for guidance specific to your situation.

A machine-negotiated contract with no readable mandate and no recorded path is built the opposite way to where the law is heading. The fix is not to forbid the negotiation. It is to make it leave the evidence an accountability regime expects: a declaration with an author, a date, and a record that can be held against its maker later.

## The choice the scenario puts in front of us

Software negotiating with software is not a future worth resisting. It is faster, it is cheaper, and the deals it settles are mostly the dull ones that never needed a human in the first place. The question the scenario asks is not whether to allow it. It is whether each deal vanishes into an exchange no one can reconstruct, or leaves an attested record with a name against it.

The machines can run the negotiation. What they cannot do is hold command of it, and command is what the scenario was missing. A human commands the mandate, the machine executes under it, and the deal leaves an attested record of what it agreed, under whose authority, and how it got there. *Humans are accountable* outlives *humans negotiate* - not because a person stood in the loop, but because a person stayed in command, and the record proves it.

---

*The negotiation scenario is Birgul Cotelli's, posted on LinkedIn. The decision, policy and attestation COG types are specified in MX: The Protocols and governed through [The Gathering](https://tg.community).*

## About the author

Tom Cranstoun is the founder of the Machine Experience (MX) community and author of the MX book series. He consults on MX strategy through Digital Domain Technologies Ltd. He started working on computers in 1977 and turned it into his career in 1979.

Continue the conversation:

- [Get in touch](https://mx.allabout.network/about/contact.html)
- [What is a COG?](https://mx.allabout.network/cog.html)
- [REGINALD](https://mx.allabout.network/reginald/)
- [Join The Gathering](https://tg.community)
