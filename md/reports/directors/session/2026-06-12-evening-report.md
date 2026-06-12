---
title: "Co-Directors Report - REGINALD vNext Production Cutover"
description: "did:web:reginald.allabout.network is live against the vNext worker via path-scoped routes; book sales and the publisher API protected throughout"
author: "Tom Cranstoun"
created: 2026-06-12
modified: 2026-06-12
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-12-evening-report.md
  purpose: "did:web:reginald.allabout.network is live against the vNext worker via path-scoped routes; book sales and the publisher API protected throughout"
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - REGINALD vNext Production Cutover"]
---

# Co-Directors Report - REGINALD vNext Production Cutover

**Date:** 12 June 2026 - Evening
**Segment:** evening (since 5pm)

---

## Summary

REGINALD vNext is now live on the production hostname. did:web:reginald.allabout.network resolves against the vNext worker's DID document, and the vNext registry API answers at reginald.allabout.network/v1/*. The cutover was done with two path-scoped Cloudflare routes rather than the full-host swap originally specified, because investigation showed the hostname also carries live book-sales revenue (Stripe webhook, checkout, emailed download links) on a different worker - a full swap would have broken it. The principal partner leading the vNext track is unblocked on his next step without needing any new account permissions.

---

## What Was Done

### 1. REGINALD vNext production cutover

The vNext track needed reginald.allabout.network cut over from the v1 worker. The original instructions assumed the hostname was bound to the retired v1 API worker; it is in fact a zone route on the estate's main worker, which serves the Stripe webhook, book checkout, buyer download links, the publisher API, and the landing page on that exact host. Instead of the irreversible full-host custom-domain swap, two path-scoped routes now send /.well-known/did.json and /v1/* to the vNext worker while everything else stays where it was. Cloudflare resolves the most specific route, so the change is additive and rollback is deleting two route ids. All paths were verified live after the change: the DID document resolves, the vNext index answers, and the book-sales endpoints still respond from the original worker.

### 2. Access problem dissolved rather than solved

The session opened as a Cloudflare permissions question: the vNext lead could not create an API token scoped to the allabout.network zone because his membership role does not surface the zone. Three options were assessed (account-owned token, role elevation, operator-side cutover); the operator-side path won because the local wrangler OAuth session already held every needed scope. No new token was minted, no role was widened, and the standing credential surface is unchanged.

### 3. Routing knowledge captured

The path-split shape (which worker owns which paths on reginald.allabout.network, and why a full-host cutover must never be done without relocating the revenue paths first) is recorded in the repo-tracked memory so any future session inherits it before touching that hostname.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 1 (this session; 21 concurrent-session commits in segment) |
| Files changed | 1 |
| Lines added | +18 |
| Lines removed | -0 |
| Repositories | 1 |
| Cloudflare routes added | 2 |
| Production endpoints verified | 5 |

---

## Why It Matters

REGINALD's trust story rests on a verifier resolving did:web:reginald.allabout.network with standard libraries and getting the registry's signing key. That resolution now works end-to-end on production infrastructure, which moves the "verify with your own tools" claim from architecture diagram to demonstrable fact. At the same time the book-sales pipeline - current real revenue - was identified as a blast-radius risk on the same hostname and explicitly protected.

---

## Decisions Made

- Path-scoped routes over full-host cutover: vNext takes only the paths it owns; revenue paths stay on the existing worker. Reversible by deleting two routes.
- No new Cloudflare credentials issued: the cutover ran on the operator's existing wrangler OAuth session, keeping the credential surface flat.

---

## Next Steps

- Salva to confirm the path-split shape works for vNext and declare the two routes in his worker config so future deploys keep them in lockstep.
- Salva to refresh the stale comments in the vNext worker config (it still describes the hostname as serving the v1 worker).
- Consider a short mx-site post on did:web resolution going live once Salva calls vNext ready.

---

## Commit Log

| Hash | Description |
|------|-------------|
| _pending_ | Memory: reginald.allabout.network path-split routing shape |

Concurrent sessions landed separate work in this segment (cross-check hardening, repo-travelling memory wiring, blog drafts); those commits are reported by their own sessions and are excluded here to avoid double-counting.
