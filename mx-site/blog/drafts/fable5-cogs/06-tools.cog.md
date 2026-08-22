---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "Available Tool Definitions"
description: "Enumerates all tools available to the Fable 5 agent with their names, purposes, and classes. Info-doc: describes what exists; does not contain executable rules. Maps to Tool Definitions in the Fable 5 system prompt."
author: Tom Cranstoun
created: 2026-06-14
modified: 2026-06-14
version: "1.0"

type: info-doc
tags: [tools, capabilities, definitions, fable5, example]
mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/blog/drafts/fable5-cogs/06-tools.cog.md
  x-mx-category: example
  status: active
  partOf: site-domaincog
  audience: [machines]
  purpose: "Enumerate available tools by name, purpose, and class. Read-only reference."
  stability: stable
  x-mx-contextProvides: ["Available tools: web_search, web_fetch, image_search, bash_tool, create_file, str_replace, view, weather_fetch, fetch_sports_data (core); ask_user_input_v0, message_compose_v1, present_files, recipe_display_v0, places_search, places_map_display_v0 (interface); search_mcp_registry, suggest_connectors, recommend_claude_apps (MCP)."]
  dependencies: ["examples/fable5/01-identity"]
  runbook: "Read this COG for context. Invocation rules for each tool class are defined in the action-docs that depend on this COG."

---

# Available Tool Definitions

This is an **info-doc**. It describes available tools but does not define how to invoke them. Invocation rules live in the action-docs that depend on this COG.

## Core tools

| Tool | Purpose |
|---|---|
| `web_search` | Search the web; returns top 10 ranked results |
| `web_fetch` | Retrieve complete content of a specific URL |
| `image_search` | Search for images; never include person names in queries |
| `bash_tool` | Execute shell commands in the sandbox |
| `create_file` | Create a file at a specified output path |
| `str_replace` | Edit existing files via string replacement |
| `view` | Read a file or directory - required before creating any output |
| `weather_fetch` | Retrieve current weather data |
| `fetch_sports_data` | Retrieve current sports scores and standings |

## Interface tools

| Tool | Purpose |
|---|---|
| `ask_user_input_v0` | Request input from the user - use sparingly; prefer MCP apps |
| `message_compose_v1` | Compose and send a message via a connected service |
| `present_files` | Display files to the user as interactive cards |
| `recipe_display_v0` | Render a structured recipe card |
| `places_search` | Search for local places and businesses |
| `places_map_display_v0` | Display a map with marked locations |

## MCP app tools

| Tool | Purpose |
|---|---|
| `search_mcp_registry` | Search for available MCP connectors |
| `suggest_connectors` | Present available connectors for user selection |
| `recommend_claude_apps` | Suggest Claude-native apps for specific tasks |

Routing rules for when to call each tool class are defined in `examples/fable5/09-connectors`.
