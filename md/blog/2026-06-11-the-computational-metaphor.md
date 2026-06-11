---
title: "The Word Does the Lying: The Computational Metaphor and the Machines That Don't Think"
description: "Vendors don't oversell AI with false claims you can fact-check. They do it with verbs. 'Understands', 'thinks', 'knows', 'reasons' — each one borrows a human capability the machine does not have and hands it to a statistical model for free. A 2021 paper by Baria and Cross gave the trick its proper name — the Computational Metaphor — and showed it cuts both ways: it inflates the machine and deflates the human. This is why MX insists on the smallest honest word: machine."
author: Tom Cranstoun
created: 2026-06-11
modified: 2026-06-11
version: "0.1"

mx:
  status: draft
  contentType: blog-post
  audience: [business, humans, machines]
  targetReaders: "Executives and product teams buying or deploying AI, plus the writers and engineers who describe these systems to customers and to each other. Anyone who has nodded along to the sentence 'the AI understands your customers'."
  tags: [anthropomorphism, computational-metaphor, form-and-meaning, system-prompts, rlhf, guardrails, ai-literacy, language, trust, mx, machine-experience]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/blog/2026-06-11-the-computational-metaphor.md
  purpose: "Argue that anthropomorphic language about AI is not loose talk but a persuasion mechanism that manufactures unearned trust, ground the argument in Baria and Cross (2021) on the Computational Metaphor, and show that MX's insistence on the word 'machine' is the corrective."
  stability: draft
  runbook: "Published article. Read as narrative; the argument is the content."
  x-mx-contextProvides: ["The Word Does the Lying: The Computational Metaphor and the Machines That Don't Think"]
---

# The Word Does the Lying: The Computational Metaphor and the Machines That Don't Think

You can fact-check a claim. You cannot fact-check a verb.

When a vendor tells you their system has a 99% accuracy rate, you can ask on what test, against what baseline, measured how. The claim has edges. You can push on it. But when the same vendor tells you their system *understands* your customers, there is nothing to push on. "Understands" is not a measurement. It is a word borrowed from human beings and quietly loaned to a piece of software, and the loan is never called in. The persuasion happens in the verb, beneath the level where you check things.

This is the part of AI marketing that does the real work, and almost nobody argues with it, because to argue with it you have to argue with ordinary English. *The model knows about your industry. It thinks step by step. It reasons about the problem. It understands context.* Every one of those sentences attributes a human interior to a system that has none. And every one of them is doing a job: building your trust in the machine to a level the machine has not earned.

## The trick has a name

I have argued for two years that we should call these things *machines* — not "AI assistants," not "intelligent agents," not "copilots." Readers sometimes take this for pedantry, or for a grumpy refusal to enjoy the future. It is neither. It turns out the thing I was describing has a proper name in the research literature, and a sharper account than mine.

In 2021, the neuroscientists Alexis Baria and Keith Cross published a paper with a title that contains its own argument: ["The brain is a computer is a brain"](https://arxiv.org/abs/2107.14042). Their subject is the *Computational Metaphor* — the deep, now-reflexive habit of describing the brain as a computer and the computer as a brain. The metaphor is old and, inside a laboratory, often useful. Their concern is what it does once it leaves the lab.

Their central finding is the sentence I keep returning to. The Computational Metaphor, they write, tends to "afford the human mind less complexity than is owed, and the computer more wisdom than is due." And they name the harm directly: unchecked use of the metaphor "contributes to […] harms by falsely attributing human-like capabilities to AI-labelled technologies, and aiding in a disregard [for the] complexity of social and human experiences."

Read that twice, because the second half is the half everyone misses.

## It cuts both ways

The obvious damage is that the metaphor inflates the machine. Call a statistical text generator an "intelligence" often enough and people start trusting it the way they would trust a knowledgeable colleague — extending it credit on questions it cannot actually answer, accepting its confident wrong answers because confident-and-correct is what the human word "knows" implies. Baria and Cross note that because our culture quietly equates intelligence with rationality, and rationality with trustworthiness, an "AI" verdict can end up weighted *above* a human one. The label does the promoting.

But look again at the phrase "afford the human mind less complexity than is owed." The metaphor does not only inflate the machine. It deflates the human. This is the move I had not seen clearly until I read their paper. Every time a vendor says its system "understands" your customer, it is making a second, silent claim: that understanding a customer was never very demanding in the first place — that a weighted average of co-occurrence patterns is a fair substitute for a person reading with intent, history, and stake. The sentence sells the software by quietly downgrading the human it replaces. You are not just told the machine is more than it is. You are told you are less than you are.

That is why "it's just a figure of speech" does not get the metaphor off the hook. Figures of speech shape what we think is possible, what we think is hard, and what we think is safe to hand over. A metaphor that makes the machine sound wise and the human sound mechanical is not decoration. It is an argument, smuggled in as vocabulary.

## What the machine actually does

It helps to say the un-magical version once, plainly, because the plain version is the one the verbs are hiding.

A large language model predicts the next token. Given the text so far, it produces a probability distribution over what comes next, samples from it, and repeats. The fluency is real and the achievement is real — generating coherent, useful text across almost any domain by this method is genuinely remarkable, and I am not here to sneer at it. But there is no comprehension step in the loop. When the model "hallucinates," it is not malfunctioning; it is doing exactly what it always does — emitting the statistically plausible continuation — on an occasion where plausible and true happen to diverge. The same mechanism that writes a correct answer writes a confident wrong one, and from the inside they are the same operation. That is why a model can produce a fluent, step-by-step mathematical "explanation" and still land on a wrong number: the prose is generated, not derived.

None of that fits inside the word "thinks." So the word "thinks" has to go.

## Saying the right thing is not the same as knowing what it means

Here is the part that catches people, because the output looks so much like knowledge. Type "The first person to walk on the Moon was" into a model and it completes the line with "Neil Armstrong." Obviously it knows who walked on the Moon — what else could that be?

But look at what was actually asked. The model was not consulted as a witness to the Apollo programme. It was handed a string of words and asked, in effect, a question about its own training data: of all the continuations that have ever followed this sequence in the text I was trained on, which is the most probable? "Neil Armstrong" wins that contest because the human record is full of true sentences that say so. The model lands on the right word through the statistics of how words co-occur — never through any contact with the Moon, the man, or the event. Train it on a corpus that insists someone else got there first, and it will tell you that instead, with exactly the same confidence.

This is an old distinction in linguistics, sharpened for the language-model age by Emily Bender and Alexander Koller: the difference between *form* — the observable shape of language, the words and how they pattern — and *meaning* — what those words are *about*, how they hook onto the world and onto what a speaker intends. Their argument is that a system trained only on form has, in principle, no way to get to meaning ([Bender and Koller, 2020](https://aclanthology.org/2020.acl-main.463/)). It can become superb at producing the right form without ever possessing the meaning underneath it. Knowing which words to say and knowing what they mean are simply not the same accomplishment, however indistinguishable they look from the outside.

That sounds like a seminar point until you are the one publishing. If the machine works the surface of language and not the meaning beneath it, then it cannot recover the meaning you didn't write down. The context you implied with a photograph, the relationship you encoded in a layout, the qualifier you left unsaid because any human would infer it — none of that is *form*, so none of it reliably survives. Which is the whole practical case for Machine Experience: the only way to make sure a fact about you reaches the answer is to put it there *as form* — stated, structured, marked up — because form is the only thing the machine ever actually holds.

## The impression of thinking is manufactured, and that's the point

It would be lazy to pin all of this on marketing copy. A great deal of the impression of a mind is engineered, deliberately and well, by people who are very good at their jobs. It is worth seeing the machinery, because each piece is aimed at a different instinct we use to detect another mind.

A **system prompt** — the instructions you never see — hands the model a name, a persona, and a tone, so the voice shows up already sounding like someone. **Reinforcement from human feedback** tunes the raw model against piles of human preference judgements until its answers feel considerate, suitably hedged, agreeable — which is to say, like a person being helpful. **Guardrails** layer on refusals and apologies that read as conscience. An **agentic loop** lets it call a tool, read the result, and try again, so a string of separate predictions looks like someone working a problem through. And the **interface** seals it: a "thinking…" shimmer, words streamed as if typed by a mind in real time, and touches as literal as scanning your prompt for the word "ultrathink" and, on seeing it, quietly handing the model a bigger budget to ramble internally before it answers.

Here is the thing worth holding onto: none of that adds understanding. Feedback tuning changes which words are likely, not whether the model knows what they are about. A guardrail stops an output; it does not comprehend it. A loop runs the same formal guess more times. "Ultrathink" buys more computation, not more thought. Every layer manages and presents the form; not one of them touches the meaning underneath. What you get is a more reliable, better-mannered, more theatrical next-word predictor — and it persuades in exact proportion to how skilfully it was assembled. Which is the whole reason to keep your head: the better the impression of thinking gets, the more it is worth remembering that it is an impression, built on purpose, over a machine that is still only guessing what comes next.

## Baria and Cross's prescription is just MX's house style

The most useful thing in their paper, for anyone who actually ships these systems, is that they do not stop at diagnosis. They call for a "new lexicon" for AI-labelled technologies — language that resists the anthropomorphising pull of the current discourse instead of surrendering to it.

That new lexicon is not exotic. It is the word *machine*.

Calling these systems machines is the smallest honest correction available. It does not deny their power — machines can be enormously powerful — and it does not require you to understand transformers or attention heads. It simply declines the unearned promotion. A machine processes. It does not understand. A machine produces output. It does not know. A machine is a tool you are responsible for, not a colleague you can defer to. Swap the verbs back to honest ones and the inflated trust deflates to the right level on its own, with no lecture required.

This is not a rhetorical tic in MX. It is load-bearing. Machine Experience starts from the premise that the systems reading your website and your documents are machines with specific, knowable limitations — they don't reliably execute your JavaScript, they don't infer the context you left implicit, they don't understand the meaning you encoded only in visual layout. *Because* they are machines and not minds, you have to do the work the metaphor pretends they will do for you: state the context explicitly, mark up the structure semantically, attach the provenance, leave nothing to inference. Every honest verb is a piece of engineering guidance. "The machine understands your page" tells you to relax. "The machine pattern-matches whatever structure you gave it" tells you to go and give it better structure.

## Why this lands now

The stakes used to be mostly reputational — overhyped demos, disappointed buyers. They are now legal and operational. When an answer engine composes a confident, false statement about a named company, somebody owns those words; a German court [said as much this month](https://arstechnica.com/tech-policy/2026/06/nobody-needs-ai-to-search-the-internet-court-says-in-ruling-against-google/), and "the AI understood it that way" is not a defence anyone gets to make. When a hospital, a council, or a bank wires a machine into a decision because the procurement deck said it "reasons about" cases, the gap between the verb and the mechanism becomes somebody's bad afternoon. The Computational Metaphor was always a quiet tax on clear thinking. As these systems move from chat windows into the load-bearing parts of institutions, the tax comes due.

So here is the discipline, and it is small enough to adopt today. Watch the verbs — in the vendor deck, in your own copy, in the sentence you are about to say in the meeting. When you catch *understands, knows, thinks, reasons, learns, wants, sees*, stop and ask whether the machine is doing the human thing the word names, or whether the word is doing the machine's marketing. Then pick the verb that survives the question. *Processes. Generates. Matches. Predicts. Retrieves.* They are duller words. They are also true, and true is what you need when the output is about to do something that matters.

Baria and Cross gave the trap a name. The way out of it is a vocabulary you already own. Use the smaller, honest word. The machine will work exactly as well — you will simply have stopped lying to yourself about why.

---

## Sources

- Alexis T. Baria and Keith Cross (2021). *The brain is a computer is a brain: neuroscience's internal debate and the social significance of the Computational Metaphor.* arXiv:2107.14042. <https://arxiv.org/abs/2107.14042>
- Emily M. Bender and Alexander Koller (2020). *Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data.* Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, 5185–5198. <https://aclanthology.org/2020.acl-main.463/>

*This post is commentary. The argument it makes about language is the one it tries to follow: every claim about what a machine does is meant to survive being read literally.*
