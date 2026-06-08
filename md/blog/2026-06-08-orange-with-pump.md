---
title: "Orange With Pump: A Short Field Guide to Machine Translation Going Sideways"
description: "A British juice brand, sold in Germany, photographed through a phone's translate camera, produces a bottle that promises 'Orange with Pump.' Nobody ordered a pump. The joke is instructive: a machine is grounded in a culture, and it isn't yours. It reads German through an English-trained memory, and where your cultural grounding would have started, its guessing runs out. The fix is to hand the machine the meaning, not hope it shares your world."
author: Tom Cranstoun
created: 2026-06-08
modified: 2026-06-08
version: "0.1"

mx:
  status: draft
  contentType: blog-post
  audience: [business, humans, machines]
  targetReaders: "Anyone who has ever pointed a translate app at a menu and received nonsense back, and anyone shipping content that machines will translate without asking permission."
  tags: [machine-translation, localisation, cultural-grounding, context, common-crawl, english-dominance, nlp, mx, juice]
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
| **Orange mit Fruchtfleisch** | "Orange juice with bits." That is not a paraphrase — "with bits" is the exact phrase a British supermarket prints on the shelf. The German literally reads "fruit flesh"; the honest English is **"with bits."** |
| **Niemals Zucker zugesetzt** | "Never any sugar added." |

So the correct, boring, human translation of the headline is the one every British supermarket already uses: **orange juice with bits.** That's the punchline of the whole exercise — the right English answer is a phrase so ordinary it's printed on a thousand shelves. A British brand wrote *bits*, a German label said *Fruchtfleisch* (literally "fruit flesh", which is its own small delight), and the machine, asked to get from one to the other, reached deep into its probabilities and produced **pump.**

## Where the pump came from

Here is the thing I find genuinely funny, and then genuinely useful.

The machine did not fail because it is stupid. It failed because it was confident and **contextless**. It saw a short German phrase, detached from any knowledge of what an `innocent` bottle is, what a smoothie aisle looks like, or the fact that juice does not come with hydraulic equipment. With all of that stripped away, "fruit flesh / pulp / bits" is just a cluster of tokens, and one of the nearby probable English words — for a machine that has read a great many plumbing catalogues as well as a great many juice labels — is *pump*.

A German shopper has never once been confused about this. Neither has a British one standing in front of the same fridge. They have *context* — but more than context, they have a **culture** the machine was never given. They know what an `innocent` bottle is. They know the smoothie aisle has bits and the hardware aisle has pumps, and that these are different shops. They disambiguate before they have finished reading, because the disambiguation was never really in the words. It was in the world the words came from.

## A machine is grounded in a culture — just not yours

This is the real point, and it is bigger than one bottle.

A model is not grounded in nothing. It is grounded in a culture — the one it was trained on. And as I have argued in [The Crawl Still Speaks English](the-crawl-still-speaks-english), that culture is overwhelmingly the English-language web: the Common Crawl that sits under nearly every model is still around 41% English, with no other language above 6%, and that number has barely moved in two years. The model does not approach German neutrally. It approaches German *through English*, translates the prompt into an English frame to reason about it, and translates back. Its defaults — its sense of what a word "probably" means — are English defaults.

So when it meets *Orange mit Fruchtfleisch*, it is not consulting a German juice aisle it has lived in. It is consulting a vast, mostly-English statistical memory in which the bigram "with pulp" is rarer than you'd hope and the path of least resistance wanders off towards plumbing. The guessing runs out exactly where the German-and-British grounding would have started. It is the same failure as the model that happily knew *Wiener Schnitzel* — because the English web is full of it — but stalled on *Erdäpfelsalat* until someone explained it was just potato salad under an Austrian name. Pump is Erdäpfelsalat with a sense of humour.

And it gets sharper than juice. In Vietnamese, as I wrote in [Strip the Marks, Lose the Word](strip-the-marks-lose-the-word), the cultural grounding is carried in the diacritics themselves: *ma*, *má*, *mà*, *mả*, *mã*, *mạ* are six different words — ghost, mother, but, tomb, horse, rice seedling. Strip the marks and a system built around English assumptions doesn't give you a slightly degraded word; it hands the model a hole and lets it fill the hole with whatever its English-grounded culture finds most probable. Same machine, same reflex. The juice bottle is the joke; Vietnamese is the cost.

## The fix is to hand the machine the culture, not hope it has it

The fix is not "use a better model", though better models help. Better models are still grounded in the same crawl. The fix is to **stop shipping context-free text and hoping the machine shares your world.** Declare what the thing is. State the language and the locale. Mark up what a word refers to — that *Fruchtfleisch* here is the thing a British shelf calls "bits", that this is a juice and not a hardware store. Keep the fully-marked form as the record. You are not decorating the text; you are supplying the grounding the model didn't get from its training, in a place it reads first.

That is the whole of Machine Experience in one sentence: the machine is going to read in its own culture whatever you give it, so give it the meaning explicitly rather than leaving it to guess. The brands — and the languages — that do this are the ones whose words still mean something after a phone camera, a crawler, or a translation layer has had its way with them.

Until then, I will be in the kitchen, enjoying my Orange With Pump. It tastes good. It does good. It does not, as far as I can tell, pump anything.

*Tastes good, does good. — with apologies to innocent, who got it right in two languages before the machine got it wrong in a third.*

---

**Related reading**

- [The Crawl Still Speaks English](the-crawl-still-speaks-english) — why the model guesses in English, and what a non-English publisher can do about it
- [Strip the Marks, Lose the Word](strip-the-marks-lose-the-word) — diacritics and tone marks as data, where the same reflex deletes whole words
- [Governance for AI that Acts](2026-05-23-governance-when-ai-acts) — what happens when the machines doing the guessing also act on it
