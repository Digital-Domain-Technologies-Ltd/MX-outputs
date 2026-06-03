---
title: Read Is Not the Same as Trusted
description: Common Crawl's AI Visibility Audit confirms that reachability decides whether a site enters LLM training. It does not address whether the ingested content can prove where it came from. That is the MX layer.
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
    - provenance
    - mx
    - common-crawl
    - ai-visibility
    - the-gathering
  blogFilename: read-is-not-the-same-as-trusted
  blogUrl: https://mx.allabout.network/blog/read-is-not-the-same-as-trusted.html
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/blog/read-is-not-the-same-as-trusted.html
  servedAt: https://mx.allabout.network/blog/read-is-not-the-same-as-trusted.html
  runbook: Blog post on mx-site. The HTML is the canonical source for this YAML frontmatter.
---

# Read Is Not the Same as Trusted

On 1 June, Common Crawl published [The AI Visibility Audit](https://commoncrawl.org/blog/introducing-the-ai-visibility-audit), a field guide by Stephen Burns for SEOs and GEOs. Its argument is one we have been making here for months, now stated by the body whose archive sits underneath most LLM training data. A page can rank in Google and still be missing from ChatGPT, Gemini, Claude and Perplexity, because reachability by the crawlers that feed training sits upstream of every on-page tactic. Burns puts it plainly: the old world was index and rank, the new world is train and retrieve. If you are not in the crawl, you are not in the model.

This is correct, and it is welcome. An independent data body saying it carries more weight than any vendor blog, ours included.

It is also the floor, not the ceiling.

## What the audit covers

The guide walks through how CCBot crawls and publishes the archive, how a site's position in the Common Crawl web graph sets its crawl priority, why content-delivery and firewall defaults now quietly block training crawlers, and why the crawl still leans towards English, with English at roughly 41 percent of the most recent crawl. The output is a repeatable check that ends in a one-page scorecard.

We have written the practical half of one of those checks already. [Why llms.txt Probably Isn't Working](https://mx.allabout.network/blog/llms-txt-guide.html) shows why most `llms.txt` files never reach Common Crawl at all, served as plain text, absent from the sitemap, and gives the worker code that fixes it. The reachability problem is real, and most of it is configuration that teams never set.

The infrastructure failures the audit names, firewall defaults, crawl priority, language bias, are not MX's job, and MX does not claim them. They sit upstream of where MX begins.

## Where reachability stops

Here is the part the scorecard does not measure. A site can pass every check, sit comfortably in the crawl, and still be anonymous inside the model. The text is ingested. It is paraphrased into an answer. And nothing travels with it that lets the machine say who wrote it, when it was written, whether it has been changed, or whether it can be relied on.

Visibility answers whether the machine can reach you. It does not answer whether the machine can trust what it found. Those are different questions with different fixes. The first is discovery. The second is provenance.

Being in the model without provenance is the position most publishers are now in. Their work feeds answers they are never credited for, with no checkable signal of origin attached to it. You can be as visible as the audit can make you and still have no standing in the result.

## The layer above the floor

MX is that second layer. It does not replace the visibility work, it assumes it. Get into the crawl first; the audit is a sound way to check that you have. Then carry signals the machine can read once it arrives: declared authorship, declared dates, declared provenance, attested rather than guessed. [The provenance gap](https://mx.allabout.network/blog/the-provenance-gap.html) sets out why structured-data tactics describe a page but never validate it, and why the validation layer has to sit underneath. [Who answers when the machine decides?](https://mx.allabout.network/blog/who-answers-when-the-machine-decides.html) makes the case for declared, attested signals over judgements a machine makes about you in private.

The crawl decides whether you are read. It does not decide whether you are trusted. Run the audit, get into the model, then make sure that what the model ingested can prove where it came from.

---

*Tom Cranstoun is the founder of the Machine Experience (MX) community and author of the MX book series. He consults on MX strategy through Digital Domain Technologies Ltd.*
