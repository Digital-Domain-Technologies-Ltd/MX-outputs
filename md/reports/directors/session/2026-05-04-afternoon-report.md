---
title: "Co-Directors Report — Bible to Protocols sweep, runbook integrity gate"
description: "Repo-wide rename of book references (Bible / MX-Bible to MX: The Protocols), removal of dead GitHub URLs the rename would have left behind, and a runbook integrity audit that fixed seven broken script claims."
author: "Tom Cranstoun"
created: 2026-05-04
modified: 2026-05-04
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-04-afternoon-report.md
---

# Co-Directors Report — Bible to Protocols sweep, runbook integrity gate

**Date:** 4 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

The book has been called MX: The Protocols since the April 2026 rename, but the repository still carried hundreds of references to its working title (Bible / MX-Bible) across canon, manuscripts, the published site, CRM outreach, and tooling. This segment swept 197 substitutions across 64 files, deleted the inbound URLs that pointed at GitHub repos which never existed, and replaced them with the canonical published surface. While inside the runbook fields, an integrity audit surfaced seven broken script claims (paths that named scripts that did not exist, name-reversed `mx exec` invocations, an executable runbook on an informational doc) — all fixed and verified.

---

## What Was Done

### 1. Cog enforcer hook recognises "use the cog"

The `run-cog-enforcer.sh` hook fires when the user asks the agent to run a cog and pre-loads the cog's full SOP into the prompt. It detected `run | execute | follow | invoke` near the word "cog" but not `use`, so a prompt like "use the audit-site cog" was being interpreted as an unguided request and the agent was free to skip the cog's procedure. The verb list now includes `use | uses | used | using | uset` (with the typo variant Tom hits often), guarded with whole-word boundaries so prose mentions of "useful" or "user" or plural "cogs" do not trigger false positives.

### 2. Bible to Protocols rename across the active surface

Repository inventory before the sweep showed 303 lines mentioning "bible" across roughly 70 files. After excluding `_archive/` directories, changelog archives, dated session reports, and the read-only `tg-community/` mount, 64 files remained in scope. A bounded regex sweep (script preserved at `/tmp/bible-sweep.py` for reproducibility) applied 197 substitutions in one pass. The rules covered article-absorbing forms ("The MX Bible" → "MX: The Protocols", not "The MX: The Protocols"), path and identifier tokens (`mx-the-bible` → `mx-protocols`, `book-mx-bible` → `book-mx-protocols`), and chapter references (`Bible Ch 04` → `Protocols Ch 04`). The legacy file `plan-1-extract-patterns-to-bible.md` was renamed via `git mv`; the four inbound links were rewritten by the sweep so nothing dangles.

The same rename touched three submodules: `allaboutv2/demo/cognovamx/about.html` (the public CogNovaMX about page), `mx-crm/` (five active outreach reports), and `mx-outputs/mx-site/` (twelve public blog posts and profile pages, the rendered appendix M and appendix P, and the `llms-full.txt` corpus that aggregates everything for AI agents). Each submodule got its own commit and push so the published site updates next time Cloudflare cache rolls over.

### 3. Dead GitHub URLs replaced with the canonical published surface

Some files contained URLs of the form `https://github.com/Digital-Domain-Technologies-Ltd/mx-handbook-bible`. The Bible-to-Protocols sweep mechanically rewrote these to `mx-protocols`, but verification via `gh repo list` confirmed neither name exists as a real repository. The book has always lived inside `MX-hub` as a regular subdirectory, not as a separate repo. All six dead-link instances were replaced: citations now point at `https://mx.allabout.network/books/protocols.html` (the canonical public URL, verified HTTP 200), and a YAML example previously using the dead URL as a placeholder now uses `https://github.com/example-org/your-manuscript-repo` so a copy-paste reader cannot accidentally try to clone it.

The `github-repositories.md` inventory file claimed in its runbook to have an embedded regeneration script ("see body of this doc"), but the body had no script. An embedded `@embedded:scan-orgs` bash script now lives in the file: it queries both `ddttom` and `Digital-Domain-Technologies-Ltd` orgs via `gh repo list`, sorts by last-pushed date, and replaces the table between `<!-- TABLE:START -->` / `<!-- TABLE:END -->` markers. Two non-trivial bugs were caught and hardened against during development: (a) the regex initially matched the literal marker string mentioned inside the runbook YAML field, blowing up the frontmatter on first run — fixed with `re.MULTILINE` line-start anchors and rewording the runbook to refer to the markers by name without quoting them; (b) the substitution accumulated a blank line on every re-run — fixed by removing a stray `+ "\n"`. Verified idempotent across two consecutive re-runs.

### 4. Runbook integrity audit — seven broken script claims fixed

While inside the runbook fields, a parallel question surfaced: how many other runbooks claim to invoke a script that does not actually exist? An audit (`/tmp/runbook-script-audit.py`) parsed YAML frontmatter for 2,172 markdown files, identified every runbook that named a concrete script path or `npm run X` or `mx exec X` invocation, and verified each target on disk. Seven were broken:

- `UBERCOG.cog.md` claimed `mx exec ubercog` — but UBERCOG is a briefing-doc, not an action-doc, and no executable cog of that name exists. Runbook now describes how to use the file (read top to bottom).
- `scripts/cogs/mx-reginald-manual.cog.md` and `scripts/cogs/mx-os-manual.cog.md` had reversed names: `mx exec manual-mx-reginald` should have been `mx exec mx-reginald-manual`. Same bug propagated to `mx-outputs/content/cogs/cognovamx/mx-reginald-manual/content.md`.
- `datalake/pipeline/drafts/agent-discoverability-checklist.md` and `agent-readiness-scores-compared.md` declared `script: generate-content-html.cjs` — bare filename, no path. The file lives at `scripts/generate-content-html.cjs`. Both fixed.
- `mx-canon/mx-the-gathering/deliverables/machine-experience-one-pager.md` claimed `./scripts/bin/mx.pdf-twocol.sh` as the regenerator — a script that does not exist. The actual two-column PDF generator is `scripts/bin/2pager.sh`. Verified by running it: 44KB PDF produced cleanly.

After the fixes, the audit reports zero broken runbooks: 16 with explicit on-disk script paths, 109 using `npm run` or `mx exec` against targets that all resolve, 236 informational runbooks with no script claim.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Submodule commits | 3 |
| Hub commits coming | 1 (Step 3 of /step-commit) |
| Files changed (afternoon segment) | ~80 in hub + 22 across submodules |
| Bible-token substitutions | 197 |
| Dead URLs removed | 6 |
| Broken runbooks fixed | 7 |
| Files swept across submodules | 22 (allaboutv2: 2, mx-crm: 5, mx-outputs: 15) |
| Repositories touched | 4 (hub + 3 submodules) |

---

## Why It Matters

Two of the three threads in this segment are governance hygiene: a brand rename that had not propagated, and runbook claims that did not match reality. Both are the kind of work that adds up over time — every stale "Bible" reference in a CRM outreach report contradicts what we tell prospects on a call, and every broken runbook costs the next agent (human or otherwise) a five-minute investigation that ends in "this script does not exist." Closing both leaves the repository's promises and its actual state in agreement, which is the contract MX itself depends on.

The third thread — the cog enforcer hook — is a small but recurring friction fix. Tom routinely says "use X cog" rather than "run X cog"; the hook now responds.

---

## The Insight

Mechanical sweeps create their own debris. The Bible-to-Protocols regex did exactly what it was told and rewrote `mx-handbook-bible` to `mx-protocols` everywhere — including inside URLs that pointed at GitHub. Neither URL is real, but the swept version is *more* convincingly real (the rest of the path looks plausible) and therefore *more* likely to fool a future reader. The lesson is that any automated rename across a corpus of links needs a follow-up pass that asks "do these targets still exist?" — not "did the regex run cleanly?". The runbook integrity audit was the post-sweep version of that question, generalised.

---

## Decisions Made

- Dead-URL replacement strategy: published canonical URL (`mx.allabout.network/books/protocols.html`) for citations, obvious placeholder (`example-org/your-manuscript-repo`) for YAML examples. Both are stable; neither pretends to be a real repo we own.
- Auto-generated inventory files (`github-repositories.md`, `mx-allmygithubs.cog.md`) regenerated from live `gh` data rather than hand-edited. The cost is that several historical rows for repos that no longer exist drop out; the benefit is that the file is now correct as of today and the embedded script keeps it that way.
- `pre-push.sh` legacy-path guard kept as-is — the hook deliberately detects the obsolete `packages/bible` path so it can flag stale workflow files. Renaming the guard would defeat its purpose.

---

## Next Steps

- Cloudflare cache purge after Step 9 push (mandatory per /step-commit gate b-ii) — `mx-outputs` push will be live but cached until purged.
- Consider promoting `/tmp/runbook-script-audit.py` into `scripts/` as a permanent gate — it took two minutes to run against the full corpus and would catch this class of drift before it ships.
- Two `mx-outputs` directories (`pdf/outreach/2026-05-04/`, `mx-crm/outreach/2026-05-04/`) carry untracked audit artefacts from a separate run earlier in the day — not from this session. Tom's call whether to commit, archive, or leave.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 67a9aed0 | (allaboutv2) Rename Bible/MX-Bible to MX: The Protocols across demo and skill template |
| f541827f | (mx-crm) Rename Bible/MX-Bible to MX: The Protocols across CRM outreach materials |
| 19f58870 | (mx-outputs) Bible to Protocols sweep across published site, plus runbook fixes |
| _pending_ | (hub) Bible to Protocols sweep, dead-URL cleanup, runbook integrity fixes — Step 3 commit |
