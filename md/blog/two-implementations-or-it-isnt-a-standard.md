---
title: Two Implementations or It Isn't a Standard
description: "The eighth post in the standards-governance series. A specification with one implementation is not a standard - it is that program's documentation, and whoever owns the program owns the rule. The IETF has required two independent, interoperable implementations from different code bases since 1996. MX meets the test: the COG specification has a JavaScript reference and an independent Rust implementation that interoperate, which is what makes COG a standard rather than a single codebase's behaviour."
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
    - interoperability
    - ietf
    - cog
    - the-gathering
  blogFilename: governance/two-implementations-or-it-isnt-a-standard
  blogUrl: https://mx.allabout.network/blog/governance/two-implementations-or-it-isnt-a-standard.html
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/blog/governance/two-implementations-or-it-isnt-a-standard.html
  servedAt: https://mx.allabout.network/blog/governance/two-implementations-or-it-isnt-a-standard.html
  runbook: Blog post on mx-site, standards-governance series. The HTML is the canonical source for this YAML frontmatter.
---

# Two Implementations or It Isn't a Standard

This is the eighth post in the standards-governance series. The last one ended on change control - who owns the next version. There is a plainer version of the same worry that applies on day one, before any version has had a successor. If a specification has exactly one implementation, it is not really a standard. It is the documentation of that one program, and whoever owns the program owns the rule, no matter how open the document looks.

## One implementation is ownership

A specification is a description of intended behaviour. A single implementation is the only behaviour anyone can actually observe. When they are the same project, the words on the page stop being the standard and the code becomes it - including all the places where the code does something the words never quite pinned down. Every ambiguity is resolved in the implementer's favour by default, because there is nothing else to compare against. Control the only implementation and you control what "compliant" means in practice, which is the quiet capture the earlier posts kept finding, arriving by a different door.

## The rule the internet runs on

The body that built most of the internet's protocols treats this as non-negotiable. Since 1996, the [IETF's standards process](https://datatracker.ietf.org/doc/html/rfc2026) has required that a specification show at least two independent and interoperable implementations, built from different code bases, before it can advance. The wording is exacting: a feature that has not been demonstrated in two interoperable implementations is removed from the standard rather than carried on faith. A later clarification spells out what independence means - [different people, at different organisations, using different code and libraries](https://datatracker.ietf.org/doc/html/rfc5657). This is the discipline behind the IETF's old motto, quoted earlier in this series: rough consensus and running code. Not running code, singular. Running codes, plural and agreeing.

## What the second implementation finds

The reason is practical, not ceremonial. A second team building from the text alone is the only honest test of whether the text says what its author thought it said. Wherever the first implementation relied on an assumption that never made it onto the page - a byte order, a default, an order of operations - the second one diverges, and the gap becomes visible. Interoperability between two independent builds proves the specification is precise enough to be reproduced, which is exactly the property that lets anyone join without permission. A spec only one program can satisfy is a spec that needs that program. A spec two unrelated programs satisfy needs neither.

There is a failure mode on the other side worth naming. When an ecosystem leans on a single implementation even though the standard is open - the long dominance of one cryptography library, and the day a bug in it exposed much of the web at once - the monoculture becomes a single point of failure for everyone downstream. A standard with one implementation carries that fragility by design.

## What COG can show

This is a test MX can pass rather than merely invoke. The COG specification has a reference implementation in JavaScript and an independent implementation in Rust, and the two interoperate: a record signed and canonicalised by one is read and checked by the other. That interoperability is what makes COG a standard instead of the behaviour of a single codebase. It demonstrates that the specification can be built from its text, by someone working in a different language with different libraries, and arrive at the same bytes - which means no participant depends on the reference code, or on whoever maintains it. It also connects to the point this series made about hubs: if there were one true implementation, its owner would be a chokepoint, whatever the licence said. Two independent ones remove the chokepoint at the level of code, the same way did:web removes it at the level of identity.

## A floor, not a finish

Two implementations is a floor, and it is worth saying so. Reaching interoperability once does not keep it; every change to the standard reopens the question, which is why the discipline belongs alongside the change-control argument of the last post - each new version has to clear the same bar before it counts as part of the standard. A reference implementation remains useful, a way to settle arguments and onboard newcomers. The danger was never having a reference. It was having only one.

## The test

One question to add for anyone weighing whether a standard is real. Is there more than one independent implementation that interoperates, and was at least one of them written from the specification alone? If the honest answer is that everything traces back to a single code base, then whatever you are adopting, you are adopting its owner along with it.

## Related reading

- [Capture Happens at Version Two](https://mx.allabout.network/blog/governance/capture-happens-at-version-two.html) - why change control needs the same interoperability bar
- [The Spec Was Never the Fragile Part](https://mx.allabout.network/blog/governance/the-spec-was-never-the-fragile-part.html) - removing the single gate, in code and in identity
- [A Rule You Sell Is Not a Standard](https://mx.allabout.network/blog/governance/a-rule-you-sell-is-not-a-standard.html) - the IETF's running-code tradition against vendor control
- [The Gathering](https://tg.community) - the body that holds the COG specification

---

*Tom Cranstoun is the founder of the Machine Experience (MX) community and author of the MX book series. He consults on MX strategy through Digital Domain Technologies Ltd.*
