---
title: "Co-Directors Report — Stale-code cleanup, manuscript sync, retired web/ staging"
description: "Stale-code sweep of mx-audit, manuscript prose reframed as service offering, in-tree book web/ staging trees retired in favour of direct mx-outputs rendering."
author: "Tom Cranstoun"
created: 2026-04-29
modified: 2026-04-29
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-29-evening-report.md
---

# Co-Directors Report — Stale-code cleanup, manuscript sync, retired web/ staging

**Date:** 29 April 2026 — Evening
**Segment:** evening (since the morning report)

---

## Summary

A hygiene-heavy session across mx-audit, the book manuscripts, and the appendix build pipeline. The mx-audit submodule shed roughly ten thousand lines of dead V2 reporter scaffolding, orphaned utilities, and finished sprint-planning paperwork; the book manuscripts dropped seventy-six thousand lines of in-tree rendered HTML that was duplicating the live mx.allabout.network site. Web Audit Suite prose in Appendix C and Chapter 12 of MX: The Protocols now reads as service-offering documentation rather than open-source instructions, removing accidental references to a public GitHub repository. Net effect: less surface area to maintain, less risk of leaking the proprietary suite as if it were free, and a faster appendix publish flow that no longer roundtrips through a staging directory.

---

## What Was Done

### 1. mx-audit stale-code sweep

A full audit of the mx-audit submodule against its skill entry points and import graph identified a dead V2 reporter pipeline (a sibling pair of files that referenced only each other), four utility modules with zero importers anywhere in the codebase, and a sprint's worth of planning documents (`RECONCILIATION-STATUS`, `TEST_IMPLEMENTATION_PLAN`, `INTEGRATION-CHECKLIST`, `audit-plan`) that survived past the work they tracked. A committed run-output directory (`results-blog/`) was masquerading as source. Three npm dependencies (`csv-stringify`, `priorityqueuejs`, `xmlbuilder2`) were declared but unused. All removed; `results-blog/` added to gitignore.

The Dockerfile and DOCKER.md were dropped — no skill or hub script invoked them, and the audit suite runs natively on the host. README, QUICKSTART, the user manual, the CONFIGURATION guide, and the FEATURES doc were stripped of every Docker reference, including the use-case bullet that had quietly survived elsewhere.

A pre-existing `infill-golden` test failure was traced to its root cause: the sitemap-summary handler's `sitemap_health_summary.json` fallback was retired on 2026-04-20 in favour of `discovery.json`, but the test fixture and golden master were never migrated. Adding a discovery fixture matching the golden's published expectations and regenerating the golden brought the suite back to 348 passing, 0 failing.

### 2. Manuscript prose: Web Audit Suite as a service, not a repo

In drafting the manuscript path corrections, the `mx-handbook/mx-audit` install path was first replaced with the public GitHub URL of the audit suite repository. That was a mistake — Web Audit Suite is a commercial offering from CogNovaMX, not an open-source release, and its source location is not for general circulation. Tom flagged it; the language was reworked.

Appendix C now opens with an explicit framing paragraph stating that the appendix documents the suite's capabilities for licensed users and prospective clients evaluating the service. The installation snippet describes "after receiving distribution access from CogNovaMX" rather than a clone command. The CI/CD example uses a generic `web-audit-suite` directory and notes that the access mechanism is provided per engagement (private registry, tarball, or vendored checkout). The Documentation and Issues links — previously empty placeholders, then briefly populated with a public GitHub URL — now point at `info@cognovamx.com` and the engagement support channel.

Chapter 12 of MX: The Protocols received the matching treatment in its "Measuring Your Progress" section: the suite is introduced as a commercial service, the Quick Start install block aligned with Appendix C's licensed-distribution framing.

Appendix M had a tangentially related stale link — the Writing Style Guide URL pointed at `MX-hub/blob/main/docs/for-ai/writing-style.md`, a path that no longer exists. Updated to the live SSOT location at `mx-canon/ssot/writing-guides/writing-style.md`.

### 3. Retired the manuscript `web/` staging trees

Three rendered-HTML staging directories — `datalake/manuscripts/mx-books/{mx-appendices,mx-protocols}/web/` and `mx-canon/mx-the-gathering/web/` — were committed to MX-hub as intermediate output that `publish-appendices.sh` then rsynced into `mx-outputs/mx-site/books/appendices/`. The staging copy added no value: it was always either identical to the live site or stale, and committing seventy-six thousand lines of generated HTML doubled the diff noise on every regen.

`scripts/generate-appendix-html.sh` now writes `OUTPUT_DIR` straight to `mx-outputs/mx-site/books/appendices/`. `publish-appendices.sh` collapsed from four steps to three (generate → commit+push mx-outputs → purge Cloudflare cache); the obsolete sync step is gone, and the script's Claude co-author trailer was removed in line with the no-AI-attribution policy. The matching `source=mx-appendices` + `state=published` branch in `scripts/generate-content-html.cjs` was rerouted to the same target directory; draft, in-review, and archived states still stage in the manuscript tree alongside the source markdown.

References across UBERCOG, the mx-appendices README, the protocols-plan document, the allabout-network hosting map, the SSOT doc-architecture diagram, the PDF-generator action cog, and `scripts/ORGANIZATION.md` were synced to the new output path.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| MX-hub commits | 4 |
| mx-audit commits | 3 |
| Files changed (MX-hub) | 102 |
| Files changed (mx-audit) | 56 |
| Lines added | +274 |
| Lines removed | −86,513 |
| Repositories | 2 (MX-hub, mx-audit) |
| Submodule pointer bumps | 1 (mx-audit) |
| Dead npm dependencies removed | 3 |
| Manuscript `web/` directories retired | 3 |
| `infill-golden` test result | 348 passing → 0 failing |

---

## Why It Matters

Two of the three threads in this session reduce attack surface for what we ship publicly. The Web Audit Suite is the proprietary tool that anchors the engagement model — accidentally documenting it as a public clone, even briefly, would have been a small but real leak of strategic asset framing. The manuscripts now read as a service prospect would expect: Appendix C and Chapter 12 describe what the suite measures and how a client interacts with it, not how to download it. Investor-facing material remains aligned with the Reginald-style "DDT's strategic asset" framing.

The `web/` retirement is hygiene with a measurable benefit: every appendix regen now produces a single mx-outputs commit instead of a duplicated MX-hub + mx-outputs pair, and the regen runs faster because there is no intermediate copy step. Eighty-six thousand lines of generated noise will not appear in any future diff.

---

## The Insight

Auditor agents over-call. The mx-audit stale-code review flagged `src/main.js` (the core audit engine, imported by `index.js`, every test, and every binary) as "suspicious — verify". It also flagged `custom-thresholds.example.json` as redundant when in fact the README, QUICKSTART, ONBOARDING, and `examples/README.md` all reference it as the canonical documented template — the only example that carries the inline `$comment` annotations the others lack. Both would have been deleted if the agent's report had been treated as authoritative rather than as a starting hypothesis. The lesson: when delegating discovery work, the agent's confidence labels are advisory, not load-bearing; verification is still mine before any rm lands.

The same pattern recurred when I first interpreted "remove the scripts that generate them" too aggressively. Tom's correction — appendices are still generated, just not stored in `web/` — was the right read; my first pass deleted scripts that needed to be kept and rewired.

---

## Decisions Made

- Web Audit Suite is documented as a CogNovaMX service offering, not a public repository — Appendix C and Chapter 12 carry licensing-contact framing rather than install URLs.
- Appendix HTML lands directly in `mx-outputs/mx-site/books/appendices/` with no in-tree staging copy; `publish-appendices.sh` is the canonical publish flow.
- `src/main.js` and `custom-thresholds.example.json` in mx-audit are kept; the agent's flagging of both was wrong.

---

## Next Steps

- Mention the new appendix publish flow in the next /step-commit run if any appendix markdown lands.
- Watch the next `pdf:protocols-all` run to confirm `pdf:appendix` writes cleanly into mx-outputs without leaving residue.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `203e099` (mx-audit) | Remove stale code: dead V2 reporter pipeline, orphan utils, sprint planning docs, Docker scaffolding |
| `3f1b8b5` (mx-audit) | Fix infill-golden test: add discovery.json fixture, regenerate golden |
| `aa6eca7` (mx-audit) | Docs: drop Docker references from README/manual/QUICKSTART/CONFIGURATION/FEATURES |
| `e72329f7` | Bump mx-audit: stale-code cleanup, infill-golden test fix, docs sync |
| `c294edcf` | Manuscripts: reframe Web Audit Suite as proprietary service, drop public repo URLs |
| `d3e98e3c` | Retire in-tree manuscript web/ staging; appendix HTML now renders into mx-outputs |
| `_pending_` | Documentation hygiene: drop CLAUDE.md "last refactored" footer, bump README to v3.4 |
