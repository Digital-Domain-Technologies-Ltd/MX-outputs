---
title: "When the Machine Owns Its Words"
description: "A German court has ruled that Google is the author of what its AI Overviews say, not a neutral index pointing at other people's pages. The reasoning turns on one sentence: nobody needs AI to search the internet. Once the AI layer is elective, the operator owns the sentences it generates — and so does everyone the machine describes. This is the legal moment MX has been built for."
author: Tom Cranstoun
created: 2026-06-11
modified: 2026-06-11
version: "0.1"

mx:
  status: draft
  contentType: blog-post
  audience: [business, humans, machines]
  targetReaders: "Boards and executives deploying AI answer engines or worried about how those engines describe them, plus the technical teams responsible for grounding, attribution, and provenance."
  tags: [ai-search, liability, provenance, attribution, brand-mention, governance, evidence-vehicle, mx]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/blog/2026-06-11-when-the-machine-owns-its-words.md
  purpose: "A German court has ruled that Google is the author of what its AI Overviews say, not a neutral index pointing at other people's pages. The reasoning turns on one sentence: nobody needs AI to search the internet. Once the AI layer is elective, the operator owns the sentences it generates — and so does everyone the machine describes. This is the legal moment MX has been built for."
  stability: draft
  runbook: "Published article. Read as narrative; the argument is the content."
  x-mx-contextProvides: ["When the Machine Owns Its Words"]
---

# When the Machine Owns Its Words

Two publishers in Munich typed their own names into Google.

The AI Overview told them, in Google's own confident prose, that they were known for dubious business practices and were often perceived as a scam. It tied them to subscription traps and shady operators. None of it was true. None of it appeared in any of the pages the overview cited. The machine had read about genuinely sketchy companies, mixed those companies up with the plaintiffs, and drawn a connection that existed nowhere except in the summary it generated.

They sent a cease-and-desist. The output did not change. So they went to court, and in June 2026 the [Regional Court of Munich](https://ppc.land/munich-court-holds-google-liable-for-ai-overviews-defamation-a-first/) did something no court had done before: it held the operator of an AI answer engine liable for what the engine said, as the author, not the messenger ([Ars Technica](https://arstechnica.com/tech-policy/2026/06/nobody-needs-ai-to-search-the-internet-court-says-in-ruling-against-google/)).

## What the court actually held

The interesting part is not that Google lost. It is the line of reasoning the court walked to get there, because that line generalises far beyond Google.

German law, like most law, protects search-engine operators from liability for the pages they index. A search engine that returns a list of links is repeating other people's statements; the statements belong to the sites, and the reader follows the link to judge for themselves. That shield is well established and Google leaned on it.

The court took the shield away. An AI Overview, it held, does not repeat third-party statements. It generates **"independent, new, and substantive statements"** by evaluating and combining content from many sources into something none of those sources said. That output is Google's own content. Google, the court wrote, *alone has influence* over it. So Google is not an intermediary pointing at someone else's words. It is the author of its own. A direct infringer ([Search Engine Land](https://searchengineland.com/google-liability-false-ai-overview-claims-germany-479820); [The Decoder](https://the-decoder.com/landmark-german-ruling-declares-googles-ai-overviews-are-googles-own-words-and-makes-it-liable-for-false-answers/)).

The load-bearing sentence — the one the headlines reached for — is the reason the shield does not apply. An AI Overview, the court observed, is **an additional function, one without which the use of the search engine would still be, and is, possible.** Nobody needs AI to search the internet. Search worked before the summary existed and works now if you scroll past it. Because the AI layer is elective rather than constitutive, it does not inherit the protections that attach to the thing it sits on top of. The operator chose to add a machine that speaks. The operator owns what it says.

Google's defence was that users can click through to the sources, and that [most people know not to trust AI output blindly](https://www.pcgamer.com/software/ai/google-claims-most-users-know-information-generated-with-ai-should-not-be-blindly-trusted-but-a-court-ruled-its-still-liable-for-false-claims-made-in-ai-overview/). The court rejected both, and the rejection matters as much as the ruling. The chance to disprove a statement through further research, it said, does not exempt whoever published it — the same principle that governs the press. A newspaper cannot defame you and then point out that you were free to check. Neither, now, can a model.

The injunction bars Google from repeating the specific false claims, on pain of [fines up to €250,000 per violation](https://ppc.land/munich-court-holds-google-liable-for-ai-overviews-defamation-a-first/), with Google bearing eighty per cent of the costs. It is a preliminary injunction from a regional court in a civil-law system, not a binding precedent, and Google can appeal. But the court noted the logic reaches further than the case, and it does. The same reasoning, if it survives, lands on [every answer engine that composes rather than lists](https://www.engadget.com/2191469/german-court-holds-google-liable-for-false-ai-overview-answers/) — Gemini, ChatGPT, Perplexity, and whatever ships next quarter.

## The MX reading: this was an attribution failure

Strip the legal vocabulary away and look at what the machine did wrong, mechanically.

It made a claim no source supported. It attached a real entity — a named, traceable publisher — to a characterisation that none of its inputs contained, and it presented that characterisation with the same confidence it would present a fact lifted verbatim from a cited page. The reader had no way to tell the difference, because the output carried no signal about which sentences were grounded in a source and which were the model's own synthesis. The provenance of every claim was flattened into a single uniform voice.

That is the exact gap MX exists to close. We have spent two years arguing that machine-generated content needs to carry, alongside the prose, a record of where each consequential statement came from and under whose authority it was made. We call it the provenance sidecar, and we run it on our own audit pipeline: every substantive claim in a deliverable can be walked back to the input that produced it, with the agent that generated it named explicitly and the rubric it ran under hashed for inspection. A claim with no source in the chain is visible as exactly that — a claim with no source.

Run the Munich case through that lens. An AI Overview that carried a provenance chain would have exposed the defect the moment it was generated: the sentence calling the publishers a scam would have pointed at no input, because no input said it. The misattribution was not invisible by nature. It was invisible by design, because the system was built to emit fluent answers, not accountable ones. The court has now priced that design choice.

## Liability has two sides, and both are yours

The reflexive reading of this ruling is that it is a problem for the people who build answer engines. It is. If your model composes substantive statements about named entities, you are, in at least one European jurisdiction, the author of those statements and liable for them. The "it's just AI, check the sources" posture is now a losing argument in court, and the engineering consequence is direct: you need to know, at generation time, which of your sentences are grounded and which are synthesis, and you need to be able to prove it after the fact. That is a provenance problem before it is a legal one.

But there is a second side, and it belongs to everyone the machines describe — which is everyone. The two plaintiffs were not AI companies. They were publishers who discovered that a machine they did not operate was making substantive, false, reputationally lethal statements about them to anyone who searched their name. Their only recourse was a court, after the fact, one false claim at a time. That is a terrible position to be in, and it is the position every organisation is now in by default, because answer engines describe you whether or not you have any say in how.

The durable answer to *the machine is saying false things about us* is not solely litigation. It is to make sure the machine has correct, attributable, machine-legible material to draw on, and to make the provenance of claims about you something a model can resolve rather than guess. The legal stick the Munich court just swung is what makes the MX carrot matter. When an answer engine is liable for what it says about you, both the operator generating the claim and the entity named in it have a concrete stake in grounding, attribution, and a verifiable chain back to source. The interests finally align around the thing we have been building.

## Where this leaves us

A specific ruling in a specific court will be appealed, narrowed, distinguished, and argued over for years. Do not wait for it to settle. The structural fact underneath it is already true and will not reverse: machines now compose original statements about real entities at scale, and "I was only summarising" is not a defence a composer gets to make. Whoever owns the machine owns its words.

For anyone building an answer engine, the move is to make your system account for its own claims while it generates them — to ship the answer with the chain that shows which sentences are grounded and which are synthesis, so that a false attribution is catchable before it is actionable rather than after. For everyone else, the move is to stop treating how machines describe you as someone else's problem and start treating your own content as evidence the machines are obligated to get right.

We have been building both halves of that for two years, and the structure is public. If you operate an engine that speaks, or you have found one speaking falsely about you, we are happy to walk through what an accountable answer actually looks like. Reach us at <info@cognovamx.com>.

---

## Sources

This post argues that machine-generated claims should carry a chain back to source. It would be poor form not to run on its own principle, so every substantive factual claim above links to the source it came from, and the full list is here. The ruling discussed is the Regional Court of Munich (Landgericht München) temporary injunction, case no. 26 O 869/26, reported June 2026.

- Ars Technica — [Nobody needs AI to search the internet, court says in ruling against Google](https://arstechnica.com/tech-policy/2026/06/nobody-needs-ai-to-search-the-internet-court-says-in-ruling-against-google/)
- PPC Land — [Munich court holds Google liable for AI Overviews defamation — a first](https://ppc.land/munich-court-holds-google-liable-for-ai-overviews-defamation-a-first/)
- Search Engine Land — [Google can be directly liable for false AI Overview claims: German court](https://searchengineland.com/google-liability-false-ai-overview-claims-germany-479820)
- The Decoder — [Landmark German ruling declares Google's AI Overviews are Google's own words](https://the-decoder.com/landmark-german-ruling-declares-googles-ai-overviews-are-googles-own-words-and-makes-it-liable-for-false-answers/)
- Engadget — [German court holds Google liable for false AI Overview answers](https://www.engadget.com/2191469/german-court-holds-google-liable-for-false-ai-overview-answers/)
- PC Gamer — [Google claims most users know AI output should not be blindly trusted](https://www.pcgamer.com/software/ai/google-claims-most-users-know-information-generated-with-ai-should-not-be-blindly-trusted-but-a-court-ruled-its-still-liable-for-false-claims-made-in-ai-overview/)

*This post is commentary, not legal advice.*
