---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "mx-audit-dev-verify"
version: "1.0.0"
description: "Developer verification pass for the mx-audit pipeline — checks template/contract/handler consistency, prompt quality, and gate chain completeness."

created: 2026-05-08
modified: 2026-05-08

author: Tom Cranstoun

mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/mx-audit-dev-verify.cog.md
  maintainer: info@cognovamx.com
  license: proprietary
  status: published
  x-mx-riskLevel: low

  x-mx-category: mx-dev
  partOf: mx-os
  buildsOn: [mx-audit]
  refersTo: [how-to-write-a-cog, mx-audit]
  tags: [audit, developer-tools, verification, templates, prompts, quality-assurance, pipeline]

  audience: [machines]
  readingLevel: advanced
  contentType: action-doc
  actionType: sop
  runbook: "Run this cog after any change to mx-audit templates, contract files, infill handlers, or gate prompts to detect inconsistencies before they surface in client reports."

  x-mx-blocks: [prose, sop]

  x-mx-execute:
    runtime: runbook
    command: mx exec mx-audit-dev-verify
    policy: |
      Read-only verification pass over the mx-audit pipeline source files.
      This cog checks consistency between the template, contract, infill handlers, and gate prompts.
      It does NOT modify any file; it only reads and reports. Run after any edit to a template,
      contract JSON, infill-report.js, or gate prompt script.
    actions:
      - name: template-contract-sync
        description: Compare [PLACEHOLDER] tokens in the template against the declared entries in the matching .contract.json.
        usage: |
          Read mx-audit/templates/web-audit-suite-template.md.
          Extract every [TOKEN] pattern: search for strings matching \[[A-Z][A-Z0-9_]+\] that appear
          in the document body (not inside HTML comments or REWRITE blocks).
          Read mx-audit/templates/web-audit-suite-template.contract.json.
          List the keys under the "placeholders" object.
          Compare the two sets and report:
            FAIL — tokens in the template but absent from the contract (will cause CONTRACT ERROR at infill time)
            WARN — tokens in the contract but absent from the template (dead entries, safe but misleading)
            PASS — sets match exactly
          Repeat the same check for mx-audit/templates/ecommerce-audit-template.md and its
          mx-audit/templates/ecommerce-audit-template.contract.json counterpart.
          If generate-template-contract.js supports a --dry-run or --diff flag, use it:
            node mx-audit/bin/generate-template-contract.js --dry-run
          Otherwise perform the comparison by reading both files.
        outputs:
          - name: sync-report
            type: string
            description: "PASS/FAIL/WARN per template, listing mismatched tokens by name."

      - name: contract-handler-sync
        description: Verify that every script-deterministic contract entry has a fill handler in infill-report.js.
        usage: |
          Read mx-audit/templates/web-audit-suite-template.contract.json.
          Collect every key under "placeholders" where the handler value is "script-deterministic".
          For each such key TOKEN:
            Search mx-audit/bin/infill-report.js for the string replace('[TOKEN]' or replace("[TOKEN]"
            or for the token name appearing in a handler dispatch map (e.g. an object key or switch case).
          Report:
            FAIL — tokens with no handler found (will silently remain unfilled in every report)
            PASS — every deterministic token has a handler
          For "rewrite-llm" entries, confirm the token does NOT appear as a bare [TOKEN] in the
          template body text — it should only appear inside a <!-- REWRITE: ... --> block.
          Report any rewrite-llm tokens found in body text (they would be treated as placeholders
          and cause a CONTRACT ERROR).
        outputs:
          - name: handler-report
            type: string
            description: "PASS/FAIL per token, listing tokens with missing handlers."

      - name: prompt-quality-review
        description: Review the REWRITE block instructions and gate system prompts for truncation risk, internal contradictions, and missing quality guards.
        usage: |
          Read mx-audit/scripts/rewrite-report.js.
          Locate the SYSTEM_PROMPT constant (or equivalent system prompt string).
          Check:
            WARN if the prompt does not include a max_tokens or output-length guard — missing guards
              allow the API to truncate mid-section (as seen with Priority 2-5 being dropped).

          Read mx-audit/templates/web-audit-suite-template.md.
          Locate the large REWRITE block that generates the At-a-Glance table and Priority sections
          (typically the block containing "render the at-a-glance findings table" or similar).
          Check:
            WARN if the block does not say "render one Priority N block per row" AND "do not truncate"
              or equivalent explicit completeness instruction — this is the root cause of truncated Priority sections.
            WARN if the block does not specify a concrete output format for each Priority section
              (e.g. "each Priority block has exactly three labelled fields: **Finding**, **What to change and why**, **Effort**").

          Read mx-audit/scripts/audit-fierce-critic.js.
          Locate the LLM_CRITIC_RUBRIC constant.
          Check:
            FAIL if two AREA sections contain directly contradictory instructions
              (e.g. "always flag X" in one area AND "Do NOT flag X" in another area for the same pattern).
            WARN if any AREA lacks a "Do NOT flag" entry — areas without false-positive guards are
              prone to blocking valid report content.
            WARN if the security-header carve-out is absent — security header recommendations naming
              a specific header (CSP, X-Frame-Options, X-Content-Type-Options, HSTS) should be exempt
              from hollow-recommendation flagging.

          Read mx-audit/scripts/audit-llm-judgment.js.
          Locate RUBRIC CHECK 1 (the "MISSING IN ENGAGEMENT" check).
          Check:
            FAIL if the rubric says "check top 2-3 priorities" or "check the top priorities" without
              explicitly saying "check EVERY numbered priority" — partial priority checking allows
              low-numbered priorities (3, 4, 5) to be omitted from the engagement table undetected.
            PASS if the rubric explicitly says "check EVERY numbered priority (Priority 1 through N,
              not just the top two or three)".
        outputs:
          - name: prompt-report
            type: string
            description: "PASS/WARN/FAIL per file and check, with the specific line or text that triggered each finding."

      - name: gate-chain-check
        description: Verify that all gate scripts exist on disk and are invoked in the correct order in audit-pipeline.js.
        usage: |
          Read scripts/audit-pipeline.js.
          In the --gates block, identify every node(join(HERE, 'scriptname.js'), ...) call.
          For each script path referenced:
            Check that the file exists at scripts/scriptname.js (the stub) OR at mx-audit/scripts/scriptname.js
            (the authoritative copy). A file existing at either location is sufficient.
            Report FAIL if neither path exists.
          Verify the gate invocation order matches the documented gate numbering:
            Gate 0a → check-template-coverage.js
            Gate 0b → check-report-tone.js
            Gate 0c → pandoc heading-count (inline, no script)
            Gate 0d → check-report-contradictions.js
            Gate 0e → check-report-section-completeness.js
            Gate 0g → check-report-section-sanity.js
            Gate 0f → check-report-rating-grade.js
            Gate 1  → check-template-leaks.js
            Gate 2  → verify-audit-report.js
            Gate 3  → audit-fierce-critic.js
            Gate 4  → audit-llm-judgment.js
            Gate 5  → mx.pdf.sh
          Report any gates that are out of order or reference a script that does not exist.
          In the --collect block, verify that discover-urls.js is invoked as step 5a (after the crawler
          at step 5 and before the error-page test at step 6). Report FAIL if it is absent — its absence
          leaves all SITEMAP_* placeholders unfilled in every automated report.
          In the --report block, verify that infill-report.js is invoked before rewrite-report.js.
          Report FAIL if the order is reversed or either is absent.
        outputs:
          - name: chain-report
            type: string
            description: "PASS/FAIL per gate, listing any broken paths or ordering violations."

      - name: full-verify
        description: Run all four verification actions in sequence and produce a consolidated findings list.
        usage: |
          Run actions in this order:
            1. template-contract-sync
            2. contract-handler-sync
            3. prompt-quality-review
            4. gate-chain-check
          Collect all findings from each action.
          Produce a consolidated report with this structure:

          ## mx-audit-dev-verify — Full Verification

          ### 1. Template ↔ Contract Sync
          [PASS / WARN / FAIL] — [summary]
          [bullet findings if any]

          ### 2. Contract ↔ Handler Sync
          [PASS / WARN / FAIL] — [summary]
          [bullet findings if any]

          ### 3. Prompt Quality Review
          [PASS / WARN / FAIL] — [summary]
          [bullet findings if any]

          ### 4. Gate Chain Check
          [PASS / WARN / FAIL] — [summary]
          [bullet findings if any]

          ### Summary
          [N PASS / N WARN / N FAIL]
          [If all PASS: "Pipeline implementation is consistent. No action required."]
          [If any FAIL: "Fix FAIL items before next client report. WARN items are advisory."]
        inputs:
          - name: scope
            type: string
            required: false
            description: "Optional: 'web' (web-audit-suite-template only), 'ecom' (ecommerce-audit-template only), or 'all' (default). Controls which templates are checked in actions 1 and 2."
        outputs:
          - name: verification-report
            type: string
            description: "Consolidated PASS/WARN/FAIL report across all four checks."
---

# mx-audit-dev-verify

Developer verification pass for the mx-audit pipeline. Run after editing any template, contract file, infill handler, or gate prompt to catch inconsistencies before they surface in a client report.

## When to run

Run `full-verify` after any of these changes:

- Adding, renaming, or removing a `[PLACEHOLDER]` in a template
- Editing `web-audit-suite-template.contract.json` or `ecommerce-audit-template.contract.json`
- Modifying a fill handler in `mx-audit/bin/infill-report.js`
- Editing the REWRITE block instructions in a template
- Modifying the system prompt in `mx-audit/scripts/rewrite-report.js`
- Editing `LLM_CRITIC_RUBRIC` in `mx-audit/scripts/audit-fierce-critic.js`
- Editing the judgment rubric in `mx-audit/scripts/audit-llm-judgment.js`
- Adding or reordering gates in `scripts/audit-pipeline.js`

## What each action checks

| Action | Checks | Blocks if failing |
|--------|--------|-------------------|
| `template-contract-sync` | `[TOKEN]` in template ↔ `placeholders` in contract | Yes — CONTRACT ERROR at infill time |
| `contract-handler-sync` | `script-deterministic` entries ↔ handlers in `infill-report.js` | Yes — silent unfilled placeholders |
| `prompt-quality-review` | REWRITE completeness guard, fierce-critic contradictions, LLM-judgment priority coverage | WARN only — advisory |
| `gate-chain-check` | Gate script paths exist, gate order correct, `discover-urls.js` present in collect phase | Yes — broken gates cannot run |

## Known issues caught by this cog

The following bugs have already occurred and been fixed. This cog is designed to catch them if they regress:

- **`[ATTACK_TYPE]` / `[HEADER]` left in contract after template change** — caught by `template-contract-sync` (tokens in contract but not in template).
- **`[SECURITY_NARRATIVE]` added to template without a contract entry** — caught by `template-contract-sync` (tokens in template but not in contract).
- **Priority 2–5 sections truncated by the AI rewrite** — caught by `prompt-quality-review` checking for the completeness guard in the At-a-Glance REWRITE block.
- **`SITEMAP_*` placeholders unfilled because `discover-urls.js` not called in collect phase** — caught by `gate-chain-check` step 5a verification.
- **LLM judgment only checking top 2–3 priorities** — caught by `prompt-quality-review` checking the RUBRIC CHECK 1 wording.
