#!/bin/bash
# generate-index.sh — Auto-generate README.md index for mx-outputs
# Run from the mx-outputs root directory
# Usage: ./scripts/generate-index.sh

set -euo pipefail

cd "$(dirname "$0")/.."
ROOT=$(pwd)

# Concurrency guard. Two instances racing on the same README.md produce a
# corrupted file with duplicated top-level sections — one instance's `cat >`
# truncate interleaves with another's `cat >>` appends. Symptom seen
# 2026-04-17 when a backgrounded invocation lingered across a foreground
# re-run, eventually growing README.md past 333,000 lines.
#
# mkdir is atomic on POSIX: the second caller's mkdir fails when the lock
# dir already exists. flock is unavailable on macOS base install, so we
# use mkdir here.
LOCKDIR="$ROOT/.generate-index.lock"
if ! mkdir "$LOCKDIR" 2>/dev/null; then
  echo "generate-index.sh: another instance is running (lock held at $LOCKDIR)." >&2
  echo "If you are sure no other instance is running, remove the lock dir and retry." >&2
  exit 1
fi

# ---------------------------------------------------------------------------
# Cache layer 1: early-exit mtime check.
# If README.md exists and no indexed file is newer than it, the index is
# already up to date. Skip the whole regen. This check is a single find
# invocation with -newer — sub-10ms even on a large tree.
# ---------------------------------------------------------------------------
EXISTING="$ROOT/README.md"
if [ -f "$EXISTING" ] && [ -z "${FORCE:-}" ]; then
  # Look for any indexed file newer than the existing README. -quit on the
  # first hit so we stop as soon as we know the answer.
  NEWER=$(find pdf md html json pptx content reginald mx-site 2>/dev/null \
    -type f \
    -not -name '.DS_Store' -not -name '.git*' -not -name '.mx*' -not -name '.markdownlint*' \
    -newer "$EXISTING" \
    -print -quit 2>/dev/null || true)
  if [ -z "$NEWER" ]; then
    echo "README.md is up to date (nothing newer than it in the indexed tree). Use FORCE=1 to regenerate." >&2
    rmdir "$LOCKDIR" 2>/dev/null || true
    exit 0
  fi
fi

# Atomic publish: write to a temp file, rename to README.md at the very
# end. Ensures readers never see a partial or duplicated file, even if
# the lock above is somehow bypassed (e.g. manual lock-dir deletion).
OUTPUT="$ROOT/README.md.tmp"

# Cleanup on any exit (success, failure, signal): remove the temp file
# and release the lock. The trap guarantees the lock is released even if
# the script exits abnormally.
trap 'rm -f "$OUTPUT" "$ROOT/.generate-index-cache.tsv"; rmdir "$LOCKDIR" 2>/dev/null || true' EXIT

# ---------------------------------------------------------------------------
# Cache layer 2: single-pass directory walk.
# Current state (pre-cache) called `find | wc | tr` in a subshell for every
# directory we needed a count of — ~30 subprocess chains per run. Replaced
# by one find that produces the full file list once, cached in memory via
# a temp file that subsequent grep/wc calls scan.
# ---------------------------------------------------------------------------
CACHE="$ROOT/.generate-index-cache.tsv"
find pdf md html json pptx content reginald mx-site 2>/dev/null \
  -type f \
  -not -name '.DS_Store' -not -name '.git*' -not -name '.mx*' -not -name '.markdownlint*' \
  | sort > "$CACHE"

# count_files — grep the cache rather than re-invoking find. Trailing-slash
# convention prevents prefix collisions ("md/" would otherwise match
# "mx-site/md..."). grep -c prints "0" on no match AND returns exit 1;
# swallow that with `|| true` (do NOT add `|| echo 0` — that double-prints).
count_files() {
  local dir="${1%/}"
  if [ -z "$dir" ] || [ "$dir" = "." ]; then
    wc -l < "$CACHE" | tr -d ' '
  else
    grep -c "^${dir}/" "$CACHE" 2>/dev/null || true
  fi
}

# list_files — same cache lookup; emit markdown bullets. grep returns 1
# on no match; the while loop handles empty input fine, but `set -e`
# would kill us on the bare grep. `|| true` on the whole pipeline.
list_files() {
  local dir="${1%/}"
  local indent="${2:-}"
  { grep "^${dir}/" "$CACHE" 2>/dev/null || true; } | while read -r f; do
    local name
    name=$(basename "$f")
    echo "${indent}- [\`${name}\`](${f})"
  done
}

# list_subdirs — find is unavoidable here (it's asking about the dir tree
# itself, not files), but the dir count is small and bounded.
list_subdirs() {
  local dir="$1"
  if [ -d "$dir" ]; then
    find "$dir" -mindepth 1 -maxdepth 1 -type d | sort | while read -r d; do
      local name
      name=$(basename "$d")
      local count
      count=$(count_files "$d")
      echo "  - **${name}/** (${count} files)"
    done
  fi
}

# Generate the README. Write the YAML frontmatter with variable
# interpolation (unquoted heredoc), then switch to a QUOTED heredoc for
# the body so literal backticks and dollars do not trigger command
# substitution. Previous version had an unescaped backticked path in the
# body of an unquoted heredoc, which caused bash to recursively execute
# generate-index.sh as a command-substitution inside its own heredoc —
# producing thousands of stale processes (observed 2026-04-17).
TODAY=$(date +%Y-%m-%d)
cat > "$OUTPUT" << HEADER
---
title: "MX Outputs — Build Artefacts Index"
author: "Auto-generated"
created: "${TODAY}"
modified: "${TODAY}"
description: "Navigable index of all build artefacts, reports, and generated outputs"

mx:
  isGenerated: true
  generatedBy: "mx-outputs/scripts/generate-index.sh"
---
HEADER

cat >> "$OUTPUT" << 'HEADER'

# MX Outputs

> Auto-generated index. Run `./scripts/generate-index.sh` to regenerate.

Build artefacts, reports, and generated outputs organised by media type.

HEADER

# Summary table
TOTAL=$(count_files .)
PDF_COUNT=$(count_files pdf)
MD_COUNT=$(count_files md)
HTML_COUNT=$(count_files html)
JSON_COUNT=$(count_files json)
PPTX_COUNT=$(count_files pptx)

cat >> "$OUTPUT" << EOF
## Summary

| Type | Files | Description |
|------|-------|-------------|
| [pdf/](pdf/) | ${PDF_COUNT} | PDFs — books, reports, manuals, presentations |
| [md/](md/) | ${MD_COUNT} | Markdown — reports, audit results, presentations |
| [html/](html/) | ${HTML_COUNT} | HTML — blogs (with CSS/SVG), audit baselines |
| [json/](json/) | ${JSON_COUNT} | JSON — audit comparison data |
| [pptx/](pptx/) | ${PPTX_COUNT} | PowerPoint — presentation source files |
| **Total** | **${TOTAL}** | |

---

EOF

# PDF section
cat >> "$OUTPUT" << 'EOF'
## pdf/

PDF documents — books, manuals, presentations, blog exports.

EOF

for subdir in pdf/*/; do
  [ -d "$subdir" ] || continue
  dirname=$(basename "$subdir")
  count=$(count_files "$subdir")
  echo "### pdf/${dirname}/ (${count} files)" >> "$OUTPUT"
  echo "" >> "$OUTPUT"
  list_files "$subdir" >> "$OUTPUT"
  list_subdirs "$subdir" >> "$OUTPUT"
  echo "" >> "$OUTPUT"
done

# MD section
cat >> "$OUTPUT" << 'EOF'
---

## md/

Markdown documents — session reports, audit results, Reginald documentation.

EOF

for subdir in md/*/; do
  [ -d "$subdir" ] || continue
  dirname=$(basename "$subdir")
  count=$(count_files "$subdir")
  echo "### md/${dirname}/ (${count} files)" >> "$OUTPUT"
  echo "" >> "$OUTPUT"
  # For reports, show sub-structure
  if [ "$dirname" = "reports" ]; then
    for rsubdir in "$subdir"*/; do
      [ -d "$rsubdir" ] || continue
      rname=$(basename "$rsubdir")
      rcount=$(count_files "$rsubdir")
      echo "#### md/reports/${rname}/ (${rcount} files)" >> "$OUTPUT"
      echo "" >> "$OUTPUT"
      if [ "$rname" = "directors" ]; then
        for dsubdir in "$rsubdir"*/; do
          [ -d "$dsubdir" ] || continue
          dname=$(basename "$dsubdir")
          dcount=$(count_files "$dsubdir")
          echo "**${dname}/** (${dcount} files)" >> "$OUTPUT"
          echo "" >> "$OUTPUT"
          list_files "$dsubdir" >> "$OUTPUT"
          echo "" >> "$OUTPUT"
        done
      else
        list_files "$rsubdir" >> "$OUTPUT"
        list_subdirs "$rsubdir" >> "$OUTPUT"
        echo "" >> "$OUTPUT"
      fi
    done
  else
    list_files "$subdir" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
  fi
done

# HTML section
cat >> "$OUTPUT" << 'EOF'
---

## html/

HTML content with adjacent CSS, JS, and SVG assets.

EOF

for subdir in html/*/; do
  [ -d "$subdir" ] || continue
  dirname=$(basename "$subdir")
  count=$(count_files "$subdir")
  echo "### html/${dirname}/ (${count} files)" >> "$OUTPUT"
  echo "" >> "$OUTPUT"
  list_files "$subdir" >> "$OUTPUT"
  list_subdirs "$subdir" >> "$OUTPUT"
  echo "" >> "$OUTPUT"
done

# JSON section
cat >> "$OUTPUT" << 'EOF'
---

## json/

Structured data — audit comparisons, machine-readable reports.

EOF

list_files json >> "$OUTPUT"
echo "" >> "$OUTPUT"

# PPTX section
cat >> "$OUTPUT" << 'EOF'
---

## pptx/

PowerPoint presentation source files.

EOF

list_files pptx >> "$OUTPUT"
echo "" >> "$OUTPUT"

# Footer
cat >> "$OUTPUT" << EOF
---

*Generated on $(date '+%Y-%m-%d at %H:%M')*
EOF

# Atomic publish. The temp file is now complete; rename it over README.md
# in a single filesystem operation.
LINES=$(wc -l < "$OUTPUT")
mv -f "$OUTPUT" "$ROOT/README.md"
# Prevent the EXIT trap from deleting the file we just published.
trap 'rmdir "$LOCKDIR" 2>/dev/null || true' EXIT

echo "README.md generated: ${LINES} lines, ${TOTAL} files indexed"
