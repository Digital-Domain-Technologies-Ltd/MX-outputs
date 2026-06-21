---
title: "About Maxine — Server-Client Architecture Deliverable"
created: "2026-02-13"

author: Tom Cranstoun
type: "documentation"
mx:
  sessionStart: "2026-02-13T12:15:00Z"
  sessionEnd: "2026-02-13T12:38:00Z"
  duration: "~25 minutes"
  status: "completed"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/completions/2026-02-13/session-summary-2026-02-13T12-38.md
  purpose: "About Maxine - Server-Client Architecture Deliverable"
  audience: [humans, machines]
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["About Maxine - Server-Client Architecture Deliverable"]

---

# Session Summary: About Maxine Architecture Deliverable

## Overview

Tom requested a detailed architectural overview of Maxine's server-client system as a cog in the brain. The result is `about-maxine.cog.md` — a published deliverable explaining how the embedded server, three client surfaces (Electron desktop, phone PWA, dashboard), and three communication protocols (REST, WebSocket, IPC) work together.

The document was written in blog-style dual-audience prose (tech + business) per MX principles, with worked data flow examples, an architecture diagram, and a key decisions table. It closes with the Pohl parallel.

## What Was Accomplished

### 1. Created about-maxine.cog.md

**File:** [MX-Canon/MX-Maxine-Lives/deliverables/about-maxine.cog.md](../../MX-Canon/MX-Maxine-Lives/deliverables/about-maxine.cog.md)

Comprehensive architectural overview covering:

- Six server modules (server.js, api.js, websocket.js, index.js, ai-router.js, qr-encode.js)
- Three client surfaces (Electron two-view architecture, Phone PWA PADD mode, Dashboard control centre)
- Three communication protocols (REST API, WebSocket real-time + remote commands, IPC desktop-only)
- Three worked data flow examples (Your Page, QR scan, remote commands)
- Data storage layout (~/.mx-app/ structure)
- Architecture diagram (ASCII art)
- Key decisions table with rationale
- Pohl realisation closing

### 2. Step-Commit Workflow

- Committed 7 files (+1,098 lines) including about-maxine.cog.md, ADR #3, NDR #1, morning report update, registry sync
- Changelog updated with 3 new Added entries
- Pre-commit and pre-push hooks passed (cog validation + markdown lint)
- Pushed 2 commits to remote

## Files Modified

1. **MX-Canon/MX-Maxine-Lives/deliverables/about-maxine.cog.md** — New. Server-client architecture overview.
2. **CHANGELOG.md** — Added entries for about-maxine, ADR #3, NDR #1.
3. **MX-Reginald/index.json** — Registry synced with new cog.
4. **MX-Reginald/cog-snapshot.cog.md** — Registry snapshot updated.

Files from earlier morning session (committed together):
5. **MX-Canon/MX-Maxine-Lives/registers/ADR/2026-02-13-mx-web-architecture.cog.md** — ADR #3.
6. **MX-Canon/MX-Maxine-Lives/registers/NDR/2026-02-13-block-naming.cog.md** — NDR #1.
7. **MX-Canon/MX-Maxine-Lives/management/reports/2026-02-13-morning-report.md** — Updated.
8. **REMINDERS.md** — Updated with morning session reminders.

## Testing and Verification

**Cog registry check:**

```bash
npm run cog:find -- about-maxine
```

**Result:** Found 1 cog — `about-maxine`, type info-doc, status published, builds-on maxine-vision + uber-maxine-plan.

**Registry sync:**

```bash
npm run cog:sync
```

**Result:** 82 cogs indexed (60 Canon, 16 Reginald, 6 Other).

**Pre-commit hooks:** Cog YAML validation passed, markdown lint passed.
**Pre-push hooks:** Changed cog validation passed (4 files checked).

## Technical Details

The document was written after thorough exploration of the actual Maxine codebase (mx-app/ backend, clients, and configuration). Two Explore agents ran in parallel to map the server-client architecture and the brain folder structure. A Plan agent then designed the document structure before writing.

Key architectural insights captured:

- The desktop IS the server (Electron main process starts the embedded HTTP server)
- Two WebContentsView architecture provides security isolation between shell and content
- WebSocket serves dual purpose: real-time push events AND remote command bridge
- Privacy by architecture: personal cogs never leave the machine unless explicitly shared

## MX Principles Applied

1. **Write like a blog** — Prose throughout, not a spec. Editorial and authoritative.
2. **Dual-audience writing** — Business claims first, technical detail underneath.
3. **Design for both** — YAML frontmatter for machines, markdown for humans.
4. **Canon wins** — Filed in MX-Canon/MX-Maxine-Lives/deliverables/ as the authoritative source.
5. **No hardcoded counts** — References "endpoints" and "modules" without fragile numbers in prose.

## Commits

| Hash | Message |
|------|---------|
| `7f372b7` | docs: about-maxine architecture overview, ADR #3, NDR #1, morning report update |
| `b87e57e` | docs: changelog for about-maxine, ADR #3, NDR #1 |

## Next Steps

- The document captures Phase 9 (current state). Update it as Maxine evolves through Frankfurt demo prep.
- Consider linking from the uber-maxine-plan's Key References table.
- The morning report for 13 Feb should be finalised if more work happens in the afternoon segment.

## Success Metrics

- ✓ about-maxine.cog.md created in brain deliverables
- ✓ Registered in cog index (npm run cog:find confirms)
- ✓ Dual-audience writing style
- ✓ All six server modules documented
- ✓ All three client surfaces documented
- ✓ All three communication protocols documented
- ✓ Worked data flow examples included
- ✓ Committed and pushed to remote
- ✓ Pre-commit and pre-push hooks passed

---

**Session completed successfully.**
