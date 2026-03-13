---
title: "Co-Directors Report — MX Coming Soon Page, Editorial Amendments, Live Production Audit + Homepage Fixes"
created: "2026-03-13"
segment: "evening"
version: "3.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidentiality: internal
---

# Co-Directors Report — MX Coming Soon Page, Editorial Amendments, Live Production Audit + Homepage Fixes

**Date:** 13 March 2026 — Evening

**Segment:** evening (17:00 onwards)

---

## Summary

A full production evening across three distinct phases. Phase 1 delivered a production-ready MX coming-soon landing page — zero Pa11y issues, full Schema.org compliance, and a live llms.txt. Phase 2 applied Tony Harley's editorial review to both book manuscripts: British English throughout, em-dash typography, figure/table numbering, and writing-style.md updated to v1.1. Phase 3 ran a live production audit of allabout.network, identified the gap between the local build and what is actually live, generated a full executive audit report, and applied accessibility and SEO fixes to the homepage and coming-soon.html.

---

## What Was Done

### 1. MX Coming Soon Page — Production Ready

A new coming-soon design was ingested, corrected for MX compliance, audited against Pa11y WCAG AA (zero issues), and all identified defects fixed in the same session.

**Key fixes applied:**

- Company name corrected throughout: `Cog-Nova-MX Ltd` → `CogNovaMX Ltd`
- Book names corrected: `The MX Handbook` / `The MX Protocols` → `MX: The Handbook` / `MX: The Protocols`
- CSS externalised: inline `<style>` block extracted to `coming-soon.css` with full MX carrier metadata
- OG/Twitter image updated from SVG (rejected by social platforms) to `coming-soon-social.png` (1200×630)
- Canonical URL corrected from `coming-soon.cog.html` to `coming-soon.html` in all 7 references
- `llms.txt` updated: CogNovaMX header + MX books section prepended to existing DDT content
- Font preload, `-webkit-mask-image` prefix, `theme-color`, Cloudflare preconnect all added

**Audit result:** 7 findings raised and resolved. Zero Pa11y WCAG AA issues.

### 2. Tony Harley Editorial Amendments — Both Manuscripts

Tony Harley's editorial review applied systematically to all manuscript files (MX: The Protocols, MX: The Handbook, shared chapters, appendices, and free book).

**British English spelling:** 205 substitutions across 55 files. Key terms: behaviour, authorise, organise, recognise, optimise, maximise, colour, centre, labelled, customise, analyse. Code blocks and LaTeX command lines excluded from substitution.

**Em-dash typography:** 2,423 corrections across 55 files — ` - ` (space-hyphen-space) replaced with ` — ` (space-em-dash-space) throughout prose. Code blocks and LaTeX lines excluded. A false-positive was caught and fixed during dry-run: `\begin{center}` was initially changed to `\begin{centre}` — the fix script was corrected to skip all lines beginning with `\`.

**Publication date removal:** Three files had Q1 2026 date signatures removed — `preface.md` in both books and `rear-cover.md`. Historical industry dates (e.g. "Q1 2026: Microsoft launched...") were left intact.

**LaTeX footer:** `metadata.yaml` for the Handbook updated: `Early Draft - Commercial Work - Do Not Distribute` → `Final Draft - Commercial Work - Do Not Distribute`. Protocols footer was not changed (different template).

### 3. Figure and Table Numbering — Consistent Scheme Applied

A chapter-prefixed numbering scheme was applied across both books:

- **Figures:** Caption BELOW image, italic, format `*Figure X.Y: Description.*` — separate sequence per chapter
- **Tables:** Label ABOVE table, italic, format `*Table X.Y: Description.*` — separate sequence from figures (a chapter can have both Figure 4.1 and Table 4.1)
- **Executive summary:** Uses `Figure ES.1` prefix

**Handbook figures added/corrected:** Figure 10.2 (previously unnumbered SVG). Tables 10.1, 11.1, 11.2, 11.3, 11.4 labelled.

**Protocols figures added:** All 13 illustrations were unnumbered — captions added for Figures 2.1 through 14.2 and Figure ES.1. Tables 2.1 through 15.2 labelled across 11 chapters.

**Total additions:** 14 figure captions, 19 table labels.

### 4. Writing Standards Codified

**writing-style.md updated to v1.1:**

- Section 3 dash rule corrected: replaced "Use short dashes (-) only" with full typographic rule — em-dash for parenthetical/connective use, hyphen for compound modifiers, no overuse
- Section 9 Pattern 13 (em-dash overuse) rewritten: clarifies the AI pattern is *overuse*, not correct single use; updated example shows one em-dash correctly retained
- Section 13 (new): complete Figures and Tables convention covering caption/label format, position rules, numbering scheme, examples, and registry of existing figure and table numbers in both books

**Humanizer skill updated:**

- Phase 1 now loads Section 13 alongside Section 9
- Phase 2 em-dash detection corrected: flags overuse only, explicitly preserves correct single parenthetical uses; flags ` - ` in prose as a typographic bug
- Phase 2 Step 4 (new): structural check for book manuscripts — figure captions must be below, table labels above, chapter-prefixed numbering, un-numbered items flagged

### 5. Live Production Audit — allabout.network

The Web Audit Suite was run against the live URL `allabout.network/mx/coming-soon.html`. Key findings documented in `mx-crm/outreach/2026-03-13/allabout-report.md`.

**Production state confirmed:**

- Homepage served HTML score: 100/100 (perfect AI agent compatibility)
- Homepage SEO: 72/100 | Accessibility: 90/100
- First Contentful Paint: 3,099ms (3× the "good" threshold — font loading and image weight)
- All 14 homepage images missing alt text (EDS blogroll dynamic content)
- llms.txt present but content describes DDT/AEM — not MX or CogNovaMX
- coming-soon.html on production missing MX carrier metadata (present in local build — deployment gap, not authoring gap)

**Fixes applied:**

- `allaboutv2/index.html`: added `charset`, `lang="en-GB"`, canonical, complete Open Graph, Twitter Card, Schema.org (WebSite + Person JSON-LD), `<nav>` landmark for category tabs, `type="button"` on all category buttons, improved alt text and `loading="lazy"` on all 3 featured images
- `allaboutv2/mx/coming-soon.html`: `<footer>` moved outside `<main>` (was incorrectly nested)

**Remaining items (not fixable from static HTML):** Blogroll images lack alt text at the EDS block level — must be addressed in source documents or block JavaScript.

### 6. Memory Saved

`memory/manuscript-formatting.md` created: permanent record of figure/table format standards, em-dash rule, British English substitutions, LaTeX footer values, and registry of existing numbered items in both books. `MEMORY.md` updated with pointer.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Manuscript files changed | 55 |
| British English substitutions | 205 |
| Em-dash corrections | 2,423 |
| Figure captions added | 14 |
| Table labels added | 19 |
| Coming-soon audit findings fixed | 7 |
| Pa11y WCAG AA issues | 0 |
| Skill files updated | 2 (writing-style.md, humanizer.json) |
| Memory files created/updated | 2 |
| Production audit pages analyzed | 2 (homepage + llms.txt) |
| Homepage SEO score | 72/100 |
| Homepage AI agent score | 100/100 |
| index.html fixes applied | 8 (charset, lang, OG, Twitter, canonical, Schema.org, nav, lazy loading) |
| Total lines changed | +2,483 / −2,347 |

---

## Next Steps

- Push all submodule and main repo commits to remote
- Deploy local allaboutv2 build to production (coming-soon.html with MX metadata is ready)
- Rewrite llms.txt to replace DDT/AEM content with MX/CogNovaMX content (draft in allabout-report.md Priority 1.2)
- Investigate FCP 3,099ms on homepage — font preload and blogroll lazy loading are likely causes
- Add alt text to blogroll images at EDS block or source document level
- Verify social card rendering via LinkedIn/Facebook debugger once deployed
- Tony Harley editorial items still requiring human review: opening argument structure, dynamic pricing passage, illustration quality

---

## Commit Log

| Repository | Change |
|------------|--------|
| allaboutv2 | New coming-soon design, CSS externalised, all audit fixes, llms.txt updated; index.html accessibility + SEO fixes; coming-soon.html footer structure |
| mx-crm | Audit reports: `coming-soon-report.md` (local pre-prod), `allabout-report.md` (live production) |
| datalake | 55 manuscripts: British English + em-dash + figures/tables + Q1 date removal + LaTeX footer |
| mx-canon | writing-style.md v1.1: Section 3 dash rule, Section 9 Pattern 13, Section 13 new |
| .claude | humanizer.json: Phase 1+2 updated with Section 13 structural checks |
| mx-outputs | Evening report v3.0; README index updated |
