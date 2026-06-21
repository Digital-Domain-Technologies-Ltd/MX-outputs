---
title: "Co-Directors Report - Structural Convergence Becomes Enforceable; REGINALD vNext Cutover; the Audit Cross-Check Becomes a Gate"
description: "Peer-reviewed research on AI narrative convergence became a deterministic scanner, a house writing rule, and a billable audit add-on in one session; did:web:reginald.allabout.network is live against the vNext worker via path-scoped routes with revenue paths protected; the audit's claims-vs-evidence verification now runs as a gate inside the pipeline"
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
version: "1.4"

type: report
tags: [directors-report, session, evening]
mx:
  status: active
  audience: [business]
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-12-evening-report.md
  purpose: "Peer-reviewed research on AI narrative convergence became a deterministic scanner, a house writing rule, and a billable audit add-on in one session; did:web:reginald.allabout.network is live against the vNext worker via path-scoped routes with revenue paths protected; the audit's claims-vs-evidence verification now runs as a gate inside the pipeline"
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Structural Convergence Becomes Enforceable; REGINALD vNext Cutover; the Audit Cross-Check Becomes a Gate"]

---

# Co-Directors Report - Structural Convergence Becomes Enforceable; REGINALD vNext Cutover; the Audit Cross-Check Becomes a Gate

**Date:** 12 June 2026 - Evening
**Segment:** evening (since 5pm)

---

## Summary

The writing stack closed a gap no word-level check could see. New research (StoryScope, 61,608 stories) shows AI models from five vendors converging on one narrative shape - tidy plots, themes spelled out, a clean moral at the end - while human writers scatter; structure alone identifies the machine 93% of the time. Within the session that finding became enforcement at every layer the estate has: a house rule in the writing rulebook (Pattern 28), a deterministic scanner with its own test suite wired into the gate chain, and a judgement pass in the humanizer. Calibration evidence is strong: all fifty published manuscript chapters pass clean (the human baseline), 73 published blog sources produce one plausible flag, and the scanner caught the exact moral-closer lines in the draft that motivated the work. The same finding was recorded as a billable Web Audit Suite add-on ("does your content read machine-made") in a new business-opportunities database, with the research citation as the authority behind it.

REGINALD vNext is now live on the production hostname. did:web:reginald.allabout.network resolves against the vNext worker's DID document, and the vNext registry API answers at reginald.allabout.network/v1/*. The cutover was done with two path-scoped Cloudflare routes rather than the full-host swap originally specified, because investigation showed the hostname also carries live book-sales revenue (Stripe webhook, checkout, emailed download links) on a different worker - a full swap would have broken it. The principal partner leading the vNext track is unblocked on his next step without needing any new account permissions.

In parallel, the audit pipeline's final integrity check - reading every claim in the report against the evidence the audit collected - now runs as compute inside the pipeline, before the PDF is rendered (on the cog path, by operator contract). Its first live run against a new external domain caught six classes of defect in our own instrumentation, every one fixed in the crawler, the gates, or the template rather than in the report; the Balanced Scorecard's human-experience grades now derive from measured data instead of template-asserted "Excellent" rows; and a macOS-specific storage hazard (folders named after .app hostnames rendering as application bundles in Finder) was closed at the slug-derivation source.

The parallel writing session shipped the first three phases of the approved rulebook rewrite. The assistant's accumulated working memory now travels with the repository: a deterministic merge engine syncs the device-local memory into a tracked `.claude/memory/` folder (union by file, newest correction wins, deletions by tombstone), hooks apply it at the write boundary and at session start, and a checker gates it in the test suite and at push. A fresh clone now inherits months of working practice on day one. The hook estate became self-declaring (every hook carries an enforcement level, with a generated machine-readable registry), and LEARNINGS.md went from 230 accumulated entries to an empty buffer: every proven rule now lives in its themed gotcha doc (including a new MX-tooling sibling), three entries became permanent infrastructure, and the document-learn-automate-delete loop is closed. The same session drafted the memory-sync story as a blog post (staged at Zone 2, publish-ready), added the "Determinism, not inference" credo to the root manifesto with a regenerated provenance-carrying PDF, and fixed the MX-outputs CI session-check, whose appendix step now skips cleanly under the publish-from-hub model.

A third thread refreshed the business-development surface. A contact-agnostic capability update now exists for partners and prospects (Olivier Dobberkau, Chris Bryce, Jonathan Healey, and others), carrying the six weeks of shipped capability since the Frankfurt summit; the investor, team, and Gathering sponsor pitches were brought current with the same facts in per-audience framing; and the CRM caught up with reality on IDHL - the sponsorship record on Jonathan Healey's contact and a new contact for Liam Goldfinch, the IDHL practitioner whose Kentico MVP Summit talk independently argued the specifications-over-prompts thesis.

---

## What Was Done

### 1. REGINALD vNext production cutover

The vNext track needed reginald.allabout.network cut over from the v1 worker. The original instructions assumed the hostname was bound to the retired v1 API worker; it is in fact a zone route on the estate's main worker, which serves the Stripe webhook, book checkout, buyer download links, the publisher API, and the landing page on that exact host. Instead of the irreversible full-host custom-domain swap, two path-scoped routes now send /.well-known/did.json and /v1/* to the vNext worker while everything else stays where it was. Cloudflare resolves the most specific route, so the change is additive and rollback is deleting two route ids. All paths were verified live after the change: the DID document resolves, the vNext index answers, and the book-sales endpoints still respond from the original worker.

### 2. Access problem dissolved rather than solved

The session opened as a Cloudflare permissions question: the vNext lead could not create an API token scoped to the allabout.network zone because his membership role does not surface the zone. Three options were assessed (account-owned token, role elevation, operator-side cutover); the operator-side path won because the local wrangler OAuth session already held every needed scope. No new token was minted, no role was widened, and the standing credential surface is unchanged.

### 3. Routing knowledge captured

The path-split shape (which worker owns which paths on reginald.allabout.network, and why a full-host cutover must never be done without relocating the revenue paths first) is recorded in the repo-tracked memory so any future session inherits it before touching that hostname.

### 4. The pre-PDF cross-check gate

A new gate script reads the final report markdown against a bounded bundle of the audit's structured evidence (scores, discovery probes, security headers, error-page test, platform fingerprint, agent access, accessibility tree) and records every unsupported claim - inaccuracy, contradiction, misstatement, or unverifiable - into the findings sidecar that ships with the deliverable. It runs inside the gates phase on the cog path (the npm surface stays deterministic-only by operator contract), uses the local model by default so client content stays on our infrastructure, captures full prompt/input/output provenance, and never blocks the PDF. The pure logic lives in a tested core lib; the rubric carries a metric glossary so the model cannot conflate score names.

### 5. Evidence-accuracy fixes, all at source

The atmors.netlify.app audit surfaced real defects in our instrumentation: a header-capture bug that reported HSTS absent when the origin serves it (the page-cache schema was bumped so every host's stale entries flush on its next run); a platform probe that cached a transient fetch failure as "Unknown Platform" even on a *.netlify.app hostname; an error-page table that contradicted itself; an accessibility-tree section claiming a perfect score from zero scanned pages; and a narrative attributing URL duplication to a sitemap the same report said was missing. Each fix landed in the crawler, probe, handler, or gate - never in the shipped report.

### 6. Data-derived scorecard grades

The Balanced Scorecard's UX / Navigation and Trust and Credibility rows were hard-coded "Excellent A" in the template - the cross-check gate flagged them as unverifiable on its first run, and it was right. Both now derive deterministically from measured signals (heading-outline quality, single-H1 and skip-link consistency; HTTPS, security-header coverage, canonical consistency, correct error-page status), with the basis stated under the table.

### 7. Finder-safe storage slugs

A folder named after a .app hostname renders as an application bundle in macOS Finder. The hostSlug derivation moved to a single tested SSOT (mx-reginald/audit/lib/host-slug.js): hostnames whose final label is a bundle extension carry a .d directory suffix in the storage slug (atmors.netlify.app keys atmors.netlify.app.d), client filenames strip the guard, the existing delivery was renamed and regenerated with consistent paths, and the rule is saved to project memory. The architecture cog and audit cogs were brought current with the slug SSOT and the gate.

### 8. Pitch family refreshed with the six-week capability story

A reusable, contact-agnostic update (mx-crm/outreach/update.md) tells partners and prospects what shipped in the six weeks since Frankfurt, in three outcome-led sections: the audit a client can defend (vendor attribution, template-level accessibility findings, refusal-as-finding, byte-identical re-runs), the evidence chain every deliverable carries, and the air-gapped local-model delivery for regulated sectors. Frankfurt gets one passing mention; REGINALD is deliberately absent; the regulatory legal disclaimer rides the first named-legislation mention. The same facts landed in the live pitches in per-audience framing: the investor pitch's determinism-moat, evidence-chain, local-inference, and traction sections; the team pitch's audit, regulated-audit, and REGINALD product lines; and the Gathering sponsor pitch in vendor-neutral language only, per the audience-split rule. All four files then went through the full humanizer pass - scanner-clean apart from confirmed exemptions (house idiom, deliberate anaphora, the "Worth being up close to" signature line).

### 9. Memory that travels with the repository

Tom approved a six-phase rewrite of the AI-rulebook layer after a structured interview; three phases shipped same-day. Phase one is the headline: Claude's device-local working memory (the small files recording team practice, corrections, and conventions) now merges into a repo-tracked folder through one deterministic contract - union by file so contributions accumulate and nothing is overwritten, newest modified-stamp wins so a teammate's correction reaches every machine, tombstones so retirements stay retired, and personal-context memories never leave the device. Hooks run the merge at the write boundary and at session start; a checker holds the two sides together in the test suite and as a push gate. The travelling set carries the project's accumulated practice to any clone, any team, any machine.

### 10. Hook estate self-declares; LEARNINGS loop closed

Every Claude Code hook now carries a declared enforcement level (blocking, advisory, or sync) beside its description, with a generated machine-readable registry; a hook missing either header is a hard regeneration error, and the duplicated detached-HEAD submodule check collapsed into one shared guard sourced by both git hooks. LEARNINGS.md - the rolling mistakes buffer - was swept from 230 entries to empty: proven rules distilled into the themed gotcha docs (a new MX-tooling sibling joins the family), two entries became standing rules in CLAUDE.md and a source-file contract comment, one became a tracked gate-debt item, and pure duplicates were deleted. The buffer now does what it was designed for: capture fresh mistakes, then empty itself into infrastructure.

### 11. The determinism credo, stated outward

Tom ratified the positioning line "MX prefers determinism, not inference. Same result every time." The root manifesto gained a dedicated section (explicit beats inferred, recorded beats remembered, a result you can reproduce beats one you can only explain), the memory-sync blog draft states it in miniature, the line is saved as travelling memory with usage rules (never claim it for LLM judgement steps), and the manifesto PDF was regenerated with the full provenance chain binding it to the credo-bearing source. A blog post telling the memory-sync story for outside readers sits at Zone 2 noindex with every gate green, publish-ready pending review.

### 12. Structural convergence becomes enforceable

The StoryScope finding (Russell et al., 2026, arXiv:2604.03136) became the estate's first structure-level writing enforcement. The rulebook gained Pattern 28, the MX-house structure demand: structure varies across sections, bold claims stay bold through rewrites, an open question may survive to the page, the theme is never spelled out. A new deterministic scanner (Scan J in the humanizer chain) detects the mechanically checkable subset - moral-of-the-story closers in the closing paragraphs, endings that restate the opening, mean-seeking sentence and paragraph rhythm, uniform section shapes - with register calibration so audit reports keep their conclusions and lose only the sermonising. The judgement subset the scripts cannot reach (hedged boldness, every-thread-resolved endings) went to the humanizer's reading pass, with the hard rule that a rewrite never resolves an author's open question and never smooths a bold claim. Wiring is complete across the skill family and the test chain; the scanner's false-positive sweep drove two precision fixes (adjectival "the moral", author-bio footers) before anything shipped.

### 13. Drift fixed where found

The retired book title was scrubbed estate-wide: the news skill, the writing rulebook's official-titles list, the manuscript-rule config, Appendix M's frontmatter templates and worked examples, and the served appendices HTML (regenerated). The fossil repository-architecture document was rewritten end to end (v2.0): it now owns the why (hub-and-mount rationale, source-to-served flow, determinism and gates, authority model) and defers the where to UBERCOG, so it cannot drift the same way again. The /opportunity skill's CRM paths were repointed from a pre-reorganisation layout to the real per-prospect folders, and the appendices generator lost three of its own drifts: a dead news-page URL in its llms.txt, manually-maintained-page checks aimed at locations the files left long ago, and a Gate 14 gap where its regenerated index page shipped without the source-frontmatter comment - the generator now backfills its own output at the write boundary. An orphaned legacy artefact still carrying the retired title was deleted from mx-outputs.

### 14. Average Machines: the scanner's own story, drafted

The motivating text became a blog draft (Zone 2, noindex): the study, the convergence finding, what we built, and the detail that the scanner flagged the draft's own original closing line - a tidy moral about competence and moats - which is gone for exactly the reason the post describes. The draft passes every scanner including the new one, plus the spell gate after a vocabulary update. A new business-opportunities database (mx-crm/business/, the location the /opportunity skill documented but which never existed) records the audit add-on this enables, with three service shapes and negotiating-position pricing.

### 15. CRM caught up with IDHL reality

Jonathan Healey's contact record was upgraded from "Prospect" to founding sponsor of The Gathering (confirmed 11 May; paperwork still outstanding, now an open item). A new contact records Liam Goldfinch: IDHL practitioner, Kentico MVP, attended the 8 April Leeds MX presentation, and presented an AI-assisted website-rebuild case study at the Kentico MVP Summit in Brno whose stated conclusion - structured context and specifications beat clever prompting - is the MX thesis arrived at independently from the delivery floor. He is a second thread into the sponsor relationship and a candidate for Gathering draft review.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 (vNext session) + 12 hub and 4 mx-outputs (audit session) |
| Cloudflare routes added | 2 |
| Production endpoints verified | 5 |
| Audit suite tests passing | 796 |
| Pre-push gates passing | 25 of 25 |
| New gate scripts | 1 (plus host-slug and cross-check core libs, both unit-tested) |
| External-domain deliveries | 1 (atmors.netlify.app, tagged PDF/UA-1 with provenance pair) |
| Memories now travelling with the repo | 120+ (project and feedback types; personal stays device-local) |
| LEARNINGS buffer | 230 entries to 0 (distilled to six themed gotcha docs, one new) |
| Hooks self-declaring enforcement | every hook (blocking / advisory / sync), generated registry |
| New push gate | Gate 26 (device and repo memory in sync) |
| Structural-convergence scanner | 5 categories, 22 test assertions, wired into the test chain |
| Scanner calibration | 50 manuscript chapters clean; 73 blog sources, 1 plausible flag |
| Business-opportunities database | created, 1 entry (audit content-authenticity add-on) |
| Architecture doc rewritten | doc-architecture.md v2.0 (fossil to current, defers to UBERCOG) |
| Blog drafts at Zone 2 | 2 (memory-that-travels, average-machines) |

---

## Why It Matters

REGINALD's trust story rests on a verifier resolving did:web:reginald.allabout.network with standard libraries and getting the registry's signing key. That resolution now works end-to-end on production infrastructure, which moves the "verify with your own tools" claim from architecture diagram to demonstrable fact. At the same time the book-sales pipeline - current real revenue - was identified as a blast-radius risk on the same hostname and explicitly protected.

---

## Decisions Made

- Path-scoped routes over full-host cutover: vNext takes only the paths it owns; revenue paths stay on the existing worker. Reversible by deleting two routes.
- No new Cloudflare credentials issued: the cutover ran on the operator's existing wrangler OAuth session, keeping the credential surface flat.
- Cross-check gate is cog-path-only (operator contract restored): the npm surface carries the deterministic gates; the LLM claims-vs-evidence reader runs when the cog wrapper sets MX_AUDIT_COG_PATH=1.
- Balanced Scorecard qualitative grades derive from measured data with a stated basis; template-asserted ratings are gone.
- Storage folder names never end in a macOS bundle extension; the slug derivation enforces it with a .d guard.
- Structural-convergence enforcement runs at all three layers (rulebook, deterministic scanner, humanizer judgement) and binds all registers, calibrated per surface; the write-boundary vocabulary hook was deliberately NOT extended because the closer phrases are position-dependent and fail its every-hit-is-a-violation admission rule.
- The retired book title is gone from every current surface; official titles are "MX-Protocols" and "MX: The Handbook".
- The audit golden-master fixture decision stays with the audit session that changed the error-page phrasing.

---

## Next Steps

- Salva to confirm the path-split shape works for vNext and declare the two routes in his worker config so future deploys keep them in lockstep.
- Salva to refresh the stale comments in the vNext worker config (it still describes the hostname as serving the v1 worker).
- Consider a short mx-site post on did:web resolution going live once Salva calls vNext ready.
- Review and publish the memory-that-travels blog draft (Zone 2, gates green; promote command in REMINDERS), and weigh the productisation angle (Gathering draft note, Maxine hook, consulting story).
- Rulebook rewrite phases still open: skills consolidation, UBERCOG rewrite, CLAUDE.md slim - one session each per the approved plan; the plan-state memory travels with the repo.
- Propagate the structural-convergence concept into the manuscripts via /manuscript-propagate (Tom approved; in progress).
- Review and publish the average-machines blog draft (Zone 2, gates green).
- Pilot the content-authenticity section in the next scheduled audit deliverables, then price it as the named add-on per the opportunities database entry.

---

## Commit Log

| Hash | Description |
|------|-------------|
| e41b42f3 | REGINALD vNext cutover: record path-split routing for reginald.allabout.network |
| 17e7c902 | Parallel session work swept in: humanizer structure scanner, CRM contacts (Healey sponsorship record, Goldfinch contact), agent-wallet draft, page-lander template, manuscripts |
| aad9a5e4 | Audit pipeline: pre-PDF claims-vs-evidence cross-check gate; evidence-accuracy fixes |
| dfb59a34 | Cross-check hardening: cache schema v2, tested core lib, data-derived scorecard grades (also swept in: outreach capability update, pitch-family refresh + humanizer pass) |
| b9ad7de3 | REMINDERS: re-delete the review-docs pitch-family item (resurrected by a concurrent snapshot) |
| 4e644851 | Required mx fields on the cross-check prompt files (Gate 10) |
| 4dc3f15a | Finder-safe hostSlug: .d guard for macOS bundle-extension TLDs |
| 5bb7bc61 | Intent CMS PRD: generator schema.org href canonicalisation and ASCII-quote emission |
| 9212488f | Architecture cog and audit cogs current with the host-slug SSOT and cross-check gate |
| (mx-outputs) e77e69d5, 67631395, d541b5df, 6a6befe2 | atmors delivery, derived-scorecard regen, .d folder rename, consistent-path regen |

| 72ce58be | Memory travels with the repo: merge wiring, hooks registration, Gate 26 |
| 349c7986 | Memory: rulebook-rewrite plan state (phases 1-2 live, 3-6 pending) |
| b329f911 | Blog: memory-that-travels-with-the-repo (Zone 2 draft); REMINDERS: product angle |
| 9e42bc56 | Determinism, not inference: manifesto credo, blog passage, positioning memory |
| 3870459c | Bump mx-outputs: manifesto PDF v1.1 (determinism-not-inference section) |
| ab679094 | LEARNINGS sweep, named-destination batch: distil to the five gotcha docs |
| 70550f69 | LEARNINGS to minimum: full migration sweep, buffer holds only fresh entries |
| 2186a22f | LEARNINGS buffer emptied: final entries become infrastructure or migrate |
| (mx-outputs) 8e0df773 | session-check: appendix sync skips cleanly when no consolidated source exists |

| (mx-outputs) 79e6aeb5 | Appendices index regenerated with source frontmatter; Average Machines blog draft (Zone 2, noindex) |

The writing session's memory-sync engine and hook-registry files landed inside the audit session's commits (e781808e, dfb59a34) through concurrent staging; content verified byte-identical, recorded here rather than re-committed. The style session's stack (Pattern 28, scan-structure, the drift fixes, the opportunities database, the doc-architecture rewrite, LEARNINGS entries since migrated to the gotcha cogs) rode 17e7c902 and the audit session's later sweep commits the same way; content verified on disk, recorded here rather than re-committed.
