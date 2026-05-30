---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "MX Principles"
version: "3.8"
created: 2026-02-04
modified: 2026-05-17
author: Tom Cranstoun
description: "The principles that govern how MX builds things — for humans and every machine that reads what you publish"

mx:
  status: active
  contentType: info-doc
  x-mx-category: mx-core
  tags: [principles, design, writing, metadata, accessibility, mx-os, standards-hierarchy]
  partOf: mx-ssot
  audience: [humans, machines]
  license: proprietary
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-canon/ssot/principles.cog.md
---

# MX Principles

These are the rules we build by. Not guidelines. Not suggestions. Principles — the things that stay true even when everything else changes.

**Content Ops is the discipline of creating, managing, optimising, publishing, distributing, archiving, and retiring content across every digital channel.** MX is the layer that sits underneath it. The work a Content Ops team produces has to keep being usable once it leaves the system that produced it. What survives is what travelled with the file. MX is what travels.

**Make anything you publish — a video, a podcast, a PDF, an image, a web page — readable by machines.** That is what MX is for. Not just the web. Every machine that reads what humans publish — AI agents, robots, autonomous vehicles, industrial control systems, IoT devices, medical instruments, manufacturing pipelines, scientific instruments, and future machine classes not yet invented — reaches for the same files a human reaches for. MX is the machine layer: the runtime that makes those files executable by any of them.

This is not an AI layer. Not a web layer. Not a content layer. The machine layer. The things humans publish — every video, every podcast, every PDF, every image, every web page — are the universal substrate of human knowledge. Machines are becoming the universal consumers of that knowledge. These principles govern how we make that work.

They apply to every cog, every file, every script, every piece of work that carries the MX name.

The canonical statement, in two lines:

- **MX (what it is):** metadata that records a file's provenance, context, and intended use, and travels with the file.
- **MX (why it matters):** what keeps Content Ops work usable when an AI agent, or any other system, encounters the file outside the environment that produced it.

---

## 1. Design for Both

Every design decision should work for humans AND machines. Not one at the expense of the other.

This is the founding principle. When we put YAML frontmatter on a markdown file, the YAML is for machines and the markdown is for humans. Same file. Both audiences served. When we hide configuration files with a dot prefix (`.mx.yaml`), humans get a clean workspace and machines get discoverable metadata. Both win.

The test is simple: does this decision help one audience while hurting the other? If yes, find a better decision.

YAML frontmatter in markdown passes the test. Mermaid diagrams fail it — they need a rendering engine for humans and an interpretation layer for machines. Neither audience is well served.

---

## 2. Metadata-Driven Architecture

Every piece of content should carry structured metadata that tells machines what it is, who it is for, and how it relates to everything else.

MX uses four layers: repository level (`.mx.yaml` at root), directory level (per-package metadata), file level (YAML frontmatter), and code level (`@mx:` annotations). Each layer adds context. Together they create a self-describing system where any machine — from a frontier language model to an industrial controller — can navigate as intelligently as a human.

The minimum: every file should declare its `purpose`, `audience`, and `stability`. Everything else builds from there.

---

## 3. Context Declaration

Files should say what context they provide and what context they need.

Any machine encounters a file. Without context declaration, it has to guess what to read first. With `ai.contextProvides` and `ai.contextRequired` fields, the machine knows exactly what this file offers and what it needs to read before it can work effectively.

This creates a self-documenting dependency graph. No more "just ask Tom how this connects to that." The connections are in the metadata.

---

## 4. Universal Accessibility

Content must work for every machine that consumes it — AI agents, robots, autonomous vehicles, industrial control systems, medical devices, IoT sensors, manufacturing pipelines, scientific instruments. The machine consuming your document may be a CLI tool with no JavaScript, a browser agent, a server-side processor, an on-device model with fewer than 100 million parameters, a real-time industrial controller that cannot tolerate ambiguity, or a future machine class that does not yet exist.

The implication: plain text over proprietary formats. Markdown over Word. YAML over binary config. ASCII diagrams over rendered graphics. Semantic HTML with Schema.org structured data. Explicit relationships over implicit ones.

If it requires a specific rendering engine to understand, it fails this test.

---

## 5. Context-Preserving References

Links must still make sense when a document leaves its repository.

Documents get extracted. They become PDFs, blog posts, email attachments, AI context windows. A relative path like `../../datalake/knowledge/system/repo-philosophy.md` is meaningless outside the repo. The human cannot mentally reconstruct the folder tree. The machine cannot resolve the path.

The fix: every cross-document reference includes the document title and an absolute URL alongside the relative path. It works in the repo, in a PDF, in a chat window, everywhere.

In YAML frontmatter, paths must always be repo-root-relative. Never `../` navigation. `docs/reference/file.md`, not `../../docs/reference/file.md`.

---

## 6. Size-Neutral Documentation

Never hardcode counts in prose. They go stale instantly.

Write "the principles" not "twelve principles." Write "the cog ecosystem" not "thirty-five cogs." The moment someone adds a cog, every document that says "thirty-five" is wrong. Nobody updates them. The documentation lies.

Use specific numbers only when the number IS the information: WCAG requires 4.5:1 contrast. Node.js 20.x. Version 2.0. Everything else uses descriptive language that stays true regardless of what gets added or removed.

---

## 7. Executable Documentation

Documents should contain their own generation instructions.

The problem is documentation drift. The build instructions live in one place. The output paths live in another. The quality criteria live in someone's head. When these separate, they diverge. The README says "run X" but X changed six months ago.

MX embeds two fields directly in document metadata: `mx:runbook` (context injected whenever a machine reads the file) and `mx:deliverable` (complete generation instructions with output path). The document is self-executing. Everything needed to regenerate it lives inside it.

---

## 8. WCAG-Informed Design

Accessibility standards for disabled users provide proven patterns that also work for machines.

WCAG represents decades of research into making content accessible. Semantic HTML helps screen readers AND AI agents. Clear heading hierarchy helps keyboard navigation AND automated parsing. Proper contrast ratios help low-vision users (machines do not care about contrast — this one serves humans first, and that is fine).

The convergence is real: patterns optimised for disabled users consistently optimise for machine readability too. WCAG compliance is also the law in the US, UK, EU, and Canada. Following it is not optional.

---

## 9. Name Consistency for Related Files

Related files should share a base name. `blog-post.html`, `blog-post.css`, `blog-post-social.svg`. Not three different names that happen to be related.

Machines can inspect HTML to find linked stylesheets. Humans cannot. When a human sees three files with the same base name, the relationship is instant. When the names differ, the human has to open files and trace references. That is cognitive load we can eliminate.

The pattern: `{base-name}.{extension}` or `{base-name}-{descriptor}.{extension}`. Always.

---

## 10. Metadata Everywhere

Every artefact must carry its own metadata, and that metadata must survive format transformations.

Content moves: markdown becomes SVG, SVG becomes PNG, PNG goes into a PDF. Each transformation risks stripping metadata. A PDF without provenance metadata is a dead artefact — a machine cannot determine where it came from, what it contains, or whether it is current.

The fix: re-embed metadata at every transformation step. YAML frontmatter in markdown. XML metadata in SVG. XMP in PDF. HTML meta tags on web pages. The MX namespace (`https://mx.allabout.network/ns/1.0`) stays consistent across all formats.

Minimum metadata at every stage: what it is, where it came from, who made it, when, and why.

---

## 11. Consistent Attribute Placement

Every attribute has one canonical home. Version lives in YAML frontmatter, not filenames. Status lives in the `stability:` field, not a `-draft` suffix. Date lives in frontmatter and git history, not the filename.

When attributes are scattered across filenames, titles, body text, and metadata, they inevitably drift out of sync. The filename says v1, the frontmatter says v2, nobody knows which is current. One home per attribute eliminates this.

Filenames describe what a document IS. Frontmatter describes everything about it. Git tracks its full history. Nothing is duplicated. Nothing can disagree.

---

## 12. Folder SOUL.md Convention

Any folder representing a coherent body of work should have a `SOUL.md` — a control document that defines voice, constraints, and narrative.

Without it, folders drift. Twenty documents follow one tone. A twenty-first contradicts them all because the author (human or AI) did not know what the folder was trying to say.

The rule: on entering any folder, check for a `SOUL.md`. If present, read it before editing or creating any file. The SOUL defines the voice, the constraints, and the story. Everything in that folder must be consistent with it.

---

## 13. Write Like a Blog

The human-readable section of every cog should read like a well-written blog post. Informative, not technical. Editorial and authoritative. Storytelling and honest.

A cog has two sections: YAML frontmatter for machines and markdown for humans. If the markdown reads like a specification, both audiences are consuming the same dry, structured content — and neither is well served. The machine gets better value from structured YAML (it can actually parse that). The human gets better value from narrative prose (they can actually enjoy reading that).

This does not mean dumbing things down. A well-written Wired article is both accessible and deeply informed. Lead with the problem. Show the journey. Be candid about what works and what does not yet. Use short paragraphs and direct language. Tell the reader why this matters before you tell them how it works.

The test: could this section be published as a blog post that someone would actually want to read? If not, rewrite it.

This principle applies to all cogs. Even specifications. Especially specifications — because those are the documents most people avoid reading, and the ones that matter most.

---

## 14. Root-Anchored Asset Paths

A page must be understandable in isolation, regardless of the URL it is served from.

When a custom 404 page, an error document, or a templated page is served at an unexpected path, relative asset references break. A stylesheet linked as `css/style.css` resolves correctly at `/` but resolves to `/blogs/css/style.css` when the same document is served at `/blogs/`. The page loads, the markup is correct, and the page is unreadable. Humans see an unstyled wall of text. Machines see broken images and missing stylesheets they cannot follow.

The fix: anchor every in-page asset reference at the site root. Write `/css/style.css`, `/js/app.js`, `/images/logo.webp`. Never `css/style.css` or `../images/logo.webp`. This applies to `<link>`, `<script>`, `<img src>`, `<img srcset>`, `<source srcset>`, `<video>`, `<audio>`, and any other element that fetches a resource. Co-located demo bundles (a sample page beside its own `style.css`) are the only legitimate use of relative asset paths, and they should be self-contained directories with no references back to the parent site.

The test: copy any HTML file to a different URL depth and load it. If anything visible breaks, the asset paths are not anchored. A page that depends on its URL to render is a page that fails the moment routing changes — and routing always changes.

This principle is the in-page sibling of Principle 5 (Context-Preserving References). Principle 5 governs links between documents; this one governs the assets a single document needs to render itself.

---

## 15. Any Document Can Be a Cog

Any document can become a cog. Add YAML frontmatter and it is machine-readable. That is the whole barrier to entry.

But there is a cost equation hiding in that simplicity. When the metadata is strong — rich description, clear tags, explicit relationships — an AI agent reads the frontmatter and knows what to do. Twelve lines of context. Done. When the metadata is weak — just a name and a version — the agent has to read the entire document to understand what it is, what it relates to, and whether it matters. That is compute spent because the metadata was not strong enough to answer the question.

This is not a penalty. It is an incentive. A cog with three fields works. A cog with rich metadata works better and costs less to use. Every field you add to the frontmatter is a question an AI agent does not have to answer by reading your prose.

The rule: start with basic frontmatter — you have a cog. Then improve the metadata over time. Every improvement cuts compute.

---

## Use Existing Standards

Never invent when you can adopt. Every new convention is cognitive overload for humans — and we design for both.

Everything that benefits SEO, accessibility, and usability also benefits MX. These disciplines share a common goal: making web content explicit, structured, and unambiguous. MX builds on their foundations. Established web standards — HTML semantics, WCAG, Schema.org, Open Graph, Dublin Core, `robots.txt`, `sitemap.xml` — come first. MX adds governance and lifecycle metadata where those standards leave gaps. MX never duplicates or replaces what existing standards already provide. A well-built MX page is also a well-built SEO page and a well-built accessible page — providing the explicit structure any system needs, without making promises about any specific system's output. The standards reinforce each other.

MX OS uses standards humans already know: Markdown, YAML, HTML meta tags, QR codes, git, OAuth, MIT licence. But this principle goes beyond technical formats. It means following human conventions too. `README.md`, `CONTRIBUTING.md`, `LICENSE`, and `CHANGELOG.md` live at the repo root because that is where humans expect to find them. Convention says where things belong.

This document (`principles.cog.md`) is Canon content and lives in `mx-canon/ssot/` — alongside the other single sources of truth. Canon wins the content and the location.

The rule: before creating anything new, ask whether a standard or convention already exists. If it does, use it. If it almost fits, extend it. Only if nothing exists do you invent — and then you document why.

---

## Cogs All the Way Down

There is an old story about a scientist giving a lecture on cosmology. Afterwards, an elderly woman tells him he is wrong — the world sits on the back of a giant turtle. "And what does the turtle stand on?" he asks. "It is turtles all the way down," she replies.

MX OS is cogs all the way down.

The machine describes itself with a cog (`$MX_HOME/mx-os-environment.cog.md`). The repository describes itself with cog-shaped metadata (CLAUDE.md, SOUL.md). The folder describes itself (SOUL.md). The document describes itself (YAML frontmatter). The script describes itself (comment-block metadata). The action-doc describes what it does AND does it (execute block).

Every level of the stack uses the same pattern: structured metadata for machines, readable prose for humans. Same format. Same principle. No special cases. The thing that contains cogs is itself a cog. The environment that hosts the registry is itself registered.

This is not cleverness. It is consistency. When every level speaks the same language, any machine — AI agent, robot, industrial controller, or system not yet built — can navigate from the environment to the metadata without learning a new format at each layer. One pattern, learned once, applied everywhere. Turtles — cogs — all the way down.

Don't panic. Read `$MX_HOME`.

---

## Output Introduces Itself

Every piece of machine-readable output from an MX tool must be self-describing.

When `mx-show.sh --json` produces a snapshot of running processes, it does not output a bare array. It wraps the data in an MX envelope: name, description, content type, source, version, timestamp, machine, user, and a runbook explaining exactly how the data was created. Any reader — human or AI — encountering this output for the first time knows what it is, where it came from, and how it was generated. No guessing. No out-of-band documentation needed.

This extends the founding principle of "the object introduces itself" from web objects to CLI output. A QR code on a coffee machine leads to a cog that introduces the machine. A JSON payload from a script carries metadata that introduces the payload. Same principle, same pattern, different medium.

The minimum envelope: `name`, `source`, `created`, and `runbook`. Everything else is valuable but optional. The runbook is the critical field — it turns opaque data into transparent data. It is the difference between "here are some numbers" and "here is what these numbers mean, how they were collected, and what was filtered out."

The rule: if a script or API produces structured output, wrap it in an `mx` metadata envelope. The output should never need a separate README to explain itself.

---

## Embrace and Extend

MX does not replace existing metadata conventions. It reads what is already there and adds an identity layer on top.

Every file type has its own conventions. JavaScript has JSDoc. HTML has meta tags. CSS has comments at the top. These conventions have been around for decades. They work. MX does not replace them.

What MX adds is governance: `@mx:name`, `@mx:purpose`, `@mx:status`, `@mx:contentType`. The file can now introduce itself to any machine that needs to understand what it is — AI agent, robot, industrial controller, registry, or system not yet built. The pre-existing metadata IS the content. MX adds the identity.

The pattern is two steps: **embrace** what the file already says — JSDoc `@description` is the prose block, Schema.org JSON-LD is the definition block, EXIF data is the provenance block. Then **extend** with MX governance fields. Never duplicate. Never wrap. The result: a file that works exactly as before for tools that do not understand MX, and is fully machine-readable for tools that do.

---

## Documents Are Self-Sufficient

A document removed from its originating website must remain interpretable by any machine that encounters it.

PDFs are downloaded and forwarded. Cogs are extracted and used as context. Contracts are archived. White papers circulate for years. In every case, the machine reading the document may have no access to the originating site and no way to verify origin, version, or currency without the document providing that information itself.

Every important document carries: what it is; who wrote it; when; whether it is the current version; where the master copy lives; and who attested to its integrity. This is what `canonicalUri`, `provenanceAuthor`, `modified`, and cryptographic signing are for — not web optimisation, but standalone machine readability.

The test: extract the document from its website entirely. Can a machine determine what it is, trust it, and find the current version? If not, the document is not MX-compliant regardless of how well its parent web page is structured.

---

## Trust Is Structural

Machine-readability and machine-trustworthiness are separate properties. A document can be perfectly structured, fully indexed, and semantically rich — and still give an agent no basis to trust it. Who wrote this? Has it been altered in transit? Is this version current? Was it produced by a human, an AI, or an automated system?

The answer cannot come from the content itself. Self-attested provenance proves nothing. The answer comes from REGINALD: the public registry where documents are registered, cryptographically signed, and made verifiable by any machine on earth. The attestation is narrow and precise: *this is what the owner published, unaltered* — not factual correctness, not editorial quality. Origin and integrity only.

The practical effect compounds. Agents that read attested documents hallucinate less — they have verified facts to cite rather than inferences to make. Fewer inference steps means lower token consumption and lower energy draw. And as the EU AI Act, the European Accessibility Act, and digital-records legislation across multiple jurisdictions place documentation, logging, and verifiability obligations on the organisations they cover, attestation becomes the mechanism by which those obligations are demonstrably met. MX and REGINALD do not grant compliance with any of these regulations — that remains a legal duty of the organisation. What they do is make the documentation the organisation must produce structured, machine-readable, tamper-evident, and verifiable on request.

MX makes content machine-readable. REGINALD makes it machine-trustworthy. Both properties are required for machine-ready content. Building one without the other is building half the system.

---

## Verification Is Deterministic

Trust requires that two parties reach the same answer about the same artefact. That property is only possible when every step in the verification path is deterministic.

The REGINALD core — cog validation, canonicalisation, signing, attestation checking, registry indexing — produces byte-identical outputs for byte-identical inputs. The verdicts are produced by schema validation and cryptographic primitives, the same kind of finite, enumerated machinery that runs the DNS root or a TLS handshake. No language model. No agent loop. No retrieval-augmented anything. A registry whose answers shift when a model is upgraded, a temperature is changed, or a prompt is rewritten is an oracle, not a registry, and it cannot underwrite the trust chain that signed-cog consumers depend on.

Agents have a legitimate place elsewhere — in the web-audit suite, where pages on the open web are too varied for every check to be enumerated up front. Even there, the binding pattern is *run the agent, observe its runs, log every step, instrument until the behaviour is understood, convert the steady-state behaviour into a deterministic script, and add a small LLM-judgement pass at the end only where a human-style verdict is genuinely needed.* Anything an agent does the same way more than twice becomes code.

The boundary is firm: agents may discover; deterministic scripts must deliver; the verification core never crosses the line. This is the property that makes attestation tractable, machine-checkable, and worth what it claims to be worth.

---

## Design for the Worst Machine

You cannot detect which machine is consuming your document. User-Agent strings are spoofable. The machine might be a server-side model with no JavaScript execution. It might be a local model with fewer than 100 million parameters and a tiny context window. It might be a browser extension with full DOM access but no ability to follow links. It might be an industrial controller that needs the answer in a single structured field. It might be a robot reading a maintenance manual on a warehouse floor.

The principle: design for the machine with the least capability. If the worst machine can understand the document, every machine can. This means: critical information explicit in the markup, not locked behind JavaScript. Explicit structure, not inferred relationships. Redundancy across formats — the same fact in meta tags, Schema.org JSON-LD, and visible text — because different machines read different parts of the document.

This is not over-engineering. It is strategic redundancy for an audience you cannot predict.

---

## Plain Characters in Prose

Prose carries the meaning. HTML entities and decorative Unicode get in the way of it.

In prose, the readable text a human is meant to consume, write literal characters. Straight quotes (`"` and `'`) not typographic curly quotes (`"` `"` `'` `'`) and not their HTML-entity equivalents (`&ldquo;`, `&rdquo;`, `&lsquo;`, `&rsquo;`). Three-dot ellipsis (`...`) not `&hellip;` or `…`. Plain hyphens for compound words; em-dashes are banned on every surface in any form, with commas, semicolons, colons, or parentheses doing the work instead. Regular spaces, not `&nbsp;`.

Three audiences win at once. Machines spend fewer tokens parsing the page and fewer cycles normalising codepoints across editors. Humans reading the source pay no cognitive overhead, because every character looks the same in every editor, terminal, and diff. Pipelines stop tripping over encoding drift between Markdown, HTML, JSON, PDF, and whatever format comes next.

The rule is scoped to prose. HTML entities remain necessary where they are structurally required: `&amp;` in URL query strings, `&lt;` and `&gt;` when source code is shown as text, layout glyphs like `&copy;` in footers or `&middot;` as a visual separator in chrome, icon codepoints like `&#9776;` for a menu button. The principle is no entities inside the reader's words. Where the entity carries plumbing rather than meaning, leave it alone.

If a renderer wants to curl your quotes or convert your `...` into `…` at display time, that is the renderer's job, not the source's.

---

## Plumbing Beats Tactics

There is no single "LLM" to optimise for. ChatGPT, Claude, and Gemini have different ingestion paths, different fetch behaviour, and different trust signals — and the agents built on top of them add another layer of variation. A markup tactic that earns citations on one platform can be ignored by another, and the rankings reshuffle whenever a vendor changes a system prompt, retires a model, or ships a new one. New readers arrive every quarter with rules that are not yours to know in advance.

The conclusion is not that tactics never matter. It is that tactics are not the layer to invest in. The durable layer is the plumbing: correct MIME types, a discoverable sitemap, an `llms.txt` (or whatever follows it) that is actually wired up — served, listed, and referenced — and structured data that agrees with the rendered page. Four items. Each is a configuration change in tools you already use. The simplest machine can parse the result, and every smarter one inherits the work for free.

The rule: when there is a choice between optimising for a named platform and fixing the plumbing underneath, fix the plumbing. Tactics will reshuffle every few months. Plumbing does not.

This is the per-platform sibling of *Design for the Worst Machine*. That principle governs the capability floor — the least-capable reader you must serve. This one governs the time axis — the readers that have not arrived yet, whose rules you cannot anticipate.

---

## Convergence

Patterns that work for one audience consistently work for all.

Semantic HTML helps screen readers AND AI agents. Clear heading hierarchy helps keyboard navigation AND automated parsing. Schema.org structured data helps search engines AND language models. Accessible form labels help disabled users AND browser automation agents. Good SEO helps human searchers AND AI citation systems.

The same convergence holds across every machine class. A robot reading a maintenance manual, an autonomous vehicle parsing a safety procedure, an industrial system consuming a manufacturing spec, a medical device processing a clinical protocol — all benefit from the same explicit structure. MX does not optimise for one machine class. It makes anything you publish — a video, a podcast, a PDF, an image, a web page — readable by any machine that will ever consume it, including classes not yet invented.

This convergence is not coincidental. It reflects a shared underlying truth: explicit, structured, unambiguous content is universally comprehensible. When you optimise for accessibility, you get machine readability as a side effect. When you optimise for MX, you get accessibility as a side effect.

The principle: never treat SEO, accessibility, usability, and MX as separate workstreams. They are the same workstream viewed from different angles. A well-built MX document passes WCAG, ranks well in search, works for every machine class, and is easy for humans to use — all at once.

Two specific shapes the convergence takes are worth naming. The Provenance Gap is what JSON-LD and the Schema.org vocabulary do not carry about who made the assertion, when, and whether to trust it. The Lifecycle Gap is what they do not carry about when the document was published, when it expires, who maintains it now, what its canonical URI is, and whether it has been superseded. MX names both as first-class signals, with each lifecycle signal mapped to an existing canon field (`created`, `expires`, `originator` / `author`, `stewardship.steward` / `maintainer`, `canonicalUri`, and `status` plus the `supersedes` / `supersededBy` / `replacedBy` chain). The discovery layers solve *find me*; MX solves *now what*. The full treatment sits in *MX: The Protocols* chapter 10 and in the positioning paper at [`mx-canon/ssot/papers/geo-vs-mx.md`](papers/geo-vs-mx.md).

---

## Timeless Prose

Documents should read as if they have always existed in their current form.

No "this update includes." No "previously, we used." No "migrated from." No "now deprecated." No "Status: Unnecessary — do not implement." These phrases anchor content to a moment in time. When that moment passes, the document reads like a changelog instead of a reference.

The fix: state what IS, not what CHANGED. Say "this tag is unnecessary" not "this tag has been retired." Say "use `mx:content-policy`" not "replace `ai-content-policy` with `mx:content-policy`." The reader does not need to know what came before. They need to know what to do now.

This applies to all cogs, all SSOTs, and especially all book manuscripts. Technical SSOTs may include migration notes in a clearly separated section, but the body of the document reads as timeless truth.

---

## Canon Wins

If Canon conflicts with anything elsewhere, Canon is correct. mx-canon is the single source of truth. Everything else is canon fodder.

---

*These principles are not aspirational. They are operational. We follow them today, in every file we create, every cog we write, every script we build. When we find ourselves breaking one, we fix the work — not the principle.*
