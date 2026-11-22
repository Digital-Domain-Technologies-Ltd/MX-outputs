---
"@context": https://mx.allabout.network/canon/context.json
title: "Random Is a Claim"
description: "Google's AI Overviews gave people the same 'randomly generated' password across devices, accounts and days. Calling something random is a claim about how it was made, and an answer that makes that claim should carry the evidence."
author: "Tom Cranstoun"
created: "2026-11-20"
modified: "2026-11-20"
category: "mx-content"
type: "blog-post"
tags: ["watching-the-machines", "google", "ai-overviews", "passwords", "randomness", "provenance", "determinism", "pal", "machine-experience"]
mx:
  mxSpecVersion: "0.9"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/blog/drafts/watching-the-machines/random-is-a-claim.md
  servedAt: https://mx.allabout.network/blog/drafts/watching-the-machines/random-is-a-claim.md
  derivedFrom: datalake/draft-site/blog/watching-the-machines/random-is-a-claim.md
  audience: [humans, machines]
  stability: "stable"
  x-mx-contentState: "draft"
  contextProvides:
    - "'Randomly generated' is a statement about how something was made, so it is a provenance claim, and a language model cannot back it: it predicts likely characters, and a stored or repeated answer gives everyone the same string."
    - "An answer that claims a process should carry the evidence for it: what made it, where, with what settings, and whether anyone kept a copy."
    - "Where a script can do a job exactly, such as making a random password, the script does it and the answer says so; a model is not asked to imitate it."
  runbook: "Generated from datalake/draft-site/blog/watching-the-machines/random-is-a-claim.md; never edit this file. Change the source and regenerate the page, and this twin is rebuilt beside it."
  purpose: "The markdown version of https://mx.allabout.network/blog/drafts/watching-the-machines/random-is-a-claim.html, built from its source: the same text as the page, without its navigation or footer."
---

> This is the markdown version of https://mx.allabout.network/blog/drafts/watching-the-machines/random-is-a-claim.html. For the site index, see [llms.txt](https://mx.allabout.network/llms.txt).

# Random Is a Claim

Part of **[Watching the Machines](https://mx.allabout.network/blog/drafts/watching-the-machines/)**, a record of how the companies shipping AI treat the people who own the devices and write the content.

For a while, if you typed "generate a password" into Google, its AI Overviews gave you `k8#pz!vl9$mq2wx*` and told you the password was strong and randomly generated.

SEO consultant Natalia Witczyk spotted it. Computeractive reported on 18 November 2026 that she had tried the same request on several devices and Chrome profiles and got the same answer, "with the exact same password every single time, even in an Incognito mode". In a [LinkedIn post](https://www.snipca.com/61104) she wrote: "Imagine hundreds if not thousands of users worldwide thinking this has been randomly generated. Imagine 'k8#pz!vl9$mq2wx*' becoming the new 'password'."

Computeractive repeated the test. The same password came back across several Google accounts and devices, in normal searches and in Incognito, on successive days.

## What the Magazine Got Right

The report is worth reading for its care as much as its finding. It says plainly that Witczyk "didn't prove that caching is responsible in this case, or established how many people have received the password". It's just as plain about its own runs: "the tests don't prove that the same password is shown to different people". Google hasn't commented.

That's the distinction the AI Overview didn't make. The magazine kept what it saw apart from what it supposed, and named each. The Overview stated a fact about its own process, that the password was random, and offered nothing to support it.

## Random Is a Statement About How

"Strong" is a property you can check by looking at the password. "Random" isn't. You can't tell from `k8#pz!vl9$mq2wx*` whether it came from a coin, a dice, a secure generator, or a language model's best guess at what a password looks like. Random describes how the string was made. That makes it a provenance claim, and without evidence it's worth nothing.

A language model can't supply that evidence, because it can't do the thing claimed. It writes the most likely next character, with a little chance mixed in. Looking random and being drawn by chance aren't the same thing. And once an answer is stored, or the chance is turned down, every person who asks gets the same string, still labelled random.

I ran into the other side of this in **[Same Question, Five Answers](https://mx.allabout.network/blog/same-question-five-answers.html)**. Apple's on-device model gave me five different answers to one question, and I argued that asking again can't recover what it said the first time. This case runs the other way. For a fact, a stable answer is welcome. For a secret, it's the whole failure. Either way the reader can't see which they got. Variation and sameness are both invisible from inside one answer, so the evidence has to arrive with it.

## What a Password Answer Should Carry

If a machine hands you a password and says it's random, it should be able to say:

- what made it, and that it wasn't a language model
- where it was made: on your device, or on a server that might keep it
- its length, and which characters it draws from
- how strong that makes it, as bits of entropy
- whether anyone kept a copy, in a log, a cache, or the chat's memory

There's nothing exotic here. It's the same metadata MX asks a published file to carry about itself, pointed at an answer instead of a page.

## How Pal Answers

Pal is the personal assistant I build on MX, and I checked how it handles the same request before writing this. It didn't handle it well. A request like "generate a password" went to a language model, the same as anything else typed into it. Pal's safety checks would have caught a leaked API key, but a model-written password would have passed straight through.

So I changed it, and Pal now answers like this:

```text
Generated on this device by a script, not a model:

9fyzEtbfTdb#ke2hq-a4

How it was made: a cryptographic random number generator, reading your
operating system's secure random source, drew 20 characters from a set
of 70 (capitals, small letters, digits and symbols, with look-alikes such
as I, O and l left out), with every kind present. That gives about 122
bits of entropy.

Every request gets a new password. No model wrote it or saw it, and Pal
does not keep it, remember it in the chat, or send it anywhere. Put it
straight into your password manager.
```

That password is published now, so it's burned. Don't use it, and don't use `k8#pz!vl9$mq2wx*` either.

Four rules produce that reply:

- **No model touches the request.** Pal spots a request for a password or PIN before it decides where an answer should come from, and a script answers it. A model can't produce a random password, so Pal doesn't ask one to try.
- **The answer carries its provenance.** It says what made the password, where, how long it is, what it draws from, and how strong that makes it. "Random" arrives with its evidence.
- **Nothing keeps it.** The answer isn't kept in the chat's memory. If the conversation carries on, the password is replaced before any later message goes to a model.
- **A backstop covers the rest.** Some questions about passwords still reach a model, such as "what's an example of a strong one?". If the model writes something shaped like a password in reply, Pal withholds it, says why, and points to the script.

Can Pal ever make Google's mistake? Not on the requests it spots, and not by passing on a password a model wrote. The guarantee is code, checked on every change, rather than a line in a prompt asking the model to behave. One check feeds Pal a model reply of `k8#pz!vl9$mq2wx*` and confirms the person never sees it.

## A Script for What a Script Can Do

The rule I work to is simple: if a check can be scripted, script it. A model is the right tool when the work is reading, weighing, or writing. It's the wrong tool when the result has to be exact, as a random password, a sum, or the weekday of a date must be. When a script can do the job, the assistant should hand it over and say that's what it did.

Pal does this for passwords now. The bigger point holds for any assistant, and for every page one reads. A claim about how something was made is only as good as the record behind it. A machine can check only what that record holds.

**A declared interest.** I wrote the books on MX and consult on it, and Pal is my own product, so I have a stake in what this column recommends. I haven't repeated the Google test myself; the account above is Computeractive's.

## Method

- **The Google case.** Taken from Computeractive's report in its issue of 18 November 2026, read through PressReader. The magazine's quotations of Witczyk are reproduced as printed, and its link to her post is the one above.
- **Pal before the change.** I read how Pal routed a password request on 20 November 2026. It went to a language model, and the output checks looked for private-key and access-key shapes only.
- **Pal after the change.** Pal's test suite for the password route ran 60 checks that day, and all passed. Among them:
  - 2,000 requests in a row gave 2,000 different results
  - the length and character rules hold, and the stated entropy is right
  - no model is called for a request Pal spots
  - a generated password is kept out of later model turns
  - a model's reply of `k8#pz!vl9$mq2wx*` is withheld when a password question gets through to one

## What to Do About It

Make passwords in a password manager, which does exactly this job and keeps the result safe. Computeractive's recommendation is [Bitwarden's free generator](https://www.snipca.com/61107). If you ever used the password from the Overview, change it now. When any machine tells you how something was made, ask it to show you.

- [Join The Gathering](https://tg.community)
