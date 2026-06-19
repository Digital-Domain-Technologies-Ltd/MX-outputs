---
title: "Co-Directors Report - MX Graph, CRM Cross-linking, and CMS Experts Intelligence"
description: "Extended MX graph with temporal queries and 14 new fields; created CMS Experts community contact with full market profile; cross-linked 11 CRM contacts with queryable membership attribute."
author: "Tom Cranstoun"
created: 2026-06-19
modified: 2026-06-19
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, afternoon]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-19-afternoon-report.md
  purpose: "Extended the MX metadata graph with temporal query capability, 14 newly indexed fields including computed git-authoritative dates, and promoted the architecture doc to a first-class cog."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - MX Graph System: Temporal Queries and Field Expansion"]
---

# Co-Directors Report - MX Graph, CRM Cross-linking, and CMS Experts Intelligence

**Date:** 19 June 2026 - Afternoon
**Segment:** Afternoon (since noon)

---

## Summary

The afternoon session covered two distinct bodies of work. The first overhauled the MX metadata graph — the internal index that catalogues every folder and cog in the repository — making it answer operational questions it previously could not. A new temporal query tool lets an agent or operator ask "what did we do yesterday?" and receive a structured, enriched answer. Fourteen previously silenced fields were added to the graph, including a git-authoritative last-modified date. The second body of work turned the CMS Experts intelligence gathered in April into live CRM infrastructure: a community contact record was created from the value profile PDF, eleven individual contacts were cross-linked with a queryable membership attribute, and the graph can now answer "which of our CMS Experts contacts have gone quiet?"

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

## Next Steps

- Resolve namespace policy: rule on the four field-pair overlaps in `mx-canon/mx-os/x-mx-namespace-prd.cog.md`
- Add graph-builder extraction as a mandatory step in the `/mx-add-field` runbook
- Consider the five deferred future field proposals for the next graph iteration
- Re-engage the four quiet CMS Experts contacts: Stuart Rex and William Borgbarthet (BloomReach), David Strachan (HCL Software), Chris Bryce (Dotfusion)
- Consider registering `x-mx-communityMemberships` formally in `cognovamx-fields.yaml` now that it is used across eleven contacts
