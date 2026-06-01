---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "blog-post"
version: "1.0.0"
description: "End-to-end cog for mx-site blog posts: create a draft, review for AI patterns and dual-audience balance, publish via git mv."

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
  purpose: "Single action-doc covering the three blog-post lifecycle stages on mx-site (create, review, publish) plus the series-and-cluster authoring rules sub-folder posts follow. Read by /mx-c-blog-post and /html-writer skills."
  stability: stable
  x-mx-contextProvides:
    - "Three-stage lifecycle (create, review, publish) for mx-site blog posts"
    - "Series and cluster authoring rules (engaging tone, depth-based CTA, canonical first-mention)"
    - "Dual-audience check gate (business value + technical evidence)"
    - "Submodule-first publish workflow with metadata flips and asset-path fixes"
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

Both formats share the same voice: first-person, conversational, no exaggeration, honest about trade-offs, varied sentence rhythm. Neutral English in public HTML on `mx-outputs/mx-site/**` (rephrase to avoid US/UK divergent spellings); British English elsewhere. The full register rules live in [`mx-canon/ssot/writing-guides/writing-style.cog.md`](../../mx-canon/ssot/writing-guides/writing-style.cog.md).

Blog posts are in-scope APA 7 prose per [`writing-style.cog.md §14`](../../mx-canon/ssot/writing-guides/writing-style.cog.md). Headings use APA Title Case across all five levels (`Why This Matters`, not `why this matters`, and not `Why This Matters For You` — short prepositions lowercase). External claims cited in the post use APA author-date form (`(Anthropic, 2026)` / `Anthropic (2026) announced`); cited posts carry a reference list at the foot. Tables and figures use the APA three-zone shape (number bold above, italic sentence-case title, body, optional `*Note.*`). Bias-free language conventions in §14.4 apply when the post names identity dimensions. House overrides (no em-dashes, ASCII straight quotes, no pre-announced counts in prose) still bind per §14.8.

---

## Series and cluster authoring rules

A series is a set of related posts grouped under a sub-folder of `mx-outputs/mx-site/blog/` (e.g. `blog/drafts/watching-the-machines/`, `blog/series/`). A cluster is a sub-sub-folder of a series (e.g. `blog/drafts/watching-the-machines/google-nano-model/`) holding a tight set of posts that argue one shape together. The rules below apply to every HTML file in a series or cluster: the series-index lander, the cluster-index lander, and every child post. Standalone posts in bare `blog/` skip these rules and use the simpler post-conclusion aside that `content-template.html` already supplies.

**Trigger.** Rules activate when the output path is inside a sub-folder of `blog/` or `blog/drafts/`. Depth gate is mechanical: depth 0 from `blog/` (or `blog/drafts/`) = standalone, depth 1 = index-equivalent (series index, cluster index, editorial-standard page like `how-it-works.html`), depth 2+ = child post inside a cluster. Calibration anchor: [`mx-outputs/mx-site/blog/drafts/watching-the-machines/`](../../mx-outputs/mx-site/blog/drafts/watching-the-machines/). Open the series index, the cluster index, and one child post side by side when writing.

### Engaging tone

Series and cluster pages read as a magazine column, not a corporate update. The voice pulls the reader through a set rather than a single piece. Specifics:

- **Name the actors.** Companies, regulators, individuals named; the column doesn't pretend neutrality on what it's recording. Anonymised "a major tech company" prose is the wrong register.
- **State the position.** Every post takes a clear line on what happened and why it matters. The reader leaves knowing where the writer stands.
- **Balance the entry kinds across the cluster.** Three balanced kinds: what broke (a specific behaviour with evidence and the principle it offends), what good looks like (the right answer when someone builds it), the line being drawn (regulation or enforcement read through MX readiness). A cluster that's all "what broke" reads as one long complaint.
- **Open with the editor-avatar aside.** Series and cluster pages carry a `<aside class="blog-introduction">` with the editor's avatar and a one-sentence framing of what the page is for.
- **First-person opinion in the body.** "I am not going to ask Google to be good" is the register, not "this raises questions about whether Google should...". Cross-reference: writing-style.cog.md §0 (one voice, declarative authority) and §9.9 (Tom-voice patterns).

### Conclusion leads to a CTA (depth-based)

Two CTA surfaces. The shape differs by depth.

**Index-equivalents (depth 1): TWO surfaces.** Pages a reader arrives at from outside the cluster. They need an outward action surface. Surface 1: an inline body section before the post-conclusion aside, last `<h2>`, audience-appropriate question form ("Where your own content stands", "Where this leaves you", "What to do about it"), 2-3 short paragraphs connecting the page's argument to the reader's situation, followed by a `<ul>` of 2-3 outward action links (book an audit, join The Gathering, read the editorial standard, register a Publisher Listing). Surface 2: the standard `<aside class="post-conclusion">` chrome with editor avatar, eyebrow, prompt, and a separate `<ul class="post-conclusion-links">` for next-reads.

```html
<!-- Surface 1: inline body CTA, index-equivalents only -->
<h2 id="where-your-own-content-stands">Where your own content stands</h2>

<p>The discipline that would make a silent install checkable is the one that decides whether the machines now reading the web on your buyers' behalf can find, trust, and act on what you publish.</p>

<ul>
  <li><a href="/about/contact.html">Get in touch about an MX audit</a></li>
  <li><a href="https://tg.community" rel="noopener">Join The Gathering</a></li>
</ul>
```

**Child posts (depth 2+): ONE surface plus series navigation.** Child posts sit inside the cluster's argument; the reader doesn't need an outward CTA from every leaf page. Surface 1: a `<h2 id="part-of-the-series">Part of the series: <Cluster Name></h2>` navigation block before the conclusion aside, with a short paragraph naming the hub and a `<ul>` listing each sibling with its role ("this post", "the principle", "the mechanism"). Surface 2: the standard `<aside class="post-conclusion">` chrome with eyebrow / prompt / links calibrated to the next-reads inside the cluster plus one outward link in the aside.

```html
<!-- Series-navigation block, child posts only -->
<h2 id="part-of-the-series">Part of the series: The Silent Install</h2>

<p>The hub for the set is <strong><a href="/blog/drafts/watching-the-machines/google-nano-model/">The Silent Install</a></strong>.</p>

<ul>
  <li><strong>Respect Runs Both Ways</strong>, the principle (this post)</li>
  <li><a href="/blog/drafts/watching-the-machines/google-nano-model/the-signature-and-the-download.html">The Signature Covers Who Shipped It, Not What It Fetches</a>, the mechanism</li>
  <li><a href="/blog/drafts/watching-the-machines/google-nano-model/dont-be-evil-to-dont-ask.html">From "Don't Be Evil" to "Don't Ask"</a>, the moan, and the fix</li>
</ul>
```

The series-navigation block ALSO carries an inline first-mention explanation for each sibling (`, the principle (this post)`, `, the mechanism`, `, the moan, and the fix`). The current post's entry uses `<strong>` without a link and ends `(this post)`; siblings carry the link plus a short defining clause.

### Inline explanation on first mention

When a series or cluster post surfaces an idea that lives on another page, the first mention on this page carries a brief inline explanation. The reader who arrives at this page first should not have to follow the link to know what they're being told to read. After the first mention, the explanation drops — future mentions of the same target on the same page use the bare link or a definite reference (`the cluster`, `the column`, `it`).

**Two triggers:**

1. **Cross-page sibling references** — links to another post in the same series or cluster, or to a sibling page in the same area of the site.
2. **Specialist MX terminology** — first mention of REGINALD, the Gathering, MX-practitioner, attestation, cog, x-mx-domainTerms, COG (the trust wrapper), or any other term the reader landing fresh might not know. Per-page tracking. Default-domain terms exempt: MX, machine, agent, web, blog, post, page.

**Canonical shape — the only acceptable form:**

```
<strong><a href="...">Bold link</a></strong>, <comma> <short defining clause> <full stop>
```

The `<strong>` wrap on the link is mandatory. Italic-eyebrow forms (`<em>Part of the series <a>...</a>, the moan, and the fix.</em>`) are NOT a substitute — they read as decorative scaffolding and don't carry the visual weight a first-mention reference needs. Rewrite italic eyebrows that name siblings into the canonical strong-bold form, or move the sibling-naming work into the body where strong-bold is the standard.

**Worked examples** from [`watching-the-machines/`](../../mx-outputs/mx-site/blog/drafts/watching-the-machines/):

Cluster reference (from the series index, naming a cluster for the first time):

```html
<li><strong><a href="/blog/drafts/watching-the-machines/google-nano-model/">The Silent Install</a></strong>, a cluster on what a program may do to your device without asking, opened by Chrome writing a multi-gigabyte AI model to people's disks with no prompt.</li>
```

Sibling reference inside a cluster (from a child post, naming a sibling for the first time):

```html
<p>The third of a short set. The first, <strong><a href="/blog/drafts/watching-the-machines/google-nano-model/respect-runs-both-ways.html">Respect Runs Both Ways</a></strong>, set out the principle. The second, <strong><a href="/blog/drafts/watching-the-machines/google-nano-model/the-signature-and-the-download.html">The Signature Covers Who Shipped It, Not What It Fetches</a></strong>, set out the mechanism.</p>
```

Specialist-term first mention:

```html
<p>The durable answer is attestation and provenance, written into <strong>REGINALD</strong>, the public registry that holds the records and lets an outsider verify them.</p>
```

Second-pass on the same page uses the definite reference:

```html
<p>The signature lives in REGINALD; the verifier reads it; the publisher never has to be trusted to be honest about it.</p>
```

### What this doesn't change

The existing polish pass in [`html-writer/skill.md`](../../.claude/skills/html-writer/skill.md) runs unchanged for series and cluster posts: structure, head block, Schema.org, Open Graph, Twitter cards, accessibility, terminology against the Glossary, voice and timelessness, APA 7, MX body rules, humanizer pass, em-dash ban, HTML entities, AI disclosure, HTML hygiene, MX audit, spell-check, link sanity. The series rules add to that polish pass; they don't replace any of it.

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
2. **Scan** for AI writing patterns. The authority is the writing-style guide ([Section 5 forbidden vocabulary](../../mx-canon/ssot/writing-guides/writing-style.cog.md), [Section 6 forbidden constructs](../../mx-canon/ssot/writing-guides/writing-style.cog.md), [Section 9 AI patterns](../../mx-canon/ssot/writing-guides/writing-style.cog.md)). Flag specific locations and line numbers; score the post.
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
- **Writing style guide:** [`mx-canon/ssot/writing-guides/writing-style.cog.md`](../../mx-canon/ssot/writing-guides/writing-style.cog.md) — forbidden vocabulary, forbidden constructs, AI patterns, AI-tell metaphors, abstract category nouns.
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
