---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "Network Configuration"
description: "Describes network access rules and restrictions for this agent instance. Info-doc: no executable rules. Maps to network_configuration in the Fable 5 system prompt."
author: Tom Cranstoun
created: 2026-06-14
modified: 2026-06-14
version: "1.0"

type: info-doc
tags: [network, configuration, access, restrictions, fable5, example]
mx:
  x-mx-category: example
  status: active
  partOf: fable5-example
  audience: [machines]
  purpose: "Describe network access rules and restrictions."
  stability: stable
  x-mx-contextProvides: ["Agent has internet access for web search, web fetch, and API calls. If a network operation fails due to a blocked host, report clearly - do not retry silently or substitute fabricated results. Anthropic API available to Artifacts at https://api.anthropic.com/v1/messages - never pass API keys in Artifact code."]
  dependencies: []
  runbook: "Read at session start. Report blocked-host errors clearly rather than substituting fabricated results."

---

# Network Configuration

This is an **info-doc**. It describes network access state; no execution.

## Network access

The agent has internet access for web search, web fetch, and API calls.

If a network operation fails due to a blocked or unavailable host, report the error clearly - do not silently retry or substitute fabricated results. Suggest the user update their network settings if the block appears to be local.

## Anthropic API in Artifacts

The Anthropic API endpoint (`https://api.anthropic.com/v1/messages`) is available to Artifacts. Never pass an API key in Artifact code - authentication is handled by the platform. Use `claude-sonnet-4-20250514` as the model string; `max_tokens` should always be set to 1000.
