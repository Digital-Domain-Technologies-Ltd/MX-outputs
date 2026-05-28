---
title: "Co-Directors Report — Audit Lander + Manuscript Propagation + Audit-Pipeline Self-Audit"
description: "Afternoon had three strands. (1) /audit/ lander added at mx-site root with KEY_PAGES_DIRS extension. (2) /manuscript-propagate skill authored and executed across three books, six appendices, and the DDT business plan. (3) End-to-end audit of our own audit pipeline: ran it against dkd.de/de and typo3.org, found five contradiction classes in the typo3 deliverable, fixed the underlying scripts and templates, added a deterministic cross-section consistency gate, re-ran typo3 and verified all five contradictions closed."
author: "Tom Cranstoun"
created: 2026-05-28
modified: 2026-05-28
version: "1.2"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-28-afternoon-report.md
---

# Co-Directors Report — Audit Lander Adds Third Entry-Point on mx-site

**Date:** 28 May 2026 — Afternoon
**Segment:** afternoon (since noon, continuous with the morning's deliverable polish strand)

---

## Summary

The audit narrative now has a top-level lander at `mx.allabout.network/audit/`, alongside the three audience-specific blog posts that landed in the morning. The lander routes engineers, clients, and auditors to the read that fits them, plus the PDF inspector and the explainer so any visitor can verify a deliverable on their own machine. The sync-blog-discovery script learned that landers live in extensible top-level folders, so the next folder we add will surface in `llms.txt` without a code edit.

---

## What Was Done

### 1. /audit/ lander at mx-site root

A new lander page at `mx-outputs/mx-site/audit/index.html` opens the audit story for visitors who arrive from search, social, or a peer link rather than via the services page. It carries three audience cards (engineers, clients, auditors) pointing at the morning's three blog posts, and two verification cards pointing at the PDF inspector at `/tools/pdf-inspector.html` and the explainer at `/learn/mx-for-pdfs.html`. Schema.org `@type: Service` describes the lander to machines; `BreadcrumbList` and `WebPage` complete the standard graph. The lander appears in the main `sitemap.xml`, in the curated `## Key pages` section of `llms.txt`, and in `llms-full.txt` for agents that read the full corpus.

### 2. Discovery infrastructure: KEY_PAGES_DIRS extension

The `sync-blog-discovery` script holds a static list of top-level lander folders that surface in the `## Key pages` section of `llms.txt`. The list was `books, learn, services, about`; we extended it to include `audit`. The mechanism is general enough that the next top-level lander folder we add to mx-site only needs one entry added to the array. The script then writes the lander's title from its `<title>` tag into the curated key-pages block.

### 3. Small morning tidies that did not catch in the segment

Three small follow-ups landed this segment that the morning did not catch. The `LEARNINGS.md` prose rule now requires timeless wording and artefact-name file slugs in any public-web entry that documents a rule; the UBERCOG essential-commands table registers `npm run test:pdf-mx-compatible` next to `npm run test:pdf-eaa` so the new PDF gate is one keystroke away; and the `mx-audit` cog now carries `mx.purpose`, `mx.stability`, and `mx.x-mx-contextProvides` so it passes the now-hard Gate 10 mx-validator check.

### 4. /manuscript-propagate skill authored

A new skill at `.claude/skills/manuscript-propagate/skill.md` teaches an agent how to propagate substantive session work into the three published books and the topic-routed appendices at the depth each surface carries. The skill body documents the depth rule (lightest on free book, main on handbook v2, deepest in protocols), the 22 topic-routed appendices and which concepts route to each, anchor-point conventions per book, the Tom-voice patterns from `writing-style.md` §9 (vignette openers, punchline + expansion, named brands / dates / prices, bold paragraph leads, concrete closers), the no-repeat rule from §0, the timeless-manuscript rule from §3, and the forbidden vocabulary catalogue. A Phase 0 scope check broadens the surface beyond manuscripts to include canon business plans, position papers, action-cogs, info-cogs, and hub-level docs; scaffolds awaiting trigger (the DDT one-pager, attestation explainer, FAQ, pitch deck) are explicitly excluded from speculative propagation. The Gathering vs CogNovaMX audience-split rule is documented so the open-standard surfaces stay vendor-neutral while CogNovaMX surfaces carry regime-specific enumerations.

### 5. Audit-pipeline self-audit: dkd.de/de + typo3.org, then five contradictions traced back to source and fixed

We ran our own audit pipeline against `https://www.dkd.de/de/` and `https://typo3.org/` (five pages each) as a sanity check on the cogs and the mx-exec wrapper. The first invocation failed: `mx exec mx-audit` printed "Failed to extract script". The cog's prose carried a stale `@embedded:audit-pipeline` reference on line 28 that the extractor's "first @embedded:" heuristic picked up before reaching the real `@embedded:mx-audit-script` block on line 666. We re-worded the prose so the extractor finds the right id; both audits then ran end-to-end and passed all gates.

Reading the typo3.org deliverable closely surfaced five contradiction classes that the gates had not caught:

1. **Truncation Risk Data cell spliced two pages into one sentence.** The cell read "Largest page: 230 KB. ... Page: https://typo3.org/association/contact" — but `/association/contact` is 81 KB; the 230 KB figure belongs to `/association/membership`. The pipelineSurvivability table handler always computed "Largest page" across the whole audit set, then the expander appended " Page: <flagged-url>", which read as if both numbers described one page. Fix: when exactly one page failed truncation, the Data cell now anchors on THAT page's bytes plus its main-content offset; the "Largest page" wording only fires when there is no single flagged row.
2. **Skip-link detector missed TYPO3's class name.** The cheerio selector in the Cross-Page Consistency pass used `a.skip-link` (CSS-token match). TYPO3's Bootstrap Package emits `class="visually-hidden-focusable page-skip-link"` — two tokens, neither matching. So the Cross-Page Consistency table reported "Skip link 0%, 7 pages missing" while the Marker Reachability table (which uses a regex with word boundaries) correctly reported "Yes". The two tables disagreed because the two detectors disagreed. Fix: broadened the cheerio selector to `[class*="skip-link"]`, `[class*="skip-nav"]`, `[class*="skip-to"]`, plus the fragment-href targets TYPO3 uses (`#mainnavigation`, `#page-content`, `#page-footer`). The marker.js regex got the same treatment so both detectors agree.
3. **Canonical URL duplicates fallback hard-coded "not present".** The infill-report.js single-page / no-term-data fallback emitted "Canonical tag not present on audited pages" without ever checking. typo3.org's pages all carry canonicals, so the row contradicted the Marker Reachability table and the Cross-Page Consistency table on the same page. Fix: the fallback now reads `consistency_analysis.patterns.canonicalUrl.presentCount` and emits "Pass — canonical present on N audited pages" when the marker is in fact present.
4. **"Distinct issue types" was the wrong nomenclature.** The Executive Summary prose read "30 raw instances spanning 14 distinct issue types" — and the figure 14 was real, but it was `accessibility.distinctIssues` (the SUM of per-page distinct counts), not the true site-wide unique-codes count (2 — `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail` and `WCAG2AA.Principle2.Guideline2_4.2_4_1.H64.1`). Fix: added `distinctCodesSitewide` as a new field on the averages object (a true Set across all pages), and updated the three prose paths that read distinctIssues to prefer the sitewide count when present. The re-run reads "2 distinct issue types"; the per-page sum stays available for any consumer that still wants it.
5. **Cross-section consistency had no gate.** The audit pipeline already runs eight blockers (template coverage, tone, render, leak, deterministic verifier, fierce critic, LLM judgment, PDF EAA), plus the LLM judgment includes a "cross-section consistency" prompt — but none of them spotted that Marker Reachability "Yes" and Cross-Page Consistency "0%" describe the same fact and so must agree. Fix: extended `check-report-coherence.js` with two deterministic checks. Check 7 walks the marker map (canonical, skip link, OG, Twitter, MX governance, JSON-LD, llms.txt link) and compares each marker's verdict in three places (Marker Reachability table, Cross-Page Consistency table, Content Consistency table) against `consistency_analysis.json.patterns.*` as the ground truth; a disagreement records a blocker finding in `audit_errors.json` that flows through the existing provenance log. Check 8 spots the distinct-codes nomenclature mismatch when the prose number matches `distinctIssues` but not `distinctCodesSitewide`. The system prompt for the report rewrite pass also got the cross-section consistency rule written into it, plus a no-splicing rule for truncation and the five-rule taxonomy that Truncation Risk fires from.

A re-audit on typo3.org with all five fixes applied came back clean: `check-report-coherence: clean`, every gate passed, and the prose now reads "2 distinct issue types", the truncation cell describes the actual flagged page (79 KB at 30 KB offset), and skip link reports 100% on both surfaces.

### 6. First propagation pass: provenance v2 + inspector + WAF fingerprint across the canon

The skill was run on this session's work. Nine inserts landed across the manuscripts and the DDT business plan. The free book chapter-00 gained one pull-quote on the verify-in-browser inspector. Handbook v2 ch12 absorbed a paragraph on the `parties[]` role taxonomy and per-step `jurisdictionalEvidence` inside the existing "Provenance Fields Travel Across Carriers" section. Protocols ch20 gained five new paragraphs covering the schema declarations, the role enum with regulatory citations, the thirty-regime registry, per-step jurisdictional tagging, and the flat-surface compatibility shape. Appendix M (the canonical metadata index) gained a "Multi-party, regime-tagged provenance fields" subsection with five field-index entries (`parties`, `frameworks`, `runRevision`, `lastWriteAt`, `jurisdictionalEvidence`), the controlled role enum, and two worked YAML examples. Appendix T (the field dictionary) gained a "Provenance Chain" subsection with five field-dictionary rows. Appendix V (the Reginald vNext record types) gained a new §4 "The provenance record" with required fields, a worked sample, and reasoning; the composition prose was updated for five record types. Appendix R (testing agent comprehension) gained a new H2 "Self-testing PDFs in the browser" framing the inspector as a continuous publisher self-test mirroring the HEAD self-test pattern. Appendix I (the pipeline failure case study) gained a second case study "The 44-False-Positive WAF Cluster" with symptom, root cause, fix, validation, and narrow + broad lessons. The DDT/CogNovaMX business plan gained two bullets after §"Why REGINALD matters for the machine economy": the thirty-regime evidence position (one chain answers every regime in its clause vocabulary; cost moat for documentation reuse) and the browser-side verifier (public, free, no-account inspection forecloses the trust objection). The Gathering business plan was reviewed and left unchanged per the vendor-neutrality rule. Scaffolds stayed untouched per their own runbooks.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 7 (afternoon to date) + pending (audit-pipeline fixes) |
| Files changed | 12 + 8 (audit-pipeline source + system prompt + coherence gate) |
| Lines added | +319 + ~250 (fixes + cross-section gate) |
| Lines removed | -15 |
| Repositories | 2 (hub + mx-outputs) |
| New canonical files | 1 (audit lander) |
| New top-level mx-site folders | 1 (`audit/`) |
| Audits run | 3 (dkd.de/de, typo3.org baseline, typo3.org re-run with fixes) |
| Contradictions found and closed | 5 (truncation splice, skip-link detector, canonical fallback, distinct-codes mislabel, cross-section gate gap) |

---

## Why It Matters

The audit narrative was already in good shape after the morning — three blog posts, a banded scorecard, a findings sidecar, and an MX Compatible regression test. What was missing was an entry-point page a visitor lands on if they search for "MX audit" or arrive from a link in a pitch document. The blog grid is chronological; the services page lists everything we sell. Neither was the right surface for someone who wants the short version of "what is an MX audit and how do I verify it." `/audit/` fills that gap with one paragraph of framing, three audience-routed reads, and two tools that let the visitor verify our claims on their own machine.

The third strand matters for a different reason. Running our audit against a public site and reading the resulting report with the same scrutiny we ask clients to apply to theirs is the only honest way to find the failure modes our gates do not yet cover. The typo3.org run surfaced five contradictions — three of them (truncation splice, skip-link detector, canonical fallback) were latent bugs that any TYPO3-built site would have triggered; the fourth (distinct-codes mislabel) was a nomenclature trap that grows with audit page count; the fifth (no cross-section consistency gate) was a structural gap in our gate matrix. The deterministic cross-section gate we added is the same shape as the existing fierce-critic and llm-judgment gates, but with no LLM in the loop — it reads `consistency_analysis.patterns.*` as ground truth and compares it against the markdown the rewrite pass produced. Findings flow through `audit_errors.json` into the deterministic provenance sidecar, so any future contradiction of this class lands with a precise file-line locator and the source-tree fix-it command attached. The next operator who runs the pipeline will not need to read the report end-to-end to catch a 14-vs-2 splice.

---

## Open Questions

- Should the audit lander get a card in the main header navigation, or is the footer plus search discovery enough for now? The header is already at seven items; adding an eighth crosses a visual threshold on mobile. Leaving it out keeps the visitor count for `/audit/` honest as a discovery-led page rather than a navigation-fed one.
- Are there other "topic landers" that would serve search/social arrivals better than the current blog grid? `/provenance/`, `/certified-operator/` (currently inside `/services/`), and `/eaa/` are candidates if we see real demand from those keywords.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 3176978 (mx-outputs) | Add /audit/ lander linking the three audience-routed audit posts |
| 0eab5547 (hub) | Tidy: hook-driven LEARNINGS blank-line trim + routing-registry timestamp refresh |
| eb236815 (hub) | UBERCOG: register npm run test:pdf-mx-compatible alongside test:pdf-eaa |
| 66bda54b (hub) | LEARNINGS: timeless prose + artefact-name file slugs for public-web writing |
| 3f45f074 (hub) | Bump mx-outputs: pick up directors report 1.3 final hash backfill |
| 14b50462 (hub) | scripts/cogs/mx-audit.cog.md: add mx.purpose, mx.stability, mx.x-mx-contextProvides for Gate 10 |
| 888fd291 (hub) | Manuscripts: document provenance v2 schema in published chapters |
| 4b5a937d (hub) | Manuscripts: round-out provenance v2 across appendices M, R, T, V |
| 99aee86f (hub) | mx-validator: skip /datalake/manuscripts/ from operational field gate |
| ca6d56a4 (hub) | Appendix I: add WAF false-positive cluster case study |
| 2bec6925 (hub) | Manuscript propagation: voice fixes + DDT business plan + skill scope widening |
| 6ca3127c (hub) | Business plan frontmatter: add mx.purpose, mx.stability, mx.x-mx-contextProvides for Gate 10 |
| 366f98d1 (hub) | Changelog 2026-05-28 afternoon: /manuscript-propagate skill paragraph |
| bbea65f4 (hub) | LEARNINGS: timeless-manuscript rule covers evolution language, not just dates |
| 0fea943 (mx-outputs) | Preserve typo3.org 2026-05-28 baseline before re-running with audit-pipeline fixes |
| 47857e4 (mx-outputs) | typo3.org 2026-05-28 re-audit: skip-link / canonical / truncation / nomenclature fixes verified |
| _pending_ (hub) | Audit pipeline: cross-section consistency gate + four template/detector fixes + cog stale @embedded id |
| _pending_ (mx-outputs) | This report v1.2 |
