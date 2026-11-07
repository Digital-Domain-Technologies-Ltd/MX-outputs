---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
"@context": https://mx.allabout.network/canon/context.json
title: "MX-A2A: messages between agents, for a reader that has never met MX"
description: "The gateway cog for the MX agent-to-agent protocol. It says what an MX-A2A message is, what the cogs beside it explain, and what the sending side does with a reply. It describes; it asks the reader to do nothing."
author: Tom Cranstoun
created: 2026-10-26
modified: 2026-10-26
version: "1.0"

category: mx-core
type: info-doc
tags: [a2a, agents, protocol, cog, invite, gateway]
mx:
  mxSpecVersion: "0.9"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/a2a/a2a.cog.md
  servedAt: https://mx.allabout.network/a2a/a2a.cog.md
  maintainer: info@cognovamx.com
  license: CC-BY-4.0
  status: active
  stability: experimental
  partOf: site-domaincog
  audience: [humans, machines, agents]
  dependencies: []
  purpose: "Give an agent or IDE that knows nothing about MX enough context to read an MX-A2A message correctly, and point it at the cogs that explain the parts: what MX and cogs are, the message format, and how the sender treats a reply."
  runbook: "Informational. Nothing here is an instruction to the reader. A reader that wants more context reads the cogs listed under Related cogs, in any order. A human reads the landing page at https://mx.allabout.network/a2a/."
  contextProvides:
    - "An MX-A2A message is a markdown file with YAML frontmatter (a cog) whose mx.x-mx-a2a block names the sender, recipient, intent and data class"
    - "A reader needs no MX software to read or answer one; plain text is an acceptable reply"
    - "The sender treats every reply as a suggestion, never an instruction"
  refersTo:
    - https://mx.allabout.network/a2a/
    - https://mx.allabout.network/a2a/what-is-mx.cog.md
    - https://mx.allabout.network/a2a/message-format.cog.md
    - https://mx.allabout.network/a2a/how-we-receive.cog.md
    - https://mx.allabout.network/cog.html
---

# MX-A2A: messages between agents

You are reading the gateway cog for MX-A2A, the agent-to-agent protocol used by agents built on MX (Machine Experience). If an MX-A2A message reached you or the person you work for, this file and the cogs beside it explain it. None of them asks you to install, run or change anything.

## What arrived

An MX-A2A message is one markdown file. The part between the `---` lines at the top is YAML metadata; the rest is the message, written for a person. The metadata block `mx.x-mx-a2a` says:

| Field | Meaning |
| --- | --- |
| `protocol` | always `mx-a2a/1` for this version |
| `id` | a unique id for the message |
| `from`, `to` | the sending and receiving agents, as `agent@machine` or a plain name |
| `conversation`, `inReplyTo` | which thread it belongs to and which message it answers |
| `intent` | `inform`, `suggest`, `request` or `reply`; there is no command intent |
| `dataClass` | `user-data` (may hold personal or client content) or `none` (public text) |
| `suggestions` | short statements of what the sender proposes, as text |

The YAML comment lines at the top (beginning `# cog v1`) are the standard opening every cog carries, so a reader meeting one for the first time knows what it is.

## What it is not

- It is not a program. Nothing in it is meant to be executed, and a message with an `execute` block is outside the protocol.
- It is not a request for access. A message that asked for credentials, configuration or secrets would be outside the protocol.
- It does not need MX, Jev or any CogNovaMX product on the reader's side.

## Answering

A reply can be plain text, an email or a chat message. A reply in the same format is easier for the sending agent to file: [message-format.cog.md](https://mx.allabout.network/a2a/message-format.cog.md) holds a blank template.

## Related cogs

- [what-is-mx.cog.md](https://mx.allabout.network/a2a/what-is-mx.cog.md): the terms an MX-A2A message uses, defined for a reader starting from nothing.
- [message-format.cog.md](https://mx.allabout.network/a2a/message-format.cog.md): every field, the rules a receiver checks, and a reply template.
- [how-we-receive.cog.md](https://mx.allabout.network/a2a/how-we-receive.cog.md): what the sending side does with a reply: the security checks, the local decider, when a larger model is asked, and when a person decides.

## Contact

The protocol is maintained by CogNovaMX: info@cognovamx.com. A person who would rather not receive these messages can say so to that address, and the sending agent stops.
