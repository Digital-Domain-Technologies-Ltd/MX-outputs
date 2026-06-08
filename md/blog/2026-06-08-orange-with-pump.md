---
title: "Orange With Pump: A Short Field Guide to Machine Translation Going Sideways"
description: "A British juice brand, sold in Germany, photographed through a phone's translate camera, produces a bottle that promises 'Orange with Pump.' Nobody ordered a pump. It is the funniest thing machine translation does, and it is the most instructive: strip the context away and even a confident machine will hand you plumbing."
author: Tom Cranstoun
created: 2026-06-08
modified: 2026-06-08
version: "0.1"

mx:
  status: draft
  contentType: blog-post
  audience: [business, humans, machines]
  targetReaders: "Anyone who has ever pointed a translate app at a menu and received nonsense back, and anyone shipping content that machines will translate without asking permission."
  tags: [machine-translation, localisation, context, nlp, mx, juice]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/blog/2026-06-08-orange-with-pump.md
  purpose: "An amusing walk through one real mistranslation on a juice bottle, used to make a serious point about why context is the thing machine translation keeps losing."
  stability: draft
  runbook: "Published article. Read as narrative; the joke is load-bearing."
  x-mx-contextProvides: ["Orange With Pump: A Short Field Guide to Machine Translation Going Sideways"]
---

# Orange With Pump: A Short Field Guide to Machine Translation Going Sideways

I was handed a bottle of German orange juice and asked to translate it.

This should be the easiest job in the world. It is a juice bottle. It has perhaps eleven words on it. I have a phone, the phone has a camera, the camera has a little translate button, and the little translate button has the combined linguistic might of roughly the entire internet behind it. We have spent twenty years and an unknowable quantity of electricity teaching machines to do exactly this.

The phone considered the bottle, thought about it for a moment, and confidently informed me that I was holding:

> **Orange With Pump.**

I checked the fridge. No pump was supplied.

## What the bottle actually says

Let us do this properly first, because the bottle is, in fairness, perfectly clear if you read it like a human:

| On the bottle (German) | What it means |
|---|---|
| **innocent** | The brand name. It is a British company. The name is already in English. Nobody translated anything here and that is the first joke. |
| **Schmeckt gut, tut gut** | "Tastes good, does good." Their slogan. Genuinely sweet. |
| **Direktsaft** | "Direct juice", i.e. not-from-concentrate. Pressed, bottled, never reconstituted from a syrup. |
| **Orange mit Fruchtfleisch** | "Orange with pulp." On innocent's own UK bottles this is cheerfully written as **"with bits."** |
| **Niemals Zucker zugesetzt** | "Never any sugar added." |

So the correct, boring, human translation of the headline is **"Orange, with bits."** A British brand wrote *bits*, a German label said *Fruchtfleisch* (literally "fruit flesh", which is its own small delight), and the machine, staring at this, reached deep into its probabilities and produced **pump.**

## Where the pump came from

Here is the thing I find genuinely funny, and then genuinely useful.

The machine did not fail because it is stupid. It failed because it was confident and **contextless**. It saw a short German phrase, detached from any knowledge of what an `innocent` bottle is, what a smoothie aisle looks like, or the fact that juice does not come with hydraulic equipment. With all of that stripped away, "fruit flesh / pulp / bits" is just a cluster of tokens, and one of the nearby probable English words — for a machine that has read a great many plumbing catalogues as well as a great many juice labels — is *pump*.

A human has never once been confused about this. You have *context*: you know it is juice, you know juice has bits, you know bottles do not contain pumps. You disambiguate before you have even finished reading. The machine had to do it from the words alone, and the words alone were not enough.

That is the whole story of machine translation in one orange bottle. It is not that the models are bad — they are, by any historical standard, miraculous. It is that they are doing the one job we keep forgetting is hard: **recovering the meaning we left out** because we assumed everyone could see the bottle.

## The serious bit (with bits)

We build systems where machines read content nobody wrote *for* machines — and translation is just the most visible case. Every time a model translates, summarises, or acts on a piece of text, it is doing what my phone did to the juice: filling the gaps in your context with its own best guess. When the context is rich, the guess is uncanny. When the context is thin, you get a pump.

The fix is not "use a better model", though better models help. The fix is to **stop shipping context-free text** and expecting the meaning to survive the trip. Say what the thing is. Mark up what a word refers to. Tell the machine, in terms it can read, that this is a juice and not a hardware store. The brands that do this will be the ones whose products still make sense after a phone camera has had its way with them.

Until then, I will be in the kitchen, enjoying my Orange With Pump. It tastes good. It does good. It does not, as far as I can tell, pump anything.

*Tastes good, does good. — with apologies to innocent, who got it right in two languages before the machine got it wrong in a third.*
