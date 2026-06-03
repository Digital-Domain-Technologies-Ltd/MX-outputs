---
title: Neither Code nor Content
description: The fifth post in the standards-governance series. FAIR governs code, MX governs content, and a trained model's weights are neither. The open-source world spent two years failing to settle what openness means for a model. The signature for a weights file is arriving from the code side; the readable, attested provenance record is the gap MX fits.
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
    - governance
    - open-standards
    - mx
    - model-weights
    - osaid
    - provenance
    - the-gathering
  blogFilename: governance/neither-code-nor-content
  blogUrl: https://mx.allabout.network/blog/governance/neither-code-nor-content.html
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/blog/governance/neither-code-nor-content.html
  servedAt: https://mx.allabout.network/blog/governance/neither-code-nor-content.html
  runbook: Blog post on mx-site, standards-governance series. The HTML is the canonical source for this YAML frontmatter.
---

# Neither Code nor Content

This is the fifth post in the standards-governance series. The last one brought FAIR into the picture - the federated, signed distribution layer built for CMS code, first for WordPress and now carried into TYPO3. FAIR is for code; MX is for content. Between them sits a third kind of artefact neither was built for, and one the open-source world has spent two years failing to classify: the weights of a trained model.

## Why weights are neither

A model's weights are not source code. You cannot open them and read what they do, cannot review them line by line, cannot fix a fault by editing them. They are a large block of numbers, produced by a process, that happen to behave like a program when run. Nor are they content: nobody reads a weights file the way they read an article or look at a photograph. They are a derived artefact, closer to a compiled binary than to either of the things our governance models already know how to handle.

The Open Source Initiative ran into this directly when it tried to define open-source AI. It concluded that training data could not simply be treated as the source of a model, [because it does not map one-to-one onto software source code](https://lwn.net/Articles/995159/). Weights broke the code model on contact. The category everyone reached for did not fit.

## The open-source world did not decide

What followed was not a settlement but a contested compromise. The Open Source AI Definition, published in late 2024, [requires detailed information about the training data but not the data itself](https://lwn.net/Articles/995159/) - a line that a number of prominent figures argued set the bar too low and risked undoing decades of work on the original Open Source Definition. A year later the Initiative was [still pushing back against the habit of calling a model "open source" when only its weights are published, and still describing data provenance as an unresolved, complex problem](https://opensource.org/blog/report-from-oss-eu-2025-and-ai_dev-whats-next-for-osaid). Meta and others released models under self-certified "open" licences carrying use restrictions, a practice critics named openwashing.

Strip away the noise and the position is plain. The community that defined openness for code could not agree what openness means for a model, and in particular could not agree what a model must disclose about where it came from. That is a vacuum where a settlement should be, and vacuums in provenance are what this series has been about.

## The integrity layer is arriving, from the code side

Part of the gap is being filled, and it is worth being exact about which part, because it is not MX's to claim.

A model can now be signed. [The OpenSSF Model Signing effort, built on Sigstore and explicitly modelled on code signing](https://security.googleblog.com/2025/04/taming-wild-west-of-ml-practical-model.html), attaches a signature to a weights file so a consumer can confirm it is the producer's and has not been altered since. NVIDIA has signed every model in its catalogue this way since early 2025. This is the right group doing the right job: integrity is a code-shaped problem, and the code world has the tools for it. A signature answers a precise question. Is this the blob the producer published, unchanged?

It does not answer the other one.

## What is left unclaimed

A signature tells you the bytes are authentic. It does not tell you what the model is, what it was trained on, who trained it, under what policy, or where a human stood in the process that produced it. Those are provenance questions, and they are the ones the definition fight left open. The signing effort recognises this itself: it names readable, tamper-evident provenance records, and trusted provenance across the whole workflow, as work still to come rather than work already done.

That readable, attested record is what MX has always been. MX was never confined to content; it is provenance for any data file, written so a person and a machine can both read it. A COG can describe and attest a weights file - its identity, its declared lineage, the policy it was produced under, the point at which a human was accountable - in the same format as a COG describing a PDF, a web page, or a dataset. The weights blob takes a signature for integrity, in the code world's tools. The account of the weights takes a COG. The two are complementary, not competing: one shows the file is unchanged, the other carries the checkable story of where it came from.

A point of honesty the series insists on: an MX record does not make a model's provenance true. It makes the producer's claims declared, attributable, and checkable, so that a false claim becomes a falsifiable one rather than a silence. And MX does not settle what "open source AI" ought to mean. That argument belongs to the OSI and the community having it. MX supplies the record layer for an artefact that fell between the categories, not a verdict on anyone's licence.

## Why it lands with MX

There is a reason this gap fits MX rather than some new vendor format. The provenance record for a category nobody owns must not become a category somebody owns. If the largest model makers defined the weights-provenance record themselves, it would describe exactly what suited them to disclose - openwashing one layer down. A record format held by [an independent body](https://tg.community), community-led and never vendor-driven, is the only kind a regulator or a downstream user could trust about a model they did not train. And as regulators begin to ask what a model was trained on and how, that record stops being a courtesy and becomes the evidence.

## The test, again

The series has been asking who owns the rule and who can switch it off. Weights add plainer questions for anything you are about to build on. Can you confirm it is the artefact its producer published? And can you read an attested account of where it came from? For model weights the first answer is arriving, in the code world's hands. The second is the gap - and a provenance layer built for neither code nor content is the thing shaped to fill it.

## Related reading

- [The Spec Was Never the Fragile Part](https://mx.allabout.network/blog/governance/the-spec-was-never-the-fragile-part.html) - JPEG, FAIR, and the line between a registry that grants trust and one that points to it
- [A Rule You Sell Is Not a Standard](https://mx.allabout.network/blog/governance/a-rule-you-sell-is-not-a-standard.html) - why the body that profits cannot be the body that rules
- [A Standard That Knows What It Isn't](https://mx.allabout.network/blog/a-standard-that-knows-what-it-isnt.html) - MX claims as little new ground as it can, and defers to what exists
- [What Is Machine Experience?](https://mx.allabout.network/blog/what-is-machine-experience.html) - provenance for anything you publish, in a record both people and machines can read
- [The Gathering](https://tg.community) - the open body that holds the MX standard

---

*Tom Cranstoun is the founder of the Machine Experience (MX) community and author of the MX book series. He consults on MX strategy through Digital Domain Technologies Ltd.*
