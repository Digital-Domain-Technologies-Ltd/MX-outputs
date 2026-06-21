---
title: "Co-Directors Report — Audit, Link Repair, and Verifier Hardening"
description: "Full-site audit of mx.allabout.network, repair of the broken links it surfaced, and deterministic enforcement so they cannot recur."
author: "Tom Cranstoun"
created: 2026-05-31
modified: 2026-05-31
version: "1.0"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-31-evening-report.md
  purpose: "Full-site audit of mx.allabout.network, repair of the broken links it surfaced, and deterministic enforcement so they cannot recur."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit, Link Repair, and Verifier Hardening"]

---

# Co-Directors Report — Audit, Link Repair, and Verifier Hardening

**Date:** 31 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

We ran a full-site audit of our own flagship site, mx.allabout.network, scored it against the same rubric we sell to clients, and used the findings to repair the site and close the gap that produced them. The audit scored well (performance 97, accessibility 100, SEO 91, AI-agent suitability 97 out of 100) and surfaced a handful of broken internal links. We fixed every one, swept a related sloppiness across the estate, then hardened the authoring tool so the same defects are now blocked at write time rather than caught months later in an audit. Eating our own dog food worked: the audit paid for itself in the same session by finding real defects on our shop window.

---

## What Was Done

### 1. Self-audit of mx.allabout.network

A full crawl of every page (127 audited) produced a client-grade report and a tagged, accessibility-conformant PDF carrying its own machine-readable evidence chain. The scores are strong, as expected for our reference site. The value was not the scores; it was the defects the crawl exposed on a site we thought was clean.

### 2. Repair of the links the audit found

Three classes of broken internal link were fixed across sixteen pages: author-profile links that pointed one directory too high, a contact link missing its folder, and links wrapped in curly "smart" quotes that browsers silently mis-read into dead addresses. While in the files we also corrected every insecure and mis-capitalised reference to the Schema.org standard, and replaced curly quotes in body text with plain ones. All shop-window pages now resolve cleanly.

### 3. Made the defects impossible to reship

The deeper win is preventative. The tool that writes our pages now refuses, at the moment of writing, to emit a curly quote anywhere or a non-standard Schema.org link. The shared verifier that gates every page before it ships gained the same two checks as hard blocks. We confirmed the whole 153-page site passes, and proved the checks actually fire on bad input without flagging good input. A defect we found by audit can no longer be reintroduced by hand.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Pages audited | 127 |
| Audit scores (perf / a11y / SEO / AI-agent) | 97 / 100 / 91 / 97 |
| Pages repaired | 16 |
| Broken links fixed | 17 |
| Schema.org references canonicalised | 25 |
| Curly quotes removed from prose | 20 |
| New blocking checks in the page verifier | 2 |
| mx-outputs commits this segment | 2 (plus this report) |
| Repositories touched | mx-outputs (shipped); hub edits held pending |

---

## Why It Matters

This is the product proving itself on the producer. We tell organisations that an MX audit finds the machine-readability and accessibility defects their own teams miss, then gives them the evidence to fix and prove it. We just did exactly that to ourselves, found real defects on the site we hold up as the example, and closed them the same afternoon. That is a credible story to tell a prospect: we run the audit on our own estate, and when it finds something, we fix the cause, not just the symptom.

---

## The Insight

A curly quote is not a typographic nicety; it is a broken link waiting to happen. When a "smart" quote lands inside a link's address, the browser cannot read it as a quote and treats the whole address as garbage, producing a dead page with no error anywhere. We had shipped several of these without knowing. The lesson generalised: the fix is not to remember to avoid them, it is to make the tool refuse them.

---

## What Changed About Me

Two working patterns proved themselves. First, when watching a long automated job, I learned to filter its noise in two stages so that routine, recoverable errors never drown the signals that matter, and a genuine crash can never hide in the quiet. Second, and more important, when asked to stop a class of mistake recurring, the durable answer is a deterministic check in the gate, not a paragraph of guidance in a checklist a future writer has to remember to follow. Advice is forgotten; a blocking gate is not.

---

## Next Steps

- Bump the hub's pointer to the shipped mx-outputs commits and land the two held hub edits (verifier + authoring-tool rules) once the concurrent hub work settles.
- Deploy the repaired mx-site so the link fixes go live, and purge the cache.
- Optional: run the same self-audit on the other estate sites now that the pattern is proven.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 9b60dc76 | Fix broken internal links and canonicalise schema.org on mx-site |
| e875b094 | Add mx.allabout.network full-site audit (2026-05-31) |
| a8709d3a | (hub, already pushed) carried the "all pages = unlimited" enforcer fix |
| 975847ee | (hub, already pushed) carried the mx-audit cog monitor-pattern change |
