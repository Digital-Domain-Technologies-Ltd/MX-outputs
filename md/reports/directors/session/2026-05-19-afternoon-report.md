---
title: "Co-Directors Report — TYPO3 readiness draft (full afternoon)"
description: "Afternoon segment: drafted the TYPO3-and-MX readiness blog post on mx-site, ran two voice passes against it (humanizer plus an audit-specificity rewrite), generated the social card, added the hostile-web framing paragraph, and tightened the negation-pivot rule from three-or-more sentences to two."
author: "Tom Cranstoun"
created: 2026-05-19
modified: 2026-05-19
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-19-afternoon-report.md
---

# Co-Directors Report — TYPO3 readiness draft (full afternoon)

**Date:** 19 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

The afternoon was a single piece of work taken through four voice passes. We turned the Leica audit's TYPO3 findings into a public-facing blog draft (noindex, in `mx-outputs/mx-site/blog/drafts/`), framed generically so the post can be promoted without naming the client. The piece argues that TYPO3 is, on the evidence of the audit, one of the better-suited enterprise CMSes for the MX layer, and that the remediation list is a configuration change rather than an architecture change. After the initial draft landed, we ran the humanizer pass against it, added a hostile-web "third failure mode" paragraph at the user's request, rewrote the gap-and-fix sections to be specific to the actual audit (named articles, audit scores, exact counts) rather than generic TYPO3 advice, generated the Open Graph social card, and tightened the house-style negation-pivot rule from a three-or-more-sentence threshold to two. A stale `the-gathering-festival-pitch.pdf` artefact was also cleared from `mx-outputs/pdf/` (flagged in REMINDERS for sanity check; the source markdown is still live).

---

## What Was Done

### 1. TYPO3-and-MX readiness blog post (draft)

New post drafted at `mx-outputs/mx-site/blog/drafts/typo3-and-mx-readiness.html` (now ~1,200 words after the audit-specificity rewrite, six sections, noindex/nofollow, blocked from sitemap and llms-discovery by the existing drafts policy). Structure mirrors the published-blog template: vignette opener, balanced "what TYPO3 gets right" (server-side rendering, JSON-LD in head, full security headers, BreadcrumbList validity, ten-locale hreflang, heading quality / 66% body-content ratio), a tight diagnosis of where the MX gap sits, and a prioritised remediation list. The drafts index card was added at the top of `mx-outputs/mx-site/blog/drafts/index.html` so the post surfaces in internal preview.

### 2. Hostile-web third-failure-mode paragraph

A new paragraph was added between the "two ways a CMS can fail" paragraph and the "what TYPO3 gets right" section, naming a third failure mode that browser-readability and structured-data tests miss: micro-animations that gate content until they finish, cookie banners that intercept the document on first paint, pop-ups, toasts, and lazy-loaded sections that only resolve when a real cursor moves. The paragraph closes on the observation that the audited TYPO3 site carries almost none of this, which is itself a tribute to the project's editorial discipline.

### 3. Humanizer pass

The draft went through the full humanizer workflow against writing-style.md §6, §9 and the Tom-voice patterns. Two house-rule violations were caught: two headings starting with "The..." ("The configuration changes that close it", "The verdict") were reworded ("What to change, and in what order", "Verdict"); four cross-sentence negation-pivot stacks were collapsed into single-sentence pivots. Two divergent-spelling rephrases ("default behaviour" → "default position", "each localised page" → "each language-variant page") applied per the mx-site neutral-English carve-out. Voice score: 6/10 → 8/10. Zero em-dashes, zero forbidden vocabulary, zero Maxine-overlay patterns throughout.

### 4. Audit-specificity rewrite

After the humanizer pass, the user flagged that the gap-and-fix sections still read as generic TYPO3 best-practices advice rather than as findings from the actual audit. Both sections were rewritten to anchor every claim in the audit's real findings: the science-lab section as the article tree, the three named articles (polarised light microscopy, H&E staining, darkfield imaging), the Structured Data Quality dimension at 40/100, the Required Property Coverage at zero out of 25, the nine locale-specific sitemaps that the site already publishes, the three 404 governance paths (`/llms.txt`, `/llms-full.txt`, `/ai.txt`), the eight AI user-agents that received HTTP 200, the Discovery Readiness dimension at 25/100, the 117 WCAG AA issues, the 64 that trace to 15 template patterns, and the 60-70 inline SVG icons per article page. The remediation list grew from six items to seven, splitting the site-wide `name`-on-`WebPage` fix from the science-lab JSON-LD block work as the audit itself did.

### 5. Negation-pivot rule tightened

While running the humanizer pass, it became clear that the cross-references in writing-style.md §9 and the humanizer skill bullet still described the multi-sentence negation-pivot threshold as "three or more consecutive sentences" even though the §6 ban list already covers two-sentence forms explicitly. That mismatch let a two-sentence form ("The gap is not in the content. It is not in the data model.") survive the humanizer's first pass. All three locations now agree that two consecutive negation sentences is the trigger, with the gap-and-data-model case added as the canonical example.

### 6. Social card

A 1200×630 Open Graph SVG was generated at `mx-outputs/mx-site/blog/assets/typo3-and-mx-readiness-social.svg`, matching the existing CogNovaMX social-card pattern (blue accent bar, eyebrow `PLATFORM READINESS`, two-line title, subtitle "Most of the way there by default. The rest is configuration.", author and branding). Valid XML, no `&middot;` / `&mdash;` / `&nbsp;` traps.

### 7. Stale festival-pitch PDF cleared (flagged for review)

`mx-outputs/pdf/the-gathering-festival-pitch.pdf` was left behind by the sponsorship-pitch retirement on 17 May. The deletion was committed early in the session framed as a stale artefact after the canonical-sponsor consolidation, but that framing was incorrect: `festival-pitch.md` is a distinct doc from `canonical-sponsor.md` (one is a Gathering festival pitch, the other a sponsor briefing), and the festival-pitch source markdown is still the live input for the MozFest 2026 submission. The case is captured in REMINDERS line 118 with three resolution options, and the close-out learning was added to LEARNINGS.md.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (mx-outputs) | 8 |
| Commits (hub) | 9 |
| Repositories touched | 2 (hub + mx-outputs) |
| Cloudflare cache purges | 5 |
| New drafts on mx-site | 1 (TYPO3-and-MX, ~1,200 words) |
| New assets on mx-site | 1 social SVG (1200×630) |
| Voice passes against the draft | 2 (humanizer, then audit-specificity) |
| House-style rule tightenings | 1 (negation-pivot threshold) |
| Stale artefacts removed | 1 PDF (flagged for review) |

---

## Why It Matters

The TYPO3 piece is the first time we've packaged a platform-specific MX-readiness verdict for a public audience. It does two business jobs at once: it gives the Boye CMS Summit / TYPO3-community audience a public artefact to anchor on, and it demonstrates the Web Audit Suite's pattern-recognition asset (the platform fingerprint registry described in the business plan) as a tangible deliverable rather than an abstract claim. The framing is deliberately vendor-neutral so the same template can be reused for AEM, Edge Delivery Services, WordPress, and headless stacks as those audit patterns mature.

---

## The Insight

Two insights from this segment, both about voice rather than TYPO3 itself.

The first is that a "generic" article voice and an "audit-grounded" article voice look almost identical at the prose level but read completely differently in business terms. The post's first humanizer-clean version made the same architectural argument with the same numbers as the audit-grounded version, but the audit-grounded version reads as authority because every claim has a corresponding line in the audit data. The lesson is that voice-pass tooling will not catch the difference; only an interview question ("is this specific to the audit or generic to the platform?") catches it. Worth adding to the humanizer skill or to the audit-report SOP as a check.

The second is that the negation-pivot rule had a self-cancelling bug. The §6 ban list explicitly named two-sentence forms ("It is not X. It is Y.", "X is not Y. X is Z.") as forbidden, but two downstream cross-references (the §9 Maxine-overlay note and the humanizer skill bullet) called the threshold "three or more". The humanizer pass walks the bullet list, not the §6 prose, so the two-sentence form slipped past until the user flagged it explicitly. Three places now agree. Sort of insightful: every rule-cluster needs a single authority and a verification path that doesn't depend on the reader reading the long prose.

---

## Next Steps

- Promote `typo3-and-mx-readiness.html` from `drafts/` to `blog/` after Tom's review (social SVG is already in place).
- Decide whether the post should name the client (Leica Microsystems) explicitly on promotion, or stay with the generic enterprise-TYPO3 framing currently in the draft.
- Resolve the festival-pitch PDF deletion: regenerate from the live markdown, or confirm `the-gathering-mozfest.pdf` as the canonical artefact, or revert.
- Adjacent platforms (AEM, EDS, WordPress) deserve the same audit-grounded treatment as their fingerprints accumulate; the post is template-shaped for that.
- Consider adding an "audit-grounded vs platform-generic" interview question to the humanizer or audit-report skill so the rewrite-needed signal surfaces without the user having to flag it.

---

## Commit Log

### mx-outputs

| Hash | Description |
|------|-------------|
| `81e7e70` | Remove stale festival-pitch PDF (flagged for review) |
| `d4b71dc` | Add TYPO3 and MX readiness draft + drafts index card |
| `488602e` | Directors report (2026-05-19 afternoon, v1.0) |
| `453b4fc` | Regenerate index: TYPO3 draft + report + recent PDFs |
| `7deedbf` | Add social card for TYPO3-and-MX readiness draft |
| `03e4b79` | TYPO3 draft: add hostile-web third-failure-mode paragraph |
| `aa34ff7` | TYPO3 draft: humanizer pass |
| `0323387` | TYPO3 draft: anchor gap-and-fix sections in the actual audit |
| `_pending_` | Directors report v1.1 (this commit) |

### Hub

| Hash | Description |
|------|-------------|
| `aa4622d7` | Bump mx-outputs: TYPO3 draft + festival PDF + report |
| `f0b0187c` | Docs: CHANGELOG + REMINDERS updates |
| `1c72534e` | Learnings: adopting pending working-tree deletions without verifying intent |
| `856f6d70` | Bump mx-outputs: README index regen |
| `46b8ec40` | Bump mx-outputs: social card |
| `b37d9637` | Bump mx-outputs: TYPO3 draft hostile-web paragraph |
| `97893bb7` | Bump mx-outputs: TYPO3 draft humanizer pass |
| `5ede8fb1` | Bump mx-outputs: TYPO3 draft audit-specific rewrite |
| `61db6be2` | Writing style + humanizer: tighten negation-pivot rule to two-sentence threshold |
| `_pending_` | Bump mx-outputs (v1.1 report) + CHANGELOG (this segment close-out) |
