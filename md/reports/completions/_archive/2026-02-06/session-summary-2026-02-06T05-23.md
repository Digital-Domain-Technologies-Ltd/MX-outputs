---

title: "Create and commit Cog-Nova-MX business plan document suite"
created: "2026-02-06"
sessionStart: "2026-02-06T02:30:00Z"
sessionEnd: "2026-02-06T05:23:00Z"
duration: "~3 hours (across two continuation sessions)"
author: Tom Cranstoun

mx:
  contentType: "documentation"
  status: "completed"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/completions/_archive/2026-02-06/session-summary-2026-02-06T05-23.md
---


# Session Summary: Cog-Nova-MX business plan document suite

## Overview

Created a complete suite of business planning documents for Cog-Nova-MX in `/ingest/new-plan/`, improving and expanding on original source documents in `/ingest/`. The work spanned two continuation sessions: the first created all 11 documents, ran the humanizer skill on each, applied markdown linting fixes, and added enterprise AEM experience and LinkedIn recommendations to the about-tom profile. The second (this session) completed the step-commit workflow to commit everything to the repository.

All documents are unified around the first-mover advantage narrative and have been humanized to remove AI writing patterns. The commit `b61f08e` captures 18 files (6 original source documents + 11 improved v1 documents + 1 settings change).

## What was accomplished

### 1. Original source documents preserved

Original versions copied to `/ingest/` as reference material:

- `funding-requirement-v5.md`
- `boye-co-partnership-proposal-v4.md`
- `partnership-proposal-anonymised-v4.md`
- `mx-simple-explanation.md`
- `operational-roadmap-feb-may-2026.md`

### 2. Improved v1 documents created in `/ingest/new-plan/`

11 documents created, each targeted at a specific audience:

| Document | Audience | Purpose |
|----------|----------|---------|
| [narrative-summary.md](../../ingest/new-plan/narrative-summary.md) | All readers | Unified narrative anchor, first-mover advantage message |
| [funding-requirement-v1.md](../../ingest/new-plan/funding-requirement-v1.md) | Investors | Investor calling card with full financials and exit strategy |
| [boye-mentor-partnership-v1.md](../../ingest/new-plan/boye-mentor-partnership-v1.md) | Janus Boye | Reframed from cold proposal to mentor relationship |
| [partnership-proposal-template-v1.md](../../ingest/new-plan/partnership-proposal-template-v1.md) | Cold prospects | Template with conditional sections for audit/no-audit |
| [mx-simple-explanation-v1.md](../../ingest/new-plan/mx-simple-explanation-v1.md) | Eleanor Cranstoun | Plain-language explanation of MX |
| [operational-roadmap-v1.md](../../ingest/new-plan/operational-roadmap-v1.md) | Internal team | 14-week execution plan (Feb-May 2026) |
| [advisory-board-brief.md](../../ingest/new-plan/advisory-board-brief.md) | Investors/partners | Anonymised board credentials |
| [about-tom.md](../../ingest/new-plan/about-tom.md) | All external docs | Full profile with AEM experience and LinkedIn quotes |
| [book-update-plan.md](../../ingest/new-plan/book-update-plan.md) | Internal | Plan for updating book manuscripts with new content |
| [business-model-staff-v1.md](../../ingest/new-plan/business-model-staff-v1.md) | Staff | Three-year plan, products, equity structure, no financials |
| [README.md](../../ingest/new-plan/README.md) | All | Directory index |

### 3. Humanizer applied to all documents

Every document was run through the humanizer skill to remove AI writing patterns:

- Bold-header-colon bullet lists converted to flowing prose
- Em dash overuse replaced with commas or restructured sentences
- "serves as", "stands as", "testament to" removed
- Promotional language ("groundbreaking", "vibrant") stripped
- Rule-of-three patterns broken up
- Negative parallelisms ("not just...but...") simplified
- Title case headings converted to sentence case
- Consistent tone across all documents

### 4. Social proof added to about-tom.md

Enterprise AEM experience section with 6 projects:

- EE (Orange/T-Mobile merger) - 8,000-page rebuild in 24 days
- Nissan-Renault Alliance - UK's largest AEM implementation, 200+ websites
- MediaMonks/Twitter - mentored AEM team, "best AEM team" feedback
- Ford (via Cognizant Netcentric) - global AEM programme
- Jaguar Land Rover (via ITG) - Tridion to AEM migration
- BBC - electronic newsroom distribution system

LinkedIn recommendations section with 6 quotes from named colleagues.

### 5. Markdown linting

10 issues found and auto-fixed:

- 4 bare email URLs wrapped in angle brackets (MD034)
- 6 missing blank lines around lists in book-update-plan.md (MD032)

### 6. Step-commit completed

All files staged and committed as `b61f08e`:

```
docs: add ingest documents and improved v1 business plan suite
```

18 files, 3,010 insertions. Branch is 1 commit ahead of origin/main (not pushed).

## Files modified

1. [.claude/settings.local.json](../../.claude/settings.local.json) - Updated local settings (6 insertions, 1 deletion)
2. [ingest/README.md](../../ingest/README.md) - Directory index for original source documents
3. [ingest/boye-co-partnership-proposal-v4.md](../../ingest/boye-co-partnership-proposal-v4.md) - Original source
4. [ingest/funding-requirement-v5.md](../../ingest/funding-requirement-v5.md) - Original source
5. [ingest/mx-simple-explanation.md](../../ingest/mx-simple-explanation.md) - Original source
6. [ingest/operational-roadmap-feb-may-2026.md](../../ingest/operational-roadmap-feb-may-2026.md) - Original source
7. [ingest/partnership-proposal-anonymised-v4.md](../../ingest/partnership-proposal-anonymised-v4.md) - Original source
8. [ingest/new-plan/README.md](../../ingest/new-plan/README.md) - Directory index for improved documents
9. [ingest/new-plan/narrative-summary.md](../../ingest/new-plan/narrative-summary.md) - Unified narrative anchor
10. [ingest/new-plan/advisory-board-brief.md](../../ingest/new-plan/advisory-board-brief.md) - Anonymised board credentials
11. [ingest/new-plan/funding-requirement-v1.md](../../ingest/new-plan/funding-requirement-v1.md) - Investor document
12. [ingest/new-plan/boye-mentor-partnership-v1.md](../../ingest/new-plan/boye-mentor-partnership-v1.md) - Janus Boye partnership
13. [ingest/new-plan/partnership-proposal-template-v1.md](../../ingest/new-plan/partnership-proposal-template-v1.md) - Cold outreach template
14. [ingest/new-plan/mx-simple-explanation-v1.md](../../ingest/new-plan/mx-simple-explanation-v1.md) - Plain-language explanation
15. [ingest/new-plan/operational-roadmap-v1.md](../../ingest/new-plan/operational-roadmap-v1.md) - 14-week execution plan
16. [ingest/new-plan/about-tom.md](../../ingest/new-plan/about-tom.md) - Full profile with AEM experience
17. [ingest/new-plan/book-update-plan.md](../../ingest/new-plan/book-update-plan.md) - Manuscript update plan
18. [ingest/new-plan/business-model-staff-v1.md](../../ingest/new-plan/business-model-staff-v1.md) - Staff business model

## Testing and verification

**Markdown linting:**

```bash
npx markdownlint --config .markdownlint-cli2.jsonc ingest/new-plan/*.md
```

**Result:** All files lint-clean after auto-fix.

**Humanizer verification:**

Grep checks confirmed removal of common AI vocabulary patterns across all documents.

**Git commit:**

```bash
git status  # Clean working tree
git log --oneline -1  # b61f08e confirmed
```

## Technical details

### Interview-driven approach

Session began with an interview to clarify goals, priorities, and constraints. Key decisions from the interview:

- Unified all documents around first-mover advantage narrative
- Reframed Boye document from cold proposal to mentor relationship (Janus is a friend, not a prospect)
- Added advisory board brief as new document (board members cannot be named publicly)
- Identified partnership pipeline as biggest risk to 12 May launch
- Created business-model-staff-v1.md with no financials, no pitching, staff equity details

### Document versioning

All improved documents are versioned as v1 in `/ingest/new-plan/` (fresh start). Original source documents preserved in `/ingest/` for reference. This avoids confusion with the v4/v5 numbering of the originals.

### Confidentiality

Advisory board member names appear nowhere in any document. They are described by role and credentials only. Names are stored in MEMORY.md (marked CONFIDENTIAL) for session continuity.

## MX principles applied

1. **Metadata on write** - All documents have YAML frontmatter with audience, purpose, stability, and confidentiality markers
2. **Self-documenting** - README.md in both `/ingest/` and `/ingest/new-plan/` explain the directory contents
3. **Audience-aware** - Each document is written for its specific audience (investors, staff, partners, mentor)
4. **Human-readable** - All documents humanized to remove AI writing patterns

## User requirements addressed

User requests across both sessions:

- "improve the ingest documents" - All 5 original documents improved and expanded
- "more social proof" - Enterprise AEM experience and LinkedIn recommendations added
- "now i need a business model document... for staff... include the 5% A shares" - Created business-model-staff-v1.md
- `/step-commit` - All files committed as b61f08e

## Next steps

1. **Push to remote** - Branch is 1 commit ahead of origin/main. Push when ready
2. **Book manuscript updates** - book-update-plan.md documents what needs updating in the Handbook and Protocols manuscripts (biography, published lineage, advisory board references, title corrections)
3. **allabout.network update** - Book promo page still references "MX: The Handbook" (noted in about-tom.md)
4. **Partnership outreach** - Use partnership-proposal-template-v1.md for cold outreach, boye-mentor-partnership-v1.md for Janus conversation
5. **Funding outreach preparation** - funding-requirement-v1.md is ready but no external investor outreach has started yet

## Session context

**Previous work:** Created original ingest documents, ran initial plan interview, established narrative anchor
**This session:** Completed humanizer on remaining documents, added social proof, created staff business model, committed all files
**Status:** All documents complete and committed. Not pushed to remote.

## Commands used

```bash
# Verify git status
git status

# Stage all files
git add .claude/settings.local.json ingest/README.md ingest/*.md ingest/new-plan/*.md

# Commit
git commit -m "docs: add ingest documents and improved v1 business plan suite..."

# Verify
git status
git log --oneline -3
```

## Success metrics

- ✓ 11 improved/new documents created in `/ingest/new-plan/`
- ✓ All documents unified around first-mover advantage narrative
- ✓ All documents humanized (AI writing patterns removed)
- ✓ All documents markdown lint-clean
- ✓ Enterprise AEM experience and LinkedIn quotes added to about-tom.md
- ✓ Staff business model created with equity structure
- ✓ No advisory board names exposed in any document
- ✓ All files committed (b61f08e, 18 files, 3,010 insertions)
- ✓ Working tree clean

---

**Session completed successfully.**
