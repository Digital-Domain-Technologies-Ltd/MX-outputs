---
title: "Co-Directors Report — Evening 13 May 2026: Frankfurt write-up lands, regulatory framing tightened, provenance gap named"
description: "Evening segment publishes the CMS Summit 26 write-up, adds the geo-and-mx positioning paper, lands a slowest-page audit probe, revises the regulatory paragraph to remove any implied compliance grant, and names the provenance gap as the structural reason ranking systems keep withdrawing rich-result rewards."
author: "Tom Cranstoun"
created: 2026-05-13
modified: 2026-05-13
version: "1.1"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-13-evening-report.md
  purpose: "Evening segment publishes the CMS Summit 26 write-up, adds the geo-and-mx positioning paper, lands a slowest-page audit probe, revises the regulatory paragraph to remove any implied compliance grant, and names the provenance gap as the structural reason ranking systems keep withdrawing rich-result rewards."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Evening 13 May 2026: Frankfurt write-up lands, regulatory framing tightened, provenance gap named"]

---

# Co-Directors Report — Evening 13 May 2026: Frankfurt write-up lands, regulatory framing tightened

**Date:** 13 May 2026 — Evening
**Segment:** evening (since 17:00)

---

## Summary

The CMS Summit 26 Frankfurt write-up is now live on mx.allabout.network, paired with a new positioning paper at `mx-canon/ssot/papers/geo-and-mx.md` that gives the MX-vs-GEO comparison its own canonical home. The audit pipeline gained a slowest-page re-probe so every audit report now carries a real server-response verdict rather than a templated absence-sentence. The session closed with a precise revision to the blog's regulatory paragraph: MX and Reginald do not grant compliance with the EU Accessibility Act, EU AI Act, or digital-records legislation, and saying so explicitly matters for the compliance and audit audience that will read the post.

---

## What Was Done

### 1. CMS Summit 26 Frankfurt write-up published

The conference write-up is live with the geo-and-mx positioning paper underneath it. The blog post links into the paper for readers who want the comparison argument laid out in full. The aspell wordlist absorbed the proper nouns from the conference write-up so the spell gate stays clean.

### 2. Regulatory paragraph revised

The original blog paragraph said MX "produces evidence against" the EU Accessibility Act, EU AI Act, and digital-records legislation. That phrasing risks reading as a compliance grant. The revised paragraph names the actual division of labour: compliance is a legal duty of the organisation; what MX and Reginald supply is documentation that is structured, machine-readable, tamper-evident, and verifiable. This is the framing compliance teams and auditors actually need to see.

### 3. Audit pipeline slowest-page re-probe

The audit collector now folds three cache-busted GETs per slowest and median URL into collect step 8a. The resulting verdicts (good/acceptable/slow) thread through `preflight-findings.json` into the LLM phases. Both the web-audit-suite and ecommerce templates carry a Server Response Stability section. When no data is available the section collapses to one graceful sentence rather than an empty heading.

### 4. Hygiene: geo-and-mx frontmatter + LEARNINGS

The new geo-and-mx paper had its frontmatter normalised to the canonical MX schema after Maxine drafted it with the older layout. A LEARNINGS entry captures the spelling-sweep failure mode where `spell:sweep:apply` blindly absorbed entity-stripping artefacts.

### 5. Provenance-gap post + canon lockstep

A second blog post landed at the close of the segment: "The provenance gap, and why Google keeps closing it the hard way." The argument: SEO, GEO and AEO each describe a page but do not validate it, FAQ schema was deprecated because publishers gamed it, and the same dynamic will work through every high-value schema type as the weight on structured data grows. The post names the readiness ladder — Discovery, then Citation readiness — as the concrete MX answer. The same framing was propagated into the canon in the same segment: free-book chapter-00 (v2.7) gained a provenance-gap paragraph after the GEO contrast, and Protocols chapter-10 (v1.1) gained a full "The Provenance Gap" section between Death of the Click and the Markdown Converter Problem. Index card and sitemap entry for the post are wired up on mx-site.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (hub) | 6 + 1 pending |
| Commits (mx-outputs) | 6 |
| Files changed (hub) | 20 + 2 manuscripts |
| Lines added (hub) | +368 + new manuscript paragraphs |
| Lines removed (hub) | −492 |
| Repositories touched | 2 (hub, mx-outputs) |
| New canonical files | 1 (`mx-canon/ssot/papers/geo-and-mx.md`) |
| New blog posts | 2 (CMS Summit write-up; the-provenance-gap) |
| Manuscripts updated | 2 (free-book ch00 v2.7; Protocols ch10 v1.1) |
| Stale drafts removed | 1 (`why-llms-dont-execute-javascript.md`) |

---

## Why It Matters

Three strands converge in this segment. The Frankfurt write-up is the first long-form public artefact that names MX, REGINALD, and the Gathering together as a single proposition, with the geo-and-mx paper carrying the technical argument underneath. The regulatory revision then locks down the compliance language so anyone forwarding the post to legal or audit colleagues reads the same disclaimer twice — once in the prose, once in the underlying paper. The provenance-gap post that closed the segment gives the SEO/GEO/AEO conversation a single, memorable label for the structural problem ranking systems keep withdrawing rich-result rewards to manage; the same framing is now in two manuscripts so the next reader who picks up either book hits the argument in the same shape. The audit-pipeline probe is unrelated but useful: every audit deliverable from now on carries verifiable server-response evidence, which strengthens the "we measure, we don't estimate" stance for client engagements.

---

## The Insight

"Does not address" and "does not engage with" sound similar but read very differently in a compliance context. The first implies a gap MX fills; the second implies a category MX sits adjacent to. Saying MX is "built to support" rather than "addresses" the regulatory regimes is the precise framing — it acknowledges that the legal duty stays with the organisation while making clear what MX actually contributes (the verifiable documentation layer). This was a small wording change with a large meaning change.

---

## Next Steps

- Cross-check the same framing appears in the Reginald investor one-pager and the Gathering sponsor pack so the compliance-disclaimer language is consistent across all four facets.
- Review whether the geo-and-mx paper should be linked from `mx-outputs/mx-site/llms-understanding.txt` as part of the standard proposal corpus.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 4039b7e (mx-outputs) | Revise regulatory paragraph in CMS Summit write-up |
| c643163 (mx-outputs) | Fix CMS Summit write-up: 'thanks' to 'thoughts' in opening |
| ad81fed (mx-outputs) | Directors report 2026-05-13 afternoon v1.1: add audit probe + blog publish |
| cd604ad (mx-outputs) | Add Tom photo to REGINALD profile assets |
| 82cced8 (mx-outputs) | Publish CMS Summit 26 Frankfurt write-up |
| 3d89be01 (hub) | Bump mx-outputs: spelling fix in CMS Summit write-up |
| b54b4801 (hub) | Normalise geo-and-mx paper frontmatter to MX schema |
| eb4c4335 (hub) | LEARNINGS 2026-05-13 evening: spell:sweep:apply blindly absorbs entity-stripping artefacts |
| c5df1f1d (hub) | CHANGELOG 2026-05-13 evening: broaden header + add blog publish, paper, wordlist, draft removal entries |
| 0c2113bb (hub) | Publish CMS Summit 26 write-up + geo-and-mx positioning paper |
| fcb893ce (hub) | Audit pipeline: slowest-page re-probe at collect step 8a |
| 57bb133 (mx-outputs) | Publish blog post: the provenance gap, and why Google keeps closing it the hard way |
| _pending_ (hub) | Manuscripts: free-book v2.7 and Protocols ch10 v1.1 absorb provenance-gap framing |
| _pending_ (hub) | Bump mx-outputs + add evening directors report |
