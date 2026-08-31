---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
"@context": https://mx.allabout.network/canon/context.json
title: "site-domaincog"
description: "Domain anchor for the served site estate: the cogs, canon exports, and drafts that ship with mx.allabout.network under mx-site."
author: "Tom Cranstoun"
created: 2026-07-10
modified: 2026-07-10
version: "1.0"
triggers: [site-domaincog, mx-site-domain, served-site-domain]

type: info-doc
tags: [domaincog, ubercog-family, mx-site, served]
mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/site-domaincog.cog.md
  status: active
  x-mx-category: mx-core
  x-mx-cogRole: domaincog
  x-mx-domainScope: ["mx-site"]
  partOf: UBERCOG
  maintainer: info@cognovamx.com
  license: proprietary
  purpose: "The domain anchor every mx-site cog chains to through partOf. Owns the cogs, canon exports, and drafts shipped with the served site; chains up to the master UBERCOG; holds the pointer to the cog factory."
  stability: stable
  x-mx-contextProvides:
    - "Ownership anchor for cogs under mx-site/"
    - "One hop below the master on the ubercog chain"
  refersTo: [UBERCOG, how-to-write-a-cog]
  audience: [humans, machines]
  readingLevel: beginner
  runbook: "A cog in the served site estate declares partOf: site-domaincog (or a cog that chains to it). Follow refersTo to the master UBERCOG or to how-to-write-a-cog for the cog factory."
  dependencies: []

---

# site-domaincog

The domain anchor for the served site estate: the cogs, canon exports, and drafts that ship with `mx-site/` (mx.allabout.network). A cog in this domain declares `partOf: site-domaincog`, or names an intermediate cog that chains here; the chain continues to the master [`UBERCOG.cog.md`](../UBERCOG.cog.md). The cog factory is [`how-to-write-a-cog`](../scripts/cogs/how-to-write-a-cog.cog.md).
