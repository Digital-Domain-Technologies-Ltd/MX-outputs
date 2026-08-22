---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "Artifact Persistent Storage"
description: "Defines the storage API available to Artifacts for persisting data across sessions, with design rules and hard limits. Maps to persistent_storage_for_artifacts in the Fable 5 system prompt."
author: Tom Cranstoun
created: 2026-06-14
modified: 2026-06-14
version: "1.0"

type: info-doc
tags: [storage, artifacts, persistence, key-value, fable5, example]
mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/blog/drafts/fable5-cogs/08-storage.cog.md
  x-mx-category: example
  status: active
  partOf: site-domaincog
  audience: [machines]
  purpose: "Define the storage API for Artifact persistent data and the rules for using it safely."
  stability: stable
  x-mx-contextProvides: ["window.storage API: get/set/delete/list with shared flag. Keys under 200 chars, no whitespace/slashes/quotes. Values under 5MB. Last-write-wins. Never use localStorage or sessionStorage in Artifacts - they fail in the Claude.ai sandbox."]
  dependencies: ["examples/fable5/06-tools"]
  runbook: "Loaded at session start. Rules apply whenever an Artifact creates or accesses storage."

---

# Artifact Persistent Storage

Artifacts can store and retrieve data across sessions via `window.storage`.

## API

```javascript
await window.storage.get(key, shared?)      // returns {key, value, shared} | throws on missing key
await window.storage.set(key, value, shared?) // returns {key, value, shared} | null on failure
await window.storage.delete(key, shared?)   // returns {key, deleted, shared} | null
await window.storage.list(prefix?, shared?) // returns {keys, prefix?, shared} | null
```

## Data scope

- `shared: false` (default) - personal, current user only
- `shared: true` - visible to all users of the artifact

Inform users when their data will be visible to others.

## Key design

Use hierarchical keys under 200 characters: `table:record_id`. No whitespace, path separators, or quotes in key names. Values under 5MB. Last-write-wins for concurrent updates.

Batch related data into single keys - do not make multiple sequential calls for data that belongs together.

## action

When creating Artifacts that persist data:

1. Wrap all storage calls in try/catch - non-existent keys throw, they do not return null
2. Show loading indicators; display data progressively rather than blocking the UI
3. Include a reset option for users to clear their data
4. Always set `shared` explicitly - do not rely on the default implicitly
5. Never use `localStorage`, `sessionStorage`, or any browser storage API in Artifacts - these are not supported in the claude.ai sandbox
