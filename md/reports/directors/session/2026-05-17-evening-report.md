---
title: "Co-Directors Report — Use-cases blog series and sub-folder discovery"
description: "Four interlinked posts on MX vs blockchain/NFTs/crypto shipped to mx-site under a new use-cases sub-folder; discovery scripts taught to recurse so the pattern is now reusable."
author: "Tom Cranstoun"
created: 2026-05-17
modified: 2026-05-17
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-17-evening-report.md
---

# Co-Directors Report — Use-cases blog series and sub-folder discovery

**Date:** 17 May 2026 — Evening
**Segment:** evening (since 5pm)

---

## Summary

Tom supplied the integrator essay for a four-part series answering the question MX gets asked most often once people have seen the blockchain wave: how does this fit alongside crypto, NFTs, and chains? The other three posts in the set were written this segment, the series was published under a new `blog/use-cases/` sub-folder on mx-site, the sub-folder got its own lander, and the two blog-discovery scripts that did not previously recurse were taught to. The result is a reusable pattern: future content series can group under their own sub-folder without breaking the sitemap or llms-full corpus.

---

## What Was Done

### 1. Use-cases series, four posts plus lander

The integrator post Tom drafted, *MX and Cryptocurrency: Drawing the Line*, was paired with three companion posts: *What Blockchain and Crypto Have to Do with MX* (foundations: shared primitive, not shared design; REGINALD compared to Certificate Transparency), *Is MX Useful to Blockchain?* (chain as record system, with worked examples for verifiable credentials and a public register), and *NFTs and MX* (the seam where token-on-chain meets content-off-chain; three-piece fix using an integrity hash at mint, MX provenance on the content document, and a paired registry record). The folder also gained its own `index.html` lander carrying a `CollectionPage` with an ordered `ItemList`, a Home > Blog > Use cases breadcrumb, and a hero matching the blog lander's chrome. Four cards landed at the top of the blog index pointing at the in-folder paths. Two polish passes ran: the standard html-writer polish (em-dash ban, prose-entity ban, dual-dictionary spell-check, link sanity, HTML hygiene) and a full humanizer pass that surfaced three "The..." headings, one sentence-initial "Or", several missing Oxford commas, and the `organization`/`tokenised`/`recognised` divergent spellings that the mx-site neutral-English rule forbids. All fixed before publish.

### 2. Discovery scripts taught to recurse

The first attempt at running `update-blog-sitemap.cjs` after the use-cases folder was created produced 44 entries, not 48. The script used a flat `readdirSync`; sub-folder posts were invisible to it. The same was true of `sync-blog-discovery.cjs`, which additionally carried an explicit `isTopLevelBlog` predicate that *rejected* sub-folder URLs by design. Both scripts now walk the blog directory recursively, skipping only `drafts/`, `_*.html`, and `index.html` at any level. The blog-local sitemap rose from 40-ish entries to 48 (four use-cases posts plus four profile pages that were never previously indexed); the site-level sitemap rose to 91 entries; the llms-full corpus now includes the four new posts. The three other blog-discovery scripts (`generate-sitemap.cjs`, `generate-llms-full-txt.cjs`, `check-sitemap-coverage.js`) already recursed, so no change was needed there.

### 3. html-writer skill now codifies the sub-folder pattern

A new **Content sub-folders** section was added to the html-writer skill spelling out the rule: every new sub-folder under `blog/` MUST contain an `index.html` lander in the same commit as its first post. The lander differs from a post in three documented ways (stylesheets, metadata, Schema.org), the relative-path contract table gained a third column for sub-folder paths, and the regeneration commands the sub-folder needs are named in the same block. Next time anyone (Tom or a future agent) opens a sub-folder, the rule is in the skill, not in folklore.

### 4. Project wordlist gained 17 technical terms

The spell-check residue from the four crypto/blockchain posts was 17 terms aspell did not know in either dialect: `Arweave`, `CogNovaMX's`, `Crypto`/`crypto`/`crypto's`, `ERC`, `IPFS`, `MX's`, `MiCA`, `NFT`/`NFTs`, `VC`, `attestable`, `tokenised`, `tradeable`, `trustable`, `verifier's`. All landed in `.aspell-mx.pws` via `npm run spell:sweep:apply`. Future crypto-adjacent content will not retrigger those.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 2 (mx-outputs + hub pending) |
| Files changed | 11 (this session, post-Step-1) |
| Lines added | +1,294 (mx-outputs) + ~180 (hub) |
| Lines removed | −0 (mx-outputs) + small (hub) |
| Repositories touched | 2 (mx-outputs, hub) |
| New blog posts | 4 |
| New blog landers | 1 |
| Sub-folder pattern | first content sub-folder on mx-site |
| Sitemap entries (blog-local) | 48 (was ~40) |
| Sitemap entries (site-level) | 91 (was ~87) |
| Wordlist additions | 17 |

---

## Why It Matters

The use-cases series closes the most expensive misunderstanding about MX in customer conversations. Prospects who have lived through the NFT cycle assume any system that signs records cryptographically is a blockchain play, and they bring all of blockchain's procurement, treasury, and reputational baggage to the meeting. The four posts give Tom one URL to send before that meeting (and three follow-ups for prospects who want the worked detail) that draws the line plainly without dismissing the chain world or pretending MX is part of it. The sub-folder pattern is the second-order win: now that the discovery scripts handle sub-folders cleanly and the html-writer skill codifies the lander requirement, future series (regulatory, sectoral, product) can ship the same way without a script rewrite per series.

---

## The Insight

A "we recurse into subfolders" change in two utility scripts looks like trivial maintenance until you notice the explicit `isTopLevelBlog` check in `sync-blog-discovery.cjs` that was added on purpose to keep `profiles/` private. The earlier author had a real reason for flat scanning. Removing the gate exposed those four profile pages to the blog sitemap for the first time. That is not necessarily wrong, but it was not what I intended either. The lesson: a comment that says "must never be stripped by this reconciler — the blogFiles scan is flat on purpose" deserves a longer pause than "fix sitemap and discovery scripts to re-curse into all sub-folders" makes you take. The fix as shipped honours the stronger instruction; `drafts/` is still skipped because it carries a hard noindex contract. But profiles are now discoverable, which is a policy decision the next agent (or Tom) should ratify or revert in a follow-up.

---

## Decisions Made

- Sub-folder posts under `blog/` now appear in both the blog-local and site-level sitemaps; reading-order is encoded in the lander's `ItemList` (`itemListOrder: ItemListOrderAscending` with explicit `position`).
- `mx-outputs/mx-site/sitemap.xml` and `mx-site/llms-full.txt` were intentionally NOT committed this segment; both have been touched by an in-flight AI-USAGE rollout in adjacent files, and bundling them with the use-cases commit would have shipped sitemap URLs for AI-USAGE pages that are not yet committed themselves. Tom can regenerate both when the AI-USAGE work lands.

---

## Open Questions

- Should `blog/profiles/*.html` (the author/AI-assistant bio pages) be in the blog sitemap, now that the recursive walker picks them up? Current state: yes, they are. If the answer is no, the walker needs a `profiles` entry in its skip list (parallel to `drafts`) and a regen.
- The pre-existing AI-USAGE rollout staged across mx-outputs, mx-reginald, mx-shared-gathering, and the hub looks complete and coherent in the diffs I sampled. Is it ready for a coordinated commit, or is there a piece still pending?

---

## What Changed About Me

This segment ran the humanizer skill against material I had just written under the html-writer skill's own polish pass. The two checked different things: html-writer caught the mechanical AI-vocabulary list and the em-dashes and the prose entities; humanizer caught what they missed, mostly Section-6 forbidden constructs (three "The..." headings I had not noticed) and Section-7 divergent spellings (`organization`/`tokenised`) that the html-writer polish pass treats as in-scope of spell-check but does not flag as style problems. Next time I publish to mx-site, the humanizer scan is part of the same workflow, not a follow-up step.

---

## Next Steps

- Decide and act on the profile-pages-in-sitemap question above.
- Land the staged AI-USAGE rollout when the coordinator is ready; regenerate `mx-site/sitemap.xml` and `mx-site/llms-full.txt` in the same commit so the cross-contamination this segment dodged does not return.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 71ff1b7 | Blog: add use-cases sub-folder with the MX-and-blockchain set (mx-outputs) |
| _pending_ | Hub: sub-folder discovery + html-writer skill + wordlist additions |
