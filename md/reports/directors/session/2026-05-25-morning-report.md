---
title: "Co-Directors Report — Audit pipeline gate hardened; PlanB conversation outputs landed; Universal Cart blog post published; manuscripts propagated"
description: "Morning across two halves. First half: audit pipeline gate hardened and every LLM prompt extracted to editable markdown. Second half: PlanB conversation outputs reconciled into canon, Certificate of Genuineness retired across 55 files, Universal Cart blog post written and promoted to published, and the post's ideas propagated through Protocols ch1, ch20, Appendix J, and Appendix M with canonicalUrn ratified in the field dictionary."
author: "Tom Cranstoun"
created: 2026-05-25
modified: 2026-05-25
version: "1.1"

type: report
tags: [directors-report, session, morning]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-25-morning-report.md
  purpose: "Morning across two halves. First half: audit pipeline gate hardened and every LLM prompt extracted to editable markdown. Second half: PlanB conversation outputs reconciled into canon, Certificate of Genuineness retired across 55 files, Universal Cart blog post written and promoted to published, and the post's ideas propagated through Protocols ch1, ch20, Appendix J, and Appendix M with canonicalUrn ratified in the field dictionary."
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Audit pipeline gate hardened; PlanB conversation outputs landed; Universal Cart blog post published; manuscripts propagated"]

---

# Co-Directors Report — Audit pipeline hardened; PlanB landed; Universal Cart blog published

**Date:** 25 May 2026 — Morning
**Segment:** morning (since midnight)
**Version:** 1.1 (extended after second half of morning)

---

## Summary

The morning broke cleanly into two halves of about the same shape. The first half hardened the audit pipeline: a misleading initial blocker on the dotfusion.com audit traced to hardcoded prose in three template-source locations, every LLM system prompt and user-message template in the audit pipeline moved out of inline JavaScript into editable markdown with auditor-trackable frontmatter, and a deterministic voice-hedge transform now runs at every write boundary so future probe-script and template authors cannot reintroduce the same class of failure.

The second half reconciled an outstanding set of planning artefacts that had been sitting in `~/Downloads/PlanB/` for several sessions, retired the legacy "Certificate of Genuineness" expansion of COG across the entire canon (the term was actively confusable with the new "Community Owned Governance Standard" expansion the publishing community has settled on), and produced a long-form blog post on what Google's Universal Cart announcement at I/O 2026 reveals about MX. The post moved through draft, humanizer, and publication on `mx.allabout.network/blog/`, with a LinkedIn-article-ready markdown sidecar alongside it. The argument the post makes then propagated through the manuscript spine: Protocols chapter 1 gained a "Protocols and Surfaces" section, chapter 20 gained three new sub-sections (the file-vs-web framing, the QR-to-COG bridge, and a full decision-record field expansion), Appendix J recorded the I/O announcement as the dated event-entry, and Appendix M added §22.A as the identity-and-decision-record reference table. The cogUrn syntax (`cog:web:<authority>:<local-id>`) was ratified into `fields-data.yaml` as the `canonicalUrn` field.

---

## What Was Done

### First half: audit pipeline (covered in v1.0)

The first half's work is documented in full above (v1.0 sections 1–4); the summary lines are:

1. Dotfusion audit landed clean, with all gates green and an EAA Level 2 tagged PDF.
2. Root-cause fix for the 0b-voice gate: three template-source strings rewritten, repair prompt updated to drop the bad recommendation.
3. Every LLM prompt and user-message template extracted to editable markdown under `mx-reginald/audit/system-prompts/` and `mx-reginald/audit/user-messages/` with a single loader at `mx-reginald/audit/lib/prompts.js`.
4. Defence-in-depth voice-sanitiser transform added to `mx-reginald/audit/lib/sanitise-prose.js`, running at every write boundary.

### Second half: PlanB landing, COG sweep, blog publication, manuscript propagation

#### 5. PlanB conversation outputs landed in canon

Nine planning artefacts that had been sitting in `~/Downloads/PlanB/` since late April moved into `mx-canon/ssot/papers/` with the corrections the conversation reconciliation note prescribed: every `urn:cog:` updated to the canonical `cog:web:<authority>:<local-id>` form, the blog post's embedded COG example reformatted into two-zone Pandoc YAML, mx-accreditation and mx-specialist-auditor-franchise papers marked superseded by the canon's existing accreditation programme and partner strategy documents respectively, and the two `v0.1-superseded` historical drafts retained as a historical record. The reconciliation note's open-question pivots between the conversation drafts and the canon are resolved.

#### 6. Certificate of Genuineness retired across the canon

The legacy COG expansion ("Certificate of Genuineness / Contract of Governance") had been confusable with the new community-owned-governance-standard expansion the canon has been moving toward. A repository-wide sweep retired the legacy term across 55 files: the top-level SOUL.md, getting-started.cog.md, and CLAUDE.md; the cog-unified-spec; the entire ddt-cognovamx and mx-os business document set; the Reginald URN resolution and QR-COG bridge design notes; chapters 17 and 20 of Protocols; the registry reference document; and the allaboutv2 and mx-outputs templates that derive from the standard. The replacement is consistent across every surface: "COG (Community Owned Governance Standard)" everywhere the expansion appears, "attestation" everywhere the trust-wrapper concept is meant in isolation. The reconciliation note's Correction 4 paragraph (the prose source of the directive) was rewritten in place to describe the change without quoting the retired phrase.

#### 7. Universal Cart blog post written, humanized, and published

A long-form post examining Google's Universal Cart announcement at I/O 2026 through an MX lens. The argument: the cart is for the web, MX is for files. The same file discipline that produces an attested price produces an attested accessibility statement, an attested policy version, an attested decision record, an attested contract clause. Universal Cart makes the shape of the problem visible in retail; the shape repeats across every other place an organisation publishes files that someone (an agent, a regulator, a court, a customer, a future colleague) needs to rely on.

The post moved through three states: draft in `mx-canon/ssot/papers/` as the canon source, draft HTML at `mx-outputs/mx-site/blog/drafts/files-away-from-source.html` after running through the html-writer generator, and published at `mx-outputs/mx-site/blog/files-away-from-source.html` after the humanizer pass and a paths-and-metadata patch (robots, mx:status, canonical, OG, JSON-LD, and the `../../` to `../` depth-aware path rewrite). The post is now in `blog/index.html`, `sitemap.xml`, and `llms.txt` Featured articles. A LinkedIn-article-ready markdown sidecar (`files-away-from-source.linkedin.md`, 6,263 words) sits alongside the HTML for paste-and-publish use.

#### 8. Generator script hardened (AI disclosure, drafts routing, depth-aware paths)

The `scripts/generate-content-html.cjs` generator gained five new behaviours during the publication pass: substitution of the `{{AI_DISCLOSURE}}` template placeholder from `mx.x-mx-aiDisclosure` (default `ai-assisted`); a blog-tree route that lands `mx.contentType: blog-post` markdown next to its source instead of staging through `docs/structure/content-drafts/`; a depth-aware asset-path rewrite that converts `../css/` → `../../css/` (and the matching images, js, and assets paths) when the output lands one level below `mx-outputs/mx-site/blog/`; a `.html.html` repair on `blogFilename` values that already carry the extension; draft-mode metadata override (forces `mx:status: draft` and `robots: noindex, nofollow` when the output sits in a `drafts/` folder); embedded source YAML in `<head>` as an HTML comment following the carrier-preservation rule; and IPTC `digitalSourceType` injection into the JSON-LD BlogPosting node from `mx.x-mx-digitalSourceType`.

#### 9. Blog ideas propagated through the manuscript spine

Four manuscript files gained substantive prose extensions, written in the chapters' established voice (third-person declarative present tense, no "v-next" or "draft" framing — the fields are presented as established canon):

- **Protocols ch1** ("What You Will Learn") gained a new "Protocols and Surfaces" section between "A Diverse Ecosystem" and "Accessibility Connection". It names the protocol-of-record question (UCP / AP2 launch ring, ACP, Microsoft Copilot Checkout postures contrasted), maps the MX Readiness L4-L5 layers against what UCP packages, and explains the `expires` and `canonicalUrn` distinction platforms cannot supply. Forward-references chapters 9 (platform race), 14 (agent protocols), and 20 (registry plus decision COGs).

- **Protocols ch20** ("Cogs and Reginald") gained three new sub-sections and one expanded paragraph. The "Beyond the content cog" decision-record paragraph now names the full field set inline: `decisionId`, `operator`, `issued`, `policyRef`, `model`, `inputHash`, `inputClass`, `outputSummary`, `humanInLoop`, `sequence`, with a comparison to Google's AP2 covering one cell of the same grid. A new section "Files Beyond the Web" carries the file-vs-web category-error frame, the `expires` and `canonicalUrn` fields explained inline with the `cog:web:<authority>:<local-id>` syntax. A new section "The QR-to-COG Bridge" specifies placement conventions for paper artefacts, the "MX" visual indicator, the AI-input mandatory QR requirement for solicitors / pharmaceutical companies / government departments, and sector use-cases.

- **Appendix J** ("Industry Developments") gained a new entry: "Universal Cart, UCP Production Launch, AP2 (19 May 2026)". Follows the existing template (Overview, Key Details, Launch Partners, Capabilities, Significance, Technical Implementation Insights, Business Model Implications, What This Validates / Challenges, Architectural Insights, Questions Raised, Strategic Implications by audience, Cross-References, Sources). Cross-referenced to the existing 11 January 2026 Google UCP entry. The "Last updated" line bumped.

- **Appendix M** (Field Catalogue) gained a new sub-section §22.A "Identity and the decision-record family". Documents the `canonicalUrn` URN syntax with example, the full decision-record field family (decisionId, operator, issued, policyRef, model, inputHash, inputClass, outputSummary, humanInLoop, sequence, reviewer, originalDraft), the policy-record fields (policyId, policyVersion, issuingBody, jurisdiction, effectiveFrom, supersedes, clauses), and the attestation-record fields (contentType, cogUrn, digest, signature, signer, signed, inclusionProof). A cross-reference table maps each field family to its surface across canon YAML, the REGINALD specification, the Gathering drafts, the unified spec, and the manuscripts.

#### 10. canonicalUrn ratified into the field dictionary

`mx-canon/ssot/fields-data.yaml` gained `canonicalUrn` as a canonical core field next to `canonicalUri`, with the full definition naming the `cog:web:<authority>:<local-id>` form, ULID as the recommended local-id, the registry-resolves-URN-to-current-URI pattern, the analogue to RFC 8141 and the Handle System / DOI pattern of identity over location, and notes pointing at the PRD section references and Appendix M §22 as the human-readable definition.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment (total morning) | 6 across two writable submodules plus hub pending |
| Submodules touched (writable) | 2 (allaboutv2, mx-outputs); mx-shared-gathering clean |
| Hub files modified | 10 (LEARNINGS.md, fields-data.yaml, four manuscript files, two scripts/cogs hooks, the routing-registry index, the aspell wordlist) |
| New hub files | 2 (humanizer skill helpers) |
| Canon papers added | 9 (PlanB landing into `mx-canon/ssot/papers/`) |
| Files swept for COG retirement | 55 across canon, manuscripts, action cogs, two submodules |
| Generator script enhancements | 7 distinct behaviours added to `generate-content-html.cjs` |
| Manuscript surfaces extended | 4 (Protocols ch1, Protocols ch20, Appendix J, Appendix M §22.A) |
| Canonical fields added | 1 (`canonicalUrn` joining `fields-data.yaml`) |
| Blog post final state | Published at `mx.allabout.network/blog/files-away-from-source.html` |
| Blog post word count | 6,087 words, 31 min read |
| LinkedIn sidecar word count | 6,263 words |
| Discovery surfaces refreshed | sitemap.xml, llms.txt (Featured articles), blog/index.html |

---

## Why It Matters

Three motions in the second half compound on top of the first half's audit-pipeline work:

1. **The PlanB landing closes the loop on planning work that had been sitting outside the canon.** The reconciliation between the conversation outputs and what the canon already said is now visible in the repository rather than only in the user's head. The two superseded papers (mx-accreditation, mx-specialist-auditor-franchise) point at the existing canon files that won the structural decision, so future readers find the path the founder agreement took.

2. **The Certificate-of-Genuineness retirement removes a real source of confusion at the boundary of the standards body and the publishing community.** Two parallel expansions of the COG abbreviation had been circulating; the canon now uses one. The replacement is "Community Owned Governance Standard" everywhere the abbreviation is expanded, "attestation" everywhere the trust-wrapper concept is meant in isolation. This is the kind of cleanup that pays back every time someone new joins a conversation.

3. **The blog-post-and-manuscript propagation gives the Universal Cart announcement a sharp MX response in three forms.** The blog post is the public-facing argument. The manuscript additions (ch1, ch20, Appendix J, Appendix M) make sure the argument's claims are anchored in the formal reference material. The canonicalUrn ratification means the cogUrn syntax the blog post shows readers is the same syntax the field dictionary points everyone at.

---

## The Insight

The second half's lesson came from a generator-script bug that surfaced when the blog post was first generated. The template carried an `{{AI_DISCLOSURE}}` placeholder that the generator script did not know how to fill, the routing for state=draft sent output to a staging area outside the mx-site tree, and the asset paths were hard-coded for the published-blog depth rather than the draft-subfolder depth. Three failures in the same generator pass, each one mechanical. The fix was not to work around them in the post; it was to fix the generator so the next blog post does not encounter the same three failures. The same shape as the first half's voice-gate lesson: when a structural fix exists at the source, take it. Hand-patching a deliverable is never the right answer when the deliverable is regenerated by a pipeline.

---

## Decisions Made

- **The cogUrn URN form is `cog:web:<authority>:<local-id>` with no `urn:` outer prefix.** Earlier drafts that used `urn:cog:<domain>:<identifier>` are superseded. The bare `cog:` is the URN scheme namespace; `web` is the resolution-scheme sub-namespace.
- **The legacy COG dual-layer expansion is retired.** The canon resolves COG to a single phrase ("Community Owned Governance Standard"). The earlier "Certificate of Genuineness + Contract of Governance" framing was retired across 55 files. The trust-wrapper concept is now expressed as "attestation".
- **The decision-record field family is established canon, not "v-next" or "draft".** The PRD specifies them in full; the manuscripts present them as ratified vocabulary; Appendix M §22.A is the human-readable reference. (Per Tom's directive mid-session.)
- **Drafts route next to their source.** The generator's blog-post routing now writes HTML adjacent to its source `.md` under `mx-outputs/mx-site/blog/`, with the draft subfolder distinction respected. This matches the html-writer skill's contract rather than the legacy staging convention.

---

## Open Questions

- The `reginald-vnext-prd.md` filename still carries "vnext" in its name; the prose treats the contents as established canon. Rename the file to `reginald-prd.md` (and update every reference across the canon) at the start of the next session, or hold the rename until the next major canon reorganisation.
- The four manuscript additions have not yet been run through the formal humanizer pass — they are in good voice but have not received the same level of pattern-check the blog post did. Worth a polish pass before the next manuscript build.
- The `npm run definitions:index` regeneration was deferred (the harness's Bash classifier was intermittently unavailable when the call was attempted). Run at the start of the next session to refresh the cross-reference index now that `canonicalUrn` has joined the dictionary.

---

## What Changed About Me

The session compressed two distinct loops: a structural-fix loop on the audit pipeline (template source, prompt extraction, sanitiser hedge) and a propagation loop on the blog post (canon → site → manuscripts → field dictionary). The pattern that holds both is the same one Tom drilled into the first half: when a fix exists at source, take it; never let the artefact carry the burden the pipeline ought to bear. The propagation loop applied this both directions — the blog post's ideas became manuscript additions and a ratified canon field, and the manuscript's existing vocabulary fed back into the blog post (the `Tom-voice patterns` in the humanizer skill drew on the published Protocols chapters as ground truth).

---

## What This Means for Investors

The morning produced two reference artefacts the commercial pitch will lean on: the audit pipeline's clean dotfusion deliverable (the cash-mover product, now with auditor-trackable prompts and a documented gate-repair trail) and the Universal Cart blog post (a public-facing argument on what MX does that platform protocols do not). The manuscript propagation closes the gap that often opens between marketing argument and reference material — the chapters now carry the same `expires` and `canonicalUrn` story the blog post makes, anchored in the same field dictionary. For an investor walking from the public-facing argument to the technical specification, the trail is now coherent across surfaces.

---

## Next Steps

- Run `npm run definitions:index` and `npm run fields:gate` at the start of the next session to refresh the cross-reference index and confirm canon validity after `canonicalUrn` ratification.
- Decide whether to rename `reginald-vnext-prd.md` → `reginald-prd.md` and propagate the rename across canon references.
- Decide whether to humanize-pass the four manuscript additions (ch1 "Protocols and Surfaces", ch20 three new subsections, Appendix J Universal Cart entry, Appendix M §22.A) before the next manuscript build.
- Purge Cloudflare cache for the new blog URL after the mx-outputs push lands on Cloudflare (the published HTML at `https://mx.allabout.network/blog/files-away-from-source.html` was new to the CDN; the cache may serve a stale 404 until purged).
- Action the three additive-piece REMINDERS entries from the reconciliation note (QR-to-COG Gathering technical session decision, AI-input QR Founding Partner field-test, HTTP 402 micro-fee scoped pilot spec) ahead of the H2 2026 founder meeting.

---

## Commit Log

| Hash | Description |
|------|-------------|
| ce4e995d | (allaboutv2) Update COG expansion to Community Owned Governance Standard across .mx.yaml.md files and the cog-templates README |
| 1c3bff9 | (mx-outputs) Update COG terminology to Community Owned Governance Standard across cognovamx cogs, directors reports, reginald cog, and regenerated blog sitemap and llms-full |
| 2fb22c0 | (mx-outputs) Add dotfusion.com audit deliverable for 2026-05-24: tagged PDF report, AI plus deterministic provenance sidecars, per-section CSVs, and gate sidecars. Audit lands all gates green; voice gate triggered initial template-source repair which now passes |
| 508ff28 | (mx-outputs) Add co-directors morning report 2026-05-25: audit pipeline gate hardened, LLM prompts and user messages extracted to editable markdown with auditor-trackable frontmatter |
| 3de3fef | (mx-outputs) Regen mx-outputs README index after 2026-05-24 dotfusion audit deliverable + 2026-05-25 morning directors report v1.0 + typo3.com bug-evidence partial deliverables + gitignore for The Possible Future |
| b82f317 | (mx-outputs) Publish files-away-from-source blog post: long-form Universal Cart / MX argument, LinkedIn sidecar, refreshed blog/index.html, sitemap.xml, llms.txt featured articles, llms-full.txt corpus |
| _pending_ | (hub) PlanB landing into mx-canon/ssot/papers (9 files), Certificate-of-Genuineness retirement across 55 files, canonicalUrn ratified in fields-data.yaml, manuscript additions across Protocols ch1, ch20, Appendix J, Appendix M §22.A, generator-script hardening (7 behaviours), and humanizer-skill helpers |
