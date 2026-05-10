---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "mx-init"
version: "1.0.0"
description: "The action action-doc that initializes any repository with MX OS conventions — SOUL.md, CLAUDE.md, INSTALLME.md, frontmatter, directory structure."

created: 2026-02-10
modified: 2026-05-05

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: published
  x-mx-riskLevel: high
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/mx-init.cog.md

  x-mx-category: mx-core
  partOf: mx-os
  refersTo: [cog-unified-spec, mx-principles]
  buildsOn: [what-is-a-cog, what-is-mx-os, what-is-mx-environment, what-is-installme]
  tags: [init, onboarding, setup, mx-os, soul, claude, installme, frontmatter, conventions, action]

  audience: agents
  readingLevel: advanced

  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
---

# MX Init

This is the tool that turns any repository into an MX-aware workspace. It captures the pattern we use every time a new repo joins the MX ecosystem.

---

## What This Does

When you have a bare repository — or an existing repo that predates MX conventions — this action-doc gives an AI agent the procedure to bring it up to standard. Four actions, one workflow:

1. **Audit** — Assess what exists. What MX files are present? What is missing? What files need frontmatter? What names need fixing? The audit tells you the gap between where the repo is and where it needs to be.

2. **Init** — Close the gap. Create SOUL.md, CLAUDE.md, INSTALLME.md, CHANGELOG.md. Set up the directory structure. Rename files to kebab-case. Add frontmatter to every markdown file. This is the full MX setup.

3. **Migrate** — Move content from another source into the initialized repo. Triage files into the right pipeline stage (incoming vs proposals). Rename to kebab-case. Add provenance tracking with `source:` fields.

4. **Verify** — Confirm the initialization meets all MX conventions. Check files, frontmatter, naming, SOUL.md quality, CLAUDE.md quality. Report pass or fail.

---

## The Pattern

This action-doc was built by doing. We onboarded `mx-collaboration` by hand — copying notes from another repo, triaging content, creating MX files, auditing structure. Then we captured what we did as a repeatable procedure.

That is how MX OS works. Build it. Then describe it. The description becomes the program.

---

## Standards Checklist

Every MX-initialized repo should have:

| File | Purpose | Required |
|------|---------|----------|
| SOUL.md | Identity, voice, scope, constraints | Yes |
| CLAUDE.md | AI agent guidance, conventions, structure | Yes |
| INSTALLME.md | Machine-readable prerequisites and setup | Recommended |
| CHANGELOG.md | Change history | Recommended |
| CONTRIBUTING.md | Contribution workflow | Recommended |
| .gitignore | Standard exclusions | Yes |

Every markdown file should have:

| Field | Example | Required |
|-------|---------|----------|
| title | "Backend Architecture" | Yes |
| description | "Core principles for..." | Yes |
| author | Tom Cranstoun | Yes |
| created | 2026-02-10 | Yes |
| modified | 2026-02-10 | Yes |
| version | "1.0" | Yes |
| status | draft / published / active | Yes |
| source | datalake/knowledge/reference/Starter.md | When migrated |

---

## File Naming Convention

MX repos use kebab-case for all filenames:

- `backend-architecture-guidelines.md` (correct)
- `Backend Architecture Guidelines.md` (incorrect)
- `! Urgent.md` (incorrect)
- `urgent-action-items.md` (correct)

Convention files that live at repo root use UPPERCASE: SOUL.md, CLAUDE.md, README.md, CHANGELOG.md, CONTRIBUTING.md, INSTALLME.md, principles.cog.md, LEARNINGS.md.

---

## For AI Agents

When asked to "initialize this repo with MX" or "onboard this repo":

1. Run **audit** to understand the current state
2. Run **init** to create the MX structure
3. If there is content to move, run **migrate**
4. Run **verify** to confirm everything is correct
5. Commit with a clear message describing what was done
6. **Report all created files** with full absolute paths

The actions section above contains complete instructions for each step. Follow them exactly.

**Output Reporting Principle:** When the init or migrate actions create files, always report the full absolute paths of all created or modified files. This enables traceability and makes it easy to review what was changed.

Example:

```
✓ Repository initialized with MX OS conventions

Files created:
  /Users/tom/Documents/MX/mx-collaboration/SOUL.md
  /Users/tom/Documents/MX/mx-collaboration/CLAUDE.md
  /Users/tom/Documents/MX/mx-collaboration/INSTALLME.md
  /Users/tom/Documents/MX/mx-collaboration/CHANGELOG.md
  /Users/tom/Documents/MX/mx-collaboration/.gitignore

Directories created:
  /Users/tom/Documents/MX/mx-collaboration/incoming/
  /Users/tom/Documents/MX/mx-collaboration/proposals/

Frontmatter added: 12 files
Ready for commit: yes
```

Not just "created SOUL.md" or "files created" — the full absolute paths from root.

---

## Bash Scripts

The following shell commands implement the key checks. These are the building blocks for automation.

### Check for required MX files

```bash
#!/bin/bash
# mx-init-check.sh — Check required MX files exist
REPO_PATH="${1:-.}"
REQUIRED=("SOUL.md" "CLAUDE.md" ".gitignore")
RECOMMENDED=("INSTALLME.md" "CHANGELOG.md" "CONTRIBUTING.md")

echo "=== MX Init Check: $REPO_PATH ==="
for f in "${REQUIRED[@]}"; do
  if [ -f "$REPO_PATH/$f" ]; then
    echo "  [PASS] $f"
  else
    echo "  [FAIL] $f — REQUIRED, missing"
  fi
done
for f in "${RECOMMENDED[@]}"; do
  if [ -f "$REPO_PATH/$f" ]; then
    echo "  [PASS] $f"
  else
    echo "  [WARN] $f — recommended, missing"
  fi
done
```

### Check frontmatter on all markdown files

```bash
#!/bin/bash
# mx-frontmatter-check.sh — Check YAML frontmatter on all .md files
REPO_PATH="${1:-.}"
PASS=0
FAIL=0

for f in $(find "$REPO_PATH" -name "*.md" -not -path "*/node_modules/*" -not -path "*/.git/*"); do
  if head -1 "$f" | grep -q "^---$"; then
    PASS=$((PASS + 1))
  else
    echo "  [MISSING] $f"
    FAIL=$((FAIL + 1))
  fi
done
echo "=== Frontmatter: $PASS pass, $FAIL missing ==="
```

### Check kebab-case naming

```bash
#!/bin/bash
# mx-naming-check.sh — Check filenames are kebab-case or UPPERCASE convention
REPO_PATH="${1:-.}"
UPPERCASE_OK="SOUL|CLAUDE|README|CHANGELOG|CONTRIBUTING|INSTALLME|PRINCIPLES|LEARNINGS|TEMPLATE|BRAINSTORM|LICENSE"
VIOLATIONS=0

for f in $(find "$REPO_PATH" -name "*.md" -not -path "*/node_modules/*" -not -path "*/.git/*"); do
  basename=$(basename "$f")
  # Skip uppercase convention files
  if echo "$basename" | grep -qE "^($UPPERCASE_OK)\.md$"; then
    continue
  fi
  # Check for spaces or uppercase
  if echo "$basename" | grep -qE '[ A-Z!@#]'; then
    echo "  [RENAME] $f"
    VIOLATIONS=$((VIOLATIONS + 1))
  fi
done
echo "=== Naming: $VIOLATIONS files need renaming ==="
```

### Rename files to kebab-case

```bash
#!/bin/bash
# mx-rename-kebab.sh — Rename files to kebab-case (preview mode by default)
REPO_PATH="${1:-.}"
DRY_RUN="${2:-true}"
UPPERCASE_OK="SOUL|CLAUDE|README|CHANGELOG|CONTRIBUTING|INSTALLME|PRINCIPLES|LEARNINGS|TEMPLATE|BRAINSTORM|LICENSE"

for f in $(find "$REPO_PATH" -name "*.md" -not -path "*/node_modules/*" -not -path "*/.git/*"); do
  basename=$(basename "$f")
  dirpath=$(dirname "$f")

  # Skip uppercase convention files
  if echo "$basename" | grep -qE "^($UPPERCASE_OK)\.md$"; then
    continue
  fi

  # Generate kebab-case name
  newname=$(echo "$basename" | sed 's/^[!@# ]*//; s/ /-/g; s/[^a-zA-Z0-9._-]//g' | tr '[:upper:]' '[:lower:]')

  if [ "$basename" != "$newname" ]; then
    if [ "$DRY_RUN" = "true" ]; then
      echo "  [PREVIEW] $basename → $newname"
    else
      git mv "$f" "$dirpath/$newname" 2>/dev/null || mv "$f" "$dirpath/$newname"
      echo "  [RENAMED] $basename → $newname"
    fi
  fi
done
```

---

*The instructions are the program. You are the runtime.*
