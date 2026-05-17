---
title: "What Google's web.dev agent guidance does and does not touch"
description: "Source-citable notes on Google's 1 May 2026 web.dev guidance on agent-friendly websites, captured for the BMV deck and the planned blog post on the same theme."
author: Tom Cranstoun
date: 2026-05-07
status: draft
created: '2026-05-08'

mx:
  canonicalUri: https://mx.allabout.network/research/2026-05-google-webdev-notes.html
  contentType: research-note
  audience: business
---

# What Google's web.dev agent guidance does and does not touch

Research note for the BMV investor-deck differentiation pass and the planned blog post *"What Google's web.dev agent guidance does not touch"*.

## Sources

1. **Google, web.dev — *Build agent-friendly websites***
   URL: <https://web.dev/articles/ai-agent-site-ux>
   Authors: Kasper Kulikowski, Omkar More
   Last updated: 1 April 2026 UTC (cited and circulated from 1 May 2026)

2. **Search Engine Journal — *Google Tells Developers To Build For AI Agents, Not Just Humans***
   URL: <https://www.searchenginejournal.com/google-tells-developers-to-build-for-ai-agents-not-just-humans/573587/>
   Author: Matt G. Southern
   Date: 1 May 2026

## What Google's guide covers

Google's article is organised under three section headings: *How agents view your site*, *Build agent-friendly websites*, and *Next steps*. The concrete recommendations, verbatim, are:

1. "All necessary actions, taken by a human or agent, should be clearly reflected in the interface."
2. "Ensure stable layout. Agents that take screenshots will likely be confused if your website layout is constantly shifting, for example when an **Add to cart** button on product page is in different location for each product category."
3. "Avoid 'ghost' elements or transparent overlays that might hide interactive elements."
4. "Design actionable elements with semantic HTML. Prefer `<button>` and `<a>` tags over modified `<div>` and `<span>` elements."
5. "If you cannot use semantic HTML, always provide the element the appropriate `role` and `tabindex`. For example, `<div role=\"button\">`."
6. "Set `cursor: pointer` in CSS, which is a strong signal for actionability."
7. "Add the `for` attribute on `<label>` tags to link them to inputs."
8. "Make sure any interactive elements required to continue the user journey have a visible area larger than 8 square pixels, to avoid being filtered out by visual analysis."

Every item on this list is a property of the rendered HTML page: the DOM, the accessibility tree, CSS, semantic-element choice, and visual stability of the layout. The guidance assumes the agent is looking at a page, either through the DOM or through screenshots, and tells developers how to make that page legible.

## What Google's guide does not touch

The web.dev article does not address, by name or by substance, any of the following:

- **Provenance.** Where the content came from, who authored it, when it was first published, and the unbroken chain back to the source. No mention of C2PA, no mention of content credentials, no mention of signed manifests.
- **Authentication and attestation.** No mention of cryptographic signing of content, of integrity signatures, of publisher identity attached to the asset itself.
- **Rights and licensing.** No mention of licence metadata, no mention of usage permissions for AI training or inference, no mention of SPDX, Creative Commons, or any rights vocabulary.
- **Lifecycle.** No mention of versioning, supersession, retraction, deprecation, or how an agent should know that a previously authoritative document has been replaced.
- **Off-web carriers.** The guidance is HTML-only. It says nothing about PDF, DOCX, EPUB, MP4, audio files, CSV, ICS feeds, RSS, or Markdown — the formats in which most enterprise, government, and scholarly content actually lives.

This is the MX scope. MX picks up exactly where the web.dev article stops.

## Quotes the deck and the blog post can cite

### From Google's web.dev article

> "Everything we suggest to make a site 'agent-ready' also makes sites better for humans."

> "Agents that take screenshots will likely be confused if your website layout is constantly shifting…"

> "Design actionable elements with semantic HTML. Prefer `<button>` and `<a>` tags over modified `<div>` and `<span>` elements."

### From the Search Engine Journal coverage (Matt G. Southern, 1 May 2026)

The SEJ piece reproduces the same Google equivalence statement:

> "Everything we suggest to make a site 'agent-ready' also makes sites better for humans."

And quotes Google's framing of the audience shift:

> "some human users are pivoting from manual navigation to delegating goal-oriented journeys to AI agents"

SEJ's own paraphrase of the recommendations matches the verbatim list above: semantic HTML, stable layouts, linked labels, and pointer cursors.

## One-sentence framing for the deck slide

> **Google covered the page. We cover the file.**
>
> Google's 1 May 2026 web.dev guidance is accessibility hygiene for the rendered HTML page — semantic elements, the accessibility tree, stable layouts. MX adds what the page cannot carry on its own: provenance, authentication, rights, lifecycle, and the off-web carriers (PDF, DOCX, EPUB, MP4, audio, CSV, ICS, RSS, Markdown) where most of the world's content actually lives.

## Notes for the deck author

- The Google equivalence quote is the strongest single line: it concedes, in Google's own words, that the guidance is a subset of practice that already serves humans. That is the answer to "why wouldn't Google just do this?" — they already did, and they confined it to the page.
- The web.dev article is short. The full set of recommendations is the eight items above; nothing has been omitted. If the deck implies Google's guidance is more extensive than this, it overstates the source.
- The MX scope claims (provenance, authentication, rights, lifecycle, off-web carriers) are not contradicted by Google's article — they simply are not addressed. The defensible framing is *"Google did not touch X"*, not *"Google rejected X"*.
