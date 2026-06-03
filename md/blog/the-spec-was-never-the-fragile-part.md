---
title: The Spec Was Never the Fragile Part
description: The fourth post in the standards-governance series. JPEG has been threatened twice across thirty years while the specification never changed - once by a patent underneath it, once by a browser that switched off its successor. The fragile parts of a standard are the patents below it and the distribution above it, and keeping both out of any one party's hands is the work.
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
    - jpeg-xl
    - fair
    - patents
    - the-gathering
  blogFilename: governance/the-spec-was-never-the-fragile-part
  blogUrl: https://mx.allabout.network/blog/governance/the-spec-was-never-the-fragile-part.html
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/blog/governance/the-spec-was-never-the-fragile-part.html
  servedAt: https://mx.allabout.network/blog/governance/the-spec-was-never-the-fragile-part.html
  runbook: Blog post on mx-site, standards-governance series. The HTML is the canonical source for this YAML frontmatter.
---

# The Spec Was Never the Fragile Part

This is the fourth post in the standards-governance series. The earlier ones placed the danger inside a standard's governance: who owns the infrastructure it runs on, who funds the body that ratifies it, and what happens when the founder leaves. [Whose Standard Is It Anyway?](https://mx.allabout.network/blog/governance/whose-standard-is-it-anyway.html) set that out. JPEG earns a post of its own because it shows the danger is not only inside the governance. It comes from below the specification and from above it - from the patents the technique depends on, and from the distribution that decides who is allowed to use it. Across thirty years, JPEG has been threatened from both directions while the specification itself never changed.

## The win first

JPEG, first standardised in 1992 by the Joint Photographic Experts Group, won the web for an unglamorous reason: anyone could implement it without asking. The specification was published, the technique was understood, and a developer with a compiler could produce a working encoder. No licence to sign, no gatekeeper to clear. That is why it is still the safe default three decades later, having outlived a procession of technically better successors. The lesson this series keeps returning to holds here too: a standard wins by being freely implementable and everywhere, not by being the cleverest design available. [A Standard That Knows What It Isn't](https://mx.allabout.network/blog/a-standard-that-knows-what-it-isnt.html) makes the same case for MX - build on what already exists, claim as little new ground as you can.

But "freely implementable" turned out to be a claim about the specification, not about the ground underneath it.

## The threat from below: the patent nobody mentioned

In 2002 a company called Forgent Networks announced that JPEG was not free after all. It held a patent, US 4,698,672, filed in 1986 by engineers at Compression Labs, which Forgent had since acquired, and it read that patent as covering the compression at the heart of the format. Then it started charging. [Forgent took more than $110 million in licensing and settlements and sued dozens of companies](https://www.nbcnews.com/id/wbna15534260) before the claim came apart: a court ruled the patent applied only to video, the US Patent Office rejected its broadest claims on a public-interest reexamination, and the patent expired in 2006.

This was not a freak event. The same shape had already played out with GIF, when Unisys asserted the LZW compression patent against a format the whole web had assumed was free. In both cases the specification was open and the technique underneath it was owned. An open spec resting on an encumbered primitive is a trap with a delay on it. It springs years later, once adoption is too deep to reverse, which is exactly when a licensing demand carries the most leverage.

The governance lesson is plain. Clearing the patent ground is not a legal nicety to be done after the spec is finished. It is part of writing the standard. A body that defines a format without insisting its techniques are free to implement has built a liability and called it a standard. The defence is to build only on primitives that are open by design and old enough to be clear of ambush. MX takes that literally: its signing, identity, and canonical-bytes machinery is assembled from published IETF and W3C work, Ed25519, did:web, JSON canonicalisation, Merkle structures, chosen partly because the ground under them is already clear.

## The threat from above: the distribution gate

The second threat is newer, and it sits at the other end of the pipe.

JPEG XL is the modern successor: an ISO standard, royalty-free, markedly smaller than JPEG at the same quality, and able to repack existing JPEGs with no loss. By merit it should have spread quickly. Instead, in 2022 [Google removed it from Chrome](https://www.phoronix.com/news/JPEG-XL-Possible-Chrome-Back), citing "insufficient ecosystem interest". The format did not change. Its quality did not change. One browser's decision removed the distribution, and a superior royalty-free standard sat stranded for three years.

This is the [AMP](https://mx.allabout.network/blog/governance/a-rule-you-sell-is-not-a-standard.html) pattern at a different layer. The body that wrote JPEG XL did not decide whether the web could use it. The browser vendor did. A standard can be open, royalty-free, and superior, and still be switched off by whoever controls the runtime it has to pass through.

## What broke the gate

The end of the story is the part this series has been waiting for, because it shows the defence working.

JPEG XL did not survive by appealing to Google. It survived because it was not Google's to kill. Safari shipped it in 2023. Firefox moved its position. In late 2025 the PDF Association named it the preferred format for high-dynamic-range images in PDF, which put pressure on every PDF viewer, Chrome's included. Developer demand kept surfacing in the open. And when [Chrome reversed course](https://devclass.com/2025/11/24/googles-chromium-team-decides-it-will-add-jpeg-xl-support-reverses-obsolete-declaration/) in November 2025, the new decoder was written in Rust largely by an outside contributor rather than by Google, and shipped behind a flag in early 2026, with default support expected later in the year.

Everything that rescued the format came from the fact that no single party owned it: other implementers who could ship it regardless, an adjacent standards body that could endorse it, outside engineers who could do the work. A standard with one owner can be switched off in an afternoon. A standard many parties hold cannot, because there is no single switch to throw.

## Trust in the signature, not the registry

There is a sharper version of that fix, and it decides whether the single switch can exist at all. When a registry is the single source of truth - holding the canonical copy, the identity, and the permission to be listed - it is also a single point of control, and control is what gets abused. WordPress.org is the case [the series opened on](https://mx.allabout.network/blog/governance/whose-standard-is-it-anyway.html): a directory the whole ecosystem depended on, owned by one company, able to reassign a plugin and cut a participant off on a Monday morning.

The answer reached for is the same one MX makes. In 2025 the Linux Foundation launched [FAIR, Federated And Independent Repositories](https://www.linuxfoundation.org/press/linux-foundation-announces-the-fair-package-manager-project-for-open-source-content-management-system-stability), built so that no single entity controls the supply chain end to end. Packages are cryptographically signed and served through federated repositories that anyone can mirror or self-host. The signature is what a site verifies; the repository is only where it found the package. Once trust lives in the signature, the registry stops being a chokepoint and becomes a convenience that can be replaced.

That portability is not theoretical. FAIR was conceived for WordPress, but the WordPress effort stalled, and the project has since been [carried into TYPO3](https://hackathon.cloudfest.com/project/fair-package-management-for-typo3/), whose community is building it into an extension ecosystem of some eight thousand packages; the format was platform-agnostic from the start. A registry one company owns cannot relocate. A federated, signed format can, because no one holds the trust to begin with. The reason it had to move is its own lesson: FAIR's founders concluded that neutrality the ecosystem will not fund does not materialise, which is the exact problem [Not the Main Sponsor](https://mx.allabout.network/blog/governance/not-the-main-sponsor.html) sets out to solve. A neutral standard needs both an architecture no one owns and a way to keep the lights on.

That is the line between a registry that grants trust and a registry that merely points to it. The first can revoke what it granted. The second has nothing to revoke.

## What this means for MX

Put the two threats together and the conclusion is the one this series keeps reaching from new directions. The specification is rarely the fragile part. The fragile parts are the patents beneath it and the distribution above it, and a standards body's real work is keeping both out of any single party's hands.

That is the shape [The Gathering](https://tg.community) is built to. The standard is held by an independent body, community-led and never vendor-driven, so no one company can rewrite or retire it. The primitives are open and unencumbered, so there is no patent layer for a Forgent to sit on. And MX sits on the pointing side of that line: a COG carries its own signature, the publisher's identity lives under did:web on their own domain, and a reader verifies both without anyone's permission. REGINALD indexes where a COG is and attests its integrity, but it holds none of the trust, which is why anyone can run an instance and an air-gapped one still works.

## Federated still has a hub

Even the federated case keeps one. FAIR moved trust into the signature, but to stay usable it rebuilt a central place to find packages and a labelling layer to say which ones to trust. Those hubs are federated and replaceable, which makes them far better than a single-owner directory - but they are still places the system routes through, and a place everything routes through is a place that can be leaned on. MX needs no such hub, because finding a COG is not a separate errand: it rides with content discovered the way any page already is, a publisher's identity resolves to their own domain, and a registry like REGINALD is an optional index rather than the only door in. Verification is point to point, reader to publisher, with nothing in the middle that everyone must query.

The honest cost is that the burden moves to the publisher - weak key handling leaves you less trustworthy than a shared directory would, and that failure is yours - but it is local, not a single switch in one company's hand. None of this makes MX safe forever. It means the failure modes JPEG suffered have been designed against, rather than discovered after the demand letter arrives.

## The test, extended

The earlier posts asked who profits if the rule says what it says, and who can change it. JPEG adds questions about the layers that test did not reach. Is every technique the standard requires free to implement, with no patent waiting underneath it? And if the one platform that matters most decided tomorrow to stop supporting it, would the standard survive the loss?

JPEG passed both, eventually, the hard way. The point of a standards body is to make survival the design, not the reprieve.

## Related reading

- [Whose Standard Is It Anyway?](https://mx.allabout.network/blog/governance/whose-standard-is-it-anyway.html) - the post that opened the series: the WordPress kill-switch case and the three failure modes
- [A Rule You Sell Is Not a Standard](https://mx.allabout.network/blog/governance/a-rule-you-sell-is-not-a-standard.html) - AMP and OOXML, and the IETF as the working alternative
- [Not the Main Sponsor](https://mx.allabout.network/blog/governance/not-the-main-sponsor.html) - the founder's funding cap and the expiring veto
- [A Standard That Knows What It Isn't](https://mx.allabout.network/blog/a-standard-that-knows-what-it-isnt.html) - why MX stays small and builds on what already exists
- [The Gathering](https://tg.community) - the open body that holds the MX standard

---

*Tom Cranstoun is the founder of the Machine Experience (MX) community and author of the MX book series. He consults on MX strategy through Digital Domain Technologies Ltd.*
