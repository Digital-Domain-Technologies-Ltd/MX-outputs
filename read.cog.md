---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "read.cog.md - transfer manifest"
description: "What this batch carries across the generator-to-finisher boundary and what a finisher may do with it: the declared items, the inventory to verify, and nothing else."
author: Tom Cranstoun
created: 2026-07-03
modified: 2026-07-03
version: "1.0"

type: transfer-manifest
tags: [transfer, manifest, finisher, export, batch]
mx:
  status: active
  stability: stable
  x-mx-category: mx-tools
  audience: [machines, humans]
  purpose: "Tell the finisher what this batch is: the items it may publish, the inventory that proves the batch is intact, and the datetime it was exported."
  runbook: "Finisher: verify every inventory hash against the files on this medium, confirm every removed path is absent, and confirm the hub source has not moved since sourceCommit (node scripts/export-batch.cjs --verify runs all three) BEFORE the push. Any mismatch is a refusal, fail-closed - a moved source means re-export to fix at source. Publish only what items declares; nothing here authorises creating content."
  x-mx-exportedAt: "2026-07-03T09:55:46.484Z"
  x-mx-sourceCommit: "3a3b159cd7c91a39a33524079a56226640b413b1"
  x-mx-medium: "git:mx-outputs"
  finishing:
    trustAnchor: null
    items:
      - select: "mx-site/**"
        surface: static
        destination: "https://mx.allabout.network/"
        attestation: null
        accessibility: null
    currency: null
    inventory:
      touched: 1
      unchanged: 632
      added:
        - "mx-site/AI-USAGE.md"
      changed: []
      removed: []
      sha256:
        "mx-site/AI-USAGE.md": 9df9403a07b194cfc2efb5b18b44b8183ff3c2bc67d7d2f80e452e154ec8d241
---

# read.cog.md - transfer manifest

This medium carries one finished batch from the air-gapped generator to the
finisher. The finisher does what the block above says and nothing it does not:
verify the inventory (every sha256 matches the file beside this manifest,
every removed path is absent), then publish the declared items per the
finisher runbook. A batch that does not verify is refused whole. The trust
fields (trustAnchor, attestation, accessibility, currency) are explicit nulls:
the attestation tier is not in force on this medium, and a finisher must not
infer a directive that is absent.
