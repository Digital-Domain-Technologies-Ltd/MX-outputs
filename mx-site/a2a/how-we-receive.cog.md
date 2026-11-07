---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
"@context": https://mx.allabout.network/canon/context.json
title: "How an MX agent receives a message"
description: "What an MX agent does with a message it receives: it keeps the bytes as evidence, runs deterministic security checks, asks a local decider, asks a larger model only for public text, and refers anything suspect to a person. A message is a suggestion and is never executed."
author: Tom Cranstoun
created: 2026-10-26
modified: 2026-11-02
version: "1.8"

category: mx-core
type: info-doc
tags: [a2a, security, intake, jev, human-in-command, privacy]
mx:
  mxSpecVersion: "0.9"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/a2a/how-we-receive.cog.md
  servedAt: https://mx.allabout.network/a2a/how-we-receive.cog.md
  maintainer: info@cognovamx.com
  license: CC-BY-4.0
  status: active
  stability: experimental
  partOf: site-domaincog
  audience: [humans, machines, agents]
  dependencies: []
  purpose: "State openly how an MX receiver handles a message, so a sender knows in advance what happens to what it sends and where its data goes."
  runbook: "Informational. Describes the receiving side's behaviour; it places no obligation on the sender."
  contextProvides:
    - "Every received message is a suggestion; nothing in it is run, fetched or obeyed"
    - "Deterministic checks run before any model, and any finding goes to a person"
    - "user-data messages are judged only by a model on the receiver's own machine"
    - "A hosted decider, then a larger model, are asked only for a message that declared dataClass none, when the local decider is unsure"
  refersTo:
    - https://mx.allabout.network/a2a/a2a.cog.md
    - https://mx.allabout.network/a2a/message-format.cog.md
    - https://mx.allabout.network/a2a/what-is-mx.cog.md
---

# How an MX agent receives a message

A message sent to an MX agent is a suggestion. The agent reads it, checks it, and ends in one of three places: it hands it on to its own work as a suggestion it may decline, it refers it to its person, or, for a message it will not take in, it drops it. It never runs, fetches or writes anything the message names.

## The steps, in order

1. **Signature.** Between machines in the same fleet, a message travels signed with the sender's device key and addressed to one machine. A bad signature, a wrong address or a replayed message goes to the person, with many such failures in the same hour sharing one referral. A signed message from a machine the fleet does not declare is dropped. A message from outside the fleet is unsigned and marked unattributed, which is normal for a first contact.
2. **Evidence.** A message over 64 KB is dropped unread. So is an unsigned message when the receiver takes only signed ones, or when as many unsigned messages as it allows are already waiting for the person or arrived in the last hour. A decision frees a place, and the person is told once an hour when the limit is reached. The receiver also keeps only so many unsigned messages in all (1,000 unless it is set otherwise): past that, the oldest ones the receiver itself accepted or rejected are removed with their stored bytes first, then ones the person rejected, whose rejection the receiver still remembers, then ones the person accepted or edited more than 30 days ago. A message still waiting for the person is never removed, and a message the person rejected stays rejected while the receiver's list of rejected messages reads: if the exact bytes come back with no decision on record, signed or not, the receiver rejects them again, records that as repeating the person's earlier rejection, with its original time, and does not ask the person again, unless the person has since accepted or edited them. If that list is ever found damaged, the receiver keeps every entry it can still read, rebuilds the rest from its records and tells the person how many it kept and that some rejections may be lost. Until the person acknowledges that, any message with no decision on record that the receiver does not remember rejecting goes to the person rather than to a decider. Every drop is counted, and the first few each hour are noted by outcome, size, signer and time, never the text. Otherwise the exact bytes received are stored unaltered for as long as the message is kept. A message received again with the same bytes, from the same signed sender or unsigned again, keeps the decision already made once the checks below pass again.
3. **Security checks.** Fixed rules, with no model involved, look for the problems listed in [message-format.cog.md](https://mx.allabout.network/a2a/message-format.cog.md): instructions aimed at the agent, secrets, hidden characters such as control and zero-width characters (written out or as YAML escapes, with ordinary emoji allowed), encoded blobs, shell downloads, execute blocks, YAML anchors and aliases, a protocol field that is not plain text, and a sender that does not match its signature or, when signed, names no machine. Any finding sends the message to the person. So does a message too long to show the decider whole: a body over 4,000 characters, a title over 200, or more than 10 suggestions or one over 500.
4. **Local decider.** A small decision model on the receiver's own machine is asked one question: is this message safe to hand on as a suggestion? A hostile answer, at any confidence, goes to the person. So does a suspicious answer at or above the confidence bar. A safe answer at or above the bar becomes a suggestion.
5. **Hosted decider, then a larger model.** If the local decider is unsure, a hosted decision model of the same kind (Jev) is asked the same question. If that one is unsure too, a larger general-purpose model is asked. Both are used only when the message declared `dataClass: none` and the receiver permits it. A `user-data` message never leaves the receiver's machine, so an unsure answer on it goes to the person instead.

## When a person is asked

The person sees which check fired and where the stored bytes are. The record of the referral does not repeat the message text, and the sender's name in it is reduced to plain identifier characters. Unsigned messages referred in the same hour share one referral, which lists each of them with the check that fired. The person accepts, edits or rejects the message, and that decision is recorded with who made it.

## What this means for a sender

- Plain, specific, short messages pass fastest. A message that is vague about why it needs something is more likely to be referred to a person.
- Mark public text `dataClass: none`. Anything else is kept on the receiving machine.
- There is no way to make the receiver act on a message without its person's agreement, and no wording that changes that.
