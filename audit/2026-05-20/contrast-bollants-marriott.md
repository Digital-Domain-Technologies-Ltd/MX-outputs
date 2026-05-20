---
title: "Two Hotels, Two Postures: A Machine-Readability Contrast"
description: "What a small independent hotel and a global chain expose to AI agents, side by side, and what MX adds that neither has yet."
author: Tom Cranstoun
created: 2026-05-20
modified: 2026-05-20
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [humans, machines]
  tags: [audit, contrast, machine-experience, bollants, marriott, mx, reginald]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/audit/2026-05-20/contrast-bollants-marriott.md
  generate:
    output: mx-outputs/audit/2026-05-20/contrast-bollants-marriott.pdf
---

# Two Hotels, Two Postures: A Machine-Readability Contrast

**Sites audited:** Bollants im Park (`www.bollants.de`) and Marriott (`www.marriott.com`)
**Audit date:** 2026-05-20
**Method:** MX Web Audit Suite (origin layer plus rendered DOM where available).

## Headline

Two hotels, two postures toward the machines that increasingly answer questions on their behalf. Bollants is a single independent property in the Nahe valley with a Contao-based marketing site. Marriott is a global chain with tens of thousands of properties behind a custom enterprise platform. On any commercial axis (catalogue size, brand budget, marketing engineering depth) the comparison is one-sided.

On machine-readability the comparison reverses. Bollants lets every named AI client through the door and serves them the same HTML it serves a human. Marriott refuses every named AI client and refuses every programmatic request, including a real browser session driven by Puppeteer. The small site is the legible one. The global chain is, for the audiences we tested, machine-illegible.

Neither site is exemplary yet. Bollants has a coherent posture and a list of fixable details: weak accessibility, a thin sitemap, structured data that names types without filling them. Marriott has chosen a posture that, in the agent-mediated economy, sells the conversation about its own properties to whichever third party reaches the agent first. This brief sets the two side by side, names what each gets right and wrong, and ends on what MX adds that neither has today.

## Side-by-side: the origin layer

The origin layer is what a machine sees before any page renders: which clients are allowed through, what the discovery files say, what well-known signposts exist.

| Test | Bollants | Marriott |
| --- | --- | --- |
| ClaudeBot (Anthropic) | 200 OK (transient socket noise) | 403 Forbidden |
| GPTBot (OpenAI) | 200 OK | 403 Forbidden |
| ChatGPT-User (OpenAI) | 200 OK | 403 Forbidden |
| PerplexityBot | 200 OK | 403 Forbidden |
| GoogleOther (Google AI) | 200 OK | 403 Forbidden |
| Google-Extended | 200 OK | 403 Forbidden |
| CCBot (Common Crawl) | 200 OK | 403 Forbidden |
| Plain HTTP (no user agent) | 200 OK | 403 Forbidden |
| Browser-UA curl | 200 OK | 403 Forbidden |
| Puppeteer (real browser session) | 200 OK, renders fully | blocked, no usable HTML |
| `robots.txt` | present, declares sitemap | present, declares sitemap |
| Sitemap (at declared URL) | 131 URLs | 0 URLs (entry-point is empty) |
| `llms.txt` | not present | not present |
| `/.well-known/agent-card.json` | not present | 503 Service Unavailable |
| Platform fingerprint | Contao CMS, detected | none, custom enterprise build |

Bollants exposes its full marketing surface to any client that asks. Marriott exposes the robots file alone. Every signpost the audit suite tests for, including the ones Marriott declares it has, points at an empty room.

## Side-by-side: the page layer

For Bollants, the audit rendered seven content pages and produced the per-page measurements the MX Web Audit Suite is built to report. For Marriott no pages rendered, so every page-level dimension is unmeasurable.

| Dimension | Bollants (7 pages audited, 131 in sitemap) | Marriott |
| --- | --- | --- |
| Performance band | Excellent (A) — avg load 1,912 ms, avg FCP 386 ms | unmeasurable |
| Accessibility band | Needs Improvement (D) — 162 critical findings | unmeasurable |
| SEO band | Excellent (A) — content-page average 93/100 | unmeasurable |
| AI suitability (served HTML) | Good (B) — 61/100 | unmeasurable |
| Schema maturity | Level 1 (Decoration) — SDQ 51/100 | unmeasurable |
| Metadata Stack Completeness | 59/100 (B) | unmeasurable |
| Discovery Readiness | 40/100 (C) | unmeasurable |
| Agent Readability | 65/100 (B) | unmeasurable |
| Pipeline Survivability | 90/100 (A) | unmeasurable |
| Images with alt text | 230 / 230 (100%) | unmeasurable |
| Pages missing CSP header | 7 of 7 | unmeasurable |

This is the point where the comparison becomes uncomfortable. The small hotel is the only one of the two whose page-level quality can even be discussed. The chain has chosen a posture in which the answer is "we won't say". An agent looking to compare the two does not arrive at "the chain is better"; it arrives at "the chain refused, so I'll quote whatever I already have".

## What lies behind the wall

After the brief was first written we received a sample of the served HTML, captured from a real human session in a real browser, of the very URL the original prompt cited. The bot block does not apply to a human; a human gets a page. The question this section answers is what a machine would have got if the block were lifted. The answer is sharper than the bot block itself.

The page that comes back is, on the server's own declaration, not a page the brand wants crawled. The `<head>` carries `<meta name="robots" content="noindex,nofollow">`. Marriott is telling search engines and any crawler that respects the directive to neither index this URL nor follow its links. The URL the prompt cited is, by Marriott's own choice, intended to exist only inside a human session.

The metadata that an agent would normally read to summarise the page is absent. The Open Graph block declares the slots and leaves them empty:

| Slot | Value served |
| --- | --- |
| `og:title` | empty |
| `og:description` | empty |
| `og:image` | empty |
| `og:type` | empty |
| `og:site_name` | empty |
| `og:url` | empty |

The `<title>` itself is generic chain marketing: "Where Can We Take You? Endless Experiences & Top Locations | Marriott Bonvoy". The `<meta name="description">` is generic: "Find the right destination that meets your travel interests". Nowhere in the served HTML does the property the URL searched for ("Eugenia de Montijo Autograph Collection") appear. A human reaches the page and sees a result for that property, rendered into the DOM by client-side JavaScript. The HTML the server actually emits is a Marriott Bonvoy chrome shell with the property data arriving later through Next.js chunks (the page ships roughly thirty deferred script tags from `mi-shop-renderer-2`).

Two further signals confirm what the bot block already implied. An inline script declares `const ak_sgnl = '3cfa7'`, which is Akamai's bot-manager fingerprint cookie being acknowledged in the page itself; the block we hit at the edge is Akamai's. A separate script rewrites `document.referrer` via `Object.defineProperty` so that analytics see every session as arriving from `https://www.bing.com/`; this is a deliberate measurement choice the page makes on every load.

The composite picture is that machine-illegibility is not one decision at the edge; it is layered. The edge blocks the named AI clients. The page that does render is marked `noindex,nofollow`. The Open Graph tags that would let any well-behaved client summarise the page are present in form and empty in content. The text the search returned arrives only after client-side hydration. An agent that somehow held a session token and reached the URL would still extract nothing about the property it was asked to find. The brand is not just keeping machines out at the door; it is keeping them out of the room they would have walked into.

This matters for the central claim of this contrast. The argument that Marriott would benefit from a sanctioned machine-readable channel does not hinge on relaxing the bot block. It hinges on the brand choosing to author what the agent reads, in any form, at any URL. Today the brand has chosen to author nothing for the agent to read at the URL the agent is most likely to land on. That is a posture, not a gap.

## What each site is getting right

### Bollants

The home origin is open. Every AI client we test gets a clean 200 response and renders. The sitemap exists at the standard location and declares 131 URLs in both German and English variants. Page-level quality is mixed but improvable: SEO is strong (93/100 content-page average), performance is strong (sub-2-second loads, FCP under 400 ms), every one of 230 images carries alt text, Pipeline Survivability scores 90/100. The headings, the language attribute, the OpenGraph metadata, the canonical URLs are all present and consistent. This is a site whose author has cared about the machine reader, even if they have not yet read the MX field dictionary.

### Marriott

`robots.txt` is well-formed and respects the convention of declaring a sitemap. The Disallow list is precise and locale-aware: every `/search/` variant is excluded with intent, not by accident. The site clearly has a content team that understands crawler hygiene. The block on AI agents is most likely a corporate-security or commercial-rights decision rather than a content-team mistake. The hygiene is real, just turned inward.

## What each site is getting wrong

### Bollants

The sitemap is minimal: 131 URLs declared, but none carry `lastmod`, `changefreq`, or `priority`. An agent that wants to know which pages have been updated since its last visit has no signal to act on. Discovery Readiness scores 40/100 (C) for that reason.

Structured data is present but shallow. Pages declare a `WebPage` type with no `name` property beyond the `<title>` element, so the Structured Data Quality score sits at 51/100. The site has Schema.org coverage at Level 1 (Decoration): the types are named, the slots that would let an agent reason about a hotel (room types, rates, amenities, location coordinates, opening hours, contact methods) are not populated.

Accessibility is the soft spot. 162 critical findings across seven pages, with the same pattern repeating: 61 instances of buttons without accessible names, 43 colour-contrast failures at the recommended threshold, 35 form fields without labels, 21 duplicate IDs. These are template-level fixes, not page-by-page ones, but they are not yet made.

No `llms.txt` is published. No `agent-card.json` is served. Every page is missing a Content-Security-Policy header (six pages) or three of the recommended five (one page).

### Marriott

The sitemap location declared in `robots.txt` returns 200 but is empty. This is a worse signal than not declaring a sitemap at all: a well-behaved crawler that follows the directive lands on a file that says "I have no URLs to offer". For a brand with tens of thousands of property pages, the discovery layer is broken at its declared entry point.

No `llms.txt`, no `agent-card.json`. Combined with the AI-bot block at the edge, the site offers no sanctioned path through which an agent can reach Marriott content programmatically. The agent's only remaining sources are third-party aggregators, review sites, search-engine summaries, and model training cutoffs, all of which Marriott has no editorial control over.

The block is not effective as a security measure. Malicious crawlers fingerprint around the same defences. It is most effective against the named clients that announce themselves honestly, which is also the set of clients most likely to surface Marriott to consumers in agent-mediated conversations. The choice is the brand's to make; the consequence is real.

## What MX offers that neither site has yet

MX is the discipline of giving each file the metadata a machine needs to understand its provenance, its context, and how to use it. The MX field dictionary, governed by The Gathering, names what should be declared on a hotel page so an agent can reason about it without scraping. The COG standard packages that metadata into the file itself, so the description travels with the content. REGINALD signs the result, so the agent can verify what it reads came from the named publisher and has not been altered.

What that gives a site that adopts it, in the language of these two cases:

**For a site of Bollants's class.** A populated `llms.txt` lists the URLs the brand consents to be cited, with one-line summaries. An `agent-card.json` at `/.well-known/` tells agents which API endpoints, structured-data fragments, and contact channels are sanctioned. Each property page carries a richer JSON-LD block: not just `WebPage`, but `Hotel` with `address`, `geo`, `priceRange`, `amenityFeature`, `containsPlace` for each room type, `aggregateRating` if reviews are gathered. The sitemap carries `lastmod` so an agent does not re-fetch unchanged pages. A REGINALD signature on each canonical machine-readable artefact means an agent can prove the description came from the hotel rather than from a competitor's listing or an out-of-date scrape.

**For a site of Marriott's class.** The agent-block posture stays if the brand chooses to keep it. What changes is what the brand offers instead. The `agent-card.json` becomes the sanctioned endpoint: a single file the named AI clients are explicitly allowed to read, which links to per-property structured-data fragments served from a separate origin that is not behind the bot-blocker. The brand keeps its marketing site private from machines and exposes the catalogue through a deliberate channel it controls. The signature layer matters more, not less, here: it lets the agent trust the description it gets through the back door as much as the description it might have scraped from the front.

Both moves are recoverable from the current state. Neither requires the site to be rebuilt. They require the same care for the machine reader that both sites already give the human one.

## Where each site should start

For Bollants. Populate the sitemap with `lastmod` on every entry. Publish an `llms.txt` listing the English and German URL pairs with one-line summaries. Add `Hotel` JSON-LD to the homepage with `address`, `geo`, and at minimum the room types as `containsPlace`. Fix the template-level accessibility issues (button names, label associations, contrast on the secondary palette, duplicate IDs in the booking widget). Adopt a Content-Security-Policy header sitewide. None of these is more than a sprint of work; together they move Bollants from "machine-readable by accident" to "machine-readable on purpose".

For Marriott. Decide which conversation about Marriott the brand wants to control: the one happening today through third-party scrapes and stale training data, or the one it could control through a sanctioned machine-readable channel. If the answer is the latter, publish `llms.txt`, populate the declared sitemap, serve `agent-card.json` from `/.well-known/`, and offer a per-property JSON-LD endpoint to the named AI clients on a relaxed-policy host. The marketing site itself can stay behind whatever security posture the brand chooses. The machine-readable surface is built once and operated separately.

## What this contrast says about machine readability in general

The size and budget of a brand have remarkably little to do with how legible it is to a machine reader. A four-person hotel team running Contao serves agents cleanly; a global chain with an enterprise security stack does not. The decision that matters is whether the site treats agents as readers worth helping or as traffic worth blocking. The technical work to publish to them is, in both cases, smaller than the marketing work the site has already done for human readers.

MX exists for the case where a brand makes the first choice. The standard names what to declare, COGs package it into the file, REGINALD signs it. The brand becomes the source for agent-mediated conversations about itself, instead of the gap those conversations have to be reconstructed around.

## Further Reading

Every book appendix cited in this contrast, plus the book itself. Click the link on screen or scan the QR code on paper: both encode the same URL.

| Scan | Link and description |
| :----: | -------------------- |
| ![Appendix R QR](assets/qr/appendix-r.png){ width=15mm } | **[MX: The Protocols Appendix R: Testing Agent Comprehension](https://mx.allabout.network/books/appendices/appendix-r.html)**: the methodology behind Pipeline Survivability and the rest of the MX scorecards used in the Bollants page-layer section.\ <https://mx.allabout.network/books/appendices/appendix-r.html> |
| ![Appendix S QR](assets/qr/appendix-s.png){ width=15mm } | **[MX: The Protocols Appendix S: The Eleven Agent Reading Resilience Checks](https://mx.allabout.network/books/appendices/appendix-s.html)**: the catalogue of reading-resilience checks the audit suite runs against any site that lets us in.\ <https://mx.allabout.network/books/appendices/appendix-s.html> |
| ![Appendix M QR](assets/qr/appendix-m.png){ width=15mm } | **[MX: The Protocols Appendix M: Index of Metadata](https://mx.allabout.network/books/appendices/appendix-m.html)**: the field dictionary an `llms.txt` or `agent-card.json` draws from when a site chooses to be machine-readable.\ <https://mx.allabout.network/books/appendices/appendix-m.html> |
| ![llms.txt guide QR](assets/qr/llms-txt-guide.png){ width=15mm } | **[Why llms.txt Probably Isn't Working: And What to Do About It](https://mx.allabout.network/blog/llms-txt-guide.html)**: a guide to the two structural problems most `llms.txt` files have, useful for the case where either site decides to publish one.\ <https://mx.allabout.network/blog/llms-txt-guide.html> |
| ![Books index QR](assets/qr/books-index.png){ width=15mm } | **[Get the books](https://mx.allabout.network/books/)**: MX: The Intro (free), MX: The Handbook, and MX: The Protocols. The full reference for every concept this contrast draws on.\ <https://mx.allabout.network/books/> |

---

*The MX Web Audit Suite is built and operated by CogNovaMX, a trading name of Digital Domain Technologies Ltd. Findings in this contrast are mechanically derived from observation across both sites; the recommendations are written by a human consultant.*
