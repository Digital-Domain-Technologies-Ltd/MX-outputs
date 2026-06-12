---
title: "Co-Directors Report - REGINALD vNext Cutover; the Audit Cross-Check Becomes a Gate"
description: "did:web:reginald.allabout.network is live against the vNext worker via path-scoped routes with revenue paths protected; the audit's claims-vs-evidence verification now runs as a gate inside the pipeline, with the defects it caught fixed at source"
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-12-evening-report.md
  purpose: "did:web:reginald.allabout.network is live against the vNext worker via path-scoped routes with revenue paths protected; the audit's claims-vs-evidence verification now runs as a gate inside the pipeline, with the defects it caught fixed at source"
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - REGINALD vNext Cutover; the Audit Cross-Check Becomes a Gate"]
---

# Co-Directors Report - REGINALD vNext Cutover; the Audit Cross-Check Becomes a Gate

**Date:** 12 June 2026 - Evening
**Segment:** evening (since 5pm)

---

## Summary

REGINALD vNext is now live on the production hostname. did:web:reginald.allabout.network resolves against the vNext worker's DID document, and the vNext registry API answers at reginald.allabout.network/v1/*. The cutover was done with two path-scoped Cloudflare routes rather than the full-host swap originally specified, because investigation showed the hostname also carries live book-sales revenue (Stripe webhook, checkout, emailed download links) on a different worker - a full swap would have broken it. The principal partner leading the vNext track is unblocked on his next step without needing any new account permissions.

In parallel, the audit pipeline's final integrity check - reading every claim in the report against the evidence the audit collected - now runs as compute inside the pipeline, before the PDF is rendered (on the cog path, by operator contract). Its first live run against a new external domain caught six classes of defect in our own instrumentation, every one fixed in the crawler, the gates, or the template rather than in the report; the Balanced Scorecard's human-experience grades now derive from measured data instead of template-asserted "Excellent" rows; and a macOS-specific storage hazard (folders named after .app hostnames rendering as application bundles in Finder) was closed at the slug-derivation source.

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

---

## Next Steps

- Salva to confirm the path-split shape works for vNext and declare the two routes in his worker config so future deploys keep them in lockstep.
- Salva to refresh the stale comments in the vNext worker config (it still describes the hostname as serving the v1 worker).
- Consider a short mx-site post on did:web resolution going live once Salva calls vNext ready.

---

## Commit Log

| Hash | Description |
|------|-------------|
| e41b42f3 | REGINALD vNext cutover: record path-split routing for reginald.allabout.network |
| 17e7c902 | Parallel session work swept in: humanizer structure scanner, CRM contacts, agent-wallet draft, page-lander template, manuscripts |
| aad9a5e4 | Audit pipeline: pre-PDF claims-vs-evidence cross-check gate; evidence-accuracy fixes |
| dfb59a34 | Cross-check hardening: cache schema v2, tested core lib, data-derived scorecard grades |
| 4e644851 | Required mx fields on the cross-check prompt files (Gate 10) |
| 4dc3f15a | Finder-safe hostSlug: .d guard for macOS bundle-extension TLDs |
| 5bb7bc61 | Intent CMS PRD: generator schema.org href canonicalisation and ASCII-quote emission |
| 9212488f | Architecture cog and audit cogs current with the host-slug SSOT and cross-check gate |
| (mx-outputs) e77e69d5, 67631395, d541b5df, 6a6befe2 | atmors delivery, derived-scorecard regen, .d folder rename, consistent-path regen |

Remaining segment commits (repo-travelling memory wiring, blog drafts, manifesto credo, prose-score-binding gate) belong to the concurrent writing session and are reported separately.
