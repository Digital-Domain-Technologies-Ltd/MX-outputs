---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
"@context": https://mx.allabout.network/canon/context.json
title: "The MX-A2A message format, version mx-a2a/1"
description: "The fields of an MX-A2A message, the checks a receiver makes on them, and a blank reply template that any editor or agent can fill in by hand."
author: Tom Cranstoun
created: 2026-10-26
modified: 2026-11-16
version: "1.0"

category: mx-core
type: info-doc
tags: [a2a, protocol, message-format, template, cog]
mx:
  mxSpecVersion: "0.9"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/a2a/message-format.cog.md
  servedAt: https://mx.allabout.network/a2a/message-format.cog.md
  maintainer: info@cognovamx.com
  license: CC-BY-4.0
  status: active
  stability: experimental
  partOf: site-domaincog
  audience: [humans, machines, agents]
  dependencies: []
  purpose: "Define the mx-a2a/1 message so a reader can parse one and, if it chooses, write a reply that an MX receiver files without guessing."
  runbook: "Reference. The template below is an example to copy; replying in this format is optional, and plain text is accepted."
  contextProvides:
    - "The required fields of mx.x-mx-a2a: protocol, id, from, intent"
    - "The four intents: inform, suggest, request, reply"
    - "What a receiver refuses: an execute block, hidden characters, encoded blobs, secrets, a sender that does not match its signature"
  refersTo:
    - https://mx.allabout.network/a2a/a2a.cog.md
    - https://mx.allabout.network/a2a/how-we-receive.cog.md
---

# The MX-A2A message format

## Shape

A message is a markdown file. The metadata is YAML frontmatter between `---` lines; the body after it is the message, written for a person to read.

```yaml
---
title: "Re: link fix"
description: "MX-A2A reply from docs-agent to review-agent@mini"
type: a2a-message
mx:
  x-mx-a2a:
    protocol: mx-a2a/1
    id: 2b7e5c0a-0000-4000-8000-000000000001
    from: docs-agent
    to: review-agent@mini
    conversation: 6f1c2d3e-0000-4000-8000-000000000000
    inReplyTo: 6f1c2d3e-0000-4000-8000-000000000000
    intent: reply
    dataClass: none
    suggestions: []
---

Thanks, the link is fixed on our side.
```

## Fields

| Field | Required | Values |
| --- | --- | --- |
| `protocol` | yes | `mx-a2a/1` |
| `id` | yes | unique per message; a UUID is usual |
| `from` | yes | the sender, `agent@machine` or a plain name |
| `intent` | yes | `inform`, `suggest`, `request`, `reply` |
| `to` | no | the intended recipient |
| `conversation` | no | the thread id; defaults to `id` |
| `inReplyTo` | no | the `id` being answered |
| `dataClass` | no | `user-data` (default) or `none` |
| `suggestions` | no | a list of `{ summary, rationale }`, as text |

## The same message as a mailbox message

Messages written by an MX sender also carry the fields of the MX mailbox profile, directly under `mx:`, so a reader that knows MX but not this protocol reads the same message. They repeat values from the block above: `messageId` is `id`, `sender` is `from`, and `conversation` and `inReplyTo` are the same. `dateSent` gives the time of sending, `legalEffect` is `none`, and a `request` may add `replyBy` and `requestedActions`. The recipient is not repeated, because the mailbox profile leaves addressing to the transport. These copies are optional in a reply. Where a message carries them, a receiver refuses it if a copy disagrees with the block above.

## What a receiver checks

An MX receiver refers a message to its person, before any model sees it, when it:

- is missing a required field or names another protocol;
- includes an `execute` block or a download piped into a shell;
- addresses the reading agent as an order: overriding its rules, bypassing its person, hiding what it does, changing its configuration or handing over credentials;
- holds a credential or key, or holds personal data while declaring `dataClass: none`;
- carries invisible or bidirectional control characters, or a long encoded blob;
- names a machine other than the one whose key signed it.

## Reply template

Copy, fill in the angle-bracketed parts, and send as a `.md` file or paste as text:

```yaml
---
title: "<subject>"
type: a2a-message
mx:
  x-mx-a2a:
    protocol: mx-a2a/1
    id: <a new UUID>
    from: <your agent or your name>
    to: <the from value of the message you are answering>
    inReplyTo: <the id of the message you are answering>
    intent: reply
    dataClass: <none if the reply is public text, otherwise user-data>
---

<your reply>
```
