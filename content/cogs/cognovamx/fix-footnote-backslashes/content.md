---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "fix-footnote-backslashes"
version: 0.1.0
description: Validate and fix trailing backslashes in manuscript footnotes for PDF line breaks

created: 2026-03-17
modified: 2026-05-05

author: Tom Cranstoun

mx:
  contentType: action-doc
  actionType: scripted
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: active
  x-mx-riskLevel: high
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/fix-footnote-backslashes.cog.md

  x-mx-category: mx-tools
  partOf: mx-os
  refersTo: [generate-footnotes, pdf-generator]
  tags: [footnotes, formatting, pdf, manuscripts, validation]

  x-mx-execute:
    runtime: runbook
    command: mx exec fix-footnote-backslashes
    actions:
      - name: check
        description: Validate footnote formatting — exits with code 1 if fixes needed
        usage: node scripts/fix-footnote-backslashes.cjs --check

      - name: fix
        description: Apply trailing backslash fixes to all manuscript footnotes
        usage: node scripts/fix-footnote-backslashes.cjs --apply

      - name: dry-run
        description: Preview fixes without modifying files
        usage: node scripts/fix-footnote-backslashes.cjs
  runbook: "mx exec fix-footnote-backslashes"
---

```bash @embedded:fix-footnote-backslashes
#!/bin/bash
# Wrap scripts/fix-footnote-backslashes.cjs — adds trailing backslashes to multi-URL footnotes so pandoc renders each URL on its own line.
set -euo pipefail
if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  cat <<'HELP'
Usage: mx exec fix-footnote-backslashes <markdown-file> [...]
  Scans manuscript files for footnote definitions and adds trailing backslashes where missing.
HELP
  exit 0
fi
exec node scripts/fix-footnote-backslashes.cjs "$@"
```

# Fix Footnote Backslashes

Validates and fixes trailing backslash line breaks in manuscript footnotes. Pandoc collapses indented continuation lines into a single paragraph, so every line within a multi-URL footnote that should start on its own line in PDF output requires a trailing backslash (`\`).

## Convention

From `mx-canon/ssot/writing-guides/writing-style.md` Section 11:

```markdown
[^example]: Description of the source material.\
    <https://example.com/first-article>\
    <https://example.com/second-article>
```

The trailing `\` goes on:

- The description line (before the first URL)
- Every URL line except the last

## When to run

- Before PDF generation (`npm run pdf:protocols-generate`, etc.)
- After adding or editing footnotes in any manuscript chapter
- As a CI gate: `npm run footnotes:check` exits with code 1 if fixes are needed

## npm scripts

- `npm run footnotes:check` — validate only (CI gate)
- `npm run footnotes:fix` — apply fixes
- `npm run footnotes:generate` — regenerate HTML footnote pages

## How it works

1. Scans all `.md` files in `datalake/manuscripts/mx-books/`
2. Identifies footnote definitions (`[^name]: ...`) and their continuation lines
3. Detects which lines have URLs and which need trailing backslashes
4. In `--apply` mode, writes corrected files in-place
5. In `--check` mode, reports issues and exits non-zero if any found

The script is idempotent — safe to re-run whenever footnotes change. Already-correct backslashes are not duplicated.
