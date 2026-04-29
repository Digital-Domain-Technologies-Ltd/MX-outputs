---
title: "Co-Directors Report — Div Soup check shipped; the-author.html and download-intro fixed at source"
description: "New analyzer detects naked HTML containers; first two pages it flagged were fixed at source by tag-name swap and CSS relocation. Second self-audit confirms the morning's regressions are resolved."
author: "Tom Cranstoun"
created: 2026-04-29
modified: 2026-04-29
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening-late]
---

# Co-Directors Report — Div Soup check shipped; the-author.html and download-intro fixed at source

**Date:** 29 April 2026 — Evening (late)
**Segment:** evening-late (since 5pm)

---

## Summary

The evening session shipped a new "Div Soup" check across the audit suite, ran a second end-to-end self-audit against `mx.allabout.network`, and resolved the two pages that surfaced as outliers — `/books/the-author.html` (10 of 24 divs were bare; now 0 of 14, score 70 → 100) and `/books/download-intro` (the Cloudflare-Worker form route had inline CSS, missing security headers, and a borderline contrast value, all because the external stylesheet link 404'd on the wrong host). The second audit confirms the morning's PDF EAA regression is resolved (Level 1 pass / Level 2 pass / EAA exposure low) and the new analyzer correctly distinguishes naked-div pages from semantic ones.

---

## What Was Done

### 1. Div Soup analyzer shipped

A new `analyzeDivSoup($)` method on `LLMCollector` runs on every audited page. A div is "bare" when it carries no `role`, no ARIA labelling, no class hint about purpose (`nav | main | content | hero | sidebar | footer | aside | article | breadcrumb | card | product | landmark | …`), and no first-generation semantic descendant. The analyzer emits a 0-100 score, a low / medium / high band, the longest unbroken chain of nested bare divs, and the top-5 offending CSS selectors. The companion template section `SECTION:DIV_SOUP` mandates the verbatim phrase **"this is hard for machines to understand"** in the rewrite when either row scores below 75. A `script-deterministic` infill resolver picks the worst-scoring page per source and aggregates top selectors across the corpus.

### 2. Second end-to-end self-audit

Re-ran `/audit-site` against `mx.allabout.network` after clearing cache and results. 60 URLs, ~640s wall clock. New sidecars (`pdfs.csv`, `pdf_sample.json`, `sitemap_health_summary.json`) all auto-emitted at the end of `generateReports`. The PDF EAA pipeline now reports Level 1 pass / Level 2 pass / EAA exposure low — the regenerated `mx-introduction-chapter.pdf` (sha256 `8703249ee0968dd0`) is recognised correctly via the qpdf v2 indirect-ref resolver fix landed earlier today. Verifier 48/0, fierce-critic clean, template-leak clean, final tagged PDF generated at 245 KB.

### 3. `/books/the-author.html` — div soup fixed at source

The new check identified this page as the worst-scoring on the rendered HTML — 10 of 24 containers were bare divs (42% bare ratio, score 70, medium band). Two minimal tag swaps closed the finding: 9 × `<div class="highlight-item">` → `<figure class="highlight-item">` (each item is a self-contained stat callout — figure shape fits) and 1 × `<div class="gathering-principles">` → `<aside class="gathering-principles">` (it's a side note listing principles next to the main narrative). Both `figure` and `aside` are in the analyzer's semantic-tags allowlist. No CSS impact (neither class is targeted by any stylesheet in `mx-outputs/mx-site/css/`). Re-scored: 0 of 14 divs bare, score 100, band low.

### 4. `/books/download-intro` — Cloudflare-Worker route fixed at source

The page that has been the recurring outlier across both audits. Three issues, all now resolved at source:

- **Inline CSS over 500 bytes.** The worker's `buildFreeBookFormHTML` had a `<link rel="stylesheet" href="/styles/books-download-intro.css">` but the file lived at `allaboutv2/styles/books-download-intro.css` — a path that doesn't resolve on the `mx.allabout.network` host (which serves CSS from `mx-outputs/mx-site/css/`, not from the allaboutv2 root). The link 404'd live and the page fell back to inline styles. Fix: copy the CSS to `mx-outputs/mx-site/css/books-download-intro.css`, update the worker's `<link href>` to `/css/books-download-intro.css`, retire the orphan source. The worker's two-file testing rule was honoured — test assertion updated, all 209 tests pass.
- **Missing four security headers.** Already set in the worker source on the GET response (HSTS, CSP, X-Frame-Options, X-Content-Type-Options) but not deployed. The path-fix unblocks the deploy.
- **Pa11y contrast 4.48:1 on "(optional)" form span.** Already fixed in the worker source via `class="optional-label"`; the relocated CSS sets `color: #767676` for 4.54:1 contrast (above WCAG 2.1 AA 4.5:1).

After deploy via `wrangler deploy`, the live page will carry zero inline `<style>` blocks, the full security-header stack, and the WCAG-passing contrast value. Tom owns the deploy step.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits across submodules | 4 (allaboutv2 1, mx-outputs 2, mx-crm 1) |
| New analyzer methods | 1 (`analyzeDivSoup`) |
| New template section | 1 (`SECTION:DIV_SOUP`) |
| New deterministic tokens | 14 (DIV_SOUP_*) |
| Pages fixed at source | 2 (`/books/the-author.html`, `/books/download-intro`) |
| div-soup score on the-author.html | 70 → 100 (band medium → low) |
| Worker tests | 209 / 209 passing after the path fix |
| Second audit runtime | ~640s for 60 URLs |
| Verifier passes | 48 / 0 |

---

## Why It Matters

The morning's audit infrastructure produces verdicts; the evening's work made one of them ready for clients to consume — the Div Soup signal turns "your HTML is hard for machines to read" from a vague feeling into a specific, scored, page-level finding with concrete remediation. The `figure`/`aside` swap on the-author.html is the smallest possible fix that an audit reader can copy: same layout, semantic intent declared, the analyzer agrees.

The download-intro fix is governance-relevant rather than technical. The Cloudflare worker's CSS link had been 404'ing for some time; the inline-style fallback was the audit's signal that something was misconfigured in the deploy lineage between two different repositories serving two different hosts. Catching it via the audit suite is the right loop: the same pipeline that ships to clients flags the deploy mismatch on our own surface.

---

## Decisions Made

- **Div Soup tokens initially `rewrite-llm`, now `script-deterministic`.** The data flows mechanically from `results.json` `llmMetrics[].divSoup.metrics` through the new `aggregateDivSoup()` resolver in `infill-report.js` — no LLM involvement needed for the table values.
- **Worst-page-per-source over averaging.** The aggregator picks the lowest-scoring page (the most agent-hostile) rather than averaging across the corpus. An average would mask the outlier; the audit's job is to surface it.
- **Tag swap over class rename for the-author.html.** Considered renaming `highlight-item` to a class containing a hint keyword (e.g. `card`); chose `<figure>` instead because the items are genuinely figure-shaped (number + caption-like label). Tag carries the semantic intent more honestly than class-name engineering.
- **CSS relocation rather than inline-style retention.** The worker could have inlined the (small) CSS to dodge the cross-repo path issue; chose to fix the routing instead because the inline `<style>` would still have flagged on the audit's Inline Tag Bloat check, and the fix is structurally cleaner.

---

## Open Questions

- The deployed worker still serves the old version (live `https://mx.allabout.network/css/books-download-intro.css` will 404 until Tom runs `wrangler deploy`). The audit's verification of the fix only completes after the deploy. **Tom action: deploy worker, optionally re-audit to confirm.**

---

## Next Steps

- Deploy the Cloudflare worker so the `/books/download-intro` fix lands live.
- Continue the broader instrumentation plan: F2 (rendered-page timing breakdown), F3 (Cloudflare-on-GitHub platform fingerprint), F4 (sitemap PDFs in `pdfs.csv`), F6 (token-driven PDF inventory in infill), F7 (non-HTML row gating in SEO scores), F8 (pa11y formula), F9 (Discovery-gaps report section), F10 (`audit:diagnose` engineer tool), F11 (divSoup served-HTML pass), F12 (STRIP-IF rules for PDF_EAA SECTION branches).

---

## Commit Log

| Hash | Repository | Description |
|------|------------|-------------|
| ea6a1b8 | mx-audit | Add Div Soup check across served and rendered HTML |
| 9b29d3e3 | allaboutv2 | Worker: relocate books-download-intro CSS to /css/ for mx.allabout.network host |
| 24ccdad | mx-outputs | Fix div soup on /books/the-author.html + add download-intro CSS |
| 2795066 | mx-outputs | Self-audit pm report PDF: mx.allabout.network re-audit, 2026-04-29 |
| 97af199 | mx-crm | outreach: mx.allabout.network pm re-audit, 2026-04-29 |
| 2268d06 | mx-audit | PDF tagpdf: testphase=phase-III,sec,table,firstaid + parbox plug |

---

## Addendum (v1.1, 18:15)

Two post-close items landed after the v1.0 sign-off and belong on the same evening-late record rather than a fresh segment:

**1. PDF tagpdf parbox plug — mx-audit (commit 2268d06).** Surfaced while regenerating the evening-late tagged PDFs: with `testphase=phase-III` alone, fancyhdr's footer parbox emitted the unregistered socket name `tagsupport/parbox/beforeparbox/...` into the rendered body text. Fix: extend the `\DocumentMetadata` testphase set to `{phase-III,sec,table,firstaid}` (covers struct-tree, section, table, and first-aid plugs) and inject a no-op plug for `tagsupport/parbox/beforeparbox` and `afterparbox` before `\begin{document}` so the fancyhdr footer parbox absorbs cleanly. Removes the prior `\usepackage{tagpdf}` + `\tagpdfsetup{activate-all}` injection — the kernel auto-loads tagpdf when `pdfstandard=ua-N` is declared, so the explicit package was redundant. Net effect: tagged PDFs no longer leak socket-plug names into the visible body, and the LaTeX 2024+ kernel contract is honoured cleanly.

**2. MX: The Protocols — Hoxha citation and worked example.** Delfina Hoxha's "A Beginner's Guide to Intuitive Information Architecture" (Little Language Models, April 2026) was incorporated into the manuscript per a structured update instruction. Three edits, all paraphrase (zero quotations): (a) Chapter 11 §Convergence Principle gains a paragraph naming Hoxha's findable / valuable / timely framing as the human half of Convergence; (b) Chapter 19's IA-lineage sentence now names Covert and Hoxha alongside Krug; (c) Chapter 19 §Naming problem gains a "terminology drift across a department site" worked example built from Hoxha's chemistry-department case (chosen over the IKEA preferred case because terminology drift maps directly onto Chapter 19's audit/IA framing and the Intent CMS contract). All passages: British English, no forbidden adjectives, no item enumeration, MX framed as continuous with the IA tradition rather than a departure. Two open questions deferred for Tom's review: where to host a formal references list (no `## References` section exists in the manuscript), and whether to add a second worked example using the IKEA case in Chapter 15 (Intent-Driven Publishing).
