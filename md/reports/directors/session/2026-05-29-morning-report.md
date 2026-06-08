---
title: "Co-Directors Report — MX PDF Inspector CLI Productised + Pattern 26 Word-Frequency Rule"
description: "Two strands. (1) Turned the existing PDF inspector harness into a standalone shippable product — a slim self-contained v1.0.0 distribution with a public blog post, a services-page offering for accredited operators, an internal pitch, and a bundled test pack with cross-platform runners. The 60-day evaluation promise now has a delivery mechanism. (2) Landed Pattern 26 in writing-style.cog.md (distinctive-word overuse detection), built the deterministic pre-scanner that mirrors scan-tics.mjs, added the x-mx-domainTerms canon field, and tuned the threshold defaults against a seven-document sweep so the rule fires on real overuse without false-positiving Tom-voice rhythm."
author: "Tom Cranstoun"
created: 2026-05-29
modified: 2026-05-29
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-29-morning-report.md
  purpose: "Two strands. (1) Turned the existing PDF inspector harness into a standalone shippable product - a slim self-contained v1.0.0 distribution with a public blog post, a services-page offering for accredited operators, an internal pitch, and a bundled test pack with cross-platform runners. The 60-day evaluation promise now has a delivery mechanism. (2) Landed Pattern 26 in writing-style.cog.md (distinctive-word overuse detection), built the deterministic pre-scanner that mirrors scan-tics.mjs, added the x-mx-domainTerms canon field, and tuned the threshold defaults against a seven-document sweep so the rule fires on real overuse without false-positiving Tom-voice rhythm."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - MX PDF Inspector CLI Productised + Pattern 26 Word-Frequency Rule"]
---

# Co-Directors Report — MX PDF Inspector CLI Productised

**Date:** 29 May 2026 — Morning
**Segment:** morning (continuous arc from the 28 May evening session, crossing midnight)

---

## Summary

The PDF inspector work that ran through the 28 May evening session continued into the early hours of 29 May with a clear shape: turn the existing test harness into a standalone product accredited operators can install in their own pipelines. The result was a self-contained v1.0.0 distribution with a bundled test pack, two licence variants (60-day evaluation and accredited-operator), a cross-platform Node runner alongside the bash one, a public blog post, a services-page offering with platform detail, and an internal sales-positioning pitch document. The 60-day evaluation promise the services page made earlier in the evening now has a real delivery mechanism behind it: email, tarball, install, smoke-test the bundled fixture, done.

This is the seed-phase shape of the CogNovaMX commercial offering working in practice. Not a hosted service; a tool operators run inside their own environments, certified by the same detection core that runs the public inspector and gates our own outbound PDFs.

---

## What Was Done

### 1. The inspector CLI as a product

The harness at `tests/test-pdf-inspector.js` had been working since the previous evening; what it had not been was something an operator could install. The hub-internal CLI at [`scripts/bin/mx-pdf-inspect.js`](../../../../../scripts/bin/mx-pdf-inspect.js) was the first packaging step: a proper ES module CLI with `--help`, `--json`, `--markdown`, `--quiet`, `--recursive`, `--min-tier`, `--version`, exposed as `npm run pdf-inspect` and via a `bin` entry in `package.json` so a future `npm install` would surface `mx-pdf-inspect` as a binary. That made it reachable from inside the hub. It did not make it deliverable.

The deliverable shape is the v1.0.0 distribution at [`mx-outputs/distributions/mx-pdf-inspector/v1.0.0/`](../../../../../mx-outputs/distributions/mx-pdf-inspector/v1.0.0/). Self-contained: a vendored pdf.js, the detection core as `lib/`, the CLI as `bin/`, a standalone `package.json` with zero runtime dependencies, two licence files, a README that walks install and usage, and a `test-pack/` carrying a gold-standard MX Compatible fixture plus a runner that asserts the CLI classifies it as `mx` with every required evidence row green. About two megabytes total. The CLI paths resolve relative to the distribution root (not the hub root), so the same tree works whether unpacked into `/opt`, installed globally via `npm install -g .`, or invoked directly via `node bin/mx-pdf-inspect.js`.

### 2. The 60-day evaluation gets a delivery mechanism

Earlier in the evening the services page promised "a non-accredited evaluation copy (60-day, single-machine, no commercial use) is available on request." That was an honest promise without a delivery flow behind it. The v1.0.0 distribution closes that loop: tar the directory, email the prospect with the tarball plus a personalised LICENSE-EVALUATION.md (the 60-day clock starts), tell them to unpack, `npm install -g .`, run the bundled test pack, then point the CLI at their own PDFs. Three minutes per delivery, no infrastructure required.

The operator distribution channel uses the same tarball with the LICENSE-OPERATOR.md instead. The operator licence carries the commercial scope each accreditation tier authorises (Tier 1 self-claims, Tier 2 third-party claims, Tier 3 audit-grade claims) and the termination clause that automatically revokes access when accreditation lapses.

### 3. Cross-platform test pack

The bash test-pack runner the v1.0.0 distribution shipped initially required `bash` and `jq` — fine for macOS and Linux operators, friction for Windows operators who would otherwise install the CLI natively through npm. A sibling Node-based runner at [`test-pack/run-test-pack.mjs`](../../../../../mx-outputs/distributions/mx-pdf-inspector/v1.0.0/test-pack/run-test-pack.mjs) does the same fixture walk, spawns the CLI as a child process via `execFile`, parses `--json` natively, asserts the same conditions, and emits the same human-readable verdict plus exit codes. Zero external tools beyond Node.

Both runners are wired into `package.json` scripts: `npm run test-pack` runs the Node runner (the cross-platform default), `npm run test-pack:bash` runs the bash runner (for operators with bash and jq integrated into their existing CI). The Windows install path is now identical to Linux and macOS: receive tarball, install globally, smoke-test, use.

### 4. Public surfaces (blog, services pages, internal pitch)

The blog post at [the-inspector-you-can-audit-yourself.html](https://mx.allabout.network/blog/the-inspector-you-can-audit-yourself.html) introduces the CLI publicly, walks the four-layer architecture (public page, production gate, test harness, operator CLI all sharing one detection core), and frames the pitch as "credibility by mechanism, not by claim." It opens by naming the free single-file inspector, distinguishes what an operator actually needs (CI integration, confidential PDFs stay local, exit codes drive the build), explains why a CLI rather than a hosted service, and explains why accreditation is the qualifier for access. Ends on a CTA into the Certified Operator page. A proposition card was added to the top of `blog/index.html` and the discovery surfaces (sitemap, llms-full.txt) were refreshed.

The Certified Operator page at [services/certified-operator.html](https://mx.allabout.network/services/certified-operator.html#inspector-cli) grew a "Tools available to accredited operators" h2 with an `#pdf-inspector-cli` h3 describing the offering. Later in the session the same section grew a deeper "How the tool installs and where it runs" h4 covering: zero runtime npm dependencies, Linux/macOS/Windows native through npm's binary shim (no WSL required for the CLI itself), the two test-pack runners with their platform constraints, three exit codes for CI integration, identical install path across containers and CI runners. The main services index gained a proposition card linking into the new offering.

The internal pitch at [`mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/inspector-cli-offering.md`](../../../../../mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/inspector-cli-offering.md) carries the sales-side positioning: what the CLI is, why it ships as a tool not a hosted service, why accreditation is the qualifier, three audiences with conversation hooks, pricing posture for the seed phase, what ships with the CLI, sales conversation hooks.

### 5. Pattern 26 — distinctive-word overuse rule, scanner, canon field, sweep

The session also delivered the second writing-style rule from the 28 May Scott opportunities doc work. The first rule (Section 5 forbidden vocabulary entry for abstract-noun "surface") landed yesterday. The deeper observation — that word-frequency repetition is itself an AI tell journalists are trained to catch — became Pattern 26 today, with the full enforcement layer behind it.

The rule lives at [`writing-style.cog.md` §9 Pattern 26](../../../../../mx-canon/ssot/writing-guides/writing-style.cog.md). It is the detection-side complement to the existing Pattern 11 (Elegant Variation). The two rules deliberately sit in opposite corners: Pattern 11 says do not substitute synonyms for the sake of variation; Pattern 26 says do notice when a word recurs and prefer rephrasing the second occurrence away. **The default fix is never to substitute.** That separation is what stops the rule pendulum-swinging into the over-correction failure mode Tom called out when commissioning the work — "but not too much else, it can read robot-like".

Exemptions are explicit and broad: function words, proper nouns (detected by capitalisation heuristic), domain terms of art (a built-in MX-domain list plus per-document overrides), Tom-voice rhythmic repetition (sentence-fragment lists, anaphora, direct second-person address), and schema or external-standard terms where accuracy forces the repetition. The fix hierarchy puts rephrasing first, pronoun second, restructure-to-absorb third, true synonym last, and explicitly forbids synonym cycling (which is Pattern 11).

The deterministic pre-scanner at [`scan-word-frequency.mjs`](../../../../../.claude/skills/humanizer/scan-word-frequency.mjs) mirrors the architecture of scan-tics.mjs exactly — zero npm dependencies, the same `isProseLine` walker, the same JSON hit schema. It emits hits at three window categories (paragraph, rolling 500-word local, rolling 2000-word document) and lets the writer judge each hit against the exemption list. The test harness at [`scan-word-frequency.test.mjs`](../../../../../.claude/skills/humanizer/scan-word-frequency.test.mjs) is a non-negotiable addition (scan-tics.mjs ships without one; the new scanner has more moving parts and earns one). Eight assertions cover the triggering case (the Scott doc's "surface" overuse), the Tom-voice non-triggering passage, the JSON-shape contract, the rephrase-hint discipline, and the threshold-tuning CLI flags.

The `x-mx-domainTerms` canon field landed in [`mx-canon/ssot/cognovamx-fields.yaml`](../../../../../mx-canon/ssot/cognovamx-fields.yaml) under the vendor-extensions namespace (the /mx-add-field skill correctly routes vendor extensions away from the open-standard fields-data.yaml). End-to-end verified: declaring `x-mx-domainTerms: [surface]` in the test fixture suppresses every "surface" hit.

A seven-document sweep covered the Scott opportunities doc, the three audit reports we shipped last night, the evening directors report, a recent blog post, and the Tom-voice baseline (Protocols ch1). At the original thresholds the Tom-voice baseline produced 159 hits — almost all false positives from MX-domain vocabulary the scanner did not yet recognise. Two tuning steps brought the false-positive rate down: expanding the built-in domain list from twenty-five entries to seventy-plus (machine, agent, user, accessibility, pattern, model, content, document, chapter, protocol, platform, architecture, etc.), and raising the document threshold from 5 to 8. The new defaults — **paragraph=3, local=5 in 500 words, document=8 in 2000 words** — keep the canonical Scott case firing while letting Tom-voice prose breathe. The decision and the sweep results are recorded in BDR 004 at [`mx-canon/mx-maxine-lives/registers/BDR/2026-05-29-pattern-26-thresholds.cog.md`](../../../../../mx-canon/mx-maxine-lives/registers/BDR/2026-05-29-pattern-26-thresholds.cog.md).

The humanizer skill grew a new PRIORITY-1 SCAN C step between SCAN B (verbal tics) and the broader pattern walk, plus an inline catalogue entry for Pattern 26 alongside the existing Pattern 25. Bidirectional cross-references between Pattern 11 and Pattern 26 keep both surfaces visible to a reader entering through either door. Tom-voice patterns 1, 4, 9 carry explicit `(Pattern 26 exempts this rhythm explicitly.)` parentheticals so the carve-out is visible at the voice-target reading level too.

The rule now ships with everything around it that makes a rule actually work: the canonical statement in the writing guide, the deterministic enforcement layer, the canon field for per-document configuration, and the dated decision record explaining why the thresholds are set where they are. The next humanizer pass on any new document will catch the kind of word-frequency drift the Scott opportunities doc demonstrated.

### 6. Two real bugs caught while building

The harness had two latent bugs that only surfaced when the productisation stress-tested it.

The case-folding bug was caught in the previous segment's work but only because the harness existed; before the harness, every MX-produced PDF in the public inspector was silently classified as `plain` and no one noticed. The new test pack now catches that class of regression in two places at once (the public inspector and the bundled fixture).

The stdout-warning bug was new. The vendored pdf.js 4.10.38 writes its "Please use the legacy build in Node.js environments" advisory directly to stdout (not stderr, as the name `warn` implies). Any JSON consumer piping `--json` to a parser saw the warning prefixed to the JSON and broke on parse. The bash test-pack runner caught it instantly on the first dry run. The fix overrides `process.stdout.write` to drop the specific warning chunk before pdfjs emits it; identical patch applied to the distribution CLI, the hub-internal CLI, and the test harness so they stay in lockstep.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Hub commits | 7 (CLI + pitch + blog source + warning fix + pointer bumps) |
| mx-outputs commits | 7 (distribution + Node runner + services-page expansion + blog post + discovery refresh) |
| New files in the distribution | 14 (bin, lib, vendor, package.json, README, two licences, test pack with fixture and two runners) |
| Distribution size on disk | ~2 MB |
| Runtime npm dependencies | 0 |
| Supported platforms | Linux, macOS, Windows (CLI native through npm's binary shim) |
| Test pack runners | 2 (Node default + bash legacy, identical verdict) |
| Bugs caught by the new productisation | 2 (XMP case-folding from prior segment + pdfjs stdout-warning this segment) |
| Cloudflare cache purges | 2 (blog post + services-page platform detail) |
| New writing-style patterns | 1 (Pattern 26: Distinctive-Word Overuse Without Rhetorical Purpose) |
| New canon fields | 1 (`x-mx-domainTerms`, vendor extension namespace) |
| New scanner scripts | 1 (`scan-word-frequency.mjs`, 308 lines, zero npm dependencies) |
| New test runners | 1 (`scan-word-frequency.test.mjs`, 8/8 assertions passing) |
| Documents in the threshold-tuning sweep | 7 |
| Tom-voice baseline false-positive rate | 159 → 50 hits (after domain-list expansion + threshold rise) |
| Pattern-26 BDR records | 1 (BDR 004, the dated threshold decision) |

---

## Why It Matters

The CogNovaMX commercial pitch has three claims that need to be true together: the standard is open, the implementation is mechanically verifiable, and the operator running it is accountable through accreditation. The first claim is the work of The Gathering; the second is what the inspector code embodies; the third is what the Certified Operator programme structures. Until this morning the third claim had a delivery shape that was promise-only — the services page said operators would receive a working CLI, but the operator would have had to clone the repo to get it. That gap left the entire commercial pitch sitting on goodwill.

The v1.0.0 distribution closes the gap. An accredited operator now receives a self-contained tool with a bundled test pack that proves the tool works on their machine before they trust it with a client deliverable. A procurement reviewer can install the same tool with the same test pack to verify their supplier's claims without involving the supplier's infrastructure. A regulator could in principle do the same thing for the same reason. The mechanism became the credibility, in working form.

The cross-platform Node runner closes the secondary gap that the bash runner had: it removes Windows from the operator-friction story entirely. Native Windows accredited operators now install and verify the CLI exactly the way Linux and macOS operators do. That matters because the procurement reviewer audience tends to use Windows; the operator audience tends not to. Removing the platform constraint widens the procurement-side adoption funnel.

---

## The Insight

The harness existed as a regression test for a long time before it became visible as a deliverable. The shape of the CLI was obvious in retrospect (wrap the same `inspectPdfDoc` call in a CLI UI; resolve the dependencies relative to a distribution root rather than the hub root), but the recognition that this was the product the services page had been promising was the work. The same code, repackaged with two LICENSE files and a README and a bundled test pack, is the entire seed-phase commercial offering. Nothing new had to be built; what had been built had to be packaged honestly.

This is the rhythm I want to keep for the seed phase. Run the harness inside our own pipeline (we already do). Notice the harness is, in working form, a thing operators would pay to run inside theirs. Package it. Ship it. The reason the inspector page can credibly say "we run every PDF through this tool" is the same reason operators can credibly say it about their PDFs once they install the tool. The architectural claim and the commercial offering are the same thing seen from two sides.

---

## Decisions Made

- The CLI ships as a tarball + email flow during the seed phase, not as a published npm package. The friction is small (three minutes per delivery), the privacy posture is honest (no public availability for confidential PDFs), and the conversion conversation is built into the lead pipeline (every delivery generates a personal contact).
- The Node test-pack runner becomes the cross-platform default (`npm run test-pack`); the bash runner stays for operators with bash + jq baked into their CI (`npm run test-pack:bash`). Both produce identical verdicts.
- Pricing stays bundled-with-accreditation in every seed-phase tier. The published wording leaves room to revise when commercial terms firm up but commits no new revenue line tonight. Worth a decision conversation when the first Tier 2 prospect asks for seats or volume.

---

## Open Questions

- When the first prospect requests an evaluation copy, do we want a templated email-and-tarball workflow (a shell script that builds the tarball + drafts the email), or is the three-minute manual flow honest enough for the first few?
- The slim distribution at `mx-outputs/distributions/mx-pdf-inspector/v1.0.0/` lives in mx-outputs (public submodule). That is fine for now because the source code is openly readable in the hub anyway. When we want to gate the operator distribution channel (Tier 2/3 receive a different LICENSE-OPERATOR), do we move it to a private REGINALD-served channel, or do we keep the public source and gate the licence terms at delivery time?
- The published commercial schedule on the Certified Operator page is still indicative. When the first paid accreditation is admitted, the bundled-with-accreditation CLI claim becomes a contractual commitment. Worth checking the wording on the services page against the eventual accreditation agreement so the two stay aligned.

---

## Next Steps

- Build the tarball generation script (`scripts/bin/build-mx-pdf-inspector-tarball.sh`) so the delivery flow is one command. Quick to write; converts the three-minute manual flow into a thirty-second mechanical one.
- File the operator-distribution-channel decision in REMINDERS for the next planning conversation. Three options on the table: private GitHub release page, signed S3 URL, or private npm scope.
- Add a second test-pack fixture covering the `eaa-tagged` tier (a PDF with `pdfuaid:Part=1` but no `mx:*` fields). Demonstrates the tier separation working end-to-end and gives operators an example of what the middle tier looks like. Requires either finding an external EAA-tagged PDF or post-processing one of our own with exiftool to strip the `mx:*` fields.
- Watch the next operator conversation for whether bundled-with-accreditation is the right pricing structure or whether seats / volume tiers would convert better. The published wording is honest about the seed phase so this is a thinking exercise, not a contractual block.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 950b9d1c (hub) | MX PDF Inspector CLI: new product, pitch, blog source, services-page offering |
| dcd8bf2 (mx-outputs) | PDF Inspector CLI: new blog post + services-page offering for accredited operators |
| ea8dd4dd (hub) | pitch doc: add mx.purpose + mx.stability for Gate 10 validator |
| b71f8bbd (hub) | pitch + blog source: add mx.x-mx-contextProvides + missing required fields for Gate 10 |
| af5493c (mx-outputs) | mx-pdf-inspector: v1.0.0 standalone distribution + test pack |
| 690c6af9 (hub) | Inspector CLI: stdout-warning fix + bump mx-outputs (v1.0.0 distribution + test pack) |
| 1b52f25 (mx-outputs) | mx-pdf-inspector v1.0.0: add cross-platform Node test-pack runner |
| 63ec6daf (hub) | Bump mx-outputs: cross-platform Node test-pack runner for the v1.0.0 distribution |
| 20fd5f0 (mx-outputs) | certified-operator: expand CLI offering with install + platform detail |
| b82d3168 (hub) | Bump mx-outputs: certified-operator CLI install + platform detail |
| _pending_ (hub) | Pattern 26: distinctive-word-overuse rule + scanner + canon field + sweep BDR |
| _pending_ (mx-outputs) | Directors morning report v1.1 (Pattern 26 strand added) |
| _pending_ (hub) | Bump mx-outputs: directors morning report v1.1 |
