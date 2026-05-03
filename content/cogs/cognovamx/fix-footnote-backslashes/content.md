---
title: "fix-footnote-backslashes"
version: 0.1.0
description: Validate and fix trailing backslashes in manuscript footnotes for PDF line breaks

created: 2026-03-17
modified: 2026-03-17

author: Tom Cranstoun

mx:
  contentType: action-doc
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: active
  x-mx-riskLevel: high
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/content/cogs/cognovamx/fix-footnote-backslashes/content.md

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
