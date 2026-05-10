---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "blog-post"
version: "1.0.0"
description: "End-to-end cog for mx-site blog posts: create a draft, review it for AI patterns and dual-audience balance, publish via git mv. Replaces blog-generator and blog-reviewer."

created: 2026-05-10
modified: 2026-05-10

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: published
  x-mx-riskLevel: high
  security:
    scope:
      filesystem: [mx-outputs/mx-site/blog/**, mx-outputs/mx-site/blog/drafts/**, allaboutv2/blogs/ddt/**]
      network: none
      allowedOperations: [read, write, create]
    audit:
      logLevel: standard
      retention: 90d
      includeInputs: true
      includeOutputs: false
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/blog-post.cog.md

  x-mx-category: mx-content
  partOf: mx-os
  refersTo: [cog-unified-spec, env, mx-principles]
  buildsOn: [what-is-a-cog, building-action-docs, env]
  replaces: [blog-generator, blog-reviewer]
  tags: [blog, post, content, create, review, publish, mx-site, dual-audience, humanizer, action]

  audience: both
  readingLevel: advanced

  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
---

# Blog post

The end-to-end cog for mx-site blog posts. One file. Three lifecycle stages: **create**, **review**, **publish**. Replaces the earlier `blog-generator` and `blog-reviewer` cogs.

---

## What this covers

Tom's mx-site blog at <https://mx.allabout.network/blog/> is hand-crafted HTML with comprehensive metadata, Schema.org JSON-LD, WCAG 2.1 AA accessibility, and the MX governance fields. Posts live in exactly one tree:

- **Drafts:** `mx-outputs/mx-site/blog/drafts/<slug>.html`
- **Published:** `mx-outputs/mx-site/blog/<slug>.html`

No deploy mirror, no parallel publish destination. Promotion from draft to published is a `git mv`.

This cog covers three things any agent needs to do with that blog:

1. **CREATE** — write a new post (interview the author, generate the HTML, place it in `drafts/`).
2. **REVIEW** — sharpen an existing post (AI-pattern scan, dual-audience balance, author interview, rewrite).
3. **PUBLISH** — promote a draft (`git mv`, index updates, sitemap, llms.txt, metadata flips, asset-path fixes).

---

## Two formats, one voice

| Aspect | EDS blog (legacy) | MX blog (current) |
|---|---|---|
| Format | Markdown with EDS tables | Semantic HTML |
| Source path | `mx-outputs/mx-site/blog/` | `mx-outputs/mx-site/blog/` (drafts at `mx-outputs/mx-site/blog/drafts/`) |
| URL | `/blogs/ddt/{slug}` | `mx.allabout.network/blog/{slug}.html` |
| Styling | EDS stylesheet (automatic) | `mx-blog.css` and `mx-unified.css` (linked) |
| Metadata | Bottom metadata table | Head meta tags plus JSON-LD `@graph` |
| TOC | EDS auto-generated | HTML `<details>` collapsible |
| Accessibility | EDS default | WCAG 2.1 AA (skip link, ARIA landmarks, semantic structure) |
| Social card | Not generated | SVG social card per post |
| State tracking | None | `<meta name="mx:status" content="draft|published">` |

Both formats share the same voice: first-person, conversational, no exaggeration, honest about trade-offs, varied sentence rhythm. Neutral English in public HTML on `mx-outputs/mx-site/**` (rephrase to avoid US/UK divergent spellings); British English elsewhere. The full register rules live in [`mx-canon/ssot/writing-guides/writing-style.md`](../../mx-canon/ssot/writing-guides/writing-style.md).

---

## CREATE — write a new post

1. **Read `env.cog.md` first.** Hostnames, URLs, author details, paths. Never guess these.
2. **Decide the format** if ambiguous: EDS markdown or MX HTML. Default to MX HTML for posts that benefit from full metadata, social cards, and state tracking.
3. **Interview the author** about topic, audience, tone, the one point the post is making, the one example that supports it, and the one conclusion. Capture the brief.
4. **Generate the file** at `mx-outputs/mx-site/blog/drafts/<slug>.html`. The MX HTML template has 16 sections; generate every one. Skipping sections breaks the format, the metadata, or both.
5. **Add a card** to `mx-outputs/mx-site/blog/drafts/index.html`.
6. **Verify the draft state** in the new file:
   - `<meta name="robots" content="noindex, nofollow">`
   - `<meta name="mx:status" content="draft">`
   - Relative paths use `../../` (one extra level for the drafts/ depth).
7. **Run `npm run blog:qa`** to validate the HTML against the schema and accessibility checks.

---

## REVIEW — sharpen an existing post

Review reads like a sharp editor and a humanizer working together: scan for register tells, check whether both audiences are served, ask the author about intent, then rewrite.

1. **Discover** candidates if no path is given. Otherwise accept the path.
2. **Scan** for AI writing patterns. The authority is the writing-style guide ([Section 5 forbidden vocabulary](../../mx-canon/ssot/writing-guides/writing-style.md), [Section 6 forbidden constructs](../../mx-canon/ssot/writing-guides/writing-style.md), [Section 9 AI patterns](../../mx-canon/ssot/writing-guides/writing-style.md)). Flag specific locations and line numbers; score the post.
3. **Dual-audience check** — the explicit gate. Every section must serve both readers:
   - **Business readers** get the value claim. They skim past code blocks; they read headings and opening sentences. They need to know what changes, what gets cheaper, what gets faster.
   - **Technologists** get the proof. Code blocks, real formats, named standards, architectural reasoning. They read both the claim and the evidence.
   The pattern: business claim first, technical evidence underneath. Score each section: TECH-HEAVY (needs a value sentence before the code), BUSINESS-ONLY (needs a concrete example), BALANCED.
4. **Interview the author.** What is this post for? Where does it sit in the pipeline? What does the author's gut say is missing? The author knows; nobody asks until the draft feels off. Ask up front.
5. **Rewrite.** Apply the scan findings. Rebalance sections. Fill the identified gaps. Preserve the author's voice and opinions. If the author writes in first-person with opinions, the rewrite keeps first-person with opinions.
6. **Present transparently.** Show what changed and why. The author approves the final version, not the process.

### Review rules

1. **Never skip the interview.** Author intent beats any automated check. A post that scores 100% on the AI scan but misses what the author wanted is a failed review.
2. **Never invent content.** If the author did not provide a war story, do not make one up. If they did not name competitors, do not guess. Flag the gap and ask.
3. **Preserve the voice.** Rewrite fixes patterns and fills gaps; it does not change who is speaking.
4. **The dual-audience check is not optional.** Every section gets scored; unbalanced sections get flagged.
5. **Report full output paths.** Never "saved to blogs/md/". Always the absolute path: `/Users/tom/Documents/GitHub/MX-hub/mx-outputs/mx-site/blog/<slug>.html`.

---

## PUBLISH — promote a draft

mx-site blog posts live in one tree. Publishing is a deliberate `git mv` from `drafts/` to the parent, plus four updates and three metadata flips.

```bash
# 1. Move HTML and matching assets
git -C mx-outputs mv mx-site/blog/drafts/<slug>.html       mx-site/blog/<slug>.html
git -C mx-outputs mv mx-site/blog/drafts/<slug>-social.svg mx-site/blog/<slug>-social.svg  # if present
git -C mx-outputs mv mx-site/blog/drafts/<slug>.svg        mx-site/blog/<slug>.svg          # if present

# 2. Edit drafts/index.html — remove the draft card
# 3. Edit blog/index.html — add the published card to Featured OR Blog-listing
#    (per the dedup rule: a post lives in exactly one grid, never both)
# 4. Edit blog/sitemap.xml — add <url> entry for the new post
# 5. Edit llms.txt — add to "Featured articles" only if it is a flagship piece (curated)

# 6. Flip metadata in the moved file:
#    <meta name="robots"    content="noindex, nofollow"> → "index, follow"
#    <meta name="mx:status" content="draft">             → "published"

# 7. Fix relative paths in the moved file:
#    ../../css/    → ../css/
#    ../../js/     → ../js/
#    ../../images/ → ../images/
#    ../profiles/  → profiles/

# 8. Commit mx-outputs; push; bump the hub pointer.
```

There is no `allaboutv2/blogs/mx/` step. There is no `cp` to a deploy mirror. The `blog-publish.sh` and `sync-svg-to-web.sh` scripts have been deleted; do not write a replacement helper.

---

## Reference files

- **Project config:** [`scripts/cogs/env.cog.md`](env.cog.md) — hostnames, URLs, author details, paths. Read this FIRST for any blog action.
- **MX template reference:** [`mx-outputs/mx-site/blog/data-sovereignty.html`](../../mx-outputs/mx-site/blog/data-sovereignty.html) — a fully-populated MX post to copy structure from.
- **Canonical blog template:** [`mx-canon/ssot/templates/blog-post.html`](../../mx-canon/ssot/templates/blog-post.html).
- **MX stylesheets:** [`mx-outputs/mx-site/css/mx-blog.css`](../../mx-outputs/mx-site/css/mx-blog.css), [`mx-outputs/mx-site/css/mx-unified.css`](../../mx-outputs/mx-site/css/mx-unified.css).
- **Writing style guide:** [`mx-canon/ssot/writing-guides/writing-style.md`](../../mx-canon/ssot/writing-guides/writing-style.md) — forbidden vocabulary, forbidden constructs, AI patterns, AI-tell metaphors, abstract category nouns.
- **Tom's EDS blog catalogue (legacy):** [`allaboutv2/blogs/ddt/my-blog.json`](../../allaboutv2/blogs/ddt/my-blog.json).

---

## For AI agents

When the user asks to write, review, or publish a blog post:

1. **Read `env.cog.md` first** — every blog action depends on it.
2. **Decide the action**: create, review, or publish. The user's words usually make this clear ("write a post", "review this", "publish this draft"); ask if ambiguous.
3. **For CREATE or REVIEW**, follow the lifecycle steps above. The interview is mandatory; do not infer author intent.
4. **For PUBLISH**, the bash block in the PUBLISH section is the program. Follow it exactly. Skipping a step (forgetting to remove the draft card, forgetting to flip the robots meta, forgetting to fix the asset paths) is a publishing bug.
5. **Always report output paths fully** — absolute path from root.
6. **Run `npm run blog:qa`** when a file lands or changes substantially.
7. **Run `npm run blog:status`** to confirm pipeline state.

The lifecycle above is the program. You are the runtime.

---

*One cog. Three actions. The post is the artefact. The reader is whoever reads it next — human or machine.*
