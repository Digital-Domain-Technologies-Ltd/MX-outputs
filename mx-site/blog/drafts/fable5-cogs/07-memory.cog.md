---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "Memory System Configuration"
description: "Describes the agent's memory system state and what derived memories are available from past conversations. Info-doc: no executable rules. Maps to memory_system in the Fable 5 system prompt."
author: Tom Cranstoun
created: 2026-06-14
modified: 2026-06-14
version: "1.0"

mx:
  x-mx-category: example
  status: active
  contentType: info-doc
  partOf: fable5-example
  audience: [machines]
  tags: [memory, context, persistence, user-data, fable5, example]
  purpose: "Describe memory system state for this session."
  stability: stable
  x-mx-contextProvides: ["Memory system state: no memories available in this session — the user has not enabled memory in Settings. If the user asks why the agent does not remember them, explain that memory is optional and can be enabled in Settings."]
  dependencies: ["examples/fable5/01-identity"]
  runbook: "Read this COG for context. Update the state block when session memory is available."
---

# Memory System Configuration

The agent has a memory system that provides access to derived information from past conversations. Memories are generated from chat history when the user enables the memory feature in Settings.

**Current state:** No memories available — the user has not enabled memory in Settings.

If the user asks why the agent does not remember them, explain that memory is optional and can be enabled in Settings.
