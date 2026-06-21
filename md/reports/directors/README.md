---
title: "Co-Directors Reports — Deliverables"
version: "1.0"
created: 2026-02-10
modified: 2026-02-10
author: Tom Cranstoun

type: info-doc
mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/README.md

---

# Co-Directors Reports

Session reports accumulate here. Each report is a dated snapshot of what was built, changed, and decided during a working session.

## Naming Convention

`YYYY-MM-DD-description.md`

Examples:

- `2026-02-10-session-report.md`
- `2026-02-12-frankfurt-planning.md`
- `2026-02-15-book-production-update.md`

## Report Format

Every report follows the same structure:

1. **Summary** — one paragraph, what happened
2. **By the numbers** — commits, files, lines changed
3. **What was built** — new files, features, documents
4. **What changed** — modifications to existing work
5. **Decisions made** — choices that affect direction
6. **Open questions** — things that need attention
7. **Next steps** — what comes next

## How Reports Are Generated

Run the co-directors-report action-cog:

- **Quick mode**: `mx co-directors report` — auto-generates from git and changelog
- **Full mode**: `mx co-directors report --full` — interviews Tom first, then generates

Both modes produce the same format. Full mode adds Tom's reflections and context that git cannot capture.
