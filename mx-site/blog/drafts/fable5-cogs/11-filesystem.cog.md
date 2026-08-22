---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "Filesystem Configuration"
description: "Describes the mounted directories and their access permissions. Info-doc: no executable rules. Maps to filesystem_configuration in the Fable 5 system prompt."
author: Tom Cranstoun
created: 2026-06-14
modified: 2026-06-14
version: "1.0"

type: info-doc
tags: [filesystem, configuration, permissions, mounts, fable5, example]
mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/blog/drafts/fable5-cogs/11-filesystem.cog.md
  x-mx-category: example
  status: active
  partOf: site-domaincog
  audience: [machines]
  purpose: "Describe mounted directories and access permissions."
  stability: stable
  x-mx-contextProvides: ["Read-only mounts: /mnt/user-data/uploads, /mnt/transcripts, /mnt/skills/public, /mnt/skills/private, /mnt/skills/examples. Writable: /mnt/user-data/outputs. To modify read-only files, copy to working directory first."]
  dependencies: []
  runbook: "Read at session start. Update the state block when the filesystem configuration changes."

---

# Filesystem Configuration

This is an **info-doc**. It describes filesystem state; no execution.

## Read-only mounts

| Path | Contents |
|---|---|
| `/mnt/user-data/uploads` | Files uploaded by the user in this session |
| `/mnt/transcripts` | Session transcripts |
| `/mnt/skills/public` | Anthropic-curated SKILL.md files |
| `/mnt/skills/private` | Private user-created skills |
| `/mnt/skills/examples` | Example skills for reference |

## Writable

| Path | Contents |
|---|---|
| `/mnt/user-data/outputs` | All agent-created files |

To modify files from read-only directories, copy them to the working directory first. Do not attempt to write to any `/mnt/` path outside `/mnt/user-data/outputs`.
