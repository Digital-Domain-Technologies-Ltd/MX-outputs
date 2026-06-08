---
title: "Co-Directors Report — mx.community PRD + MX Compatible badge on every PDF"
description: "Drafted the mx.community PRD and shipped a visible MX Compatible badge with QR code on every PDF the pipeline produces."
author: "Tom Cranstoun"
created: 2026-05-27
modified: 2026-05-27
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-27-afternoon-report.md
  purpose: "Drafted the mx.community PRD and shipped a visible MX Compatible badge with QR code on every PDF the pipeline produces."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - mx.community PRD + MX Compatible badge on every PDF"]
---

# Co-Directors Report — mx.community PRD + MX Compatible badge on every PDF

**Date:** 27 May 2026 — Afternoon
**Segment:** afternoon (since noon)

---

## Summary

Two pieces of work landed this afternoon. We drafted the initial PRD for **mx.community**, a fifth surface in the MX estate aimed at commercial practitioners and explicitly distinct from The Gathering. We also added a visible **MX Compatible badge** to every PDF the pipeline produces: a composite SVG mark with a per-PDF QR code that resolves to a new public explainer page at mx.allabout.network/learn/mx-for-pdfs. The badge surfaces what the metadata already declares (tagged structure, MX XMP, provenance) so that a reader holding the printed page can see, at a glance, that the document carries the evidence chain that the EAA and the EU AI Act expect.

---

## What Was Done

### 1. mx.community PRD (initial draft)

Captured the shape, audience, and architectural separation of mx.community. Locked in three decisions at draft stage:

- **CogNovaMX operates it** (DDT Ltd as the legal entity), which keeps The Gathering vendor-neutral.
- **Static-blog + comments-worker pattern**, reusing the mx-site infrastructure rather than standing up Discourse.
- **Open read, registered to post** access at launch.

Deferred to Section 16 (Open Questions): the identity engine choice, the comments-engine engine choice, editorial-board composition, the Code of Conduct, the founding cohort, and the open question about whether mx.community becomes a fifth named facet in the four-facet model.

The PRD landed at `mx-canon/ssot/papers/mx-community-prd.md` alongside the Reginald v-next PRD. It runs to roughly 400 lines and follows the structural pattern of the Reginald PRD (problem statement, audience, scope, architecture, relationships to other facets, open questions). A `/humanizer` pass tightened the prose; the PDF render is the first artefact to carry the new badge.

### 2. MX Compatible badge for the PDF pipeline

Built the badge end-to-end. Every PDF the `mx.pdf.sh` pipeline produces now carries:

- A composite SVG mark (MX wordmark + "Compatible" gold accent + tagged / provenance / attested strap line).
- A per-PDF QR code linking to a universal explainer page, with a URL fragment that identifies which document was scanned.
- A 50-word prose paragraph that names what the badge means.
- A conformance line listing ISO 14289-1 Level 2, pdfuaid:Part=1, and the three AI-governance regimes the provenance serves.

Cover-bearing doctypes (`report`, `agreement`, `info-doc`, `document`, `book`, `free-book`) get the badge zone under the H1 title, on the same page. No-cover doctypes (`letter`, `blog-post`, `chapter`, `briefing-2col`) get a full tail block on the last page. Opt-out via a frontmatter flag for any document that is not ready to be claimed as MX Compatible.

The work needed a small architectural fix in passing: the hub's shared `_base.css` was never actually loaded into PDFs (the `@import` inside each doctype CSS file does not resolve at render time because the CSS is inlined into a temp-file HTML). The orchestrator now passes `_base.css` explicitly, which both lights up the badge styling and brings the historic link-colour-black rule back into play for printed delivery. The canonical renderer's CSS layering is now `heredoc base → _base.css → doctype CSS → paper-size override`, in that order, with later rules winning by specificity.

The explainer page at `mx-outputs/mx-site/learn/mx-for-pdfs.html` (about 1,200 words) lays out three things in turn: what the PDF carries, why it matters under EAA and the AI-governance regimes, and how to verify each claim with commands the reader can run themselves (`qpdf --json`, `exiftool -XMP-pdfuaid:Part`, `exiftool -b -XMP-mx:ProvenanceAiPayload`). It is the soft-landing for anyone who scans the QR on a printed page or in a PDF reader.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 2 (1 mx-outputs, 1 hub pending) |
| New files | 6 (PRD, badge SVG, explainer HTML, two pipeline modules, the first badged PDF) |
| Modified files (this session) | 7 (CLAUDE.md, both mx.pdf.sh scripts, _base.css, package.json, package-lock.json, mx-outputs sitemap.xml + llms.txt) |
| New dependency | `qrcode` v1.5.3 at hub root |
| Doctypes covered | 10 (6 cover + 4 tail) |
| First PDF carrying the badge | mx-community-prd.pdf, 521 KB |

---

## Why It Matters

We have been saying for months that an MX PDF is structurally different from an ordinary PDF: tagged accessibility tree, AI-governance provenance, machine-readable identity. Until today, that claim was invisible to a human reading the file. The badge changes that. A board member, a regulator, an agency partner can now see the claim on the cover, scan the QR, and read a public explainer that walks them through the verification commands. The MX Compatible mark becomes a recognisable signal in the marketplace, in the same register as the EAA conformance declaration or the W3C HTML5 logo, and it carries the trust the metadata already supports.

The commercial layer that drops out of this is small but real: every PDF we send out in client engagements, every book we publish, every audit report, every directors' segment report (including this one when it is rendered to PDF), carries the badge automatically. That is reach without effort.

---

## The Insight

`_base.css` was wired into every doctype via `@import url("_base.css")` but never actually loaded at render time. The @import is a build-time hint that fails silently when the CSS is inlined. This had been true for months and nobody noticed because the heredoc base CSS in the canonical renderer covered the same ground. Today's badge work surfaced the gap because the badge styling lived in `_base.css` and the badge would not render properly until that load path was fixed. One refactor (passing `MX_PDF_BASE_CSS` explicitly) closed the gap and got the badge to land in the right place. Worth keeping in mind when future shared CSS rules need to take effect across all doctypes — the path goes through the orchestrator's env vars, not through `@import`.

---

## Decisions Made

- mx.community will be CogNovaMX-operated, not a separate community-owned entity. This decision is locked at draft-PRD stage on the grounds that a separate body would recreate the Gathering-separation problem inside a new entity.
- The MX Compatible QR fragment encodes the source-content SHA, not the output PDF SHA. The source SHA is already in provenance, ties the QR uniquely to the document, and survives re-renders. A future verifier page can read the fragment and surface the provenance chain.

---

## Next Steps

- Deploy the mx-outputs commit so the explainer page resolves at `https://mx.allabout.network/learn/mx-for-pdfs.html` (done as part of this `/step-commit` push).
- Walk every existing PDF in `mx-outputs/pdf/` through `mx.pdf.sh` to back-fit the badge. Optional and on-demand; the next time any of them re-render the badge lands automatically.
- Author the brand guide for mx.community (`mx-outputs/brand/mx-community-brand-guide.html`) when Tom is ready to ratify the PRD and start the site scaffold.
- Decide identity engine and comments engine for mx.community (Section 16 of the PRD).

---

## Commit Log

| Hash | Description |
|------|-------------|
| b808926 (mx-outputs) | Add MX Compatible badge assets + mx-for-pdfs explainer + first badged PDF |
| _pending_ (hub) | Add MX Compatible badge pipeline + mx.community PRD |
