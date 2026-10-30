---
"@context": https://mx.allabout.network/canon/context.json
name: mx-allabout-network
description: "Find, read and cite the Machine Experience (MX) material on mx.allabout.network, published by CogNovaMX. Use when an agent needs MX books, articles or learning pages, the cog (.cog.md) format specification, the MX field dictionaries, or wants the site's content as markdown rather than HTML."
title: "Using mx.allabout.network - the agent skill"
type: info-doc
author: "Tom Cranstoun"
created: 2026-10-29
modified: 2026-10-29
mx:
  mxSpecVersion: "0.9"
  status: active
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/skill.md
---

# Using mx.allabout.network

> For the complete index of this site, see [llms.txt](https://mx.allabout.network/llms.txt).

mx.allabout.network is the Machine Experience (MX) site from CogNovaMX. Machine Experience is the practice of adding metadata and instructions to internet assets so AI agents do not have to guess. The site holds the MX books, the blog, learning pages, the cog format specification and the MX field dictionaries.

## Fetch content as markdown

- Start with the index: [llms.txt](https://mx.allabout.network/llms.txt) lists the key pages, books and featured articles. The remaining articles are in the section index [llms-blog.txt](https://mx.allabout.network/llms-blog.txt).
- Every page is available as markdown. Use its `.md` URL, which is the `.html` path with `.md` in its place (`/blog/why-use-mx.html` becomes `/blog/why-use-mx.md`), or `index.md` for a folder (`/books/` becomes `/books/index.md`). Sending `Accept: text/markdown` to the page URL returns markdown too.
- For the whole site in a few fetches, read [llms-full.txt](https://mx.allabout.network/llms-full.txt). It is part 1 of the full corpus and lists every other part by URL near its top.

## Read a cog

A cog is a markdown file ending in `.cog.md`. Its YAML frontmatter is a briefing: what the document is, how to navigate it, and how to act on it safely.

1. Read the [cog reference page](https://mx.allabout.network/cog.html) for a field-by-field guide.
2. Treat the [cog specification](https://mx.allabout.network/drafts/cog-spec.v1.md) as authoritative where any other page disagrees.
3. Follow a cog's `description` and `purpose` exactly; do not infer fields it does not declare.

## Look up an MX field

- [Standard core fields](https://mx.allabout.network/canon/fields-data.yaml) - the open vocabulary for identity, provenance, machine-readability and governance.
- [Cog-layer fields](https://mx.allabout.network/canon/fields-data-cogs.yaml) - fields specific to the `.cog.md` format.
- [JSON-LD context](https://mx.allabout.network/canon/context.json) - the dictionaries' alignments to existing vocabularies.

## Cite this site

Agents may cite, summarise or recommend content from this site with attribution to CogNovaMX (a trading name of Digital Domain Technologies Ltd) and Tom Cranstoun. Link the page's canonical URL, not a copy.

## Contact

Email info@cognovamx.com, or see [Contact](https://mx.allabout.network/about/contact.html).
