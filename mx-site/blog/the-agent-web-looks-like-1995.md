---
title: "The Agent Web Looks a Lot Like 1995"
description: "Four agent protocols, four vendors, and the standards-community gap that matters more than any of them. Why The Gathering exists, and how to show up."
author: "The Gathering"
created: "2026-04-19"
modified: "2026-04-19"
content-state: "draft"

mx:
  x-mx-contentState: "draft"
  blogFilename: "the-agent-web-looks-like-1995"
  blogUrl: "https://mx.allabout.network/blog/the-agent-web-looks-like-1995.html"
  publicationDate: "2026-04-19"
  tags: [the-gathering, agent-protocols, standards, mcp, a2a, webmcp, llms-txt, community]
  runbook: "LinkedIn article for The Gathering's company page. Contributor-first recruitment post. Sponsors secondary. No sentence-level lift from Ch. 14 of MX: The Protocols. Two outbound links, both to tg.community family. British English."
  generate:
    script: "scripts/generate-content-html.cjs"
    format: "html"
    instructions: "Generate semantic HTML with WCAG 2.1 AA compliance"
---

# The Agent Web Looks a Lot Like 1995

You have probably seen it already. Someone asks an AI assistant to do something small — renew a prescription, change a reservation, check a bank balance and move money from one account to another. The assistant can read the page. It can tell you what the form is for. It cannot act. The session belongs to the browser. The checkout belongs to a payment network that expects a human. The speciality the task really needs lives inside a different vendor's agent, with no shared handshake between them. The user is sitting in front of a machine that knows exactly what it should do and cannot do it.

The web itself is not broken. The *agent web* is. It is hostile to the machines users are now sending into it, and the worst part is that the reason is familiar. We have been here before. The last time we were here, it took about a decade to get out.

## A pattern from thirty years ago

In 1995, if you wanted a web page to look right, you wrote one version for Netscape and another for Internet Explorer. There were tags that worked in one and crashed the other. Ambitious sites shipped two codebases. Less ambitious sites told their users which browser to install. The problem was not that browser vendors shipped features. The problem was that each vendor's early lead became the next decade's lock-in, and nobody outside the vendors had enough of a voice to pull them towards a shared standard. When the pull eventually came, it came from communities — standards bodies, working groups, developers who refused to keep doing the work twice, users who refused to install a second browser. That work was slow and unglamorous. It is also the only reason a web page written once can, today, run everywhere.

The agent web is at that same point right now. The pieces we are already seeing shipped look like this.

## Four protocols, two discovery surfaces

**MCP**, the Model Context Protocol, came from Anthropic. It gives a running model a standard way to ask "what tools do you have for me, and how do I call them?" It is the tool layer. A site that wants a specific capability to be machine-callable — a search, a booking, a status lookup — declares it through an MCP server and the model picks it up. Adoption has been broad; most of the major AI vendors now speak MCP in one form or another.

**A2A**, Agent2Agent, came from Google and now lives inside the Linux Foundation. It answers a different question: how does one agent hand a task to another agent, when the two were built on different frameworks by different companies? An agent publishes an "Agent Card" — a small public manifest saying what it can do and how to reach it — and other agents read the card and negotiate. It is the agent-to-agent layer. Useful exactly when the task crosses an organisational boundary.

**UCP**, the Universal Commerce Protocol, also came from Google, in partnership with a set of retailers. It is the commerce layer: a standardised envelope for machine-initiated purchases, so an agent can complete a transaction without pretending to be a human clicking through a checkout form designed for humans. A parallel proposal from OpenAI and Stripe, ACP, is tackling the same problem with slightly different assumptions about credentials and liability. Retailers are mostly picking one, hedging, or waiting.

**WebMCP** is the newest and the one closest to the user's browser. It is a proposal, incubated at W3C with Microsoft's Edge team in the lead, to let a web page itself act as an MCP server — exposing tools that run inside the page, with the user's already-authenticated session, under the browser's existing security model. It is the browser-session layer. It is how the assistant finally acts on the prescription the user is already signed in to renew.

Then there are the discovery surfaces. `llms.txt` is the small plain-text file a site publishes to describe itself to an AI reader — what the site is, what parts are worth indexing, what rules apply. Agent cards are the equivalent at the agent layer — a public manifest that says "this agent exists, this is what it can do, this is how to talk to it." Together they are the signposts. They say "here is what this thing is, and who is allowed to act on it." Neither is settled, neither is universal, both are live proposals moving through their own venues.

Four protocols, two signposts. Each one addresses a real piece of the problem. None of them addresses the whole.

## The gap that matters

Here is the part that might be less obvious. The gap in this landscape is not another protocol. We do not need a fifth acronym.

The gap is that none of the existing venues convene the stack as a whole. MCP has its governance. A2A has the Linux Foundation. UCP has its retail partners. WebMCP has a W3C Community Group. llms.txt and agent cards are each maintained in their own repositories by their own people. Every piece has a venue. The *stack* has none. There is no single place where a developer, a site owner, an accessibility advocate, a user-rights group or a standards-minded engineer can turn up and argue, in public, about how these pieces fit together — what breaks when they do not, who is responsible when they disagree, what the user actually needs from them as a whole.

That is a standards-community gap, not a technical one. Standards-community gaps do not get filled by vendors. They get filled by communities that decide to fill them.

## Why we built The Gathering

[The Gathering](https://tg.community) is a vendor-neutral forum built for exactly this gap. It is not another protocol. It is not a consortium selling seats at the table. It is a venue for the conversation between the existing venues — the one that went missing in the 1990s and got retrofitted at enormous cost a decade later.

Our posture is the one community standards bodies have always taken when they have worked. Drafts are written in public. Reviews happen through [Stream](https://stream.tg.community), a public review process that anyone can read, anyone can comment on, and no single vendor can override. The drafts are proposals, not decrees — they are expected to change in response to what the community finds. There is no membership fee, no gating, no editorial capture.

Be honest about the scale: we are early. A community-led body earns its legitimacy from the number and diversity of people who turn up. Nothing in our posture can substitute for that. The drafts we have today are a beginning, not an ending. They will be better in six months because of the people reading them now. They will be unrecognisable in three years if the community we are convening actually convenes.

The technical details — which fields belong in the core, which extensions are vendor-neutral, which protocols fit where in the stack, which discovery surfaces a site should publish first — belong on [tg.community](https://tg.community) and in Stream. This post is the invitation, not the brief.

## How to show up

### If you are a practitioner

We need you. You are a developer, a site owner, an accessibility advocate, an agent builder, a platform engineer, a standards-minded person with opinions about how machines should read pages. You have watched the 1995 pattern happen before and you know how it ends if nobody pulls on the other rope.

Turn up to Stream. Read the current drafts. Push back on the parts that are wrong. Add the parts that are missing. Bring the perspectives the current drafters do not yet have — particularly if you work in a region, a vertical, or a user community whose needs are not being heard in the existing vendor-led venues. The review process is public and the comment surface is low-ceremony. The only thing it costs is the time, and the only thing that gets built without that time is the version of this stack that serves the people who were in the room when the drafters wrote it first.

Start at [tg.community](https://tg.community). The Stream review process is linked from there.

### If you run a company in this space

We welcome sponsors. Community-led standards work needs sustainable infrastructure — review venues, editorial capacity, legal support, convening cost. A vendor-neutral body cannot be vendor-neutral if it depends on any single vendor to keep the lights on, and it cannot do the work the community needs if it depends on unpaid time alone. Sponsorship is how organisations that care about the outcome help fund the work without buying a seat at a table that, by design, does not have seats for sale.

If your company builds products or serves users whose work lives in this space — agent platforms, browsers, CMS vendors, retail infrastructure, accessibility tooling, payments, identity — reach out. The same [tg.community](https://tg.community) page carries the sponsor enquiry route.

## Further reading

If you want to see what the "written in public" posture looks like applied to the metadata layer rather than the protocol stack, [A Standard That Knows What It Isn't](https://mx.allabout.network/blog/a-standard-that-knows-what-it-isnt.html) walks through how MX — the machine-readable metadata standard being drafted under The Gathering — stays deliberately small and defers to Dublin Core, Schema.org, DCAT, EXIF and IETF rather than duplicating them. The broader body of MX work, including the ongoing book series, lives at [mx.allabout.network](https://mx.allabout.network). Both are good places to see the approach in motion before deciding whether the posture is one you want to help shape.

## One last thing

The agent web does not have to repeat the browser wars. The escape hatch from vendor fragmentation has always been the same: a community that refused to wait for vendors to agree, that wrote its standards in public, that insisted on the seams being documented, and that earned the right to be taken seriously by showing up week after week until the work was done. That is the invitation. The rest is timing.

The next decade is still available. Help us build it.

[tg.community](https://tg.community)
