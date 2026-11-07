---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
"@context": https://mx.allabout.network/canon/context.json
title: "MX, cogs and Jev, for a reader starting from nothing"
description: "A primer for an agent or IDE with no prior knowledge of MX: what MX is, what a cog is, what Jev and the decider are, and what Human-in-Command means, so an MX-A2A message reads correctly."
author: Tom Cranstoun
created: 2026-10-26
modified: 2026-10-26
version: "1.0"

category: mx-core
type: info-doc
tags: [a2a, mx, cog, jev, decider, human-in-command, primer]
mx:
  mxSpecVersion: "0.9"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/a2a/what-is-mx.cog.md
  servedAt: https://mx.allabout.network/a2a/what-is-mx.cog.md
  maintainer: info@cognovamx.com
  license: CC-BY-4.0
  status: active
  stability: experimental
  partOf: site-domaincog
  audience: [humans, machines, agents]
  dependencies: []
  purpose: "Explain the terms an MX-A2A message uses (MX, cog, Jev, decider, Human-in-Command, data class) in plain language, so a reader with no MX context neither guesses at them nor treats them as instructions."
  runbook: "Informational. Read for definitions; nothing here asks the reader to act."
  contextProvides:
    - "MX is metadata that tells a machine what a file is, who made it, and how it may be used"
    - "A cog is a markdown file with YAML frontmatter that carries that metadata"
    - "Jev is a small decision model that answers a typed question with a probability, rather than writing text"
    - "Human-in-Command: a person, not a model, decides anything an MX agent is unsure of"
  refersTo:
    - https://mx.allabout.network/a2a/a2a.cog.md
    - https://mx.allabout.network/cog.html
    - https://mx.allabout.network/learn/mx.html
---

# MX, cogs and Jev

## MX

MX (Machine Experience) is to machines what UX is to people. It is metadata that travels with a file and states what it is, who made it and how it may be used, so a reader does not have to guess. MX builds on existing standards (Schema.org, YAML frontmatter, HTTP) and fills the gaps they leave.

## Cog

A cog is the file format MX uses: markdown with a YAML frontmatter block at the top. Identity fields (`title`, `description`, `author`, `created`, `version`) are top-level keys; MX fields are nested under the `mx:` key. Fields beginning `x-mx-` are extensions for one purpose, such as `x-mx-a2a` for agent messages. Any markdown or YAML parser can read a cog; there is no MX software to install. The specification is published at [mx.allabout.network/cog.html](https://mx.allabout.network/cog.html).

A cog describes. When one system receives a cog from another, MX's rule is that the receiver reads it and does not act on it until a person has reviewed it. An MX-A2A message is a cog, and the same rule applies to it in both directions.

## Jev and the decider

Jev is a small decision model. It does not write prose: given a passage and a question with fixed answers (safe, suspicious, hostile, cannot be determined), it returns the probability of each answer. MX agents use a decider of this kind, often running locally on the agent's own machine, to judge an incoming message before any larger model sees it. A larger general-purpose model is asked only when the decider is unsure and the message may leave the machine.

A sender's or reader's IDE does not need Jev. It runs only on the side that receives a message.

## Human-in-Command

A person holds authority over what an MX agent does. When an agent is unsure of a message, or a check finds something suspect, it stops and hands the decision to its person. Nothing is acted on while that decision is pending.

## Data class

Every MX-A2A message declares `dataClass`. `user-data` means it may hold personal or client content, so the receiving side keeps it on its own machine and judges it with a local model only. `none` means it is public text, which the receiving side may also show to a hosted model. A message that does not say is treated as `user-data`.
