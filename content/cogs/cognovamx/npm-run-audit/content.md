---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "npm-run-audit"
version: "1.3.0"
description: "Gatekeeper for the MX audit pipeline. Phase 1: run scripts until PDF exists. Phase 2: read the log and cache to verify claims and fix any script bugs found."

created: 2026-05-01
modified: 2026-05-08

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: published
  x-mx-riskLevel: medium
  security:
    scope:
      filesystem:
        - mx-reginald/audit/results/**
        - mx-reginald/audit/src/**
        - mx-reginald/audit/bin/**
        - mx-crm/outreach/**
        - mx-outputs/pdf/outreach/**
      network: read-only
      allowedOperations: [read, write, create]
    audit:
      logLevel: standard
      retention: 90d
      includeInputs: true
      includeOutputs: false
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/npm-run-audit.cog.md

  x-mx-category: mx-sales
  partOf: mx-os
  refersTo: [mx-audit, cog-unified-spec]
  buildsOn: [mx-audit]
  tags: [audit, crawl, report, pipeline, pdf, npm, automation, gatekeeper, claim-verification, self-repair]

  audience: agents
  readingLevel: intermediate

  contentType: action-doc
  actionType: sop
  runbook: "Read this cog in full, then execute Phase 1 bash commands using the Bash tool. Phase 2 is LLM inference — no scripts."

  x-mx-execute:
    runtime: runbook
    actions:
      - name: audit
        description: Run the full MX audit pipeline from crawl to PDF
        usage: |
          Phase 1 — Scripts (run every bash command in order using the Bash tool):

          1. Resolve DOMAIN_URL and PAGE_COUNT from context or ask the user.
          2. Derive shell variables: HOSTNAME (via node URL parse), CLIENT_SLUG
             (dots to dashes), DATE (YYYY-MM-DD), PDF_OUT, REPORT_MD, LOG.
          3. Clear previous results: rm -rf mx-reginald/audit/results/${HOSTNAME}
          4. Run the crawler: npm run audit:start -- -s "${DOMAIN_URL}" -c
             "${PAGE_COUNT}" --output "mx-reginald/audit/results/${HOSTNAME}" --log-level info
             Stop if exit code ≠ 0.
          5. Run the pipeline (report + gates + PDF):
             npm run audit:pipeline -- --results "mx-reginald/audit/results/${HOSTNAME}"
             --out "${PDF_OUT}" --client "${CLIENT_SLUG}" --date "${DATE}" 2>&1 | tee "${LOG}"
             Stop if PIPESTATUS[0] ≠ 0.
          6. Confirm PDF exists: test -f "${PDF_OUT}"

          Phase 2 — Inference (no scripts):

          1. Read ${LOG} in full; identify and fix any script bugs found.
          2. Read ${REPORT_MD}; for each factual claim citing a URL, retrieve
             cached HTML with: npm run -w mx-audit cache:get -- --url "<url>"
             --type decoded. Correct any claims that do not match the cache, then
             re-run gates only (--gates flag).
        inputs:
          - name: domain-url
            type: string
            description: Full URL of the site to audit (e.g. https://dotfusion.com)
          - name: page-count
            type: integer
            description: Maximum pages to crawl (-1 for all)
        outputs:
          - name: report-md
            path: "mx-crm/outreach/${DATE}/${CLIENT_SLUG}-report.md"
          - name: report-pdf
            path: "mx-outputs/pdf/outreach/${DATE}/${CLIENT_SLUG}-report.pdf"
---

# npm-run-audit

Two-phase cog. Phase 1 runs the npm scripts and does not stop until the PDF exists on disk or
a script exits non-zero. Phase 2 reads the pipeline log and the finished report, verifies
every factual claim against the cached pages, and fixes any script-level bugs found.

No inference occurs in Phase 1. No scripts run in Phase 2.

---

## Phase 1 — Scripts

### 1.1 Resolve inputs

**If both `domain-url` and `page-count` are supplied**, proceed immediately to 1.2.

**If either is missing**, read the most recent audit invocation from the current chat context
and extract the domain URL and page count from it.

**If still unresolved**, ask:

> "Which domain should I audit, and how many pages? (Use -1 for all pages.)"

Do not proceed until both values are confirmed.

```bash
HOSTNAME=$(node -e "console.log(new URL('${DOMAIN_URL}'.replace('/sitemap.xml','')).hostname)")
CLIENT_SLUG=$(echo "${HOSTNAME}" | tr '.' '-')
DATE=$(date +%Y-%m-%d)
PDF_OUT="mx-outputs/pdf/outreach/${DATE}/${CLIENT_SLUG}-report.pdf"
REPORT_MD="mx-crm/outreach/${DATE}/${CLIENT_SLUG}-report.md"
LOG="/tmp/audit-pipeline-${HOSTNAME}.log"
```

### 1.2 Crawl

```bash
rm -rf "mx-reginald/audit/results/${HOSTNAME}"

npm run audit:start -- \
  -s "${DOMAIN_URL}" \
  -c "${PAGE_COUNT}" \
  --output "mx-reginald/audit/results/${HOSTNAME}" \
  --log-level info
```

Stop if exit code ≠ 0. Do not proceed to 1.3.

### 1.3 Pipeline

```bash
npm run audit:pipeline -- \
  --results "mx-reginald/audit/results/${HOSTNAME}" \
  --out "${PDF_OUT}" \
  --client "${CLIENT_SLUG}" \
  --date "${DATE}" \
  2>&1 | tee "${LOG}"
PIPELINE_EXIT=${PIPESTATUS[0]}
```

Stop if `PIPELINE_EXIT` ≠ 0. Do not proceed to Phase 2.

### 1.4 Confirm PDF

```bash
test -f "${PDF_OUT}" || { echo "PDF not found: ${PDF_OUT}"; exit 1; }
```

Do not proceed to Phase 2 until this check passes.

---

## Phase 2 — Inference

Phase 2 starts only after `${PDF_OUT}` exists on disk.

### 2.1 Read the pipeline log — fix script bugs

Read `${LOG}` in full.

Look for failures that are caused by a script bug rather than by report content — a pattern
that the script should have handled but did not. For each bug found:

1. Read the source file responsible
2. Locate and fix the specific function or block
3. Verify the module still loads: `node -e "import('./path').then(() => console.log('OK'))"`

Do not re-run the pipeline after fixing. The fix applies to the next run.

### 2.2 Read the report — verify claims against cached pages

Read `${REPORT_MD}`.

For each factual claim that names a specific URL, retrieve the cached decoded HTML:

```bash
npm run -w mx-audit cache:get -- --url "<url>" --type decoded
```

Exit 0 = cache hit, HTML on stdout. Exit 1 = cache miss — the URL was not audited; any
claim about it is unverifiable and must be flagged.

When a claim does not match the cache, correct `${REPORT_MD}`, then re-run gates only:

```bash
npm run audit:pipeline -- \
  --gates "${REPORT_MD}" \
  --results "mx-reginald/audit/results/${HOSTNAME}" \
  --out "${PDF_OUT}"
```

Do not re-run the crawl or infill.

---

## Report outputs

```
Audit complete: ${HOSTNAME}
  Report: ${REPORT_MD}
  PDF:    ${PDF_OUT}

Open: open "${REPORT_MD%.*}.pdf"
```
