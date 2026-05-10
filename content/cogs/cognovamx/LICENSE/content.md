---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "LICENSE"
version: "1.0"
description: "MIT license for Maxine Lives specification work. Implementation licenses may differ."
created: 2026-02-12
modified: 2026-02-12
author: Tom Cranstoun

mx:
  license: proprietary
  status: active
  x-mx-category: governance
  partOf: mx-maxine-lives
  tags: [license, mit, open-source, the-gathering]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-canon/mx-maxine-lives/LICENSE.cog.md

  inherits: LICENSE

  x-mx-blocks:
    - prose:
        source: LICENSE
        description: "The MIT license text. Standard, unmodified."
    - definition:
        standards:
          - name: "SPDX"
            identifier: "MIT"
            reference: "https://spdx.org/licenses/MIT.html"
        validation:
          - "License must remain MIT for all specification work"
          - "Implementation licenses may differ (CogNovaMX is commercial)"
    - essence:
        type: license
        spdx: MIT
        copyright-holder: "The Gathering"
        year: 2026
        scope: "Block architecture specification and all Gathering standards"

  contentType: "license"
  runbook: "This is the MIT license for The Gathering's block architecture specification. The specification is MIT. CogNovaMX' commercial products (Maxine, REGINALD) have separate licensing. Do not confuse the two."
---

# License

This cog inherits its prose from [LICENSE](LICENSE). The standard MIT license, unmodified.

**The Gathering** licenses the specification under MIT. **CogNovaMX Ltd** licenses its commercial products separately. The standard belongs to everyone. The product is ours.
