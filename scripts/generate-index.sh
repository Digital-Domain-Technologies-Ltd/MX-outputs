#!/bin/bash
# generate-index.sh — Auto-generate README.md index for mx-outputs
# Run from the mx-outputs root directory
# Usage: ./scripts/generate-index.sh

set -euo pipefail

cd "$(dirname "$0")/.."
ROOT=$(pwd)

OUTPUT="$ROOT/README.md"

# Count files by type
count_files() {
  local dir="$1"
  if [ -d "$dir" ]; then
    find "$dir" -type f -not -name '.DS_Store' -not -name '.git*' -not -name '.mx*' -not -name '.markdownlint*' | wc -l | tr -d ' '
  else
    echo "0"
  fi
}

# List files in a directory with markdown links
list_files() {
  local dir="$1"
  local indent="${2:-}"
  if [ -d "$dir" ]; then
    find "$dir" -type f -not -name '.DS_Store' -not -name '.git*' -not -name '.mx*' -not -name '.markdownlint*' | sort | while read -r f; do
      local name
      name=$(basename "$f")
      echo "${indent}- [\`${name}\`](${f})"
    done
  fi
}

# List subdirectories
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

# Generate the README
# Unquoted heredoc so $(date) interpolates. MXS-01 Level 1 requires
# title + author + created on every .md file; this index regenerates
# every session, so created tracks regeneration date.
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

echo "README.md generated: $(wc -l < "$OUTPUT") lines, ${TOTAL} files indexed"
