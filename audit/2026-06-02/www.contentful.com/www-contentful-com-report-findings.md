---
title: "Contentful — Audit Gate Findings"
description: "Findings sidecar for the Contentful audit on 2026-06-02. Records every gate finding (error, warning, info) raised during the run, for human sign-off and for a machine to consider, decide on, and action before delivery."
author: "Tom Cranstoun"
created: 2026-06-02
modified: 2026-06-02
auditDate: "2026-06-02"
companion: "www-contentful-com-report.md"
mx:
  status: active
  contentType: audit-findings
  audience: [humans, machines]
  x-mx-findingsCount: 2
  inherits: ["www-contentful-com-report-findings.json"]
  runbook: "Human reviewer reads the prose body before sign-off; accept, rebut, or correct each finding. A machine reads the committed <basename>-findings.json companion (same data, schema audit-findings.v1) or the embedded x-mx-findings block to consider and action findings loop-safely."
  x-mx-findings: |
    [{"instanceId":"ee894aa46a99","patternKey":"91e1be7be85d","timestamp":"2026-06-02T14:14:09.232Z","severity":"warn","source":"infill-report.js","gateName":"template-contract","category":"placeholder-contract-drift","title":"Template-contract drift: 2 mismatches between template and contract.json","detail":"8 placeholder(s) in template but not declared in contract: [AB_TEST_CATEGORY_LABEL], [AB_TEST_MACHINE_IMPACT], [AB_TEST_MITIGATIONS], [AB_TEST_PAGES_AFFECTED], [AB_TEST_VARIANT_EVIDENCE], [AB_TEST_VENDOR_NAME], [LINK_INVENTORY_SITEMAP_NOTE], [LINK_INVENTORY_SITEMAP_ROW]. Add them to mx-reginald/audit/templates/web-audit-suite-template.contract.json.\n\n1 placeholder(s) declared in contract but not found in template: [AVG_LINKS_PER_PAGE]. Remove from contract or re-add to template.","suggestions":[],"lineRef":null,"provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"medium","firstSeen":null,"occurrences":null},{"instanceId":"05ffa14c62d0","patternKey":"fbe58e8dc3b8","timestamp":"2026-06-02T14:14:09.718Z","severity":"info","source":"check-report-tone.js","gateName":"tone","category":"american-english","title":"American English spellings: 2 instances","detail":"American English spellings\n\nline 752: \"optimizes → optimises\" - | /products/analytics/ | undefined | undefined | Your AI copilot detects anomalies, predicts outcome\nline 1310: \"behavior → behaviour\" - **Measurement completeness:** Some probes may encounter network errors (HTTP 499 responses) or timeo","suggestions":[],"lineRef":"line 752","provenanceClass":"deterministic","status":"open","decision":null,"actionTarget":null,"regenMode":null,"loopRound":0,"fix":null,"actionLog":[],"x-mx-priority":"low","firstSeen":null,"occurrences":null}]
---
## Audit gate findings for human review

Every automated gate ran to completion; this sidecar surfaces 2 findings (1 warning, 1 info) for the human reviewer to read, accept, or rebut before sign-off. Each entry names the gate that raised it, the severity, and the supporting evidence.

### Warnings (rule violations)

*A gate identified a likely audit-content issue. Read each detail below and confirm the finding is intentional, or correct the report before sign-off. Common shapes: a priority missing from the engagement plan, a scope phrase that mixes per-page and site-wide claims, a recommendation that lacks specifics.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | template-contract | placeholder-contract-drift | Template-contract drift: 2 mismatches between template and contract.json | 2026-06-02T14:14:09Z |

<details open><summary>Warning detail (1)</summary>

**1. template-contract - Template-contract drift: 2 mismatches between template and contract.json**

8 placeholder(s) in template but not declared in contract: [AB_TEST_CATEGORY_LABEL], [AB_TEST_MACHINE_IMPACT], [AB_TEST_MITIGATIONS], [AB_TEST_PAGES_AFFECTED], [AB_TEST_VARIANT_EVIDENCE], [AB_TEST_VENDOR_NAME], [LINK_INVENTORY_SITEMAP_NOTE], [LINK_INVENTORY_SITEMAP_ROW]. Add them to mx-reginald/audit/templates/web-audit-suite-template.contract.json.

1 placeholder(s) declared in contract but not found in template: [AVG_LINKS_PER_PAGE]. Remove from contract or re-add to template.

</details>

### Info (tone / style observations)

*A gate flagged a tone, voice, or style observation. Usually safe to accept; scan the detail to confirm the phrasing reads as intended.*

| # | Gate | Category | Finding | Recorded |
|---|------|----------|---------|----------|
| 1 | tone | american-english | American English spellings: 2 instances (line 752) | 2026-06-02T14:14:09Z |

<details open><summary>Info detail (1)</summary>

**1. tone - American English spellings: 2 instances**

American English spellings

line 752: "optimizes → optimises" - | /products/analytics/ | undefined | undefined | Your AI copilot detects anomalies, predicts outcome
line 1310: "behavior → behaviour" - **Measurement completeness:** Some probes may encounter network errors (HTTP 499 responses) or timeo

</details>

