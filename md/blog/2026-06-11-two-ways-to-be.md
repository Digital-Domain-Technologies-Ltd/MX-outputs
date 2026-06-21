---
title: "Two Ways to Be: What Spanish Knows That English Forgot"
description: "Spanish has two verbs for 'to be'. Ser is for what something is — its essence, its definition, the part that doesn't move. Estar is for how something is right now — its state, its condition, the part that does. English collapsed both into one word, 'is', and lost the distinction so completely that most English speakers have never noticed it was there to lose. That single missing fork in the grammar is also the one machines fall into hardest: they read a temporary state as a permanent fact and publish it as the truth about you."
author: Tom Cranstoun
created: 2026-06-11
modified: 2026-06-11
version: "0.1"

type: blog-post
tags: [language, ser-estar, copula, aspect, form-and-meaning, permanence, inference, linguistics, mx, machine-experience]
mx:
  status: draft
  audience: [business, humans, machines]
  targetReaders: "Readers of the language series who want the single sharpest example in full, plus anyone who has watched a machine state a passing fact about them as though it were a permanent one. Writers, brand owners, and the engineers responsible for how a system describes the world."
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/blog/2026-06-11-two-ways-to-be.md
  purpose: "Take the ser/estar distinction the previous post set aside and give it a full treatment: show that the permanent-versus-temporary fork English collapsed into a single 'is' is exactly the fork machines fall into hardest, reading a temporary state as a permanent fact, and that MX's job is to put the fork back as form."
  stability: draft
  runbook: "Published article. Read as narrative; the argument is the content."
  x-mx-contextProvides: ["Two Ways to Be: What Spanish Knows That English Forgot"]

---

# Two Ways to Be: What Spanish Knows That English Forgot

In the last post I mentioned Spanish in passing and then walked away from it, because it deserved its own. Here it is.

Spanish has two verbs for "to be," and which one you reach for is not a matter of style. It is a matter of *what kind of truth* you are claiming.

*Es aburrido* means he is boring — it is what he is, a property of the man, the kind of thing you would warn a friend about before the dinner party. *Está aburrido* means he is bored — right now, in this room, a state that will pass the moment something interesting happens. Same English word, "is," doing both jobs and telling you nothing about which it means. Two different Spanish verbs, **ser** and **estar**, and the choice between them is forced on every speaker every time they want to say that something *is* anything at all.

(A note before a Spanish teacher writes in, since the previous post promised to be exact: this is not a tense. Tense is about *when*. Ser and estar are two separate verbs for the present concept "to be," and the line between them is not really "permanent versus temporary" either — that is the schoolbook version, good enough to start with and wrong at the edges. The truer line is between an *inherent property* and a *current state*, between what a thing is and how a thing is. Water is *es* transparent, always. But the soup *está* cold, for now. Hold the schoolbook version in your head as a handle; just know the door it opens is bigger.)

## English had this once, and let it go

It is tempting to think English is simply the plain, sensible language and Spanish the one with the extra machinery. It is the other way round. The distinction ser and estar carry is a real and useful one, and English used to gesture at it — "he is *being* difficult" still strains toward the *estar* sense, the temporary one — but for the everyday job English collapsed both into a single "is" and then forgot there had ever been a fork in the road.

That is the quiet thing about a distinction your language doesn't make: you don't experience it as missing. You experience nothing at all. An English speaker reads "the report is wrong" and does not feel a gap where the choice should be, does not pause to wonder *wrong by nature or wrong this once*, because the grammar never offered the choice and so the mind never went looking. The fork was paved over so long ago that the absence is invisible. You cannot miss a turn you were never shown.

A Spanish speaker cannot avoid the choice. To say the report *is* wrong they must decide: *es* erróneo, wrong in its very design, rotten at the root — or *está* mal, wrong as it currently stands, fixable by Friday. One of those gets the author fired. The other gets the document edited. English says "the report is wrong" and lets the reader's context sort out which catastrophe is meant. Spanish makes you say which one you mean before the sentence will close.

## This is the fork machines fall into

Now bring the machine back in, because this is the exact place it stumbles, and it stumbles hard.

A machine reading the web is reading a sea of English "is." It has no grammatical signal telling it which "is" it is looking at — the *es* that states what you permanently are, or the *está* that reports how you happened to be on the day someone wrote the page. And its whole method, the method this series keeps coming back to, is to read the surface and emit the statistically likely continuation. So it does the natural, ruinous thing: it treats every "is" as an *es*. It reads the temporary state and publishes it as the permanent fact.

You have seen the results. A company *was* under investigation in 2019 — *estar*, a passing condition, long since closed — and the answer engine renders it as what the company *is*, full stop, an *es* about its character. A person *was* unwell, *was* between jobs, *was* wrong about something once, and the machine launders each fleeting *está* into a defining *es* and serves it back as the truth about them. The German court case from earlier this month is, underneath the law, a story about exactly this: a machine that took states and reported them as essences, and an institution that had to own the difference it had erased.

English handed the machine a language that doesn't mark the difference. The machine, reading only form, had no way to recover a difference the form doesn't carry. So it defaulted — and the default is the cruel one. A temporary truth promoted to a permanent one is how reputations get made out of bad afternoons.

## Put the fork back as form

Which leaves the same instruction this series always arrives at, now with a sharper edge.

When you write about yourself for a machine to read, you are writing in a language that will not mark, on your behalf, whether a thing is an *es* or an *está*. The grammar won't do it. So you have to. If a fact about you is a state — under review, in transition, true as of a date — *say so as form*: date it, scope it, mark it as current-not-permanent, give it the timestamp and the "as of" the English copula refuses to supply. If a fact is an essence — what you are, what you have always done, the part that doesn't move — say *that* as form too, plainly, so the machine has an *es* to find and is not left to manufacture one out of a passing *está* it misread.

Spanish speakers do this without thinking, a hundred times a day, because their grammar will not let the sentence close until they have. You are working in a grammar that will. That freedom is exactly the hole the machine falls through. The whole of Machine Experience, in this one case, is a single instruction English never makes you obey and Spanish never lets you dodge: *say which kind of "is" you mean.*

English forgot there were two ways to be. The machine inherited the forgetting. Your job is to remember it on the page, in the markup, in the form — because the machine will not, and the difference between *es* and *está* is, very often, the difference between the truth about you and a libel.

---

## Sources and further reading

- John B. Lipski (various) and the standard descriptive grammars of Spanish on the **ser** / **estar** distinction and its analysis as inherent property versus current state (the "individual-level" versus "stage-level" predicate distinction in the linguistics literature, after Greg Carlson, 1977).
- Regional Court of Munich, June 2026, on operator liability for AI Overviews — discussed at length in the companion post *When the Machine Owns Its Words*.
- Companion post: *The Languages That Won't Let You Leave It Implicit*, of which this is the long-form footnote.

*This post is commentary. Like the rest of the series, it tries to follow its own argument: it says which kind of claim each of its sentences is making, and it dates the ones that are states.*
