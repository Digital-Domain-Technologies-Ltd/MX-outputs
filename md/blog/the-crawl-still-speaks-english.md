---
title: The Crawl Still Speaks English
description: Most AI models learn the web through one archive, and that archive is overwhelmingly English. Two years on, the share has barely moved. You cannot fix the model from outside, but you can stop it guessing about your non-English content.
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
    - language
    - provenance
    - mx
    - common-crawl
    - multilingual
    - the-gathering
  blogFilename: the-crawl-still-speaks-english
  blogUrl: https://mx.allabout.network/blog/the-crawl-still-speaks-english.html
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/blog/the-crawl-still-speaks-english.html
  servedAt: https://mx.allabout.network/blog/the-crawl-still-speaks-english.html
  runbook: Blog post on mx-site. The HTML is the canonical source for this YAML frontmatter.
---

# The Crawl Still Speaks English

Most large language models learn the web second-hand, through one archive. It is called Common Crawl: a free, public crawl of the internet that sits underneath the training data of nearly every model you have used. What is in the crawl shapes what a model knows. What is missing from it, a model mostly never learns.

That archive is heavily English. When I first wrote about this, roughly 44 percent of the Common Crawl was English, and no other single language passed 6 percent. Common Crawl's [AI Visibility Audit](https://commoncrawl.org/blog/introducing-the-ai-visibility-audit), published this month, puts the latest figure at around 41 percent English. Two years, and the share has barely moved. This is not a passing imbalance that more data will quietly correct. It is structural.

I work on a practice called Machine Experience, or MX. The short version: it is the work of making anything you publish - a page, a PDF, an image, a product listing - readable by the machines that now consume it, so no machine has to guess what you meant. Most of this post is about one place that guessing does real harm, which is language.

## The part you cannot fix

A few years of argument lie behind the figure above. AI systems are not simply better at English; they are English-centric by construction. Training data, the reinforcement learning that fine-tunes a model, the human feedback that shapes its manners, and even the prompts that unlock its harder thinking all run in English first. The longer version is in [English Dominance in AI Systems](https://allabout.network/blogs/ddt/ai/english-dominance-in-ai-systems-leaves-other-languages-behind), and the same bias one layer down, in how a model breaks a German word into pieces before it can process it at all, is in [The Tokenization Trap](https://allabout.network/blogs/ddt/ai/the-tokenization-trap-how-ai-actually-processes-german).

What this means in practice: a model tends to translate a non-English prompt into an English frame before it reasons, then translate back. It defaults to English social assumptions, the flat and slightly stilted register a native speaker spots at once. None of that is yours to fix. It sits inside the model, and it will only change when the people building models decide to think multilingually from the start rather than bolt it on.

So the useful question is not how to fix the model. It is what a non-English publisher can do, today, to be read and credited correctly by a model that will read in English whatever you give it.

## The part you can

The answer is the layer MX works on: stop making the model guess.

An English-centric model fills gaps with English assumptions. The way to fight that is to leave fewer gaps. "Declaring" something, in this sense, means stating it plainly in a place a machine reads, rather than leaving the machine to infer it from the prose. When your content declares its own language and locale, its own author and date, a machine has less to assume and fewer English defaults to fall back on. A clean record in German, with the locale stated and the source noted, is easier for a machine to read correctly than the same facts left as prose for it to interpret through an English lens.

Here is the failure in miniature. A model knew Wiener Schnitzel, because the English-language web is full of it, but stalled on Erdäpfelsalat until a colleague explained it was potato salad by an Austrian name. The model's guessing ran out exactly where the English sources did. A declared term - the regional word, its standard-language equivalent, and where the usage comes from - does not ask the model to have seen it before. It tells it.

There is a sharper version of the same loss in the marks a language carries. English readers drop accents out of habit, and English-centric systems drop them in the plumbing, which in a language like Vietnamese does not blur a word but replaces it with several. Worse, there is no agreed rule to lean on: Unicode standardises how an accented character is *encoded* and keeps the mark, but the lossy step that *strips* marks was drafted as a standard and withdrawn in 2008, shelved for want of an owner and because the right fold turns out to differ by language. So every system strips its own way. I have written that up on its own in [Strip the Marks, Lose the Word](https://mx.allabout.network/blog/strip-the-marks-lose-the-word.html); the short point here is that declaring and preserving the marked form is part of not making the model guess.

## Provenance survives translation

There is a second cost, and it is the one most publishers miss. When an English-first model paraphrases your German or Polish or Turkish page into an English answer, the credit and the origin go missing in the same step. Your work is reworded into a sentence with no name on it.

Provenance is the fix. By provenance I mean a checkable record of who made something, when, and whether it has changed since - carried with the content rather than asserted on a separate "about" page. When that record is *attested*, it holds a signature a reader's software can check, so origin is something you can confirm rather than take on trust. A model can still translate you. It cannot quietly turn your work into an unsourced English line if the source travels with a claim of where it came from. For a non-English publisher that is not a nicety. It is the difference between feeding the answer and vanishing into it. The same argument, in English and for any language, is in [Read Is Not the Same as Trusted](https://mx.allabout.network/blog/read-is-not-the-same-as-trusted.html).

## An honest limit

MX is a lever here, not a cure. Its field names are a small English-keyed vocabulary, in the way HTTP headers and HTML attributes have always been English. The keys are English; the values, the content, and the provenance are whatever language you publish in, kept as declared rather than guessed. MX does not make an English-first model think in Turkish. It makes your Turkish legible to it, and keeps your name on it.

The model-makers' job is the one those earlier posts named: build multilingually from the ground up. That is still owed, and still mostly unpaid. The publisher's job is smaller and available now - to stop being guessed about. While the crawl still speaks English, that is the lever you hold.

There is a third job, and it is shared. The rules that decide whether a marked word survives a pipeline, or whether a declaration of language and source is honoured, have to be written down and owned by someone. The withdrawn folding standard shows how easily that work stalls. Standards are hard to make, which is the reason to attempt them in the open rather than leave each system to improvise. That is what [The Gathering](https://tg.community) is for: community-led, never vendor-driven, because a rule that decides whose words survive cannot belong to whoever profits most from the answer.

## Related reading

- [What Is Machine Experience?](https://mx.allabout.network/blog/what-is-machine-experience.html) - the discipline behind this post, from the start
- [Read Is Not the Same as Trusted](https://mx.allabout.network/blog/read-is-not-the-same-as-trusted.html) - why being in the crawl is not the same as being credited
- [Strip the Marks, Lose the Word](https://mx.allabout.network/blog/strip-the-marks-lose-the-word.html) - diacritics and tone marks as data, and the folding standard that was never agreed
- [Why llms.txt Probably Isn't Working](https://mx.allabout.network/blog/llms-txt-guide.html) - getting into the crawl in the first place
- [English Dominance in AI Systems](https://allabout.network/blogs/ddt/ai/english-dominance-in-ai-systems-leaves-other-languages-behind) - the full argument the figures here build on
- [The Tokenization Trap](https://allabout.network/blogs/ddt/ai/the-tokenization-trap-how-ai-actually-processes-german) - the same bias inside the model
- [The Gathering](https://tg.community) - the open standards body where MX rules are written and owned

---

*Tom Cranstoun is the founder of the Machine Experience (MX) community and author of the MX book series. He consults on MX strategy through Digital Domain Technologies Ltd.*
