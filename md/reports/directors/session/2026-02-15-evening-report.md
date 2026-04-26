---
title: "Co-Directors Report — The Thinking Folder, the Language Decision, and the Namespace Migration"
created: "2026-02-15"
version: "1.2"
author: Tom Cranstoun

mx:
  x-mx-segment: "evening"
  audience: stakeholders
  confidential: true
---

# Evening Session — 15 February 2026

## Summary

Building on this morning's work on system self-documentation and the naming problem, the evening was two things at once: Tom thinking on paper, and the system learning to speak business.

Six documents landed in the ingest folder — Tom's human thinking folder, where raw ideas go before they become cogs. A sponsor-ready Maxine roadmap. An action plan through Frankfurt. A London lightning talk brief. A business leader comms plan. Brand guidelines. A domain portfolio. This is the founder doing what founders do before a launch window: getting every idea out of his head and onto the page.

The other half was a language decision that touched every file in the ecosystem. BDR 001: rename `promptingInstruction` to `runbook`. The field appears in every cog — it is one of the most visible pieces of MX metadata. "PromptingInstruction" sounds like AI plumbing. Business audiences read it and disengage. "Runbook" is an operations term that IT teams, DevOps engineers, and business people already know. The rename ran across 185 files in the main repo and 19 files across three submodules. Thirteen files had their values rewritten too — generic AI jargon like "Context for AI agents parsing this content" became "Read and follow when processing this content." The decision is recorded as the first Business Decision Record.

Ten commits. Over 200 files changed. The system speaks business now.

Late in the evening, the first ingest document got processed. The sponsor-ready Maxine roadmap (`new-maxine.md`) gained a new "Development infrastructure" section — translating a detailed GitHub repository structure into business language. Eight capabilities (modular architecture, prompt management, automated testing, deployment pipeline, knowledge base, governance, examples, CI/CD) presented as a capability table with no folder paths or developer jargon. The roadmap now answers "how is the engineering organised?" for sponsors, alongside what's built and what remains.

Then came the namespace migration. The old `cog:*` HTML meta tags and `@mx-ai-*` JSDoc tags were legacy from an earlier era. Tonight they were replaced with a unified `mx:*` namespace — `<meta name="mx:name">` in HTML, `@mx:name` in JavaScript, `@mx:purpose` in CSS. The cog unified spec jumped to v2.1-draft with a full "Native Metadata Across File Types" section. A new deliverable — `mx-metadata-conventions.cog.md` — defines the embrace-and-extend model: recognise what the file already says (JSDoc, Schema.org, EXIF), then add the MX identity layer on top. Never duplicate, never wrap. The Field Dictionary grew by 147 lines to cover every `mx:*` field and deprecate the old patterns. The Convention Register was updated. A metadata manual was written. The mx-app backend got backward-compatible detection (checks `mx:*` first, falls back to `cog:*`). The restaurant demo was updated. Two Cloudflare routing cogs arrived in the ingest folder. And mx-show.sh learned to identify Electron apps by their real bundle name.

---

## What Was Built

- **BDR 001 — runbook rename** — first Business Decision Record. Rename scripts retained at `scripts/rename-prompting-to-runbook.sh` and `scripts/rewrite-runbook-values.sh` for applying to other repos.
- **Changelog trimmer** — new action-doc and bash script. CHANGELOG.md was 1,802 lines; trimmed to 816. Archived entries preserved. Integrated into step-commit workflow with threshold warnings.
- **Six manual cog files** — build-tools, git-hooks, mx-nav-server, mx-pdf, parse-mxignore, repo-modes. The brain now documents its own tools.
- **mx-show.sh rewrite** — enhanced display functionality with new output formatting.
- **Script metadata standardization** — every script in `scripts/` now carries the mx-os YAML front-matter convention. Consistent authorship, versioning, and categorisation across the toolkit.
- **Sponsor roadmap: development infrastructure section** — integrated a detailed repo structure into `new-maxine.md` as a business-facing capability table. New section between Technology decisions and Governance. Phase C expanded with development workspace workstream. Three new action items added. Governance section expanded to connect the repo structure to the Canon model.
- **mx: namespace migration** — `cog:*` HTML meta tags → `mx:*`. `@mx-ai-*` JSDoc tags → `@mx:*`. Backward-compatible in mx-app backend. Restaurant demo updated.
- **Cog unified spec v2.1-draft** — new "Native Metadata Across File Types" section. Embrace-and-extend model. Namespace convention. Vendor extensions (`prefix:field`). Backward compatibility guarantees.
- **mx-metadata-conventions.cog.md** — new deliverable defining per-file-type metadata rules. The implementation companion to the spec.
- **Metadata manual** — new manual (`manual-metadata.cog.md`) with decision tree, checklists, and validate action for any file type.
- **FDR v1.2** — 147 new lines. Non-YAML convention section. 11 canonical `mx:*` fields. 6 deprecated legacy patterns. 3 new profiles (html, js, css). Overlap resolution for context-provides variants.
- **CVR update** — metadata conventions table expanded with `mx:*` tags, `<link rel="mx">`, JS/CSS `@mx:` tags, deprecated patterns, embrace-and-extend, vendor namespace.
- **mx-show.sh v3.1** — Electron apps now resolve to real bundle names. ctrl-r refresh keybinding added.
- **Cloudflare routing cogs** — two new ingest documents (action + info) for domain routing strategy.

---

## The Thinking Folder

Six documents in `ingest/` — raw material, not yet cogs:

| Document | What it captures |
|----------|-----------------|
| `new-maxine.md` | Sponsor-ready Maxine development roadmap, Feb–Jul 2026. Nine phases complete, three forward phases, architecture, investment context. **Updated:** development infrastructure section integrated, governance expanded, Phase C and action items extended. |
| `action-plan-feb-week3.md` | Prioritised action plan: this week (Chapter 00 + PayPal/Bryce marketing), next week (London talk), March (Handbook), April–May (Frankfurt prep). |
| `london-lightning-talk-feb26.md` | Brief for the London CMS Experts lightning talk on 26 February. |
| `business-leader-comms-plan.md` | Communications plan for business leaders and potential sponsors. |
| `MX-brand.cog.md` | Brand naming framework — candidate names evaluated against trust, SEO, domain alignment. Written in the shadow of the Utah naming clash from this morning. |
| `domain-portfolio.cog.md` | Full inventory of owned domains under GoDaddy, grouped by brand and purpose. |

These are Tom's thinking. The ingest folder is where ideas live before they are processed into Canon material or published content. The volume reflects the proximity of three events: London (26 Feb), Handbook publication (2 Apr), and Frankfurt (12 May).

---

## Decisions Made

- **runbook replaces promptingInstruction** — permanent, ecosystem-wide. BDR 001 filed. All future cogs use `runbook` (under `mx:`). The cog spec needs a prose update to reflect the new field name.
- **Convention deduplication** — SOUL.md trimmed from 167 lines of repository structure to a 4-line reference to UBERCOG.cog.md and the Convention Register. Structure lives in its canonical home now.
- **mx: replaces cog: in HTML** — `<meta name="cog:name">` → `<meta name="mx:name">`. `<link rel="cog">` → `<link rel="mx">`. Backend accepts both during transition.
- **@mx: replaces @mx-ai-* in JS/CSS** — `@mx-ai-contextProvides` → `@mx:context-provides`. Legacy patterns deprecated in FDR.

---

## By the Numbers

- **11 commits** in the evening segment (10 pushed + 1 pending)
- **230+ files changed** (185 from the runbook rename, 7 from namespace migration)
- **3 submodules** updated and pushed (allaboutv2, mx-sales-enablement, mx-gathering)
- **8 new ingest documents** (6 thinking folder + 2 cloudflare routing cogs)
- **6 new manual cog files** (613 lines of tool documentation)
- **2 new deliverables** (mx-metadata-conventions, manual-metadata)
- **1 script deleted** (commit-and-push-all.sh — unused)
- **FDR grew 147 lines** — non-YAML fields, deprecated patterns, 3 new profiles
- **Cog spec v2.0 → v2.1** — 57 new lines on native metadata and namespaces

---

## Next Steps

1. ~~Cog unified spec prose update~~ — **done** (v2.1-draft, native metadata section, namespace convention)
2. ~~Field dictionary (FDR) update~~ — **done** (v1.2, mx:* fields, deprecated patterns, new profiles)
3. **Process remaining ingest documents** — five of eight thinking-folder documents still need reviewing and routing (new-maxine.md processed, cloudflare cogs ingested)
4. **Chapter 00 rewrite with case studies** — identified as this week's priority for PayPal and Chris Bryce marketing
5. **London lightning talk prep** — 11 days away, brief captured but materials not started
6. **Update existing .cog.html files** — restaurant demo updated; remaining HTML cogs in the repo need migrating from `cog:*` to `mx:*` on next edit

---

## Commit Log

| Hash | Theme |
|------|-------|
| `16c4841` | refactor: deduplicate convention/structure content across repo |
| `4262597` | docs: changelog for convention deduplication |
| `b1dff92` | feat: add changelog-trimmer cog with archive and step-commit integration |
| `d2f890d` | refactor: rename promptingInstruction to runbook (BDR 001) |
| `457844c` | refactor: standardize script metadata headers and rewrite mx-show |
| `8a3ce2e` | feat: add manual cog files to Maxine brain |
| `2056c60` | docs: add ingest documents for roadmap, action plan, and marketing |
| `79362f9` | docs: changelog for runbook rename, script standardization, manuals, and ingest |
| `7eccc15` | fix: add missing YAML frontmatter delimiters to MX-brand.cog.md |
| `3fff013` | fix: add missing name/description fields to BDR and domain-portfolio cogs |
| `b46a82d` | docs: evening co-directors report — thinking folder and language decision |

---

*The founder is thinking out loud. The system is learning to listen in business English. The ingest pipeline is working — raw ideas in, sponsor-ready content out. And tonight the metadata namespace became unified — mx: everywhere, cog: nowhere new.*
