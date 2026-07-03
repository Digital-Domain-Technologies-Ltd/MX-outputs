---
title: "AI Usage Declaration"
description: "How AI was used in the writing of the MX book series. Author's declaration on authorship, machine assistance, and the relationship between the two."
author: Tom Cranstoun
created: 2026-05-17
modified: 2026-05-17
version: "1.0"

type: info-doc
tags: [authorship, ai-usage, declaration, mx-books, provenance]
mx:
  status: active
  audience: [humans, machines]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/AI-USAGE.md
  generate:
    output: mx-site/AI-USAGE.pdf
  runbook: "Source of truth for the publisher's AI Usage Declaration per draft-cranstoun-mx-ai-usage-declaration v1.0. The JSON serialisation at mx-site/AI-USAGE.json, the HTML rendering at mx-site/AI-USAGE.html, and the PDF at mx-site/AI-USAGE.pdf are all derived from this file. Edit here, then regenerate the derivations."

  purpose: "How AI was used in the writing of the MX book series. Author's declaration on authorship, machine assistance, and the relationship between the two."
  stability: stable
  x-mx-contextProvides: ["AI Usage Declaration"]
aiUsageDeclaration:
  id: https://mx.allabout.network/AI-USAGE.json
  conformance:
    draft: draft-cranstoun-mx-ai-usage-declaration
    draftVersion: "1.0"
    level: 1
    levelName: Declared
  reviewSchedule: P1Y
  subject:
    type: collection
    name: MX book series
    identifier: https://mx.allabout.network/books/
  publisher:
    type: Organization
    name: CogNovaMX
    identity: https://mx.allabout.network/about/about.html#organization
  signingAuthor:
    type: Person
    name: Tom Cranstoun
    identity: https://mx.allabout.network/blog/profiles/about.tom.cranstoun.html#person
  aiUsage:
    - task: research
      scope: "Gathering sources, finding prior work, and assembling background before the author formed a view."
      extent: assisted
    - task: spelling-and-grammar
      scope: "Mechanical checks across long manuscripts that a writer reads past too easily in their own work."
      extent: assisted
    - task: consistency-checking
      scope: "Whether a term was used the same way throughout, whether a claim made early was contradicted later, whether the structure held across a long manuscript."
      extent: assisted
  aiBoundary:
    - "No machine decided what the books are about."
    - "No machine set the argument, chose the angle, or judged whether a passage was sound."
    - "No machine wrote the text that carries the ideas."
    - "When a machine produced a suggestion, the author treated it as a suggestion: accepted what was right, rejected what was wrong, and rewrote in the author's own words where the point was the author's to make."
    - "The decision to publish, and the responsibility for what is published, are the author's alone."
  narrativeUri: https://mx.allabout.network/AI-USAGE.html
  authority:
    type: self
    identity: https://mx.allabout.network/blog/profiles/about.tom.cranstoun.html#person
  disclosure:
    wicg: ai-assisted
    iptc: compositeWithTrainedAlgorithmicMedia
    derivedFrom: aiUsage+aiBoundary

---
# AI Usage Declaration

I wrote the MX book series. The argument, the structure, the judgements, and the words are mine. I am stating that plainly at the start because the rest of this page describes how machines helped, and I do not want that help mistaken for authorship.

I bring nearly fifty years in IT and content management to this work. Over that time I have worked with some of the world's largest brands, on systems at the scale where decisions have real consequences. The judgements in these books rest on that experience. A machine can check my spelling; it cannot supply the years.

Twenty-nine of those years were at the BBC. The BBC is the United Kingdom's public service broadcaster, founded in 1922 and operating under Royal Charter, with a remit to inform, educate, and entertain. Its news, sport, and entertainment output is carried at a scale that makes it the world's largest public service broadcaster. Latterly I worked on the Newsroom Website, the journalist-facing work that sat around ENPS: the Electronic News Production System, developed jointly by the BBC and The Associated Press, sold by AP with royalties returning to the BBC. The BBC ran on it for the best part of two decades, at one point the largest broadcast newsroom installation anywhere. ENPS handled the wires, scripts, running orders, and assets the news output rested on; the work I did was the surface the journalists worked through.

What I took from the BBC into this work was not the technology but the discipline that ran underneath it. A newsroom that publishes at that volume cannot afford to be wrong, and the working principles that hold it together (provenance, truth, consistency, accuracy) are not slogans; they are the conditions for staying on air. They are also, not by accident, four of the properties MX is built to make legible to a machine. The discipline did not arrive with the standard; it arrived with the years.

## What machines did

I used machines throughout the writing, as tools.

I used them to research: to gather sources, to find prior work, and to assemble background before I formed a view. I used them to check spelling and grammar: the mechanical layer that has to be right and that a writer reads past too easily in their own work. I used them to check consistency: whether a term was used the same way throughout, whether a claim made early was contradicted later, whether the structure held across a long manuscript.

This was real help and I will not pretend otherwise. A book is long enough that no single reading catches everything, and a machine that can check a defined property across the whole text is worth having.

## What machines did not do

No machine decided what the books are about. No machine set the argument, chose the angle, or judged whether a passage was sound. No machine wrote the text that carries the ideas.

When a machine produced a suggestion, I treated it as a suggestion. I accepted what was right, rejected what was wrong, and rewrote in my own words where the point was mine to make. The decision to publish, and the responsibility for what is published, are mine alone.

This is the same arrangement the books themselves describe: the person at the start and the end, the machine in the middle doing what it is good at. I would not write a book about that arrangement and then fail to keep it.

## Where this work began

The MX work began with an article. In February 2024 I attended CMS Kickoff 2024 and wrote up what I took from it for CMS Critic, under the title "The AI Tipping Point: A Consultant's Takeaways from CMS Kickoff 2024".

The conference gave me the raw material. Several speakers touched on AI reading content rather than creating it, and that was not what I had gone expecting to hear. But the conference did not hand me a discipline. What it gave me was a set of observations; what I did with them was mine.

My interpretation was this: if machines are becoming a real audience for what we publish, then the problem is not how to make machines write, but how to structure what we publish so that machines can read it honestly, without that structure costing the human reader anything. The conference did not say that. I concluded it, wrote it up, and have been working it out ever since. The book series is that working-out.

## The influence behind it

The idea owes something to Frederik Pohl. In his 1965 novel *The Age of the Pussyfoot*, Pohl gave his characters a device he called the joymaker: a networked assistant that fetches information, answers questions, and acts on the user's behalf. Pohl imagined it decades before the smartphone, and got it right.

What stayed with me is not the prediction but the relationship. The joymaker serves the person. It is an aid, not an author. It does not decide what its user wants; it helps the user get it. That is the relationship I want between people and machines, and it is the relationship MX is built to protect. A machine that reads our content well should extend what a person chose to say, not replace the choosing.

## In short

Machines helped me write these books, in the ways a careful writer would expect: research, checking, consistency. They did not write them. I directed and controlled the work; I authored it; the machines were aids. That distinction is the subject of the books, and it is also the truth of how they were made.

*Tom Cranstoun*
