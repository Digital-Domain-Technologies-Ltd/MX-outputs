---
title: "Co-Directors Report — HTML hygiene gate, div soup sweep, the-gathering section"
description: "Evening segment: shipped a site-wide HTML hygiene gate, completed the semantic-HTML div-soup remediation, and published the new The Gathering community section."
author: "Tom Cranstoun"
created: 2026-05-04
modified: 2026-05-04
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-04-evening-report.md
---

# Co-Directors Report — HTML hygiene gate, div soup sweep, the-gathering section

**Date:** 4 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

Three threads landed in this segment. First, an HTML hygiene gate now blocks two regression classes (trailing-slash drift on top-level section links, bare layout divs without role attributes) at write time, with a matching step-commit gate so external edits cannot reintroduce them. Second, the semantic-HTML div-soup remediation finished across every published page, replacing wrapper divs with proper roles or semantic elements. Third, the public site gained a new The Gathering community section: a landing page and four child pages covering how the review cycle works, the open drafts, the full sponsorship programme, and how to take part. The section is linked from every page on the site through a new top-nav entry.

---

## What Was Done

### 1. HTML hygiene gate

A new `scripts/check-html-hygiene.js` validator codifies two rules that have caused real audit findings: top-level section links must use the trailing-slash form (`/about/`, `/blog/`, `/books/`, `/learn/`, `/services/`), and known layout-class divs (`section-inner`, `mx-explanation`, `introduction-text`, etc.) must either be the right semantic element or carry an explicit `role` attribute. The script ships with three modes: per-file (used by the new `pre-write-html-hygiene.sh` PreToolUse hook), `--staged` (suitable as a pre-commit hook), and `--all` (used by step-commit Step 8 against the entire `mx-site/` corpus). The hook fails closed: if the validator finds a violation, the write is rejected with the line number and a fix suggestion. Pedagogical example HTML inside `<pre>`/`<code>` blocks is exempt by design — those are content, not layout.

### 2. Div-soup semantic upgrade across the site

The audit's div-soup detector flags bare wrapper divs as "machines lose structural context". Two earlier sweeps had handled the simplest cases; this segment closed the long tail. The first commit converted single-class wrappers across the site (introduction-message, mx-explanation, section-inner) to proper semantic elements (`<p>`, `<aside>`, or `<div role="presentation">`). The second commit caught the multi-class variant (`<div class="section-inner blog-page">`) that the first sweep had missed because its regex only matched single-class attributes. With the third commit closing 404, cog, and the home page, every published page now passes the new hygiene gate.

### 3. The Gathering section published

The site previously described The Gathering only inside the manifesto post; sponsorship was buried alongside it. This segment carved out a dedicated section at `/the-gathering/` with five pages: a landing page describing what The Gathering is and linking out to the manifesto for the full programme rationale; a how-it-works page walking the authorship → Stream review → refinement → ratification cycle; a draft-notes page listing every open MX draft (the field-definition pattern note as primary, plus nine sister notes); a sponsorship page carrying the full programme detail (cash and in-kind tiers, speaking invitations, current sponsors); and a join page covering how human and AI practitioners take part.

The new section is reachable from every page on the site: a "The Gathering" entry was inserted into the main nav between Blog and About across all 73 site pages, and a matching entry was added to the footer Explore list across all 70 footers, with two distinct footer variants handled correctly (standard 4-item and blog 5-item-with-TG-Community). The sitemap was updated with five new URLs at the appropriate priority levels. Eight technical terms (`BCP`, `Namespace`, `SPDX`, `approvers`, `composable`, `kramdown`, `rfc`, `runnable`) were added to the project wordlist so the new pages pass the dual-dialect spell check.

### 4. Cloudflare worker and wellknown registry refresh

Earlier in the segment, the allaboutv2 Cloudflare worker was updated to serve `/.well-known/llms.txt` from the root, and the public deploy procedure was switched from a CI workflow to a manual `npx wrangler deploy` runbook (the CI path had been brittle for weeks; manual deploy with curl verification is now the documented method). The well-known registry catalogue gained nine additional IANA paths and a quality column linking each entry back to its IANA registry pointer, with the Appendix C and Appendix M pages updated in lockstep.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (hub) | 5 |
| Commits (mx-outputs) | 6 |
| Commits (allaboutv2) | 2 |
| Files changed (hub) | 18 |
| Files changed (mx-outputs) | 132 |
| Lines added (hub) | +427 |
| Lines removed (hub) | −19 |
| Lines added (mx-outputs) | +2148 |
| Lines removed (mx-outputs) | −224 |
| New HTML pages | 5 (The Gathering section) |
| Site-wide nav links updated | 73 (header) + 70 (footer) |
| New hygiene rules enforced | 2 (trailing-slash, layout-div role) |
| New hooks installed | 1 (`pre-write-html-hygiene.sh`) |
| New step-commit gates | 1 (`check-html-hygiene.js --all`) |
| Wordlist entries added | 8 |
| Sitemap URLs added | 5 |

---

## Why It Matters

The hygiene gate is the structural answer to a recurring class of audit finding. Each previous div-soup or trailing-slash regression had to be discovered by the audit pipeline, written into a remediation report, and then fixed by hand. Codifying the rules as a write-time hook turns a recurring remediation cost into a one-time gate, and the step-commit `--all` invocation means external edits or rebases cannot silently reintroduce the violations. The same pattern (write-time hook + step-commit corpus check) is now available for the next class of regression we discover.

The Gathering section addresses a different gap. Sponsors who wanted to back the work had to find the relevant paragraphs inside a long-form manifesto blog post; prospective contributors had no obvious page to land on. The new section gives both audiences a clear entry point, and the site-wide nav sweep means anyone arriving on any page can find it in one click. Sponsorship enquiries can now be referenced by URL in outreach.

---

## The Insight

A site-wide content sweep is two operations, not one. The first is the find-and-replace that adds the new structure. The second is the verification that the change actually landed everywhere it was supposed to — counting files modified by the script and counting files in `git status` are not the same number, because pre-commit hooks, parallel commits, or partial earlier sweeps can absorb part of the work into other history. Today's sweep illustrated the pattern: 73 files were modified by the Python script, but only four root-level pages still showed pending changes when `git status` ran, because a parallel hygiene commit had captured the rest. The lesson is to verify presence on disk (`grep -l 'the-gathering' | wc -l`) as the source of truth for "did the sweep finish", not the commit-time diff.

---

## Decisions Made

- HTML hygiene rules enforced at three layers: pre-write hook (per-file, fail-closed), step-commit Step 8 gate (`--all`, blocks push), and the existing audit pipeline (post-hoc detection). The hook is the cheapest layer; the corpus check catches drift; the audit catches anything new.
- The Gathering nav slot placed between Blog and About rather than at either end. Reasoning: About sits last as the org-info anchor; Gathering sits with the other community-facing items.
- Manifesto left fully self-contained — the new landing page links out to it, but the manifesto remains the long-form canonical pitch. Tom's call.
- Sponsorship page carries the full programme detail (tiers + in-kind + speaking + current sponsors + how funds are used) rather than being a high-level pointer to a separate enquiry flow. Tom's call: investors and prospective sponsors get one page, not two.

---

## Open Questions

- The blog-variant footer carries both the new internal `/the-gathering/` link and the existing external `TG Community` link to `tg.community`. They reference distinct things (our portal vs. the community platform proper) but the redundancy may read as clutter to first-time visitors. Defer until usage data suggests one of them is the dominant click target.

---

## Next Steps

- Monitor the new `/the-gathering/sponsorship.html` page for sponsorship enquiries via `info@cognovamx.com`. The page goes live with the next mx-outputs deploy.
- Cloudflare cache purge after the final push — the new section, sitemap, and 73 modified pages all need to be cleared.
- Consider a brief sponsor-outreach communication referencing the new dedicated URL.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 0e4a6f45 | (hub) wellknown: +9 IANA paths, quality column, registry pointer; appendices updated |
| 2aac9d57 | (hub) Bump allaboutv2: cloudflare worker serves /.well-known/llms.txt from root |
| 004150cf | (hub) Bump allaboutv2: remove CI deploy workflow + add manual DEPLOY.md procedure |
| 9c288835 | (hub) html-writer template + submodule pointer bumps: div soup semantic upgrades |
| d51ee06f | (hub) HTML hygiene gate: pre-write hook + step-commit gate + script + skill rules |
| 16f3d8b | (mx-outputs) Semantic HTML fix: convert bare div soup selectors flagged by audit |
| 3aab63f | (mx-outputs) Semantic HTML: add role=presentation to multi-class section-inner divs |
| 660b7ce | (mx-outputs) Add /the-gathering/ section: landing + 4 children, plus root-page nav sweep |
| _pending_ | (hub) the-gathering submodule pointer + wordlist additions + this report — Step 3 commit |
