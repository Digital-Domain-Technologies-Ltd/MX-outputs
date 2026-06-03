---
title: A Rule You Sell Is Not a Standard
description: The third post in the standards-governance series. When the company that profits from a verdict also writes the rule, the rule bends toward the product. AMP and OOXML are worked cases of two failure modes named earlier in the series; the IETF shows the alternative. It is why the MX standard sits with The Gathering, not with the vendor that sells the audit.
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
    - the-gathering
    - reginald
    - amp
    - ooxml
    - ietf
  blogFilename: governance/a-rule-you-sell-is-not-a-standard
  blogUrl: https://mx.allabout.network/blog/governance/a-rule-you-sell-is-not-a-standard.html
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/blog/governance/a-rule-you-sell-is-not-a-standard.html
  servedAt: https://mx.allabout.network/blog/governance/a-rule-you-sell-is-not-a-standard.html
  runbook: Blog post on mx-site, standards-governance series. The HTML is the canonical source for this YAML frontmatter.
---

# A Rule You Sell Is Not a Standard

A standard decides who passes and who fails. The moment the company that profits from the verdict also writes the rule behind it, the rule stops being a standard and becomes a sales instrument. It bends, slowly and reasonably, toward whatever the company sells. Not through malice, through gravity. People protect the thing that pays them.

This is the hinge the whole case for an independent standards body turns on. [Whose Standard Is It Anyway?](https://mx.allabout.network/blog/governance/whose-standard-is-it-anyway.html) opened this series on it and named the ways the bend happens: capture by infrastructure ownership, capture by sponsor concentration, and capture by founder dependency. This post takes the infrastructure and sponsor modes out of the abstract, into the clearest cases the web has produced, and then shows what the opposite looks like when it is built properly.

## The open label, the private steering wheel

The usual move is not to reject openness. It is to wear it.

Google's AMP arrived dressed as an open project for a faster mobile web. It was open source, anyone could contribute, and for years a Google engineer held the final say on what went in. AMP pages were served from Google's cache and given prominent placement in search, which meant publishers could not easily decline. When the criticism grew, Google announced open governance and later moved AMP to the OpenJS Foundation - a step [critics called window-dressing](https://wptavern.com/unredacted-antitrust-complaint-unsealed-google-internal-documents-show-amp-pages-brought-40-less-revenue-to-publishers), since Google funded the foundation and, as an advisory member said on resigning, AMP remained a Google product in all but name. A later antitrust complaint alleged the format had been used to steer publishers away from ad-selling methods that threatened Google's own revenue. Whatever a court eventually makes of that allegation, the structure is the lesson: the body that owned the rule was the body that gained from it.

Microsoft's Office Open XML is the older, cleaner case. In 2008, after an [ISO process marked by committee-stuffing allegations](https://fsfe.org/activities/msooxml/msooxml.en.html) and a failed first vote, OOXML was fast-tracked to international-standard status as ISO/IEC 29500. A committee member observed that the specification read less like a standard than like the technical documentation of a commercial product, which is close to what it was: a way to encode Microsoft Office's existing formats so the company could claim conformance without loosening its hold on the people locked into them. An openly developed format, ODF, already existed. A second one was minted because the incumbent needed a standard shaped like its product.

Different shapes, one pattern. AMP is capture by infrastructure ownership: the rule mattered less than the cache and the search slot that Google alone controlled, the same shape as the WordPress.org case that opened this series. OOXML is capture by sponsor concentration: the specification was waved through by committees the incumbent had packed. In both, the move is the same - adopt the language of openness, keep the steering wheel. Embrace and extend, where the extension is the part only you can implement.

## What independence actually looks like

It is not that open governance is impossible. It is that it has to be real, and realness has a shape.

The internet runs on standards made by the IETF, whose culture David Clark caught in a line from a 1992 talk that has been on T-shirts ever since: ["We reject kings, presidents and voting. We believe in rough consensus and running code."](https://groups.csail.mit.edu/ana/People/DDC/future_ietf_92.pdf) Participation is open, no one buys a veto, and a proposal earns its place by working rather than by who put it forward. The protocols that carry this sentence to you were set that way. No vendor owns TCP/IP, and that is exactly why anyone can build on it.

Foundations can supply the same neutrality - OASIS held ODF, the OpenJS Foundation holds a shelf of web projects - but a logo is not a guarantee. AMP shows that a project can sit inside a foundation while one company funds it, staffs it, and gains from it. The test is not where the rule is filed. It is whether the people who profit from the outcome can change the rule, and whether the people who live with it can be heard. Independence is a structure, not a press release.

When capture has already happened, the structural repair is to delete the single switch rather than build a nicer one. After one company seized a rival's plugin slug on the WordPress directory, the answer was not a better directory but a federated one: the Linux Foundation's [FAIR](https://www.linuxfoundation.org/press/linux-foundation-announces-the-fair-package-manager-project-for-open-source-content-management-system-stability) project distributes cryptographically signed packages across independent repositories, so trust travels in the signature and no single registry can cut a participant off. The format is platform-agnostic by design, and after its WordPress effort stalled it has been [carried into TYPO3](https://hackathon.cloudfest.com/project/fair-package-management-for-typo3/) - a federated format can move between ecosystems precisely because no one owns it. [The Spec Was Never the Fragile Part](https://mx.allabout.network/blog/governance/the-spec-was-never-the-fragile-part.html) follows that mechanism through to how MX uses it.

## Why this is the hinge for MX

Here is the part it would be dishonest to skip.

CogNovaMX is a vendor. REGINALD, its audit engine, is a product we sell. If CogNovaMX also owned the MX standard and the definition of what a good score means, the score would be worthless - the seller grading its own homework and charging for the rubric. A regulator would be right to ignore it. So would a buyer.

That is the whole reason the standard is not ours to own. The rules of MX - what a compliant record must declare, how a score is defined, what *attested* is allowed to mean - sit with [The Gathering](https://tg.community), an independent body, community-led and never vendor-driven. The definition is open. Anyone may implement it; REGINALD is one implementation among those that can exist, not a vendor specification wearing a standard's clothes. The separation is not modesty. It is the only arrangement under which a number we produce can mean anything to someone who did not produce it.

A standards body earns trust by selling nothing it standardises. That line is easy to write and costly to hold, because the pull this post began with acts on every organisation, ours included. The defence against it is not good intentions. It is keeping the rule somewhere we cannot quietly move it - and writing the limits down where a sceptic can check them. The concrete version, a cap on how much of The Gathering's funding may come from my own company and a founder's veto that expires the day the body can fund itself, is set out in [Not the Main Sponsor](https://mx.allabout.network/blog/governance/not-the-main-sponsor.html).

## The same test, in short

The opening post set out the questions a buyer should ask of any standard: if the sponsor went bankrupt, would the standard survive; if its commercial interests shifted, would the standard bend; and if the registry operator blocked a participant, would that participant have recourse. The compressed version fits in a breath. Who profits if the rule says what it says, and who is able to change it. If one company answers both, you are looking at a product with a certificate stapled to it.

The Gathering exists so that, for MX, neither answer is us.

## Related reading

- [Whose Standard Is It Anyway?](https://mx.allabout.network/blog/governance/whose-standard-is-it-anyway.html) - the post that opened this series: the WordPress kill-switch case, the three failure modes, and the buyer's test
- [Not the Main Sponsor](https://mx.allabout.network/blog/governance/not-the-main-sponsor.html) - the founder's answer to the third failure mode: the funding cap and the expiring veto
- [A Standard That Knows What It Isn't](https://mx.allabout.network/blog/a-standard-that-knows-what-it-isnt.html) - why MX stays small and defers to standards that already exist
- [The Agent Web Looks a Lot Like 1995](https://mx.allabout.network/blog/the-agent-web-looks-like-1995.html) - competing vendor protocols and the standards gap between them
- [The Gathering](https://tg.community) - the open body that holds the MX standard

---

*Tom Cranstoun is the founder of the Machine Experience (MX) community and author of the MX book series. He consults on MX strategy through Digital Domain Technologies Ltd.*
