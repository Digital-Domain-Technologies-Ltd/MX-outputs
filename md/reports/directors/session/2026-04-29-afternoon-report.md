---
title: "Co-Directors Report — PDF EAA pipeline shipped end-to-end; audit suite eats its own dog food"
description: "Two new sidecar scripts, four code/template bugs fixed, full self-audit run completed, live book PDF regenerated as ISO 14289-1 conformant."
author: "Tom Cranstoun"
created: 2026-04-29
modified: 2026-04-29
version: "1.2"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-04-29-afternoon-report.md
  purpose: "Two new sidecar scripts, four code/template bugs fixed, full self-audit run completed, live book PDF regenerated as ISO 14289-1 conformant."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - PDF EAA pipeline shipped end-to-end; audit suite eats its own dog food"]

---

# Co-Directors Report — PDF EAA pipeline shipped end-to-end; audit suite eats its own dog food

**Date:** 29 April 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

The afternoon closed the loop on the morning's PDF EAA service line. Two new sidecar scripts (`write-sitemap-health.js` and `capture-pdf-sample.js`) auto-emit at the end of every audit run, four code and template bugs surfaced by self-auditing were fixed, the first end-to-end /audit-site run against `mx.allabout.network` completed cleanly through every gate, and the live `mx-introduction-chapter.pdf` that the audit found non-conformant was regenerated as a tagged ISO 14289-1 / PDF/UA-2 document. We are now selling the EAA audit while the audit suite itself emits a verifiably tagged report PDF and the only PDF the suite found on our public surface is conformant.

---

## What Was Done

### 1. Two new sidecar scripts auto-invoked from `generateReports`

`mx-audit/bin/write-sitemap-health.js` writes `sitemap_health_summary.json` so downstream universal-claims and LLM-judgment gates stop defaulting to partial-sample mode on full-coverage runs. `mx-audit/bin/capture-pdf-sample.js` reads `pdfs.csv`, picks the first row deterministically, runs `audit-pdf-access.cjs --single --eaa-summary`, and writes `pdf_sample.json` carrying the EAA Level 1 / Level 2 verdict plus the analyser exit code. Both are wired into `src/utils/reports.js` so the data lands on disk before the report stage runs. The bash heredoc that the audit-report skill used to embed at Step 10.9 is gone; the `jq` dependency with it.

### 2. Four code and template bugs fixed

- **qpdf JSON v2 indirect-reference resolver** in `scripts/audit-pdf-access.cjs`. qpdf 11+ stores catalog values as indirect references (`/MarkInfo 496 0 R` rather than an inline dict). The previous code read the reference string and reported "PDF not declared as tagged" even when the resolved object had `/Marked true`. The fix walks `qpdfJson.qpdf[1]["obj:N 0 R"].value` and strips qpdf v2 string-type prefixes (`u:`, `b:`, `n:`). False-negatives gone.
- **SECTION/END marker preservation** in `mx-audit/bin/infill-report.js`. Multi-line `<!-- SECTION:NAME — explanation… -->` markers were stripped by the bare-comment regex while bare END markers survived; the verifier saw the imbalance and blocked. Now any comment beginning with `SECTION:NAME` or `END:NAME` survives the strip pass and is collapsed to bare form.
- **PDF Snapshot template SECTION markers** in `mx-audit/templates/web-audit-suite-template.md`. Replaced `[IF/ELSE/END IF]` pseudo-conditionals with four real `SECTION:PDF_EAA_*` branches (EMPTY / SAMPLE / FAIL / NO_QPDF). The infill machinery now strips inactive branches the same way it does for AI_ATTRIBUTION and JSONLD_DRIFT.
- **Findings table rows** in the same template. Replaced literal `[Finding title]` placeholder rows with a single REWRITE block carrying explicit instructions. Removes the recurring failure mode where the rewriter forgets to overwrite the literal placeholders.

### 3. First end-to-end /audit-site run against mx.allabout.network

60 URLs, 638s wall clock. Verifier 67/0 (was 48/0 before today's fixes), fierce-critic clean, template-leak gate clean. PDF/UA-2 tagged audit report generated at `mx-outputs/pdf/outreach/2026-04-29/`. Substantive findings: Priority 1 was the live book PDF (now fixed in commit `54a1eb2`); Priority 2/3 were `/books/download-intro` (inline CSS + missing security headers + borderline contrast).

### 4. Live `mx-introduction-chapter.pdf` regenerated as tagged

The served PDF the audit picked up (sha256 `ef0087fed9e59dd4...`, 5.4 MB, untagged) has been replaced with a tagged regeneration (sha256 `8703249ee0968dd0...`, 250 KB, PDF/UA-2). Built from a single combined-markdown source (chapter-00 + purchase-books + kickoff + manifesto + services-advert) through `mx.pdf.sh`. Verified clean against `audit-pdf-access.cjs --public`. The A5 and Letter variants still come from `gen-free-book.sh` which doesn't yet inject the tagged-PDF preamble; reminder filed for paper-size flag work in `mx.pdf.sh`.

### 5. Vendor-neutral remediation prose enforced

The analyser's `/StructTreeRoot` finding remediation used to name "lualatex with the tagpdf package, weasyprint, headless Chromium print-to-PDF". That text flows directly into client-visible audit reports. Replaced with vendor-neutral language describing the conformance outcome ("regenerate the PDF through a tagged-PDF-capable production path so the document catalog carries a populated /StructTreeRoot"). Memory rule added to enforce this on future content.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits across submodules | 6 (mx-audit 3, mx-outputs 2, mx-crm 1) |
| New scripts | 3 (`write-sitemap-health.js`, `capture-pdf-sample.js`, plus `audit-pdf-eaa-batch.cjs` from earlier today) |
| Code/template bugs fixed | 4 |
| Verifier score before / after | 48/0 passes → 67/0 passes |
| PDFs swept under fixed analyser | 20 (19 clean, 1 stale standalone build flagged) |
| Audit run cost | 60 URLs, 638s, 0 errors after fixes |
| Live PDF size delta | 5.4 MB → 250 KB (5.2 MB drop), now tagged |

---

## Why It Matters

The morning's PDF EAA service line shipped without anyone running the pipeline against the only PDF on our own public surface. Doing that this afternoon surfaced two things: the live book PDF was non-conformant (we were selling EAA audits while shipping non-conformant PDFs), and the analyser had a real bug that produced false negatives on every tagged PDF qpdf 11+ emitted. Both of those would have surfaced eventually in front of a paying client. They surfaced first inside the loop, and both are fixed before any client-facing run.

The audit report we generated against `mx.allabout.network` is itself a tagged PDF/UA-2 document. The audit suite eats its own dog food on EAA conformance — the regulation we're auditing other people against now binds the artefacts we ship.

---

## Decisions Made

- The combined-markdown approach for `mx-introduction-chapter.pdf` drops the bitmap front and back covers and the auto-generated TOC in exchange for a single tagged source. The trade is recorded as a deliberate one-way change for the A4 served file; A5 and Letter variants stay on `gen-free-book.sh` until `mx.pdf.sh` exposes paper-size flags.
- LLM-judgment gate skipped for the self-audit report because no `ANTHROPIC_API_KEY` was available in this environment. The skip is documented in the report's gate summary, not silenced.

---

## Added this update (v1.2) — Humanize all 22 blog posts

All 22 blog posts in `mx-outputs/mx-site/blog/` have been humanized — AI writing patterns identified and removed from article prose throughout. The work was driven by the `/humanizer` skill (based on Wikipedia's "Signs of AI writing" guide) and a detailed plan that classified patterns by priority.

Patterns removed across the corpus: bold inline-header vertical lists (`**Label:** prose` items in `<li>` and `<p>` elements), boldface overuse on every key phrase, AI vocabulary (`crucial`, `pivotal`, `landscape`, `fundamental`, `inherently`, `underscore`, `showcase`, `testament`, `foster`, `vibrant`), undue significance language ("represents a pivotal moment", "marks a shift"), unanchored statistics presented as universal fact, em-dash abuse, and generic upbeat conclusions. Standalone emphasis sentences converted to plain prose. Numbered lists with bold item labels converted to plain text with em-dashes.

Preserved throughout: proper nouns, book titles, technical terms being introduced (Served HTML, Rendered HTML, MX-first principle), blockquoted content, genuinely instructional numbered checklists (Getting Started, What's Next, Try It Yourself, Lessons for Humans sections), CTA/sales blocks at article ends, HTML structure, schema JSON-LD, author bios, and navigation boilerplate.

Net result: 19 blog HTML files edited, 20 files changed total including `llms-full.txt` regenerated to reflect updated content. 808 insertions, 1028 deletions — the posts are measurably leaner. The writing now reads as human-authored rather than machine-polished.

---

## Added this update (v1.1) — Div Soup check across served and rendered

The audit suite now detects "div soup" — pages where every container is a bare `<div>` with no role, no ARIA landmark, no class hint about purpose, and no first-generation semantic descendant. AI agents and assistive technology fall back to brittle positional heuristics on those pages; the cost is fragility every time the source pipeline regenerates the layout.

The check runs on both served and rendered HTML so the report distinguishes publisher-controlled source from JavaScript-framework-introduced render output. A new `analyzeDivSoup()` method in the LLM collector returns total / bare div counts, the worst nesting depth, a 0-100 score, a low / medium / high band, and the top-5 offending CSS selectors. The web-audit-suite template gains a `SECTION:DIV_SOUP` block with a two-row table; the rewrite block mandates the verbatim phrase "this is hard for machines to understand" when either row scores below 75. The infill resolver picks the worst-scoring page per source rather than averaging — average masks outliers, worst-page surfaces the agent-hostile case directly.

Smoke-tested against three fixtures (synthetic 5-deep nested soup → score 15 high; pure semantic page → score 100 low; live `mx.allabout.network` cached pages → 75-100 low band). The site is genuinely well-structured and the test confirms it.

---

## Next Steps

- Add `--paper a5|letter` flag to `mx.pdf.sh` and regenerate the A5 / Letter variants of `mx-introduction-chapter.pdf` as tagged.
- Wire a pre-deploy gate `npm run check:pdfs:tagged` that runs `audit-pdf-access.cjs --public` over every PDF in `mx-outputs/mx-site/books/` and `mx-outputs/mx-site/blog/` and blocks the publish on any structure-tree failure.
- Continue the broader instrumentation plan: F2 (rendered-page timing breakdown), F3 (Cloudflare-on-GitHub platform fingerprint), F4 (sitemap PDFs in `pdfs.csv`), F6 (token-driven PDF inventory in infill), F7 (non-HTML row gating in SEO scores), F8 (pa11y formula), F9 (Discovery-gaps report section), F10 (`audit:diagnose` engineer tool).

---

## Commit Log

| Hash | Repository | Description |
|------|------------|-------------|
| 8a5808c | mx-audit | Auto-emit pdf_sample.json and sitemap_health_summary.json sidecars |
| 58dfd89 | mx-audit | infill-report: preserve SECTION/END markers regardless of trailing prose |
| c81893b | mx-audit | Web audit template: real SECTION markers + cleaner Findings + new PDF tokens |
| 54a1eb2 | mx-outputs | Books: regenerate mx-introduction-chapter as tagged PDF/UA-2 (A4) |
| c0491d0 | mx-outputs | Self-audit report PDF: mx.allabout.network, 2026-04-29 |
| 03630fa | mx-crm | outreach: mx.allabout.network self-audit, 2026-04-29 |
| 16ed2ce | mx-crm | Add IDHL two-pathway proposal outline (working draft) |
| 72975e77 | hub | Fix qpdf v2 resolver in audit-pdf-access; bump audit-report skill |
| 83bd6e69 | hub | Docs: CHANGELOG v1.47, LEARNINGS, REMINDERS for afternoon close-out |
| ea6a1b8 | mx-audit | Add Div Soup check across served and rendered HTML |
| 2bfc94d | mx-outputs | Humanize all 22 blog posts: strip AI writing patterns |
