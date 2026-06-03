---
title: Capture Happens at Version Two
description: The seventh post in the standards-governance series. A standard is rarely taken at version one, when it is plainly open and everyone is watching. It is taken at the next version, by whoever controls what the standard becomes and who is allowed to extend it. Microsoft's embrace-extend-extinguish years - Java, Kerberos, the browser - show that change control, not the first specification, is where ownership lives. MX keeps its extension and profile policy with The Gathering.
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
    - extensions
    - change-control
    - the-gathering
  blogFilename: governance/capture-happens-at-version-two
  blogUrl: https://mx.allabout.network/blog/governance/capture-happens-at-version-two.html
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/blog/governance/capture-happens-at-version-two.html
  servedAt: https://mx.allabout.network/blog/governance/capture-happens-at-version-two.html
  runbook: Blog post on mx-site, standards-governance series. The HTML is the canonical source for this YAML frontmatter.
---

# Capture Happens at Version Two

This is the seventh post in the standards-governance series. By now a pattern has shown itself: the danger to a standard rarely lives in the document everyone reads at the start. It lives in the parts the earlier posts kept circling - who funds the body, who sells the pass, who holds the trust. There is one more place it hides, and it is the most patient of them. A standard is seldom captured at version one, when it is plainly open and the whole field is watching. It is captured at the next version.

## The quiet route to control

You do not need to buy a standards body to own a standard. You need only control what the standard becomes. Implement the published version faithfully, earn a reputation for support, and then start adding improvements - features that are genuinely useful and that only you can fully implement. Each addition looks like progress. Together they move the living standard, the one people actually build against, into your hands. The text on the registry's website stays open. The thing developers must match to interoperate is now yours.

## Embrace, extend, extinguish

The strategy is old enough to have a name, leaked from inside the company that ran it best. Microsoft's [embrace, extend, extinguish](https://en.wikipedia.org/wiki/Embrace,_extend,_and_extinguish) appeared in the 1998 internal memos that became known as the Halloween documents, and the pattern is exactly as blunt as it sounds. Embrace a standard by implementing it. Extend it with proprietary additions that break clean interoperability. Extinguish the competition once the extensions, not the original, are what the market treats as the real thing.

Java is the worked example. Microsoft shipped a Java that ran well on Windows, then added Windows-only mechanisms and left out the parts that made Java portable, so that programs written with its tools ran on Windows and nowhere else. Internally the aim was to turn a write-once-run-anywhere language into the best way to write Windows applications. Sun sued in 1997; the case settled in 2001 with a payment, the removal of the extensions, and Java's departure from Windows - but the momentum had already been spent.

Kerberos shows the same move with a sharper edge. Windows 2000 extended the Kerberos authentication standard and then published the specification of its extension as an executable you had to run after agreeing not to disclose its contents - an NDA wrapped around a standard, which made an open-source implementation legally impossible. Developers posted the document in defiance and were told to take it down. The standard was open; the version that mattered was locked. The web went the same way, with browser-specific HTML extensions that worked in one product and degraded in the rest, and a rival that fell from near-total share to almost none.

## Why the open spec saved no one

In each case the original specification was freely available. Openness at version one was never the protection it appeared to be, because nobody controlled what came next. Where extension is unilateral - where one party can add to the standard and decide who may implement the addition - the spec is open and the standard is owned. The licence on the first version is worth little if the second version arrives with a gate.

## Where MX keeps the next version

This is why the change control matters more than the launch, and why MX treats its extension and profile policy as a governance question rather than a roadmap. The power to decide what the next version of MX is, and what may be added to the COG family, sits with [The Gathering](https://tg.community), not with a sponsor and not with the most active implementer. Additions are specified in the open and ratified through public review on Stream. A vendor - including the one behind REGINALD - may propose an extension and may be first to build it, but cannot make a private extension the thing everyone else has to match. There is no NDA-gated addition, no "our dialect is the real one," because the route from proposal to ratified part runs through a body no single party controls.

That is the same separation the last post drew around the conformance mark, carried into time. The badge must not sit with the seller; the next version must not sit with one implementer.

## Evolving without being eaten

None of this is an argument against extensions. A standard that cannot grow dies of its own rigidity, and the COG family is meant to gain new types as real use demands them. The discipline is not "do not extend." It is that every extension is openly specified, anyone may implement it without asking, and ratification happens in a community process rather than a product release. Growth is healthy. Privately owned growth is how an open standard is taken without anyone ever buying it.

## The test

The buyer's test gains a question that only time answers. Who decides what the next version is, and can anyone implement the new parts without permission? If the answer to the first is one company, and the answer to the second is no, you are looking at a standard with an owner - whatever the first page of the specification says.

## Related reading

- [A Rule You Sell Is Not a Standard](https://mx.allabout.network/blog/governance/a-rule-you-sell-is-not-a-standard.html) - the vendor conflict at the heart of a captured standard
- [The Badge and the Body](https://mx.allabout.network/blog/governance/the-badge-and-the-body.html) - keeping the definition apart from the sale
- [The Spec Was Never the Fragile Part](https://mx.allabout.network/blog/governance/the-spec-was-never-the-fragile-part.html) - the layers beneath and above a specification
- [The Gathering](https://tg.community) - where the next version of MX is ratified

---

*Tom Cranstoun is the founder of the Machine Experience (MX) community and author of the MX book series. He consults on MX strategy through Digital Domain Technologies Ltd.*
