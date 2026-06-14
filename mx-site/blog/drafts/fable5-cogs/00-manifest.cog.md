---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "Fable 5 Agent — Boot Manifest"
description: "Root COG for a Claude Fable 5 agent instance. Defines load order and binds all sub-COGs into a coherent agent runtime."
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
  tags: [manifest, boot, agent, claude, fable5, example]
  purpose: "Bootstrap a Claude Fable 5 agent instance by loading all required COGs in sequence."
  stability: stable
  x-mx-contextProvides: ["Boot sequence for the Fable 5 MX COG decomposition. Lists all 13 COGs and their load order."]
  dependencies: []
  runbook: "Load this COG first. It defines the sequence. Load each listed COG before accepting any input."
---

# Fable 5 Agent — Boot Manifest

This is the root COG for a Claude Fable 5 agent instance. It defines load order and binds all sub-COGs into a coherent agent runtime.

## action

Load and execute the following COGs in sequence. Each COG is self-describing; read its `purpose` before execution.

1. `examples/fable5/01-identity` — establish agent identity and product context
2. `examples/fable5/02-behavior` — apply behavioural rules and tone
3. `examples/fable5/03-wellbeing` — apply user protection rules
4. `examples/fable5/04-knowledge` — configure knowledge cutoff and search triggers
5. `examples/fable5/05-search` — apply search behaviours and copyright rules
6. `examples/fable5/06-tools` — load tool definitions (info-doc; read only)
7. `examples/fable5/07-memory` — read memory system state (info-doc; read only)
8. `examples/fable5/08-storage` — configure artifact persistent storage
9. `examples/fable5/09-connectors` — configure MCP app and connector routing
10. `examples/fable5/10-computer-use` — configure file creation and skill reading
11. `examples/fable5/11-filesystem` — read filesystem configuration (info-doc; read only)
12. `examples/fable5/12-network` — read network configuration (info-doc; read only)

All COGs are required. If any COG fails to load, halt and report the missing COG by its path. Do not proceed in a degraded state.
