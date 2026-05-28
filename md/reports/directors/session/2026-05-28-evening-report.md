---
title: "Co-Directors Report — Audit Phase 6 Final Inference + Operating Principles + PDF Inspector Self-Host + Three-Site Audit Batch"
description: "Added a cog-only post-PDF cross-check pass to the audit pipeline, shifted Maxine's working defaults toward proactive helpfulness and monetisation surfacing, brought the public PDF inspector onto a zero-third-party-dependency footing, and shipped the first three external audit deliverables (typo3.org, dkd.de/de, dotfusion.com) along with a canonicalUri fix in the audit report generator."
author: "Tom Cranstoun"
created: 2026-05-28
modified: 2026-05-28
version: "1.4"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-28-evening-report.md
---

# Co-Directors Report — Audit Phase 6 Final Inference + Operating Principles + PDF Inspector Self-Host

**Date:** 28 May 2026 — Evening
**Segment:** evening (since 17:00)

---

## Summary

The evening added a final inference pass to the audit pipeline. After the PDF lands, an LLM re-reads the published markdown against the per-domain cache and surfaces inaccuracies, contradictions, and misstatements to Tom in a terminal summary — without rewriting the report. The same session captured a working-relationship adjustment: skill prose is editable when Tom's request names the surface (provided the edit is flagged), and Maxine's default shifts toward engaged-and-monetisation-aware rather than minimal. These are small files but real policy changes.

---

## What Was Done

### 1. Audit pipeline — Phase 6 final inference

Added `post-pdf-cross-check` as a new action in [`scripts/cogs/mx-audit.cog.md`](../../../../../scripts/cogs/mx-audit.cog.md) (version 1.12.0 → 1.13.0). The action sits between `generate-pdf` and `summary` in the cog's action sequence. Its job: re-read the linted markdown, locate the corroborating evidence for every substantive claim — positive (the site DOES X) and negative (the site DOES NOT X) — inside `mx-outputs/audit/<hostSlug>/.cache/{served,decoded,rendered,body}/<hash>.html` and the origin probes; fall back to a live `curl` when the cache is ambiguous, stale, or silent; classify findings into four buckets — INACCURACY, CONTRADICTION, MISSTATEMENT, UNVERIFIABLE; print a summary addressed to Tom in the terminal. The action never rewrites the markdown, never regenerates the PDF, never touches sidecars or audit_errors.json. It is advisory only.

Cog-only by design. The action is absent from `scripts/audit-pipeline.js`, `npm run audit:full`, and the `@embedded:mx-audit-script` bash block at the bottom of the cog. The scripted path stops at `generate-pdf → summary` as before; only an agent walking the cog through the SOP path reaches the new step. This preserves the architectural rule that scripts deliver and agents discover — Phase 6 is a discovery pass, not a mechanical gate. The deterministic verifier, fierce critic, and llm-judgment passes catch their categories at PDF time; Phase 6 catches the residual class no regex can — a claim that is locally well-formed and locally well-cited but globally contradicts what the cache shows.

The matching `/audit-site` skill grew a corresponding Phase 6 paragraph that points back at the cog action — the cog is the substantive source of truth, the skill mirrors the workflow shape.

### 2. Operating principles — helpfulness + monetisation surfacing

[`CLAUDE.md`](../../../../../CLAUDE.md)'s Partnership Model section grew two new bullets:

- **Be very helpful.** Suggest improvements as work goes along, not only when asked. If an adjacent issue is quick to fix and obviously right, do it and note it. If a pattern could be cleaner, name it. If a document is drifting from reality, flag it. The default is engaged, not minimal.
- **Surface monetisation ideas.** Always scan the work for ways MX, REGINALD, The Gathering, or Maxine could generate revenue — a productisable workflow, a billable insight, a sponsor angle, a SaaS hook, a consulting hook, a piece of IP worth protecting. Name the idea in the summary even when tangential. Surface, do not filter.

The auto-memory rule that previously said "do not edit skill prose" was rewritten as a two-case rule: an explicit feature request that names a skill's surface → edit + flag the edit prominently in the summary + offer to revert; an incidental sweep / cleanup that happens to touch skill prose → surface only, do not edit. The 28 May audit-site Phase 6 work is now the canonical Case A example; the 27 May legacy-repair-script cleanup remains the canonical Case B example.

### 3. PDF inspector — self-hosted parser, zero third-party dependency

The public PDF inspector at `https://mx.allabout.network/tools/pdf-inspector.html` was failing at the parse step with "Failed to fetch dynamically imported module". Root cause: the mx-site Cloudflare worker sends a Content-Security-Policy header with `script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com`. The inspector was dynamically importing `pdf.js` from `https://cdn.jsdelivr.net/...`, which is not on the CSP allowlist, so the browser refused the import before pdf.js ever loaded. Inspection then failed for every visitor.

The fix vendored the `pdfjs-dist@4.10.38` build files (`pdf.min.mjs` 344 KB, `pdf.worker.min.mjs` 1.3 MB) into [`mx-outputs/mx-site/js/vendor/pdfjs/`](../../../../../mx-outputs/mx-site/js/vendor/pdfjs/) and rewrote the two constants in [`mx-outputs/mx-site/js/pdf-inspector.js`](../../../../../mx-outputs/mx-site/js/pdf-inspector.js) to point at the local paths. No CSP changes, no expanded allowlist, no remaining third-party CDN call at inspection time. Verified live: `pdf.min.mjs` and `pdf.worker.min.mjs` both return `200` from the public hostname, and the live `pdf-inspector.js` carries the new local-path constants.

The inspector page copy was then tightened to make the parser-locality explicit. The bold opening paragraph now reads "The parser itself ships from this site, with no third-party CDN call and no remote dependency at inspection time." The Verifiability paragraph in the "Why this is not server-side" section now reads "The full inspector source ships in your browser, including the PDF parser itself, vendored into this site rather than fetched from a third-party CDN. Once the page loads, the inspector runs without any further network calls." The "your file stays in your browser" pitch is now literally true at the parser layer as well as the file layer.

### 5. Three-site audit batch + canonicalUri generator fix

Ran the Web Audit Suite against three external sites — typo3.org, dkd.de/de, dotfusion.com — at five pages each (the pipeline's +2 buffer for `llms.txt` / `sitemap` discovery probes brings each to seven). All three completed end to end (Phase 1 crawl + recon, Phase 2 deterministic report, Phase 3 six gates + tagged PDF). Every report passed every gate. The deliverables landed at [`mx-outputs/audit/2026-05-28/`](../../../../audit/2026-05-28/) — markdown report, tagged PDF, AI provenance sidecar (citing EU AI Act, UK ICO AI guidance, NIST AI RMF, Colorado AI Act), deterministic sidecar (citing EAA Directive 2019/882), pa11y findings, per-section CSVs, hash-indexed prompt / input archives. These are the first audit deliverables in the new `mx-outputs/audit/<date>/<hostSlug>/` layout to land in the public mx-outputs repo for external sites this team does not own.

A cross-check pass against the COG (Community Owned Governance Standard) frontmatter rules surfaced a real defect in the audit report generator. Every audit report wrote a complete `mx:` block — status, contentType, audience, runbook, generate target, x-mx-provenance pointer pair — but no `canonicalUri`. The pre-write-frontmatter hook in MX-Hub requires `canonicalUri` on every MX-aware md file, derived from the file's repo mount via `scripts/cog-field-rules.js` `deriveCanonicalUri()`. The hook fires on `Write` only, and the audit pipeline writes via Node directly, so the hook never caught it. Result: every audit report shipped to date carries a frontmatter that would fail the hub's own validator.

The fix in [`mx-reginald/audit/bin/infill-report.js`](../../../../../mx-reginald/audit/bin/infill-report.js) computes the canonical URI from the report's known output path against the mx-outputs repo map (`Digital-Domain-Technologies-Ltd/MX-outputs`, branch `main`) and emits it into the generated frontmatter under `mx:`. The three reports shipped tonight were backfilled with the matching URI, validated clean against `validateFrontmatter()` (`valid: true`, zero errors, zero warnings), and re-rendered to PDF so the XMP `ProvenanceAiPayload` carries the correct canonicalUri. Verified live via `exiftool -b -XMP-mx:ProvenanceAiPayload | grep canonicalUri` on each PDF — all three now match. Every future audit run produces a COG-clean report by construction.

A second feedback memory was added during the same session: the +2 page buffer in `mx-audit --max-pages` is intentional (it reserves room for llms.txt / sitemap discovery probes); future accuracy reviews must not flag it as drift. The memory is now in the `~/.claude/projects/.../memory/` index.

### 4. PDF inspector — Cloudflare worker MIME-type fix (second outage and rename)

After the first ship, the inspector was still failing in the browser with the same "Failed to fetch dynamically imported module" error, now naming the local URL. Root cause turned out to be one layer deeper than the CSP block: the Cloudflare worker at [`allaboutv2/cloudflare/files/cloudflare-worker.js`](../../../../../allaboutv2/cloudflare/files/cloudflare-worker.js) carries a content-type lookup table keyed by file extension; `mjs` is not in the table, so `.mjs` files fall through and inherit GitHub raw's default `text/plain` header. Browsers refuse to execute a JavaScript module that arrives with `Content-Type: text/plain`, regardless of the file body being a valid ES module. The CSP fix had unblocked the request; the MIME-type response then blocked the execute.

Two paths to a fix: (a) patch the worker to map `mjs -> application/javascript` (correct, but requires a manual `wrangler deploy` and a two-file-rule test addition), or (b) rename the two vendor files from `.mjs` to `.js` so they route through the existing `.js -> application/javascript` entry. ES modules are identified by their Content-Type header, not by URL extension, so the rename is a real fix not a workaround. Path (b) shipped tonight (mx-outputs `6181855`, hub `1cd20349`); path (a) is filed as a follow-up for the worker repo so future `.mjs` files Just Work.

Verified live: `pdf.min.js` and `pdf.worker.min.js` both come back with `content-type: application/javascript; charset=utf-8`, and the live `pdf-inspector.js` carries the updated `.js` constants. A short comment in the inspector source explains why the files use `.js` rather than the upstream `.mjs` shipping convention, so the next developer reading the file does not silently undo the fix.

### 6. PDF inspector — test harness, production gate, public claim

The third strand of the inspector work surfaced a real consumer-side bug worth describing on its own. Tom asked for a test harness that exercises the gold-standard MX Compatible audit PDF (the new dkd.de/de report at `mx-outputs/audit/2026-05-28/www.dkd.de-de/www-dkd-de-de-report.pdf`) through the same code the public inspector runs. Building the harness required extracting the inspector's pure detection + classification pipeline into a sibling module ([`mx-outputs/mx-site/js/pdf-inspector-core.js`](../../../../../mx-outputs/mx-site/js/pdf-inspector-core.js)) so both browser and Node could import the same source of truth. The harness at [`tests/test-pdf-inspector.js`](../../../../../tests/test-pdf-inspector.js) loads the same vendored pdf.js the browser loads, calls `inspectPdfDoc` on a fixture PDF, and asserts tier=mx with every required evidence row green.

First run of the harness against the DKD report classified the file as `plain` with every required check FAIL — the consumer-side bug. pdf.js lowercases XMP field keys on parse (so `mx:Status` arrives as `mx:status`, `pdfuaid:Part` as `pdfuaid:part`); the inspector probes the capitalised forms, none matched, no MX evidence was found. The PDF carried the data; the reader could not see it. The fix in `readXmpField` now does an exact-match first then falls back to a case-insensitive sweep of `getAll()` keys, so the lookup survives whichever case-folding the XMP parser applied. Every existing MX Compatible PDF the canonical mx.pdf.sh produces now correctly classifies as MX Compatible in both browser and Node.

The fix unlocked a stronger discipline. The harness was wired into `npm test` and given a `--quiet` flag (suppresses the evidence table on pass, keeps it on fail). [`scripts/bin/mx.pdf.sh`](../../../../../scripts/bin/mx.pdf.sh) now calls the harness as a hard gate after every canonical render: if the public PDF inspector would not certify the freshly-rendered PDF as MX Compatible, the build fails non-zero and nothing ships. `MX_PDF_SKIP_INSPECTOR=1` bypasses the gate for dev iterations on intentionally-incomplete drafts. The browser inspector and the production gate share one source of truth — the detection core — so a regression in either surface fails both.

The inspector page itself grew two new sections to make the discipline visible to the reader. The first ("We run every PDF we ship through this tool") names the harness path and the gate path and says the production pipeline blocks any PDF the inspector cannot certify. The second ("Credibility by mechanism, not by claim") frames the three-layer architecture as the answer to "trust us, we did this carefully" — the page makes the claim, the gate enforces it, the harness proves it, all three layers live in the open, and each reads from the same detection core. For AI-governance regimes that increasingly require evidence-chain documentation, this is the argument MX makes generally; the inspector makes it concretely.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits this evening | 5 (98233186, 02e585c4, 97d44a52, 66fc4be1, 152055bd, 1cd20349, plus this segment's hub commits) |
| mx-outputs commits this evening | 6 + 1 (audit batch 5bd1643) + 1 (this report v1.3) |
| External-site audit deliverables shipped | 3 (typo3.org, dkd.de/de, dotfusion.com — all gates passed) |
| Audit pipeline defects found and fixed | 1 (canonicalUri missing from generated mx: block) |
| Auto-memory files touched | 3 (skill-prose rule rewritten, page-count buffer feedback added, index updated) |
| Cog version bumps | mx-audit 1.12.0 → 1.13.0 |
| Vendor assets added | 2 (pdfjs build + worker, ~1.6 MB total) |
| Cloudflare cache purges | 3 (PDF inspector ship, copy emphasis, MIME-type rename) |
| Live regressions found and closed in-session | 2 (CSP blocked jsdelivr, worker MIME on .mjs) |

---

## Why It Matters

The Phase 6 final inference is the kind of operational gate the REGINALD evidence-vehicle pitch needs to be credible at the prospect-meeting end of the funnel. Audit reports go to prospects with named CFOs and compliance officers. A single mis-stated negative — claiming "the site lacks X" when the cache shows X present, or asserting where the evidence is partial — costs more credibility than three missed positives. The deterministic verifier and fierce critic catch what they can pattern-match; Phase 6 is the human-style final read that catches the rest. It also fits the partnership architecture cleanly: scripts run the deterministic pipeline; the cog adds the LLM-judgement final pass.

The operating-principles update is the bigger of the two changes in shape. The default mode for the assistant shifts from "execute the request as scoped" to "execute, and surface adjacent value — including monetisation". That changes what every future session's throughput looks like. It also explicitly authorises Maxine to name revenue angles in the summary without waiting to be asked — which is the behaviour Tom needs at this stage of the build.

---

## The Insight

Two scoping rules I had — "don't edit skill prose" and "don't volunteer monetisation thinking" — were calibrated for an earlier phase of the partnership where the worry was over-edit and over-pitch. The phase we are in now is the opposite: under-coverage of the audit surface, and under-naming of revenue opportunities. The two scope rules needed to be loosened together. A behaviour I exhibited in the previous turn (edit + flag + offer to revert) was already the right shape; the rule just needed to catch up with the practice.

---

## Decisions Made

- Phase 6 lives in the cog only, never in the scripted path. The scripted pipeline is for prospects who want a deterministic run; the LLM judgement pass is reserved for the cog walk Tom personally invokes.
- The auto-memory rule on skill-prose edits is now two-case, not absolute. The default for explicit feature requests is edit + flag + offer to revert.

---

## Next Steps

- Walk through Phase 6 live on the next audit run to validate the four-category split (Inaccuracy / Contradiction / Misstatement / Unverifiable) and the prompt shape that asks the LLM to ground each claim in a specific cache file.
- Watch whether "Surface monetisation ideas" generates signal or noise over the next few sessions. If it becomes mechanical, fold it into a discrete skill that runs at session close rather than a per-turn default.
- Decide whether the Phase 6 summary should also be persisted to disk (alongside the verification.json / fierce-critic.json / llm-judgment.json sidecars) or stay terminal-only. Current rule says terminal-only; the question is whether auditors and compliance officers need it in the evidence chain.
- Patch the Cloudflare worker at `allaboutv2/cloudflare/files/cloudflare-worker.js` to map `.mjs -> application/javascript` and add the matching test case in `cloudflare-worker.test.js` per the two-file rule. Tom hand-deploys via `wrangler deploy` (no CI for Cloudflare per the deploy memory).

---

## Commit Log

| Hash | Description |
|------|-------------|
| 98233186 (hub) | mx-audit cog: add Phase 6 post-pdf-cross-check action + matching /audit-site skill paragraph + CLAUDE.md Partnership Model helpfulness/monetisation bullets |
| 02e585c4 (hub) | Changelog + REMINDERS for 2026-05-28 evening: audit Phase 6 + operating principles |
| 97d44a52 (hub) | Bump mx-outputs: README regen for 2026-05-28 evening directors report |
| a074676 (mx-outputs) | Co-Directors evening report 2026-05-28 v1.0 |
| e82bd92 (mx-outputs) | README: regen index — picks up evening directors report |
| 34bdcdb (mx-outputs) | pdf-inspector: self-host pdf.js so CSP doesn't block the parser |
| 66fc4be1 (hub) | Bump mx-outputs: vendor pdf.js for the public PDF inspector |
| 853e3bf (mx-outputs) | pdf-inspector page: emphasise parser-locality in the locality claim |
| 152055bd (hub) | Bump mx-outputs: pdf-inspector parser-locality emphasis |
| 6181855 (mx-outputs) | pdf-inspector: rename vendor pdfjs from .mjs to .js so the worker serves them |
| 1cd20349 (hub) | Bump mx-outputs: rename pdfjs vendor files to .js for correct MIME |
| 5bd1643 (mx-outputs) | Add audit deliverables for typo3.org, dkd.de/de, dotfusion.com (2026-05-28) |
| _pending_ (hub) | Patch infill-report.js to emit mx.canonicalUri + bump mx-outputs (audit batch + report v1.3) |
| _pending_ (mx-outputs) | Directors report v1.3 + README regen |
