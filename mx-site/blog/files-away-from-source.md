---
"@context": https://mx.allabout.network/canon/context.json
title: "Files Away From Their Source, and What Universal Cart Reveals About MX"
description: "Google's Universal Cart is for the web. MX is for files: anything an organisation publishes that needs to remain readable, attributable, and trustworthy once it has travelled away from its source."
author: "Tom Cranstoun"
created: "2026-05-25"
modified: "2026-11-23"
type: "blog-post"
mx:
  mxSpecVersion: "0.9"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/blog/files-away-from-source.md
  servedAt: https://mx.allabout.network/blog/files-away-from-source.md
  derivedFrom: datalake/draft-site/blog/cogs-and-metadata/files-away-from-source.md
  audience: [humans, machines]
  stability: "stable"
  x-mx-contentState: "published"
  contextProvides:
    - "Google's Universal Cart is for the web. MX is for files: anything an organisation publishes that needs to remain readable, attributable, and trustworthy once it has travelled away from its source."
  runbook: "Generated from datalake/draft-site/blog/cogs-and-metadata/files-away-from-source.md; never edit this file. Change the source and regenerate the page, and this twin is rebuilt beside it."
  purpose: "The markdown version of https://mx.allabout.network/blog/files-away-from-source.html, built from its source: the same text as the page, without its navigation or footer."
---

> This is the markdown version of https://mx.allabout.network/blog/files-away-from-source.html. For the site index, see [llms.txt](https://mx.allabout.network/llms.txt).

# Files Away From Their Source, and What Universal Cart Reveals About MX

Google used I/O 2026 to introduce Universal Cart, a cross-merchant shopping basket that follows a user across Search, Gemini, YouTube, and Gmail. The launch ring is Nike, Sephora, Target, Ulta Beauty, Walmart, Wayfair, and Shopify stores including Fenty and Steve Madden. If you're one of those merchants, you have a clear path forward. If you aren't, the announcement raises a question that has been quietly developing for the last twelve months: which protocol do you answer to when the agent at the door isn't Gemini?

That's the retail question, and it's worth answering. It's also the smaller question the announcement raises. The bigger one is about files: what a publisher puts out, where those files travel, and what they carry with them when they get there. Universal Cart is a useful object to think with because it makes that problem visible in one familiar domain. The same problem repeats everywhere else.

A note on timing. The Machine Experience community has been developing MX as an open standard for roughly two years, predating UCP's public emergence. It's a parallel and earlier line of work that the cart now usefully illustrates, not a reaction to Universal Cart. *MX: The Handbook* launched in April 2026 and *MX: The Protocols* follows in July. Both predate any of the announcements discussed here.

This post uses retail as the worked example because that's the announcement in front of us. The argument reaches beyond commerce and the web.

## What Universal Cart actually is

Strip away the demo polish and there are several components.

The first is the consumer surface. Universal Cart presents as a single basket that persists across Google properties. Add a pair of trainers from a Search result, an eyeshadow palette from a Gemini conversation, and a side table from a YouTube creator's video, and they all land in one place. The cart watches prices, flags stock returns, surfaces deals, and checks compatibility on multi-item purchases. From the shopper's point of view it looks like one shopping experience instead of twenty browser tabs.

The second is the Universal Commerce Protocol, or UCP, the technical heart of the announcement. UCP is the shared language Google has built, co-developed with Shopify, that lets agents talk to merchant systems. Whoever sold the goods remains the merchant of record. UCP offers both a native checkout and an embedded one, so the seller still owns the legal relationship with the buyer, still takes the payment, still ships the goods. Google isn't trying to be the retailer. Google is trying to be the protocol.

The third is the Agent Payments Protocol, or AP2, the accountability layer. When an agent buys on a shopper's behalf, within a stated set of brands, products, and a spending cap, AP2 produces a tamper-evident record that links the shopper to the purchase. Google is least loud about this piece, and it probably has the longest implications. Once agents transact at scale, someone has to answer "who authorised this" in a way a regulator, a fraud team, or a dispute process can accept.

So: a cart, a protocol, and an attestation mechanism. Not separate product launches; one architecture.

## Inside the ring, outside the ring

The list of launch merchants is short and deliberate: Nike, Sephora, Target, Ulta Beauty, Walmart, Wayfair, and Shopify's merchant base. Two observations.

First, the partner choice is biased toward US-headquartered retail and categories where Google already has strong shopping-intent data: apparel, beauty, big-box, home. The protocol may be global in ambition; the early list isn't.

Second, Shopify is the swing factor. Adding Shopify means any Shopify store can in principle ride into UCP without doing the engineering itself, because the platform does it for them. That gives Google a long tail almost for free. It also makes Shopify the most important commercial decision in the launch, because it concentrates a large fraction of independent retail behind one integration that Google co-designed.

Everyone else: independent retailers on Magento, on WooCommerce, on Salesforce Commerce Cloud, on SAP Hybris, on TYPO3 commerce extensions, on bespoke stacks; every European retailer beyond the Shopify orbit; every B2B seller; every public-sector procurement portal. None of them have a UCP path on day one. Some will get one eventually. Many won't, because the integration effort is non-trivial and demand will be uneven by geography and platform.

That's the ring: inside it, Google's path; beyond it, an open question.

## What outside the ring actually means

It's tempting to read "outside the ring" as "ignored by AI agents". That's the wrong reading. Agents aren't going to politely stop at the UCP boundary. They're going to do what agents already do, which is read the public web, parse what they find, and act on the best information available.

What "outside the ring" means is this: the merchant has no negotiated protocol relationship with Google's commerce surface, but agents will still arrive at the merchant's site, still work out what the products are, still extract prices and availability, still reason about whether to recommend, cite, or transact.

And the word "agents" is plural for a reason. UCP works where Google's agents work. Away from Gemini and Google's surfaces, UCP is invisible. Claude reads the merchant's site without UCP. ChatGPT does too. So does Perplexity. Gemini does whenever the flow isn't a UCP-managed checkout. So do vertical agents nobody has built yet, and regulator verification tools that are being designed right now. A retailer who builds only for one platform's protocol has built for a slice of the traffic, not all of it.

If the site is built for human readers and search-engine crawlers only, those agents will do their best with what they find. Sometimes that will be fine. Sometimes they will hallucinate a price, recommend an out-of-stock item, or quote a competitor's terms because the competitor's site was easier to parse. The retailer can't dispute any of it, because nothing attested records what it said.

This is the gap. UCP closes it for the partner ring through negotiated protocol, on Google's surfaces. Every other seller, and every other agent, needs an answer that doesn't depend on a bilateral integration with one platform.

## The cart is for the web. MX is for files

Before mapping the gap, it's worth naming a category error that's easy to make when reading announcements like this one.

Universal Cart is for the web. UCP is for the web. AP2 is for the web. So is [Schema.org](https://schema.org), so are the structured data guidelines, so is every Google recommendation going back to the early SEO playbook. Google's frame is the web: web pages, web crawlers, web shopping, web checkout. That's a sensible frame for Google because Google's business is the web. It's also the boundary of what Google's advice can address.

MX is about files. The web is one place files end up, but not the only one, and a file doesn't stop existing when it leaves the web. A contract is a file. A policy is a file. An accessibility statement is a file. An internal runbook is a file. A regulatory submission is a file. A record of an AI decision is a file. The same file might be served as a web page on Tuesday and attached to an email on Wednesday. In three years it might be in a regulator's archive. A month later an agent might quote it in a customer support conversation, and a year after that it could be lifted into a court bundle.

The thing MX gives that file is the ability to travel away from its source and still be readable and attributable, and to earn trust once it arrives. Not just on the web. Anywhere.

Most data on the web only makes sense in context. A price on a product page means something because it's on the merchant's domain, in a particular layout, among other signals: the URL, the navigation, the styling, the familiar presence of the brand. Lift that price out and put it in an agent's response, an email, or a regulator's report, and much of that context is gone. The receiver now has a number. Is it current? Is it the canonical price or a regional variant? Does the publisher stand behind it on this date? None of that travels with the number unless the file it came from was written to carry it.

An MX-shaped file carries its own context. The provenance, the date, the canonical URI, the publisher identity, the attestation, the relationships to other files, the intended audience: these are written into the data file itself, in structured metadata that travels with the content. When an agent reads the file, quotes from it, or hands a fragment of it to a downstream system, the context goes with the content. When a regulator pulls the file out of an archive in three years, the same context is still there. When the file is attached to an email, or printed, or sent to a vendor, or fed into another company's system, the same context is still there.

In practice this looks like a two-zone Pandoc YAML frontmatter block at the top of a Markdown file. Zone one holds the document's identity (the fields any text editor or document tool already understands); zone two, under the `mx:` key, holds the machine-trust metadata. A stripped-down example:

``` yaml
---
title: "Returns and Refunds Policy"
description: "Conditions under which returns and refunds are accepted."
author: "Example Retailer Ltd"
created: 2026-03-12
modified: 2026-05-14
version: "2.1"
mx:
  status: published
  contentType: policy
  audience: [humans, agents]
  expires: 2027-05-14
  purpose: "Authoritative statement of return rights and process."
  partOf: "customer-policies"
  refersTo: ["accessibility-statement", "terms-of-sale"]
  canonicalUri: "https://example-retailer.com/policies/returns"
  canonicalUrn: "cog:web:example-retailer.com:01JC8X7K2N4P5Q6R7S8T9V0W1Y"
---
```

The body underneath is the policy itself, written for humans to read end-to-end. The two-zone frontmatter is what an agent reads, what a regulator queries, and what travels with the file when an excerpt is lifted out of it. Nothing in here is proprietary. It's Markdown, YAML, and a small set of field names published under the MIT licence, so anyone may implement them. A publisher can author it in any text editor and serve it from any web server, or attach it to an email, or include it in a court bundle.

Two of those fields deserve a second look, because they're the part of the file that does the work no other format does.

`expires` is the date past which the publisher will no longer stand behind the content. A returns policy issued in May 2026 with an expiry of May 2027 tells any agent that reads it: this is canonical for a year; after that, come back and check. A price with an expiry of midnight tonight says the same on a much shorter clock. A web page stays current until it doesn't, and nothing in it tells you whether that line has been crossed. An MX file says when it stops being canonical, and an agent quoting it three weeks past that date knows it's quoting stale ground. A regulator querying the file in two years knows whether it held on the date in question. An MX file replaces "the publisher hopes it is still right" with a declared window.

`canonicalUrn` is the globally unique identifier for this file, independent of where it's served. The `canonicalUri` is a URL, which is useful but URL-shaped. URLs change. Domains lapse. Sites are restructured. CDNs swap paths. A cogUrn does none of those things; it names the file, not the place it happens to occupy at any given moment. The format is `cog:web:<publisher-authority>:<local-id>`: a `web`-scheme URN whose authority is a DNS-resolvable domain identifying the publisher and whose local-id is publisher-chosen and stable (ULID is the recommended choice). `cog:web:example-retailer.com:01JC8X7K2N4P5Q6R7S8T9V0W1Y` is a name for the file, not an address.

The mechanism that makes cogUrn values useful is resolution. On its own, a cogUrn is a string. A registry turns it into something an agent can act on, by mapping the cogUrn to wherever the file is currently hosted and recording the attested digest of what was originally published. REGINALD is that registry for MX. REGINALD doesn't store COGs: publishers keep their own files at their canonical URIs, and REGINALD indexes the metadata that lets an agent find and verify them. When a retailer moves CMS, changes domain, or restructures its URL scheme, it updates the registry entry. The cogUrn stays the same; the registry now points to the new location.

An agent or a court holding the cogUrn asks REGINALD where the file is now and gets a current answer, even years later. The agent then fetches the file from the URI REGINALD returns and checks what it received against the digest REGINALD attests. If the digests match, the file is the canonical one. If the publisher's URI has gone dark (the business has wound up, the domain has lapsed), the registry can point at additional locations where the cogUrn resolves: sectoral archives, memory institutions, regulatory repositories, or commercial archival services that have registered themselves as holders of that file. REGINALD itself doesn't hold the bytes; it knows which parties do, and it attests to what the bytes should be when retrieved.

URLs are addresses. A cogUrn with a registry behind it is an identity, and with distributed archival added, one that survives the publisher.

Together, `expires` and `canonicalUrn` give a file the two properties that matter most when it's travelling away from its source: a self-declared currency window, and a stable identity that survives infrastructure churn. Neither is in [Schema.org](https://schema.org). Neither is in UCP. Neither is in any platform's structured-data guidance, because platforms govern the web they currently see, and these fields are about files surviving past the web where they were first published.

The same pattern holds for any file type. A product description, a contract, and an accessibility statement share one skeleton and differ only in content. The discipline is one thing; the artefacts are many.

This is why MX extends beyond the cart and the web. The cart is commerce on the web, and Google's guidance covers the web. MX covers any file that needs to remain meaningful once it leaves the page, the domain, the platform, or the format it was first published in. A contract excerpt cited in a dispute. A policy clause quoted by an agent advising a customer. An accessibility statement referenced in an EAA enforcement query. A pricing claim resurfaced in a comparison. A runbook step lifted into an incident response. Each is a file, or a fragment of one, travelling away from its source, and each either carries enough metadata to stand on its own or doesn't.

The contract case deserves a paragraph. A supplier sends a contract by email. Months later, in a dispute, the other side's lawyer quotes a single clause in a letter. Which version is being quoted? Was that clause amended between sending and signing? Who authored the amendment? On what date? If the contract is an MX-shaped file, the answers travel with the clause. The file carries its version number, its dates, its author, a content hash, and a `canonicalUrn` that identifies it wherever it's now hosted. An excerpt copied out can be checked against the canonical version, because the frontmatter it came from identifies the original. The cogUrn resolves through REGINALD to wherever the supplier currently hosts the document, even if the supplier's website has been rebuilt twice in the intervening years. If the contract is a PDF with a layout and no metadata discipline, those answers don't travel. The receiver has the clause and nothing else. The problem happens off the web, between businesses, every day.

UCP can't describe a returns policy. AP2 can't describe an accessibility audit. Neither was designed for that. They were built for one carrier, commerce on Google's web surfaces, and they do that well. The category error is treating them, or Google's wider web guidance, as the answer to a problem they were never designed to solve.

The reasoning applies in the same form to any published file, on the web or off it. Public-sector procurement records. Healthcare information. Financial product disclosures. Contracts. Policies. Accessibility statements. Anything that needs to remain meaningful once it leaves the place it was first published.

## When the file is on paper

A blog post about files travelling away from their source has to address the obvious case: what happens when the file is printed on paper and handed to someone.

Documents that carry legal weight in regulated life are still printed. Letters from solicitors. Contracts that get signed. Prescription leaflets. Planning notices. Drug labels. Loan agreements. Building certificates. Receipts. The web is one channel; physical print is another, and in many sectors it's the one that counts in law.

The MX answer for printed documents is a QR code on the artefact. The QR encodes the document's canonical cogUrn. A machine reading the QR resolves the cogUrn through REGINALD, retrieves the canonical machine-readable version of the document, and verifies that the printed content matches the attested digest.

The human reader sees the printed page. The machine reader sees the COG. Both see the same content, but the machine sees it with full provenance: version, date, author, attestation, expiry, links to related documents. No optical character recognition. No probabilistic guess about what the document means. Direct retrieval of the canonical source from a physical artefact in the world.

This is the convergence principle made literal. A solicitor writes a letter once. The printed version reaches the client. The machine-readable version is available to any agent, verification tool, regulator, or downstream system that scans the QR. Both versions are authoritative; neither is a derived approximation of the other.

The implications are substantial. A printed contract with a QR resolving to its canonical COG is a stronger evidentiary artefact than a printout that lacks one. The signed paper is the legal instrument, but the QR provides a verifiable link to the canonical machine-readable version. A QR on a drug label resolves to the current MHRA-approved patient information with attestation, and the expiry field tells any reader when that copy ceases to be canonical. A QR on a planning notice on a lamppost resolves to the full application COG. A QR on a receipt resolves to the canonical record of the sale, with the terms that applied at the time.

**Note:** This page describes regulatory frameworks in general terms only. Nothing here is legal advice. Requirements vary by jurisdiction, organisation type, and use case. Consult qualified legal specialists for guidance specific to your situation.

There's one case where the QR link stops being optional and becomes essential: printed artefacts containing AI-generated or AI-assisted content. A reader holding a printed document drafted by an AI has no way to verify what the AI produced, which facts it relied on, which model produced it, or whether a person reviewed it. They can't tell when the content was generated, or whether the printed version matches what was attested at publication. Without a QR resolving to a canonical record, specifically a decision-COG with AI provenance fields, the artefact is an unverifiable assertion. The EU AI Act's transparency obligations, the UK ICO's AI code, and equivalent sector regulators are all moving toward requirements that AI-generated content be identifiable and verifiable. A QR linked to a decision-COG is the cleanest route to meeting those obligations. For solicitors sending AI-drafted letters, for pharmaceutical companies producing AI-assisted regulatory submissions, and for government departments issuing AI-assisted decision letters, the QR is no longer an optional feature. It's the mechanism by which the publisher remains compliant and the recipient remains protected.

None of UCP, AP2, or Google's structured data advice does this, because they cover the web and printed paper isn't the web. MX does it because MX is about files, and printing one doesn't change what it is.

## Mapping the gap to MX Readiness

The MX Readiness Model gives a useful frame for what merchants outside the ring need to do. The levels are cumulative, not alternative.

**L1, Discovery.** The site has to be parseable by a machine reader at all. Semantic HTML, a working sitemap, server-side rendering of anything that matters. This is table stakes. A retailer whose product listings only render after a JavaScript app has hydrated isn't visible to half the agents in the field. Shopify merchants get most of L1 from the platform; the other launch partners (Walmart, Target, Nike, and the bespoke stacks) verify it themselves, the same way every other retailer has to.

**L2, Citation.** Facts about products have to be readable at the level of individual claims. [Schema.org](https://schema.org) JSON-LD on Product, Offer, Brand, AggregateRating. The agent should be able to lift one price, one availability state, one shipping window without having to scrape an opaque component. This is where most retailers think they're already done because they have JSON-LD. They usually have it on the homepage and on category pages, and the per-product detail is thinner than they think.

**L3, Search/Compare/Attested.** The data starts to carry evidence of where it came from and when. JSON-LD microdata with provenance fields, dated assertions, and an attestation that the bytes the agent reads are the bytes the publisher published. This is the level where a retailer outside the ring starts to have a position to defend, because they can stand behind their own price and availability data in a way agents can trust.

**L4, Price Understanding / Registered.** [Schema.org](https://schema.org) Product with Offer, ISO 4217 currency codes, and presence in a registry that agents can query for the canonical location of the data. Pricing in particular needs the `expires` field. A price without an expiry has no currency window, and an agent quoting it three weeks later can't know whether it still stands. The `canonicalUrn` matters here too, because prices change frequently and the cogUrn gives each new version a stable identity, so the old one can be checked against it. For UCP merchants this is what UCP itself provides on Google's surfaces. For everyone else, this is what REGINALD provides, and the difference is governance, not function.

**L5, Purchase Confidence / Audited.** State reflected in the DOM, explicit form semantics, the Universal Commerce Protocol or an equivalent purchase-confidence mechanism, third-party verification. AP2 operates at this level for Google's ring. For everyone else, the audit comes from a separately operated trust layer: attestation records, signed assertions, and a process that a regulator or a serious buyer can independently check.

Universal Cart and UCP don't invent anything that wasn't already in MX's plans. They package L4 and L5 for Google's selected merchants on its own surfaces. The rest of the model, and the levels below L4 which UCP assumes are already in place, is what every retailer needs regardless of whether they're in the ring.

## Who governs the protocol

Universal Commerce Protocol is a closed protocol in the sense that it's governed by Google. Anyone can implement against it; not everyone gets to influence what it becomes. The merchant of record stays with the retailer. The protocol of record is Google's.

For the launch ring, that's an acceptable trade. Nike and Walmart have commercial weight, and Shopify has platform power. They will be heard. For a mid-size European retailer, an independent specialist, a public-sector buyer, or a B2B seller, the protocol of record belongs to whoever defines the structure they have to publish in. That won't be them and won't be a peer of theirs. It'll be a platform vendor.

MX takes a different approach. The COG format, the carrier-neutral data file, is published under the MIT licence, so anyone may implement it. CogNovaMX stewards it and dogfoods it on the repository and site behind MX: The Protocols, and ownership and governance pass to the Gathering after donation. The registry concept is open. REGINALD is one implementation of the registry concept, operated by CogNovaMX; other registries can exist and federate. Attestation uses W3C Decentralised Identifiers, RFC 8785 canonicalisation, RFC 8032 Ed25519 signatures, and RFC 6962 transparency logs. None of this is proprietary. None of it requires a partnership negotiation. None of it locks the protocol of record inside a single commercial entity.

A note on the field. MX isn't the only open standard in the agent-discoverability space. Anthropic's Model Context Protocol (MCP) defines how an agent connects to tools and data sources. Google's own Agent-to-Agent (A2A) protocol addresses agent interoperability. `llms.txt` proposes a per-site declaration of what agents should read. Agent cards describe agent capabilities. These are useful and mostly complementary. What MX adds is the file itself: the artefact the agent reads, with provenance and attestation baked in, designed to remain meaningful when separated from its source. MCP gets the agent to the data. MX makes sure the data merits reading on arrival, and still does when a fragment of it ends up somewhere the agent never went.

There's also a difference in what each treats as a precondition. UCP makes no statement about accessibility; it inherits whatever the merchant's site happens to do. For a retailer in the EAA enforcement zone that's a material gap, because the protocol does nothing to produce the evidence a regulator would ask to see. MX treats WCAG conformance as a requirement of the standard, not an optional add-on. A site can't be MX-compliant and inaccessible at the same time. The work that gets a retailer to MX readiness gets them to documented accessibility too, because both come out of the same discipline: writing data files that humans and machines can both read.

That's the structural difference, and it isn't a "Google bad, MX good" claim. UCP is a serious piece of engineering and the partners will benefit. UCP is one platform's answer to one slice of the problem. MX is an open answer to the whole problem, including the layers UCP assumes are already done and the obligations it doesn't address.

## When the agent buys on someone's behalf

AP2 is the part of Google's announcement that needs a direct response, because it does something MX also needs to do: record a delegated action in a form a regulator or a dispute process can later examine.

AP2 produces, in Google's framing, a tamper-evident record linking the shopper to the purchase, within a stated set of brands, products, and a spending cap. When an agent buys on a shopper's behalf inside UCP, AP2 is the trail. Useful, narrowly scoped, Google's.

REGINALD v-next has the symmetric artefact for everything outside that ring. It's called a decision COG. Its fields are:

- policyRef: which policy authorised this action
- inputHash: what the agent saw before deciding
- model: which system made the call
- humanInLoop: whether a human was involved and at which step
- sequence: where in a chain of decisions this one sits

The decision COG is a file in the same family as any other COG: frontmatter and content, attestable, registrable, queryable. It isn't specific to commerce. The same artefact records an agent's decision to recommend a healthcare option, approve a benefits claim, route an incident, draft a contract amendment, or buy a pair of trainers.

The difference from AP2 is the scope and the governance. AP2 records purchases on Google's surfaces. Decision COGs record any agent action, anywhere, under an MIT-licensed standard that anyone may implement. They use the same primitives (Ed25519 signatures, canonicalised bytes, transparency logs) as every other attestation in MX, because decision recording is one application of a single trust layer.

For a retailer outside the ring whose agents (whether their own, or partner agents, or general-purpose assistants) are making recommendations and increasingly transactions, the question "where is our audit trail when the agent acts on our behalf" has the same urgency as Google's framing of AP2 suggests. Decision COGs are the answer, and they sit in the same file discipline as everything else.

## What this means in practice

For a retailer outside the ring, the practical question isn't "should we wait to see if UCP comes to us." UCP may or may not. The practical question is "what does our site already show about itself, and is that evidence good enough for any agent (Google's, Anthropic's, OpenAI's, a regulator's verification tool) to trust?"

For most retailers the answer is: not yet. The product pages render. The JSON-LD is patchy. There's no attestation. The data files an agent would want (canonical price, canonical availability, canonical accessibility statement, canonical returns policy) exist only as HTML that has to be extracted by inference.

This was already a problem. Universal Cart just made it visible by showing what the inside-the-ring version looks like.

A retailer outside the ring has reasonable moves available.

Audit the site against MX Readiness L1 and L2. Most retailers will find more gaps than they expect at L1, usually around server-side rendering and selective JavaScript dependencies, and significant gaps at L2 on per-product structured data quality. This is work that pays back regardless of which agentic-commerce protocol the retailer eventually adopts. It pays back in current search visibility, in regulatory readiness for the EAA, and in the foundation it lays for everything above it.

Start producing COGs for the parts of the product range and the policy surface that matter. Price, availability, accessibility statement, returns policy, shipping terms, product specification. A COG is a data file with structured metadata and human-readable content. It isn't a new piece of infrastructure; it's a discipline about how data files are written. The investment is modest. The output is something agents can trust.

Register with REGINALD where attestation matters. REGINALD indexes metadata only; the merchant hosts the COG. Registration gives an agent a canonical way to discover the file and check its integrity. It doesn't lock the merchant into a single platform, because the registry is open.

None of this requires a UCP partnership. None of it precludes a UCP partnership later. It builds the foundation that UCP assumes and that the agents outside Google's ring will look for anyway.

## How this gets delivered

A retailer reading the moves above and wondering "do we do this ourselves or does someone do it for us" has a fair question. MX has a commercial model that doesn't depend on retailers becoming MX specialists themselves.

The model is borrowed from structural engineering. A building doesn't need its owners to be experts; it needs a structural engineer to set the specification and check that the build meets it, and a builder to do the work. MX works the same way. The specification is set by The Gathering. CogNovaMX attests to it through the REGINALD registry and the audit process behind it, and that attestation grants nothing under any regulation. The build is done by agencies and platform partners (Founding Partners and the wider partner network) who implement against the standard.

A retailer outside the ring has commercial routes. They can engage a Founding Partner agency to take the work end-to-end, which is the common case for retailers without internal capacity. They can engage their existing CMS platform or agency if those partners hold MX accreditation. Or they can implement themselves and seek REGINALD attestation directly, which is the route for firms with strong in-house engineering and content teams. The point of the partner network is that the retailer doesn't have to choose between "do it ourselves" and "wait for Google." There's another route, and it doesn't depend on one platform's commercial plans.

For agencies, the inverse applies. The MX standard creates a defined scope of work (audit, COG production, registration, attestation, ongoing maintenance) that's independent of which agentic-commerce protocol any given platform eventually wins. That's a more durable book of business than implementing against a single vendor's specification.

## Where the EAA bites

The accessibility precondition has dates and case numbers attached to it.

The European Accessibility Act, Directive (EU) 2019/882, came into enforcement on 28 June 2025. References EN 301 549 and WCAG 2.1 AA. The French enforcement precedent is the one to watch: ApiDV and Droit Pluriel brought emergency proceedings against Auchan, Carrefour, E.Leclerc, and Picard Surgelés, each in the court of the company's seat. On 4 June 2026 the Tribunal judiciaire de Caen ordered Carrefour to make its site and app fully accessible within six months, ruling that 71% conformance wasn't enough. E.Leclerc had improved from 32% to 50% compliance and was sued anyway. Half-measures don't protect the retailer.

For a UCP merchant, the accessibility evidence sits somewhere: perhaps in the platform, perhaps in the retailer's own audit logs, perhaps in a third-party report. For a retailer outside the ring, the question is more pointed. Where is the evidence that the product page met WCAG 2.1 AA on the day the customer tried to buy? Where is the dated, attested record an investigator could query?

A COG with an attestation can answer that question. A platform integration with Google can't, because Google isn't the regulator's interlocutor and Google's audit trail isn't the retailer's.

MX Readiness and EAA enforcement meet here. Compliance has to be evidenced, and the evidence has to be in a form an external party can independently check. Universal Cart isn't designed for that. MX is designed to keep that record, though whether it satisfies a regulator is a legal question, not something MX decides.

## Closing

Universal Cart is the consumer-facing announcement. UCP and AP2 are the architectural ones. For the launch ring, the path forward is integration with Google's protocol. For everyone else, the question is which open standards their site already supports and which they need to add. That group is most of retail by count and a large fraction of it by revenue once you look beyond US-headquartered category leaders.

The MX Readiness Model maps that question to a sequence of practical steps that don't depend on one platform's commercial plans. COGs are the carrier-neutral data files. REGINALD is one trust-layer implementation, and it stays ours. Anyone may implement the standard. CogNovaMX stewards the common MX vocabulary today and dogfoods it first; ownership and governance pass to the Gathering after donation. The standard and the data files are open. All of it is composable with UCP for retailers who later want both.

The model holds outside retail and off the web. The same file discipline that produces an attested price produces an attested accessibility statement, an attested policy version, an attested decision record, an attested contract clause. Every other place files are published for someone (an agent, a regulator, a court, a customer, a future colleague) to rely on has the same problem.

Google has shown what the inside-the-ring version of agentic commerce on the web looks like. The interesting work for the rest of us reaches beyond the ring and past commerce and the web: making sure the files a publisher releases remain readable and attributable, and worth trusting, once they have travelled away from their source.

## Going further

*MX: The Handbook* introduces the standard and the convergence principle that underpins it. *MX: The Protocols* sets out the technical detail: Chapter 1 for the MX Readiness Model in full, Chapter 20 for the REGINALD Compliance Levels referenced throughout this post. Janus Boye wrote the foreword to *The Handbook*.

The Gathering is the independent standards body for MX. Its work, the COG specification, and the open registry concept are at tg.community. REGINALD, the CogNovaMX-operated registry, is at reginald.allabout.network.

For retailers, agencies, or CMS platforms thinking about their position relative to Universal Cart, UCP, or the wider question of agent-readable files, Digital Domain Technologies Ltd consults on MX strategy. The first step is usually a brief audit conversation rather than a proposal.
