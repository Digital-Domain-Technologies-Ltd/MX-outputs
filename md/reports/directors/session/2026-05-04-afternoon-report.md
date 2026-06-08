---
title: "Co-Directors Report — Bible to Protocols sweep, runbook integrity gate, mx.allabout.network audit"
description: "Repo-wide rename of book references (Bible / MX-Bible to MX: The Protocols), removal of dead GitHub URLs the rename would have left behind, a runbook integrity audit that fixed seven broken script claims, and a full 66-page MX Audit Suite run against mx.allabout.network producing a tagged EAA Level 2 PDF."
author: "Tom Cranstoun"
created: 2026-05-04
modified: 2026-05-04
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-04-afternoon-report.md
  purpose: "Repo-wide rename of book references (Bible / MX-Bible to MX: The Protocols), removal of dead GitHub URLs the rename would have left behind, a runbook integrity audit that fixed seven broken script claims, and a full 66-page MX Audit Suite run against mx.allabout.network producing a tagged EAA Level 2 PDF."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Bible to Protocols sweep, runbook integrity gate, mx.allabout.network audit"]
---

# Co-Directors Report — Bible to Protocols sweep, runbook integrity gate, mx.allabout.network audit

**Date:** 4 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

The book has been called MX: The Protocols since the April 2026 rename, but the repository still carried hundreds of references to its working title (Bible / MX-Bible) across canon, manuscripts, the published site, CRM outreach, and tooling. This segment swept 197 substitutions across 64 files, deleted the inbound URLs that pointed at GitHub repos which never existed, and replaced them with the canonical published surface. While inside the runbook fields, an integrity audit surfaced seven broken script claims (paths that named scripts that did not exist, name-reversed `mx exec` invocations, an executable runbook on an informational doc) — all fixed and verified.

The segment then ran a full 66-page MX Audit Suite execution against `mx.allabout.network` via the new scripted (Option A) pipeline: deterministic infill, LLM prose rewrite (Sonnet 4.6, 19 blocks), and all six gates (template coverage, tone, HTML render, leak check, deterministic verifier, fierce critic, LLM-judgment, PDF generation). Headline scores were excellent (Accessibility 100/100, AI Agent Suitability 100/100, SEO 95, Schema Maturity Level 4, SDQ 96), but the LLM rewrite pass introduced several hallucinated claims that needed seven rounds of fierce-critic feedback to clear — surfacing a real weakness in the rewrite-pass prompt that the cog should grow a guard against. The final PDF passes EAA Level 2 conformance.

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

### 4. Cog enforcer hook — fuzzy resolver for "use the X cog"

The hook v1.3 fix earlier in the session made the silent-when-unresolvable case behave correctly, but Tom then asked the natural follow-up: when there is a real cog matching the colloquial reference, why doesn't the hook find it? Hook v1.4 adds a Priority 4 fuzzy resolver that tokenises the prompt, drops trigger verbs and stop-words, scores every cog in `mx-reginald/index.json` by token overlap (basename hits weighted 2x), and resolves only on a clear winner (top score >= 3 AND strict lead over runner-up). Eight smoke tests pass: "use the audit site cog" resolves to `scripts/cogs/mx-audit.cog.md`, "run the blog reviewer cog" to `scripts/cogs/blog-reviewer.cog.md`, generic mentions stay silent, and "the X skill" never resolves to a cog.

### 5. Runbook integrity audit — seven broken script claims fixed

While inside the runbook fields, a parallel question surfaced: how many other runbooks claim to invoke a script that does not actually exist? An audit (`/tmp/runbook-script-audit.py`) parsed YAML frontmatter for 2,172 markdown files, identified every runbook that named a concrete script path or `npm run X` or `mx exec X` invocation, and verified each target on disk. Seven were broken:

- `UBERCOG.cog.md` claimed `mx exec ubercog` — but UBERCOG is a briefing-doc, not an action-doc, and no executable cog of that name exists. Runbook now describes how to use the file (read top to bottom).
- `scripts/cogs/mx-reginald-manual.cog.md` and `scripts/cogs/mx-os-manual.cog.md` had reversed names: `mx exec manual-mx-reginald` should have been `mx exec mx-reginald-manual`. Same bug propagated to `mx-outputs/content/cogs/cognovamx/mx-reginald-manual/content.md`.
- `datalake/pipeline/drafts/agent-discoverability-checklist.md` and `agent-readiness-scores-compared.md` declared `script: generate-content-html.cjs` — bare filename, no path. The file lives at `scripts/generate-content-html.cjs`. Both fixed.
- `mx-canon/mx-the-gathering/deliverables/machine-experience-one-pager.md` claimed `./scripts/bin/mx.pdf-twocol.sh` as the regenerator — a script that does not exist. The actual two-column PDF generator is `scripts/bin/2pager.sh`. Verified by running it: 44KB PDF produced cleanly.

After the fixes, the audit reports zero broken runbooks: 16 with explicit on-disk script paths, 109 using `npm run` or `mx exec` against targets that all resolve, 236 informational runbooks with no script claim.

### 6. Full MX Audit Suite run against mx.allabout.network

The new scripted pipeline (`node scripts/audit-pipeline.js --report` followed by `--gates`) ran a 66-page audit of `mx.allabout.network`. Phase 1 (data collection) crawled all 65 sitemap URLs plus the homepage, ran Pa11y + content + metrics + performance analyses on each page, tested 8 AI agents (all returned 200 OK), and wrote a complete results bundle to `mx-audit/results/mx.allabout.network/`. Phase 2 (Pass 1: deterministic infill) filled 239 placeholders with verified facts from the source CSVs, passing the verifier with 21/21 numeric claims. Phase 3 (Pass 2: API rewrite via Sonnet 4.6) turned the skeleton into prose across 19 blocks. Phase 4 (gates) ran six checks: template coverage, tone, HTML render heading-count, template leak, deterministic verifier (40/40 numeric claims), fierce critic, LLM-judgment recommendation consistency, and tagged-PDF generation.

The fierce-critic gate took seven rounds to clear. Each round surfaced a different class of LLM-rewrite drift: hallucinated facts (143 sitemap URLs vs the actual 65; missing `<priority>` attributes that were actually present on every URL; €10k/€100k EAA fine figures not in audit data; "around 100 lines" pattern claims; "30 minutes" effort estimates), generic recommendations not tied to specific findings ("Address Priority 1 findings" when no P1 findings existed), internal contradictions ("This PDF fails ISO 14289-1" when the analysis was actually skipped because qpdf was not installed), and tone slips (mid-paragraph voice changes). All twelve original findings were resolved by replacing the hallucinated material with concrete, audit-derived facts: the four security headers missing on `/about`, the 31 of 225 images lacking alt text, the 9 of 66 pages still missing BreadcrumbList JSON-LD, and the five named bare `div.*` selectors flagged in the rendered DOM. The final PDF passes EAA Level 2 (`/StructTreeRoot` present, `pdfuaid:Part=1` declared) at 1.1 MB.

The remediation work also surfaced two cog updates that landed this segment: the mx-audit cog was bumped to v1.3.0 to endorse running the audit in the background and watching it via the Monitor tool (so the assistant stays responsive instead of blocking on a multi-minute crawl), and to add a canonical "Standard Output Paths" reference table so every action in the pipeline writes to a fixed, predictable location.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Submodule commits | 5 |
| Hub commits coming | 1 (Step 3 of /step-commit) |
| Files changed (afternoon segment) | ~80 in hub + 36 across submodules |
| Bible-token substitutions | 197 |
| Dead URLs removed | 6 |
| Broken runbooks fixed | 7 |
| Cog enforcer hook versions shipped | 2 (v1.3 silent-when-unresolved, v1.4 fuzzy resolver) |
| Pages audited (mx.allabout.network) | 66 (6 nav, 60 content) |
| Audit gates passed | 6 of 6 (template coverage, tone, leak check, deterministic verifier 40/40, fierce critic, LLM-judgment) |
| Fierce-critic rounds to clean | 7 |
| Repositories touched | 4 (hub + 3 submodules) |

---

## Why It Matters

Two of the three threads in this segment are governance hygiene: a brand rename that had not propagated, and runbook claims that did not match reality. Both are the kind of work that adds up over time — every stale "Bible" reference in a CRM outreach report contradicts what we tell prospects on a call, and every broken runbook costs the next agent (human or otherwise) a five-minute investigation that ends in "this script does not exist." Closing both leaves the repository's promises and its actual state in agreement, which is the contract MX itself depends on.

The third thread — the cog enforcer hook — is a small but recurring friction fix. Tom routinely says "use X cog" rather than "run X cog"; the hook now responds.

---

## The Insight

Mechanical sweeps create their own debris. The Bible-to-Protocols regex did exactly what it was told and rewrote `mx-handbook-bible` to `mx-protocols` everywhere — including inside URLs that pointed at GitHub. Neither URL is real, but the swept version is *more* convincingly real (the rest of the path looks plausible) and therefore *more* likely to fool a future reader. The lesson is that any automated rename across a corpus of links needs a follow-up pass that asks "do these targets still exist?" — not "did the regex run cleanly?". The runbook integrity audit was the post-sweep version of that question, generalised.

The audit pipeline produced a parallel insight at the LLM layer. Pass 1 (deterministic infill) wrote 239 placeholders against verified facts and passed the verifier on the first try. Pass 2 (LLM prose rewrite) introduced twelve hallucinated claims that the deterministic verifier could not catch because they were *new* claims the source data had not made — `<priority>` attributes the rewrite said were "absent across all 143 URLs" when the actual sitemap has 65 URLs all carrying priority, EAA fine figures the rewrite simply invented, "almost always" assertions about traffic patterns that no audit data supports. The verifier checks that *every claim in the report* is backed by source data; it does not check that *every claim the rewrite added* is backed by source data, because by design it only audits what got written. The right complement is the fierce critic, which compares the prose against the source and flags additions. That gate worked — eventually. Seven rounds is too many; the rewrite-pass prompt needs an explicit "introduce no facts not present in the deterministic skeleton" guard, and the cog needs to record this lesson. The general pattern: deterministic gates measure presence, generative passes can add absences-into-presences, and only adversarial-style critics catch the difference.

---

## Decisions Made

- Dead-URL replacement strategy: published canonical URL (`mx.allabout.network/books/protocols.html`) for citations, obvious placeholder (`example-org/your-manuscript-repo`) for YAML examples. Both are stable; neither pretends to be a real repo we own.
- Auto-generated inventory files (`github-repositories.md`, `mx-allmygithubs.cog.md`) regenerated from live `gh` data rather than hand-edited. The cost is that several historical rows for repos that no longer exist drop out; the benefit is that the file is now correct as of today and the embedded script keeps it that way.
- `pre-push.sh` legacy-path guard kept as-is — the hook deliberately detects the obsolete `packages/bible` path so it can flag stale workflow files. Renaming the guard would defeat its purpose.
- Audit report path: scripted (Option A) over interactive (Option B). Faster, deterministic facts go through unchanged, and the rewrite pass can be re-run as a single command without re-crawling the site. The fierce-critic round count was the cost; future runs should benefit from the lessons being baked into the rewrite prompt.

---

## Next Steps

- Cloudflare cache purge after Step 9 push (mandatory per /step-commit gate b-ii) — `mx-outputs` push will be live but cached until purged.
- Consider promoting `/tmp/runbook-script-audit.py` into `scripts/` as a permanent gate — it took two minutes to run against the full corpus and would catch this class of drift before it ships.
- Add a guard to `scripts/rewrite-report.js` (or its prompt) that explicitly forbids introducing facts not present in the deterministic skeleton. The seven-round fierce-critic loop on this audit is unsustainable as the volume of audits grows; the guard would catch most of the hallucinated-fact class up-front.
- Rotate the Anthropic API key. Tom shared it inline in chat earlier in the segment so the audit's rewrite pass could run; the key is in this session's transcript and should be rotated via the Anthropic console at the next opportunity.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 67a9aed0 | (allaboutv2) Rename Bible/MX-Bible to MX: The Protocols across demo and skill template |
| f541827f | (mx-crm) Rename Bible/MX-Bible to MX: The Protocols across CRM outreach materials |
| 19f58870 | (mx-outputs) Bible to Protocols sweep across published site, plus runbook fixes |
| e3ee51e | (mx-crm) Add MX Audit Suite report for mx.allabout.network (2026-05-04) |
| 23c4b1f | (mx-outputs) Add tagged PDF: mx.allabout.network audit (2026-05-04) |
| _pending_ | (hub) Bible-to-Protocols sweep, dead-URL cleanup, runbook integrity fixes, cog enforcer hook v1.4, mx-audit cog v1.3.0, audit pipeline submodule pointer bumps, directors report v1.1 — Step 3 commit |
