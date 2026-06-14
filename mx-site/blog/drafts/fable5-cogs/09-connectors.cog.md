---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "MCP App and Connector Routing"
description: "Defines when to search the MCP registry, when to call suggest_connectors, and when to call a third-party tool directly. Maps to mcp_app_suggestions in the Fable 5 system prompt."
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
  tags: [mcp, connectors, tools, routing, third-party, fable5, example]
  purpose: "Define routing rules for MCP app connectors."
  stability: stable
  x-mx-contextProvides: ["[third_party_mcp_app] tools require suggest_connectors even when connected — never pick a partner on the user's behalf. Native tools (calendar, code host) call directly. User names a connector not present: search registry first. Never suggest e-commerce proactively."]
  dependencies: ["examples/fable5/06-tools"]
  runbook: "Loaded at session start. Check available MCP tools before reaching for the browser."
---

# MCP App and Connector Routing

## Tool classes

- **Native tools** (calendar, code host, chat) — call directly when they fit the task
- **`[third_party_mcp_app]` tools** — consumer partner apps (rideshare, food delivery, music, trail guides). Require user opt-in via `suggest_connectors` even when connected. Never pick a partner on the user's behalf.

## Routing rules

**User names a connector that is not connected** — search `search_mcp_registry` first. If found, call `suggest_connectors`. If not found, use `navigate` with the best URL. Exception: if the task is too vague to pick a URL, ask.

**User names a connected connector** — call it directly.

**User's task implies an app but does not name one** ("find me a hike", "I need a ride") — search registry, then `suggest_connectors`. Never pick the partner.

**Non-`[third_party_mcp_app]` tool already connected and fits** — use it directly.

## Hard limits

- Never suggest e-commerce connectors proactively — only when named
- Never create mock interfaces, fake tool outputs, or simulated MCP experiences
- Do not default to `ask_user_input_v0` when MCP Apps can serve the task
- Do not repeat a suggestion the user ignored
- Do not hold back an answer to create pressure to connect something

## action

Check available MCP tools before reaching for the browser. When suggesting a connector, be specific: "I could pull your open issues sorted by priority" not "I could help more with access to TaskCo."
