---
title: Exit Is the Only Real Vote
description: "The ninth post in the standards-governance series. The ultimate check on whoever holds a standard is the community's ability to leave - to fork it and have the fork survive. The recent licence-grab forks, Terraform to OpenTofu and Redis to Valkey, show exit working and show what it costs. MX is forkable by design: open licence, open primitives, no patent layer, no hub, and the standard held by The Gathering rather than a company - so there is no owner positioned to betray."
author: Tom Cranstoun
created: "2026-06-03"
modified: "2026-06-03"
version: "1.0"
mx:
  status: published
  x-mx-contentState: published
  contentType: blog-post
  audience:
    - humans
    - machines
  tags:
    - governance
    - open-standards
    - mx
    - forking
    - licensing
    - the-gathering
  blogFilename: governance/exit-is-the-only-real-vote
  blogUrl: https://mx.allabout.network/blog/governance/exit-is-the-only-real-vote.html
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/blog/governance/exit-is-the-only-real-vote.html
  servedAt: https://mx.allabout.network/blog/governance/exit-is-the-only-real-vote.html
  runbook: Blog post on mx-site, standards-governance series. The HTML is the canonical source for this YAML frontmatter.
---

# Exit Is the Only Real Vote

This is the ninth post in the standards-governance series. The buyer's test that has run through these posts asks what happens when the body behind a standard turns hostile - when the sponsor's interests shift, when the registry decides to block you. Behind all of those is a single question that decides whether any of the others have teeth. If the holder of a standard abused its position tomorrow, could you leave? Could the community take the standard and continue without them, and would the result survive? That ability to walk is the only vote that a standard's holder cannot ignore.

## Why the exit keeps the holder honest

A governance promise is only as strong as the cost of breaking it. A holder that can lock you in has no reason to keep faith beyond goodwill, and goodwill is not a structure. A holder that knows the community can fork and thrive without them is disciplined by that knowledge whether or not anyone ever forks. The right to leave does its work mostly by existing. It is the reason an open licence and an implementable specification are not merely convenient but protective: they are what make the threat of departure credible.

## When communities actually left

The last few years have run the experiment in public, and the pattern barely changes. A project under a single company's control, pressured by cloud rivals reselling its work, switches to a restrictive licence to protect its revenue. The community, finding the ground moved under it, forks the last open version and places it somewhere no one company can move it again.

HashiCorp moved Terraform from an open licence to a restrictive one in 2023; the community forked the last open release into [OpenTofu](https://www.softwareseni.com/the-open-source-license-change-pattern-mongodb-to-redis-timeline-2018-to-2026-and-what-comes-next/) and donated it to the Linux Foundation. Redis made the same move in 2024, and within about a month the Linux Foundation had launched [Valkey](https://www.linuxfoundation.org/press/linux-foundation-launches-open-source-valkey-community) from the last open version, backed by a crowd of firms that had depended on the original. Elastic had been through it earlier and, tellingly, eventually returned to an open licence - exit had cost it enough to be worth reversing. The detail that matters most for governance is what the forks looked like afterwards: placed under foundations rather than companies, they drew contributors from more organisations than the projects they replaced. Leaving did not just preserve the work. It widened the ownership.

## The cost nobody should hide

It would be dishonest to present forking as a clean win, because it is a schism, not a divorce by mutual consent. Once Terraform and OpenTofu parted, each began adding features the other could not safely copy, and integrators now keep compatibility matrices to track which is which. A fork splits a community's effort, doubles the maintenance, and confuses everyone downstream for years. The right to fork is a fire exit, not a front door. You want it to exist, marked and unobstructed, precisely so that you rarely have to use it - and the existence of a usable exit is itself what reduces the chance of the fire.

## Forkable by design, with no one to betray

This is where MX takes a different route to the same safety. The forks above all began the same way: a company held the thing, and one day relicensed it. MX removes the precondition rather than improving the escape. The standard is held by [The Gathering](https://tg.community), an independent body, under an open licence; the primitives are open and unencumbered, with no patent layer to inherit; there is no hub the system must route through; and the conformance definition lives in the open, apart from any vendor. There is nothing for a company to relicense out from under the community, because no company holds it.

So the exit right is satisfied in advance. The threat that disciplines a holder - leave and survive - is permanent and cheap here, not because betrayal would be survivable but because there is no owner positioned to commit it. This is the structural form of the commitment made earlier in the series, where the founder relinquishes the veto once the body stands on its own funding. A promise not to abuse control is worth less than an arrangement in which the control was never concentrated enough to abuse.

## The test

The closing question for the buyer's test is the one that gives the rest their force. If the holder turned hostile tomorrow, could the community fork the standard and survive - and is the cost of leaving low enough that the threat is real? If exit is impossible, the other safeguards are courtesies. If exit is possible but ruinous, the holder has more room than it should. The strongest position is the one where leaving is cheap because there was never a single hand on the switch.

## Related reading

- [Whose Standard Is It Anyway?](https://mx.allabout.network/blog/governance/whose-standard-is-it-anyway.html) - the failure modes that exit guards against
- [Not the Main Sponsor](https://mx.allabout.network/blog/governance/not-the-main-sponsor.html) - relinquishing concentrated control by design
- [The Spec Was Never the Fragile Part](https://mx.allabout.network/blog/governance/the-spec-was-never-the-fragile-part.html) - open primitives and no hub, the conditions that make a fork viable
- [The Gathering](https://tg.community) - the body that holds MX so no company can relicense it

---

*Tom Cranstoun is the founder of the Machine Experience (MX) community and author of the MX book series. He consults on MX strategy through Digital Domain Technologies Ltd.*
