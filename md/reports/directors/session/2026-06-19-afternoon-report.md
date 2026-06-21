---
title: "Co-Directors Report - MX Graph, CRM Cross-linking, CMS Experts Intelligence, Peer Consensus Principle, and Audit Pipeline Fixes"
description: "Extended MX graph with temporal queries and 14 new fields; created CMS Experts community contact; cross-linked 11 CRM contacts; named and propagated the Peer Consensus over Expert Authority principle; fixed two audit pipeline bugs; renamed pagesAudited to htmlPagesAudited across 20+ files."
author: "Tom Cranstoun"
created: 2026-06-19
modified: 2026-06-19
version: "1.3"

type: report
tags: [directors-report, session, afternoon]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-19-afternoon-report.md
  purpose: "Extended the MX metadata graph with temporal query capability, 14 newly indexed fields including computed git-authoritative dates, and promoted the architecture doc to a first-class cog."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - MX Graph System: Temporal Queries and Field Expansion"]

---

# Co-Directors Report - MX Graph, CRM Cross-linking, CMS Experts Intelligence, and Peer Consensus Principle

**Date:** 19 June 2026 - Afternoon
**Segment:** Afternoon (since noon)

---

## Summary

The afternoon session covered three bodies of work. The first overhauled the MX metadata graph — the internal index that catalogues every folder and cog in the repository — making it answer operational questions it previously could not. A new temporal query tool lets an agent or operator ask "what did we do yesterday?" and receive a structured, enriched answer. Fourteen previously silenced fields were added to the graph, including a git-authoritative last-modified date. The second body of work turned the CMS Experts intelligence gathered in April into live CRM infrastructure: a community contact record was created from the value profile PDF, eleven individual contacts were cross-linked with a queryable membership attribute, and the graph can now answer "which of our CMS Experts contacts have gone quiet?" The third body of work named and propagated a new MX principle: Peer Consensus over Expert Authority, articulated by Janus Boye (Boye & Company) in a message received this afternoon. The principle is now canon — a named concept cog, an entry in principles.cog.md (34 principles total), a draft blog post, a Gathering governance note, updates to The Gathering's messaging documents, and propagation into all three book manuscripts.

---

## What Was Done

### 1. Temporal Query Capability (mx_graph_timeline)

A new MCP tool, `mx_graph_timeline`, answers "what happened in a time period" in two modes. The default mode queries the git log and returns a structured list of commits — message, author, date, and every changed file enriched with its graph node metadata — for any natural-language date expression: "yesterday", "last week", "last 7 days", or an explicit ISO date range. A second mode queries cogs and folders by their authored/modified dates, for questions like "what was created this week?" The date resolver handles British and American natural-language forms and the range logic is thoroughly tested. This is the first time an operator or agent in the system has had a deterministic, structured answer to "what did we work on recently?" without reading raw git output.

### 2. Field Coverage Expansion (14 New Indexed Fields)

A gap analysis found the graph indexed only about 29% of the canonical MX field dictionary on cog nodes. This session closed the most operationally valuable gaps. Fields added:

- **Routing fields** — `triggers` (the intent keywords that route agents to action cogs) is now indexed and searched by fulltext, making `mx_graph_query triggers:dream` work where it previously silently returned nothing.
- **Metadata fields** — `stability`, `domain`, `actionType`, `readingLevel`, `maintainer`, `conformsTo`, `topic`, `entities`, `expires` are all now indexed and queryable. `maintainer:cognovamx` finds all CogNovaMX-managed cogs; `conformsTo:allabout.network` finds cogs that declare standards compliance.
- **Computed fields** — `wordCount` (body word count, computed at build time) and `gitModified` (last git commit date, derived from a single batch git log pass at rebuild time) are stored on every cog node. `wordCount:<50` finds stub cogs; `gitModified:>=2026-06-01` is more reliable than the equivalent frontmatter date query because the git date cannot be wrong. Both support range operators alongside the existing date range operators.

The `getStaleNodes()` function (used by the `--stale` CLI flag and cockpit views) was updated to use the git-authoritative date rather than the frontmatter date alone.

### 3. Architecture Cog Promotion

The graph system's architecture document was a plain `.md` file — invisible to the cog registry and the graph itself. It was promoted to a proper `.cog.md` with the standard 5-line opening header, `triggers`, `dependencies`, `partOf`, and a `canonicalUri` that points to the new path. All references across CLAUDE.md, UBERCOG, and eight other cogs were updated. The cog registry was resynced. The architecture cog now describes the full new field surface, including the temporal query tools.

### 4. CMS Experts Community Contact and CRM Cross-linking

The April 2026 Boye & Co CMS Experts company value profile — a 14-page PDF covering revenue, staff, and customers across approximately 86 organisations — was converted into a live CRM record and wired into the graph.

**Community contact created.** A new contact record (`boye-co-cms-experts`) profiles the community as an organisation: market sizing (approximately $2.5 billion across the 81 CMS-industry members, excluding five enterprise-scale rows that dwarf the rest), member segments by geography and type, standout vendors by ARR, and the connection to CogNovaMX's conference and sponsorship pipeline.

**Eleven individual contacts cross-linked.** Every contact in the CRM whose employer is a CMS Experts member organisation received a new `x-mx-communityMemberships: [boye-co-cms-experts]` attribute. Five of those contacts were also missing the `cms-experts` tag, which was backfilled for consistency. The community record received an `x-mx-members` list pointing back to all eleven, enabling graph traversal in both directions.

**The query this enables.** Running `mx_graph_query x-mx-communityMemberships:boye-co-cms-experts` returns all eleven contacts. Filtering by `lastContact` surfaces the contacts that have gone quiet: Stuart Rex and William Borgbarthet (BloomReach, last contact March 2026), and David Strachan (HCL Software) and Chris Bryce (Dotfusion), both last contacted in April 2026. Those four are the immediate outreach priority.

### 5. Peer Consensus over Expert Authority

Janus Boye (Boye & Company, CMS Experts community convener) sent a message this afternoon naming a gap in how MX and The Gathering are positioned. His observation: technology evolves rapidly but the fundamental practitioner questions stay unchanged (how to adopt without creating complexity, how to maintain clarity, how to build confidence amid change). AI has made expert advice abundant. What it cannot manufacture is the honest peer account from someone who has deployed the standard and will tell you what they actually found. The Scandinavian learning tradition frames this clearly: communities learn from one another, not from seeking the wisest individual.

The principle was named Peer Consensus over Expert Authority and propagated into nine files across the session:

- **Concept cog** — `mx-canon/ssot/concept-peer-consensus.cog.md` is the canonical statement with the concept as Janus articulated it, how MX adopts it, and a three-condition design test.
- **Principles** — a new `## Peer Consensus over Expert Authority` entry in `principles.cog.md` takes the total to 34 named principles; `principles-index.json` regenerated.
- **Blog post** — `datalake/draft-site/blog/the-question-ai-cant-answer.md` is a draft chatty-register post citing Janus as the originator. Awaiting Tom's approval before promotion to the site.
- **Gathering messaging** — `messaging-ideas.md` gained a new `## The Scandinavian Frame` section and a new "Peer consensus over expert authority" hook.
- **Gathering draft** — `mx-shared-gathering/draft-governance-peer-consensus.md` is a vendor-neutral governance note offered to The Gathering for review; its README entry is live.
- **Manuscript propagation** — the principle landed in all three books: a pull-quote in the free book, a new H2 "Why the standard belongs to the community" in handbook v2 chapter 12, and a full H2 "Why Community Governance, Not Expert Authority" in protocols chapter 20.
- **CRM** — Janus Boye's contact record updated with today's contact and the insight recorded.

---

## Why It Matters

The graph is the foundation of Maxine's ability to navigate the repository without human guidance. Before this session, an agent asked to "run all scripted action cogs" had no clean way to find them — `actionType:scripted` returned nothing because the field was not indexed. An agent asked "what changed yesterday?" had no structured answer. These are not edge cases; they are the everyday navigational questions any session raises. Filling these gaps moves the system from a graph that can describe the repository to one that can actively navigate it. The temporal query capability in particular is infrastructure for the self-improving loops (the dream system, the gate proposals, the stale-doc detection) that underpin the self-healing repository proposition.

---

## The Insight

The graph was built with the right architecture but never fully populated. The 29% coverage figure was not a deliberate design choice — it was drift. Fields that existed in the MX field dictionary and were commonly used in cog frontmatter were simply never wired into the graph builder. The lesson: when adding a new canonical field to the MX standard, the graph builder extraction and the MCP query surface must be updated in the same commit, or the field is invisible to the machine infrastructure from day one. A checklist for this now belongs in the field-addition runbook.

---

## Decisions Made

- Five higher-ambition fields (`x-mx-audience-scope`, `x-mx-skill-type`, `x-mx-deliverable-type`, `x-mx-review-cycle`, `x-mx-published-status`) were explicitly deferred pending the `/mx-add-field` workflow and Tom's decision on the namespace policy.
- The namespace policy ruling — four overlapping field pairs in `x-mx-namespace-prd.cog.md` — was flagged as a blocker for future field additions but not resolved. That decision is Tom's call.

---

## Open Questions

- **Namespace policy** — the four field-pair overlap decisions in `x-mx-namespace-prd.cog.md` (e.g. `x-mx-contextProvides` vs `purpose`, `x-mx-category` vs `tags`) need Tom's ruling before any new `x-mx-` fields can be added cleanly. Until resolved, new CogNovaMX fields accumulate inconsistently.
- **Field-addition checklist** — should the graph-builder extraction step be added as a mandatory gate to the `/mx-add-field` runbook? If yes, the insight above becomes policy rather than a note.

---

### 6. Web Audit of Dotfusion (Chris Bryce)

A full web audit of dotfusion.com was run using the Web Audit Suite, crawling 12 HTML pages plus sitemap.xml and llms.txt. Key findings: Accessibility 100/100, SEO 77/100, Performance 35/100 (slow origin response), MX Stack Completeness 43/100, all eight AI agents fully accessible. Security headers are missing site-wide. The site runs on Next.js with Tailwind. The audit PDF was generated, gated, and pushed to Gitea at `http://localhost:3000/ddttom/audit-dotfusion.com`.

### 7. Audit Pipeline Bug Fixes and Naming Sweep

Two bugs were discovered and fixed in the audit pipeline, and a naming convention sweep was applied to 20-plus files.

**Bug 1 - Thin-audit PDF.** When the pipeline is run with Gitea enabled, the `--results` path (where the actual audit data lives) and the `infillDir` path (derived from the report file path) point to different directories. The thin-audit trigger was reading from `infillDir`, found no `audit_averages.json` there, defaulted to zero pages audited, and fired the thin-site one-pager rewrite. The result: the PDF was generated from an 84-line condensed document instead of the full 1,204-line report. Fix: the thin-audit check now reads from `resultsDir`, which correctly resolves whether Gitea is in use or not.

**Bug 2 - Thin-audit detection refactored.** The gates phase was re-deriving the HTML page count from averages JSON to decide if an audit is thin. The infill phase already makes this determination deterministically and writes `.thin-audit.json` with the reason (empty sitemap, agent blocking, etc.) when the count is below the threshold. The gates phase now checks sidecar existence only. This removes duplicated logic and makes the detection fully deterministic.

**Naming sweep - `pagesAudited` to `htmlPagesAudited`.** The audit pipeline uses a `NON_HTML_BUFFER` to collect slightly more URLs than requested, absorbing non-HTML discovery files (sitemap.xml, llms.txt, agent-card.json) without diluting the HTML page count. Despite this, the count field was named `pagesAudited`, giving LLMs and human readers no way to tell it was HTML-only. The field was renamed to `htmlPagesAudited` across: the JSON writers (`audit_averages.js`, `llmReports.js`), all readers in `infill-report.js` (60-plus uses), gate scripts, LLM prompt templates, table handlers, test fixtures, cogs, and architecture docs. A new `urlsCollected` field was added alongside, recording the total URLs including non-HTML discovery files. Backward-compatibility fallback (`?? pagesAudited`) added to all readers to handle existing on-disk JSON.

The `--pages N` CLI flag was not renamed - users mean HTML pages when they type it, and the name is correct at the user interface level.

---

## Next Steps

- Resolve namespace policy: rule on the four field-pair overlaps in `mx-canon/mx-os/x-mx-namespace-prd.cog.md`
- Add graph-builder extraction as a mandatory step in the `/mx-add-field` runbook
- Consider the five deferred future field proposals for the next graph iteration
- Re-engage the four quiet CMS Experts contacts: Stuart Rex and William Borgbarthet (BloomReach), David Strachan (HCL Software), Chris Bryce (Dotfusion)
- Consider registering `x-mx-communityMemberships` formally in `cognovamx-fields.yaml` now that it is used across eleven contacts
- Review and approve the blog post at `datalake/draft-site/blog/the-question-ai-cant-answer.md` before promotion to the mx-site
- Run `npm run cog:sync` on a fat clone on main after merge to register `concept-peer-consensus.cog.md` in the cog registry
