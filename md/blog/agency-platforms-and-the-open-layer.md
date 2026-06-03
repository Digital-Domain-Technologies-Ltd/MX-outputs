---
title: WPP Built Open. Omnicom Built Omni. Both Left the Same Layer Open
description: The holding companies are spending fortunes on proprietary AI platforms. None of them writes a provenance record into the file, the layer that survives when content leaves the platform. That layer is open, and that is the point.
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
    - open-standards
    - agencies
    - provenance
    - wpp
    - omnicom
    - the-gathering
  blogFilename: agency-platforms-and-the-open-layer
  blogUrl: https://mx.allabout.network/blog/agency-platforms-and-the-open-layer.html
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/blog/agency-platforms-and-the-open-layer.html
  servedAt: https://mx.allabout.network/blog/agency-platforms-and-the-open-layer.html
  runbook: Blog post on mx-site. The HTML is the canonical source for this YAML frontmatter.
---

# WPP Built Open. Omnicom Built Omni. Both Left the Same Layer Open

3 June 2026 · Tom Cranstoun · 5 min read

WPP spent years, and a reported fortune, building Open, its proprietary AI platform for marketing. Omnicom did the same with Omni. Every mid-sized agency with an engineering budget now seems to be building its own version. The reasoning is consistent: build it ourselves, control it, stay ahead.

A commentary post doing the rounds this week names the flaw in that reasoning, and names it well. The labs improve every day, and no in-house team keeps that pace. A closed system locks you out of the ecosystem forming around the models: the MCP servers, plugins and connectors that make an agent useful inside a real workflow. So the agencies spending the most to look forward-thinking risk engineering themselves into the next round of legacy software.

I think that is mostly right. I also think it stops one layer short of the part that matters for anyone publishing content into this world.

## What the platforms are, in their own words

WPP describes Open as a proprietary platform, with an Agent Hub that turns decades of WPP's own data and methods into agents its staff and clients call on. It has since packaged the platform for brands to run themselves, as Open Pro. Omnicom's Omni, rebuilt after the Interpublic acquisition on Acxiom, Flywheel and Interact, is pitched as a single operating system; its chief executive calls it "single, open, and adaptive". The word *open* is doing work in that sentence it cannot quite support. Omni is an operating layer built on data Omnicom owns, designed to keep that data inside the building.

Hold the two descriptions next to each other and the pattern is plain. Each holding company is building a place where its own intelligence, data and workflow live together, and competing on how much it can hold. That is a sound bet on owning the workflow. It is a walled garden with doors, not an open layer.

## We have seen this label before

In the content category I wrote about the same reflex a few weeks ago: every CMS rebranding as an "AI operating system", and the 2015 cycle when every SaaS product became a "platform" because Salesforce had taught the market the word traded at a higher multiple. The agency version is that same move at holding-company scale. The label is the easy part. What an agent can take away when it leaves is the part that decides what survives. The full argument, and the questions to put to any vendor making the claim, are in [The CMS Vocabulary War](/blog/cms-vocabulary-war.html).

There is already a tell. Even inside Omnicom's own supply chain, a measurement vendor has shipped an MCP integration that lets brands ask ChatGPT, Claude or Gemini how their media is performing. The open ecosystem is routing around the platform from inside the platform's orbit. That is the dynamic the commentary post predicts, happening now.

A fair caveat: the closed-versus-plugged-in picture is cleaner in a post than in the accounts. WPP has a large cloud-and-AI deal with Google and an Adobe partnership; Omni is described as integrating with existing martech while keeping data ownership and human oversight. The holding companies are hedging by partnering with the labs and clouds. The point that survives the hedging is the one that matters here: value is migrating to open interoperability layers, and one of those layers none of them owns.

## The layer none of them own

Spend the fortune. Build the orchestration, the agent hub, the identity graph. None of it answers a different question. When a piece of your content leaves the platform, can the machine that reads it next tell where it came from, whether it is current, and whether it has been changed?

Open codifies WPP's expertise into agents. Omni connects identity to commerce. Neither writes a record into the file that survives extraction. The moment content moves through an MCP call, a connector, or a third-party agent, the platform's context is gone and the next reader is back to guessing.

That record is what Machine Experience is. Provenance, context and usage live in the data file itself, in an open format any system can read, governed by a body that sells nothing. That is what a **COG** is: a carrier-neutral container for a record in a data file, the format published under an open licence and the schemas held by [The Gathering](https://tg.community). Attestation, the signature that lets a reader confirm where a file came from and that it has not been altered, sits in a separate trust layer and stays narrow. It speaks to provenance and integrity, never to whether the content is true.

The distinction is the one I drew when [Salesforce bought Contentful](/blog/salesforce-buys-contentful-agent-ready-content.html): a platform feature works while you stay on the platform; an open record travels. The holding companies have built platform features at scale. The provenance layer is the part they left open, in both senses of the word.

## This is not a competitor to Open or Omni

Worth saying plainly, because the temptation is to read it as a fight. MX does not compete with WPP Open or with Omni. It is the open layer those platforms, and any agent reading their output, can rely on. An agency that has already spent on its platform does not need to spend again to make its content provenance-bearing. It adopts the open standard and lets the platform plug into it. That is the lower-risk move, and the one that still works after the next acquisition reshuffles the board.

If anything, the busier these platforms get, the more the layer is needed. Every new agent platform rebuilds the same context-discovery layer from scratch, a pattern I set out in [Many Agents, One Metadata Layer](/blog/many-agents-one-metadata-layer.html). The fix was never another platform. It was a record in the file the next platform can read without being told.

This is also the answer to a question agencies are starting to ask out loud: where does the discipline sit relative to GEO? Generative-engine work optimises the surface; MX specifies the structure underneath, as I argued in [GEO is a tactic, MX is the specification](/blog/geo-is-a-tactic-mx-is-the-specification.html). The agencies that come through this hold both layers in mind.

## Built for machines, read by people

The case for machine-readable content is usually made in the language of agents. The quieter part is worth saying. Content structured well enough for a machine to parse is content structured well enough to meet WCAG. Building for the agent and building for the screen-reader user are, more often than not, the same task done once.

There is an efficiency argument beside it. A machine that can read a clear record does not have to infer one, and inference costs compute, and compute costs energy. A web that states its provenance plainly asks less of the machines reading it. The platforms, optimising for engagement inside their walls, have little reason to economise on the inference happening outside them. An open record does.

## Ways forward

If you are inside an agency weighing how much more to build, the useful question is not whether to have a platform. It is what your content gives an agent to run against once it leaves the platform, and whether that record belongs to you or to the vendor whose roadmap you are now tied to.

We run MX audits that name the gaps where machine readers stumble, advise on what to change first, and train teams to ship content that survives the agent layer. The standard behind it is built in the open at [The Gathering](https://tg.community), which is vendor-neutral by design. And the argument in full is in the books: a [free introduction](https://mx.allabout.network/books/introduction.html), the [Handbook](https://mx.allabout.network/books/handbook.html), and [The Protocols](https://mx.allabout.network/books/protocols.html).

The holding companies have placed their bet on owning the platform. The Machine Experience community has placed its bet on the layer that outlasts any one of them.

---

About the author

**[Tom Cranstoun](https://mx.allabout.network/blog/profiles/about.tom.cranstoun.html)** is the founder of the Machine Experience (MX) community and author of the MX book series. He consults on MX strategy through Digital Domain Technologies Ltd.
