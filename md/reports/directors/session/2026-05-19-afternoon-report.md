---
title: "Co-Directors Report — TYPO3 readiness draft + stale PDF cleanup"
description: "Afternoon segment: drafted the TYPO3-and-MX readiness blog post on mx-site as a noindex draft, and cleared the stale festival-pitch PDF left behind by the canonical-sponsor consolidation."
author: "Tom Cranstoun"
created: 2026-05-19
modified: 2026-05-19
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-19-afternoon-report.md
---

# Co-Directors Report — TYPO3 readiness draft + stale PDF cleanup

**Date:** 19 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

A short, single-theme session. We turned the Leica audit's TYPO3 findings into a public-facing blog draft (noindex, in `mx-outputs/mx-site/blog/drafts/`) framed generically so the post can be promoted without naming the client. The piece argues that TYPO3 is, on the evidence of the audit, one of the better-suited enterprise CMSes for the MX layer, and that the remediation list is a configuration change rather than an architecture change. The session also cleared a stale `the-gathering-festival-pitch.pdf` artefact that had been left in `mx-outputs/pdf/` after the earlier sponsorship-pitch retirement.

---

## What Was Done

### 1. TYPO3-and-MX readiness blog post (draft)

New post drafted at `mx-outputs/mx-site/blog/drafts/typo3-and-mx-readiness.html` (~1,080 words, six sections, noindex/nofollow, blocked from sitemap and llms-discovery by the existing drafts policy). Structure mirrors the published-blog template: vignette opener, balanced "what TYPO3 gets right" (server-side rendering, JSON-LD in head, full security headers, BreadcrumbList validity, ten-locale hreflang, heading quality / 66% body-content ratio), a tight diagnosis of where the MX gap sits (`@type: WebPage` on article pages, required properties missing, governance layer absent), and a prioritised remediation list (Fluid template `@type` upgrade by page type, surface TCA fields into JSON-LD, Open Graph article-type upgrade, Site Set generator for `llms.txt`, named AI crawlers in `robots.txt`, three template-layer accessibility fixes that double as machine-readability fixes). Closes on the framing that the same disciplines that produce good editorial publishing produce good agent readability — the platforms that struggle in agent audits tend to be the ones that delegated structure to the client side.

The drafts index card was added at the top of `mx-outputs/mx-site/blog/drafts/index.html` so the post surfaces in internal preview.

### 2. Stale festival-pitch PDF cleared

`mx-outputs/pdf/the-gathering-festival-pitch.pdf` was left behind by the sponsorship-pitch retirement on 17 May (when `canonical-sponsor.md` became the single sponsor doc). Deleted in its own commit so the deletion-cascade history is clean.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 2 |
| Files changed | 3 |
| Lines added | +302 |
| Lines removed | −3 |
| Repositories | 1 (mx-outputs) |
| New drafts on mx-site | 1 |
| Stale artefacts removed | 1 PDF |

---

## Why It Matters

The TYPO3 piece is the first time we've packaged a platform-specific MX-readiness verdict for a public audience. It does two business jobs at once: it gives the Boye CMS Summit / TYPO3-community audience a public artefact to anchor on, and it demonstrates the Web Audit Suite's pattern-recognition asset (the platform fingerprint registry described in the business plan) as a tangible deliverable rather than an abstract claim. The framing is deliberately vendor-neutral so the same template can be reused for AEM, Edge Delivery Services, WordPress, and headless stacks as those audit patterns mature.

---

## The Insight

The remediation list for a well-built TYPO3 site is shorter than I had assumed before the audit. The data that AI agents need to cite an article (author, publication date, content type, subject) is already captured in TYPO3's TCA as part of the normal editorial workflow. The gap is purely one of markup surfacing — surfacing what editors have already captured, in the place where the machine reader looks. That makes TYPO3 a much easier sell as an MX-ready platform than I would have argued a month ago.

---

## Next Steps

- Promote `typo3-and-mx-readiness.html` from `drafts/` to `blog/` after Tom's review, generate the Open Graph SVG (`typo3-and-mx-readiness-social.svg`), and re-run the discovery sync.
- Consider whether the post should name the client (Leica Microsystems) explicitly on promotion, or stay with the generic enterprise-TYPO3 framing.
- Adjacent platforms (AEM, EDS, WordPress) deserve the same treatment as their audit fingerprints accumulate — the post is template-shaped for that.

---

## Commit Log

| Hash | Description |
|------|-------------|
| `81e7e70` | Remove stale festival-pitch PDF after canonical-sponsor consolidation (mx-outputs) |
| `d4b71dc` | Add TYPO3 and MX readiness draft post + drafts index card (mx-outputs) |
| `_pending_` | Hub pointer bump + report (this commit) |
