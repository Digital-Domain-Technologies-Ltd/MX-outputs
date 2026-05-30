---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "package-audit"
version: "1.0.0"
description: "Bundle one audit delivery (or delivery + raw measurements) into a single zip ready to forward to a customer."

created: 2026-05-15
modified: 2026-05-15

author: Tom Cranstoun

mx:
  contentType: action-doc
  actionType: scripted
  maintainer: info@cognovamx.com
  license: proprietary
  status: published
  x-mx-riskLevel: low
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/package-audit.cog.md

  x-mx-category: mx-sales
  partOf: mx-os
  refersTo: [mx-audit]
  buildsOn: [building-action-docs]
  tags: [audit, package, zip, delivery, customer, bundle, sales-enablement]

  audience: [humans, agents]
  readingLevel: intermediate

  x-mx-blocks: [prose, code]

  runbook: "Invoke `mx exec package-audit <host-or-slug>` (or `npm run audit:package -- <host-or-slug>`) to bundle that audit's deliverables into a zip under `audit-data/_packages/`."

  x-mx-execute:
    runtime: runbook
    command: mx exec package-audit
    policy: |
      One delivery per invocation. The script reads from mx-outputs/audit/ and
      audit-data/domains/ only — it never re-runs the audit or modifies source
      data. Output zip lands under audit-data/_packages/ (gitignored).
    actions:
      - name: package
        description: Bundle a single audit delivery into a customer-ready zip.
        usage: |
          Run `npm run audit:package -- <host-or-slug>` and inspect the zip
          path the script prints. The default scope ("deliverables") includes
          only the client-facing folder; pass `--scope full` to add the raw
          audit-data/domains/<hostSlug>/ tree (cache + per-page results) and a
          generated README mapping cache hashes to URLs.
        inputs:
          - name: host
            type: string
            required: true
            description: "Audit folder key under mx-outputs/audit/<date>/. Live audits use the path-aware hostSlug (`neomwellbeing.com`, `www.dkd.de-de`, `www.dkd.de-en`); historical pre-2026-05-15 audits use the human-named slug (axiom-partners)."
          - name: date
            type: string
            required: false
            description: "Audit date in YYYY-MM-DD. Defaults to the most recent date that contains a folder for this host-or-slug."
          - name: scope
            type: string
            required: false
            description: "\"deliverables\" (default) or \"full\". Full adds the raw measurements tree and the cache-hash index README."
          - name: out
            type: string
            required: false
            description: "Override the zip path. Default: audit-data/_packages/<host>-<date>-<scope>.zip."
        outputs:
          - name: zipPath
            type: string
            description: "Absolute path to the produced zip."
          - name: summary
            type: object
            description: "Host, date, scope, included data flag, file size."
---

```bash @embedded:package-audit
#!/bin/bash
# Thin wrapper — defers all argument parsing and logic to scripts/package-audit.js
# via the audit:package npm script. The cog is the contract; the Node script is
# the implementation.
#
# mx-exec extracts this block and pipes it through `bash`; ${BASH_SOURCE} is
# therefore not available. The repo root is resolved via `git rev-parse`,
# falling back to the current directory if the script is run outside a git
# checkout (in which case `npm` will still resolve the script via its own
# package.json lookup walk).
set -eo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

exec npm run --prefix "$REPO_ROOT" --silent audit:package -- "$@"
```

# package-audit

Bundle one audit delivery (or delivery + raw measurements) into a single zip ready to forward to a customer.

## When to use

A customer asks for "all the files from our audit" and you want one self-contained archive to hand over. Run this cog with the host-or-slug; the zip lands under `audit-data/_packages/` and is ready to forward as-is.

## What gets packaged

**Default (`--scope deliverables`):** the client-facing folder under `mx-outputs/audit/<date>/<hostSlug>/`.

- The report markdown and PDF (when Phase 2 has produced them).
- The per-section CSVs (`pages-audited`, `structured-data-findings`, pipeline-*, etc.).
- The audit log, manifest, verification, fierce-critic, and llm-judgment sidecars.
- A generated `README.md` that names what the bundle is.

Excludes the `.infilled/` intermediate folder — that's a Pass-1 scratch artefact the customer doesn't need.

**Full (`--scope full`):** above plus `audit-data/domains/<hostSlug>/`.

- `cache/` — served, decoded, rendered HTML and screenshots for every audited URL. File names are content hashes.
- `results/` — `audit_averages.json`, the per-page CSVs the report aggregates, the discovery probe outputs.
- `README.md` includes a URL ↔ cache-hash index so the recipient can find a given page's HTML without the audit toolchain.

## How it picks the source folder

Live audits land under `mx-outputs/audit/<date>/<hostSlug>/`. The `hostSlug` is the path-aware host key — `neomwellbeing.com` when auditing the root, `www.dkd.de-de` for an audit of `/de/`, `www.dkd.de-en` for `/en/`. Multilingual audits get sibling folders instead of collisions. Historical pre-2026-05-15 audits land under `mx-outputs/audit/<date>/<slug>/` (human-named slug like `axiom-partners`). The script accepts either form as the first positional argument and looks for an exact match. When `--date` is omitted it picks the most recent date that contains a folder for that key.

## Invocation

```bash
# Most-recent audit, deliverables only:
mx exec package-audit neomwellbeing.com

# Specific date:
mx exec package-audit neomwellbeing.com --date 2026-05-15

# Full bundle including cache + raw results:
mx exec package-audit neomwellbeing.com --scope full

# Or via npm directly:
npm run audit:package -- neomwellbeing.com --scope full
```

The cog wrapper forwards every argument straight to `npm run audit:package` — the npm script is the single point of truth for behaviour and flags.

## Output

`audit-data/_packages/<host-or-slug>-<date>-<scope>.zip`. The `audit-data/` tree is gitignored; produced packages live there so they never enter git. Forward the zip via your channel of choice and delete it locally once delivered.

## Before sending — quick sanity checks

- `unzip -l <package>.zip` — confirm the file list looks right; no surprise paths.
- Open the README and check the URL list matches what the audit covered.
- For `--scope full` packages: verify no credentials, auth tokens, or internal hostnames leak through the cached HTML. The cache stores what the public web served; if the audit was logged-in for any reason, scrub that page before sending.

## Related

- [`mx-audit`](mx-audit.cog.md) — produces the data this cog packages.
- [`how-to-write-a-cog`](how-to-write-a-cog.cog.md) — the cog authoring guide this cog was built from.
