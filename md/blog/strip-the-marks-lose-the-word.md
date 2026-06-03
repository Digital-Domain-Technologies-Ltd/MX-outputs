---
title: Strip the Marks, Lose the Word
description: English speakers drop accents out of habit, and in English it rarely matters. In Vietnamese it deletes the word. When marks are stripped before a machine reads the text, no translation can recover them, and any provenance system that signs the wrong bytes breaks on exactly the languages that need it most.
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
    - unicode
    - diacritics
    - the-gathering
  blogFilename: strip-the-marks-lose-the-word
  blogUrl: https://mx.allabout.network/blog/strip-the-marks-lose-the-word.html
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/blog/strip-the-marks-lose-the-word.html
  servedAt: https://mx.allabout.network/blog/strip-the-marks-lose-the-word.html
  runbook: Blog post on mx-site. The HTML is the canonical source for this YAML frontmatter.
---

# Strip the Marks, Lose the Word

English speakers drop accents without thinking. We write cafe for café, naive for naïve, Zurich for Zürich. In English this is almost always harmless, because English does not carry meaning in its marks. The word survives the loss.

The trouble starts when the habit travels to a language where the marks are the word.

Vietnamese is the clearest case. It is written in the Latin alphabet, which lulls an English reader into treating it like English with a few extra dots. It is not. Vietnamese carries its tones in those marks, and the tone is part of the meaning. Take the syllable *ma*. Written without its mark it is not one word missing its decoration; it is a hole where several different words used to be:

- *ma* - ghost
- *má* - mother
- *mà* - but
- *mả* - tomb
- *mã* - horse, or code
- *mạ* - rice seedling

Strip the marks and you do not get a slightly degraded *ma*. You get an instruction to guess between a ghost, a mother, and a grave. Vietnamese is the language that needs the most help here precisely because it packs the most meaning into the marks. Removing them is not lossy compression. It is deletion.

## Where the stripping happens

Some of it is people. Someone types without a Vietnamese keyboard, or copies text into a field that will not take the marks, and sends *ma* meaning any of those words.

More of it is the plumbing, and that is the part publishers control. URL slugs flatten to ASCII. Filenames drop the marks. Older databases and search indexes normalise everything down to the nearest unmarked letter. Email headers, exports, log lines: each is a place where a machine, built around English assumptions, quietly throws the marks away because nothing in its design told it they were load-bearing.

By the time a model reads the stripped text, the information is already gone. The model does what it always does with a gap: it fills it with the most frequent reading it has seen, which is rarely the one you meant. This is the same English-first guessing I wrote about in [The Crawl Still Speaks English](https://mx.allabout.network/blog/the-crawl-still-speaks-english.html), but sharper, because here the guess is between unrelated words rather than between registers of the same one.

## Translation cannot put them back

The reason this matters for translation is that the loss happens upstream of the translator, human or machine. Once *má* and *mả* are both sitting on the page as *ma*, no amount of context reliably tells them apart. Tone in Vietnamese is not emphasis a reader can infer from the sentence, the way English uses pitch for feeling. It is lexical. A translator handed unmarked Vietnamese is not reading hard text; they are reading text that no longer says what it said.

## The standard that was withdrawn

It is worth being exact about what is standardised and what is not, because the gap is the whole problem.

How a marked character is *encoded* is settled. Unicode normalisation, the NFC and NFD forms defined in [UAX #15](https://www.unicode.org/reports/tr15/), reconciles the two ways the same character can be stored - precomposed as a single code point, or as a base letter with combining marks attached - and it keeps every mark. Normalising in this sense never removes a diacritic. It only makes two encodings of the identical letter compare as equal.

What is not standardised is the opposite move: *folding*, the lossy step that strips the marks so an unmarked form matches a marked one. Unicode drafted that too, as [UTR #30, "Character Foldings"](https://www.unicode.org/reports/tr30/), and then withdrew it. The draft was approved for eventual publication in 2004, reworked, and rescinded in 2008; no version was ever published. The draft itself conceded the reason it is hard: folding is language-specific. Greek letters should fold for ordinary Greek text but must not fold in mathematics, where the fold would merge distinct symbols. Vietnamese sits at the far end of that scale. Its marks must never fold, because folding does not blur the word, it deletes it.

So there is no agreed, language-aware rule for handling these marks. Each search engine, database, and library strips them its own way, or not at all, and a string that means one thing on your page can mean something else by the time it has passed through three systems that each "normalised" it differently. The word *normalise* is doing two jobs in this industry, one that preserves meaning and one that discards it, and only the first has a standard behind it.

Why the second one stalled is worth knowing, because it is the ordinary shape of standards work rather than a freak. The draft sat unfinished for more than four years, and when no one would take ownership of completing it and its data tables, the committee withdrew it in 2008, leaving the door open to revive it. The harder truth underneath the procedure is that folding resists a single rule. The right fold differs by language: a Swedish fold is not an English one, and some contexts, Greek in mathematics among them, must not fold at all. Awkward corners such as folding Han radicals were thorny enough to stall the rest. So the report was shelved, and the gap it would have closed is still open.

## The MX move

Machine Experience is the practice of making what you publish readable by the machines that consume it, so no machine has to guess. Applied here it is simple to state and easy to get wrong: the fully-marked form is the record. Not the slug, not the ASCII fallback, not whatever a downstream system found convenient. The marked text is the source of truth, declared and preserved as published, in a place machines read first.

That means treating the marks as data with the same seriousness you would give a price or a date. You would not let a pipeline round a price to the nearest pound because the storage was simpler. The diacritic is in the same category.

## A point for anyone signing content

There is a trap waiting for provenance systems, and it lands hardest on the languages that most need provenance. Attestation works by signing a canonical sequence of bytes, so a reader can later check the content has not changed. But a marked Vietnamese character can be stored two ways that look identical on screen: as one precomposed code point, or as a base letter with the marks stacked on as separate combining characters. Same word, same appearance, different bytes - and therefore a different signature.

If your canonicalisation does not include an explicit Unicode normalisation step ([UAX #15](https://www.unicode.org/reports/tr15/)), attestation will report a marked language as tampered with when nothing has changed, or pass two forms it should have reconciled. The normalisation has to reconcile the two encodings while keeping every mark intact. Strip the marks to make the bytes tidy and you have signed the wrong text - confidently, and for exactly the readers who could least afford it. Because folding was never standardised, no specification will make this decision for you. Preserving the marked form is a choice you have to declare and hold to. The honest version of "record in a data file" includes getting this right.

## Hard is the argument for doing it

A standard failing for want of an owner is an argument for ownership, not for living without the rule. The marks have no agreed handling because nobody finished the work, and the cost of not finishing it lands on the languages that carry the most meaning in their marks. That cost does not go away because the problem is hard. It compounds.

The answer does not need to be as broad as the report Unicode set down and dropped. MX needs only a narrow rule it can own and keep: the fully-marked form is the record, and canonicalisation preserves the marks rather than folding them away. That is the kind of small, specific, owned commitment a standards body exists to hold, and it is the work [The Gathering](https://tg.community) is for. Standards are difficult to make, and the withdrawn draft is proof of how easily a sensible one slips away. The conclusion is not to stop trying. It is to do the work in the open, where it can be reviewed, owned, and held to.

And it matters who holds it. A rule that decides whose content survives a pipeline and whose is flattened cannot be set by a single vendor, because a vendor's rule serves the vendor first. It has to be led by the people who live with the consequences - the publishers, the speakers of the languages at stake, the developers building the tools - and kept open enough that no one has to take its fairness on trust. The Gathering is built that way on purpose: community-led, never vendor-driven.

## Keep the marks

MX rests on building with what humans already know. For a Vietnamese reader, the marks are not an accent feature bolted onto writing; they are the writing. Preserving them is not politeness towards another language. It is the difference between a record that means something and a record that means six things at once. The model is going to read in English whatever you give it. Give it the word you actually wrote.

## Related reading

- [The Crawl Still Speaks English](https://mx.allabout.network/blog/the-crawl-still-speaks-english.html) - why the model guesses, and what a non-English publisher can do about it
- [The Tokenization Trap](https://allabout.network/blogs/ddt/ai/the-tokenization-trap-how-ai-actually-processes-german) - how a model breaks a word into pieces before it can read it
- [Provenance You Can See](https://mx.allabout.network/blog/provenance-you-can-see.html) - what it means for content to carry checkable evidence of where it came from
- [What Is Machine Experience?](https://mx.allabout.network/blog/what-is-machine-experience.html) - the discipline behind this post
- [The Gathering](https://tg.community) - the open standards body where MX rules like this one are written and owned

---

*Tom Cranstoun is the founder of the Machine Experience (MX) community and author of the MX book series. He consults on MX strategy through Digital Domain Technologies Ltd.*
