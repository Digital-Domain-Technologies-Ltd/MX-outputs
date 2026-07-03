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
  x-mx-exportedAt: "2026-07-03T09:47:47.506Z"
  x-mx-sourceCommit: "056d8e5d9ae691e78f1f5abf9fae098de39b6aab"
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
      touched: 8
      unchanged: 625
      added:
        - "mx-site/AI-USAGE.md"
        - "mx-site/blog/drafts/agent-web/the-skill-that-tried-to-rewrite-the-rules.html"
        - "mx-site/blog/why-ai-cites-reddit-more-than-your-site.html"
      changed:
        - "mx-site/blog/index.html"
        - "mx-site/blog/sitemap.xml"
        - "mx-site/llms-full.txt"
        - "mx-site/llms.txt"
        - "mx-site/sitemap.xml"
      removed: []
      sha256:
        "mx-site/AI-USAGE.md": 9df9403a07b194cfc2efb5b18b44b8183ff3c2bc67d7d2f80e452e154ec8d241
        "mx-site/blog/drafts/agent-web/the-skill-that-tried-to-rewrite-the-rules.html": 5abfce0500b4438c3e08fa22b894b83012105a812787f3c8fb468ad915e1d7c7
        "mx-site/blog/index.html": 28fadc898d77d04d6b32d0b6ff950efbd34fe9fb3ecabdb089471b4c6216ec92
        "mx-site/blog/sitemap.xml": 230cfe476162237ca13c8b299bb6742e58cb2661d487008af302a3e139875201
        "mx-site/blog/why-ai-cites-reddit-more-than-your-site.html": 46245dca87623ff91af1fa89f7f962d496320986d0b34dd96332d9b276c8f7a9
        "mx-site/llms-full.txt": ab53ad5b52ad8373a42e83b98dcd4070bb5820c1fd0d3cde63c2bce16dbc316f
        "mx-site/llms.txt": 04cff8e45ff5e47eeb36f7a3918f22e252572895b3bed63f97bd3cd1696cae6c
        "mx-site/sitemap.xml": ef0bc8fbda26d094ff3c5cdcaf1872c9a28314893526765ee3fc11aeba344f69
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
